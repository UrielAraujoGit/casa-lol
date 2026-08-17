const HOUSE_DEVICE = "device";

export const setApiRoom = async (floor: number, room: string, on: boolean) => {
  const endpoint = await fetch(
    `${HOUSE_DEVICE}/luz?piso=${floor}&habitacion=${room}&estado=${on ? "on" : "off"}`,
    {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type",
      },
    },
  );
  return endpoint.status;
};

export const setApiFloor = async (floor: number) => {
  const endpoint = await fetch(`${HOUSE_DEVICE}/ascensor?piso=${floor}`, {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    },
  });
  return endpoint.status;
};

export const setApiRgb = async (on: boolean) => {
  const endpoint = await fetch(
    `${HOUSE_DEVICE}/rgb?estado=${on ? "on" : "off"}`,
    {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type",
      },
    },
  );
  return endpoint.status;
};
