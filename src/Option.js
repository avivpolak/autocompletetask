export default function Option(props) {
    function setCountry() {
        props.setCountry(props.country.label);
        props.setisDdOpen(false);
    }
    return (
        <div onClick={setCountry} className="option">
            <img
                className="flag"
                src={`https://flagcdn.com/w20/${props.country.code.toLowerCase()}.png`}
                alt={`${props.country.code}'s flag`}
            />
            {props.country.label}
        </div>
    );
}
