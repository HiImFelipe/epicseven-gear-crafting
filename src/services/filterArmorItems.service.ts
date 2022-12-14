import { Build } from "../types";

export const filterArmorItems = (
  build: Build
): Omit<keyof Build, "Name" | "Sets">[] => {
  const armorItems = Object.keys(build).filter((key) => {
    if (key === "Sets") return false;
    if (key === "Name") return false;

    return true;
  });

  return armorItems as Omit<keyof Build, "Name" | "Sets">[];
};
