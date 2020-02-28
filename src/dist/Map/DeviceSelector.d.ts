/// <reference types="react" />
import { Device } from './Map';
export declare type DeviceHiddenMap = {
    [key: string]: boolean;
};
export declare const DeviceSelector: ({ devices, onUpdate, }: {
    devices: Device[];
    onUpdate: (map: DeviceHiddenMap) => void;
}) => JSX.Element | null;
