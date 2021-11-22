import database from "./database";
export default function OptionsDropdown() {
    return (
        <div className="options-dropdown">
            {database.map((country) => {
                return <Option country={country} />;
            })}
        </div>
    );
}
