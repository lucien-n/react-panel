export default function SelectPage({
  onChange,
  max,
}: {
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  max: number;
}) {
  return (
    <>
      <input
        className="border border-black rounded-[5px] px-4 py-2 max-w-[7rem]"
        type="number"
        step="1"
        min="0"
        max={max || 10}
        onChange={onChange}
      />
    </>
  );
}
