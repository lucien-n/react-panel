import { useState } from "react";
import { camelToTitleCase } from "../helper";
import { Filter } from "../types/filter";
import './Filter.css';

const FilterComponent = ({ filter, onChange }: { filter: Filter; onChange: any; }) => {
    const [isActive, setActive] = useState<boolean>(filter.active);

    const toggle = () => {
        setActive(!isActive);
        filter.active = isActive;
        onChange(filter);
    };

    return <section>
        <input type="checkbox" id={filter.name} checked={isActive} onChange={toggle}></input>
        <label htmlFor={filter.name}>{camelToTitleCase(filter.name)}</label>
    </section>;
};

export default FilterComponent;