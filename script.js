// Locomotive JS (Library)  Github Code for smooth scrolling
const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    // Changed element name to #main
    smooth: true
});

// Page Loader using gsap library
var tl = gsap.timeline()

tl.to("#page1",{
    y:"100vh",
    scale:0.6,
    duration:0
     // Initially page1 y-axis se 100vh neeche dikhega and size 0.6 hoga
})

tl.to("#page1", {
    y:"30vh",
    duration:1,
    delay:1
    // Ab 1s ke baad page1 30vh height pr aa jayega but size abhi bhi utna hi h
})

tl.to("#page1", {
    y:"0vh",
    rotate:360,
    scale:1,
    duration:0.6 
    // Ab wo apni jagah pr hi 360 rotate krega and then original size me aa jayega
})