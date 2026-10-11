var Do=Object.defineProperty;var Lo=(i,e,t)=>e in i?Do(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t;var j=(i,e,t)=>Lo(i,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Rs="170",Uo=0,qs=1,Io=2,Za=1,No=2,jt=3,xn=0,Mt=1,Jt=2,_n=0,jn=1,Ys=2,Zs=3,$s=4,Fo=5,Cn=100,Oo=101,Bo=102,zo=103,Ho=104,Go=200,Vo=201,ko=202,Wo=203,Gr=204,Vr=205,Xo=206,qo=207,Yo=208,Zo=209,$o=210,Ko=211,jo=212,Jo=213,Qo=214,kr=0,Wr=1,Xr=2,ei=3,qr=4,Yr=5,Zr=6,$r=7,$a=0,el=1,tl=2,vn=0,nl=1,il=2,rl=3,sl=4,al=5,ol=6,ll=7,Ka=300,ti=301,ni=302,Kr=303,jr=304,sr=306,Jr=1e3,mn=1001,Qr=1002,Bt=1003,cl=1004,Pi=1005,Ft=1006,hr=1007,gn=1008,rn=1009,ja=1010,Ja=1011,Mi=1012,Cs=1013,Ln=1014,en=1015,Ei=1016,Ps=1017,Ds=1018,ii=1020,Qa=35902,eo=1021,to=1022,Ot=1023,no=1024,io=1025,Jn=1026,ri=1027,ro=1028,Ls=1029,so=1030,Us=1031,Is=1033,Ji=33776,Qi=33777,er=33778,tr=33779,es=35840,ts=35841,ns=35842,is=35843,rs=36196,ss=37492,as=37496,os=37808,ls=37809,cs=37810,hs=37811,us=37812,fs=37813,ds=37814,ps=37815,ms=37816,gs=37817,_s=37818,vs=37819,xs=37820,Ms=37821,nr=36492,Ss=36494,Es=36495,ao=36283,ys=36284,Ts=36285,bs=36286,hl=3200,ul=3201,fl=0,dl=1,Qt="",_t="srgb",ai="srgb-linear",ar="linear",Ze="srgb",Fn=7680,Ks=519,pl=512,ml=513,gl=514,oo=515,_l=516,vl=517,xl=518,Ml=519,js=35044,Js="300 es",tn=2e3,rr=2001;class oi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const ut=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ur=Math.PI/180,As=180/Math.PI;function yi(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(ut[i&255]+ut[i>>8&255]+ut[i>>16&255]+ut[i>>24&255]+"-"+ut[e&255]+ut[e>>8&255]+"-"+ut[e>>16&15|64]+ut[e>>24&255]+"-"+ut[t&63|128]+ut[t>>8&255]+"-"+ut[t>>16&255]+ut[t>>24&255]+ut[n&255]+ut[n>>8&255]+ut[n>>16&255]+ut[n>>24&255]).toLowerCase()}function vt(i,e,t){return Math.max(e,Math.min(t,i))}function Sl(i,e){return(i%e+e)%e}function fr(i,e,t){return(1-t)*i+t*e}function ui(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function gt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class ye{constructor(e=0,t=0){ye.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(vt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*r+e.x,this.y=s*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Le{constructor(e,t,n,r,s,a,o,l,c){Le.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,a,o,l,c)}set(e,t,n,r,s,a,o,l,c){const h=this.elements;return h[0]=e,h[1]=r,h[2]=o,h[3]=t,h[4]=s,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],f=n[7],d=n[2],m=n[5],_=n[8],M=r[0],p=r[3],u=r[6],b=r[1],T=r[4],S=r[7],B=r[2],D=r[5],A=r[8];return s[0]=a*M+o*b+l*B,s[3]=a*p+o*T+l*D,s[6]=a*u+o*S+l*A,s[1]=c*M+h*b+f*B,s[4]=c*p+h*T+f*D,s[7]=c*u+h*S+f*A,s[2]=d*M+m*b+_*B,s[5]=d*p+m*T+_*D,s[8]=d*u+m*S+_*A,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-n*s*h+n*o*l+r*s*c-r*a*l}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],f=h*a-o*c,d=o*l-h*s,m=c*s-a*l,_=t*f+n*d+r*m;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const M=1/_;return e[0]=f*M,e[1]=(r*c-h*n)*M,e[2]=(o*n-r*a)*M,e[3]=d*M,e[4]=(h*t-r*l)*M,e[5]=(r*s-o*t)*M,e[6]=m*M,e[7]=(n*l-c*t)*M,e[8]=(a*t-n*s)*M,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-r*c,r*l,-r*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(dr.makeScale(e,t)),this}rotate(e){return this.premultiply(dr.makeRotation(-e)),this}translate(e,t){return this.premultiply(dr.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const dr=new Le;function lo(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Si(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function El(){const i=Si("canvas");return i.style.display="block",i}const Qs={};function vi(i){i in Qs||(Qs[i]=!0,console.warn(i))}function yl(i,e,t){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}function Tl(i){const e=i.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function bl(i){const e=i.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Ve={enabled:!0,workingColorSpace:ai,spaces:{},convert:function(i,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===Ze&&(i.r=nn(i.r),i.g=nn(i.g),i.b=nn(i.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(i.applyMatrix3(this.spaces[e].toXYZ),i.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===Ze&&(i.r=Qn(i.r),i.g=Qn(i.g),i.b=Qn(i.b))),i},fromWorkingColorSpace:function(i,e){return this.convert(i,this.workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Qt?ar:this.spaces[i].transfer},getLuminanceCoefficients:function(i,e=this.workingColorSpace){return i.fromArray(this.spaces[e].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,e,t){return i.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function nn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Qn(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const ea=[.64,.33,.3,.6,.15,.06],ta=[.2126,.7152,.0722],na=[.3127,.329],ia=new Le().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ra=new Le().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Ve.define({[ai]:{primaries:ea,whitePoint:na,transfer:ar,toXYZ:ia,fromXYZ:ra,luminanceCoefficients:ta,workingColorSpaceConfig:{unpackColorSpace:_t},outputColorSpaceConfig:{drawingBufferColorSpace:_t}},[_t]:{primaries:ea,whitePoint:na,transfer:Ze,toXYZ:ia,fromXYZ:ra,luminanceCoefficients:ta,outputColorSpaceConfig:{drawingBufferColorSpace:_t}}});let On;class Al{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{On===void 0&&(On=Si("canvas")),On.width=e.width,On.height=e.height;const n=On.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=On}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Si("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=nn(s[a]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(nn(t[n]/255)*255):t[n]=nn(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let wl=0;class co{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:wl++}),this.uuid=yi(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(pr(r[a].image)):s.push(pr(r[a]))}else s=pr(r);n.url=s}return t||(e.images[this.uuid]=n),n}}function pr(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Al.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Rl=0;class pt extends oi{constructor(e=pt.DEFAULT_IMAGE,t=pt.DEFAULT_MAPPING,n=mn,r=mn,s=Ft,a=gn,o=Ot,l=rn,c=pt.DEFAULT_ANISOTROPY,h=Qt){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Rl++}),this.uuid=yi(),this.name="",this.source=new co(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new ye(0,0),this.repeat=new ye(1,1),this.center=new ye(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Le,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Ka)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Jr:e.x=e.x-Math.floor(e.x);break;case mn:e.x=e.x<0?0:1;break;case Qr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Jr:e.y=e.y-Math.floor(e.y);break;case mn:e.y=e.y<0?0:1;break;case Qr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}pt.DEFAULT_IMAGE=null;pt.DEFAULT_MAPPING=Ka;pt.DEFAULT_ANISOTROPY=1;class nt{constructor(e=0,t=0,n=0,r=1){nt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s;const l=e.elements,c=l[0],h=l[4],f=l[8],d=l[1],m=l[5],_=l[9],M=l[2],p=l[6],u=l[10];if(Math.abs(h-d)<.01&&Math.abs(f-M)<.01&&Math.abs(_-p)<.01){if(Math.abs(h+d)<.1&&Math.abs(f+M)<.1&&Math.abs(_+p)<.1&&Math.abs(c+m+u-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const T=(c+1)/2,S=(m+1)/2,B=(u+1)/2,D=(h+d)/4,A=(f+M)/4,U=(_+p)/4;return T>S&&T>B?T<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(T),r=D/n,s=A/n):S>B?S<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(S),n=D/r,s=U/r):B<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(B),n=A/s,r=U/s),this.set(n,r,s,t),this}let b=Math.sqrt((p-_)*(p-_)+(f-M)*(f-M)+(d-h)*(d-h));return Math.abs(b)<.001&&(b=1),this.x=(p-_)/b,this.y=(f-M)/b,this.z=(d-h)/b,this.w=Math.acos((c+m+u-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Cl extends oi{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new nt(0,0,e,t),this.scissorTest=!1,this.viewport=new nt(0,0,e,t);const r={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ft,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const s=new pt(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,r=e.textures.length;n<r;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new co(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Un extends Cl{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class ho extends pt{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Bt,this.minFilter=Bt,this.wrapR=mn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Pl extends pt{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Bt,this.minFilter=Bt,this.wrapR=mn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ti{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,a,o){let l=n[r+0],c=n[r+1],h=n[r+2],f=n[r+3];const d=s[a+0],m=s[a+1],_=s[a+2],M=s[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=f;return}if(o===1){e[t+0]=d,e[t+1]=m,e[t+2]=_,e[t+3]=M;return}if(f!==M||l!==d||c!==m||h!==_){let p=1-o;const u=l*d+c*m+h*_+f*M,b=u>=0?1:-1,T=1-u*u;if(T>Number.EPSILON){const B=Math.sqrt(T),D=Math.atan2(B,u*b);p=Math.sin(p*D)/B,o=Math.sin(o*D)/B}const S=o*b;if(l=l*p+d*S,c=c*p+m*S,h=h*p+_*S,f=f*p+M*S,p===1-o){const B=1/Math.sqrt(l*l+c*c+h*h+f*f);l*=B,c*=B,h*=B,f*=B}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=f}static multiplyQuaternionsFlat(e,t,n,r,s,a){const o=n[r],l=n[r+1],c=n[r+2],h=n[r+3],f=s[a],d=s[a+1],m=s[a+2],_=s[a+3];return e[t]=o*_+h*f+l*m-c*d,e[t+1]=l*_+h*d+c*f-o*m,e[t+2]=c*_+h*m+o*d-l*f,e[t+3]=h*_-o*f-l*d-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(r/2),f=o(s/2),d=l(n/2),m=l(r/2),_=l(s/2);switch(a){case"XYZ":this._x=d*h*f+c*m*_,this._y=c*m*f-d*h*_,this._z=c*h*_+d*m*f,this._w=c*h*f-d*m*_;break;case"YXZ":this._x=d*h*f+c*m*_,this._y=c*m*f-d*h*_,this._z=c*h*_-d*m*f,this._w=c*h*f+d*m*_;break;case"ZXY":this._x=d*h*f-c*m*_,this._y=c*m*f+d*h*_,this._z=c*h*_+d*m*f,this._w=c*h*f-d*m*_;break;case"ZYX":this._x=d*h*f-c*m*_,this._y=c*m*f+d*h*_,this._z=c*h*_-d*m*f,this._w=c*h*f+d*m*_;break;case"YZX":this._x=d*h*f+c*m*_,this._y=c*m*f+d*h*_,this._z=c*h*_-d*m*f,this._w=c*h*f-d*m*_;break;case"XZY":this._x=d*h*f-c*m*_,this._y=c*m*f-d*h*_,this._z=c*h*_+d*m*f,this._w=c*h*f+d*m*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],f=t[10],d=n+o+f;if(d>0){const m=.5/Math.sqrt(d+1);this._w=.25/m,this._x=(h-l)*m,this._y=(s-c)*m,this._z=(a-r)*m}else if(n>o&&n>f){const m=2*Math.sqrt(1+n-o-f);this._w=(h-l)/m,this._x=.25*m,this._y=(r+a)/m,this._z=(s+c)/m}else if(o>f){const m=2*Math.sqrt(1+o-n-f);this._w=(s-c)/m,this._x=(r+a)/m,this._y=.25*m,this._z=(l+h)/m}else{const m=2*Math.sqrt(1+f-n-o);this._w=(a-r)/m,this._x=(s+c)/m,this._y=(l+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(vt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+a*o+r*c-s*l,this._y=r*h+a*l+s*o-n*c,this._z=s*h+a*c+n*l-r*o,this._w=a*h-n*o-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,r=this._y,s=this._z,a=this._w;let o=a*e._w+n*e._x+r*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=r,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const m=1-t;return this._w=m*a+t*this._w,this._x=m*n+t*this._x,this._y=m*r+t*this._y,this._z=m*s+t*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,o),f=Math.sin((1-t)*h)/c,d=Math.sin(t*h)/c;return this._w=a*f+this._w*d,this._x=n*f+this._x*d,this._y=r*f+this._y*d,this._z=s*f+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class N{constructor(e=0,t=0,n=0){N.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(sa.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(sa.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*r-o*n),h=2*(o*t-s*r),f=2*(s*n-a*t);return this.x=t+l*c+a*f-o*h,this.y=n+l*h+o*c-s*f,this.z=r+l*f+s*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=r*l-s*o,this.y=s*a-n*l,this.z=n*o-r*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return mr.copy(this).projectOnVector(e),this.sub(mr)}reflect(e){return this.sub(mr.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(vt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const mr=new N,sa=new Ti;class bi{constructor(e=new N(1/0,1/0,1/0),t=new N(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Dt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Dt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Dt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Dt):Dt.fromBufferAttribute(s,a),Dt.applyMatrix4(e.matrixWorld),this.expandByPoint(Dt);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Di.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Di.copy(n.boundingBox)),Di.applyMatrix4(e.matrixWorld),this.union(Di)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Dt),Dt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(fi),Li.subVectors(this.max,fi),Bn.subVectors(e.a,fi),zn.subVectors(e.b,fi),Hn.subVectors(e.c,fi),cn.subVectors(zn,Bn),hn.subVectors(Hn,zn),Sn.subVectors(Bn,Hn);let t=[0,-cn.z,cn.y,0,-hn.z,hn.y,0,-Sn.z,Sn.y,cn.z,0,-cn.x,hn.z,0,-hn.x,Sn.z,0,-Sn.x,-cn.y,cn.x,0,-hn.y,hn.x,0,-Sn.y,Sn.x,0];return!gr(t,Bn,zn,Hn,Li)||(t=[1,0,0,0,1,0,0,0,1],!gr(t,Bn,zn,Hn,Li))?!1:(Ui.crossVectors(cn,hn),t=[Ui.x,Ui.y,Ui.z],gr(t,Bn,zn,Hn,Li))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Dt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Dt).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(qt[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),qt[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),qt[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),qt[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),qt[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),qt[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),qt[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),qt[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(qt),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const qt=[new N,new N,new N,new N,new N,new N,new N,new N],Dt=new N,Di=new bi,Bn=new N,zn=new N,Hn=new N,cn=new N,hn=new N,Sn=new N,fi=new N,Li=new N,Ui=new N,En=new N;function gr(i,e,t,n,r){for(let s=0,a=i.length-3;s<=a;s+=3){En.fromArray(i,s);const o=r.x*Math.abs(En.x)+r.y*Math.abs(En.y)+r.z*Math.abs(En.z),l=e.dot(En),c=t.dot(En),h=n.dot(En);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const Dl=new bi,di=new N,_r=new N;class Ns{constructor(e=new N,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Dl.setFromPoints(e).getCenter(n);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;di.subVectors(e,this.center);const t=di.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(di,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(_r.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(di.copy(e.center).add(_r)),this.expandByPoint(di.copy(e.center).sub(_r))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Yt=new N,vr=new N,Ii=new N,un=new N,xr=new N,Ni=new N,Mr=new N;class Ll{constructor(e=new N,t=new N(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Yt)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Yt.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Yt.copy(this.origin).addScaledVector(this.direction,t),Yt.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){vr.copy(e).add(t).multiplyScalar(.5),Ii.copy(t).sub(e).normalize(),un.copy(this.origin).sub(vr);const s=e.distanceTo(t)*.5,a=-this.direction.dot(Ii),o=un.dot(this.direction),l=-un.dot(Ii),c=un.lengthSq(),h=Math.abs(1-a*a);let f,d,m,_;if(h>0)if(f=a*l-o,d=a*o-l,_=s*h,f>=0)if(d>=-_)if(d<=_){const M=1/h;f*=M,d*=M,m=f*(f+a*d+2*o)+d*(a*f+d+2*l)+c}else d=s,f=Math.max(0,-(a*d+o)),m=-f*f+d*(d+2*l)+c;else d=-s,f=Math.max(0,-(a*d+o)),m=-f*f+d*(d+2*l)+c;else d<=-_?(f=Math.max(0,-(-a*s+o)),d=f>0?-s:Math.min(Math.max(-s,-l),s),m=-f*f+d*(d+2*l)+c):d<=_?(f=0,d=Math.min(Math.max(-s,-l),s),m=d*(d+2*l)+c):(f=Math.max(0,-(a*s+o)),d=f>0?s:Math.min(Math.max(-s,-l),s),m=-f*f+d*(d+2*l)+c);else d=a>0?-s:s,f=Math.max(0,-(a*d+o)),m=-f*f+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(vr).addScaledVector(Ii,d),m}intersectSphere(e,t){Yt.subVectors(e.center,this.origin);const n=Yt.dot(this.direction),r=Yt.dot(Yt)-n*n,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,a,o,l;const c=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),h>=0?(s=(e.min.y-d.y)*h,a=(e.max.y-d.y)*h):(s=(e.max.y-d.y)*h,a=(e.min.y-d.y)*h),n>a||s>r||((s>n||isNaN(n))&&(n=s),(a<r||isNaN(r))&&(r=a),f>=0?(o=(e.min.z-d.z)*f,l=(e.max.z-d.z)*f):(o=(e.max.z-d.z)*f,l=(e.min.z-d.z)*f),n>l||o>r)||((o>n||n!==n)&&(n=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,Yt)!==null}intersectTriangle(e,t,n,r,s){xr.subVectors(t,e),Ni.subVectors(n,e),Mr.crossVectors(xr,Ni);let a=this.direction.dot(Mr),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;un.subVectors(this.origin,e);const l=o*this.direction.dot(Ni.crossVectors(un,Ni));if(l<0)return null;const c=o*this.direction.dot(xr.cross(un));if(c<0||l+c>a)return null;const h=-o*un.dot(Mr);return h<0?null:this.at(h/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class at{constructor(e,t,n,r,s,a,o,l,c,h,f,d,m,_,M,p){at.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,a,o,l,c,h,f,d,m,_,M,p)}set(e,t,n,r,s,a,o,l,c,h,f,d,m,_,M,p){const u=this.elements;return u[0]=e,u[4]=t,u[8]=n,u[12]=r,u[1]=s,u[5]=a,u[9]=o,u[13]=l,u[2]=c,u[6]=h,u[10]=f,u[14]=d,u[3]=m,u[7]=_,u[11]=M,u[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new at().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,r=1/Gn.setFromMatrixColumn(e,0).length(),s=1/Gn.setFromMatrixColumn(e,1).length(),a=1/Gn.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,s=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(r),c=Math.sin(r),h=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const d=a*h,m=a*f,_=o*h,M=o*f;t[0]=l*h,t[4]=-l*f,t[8]=c,t[1]=m+_*c,t[5]=d-M*c,t[9]=-o*l,t[2]=M-d*c,t[6]=_+m*c,t[10]=a*l}else if(e.order==="YXZ"){const d=l*h,m=l*f,_=c*h,M=c*f;t[0]=d+M*o,t[4]=_*o-m,t[8]=a*c,t[1]=a*f,t[5]=a*h,t[9]=-o,t[2]=m*o-_,t[6]=M+d*o,t[10]=a*l}else if(e.order==="ZXY"){const d=l*h,m=l*f,_=c*h,M=c*f;t[0]=d-M*o,t[4]=-a*f,t[8]=_+m*o,t[1]=m+_*o,t[5]=a*h,t[9]=M-d*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const d=a*h,m=a*f,_=o*h,M=o*f;t[0]=l*h,t[4]=_*c-m,t[8]=d*c+M,t[1]=l*f,t[5]=M*c+d,t[9]=m*c-_,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const d=a*l,m=a*c,_=o*l,M=o*c;t[0]=l*h,t[4]=M-d*f,t[8]=_*f+m,t[1]=f,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=m*f+_,t[10]=d-M*f}else if(e.order==="XZY"){const d=a*l,m=a*c,_=o*l,M=o*c;t[0]=l*h,t[4]=-f,t[8]=c*h,t[1]=d*f+M,t[5]=a*h,t[9]=m*f-_,t[2]=_*f-m,t[6]=o*h,t[10]=M*f+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Ul,e,Il)}lookAt(e,t,n){const r=this.elements;return Et.subVectors(e,t),Et.lengthSq()===0&&(Et.z=1),Et.normalize(),fn.crossVectors(n,Et),fn.lengthSq()===0&&(Math.abs(n.z)===1?Et.x+=1e-4:Et.z+=1e-4,Et.normalize(),fn.crossVectors(n,Et)),fn.normalize(),Fi.crossVectors(Et,fn),r[0]=fn.x,r[4]=Fi.x,r[8]=Et.x,r[1]=fn.y,r[5]=Fi.y,r[9]=Et.y,r[2]=fn.z,r[6]=Fi.z,r[10]=Et.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],f=n[5],d=n[9],m=n[13],_=n[2],M=n[6],p=n[10],u=n[14],b=n[3],T=n[7],S=n[11],B=n[15],D=r[0],A=r[4],U=r[8],E=r[12],x=r[1],w=r[5],k=r[9],z=r[13],Z=r[2],$=r[6],X=r[10],J=r[14],G=r[3],re=r[7],he=r[11],Me=r[15];return s[0]=a*D+o*x+l*Z+c*G,s[4]=a*A+o*w+l*$+c*re,s[8]=a*U+o*k+l*X+c*he,s[12]=a*E+o*z+l*J+c*Me,s[1]=h*D+f*x+d*Z+m*G,s[5]=h*A+f*w+d*$+m*re,s[9]=h*U+f*k+d*X+m*he,s[13]=h*E+f*z+d*J+m*Me,s[2]=_*D+M*x+p*Z+u*G,s[6]=_*A+M*w+p*$+u*re,s[10]=_*U+M*k+p*X+u*he,s[14]=_*E+M*z+p*J+u*Me,s[3]=b*D+T*x+S*Z+B*G,s[7]=b*A+T*w+S*$+B*re,s[11]=b*U+T*k+S*X+B*he,s[15]=b*E+T*z+S*J+B*Me,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],f=e[6],d=e[10],m=e[14],_=e[3],M=e[7],p=e[11],u=e[15];return _*(+s*l*f-r*c*f-s*o*d+n*c*d+r*o*m-n*l*m)+M*(+t*l*m-t*c*d+s*a*d-r*a*m+r*c*h-s*l*h)+p*(+t*c*f-t*o*m-s*a*f+n*a*m+s*o*h-n*c*h)+u*(-r*o*h-t*l*f+t*o*d+r*a*f-n*a*d+n*l*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],f=e[9],d=e[10],m=e[11],_=e[12],M=e[13],p=e[14],u=e[15],b=f*p*c-M*d*c+M*l*m-o*p*m-f*l*u+o*d*u,T=_*d*c-h*p*c-_*l*m+a*p*m+h*l*u-a*d*u,S=h*M*c-_*f*c+_*o*m-a*M*m-h*o*u+a*f*u,B=_*f*l-h*M*l-_*o*d+a*M*d+h*o*p-a*f*p,D=t*b+n*T+r*S+s*B;if(D===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/D;return e[0]=b*A,e[1]=(M*d*s-f*p*s-M*r*m+n*p*m+f*r*u-n*d*u)*A,e[2]=(o*p*s-M*l*s+M*r*c-n*p*c-o*r*u+n*l*u)*A,e[3]=(f*l*s-o*d*s-f*r*c+n*d*c+o*r*m-n*l*m)*A,e[4]=T*A,e[5]=(h*p*s-_*d*s+_*r*m-t*p*m-h*r*u+t*d*u)*A,e[6]=(_*l*s-a*p*s-_*r*c+t*p*c+a*r*u-t*l*u)*A,e[7]=(a*d*s-h*l*s+h*r*c-t*d*c-a*r*m+t*l*m)*A,e[8]=S*A,e[9]=(_*f*s-h*M*s-_*n*m+t*M*m+h*n*u-t*f*u)*A,e[10]=(a*M*s-_*o*s+_*n*c-t*M*c-a*n*u+t*o*u)*A,e[11]=(h*o*s-a*f*s-h*n*c+t*f*c+a*n*m-t*o*m)*A,e[12]=B*A,e[13]=(h*M*r-_*f*r+_*n*d-t*M*d-h*n*p+t*f*p)*A,e[14]=(_*o*r-a*M*r-_*n*l+t*M*l+a*n*p-t*o*p)*A,e[15]=(a*f*r-h*o*r+h*n*l-t*f*l-a*n*d+t*o*d)*A,this}scale(e){const t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),s=1-n,a=e.x,o=e.y,l=e.z,c=s*a,h=s*o;return this.set(c*a+n,c*o-r*l,c*l+r*o,0,c*o+r*l,h*o+n,h*l-r*a,0,c*l-r*o,h*l+r*a,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,a){return this.set(1,n,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,h=a+a,f=o+o,d=s*c,m=s*h,_=s*f,M=a*h,p=a*f,u=o*f,b=l*c,T=l*h,S=l*f,B=n.x,D=n.y,A=n.z;return r[0]=(1-(M+u))*B,r[1]=(m+S)*B,r[2]=(_-T)*B,r[3]=0,r[4]=(m-S)*D,r[5]=(1-(d+u))*D,r[6]=(p+b)*D,r[7]=0,r[8]=(_+T)*A,r[9]=(p-b)*A,r[10]=(1-(d+M))*A,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;let s=Gn.set(r[0],r[1],r[2]).length();const a=Gn.set(r[4],r[5],r[6]).length(),o=Gn.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Lt.copy(this);const c=1/s,h=1/a,f=1/o;return Lt.elements[0]*=c,Lt.elements[1]*=c,Lt.elements[2]*=c,Lt.elements[4]*=h,Lt.elements[5]*=h,Lt.elements[6]*=h,Lt.elements[8]*=f,Lt.elements[9]*=f,Lt.elements[10]*=f,t.setFromRotationMatrix(Lt),n.x=s,n.y=a,n.z=o,this}makePerspective(e,t,n,r,s,a,o=tn){const l=this.elements,c=2*s/(t-e),h=2*s/(n-r),f=(t+e)/(t-e),d=(n+r)/(n-r);let m,_;if(o===tn)m=-(a+s)/(a-s),_=-2*a*s/(a-s);else if(o===rr)m=-a/(a-s),_=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,r,s,a,o=tn){const l=this.elements,c=1/(t-e),h=1/(n-r),f=1/(a-s),d=(t+e)*c,m=(n+r)*h;let _,M;if(o===tn)_=(a+s)*f,M=-2*f;else if(o===rr)_=s*f,M=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=M,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Gn=new N,Lt=new at,Ul=new N(0,0,0),Il=new N(1,1,1),fn=new N,Fi=new N,Et=new N,aa=new at,oa=new Ti;class sn{constructor(e=0,t=0,n=0,r=sn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],h=r[9],f=r[2],d=r[6],m=r[10];switch(t){case"XYZ":this._y=Math.asin(vt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-vt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(vt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,m),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-vt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(vt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-vt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return aa.makeRotationFromQuaternion(e),this.setFromRotationMatrix(aa,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return oa.setFromEuler(this),this.setFromQuaternion(oa,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}sn.DEFAULT_ORDER="XYZ";class uo{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Nl=0;const la=new N,Vn=new Ti,Zt=new at,Oi=new N,pi=new N,Fl=new N,Ol=new Ti,ca=new N(1,0,0),ha=new N(0,1,0),ua=new N(0,0,1),fa={type:"added"},Bl={type:"removed"},kn={type:"childadded",child:null},Sr={type:"childremoved",child:null};class bt extends oi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Nl++}),this.uuid=yi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=bt.DEFAULT_UP.clone();const e=new N,t=new sn,n=new Ti,r=new N(1,1,1);function s(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new at},normalMatrix:{value:new Le}}),this.matrix=new at,this.matrixWorld=new at,this.matrixAutoUpdate=bt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=bt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new uo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Vn.setFromAxisAngle(e,t),this.quaternion.multiply(Vn),this}rotateOnWorldAxis(e,t){return Vn.setFromAxisAngle(e,t),this.quaternion.premultiply(Vn),this}rotateX(e){return this.rotateOnAxis(ca,e)}rotateY(e){return this.rotateOnAxis(ha,e)}rotateZ(e){return this.rotateOnAxis(ua,e)}translateOnAxis(e,t){return la.copy(e).applyQuaternion(this.quaternion),this.position.add(la.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(ca,e)}translateY(e){return this.translateOnAxis(ha,e)}translateZ(e){return this.translateOnAxis(ua,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Zt.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Oi.copy(e):Oi.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),pi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Zt.lookAt(pi,Oi,this.up):Zt.lookAt(Oi,pi,this.up),this.quaternion.setFromRotationMatrix(Zt),r&&(Zt.extractRotation(r.matrixWorld),Vn.setFromRotationMatrix(Zt),this.quaternion.premultiply(Vn.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(fa),kn.child=e,this.dispatchEvent(kn),kn.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Bl),Sr.child=e,this.dispatchEvent(Sr),Sr.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Zt.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Zt.multiply(e.parent.matrixWorld)),e.applyMatrix4(Zt),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(fa),kn.child=e,this.dispatchEvent(kn),kn.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(pi,e,Fl),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(pi,Ol,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),f=a(e.shapes),d=a(e.skeletons),m=a(e.animations),_=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),f.length>0&&(n.shapes=f),d.length>0&&(n.skeletons=d),m.length>0&&(n.animations=m),_.length>0&&(n.nodes=_)}return n.object=r,n;function a(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}}bt.DEFAULT_UP=new N(0,1,0);bt.DEFAULT_MATRIX_AUTO_UPDATE=!0;bt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ut=new N,$t=new N,Er=new N,Kt=new N,Wn=new N,Xn=new N,da=new N,yr=new N,Tr=new N,br=new N,Ar=new nt,wr=new nt,Rr=new nt;class Nt{constructor(e=new N,t=new N,n=new N){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),Ut.subVectors(e,t),r.cross(Ut);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){Ut.subVectors(r,t),$t.subVectors(n,t),Er.subVectors(e,t);const a=Ut.dot(Ut),o=Ut.dot($t),l=Ut.dot(Er),c=$t.dot($t),h=$t.dot(Er),f=a*c-o*o;if(f===0)return s.set(0,0,0),null;const d=1/f,m=(c*l-o*h)*d,_=(a*h-o*l)*d;return s.set(1-m-_,_,m)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,Kt)===null?!1:Kt.x>=0&&Kt.y>=0&&Kt.x+Kt.y<=1}static getInterpolation(e,t,n,r,s,a,o,l){return this.getBarycoord(e,t,n,r,Kt)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Kt.x),l.addScaledVector(a,Kt.y),l.addScaledVector(o,Kt.z),l)}static getInterpolatedAttribute(e,t,n,r,s,a){return Ar.setScalar(0),wr.setScalar(0),Rr.setScalar(0),Ar.fromBufferAttribute(e,t),wr.fromBufferAttribute(e,n),Rr.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(Ar,s.x),a.addScaledVector(wr,s.y),a.addScaledVector(Rr,s.z),a}static isFrontFacing(e,t,n,r){return Ut.subVectors(n,t),$t.subVectors(e,t),Ut.cross($t).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ut.subVectors(this.c,this.b),$t.subVectors(this.a,this.b),Ut.cross($t).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Nt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Nt.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,s){return Nt.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return Nt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Nt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,s=this.c;let a,o;Wn.subVectors(r,n),Xn.subVectors(s,n),yr.subVectors(e,n);const l=Wn.dot(yr),c=Xn.dot(yr);if(l<=0&&c<=0)return t.copy(n);Tr.subVectors(e,r);const h=Wn.dot(Tr),f=Xn.dot(Tr);if(h>=0&&f<=h)return t.copy(r);const d=l*f-h*c;if(d<=0&&l>=0&&h<=0)return a=l/(l-h),t.copy(n).addScaledVector(Wn,a);br.subVectors(e,s);const m=Wn.dot(br),_=Xn.dot(br);if(_>=0&&m<=_)return t.copy(s);const M=m*c-l*_;if(M<=0&&c>=0&&_<=0)return o=c/(c-_),t.copy(n).addScaledVector(Xn,o);const p=h*_-m*f;if(p<=0&&f-h>=0&&m-_>=0)return da.subVectors(s,r),o=(f-h)/(f-h+(m-_)),t.copy(r).addScaledVector(da,o);const u=1/(p+M+d);return a=M*u,o=d*u,t.copy(n).addScaledVector(Wn,a).addScaledVector(Xn,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const fo={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},dn={h:0,s:0,l:0},Bi={h:0,s:0,l:0};function Cr(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class Ye{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=_t){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ve.toWorkingColorSpace(this,t),this}setRGB(e,t,n,r=Ve.workingColorSpace){return this.r=e,this.g=t,this.b=n,Ve.toWorkingColorSpace(this,r),this}setHSL(e,t,n,r=Ve.workingColorSpace){if(e=Sl(e,1),t=vt(t,0,1),n=vt(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,a=2*n-s;this.r=Cr(a,s,e+1/3),this.g=Cr(a,s,e),this.b=Cr(a,s,e-1/3)}return Ve.toWorkingColorSpace(this,r),this}setStyle(e,t=_t){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=_t){const n=fo[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=nn(e.r),this.g=nn(e.g),this.b=nn(e.b),this}copyLinearToSRGB(e){return this.r=Qn(e.r),this.g=Qn(e.g),this.b=Qn(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=_t){return Ve.fromWorkingColorSpace(ft.copy(this),e),Math.round(vt(ft.r*255,0,255))*65536+Math.round(vt(ft.g*255,0,255))*256+Math.round(vt(ft.b*255,0,255))}getHexString(e=_t){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ve.workingColorSpace){Ve.fromWorkingColorSpace(ft.copy(this),t);const n=ft.r,r=ft.g,s=ft.b,a=Math.max(n,r,s),o=Math.min(n,r,s);let l,c;const h=(o+a)/2;if(o===a)l=0,c=0;else{const f=a-o;switch(c=h<=.5?f/(a+o):f/(2-a-o),a){case n:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-n)/f+2;break;case s:l=(n-r)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=Ve.workingColorSpace){return Ve.fromWorkingColorSpace(ft.copy(this),t),e.r=ft.r,e.g=ft.g,e.b=ft.b,e}getStyle(e=_t){Ve.fromWorkingColorSpace(ft.copy(this),e);const t=ft.r,n=ft.g,r=ft.b;return e!==_t?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(dn),this.setHSL(dn.h+e,dn.s+t,dn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(dn),e.getHSL(Bi);const n=fr(dn.h,Bi.h,t),r=fr(dn.s,Bi.s,t),s=fr(dn.l,Bi.l,t);return this.setHSL(n,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*r,this.g=s[1]*t+s[4]*n+s[7]*r,this.b=s[2]*t+s[5]*n+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const ft=new Ye;Ye.NAMES=fo;let zl=0;class or extends oi{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:zl++}),this.uuid=yi(),this.name="",this.blending=jn,this.side=xn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Gr,this.blendDst=Vr,this.blendEquation=Cn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ye(0,0,0),this.blendAlpha=0,this.depthFunc=ei,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ks,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Fn,this.stencilZFail=Fn,this.stencilZPass=Fn,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==jn&&(n.blending=this.blending),this.side!==xn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Gr&&(n.blendSrc=this.blendSrc),this.blendDst!==Vr&&(n.blendDst=this.blendDst),this.blendEquation!==Cn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ei&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ks&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Fn&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Fn&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Fn&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(t){const s=r(e.textures),a=r(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class po extends or{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new Ye(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new sn,this.combine=$a,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const st=new N,zi=new ye;class zt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=js,this.updateRanges=[],this.gpuType=en,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)zi.fromBufferAttribute(this,t),zi.applyMatrix3(e),this.setXY(t,zi.x,zi.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)st.fromBufferAttribute(this,t),st.applyMatrix3(e),this.setXYZ(t,st.x,st.y,st.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)st.fromBufferAttribute(this,t),st.applyMatrix4(e),this.setXYZ(t,st.x,st.y,st.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)st.fromBufferAttribute(this,t),st.applyNormalMatrix(e),this.setXYZ(t,st.x,st.y,st.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)st.fromBufferAttribute(this,t),st.transformDirection(e),this.setXYZ(t,st.x,st.y,st.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=ui(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=gt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ui(t,this.array)),t}setX(e,t){return this.normalized&&(t=gt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ui(t,this.array)),t}setY(e,t){return this.normalized&&(t=gt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ui(t,this.array)),t}setZ(e,t){return this.normalized&&(t=gt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ui(t,this.array)),t}setW(e,t){return this.normalized&&(t=gt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=gt(t,this.array),n=gt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=gt(t,this.array),n=gt(n,this.array),r=gt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=gt(t,this.array),n=gt(n,this.array),r=gt(r,this.array),s=gt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==js&&(e.usage=this.usage),e}}class mo extends zt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class go extends zt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Dn extends zt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Hl=0;const Rt=new at,Pr=new bt,qn=new N,yt=new bi,mi=new bi,ct=new N;class In extends oi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Hl++}),this.uuid=yi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(lo(e)?go:mo)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Le().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Rt.makeRotationFromQuaternion(e),this.applyMatrix4(Rt),this}rotateX(e){return Rt.makeRotationX(e),this.applyMatrix4(Rt),this}rotateY(e){return Rt.makeRotationY(e),this.applyMatrix4(Rt),this}rotateZ(e){return Rt.makeRotationZ(e),this.applyMatrix4(Rt),this}translate(e,t,n){return Rt.makeTranslation(e,t,n),this.applyMatrix4(Rt),this}scale(e,t,n){return Rt.makeScale(e,t,n),this.applyMatrix4(Rt),this}lookAt(e){return Pr.lookAt(e),Pr.updateMatrix(),this.applyMatrix4(Pr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(qn).negate(),this.translate(qn.x,qn.y,qn.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let r=0,s=e.length;r<s;r++){const a=e[r];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Dn(n,3))}else{for(let n=0,r=t.count;n<r;n++){const s=e[n];t.setXYZ(n,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new bi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const s=t[n];yt.setFromBufferAttribute(s),this.morphTargetsRelative?(ct.addVectors(this.boundingBox.min,yt.min),this.boundingBox.expandByPoint(ct),ct.addVectors(this.boundingBox.max,yt.max),this.boundingBox.expandByPoint(ct)):(this.boundingBox.expandByPoint(yt.min),this.boundingBox.expandByPoint(yt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ns);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new N,1/0);return}if(e){const n=this.boundingSphere.center;if(yt.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];mi.setFromBufferAttribute(o),this.morphTargetsRelative?(ct.addVectors(yt.min,mi.min),yt.expandByPoint(ct),ct.addVectors(yt.max,mi.max),yt.expandByPoint(ct)):(yt.expandByPoint(mi.min),yt.expandByPoint(mi.max))}yt.getCenter(n);let r=0;for(let s=0,a=e.count;s<a;s++)ct.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(ct));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)ct.fromBufferAttribute(o,c),l&&(qn.fromBufferAttribute(e,c),ct.add(qn)),r=Math.max(r,n.distanceToSquared(ct))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new zt(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let U=0;U<n.count;U++)o[U]=new N,l[U]=new N;const c=new N,h=new N,f=new N,d=new ye,m=new ye,_=new ye,M=new N,p=new N;function u(U,E,x){c.fromBufferAttribute(n,U),h.fromBufferAttribute(n,E),f.fromBufferAttribute(n,x),d.fromBufferAttribute(s,U),m.fromBufferAttribute(s,E),_.fromBufferAttribute(s,x),h.sub(c),f.sub(c),m.sub(d),_.sub(d);const w=1/(m.x*_.y-_.x*m.y);isFinite(w)&&(M.copy(h).multiplyScalar(_.y).addScaledVector(f,-m.y).multiplyScalar(w),p.copy(f).multiplyScalar(m.x).addScaledVector(h,-_.x).multiplyScalar(w),o[U].add(M),o[E].add(M),o[x].add(M),l[U].add(p),l[E].add(p),l[x].add(p))}let b=this.groups;b.length===0&&(b=[{start:0,count:e.count}]);for(let U=0,E=b.length;U<E;++U){const x=b[U],w=x.start,k=x.count;for(let z=w,Z=w+k;z<Z;z+=3)u(e.getX(z+0),e.getX(z+1),e.getX(z+2))}const T=new N,S=new N,B=new N,D=new N;function A(U){B.fromBufferAttribute(r,U),D.copy(B);const E=o[U];T.copy(E),T.sub(B.multiplyScalar(B.dot(E))).normalize(),S.crossVectors(D,E);const w=S.dot(l[U])<0?-1:1;a.setXYZW(U,T.x,T.y,T.z,w)}for(let U=0,E=b.length;U<E;++U){const x=b[U],w=x.start,k=x.count;for(let z=w,Z=w+k;z<Z;z+=3)A(e.getX(z+0)),A(e.getX(z+1)),A(e.getX(z+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new zt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,m=n.count;d<m;d++)n.setXYZ(d,0,0,0);const r=new N,s=new N,a=new N,o=new N,l=new N,c=new N,h=new N,f=new N;if(e)for(let d=0,m=e.count;d<m;d+=3){const _=e.getX(d+0),M=e.getX(d+1),p=e.getX(d+2);r.fromBufferAttribute(t,_),s.fromBufferAttribute(t,M),a.fromBufferAttribute(t,p),h.subVectors(a,s),f.subVectors(r,s),h.cross(f),o.fromBufferAttribute(n,_),l.fromBufferAttribute(n,M),c.fromBufferAttribute(n,p),o.add(h),l.add(h),c.add(h),n.setXYZ(_,o.x,o.y,o.z),n.setXYZ(M,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let d=0,m=t.count;d<m;d+=3)r.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),h.subVectors(a,s),f.subVectors(r,s),h.cross(f),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)ct.fromBufferAttribute(e,t),ct.normalize(),e.setXYZ(t,ct.x,ct.y,ct.z)}toNonIndexed(){function e(o,l){const c=o.array,h=o.itemSize,f=o.normalized,d=new c.constructor(l.length*h);let m=0,_=0;for(let M=0,p=l.length;M<p;M++){o.isInterleavedBufferAttribute?m=l[M]*o.data.stride+o.offset:m=l[M]*h;for(let u=0;u<h;u++)d[_++]=c[m++]}return new zt(d,h,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new In,n=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=e(l,n);t.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let h=0,f=c.length;h<f;h++){const d=c[h],m=e(d,n);l.push(m)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let f=0,d=c.length;f<d;f++){const m=c[f];h.push(m.toJSON(e.data))}h.length>0&&(r[l]=h,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const r=e.attributes;for(const c in r){const h=r[c];this.setAttribute(c,h.clone(t))}const s=e.morphAttributes;for(const c in s){const h=[],f=s[c];for(let d=0,m=f.length;d<m;d++)h.push(f[d].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,h=a.length;c<h;c++){const f=a[c];this.addGroup(f.start,f.count,f.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const pa=new at,yn=new Ll,Hi=new Ns,ma=new N,Gi=new N,Vi=new N,ki=new N,Dr=new N,Wi=new N,ga=new N,Xi=new N;class kt extends bt{constructor(e=new In,t=new po){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){Wi.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const h=o[l],f=s[l];h!==0&&(Dr.fromBufferAttribute(f,e),a?Wi.addScaledVector(Dr,h):Wi.addScaledVector(Dr.sub(t),h))}t.add(Wi)}return t}raycast(e,t){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Hi.copy(n.boundingSphere),Hi.applyMatrix4(s),yn.copy(e.ray).recast(e.near),!(Hi.containsPoint(yn.origin)===!1&&(yn.intersectSphere(Hi,ma)===null||yn.origin.distanceToSquared(ma)>(e.far-e.near)**2))&&(pa.copy(s).invert(),yn.copy(e.ray).applyMatrix4(pa),!(n.boundingBox!==null&&yn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,yn)))}_computeIntersections(e,t,n){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,f=s.attributes.normal,d=s.groups,m=s.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,M=d.length;_<M;_++){const p=d[_],u=a[p.materialIndex],b=Math.max(p.start,m.start),T=Math.min(o.count,Math.min(p.start+p.count,m.start+m.count));for(let S=b,B=T;S<B;S+=3){const D=o.getX(S),A=o.getX(S+1),U=o.getX(S+2);r=qi(this,u,e,n,c,h,f,D,A,U),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const _=Math.max(0,m.start),M=Math.min(o.count,m.start+m.count);for(let p=_,u=M;p<u;p+=3){const b=o.getX(p),T=o.getX(p+1),S=o.getX(p+2);r=qi(this,a,e,n,c,h,f,b,T,S),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let _=0,M=d.length;_<M;_++){const p=d[_],u=a[p.materialIndex],b=Math.max(p.start,m.start),T=Math.min(l.count,Math.min(p.start+p.count,m.start+m.count));for(let S=b,B=T;S<B;S+=3){const D=S,A=S+1,U=S+2;r=qi(this,u,e,n,c,h,f,D,A,U),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const _=Math.max(0,m.start),M=Math.min(l.count,m.start+m.count);for(let p=_,u=M;p<u;p+=3){const b=p,T=p+1,S=p+2;r=qi(this,a,e,n,c,h,f,b,T,S),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}}}function Gl(i,e,t,n,r,s,a,o){let l;if(e.side===Mt?l=n.intersectTriangle(a,s,r,!0,o):l=n.intersectTriangle(r,s,a,e.side===xn,o),l===null)return null;Xi.copy(o),Xi.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(Xi);return c<t.near||c>t.far?null:{distance:c,point:Xi.clone(),object:i}}function qi(i,e,t,n,r,s,a,o,l,c){i.getVertexPosition(o,Gi),i.getVertexPosition(l,Vi),i.getVertexPosition(c,ki);const h=Gl(i,e,t,n,Gi,Vi,ki,ga);if(h){const f=new N;Nt.getBarycoord(ga,Gi,Vi,ki,f),r&&(h.uv=Nt.getInterpolatedAttribute(r,o,l,c,f,new ye)),s&&(h.uv1=Nt.getInterpolatedAttribute(s,o,l,c,f,new ye)),a&&(h.normal=Nt.getInterpolatedAttribute(a,o,l,c,f,new N),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a:o,b:l,c,normal:new N,materialIndex:0};Nt.getNormal(Gi,Vi,ki,d.normal),h.face=d,h.barycoord=f}return h}class Ai extends In{constructor(e=1,t=1,n=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],h=[],f=[];let d=0,m=0;_("z","y","x",-1,-1,n,t,e,a,s,0),_("z","y","x",1,-1,n,t,-e,a,s,1),_("x","z","y",1,1,e,n,t,r,a,2),_("x","z","y",1,-1,e,n,-t,r,a,3),_("x","y","z",1,-1,e,t,n,r,s,4),_("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(l),this.setAttribute("position",new Dn(c,3)),this.setAttribute("normal",new Dn(h,3)),this.setAttribute("uv",new Dn(f,2));function _(M,p,u,b,T,S,B,D,A,U,E){const x=S/A,w=B/U,k=S/2,z=B/2,Z=D/2,$=A+1,X=U+1;let J=0,G=0;const re=new N;for(let he=0;he<X;he++){const Me=he*w-z;for(let Ne=0;Ne<$;Ne++){const $e=Ne*x-k;re[M]=$e*b,re[p]=Me*T,re[u]=Z,c.push(re.x,re.y,re.z),re[M]=0,re[p]=0,re[u]=D>0?1:-1,h.push(re.x,re.y,re.z),f.push(Ne/A),f.push(1-he/U),J+=1}}for(let he=0;he<U;he++)for(let Me=0;Me<A;Me++){const Ne=d+Me+$*he,$e=d+Me+$*(he+1),W=d+(Me+1)+$*(he+1),te=d+(Me+1)+$*he;l.push(Ne,$e,te),l.push($e,W,te),G+=6}o.addGroup(m,G,E),m+=G,d+=J}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ai(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function si(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function dt(i){const e={};for(let t=0;t<i.length;t++){const n=si(i[t]);for(const r in n)e[r]=n[r]}return e}function Vl(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function _o(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ve.workingColorSpace}const kl={clone:si,merge:dt};var Wl=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Xl=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class an extends or{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Wl,this.fragmentShader=Xl,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=si(e.uniforms),this.uniformsGroups=Vl(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class vo extends bt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new at,this.projectionMatrix=new at,this.projectionMatrixInverse=new at,this.coordinateSystem=tn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const pn=new N,_a=new ye,va=new ye;class It extends vo{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=As*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ur*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return As*2*Math.atan(Math.tan(ur*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){pn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(pn.x,pn.y).multiplyScalar(-e/pn.z),pn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(pn.x,pn.y).multiplyScalar(-e/pn.z)}getViewSize(e,t){return this.getViewBounds(e,_a,va),t.subVectors(va,_a)}setViewOffset(e,t,n,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(ur*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,t-=a.offsetY*n/c,r*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Yn=-90,Zn=1;class ql extends bt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new It(Yn,Zn,e,t);r.layers=this.layers,this.add(r);const s=new It(Yn,Zn,e,t);s.layers=this.layers,this.add(s);const a=new It(Yn,Zn,e,t);a.layers=this.layers,this.add(a);const o=new It(Yn,Zn,e,t);o.layers=this.layers,this.add(o);const l=new It(Yn,Zn,e,t);l.layers=this.layers,this.add(l);const c=new It(Yn,Zn,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,r,s,a,o,l]=t;for(const c of t)this.remove(c);if(e===tn)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===rr)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,h]=this.children,f=e.getRenderTarget(),d=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const M=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,r),e.render(t,s),e.setRenderTarget(n,1,r),e.render(t,a),e.setRenderTarget(n,2,r),e.render(t,o),e.setRenderTarget(n,3,r),e.render(t,l),e.setRenderTarget(n,4,r),e.render(t,c),n.texture.generateMipmaps=M,e.setRenderTarget(n,5,r),e.render(t,h),e.setRenderTarget(f,d,m),e.xr.enabled=_,n.texture.needsPMREMUpdate=!0}}class xo extends pt{constructor(e,t,n,r,s,a,o,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:ti,super(e,t,n,r,s,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Yl extends Un{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new xo(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Ft}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Ai(5,5,5),s=new an({name:"CubemapFromEquirect",uniforms:si(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Mt,blending:_n});s.uniforms.tEquirect.value=t;const a=new kt(r,s),o=t.minFilter;return t.minFilter===gn&&(t.minFilter=Ft),new ql(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,r){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,r);e.setRenderTarget(s)}}const Lr=new N,Zl=new N,$l=new Le;class wn{constructor(e=new N(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=Lr.subVectors(n,t).cross(Zl.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Lr),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||$l.getNormalMatrix(e),r=this.coplanarPoint(Lr).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Tn=new Ns,Yi=new N;class Mo{constructor(e=new wn,t=new wn,n=new wn,r=new wn,s=new wn,a=new wn){this.planes=[e,t,n,r,s,a]}set(e,t,n,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=tn){const n=this.planes,r=e.elements,s=r[0],a=r[1],o=r[2],l=r[3],c=r[4],h=r[5],f=r[6],d=r[7],m=r[8],_=r[9],M=r[10],p=r[11],u=r[12],b=r[13],T=r[14],S=r[15];if(n[0].setComponents(l-s,d-c,p-m,S-u).normalize(),n[1].setComponents(l+s,d+c,p+m,S+u).normalize(),n[2].setComponents(l+a,d+h,p+_,S+b).normalize(),n[3].setComponents(l-a,d-h,p-_,S-b).normalize(),n[4].setComponents(l-o,d-f,p-M,S-T).normalize(),t===tn)n[5].setComponents(l+o,d+f,p+M,S+T).normalize();else if(t===rr)n[5].setComponents(o,f,M,T).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Tn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Tn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Tn)}intersectsSprite(e){return Tn.center.set(0,0,0),Tn.radius=.7071067811865476,Tn.applyMatrix4(e.matrixWorld),this.intersectsSphere(Tn)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(Yi.x=r.normal.x>0?e.max.x:e.min.x,Yi.y=r.normal.y>0?e.max.y:e.min.y,Yi.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Yi)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function So(){let i=null,e=!1,t=null,n=null;function r(s,a){t(s,a),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function Kl(i){const e=new WeakMap;function t(o,l){const c=o.array,h=o.usage,f=c.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,c,h),o.onUploadCallback();let m;if(c instanceof Float32Array)m=i.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?m=i.HALF_FLOAT:m=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=i.SHORT;else if(c instanceof Uint32Array)m=i.UNSIGNED_INT;else if(c instanceof Int32Array)m=i.INT;else if(c instanceof Int8Array)m=i.BYTE;else if(c instanceof Uint8Array)m=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:f}}function n(o,l,c){const h=l.array,f=l.updateRanges;if(i.bindBuffer(c,o),f.length===0)i.bufferSubData(c,0,h);else{f.sort((m,_)=>m.start-_.start);let d=0;for(let m=1;m<f.length;m++){const _=f[d],M=f[m];M.start<=_.start+_.count+1?_.count=Math.max(_.count,M.start+M.count-_.start):(++d,f[d]=M)}f.length=d+1;for(let m=0,_=f.length;m<_;m++){const M=f[m];i.bufferSubData(c,M.start*h.BYTES_PER_ELEMENT,h,M.start,M.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(i.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:r,remove:s,update:a}}class wi extends In{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const s=e/2,a=t/2,o=Math.floor(n),l=Math.floor(r),c=o+1,h=l+1,f=e/o,d=t/l,m=[],_=[],M=[],p=[];for(let u=0;u<h;u++){const b=u*d-a;for(let T=0;T<c;T++){const S=T*f-s;_.push(S,-b,0),M.push(0,0,1),p.push(T/o),p.push(1-u/l)}}for(let u=0;u<l;u++)for(let b=0;b<o;b++){const T=b+c*u,S=b+c*(u+1),B=b+1+c*(u+1),D=b+1+c*u;m.push(T,S,D),m.push(S,B,D)}this.setIndex(m),this.setAttribute("position",new Dn(_,3)),this.setAttribute("normal",new Dn(M,3)),this.setAttribute("uv",new Dn(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new wi(e.width,e.height,e.widthSegments,e.heightSegments)}}var jl=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Jl=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Ql=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ec=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,tc=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,nc=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ic=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,rc=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,sc=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,ac=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,oc=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,lc=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,cc=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,hc=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,uc=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,fc=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,dc=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,pc=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,mc=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,gc=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,_c=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,vc=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,xc=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Mc=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Sc=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Ec=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,yc=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Tc=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,bc=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Ac=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,wc="gl_FragColor = linearToOutputTexel( gl_FragColor );",Rc=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Cc=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Pc=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Dc=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Lc=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Uc=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Ic=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Nc=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Fc=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Oc=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Bc=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,zc=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Hc=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Gc=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Vc=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,kc=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Wc=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Xc=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,qc=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Yc=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Zc=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,$c=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Kc=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,jc=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Jc=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Qc=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,eh=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,th=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,nh=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,ih=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,rh=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,sh=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,ah=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,oh=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,lh=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ch=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,hh=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,uh=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,fh=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,dh=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ph=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,mh=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,gh=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,_h=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,vh=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,xh=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Mh=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Sh=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Eh=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,yh=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Th=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,bh=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Ah=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,wh=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Rh=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Ch=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Ph=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Dh=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Lh=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Uh=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Ih=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Nh=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Fh=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Oh=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Bh=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,zh=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Hh=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Gh=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Vh=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,kh=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Wh=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Xh=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,qh=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Yh=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Zh=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,$h=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Kh=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,jh=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Jh=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Qh=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,eu=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,tu=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,nu=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,iu=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,ru=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,su=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,au=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,ou=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,lu=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,cu=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,hu=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,uu=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,fu=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,du=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,pu=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,mu=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,gu=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,_u=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,vu=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,xu=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Mu=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Su=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Eu=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,yu=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Tu=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,bu=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Au=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,wu=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ru=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Cu=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ie={alphahash_fragment:jl,alphahash_pars_fragment:Jl,alphamap_fragment:Ql,alphamap_pars_fragment:ec,alphatest_fragment:tc,alphatest_pars_fragment:nc,aomap_fragment:ic,aomap_pars_fragment:rc,batching_pars_vertex:sc,batching_vertex:ac,begin_vertex:oc,beginnormal_vertex:lc,bsdfs:cc,iridescence_fragment:hc,bumpmap_pars_fragment:uc,clipping_planes_fragment:fc,clipping_planes_pars_fragment:dc,clipping_planes_pars_vertex:pc,clipping_planes_vertex:mc,color_fragment:gc,color_pars_fragment:_c,color_pars_vertex:vc,color_vertex:xc,common:Mc,cube_uv_reflection_fragment:Sc,defaultnormal_vertex:Ec,displacementmap_pars_vertex:yc,displacementmap_vertex:Tc,emissivemap_fragment:bc,emissivemap_pars_fragment:Ac,colorspace_fragment:wc,colorspace_pars_fragment:Rc,envmap_fragment:Cc,envmap_common_pars_fragment:Pc,envmap_pars_fragment:Dc,envmap_pars_vertex:Lc,envmap_physical_pars_fragment:kc,envmap_vertex:Uc,fog_vertex:Ic,fog_pars_vertex:Nc,fog_fragment:Fc,fog_pars_fragment:Oc,gradientmap_pars_fragment:Bc,lightmap_pars_fragment:zc,lights_lambert_fragment:Hc,lights_lambert_pars_fragment:Gc,lights_pars_begin:Vc,lights_toon_fragment:Wc,lights_toon_pars_fragment:Xc,lights_phong_fragment:qc,lights_phong_pars_fragment:Yc,lights_physical_fragment:Zc,lights_physical_pars_fragment:$c,lights_fragment_begin:Kc,lights_fragment_maps:jc,lights_fragment_end:Jc,logdepthbuf_fragment:Qc,logdepthbuf_pars_fragment:eh,logdepthbuf_pars_vertex:th,logdepthbuf_vertex:nh,map_fragment:ih,map_pars_fragment:rh,map_particle_fragment:sh,map_particle_pars_fragment:ah,metalnessmap_fragment:oh,metalnessmap_pars_fragment:lh,morphinstance_vertex:ch,morphcolor_vertex:hh,morphnormal_vertex:uh,morphtarget_pars_vertex:fh,morphtarget_vertex:dh,normal_fragment_begin:ph,normal_fragment_maps:mh,normal_pars_fragment:gh,normal_pars_vertex:_h,normal_vertex:vh,normalmap_pars_fragment:xh,clearcoat_normal_fragment_begin:Mh,clearcoat_normal_fragment_maps:Sh,clearcoat_pars_fragment:Eh,iridescence_pars_fragment:yh,opaque_fragment:Th,packing:bh,premultiplied_alpha_fragment:Ah,project_vertex:wh,dithering_fragment:Rh,dithering_pars_fragment:Ch,roughnessmap_fragment:Ph,roughnessmap_pars_fragment:Dh,shadowmap_pars_fragment:Lh,shadowmap_pars_vertex:Uh,shadowmap_vertex:Ih,shadowmask_pars_fragment:Nh,skinbase_vertex:Fh,skinning_pars_vertex:Oh,skinning_vertex:Bh,skinnormal_vertex:zh,specularmap_fragment:Hh,specularmap_pars_fragment:Gh,tonemapping_fragment:Vh,tonemapping_pars_fragment:kh,transmission_fragment:Wh,transmission_pars_fragment:Xh,uv_pars_fragment:qh,uv_pars_vertex:Yh,uv_vertex:Zh,worldpos_vertex:$h,background_vert:Kh,background_frag:jh,backgroundCube_vert:Jh,backgroundCube_frag:Qh,cube_vert:eu,cube_frag:tu,depth_vert:nu,depth_frag:iu,distanceRGBA_vert:ru,distanceRGBA_frag:su,equirect_vert:au,equirect_frag:ou,linedashed_vert:lu,linedashed_frag:cu,meshbasic_vert:hu,meshbasic_frag:uu,meshlambert_vert:fu,meshlambert_frag:du,meshmatcap_vert:pu,meshmatcap_frag:mu,meshnormal_vert:gu,meshnormal_frag:_u,meshphong_vert:vu,meshphong_frag:xu,meshphysical_vert:Mu,meshphysical_frag:Su,meshtoon_vert:Eu,meshtoon_frag:yu,points_vert:Tu,points_frag:bu,shadow_vert:Au,shadow_frag:wu,sprite_vert:Ru,sprite_frag:Cu},ne={common:{diffuse:{value:new Ye(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Le},alphaMap:{value:null},alphaMapTransform:{value:new Le},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Le}},envmap:{envMap:{value:null},envMapRotation:{value:new Le},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Le}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Le}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Le},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Le},normalScale:{value:new ye(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Le},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Le}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Le}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Le}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ye(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ye(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Le},alphaTest:{value:0},uvTransform:{value:new Le}},sprite:{diffuse:{value:new Ye(16777215)},opacity:{value:1},center:{value:new ye(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Le},alphaMap:{value:null},alphaMapTransform:{value:new Le},alphaTest:{value:0}}},Vt={basic:{uniforms:dt([ne.common,ne.specularmap,ne.envmap,ne.aomap,ne.lightmap,ne.fog]),vertexShader:Ie.meshbasic_vert,fragmentShader:Ie.meshbasic_frag},lambert:{uniforms:dt([ne.common,ne.specularmap,ne.envmap,ne.aomap,ne.lightmap,ne.emissivemap,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.fog,ne.lights,{emissive:{value:new Ye(0)}}]),vertexShader:Ie.meshlambert_vert,fragmentShader:Ie.meshlambert_frag},phong:{uniforms:dt([ne.common,ne.specularmap,ne.envmap,ne.aomap,ne.lightmap,ne.emissivemap,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.fog,ne.lights,{emissive:{value:new Ye(0)},specular:{value:new Ye(1118481)},shininess:{value:30}}]),vertexShader:Ie.meshphong_vert,fragmentShader:Ie.meshphong_frag},standard:{uniforms:dt([ne.common,ne.envmap,ne.aomap,ne.lightmap,ne.emissivemap,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.roughnessmap,ne.metalnessmap,ne.fog,ne.lights,{emissive:{value:new Ye(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ie.meshphysical_vert,fragmentShader:Ie.meshphysical_frag},toon:{uniforms:dt([ne.common,ne.aomap,ne.lightmap,ne.emissivemap,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.gradientmap,ne.fog,ne.lights,{emissive:{value:new Ye(0)}}]),vertexShader:Ie.meshtoon_vert,fragmentShader:Ie.meshtoon_frag},matcap:{uniforms:dt([ne.common,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.fog,{matcap:{value:null}}]),vertexShader:Ie.meshmatcap_vert,fragmentShader:Ie.meshmatcap_frag},points:{uniforms:dt([ne.points,ne.fog]),vertexShader:Ie.points_vert,fragmentShader:Ie.points_frag},dashed:{uniforms:dt([ne.common,ne.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ie.linedashed_vert,fragmentShader:Ie.linedashed_frag},depth:{uniforms:dt([ne.common,ne.displacementmap]),vertexShader:Ie.depth_vert,fragmentShader:Ie.depth_frag},normal:{uniforms:dt([ne.common,ne.bumpmap,ne.normalmap,ne.displacementmap,{opacity:{value:1}}]),vertexShader:Ie.meshnormal_vert,fragmentShader:Ie.meshnormal_frag},sprite:{uniforms:dt([ne.sprite,ne.fog]),vertexShader:Ie.sprite_vert,fragmentShader:Ie.sprite_frag},background:{uniforms:{uvTransform:{value:new Le},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ie.background_vert,fragmentShader:Ie.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Le}},vertexShader:Ie.backgroundCube_vert,fragmentShader:Ie.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ie.cube_vert,fragmentShader:Ie.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ie.equirect_vert,fragmentShader:Ie.equirect_frag},distanceRGBA:{uniforms:dt([ne.common,ne.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ie.distanceRGBA_vert,fragmentShader:Ie.distanceRGBA_frag},shadow:{uniforms:dt([ne.lights,ne.fog,{color:{value:new Ye(0)},opacity:{value:1}}]),vertexShader:Ie.shadow_vert,fragmentShader:Ie.shadow_frag}};Vt.physical={uniforms:dt([Vt.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Le},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Le},clearcoatNormalScale:{value:new ye(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Le},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Le},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Le},sheen:{value:0},sheenColor:{value:new Ye(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Le},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Le},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Le},transmissionSamplerSize:{value:new ye},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Le},attenuationDistance:{value:0},attenuationColor:{value:new Ye(0)},specularColor:{value:new Ye(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Le},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Le},anisotropyVector:{value:new ye},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Le}}]),vertexShader:Ie.meshphysical_vert,fragmentShader:Ie.meshphysical_frag};const Zi={r:0,b:0,g:0},bn=new sn,Pu=new at;function Du(i,e,t,n,r,s,a){const o=new Ye(0);let l=s===!0?0:1,c,h,f=null,d=0,m=null;function _(b){let T=b.isScene===!0?b.background:null;return T&&T.isTexture&&(T=(b.backgroundBlurriness>0?t:e).get(T)),T}function M(b){let T=!1;const S=_(b);S===null?u(o,l):S&&S.isColor&&(u(S,1),T=!0);const B=i.xr.getEnvironmentBlendMode();B==="additive"?n.buffers.color.setClear(0,0,0,1,a):B==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||T)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function p(b,T){const S=_(T);S&&(S.isCubeTexture||S.mapping===sr)?(h===void 0&&(h=new kt(new Ai(1,1,1),new an({name:"BackgroundCubeMaterial",uniforms:si(Vt.backgroundCube.uniforms),vertexShader:Vt.backgroundCube.vertexShader,fragmentShader:Vt.backgroundCube.fragmentShader,side:Mt,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(B,D,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(h)),bn.copy(T.backgroundRotation),bn.x*=-1,bn.y*=-1,bn.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(bn.y*=-1,bn.z*=-1),h.material.uniforms.envMap.value=S,h.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=T.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Pu.makeRotationFromEuler(bn)),h.material.toneMapped=Ve.getTransfer(S.colorSpace)!==Ze,(f!==S||d!==S.version||m!==i.toneMapping)&&(h.material.needsUpdate=!0,f=S,d=S.version,m=i.toneMapping),h.layers.enableAll(),b.unshift(h,h.geometry,h.material,0,0,null)):S&&S.isTexture&&(c===void 0&&(c=new kt(new wi(2,2),new an({name:"BackgroundMaterial",uniforms:si(Vt.background.uniforms),vertexShader:Vt.background.vertexShader,fragmentShader:Vt.background.fragmentShader,side:xn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=S,c.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,c.material.toneMapped=Ve.getTransfer(S.colorSpace)!==Ze,S.matrixAutoUpdate===!0&&S.updateMatrix(),c.material.uniforms.uvTransform.value.copy(S.matrix),(f!==S||d!==S.version||m!==i.toneMapping)&&(c.material.needsUpdate=!0,f=S,d=S.version,m=i.toneMapping),c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null))}function u(b,T){b.getRGB(Zi,_o(i)),n.buffers.color.setClear(Zi.r,Zi.g,Zi.b,T,a)}return{getClearColor:function(){return o},setClearColor:function(b,T=1){o.set(b),l=T,u(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(b){l=b,u(o,l)},render:M,addToRenderList:p}}function Lu(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=d(null);let s=r,a=!1;function o(x,w,k,z,Z){let $=!1;const X=f(z,k,w);s!==X&&(s=X,c(s.object)),$=m(x,z,k,Z),$&&_(x,z,k,Z),Z!==null&&e.update(Z,i.ELEMENT_ARRAY_BUFFER),($||a)&&(a=!1,S(x,w,k,z),Z!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(Z).buffer))}function l(){return i.createVertexArray()}function c(x){return i.bindVertexArray(x)}function h(x){return i.deleteVertexArray(x)}function f(x,w,k){const z=k.wireframe===!0;let Z=n[x.id];Z===void 0&&(Z={},n[x.id]=Z);let $=Z[w.id];$===void 0&&($={},Z[w.id]=$);let X=$[z];return X===void 0&&(X=d(l()),$[z]=X),X}function d(x){const w=[],k=[],z=[];for(let Z=0;Z<t;Z++)w[Z]=0,k[Z]=0,z[Z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:w,enabledAttributes:k,attributeDivisors:z,object:x,attributes:{},index:null}}function m(x,w,k,z){const Z=s.attributes,$=w.attributes;let X=0;const J=k.getAttributes();for(const G in J)if(J[G].location>=0){const he=Z[G];let Me=$[G];if(Me===void 0&&(G==="instanceMatrix"&&x.instanceMatrix&&(Me=x.instanceMatrix),G==="instanceColor"&&x.instanceColor&&(Me=x.instanceColor)),he===void 0||he.attribute!==Me||Me&&he.data!==Me.data)return!0;X++}return s.attributesNum!==X||s.index!==z}function _(x,w,k,z){const Z={},$=w.attributes;let X=0;const J=k.getAttributes();for(const G in J)if(J[G].location>=0){let he=$[G];he===void 0&&(G==="instanceMatrix"&&x.instanceMatrix&&(he=x.instanceMatrix),G==="instanceColor"&&x.instanceColor&&(he=x.instanceColor));const Me={};Me.attribute=he,he&&he.data&&(Me.data=he.data),Z[G]=Me,X++}s.attributes=Z,s.attributesNum=X,s.index=z}function M(){const x=s.newAttributes;for(let w=0,k=x.length;w<k;w++)x[w]=0}function p(x){u(x,0)}function u(x,w){const k=s.newAttributes,z=s.enabledAttributes,Z=s.attributeDivisors;k[x]=1,z[x]===0&&(i.enableVertexAttribArray(x),z[x]=1),Z[x]!==w&&(i.vertexAttribDivisor(x,w),Z[x]=w)}function b(){const x=s.newAttributes,w=s.enabledAttributes;for(let k=0,z=w.length;k<z;k++)w[k]!==x[k]&&(i.disableVertexAttribArray(k),w[k]=0)}function T(x,w,k,z,Z,$,X){X===!0?i.vertexAttribIPointer(x,w,k,Z,$):i.vertexAttribPointer(x,w,k,z,Z,$)}function S(x,w,k,z){M();const Z=z.attributes,$=k.getAttributes(),X=w.defaultAttributeValues;for(const J in $){const G=$[J];if(G.location>=0){let re=Z[J];if(re===void 0&&(J==="instanceMatrix"&&x.instanceMatrix&&(re=x.instanceMatrix),J==="instanceColor"&&x.instanceColor&&(re=x.instanceColor)),re!==void 0){const he=re.normalized,Me=re.itemSize,Ne=e.get(re);if(Ne===void 0)continue;const $e=Ne.buffer,W=Ne.type,te=Ne.bytesPerElement,_e=W===i.INT||W===i.UNSIGNED_INT||re.gpuType===Cs;if(re.isInterleavedBufferAttribute){const se=re.data,Ae=se.stride,Ce=re.offset;if(se.isInstancedInterleavedBuffer){for(let Fe=0;Fe<G.locationSize;Fe++)u(G.location+Fe,se.meshPerAttribute);x.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=se.meshPerAttribute*se.count)}else for(let Fe=0;Fe<G.locationSize;Fe++)p(G.location+Fe);i.bindBuffer(i.ARRAY_BUFFER,$e);for(let Fe=0;Fe<G.locationSize;Fe++)T(G.location+Fe,Me/G.locationSize,W,he,Ae*te,(Ce+Me/G.locationSize*Fe)*te,_e)}else{if(re.isInstancedBufferAttribute){for(let se=0;se<G.locationSize;se++)u(G.location+se,re.meshPerAttribute);x.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=re.meshPerAttribute*re.count)}else for(let se=0;se<G.locationSize;se++)p(G.location+se);i.bindBuffer(i.ARRAY_BUFFER,$e);for(let se=0;se<G.locationSize;se++)T(G.location+se,Me/G.locationSize,W,he,Me*te,Me/G.locationSize*se*te,_e)}}else if(X!==void 0){const he=X[J];if(he!==void 0)switch(he.length){case 2:i.vertexAttrib2fv(G.location,he);break;case 3:i.vertexAttrib3fv(G.location,he);break;case 4:i.vertexAttrib4fv(G.location,he);break;default:i.vertexAttrib1fv(G.location,he)}}}}b()}function B(){U();for(const x in n){const w=n[x];for(const k in w){const z=w[k];for(const Z in z)h(z[Z].object),delete z[Z];delete w[k]}delete n[x]}}function D(x){if(n[x.id]===void 0)return;const w=n[x.id];for(const k in w){const z=w[k];for(const Z in z)h(z[Z].object),delete z[Z];delete w[k]}delete n[x.id]}function A(x){for(const w in n){const k=n[w];if(k[x.id]===void 0)continue;const z=k[x.id];for(const Z in z)h(z[Z].object),delete z[Z];delete k[x.id]}}function U(){E(),a=!0,s!==r&&(s=r,c(s.object))}function E(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:U,resetDefaultState:E,dispose:B,releaseStatesOfGeometry:D,releaseStatesOfProgram:A,initAttributes:M,enableAttribute:p,disableUnusedAttributes:b}}function Uu(i,e,t){let n;function r(c){n=c}function s(c,h){i.drawArrays(n,c,h),t.update(h,n,1)}function a(c,h,f){f!==0&&(i.drawArraysInstanced(n,c,h,f),t.update(h,n,f))}function o(c,h,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,f);let m=0;for(let _=0;_<f;_++)m+=h[_];t.update(m,n,1)}function l(c,h,f,d){if(f===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let _=0;_<c.length;_++)a(c[_],h[_],d[_]);else{m.multiDrawArraysInstancedWEBGL(n,c,0,h,0,d,0,f);let _=0;for(let M=0;M<f;M++)_+=h[M]*d[M];t.update(_,n,1)}}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function Iu(i,e,t,n){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");r=i.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(A){return!(A!==Ot&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(A){const U=A===Ei&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==rn&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==en&&!U)}function l(A){if(A==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const f=t.logarithmicDepthBuffer===!0,d=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),m=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=i.getParameter(i.MAX_TEXTURE_SIZE),p=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),u=i.getParameter(i.MAX_VERTEX_ATTRIBS),b=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),T=i.getParameter(i.MAX_VARYING_VECTORS),S=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),B=_>0,D=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:f,reverseDepthBuffer:d,maxTextures:m,maxVertexTextures:_,maxTextureSize:M,maxCubemapSize:p,maxAttributes:u,maxVertexUniforms:b,maxVaryings:T,maxFragmentUniforms:S,vertexTextures:B,maxSamples:D}}function Nu(i){const e=this;let t=null,n=0,r=!1,s=!1;const a=new wn,o=new Le,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){const m=f.length!==0||d||n!==0||r;return r=d,n=f.length,m},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,d){t=h(f,d,0)},this.setState=function(f,d,m){const _=f.clippingPlanes,M=f.clipIntersection,p=f.clipShadows,u=i.get(f);if(!r||_===null||_.length===0||s&&!p)s?h(null):c();else{const b=s?0:n,T=b*4;let S=u.clippingState||null;l.value=S,S=h(_,d,T,m);for(let B=0;B!==T;++B)S[B]=t[B];u.clippingState=S,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=b}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(f,d,m,_){const M=f!==null?f.length:0;let p=null;if(M!==0){if(p=l.value,_!==!0||p===null){const u=m+M*4,b=d.matrixWorldInverse;o.getNormalMatrix(b),(p===null||p.length<u)&&(p=new Float32Array(u));for(let T=0,S=m;T!==M;++T,S+=4)a.copy(f[T]).applyMatrix4(b,o),a.normal.toArray(p,S),p[S+3]=a.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=M,e.numIntersection=0,p}}function Fu(i){let e=new WeakMap;function t(a,o){return o===Kr?a.mapping=ti:o===jr&&(a.mapping=ni),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===Kr||o===jr)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new Yl(l.height);return c.fromEquirectangularTexture(i,a),e.set(a,c),a.addEventListener("dispose",r),t(c.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class Eo extends vo{constructor(e=-1,t=1,n=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-e,a=n+e,o=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Kn=4,xa=[.125,.215,.35,.446,.526,.582],Pn=20,Ur=new Eo,Ma=new Ye;let Ir=null,Nr=0,Fr=0,Or=!1;const Rn=(1+Math.sqrt(5))/2,$n=1/Rn,Sa=[new N(-Rn,$n,0),new N(Rn,$n,0),new N(-$n,0,Rn),new N($n,0,Rn),new N(0,Rn,-$n),new N(0,Rn,$n),new N(-1,1,-1),new N(1,1,-1),new N(-1,1,1),new N(1,1,1)];class Ea{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100){Ir=this._renderer.getRenderTarget(),Nr=this._renderer.getActiveCubeFace(),Fr=this._renderer.getActiveMipmapLevel(),Or=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ba(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ta(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ir,Nr,Fr),this._renderer.xr.enabled=Or,e.scissorTest=!1,$i(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ti||e.mapping===ni?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ir=this._renderer.getRenderTarget(),Nr=this._renderer.getActiveCubeFace(),Fr=this._renderer.getActiveMipmapLevel(),Or=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Ft,minFilter:Ft,generateMipmaps:!1,type:Ei,format:Ot,colorSpace:ai,depthBuffer:!1},r=ya(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ya(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Ou(s)),this._blurMaterial=Bu(s,e,t)}return r}_compileMaterial(e){const t=new kt(this._lodPlanes[0],e);this._renderer.compile(t,Ur)}_sceneToCubeUV(e,t,n,r){const o=new It(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,d=h.toneMapping;h.getClearColor(Ma),h.toneMapping=vn,h.autoClear=!1;const m=new po({name:"PMREM.Background",side:Mt,depthWrite:!1,depthTest:!1}),_=new kt(new Ai,m);let M=!1;const p=e.background;p?p.isColor&&(m.color.copy(p),e.background=null,M=!0):(m.color.copy(Ma),M=!0);for(let u=0;u<6;u++){const b=u%3;b===0?(o.up.set(0,l[u],0),o.lookAt(c[u],0,0)):b===1?(o.up.set(0,0,l[u]),o.lookAt(0,c[u],0)):(o.up.set(0,l[u],0),o.lookAt(0,0,c[u]));const T=this._cubeSize;$i(r,b*T,u>2?T:0,T,T),h.setRenderTarget(r),M&&h.render(_,o),h.render(e,o)}_.geometry.dispose(),_.material.dispose(),h.toneMapping=d,h.autoClear=f,e.background=p}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===ti||e.mapping===ni;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=ba()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ta());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new kt(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;$i(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,Ur)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=Sa[(r-s-1)%Sa.length];this._blur(e,s-1,s,a,o)}t.autoClear=n}_blur(e,t,n,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,r,"latitudinal",s),this._halfBlur(a,e,n,n,r,"longitudinal",s)}_halfBlur(e,t,n,r,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,f=new kt(this._lodPlanes[r],c),d=c.uniforms,m=this._sizeLods[n]-1,_=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*Pn-1),M=s/_,p=isFinite(s)?1+Math.floor(h*M):Pn;p>Pn&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Pn}`);const u=[];let b=0;for(let A=0;A<Pn;++A){const U=A/M,E=Math.exp(-U*U/2);u.push(E),A===0?b+=E:A<p&&(b+=2*E)}for(let A=0;A<u.length;A++)u[A]=u[A]/b;d.envMap.value=e.texture,d.samples.value=p,d.weights.value=u,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:T}=this;d.dTheta.value=_,d.mipInt.value=T-n;const S=this._sizeLods[r],B=3*S*(r>T-Kn?r-T+Kn:0),D=4*(this._cubeSize-S);$i(t,B,D,3*S,2*S),l.setRenderTarget(t),l.render(f,Ur)}}function Ou(i){const e=[],t=[],n=[];let r=i;const s=i-Kn+1+xa.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);t.push(o);let l=1/o;a>i-Kn?l=xa[a-i+Kn-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),h=-c,f=1+c,d=[h,h,f,h,f,f,h,h,f,f,h,f],m=6,_=6,M=3,p=2,u=1,b=new Float32Array(M*_*m),T=new Float32Array(p*_*m),S=new Float32Array(u*_*m);for(let D=0;D<m;D++){const A=D%3*2/3-1,U=D>2?0:-1,E=[A,U,0,A+2/3,U,0,A+2/3,U+1,0,A,U,0,A+2/3,U+1,0,A,U+1,0];b.set(E,M*_*D),T.set(d,p*_*D);const x=[D,D,D,D,D,D];S.set(x,u*_*D)}const B=new In;B.setAttribute("position",new zt(b,M)),B.setAttribute("uv",new zt(T,p)),B.setAttribute("faceIndex",new zt(S,u)),e.push(B),r>Kn&&r--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function ya(i,e,t){const n=new Un(i,e,t);return n.texture.mapping=sr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function $i(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function Bu(i,e,t){const n=new Float32Array(Pn),r=new N(0,1,0);return new an({name:"SphericalGaussianBlur",defines:{n:Pn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Fs(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:_n,depthTest:!1,depthWrite:!1})}function Ta(){return new an({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Fs(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:_n,depthTest:!1,depthWrite:!1})}function ba(){return new an({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Fs(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:_n,depthTest:!1,depthWrite:!1})}function Fs(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function zu(i){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===Kr||l===jr,h=l===ti||l===ni;if(c||h){let f=e.get(o);const d=f!==void 0?f.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return t===null&&(t=new Ea(i)),f=c?t.fromEquirectangular(o,f):t.fromCubemap(o,f),f.texture.pmremVersion=o.pmremVersion,e.set(o,f),f.texture;if(f!==void 0)return f.texture;{const m=o.image;return c&&m&&m.height>0||h&&m&&r(m)?(t===null&&(t=new Ea(i)),f=c?t.fromEquirectangular(o):t.fromCubemap(o),f.texture.pmremVersion=o.pmremVersion,e.set(o,f),o.addEventListener("dispose",s),f.texture):null}}}return o}function r(o){let l=0;const c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function Hu(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const r=t(n);return r===null&&vi("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function Gu(i,e,t,n){const r={},s=new WeakMap;function a(f){const d=f.target;d.index!==null&&e.remove(d.index);for(const _ in d.attributes)e.remove(d.attributes[_]);for(const _ in d.morphAttributes){const M=d.morphAttributes[_];for(let p=0,u=M.length;p<u;p++)e.remove(M[p])}d.removeEventListener("dispose",a),delete r[d.id];const m=s.get(d);m&&(e.remove(m),s.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(f,d){return r[d.id]===!0||(d.addEventListener("dispose",a),r[d.id]=!0,t.memory.geometries++),d}function l(f){const d=f.attributes;for(const _ in d)e.update(d[_],i.ARRAY_BUFFER);const m=f.morphAttributes;for(const _ in m){const M=m[_];for(let p=0,u=M.length;p<u;p++)e.update(M[p],i.ARRAY_BUFFER)}}function c(f){const d=[],m=f.index,_=f.attributes.position;let M=0;if(m!==null){const b=m.array;M=m.version;for(let T=0,S=b.length;T<S;T+=3){const B=b[T+0],D=b[T+1],A=b[T+2];d.push(B,D,D,A,A,B)}}else if(_!==void 0){const b=_.array;M=_.version;for(let T=0,S=b.length/3-1;T<S;T+=3){const B=T+0,D=T+1,A=T+2;d.push(B,D,D,A,A,B)}}else return;const p=new(lo(d)?go:mo)(d,1);p.version=M;const u=s.get(f);u&&e.remove(u),s.set(f,p)}function h(f){const d=s.get(f);if(d){const m=f.index;m!==null&&d.version<m.version&&c(f)}else c(f);return s.get(f)}return{get:o,update:l,getWireframeAttribute:h}}function Vu(i,e,t){let n;function r(d){n=d}let s,a;function o(d){s=d.type,a=d.bytesPerElement}function l(d,m){i.drawElements(n,m,s,d*a),t.update(m,n,1)}function c(d,m,_){_!==0&&(i.drawElementsInstanced(n,m,s,d*a,_),t.update(m,n,_))}function h(d,m,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,m,0,s,d,0,_);let p=0;for(let u=0;u<_;u++)p+=m[u];t.update(p,n,1)}function f(d,m,_,M){if(_===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let u=0;u<d.length;u++)c(d[u]/a,m[u],M[u]);else{p.multiDrawElementsInstancedWEBGL(n,m,0,s,d,0,M,0,_);let u=0;for(let b=0;b<_;b++)u+=m[b]*M[b];t.update(u,n,1)}}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=f}function ku(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(s/3);break;case i.LINES:t.lines+=o*(s/2);break;case i.LINE_STRIP:t.lines+=o*(s-1);break;case i.LINE_LOOP:t.lines+=o*s;break;case i.POINTS:t.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function Wu(i,e,t){const n=new WeakMap,r=new nt;function s(a,o,l){const c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=h!==void 0?h.length:0;let d=n.get(o);if(d===void 0||d.count!==f){let x=function(){U.dispose(),n.delete(o),o.removeEventListener("dispose",x)};var m=x;d!==void 0&&d.texture.dispose();const _=o.morphAttributes.position!==void 0,M=o.morphAttributes.normal!==void 0,p=o.morphAttributes.color!==void 0,u=o.morphAttributes.position||[],b=o.morphAttributes.normal||[],T=o.morphAttributes.color||[];let S=0;_===!0&&(S=1),M===!0&&(S=2),p===!0&&(S=3);let B=o.attributes.position.count*S,D=1;B>e.maxTextureSize&&(D=Math.ceil(B/e.maxTextureSize),B=e.maxTextureSize);const A=new Float32Array(B*D*4*f),U=new ho(A,B,D,f);U.type=en,U.needsUpdate=!0;const E=S*4;for(let w=0;w<f;w++){const k=u[w],z=b[w],Z=T[w],$=B*D*4*w;for(let X=0;X<k.count;X++){const J=X*E;_===!0&&(r.fromBufferAttribute(k,X),A[$+J+0]=r.x,A[$+J+1]=r.y,A[$+J+2]=r.z,A[$+J+3]=0),M===!0&&(r.fromBufferAttribute(z,X),A[$+J+4]=r.x,A[$+J+5]=r.y,A[$+J+6]=r.z,A[$+J+7]=0),p===!0&&(r.fromBufferAttribute(Z,X),A[$+J+8]=r.x,A[$+J+9]=r.y,A[$+J+10]=r.z,A[$+J+11]=Z.itemSize===4?r.w:1)}}d={count:f,texture:U,size:new ye(B,D)},n.set(o,d),o.addEventListener("dispose",x)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let _=0;for(let p=0;p<c.length;p++)_+=c[p];const M=o.morphTargetsRelative?1:1-_;l.getUniforms().setValue(i,"morphTargetBaseInfluence",M),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:s}}function Xu(i,e,t,n){let r=new WeakMap;function s(l){const c=n.render.frame,h=l.geometry,f=e.get(l,h);if(r.get(f)!==c&&(e.update(f),r.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),r.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;r.get(d)!==c&&(d.update(),r.set(d,c))}return f}function a(){r=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:a}}class yo extends pt{constructor(e,t,n,r,s,a,o,l,c,h=Jn){if(h!==Jn&&h!==ri)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Jn&&(n=Ln),n===void 0&&h===ri&&(n=ii),super(null,r,s,a,o,l,h,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:Bt,this.minFilter=l!==void 0?l:Bt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const To=new pt,Aa=new yo(1,1),bo=new ho,Ao=new Pl,wo=new xo,wa=[],Ra=[],Ca=new Float32Array(16),Pa=new Float32Array(9),Da=new Float32Array(4);function li(i,e,t){const n=i[0];if(n<=0||n>0)return i;const r=e*t;let s=wa[r];if(s===void 0&&(s=new Float32Array(r),wa[r]=s),e!==0){n.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(s,o)}return s}function ot(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function lt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function lr(i,e){let t=Ra[e];t===void 0&&(t=new Int32Array(e),Ra[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function qu(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Yu(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ot(t,e))return;i.uniform2fv(this.addr,e),lt(t,e)}}function Zu(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(ot(t,e))return;i.uniform3fv(this.addr,e),lt(t,e)}}function $u(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ot(t,e))return;i.uniform4fv(this.addr,e),lt(t,e)}}function Ku(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(ot(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),lt(t,e)}else{if(ot(t,n))return;Da.set(n),i.uniformMatrix2fv(this.addr,!1,Da),lt(t,n)}}function ju(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(ot(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),lt(t,e)}else{if(ot(t,n))return;Pa.set(n),i.uniformMatrix3fv(this.addr,!1,Pa),lt(t,n)}}function Ju(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(ot(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),lt(t,e)}else{if(ot(t,n))return;Ca.set(n),i.uniformMatrix4fv(this.addr,!1,Ca),lt(t,n)}}function Qu(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function ef(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ot(t,e))return;i.uniform2iv(this.addr,e),lt(t,e)}}function tf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ot(t,e))return;i.uniform3iv(this.addr,e),lt(t,e)}}function nf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ot(t,e))return;i.uniform4iv(this.addr,e),lt(t,e)}}function rf(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function sf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ot(t,e))return;i.uniform2uiv(this.addr,e),lt(t,e)}}function af(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ot(t,e))return;i.uniform3uiv(this.addr,e),lt(t,e)}}function of(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ot(t,e))return;i.uniform4uiv(this.addr,e),lt(t,e)}}function lf(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?(Aa.compareFunction=oo,s=Aa):s=To,t.setTexture2D(e||s,r)}function cf(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||Ao,r)}function hf(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||wo,r)}function uf(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||bo,r)}function ff(i){switch(i){case 5126:return qu;case 35664:return Yu;case 35665:return Zu;case 35666:return $u;case 35674:return Ku;case 35675:return ju;case 35676:return Ju;case 5124:case 35670:return Qu;case 35667:case 35671:return ef;case 35668:case 35672:return tf;case 35669:case 35673:return nf;case 5125:return rf;case 36294:return sf;case 36295:return af;case 36296:return of;case 35678:case 36198:case 36298:case 36306:case 35682:return lf;case 35679:case 36299:case 36307:return cf;case 35680:case 36300:case 36308:case 36293:return hf;case 36289:case 36303:case 36311:case 36292:return uf}}function df(i,e){i.uniform1fv(this.addr,e)}function pf(i,e){const t=li(e,this.size,2);i.uniform2fv(this.addr,t)}function mf(i,e){const t=li(e,this.size,3);i.uniform3fv(this.addr,t)}function gf(i,e){const t=li(e,this.size,4);i.uniform4fv(this.addr,t)}function _f(i,e){const t=li(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function vf(i,e){const t=li(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function xf(i,e){const t=li(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Mf(i,e){i.uniform1iv(this.addr,e)}function Sf(i,e){i.uniform2iv(this.addr,e)}function Ef(i,e){i.uniform3iv(this.addr,e)}function yf(i,e){i.uniform4iv(this.addr,e)}function Tf(i,e){i.uniform1uiv(this.addr,e)}function bf(i,e){i.uniform2uiv(this.addr,e)}function Af(i,e){i.uniform3uiv(this.addr,e)}function wf(i,e){i.uniform4uiv(this.addr,e)}function Rf(i,e,t){const n=this.cache,r=e.length,s=lr(t,r);ot(n,s)||(i.uniform1iv(this.addr,s),lt(n,s));for(let a=0;a!==r;++a)t.setTexture2D(e[a]||To,s[a])}function Cf(i,e,t){const n=this.cache,r=e.length,s=lr(t,r);ot(n,s)||(i.uniform1iv(this.addr,s),lt(n,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||Ao,s[a])}function Pf(i,e,t){const n=this.cache,r=e.length,s=lr(t,r);ot(n,s)||(i.uniform1iv(this.addr,s),lt(n,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||wo,s[a])}function Df(i,e,t){const n=this.cache,r=e.length,s=lr(t,r);ot(n,s)||(i.uniform1iv(this.addr,s),lt(n,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||bo,s[a])}function Lf(i){switch(i){case 5126:return df;case 35664:return pf;case 35665:return mf;case 35666:return gf;case 35674:return _f;case 35675:return vf;case 35676:return xf;case 5124:case 35670:return Mf;case 35667:case 35671:return Sf;case 35668:case 35672:return Ef;case 35669:case 35673:return yf;case 5125:return Tf;case 36294:return bf;case 36295:return Af;case 36296:return wf;case 35678:case 36198:case 36298:case 36306:case 35682:return Rf;case 35679:case 36299:case 36307:return Cf;case 35680:case 36300:case 36308:case 36293:return Pf;case 36289:case 36303:case 36311:case 36292:return Df}}class Uf{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=ff(t.type)}}class If{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Lf(t.type)}}class Nf{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,t[o.id],n)}}}const Br=/(\w+)(\])?(\[|\.)?/g;function La(i,e){i.seq.push(e),i.map[e.id]=e}function Ff(i,e,t){const n=i.name,r=n.length;for(Br.lastIndex=0;;){const s=Br.exec(n),a=Br.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){La(t,c===void 0?new Uf(o,i,e):new If(o,i,e));break}else{let f=t.map[o];f===void 0&&(f=new Nf(o),La(t,f)),t=f}}}class ir{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const s=e.getActiveUniform(t,r),a=e.getUniformLocation(t,s.name);Ff(s,a,this)}}setValue(e,t,n,r){const s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,a=t.length;s!==a;++s){const o=t[s],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in t&&n.push(a)}return n}}function Ua(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const Of=37297;let Bf=0;function zf(i,e){const t=i.split(`
`),n=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}const Ia=new Le;function Hf(i){Ve._getMatrix(Ia,Ve.workingColorSpace,i);const e=`mat3( ${Ia.elements.map(t=>t.toFixed(4))} )`;switch(Ve.getTransfer(i)){case ar:return[e,"LinearTransferOETF"];case Ze:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Na(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),r=i.getShaderInfoLog(e).trim();if(n&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const a=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+zf(i.getShaderSource(e),a)}else return r}function Gf(i,e){const t=Hf(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function Vf(i,e){let t;switch(e){case nl:t="Linear";break;case il:t="Reinhard";break;case rl:t="Cineon";break;case sl:t="ACESFilmic";break;case ol:t="AgX";break;case ll:t="Neutral";break;case al:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Ki=new N;function kf(){Ve.getLuminanceCoefficients(Ki);const i=Ki.x.toFixed(4),e=Ki.y.toFixed(4),t=Ki.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Wf(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(xi).join(`
`)}function Xf(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function qf(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(e,r),a=s.name;let o=1;s.type===i.FLOAT_MAT2&&(o=2),s.type===i.FLOAT_MAT3&&(o=3),s.type===i.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function xi(i){return i!==""}function Fa(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Oa(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Yf=/^[ \t]*#include +<([\w\d./]+)>/gm;function ws(i){return i.replace(Yf,$f)}const Zf=new Map;function $f(i,e){let t=Ie[e];if(t===void 0){const n=Zf.get(e);if(n!==void 0)t=Ie[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return ws(t)}const Kf=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ba(i){return i.replace(Kf,jf)}function jf(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function za(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Jf(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Za?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===No?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===jt&&(e="SHADOWMAP_TYPE_VSM"),e}function Qf(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case ti:case ni:e="ENVMAP_TYPE_CUBE";break;case sr:e="ENVMAP_TYPE_CUBE_UV";break}return e}function ed(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case ni:e="ENVMAP_MODE_REFRACTION";break}return e}function td(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case $a:e="ENVMAP_BLENDING_MULTIPLY";break;case el:e="ENVMAP_BLENDING_MIX";break;case tl:e="ENVMAP_BLENDING_ADD";break}return e}function nd(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function id(i,e,t,n){const r=i.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=Jf(t),c=Qf(t),h=ed(t),f=td(t),d=nd(t),m=Wf(t),_=Xf(s),M=r.createProgram();let p,u,b=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(xi).join(`
`),p.length>0&&(p+=`
`),u=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(xi).join(`
`),u.length>0&&(u+=`
`)):(p=[za(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(xi).join(`
`),u=[za(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==vn?"#define TONE_MAPPING":"",t.toneMapping!==vn?Ie.tonemapping_pars_fragment:"",t.toneMapping!==vn?Vf("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ie.colorspace_pars_fragment,Gf("linearToOutputTexel",t.outputColorSpace),kf(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(xi).join(`
`)),a=ws(a),a=Fa(a,t),a=Oa(a,t),o=ws(o),o=Fa(o,t),o=Oa(o,t),a=Ba(a),o=Ba(o),t.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,p=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,u=["#define varying in",t.glslVersion===Js?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Js?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+u);const T=b+p+a,S=b+u+o,B=Ua(r,r.VERTEX_SHADER,T),D=Ua(r,r.FRAGMENT_SHADER,S);r.attachShader(M,B),r.attachShader(M,D),t.index0AttributeName!==void 0?r.bindAttribLocation(M,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(M,0,"position"),r.linkProgram(M);function A(w){if(i.debug.checkShaderErrors){const k=r.getProgramInfoLog(M).trim(),z=r.getShaderInfoLog(B).trim(),Z=r.getShaderInfoLog(D).trim();let $=!0,X=!0;if(r.getProgramParameter(M,r.LINK_STATUS)===!1)if($=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,M,B,D);else{const J=Na(r,B,"vertex"),G=Na(r,D,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(M,r.VALIDATE_STATUS)+`

Material Name: `+w.name+`
Material Type: `+w.type+`

Program Info Log: `+k+`
`+J+`
`+G)}else k!==""?console.warn("THREE.WebGLProgram: Program Info Log:",k):(z===""||Z==="")&&(X=!1);X&&(w.diagnostics={runnable:$,programLog:k,vertexShader:{log:z,prefix:p},fragmentShader:{log:Z,prefix:u}})}r.deleteShader(B),r.deleteShader(D),U=new ir(r,M),E=qf(r,M)}let U;this.getUniforms=function(){return U===void 0&&A(this),U};let E;this.getAttributes=function(){return E===void 0&&A(this),E};let x=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return x===!1&&(x=r.getProgramParameter(M,Of)),x},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(M),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Bf++,this.cacheKey=e,this.usedTimes=1,this.program=M,this.vertexShader=B,this.fragmentShader=D,this}let rd=0;class sd{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new ad(e),t.set(e,n)),n}}class ad{constructor(e){this.id=rd++,this.code=e,this.usedTimes=0}}function od(i,e,t,n,r,s,a){const o=new uo,l=new sd,c=new Set,h=[],f=r.logarithmicDepthBuffer,d=r.vertexTextures;let m=r.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function M(E){return c.add(E),E===0?"uv":`uv${E}`}function p(E,x,w,k,z){const Z=k.fog,$=z.geometry,X=E.isMeshStandardMaterial?k.environment:null,J=(E.isMeshStandardMaterial?t:e).get(E.envMap||X),G=J&&J.mapping===sr?J.image.height:null,re=_[E.type];E.precision!==null&&(m=r.getMaxPrecision(E.precision),m!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",m,"instead."));const he=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,Me=he!==void 0?he.length:0;let Ne=0;$.morphAttributes.position!==void 0&&(Ne=1),$.morphAttributes.normal!==void 0&&(Ne=2),$.morphAttributes.color!==void 0&&(Ne=3);let $e,W,te,_e;if(re){const qe=Vt[re];$e=qe.vertexShader,W=qe.fragmentShader}else $e=E.vertexShader,W=E.fragmentShader,l.update(E),te=l.getVertexShaderID(E),_e=l.getFragmentShaderID(E);const se=i.getRenderTarget(),Ae=i.state.buffers.depth.getReversed(),Ce=z.isInstancedMesh===!0,Fe=z.isBatchedMesh===!0,tt=!!E.map,He=!!E.matcap,rt=!!J,L=!!E.aoMap,At=!!E.lightMap,Oe=!!E.bumpMap,Be=!!E.normalMap,Ee=!!E.displacementMap,Je=!!E.emissiveMap,Se=!!E.metalnessMap,y=!!E.roughnessMap,g=E.anisotropy>0,I=E.clearcoat>0,q=E.dispersion>0,K=E.iridescence>0,V=E.sheen>0,ve=E.transmission>0,ae=g&&!!E.anisotropyMap,ue=I&&!!E.clearcoatMap,Ge=I&&!!E.clearcoatNormalMap,Q=I&&!!E.clearcoatRoughnessMap,fe=K&&!!E.iridescenceMap,Te=K&&!!E.iridescenceThicknessMap,we=V&&!!E.sheenColorMap,de=V&&!!E.sheenRoughnessMap,ze=!!E.specularMap,Ue=!!E.specularColorMap,Ke=!!E.specularIntensityMap,R=ve&&!!E.transmissionMap,ie=ve&&!!E.thicknessMap,H=!!E.gradientMap,Y=!!E.alphaMap,ce=E.alphaTest>0,oe=!!E.alphaHash,Pe=!!E.extensions;let it=vn;E.toneMapped&&(se===null||se.isXRRenderTarget===!0)&&(it=i.toneMapping);const ht={shaderID:re,shaderType:E.type,shaderName:E.name,vertexShader:$e,fragmentShader:W,defines:E.defines,customVertexShaderID:te,customFragmentShaderID:_e,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:m,batching:Fe,batchingColor:Fe&&z._colorsTexture!==null,instancing:Ce,instancingColor:Ce&&z.instanceColor!==null,instancingMorph:Ce&&z.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:se===null?i.outputColorSpace:se.isXRRenderTarget===!0?se.texture.colorSpace:ai,alphaToCoverage:!!E.alphaToCoverage,map:tt,matcap:He,envMap:rt,envMapMode:rt&&J.mapping,envMapCubeUVHeight:G,aoMap:L,lightMap:At,bumpMap:Oe,normalMap:Be,displacementMap:d&&Ee,emissiveMap:Je,normalMapObjectSpace:Be&&E.normalMapType===dl,normalMapTangentSpace:Be&&E.normalMapType===fl,metalnessMap:Se,roughnessMap:y,anisotropy:g,anisotropyMap:ae,clearcoat:I,clearcoatMap:ue,clearcoatNormalMap:Ge,clearcoatRoughnessMap:Q,dispersion:q,iridescence:K,iridescenceMap:fe,iridescenceThicknessMap:Te,sheen:V,sheenColorMap:we,sheenRoughnessMap:de,specularMap:ze,specularColorMap:Ue,specularIntensityMap:Ke,transmission:ve,transmissionMap:R,thicknessMap:ie,gradientMap:H,opaque:E.transparent===!1&&E.blending===jn&&E.alphaToCoverage===!1,alphaMap:Y,alphaTest:ce,alphaHash:oe,combine:E.combine,mapUv:tt&&M(E.map.channel),aoMapUv:L&&M(E.aoMap.channel),lightMapUv:At&&M(E.lightMap.channel),bumpMapUv:Oe&&M(E.bumpMap.channel),normalMapUv:Be&&M(E.normalMap.channel),displacementMapUv:Ee&&M(E.displacementMap.channel),emissiveMapUv:Je&&M(E.emissiveMap.channel),metalnessMapUv:Se&&M(E.metalnessMap.channel),roughnessMapUv:y&&M(E.roughnessMap.channel),anisotropyMapUv:ae&&M(E.anisotropyMap.channel),clearcoatMapUv:ue&&M(E.clearcoatMap.channel),clearcoatNormalMapUv:Ge&&M(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Q&&M(E.clearcoatRoughnessMap.channel),iridescenceMapUv:fe&&M(E.iridescenceMap.channel),iridescenceThicknessMapUv:Te&&M(E.iridescenceThicknessMap.channel),sheenColorMapUv:we&&M(E.sheenColorMap.channel),sheenRoughnessMapUv:de&&M(E.sheenRoughnessMap.channel),specularMapUv:ze&&M(E.specularMap.channel),specularColorMapUv:Ue&&M(E.specularColorMap.channel),specularIntensityMapUv:Ke&&M(E.specularIntensityMap.channel),transmissionMapUv:R&&M(E.transmissionMap.channel),thicknessMapUv:ie&&M(E.thicknessMap.channel),alphaMapUv:Y&&M(E.alphaMap.channel),vertexTangents:!!$.attributes.tangent&&(Be||g),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,pointsUvs:z.isPoints===!0&&!!$.attributes.uv&&(tt||Y),fog:!!Z,useFog:E.fog===!0,fogExp2:!!Z&&Z.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:f,reverseDepthBuffer:Ae,skinning:z.isSkinnedMesh===!0,morphTargets:$.morphAttributes.position!==void 0,morphNormals:$.morphAttributes.normal!==void 0,morphColors:$.morphAttributes.color!==void 0,morphTargetsCount:Me,morphTextureStride:Ne,numDirLights:x.directional.length,numPointLights:x.point.length,numSpotLights:x.spot.length,numSpotLightMaps:x.spotLightMap.length,numRectAreaLights:x.rectArea.length,numHemiLights:x.hemi.length,numDirLightShadows:x.directionalShadowMap.length,numPointLightShadows:x.pointShadowMap.length,numSpotLightShadows:x.spotShadowMap.length,numSpotLightShadowsWithMaps:x.numSpotLightShadowsWithMaps,numLightProbes:x.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:E.dithering,shadowMapEnabled:i.shadowMap.enabled&&w.length>0,shadowMapType:i.shadowMap.type,toneMapping:it,decodeVideoTexture:tt&&E.map.isVideoTexture===!0&&Ve.getTransfer(E.map.colorSpace)===Ze,decodeVideoTextureEmissive:Je&&E.emissiveMap.isVideoTexture===!0&&Ve.getTransfer(E.emissiveMap.colorSpace)===Ze,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===Jt,flipSided:E.side===Mt,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:Pe&&E.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Pe&&E.extensions.multiDraw===!0||Fe)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return ht.vertexUv1s=c.has(1),ht.vertexUv2s=c.has(2),ht.vertexUv3s=c.has(3),c.clear(),ht}function u(E){const x=[];if(E.shaderID?x.push(E.shaderID):(x.push(E.customVertexShaderID),x.push(E.customFragmentShaderID)),E.defines!==void 0)for(const w in E.defines)x.push(w),x.push(E.defines[w]);return E.isRawShaderMaterial===!1&&(b(x,E),T(x,E),x.push(i.outputColorSpace)),x.push(E.customProgramCacheKey),x.join()}function b(E,x){E.push(x.precision),E.push(x.outputColorSpace),E.push(x.envMapMode),E.push(x.envMapCubeUVHeight),E.push(x.mapUv),E.push(x.alphaMapUv),E.push(x.lightMapUv),E.push(x.aoMapUv),E.push(x.bumpMapUv),E.push(x.normalMapUv),E.push(x.displacementMapUv),E.push(x.emissiveMapUv),E.push(x.metalnessMapUv),E.push(x.roughnessMapUv),E.push(x.anisotropyMapUv),E.push(x.clearcoatMapUv),E.push(x.clearcoatNormalMapUv),E.push(x.clearcoatRoughnessMapUv),E.push(x.iridescenceMapUv),E.push(x.iridescenceThicknessMapUv),E.push(x.sheenColorMapUv),E.push(x.sheenRoughnessMapUv),E.push(x.specularMapUv),E.push(x.specularColorMapUv),E.push(x.specularIntensityMapUv),E.push(x.transmissionMapUv),E.push(x.thicknessMapUv),E.push(x.combine),E.push(x.fogExp2),E.push(x.sizeAttenuation),E.push(x.morphTargetsCount),E.push(x.morphAttributeCount),E.push(x.numDirLights),E.push(x.numPointLights),E.push(x.numSpotLights),E.push(x.numSpotLightMaps),E.push(x.numHemiLights),E.push(x.numRectAreaLights),E.push(x.numDirLightShadows),E.push(x.numPointLightShadows),E.push(x.numSpotLightShadows),E.push(x.numSpotLightShadowsWithMaps),E.push(x.numLightProbes),E.push(x.shadowMapType),E.push(x.toneMapping),E.push(x.numClippingPlanes),E.push(x.numClipIntersection),E.push(x.depthPacking)}function T(E,x){o.disableAll(),x.supportsVertexTextures&&o.enable(0),x.instancing&&o.enable(1),x.instancingColor&&o.enable(2),x.instancingMorph&&o.enable(3),x.matcap&&o.enable(4),x.envMap&&o.enable(5),x.normalMapObjectSpace&&o.enable(6),x.normalMapTangentSpace&&o.enable(7),x.clearcoat&&o.enable(8),x.iridescence&&o.enable(9),x.alphaTest&&o.enable(10),x.vertexColors&&o.enable(11),x.vertexAlphas&&o.enable(12),x.vertexUv1s&&o.enable(13),x.vertexUv2s&&o.enable(14),x.vertexUv3s&&o.enable(15),x.vertexTangents&&o.enable(16),x.anisotropy&&o.enable(17),x.alphaHash&&o.enable(18),x.batching&&o.enable(19),x.dispersion&&o.enable(20),x.batchingColor&&o.enable(21),E.push(o.mask),o.disableAll(),x.fog&&o.enable(0),x.useFog&&o.enable(1),x.flatShading&&o.enable(2),x.logarithmicDepthBuffer&&o.enable(3),x.reverseDepthBuffer&&o.enable(4),x.skinning&&o.enable(5),x.morphTargets&&o.enable(6),x.morphNormals&&o.enable(7),x.morphColors&&o.enable(8),x.premultipliedAlpha&&o.enable(9),x.shadowMapEnabled&&o.enable(10),x.doubleSided&&o.enable(11),x.flipSided&&o.enable(12),x.useDepthPacking&&o.enable(13),x.dithering&&o.enable(14),x.transmission&&o.enable(15),x.sheen&&o.enable(16),x.opaque&&o.enable(17),x.pointsUvs&&o.enable(18),x.decodeVideoTexture&&o.enable(19),x.decodeVideoTextureEmissive&&o.enable(20),x.alphaToCoverage&&o.enable(21),E.push(o.mask)}function S(E){const x=_[E.type];let w;if(x){const k=Vt[x];w=kl.clone(k.uniforms)}else w=E.uniforms;return w}function B(E,x){let w;for(let k=0,z=h.length;k<z;k++){const Z=h[k];if(Z.cacheKey===x){w=Z,++w.usedTimes;break}}return w===void 0&&(w=new id(i,x,E,s),h.push(w)),w}function D(E){if(--E.usedTimes===0){const x=h.indexOf(E);h[x]=h[h.length-1],h.pop(),E.destroy()}}function A(E){l.remove(E)}function U(){l.dispose()}return{getParameters:p,getProgramCacheKey:u,getUniforms:S,acquireProgram:B,releaseProgram:D,releaseShaderCache:A,programs:h,dispose:U}}function ld(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function r(a,o,l){i.get(a)[o]=l}function s(){i=new WeakMap}return{has:e,get:t,remove:n,update:r,dispose:s}}function cd(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Ha(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Ga(){const i=[];let e=0;const t=[],n=[],r=[];function s(){e=0,t.length=0,n.length=0,r.length=0}function a(f,d,m,_,M,p){let u=i[e];return u===void 0?(u={id:f.id,object:f,geometry:d,material:m,groupOrder:_,renderOrder:f.renderOrder,z:M,group:p},i[e]=u):(u.id=f.id,u.object=f,u.geometry=d,u.material=m,u.groupOrder=_,u.renderOrder=f.renderOrder,u.z=M,u.group=p),e++,u}function o(f,d,m,_,M,p){const u=a(f,d,m,_,M,p);m.transmission>0?n.push(u):m.transparent===!0?r.push(u):t.push(u)}function l(f,d,m,_,M,p){const u=a(f,d,m,_,M,p);m.transmission>0?n.unshift(u):m.transparent===!0?r.unshift(u):t.unshift(u)}function c(f,d){t.length>1&&t.sort(f||cd),n.length>1&&n.sort(d||Ha),r.length>1&&r.sort(d||Ha)}function h(){for(let f=e,d=i.length;f<d;f++){const m=i[f];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:r,init:s,push:o,unshift:l,finish:h,sort:c}}function hd(){let i=new WeakMap;function e(n,r){const s=i.get(n);let a;return s===void 0?(a=new Ga,i.set(n,[a])):r>=s.length?(a=new Ga,s.push(a)):a=s[r],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function ud(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new N,color:new Ye};break;case"SpotLight":t={position:new N,direction:new N,color:new Ye,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new N,color:new Ye,distance:0,decay:0};break;case"HemisphereLight":t={direction:new N,skyColor:new Ye,groundColor:new Ye};break;case"RectAreaLight":t={color:new Ye,position:new N,halfWidth:new N,halfHeight:new N};break}return i[e.id]=t,t}}}function fd(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ye};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ye};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ye,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let dd=0;function pd(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function md(i){const e=new ud,t=fd(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new N);const r=new N,s=new at,a=new at;function o(c){let h=0,f=0,d=0;for(let E=0;E<9;E++)n.probe[E].set(0,0,0);let m=0,_=0,M=0,p=0,u=0,b=0,T=0,S=0,B=0,D=0,A=0;c.sort(pd);for(let E=0,x=c.length;E<x;E++){const w=c[E],k=w.color,z=w.intensity,Z=w.distance,$=w.shadow&&w.shadow.map?w.shadow.map.texture:null;if(w.isAmbientLight)h+=k.r*z,f+=k.g*z,d+=k.b*z;else if(w.isLightProbe){for(let X=0;X<9;X++)n.probe[X].addScaledVector(w.sh.coefficients[X],z);A++}else if(w.isDirectionalLight){const X=e.get(w);if(X.color.copy(w.color).multiplyScalar(w.intensity),w.castShadow){const J=w.shadow,G=t.get(w);G.shadowIntensity=J.intensity,G.shadowBias=J.bias,G.shadowNormalBias=J.normalBias,G.shadowRadius=J.radius,G.shadowMapSize=J.mapSize,n.directionalShadow[m]=G,n.directionalShadowMap[m]=$,n.directionalShadowMatrix[m]=w.shadow.matrix,b++}n.directional[m]=X,m++}else if(w.isSpotLight){const X=e.get(w);X.position.setFromMatrixPosition(w.matrixWorld),X.color.copy(k).multiplyScalar(z),X.distance=Z,X.coneCos=Math.cos(w.angle),X.penumbraCos=Math.cos(w.angle*(1-w.penumbra)),X.decay=w.decay,n.spot[M]=X;const J=w.shadow;if(w.map&&(n.spotLightMap[B]=w.map,B++,J.updateMatrices(w),w.castShadow&&D++),n.spotLightMatrix[M]=J.matrix,w.castShadow){const G=t.get(w);G.shadowIntensity=J.intensity,G.shadowBias=J.bias,G.shadowNormalBias=J.normalBias,G.shadowRadius=J.radius,G.shadowMapSize=J.mapSize,n.spotShadow[M]=G,n.spotShadowMap[M]=$,S++}M++}else if(w.isRectAreaLight){const X=e.get(w);X.color.copy(k).multiplyScalar(z),X.halfWidth.set(w.width*.5,0,0),X.halfHeight.set(0,w.height*.5,0),n.rectArea[p]=X,p++}else if(w.isPointLight){const X=e.get(w);if(X.color.copy(w.color).multiplyScalar(w.intensity),X.distance=w.distance,X.decay=w.decay,w.castShadow){const J=w.shadow,G=t.get(w);G.shadowIntensity=J.intensity,G.shadowBias=J.bias,G.shadowNormalBias=J.normalBias,G.shadowRadius=J.radius,G.shadowMapSize=J.mapSize,G.shadowCameraNear=J.camera.near,G.shadowCameraFar=J.camera.far,n.pointShadow[_]=G,n.pointShadowMap[_]=$,n.pointShadowMatrix[_]=w.shadow.matrix,T++}n.point[_]=X,_++}else if(w.isHemisphereLight){const X=e.get(w);X.skyColor.copy(w.color).multiplyScalar(z),X.groundColor.copy(w.groundColor).multiplyScalar(z),n.hemi[u]=X,u++}}p>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ne.LTC_FLOAT_1,n.rectAreaLTC2=ne.LTC_FLOAT_2):(n.rectAreaLTC1=ne.LTC_HALF_1,n.rectAreaLTC2=ne.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=f,n.ambient[2]=d;const U=n.hash;(U.directionalLength!==m||U.pointLength!==_||U.spotLength!==M||U.rectAreaLength!==p||U.hemiLength!==u||U.numDirectionalShadows!==b||U.numPointShadows!==T||U.numSpotShadows!==S||U.numSpotMaps!==B||U.numLightProbes!==A)&&(n.directional.length=m,n.spot.length=M,n.rectArea.length=p,n.point.length=_,n.hemi.length=u,n.directionalShadow.length=b,n.directionalShadowMap.length=b,n.pointShadow.length=T,n.pointShadowMap.length=T,n.spotShadow.length=S,n.spotShadowMap.length=S,n.directionalShadowMatrix.length=b,n.pointShadowMatrix.length=T,n.spotLightMatrix.length=S+B-D,n.spotLightMap.length=B,n.numSpotLightShadowsWithMaps=D,n.numLightProbes=A,U.directionalLength=m,U.pointLength=_,U.spotLength=M,U.rectAreaLength=p,U.hemiLength=u,U.numDirectionalShadows=b,U.numPointShadows=T,U.numSpotShadows=S,U.numSpotMaps=B,U.numLightProbes=A,n.version=dd++)}function l(c,h){let f=0,d=0,m=0,_=0,M=0;const p=h.matrixWorldInverse;for(let u=0,b=c.length;u<b;u++){const T=c[u];if(T.isDirectionalLight){const S=n.directional[f];S.direction.setFromMatrixPosition(T.matrixWorld),r.setFromMatrixPosition(T.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(p),f++}else if(T.isSpotLight){const S=n.spot[m];S.position.setFromMatrixPosition(T.matrixWorld),S.position.applyMatrix4(p),S.direction.setFromMatrixPosition(T.matrixWorld),r.setFromMatrixPosition(T.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(p),m++}else if(T.isRectAreaLight){const S=n.rectArea[_];S.position.setFromMatrixPosition(T.matrixWorld),S.position.applyMatrix4(p),a.identity(),s.copy(T.matrixWorld),s.premultiply(p),a.extractRotation(s),S.halfWidth.set(T.width*.5,0,0),S.halfHeight.set(0,T.height*.5,0),S.halfWidth.applyMatrix4(a),S.halfHeight.applyMatrix4(a),_++}else if(T.isPointLight){const S=n.point[d];S.position.setFromMatrixPosition(T.matrixWorld),S.position.applyMatrix4(p),d++}else if(T.isHemisphereLight){const S=n.hemi[M];S.direction.setFromMatrixPosition(T.matrixWorld),S.direction.transformDirection(p),M++}}}return{setup:o,setupView:l,state:n}}function Va(i){const e=new md(i),t=[],n=[];function r(h){c.camera=h,t.length=0,n.length=0}function s(h){t.push(h)}function a(h){n.push(h)}function o(){e.setup(t)}function l(h){e.setupView(t,h)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:o,setupLightsView:l,pushLight:s,pushShadow:a}}function gd(i){let e=new WeakMap;function t(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new Va(i),e.set(r,[o])):s>=a.length?(o=new Va(i),a.push(o)):o=a[s],o}function n(){e=new WeakMap}return{get:t,dispose:n}}class _d extends or{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=hl,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class vd extends or{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const xd=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Md=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Sd(i,e,t){let n=new Mo;const r=new ye,s=new ye,a=new nt,o=new _d({depthPacking:ul}),l=new vd,c={},h=t.maxTextureSize,f={[xn]:Mt,[Mt]:xn,[Jt]:Jt},d=new an({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ye},radius:{value:4}},vertexShader:xd,fragmentShader:Md}),m=d.clone();m.defines.HORIZONTAL_PASS=1;const _=new In;_.setAttribute("position",new zt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const M=new kt(_,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Za;let u=this.type;this.render=function(D,A,U){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||D.length===0)return;const E=i.getRenderTarget(),x=i.getActiveCubeFace(),w=i.getActiveMipmapLevel(),k=i.state;k.setBlending(_n),k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);const z=u!==jt&&this.type===jt,Z=u===jt&&this.type!==jt;for(let $=0,X=D.length;$<X;$++){const J=D[$],G=J.shadow;if(G===void 0){console.warn("THREE.WebGLShadowMap:",J,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;r.copy(G.mapSize);const re=G.getFrameExtents();if(r.multiply(re),s.copy(G.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(s.x=Math.floor(h/re.x),r.x=s.x*re.x,G.mapSize.x=s.x),r.y>h&&(s.y=Math.floor(h/re.y),r.y=s.y*re.y,G.mapSize.y=s.y)),G.map===null||z===!0||Z===!0){const Me=this.type!==jt?{minFilter:Bt,magFilter:Bt}:{};G.map!==null&&G.map.dispose(),G.map=new Un(r.x,r.y,Me),G.map.texture.name=J.name+".shadowMap",G.camera.updateProjectionMatrix()}i.setRenderTarget(G.map),i.clear();const he=G.getViewportCount();for(let Me=0;Me<he;Me++){const Ne=G.getViewport(Me);a.set(s.x*Ne.x,s.y*Ne.y,s.x*Ne.z,s.y*Ne.w),k.viewport(a),G.updateMatrices(J,Me),n=G.getFrustum(),S(A,U,G.camera,J,this.type)}G.isPointLightShadow!==!0&&this.type===jt&&b(G,U),G.needsUpdate=!1}u=this.type,p.needsUpdate=!1,i.setRenderTarget(E,x,w)};function b(D,A){const U=e.update(M);d.defines.VSM_SAMPLES!==D.blurSamples&&(d.defines.VSM_SAMPLES=D.blurSamples,m.defines.VSM_SAMPLES=D.blurSamples,d.needsUpdate=!0,m.needsUpdate=!0),D.mapPass===null&&(D.mapPass=new Un(r.x,r.y)),d.uniforms.shadow_pass.value=D.map.texture,d.uniforms.resolution.value=D.mapSize,d.uniforms.radius.value=D.radius,i.setRenderTarget(D.mapPass),i.clear(),i.renderBufferDirect(A,null,U,d,M,null),m.uniforms.shadow_pass.value=D.mapPass.texture,m.uniforms.resolution.value=D.mapSize,m.uniforms.radius.value=D.radius,i.setRenderTarget(D.map),i.clear(),i.renderBufferDirect(A,null,U,m,M,null)}function T(D,A,U,E){let x=null;const w=U.isPointLight===!0?D.customDistanceMaterial:D.customDepthMaterial;if(w!==void 0)x=w;else if(x=U.isPointLight===!0?l:o,i.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const k=x.uuid,z=A.uuid;let Z=c[k];Z===void 0&&(Z={},c[k]=Z);let $=Z[z];$===void 0&&($=x.clone(),Z[z]=$,A.addEventListener("dispose",B)),x=$}if(x.visible=A.visible,x.wireframe=A.wireframe,E===jt?x.side=A.shadowSide!==null?A.shadowSide:A.side:x.side=A.shadowSide!==null?A.shadowSide:f[A.side],x.alphaMap=A.alphaMap,x.alphaTest=A.alphaTest,x.map=A.map,x.clipShadows=A.clipShadows,x.clippingPlanes=A.clippingPlanes,x.clipIntersection=A.clipIntersection,x.displacementMap=A.displacementMap,x.displacementScale=A.displacementScale,x.displacementBias=A.displacementBias,x.wireframeLinewidth=A.wireframeLinewidth,x.linewidth=A.linewidth,U.isPointLight===!0&&x.isMeshDistanceMaterial===!0){const k=i.properties.get(x);k.light=U}return x}function S(D,A,U,E,x){if(D.visible===!1)return;if(D.layers.test(A.layers)&&(D.isMesh||D.isLine||D.isPoints)&&(D.castShadow||D.receiveShadow&&x===jt)&&(!D.frustumCulled||n.intersectsObject(D))){D.modelViewMatrix.multiplyMatrices(U.matrixWorldInverse,D.matrixWorld);const z=e.update(D),Z=D.material;if(Array.isArray(Z)){const $=z.groups;for(let X=0,J=$.length;X<J;X++){const G=$[X],re=Z[G.materialIndex];if(re&&re.visible){const he=T(D,re,E,x);D.onBeforeShadow(i,D,A,U,z,he,G),i.renderBufferDirect(U,null,z,he,D,G),D.onAfterShadow(i,D,A,U,z,he,G)}}}else if(Z.visible){const $=T(D,Z,E,x);D.onBeforeShadow(i,D,A,U,z,$,null),i.renderBufferDirect(U,null,z,$,D,null),D.onAfterShadow(i,D,A,U,z,$,null)}}const k=D.children;for(let z=0,Z=k.length;z<Z;z++)S(k[z],A,U,E,x)}function B(D){D.target.removeEventListener("dispose",B);for(const U in c){const E=c[U],x=D.target.uuid;x in E&&(E[x].dispose(),delete E[x])}}}const Ed={[kr]:Wr,[Xr]:Zr,[qr]:$r,[ei]:Yr,[Wr]:kr,[Zr]:Xr,[$r]:qr,[Yr]:ei};function yd(i,e){function t(){let R=!1;const ie=new nt;let H=null;const Y=new nt(0,0,0,0);return{setMask:function(ce){H!==ce&&!R&&(i.colorMask(ce,ce,ce,ce),H=ce)},setLocked:function(ce){R=ce},setClear:function(ce,oe,Pe,it,ht){ht===!0&&(ce*=it,oe*=it,Pe*=it),ie.set(ce,oe,Pe,it),Y.equals(ie)===!1&&(i.clearColor(ce,oe,Pe,it),Y.copy(ie))},reset:function(){R=!1,H=null,Y.set(-1,0,0,0)}}}function n(){let R=!1,ie=!1,H=null,Y=null,ce=null;return{setReversed:function(oe){if(ie!==oe){const Pe=e.get("EXT_clip_control");ie?Pe.clipControlEXT(Pe.LOWER_LEFT_EXT,Pe.ZERO_TO_ONE_EXT):Pe.clipControlEXT(Pe.LOWER_LEFT_EXT,Pe.NEGATIVE_ONE_TO_ONE_EXT);const it=ce;ce=null,this.setClear(it)}ie=oe},getReversed:function(){return ie},setTest:function(oe){oe?se(i.DEPTH_TEST):Ae(i.DEPTH_TEST)},setMask:function(oe){H!==oe&&!R&&(i.depthMask(oe),H=oe)},setFunc:function(oe){if(ie&&(oe=Ed[oe]),Y!==oe){switch(oe){case kr:i.depthFunc(i.NEVER);break;case Wr:i.depthFunc(i.ALWAYS);break;case Xr:i.depthFunc(i.LESS);break;case ei:i.depthFunc(i.LEQUAL);break;case qr:i.depthFunc(i.EQUAL);break;case Yr:i.depthFunc(i.GEQUAL);break;case Zr:i.depthFunc(i.GREATER);break;case $r:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Y=oe}},setLocked:function(oe){R=oe},setClear:function(oe){ce!==oe&&(ie&&(oe=1-oe),i.clearDepth(oe),ce=oe)},reset:function(){R=!1,H=null,Y=null,ce=null,ie=!1}}}function r(){let R=!1,ie=null,H=null,Y=null,ce=null,oe=null,Pe=null,it=null,ht=null;return{setTest:function(qe){R||(qe?se(i.STENCIL_TEST):Ae(i.STENCIL_TEST))},setMask:function(qe){ie!==qe&&!R&&(i.stencilMask(qe),ie=qe)},setFunc:function(qe,Ct,Wt){(H!==qe||Y!==Ct||ce!==Wt)&&(i.stencilFunc(qe,Ct,Wt),H=qe,Y=Ct,ce=Wt)},setOp:function(qe,Ct,Wt){(oe!==qe||Pe!==Ct||it!==Wt)&&(i.stencilOp(qe,Ct,Wt),oe=qe,Pe=Ct,it=Wt)},setLocked:function(qe){R=qe},setClear:function(qe){ht!==qe&&(i.clearStencil(qe),ht=qe)},reset:function(){R=!1,ie=null,H=null,Y=null,ce=null,oe=null,Pe=null,it=null,ht=null}}}const s=new t,a=new n,o=new r,l=new WeakMap,c=new WeakMap;let h={},f={},d=new WeakMap,m=[],_=null,M=!1,p=null,u=null,b=null,T=null,S=null,B=null,D=null,A=new Ye(0,0,0),U=0,E=!1,x=null,w=null,k=null,z=null,Z=null;const $=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let X=!1,J=0;const G=i.getParameter(i.VERSION);G.indexOf("WebGL")!==-1?(J=parseFloat(/^WebGL (\d)/.exec(G)[1]),X=J>=1):G.indexOf("OpenGL ES")!==-1&&(J=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),X=J>=2);let re=null,he={};const Me=i.getParameter(i.SCISSOR_BOX),Ne=i.getParameter(i.VIEWPORT),$e=new nt().fromArray(Me),W=new nt().fromArray(Ne);function te(R,ie,H,Y){const ce=new Uint8Array(4),oe=i.createTexture();i.bindTexture(R,oe),i.texParameteri(R,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(R,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Pe=0;Pe<H;Pe++)R===i.TEXTURE_3D||R===i.TEXTURE_2D_ARRAY?i.texImage3D(ie,0,i.RGBA,1,1,Y,0,i.RGBA,i.UNSIGNED_BYTE,ce):i.texImage2D(ie+Pe,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ce);return oe}const _e={};_e[i.TEXTURE_2D]=te(i.TEXTURE_2D,i.TEXTURE_2D,1),_e[i.TEXTURE_CUBE_MAP]=te(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),_e[i.TEXTURE_2D_ARRAY]=te(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),_e[i.TEXTURE_3D]=te(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),se(i.DEPTH_TEST),a.setFunc(ei),Oe(!1),Be(qs),se(i.CULL_FACE),L(_n);function se(R){h[R]!==!0&&(i.enable(R),h[R]=!0)}function Ae(R){h[R]!==!1&&(i.disable(R),h[R]=!1)}function Ce(R,ie){return f[R]!==ie?(i.bindFramebuffer(R,ie),f[R]=ie,R===i.DRAW_FRAMEBUFFER&&(f[i.FRAMEBUFFER]=ie),R===i.FRAMEBUFFER&&(f[i.DRAW_FRAMEBUFFER]=ie),!0):!1}function Fe(R,ie){let H=m,Y=!1;if(R){H=d.get(ie),H===void 0&&(H=[],d.set(ie,H));const ce=R.textures;if(H.length!==ce.length||H[0]!==i.COLOR_ATTACHMENT0){for(let oe=0,Pe=ce.length;oe<Pe;oe++)H[oe]=i.COLOR_ATTACHMENT0+oe;H.length=ce.length,Y=!0}}else H[0]!==i.BACK&&(H[0]=i.BACK,Y=!0);Y&&i.drawBuffers(H)}function tt(R){return _!==R?(i.useProgram(R),_=R,!0):!1}const He={[Cn]:i.FUNC_ADD,[Oo]:i.FUNC_SUBTRACT,[Bo]:i.FUNC_REVERSE_SUBTRACT};He[zo]=i.MIN,He[Ho]=i.MAX;const rt={[Go]:i.ZERO,[Vo]:i.ONE,[ko]:i.SRC_COLOR,[Gr]:i.SRC_ALPHA,[$o]:i.SRC_ALPHA_SATURATE,[Yo]:i.DST_COLOR,[Xo]:i.DST_ALPHA,[Wo]:i.ONE_MINUS_SRC_COLOR,[Vr]:i.ONE_MINUS_SRC_ALPHA,[Zo]:i.ONE_MINUS_DST_COLOR,[qo]:i.ONE_MINUS_DST_ALPHA,[Ko]:i.CONSTANT_COLOR,[jo]:i.ONE_MINUS_CONSTANT_COLOR,[Jo]:i.CONSTANT_ALPHA,[Qo]:i.ONE_MINUS_CONSTANT_ALPHA};function L(R,ie,H,Y,ce,oe,Pe,it,ht,qe){if(R===_n){M===!0&&(Ae(i.BLEND),M=!1);return}if(M===!1&&(se(i.BLEND),M=!0),R!==Fo){if(R!==p||qe!==E){if((u!==Cn||S!==Cn)&&(i.blendEquation(i.FUNC_ADD),u=Cn,S=Cn),qe)switch(R){case jn:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ys:i.blendFunc(i.ONE,i.ONE);break;case Zs:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case $s:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",R);break}else switch(R){case jn:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ys:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Zs:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case $s:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",R);break}b=null,T=null,B=null,D=null,A.set(0,0,0),U=0,p=R,E=qe}return}ce=ce||ie,oe=oe||H,Pe=Pe||Y,(ie!==u||ce!==S)&&(i.blendEquationSeparate(He[ie],He[ce]),u=ie,S=ce),(H!==b||Y!==T||oe!==B||Pe!==D)&&(i.blendFuncSeparate(rt[H],rt[Y],rt[oe],rt[Pe]),b=H,T=Y,B=oe,D=Pe),(it.equals(A)===!1||ht!==U)&&(i.blendColor(it.r,it.g,it.b,ht),A.copy(it),U=ht),p=R,E=!1}function At(R,ie){R.side===Jt?Ae(i.CULL_FACE):se(i.CULL_FACE);let H=R.side===Mt;ie&&(H=!H),Oe(H),R.blending===jn&&R.transparent===!1?L(_n):L(R.blending,R.blendEquation,R.blendSrc,R.blendDst,R.blendEquationAlpha,R.blendSrcAlpha,R.blendDstAlpha,R.blendColor,R.blendAlpha,R.premultipliedAlpha),a.setFunc(R.depthFunc),a.setTest(R.depthTest),a.setMask(R.depthWrite),s.setMask(R.colorWrite);const Y=R.stencilWrite;o.setTest(Y),Y&&(o.setMask(R.stencilWriteMask),o.setFunc(R.stencilFunc,R.stencilRef,R.stencilFuncMask),o.setOp(R.stencilFail,R.stencilZFail,R.stencilZPass)),Je(R.polygonOffset,R.polygonOffsetFactor,R.polygonOffsetUnits),R.alphaToCoverage===!0?se(i.SAMPLE_ALPHA_TO_COVERAGE):Ae(i.SAMPLE_ALPHA_TO_COVERAGE)}function Oe(R){x!==R&&(R?i.frontFace(i.CW):i.frontFace(i.CCW),x=R)}function Be(R){R!==Uo?(se(i.CULL_FACE),R!==w&&(R===qs?i.cullFace(i.BACK):R===Io?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Ae(i.CULL_FACE),w=R}function Ee(R){R!==k&&(X&&i.lineWidth(R),k=R)}function Je(R,ie,H){R?(se(i.POLYGON_OFFSET_FILL),(z!==ie||Z!==H)&&(i.polygonOffset(ie,H),z=ie,Z=H)):Ae(i.POLYGON_OFFSET_FILL)}function Se(R){R?se(i.SCISSOR_TEST):Ae(i.SCISSOR_TEST)}function y(R){R===void 0&&(R=i.TEXTURE0+$-1),re!==R&&(i.activeTexture(R),re=R)}function g(R,ie,H){H===void 0&&(re===null?H=i.TEXTURE0+$-1:H=re);let Y=he[H];Y===void 0&&(Y={type:void 0,texture:void 0},he[H]=Y),(Y.type!==R||Y.texture!==ie)&&(re!==H&&(i.activeTexture(H),re=H),i.bindTexture(R,ie||_e[R]),Y.type=R,Y.texture=ie)}function I(){const R=he[re];R!==void 0&&R.type!==void 0&&(i.bindTexture(R.type,null),R.type=void 0,R.texture=void 0)}function q(){try{i.compressedTexImage2D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function K(){try{i.compressedTexImage3D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function V(){try{i.texSubImage2D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function ve(){try{i.texSubImage3D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function ae(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function ue(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Ge(){try{i.texStorage2D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Q(){try{i.texStorage3D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function fe(){try{i.texImage2D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Te(){try{i.texImage3D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function we(R){$e.equals(R)===!1&&(i.scissor(R.x,R.y,R.z,R.w),$e.copy(R))}function de(R){W.equals(R)===!1&&(i.viewport(R.x,R.y,R.z,R.w),W.copy(R))}function ze(R,ie){let H=c.get(ie);H===void 0&&(H=new WeakMap,c.set(ie,H));let Y=H.get(R);Y===void 0&&(Y=i.getUniformBlockIndex(ie,R.name),H.set(R,Y))}function Ue(R,ie){const Y=c.get(ie).get(R);l.get(ie)!==Y&&(i.uniformBlockBinding(ie,Y,R.__bindingPointIndex),l.set(ie,Y))}function Ke(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},re=null,he={},f={},d=new WeakMap,m=[],_=null,M=!1,p=null,u=null,b=null,T=null,S=null,B=null,D=null,A=new Ye(0,0,0),U=0,E=!1,x=null,w=null,k=null,z=null,Z=null,$e.set(0,0,i.canvas.width,i.canvas.height),W.set(0,0,i.canvas.width,i.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:se,disable:Ae,bindFramebuffer:Ce,drawBuffers:Fe,useProgram:tt,setBlending:L,setMaterial:At,setFlipSided:Oe,setCullFace:Be,setLineWidth:Ee,setPolygonOffset:Je,setScissorTest:Se,activeTexture:y,bindTexture:g,unbindTexture:I,compressedTexImage2D:q,compressedTexImage3D:K,texImage2D:fe,texImage3D:Te,updateUBOMapping:ze,uniformBlockBinding:Ue,texStorage2D:Ge,texStorage3D:Q,texSubImage2D:V,texSubImage3D:ve,compressedTexSubImage2D:ae,compressedTexSubImage3D:ue,scissor:we,viewport:de,reset:Ke}}function ka(i,e,t,n){const r=Td(n);switch(t){case eo:return i*e;case no:return i*e;case io:return i*e*2;case ro:return i*e/r.components*r.byteLength;case Ls:return i*e/r.components*r.byteLength;case so:return i*e*2/r.components*r.byteLength;case Us:return i*e*2/r.components*r.byteLength;case to:return i*e*3/r.components*r.byteLength;case Ot:return i*e*4/r.components*r.byteLength;case Is:return i*e*4/r.components*r.byteLength;case Ji:case Qi:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case er:case tr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case ts:case is:return Math.max(i,16)*Math.max(e,8)/4;case es:case ns:return Math.max(i,8)*Math.max(e,8)/2;case rs:case ss:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case as:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case os:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case ls:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case cs:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case hs:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case us:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case fs:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case ds:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case ps:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case ms:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case gs:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case _s:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case vs:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case xs:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Ms:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case nr:case Ss:case Es:return Math.ceil(i/4)*Math.ceil(e/4)*16;case ao:case ys:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Ts:case bs:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Td(i){switch(i){case rn:case ja:return{byteLength:1,components:1};case Mi:case Ja:case Ei:return{byteLength:2,components:1};case Ps:case Ds:return{byteLength:2,components:4};case Ln:case Cs:case en:return{byteLength:4,components:1};case Qa:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function bd(i,e,t,n,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ye,h=new WeakMap;let f;const d=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(y,g){return m?new OffscreenCanvas(y,g):Si("canvas")}function M(y,g,I){let q=1;const K=Se(y);if((K.width>I||K.height>I)&&(q=I/Math.max(K.width,K.height)),q<1)if(typeof HTMLImageElement<"u"&&y instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&y instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&y instanceof ImageBitmap||typeof VideoFrame<"u"&&y instanceof VideoFrame){const V=Math.floor(q*K.width),ve=Math.floor(q*K.height);f===void 0&&(f=_(V,ve));const ae=g?_(V,ve):f;return ae.width=V,ae.height=ve,ae.getContext("2d").drawImage(y,0,0,V,ve),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+K.width+"x"+K.height+") to ("+V+"x"+ve+")."),ae}else return"data"in y&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+K.width+"x"+K.height+")."),y;return y}function p(y){return y.generateMipmaps}function u(y){i.generateMipmap(y)}function b(y){return y.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:y.isWebGL3DRenderTarget?i.TEXTURE_3D:y.isWebGLArrayRenderTarget||y.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function T(y,g,I,q,K=!1){if(y!==null){if(i[y]!==void 0)return i[y];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+y+"'")}let V=g;if(g===i.RED&&(I===i.FLOAT&&(V=i.R32F),I===i.HALF_FLOAT&&(V=i.R16F),I===i.UNSIGNED_BYTE&&(V=i.R8)),g===i.RED_INTEGER&&(I===i.UNSIGNED_BYTE&&(V=i.R8UI),I===i.UNSIGNED_SHORT&&(V=i.R16UI),I===i.UNSIGNED_INT&&(V=i.R32UI),I===i.BYTE&&(V=i.R8I),I===i.SHORT&&(V=i.R16I),I===i.INT&&(V=i.R32I)),g===i.RG&&(I===i.FLOAT&&(V=i.RG32F),I===i.HALF_FLOAT&&(V=i.RG16F),I===i.UNSIGNED_BYTE&&(V=i.RG8)),g===i.RG_INTEGER&&(I===i.UNSIGNED_BYTE&&(V=i.RG8UI),I===i.UNSIGNED_SHORT&&(V=i.RG16UI),I===i.UNSIGNED_INT&&(V=i.RG32UI),I===i.BYTE&&(V=i.RG8I),I===i.SHORT&&(V=i.RG16I),I===i.INT&&(V=i.RG32I)),g===i.RGB_INTEGER&&(I===i.UNSIGNED_BYTE&&(V=i.RGB8UI),I===i.UNSIGNED_SHORT&&(V=i.RGB16UI),I===i.UNSIGNED_INT&&(V=i.RGB32UI),I===i.BYTE&&(V=i.RGB8I),I===i.SHORT&&(V=i.RGB16I),I===i.INT&&(V=i.RGB32I)),g===i.RGBA_INTEGER&&(I===i.UNSIGNED_BYTE&&(V=i.RGBA8UI),I===i.UNSIGNED_SHORT&&(V=i.RGBA16UI),I===i.UNSIGNED_INT&&(V=i.RGBA32UI),I===i.BYTE&&(V=i.RGBA8I),I===i.SHORT&&(V=i.RGBA16I),I===i.INT&&(V=i.RGBA32I)),g===i.RGB&&I===i.UNSIGNED_INT_5_9_9_9_REV&&(V=i.RGB9_E5),g===i.RGBA){const ve=K?ar:Ve.getTransfer(q);I===i.FLOAT&&(V=i.RGBA32F),I===i.HALF_FLOAT&&(V=i.RGBA16F),I===i.UNSIGNED_BYTE&&(V=ve===Ze?i.SRGB8_ALPHA8:i.RGBA8),I===i.UNSIGNED_SHORT_4_4_4_4&&(V=i.RGBA4),I===i.UNSIGNED_SHORT_5_5_5_1&&(V=i.RGB5_A1)}return(V===i.R16F||V===i.R32F||V===i.RG16F||V===i.RG32F||V===i.RGBA16F||V===i.RGBA32F)&&e.get("EXT_color_buffer_float"),V}function S(y,g){let I;return y?g===null||g===Ln||g===ii?I=i.DEPTH24_STENCIL8:g===en?I=i.DEPTH32F_STENCIL8:g===Mi&&(I=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):g===null||g===Ln||g===ii?I=i.DEPTH_COMPONENT24:g===en?I=i.DEPTH_COMPONENT32F:g===Mi&&(I=i.DEPTH_COMPONENT16),I}function B(y,g){return p(y)===!0||y.isFramebufferTexture&&y.minFilter!==Bt&&y.minFilter!==Ft?Math.log2(Math.max(g.width,g.height))+1:y.mipmaps!==void 0&&y.mipmaps.length>0?y.mipmaps.length:y.isCompressedTexture&&Array.isArray(y.image)?g.mipmaps.length:1}function D(y){const g=y.target;g.removeEventListener("dispose",D),U(g),g.isVideoTexture&&h.delete(g)}function A(y){const g=y.target;g.removeEventListener("dispose",A),x(g)}function U(y){const g=n.get(y);if(g.__webglInit===void 0)return;const I=y.source,q=d.get(I);if(q){const K=q[g.__cacheKey];K.usedTimes--,K.usedTimes===0&&E(y),Object.keys(q).length===0&&d.delete(I)}n.remove(y)}function E(y){const g=n.get(y);i.deleteTexture(g.__webglTexture);const I=y.source,q=d.get(I);delete q[g.__cacheKey],a.memory.textures--}function x(y){const g=n.get(y);if(y.depthTexture&&(y.depthTexture.dispose(),n.remove(y.depthTexture)),y.isWebGLCubeRenderTarget)for(let q=0;q<6;q++){if(Array.isArray(g.__webglFramebuffer[q]))for(let K=0;K<g.__webglFramebuffer[q].length;K++)i.deleteFramebuffer(g.__webglFramebuffer[q][K]);else i.deleteFramebuffer(g.__webglFramebuffer[q]);g.__webglDepthbuffer&&i.deleteRenderbuffer(g.__webglDepthbuffer[q])}else{if(Array.isArray(g.__webglFramebuffer))for(let q=0;q<g.__webglFramebuffer.length;q++)i.deleteFramebuffer(g.__webglFramebuffer[q]);else i.deleteFramebuffer(g.__webglFramebuffer);if(g.__webglDepthbuffer&&i.deleteRenderbuffer(g.__webglDepthbuffer),g.__webglMultisampledFramebuffer&&i.deleteFramebuffer(g.__webglMultisampledFramebuffer),g.__webglColorRenderbuffer)for(let q=0;q<g.__webglColorRenderbuffer.length;q++)g.__webglColorRenderbuffer[q]&&i.deleteRenderbuffer(g.__webglColorRenderbuffer[q]);g.__webglDepthRenderbuffer&&i.deleteRenderbuffer(g.__webglDepthRenderbuffer)}const I=y.textures;for(let q=0,K=I.length;q<K;q++){const V=n.get(I[q]);V.__webglTexture&&(i.deleteTexture(V.__webglTexture),a.memory.textures--),n.remove(I[q])}n.remove(y)}let w=0;function k(){w=0}function z(){const y=w;return y>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+y+" texture units while this GPU supports only "+r.maxTextures),w+=1,y}function Z(y){const g=[];return g.push(y.wrapS),g.push(y.wrapT),g.push(y.wrapR||0),g.push(y.magFilter),g.push(y.minFilter),g.push(y.anisotropy),g.push(y.internalFormat),g.push(y.format),g.push(y.type),g.push(y.generateMipmaps),g.push(y.premultiplyAlpha),g.push(y.flipY),g.push(y.unpackAlignment),g.push(y.colorSpace),g.join()}function $(y,g){const I=n.get(y);if(y.isVideoTexture&&Ee(y),y.isRenderTargetTexture===!1&&y.version>0&&I.__version!==y.version){const q=y.image;if(q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{W(I,y,g);return}}t.bindTexture(i.TEXTURE_2D,I.__webglTexture,i.TEXTURE0+g)}function X(y,g){const I=n.get(y);if(y.version>0&&I.__version!==y.version){W(I,y,g);return}t.bindTexture(i.TEXTURE_2D_ARRAY,I.__webglTexture,i.TEXTURE0+g)}function J(y,g){const I=n.get(y);if(y.version>0&&I.__version!==y.version){W(I,y,g);return}t.bindTexture(i.TEXTURE_3D,I.__webglTexture,i.TEXTURE0+g)}function G(y,g){const I=n.get(y);if(y.version>0&&I.__version!==y.version){te(I,y,g);return}t.bindTexture(i.TEXTURE_CUBE_MAP,I.__webglTexture,i.TEXTURE0+g)}const re={[Jr]:i.REPEAT,[mn]:i.CLAMP_TO_EDGE,[Qr]:i.MIRRORED_REPEAT},he={[Bt]:i.NEAREST,[cl]:i.NEAREST_MIPMAP_NEAREST,[Pi]:i.NEAREST_MIPMAP_LINEAR,[Ft]:i.LINEAR,[hr]:i.LINEAR_MIPMAP_NEAREST,[gn]:i.LINEAR_MIPMAP_LINEAR},Me={[pl]:i.NEVER,[Ml]:i.ALWAYS,[ml]:i.LESS,[oo]:i.LEQUAL,[gl]:i.EQUAL,[xl]:i.GEQUAL,[_l]:i.GREATER,[vl]:i.NOTEQUAL};function Ne(y,g){if(g.type===en&&e.has("OES_texture_float_linear")===!1&&(g.magFilter===Ft||g.magFilter===hr||g.magFilter===Pi||g.magFilter===gn||g.minFilter===Ft||g.minFilter===hr||g.minFilter===Pi||g.minFilter===gn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(y,i.TEXTURE_WRAP_S,re[g.wrapS]),i.texParameteri(y,i.TEXTURE_WRAP_T,re[g.wrapT]),(y===i.TEXTURE_3D||y===i.TEXTURE_2D_ARRAY)&&i.texParameteri(y,i.TEXTURE_WRAP_R,re[g.wrapR]),i.texParameteri(y,i.TEXTURE_MAG_FILTER,he[g.magFilter]),i.texParameteri(y,i.TEXTURE_MIN_FILTER,he[g.minFilter]),g.compareFunction&&(i.texParameteri(y,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(y,i.TEXTURE_COMPARE_FUNC,Me[g.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(g.magFilter===Bt||g.minFilter!==Pi&&g.minFilter!==gn||g.type===en&&e.has("OES_texture_float_linear")===!1)return;if(g.anisotropy>1||n.get(g).__currentAnisotropy){const I=e.get("EXT_texture_filter_anisotropic");i.texParameterf(y,I.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(g.anisotropy,r.getMaxAnisotropy())),n.get(g).__currentAnisotropy=g.anisotropy}}}function $e(y,g){let I=!1;y.__webglInit===void 0&&(y.__webglInit=!0,g.addEventListener("dispose",D));const q=g.source;let K=d.get(q);K===void 0&&(K={},d.set(q,K));const V=Z(g);if(V!==y.__cacheKey){K[V]===void 0&&(K[V]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,I=!0),K[V].usedTimes++;const ve=K[y.__cacheKey];ve!==void 0&&(K[y.__cacheKey].usedTimes--,ve.usedTimes===0&&E(g)),y.__cacheKey=V,y.__webglTexture=K[V].texture}return I}function W(y,g,I){let q=i.TEXTURE_2D;(g.isDataArrayTexture||g.isCompressedArrayTexture)&&(q=i.TEXTURE_2D_ARRAY),g.isData3DTexture&&(q=i.TEXTURE_3D);const K=$e(y,g),V=g.source;t.bindTexture(q,y.__webglTexture,i.TEXTURE0+I);const ve=n.get(V);if(V.version!==ve.__version||K===!0){t.activeTexture(i.TEXTURE0+I);const ae=Ve.getPrimaries(Ve.workingColorSpace),ue=g.colorSpace===Qt?null:Ve.getPrimaries(g.colorSpace),Ge=g.colorSpace===Qt||ae===ue?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,g.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,g.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ge);let Q=M(g.image,!1,r.maxTextureSize);Q=Je(g,Q);const fe=s.convert(g.format,g.colorSpace),Te=s.convert(g.type);let we=T(g.internalFormat,fe,Te,g.colorSpace,g.isVideoTexture);Ne(q,g);let de;const ze=g.mipmaps,Ue=g.isVideoTexture!==!0,Ke=ve.__version===void 0||K===!0,R=V.dataReady,ie=B(g,Q);if(g.isDepthTexture)we=S(g.format===ri,g.type),Ke&&(Ue?t.texStorage2D(i.TEXTURE_2D,1,we,Q.width,Q.height):t.texImage2D(i.TEXTURE_2D,0,we,Q.width,Q.height,0,fe,Te,null));else if(g.isDataTexture)if(ze.length>0){Ue&&Ke&&t.texStorage2D(i.TEXTURE_2D,ie,we,ze[0].width,ze[0].height);for(let H=0,Y=ze.length;H<Y;H++)de=ze[H],Ue?R&&t.texSubImage2D(i.TEXTURE_2D,H,0,0,de.width,de.height,fe,Te,de.data):t.texImage2D(i.TEXTURE_2D,H,we,de.width,de.height,0,fe,Te,de.data);g.generateMipmaps=!1}else Ue?(Ke&&t.texStorage2D(i.TEXTURE_2D,ie,we,Q.width,Q.height),R&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Q.width,Q.height,fe,Te,Q.data)):t.texImage2D(i.TEXTURE_2D,0,we,Q.width,Q.height,0,fe,Te,Q.data);else if(g.isCompressedTexture)if(g.isCompressedArrayTexture){Ue&&Ke&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ie,we,ze[0].width,ze[0].height,Q.depth);for(let H=0,Y=ze.length;H<Y;H++)if(de=ze[H],g.format!==Ot)if(fe!==null)if(Ue){if(R)if(g.layerUpdates.size>0){const ce=ka(de.width,de.height,g.format,g.type);for(const oe of g.layerUpdates){const Pe=de.data.subarray(oe*ce/de.data.BYTES_PER_ELEMENT,(oe+1)*ce/de.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,H,0,0,oe,de.width,de.height,1,fe,Pe)}g.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,H,0,0,0,de.width,de.height,Q.depth,fe,de.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,H,we,de.width,de.height,Q.depth,0,de.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ue?R&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,H,0,0,0,de.width,de.height,Q.depth,fe,Te,de.data):t.texImage3D(i.TEXTURE_2D_ARRAY,H,we,de.width,de.height,Q.depth,0,fe,Te,de.data)}else{Ue&&Ke&&t.texStorage2D(i.TEXTURE_2D,ie,we,ze[0].width,ze[0].height);for(let H=0,Y=ze.length;H<Y;H++)de=ze[H],g.format!==Ot?fe!==null?Ue?R&&t.compressedTexSubImage2D(i.TEXTURE_2D,H,0,0,de.width,de.height,fe,de.data):t.compressedTexImage2D(i.TEXTURE_2D,H,we,de.width,de.height,0,de.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ue?R&&t.texSubImage2D(i.TEXTURE_2D,H,0,0,de.width,de.height,fe,Te,de.data):t.texImage2D(i.TEXTURE_2D,H,we,de.width,de.height,0,fe,Te,de.data)}else if(g.isDataArrayTexture)if(Ue){if(Ke&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ie,we,Q.width,Q.height,Q.depth),R)if(g.layerUpdates.size>0){const H=ka(Q.width,Q.height,g.format,g.type);for(const Y of g.layerUpdates){const ce=Q.data.subarray(Y*H/Q.data.BYTES_PER_ELEMENT,(Y+1)*H/Q.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Y,Q.width,Q.height,1,fe,Te,ce)}g.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,Q.width,Q.height,Q.depth,fe,Te,Q.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,we,Q.width,Q.height,Q.depth,0,fe,Te,Q.data);else if(g.isData3DTexture)Ue?(Ke&&t.texStorage3D(i.TEXTURE_3D,ie,we,Q.width,Q.height,Q.depth),R&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,Q.width,Q.height,Q.depth,fe,Te,Q.data)):t.texImage3D(i.TEXTURE_3D,0,we,Q.width,Q.height,Q.depth,0,fe,Te,Q.data);else if(g.isFramebufferTexture){if(Ke)if(Ue)t.texStorage2D(i.TEXTURE_2D,ie,we,Q.width,Q.height);else{let H=Q.width,Y=Q.height;for(let ce=0;ce<ie;ce++)t.texImage2D(i.TEXTURE_2D,ce,we,H,Y,0,fe,Te,null),H>>=1,Y>>=1}}else if(ze.length>0){if(Ue&&Ke){const H=Se(ze[0]);t.texStorage2D(i.TEXTURE_2D,ie,we,H.width,H.height)}for(let H=0,Y=ze.length;H<Y;H++)de=ze[H],Ue?R&&t.texSubImage2D(i.TEXTURE_2D,H,0,0,fe,Te,de):t.texImage2D(i.TEXTURE_2D,H,we,fe,Te,de);g.generateMipmaps=!1}else if(Ue){if(Ke){const H=Se(Q);t.texStorage2D(i.TEXTURE_2D,ie,we,H.width,H.height)}R&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,fe,Te,Q)}else t.texImage2D(i.TEXTURE_2D,0,we,fe,Te,Q);p(g)&&u(q),ve.__version=V.version,g.onUpdate&&g.onUpdate(g)}y.__version=g.version}function te(y,g,I){if(g.image.length!==6)return;const q=$e(y,g),K=g.source;t.bindTexture(i.TEXTURE_CUBE_MAP,y.__webglTexture,i.TEXTURE0+I);const V=n.get(K);if(K.version!==V.__version||q===!0){t.activeTexture(i.TEXTURE0+I);const ve=Ve.getPrimaries(Ve.workingColorSpace),ae=g.colorSpace===Qt?null:Ve.getPrimaries(g.colorSpace),ue=g.colorSpace===Qt||ve===ae?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,g.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,g.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ue);const Ge=g.isCompressedTexture||g.image[0].isCompressedTexture,Q=g.image[0]&&g.image[0].isDataTexture,fe=[];for(let Y=0;Y<6;Y++)!Ge&&!Q?fe[Y]=M(g.image[Y],!0,r.maxCubemapSize):fe[Y]=Q?g.image[Y].image:g.image[Y],fe[Y]=Je(g,fe[Y]);const Te=fe[0],we=s.convert(g.format,g.colorSpace),de=s.convert(g.type),ze=T(g.internalFormat,we,de,g.colorSpace),Ue=g.isVideoTexture!==!0,Ke=V.__version===void 0||q===!0,R=K.dataReady;let ie=B(g,Te);Ne(i.TEXTURE_CUBE_MAP,g);let H;if(Ge){Ue&&Ke&&t.texStorage2D(i.TEXTURE_CUBE_MAP,ie,ze,Te.width,Te.height);for(let Y=0;Y<6;Y++){H=fe[Y].mipmaps;for(let ce=0;ce<H.length;ce++){const oe=H[ce];g.format!==Ot?we!==null?Ue?R&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ce,0,0,oe.width,oe.height,we,oe.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ce,ze,oe.width,oe.height,0,oe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ue?R&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ce,0,0,oe.width,oe.height,we,de,oe.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ce,ze,oe.width,oe.height,0,we,de,oe.data)}}}else{if(H=g.mipmaps,Ue&&Ke){H.length>0&&ie++;const Y=Se(fe[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,ie,ze,Y.width,Y.height)}for(let Y=0;Y<6;Y++)if(Q){Ue?R&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,0,0,fe[Y].width,fe[Y].height,we,de,fe[Y].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,ze,fe[Y].width,fe[Y].height,0,we,de,fe[Y].data);for(let ce=0;ce<H.length;ce++){const Pe=H[ce].image[Y].image;Ue?R&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ce+1,0,0,Pe.width,Pe.height,we,de,Pe.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ce+1,ze,Pe.width,Pe.height,0,we,de,Pe.data)}}else{Ue?R&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,0,0,we,de,fe[Y]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,ze,we,de,fe[Y]);for(let ce=0;ce<H.length;ce++){const oe=H[ce];Ue?R&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ce+1,0,0,we,de,oe.image[Y]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ce+1,ze,we,de,oe.image[Y])}}}p(g)&&u(i.TEXTURE_CUBE_MAP),V.__version=K.version,g.onUpdate&&g.onUpdate(g)}y.__version=g.version}function _e(y,g,I,q,K,V){const ve=s.convert(I.format,I.colorSpace),ae=s.convert(I.type),ue=T(I.internalFormat,ve,ae,I.colorSpace),Ge=n.get(g),Q=n.get(I);if(Q.__renderTarget=g,!Ge.__hasExternalTextures){const fe=Math.max(1,g.width>>V),Te=Math.max(1,g.height>>V);K===i.TEXTURE_3D||K===i.TEXTURE_2D_ARRAY?t.texImage3D(K,V,ue,fe,Te,g.depth,0,ve,ae,null):t.texImage2D(K,V,ue,fe,Te,0,ve,ae,null)}t.bindFramebuffer(i.FRAMEBUFFER,y),Be(g)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,q,K,Q.__webglTexture,0,Oe(g)):(K===i.TEXTURE_2D||K>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&K<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,q,K,Q.__webglTexture,V),t.bindFramebuffer(i.FRAMEBUFFER,null)}function se(y,g,I){if(i.bindRenderbuffer(i.RENDERBUFFER,y),g.depthBuffer){const q=g.depthTexture,K=q&&q.isDepthTexture?q.type:null,V=S(g.stencilBuffer,K),ve=g.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ae=Oe(g);Be(g)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ae,V,g.width,g.height):I?i.renderbufferStorageMultisample(i.RENDERBUFFER,ae,V,g.width,g.height):i.renderbufferStorage(i.RENDERBUFFER,V,g.width,g.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,ve,i.RENDERBUFFER,y)}else{const q=g.textures;for(let K=0;K<q.length;K++){const V=q[K],ve=s.convert(V.format,V.colorSpace),ae=s.convert(V.type),ue=T(V.internalFormat,ve,ae,V.colorSpace),Ge=Oe(g);I&&Be(g)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ge,ue,g.width,g.height):Be(g)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ge,ue,g.width,g.height):i.renderbufferStorage(i.RENDERBUFFER,ue,g.width,g.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ae(y,g){if(g&&g.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,y),!(g.depthTexture&&g.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const q=n.get(g.depthTexture);q.__renderTarget=g,(!q.__webglTexture||g.depthTexture.image.width!==g.width||g.depthTexture.image.height!==g.height)&&(g.depthTexture.image.width=g.width,g.depthTexture.image.height=g.height,g.depthTexture.needsUpdate=!0),$(g.depthTexture,0);const K=q.__webglTexture,V=Oe(g);if(g.depthTexture.format===Jn)Be(g)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,K,0,V):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,K,0);else if(g.depthTexture.format===ri)Be(g)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,K,0,V):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,K,0);else throw new Error("Unknown depthTexture format")}function Ce(y){const g=n.get(y),I=y.isWebGLCubeRenderTarget===!0;if(g.__boundDepthTexture!==y.depthTexture){const q=y.depthTexture;if(g.__depthDisposeCallback&&g.__depthDisposeCallback(),q){const K=()=>{delete g.__boundDepthTexture,delete g.__depthDisposeCallback,q.removeEventListener("dispose",K)};q.addEventListener("dispose",K),g.__depthDisposeCallback=K}g.__boundDepthTexture=q}if(y.depthTexture&&!g.__autoAllocateDepthBuffer){if(I)throw new Error("target.depthTexture not supported in Cube render targets");Ae(g.__webglFramebuffer,y)}else if(I){g.__webglDepthbuffer=[];for(let q=0;q<6;q++)if(t.bindFramebuffer(i.FRAMEBUFFER,g.__webglFramebuffer[q]),g.__webglDepthbuffer[q]===void 0)g.__webglDepthbuffer[q]=i.createRenderbuffer(),se(g.__webglDepthbuffer[q],y,!1);else{const K=y.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,V=g.__webglDepthbuffer[q];i.bindRenderbuffer(i.RENDERBUFFER,V),i.framebufferRenderbuffer(i.FRAMEBUFFER,K,i.RENDERBUFFER,V)}}else if(t.bindFramebuffer(i.FRAMEBUFFER,g.__webglFramebuffer),g.__webglDepthbuffer===void 0)g.__webglDepthbuffer=i.createRenderbuffer(),se(g.__webglDepthbuffer,y,!1);else{const q=y.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,K=g.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,K),i.framebufferRenderbuffer(i.FRAMEBUFFER,q,i.RENDERBUFFER,K)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Fe(y,g,I){const q=n.get(y);g!==void 0&&_e(q.__webglFramebuffer,y,y.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),I!==void 0&&Ce(y)}function tt(y){const g=y.texture,I=n.get(y),q=n.get(g);y.addEventListener("dispose",A);const K=y.textures,V=y.isWebGLCubeRenderTarget===!0,ve=K.length>1;if(ve||(q.__webglTexture===void 0&&(q.__webglTexture=i.createTexture()),q.__version=g.version,a.memory.textures++),V){I.__webglFramebuffer=[];for(let ae=0;ae<6;ae++)if(g.mipmaps&&g.mipmaps.length>0){I.__webglFramebuffer[ae]=[];for(let ue=0;ue<g.mipmaps.length;ue++)I.__webglFramebuffer[ae][ue]=i.createFramebuffer()}else I.__webglFramebuffer[ae]=i.createFramebuffer()}else{if(g.mipmaps&&g.mipmaps.length>0){I.__webglFramebuffer=[];for(let ae=0;ae<g.mipmaps.length;ae++)I.__webglFramebuffer[ae]=i.createFramebuffer()}else I.__webglFramebuffer=i.createFramebuffer();if(ve)for(let ae=0,ue=K.length;ae<ue;ae++){const Ge=n.get(K[ae]);Ge.__webglTexture===void 0&&(Ge.__webglTexture=i.createTexture(),a.memory.textures++)}if(y.samples>0&&Be(y)===!1){I.__webglMultisampledFramebuffer=i.createFramebuffer(),I.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,I.__webglMultisampledFramebuffer);for(let ae=0;ae<K.length;ae++){const ue=K[ae];I.__webglColorRenderbuffer[ae]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,I.__webglColorRenderbuffer[ae]);const Ge=s.convert(ue.format,ue.colorSpace),Q=s.convert(ue.type),fe=T(ue.internalFormat,Ge,Q,ue.colorSpace,y.isXRRenderTarget===!0),Te=Oe(y);i.renderbufferStorageMultisample(i.RENDERBUFFER,Te,fe,y.width,y.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ae,i.RENDERBUFFER,I.__webglColorRenderbuffer[ae])}i.bindRenderbuffer(i.RENDERBUFFER,null),y.depthBuffer&&(I.__webglDepthRenderbuffer=i.createRenderbuffer(),se(I.__webglDepthRenderbuffer,y,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(V){t.bindTexture(i.TEXTURE_CUBE_MAP,q.__webglTexture),Ne(i.TEXTURE_CUBE_MAP,g);for(let ae=0;ae<6;ae++)if(g.mipmaps&&g.mipmaps.length>0)for(let ue=0;ue<g.mipmaps.length;ue++)_e(I.__webglFramebuffer[ae][ue],y,g,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,ue);else _e(I.__webglFramebuffer[ae],y,g,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0);p(g)&&u(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ve){for(let ae=0,ue=K.length;ae<ue;ae++){const Ge=K[ae],Q=n.get(Ge);t.bindTexture(i.TEXTURE_2D,Q.__webglTexture),Ne(i.TEXTURE_2D,Ge),_e(I.__webglFramebuffer,y,Ge,i.COLOR_ATTACHMENT0+ae,i.TEXTURE_2D,0),p(Ge)&&u(i.TEXTURE_2D)}t.unbindTexture()}else{let ae=i.TEXTURE_2D;if((y.isWebGL3DRenderTarget||y.isWebGLArrayRenderTarget)&&(ae=y.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ae,q.__webglTexture),Ne(ae,g),g.mipmaps&&g.mipmaps.length>0)for(let ue=0;ue<g.mipmaps.length;ue++)_e(I.__webglFramebuffer[ue],y,g,i.COLOR_ATTACHMENT0,ae,ue);else _e(I.__webglFramebuffer,y,g,i.COLOR_ATTACHMENT0,ae,0);p(g)&&u(ae),t.unbindTexture()}y.depthBuffer&&Ce(y)}function He(y){const g=y.textures;for(let I=0,q=g.length;I<q;I++){const K=g[I];if(p(K)){const V=b(y),ve=n.get(K).__webglTexture;t.bindTexture(V,ve),u(V),t.unbindTexture()}}}const rt=[],L=[];function At(y){if(y.samples>0){if(Be(y)===!1){const g=y.textures,I=y.width,q=y.height;let K=i.COLOR_BUFFER_BIT;const V=y.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ve=n.get(y),ae=g.length>1;if(ae)for(let ue=0;ue<g.length;ue++)t.bindFramebuffer(i.FRAMEBUFFER,ve.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ue,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,ve.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ue,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,ve.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ve.__webglFramebuffer);for(let ue=0;ue<g.length;ue++){if(y.resolveDepthBuffer&&(y.depthBuffer&&(K|=i.DEPTH_BUFFER_BIT),y.stencilBuffer&&y.resolveStencilBuffer&&(K|=i.STENCIL_BUFFER_BIT)),ae){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ve.__webglColorRenderbuffer[ue]);const Ge=n.get(g[ue]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Ge,0)}i.blitFramebuffer(0,0,I,q,0,0,I,q,K,i.NEAREST),l===!0&&(rt.length=0,L.length=0,rt.push(i.COLOR_ATTACHMENT0+ue),y.depthBuffer&&y.resolveDepthBuffer===!1&&(rt.push(V),L.push(V),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,L)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,rt))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ae)for(let ue=0;ue<g.length;ue++){t.bindFramebuffer(i.FRAMEBUFFER,ve.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ue,i.RENDERBUFFER,ve.__webglColorRenderbuffer[ue]);const Ge=n.get(g[ue]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,ve.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ue,i.TEXTURE_2D,Ge,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ve.__webglMultisampledFramebuffer)}else if(y.depthBuffer&&y.resolveDepthBuffer===!1&&l){const g=y.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[g])}}}function Oe(y){return Math.min(r.maxSamples,y.samples)}function Be(y){const g=n.get(y);return y.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&g.__useRenderToTexture!==!1}function Ee(y){const g=a.render.frame;h.get(y)!==g&&(h.set(y,g),y.update())}function Je(y,g){const I=y.colorSpace,q=y.format,K=y.type;return y.isCompressedTexture===!0||y.isVideoTexture===!0||I!==ai&&I!==Qt&&(Ve.getTransfer(I)===Ze?(q!==Ot||K!==rn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",I)),g}function Se(y){return typeof HTMLImageElement<"u"&&y instanceof HTMLImageElement?(c.width=y.naturalWidth||y.width,c.height=y.naturalHeight||y.height):typeof VideoFrame<"u"&&y instanceof VideoFrame?(c.width=y.displayWidth,c.height=y.displayHeight):(c.width=y.width,c.height=y.height),c}this.allocateTextureUnit=z,this.resetTextureUnits=k,this.setTexture2D=$,this.setTexture2DArray=X,this.setTexture3D=J,this.setTextureCube=G,this.rebindTextures=Fe,this.setupRenderTarget=tt,this.updateRenderTargetMipmap=He,this.updateMultisampleRenderTarget=At,this.setupDepthRenderbuffer=Ce,this.setupFrameBufferTexture=_e,this.useMultisampledRTT=Be}function Ad(i,e){function t(n,r=Qt){let s;const a=Ve.getTransfer(r);if(n===rn)return i.UNSIGNED_BYTE;if(n===Ps)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Ds)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Qa)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===ja)return i.BYTE;if(n===Ja)return i.SHORT;if(n===Mi)return i.UNSIGNED_SHORT;if(n===Cs)return i.INT;if(n===Ln)return i.UNSIGNED_INT;if(n===en)return i.FLOAT;if(n===Ei)return i.HALF_FLOAT;if(n===eo)return i.ALPHA;if(n===to)return i.RGB;if(n===Ot)return i.RGBA;if(n===no)return i.LUMINANCE;if(n===io)return i.LUMINANCE_ALPHA;if(n===Jn)return i.DEPTH_COMPONENT;if(n===ri)return i.DEPTH_STENCIL;if(n===ro)return i.RED;if(n===Ls)return i.RED_INTEGER;if(n===so)return i.RG;if(n===Us)return i.RG_INTEGER;if(n===Is)return i.RGBA_INTEGER;if(n===Ji||n===Qi||n===er||n===tr)if(a===Ze)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===Ji)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Qi)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===er)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===tr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===Ji)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Qi)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===er)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===tr)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===es||n===ts||n===ns||n===is)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===es)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===ts)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ns)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===is)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===rs||n===ss||n===as)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===rs||n===ss)return a===Ze?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===as)return a===Ze?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===os||n===ls||n===cs||n===hs||n===us||n===fs||n===ds||n===ps||n===ms||n===gs||n===_s||n===vs||n===xs||n===Ms)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===os)return a===Ze?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===ls)return a===Ze?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===cs)return a===Ze?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===hs)return a===Ze?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===us)return a===Ze?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===fs)return a===Ze?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===ds)return a===Ze?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===ps)return a===Ze?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===ms)return a===Ze?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===gs)return a===Ze?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===_s)return a===Ze?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===vs)return a===Ze?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===xs)return a===Ze?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Ms)return a===Ze?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===nr||n===Ss||n===Es)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===nr)return a===Ze?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Ss)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Es)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===ao||n===ys||n===Ts||n===bs)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===nr)return s.COMPRESSED_RED_RGTC1_EXT;if(n===ys)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ts)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===bs)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ii?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}class wd extends It{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class ji extends bt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Rd={type:"move"};class zr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ji,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ji,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ji,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const M of e.hand.values()){const p=t.getJointPose(M,n),u=this._getHandJoint(c,M);p!==null&&(u.matrix.fromArray(p.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=p.radius),u.visible=p!==null}const h=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],d=h.position.distanceTo(f.position),m=.02,_=.005;c.inputState.pinching&&d>m+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=m-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Rd)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new ji;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const Cd=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Pd=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Dd{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const r=new pt,s=e.properties.get(r);s.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new an({vertexShader:Cd,fragmentShader:Pd,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new kt(new wi(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Ld extends oi{constructor(e,t){super();const n=this;let r=null,s=1,a=null,o="local-floor",l=1,c=null,h=null,f=null,d=null,m=null,_=null;const M=new Dd,p=t.getContextAttributes();let u=null,b=null;const T=[],S=[],B=new ye;let D=null;const A=new It;A.viewport=new nt;const U=new It;U.viewport=new nt;const E=[A,U],x=new wd;let w=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(W){let te=T[W];return te===void 0&&(te=new zr,T[W]=te),te.getTargetRaySpace()},this.getControllerGrip=function(W){let te=T[W];return te===void 0&&(te=new zr,T[W]=te),te.getGripSpace()},this.getHand=function(W){let te=T[W];return te===void 0&&(te=new zr,T[W]=te),te.getHandSpace()};function z(W){const te=S.indexOf(W.inputSource);if(te===-1)return;const _e=T[te];_e!==void 0&&(_e.update(W.inputSource,W.frame,c||a),_e.dispatchEvent({type:W.type,data:W.inputSource}))}function Z(){r.removeEventListener("select",z),r.removeEventListener("selectstart",z),r.removeEventListener("selectend",z),r.removeEventListener("squeeze",z),r.removeEventListener("squeezestart",z),r.removeEventListener("squeezeend",z),r.removeEventListener("end",Z),r.removeEventListener("inputsourceschange",$);for(let W=0;W<T.length;W++){const te=S[W];te!==null&&(S[W]=null,T[W].disconnect(te))}w=null,k=null,M.reset(),e.setRenderTarget(u),m=null,d=null,f=null,r=null,b=null,$e.stop(),n.isPresenting=!1,e.setPixelRatio(D),e.setSize(B.width,B.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(W){s=W,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(W){o=W,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(W){c=W},this.getBaseLayer=function(){return d!==null?d:m},this.getBinding=function(){return f},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(W){if(r=W,r!==null){if(u=e.getRenderTarget(),r.addEventListener("select",z),r.addEventListener("selectstart",z),r.addEventListener("selectend",z),r.addEventListener("squeeze",z),r.addEventListener("squeezestart",z),r.addEventListener("squeezeend",z),r.addEventListener("end",Z),r.addEventListener("inputsourceschange",$),p.xrCompatible!==!0&&await t.makeXRCompatible(),D=e.getPixelRatio(),e.getSize(B),r.renderState.layers===void 0){const te={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,t,te),r.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),b=new Un(m.framebufferWidth,m.framebufferHeight,{format:Ot,type:rn,colorSpace:e.outputColorSpace,stencilBuffer:p.stencil})}else{let te=null,_e=null,se=null;p.depth&&(se=p.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,te=p.stencil?ri:Jn,_e=p.stencil?ii:Ln);const Ae={colorFormat:t.RGBA8,depthFormat:se,scaleFactor:s};f=new XRWebGLBinding(r,t),d=f.createProjectionLayer(Ae),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),b=new Un(d.textureWidth,d.textureHeight,{format:Ot,type:rn,depthTexture:new yo(d.textureWidth,d.textureHeight,_e,void 0,void 0,void 0,void 0,void 0,void 0,te),stencilBuffer:p.stencil,colorSpace:e.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),$e.setContext(r),$e.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function $(W){for(let te=0;te<W.removed.length;te++){const _e=W.removed[te],se=S.indexOf(_e);se>=0&&(S[se]=null,T[se].disconnect(_e))}for(let te=0;te<W.added.length;te++){const _e=W.added[te];let se=S.indexOf(_e);if(se===-1){for(let Ce=0;Ce<T.length;Ce++)if(Ce>=S.length){S.push(_e),se=Ce;break}else if(S[Ce]===null){S[Ce]=_e,se=Ce;break}if(se===-1)break}const Ae=T[se];Ae&&Ae.connect(_e)}}const X=new N,J=new N;function G(W,te,_e){X.setFromMatrixPosition(te.matrixWorld),J.setFromMatrixPosition(_e.matrixWorld);const se=X.distanceTo(J),Ae=te.projectionMatrix.elements,Ce=_e.projectionMatrix.elements,Fe=Ae[14]/(Ae[10]-1),tt=Ae[14]/(Ae[10]+1),He=(Ae[9]+1)/Ae[5],rt=(Ae[9]-1)/Ae[5],L=(Ae[8]-1)/Ae[0],At=(Ce[8]+1)/Ce[0],Oe=Fe*L,Be=Fe*At,Ee=se/(-L+At),Je=Ee*-L;if(te.matrixWorld.decompose(W.position,W.quaternion,W.scale),W.translateX(Je),W.translateZ(Ee),W.matrixWorld.compose(W.position,W.quaternion,W.scale),W.matrixWorldInverse.copy(W.matrixWorld).invert(),Ae[10]===-1)W.projectionMatrix.copy(te.projectionMatrix),W.projectionMatrixInverse.copy(te.projectionMatrixInverse);else{const Se=Fe+Ee,y=tt+Ee,g=Oe-Je,I=Be+(se-Je),q=He*tt/y*Se,K=rt*tt/y*Se;W.projectionMatrix.makePerspective(g,I,q,K,Se,y),W.projectionMatrixInverse.copy(W.projectionMatrix).invert()}}function re(W,te){te===null?W.matrixWorld.copy(W.matrix):W.matrixWorld.multiplyMatrices(te.matrixWorld,W.matrix),W.matrixWorldInverse.copy(W.matrixWorld).invert()}this.updateCamera=function(W){if(r===null)return;let te=W.near,_e=W.far;M.texture!==null&&(M.depthNear>0&&(te=M.depthNear),M.depthFar>0&&(_e=M.depthFar)),x.near=U.near=A.near=te,x.far=U.far=A.far=_e,(w!==x.near||k!==x.far)&&(r.updateRenderState({depthNear:x.near,depthFar:x.far}),w=x.near,k=x.far),A.layers.mask=W.layers.mask|2,U.layers.mask=W.layers.mask|4,x.layers.mask=A.layers.mask|U.layers.mask;const se=W.parent,Ae=x.cameras;re(x,se);for(let Ce=0;Ce<Ae.length;Ce++)re(Ae[Ce],se);Ae.length===2?G(x,A,U):x.projectionMatrix.copy(A.projectionMatrix),he(W,x,se)};function he(W,te,_e){_e===null?W.matrix.copy(te.matrixWorld):(W.matrix.copy(_e.matrixWorld),W.matrix.invert(),W.matrix.multiply(te.matrixWorld)),W.matrix.decompose(W.position,W.quaternion,W.scale),W.updateMatrixWorld(!0),W.projectionMatrix.copy(te.projectionMatrix),W.projectionMatrixInverse.copy(te.projectionMatrixInverse),W.isPerspectiveCamera&&(W.fov=As*2*Math.atan(1/W.projectionMatrix.elements[5]),W.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(d===null&&m===null))return l},this.setFoveation=function(W){l=W,d!==null&&(d.fixedFoveation=W),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=W)},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh(x)};let Me=null;function Ne(W,te){if(h=te.getViewerPose(c||a),_=te,h!==null){const _e=h.views;m!==null&&(e.setRenderTargetFramebuffer(b,m.framebuffer),e.setRenderTarget(b));let se=!1;_e.length!==x.cameras.length&&(x.cameras.length=0,se=!0);for(let Ce=0;Ce<_e.length;Ce++){const Fe=_e[Ce];let tt=null;if(m!==null)tt=m.getViewport(Fe);else{const rt=f.getViewSubImage(d,Fe);tt=rt.viewport,Ce===0&&(e.setRenderTargetTextures(b,rt.colorTexture,d.ignoreDepthValues?void 0:rt.depthStencilTexture),e.setRenderTarget(b))}let He=E[Ce];He===void 0&&(He=new It,He.layers.enable(Ce),He.viewport=new nt,E[Ce]=He),He.matrix.fromArray(Fe.transform.matrix),He.matrix.decompose(He.position,He.quaternion,He.scale),He.projectionMatrix.fromArray(Fe.projectionMatrix),He.projectionMatrixInverse.copy(He.projectionMatrix).invert(),He.viewport.set(tt.x,tt.y,tt.width,tt.height),Ce===0&&(x.matrix.copy(He.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),se===!0&&x.cameras.push(He)}const Ae=r.enabledFeatures;if(Ae&&Ae.includes("depth-sensing")){const Ce=f.getDepthInformation(_e[0]);Ce&&Ce.isValid&&Ce.texture&&M.init(e,Ce,r.renderState)}}for(let _e=0;_e<T.length;_e++){const se=S[_e],Ae=T[_e];se!==null&&Ae!==void 0&&Ae.update(se,te,c||a)}Me&&Me(W,te),te.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:te}),_=null}const $e=new So;$e.setAnimationLoop(Ne),this.setAnimationLoop=function(W){Me=W},this.dispose=function(){}}}const An=new sn,Ud=new at;function Id(i,e){function t(p,u){p.matrixAutoUpdate===!0&&p.updateMatrix(),u.value.copy(p.matrix)}function n(p,u){u.color.getRGB(p.fogColor.value,_o(i)),u.isFog?(p.fogNear.value=u.near,p.fogFar.value=u.far):u.isFogExp2&&(p.fogDensity.value=u.density)}function r(p,u,b,T,S){u.isMeshBasicMaterial||u.isMeshLambertMaterial?s(p,u):u.isMeshToonMaterial?(s(p,u),f(p,u)):u.isMeshPhongMaterial?(s(p,u),h(p,u)):u.isMeshStandardMaterial?(s(p,u),d(p,u),u.isMeshPhysicalMaterial&&m(p,u,S)):u.isMeshMatcapMaterial?(s(p,u),_(p,u)):u.isMeshDepthMaterial?s(p,u):u.isMeshDistanceMaterial?(s(p,u),M(p,u)):u.isMeshNormalMaterial?s(p,u):u.isLineBasicMaterial?(a(p,u),u.isLineDashedMaterial&&o(p,u)):u.isPointsMaterial?l(p,u,b,T):u.isSpriteMaterial?c(p,u):u.isShadowMaterial?(p.color.value.copy(u.color),p.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function s(p,u){p.opacity.value=u.opacity,u.color&&p.diffuse.value.copy(u.color),u.emissive&&p.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(p.map.value=u.map,t(u.map,p.mapTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,t(u.alphaMap,p.alphaMapTransform)),u.bumpMap&&(p.bumpMap.value=u.bumpMap,t(u.bumpMap,p.bumpMapTransform),p.bumpScale.value=u.bumpScale,u.side===Mt&&(p.bumpScale.value*=-1)),u.normalMap&&(p.normalMap.value=u.normalMap,t(u.normalMap,p.normalMapTransform),p.normalScale.value.copy(u.normalScale),u.side===Mt&&p.normalScale.value.negate()),u.displacementMap&&(p.displacementMap.value=u.displacementMap,t(u.displacementMap,p.displacementMapTransform),p.displacementScale.value=u.displacementScale,p.displacementBias.value=u.displacementBias),u.emissiveMap&&(p.emissiveMap.value=u.emissiveMap,t(u.emissiveMap,p.emissiveMapTransform)),u.specularMap&&(p.specularMap.value=u.specularMap,t(u.specularMap,p.specularMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest);const b=e.get(u),T=b.envMap,S=b.envMapRotation;T&&(p.envMap.value=T,An.copy(S),An.x*=-1,An.y*=-1,An.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(An.y*=-1,An.z*=-1),p.envMapRotation.value.setFromMatrix4(Ud.makeRotationFromEuler(An)),p.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=u.reflectivity,p.ior.value=u.ior,p.refractionRatio.value=u.refractionRatio),u.lightMap&&(p.lightMap.value=u.lightMap,p.lightMapIntensity.value=u.lightMapIntensity,t(u.lightMap,p.lightMapTransform)),u.aoMap&&(p.aoMap.value=u.aoMap,p.aoMapIntensity.value=u.aoMapIntensity,t(u.aoMap,p.aoMapTransform))}function a(p,u){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,u.map&&(p.map.value=u.map,t(u.map,p.mapTransform))}function o(p,u){p.dashSize.value=u.dashSize,p.totalSize.value=u.dashSize+u.gapSize,p.scale.value=u.scale}function l(p,u,b,T){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,p.size.value=u.size*b,p.scale.value=T*.5,u.map&&(p.map.value=u.map,t(u.map,p.uvTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,t(u.alphaMap,p.alphaMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest)}function c(p,u){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,p.rotation.value=u.rotation,u.map&&(p.map.value=u.map,t(u.map,p.mapTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,t(u.alphaMap,p.alphaMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest)}function h(p,u){p.specular.value.copy(u.specular),p.shininess.value=Math.max(u.shininess,1e-4)}function f(p,u){u.gradientMap&&(p.gradientMap.value=u.gradientMap)}function d(p,u){p.metalness.value=u.metalness,u.metalnessMap&&(p.metalnessMap.value=u.metalnessMap,t(u.metalnessMap,p.metalnessMapTransform)),p.roughness.value=u.roughness,u.roughnessMap&&(p.roughnessMap.value=u.roughnessMap,t(u.roughnessMap,p.roughnessMapTransform)),u.envMap&&(p.envMapIntensity.value=u.envMapIntensity)}function m(p,u,b){p.ior.value=u.ior,u.sheen>0&&(p.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),p.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(p.sheenColorMap.value=u.sheenColorMap,t(u.sheenColorMap,p.sheenColorMapTransform)),u.sheenRoughnessMap&&(p.sheenRoughnessMap.value=u.sheenRoughnessMap,t(u.sheenRoughnessMap,p.sheenRoughnessMapTransform))),u.clearcoat>0&&(p.clearcoat.value=u.clearcoat,p.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(p.clearcoatMap.value=u.clearcoatMap,t(u.clearcoatMap,p.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,t(u.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(p.clearcoatNormalMap.value=u.clearcoatNormalMap,t(u.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===Mt&&p.clearcoatNormalScale.value.negate())),u.dispersion>0&&(p.dispersion.value=u.dispersion),u.iridescence>0&&(p.iridescence.value=u.iridescence,p.iridescenceIOR.value=u.iridescenceIOR,p.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(p.iridescenceMap.value=u.iridescenceMap,t(u.iridescenceMap,p.iridescenceMapTransform)),u.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=u.iridescenceThicknessMap,t(u.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),u.transmission>0&&(p.transmission.value=u.transmission,p.transmissionSamplerMap.value=b.texture,p.transmissionSamplerSize.value.set(b.width,b.height),u.transmissionMap&&(p.transmissionMap.value=u.transmissionMap,t(u.transmissionMap,p.transmissionMapTransform)),p.thickness.value=u.thickness,u.thicknessMap&&(p.thicknessMap.value=u.thicknessMap,t(u.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=u.attenuationDistance,p.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(p.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(p.anisotropyMap.value=u.anisotropyMap,t(u.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=u.specularIntensity,p.specularColor.value.copy(u.specularColor),u.specularColorMap&&(p.specularColorMap.value=u.specularColorMap,t(u.specularColorMap,p.specularColorMapTransform)),u.specularIntensityMap&&(p.specularIntensityMap.value=u.specularIntensityMap,t(u.specularIntensityMap,p.specularIntensityMapTransform))}function _(p,u){u.matcap&&(p.matcap.value=u.matcap)}function M(p,u){const b=e.get(u).light;p.referencePosition.value.setFromMatrixPosition(b.matrixWorld),p.nearDistance.value=b.shadow.camera.near,p.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function Nd(i,e,t,n){let r={},s={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(b,T){const S=T.program;n.uniformBlockBinding(b,S)}function c(b,T){let S=r[b.id];S===void 0&&(_(b),S=h(b),r[b.id]=S,b.addEventListener("dispose",p));const B=T.program;n.updateUBOMapping(b,B);const D=e.render.frame;s[b.id]!==D&&(d(b),s[b.id]=D)}function h(b){const T=f();b.__bindingPointIndex=T;const S=i.createBuffer(),B=b.__size,D=b.usage;return i.bindBuffer(i.UNIFORM_BUFFER,S),i.bufferData(i.UNIFORM_BUFFER,B,D),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,T,S),S}function f(){for(let b=0;b<o;b++)if(a.indexOf(b)===-1)return a.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(b){const T=r[b.id],S=b.uniforms,B=b.__cache;i.bindBuffer(i.UNIFORM_BUFFER,T);for(let D=0,A=S.length;D<A;D++){const U=Array.isArray(S[D])?S[D]:[S[D]];for(let E=0,x=U.length;E<x;E++){const w=U[E];if(m(w,D,E,B)===!0){const k=w.__offset,z=Array.isArray(w.value)?w.value:[w.value];let Z=0;for(let $=0;$<z.length;$++){const X=z[$],J=M(X);typeof X=="number"||typeof X=="boolean"?(w.__data[0]=X,i.bufferSubData(i.UNIFORM_BUFFER,k+Z,w.__data)):X.isMatrix3?(w.__data[0]=X.elements[0],w.__data[1]=X.elements[1],w.__data[2]=X.elements[2],w.__data[3]=0,w.__data[4]=X.elements[3],w.__data[5]=X.elements[4],w.__data[6]=X.elements[5],w.__data[7]=0,w.__data[8]=X.elements[6],w.__data[9]=X.elements[7],w.__data[10]=X.elements[8],w.__data[11]=0):(X.toArray(w.__data,Z),Z+=J.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,k,w.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function m(b,T,S,B){const D=b.value,A=T+"_"+S;if(B[A]===void 0)return typeof D=="number"||typeof D=="boolean"?B[A]=D:B[A]=D.clone(),!0;{const U=B[A];if(typeof D=="number"||typeof D=="boolean"){if(U!==D)return B[A]=D,!0}else if(U.equals(D)===!1)return U.copy(D),!0}return!1}function _(b){const T=b.uniforms;let S=0;const B=16;for(let A=0,U=T.length;A<U;A++){const E=Array.isArray(T[A])?T[A]:[T[A]];for(let x=0,w=E.length;x<w;x++){const k=E[x],z=Array.isArray(k.value)?k.value:[k.value];for(let Z=0,$=z.length;Z<$;Z++){const X=z[Z],J=M(X),G=S%B,re=G%J.boundary,he=G+re;S+=re,he!==0&&B-he<J.storage&&(S+=B-he),k.__data=new Float32Array(J.storage/Float32Array.BYTES_PER_ELEMENT),k.__offset=S,S+=J.storage}}}const D=S%B;return D>0&&(S+=B-D),b.__size=S,b.__cache={},this}function M(b){const T={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(T.boundary=4,T.storage=4):b.isVector2?(T.boundary=8,T.storage=8):b.isVector3||b.isColor?(T.boundary=16,T.storage=12):b.isVector4?(T.boundary=16,T.storage=16):b.isMatrix3?(T.boundary=48,T.storage=48):b.isMatrix4?(T.boundary=64,T.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),T}function p(b){const T=b.target;T.removeEventListener("dispose",p);const S=a.indexOf(T.__bindingPointIndex);a.splice(S,1),i.deleteBuffer(r[T.id]),delete r[T.id],delete s[T.id]}function u(){for(const b in r)i.deleteBuffer(r[b]);a=[],r={},s={}}return{bind:l,update:c,dispose:u}}class Fd{constructor(e={}){const{canvas:t=El(),context:n=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1,reverseDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=a;const _=new Uint32Array(4),M=new Int32Array(4);let p=null,u=null;const b=[],T=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=_t,this.toneMapping=vn,this.toneMappingExposure=1;const S=this;let B=!1,D=0,A=0,U=null,E=-1,x=null;const w=new nt,k=new nt;let z=null;const Z=new Ye(0);let $=0,X=t.width,J=t.height,G=1,re=null,he=null;const Me=new nt(0,0,X,J),Ne=new nt(0,0,X,J);let $e=!1;const W=new Mo;let te=!1,_e=!1;const se=new at,Ae=new at,Ce=new N,Fe=new nt,tt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let He=!1;function rt(){return U===null?G:1}let L=n;function At(v,C){return t.getContext(v,C)}try{const v={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Rs}`),t.addEventListener("webglcontextlost",Y,!1),t.addEventListener("webglcontextrestored",ce,!1),t.addEventListener("webglcontextcreationerror",oe,!1),L===null){const C="webgl2";if(L=At(C,v),L===null)throw At(C)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(v){throw console.error("THREE.WebGLRenderer: "+v.message),v}let Oe,Be,Ee,Je,Se,y,g,I,q,K,V,ve,ae,ue,Ge,Q,fe,Te,we,de,ze,Ue,Ke,R;function ie(){Oe=new Hu(L),Oe.init(),Ue=new Ad(L,Oe),Be=new Iu(L,Oe,e,Ue),Ee=new yd(L,Oe),Be.reverseDepthBuffer&&d&&Ee.buffers.depth.setReversed(!0),Je=new ku(L),Se=new ld,y=new bd(L,Oe,Ee,Se,Be,Ue,Je),g=new Fu(S),I=new zu(S),q=new Kl(L),Ke=new Lu(L,q),K=new Gu(L,q,Je,Ke),V=new Xu(L,K,q,Je),we=new Wu(L,Be,y),Q=new Nu(Se),ve=new od(S,g,I,Oe,Be,Ke,Q),ae=new Id(S,Se),ue=new hd,Ge=new gd(Oe),Te=new Du(S,g,I,Ee,V,m,l),fe=new Sd(S,V,Be),R=new Nd(L,Je,Be,Ee),de=new Uu(L,Oe,Je),ze=new Vu(L,Oe,Je),Je.programs=ve.programs,S.capabilities=Be,S.extensions=Oe,S.properties=Se,S.renderLists=ue,S.shadowMap=fe,S.state=Ee,S.info=Je}ie();const H=new Ld(S,L);this.xr=H,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){const v=Oe.get("WEBGL_lose_context");v&&v.loseContext()},this.forceContextRestore=function(){const v=Oe.get("WEBGL_lose_context");v&&v.restoreContext()},this.getPixelRatio=function(){return G},this.setPixelRatio=function(v){v!==void 0&&(G=v,this.setSize(X,J,!1))},this.getSize=function(v){return v.set(X,J)},this.setSize=function(v,C,F=!0){if(H.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}X=v,J=C,t.width=Math.floor(v*G),t.height=Math.floor(C*G),F===!0&&(t.style.width=v+"px",t.style.height=C+"px"),this.setViewport(0,0,v,C)},this.getDrawingBufferSize=function(v){return v.set(X*G,J*G).floor()},this.setDrawingBufferSize=function(v,C,F){X=v,J=C,G=F,t.width=Math.floor(v*F),t.height=Math.floor(C*F),this.setViewport(0,0,v,C)},this.getCurrentViewport=function(v){return v.copy(w)},this.getViewport=function(v){return v.copy(Me)},this.setViewport=function(v,C,F,O){v.isVector4?Me.set(v.x,v.y,v.z,v.w):Me.set(v,C,F,O),Ee.viewport(w.copy(Me).multiplyScalar(G).round())},this.getScissor=function(v){return v.copy(Ne)},this.setScissor=function(v,C,F,O){v.isVector4?Ne.set(v.x,v.y,v.z,v.w):Ne.set(v,C,F,O),Ee.scissor(k.copy(Ne).multiplyScalar(G).round())},this.getScissorTest=function(){return $e},this.setScissorTest=function(v){Ee.setScissorTest($e=v)},this.setOpaqueSort=function(v){re=v},this.setTransparentSort=function(v){he=v},this.getClearColor=function(v){return v.copy(Te.getClearColor())},this.setClearColor=function(){Te.setClearColor.apply(Te,arguments)},this.getClearAlpha=function(){return Te.getClearAlpha()},this.setClearAlpha=function(){Te.setClearAlpha.apply(Te,arguments)},this.clear=function(v=!0,C=!0,F=!0){let O=0;if(v){let P=!1;if(U!==null){const ee=U.texture.format;P=ee===Is||ee===Us||ee===Ls}if(P){const ee=U.texture.type,le=ee===rn||ee===Ln||ee===Mi||ee===ii||ee===Ps||ee===Ds,pe=Te.getClearColor(),me=Te.getClearAlpha(),Re=pe.r,De=pe.g,ge=pe.b;le?(_[0]=Re,_[1]=De,_[2]=ge,_[3]=me,L.clearBufferuiv(L.COLOR,0,_)):(M[0]=Re,M[1]=De,M[2]=ge,M[3]=me,L.clearBufferiv(L.COLOR,0,M))}else O|=L.COLOR_BUFFER_BIT}C&&(O|=L.DEPTH_BUFFER_BIT),F&&(O|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),L.clear(O)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Y,!1),t.removeEventListener("webglcontextrestored",ce,!1),t.removeEventListener("webglcontextcreationerror",oe,!1),ue.dispose(),Ge.dispose(),Se.dispose(),g.dispose(),I.dispose(),V.dispose(),Ke.dispose(),R.dispose(),ve.dispose(),H.dispose(),H.removeEventListener("sessionstart",Bs),H.removeEventListener("sessionend",zs),Mn.stop()};function Y(v){v.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),B=!0}function ce(){console.log("THREE.WebGLRenderer: Context Restored."),B=!1;const v=Je.autoReset,C=fe.enabled,F=fe.autoUpdate,O=fe.needsUpdate,P=fe.type;ie(),Je.autoReset=v,fe.enabled=C,fe.autoUpdate=F,fe.needsUpdate=O,fe.type=P}function oe(v){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",v.statusMessage)}function Pe(v){const C=v.target;C.removeEventListener("dispose",Pe),it(C)}function it(v){ht(v),Se.remove(v)}function ht(v){const C=Se.get(v).programs;C!==void 0&&(C.forEach(function(F){ve.releaseProgram(F)}),v.isShaderMaterial&&ve.releaseShaderCache(v))}this.renderBufferDirect=function(v,C,F,O,P,ee){C===null&&(C=tt);const le=P.isMesh&&P.matrixWorld.determinant()<0,pe=Ro(v,C,F,O,P);Ee.setMaterial(O,le);let me=F.index,Re=1;if(O.wireframe===!0){if(me=K.getWireframeAttribute(F),me===void 0)return;Re=2}const De=F.drawRange,ge=F.attributes.position;let ke=De.start*Re,je=(De.start+De.count)*Re;ee!==null&&(ke=Math.max(ke,ee.start*Re),je=Math.min(je,(ee.start+ee.count)*Re)),me!==null?(ke=Math.max(ke,0),je=Math.min(je,me.count)):ge!=null&&(ke=Math.max(ke,0),je=Math.min(je,ge.count));const Qe=je-ke;if(Qe<0||Qe===1/0)return;Ke.setup(P,O,pe,F,me);let mt,We=de;if(me!==null&&(mt=q.get(me),We=ze,We.setIndex(mt)),P.isMesh)O.wireframe===!0?(Ee.setLineWidth(O.wireframeLinewidth*rt()),We.setMode(L.LINES)):We.setMode(L.TRIANGLES);else if(P.isLine){let xe=O.linewidth;xe===void 0&&(xe=1),Ee.setLineWidth(xe*rt()),P.isLineSegments?We.setMode(L.LINES):P.isLineLoop?We.setMode(L.LINE_LOOP):We.setMode(L.LINE_STRIP)}else P.isPoints?We.setMode(L.POINTS):P.isSprite&&We.setMode(L.TRIANGLES);if(P.isBatchedMesh)if(P._multiDrawInstances!==null)We.renderMultiDrawInstances(P._multiDrawStarts,P._multiDrawCounts,P._multiDrawCount,P._multiDrawInstances);else if(Oe.get("WEBGL_multi_draw"))We.renderMultiDraw(P._multiDrawStarts,P._multiDrawCounts,P._multiDrawCount);else{const xe=P._multiDrawStarts,Xt=P._multiDrawCounts,Xe=P._multiDrawCount,Pt=me?q.get(me).bytesPerElement:1,Nn=Se.get(O).currentProgram.getUniforms();for(let St=0;St<Xe;St++)Nn.setValue(L,"_gl_DrawID",St),We.render(xe[St]/Pt,Xt[St])}else if(P.isInstancedMesh)We.renderInstances(ke,Qe,P.count);else if(F.isInstancedBufferGeometry){const xe=F._maxInstanceCount!==void 0?F._maxInstanceCount:1/0,Xt=Math.min(F.instanceCount,xe);We.renderInstances(ke,Qe,Xt)}else We.render(ke,Qe)};function qe(v,C,F){v.transparent===!0&&v.side===Jt&&v.forceSinglePass===!1?(v.side=Mt,v.needsUpdate=!0,Ci(v,C,F),v.side=xn,v.needsUpdate=!0,Ci(v,C,F),v.side=Jt):Ci(v,C,F)}this.compile=function(v,C,F=null){F===null&&(F=v),u=Ge.get(F),u.init(C),T.push(u),F.traverseVisible(function(P){P.isLight&&P.layers.test(C.layers)&&(u.pushLight(P),P.castShadow&&u.pushShadow(P))}),v!==F&&v.traverseVisible(function(P){P.isLight&&P.layers.test(C.layers)&&(u.pushLight(P),P.castShadow&&u.pushShadow(P))}),u.setupLights();const O=new Set;return v.traverse(function(P){if(!(P.isMesh||P.isPoints||P.isLine||P.isSprite))return;const ee=P.material;if(ee)if(Array.isArray(ee))for(let le=0;le<ee.length;le++){const pe=ee[le];qe(pe,F,P),O.add(pe)}else qe(ee,F,P),O.add(ee)}),T.pop(),u=null,O},this.compileAsync=function(v,C,F=null){const O=this.compile(v,C,F);return new Promise(P=>{function ee(){if(O.forEach(function(le){Se.get(le).currentProgram.isReady()&&O.delete(le)}),O.size===0){P(v);return}setTimeout(ee,10)}Oe.get("KHR_parallel_shader_compile")!==null?ee():setTimeout(ee,10)})};let Ct=null;function Wt(v){Ct&&Ct(v)}function Bs(){Mn.stop()}function zs(){Mn.start()}const Mn=new So;Mn.setAnimationLoop(Wt),typeof self<"u"&&Mn.setContext(self),this.setAnimationLoop=function(v){Ct=v,H.setAnimationLoop(v),v===null?Mn.stop():Mn.start()},H.addEventListener("sessionstart",Bs),H.addEventListener("sessionend",zs),this.render=function(v,C){if(C!==void 0&&C.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(B===!0)return;if(v.matrixWorldAutoUpdate===!0&&v.updateMatrixWorld(),C.parent===null&&C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),H.enabled===!0&&H.isPresenting===!0&&(H.cameraAutoUpdate===!0&&H.updateCamera(C),C=H.getCamera()),v.isScene===!0&&v.onBeforeRender(S,v,C,U),u=Ge.get(v,T.length),u.init(C),T.push(u),Ae.multiplyMatrices(C.projectionMatrix,C.matrixWorldInverse),W.setFromProjectionMatrix(Ae),_e=this.localClippingEnabled,te=Q.init(this.clippingPlanes,_e),p=ue.get(v,b.length),p.init(),b.push(p),H.enabled===!0&&H.isPresenting===!0){const ee=S.xr.getDepthSensingMesh();ee!==null&&cr(ee,C,-1/0,S.sortObjects)}cr(v,C,0,S.sortObjects),p.finish(),S.sortObjects===!0&&p.sort(re,he),He=H.enabled===!1||H.isPresenting===!1||H.hasDepthSensing()===!1,He&&Te.addToRenderList(p,v),this.info.render.frame++,te===!0&&Q.beginShadows();const F=u.state.shadowsArray;fe.render(F,v,C),te===!0&&Q.endShadows(),this.info.autoReset===!0&&this.info.reset();const O=p.opaque,P=p.transmissive;if(u.setupLights(),C.isArrayCamera){const ee=C.cameras;if(P.length>0)for(let le=0,pe=ee.length;le<pe;le++){const me=ee[le];Gs(O,P,v,me)}He&&Te.render(v);for(let le=0,pe=ee.length;le<pe;le++){const me=ee[le];Hs(p,v,me,me.viewport)}}else P.length>0&&Gs(O,P,v,C),He&&Te.render(v),Hs(p,v,C);U!==null&&(y.updateMultisampleRenderTarget(U),y.updateRenderTargetMipmap(U)),v.isScene===!0&&v.onAfterRender(S,v,C),Ke.resetDefaultState(),E=-1,x=null,T.pop(),T.length>0?(u=T[T.length-1],te===!0&&Q.setGlobalState(S.clippingPlanes,u.state.camera)):u=null,b.pop(),b.length>0?p=b[b.length-1]:p=null};function cr(v,C,F,O){if(v.visible===!1)return;if(v.layers.test(C.layers)){if(v.isGroup)F=v.renderOrder;else if(v.isLOD)v.autoUpdate===!0&&v.update(C);else if(v.isLight)u.pushLight(v),v.castShadow&&u.pushShadow(v);else if(v.isSprite){if(!v.frustumCulled||W.intersectsSprite(v)){O&&Fe.setFromMatrixPosition(v.matrixWorld).applyMatrix4(Ae);const le=V.update(v),pe=v.material;pe.visible&&p.push(v,le,pe,F,Fe.z,null)}}else if((v.isMesh||v.isLine||v.isPoints)&&(!v.frustumCulled||W.intersectsObject(v))){const le=V.update(v),pe=v.material;if(O&&(v.boundingSphere!==void 0?(v.boundingSphere===null&&v.computeBoundingSphere(),Fe.copy(v.boundingSphere.center)):(le.boundingSphere===null&&le.computeBoundingSphere(),Fe.copy(le.boundingSphere.center)),Fe.applyMatrix4(v.matrixWorld).applyMatrix4(Ae)),Array.isArray(pe)){const me=le.groups;for(let Re=0,De=me.length;Re<De;Re++){const ge=me[Re],ke=pe[ge.materialIndex];ke&&ke.visible&&p.push(v,le,ke,F,Fe.z,ge)}}else pe.visible&&p.push(v,le,pe,F,Fe.z,null)}}const ee=v.children;for(let le=0,pe=ee.length;le<pe;le++)cr(ee[le],C,F,O)}function Hs(v,C,F,O){const P=v.opaque,ee=v.transmissive,le=v.transparent;u.setupLightsView(F),te===!0&&Q.setGlobalState(S.clippingPlanes,F),O&&Ee.viewport(w.copy(O)),P.length>0&&Ri(P,C,F),ee.length>0&&Ri(ee,C,F),le.length>0&&Ri(le,C,F),Ee.buffers.depth.setTest(!0),Ee.buffers.depth.setMask(!0),Ee.buffers.color.setMask(!0),Ee.setPolygonOffset(!1)}function Gs(v,C,F,O){if((F.isScene===!0?F.overrideMaterial:null)!==null)return;u.state.transmissionRenderTarget[O.id]===void 0&&(u.state.transmissionRenderTarget[O.id]=new Un(1,1,{generateMipmaps:!0,type:Oe.has("EXT_color_buffer_half_float")||Oe.has("EXT_color_buffer_float")?Ei:rn,minFilter:gn,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ve.workingColorSpace}));const ee=u.state.transmissionRenderTarget[O.id],le=O.viewport||w;ee.setSize(le.z,le.w);const pe=S.getRenderTarget();S.setRenderTarget(ee),S.getClearColor(Z),$=S.getClearAlpha(),$<1&&S.setClearColor(16777215,.5),S.clear(),He&&Te.render(F);const me=S.toneMapping;S.toneMapping=vn;const Re=O.viewport;if(O.viewport!==void 0&&(O.viewport=void 0),u.setupLightsView(O),te===!0&&Q.setGlobalState(S.clippingPlanes,O),Ri(v,F,O),y.updateMultisampleRenderTarget(ee),y.updateRenderTargetMipmap(ee),Oe.has("WEBGL_multisampled_render_to_texture")===!1){let De=!1;for(let ge=0,ke=C.length;ge<ke;ge++){const je=C[ge],Qe=je.object,mt=je.geometry,We=je.material,xe=je.group;if(We.side===Jt&&Qe.layers.test(O.layers)){const Xt=We.side;We.side=Mt,We.needsUpdate=!0,Vs(Qe,F,O,mt,We,xe),We.side=Xt,We.needsUpdate=!0,De=!0}}De===!0&&(y.updateMultisampleRenderTarget(ee),y.updateRenderTargetMipmap(ee))}S.setRenderTarget(pe),S.setClearColor(Z,$),Re!==void 0&&(O.viewport=Re),S.toneMapping=me}function Ri(v,C,F){const O=C.isScene===!0?C.overrideMaterial:null;for(let P=0,ee=v.length;P<ee;P++){const le=v[P],pe=le.object,me=le.geometry,Re=O===null?le.material:O,De=le.group;pe.layers.test(F.layers)&&Vs(pe,C,F,me,Re,De)}}function Vs(v,C,F,O,P,ee){v.onBeforeRender(S,C,F,O,P,ee),v.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,v.matrixWorld),v.normalMatrix.getNormalMatrix(v.modelViewMatrix),P.onBeforeRender(S,C,F,O,v,ee),P.transparent===!0&&P.side===Jt&&P.forceSinglePass===!1?(P.side=Mt,P.needsUpdate=!0,S.renderBufferDirect(F,C,O,P,v,ee),P.side=xn,P.needsUpdate=!0,S.renderBufferDirect(F,C,O,P,v,ee),P.side=Jt):S.renderBufferDirect(F,C,O,P,v,ee),v.onAfterRender(S,C,F,O,P,ee)}function Ci(v,C,F){C.isScene!==!0&&(C=tt);const O=Se.get(v),P=u.state.lights,ee=u.state.shadowsArray,le=P.state.version,pe=ve.getParameters(v,P.state,ee,C,F),me=ve.getProgramCacheKey(pe);let Re=O.programs;O.environment=v.isMeshStandardMaterial?C.environment:null,O.fog=C.fog,O.envMap=(v.isMeshStandardMaterial?I:g).get(v.envMap||O.environment),O.envMapRotation=O.environment!==null&&v.envMap===null?C.environmentRotation:v.envMapRotation,Re===void 0&&(v.addEventListener("dispose",Pe),Re=new Map,O.programs=Re);let De=Re.get(me);if(De!==void 0){if(O.currentProgram===De&&O.lightsStateVersion===le)return Ws(v,pe),De}else pe.uniforms=ve.getUniforms(v),v.onBeforeCompile(pe,S),De=ve.acquireProgram(pe,me),Re.set(me,De),O.uniforms=pe.uniforms;const ge=O.uniforms;return(!v.isShaderMaterial&&!v.isRawShaderMaterial||v.clipping===!0)&&(ge.clippingPlanes=Q.uniform),Ws(v,pe),O.needsLights=Po(v),O.lightsStateVersion=le,O.needsLights&&(ge.ambientLightColor.value=P.state.ambient,ge.lightProbe.value=P.state.probe,ge.directionalLights.value=P.state.directional,ge.directionalLightShadows.value=P.state.directionalShadow,ge.spotLights.value=P.state.spot,ge.spotLightShadows.value=P.state.spotShadow,ge.rectAreaLights.value=P.state.rectArea,ge.ltc_1.value=P.state.rectAreaLTC1,ge.ltc_2.value=P.state.rectAreaLTC2,ge.pointLights.value=P.state.point,ge.pointLightShadows.value=P.state.pointShadow,ge.hemisphereLights.value=P.state.hemi,ge.directionalShadowMap.value=P.state.directionalShadowMap,ge.directionalShadowMatrix.value=P.state.directionalShadowMatrix,ge.spotShadowMap.value=P.state.spotShadowMap,ge.spotLightMatrix.value=P.state.spotLightMatrix,ge.spotLightMap.value=P.state.spotLightMap,ge.pointShadowMap.value=P.state.pointShadowMap,ge.pointShadowMatrix.value=P.state.pointShadowMatrix),O.currentProgram=De,O.uniformsList=null,De}function ks(v){if(v.uniformsList===null){const C=v.currentProgram.getUniforms();v.uniformsList=ir.seqWithValue(C.seq,v.uniforms)}return v.uniformsList}function Ws(v,C){const F=Se.get(v);F.outputColorSpace=C.outputColorSpace,F.batching=C.batching,F.batchingColor=C.batchingColor,F.instancing=C.instancing,F.instancingColor=C.instancingColor,F.instancingMorph=C.instancingMorph,F.skinning=C.skinning,F.morphTargets=C.morphTargets,F.morphNormals=C.morphNormals,F.morphColors=C.morphColors,F.morphTargetsCount=C.morphTargetsCount,F.numClippingPlanes=C.numClippingPlanes,F.numIntersection=C.numClipIntersection,F.vertexAlphas=C.vertexAlphas,F.vertexTangents=C.vertexTangents,F.toneMapping=C.toneMapping}function Ro(v,C,F,O,P){C.isScene!==!0&&(C=tt),y.resetTextureUnits();const ee=C.fog,le=O.isMeshStandardMaterial?C.environment:null,pe=U===null?S.outputColorSpace:U.isXRRenderTarget===!0?U.texture.colorSpace:ai,me=(O.isMeshStandardMaterial?I:g).get(O.envMap||le),Re=O.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,De=!!F.attributes.tangent&&(!!O.normalMap||O.anisotropy>0),ge=!!F.morphAttributes.position,ke=!!F.morphAttributes.normal,je=!!F.morphAttributes.color;let Qe=vn;O.toneMapped&&(U===null||U.isXRRenderTarget===!0)&&(Qe=S.toneMapping);const mt=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,We=mt!==void 0?mt.length:0,xe=Se.get(O),Xt=u.state.lights;if(te===!0&&(_e===!0||v!==x)){const wt=v===x&&O.id===E;Q.setState(O,v,wt)}let Xe=!1;O.version===xe.__version?(xe.needsLights&&xe.lightsStateVersion!==Xt.state.version||xe.outputColorSpace!==pe||P.isBatchedMesh&&xe.batching===!1||!P.isBatchedMesh&&xe.batching===!0||P.isBatchedMesh&&xe.batchingColor===!0&&P.colorTexture===null||P.isBatchedMesh&&xe.batchingColor===!1&&P.colorTexture!==null||P.isInstancedMesh&&xe.instancing===!1||!P.isInstancedMesh&&xe.instancing===!0||P.isSkinnedMesh&&xe.skinning===!1||!P.isSkinnedMesh&&xe.skinning===!0||P.isInstancedMesh&&xe.instancingColor===!0&&P.instanceColor===null||P.isInstancedMesh&&xe.instancingColor===!1&&P.instanceColor!==null||P.isInstancedMesh&&xe.instancingMorph===!0&&P.morphTexture===null||P.isInstancedMesh&&xe.instancingMorph===!1&&P.morphTexture!==null||xe.envMap!==me||O.fog===!0&&xe.fog!==ee||xe.numClippingPlanes!==void 0&&(xe.numClippingPlanes!==Q.numPlanes||xe.numIntersection!==Q.numIntersection)||xe.vertexAlphas!==Re||xe.vertexTangents!==De||xe.morphTargets!==ge||xe.morphNormals!==ke||xe.morphColors!==je||xe.toneMapping!==Qe||xe.morphTargetsCount!==We)&&(Xe=!0):(Xe=!0,xe.__version=O.version);let Pt=xe.currentProgram;Xe===!0&&(Pt=Ci(O,C,P));let Nn=!1,St=!1,ci=!1;const et=Pt.getUniforms(),Ht=xe.uniforms;if(Ee.useProgram(Pt.program)&&(Nn=!0,St=!0,ci=!0),O.id!==E&&(E=O.id,St=!0),Nn||x!==v){Ee.buffers.depth.getReversed()?(se.copy(v.projectionMatrix),Tl(se),bl(se),et.setValue(L,"projectionMatrix",se)):et.setValue(L,"projectionMatrix",v.projectionMatrix),et.setValue(L,"viewMatrix",v.matrixWorldInverse);const on=et.map.cameraPosition;on!==void 0&&on.setValue(L,Ce.setFromMatrixPosition(v.matrixWorld)),Be.logarithmicDepthBuffer&&et.setValue(L,"logDepthBufFC",2/(Math.log(v.far+1)/Math.LN2)),(O.isMeshPhongMaterial||O.isMeshToonMaterial||O.isMeshLambertMaterial||O.isMeshBasicMaterial||O.isMeshStandardMaterial||O.isShaderMaterial)&&et.setValue(L,"isOrthographic",v.isOrthographicCamera===!0),x!==v&&(x=v,St=!0,ci=!0)}if(P.isSkinnedMesh){et.setOptional(L,P,"bindMatrix"),et.setOptional(L,P,"bindMatrixInverse");const wt=P.skeleton;wt&&(wt.boneTexture===null&&wt.computeBoneTexture(),et.setValue(L,"boneTexture",wt.boneTexture,y))}P.isBatchedMesh&&(et.setOptional(L,P,"batchingTexture"),et.setValue(L,"batchingTexture",P._matricesTexture,y),et.setOptional(L,P,"batchingIdTexture"),et.setValue(L,"batchingIdTexture",P._indirectTexture,y),et.setOptional(L,P,"batchingColorTexture"),P._colorsTexture!==null&&et.setValue(L,"batchingColorTexture",P._colorsTexture,y));const hi=F.morphAttributes;if((hi.position!==void 0||hi.normal!==void 0||hi.color!==void 0)&&we.update(P,F,Pt),(St||xe.receiveShadow!==P.receiveShadow)&&(xe.receiveShadow=P.receiveShadow,et.setValue(L,"receiveShadow",P.receiveShadow)),O.isMeshGouraudMaterial&&O.envMap!==null&&(Ht.envMap.value=me,Ht.flipEnvMap.value=me.isCubeTexture&&me.isRenderTargetTexture===!1?-1:1),O.isMeshStandardMaterial&&O.envMap===null&&C.environment!==null&&(Ht.envMapIntensity.value=C.environmentIntensity),St&&(et.setValue(L,"toneMappingExposure",S.toneMappingExposure),xe.needsLights&&Co(Ht,ci),ee&&O.fog===!0&&ae.refreshFogUniforms(Ht,ee),ae.refreshMaterialUniforms(Ht,O,G,J,u.state.transmissionRenderTarget[v.id]),ir.upload(L,ks(xe),Ht,y)),O.isShaderMaterial&&O.uniformsNeedUpdate===!0&&(ir.upload(L,ks(xe),Ht,y),O.uniformsNeedUpdate=!1),O.isSpriteMaterial&&et.setValue(L,"center",P.center),et.setValue(L,"modelViewMatrix",P.modelViewMatrix),et.setValue(L,"normalMatrix",P.normalMatrix),et.setValue(L,"modelMatrix",P.matrixWorld),O.isShaderMaterial||O.isRawShaderMaterial){const wt=O.uniformsGroups;for(let on=0,ln=wt.length;on<ln;on++){const Xs=wt[on];R.update(Xs,Pt),R.bind(Xs,Pt)}}return Pt}function Co(v,C){v.ambientLightColor.needsUpdate=C,v.lightProbe.needsUpdate=C,v.directionalLights.needsUpdate=C,v.directionalLightShadows.needsUpdate=C,v.pointLights.needsUpdate=C,v.pointLightShadows.needsUpdate=C,v.spotLights.needsUpdate=C,v.spotLightShadows.needsUpdate=C,v.rectAreaLights.needsUpdate=C,v.hemisphereLights.needsUpdate=C}function Po(v){return v.isMeshLambertMaterial||v.isMeshToonMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isShadowMaterial||v.isShaderMaterial&&v.lights===!0}this.getActiveCubeFace=function(){return D},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return U},this.setRenderTargetTextures=function(v,C,F){Se.get(v.texture).__webglTexture=C,Se.get(v.depthTexture).__webglTexture=F;const O=Se.get(v);O.__hasExternalTextures=!0,O.__autoAllocateDepthBuffer=F===void 0,O.__autoAllocateDepthBuffer||Oe.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),O.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(v,C){const F=Se.get(v);F.__webglFramebuffer=C,F.__useDefaultFramebuffer=C===void 0},this.setRenderTarget=function(v,C=0,F=0){U=v,D=C,A=F;let O=!0,P=null,ee=!1,le=!1;if(v){const me=Se.get(v);if(me.__useDefaultFramebuffer!==void 0)Ee.bindFramebuffer(L.FRAMEBUFFER,null),O=!1;else if(me.__webglFramebuffer===void 0)y.setupRenderTarget(v);else if(me.__hasExternalTextures)y.rebindTextures(v,Se.get(v.texture).__webglTexture,Se.get(v.depthTexture).__webglTexture);else if(v.depthBuffer){const ge=v.depthTexture;if(me.__boundDepthTexture!==ge){if(ge!==null&&Se.has(ge)&&(v.width!==ge.image.width||v.height!==ge.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");y.setupDepthRenderbuffer(v)}}const Re=v.texture;(Re.isData3DTexture||Re.isDataArrayTexture||Re.isCompressedArrayTexture)&&(le=!0);const De=Se.get(v).__webglFramebuffer;v.isWebGLCubeRenderTarget?(Array.isArray(De[C])?P=De[C][F]:P=De[C],ee=!0):v.samples>0&&y.useMultisampledRTT(v)===!1?P=Se.get(v).__webglMultisampledFramebuffer:Array.isArray(De)?P=De[F]:P=De,w.copy(v.viewport),k.copy(v.scissor),z=v.scissorTest}else w.copy(Me).multiplyScalar(G).floor(),k.copy(Ne).multiplyScalar(G).floor(),z=$e;if(Ee.bindFramebuffer(L.FRAMEBUFFER,P)&&O&&Ee.drawBuffers(v,P),Ee.viewport(w),Ee.scissor(k),Ee.setScissorTest(z),ee){const me=Se.get(v.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+C,me.__webglTexture,F)}else if(le){const me=Se.get(v.texture),Re=C||0;L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,me.__webglTexture,F||0,Re)}E=-1},this.readRenderTargetPixels=function(v,C,F,O,P,ee,le){if(!(v&&v.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let pe=Se.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&le!==void 0&&(pe=pe[le]),pe){Ee.bindFramebuffer(L.FRAMEBUFFER,pe);try{const me=v.texture,Re=me.format,De=me.type;if(!Be.textureFormatReadable(Re)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Be.textureTypeReadable(De)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}C>=0&&C<=v.width-O&&F>=0&&F<=v.height-P&&L.readPixels(C,F,O,P,Ue.convert(Re),Ue.convert(De),ee)}finally{const me=U!==null?Se.get(U).__webglFramebuffer:null;Ee.bindFramebuffer(L.FRAMEBUFFER,me)}}},this.readRenderTargetPixelsAsync=async function(v,C,F,O,P,ee,le){if(!(v&&v.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let pe=Se.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&le!==void 0&&(pe=pe[le]),pe){const me=v.texture,Re=me.format,De=me.type;if(!Be.textureFormatReadable(Re))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Be.textureTypeReadable(De))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(C>=0&&C<=v.width-O&&F>=0&&F<=v.height-P){Ee.bindFramebuffer(L.FRAMEBUFFER,pe);const ge=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,ge),L.bufferData(L.PIXEL_PACK_BUFFER,ee.byteLength,L.STREAM_READ),L.readPixels(C,F,O,P,Ue.convert(Re),Ue.convert(De),0);const ke=U!==null?Se.get(U).__webglFramebuffer:null;Ee.bindFramebuffer(L.FRAMEBUFFER,ke);const je=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await yl(L,je,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,ge),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,ee),L.deleteBuffer(ge),L.deleteSync(je),ee}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(v,C=null,F=0){v.isTexture!==!0&&(vi("WebGLRenderer: copyFramebufferToTexture function signature has changed."),C=arguments[0]||null,v=arguments[1]);const O=Math.pow(2,-F),P=Math.floor(v.image.width*O),ee=Math.floor(v.image.height*O),le=C!==null?C.x:0,pe=C!==null?C.y:0;y.setTexture2D(v,0),L.copyTexSubImage2D(L.TEXTURE_2D,F,0,0,le,pe,P,ee),Ee.unbindTexture()},this.copyTextureToTexture=function(v,C,F=null,O=null,P=0){v.isTexture!==!0&&(vi("WebGLRenderer: copyTextureToTexture function signature has changed."),O=arguments[0]||null,v=arguments[1],C=arguments[2],P=arguments[3]||0,F=null);let ee,le,pe,me,Re,De,ge,ke,je;const Qe=v.isCompressedTexture?v.mipmaps[P]:v.image;F!==null?(ee=F.max.x-F.min.x,le=F.max.y-F.min.y,pe=F.isBox3?F.max.z-F.min.z:1,me=F.min.x,Re=F.min.y,De=F.isBox3?F.min.z:0):(ee=Qe.width,le=Qe.height,pe=Qe.depth||1,me=0,Re=0,De=0),O!==null?(ge=O.x,ke=O.y,je=O.z):(ge=0,ke=0,je=0);const mt=Ue.convert(C.format),We=Ue.convert(C.type);let xe;C.isData3DTexture?(y.setTexture3D(C,0),xe=L.TEXTURE_3D):C.isDataArrayTexture||C.isCompressedArrayTexture?(y.setTexture2DArray(C,0),xe=L.TEXTURE_2D_ARRAY):(y.setTexture2D(C,0),xe=L.TEXTURE_2D),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,C.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,C.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,C.unpackAlignment);const Xt=L.getParameter(L.UNPACK_ROW_LENGTH),Xe=L.getParameter(L.UNPACK_IMAGE_HEIGHT),Pt=L.getParameter(L.UNPACK_SKIP_PIXELS),Nn=L.getParameter(L.UNPACK_SKIP_ROWS),St=L.getParameter(L.UNPACK_SKIP_IMAGES);L.pixelStorei(L.UNPACK_ROW_LENGTH,Qe.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Qe.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,me),L.pixelStorei(L.UNPACK_SKIP_ROWS,Re),L.pixelStorei(L.UNPACK_SKIP_IMAGES,De);const ci=v.isDataArrayTexture||v.isData3DTexture,et=C.isDataArrayTexture||C.isData3DTexture;if(v.isRenderTargetTexture||v.isDepthTexture){const Ht=Se.get(v),hi=Se.get(C),wt=Se.get(Ht.__renderTarget),on=Se.get(hi.__renderTarget);Ee.bindFramebuffer(L.READ_FRAMEBUFFER,wt.__webglFramebuffer),Ee.bindFramebuffer(L.DRAW_FRAMEBUFFER,on.__webglFramebuffer);for(let ln=0;ln<pe;ln++)ci&&L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Se.get(v).__webglTexture,P,De+ln),v.isDepthTexture?(et&&L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Se.get(C).__webglTexture,P,je+ln),L.blitFramebuffer(me,Re,ee,le,ge,ke,ee,le,L.DEPTH_BUFFER_BIT,L.NEAREST)):et?L.copyTexSubImage3D(xe,P,ge,ke,je+ln,me,Re,ee,le):L.copyTexSubImage2D(xe,P,ge,ke,je+ln,me,Re,ee,le);Ee.bindFramebuffer(L.READ_FRAMEBUFFER,null),Ee.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else et?v.isDataTexture||v.isData3DTexture?L.texSubImage3D(xe,P,ge,ke,je,ee,le,pe,mt,We,Qe.data):C.isCompressedArrayTexture?L.compressedTexSubImage3D(xe,P,ge,ke,je,ee,le,pe,mt,Qe.data):L.texSubImage3D(xe,P,ge,ke,je,ee,le,pe,mt,We,Qe):v.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,P,ge,ke,ee,le,mt,We,Qe.data):v.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,P,ge,ke,Qe.width,Qe.height,mt,Qe.data):L.texSubImage2D(L.TEXTURE_2D,P,ge,ke,ee,le,mt,We,Qe);L.pixelStorei(L.UNPACK_ROW_LENGTH,Xt),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Xe),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Pt),L.pixelStorei(L.UNPACK_SKIP_ROWS,Nn),L.pixelStorei(L.UNPACK_SKIP_IMAGES,St),P===0&&C.generateMipmaps&&L.generateMipmap(xe),Ee.unbindTexture()},this.copyTextureToTexture3D=function(v,C,F=null,O=null,P=0){return v.isTexture!==!0&&(vi("WebGLRenderer: copyTextureToTexture3D function signature has changed."),F=arguments[0]||null,O=arguments[1]||null,v=arguments[2],C=arguments[3],P=arguments[4]||0),vi('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(v,C,F,O,P)},this.initRenderTarget=function(v){Se.get(v).__webglFramebuffer===void 0&&y.setupRenderTarget(v)},this.initTexture=function(v){v.isCubeTexture?y.setTextureCube(v,0):v.isData3DTexture?y.setTexture3D(v,0):v.isDataArrayTexture||v.isCompressedArrayTexture?y.setTexture2DArray(v,0):y.setTexture2D(v,0),Ee.unbindTexture()},this.resetState=function(){D=0,A=0,U=null,Ee.reset(),Ke.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return tn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=Ve._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ve._getUnpackColorSpace()}}class Od extends bt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new sn,this.environmentIntensity=1,this.environmentRotation=new sn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Wa={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class Bd{constructor(e,t,n){const r=this;let s=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){o++,s===!1&&r.onStart!==void 0&&r.onStart(h,a,o),s=!0},this.itemEnd=function(h){a++,r.onProgress!==void 0&&r.onProgress(h,a,o),a===o&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(h){r.onError!==void 0&&r.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,f){return c.push(h,f),this},this.removeHandler=function(h){const f=c.indexOf(h);return f!==-1&&c.splice(f,2),this},this.getHandler=function(h){for(let f=0,d=c.length;f<d;f+=2){const m=c[f],_=c[f+1];if(m.global&&(m.lastIndex=0),m.test(h))return _}return null}}}const zd=new Bd;class Os{constructor(e){this.manager=e!==void 0?e:zd,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(r,s){n.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Os.DEFAULT_MATERIAL_NAME="__DEFAULT";class Hd extends Os{constructor(e){super(e)}load(e,t,n,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=Wa.get(e);if(a!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0),a;const o=Si("img");function l(){h(),Wa.add(e,this),t&&t(this),s.manager.itemEnd(e)}function c(f){h(),r&&r(f),s.manager.itemError(e),s.manager.itemEnd(e)}function h(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),s.manager.itemStart(e),o.src=e,o}}class Gd extends Os{constructor(e){super(e)}load(e,t,n,r){const s=new pt,a=new Hd(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){s.image=o,s.needsUpdate=!0,t!==void 0&&t(s)},n,r),s}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Rs}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Rs);const be={look:{exposure:.95,envIntensity:.3,keyIntensity:3,keyColor:"#fff1e2",fillIntensity:.3,background:"#ffffff",clearcoat:.25,clearcoatRoughness:.35},framing:{modelYawDeg:-78,fov:13.7,faceCenterYFrac:.513,faceHeightFrac:.4,coverage:1.019,parallax:.012},grab:{radiusFrac:.35,falloffExponent:3,falloffPlateau:.4,snapTolerancePx:28,normalGateExponent:1.5,pokeDepthFrac:.02,resistanceLFrac:.7,resistanceGainFloor:.13,hardCapFrac:2.2,chaseTauMs:40,creepBackFrac:.03,creepTauMs:500,pinchExp:.45,rigidity:.85,puttyPlasticity:1,hoverSwellFrac:.015,hoverRadiusFrac:.09},render:{gridRes:320,liftGain:.1,elong:3,sheenDelta:0,sharpen:.35,strainTint:.4,creaseDark:.45,specPowerMin:6,gradClamp:1.6,detailSpread:2.5,detFloor:.3,slopeCap:3,heightScale:.55,detailScale:.006,foldOverlay:!1,dprCap:1.35,zoom:.595},idle:{breathHz:.27,breathAmp:0,lobeAmp:.0025,squintGain:.22,stretchLighten:.35},rigidRegions:[{name:"eyeL",center:[-4.46,7.35,24],radius:3.8},{name:"eyeR",center:[12.68,7.65,20.5],radius:3.8}],springs:{releaseHz:1.5,releaseZeta:.12,velocityGain:.75,velocityClampFactor:2.5,ampFreqCoupling:.4,ampZetaCoupling:0,jitterPct:.1,settleEpsilonFrac:.003,rippleSpeedFacesPerSec:4}},Xa=[{name:"1 blessed goo",note:"your frozen feel, unchanged - the baseline to compare against",grab:{radiusFrac:.35,falloffPlateau:.4,falloffExponent:3,chaseTauMs:40,resistanceLFrac:.7,creepBackFrac:.03,pinchExp:.45},springs:{releaseHz:1.5,releaseZeta:.12,velocityGain:.75,ampFreqCoupling:.4}},{name:"2 tacky putty",note:"noticeably local, real give, settles without ringing",grab:{radiusFrac:.35,falloffPlateau:.14,falloffExponent:3.2,chaseTauMs:80,resistanceLFrac:.55,creepBackFrac:.05,pinchExp:.5},springs:{releaseHz:.85,releaseZeta:.62,velocityGain:.55,ampFreqCoupling:.25}},{name:"3 stiff clay",note:"tightest and most resistant; creeps home, never bounces",grab:{radiusFrac:.35,falloffPlateau:.08,falloffExponent:3.6,chaseTauMs:105,resistanceLFrac:.45,creepBackFrac:.055,pinchExp:.55},springs:{releaseHz:.55,releaseZeta:1.15,velocityGain:.4,ampFreqCoupling:.2}},{name:"4 warm taffy",note:"stringy and slow, one soft settle at the end",grab:{radiusFrac:.35,falloffPlateau:.2,falloffExponent:2.6,chaseTauMs:130,resistanceLFrac:.62,creepBackFrac:.04,pinchExp:.5},springs:{releaseHz:.62,releaseZeta:.78,velocityGain:.6,ampFreqCoupling:.35}},{name:"5 cold molasses",note:"heaviest lag, longest return - the slowest option",grab:{radiusFrac:.35,falloffPlateau:.16,falloffExponent:3,chaseTauMs:190,resistanceLFrac:.6,creepBackFrac:.045,pinchExp:.45},springs:{releaseHz:.38,releaseZeta:1.05,velocityGain:.45,ampFreqCoupling:.3}}];function Vd(i){const e=Xa[Math.max(0,Math.min(Xa.length-1,i))];return Object.assign(be.grab,e.grab),Object.assign(be.springs,e.springs),e}class kd{constructor(){j(this,"ctx",null);j(this,"master",null);j(this,"muted",!1);j(this,"buffers",new Map);j(this,"eventLog",[]);j(this,"stretchSrc",null);j(this,"stretchGain",null);j(this,"stretchPan",null)}ensure(){if(!this.ctx)try{this.ctx=new AudioContext({latencyHint:"interactive"}),this.master=this.ctx.createGain(),this.master.gain.value=.5,this.master.connect(this.ctx.destination)}catch{return null}return this.ctx.state==="suspended"&&this.ctx.resume(),this.ctx}setMuted(e){this.muted=e,this.master&&(this.master.gain.value=e?0:.5)}log(e){this.eventLog.push({type:e,t:performance.now()}),this.eventLog.length>200&&this.eventLog.shift()}playBuffer(e,t,n){const r=this.buffers.get(e);if(!r||!this.ctx||!this.master)return!1;const s=this.ctx.createBufferSource();s.buffer=r,s.playbackRate.value=t;const a=this.ctx.createGain();return a.gain.value=n,s.connect(a).connect(this.master),s.start(),!0}rand(e){return 1+(Math.random()*2-1)*e}pop(e){if(this.log("pop"),this.muted||!this.ensure())return;const t=this.rand(.08);if(this.playBuffer("pop",t,Math.min(e,1)))return;const n=this.ctx,r=n.currentTime,s=n.createOscillator(),a=n.createGain();s.type="sine",s.frequency.setValueAtTime(320*t*(1+.4*e),r),s.frequency.exponentialRampToValueAtTime(130*t,r+.11),a.gain.setValueAtTime(1e-4,r),a.gain.exponentialRampToValueAtTime(.35*Math.max(e,.15),r+.008),a.gain.exponentialRampToValueAtTime(1e-4,r+.13),s.connect(a).connect(this.master),s.start(r),s.stop(r+.15)}boing(e){if(this.log("boing"),this.muted||!this.ensure())return;const t=this.rand(.08);if(this.playBuffer("boing",t,Math.min(e,1)))return;const n=this.ctx,r=n.currentTime,s=n.createGain(),a=Math.max(e,.1);s.gain.setValueAtTime(1e-4,r),s.gain.exponentialRampToValueAtTime(.22*a,r+.006),s.gain.exponentialRampToValueAtTime(1e-4,r+.09+.08*a),s.connect(this.master);for(const o of[-6,7]){const l=n.createOscillator();l.type="triangle",l.frequency.value=(150+90*a)*t,l.detune.value=o,l.connect(s),l.start(r),l.stop(r+.2)}}ensureStretchLoop(){if(this.stretchSrc||!this.ensure())return;const e=this.ctx,n=e.createBuffer(1,e.sampleRate*1,e.sampleRate),r=n.getChannelData(0);let s=0;for(let h=0;h<r.length;h++)s=(s+(Math.random()*2-1)*.02)*.996,r[h]=s*3.5;const a=e.createBufferSource();a.buffer=n,a.loop=!0;const o=e.createBiquadFilter();o.type="bandpass",o.frequency.value=420,o.Q.value=.8;const l=e.createGain();l.gain.value=0;const c=e.createStereoPanner();a.connect(o).connect(l).connect(c).connect(this.master),a.start(),this.stretchSrc=a,this.stretchGain=l,this.stretchPan=c}updateStretch(e,t,n){if(this.muted||(this.ensureStretchLoop(),!this.stretchGain||!this.ctx))return;const r=this.ctx.currentTime;this.stretchSrc.playbackRate.setTargetAtTime(.7+.7*e,r,.03),this.stretchGain.gain.setTargetAtTime(Math.min(t,1)*.1,r,.03),this.stretchPan.pan.setTargetAtTime(Math.max(-1,Math.min(1,n)),r,.05)}stopStretch(){this.stretchGain&&this.ctx&&this.stretchGain.gain.setTargetAtTime(0,this.ctx.currentTime,.05)}squish(e){if(this.log("squish"),this.muted||!this.ensure()||this.playBuffer("squish",this.rand(.1),Math.min(e,1)))return;const t=this.ctx,n=t.currentTime,r=.07,s=t.createBufferSource(),a=t.createBuffer(1,t.sampleRate*r,t.sampleRate),o=a.getChannelData(0);for(let h=0;h<o.length;h++)o[h]=(Math.random()*2-1)*(1-h/o.length);s.buffer=a;const l=t.createBiquadFilter();l.type="lowpass",l.frequency.value=600;const c=t.createGain();c.gain.value=.06*Math.max(e,.3),s.connect(l).connect(c).connect(this.master),s.start(n)}}const xt=16,gi=12,Tt=6,Wd=`
attribute vec2 aUvRest;

uniform vec2  uHCenter[${xt}];      // rest UV
uniform vec2  uHOffset[${xt}];      // displacement, UV units
// x radius (FACE-HEIGHT units, matching params) y poke z ENVELOPE 0..1 w external
uniform vec4  uHData[${xt}];
uniform vec3  uHPinch[${xt}];       // xy axis (face units), z shrink
uniform vec2  uHRing[${xt} * ${Tt}];
uniform float uPlateau;
uniform float uFalloffExp;
uniform float uLiftGain;
uniform float uElong;                  // anti-fold: kernel support stretch per unit pull
uniform vec2  uUvToFace;               // UV delta -> face-height units (fixes a 2.47x brush)
uniform vec2  uUvToWorld;              // UV delta -> world units (carries plate aspect)
uniform sampler2D uHeight;
uniform float uHeightScale;

varying vec2 vUvRest;
varying float vGate;                   // max kernel weight here: gates the sheen
varying vec4  vJac;                    // analytic dD/dx as (m00,m01,m10,m11)
varying float vLift;
varying vec2  vGLift;                  // face-space gradient of the lift

// blessed kernel: flat plateau then (1-t^2)^exp, C1 at the rim
float kern(float d, float R, out float dwdd) {
  dwdd = 0.0;
  if (d >= R) return 0.0;
  float span = max(1.0 - uPlateau, 1e-4);
  float t = (d / R - uPlateau) / span;
  if (t <= 0.0) return 1.0;
  float u = 1.0 - t * t;
  float w = pow(max(u, 0.0), uFalloffExp);
  // dw/dd = dw/dt * dt/dd
  dwdd = -2.0 * t * uFalloffExp * pow(max(u, 0.0), uFalloffExp - 1.0) / (R * span);
  return w;
}

/**
 * ANTI-FOLD KERNEL METRIC.
 * A fixed-radius bump folds once |pull| exceeds R / max|w'|, which for the
 * blessed kernel (exp 3, plateau 0.40) is a fraction of the blessed 2.2R cap -
 * the hard-edged crescent Zachary saw. Stretching the kernel's SUPPORT along
 * the pull by a = 1 + k*|pull|/R bounds |dt/ds| by 1/(a*R), which keeps the
 * displacement Jacobian positive at any pull length. It also matches how real
 * flesh behaves: a pulled teat elongates rather than shearing off.
 * Returns the elongated distance and writes the gradient direction of THAT
 * metric, so the Jacobian the fragment shader receives stays consistent.
 */
float elongDist(vec2 rA, vec2 off, float R, out vec2 gdir) {
  float pl = length(off);
  gdir = vec2(0.0);
  if (pl < 1e-6 || uElong <= 0.0) {
    float d = length(rA);
    if (d > 1e-6) gdir = rA / d;
    return d;
  }
  float a = 1.0 + uElong * pl / max(R, 1e-5);
  vec2 axis = off / pl;
  float along = dot(rA, axis);
  vec2 perp = rA - along * axis;
  float sc = along / a;
  float d = sqrt(dot(perp, perp) + sc * sc);
  // d(dist)/d(rA) for the stretched metric
  if (d > 1e-6) gdir = (perp + (sc / a) * axis) / d;
  return d;
}

void main() {
  vUvRest = aUvRest;

  vec2 disp = vec2(0.0);
  mat2 J = mat2(0.0);
  vec2 gLift = vec2(0.0);
  float gate = 0.0;
  float lift = 0.0;

  // NO CROSS-HANDLE NORMALISATION. The old code divided every handle's weight
  // by the sum of all active weights, so a sculpt's rendered displacement was a
  // function of what OTHER handles happened to exist: pressing near an existing
  // putty sculpt halved it instantly (exactly, since plateau 0.40 makes two
  // overlapping kernels sum to 2), and the binary active flag made that a step
  // change. That is precisely the reported "popping" and "areas don't hold when
  // I click a new spot". Each handle now owns its own weight, and every handle
  // carries a 0..1 ENVELOPE so entering and leaving is always continuous.
  for (int i = 0; i < ${xt}; i++) {
    float env = uHData[i].z;
    if (env <= 0.001) continue;
    vec2 rA = (aUvRest - uHCenter[i]) * uUvToFace;
    vec2 gdir;
    float d = elongDist(rA, uHOffset[i] * uUvToFace, uHData[i].x, gdir);
    float dwdd;
    float w = kern(d, uHData[i].x, dwdd) * env;
    if (w <= 0.0) continue;

    // ripple: distance-indexed tap into the handle's offset history, so far
    // flesh trails the handle instead of moving with it
    vec2 off = uHOffset[i];
    if (uHData[i].w < 0.5) {
      float f = clamp(d / max(uHData[i].x, 1e-5), 0.0, 1.0) * float(${Tt} - 1);
      int i0 = int(floor(f));
      float fr = f - float(i0);
      vec2 a = uHRing[i * ${Tt} + i0];
      vec2 b = uHRing[i * ${Tt} + min(i0 + 1, ${Tt} - 1)];
      off = mix(a, b, fr);
    }

    disp += off * w;
    gate = max(gate, w);
    lift += w * length(off);

    // poke-in dent: pushes into the surface along -z on click
    lift -= w * uHData[i].y;

    // analytic Jacobian, in FACE units throughout: d(disp_face)/d(x_face).
    // gdir is already the gradient of the elongated metric in face space.
    if (d > 1e-6) {
      vec2 offF = off * uUvToFace;
      vec2 g = dwdd * env * gdir;
      J[0] += vec2(offF.x * g.x, offF.y * g.x);
      J[1] += vec2(offF.x * g.y, offF.y * g.y);
      // the lift is w * |off|, so its face-space gradient follows the same dw
      gLift += (dwdd * env * length(offF)) * gdir;
    }

    // volume-preserving transverse pinch, toward the stretch axis (face space,
    // converted back to UV for accumulation)
    if (uHData[i].w < 0.5 && uHPinch[i].z != 0.0) {
      vec2 ax = uHPinch[i].xy;
      float along = dot(rA, ax);
      vec2 perp = rA - along * ax;
      disp += (perp * (uHPinch[i].z * w)) / uUvToFace;
    }
  }

  vGate = clamp(gate, 0.0, 1.0);
  vJac = vec4(J[0].x, J[1].x, J[0].y, J[1].y);
  vGLift = gLift * uLiftGain;

  // z-lift resolves folds in the depth buffer: pulled flesh sits in front.
  // Scaled by uHeightScale so it competes with the baked dome on the same axis
  // rather than being ~10x too small to win the depth test.
  float h = texture2D(uHeight, aUvRest).r * uHeightScale;
  vLift = lift * uLiftGain * uHeightScale;
  // disp is in UV: converting needs the plate ASPECT too, or horizontal pulls
  // come out short and diagonals skew
  vec3 p = vec3(position.xy + disp * uUvToWorld, h + vLift);

  gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.0);
}
`,Xd=`
precision highp float;

uniform sampler2D uPlate;
uniform sampler2D uHeight;
uniform vec2  uHeightTexel;   // the HEIGHT map's texel
uniform vec2  uPlateTexel;    // the PLATE's texel (half the height map's size)
uniform float uHeightScale;
uniform float uDetailScale;
uniform vec3  uLightDir;
uniform float uSpecPower;
uniform float uSpecPowerMin;   // widened lobe where the normal is noisy/strained
uniform float uSpecGain;
uniform float uRimGain;
uniform float uGradClamp;      // max amplification of a height gradient by shear
uniform float uDetailSpread;   // how strongly detail-band slope widens the lobe
uniform float uDetFloor;       // |detF| floor: stops F-inverse-transpose exploding
uniform float uSlopeCap;       // absolute cap on the deformed slope
uniform float uSheenDelta;     // 0 = baked only, 1 = full delta relight
uniform float uSharpen;
uniform float uFoldOverlay;
uniform float uStrainTint;
uniform float uCreaseDark;

varying vec2 vUvRest;
varying float vGate;
varying vec4  vJac;
varying float vLift;
varying vec2  vGLift;
uniform vec2  uUvToFace;

float hs(vec2 uv, vec2 chan) { return dot(texture2D(uHeight, uv).rg, chan); }

// 4 taps at an explicit radius: widening the taps blurs and differentiates in
// one step, so seed noise can never enter the shape normal
vec2 grad(vec2 uv, float radius, vec2 chan) {
  float l = hs(uv - vec2(uHeightTexel.x * radius, 0.0), chan);
  float r = hs(uv + vec2(uHeightTexel.x * radius, 0.0), chan);
  float d = hs(uv - vec2(0.0, uHeightTexel.y * radius), chan);
  float u = hs(uv + vec2(0.0, uHeightTexel.y * radius), chan);
  return vec2(r - l, u - d) / (2.0 * radius);
}

// The taps differentiate PER TEXEL, so the raw gradient is height-per-texel and
// comes out ~1/1000 of the true slope: normals stayed within about 1.3 degrees
// of flat and the entire delta-relight dial did nothing. Convert to slope in
// FACE-HEIGHT units (height change per unit face height) before use.
//
// SPLIT BY BAND, deliberately. The DOME band is smooth and safe to feed a tight
// specular lobe. The DETAIL band is a luminance high-pass of a photograph, so it
// is inherently noisy; putting it inside pow(ndh, 48) turned photographic grain
// into bright filaments (the reported micro-tearing, isolated to this term by
// captures/ISO_sheet2.png). The detail band now shades with a WIDE lobe only.
// DIMENSIONAL FIX. Going from "per texel" to "per face unit" MULTIPLIES by
// texels-per-face-unit = (1/texel_uv) * (1/face_per_uv) = 1/(texel * uvToFace).
// The old form divided where it must multiply, so it was uUvToFace^2 too large:
// 9.4x on x and 6.1x on y, and ANISOTROPICALLY, which is what turned isotropic
// photographic noise into directional striations. Two research lenses found it
// independently and the derivation above confirms it.
// Sanity check that must hold: a true 45 degree ramp gives grad 2.154e-3, and
// 2.154e-3 * 0.55 * 844 = 1.000 exactly.
//
// HONEST CORRECTION to what this file used to claim: widening the taps does NOT
// low-pass the noise. A central difference is a comb filter, not a blur - at
// radius 3 it still passes a third of the amplitude at 0.25 cycles/texel. The
// real protections are the physical amplitude below, the slope cap, and the
// lobe widening.
vec2 perTexelToFace() { return 1.0 / (uHeightTexel * uUvToFace); }

vec2 domeGradient(vec2 uv) {
  return grad(uv, 3.0, vec2(1.0, 0.0)) * uHeightScale * perTexelToFace();
}
vec2 detailGradient(vec2 uv) {
  return grad(uv, 2.0, vec2(0.0, 1.0)) * uDetailScale * perTexelToFace();
}

/**
 * ROUGHNESS REGULARISATION (the Toksvig idea). A tight specular lobe turns any
 * normal jitter into bright speckle, and a warped photographic height field has
 * plenty. So the lobe WIDENS as local normal variance rises: high variance means
 * the pixel covers many orientations, which physically reads as rougher. This is
 * the standard cure for specular aliasing and it is what kills the streaks
 * without flattening the highlight in calm areas.
 * spread is a 0..1 measure of how much the normal is being perturbed here.
 * (No backticks in this file: the shaders live in JS template literals.)
 */
float sheen(vec3 n, float spread) {
  vec3 v = vec3(0.0, 0.0, 1.0);              // 100mm lens is near-orthographic
  vec3 h = normalize(uLightDir + v);
  float p = mix(uSpecPower, uSpecPowerMin, clamp(spread, 0.0, 1.0));
  // energy-ish compensation so widening the lobe does not just brighten it
  float g = uSpecGain * sqrt(p / max(uSpecPower, 1e-3));
  return g * pow(max(dot(n, h), 0.0), p)
       + uRimGain * pow(1.0 - max(dot(n, v), 0.0), 3.0);
}

void main() {
  vec4 plate = texture2D(uPlate, vUvRest);
  if (plate.a < 0.02) discard;

  vec3 albedo = plate.rgb;

  // stretch-modulated sharpening: a cheap CAS-style cross kernel, applied only
  // where the plate is actually magnified so specular cores do not ring.
  // Steps the PLATE texel (it samples the plate), not the height texel.
  if (uSharpen > 0.001) {
    vec2 t = uPlateTexel * 0.5;
    vec3 b = texture2D(uPlate, vUvRest + vec2(0.0, t.y)).rgb;
    vec3 d = texture2D(uPlate, vUvRest - vec2(t.x, 0.0)).rgb;
    vec3 f = texture2D(uPlate, vUvRest + vec2(t.x, 0.0)).rgb;
    vec3 hh = texture2D(uPlate, vUvRest - vec2(0.0, t.y)).rgb;
    vec3 blur = (b + d + f + hh) * 0.25;
    albedo = clamp(albedo + (albedo - blur) * uSharpen * 2.0, 0.0, 1.0);
  }

  mat2 J = mat2(vJac.x, vJac.z, vJac.y, vJac.w);
  mat2 F = mat2(1.0) + J;                     // deformation gradient
  float detF = F[0].x * F[1].y - F[0].y * F[1].x;

  // Bands kept separate: the smooth dome may drive a tight lobe, the noisy
  // detail band may not.
  vec2 gDome = domeGradient(vUvRest);
  vec2 gDet  = detailGradient(vUvRest);
  vec2 gRest = gDome + gDet;
  vec3 nRest = normalize(vec3(-gRest.x, -gRest.y, 1.0));
  vec2 gNowDome, gNowDet;

  // the height field is advected with the material, so its world gradient is
  // transformed by the inverse transpose of F; the z-lift adds its own tilt
  // REGULARISE F BEFORE DERIVING ANYTHING FROM IT. The old branch (skip when
  // |detF| < 1e-3) is a cliff: just outside it the reciprocal is ~1000x, which
  // is unbounded gain on the normal and the source of thin bright filaments.
  // Keep the SIGN so a genuine fold still reads as a fold, but floor the
  // magnitude so the inverse can never explode.
  float detSafe = sign(detF == 0.0 ? 1.0 : detF) * max(abs(detF), uDetFloor);
  {
    mat2 invT = mat2(F[1].y, -F[0].y, -F[1].x, F[0].x) / detSafe;
    gNowDome = invT * gDome;
    gNowDet  = invT * gDet;
  }
  // and cap the resulting SLOPE outright: past this the normal is grazing and
  // the specular is meaningless anyway
  float slopeNow = length(gNowDome + gNowDet);
  if (slopeNow > uSlopeCap) {
    float k = uSlopeCap / slopeNow;
    gNowDome *= k; gNowDet *= k;
  }
  // CLAMP the amplification. Under strong shear the inverse transpose can scale
  // the gradient without bound, which tilts the normal into grazing angles and
  // is where the filaments were born. Limit how far any band may be amplified.
  float maxAmp = uGradClamp;
  float aDome = length(gNowDome) / max(length(gDome), 1e-5);
  if (aDome > maxAmp) gNowDome *= maxAmp / aDome;
  float aDet = length(gNowDet) / max(length(gDet), 1e-5);
  if (aDet > maxAmp) gNowDet *= maxAmp / aDet;
  vec2 gNow = gNowDome + gNowDet;

  // how much this pixel's normal is being perturbed: drives lobe widening
  float spread = clamp(
      length(gNowDet) * uDetailSpread
    + abs(aDome - 1.0) * 0.5
    + abs(detF - 1.0) * 0.6, 0.0, 1.0);
  // the lift's own slope, computed analytically in the vertex shader. The old
  // code used J-transpose times (1,1) scaled by the lift height, which is not
  // the gradient of anything and cancelled itself out along one drag diagonal.
  vec3 nNow = normalize(vec3(-(gNow.x + vGLift.x), -(gNow.y + vGLift.y), 1.0));

  // DELTA, not absolute: the plate already contains sheen(nRest), so adding
  // sheen(nNow) outright would double-count the baked specular. Gating by the
  // kernel weight makes the rest pose identical to the blessed plate.
  // both evaluated with the SAME widened lobe, so the delta cannot manufacture
  // a highlight out of the lobe change alone
  float delta = (sheen(nNow, spread) - sheen(nRest, spread)) * vGate * uSheenDelta;
  vec3 lit = 1.0 - (1.0 - albedo) * (1.0 - max(delta, 0.0));   // screen up
  lit *= 1.0 + min(delta, 0.0) * 1.2;                          // multiply down

  // strain tint: thinning flesh lightens, compressed flesh deepens
  if (uStrainTint > 0.001) {
    float strain = clamp((detF - 1.0) * 1.5, -1.0, 1.0);
    lit = mix(lit, pow(lit, vec3(1.0 - 0.35 * strain)), uStrainTint);
  }

  // CREASE DARKENING. Where the sheet folds back over itself the depth buffer
  // correctly draws flesh over flesh, but with nothing shading the crease it
  // reads as a hard paper cut (visible in the first v2_pull_huge capture).
  // Compression (detF heading toward 0) is an analytic fold predictor here, so
  // darken by it and the overlap reads as a crevice instead of a decal.
  if (uCreaseDark > 0.001) {
    float squash = 1.0 - smoothstep(0.0, 0.55, detF);   // 0 relaxed, 1 collapsing
    lit *= 1.0 - uCreaseDark * squash;
  }

  // debug: paint where a gather warp WOULD have folded (det <= 0)
  if (uFoldOverlay > 0.5 && detF <= 0.0) lit = mix(lit, vec3(0.0, 1.0, 1.0), 0.7);

  gl_FragColor = vec4(lit, plate.a);

  // COLOUR CORRECTNESS: the plate is tagged sRGB so three.js decodes it to
  // linear for us, but a ShaderMaterial does NOT get the output encoding
  // appended automatically the way built-in materials do. Without this include
  // the linear values land straight in the framebuffer and the whole render is
  // too dark and oversaturated - which is exactly what Zachary saw
  // ("the color, and everything doesn't match at all").
  #include <colorspace_fragment>
}
`;function qd(i,e,t,n){const r={uPlate:{value:i},uHeight:{value:e},uHeightTexel:{value:new ye(1/t[0],1/t[1])},uPlateTexel:{value:new ye(1/t[0],1/t[1])},uHeightScale:{value:.55},uDetailScale:{value:.12},uLightDir:{value:new N(-.55,.62,.56).normalize()},uSpecPower:{value:48},uSpecPowerMin:{value:6},uSpecGain:{value:.6},uRimGain:{value:.3},uGradClamp:{value:1.6},uDetailSpread:{value:2.5},uDetFloor:{value:.3},uSlopeCap:{value:3},uSheenDelta:{value:1},uSharpen:{value:.35},uFoldOverlay:{value:0},uStrainTint:{value:.4},uCreaseDark:{value:.45},uPlateau:{value:.4},uFalloffExp:{value:3},uLiftGain:{value:.1},uElong:{value:3},uUvToFace:{value:new ye(1,1)},uUvToWorld:{value:new ye(n,n)},uHCenter:{value:Array.from({length:xt},()=>new ye)},uHOffset:{value:Array.from({length:xt},()=>new ye)},uHData:{value:Array.from({length:xt},()=>new nt)},uHPinch:{value:Array.from({length:xt},()=>new N)},uHRing:{value:Array.from({length:xt*Tt},()=>new ye)}};return new an({uniforms:r,vertexShader:Wd,fragmentShader:Xd,transparent:!0,depthTest:!0,depthWrite:!0})}class Yd{constructor(){j(this,"posPos",1);j(this,"posVel",0);j(this,"velPos",0);j(this,"velVel",1);j(this,"lastOmega",-1);j(this,"lastZeta",-1);j(this,"lastDt",-1)}update(e,t,n){if(e===this.lastOmega&&t===this.lastZeta&&n===this.lastDt)return this;if(this.lastOmega=e,this.lastZeta=t,this.lastDt=n,e<1e-6||n<=0)return this.posPos=1,this.posVel=0,this.velPos=0,this.velVel=1,this;if(t>1.001){const r=-e*t,s=e*Math.sqrt(t*t-1),a=r-s,o=r+s,l=Math.exp(a*n),c=Math.exp(o*n),h=1/(2*s);this.posPos=(o*l-a*c)*h,this.posVel=(c-l)*h,this.velPos=a*o*(l-c)*h,this.velVel=(o*c-a*l)*h}else if(t>.999){const r=Math.exp(-e*n);this.posPos=r*(1+e*n),this.posVel=r*n,this.velPos=-r*e*e*n,this.velVel=r*(1-e*n)}else{const r=e*t,s=e*Math.sqrt(1-t*t),a=Math.exp(-r*n),o=Math.cos(s*n),l=Math.sin(s*n),c=1/s;this.posPos=a*(o+r*l*c),this.posVel=a*l*c,this.velPos=-a*e*e*l*c,this.velVel=a*(o-r*l*c)}return this}}class Zd{constructor(){j(this,"pos",new N);j(this,"vel",new N)}step(e,t){const n=this.pos.x-t.x,r=this.pos.y-t.y,s=this.pos.z-t.z,a=this.vel.x,o=this.vel.y,l=this.vel.z;this.pos.set(t.x+n*e.posPos+a*e.posVel,t.y+r*e.posPos+o*e.posVel,t.z+s*e.posPos+l*e.posVel),this.vel.set(n*e.velPos+a*e.velVel,r*e.velPos+o*e.velVel,s*e.velPos+l*e.velVel)}}const $d=i=>i*Math.PI*2,Kd=xt,Gt=64,jd=.055,Jd=new N,_i=new N;let Hr=12345;function qa(){return Hr=Hr*1103515245+12345&2147483647,Hr/2147483647*2-1}class Qd{constructor(){j(this,"active",!1);j(this,"grabbed",!1);j(this,"external",!1);j(this,"frozen",!1);j(this,"envelope",0);j(this,"wantOn",!1);j(this,"owner",-1);j(this,"center",new ye);j(this,"offset",new ye);j(this,"target",new ye);j(this,"radius",.18);j(this,"grabNormal",new N(0,0,1));j(this,"pokeAmount",0);j(this,"heldSec",0);j(this,"releaseAt",0);j(this,"spring",new Zd);j(this,"coeffs",new Yd);j(this,"wobbleOmega",0);j(this,"wobbleZeta",.3);j(this,"releaseAxis",new ye);j(this,"releaseAmplitude",0);j(this,"prevProj",0);j(this,"settled",!1);j(this,"drainUntil",0);j(this,"onRestCrossing",null);j(this,"ring",new Float32Array(Gt*2));j(this,"ringT",new Float64Array(Gt));j(this,"ringHead",0);j(this,"ringCount",0)}bind(e,t,n,r=-1){this.center.copy(e),this.radius=t,this.grabNormal.copy(n),this.offset.set(0,0),this.target.set(0,0),this.pokeAmount=0,this.heldSec=0,this.grabbed=!0,this.active=!0,this.frozen=!1,this.settled=!1,this.owner=r,this.wantOn=!0,this.envelope=0,this.ringHead=0,this.ringCount=0}stepEnvelope(e){const t=this.wantOn?1:0;return this.envelope+=(t-this.envelope)*(1-Math.exp(-e/jd)),!this.wantOn&&this.envelope<.002?(this.envelope=0,this.active=!1,this.frozen=!1,this.owner=-1,!1):!0}retire(){this.wantOn=!1,this.grabbed=!1,this.owner=-1}pushRing(e){const t=this.ringHead;this.ring[t*2]=this.offset.x,this.ring[t*2+1]=this.offset.y,this.ringT[t]=e,this.ringHead=(t+1)%Gt,this.ringCount<Gt&&this.ringCount++}writeRing(e,t,n,r,s){for(let a=0;a<s;a++){const o=a/(s-1)*r,l=n-o*1e3;let c=this.offset.x,h=this.offset.y;if(this.ringCount>0){const f=(this.ringHead-1+Gt)%Gt;if(l<this.ringT[f]){let d=f,m=!1;for(let _=1;_<this.ringCount;_++){const M=(f-_+Gt)%Gt;if(this.ringT[M]<=l){const p=this.ringT[M],u=this.ringT[d],b=u>p?(l-p)/(u-p):0;c=this.ring[M*2]+(this.ring[d*2]-this.ring[M*2])*b,h=this.ring[M*2+1]+(this.ring[d*2+1]-this.ring[M*2+1])*b,m=!0;break}d=M}if(!m){const _=(this.ringHead-this.ringCount+Gt)%Gt;c=this.ring[_*2],h=this.ring[_*2+1]}}}e[t+a*2]=c,e[t+a*2+1]=h}}release(e,t){this.grabbed=!1,this.releaseAt=performance.now(),this.settled=!1;const n=be.springs,r=Math.min(this.offset.length()/this.radius,1);let s=n.releaseHz*(1-n.ampFreqCoupling*r),a=n.releaseZeta*(1-n.ampZetaCoupling*r);s*=1+n.jitterPct*qa(),a*=1+n.jitterPct*qa(),s*=1+(this.center.x>=.5?.04:-.04),this.wobbleOmega=$d(Math.max(s,.2)),this.wobbleZeta=Math.max(a,.04),this.spring.pos.set(this.offset.x,this.offset.y,0),this.spring.vel.set(e.x*n.velocityGain,e.y*n.velocityGain,0);const o=n.velocityClampFactor*Math.max(this.offset.length(),.02*this.radius)*this.wobbleOmega;this.spring.vel.length()>o&&this.spring.vel.setLength(o),this.releaseAmplitude=this.offset.length(),this.releaseAxis.copy(this.offset),this.releaseAxis.lengthSq()>1e-12?this.releaseAxis.normalize():this.releaseAxis.set(this.spring.vel.x,this.spring.vel.y).normalize(),this.prevProj=this.offset.dot(this.releaseAxis)}step(e,t,n,r){var o;const s=be.springs;if(this.frozen)return this.pokeAmount*=Math.exp(-e/.08),this.pushRing(t),!0;if(this.grabbed){this.heldSec+=e;const l=be.grab.creepBackFrac*(1-Math.exp(-this.heldSec/(be.grab.creepTauMs/1e3)));_i.set(this.target.x,this.target.y,0).multiplyScalar(1-l);const c=be.grab.chaseTauMs/1e3;if(c<=.001)this.offset.set(_i.x,_i.y);else{const f=1-Math.exp(-e/c);this.offset.x+=(_i.x-this.offset.x)*f,this.offset.y+=(_i.y-this.offset.y)*f}const h=be.grab.pokeDepthFrac;return this.pokeAmount+=(h-this.pokeAmount)*(1-Math.exp(-e/.04)),this.pushRing(t),!0}if(!this.settled){this.coeffs.update(this.wobbleOmega,this.wobbleZeta,e),this.spring.step(this.coeffs,Jd),this.offset.set(this.spring.pos.x,this.spring.pos.y);const l=this.offset.dot(this.releaseAxis),c=1e-5;(this.prevProj>c&&l<-c||this.prevProj<-c&&l>c)&&((o=this.onRestCrossing)==null||o.call(this,Math.min(this.spring.vel.length()/(this.wobbleOmega*.3+1e-6),1))),this.prevProj=l;const h=s.settleEpsilonFrac*this.radius;if(this.offset.length()<h&&this.spring.vel.length()<h*this.wobbleOmega){this.offset.set(0,0),this.spring.pos.set(0,0,0),this.spring.vel.set(0,0,0),this.settled=!0;const f=s.rippleSpeedFacesPerSec;this.drainUntil=t+this.radius/Math.max(f,.01)*1e3+50}}return this.pokeAmount*=Math.exp(-e/.08),this.pushRing(t),!!(this.settled&&t>=this.drainUntil)&&this.pokeAmount<1e-4&&this.retire(),this.active}}class ep{constructor(){j(this,"handles",Array.from({length:Kd},()=>new Qd))}claimGrab(e){for(let n=0;n<gi;n++){const r=this.handles[n];if(!r.active&&r.envelope<=.002)return r}let t=null;for(let n=0;n<gi;n++){const r=this.handles[n];r.owner!==-1||r.grabbed||(!t||r.releaseAt<t.releaseAt)&&(t=r)}if(t){t.frozen=!1,t.release(new ye,e),t.retire();for(let n=0;n<gi;n++){const r=this.handles[n];if(r!==t&&r.owner===-1&&!r.grabbed)return r}}return this.handles[0]}thawAll(e){for(const t of this.handles)t.frozen&&(t.frozen=!1,t.release(new ye,e))}get hover(){return this.handles[gi]}get lobes(){return this.handles.slice(gi+1)}}class tp{constructor(){j(this,"mesh");j(this,"material");j(this,"manifest");j(this,"pool",new ep);j(this,"plateScale",1);j(this,"faceHeight",1);j(this,"frameUv",new nt);j(this,"uvToFace",new ye(1,1));j(this,"geo");j(this,"ringScratch",new Float32Array(xt*Tt*2));j(this,"matteCanvas",null);j(this,"matteData",null)}async load(e){const t=await fetch("./plate_manifest.json?v=20260815-1150-position").then(S=>S.json());this.manifest=t;const[n,r]=t.plateSize,[s,a,o,l]=t.frameInPlate,c=new Gd,[h,f]=await Promise.all([c.loadAsync("./plate.png?v=20260815-1150-position"),c.loadAsync("./height.png")]);for(const S of[h,f])S.colorSpace=S===h?_t:Qt,S.minFilter=gn,S.magFilter=Ft,S.wrapS=S.wrapT=mn,S.anisotropy=Math.min(8,e.capabilities.getMaxAnisotropy()),S.generateMipmaps=!0,S.needsUpdate=!0;const d=l-a;this.plateScale=r/d,this.faceHeight=1,this.frameUv.set(s/n,1-l/r,o/n,1-a/r);const m=be.render.gridRes,_=n/r*this.plateScale,M=this.plateScale;this.geo=new wi(_,M,m,m);const p=this.geo.getAttribute("uv");this.geo.setAttribute("aUvRest",new zt(p.array.slice(),2)),this.material=qd(h,f,[n,r],this.plateScale);const u=f.image.width,b=f.image.height;this.material.uniforms.uHeightTexel.value.set(1/u,1/b),this.material.uniforms.uPlateTexel.value.set(1/n,1/r),this.material.uniforms.uHeightScale.value=be.render.heightScale,this.material.uniforms.uDetailScale.value=be.render.detailScale;const T=(l-a)/r;this.material.uniforms.uUvToFace.value.set(n/r/T,1/T),this.material.uniforms.uUvToWorld.value.set(n/r*this.plateScale,this.plateScale),this.uvToFace.set(n/r/T,1/T),this.mesh=new kt(this.geo,this.material)}frameCenterWorld(){const e=(this.frameUv.x+this.frameUv.z)*.5-.5,t=(this.frameUv.y+this.frameUv.w)*.5-.5,[n,r]=this.manifest.plateSize;return new ye(e*(n/r)*this.plateScale,t*this.plateScale)}screenToUv(e,t,n,r,s){const a=s.left+e/n*(s.right-s.left),o=s.top-t/r*(s.top-s.bottom);return this.worldToUv(a,o)}uvToWorld(e){const[t,n]=this.manifest.plateSize;return new ye((e.x-.5)*(t/n)*this.plateScale,(e.y-.5)*this.plateScale)}worldToUv(e,t){const[n,r]=this.manifest.plateSize;return new ye(e/(n/r*this.plateScale)+.5,t/this.plateScale+.5)}uploadHandles(e){const t=this.material.uniforms,n=t.uHCenter.value,r=t.uHOffset.value,s=t.uHData.value,a=t.uHPinch.value,o=t.uHRing.value,l=be.springs.rippleSpeedFacesPerSec>.01?be.grab.radiusFrac/be.springs.rippleSpeedFacesPerSec:0;for(let c=0;c<xt;c++){const h=this.pool.handles[c];n[c].copy(h.center),r[c].copy(h.offset),s[c].set(h.radius,h.pokeAmount,h.envelope,h.external?1:0);const f=h.offset.x*this.uvToFace.x,d=h.offset.y*this.uvToFace.y,m=Math.hypot(f,d);if(!h.external&&m>1e-5&&be.grab.pinchExp>0){const _=Math.pow(1+m/Math.max(h.radius,1e-5),-be.grab.pinchExp)-1;a[c].set(f/m,d/m,_)}else a[c].set(0,0,0);h.writeRing(this.ringScratch,c*Tt*2,e,l,Tt);for(let _=0;_<Tt;_++)o[c*Tt+_].set(this.ringScratch[c*Tt*2+_*2],this.ringScratch[c*Tt*2+_*2+1])}t.uPlateau.value=be.grab.falloffPlateau,t.uFalloffExp.value=be.grab.falloffExponent,t.uLiftGain.value=be.render.liftGain,t.uElong.value=be.render.elong,t.uSheenDelta.value=be.render.sheenDelta,t.uSharpen.value=be.render.sharpen,t.uFoldOverlay.value=be.render.foldOverlay?1:0,t.uStrainTint.value=be.render.strainTint,t.uCreaseDark.value=be.render.creaseDark,t.uSpecPowerMin.value=be.render.specPowerMin,t.uGradClamp.value=be.render.gradClamp,t.uDetailSpread.value=be.render.detailSpread,t.uDetFloor.value=be.render.detFloor,t.uSlopeCap.value=be.render.slopeCap,t.uHeightScale.value=be.render.heightScale,t.uDetailScale.value=be.render.detailScale}buildMatteLookup(e){const t=document.createElement("canvas"),n=256;t.width=n,t.height=n;const r=t.getContext("2d");r.drawImage(e,0,0,n,n),this.matteCanvas=t,this.matteData=r.getImageData(0,0,n,n)}isInside(e){if(!this.matteData)return!0;const t=this.matteData.width,n=Math.min(t-1,Math.max(0,Math.round(e.x*(t-1)))),r=Math.min(t-1,Math.max(0,Math.round((1-e.y)*(t-1))));return this.matteData.data[(r*t+n)*4+3]>128}}class np{constructor(e,t){j(this,"grabs",new Map);j(this,"canvas");j(this,"sheet");j(this,"hoverUv",new ye);j(this,"hoverInside",!1);j(this,"hoverAmp",0);j(this,"hoverCounter",0);j(this,"onGrabStateChange",null);j(this,"onGrabSound",null);j(this,"onReleaseSound",null);j(this,"onBoing",null);j(this,"puttyMode",!1);j(this,"hoverGrabMode",!1);j(this,"hoverGrabActive",!1);j(this,"HOVER_POINTER_ID",-777);j(this,"camera",null);j(this,"onDown",e=>{var r,s;if(this.hoverGrabMode)return;this.grabs.has(e.pointerId)&&this.release(e.pointerId,!0);const t=this.uvAt(e);if(!this.sheet.isInside(t))return;try{this.canvas.setPointerCapture(e.pointerId)}catch{}const n=this.sheet.pool.claimGrab(this.sheet.faceHeight);n.bind(t,be.grab.radiusFrac,new N(0,0,1),e.pointerId),n.external=!1,n.onRestCrossing=a=>{var o;return(o=this.onBoing)==null?void 0:o.call(this,a)},this.grabs.set(e.pointerId,{pointerId:e.pointerId,handle:n,originUv:t.clone(),history:[]}),this.canvas.style.cursor="none",this.hoverInside=!1,this.hoverAmp=0,this.sheet.pool.hover.retire(),(r=this.onGrabSound)==null||r.call(this,.5),(s=this.onGrabStateChange)==null||s.call(this,!0)});j(this,"onMove",e=>{if(this.hoverGrabMode){this.updateHoverGrab(e);return}const t=this.grabs.get(e.pointerId);if(!t){this.updateHover(e);return}const n=typeof e.getCoalescedEvents=="function"&&e.getCoalescedEvents().length?e.getCoalescedEvents():[e];for(const r of n){const a=this.uvAt(r).sub(t.originUv);t.handle.target.copy(this.applyResistance(a,t.handle.radius)),t.history.push({t:r.timeStamp,p:t.handle.target.clone()})}for(;t.history.length>12;)t.history.shift()});j(this,"onLeave",()=>{this.hoverInside=!1,this.hoverGrabMode&&this.hoverGrabActive&&(this.release(this.HOVER_POINTER_ID,!1),this.hoverGrabActive=!1)});j(this,"onUp",e=>this.release(e.pointerId,!1));j(this,"onLost",e=>this.release(e.pointerId,!0));j(this,"releaseAll",()=>{for(const e of[...this.grabs.keys()])this.release(e,!0)});this.canvas=e,this.sheet=t,e.addEventListener("pointerdown",this.onDown),e.addEventListener("pointermove",this.onMove),e.addEventListener("pointerup",this.onUp),e.addEventListener("pointercancel",this.onUp),e.addEventListener("lostpointercapture",this.onLost),e.addEventListener("pointerleave",this.onLeave),window.addEventListener("blur",this.releaseAll),e.style.cursor="grab"}dispose(){this.canvas.removeEventListener("pointerdown",this.onDown),this.canvas.removeEventListener("pointermove",this.onMove),this.canvas.removeEventListener("pointerup",this.onUp),this.canvas.removeEventListener("pointercancel",this.onUp),this.canvas.removeEventListener("lostpointercapture",this.onLost),this.canvas.removeEventListener("pointerleave",this.onLeave),window.removeEventListener("blur",this.releaseAll)}get grabbing(){return this.grabs.size>0}uvAt(e){const t=this.canvas.getBoundingClientRect();return this.camera?this.sheet.screenToUv(e.clientX-t.left,e.clientY-t.top,t.width,t.height,this.camera):new ye(.5,.5)}applyResistance(e,t){const n=this.sheet.uvToFace,r=e.x*n.x,s=e.y*n.y,a=Math.hypot(r,s);if(a<1e-9)return e;const o=be.grab.resistanceLFrac*t,l=be.grab.resistanceGainFloor,c=o*(1/l-1);let h=a<=c?o*Math.log(1+a/o):o*Math.log(1+c/o)+l*(a-c);const f=be.grab.hardCapFrac*t,d=.85*f;if(h>d){const m=Math.min((h-d)/(f-d),1);h=d+(f-d)*m*(2-m)}return e.multiplyScalar(h/a)}updateHoverGrab(e){const t=this.uvAt(e),n=this.sheet.isInside(t);if(this.canvas.style.cursor=n?"pointer":"default",!n){this.hoverGrabActive&&this.release(this.HOVER_POINTER_ID,!1),this.hoverGrabActive=!1;return}let r=this.grabs.get(this.HOVER_POINTER_ID);if(!r){const a=this.sheet.pool.claimGrab(this.sheet.faceHeight);a.bind(t,be.grab.radiusFrac,new N(0,0,1),this.HOVER_POINTER_ID),a.external=!1,a.onRestCrossing=o=>{var l;return(l=this.onBoing)==null?void 0:l.call(this,o)},r={pointerId:this.HOVER_POINTER_ID,handle:a,originUv:t.clone(),history:[]},this.grabs.set(this.HOVER_POINTER_ID,r),this.hoverGrabActive=!0,this.hoverInside=!1,this.hoverAmp=0,this.sheet.pool.hover.retire()}const s=typeof e.getCoalescedEvents=="function"&&e.getCoalescedEvents().length?e.getCoalescedEvents():[e];for(const a of s){const l=this.uvAt(a).sub(r.originUv);r.handle.target.copy(this.applyResistance(l,r.handle.radius)),r.history.push({t:a.timeStamp,p:r.handle.target.clone()})}for(;r.history.length>12;)r.history.shift()}forceReleaseAll(){this.releaseAll()}release(e,t){var a,o,l;const n=this.grabs.get(e);if(!n)return;this.grabs.delete(e);const r=new ye;if(!t&&n.history.length>=2){const c=n.history[n.history.length-1];if(performance.now()-c.t<80){let h=n.history[0];for(const d of n.history)if(c.t-d.t<=60){h=d;break}const f=(c.t-h.t)/1e3;f>.004&&r.copy(c.p).sub(h.p).divideScalar(f)}}n.handle.owner=-1;const s=Math.hypot(n.handle.offset.x*this.sheet.uvToFace.x,n.handle.offset.y*this.sheet.uvToFace.y);this.puttyMode&&s>.004?(n.handle.grabbed=!1,n.handle.frozen=!0,n.handle.releaseAt=performance.now(),(a=this.onGrabSound)==null||a.call(this,Math.min(s/(be.grab.radiusFrac*2),1))):this.puttyMode?n.handle.retire():(n.handle.release(r,this.sheet.faceHeight),(o=this.onReleaseSound)==null||o.call(this,Math.min(n.handle.releaseAmplitude/(be.grab.radiusFrac*2),1))),this.grabs.size===0&&(this.canvas.style.cursor="grab",(l=this.onGrabStateChange)==null||l.call(this,!1))}sweepOrphans(){for(const e of this.sheet.pool.handles){if(!e.active||!e.grabbed||e.external||e.frozen)continue;let t=!1;for(const n of this.grabs.values())if(n.handle===e){t=!0;break}t||e.release(new ye,this.sheet.faceHeight)}}updateHover(e){if(++this.hoverCounter%3!==0)return;const t=this.uvAt(e);this.hoverInside=this.sheet.isInside(t),this.canvas.style.cursor=this.hoverInside?"grab":"default",this.hoverInside&&this.hoverUv.copy(t)}updateHoverSwell(e){const t=this.sheet.pool.hover,n=this.hoverInside&&this.grabs.size===0?be.grab.hoverSwellFrac:0;if(this.hoverAmp+=(n-this.hoverAmp)*(1-Math.exp(-e/.08)),this.hoverAmp<1e-5&&n===0){t.retire();return}t.external=!0,t.active=!0,t.grabbed=!1,t.wantOn=!0,t.center.copy(this.hoverUv),t.radius=be.grab.hoverRadiusFrac,t.offset.set(0,0),t.pokeAmount=-this.hoverAmp,t.envelope=Math.min(this.hoverAmp/Math.max(be.grab.hoverSwellFrac,1e-6),1)}stress(){let e=0;for(const t of this.grabs.values())e=Math.max(e,Math.min(t.handle.offset.length()/t.handle.radius,1));return e}firstGrabScreenX(){const e=this.grabs.values().next().value;return e?(e.handle.center.x+e.handle.offset.x)*2-1:0}}class ip{constructor(e,t={}){j(this,"renderer");j(this,"scene",new Od);j(this,"camera");j(this,"params",be);j(this,"audio",new kd);j(this,"stats",{fps:0,simMs:0,frameMs:0,verts:0});j(this,"sheet",new tp);j(this,"grab",null);j(this,"timeScale",1);j(this,"mode","snap");j(this,"onFeelOptionApplied",null);j(this,"canvas");j(this,"rafId",0);j(this,"disposed",!1);j(this,"lastTick",0);j(this,"onResize",()=>{const e=this.canvas.clientWidth,t=this.canvas.clientHeight;this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,be.render.dprCap)),this.renderer.setSize(e,t,!1),this.sheet.manifest&&this.frameCamera()});this.canvas=e;const n=t.transparent===!0;this.renderer=new Fd({canvas:e,antialias:!0,alpha:n}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,be.render.dprCap)),this.renderer.outputColorSpace=_t,n?(this.renderer.setClearColor(0,0),this.scene.background=null):this.scene.background=new Ye(be.look.background),this.camera=new Eo(-1,1,1,-1,-100,100),window.addEventListener("resize",this.onResize)}async load(){await this.sheet.load(this.renderer),this.scene.add(this.sheet.mesh);const e=new Image;e.src="./plate.png",await e.decode().catch(()=>{}),this.sheet.buildMatteLookup(e),!this.disposed&&(this.grab=new np(this.canvas,this.sheet),this.grab.camera=this.camera,this.grab.onGrabSound=t=>this.audio.squish(t),this.grab.onReleaseSound=t=>this.audio.pop(t),this.grab.onBoing=t=>this.audio.boing(t),this.stats.verts=this.sheet.mesh.geometry.getAttribute("position").count,this.frameCamera())}frameCamera(){const e=this.canvas.getBoundingClientRect(),t=Math.max(e.width/Math.max(e.height,1),.01),n=this.sheet.frameUv,[r,s]=this.sheet.manifest.plateSize,a=this.sheet.plateScale,o=(n.w-n.y)*a/2/Math.max(be.render.zoom,.2),l=o*t,c=this.sheet.frameCenterWorld();c.x-=140/e.width*(2*l),c.y+=20/e.height*(2*o),this.camera.left=c.x-l,this.camera.right=c.x+l,this.camera.top=c.y+o,this.camera.bottom=c.y-o,this.camera.updateProjectionMatrix()}syncSize(){this.onResize()}setMode(e){e!==this.mode&&(this.mode=e,this.grab&&(this.grab.puttyMode=e==="putty"),e==="snap"&&this.sheet.pool.thawAll(this.sheet.faceHeight))}reset(){var e;(e=this.grab)==null||e.forceReleaseAll();for(const t of this.sheet.pool.handles)t.active&&(t.frozen=!1,t.external?t.retire():t.release(new ye,this.sheet.faceHeight))}tickOnce(e){var s,a;const t=Math.min(Math.max((e-(this.lastTick||e))/1e3,0),.033)*this.timeScale;this.lastTick&&e>this.lastTick&&(this.stats.fps=this.stats.fps*.95+1e3/Math.max(e-this.lastTick,.1)*.05),this.lastTick=e;const n=performance.now();(s=this.grab)==null||s.sweepOrphans(),(a=this.grab)==null||a.updateHoverSwell(t);for(const o of this.sheet.pool.handles)!o.external&&o.active&&o.step(t,e,this.sheet.faceHeight,1),(o.active||o.envelope>0)&&o.stepEnvelope(t);this.sheet.uploadHandles(e),this.stats.simMs=this.stats.simMs*.9+(performance.now()-n)*.1;const r=performance.now();this.renderer.render(this.scene,this.camera),this.stats.frameMs=this.stats.frameMs*.9+(performance.now()-r)*.1}start(){const e=()=>{this.disposed||(this.rafId=requestAnimationFrame(e),this.tickOnce(performance.now()))};e()}dispose(){var e;this.disposed=!0,cancelAnimationFrame(this.rafId),window.removeEventListener("resize",this.onResize),(e=this.grab)==null||e.dispose(),this.renderer.dispose()}}function Ya(){const i=document.getElementById("goo");if(!i)return;Vd(1),be.render.zoom=3;const e=new ip(i,{transparent:!0});e.audio.setMuted(!0),e.syncSize(),e.load().then(()=>{var t;e.syncSize(),e.grab&&(e.grab.hoverGrabMode=!0),e.start(),window.__goo=e;try{(t=window.parent)==null||t.postMessage("goo-ready","*")}catch{}}).catch(t=>{console.error("goo embed load failed:",t),document.documentElement.setAttribute("data-goo-failed","true")})}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",Ya):Ya();
