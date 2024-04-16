import ButtonGradient from "./assets/svg/ButtonGradient";
import Detalhes from "./components/Detalhes";
import Fields from "./components/Fields";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Xag from "./components/Xag";

const App = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden gap-5">
        <Header />
        <Hero />
        <Detalhes />
        <Xag />
        <Fields />
        <Footer />
      </div>

      <ButtonGradient />
    </>
  );
};

export default App;
