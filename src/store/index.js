import Vue from 'vue'
import Vuex from 'vuex'
import dataCategory from '../data/category/graphicContent.json'

Vue.use(Vuex);

export default new Vuex.Store({
	state : {
		category : dataCategory
	},
	getters: {
		category : state => state.category.children[0].artboard.children[0].group.children
	},
	actions : {
		// getProducts({commit},item){
		// }
	},
	mutations: {
		// getProductData(state){
		// }

	}
})