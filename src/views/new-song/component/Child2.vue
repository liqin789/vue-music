<template>
    <div>
        <el-dialog title="提示"
                   :visible="isShowDialog"
                   width="30%"
                   :before-close="handleClose">
            <div>
                <ul>
                    <li v-for="item in menuData"
                        :key="item.id">{{item.name}}</li>
                </ul>
            </div>

            <div>
                <el-button @click="sendC">C组件中触发函数</el-button>
            </div>
            <span slot="footer"
                  class="dialog-footer">
                <el-button @click="closeFn">取 消</el-button>
                <el-button type="primary"
                           @click="closeFn">确 定</el-button>
            </span>
        </el-dialog>

    </div>
</template>
<script>
export default {
    props: {
        dialogVisible: {
            type: Boolean
        },
        menuData: {
            type: Array
        }
    },
    components: {

    },
    data () {
        return {

        }
    },
    computed: {
        isShowDialog () {
            return this.dialogVisible == true
        }
    },
    methods: {
        handleClose () {
            this.$emit("closeFn")
        },
        closeFn () {
            this.$emit("closeFn")
        },
        sendC () {
            this.$emit("getC", 188)
        }
    }
}
</script>
<style lang="scss" scoped>
</style>


