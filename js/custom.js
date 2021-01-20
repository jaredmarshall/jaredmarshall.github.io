$(document).ready(function() {
	$('#fullpage').fullpage({
    //options here
    autoScrolling:true,
	});

	//methods
	$.fn.fullpage.setAllowScrolling(false);
});

new fullpage('#fullpage', {
  licenseKey: 'EBF9B356-793A4571-AB2460F3-1443EC21',
  sectionsColor: ['', '#FBCAD3', '#fff'],
  autoScrolling: true,
  verticalCentered: true,
  anchors: ['page1', 'page2', 'page3']
});

// Flag button
$(document).on('click', '#moveTo', function(){
  fullpage_api.moveTo('page2', 1);
});