document.addEventListener('DOMContentLoaded', function() {
    // All iframes have loaded, start the fadeIn animation
    var iframes = document.querySelectorAll('iframe');
    
    iframes.forEach(function(iframe) {
        iframe.addEventListener('load', function() {
            // Check if all iframes have loaded
            var allLoaded = Array.from(iframes).every(function(iframe) {
                return iframe.contentDocument.readyState === 'complete';
            });

            if (allLoaded) {
                startFadeInAnimation();
            }
        });
    });
});

function startFadeInAnimation() {
    // Your fadeIn animation code
    var iframes = document.querySelectorAll('iframe');
    
    iframes.forEach(function(iframe) {
        iframe.classList.add('fade-in');
    });
}
  