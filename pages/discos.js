
import Footer from "../src/components/footer/Footer";
import Discos from "../src/components/products/Discosprod";
import NavBar from "../src/components/navbar/NavBar";
import BannerOneimg from "../src/components/banneronepages/BannerOneimg";


export default function Page() {
    return (
        <main>
            <NavBar />
            <BannerOneimg title="Discos" />
            <Discos />
            <Footer />
        </main>
    );
}
