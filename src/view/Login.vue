<template>
    <div class="container-fluid bg-dark vh-100 vw-100">
        <div class="row vh-100 vw-100">
            <div class="col-9 bg-warning" id="fondo">

            </div>
            <div class="col-3 bg-light" id="form">
                <div class="container bg-primary h-100 w-100">
                    <div class="row bg-dark h-100">

                        <div class="col align-self-center">
                            <form>
                                <div class="row form-group bg-light justify-content-center align-items-center">
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
                            One of three columns
                        </div>

                    </div>
                </div>


                <!--<div class="container bg-primary h-100 w-100">
                    <div class="row h-100 w-100 justify-content-center bg-dark">
                        <form action="#" class="form align-self-center w-100">
                            <div class="form-group">
                                <label for="email">Email</label>
                                <input type="email" name="email" id="email" class="form-control">
                            </div>
                            <div class="form-group">
                                <label for="password">Password</label>
                                <input type="password" name="password" id="password" class="form-control">
                            </div>
                            <button type="submit" class="btn btn-primary">Login</button>
                        </form>
                    </div>
                </div>-->
            </div>
        </div>
    </div>


</template>

<script>
    export default {
        name: "Login"
    }
    if (screen.width < 1024)
        console.log("Pequeña");

    else
    if (screen.width < 1280)
        console.log("Mediana")
    else
        console.log("Grande")

</script>

<style scoped>
    .abs-center {
        display: flex;
        align-items: center;
        justify-content: center;
        min-height: 100vh;
    }
</style>
