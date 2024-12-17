import{j as n,r as f,u as H,a as G}from"./index-CEMosnO2.js";import{C as S,b as _,c as M,a as U,B as k}from"./button-D6fCtkD2.js";import{D as z}from"./DrawFactory-BNq4bxIy.js";import{c as I}from"./createLucideIcon-v1pGnHji.js";import{I as J}from"./input-XhyiiiVj.js";import{M as q}from"./mail-C_YvcJ26.js";import{_ as K,C as X,r as L,a as Y,g as D,b as W,c as Q,F as Z,i as ee}from"./FirebaseService-CZ_nZK-v.js";import{A as te}from"./arrow-left-ClJEddVg.js";/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const re=I("Gift",[["rect",{x:"3",y:"8",width:"18",height:"4",rx:"1",key:"bkv52"}],["path",{d:"M12 8v13",key:"1c76mn"}],["path",{d:"M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7",key:"6wjy6b"}],["path",{d:"M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5",key:"1ihvrl"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ne=I("LoaderCircle",[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const se=I("Sparkles",[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]]),ae=({email:e,drawName:t,secretFriend:r})=>n.jsxs(S,{className:"bg-gradient-to-br from-[#151B30]/80 to-[#1F2B4B]/80 border border-[#252B45]/50 shadow-2xl backdrop-blur-md hover:shadow-blue-500/10 transition-all duration-300",children:[n.jsxs(_,{className:"relative",children:[n.jsx(se,{className:"absolute top-4 right-4 w-5 h-5 text-blue-400/60"}),n.jsx(M,{className:"text-2xl font-bold bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent",children:t})]}),n.jsx(U,{children:n.jsxs("div",{className:"space-y-8",children:[n.jsx("div",{className:"flex items-center justify-center",children:n.jsx("div",{className:"w-24 h-24 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full flex items-center justify-center transform hover:scale-105 transition-transform duration-300 group",children:n.jsx(re,{className:"w-12 h-12 text-blue-400 group-hover:text-blue-300 transition-colors duration-300"})})}),n.jsxs("div",{className:"text-center space-y-3",children:[n.jsx("p",{className:"text-gray-400 text-lg",children:"Seu amigo secreto é"}),n.jsx("h2",{className:"text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent animate-pulse",children:r})]}),n.jsxs("div",{className:"space-y-4 bg-blue-500/5 rounded-lg p-4 border border-blue-500/10",children:[n.jsx("p",{className:"text-sm text-blue-300/80 text-center",children:"🤫 Lembre-se: isso é um segredo! Guarde essa informação com carinho."}),n.jsxs("p",{className:"text-sm text-purple-300/80 text-center",children:["🎁 Prepare um presente especial que ",r," vai adorar!"]})]}),n.jsx("div",{className:"pt-6 border-t border-[#252B45]/50",children:n.jsxs("p",{className:"text-xs text-gray-500 text-center hover:text-gray-400 transition-colors duration-300",children:["Este resultado foi enviado para"," ",n.jsx("span",{className:"text-blue-400/80",children:e})]})})]})})]}),ie=({email:e,isCodeSent:t,onVerify:r,onResend:s})=>{const[a,i]=f.useState(""),[o,d]=f.useState(!1),[l,u]=f.useState(null),[c,h]=f.useState(0);f.useEffect(()=>{if(c>0){const m=setTimeout(()=>h(c-1),1e3);return()=>clearTimeout(m)}},[c]);const y=async m=>{m.preventDefault(),u(null),d(!0);try{await r(a)}catch(N){u(N instanceof Error?N.message:"Erro ao verificar código"),i("")}finally{d(!1)}},A=async()=>{u(null),d(!0);try{await s(),h(60),i("")}catch(m){u(m instanceof Error?m.message:"Erro ao reenviar código")}finally{d(!1)}};return n.jsxs(S,{className:"bg-[#151B30]/50 border border-[#252B45] shadow-xl backdrop-blur-sm",children:[n.jsx(_,{children:n.jsx(M,{className:"text-2xl font-bold text-white text-center",children:"Verificação de Segurança"})}),n.jsx(U,{children:n.jsxs("div",{className:"space-y-6",children:[n.jsx("div",{className:"flex items-center justify-center",children:n.jsx("div",{className:"w-16 h-16 bg-blue-500/10 rounded-full flex items-center justify-center",children:n.jsx(q,{className:"w-8 h-8 text-blue-400"})})}),n.jsxs("div",{className:"text-center space-y-2",children:[n.jsx("p",{className:"text-gray-300",children:"Enviamos um código de verificação para"}),n.jsx("p",{className:"text-white font-medium",children:e})]}),n.jsxs("form",{onSubmit:y,className:"space-y-4",children:[n.jsx("div",{className:"space-y-2",children:n.jsx(J,{type:"text",value:a,onChange:m=>i(m.target.value.replace(/\D/g,"").slice(0,6)),placeholder:"Digite o código de 6 dígitos",className:"text-center text-xl tracking-wider h-12",maxLength:6})}),l&&n.jsx("div",{className:"p-3 bg-red-500/10 border border-red-500/20 rounded-lg",children:n.jsx("p",{className:"text-red-500 text-sm text-center",children:l})}),n.jsxs("div",{className:"space-y-3",children:[n.jsx(k,{type:"submit",disabled:a.length!==6||o,className:"w-full h-11 bg-blue-600 hover:bg-blue-700 text-white font-medium transition-all duration-300",children:o?n.jsx(ne,{className:"h-5 w-5 animate-spin"}):"Verificar Código"}),n.jsx(k,{type:"button",variant:"ghost",disabled:c>0||o,onClick:A,className:"w-full h-11 text-gray-400 hover:text-white",children:c>0?`Aguarde ${c}s para reenviar`:"Reenviar código"})]})]})]})})]})};/**
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
 */const oe="type.googleapis.com/google.protobuf.Int64Value",ce="type.googleapis.com/google.protobuf.UInt64Value";function V(e,t){const r={};for(const s in e)e.hasOwnProperty(s)&&(r[s]=t(e[s]));return r}function C(e){if(e==null)return null;if(e instanceof Number&&(e=e.valueOf()),typeof e=="number"&&isFinite(e)||e===!0||e===!1||Object.prototype.toString.call(e)==="[object String]")return e;if(e instanceof Date)return e.toISOString();if(Array.isArray(e))return e.map(t=>C(t));if(typeof e=="function"||typeof e=="object")return V(e,t=>C(t));throw new Error("Data cannot be encoded in JSON: "+e)}function v(e){if(e==null)return e;if(e["@type"])switch(e["@type"]){case oe:case ce:{const t=Number(e.value);if(isNaN(t))throw new Error("Data cannot be decoded from JSON: "+e);return t}default:throw new Error("Data cannot be decoded from JSON: "+e)}return Array.isArray(e)?e.map(t=>v(t)):typeof e=="function"||typeof e=="object"?V(e,t=>v(t)):e}/**
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
 */const F="functions";/**
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
 */const O={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class b extends Z{constructor(t,r,s){super(`${F}/${t}`,r||""),this.details=s,Object.setPrototypeOf(this,b.prototype)}}function le(e){if(e>=200&&e<300)return"ok";switch(e){case 0:return"internal";case 400:return"invalid-argument";case 401:return"unauthenticated";case 403:return"permission-denied";case 404:return"not-found";case 409:return"aborted";case 429:return"resource-exhausted";case 499:return"cancelled";case 500:return"internal";case 501:return"unimplemented";case 503:return"unavailable";case 504:return"deadline-exceeded"}return"unknown"}function ue(e,t){let r=le(e),s=r,a;try{const i=t&&t.error;if(i){const o=i.status;if(typeof o=="string"){if(!O[o])return new b("internal","internal");r=O[o],s=o}const d=i.message;typeof d=="string"&&(s=d),a=i.details,a!==void 0&&(a=v(a))}}catch{}return r==="ok"?null:new b(r,s,a)}/**
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
 */class de{constructor(t,r,s){this.auth=null,this.messaging=null,this.appCheck=null,this.auth=t.getImmediate({optional:!0}),this.messaging=r.getImmediate({optional:!0}),this.auth||t.get().then(a=>this.auth=a,()=>{}),this.messaging||r.get().then(a=>this.messaging=a,()=>{}),this.appCheck||s.get().then(a=>this.appCheck=a,()=>{})}async getAuthToken(){if(this.auth)try{const t=await this.auth.getToken();return t==null?void 0:t.accessToken}catch{return}}async getMessagingToken(){if(!(!this.messaging||!("Notification"in self)||Notification.permission!=="granted"))try{return await this.messaging.getToken()}catch{return}}async getAppCheckToken(t){if(this.appCheck){const r=t?await this.appCheck.getLimitedUseToken():await this.appCheck.getToken();return r.error?null:r.token}return null}async getContext(t){const r=await this.getAuthToken(),s=await this.getMessagingToken(),a=await this.getAppCheckToken(t);return{authToken:r,messagingToken:s,appCheckToken:a}}}/**
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
 */const T="us-central1";function fe(e){let t=null;return{promise:new Promise((r,s)=>{t=setTimeout(()=>{s(new b("deadline-exceeded","deadline-exceeded"))},e)}),cancel:()=>{t&&clearTimeout(t)}}}class me{constructor(t,r,s,a,i=T){this.app=t,this.emulatorOrigin=null,this.contextProvider=new de(r,s,a),this.cancelAllRequests=new Promise(o=>{this.deleteService=()=>Promise.resolve(o())});try{const o=new URL(i);this.customDomain=o.origin+(o.pathname==="/"?"":o.pathname),this.region=T}catch{this.customDomain=null,this.region=i}}_delete(){return this.deleteService()}_url(t){const r=this.app.options.projectId;return this.emulatorOrigin!==null?`${this.emulatorOrigin}/${r}/${this.region}/${t}`:this.customDomain!==null?`${this.customDomain}/${t}`:`https://${this.region}-${r}.cloudfunctions.net/${t}`}}function he(e,t,r){e.emulatorOrigin=`http://${t}:${r}`}function pe(e,t,r){return s=>xe(e,t,s,r||{})}async function ge(e,t,r){r["Content-Type"]="application/json";let s;try{s=await fetch(e,{method:"POST",body:JSON.stringify(t),headers:r})}catch{return{status:0,json:null}}let a=null;try{a=await s.json()}catch{}return{status:s.status,json:a}}function xe(e,t,r,s){const a=e._url(t);return be(e,a,r,s)}async function be(e,t,r,s){r=C(r);const a={data:r},i={},o=await e.contextProvider.getContext(s.limitedUseAppCheckTokens);o.authToken&&(i.Authorization="Bearer "+o.authToken),o.messagingToken&&(i["Firebase-Instance-ID-Token"]=o.messagingToken),o.appCheckToken!==null&&(i["X-Firebase-AppCheck"]=o.appCheckToken);const d=s.timeout||7e4,l=fe(d),u=await Promise.race([ge(t,a,i),l.promise,e.cancelAllRequests]);if(l.cancel(),!u)throw new b("cancelled","Firebase Functions instance was deleted.");const c=ue(u.status,u.json);if(c)throw c;if(!u.json)throw new b("internal","Response is not valid JSON object.");let h=u.json.data;if(typeof h>"u"&&(h=u.json.result),typeof h>"u")throw new b("internal","Response is missing data field.");return{data:v(h)}}const P="@firebase/functions",R="0.11.10";/**
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
 */const Ne="auth-internal",ye="app-check-internal",ve="messaging-internal";function we(e){const t=(r,{instanceIdentifier:s})=>{const a=r.getProvider("app").getImmediate(),i=r.getProvider(Ne),o=r.getProvider(ve),d=r.getProvider(ye);return new me(a,i,o,d,s)};K(new X(F,t,"PUBLIC").setMultipleInstances(!0)),L(P,R,e),L(P,R,"esm2017")}/**
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
 */function Ee(e=Q(),t=T){const s=Y(D(e),F).getImmediate({identifier:t}),a=W("functions");return a&&Ae(s,...a),s}function Ae(e,t,r){he(D(e),t,r)}function w(e,t,r){return pe(D(e),t,r)}we();const je={apiKey:"AIzaSyC49xKJcVkH1suuANIrhqwgHMMkmoCRN5o",authDomain:"amigo-secreto-dcbcf.firebaseapp.com",projectId:"amigo-secreto-dcbcf",storageBucket:"amigo-secreto-dcbcf.firebasestorage.app",messagingSenderId:"307386382620",appId:"1:307386382620:web:bccf72182683ff4b6be2d9"},ke=ee(je),E=Ee(ke,"us-central1");w(E,"sendVerificationCode",{timeout:6e4});w(E,"verifyCode",{timeout:6e4});function Pe(){const e=H(),{id:t,email:r}=G(),[s,a]=f.useState(null),[i,o]=f.useState(null),[d,l]=f.useState(!0),[u,c]=f.useState(null),[h,y]=f.useState(!1),[A,m]=f.useState(!1);f.useEffect(()=>{(async()=>{if(!t||!r){c("URL inválida"),l(!1);return}try{const g=await z.createRepository().findById(t);if(!g){c("Sorteio não encontrado"),l(!1);return}if(!g.performed){c("O sorteio ainda não foi realizado"),l(!1);return}o(g),l(!1),await N(),m(!0)}catch(x){console.error("Erro ao carregar sorteio:",x),c("Falha ao carregar o sorteio"),l(!1)}})()},[t,r]);const N=async()=>{if(!(!t||!r))try{l(!0),await w(E,"sendVerificationCode")({drawId:t,email:r}),m(!0)}catch(p){console.error("Erro ao enviar código:",p),c(p.message||"Falha ao enviar código de verificação")}finally{l(!1)}},B=async p=>{if(!(!t||!r||!i))try{l(!0),(await w(E,"verifyCode")({drawId:t,email:r,code:p})).data.verified&&(y(!0),await $())}catch(x){const g=x.message||"Falha ao verificar código";throw new Error(g)}finally{l(!1)}},$=async()=>{if(!i||!r)return;const p=i.participants.find(j=>j.email===r);if(!p){c("Participante não encontrado");return}const x=i.result[r];if(!x){c("Resultado não encontrado");return}const g=i.participants.find(j=>j.email===x);if(!g){c("Amigo secreto não encontrado");return}a({giver:p,receiver:g})};return d?n.jsx("div",{className:"min-h-screen w-full bg-gradient-to-br from-[#0A0F1E] via-[#121A3A] to-[#0A0F1E] flex items-center justify-center",children:n.jsx("div",{className:"text-white",children:"Carregando..."})}):u?n.jsx("div",{className:"min-h-screen w-full bg-gradient-to-br from-[#0A0F1E] via-[#121A3A] to-[#0A0F1E] p-8",children:n.jsx("div",{className:"max-w-md mx-auto",children:n.jsx(S,{className:"bg-[#151B30]/50 border border-[#252B45] shadow-xl backdrop-blur-sm",children:n.jsxs("div",{className:"p-6 text-center",children:[n.jsx("h2",{className:"text-2xl font-bold text-white mb-4",children:"Erro"}),n.jsx("p",{className:"text-gray-400 mb-6",children:u}),n.jsxs(k,{onClick:()=>e("/"),className:"flex items-center gap-2 mx-auto",children:[n.jsx(te,{className:"h-4 w-4"}),"Voltar para a página inicial"]})]})})})}):!h&&r?n.jsx("div",{className:"min-h-screen w-full bg-gradient-to-br from-[#0A0F1E] via-[#121A3A] to-[#0A0F1E] p-8",children:n.jsx("div",{className:"max-w-md mx-auto",children:n.jsx(ie,{email:r,isCodeSent:A,onVerify:B,onResend:N})})}):!s||!i?null:n.jsx("div",{className:"min-h-screen w-full bg-gradient-to-br from-[#0A0F1E] via-[#121A3A] to-[#0A0F1E] p-8",children:n.jsx("div",{className:"max-w-2xl mx-auto",children:n.jsx(ae,{email:s.giver.email,drawName:i.name,secretFriend:s.receiver.name})})})}export{Pe as default};
