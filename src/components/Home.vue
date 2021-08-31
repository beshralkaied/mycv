<template>
  <div class="body">
    
   <Header theme="sale" />
   
    <div class="maindiv">Development Services</div>
    <div class="mainp">
      Sample text. Click to select the text box. Click again or double click to
      start editing the text.
    </div>

    <div class="container all">
      <div class="suball">
        <!-- first div -->

        <div class="mainhome">
          <div class="container cediv">
            <div class="mainimg"></div>
            <h5>PERSONAL STATEMENT</h5>
            <p>
              A highly focused, versatile Computer Science graduate,
              professionally competent with very good qualifications...
            </p>

            <div class="dropdown">
              <p class="desc">More</p>
              <div class="dropdown-content">
                <div class="hover">
                  <div class="container cediv">
                    <div class="mainimg"></div>
                    <h5>PERSONAL STATEMENT</h5>
                    <p>
                      A highly focused, versatile Computer Science graduate,
                      professionally competent with very good qualifications.
                      Deft in building productive teamsas well as leading and
                      motivating cross-functional teams eliciting superior
                      performances. A proactive achievement-driven professional
                      with strong teamwork ethics, integrity and excellent
                      communication, coordination,problem-solving, decision
                      making, planning and execution skills.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- secande div -->

        <div class="mainhome margin">
          <div class="container cediv">
            <div class="mainimg"></div>
            <h5>EXECUTIVE SYNOPSIS</h5>
            <p>
              CAPABLE OF DEVELOPING AND IMPLEMENTING STRATEGIES AND PLANS TO
              PROVIDE ALL REQUIRED TERMS.
            </p>

            <div class="dropdown">
              <p class="desc">More</p>
              <div class="dropdown-content">
                <div class="hover">
                  <div class="container cediv">
                    <div class="mainimg"></div>
                    <h5>EXECUTIVE SYNOPSIS</h5>
                    <p>
                      CAPABLE OF DEVELOPING AND IMPLEMENTING STRATEGIES AND
                      PLANS TO PROVIDE ALL REQUIRED TERMS. PROACTIVE,
                      ACHIEVEMENT-DRIVEN PROFESSIONAL WITH EXCELLENT
                      COMMUNICATION, PROBLEM-SOLVING, DECISION MAKING, PLANNING
                      AND EXECUTION SKILLS
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- third div -->

        <div class="mainhome margin">
          <div class="container cediv">
            <div class="mainimg"></div>
            <h5>EDUCATION</h5>
            <p>
              Bachelor Degree in Computer Science,Zarqa University, Zarqa-Jordan
              (Jan 2020) General certificate of high school, Scientific
              stream...
            </p>

            <div class="dropdown">
              <p class="desc">More</p>
              <div class="dropdown-content">
                <div class="hover">
                  <div class="container cediv">
                    <div class="mainimg"></div>
                    <h5>EDUCATION</h5>
                    <p>
                      Bachelor Degree in Computer Science,Zarqa University,
                      Zarqa-Jordan (Jan 2020) General certificate of high
                      school, Scientific stream.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- 4th div -->

        <div class="mainhome">
          <div class="container cediv">
            <div class="mainimg"></div>
            <h5>PERSONAL INFORMATION</h5>
            <p>
              A highly focused, versatile Computer Science graduate,
              professionally competent with very good qualifications...
            </p>

            <div class="dropdown">
              <p class="desc">More</p>
              <div class="dropdown-content">
                <div class="hover">
                  <div class="container cediv">
                    <div class="mainimg"></div>
                    <h5>PERSONAL INFORMATION</h5>
                    <p>
                      Date of Birth: 26 march 1997 Languages: Arabic, English
                      References: Available Upon Request
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <Statement></Statement>
    <Synopsis></Synopsis>
    <Skills></Skills>
    <Education></Education>
    <Information></Information>
  </div>
</template>

<script lang="ts">
import Header from "@/components/Header.vue";
import { defineComponent } from "vue";
import Skills from "@/components/Skills.vue";
import Statement from "@/components/Statement.vue";
import Synopsis from "@/components/Synopsis.vue";
import Education from "@/components/Education.vue";
import Information from "@/components/Information.vue";

export default defineComponent({
  components: {
    Header,
    Skills,
    Statement,
    Synopsis,
    Education,
    Information,
  },
  setup() {},
});
</script>

<style scoped>
.body {
  color: #ffffff;
  background-color: #292d33;
}
.mainhome {
  background-color: #ffffff;
  color: #111111;
  text-align: center;
  position: relative;
  line-height: 1.6;
  font-size: 1rem;
  width: 337px;
  height: 453px;
  border-radius: 15px;
  display: block;
  margin-top: 21px;
  margin-bottom: 20px;
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
  margin-left: 57.484px;
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
  width: 337px ;
  /* 602px*/
  height: fit-content;
  border-radius: 15px;
  display: block;
}
.all {
  display: flex;
  grid-gap: 63px;
  width: 100%;
  height: 1140px;
  grid-template-columns: repeat(3, calc(33.3333% - 42px));
  min-height: 970px;
  flex-wrap: wrap;
  position: relative;
}
.suball {
  display: flex;
  width: 1111px;
  height: 1140px;
  grid-template-columns: repeat(3, calc(33.3333% - 42px));
  min-height: 970px;
  flex-wrap: wrap;
}
.margin {
  margin-left: 50px;
}
</style>
