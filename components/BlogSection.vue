<template>
  <section id="blog-section">
    <div class="blog-section">
      <div class="blog-section__heading">
        <h2 class="section-heading__main" data-splitting="lines" data-animation="text">
          <span class="highlight">Wisdom</span> that money can&apos;t buy
        </h2>
        <div class="section-heading__subtext" data-splitting="lines" data-animation="text">
          We&apos;re talking about UX UI designs, product innovation and how design grows businesses.
        </div>
      </div>
      <div class="blog-section__wrapper">
        <div class="blog-item">
          <div class="blog">
            <div class="blog-image">
              <img src="https://admin.pineapple.design//uploads/genz_vs_millennial_Cover_min_11839d9986.png" alt="">
            </div>
            <div class="tag-component">
              <div class="tag tag__green">
                New
              </div>
            </div>
            <h3 class="blog-title" data-splitting="lines" data-animation="text">
              Top ten differences between Gen Z and Millennials
            </h3>
            <div class="blog-date" data-splitting="lines" data-animation="text">
              <div>
                Jul 5, 2022
              </div>
              <div class="date-separator" />
              <div>
                8mins
              </div>
            </div>
          </div>
        </div>
        <div class="blog-item">
          <div class="blog">
            <div class="blog-image">
              <img src="https://admin.pineapple.design//uploads/ahandoff_compressed_06eca83de6.jpg" alt="">
            </div>
            <div class="tag-component">
              <div class="tag tag__green">
                Motion
              </div>
            </div>
            <h3 class="blog-title" data-splitting="lines" data-animation="text">
              A quick guide to an effective design handoff
            </h3>
            <div class="blog-date" data-splitting="lines" data-animation="text">
              <div>
                Apr 2, 2022
              </div>
              <div class="date-separator" />
              <div>
                8mins
              </div>
            </div>
          </div>
        </div>
        <div class="blog-item">
          <div class="blog">
            <div class="blog-image">
              <img src="https://admin.pineapple.design//uploads/Blog_motion_16d97dbb55.gif" alt="">
            </div>
            <div class="tag-component">
              <div class="tag tag__green">
                UI-UX Design
              </div>
            </div>
            <h3 class="blog-title" data-splitting="lines" data-animation="text">
              Motion to help enhance your designs!
            </h3>
            <div class="blog-date" data-splitting="lines" data-animation="text">
              <div>
                Mar 28, 2022
              </div>
              <div class="date-separator" />
              <div>
                7mins
              </div>
            </div>
          </div>
        </div>
      </div>
      <a href="" class="more-blog__btn">
        <span>
          <span class="button-label">
            <span class="inner">
              <span class="initial">
                Get Insights
              </span>
              <span class="animated">
                Get Insights
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
  </section>
</template>

<script>
export default {

}
</script>

<style scoped>
.blog-section {
  padding: 12rem 10.6rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.blog-section__heading {
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  justify-content: center;
  margin-bottom: 9rem;
}

.section-heading__main {
  margin-bottom: 0.8rem;
  font-family: 'Telegraf', sans-serif;
  font-size: 2.875rem;
  line-height: 1.375;
}

.section-heading__subtext {
  width: 100%;
  max-width: 30rem;
  font-size: 1.2rem;
  line-height: 1.5625;
}

.blog-section__wrapper {
  display: grid;
  grid-template-columns: repeat(auto-fill,minmax(20rem,1fr));
  width: 100%;
  grid-gap: 3.5rem;
}

.blog-item {
  margin-bottom: 8rem;
}

.blog {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  cursor: pointer;
}

.blog .blog-image {
  overflow: hidden;
  -webkit-backface-visibility: hidden;
  -moz-backface-visibility: hidden;
  -webkit-transform: translateZ(0);
  max-width: 20.8rem;
  width: 100%;
  aspect-ratio: 1/1;
  border-radius: 50%;
  margin-bottom: 4rem;
  transition: border-radius .4s ease,-webkit-clip-path 2s ease;
  transition: border-radius .4s ease,clip-path 2s ease;
  transition: border-radius .4s ease,clip-path 2s ease,-webkit-clip-path 2s ease;
}

.blog:hover .blog-image {
  border-radius: 50% 50% 0 0;
}

.blog .blog-image img {
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  transition: transform .4s ease;
}

.blog:hover .blog-image img {
  transform: scale(1.1);
}

.tag-component {
  position: relative;
  margin-top: -5.5rem;
}

.tag {
  padding: 5px 10px;
  display: inline-block;
  text-transform: uppercase;
}

.tag__green {
  background: #d2eac3;
}

.blog .blog-title {
  margin-top: 2.3rem;
  max-width: 31rem;
  width: 100%;
  font-size: 1.875rem;
  line-height: 1.4583333333;
  font-family: 'Telegraf', sans-serif;
}

.blog .blog-date {
  margin-top: 1.2rem;
  display: flex;
  align-items: center;
  font-size: 1.2rem;
}

.date-separator {
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background-color: #000;
  margin: 0 10px;
}

.more-blog__btn {
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

.more-blog__btn:hover {
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

.more-blog__btn:hover .button-label .inner {
  transition: transform .6s cubic-bezier(.19,1,.22,1);
  transform: translateY(-125%);
}

.button-label .inner span {
  display: flex;
  white-space: nowrap;
}

.more-blog__btn .button-label .inner .initial,
.more-blog__btn .button-label .inner .animated {
  transition: opacity .6s cubic-bezier(1,0,0,1);
  font-family: 'Telegraf';
}

.more-blog__btn:hover .button-label .inner .initial,
.more-blog__btn:hover .button-label .inner .animated {
  transition: transform .6s cubic-bezier(.19,1,.22,1);
}

.more-blog__btn:hover .button-label .inner .initial {
    opacity: 0;
}

.more-blog__btn:hover .button-label .inner .animated {
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

.button-icon path {
  fill: #fff;
}
</style>
