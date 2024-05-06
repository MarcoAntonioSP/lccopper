import Clientes from "../src/components/clientes/Clientes";
import Header from "../src/components/header/Header";
import Footer from "../src/components/footer/Footer";


export default function Page ( ) {
    return (
        <main>
            <Header />
            <Clientes />
            <Footer />
        </main>
    )
}