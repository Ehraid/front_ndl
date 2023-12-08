$(document).ready(function(){

    TweenLite.set(".card-wrapper");
    TweenLite.set(".card", {transformStyle: "preserve-3d", transformOrigin: "left 50%", transformPerspective: 1800});
    TweenLite.set(".back", {rotationY: 180});
    TweenLite.set([".back", ".front"], {backfaceVisibility: "hidden"});
     TweenLite.set(".card__contents", { scale: 0, autoAlpha: 0});
      
      
      $('.card-wrapper').bind({
        click: function() {
          TweenLite.to($(this).find(".card"), 0.8, {rotationY:-120, ease:Back.easeOut});
         TweenLite.to(".card__contents", 1.2, {scale: 1, autoAlpha: 1, delay: 0.5, ease:Elastic.easeOut});
        }
    });  
      
      $('.close').bind({
        click: function() {
         TweenLite.to(".card__contents", 0.4, {scale: 0, autoAlpha: 0, ease:Power1.easeOut});
          TweenLite.to(".card", 0.6, {rotationY: 0, delay: 0.5, ease: Power1.easeOut});
        }
    }); 
        
        TweenLite.set(".text-box", {autoAlpha: 0, y: '20px'});
        
    /*$('.arrow--right').bind({
        click: function() {
         TweenLite.to(".text-box", 0.8, {autoAlpha: 1, y: '0px', ease:Power1.easeOut});
                TweenLite.to(".text-box", 0.8, {autoAlpha: 0, y: '40px', delay: 2, ease:Power1.easeIn});
        }
    });*/
        
        //Flying Robin animation
    TweenLite.set("#robin", {x: 1100, y: 30, autoAlpha: 0}, 2);
    
    var robin = document.getElementById("robin")
    var wing = document.getElementById("wing")
    var tl = new TimelineMax({repeatDelay: 1.5});
    
    TweenLite.set(wing, {transformOrigin:"left top"});
    
    tl.to(robin, 3, {
        bezier: {
        type: "soft",
        values:[{x:1100, y:30}, {x:700, y:100}, {x:500, y:0}, {x:300, y:100}, {x:100, y:220}],
            autoRotate:false,
            ease: Power1.easeInOut,
      }
    }, 2)
        .to(robin, 0.6, {rotation:30, ease:Power1.easeInOut}, "-=3")
        .to(robin, 0.2, {autoAlpha:1}, "-=3")
        .to(wing, 0.6, {rotation: 30}, "-=3")
      .to(robin, 1, {rotation:-30, ease:Power1.easeInOut}, "-=2.4")
        .to(wing, 0.6, {rotation: -40}, "-=2.4")
      .to(robin, 1, {rotation:0, ease:Power1.easeInOut}, "-=1")
        .to(wing, 0.6, {rotation: -10}, "-=1")
      .to(robin, 3, {
        bezier: {
        type: "soft",
        values:[{x:100, y:220}, {x:-100, y:100}],
            autoRotate:false,
            ease: Power1.easeIn,
      }
    }, "+=2")
        .to(wing, 0.8, {rotation: -30, ease:Power1.easeInOut}, "-=3")
        .to(wing, 0.8, {rotation: 10, ease:Power1.easeInOut}, "-=2.2")
    });
    
    