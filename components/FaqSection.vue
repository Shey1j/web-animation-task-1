<template>
  <div>
    <section id="faq-section" class="faq-door__section">
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
            <textPath xlink:href="#textarc">
              Frequently Asked Questions · Frequently Asked Questions · Frequently
              Asked Questions · Frequently Asked Questions · Frequently Asked
              Questions · Frequently Asked Questions · Frequently Asked Questions
              · Frequently Asked Questions · Frequently Asked Questions ·
              Frequently Asked Questions · Frequently Asked Questions ·
            </textPath>
          </text>
        </svg>
      </div>
      <div class="arc-content">
        <div class="callout-text">
          <div data-splitting="lines" data-animation="text">
            <span class="highlight">Clear</span> and <span class="highlight">crisp answers</span> to some burning questions you may already have
          </div>
        </div>
        <div class="faq-accordion__wrapper">
          <faq-accordion
            v-for="(faq, index) in contents"
            :key="index"
            :index="index"
            :question="faq.title"
            :answer="faq.answer"
            :active-id="activeId"
            @set-active="toggleActive"
          />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import FaqAccordion from './FaqAccordion.vue'
export default {
  components: { FaqAccordion },
  data () {
    return {
      contents: [
        {
          title: 'What makes Pineapple different?',
          answer:
            `<p>Pineapple offers a unique proposition by not only delivering high-impact services but also by promising a business-first perspective in design.
            <br><br><strong>A lean approach:</strong> 
            We are a lean team that delivers high impact. When we onboard a project, we allocate team members to exclusively work on only one engagement. 
            This improves the efficiency of workflow and improves the quality of output. With such an arrangement, you continue to focus on growing your business, as we dedicate ours to designing it.
            <br><br<strong>Designing for Growth:</strong> 
            If designs do not help your business grow, it is a futile exercise. With a business-first approach, we target the most crucial KPIs in every engagement. 
            Once we do that, we are able to easily take a research-driven approach on how designs can help meet business goals continuously.
            <br><br><strong>Collaborative design sprint:</strong> We understand how time is money. At the start of every project, we build a strategic combination of design sprints to ensure everything is delivered with precision and on time. 
            We collaboratively work on the product roadmap with the Product and Tech team so it feels as seamless as working with internal team members.</p>`
        },
        {
          title: 'What is your product design process like?',
          answer:
            `<p>With our experience in working with the best minds across different industries, we've realised the highest quality of output comes out when a process is collaborative.<br><br>
            <strong>Key points :</strong> 
            Discovering the unforeseen: It starts with our team of UX researchers helping you discover unforeseen challenges and opportunities. We do this by carefully assessing your business data, the market and your end-users. This helps us provide you with insights that are unique and translate them into goals that we should achieve together. 
            <br>
            <br>
            <strong>Transforming the experience:</strong>
            Once we have the goals, backed by data, we go ahead and build an information architecture (IA) that helps you seamlessly navigate through the end-user journey. To demonstrate on how the IA solves the problem, we then wireframe, prototype and test it with live users. 
            <br>
            <br>
            This brings a higher clarity on what the customers want and helps us build experiences that are the most relevant to them. 
            <br>
            <br>
            <strong>Designing for impact</strong>: 
            User interface design is not just creating interfaces with paint on top. We're aiming to bring the experiences to life. With careful consideration of every UI design element, the goal is to ensure that we deliver a consistent brand experience. 
            <br>
            <br>
            P.S. We considered ~1000 typographies to finally decide the ones that you are currently experiencing across the website.
            <br>
            <br>
            <strong>Scaling to be relevant:</strong>
            Products and designs will become obsolete if not scaled efficiently. As your user needs evolve every day, we help businesses continuously research and make UX/UI design upgrades to always be in the new. We target KPIs every quarter and plan on how designs can improve them.
            <br>
            <br>
            We also help companies continuously upgrade their design systems so the scalability of products and design is never an issue.</p>`
        },
        {
          title: 'What industries do you specialise in?',
          answer:
            `<p>Pineapple is a team of industry-agnostic problem solvers. Our robust process allows us to focus on finding problems and unlocking opportunities across every industry. We take on new challenges every day and use a data-driven approach to solve them.
            <br>
            <br>
            In the past, we have worked with leaders who wanted to disrupt agri-tech, reimagine healthcare, make crypto more accessible, and many others who wanted to impact millions of lives.</p>`
        },
        {
          title: 'Why are you guys named Pineapple?',
          answer:
            `<p>That's a question we get a lot. Pineapple was kept as a name with a deeper meaning to it. We wanted to holistically explain our vision as a UX/UI design agency in a way that explained our personality. 
            <br>
            <br>
            To get the best experience of the reason behind the name Pineapple, visit our <strong>About Us</strong> page.</p>`
        },
        {
          title: 'How many team members are usually a part of one project?',
          answer:
            `<p>Although the team working on each project depends on the scale of the problem that is required to be solved. However, a high-impact project should comprise of the following team members: 
            <br>
            <br></p>
            <ul>
            <li>Creative Director</li>
            <li>Project manager</li>
            <li>Lead product designer</li>
            <li>UX/UI designer</li>
            <li>UX researcher</li>
            <li>UX writer</li>
            </ul>`
        }
      ],
      activeId: -1
    }
  },
  methods: {
    toggleActive (id) {
      if (this.activeId !== id) {
        this.activeId = id
      } else {
        this.activeId = -1
      }
    }
  }
}
</script>

<style scoped>
.faq-door__section {
    padding-top: 28px;
    background-color: #fff;
    position: relative;
}

.arc-text {
    position: absolute;
    width: calc(100% + 8vw);
    top: -4vw;
    left: -4vw;
    pointer-events: none;
}

textPath {
    font-size: 58px;
    fill: #cdd1d8;
    font-family: "Telegraf";
}

.arc-content {
    display: flex;
    flex-direction: column;
    padding: 15rem 0rem 14rem;
    border-top-left-radius: 68rem;
    border-top-right-radius: 68rem;
    background-color: #ffeba2;
    padding-left: 18.5rem;
    padding-right: 18.5rem;
}

.callout-text {
    max-width: 38rem;
    width: 100%;
    margin: 0 auto 68px;
    color: #000;
    text-align: center;
    font-size: 2.4rem;
    line-height: 1.35;
    font-family: 'Telegraf', sans-serif;
}

.faq-accordion__wrapper {
    color: #000;
}
</style>
