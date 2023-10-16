gsap.from("#nav",{
    opacity:0,
    x:-20,
    duration:1,
    delay:0.5,
    
})
gsap.from("#nav h1",{
    opacity:0,
    x:30,
    duration:0.5,
    delay:1,
    stagger:1,

    
})

gsap.from("#nav i",{
    opacity:0,
    x:30,
    duration:0.5,
    delay:3.5,
    stagger:1,

    
})
gsap.from("#img",{
    opacity:0,
    y:20,
    duration:0.5,
    delay:1,
    stagger:1,

    
})
gsap.from("#img h1",{
    opacity:0,
    x:20,
    duration:0.5,
    delay:1,
    stagger:1,

    
},"p")
gsap.from("#img p",{
    opacity:0,
    x:30,
    duration:0.5,
    delay:1,
    stagger:1,

    
},"p")

gsap.from("#line",{
    opacity:0,
    y:30,
    duration:0.5,
    delay:2,
    stagger:1,

    
})
gsap.from("#circle",{
    opacity:0,
    x:30,
    duration:0.5,
    delay:2,
    stagger:1,

    
})

var tl = gsap.timeline({
    scrollTrigger: {
      trigger: "#main",
      scroller: "body",
      // markers: true,
      start: "center top",
    //   pin: true,
      scrub:1,
    }
  });
  tl.from(".model", {
    opacity:0,
    x:10,
    duration: 4,
    stagger:1,
    delay:2,
    
  
    ease: Expo.easeInOut,
  });
  tl.from(".aaaa", {
    opacity:0,
    x:10,
    duration: 2,
    stagger:1,
    delay:4,
    
  
    ease: Expo.easeInOut,
  });


  var tl = gsap.timeline({
    scrollTrigger: {
      trigger: "#abc",
      scroller: "body",
      // markers: true,
      start: "top top",
    //   pin: true,
      scrub:1,
    }
  });
  tl.from("#img2", {
    opacity:0,
    x:-10,
    duration: 10,
    stagger:1,
    delay:2,
    
  
    ease: Expo.easeInOut,
  },'m');

  tl.from("#img3", {
    opacity:0,
    x:10,
    duration: 10,
    stagger:1,
    delay:2,
    
  
    ease: Expo.easeInOut,
  },'m');


  var tl = gsap.timeline({
    scrollTrigger: {
      trigger: "#main2",
      scroller: "body",
      // markers: true,
      start: "center top",
    //   pin: true,
      scrub:1,
    }
  });
  tl.from("#circle2 ", {
    opacity:0,
    x:-50,
    duration: 1,
    stagger:1,
    delay:2,
    
  
    ease: Expo.easeInOut,
  },'a');
  
  tl.from("#imggg ", {
    opacity:0,
    x:50,
    duration: 1,
    stagger:1,
    delay:2,
    
  
    ease: Expo.easeInOut,
  },'a');

  var tl = gsap.timeline({
    scrollTrigger: {
      trigger: "#main3",
      scroller: "body",
      // markers: true,
      start: "center top",
    //   pin: true,
      scrub:1,
    }
  });
  tl.from("#p411 ", {
    opacity:0,
    // x:-50,
    duration: 4,
    stagger:1,
    delay:2,
    
  
    ease: Expo.easeInOut,
  },'a');

  var tl = gsap.timeline({
    scrollTrigger: {
      trigger: "#page4",
      scroller: "body",
      // markers: true,
      start: "center top",
    //   pin: true,
      scrub:1,
    }
  });
  tl.from(".update1 ", {
    opacity:0,
    x:-50,
    duration: 1,
    stagger:1,
    delay:2,
    
  
    ease: Expo.easeInOut,
  },);
  
  tl.from(".update ", {
    opacity:0,
    x:-50,
    duration: 1,
    stagger:1,
    delay:2,
    
  
    ease: Expo.easeInOut,
  },);
  
  tl.from(".update2 ", {
    opacity:0,
    x:-50,
    duration: 1,
    stagger:1,
    delay:2,
    
  
    ease: Expo.easeInOut,
  },);
  
  var tl = gsap.timeline({
    scrollTrigger: {
      trigger: "#page5",
      scroller: "body",
      // markers: true,
      start: "center top",
    //   pin: true,
      scrub:1,
    }
  });
  tl.from("#p61", {
    opacity:0,
    x:-50,
    duration: 1,
    stagger:1,
    delay:2,
    
  
    ease: Expo.easeInOut,
  },);
  tl.from("#p661", {
    opacity:0,
    x:-50,
    duration: 1,
    stagger:1,
    delay:2,
    
  
    ease: Expo.easeInOut,
  },);
  tl.from("#p662", {
    opacity:0,
    x:-50,
    duration: 1,
    stagger:1,
    delay:2,
    
  
    ease: Expo.easeInOut,
  },);


  var tl = gsap.timeline({
    scrollTrigger: {
      trigger: "#page6",
      scroller: "body",
      // markers: true,
      start: "center top",
    //   pin: true,
      scrub:1,
    }
  });
  tl.from("#p711", {
    opacity:0,
    y:-50,
    duration: 1,
    stagger:1,
    delay:2,
    
  
    ease: Expo.easeInOut,
  },);

  
 
