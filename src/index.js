// refactored to meet React -v 18
// src: https://github.com/reactwg/react-18/discussions/5
import * as ReactDOMClient from "react-dom/client";
import "./index.css";
import App from "./App";

const rootDIV = document.getElementById("root");
const root = ReactDOMClient.createRoot(rootDIV);
root.render(<App />);