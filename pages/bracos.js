import Footer from "../src/components/footer/Footer";
import Bracos from "../src/components/products/Bracos";
import NavBar from "../src/components/navbar/NavBar";
import BannerOneimg from "../src/components/banneronepages/BannerOneimg";


export default function Page() {
    return (
        <main>
            <NavBar />
            <BannerOneimg title="Braços de Robo" />
            <Bracos />
            <Footer />
        </main>
    )
}