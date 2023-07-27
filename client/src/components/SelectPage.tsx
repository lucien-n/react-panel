import './SelectPage.css';

export const SelectPageComponent = ({ onChange }: { onChange: any; }) => {

    return <input type="number" min="0" onChange={onChange} />;
};

export default SelectPageComponent;