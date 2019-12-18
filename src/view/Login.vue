<template lang="html">
    <div class="container-fluid bg-green  vh-100 vw-100">
        <div class="row vh-100 vw-100">
            <div class="col-9"  id="fondo"></div>
            <div v-bind:class="[col, bg]" id="form">
                <div class="container  h-100 w-100">
                    <div class="row  h-100">
                        <div class="col align-self-center">
                            <form class="border p-3 shadow-lg p-3 mb-5 rounded align-items-center" id="Login" @submit="checkForm" action="Login.vue" method="post">
                                <div class="row form-group  justify-content-center align-items-center">
                                    <img src="../img/logo.png" alt="" class="w-50 h-25">
                                </div>
                                <div class="form-group">
                                    <label for="usuario">Nombre de Usuario</label>
                                    <input v-model="usuario" type="text" class="form-control" v-bind:class="['form-control', validaU]"  id="usuario" aria-describedby="IngresoUsuario" placeholder="Usuario"  @keyup="validacionU()">
                                    <small v-for="error in errorsU" class="form-text text-muted"> {{ error }}</small>
                                </div>
                                <div class="form-group">
                                    <label for="clave">Contraseña</label>
                                    <input v-model="clave" type="password" class="form-control" v-bind:class="['form-control', validaC]" id="clave" placeholder="Contraseña" @keyup="validacionC()">
                                    <small v-for="error in errorsC" class="form-text text-muted"> {{ error }}</small>
                                </div>
                                <div class="form-group form-check">
                                    <input type="checkbox" class="form-check-input" id="exampleCheck1">
                                    <label class="form-check-label" for="exampleCheck1">Recordar Credenciales</label>
                                </div>
                                <button type="submit" class="btn btn-success">Ingresar</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>


</template>

<script>
    export default {
        name: "Login",
        data() {
            return {
                errorsU: [],
                errorsC: [],
                usuario: null,
                clave: null,
                col: null,
                validaU: null,
                validaC: null,
                bg: 'bg-light'
            }
        },
        methods:{
            validacionU: function(){
                this.errorsU = [];
                if (!this.usuario) {
                    this.errorsU.push('El usuario es obligatorio');
                    this.validaU = 'is-invalid';
                }
                if(this.usuario !== "root"){
                    this.errorsU.push('El nombre de usuario no existe');
                    this.validaU = 'is-invalid';
                }else{
                    this.validaU = 'is-valid';
                }
            },
            validacionC: function(){
                this.errorsC = [];
                if (!this.clave) {
                    this.errorsC.push('La contraseña es obligatoria.');
                    this.validaC = 'is-invalid';
                }
                if(this.clave !== "contra"){
                    this.errorsC.push('La contraseña es incorrecta');
                    this.validaC = 'is-invalid';
                }
                else{
                    this.validaC = 'is-valid'
                }
            },
            checkForm: function (e) {
                if (this.usuario && this.clave) {
                    return true;
                }
                e.preventDefault();
            }
        },
        mounted() {
            if (screen.width <= 1024)
                this.col = 'col-12';
            if (screen.width < 1280)
                this.col = 'col-12';
            else
                this.col = 'col-3';
        }
    }
</script>

<style scoped>
    #fondo{
        background-image: url("../img/ben-hershey-ChI4eUGTpeY-unsplash.jpg");
        background-size: cover;
        background-repeat: no-repeat;
        opacity: 0.7;
    }
    .bg-green{
        background-color: #696969;
    }
    @media (max-width: 768px) {
        .login100-form {
            width: 100%;
        }
        #fondo {
            display: none;
        }
    }
</style>
