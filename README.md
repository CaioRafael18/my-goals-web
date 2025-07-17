# 🎯 My Goals Web - Frontend

Uma aplicação web moderna e responsiva para gerenciamento de metas pessoais com sistema de gamificação integrado.

## 📋 Sobre o Projeto

O My Goals Web é a interface frontend de um sistema completo de gerenciamento de metas pessoais desenvolvido para demonstrar proficiência em tecnologias modernas do ecossistema React. A aplicação implementa padrões de desenvolvimento avançados, arquitetura escalável e experiência do usuário otimizada.

## 🚀 Desenvolvido durante o NLW - Rocketseat

Este projeto foi desenvolvido(com pequenas mudanças) durante o Next Level Week (NLW) da Rocketseat, um evento intensivo de programação focado em tecnologias modernas. O projeto demonstra a aplicação prática de conceitos avançados de React, TypeScript e desenvolvimento frontend contemporâneo.

### 🎯 Objetivos Técnicos do Projeto

- **Demonstrar domínio do ecossistema React moderno** com React 19 e TypeScript
- **Implementar arquitetura escalável** com separação clara de responsabilidades
- **Aplicar padrões de design system** usando shadcn/ui para consistência visual
- **Integrar autenticação OAuth** com GitHub para experiência de login moderna
- **Desenvolver sistema de gamificação** com lógica de níveis e progressão
- **Criar interface responsiva** seguindo princípios de UX/UI contemporâneos

## ✨ Principais Funcionalidades

- **🔐 Autenticação com GitHub** - Login seguro e prático usando sua conta GitHub
- **📝 Gerenciamento de Metas** - Criar e organizar metas pessoais
- **✅ Controle de Progresso** - Marcar metas como concluídas e acompanhar o progresso
- **📊 Barras de Progresso** - Visualização clara do andamento das metas
- **🎮 Sistema de Gamificação** - Ganhe experiência e suba de nível conforme completa suas metas
- **📱 Design Responsivo** - Interface otimizada para desktop e dispositivos móveis
- **🌙 Interface Moderna** - Design limpo e intuitivo com componentes acessíveis

## 🚀 Tecnologias Utilizadas

### Core

- **React 19** - Biblioteca principal para construção da interface
- **TypeScript** - Tipagem estática para maior segurança e produtividade
- **Vite** - Build tool moderna e rápida
- **React Router DOM** - Roteamento client-side

### Estilização & Design System

- **Tailwind CSS 4** - Framework CSS utilitário de nova geração
- **shadcn/ui** - Sistema de componentes baseado em Radix UI com design tokens
- **Lucide React** - Biblioteca de ícones SVG otimizados e consistentes

### Gerenciamento de Estado & Dados

- **TanStack Query (React Query)** - Gerenciamento de estado servidor, cache e sincronização
- **React Hook Form** - Gerenciamento performático de formulários com validação
- **Zod** - Validação de esquemas TypeScript-first com inferência de tipos
- **Universal Cookie** - Gerenciamento de cookies para persistência de sessão

### Ferramentas de Desenvolvimento & Build

- **Biome** - Linter e formatter rápido alternativo ao ESLint/Prettier
- **Orval** - Geração automática de clientes API TypeScript baseado em OpenAPI
- **Vite** - Build tool moderna com HMR otimizado
- **pnpm** - Gerenciador de pacotes eficiente com workspace support
- **TypeScript ~5.8** - Tipagem estática avançada com as últimas features

## 📁 Estrutura do Projeto

```
src/
├── assets/              # Recursos estáticos (imagens, ícones SVG)
├── components/          # Componentes reutilizáveis da aplicação
│   └── ui/             # Componentes do design system (shadcn/ui)
├── http/               # Configuração de clientes HTTP e interceptors
│   └── generated/      # Código gerado automaticamente pelo Orval
├── lib/                # Utilitários, configurações e helpers
├── pages/              # Páginas/rotas da aplicação
└── utils/              # Funções utilitárias puras
```

## ⚙️ Pré-requisitos

- Node.js 18+
- pnpm (recomendado)

## 🔧 Instalação e Execução

1. **Clone o repositório**

```bash
git clone <url-do-repositorio>
```

2. **Instale as dependências**

```bash
pnpm install
```

3. **Configure as variáveis de ambiente**

```bash
cp .env.example .env
```

4. **Execute o projeto em modo desenvolvimento**

```bash
pnpm dev
```

A aplicação estará disponível em `http://localhost:3000`

## 📦 Scripts Disponíveis

- `pnpm dev` - Inicia o servidor de desenvolvimento
- `pnpm build` - Gera o build de produção
- `pnpm generate:orval` - Gera os clientes API baseados no OpenAPI (necessário baixar o repositorio do backend: https://github.com/CaioRafael18/my-goals-server)

## 🏗️ Build para Produção

```bash
pnpm build
```

Os arquivos de produção serão gerados na pasta `dist/`

## 📝 Destaques Técnicos

### 🎨 Design System com shadcn/ui

- **Componentes Customizáveis**: Implementação de design system robusto baseado em Radix UI
- **Tokens de Design**: Uso consistente de cores, espaçamentos e tipografia
- **Responsividade**: Design responsivo para desktop e dispositivos móveis

### 🔧 Desenvolvimento Moderno

- **TypeScript Strict**: Configuração rigorosa para maximum type safety
- **Geração Automática**: Clientes API gerados automaticamente com Orval
- **Code Quality**: Linting e formatação automática com Biome

### 🚀 Performance & Otimização

- **Caching Inteligente**: Estratégias de cache com TanStack Query
- **Build Otimizado**: Vite para builds extremamente rápidos

### 🔒 Segurança & Autenticação

- **OAuth 2.0**: Integração segura com GitHub
- **Type-safe APIs**: Validação de dados com Zod
- **Cookie Management**: Gerenciamento seguro de sessões

## 🔗 Links Relacionados

- [Documentação do React 19](https://react.dev/)
- [Documentação do shadcn/ui](https://ui.shadcn.com/)
- [Documentação do Tailwind CSS](https://tailwindcss.com/)
- [Documentação do TanStack Query](https://tanstack.com/query/)
- [Documentação do Vite](https://vitejs.dev/)
- [Documentação do TypeScript](https://www.typescriptlang.org/)

---

**💼 Projeto desenvolvido como showcase de habilidades em desenvolvimento frontend moderno**

Demonstra proficiência em: React 19, TypeScript, shadcn/ui, TanStack Query, Vite, e padrões de desenvolvimento contemporâneos.
