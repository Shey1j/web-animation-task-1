import Vue from 'vue'
import Movinwords from 'movinwords'
import 'movinwords/dist/movinwords.css'

const sentence = new Movinwords({
  el: '.header-text',
  wordSpacing: 10,
  highlight: {
    classname: 'highlight',
    tag: 'span',
    words: ['enrich', 'human', 'lives', 'businesses', 'grow']
  }
})
sentence.start()