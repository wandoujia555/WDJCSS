# wdjcss

--- 

#### 这是什么?

---

这是一个控制动态css样式的工具

This is a dynamic style CSS tool

---

### 使用先安装:

```npmignore
npm i wdjcss
```



### 示例:

我们通过向createStyle()传入一个`style`dom元素,来对css进行操作

使用js十分方便的生成css选择器

所有的书写都有类型提示,十分方便

```html
...
<body>
    <style id="exex"></style>
    <div class='.logo'></div>
</body>
...

<script>
//首先在获取一个style标签作为我们的操作对象
const myStyle = createStyle(document.getElementById("exex"))
//然后
myStyle.alterWDJStyle(".logo",{
    //书写css语句时是有类型提示的
    backgroundColor:"red"
})
//这样style内就会出现.logo{backgroundColor:"red"}
</script>
```

当你创建过".logo"后,你可以通过`myStyle.WDJStyles[".logo"]`的方法找到他

然后你就可以直接对它进行操作

```html
<script>
    myStyle.WDJStyles[".logo"].style.fontSize='20px'
</script>
```

---

##### 解决什么问题?

我们经常遇到这样一些问题

当我们使用vue或react时写了一个组件并且不确定组件的大小这样的情况:

```jsx
const {height}=props
//这时我们通常这样
const style_: React.CSSProperties = {
   height:height+"px"
};
style={style_}
//或者直接这样
height:height+"px"
<div style={{height:"20px"}}></div>
//又或者在某个地方用了dom元素
myref.current.style.height = height+"px"
```

然而以上都是操作了内联样式

在vue或react中我们(或者只是我)很少与原本的css进行操作

当我们使用了js操作内联样式,就意味着它不会被后面的元素覆盖.在后面有人用到组件时操作非常不方便

也不容易进行管理

也许只有我有问题或者vue和react中有同样的方法我却没有发现

花了一个下午做出来就当是练手

---
