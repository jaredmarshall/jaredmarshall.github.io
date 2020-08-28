// Fade on scroll
$(window).scroll(function(){
    $(".header-inner, .header-title").css("opacity", 1 - $(window).scrollTop() / 600);
});
  
// Scrollto
gsap.utils.toArray("nav a").forEach(function(a) {
    a.addEventListener("click", function(e) {
      e.preventDefault();
      gsap.to(window, {duration: 1, scrollTo: e.target.getAttribute("href")});
    });
});

// Parallax
var image = document.getElementsByClassName('me');
new simpleParallax(image, {
	orientation: 'left'
});

var image = document.getElementsByClassName('isl');
new simpleParallax(image, {
	delay: .6,
	transition: 'cubic-bezier(0,0,0,1)'
});

var image = document.getElementsByClassName('unicredit');
new simpleParallax(image, {
	delay: .6,
	transition: 'cubic-bezier(0,0,0,1)'
});

var image = document.getElementsByClassName('nab');
new simpleParallax(image, {
	delay: .6,
	transition: 'cubic-bezier(0,0,0,1)'
});

var image = document.getElementsByClassName('cricket');
new simpleParallax(image, {
	delay: .6,
	transition: 'cubic-bezier(0,0,0,1)'
});

var image = document.getElementsByClassName('jetstar');
new simpleParallax(image, {
	delay: .6,
	transition: 'cubic-bezier(0,0,0,1)'
});

var image = document.getElementsByClassName('icc');
new simpleParallax(image, {
	delay: .6,
	transition: 'cubic-bezier(0,0,0,1)'
});

// Index Screen Loader // 
$(window).on('load', function () {
	$('.loader').fadeOut();
});

// Pin ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.matchMedia({
	
	"(min-width: 800px)": function() {
		ScrollTrigger.create({
			trigger: "#isl",
			start: "top top", 
			end: "bottom 140px",
			pin: "#isl-title"
		});
		  
		ScrollTrigger.create({
			trigger: "#unicredit",
			start: "top top", 
			end: "bottom 120px",
			pin: "#unicredit-title"
		});
	}

});

// Index Page Animation
var timeline = gsap.timeline();

timeline
  .from('#header-title', { duration: 1, scale: 0.5 })
  .from('#plus', { duration: 1, scale: 0 }, '-=0.3')
  .from ('#nav, #owner', { duration: .5, scale: 0 }, '-=0.3')
;

