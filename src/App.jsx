import Preloader from "./components/Preloader";
import Nav from "./components/Nav";
import Header from "./components/Header";
import AboutSection from "./components/AboutSection";
import Gallery from "./components/Gallery";
import Commission from "./components/Commission";
import Testimonial from "./components/Testimonial";
import Contact from "./components/Contact";
import Footer from "./components/footer";

function App() {
  return (
    <div>
      <Preloader />
      <Nav />
      <Header />
      <AboutSection />
      <Gallery />
      <Commission />
      <Testimonial />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
