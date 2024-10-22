import NavBar from "../src/components/navbar/NavBar";
import Bannertop from "../src/components/Bannertop/Bannertop";
import Presentation from "../src/components/prensentation/Presentation";
import Structure from "../src/components/structure/Structure";
import Apresentationstructure from "../src/components/structure/Apresentation";
import Footer from "../src/components/footer/Footer";

export default function Home() {
  return (
    <div>
      <NavBar />
      <Bannertop />
      <Presentation />
      <Apresentationstructure />
      <Structure />
      <Footer />
    </div>
  );
}
