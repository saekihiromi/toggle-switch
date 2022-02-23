Vue.createApp({
    data(){
        return{
            classActive: true
            
        }
    },
    methods:{
        toggleActive(){
            this.classActive = !this.classActive
        }
    }


}).mount('#app')