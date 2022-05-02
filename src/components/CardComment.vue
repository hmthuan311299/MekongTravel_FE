<template>

    <div v-if="listComment && listComment.length > 0">
        <div v-for="comment in listComment" :key="comment.commentid">
            <div class="user-card-evaluate p-2 mx-1 my-3">
                <div>
                    <div class="user-logo-name-time">
                        <div>
                            <img
                                v-if="!comment.memberavatar"
                                src="../assets/user-img/user.png"
                                class="user-avatar-evaluate"
                                alt=""
                            />
                            <img
                                v-else
                                :src="`${port_file}${comment.memberavatar}`"
                                class="user-avatar-evaluate"
                                alt=""
                            />
                            {{ comment.membername }}
                        </div>
                        <div>
                            <i>{{ comment.createat }}</i>
                            <i class="fa-solid fa-circle-xmark ml-2 text-danger" 
                                @click="handleDelete(comment.commentid)">
                            </i>
                        </div>
                    </div>
                    <div :id="`content-comment-${comment.commentid}`">
                        {{ comment.commentcontent }}
                    </div>
                </div>
            </div>
            <div style="margin-top: -10px" v-for="(repComment, index) in filterListReplycomment(comment.commentid)" :key="index"
            >
                <div class="p-2 user-card-evaluate"
                    style="width: 95%; margin-left: auto; border: 1px solid black"
                >
                    <div class="user-logo-name-time">
                        <div>
                            <img
                                v-if="!repComment.memberavatar"
                                src="../assets/user-img/user.png"
                                class="user-avatar-evaluate"
                                alt=""
                            />
                            <img
                                v-else
                                :src="`${port_file}${repComment.memberavatar}`"
                                class="user-avatar-evaluate"
                                alt=""
                            />
                            {{ repComment.membername }}
                        </div>
                        <div>
                            <i>{{ repComment.createat }}</i>
                            <i class="fa-solid fa-circle-xmark ml-2 text-danger" 
                                @click="handleDeleteReplyComment(repComment.repcommentid)">
                            </i>
                        </div>
                    </div>
                    <div>
                        {{ repComment.repcommentcontent }}
                    </div>
                </div>
            </div>
        </div>
        <FormYesNo :isDisplayYesNoForm="isDisplayYesNoForm" v-on:handleConfirm="handleConfirm"/> 
  </div>
  <div v-else class="text-center">
        <p>Oh!! Hiện tại địa điểm này vẫn chưa có bình luận nào</p>
        <img src="../assets/user-img/havenotcomment.png" width="40%" />
  </div>
</template>

<script>
import port_file from "../port_file";
import FormYesNo from "../components/FormYesNo.vue";
import { mapActions, mapState, mapMutations } from "vuex";
export default {
  data() {
    return {
      listComment: [],
      listReplyComment: [],
      commentId: '',
      isDisplayYesNoForm: {
        display: false,
        titleForm: "Form xác nhận",
        answer: "",
      },
      port_file,
      repcommentId: "",
    };
  },
  props: {
    tourId: String,
    propsClass: String,
  },
  components: {
    FormYesNo,
  },
  methods: {
    ...mapMutations(["setLoadingSuccess", "setLoadingError", "setPageLoading"]),
    ...mapActions([
      "getComment",
      "deleteComment",
      "getReplyComment",
      "deleteReplyComment",
    ]),
    handleComment(tourId) {
      this.getComment(tourId).then((response) => {
        if (response.ok) {
          this.listComment = response.data;
        }
      });
    },
    filterListReplycomment(value){
        if(this.listReplyComment.length)
            return this.listReplyComment.filter(item => item.commentid == value)
        else return [];
    },
    handleReplyComment(tourId) {
      console.log(tourId);
      this.getReplyComment(tourId).then((response) => {
        if (response.ok) {
          this.listReplyComment = response.data;
        }
      });
    },
    handleDelete(value) {
      this.isDisplayYesNoForm.display = true;
      this.isDisplayYesNoForm.titleForm = "Xác nhận xóa?";
      this.commentId = value;
    },
    handleDeleteReplyComment(value) {
      this.isDisplayYesNoForm.display = true;
      this.isDisplayYesNoForm.titleForm = "Xác nhận xóa bình luận này?";
      this.repcommentId = value;
    },
    handleConfirm(value) {
      if (value == "yes") {
        if (this.isDisplayYesNoForm.titleForm == "Xác nhận xóa?") {
          this.isDisplayYesNoForm.titleForm = "";
          this.answer = "";
          this.deleteComment(this.commentId).then((response) => {
            if (response.ok) {
              this.getComment(this.tourId).then((response) => {
                if (response.ok) {
                  this.listComment = response.data;
                }
              });
              this.getReplyComment(this.tourId).then((response) => {
                if (response.ok) {
                  this.listReplyComment = response.data;
                }
              });
              this.isDisplayYesNoForm.display = false;
              this.isDisplayYesNoForm.titleForm = "";
              this.answer = "";
              let value = {
                display: true,
                message: response.message,
              };
              this.setPageLoading(true);
              setTimeout(() => {
                this.setPageLoading(false);
                this.setLoadingSuccess(value);
                setTimeout(() => {
                  this.setLoadingSuccess({ display: false });
                }, 1200);
              }, 1000);
            } else {
              let value = {
                display: true,
                message: response.message,
              };
              this.setPageLoading(true);
              setTimeout(() => {
                this.setPageLoading(false);
                this.setLoadingError(value);
                setTimeout(() => {
                  this.setLoadingError({ display: false });
                  this.isDisplayYesNoForm.display = false;
                  this.isDisplayYesNoForm.titleForm = "";
                  this.answer = "";
                }, 1200);
              }, 1000);
            }
          });
        }
        if (
          this.isDisplayYesNoForm.titleForm == "Xác nhận xóa bình luận này?"
        ) {
          this.isDisplayYesNoForm.titleForm = "";
          this.answer = "";
          this.deleteReplyComment(this.repcommentId).then((response) => {
            if (response.ok) {
              this.getReplyComment(this.tourId).then((response) => {
                if (response.ok) {
                  this.listReplyComment = response.data;
                }
              });
              this.isDisplayYesNoForm.display = false;
              this.isDisplayYesNoForm.titleForm = "";
              this.answer = "";
              let value = {
                display: true,
                message: response.message,
              };
              this.setPageLoading(true);
              setTimeout(() => {
                this.setPageLoading(false);
                this.setLoadingSuccess(value);
                setTimeout(() => {
                  this.setLoadingSuccess({ display: false });
                }, 1200);
              }, 1000);
            } else {
              let value = {
                display: true,
                message: response.message,
              };
              this.setPageLoading(true);
              setTimeout(() => {
                this.setPageLoading(false);
                this.setLoadingError(value);
                setTimeout(() => {
                  this.setLoadingError({ display: false });
                  this.isDisplayYesNoForm.display = false;
                  this.isDisplayYesNoForm.titleForm = "";
                  this.answer = "";
                }, 1200);
              }, 1000);
            }
          });
        }
      } else {
        this.isDisplayYesNoForm.display = false;
        this.isDisplayYesNoForm.titleForm = "";
        this.answer = "";
      }
    },
    callFormError(message) {
      let value = {
        display: true,
        message: message,
      };
      this.setLoadingError(value);
      setTimeout(() => {
        this.setLoadingError({ display: false });
      }, 1200);
    },
  },
  created() {
    this.handleComment(this.tourId);
    this.handleReplyComment(this.tourId);
  },
};
</script>

<style>
.fa-circle-xmark {
  font-size: 1.3rem;
}
.fa-circle-xmark:hover {
  cursor: pointer;
  font-size: 1.4rem;
}
</style>