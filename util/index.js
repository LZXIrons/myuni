import * as tool from './function'
const Util = {}

Util.install = function (Vue) {

    Object.entries({ ...tool}).forEach(([name, fn]) => {
        name = '$' + name
        if (!Vue[name] && !Vue.hasOwnProperty(name)) {
            Vue.prototype[name] = fn
        } else {
            tool.error('\'' + name + '\' property or method already exists!')
        }
    })
}

export default Util