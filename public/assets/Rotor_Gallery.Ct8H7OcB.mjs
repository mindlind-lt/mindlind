import{t as e}from"./rolldown-runtime.DsXBSD_B.mjs";import{C as t,M as n,T as r,c as i,k as a,l as o,o as s}from"./react.CQg9dmOM.mjs";import{A as c,X as l,a as u}from"./framer.CkI1Tnt1.mjs";function d(e){let{images:r=[],count:s=8,cardColor:c=`#dcdcdc`,cardWidth:l=620,cardHeight:u=400,borderRadius:d=14,speedSec:f=10,staggerMs:p=300,perspective:m=1e3,camX:h=-30,camY:g=-8,camZ:_=90,offsetX:v=0,offsetY:y=0,imgRotateDeg:b=0,width:x=`100%`,height:S=`100%`}=e,C=n(()=>{let e=[];for(let t=0;t<Math.max(0,Math.floor(s));t++)e.push(r[t]||``);return e},[r,s]),w=a(null),T=a({w:Number(l)||620,h:Number(u)||400});t(()=>{let e=w.current;if(!e)return;let t=Number(l),n=Number(u),r=Number.isFinite(t)&&t>0,i=Number.isFinite(n)&&n>0;r&&t!==T.current.w&&(e.style.width=`${t}px`,T.current.w=t),i&&n!==T.current.h&&(e.style.height=`${n}px`,T.current.h=n)},[l,u]);let E=f>0;return o(`div`,{style:{width:x,height:S,display:`grid`,placeItems:`center`,perspective:`${m}px`,overflow:`visible`},children:[i(`style`,{children:`
        .ffg-scene{position:relative; transform-style:preserve-3d}
        .ffg-ul{position:relative; transform-style:preserve-3d; list-style:none; padding:0; margin:0}
        .ffg-li{
          position:absolute; inset:0; transform-style:preserve-3d;
          transform-origin: top center;
          will-change: transform;
        }
        .ffg-li.animating{
          animation: ffgTurn var(--dur) linear infinite;
        }
        .ffg-li::before, .ffg-li::after {
          content: "";
          position:absolute; inset:0; border-radius:var(--radius);
          backface-visibility:hidden; -webkit-backface-visibility:hidden;
          overflow:hidden; background-position:center; background-size:cover; background-repeat:no-repeat;
          transform: rotate(var(--imgrot));
          background-image: var(--bg-img); background-color: var(--bg-col);
        }
        .ffg-li::after{ transform: rotateX(180deg) rotate(var(--imgrot)); }
        @keyframes ffgTurn{
          from{ transform: rotateZ(90deg) rotateX(1turn); }
          to  { transform: rotateZ(90deg) rotateX(0turn); }
        }
      `}),i(`div`,{ref:w,className:`ffg-scene`,style:{width:`${T.current.w}px`,height:`${T.current.h}px`,transform:`translate3d(${v}px, ${y}px, 0) rotateX(${h}deg) rotateY(${g}deg) rotateZ(${_}deg)`},children:i(`ul`,{className:`ffg-ul`,style:{width:`100%`,height:`100%`},children:C.map((e,t)=>{let n=`${t*-p}ms`;return i(`li`,{className:`ffg-li ${E?`animating`:``}`,style:{"--dur":E?`${f}s`:void 0,"--radius":`${d}px`,"--imgrot":`${b}deg`,animationDelay:E?n:void 0,"--bg-img":e?`url(${e})`:`none`,"--bg-col":e?`transparent`:c}},t)})})})]})}var f=e((()=>{s(),r(),l(),c(d,{images:{title:`Images`,type:u.Array,control:{type:u.Image}},count:{title:`Count`,type:u.Number,min:1,max:24,step:1},cardColor:{title:`Fallback`,type:u.Color},cardWidth:{title:`Card W`,type:u.Number,min:50,max:600,unit:`px`},cardHeight:{title:`Card H`,type:u.Number,min:50,max:600,unit:`px`},borderRadius:{title:`Radius`,type:u.Number,min:0,max:500,unit:`px`},speedSec:{title:`Speed`,type:u.Number,min:0,max:20,step:.25,unit:`s`},staggerMs:{title:`Stagger`,type:u.Number,min:0,max:6e3,step:10,unit:`ms`},perspective:{title:`Perspective`,type:u.Number,min:200,max:3e3,step:10,unit:`px`},camX:{title:`Cam X`,type:u.Number,min:-90,max:90,unit:`°`},camY:{title:`Cam Y`,type:u.Number,min:-90,max:90,unit:`°`},camZ:{title:`Cam Z`,type:u.Number,min:-180,max:180,unit:`°`},offsetX:{title:`Offset X`,type:u.Number,min:-800,max:800,step:1,unit:`px`},offsetY:{title:`Offset Y`,type:u.Number,min:-800,max:800,step:1,unit:`px`},imgRotateDeg:{title:`Image Angle`,type:u.Number,min:-180,max:180,step:1,unit:`°`}})}));export{f as n,d as t};
//# sourceMappingURL=Rotor_Gallery.Ct8H7OcB.mjs.map