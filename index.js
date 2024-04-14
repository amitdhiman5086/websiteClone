function navAnimation() {
    var nav = document.querySelector("nav")

    nav.addEventListener("mouseenter", function () {

        let tl = gsap.timeline()

        tl.to(".nav-bottom", {
            height: "21vh"
        })
        tl.to(".nav-part2 h5", {
            display: "block"
        })
        tl.to(".nav-part2 h5 span", {
            y: "0",
            // duration : 0.3 ,
            stagger: {
                amount: 0.6
            }
        })
    })
    nav.addEventListener("mouseleave", function () {

        let tl = gsap.timeline()
        tl.to(".nav-part2 h5 span", {
            y: "25",
            // duration : 0.3 ,
            stagger: {
                amount: 0.2
            }
        })
        tl.to(".nav-part2 h5", {
            display: "none",
            duration: 0.1
        })
        tl.to(".nav-bottom", {
            height: "0vh",
            duration: 0.1
        })
    })
}

function page2Animation(){
    var relem = document.querySelectorAll(".right-elem");
    
    relem.forEach(function (elem) {
        elem.addEventListener("mouseenter", function () {
            gsap.to(elem.childNodes[3], {
                opacity: 1,
                scale: 1
            })
        })
        elem.addEventListener("mouseleave", function () {
            gsap.to(elem.childNodes[3], {
                opacity: 0,
                scale: 0
            })
            
        })
        elem.addEventListener("mousemove" , function(dets){
            gsap.to(elem.childNodes[3],{
                x:dets.x - elem.getBoundingClientRect().x -70,
                y:dets.y - elem.getBoundingClientRect().y -150, 
                
            })
        })
    })
}

function page3Animation(){
    var page3Centre = document.querySelector("#page3-centre") ;
var video = document.querySelector("#page-3 video") ;
console.log(video) ;

page3Centre.addEventListener("click" , function(){
    video.play() 
    gsap.to(video,{
        transform : "scaleX(1) scaleY(1)" ,
        opacity : 1 ,
        borderRadius : 0
        
    })
})
video.addEventListener("click" ,function(){
    video.pause() 
    gsap.to(video,{
        transform : "scaleX(0.7) scaleY(0)" ,
        opacity : 0 ,
        borderRadius : "30px"
        
    })

})
}

navAnimation() ;
page2Animation() ;
page3Animation() ;