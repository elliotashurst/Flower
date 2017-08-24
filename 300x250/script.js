var banner = document.getElementById("bannerTime");
var bWidth = 300;
var bW = bWidth;
var bHeight = 250;
var bH = bHeight;

function doExitEvent() {
    Enabler.exit("cta");
}

// loading script
function politeLoad(urls, onComplete) {
    var l = urls.length,
        loaded = 0,
        checkProgress = function() {
            if (++loaded === l && onComplete) {
                onComplete();
            }
        },
        i;
    for (i = 0; i < l; i++) {
        Enabler.loadScript(urls[i], checkProgress);
    }
}

// Enabler initialized
function init() {
    console.log("init()");
    
    if (Enabler.isInitialized()) {
        init();
    } else {
        Enabler.addEventListener(studio.events.StudioEvent.INIT, ready);
    }
}

// Page is ready
function ready() {
    if (Enabler.isPageLoaded()) {
        // polite load greensock
politeLoad(['https://s0.2mdn.net/ads/studio/cached_libs/tweenmax_1.19.0_643d6911392a3398cb1607993edabfa7_min.js', 'https://s0.2mdn.net/ads/studio/cached_libs/cssplugin_1.19.0_cfbff7d208ccfdbe176b9855af1eb1fa_min.js'], function() { startBanner(); });
    } else {
        Enabler.addEventListener(studio.events.StudioEvent.PAGE_LOADED, ready);
    }
}



function startBanner() { 
    console.log("startBanner()");

    // timeline
    var tl = new TimelineMax({repeat: 0, repeatDelay: 3});

    // setup
    tl.set(["#flower_animation1", "#flower_animation3","#flower_animation2", "#flower_animation4", "#white_box"], {autoAlpha:1});
    tl.set(["#flower_animation1", "#flower_animation3","#flower_animation2"], {scale:0});
  
    tl.set(["#type_1", "#type_2", "#type_3", "#cta", "#tagline", "#logo", "#tagline"], {autoAlpha:0});
  
    // seperate by sequences to skip and test
    tl.add("start fade in");
        tl.to("#bannerTime", 0.5, {autoAlpha:1});


    tl.add("sequence 1");

    tl.to("#type_1", 0.3, {autoAlpha:1, delay:2.25})
    tl.to("#type_1", 0.3, {autoAlpha:0, delay:1.75 })
	tl.to("#type_2", 0.3, {autoAlpha:1, delay:0.5  })
	tl.to("#type_2", 0.3, {autoAlpha:0, delay:2.0})
	tl.set(["#white_box"], {autoAlpha:1})
    tl.to("#flower", 0.7, {ease: Power2.easesInOut, autoAlpha:0, delay:2.5})
	tl.to("#flower_endframe", 1.0, { autoAlpha:1}, "+=0");
    tl.from("#white_box", 0.5, {ease: Sine.easeOut, y:130}, "-=0.8");
    tl.to("#type_3", 1, {autoAlpha:1}, "+=0");
    tl.to("#type_3", 0.3, {autoAlpha:0, delay:0.75})
    tl.to("#logo,#tagline", 0.5, {autoAlpha:1, delay:0.5})
    tl.to("#cta", 0.5, {autoAlpha:1, delay:0.5})
     


    function flower_animation()	{
	var tl = new TimelineLite();
	
	tl.staggerTo( '#flower_animation3,#flower_animation2,#flower_animation1' , 4 , {ease: Power2.easeInOut, ease:Sine.easeInOut, scale:1.0, x:0, y:-100,delay:0.0 }, 0.5, '+=0.0')
	.to("#flower", 0.3, {autoAlpha:1})
	.to("#flower_animation4, #flower_animation3,#flower_animation2,#flower_animation1", 0.5, {autoAlpha:0})
	.to( "#flower", 2, {ease: Power2.easeInOut, scale:1.9,transformOrigin: "center center", x:0, y:-100,delay:2.0} )
    .to("#flower_animation4, #flower_animation3,#flower_animation2,#flower_animation1", 0.0, {autoAlpha:0,delay:2.0})
	
	
		;
	} 
    // skip to labels if needed
    tl.play();
    flower_animation();

    // end
}