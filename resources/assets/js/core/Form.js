import Errors from './Errors'

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

export default Form;
