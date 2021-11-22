import "./App.css";
import SearchBar from "./SearchBar";
import OptionsDropdown from "./OptionsDropdown";
import { useState, useEffect } from "react";
import database from "./database";

function App() {
    const [country, setCountry] = useState("");
    const [isDdOpen, setisDdOpen] = useState(false);
    const [inputVal, setInputVal] = useState("");

    function clear() {
        setCountry("");
    }
    function useFalse() {
        return false;
    }
    function useTrue() {
        return true;
    }
    useEffect(() => {
        setInputVal(country);
    }, [country]);

    return (
        <div className="App">
            <SearchBar
                country={country}
                setCountry={setCountry}
                clear={clear}
                isDdOpen={isDdOpen}
                setisDdOpen={setisDdOpen}
            />

            <OptionsDropdown
                show={isDdOpen}
                setCountry={setCountry}
                setisDdOpen={setisDdOpen}
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
