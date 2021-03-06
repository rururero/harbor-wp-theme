;(function (window, document, undefined) {

    'use strict';

    // SVG feature detection
    var supports = !!document.createElementNS && !!document.createElementNS('http://www.w3.org/2000/svg', 'svg').createSVGRect;

    // Check against Opera Mini (throws a false positive)
    var whitelist = navigator.userAgent.indexOf('Opera Mini') === -1;

    // If SVG is supported, add `.svg` class to <html> element
    if ( supports && whitelist ) {
        document.documentElement.className += (document.documentElement.className ? ' ' : '') + 'svg';
    }

})(window, document);