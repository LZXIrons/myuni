const debug = process.env.NODE_ENV === 'development';
export function extend (target, ...clones) {
  if (clones.length === 0) return target
  let toString = Object.prototype.toString
  clones.forEach(clone => {
    if (toString.call(clone) === '[object Object]') { /* Object */
      if (!target) {
        target = {}
      }
      for (let i in clone) {
        if (typeof clone[i] === 'object') {
          target[i] = extend(target[i], clone[i])
        } else {
          target[i] = clone[i]
        }
      }
    } else if (toString.call(clone) === '[object Array]') { /* Array */
      if (!target) {
        target = []
      }
      clone.forEach((item, index) => {
        if (typeof item === 'object') {
          target[index] = extend(target[index], item)
        } else {
          target[index] = item
        }
      })
    }
  })
  return target
}

const rand = (min, max) => min + Math.random * (max - min)

const isObject = obj => obj !== null && typeof obj === 'object'

const isPlanObject = obj => isObject(obj) && Object.getPrototypeOf(obj) === Object.prototype

const isFunction = obj => typeof obj === 'function'

const isString = val => typeof val === 'string'

const isArray = Array.isArray ? Array.isArray : obj => Object.prototype.toString.call(obj) === '[object Array]'

const isNumber = val => typeof val === 'number' && !isNaN(val)

const isBoolean = val => val === true || val === false

const inArray = function (arr = [], el) {
  return Array.from(arr).includes(el)
}

const isTrue = bool => bool === true || bool === 'true'

export {
  rand,
  isObject,
  isPlanObject,
  isFunction,
  isString,
  isArray,
  isNumber,
  isBoolean,
  inArray,
  isTrue
}
/* debug function */
const warn = msg => {
  if (typeof console !== 'undefined' && debug) {
    console.warn('[Debugger warn]: ' + msg)
  }
}

const info = msg => {
  if (typeof console !== 'undefined' && debug) {
    console.info('[Debugger info]: ' + msg)
  }
}

const error = msg => {
  if (typeof console !== 'undefined' && debug) {
    console.error('[Debugger error]: ' + msg)
  }
}
const log = msg => {
  if (typeof console !== 'undefined' && debug) {
    console.log('[Debugger log]: ' + msg)
  }
}

export {
  warn,
  info,
  error,
  log
}

/* String */
const includes = (str = '', search, start = 0) => {
  if (String.prototype.includes) {
    str.includes(search, start)
  } else {
    if (start + search.length > str.length) {
      return false
    } else {
      return str.indexOf(search, start) !== -1
    }
  }
}

const trim = val => val ? val.replace(/^\s*|\s*$/g, '') : ''

const trimStart = val => val ? val.replace(/^\s*/g, '') : ''

const trimEnd = val => val ? val.replace(/\s*$/g, '') : ''

/* 电话号码 */
const isPhone = string => (new RegExp(/(^([0-9]{3,4}[-])?\d{3,8}(-\d{1,6})?$)|(^\([0-9]{3,4}\)\d{3,8}(\(\d{1,6}\))?$)|(^\d{3,8}$)/).test(string))

/* 手机号码 */
const isMobile = string => (new RegExp(/^1[3,4,5,7,8]\d{9}$/).test(string))

/* 空字符串判断 */
const isSpaces = string => {
  for (var i = 0; i < string.length; i += 1) {
    var ch = string.charAt(i)
    if (ch !== ' ' && ch !== '\\n' && ch !== '\\t' && ch !== '\\r') {
      return false
    }
  }
  return true
}

const toLower = val => val.toLowerCase()

const toUpper = val => val.toUpperCase()

const debounce = (func, delay) => {
    let timeout = 0
    let hasTask = false
    return (...args) => {
        if (hasTask) {
            window.clearTimeout(timeout)
            timeout = window.setTimeout(() => {
                func(...args)
                hasTask = false
            }, delay)
        } else {
            timeout = window.setTimeout(() => func(...args), delay)
            hasTask = true
        }
    }
}
// await try和catch优化成公共方法
 const awaitWrap = (promise) => {
  return promise
   .then(data => [null, data])
   .catch(err => [err, null])
 }
//富文本添加样式
const richStyle = data => data
	.replace(/<p([\s\w"=\/\.:;]+)((?:(style="[^"]+")))/ig, '<p')
	.replace(/<p([\s\w"=\/\.:;]+)((?:(class="[^"]+")))/ig, '<p')
	.replace(/<p>/ig, '<p class="p_class">')
						
	.replace(/<img([\s\w"-=\/\.:;]+)((?:(height="[^"]+")))/ig, '<img$1')
	.replace(/<img([\s\w"-=\/\.:;]+)((?:(width="[^"]+")))/ig, '<img$1')
	.replace(/<img([\s\w"-=\/\.:;]+)((?:(style="[^"]+")))/ig, '<img$1')
	.replace(/<img([\s\w"-=\/\.:;]+)((?:(alt="[^"]+")))/ig, '<img$1')
	.replace(/<img([\s\w"-=\/\.:;]+)((?:(class="[^"]+")))/ig, '<img$1')
	.replace(/<img([\s\w"-=\/\.:;]+)/ig, '<img$1 class="pho"')
/**
 * 获取localStorage
 */
const getStore = name => {
  if (!name) return;
  return  uni.getStorageSync(name);
  // return window.localStorage.getItem(name);
}
/**
 * 存储localStorage
 */
const setStore = (name, content) => {
  if (!name) return;
  if (typeof content !== 'string') {
    content = JSON.stringify(content);
  }
  uni.setStorageSync(name, content)
  // window.localStorage.setItem(name, content);
}
/**
 * 删除localStorage
 */
const removeStore = name => {
  if (!name) return;
  // window.localStorage.removeItem(name);
  uni.removeStorageSync(name)
}
export {
  trim,
  trimStart,
  trimEnd,
  includes,
  isPhone,
  isMobile,
  isSpaces,
  toLower,
  toUpper,
  debounce,
  awaitWrap,
  richStyle,
  getStore,
  setStore,
  removeStore,
}
