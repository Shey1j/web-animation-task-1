<template>
  <section id="door-section" class="hero-door__section" data-scroll-section>
    <div class="arc-text">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1490.342 1273.705">
        <path
          id="textarc"
          d="M.5,1269.52V739.944C.5,331.558,331.552.5,739.926.5h6.524c408.374,0,739.426,331.063,739.426,739.449V1269.52"
          transform="translate(1 50)"
          fill="none"
          stroke="#ffeba2"
          stroke-miterlimit="10"
          stroke-width="0"
        />
        <text dy="10">
          <textPath xlink:href="#textarc" startOffset="2600" />
        </text>
      </svg>
    </div>
    <div class="arc-content">
      <div class="callout-text">
        <h2>Global clients and handpicked projects that place innovation at the forefront</h2>
      </div>
      <div>
        <div class="stats-flex__section">
          <div class="stat-block">
            <div class="stat-block__number">
              <IOdometer class="iodometer" :value="firstValue" />
              +
            </div>
            <div class="block-text">
              <span>Projects</span>
            </div>
          </div>
          <div class="stat-block middle">
            <div class="stat-block__number">
              <IOdometer class="iodometer" :value="secondValue" />
              %
            </div>
            <div class="block-text">
              <span>Return Rate</span>
            </div>
          </div>
          <div class="stat-block">
            <div class="stat-block__number">
              <IOdometer class="iodometer" :value="thirdValue" />
              million
            </div>
            <div class="block-text">
              <span>Lives changed</span>
            </div>
          </div>
        </div>
        <div class="stat-video__section">
          <button class="play-btn">
            <span class="play">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 33.077 36.709">
                <path d="M5.993.809C2.683-1.089 0 .466 0 4.28v28.146c0 3.818 2.683 5.371 5.993 3.474l24.6-14.108c3.311-1.9 3.311-4.976 0-6.874Z" fill="currentColor" />
              </svg>
            </span>
          </button>
          <div class="block-video">
            <client-only>
              <vimeo-player
                ref="player"
                :video-id="'697315806'"
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
      </div>
    </div>
  </section>
</template>

<script>
import IOdometer from 'vue-odometer'
import 'odometer/themes/odometer-theme-default.css'
export default {
  components: {
    IOdometer
  },
  data () {
    return {
      firstValue: 0,
      secondValue: 0,
      thirdValue: 0,
      firstTimer: null,
      secondTimer: null,
      thirdTimer: null
    }
  },
  computed: {
    handleValueChange () {
      return this.$store.state.isValueUpdate
    }
  },
  watch: {
    handleValueChange () {
      this.startCount()
    }
  },
  methods: {
    startCount () {
      this.firstTimer = setInterval(() => {
        if (this.firstValue < 40) {
          this.firstValue += 1
        }
      }, 100)
      this.secondTimer = setInterval(() => {
        if (this.secondValue < 90) {
          this.secondValue += 1
        }
      }, 50)
      this.thirdTimer = setInterval(() => {
        if (this.thirdValue < 20) {
          this.thirdValue += 1
        }
      }, 200)
    }
  }
}
</script>

<style scoped>
.hero-door__section {
    background-color: #000;
    padding-top: 28px;
    position: relative;
}

.arc-text {
    position: absolute;
    width: calc(100% + 8vw);
    top: -4vw;
    left: -4vw;
    pointer-events: none;
}

.arc-content {
    display: flex;
    flex-direction: column;
    padding: 15rem 15.5rem 14rem;
    border-top-left-radius: 68rem;
    border-top-right-radius: 68rem;
    background-color: #dc7550;
}

.callout-text {
    max-width: 48rem;
    width: 100%;
    margin: 0 auto 68px;
    color: #fff;
    text-align: center;
}

.callout-text h2 {
    font-size: 3rem;
}

.stats-flex__section {
    display: flex;
    justify-content: center;
    color: #fff;
    margin-bottom: 71px;
}

.stat-block {
    display: flex;
    flex-direction: column;
    align-items: center;
    min-width: 335px;
    text-align: center;
}

.stat-block.middle {
    border-right: 1px solid hsla(0,0%,100%,.3);
    border-left: 1px solid hsla(0,0%,100%,.3);
    min-width: 318px;
}

.stat-block__number {
    font-size: 2.5rem;
    margin-bottom: 11px;
    font-family: 'Telegraf';
}

.block-text span {
    font-size: 14px;
    text-transform: uppercase;
    color: hsla(0,0%,100%,.65);
}

.stat-video__section {
    max-width: 1200px;
    width: 100%;
    font-size: 0;
    overflow: hidden;
    position: relative;
    aspect-ratio: 1.7777777778;
    pointer-events: none;
    margin: 0 auto;
}

button.play-btn {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    z-index: 1;
    width: 13rem;
    height: 13rem;
    pointer-events: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgba(0,0,0,.1);
    color: #fff;
    border-radius: 50%;
    cursor: pointer;
}
.play-btn > span {
    position: relative;
    z-index: 1;
    display: flex;
    align-items: center;
}

.play-btn .play {
    width: 3.308rem;
    height: 3.671rem;
    grid-area: 1/1;
}

.block-video {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}
</style>
