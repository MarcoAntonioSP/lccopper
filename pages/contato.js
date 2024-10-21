
import Footer from "../src/components/footer/Footer";
import Contato from "../src/components/contato/Contato";
import NavBar from "../src/components/navbar/NavBar";
import BannerOneimg from "../src/components/banneronepages/BannerOneimg";
import Section1 from "../src/components/section1/section1";


export default function ContatoPage() {
  return (
    <div>
      <NavBar />
      <BannerOneimg title="Contato" />
      <Contato />
      <Section1 />
      <Footer />
    </div>
  );
}
