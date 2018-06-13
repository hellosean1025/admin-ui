export default {
  state: {
    nav: 'home', //页面头部当前导航 
    menu: 'index', //页面左侧当前选择菜单,
    login: {
      uid: 0,
      isLogin: false,
      username: 'guest'
    }

  },

  changeNavMenuAction: (state, params)=>{
    if(params.nav) state.nav = params.nav;
    if(params.menu)state.menu = params.menu;
  },

  setLoginDataAction: (state, params)=>{
    state.login = Object.assign({}, params)
  }
}