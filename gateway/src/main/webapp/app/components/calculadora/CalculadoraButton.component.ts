export default {
    data() {
      return {
        showCalculator: false, // Controla la visibilidad del modal
        expression: '0',       // Inicia con "0" en la pantalla
        operator: null,        // Para el operador actual
        resultShown: false     // Para controlar si el resultado ya se mostró
      };
    },
    methods: {
      openCalculator() {
        this.showCalculator = true;
      },
      closeCalculator() {
        this.showCalculator = false;
      },
      append(number: string) {
        // Si el resultado ya fue mostrado, reinicia la expresión
        if (this.resultShown) {
          this.expression = number;
          this.resultShown = false;
        } else {
          // Si la expresión es "0", reemplaza por el número ingresado
          if (this.expression === '0' && number !== '.') {
            this.expression = number;
          } else {
            // Acumula el número
            this.expression += number;
          }
        }
      },
      clear() {
        this.expression = '0';  // Reinicia la expresión a "0"
        this.resultShown = false;
      },
      handleOperator(op: string) {
        // Si el resultado ya fue mostrado, permite seguir calculando
        if (this.resultShown) {
          this.resultShown = false;
        }
        if (this.expression !== '0') {
          this.expression += op;  // Añade el operador a la expresión
        }
      },
      calculate() {
        try {
          this.expression = eval(this.expression).toString();  // Evalúa la expresión acumulada
          this.resultShown = true;  // Indicamos que el resultado se ha mostrado
        } catch (e) {
          this.expression = 'Error';
        }
      },
      sqrt() {
        try {
          this.expression = Math.sqrt(eval(this.expression)).toString();  // Calcula la raíz cuadrada
          this.resultShown = true;
        } catch (e) {
          this.expression = 'Error';
        }
      },
      appendDecimal() {
        // Verifica que no haya más de un punto decimal en la expresión
        if (!this.expression.includes('.')) {
          this.expression += '.';
        }
      }
    }
  };
  