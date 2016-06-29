// JavaScript Document
window.onload = function() {
  /*put all your GSAP and timelines here*/

  /*establish the variables or elements that you want to animate*/
  var widget = document.getElementsByClassName("widget");
  /* outputs array collection*/
  /*console.log(widget);*/

  /*set up the timeline for the animation*/
  var tl = new TimelineMax();

  /*animation instructions for the type and widget buttons*/
  tl.from(widget, 1, {
    scale: 0.25,
    opacity: 0,
    ease: Bounce.easeOut,
    immediateRender: false
  });

  /*rollovers for widget buttons*/
  for (i = 0; i < widget.length; i++) {
    widget[i].addEventListener("mouseover", function() {
      tl.to(this, 0.5, {
        scaleX: 1.15,
        scaleY: 1.15,
        ease: Elastic.easeInOut
      });
    }, false);
    widget[i].addEventListener("mouseout", function() {
      tl.to(this, 0.5, {
        scaleX: 1,
        scaleY: 1
      });
    }, false);
  }
}