import Navbar from "./components/Navbar";
import SectionOne from "./components/SectionOne";
import SectionTwo from "./components/SectionTwo";

function App() {
  return (
    <div className="bg-black w-full h-full">
     <div className="pt-14 px-8"><Navbar/></div>
     <SectionOne/>
     <SectionTwo/>
    </div>
  );
}

export default App;
