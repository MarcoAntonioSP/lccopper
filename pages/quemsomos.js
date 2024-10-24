import NavBar from "../src/components/navbar/NavBar";
import Footer from "../src/components/footer/Footer";
import QuemSomos from "../src/components/quemsomoscomp/Quemsomoscomp";
import Section1 from "../src/components/section1/Section1";
import Section2 from "../src/components/section2/Section2";
import Section3 from "../src/components/section3/Section3";
import BannerOneimg from "../src/components/banneronepages/BannerOneimg";
import Clientes from "../src/components/clientes/Clientes";

export default function Page() {
  return (
    <main>
      <NavBar />
      <BannerOneimg title="Quem Somos"/>
      <Section3 />
      <Section1 />
      <QuemSomos />
      <Clientes />
      <Footer />
    </main>
  );
}
