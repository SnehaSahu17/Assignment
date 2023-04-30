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
    <div className="bg-black backdrop-blur w-full h-full font-inter">
     <div className="pt-20 md:px-28"><Navbar/></div>
    <div className=" px-4 md:px-28"> <SectionOne/> </div>
     
     <SectionTwo/>
     {/* 
     <Autopay/>
    
     <Xstream/>
     
     <Swapx/>
      
     <ForDeveloper/>
     
     <Sponser/>
    
     <div className="pb-20"><Footer/></div>   */}
     </div>
    
  );
}

export default App;
