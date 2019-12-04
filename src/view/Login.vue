<template>
    <div class="container-fluid  vh-100 vw-100">
        <div class="row vh-100 vw-100">
            <div class="col-9" id="fondo"></div>
            <div class="col-3 " id="form">
                <div class="container  h-100 w-100">
                    <div class="row  h-100">
                        <div class="col align-self-center">
                            <form class="border p-3 shadow-lg p-3 mb-5 rounded ">
                                <div class="row form-group  justify-content-center align-items-center">
                                    <img src="../img/logo.png" alt="" class="w-50 h-25">
                                </div>
                                <div class="form-group">
                                    <label for="exampleInputEmail1">Email address</label>
                                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
                                    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                                </div>
                                <div class="form-group">
                                    <label for="exampleInputPassword1">Password</label>
                                    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
                                </div>
                                <div class="form-group form-check">
                                    <input type="checkbox" class="form-check-input" id="exampleCheck1">
                                    <label class="form-check-label" for="exampleCheck1">Check me out</label>
                                </div>
                                <button type="submit" class="btn btn-primary">Submit</button>
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

    }

    if(screen.width < 1024){
        console.log("peque")
    }

</script>

<style scoped>
    #fondo{
        background-image: url("../img/ben-hershey-ChI4eUGTpeY-unsplash.jpg");
        background-size: cover;
        background-repeat: no-repeat;
    }

    @media (max-width: 992px) {
        .login100-form {
            width: 50%;
            padding-left: 30px;
            padding-right: 30px;
        }

        .login100-more {
            width: 50%;
        }
        #fondo {
            display: none;
        }
    }

    @media (max-width: 768px) {
        .login100-form {
            width: 100%;
        }

        #fondo {
            display: none;
        }
    }

    @media (max-width: 576px) {
        .login100-form {
            padding-left: 15px;
            padding-right: 15px;
            padding-top: 70px;
        }
    }
</style>
