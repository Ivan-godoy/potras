<template lang="html">
    <div>
        <vs-table
                :data="users">
            <template slot="header">
                <h3>
                    Equipos Creados
                </h3>
            </template>
            <template slot="thead">
                <vs-th>
                    #
                </vs-th>
                <vs-th>
                    Nombre
                </vs-th>
                <vs-th>
                    Ciudad
                </vs-th>
            </template>

            <template slot-scope="{data}">
                <vs-tr :data="tr" :key="indextr" v-for="(tr, indextr) in data" >
                    <vs-td :data="tr.id">
                        {{tr.id}}
                    </vs-td>

                    <vs-td :data="tr.username">
                        {{tr.name}}
                    </vs-td>

                    <vs-td :data="tr.website">
                        {{tr.website}}
                    </vs-td>


                    <template class="expand-user" slot="expand">
                        <div class="con-expand-users">
                            <div class="con-btns-user">
                                <div class="con-userx">
                                    <vs-avatar  size="45px" :src="`https://randomuser.me/api/portraits/women/${indextr}.jpg`"/>
                                    <span>
                                        {{ tr.name }}
                                    </span>
                                </div>
                            </div>
                            <vs-list>
                                <vs-list-item icon="mail" title="Nombre del Entranador" :subtitle="tr.email"></vs-list-item>
                            </vs-list>
                        </div>
                    </template>
                </vs-tr>
            </template>
        </vs-table>

        <pre>{{ selected }}</pre>
    </div>
</template>

<script>
    export default {
        name:'TablaEquipo',
        data:()=>({
            users:[
                {
                    "id": 1,
                    "name": "Leanne Graham",
                    "username": "Bret",
                    "email": "Sincere@april.biz",
                    "website": "hildegard.org",
                },
                {
                    "id": 2,
                    "name": "Ervin Howell",
                    "username": "Antonette",
                    "email": "Shanna@melissa.tv",
                    "website": "anastasia.net",
                },
                {
                    "id": 3,
                    "name": "Clementine Bauch",
                    "username": "Samantha",
                    "email": "Nathan@yesenia.net",
                    "website": "ramiro.info",
                },
                {
                    "id": 4,
                    "name": "Patricia Lebsack",
                    "username": "Karianne",
                    "email": "Julianne.OConner@kory.org",
                    "website": "kale.biz",
                },
                {
                    "id": 5,
                    "name": "Chelsey Dietrich",
                    "username": "Kamren",
                    "email": "Lucio_Hettinger@annie.ca",
                    "website": "demarco.info",
                },
                {
                    "id": 6,
                    "name": "Mrs. Dennis Schulist",
                    "username": "Leopoldo_Corkery",
                    "email": "Karley_Dach@jasper.info",
                    "website": "ola.org",
                },
                {
                    "id": 7,
                    "name": "Kurtis Weissnat",
                    "username": "Elwyn.Skiles",
                    "email": "Telly.Hoeger@billy.biz",
                    "website": "elvis.io",
                },
                {
                    "id": 8,
                    "name": "Nicholas Runolfsdottir V",
                    "username": "Maxime_Nienow",
                    "email": "Sherwood@rosamond.me",
                    "website": "jacynthe.com",
                },
            ]
        })
    }
</script>
<style lang="stylus">
    .con-expand-users
        .con-btns-user
            display flex
            padding 10px
            padding-bottom 0px
            align-items center
            justify-content space-between
            .con-userx
                display flex
                align-items center
                justify-content flex-start
        .list-icon
            i
                font-size .9rem !important
</style>
