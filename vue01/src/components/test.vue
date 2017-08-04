<template>
    <div class="test">
        <!-- 获取数据 -->
        <h1>{{title}}</h1>
        <p>{{user.firstName}}</p>
        <p v-text="user.lastName"></p>
        <!-- v-if 条件语句 -->
        <p v-if="showName">{{user.firstName}}</p>
        <!-- v-else -->
        <p v-else>nonebody</p>

        <!-- v-for -->
        <ul>
            <li v-for="i in items">{{i.title}}</li>
        </ul>
        <!-- v-on -->
        <button v-on:click="greet('hello')">点击</button>
        <input type="text" v-on:keyup="pressKey">
        <hr>
        <!-- computed -->
        <label for="">first name</label>
        <input type="text" v-model="user.firstName">
        <br>
        <label for="">first name</label>
        <input type="text" v-model="user.lastName">
        <br>
         <h3>{{fullname}}</h3> 
        <!-- props -->
        <h2>{{msg}}</h2>
    </div>
</template>

<script>
//暴露出去
    export default {
        name: "test",
        props: {
            msg:{
                type: String,
                default: "默认当前的文字"
            }
        },
        data(){
            return {
                title: "hello Vue.js!",
                user:{
                    firstName: "hemian",
                    lastName: "none"
                },
                showName: false,
                items:[
                    {title: "title1"},
                    {title: "title2"},
                    {title: "title3"}
                ]
            }
        },
        methods: {   //绑定事件
            greet: function(greeting){
                alert("button"+greeting)
            },
            pressKey: function(){
                console.log("key")
            }
        },
        computed: {  //计算 属性
            fullname: function(){
                return this.user.firstName + this.user.lastName
            }
        }
    }
</script>
//scoped 划分一个域
<style>

</style>
