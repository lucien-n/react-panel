const Filter = ({ name, onChange }: { name: string; onChange: any }) => {
  return (
    <>
      <label htmlFor={name}>{name}</label>
      <input type="checkbox" id={name} onChange={onChange}></input>
    </>
  );
};

export default Filter;
