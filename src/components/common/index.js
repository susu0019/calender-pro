import ConsCard from '@/components/common/Card'

let MyPlugin = {}
MyPlugin.install = function (Vue) {
    Vue.component('ConsCard', ConsCard)
}
export default MyPlugin