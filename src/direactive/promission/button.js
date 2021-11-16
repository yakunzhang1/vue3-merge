import router from '../../router/index'
export default {
  directive: {
    mounted (el, binding) {
      const { value } = binding
      const { name } = router.currentRoute.value
      const rule = JSON.parse(localStorage.getItem('rule'))
      const ruleName = rule.find(item => item.name === name)?.ruleBtn
      if (value !== ruleName) {
        el.parentNode && el.parentNode.removeChild(el)
      }
    }
  }
}
