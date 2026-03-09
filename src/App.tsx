/**
 * App.tsx - Component gốc của ứng dụng
 *
 * Trong TSX:
 * - Không cần khai báo kiểu nếu function không nhận props (trả về JSX)
 * - Nếu có props sau này, dùng: function App(props: AppProps) hoặc interface AppProps {}
 */

import Hero from "./sections/Hero";
import CourseOverview from "./sections/CourseOverview";
import MainLayout from "./Layouts/MainLayout";
import HeroHeadline from "./sections/HeroHeadline";
import Intro from "./sections/Intro";
import Question from "./sections/Question";
import Outcome from "./sections/Outcome";
export default function App() {
  return (
    <MainLayout>
      <Hero />
      <CourseOverview />
      <HeroHeadline />
      <Intro />
      <Question />
      <Outcome />
    </MainLayout>
  );
}
