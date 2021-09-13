<template>
  <section id="hero1" class="hero mt-5">
    <div class="bgpattern py-5">
      <div class="copy container">
        <h6 class="title p-5">REAL STORIES</h6>
        <div>
          <div class="container paragraph p-4">
            “Our website, logo and print materials were exactly what we needed
            for our Church’s capital campaign! The graphics truly reflected our
            goals & mission and it was great working with Free Church Websites.”
          </div>
          <div>
            <figure class="avatar">
              <img
                src="https://nyc3.digitaloceanspaces.com/fcw-static-new/app/uploads/2019/09/24112237/fr-ward-1-tn.png"
                alt=""
              />
            </figure>
            <h5>The Rev. Fr. Arthur Ward Jr</h5>
            <h6 class="jop">Lead Pastor</h6>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  setup() {},
});
</script>



<style scoped>
#hero1 {
  background: url(https://freechurchwebsites.com/app/uploads/2019/07/Testimonials-PIC-small-1.jpg?id=7287);
  background-size: cover;
  background-position: center center;
  background-attachment: fixed;
}





.bgpattern {
  background: rgba(0, 0, 0, 0.45)
    url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAACCAYAAACddGYaAAAAD0lEQVQIW2NkQABjRmQOAAM+AGkQsDBSAAAAAElFTkSuQmCC)
    repeat;
}

.copy {

  width: 100%;
}
.title {
  font-size: 16px;
  font-weight: 600;
  letter-spacing: 0.2em;
  font-family: Poppins;
  line-height: 1.8;
}



.avatar img {
  width: 68px;
}

.copy h5 {
  font-size: 16px;
  line-height: 1.5em;
  margin: 0;
}

.jop {
  color: rgba(255, 255, 255, 0.43);
  font-size: 14px;
  line-height: 1.5em;
}

.paragraph {
  width: 66%;
  font-size: 24px;
  line-height: 43px;
}
</style>