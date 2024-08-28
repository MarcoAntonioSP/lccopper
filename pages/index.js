import Footer from "../src/components/footer/Footer";
import Header from "../src/components/header/Header";
import Banner from "../src/components/banner/Banner";
import Structure from "../src/components/structure/Structure";
import Presentation from "../src/components/prensentation/Presentation";
import Apresentationstructure from "../src/components/structure/Apresentation";

export default function Home() {
  return (
    <div>
      <Header />
      <Banner />
      <Presentation />
      <Apresentationstructure />
      <Structure />
      <Footer />
    </div>
  );
}
