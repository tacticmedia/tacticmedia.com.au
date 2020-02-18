import $ from 'jquery';
import 'what-input';

// Foundation JS relies on a global variable. In ES6, all imports are hoisted
// to the top of the file so if we used `import` to import Foundation,
// it would execute earlier than we have assigned the global variable.
// This is why we have to use CommonJS require() here since it doesn't
// have the hoisting behavior.
// window.jQuery = $;
// require('foundation-sites');

// If you want to pick and choose which modules to include, comment out the above and uncomment
// the line below
import './lib/foundation-explicit-pieces';


$(document).foundation();

var arrowsEnabled = true;

var pages = [
    'index',
    'redifi',
    'photography',
    'aerial-photography',
    'software-development',
    'contact'
];

$(document).keydown(function(e) {

    let gotoPage = null;

    if (e.which === 37 || e.which === 39) {


        const url = window.location.pathname;
        const currentPage = url.substring(url.lastIndexOf('/')+1).replace(/\.[^/.]+$/, "") || 'index';
        const currentPageIndex = pages.findIndex(page => page === currentPage);

        switch(e.which) {
            case 37: // left

                if (currentPageIndex === 0) {
                    gotoPage = pages[pages.length-1];
                } else {
                    gotoPage = pages[currentPageIndex - 1];
                }

                break;
            case 39: // right

                if (currentPageIndex === pages.length - 1) {
                    gotoPage = pages[0];
                } else {
                    gotoPage = pages[currentPageIndex + 1];
                }

                break;
        }

        if (pages.find(page => page === gotoPage)) {
            window.location.href = gotoPage + '.html';
        }
    }
});