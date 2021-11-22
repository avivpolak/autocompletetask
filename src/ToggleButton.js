import downArrow from "./images/down.jpg";
import upArrow from "./images/up.png";
export default function ToggleButton(props) {
    return (
        <button onClick={props.toggleDD} className="Toggle-button">
            <img className="icon" src={props.isDdOpen ? upArrow : downArrow} />
        </button>
    );
}
