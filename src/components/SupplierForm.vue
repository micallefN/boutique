<template>
    <div class="form">
        <div>
            <label for="name">Nom </label>
            <input v-model="name" id="name"/>
        </div>
        <div>
            <label for="latitude">latitude </label>
            <input v-model="latitude" id="latitude"/>
        </div>
        <div>
            <label for="longitude">longitude </label>
            <input v-model="longitude" id="longitude"/>
        </div>
        <div>
            <input type="checkbox" id="status" v-model="status">
            <label for="status">status</label>
        </div>
        <button @click="sendData()">Valider</button>

    </div>
</template>

<script>
    const axios = require('axios');
    import Bus from '../Bus.js'

    export default {
        name: 'SupplierForm',
        data: function () {
            return {
                name: '',
                status: false,
                latitude: '',
                longitude: '',
            }
        },
        methods: {
            sendData() {
                axios.post('https://api-suppliers.herokuapp.com/api/suppliers', {
                    name: this.name,
                    checkedAt: new Date(),
                    status: this.status,
                    latitude: this.latitude,
                    longitude: this.longitude
                }).then(()=>{Bus.$emit('reloadApi')});

            }
        }

    }
</script>

<style scoped>
    .form {
        margin-top: 40px;
    }

    .form div {
        padding: 10px;
    }
</style>
