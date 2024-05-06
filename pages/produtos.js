import Link from "next/link";
import ProdBanner from "../src/components/products/ProdBanner";
import Header from "../src/components/header/Header";
import Footer from "../src/components/footer/Footer";
export default function Page() {
  return (
    <main>
      <Header />
      <ProdBanner />
      <Footer />
    </main>
  );
}
