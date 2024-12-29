import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
// const sendData = async () => {
//   const canvas = canvasRef.current;
//   if (canvas) {
//     console.log("sending data..", "http://127.0.0.1:8000/calculate");
//     const response = await axios.post(
//       ${import.meta.env.VITE_API_URL}/calculate,
//       {
//         image: canvas.toDataURL("image/png"),
//         dict_of_vars: dictOfVars,
//       }
//     );
//     const resp = await response.data;
//     console.log("response:", resp);
//   }
// };
