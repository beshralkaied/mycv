<template>
  <div class="backimage container-fluid">
    <div class="row ">
      <div class="col-lg-9 col-12 text-start p-5 h-100 my-auto">
        <h2 class="">Make your website unforgettable.</h2>
        <h2 class="color">Free Church Websites.</h2>
      </div>

      <div class="col-lg-3 col-12 text-center h-100 my-auto">
        <div class="">
          <button class="custom-btn btn-7 position-relative d-inline-block  p-0 ">
            <span class="position-relative w-100 h-100  d-block  py-2 px-5">View a Demo</span>
          </button>
        </div>
        <div class="p-3 seccolor">Use Our Church Website Builder</div>
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
.backimage {
  background-image: url(https://freechurchwebsites.com/app/uploads/2019/07/ismael-paramo-I-YAoNw2nds-unsplash-compressor-1.jpg?id=7367) !important;
  background-position: center !important;
  background-repeat: no-repeat !important;
  background-size: cover !important;
}
h2 {
  line-height: 1.2em;
  font-weight: 600;
  letter-spacing: -0.015em;
  font-size: 5vw;
}
.color {
  color: #0fc5ef;
}
.seccolor {
  font-weight: 400;
  line-height: 1.9;
  font-size: 16px;
  color: rgba(255, 255, 255, 0.7);
}
.custom-btn {
  color: #fff;
  border-radius: 5px;

  background: transparent;
  cursor: pointer;
  transition: all 0.3s ease;

  box-shadow: inset 2px 2px 2px 0px rgba(255, 255, 255, 0.5),
    7px 7px 20px 0px rgba(0, 0, 0, 0.1), 4px 4px 5px 0px rgba(0, 0, 0, 0.1);
  outline: none;
}
.btn-7 {
  background: linear-gradient(
    0deg,
    rgba(255, 151, 0, 1) 0%,
    rgba(251, 75, 2, 1) 100%
  );
  border: none;
  line-height: 42px;
}

.btn-7:before,
.btn-7:after {
  position: absolute;
  content: "";
  right: 0;
  bottom: 0;
  background: rgba(251, 75, 2, 1);
  box-shadow: -7px -7px 20px 0px rgba(255, 255, 255, 0.9),
    -4px -4px 5px 0px rgba(255, 255, 255, 0.9),
    7px 7px 20px 0px rgba(0, 0, 0, 0.2), 4px 4px 5px 0px rgba(0, 0, 0, 0.3);
  transition: all 0.3s ease;
}
.btn-7:before {
  height: 0%;
  width: 2px;
}
.btn-7:after {
  width: 0%;
  height: 2px;
}
.btn-7:hover {
  color: rgba(251, 75, 2, 1);
  background: transparent;
}
.btn-7:hover:before {
  height: 100%;
}
.btn-7:hover:after {
  width: 100%;
}
.btn-7 span:before,
.btn-7 span:after {
  position: absolute;
  content: "";
  left: 0;
  top: 0;
  background: rgba(251, 75, 2, 1);
  box-shadow: -7px -7px 20px 0px rgba(255, 255, 255, 0.9),
    -4px -4px 5px 0px rgba(255, 255, 255, 0.9),
    7px 7px 20px 0px rgba(0, 0, 0, 0.2), 4px 4px 5px 0px rgba(0, 0, 0, 0.3);
  transition: all 0.3s ease;
}
.btn-7 span:before {
  width: 2px;
  height: 0%;
}
.btn-7 span:after {
  height: 2px;
  width: 0%;
}
.btn-7 span:hover:before {
  height: 100%;
}
.btn-7 span:hover:after {
  width: 100%;
}
</style>