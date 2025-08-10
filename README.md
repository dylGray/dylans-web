
# Dylan's Web

A modern, personal portfolio website built with React, TypeScript, Vite, and Tailwind CSS.

## Features

- ⚡️ Fast development and production builds with Vite
- 🎨 UI built with Tailwind CSS
- 💻 Fully responsive and mobile-friendly
- 🧩 Modular React components (Header, Footer, About, Projects, Hero, FloatingShapes)
- 🤖 Local LLM chat powered by Ollama and Mistral-7B

## Local LLM Chat Integration

This project integrates a local Large Language Model (LLM) chat feature using [Ollama](https://ollama.com/) and the Mistral-7B model. All LLM processing happens locally on your machine; no data leaves your computer.

This is currently under development, in the process of setting up a cloud VM to support the chat feature at all times.

### How it works

1. **Ollama LLM API Server**
	- Ollama runs a local API server on your machine at `http://localhost:11434`.
	- The Mistral-7B model is loaded and served by Ollama. Start it with:
	  ```bash
	  ollama run mistral
	  ```
	- The API endpoint for chat is `POST http://localhost:11434/api/chat`.

2. **Frontend Chat UI**
	- The React app includes a chat page (`/chat`) that lets users interact with the LLM.
	- When you send a message, the frontend makes a POST request to the Ollama API, sending the full chat history.
	- The API streams back the assistant's response in real time, which is displayed in the chat UI.

3. **Local-Only**
	- All LLM inference and data processing happens on your computer. The React app and Ollama server communicate via `localhost`.
	- No messages or data are sent to any external server by default.

---
