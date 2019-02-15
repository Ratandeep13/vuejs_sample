// import commonApi from '@/api'
// import router from '../../router'

const state = {
  titleHeader: null,
  subTitle: null,
  pagesName: null
}

const mutations = {
  PAGE_HEADERS: (state, value) => {
    // debugger
    state.titleHeader = value
  },
  SUB_TITLE: (state, value) => {
    state.subTitle = value
  },
  PAGE_NAME: (state, value) => {
    state.pagesName = value
  }
}

const actions = {

}

const getters = {
  pageHeader: (state) => {
    return state.titleHeader
  },
  pageSubtitle: (state) => {
    return state.subTitle
  },
  pagesName: (state) => {
    console.log(state.pagesName)
    return state.pagesName
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}
