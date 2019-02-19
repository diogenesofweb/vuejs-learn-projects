<template>
  <v-container mt-3 class="text-xs-center">
    <v-layout row fill-height wrap>
      <v-flex xs12 md6>
        <v-layout align-center justify-center row fill-height>
          <LenCard :length="sessionLength" title="Session" @plusMinus="plusMinus"/>
        </v-layout>
      </v-flex>

      <v-flex xs12 md6>
        <v-layout align-center justify-center row fill-height>
          <LenCard :length="breakLength" title="Break" @plusMinus="plusMinus"/>
        </v-layout>
      </v-flex>
    </v-layout>

    <v-layout align-center justify-center row fill-height>
      <Display
        @playPause="playPause"
        @replay="reset"
        :title="current"
        :minutes="minutes"
        :seconds="seconds"
      />
    </v-layout>
  </v-container>
</template>

<script>
import LenCard from "@/components/pomodoro/LenCard";
import Display from "@/components/pomodoro/Display";

export default {
  name: "pomodoro",
  components: {
    LenCard,
    Display
  },
  data() {
    return {
      sessionLength: 25,
      breakLength: 5,
      current: "Ready? GO!", // "Session" or "Break"
      running: false,
      intervalID: null,
      minutes: null,
      seconds: null,
      url: "https://goo.gl/65cBl1"
    };
  },
  mounted() {
    if (localStorage.sessionLength) {
      this.sessionLength = localStorage.sessionLength;
    }
    if (localStorage.breakLength) {
      this.breakLength = localStorage.breakLength;
    }
  },
  methods: {
    plusMinus(oper, name) {
      // console.log('plusMinusBreak', {oper, name})
      const key = name === "Break" ? "breakLength" : "sessionLength";
      oper === "plus"
        ? this[key] <= 59
          ? ++this[key]
          : (this[key] = 60)
        : this[key] > 1
        ? --this[key]
        : (this[key] = 1);
    },
    audioPlay() {
      // console.log("audioPlay");
      const audio = new Audio(this.url);
      audio.play();
    },
    finish() {
      // console.log("finish");
      this.audioPlay();

      this.current = this.current === "Session" ? "Break" : "Session";
      this.minutes =
        this.current === "Session"
          ? this.sessionLength - 1
          : this.breakLength - 1;
      this.seconds = 59;
    },
    tickTack() {
      // console.log("tickTack");
      const a = () =>
        this.minutes === 0
          ? this.finish()
          : (this.minutes--, (this.seconds = 59));
      this.seconds === 0 ? a() : this.seconds--;
    },
    replay() {
      // console.log("replay");
      this.running = true;
      this.intervalID = setInterval(this.tickTack.bind(this), 1000);
    },
    play() {
      // console.log("play");
      localStorage.sessionLength = this.sessionLength;
      localStorage.breakLength = this.breakLength;
      if (this.current !== "Ready? GO!") return this.replay();

      this.current = "Session";
      this.running = true;
      this.minutes =
        this.current === "Session"
          ? this.sessionLength - 1
          : this.breakLength - 1;
      this.seconds = 59;

      this.intervalID = setInterval(this.tickTack.bind(this), 1000);
    },
    pause() {
      // console.log("pause");
      clearInterval(this.intervalID);
      this.running = false;
    },
    reset() {
      // console.log("replay");
      clearInterval(this.intervalID);
      this.current = "Ready? GO!";
      this.running = false;
      this.intervalID = null;
      this.minutes = null;
      this.seconds = null;
    },
    playPause() {
      // console.log("playPause !!!");
      this.running === false ? this.play() : this.pause();
    }
  }
};
</script>
