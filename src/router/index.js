import Vue from 'vue'
import VueRouter from 'vue-router'

import SuppliersList from '@/components/SuppliersList'
import SuppliersMap from '@/components/SuppliersMap'
import Supplier from '@/components/Supplier'
import SupplierForm from '@/components/SupplierForm'

Vue.use(VueRouter)

const routes = [
    { path: '/suppliers', name: 'SuppliersList',component: SuppliersList },
    { path: '/map', name: 'SuppliersMap', component: SuppliersMap },
    { path: '/supplier', name: 'Supplier', component: Supplier },
    { path: '/supplierForm', name: 'SupplierForm', component: SupplierForm },
]


export const router = new VueRouter({
    routes
})
