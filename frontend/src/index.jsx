import ReactDOM from "react-dom/client";
import { ModeProvider } from "./store/mode-store";

import App from "./App.jsx";
import "./index.css";

const entryPoint = document.getElementById("root");
ReactDOM.createRoot(entryPoint).render(
    <ModeProvider>
        <App />
    </ModeProvider>
);
