import { createRouter, createWebHistory } from 'vue-router'
import Login from '@/components/Login.vue'
import Register from '@/components/Register.vue'
import Menu from '@/components/Menu.vue'
import Home from '@/components/Home.vue'
import DashboardView from '@/components/views/DashboardView.vue'
import SucursalView from '@/components/views/SucursalView.vue'
import EjerciciosView from '@/components/views/EjerciciosView.vue'
import RutinasEjerciciosView from '@/components/views/RutinasEjerciciosView.vue'
import RutinasView from '@/components/views/RutinasView.vue'
import EquipamientoView from '@/components/views/EquipamientoView.vue'
import PrestamosView from '@/components/views/PrestamosView.vue'
import PersonasView from '@/components/views/PersonasView.vue'
import PuestosView from '@/components/views/PuestosView.vue'
import EmpleadosView from '@/components/views/EmpleadosView.vue'
import HorariosView from '@/components/views/HorariosView.vue'
import InstalacionesView from '@/components/views/InstalacionesView.vue'
import MantenimientoView from '@/components/views/MantenimientoView.vue'

import ProductosAdmin from '@/components/VentasAdmin/ProductosAdmin.vue'
import PedidosAdmin from '@/components/VentasAdmin/PedidosAdmin.vue'
import PagosAdmin from '@/components/VentasAdmin/PagosAdmin.vue'
import PromocionesAdmin from '@/components/VentasAdmin/PromocionesAdmin.vue'

import Promociones_Cliente from '@/components/VentasClientes/Promociones_Cliente.vue'
import Productos_Cliente from '@/components/VentasClientes/Productos_Cliente.vue'
import Preguntas_Cliente from '@/components/VentasClientes/Preguntas_Cliente.vue'
import EvaluacionServicio_Cliente from '@/components/VentasClientes/EvaluacionServicio_Cliente.vue'
import Opiniones_clientes_Cliente from '@/components/VentasClientes/Opiniones_clientes_Cliente.vue'
import Pagos_Cliente from '@/components/VentasClientes/Pagos_Cliente.vue'
import Pedidos_Cliente from '@/components/VentasClientes/Pedidos_Cliente.vue'

import Transacciones from '@/components/views/Transacciones.vue'


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
            path:'/ejercicios', name:'ejercicios', component: EjerciciosView
          },
          {
            path:'/rutinas', name:'rutinas', component: RutinasView
          },
          {
            path:'/rutinasEjercicios', name:'rutinasEjercicios', component: RutinasEjerciciosView
          },
          {
            path:'/equipamiento', name:'equipamiento', component: EquipamientoView
          },
          {
            path:'/prestamos', name:'prestamos', component: PrestamosView
          },
          {
            path:'/personas', name:'personas', component: PersonasView
          },
          {
            path:'/puestos', name:'puestos', component: PuestosView
          },
          {
            path:'/empleados', name:'empleados', component: EmpleadosView
          },
          {
            path:'/horarios', name:'horarios', component: HorariosView
          },
          {
            path:'/instalaciones', name:'instalaciones', component: InstalacionesView
          },
          {
            path:'/mantenimiento', name:'mantenimiento', component: MantenimientoView
          },

          {
            path:'/ProductosAdmin', name:'ProductosAdmin', component: ProductosAdmin
          },
          {
            path:'/PromocionesAdmin', name:'PromocionesAdmin', component: PromocionesAdmin
          },
          {
            path:'/PedidosAdmin', name:'PedidosAdmin', component: PedidosAdmin
          },
          {
            path:'/PagosAdmin', name:'PagosAdmin', component: PagosAdmin
          },   
          {
            path:'/Promociones_Cliente', name:'Promociones_Cliente', component: Promociones_Cliente
          },
          {
            path:'/Productos_Cliente', name:'Productos_Cliente', component: Productos_Cliente
          },
          {
            path:'/Preguntas_Cliente', name:'Preguntas_Cliente', component: Preguntas_Cliente
          },
          {
            path:'/EvaluacionServicio_Cliente', name:'EvaluacionServicio_Cliente', component: EvaluacionServicio_Cliente
          },
          {
            path:'/Opiniones_clientes_Cliente', name:'Opiniones_clientes_Cliente', component: Opiniones_clientes_Cliente
          },
          {
            path:'/Pagos_Cliente', name:'Pagos_Cliente', component: Pagos_Cliente
          },
          {
            path:'/Pedidos_Cliente', name:'Pedidos_Cliente', component: Pedidos_Cliente
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
    { path: '/transacciones', 
      component: Transacciones },
  ]
})

export default router
