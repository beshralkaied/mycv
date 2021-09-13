<template>
  <div class="sections pt-5">
    <div class="container main-div w-100 text-start">
      <div class="row p-5">
        <div class="col">
          <h4><i class="fa fa-heart mr-3 mb-4"></i> Free Church Websites</h4>
          <div class="main-sub">Go Forth and</div>
          <div class="main-sub">
            <div class="flipword">
              <div id="flip">
                <div><div>Get SocialCollect</div></div>
                <div><div>Start a Discussion</div></div>
                <div><div>Create a Website</div></div>
              
              </div>
            </div>
          </div>

          <p class="mt-5">A Nonprofit Organization.</p>
        </div>
        <div class="container col pad">
          <a class="btn play rounded-circle" href="#">
            <span class="align-middle">
              <i style="color: white; font-size: 20px" class="fa fa-play"></i>
            </span>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>


<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  setup() {},
});
</script>

<style scoped>
.sections {
  color: #000;
}
.main-div {
  max-width: 100%;
  min-height: 100vh;
}
.main-div h4 {
  font-size: 18px;
  color: #fff;
  font-weight: 400;
  font-family: "Cerebri Sans", sans-serif;
  line-height: 1.9;
}
.main-div p {
  font-size: 21px;
  line-height: 1.428em;
  color: rgba(255, 255, 255, 0.6);
}

.main-sub {
  font-weight: 700;
  font-size: 4vw;
  line-height: 1.1em;
  letter-spacing: -0.4px;
  color: rgb(255, 255, 255);
  width: max-content;
  font-family: "Cerebri Sans", sans-serif;
}
.play {
  background: linear-gradient(
    to right,
    rgb(15, 197, 239) 0%,
    rgb(141, 216, 22) 100%
  );
  width: 100px;
  height: 100px;
  padding: 36px;
}
.pad a:hover {
  background: linear-gradient(
    to right,
    rgb(141 216 22) 0%,
    rgb(15 197 239) 100%
  );
}
.pad {
  padding: 117px 170px 86px 46px;
}
.flipword {

  /* padding-top: 200px; */
  /* position: fixed; */
  padding-bottom: 15px;
  width: 100%;
  bottom: 45%;
  display: block;
}

#flip {
  height: 65px;
  overflow: hidden;
}

#flip > div > div {
  padding: 4px 12px;
  height: 60px;
  line-height: 52px; /* >>> this make text vertical center inside the box <<< */
  margin-bottom: 25px; /* >>> each frame step move #flip>div down 90px, make sure #flip height and it's margin equal 90px <<< */
  display: inline-block;
}

/* >>> only apply animation on first div which is direct child of #flip <<< */
#flip > div:first-child {
  animation: show 10s linear infinite;
}




@keyframes show {
  0% {
    margin-top: -270px;
  }
  5% {
    margin-top: -180px;
  }
  33% {
    margin-top: -180px;
  }
  38% {
    margin-top: -90px;
  }
  66% {
    margin-top: -90px;
  }
  71% {
    margin-top: 0px;
  }
  99.99% {
    margin-top: 0px;
  }
  100% {
    margin-top: -270px;
  }
}
</style>
