<template>
  <v-container class="text-xs-center">
    <v-layout row align-center justify-center>
      <v-card max-width="500px" class="white--text">
        <v-card-title class="blue-grey darken-4">
          <v-spacer></v-spacer>
          <div class="text-xs-right display-1">
            <div class="primary--text">{{ result }}</div>
            <div>
              <span>{{ span1 }}</span>
              <span>{{ oper }}</span>
              <span>{{ span2 }}</span>
            </div>
          </div>
        </v-card-title>

        <v-card-actions class="blue-grey darken-2">
          <v-layout wrap row>
            <v-flex xs12>
              <Operations @operPres="operPres"/>
            </v-flex>

            <v-flex xs9>
              <Numbers @numPres="numPres"/>
            </v-flex>

            <v-flex xs3 mt-4>
              <v-layout column align-center justify-space-around fill-height>
                <v-btn depressed color="red darken-1 display-1 primary--text" @click="clear">
                  <span>C</span>
                </v-btn>
                <v-spacer></v-spacer>
                <v-btn depressed color="blue-grey darken-4 display-1 white--text" @click="calculate">
                  <span>=</span>
                </v-btn>
              </v-layout>
            </v-flex>
          </v-layout>
        </v-card-actions>
      </v-card>
    </v-layout>
  </v-container>
</template>

<script>
import Operations from "@/components/calculator/Operations";
import Numbers from "@/components/calculator/Numbers";

export default {
  name: "calculator",
  components: {
    Operations,
    Numbers
  },
  data() {
    return {
      result: "0",
      span1: "0",
      span2: "",
      oper: ""
    };
  },
  methods: {
    numPres(val) {
      // console.log("numPres", { val });
      const dotRegex = /\./;
      const check = num => {
        if (num.length > 9) return num;
        if (val === "." && dotRegex.test(num)) val = "";
        const res = (num + val).replace(/^0(?=\d+)/, "");
        // console.log({ res });
        return res;
      };

      !this.oper
        ? (this.span1 = check(this.span1))
        : (this.span2 = check(this.span2));
    },
    operPres(val) {
      // console.log("operPres", { val });
      this.span2 ? this.calculate() : null;
      this.oper = val;
    },
    clear() {
      // console.log("clear");
      this.result = "0";
      this.span1 = "0";
      this.span2 = "";
      this.oper = "";
    },
    calculate() {
      // console.log("calculate");
      const num1 = parseFloat(this.span1);
      const num2 = parseFloat(this.span2);
      let result;

      if (!num2) return null;

      switch (this.oper) {
        case " / ":
          result = num1 / num2;
          break;
        case " * ":
          result = num1 * num2;
          break;
        case " - ":
          result = num1 - num2;
          break;
        case " + ":
          result = num1 + num2;
          break;
        default:
          console.log("Error");
      }
      // console.log({ result });
      if (!result) return this.clear();

      const integerOrDecimal2 = Number.isInteger(result)
        ? result
        : result.toFixed(2);

      this.result = integerOrDecimal2;
      this.span1 = "" + integerOrDecimal2;
      this.span2 = "";
      this.oper = "";
    }
  }
};
</script>

<style scoped>
.v-btn {
  height: 100px;
}
</style>
