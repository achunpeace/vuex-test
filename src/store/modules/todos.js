// import axios from 'axios';

import Axios from "axios";

const state = {
    todos:[
        // {
        //     id: 1,
        //     title: "Todo one"
        // }
    ]
};

const getters = {
    getAllTodos(state){
        return state.todos;
    }
};

const mutations = {
    setTodos(state,todos){
        state.todos = todos;
    }
};

const actions = {
    async getAllTodos({commit}){
        const res = await Axios.get("http://jsonplaceholder.typicode.com/todos");
        commit("setTodos",res.data);
    }
};

export default { state, getters, mutations, actions}