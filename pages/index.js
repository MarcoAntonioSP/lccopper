import Footer from "../src/components/footer/Footer";
import NavBar from "../src/components/navbar/NavBar";
import Structure from "../src/components/structure/Structure";
import Presentation from "../src/components/prensentation/Presentation";
import Apresentationstructure from "../src/components/structure/Apresentation";
import Bannertop from "../src/components/bannertop/Bannertop";


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
