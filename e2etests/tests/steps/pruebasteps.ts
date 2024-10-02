
import { Given, When, Then } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { getPage } from "../../corelib/corelib.spec";
import LoginPage from "../pages/loginPage";
import PimPage from "../pages/pimPage";

let loginPage: LoginPage;
let pimPage: PimPage;

loginPage = new LoginPage(getPage());
pimPage = new PimPage(getPage());

interface TestContext {
  nombre: string;
}

const context: TestContext = {
  nombre: '',
};

Given('El usuario ha ingresado el nombre de usuario {string} y la contraseña {string} correctos', async function (username: string, password: string) {
  await loginPage.ingresarDatos(username, password);
});

When('el usuario inicie sesión',async function () {
  await loginPage.iniciarSesion();
});


Then('se debe mostrar el menú principal del sistema',async function () {
  await loginPage.mostrarMenu();
});


Given('El usuario {string} {string} ha iniciado sesión exitosamente',async function (username: string, password: string) {
  await loginPage.ingresarDatos(username, password);
});


Given('accede al módulo PIM', async function () {
 await pimPage.ingresarPim();
});


When('se completan y envían los datos del nuevo empleado {string} {string} {string}',async function (nombre: string, segundonombre: string, apeliido: string) {
  context.nombre=nombre
  await pimPage.registrarEmpleado(nombre,segundonombre,apeliido);
});


Then('el sistema debe mostrar al empleado registrado correctamente',async function () {
  await pimPage.consultarEmpleado(context.nombre);
});

