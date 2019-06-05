# js 复制到剪贴板

1、execCommand

原生 copy，兼容 ios10 +

```js
var input = document.createElement('input');
input.setAttribute('readonly', 'readonly');
input.setAttribute('value', Copytext);
document.body.appendChild(input);
input.select();
input.setSelectionRange(0, 9999);
document.execCommand('Copy’);

if (document.execCommand('Copy')) {
    // 复制成功
}
```

2、 ZeroClipboard 就是常说的 Flash 法，通过加载一个 Flash，让其访问系统剪贴板来绕过绝大多数系统的权限限制，然而体积稍微庞大些

3、[Clipboard.js](https://clipboardjs.com/) 近几年使用较多，体积相对小，兼容性可以接受，使用还比较方便。

```html
// html
<textarea id="bar">Mussum ipsum cacilds...</textarea>

<button class="btn" data-clipboard-action="cut" data-clipboard-target="#bar">
  Cut to clipboard
</button>
```

```js
//  js
var clipboard = new ClipboardJS('.btn')
clipboard.on('success', function(e) {
  console.info('Action:', e.action)
  console.info('Text:', e.text)
  console.info('Trigger:', e.trigger)
  e.clearSelection()
})
clipboard.on('error', function(e) {
  console.error('Action:', e.action)
  console.error('Trigger:', e.trigger)
})
```
