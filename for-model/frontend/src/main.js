 /*eslint-disable*/
import Vue from "vue";
import singleSpaVue from "single-spa-vue";

import App from "./App.vue";
import router from "./router";
import vuetify from "./plugins/vuetify";


{{#if (isSelectedSecurity options.rootModel.toppingPlatforms)}}
import Keycloak from 'keycloak-js';
{{/if}}

Vue.config.productionTip = false;

require('./GlobalStyle.css');

{{#if (isSelectedSecurity options.rootModel.toppingPlatforms)}}
let initOptions = {
  url: `http://localhost:9090/`,
  realm: `master`,
  clientId: `master`,
  onLoad: `login-required`,
};

let keycloak = new Keycloak(initOptions);

init();

function init() {
  keycloak.init({
    onLoad: initOptions.onLoad,
  }).then(auth => {
    const ONE_MINUTE = 60000;
  
    if (!auth) {
      window.location.reload();
    } else {
      console.info(`Auth ok`);
    }

    Vue.prototype.$OAuth = keycloak

    const vueLifecycles = singleSpaVue({
      Vue,
      appOptions: {
        vuetify: vuetify,
        router,
        render: h => h(App, {
          props: {
            OAuth: keycloak,
          },
        }),
      }
    });
    
    window.setTimeout(refreshToken.bind(null, keycloak), ONE_MINUTE);

  }).catch(() => {
    console.error(`Auth Fail`);
  })
}

function refreshToken() {
  keycloak.updateToken(70).then(refreshed => {
    if (refreshed) {
      successRefresh(refreshed);
    } else {
      warnRefresh();
    }
  }).error(errorRefresh);
}

function successRefresh(refreshed) {
  console.debug(`Token refreshed ${refreshed}`);
}

function warnRefresh() {
  console.warn(`Token not refreshed, valid for 
  ${Math.round(keycloak.tokenParsed.exp + keycloak.timeSkew - new Date().getTime() / 1000)} seconds`);
}

function errorRefresh() {
  console.error('Failed to refresh token');
}
{{else}}
const vueLifecycles = singleSpaVue({
  Vue,
  appOptions: {
    vuetify: vuetify,
    router,
    render: h => h(App),
  }
});
{{/if}}

export const bootstrap = vueLifecycles.bootstrap;
export const mount = vueLifecycles.mount;
export const unmount = vueLifecycles.unmount;

<function>
window.$HandleBars.registerHelper('isSelectedSecurity', function (selectedSecurity) {
    try{
        var isSelectedSecurity = false
        for(var i=0; i<selectedSecurity.length; i++){
            if(selectedSecurity[i] == 'keycloak-security'){
                isSelectedSecurity =  true;
            }
        }

        return isSelectedSecurity;
    } catch(e){
        console.log(e)
    }
});
</function>
