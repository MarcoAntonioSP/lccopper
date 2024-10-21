import Eletrodos from "../src/components/products/Eletrodos";
import Footer from "../src/components/footer/Footer";
import NavBar from "../src/components/navbar/NavBar";
import BannerOneimg from "../src/components/banneronepages/BannerOneimg";

export default function Page() {
  return (
    <main>
      <NavBar />
      <BannerOneimg title="Eletrodos" />
      <Eletrodos />
      <Footer />
    </main>
  );
}
