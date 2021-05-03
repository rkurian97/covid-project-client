<template>
    <div class="register">
        <div class="register-form">
            <b-form @submit.prevent="register" id="registerForm">
                <h2 class="text-center">Register</h2>
                    <div class="form-group">
                        <b-form-input type="text" class="form-control" placeholder="First Name" v-model="person.firstName" id="firstName" required="required"></b-form-input>
                    </div>

                    <div class="form-group">
                        <b-form-input type="text" class="form-control" placeholder="Last Name" v-model="person.lastName" id="lastName" required="required"></b-form-input>
                    </div>
                         
                    <div class="form-group">
                        <b-form-input type="text" class="form-control" placeholder="Email" v-model="person.email" id="email" required="required"></b-form-input>
                    </div>

                    <b-form-group label="State">
                        <b-form-select
                            id="state"
                            v-model="person.state"
                            :options="stateOptions"
                        >
                        </b-form-select>
                    </b-form-group>

                    <div class="form-group">
                        <b-form-input type="password" class="form-control" placeholder="Password" v-model="person.password" id="password" required="required"></b-form-input>
                    </div>

                    <div class="form-group">
                        <b-form-input type="password" class="form-control" placeholder="Confirm Password" v-model="confirmPassword" id="passwordConfirm" required="required"></b-form-input>
                    </div>

                    <div class="form-group">
                        <button type="submit" class="btn btn-primary btn-block">Register</button>
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
        name: 'Register',
        data(){
            return{
                person:{
                    firstName: null,
                    lastName: null,
                    lastLogin: null, 
                    email: null,
                    state: null,
                    password: null
                },
                stateOptions: [
                    {value:'Alabama', text: 'Alabama'},
                    {value:'Alaska', text: 'Alaska'},
                    {value:'Arizona', text: 'Arizona'},
                    {value:'California', text: 'California'},
                    {value:'Colorado', text: 'Colorado'},
                    {value:'Connecticut', text: 'Connecticut'},
                    {value:'Delaware', text: 'Delaware'},

                    {value:'Florida', text: 'Florida'},
                    {value:'Georgia', text: 'Georgia'},
                    {value:'Hawaii', text: 'Hawaii'},
                    {value:'Idaho', text: 'Idaho'},
                    {value:'Illinois', text: 'Illinois'},
                    {value:'Indiana', text: 'Indiana'},
                    {value:'Iowa', text: 'Iowa'},
                    {value:'Kansas', text: 'Kansas'},

                    {value:'Kentucky', text: 'Kentucky'},
                    {value:'Louisiana', text: 'Louisiana'},
                    {value:'Maine', text: 'Maine'},
                    {value:'Maryland', text: 'Maryland'},
                    {value:'Massachusetts', text: 'Massachusetts'},
                    {value:'Michigan', text: 'Michigan'},
                    {value:'Minnesota', text: 'Minnesota'},
                    {value:'Mississippi', text: 'Mississippi'},

                    {value:'Missouri', text: 'Missouri'},
                    {value:'Montana', text: 'Montana'},
                    {value:'Nebraska', text: 'Nebraska'},
                    {value:'Nevada', text: 'Nevada'},
                    {value:'New Hampshire', text: 'New Hampshire'},
                    {value:'New Jersey', text: 'New Jersey'},
                    {value:'New Mexico', text: 'New Mexico'},
                    {value:'New York', text: 'New York'},

                    {value:'North Carolina', text: 'North Carolina'},
                    {value:'North Dakota', text: 'North Dakota'},
                    {value:'Ohio', text: 'Ohio'},
                    {value:'Oklahoma', text: 'Oklahoma'},
                    {value:'Oregon', text: 'Oregon'},
                    {value:'Pennsylvania', text: 'Pennsylvania'},
                    {value:'Rhode Island', text: 'Rhode Island'},
                    {value:'South Carolina', text: 'South Carolina'},

                    {value:'South Dakota', text: 'South Dakota'},
                    {value:'Tennessee', text: 'Tennessee'},
                    {value:'Texas', text: 'Texas'},
                    {value:'Utah', text: 'Utah'},
                    {value:'Vermont', text: 'Vermont'},
                    {value:'Virginia', text: 'Virginia'},
                    {value:'Washington', text: 'Washington'},
                    {value:'West Virginia', text: 'West Virginia'},

                    {value:'Wisconsin', text: 'Wisconsin'},
                    {value:'Wyoming', text: 'Wyoming'}

                ],
                status: null,
                confirmPassword: null
            }
        },
        methods: {
            async register(){
                if (this.confirmPassword === this.person.password){
                    try{
                        personServices.register(this.person).then(newAccount => {
                            if (Object.keys('newAccount').includes('errors')){
                                this.status= newAccount.errors.message
                            }else if (newAccount.name=== 'MongoError'){
                                this.status= `${newAccount.name} ${JSON.stringify(newAccount.keyValue)}`
                            }else{
                                this.status= null
                                this.$router.push('/')
                            }
                        }).catch((error) =>{
                            this.status= error
                        })

                    }catch(error){
                        this.status= error;
                    }
                }else{
                    this.status= "Passwords do not match. Please try again!"
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