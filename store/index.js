export const state = () => ({
  isValueUpdate: false,
  imagesLoaded: false
})

export const mutations = {
  handleValueUpdate (state, value) {
    state.isValueUpdate = value
  },
  updateImagesLoaded: (state, value) => {
    state.imagesLoaded = value
  }
}
