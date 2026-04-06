import { API_CONFIG } from "./api.js";

const form = document.getElementById("loginForm");

form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;

    try {
        const res = await fetch(`${API_CONFIG.EXPRESS}/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ email, senha })
        });

        const data = await res.json();

        if (data.token) {
            localStorage.setItem("token", data.token);
            window.location.href = "index.html";
        } else {
            alert("Credenciais inválidas");
        }
    } catch (err) {
        console.error(err);
        alert("Erro ao conectar com o servidor");
    }
});