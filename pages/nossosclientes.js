import Clientes from "../src/components/clientes/Clientes";
import Footer from "../src/components/footer/Footer";
import HeaderNav from "../src/components/headerNav/HeaderNav";


export default function Page ( ) {
    return (
        <main>
            <HeaderNav />
            <Clientes />
            <Footer />
        </main>
    )
}