<template>
  <section id="hero-section" class="hero-section__wrapper">
    <div class="section-container">
      <h1 id="header-text" class="header-text" data-splitting="lines" data-animation="text">
        Designing digital experiences that <span class="highlight">enrich human lives</span> and help <span class="highlight">businesses grow.</span>
      </h1>
      <div class="section-flex__container">
        <div class="hero-text-section">
          <div class="text-dash" />
          <div>
            <p id="hero-text" class="hero-text" data-splitting="lines" data-animation="text">
              Pineapple is a global UX/UI agency helping ambitious companies and visionary entrepreneurs bring the next design revolution.
            </p>
            <a href="/" class="hero-cta">
              <span>
                <span class="button-label">
                  <span class="inner">
                    <span class="initial">
                      Start a project
                    </span>
                    <span class="animated">
                      Start a project
                    </span>
                  </span>
                </span>
                <span class="button-icon">
                  <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16.4" height="12.086">
                      <g><g>
                        <path fill="currentColor" d="M16.4 5.939v1.366l-5.194 4.781h-2.08l5.151-4.741H0V5.937Z" />
                        <path fill="currentColor" d="M9.077 1.036H11.1l4.267 3.922-2.09-.001Z" />
                      </g></g>
                    </svg>
                  </div>
                </span>
              </span>
            </a>
          </div>
        </div>
        <div class="hero-slider-section">
          <div class="slider-wrapper">
            <button class="play-btn">
              <span class="play">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 33.077 36.709">
                  <path d="M5.993.809C2.683-1.089 0 .466 0 4.28v28.146c0 3.818 2.683 5.371 5.993 3.474l24.6-14.108c3.311-1.9 3.311-4.976 0-6.874Z" fill="currentColor" />
                </svg>
              </span>
            </button>
            <div class="slider-item">
              <client-only>
                <vimeo-player
                  ref="player"
                  :video-id="'683742202'"
                  :loop="true"
                  :controls="false"
                  :autoplay="true"
                  :options="{
                    autopause: false,
                    muted: true,
                    transparent: false
                  }"
                />
              </client-only>
            </div>
          </div>
          <div class="slider-indicator">
            <div class="indicator-content">
              <h3>THE CO-FOUNDERS</h3>
              <p>Our vision for Pineapple</p>
            </div>
            <div class="indicator-image">
              <img src="https://res.cloudinary.com/pineappledesign/image/upload/q_auto,f_auto/v1649731993/pineapple-website/theCofounders_vkzemm.png" alt="">
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
    }
  },
  mounted () {
  },
  methods: {
  }
}
</script>

<style scoped>
.hero-section__wrapper {
    background-color: #000;
}

.section-container {
    padding: 21.5rem 12rem 0;
    margin: 0 auto;
    color: #fff;
}

.section-container .header-text {
    font-size: 3.5rem;
    line-height: 1.3;
    max-width: 54.5rem;
    width: 100%;
    margin-bottom: 4rem;
}

.section-flex__container {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
}

.hero-text-section {
    display: flex;
}

.text-dash {
    width: 26px;
    height: 1px;
    margin-top: 12px;
    margin-right: 20px;
    background-color: #dc7550;
}

.hero-text {
    max-width: 28.4rem;
    width: 100%;
    margin-bottom: 35px;
    color: hsla(0,0%,100%,.6);
    font-size: 1.2rem;
    line-height: 1.5625;
}

.hero-cta {
    position: relative;
    cursor: pointer;
    transition: background .2s,border .2s;
    background: #fff;
    color: #000;
    border-radius: 5px;
    padding: 1.4rem 1.6rem;
    display: inline-flex;
    align-items: center;
}

.hero-cta:hover {
    background: #dc7550;
    color: #fff;
}

.button-label {
    display: inline-flex;
    align-items: center;
    position: relative;
}

.button-label .inner {
    display: flex;
    transition: transform .6s cubic-bezier(1,0,0,1);
}

.hero-cta:hover .button-label .inner {
    transition: transform .6s cubic-bezier(.19,1,.22,1);
    transform: translateY(-125%);
}

.button-label .inner span {
    display: flex;
    white-space: nowrap;
}

.hero-cta .button-label .inner .initial,
.hero-cta .button-label .inner .animated {
    transition: opacity .6s cubic-bezier(1,0,0,1);
}

.hero-cta:hover .button-label .inner .initial,
.hero-cta:hover .button-label .inner .animated {
    transition: transform .6s cubic-bezier(.19,1,.22,1);
}

.hero-cta:hover .button-label .inner .initial {
    opacity: 0;
}

.hero-cta:hover .button-label .inner .animated {
    opacity: 1;
}

.button-label .inner .animated {
    opacity: 0;
    position: absolute;
    top: 125%;
}

.button-icon {
    margin-left: 12px;
    transition: transform .3s cubic-bezier(.19,1,.22,1) 0s;
    will-change: transform;
    display: inline-block;
    line-height: 0;
}

.hero-slider-section {
    margin-top: -3rem;
    position: relative;
    width: 100%;
    max-width: 35rem;
    cursor: pointer;
}

.slider-wrapper {
    max-width: 35rem;
    width: 100%;
    aspect-ratio: 1/1;
    display: grid;
    pointer-events: none;
    background-color: #000;
}

button.play-btn {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    z-index: 1;
    width: 6rem;
    height: 6rem;
    pointer-events: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgba(0,0,0,.1);
    color: #fff;
    border-radius: 50%;
    cursor: pointer;
}

.play-btn > span,
.hero-cta > span {
    position: relative;
    z-index: 1;
    display: flex;
    align-items: center;
}

.play-btn .play {
    width: 1.546rem;
    height: 1.716rem;
    grid-area: 1/1;
}

.slider-item {
    grid-area: 1/1;
    transition: opacity 2s ease;
    opacity: 1;
    width: 100%;
}

.slider-indicator {
    position: absolute;
    display: flex;
    align-items: center;
    left: -20rem;
    bottom: 7.9rem;
}

.indicator-content {
    text-align: right;
    margin-right: 20px;
}

.indicator-content h3 {
    margin-bottom: 4px;
}

.indicator-content p {
    color: hsla(0,0%,100%,.6);
}

.indicator-image {
    grid-area: 1/1;
    transition: opacity 2s ease;
    opacity: 1;
    width: 54px;
}

.indicator-image img {
    -o-object-fit: cover;
    object-fit: cover;
    height: 100%;
    width: 100%;
}

@media screen and (min-width: 1450px) {
  .hero-slider-section {
    max-width: 39rem;
  }

  .slider-wrapper {
    max-width: 39rem;
  }
}
</style>
