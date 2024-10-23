import NavBar from "../src/components/navbar/NavBar";
import Bannertop from "../src/components/Bannertop/Bannertop";
import Presentation from "../src/components/prensentation/Presentation";
import Structure from "../src/components/structure/Structure";
import Apresentation from "../src/components/structure/Apresentation";
import Footer from "../src/components/footer/Footer";
import Faq from "../src/components/faq/faq";

export default function Home() {
  return (
    <div>
      <NavBar />
      <Bannertop />
      <Presentation />
      <Apresentation />
      <Structure />
      <Faq />
      <Footer />
    </div>
  );
}
