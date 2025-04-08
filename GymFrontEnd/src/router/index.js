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

const router = createRouter(
  {
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
      meta: { requiresAuth: true } ,
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
      meta: { requiresAuth: true } ,
    },
    {
      path: '/Menu/equipamiento',
      component: EquipamientoView,
      meta: { requiresAuth: true } ,
    },
    {
      path: '/Menu/sucursales',
      component: SucursalView,
      meta: { requiresAuth: true },
    },
    {
      path: '/Menu/mantenimiento',
      component: MantenimientoView,
      meta: { requiresAuth: true } ,
    },

    { path: '/Menu/instalaciones', 
        component: InstalacionesView,
        meta: { requiresAuth: true },
    },

    { path: '/Menu/productos', 
      component: ProductosView,
      meta: { requiresAuth: true }  
  },

  { path: '/Menu/usuarios', 
    component: UsuariosView,
    meta: { requiresAuth: true } , 
},
{
  path: '/Menu/equipamiento/add',  
  name: 'addEquipo',               
  component: addEquipo, 
  meta: { requiresAuth: true } ,      
},
  { path: '/agregar-sucursal',
    name: 'addSucursal',
    component: addSucursal,
    meta: { requiresAuth: true } ,
  },
  { path: '/agregar-mantenimiento',
    name: 'addMantenimiento',
    component: addMantenimiento,
    meta: { requiresAuth: true } ,
  },
  { path: '/agregar-instalaciones',
    name: 'addInstalaciones',
    component: addInstalaciones,
    meta: { requiresAuth: true } ,
  },
  { path: '/agregar-productos',
    name: 'addProducto',
    component: addProducto,
    meta: { requiresAuth: true } ,
  },
  { path: '/agregar-usuario',
    name: 'addUsuario',
    component: addUsuario,
    meta: { requiresAuth: true } ,
  },
  {
    path: '/editar-equipo/:id',
    name: 'editEquipo',
    component: editEquipo,
    props: true,
    meta: { requiresAuth: true } ,
  },
  {
    path: '/editar-sucursal/:id',  
    name: 'editSucursal',
    component: editSucursal,  
    props: true,
    meta: { requiresAuth: true } ,
  },
  {
    path: '/editar-mantenimiento/:id',  
    name: 'editMantenimiento',
    component: editMantenimiento,  
    props: true,
    meta: { requiresAuth: true } ,
  },
  {
    path: '/editar-instalacion/:id',  
    name: 'editInstalaciones',
    component: editInstalaciones,  
    props: true,
    meta: { requiresAuth: true } ,
  },
  {
    path: '/editar-producto/:cod_barras',  
    name: 'editProducto',
    component: editProducto,  
    props: true,
    meta: { requiresAuth: true } ,
  }
  ]
}
)
router.beforeEach((to, from, next) => {
  const token = localStorage.getItem('token');
  const isAuthenticated = !!token;

  // Verifica si la ruta requiere autenticación
  if (to.meta.requiresAuth && !isAuthenticated) {
    return next('/home/login'); // Redirige si no está autenticado
  }

  next(); // Permite la navegación si está autenticado o la ruta no requiere autenticación
});
export default router
