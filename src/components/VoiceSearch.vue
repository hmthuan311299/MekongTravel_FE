<template>
  <div class="speech_container">
    <i
      class="fa fa-microphone fa-3x"
      :class="{ isListening }"
      @click="listen"
    ></i>
  </div>
</template>
<script>
export default {
  name: 'voice-search',
  props: {
    addNote: {
      type: Function,
      required: true
    },
    deleteNote: {
      type: Function,
      required: true
    },
    removeAllNotes: {
      type: Function,
      required: true
    }
  },
  data() {
    return {
      speechToText: null,
      isListening: false,
      recognition: null
    };
  },
  methods: {
    listen() {
      this.isListening = !this.isListening;
      if(this.isListening)
        this.recognition.start();
      else 
        this.recognition.stop();
    },
    record(event) {
      this.isListening = false;
      this.speechToText = event.results[0][0].transcript;

      const parseRegex = /(?<id>(\d*))\s(?=nolu).*(?<command>(sil))$/giu;
      const voiceMatch = parseRegex.exec(this.speechToText);

      const allNoteRemoveRegex = /tüm notları sil/giu;
      const allNotesRemoveMatch = allNoteRemoveRegex.test(this.speechToText);

      setTimeout(() => {
        if (voiceMatch && voiceMatch.groups.id && voiceMatch.groups.command) {
          this.deleteNote(voiceMatch.groups.id);
        } else if (allNotesRemoveMatch) {
          this.removeAllNotes();
        } else {
          this.addNote(event.results[0][0].transcript);
        }
        this.speechToText = null;
      }, 1000);
    }
  },
  mounted() {
    this.recognition = new webkitSpeechRecognition();
    this.recognition.lang = "vi";
    this.recognition.onresult = this.record;
  }
};
</script>

<style scoped>
i {
  cursor: pointer;
  margin-left: 5px
}

.isListening {
  color: #17a2b8;
  transition: all 0.5s;
}
</style>
