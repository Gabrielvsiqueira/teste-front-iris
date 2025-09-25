# 🚀 Teste Front-end — Sistema Iris

Este projeto tem como objetivo demonstrar a criação de uma aplicação **front-end** para gerenciamento de usuários, com integração a uma **API REST fake** para operações de **CRUD (Create, Read, Update e Delete)**.  

A aplicação foi desenvolvida em **Angular**, utilizando **Angular Material** para a interface, e consumindo uma API simulada com **JSON-server**.  
O deploy foi realizado no **Vercel** (frontend) e no **Render** (backend).

---

## 🛠️ Tecnologias Utilizadas

- [Angular](https://angular.io/) — Framework front-end  
- [Angular Material](https://material.angular.dev/) — Biblioteca de componentes UI  
- [TypeScript](https://www.typescriptlang.org/) — Linguagem base do Angular  
- [JSON-server](https://github.com/typicode/json-server) — API fake REST  
- [Vercel](https://vercel.com/) — Deploy do front-end  
- [Render](https://render.com/) — Deploy do backend  

---

## ✨ Funcionalidades

- ✅ Listagem de usuários  
- ✅ Criação de novos usuários  
- ✅ Edição de usuários existentes  
- ✅ Remoção de usuários  
- ✅ Integração com API fake (JSON-server)  
- ✅ Ambientes configurados (desenvolvimento e produção)  
- ✅ Deploy automático do front-end (Vercel)  
- ✅ Backend hospedado no Render para consumo público  

---

## 🔧 Melhorias Extras

- **Validações adicionais no cadastro de usuários:**  
  - Impede salvar nomes inválidos ou apenas com espaços em branco (validação via Regex).  
- **Tabela dinâmica com paginação:**  
  - Implementado componente **MatTableDataSource** com paginação, permitindo melhor **navegabilidade** e controle da visualização de registros.

---

## 📦 Instalação e Execução Local

### 1️⃣ Clone o repositório principal (frontend):

```bash
git clone https://github.com/Gabrielvsiqueira/teste-front-iris.git
cd teste-front-iris
```

### 2️⃣ Instale as dependências:

```bash
npm install
```

### 3️⃣ Inicie o servidor de desenvolvimento:

```bash
ng serve
```

Acesse no navegador:  
👉 http://localhost:4200  

---

### 🔹 Backend (JSON-server)

O backend foi configurado em um repositório separado: **json-server-api**

```bash
git clone https://github.com/Gabrielvsiqueira/json-server-api.git
cd json-server-api
npm install
npm start
```

O servidor estará disponível em:  
👉 http://localhost:3000/users  

---

## 🌍 Produção

- 🌐 **Frontend (Angular):** [https://test-iris.vercel.app](https://test-iris.vercel.app)  
- 🌐 **Backend (JSON-server):** [https://json-server-api-kl3l.onrender.com/users](https://json-server-api-kl3l.onrender.com/users)  

Na aplicação em produção, o **Angular** consome automaticamente a API hospedada no **Render**.  

---

## 📌 Observações

- O backend está hospedado no **Render** utilizando o plano gratuito.  
- Isso significa que, quando a API não é acessada por um período de tempo, o servidor "hiberna".   
-  Por esse motivo, ao acessar a aplicação em produção, a **primeira requisição pode demorar alguns segundos** para que o Render inicie novamente o serviço.  
-  Após a primeira resposta, o desempenho volta ao normal. 🚀

Este projeto foi desenvolvido como **teste prático de front-end**, com foco em:  
- Integração com API REST  
- Deploy em ambientes reais (Vercel + Render)  
