gsap.from('.b2 h2', {
	duration: 1,
	autoAlpha: 0,
	y: 100,
	scale: 0.5,
	scrollTrigger: {
		trigger: '.b2 h2',
		// markers: true,
		// Trigger SCroller
		// default properties
		start: 'top 80%',
		end: 'bottom 20%',
		// scrub: 1,
	},
})
ScrollTrigger.create({
	trigger: '.b2',
	pin: true,
	scrub: true,
	markers: true,
	end: 'bottom 50%',
})
