<template>
    <div class="user-info">
        <el-row v-if="isUserInfo">
            <el-col class="basic-col" :md="12">
                <p class="title">基本信息</p>
                <div>
                    <el-form :label-position="right" label-width="100px" :model="userForm">
                        <el-form-item label="昵称 :">
                            <el-input v-model="userForm.nickname"></el-input>
                        </el-form-item>
                        <el-form-item label="真实姓名 :">
                            <el-input v-model="userForm.name"></el-input>
                        </el-form-item>
                        <el-form-item label="年龄 :">
                            <el-input v-model="userForm.age"></el-input>
                        </el-form-item>
                        <el-form-item>
                            <el-button type="primary" @click="submitForm">提交</el-button>
                        </el-form-item>
                    </el-form>
                </div>
            </el-col>
        </el-row>
        <el-row v-else class="user-show-info">
            <el-col class="basic-col" :md="12">
                <p class="title">基本信息<span class="user-to" @click="changeIsUserInfo">修改信息</span></p>
                <div class="user-content">
                    <el-form :label-position="right" label-width="100px">
                        <el-form-item label="头像 :">
                            <el-upload class="user-upload" action="https://jsonplaceholder.typicode.com/posts/">
                                <div class="user-portrait" @click="changePortrait">
                                    <img src="../../assets/img/logo.png"/>
                                </div>
                            </el-upload>
                        </el-form-item>
                        <el-form-item label="昵称 :">
                            <span>{{userForm.nickname}}</span>
                        </el-form-item>
                        <el-form-item label="真实姓名 :">
                            <span>{{userForm.name}}</span>
                        </el-form-item>
                        <el-form-item label="年龄 :">
                            <span>{{userForm.age}}</span>
                        </el-form-item>
                    </el-form>
                </div>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    export default {
        name: "UserInfo",
        data() {
            return {
                isUserInfo: false,
                userForm: {
                    nickname: '123456',
                    name: '123456',
                    age: '123456',
                }
            }
        },
        methods: {
            submitForm() {
                alert('提交')
                this.changeIsUserInfo()
            },
            changeIsUserInfo() {
                this.isUserInfo = !this.isUserInfo
            }
        }
    }
</script>

<style scoped lang="scss">
    .user-info {
        background-color: #E8ECF0;
        text-align: left;
        box-sizing: border-box;

        /*col间距*/
        .basic-col {
            background-color: #fff;
            padding: 1rem;
            border: 1rem solid #E8ECF0;

        }

        .user-to {
            font-size: 0.8rem;
            padding-left: 2rem;

            &:hover {
                color: #E24F3A;
                cursor: pointer;
            }
        }

        /*头像*/
        .user-portrait {
            width: 5rem;
            height: 5rem;
            position: relative;
            border-radius: 50%;
            display: block;
            overflow: hidden;
            border: 1px solid #ddd;

            img {
                width: 100%;
            }

            &:before {
                content: "更换头像";
                color: #fff;
                text-align: center;
                line-height: 5rem;
                font-size: 1rem;
                display: block;
                width: 5rem;
                height: 5rem;
                position: absolute;
                background-color: #000;
                opacity: 0;
            }

            &:hover:before {
                opacity: 0.5;
                cursor: pointer;
            }
        }

        /*标题*/
        .title {
            padding: 1rem;
            font-size: 1.2rem;
            margin-bottom: 2rem;
        }
    }

    .user-show-info {

        .el-form-item {
            margin: 0;
        }

        .el-form-item__label {
            padding-right: 2rem;
        }

        .el-form-item__content {
            color: #000;
        }

    }


</style>