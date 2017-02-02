![](headings/6.1.png)

A common scenario is one where you might want to trigger an animation when a visitor scrolls to a certain point on your page. This might be useful when animated content into place or initializing a storytelling animation.

In our HTML, we have a demo container containing a mixture of spacers and buttons. What we'll do is use JavaScript to apply a class to each button when it is close to the middle of the screen. With the class in place, we could then use CSS to apply some sort of transition or animation to it.

```css
.demo {
  margin: 0 auto;
  max-width: 80rem;
}

.circle {
  -webkit-animation: spin 2s linear infinite;
          animation: spin 2s linear infinite;
  background: rgba(255,255,255,0.1);
  border-radius: 50%;
  height: 200vw;
  left: -50%;
  position: absolute;
  top: 50%;
  -webkit-transform: translateX(-50%);
          transform: translateX(-50%);
  width: 200%;
}

.one {
  -webkit-animation-delay: .15s;
          animation-delay: .15s;
  -webkit-transform-origin: 48% 47%;
          transform-origin: 48% 47%;
  width: 190%;
}

.two {
  -webkit-animation-delay: .32s;
          animation-delay: .32s;
  -webkit-transform-origin: 48.5% 47.5%;
          transform-origin: 48.5% 47.5%;
  width: 195%;
}

.three {
  -webkit-animation-delay: .4s;
          animation-delay: .4s;
  -webkit-transform-origin: 49% 48%;
          transform-origin: 49% 48%;
  width: 200%;
}

.four {
  -webkit-animation-delay: .48s;
          animation-delay: .48s;
  -webkit-transform-origin: 49.5% 48.5%;
          transform-origin: 49.5% 48.5%;
  width: 205%;
}

.five {
  -webkit-animation-delay: .65s;
          animation-delay: .65s;
  -webkit-transform-origin: 50% 49%;
          transform-origin: 50% 49%;
  width: 210%;
}

.six {
  -webkit-animation-delay: .71s;
          animation-delay: .71s;
  -webkit-transform-origin: 50.5% 49.5%;
          transform-origin: 50.5% 49.5%;
  width: 215%;
}

@-webkit-keyframes spin {
  0% {
    -webkit-transform: none;
            transform: none;
  }
  50% {
    -webkit-transform: rotateZ(180deg);
            transform: rotateZ(180deg);
  }
  100% {
    -webkit-transform: rotateZ(360deg);
            transform: rotateZ(360deg);
  }
}

@keyframes spin {
  0% {
    -webkit-transform: none;
            transform: none;
  }
  50% {
    -webkit-transform: rotateZ(180deg);
            transform: rotateZ(180deg);
  }
  100% {
    -webkit-transform: rotateZ(360deg);
            transform: rotateZ(360deg);
  }
}
```

