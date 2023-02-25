gsap.registerPlugin(MotionPathPlugin);

function move() {

first = $('.first-second')
second = $('.second-third')
third = $('.third-fourth')
fourth = $('.fourth-fifth')
fifth = $('.fifth-sixth')
sixth = $('.sixth-first')

time = 3;


gsap.to(first, {
  duration: time, 
  repeatDelay: 3,
  yoyo: true,
  ease: "power1.inOut",
  motionPath:{
    path: "M 1169 167 C 1573 255 1626 443 1584 499",
    align: "#path1",
    autoRotate: false,
    alignOrigin: [0.5, 0.5]
  }
})
gsap.to(second, {
  duration: time, 
  repeatDelay: 3,
  yoyo: true,
  ease: "power1.inOut",
  motionPath:{
    path: "M 1583 497 C 1665 599 1405 779 1344 756",
    align: "#path1",
    autoRotate: false,
    alignOrigin: [0.5, 0.5]
  }
})

gsap.to(third, {
  duration: time, 
  repeatDelay: 3,
  yoyo: true,
  ease: "power1.inOut",
  motionPath:{
    path: "M 1371 770 C 1221 849 906 891 611 795",
    align: "#path1",
    autoRotate: false,
    alignOrigin: [0.5, 0.5]
  }
})

gsap.to(fourth, {
  duration: time, 
  repeatDelay: 3,
  yoyo: true,
  ease: "power1.inOut",
  motionPath:{
    path: "M 615 795 C 532 766 357 691 333 546",
    align: "#path1",
    autoRotate: false,
    alignOrigin: [0.5, 0.5]
  }
})
gsap.to(fifth, {
  duration: time, 
  repeatDelay: 3,
  yoyo: true,
  ease: "power1.inOut",
  motionPath:{
    path: "M 334 552 C 271 377 509 238 615 212",
    align: "#path1",
    autoRotate: false,
    alignOrigin: [0.5, 0.5]
  }
})



}





