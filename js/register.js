import { API_CONFIG } from "./api.js";

const form = document.getElementById("registerForm");

form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;

    try {
        const res = await fetch(`${API_CONFIG.EXPRESS}/register`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ nome, email, senha })
        });

        const data = await res.json();

        if (res.status === 201) {
            alert("Cadastro realizado com sucesso!");
            window.location.href = "login.html";
        } else {
            alert(data.erro || "Erro ao cadastrar");
        }
    } catch (err) {
        console.error(err);
        alert("Erro ao conectar com o servidor");
    }
});