import Vue from 'vue'
import VueRouter from 'vue-router'
import Maestros from '../views/Maestros.vue'
import Alumnos from '../views/Alumnos.vue'
import Grupos from '../views/Grupos.vue'
import Materias from '../views/Materias.vue'
import Carga from '../views/Carga.vue'
import EditarAlumno from '../components/EditarAlumno.vue'
import NuevoAlumno from '../components/NuevoAlumno.vue'
import EditarMaestro from '../components/EditarMaestro.vue'
import NuevoMaestro from '../components/NuevoMaestro.vue'
import EditarGrupo from '../components/EditarGrupo.vue'
import NuevoGrupo from '../components/NuevoGrupo.vue'
import EditarMateria from '../components/EditarMateria.vue'
import NuevaMateria from '../components/NuevaMateria.vue'


Vue.use(VueRouter)

const routes = [
  
  {
    path: '/maestros',
    name: 'maestros',
    component: Maestros
  },
  {
    path: '/editarMaestro',
    name: 'editarMaestro',
    component: EditarMaestro,
    props: true
  },
  {
    path: '/nuevoMaestro',
    name: 'nuevoMaestro',
    component: NuevoMaestro
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
    path: '/editarGrupo',
    name: 'editarGrupo',
    component: EditarGrupo,
    props: true
  },
  {
    path: '/nuevoGrupo',
    name: 'nuevoGrupo',
    component: NuevoGrupo
  },
  {
    path: '/materias',
    name: 'materias',
    component: Materias
  },
  {
    path: '/editarMateria',
    name: 'editarMateria',
    component: EditarMateria,
    props: true
  },
  {
    path: '/nuevaMateria',
    name: 'nuevaMateria',
    component: NuevaMateria
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
