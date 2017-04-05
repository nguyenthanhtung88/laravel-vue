/**
 * Errors class contains form error fields
 */
class Errors {
    /**
     * Constructor initialize empty errors object
     */
    constructor() {
        this.errors = {};
    }

    /**
     * Get error messsage by field name
     * @param  {String} field - form field name
     * @return {String} error description
     */
    get(field) {
        if (this.errors[field]) {
            return this.errors[field][0];
        }
    }

    /**
     * Record and re-assign errors
     * @param  {Object} errors - list errors
     */
    record(errors) {
        this.errors = errors;
    }

    /**
     * Clear error by field name OR all errors
     * @param  {String} field - optional
     */
    clear(field) {
        if (field) {
            delete this.errors[field];

            return;
        }

        this.errors = {};
    }

    /**
     * Check if has any error in errors array
     * @return {Boolean}
     */
    any() {
        return Object.keys(this.errors).length > 0;
    }

    /**
     * Check if field name has error
     * @param  {String}  field - field name
     * @return {Boolean}
     */
    has(field) {
        return this.errors.hasOwnProperty(field);
    }
}

export default Errors;
