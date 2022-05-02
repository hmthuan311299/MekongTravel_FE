<template>
    <div class="user-list-touristAttraction">
		<div 
			v-for="(card, index) in listTA" :key="index" class="card mb-3" style="width: 24rem;"
			@click="handleRouterPush(card.provincetitle, card.tourid)"
		>
			<img  :src="`${port_file}${card.tourpicture}`" class="card-img-top" alt="...">
			<div class="card-body">
				<div>
					<h5 class="card-title">{{card.tourtitle}}</h5>
					<p class="card-text" style="height: 3rem"><i class="fa-solid fa-map-location text-primary"></i> {{card.touraddress}}</p>
					<p class="card-text"><i class="fa-solid fa-city text-primary"></i> {{card.provincetitle}}</p>
					<div class="card-text" v-if="card.avg" style="margin-bottom: 16px">
						Xếp hạng 
						<span v-html="getStars(card.avg)"></span>
						({{formatNumberStar(card.avg)}})
					</div>
					<p class="card-text" v-else>
						Xếp hạng: <i>Hiện tại chưa có đánh giá nào</i>
					</p>
					
					<a class="btn btn-primary text-white w-100">Xem thử</a>
				</div>
			</div>
		</div>	
	</div>
</template>

<script>
import port_file from '../port_file'
import {removeVietnameseFromString} from '../helpers'
import {mapActions, mapMutations} from 'vuex'
export default {
    name: 'card-touristAttraction',
	data(){
		return{
			port_file,
		}
	},
	props:{
		listTA: [],
	},
	methods:{
		handleremoveVietnameseProvinceTitle(provinceTitle){
			return removeVietnameseFromString(provinceTitle);
		},
		handleRouterPush(provincetitle, tourid){
			this.$router.push({path: `/province/${this.handleremoveVietnameseProvinceTitle(provincetitle)}/listAllTouristAttraction/detailTouristAttraction/${tourid}`})
		},
		formatNumberStar(number){
			return parseFloat(number).toFixed(1)
		},
		getStars(rating) {
			// Round to nearest half
			rating = Math.round(rating * 2) / 2;
			let output = [];
			// Append all the filled whole stars
			for (var i = rating; i >= 1; i--)
				output.push('<i class="fa fa-star" aria-hidden="true" style="color: gold;"></i>&nbsp;');
			// If there is a half a star, append it
			if (i == .5) output.push('<i class="fa-solid fa-star-half-stroke" style="color:yellow;"></i>&nbsp;');
			// Fill the empty stars
			for (let i = (5 - rating); i >= 1; i--)
				output.push('<i class="fa fa-star" aria-hidden="true"></i>&nbsp;');
			return output.join('');
		},
	},computed:{
		
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