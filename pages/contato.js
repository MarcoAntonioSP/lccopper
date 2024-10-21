
import Footer from "../src/components/footer/Footer";
import Contato from "../src/components/contato/Contato"; 
import NavBar from "../src/components/navbar/NavBar";
import BannerOneimg from "../src/components/banneronepages/BannerOneimg";


export default function ContatoPage() {
  return (
    <div>
      <NavBar />
      <BannerOneimg title="Contato" />
      <Contato />
      <Footer />
    </div>
  );
}
