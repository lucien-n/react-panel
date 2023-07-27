import { camelToTitleCase } from "../helper";
import './Filter.css';

const FilterComponent = ({ filter }: { filter: string; }) => {
    return <section>
        <input type="checkbox" id={filter}></input>
        <label htmlFor={filter}>{camelToTitleCase(filter)}</label>
    </section>;
};

export default FilterComponent;