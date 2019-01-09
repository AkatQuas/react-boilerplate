
export default function doRem(window, document) {
    let hotcss = {};

    (function () {
        let viewportEl = document.querySelector('meta[name="viewport"]'),
            hotcssEl = document.querySelector('meta[name="hotcss"]'),
            dpr = window.devicePixelRatio || 1,
            maxWidth = 540,
            designWidth = 750;

        dpr = dpr >= 3 ? 3 : (dpr >= 2 ? 2 : 1);

        if (hotcssEl) {
            let hotcssCon = hotcssEl.getAttribute('content');
            if (hotcssCon) {
                let initialDprMatch = hotcssCon.match(/initial-dpr=([\d.]+)/);
                if (initialDprMatch) {
                    dpr = parseFloat(initialDprMatch[1]);
                }
                let maxWidthMatch = hotcssCon.match(/max-width=([\d.]+)/);
                if (maxWidthMatch) {
                    maxWidth = parseFloat(maxWidthMatch[1]);
                }
                let designWidthMatch = hotcssCon.match(/design-width=([\d.]+)/);
                if (designWidthMatch) {
                    designWidth = parseFloat(designWidthMatch[1]);
                }
            }
        }

        document.documentElement.setAttribute('data-dpr', dpr);
        hotcss.dpr = dpr;

        document.documentElement.setAttribute('max-width', maxWidth);
        hotcss.maxWidth = maxWidth;

        if (designWidth) {
            document.documentElement.setAttribute('design-width', designWidth);
        }
        hotcss.designWidth = designWidth;

        let scale = 1 / dpr,
            content = 'width=device-width, initial-scale=' + scale + ', minimum-scale=' + scale + ', maximum-scale=' + scale + ', user-scalable=no';

        if (viewportEl) {
            viewportEl.setAttribute('content', content);
        } else {
            viewportEl = document.createElement('meta');
            viewportEl.setAttribute('name', 'viewport');
            viewportEl.setAttribute('content', content);
            document.head.appendChild(viewportEl);
        }

        // adjust body font size
        function setBodyFontSize() {
            if (document.body) {
                document.body.style.fontSize = (12 * dpr) + 'px';
            }
            else {
                document.addEventListener('DOMContentLoaded', setBodyFontSize);
            }
        }

        setBodyFontSize();

    })();

    hotcss.px2rem = function (px, designWidth) {
        if (!designWidth) {
            designWidth = parseInt(hotcss.designWidth, 10);
        }
        return parseInt(px, 10) * 7.5 / designWidth;
    };

    hotcss.rem2px = function (rem, designWidth) {
        if (!designWidth) {
            designWidth = parseInt(hotcss.designWidth, 10);
        }
        return rem * designWidth / 7.5;
    };

    hotcss.mresize = function () {
        let innerWidth = document.documentElement.getBoundingClientRect().width || window.innerWidth;

        if (hotcss.maxWidth && (innerWidth / hotcss.dpr > hotcss.maxWidth)) {
            innerWidth = hotcss.maxWidth * hotcss.dpr;
        }

        if (!innerWidth) {
            return false;
        }
        document.documentElement.style.fontSize = (innerWidth / 7.5) + 'px';

        hotcss.callback && hotcss.callback();

    };

    hotcss.mresize();

    window.addEventListener('resize', function () {
        clearTimeout(hotcss.tid);
        hotcss.tid = setTimeout(hotcss.mresize, 33);
    }, false);

    window.addEventListener('load', hotcss.mresize, false);

    setTimeout(function () {
        hotcss.mresize();
    }, 333);

    window.hotcss = hotcss;

};