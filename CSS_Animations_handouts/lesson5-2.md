![](headings/5.2.png)

Let's look at how we can combine multiple transitions on a single element combined with some cubic-bezier timing functions, and create a really nice effect. In this example, we'll be revisiting the input focus method from earlier and making it even better.

On focusing on the input, it grows larger, the border color changes, and the background color grows lighter too. It's accompanied by a nice bouncy visual effect, and it's done without the need for any JavaScript. In fact, as we'll see, it involves just one line of CSS.

Here's the HTML we're working with:

```html
<html>
  <head>
    <meta charset="UTF-8">
    <title>Lesson 05 - Multiple Animations</title>
    <link href="./stylesheets/defaults.css" rel="stylesheet">
    <link href="./stylesheets/02-multiple-animations.css" rel="stylesheet">
  </head>
  <body>
    <section class="centered">
      <div class="demo">
        Surprise! 🎉
      </div>
    </section>
  </body>
</html>
```

Let's use transitions to add some polish:

```css
.demo {
  -webkit-animation: setup 2s ease-out,
             dance 1s 2s cubic-bezier(0,.8,.5,1.5) infinite;
          animation: setup 2s ease-out,
             dance 1s 2s cubic-bezier(0,.8,.5,1.5) infinite;
  background: #3991AE;
  color: #fff;
  font-size: 6rem;
  padding: 2rem 4rem;
  text-align: center;
}
```

Here, we have multiple transitions, complete with different timings and properties as well as a cubic-bezier timing function, all working together to create a nice transition. Next, we're going to take a look at combining multiple animations.

