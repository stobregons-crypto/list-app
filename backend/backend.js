import { BootstrapCargoCorrectamente } from "./bootstrapLoaderAdvisement.js";
import { CreateNewElement, DeleteElement, checkElement } from "./noteFunctions.js";

document.addEventListener('DOMContentLoaded', () => {
    BootstrapCargoCorrectamente();
    CreateNewElement();
    DeleteElement();
    checkElement();
});
