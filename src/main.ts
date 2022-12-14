import Express from "express";
import { searchForCharacter } from "./searchForCharacter";

const PORT = 3000;

const app = Express();

app.use(Express.json());

app.get("/", (request, response) => {
  const params = request.body;

  console.log(params);

  if (typeof params.setName !== "string") {
    return response.status(400).send("Invalid set name");
  }

  if (typeof params.armorItem !== "string") {
    return response.status(400).send("Invalid armor item");
  }

  if (!Array.isArray(params.substats)) {
    return response.status(400).send("Invalid substats");
  }

  if (typeof params.mainStat !== "string" && params.mainStat !== undefined) {
    console.log(typeof params.mainStat);

    return response.status(400).send("Invalid main stat");
  }

  const characterFound = searchForCharacter({
    setName: params.setName,
    armorItem: params.armorItem,
    mainStat: params.mainStat,
    substats: params.substats,
  });

  response.send(
    characterFound
      ? {
          name: characterFound?.Nome,
          buildName: characterFound?.Build[0].Nome,
        }
      : { message: "No character found" }
  );
});

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
