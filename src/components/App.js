import { useEffect, useState } from "react";

import Header from "./Header";
import RandomButton from "./RandomButton";
import PlaneteersContainer from "./PlaneteersContainer";
import SearchBar from "./SearchBar";

function App() {
  
  const [planeteers, setPlaneteers] = useState([])
  const [allPlaneteers, setAllPlaneteers] = useState([])

  useEffect(()=> {
    const fetchPlaneteers = async () => {
      let req = await fetch('http://localhost:8003/planeteers')
      let res = await req.json()
      setPlaneteers(res)
      setAllPlaneteers(res)
    }
    fetchPlaneteers();
  },[])
  
  //Couldn't make it in Planeteer because file didn't allow it for some reason.
  const year = new Date().getFullYear()



  return (
    <div>
      <Header />
      <SearchBar planeteers={planeteers} setPlaneteers={setPlaneteers} allPlaneteers={allPlaneteers}/>
      <RandomButton setPlaneteers={setPlaneteers} planeteers={planeteers} />
      <PlaneteersContainer planeteers={planeteers} year={year}/>
    </div>
  );
}

export default App;
