import Menu from './app_components/menu.jsx';
import About from './app_components/about.jsx';
import Gallery from './app_components/gallery.jsx';
import Specs from './app_components/specs.jsx';
import Contact from './app_components/contact.jsx';
import Footer from './app_components/footer.jsx';

export default function App() {
  return (

    <div className='p-5'>
        <Menu />
        <About />
        <Gallery />
        <Specs />
        <Contact />
        <Footer />      
    </div>
  )
}