# tarea-clase-2

## Formulario interactivo con validación básica

### Objetivo
Practicar la declaración de variables (let, const), el uso de operadores, funciones, DOM y eventos en un pequeño formulario que valide datos y muestre un mensaje dinámicamente.

### Procedimiento
Un documento HTML con:
- Un \<h1> que diga *Registro al evento*.
- Un formulario <form> con:
    - Campo de texto para “Nombre”.
    - Campo numérico para “Edad”.
    - Botón para enviar.

Un documento JavaScript con:
- Seleccionar los elementos del formulario usando document.querySelector.
- Una función que: 
    - Obtiene los valores ingresados.
    - Usa un operador de comparación (>=) para verificar si la edad es mayor o igual a 18.
    - Muestra un mensaje en pantalla:
        - Si cumple la condición: “✅ Bienvenido, [nombre], tienes acceso al evento.”
        - Si no la cumple: “❌ Lo sentimos, [nombre], debes ser mayor de edad.”
- Un addEventListener para que la función se ejecute cuando se envíe el formulario.
- Un event.preventDefault() para evitar el comportamiento por defecto del formulario.

Un documento CSS con:
- Un estilo que: 
    - Coloree el mensaje en verde si es positivo.
    - Coloree en rojo si es negativo.
- classList.add() y classList.remove() para aplicar estas clases dinámicamente.

- - - 

https://github.com/Filipc-zak/tarea-clase-2.git

- - - 

!("C:\Users\Usuario\Desktop\React\tarea-clase-2\img\1.png")
!("C:\Users\Usuario\Desktop\React\tarea-clase-2\img\2.png")
!("C:\Users\Usuario\Desktop\React\tarea-clase-2\img\3.png")

- - -

Creditos: Bruno Borelli, Curso: 999201563, Módulo 1 Unidad 2.

