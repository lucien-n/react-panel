export default function SettingsSection(props: React.PropsWithChildren) {
  return (
    <div className="px-4 py-2 border border-black rounded-[5px] gap-3 flex flex-col">
      {props.children}
    </div>
  );
}
