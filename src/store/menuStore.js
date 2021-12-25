export default {
    state: {
        isCollapse: false //菜单默认折叠起来
    },
    mutations: {

        // 切换折叠与展开
        setOpenOrClose(state) {
            state.isCollapse = !state.isCollapse 
        }
    },
    actions: {
    },
}