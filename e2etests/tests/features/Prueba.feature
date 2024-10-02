
Feature: Gestión de Empleados en OrangeHRM
  Login y registrar empleado en el sistema

  
  Scenario: Iniciar sesión exitosamente
    Given El usuario ha ingresado el nombre de usuario "Admin" y la contraseña "admin123" correctos
    When el usuario inicie sesión
    Then se debe mostrar el menú principal del sistema

  
  Scenario: Registrar un empleado
    Given El usuario "Admin" "admin123" ha iniciado sesión exitosamente
    And accede al módulo PIM
    When se completan y envían los datos del nuevo empleado "Morfiso" "Paco" "Gómez"
    Then el sistema debe mostrar al empleado registrado correctamente
