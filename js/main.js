import * as ui from "./ui.js";


const homePageHandler = (event) => {
    ui.renderHomePage();
}

const addHomePageListener = () => {
    const home = document.querySelector(".home-page");
    home.addEventListener("click", homePageHandler);
}

const displayMainPage = () => {
    ui.renderHomePage();
}      




const drugsPageHandler = (event) => {
    ui.renderDrugsPage();
}

const addDrugsPageListener = () => {
    const drugs = document.querySelector(".drugs");
    drugs.addEventListener("click", drugsPageHandler);
}

const clinicPageHandler = () => {
    ui.renderRehabPage();
}
const addClinicPageListener = () => {
    const clinic = document.querySelector(".rehab");
    clinic.addEventListener("click", clinicPageHandler);
}

const alcoholPageHandler = (event) => {
    ui.renderAlcoholismPage();
}

const addAlcoholismPageListener = () => {
    const alcohol = document.querySelector(".alcohol");
    alcohol.addEventListener("click", alcoholPageHandler);
}




const gamblingPageHandler = (event) => {
    ui.renderGamblingPage();
}

const addGamblingPageListener = () => {
    const gamble = document.querySelector(".gambling");
    gamble.addEventListener("click", gamblingPageHandler);
}

const rehabPageHandler = (event) => {
    ui.renderRehabPage();
}

const addRehabPageListener = () => {
    const rehab = document.querySelector(".rehab");
    rehab.addEventListener("click", rehabPageHandler);
}

const helpPageHandler = (event) => {
    ui.renderHelpPage();
}

const addHelpPageListener = () => {
    const help = document.querySelector(".help");
    help.addEventListener("click", helpPageHandler);
}







export const init = () => {
    addHomePageListener();
    displayMainPage();
    addAlcoholismPageListener();
    addDrugsPageListener();
    addGamblingPageListener();
    addRehabPageListener();
    addHelpPageListener();
    addClinicPageListener();
}