<template>
    <div id="app">

        <h1>Spiruline</h1>


        <div id="menu">
            <router-link :to="{ name: 'SuppliersList' }">Consulter la liste des fournisseurs</router-link>
            <router-link :to="{ name: 'SuppliersMap' }">Voir la carte</router-link>
        </div>
        <h3 v-if="loading"><span v-if="error">{{ error }}</span><span v-else>Chargement des données en cours</span></h3>
        <div v-else>
            <select v-model="selected">
                <option value="all">*</option>
                <option value="1">OK</option>
                <option value="">KO</option>
            </select>
            <router-view :suppliers="suppliers"></router-view>
        </div>

    </div>
</template>

<script>
    const axios = require('axios');

    export default {
        name: 'app',
        data: function () {
            return {
                suppliers: [],
                error: null,
                loading: true,
                suppliersSave: []
            }
        },
        created() {

            axios.get('https://api-suppliers.herokuapp.com/api/suppliers')
                .then((response) => {
                    this.loading = false;
                    this.suppliers = response.data;
                    this.suppliersSave = this.suppliers;
                })
                .catch((error) => {
                    this.error = error;
                })
                .finally(() => {
                });
        },
        computed:{
            selected: {
                get () {
                    return null;
                },
                set (optionValue) {
                    if(optionValue === 'all'){
                        this.suppliers = this.suppliersSave;
                    } else {
                        let datas = [];
                        this.suppliersSave.forEach(function(element){
                            if(element.status === Boolean(optionValue)){
                                datas.push(element)
                            }
                        })
                        this.suppliers = datas;
                    }
                },
            },
        },

    }
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }

    #menu a {
        margin: 10px;
        padding: 10px;
        cursor: pointer;
        background-color: #41B883;
        color: white;
        border: none;
        text-decoration: none;
    }

    #menu a:hover {
        background-color: #328e65;
    }

    #menu {
        margin-bottom: 40px;
    }
</style>
