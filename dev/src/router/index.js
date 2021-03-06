import Vue from 'vue'
import VueRouter from 'vue-router'

// import articleList from '@/views/articleList/articleList'
// import album from '@/views/album/album'
// import blog from '@/views/blog/blog'
import query from '@/views/query/query'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'query',
    component: query
  },
  {
    path: '/album/:gallery',
    name: 'album',
    props:true,
    component: () => import('@/views/album/album'),
  },
  {
    path: '/blog/:year',
    name: 'blog',
    props:true,
    component: () => import('@/views/blog/blog')
  },
  {
    path: '/essay/:dirname',
    name: 'essay',
    props:true,
    component: () => import('@/views/essay/essay'),
    children:[
      {
        path:':filename',
      },
      {
        path:':subdirname/:filename',
      },

    ]
  },
  {
    path: '/editor',
    name: 'editor',
    component: () => import('@/views/editor/editor')
  },
  {
    path: '/*',
    name: 'error',
    component: () => import('@/views/error')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
