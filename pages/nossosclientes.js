import NavBar from "../src/components/navbar/NavBar";
import Clientes from "../src/components/clientes/Clientes";
import Footer from "../src/components/footer/Footer";
import BannerOneimg from "../src/components/banneronepages/BannerOneimg";



export default function Page ( ) {
    return (
        <main>
            <NavBar />
            <BannerOneimg title="Nossos Cliente" />
            <Clientes />
            <Footer />
        </main>
    )
}