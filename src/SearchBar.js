import { useRef } from "react";
import ClearButton from "./ClearButton";
import ToggleButton from "./ToggleButton";
export default function SearchBar(props) {
    const inputEl = useRef(null);

    return (
        <div className="search-bar">
            <input
                className="search-input"
                type="text"
                onChange={() => {
                    props.setCountry(inputEl.current.value);
                    props.setisDdOpen(true);
                }}
                ref={inputEl}
                value={props.country}
                onFocus={() => {
                    props.setisDdOpen(true);
                }}
            />
            <ClearButton clear={props.clear} />

            <ToggleButton
                setisDdOpen={props.setisDdOpen}
                isDdOpen={props.isDdOpen}
            />
        </div>
    );
}
