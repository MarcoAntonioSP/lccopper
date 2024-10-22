import NavBar from "../src/components/navbar/NavBar";
import BannerOneimg from "../src/components/banneronepages/BannerOneimg";
import Footer from "../src/components/footer/Footer";
import Nossasvantagens from "../src/components/vantagens/Nossasvantagens";

export default function Page () {
  return (
    <main>
      <NavBar />
      <BannerOneimg title="Nossas Vantagens" />
      <Nossasvantagens />
      <Footer />
    </main>
  );
}
