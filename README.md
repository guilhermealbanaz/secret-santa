# Amigo Secreto - Aplicação Web

Uma aplicação web moderna para organizar sorteios de amigo secreto de forma fácil e segura, construída com React, TypeScript e Firebase.

## 🚀 Tecnologias

- **Frontend:**
  - React + Vite
  - TypeScript
  - TailwindCSS
  - Lucide Icons
  - React Router DOM

- **Backend/Database:**
  - Firebase/Firestore

## 🏗️ Arquitetura

O projeto segue os princípios da Arquitetura Limpa (Clean Architecture) e DDD (Domain-Driven Design):

src/
├── application/ # Casos de uso e regras de aplicação
├── domain/ # Regras de negócio e entidades
├── infrastructure/ # Implementações externas (Firebase, etc)
└── presentation/ # Interface do usuário (Components, Pages)

## ✨ Funcionalidades

- **Criação de Sorteio**
  - Geração de ID único
  - Configuração de nome e senha
  - Interface intuitiva

- **Gerenciamento de Participantes**
  - Adicionar/remover participantes
  - Validação de emails
  - Lista de participantes em tempo real

- **Realização do Sorteio**
  - Algoritmo que garante distribuição adequada
  - Verificação de regras (mínimo 4 participantes)
  - Proteção contra auto-sorteio

- **Visualização de Resultados**
  - Links individuais para cada participante
  - Proteção por senha
  - Interface amigável para revelar o amigo secreto

## 🔧 Configuração

1. Clone o repositório
2. Instale as dependências:

```bash
npm install
```

3. Configure as variáveis de ambiente no arquivo `.env`:
```env
VITE_FIREBASE_API_KEY=sua_api_key
VITE_FIREBASE_AUTH_DOMAIN=seu_auth_domain
VITE_FIREBASE_PROJECT_ID=seu_project_id
VITE_FIREBASE_STORAGE_BUCKET=seu_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=seu_sender_id
VITE_FIREBASE_APP_ID=seu_app_id
```

4. Execute o projeto:
```bash
npm run dev
```

## 📱 Páginas

- **HomePage (`/`)**: Página inicial com botão para criar novo sorteio
- **DrawPage (`/draw/:id`)**: Configuração inicial do sorteio
- **ParticipantsPage (`/draw/:id/participants`)**: Gerenciamento de participantes
- **ParticipantRegistrationPage (`/draw/:id/register`)**: Registro de novos participantes
- **DrawResultPage (`/draw/:id/result`)**: Visualização dos resultados (admin)
- **ViewResultPage (`/draw/:id/result/:email`)**: Visualização individual do amigo secreto

```
