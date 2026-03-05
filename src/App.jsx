import Hero from "./sections/Hero";
import Footer from "./components/Footer";
import Coming from "./sections/ComingSoon";

export default function App() {
  return (
    <main>
      <Hero />
      {/* các section khác làm sau */}
      <Coming />

      <Footer />
    </main>
  );
}
