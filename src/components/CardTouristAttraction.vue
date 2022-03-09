<template>
  <div class="user-list-touristAttraction">
		<div 
			v-for="(card, index) in listTA" :key="index" class="card mb-3" style="width: 24rem;" 
			@click="handleRouterPush(card.provincetitle, card.tourid)"
		>
			<img :src="`${port_file}${card.tourpicture}`" class="card-img-top" alt="...">
			<div class="card-body">
				<h5 class="card-title">{{card.tourtitle}}</h5>
				<p class="card-text"><i class="fa-solid fa-map-location text-primary"></i> {{card.touraddress}}</p>
				<p class="card-text"><i class="fa-solid fa-city text-primary"></i> {{card.provincetitle}}</p>
				<p class="card-text">Xếp hạng
					<span class="fa fa-star checked"></span>
					<span class="fa fa-star checked"></span>
					<span class="fa fa-star checked"></span>
					<span class="fa fa-star"></span>
					<span class="fa fa-star"></span>
				</p>
				<a class="btn btn-primary text-white w-100">Xem thử</a>
			</div>
		</div>	
	</div>
</template>

<script>
import port_file from '../port_file'
import {removeVietnameseFromString} from '../helpers'
import {mapState} from 'vuex'
export default {
    name: 'card-touristAttraction',
	data(){
		return{
			port_file,
		}
	},
	props:{
		listTA: []
	},
	computed:{
	},
	methods:{
		handleremoveVietnameseProvinceTitle(provinceTitle){
			return removeVietnameseFromString(provinceTitle);
		},
		handleRouterPush(provincetitle, tourid){
			this.$router.push({path: `/province/${this.handleremoveVietnameseProvinceTitle(provincetitle)}/listAllTouristAttraction/detailTouristAttraction/${tourid}`})
		}
	}
}
</script>

<style>
.user-list-touristAttraction{
	width: 85%;
	margin: 0 auto;
	display:flex;
	justify-content: space-evenly;
	flex-wrap: wrap;
}
.checked{
	color: yellow;
}
.card:hover{
	box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;
	top: -10px;
	transition: 0.6s ease;
	animation: 0.4s ease moveCard;
}
@keyframes moveCard {
	from{
		top: 0px;
	}
	to{
		top: -10px
	}
}
.card-img-top{
	height: 32vh
}
</style>