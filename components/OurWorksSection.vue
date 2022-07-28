<template>
  <section id="our-works-section" class="our-works-section">
    <div class="section-buttons">
      <button data-prev :class="{active: activeId > 0}" :disabled="activeId === 0" @click="prev">
        <span>
          <svg xmlns="http://www.w3.org/2000/svg" width="31.755" height="23.402" viewBox="0 0 31.755 23.402">
            <g id="Layer_2" data-name="Layer 2" transform="translate(-2.87 9.537)">
              <g id="Layer_1" data-name="Layer 1" transform="translate(2.87 -9.537)">
                <path
                  id="Path_33196"
                  data-name="Path 33196"
                  d="M2.87,110v2.645l10.057,9.257h4.027l-9.974-9.18H34.626V110Z"
                  transform="translate(-2.87 -98.505)"
                  fill="#dc7550"
                />
                <path
                  id="Path_33195"
                  data-name="Path 33195"
                  d="M10.507,0,6.66.748,0,9.779l3.972-.772Z"
                  transform="translate(3.867 0) rotate(11)"
                  fill="#dc7550"
                />
              </g>
            </g>
          </svg>
        </span>
      </button>
      <button data-next :class="{active: activeId < 3}" :disabled="activeId === 3" @click="next">
        <span style="transform: rotateZ(180deg)">
          <svg xmlns="http://www.w3.org/2000/svg" width="31.755" height="23.402" viewBox="0 0 31.755 23.402">
            <g id="Layer_2" data-name="Layer 2" transform="translate(-2.87 9.537)">
              <g id="Layer_1" data-name="Layer 1" transform="translate(2.87 -9.537)">
                <path
                  id="Path_33196"
                  data-name="Path 33196"
                  d="M2.87,110v2.645l10.057,9.257h4.027l-9.974-9.18H34.626V110Z"
                  transform="translate(-2.87 -98.505)"
                  fill="#dc7550"
                />
                <path
                  id="Path_33195"
                  data-name="Path 33195"
                  d="M10.507,0,6.66.748,0,9.779l3.972-.772Z"
                  transform="translate(3.867 0) rotate(11)"
                  fill="#dc7550"
                />
              </g>
            </g>
          </svg>
        </span>
      </button>
    </div>
    <div id="our-works" class="section-works">
      <div class="work one">
        <div class="work__inner one">
          <div class="work__heading" data-splitting="lines" data-animation="text">
            EZ Credit Card
          </div>
          <p class="work__subtext" data-splitting="lines" data-animation="text">
            Creating a microsite and an app for a credit card that empowers Gen Z and late millennials to be financially independent.
          </p>
          <a href="/" class="work-image__large">
            <img src="https://admin.pineapple.design//uploads/EZ_home_1_b4fda779e4.jpg" alt="">
          </a>
        </div>
      </div>
      <div class="work two">
        <div class="work__inner two">
          <div class="work__heading" data-splitting="lines" data-animation="text">
            GreenIvy
          </div>
          <p class="work__subtext" data-splitting="lines" data-animation="text">
            A SaaS interface built to empower farmers in Africa to make better, data-driven decisions.
          </p>
          <a href="" class="work-image__large">
            <img src="https://admin.pineapple.design//uploads/Green_Ivy_home_1_d261df3358.jpg" alt="">
          </a>
        </div>
      </div>
      <div class="work three">
        <div class="work__inner three">
          <div class="work__heading" data-splitting="lines" data-animation="text">
            Antarctica Global
          </div>
          <p class="work__subtext" data-splitting="lines" data-animation="text">
            A reimagined web experience for Antarctica Global that highlighted their custom software solutions, core values, and unique planet-friendly philosophies.
          </p>
          <a href="" class="work-image__large">
            <img src="https://admin.pineapple.design//uploads/AG_home_2_74bf3b4758.jpg" alt="">
          </a>
        </div>
      </div>
      <div class="work__cta">
        <div class="work__cta-text" data-splitting="lines" data-animation="text">
          Like what you are seeing so far?
        </div>
        <div class="work__cta-link" data-splitting="lines" data-animation="text">
          <a href="" class="cta-link__text">
            See all our work
          </a>
          <div class="cta-link__icon">
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" width="16.4" height="12.086">
                <g>
                  <g>
                    <path fill="currentColor" d="M16.4 5.939v1.366l-5.194 4.781h-2.08l5.151-4.741H0V5.937Z" />
                    <path fill="currentColor" d="M9.077 1.036H11.1l4.267 3.922-2.09-.001Z" />
                  </g>
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data () {
    return {
      activeId: 0
    }
  },
  mounted () {
    this.setTransformForSection()
  },
  methods: {
    setTransformForSection () {
      const section = document.getElementById('our-works')
      section.style.transform = 'translate(0px, 0px)'
    },
    next () {
      if (this.activeId < 3) {
        this.activeId++
        this.changeTransformPosition(this.activeId)
      }
    },
    prev () {
      if (this.activeId > 0) {
        this.activeId--
        this.changeTransformPosition(this.activeId)
      }
    },
    changeTransformPosition (index) {
      const section = document.getElementById('our-works')
      const allInnerSections = section.getElementsByClassName('work__inner')
      const allInnerSectionsArray = [...allInnerSections]
      const innerWidth = allInnerSectionsArray[0].offsetWidth
      if (index === 0) {
        section.style.transform = 'translate(0px, 0px)'
      } else if (index === 1) {
        section.style.transform = `translate(-${innerWidth}px, 0px)`
      } else if (index === 2) {
        section.style.transform = `translate(-${innerWidth * 2}px, 0px)`
      } else if (index === 3) {
        section.style.transform = `translate(-${(innerWidth * 2) + 380}px, 0px)`
      }
    }
  }
}
</script>

<style scoped>
.our-works-section {
    width: 100vw;
    position: relative;
}

.section-buttons {
    position: absolute;
    top: 50%;
    left: 0;
    width: 100vw;
    transform: translateY(-50%);
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 1;
    padding-left: 7.1rem;
    padding-right: 7.1rem;
}

.section-buttons button {
    width: 5rem;
    height: 5rem;
    min-width: 70px;
    min-height: 70px;
    border-radius: 50%;
    background: rgba(0,0,0,.15);
    opacity: 0;
    transition: opacity 1s ease;
    pointer-events: none;
}

.section-buttons button.active {
    opacity: 1;
    pointer-events: auto;
}

.section-buttons button path {
    fill: #fff;
}

span {
    display: inline-block;
}

.section-works {
    display: inline-flex;
    flex-wrap: nowrap;
    transition: transform 2s ease-in;
}

.work.one {
    background-color: #000;
}

.work.two {
    background-color: #dc7550;
}

.work.three {
    background-color: #f5f5f6;
}

.work__inner {
    height: 58rem;
    padding-top: 7.9rem;
    padding-left: 8rem;
    border-radius: 0 42rem 42rem 0;
    width: 77rem;
}

.work__heading {
    margin-bottom: 19px;
    font-size: 3rem;
    line-height: 1.375;
    font-family: 'Telegraf';
}

.work__subtext {
    font-size: 1.2rem;
    width: 100%;
    opacity: .8;
    max-width: 35rem;
    line-height: 1.5625;
}

.work-image__large {
    display: block;
    margin-top: 50px;
    border-radius: 10px;
    margin-left: 35px;
    background-color: #fff;
    width: 47.4rem;
    height: 26.7rem;
    opacity: 1;
    clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0px 100%);
}

.work-image__large img {
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    border-radius: 10px;
}

.work__inner.one {
    color: #0f2a14;
    background-color: #d2eac3;
}

.work__inner.two {
    color: #fff;
    background-color: #000;
}

.work__inner.three {
    color: #fff;
    background-color: #dc7550;
}

.work__cta {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: 10rem;
    padding-right: 16.1rem;
    background-color: #f5f5f6;
}

.work__cta-text {
    width: 20.3rem;
    margin-bottom: 29px;
    font-size: 2.3rem;
    line-height: 1.3333333333;
    font-family: 'Telegraf';
}

.work__cta-link {
    display: flex;
    align-items: center;
    cursor: pointer;
    font-size: 1.5rem;
    font-family: 'Telegraf';
}

.cta-link__text {
    color: #dc7550;
    padding-bottom: 5px;
    padding-right: 5px;
    margin-right: 8px;
    border-bottom: 1px solid #dc7550;
}

.cta-link__icon {
    color: #dc7550;
}

@media screen and (min-width: 1450px) {
  .work__inner {
    width: 84rem;
    padding-left: 11rem;
  }

  .work-image__large {
    width: 52.4rem;
  }
}
</style>
