<template>
    <div>
    <b-navbar toggleable="lg" type="dark" variant="info">
        <b-navbar-nav>
            <router-link class="navbar-brand" :to="{name:'Home'} ">Home</router-link>
            <router-link class="navbar-brand"  :to="{name:'Login'} ">Login</router-link>
            <router-link class="navbar-brand"  :to="{name:'Register'} ">Register</router-link>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
            
            <b-nav-item-dropdown right>
            <!-- Using 'button-content' slot -->
            <template #button-content>
                <em>User</em>
            </template>
            <b-dropdown-item><router-link  :to="{name:'Update'} ">Profile</router-link></b-dropdown-item>
            </b-nav-item-dropdown>
        </b-navbar-nav>
    </b-navbar>
    </div>
    
</template>

<script>

export default {
    name: "Navbar",
    data(){
        return{
            token: null
        }
    }
}
</script>

<style scoped>

</style>