'use strict';

exports.init = function(tawkToId, readyCallback) {
    if (!tawkToId) {
        throw new Error('TawkTo id is missing')
    }
    const tawkToScript = document.getElementById('tawkToScript');
    if (tawkToScript) {
        // Prevent TawkTo to create root script if it already exists
        return window.Tawk_API;
    }
    // See https://www.tawk.to/knowledgebase/getting-started/adding-a-widget-to-your-website/ for widget creation
    const s1 = document.createElement('script');
    s1.id = 'tawkToScript';
    s1.async = true;
    s1.src = 'https://embed.tawk.to/'+tawkToId+'/default';
    s1.setAttribute('crossorigin', '*');
    const s0 = document.getElementsByTagName('script')[0];
    if (!s0 || !s0.parentNode) {
        throw new Error('DOM is missing')
    }
    s0.parentNode.insertBefore(s1, s0);

    document.body.appendChild(s0);
    document.body.appendChild(s1);

    var check = function(callback) {
        if (window && window.Tawk_API && window.Tawk_API.getStatus() !== undefined) {
            callback(window.Tawk_API);
            return
        }
        setTimeout(function() {
            check(callback)
        }, 0)
    };

    check(readyCallback)
};
