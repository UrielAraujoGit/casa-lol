import { CapacitorHttp, type HttpOptions } from "@capacitor/core";

const HOUSE_DEVICE = "device";

export const setApiRoom = async (floor: number, room: string, on: boolean) => {
  const options: HttpOptions = {
    url: `${HOUSE_DEVICE}/luz?piso=${floor}&habitacion=${room}&estado=${on ? "on" : "off"}`,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "Content-Type",
    },
  };

  return await CapacitorHttp.get(options);
};

export const setApiFloor = async (floor: number) => {
  const options: HttpOptions = {
    url: `${HOUSE_DEVICE}/ascensor?piso=${floor}`,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "Content-Type",
    },
  };
  return await CapacitorHttp.get(options);
};

export const setApiRgb = async (on: boolean) => {
  const options: HttpOptions = {
    url: `${HOUSE_DEVICE}/rgb?estado=${on ? "on" : "off"}`,

    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "Content-Type",
    },
  };

  return await CapacitorHttp.get(options);
};
