# CSS书写规范

by [@huanglong](https://github.com/huanglong6828)

>利用约定好的命名来隔离 CSS 的作用域

## 命名规范

- class命名以当前***.tsx文件name为命名开头。
- 使用连字符（-）来分隔。例如：home-header。确保不用大写字母开头，不要驼峰命名。
- 不允许使用拼音（约定俗成的除外，如：youku, baidu），尤其是缩写的拼音、拼音与英文的混合。
- 保证缩写后还能较为清晰保持原单词所能表述的意思；

```tsx
  // home.tsx
  export default AcquisitionHome;
```

```css
 /* index.less */
  .AcquisitionHome{

    &-header{
      /* navigation   =>  nav  */
      &-nav{

      }
    }

    &-main{

    }
  }
```

## 选择器

- 尽量少用通用选择器 *
- 不使用 ID 选择器
- 不使用无具体语义定义的标签选择器

```css
/* 推荐 */
.home {}
.home li {}
.home li p{}

/* 不推荐 */
*{}
#home {}
.home div{}
```

## 代码缩进

- 统一使用四个空格进行代码缩进，使得各编辑器表现一致（各编辑器有相关配置）
- vscode 配置点击右下角 空格：** 修改为2

```css
.home {
    width: 100%;
    height: 100%;
}
```

## 属性书写顺序

建议遵循以下顺序：

1. 布局定位属性：display / position / float / clear / visibility / overflow
2. 自身属性：width / height / margin / padding / border / background
3. 文本属性：color / font / text-decoration / text-align / vertical-align / white- space / break-word
4. 其他属性（CSS3）：content / cursor / border-radius / box-shadow / text-shadow / background:linear-gradient …

```css
.home {
    display: block;
    position: relative;
    float: left;
    width: 100px;
    height: 100px;
    margin: 0 10px;
    padding: 20px 0;
    font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif;
    color: #333;
    background: rgba(0,0,0,.5);
    -webkit-border-radius: 10px;
    -moz-border-radius: 10px;
    -o-border-radius: 10px;
    -ms-border-radius: 10px;
    border-radius: 10px;
}
```
