import downArrow from "./images/down.jpg";
import upArrow from "./images/up.png";

export default function ToggleButton(props) {
    return (
        <button
            onClick={() => {
                props.setisDdOpen(props.isDdOpen ? false : true);
            }}
            className="Toggle-button"
        >
            <img
                className="icon"
                src={props.isDdOpen ? upArrow : downArrow}
                alt={props.isDdOpen ? "upArrow" : "downArrow"}
            />
        </button>
    );
}
