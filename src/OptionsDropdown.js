import Option from "./Option";
export default function OptionsDropdown(props) {
    return (
        <div className="options-dropdown">
            {props.countries.map((country) => {
                if (props.show) {
                    return (
                        <Option
                            key={country.label}
                            country={country}
                            setCountry={props.setCountry}
                            setisDdOpen={props.setisDdOpen}
                        />
                    );
                }
            })}
        </div>
    );
}
