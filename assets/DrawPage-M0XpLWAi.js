import{a as y,u as w,r,j as e}from"./index-8PCAlkP4.js";import{B as x,C as m,b as h,c as u,a as p}from"./button-CeyIu-G8.js";import{I as g}from"./input-D3Ll_vfz.js";import{D as A,a as C}from"./DrawFactory-BNq4bxIy.js";import{f as S}from"./formatErrorMessage-_xH_kIKB.js";import{A as B}from"./arrow-left-B5BTX2-6.js";import"./FirebaseService-CZ_nZK-v.js";import"./createLucideIcon-BvcpWxvl.js";function H(){const{id:i}=y(),l=w(),[a,f]=r.useState(""),[t,j]=r.useState(""),[o,c]=r.useState(!1),[n,d]=r.useState(null),N=()=>{l("/",{replace:!0})},b=async()=>{if(!(!a||!t||!i)){c(!0),d(null);try{const s=A.createRepository(),v=new C(i,a,t);await s.update(v),l(`/draw/${i}/participants`)}catch(s){d(S(s))}finally{c(!1)}}};return e.jsxs("div",{className:"min-h-screen w-full bg-gradient-to-br from-[#0A0F1E] via-[#121A3A] to-[#0A0F1E] p-8",children:[e.jsxs(x,{variant:"ghost",onClick:N,className:"absolute top-8 left-8 text-gray-400 hover:text-white hover:bg-[#252B45] transition-all duration-300 flex items-center gap-2 px-4 py-2",children:[e.jsx(B,{className:"h-5 w-5"}),"Back"]}),e.jsxs("div",{className:"w-full max-w-4xl mx-auto space-y-8",children:[e.jsxs("div",{className:"space-y-4 text-center",children:[e.jsx("h1",{className:"text-5xl font-bold text-white",children:"Customize seu Amigo Secreto"}),e.jsx("p",{className:"text-xl text-gray-400/80",children:"Configure seu Amigo Secreto em segundos."})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-8",children:[e.jsxs(m,{className:"bg-[#151B30]/50 border border-[#252B45] shadow-xl backdrop-blur-sm",children:[e.jsx(h,{children:e.jsx(u,{className:"text-2xl font-bold text-white",children:"Sobre o Amigo Secreto"})}),e.jsxs(p,{className:"space-y-6",children:[e.jsxs("div",{className:"space-y-2",children:[e.jsx("label",{className:"text-sm text-gray-400",children:"Nome do Amigo Secreto"}),e.jsx(g,{type:"text",value:a,onChange:s=>f(s.target.value),placeholder:"Ex: Amigo Secreto da Familia",className:"bg-[#1A2038] border-[#252B45] text-white h-11"}),e.jsx("p",{className:"text-xs text-gray-500",children:"This name will be visible to all participants"})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("label",{className:"text-sm text-gray-400",children:"Senha do Organizador"}),e.jsx(g,{type:"password",value:t,onChange:s=>j(s.target.value),placeholder:"Digite uma senha segura",className:"bg-[#1A2038] border-[#252B45] text-white h-11"}),e.jsx("p",{className:"text-xs text-gray-500",children:"Você precisará desta senha para gerenciar o sorteio"})]}),n&&e.jsx("div",{className:"p-3 bg-red-500/10 border border-red-500/20 rounded-lg",children:e.jsx("p",{className:"text-red-500 text-sm text-center",children:n})})]})]}),e.jsxs(m,{className:"bg-[#151B30]/50 border border-[#252B45] shadow-xl backdrop-blur-sm",children:[e.jsx(h,{children:e.jsx(u,{className:"text-2xl font-bold text-white",children:"Próximos Passos"})}),e.jsxs(p,{className:"space-y-6",children:[e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"flex items-start gap-3",children:[e.jsx("div",{className:"w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center flex-shrink-0",children:e.jsx("span",{className:"text-white font-medium",children:"1"})}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-white font-medium",children:"Configure o Amigo Secreto"}),e.jsx("p",{className:"text-sm text-gray-400",children:"Defina o nome e a senha do organizador"})]})]}),e.jsxs("div",{className:"flex items-start gap-3",children:[e.jsx("div",{className:"w-8 h-8 rounded-full bg-[#1A2038] flex items-center justify-center flex-shrink-0",children:e.jsx("span",{className:"text-gray-400 font-medium",children:"2"})}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-gray-300 font-medium",children:"Adicione Participantes"}),e.jsx("p",{className:"text-sm text-gray-400",children:"Convidar pessoas para participar"})]})]}),e.jsxs("div",{className:"flex items-start gap-3",children:[e.jsx("div",{className:"w-8 h-8 rounded-full bg-[#1A2038] flex items-center justify-center flex-shrink-0",children:e.jsx("span",{className:"text-gray-400 font-medium",children:"3"})}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-gray-300 font-medium",children:"Realize o Sorteio"}),e.jsx("p",{className:"text-sm text-gray-400",children:"Faça o sorteio quando todos estiverem prontos"})]})]})]}),e.jsx(x,{onClick:b,disabled:!a||!t||o,className:"w-full h-11 bg-blue-600 hover:bg-blue-700 text-white font-medium transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed",children:o?"Salvando...":"Continuar Configuração"})]})]})]})]})]})}export{H as default};