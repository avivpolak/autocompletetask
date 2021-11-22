import "./App.css";
import SearchBar from "./SearchBar";
import OptionsDropdown from "./OptionsDropdown";
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
            <SearchBar
                country={country}
                setCountry={setCountry}
                clear={clear}
                toggleDD={toggleDD}
                isDdOpen={isDdOpen}
            />

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
