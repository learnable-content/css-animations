![](headings/7.2.png)

So far we've covered the theory of how we create animations, put together multiple animations, and looked at ways to make sure they work in browsers. So let's talk about how we can make sure they don't get in the way.

Designing animations can be a lot of fun, and there's a lot we can do with animation. But it's important to keep in mind that the webpages and applications we're designing are also meant to be helpful. A big part of that is making sure people can use what we build. Just like we might choose a font size and ensure that there's enough contrast to be readable, we should keep in mind the impact our animations can have on accessibility.

Let's focus on a couple of common issues.

The first one is **distraction**. Everyone is distracted sometimes and when using animation, we have the potential to create real difficulties for people if we aren't careful. And we should be mindful that the animation that might look great or gets a great click through rate, might actually be making it more difficult for people to access the content of our pages.

One approach to this is to limit the number of times an animation might play using animation iteration count. Another approach is to turn off animations when people scroll away from them. Sometimes an animated header section for example could be disabled when the user begins to scroll the content into the screen. This could be done using the animation play state, and setting it using JavaScript, or toggling a class that contains the animation property.

A second accessibility issue is **motion sickness**. Again, this is something that might affect some people more than others. I'm quite vulnerable to it myself. Trying to read the text while the motion carries on in the background isn't just distracting, it could even make people feel ill. Full page animations can be great, but they can cause adverse reactions. It's not just the size of the animation, but rather is to do with the way we use our eyes in conjunction with our inner ear to work out how we're balancing. If what we see doesn't match up to what we feel with our sense of balance it confuses things, and we can feel ill.

iOS, the software on Apple's phones, found itself in trouble recently for this when it introduced movement to their UI in the way the screens flew around and zoomed. The mismatch between reality and what seemed to be happening on the screen was enough to cause some adverse reactions. To Apple's credit, they did add in options to minimize movement in their accessibility settings.

But, ideally, we should try to avoid making people ill in the first place. Try to keep in mind how things move in the real world when designing animations. And only use animations in your UI, if it helps the user, rather than get in the way.

