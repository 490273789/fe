const obj = {
    name: 'wsn'
}

@mixin(obj)
class School {

}

function mixin (origin) {
    return function(target) {
        Object.assign(target.prototype, origin)
    }
}