## 🔹 Teste rápido do front com serviços 1 e 3

1. **Preparar os serviços**

   * Serviço 1 (Express + Prisma) já configurado e rodando.
   * Serviço 3 (FastAPI + SQLAlchemy) com o `dev.db` copiado do serviço 1 e `database.py` apontando para ele.

     * Ex.: `sqlite:///./dev.db` no `SQLALCHEMY_DATABASE_URL`.

2. **Subir os serviços**

   * Serviço 1:

     ```bash
     cd caminho/servico1-api-tarefas
     npm install
     npm run dev  # ou npm start, conforme configurado
     ```
   * Serviço 3:

     ```bash
     cd caminho/servico_03_analisador
     pip install -r requirements.txt
     uvicorn main:app --reload --port 8003
     ```

3. **Configurar o front**

   * `api.js` deve ter algo assim:

     ```js
     export const API_CONFIG = {
         EXPRESS: "http://localhost:8001",
         FASTAPI: "http://localhost:8003"
     };
     ```

     > Substitua `8001` e `8003` pelas portas corretas se forem diferentes.

4. **Abrir o front**

   * Abra `index.html` ou a página principal no Live Server ou browser.
   * Testar fluxo completo:

     * Cadastro de usuário novo
     * Login
     * Criar tarefas
     * Marcar tarefas concluídas
     * Conferir se estatísticas estão atualizando (`total` e `concluidas`)
     * Criar usuário novo e verificar que não vê tarefas do outro usuário

5. **Verificar**

   * `X` → não implementado, apenas console.warn
   * `✔` → marca/desmarca concluída
   * Estatísticas → puxando **do serviço 3**, por usuário correto

Se tudo funcionar, integração com stats reais está validada.

---

## 🔹 README.md atualizado (complementando)

````markdown
# Multi API TodoList - Instruções de Instalação e Teste

## Serviço 1 – API de Tarefas (Prisma)
https://github.com/lauraserbeto/servico1-api-tarefas

### Instalação e execução
```bash
cd caminho/servico1-api-tarefas
npm install
npm run dev
````

* Porta padrão: 8001
* Funcionalidades:

  * Cadastro de usuário
  * Login
  * CRUD de tarefas
  * Autenticação e autorização

---

## Serviço 2 – Gerador de Logs (Eloquent)

[https://github.com/VitorMelo1/multi-api-to-do-list](https://github.com/VitorMelo1/multi-api-to-do-list)

### Instalação e execução

> Seção em desenvolvimento

---

## Serviço 3 – Analisador de Tarefas (SQLAlchemy)

[https://github.com/Niceas-Martins/servico_03_Analisador-Contador_SQLAlchemy](https://github.com/Niceas-Martins/servico_03_Analisador-Contador_SQLAlchemy)

### Instalação e execução

1. Clone a branch específica que contém integração com o front:

```bash
git clone -b minha-branch https://github.com/Niceas-Martins/servico_03_Analisador-Contador_SQLAlchemy.git
```

2. Instale dependências:

```bash
cd servico_03_analisador
pip install -r requirements.txt
```

3. Certifique-se de ter o `dev.db` do serviço 1 na raiz do projeto:

```
servico_03_analisador/dev.db
```

4. Ajuste `database.py`:

```python
SQLALCHEMY_DATABASE_URL = "sqlite:///./dev.db"
```

5. Rode o serviço:

```bash
uvicorn main:app --reload --port 8003
```

* Porta padrão: 8003
* Funcionalidades:

  * Fornece estatísticas por usuário (`total`, `concluidas`, `pendentes`)
  * Protegido por userId via token no front

---

## Frontend

### Configuração do `api.js`

```js
export const API_CONFIG = {
    EXPRESS: "http://localhost:8001",
    FASTAPI: "http://localhost:8003"
};
```

### Teste do front

1. Abra o front no browser (Live Server ou diretamente via arquivo HTML)
2. Cadastre um usuário e faça login
3. Crie tarefas e marque como concluídas
4. Confira se estatísticas estão atualizando corretamente
5. Crie outro usuário e verifique que as tarefas são isoladas por usuário


