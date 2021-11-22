import SearchBar from "./SearchBar";
import OptionsDropdown from "./OptionsDropdown";
import ClearButton from "./ClearButton";
import ToggleButton from "./ToggleButton";
import { useState, useEffect, useRef } from "react";
import database from "./database";

function App() {
    const [country, setCountry] = useState("");
    const [isDdOpen, setisDdOpen] = useState(false);
    const [inputVal, setInputVal] = useState("");

    function toggleDD() {
        isDdOpen ? setisDdOpen(false) : setisDdOpen(true);
    }

    function clear() {
        setCountry("");
    }

    useEffect(() => {
        setInputVal(country);
        console.log("input:", { inputVal });
    }, [country]);
    return (
        <div className="App">
            <SearchBar country={country} setCountry={setCountry} />
            <ClearButton clear={clear} />
            <ToggleButton toggleDD={toggleDD} />
            <OptionsDropdown
                show={isDdOpen}
                setCountry={setCountry}
                countries={database.filter((country) => {
                    return country.label
                        .toLowerCase()
                        .includes(inputVal.toLowerCase());
                })}
            />
        </div>
    );
}

export default App;
