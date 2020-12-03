export default {
    mounted (el, binging){
        const { className, activeClass, curIdx } = binging.value
        const oNavItems = el.getElementsByClassName(className)
        oNavItems[curIdx].className = oNavItems[curIdx].className+' '+ `${activeClass}`
    },
    updated (el, binging) {
        const { className, activeClass, curIdx } = binging.value,
        //上一次点击时的历史记录binging.oldValue
        oOptions = binging.oldValue,
        oNavItems = el.getElementsByClassName(className)
        //新点击的加activeClass  同时将之前的恢复为className
        oNavItems[curIdx].className = oNavItems[curIdx].className+' '+ `${activeClass}`
        oNavItems[oOptions.curIdx].className = className
    }
}