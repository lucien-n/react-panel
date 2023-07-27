import { Filter } from '../types/filter';
import FilterComponent from './Filter';
import './Filters.css';

const FiltersComponent = ({ filters, onChange }: { filters: Filter[]; onChange: any; }) => {

    const filterChanged = (filter: Filter) => {
        onChange(filter);
    };

    return <div className="filters">
        {
            filters.map((filter, index) => (
                <FilterComponent filter={filter} onChange={filterChanged} key={index}  ></FilterComponent>
            ))
        }
    </div>;
};

export default FiltersComponent;