import Navbar from "./components/Navbar";
import SectionOne from "./components/SectionOne";
import SectionTwo from "./components/SectionTwo";
import Autopay from "./components/Autopay"
import Xstream from "./components/Xstream";
import Swapx from "./components/Swapx";
import ForDeveloper from "./components/ForDeveloper";
import Sponser from "./components/Sponser";
import Footer from "./components/Footer"


function App() {
  return (
    <div className="bg-black w-full h-full">
     <div className="pt-14 px-8"><Navbar/></div>
     <SectionOne/>
     <SectionTwo/>
    
     <Autopay/>
     <Xstream/>
     <Swapx/>
     <ForDeveloper/>
     <Sponser/>
     <Footer/>
     </div>
    
  );
}

export default App;
