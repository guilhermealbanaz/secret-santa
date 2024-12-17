import{a as $,u as z,r as n,j as e}from"./index-8PCAlkP4.js";import{C as h,b as u,c as g,a as f,B as l}from"./button-CeyIu-G8.js";import{I as C}from"./input-D3Ll_vfz.js";import{D as d,P as H,a as A}from"./DrawFactory-BNq4bxIy.js";import{C as I,L as V}from"./link-DH4rLYSX.js";import{c as B}from"./createLucideIcon-BvcpWxvl.js";import"./FirebaseService-CZ_nZK-v.js";/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q=B("Shuffle",[["path",{d:"m18 14 4 4-4 4",key:"10pe0f"}],["path",{d:"m18 2 4 4-4 4",key:"pucp1d"}],["path",{d:"M2 18h1.973a4 4 0 0 0 3.3-1.7l5.454-8.6a4 4 0 0 1 3.3-1.7H22",key:"1ailkh"}],["path",{d:"M2 6h1.972a4 4 0 0 1 3.6 2.2",key:"km57vx"}],["path",{d:"M22 18h-6.041a4 4 0 0 1-3.3-1.8l-.359-.45",key:"os18l9"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G=B("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);function Y(){var k;const{id:a}=$(),D=z(),[r,E]=n.useState(null),[m,b]=n.useState(""),[o,y]=n.useState(""),[L,c]=n.useState(!0),[j,w]=n.useState(!1);n.useEffect(()=>{if(!a)return;const s=d.createRepository().observe(a,i=>{E(i),c(!1)});return()=>s()},[a]);const P=async t=>{var s;if(t.preventDefault(),!(!m||!o||!r||!a)){c(!0);try{const i=d.createRepository();if((s=r.participants)!=null&&s.some(T=>T.email.toLowerCase()===o.toLowerCase())){c(!1);return}const x=H.create(m.trim(),o.trim().toLowerCase()),p=new A(a,r.name,r.password,[...r.participants||[],x],r.result||{},r.performed||!1,r.creationDate,r.configured);await i.update(p),b(""),y("")}catch(i){console.error("Error adding participant:",i)}finally{c(!1)}}},S=async t=>{if(!(!r||!a))try{const s=d.createRepository(),i=r.participants.filter(p=>p.id!==t),x=new A(a,r.name,r.password,i,r.result,r.performed,r.creationDate,r.configured);await s.update(x)}catch(s){console.error("Error removing participant:",s)}},M=async()=>{if(!a)return;const t=`${window.location.origin}/draw/${a}/register`;try{await navigator.clipboard.writeText(t),w(!0),setTimeout(()=>w(!1),2e3)}catch(s){console.error("Error copying link:",s)}},R=async()=>{if(!(!r||!a||r.participants.length<4))try{const t=d.createRepository(),s=r.performDraw();await t.update(s),D(`/draw/${a}/result`)}catch(t){console.error("Error performing draw:",t)}};if(L)return e.jsx("div",{className:"min-h-screen bg-[#0A0A0B] flex items-center justify-center",children:e.jsx("p",{className:"text-white",children:"Loading..."})});const v=((k=r==null?void 0:r.participants)==null?void 0:k.length)??0,N=v>=4,F=4-v;return e.jsx("div",{className:"min-h-screen w-full bg-gradient-to-br from-[#0A0F1E] via-[#121A3A] to-[#0A0F1E] p-8",children:e.jsxs("div",{className:"max-w-4xl mx-auto space-y-8 pb-24",children:[e.jsxs("div",{className:"space-y-4 text-center",children:[e.jsx("h1",{className:"text-4xl font-bold text-white",children:"Manage Participants"}),e.jsx("p",{className:"text-lg text-gray-400/80",children:"Add or remove participants from your draw"})]}),e.jsxs(h,{className:"bg-[#151B30]/50 border border-[#252B45] shadow-xl backdrop-blur-sm",children:[e.jsx(u,{children:e.jsx(g,{className:"text-2xl font-bold text-white",children:"Share Draw"})}),e.jsx(f,{className:"space-y-4",children:e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsxs("div",{className:"flex-1 bg-[#1A2038] p-3 rounded-lg text-gray-400 text-sm border border-[#252B45]",children:[window.location.origin,"/draw/",a,"/register"]}),e.jsx(l,{variant:"outline",className:`
                  min-w-[140px] h-11 
                  flex items-center justify-center gap-2
                  font-medium transition-all duration-300
                  border rounded-lg
                  ${j?"bg-green-500/10 text-green-500 border-green-500/30 hover:bg-green-500/20 hover:border-green-500/50":"bg-[#1A2038] text-gray-300 border-[#252B45] hover:bg-blue-600/10 hover:text-blue-400 hover:border-blue-500/50"}
                `,onClick:M,children:j?e.jsxs(e.Fragment,{children:[e.jsx(I,{className:"w-4 h-4"}),e.jsx("span",{children:"Copied!"})]}):e.jsxs(e.Fragment,{children:[e.jsx(V,{className:"w-4 h-4"}),e.jsx("span",{children:"Copy Link"})]})})]})})]}),e.jsxs(h,{className:"bg-[#151B30]/50 border border-[#252B45] shadow-xl backdrop-blur-sm",children:[e.jsx(u,{children:e.jsx(g,{className:"text-2xl font-bold text-white",children:"Add Participant"})}),e.jsxs(f,{className:"space-y-4",children:[e.jsxs("div",{className:"grid grid-cols-1 gap-4 sm:grid-cols-2",children:[e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-gray-400",children:"Name"}),e.jsx(C,{type:"text",value:m,onChange:t=>b(t.target.value),className:"bg-[#1A2038] border-[#252B45] text-white",placeholder:"Enter name"})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-gray-400",children:"Email"}),e.jsx(C,{type:"email",value:o,onChange:t=>y(t.target.value),className:"bg-[#1A2038] border-[#252B45] text-white",placeholder:"Enter email"})]})]}),e.jsx(l,{onClick:P,className:"w-full bg-blue-600 hover:bg-blue-700 text-white",children:"Add Participant"})]})]}),e.jsxs(h,{className:"bg-[#151B30]/50 border border-[#252B45] shadow-xl backdrop-blur-sm",children:[e.jsx(u,{children:e.jsx(g,{className:"text-2xl font-bold text-white",children:"Participants List"})}),e.jsx(f,{children:e.jsxs("div",{className:"space-y-4",children:[r==null?void 0:r.participants.map(t=>e.jsxs("div",{className:"flex items-center justify-between p-4 bg-[#1A2038] rounded-lg border border-[#252B45]",children:[e.jsxs("div",{children:[e.jsx("p",{className:"font-medium text-white",children:t.name}),e.jsx("p",{className:"text-sm text-gray-400",children:t.email})]}),e.jsx(l,{variant:"ghost",onClick:()=>S(t.id),className:"text-red-400 hover:text-red-300 hover:bg-red-500/10",children:e.jsx(G,{className:"w-4 h-4"})})]},t.id)),(r==null?void 0:r.participants.length)===0&&e.jsx("p",{className:"text-center text-gray-400 py-4",children:"No participants added yet"}),!N&&e.jsxs("div",{className:"text-gray-400 text-sm",children:["Adicione mais ",F," participantes para realizar o sorteio"]})]})})]}),N&&e.jsx("div",{className:"fixed bottom-8 left-0 right-0 flex justify-center z-50 px-8",children:e.jsxs(l,{onClick:R,className:`
                w-full max-w-2xl
                bg-gradient-to-r from-emerald-500 to-green-600
                hover:from-emerald-400 hover:to-green-500
                text-white font-semibold
                disabled:opacity-50
                shadow-lg shadow-green-500/20
                h-12 text-base
                transition-all duration-300
                rounded-xl
                flex items-center justify-center gap-3
              `,children:[e.jsx(q,{className:"w-4 h-4"}),"Realizar Sorteio"]})})]})})}export{Y as default};