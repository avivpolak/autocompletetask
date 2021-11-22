import { useEffect, useRef, useState } from "react";
import ClearButton from "./ClearButton";
import ToggleButton from "./ToggleButton";
export default function SearchBar(props) {
    const inputEl = useRef(null);
    // const [inputVal, setInputVal] = useState("");

    // useEffect(() => {
    //     inputEl.current.value = inputVal;
    //     console.log(inputVal);
    //     props.setCountry(inputVal);
    // }, [inputVal]);
    return (
        <div className="search-bar">
            <input
                className="search-input"
                type="text"
                onChange={() => {
                    props.setCountry(inputEl.current.value);
                }}
                ref={inputEl}
                value={props.country}
            />
            <ClearButton clear={props.clear} />

            <ToggleButton toggleDD={props.toggleDD} isDdOpen={props.isDdOpen} />
        </div>
    );
}
