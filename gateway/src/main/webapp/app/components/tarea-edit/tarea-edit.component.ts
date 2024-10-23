import { defineComponent } from 'vue';
import { Tarea } from '@/shared/model/tarea.model';

export default defineComponent({
  name: 'TareaEdit',
  props: {
    tarea: {
      type: Object as () => Tarea,
      required: true,
    },
    readonly: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    guardarTarea() {
      this.$emit('update:tarea', this.tarea);
    },
    cancelarTarea() {
      this.$emit('cancel:tarea');
    },
    isNombreValid() {
      return this.tarea?.nombre && this.tarea.nombre.length >= 3 && this.tarea.nombre.length <= 50;
    },
    isDescripcionValid() {
      return this.tarea?.descripcion && this.tarea.descripcion.length >= 3 && this.tarea.descripcion.length <= 100;
    },
    isDateValid() {
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      return this.tarea?.fechaLimite && new Date(this.tarea.fechaLimite) >= today;
    },
    isFormValid() {
      return this.isNombreValid() && this.isDescripcionValid() && this.isDateValid();
    },
  },
});