"use strict";
document.addEventListener("DOMContentLoaded", () => {
    // Selecionar o formulário com tipagem explícita
    const form = document.querySelector("#form-empresa-conveniada");
    // Criar uma área para exibir os resultados
    const outputDiv = document.createElement("div");
    outputDiv.id = "output"; // Definindo um id para facilitar a estilização
    document.body.appendChild(outputDiv);
    // Verificar se o formulário foi encontrado
    if (form) {
        form.addEventListener("submit", (event) => {
            event.preventDefault();
            const formData = new FormData(form);
            const data = {};
            // Capturar os dados do formulário
            formData.forEach((value, key) => {
                data[key] = value;
            });
            console.log("Dados capturados:", data); // Debug
            // Renderizar os dados capturados na tela
            outputDiv.innerHTML = `
        <h3>Dados Cadastrados:</h3>
        <ul>
          ${Object.entries(data)
                .map(([key, value]) => `<li><strong>${key}:</strong> ${value}</li>`)
                .join("")}
        </ul>
      `;
            alert("Cadastro realizado com sucesso!");
            form.reset(); // Limpar o formulário
        });
    }
    else {
        console.error("Formulário não encontrado.");
    }
});
//Cadastro para empresas solicitantes
document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("#form-empresa-solicitante");
    const outputDiv = document.querySelector("#output");
    if (form && outputDiv) {
        form.addEventListener("submit", (event) => {
            event.preventDefault();
            const formData = new FormData(form);
            const data = {};
            formData.forEach((value, key) => {
                data[key] = value;
            });
            outputDiv.innerHTML = `
        <h3>Dados da Empresa Solicitante:</h3>
        <ul>
          ${Object.entries(data)
                .map(([key, value]) => `<li><strong>${key}:</strong> ${value}</li>`)
                .join("")}
        </ul>
      `;
            alert("Empresa solicitante cadastrada com sucesso!");
            form.reset();
        });
    }
});
//Cadastro para pacientes
document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("#form-cadastro-paciente");
    const outputDiv = document.querySelector("#output");
    if (form && outputDiv) {
        form.addEventListener("submit", (event) => {
            event.preventDefault();
            const formData = new FormData(form);
            const data = {};
            formData.forEach((value, key) => {
                data[key] = value;
            });
            outputDiv.innerHTML = `
        <h3>Dados do Paciente:</h3>
        <ul>
          ${Object.entries(data)
                .map(([key, value]) => `<li><strong>${key}:</strong> ${value}</li>`)
                .join("")}
        </ul>
      `;
            alert("Paciente cadastrado com sucesso!");
            form.reset();
        });
    }
});
//Cadastro de agendamento de exames
document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("#form-agendamento-exames");
    const outputDiv = document.querySelector("#output");
    if (form && outputDiv) {
        form.addEventListener("submit", (event) => {
            event.preventDefault();
            const formData = new FormData(form);
            const data = {};
            formData.forEach((value, key) => {
                data[key] = value;
            });
            outputDiv.innerHTML = `
        <h3>Dados do Agendamento:</h3>
        <ul>
          ${Object.entries(data)
                .map(([key, value]) => `<li><strong>${key}:</strong> ${value}</li>`)
                .join("")}
        </ul>
      `;
            alert("Exame agendado com sucesso!");
            form.reset();
        });
    }
});
