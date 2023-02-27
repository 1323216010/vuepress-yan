#### hook

##### Object.defineProperty

元编程?

```js
const obj = {
};

Object.defineProperty(obj, 'role', {
	value: '素问',
	writable: true
});

console.log(obj)
console.log(obj.role)
obj.role = '九灵'
console.log(obj.role)
```



```js
const obj = {
};

Object.defineProperty(obj, 'role', {
	value: '素问',
	writable: false
});

console.log(obj)
console.log(obj.role)
obj.role = '九灵'
```



```js
var o = {
	name: "wang",
	_role: "素问"
};
console.log(o)

Object.defineProperty(o, "role", {
  get: function () { 
	return this._role; 
  },
  set: function (newValue) {
	this._role = "王" + newValue
  }
});

console.log(o)
console.log(o.role)

o.role = "九灵"
console.log(o.role)
```



##### 对象可以使用数组的索引机制

```js
var role  = {
	"yan": "沧海",
	"wang": "云梦"
 }

 console.log(role["yan"])
 console.log(role["云梦"])
```



```js
var role  = {
	yan: "沧海",
	wang: "云梦"
 }

 console.log(role["yan"])
 console.log(role["云梦"])
```



```js
var role  = {
	yan: "沧海",
	wang: "云梦"
 }

 console.log(role[yan])
 console.log(role[云梦])
```



##### Proxy

```js
const obj = {
	name: "wang",
	role: "素问"
};

const objProxy = new Proxy(obj, {
	set: function (map, key, value) {
	},
	get: function (map, key, pro) {
		console.log(map);
		console.log(key);
		console.log(pro);
		return map[key];
	},
});

console.log(objProxy.name);
```



```js
const obj = {
	name: "wang",
	role: "素问"
};

const objProxy = new Proxy(obj, {
	set: function (map, key, value) {
	},
	get: function (map, key, pro) {
		console.log(map);
		console.log(key);
		console.log(pro);
		return map[key] + ": ^_^";
	},
});

console.log(objProxy.name);
```



```js
const obj = {
	name: "wang",
	role: "素问"
};

const objProxy = new Proxy(obj, {
	set: function (map, key, value) {
		console.log(map);
		console.log(key);
		console.log(value);
		// map[key] = value
		return value
	},
	get: function (map, key, pro) {
		console.log(map);
		console.log(key);
		console.log(pro);
		return map[key];
	},
});

console.log(objProxy)
console.log(objProxy.role = "九灵")
console.log(objProxy.role)
```



```js
const obj = {
	name: "wang",
	role: "素问"
};

const objProxy = new Proxy(obj, {
	set: function (map, key, value) {
		console.log(map);
		console.log(key);
		console.log(value);
		map[key] = value
		return value
	},
	get: function (map, key, pro) {
		console.log(map);
		console.log(key);
		console.log(pro);
		return map[key];
	},
});

console.log(objProxy.role = "九灵")
console.log(objProxy.role)
```

