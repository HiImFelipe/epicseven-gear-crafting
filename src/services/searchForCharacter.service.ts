import { Personagens as personagens } from "../dados.json";
import {
  Build,
  BuildWithoutAdditionalInfo,
  Item,
  ItemsWithNoFixedMainStat,
  Stat,
} from "../types";
import { checkForValidMainStat } from "./checkForValidMainStat.service";
import { checkForValidSubstats } from "./checkForValidSubstats.service";
import { filterArmorItems } from "./filterArmorItems.service";

const armorItemsWithCustomMainStat = ["colar", "anel", "bota"];

type Params = {
  setName: string;
  armorItem: Item;
  substats: Array<Stat>;
  mainStat?: Stat;
};

export const searchForCharacters = ({
  armorItem,
  setName,
  substats,
  mainStat,
}: Params) => {
  console.log({ personagens });

  const characterFound = personagens.filter((personagem) =>
    personagem.Build.filter((build) => {
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
