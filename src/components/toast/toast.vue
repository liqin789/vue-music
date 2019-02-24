<template>
    <transition name="fade">

        <div class="toast"
             v-show="show">
            <h1 class="title">{{title}}</h1>
            <span class="icon"
                  @click="closeFn">x</span>
            <div>
                {{message}}
            </div>
            <div class="footer">
                <el-button type="primary"
                           class="align-right"
                           @click="closeFn">关闭</el-button>
            </div>

        </div>

    </transition>
</template>

<script>
export default {
    data () {
        return {
            title: '',
            show: false,
            message: ""
        };
    },
    methods: {
        closeFn () {
            this.show = false
        }
    }
};
</script>

<style lang="scss" scoped>
.toast {
    position: fixed;
    top: 40%;
    left: 50%;
    margin-left: -25vw;
    padding: 2vw;
    width: 50vw;
    height: 200px;
    font-size: 16px;
    color: #fff;
    text-align: center;
    background-color: rgba(0, 0, 0, 0.8);
    border-radius: 5px;
    z-index: 999;
}

.fade-enter-active,
.fade-leave-active {
    transition: 0.3s ease-out;
}
.fade-enter {
    opacity: 0;
    transform: scale(1.2);
}
.fade-leave-to {
    opacity: 0;
    transform: scale(0.8);
}
.title {
    font-size: 14px;
    text-align: left;
    border-bottom: 1px solid #fff;
    padding-bottom: 5px;
}
.icon {
    position: absolute;
    top: 0px;
    right: 20px;
    font-size: 30px;
    cursor: pointer;
}
.footer {
    position: absolute;
    bottom: 10px;
    text-align: inherit;
    width: calc(100% - 2vw);
}
</style>