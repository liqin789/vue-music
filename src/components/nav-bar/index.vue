<template>
    <div>
       {{msg}}
    </div>
</template>
<script>
import {routes} from "@/router/routes.js"

console.log(routes)
export default {
    data(){
        return {
            msg:'this is a bar'
        }
    },
    methods:{

    }
}
</script>
<style>
 
</style>


