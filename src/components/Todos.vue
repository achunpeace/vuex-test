<template>
    <div>
        <h3>Todos</h3>
        <div class="todos">
            <div class="todo" v-for="todo in todos" :key="todo.id">{{todo.title}}</div>
        </div>
    </div>
</template>
<script>
import {mapGetters, mapActions} from 'vuex'
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
    methods: mapActions(['getAllTodos']),
    created(){
        // this.$store.dispatch("getAllTodos");
        this.getAllTodos();
    }
}
</script>
<style scoped>
    .todos {
        display: grid;
        grid-template-columns: repeat(3,1fr);
        grid-gap:1rem;
    }
    .todo {
        background: #41b883;
        padding: 10px;
        border: 1px solid #41b883;
        border-radius: 5px;
        position: relative;
        cursor: pointer;
        color: white;
    }
</style>