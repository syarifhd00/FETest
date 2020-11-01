<template>
	<section>
		<Navbar/>
		<div class="main">
			<div class="row">
				<div class="col-md-2">
						<b-list-group v-for="item in category" :key="item.id">
							<Category :item = "item" />
						</b-list-group>
				</div>
				<div class="col">

				</div>
			</div>
		</div>
	</section>
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/Navbar.vue'
import Category from '@/components/Category.vue'
import {mapGetters} from 'vuex'

export default {
	name: 'Dashboard',
		components: {
		Navbar,
		Category
	},
	computed:{
		...mapGetters(['category'])
	},
	mounted(){
		console.log(this.category);
	}
}
</script>
<style>
</style>
