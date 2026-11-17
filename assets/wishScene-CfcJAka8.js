import{bj as Xt,bk as jt,bl as Qt,bm as $t,aT as Zt,bn as Jt,bo as Yt,bp as eo,bq as to,br as oo,bs as ao,N as Ft,bt as io,W as no,J as ht,aJ as ro,O as lo,be as I,bu as gt,bv as wt,V as p,ae as de,bf as Qe,bw as so,bx as co,by as uo,bz as fo,ai as vo,$ as D,aI as $e,a7 as E,ak as po,a0 as Ze,am as le,bi as R,bh as ke,ap as Ue,aB as Je,bA as xt,bB as yt,bC as mo,bD as ho,K as bt,bE as St,bF as go,al as Be}from"./index-koxOQLqq.js";import{w as Mt,F as Xe}from"./surfaces-CH3naGi8.js";import"./Dialog-DU0jC-jY.js";import"./Button-Bz2d-en4.js";import"./repoTab-CCvSenTd.js";import"./useWorkshopScene-DtaTgHHv.js";import"./ShopThumb-C6YU973M.js";import"./weather-tSNR5Ost.js";import"./state-CF_stQCu.js";import"./patternIds-B84z8pFJ.js";import"./RailHeader-PuYCL_vT.js";import"./diagnostics-BIjw09-u.js";import"./paneDrag-C_yCdlq6.js";import"./kinds-DuUbgUyg.js";import"./paint-B105i8t5.js";import"./sliders-horizontal-DzsYsuPC.js";import"./tamas-DPGkqpAL.js";import"./designed-CPu2rPKw.js";import"./rotate-ccw-DTX6wCiQ.js";import"./user-plus-BND1VUOi.js";import"./user-minus-C3Yzhbvv.js";import"./RoomSkeleton-CHBbpQ8w.js";const Se={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#elif defined( CUSTOM_TONE_MAPPING )

				gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};class wo extends Xt{constructor(){super(),this.isOutputPass=!0,this.uniforms=jt.clone(Se.uniforms),this.material=new Qt({name:Se.name,uniforms:this.uniforms,vertexShader:Se.vertexShader,fragmentShader:Se.fragmentShader}),this._fsQuad=new $t(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,o,a){this.uniforms.tDiffuse.value=a.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},Zt.getTransfer(this._outputColorSpace)===Jt&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Yt?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===eo?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===to?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===oo?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===ao?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Ft?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===io&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(o),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}const xo={dark:{ladder:[[.2,.46,1],[.64,.24,1],[1,.6,.14]],hor:[.09,.135,.27],rim:[.36,.42,.6],lit:[.25,.3,.47],dim:[.1,.13,.25],deep:[.06,.08,.16],blend:.42,top:[.006,.01,.034],mid:[.018,.038,.115],low:[.045,.085,.2],wisp:[.16,.2,.34],wispMix:.12,star:[.75,.82,1],streak:[.62,.74,1],streakGain:.6,ink:0,glow:.78,cover:.55,bloom:.42,gold:.8,veil:[.004,.008,.03],veilAlpha:.3},light:{ladder:[[.2,.46,1],[.64,.24,1],[1,.6,.14]],hor:[.78,.87,.99],rim:[1,1,1],lit:[.95,.97,1],dim:[.72,.79,.96],deep:[.55,.64,.9],blend:.5,top:[.05,.11,.42],mid:[.12,.28,.76],low:[.4,.6,.94],wisp:[.9,.95,1],wispMix:.1,star:[0,0,0],streak:[.9,.95,1],streakGain:.45,ink:0,glow:1,cover:1,bloom:.5,gold:.55,veil:[.02,.06,.24],veilAlpha:.22},sketchbook:{ladder:[[.1,.5,.56],[.88,.34,.28],[.92,.55,.05]],hor:[1.017,.979,.874],rim:[.271,.259,.246],lit:[.962,.945,.889],dim:[.869,.83,.727],deep:[.769,.705,.566],blend:.5,top:[.962,.865,.588],mid:[1.004,.924,.692],low:[1.051,.989,.794],wisp:[.581,.773,.761],wispMix:.3,star:[0,0,0],streak:[.057,.051,.046],streakGain:1,ink:.45,glow:.7,cover:1.3,bloom:.3,gold:.7,veil:[.057,.051,.046],veilAlpha:.2},midnight:{ladder:[[.36,.74,.7],[.92,.46,.6],[.94,.78,.42]],hor:[.306,.309,.364],rim:[.727,.758,.865],lit:[.418,.431,.514],dim:[.324,.329,.388],deep:[.269,.271,.315],blend:.42,top:[.203,.203,.219],mid:[.227,.227,.251],low:[.246,.246,.278],wisp:[.353,.359,.425],wispMix:.18,star:[.727,.758,.865],streak:[.71,.74,.85],streakGain:.5,ink:0,glow:.78,cover:.55,bloom:.42,gold:.8,veil:[.01,.01,.03],veilAlpha:.3}};function z(t){return new p(t[0],t[1],t[2])}const me=new p(1,1,1),je={blue:0,purple:1,gold:2},At={blue:.42,purple:.62,gold:1},Te=new p(-30,30,-118),kt=new p(1,-.45,.35).normalize(),yo=100,ze=kt.clone().multiplyScalar(yo),De=.7,bo=30,Q=new p(4.2,2,-32),So=new p(.85,7.4,-32),zt=.95,Mo=1.05,Ao=1.18,Ct=30,Co=new p(0,6.5,-60),We=new p(1.6,3.4,-60),Me=new p(-200,-40,-320),Ae=new p(400,190,250),Ce=.42,oe=72,Ee=1.14,Fe=2,qe=46,_o=26e5,To=1.5,Eo=2.2,Rt=-1e3,Fo=new p(1,0,0),ko=new p(0,1,0),Pt={blending:ho,blendEquation:mo,blendSrc:yt,blendDst:xt,blendSrcAlpha:yt,blendDstAlpha:xt},Nt=`
uniform vec3 uBlue;
uniform vec3 uPurple;
uniform vec3 uGold;
uniform float uTier;
uniform vec2 uMorph;
vec3 wishColor(float t) {
  vec3 c = uBlue;
  if (uTier > 0.5) c = mix(c, uPurple, smoothstep(uMorph.x, uMorph.x + 0.16, t));
  if (uTier > 1.5) c = mix(c, uGold, smoothstep(uMorph.y, uMorph.y + 0.16, t));
  return c;
}`,zo=`
uniform vec3 uAnchor;
vec3 cruiseAt(float t) {
  return uAnchor + vec3(1.8 * sin(t * 0.83) + 0.6 * sin(t * 2.1 + 1.3), 1.2 * sin(t * 1.07 + 0.4) + 0.45 * sin(t * 2.9), 1.5 * sin(t * 0.61 + 2.0));
}`,It=`
float h11(float n) { return fract(sin(n * 127.1 + 0.37) * 43758.5453); }
float h21(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
float vnoise(vec2 p) {
  vec2 i = floor(p);
  vec2 f = fract(p);
  vec2 u = f * f * (3.0 - 2.0 * f);
  return mix(mix(h21(i), h21(i + vec2(1.0, 0.0)), u.x), mix(h21(i + vec2(0.0, 1.0)), h21(i + vec2(1.0, 1.0)), u.x), u.y);
}
float fbm(vec2 p) {
  float v = 0.0;
  float a = 0.5;
  for (int i = 0; i < 5; i++) {
    v += a * vnoise(p);
    p = p * 2.03 + 17.1;
    a *= 0.5;
  }
  return v;
}`,Ke=`
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = vec4(position.xy, 0.9999, 1.0);
}`,Ro=`
varying vec2 vUv;
uniform vec3 uHor;
uniform vec3 uRim;
uniform vec3 uLit;
uniform vec3 uDim;
uniform vec3 uDeep;
uniform float uBlend;
uniform float uLayer;
uniform float uAspect;
${It}

float smin(float a, float b, float k) {
  float h = clamp(0.5 + 0.5 * (b - a) / k, 0.0, 1.0);
  return mix(b, a, h) - k * h * (1.0 - h);
}

float ridge(float x, float layer) {
  if (layer < 0.5) return -0.285 + 0.022 * sin(x * 2.1 + 0.6) + 0.025 * smoothstep(0.3, 1.0, x);
  return -0.37 + 0.13 * (1.0 - smoothstep(-0.8, -0.05, x)) + 0.3 * smoothstep(0.22, 0.95, x) + 0.03 * sin(x * 4.1 + 1.3) + 0.015 * sin(x * 9.7);
}

vec3 lobe(float k, float w, float layer, float seed) {
  float size = h11(k + seed);
  float r = w * (0.5 + 0.8 * size * size);
  float cx = (k + 0.5 + 0.55 * (h11(k * 1.3 + seed) - 0.5)) * w;
  float cy = ridge(cx, layer) - r + r * (0.05 + 0.5 * h11(k * 2.7 + seed));
  return vec3(cx, cy, r);
}

float crown(float x, float w, float layer, float seed) {
  float c = floor(x / w);
  float top = -10.0;
  for (int i = -2; i <= 2; i++) {
    vec3 s = lobe(c + float(i), w, layer, seed);
    float dx = x - s.x;
    if (abs(dx) < s.z) top = max(top, s.y + sqrt(s.z * s.z - dx * dx));
  }
  return top;
}

float cloud(vec2 p, float layer, float w, float seed) {
  float sd = p.y - (ridge(p.x, layer) - w * 0.35);
  float c = floor(p.x / w);
  for (int i = -2; i <= 2; i++) {
    vec3 s = lobe(c + float(i), w, layer, seed);
    sd = smin(sd, length(p - s.xy) - s.z, w * 0.06);
  }
  float w2 = w * 0.3;
  float c2 = floor(p.x / w2);
  for (int i = -2; i <= 2; i++) {
    float k = c2 + float(i);
    if (h11(k * 7.7 + seed + 50.0) < 0.22) continue;
    float r = w2 * (0.45 + 0.75 * h11(k + seed + 50.0));
    float cx = (k + 0.5 + 0.5 * (h11(k * 1.9 + seed + 50.0) - 0.5)) * w2;
    float top = crown(cx, w, layer, seed);
    if (top < -5.0) continue;
    float cy = top - r * (0.3 + 0.45 * h11(k * 3.3 + seed + 50.0));
    sd = smin(sd, length(p - vec2(cx, cy)) - r, w2 * 0.12);
  }
  return sd + (fbm(p * 18.0 + seed) - 0.5) * w * 0.07;
}

vec3 shade(vec2 p, float sd, float layer, float w, float seed, vec3 rim, vec3 lit, vec3 dim, vec3 deep) {
  vec2 toward = normalize(vec2(-0.3, 1.0));
  float deepest = cloud(p + toward * w * 1.2, layer, w, seed);
  float far = cloud(p + toward * w * 0.42, layer, w, seed);
  float near = cloud(p + toward * w * 0.06, layer, w, seed);
  float midtone = smoothstep(-w * 0.1, w * 0.1, deepest);
  float sun = smoothstep(-w * 0.025, w * 0.025, far);
  float edge = smoothstep(-w * 0.01, w * 0.01, near);
  vec3 col = mix(dim, mix(dim, lit, 0.5), midtone);
  col = mix(col, lit, sun);
  col = mix(col, rim, edge * 0.7);
  col = mix(col, deep, smoothstep(0.0, w * 1.4, -sd) * 0.4 * (1.0 - sun));
  col = mix(col, deep, (1.0 - smoothstep(-0.52, -0.3, p.y)) * 0.45);
  return col;
}

void main() {
  vec2 p = (vUv - 0.5) * ${Ee.toFixed(2)} * vec2(uAspect * ${Fe.toFixed(1)}, 1.0);
  float px = 1.6 / 900.0;
  if (uLayer < 0.5) {
    float sd = cloud(p, 0.0, 0.08, 31.0);
    float cover = (1.0 - smoothstep(-px * 4.0, px * 4.0, sd));
    float haze = (1.0 - smoothstep(-0.33, -0.2, p.y)) * 0.45;
    vec3 body = cover > 0.0 ? mix(shade(p, sd, 0.0, 0.08, 31.0, uRim, uLit, uDim, uDeep), uHor, uBlend) : uHor;
    float alpha = cover + haze * (1.0 - cover);
    gl_FragColor = vec4(alpha > 0.0 ? (body * cover + uHor * haze * (1.0 - cover)) / alpha : uHor, alpha);
  } else {
    float sd = cloud(p, 1.0, 0.2, 7.0);
    float cover = (1.0 - smoothstep(-px, px, sd));
    vec3 body = cover > 0.0 ? shade(p, sd, 1.0, 0.2, 7.0, uRim, uLit, uDim, uDeep) : uHor;
    gl_FragColor = vec4(mix(body, uHor, (1.0 - smoothstep(-0.56, -0.42, p.y)) * 0.3), cover);
  }
}`,Po=`
varying vec2 vUv;
uniform sampler2D uBack;
uniform sampler2D uFront;
uniform vec3 uTop;
uniform vec3 uMid;
uniform vec3 uLow;
uniform vec3 uHor;
uniform vec3 uWisp;
uniform vec3 uStar;
uniform float uWispMix;
uniform float uAspect;
uniform float uTime;
uniform float uZoom;
uniform float uShift;
uniform vec2 uGlowAt;
uniform vec3 uGlow;
${It}

vec2 layer(float zoom, float shift) {
  return (vUv - 0.5) / (${Ee.toFixed(2)} * zoom) + 0.5 + vec2(0.0, shift);
}

void main() {
  vec2 uv = layer(uZoom, uShift * 0.9);
  vec2 p = (uv - 0.5) * vec2(uAspect, 1.0);
  float y = uv.y;
  vec3 col = mix(uHor, uLow, smoothstep(0.08, 0.3, y));
  col = mix(col, uMid, smoothstep(0.28, 0.6, y));
  col = mix(col, uTop, smoothstep(0.55, 1.08, y));
  col *= 1.0 - 0.2 * smoothstep(0.45, 1.25, length(vec2(p.x * 0.75, p.y - 0.25)));
  float wisp = smoothstep(0.52, 0.82, fbm(vec2(p.x * 2.6 - p.y * 1.4, p.y * 9.0) + 3.0)) * smoothstep(-0.2, 0.15, p.y);
  col = mix(col, uWisp, wisp * uWispMix);
  if (dot(uStar, uStar) > 0.0) {
    vec2 cell = floor(p * 150.0);
    vec2 jitter = vec2(h21(cell + 3.1), h21(cell + 7.9));
    float star = step(0.992, h21(cell)) * smoothstep(-0.12, 0.2, p.y);
    float dist = length(p * 150.0 - cell - jitter);
    float twinkle = 0.65 + 0.35 * sin(uTime * (2.0 + 3.0 * h21(cell + 5.5)) + h21(cell) * 40.0);
    col += uStar * star * exp(-dist * dist * 9.0) * (0.25 + 0.55 * h21(cell + 1.3)) * twinkle;
  }
  vec2 backUv = layer(uZoom, uShift);
  backUv.x = 0.5 + (backUv.x - 0.5) / ${Fe.toFixed(1)} + 0.13 * sin(uTime * 0.0349);
  backUv.y += 0.0012 * sin(backUv.x * 22.0 + uTime * 0.31);
  vec4 back = texture2D(uBack, backUv);
  col = mix(col, back.rgb, back.a);
  vec2 frontUv = layer(uZoom * 1.015, uShift * 1.12);
  frontUv.x = 0.5 + (frontUv.x - 0.5) / ${Fe.toFixed(1)} + 0.23 * sin(uTime * 0.0349);
  frontUv.y += 0.0018 * sin(frontUv.x * 14.0 - uTime * 0.26);
  vec4 front = texture2D(uFront, frontUv);
  col = mix(col, front.rgb, front.a);
  col = pow(col, vec3(2.2));
  float d = length((vUv - uGlowAt) * vec2(uAspect, 1.0));
  float cover = max(front.a, back.a * 0.7);
  col += uGlow * (cover * exp(-d / 0.42) * 0.5 + exp(-d / 0.3) * 0.05);
  gl_FragColor = vec4(col, 1.0);
}`,No=`
attribute float aAlong;
attribute float aSide;
varying float vAlong;
varying float vSide;
void main() {
  vAlong = aAlong;
  vSide = aSide;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}`,Io=`
varying float vAlong;
varying float vSide;
uniform float uTime;
uniform float uClock;
uniform float uWindow;
uniform float uIntensity;
uniform float uWhite;
uniform float uSoft;
uniform float uFlicker;
uniform float uSeed;
uniform float uOcclude;
${Nt}
void main() {
  float passed = uTime - uWindow * vAlong;
  vec3 c = wishColor(passed);
  float across = clamp(1.0 - abs(vSide), 0.0, 1.0);
  float profile = pow(across, uSoft);
  float fade = pow(clamp(1.0 - vAlong, 0.0, 1.0), 1.7) * smoothstep(0.0, 0.04, vAlong + 0.02);
  float flicker = mix(1.0, 0.45 + 0.55 * sin(vAlong * 38.0 + uSeed * 9.0 - uClock * 24.0), uFlicker);
  vec3 col = mix(c, vec3(1.0), uWhite * across * across) * uIntensity * profile * fade * flicker;
  gl_FragColor = vec4(col, clamp(profile * fade, 0.0, 1.0) * uOcclude * step(0.001, uIntensity));
}`,Oo=`
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}`,Lo=`
varying vec2 vUv;
uniform vec3 uColor;
uniform float uShape;
uniform float uOcclude;
void main() {
  vec2 q = vUv - 0.5;
  float r = length(q);
  float a;
  if (uShape < 0.5) a = exp(-r * r * 70.0) + 0.3 * exp(-r * 10.0);
  else if (uShape < 1.5) a = exp(-abs(q.y) * 110.0) * exp(-abs(q.x) * 4.5) + 0.25 * exp(-abs(q.y) * 22.0) * exp(-abs(q.x) * 8.0);
  else if (uShape < 2.5) {
    float d = r - 0.4;
    a = exp(-d * d * 1764.0) + 0.2 * exp(-d * d * 100.0);
  }
  else a = exp(-abs(q.x) * 170.0) * exp(-abs(q.y) * 3.4) + exp(-abs(q.y) * 170.0) * exp(-abs(q.x) * 3.4) + 0.3 * exp(-r * r * 500.0);
  a *= (1.0 - smoothstep(0.36, 0.5, max(abs(q.x), abs(q.y))));
  gl_FragColor = vec4(uColor * a, clamp(a, 0.0, 1.0) * uOcclude);
}`,Go=`
attribute vec3 aVelocity;
attribute vec4 aLife;
attribute float aKind;
attribute float aFrame;
uniform float uClock;
uniform float uFrame;
uniform vec3 uDrift;
uniform float uPixel;
varying float vAlpha;
varying vec3 vColor;
varying float vKind;
${Nt}
void main() {
  float age = uClock - aLife.x;
  vKind = aKind;
  vColor = wishColor(aLife.w);
  if (age < 0.0 || age > aLife.y) {
    vAlpha = 0.0;
    gl_PointSize = 0.0;
    gl_Position = vec4(2.0, 2.0, 2.0, 1.0);
    return;
  }
  float life = age / aLife.y;
  float drag = aKind < 0.5 ? 0.9 : 3.2;
  vec3 travel = aKind > 1.5 ? aVelocity * age : aVelocity * (1.0 - exp(-drag * age)) / drag;
  vec3 pos = position + travel + vec3(0.0, aKind < 0.5 ? 0.3 : -1.4, 0.0) * age * age - uDrift * (uFrame - aFrame);
  vec4 mv = modelViewMatrix * vec4(pos, 1.0);
  vAlpha = aKind > 1.5 ? sin(life * 3.14159) : smoothstep(0.0, 0.06, life) * (1.0 - life) * (1.0 - life);
  float size = aLife.z * uPixel / -mv.z * (aKind > 1.5 ? 1.0 : 1.0 - 0.45 * life);
  float shown = max(size, 2.5);
  vAlpha *= size * size / (shown * shown);
  gl_PointSize = shown;
  gl_Position = projectionMatrix * mv;
}`,Vo=`
attribute vec3 aVelocity;
attribute vec4 aSeed;
uniform float uClock;
uniform float uRelease;
uniform float uFrame;
uniform vec3 uDrift;
uniform float uPixel;
uniform vec3 uBlue;
varying float vAlpha;
varying vec3 vColor;
varying float vKind;
${zo}
void main() {
  float life = aSeed.y;
  float birth = uClock - mod(uClock - aSeed.x, life);
  float age = uClock - birth;
  vKind = aSeed.w > 0.86 ? 1.0 : 0.0;
  vColor = uBlue;
  if (birth > uRelease) {
    vAlpha = 0.0;
    gl_PointSize = 0.0;
    gl_Position = vec4(2.0, 2.0, 2.0, 1.0);
    return;
  }
  float t = age / life;
  vec3 travel = aVelocity * (1.0 - exp(-1.3 * age)) / 1.3 + vec3(0.0, 0.35, 0.0) * age * age;
  vec3 pos = cruiseAt(birth) + position + travel - uDrift * (uFrame - birth);
  vec4 mv = modelViewMatrix * vec4(pos, 1.0);
  vAlpha = smoothstep(0.0, 0.08, t) * (1.0 - t) * (1.0 - t) * (0.7 + 0.3 * sin(uClock * 5.0 + aSeed.w * 40.0));
  float size = aSeed.z * uPixel / -mv.z * (1.0 - 0.4 * t);
  float shown = max(size, 2.5);
  vAlpha *= size * size / (shown * shown);
  gl_PointSize = shown;
  gl_Position = projectionMatrix * mv;
}`,Ot=`
varying float vAlpha;
varying vec3 vColor;
varying float vKind;
void main() {
  vec2 q = gl_PointCoord - 0.5;
  float r = length(q);
  float a = exp(-r * r * 30.0);
  if (vKind > 0.5) a += (exp(-abs(q.x) * 46.0) * exp(-abs(q.y) * 5.0) + exp(-abs(q.y) * 46.0) * exp(-abs(q.x) * 5.0)) * (vKind > 1.5 ? 1.0 : 0.45);
  a *= (1.0 - smoothstep(0.4, 0.5, max(abs(q.x), abs(q.y))));
  float gain = vKind < 0.5 ? 1.7 : (vKind < 1.5 ? 2.6 : 2.4);
  gl_FragColor = vec4(mix(vColor, vec3(1.0), 0.22) * gain * a * vAlpha, 1.0);
}`,Uo=`
attribute vec2 aCorner;
attribute float aShade;
uniform vec3 uDrift;
uniform float uFrame;
uniform float uSpeed;
uniform float uLength;
uniform vec3 uBoxMin;
uniform vec3 uBoxSize;
uniform vec2 uViewport;
uniform float uWidth;
varying float vAlpha;
varying float vSide;
varying float vEnd;
void main() {
  vec3 p = uBoxMin + mod(position - uDrift * uFrame - uBoxMin, uBoxSize);
  vec3 q = (p - uBoxMin) / uBoxSize;
  vec3 edge = smoothstep(vec3(0.0), vec3(0.14), q) * (vec3(1.0) - smoothstep(vec3(0.86), vec3(1.0), q));
  vec4 a = projectionMatrix * modelViewMatrix * vec4(p, 1.0);
  vec4 b = projectionMatrix * modelViewMatrix * vec4(p + uDrift * uLength * (0.25 + 0.75 * uSpeed), 1.0);
  vec2 dir = (b.xy / b.w - a.xy / a.w) * uViewport;
  float len = length(dir);
  vec2 normal = len > 0.0001 ? vec2(-dir.y, dir.x) / len : vec2(0.0, 1.0);
  vec4 c = mix(a, b, aCorner.x);
  c.xy += normal / uViewport * 2.0 * uWidth * aCorner.y * c.w;
  vSide = aCorner.y;
  vEnd = aCorner.x;
  vAlpha = edge.x * edge.y * edge.z * uSpeed * aShade;
  gl_Position = c;
}`,Bo=`
varying float vAlpha;
varying float vSide;
varying float vEnd;
uniform vec3 uColor;
uniform float uInk;
void main() {
  float a = vAlpha * (1.0 - abs(vSide)) * (1.0 - vEnd) * (1.0 - vEnd);
  gl_FragColor = uInk > 0.0 ? vec4(uColor, a * uInk) : vec4(uColor * a, 1.0);
}`,Do=`
attribute vec3 aVelocity;
attribute vec3 aAxis;
attribute vec3 aSpin;
uniform float uTime;
uniform float uBirth;
uniform vec3 uOrigin;
varying vec2 vUv;
varying float vGlint;
varying float vLife;
mat3 turn(vec3 axis, float angle) {
  float s = sin(angle);
  float c = cos(angle);
  float o = 1.0 - c;
  return mat3(o * axis.x * axis.x + c, o * axis.x * axis.y + axis.z * s, o * axis.z * axis.x - axis.y * s, o * axis.x * axis.y - axis.z * s, o * axis.y * axis.y + c, o * axis.y * axis.z + axis.x * s, o * axis.z * axis.x + axis.y * s, o * axis.y * axis.z - axis.x * s, o * axis.z * axis.z + c);
}
void main() {
  float age = max(uTime - uBirth, 0.0);
  mat3 spin = turn(normalize(aAxis), aSpin.x + aSpin.y * age);
  vec3 center = uOrigin + aVelocity * (1.0 - exp(-2.4 * age)) / 2.4 + vec3(0.0, -2.2, 0.0) * age * age;
  vec4 mv = modelViewMatrix * vec4(center + spin * (position * aSpin.z), 1.0);
  vGlint = abs(normalize(normalMatrix * (spin * vec3(0.0, 0.0, 1.0))).z);
  vUv = uv;
  vLife = uTime < uBirth ? 0.0 : smoothstep(0.0, 0.05, age) * (1.0 - smoothstep(0.9, 1.6, age));
  gl_Position = projectionMatrix * mv;
}`,Wo=`
varying vec2 vUv;
varying float vGlint;
varying float vLife;
uniform vec3 uColor;
void main() {
  vec2 q = abs(vUv - 0.5);
  if (q.x + q.y * 1.5 > 0.5 || vLife <= 0.0) discard;
  float glint = pow(vGlint, 8.0);
  vec3 col = mix(uColor * (0.55 + 0.45 * vGlint), vec3(1.0), glint * 0.5) * (1.0 + glint * 3.5);
  gl_FragColor = vec4(col * vLife, vLife);
}`,_t=`
varying vec3 vNormal;
varying vec3 vView;
varying vec3 vLocal;
varying vec2 vUv;
void main() {
  vLocal = position;
  vUv = uv;
  vec4 mv = modelViewMatrix * vec4(position, 1.0);
  vNormal = normalize(normalMatrix * normal);
  vView = normalize(-mv.xyz);
  gl_Position = projectionMatrix * mv;
}`,qo=`
varying vec3 vNormal;
varying vec3 vView;
varying vec3 vLocal;
uniform vec3 uColor;
uniform float uTime;
uniform float uShine;
void main() {
  vec3 n = normalize(vNormal);
  vec3 v = normalize(vView);
  float facing = clamp(dot(n, v), 0.0, 1.0);
  vec3 key = normalize(vec3(-0.55, 0.75, 0.6));
  vec3 fill = normalize(vec3(0.7, -0.4, 0.45));
  float lit = max(dot(n, key), 0.0);
  float soft = max(dot(n, fill), 0.0);
  float spec = pow(max(dot(n, normalize(key + v)), 0.0), 56.0);
  float fresnel = pow(1.0 - facing, 3.0);
  vec3 r = reflect(-v, n);
  float sky = smoothstep(-0.25, 0.9, r.y) * (0.6 + 0.4 * sin(r.x * 3.2 + uTime * 0.7));
  vec3 metal = mix(uColor, vec3(1.0), 0.3);
  vec3 col = metal * (0.08 + 0.9 * lit * lit) + metal * soft * 0.18;
  col += mix(metal, vec3(1.0), 0.55) * sky * (0.2 + 0.3 * uShine);
  vec3 iris = 0.55 + 0.45 * cos(6.2831 * (vec3(0.0, 0.33, 0.67) + facing * 1.4 + uTime * 0.1));
  col += iris * fresnel * 0.4 * uShine + uColor * fresnel * (0.5 + 0.6 * uShine) + vec3(1.0) * spec * (0.7 + 1.5 * uShine);
  col += uColor * 0.35 * uShine * (1.0 - smoothstep(0.0, 1.4, length(vLocal.xy)));
  gl_FragColor = vec4(col, 1.0);
}`,Ko=`
varying vec3 vNormal;
varying vec3 vView;
varying vec3 vLocal;
varying vec2 vUv;
uniform vec3 uColor;
uniform float uAlpha;
uniform float uTime;
uniform float uShine;
void main() {
  float facing = clamp(abs(dot(normalize(vNormal), normalize(vView))), 0.0, 1.0);
  float angle = atan(vLocal.y, vLocal.x);
  float sweep = pow(0.5 + 0.5 * cos(angle - uTime * 1.1), 14.0) + pow(0.5 + 0.5 * cos(angle + 3.14159 - uTime * 1.1), 14.0);
  vec3 col = mix(uColor, vec3(1.0), 0.4) * (0.5 + 0.7 * pow(1.0 - facing, 1.4)) + mix(uColor, vec3(1.0), 0.7) * sweep * 1.6 * uShine;
  gl_FragColor = vec4(col * uAlpha, 1.0);
}`,Ho=`
varying vec2 vUv;
uniform vec3 uColor;
uniform float uAlpha;
void main() {
  gl_FragColor = vec4(uColor, uAlpha);
}`,Xo=`
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}`,jo=`
varying vec2 vUv;
uniform sampler2D tDiffuse;
uniform float uWave;
uniform vec2 uOrigin;
uniform float uReach;
uniform float uCell;
uniform vec3 uTint;
float hash(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
void main() {
  vec4 scene = texture2D(tDiffuse, vUv);
  if (uWave <= 0.0) {
    gl_FragColor = vec4(scene.rgb, 1.0);
    return;
  }
  vec2 p = gl_FragCoord.xy / uCell;
  vec2 r = vec2(1.0, 1.7320508);
  vec2 centre = r * 0.5;
  vec2 a = mod(p, r) - centre;
  vec2 b = mod(p - centre, r) - centre;
  vec2 local = dot(a, a) < dot(b, b) ? a : b;
  vec2 id = p - local;
  float d = distance(id * uCell, uOrigin) / uReach;
  float start = d * 0.8 + hash(floor(id * 2.0 + 0.5)) * 0.12;
  float shrink = clamp((uWave - start) / 0.24, 0.0, 1.0);
  float near = clamp((uWave - start + 0.06) / 0.06, 0.0, 1.0);
  vec2 q = abs(local);
  float hex = max(dot(q, vec2(0.5, 0.8660254)), q.x);
  float radius = 0.5 * (1.0 - shrink * shrink * (3.0 - 2.0 * shrink));
  float aa = 0.8 / uCell;
  float cover = shrink <= 0.0 ? 1.0 : 1.0 - smoothstep(radius - aa, radius + aa, hex);
  float line = 1.0 - smoothstep(0.6 / uCell, 1.7 / uCell, abs(hex - radius + 0.9 / uCell));
  float glow = line * near * (1.0 - shrink) * (1.0 - shrink) * 0.75;
  vec3 rgb = scene.rgb * cover * (1.0 + 0.22 * near * (1.0 - shrink)) + uTint * glow;
  gl_FragColor = vec4(rgb, clamp(max(cover, glow), 0.0, 1.0));
}`;function b(t,e,o){const a=t[e];a&&(a.value=o)}function Qo(t){return[z(t.ladder[0]),z(t.ladder[1]),z(t.ladder[2])]}function $o(t){return{uBlue:{value:t[0].clone()},uPurple:{value:t[1].clone()},uGold:{value:t[2].clone()},uTier:{value:0},uMorph:{value:new de(-1,-1)}}}function Zo(t,e,o,a,r){return r.copy(t[0]),je[e]>=1&&r.lerp(t[1],E.smoothstep(a,o.morph[0],o.morph[0]+.16)),je[e]>=2&&r.lerp(t[2],E.smoothstep(a,o.morph[1],o.morph[1]+.16)),r}function Tt(t,e){return e.set(Te.x+1.8*Math.sin(t*.83)+.6*Math.sin(t*2.1+1.3),Te.y+1.2*Math.sin(t*1.07+.4)+.45*Math.sin(t*2.9),Te.z+1.5*Math.sin(t*.61+2))}function Lt(t){const e=E.clamp(t,0,1);return e*e*(4.5-5*e+1.5*e*e)}function B(t){return 1-Math.pow(1-E.clamp(t,0,1),3)}function Gt(t){const e=E.clamp(t,0,1);return e<.5?4*e*e*e:1-Math.pow(-2*e+2,3)/2}function Jo(t){const e=E.clamp(t,0,1)-1;return 1+2.9*e*e*e+1.9*e*e}function Vt(t){let e=t>>>0;return()=>{e=e+1831565813>>>0;let o=Math.imul(e^e>>>15,1|e);return o=o+Math.imul(o^o>>>7,61|o)^o,((o^o>>>14)>>>0)/4294967296}}function Yo(){let t=1/0,e=null;const o=new p,a=new p,r=i=>{if(i<=t)return i;const n=Math.min((i-t)/De,1);return t+De*(n-n*n*n+.5*n*n*n*n)},l=(i,n)=>{if(i<=t||!e)return Tt(i,n);const c=i-t;if(c<Xe){const u=Lt(c/Xe),s=(1-u)*(1-u),v=2*(1-u)*u,h=u*u;return n.set(o.x*s+a.x*v+Q.x*h,o.y*s+a.y*v+Q.y*h,o.z*s+a.z*v+Q.z*h)}return n.lerpVectors(Q,So,Gt((c-e.holdEnd+.1)/zt))};return{released:()=>Number.isFinite(t),at:()=>t,timeline:()=>e,release:(i,n)=>{t=i,e=n,Tt(i,o),a.copy(o).addScaledVector(kt,bo)},shift:i=>{if(!e)return;const n=i-e.holdEnd-.02;n<t&&(t=n)},local:i=>Number.isFinite(t)?i-t:Rt,frame:r,speed:i=>i<=t?1:1-E.smoothstep((i-t)/De,0,1),head:l,trail:(i,n,c)=>l(i-n,c).addScaledVector(ze,r(i-n)-r(i))}}function _e(t,e){const o=(oe+1)*2,a=new Float32Array(o*3),r=new Float32Array(o),l=new Float32Array(o),i=[];for(let d=0;d<=oe;d++)r[d*2]=r[d*2+1]=d/oe,l[d*2]=-1,l[d*2+1]=1,d<oe&&i.push(d*2,d*2+1,d*2+2,d*2+1,d*2+3,d*2+2);const n=new le,c=new Ue(a,3);n.setAttribute("position",c),n.setAttribute("aAlong",new Ue(r,1)),n.setAttribute("aSide",new Ue(l,1)),n.setIndex(i);const u=new I({vertexShader:No,fragmentShader:Io,uniforms:{...t,uTime:{value:Rt},uClock:{value:0},uWindow:{value:e.window},uIntensity:{value:e.intensity},uWhite:{value:e.white},uSoft:{value:e.soft},uFlicker:{value:e.flicker},uSeed:{value:e.seed},uOcclude:{value:e.occlude}},...Pt,depthWrite:!1,depthTest:!1,transparent:!0,side:Je}),s=new D(n,u);s.frustumCulled=!1;const v=new p,h=new p,C=new p,m=new p,S=new p(1,0,0),g=new p;return{mesh:s,update:(d,T,P,O,w)=>{if(b(u.uniforms,"uTime",P.local(d)),b(u.uniforms,"uClock",d),s.visible=O>.001,!s.visible)return;const M=e.window/oe;let $=1;for(let x=0;x<=oe;x++){const W=x/oe;P.trail(d,e.window*W,v),P.trail(d,e.window*W+M,h),C.subVectors(v,h),m.subVectors(T.position,v),g.crossVectors(C,m),g.lengthSq()>1e-10&&S.copy(g.normalize());const Z=E.lerp(e.width[0],e.width[1],W),ee=Eo*m.length()/w,L=Math.max(Z,ee);x===0&&($=Math.max(Z/L,.3));const G=e.offset*(.25+W);a[x*6]=v.x+S.x*(G-L),a[x*6+1]=v.y+S.y*(G-L),a[x*6+2]=v.z+S.z*(G-L),a[x*6+3]=v.x+S.x*(G+L),a[x*6+4]=v.y+S.y*(G+L),a[x*6+5]=v.z+S.z*(G+L)}b(u.uniforms,"uIntensity",e.intensity*O*$),c.needsUpdate=!0}}}function J(t,e){const o=new p,a=new I({vertexShader:Oo,fragmentShader:Lo,uniforms:{uColor:{value:o},uShape:{value:t},uOcclude:{value:e}},...Pt,depthWrite:!1,depthTest:!1,transparent:!0}),r=new D(new Ze(1,1),a);return r.frustumCulled=!1,{mesh:r,color:o,place:(l,i,n,c,u)=>{r.visible=i>1e-4&&n>1e-4&&o.lengthSq()>1e-6,r.position.copy(l),r.quaternion.copy(u.quaternion),r.rotateZ(c),r.scale.set(Math.max(i,1e-4),Math.max(n,1e-4),1)}}}const re=358;function ea(t,e){const o=new Float32Array(re*3),a=new Float32Array(re*3),r=new Float32Array(re*4),l=new Float32Array(re),i=new Float32Array(re);for(let m=0;m<re;m++)r[m*4]=1e9;const n=new le,c={position:new R(o,3),aVelocity:new R(a,3),aLife:new R(r,4),aKind:new R(l,1),aFrame:new R(i,1)},u=Object.values(c);for(const[m,S]of Object.entries(c))n.setAttribute(m,S);const s=new I({vertexShader:Go,fragmentShader:Ot,uniforms:{...t,uClock:{value:0},uFrame:{value:0},uDrift:{value:ze.clone()},uPixel:{value:800}},blending:ke,depthWrite:!1,depthTest:!1,transparent:!0}),v=new $e(n,s);v.frustumCulled=!1;const h=new p;return{points:v,material:s,fill:(m,S)=>{const g=Vt(e),d=m.at();let T=0;const P=w=>new p(g()-.5,g()-.5,g()-.5).normalize().multiplyScalar(w),O=(w,M,$,x,W,Z,ee)=>{o.set([w.x,w.y,w.z],T*3),a.set([M.x,M.y,M.z],T*3),r.set([d+$,x,W,Z],T*4),l[T]=ee,i[T]=m.frame(d+$),T+=1};for(let w=0;w<170;w++){const M=g()*S.arrive*.97;m.head(d+M,h),O(h.clone().add(P(.4+g()*1.2)),P(.6+g()*1.4).add(new p(.2,1.1+g()*1.2,0)),M,.9+g()*.9,.16+g()*.3,M,0)}for(const w of S.morph){if(w<0){for(let M=0;M<42;M++)O(Q,new p,1e6,.1,0,0,1);continue}m.head(d+w,h);for(let M=0;M<42;M++)O(h.clone(),P(4+g()*9),w,.45+g()*.45,.14+g()*.14,w+.2,1)}for(let w=0;w<90;w++)O(Q.clone(),P(6+g()*16),S.arrive+g()*.05,.6+g()*.8,.12+g()*.16,S.arrive,1);for(let w=0;w<14;w++){const M=Q.clone().add(new p((g()-.5)*11,(g()-.5)*7,(g()-.5)*2));O(M,new p(0,.3,0),S.arrive+.05+g()*.7,.45+g()*.3,.45+g()*.35,S.arrive,2)}for(const w of u)w.needsUpdate=!0}}}function ta(t,e){const a=new Float32Array(330),r=new Float32Array(330),l=new Float32Array(440);for(let u=0;u<110;u++){const s=new p(e()-.5,e()-.5,e()-.5).normalize();a.set([s.x*(.3+e()*.9),s.y*(.3+e()*.9),s.z*(.3+e()*.9)],u*3);const v=s.multiplyScalar(.5+e()*1.3).add(new p(0,.7+e()*.9,0));r.set([v.x,v.y,v.z],u*3);const h=.8+e()*.9;l.set([e()*h,h,.22+e()*.34,e()],u*4)}const i=new le;i.setAttribute("position",new R(a,3)),i.setAttribute("aVelocity",new R(r,3)),i.setAttribute("aSeed",new R(l,4));const n=new I({vertexShader:Vo,fragmentShader:Ot,uniforms:{uBlue:t.uBlue??{value:new p},uAnchor:{value:Te.clone()},uClock:{value:0},uRelease:{value:1e9},uFrame:{value:0},uDrift:{value:ze.clone()},uPixel:{value:800}},blending:ke,depthWrite:!1,depthTest:!1,transparent:!0}),c=new $e(i,n);return c.frustumCulled=!1,{points:c,material:n}}function oa(t,e){const a=new Float32Array(1080),r=new Float32Array(360*2),l=new Float32Array(360),i=[];for(let v=0;v<90;v++){const h=[Me.x+t()*Ae.x,Me.y+t()*Ae.y,Me.z+t()*Ae.z],C=.25+t()*.75;[[0,-1],[0,1],[1,-1],[1,1]].forEach(([S,g],d)=>{const T=v*4+d;a.set(h,T*3),r.set([S,g],T*2),l[T]=C}),i.push(v*4,v*4+1,v*4+2,v*4+1,v*4+3,v*4+2)}const n=new le;n.setAttribute("position",new R(a,3)),n.setAttribute("aCorner",new R(r,2)),n.setAttribute("aShade",new R(l,1)),n.setIndex(i);const c=z(e.streak).multiplyScalar(e.streakGain),u=new I({vertexShader:Uo,fragmentShader:Bo,uniforms:{uDrift:{value:ze.clone()},uFrame:{value:0},uSpeed:{value:1},uLength:{value:.13},uBoxMin:{value:Me.clone()},uBoxSize:{value:Ae.clone()},uViewport:{value:new de(1,1)},uWidth:{value:1.1},uColor:{value:c},uInk:{value:e.ink}},blending:e.ink>0?Qe:ke,depthWrite:!1,depthTest:!1,transparent:!0}),s=new D(n,u);return s.frustumCulled=!1,{mesh:s,material:u}}function aa(t){const o=new Ze(1,1),a=new go;a.index=o.index,a.setAttribute("position",o.getAttribute("position")),a.setAttribute("uv",o.getAttribute("uv"));const r=new Float32Array(114),l=new Float32Array(114),i=new Float32Array(114);for(let u=0;u<38;u++){const s=new p(t()-.5,t()*.9-.25,(t()-.5)*.6).normalize().multiplyScalar(5+t()*11);r.set([s.x,s.y,s.z],u*3),l.set([t()-.5,t()-.5,t()-.5],u*3),i.set([t()*6.28,(t()-.5)*18,.26+t()*.26],u*3)}a.setAttribute("aVelocity",new Be(r,3)),a.setAttribute("aAxis",new Be(l,3)),a.setAttribute("aSpin",new Be(i,3)),a.instanceCount=38;const n=new I({vertexShader:Do,fragmentShader:Wo,uniforms:{uTime:{value:0},uBirth:{value:1e9},uOrigin:{value:Q.clone()},uColor:{value:new p}},blending:Qe,depthWrite:!1,depthTest:!1,transparent:!0,side:Je}),c=new D(a,n);return c.frustumCulled=!1,{mesh:c,material:n}}const Y=2.5/33;function H(t,e,o){const a=o*Math.PI/180;return[t*Math.cos(a)-e*Math.sin(a),t*Math.sin(a)+e*Math.cos(a)]}function ia(t,e,o,a){const r=[],l=(i,n,c)=>{for(let u=1;u<=7;u++){const s=u/7;r.push([(1-s)*(1-s)*i[0]+2*(1-s)*s*n[0]+s*s*c[0],(1-s)*(1-s)*i[1]+2*(1-s)*s*n[1]+s*s*c[1]])}};for(let i=0;i<4;i++){const n=-90+a+i*90,c=H(e*Math.SQRT1_2,-e*Math.SQRT1_2,n),u=H(e*Math.SQRT1_2,e*Math.SQRT1_2,n),s=H(t,0,n);i===0&&r.push(c),l(c,H(t*.42,-o,n),s),l(s,H(t*.42,o,n),u)}return r.pop(),r}function Et(t,e,o,a,r){const l=ia(t*Y,e*Y,o*Y,r),i=[],n=new p,c=new p,u=new p,s=new p;for(const h of[1,-1])for(const[C,m]of l.entries()){const S=l[(C+1)%l.length];S&&(n.set(0,0,h*a),c.set(m[0],m[1],0),u.set(S[0],S[1],0),s.subVectors(c,n).cross(u.clone().sub(n)),s.z*h<0?i.push(n.x,n.y,n.z,u.x,u.y,u.z,c.x,c.y,c.z):i.push(n.x,n.y,n.z,c.x,c.y,c.z,u.x,u.y,u.z))}const v=new le;return v.setAttribute("position",new R(i,3)),v.computeVertexNormals(),v}function na(){const t=[],e=(r,l,i,n)=>{t.push(r[0],r[1],0,l[0],l[1],0,i[0],i[1],0,r[0],r[1],0,i[0],i[1],0,n[0],n[1],0)},o=Y;for(let r=0;r<32;r++){if(r%4===0)continue;const l=r*11.25;e(H(29.6*o,-.35*o,l),H(30.9*o,-.35*o,l),H(30.9*o,.35*o,l),H(29.6*o,.35*o,l))}for(const r of[45,135,225,315]){const[l,i]=H(33*o,0,r),n=2.6*o;e([l,i-n],[l+n,i],[l,i+n],[l-n,i])}const a=new le;return a.setAttribute("position",new R(t,3)),a.setAttribute("normal",new R(t.map((r,l)=>l%3===2?1:0),3)),a}function ra(){const t=new bt,e=new I({vertexShader:_t,fragmentShader:qo,uniforms:{uColor:{value:new p},uTime:{value:0},uShine:{value:1}}}),o=new I({vertexShader:_t,fragmentShader:Ko,uniforms:{uColor:{value:new p},uAlpha:{value:0},uTime:{value:0},uShine:{value:1}},blending:ke,depthWrite:!1,transparent:!0,side:Je});t.add(new D(Et(45,10.5,3.6,.95,0),e));const a=new D(Et(27,6.8,2.2,.55,45),e);a.position.z=-.08,t.add(a);const r=new bt;return r.add(new D(new St(33*Y,1.2*Y,10,160),o)),r.add(new D(new St(27.85*Y,.42*Y,6,160),o)),r.add(new D(na(),o)),t.add(r),t.traverse(l=>{l.frustumCulled=!1}),t.visible=!1,{group:t,gem:e,ring:o,halo:r}}function He(t,e){const o=new D(new Ze(2,2),t);return o.frustumCulled=!1,o.renderOrder=e,o}function Fa(t,e){let o;try{o=new no({canvas:t,antialias:!1,alpha:!0,premultipliedAlpha:!0,powerPreference:"high-performance",stencil:!1})}catch{return null}const a=xo[e.look],r=Qo(a);let l="blue",i=Mt("blue"),n=1/0;const c=Yo(),u=Vt(24301),s=$o(r),v=a.glow,h=a.cover;o.toneMapping=Ft,o.setClearColor(0,0);const C=new ht,m=new ro(qe,1,.1,600),S=new ht,g=new lo(-1,1,1,-1,0,1),d=new I({vertexShader:Ke,fragmentShader:Ro,uniforms:{uHor:{value:z(a.hor)},uRim:{value:z(a.rim)},uLit:{value:z(a.lit)},uDim:{value:z(a.dim)},uDeep:{value:z(a.deep)},uBlend:{value:a.blend},uLayer:{value:0},uAspect:{value:1}},depthTest:!1,depthWrite:!1});S.add(He(d,0));const T=[new gt(1,1,{type:wt}),new gt(1,1,{type:wt})],P=new de(.5,.5),O=new p,w=new I({vertexShader:Ke,fragmentShader:Po,uniforms:{uBack:{value:T[0].texture},uFront:{value:T[1].texture},uTop:{value:z(a.top)},uMid:{value:z(a.mid)},uLow:{value:z(a.low)},uHor:{value:z(a.hor)},uWisp:{value:z(a.wisp)},uStar:{value:z(a.star)},uWispMix:{value:a.wispMix},uAspect:{value:1},uTime:{value:0},uZoom:{value:1},uShift:{value:0},uGlowAt:{value:P},uGlow:{value:O}},depthTest:!1,depthWrite:!1});C.add(He(w,-10));const M=oa(u,a);C.add(M.mesh);const $=[_e(s,{occlude:.3*h,width:[.9,3.4],intensity:.5,white:.04,soft:1.6,offset:0,window:Ce*1.25,flicker:0,seed:0}),_e(s,{occlude:.45*h,width:[.34,1.1],intensity:1.5,white:.2,soft:1.3,offset:0,window:Ce,flicker:0,seed:1}),_e(s,{occlude:.2*h,width:[.08,.2],intensity:4.5,white:.7,soft:1.1,offset:0,window:Ce*.7,flicker:0,seed:2}),...[-1.3,-.7,.55,1.15,1.8].map((f,y)=>_e(s,{occlude:0,width:[.03,.07],intensity:2.2,white:.4,soft:1,offset:f,window:Ce*(.45+.12*y),flicker:.45,seed:y+3}))];for(const f of $)C.add(f.mesh);const x=ra();C.add(x.group);const W=J(0,.4*h),Z=J(0,.6*h),ee=J(0,0),L=J(1,.15*h),G=J(2,.2*h),he=J(2,.1*h),Re=J(3,.12*h),Pe=J(3,.08*h);for(const f of[W,Z,L,G,he,Re,Pe,ee])C.add(f.mesh);const Ne=ta(s,u);C.add(Ne.points);const Ie=ea(s,24308);C.add(Ie.points);const se=aa(u);C.add(se.mesh);const Ye=new p,et=new I({vertexShader:Ke,fragmentShader:Ho,uniforms:{uColor:{value:Ye},uAlpha:{value:0}},depthTest:!1,depthWrite:!1,transparent:!0,blending:Qe});C.add(He(et,100));const X=new so(o);X.addPass(new co(C,m));const tt=new uo(new de(256,256),a.bloom,.45,1.05);X.addPass(tt),X.addPass(new wo);const q=new de,ot=new p,ce=new I({vertexShader:Xo,fragmentShader:jo,uniforms:{tDiffuse:{value:null},uWave:{value:0},uOrigin:{value:q},uReach:{value:1},uCell:{value:Ct},uTint:{value:ot}}});X.addPass(new fo(ce));const K={width:0,height:0,ratio:1},at=()=>{const f=Math.max(1,t.clientWidth||window.innerWidth),y=Math.max(1,t.clientHeight||window.innerHeight),F=Math.min(window.devicePixelRatio||1,To,Math.sqrt(_o/(f*y)));if(f===K.width&&y===K.height&&F===K.ratio)return;Object.assign(K,{width:f,height:y,ratio:F}),o.setPixelRatio(F),o.setSize(f,y,!1),X.setPixelRatio(F),X.setSize(f,y),m.aspect=f/y,m.updateProjectionMatrix(),b(w.uniforms,"uAspect",f/y),b(d.uniforms,"uAspect",f/y),M.material.uniforms.uViewport?.value.set(f*F,y*F),b(M.material.uniforms,"uWidth",1.5*F),b(ce.uniforms,"uCell",Ct*F);const ie=Math.min(Math.round(f*F*Ee*.8*Fe),o.capabilities.maxTextureSize),ge=Math.round(y*F*Ee*.8);T.forEach((k,_)=>{k.setSize(ie,ge),b(d.uniforms,"uLayer",_),o.setRenderTarget(k),o.render(S,g)}),o.setRenderTarget(null)};at();let Oe=!1;const it=()=>{Ie.fill(c,i),b(Ne.material.uniforms,"uRelease",c.at()),b(se.material.uniforms,"uBirth",c.at()+i.arrive)},V=new p,ae=new p,N=new p,Le=new p,Ut=new vo,nt=new po;try{o.compile(C,m)}catch{return null}return{resize:()=>{Oe=!0},release:(f,y)=>{c.released()||(l=y,i=Mt(y),c.release(f,i),b(s,"uTier",je[y]),s.uMorph?.value.set(...i.morph),it())},skip:f=>{c.released()&&(c.shift(f),it())},reveal:f=>{Number.isFinite(n)||(n=f)},render:f=>{Oe&&(at(),Oe=!1);const y=c.local(f),F=B(f/.55),ie=c.released(),ge=ie?Lt(y/Xe):0,k=y-i.arrive,_=ie&&k>=0,ue=_?Gt((y-i.holdEnd+.1)/zt):0,j=_?E.smoothstep(y,i.holdEnd,i.holdEnd+.7):0,rt=c.speed(f),lt=c.frame(f),st=1-ge;m.fov=E.lerp(52,qe,F)-(_?2.2*B(k/1.2):0),m.updateProjectionMatrix(),ae.lerpVectors(Co,We,B(ge)),ae.y+=.9*Math.sin(f*.47)*st,ae.x+=.5*Math.sin(f*.31+.8)*st,m.lookAt(ae),m.updateMatrixWorld();const Bt=Math.atan2(ae.y,-ae.z)-Math.atan2(We.y,-We.z);b(w.uniforms,"uShift",Bt/E.degToRad(m.fov)),b(w.uniforms,"uZoom",Math.tan(E.degToRad(qe/2))/Math.tan(E.degToRad(m.fov/2))),b(w.uniforms,"uTime",f),Zo(r,l,i,y,N),c.head(f,V);const ne=F,we=l==="gold"?a.gold:1;let fe=0,xe=-1,ct=r[1];i.morph.forEach((A,pe)=>{!ie||A<0||y<A||(fe+=Math.exp(-(y-A)/.12),y-A<.5&&(xe=y-A,ct=pe===0?r[1]:r[2]))});const U=_?At[l]:1,te=_?Math.exp(-k/.12)*(.5+.5*At[l]):0,ut=_?1-.55*B(k/.6):1,Ge=1-.45*j,ft=(.55+(_?.15*B(k/.3):0))*(1-.2*ue);ee.color.copy(me).multiplyScalar(ne*(5+6*fe+12*te)*v*(_?.45+.55*U:1)),ee.place(V,ft,ft,0,m),Z.color.copy(N).multiplyScalar(ne*(1.9+2.2*fe+2.6*te)*ut*v*(_?we*.6*U:1));const vt=(_?4.4-1.4*B(k/.6):4.4)*(1-.25*ue);if(Z.place(V,vt,vt,0,m),W.color.copy(N).multiplyScalar(ne*(.45+.35*fe+.5*te)*v*Ge*(.4+.6*U)),W.place(V,17*(1-.3*ue),17*(1-.3*ue),0,m),L.color.copy(N).lerp(me,.35).multiplyScalar(ne*(1.3+1.4*te)*ut*v*Ge*U),L.place(V,24,1.2,-.21,m),xe>=0){G.color.copy(ct).multiplyScalar(2.2*Math.pow(1-xe/.5,2)*v);const A=1.2+7.5*B(xe/.5);G.place(V,A,A,0,m)}else G.color.set(0,0,0);const ye=_?k/.7:-1;if(ye>=0&&ye<1){he.color.copy(N).multiplyScalar(1.5*Math.pow(1-ye,2)*v);const A=3+15*B(ye);he.place(Q,A,A,0,m)}else he.color.set(0,0,0);const ve=_?B(k/.2):0,Dt=1+.05*Math.sin(f*14*(1-.6*j)),pt=(18+24*U)*ve*Dt*(1-.5*j);Re.color.copy(N).lerp(me,.15).multiplyScalar(ve*(.95+1.2*te)*v*(.4+.6*we)*(1-.5*j)*U),Re.place(V,pt,pt,0,m),Pe.color.copy(N).lerp(me,.12).multiplyScalar(ve*.45*v*(1-.6*j)*U),Pe.place(V,16*ve*(1-.4*j),16*ve*(1-.4*j),Math.PI/4,m);const Wt=_?Jo(k/.5)*(1-.28*ue):0,qt=_?(1-B(k/1.15))*Math.PI*2:0;x.group.visible=_,x.group.position.copy(V),x.group.quaternion.setFromRotationMatrix(Ut.lookAt(m.position,V,m.up)),x.group.quaternion.multiply(nt.setFromAxisAngle(ko,qt+.3*Math.sin(f*.7)*(1-.4*j))),x.group.quaternion.multiply(nt.setFromAxisAngle(Fo,.14*Math.sin(f*.53+1.1))),x.group.scale.setScalar(Math.max(Wt,1e-4));const Ve=_?B((k-.12)/.7):0;x.halo.scale.setScalar(Math.max(1.35-.35*Ve,1e-4)),x.halo.rotation.z=-.4*(1-Ve),x.gem.uniforms.uColor?.value.copy(N).multiplyScalar(we),b(x.gem.uniforms,"uTime",f),b(x.gem.uniforms,"uShine",U),b(x.ring.uniforms,"uShine",U),x.ring.uniforms.uColor?.value.copy(N),b(x.ring.uniforms,"uAlpha",Ve*v*(.55+.45*we)*(.55+.45*U)),b(x.ring.uniforms,"uTime",f),se.mesh.visible=l!=="blue",b(se.material.uniforms,"uTime",f),se.material.uniforms.uColor?.value.copy(N).multiplyScalar(1.15);const mt=K.height*K.ratio/(2*Math.tan(E.degToRad(m.fov/2)));for(const A of[Ie.material,Ne.material])b(A.uniforms,"uClock",f),b(A.uniforms,"uFrame",lt),b(A.uniforms,"uPixel",mt);b(M.material.uniforms,"uFrame",lt),b(M.material.uniforms,"uSpeed",rt*F),M.mesh.visible=rt>.001;const Kt=_?1-E.smoothstep(k,0,.4):1;for(const A of $)A.update(f,m,c,Kt*ne,mt*2);Le.copy(V).project(m),P.set(Le.x*.5+.5,Le.y*.5+.5),O.copy(N).multiplyScalar(ne*(.28+.45*te+.2*fe)*(_?1.15:1)*v*Ge),Ye.set(...a.veil),b(et.uniforms,"uAlpha",j*a.veilAlpha),tt.strength=(a.bloom+.12*te)*(.7+.3*U),o.toneMappingExposure=E.lerp(.6,1,F);const be=Number.isFinite(n),dt=be?Math.max(f-n,0)/Mo:0,Ht=be?Ao*Math.pow(Math.min(dt,1),1.2):0;if(b(ce.uniforms,"uWave",Ht),be){const A=K.width*K.ratio,pe=K.height*K.ratio;q.set(P.x*A,P.y*pe),b(ce.uniforms,"uReach",Math.max(Math.hypot(q.x,q.y),Math.hypot(A-q.x,q.y),Math.hypot(q.x,pe-q.y),Math.hypot(A-q.x,pe-q.y))),ot.copy(N).lerp(me,.55)}return X.render(),be?dt>=1?"revealed":"revealing":ie?y>=i.holdEnd?"landed":"falling":"cruising"},destroy:()=>{C.traverse(f=>{(f instanceof D||f instanceof $e)&&(f.geometry.dispose(),f.material.dispose())}),d.dispose(),ce.dispose();for(const f of T)f.dispose();for(const f of X.passes)f.dispose();X.dispose(),o.dispose()}}}export{Fa as createWishScene};
