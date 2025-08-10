
# Dylan's Web

A modern, personal portfolio website built with React, TypeScript, Vite, and Tailwind CSS.

## Features

- ⚡️ Fast development and production builds with Vite
- 🎨 UI built with Tailwind CSS
- 💻 Fully responsive and mobile-friendly
- 🧩 Modular React components
- 🤖 Local LLM chat powered by Ollama and Mistral-7B (in development)

## Local LLM Chat Integration

This project integrates a local Large Language Model (LLM) chat feature using [Ollama](https://ollama.com/) and the Mistral-7B model. All LLM processing happens locally on your machine; no data leaves your computer.

This is currently under development, in the process of setting up a cloud VM to support the chat feature at all times.

### How it works

**Ollama LLM API Server**
- Ollama runs a local API server on your machine at `http://localhost:11434`.
- The Mistral-7B model is loaded and served by Ollama. Start it with:
	```bash
	ollama run mistral
	```
- The API endpoint for chat is `POST http://localhost:11434/api/chat`.
---
