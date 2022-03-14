<template>
    <div class="container user-page-detailTA mt-2" v-if="getDetailCurrentTA && getDetailCurrentTA.currentDetailTA">
        <h1 >{{currentDetailTA.tourtitle}}</h1>
        <p class="card-text">Xếp hạng
					<span class="fa fa-star checked"></span>
					<span class="fa fa-star checked"></span>
					<span class="fa fa-star checked"></span>
					<span class="fa fa-star"></span>
					<span class="fa fa-star"></span>
        </p>
        <h4>Giới thiệu về {{currentDetailTA.tourtitle}}</h4>
        <div class="user-introProvince">
            <img :src="handleUrlPictureTA" class="user-img-introTA" alt="">
            <p class="ml-3">
                {{currentDetailTA.tourdesc}}
            </p>
        </div>
        <h4 class="mt-3">Vị trí</h4>
        <p><i class="fa-solid fa-location-dot"></i> {{currentDetailTA.touraddress}}</p>
        <h4>Một số hình ảnh về {{currentDetailTA.tourtitle}}:</h4>
        <div class="user-carousel-img" v-if="handleGetIMG">
            <div>
                <b-carousel
                id="carousel-1"
                v-model="slide"
                :interval="4000"
                controls
                indicators
                img-width="854"
                img-height="480"
                style="text-shadow: 1px 1px 2px #333;"
                @sliding-start="onSlideStart"
                @sliding-end="onSlideEnd"
                >
                <b-carousel-slide v-for="(item, index) in handleGetIMG" :key="index">  
                <template #img>
                    <img
                        width="100%"
                        height="720"
                        :src="item"
                        alt="image slot"
                    >
                </template>
                </b-carousel-slide>
                </b-carousel>
            </div>
        </div>
        <div class="row mt-3">
            <div class="col-md-6 user-detailTA-video">
                <h4>Video giới thiệu về {{currentDetailTA.tourtitle}}</h4>
                <iframe width="550" height="320" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen
                    :src="currentDetailTA.tourlinkvideo">
                </iframe>
            </div>
            <div class="col-md-6 user-detailTA-map">
                <h4>Ví trí {{currentDetailTA.tourtitle}} trên Google Map</h4>
                <iframe :src="currentDetailTA.tourmap" width="550" height="320" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
            </div>
        </div>
        <h4 class="text-center my-5">Đánh giá của khách du lịch khi đến {{currentDetailTA.tourtitle}}: 3.0 <span class="fa fa-star checked"></span></h4>
        <div class="mt-3">
            <h6 class="text-center text-warning">Đánh giá của bạn về {{currentDetailTA.tourtitle}}</h6>
            <router-link v-if="!isMemberLogin" to="/login" tag="button" type="button"   class="btn btn-primary mb-5">Đăng nhập để viết đánh giá</router-link>
            <div v-if="handleCheckEvalue=='false' && isMemberLogin" class="user-box-rate mx-auto">
                <div class="star-widget">
                    <input type="radio" name="rate" id="rate-5">
                    <label for="rate-5" @click="handleEvaluate(['Địa điểm rất đẹp', 5])" class="fa fa-star"></label>               
                    <input type="radio" name="rate" id="rate-4">
                    <label for="rate-4" @click="handleEvaluate(['Địa điểm đẹp', 4])" class="fa fa-star"></label>
                    <input type="radio" name="rate" id="rate-3">
                    <label for="rate-3" @click="handleEvaluate(['Địa điểm bình thường', 3])" class="fa fa-star"></label> 
                    <input type="radio" name="rate" id="rate-2">
                    <label for="rate-2" @click="handleEvaluate(['Địa điểm hơi tệ', 2])" class="fa fa-star"></label>
                    <input type="radio" name="rate" id="rate-1">
                    <label for="rate-1" @click="handleEvaluate(['Địa điểm rất tệ', 1])" class="fa fa-star"></label>
                    <div>
                        <header class="text-center my-3 text-warning font-weight-bold">{{textFeelEvalue}}</header>
                        <b-form-textarea
                            id="input-desc"
                            v-model="evaluateContent"
                            rows="6"
                            placeholder="Nhập mô tả của bạn"
                        ></b-form-textarea>
                        <div class="right my-3">
                            <v-btn color="primary" class="p-4 w-100" @click="handleGetValueEvaluate">
                                <span class="input-label">Gửi</span>
                            </v-btn>
                        </div>
                    </div>
                </div>
            </div>
            <i v-if="handleCheckEvalue=='true'">Bạn đã đánh giá địa điểm này</i>
            <div >

            </div>
        </div>
        <hr/>
            <h6 class="mx-1">Các đánh giá của thành viên</h6>
        <div v-if="handleListEvaluate.length > 0" class="user-evaluateTA mt-3">
            <div class="row">
                <div class="col-md-6" v-for="(item, index) in handleListEvaluate" :key="index">
                    <div class="user-card-evaluate p-2 mx-1" >
                        <div>
                            <div class="user-logo-name-time">
                            <div>
                                <img v-if="!item.memberavatar" src="../../assets/user-img/user.png" class="user-avatar-evaluate" alt="">
                                <img v-else :src="`${port_file}${item.memberavatar}`" class="user-avatar-evaluate" alt="">
                                {{item.membername}}
                            </div>
                            <div>
                                <i>{{item.createat}}</i>
                                <i class="fa-solid fa-bars ml-2"></i>
                            </div>
                        </div>
                        <div>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star"></span>
                            <span class="fa fa-star"></span>
                        </div>
                            <div>
                                {{item.evaluatecontent}} 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
           <div class="text-center mt-3">
                <button type="button"  class="btn btn-primary  w-25">Xem Thêm (Còn 5 đánh giá khác)</button>
           </div>
        </div>
        <div v-else class="text-center">
                <p>Oh!! Hiện tại địa điểm này vẫn chưa có đánh giá nào</p>
                <!-- <img src="../../assets/user-img/havenotcomment.png" width="40%"> -->
        </div>
        <h4>Bình luận của thành viên</h4>
        <div>
            <div>
                <div class="m-1" v-if="isMemberLogin">
                    <label for="input-desc mt-3" class="input-label">Viểt bình luận về địa điểm:</label>
                    <b-form-textarea
                        id="input-desc"
                        v-model="commentContent"
                        rows="6"
                        placeholder="Nhập nội dung của bạn"
                    ></b-form-textarea>
                    <div class="right my-3">
                        <v-btn color="primary" class="p-4" @click="handleGetValueComment">
                            <span class="input-label">Gửi</span>
                        </v-btn>
                    </div>
                </div>
                <div class="my-1" v-else>
                    <router-link tag="button"  :to="{name: 'userLogin'}" type="button" class="btn btn-primary mb-5" >Đăng nhập để viết bình luận</router-link>
                </div>
                
            </div>
            <hr/>
            <h6 class="mx-1">Các bình luận của thành viên</h6>
            <div v-if="handleComment.length>0">
                <div class="user-card-evaluate p-2 mx-1 my-5" v-for=" comment in handleComment" :key="comment.commentid">
                    <div >
                        <div class="user-logo-name-time">
                            <div>
                                <img v-if="!comment.memberavatar" src="../../assets/user-img/user.png" class="user-avatar-evaluate" alt="">
                                <img v-else :src="`${port_file}${comment.memberavatar}`" class="user-avatar-evaluate" alt="">
                                {{comment.membername}}
                            </div>
                            <i>{{comment.createat}}</i>
                        </div>
                        <div>
                            {{comment.commentcontent}}
                        </div>
                        <span class="answer">Trả lời</span>
                    </div>
                </div>
                <div class="text-center mt-3">
                    <button type="button"  class="btn btn-primary  w-25">Xem Thêm</button>
                </div>
            </div>
            <div v-else class="text-center">
                <p>Oh!! Hiện tại địa điểm này vẫn chưa có bình luận nào</p>
                <img src="../../assets/user-img/havenotcomment.png" width="40%">
            </div>
         </div>
    </div>
</template>
<script>
import port_file from '../../port_file'
import {parseJwt} from "../../helpers"
import { setToken } from "../../helpers/constans"
import {mapActions, mapState, mapGetters, mapMutations} from 'vuex'
export default {
    data (){
        return {
            items: [],
            id: this.$route.params.id,
           // memberId: this.getAllDetailTouristAttraction.currentMember.memberid || '',
            port_file,
            slide: 0,
            sliding: null,
            commentContent: '',
            listComment:'',
            textFeelEvalue:'',
            numberStar:0,
            evaluateContent:''
        }
    },
    computed:{
        ...mapState({
            historyTA: state=> state.touristAttraction.historyTA,
            currentMember: state=> state.member.currentMember
        }),
        ...mapGetters(['getDetailCurrentTA', 'isMemberLogin']),
        currentDetailTA(){
            if(this.getDetailCurrentTA.currentDetailTA){
                return this.getDetailCurrentTA.currentDetailTA
            }
        },
        handleUrlPictureTA(){
            if(this.currentDetailTA){
                return `${port_file}${this.currentDetailTA.tourpicture}`
            }
        },
        handleGetIMG(){
            if(this.getDetailCurrentTA.currentImgTA){
                var slides= []
                for(var i = 0; i< this.getDetailCurrentTA.currentImgTA.length; i++){
                     slides[i] = `${this.port_file}${this.getDetailCurrentTA.currentImgTA[i].imagepath}`
                }
                return slides;
            }
            return 0;
        },
        handleComment(){
            if(this.getDetailCurrentTA && this.getDetailCurrentTA.currentComment){
                return this.getDetailCurrentTA.currentComment;
            }
            return false;
        },
        handleListEvaluate(){
            if(this.getDetailCurrentTA && this.getDetailCurrentTA.currentEvaluate){
                return this.getDetailCurrentTA.currentEvaluate;
            }
            return false;
        },
        handleCheckEvalue(){
            if(this.getDetailCurrentTA && this.getDetailCurrentTA.checkEvaluate){
                return this.getDetailCurrentTA.checkEvaluate;
            }
            return false;
        }
    },
    methods:{
        ...mapMutations(['setLoadingSuccess', 'setLoadingError', 'setPageLoading']),
        ...mapActions(['getAllDetailTouristAttraction', 'addComment','addEvaluate', 'getcomment', 'getEvaluate']),
        onSlideStart(slide) {
        this.sliding = true
        },
        onSlideEnd(slide) {
            this.sliding = false
        },  
        handleGetValueComment(){
            if(!this.commentContent){
                let value ={
                    display: true,
                    message: "Cần nhập nội dung bình luận"
                }
                this.setPageLoading(true)
                setTimeout(()=>{
                    this.setPageLoading(false)
                    this.setLoadingError(value)
                    setTimeout(()=>{
                        this.setLoadingError({display: false})
                    }, 1500);
                }, 1000);
                
            }
            else{
                var d = new Date();
                var datestring = d.getDate()  + "-" + (d.getMonth()+1) + "-" + d.getFullYear() + " " +
                d.getHours() + ":" + d.getMinutes();
                var value ={
                    commentContent: this.commentContent,
                    memberId: this.currentMember.memberid,
                    tourId: this.id,
                    createAt: datestring,
                    memberName: this.currentMember.membername,
                    memberAvatar: this.currentMember.memberavatar || null
                }
                this.addComment(value).then(response=>{
                    if(response.ok){
                        let value ={
                            display: true,
                            message: "Bình luận thành công"
                        }
                        this.setPageLoading(true)
                        setTimeout(()=>{
                            this.setPageLoading(false)
                            this.setLoadingSuccess(value)
                            setTimeout(()=>{
                                this.commentContent='';
                                this.$router.go(this.$router.currentRoute)
                            }, 1000);
                        }, 1000);
                    }
                });
            }
        },
        handleEvaluate(value){
            this.textFeelEvalue = value[0];
            this.numberStar = value[1];
        },
        handleGetValueEvaluate(){
            if(!this.evaluateContent || this.numberStar ==0){
                let value ={
                    display: true,
                    message: "Cần nhập nội dung đánh giá"
                }
                this.setPageLoading(true)
                setTimeout(()=>{
                    this.setPageLoading(false)
                    this.setLoadingError(value)
                    setTimeout(()=>{
                        this.setLoadingError({display: false})
                    }, 1500);
                }, 1000);
            }
            else{
                var d = new Date();
                var datestring = d.getDate()  + "-" + (d.getMonth()+1) + "-" + d.getFullYear() + " " +
                d.getHours() + ":" + d.getMinutes();
                var value ={
                    numberStar: parseInt(this.numberStar),
                    evaluateContent: this.evaluateContent,
                    memberId: this.currentMember.memberid,
                    tourId: this.id,
                    createAt: datestring,
                    memberName: this.currentMember.membername,
                    memberAvatar: this.currentMember.memberavatar || null
                }
                this.addEvaluate(value).then(response=>{
                    if(response.ok){
                        let value ={
                            display: true,
                            message: "Đánh giá thành công"
                        }
                        this.setPageLoading(true)
                        setTimeout(()=>{
                            this.setPageLoading(false)
                            this.setLoadingSuccess(value)
                            setTimeout(()=>{
                                this.commentContent='';
                                this.$router.go(this.$router.currentRoute)
                            }, 1000);
                        }, 1000);
                    }
                });
            }
        },
    },
    created(){
        var tourId = this.$route.params.id;
        var getToken = localStorage.getItem(setToken) || null;
        if(getToken){
            var value = parseJwt(getToken);
            var memberId = value.memberid
            this.getAllDetailTouristAttraction({tourId, memberId})
        }
        else this.getAllDetailTouristAttraction({tourId, memberId:''})
    }
}
</script>

<style>
    .user-detailTA-video, .user-detailTA-map{
        text-align: center;
    }
    .user-avatar-evaluate{
        width: 5vh;
        height: 5vh;
    }
    .user-card-evaluate{
        border: 1px solid blue;
        border-radius: 20px;
    }
    .user-logo-name-time{
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .user-img-introTA{
        width: 40%;
        height: 28%;
    }
    .user-carousel-img{
        width: 100%;
        min-height: 720px;
    }
    .right{
        text-align: right;
    }
    .answer{
        background: rgb(0, 116, 248);
        padding: 2px;
        border-radius: 3px;
        color: #fff
    }
    .answer:hover{
        background: rgba(0, 116, 248, 0.8);
        cursor: pointer;
    }
    .user-box-rate{
        border: 2px solid blue;
        border-radius: 2px;
        max-width: 400px;
        padding: 20px 30px;
        display: flex;
        justify-content: center;
    }
    .star-widget input{
        display: none;
    }
    .star-widget label{
        font-size: 40px;
        color:#444;
        padding: 10px;
        animation: all 0.3s ease;
        float: right;
    }
    input:not(:checked) ~ label:hover,
    input:not(:checked) ~ label:hover ~ label{
        color: #fd4
    }
    input:checked ~ label{
        color: #fd4
    }
    #rate-1:checked ~ header:before{
        content: 'Địa điểm này rất tệ'
    }
    #rate-2:checked ~ header:before{
        content: 'Địa điểm này rất tệ'
    }
    #rate-3:checked ~ header:before{
        content: 'Địa điểm này rất tệ'
    }
    #rate-4:checked ~ header:before{
        content: 'Địa điểm này rất tệ'
    }
    #rate-5:checked ~ header:before{
        content: 'Địa điểm này rất tệ'
    }
</style>