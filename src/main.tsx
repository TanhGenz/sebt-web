/**
 * main.tsx - Điểm vào (entry point) của ứng dụng React
 *
 * File này:
 * - Import React (StrictMode), ReactDOM và component gốc App
 * - Gắn (mount) cây component vào phần tử #root trong index.html
 * - StrictMode giúp phát hiện lỗi tiềm ẩn trong development
 */

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./styles/globals.css";

// getElementById trả về HTMLElement | null; createRoot cần Element nên cần assert non-null
const rootElement = document.getElementById("root");
if (!rootElement) throw new Error("Không tìm thấy phần tử #root");

createRoot(rootElement).render(
  <StrictMode>
    <App />
  </StrictMode>
);
