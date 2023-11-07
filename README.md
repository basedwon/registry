# Registry

[![npm](https://img.shields.io/npm/v/@basd/registry?style=flat&logo=npm)](https://www.npmjs.com/package/@basd/registry)
[![pipeline](https://gitlab.com/frenware/utils/registry/badges/master/pipeline.svg)](https://gitlab.com/frenware/utils/registry/-/pipelines)
[![license](https://img.shields.io/npm/l/@basd/registry)](https://gitlab.com/frenware/utils/registry/-/blob/master/LICENSE)
[![downloads](https://img.shields.io/npm/dw/@basd/registry)](https://www.npmjs.com/package/@basd/registry) 

[![Gitlab](https://img.shields.io/badge/Gitlab%20-%20?logo=gitlab&color=%23383a40)](https://gitlab.com/frenware/utils/registry)
[![Github](https://img.shields.io/badge/Github%20-%20?logo=github&color=%23383a40)](https://github.com/basedwon/registry)
[![Twitter](https://img.shields.io/badge/@basdwon%20-%20?logo=twitter&color=%23383a40)](https://twitter.com/basdwon)
[![Discord](https://img.shields.io/badge/Basedwon%20-%20?logo=discord&color=%23383a40)](https://discordapp.com/users/basedwon)

A simple yet powerful utility to manage and create class instances in JavaScript applications. This registry allows you to define, override, and retrieve classes with ease. It also comes with built-in validation checks to ensure the integrity of the classes you're working with.

## Features

- Define classes once and access them globally.
- Create instances of classes with runtime validation checks.
- Support for deep-nesting of classes.
- Override existing class definitions.

## Installation

Install the package with:

```bash
npm install @basd/registry
```

## Usage

First, import the `Registry` library.

```js
import Registry from '@basd/registry'
```
or
```js
const Registry = require('@basd/registry')
```

Then use the registry to set, validate and instantiate some class:

```js
const Registry = require('@basd/registry')
const MyClass = require('./MyClass')

const registry = new Registry()

// Add MyClass to the registry
registry.set('MyClass', MyClass)

// Create a new instance
const instance = registry.createInstance('MyClass')

// Validate class and instance
if (registry.isValidClass(MyClass) && registry.isValidInstance(instance)) {
  console.log('Valid')
}
```

## Documentation

- [API Reference](/docs/api.md)

## API

### `constructor(config)`

Initialize the `Registry` class with an optional configuration.

```js
const Registry = require('@basd/registry')
const registry = new Registry({
  classes: {
    'MyClass': MyClassDefinition
  }
})
```

### `createInstance(name, args, baseClass)`

Create an instance of a class with a given `name`. Optionally, specify a `baseClass` to validate against.

```js
const instance = registry.createInstance('MyClass', [arg1, arg2], MyBaseClass)
```

### `isValidClass(targetClass, baseClass)`

Validate whether `targetClass` is a valid class optionally against a `baseClass`.

### `isValidInstance(instance, baseClass)`

Check if `instance` is a valid object and optionally belongs to a class derived from `baseClass`.

### `ingest(source)`

Ingest classes from another `source`.

```js
registry.ingest(anotherRegistry)
```

### `setWith(name, targetClass, baseClass, override = false)`

Set a class with additional validation checks. Optionally, specify a `baseClass` and if the class can be overridden.

```js
registry.setWith('MyClass', MyClass, MyBaseClass, true)
```

### `set(name, targetClass, override = true)`

Set a class in the registry. Optionally, allow it to be overridden.

```js
registry.set('MyClass', MyClass)
```

### `setMany(classes, override = false)`

Set multiple classes at once.

```js
registry.setMany({
  'MyClass1': MyClass1,
  'MyClass2': MyClass2
})
```

### `get(name, defaultValue = null)`

Get a class from the registry by its `name`. If not found, return `defaultValue`.

```js
const MyClass = registry.get('MyClass')
```

### `has(name)`

Check if the registry contains a class with the specified `name`.

```js
const exists = registry.has('MyClass')
```

### `static get(config)`

A static method to get an existing registry instance or create a new one.

```js
const registry = Registry.get(existingConfig)
```

## Tests

In order to run the test suite, simply clone the repository and install its dependencies:

```bash
git clone https://gitlab.com/frenware/utils/registry.git
cd registry
npm install
```

To run the tests:

```bash
npm test
```

## Contributing

Thank you! Please see our [contributing guidelines](/docs/contributing.md) for details.

## Donations

If you find this project useful and want to help support further development, please send us some coin. We greatly appreciate any and all contributions. Thank you!

**Bitcoin (BTC):**
```
1JUb1yNFH6wjGekRUW6Dfgyg4J4h6wKKdF
```

**Monero (XMR):**
```
46uV2fMZT3EWkBrGUgszJCcbqFqEvqrB4bZBJwsbx7yA8e2WBakXzJSUK8aqT4GoqERzbg4oKT2SiPeCgjzVH6VpSQ5y7KQ
```

## License

@basd/registry is [MIT licensed](https://gitlab.com/frenware/utils/registry/-/blob/master/LICENSE).
