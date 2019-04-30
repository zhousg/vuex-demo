import jsonp from 'jsonp'

export default {
  namespaced: true,
  state: {
    title: '',
    list: [],
    item: {}
  },
  mutations: {
    resetData (state) {
      state.title = ''
      state.list = ''
      state.item = ''
    },
    setList (state, playload) {
      state.title = playload.title
      state.list = playload.subjects
    },
    setItem (state, playload) {
      state.title = playload.title
      state.item = playload
    }
  },
  actions: {
    // http://api.douban.com/v2/movie/subject/:id  详情
    // http://api.douban.com/v2/movie/in_theaters  正在热映
    // http://api.douban.com/v2/movie/coming_soon  即将上映
    // http://api.douban.com/v2/movie/top  top250
    getHot ($store) {
      jsonp('http://47.96.122.182:8866/v2/movie/in_theaters', (err, res) => {
        if (err) return alert('获取电影数据失败')
        $store.commit('setList', res)
      })
    },
    getMovie ($store) {
      jsonp('http://47.96.122.182:8866/v2/movie/coming_soon', (err, res) => {
        if (err) return alert('获取电影数据失败')
        $store.commit('setList', res)
      })
    },
    getTop ($store) {
      jsonp('http://47.96.122.182:8866/v2/movie/top250', (err, res) => {
        if (err) return alert('获取电影数据失败')
        $store.commit('setList', res)
      })
    },
    getDetail ($store, id) {
      jsonp('http://47.96.122.182:8866/v2/movie/subject/' + id, (err, res) => {
        if (err) return alert('获取电影数据失败')
        $store.commit('setItem', res)
      })
    }
  }
}
