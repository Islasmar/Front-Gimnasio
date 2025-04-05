import { createRouter, createWebHistory } from 'vue-router'
import Login from '@/components/Login.vue'
import Register from '@/components/Register.vue'
import Menu from '@/components/Menu.vue'
import Home from '@/components/Home.vue'
import DashboardView from '@/components/views/DashboardView.vue'
import SucursalView from '@/components/views/SucursalView.vue'
import EquipamientoView from '@/components/views/EquipamientoView.vue'
import PersonasView from '@/components/views/PersonasView.vue'
import InstalacionesView from '@/components/views/InstalacionesView.vue'
import MantenimientoView from '@/components/views/MantenimientoView.vue'
import UsuariosView from '@/components/UsuariosView.vue'
import ProductosView from '@/components/views/ProductosView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/home/login',
      name: 'login',
      component: Login
    },
    {
      path: '/signup',
      name: 'signup',
      component: Register
    },
    {
      path: '/Menu',
      name: 'Menu',
      component: Menu,
        children:[
          {
            path:'/dashboard', name:'dashboard', component: DashboardView
          },
          {
            path:'/sucursales', name:'sucursal', component: SucursalView
          },
          {
            path:'/equipamiento', name:'equipamiento', component: EquipamientoView
          },
          {
            path:'/personas', name:'personas', component: PersonasView
          },
          {
            path:'/instalaciones', name:'instalaciones', component: InstalacionesView
          },
          {
            path:'/mantenimiento', name:'mantenimiento', component: MantenimientoView
          },  
          {
            path:'/productos', name:'Productos_Cliente', component: ProductosView
          },
        ]
    },
    {
      path: '/Menu/dashboard',
      component: DashboardView,
    },
    {
      path: '/Menu/equipamiento',
      component: EquipamientoView,
    },
    {
      path: '/Menu/sucursales',
      component: SucursalView,
    },
    {
      path: '/Menu/mantenimiento',
      component: MantenimientoView,
    },

    { path: '/Menu/instalaciones', 
        component: InstalacionesView 
    },

    { path: '/Menu/productos', 
      component: ProductosView  
  },

  { path: '/Menu/usuarios', 
    component: UsuariosView  
},
  ]
})

export default router
