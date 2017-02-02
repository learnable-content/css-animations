![](headings/2.2.png)

Let's look at a real example of how adding the transition property can bring movement to a web page. In this example, we'll take a look at the animated hover effect. We have a box and when you hover over it, the letter changes from A to B.

There's a little bit of absolute positioning trickery going on, but essentially the box has two states, one with the letter A visible and the other letter B. Initially there's no animation when we hover, it simply swaps. This might not be ideal, becase when something changes suddenly people might not notice the change. However, when something animates from one state to another, a gradual transition gives us more time to notice and understand the change. Let's see what happens when we add a transition.

We're going to work on the CSS file *01-transition.css* inside the *stylesheets* folder. At the top, we can see the style to position the `.demo` block in the middle of the screen. Next, we set up some absolute positioning for the `.demo-letter` in the box. And then in the following blocks, we're using a transform to either position the letters in the middle, as in the first one, or outside the box, in the second case.

The use of absolute positioning means we can place the letters at the same spot and swap them with the hover state.

So let’s add a transition to smooth the switch between these two letters. In the `.demo-letter` block add the following line:

```css
.demo-letter {
	transition: transform .4s ease-out;
}
```

Let's see how transitions can help us with form elements. In this example, we'll see how a transition can add some polish to the focus state of a text input field. Open the *02-focus.css* file. Inside we set a background color, border, font size, and padding. We also have a focus state in which we change the background color and border color. When we focus on the form in the browser, the background color and border change. However, there's no animation to it; it's sudden. Let's apply transitions to the `.demo-input` class:

```css
.demo-input {
	transition: all .5s;
}
```

We want the border and the background to animate, so in this case "all" should apply transition to both of them.

Next, we'll see about transitioning between states when we use JavaScript to change classes on an element. In this example, we again have a text input but with several states. Open file *03-javascript.css* and add a transition:

```css
.demo-input {
  transition: all .5s;
}
```

