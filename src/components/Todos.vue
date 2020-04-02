<template>
    <div>
        <h3>Todos</h3>
        <div class="todos">
            <div class="todo" v-for="todo in todos" :key="todo.id">{{todo.title}}</div>
        </div>
    </div>
</template>
<script>
import {mapGetters} from 'vuex'
export default {
    name: "Todos",
    computed: mapGetters({
        todos: "getAllTodos"
    }),
    // computed: {
    //     todos() {
    //         return this.$store.getters.getAllTodos
    //     }
    // }
    created(){
        this.$store.dispatch("getAllTodos");
    }
}
</script>
<style scoped>

</style>