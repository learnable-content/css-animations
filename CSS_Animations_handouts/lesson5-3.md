![](headings/5.3.png)

Let's see how we can combine multiple animations on a single element. For this example, we're going to be creating two animations. One that introduces the element, fading it into place and setting things up for the second animation. The second then dances it back and forth infinitely. While this is a simple example, it could be useful in real world applications, where you might want to animate an element into place, then continue with a second animation while the page is being viewed.

In our stylesheet, we have some basic styles, colors, and font stuff. Let's get started by planning our keyframe animations:

```css
@keyframes dance {
  0%, 10% {
    -webkit-transform: none;
            transform: none;
  }
  25% {
    -webkit-transform: rotateZ(-20deg);
            transform: rotateZ(-20deg);
  }
  50% {
    -webkit-transform: rotateZ(20deg);
            transform: rotateZ(20deg);
  }
  75% {
    -webkit-transform: rotateZ(-10deg);
            transform: rotateZ(-10deg);
  }
  90%, 100% {
    -webkit-transform: none;
            transform: none;
  }
}
```

Now add animation:

```css
.animated {
  -webkit-animation: dance 1s cubic-bezier(0,.8,.5,1.5) infinite;
          animation: dance 1s cubic-bezier(0,.8,.5,1.5) infinite;
}
```

You will see the first animation introduce the box, and then the second takes over and continues.
