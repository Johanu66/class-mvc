import { Controller } from "../controllers/controller.js";
import { View } from "../views/view.js";

window.addEventListener('load', function() {
    const controller = new Controller();
    const view = new View(controller);
});