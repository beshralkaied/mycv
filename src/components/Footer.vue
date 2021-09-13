<template>
  <div class="container">
    <div class="row text-start pt-5">
      <div class="col">
        <h2>Menu</h2>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">WebSit</a></li>
          <li><a href="#">About</a></li>
        </ul>
      </div>
      <div class="col">
        <h2>Recent Blog Post</h2>
        <a class="fs-5 lh-base" href="#">
          Tech Soup – Super Low Cost Software and Hardware for Churches
        </a>
        <p class="pt-3">October 15, 2019</p>
        <div class="pt-3"><hr /></div>
      </div>
      <div class="col">
        <h2>Contact</h2>
        <a class="" href="#">Contact Us</a>
        <div class="color pt-4">
          Free Church Websites 1412 Broadway, 21st Floor New York, NY 10018
        </div>
        <a class="pt-4" href="#">beshr@alkaied.com</a>
      </div>
      <div class="col">
        <h2>Follow us</h2>
        <div class="see">
          <ul>
            <li><i class="fab fa-youtube"></i></li>
            <li><i class="fab fa-twitter"></i></li>
            <li><i class="fab fa-facebook-square"></i></li>
          </ul>
        </div>
        <div class="fs-5 pt-3">Subscribe For Updates & Insights</div>
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
ul {
  list-style-type: none;
  color: #98a2aa;
}
.see ul li {
  display: inline-block;
  margin-right: 1.2em;
  font-size: 1em;
  line-height: 1em;
}
a {
  text-decoration: none;
  font-size: 16px;
  line-height: 2em;
  color: #98a2aa;
}
p {
  font-size: 0.625em;
  color: #98a2aa;
}
h2 {
  font-size: 18px;
  padding-bottom: 15px;
}
.color {
  color: #98a2aa;
}
</style>