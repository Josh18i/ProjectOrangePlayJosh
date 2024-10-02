import { Page } from "playwright";
import { expect } from "playwright/test";
import * as loginLoc from "../locators/loginLoc.json";

export default class LoginPage {
    private page:Page;

    constructor(page:Page){
        this.page = page;
    }

    async ingresarDatos(username: string, password: string): Promise<void> {
        await this.page.waitForTimeout(5000);
        await this.page.locator(loginLoc.inputUsername).click();
        await this.page.locator(loginLoc.inputUsername).fill(username);
        await this.page.locator(loginLoc.inputPassword).click();
        await this.page.locator(loginLoc.inputPassword).fill(password);
    }

    async iniciarSesion(): Promise<void> {
        await this.page.locator(loginLoc.btnLogin).click();
        await this.page.waitForTimeout(5000); // Esperar 5 segundos (5000 ms)
    }

    async mostrarMenu(): Promise<boolean> {
        return await this.page.locator(loginLoc.lblDashboard).isVisible();
    }
}
