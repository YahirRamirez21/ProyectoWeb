import Vue from 'vue'
import VueRouter from 'vue-router'
import Maestros from '../views/Maestros.vue'
import Alumnos from '../views/Alumnos.vue'
import Grupos from '../views/Grupos.vue'
import Materias from '../views/Materias.vue'
import Carga from '../views/Carga.vue'
import EditarAlumno from '../components/EditarAlumno.vue'
import NuevoAlumno from '../components/NuevoAlumno.vue'


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
    path: '/editarAlumno',
    name: 'editarAlumno',
    component: EditarAlumno,
    props: true
  },
  {
    path: '/nuevoAlumno',
    name: 'nuevoAlumno',
    component: NuevoAlumno
  },
  {
    path: '/grupos',
    name: 'grupos',
    component: Grupos
  },
  {
    path: '/materias',
    name: 'materias',
    component: Materias
  },
  {
    path: '/carga',
    name: 'carga',
    component: Carga
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
