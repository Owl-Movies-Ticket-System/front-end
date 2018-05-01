# front-end

> The front-end of owl-team

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```

## 文件组织
各个页面放在pages文件夹下，入口文件统一命名为index.vue；组件的命名采取驼峰式命名，首字母大写；如果页面下有子页面的话，在各个页面的目录中，添加childrens目录放置子页面。

## 一些代码风格
该项目目录添加了eslint代码风格检查的配置，第一次写时可能会不太习惯，大概记一下以下规则就好，其他就在调试的过程中看命令行改吧2333
1.缩进不适用tab，统一采用空格，且为两个空格为一级缩进
2.一些语法的注意事项：
```
// if和条件之间有一个空格，else不换行，紧接着if的代码块后面写（else if也一样）
if (conditions) {
  
} else {
  
}

//函数名和参数列表的括号之间应有一个空格
function func (arguments) {...}

//字符串统一使用单引号''，不适用双引号""
'string'

//多用let和const，就不要用var了吧
let a = 1;
const b = 1;

// 项目使用的ajax框架是axios，github上就有比较详尽的文档，可以去看看
