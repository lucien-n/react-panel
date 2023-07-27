import "./SelectClient.css";

const SelectClientComponent = ({ clients, onChange }: { clients: string[], onChange: any; }) => {
    const handleSelectChange = (event: React.FormEvent) => {
        const value = (event.target as any).value;
        onChange(value);
    };

    return <select id="client" onChange={handleSelectChange}>
        {
            clients.map((client) => (
                <option value={client}>{client.slice(0, 1).toUpperCase() + client.slice(1, client.length)}</option>
            ))
        }
    </select>;

};

export default SelectClientComponent;