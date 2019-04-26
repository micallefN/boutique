import Vue from 'vue'
import VueRouter from 'vue-router'

import SuppliersList from '@/components/SuppliersList'
import SuppliersMap from '@/components/SuppliersMap'

Vue.use(VueRouter)

const routes = [
    { path: '/suppliers', name: 'SuppliersList',component: SuppliersList },
    { path: '/map', name: 'SuppliersMap', component: SuppliersMap }
]


export const router = new VueRouter({
    routes
})
