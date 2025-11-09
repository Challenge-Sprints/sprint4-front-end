# 🏥 Portal do Paciente — Sistema de Agendamento de Consultas

## 📖 Sobre o Projeto
Este sistema foi desenvolvido para facilitar o **agendamento de consultas médicas** no Hospital das Clínicas e no IMREA.  
O portal oferece funcionalidades como:
- Login de usuários
- Agendamento de consultas
- Histórico de consultas
- Integração com backend Java
- Interface moderna e responsiva com **React + TailwindCSS**

---

## 🚀 Tecnologias Utilizadas
- **Frontend:** React, TypeScript, TailwindCSS  
- **Backend:** Java (Spring Boot)  
- **Armazenamento:** LocalStorage / SessionStorage  
- **Controle de versão:** Git + GitHub  
- **Ferramentas de apoio:** Node.js, Vite  

---

## 👨‍💻 Integrantes do Grupo
- **Gabriel Henrique Souza Gonçalves** — RM: 563732 — [GitHub](https://github.com/gabrielhensg)  
- **José Ricardo Pereira Iannuzzi** — RM: 564112 — [GitHub](https://github.com/jr-iannuzzi)  
- **Eduardo Augusto de Oliveira Souza** — RM: 565269 — [GitHub](https://github.com/Edu-Ardo18)  



## 🎨 Ícones Utilizados
- Ícones do **Heroicons** (Tailwind)  
- Ícones de status de consultas:  
  - ✅ Confirmada  
  - ⚠️ Pendente  
  - ❌ Cancelada  

---

## 📂 Estrutura de Pastas

```plaintext
📦 projeto-sprint4
 ┣ 📂 src
 ┃ ┣ 📂 pages
 ┃ ┃ ┣ 📜 Home.tsx
 ┃ ┃ ┣ 📜 Login.tsx
 ┃ ┃ ┣ 📜 Consultas.tsx
 ┃ ┃ ┣ 📜 Agendamento.tsx
 ┃ ┃ ┗ 📜 QuemSomos.tsx
 ┃ ┣ 📂 images
 ┃ ┃ ┣ 📜 gabriel1.jpeg
 ┃ ┃ ┣ 📜 jose.jpeg
 ┃ ┃ ┣ 📜 dudu.jpg
 ┃ ┃ ┗ 📜 login-banner.jpg
 ┃ ┣ 📜 main.tsx
 ┃ ┗ 📜 App.tsx
 ┣ 📜 package.json
 ┣ 📜 vite.config.ts
 ┗ 📜 README.md

## 🔗 Links Importantes
- **Deploy no Vercel:** [Portal do Paciente Online](https://sprint4-front-end-eight.vercel.app/)  
- **Repositório GitHub:** [Clique aqui](https://github.com/seu-repositorio)  
- **Vídeo no YouTube:** [Clique aqui]([https://youtube.com/seu-video](https://youtu.be/Od7CeVIBObU))  

---

## ⚙️ Estratégia da API
Nosso sistema está preparado para consumir a **API real** do backend Java.  

No entanto, caso a API esteja fora do ar, o frontend continua chamando os endpoints normalmente e, ao mesmo tempo, utiliza **dados simulados** para preencher as tabelas e listas.  
