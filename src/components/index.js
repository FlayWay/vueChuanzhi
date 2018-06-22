import loadingComponent from './Loadings.vue'

const loading = {

    install:function (Vue) {

      Vue.component('Loading',loadingComponent)
    }
}

export default loading;


