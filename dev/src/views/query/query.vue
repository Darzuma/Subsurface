<template>
    <v-content>
        <list/>
        <pagi/>
    </v-content>
</template>

<script>
    import { mapState } from 'vuex'
    import pagi from './pagi/pagi'
    import list from './list/list'

    export default {
        name: "articleList",
        computed:{
            ...mapState(['headbar','footbar','hash']),
        },
        components:{
            list,pagi
        },

        created() {
            this.headbar.valid.shrink = false
            this.headbar.valid.aug = true
            this.headbar.style = 'width: 57rem'
            this.footbar.style = 'width: 57rem'
            this.headbar.title = `
            <style>
                div.logo{
                    height: 34px;
                    width: 107.5px;
                    background-image: url("http://www.subsurface.cn.obs.cn-east-3.myhuaweicloud.com/images/icons/logo.png");
                    background-size: cover;
                    background-repeat:no-repeat;
                }
                @media screen and (max-width: 600px){
                    div.logo{
                        background-image: url("http://www.subsurface.cn.obs.cn-east-3.myhuaweicloud.com/images/icons/logo_dark.png");
                    }
                }
            </style>
            <div class="logo" />
            `
            if(window.location.hash){
                // console.log(this.$vuetify.breakpoint)
                let arr = window.location.hash.substr(1).split('&')
                let obj = {}
                arr.forEach((item)=>{
                    item = item.split('=')
                    obj[item[0]] = decodeURI(item[1])
                })


                if(obj.category){
                    this.hash.queryKey = 'category'
                    this.hash.queryVal = obj.category
                }
                if(obj.search){
                    this.hash.queryKey = 'search'
                    this.hash.queryVal = obj.search
                }

                let page = Number(obj.page)
                this.hash.page = page ? ( page < this.hash.total ? page : 1 ) : 1
            }

        }
    }
</script>

<style scoped lang="scss">

    main.v-content{
        &::before{
            display: block;content: '';
            position: fixed;top: 0;left: 0;
            width: 100vw;height: 100vh;
            background-color: hsl(0,0%,94%);
            @media(max-width: 950px){
                background-color: white;
            }
        }
        .v-content__wrap{
            position: relative;
        }
    }
</style>