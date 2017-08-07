import Vue from 'vue';
import Router from 'vue-router';
import Template from './components/Template';
import store from './store';

Vue.use(Router);

const extend = name => ({ name, extends: Template });

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: extend('Home'),
      children: [
        {
          path: 'Child-1',
          name: 'Child-1',
          component: extend('Child-1'),
          children: [
            {
              path: 'Child-1-1',
              name: 'Child-1-1',
              component: extend('Child-1-1'),
              children: [
                {
                  path: 'Child-1-1-1',
                  name: 'Child-1-1-1',
                  component: extend('Child-1-1-1')
                }
              ]
            },
            {
              path: 'Child-1-2',
              name: 'Child-1-2',
              component: extend('Child-1-2')
            }
          ]
        },
        {
          path: 'Child-2',
          name: 'Child-2',
          component: extend('Child-2'),
          children: [
            {
              path: 'Child-2-1',
              name: 'Child-2-1',
              component: extend('Child-2-1')
            }
          ]
        }
      ]
    }
  ]
});

router.beforeEach((to, from, next) => {
  // Reset pageStack to the new route
  store.commit('navigator/reset', to.matched.map(m => m.components.default));
  next();
});

export default router;
