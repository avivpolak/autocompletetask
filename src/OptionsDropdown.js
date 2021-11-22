import database from "./database";
import Option from "./Option";
export default function OptionsDropdown(props) {
    return (
        <div className="options-dropdown">
            {props.countries.map((country) => {
                if (props.show) {
                    return (
                        <Option
                            country={country}
                            setCountry={props.setCountry}
                        />
                    );
                }
            })}
        </div>
    );
}
