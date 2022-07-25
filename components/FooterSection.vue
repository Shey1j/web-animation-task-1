<template>
  <div class="footer-container">
    <div class="project-cta__section">
      <div class="project-cta__heading" data-splitting="lines" data-animation="text">
        Ready to <span class="highlight">start</span> a project?
      </div>
      <p class="project-cta__subtext" data-splitting="lines" data-animation="text">
        We have the confidence and expertise to challenge the status-quo. Let&apos;s collaborate to take your product to new heights.
      </p>
      <a href="" class="project-cta__btn footer-btn">
        <span>
          <span class="button-label">
            <span class="inner">
              <span class="initial">
                Let&apos;s Connect
              </span>
              <span class="animated">
                Let&apos;s Connect
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
    <div class="newsletter-wrapper">
      <div class="newsletter-cta__section">
        <div class="newsletter-cta__big-text">
          Join our Newsletter
        </div>
        <div class="newsletter-cta__small-text">
          If you&apos;re driven by curiosity and love research-based design arguments, the newsletter is for you.
        </div>
      </div>
      <div class="newsletter-form__wrapper">
        <form action="">
          <div class="newsletter-form">
            <input type="email" class="form-input" placeholder="Your email address…">
            <div class="button-wrapper">
              <button class="newsletter-btn footer-btn">
                <span>
                  <span class="button-label">
                    <span class="inner">
                      <span class="initial">
                        Subscribe
                      </span>
                      <span class="animated">
                        Subscribe
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
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
    <div class="footer-links__wrapper">
      <div class="about-company__wrapper">
        <img src="~assets/icons/logo-yellow.svg" alt="Pineapple Logo">
        <div class="about-company__name">
          Pineapple
        </div>
        <div class="about-company__subtext">
          We design different.
        </div>
        <div class="about-company__copyright">
          &copy; Pineapple. All rights reserved.
        </div>
        <div class="privacy-policy">
          <a href="/">
            Our privacy policy
          </a>
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" width="16.4" height="12.086"><g><g><path fill="currentColor" d="M16.4 5.939v1.366l-5.194 4.781h-2.08l5.151-4.741H0V5.937Z"></path> <path fill="currentColor" d="M9.077 1.036H11.1l4.267 3.922-2.09-.001Z"></path></g></g></svg>
          </div>
        </div>
      </div>
      <div class="contact-company__wrapper">
        <div class="contact-company email">
          <div class="contact-heading">
            Contact us
          </div>
          <a href="/" class="contact-link">
            hello@pineapplestudio.in
          </a>
        </div>
        <div class="contact-company">
          <div class="contact-heading">
            Office
          </div>
          <a href="" class="contact-link">
            6th floor. Ravihouse 17-A, Saraswati Road, Opp. Podar Jr. College Santacruz West, Mumbai - 400054
          </a>
        </div>
      </div>
      <div class="website-links__wrapper first">
        <nuxt-link to="/">
          Home
        </nuxt-link>
        <nuxt-link to="/">
          Services
        </nuxt-link>
        <nuxt-link to="/">
          Work
        </nuxt-link>
        <nuxt-link to="/">
          About
        </nuxt-link>
        <nuxt-link to="/">
          Careers
        </nuxt-link>
        <nuxt-link to="/">
          Insights
        </nuxt-link>
      </div>
      <div class="website-links__wrapper">
        <a href="/">
          Dribbble
        </a>
        <a href="/">
          Behance
        </a>
        <a href="/">
          Instagram
        </a>
        <a href="/">
          Twitter
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.footer-container {
    padding: 0 7rem;
}

.project-cta__section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin: 14rem 0;
}

.project-cta__section .project-cta__heading {
    font-size: 3.5rem;
    margin-bottom: 0.8rem;
    color: #121212;
    font-family: 'Telegraf', sans-serif;
}

.project-cta__section .project-cta__subtext {
    font-size: 1.3rem;
    line-height: 1.6666666667;
    max-width: 46.3rem;
    width: 100%;
    margin-bottom: 3rem;
    color: rgba(18,18,18,.8);
}

.project-cta__btn {
    background: #fff;
    color: #000;
    border-radius: 5px;
    border: 1px solid;
    display: inline-flex;
    align-items: center;
    padding: 1.2rem 2rem;
    transition: background .2s,border .2s;
}

.newsletter-btn {
    transition: background .2s,border .2s;
}

.project-cta__btn:hover {
  background: #dc7550;
  color: #fff;
  border: none;
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

.project-cta__btn:hover .button-label .inner,
.newsletter-btn:hover .button-label .inner {
  transition: transform .6s cubic-bezier(.19,1,.22,1);
  transform: translateY(-125%);
}

.button-label .inner span {
  display: flex;
  white-space: nowrap;
}

.project-cta__btn .button-label .inner .initial,
.project-cta__btn .button-label .inner .animated,
.newsletter-btn .button-label .inner .initial,
.newsletter-btn .button-label .inner .animated {
  transition: opacity .6s cubic-bezier(1,0,0,1);
  font-family: 'Telegraf';
}

.project-cta__btn:hover .button-label .inner .initial,
.project-cta__btn:hover .button-label .inner .animated,
.newsletter-btn:hover .button-label .inner .initial,
.newsletter-btn:hover .button-label .inner .animated {
  transition: transform .6s cubic-bezier(.19,1,.22,1);
}

.project-cta__btn:hover .button-label .inner .initial,
.newsletter-btn:hover .button-label .inner .initial {
    opacity: 0;
}

.project-cta__btn:hover .button-label .inner .animated,
.newsletter-btn:hover .button-label .inner .animated {
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

.newsletter-wrapper {
    background-color: #0f2a14;
    display: flex;
    align-items: center;
    border-radius: 1rem;
    margin-bottom: 7rem;
}

.newsletter-cta__section {
    background-color: #d2eac3;
    padding: 2.8rem 5rem;
    margin-right: 2rem;
    border-radius: 1rem 7.5rem 7.5rem 1rem;
    color: #0f2a14;
    width: 77%;
}

.newsletter-cta__big-text {
    margin-bottom: 0.7rem;
    font-size: 1.5rem;
    line-height: 1.1818181818;
    font-family: 'Telegraf', sans-serif;
}

.newsletter-cta__small-text {
    width: 100%;
    max-width: 38.5rem;
    font-size: 1.2rem;
    line-height: 1.5625;
}

.newsletter-form__wrapper {
    padding: 2.8rem 5rem 2.8rem 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 45%;
}

.newsletter-form {
    display: flex;
    margin-left: -7.5rem;
    border-radius: 0.5rem;
    border: 1px solid #fff;
    box-sizing: border-box;
    overflow: hidden;
}

.newsletter-form__wrapper .newsletter-form input {
    border: none;
    outline: none;
    margin: 0;
    padding: 0 2.5rem;
    flex-grow: 1;
    color: #121212;
    font-family: 'Averta';
    font-size: 1.1rem;
}

.newsletter-form__wrapper .newsletter-form input::placeholder {
    color: #121212;
    font-family: 'Averta';
}

.button-wrapper {
    flex-shrink: 0;
}

.button-wrapper .newsletter-btn {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 1.4rem 2rem;
    background: #000;
    color: #fff;
    border-radius: 5px;
    font-size: 1.2rem;
}

.newsletter-btn:hover {
  background: #dc7550;
  color: #fff;
  border: none;
}

.footer-links__wrapper {
    display: flex;
    justify-content: space-between;
    margin: 0 5rem;
    padding-bottom: 10rem;
}

.about-company__wrapper {
    margin-right: 1.5rem;
}

.about-company__wrapper img {
    width: 5.2rem;
    height: 5.2rem;
    margin-bottom: 2.2rem;
}

.about-company__name {
    font-size: 1.5rem;
    line-height: 1.3;
    font-family: 'Telegraf', sans-serif;
}

.about-company__subtext {
    margin-bottom: 3.5rem;
    font-size: 1.2rem;
}

.about-company__copyright {
    font-size: 1rem;
    line-height: 1.2857142857;
}

.privacy-policy {
    display: flex;
    align-items: center;
    color: #8f959f;
    margin-top: 10px;
}

.privacy-policy * {
    margin-right: 6px;
}

.contact-company__wrapper {
    max-width: 22.4rem;
    width: 100%;
}

.contact-company.email {
    margin-bottom: 4.5rem;
}

.contact-heading {
    margin-bottom: 1.4rem;
    font-size: 1.3rem;
    font-family: 'Telegraf', sans-serif;
}

.contact-link {
    line-height: 1.5625;
    font-size: 1.2rem;
    transition: color .5s ease-in-out;
}

.contact-link:hover {
    color: #dc7550;
}

.website-links__wrapper {
    display: flex;
    flex-direction: column;
    margin: 0 1.5rem;
    color: rgba(18,18,18,.8);
}

.website-links__wrapper * {
    margin-bottom: 1.7rem;
    transition: color .5s ease-in-out;
    font-size: 1.3rem;
    font-family: 'Telegraf', sans-serif;
    line-height: 1.4444444444;
}
</style>
