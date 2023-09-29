const Registry = require('../lib/registry')
class Dummy {}
class Another {}

describe('Registry', () => {
  let registry

  before(() => {
    registry = new Registry()
  })

  describe('constructor', () => {
    it('should initialize empty classes if none are provided', () => {
      expect(registry.classes).to.deep.equal({})
    })
  })

  describe('createInstance', () => {
    it('should create an instance of a class', () => {
      registry.set('Dummy', Dummy)
      const instance = registry.createInstance('Dummy', Dummy)
      expect(instance).to.be.instanceof(Dummy)
      expect(instance instanceof Dummy).to.be.true
    })

    it('should throw an error for invalid class', () => {
      expect(() => registry.createInstance('Invalid', Dummy)).to.throw(Error)
    })
  })

  describe('isValidClass', () => {
    it('should validate a class', () => {
      class Base {}
      class Derived extends Base {}
      expect(registry.isValidClass(Derived, Base)).to.be.true
    })

    it('should invalidate a non-class', () => {
      expect(registry.isValidClass({}, Dummy)).to.be.false
    })
  })

  describe('isValidInstance', () => {
    it('should validate an instance', () => {
      const instance = new Dummy()
      expect(registry.isValidInstance(instance, Dummy)).to.be.true
    })

    it('should invalidate a non-object', () => {
      expect(registry.isValidInstance(null, Dummy)).to.be.false
    })
  })

  describe('ingest', () => {
    it('should ingest classes from a source', () => {
      class Source {
        static get classes() {
          return { Dummy }
        }
        constructor(opts = {}) {
          this.opts = opts
        }
      }
      const source = new Source({ classes: { Another }})
      registry.ingest(source)
      expect(registry.get('Dummy')).to.equal(Dummy)
      expect(registry.get('Another')).to.equal(Another)
    })
  })

  describe('setWith', () => {
    it('should set a class with baseClass validation', () => {
      registry.setWith('Dummy', Dummy, Dummy)
      expect(registry.get('Dummy')).to.equal(Dummy)
    })

    it('should throw for invalid class', () => {
      expect(() => registry.setWith('Invalid', {}, Dummy)).to.throw(Error)
      expect(() => registry.setWith('AnotherInvalid', Another, Dummy)).to.throw(Error)
    })
  })

  describe('set and setMany', () => {
    it('should set a single class', () => {
      registry.set('Dummy', Dummy)
      expect(registry.get('Dummy')).to.equal(Dummy)
    })

    it('should set multiple classes', () => {
      registry.setMany({ Dummy, Another })
      expect(registry.get('Dummy')).to.equal(Dummy)
      expect(registry.get('Another')).to.equal(Another)
    })
  })

  describe('has', () => {
    it('should check for a class', () => {
      registry.set('Dummy', Dummy)
      expect(registry.has('Dummy')).to.be.true
    })
  })
})
