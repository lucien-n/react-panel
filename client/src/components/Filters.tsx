import FilterComponent from './Filter';
import './Filters.css';

const FiltersComponent = () => {
    const filters = ['showSilentDevices', 'showOnlyHealthyDevices', 'antivirusOn', 'firewallOn'];

    return <div className="filters">
        {
            filters.map((filter) => (
                <FilterComponent filter={filter} ></FilterComponent>
            ))
        }
    </div>;
};

export default FiltersComponent;