import { Personagens as personagens } from "./dados.json";
import {
  Build,
  BuildWithoutAdditionalInfo,
  Item,
  ItemsWithNoFixedMainStat,
  Stat,
} from "./types";

const armorItemsWithCustomMainStat = ["colar", "anel", "bota"];

type Params = {
  setName: string;
  armorItem: Item;
  substats: Array<Stat>;
  mainStat?: Stat;
};

const filterArmorItems = (
  build: Build
): Omit<keyof Build, "Name" | "Sets">[] => {
  const armorItems = Object.keys(build).filter((key) => {
    if (key === "Sets") return false;
    if (key === "Name") return false;

    return true;
  });

  return armorItems as Omit<keyof Build, "Name" | "Sets">[];
};

const checkForValidSubstats = (
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

const checkForValidMainStat = (
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

export const searchForCharacter = ({
  armorItem,
  setName,
  substats,
  mainStat,
}: Params) => {
  console.log({ personagens });

  const characterFound = personagens.find((personagem) =>
    personagem.Build.find((build) => {
      if (
        build.Sets.map((set) => set.toLowerCase()).includes(
          setName.toLowerCase()
        )
      ) {
        console.log("Found a build with the set: ", setName);

        const armorItems = filterArmorItems(build as Build);

        console.log("Armor items: ", armorItems);

        const foundItem = armorItems.find(
          (item) => item.toLowerCase() === armorItem.toLowerCase()
        );

        if (!foundItem) {
          console.log("The build does not have the item: ", armorItem);

          return false;
        }

        console.log("Found item: ", foundItem);

        if (
          armorItemsWithCustomMainStat.includes(
            foundItem.toLowerCase() as string
          )
        ) {
          console.log(`The item ${foundItem} has a custom main stat`);

          const validMainStatFound = checkForValidMainStat(
            build[foundItem as unknown as keyof ItemsWithNoFixedMainStat]
              .main_stat as Stat,
            mainStat
          );

          if (!validMainStatFound) {
            console.log("The build does not have the main stat: ", mainStat);

            return false;
          }

          console.log("Found valid main stat: ", validMainStatFound);
        }

        const foundValidSubstats = checkForValidSubstats(
          build[foundItem as unknown as keyof BuildWithoutAdditionalInfo]
            .sub_stat as Array<Stat>,
          substats
        );

        if (!foundValidSubstats) {
          console.log("Not all substats were found in this build");
        }

        console.log("Found valid substats: ", foundValidSubstats);

        return foundValidSubstats;
      }

      return false;
    })
  );

  return characterFound;
};
