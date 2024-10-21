import ProdBanner from "../src/components/products/ProdBanner";
import Footer from "../src/components/footer/Footer";
import NavBar from "../src/components/navbar/NavBar";
import BannerOneimg from "../src/components/banneronepages/BannerOneimg";
export default function Page() {
  return (
    <main>
      <NavBar />
      <BannerOneimg title="Produtos" />
      <ProdBanner />
      <Footer />
    </main>
  );
}
