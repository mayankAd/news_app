import "./App.css";
import Weather from "./components/Weather/Weather";
import News from "./components/News/News";
import { createContext, useState } from "react";




export const NewsContext = createContext(null);

function App() {

  
const[search, setSearch] = useState("India")
  


  return (
    <NewsContext.Provider value = {{search, setSearch}}>
      <div className="flex h-[100vh] w-[100%]">
        
        <Weather/>
        <News/>
        
        
        
        
        
      </div>
      </NewsContext.Provider>
  );
}

export default App;
