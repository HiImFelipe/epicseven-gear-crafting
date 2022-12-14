import { Stat } from "../types";

export const checkForValidMainStat = (
  armorMainStat: Stat,
  customMainStatProvided: Stat | undefined
) => {
  const foundItem =
    armorMainStat.toLowerCase() === customMainStatProvided?.toLowerCase();

  if (!foundItem) {
    console.log("The build does not have the substat: ", armorMainStat);
  }

  return foundItem;
};
