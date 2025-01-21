import NavBar from "../src/components/navbar/NavBar";
import BannerOneimg from "../src/components/banneronepages/BannerOneimg";
import Contato from "../src/components/contato/Contato.tsx";
import Footer from "../src/components/footer/Footer";

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
