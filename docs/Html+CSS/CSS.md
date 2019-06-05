# 常见样式问题

## 溢出省略

### 单行溢出省略

`text-overflow` 属性仅是注解，当文本溢出时是否显示省略标记。并不具备其它的样式属性定义。我们想要实现溢出时产生省略号的效果。还必须定义：强制文本在一行内显示（`white-space:nowrap`）及溢出内容为隐藏（`overflow:hidden`）。只有这样才能实现溢出文本显示省略号的效果.

```css
p {
  max-width: 200px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
```

### 多行溢出省略

```css
p {
  max-width: 200px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
```

## list 自动添加数字编号

Ol 中：

```css
ol {
  counter-reset: sort;
}
```

Li 中:

```css
li {
  content: counter(sort);
  counter-increment: sort;
  line-height: 60px;
}
```

## ios 手机端样式

苹果机自带按钮样式的去除：

```css
button {
  appearance: none;
  -webkit-appearance: none;
}
```

苹果机 overflow 卡顿解决：

```css
body {
  -webkit-overflow-scrolling: touch;
}
```

取消字体默认最小 12px 的限制：（ios 字体与实际设置的不同步）

```css
p {
  -webkit-text-size-adjust: none;
}
```
