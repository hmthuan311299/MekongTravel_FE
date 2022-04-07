<template>
	<div class="container" v-if="member">
		<form action="" @submit.prevent="handleSubmit">
			<h1 class="text-center text-danger">Thông tin thành viên</h1>
			<div class="user-Detail">
				<div class="mr-5">
					<img
						:src="`${getUrlPicture}`" 
						alt=""
						class="user-avatar"
					>
					<input type="file" accept="image/*" @change="handleGetPicture($event)" ref="inputFile" style="display: none"/>
					<div class="mt-3 text-center">
						<v-btn color="primary" class="p-4" width="35%" @click="handleCallRefs">
							<span class="input-label">Thay đổi</span>
						</v-btn>
						<v-btn v-if="picture.base64Url" @click="handleRemove" color="error" class="p-4 ml-2" width="35%">
							<span class="input-label" >Xóa chọn</span>
						</v-btn>
					</div>
				</div>
				<div class="user-information">
					<v-text-field
						:value="member.membername"
						label="Họ Tên"
						ref="bInputName"
                        @input="name = $refs.bInputName.internalValue"
					></v-text-field>
					<v-text-field
						:value="member.memberaddress"
						label="Địa chỉ"
						ref="bInputAddress"
                        @input="address = $refs.bInputAddress.internalValue"
					></v-text-field>
					<v-text-field
						:value="member.memberyearofbirth"
						label="Năm sinh"
						ref="bInputYear"
                        @input="year = $refs.bInputYear.internalValue"
					></v-text-field>
					<div class="mt-3">
						<label for="input-name-province" class="input-label">Giới tính:</label>
						<b-form-select
							v-model="selected"
							:options="listGender"
							class="mb-3"
							value-field="memberGender"
							text-field="memberGender"
							disabled-field="notEnabled"
						></b-form-select>
               		 </div>
					<v-text-field
						:value="member.memberphone"
						label="Số điện thoại"
						ref="bInputPhone"
                        @input="phone = $refs.bInputPhone.internalValue"
					></v-text-field>
					
				</div>
			</div>
			<div class="center mt-3">
				<v-btn color="success" type="submit" class="p-4" width="18%">
					<span class="input-label">Gửi</span>
				</v-btn>
			</div>
		</form>
	</div>
    <div v-else>Không tìm thấy thành viên này</div>
</template>

<script>
import port_file from '../../port_file'
import {mapActions, mapState, mapMutations} from 'vuex'
export default {
    data(){
		return{
			selected: '',
			listGender: [
				{ memberGender: 'Nam'},
				{ memberGender:'Nữ',},
			],
			memberId:this.$route.params.id,
			member:{},
            port_file,
			picture:{
				objectFile: null,
				base64Url: '',
			},
			name:'',
			email:'',
			address:'',
			year:'',
			selected: '',
			listGender: [
				{ memberGender: 'Nam'},
				{ memberGender:'Nữ',},
			],
			phone:''
		}
	},
    methods: {
		...mapMutations(['setLoadingSuccess', 'setLoadingError', 'setPageLoading']),
		...mapActions(['getMemberById', 'updateMember']),
		handleGetPicture(e){
            var file = e.target.files[0]
            console.log(file)
            if(file){
                this.picture.objectFile = file
                const reader = new FileReader();
                reader.addEventListener("load", ()=>{
                    this.picture.base64Url = reader.result;
                }, false);
                if(file) {
                    reader.readAsDataURL(file);
                }
            }
        },
        handleCallRefs(){
            this.$refs.inputFile.click();
        },
		handleRemove(){
            this.picture.objectFile= null;
            this.picture.base64Url= ''
        },
		handleSubmit(){
            this.name = this.name ? this.name : this.member.membername;
            this.address = this.address ? this.address : this.member.memberaddress;
            this.year = this.year ? this.year : this.member.memberyearofbirth
            this.gender = this.selected ? this.selected : this.member.membergender
			this.phone = this.phone ? this.phone : this.member.memberphone
            if(this.name){
                if(this.gender){
                    if(this.address){
						var value={
							memberId: this.memberId,
							memberName: this.name,              
							memberAddress: this.address,
							memberAvatar: this.picture.objectFile,
							memberGender: this.selected,
							memberPhone: this.phone,
							memberYearOfBirth: this.year
						}
						this.updateMember(value).then(response=>{
							if(response.ok){
								let value = {
									display: true,
									message: response.message
								}
								this.setPageLoading(true)
								setTimeout(()=>{
									this.setPageLoading(false)
									this.setLoadingSuccess(value)
									setTimeout(()=>{
										this.setLoadingSuccess({display: false});
										this.name='',              
										this.address='',
										this.picture.objectFile= null,
										this.picture.base64Url = '',
										this.selected='Nam',
										this.phone=''
										this.$router.push({name:'userInformation', params:{id:this.memberId}})
									}, 1000);
								}, 1000);
							}else{
								let value ={
									display: true,
									message: response.message
								}
								this.setPageLoading(true)
								setTimeout(()=>{
									this.setPageLoading(false)
									this.setLoadingError(value)
									setTimeout(()=>{
										this.commentContent='';
										this.setLoadingError({display: false})
									}, 1500);
								}, 1000);
							}
						})
                    }else{
                        this.callFormError("Cần thêm hình ảnh địa điểm");
                    }
                }
                else{
                    this.callFormError("Cần nhập mô tả địa điểm");
                }
            }else{
                this.callFormError("Cần nhập tên địa điểm");
            }
        },
    },
	computed:{
		...mapState({
            currentMemberId: state=> state.member.currentMember.memberid
        }),
		getUrlPicture(){
			if(this.picture.base64Url) return this.picture.base64Url;
			else if(this.member.memberavatar) return `${port_file}${this.member.memberavatar}`
			else return "/img/user.12bc27af.png"
		}
	},
	created(){
		console.log(this.memberId)
		this.memberId= this.$route.params.id
		this.getMemberById(this.memberId).then(response=>{
			if(response.ok){
				this.selected = response.data.membergender
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