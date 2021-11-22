import x from "./images/x.png";

export default function ClearButton(props) {
    return (
        <button onClick={props.clear} className="clear-button">
            <img className="icon" src={x} />
        </button>
    );
}
