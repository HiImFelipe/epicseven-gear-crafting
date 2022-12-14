import { Stat } from "../types";

export const checkForValidSubstats = (
  armorSubstats: Array<Stat>,
  customSubstatsProvided: Array<Stat>
) => {
  return customSubstatsProvided.every((substat) => {
    const foundItem = armorSubstats
      .map((substat) => substat.toLowerCase())
      .includes(substat.toLowerCase());

    if (!foundItem) {
      console.log("The build does not have the substat: ", substat);
    }

    return foundItem;
  });
};
