<template>
    <div id="Nav">
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <router-link to="/" class="nav-link">Potras</router-link>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavDropdown">
                <ul class="navbar-nav">
                    <li class="nav-item active">
                        <router-link class="nav-link" to="/reciente">Lo mas reciente</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/equipos">Equipos</router-link>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Jugadores</a>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Dropdown link
                        </a>
                        <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                            <a class="dropdown-item" href="#">Action</a>
                            <a class="dropdown-item" href="#">Another action</a>
                            <a class="dropdown-item" href="#">Something else here</a>
                        </div>
                    </li>

                </ul>
            </div>
        </nav>
    </div>
</template>

<script>
  export default {
    name: 'Nav'
  }
</script>

<style scoped>

</style>
