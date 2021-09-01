<template>
  <div class="mainhome">
    <div class="container cediv">
      <div class="mainimg"></div>
      <h5>{{ title }}</h5>
      <p>{{ ShrinkText(desc) }} ...</p>

      <div class="dropdown">
        <p class="desc">More</p>
        <div class="dropdown-content">
          <div class="hover">
            <div class="container cediv">
              <p>
                {{ desc }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    title: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
  },

  setup() {
    function ShrinkText(text: string): string {
      let x = text;

      let y = x.split(" ");

      let z = y.length < 15 ? y : y.splice(0, 15);

      return z.join(" ");
    }

    return {
      ShrinkText,
    };
  },
});
</script>

<style scoped>
.mainhome {
  background-color: #ffffff;
  color: #111111;
  text-align: center;
  position: relative;
  line-height: 1.6;
  font-size: 1rem;
  width: 303px;
  height: 453px;
  border-radius: 15px;
  display: block;
  margin-top: 21px;
  margin-bottom: 20px;
  margin-left: auto;
}
.cediv {
  position: relative;
  flex: 1;
  max-width: 100%;
  padding: 0 30px 32px;
  display: block;
}
.mainimg {
  background-image: url("../assets/004-sustainability-1.png");
  width: 171px;
  height: 171px;
  -webkit-border-radius: 183px;
  -webkit-background-clip: padding-box;
  -moz-border-radius: 183px;
  -moz-background-clip: padding;
  border-radius: 183px;
  background-clip: padding-box;
  margin: 7px 0 0 5px;
  float: left;
  background-size: cover;
  background-position: center center;
  margin-left: 39.484px;
  margin-right: 47.5px;
  margin-top: -38px;
  padding: 6px;
  border-style: solid;
  border-color: #ffffff;
  border-width: 6px;
  box-shadow: 5px 5px 20px 0 rgb(0 0 0 / 40%);
}
h5 {
  letter-spacing: 2px;
  font-weight: 400;
  text-transform: uppercase;
  font-size: 1.25rem;
  margin: 30px auto 0;
  padding: 0;
  color: #ea6309;
}
p {
  font-size: 1.125rem;
  line-height: 1.6;
  font-weight: 370;
  font-style: italic;
  margin: 20px 0 0;
}
.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
}

.dropdown:hover .dropdown-content {
  display: block;
}

.desc {
  padding: 15px;
  text-align: center;
  background-color: #adcce9;
  border-radius: 50px;
  font-size: 0.875rem;
  letter-spacing: 1px;
  border-style: none;
  text-transform: uppercase;
  font-weight: 400;
  padding: 10px 30px;
}
.desc:hover {
  background-color: #555c66;
}
.hover {
  background-color: #ffffff;
  color: #111111;
  text-align: center;
  position: relative;
  line-height: 1.6;
  font-size: 1rem;
  width: 303px;
  /* 602px*/
  height: fit-content;
  border-radius: 15px;
  display: block;
}
.margin {
  margin-left: 56px;
}
</style>
