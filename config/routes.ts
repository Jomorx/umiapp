const routes = [
  {
    path: '/',
    component: '@/pages/index',
    name: '首页',
  },
  {
    path: '/stu',
    component: '@/pages/stu',
    name: '学生管理',
    icon: 'pause',
    routes: [
      { path: 'list', component: '@/pages/stu/list', name: '学生列表' },
      {
        path: 'pub',
        component: '@/pages/stu/pub',
        name: '新增学生',
      },
    ],
  },
  {
    path: '/category',
    component: '@/pages/category',
    name: '分类管理',
    icon: 'SettingOutlined',
    routes: [
      {
        path: 'list',
        component: '@/pages/category/categoryList',
        name: '分类列表',
      },
      {
        path: 'pub',
        component: '@/pages/category/categoryPub',
        name: '分类录入',
      },
    ],
  },
  {
    path: '/system',
    component: '@/pages/system',
    name: '权限管理',
    icon: 'SettingOutlined',
    routes: [
      {
        path: 'role',
        component: '@/pages/system/roleManage',
        name: '权限管理',
      },
      {
        path: 'user',
        component: '@/pages/system/userManage',
        name: '用户管理',
      },
    ],
  },
];
export default routes;
