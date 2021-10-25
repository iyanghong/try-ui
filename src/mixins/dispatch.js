export default {
    methods: {
        dispatch(componentName, eventName, params) {
            let parent = this.$parent;

            let name = parent.$options.name;

            while (parent && (!name || name !== componentName)) {
                parent = parent.$parent;
                if (parent) {
                    name = parent.$options.name;
                }
            }
            if (parent) {
                if (typeof parent[eventName] === 'function') {
                    // eslint-disable-next-line no-useless-call
                    parent[eventName].call(parent, params)
                }
            }
        }
    }
}
