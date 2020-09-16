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

    console.log(e)
    if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
        const url = window.location.pathname;
        const currentPage = url.substring(url.lastIndexOf('/')+1).replace(/\.[^/.]+$/, "") || 'index';
        const currentPageIndex = pages.findIndex(page => page === currentPage);

        switch(e.key) {
            case 'ArrowLeft': // left

                if (currentPageIndex === 0) {
                    gotoPage = pages[pages.length-1];
                } else {
                    gotoPage = pages[currentPageIndex - 1];
                }

                break;
            case 'ArrowRight': // right
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

const copyToClipboard = (str, el) => {
    const textarea = document.createElement('textarea');
    textarea.value = str;
    textarea.setAttribute('readonly', '');
    textarea.style.position = 'absolute';
    textarea.style.left = '-9999px';
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);

    const origHtml = el.innerHTML;
    el.innerHTML = `<p>${str} copied to the clipboard.</p>`;
    setTimeout(() =>{
        el.innerHTML = origHtml;
    }, 1000);
};

global.copyToClipboard = copyToClipboard;