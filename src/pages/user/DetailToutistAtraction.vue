<template>
    <div class="container user-page-detailTA" v-if="getDetailCurrentTA && getDetailCurrentTA.currentDetailTA">
        <h1 >{{currentDetailTA.tourtitle}}</h1>
        <p class="card-text">Xếp hạng
					<span class="fa fa-star checked"></span>
					<span class="fa fa-star checked"></span>
					<span class="fa fa-star checked"></span>
					<span class="fa fa-star"></span>
					<span class="fa fa-star"></span>
        </p>
        <h4>Giới thiệu về Bến Ninh Kiều</h4>
        <div class="user-introProvince">
            <img :src="handleUrlPictureTA" class="user-img-introTA" alt="">
            <p class="ml-3">
                {{currentDetailTA.tourdesc}}
            </p>
        </div>
        
        <h4 class="mt-3">Địa điểm</h4>
        <p><i class="fa-solid fa-location-dot"></i> {{currentDetailTA.touraddress}}</p>
        <h4>Một số hình ảnh về Bến Ninh Kiều:</h4>
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

                <p class="mt-4">
                Slide #: {{ slide }}<br>
                Sliding: {{ sliding }}
                </p>
            </div>
        </div>
        <div class="row">
            <div class="col-md-6 user-detailTA-video">
                <h4>Video giới thiệu về bến Ninh Kiều</h4>
                <iframe width="550" height="320" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen
                    :src="currentDetailTA.tourlinkvideo">
                </iframe>
            </div>
            <div class="col-md-6 user-detailTA-map">
                <h4>Ví trí Bến Ninh Kiều trên Google Map</h4>
                <iframe :src="currentDetailTA.tourmap" width="550" height="320" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
            </div>
        </div>
        <h4 class="text-center my-5">Đánh giá của khách du lịch khi đến Bến Ninh Kiều: 3.0 <span class="fa fa-star checked"></span></h4>
        <div class="mt-3">
            <button type="button"  class="btn btn-primary mb-5">Đăng nhập để viết đánh giá</button>
        </div>
        <div class="user-evaluateTA">
            <div class="row">
                <div class="col-md-6">
                    <div class="user-card-evaluate p-2 mx-1">
                        <div>
                            <div class="user-logo-name-time">
                            <div>
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTe7mWcFQ-e97tkOw1TN2252vi4gLuYMTbvXQ&usqp=CAU" class="user-avatar-evaluate" alt="">
                                Nguyễn Văn A
                            </div>
                            <div>
                                <i>Đánh giá 1 tháng trước</i>
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
                                Địa điểm mình thích nhất khi du lịch tại miền tây 
                                Địa điểm mình thích nhất khi du lịch tại miền tây
                                Địa điểm mình thích nhất khi du lịch tại miền tây
                                Địa điểm mình thích nhất khi du lịch tại miền tây
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="user-card-evaluate p-2 mx-1">
                        <div>
                            <div class="user-logo-name-time">
                            <div>
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTe7mWcFQ-e97tkOw1TN2252vi4gLuYMTbvXQ&usqp=CAU" class="user-avatar-evaluate" alt="">
                                Nguyễn Văn A
                            </div>
                            <i>Đánh giá 1 tháng trước</i>
                        </div>
                        <div>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star"></span>
                            <span class="fa fa-star"></span>
                        </div>
                            <div>
                                Địa điểm mình thích nhất khi du lịch tại miền tây
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="user-card-evaluate p-2 mx-1">
                        <div>
                            <div class="user-logo-name-time">
                            <div>
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTe7mWcFQ-e97tkOw1TN2252vi4gLuYMTbvXQ&usqp=CAU" class="user-avatar-evaluate" alt="">
                                Nguyễn Văn A
                            </div>
                            <i>Đánh giá 1 tháng trước</i>
                        </div>
                        <div>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star"></span>
                            <span class="fa fa-star"></span>
                        </div>
                            <div>
                                Địa điểm mình thích nhất khi du lịch tại miền tây
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="user-card-evaluate p-2 mx-1">
                        <div>
                            <div class="user-logo-name-time">
                            <div>
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTe7mWcFQ-e97tkOw1TN2252vi4gLuYMTbvXQ&usqp=CAU" class="user-avatar-evaluate" alt="">
                                Nguyễn Văn A
                            </div>
                            <div>
                                <i>Đánh giá 1 tháng trước</i>
                                
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
                                Địa điểm mình thích nhất khi du lịch tại miền tây
                            </div>
                        </div>
                    </div>
                </div>
            </div>
           <div class="text-center mt-3">
                <button type="button"  class="btn btn-primary  w-25">Xem Thêm (Còn 5 đánh giá khác)</button>
           </div>
        </div>
         <h4>Bình luận của thành viên</h4>
         <div>
              <div class="my-1">
                <button type="button"  class="btn btn-primary mb-5">Đăng nhập để viết bình luận</button>
            </div>
             <div class="user-card-evaluate p-2 mx-1">
                <div>
                    <div class="user-logo-name-time">
                    <div>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTe7mWcFQ-e97tkOw1TN2252vi4gLuYMTbvXQ&usqp=CAU" class="user-avatar-evaluate" alt="">
                        Nguyễn Văn A
                    </div>
                    <i>Đánh giá 1 tháng trước</i>
                </div>
                    <div>
                        Địa điểm mình thích nhất khi du lịch tại miền tây 
                    </div>
                </div>
            </div>
            <div class="text-center mt-3">
                <button type="button"  class="btn btn-primary  w-25">Xem Thêm</button>
           </div>
         </div>
    </div>
</template>
<script>
import port_file from '../../port_file'
import {mapActions, mapState, mapGetters} from 'vuex'
export default {
    data (){
        return {
            items: [
                
            ],
            id: this.$route.params.id,
            port_file,
          
            slide: 0,
            sliding: null
        }
    },
    computed:{
        ...mapState({
            historyTA: state=> state.touristAttraction.historyTA,
            // currentDetailTA: state=> state.currentTA.historyTA
        }),
        ...mapGetters(['getDetailCurrentTA']),
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
        }
    },
    methods:{
        ...mapActions(['getAllDetailTouristAttraction']),
        onSlideStart(slide) {
        this.sliding = true
        },
        onSlideEnd(slide) {
            this.sliding = false
        }
    },
    created(){
        this.id = this.$route.params.id;
        this.getAllDetailTouristAttraction(this.id);
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
</style>