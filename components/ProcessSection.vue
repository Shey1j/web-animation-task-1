<template>
  <section id="process-section" class="process-section__wrapper">
    <div class="section-container">
      <div class="process-title">
        <h2 class="process-header__text" data-splitting="lines" data-animation="text">
          We&apos;ve created a <span class="highlight">process</span> that knits your product with the <span class="highlight">innovation</span> it deserves.
        </h2>
        <div class="process-btn__wrapper">
          <a href="/" class="process-btn">
            <span>
              <span class="button-label">
                <span class="inner">
                  <span class="initial">
                    What we do
                  </span>
                  <span class="animated">
                    What we do
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
      <ProcessAccordion
        v-for="(item, index) in contents"
        :key="index"
        :index="index"
        :active-id="activeId"
        :all-ids="allActiveIds"
        :title="item.title"
        :image="item.image"
        :activities="item.content"
        :is-top="isTop"
        @set-active="handleSetActiveItem"
      />
      <button v-if="!expandAll" class="expand-all" @click="expandAllItems">
        Expand All
      </button>
      <button v-else class="expand-all" data-scroll-offset="-100" @click="expandAllItems">
        Expand Less
      </button>
    </div>
  </section>
</template>

<script>
export default {
  data () {
    return {
      contents: [
        {
          title: 'Discovering the unforeseen',
          image: 'https://res.cloudinary.com/pineappledesign/image/upload/q_auto,f_auto/v1649731769/pineapple-website/Discovering_the_unforeseen_sshovu.png',
          content: ['UX Audit', 'Analytical data review', 'Market and User Research', 'Structuring true insights', 'User interviews and surveys', 'Information architecture (IA)']
        },
        {
          title: 'Transforming the experience',
          image: 'https://res.cloudinary.com/pineappledesign/image/upload/q_auto,f_auto/v1649731784/pineapple-website/Transforming_the_experience_nz7mbb.png',
          content: ['User experience design (UX)', 'Usability testing', 'Product innovation and strategy', 'UX Writing', 'Wireframing and Rapid Prototyping']
        },
        {
          title: 'Designing for impact',
          image: 'https://res.cloudinary.com/pineappledesign/image/upload/q_auto,f_auto/v1649731763/pineapple-website/Designing_for_impact_sjg1dx.png',
          content: ['User Interface Design (UI)', 'Augmented Reality (AR) explorations', 'Design strategy', '3D Design', 'Custom Illustrations & iconography', '2D Motion Design']
        },
        {
          title: 'Scaling to be relevant',
          image: 'https://res.cloudinary.com/pineappledesign/image/upload/q_auto,f_auto/v1649731777/pineapple-website/Scaling_to_be_relevant_ih8jnq.png',
          content: ['Front-end development', 'Innovation garages', 'Building design systems', 'Improving existing KPIs', 'Building style guides', 'Continuous product improvement']
        }
      ],
      allActiveIds: [],
      expandAll: false,
      activeId: 0,
      isTop: -1
    }
  },
  methods: {
    handleSetActiveItem (value) {
      if (value !== this.activeId) {
        this.activeId = value
      }
    },
    expandAllItems () {
      this.expandAll = !this.expandAll
      if (this.allActiveIds.length < this.contents.length) {
        this.contents.map((item, index) => {
          this.allActiveIds.push(index)
          return item
        })
      } else {
        this.activeId = -1
        this.allActiveIds = []
        this.isTop = 0
        window.scrollTo(0, -100)
      }
    }
  }
}
</script>

<style scoped>
.process-section__wrapper {
  margin-bottom: 140px;
}
.process-section__wrapper .section-container {
    padding: 0 10rem;
}
.process-title {
    margin: 10.4rem 0 6.6rem;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
}
.process-header__text {
    max-width: 39rem;
    margin-right: 4rem;
    width: 100%;
    font-size: 2.5rem;
    line-height: 1.375;
}
.process-btn__wrapper {
    flex-shrink: 0;
}
.process-btn {
    position: relative;
    cursor: pointer;
    transition: background .2s,border .2s;
    background: #000;
    color: #fff;
    border-radius: 5px;
    padding: 1.4rem 1.6rem;
    display: inline-flex;
    align-items: center;
}

.process-btn:hover {
    background: #dc7550;
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

.process-btn:hover .button-label .inner {
    transition: transform .6s cubic-bezier(.19,1,.22,1);
    transform: translateY(-125%);
}

.button-label .inner span {
    display: flex;
    white-space: nowrap;
}

.process-btn .button-label .inner .initial,
.process-btn .button-label .inner .animated {
    transition: opacity .6s cubic-bezier(1,0,0,1);
}

.process-btn:hover .button-label .inner .initial,
.process-btn:hover .button-label .inner .animated {
    transition: transform .6s cubic-bezier(.19,1,.22,1);
}

.process-btn:hover .button-label .inner .initial {
    opacity: 0;
}

.process-btn:hover .button-label .inner .animated {
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

.expand-all {
    display: block;
    color: #dc7550;
    cursor: pointer;
    margin-left: auto;
    border-bottom: 1px solid #dc7550;
    max-width: 9.5rem;
    margin-top: 3.4rem;
    padding-bottom: 0.35rem;
    font-size: 1.3rem;
    font-family: "Telegraf";
}
</style>
