// Función para actualizar los colores y mostrar el resultado
function updateColor() {
    let color1 = document.getElementById("primarySecondary1").value;
    let color2 = document.getElementById("primarySecondary2").value;

    // Obtener elementos de los cuadros
    let colorBox1 = document.getElementById("color1");
    let colorBox2 = document.getElementById("color2");
    let resultBox = document.getElementById("result");

    // Cambiar el color de fondo de los cuadros según la selección del usuario
    colorBox1.style.backgroundColor = color1.toLowerCase();
    colorBox2.style.backgroundColor = color2.toLowerCase();
    
    // Obtener el resultado de la mezcla de colores
    let mixedColor = mixColors(color1, color2);
    document.getElementById("resultType").textContent = mixedColor.name;
    resultBox.style.backgroundColor = mixedColor.name.toLowerCase();

    // Mostrar el nombre del grupo del color en los cuadros
    document.getElementById("colorType1").textContent = getColorGroup(color1);
    document.getElementById("colorType2").textContent = getColorGroup(color2);
        

    // Mostrar información en la consola
    console.log(`Color 1: ${color1}, Color 2: ${color2}, Resultado: ${mixedColor.name}`);
}

// Función para calcular el color resultante de la mezcla
function mixColors(color1, color2) {
    let secondaryColors = {
        "Rojo": {
            "Amarillo": "Naranja",
            "Azul": "Morado",
        },
        "Amarillo": {
            "Rojo": "Naranja",
            "Azul": "Verde"
        },
        "Azul": {
            "Rojo": "Morado",
            "Amarillo": "Verde",
        }
    };

    let mixedColorName = secondaryColors[color1][color2];
    if (mixedColorName) {
        return {
            name: mixedColorName,
        };
    } else if (color1 === color2) {
        return {
            name: color1,
        };
    } else {
        return {
            name: "UPS, no lo sé",
        };
    }
}

// Función para obtener el grupo del color
function getColorGroup(color) {
    let primaryColors = ["Rojo", "Amarillo", "Azul"];
    if (primaryColors.includes(color,)) {
        return "Primario";
    } else {
        return "Secundario";
    }
}
// Mostrar un cuadro de diálogo al cargar la página
window.onload = function() {
    // Cuadro de diálogo de bienvenida
    alert("¡Bienvenido! Vamos a aprender sobre los colores.");

    // Llamar a la función updateColor al cargar la página
    updateColor();
};
// Mostrar un cuadro de diálogo al cargar la página
window.onload = function() {
    // Cuadro de diálogo de bienvenida
    alert("¡Bienvenido! Vamos a aprender sobre los colores.");

    // Cuadro de diálogo prompt para obtener el nombre del usuario
    let nombreUsuario = prompt("Por favor, introduce tu nombre:");

    // Verificar si el usuario proporcionó un nombre
    if (nombreUsuario) {
        // Mostrar un mensaje personalizado con el nombre del usuario
        alert(`Hola, ${nombreUsuario}! Bienvenido a Aprendamos los colores.`);
    } else {
        // Mostrar un mensaje genérico si no se proporcionó un nombre
        alert("Hola! Bienvenido a Aprendamos los colores.");
    }

    // Cuadro de diálogo confirm para obtener la confirmación del usuario
    let confirmacion = confirm("¿Estás listo para empezar?");

    // Verificar si el usuario confirmó
    if (confirmacion) {
        alert("¡Genial! Empecemos a aprender sobre los colores.");
    } else {
        alert("¡No hay problema! Puedes aprender sobre los colores cuando estés listo.");
    }

    // Mostrar información en la consola
    console.log("¡Se ha mostrado correctamente la información de bienvenida y los cuadros de diálogo!");
};

