import { defineComponent, provide } from 'vue';
import { useI18n } from 'vue-i18n';
import Ribbon from '@/core/ribbon/ribbon.vue';
import JhiFooter from '@/core/jhi-footer/jhi-footer.vue';
import JhiNavbar from '@/core/jhi-navbar/jhi-navbar.vue';
import LoginForm from '@/account/login-form/login-form.vue';

import { useAccountStore } from '@/shared/config/store/account-store'; // Importa el store de cuenta

import CalculadoraButton from './components/calculadora/CalculadoraButton.vue';

import { useAlertService } from '@/shared/alert/alert.service';

import '@/shared/config/dayjs';

export default defineComponent({
  compatConfig: { MODE: 3 },
  name: 'App',
  components: {
    ribbon: Ribbon,
    'jhi-navbar': JhiNavbar,
    'login-form': LoginForm,
    'jhi-footer': JhiFooter,
    'CalculadoraButton': CalculadoraButton,  
  },
  setup() {
    const accountStore = useAccountStore(); // Obtenemos el estado del store de la cuenta
    const showCalculator = false; // Estado para controlar la visibilidad del modal de la calculadora
    provide('alertService', useAlertService());

    return {
      t$: useI18n().t,
      accountStore, // Acceso al estado del store
      showCalculator, // Retornamos para que esté disponible en el template
    };
  },
});
