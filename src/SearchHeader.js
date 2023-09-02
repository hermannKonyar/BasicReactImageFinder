import { useState } from "react";



function SearchHeader({search}) {
    const [value, setValue] = useState('');
    const handleFormSubmit= (event) => {
        event.preventDefault();
        debugger;
        search(value);
    };
    const handleChange = (event)=>{
        setValue(event.target.value);
    };
    return ( 
        <div className="searchDiv">
            <form onSubmit={handleFormSubmit}> 
                <label>Ne aramak istiyorsunuz?</label>
                <input value={value} onChange={handleChange}/>
                
                
            </form>
        </div>
    );
}

export default SearchHeader;