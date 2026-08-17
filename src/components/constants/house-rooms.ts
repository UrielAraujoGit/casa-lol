import type { RoomType } from "../lighting/room";

export const HOUSE_ROOMS: RoomType[] = [
  {
    id: "living",
    name: "Living Room",
    emoji: "🛋️",
    on: false,
    brightness: 75,
    color: "#FF3EB5",
  },
  {
    id: "cocina",
    name: "Cocina",
    emoji: "🍳",
    on: false,
    brightness: 90,
    color: "#FFB800",
  },
  {
    id: "pieza1",
    name: "Pieza 1",
    emoji: "🛏️",
    on: false,
    brightness: 40,
    color: "#8B35FF",
  },
  {
    id: "pieza2",
    name: "Pieza 2",
    emoji: "🛏️",
    on: false,
    brightness: 30,
    color: "#FF6B9D",
  },
  {
    id: "baño",
    name: "Baño",
    emoji: "🛁",
    on: false,
    brightness: 55,
    color: "#00DCFF",
  },
  {
    id: "terraza",
    name: "Terraza",
    emoji: "✨",
    on: false,
    brightness: 20,
    color: "#8B35FF",
  },
];
