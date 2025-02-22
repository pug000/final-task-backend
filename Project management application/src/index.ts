import mongoose from "mongoose";
import { PORT } from "./constants";

import * as serverService from "./services/server.service";

(async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://pug000:nwGr2jO1MKSlY3Fg@cluster0.yhgfvl6.mongodb.net/managerApp"
    );
    serverService.server.listen(process.env.PORT || PORT, function () {
      console.log("Сервер ожидает подключения...");
    });
  } catch (error) {
    console.log(error);
  }
})();

process.on("SIGINT", async () => {
  await mongoose.disconnect();
  process.exit();
});
