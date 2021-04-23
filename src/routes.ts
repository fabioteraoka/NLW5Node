import { Router } from "express";
import { SettingsController } from "./controllers/SettingsController";
import { UsersController } from "./controllers/UsersController";
import { MessagesController } from "./controllers/MessagesController";

const routes = Router();

const settingsController = new SettingsController();
const usersController = new UsersController();
const messagesController = new MessagesController();

routes.post("/settings", settingsController.create);
routes.get("/settings/:username", settingsController.findByUsername);
routes.put("/settings/:username", settingsController.update);

routes.post("/users", usersController.create);

routes.post("/messages", messagesController.create);
routes.get("/messages/:id", messagesController.showByUser);

export { routes };

// import { getCustomRepository } from "typeorm";
// import { SettingsRepository } from "./repositories/SettingsRepository";

// movido para o SettingsController
// const { chat, username } = req.body;

// const settingsRepository = getCustomRepository(SettingsRepository);

// const settings = settingsRepository.create({
//     chat,
//     username,
// });

// await settingsRepository.save(settings);

// return res.json(settings);
// })
