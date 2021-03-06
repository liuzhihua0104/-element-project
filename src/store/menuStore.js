export default {
    state: {
        isCollapse: false, //菜单默认折叠起来
        menuList: [
            {
                children: [
                    {
                        children: [],
                        code: "sys:dept",
                        createTime: 1586703509000,
                        icon: "el-icon-copy-document",
                        id: 33,
                        isHome: 0,
                        label: "机构管理",
                        name: "departmentList",
                        orderNum: 2,
                        parentId: 17,
                        path: "/departmentList",
                        remark: "机构管理",
                        type: "1",
                        updateTime: 1586337139000,
                        url: "/system/Department/DepartmentList",
                    },
                    {
                        children: [],
                        code: "sys:user",
                        createTime: 1691464271000,
                        icon: "el-icon-s-custom",
                        id: 18,
                        isHome: 0,
                        label: "用户管理",
                        name: "userList",
                        orderNum: 3,
                        parentId: 17,
                        path: "/userList",
                        type: "1",
                        updateTime: 1691565988000,
                        url: "/system/User/UserList",
                    },
                    {
                        children: [],
                        code: "sys:role",
                        createTime: 1691464271000,
                        icon: "el-icon-rank",
                        id: 23,
                        isHome: 0,
                        label: "角色管理",
                        name: "roleList",
                        orderNum: 4,
                        parentId: 17,
                        path: "/roleList",
                        type: "1",
                        updateTime: 1691565988000,
                        url: "/system/Role/RoleList",
                    },
                    {
                        children: [],
                        code: "sys:menu",
                        createTime: 1691464271000,
                        icon: "el-icon-menu",
                        id: 28,
                        isHome: 0,
                        label: "权限管理",
                        name: "menuList",
                        orderNum: 5,
                        parentId: 17,
                        path: "/menuList",
                        type: "1",
                        updateTime: 1691565988000,
                        url: "/system/Menu/MenuList",
                    },
                ],
                code: "sys:manage",
                createTime: 1691464271000,
                icon: "el-icon-document",
                id: 17,
                isHome: 0,
                label: "系统管理",
                orderNum: 1,
                parentId: 0,
                path: "/system",
                type: "0",
                updateTime: 1691565988000,
            },
            {
                children: [
                    {
                        children: [],
                        code: "sys:goodsCategory",
                        createTime: 1586703272000,
                        icon: "el-icon-s-data",
                        id: 36,
                        isHome: 0,
                        label: "分类管理",
                        name: "goodCategory",
                        orderNum: 1,
                        parentId: 34,
                        path: "/goodCategory",
                        type: "1",
                        updateTime: 1586683590000,
                        url: "/goods/goodsCategory/goodsCategoryList",
                    },
                    {
                        children: [],
                        code: "sys:goodsBrand",
                        createTime: 1586683924000,
                        icon: "el-icon-tickets",
                        id: 37,
                        isHome: 0,
                        label: "品牌管理",
                        name: "goodsBrand",
                        orderNum: 2,
                        parentId: 34,
                        path: "/goodsBrand",
                        type: "1",
                        updateTime: 1586683924000,
                        url: "/goods/goodsBrand/goodsBrandList",
                    },
                ],
                code: "sys:goods",
                createTime: 1586702987000,
                icon: "el-icon-picture",
                id: 34,
                isHome: 0,
                label: "商品管理",
                name: "",
                orderNum: 2,
                parentId: 0,
                path: "/goods",
                type: "0",
                updateTime: 1586683323000,
            },
            {
                children: [
                    {
                        children: [],
                        code: "sys:systemCode",
                        createTime: 1587012282000,
                        icon: "el-icon-files",
                        id: 43,
                        isHome: 0,
                        label: "代码生成",
                        name: "systemCode",
                        orderNum: 0,
                        parentId: 42,
                        path: "/systemCode",
                        type: "1",
                        updateTime: 1586684646000,
                        url: "/system/config/code",
                    },
                    {
                        children: [],
                        code: "sys:document",
                        createTime: 1586748705000,
                        icon: "el-icon-s-operation",
                        id: 77,
                        isHome: 0,
                        label: "接口文档",
                        name: "document",
                        orderNum: 0,
                        parentId: 42,
                        path: "/document",
                        type: "1",
                        updateTime: 1586748705000,
                        url: "/system/config/systemDocument",
                    },
                ],
                code: "sys:systenConfig",
                createTime: 1586703003000,
                icon: "el-icon-receiving",
                id: 42,
                isHome: 0,
                label: "系统工具",
                name: "",
                orderNum: 3,
                parentId: 0,
                path: "/systenConfig",
                type: "0",
                updateTime: 1586684441000,
            },
        ],
        editableTabsValue: "desktop", // 绑定值，选中选项卡的 name
        editableTabs: [{
            title: '首页',
            name: 'desktop'
        }]
    },
    mutations: {
        //获取tabs
        getTabs(state) {
            let tabs = sessionStorage.getItem('tabsList')
            if (tabs) {
                state.editableTabs = JSON.parse(tabs)
            }
        },
        // 切换折叠与展开
        setOpenOrClose(state) {
            state.isCollapse = !state.isCollapse
        },

        //设置当前激活的选项卡
        setActiveTabs(state, val) {
            state.editableTabsValue = val;
        },

        clickMenu(state, val) {
            //1.判断当前点中菜单是否在tabs里面
            let res = state.editableTabs.findIndex(item => item.name === val.name)
            //2.如果不存在，组织tabs数据，存放到editableTabs
            if (res === -1) {
                let tab = {};
                tab.title = val.label;
                tab.name = val.name;
                state.editableTabs.push(tab);
            }
            //3.设置当前选中的选项卡
            state.editableTabsValue = val.name;
            //4.把选中的选项卡存放到sessionStorage里面
            sessionStorage.setItem('tabsList', JSON.stringify(state.editableTabs))

        }


    },
    actions: {
    },
}