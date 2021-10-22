let scrollWidth = 0;
// 获取滚动条宽度
export const getScrollWidth = () => {
    if (scrollWidth > 0) {
        return scrollWidth;
    }
    let body = document.querySelector('body');
    const block = document.createElement('div');
    block.style.cssText = 'position:absolute;top:-1000px;width:100px;height:100px;overflow-y:scroll;';
    body.appendChild(block);
    const {
        clientWidth,
        offsetWidth
    } = block;
    body.removeChild(block);
    scrollWidth = offsetWidth - clientWidth;

    return scrollWidth;
};
