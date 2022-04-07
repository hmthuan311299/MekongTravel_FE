<template>
    <div class="container user-page-detailTA mt-2" v-if="detailTA">
        <h1 >{{detailTA.tourtitle}}</h1>
        <div class="card-text" v-if="detailTA.avg" style="margin-bottom: 16px">
            Xếp hạng 
            <span v-html="getStars(detailTA.avg)"></span>
            ({{parseFloat(detailTA.avg).toFixed(1)}})
        </div>
        <p class="card-text" v-else>
						Xếp hạng: <i>Hiện tại chưa có đánh giá nào</i>
					</p>
        <h4>Giới thiệu về {{detailTA.tourtitle}}</h4>
        <div class="user-introProvince" >
            <img v-if="detailTA.tourpicture" :src="`${port_file}${detailTA.tourpicture}`" class="user-img-introTA" alt="">
            <p class="ml-3">
                {{detailTA.tourdesc}}
            </p>
        </div>
        <h4 class="mt-3">Địa chỉ</h4>
        <p><i class="fa-solid fa-location-dot"></i> {{detailTA.touraddress}}</p>
        <h4>Một số hình ảnh về {{detailTA.tourtitle}}:</h4>
        <div class="user-carousel-img" v-if="imageTA">
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
                <b-carousel-slide v-for="(item, index) in imageTA" :key="index">  
                <template #img>
                    <img
                        width="100%"
                        height="720"
                        :src="`${port_file}${item.imagepath}`"
                        alt="image slot"
                    >
                </template>
                </b-carousel-slide>
                </b-carousel>
            </div>
            </div>
            <div class="user-detailTA-video">
                <h4>Video giới thiệu về {{detailTA.tourtitle}}</h4>
                <!-- <div v-html="detailTA.tourlinkvideo">
                </div> -->
                <video-embed :src="detailTA.tourlinkvideo"></video-embed>
                
            </div>
            <div class="user-detailTA-map">
                <h4>Ví trí {{detailTA.tourtitle}} trên Google Map</h4>
                <div v-html="detailTA.tourmap">
                </div>
            </div>
            <h4 class="text-center my-5">Đánh giá của khách du lịch khi đến {{detailTA.tourtitle}}: {{parseFloat(detailTA.avg).toFixed(1)}} <span class="fa fa-star checked"></span></h4>
            <div class="mt-3">
            <h6 class="text-center text-warning">Đánh giá của bạn về {{detailTA.tourtitle}}</h6>
            <router-link v-if="!isMemberLogin" to="/login" tag="button" type="button"   class="btn btn-primary mb-5">Đăng nhập để viết đánh giá</router-link>
            <div v-if="!isWriteEvaluate && isMemberLogin" id="user-box-rate" class="user-box-rate mx-auto">
                <div class="star-widget">
                    <input type="radio" name="rate" id="rate-5">
                    <label for="rate-5" @click="handleGetValueEvaluate(['Địa điểm rất đẹp', 5])" class="fa fa-star"></label>               
                    <input type="radio" name="rate" id="rate-4">
                    <label for="rate-4" @click="handleGetValueEvaluate(['Địa điểm đẹp', 4])" class="fa fa-star"></label>
                    <input type="radio" name="rate" id="rate-3">
                    <label for="rate-3" @click="handleGetValueEvaluate(['Địa điểm bình thường', 3])" class="fa fa-star"></label> 
                    <input type="radio" name="rate" id="rate-2">
                    <label for="rate-2" @click="handleGetValueEvaluate(['Địa điểm hơi tệ', 2])" class="fa fa-star"></label>
                    <input type="radio" name="rate" id="rate-1">
                    <label for="rate-1" @click="handleGetValueEvaluate(['Địa điểm rất tệ', 1])" class="fa fa-star"></label>
                    <div>
                        <header class="text-center my-3 text-warning font-weight-bold">{{textFeelEvalue}}</header>
                        <b-form-textarea
                            id="input-desc"
                            v-model="txtEvaluate"
                            rows="6"
                            placeholder="Nhập mô tả của bạn"
                        ></b-form-textarea>
                        <div class="right my-3">
                            <v-btn color="primary" class="p-4 w-100" @click="handleWriteEvaluate">
                                <span class="input-label">Gửi</span>
                            </v-btn>
                        </div>
                    </div>
                </div>
            </div>
            <div v-if="isUpdateEvaluate" id="user-box-rate" class="user-box-rate mx-auto">
                <div class="star-widget">
                    <input type="radio" name="rate" id="rate-5" :checked="currentEvaluate.evaluatestar == 5">
                    <label for="rate-5" @click="handleGetValueEvaluate(['Địa điểm rất tuyệt vời', 5])" class="fa fa-star"></label>               
                    <input type="radio" name="rate" id="rate-4" :checked="currentEvaluate.evaluatestar == 4">
                    <label for="rate-4" @click="handleGetValueEvaluate(['Địa điểm tuyệt vời', 4])" class="fa fa-star"></label>
                    <input type="radio" name="rate" id="rate-3" :checked="currentEvaluate.evaluatestar == 3">
                    <label for="rate-3" @click="handleGetValueEvaluate(['Địa điểm bình thường', 3])" class="fa fa-star"></label> 
                    <input type="radio" name="rate" id="rate-2" :checked="currentEvaluate.evaluatestar == 2">
                    <label for="rate-2" @click="handleGetValueEvaluate(['Địa điểm hơi tệ', 2])" class="fa fa-star"></label>
                    <input type="radio" name="rate" id="rate-1" :checked="currentEvaluate.evaluatestar == 1">
                    <label for="rate-1" @click="handleGetValueEvaluate(['Địa điểm rất tệ', 1])" class="fa fa-star"></label>
                    <div>
                        <header class="text-center my-3 text-warning font-weight-bold">{{textFeelEvalue}}</header>
                        <b-form-textarea
                            id="input-desc"
                            :value="currentEvaluate.evaluatecontent"
                            ref="BFormTextarea"
                            rows="6"
                            @input="txtEvaluate = $refs.BFormTextarea.localValue"
                            placeholder="Nhập mô tả của bạn"
                        ></b-form-textarea>
                        <div class="right my-3">
                            <v-btn color="primary" class="p-4 w-50" @click="handleUpdateEvaluate">
                                <span class="input-label">Cập nhật</span>
                            </v-btn>
                            <v-btn color="error" class="p-4 w-50" @click="handleCloseFormUpdateEvaluate">
                                <span class="input-label">Đóng</span>
                            </v-btn>
                        </div>
                    </div>
                </div>
            </div>
            <div v-if="isWriteEvaluate">
                Bạn đã đánh giá địa điểm này
                <div>
                    <div class="user-card-evaluate p-2" >
                        <div>
                            <div class="user-logo-name-time">
                                <div>
                                    <img v-if="!currentEvaluate.memberavatar" src="../../assets/user-img/user.png" class="user-avatar-evaluate" alt="">
                                    <img v-else :src="`${port_file}${currentEvaluate.memberavatar}`" class="user-avatar-evaluate" alt="">
                                    {{currentEvaluate.membername}}
                                </div>
                                <div>
                                    <i>{{currentEvaluate.createat}}</i>
                                    <b-dropdown v-if="currentMember.memberid == currentEvaluate.memberid" id="dropdown-1" class="m-md-2">
                                        <b-dropdown-item @click="handleEditEvaluate">Chỉnh sửa</b-dropdown-item>
                                        <b-dropdown-item @click="handleDeleteEvaluate">Xóa</b-dropdown-item>
                                    </b-dropdown>
                                </div>
                            </div>
                            <div v-if="currentEvaluate.evaluatestar == 1">
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star"></span>
                                <span class="fa fa-star"></span>
                                <span class="fa fa-star"></span>
                                <span class="fa fa-star"></span>
                                (<span class="text-success">Địa điểm rất tệ</span>)

                            </div>
                            <div v-if="currentEvaluate.evaluatestar == 2">
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star"></span>
                                <span class="fa fa-star"></span>
                                <span class="fa fa-star"></span>
                                (<span class="text-success">Địa điểm hơi tệ</span>)
                            </div>
                            <div v-if="currentEvaluate.evaluatestar == 3">
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star"></span>
                                <span class="fa fa-star"></span>
                                (<span class="text-success">Địa điểm bình thường</span>)
                            </div>
                            <div v-if="currentEvaluate.evaluatestar == 4">
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star"></span>
                                (<span class="text-success">Địa điểm tuyệt vời</span>)
                            </div>
                            <div v-if="currentEvaluate.evaluatestar == 5">
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                (<span class="text-success">Địa điểm rất tuyệt vời</span>)
                            </div>
                            <div>
                                {{currentEvaluate.evaluatecontent}} 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <hr/>
        <h6 class="mx-1">Các đánh giá của thành viên</h6>
        <div v-if="listEvaluate && listEvaluate.length > 0" class="user-evaluateTA mt-3">
            <div class="row">
                <div class="col-md-6" v-for="(item, index) in listEvaluate" :key="index">
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
                            </div>
                        </div>
                        <div v-if="item.evaluatestar == 1">
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star"></span>
                                <span class="fa fa-star"></span>
                                <span class="fa fa-star"></span>
                                <span class="fa fa-star"></span>
                                (<span class="text-success">Địa điểm rất tệ</span>)

                            </div>
                            <div v-if="item.evaluatestar == 2">
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star"></span>
                                <span class="fa fa-star"></span>
                                <span class="fa fa-star"></span>
                                (<span class="text-success">Địa điểm hơi tệ</span>)
                            </div>
                            <div v-if="item.evaluatestar == 3">
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star"></span>
                                <span class="fa fa-star"></span>
                                (<span class="text-success">Địa điểm bình thường</span>)
                            </div>
                            <div v-if="item.evaluatestar == 4">
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star"></span>
                                (<span class="text-success">Địa điểm tuyệt vời</span>)
                            </div>
                            <div v-if="item.evaluatestar == 5">
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                (<span class="text-success">Địa điểm rất tuyệt vời</span>)
                            </div>
                            <div>
                                {{item.evaluatecontent}} 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="text-center mt-3">
                <button v-b-modal.modal-tall-1 type="button"  class="btn btn-primary  w-25">Xem Thêm</button>
            </div>
        </div>
        <div v-else class="text-center">
            <p>Oh!! Hiện tại địa điểm này vẫn chưa có đánh giá nào</p>
        </div>
        <h4>Bình luận của thành viên</h4>
        <div>
            <div>
                <div class="m-1" v-if="isMemberLogin">
                    <label for="input-desc mt-3" class="input-label">Viểt bình luận về địa điểm:</label>
                    <b-form-textarea
                        id="input-desc"
                        v-model="txtComment"
                        rows="6"
                        placeholder="Nhập nội dung của bạn"
                    ></b-form-textarea>
                    <div class="right my-3">
                        <v-btn color="primary" class="p-4" @click="handleWriteComment">
                            <span class="input-label">Gửi</span>
                        </v-btn>
                    </div>
                </div>
                <div class="my-1" v-else>
                    <router-link tag="button" :to="{name: 'userLogin'}" type="button" class="btn btn-primary mb-5" >Đăng nhập để viết bình luận</router-link>
                </div>
            </div>
            <hr/>
            <h6 class="mx-1">Các bình luận của thành viên</h6>
            <div v-if="listComment && listComment.length>0">
                <div v-for=" comment in listComment" :key="comment.commentid"> 
                    <div class="user-card-evaluate p-2 mx-1 my-5" >
                        <div>
                            <div class="user-logo-name-time">
                                <div>
                                    <img v-if="!comment.memberavatar" src="../../assets/user-img/user.png" class="user-avatar-evaluate" alt="">
                                    <img v-else :src="`${port_file}${comment.memberavatar}`" class="user-avatar-evaluate" alt="">
                                    {{comment.membername}}
                                </div>
                                <div>
                                    <i>{{comment.createat}}</i>
                                    <b-dropdown v-if="currentMember.memberid == comment.memberid" id="dropdown-1" class="m-md-2">
                                        <b-dropdown-item @click="handleEditComment(comment.commentid, comment.commentcontent)">Chỉnh sửa</b-dropdown-item>
                                        <b-dropdown-item @click="handleDeleteComment(comment.commentid)">Xóa</b-dropdown-item>
                                    </b-dropdown>
                                </div>
                            </div>
                            <div :id="`content-comment-${comment.commentid}`" >
                                {{comment.commentcontent}}
                            </div>
                            <div :id="`form-update-comment-${comment.commentid}`" style="display:none">
                                <b-form-textarea 
                                    v-model="txtUpdateComment"
                                    ref="BFormUpdateComment"
                                    rows="2"
                                    placeholder="Nhập nội dung của bạn"
                                ></b-form-textarea>
                                <!-- <b-form-textarea 
                                    :value="comment.commentcontent"
                                    :formatter="formatter"
                                    placeholder="Nhập nội dung của bạn"
                                ></b-form-textarea> -->
                                <div class="right my-1">
                                    <v-btn color="primary" class="p-2" @click="handleUpdateComment({commentId:comment.commentid, commentContent: comment.commentcontent})">
                                        <span class="input-label">Cập nhật</span>
                                    </v-btn>
                                </div>
                            </div>
                            
                            <div><span v-if="!isUpdateComment" class="answer" @click="handleReplyComment(comment.commentid)">Trả lời</span></div>
                        </div>
                    </div>
                    <div class="mt-1" v-for="(repComment, index) in filterListReplycomment(comment.commentid)" :key="index">
                        <div class="p-2 user-card-evaluate" style="width: 95%; margin-left: auto; border: 1px solid black">
                            <div class="user-logo-name-time">
                                <div>
                                    <img v-if="!repComment.memberavatar" src="../../assets/user-img/user.png" class="user-avatar-evaluate" alt="">
                                    <img v-else :src="`${port_file}${repComment.memberavatar}`" class="user-avatar-evaluate" alt="">
                                    {{repComment.membername}}
                                </div>
                                <div>
                                    <i>{{repComment.createat}}</i>
                                    <b-dropdown v-if="currentMember.memberid == repComment.memberid" id="dropdown-1" class="m-md-2">
                                        <b-dropdown-item @click="handleDeleteReplyComment(repComment.repcommentid)">Xóa</b-dropdown-item>
                                    </b-dropdown>
                                </div>
                            </div>
                            <div>
                                {{repComment.repcommentcontent}}
                            </div>
                            <span class="answer" @click="handleReplyComment(repComment.commentid)">Trả lời</span>
                        </div>
                    </div>
                    <div :id="`repComment-${comment.commentid}`" style="display:none" >
                        <b-form-textarea style="width: 95%; margin-left:auto"
                            id="input-desc"
                            v-model="txtReplyComment"
                            rows="4"
                            placeholder="Trả lời bình luận này"
                        ></b-form-textarea>
                        <div class="right my-3">
                            <v-btn color="primary" class="p-4" @click="handleWriteReplyComment(comment.commentid)">
                                <span class="input-label">Gửi</span>
                            </v-btn>
                        </div>
                    </div>
                </div>
                <div class="text-center mt-3">
                    <button type="button"  class="btn btn-primary mb-5 w-25">Xem Thêm</button>
                </div>
            </div>
            <div v-else class="text-center">
                <p>Oh!! Hiện tại địa điểm này vẫn chưa có bình luận nào</p>
                <img src="../../assets/user-img/havenotcomment.png" width="40%">
            </div>
        </div>
        <div class="feature-DetailTA">
            <button type="button" @click="handleSave" v-if="!checkSaveTA" class="btn btn-info">Lưu lại địa điểm</button>
            <button type="button" @click="handleDeleteSave" v-if="checkSaveTA" class="btn btn-info">Xóa khỏi quan tâm</button>
            <!-- <button type="button" class="btn btn-info mt-2">Chia sẻ địa điểm</button> -->
            <!-- <a href="https://www.facebook.com/sharer/sharer.php?u=https://ct594-fontend.vercel.app/" target="_blank">
                Share on Facebook
            </a> -->
        </div>
        <FormYesNo :isDisplayYesNoForm="isDisplayYesNoForm" v-on:handleConfirm="handleConfirm"/>
        <b-modal id="modal-tall-1" title="Tất cả đánh giá">
            <div class="row">
                <card-evaluate propsClass="col-md-12" :tourId="id"/>
            </div>
        </b-modal>
        <div id="fb-root"></div>
    </div>
</template>
<script async defer crossorigin="anonymous" src="https://connect.facebook.net/vi_VN/sdk.js#xfbml=1&version=v13.0" nonce="BdosC9vy"></script>
<script>
import CardEvaluate from '../../components/CardEvaluate.vue'
import port_file from '../../port_file'
import {parseJwt} from "../../helpers"
import { setToken } from "../../helpers/constans"
import {mapActions, mapState, mapGetters, mapMutations} from 'vuex'
import FormYesNo from '../../components/FormYesNo.vue'
export default {
    components:{
        FormYesNo, CardEvaluate
    },
    data (){
        return {
            items: [],
            id: this.$route.params.id,
            port_file,
            slide: 0,
            sliding: null,
            txtComment: '',
            txtUpdateComment:'',
            txtReplyComment:'',
            listComment:'',
            textFeelEvalue:'',
            numberStar:0,
            txtEvaluate:'',
            isDisplayYesNoForm:{
				display: false,
				titleForm: 'Form xác nhận',
				answer: ''
			},
            detailTA: {},
            imageTA: [],
            listEvaluate:[],
            isWriteEvaluate: false,
            listComment: [],
            listReplyComment:[],
            checkSaveTA: false,
            isUpdateEvaluate: false,
            currentEvaluate: {},
            isUpdateComment: false,
            commentId:'',
            repCommentId:''
        }
    },
    computed:{
        ...mapState({
            historyTA: state=> state.touristAttraction.historyTA,
            currentMember: state=> state.member.currentMember
        }),
        ...mapGetters(['isMemberLogin']),
        handleChangeTitleButtonSave(){
            if(this.buttonSaveTA){
                return 'Lưu vào quan tâm'
            }
            else return 'Xóa khỏi quan tâm'
        },
    },
    methods:{
        ...mapMutations(['setLoadingSuccess', 'setLoadingError', 'setPageLoading']),
        ...mapActions(['getTAById','getimageTA' ,'getEvaluate',
                        'getComment', 'addComment','addEvaluate',
                        'checkEvaluate', 'addSaveTA','checkSaveTouristAttraction',
                        'deleteSaveTA', 'countView', 'getReplyComment', 'addReplyComment',
                        'getCurrentEvaluate', 'updateEvaluate', 'deleteEvaluate',
                        'updateComment', 'deleteComment', 'deleteReplyComment'
        ]),
        getStars(rating) {
			// Round to nearest half
			rating = Math.round(rating * 2) / 2;
			let output = [];
			// Append all the filled whole stars
			for (var i = rating; i >= 1; i--)
				output.push('<i class="fa fa-star" aria-hidden="true" style="color: gold;"></i>&nbsp;');
			// If there is a half a star, append it
			if (i == .5) output.push('<i class="fa fa-star-half-o" aria-hidden="true" style="color: gold;"></i>&nbsp;');
			// Fill the empty stars
			for (let i = (5 - rating); i >= 1; i--)
				output.push('<i class="fa-regular fa-star" style="color: gold;"></i>&nbsp;');
			return output.join('');
		},
        handleCloseFormUpdateEvaluate(){
            this.isUpdateEvaluate= false
        },
        handleUpdateEvaluate(){
            this.numberStar = this.numberStar !=0 ? this.numberStar : this.currentEvaluate.evaluatestar;
            this.txtEvaluate = this.txtEvaluate ? this.txtEvaluate : this.currentEvaluate.evaluatecontent;
            if(!this.txtEvaluate || this.numberStar ==0){
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
                var value ={
                    numberStar: parseInt(this.numberStar),
                    evaluateContent: this.txtEvaluate,
                    memberId: this.currentMember.memberid,
                    tourId: this.id,
                }
                this.updateEvaluate(value).then(response=>{
                    if(response.ok){
                        this.getCurrentEvaluate({memberId: this.currentMember.memberid, tourId: this.id}).then(response=>{
                            if(response.ok){
                                this.currentEvaluate = response.data
                            }
                        })
                        this.isWriteEvaluate = true
                        this.isUpdateEvaluate = false;
                        this.listEvaluate = response.data
                        let value ={
                            display: true,
                            message: response.message
                        }
                        this.setPageLoading(true)
                        setTimeout(()=>{
                            this.setPageLoading(false)
                            this.setLoadingSuccess(value)
                            setTimeout(()=>{
                                this.txtEvaluate='';
                                this.numberStar = 0;
                                this.setLoadingSuccess({display: false});
                            }, 1000);
                        }, 1000);
                    }
                });
            }
        },
        handleUpdateComment(a){
            console.log(this.$refs.BFormUpdateComment)
            var commentId = a.commentId;
            var commentContent = a.commentContent;
            this.txtUpdateComment = this.txtUpdateComment
            if(!this.txtUpdateComment){
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
                this.updateComment({commentContent: this.txtUpdateComment,commentId}).then(response=>{
                    if(response.ok){
                        console.log(commentId)
                        document.getElementById(`form-update-comment-${commentId}`).style.display= "none";
                        document.getElementById(`content-comment-${commentId}`).style.display= "unset";
                        this.getComment(this.id).then(response=>{
                            if(response.ok){
                                this.listComment = response.data
                            }
                        })
                        // var index = this.listComment.findIndex(item => item.commentid == value.commentId)
                        // this.listComment[index].commentcontent = this.txtUpdateComment;
                        let value = {
                            display: true,
                            message: response.message
                        }
                        this.setPageLoading(true)
                        setTimeout(()=>{
                            this.setPageLoading(false)
                            this.setLoadingSuccess(value)
                            setTimeout(()=>{
                                this.txtUpdateComment='';
                                this.setLoadingSuccess({display: false});
                            }, 1000);
                        }, 1000);
                    }
                });
            }
        },
        handleEditEvaluate(){
            this.isUpdateEvaluate= true
        },
        handleEditComment(commentId, commentContent){
            console.log(commentContent)
            this.txtUpdateComment = commentContent;
            document.getElementById(`form-update-comment-${commentId}`).style.display= "unset";
            document.getElementById(`content-comment-${commentId}`).style.display= "none";
        },
        filterListReplycomment(value){
            if(this.listReplyComment.length)
              return this.listReplyComment.filter(item => item.commentid == value)
            else return [];
        },
        onSlideStart(slide) {
        this.sliding = true
        },
        onSlideEnd(slide) {
            this.sliding = false
        },
        handleReplyComment(value){
            document.getElementById(`repComment-${value}`).style.display= "unset";
        },
        handleWriteComment(){
            if(!this.txtComment){
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
                    commentContent: this.txtComment,
                    memberId: this.currentMember.memberid,
                    tourId: this.id,
                    createAt: datestring,
                }
                this.addComment(value).then(response=>{
                    if(response.ok){
                        this.listComment = response.data
                        let value = {
                            display: true,
                            message: "Bình luận thành công"
                        }
                        this.setPageLoading(true)
                        setTimeout(()=>{
                            this.setPageLoading(false)
                            this.setLoadingSuccess(value)
                            setTimeout(()=>{
                                this.txtComment='';
                                this.setLoadingSuccess({display: false});
                            }, 1000);
                        }, 1000);
                    }
                });
            }
        },
        handleWriteReplyComment(commentId){
            if(!this.txtReplyComment){
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
                    repCommentContent: this.txtReplyComment,
                    memberId: this.currentMember.memberid,
                    tourId: this.id,
                    createAt: datestring,
                    commentId
                }
                console.log('value', value)
                this.addReplyComment(value).then(response=>{
                    if(response.ok){
                        document.getElementById(`repComment-${commentId}`).style.display= "none";
                        this.listReplyComment = response.data
                        let value = {
                            display: true,
                            message: "Bình luận thành công"
                        }
                        this.setPageLoading(true)
                        setTimeout(()=>{
                            this.setPageLoading(false)
                            this.setLoadingSuccess(value)
                            setTimeout(()=>{
                                this.txtReplyComment='';
                                this.setLoadingSuccess({display: false});
                            }, 1000);
                        }, 1000);
                    }
                });
            }
        },
        handleGetValueEvaluate(value){
            this.textFeelEvalue = value[0];
            this.numberStar = value[1];
        },
        handleWriteEvaluate(){
            if(!this.txtEvaluate || this.numberStar ==0){
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
                    evaluateContent: this.txtEvaluate,
                    memberId: this.currentMember.memberid,
                    tourId: this.id,
                    createAt: datestring,
                }
                this.addEvaluate(value).then(response=>{
                    if(response.ok){
                        this.isWriteEvaluate = true
                        document.getElementById(`user-box-rate`).style.display= "none";
                        this.listEvaluate = response.data
                        let value ={
                            display: true,
                            message: response.message
                        }
                        this.setPageLoading(true)
                        setTimeout(()=>{
                            this.setPageLoading(false)
                            this.setLoadingSuccess(value)
                            setTimeout(()=>{
                                this.txtEvaluate='';
                                this.setLoadingSuccess({display: false});
                            }, 1000);
                        }, 1000);
                    }
                });
            }
        },
        handleSave(){
            var d = new Date();
            var datestring = d.getDate()  + "-" + (d.getMonth()+1) + "-" + d.getFullYear() + " " +
                d.getHours() + ":" + d.getMinutes();
            var value = { 
                memberId: this.currentMember.memberid,
                tourId: this.id,
                createAt: datestring
            }
            this.addSaveTA(value).then(response=>{
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
                            this.checkSaveTA = false;
                        }, 1200);
                    }, 1000);
                }
                else{
                    let value ={
                        display: true,
                        message: response.message
                    }
                    this.setPageLoading(true)
                    setTimeout(()=>{
                        this.setPageLoading(false)
                        this.setLoadingError(value)
                        setTimeout(()=>{
                            this.setLoadingError({display: false})
                        }, 1200);
                    }, 1000);  
                }
            })
        },
        handleDeleteSave(){
            var value = { 
                memberId: this.currentMember.memberid,
                tourId: this.id,
            }
            this.deleteSaveTA(value).then(response=>{
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
                            this.checkSaveTA = true;
                        }, 1200);
                    }, 1000);
                }
                else{
                    let value ={
                        display: true,
                        message: response.message
                    }
                    this.setPageLoading(true)
                    setTimeout(()=>{
                        this.setPageLoading(false)
                        this.setLoadingError(value)
                        setTimeout(()=>{
                            this.setLoadingError({display: false})
                        }, 1200);
                    }, 1000);  
                }
            })
        },
        handleDeleteComment(value){
            this.isDisplayYesNoForm.display = true;
            this.isDisplayYesNoForm.titleForm="Xóa bình luận này?";
            this.commentId = value
        },
        handleDeleteReplyComment(value){
            this.isDisplayYesNoForm.display = true;
            this.isDisplayYesNoForm.titleForm="Xác nhận xóa?";
            this.repcommentId = value
        },
        handleDeleteEvaluate(){
            this.isDisplayYesNoForm.display = true;
            this.isDisplayYesNoForm.titleForm="Xóa đánh giá này?";
        },
        handleConfirm(value){
			if(value == 'yes'){
                if(this.isDisplayYesNoForm.titleForm=="Xóa đánh giá này?"){
                    this.isDisplayYesNoForm.titleForm= "";
                    this.answer=""
                    this.deleteEvaluate({tourId: this.id, memberId: this.currentMember.memberid}).then(response=>{
                        if(response.ok){
                            this.getEvaluate(this.id).then(response=>{
                                if(response.ok){
                                    this.listEvaluate = response.data
                                }
                            });
                            this.checkEvaluate({tourId: this.id, memberId: this.currentMember.memberid}).then(response=>{
                                if(response.ok && response.data == 'true'){
                                    this.isWriteEvaluate = true
                                }else{
                                    this.isWriteEvaluate = false
                                }
                            })
                            this.isDisplayYesNoForm.display = false;
                            this.isDisplayYesNoForm.titleForm= "";
                            this.answer=""
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
                                }, 1200);
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
                                    this.setLoadingError({display: false})
                                    this.isDisplayYesNoForm.display = false;
                                    this.isDisplayYesNoForm.titleForm= "";
                                    this.answer=""
                                }, 1200);
                            }, 1000);
                        }
                    })
                }
                if(this.isDisplayYesNoForm.titleForm=="Xóa bình luận này?"){
                    this.isDisplayYesNoForm.titleForm= "";
                    this.answer=""
                    this.deleteComment(this.commentId).then(response=>{
                        if(response.ok){
                            this.getComment(this.id).then(response=>{
                                if(response.ok){
                                    this.listComment = response.data
                                }
                            });
                            this.isDisplayYesNoForm.display = false;
                            this.isDisplayYesNoForm.titleForm= "";
                            this.answer=""
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
                                }, 1200);
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
                                    this.setLoadingError({display: false})
                                    this.isDisplayYesNoForm.display = false;
                                    this.isDisplayYesNoForm.titleForm= "";
                                    this.answer=""
                                }, 1200);
                            }, 1000);
                        }
                    })
                }
                if(this.isDisplayYesNoForm.titleForm=="Xác nhận xóa?"){
                    this.isDisplayYesNoForm.titleForm= "";
                    this.answer=""
                    this.deleteReplyComment(this.repcommentId).then(response=>{
                        if(response.ok){
                            this.getReplyComment(this.id).then(response=>{
                                if(response.ok){
                                    this.listReplyComment = response.data
                                }
                            });
                            this.isDisplayYesNoForm.display = false;
                            this.isDisplayYesNoForm.titleForm= "";
                            this.answer=""
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
                                }, 1200);
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
                                    this.setLoadingError({display: false})
                                    this.isDisplayYesNoForm.display = false;
                                    this.isDisplayYesNoForm.titleForm= "";
                                    this.answer=""
                                }, 1200);
                            }, 1000);
                        }
                    })
                }
            }	
			else{
				this.isDisplayYesNoForm.display = false;
				this.isDisplayYesNoForm.titleForm= "";
				this.answer=""
			}
		},
    },
    created(){
        var tourId = this.$route.params.id;
        var getToken = localStorage.getItem(setToken) || null;
        if(getToken){
            var value = parseJwt(getToken);
            var memberId = value.memberid
            if(memberId){
                this.checkEvaluate({memberId, tourId}).then(response=>{
                    if(response.ok && response.data == 'true'){
                        this.isWriteEvaluate = true
                    }
                })
                this.checkSaveTouristAttraction({memberId, tourId}).then(response=>{
                    if(response.ok && response.data == 'true'){
                        this.checkSaveTA = false
                    }
                    else{
                         this.checkSaveTA = true
                    }
                }),
                this.getCurrentEvaluate({memberId, tourId}).then(response=>{
                    if(response.ok){
                        this.currentEvaluate = response.data
                    }
                })
            }
        }
        this.getTAById(tourId).then(response=>{
            if(response.ok){
                this.detailTA = response.data
            }
        })
        this.getimageTA(tourId).then(response=>{
            if(response.ok){
                this.imageTA = response.data
            }
        })
        this.getEvaluate(tourId).then(response=>{
            if(response.ok){
                this.listEvaluate = response.data
            }
        })
        this.getComment(tourId).then(response=>{
            if(response.ok){
                this.listComment = response.data
            }
        })
        this.getReplyComment(tourId).then(response=>{
            if(response.ok){
                this.listReplyComment = response.data
            }
        })
        var d = new Date();
        var datestring = d.getDate()  + "-" + (d.getMonth()+1) + "-" + d.getFullYear() + " " +
            d.getHours() + ":" + d.getMinutes();
        this.countView({tourId, createAt: datestring})
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
    .feature-DetailTA{
        position: fixed;
        right: 10px;
        bottom: 55%;
        display:flex;
        flex-direction: column;
    }
    .user-card-evaluate .btn{
        padding: 0 2px 0 2px
    }
</style>