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

import addEquipo from '@/components/forms/addEquipo.vue'
import addSucursal from '@/components/forms/addSucursal.vue'
import addMantenimiento from '@/components/forms/addMantenimiento.vue'
import addInstalaciones from '@/components/forms/addInstalaciones.vue'
import addProducto from '@/components/forms/addProducto.vue'
import addUsuario from '@/components/forms/addUsuario.vue'

import editEquipo from '@/components/forms/editEquipo.vue'
import editSucursal from '@/components/forms/editSucursal.vue'
import editMantenimiento from '@/components/forms/editMantenimiento.vue'
import editInstalaciones from '@/components/forms/editInstalaciones.vue'
import editProducto from '@/components/forms/editProducto.vue'

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
{
  path: '/Menu/equipamiento/add',  
  name: 'addEquipo',               
  component: addEquipo,       
},
  { path: '/agregar-sucursal',
    name: 'addSucursal',
    component: addSucursal
  },
  { path: '/agregar-mantenimiento',
    name: 'addMantenimiento',
    component: addMantenimiento
  },
  { path: '/agregar-instalaciones',
    name: 'addInstalaciones',
    component: addInstalaciones
  },
  { path: '/agregar-productos',
    name: 'addProducto',
    component: addProducto
  },
  { path: '/agregar-usuario',
    name: 'addUsuario',
    component: addUsuario
  },
  {
    path: '/editar-equipo/:id',
    name: 'editEquipo',
    component: editEquipo,
    props: true,
  },
  {
    path: '/editar-sucursal/:id',  
    name: 'editSucursal',
    component: editSucursal,  
    props: true,
  },
  {
    path: '/editar-mantenimiento/:id',  
    name: 'editMantenimiento',
    component: editMantenimiento,  
    props: true,
  },
  {
    path: '/editar-instalacion/:id',  
    name: 'editInstalaciones',
    component: editInstalaciones,  
    props: true,
  },
  {
    path: '/editar-producto/:cod_barras',  
    name: 'editProducto',
    component: editProducto,  
    props: true,
  }
  ]
})

export default router
