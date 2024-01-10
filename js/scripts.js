const {createApp} = Vue;

createApp({
  data() {
    return {
		email:[]
    }
  },
    methods: {
		funzione(){
	
	}
    },
    mounted(){
        axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then( (resp) => {
                const emailResult = resp.data.response;
                console.log(emailResult)
                this.email.push(emailResult);
            });
            
    }

}).mount('#app')