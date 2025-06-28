## 🖼️ Imaginator

**Imaginator** is an AI-powered user interface that transforms imagination into creation. Whether you start with a simple idea or an uploaded image, Imaginator helps you craft detailed and expressive image generation prompts effortlessly.

Built for creatives, developers, and AI enthusiasts alike, Imaginator goes beyond basic prompt generation by offering a rich set of enhancement and customization tools directly in the UI. With just a few clicks, you can refine your prompt, adjust its style, or explore entirely new directions — all before sending it to your favorite image generation model.

### ✨ Features

* **Idea-to-Prompt Conversion**: Turn a short concept or idea into a detailed image prompt using AI.
* **Image-Based Prompting**: Upload an image to guide or inspire prompt creation.
* **Prompt Enhancement Tools**: Fine-tune tone, style, or complexity with built-in editing options.
* **User-Friendly Interface**: Intuitive design focused on creativity and experimentation.

Bring your visual ideas to life with **Imaginator** — your smart companion for creative image generation.

## 🚀 Local Development Setup

This guide will walk you through setting up and running this project on your local machine.

### Prerequisites

Before you begin, ensure you have the following installed:
*   [Git](https://git-scm.com/)
*   [Python](https://www.python.org/downloads/) (3.10 or newer)
*   [Node.js](https://nodejs.org/en/download/) and npm

### 1. Clone the Repository

First, clone this repository to your local machine and navigate into the project directory:
```bash
git clone <your-repository-url>
cd <project-directory-name>
```

### 2. Set Up the Backend (FastAPI)

You will need a terminal to run the backend server.

1.  **Navigate to the Backend Directory**
    ```bash
    cd backend
    ```

2.  **Configure Environment Variables**
    This project requires API keys to connect to external services.
    *   In the `backend` folder, find the file named `.env.example`.
    *   Make a copy of this file and rename the copy to `.env`.
    *   Open the new `.env` file and add your personal API keys:
        ```env
        OPENAI_API_KEY="your_openai_api_key_here"
        ANTHROPIC_API_KEY="your_anthropic_api_key_here"
        GROQ_API_KEY="your_groq_api_key_here"
        ```
    > **Important:** The `.env` file is listed in `.gitignore` and should never be committed to the repository.

3.  **Create virtual Environment**
    *   **On Windows:**
        ```cmd
        python -m venv .venv
        ```
    *   **On macOS/Linux:**
        ```bash
        python3 -m venv .venv
        ```

4.  **Activate the virtual environment:**
    *   **On Windows (Command Prompt):**
        ```cmd
        .venv\Scripts\activate
        ```
    *   **On Windows (PowerShell):**
        ```powershell
        .venv\Scripts\Activate.ps1
        ```
    *   **On macOS/Linux:**
        ```bash
        source .venv/bin/activate
        ```

5.  **Install Dependencies and Run the Server**
    ```bash
    # Install the required Python packages
    pip install -r requirements.txt

    # Start the backend development server
    uvicorn src.app:app --reload
    ```
    Note that the command points to `src.app:app` because the main FastAPI instance (`app`) is located in the `backend/src/app.py` file.

The backend API is now running and accessible at `http://127.0.0.1:8000`. Keep this terminal open.

### 3. Set Up the Frontend (React)

**Open a new, separate terminal window.** This is required to run the frontend and backend servers simultaneously.

In the new terminal, follow these steps:
```bash
# Navigate to the frontend directory from the project root
cd frontend

# Install the required Node.js packages
npm install

# Start the frontend development server
npm run dev
```
The React application is now running and accessible at `http://localhost:5173`.

### All Set!

You should now have both the backend API and the frontend application running locally. Changes you make to the code will cause the respective servers to automatically reload.
