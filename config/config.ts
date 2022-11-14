import { defineConfig } from 'umi';
import routes from './routes';
export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  fastRefresh: {},
  routes: routes,
  antd: {
    dark: false,
  },
  layout: {
    name: 'Ant Design',
    locale: true,
    layout: 'side',
  },
  mfsu: {},
});
