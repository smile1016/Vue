### Vue.js 

> ​    **渐进式** JavaScript 框架
> ​    数据驱动视图，**响应式**（jq:命令式）

### Vue实例

```
var vm = new Vue({
        el:'#app',
        ……其他选项
    })
```

### 生命周期钩子函数：8个

> ​    beforeCreate(),new Vue后触发  created()，获得data数据
> ​    beforeMount(),mounted(),data数据已经输出到html页面
> ​    beforeUpdate(),不能更改数据 updated(),
> ​    beforeDestroy(),destroyed()

created():可以独取data的数据,最早可以发送ajax请求的阶段
mounted():最早可以操作编译完的DOM对象 
updated:第一次挂载数据不会执行，后续数据更新会执行
distroy:销毁后 ，数据响应式会丢失

### template

​    v-once:只会展示一次data
​    v-html:渲染展示html,但是会有xss攻击，不要使用
​    v-bind：动态取值
​    js表达式只能用单个表达式

### 指令：

​    动态参数:[]
​    v-if:真=>渲染，假=>不渲染
​    v-if和v-show的区别：(show:false)
​        v-if:不会生成DOM
​        v-show:会生成，但是display为none

#### 缩写：

​    v-on:事件  缩写@
​    v-bind 直接去掉就是缩写

### 计算属性和侦听器

​    computed:会缓存，基于现有数据计算衍生出的属性
​    methods:不会缓存

### 条件渲染

​    v-if v-else-if v-else
​    v-if和v-for一起使用的时候，v-for优先级更高

### 列表渲染

### 数组更新

​    不能通过下标更改数据，无法做到响应式
​    push(),pop(),shift(),unshift(),splice(),sort(),reserve()

### 事件处理

​    evt.target：当前点击的DOM对象

####     事件修饰符：

​        `stop`:阻止向上传播
​        `parvent`:
​        `capture`:

### 表单输入绑定

​    `v-model`：数据的双向绑定，取实例化data里的数据

​	可以绑定单选框，多选框，textarea,下拉菜单等表单元素

复选框时要在data里设置成数组 ，checkbox 可以设置true-value和 false-value

#### 			修饰符：

​				`v-model.number`：类型转为数值型

​				`v-model.trim`:去掉输入内容的前后空格
​                `v-model.lazy:`表单输入完执行
​    			v-bind:value+on:change实现v-model.lazy

### 组件：

#### 组件基础

​    组件分为全局组件，局部组件
​    组件必须有一个外包裹,根节点
​    组件名使用xx-xx，
​    组件的data必须 是一个函数方法
​    组件的创建写在new Vue实例化前面

#### 组件注册

##### 全局：

```html
 <gp-16></gp-16>
```

```vue
Vue.component('gp-16',{
      template:`<div><h1>gp16</h1><h1>gp16</h1></div>`,//可以写字符串或者模板字符串
})
```

##### 局部：

```html
<compa></compa>
```

```vue
const compa = {
     template:"<div>hello</div>"
}
```

同时在Vue实例化中添加components属性

```vue
var vm = new Vue({
     el:'#app',
      data:{
      },
     components:{
      compa
      }
})
```

>  注意：局部注册的组件在其子组件中不可用，如果需要在子组件中使用，需要一层一层使用props传递数据

#### Props

props以数组的形式，写在组件内，供template使用。props命名如果有大写，需要写成xx-xx

：props='根的数据'

```html
<compc :fruit='apple'></compc>
```

全局定义组件，props

```vue
Vue.component('compc',{
     props:['fruit'],
      template:'<div>{{fruit}}</div>'
   })
```

根数据

```vue
var vm = new Vue({
      el:'#app',
     data:{
       apple:'apple'
     }
   })
```

##### props的类型

props以对象的形式表示peop的名称和类型，required表示必须。

props可以传`任何类型的值`，数字,字符串，布尔值，数组，对象，函数

##### props验证

```
props:{
	propsa:{
	//类型
	type:String
	//表示该props是必填的string
	required:true
	}
}
```

##### 替换/合并特性

type='text'会替换type='date',但是class和style不会

![1574907307085](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\1574907307085.png)

 禁用特性继承：inheritAttrs: false, 



####     组件传值：

​	1.props 2.emit

​    实例化的数据传递到组件：props（父->子）
​    组件数据传递到根data：$emit()（子->父）

​	1.props （父->子）$eimit（）（子->父）缺点：组件嵌套深的情况下不妥

​	2.边界：this.$root this.$parent（父->子） this.$refs this.$children（子->父）

​	子组件添加ref，父在mounted时使用this.$refs.xxx获取子的数据

缺点：不支持响应式

​	3.事件总线：event bus 全局Vue传递数据

​	4.依赖注入：provide inject   父组件provide,子组件使用inject[] 

​	5.vuex

#### 插槽：

如果没有插槽，组件前后标签之间的内容不会显示

作用：分发内容

组件template合适位置添加<slot><slot>，即可显示组件前后标签之间的内容

##### 具名插槽：

v-slot:name，也可以简写#header

需要在组件前后标签内 加入<template></template>

<template v-slot:header>


​        编辑

​      </template>

#### 动态组件

通过component is绑定，实现组件动态切换

<component v-bind:is="currentTaps"></component>

##### keep alive

可以保持组件的状态，比如 表单的各种输入勾选等

```
<keep-alive>
     <component v-bind:is="currentTaps"></component>
</keep-alive>
```

   `keep alive要求被切换到的组件都有自己的名字`

#### 处理边界情况

##### 访问元素，组件

data,computed,methods都可以访问

###### 访问根实例

​	在组件中使用this.$root.xxx

###### 访问父级组件

​	在组件中使用this.$parent.xxx

###### 访问子组件实例或子元素

​	子组件添加：ref="xxx"

​	父组件访问：this.$refs.xxx

```vue
Vue.component ('comp-a',{
     template:`<div>
          <comp-b ref='compb'></comp-b>
	</div>`,
     data:function(){
       return {
          name:'comp a name'
        }
      },
      mounted(){
        // 父组件取子组件内容,子组件需要添加ref
        console.log( this.$refs['compb'].name);
        this.$refs.compb.name='update name'
      }
    })
```

###### 依赖注入

（传递数据的一种方式）

父代：provide提供，必须是一个function

```
provide:function(){
          return {
            username:this.username,
            message:this.getmessage()
          }
        }
```

子代：inject接收，是一个数组

```
 inject: ['getMap'] 
```



### 样式（class,style）

​	对象，数组

​	对象     :class="{box:isbox}",isbox是data的数据布尔值

​	数组  :class='[boxstyle]',boxstyle是data里定义的样式

组件外的内联样式的优先级大于组件内的样式

### 可复用性&组合

#### 混入（mixin）

<script>
        const mixin1 = {
            data:function(){
                return{
                    age:12
                }
            }
        }
        const mixin2 = {
            methods:{
                getcity(){
                    return 'beijing';
                }
            }
        }var vm = new Vue({
            mixins:[mixin1,mixin2],
            created(){
                console.log('created')
            },
            data:{
                name:'user2',
            },
            methods:{
                getusername(){
                    return this.name
                }
            },
            mounted(){
                console.log(this.age)
                console.log(this.getcity())
            }
        })
        vm.$mount('#app')
    </script>

##### 合并问题

##### 全局混入

![1574922022531](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\1574922022531.png)



#### 自定义指令

##### 	全局自定义指令

```
Vue.directive('focus', {  
		// 当被绑定的元素插入到 DOM 中时……  
		inserted: function (el) {    
		// 聚焦元素    
			el.focus()  
		} 
	}) 
```

使用： <input v-focus> 

##### 	局部自定义指令

```
directives: {  
	focus: {    
		// 指令的定义    
		inserted: function (el) {      
			el.focus()    
		}  
	} 
} 
```

 使用：<input v-focus> 

##### 	钩子函数

​	bind()

​	inserted()

​	update()

#### 组件的生命周期

​	create从外到里

​	mounted从里到外

​	beforeupdate  从外到里

​	update 从里到外

#### 插件

<script>
        //定义缓存插件
        var cache = {
            add:function(key,val){
                if(localStorage){
                    localStorage.setItem(key,val)
                }else{
                    document.cookie = ""
                }}
        }
        // 调用
        var myPlugin = {
            //必须实现install方法
            install(vue){
                vue.prototype.$cache= cache;
            }
        }
        Vue.use(myPlugin)var vm = new Vue({
            el:'#app',
            mounted(){
                // debugger
                //上面的方法，添加一趟localstorage
                this.$cache.add('username','xiaoming')
            }
        })
    </script>

#### 过滤器

##### 定义过滤器

​	vue.filter(‘formatdate',function(){

​	})

##### 调用：

​	直接调用定义的过滤器方法

![1575517211307](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\1575517211307.png)

### Vue-router

引入vue-router.js。node时使用sme-router

#### 基础步骤

`1.DOM`，

router-link是内置组件，是一个链接，to=跳转的新路由

router-view也是内置组件，相当于容器，路由匹配的组件渲染到router-view里

```
<router-link to="/position/78/user/23">职位管理</router-link>
<router-view></router-view>
```

`2.组件的定义`

组件最终注入到router-view里

```
const search = {
      template: `<div>search</div>`
   }
```

`3.配置路径和组件`

>  配置路径和组件,配置顺序：先匹配优先级高先生效，后匹配不生效

```
var routes = [
      {path: '/position/:id/user/:userid',component: position}
    ]
```

`4.创建router实例`

```
var router = new VueRouter({
     //默认hash
      // mode:'history',
      routes
    })
```

`5.将routes挂载到根实例`

```
var vm = new Vue({
      router,
      el: "#app"
   })
```

#### 参数传递

path里用：表示动态的，组件中使用this.$route.params.xx取值

布尔模式：routes里设置props:true

对象方式：

函数方式:

#### 导航守卫

​	beforeRouteUpdate(to,from,next)

#### 嵌套路由

在routes里配置children，把路由放进去

#### 路由原信息

### Vuex

 Vuex 是一个专为 Vue.js 应用程序开发的**状态管理模式** 

- **state**，驱动应用的数据源；
- **view**，以声明方式将 **state** 映射到视图；
- **actions**，响应在 **view** 上的用户输入导致的状态变化。

 ![img](https://vuex.vuejs.org/flow.png) 

 vuex的架构

数据存在State,通过Mutation更改数据

![vuex](https://vuex.vuejs.org/vuex.png) 

#### 核心概念

`state`:存取公共数据数据

`actions`:后端接口做异步数据请求

`getter`:相当于computed

`mutations`:接收同步数据，更新state，调试器会有时间旅行

devtools:调试工具

> Action 类似于 mutation，不同在于：
>
> - Action 提交的是 mutation，而不是直接变更状态。
> - Action 可以包含任意异步操作。

Vuex:不同组件控制 数据使用,=store



`步骤`

1.定义store var store = new Vuex.Store

2.state,mutations,actions写入store

2.mutations的方法在组件中通过store.commit('xxx')调用函数

3.actions里的方法用dispatch调用，stroe.dispatch('xxx')

### Vue-cli

#### 创建项目

`1.图形化创建`

vue  ui

项目管理器 ->创建->起名->包管理器：yarn->预设 babel,roter,vuex,linter->

`2.通过控制台创建`

vue -create vuejs-01

启动 服务 yarn serve

app.vue包括template，script,style

## 重点

1.计算属性/侦听器 

​	计算属性和方法的区别：计算属性可以缓存，方法没有缓存

​	计算属性默认有getter

​	侦听器：watch,属性有变化就会被调用

2.class/style

​	对象，数组

3.事件处理v-on 简写@

​	事件修饰符：.stop，.prevent  .capture  .self

​	修饰符可以串联

4.表单输入绑定

​	v-model

​	修饰符：.lazy/.number/.trim

5.组件

​	`组件传值`

6.组件高级

​	prop：验证

​	动态组件:component is

​	keep alive 性能优化 状态缓存

7.可复用性&组合

​	混入mixin：全局混入会影响每个实例

​	自定义指令：v-xxx

​	渲染函数：

​	插件：

​	过滤器：







## VUE项目：猫眼

需求文档，工期计算

全局组件：city,search

1.搭Vue框架 vue create maoyan

2.postcss-px-to-viewport  :px->vw 

3.审查 项目的webpack配置：vue inspect >output.js

4.axios

5.多页面配置：pages

6.Vue实现插件
7.h5获得定位：geolocation

8.移动端触摸滑动事件：touchMove

9.scrollToElement

10.Vue优化：npm run build

​	Vue-router->路由懒加载：const  hotshowing = ()=>import('../.././xxx')

​	import导入 文件的拆分

​	优化webpack（Dllplugin）

​	keep alive

## VUE项目：后台

1.写页面 yarn add element-ui -s

2.发送请求 yarn add axios -D

3.模拟数据mockjs yarn add mockjs -D

​		关于mockjs，官网描述的是

> 1.前后端分离
>
> 2.不需要修改既有代码，就可以拦截 Ajax 请求，返回模拟的响应数据。
>
> 3.数据类型丰富
>
> 4.通过随机数据，模拟各种场景。



