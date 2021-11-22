export default function Option(props) {
    function setCountry() {
        props.setCountry(props.country.label);
    }
    return (
        <div onClick={setCountry} className="option">
            <img
                className="flag"
                src={`https://flagcdn.com/w20/${props.country.code.toLowerCase()}.png`}
            />
            {props.country.label}
        </div>
    );
}
