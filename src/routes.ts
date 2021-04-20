import { Router } from "express";
import { SettingsController } from "./controllers/SettingsController";
// import { getCustomRepository } from "typeorm";
// import { SettingsRepository } from "./repositories/SettingsRepository";

const routes = Router();

const settingsController = new SettingsController();
routes.post("/settings", settingsController.create)
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

export { routes };