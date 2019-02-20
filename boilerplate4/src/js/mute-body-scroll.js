let nowTop = 0;
const bodyEl = document.body;

export default mute => {
    if (mute) {
        nowTop = window.scrollY;

        bodyEl.style.position = 'fixed';
        bodyEl.style.top = -nowTop + 'px';
    } else {
        bodyEl.style.position = '';
        bodyEl.style.top = '';

        window.scrollTo(0, nowTop);
    }
};