gsap.registerPlugin(MotionPathPlugin);

function move() {
tr = $(".top-right")
rd = $('.right-down')
gsap.to(tr, {
  duration: 5, 
  repeatDelay: 3,
  yoyo: true,
  ease: "power1.inOut",
  motionPath:{
    path: "M 566 112 C 628 109 833 128 832 248",
    align: "#path1",
    autoRotate: false,
    alignOrigin: [0.5, 0.5]
  }
})

gsap.to(rd, {
  duration: 5, 
  repeatDelay: 3,
  yoyo: true,
  ease: "power1.inOut",
  motionPath:{
    path: "M 832 248 C 851 344 628 392 602 382",
    align: "#path1",
    autoRotate: false,
    alignOrigin: [0.5, 0.5]
  }
}
)

setTimeout(function() {
  $('.container').css("background-color", "#8bf0c3")
}, 5000);




}





