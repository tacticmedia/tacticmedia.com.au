var arrowsEnabled = true;

var pages = [
    'index',
    'software-development',
    'photography',
    'aerial-photography',
    'redifi',
    'contact'
];

window.document.addEventListener("keydown", e => {

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