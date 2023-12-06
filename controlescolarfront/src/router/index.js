import Vue from 'vue'
import VueRouter from 'vue-router'
import Maestros from '../views/Maestros.vue'



Vue.use(VueRouter)

const routes = [
  
  {
    path: '/maestros',
    name: 'maestros',
    component: Maestros
  },
  {
    path: '/alumnos',
    name: 'alumnos',
    component: Alumnos
  },
  {
    path: '/grupos',
    name: 'grupos',
    component: Grupos
  },
  {
    path: '/materias',
    name: 'materias',
    component: Materia
  },
  {
    path: '/carga',
    name: 'carga',
    component: Maestros
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
