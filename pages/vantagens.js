import Footer from "../src/components/footer/Footer";
import Nossasvantagens from "../src/components/vantagens/Nossasvantagens";
import HeaderNav from "../src/components/headerNav/HeaderNav";

export default function Page () {
  return (
    <main>
      <HeaderNav />
      <Nossasvantagens />
      <Footer />
    </main>
  );
}
