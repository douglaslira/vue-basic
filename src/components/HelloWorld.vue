<template>
<div class="hello">
    <h1>{{ msg }}</h1>
    <table class="table table-bordered table-striped">
        <thead>
            <tr>
                <th>NO</th>
                <th>NAME</th>
                <th>ACT</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(user, index) in users" v-bind:key="user.id">
                <td>
                    <div class="text-center">{{ index+1 }}</div>
                </td>
                <td>{{ user.name }}</td>
                <td>
                    <button @click="destroy(user.id)" class="btn btn-sm btn-danger">
                        Delete
                    </button>
                </td>

            </tr>
        </tbody>
    </table>
</div>
</template>

<script>
import {
    mapGetters,
    mapActions
} from 'vuex'

export default {
    name: 'HelloWorld',
    computed: mapGetters('User', [{
        users: 'allUsers',
        messages: 'messages'
    }]),
    watch: {
        users: {
            handler(user) {
                console.log(user);
            },
            deep: true
        }
    },
    methods: mapActions({
        'destroy': 'User/destroy'
    }),
    created() {
        this.$store.dispatch('User/getAllUsers', null, {
            root: true
        })
    },
    props: {
        msg: String
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style lang="scss" scoped>
h3 {
    margin: 40px 0 0;
}

ul {
    list-style-type: none;
    padding: 0;
}

li {
    display: inline-block;
    margin: 0 10px;
}

a {
    color: #42b983;
}
</style>
