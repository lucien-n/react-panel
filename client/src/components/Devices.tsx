import { TDevice } from "../types/device";
import Device from "./Device";

export default function Devices({ devices }: { devices: TDevice[] }) {
  return (
    <>
      <table className="min-w-full text-left text-sm font-light">
        <thead className="border-b font-medium dark:border-neutral-500">
          <tr>
            <th scope="col" className="px-6 py-4">
              Serial Number
            </th>
            <th scope="col" className="px-6 py-4">
              Security Status
            </th>
          </tr>
        </thead>
        <tbody className="border-b dark:border-neutral-500">
          {devices.map((device) => (
            <Device key={device.id} device={device}></Device>
          ))}
        </tbody>
      </table>
    </>
  );
}
