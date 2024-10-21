import NavBar from "../src/components/navbar/NavBar";
import Footer from "../src/components/footer/Footer";
import QuemSomos from "../src/components/quemsomoscomp/Quemsomoscomp";
import BannerOneimg from "../src/components/banneronepages/BannerOneimg";

export default function Page() {
  return (
    <main>
      <NavBar />
      <BannerOneimg title="Quem Somos"/> 
      <QuemSomos />
      <Footer />
    </main>
  );
}
