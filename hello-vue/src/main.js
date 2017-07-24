import Vue from 'vue'
import axios from 'axios'
import Vuex from 'Vuex'
import VueRouter from 'vue-router' 
import reset from './css/reset.css'
import App from './investigate.vue'
import first from'./views/first.vue'
import three from'./views/three.vue'
import two from'./views/two.vue'
import fore from'./views/fore.vue'
import five from'./views/five.vue'
import end from'./views/end.vue'
import store from'../store/store.js'

Vue.use(VueRouter)


const routes=[
   {
        name:'first',
        path:'/first',
        component:first
    },
    {
        name:'three',
        path:'/three',
        component:three
    },{
        name:'two',
        path:'/two',
        component:two
    },{
        name:'fore',
        path:'/fore',
        component:fore
    },{
        name:'five',
        path:'/five',
        component:five
    },
    {
        path:'/',
        redirect:{
            name:"first"
        }
    },
     {
        name:'end',
        path:'/end',
        component:end
    },
]

let router=new VueRouter({
    routes
})
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
  created:function(){
    axios.get('../data/data.json').then((data)=>{
            this.$store.state.list=data.data;
             
    })
  }
})
