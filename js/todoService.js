import { API_CONFIG } from "./api.js";

function getToken() {
    return localStorage.getItem("token");
}

function headers() {
    return {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${getToken()}`
    };
}

// Adapter: backend → frontend
function mapTodo(t) {
    return {
        id: t.id,
        title: t.titulo,
        completed: t.concluida
    };
}

export async function getTodos() {
    const res = await fetch(`${API_CONFIG.EXPRESS}/tarefas`, {
        headers: headers()
    });

    const data = await res.json();
    return data.map(mapTodo);
}

export async function createTodo(data) {
    const res = await fetch(`${API_CONFIG.EXPRESS}/tarefas`, {
        method: "POST",
        headers: headers(),
        body: JSON.stringify({
            titulo: data.title
        })
    });

    return mapTodo(await res.json());
}

export async function toggleTodo(id) {
    const todos = await getTodos();
    const todo = todos.find(t => t.id === id);

    const res = await fetch(`${API_CONFIG.EXPRESS}/tarefas/${id}`, {
        method: "PUT",
        headers: headers(),
        body: JSON.stringify({
            concluida: !todo.completed
        })
    });

    return mapTodo(await res.json());
}

export async function deleteTodo(id) {    
    console.warn("Delete ainda não implementado no backend");
}

export async function getStats() {
    const token = getToken();

    // pegar userId do token (segurança complementar ao backend)
    const payload = JSON.parse(atob(token.split('.')[1]));
    const userId = payload.id;

    const res = await fetch(`${API_CONFIG.FASTAPI}/estatisticas/${userId}`, {
        headers: headers()
    });

    return res.json();
}

