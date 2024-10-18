import Footer from "../src/components/footer/Footer";
import Header from "../src/components/header/Header";
import Banner from "../src/components/banner/Banner";
import Structure from "../src/components/structure/Structure";
import Presentation from "../src/components/prensentation/Presentation";
import Apresentationstructure from "../src/components/structure/Apresentation";
import HeaderNav from "../src/components/headerNav/HeaderNav";

export default function Home() {
  return (
    <div>
      <HeaderNav />
      <Presentation />
      <Apresentationstructure />
      <Structure />
      <Footer />
    </div>
  );
}
