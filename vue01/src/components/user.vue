<template>
  <div class="user">
      <h1>user</h1>
      <!-- 添加 -->
      <form v-on:submit="addUser">
          <input type="text" v-model="newUser.name" 
          placeholder="enter me">
          <input type="text" v-model="newUser.email" 
          placeholder="enter me">
          <input type="submit" value="submit">
      </form>
      <!-- 展示 -->
      <ul>
          <li v-for="user in users">
              <input type="checkbox" class="toggle" v-model="user.contacted">
              <span :class="{contacted: user.contacted}">
                {{user.name}}:{{user.email}}
                <button v-on:click="delectUser(user)">删除</button>
              </span>
          </li>
      </ul>
  </div>
</template>

<script>
    export default {
        name: "user",
        data(){
            return {
                newUser: {},
                users : [
                    {
                        name: "1hemia wu",
                        email: "1name@163.com",
                        contacted: false
                    },
                    {
                        name: "2hemia wu",
                        email: "2name@163.com",
                        contacted: false
                    },
                    {
                        name: "3hemia wu",
                        email: "3name@163.com",
                        contacted: false
                    }
                ]
            }
        },
        methods: {
            addUser: function(e){
                e.preventDefault();
                this.users.push({
                    name : this.newUser.name,
                    email: this.newUser.email,
                    contacted: false
                })
            },
            delectUser: function(user){
                this.users.splice(this.users.indexOf(user),1)
            }
        },
        created: function(){   //自定义方法，页面直接加载调用
            //请求数据https://jsonplaceholder.typicode.com/users
            this.$http.get("https://jsonplaceholder.typicode.com/users")
                .then(function(response){
                    this.users = response.data;
                })
        }
    }
</script>

<style scoped>
    .contacted{
        text-decoration: line-through;
    }
</style>

