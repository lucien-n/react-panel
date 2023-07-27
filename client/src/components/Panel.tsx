import { useState } from "react";
import SelectClient from "./SelectClient";
import Devices from "./Devices";

const Panel = () => {
    const [clientId, setClientId] = useState<string>('');

    return <>
        <SelectClient setClientId={setClientId} />
        <Devices clientId={clientId} />
    </>;
};

export default Panel;
