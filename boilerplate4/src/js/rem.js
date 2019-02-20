export default (dw = 750) => {
    let styleElem = document.createElement('style');
    styleElem.setAttribute('id', 'J_style');
    document.head.appendChild(styleElem);
    let evt = 'onorientationchange' in window ? 'orientationchange' : 'resize';

    function b() {
        let b = document.getElementById('J_style'), c = document.documentElement.clientWidth || document.body.clientWidth,
            d = c / dw;
        let e = 100 * (d > 1 ? 1 : d);
        // let e = 100 * d;
        b.innerHTML = 'html{font-size:' + e + 'px;}';
        let wrap = document.getElementById('J_context'), width;
        if (!wrap) {
            let cont = document.createElement('div');
            cont.setAttribute('id', 'J_context');
            cont.style.width = dw / 100 + 'rem';
            document.body.appendChild(cont);
            width = document.getElementById('J_context').clientWidth;
        } else {
            width = wrap.clientWidth;
        }
        if (width !== c) {
            e = c * 100 / dw;
            e = e > 100 ? 100 : e;
            document.documentElement.style.fontSize = e + 'px';
        }
        window._z = d;
    }

    let timer = null;
    window.addEventListener(evt, function () {
        if (timer != null) clearTimeout(timer);
        timer = setTimeout(b, 300);
    }, false);    // 初始化
    document.addEventListener('DOMContentLoaded', b, false);
}