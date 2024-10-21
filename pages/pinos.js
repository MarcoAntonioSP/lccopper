import NavBar from "../src/components/navbar/NavBar";
import Footer from "../src/components/footer/Footer";
import Pinosguiabuchas from "../src/components/products/Pinosguiabuchas";
import BannerOneimg from "../src/components/banneronepages/BannerOneimg";




export default function Page ( ) {
    return (
        <main>
            <NavBar />
            <BannerOneimg title="Pinos Guia E Buchas" />
            <Pinosguiabuchas />
            <Footer />
        </main>
    )
}