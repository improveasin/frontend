import Backendless from 'backendless'
// BootstrapVue add
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'
import contentmenu from 'v-contextmenu'
import Vue from 'vue'
import VueI18n from 'vue-i18n'
import VueLineClamp from 'vue-line-clamp'
// Perfect Scrollbar Add
import vuePerfectScrollbar from 'vue-perfect-scrollbar'
import VueScrollTo from 'vue-scrollto'
import VueTailwind from 'vue-tailwind'
import App from './App'
// Breadcrumb Component Add
import Breadcrumb from './components/Common/Breadcrumb'
// Colxx Component Add
import Colxx from './components/Common/Colxx'
// Notification Component Add
import Notifications from './components/Common/Notification'
// RefreshButton Component Add
import RefreshButton from './components/Common/RefreshButton'
// Multi Language Add
import en from './locales/en.json'
import es from './locales/es.json'
// Router & Store add
import router from './router'
import store from './store'
import { getCurrentLanguage } from './utils'


Backendless.initApp('8F146EC9-7BA1-8E5E-FF1B-6EABA0EC1200', '25852AEC-8634-4D2A-A087-DF435F488BB0')

Vue.use(BootstrapVue);
Vue.use(BootstrapVueIcons);
Vue.use(VueI18n);
const messages = { en, es };
const locale = getCurrentLanguage();
const i18n = new VueI18n({
  locale: locale,
  fallbackLocale: 'en',
  messages
});
Vue.use(Notifications);
Vue.use(require('vue-shortkey'));
Vue.use(contentmenu);
Vue.use(VueScrollTo);
Vue.use(VueLineClamp, {
  importCss: true
});

Vue.component('piaf-breadcrumb', Breadcrumb);
Vue.component('b-refresh-button', RefreshButton);
Vue.component('b-colxx', Colxx);
Vue.component('vue-perfect-scrollbar', vuePerfectScrollbar);

Vue.config.productionTip = false

Vue.use(VueTailwind, {});

export default new Vue({
  i18n,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
