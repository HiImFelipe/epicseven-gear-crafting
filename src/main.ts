import Express from "express";
import { characterRoutes } from "./routes/character/character.routes";

const PORT = 3000;

const app = Express();

app.use(Express.json());

app.use(characterRoutes);

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
