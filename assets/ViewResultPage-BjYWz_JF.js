import{j as n,r as f,u as G,a as z}from"./index-BmEOarwe.js";import{C,b as P,c as R,a as _,B as A}from"./button-DaJ78BPd.js";import{D as J}from"./DrawFactory-BxvEBTV_.js";import{c as T}from"./createLucideIcon-Dr4Ppt6G.js";import{I as q}from"./input-PgkxJBa7.js";import{M as K}from"./mail-mdIxLn6g.js";import{_ as X,C as Y,r as D,a as W,g as S,b as Q,c as Z,F as ee,i as te,d as re}from"./FirebaseService-BIknXk3L.js";import{A as ne}from"./arrow-left-BilerXT-.js";/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const se=T("Gift",[["rect",{x:"3",y:"8",width:"18",height:"4",rx:"1",key:"bkv52"}],["path",{d:"M12 8v13",key:"1c76mn"}],["path",{d:"M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7",key:"6wjy6b"}],["path",{d:"M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5",key:"1ihvrl"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ae=T("LoaderCircle",[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ie=T("Sparkles",[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]]),oe=({email:e,drawName:t,secretFriend:r})=>n.jsxs(C,{className:"bg-gradient-to-br from-[#151B30]/80 to-[#1F2B4B]/80 border border-[#252B45]/50 shadow-2xl backdrop-blur-md hover:shadow-blue-500/10 transition-all duration-300",children:[n.jsxs(P,{className:"relative",children:[n.jsx(ie,{className:"absolute top-4 right-4 w-5 h-5 text-blue-400/60"}),n.jsx(R,{className:"text-2xl font-bold bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent",children:t})]}),n.jsx(_,{children:n.jsxs("div",{className:"space-y-8",children:[n.jsx("div",{className:"flex items-center justify-center",children:n.jsx("div",{className:"w-24 h-24 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full flex items-center justify-center transform hover:scale-105 transition-transform duration-300 group",children:n.jsx(se,{className:"w-12 h-12 text-blue-400 group-hover:text-blue-300 transition-colors duration-300"})})}),n.jsxs("div",{className:"text-center space-y-3",children:[n.jsx("p",{className:"text-gray-400 text-lg",children:"Seu amigo secreto é"}),n.jsx("h2",{className:"text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent animate-pulse",children:r})]}),n.jsxs("div",{className:"space-y-4 bg-blue-500/5 rounded-lg p-4 border border-blue-500/10",children:[n.jsx("p",{className:"text-sm text-blue-300/80 text-center",children:"🤫 Lembre-se: isso é um segredo! Guarde essa informação com carinho."}),n.jsxs("p",{className:"text-sm text-purple-300/80 text-center",children:["🎁 Prepare um presente especial que ",r," vai adorar!"]})]}),n.jsx("div",{className:"pt-6 border-t border-[#252B45]/50",children:n.jsxs("p",{className:"text-xs text-gray-500 text-center hover:text-gray-400 transition-colors duration-300",children:["Este resultado foi enviado para"," ",n.jsx("span",{className:"text-blue-400/80",children:e})]})})]})})]}),ce=({email:e,isCodeSent:t,onVerify:r,onResend:s})=>{const[a,i]=f.useState(""),[o,d]=f.useState(!1),[l,u]=f.useState(null),[c,h]=f.useState(0);f.useEffect(()=>{if(c>0){const m=setTimeout(()=>h(c-1),1e3);return()=>clearTimeout(m)}},[c]);const y=async m=>{m.preventDefault(),u(null),d(!0);try{await r(a)}catch(N){u(N instanceof Error?N.message:"Erro ao verificar código"),i("")}finally{d(!1)}},w=async()=>{u(null),d(!0);try{await s(),h(60),i("")}catch(m){u(m instanceof Error?m.message:"Erro ao reenviar código")}finally{d(!1)}};return n.jsxs(C,{className:"bg-[#151B30]/50 border border-[#252B45] shadow-xl backdrop-blur-sm",children:[n.jsx(P,{children:n.jsx(R,{className:"text-2xl font-bold text-white text-center",children:"Verificação de Segurança"})}),n.jsx(_,{children:n.jsxs("div",{className:"space-y-6",children:[n.jsx("div",{className:"flex items-center justify-center",children:n.jsx("div",{className:"w-16 h-16 bg-blue-500/10 rounded-full flex items-center justify-center",children:n.jsx(K,{className:"w-8 h-8 text-blue-400"})})}),n.jsxs("div",{className:"text-center space-y-2",children:[n.jsx("p",{className:"text-gray-300",children:"Enviamos um código de verificação para"}),n.jsx("p",{className:"text-white font-medium",children:e})]}),n.jsxs("form",{onSubmit:y,className:"space-y-4",children:[n.jsx("div",{className:"space-y-2",children:n.jsx(q,{type:"text",value:a,onChange:m=>i(m.target.value.replace(/\D/g,"").slice(0,6)),placeholder:"Digite o código de 6 dígitos",className:"text-center text-xl tracking-wider h-12",maxLength:6})}),l&&n.jsx("div",{className:"p-3 bg-red-500/10 border border-red-500/20 rounded-lg",children:n.jsx("p",{className:"text-red-500 text-sm text-center",children:l})}),n.jsxs("div",{className:"space-y-3",children:[n.jsx(A,{type:"submit",disabled:a.length!==6||o,className:"w-full h-11 bg-blue-600 hover:bg-blue-700 text-white font-medium transition-all duration-300",children:o?n.jsx(ae,{className:"h-5 w-5 animate-spin"}):"Verificar Código"}),n.jsx(A,{type:"button",variant:"ghost",disabled:c>0||o,onClick:w,className:"w-full h-11 text-gray-400 hover:text-white",children:c>0?`Aguarde ${c}s para reenviar`:"Reenviar código"})]})]})]})})]})};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const le="type.googleapis.com/google.protobuf.Int64Value",ue="type.googleapis.com/google.protobuf.UInt64Value";function M(e,t){const r={};for(const s in e)e.hasOwnProperty(s)&&(r[s]=t(e[s]));return r}function j(e){if(e==null)return null;if(e instanceof Number&&(e=e.valueOf()),typeof e=="number"&&isFinite(e)||e===!0||e===!1||Object.prototype.toString.call(e)==="[object String]")return e;if(e instanceof Date)return e.toISOString();if(Array.isArray(e))return e.map(t=>j(t));if(typeof e=="function"||typeof e=="object")return M(e,t=>j(t));throw new Error("Data cannot be encoded in JSON: "+e)}function v(e){if(e==null)return e;if(e["@type"])switch(e["@type"]){case le:case ue:{const t=Number(e.value);if(isNaN(t))throw new Error("Data cannot be decoded from JSON: "+e);return t}default:throw new Error("Data cannot be decoded from JSON: "+e)}return Array.isArray(e)?e.map(t=>v(t)):typeof e=="function"||typeof e=="object"?M(e,t=>v(t)):e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const I="functions";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const F={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class b extends ee{constructor(t,r,s){super(`${I}/${t}`,r||""),this.details=s,Object.setPrototypeOf(this,b.prototype)}}function de(e){if(e>=200&&e<300)return"ok";switch(e){case 0:return"internal";case 400:return"invalid-argument";case 401:return"unauthenticated";case 403:return"permission-denied";case 404:return"not-found";case 409:return"aborted";case 429:return"resource-exhausted";case 499:return"cancelled";case 500:return"internal";case 501:return"unimplemented";case 503:return"unavailable";case 504:return"deadline-exceeded"}return"unknown"}function fe(e,t){let r=de(e),s=r,a;try{const i=t&&t.error;if(i){const o=i.status;if(typeof o=="string"){if(!F[o])return new b("internal","internal");r=F[o],s=o}const d=i.message;typeof d=="string"&&(s=d),a=i.details,a!==void 0&&(a=v(a))}}catch{}return r==="ok"?null:new b(r,s,a)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class me{constructor(t,r,s){this.auth=null,this.messaging=null,this.appCheck=null,this.auth=t.getImmediate({optional:!0}),this.messaging=r.getImmediate({optional:!0}),this.auth||t.get().then(a=>this.auth=a,()=>{}),this.messaging||r.get().then(a=>this.messaging=a,()=>{}),this.appCheck||s.get().then(a=>this.appCheck=a,()=>{})}async getAuthToken(){if(this.auth)try{const t=await this.auth.getToken();return t==null?void 0:t.accessToken}catch{return}}async getMessagingToken(){if(!(!this.messaging||!("Notification"in self)||Notification.permission!=="granted"))try{return await this.messaging.getToken()}catch{return}}async getAppCheckToken(t){if(this.appCheck){const r=t?await this.appCheck.getLimitedUseToken():await this.appCheck.getToken();return r.error?null:r.token}return null}async getContext(t){const r=await this.getAuthToken(),s=await this.getMessagingToken(),a=await this.getAppCheckToken(t);return{authToken:r,messagingToken:s,appCheckToken:a}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const k="us-central1";function he(e){let t=null;return{promise:new Promise((r,s)=>{t=setTimeout(()=>{s(new b("deadline-exceeded","deadline-exceeded"))},e)}),cancel:()=>{t&&clearTimeout(t)}}}class pe{constructor(t,r,s,a,i=k){this.app=t,this.emulatorOrigin=null,this.contextProvider=new me(r,s,a),this.cancelAllRequests=new Promise(o=>{this.deleteService=()=>Promise.resolve(o())});try{const o=new URL(i);this.customDomain=o.origin+(o.pathname==="/"?"":o.pathname),this.region=k}catch{this.customDomain=null,this.region=i}}_delete(){return this.deleteService()}_url(t){const r=this.app.options.projectId;return this.emulatorOrigin!==null?`${this.emulatorOrigin}/${r}/${this.region}/${t}`:this.customDomain!==null?`${this.customDomain}/${t}`:`https://${this.region}-${r}.cloudfunctions.net/${t}`}}function ge(e,t,r){e.emulatorOrigin=`http://${t}:${r}`}function xe(e,t,r){return s=>Ne(e,t,s,{})}async function be(e,t,r){r["Content-Type"]="application/json";let s;try{s=await fetch(e,{method:"POST",body:JSON.stringify(t),headers:r})}catch{return{status:0,json:null}}let a=null;try{a=await s.json()}catch{}return{status:s.status,json:a}}function Ne(e,t,r,s){const a=e._url(t);return ye(e,a,r,s)}async function ye(e,t,r,s){r=j(r);const a={data:r},i={},o=await e.contextProvider.getContext(s.limitedUseAppCheckTokens);o.authToken&&(i.Authorization="Bearer "+o.authToken),o.messagingToken&&(i["Firebase-Instance-ID-Token"]=o.messagingToken),o.appCheckToken!==null&&(i["X-Firebase-AppCheck"]=o.appCheckToken);const d=s.timeout||7e4,l=he(d),u=await Promise.race([be(t,a,i),l.promise,e.cancelAllRequests]);if(l.cancel(),!u)throw new b("cancelled","Firebase Functions instance was deleted.");const c=fe(u.status,u.json);if(c)throw c;if(!u.json)throw new b("internal","Response is not valid JSON object.");let h=u.json.data;if(typeof h>"u"&&(h=u.json.result),typeof h>"u")throw new b("internal","Response is missing data field.");return{data:v(h)}}const L="@firebase/functions",O="0.11.10";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ve="auth-internal",we="app-check-internal",Ee="messaging-internal";function Ae(e){const t=(r,{instanceIdentifier:s})=>{const a=r.getProvider("app").getImmediate(),i=r.getProvider(ve),o=r.getProvider(Ee),d=r.getProvider(we);return new pe(a,i,o,d,s)};X(new Y(I,t,"PUBLIC").setMultipleInstances(!0)),D(L,O,e),D(L,O,"esm2017")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function je(e=Z(),t=k){const s=W(S(e),I).getImmediate({identifier:t}),a=Q("functions");return a&&ke(s,...a),s}function ke(e,t,r){ge(S(e),t,r)}function U(e,t,r){return xe(S(e),t)}Ae();const Ce={apiKey:"AIzaSyC49xKJcVkH1suuANIrhqwgHMMkmoCRN5o",authDomain:"amigo-secreto-dcbcf.firebaseapp.com",projectId:"amigo-secreto-dcbcf",storageBucket:"amigo-secreto-dcbcf.firebasestorage.app",messagingSenderId:"307386382620",appId:"1:307386382620:web:bccf72182683ff4b6be2d9"},V=te(Ce);re(V);const B=je(V,"us-central1"),Te=U(B,"sendVerificationCode"),Se=U(B,"verifyCode");function Me(){const e=G(),{id:t,email:r}=z(),[s,a]=f.useState(null),[i,o]=f.useState(null),[d,l]=f.useState(!0),[u,c]=f.useState(null),[h,y]=f.useState(!1),[w,m]=f.useState(!1);f.useEffect(()=>{(async()=>{if(!t||!r){c("URL inválida"),l(!1);return}try{const x=await J.createRepository().findById(t);if(!x){c("Sorteio não encontrado"),l(!1);return}if(!x.performed){c("O sorteio ainda não foi realizado"),l(!1);return}o(x),l(!1),await N(),m(!0)}catch(g){console.error("Erro ao carregar sorteio:",g),c("Falha ao carregar o sorteio"),l(!1)}})()},[t,r]);const N=async()=>{if(!(!t||!r))try{l(!0),(await Te({drawId:t,email:r})).data.success&&m(!0)}catch(p){console.error("Erro ao enviar código:",p),c(p.message||"Falha ao enviar código de verificação")}finally{l(!1)}},$=async p=>{if(!(!t||!r||!i))try{l(!0),(await Se({drawId:t,email:r,code:p})).data.verified&&(y(!0),await H())}catch(g){const x=g.message||"Falha ao verificar código";throw new Error(x)}finally{l(!1)}},H=async()=>{if(!i||!r)return;const p=i.participants.find(E=>E.email===r);if(!p){c("Participante não encontrado");return}const g=i.result[r];if(!g){c("Resultado não encontrado");return}const x=i.participants.find(E=>E.email===g);if(!x){c("Amigo secreto não encontrado");return}a({giver:p,receiver:x})};return d?n.jsx("div",{className:"min-h-screen w-full bg-gradient-to-br from-[#0A0F1E] via-[#121A3A] to-[#0A0F1E] flex items-center justify-center",children:n.jsx("div",{className:"text-white",children:"Carregando..."})}):u?n.jsx("div",{className:"min-h-screen w-full bg-gradient-to-br from-[#0A0F1E] via-[#121A3A] to-[#0A0F1E] p-8",children:n.jsx("div",{className:"max-w-md mx-auto",children:n.jsx(C,{className:"bg-[#151B30]/50 border border-[#252B45] shadow-xl backdrop-blur-sm",children:n.jsxs("div",{className:"p-6 text-center",children:[n.jsx("h2",{className:"text-2xl font-bold text-white mb-4",children:"Erro"}),n.jsx("p",{className:"text-gray-400 mb-6",children:u}),n.jsxs(A,{onClick:()=>e("/"),className:"flex items-center gap-2 mx-auto",children:[n.jsx(ne,{className:"h-4 w-4"}),"Voltar para a página inicial"]})]})})})}):!h&&r?n.jsx("div",{className:"min-h-screen w-full bg-gradient-to-br from-[#0A0F1E] via-[#121A3A] to-[#0A0F1E] p-8",children:n.jsx("div",{className:"max-w-md mx-auto",children:n.jsx(ce,{email:r,isCodeSent:w,onVerify:$,onResend:N})})}):!s||!i?null:n.jsx("div",{className:"min-h-screen w-full bg-gradient-to-br from-[#0A0F1E] via-[#121A3A] to-[#0A0F1E] p-8",children:n.jsx("div",{className:"max-w-2xl mx-auto",children:n.jsx(oe,{email:s.giver.email,drawName:i.name,secretFriend:s.receiver.name})})})}export{Me as default};
