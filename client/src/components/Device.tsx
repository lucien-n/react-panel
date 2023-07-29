import { TDevice } from "../types/device";
import Security from "./Security";

export default function Device({ device }: { device: TDevice }) {
  const { serialNumber, security, lastCheckInDate } = device;

  return (
    <>
      <tr>
        <td className="whitespace-nowrap px-6 py-4">{serialNumber}</td>
        <td className="whitespace-nowrap px-6 py-4 flex">
          <Security lastCheckInDate={lastCheckInDate} security={security} />
        </td>
      </tr>
    </>
  );
}
