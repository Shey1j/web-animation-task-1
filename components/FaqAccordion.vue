<template>
  <div class="faq-accordion" :class="{active: index === activeId}" @click="handleSetActive(index)">
    <div class="faq-accordion__header">
      <h3 class="faq-accordion-header__title" data-splitting="lines" data-animation="text">
        {{ question }}
      </h3>
      <div class="faq-accordion__indicator">
        <div class="faq-accordion__indicator" />
        <div class="faq-accordion__indicator vertical" />
      </div>
    </div>
    <div class="faq-accordion__body">
      <div v-html="answer" />
    </div>
    <span class="faq-line" data-animation="line" />
  </div>
</template>

<script>
export default {
  props: {
    index: {
      type: Number,
      required: true
    },
    question: {
      type: String,
      default: ''
    },
    answer: {
      type: String,
      default: ''
    },
    activeId: {
      type: Number,
      default: -1
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
.faq-accordion {
    padding: 2.9rem 0 0;
    transition: height .5s ease-in-out;
    cursor: pointer;
}

.faq-accordion__header {
    font-family: "Telegraf",sans-serif;
    line-height: 1.4583333333;
    font-size: 1.75rem;
    display: flex;
    justify-content: space-between;
}

.faq-accordion .faq-accordion__indicator {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.faq-accordion .faq-accordion__indicator .faq-accordion__indicator {
    width: 2rem;
    height: 2px;
    background-color: #000;
}

.faq-accordion .faq-accordion__indicator .faq-accordion__indicator.vertical {
    transform: rotate(90deg);
    margin-top: -2px;
}

.faq-accordion.active .faq-accordion__indicator .faq-accordion__indicator.vertical {
    opacity: 0;
}

.faq-accordion .faq-accordion__body {
    height: 0;
    opacity: 0;
    overflow-y: hidden;
}

.faq-accordion.active .faq-accordion__body {
    font-size: 1.15rem;
    line-height: 1.5;
    margin: 10px 104px 44px 0;
    height: auto;
    transition: opacity .5s ease-in-out;
    opacity: 1;
}

.faq-accordion .faq-line {
  background: rgba(0,0,0,.2);
  height: 1px;
  width: 0%;
  margin-top: 2.9rem;
  transform-origin: left top;
  transition: width 2s ease-in;
}

.faq-accordion.active .faq-line {
  height: 3px;
  background: #000;
}
</style>
