gsap.registerPlugin(ScrollTrigger, ScrollSmoother)

if(ScrollTrigger.isTouch !== 1){
    ScrollSmoother.create({
        wrapper: '.wrapper',
        content: '.content',
        smooth: 1.5,
        effects: true,
    });

    gsap.fromTo('.hero-section', {opacity: 1}, {
        opacity: 0, 
        scrollTrigger: {
            trigger: '.hero-section',
            start: 'center',
            end: '820',
            scrub: true
        }
    })
}

// modal 



$(document).ready(function() {
    $('.gallery__item').on('click',  function(){
        elemid = this.id;
        elem = $("."+elemid+" .modal");
        elem.toggle();
        $("body").css({"overflow-y": "hidden"})
    });
    $('.modal').on('click',  function(){
        $('.modal').toggle();
        $("body").css({"overflow-y": "scroll"})
    })
});

