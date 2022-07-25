<template>
  <div class="process-accordion" :class="{active: activeId === index || allIds.includes(index)}" @click="handleSetActive(index)">
    <div class="process-accordion__wrapper">
      <div class="process-title">
        <h3 class="process-title__title" data-splitting="lines" data-animation="text">
          {{ title }}
        </h3>
        <div class="process-title__image">
          <img :src="image" alt="">
        </div>
      </div>
      <ul class="process-activities">
        <li v-for="(activity, id) in activities" :key="id" data-splitting="lines" data-animation="text">
          <span class="marker" />
          {{ activity }}
        </li>
      </ul>
      <div class="process-icon">
        <span>
          <svg xmlns="http://www.w3.org/2000/svg" width="31.755" height="23.402" viewBox="0 0 31.755 23.402">
            <g id="Layer_2" data-name="Layer 2" transform="translate(-2.87 9.537)">
              <g id="Layer_1" data-name="Layer 1" transform="translate(2.87 -9.537)">
                <path id="Path_33196" data-name="Path 33196" d="M2.87,110v2.645l10.057,9.257h4.027l-9.974-9.18H34.626V110Z" transform="translate(-2.87 -98.505)" fill="#dc7550" />
                <path id="Path_33195" data-name="Path 33195" d="M10.507,0,6.66.748,0,9.779l3.972-.772Z" transform="translate(3.867 0) rotate(11)" fill="#dc7550" />
              </g>
            </g>
          </svg>
        </span>
      </div>
    </div>
    <span class="process-line" data-animation="line" />
  </div>
</template>

<script>
export default {
  props: {
    index: {
      type: Number,
      required: true
    },
    title: {
      type: String,
      default: ''
    },
    image: {
      type: String,
      default: ''
    },
    activities: {
      type: Array,
      default: () => []
    },
    activeId: {
      type: Number,
      default: 0
    },
    allIds: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    handleSetActive (id) {
      this.$emit('set-active', id)
    }
  }
}
</script>

<style scoped>
.process-accordion .process-accordion__wrapper {
    padding-top: 4rem;
    padding-bottom: 3.9rem;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    cursor: pointer;
}

.process-accordion .process-accordion__wrapper .process-title {
    flex-shrink: 1;
    width: 100%;
    line-height: 1;
    max-width: 42rem;
    margin-right: 2.6rem;
}

.process-accordion .process-accordion__wrapper .process-title__title {
  font-family: 'Telegraf';
  font-size: 2rem;
}

.process-accordion:hover .process-accordion__wrapper .process-title__title {
  color: #dc7550;
}

.process-accordion .process-accordion__wrapper .process-title__image {
  width: 12.6rem;
  height: 12.6rem;
  margin-top: 2.4rem;
  border-radius: 50%;
  display: none;
  opacity: 0;
  transform: scale(0);
  transition: opacity .5s ease-in-out;
  transition: transform .5s ease-in-out;
}

.process-accordion.active .process-accordion__wrapper .process-title__image {
  display: block;
  opacity: 1;
  transform: scale(1);
  flex-shrink: 0;
}

.process-accordion .process-accordion__wrapper .process-title__image img {
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    border-radius: 50%;
}

.process-accordion .process-accordion__wrapper .process-activities {
    height: 0;
    opacity: 0;
    overflow-y: hidden;
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    flex-grow: 1;
    width: 50%;
    padding-left: 3rem;
    min-width: 42rem;
}

.process-accordion.active .process-accordion__wrapper .process-activities {
    height: auto;
    opacity: 1;
    display: flex;
}

.process-accordion.active .process-accordion__wrapper .process-icon {
  display: none;
}

.process-accordion .process-line {
  height: 1px;
  width: 0%;
  background: #dddfe2;
  transform-origin: left top;
  transition: width 2s ease-in;
}

.process-accordion.active .process-line {
  height: 3px;
  background: #000;
}
</style>
