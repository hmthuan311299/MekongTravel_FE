<template>
	<detail-user/>
</template>
<script>
import {mapActions} from 'vuex'
import DetailUser from '../../components/DetailUser.vue';
export default {
  	components: { DetailUser },
    data(){
		return{
			memberId:this.$route.params.id,
			member:{}
		}
	},
    methods: {
		...mapActions(['getMemberById']),
    },
	created(){
		console.log(this.memberId)
		this.memberId= this.$route.params.id
		this.getMemberById(this.memberId).then(response=>{
			if(response.ok){
				this.member = response.data
			}
		});
	},
};
</script>

<style>

</style>