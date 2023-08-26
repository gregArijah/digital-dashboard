import Header from './app_components/header.jsx';
import Nav from './app_components/nav.jsx';
import About from './app_components/about.jsx';
import Gallery from './app_components/gallery.jsx';
import Specs from './app_components/specs.jsx';
import Contact from './app_components/contact.jsx';
import Footer from './app_components/footer.jsx';

export default function App() {
  return (

    <div className='bg-black bg-fixed text-gray-300 h-max'>
        <div className='p-5 space-y-5 md:hidden'> 
            <section className='flex justify-between'>
              <Header />
              <Nav />
            </section>
            <About />
            <Gallery />
            <Specs />
            <Contact id="contact"/>
            <Footer />
        </div>
    </div>
  )
}