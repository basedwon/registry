<a name="Registry"></a>

## Registry
Registry class for managing different classes.

**Kind**: global class  

* [Registry](#Registry)
    * [new Registry(config)](#new_Registry_new)
    * _instance_
        * [.createInstance(name, args, baseClass)](#Registry+createInstance) ⇒ <code>Object</code>
        * [.isValidClass(targetClass, baseClass)](#Registry+isValidClass) ⇒ <code>boolean</code>
        * [.isValidInstance(instance, baseClass)](#Registry+isValidInstance) ⇒ <code>boolean</code>
        * [.ingest(source)](#Registry+ingest)
        * [.setWith(name, targetClass, baseClass, override)](#Registry+setWith)
        * [.set(name, targetClass, override)](#Registry+set)
        * [.setMany(classes, override)](#Registry+setMany)
        * [.get(name, defaultValue)](#Registry+get) ⇒ <code>function</code> \| <code>null</code>
        * [.has(name)](#Registry+has) ⇒ <code>boolean</code>
        * [.remove(name)](#Registry+remove)
        * [.removeAll()](#Registry+removeAll)
        * [.destroy()](#Registry+destroy)
    * _static_
        * [.get(config)](#Registry.get) ⇒ [<code>Registry</code>](#Registry)

<a name="new_Registry_new"></a>

### new Registry(config)
Create a new Registry instance.


| Param | Type | Description |
| --- | --- | --- |
| config | <code>Object</code> | Configuration object. |
| config.classes | <code>Object</code> | Initial set of classes. |

<a name="Registry+createInstance"></a>

### registry.createInstance(name, args, baseClass) ⇒ <code>Object</code>
Create an instance of a class.

**Kind**: instance method of [<code>Registry</code>](#Registry)  
**Returns**: <code>Object</code> - An instance of the class.  

| Param | Type | Description |
| --- | --- | --- |
| name | <code>string</code> | The name of the class to instantiate. |
| args | <code>Array</code> | The arguments to pass to the class constructor. |
| baseClass | <code>function</code> | The base class for validation. |

<a name="Registry+isValidClass"></a>

### registry.isValidClass(targetClass, baseClass) ⇒ <code>boolean</code>
Check if a class is valid.

**Kind**: instance method of [<code>Registry</code>](#Registry)  
**Returns**: <code>boolean</code> - Whether the class is valid.  

| Param | Type | Description |
| --- | --- | --- |
| targetClass | <code>function</code> | The class to check. |
| baseClass | <code>function</code> | The base class for validation. |

<a name="Registry+isValidInstance"></a>

### registry.isValidInstance(instance, baseClass) ⇒ <code>boolean</code>
Check if an instance is valid.

**Kind**: instance method of [<code>Registry</code>](#Registry)  
**Returns**: <code>boolean</code> - Whether the instance is valid.  

| Param | Type | Description |
| --- | --- | --- |
| instance | <code>Object</code> | The instance to check. |
| baseClass | <code>function</code> | The base class for validation. |

<a name="Registry+ingest"></a>

### registry.ingest(source)
Ingest classes from a source.

**Kind**: instance method of [<code>Registry</code>](#Registry)  

| Param | Type | Description |
| --- | --- | --- |
| source | <code>Object</code> | The source object. |

<a name="Registry+setWith"></a>

### registry.setWith(name, targetClass, baseClass, override)
Register a class with additional validation.

**Kind**: instance method of [<code>Registry</code>](#Registry)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| name | <code>string</code> |  | The name of the class. |
| targetClass | <code>function</code> |  | The class to register. |
| baseClass | <code>function</code> |  | The base class for validation. |
| override | <code>boolean</code> | <code>false</code> | Whether to override existing class. |

<a name="Registry+set"></a>

### registry.set(name, targetClass, override)
Register a class.

**Kind**: instance method of [<code>Registry</code>](#Registry)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| name | <code>string</code> |  | The name of the class. |
| targetClass | <code>function</code> |  | The class to register. |
| override | <code>boolean</code> | <code>true</code> | Whether to override existing class. |

<a name="Registry+setMany"></a>

### registry.setMany(classes, override)
Register multiple classes.

**Kind**: instance method of [<code>Registry</code>](#Registry)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| classes | <code>Object</code> |  | An object mapping names to classes. |
| override | <code>boolean</code> | <code>false</code> | Whether to override existing classes. |

<a name="Registry+get"></a>

### registry.get(name, defaultValue) ⇒ <code>function</code> \| <code>null</code>
Retrieve a class by name.

**Kind**: instance method of [<code>Registry</code>](#Registry)  
**Returns**: <code>function</code> \| <code>null</code> - The class or null.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| name | <code>string</code> |  | The name of the class. |
| defaultValue | <code>\*</code> | <code></code> | The default value if the class does not exist. |

<a name="Registry+has"></a>

### registry.has(name) ⇒ <code>boolean</code>
Check if a class exists by name.

**Kind**: instance method of [<code>Registry</code>](#Registry)  
**Returns**: <code>boolean</code> - Whether the class exists.  

| Param | Type | Description |
| --- | --- | --- |
| name | <code>string</code> | The name of the class. |

<a name="Registry+remove"></a>

### registry.remove(name)
Removes a specific class from the registry.

**Kind**: instance method of [<code>Registry</code>](#Registry)  

| Param | Type | Description |
| --- | --- | --- |
| name | <code>string</code> | The name of the class to be removed from the registry. |

<a name="Registry+removeAll"></a>

### registry.removeAll()
Removes all classes from the registry.

**Kind**: instance method of [<code>Registry</code>](#Registry)  
<a name="Registry+destroy"></a>

### registry.destroy()
Destroys the registry by deleting all properties of the classes object.
This method ensures that all class references in the registry are 
cleared, potentially allowing them to be garbage collected if there
are no other references to them.

**Kind**: instance method of [<code>Registry</code>](#Registry)  
<a name="Registry.get"></a>

### Registry.get(config) ⇒ [<code>Registry</code>](#Registry)
Static method to get a Registry instance.

**Kind**: static method of [<code>Registry</code>](#Registry)  
**Returns**: [<code>Registry</code>](#Registry) - A Registry instance.  

| Param | Type | Description |
| --- | --- | --- |
| config | <code>Object</code> | Configuration object or existing Registry instance. |

