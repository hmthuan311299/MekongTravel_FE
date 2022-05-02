<template>
    <div class="input-group search-bar">
        <input type="text" v-model="note" class="form-control" placeholder="Tìm kiếm" @keyup.enter="handleGetValueSearch">
        <div class="input-group-append">
            <button class="btn btn-secondary" type="button" @click="handleGetValueSearch">
                <i class="fa fa-search"></i>
            </button>
            <voice-search class="my-auto"
                :addNote="addNote"
                :deleteNote="deleteNote"
                :removeAllNotes="removeAllNotes"
            />
            
        </div>
        
    </div>
</template>

<script>
import VoiceSearch from "./VoiceSearch.vue";
export default {
    components:{
        VoiceSearch
    },
    name: 'search-bar',
    data(){
        return{
            note: '',
        }
    },
    props:{
    },
    methods:{
        handleGetValueSearch(){
           
            this.$emit("getValueSearch", this.note)
        },
        addNote(note) {
            this.note = note
            this.$emit("getValueSearch", this.note)
        },
        deleteNote(id) {
        this.note.splice(
            this.note.findIndex(n => n.id == id),
            1
        );
        },
        removeAllNotes() {
        this.note = [];
        }
    }
}
</script>

<style>
input.form-control{
    height: 7vh;
}
.search-bar {
    width: 80% !important;
    margin: 10px auto;
}
</style>