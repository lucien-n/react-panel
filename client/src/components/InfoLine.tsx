export default function InfoLine({
  name,
  value,
}: {
  name: string;
  value: string | number;
}) {
  return (
    <div className="w-48 flex justify-between gap-6">
      <p className="opacity-80 font-semibold">{name}</p>
      <p className="font-bold">{value}</p>
    </div>
  );
}
