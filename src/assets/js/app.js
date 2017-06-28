$(document).foundation();

var arrowsEnabled = true;

var pages = [
    'index',
    'photography',
    'aerial-photography',
    'redifi',
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


window.zESettings = {
  webWidget: {
    color: { theme: '#FFFFFF' },
    contactForm: {
      title: {
        '*': 'New support ticket'
      }
    }
  }
};
/*<![CDATA[*/window.zEmbed||function(e,t){var n,o,d,i,s,a=[],r=document.createElement("iframe");window.zEmbed=function(){a.push(arguments)},window.zE=window.zE||window.zEmbed,r.src="javascript:false",r.title="",r.role="presentation",(r.frameElement||r).style.cssText="display: none",d=document.getElementsByTagName("script"),d=d[d.length-1],d.parentNode.insertBefore(r,d),i=r.contentWindow,s=i.document;try{o=s}catch(e){n=document.domain,r.src='javascript:var d=document.open();d.domain="'+n+'";void(0);',o=s}o.open()._l=function(){var e=this.createElement("script");n&&(this.domain=n),e.id="js-iframe-async",e.src="https://assets.zendesk.com/embeddable_framework/main.js",this.t=+new Date,this.zendeskHost="tacticmedia.zendesk.com",this.zEQueue=a,this.body.appendChild(e)},o.write('<body onload="document._l();">'),o.close()}();
/*]]>*/
zE(function() {zE.hide();});
