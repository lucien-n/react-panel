export default function Filter({
  name,
  value,
  onChange,
}: {
  name: string;
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}) {
  return (
    <div className="flex justfiy-between w-full gap-3">
      <input type="checkbox" id={value} onChange={onChange} />
      <label htmlFor={value}>{name}</label>
    </div>
  );
}
