
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


