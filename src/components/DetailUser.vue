<template>
    <div class="container" v-if="member">
		<h1 class="text-center text-danger">Thông tin thành viên</h1>
		<div class="user-Detail">
			<div class="mr-5">
				<img v-if="member.memberavatar"
					:src="`${port_file}${member.memberavatar}`" 
					alt=""
					class="user-avatar"
				>
                <img v-else
					src="../assets/user-img/user.png" 
					alt=""
					class="user-avatar"
				>
			</div>
			<div class="user-information">
				<v-text-field
					:value="member.membername"
					label="Họ Tên"
					readonly
				></v-text-field>
				<v-text-field
					:value="member.memberemail"
					label="Email"
					readonly
				></v-text-field>
				<v-text-field
					:value="member.memberaddress"
					label="Địa chỉ"
					readonly
				></v-text-field>
				<v-text-field
					:value="member.memberyearofbirth"
					label="Năm sinh"
					readonly
				></v-text-field>
				<v-text-field
					:value="member.membergender"
					label="Giới Tính"
					readonly
				></v-text-field>
				<v-text-field
                    :value="member.memberphone"
                    label="Số điện thoại"
                    readonly
				></v-text-field>
			</div>
		</div>
		<div class="center mt-3" v-if="currentMemberId == member.memberid">
			<v-btn color="success" type="submit" class="p-4" width="18%" @click="handleRouterPush(member.memberid)">
				<span class="input-label">Chỉnh sửa</span>
			</v-btn>
		</div>
	</div>
    <div v-else>Không tìm thấy thành viên này</div>
</template>

<script>
import port_file from '../port_file'
import {mapActions, mapState, mapMutations} from 'vuex'
export default {
   
    data(){
		return{
			memberId:this.$route.params.id,
			member:{},
            port_file
		}
	},
    computed:{
        ...mapState({
            currentMemberId: state=> state.member.currentMember.memberid
        })
    },
    methods: {
		...mapActions(['getMemberById']),
		handleRouterPush(value){
			this.$router.push({name: 'userUpdateInformation', params:{id: value}})
		}
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

<style scoped>
.container {
  padding: 0 100px;
}
@media (max-width: 768px) {
  .container {
    padding: 0 20px;
  }
}
.input-label {
  font-size: 20px;
}
.user-Detail{
	margin: 0 auto;
	display:flex;
	justify-content: center;
	width: 100%;
}
.user-information{
	width: 40%;
}
.user-avatar{
    height: 400px;
    width:400px
}
@media(max-width: 1440px){
	.user-avatar{
		height: 400px;
		width:400px
	}
}
@media(max-width: 1280px){
	.user-avatar{
		height: 300px;
		width:300px
	}
}
@media(max-width: 720px){
	.user-avatar{
		height: 240px;
		width:240px
	}
	.user-Detail{
		margin: 0 auto;
		display: unset;
		width: 100%;
		text-align: center;
	}
	.user-information{
		margin: 0 auto;
		width: 80%;
	}
}
</style>