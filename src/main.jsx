import React from "react";
import ReactDOM from "react-dom/client"; // Corrected 'ReactDom' to 'ReactDOM'
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom"; // Make sure to import BrowserRouter

ReactDOM.createRoot(document.getElementById("router")).render( // Added .render()
    <React.StrictMode>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </React.StrictMode> // Corrected 'React.stricMode' to 'React.StrictMode'
);
