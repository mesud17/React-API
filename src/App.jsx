
import Header from './components/Header'
import Alert from './components/Alert.jsx'
import FirstSection from './components/FirstSection.jsx'
import SecondSection from './components/SecondSection.jsx'
import ThirdSection from './components/ThirdSection.jsx'
import FourthSection from './components/FourthSection.jsx'
import FifthSection from './components/FifthSection.jsx'
import SixthSection from './components/SixthSection.jsx'
import Footer from './components/footer.jsx'
import YoutubeVideos from './services/YoutubeVideos.jsx'



function App() {
  return(
    <>
 <Header />
 <Alert/>
 <FirstSection/>
 <SecondSection/>
 <ThirdSection/>
 <FourthSection/>
 <FifthSection/>
 <SixthSection/>
 <YoutubeVideos/>
 <Footer/>
   </>)
}

export default App