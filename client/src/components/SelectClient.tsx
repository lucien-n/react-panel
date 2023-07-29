export default function SelectClient({
  clients,
  onChange,
}: {
  clients: string[];
  onChange: React.ChangeEventHandler<HTMLSelectElement>;
}) {
  return (
    <>
      <select
        name="client"
        id="select-client"
        onChange={onChange}
        className="px-4 py-2 border border-black rounded-[5px] bg-white text-lg"
      >
        {clients &&
          clients.map((client: string) => (
            <option key={client} value={client}>
              {client}
            </option>
          ))}
      </select>
    </>
  );
}
