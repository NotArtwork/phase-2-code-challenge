
function SearchBar({ setPlaneteers, planeteers, allPlaneteers }) {

  const handleInput = (e) => {
    if (e.target.value === '') {return setPlaneteers(allPlaneteers)}
      
    const filteredPlaneteers = planeteers.filter((member) => member.name.toLowerCase().includes(e.target.value.toLowerCase()))
    setPlaneteers(filteredPlaneteers)
  }


  return ( 
    <div className="search">
      <input type="text" className="searchTerm" 
        onChange={handleInput}
      />
      {/* For the advanced deliverables: add a checkbox to allow sorting the planeteer */}
    </div>
  );
}

export default SearchBar;
