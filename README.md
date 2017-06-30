# qmarkup

```
npm install qmarkup

```

```js
> var q = require(qmarkup)
> q("p").build("This is qmarkup, it helps you write html")
'<p id="" class="">This is qmarkup, it helps you write html</p>'
> q("h1").build("It can use almost any html tags")
'<h1 id="" class="">It can use almost any html tags</h1>'
> q("div").build("It can also use classes", ".class")
'<div id="" class="class">It can also use classes</div>'
> q("span").build("Or IDs", "#id")
'<span id="id" class="">Or IDs</span>'
> q("p").build("Or even both", ["#id-one", ".class-one", "#id-two"])
'<p id="id-one id-two " class="class-one">Or even both</p>'

```

Feel free to leave issues or pull requests