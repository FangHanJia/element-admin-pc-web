import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

// 设置属性:state
const state = {
    count : 0,
    collapse:false
}
// 设置方法：mutaions
const mutations = {
    increment(_state,msg){
        _state.count += msg;
        console.log(msg)
    }
}
// 执行方法 
const actions = {
    increment(_mutations,msg){
        _mutations.commit('increment',msg);
    }
}
// 暴露
const store = new Vuex.Store({
    state,
    mutations,
    actions
})
export default store;