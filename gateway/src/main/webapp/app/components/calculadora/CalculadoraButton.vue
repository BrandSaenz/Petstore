<template>
    <div>
      <!-- Botón de la Calculadora -->
      <button class="calculator-btn" @click="openCalculator">
        +/-
      </button>

  
      <!-- Modal de la Calculadora -->
      <div v-if="showCalculator" class="full-screen-modal">
        <div class="modal-content">
          <span class="close" @click="closeCalculator">&times;</span>
          <!-- Fondo personalizado con color #593196 -->
          <div class="calculator-background">
            <!-- Pantalla de la Calculadora -->
            <div class="calculator-screen">{{ expression }}</div>
            <!-- Botones de la calculadora -->
            <div class="calculator-buttons">
                <!-- Botón con fondo rojo -->
                <button class="red-button" @click="clear">Clear</button>
                <button class="mas" @click="handleOperator('+')">+</button>

                <button class="por" @click="handleOperator('*')">×</button>
                <button class= "menos" @click="handleOperator('-')">-</button>

              <button @click="append('1')">1</button>
              <button @click="append('2')">2</button>
              <button @click="append('3')">3</button>
              <button class= "entre" @click="handleOperator('/')">÷</button>
              
  
              <button @click="append('4')">4</button>
              <button @click="append('5')">5</button>
              <button @click="append('6')">6</button>
              <button class="raiz" @click="sqrt()">√</button>
  
              <button @click="append('7')">7</button>
              <button @click="append('8')">8</button>
              <button @click="append('9')">9</button>
              <button class="punto" @click="appendDecimal()">.</button>
              
  
              
              <button @click="append('0')">0</button>
              
              
  
              
              <button class="igual" @click="calculate()">=</button>


            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script lang="ts" src="./CalculadoraButton.component.ts"></script>
  
  <style scoped>
    .calculator-btn {
      position: fixed;
      bottom: 90px;
      right: 20px;
      background-color: #593196;
      color: white;
      border: none;
      border-radius: 50%;
      width: 60px;
      height: 60px;
      font-size: 24px;
      cursor: pointer;
      box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
      z-index: 999;
    }
  
    .full-screen-modal {
    display: flex; /* Utiliza flexbox para alinear el contenido */
    position: fixed; /* Fija el modal en la ventana, sin depender del scroll */
    z-index: 1000; /* Aparece sobre otros elementos */
    left: 0;
    top: 0;
    width: 100%; /* Ocupa todo el ancho */
    height: 100%; /* Ocupa toda la altura */
    background-color: rgba(0, 0, 0, 0.5); /* Fondo semitransparente */
    justify-content: center; /* Centra el contenido horizontalmente */
    align-items: center; /* Centra el contenido verticalmente */
    }

  
    .modal-content {
    background-color: #b784d9; /* Fondo blanco para el contenido del modal */
    border-radius: 50px; /* Bordes redondeados de 50px */
    width: 100%; /* Ocupa todo el ancho disponible */
    max-width: 330px; /* Ancho máximo limitado a 350px */
    height: 500px; /* Altura fija de 480px */
    text-align: center; /* Centra el texto horizontalmente */
    position: relative; /* Posicionamiento relativo para elementos hijos */
    z-index: 1001; /* Se superpone al fondo del modal */
    box-shadow: 0px 4px 10px rgba(0, 0, 1, 2.8); /* Sombreado para darle efecto de elevación */
    }

  
    .close {
      position: absolute;
      top: 12px;
      right: 20px;
      color: #ffffff;
      font-size: 40px;
      cursor: pointer;
    }
  
    .close:hover {
      color: rgb(224, 11, 11);
    }
  
    .calculator-background {
      background-color: #b784d9;
      height: 500%;
      border-radius: 50px;
    }
  
    .calculator-screen {
  background-color: #ffffff; /* Fondo negro para la pantalla de la calculadora. */
  color: #030303; /* El texto dentro de la pantalla será blanco. */
  font-size: 25px; /* El tamaño de la fuente del texto en la pantalla es de 32 píxeles, haciendo que los números sean grandes y visibles. */
  text-align: right; /* El texto (los números) se alinean a la derecha dentro de la pantalla. */
  padding: 10px; /* Se agrega un relleno de 10 píxeles alrededor del contenido (los números) dentro de la pantalla. */
  border-radius: 25px; /* Se aplica un borde redondeado de 10 píxeles a las esquinas de la pantalla. */
  margin-top: 55px; /* Aumenta la distancia desde la parte superior */
  margin-left: 16px; /* Ajusta el margen izquierdo */
  margin-right: 10px; /* Ajusta el margen derecho */
  margin-bottom: 18px; /* Mantén el margen inferior en 20px (puedes ajustarlo si es necesario) */
  width: 90%; /* La pantalla ocupará el 90% del ancho del contenedor donde se encuentra. */
  height: 70px; /* La altura de la pantalla es fija en 80 píxeles, lo que le da una forma rectangular horizontal. */
  display: flex; /* Se usa "flex" para controlar la disposición de los elementos dentro de la pantalla. */
  justify-content: flex-end; /* Los elementos dentro de la pantalla (números) se alinearán al final del eje horizontal, lo que significa que estarán a la derecha. */
  align-items: center; /* Los elementos dentro de la pantalla se alinearán verticalmente en el centro. */
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 2.0); /* Se aplica una sombra interna en la pantalla, con un leve desenfoque y una ligera transparencia para dar un efecto de profundidad. */
}
  
    .calculator-buttons button {
    width: 60px;  /* Define el ancho de los botones, en este caso 50 píxeles, haciéndolos más pequeños */
    height: 55px; /* Define la altura de los botones, también en 50 píxeles para que sean más pequeños */
    margin: 6px;  /* Establece un margen de 4 píxeles alrededor de cada botón, lo que reduce el espacio entre los botones */
    font-size: 18px;  /* Define el tamaño de la fuente dentro de los botones, en este caso, 18 píxeles, haciéndola más pequeña */
    border: none;  /* Elimina el borde alrededor de los botones */
    border-radius: 20px;  /* Redondea las esquinas de los botones con un radio de 10 píxeles */
    background-color: #f8e5fc;  /* Establece el color de fondo de los botones en blanco */
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.5);  /* Aplica una sombra leve a los botones, con 4 píxeles de desplazamiento vertical y 6 píxeles de desenfoque */
    cursor: pointer;  /* Cambia el cursor a una mano cuando pasas sobre el botón, indicando que es interactivo */
    }
    

    .calculator-buttons button:active {
      background-color: #ffffff;
    }


/* Estilo específico para el botón rojo */
    .red-button {
    background-color: rgb(255, 86, 86) !important; /* Asegura que el fondo rojo se aplique */
    }

    /* Estilo específico para el botón rojo */
    .mas {
    background-color: rgb(121, 145, 253) !important; /* Asegura que el fondo rojo se aplique */
    }

    /* Estilo específico para el botón rojo */
    .por {
    background-color: rgb(121, 145, 253) !important; /* Asegura que el fondo rojo se aplique */
    }

    /* Estilo específico para el botón rojo */
    .menos {
    background-color: rgb(121, 145, 253) !important; /* Asegura que el fondo rojo se aplique */
    }

    /* Estilo específico para el botón rojo */
    .entre {
    background-color: rgb(121, 145, 253) !important; /* Asegura que el fondo rojo se aplique */
    }

    /* Estilo específico para el botón rojo */
    .raiz {
    background-color: rgb(121, 145, 253) !important; /* Asegura que el fondo rojo se aplique */
    }

    /* Estilo específico para el botón rojo */
    .punto {
    background-color: rgb(121, 145, 253) !important; /* Asegura que el fondo rojo se aplique */
    }

    .igual {
    background-color: rgb(150, 240, 170) !important; /* Estilo del botón igual */
    width: 208px !important; /* Ajusta el ancho del botón para que abarque el espacio de dos botones */
    margin-left: 5px !important; 
    margin-right: 1px !important; 
    }


  </style>
  