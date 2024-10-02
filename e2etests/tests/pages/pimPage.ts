import { Page } from "playwright";
import { expect } from "playwright/test";
import * as pimgLoc from "../locators/pimgLoc.json";

export default class PimPage {
    private page: Page;

    constructor(page: Page) {
        this.page = page;
    }


    async ingresarPim(): Promise<void> {
        await this.page.locator(pimgLoc.btnPim).click();
        await this.page.waitForTimeout(5000); // Esperar 5 segundos
    }

    async registrarEmpleado(firstname: string, middlename: string, lastname: string): Promise<void> {
        await this.page.locator(pimgLoc.btnAdd).click();
        await this.page.waitForTimeout(5000); 
        await this.page.locator(pimgLoc.inputFirstName).fill(firstname);
        await this.page.locator(pimgLoc.inputMiddleName).fill(middlename);
        await this.page.locator(pimgLoc.inputLastName).fill(lastname);
        await this.page.locator(pimgLoc.inputID).fill(''); // Limpiar el campo ID
        await this.page.locator(pimgLoc.btnSubmit).click();
        await this.page.waitForTimeout(10000); 
    }

    async consultarEmpleado(nombreEmpleado: string): Promise<boolean> {
        await this.page.locator(pimgLoc.inputNameSearch).fill(nombreEmpleado);
        await this.page.locator(pimgLoc.btnSearch).click();
        await this.page.waitForTimeout(5000); 
        
        const txtName = `//div[contains(text(), '${nombreEmpleado}')]`;
        return await this.page.locator(txtName).isVisible();
    }
}
