export const state = () => ({
  isValueUpdate: false
})

export const mutations = {
  handleValueUpdate (state, value) {
    state.isValueUpdate = value
  }
}
