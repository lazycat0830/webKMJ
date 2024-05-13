
const about=() => import('../views/about.vue');
const product=() => import('../views/product.vue');
const contact=() => import('../views/contact.vue');
const login=() => import('../views/login.vue');
const news=() => import('../views/news.vue');


const routes=[
    {
      path: '/',
      component: () => import('../layout/MainLayout.vue'),
      children:[
        {
          path: '/',
          name: 'main',
          component: () => import('../views/main.vue'),
        },
        {
          path: '/about',
          name: 'about',
          component:about
        },
        {
          path: '/product',
          name: 'product',
          component:product
        },
        {
          path: '/contact',
          name: 'contact',
          component:contact
        },
        {
          path: '/news',
          name: 'news',
          component:news
        },
        {
          path: '/login',
          name: 'login',
          component:login
        }
      ]
    },
    
  ]

export default routes;