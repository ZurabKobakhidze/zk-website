import { Header } from "../components/shared/header";
import Projects from "../components/sections/Projects";

export default function Home() {
  return (
    <div className="bg-bg-dark min-h-screen">
      <Header />
      <Projects />
    </div>
  );
}
