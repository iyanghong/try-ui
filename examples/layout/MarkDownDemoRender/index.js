import RenderBlock from './src/render-block'

RenderBlock.install = (Vue) => {
    Vue.component(RenderBlock.name, RenderBlock);
}

export default RenderBlock;