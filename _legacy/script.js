(function(){
  "use strict";
  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var canHover = window.matchMedia && window.matchMedia('(hover:hover) and (pointer:fine)').matches;

  /* ───────── Scroll reveal ───────── */
  var revealEls = document.querySelectorAll('[data-reveal]');
  if(reduce || !('IntersectionObserver' in window)){
    revealEls.forEach(function(el){el.classList.add('is-visible');});
  } else {
    var io = new IntersectionObserver(function(entries){
      entries.forEach(function(e){
        if(e.isIntersecting){ e.target.classList.add('is-visible'); io.unobserve(e.target); }
      });
    },{threshold:0.15, rootMargin:'0px 0px -8% 0px'});
    revealEls.forEach(function(el){io.observe(el);});
  }

  /* ───────── Magnetic CTA buttons (desktop only) ───────── */
  if(canHover && !reduce){
    document.querySelectorAll('.btn').forEach(function(btn){
      btn.addEventListener('pointermove', function(ev){
        var r = btn.getBoundingClientRect();
        var mx = (ev.clientX - r.left - r.width/2) / r.width;
        var my = (ev.clientY - r.top - r.height/2) / r.height;
        btn.style.transform = 'translate('+(mx*6).toFixed(2)+'px,'+(my*5).toFixed(2)+'px) scale(1.01)';
      });
      btn.addEventListener('pointerleave', function(){ btn.style.transform=''; });
    });
  }

  /* ═════════════════ Hero blob — cinematic darkroom render ═════════════════
     One elongated ellipse tilted ~30°, built from 3 overlaid radial gradients
     (green halo → amber core → bright amber hotspot) with different phase
     offsets, speeds and opacity. Ultra-slow drift + slow unified rotation.
     Full-canvas film grain on top. Dark scene — additive light stays local.
  ──────────────────────────────────────────────────────────────────────────*/
  var canvas = document.getElementById('blob');
  var ctx = canvas.getContext('2d', {alpha:true});
  var W=0, H=0, dpr=1;

  var BASE_ANGLE = Math.PI/6;   // 30° tilt of the long axis
  var ROT = 0.06;               // shared, very slow rotation

  // The form flows along its tilted long axis through the monopo "mercury flow"
  // palette: deep green → amber/gold (bright core) → warm copper/oxblood.
  //   mercury-flow = rgb(160,224,171) → rgb(255,172,46) → rgb(165,45,37)
  // along/perp = offset of each node along / across that axis (fraction of maxDim).
  var nodes = [
    { along: 0.00, perp: 0.00, r:0.58, sx:1.44, sy:0.50, sp:0.45, ph:0.0, ga:0.90,
      stops:[[0,'rgba(20,70,30,0.34)'],[0.55,'rgba(8,30,14,0.12)'],[1,'rgba(8,30,14,0)']] },     // deep-green ambient halo
    { along: 0.30, perp: 0.02, r:0.30, sx:1.15, sy:0.62, sp:0.60, ph:1.1, ga:0.95,
      stops:[[0,'rgba(45,130,60,0.40)'],[0.5,'rgba(18,55,25,0.16)'],[1,'rgba(18,55,25,0)']] },    // green terminus
    { along: 0.02, perp: 0.00, r:0.31, sx:1.18, sy:0.60, sp:0.75, ph:2.4, ga:1.00,
      stops:[[0,'rgba(255,172,46,0.50)'],[0.5,'rgba(170,105,30,0.22)'],[1,'rgba(170,105,30,0)']] }, // amber / gold core
    { along:-0.30, perp:-0.02, r:0.27, sx:1.12, sy:0.62, sp:0.90, ph:3.9, ga:0.95,
      stops:[[0,'rgba(165,45,37,0.46)'],[0.5,'rgba(95,30,22,0.18)'],[1,'rgba(95,30,22,0)']] }      // copper / oxblood terminus
  ];

  function drawNode(b,t){
    var maxd = Math.max(W,H);
    var ang = BASE_ANGLE + t*ROT + Math.sin(t*b.sp + b.ph)*0.05;   // unified spin + organic wobble
    var ux = Math.cos(ang), uy = Math.sin(ang);                    // along-axis unit vector
    var px = -uy, py = ux;                                         // perpendicular
    var cx = (0.50 + Math.sin(t*0.40)*0.015) * W;                  // whole-form slow drift
    var cy = (0.46 + Math.cos(t*0.33)*0.012) * H;
    var aOff = (b.along + Math.sin(t*b.sp + b.ph)*0.02) * maxd;
    var pOff = (b.perp + Math.cos(t*b.sp*0.8 + b.ph)*0.02) * maxd;
    var x = cx + ux*aOff + px*pOff;
    var y = cy + uy*aOff + py*pOff;
    var breathe = 1 + Math.sin(t*b.sp + b.ph)*0.05;
    var R = b.r*maxd*breathe;
    var ga = b.ga * (0.90 + 0.10*Math.sin(t*b.sp*1.2 + b.ph));     // gentle opacity drift

    ctx.save();
    ctx.globalAlpha = ga;
    ctx.translate(x,y);
    ctx.rotate(ang);
    ctx.scale(b.sx, b.sy);
    var g = ctx.createRadialGradient(0,0,0, 0,0,R);
    for(var i=0;i<b.stops.length;i++) g.addColorStop(b.stops[i][0], b.stops[i][1]);
    ctx.fillStyle = g;
    ctx.beginPath(); ctx.arc(0,0,R,0,Math.PI*2); ctx.fill();
    ctx.restore();
  }

  /* ── film grain: one noise tile, drawn full-canvas with a random per-frame
     offset (cheap GPU fill — no getImageData readback) ── */
  var GT = 110, grainPat = null;
  function buildGrain(){
    var nc = document.createElement('canvas'); nc.width = GT; nc.height = GT;
    var nx = nc.getContext('2d');
    var id = nx.createImageData(GT,GT), d = id.data;
    for(var i=0;i<d.length;i+=4){
      var v = Math.random()*255;
      d[i]=d[i+1]=d[i+2]=v; d[i+3]=255;
    }
    nx.putImageData(id,0,0);
    grainPat = ctx.createPattern(nc,'repeat');
  }
  function drawGrain(){
    if(!grainPat) return;
    ctx.save();
    ctx.setTransform(1,0,0,1,0,0);            // device pixels → crisp 1:1 grain
    ctx.globalCompositeOperation = 'screen';  // shows on the dark frame, stays subtle
    ctx.globalAlpha = 0.055;
    var ox = (Math.random()*GT)|0, oy = (Math.random()*GT)|0;
    ctx.translate(-ox,-oy);
    ctx.fillStyle = grainPat;
    ctx.fillRect(0,0, canvas.width+GT, canvas.height+GT);
    ctx.restore();
  }

  function render(t){
    ctx.clearRect(0,0,W,H);
    ctx.globalCompositeOperation = 'lighter';
    for(var i=0;i<nodes.length;i++) drawNode(nodes[i],t);
    ctx.globalCompositeOperation = 'source-over';
    ctx.globalAlpha = 1;
    drawGrain();
  }

  function resize(){
    dpr = Math.min(window.devicePixelRatio||1, 1.5);
    W = canvas.clientWidth; H = canvas.clientHeight;
    canvas.width  = Math.max(1, Math.round(W*dpr));
    canvas.height = Math.max(1, Math.round(H*dpr));
    ctx.setTransform(dpr,0,0,dpr,0,0);
    if(reduce) render(0);  // single static frame
  }

  var start=null;
  function loop(ts){
    if(start===null) start=ts;
    var t = (ts-start)/1000 * 0.18;  // ≈ t += 0.003 per frame @60fps, frame-rate independent
    render(t);
    requestAnimationFrame(loop);
  }

  buildGrain();
  resize();
  window.addEventListener('resize', resize, {passive:true});
  window.addEventListener('orientationchange', function(){ setTimeout(resize,150); });

  canvas.style.animation = 'blobIn 2.5s ease 0.5s forwards';  // fade the render in
  if(!reduce) requestAnimationFrame(loop);
})();
