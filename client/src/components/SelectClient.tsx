import "./SelectClient.css";

const SelectClientComponent = ({
  clients,
  onChange,
}: {
  clients: string[];
  onChange: any;
}) => {
  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    onChange(value);
  };

  return (
    <select id="client" onChange={handleSelectChange}>
      {clients.map((client, index) => (
        <option key={index} value={client}>
          {client.slice(0, 1).toUpperCase() + client.slice(1, client.length)}
        </option>
      ))}
    </select>
  );
};

export default SelectClientComponent;
