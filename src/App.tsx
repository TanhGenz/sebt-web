/**
 * App.tsx - Component gốc của ứng dụng
 *
 * Trong TSX:
 * - Không cần khai báo kiểu nếu function không nhận props (trả về JSX)
 * - Nếu có props sau này, dùng: function App(props: AppProps) hoặc interface AppProps {}
 */

import Hero from "./sections/Hero";
import MainContent from "./sections/MainContent";
import MainLayout from "./Layouuts/MainLayout";

export default function App() {
  return (
    <MainLayout>
      <Hero />
      <MainContent />
    </MainLayout>
  );
}
