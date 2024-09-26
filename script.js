gsap.to("#page1 h1", {
    transform: "translateX(-100%)",
    duration: 1,
    scrollTrigger: {
        trigger: "#page1 h1",
        scroll: "body",
        markers: true,
        scrub : 2 , 
        start : " top 0%",
        end : "top -100%", 
        pin : true , 
    }
});
