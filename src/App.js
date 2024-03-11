import './App.css';
import About from './blocks/about/About';
import Artist from './blocks/artist/Artist';
import Billboard from './blocks/billboard/Billboard';
import Contacts from './blocks/contacts/Contacts';
import Footer from './blocks/footer/Footer';
import Header from './blocks/header/Header';
import Intro from './blocks/intro/Intro';
import { Helmet } from 'react-helmet';
import Slider from './blocks/slider/Slider';

function App() {
  return (
    <div className="App">
      <Header/>
      <Intro/>
      <Helmet>
        <script
          src="https://ticketscloud.com/static/scripts/widget/tcwidget.js"
          async
        />
      </Helmet>
      <About/>
      <Billboard/>
      <Slider/>
      <Artist/>
      <Contacts/>
      <Footer/>
    </div>
  );
}

export default App;
