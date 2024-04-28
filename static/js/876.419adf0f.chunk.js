"use strict";(self.webpackChunktodo_boost=self.webpackChunktodo_boost||[]).push([[876],{2336:(n,e,t)=>{t.d(e,{Bs:()=>b,au:()=>A,c$:()=>v,ng:()=>w,oV:()=>j,wr:()=>y,zs:()=>f});var o,r,d,i,a,l,s,c=t(7528),p=t(3892),x=t(3200),u=t(197),g=t(1899),h=t.n(g),m=t(5819);const b=u.Ay.div(o||(o=(0,c.A)(["\n  display: flex;\n  flex-direction: column;\n  width: 600px;\n  min-height: 400px;\n  border-radius: 20px;\n  padding: 20px;\n  background-color: #ffffff;\n  animation: "," 700ms ease-in-out;\n\n  & button {\n    align-self: end;\n    background-color: transparent;\n  }\n\n  & svg {\n    color: var(--bg-accent-dark);\n    transition: color var(--transition-main);\n\n    &:hover {\n      color: var(--text-main);\n    }\n  }\n"])),x.y),f=u.Ay.div(r||(r=(0,c.A)(["\n  z-index: 1200;\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: var(--backdrop);\n"]))),v=(0,u.Ay)(p.lV)(d||(d=(0,c.A)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  padding: 16px;\n  gap: 20px;\n\n  & button {\n    align-self: center;\n  }\n"]))),y=(0,u.Ay)(p.D0)(i||(i=(0,c.A)(["\n  width: 480px;\n  padding: 12px;\n  border-radius: 12px;\n  border: none;\n  background-color: var(--bg-accent-lighter);\n\n  &:focus {\n    outline: 2px solid var(--bg-accent);\n  }\n"]))),j=(0,u.Ay)(h())(a||(a=(0,c.A)(["\n  width: 480px;\n  padding: 12px;\n  border-radius: 12px;\n  border: none;\n  background-color: var(--bg-accent-lighter);\n\n  &:focus {\n    outline: 2px solid var(--bg-accent);\n  }\n"]))),w=(0,u.Ay)(p.Kw)(l||(l=(0,c.A)(["\n  color: var(--bg-accent-dark);\n"]))),A=(0,u.Ay)(m.$n)(s||(s=(0,c.A)(["\n  position: fixed;\n  bottom: 40px;\n"])))},5899:(n,e,t)=>{t.d(e,{X:()=>v});var o=t(5043),r=t(7950),d=t(2336),i=t(3892),a=(t(5015),t(899)),l=t(3003),s=t(1645),c=t(6432),p=t(9597);const x=n=>{if(!n)return"";const e=n.getDate().toString().padStart(2,"0"),t=(n.getMonth()+1).toString().padStart(2,"0"),o=n.getFullYear().toString();return"".concat(e,"/").concat(t,"/").concat(o)},u=n=>{if(""===n||!n)return;const[e,t,o]=n.split("/");return new Date(Number(o),Number(t)-1,Number(e))};var g=t(5394),h=t(1747),m=t(579);const b=document.querySelector("#modal-root"),f=a.Ik().shape({title:a.Yj().min(3).max(100).required("A Title for new task is required"),deadline:a.p6().required("A deadline is required"),text:a.Yj().max(500)}),v=n=>{let{closeModal:e,isEdit:t=!1,todoId:a,title:v,text:y,deadline:j}=n;const w=(0,l.wA)(),{id:A}=(0,l.d4)(s.mB);(0,o.useEffect)((()=>{const n=n=>{"Escape"===n.code&&e()};return window.addEventListener("keydown",n),()=>{window.removeEventListener("keydown",n)}}),[e]);const k={title:t?v:"",text:t?y:"",deadline:t?u(j):void 0};return(0,r.createPortal)((0,m.jsx)(d.zs,{onClick:n=>{n.target===n.currentTarget&&e()},children:(0,m.jsxs)(d.Bs,{children:[(0,m.jsx)("button",{type:"button","aria-label":"close modal window",onClick:e,children:(0,m.jsx)(g.$8F,{size:28})}),(0,m.jsx)(i.l1,{initialValues:k,validationSchema:f,onSubmit:async n=>{const o={userId:A,todo:{...n,deadline:x(n.deadline),completed:!1,id:t?a:(0,c.Ak)()}};w(t?(0,p.d0)(o):(0,p.eW)(o)),e()},children:n=>{let{setFieldValue:e,values:o,handleChange:r}=n;return(0,m.jsxs)(d.c$,{children:[(0,m.jsx)(d.wr,{type:"text",name:"title",placeholder:"Title",required:!0}),(0,m.jsx)(d.wr,{as:"textarea",type:"text",name:"text",placeholder:"Description",onChange:r}),(0,m.jsx)(d.oV,{name:"deadline",placeholderText:"Deadline",selected:o.deadline,onChange:n=>e("deadline",n),autoComplete:"off",dateFormat:"dd/MM/yyyy",calendarStartDay:1,required:!0}),(0,m.jsx)(h.rA,{type:"submit",children:t?"Edit task":"Create new task"}),(0,m.jsx)(d.ng,{name:"title",component:"div"}),(0,m.jsx)(d.ng,{name:"text",component:"div"}),(0,m.jsx)(d.ng,{name:"deadline",component:"div"})]})}})]})}),b)}},1747:(n,e,t)=>{t.d(e,{Zp:()=>l,_X:()=>s,rA:()=>c});var o,r,d,i=t(7528),a=t(197);const l=a.Ay.div(o||(o=(0,i.A)(["\n  display: flex;\n  flex-direction: column;\n  width: 600px;\n  min-height: 160px;\n  padding: 20px;\n  border-radius: 24px;\n  background-color: ",";\n\n  & .deadline {\n    align-self: flex-end;\n    font-style: bold;\n    font-size: 18px;\n    color: var(--bg-accent-dark);\n  }\n\n  & .text {\n    width: 500px;\n    overflow-wrap: break-word;\n  }\n"])),(n=>{let{$isCompleted:e}=n;return e?"var(--bg-grey)":"var(--bg-accent-lighter)"})),s=a.Ay.div(r||(r=(0,i.A)(["\n  display: flex;\n  justify-content: space-between;\n\n  & button {\n    background-color: transparent;\n  }\n\n  & svg {\n    color: var(--bg-accent-dark);\n    transition: color var(--transition-main);\n\n    &:hover {\n      color: var(--text-main);\n    }\n  }\n\n  & h6 {\n    font-size: 20px;\n    font-style: bold;\n  }\n"]))),c=a.Ay.button(d||(d=(0,i.A)(["\n  padding: 8px;\n  margin-right: 12px;\n  width: 160px;\n  border-radius: 30px;\n  border: 1px solid var(--bg-accent-dark);\n  background-color: transparent;\n  transition: all var(--transition-main);\n\n  &:hover {\n    color: var(--text-white);\n    background-color: var(--bg-accent-dark);\n  }\n"])))},1173:(n,e,t)=>{t.d(e,{t:()=>b});var o=t(5043),r=t(6106),d=t(5899),i=t(6720),a=t(3003),l=t(9597),s=t(1645),c=t(1747),p=t(579);const x=n=>{let{id:e,title:t,text:x,deadline:u,completed:g}=n;const{isShowModal:h,openModal:m,closeModal:b}=(0,r.G)(),[f,v]=(0,o.useState)(g),{id:y}=(0,a.d4)(s.mB),j=(0,a.wA)();return(0,o.useEffect)((()=>{j((0,l.B5)({todo:{id:e,completed:f},userId:y}))}),[j,f,e,y]),(0,p.jsxs)(p.Fragment,{children:[(0,p.jsxs)(c.Zp,{$isCompleted:f,children:[(0,p.jsxs)(c._X,{children:[(0,p.jsx)("h6",{children:t}),(0,p.jsx)("button",{type:"button","aria-label":"toggle complete task",onClick:()=>{v((n=>!n))},children:f?(0,p.jsx)(i.n4s,{size:32}):(0,p.jsx)(i.ZRN,{size:32})})]}),(0,p.jsx)("p",{className:"text",children:x}),(0,p.jsx)("p",{className:"deadline",children:u}),(0,p.jsxs)("div",{children:[(0,p.jsx)(c.rA,{type:"button",onClick:m,children:"Edit task"}),(0,p.jsx)(c.rA,{type:"button",onClick:()=>{j((0,l.Ys)({id:e,userId:y}))},children:"Delete task"})]})]}),h&&(0,p.jsx)(d.X,{closeModal:b,isEdit:!0,todoId:e,title:t,text:x,deadline:u})]})},u=t.p+"static/media/paper-pile.0998e75220ca0b2d0e25.png";var g,h=t(7528);const m=t(197).Ay.div(g||(g=(0,h.A)(["\n  display: flex;\n  justify-content: space-between;\n  padding: 0 36px 0 36px;\n\n  & ul {\n    display: flex;\n    flex-direction: column;\n    gap: 12px;\n  }\n\n  & img {\n    position: fixed;\n    top: 25%;\n    right: 15%;\n    width: 320px;\n    height: 320px;\n  }\n"]))),b=n=>{let{todos:e}=n;return(0,p.jsxs)(m,{children:[(0,p.jsx)("ul",{children:e.map((n=>{let{id:e,title:t,text:o,deadline:r,completed:d}=n;return(0,p.jsx)(x,{id:e,title:t,text:o,deadline:r,completed:d},e)}))}),(0,p.jsx)("img",{src:u,alt:"pile of paper notes"})]})}},6106:(n,e,t)=>{t.d(e,{G:()=>r});var o=t(5043);const r=()=>{const[n,e]=(0,o.useState)(!1);return{isShowModal:n,openModal:()=>{e(!0),document.body.style.overflow="hidden"},closeModal:()=>{e(!1),document.body.style.overflow=""}}}},1697:(n,e,t)=>{t.r(e),t.d(e,{default:()=>l});var o=t(3003),r=t(1645),d=t(1173),i=t(392),a=t(579);const l=()=>{const n=(0,o.d4)(r.Rj);return(0,a.jsx)(a.Fragment,{children:n.length?(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(i.Y9,{children:"Here are all of your completed tasks:"}),(0,a.jsx)(d.t,{todos:n})]}):(0,a.jsx)("p",{children:"You have no completed tasks yet"})})}},392:(n,e,t)=>{t.d(e,{IY:()=>u,Y9:()=>x,mc:()=>c,rj:()=>p,tD:()=>g});var o,r,d,i,a,l=t(7528),s=t(197);const c=s.Ay.div(o||(o=(0,l.A)(["\n  height: 100%;\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n\n  & img {\n    height: 75vh;\n    width: auto;\n  }\n"]))),p=s.Ay.div(r||(r=(0,l.A)(["\n  display: flex;\n  justify-content: center;\n\n  & button {\n    color: var(--bg-accent-dark);\n    font-weight: bold;\n  }\n"]))),x=s.Ay.h2(d||(d=(0,l.A)(["\n  margin-left: 48px;\n  margin-bottom: 24px;\n"]))),u=s.Ay.div(i||(i=(0,l.A)(["\n  width: 500px;\n"]))),g=s.Ay.h5(a||(a=(0,l.A)(["\n  font-size: 36px;\n  width: 400px;\n"])))}}]);
//# sourceMappingURL=876.419adf0f.chunk.js.map