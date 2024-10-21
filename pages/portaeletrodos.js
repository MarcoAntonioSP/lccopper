
import BannerOneimg from "../src/components/banneronepages/BannerOneimg";
import Footer from "../src/components/footer/Footer";
import NavBar from "../src/components/navbar/NavBar";
import Portaeletrodo from "../src/components/products/Portaeletro";

export default function Page() {
  return (
    <main>
      <NavBar />
      <BannerOneimg title="Porta Eletrodos" />
      <Portaeletrodo />
      <Footer />
    </main>
  );
}
