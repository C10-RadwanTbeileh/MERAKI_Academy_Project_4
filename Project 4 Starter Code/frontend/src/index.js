import { createRoot } from "react-dom/client";
// import BrowserRouter
import { BrowserRouter } from "react-router-dom";

import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
