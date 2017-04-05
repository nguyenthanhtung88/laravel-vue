/**
 * Errors class contains form error fields
 */
class Errors {
    /**
     * Constructor initialize empty errors object
     */
    constructor() {
        this.errors = {}
    }

    /**
     * Get error messsage by field name
     * @param  {String} field - form field name
     * @return {String} error description
     */
    get(field) {
        if (this.errors[field]) {
            return this.errors[field][0]
        }
    }

    /**
     * Record and re-assign errors
     * @param  {Object} errors - list errors
     */
    record(errors) {
        this.errors = errors
    }

    /**
     * Clear error by field name OR all errors
     * @param  {String} field - optional
     */
    clear(field) {
        if (field) {
            delete this.errors[field]

            return;
        }

        this.errors = {}
    }

    /**
     * Check if has any error in errors array
     * @return {Boolean}
     */
    any() {
        return Object.keys(this.errors).length > 0
    }

    /**
     * Check if field name has error
     * @param  {String}  field - field name
     * @return {Boolean}
     */
    has(field) {
        return this.errors.hasOwnProperty(field)
    }
}

/**
 * Form class for working with form element
 */
class Form {
    /**
     * Initialize form originalData, errors (empty),
     * field of form that we can access by this[fieldName]
     * @param  {Object} data - Ex: {name: '', description: ''}
     */
    constructor(data) {
        this.originalData = data

        for (let field in data) {
            this[field] = data[field]
        }

        this.errors = new Errors()
    }

    /**
     * Get current value data of form
     * @return {Object} - Ex: {name: '', description: ''}
     */
    data() {
        let data = {}

        for (let property in this.originalData) {
            data[property] = this[property]
        }

        return data
    }

    /**
     * Submit a form via requestType and url
     * @param  {String} requestType - Ex: 'post', 'patch', 'delete', ...
     * @param  {String} url - Endpoint URL
     * @return {Promise}
     */
    submit(requestType, url) {
        return new Promise((resolve, reject) => {
            axios[requestType](url, this.data())
                .then(response => {
                    this.onSuccess(response.data)

                    resolve(response.data)
                })
                .catch(error => {
                    this.onFail(error.response.data)

                    reject(error.response.data)
                })

        })
    }

    /**
     * Helper for submitting form via POST request
     * @param  {String} url - Endpoint URL
     * @return {Promise}
     */
    post(url) {
        return this.submit('post', url)
    }

    /**
     * Handling successfully form submit, reset form data
     * @param  {Object} data - response data
     */
    onSuccess(data) {
        this.reset()
    }

    /**
     * Handling failed form submit, record the errors
     * @param  {Object} errors - error object from Server
     */
    onFail(errors) {
        this.errors.record(errors)
    }

    /**
     * Helper for reseting form data
     */
    reset() {
        for (let field in this.originalData) {
            this[field] = ''
        }

        this.errors.clear()
    }
}

new Vue({
    el: '#root',

    data: {
        form: new Form({
            name: '',
            description: '',
        })
    },

    methods: {
        onSubmit() {
            this.form.post('/projects')
                .then(response => console.log(response))
                .catch(error => console.log(error))
        }
    }
})
