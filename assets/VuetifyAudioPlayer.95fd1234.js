import{css as e}from"https://cdn.jsdelivr.net/npm/goober@2.0.33/dist/goober.modern.js";const t=e`


.volume-slider .v-messages {
    display: none;
  }
  .audio-seeker {
    .v-slider {
      min-height: 0;
    }
    .v-slider--horizontal {
      margin-left: 0;
      margin-right: 0;
    }
    .v-slider__track-background {
      width: 100% !important;
    }
    .v-messages {
      display: none;
    }
    .v-slider__thumb:before {
      opacity: 0;
    }
    .v-slider__thumb {
      height: 10px;
      width: 10px;
      cursor: pointer;
    }
    .v-slider__track-container {
      cursor: pointer;
      height: 6px !important;
    }
    .v-slider__track-fill,
    .v-slider__track-background,
    .v-slider__track-container {
      border-radius: 9999px;
    }
    * {
      transition: none !important;
    }
  }

`;var i={name:"VuetifyAudioPlayer",props:{src:{type:String},trackTitle:{type:String},trackSubtitle:{type:String,default:void 0},allowPrevious:{type:Boolean,default:!1},allowNext:{type:Boolean,default:!1},compact:{type:Boolean,default:!1},albumArt:{type:String,default:void 0},autoplay:{type:Boolean,default:!1},prevTrackIcon:{type:String,default:"mdi-skip-previous"},nextTrackIcon:{type:String,default:"mdi-skip-next"},backForwardIcon:{type:String,default:"mdi-rewind-5"},fastForwardIcon:{type:String,default:"mdi-fast-forward-5"},playIcon:{type:String,default:"mdi-play"},pauseIcon:{type:String,default:"mdi-pause"},muteVolumeIcon:{type:String,default:"mdi-volume-off"},lowVolumeIcon:{type:String,default:"mdi-volume-low"},mediumVolumeIcon:{type:String,default:"mdi-volume-medium"},highVolumeIcon:{type:String,default:"mdi-volume-high"},codecs:{type:String,default:"opus"},mimeType:{type:String,default:"audio/opus"}},data:()=>({audioDownloaded:!1,currentTime:0,duration:0,playing:!1,volume:50,seekerFocused:!1,keydownListener:null,muted:!1,last90:0,hasNext:!1}),watch:{playing(e){if(e)return this.$refs.audio.play();this.$refs.audio.pause()},muted(e){this.$refs.audio.muted=e},audioDownloaded(e){this.autoplay&&e&&(this.playing=!0)},src(e){e&&(this.audioDownloaded=!1,this.playing=!1)},volume(){this.muted=!1}},computed:{volumeIcon(){return this.muted?this.muteVolumeIcon:0===this.volume?this.lowVolumeIcon:this.volume>=50?this.highVolumeIcon:this.mediumVolumeIcon},position(){return parseInt(this.currentTime/this.duration*1e6)||0}},methods:{setVolume(e){this.volume=e,this.$refs.audio.volume=e/100},forwardSeconds(e){let t=this.currentTime+e;t<0?t=0:t>this.duration&&(t=this.duration),this.$refs.audio.currentTime=t},setDuration(){this.duration=this.$refs.audio.duration,this.last90=.95*this.duration},handleTimeUpdate(){this.currentTime=this.$refs.audio.currentTime},handleAudioEnd(){this.allowNext&&(this.$emit("next-audio"),this.hasNext=!1)},seek(e){this.$refs.audio.currentTime=this.$refs.audio.duration*(e/1e6)}},mounted(){this.$refs.audio.volume=this.volume/100,this.muted=this.$refs.audio.muted,this.keydownListener=document.addEventListener("keydown",(e=>{32===e.keyCode&&this.seekerFocused&&(e.preventDefault(),this.playing=!this.playing)}))},beforeDestroy(){document.removeEventListener("keydown",this.keydownListener)},template:`\n\n  <v-card class="${t} mt-5" ref="playerContainer" :loading="!audioDownloaded" v-bind="$attrs" elevation="0">\n  <v-img v-if="albumArt && compact" :src="albumArt" aspect-ratio="1" contain class="grey darken-3" ></v-img>\n\n  <audio :codecs="codecs" :type="mimeType" ref="audio" @pause="playing = false" @play="playing = true" @timeupdate="handleTimeUpdate" @durationchange="setDuration" @canplaythrough="audioDownloaded = true" @ended="handleAudioEnd" @error="$emit('error', $event)" :src="src" ></audio>\n\n  <v-slider class="audio-seeker" v-if="src" min="0" max="1000000" :value="position" @input="seek($event)" @focus="seekerFocused = true" @blur="seekerFocused = false" ></v-slider>\n\n  <v-card-text>\n    <v-row :class="compact ? 'text-center' : 'text-left'" align="center" justify="center" >\n      <v-col :cols="compact ? 12 : 6" class="d-flex align-center" :class="compact ? 'pa-1' : ''">\n        <v-avatar tile class="d-inline-block" v-if="albumArt && !compact">\n          <v-img :src="albumArt" aspect-ratio="1"></v-img>\n        </v-avatar>\n\n        <div class="mx-auto" :class="albumArt && !compact && 'ml-3 d-inline-block'" >\n          <span v-if="trackTitle" class="d-block" v-text="trackTitle"></span>\n          <span v-text="trackSubtitle" class="d-block text-uppercase font-weight-bold" style="letter-spacing: 0.05em" ></span>\n        </div>\n      </v-col>\n\n      <v-spacer></v-spacer>\n\n      <v-col :cols="compact ? 12 : 2" :class="compact ? 'pa-1' : ''">\n        <div class="d-flex align-center mx-auto" :class="compact ? 'justify-center' : 'justify-end'" style="max-width: 12rem" >\n          <v-btn icon @click="muted = !muted">\n             <v-icon v-text="volumeIcon"></v-icon>\n          </v-btn>\n\n          <v-slider class="mt-2 volume-slider" :value="muted ? 0 : volume" @input="setVolume" thumb-label max="100" min="0" ></v-slider>\n        </div>\n      </v-col>\n\n      <v-col v-if="src" :cols="compact ? 12 : 4" class="d-flex align-center" :class="compact ? 'justify-center' : 'justify-end'" >\n        <div :class="compact ? 'mx-1' : 'mx-2'">\n          <v-btn icon :disabled="!audioDownloaded || !allowPrevious" @click="$emit('previous-audio')" >\n            <v-icon size="20">{{ prevTrackIcon }}</v-icon>\n          </v-btn>\n        </div>\n\n        \x3c!-- <div :class="compact ? 'mx-1' : 'mx-2'">\n          <v-btn icon :disabled="!audioDownloaded" @click="forwardSeconds(-5)" >\n            <v-icon size="20">{{ backForwardIcon }}</v-icon>\n          </v-btn>\n        </div> --\x3e\n\n        <div :class="compact ? 'mx-2' : 'mx-3'">\n          <v-btn icon :disabled="!audioDownloaded" @click="playing = !playing" >\n            <v-icon size="30" v-text="playing ? pauseIcon : playIcon" ></v-icon>\n          </v-btn>\n        </div>\n\x3c!--\n        <div :class="compact ? 'mx-1' : 'mx-2'">\n          <v-btn icon :disabled="!audioDownloaded" @click="forwardSeconds(5)">\n            <v-icon size="20">{{ fastForwardIcon }}</v-icon>\n          </v-btn>\n        </div> --\x3e\n\n        <div :class="compact ? 'mx-1' : 'mx-2'">\n          <v-btn icon :disabled="!audioDownloaded || !allowNext" @click="$emit('next-audio')" >\n            <v-icon size="20">{{ nextTrackIcon }}</v-icon>\n          </v-btn>\n        </div>\n      </v-col>\n    </v-row>\n  </v-card-text>\n</v-card>\n\n`};export default i;
