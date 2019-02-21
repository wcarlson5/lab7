'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
});

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	// your code here
	$('.likeBtn').click(function(){
	 console.log("click")
	});
	$('.likeBtn').click(function(){gtag('event', 'click', {
      event_category: 'like'
});
});
}