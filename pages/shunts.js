import BannerOneimg from "../src/components/banneronepages/BannerOneimg";
import Footer from "../src/components/footer/Footer";
import NavBar from "../src/components/navbar/NavBar";
import Shuntsprod from "../src/components/products/Shuntsprod";


export default function Page() {
    return (
        <main>
            <NavBar />
            <BannerOneimg title="Shunts" />
            <Shuntsprod />
            <Footer />
        </main>
    );
}
