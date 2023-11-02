const { _, log } = require('@basd/base')

/**
 * Registry class for managing different classes.
 */
class Registry {
  /**
   * Create a new Registry instance.
   * @param {Object} config - Configuration object.
   * @param {Object} config.classes - Initial set of classes.
   */
  constructor(config = {}) {
    this.classes = {}
    if (config.classes)
      this.setMany(config.classes)
  }

  /**
   * Create an instance of a class.
   * @param {string} name - The name of the class to instantiate.
   * @param {Function} baseClass - The base class for validation.
   * @param {...*} args - The arguments to pass to the class constructor.
   * @returns {Object} An instance of the class.
   */
  createInstance(name, args = [], baseClass) {
    const targetClass = this.get(name)
    if (baseClass && !this.isValidClass(targetClass, baseClass))
      throw new Error(`Invalid ${name} class`)
    return new targetClass(...args)
  }

  /**
   * Check if a class is valid.
   * @param {Function} targetClass - The class to check.
   * @param {Function} baseClass - The base class for validation.
   * @returns {boolean} Whether the class is valid.
   */
  isValidClass(targetClass, baseClass) {
    if (!_.isFunction(targetClass)) return false
    if (!_.isFunction(baseClass)) return true
    return targetClass.prototype instanceof baseClass || targetClass === baseClass
  }

  /**
   * Check if an instance is valid.
   * @param {Object} instance - The instance to check.
   * @param {Function} baseClass - The base class for validation.
   * @returns {boolean} Whether the instance is valid.
   */
  isValidInstance(instance, baseClass) {
    if (!_.isObj(instance)) return false
    if (!_.isFunction(baseClass)) return true
    return instance instanceof baseClass
  }

  /**
   * Ingest classes from a source.
   * @param {Object} source - The source object.
   */
  ingest(source) {
    const classes = _.merge({}, source.constructor.classes, source.opts.classes)
    this.setMany(classes)
  }

  /**
   * Register a class with additional validation.
   * @param {string} name - The name of the class.
   * @param {Function} targetClass - The class to register.
   * @param {Function} baseClass - The base class for validation.
   * @param {boolean} override - Whether to override existing class.
   */
  setWith(name, targetClass, baseClass, override = false) {
    if (!this.isValidClass(targetClass, baseClass))
      throw new Error(`Invalid class`)
    this.set(name, targetClass, override)
  }

  /**
   * Register a class.
   * @param {string} name - The name of the class.
   * @param {Function} targetClass - The class to register.
   * @param {boolean} override - Whether to override existing class.
   */
  set(name, targetClass, override = true) {
    if (override || !this.has(name))
      _.setWith(this.classes, name, targetClass, Object)
  }

  /**
   * Register multiple classes.
   * @param {Object} classes - An object mapping names to classes.
   * @param {boolean} override - Whether to override existing classes.
   */
  setMany(classes, override = false) {
    for (const [key, value] of _.entries(classes))
      this.set(key, value, override)
  }

  /**
   * Retrieve a class by name.
   * @param {string} name - The name of the class.
   * @param {*} defaultValue - The default value if the class does not exist.
   * @returns {Function|null} The class or null.
   */
  get(name, defaultValue = null) {
    return _.get(this.classes, name, defaultValue)
  }

  /**
   * Check if a class exists by name.
   * @param {string} name - The name of the class.
   * @returns {boolean} Whether the class exists.
   */
  has(name) {
    return _.has(this.classes, name)
  }

  /**
   * Static method to get a Registry instance.
   * @param {Object} config - Configuration object or existing Registry instance.
   * @returns {Registry} A Registry instance.
   */
  static get(config) {
    if (config instanceof this) return config
    return config?.registry instanceof this ? config.registry : new this(config)
  }
}

module.exports = Registry
