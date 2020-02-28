/// <reference types="react" />
import { GGAPacket } from 'nmea-simple';
export declare type Device = {
    deviceId: string;
    color: string;
    name: string;
    geolocation?: GGAPacket;
    cellGeolocation?: {
        lat: number;
        lng: number;
        accuracy: number;
        ts: string;
    };
    temp?: number;
    airQuality?: number;
    humidity?: number;
    pressure?: number;
    rsrpDbm?: number;
    imei?: string;
    mccmnc?: string;
    networkInfo?: {
        mccmnc: string;
        cellID: number;
        areaCode: number;
    };
};
export declare const byIMEI: ({ deviceId: ad, imei: ai }: Device, { deviceId: bd, imei: bi }: Device) => number;
export declare const Map: () => JSX.Element;
