<template>
    <div class="login">
        <div class="register-form">
            <b-form @submit.prevent="login">
                <h2 class="text-center">Login</h2>    
                    <div class="form-group">
                        <b-form-input type="text" class="form-control" placeholder="Email" v-model="person.email" id="email" required="required"></b-form-input>
                    </div>
                    <div class="form-group">
                        <b-form-input type="password" class="form-control" placeholder="Password" v-model="person.password" id="password" required="required"></b-form-input>
                    </div>

                    <div class="form-group">
                        <button type="submit" class="btn btn-primary btn-block">Login</button>
                    </div>  
            </b-form>
            <p v-if="status" class="danger font-itelic font-weight-bold text-danger text-center">{{status}}</p>
            <p class="text-center">
                <a href="/login">Back to Login</a>
            </p>
        </div>
    </div>
</template>

<script>
    import personServices from '../personServices'
    export default {
      name: 'Login',
      data(){
        return{
          person:{
            email: null,
            password: null
          },
          status: "test",
        }
      },
      methods: {
        async login(){
          try{
            personServices.login(this.person).then(user => {
              console.log(user);
              this.status=null
              this.$router.push("Home")

            }).catch((error) =>{
              this.status= error
            })

          }catch(error){
            this.status= error;
          }
        }
      }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .register-form{
        max-width: 700px;
        margin-left: auto;
        margin-right: auto;
    }
</style>
