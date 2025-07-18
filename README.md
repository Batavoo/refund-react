# Sistema de Reembolso (Refund)

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)

![Screenshot da Dashboard do sistema](src\assets\app1.png)
![Screenshot da Solicitação de reembolso](src\assets\app2.png)

## 📖 Sobre

Este é o frontend de uma aplicação web para gerenciamento de solicitações de reembolso. O sistema foi desenvolvido com React, Vite e TypeScript, e possui dois perfis de acesso distintos: **Funcionário** e **Gerente**.

## ✨ Funcionalidades

- **Autenticação:** Sistema de login e cadastro de usuários. A sessão é gerenciada via `Context API` e `localStorage`.
- **Perfis de Usuário:**
  - **Funcionário:** Pode criar novas solicitações de reembolso, preenchendo nome, categoria, valor e anexando um arquivo de comprovante.
  - **Gerente:** Possui um dashboard para visualizar, buscar e paginar todas as solicitações de reembolso feitas pelos funcionários. Pode também visualizar os detalhes de cada solicitação, incluindo o comprovante anexado.
- **Validação de Formulários:** Utilização da biblioteca `Zod` para garantir a integridade dos dados enviados nos formulários de cadastro, login e solicitação de reembolso.
- **Roteamento:** As rotas são protegidas e segmentadas de acordo com o perfil do usuário logado, utilizando `React Router`.
- **Comunicação com API:** Integração com um backend através do `axios` para todas as operações de dados.

## 🚀 Tecnologias Utilizadas

- **React 19**
- **Vite** como bundler e servidor de desenvolvimento
- **TypeScript** para tipagem estática
- **Tailwind CSS** para estilização
- **React Router** para gerenciamento de rotas
- **Axios** para requisições HTTP
- **Zod** para validação de esquemas e dados

## ⚙️ Como Executar

Para rodar este projeto localmente, siga os passos abaixo:

1.  **Clone o repositório**

    ```sh
    git clone <URL_DO_REPOSITORIO>
    cd web
    ```

2.  **Instale as dependências**

    ```sh
    npm install
    ```

3.  **Execute a aplicação**

    ```sh
    npm run dev
    ```

4.  **Acesse a aplicação**
    Abra seu navegador e acesse `http://localhost:5173` (ou a porta indicada no seu terminal).

**Nota:** A aplicação espera que o backend esteja rodando em `http://localhost:3333`. Você pode alterar a URL da API no arquivo [`src/services/api.ts`](src/services/api.ts).

## 📂 Estrutura do Projeto

O projeto está organizado da seguinte forma:

```
src/
├── assets/         # Imagens e ícones
├── components/     # Componentes React reutilizáveis
├── contexts/       # Context API (ex: AuthContext)
├── dtos/           # Tipos de transferência de dados (DTOs) da API
├── hooks/          # Hooks customizados (ex: useAuth)
├── pages/          # Componentes de página
├── routes/         # Configuração das rotas da aplicação
├── services/       # Configuração do Axios e comunicação com a API
└── utils/          # Funções utilitárias
```

## 📜 Scripts Disponíveis

No arquivo [`package.json`](package.json), você encontrará os seguintes scripts:

- `npm run dev`: Inicia o servidor de desenvolvimento com Vite.
- `npm run build`: Compila e otimiza a aplicação para produção.
- `npm run preview`: Inicia um servidor local para visualizar a build de produção.
