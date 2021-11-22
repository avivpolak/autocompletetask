export default function Option(props) {
    function setCountry() {
        props.setCountry(props.country.label);
    }
    return (
        <div onClick={setCountry} className="option">
            {props.country.label}
            <img
                src={`https://flagcdn.com/w20/${props.country.code.toLowerCase()}.png`}
            />
        </div>
    );
}
