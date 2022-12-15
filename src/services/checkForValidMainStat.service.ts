import { Stat } from "../types";

export const checkForValidMainStat = (
  armorMainStats?: Stat[] | Stat,
  customMainStatProvided?: Stat
) => {
  if (!armorMainStats) return false;

  let foundItem = false;

  if (typeof armorMainStats === "string") {
    foundItem =
      armorMainStats.toLowerCase() ===
      (customMainStatProvided?.toLowerCase() as string);
  }

  if (Array.isArray(armorMainStats)) {
    foundItem = armorMainStats
      .map((mainStat) => mainStat.toLowerCase())
      .includes(customMainStatProvided?.toLowerCase() as string);
  }

  if (!foundItem) {
    console.log("The build does not have the substat: ", armorMainStats);
  }

  return foundItem;
};
