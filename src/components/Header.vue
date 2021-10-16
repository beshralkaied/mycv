<template>
  <nav
    class="navbar navbar-expand-lg main"
    :class="{
      sale: theme === 'sale',
      transparent: theme === 'transparent',
      LeightHeader: theme === 'LeightHeader',
    }"
  >
    <div class="container-fluid">
      <div class="navbar-brand p-0 d-flex">
        <img src="./assets/logo.png" />
        <h2>My Cv</h2>
      </div>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navMenu"
        aria-controls="navMenu"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"
          ><svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clip-rule="evenodd"
            /></svg
        ></span>
      </button>
      <div class="collapse navbar-collapse" id="navMenu">
        <div class="navbar-nav d-flex justify-content-end w-50">
          <router-link
            class="nav-link"
            :class="{ active: currentPage === 'Home' }"
            to="/"
            >Home</router-link
          >
          <router-link
            class="nav-link"
            :class="{ active: currentPage === 'Website' }"
            to="/website"
            >Website</router-link
          >
          <router-link
            class="nav-link"
            :class="{ active: currentPage === 'About' }"
            to="/about"
            >About</router-link
          >
          <!-- dropend -->
          <div class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdownMenuLink"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Forms
            </a>
            <ul
              class="dropdown-menu form-bg"
              aria-labelledby="navbarDropdownMenuLink"
            >
              <li>
                <router-link
                  class="nav-link"
                  :class="{ active: currentPage === 'Form' }"
                  to="/form"
                  >View Forms</router-link
                >
              </li>
              <li>
                <div class="truedisplay">
                  <router-link
                    class="nav-link"
                    :class="{ active: currentPage === 'PersonalPage' }"
                    to="/personalPage"
                    >PersonalPage</router-link
                  >
                  <div class="d">
                    <ul class="nav flex-column">
                      <li class="nav-item">
                        <router-link
                          class="nav-link"
                          :class="{ active: currentPage === 'Add' }"
                          to="/personalPage/add"
                          >Add</router-link
                        >
                      </li>
                      <li class="nav-item">
                        
                      </li>
                    </ul>
                  </div>
                </div>
              </li>

              <li>
                <div class="truedisplay">
                  <router-link
                    class="nav-link"
                    :class="{ active: currentPage === 'FamilyPage' }"
                    to="/familyPage"
                    >FamilyPage</router-link
                  >
                  <div class="d">
                    <ul class="nav flex-column">
                      <li class="nav-item">
                        <router-link
                          class="nav-link"
                          :class="{ active: currentPage === 'FamilyAdd' }"
                          to="/familyPage/familyAdd"
                          >FamilyAdd</router-link
                        >
                      </li>
                   
                    </ul>
                  </div>
                </div>
              </li>

              <li>
                <div class="truedisplay">
                  <router-link
                    class="nav-link"
                    :class="{ active: currentPage === 'WorkPage' }"
                    to="/workPage"
                    >WorkPage</router-link
                  >
                  <div class="d">
                    <ul class="nav flex-column">
                      <li class="nav-item">
                        <router-link
                          class="nav-link"
                          :class="{ active: currentPage === 'WorkAdd' }"
                          to="/workPage/workAdd"
                          >WorkAdd</router-link
                        >
                      </li>
                    
                    </ul>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>


<script lang="ts">
import { defineComponent } from "vue";
import { useRouter } from "vue-router";

export default defineComponent({
  props: ["theme"],

  setup() {
    let router = useRouter();
    let currentPage = router.currentRoute.value.name;

    return { currentPage };
  },
});
</script>



<style scoped>
.logo {
  display: flex;
  background-color: #292d33;
  padding: 10px 0px 0px 10px;
}
.logo h2 {
  margin: 0 0;
  color: white;
  width: max-content;
}
.main {
  background-color: #292d33;
  padding: 0;
}

.main a {
  color: white;
  text-align: center;
  padding: 26px 16px;
  text-decoration: none;
}

.main a:hover {
  background-color: #ea6309;
  color: white;
}
.sale {
  background-color: white;
}

.sale h2 {
  color: #292d33;
}
.main.sale a {
  color: #292d33;
}
.active {
  background-color: #ea6309;
}
.transparent {
  background-color: transparent;
}
.LeightHeader {
  background-color: white;
}
.LeightHeader h2 {
  color: #292d33;
}
.main.LeightHeader a {
  color: #292d33;
}
.form-bg {
  background-color: #292d33;
  padding: 0;
  margin: 0;
  border: none;
}
.d {
  display: none;
}
.truedisplay:hover .d {
  display: block;
}
</style>
