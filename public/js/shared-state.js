let source = {
    user: {
        name: 'John Doe'
    }
}

new Vue({
    el: '#one',

    data: {
        foo: 'bar',
        shared: source
    }
})

new Vue({
    el: '#two',

    data: {
        foo: 'baz',
        shared: source
    }
})
