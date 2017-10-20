/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 86);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__gl_matrix_common__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__gl_matrix_mat2__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__gl_matrix_mat2d__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__gl_matrix_mat3__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__gl_matrix_mat4__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__gl_matrix_quat__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__gl_matrix_vec2__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__gl_matrix_vec3__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__gl_matrix_vec4__ = __webpack_require__(48);
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "glMatrix", function() { return __WEBPACK_IMPORTED_MODULE_0__gl_matrix_common__; });
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "mat2", function() { return __WEBPACK_IMPORTED_MODULE_1__gl_matrix_mat2__; });
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "mat2d", function() { return __WEBPACK_IMPORTED_MODULE_2__gl_matrix_mat2d__; });
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "mat3", function() { return __WEBPACK_IMPORTED_MODULE_3__gl_matrix_mat3__; });
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "mat4", function() { return __WEBPACK_IMPORTED_MODULE_4__gl_matrix_mat4__; });
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "quat", function() { return __WEBPACK_IMPORTED_MODULE_5__gl_matrix_quat__; });
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "vec2", function() { return __WEBPACK_IMPORTED_MODULE_6__gl_matrix_vec2__; });
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "vec3", function() { return __WEBPACK_IMPORTED_MODULE_7__gl_matrix_vec3__; });
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "vec4", function() { return __WEBPACK_IMPORTED_MODULE_8__gl_matrix_vec4__; });
/**
 * @fileoverview gl-matrix - High performance matrix and vector operations
 * @author Brandon Jones
 * @author Colin MacKenzie IV
 * @version 2.4.0
 */

/* Copyright (c) 2015, Brandon Jones, Colin MacKenzie IV.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE. */
// END HEADER













/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return h; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createElement", function() { return h; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cloneElement", function() { return cloneElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Component", function() { return Component; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rerender", function() { return rerender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "options", function() { return options; });
/** Virtual DOM Node */
function VNode() {}

/** Global options
 *	@public
 *	@namespace options {Object}
 */
var options = {

	/** If `true`, `prop` changes trigger synchronous component updates.
  *	@name syncComponentUpdates
  *	@type Boolean
  *	@default true
  */
	//syncComponentUpdates: true,

	/** Processes all created VNodes.
  *	@param {VNode} vnode	A newly-created VNode to normalize/process
  */
	//vnode(vnode) { }

	/** Hook invoked after a component is mounted. */
	// afterMount(component) { }

	/** Hook invoked after the DOM is updated with a component's latest render. */
	// afterUpdate(component) { }

	/** Hook invoked immediately before a component is unmounted. */
	// beforeUnmount(component) { }
};

var stack = [];

var EMPTY_CHILDREN = [];

/** JSX/hyperscript reviver
*	Benchmarks: https://esbench.com/bench/57ee8f8e330ab09900a1a1a0
 *	@see http://jasonformat.com/wtf-is-jsx
 *	@public
 */
function h(nodeName, attributes) {
	var children = EMPTY_CHILDREN,
	    lastSimple,
	    child,
	    simple,
	    i;
	for (i = arguments.length; i-- > 2;) {
		stack.push(arguments[i]);
	}
	if (attributes && attributes.children != null) {
		if (!stack.length) stack.push(attributes.children);
		delete attributes.children;
	}
	while (stack.length) {
		if ((child = stack.pop()) && child.pop !== undefined) {
			for (i = child.length; i--;) {
				stack.push(child[i]);
			}
		} else {
			if (typeof child === 'boolean') child = null;

			if (simple = typeof nodeName !== 'function') {
				if (child == null) child = '';else if (typeof child === 'number') child = String(child);else if (typeof child !== 'string') simple = false;
			}

			if (simple && lastSimple) {
				children[children.length - 1] += child;
			} else if (children === EMPTY_CHILDREN) {
				children = [child];
			} else {
				children.push(child);
			}

			lastSimple = simple;
		}
	}

	var p = new VNode();
	p.nodeName = nodeName;
	p.children = children;
	p.attributes = attributes == null ? undefined : attributes;
	p.key = attributes == null ? undefined : attributes.key;

	// if a "vnode hook" is defined, pass every created VNode to it
	if (options.vnode !== undefined) options.vnode(p);

	return p;
}

/** Copy own-properties from `props` onto `obj`.
 *	@returns obj
 *	@private
 */
function extend(obj, props) {
  for (var i in props) {
    obj[i] = props[i];
  }return obj;
}

/** Call a function asynchronously, as soon as possible.
 *	@param {Function} callback
 */
var defer = typeof Promise == 'function' ? Promise.resolve().then.bind(Promise.resolve()) : setTimeout;

function cloneElement(vnode, props) {
	return h(vnode.nodeName, extend(extend({}, vnode.attributes), props), arguments.length > 2 ? [].slice.call(arguments, 2) : vnode.children);
}

// DOM properties that should NOT have "px" added when numeric
var IS_NON_DIMENSIONAL = /acit|ex(?:s|g|n|p|$)|rph|ows|mnc|ntw|ine[ch]|zoo|^ord/i;

/** Managed queue of dirty components to be re-rendered */

var items = [];

function enqueueRender(component) {
	if (!component._dirty && (component._dirty = true) && items.push(component) == 1) {
		(options.debounceRendering || defer)(rerender);
	}
}

function rerender() {
	var p,
	    list = items;
	items = [];
	while (p = list.pop()) {
		if (p._dirty) renderComponent(p);
	}
}

/** Check if two nodes are equivalent.
 *	@param {Element} node
 *	@param {VNode} vnode
 *	@private
 */
function isSameNodeType(node, vnode, hydrating) {
	if (typeof vnode === 'string' || typeof vnode === 'number') {
		return node.splitText !== undefined;
	}
	if (typeof vnode.nodeName === 'string') {
		return !node._componentConstructor && isNamedNode(node, vnode.nodeName);
	}
	return hydrating || node._componentConstructor === vnode.nodeName;
}

/** Check if an Element has a given normalized name.
*	@param {Element} node
*	@param {String} nodeName
 */
function isNamedNode(node, nodeName) {
	return node.normalizedNodeName === nodeName || node.nodeName.toLowerCase() === nodeName.toLowerCase();
}

/**
 * Reconstruct Component-style `props` from a VNode.
 * Ensures default/fallback values from `defaultProps`:
 * Own-properties of `defaultProps` not present in `vnode.attributes` are added.
 * @param {VNode} vnode
 * @returns {Object} props
 */
function getNodeProps(vnode) {
	var props = extend({}, vnode.attributes);
	props.children = vnode.children;

	var defaultProps = vnode.nodeName.defaultProps;
	if (defaultProps !== undefined) {
		for (var i in defaultProps) {
			if (props[i] === undefined) {
				props[i] = defaultProps[i];
			}
		}
	}

	return props;
}

/** Create an element with the given nodeName.
 *	@param {String} nodeName
 *	@param {Boolean} [isSvg=false]	If `true`, creates an element within the SVG namespace.
 *	@returns {Element} node
 */
function createNode(nodeName, isSvg) {
	var node = isSvg ? document.createElementNS('http://www.w3.org/2000/svg', nodeName) : document.createElement(nodeName);
	node.normalizedNodeName = nodeName;
	return node;
}

/** Remove a child node from its parent if attached.
 *	@param {Element} node		The node to remove
 */
function removeNode(node) {
	var parentNode = node.parentNode;
	if (parentNode) parentNode.removeChild(node);
}

/** Set a named attribute on the given Node, with special behavior for some names and event handlers.
 *	If `value` is `null`, the attribute/handler will be removed.
 *	@param {Element} node	An element to mutate
 *	@param {string} name	The name/key to set, such as an event or attribute name
 *	@param {any} old	The last value that was set for this name/node pair
 *	@param {any} value	An attribute value, such as a function to be used as an event handler
 *	@param {Boolean} isSvg	Are we currently diffing inside an svg?
 *	@private
 */
function setAccessor(node, name, old, value, isSvg) {
	if (name === 'className') name = 'class';

	if (name === 'key') {
		// ignore
	} else if (name === 'ref') {
		if (old) old(null);
		if (value) value(node);
	} else if (name === 'class' && !isSvg) {
		node.className = value || '';
	} else if (name === 'style') {
		if (!value || typeof value === 'string' || typeof old === 'string') {
			node.style.cssText = value || '';
		}
		if (value && typeof value === 'object') {
			if (typeof old !== 'string') {
				for (var i in old) {
					if (!(i in value)) node.style[i] = '';
				}
			}
			for (var i in value) {
				node.style[i] = typeof value[i] === 'number' && IS_NON_DIMENSIONAL.test(i) === false ? value[i] + 'px' : value[i];
			}
		}
	} else if (name === 'dangerouslySetInnerHTML') {
		if (value) node.innerHTML = value.__html || '';
	} else if (name[0] == 'o' && name[1] == 'n') {
		var useCapture = name !== (name = name.replace(/Capture$/, ''));
		name = name.toLowerCase().substring(2);
		if (value) {
			if (!old) node.addEventListener(name, eventProxy, useCapture);
		} else {
			node.removeEventListener(name, eventProxy, useCapture);
		}
		(node._listeners || (node._listeners = {}))[name] = value;
	} else if (name !== 'list' && name !== 'type' && !isSvg && name in node) {
		setProperty(node, name, value == null ? '' : value);
		if (value == null || value === false) node.removeAttribute(name);
	} else {
		var ns = isSvg && name !== (name = name.replace(/^xlink\:?/, ''));
		if (value == null || value === false) {
			if (ns) node.removeAttributeNS('http://www.w3.org/1999/xlink', name.toLowerCase());else node.removeAttribute(name);
		} else if (typeof value !== 'function') {
			if (ns) node.setAttributeNS('http://www.w3.org/1999/xlink', name.toLowerCase(), value);else node.setAttribute(name, value);
		}
	}
}

/** Attempt to set a DOM property to the given value.
 *	IE & FF throw for certain property-value combinations.
 */
function setProperty(node, name, value) {
	try {
		node[name] = value;
	} catch (e) {}
}

/** Proxy an event to hooked event handlers
 *	@private
 */
function eventProxy(e) {
	return this._listeners[e.type](options.event && options.event(e) || e);
}

/** Queue of components that have been mounted and are awaiting componentDidMount */
var mounts = [];

/** Diff recursion count, used to track the end of the diff cycle. */
var diffLevel = 0;

/** Global flag indicating if the diff is currently within an SVG */
var isSvgMode = false;

/** Global flag indicating if the diff is performing hydration */
var hydrating = false;

/** Invoke queued componentDidMount lifecycle methods */
function flushMounts() {
	var c;
	while (c = mounts.pop()) {
		if (options.afterMount) options.afterMount(c);
		if (c.componentDidMount) c.componentDidMount();
	}
}

/** Apply differences in a given vnode (and it's deep children) to a real DOM Node.
 *	@param {Element} [dom=null]		A DOM node to mutate into the shape of the `vnode`
 *	@param {VNode} vnode			A VNode (with descendants forming a tree) representing the desired DOM structure
 *	@returns {Element} dom			The created/mutated element
 *	@private
 */
function diff(dom, vnode, context, mountAll, parent, componentRoot) {
	// diffLevel having been 0 here indicates initial entry into the diff (not a subdiff)
	if (!diffLevel++) {
		// when first starting the diff, check if we're diffing an SVG or within an SVG
		isSvgMode = parent != null && parent.ownerSVGElement !== undefined;

		// hydration is indicated by the existing element to be diffed not having a prop cache
		hydrating = dom != null && !('__preactattr_' in dom);
	}

	var ret = idiff(dom, vnode, context, mountAll, componentRoot);

	// append the element if its a new parent
	if (parent && ret.parentNode !== parent) parent.appendChild(ret);

	// diffLevel being reduced to 0 means we're exiting the diff
	if (! --diffLevel) {
		hydrating = false;
		// invoke queued componentDidMount lifecycle methods
		if (!componentRoot) flushMounts();
	}

	return ret;
}

/** Internals of `diff()`, separated to allow bypassing diffLevel / mount flushing. */
function idiff(dom, vnode, context, mountAll, componentRoot) {
	var out = dom,
	    prevSvgMode = isSvgMode;

	// empty values (null, undefined, booleans) render as empty Text nodes
	if (vnode == null || typeof vnode === 'boolean') vnode = '';

	// Fast case: Strings & Numbers create/update Text nodes.
	if (typeof vnode === 'string' || typeof vnode === 'number') {

		// update if it's already a Text node:
		if (dom && dom.splitText !== undefined && dom.parentNode && (!dom._component || componentRoot)) {
			/* istanbul ignore if */ /* Browser quirk that can't be covered: https://github.com/developit/preact/commit/fd4f21f5c45dfd75151bd27b4c217d8003aa5eb9 */
			if (dom.nodeValue != vnode) {
				dom.nodeValue = vnode;
			}
		} else {
			// it wasn't a Text node: replace it with one and recycle the old Element
			out = document.createTextNode(vnode);
			if (dom) {
				if (dom.parentNode) dom.parentNode.replaceChild(out, dom);
				recollectNodeTree(dom, true);
			}
		}

		out['__preactattr_'] = true;

		return out;
	}

	// If the VNode represents a Component, perform a component diff:
	var vnodeName = vnode.nodeName;
	if (typeof vnodeName === 'function') {
		return buildComponentFromVNode(dom, vnode, context, mountAll);
	}

	// Tracks entering and exiting SVG namespace when descending through the tree.
	isSvgMode = vnodeName === 'svg' ? true : vnodeName === 'foreignObject' ? false : isSvgMode;

	// If there's no existing element or it's the wrong type, create a new one:
	vnodeName = String(vnodeName);
	if (!dom || !isNamedNode(dom, vnodeName)) {
		out = createNode(vnodeName, isSvgMode);

		if (dom) {
			// move children into the replacement node
			while (dom.firstChild) {
				out.appendChild(dom.firstChild);
			} // if the previous Element was mounted into the DOM, replace it inline
			if (dom.parentNode) dom.parentNode.replaceChild(out, dom);

			// recycle the old element (skips non-Element node types)
			recollectNodeTree(dom, true);
		}
	}

	var fc = out.firstChild,
	    props = out['__preactattr_'],
	    vchildren = vnode.children;

	if (props == null) {
		props = out['__preactattr_'] = {};
		for (var a = out.attributes, i = a.length; i--;) {
			props[a[i].name] = a[i].value;
		}
	}

	// Optimization: fast-path for elements containing a single TextNode:
	if (!hydrating && vchildren && vchildren.length === 1 && typeof vchildren[0] === 'string' && fc != null && fc.splitText !== undefined && fc.nextSibling == null) {
		if (fc.nodeValue != vchildren[0]) {
			fc.nodeValue = vchildren[0];
		}
	}
	// otherwise, if there are existing or new children, diff them:
	else if (vchildren && vchildren.length || fc != null) {
			innerDiffNode(out, vchildren, context, mountAll, hydrating || props.dangerouslySetInnerHTML != null);
		}

	// Apply attributes/props from VNode to the DOM Element:
	diffAttributes(out, vnode.attributes, props);

	// restore previous SVG mode: (in case we're exiting an SVG namespace)
	isSvgMode = prevSvgMode;

	return out;
}

/** Apply child and attribute changes between a VNode and a DOM Node to the DOM.
 *	@param {Element} dom			Element whose children should be compared & mutated
 *	@param {Array} vchildren		Array of VNodes to compare to `dom.childNodes`
 *	@param {Object} context			Implicitly descendant context object (from most recent `getChildContext()`)
 *	@param {Boolean} mountAll
 *	@param {Boolean} isHydrating	If `true`, consumes externally created elements similar to hydration
 */
function innerDiffNode(dom, vchildren, context, mountAll, isHydrating) {
	var originalChildren = dom.childNodes,
	    children = [],
	    keyed = {},
	    keyedLen = 0,
	    min = 0,
	    len = originalChildren.length,
	    childrenLen = 0,
	    vlen = vchildren ? vchildren.length : 0,
	    j,
	    c,
	    f,
	    vchild,
	    child;

	// Build up a map of keyed children and an Array of unkeyed children:
	if (len !== 0) {
		for (var i = 0; i < len; i++) {
			var _child = originalChildren[i],
			    props = _child['__preactattr_'],
			    key = vlen && props ? _child._component ? _child._component.__key : props.key : null;
			if (key != null) {
				keyedLen++;
				keyed[key] = _child;
			} else if (props || (_child.splitText !== undefined ? isHydrating ? _child.nodeValue.trim() : true : isHydrating)) {
				children[childrenLen++] = _child;
			}
		}
	}

	if (vlen !== 0) {
		for (var i = 0; i < vlen; i++) {
			vchild = vchildren[i];
			child = null;

			// attempt to find a node based on key matching
			var key = vchild.key;
			if (key != null) {
				if (keyedLen && keyed[key] !== undefined) {
					child = keyed[key];
					keyed[key] = undefined;
					keyedLen--;
				}
			}
			// attempt to pluck a node of the same type from the existing children
			else if (!child && min < childrenLen) {
					for (j = min; j < childrenLen; j++) {
						if (children[j] !== undefined && isSameNodeType(c = children[j], vchild, isHydrating)) {
							child = c;
							children[j] = undefined;
							if (j === childrenLen - 1) childrenLen--;
							if (j === min) min++;
							break;
						}
					}
				}

			// morph the matched/found/created DOM child to match vchild (deep)
			child = idiff(child, vchild, context, mountAll);

			f = originalChildren[i];
			if (child && child !== dom && child !== f) {
				if (f == null) {
					dom.appendChild(child);
				} else if (child === f.nextSibling) {
					removeNode(f);
				} else {
					dom.insertBefore(child, f);
				}
			}
		}
	}

	// remove unused keyed children:
	if (keyedLen) {
		for (var i in keyed) {
			if (keyed[i] !== undefined) recollectNodeTree(keyed[i], false);
		}
	}

	// remove orphaned unkeyed children:
	while (min <= childrenLen) {
		if ((child = children[childrenLen--]) !== undefined) recollectNodeTree(child, false);
	}
}

/** Recursively recycle (or just unmount) a node and its descendants.
 *	@param {Node} node						DOM node to start unmount/removal from
 *	@param {Boolean} [unmountOnly=false]	If `true`, only triggers unmount lifecycle, skips removal
 */
function recollectNodeTree(node, unmountOnly) {
	var component = node._component;
	if (component) {
		// if node is owned by a Component, unmount that component (ends up recursing back here)
		unmountComponent(component);
	} else {
		// If the node's VNode had a ref function, invoke it with null here.
		// (this is part of the React spec, and smart for unsetting references)
		if (node['__preactattr_'] != null && node['__preactattr_'].ref) node['__preactattr_'].ref(null);

		if (unmountOnly === false || node['__preactattr_'] == null) {
			removeNode(node);
		}

		removeChildren(node);
	}
}

/** Recollect/unmount all children.
 *	- we use .lastChild here because it causes less reflow than .firstChild
 *	- it's also cheaper than accessing the .childNodes Live NodeList
 */
function removeChildren(node) {
	node = node.lastChild;
	while (node) {
		var next = node.previousSibling;
		recollectNodeTree(node, true);
		node = next;
	}
}

/** Apply differences in attributes from a VNode to the given DOM Element.
 *	@param {Element} dom		Element with attributes to diff `attrs` against
 *	@param {Object} attrs		The desired end-state key-value attribute pairs
 *	@param {Object} old			Current/previous attributes (from previous VNode or element's prop cache)
 */
function diffAttributes(dom, attrs, old) {
	var name;

	// remove attributes no longer present on the vnode by setting them to undefined
	for (name in old) {
		if (!(attrs && attrs[name] != null) && old[name] != null) {
			setAccessor(dom, name, old[name], old[name] = undefined, isSvgMode);
		}
	}

	// add new & update changed attributes
	for (name in attrs) {
		if (name !== 'children' && name !== 'innerHTML' && (!(name in old) || attrs[name] !== (name === 'value' || name === 'checked' ? dom[name] : old[name]))) {
			setAccessor(dom, name, old[name], old[name] = attrs[name], isSvgMode);
		}
	}
}

/** Retains a pool of Components for re-use, keyed on component name.
 *	Note: since component names are not unique or even necessarily available, these are primarily a form of sharding.
 *	@private
 */
var components = {};

/** Reclaim a component for later re-use by the recycler. */
function collectComponent(component) {
	var name = component.constructor.name;
	(components[name] || (components[name] = [])).push(component);
}

/** Create a component. Normalizes differences between PFC's and classful Components. */
function createComponent(Ctor, props, context) {
	var list = components[Ctor.name],
	    inst;

	if (Ctor.prototype && Ctor.prototype.render) {
		inst = new Ctor(props, context);
		Component.call(inst, props, context);
	} else {
		inst = new Component(props, context);
		inst.constructor = Ctor;
		inst.render = doRender;
	}

	if (list) {
		for (var i = list.length; i--;) {
			if (list[i].constructor === Ctor) {
				inst.nextBase = list[i].nextBase;
				list.splice(i, 1);
				break;
			}
		}
	}
	return inst;
}

/** The `.render()` method for a PFC backing instance. */
function doRender(props, state, context) {
	return this.constructor(props, context);
}

/** Set a component's `props` (generally derived from JSX attributes).
 *	@param {Object} props
 *	@param {Object} [opts]
 *	@param {boolean} [opts.renderSync=false]	If `true` and {@link options.syncComponentUpdates} is `true`, triggers synchronous rendering.
 *	@param {boolean} [opts.render=true]			If `false`, no render will be triggered.
 */
function setComponentProps(component, props, opts, context, mountAll) {
	if (component._disable) return;
	component._disable = true;

	if (component.__ref = props.ref) delete props.ref;
	if (component.__key = props.key) delete props.key;

	if (!component.base || mountAll) {
		if (component.componentWillMount) component.componentWillMount();
	} else if (component.componentWillReceiveProps) {
		component.componentWillReceiveProps(props, context);
	}

	if (context && context !== component.context) {
		if (!component.prevContext) component.prevContext = component.context;
		component.context = context;
	}

	if (!component.prevProps) component.prevProps = component.props;
	component.props = props;

	component._disable = false;

	if (opts !== 0) {
		if (opts === 1 || options.syncComponentUpdates !== false || !component.base) {
			renderComponent(component, 1, mountAll);
		} else {
			enqueueRender(component);
		}
	}

	if (component.__ref) component.__ref(component);
}

/** Render a Component, triggering necessary lifecycle events and taking High-Order Components into account.
 *	@param {Component} component
 *	@param {Object} [opts]
 *	@param {boolean} [opts.build=false]		If `true`, component will build and store a DOM node if not already associated with one.
 *	@private
 */
function renderComponent(component, opts, mountAll, isChild) {
	if (component._disable) return;

	var props = component.props,
	    state = component.state,
	    context = component.context,
	    previousProps = component.prevProps || props,
	    previousState = component.prevState || state,
	    previousContext = component.prevContext || context,
	    isUpdate = component.base,
	    nextBase = component.nextBase,
	    initialBase = isUpdate || nextBase,
	    initialChildComponent = component._component,
	    skip = false,
	    rendered,
	    inst,
	    cbase;

	// if updating
	if (isUpdate) {
		component.props = previousProps;
		component.state = previousState;
		component.context = previousContext;
		if (opts !== 2 && component.shouldComponentUpdate && component.shouldComponentUpdate(props, state, context) === false) {
			skip = true;
		} else if (component.componentWillUpdate) {
			component.componentWillUpdate(props, state, context);
		}
		component.props = props;
		component.state = state;
		component.context = context;
	}

	component.prevProps = component.prevState = component.prevContext = component.nextBase = null;
	component._dirty = false;

	if (!skip) {
		rendered = component.render(props, state, context);

		// context to pass to the child, can be updated via (grand-)parent component
		if (component.getChildContext) {
			context = extend(extend({}, context), component.getChildContext());
		}

		var childComponent = rendered && rendered.nodeName,
		    toUnmount,
		    base;

		if (typeof childComponent === 'function') {
			// set up high order component link

			var childProps = getNodeProps(rendered);
			inst = initialChildComponent;

			if (inst && inst.constructor === childComponent && childProps.key == inst.__key) {
				setComponentProps(inst, childProps, 1, context, false);
			} else {
				toUnmount = inst;

				component._component = inst = createComponent(childComponent, childProps, context);
				inst.nextBase = inst.nextBase || nextBase;
				inst._parentComponent = component;
				setComponentProps(inst, childProps, 0, context, false);
				renderComponent(inst, 1, mountAll, true);
			}

			base = inst.base;
		} else {
			cbase = initialBase;

			// destroy high order component link
			toUnmount = initialChildComponent;
			if (toUnmount) {
				cbase = component._component = null;
			}

			if (initialBase || opts === 1) {
				if (cbase) cbase._component = null;
				base = diff(cbase, rendered, context, mountAll || !isUpdate, initialBase && initialBase.parentNode, true);
			}
		}

		if (initialBase && base !== initialBase && inst !== initialChildComponent) {
			var baseParent = initialBase.parentNode;
			if (baseParent && base !== baseParent) {
				baseParent.replaceChild(base, initialBase);

				if (!toUnmount) {
					initialBase._component = null;
					recollectNodeTree(initialBase, false);
				}
			}
		}

		if (toUnmount) {
			unmountComponent(toUnmount);
		}

		component.base = base;
		if (base && !isChild) {
			var componentRef = component,
			    t = component;
			while (t = t._parentComponent) {
				(componentRef = t).base = base;
			}
			base._component = componentRef;
			base._componentConstructor = componentRef.constructor;
		}
	}

	if (!isUpdate || mountAll) {
		mounts.unshift(component);
	} else if (!skip) {
		// Ensure that pending componentDidMount() hooks of child components
		// are called before the componentDidUpdate() hook in the parent.
		// Note: disabled as it causes duplicate hooks, see https://github.com/developit/preact/issues/750
		// flushMounts();

		if (component.componentDidUpdate) {
			component.componentDidUpdate(previousProps, previousState, previousContext);
		}
		if (options.afterUpdate) options.afterUpdate(component);
	}

	if (component._renderCallbacks != null) {
		while (component._renderCallbacks.length) {
			component._renderCallbacks.pop().call(component);
		}
	}

	if (!diffLevel && !isChild) flushMounts();
}

/** Apply the Component referenced by a VNode to the DOM.
 *	@param {Element} dom	The DOM node to mutate
 *	@param {VNode} vnode	A Component-referencing VNode
 *	@returns {Element} dom	The created/mutated element
 *	@private
 */
function buildComponentFromVNode(dom, vnode, context, mountAll) {
	var c = dom && dom._component,
	    originalComponent = c,
	    oldDom = dom,
	    isDirectOwner = c && dom._componentConstructor === vnode.nodeName,
	    isOwner = isDirectOwner,
	    props = getNodeProps(vnode);
	while (c && !isOwner && (c = c._parentComponent)) {
		isOwner = c.constructor === vnode.nodeName;
	}

	if (c && isOwner && (!mountAll || c._component)) {
		setComponentProps(c, props, 3, context, mountAll);
		dom = c.base;
	} else {
		if (originalComponent && !isDirectOwner) {
			unmountComponent(originalComponent);
			dom = oldDom = null;
		}

		c = createComponent(vnode.nodeName, props, context);
		if (dom && !c.nextBase) {
			c.nextBase = dom;
			// passing dom/oldDom as nextBase will recycle it if unused, so bypass recycling on L229:
			oldDom = null;
		}
		setComponentProps(c, props, 1, context, mountAll);
		dom = c.base;

		if (oldDom && dom !== oldDom) {
			oldDom._component = null;
			recollectNodeTree(oldDom, false);
		}
	}

	return dom;
}

/** Remove a component from the DOM and recycle it.
 *	@param {Component} component	The Component instance to unmount
 *	@private
 */
function unmountComponent(component) {
	if (options.beforeUnmount) options.beforeUnmount(component);

	var base = component.base;

	component._disable = true;

	if (component.componentWillUnmount) component.componentWillUnmount();

	component.base = null;

	// recursively tear down & recollect high-order component children:
	var inner = component._component;
	if (inner) {
		unmountComponent(inner);
	} else if (base) {
		if (base['__preactattr_'] && base['__preactattr_'].ref) base['__preactattr_'].ref(null);

		component.nextBase = base;

		removeNode(base);
		collectComponent(component);

		removeChildren(base);
	}

	if (component.__ref) component.__ref(null);
}

/** Base Component class.
 *	Provides `setState()` and `forceUpdate()`, which trigger rendering.
 *	@public
 *
 *	@example
 *	class MyFoo extends Component {
 *		render(props, state) {
 *			return <div />;
 *		}
 *	}
 */
function Component(props, context) {
	this._dirty = true;

	/** @public
  *	@type {object}
  */
	this.context = context;

	/** @public
  *	@type {object}
  */
	this.props = props;

	/** @public
  *	@type {object}
  */
	this.state = this.state || {};
}

extend(Component.prototype, {

	/** Returns a `boolean` indicating if the component should re-render when receiving the given `props` and `state`.
  *	@param {object} nextProps
  *	@param {object} nextState
  *	@param {object} nextContext
  *	@returns {Boolean} should the component re-render
  *	@name shouldComponentUpdate
  *	@function
  */

	/** Update component state by copying properties from `state` to `this.state`.
  *	@param {object} state		A hash of state properties to update with new values
  *	@param {function} callback	A function to be called once component state is updated
  */
	setState: function setState(state, callback) {
		var s = this.state;
		if (!this.prevState) this.prevState = extend({}, s);
		extend(s, typeof state === 'function' ? state(s, this.props) : state);
		if (callback) (this._renderCallbacks = this._renderCallbacks || []).push(callback);
		enqueueRender(this);
	},


	/** Immediately perform a synchronous re-render of the component.
  *	@param {function} callback		A function to be called after component is re-rendered.
  *	@private
  */
	forceUpdate: function forceUpdate(callback) {
		if (callback) (this._renderCallbacks = this._renderCallbacks || []).push(callback);
		renderComponent(this, 2);
	},


	/** Accepts `props` and `state`, and returns a new Virtual DOM tree to build.
  *	Virtual DOM is generally constructed via [JSX](http://jasonformat.com/wtf-is-jsx).
  *	@param {object} props		Props (eg: JSX attributes) received from parent element/component
  *	@param {object} state		The component's current state
  *	@param {object} context		Context object (if a parent component has provided context)
  *	@returns VNode
  */
	render: function render() {}
});

/** Render JSX into a `parent` Element.
 *	@param {VNode} vnode		A (JSX) VNode to render
 *	@param {Element} parent		DOM element to render into
 *	@param {Element} [merge]	Attempt to re-use an existing DOM tree rooted at `merge`
 *	@public
 *
 *	@example
 *	// render a div into <body>:
 *	render(<div id="hello">hello!</div>, document.body);
 *
 *	@example
 *	// render a "Thing" component into #foo:
 *	const Thing = ({ name }) => <span>{ name }</span>;
 *	render(<Thing name="one" />, document.querySelector('#foo'));
 */
function render(vnode, parent, merge) {
  return diff(merge, vnode, {}, false, parent, false);
}

var preact = {
	h: h,
	createElement: h,
	cloneElement: cloneElement,
	Component: Component,
	render: render,
	rerender: rerender,
	options: options
};


/* harmony default export */ __webpack_exports__["default"] = (preact);
//# sourceMappingURL=preact.esm.js.map


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {


//ARRAYS
exports.normalizeArray = __webpack_require__(54);

//NORMALS
exports.faceNormals = __webpack_require__(135);
exports.vertexNormals = __webpack_require__(136);

//ONE NORMAL
exports.calculateNormal = __webpack_require__(53);

//HELPFUL UTILS
exports.cross = __webpack_require__(30);
exports.normalize = __webpack_require__(31);


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ARRAY_TYPE", function() { return ARRAY_TYPE; });
/* harmony export (immutable) */ __webpack_exports__["setMatrixArrayType"] = setMatrixArrayType;
/* harmony export (immutable) */ __webpack_exports__["toRadian"] = toRadian;
/* harmony export (immutable) */ __webpack_exports__["equals"] = equals;
/* Copyright (c) 2015, Brandon Jones, Colin MacKenzie IV.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE. */

/**
 * Common utilities
 * @module glMatrix
 */

// Configuration Constants
const EPSILON = 0.000001;
/* harmony export (immutable) */ __webpack_exports__["EPSILON"] = EPSILON;

let ARRAY_TYPE = (typeof Float32Array !== 'undefined') ? Float32Array : Array;
const RANDOM = Math.random;
/* harmony export (immutable) */ __webpack_exports__["RANDOM"] = RANDOM;


/**
 * Sets the type of array used when creating new vectors and matrices
 *
 * @param {Type} type Array type, such as Float32Array or Array
 */
function setMatrixArrayType(type) {
  ARRAY_TYPE = type;
}

const degree = Math.PI / 180;

/**
 * Convert Degree To Radian
 *
 * @param {Number} a Angle in Degrees
 */
function toRadian(a) {
  return a * degree;
}

/**
 * Tests whether or not the arguments have approximately the same value, within an absolute
 * or relative tolerance of glMatrix.EPSILON (an absolute tolerance is used for values less
 * than or equal to 1.0, and a relative tolerance is used for larger values)
 *
 * @param {Number} a The first number to test.
 * @param {Number} b The second number to test.
 * @returns {Boolean} True if the numbers are approximately equal, false otherwise.
 */
function equals(a, b) {
  return Math.abs(a - b) <= EPSILON*Math.max(1.0, Math.abs(a), Math.abs(b));
}


/***/ }),
/* 4 */
/***/ (function(module, exports) {

function Edge()
{
  this.halfEdge = undefined;
  this.index = -1;
};

Edge.prototype.setIndex = function( index ) {
  this.index = index;
};

Edge.prototype.getIndex = function() {
  return this.index;
};

Edge.prototype.setHalfEdge = function( halfEdge ) {
  this.halfEdge = halfEdge;
};

Edge.prototype.getHalfEdge = function() {
  return this.halfEdge;
};

module.exports = Edge;


/***/ }),
/* 5 */
/***/ (function(module, exports) {

function Face()
{
  this.halfEdge = undefined;  // points to one of the halfedges associated with this face
  this.index = -1;
};

Face.prototype.setIndex = function( index ) {
  this.index = index;
};

Face.prototype.getIndex = function() {
  return this.index;
};

Face.prototype.setHalfEdge = function( halfEdge ) {
  this.halfEdge = halfEdge;
};

Face.prototype.getHalfEdge = function() {
  return this.halfEdge;
};

module.exports = Face;


/***/ }),
/* 6 */
/***/ (function(module, exports) {

function HalfEdge()
{
  this.nextHalfEdge = undefined;  // points to the next halfedge around the current face (CCW)
  this.flipHalfEdge = undefined;  // points to the other halfedge associated with this edge
  this.vertex = undefined;        // points to the vertex at the "tail" of this halfedge
  this.edge = undefined;          // points to the edge associated with this halfedge
  this.face = undefined;          // points to the face containing this halfedge  
};

HalfEdge.prototype.setVertex = function( vertex ) {
  this.vertex = vertex;
};

HalfEdge.prototype.getVertex = function() {
  return this.vertex;
};

HalfEdge.prototype.setFace = function( face ) {
  this.face = face;
};

HalfEdge.prototype.getFace = function() {
  return this.face;
};

HalfEdge.prototype.setEdge = function( edge ) {
  this.edge = edge;
};

HalfEdge.prototype.getEdge = function() {
  return this.edge;
};

HalfEdge.prototype.setNextHalfEdge = function( nextHalfEdge ) {
  this.nextHalfEdge = nextHalfEdge;
};

HalfEdge.prototype.getNextHalfEdge = function() {
  return this.nextHalfEdge;
};

HalfEdge.prototype.setFlipHalfEdge = function( flipHalfEdge ) {
  this.flipHalfEdge = flipHalfEdge;
};

HalfEdge.prototype.getFlipHalfEdge = function() {
  return this.flipHalfEdge;
};

HalfEdge.prototype.onBoundary = function() {
  if( this.getFlipHalfEdge() ) {
    return false;
  }
  return true;
};

module.exports = HalfEdge;


/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = function( face ) {
  var originalHalfEdge = he = face.getHalfEdge();
  var vertices = [];
  do {
    vertices.push( he.getVertex() );
    he = he.getNextHalfEdge();
  } while ( he != originalHalfEdge );
  return vertices;
};


/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Provider", function() { return Provider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "connect", function() { return connect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "connectAdvanced", function() { return connectAdvanced; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux__ = __webpack_require__(34);



var Children = {
	only: function only(children) {
		return children && children[0] || null;
	}
};

function proptype() {}
proptype.isRequired = proptype;

var PropTypes = {
	element: proptype,
	func: proptype,
	shape: function shape() {
		return proptype;
	},
	instanceOf: function instanceOf() {
		return proptype;
	}
};

var subscriptionShape = PropTypes.shape({
  trySubscribe: PropTypes.func.isRequired,
  tryUnsubscribe: PropTypes.func.isRequired,
  notifyNestedSubs: PropTypes.func.isRequired,
  isSubscribed: PropTypes.func.isRequired
});

var storeShape = PropTypes.shape({
  subscribe: PropTypes.func.isRequired,
  dispatch: PropTypes.func.isRequired,
  getState: PropTypes.func.isRequired
});

/**
 * Prints a warning in the console if it exists.
 *
 * @param {String} message The warning message.
 * @returns {void}
 */
function warning(message) {
  /* eslint-disable no-console */
  if (typeof console !== 'undefined' && typeof console.error === 'function') {
    console.error(message);
  }
  /* eslint-enable no-console */
  try {
    // This error was thrown as a convenience so that if you enable
    // "break on all exceptions" in your console,
    // it would pause the execution at this line.
    throw new Error(message);
    /* eslint-disable no-empty */
  } catch (e) {}
  /* eslint-enable no-empty */
}

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};











var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};









var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};



var inherits = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
};









var objectWithoutProperties = function (obj, keys) {
  var target = {};

  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }

  return target;
};

var possibleConstructorReturn = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
};

var didWarnAboutReceivingStore = false;
function warnAboutReceivingStore() {
  if (didWarnAboutReceivingStore) {
    return;
  }
  didWarnAboutReceivingStore = true;

  warning('<Provider> does not support changing `store` on the fly. ' + 'It is most likely that you see this error because you updated to ' + 'Redux 2.x and React Redux 2.x which no longer hot reload reducers ' + 'automatically. See https://github.com/reactjs/react-redux/releases/' + 'tag/v2.0.0 for the migration instructions.');
}

function createProvider() {
  var _Provider$childContex;

  var storeKey = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'store';
  var subKey = arguments[1];

  var subscriptionKey = subKey || storeKey + 'Subscription';

  var Provider = function (_Component) {
    inherits(Provider, _Component);

    Provider.prototype.getChildContext = function getChildContext() {
      var _ref;

      return _ref = {}, _ref[storeKey] = this[storeKey], _ref[subscriptionKey] = null, _ref;
    };

    function Provider(props, context) {
      classCallCheck(this, Provider);

      var _this = possibleConstructorReturn(this, _Component.call(this, props, context));

      _this[storeKey] = props.store;
      return _this;
    }

    Provider.prototype.render = function render() {
      return Children.only(this.props.children);
    };

    return Provider;
  }(__WEBPACK_IMPORTED_MODULE_0_preact__["Component"]);

  {
    Provider.prototype.componentWillReceiveProps = function (nextProps) {
      if (this[storeKey] !== nextProps.store) {
        warnAboutReceivingStore();
      }
    };
  }

  Provider.childContextTypes = (_Provider$childContex = {}, _Provider$childContex[storeKey] = storeShape.isRequired, _Provider$childContex[subscriptionKey] = subscriptionShape, _Provider$childContex);

  return Provider;
}

var Provider = createProvider();

/**
 * Copyright 2015, Yahoo! Inc.
 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */
var REACT_STATICS = {
    childContextTypes: true,
    contextTypes: true,
    defaultProps: true,
    displayName: true,
    getDefaultProps: true,
    mixins: true,
    propTypes: true,
    type: true
};

var KNOWN_STATICS = {
    name: true,
    length: true,
    prototype: true,
    caller: true,
    callee: true,
    arguments: true,
    arity: true
};

var defineProperty$1 = Object.defineProperty;
var getOwnPropertyNames = Object.getOwnPropertyNames;
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var getPrototypeOf = Object.getPrototypeOf;
var objectPrototype = getPrototypeOf && getPrototypeOf(Object);

var hoistNonReactStatics = function hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {
    if (typeof sourceComponent !== 'string') {
        // don't hoist over string (html) components

        if (objectPrototype) {
            var inheritedComponent = getPrototypeOf(sourceComponent);
            if (inheritedComponent && inheritedComponent !== objectPrototype) {
                hoistNonReactStatics(targetComponent, inheritedComponent, blacklist);
            }
        }

        var keys = getOwnPropertyNames(sourceComponent);

        if (getOwnPropertySymbols) {
            keys = keys.concat(getOwnPropertySymbols(sourceComponent));
        }

        for (var i = 0; i < keys.length; ++i) {
            var key = keys[i];
            if (!REACT_STATICS[key] && !KNOWN_STATICS[key] && (!blacklist || !blacklist[key])) {
                var descriptor = getOwnPropertyDescriptor(sourceComponent, key);
                try {
                    // Avoid failures from read-only properties
                    defineProperty$1(targetComponent, key, descriptor);
                } catch (e) {}
            }
        }

        return targetComponent;
    }

    return targetComponent;
};

var invariant = function () {};

// encapsulates the subscription logic for connecting a component to the redux store, as
// well as nesting subscriptions of descendant components, so that we can ensure the
// ancestor components re-render before descendants

var CLEARED = null;
var nullListeners = {
  notify: function notify() {}
};

function createListenerCollection() {
  // the current/next pattern is copied from redux's createStore code.
  // TODO: refactor+expose that code to be reusable here?
  var current = [];
  var next = [];

  return {
    clear: function clear() {
      next = CLEARED;
      current = CLEARED;
    },
    notify: function notify() {
      var listeners = current = next;
      for (var i = 0; i < listeners.length; i++) {
        listeners[i]();
      }
    },
    get: function get$$1() {
      return next;
    },
    subscribe: function subscribe(listener) {
      var isSubscribed = true;
      if (next === current) next = current.slice();
      next.push(listener);

      return function unsubscribe() {
        if (!isSubscribed || current === CLEARED) return;
        isSubscribed = false;

        if (next === current) next = current.slice();
        next.splice(next.indexOf(listener), 1);
      };
    }
  };
}

var Subscription = function () {
  function Subscription(store, parentSub, onStateChange) {
    classCallCheck(this, Subscription);

    this.store = store;
    this.parentSub = parentSub;
    this.onStateChange = onStateChange;
    this.unsubscribe = null;
    this.listeners = nullListeners;
  }

  Subscription.prototype.addNestedSub = function addNestedSub(listener) {
    this.trySubscribe();
    return this.listeners.subscribe(listener);
  };

  Subscription.prototype.notifyNestedSubs = function notifyNestedSubs() {
    this.listeners.notify();
  };

  Subscription.prototype.isSubscribed = function isSubscribed() {
    return Boolean(this.unsubscribe);
  };

  Subscription.prototype.trySubscribe = function trySubscribe() {
    if (!this.unsubscribe) {
      this.unsubscribe = this.parentSub ? this.parentSub.addNestedSub(this.onStateChange) : this.store.subscribe(this.onStateChange);

      this.listeners = createListenerCollection();
    }
  };

  Subscription.prototype.tryUnsubscribe = function tryUnsubscribe() {
    if (this.unsubscribe) {
      this.unsubscribe();
      this.unsubscribe = null;
      this.listeners.clear();
      this.listeners = nullListeners;
    }
  };

  return Subscription;
}();

var hotReloadingVersion = 0;
var dummyState = {};
function noop() {}
function makeSelectorStateful(sourceSelector, store) {
  // wrap the selector in an object that tracks its results between runs.
  var selector = {
    run: function runComponentSelector(props) {
      try {
        var nextProps = sourceSelector(store.getState(), props);
        if (nextProps !== selector.props || selector.error) {
          selector.shouldComponentUpdate = true;
          selector.props = nextProps;
          selector.error = null;
        }
      } catch (error) {
        selector.shouldComponentUpdate = true;
        selector.error = error;
      }
    }
  };

  return selector;
}

function connectAdvanced(
/*
  selectorFactory is a func that is responsible for returning the selector function used to
  compute new props from state, props, and dispatch. For example:
     export default connectAdvanced((dispatch, options) => (state, props) => ({
      thing: state.things[props.thingId],
      saveThing: fields => dispatch(actionCreators.saveThing(props.thingId, fields)),
    }))(YourComponent)
   Access to dispatch is provided to the factory so selectorFactories can bind actionCreators
  outside of their selector as an optimization. Options passed to connectAdvanced are passed to
  the selectorFactory, along with displayName and WrappedComponent, as the second argument.
   Note that selectorFactory is responsible for all caching/memoization of inbound and outbound
  props. Do not use connectAdvanced directly without memoizing results between calls to your
  selector, otherwise the Connect component will re-render on every state or props change.
*/
selectorFactory) {
  var _contextTypes, _childContextTypes;

  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  var _ref$getDisplayName = _ref.getDisplayName,
      getDisplayName = _ref$getDisplayName === undefined ? function (name) {
    return 'ConnectAdvanced(' + name + ')';
  } : _ref$getDisplayName,
      _ref$methodName = _ref.methodName,
      methodName = _ref$methodName === undefined ? 'connectAdvanced' : _ref$methodName,
      _ref$renderCountProp = _ref.renderCountProp,
      renderCountProp = _ref$renderCountProp === undefined ? undefined : _ref$renderCountProp,
      _ref$shouldHandleStat = _ref.shouldHandleStateChanges,
      shouldHandleStateChanges = _ref$shouldHandleStat === undefined ? true : _ref$shouldHandleStat,
      _ref$storeKey = _ref.storeKey,
      storeKey = _ref$storeKey === undefined ? 'store' : _ref$storeKey,
      _ref$withRef = _ref.withRef,
      withRef = _ref$withRef === undefined ? false : _ref$withRef,
      connectOptions = objectWithoutProperties(_ref, ['getDisplayName', 'methodName', 'renderCountProp', 'shouldHandleStateChanges', 'storeKey', 'withRef']);

  var subscriptionKey = storeKey + 'Subscription';
  var version = hotReloadingVersion++;

  var contextTypes = (_contextTypes = {}, _contextTypes[storeKey] = storeShape, _contextTypes[subscriptionKey] = subscriptionShape, _contextTypes);
  var childContextTypes = (_childContextTypes = {}, _childContextTypes[subscriptionKey] = subscriptionShape, _childContextTypes);

  return function wrapWithConnect(WrappedComponent) {
    invariant(typeof WrappedComponent == 'function', 'You must pass a component to the function returned by ' + ('connect. Instead received ' + JSON.stringify(WrappedComponent)));

    var wrappedComponentName = WrappedComponent.displayName || WrappedComponent.name || 'Component';

    var displayName = getDisplayName(wrappedComponentName);

    var selectorFactoryOptions = _extends({}, connectOptions, {
      getDisplayName: getDisplayName,
      methodName: methodName,
      renderCountProp: renderCountProp,
      shouldHandleStateChanges: shouldHandleStateChanges,
      storeKey: storeKey,
      withRef: withRef,
      displayName: displayName,
      wrappedComponentName: wrappedComponentName,
      WrappedComponent: WrappedComponent
    });

    var Connect = function (_Component) {
      inherits(Connect, _Component);

      function Connect(props, context) {
        classCallCheck(this, Connect);

        var _this = possibleConstructorReturn(this, _Component.call(this, props, context));

        _this.version = version;
        _this.state = {};
        _this.renderCount = 0;
        _this.store = props[storeKey] || context[storeKey];
        _this.propsMode = Boolean(props[storeKey]);
        _this.setWrappedInstance = _this.setWrappedInstance.bind(_this);

        invariant(_this.store, 'Could not find "' + storeKey + '" in either the context or props of ' + ('"' + displayName + '". Either wrap the root component in a <Provider>, ') + ('or explicitly pass "' + storeKey + '" as a prop to "' + displayName + '".'));

        _this.initSelector();
        _this.initSubscription();
        return _this;
      }

      Connect.prototype.getChildContext = function getChildContext() {
        var _ref2;

        // If this component received store from props, its subscription should be transparent
        // to any descendants receiving store+subscription from context; it passes along
        // subscription passed to it. Otherwise, it shadows the parent subscription, which allows
        // Connect to control ordering of notifications to flow top-down.
        var subscription = this.propsMode ? null : this.subscription;
        return _ref2 = {}, _ref2[subscriptionKey] = subscription || this.context[subscriptionKey], _ref2;
      };

      Connect.prototype.componentDidMount = function componentDidMount() {
        if (!shouldHandleStateChanges) return;

        // componentWillMount fires during server side rendering, but componentDidMount and
        // componentWillUnmount do not. Because of this, trySubscribe happens during ...didMount.
        // Otherwise, unsubscription would never take place during SSR, causing a memory leak.
        // To handle the case where a child component may have triggered a state change by
        // dispatching an action in its componentWillMount, we have to re-run the select and maybe
        // re-render.
        this.subscription.trySubscribe();
        this.selector.run(this.props);
        if (this.selector.shouldComponentUpdate) this.forceUpdate();
      };

      Connect.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
        this.selector.run(nextProps);
      };

      Connect.prototype.shouldComponentUpdate = function shouldComponentUpdate() {
        return this.selector.shouldComponentUpdate;
      };

      Connect.prototype.componentWillUnmount = function componentWillUnmount() {
        if (this.subscription) this.subscription.tryUnsubscribe();
        this.subscription = null;
        this.notifyNestedSubs = noop;
        this.store = null;
        this.selector.run = noop;
        this.selector.shouldComponentUpdate = false;
      };

      Connect.prototype.getWrappedInstance = function getWrappedInstance() {
        invariant(withRef, 'To access the wrapped instance, you need to specify ' + ('{ withRef: true } in the options argument of the ' + methodName + '() call.'));
        return this.wrappedInstance;
      };

      Connect.prototype.setWrappedInstance = function setWrappedInstance(ref) {
        this.wrappedInstance = ref;
      };

      Connect.prototype.initSelector = function initSelector() {
        var sourceSelector = selectorFactory(this.store.dispatch, selectorFactoryOptions);
        this.selector = makeSelectorStateful(sourceSelector, this.store);
        this.selector.run(this.props);
      };

      Connect.prototype.initSubscription = function initSubscription() {
        if (!shouldHandleStateChanges) return;

        // parentSub's source should match where store came from: props vs. context. A component
        // connected to the store via props shouldn't use subscription from context, or vice versa.
        var parentSub = (this.propsMode ? this.props : this.context)[subscriptionKey];
        this.subscription = new Subscription(this.store, parentSub, this.onStateChange.bind(this));

        // `notifyNestedSubs` is duplicated to handle the case where the component is  unmounted in
        // the middle of the notification loop, where `this.subscription` will then be null. An
        // extra null check every change can be avoided by copying the method onto `this` and then
        // replacing it with a no-op on unmount. This can probably be avoided if Subscription's
        // listeners logic is changed to not call listeners that have been unsubscribed in the
        // middle of the notification loop.
        this.notifyNestedSubs = this.subscription.notifyNestedSubs.bind(this.subscription);
      };

      Connect.prototype.onStateChange = function onStateChange() {
        this.selector.run(this.props);

        if (!this.selector.shouldComponentUpdate) {
          this.notifyNestedSubs();
        } else {
          this.componentDidUpdate = this.notifyNestedSubsOnComponentDidUpdate;
          this.setState(dummyState);
        }
      };

      Connect.prototype.notifyNestedSubsOnComponentDidUpdate = function notifyNestedSubsOnComponentDidUpdate() {
        // `componentDidUpdate` is conditionally implemented when `onStateChange` determines it
        // needs to notify nested subs. Once called, it unimplements itself until further state
        // changes occur. Doing it this way vs having a permanent `componentDidUpdate` that does
        // a boolean check every time avoids an extra method call most of the time, resulting
        // in some perf boost.
        this.componentDidUpdate = undefined;
        this.notifyNestedSubs();
      };

      Connect.prototype.isSubscribed = function isSubscribed() {
        return Boolean(this.subscription) && this.subscription.isSubscribed();
      };

      Connect.prototype.addExtraProps = function addExtraProps(props) {
        if (!withRef && !renderCountProp && !(this.propsMode && this.subscription)) return props;
        // make a shallow copy so that fields added don't leak to the original selector.
        // this is especially important for 'ref' since that's a reference back to the component
        // instance. a singleton memoized selector would then be holding a reference to the
        // instance, preventing the instance from being garbage collected, and that would be bad
        var withExtras = _extends({}, props);
        if (withRef) withExtras.ref = this.setWrappedInstance;
        if (renderCountProp) withExtras[renderCountProp] = this.renderCount++;
        if (this.propsMode && this.subscription) withExtras[subscriptionKey] = this.subscription;
        return withExtras;
      };

      Connect.prototype.render = function render() {
        var selector = this.selector;
        selector.shouldComponentUpdate = false;

        if (selector.error) {
          throw selector.error;
        } else {
          return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(WrappedComponent, this.addExtraProps(selector.props));
        }
      };

      return Connect;
    }(__WEBPACK_IMPORTED_MODULE_0_preact__["Component"]);

    Connect.WrappedComponent = WrappedComponent;
    Connect.displayName = displayName;
    Connect.childContextTypes = childContextTypes;
    Connect.contextTypes = contextTypes;


    {
      Connect.prototype.componentWillUpdate = function componentWillUpdate() {
        var _this2 = this;

        // We are hot reloading!
        if (this.version !== version) {
          this.version = version;
          this.initSelector();

          // If any connected descendants don't hot reload (and resubscribe in the process), their
          // listeners will be lost when we unsubscribe. Unfortunately, by copying over all
          // listeners, this does mean that the old versions of connected descendants will still be
          // notified of state changes; however, their onStateChange function is a no-op so this
          // isn't a huge deal.
          var oldListeners = [];

          if (this.subscription) {
            oldListeners = this.subscription.listeners.get();
            this.subscription.tryUnsubscribe();
          }
          this.initSubscription();
          if (shouldHandleStateChanges) {
            this.subscription.trySubscribe();
            oldListeners.forEach(function (listener) {
              return _this2.subscription.listeners.subscribe(listener);
            });
          }
        }
      };
    }

    return hoistNonReactStatics(Connect, WrappedComponent);
  };
}

var hasOwn = Object.prototype.hasOwnProperty;

function is(x, y) {
  if (x === y) {
    return x !== 0 || y !== 0 || 1 / x === 1 / y;
  } else {
    return x !== x && y !== y;
  }
}

function shallowEqual(objA, objB) {
  if (is(objA, objB)) return true;

  if ((typeof objA === 'undefined' ? 'undefined' : _typeof(objA)) !== 'object' || objA === null || (typeof objB === 'undefined' ? 'undefined' : _typeof(objB)) !== 'object' || objB === null) {
    return false;
  }

  var keysA = Object.keys(objA);
  var keysB = Object.keys(objB);

  if (keysA.length !== keysB.length) return false;

  for (var i = 0; i < keysA.length; i++) {
    if (!hasOwn.call(objB, keysA[i]) || !is(objA[keysA[i]], objB[keysA[i]])) {
      return false;
    }
  }

  return true;
}

/** Detect free variable `global` from Node.js. */
var freeGlobal = (typeof global === 'undefined' ? 'undefined' : _typeof(global)) == 'object' && global && global.Object === Object && global;

/** Detect free variable `self`. */
var freeSelf = (typeof self === 'undefined' ? 'undefined' : _typeof(self)) == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

/** Built-in value references. */
var _Symbol = root.Symbol;

/** Used for built-in method references. */
var objectProto$1 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$1 = objectProto$1.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto$1.toString;

/** Built-in value references. */
var symToStringTag$1 = _Symbol ? _Symbol.toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty$1.call(value, symToStringTag$1),
      tag = value[symToStringTag$1];

  try {
    value[symToStringTag$1] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag$1] = tag;
    } else {
      delete value[symToStringTag$1];
    }
  }
  return result;
}

/** Used for built-in method references. */
var objectProto$2 = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString$1 = objectProto$2.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString$1.call(value);
}

/** `Object#toString` result references. */
var nullTag = '[object Null]';
var undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag = _Symbol ? _Symbol.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
    if (value == null) {
        return value === undefined ? undefinedTag : nullTag;
    }
    return symToStringTag && symToStringTag in Object(value) ? getRawTag(value) : objectToString(value);
}

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function (arg) {
    return func(transform(arg));
  };
}

/** Built-in value references. */
var getPrototype = overArg(Object.getPrototypeOf, Object);

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && (typeof value === 'undefined' ? 'undefined' : _typeof(value)) == 'object';
}

/** `Object#toString` result references. */
var objectTag = '[object Object]';

/** Used for built-in method references. */
var funcProto = Function.prototype;
var objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to infer the `Object` constructor. */
var objectCtorString = funcToString.call(Object);

/**
 * Checks if `value` is a plain object, that is, an object created by the
 * `Object` constructor or one with a `[[Prototype]]` of `null`.
 *
 * @static
 * @memberOf _
 * @since 0.8.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 * }
 *
 * _.isPlainObject(new Foo);
 * // => false
 *
 * _.isPlainObject([1, 2, 3]);
 * // => false
 *
 * _.isPlainObject({ 'x': 0, 'y': 0 });
 * // => true
 *
 * _.isPlainObject(Object.create(null));
 * // => true
 */
function isPlainObject(value) {
  if (!isObjectLike(value) || baseGetTag(value) != objectTag) {
    return false;
  }
  var proto = getPrototype(value);
  if (proto === null) {
    return true;
  }
  var Ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor;
  return typeof Ctor == 'function' && Ctor instanceof Ctor && funcToString.call(Ctor) == objectCtorString;
}

function verifyPlainObject(value, displayName, methodName) {
  if (!isPlainObject(value)) {
    warning(methodName + '() in ' + displayName + ' must return a plain object. Instead received ' + value + '.');
  }
}

function wrapMapToPropsConstant(getConstant) {
  return function initConstantSelector(dispatch, options) {
    var constant = getConstant(dispatch, options);

    function constantSelector() {
      return constant;
    }
    constantSelector.dependsOnOwnProps = false;
    return constantSelector;
  };
}

// dependsOnOwnProps is used by createMapToPropsProxy to determine whether to pass props as args
// to the mapToProps function being wrapped. It is also used by makePurePropsSelector to determine
// whether mapToProps needs to be invoked when props have changed.
// 
// A length of one signals that mapToProps does not depend on props from the parent component.
// A length of zero is assumed to mean mapToProps is getting args via arguments or ...args and
// therefore not reporting its length accurately..
function getDependsOnOwnProps(mapToProps) {
  return mapToProps.dependsOnOwnProps !== null && mapToProps.dependsOnOwnProps !== undefined ? Boolean(mapToProps.dependsOnOwnProps) : mapToProps.length !== 1;
}

// Used by whenMapStateToPropsIsFunction and whenMapDispatchToPropsIsFunction,
// this function wraps mapToProps in a proxy function which does several things:
// 
//  * Detects whether the mapToProps function being called depends on props, which
//    is used by selectorFactory to decide if it should reinvoke on props changes.
//    
//  * On first call, handles mapToProps if returns another function, and treats that
//    new function as the true mapToProps for subsequent calls.
//    
//  * On first call, verifies the first result is a plain object, in order to warn
//    the developer that their mapToProps function is not returning a valid result.
//    
function wrapMapToPropsFunc(mapToProps, methodName) {
  return function initProxySelector(dispatch, _ref) {
    var displayName = _ref.displayName;

    var proxy = function mapToPropsProxy(stateOrDispatch, ownProps) {
      return proxy.dependsOnOwnProps ? proxy.mapToProps(stateOrDispatch, ownProps) : proxy.mapToProps(stateOrDispatch);
    };

    // allow detectFactoryAndVerify to get ownProps
    proxy.dependsOnOwnProps = true;

    proxy.mapToProps = function detectFactoryAndVerify(stateOrDispatch, ownProps) {
      proxy.mapToProps = mapToProps;
      proxy.dependsOnOwnProps = getDependsOnOwnProps(mapToProps);
      var props = proxy(stateOrDispatch, ownProps);

      if (typeof props === 'function') {
        proxy.mapToProps = props;
        proxy.dependsOnOwnProps = getDependsOnOwnProps(props);
        props = proxy(stateOrDispatch, ownProps);
      }

      verifyPlainObject(props, displayName, methodName);

      return props;
    };

    return proxy;
  };
}

function whenMapDispatchToPropsIsFunction(mapDispatchToProps) {
  return typeof mapDispatchToProps === 'function' ? wrapMapToPropsFunc(mapDispatchToProps, 'mapDispatchToProps') : undefined;
}

function whenMapDispatchToPropsIsMissing(mapDispatchToProps) {
  return !mapDispatchToProps ? wrapMapToPropsConstant(function (dispatch) {
    return { dispatch: dispatch };
  }) : undefined;
}

function whenMapDispatchToPropsIsObject(mapDispatchToProps) {
  return mapDispatchToProps && (typeof mapDispatchToProps === 'undefined' ? 'undefined' : _typeof(mapDispatchToProps)) === 'object' ? wrapMapToPropsConstant(function (dispatch) {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_redux__["bindActionCreators"])(mapDispatchToProps, dispatch);
  }) : undefined;
}

var defaultMapDispatchToPropsFactories = [whenMapDispatchToPropsIsFunction, whenMapDispatchToPropsIsMissing, whenMapDispatchToPropsIsObject];

function whenMapStateToPropsIsFunction(mapStateToProps) {
  return typeof mapStateToProps === 'function' ? wrapMapToPropsFunc(mapStateToProps, 'mapStateToProps') : undefined;
}

function whenMapStateToPropsIsMissing(mapStateToProps) {
  return !mapStateToProps ? wrapMapToPropsConstant(function () {
    return {};
  }) : undefined;
}

var defaultMapStateToPropsFactories = [whenMapStateToPropsIsFunction, whenMapStateToPropsIsMissing];

function defaultMergeProps(stateProps, dispatchProps, ownProps) {
  return _extends({}, ownProps, stateProps, dispatchProps);
}

function wrapMergePropsFunc(mergeProps) {
  return function initMergePropsProxy(dispatch, _ref) {
    var displayName = _ref.displayName,
        pure = _ref.pure,
        areMergedPropsEqual = _ref.areMergedPropsEqual;

    var hasRunOnce = false;
    var mergedProps = void 0;

    return function mergePropsProxy(stateProps, dispatchProps, ownProps) {
      var nextMergedProps = mergeProps(stateProps, dispatchProps, ownProps);

      if (hasRunOnce) {
        if (!pure || !areMergedPropsEqual(nextMergedProps, mergedProps)) mergedProps = nextMergedProps;
      } else {
        hasRunOnce = true;
        mergedProps = nextMergedProps;

        verifyPlainObject(mergedProps, displayName, 'mergeProps');
      }

      return mergedProps;
    };
  };
}

function whenMergePropsIsFunction(mergeProps) {
  return typeof mergeProps === 'function' ? wrapMergePropsFunc(mergeProps) : undefined;
}

function whenMergePropsIsOmitted(mergeProps) {
  return !mergeProps ? function () {
    return defaultMergeProps;
  } : undefined;
}

var defaultMergePropsFactories = [whenMergePropsIsFunction, whenMergePropsIsOmitted];

function verify(selector, methodName, displayName) {
  if (!selector) {
    throw new Error('Unexpected value for ' + methodName + ' in ' + displayName + '.');
  } else if (methodName === 'mapStateToProps' || methodName === 'mapDispatchToProps') {
    if (!selector.hasOwnProperty('dependsOnOwnProps')) {
      warning('The selector for ' + methodName + ' of ' + displayName + ' did not specify a value for dependsOnOwnProps.');
    }
  }
}

function verifySubselectors(mapStateToProps, mapDispatchToProps, mergeProps, displayName) {
  verify(mapStateToProps, 'mapStateToProps', displayName);
  verify(mapDispatchToProps, 'mapDispatchToProps', displayName);
  verify(mergeProps, 'mergeProps', displayName);
}

function impureFinalPropsSelectorFactory(mapStateToProps, mapDispatchToProps, mergeProps, dispatch) {
  return function impureFinalPropsSelector(state, ownProps) {
    return mergeProps(mapStateToProps(state, ownProps), mapDispatchToProps(dispatch, ownProps), ownProps);
  };
}

function pureFinalPropsSelectorFactory(mapStateToProps, mapDispatchToProps, mergeProps, dispatch, _ref) {
  var areStatesEqual = _ref.areStatesEqual,
      areOwnPropsEqual = _ref.areOwnPropsEqual,
      areStatePropsEqual = _ref.areStatePropsEqual;

  var hasRunAtLeastOnce = false;
  var state = void 0;
  var ownProps = void 0;
  var stateProps = void 0;
  var dispatchProps = void 0;
  var mergedProps = void 0;

  function handleFirstCall(firstState, firstOwnProps) {
    state = firstState;
    ownProps = firstOwnProps;
    stateProps = mapStateToProps(state, ownProps);
    dispatchProps = mapDispatchToProps(dispatch, ownProps);
    mergedProps = mergeProps(stateProps, dispatchProps, ownProps);
    hasRunAtLeastOnce = true;
    return mergedProps;
  }

  function handleNewPropsAndNewState() {
    stateProps = mapStateToProps(state, ownProps);

    if (mapDispatchToProps.dependsOnOwnProps) dispatchProps = mapDispatchToProps(dispatch, ownProps);

    mergedProps = mergeProps(stateProps, dispatchProps, ownProps);
    return mergedProps;
  }

  function handleNewProps() {
    if (mapStateToProps.dependsOnOwnProps) stateProps = mapStateToProps(state, ownProps);

    if (mapDispatchToProps.dependsOnOwnProps) dispatchProps = mapDispatchToProps(dispatch, ownProps);

    mergedProps = mergeProps(stateProps, dispatchProps, ownProps);
    return mergedProps;
  }

  function handleNewState() {
    var nextStateProps = mapStateToProps(state, ownProps);
    var statePropsChanged = !areStatePropsEqual(nextStateProps, stateProps);
    stateProps = nextStateProps;

    if (statePropsChanged) mergedProps = mergeProps(stateProps, dispatchProps, ownProps);

    return mergedProps;
  }

  function handleSubsequentCalls(nextState, nextOwnProps) {
    var propsChanged = !areOwnPropsEqual(nextOwnProps, ownProps);
    var stateChanged = !areStatesEqual(nextState, state);
    state = nextState;
    ownProps = nextOwnProps;

    if (propsChanged && stateChanged) return handleNewPropsAndNewState();
    if (propsChanged) return handleNewProps();
    if (stateChanged) return handleNewState();
    return mergedProps;
  }

  return function pureFinalPropsSelector(nextState, nextOwnProps) {
    return hasRunAtLeastOnce ? handleSubsequentCalls(nextState, nextOwnProps) : handleFirstCall(nextState, nextOwnProps);
  };
}

// TODO: Add more comments

// If pure is true, the selector returned by selectorFactory will memoize its results,
// allowing connectAdvanced's shouldComponentUpdate to return false if final
// props have not changed. If false, the selector will always return a new
// object and shouldComponentUpdate will always return true.

function finalPropsSelectorFactory(dispatch, _ref2) {
  var initMapStateToProps = _ref2.initMapStateToProps,
      initMapDispatchToProps = _ref2.initMapDispatchToProps,
      initMergeProps = _ref2.initMergeProps,
      options = objectWithoutProperties(_ref2, ['initMapStateToProps', 'initMapDispatchToProps', 'initMergeProps']);

  var mapStateToProps = initMapStateToProps(dispatch, options);
  var mapDispatchToProps = initMapDispatchToProps(dispatch, options);
  var mergeProps = initMergeProps(dispatch, options);

  {
    verifySubselectors(mapStateToProps, mapDispatchToProps, mergeProps, options.displayName);
  }

  var selectorFactory = options.pure ? pureFinalPropsSelectorFactory : impureFinalPropsSelectorFactory;

  return selectorFactory(mapStateToProps, mapDispatchToProps, mergeProps, dispatch, options);
}

/*
  connect is a facade over connectAdvanced. It turns its args into a compatible
  selectorFactory, which has the signature:

    (dispatch, options) => (nextState, nextOwnProps) => nextFinalProps
  
  connect passes its args to connectAdvanced as options, which will in turn pass them to
  selectorFactory each time a Connect component instance is instantiated or hot reloaded.

  selectorFactory returns a final props selector from its mapStateToProps,
  mapStateToPropsFactories, mapDispatchToProps, mapDispatchToPropsFactories, mergeProps,
  mergePropsFactories, and pure args.

  The resulting final props selector is called by the Connect component instance whenever
  it receives new props or store state.
 */

function match(arg, factories, name) {
  for (var i = factories.length - 1; i >= 0; i--) {
    var result = factories[i](arg);
    if (result) return result;
  }

  return function (dispatch, options) {
    throw new Error('Invalid value of type ' + (typeof arg === 'undefined' ? 'undefined' : _typeof(arg)) + ' for ' + name + ' argument when connecting component ' + options.wrappedComponentName + '.');
  };
}

function strictEqual(a, b) {
  return a === b;
}

// createConnect with default args builds the 'official' connect behavior. Calling it with
// different options opens up some testing and extensibility scenarios
function createConnect() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref$connectHOC = _ref.connectHOC,
      connectHOC = _ref$connectHOC === undefined ? connectAdvanced : _ref$connectHOC,
      _ref$mapStateToPropsF = _ref.mapStateToPropsFactories,
      mapStateToPropsFactories = _ref$mapStateToPropsF === undefined ? defaultMapStateToPropsFactories : _ref$mapStateToPropsF,
      _ref$mapDispatchToPro = _ref.mapDispatchToPropsFactories,
      mapDispatchToPropsFactories = _ref$mapDispatchToPro === undefined ? defaultMapDispatchToPropsFactories : _ref$mapDispatchToPro,
      _ref$mergePropsFactor = _ref.mergePropsFactories,
      mergePropsFactories = _ref$mergePropsFactor === undefined ? defaultMergePropsFactories : _ref$mergePropsFactor,
      _ref$selectorFactory = _ref.selectorFactory,
      selectorFactory = _ref$selectorFactory === undefined ? finalPropsSelectorFactory : _ref$selectorFactory;

  return function connect(mapStateToProps, mapDispatchToProps, mergeProps) {
    var _ref2 = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

    var _ref2$pure = _ref2.pure,
        pure = _ref2$pure === undefined ? true : _ref2$pure,
        _ref2$areStatesEqual = _ref2.areStatesEqual,
        areStatesEqual = _ref2$areStatesEqual === undefined ? strictEqual : _ref2$areStatesEqual,
        _ref2$areOwnPropsEqua = _ref2.areOwnPropsEqual,
        areOwnPropsEqual = _ref2$areOwnPropsEqua === undefined ? shallowEqual : _ref2$areOwnPropsEqua,
        _ref2$areStatePropsEq = _ref2.areStatePropsEqual,
        areStatePropsEqual = _ref2$areStatePropsEq === undefined ? shallowEqual : _ref2$areStatePropsEq,
        _ref2$areMergedPropsE = _ref2.areMergedPropsEqual,
        areMergedPropsEqual = _ref2$areMergedPropsE === undefined ? shallowEqual : _ref2$areMergedPropsE,
        extraOptions = objectWithoutProperties(_ref2, ['pure', 'areStatesEqual', 'areOwnPropsEqual', 'areStatePropsEqual', 'areMergedPropsEqual']);

    var initMapStateToProps = match(mapStateToProps, mapStateToPropsFactories, 'mapStateToProps');
    var initMapDispatchToProps = match(mapDispatchToProps, mapDispatchToPropsFactories, 'mapDispatchToProps');
    var initMergeProps = match(mergeProps, mergePropsFactories, 'mergeProps');

    return connectHOC(selectorFactory, _extends({
      // used in error messages
      methodName: 'connect',

      // used to compute Connect's displayName from the wrapped component's displayName.
      getDisplayName: function getDisplayName(name) {
        return 'Connect(' + name + ')';
      },

      // if mapStateToProps is falsy, the Connect component doesn't subscribe to store state changes
      shouldHandleStateChanges: Boolean(mapStateToProps),

      // passed through to selectorFactory
      initMapStateToProps: initMapStateToProps,
      initMapDispatchToProps: initMapDispatchToProps,
      initMergeProps: initMergeProps,
      pure: pure,
      areStatesEqual: areStatesEqual,
      areOwnPropsEqual: areOwnPropsEqual,
      areStatePropsEqual: areStatePropsEqual,
      areMergedPropsEqual: areMergedPropsEqual

    }, extraOptions));
  };
}

var connect = createConnect();

var index = { Provider: Provider, connect: connect, connectAdvanced: connectAdvanced };

/* harmony default export */ __webpack_exports__["default"] = (index);
//# sourceMappingURL=preact-redux.esm.js.map

/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(16)))

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.undo = undo;
exports.redo = redo;
exports.resizeDivider = resizeDivider;
exports.setDraggingDivider = setDraggingDivider;
exports.changeWorldRotation = changeWorldRotation;
exports.changeCameraOrientation = changeCameraOrientation;
exports.resetWorldRotationAndCameraOrientation = resetWorldRotationAndCameraOrientation;
exports.disclosureToggle = disclosureToggle;
exports.selectNode = selectNode;
exports.editNode = editNode;
exports.changeText = changeText;
exports.shiftKeyPress = shiftKeyPress;
exports.changeSetting = changeSetting;
var UNDO = exports.UNDO = "UNDO";
var REDO = exports.REDO = "REDO";

var RESIZE_DIVIDER = exports.RESIZE_DIVIDER = "RESIZE_DIVIDER";
var SET_DRAGGING_DIVIDER = exports.SET_DRAGGING_DIVIDER = "SET_DRAGGING_DIVIDER";
//export const CHANGE_SHAPE = "CHANGE_SHAPE";

var CHANGE_WORLD_ROTATION = exports.CHANGE_WORLD_ROTATION = "CHANGE_WORLD_ROTATION";
var CHANGE_CAMERA_ORIENTATION = exports.CHANGE_CAMERA_ORIENTATION = "CHANGE_CAMERA_ORIENTATION";
var RESET_WORLD_ROTATION_AND_CAMERA_ORIENTATION = exports.RESET_WORLD_ROTATION_AND_CAMERA_ORIENTATION = "RESET_WORLD_ROTATION_AND_CAMERA_ORIENTATION";

var DISCLOSURE_TOGGLE = exports.DISCLOSURE_TOGGLE = "DISCLOSURE_TOGGLE";
var SELECT_NODE = exports.SELECT_NODE = "SELECT_NODE";
var EDIT_NODE = exports.EDIT_NODE = "EDIT_NODE";
var CHANGE_TEXT = exports.CHANGE_TEXT = "CHANGE_TEXT";
var SHIFT_KEY_PRESS = exports.SHIFT_KEY_PRESS = "SHIFT_KEY_PRESS";

var CHANGE_SETTING = exports.CHANGE_SETTING = "CHANGE_SETTING";

var undoable = true;
var preserve = true;
var coalesce = true;

function undo() {
	return {
		type: UNDO
	};
}

function redo() {
	return {
		type: REDO
	};
}

function resizeDivider(value) {
	return {
		type: RESIZE_DIVIDER,
		value: value,
		preserve: preserve
	};
}

function setDraggingDivider(draggingDivider) {
	return {
		type: SET_DRAGGING_DIVIDER,
		draggingDivider: draggingDivider
	};
}

function changeWorldRotation(value) {
	return {
		type: CHANGE_WORLD_ROTATION,
		value: value,
		preserve: preserve
	};
}

function changeCameraOrientation(value) {
	return {
		type: CHANGE_CAMERA_ORIENTATION,
		value: value,
		preserve: preserve
	};
}

function resetWorldRotationAndCameraOrientation() {
	return {
		type: RESET_WORLD_ROTATION_AND_CAMERA_ORIENTATION,
		preserve: preserve
	};
}

function disclosureToggle(nodeId) {
	return {
		type: DISCLOSURE_TOGGLE,
		nodeId: nodeId,
		preserve: preserve
	};
}

function selectNode(nodeId) {
	return {
		type: SELECT_NODE,
		nodeId: nodeId,
		preserve: preserve
	};
}

function editNode(nodeId) {
	return {
		type: EDIT_NODE,
		nodeId: nodeId,
		preserve: preserve
	};
}

function changeText(nodeId, text) {
	return {
		type: CHANGE_TEXT,
		nodeId: nodeId,
		text: text,
		undoable: undoable,
		coalesce: coalesce
	};
}

function shiftKeyPress(value) {
	return {
		type: SHIFT_KEY_PRESS,
		value: value
	};
}

function changeSetting(nodeId, value) {
	return {
		type: CHANGE_SETTING,
		nodeId: nodeId,
		value: value,
		undoable: undoable,
		coalesce: coalesce
	};
}

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = function( a ) {
  return ( a === 0 || Math.abs( a ) < 0.000001 );
};


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

var vec3 = __webpack_require__(0).vec3;

function Vertex()
{
  this.halfEdge = undefined;
  this.index = -1;
};

Vertex.prototype.setIndex = function( index ) {
  this.index = index;
};

Vertex.prototype.getIndex = function() {
  return this.index;
};

Vertex.prototype.setHalfEdge = function( halfEdge ) {
  this.halfEdge = halfEdge;
};

Vertex.prototype.getHalfEdge = function() {
  return this.halfEdge;
};

module.exports = Vertex;


/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = function( face ) {
  var originalHalfEdge = he = face.getHalfEdge();
  var halfEdges = [];
  do {
    halfEdges.push( he );
    he = he.getNextHalfEdge();
  } while ( he != originalHalfEdge );
  return halfEdges;
};


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

var vec3 = __webpack_require__(0).vec3;
var Vertex = __webpack_require__(11);
var Edge = __webpack_require__(4);
var HalfEdge = __webpack_require__(6);
var Face = __webpack_require__(5);

function Mesh() {
  this.halfEdges = [];    // Half - check;
  this.vertices = [];     // Vert - check
  this.edges = [];        // Edge - check
  this.faces = [];        // Face - check
  this.boundaries = [];   // Face - not done

  this.positions = [];    // For Faster Rendering
  this.cells = [];        // For Faster Rendering
  this.edgeMap = {}      // ( 1 - 3 ) <==> ( 3 - 1 )
};

Mesh.prototype.getFaces = function() {
  return this.faces;
};

Mesh.prototype.getEdges = function() {
  return this.edges;
};

Mesh.prototype.getEdgeMap = function() {
  return this.edgeMap;
};

Mesh.prototype.getVertices = function() {
  return this.vertices;
};

Mesh.prototype.getHalfEdges = function() {
  return this.halfEdges;
};

Mesh.prototype.getEdgeKey = function( vertexIndex0, vertexIndex1 ) {
  return vertexIndex0 + '-' + vertexIndex1;
};

Mesh.prototype.getEdgeKeys = function( vertexIndex0, vertexIndex1 ) {
  return [
    this.getEdgeKey( vertexIndex0, vertexIndex1 ),
    this.getEdgeKey( vertexIndex1, vertexIndex0 )
   ];
};

Mesh.prototype.containsEdge = function( vertexIndex0, vertexIndex1 ) {
  var edgeMap = this.edgeMap;
  var keys = this.getEdgeKeys( vertexIndex0, vertexIndex1 );

  if( edgeMap[ keys[ 0 ] ] !== undefined &&
      edgeMap[ keys[ 1 ] ] !== undefined ) {
    return true;
  }
  return false;
};

Mesh.prototype.getEdge = function( vertexIndex0, vertexIndex1 ) {
  var edgeMap = this.edgeMap;
  var keys = this.getEdgeKeys( vertexIndex0, vertexIndex1 );

  if( edgeMap[ keys[ 0 ] ] !== undefined &&
      edgeMap[ keys[ 1 ] ] !== undefined ) {
    return edgeMap[ keys[ 0 ] ];
  }
  return;
};

Mesh.prototype.setPositions = function( positions ) {
  this.positions = positions;
  var len = positions.length;
  for( var i = 0; i < len; i++ ) {
    var vertex = new Vertex();
    vertex.setIndex( i );
    this.vertices.push( vertex );
  }
};

Mesh.prototype.getPositions = function() {
  var results = [];
  var vertices = this.vertices;
  var positions = this.positions;
  var len = vertices.length;
  for( var i = 0; i < len; i++ ) {
    var index = vertices[ i ].getIndex();
    results.push( positions[ index ] );
  }
  return results;
};

Mesh.prototype.setCells = function( cells ) {
  this.cells = cells.slice();
  var len = cells.length;
  for( var i = 0; i < len; i++ ) {
    var face = new Face();
    face.setIndex( i );
    this.faces.push( face );
  }
  this.buildEdgeMap();
};

Mesh.prototype.getCells = function() {
  var results = [];
  var faces = this.faces;
  var vertices = this.vertices;
  var len = faces.length;
  for( var i = 0; i < len; i++ ) {
    var face = faces[ i ];
    var halfEdgeStart = halfEdge = face.getHalfEdge();
    var cell = [];
    do {
      var vertex = halfEdge.getVertex();
      var index = vertex.getIndex();
      cell.push( index );
      halfEdge = halfEdge.getNextHalfEdge();
    } while ( halfEdge != halfEdgeStart );
    results.push( cell );
  }
  return results;
};

Mesh.prototype.buildEdgeMap = function() {
  var cells = this.cells;
  var edges = this.edges;
  var edgeMap = this.edgeMap;

  var len = cells.length;
  for( var i = 0; i < len; i++ ) {
    var cell = cells[ i ];
    var flen = cell.length;

    for( var j = 0; j < flen; j++ ) {
      var i0 = cell[ j ];
      var i1 = cell[ ( j + 1 ) % flen ];

      var key0 = i0 + '-' + i1;
      var key1 = i1 + '-' + i0;

      if( edgeMap[ key0 ] === undefined && edgeMap[ key1 ] === undefined ) {
        var edge = new Edge();
        edge.setIndex( edges.length );
        edges.push( edge );
        edgeMap[ key0 ] = edge;
        edgeMap[ key1 ] = edge;
      }
    }
  }
};

Mesh.prototype.process = function() {
  var edgeMap = this.edgeMap;
  var edges = this.edges;
  var cells = this.cells;
  var vertices = this.vertices;
  var faces = this.faces;
  var halfEdges = this.halfEdges;
  var clen = cells.length;

  for( var faceIndex = 0; faceIndex < clen; faceIndex++ ) {
    var cell = cells[ faceIndex ];
    var face = faces[ faceIndex ];
    var flen = cells[ faceIndex ].length;

    var prevHalfEdge = undefined;
    var firstHalfEdge = undefined;
    for( var vertexIndex = 0; vertexIndex < flen; vertexIndex++ ) {
        var vertexIndexCurr = cell[ vertexIndex ];
        var vertexIndexNext = cell[ ( vertexIndex + 1 ) % flen ];

        var edge = edgeMap[ vertexIndexCurr + '-' + vertexIndexNext ];
        var vertex = vertices[ vertexIndexCurr ];

        //Set Half Edge Properties
        var halfedge = new HalfEdge();
        halfedge.setVertex( vertex );
        halfedge.setFace( face );
        halfedge.setEdge( edge );

        if( edge.getHalfEdge() ) {
          halfedge.setFlipHalfEdge( edge.getHalfEdge() );
          edge.getHalfEdge().setFlipHalfEdge( halfedge );
        }
        else {
          edge.setHalfEdge( halfedge );
        }

        if( prevHalfEdge !== undefined ) {
          prevHalfEdge.setNextHalfEdge( halfedge );
        }
        prevHalfEdge = halfedge;

        if( vertexIndex === 0 ) {
          firstHalfEdge = halfedge;
        }
        halfEdges.push( halfedge );
        //Set Vertex Properties
        vertex.setHalfEdge( halfedge );
    }
    //Set Face Properties
    face.setHalfEdge( firstHalfEdge );
    prevHalfEdge.setNextHalfEdge( firstHalfEdge );
  }
};

module.exports = Mesh;


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

var Face = __webpack_require__(5);
var Edge = __webpack_require__(4);
var HalfEdge = __webpack_require__(6);
var HalfEdgePrev = __webpack_require__(15);
var VertexHalfEdges = __webpack_require__(21);

module.exports = function( mesh, startVertexIndex, endVertexIndex ) {
  // console.log( 'faceIndex:', faceIndex );
  // console.log( 'startVertexIndex:', startVertexIndex );
  // console.log( 'endVertexIndex:', endVertexIndex );

  if( startVertexIndex === endVertexIndex ) {
    throw 'illegal edge inseration: ' + startVertexIndex + ' , ' + endVertexIndex;
  }

  var edges = mesh.getEdges();
  var halfEdges = mesh.getHalfEdges();
  var edgeMap = mesh.getEdgeMap();
  var vertices = mesh.getVertices();
  var faces = mesh.getFaces();
  var edge = mesh.getEdge( startVertexIndex, endVertexIndex );

  if( edge ) {
    // console.log( 'mesh already contains edge: ', mesh.getEdgeKeys( startVertexIndex, endVertexIndex ) );
    return; //{ edge: edge, face: faces[ edge.getHalfEdge().getFace().getIndex() ] };
  }

  var startVertex = vertices[ startVertexIndex ];
  var endVertex = vertices[ endVertexIndex ];

  var cfaces = commonFaces( startVertex, endVertex );
  var clen = cfaces.length;

  var halfEdgeA, halfEdgeB, halfEdgeC, halfEdgeD;

  for( var i = 0; i < clen; i++ ) {
    var face = faces[ cfaces[ i ] ];
    var faceHalfEdge = face.getHalfEdge();
    var he = faceHalfEdge;
    do {
      var vertexIndex = he.getVertex().getIndex();
      // var vertexIndexNext = hef.getVertex().getIndex();

      if( vertexIndex === startVertexIndex ) {
        halfEdgeA = he;
      }

      if( vertexIndex === endVertexIndex ) {
        halfEdgeC = he;
      }

      he = he.getNextHalfEdge();
    } while ( he != faceHalfEdge );

    if( halfEdgeC != undefined || halfEdgeA != undefined ) {
      break;
    }

    halfEdgeC = undefined;
    halfEdgeA = undefined;
  }

  // console.log( halfEdgeC );
  // console.log( halfEdgeA );
  halfEdgeB = HalfEdgePrev( halfEdgeC );
  halfEdgeD = HalfEdgePrev( halfEdgeA );

  if( halfEdgeA === undefined || halfEdgeB === undefined ||
      halfEdgeC === undefined || halfEdgeD === undefined ) {
        throw 'error finding neighboring half edges when inserting edge';
      }

  // Set New Edge Properties
  var newEdge = new Edge();
  newEdge.setIndex( edges.length );
  var edgeKeys = mesh.getEdgeKeys( startVertexIndex, endVertexIndex );
  edgeMap[ edgeKeys[ 0 ] ] = newEdge;
  edgeMap[ edgeKeys[ 1 ] ] = newEdge;
  edges.push( newEdge );

  var newFace = new Face();
  newFace.setIndex( faces.length );
  faces.push( newFace );

  //create new half edges
  var newHalfEdgeAB = new HalfEdge();
  var newHalfEdgeCD = new HalfEdge();

  newHalfEdgeAB.setNextHalfEdge( halfEdgeA );
  newHalfEdgeAB.setFlipHalfEdge( newHalfEdgeCD );
  newHalfEdgeAB.setVertex( endVertex );
  newHalfEdgeAB.setEdge( newEdge );
  newHalfEdgeAB.setFace( face );
  halfEdges.push( newHalfEdgeAB );

  newHalfEdgeCD.setNextHalfEdge( halfEdgeC );
  newHalfEdgeCD.setFlipHalfEdge( newHalfEdgeAB );
  newHalfEdgeCD.setVertex( startVertex );
  newHalfEdgeCD.setEdge( newEdge );
  newHalfEdgeCD.setFace( newFace );
  halfEdges.push( newHalfEdgeCD );

  //set all other edge & halfedge & face properties so they are accurate
  newEdge.setHalfEdge( newHalfEdgeAB );
  face.setHalfEdge( newHalfEdgeAB );
  newFace.setHalfEdge( newHalfEdgeCD );
  halfEdgeD.setNextHalfEdge( newHalfEdgeCD );
  halfEdgeB.setNextHalfEdge( newHalfEdgeAB );
  setHalfEdgeLoopFace( newHalfEdgeCD, newFace );
  setHalfEdgeLoopFace( newHalfEdgeAB, face );
  return { edge: newEdge, face: newFace };
};

function commonFaces( vertex0, vertex1 ) {
  var results = {};
  var hes0 = VertexHalfEdges( vertex0 );
  var hes0l = hes0.length;
  var hes1 = VertexHalfEdges( vertex1 );
  var hes1l = hes1.length;

  for( var i = 0; i < hes0l; i++ ) {
    var he0f = hes0[ i ].getFace();
    for( var j = 0; j < hes1l; j++ ) {
      var he1f = hes1[ j ].getFace();
      if( he0f.getIndex() === he1f.getIndex() ) {
        results[ he0f.getIndex() ] = he1f;
      }
    }
  }
  return Object.keys( results );
}

function setHalfEdgeLoopFace( he, face ) {
  var starthe = he;
  do {
    he.setFace( face );
    he = he.getNextHalfEdge();
  } while ( he != starthe );
}


/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = function( he ) {
  var startHalfEdge = he;
  while ( he.getNextHalfEdge() != startHalfEdge ) {
    he = he.getNextHalfEdge();    
  }
  return he;
};


/***/ }),
/* 16 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = function( a, b, c ) {
  return ( b[ 0 ] - a[ 0 ] ) * ( c[ 1 ] - a[ 1 ] ) -
         ( c[ 0 ] - a[ 0 ] ) * ( b[ 1 ] - a[ 1 ] );
};


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

var greaterThanZero = __webpack_require__(25);
var area2 = __webpack_require__(17);

module.exports = function( a, b, c ) {
  return greaterThanZero( area2( a, b, c ) );
};


/***/ }),
/* 19 */
/***/ (function(module, exports) {

function GLError (rawError, shortMessage, longMessage) {
    this.shortMessage = shortMessage || ''
    this.longMessage = longMessage || ''
    this.rawError = rawError || ''
    this.message =
      'gl-shader: ' + (shortMessage || rawError || '') +
      (longMessage ? '\n'+longMessage : '')
    this.stack = (new Error()).stack
}
GLError.prototype = new Error
GLError.prototype.name = 'GLError'
GLError.prototype.constructor = GLError
module.exports = GLError


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

var Face = __webpack_require__(5);
var Edge = __webpack_require__(4);
var Vertex = __webpack_require__(11);
var HalfEdge = __webpack_require__(6);

var vec3 = __webpack_require__(0).vec3;

module.exports = function( mesh, edgeIndex, position ) {
  // when you create a new vertex
  // you create a new edge
  // you create two new half edges
  // you create a new vertex
  var edges = mesh.getEdges();
  var halfEdges = mesh.getHalfEdges();
  var edgeMap = mesh.getEdgeMap();
  var vertices = mesh.getVertices();
  var positions = mesh.positions;                 //hack fix this <-

  var originalEdge = edges[ edgeIndex ];
  var originalHalfEdge = originalEdge.getHalfEdge();
  var originalHalfEdgeFace = originalHalfEdge.getFace();
  var originalHalfEdgeNext = originalHalfEdge.getNextHalfEdge();
  var originalHalfEdgeFlip = originalHalfEdge.getFlipHalfEdge();

  var originalVertex = originalHalfEdge.getVertex();
  var originalVertexIndex = originalVertex.getIndex();
  var originalVertexPosition = positions[ originalVertexIndex ];

  var originalVertexNext = originalHalfEdgeNext.getVertex();
  var originalVertexNextIndex = originalVertexNext.getIndex();
  var originalVertexNextPosition = positions[ originalVertexNextIndex ];

  var newEdge = new Edge();
  var newVertex = new Vertex();
  var newHalfEdge = new HalfEdge();
  var newHalfEdgeFlip = new HalfEdge();

  //Set New Vertex Properties
  var newVertexIndex = positions.length;
  var newVertexPosition = vec3.create();
  if( position !== undefined ) {
    vec3.copy( newVertexPosition, position );
  }
  else {
    vec3.add( newVertexPosition, originalVertexPosition, originalVertexNextPosition );
    vec3.scale( newVertexPosition, newVertexPosition, 0.5 );
  }

  newVertex.setIndex( newVertexIndex );
  newVertex.setHalfEdge( newHalfEdge );
  positions.push( newVertexPosition );
  vertices.push( newVertex );

  //Set New Half Edge Properties
  newHalfEdge.setVertex( newVertex );
  newHalfEdge.setFace( originalHalfEdgeFace );
  newHalfEdge.setNextHalfEdge( originalHalfEdgeNext );
  newHalfEdge.setFlipHalfEdge( originalHalfEdgeFlip );
  newHalfEdge.setEdge( newEdge );

  // Set Original Half Edge Properties
  originalHalfEdge.setNextHalfEdge( newHalfEdge );
  originalHalfEdge.setFlipHalfEdge( newHalfEdgeFlip );

  //fix Edge map
  var originalEdgeKey0Old = originalVertexIndex + '-' + originalVertexNextIndex;
  var originalEdgeKey1Old = originalVertexNextIndex + '-' + originalVertexIndex;
  delete edgeMap[ originalEdgeKey0Old ];    //deletes edge key
  delete edgeMap[ originalEdgeKey1Old ];    //deletes edge key

  var originalEdgeKey0New = originalVertexIndex + '-' + newVertexIndex;
  var originalEdgeKey1New = newVertexIndex + '-' + originalVertexIndex;

  edgeMap[ originalEdgeKey0New ] = originalEdge;
  edgeMap[ originalEdgeKey1New ] = originalEdge;

  newEdge.setIndex( edges.length );
  edges.push( newEdge );
  newEdge.setHalfEdge( newHalfEdge );

  var newEdgeKey0 = newVertexIndex + '-' + originalVertexNextIndex;
  var newEdgeKey1 = originalVertexNextIndex + '-' + newVertexIndex;

  edgeMap[ newEdgeKey0 ] = newEdge;
  edgeMap[ newEdgeKey1 ] = newEdge;

  // Set original half edge flip properties

  var originalHalfEdgeFlipFace = originalHalfEdgeFlip.getFace();
  var originalHalfEdgeFlipNext = originalHalfEdgeFlip.getNextHalfEdge();
  originalHalfEdgeFlip.setNextHalfEdge( newHalfEdgeFlip );
  originalHalfEdgeFlip.setFlipHalfEdge( newHalfEdge );
  originalHalfEdgeFlip.setEdge( newEdge );

  newHalfEdgeFlip.setNextHalfEdge( originalHalfEdgeFlipNext );
  newHalfEdgeFlip.setFlipHalfEdge( originalHalfEdge );
  newHalfEdgeFlip.setVertex( newVertex );
  newHalfEdgeFlip.setEdge( originalEdge );
  newHalfEdgeFlip.setFace( originalHalfEdgeFlipFace );
  halfEdges.push( newHalfEdgeFlip );

  return newVertex;
}


/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = function( vertex ) {
  var startHalfEdge = originalHalfEdge = he = vertex.getHalfEdge();
  var halfEdges = [];
  do {
    if( he.getNextHalfEdge() === startHalfEdge ) {
      he = he.getFlipHalfEdge();
      startHalfEdge = he;
      halfEdges.push( he );
    }
    else {
      he = he.getNextHalfEdge();
    }
  } while ( he != originalHalfEdge );
  return halfEdges;
};


/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = function( vertex ) {
  var startHalfEdge = originalHalfEdge = he = vertex.getHalfEdge();
  var neighbors = [];
  do {
    if( he.getNextHalfEdge() === startHalfEdge ) {
      neighbors.push( he.getVertex() );
      he = he.getFlipHalfEdge();
      startHalfEdge = he;
    }
    else {
      he = he.getNextHalfEdge();
    }
  } while ( he != originalHalfEdge );
  return neighbors;
};


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.flattenedDepthSelector = exports.exposedIdsSelector = exports.flattenedIdsSelector = exports.collapsedIdsSelector = exports.normalizedTreeDictSelector = exports.presentSelector = undefined;

var _reselect = __webpack_require__(66);

var presentSelector = exports.presentSelector = function presentSelector(state) {
	return state.history.present;
};
var normalizedTreeDictSelector = exports.normalizedTreeDictSelector = function normalizedTreeDictSelector(state) {
	return state.history.present.normalizedTreeDict;
};
var collapsedIdsSelector = exports.collapsedIdsSelector = function collapsedIdsSelector(state) {
	return state.now.collapsedIds;
};

// The following selectors inefficiently calculate each value separately, walking the same set over and over, and would benefit from restructuring the state tree to calculate once, one selector which returns one sub-state-tree containing each individual value. The code is easier this way, however.

var flattenedIdsSelector = exports.flattenedIdsSelector = (0, _reselect.createSelector)([normalizedTreeDictSelector], function (normalizedTreeDict) {
	var result = [];
	populateFlattened(result, normalizedTreeDict, 0);
	return result;
});

var exposedIdsSelector = exports.exposedIdsSelector = (0, _reselect.createSelector)([flattenedIdsSelector, normalizedTreeDictSelector, collapsedIdsSelector], function (flattenedIds, normalizedTreeDict, collapsedIds) {
	var result = [];
	populateExposed(result, normalizedTreeDict, 0, flattenedIds, collapsedIds, 0);
	return result;
});

var flattenedDepthSelector = exports.flattenedDepthSelector = (0, _reselect.createSelector)([normalizedTreeDictSelector, flattenedIdsSelector], function (normalizedTreeDict, flattenedIds) {
	var result = {};
	var nodeId = 0;
	var depth = 0;
	populateFlattenedDepth(result, normalizedTreeDict, nodeId, depth);
	return result;
});

function populateFlattenedDepth(result, normalizedTreeDict, nodeId, depth) {
	result[nodeId] = depth;
	var node = normalizedTreeDict[nodeId];
	var childIds = node.childIds || [];
	var childrenLength = childIds.length;
	for (var childIndex = 0; childIndex < childrenLength; childIndex++) {
		var childId = childIds[childIndex];
		var childNode = normalizedTreeDict[childId];
		if (childNode) populateFlattenedDepth(result, normalizedTreeDict, childId, depth + 1);
	}
}

function populateFlattened(flattenedIds, normalizedTreeDict, nodeId) {
	var node = normalizedTreeDict[nodeId];
	var childIds = node.childIds || [];
	var childrenLength = childIds.length;
	for (var childIndex = 0; childIndex < childrenLength; childIndex++) {
		var childId = childIds[childIndex];
		var childNode = normalizedTreeDict[childId];
		if (childNode) {
			flattenedIds.push(childId);
			populateFlattened(flattenedIds, normalizedTreeDict, childId);
		}
	}
}

function populateExposed(destination, normalizedTreeDict, nodeId, flattenedIds, sortedCollapsedIds, collapsedIndex, ancestorCollapsed) {
	var node = normalizedTreeDict[nodeId];
	var childIds = node.childIds || [];
	var childrenLength = childIds.length;
	var collapsedLength = sortedCollapsedIds.length; //
	for (var childIndex = 0; childIndex < childrenLength; childIndex++) {
		var childId = childIds[childIndex];
		var childNode = normalizedTreeDict[childId];
		if (childNode) {
			var childCollapsed = false;
			while (collapsedIndex < collapsedLength) {
				var collapsedId = sortedCollapsedIds[collapsedIndex];
				var sortFunction = function sortFunction(a, b) {
					var A = flattenedIds.indexOf(a);
					var B = flattenedIds.indexOf(b);
					return A - B;
				};
				var order = sortFunction(childId, collapsedId);
				if (order === 0) {
					childCollapsed = true;
					break;
				} else if (order < 0) break;
				collapsedIndex++;
			}
			if (!ancestorCollapsed) destination.push(childId);
			populateExposed(destination, normalizedTreeDict, childId, flattenedIds, sortedCollapsedIds, collapsedIndex, ancestorCollapsed || childCollapsed);
		}
	}
}

/***/ }),
/* 24 */
/***/ (function(module, exports) {

var cache = {
    '1': bezier1
  , '2': bezier2
  , '3': bezier3
  , '4': bezier4
}

module.exports = neat
module.exports.prepare = prepare

function neat(arr, t) {
  return prepare(arr.length)(arr, t)
}

function prepare(pieces) {
  pieces = +pieces|0
  if (!pieces) throw new Error('Cannot create a interpolator with no elements')
  if (cache[pieces]) return cache[pieces]

  var fn = ['var ut = 1 - t', '']

  var n = pieces
  while (n--) {
    for (var j = 0; j < n; j += 1) {
      if (n+1 === pieces) {
        fn.push('var p'+j+' = arr['+j+'] * ut + arr['+(j+1)+'] * t')
      } else
      if (n > 1) {
        fn.push('p'+j+' = p'+j+' * ut + p'+(j+1)+' * t')
      } else {
        fn.push('return p'+j+' * ut + p'+(j+1)+' * t')
      }
    }
    if (n > 1) fn.push('')
  }

  fn = [
    'return function bezier'+pieces+'(arr, t) {'
    , fn.map(function(s) { return '  ' + s }).join('\n')
    , '}'
  ].join('\n')

  return Function(fn)()
}

//
// Including the first four degrees
// manually - there's a slight performance penalty
// to generated code. It's outweighed by
// the gains of the optimisations, but always
// helps to cover the most common cases :)
//

function bezier1(arr) {
  return arr[0]
}

function bezier2(arr, t) {
  return arr[0] + (arr[1] - arr[0]) * t
}

function bezier3(arr, t) {
  var ut = 1 - t
  return (arr[0] * ut + arr[1] * t) * ut + (arr[1] * ut + arr[2] * t) * t
}

function bezier4(arr, t) {
  var ut = 1 - t
  var a1 = arr[1] * ut + arr[2] * t
  return ((arr[0] * ut + arr[1] * t) * ut + a1 * t) * ut + (a1 * ut + (arr[2] * ut + arr[3] * t) * t) * t
}


/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports = function( a ) {
  return a > 0.00001;
};


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

var isColinear = __webpack_require__(27);
var isLeft = __webpack_require__(18);

module.exports = function( a, b, c, d ) {
  if( isColinear( a, b, c ) || isColinear( a, b, d ) || isColinear( c, d, a ) || isColinear( c, d, b ) ) {
    return false;
  }
  if( isLeft( a, b, c ) != isLeft( a, b, d ) &&
      isLeft( c, d, a ) != isLeft( c, d, b ) ) {
      return true;
  }
  return false;
};


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

var isZero = __webpack_require__(10);
var area2 = __webpack_require__(17);

module.exports = function( a, b, c ) {
  return isZero( area2( a, b, c ) );
};


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

var isZero = __webpack_require__(10);

module.exports = function( a, b ) {
  return ( a === b || isZero( a - b ) );
};


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

//1D Functions
exports.greaterThanZero       = __webpack_require__(25);
exports.isEqual               = __webpack_require__(28);
exports.isZero                = __webpack_require__(10);

//2D Functions
exports.area2                 = __webpack_require__(17);
exports.convexHull2           = __webpack_require__(97);
exports.cross2                = __webpack_require__(37);
exports.expandPolygon2        = __webpack_require__(98);
exports.inCone2               = __webpack_require__(38);
exports.intersection2         = __webpack_require__(39);
exports.intersects2           = __webpack_require__(99);
exports.intersectsProper2     = __webpack_require__(26);
exports.isBetween2            = __webpack_require__(40);
exports.isColinear2           = __webpack_require__(27);
exports.isDiagonal2           = __webpack_require__(41);
exports.isDiagonalie2         = __webpack_require__(42);
exports.isEqual2              = __webpack_require__(43);
exports.isLeft2               = __webpack_require__(18);
exports.isLeftOn2             = __webpack_require__(44);
exports.triangulatePolygon2   = __webpack_require__(101);

//3D Functions
exports.isColinear3           = __webpack_require__(100);


/***/ }),
/* 30 */
/***/ (function(module, exports) {

module.exports = function( out, a, b, c ) {
  var abx = b[ 0 ] - a[ 0 ], aby = b[ 1 ] - a[ 1 ], abz = b[ 2 ] - a[ 2 ],
      acx = c[ 0 ] - a[ 0 ], acy = c[ 1 ] - a[ 1 ], acz = c[ 2 ] - a[ 2 ];
  out[ 0 ] = aby * acz - abz * acy;
  out[ 1 ] = abz * acx - abx * acz;
  out[ 2 ] = abx * acy - aby * acx;
  return out;
};


/***/ }),
/* 31 */
/***/ (function(module, exports) {

module.exports = function( out, v ) {
  var length = Math.sqrt( v[ 0 ] * v[ 0 ] + v[ 1 ] * v[ 1 ] + v[ 2 ] * v[ 2 ] );
  out[ 0 ] = v[ 0 ] / length;
  out[ 1 ] = v[ 1 ] / length;
  out[ 2 ] = v[ 2 ] / length;
  return out;
};


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

var Edge = __webpack_require__(4);
var HalfEdge = __webpack_require__(6);
var Face = __webpack_require__(5);

module.exports = function( mesh, vertices, face ) {
  var meshEdgeMap = mesh.getEdgeMap();
  var meshFaces = mesh.getFaces();
  var meshHalfEdges = mesh.getHalfEdges();
  var meshEdges = mesh.getEdges();

  if( !face ) {
    face = new Face();
    face.setIndex( meshFaces.length );
  }

  var vlen = vertices.length;
  var hel;
  var hes = [];
  for( var i = 0; i < vlen; i++ ) {
    var v0 = vertices[ i ];
    var v1 = vertices[ ( i + 1 ) % vlen ];
    var i0 = v0.getIndex();
    var i1 = v1.getIndex();

    var he = new HalfEdge();
    var edge = mesh.getEdge( i0, i1 );
    if( edge ) {
      var het = edge.getHalfEdge();
      var hetv = het.getVertex();
      if( hetv == v0 ) {
        he = het;
      }
      else {
        he.setFlipHalfEdge( het );
        het.setFlipHalfEdge( he );
      }
    }
    else {
      edge = new Edge();
      var keys = mesh.getEdgeKeys( i0, i1 );
      edge.setIndex( meshEdges.length );
      meshEdges.push( edge );
      edge.setHalfEdge( he );
      meshEdgeMap[ keys[ 0 ] ] = edge;
      meshEdgeMap[ keys[ 1 ] ] = edge;
    }

    //he
    he.setEdge( edge );
    he.setFace( face );
    he.setVertex( v0 );
    if( hel ) {
      hel.setNextHalfEdge( he );
    }

    //v
    v0.setHalfEdge( he );

    hes.push( he );
    hel = he;
    meshHalfEdges.push( he );
  }
  face.setHalfEdge( hes[ 0 ] );
  hel.setNextHalfEdge( hes[ 0 ] );
  return face;
}


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

var vec3 = __webpack_require__(0).vec3;

module.exports = function( mesh ) {
  var center = vec3.create();
  var positions = mesh.positions;
  var plen = positions.length;
  for( var i = 0; i < plen; i++ ) {
    vec3.add( center, center, positions[ i ] );
  }
  vec3.scale( center, center, 1.0 / plen );
  return center; 
};


/***/ }),
/* 34 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(process) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__createStore__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__combineReducers__ = __webpack_require__(184);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__bindActionCreators__ = __webpack_require__(183);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__applyMiddleware__ = __webpack_require__(182);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__compose__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__utils_warning__ = __webpack_require__(65);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "createStore", function() { return __WEBPACK_IMPORTED_MODULE_0__createStore__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "combineReducers", function() { return __WEBPACK_IMPORTED_MODULE_1__combineReducers__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "bindActionCreators", function() { return __WEBPACK_IMPORTED_MODULE_2__bindActionCreators__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "applyMiddleware", function() { return __WEBPACK_IMPORTED_MODULE_3__applyMiddleware__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "compose", function() { return __WEBPACK_IMPORTED_MODULE_4__compose__["a"]; });







/*
* This is a dummy function to check if the function name has been altered by minification.
* If the function has been minified and NODE_ENV !== 'production', warn the user.
*/
function isCrushed() {}

if (process.env.NODE_ENV !== 'production' && typeof isCrushed.name === 'string' && isCrushed.name !== 'isCrushed') {
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__utils_warning__["a" /* default */])('You are currently using minified code outside of NODE_ENV === \'production\'. ' + 'This means that you are running a slower development build of Redux. ' + 'You can use loose-envify (https://github.com/zertosh/loose-envify) for browserify ' + 'or DefinePlugin for webpack (http://stackoverflow.com/questions/30030031) ' + 'to ensure you have the correct code for your production build.');
}


/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(62)))

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.meshSelector = exports.debuggingSelector = exports.settingsSelector = undefined;

var _reselect = __webpack_require__(66);

var _selectors = __webpack_require__(23);

// Selectors are really tedious here, especially for simple, non-array values which should just be calculated.
// Functions for each angle and slice length might be a bit excessive too

var mda = __webpack_require__(161);
var Mesh = mda.Mesh;
var move = mda.MoveOperator;
var vec3 = __webpack_require__(0).vec3;
//const check = mda.MeshIntegrity;
//const createFace = mda.CreateFaceOperator;
//const bezier = require("bezier");
var cubic = __webpack_require__(24).prepare(4);

var plotFancy = true; // beam sub triangles, both plotFancy and extraFancy have to be true
var extraFancy = true; // beam sub triangles subdivided into even more sub triangle strips
var fakeExtrude = true; // TODO: create a proper face with more than just 3 half edges to extrude

var half = Math.PI;
var quarter = half / 2;

//const d2r = Math.PI / 180; // debug
//const r2d = 180 / Math.PI; // debug

var settingsSelector = exports.settingsSelector = (0, _reselect.createSelector)([_selectors.normalizedTreeDictSelector], function (normalizedTreeDict) {
	var settings = {};
	Object.keys(normalizedTreeDict).forEach(function (key) {
		if (isNaN(key)) {
			settings[key] = normalizedTreeDict[key].value;
		}
	});
	return settings;
});
var sphereFractionSelector = (0, _reselect.createSelector)([settingsSelector], function (settings) {
	return settings.sphereFraction;
});
//const beamCountSelector = createSelector([settingsSelector], settings => settings.beamCount * 1);
var beamCountSelector = (0, _reselect.createSelector)([settingsSelector, sphereFractionSelector], function (settings, sphereFraction) {
	return Math.max(1, Math.min(32, sphereFraction === "quarter" ? Math.floor(settings.beamCount * 1) : settings.beamCount * 1));
});
var wavyCountSelector = (0, _reselect.createSelector)([settingsSelector], function (settings) {
	return Math.max(1, Math.min(32, settings.wavyCount * 1));
});
var wavyScaleSelector = (0, _reselect.createSelector)([settingsSelector], function (settings) {
	return Math.max(1, Math.min(32, settings.wavyScale * 1));
});
var wavyAmountSelector = (0, _reselect.createSelector)([settingsSelector], function (settings) {
	return Math.max(1, Math.min(32, settings.wavyAmount * 1));
});
var resolutionSelector = (0, _reselect.createSelector)([settingsSelector], function (settings) {
	return Math.max(1, Math.min(100, settings.resolution * 1));
}); // segments per quarter circle, for both latitude and longitude
var ringsSelector = (0, _reselect.createSelector)([resolutionSelector], function (resolution) {
	return resolution * 1;
}); // latitude // stacked ring layers
var radiusSelector = (0, _reselect.createSelector)([settingsSelector], function (settings) {
	return settings.radius * 1;
});
var sunRatioSelector = (0, _reselect.createSelector)([settingsSelector], function (settings) {
	return settings.sunRatio * 1;
});
var starRatioSelector = (0, _reselect.createSelector)([settingsSelector], function (settings) {
	return settings.starRatio * 1;
});
var horizonRatioSelector = (0, _reselect.createSelector)([settingsSelector], function (settings) {
	return settings.horizonRatio * 1;
});
var beamTopExtendedSelector = (0, _reselect.createSelector)([settingsSelector], function (settings) {
	return settings.beamTopExtended * 1;
});
var baseHeightSelector = (0, _reselect.createSelector)([settingsSelector], function (settings) {
	return settings.baseHeight * 1;
});
var x0Selector = (0, _reselect.createSelector)([settingsSelector], function (settings) {
	return settings.x0 * 1;
});
var y0Selector = (0, _reselect.createSelector)([settingsSelector], function (settings) {
	return settings.y0 * 1;
});
var x1Selector = (0, _reselect.createSelector)([settingsSelector], function (settings) {
	return settings.x1 * 1;
});
var y1Selector = (0, _reselect.createSelector)([settingsSelector], function (settings) {
	return settings.y1 * 1;
});
var useFlameBezierSelector = (0, _reselect.createSelector)([settingsSelector], function (settings) {
	return settings.useFlameBezier;
});
var flatTopSelector = (0, _reselect.createSelector)([settingsSelector], function (settings) {
	return settings.flatTop;
});
var splitBeamsSelector = (0, _reselect.createSelector)([settingsSelector], function (settings) {
	return settings.splitBeams;
});

var debugLeftSelector = (0, _reselect.createSelector)([settingsSelector], function (settings) {
	return settings.debugLeft;
});
var debugRightSelector = (0, _reselect.createSelector)([settingsSelector], function (settings) {
	return settings.debugRight;
});
var debugTopSelector = (0, _reselect.createSelector)([settingsSelector], function (settings) {
	return settings.debugTop;
});
var debugBottomSelector = (0, _reselect.createSelector)([settingsSelector], function (settings) {
	return settings.debugBottom;
});
var debugEvenSelector = (0, _reselect.createSelector)([settingsSelector], function (settings) {
	return settings.debugEven;
});
var debugOddSelector = (0, _reselect.createSelector)([settingsSelector], function (settings) {
	return settings.debugOdd;
});
var debugFirstSelector = (0, _reselect.createSelector)([settingsSelector], function (settings) {
	return settings.debugFirst;
});
var debugLastSelector = (0, _reselect.createSelector)([settingsSelector], function (settings) {
	return settings.debugLast;
});
var debugBaseSelector = (0, _reselect.createSelector)([settingsSelector], function (settings) {
	return settings.debugBase;
});
var debuggingSelector = exports.debuggingSelector = (0, _reselect.createSelector)([debugLeftSelector, debugRightSelector, debugTopSelector, debugBottomSelector, debugEvenSelector, debugOddSelector, debugFirstSelector, debugLastSelector, debugBaseSelector], function (debugLeft, debugRight, debugTop, debugBottom, debugEven, debugOdd, debugFirst, debugLast, debugBase) {
	return debugLeft || debugRight || debugTop || debugBottom || debugEven || debugOdd || debugFirst || debugLast || debugBase;
});

var sunRadiusSelector = (0, _reselect.createSelector)([radiusSelector, horizonRatioSelector], function (radius, horizonRatio) {
	return radius * horizonRatio;
});

var sunHeightSelector = (0, _reselect.createSelector)([sunRadiusSelector, sunRatioSelector], function (sunRadius, sunRatio) {
	return sunRadius * sunRatio;
});

// const starHeightSelector = createSelector(
// 	[sunHeightSelector, starRatioSelector],
// 	(sunHeight, starRatio) => {
// 		return sunHeight * starRatio;
// 	}
// );

var wavySelector = (0, _reselect.createSelector)([wavyCountSelector], function (wavyCount) {
	//return x * Math.sin(wavyCount * x)/Math.PI*2;

});

var arcRadiansSelector = (0, _reselect.createSelector)([sphereFractionSelector], function (sphereFraction) {
	if (sphereFraction === "whole") return Math.PI * 2.0;
	if (sphereFraction === "half") return Math.PI;
	return Math.PI / 2.0;
});

var slicesSelector = (0, _reselect.createSelector)( // longitude // pie slices. subtract a slice from the sun
[sphereFractionSelector, resolutionSelector, beamCountSelector], function (sphereFraction, resolution, beamCount) {
	// TODO: need to handle zero beamCount
	var result = resolution;
	var division = 1.0 * resolution / beamCount;
	var ceiled = Math.ceil(division);
	var isIntegral = ceiled === division;
	if (!isIntegral) result = ceiled * beamCount;
	if (sphereFraction === "whole") return result * 8;
	if (sphereFraction === "half") return result * 4;
	return result * 2; // quarter // Times two for the valleys
});
var sliceDeltaSelector = (0, _reselect.createSelector)([sphereFractionSelector, slicesSelector], function (sphereFraction, slices) {
	if (sphereFraction === "quarter") return Math.PI / slices / 2;
	if (sphereFraction === "half") return Math.PI / slices;
	return Math.PI / slices * 2; // whole
});

var fullBeamCountSelector = (0, _reselect.createSelector)([sphereFractionSelector, beamCountSelector], function (sphereFraction, beamCount) {
	if (sphereFraction === "whole") return beamCount * 4;
	if (sphereFraction === "half") return beamCount * 2;
	return beamCount; // quarter
});

// const starBasePointsSelector = createSelector(
// 	[arcRadiansSelector, fullBeamCountSelector, radiusSelector, sunRadiusSelector, baseHeightSelector],
// 	(arcRadians, fullBeamCount, radius, sunRadius, baseHeight) => {
// 		const r = radius;
// 		const r2 = sunRadius;
// 		const divisions = fullBeamCount * 2;
// 		const points = [];
// 		const z = 0;
// 		points.push([0,0,z]);
// 		for (let i = 0; i <= divisions; i++) {
// 			const a = i / divisions * arcRadians;
// 			const r3 = (i % 2) ? r2 : r;
// 			const x = Math.cos(a) * r3;
// 			const y = Math.sin(a) * r3;
// 			points.push([x, y, z]);
// 		}
// 		return points;
// 	}
// );

// function sunHeight(radius, sunRatio, horizonRatio) {
// 	return radius * sunRatio * horizonRatio;
// }

function starHeight(sunHeight, starRatio) {
	return sunHeight * starRatio;
}

function starTipAngle(radius, starHeight) {
	var opposite = starHeight;
	var adjacent = radius;
	var hypotenuse = Math.hypot(opposite, adjacent);
	var ratio = opposite / hypotenuse;
	var value = Math.asin(ratio); // between -1 and 1
	return value;
}

function starTopAngle(radius, starHeight) {
	var angle = starTipAngle(radius, starHeight);
	return quarter - angle;
}

function calculatedStarRadiusAtTheta(theta, slices, arcRadians, fullBeamCount, fullRadius, sunRadius) {
	// "step 1"
	var divisions = fullBeamCount * 2; // 2 divisions per beam
	var aboveCenterDivisionTheta = 1 / divisions * arcRadians; // from above, slice angle per division
	var aboveCenterBeamTheta = 1 / fullBeamCount * arcRadians; // should just simply be aboveCenterDivisionTheta * 2
	var aboveCenterMidwayTheta = theta % aboveCenterDivisionTheta;
	var aboveCenterNormalizedTheta = theta % aboveCenterBeamTheta;
	if (aboveCenterNormalizedTheta >= aboveCenterDivisionTheta) aboveCenterMidwayTheta = aboveCenterDivisionTheta - aboveCenterMidwayTheta;
	var firstStarValleyX = Math.cos(aboveCenterDivisionTheta) * sunRadius;
	var firstStarValleyY = Math.sin(aboveCenterDivisionTheta) * sunRadius;
	var aboveTipOpposite = firstStarValleyY; // opposite side length of the tip when viewed from above
	var aboveTipAdjacent = fullRadius - firstStarValleyX; // adjacent side length of the tip when viewed from above
	var aboveTipHypotenuse = Math.hypot(aboveTipOpposite, aboveTipAdjacent); // hypotenuse length of the tip when viewed from above
	var aboveTipTheta = Math.asin(aboveTipOpposite / aboveTipHypotenuse); // angle of beam tip of division (half beam)
	var C = aboveCenterMidwayTheta;
	var B = aboveTipTheta;
	var a = fullRadius;
	var A = half - B - C;
	var b = a * Math.sin(B) / Math.sin(A); // ASA and law of sines to determine "step 1" length, a/sin(A) = b/sin(B) = c/sin(C)
	return b;
}

var beamThetaArraySelector = (0, _reselect.createSelector)( // step 2
[slicesSelector, arcRadiansSelector, fullBeamCountSelector, radiusSelector, sunRadiusSelector, sliceDeltaSelector, sunRatioSelector, starRatioSelector, horizonRatioSelector], function (slices, arcRadians, fullBeamCount, radius, sunRadius, sliceDelta, sunRatio, starRatio, horizonRatio) {
	var divisions = fullBeamCount * 2;
	var per = slices / divisions;
	var points = [];
	for (var i = 0; i <= per; i++) {
		var theta = i * sliceDelta;
		var starRadius = calculatedStarRadiusAtTheta(theta, slices, arcRadians, fullBeamCount, radius, sunRadius);
		// 			if (false && i === per) starRadius = sunR; // yes
		var sunR = radius * horizonRatio;
		var starH = starHeight(sunR, starRatio);
		var angleH = starTopAngle(starRadius, starH);
		var c = starH;
		var b = sunR;
		var B = angleH;
		var C = Math.asin(c / b * Math.sin(B));
		var A = half - B - C;
		var result = quarter - A;
		// 			if (false && i === per) points.push(0); // yes
		// 			else
		points.push(result);
	}
	return points;
});

var beamFullTopThetaSelector = (0, _reselect.createSelector)( // not isosceles if squashed
[radiusSelector, sunRatioSelector, starRatioSelector, beamTopExtendedSelector, horizonRatioSelector, sunRadiusSelector], function (radius, sunRatio, starRatio, beamTopExtended, horizonRatio, sunRadius) {
	var sunH = radius * horizonRatio;
	var starH = starHeight(sunH, starRatio);
	var angleH = starTopAngle(radius, starH, null, horizonRatio);
	var c = starH;
	var b = sunH;
	var B = angleH;
	var C = Math.asin(c / b * Math.sin(B));
	var A = half - B - C;
	var result = quarter - A;
	return result;
});

var ringDeltaTopSelector = (0, _reselect.createSelector)([resolutionSelector, beamFullTopThetaSelector], function (resolution, beamTopTheta) {
	var minus = quarter - beamTopTheta;
	var result = minus / resolution;
	return result;
});

var beamLengthVertexCountSelector = (0, _reselect.createSelector)([ringsSelector], // fullBeamCountSelector, slicesSelector],
function (rings) {
	//, fullBeamCount, slices) => {
	//const divisions = fullBeamCount * 2;
	//const per = slices / divisions;
	//return per;
	return rings;
});

var bottomFaceIndicesSelector = (0, _reselect.createSelector)([sphereFractionSelector, ringsSelector, slicesSelector, beamThetaArraySelector, fullBeamCountSelector, beamLengthVertexCountSelector, splitBeamsSelector], function (sphereFraction, rings, slices, beamThetaArray, fullBeamCount, beamLengthVertexCount, splitBeams) {

	var bottomFaceIndices = [];
	var divisions = fullBeamCount * 2;
	var per = slices / divisions;
	var intersectionAreaRings = beamThetaArray.length - 1;
	var anchor = (rings + intersectionAreaRings + 1) * (slices + 1);
	var tips = anchor + 1;
	var extraFancyStart = (rings + intersectionAreaRings + 1) * (slices + 1) + 1 + fullBeamCount + 1;
	var lastEdgeCount = Math.floor((slices + per) / (per * 2));
	var firstBeamEndsStart = lastEdgeCount * beamLengthVertexCount * 2 + extraFancyStart + (slices + 1) * beamLengthVertexCount * 2;
	var lastBeamEndsStart = firstBeamEndsStart + intersectionAreaRings * beamLengthVertexCount;

	if (sphereFraction !== "whole") {
		// first beam ends

		bottomFaceIndices.push(anchor);

		var firstRoot = (rings + intersectionAreaRings) * (slices + 1);
		bottomFaceIndices.push(firstRoot);
		if (splitBeams) {
			//const location = extraFancyStart + beamLengthVertexCount;
			var location = firstBeamEndsStart + (intersectionAreaRings - 1) * beamLengthVertexCount;
			for (var a = 1; a < beamLengthVertexCount; a++) {
				var nextVertex = location + a;
				bottomFaceIndices.push(nextVertex);
			}
		}
	}

	if (plotFancy || extraFancy) for (var j = 0; j < slices; j++) {
		// new beam indices
		var larger = !splitBeams ? (j + per) % (per * 2) : j % (per * 2);
		var smaller = j % per;
		var i = smaller;
		var division = Math.floor(j / per);
		var tipNumber = !splitBeams ? Math.floor(division / 2) : Math.ceil(division / 2);
		var tipIndex = tips + tipNumber;
		var isLastEdgeBeforeBeamValleyToSneakInOneMore = !splitBeams ? !((j + 1) % (per * 2)) : !((j + 1 + per) % (per * 2));
		var notLastEdge = !isLastEdgeBeforeBeamValleyToSneakInOneMore;
		var isBeamValley = !splitBeams ? !(j % (per * 2)) : !((j + per) % (per * 2));
		if (larger < per) {
			if (isLastEdgeBeforeBeamValleyToSneakInOneMore) {
				var additionalDueToBeamValleysHavingTwoLines = !splitBeams ? Math.floor(j / (per * 2)) : Math.floor((j + per) / (per * 2));
				var slice = j + additionalDueToBeamValleysHavingTwoLines;
				var _location = extraFancyStart;
				var nextLocation = _location;
				var nextSlice = slice + 1;
				var nextLevel = nextSlice * beamLengthVertexCount * 2;
				var _a = beamLengthVertexCount;
				while (_a--) {
					var nextSecond = nextLocation + nextLevel + _a;
					bottomFaceIndices.push(nextSecond);
				}
			}
		}
		if (larger >= per) {
			if (isBeamValley) {
				// && (splitBeams || j > 0)) {
				if (notLastEdge) i = per - i;
				var _additionalDueToBeamValleysHavingTwoLines = !splitBeams ? Math.floor(j / (per * 2)) : Math.floor((j + per) / (per * 2));
				var _slice = j + _additionalDueToBeamValleysHavingTwoLines;
				var _location2 = extraFancyStart;
				var level = _slice * beamLengthVertexCount * 2;
				var k = (rings + intersectionAreaRings) * (slices + 1);
				var twoRoot = k + j;
				bottomFaceIndices.push(twoRoot);
				for (var _a2 = 0; _a2 < beamLengthVertexCount; _a2++) {
					var nextFirst = _location2 + level + _a2;
					bottomFaceIndices.push(nextFirst);
				}
			}
		}
	}

	if (sphereFraction !== "whole") {
		// last beam ends
		if (splitBeams) {
			//const location = extraFancyStart + (slices + lastEdgeCount) * beamLengthVertexCount * 2 + beamLengthVertexCount;
			var _location3 = lastBeamEndsStart + (intersectionAreaRings - 1) * beamLengthVertexCount;
			var _a3 = beamLengthVertexCount;
			while (--_a3) {
				var _nextVertex = _location3 + _a3;
				bottomFaceIndices.push(_nextVertex);
			}
		}
		var lastRoot = (rings + intersectionAreaRings) * (slices + 1) + slices;
		bottomFaceIndices.push(lastRoot);
		bottomFaceIndices.push(anchor);
	}

	return bottomFaceIndices;
});

function resolveBezier(useFlameBezier, x0, y0, x1, y1, fromX, fromY, toX, toY, loc, per, length, direction, isTipSliceOrEnd, wavyCount, wavyScale, wavyAmount) {
	var wavyX = 0;
	var wavyY = 0;
	var waveX = 1;
	var waveY = 1;

	var xxx = fromX + (toX - fromX) * loc / per;
	var yyy = fromY + (toY - fromY) * loc / per;

	var beamAngle = Math.atan2(toY - fromY, toX - fromX);
	var eighth = Math.PI / 4;
	var difference = beamAngle - eighth;
	if (typeof direction === "undefined") direction === 1;
	var amount = loc / per;

	if (wavyAmount) {
		//wavyX = x * Math.cos(wavyCount * x)/Math.PI*2;
		//wavyY = y * Math.sin(wavyCount * y)/Math.PI*2;
	}

	if (isTipSliceOrEnd || !useFlameBezier) {
		if (wavyAmount && isTipSliceOrEnd) {}
		// 		const xx = (fromX + (toX - fromX) * loc / per);
		// 		const yy = (fromY + (toY - fromY) * loc / per);
		if (wavyAmount && isTipSliceOrEnd) {
			//return x * Math.sin(wavyCount * x)/Math.PI*2;
			//wavyX = xx * Math.cos(wavyCount * xx)/Math.PI*2;
			//wavyY = yy * Math.sin(wavyCount * yy)/Math.PI*2;

		}
		return [wavyX + xxx, wavyY + yyy];
	}

	var X = [0, direction < 0 ? y0 : x0, direction < 0 ? y1 : x1, 1];
	var Y = [0, direction < 0 ? x0 : y0, direction < 0 ? x1 : y1, 1];
	var x = cubic(X, amount);
	var y = cubic(Y, amount);
	var bezierAngle = Math.atan2(y, x) + difference;
	//const bezierAngle = Math.atan2(yyy,xxx) + difference;
	var xx = wavyX + fromX + Math.cos(bezierAngle) * length * amount;
	var yy = wavyY + fromY + Math.sin(bezierAngle) * length * amount;
	var result = [xx, yy];

	return result;
}

function lengthOfEdge(firstPoint, tipPoint) {
	return Math.hypot(firstPoint[0] - tipPoint[0], firstPoint[1] - tipPoint[1]);
}

var sunVerticesSelector = (0, _reselect.createSelector)([ringsSelector, slicesSelector, sliceDeltaSelector, sunRadiusSelector, sunHeightSelector, ringDeltaTopSelector, beamFullTopThetaSelector, beamThetaArraySelector, fullBeamCountSelector, arcRadiansSelector, radiusSelector, sphereFractionSelector, baseHeightSelector, bottomFaceIndicesSelector, x0Selector, y0Selector, x1Selector, y1Selector, useFlameBezierSelector, beamLengthVertexCountSelector, splitBeamsSelector, wavyCountSelector, wavyScaleSelector, wavyAmountSelector], function (rings, slices, sliceDelta, sunRadius, sunHeight, ringDeltaTop, beamFullTopTheta, beamThetaArray, fullBeamCount, arcRadians, radius, sphereFraction, baseHeight, bottomFaceIndices, x0, y0, x1, y1, useFlameBezier, beamLengthVertexCount, splitBeams, wavyCount, wavyScale, wavyAmount) {
	var vertexData = [];
	for (var i = 0; i < rings; i++) {
		// latitude // stacked layers // the cap
		var theta = i * ringDeltaTop; // need two passes, above beam top and below beam top.
		var cosTheta = Math.cos(theta);
		var sinTheta = Math.sin(theta);
		for (var j = 0; j <= slices; j++) {
			// longitude // slices
			var phi = j * sliceDelta;
			var cosPhi = Math.cos(phi);
			var sinPhi = Math.sin(phi);
			var x = cosPhi * sinTheta;
			var z = cosTheta;
			var y = sinPhi * sinTheta;
			vertexData.push([x * sunRadius, y * sunRadius, z * sunHeight]); // scaling z axis
		}
	}

	var intersectionAreaRings = beamThetaArray.length - 1;
	for (var _i = 0; _i < intersectionAreaRings + 1; _i++) {
		// latitude // stacked layers // the intersection area
		var _theta = quarter - beamThetaArray[_i];
		var _cosTheta = Math.cos(_theta);
		var _sinTheta = Math.sin(_theta);
		for (var _j = 0; _j <= slices; _j++) {
			// longitude // slices
			var _phi = _j * sliceDelta;
			var _cosPhi = Math.cos(_phi);
			var _sinPhi = Math.sin(_phi);
			var _x = _cosPhi * _sinTheta;
			var _z = _cosTheta;
			var _y = _sinPhi * _sinTheta;
			vertexData.push([_x * sunRadius, _y * sunRadius, _z * sunHeight]);
		}
	}

	// ANCHOR VERTEX
	vertexData.push([0, 0, 0]); // anchor

	// BEAM TIP VERTICES
	var tipCount = fullBeamCount + 1;
	for (var _i2 = 0; _i2 < tipCount; _i2++) {
		// points
		var a = _i2 / fullBeamCount * arcRadians + (splitBeams ? 0 : 1 / fullBeamCount * arcRadians * 0.5);
		var _x2 = Math.cos(a) * radius;
		var _y2 = Math.sin(a) * radius;
		vertexData.push([_x2, _y2, 0]);
	}

	// BEAM VARIABLES
	var divisions = fullBeamCount * 2;
	var per = slices / divisions;
	var anchor = (rings + intersectionAreaRings + 1) * (slices + 1);
	var tips = anchor + 1;

	// DEBUG:
	// 		const extraFancyStart = (rings+intersectionAreaRings+1) * (slices+1) + 1 + fullBeamCount + 1;
	// 		const lastEdgeCount = Math.floor((slices + per) / (per * 2));
	// 		const firstBeamEndsStart = lastEdgeCount * per * 2 + extraFancyStart + (slices+1) * per * 2;
	// 		const lastBeamEndsStart = firstBeamEndsStart + intersectionAreaRings * per;
	// 		const firstBeamEndsStart = lastEdgeCount * beamLengthVertexCount * 2 + extraFancyStart + (slices+1) * beamLengthVertexCount * 2;
	// 		const lastBeamEndsStart = firstBeamEndsStart + intersectionAreaRings * beamLengthVertexCount;
	// 		const pedestalStart = (sphereFraction === "whole" || !splitBeams) ? firstBeamEndsStart : lastBeamEndsStart + intersectionAreaRings * beamLengthVertexCount;
	// 		const sunUndersideStart = (fakeExtrude && baseHeight > 0) ? pedestalStart + bottomFaceIndices.length : (rings+intersectionAreaRings) * (slices + 1);
	// 		const underAnchorLoc = sunUndersideStart + slices + 1;

	// BEAM SEGMENT VERTICES
	if (extraFancy) for (var _j2 = 0; _j2 <= slices; _j2++) {
		// new beam segment vertices

		var larger = !splitBeams ? (_j2 + per) % (per * 2) : _j2 % (per * 2);
		var smaller = _j2 % per;
		var _i3 = smaller;
		var division = Math.floor(_j2 / per);
		var tipNumber = !splitBeams ? Math.floor(division / 2) : Math.ceil(division / 2);
		var tipIndex = tips + tipNumber;
		var isLastEdgeBeforeBeamValleyToSneakInOneMore = !splitBeams ? !((_j2 + 1) % (per * 2)) : !((_j2 + 1 + per) % (per * 2));
		var tipPoint = vertexData[tipIndex];

		var pedestal = 0;
		if (fakeExtrude && baseHeight > 0) pedestal = -baseHeight;
		if (larger < per) {
			var firstRoot = (rings + _i3) * (slices + 1) + _j2;
			var firstPoint = vertexData[firstRoot];
			var beamSlice = !splitBeams ? tipNumber * per * 2 + per : tipNumber * per * 2;
			var topEdgeLength = lengthOfEdge(firstPoint, tipPoint);
			var isEndPiece = splitBeams && (_j2 === 0 || _j2 === slices);
			var isTipSlice = beamSlice === _j2;
			for (var _a4 = 1; _a4 < beamLengthVertexCount + 1; _a4++) {
				// top side
				//const x = (firstPoint[0] + (tipPoint[0] - firstPoint[0]) * a / beamLengthVertexCount);
				//const y = (firstPoint[1] + (tipPoint[1] - firstPoint[1]) * a / beamLengthVertexCount);
				//const regular = [x,y];
				//const value = (isTipSlice || isEndPiece) ? regular : resolveBezier(x0,y0,x1,y1,firstPoint[0],firstPoint[1],tipPoint[0],tipPoint[1],a,beamLengthVertexCount,topEdgeLength,1, isTipSlice || isEndPiece, wavyCount, wavyScale, wavyAmount);
				var value = resolveBezier(useFlameBezier, x0, y0, x1, y1, firstPoint[0], firstPoint[1], tipPoint[0], tipPoint[1], _a4, beamLengthVertexCount, topEdgeLength, 1, isTipSlice || isEndPiece, wavyCount, wavyScale, wavyAmount);
				vertexData.push([
				//(useFlameBezier ? value[0] : x),
				//(useFlameBezier ? value[1] : y),
				value[0], value[1], firstPoint[2] + (tipPoint[2] - firstPoint[2]) * _a4 / beamLengthVertexCount]);
			}
			var k = (rings + intersectionAreaRings) * (slices + 1);
			var oneIndex = k + _j2; // same as sun bottom, except j loop is one greater, thus too long
			var onePoint = vertexData[oneIndex];
			var bottomEdgeLength = lengthOfEdge(onePoint, tipPoint);
			for (var _a5 = 1; _a5 < beamLengthVertexCount + 1; _a5++) {
				// underside
				//const x = (onePoint[0] + (tipPoint[0] - onePoint[0]) * a / beamLengthVertexCount);
				//const y = (onePoint[1] + (tipPoint[1] - onePoint[1]) * a / beamLengthVertexCount);
				//const regular = [x,y];
				//const value = (isTipSlice || isEndPiece) ? regular : resolveBezier(x0,y0,x1,y1,onePoint[0],onePoint[1],tipPoint[0],tipPoint[1],a,beamLengthVertexCount,bottomEdgeLength,1, isTipSlice || isEndPiece, wavyCount, wavyScale, wavyAmount);
				var _value = resolveBezier(useFlameBezier, x0, y0, x1, y1, onePoint[0], onePoint[1], tipPoint[0], tipPoint[1], _a5, beamLengthVertexCount, bottomEdgeLength, 1, isTipSlice || isEndPiece, wavyCount, wavyScale, wavyAmount);
				vertexData.push([
				//(useFlameBezier ? value[0] : x),
				//(useFlameBezier ? value[1] : y),
				_value[0], _value[1], onePoint[2] + (tipPoint[2] - onePoint[2]) * _a5 / beamLengthVertexCount + pedestal]);
			}
		}

		if (larger >= per || isLastEdgeBeforeBeamValleyToSneakInOneMore && _j2 < slices) {
			// isLastEdgeBeforeBeamValleyToSneakInOneMore to sneak in one more set of vertices
			var slice = _j2;
			var direction = -1;
			if (isLastEdgeBeforeBeamValleyToSneakInOneMore) {
				// last edge of the new beam segments
				slice++;
				_i3++;
				tipNumber = !splitBeams ? Math.floor(division / 2) : Math.ceil(division / 2);
				tipIndex = tips + tipNumber;
				tipPoint = vertexData[tipIndex];
				direction = 1;
			} else {
				_i3 = per - _i3;
			}
			var _firstRoot = (rings + _i3) * (slices + 1) + slice;
			var _firstPoint = vertexData[_firstRoot];
			var _beamSlice = tipNumber * per * 2;
			//const isTipSlice = false;
			//const isEndPiece = false;
			var _topEdgeLength = lengthOfEdge(_firstPoint, tipPoint);
			for (var _a6 = 1; _a6 < beamLengthVertexCount + 1; _a6++) {
				// top side
				//const x = firstPoint[0] + (tipPoint[0] - firstPoint[0]) * a / beamLengthVertexCount;
				//const y = firstPoint[1] + (tipPoint[1] - firstPoint[1]) * a / beamLengthVertexCount;
				var _value2 = resolveBezier(useFlameBezier, x0, y0, x1, y1, _firstPoint[0], _firstPoint[1], tipPoint[0], tipPoint[1], _a6, beamLengthVertexCount, _topEdgeLength, direction, false, wavyCount, wavyScale, wavyAmount);
				vertexData.push([
				//useFlameBezier ? value[0] : x,
				//useFlameBezier ? value[1] : y,
				_value2[0], _value2[1], _firstPoint[2] + (tipPoint[2] - _firstPoint[2]) * _a6 / beamLengthVertexCount]);
			}
			var _k = (rings + intersectionAreaRings) * (slices + 1);
			var _oneIndex = _k + slice;
			var _onePoint = vertexData[_oneIndex];
			var _bottomEdgeLength = lengthOfEdge(_onePoint, tipPoint);
			for (var _a7 = 1; _a7 < beamLengthVertexCount + 1; _a7++) {
				// underside
				//const x = onePoint[0] + (tipPoint[0] - onePoint[0]) * a / beamLengthVertexCount;
				//const y = onePoint[1] + (tipPoint[1] - onePoint[1]) * a / beamLengthVertexCount;
				var _value3 = resolveBezier(useFlameBezier, x0, y0, x1, y1, _onePoint[0], _onePoint[1], tipPoint[0], tipPoint[1], _a7, beamLengthVertexCount, _bottomEdgeLength, direction, false, wavyCount, wavyScale, wavyAmount);
				vertexData.push([
				//useFlameBezier ? value[0] : x,
				//useFlameBezier ? value[1] : y,
				_value3[0], _value3[1], _onePoint[2] + (tipPoint[2] - _onePoint[2]) * _a7 / beamLengthVertexCount + pedestal]);
			}
		}
	}

	if (extraFancy && sphereFraction !== "whole" && splitBeams) for (var _i4 = 1; _i4 < intersectionAreaRings + 1; _i4++) {
		// beam ends
		var _firstRoot2 = (rings + _i4) * (slices + 1);
		var endPoint = vertexData[_firstRoot2];
		var _tipPoint = vertexData[tips];
		for (var _a8 = 1; _a8 < beamLengthVertexCount + 1; _a8++) {
			vertexData.push([// beam end
			endPoint[0] + (_tipPoint[0] - endPoint[0]) * _a8 / beamLengthVertexCount, endPoint[1] + (_tipPoint[1] - endPoint[1]) * _a8 / beamLengthVertexCount, endPoint[2] + (_tipPoint[2] - endPoint[2]) * _a8 / beamLengthVertexCount]);
		}
	}

	if (extraFancy && sphereFraction !== "whole" && splitBeams) for (var _i5 = 1; _i5 < intersectionAreaRings + 1; _i5++) {
		// beam ends
		var lastRoot = (rings + _i5) * (slices + 1) + slices;
		var _endPoint = vertexData[lastRoot];
		var _tipPoint2 = vertexData[tips + fullBeamCount];
		for (var _a9 = 1; _a9 < beamLengthVertexCount + 1; _a9++) {
			vertexData.push([// beam end
			_endPoint[0] + (_tipPoint2[0] - _endPoint[0]) * _a9 / beamLengthVertexCount, _endPoint[1] + (_tipPoint2[1] - _endPoint[1]) * _a9 / beamLengthVertexCount, _endPoint[2] + (_tipPoint2[2] - _endPoint[2]) * _a9 / beamLengthVertexCount]);
		}
	}

	if (fakeExtrude && baseHeight > 0) {
		var length = bottomFaceIndices.length; // pedestal sides
		for (var _i6 = 0; _i6 < length; _i6++) {
			// pedestal outline (copied)
			var vertex = vertexData[bottomFaceIndices[_i6]];
			vertexData.push([vertex[0], vertex[1], -baseHeight]);
		}
		var _theta2 = Math.PI / 2.0;
		var _sinTheta2 = Math.sin(_theta2);

		for (var _j3 = 0; _j3 <= slices; _j3++) {
			// pedestal sun underside, otherwise using sphere bottom edge vertices
			var _phi2 = _j3 * sliceDelta;
			var _cosPhi2 = Math.cos(_phi2);
			var _sinPhi2 = Math.sin(_phi2);
			var _x3 = _cosPhi2 * _sinTheta2;
			var _y3 = _sinPhi2 * _sinTheta2;
			vertexData.push([_x3 * sunRadius, _y3 * sunRadius, -baseHeight]);
		}

		var anchorVertex = vertexData[anchor];
		vertexData.push([anchorVertex[0], anchorVertex[1], -baseHeight]);
	}

	//deepFreeze(vertexData);
	return vertexData;
});

var sunIndicesSelector = (0, _reselect.createSelector)([sphereFractionSelector, ringsSelector, slicesSelector, beamThetaArraySelector, fullBeamCountSelector, bottomFaceIndicesSelector, baseHeightSelector, flatTopSelector, debugLeftSelector, debugRightSelector, debugTopSelector, debugBottomSelector, debugEvenSelector, debugOddSelector, debugFirstSelector, debugLastSelector, debugBaseSelector, beamLengthVertexCountSelector, splitBeamsSelector], function (sphereFraction, rings, slices, beamThetaArray, fullBeamCount, bottomFaceIndices, baseHeight, flatTop, debugLeft, debugRight, debugTop, debugBottom, debugEven, debugOdd, debugFirst, debugLast, debugBase, beamLengthVertexCount, splitBeams) {

	var indexData = [];
	var divisions = fullBeamCount * 2;
	var per = slices / divisions;
	var intersectionAreaRings = beamThetaArray.length - 1;
	var anchor = (rings + intersectionAreaRings + 1) * (slices + 1);
	var tips = anchor + 1;
	var extraFancyStart = (rings + intersectionAreaRings + 1) * (slices + 1) + 1 + fullBeamCount + 1;
	var lastEdgeCount = Math.floor((slices + per) / (per * 2));
	var firstBeamEndsStart = lastEdgeCount * beamLengthVertexCount * 2 + extraFancyStart + (slices + 1) * beamLengthVertexCount * 2;
	var lastBeamEndsStart = firstBeamEndsStart + intersectionAreaRings * beamLengthVertexCount;
	var pedestalStart = sphereFraction === "whole" || !splitBeams ? firstBeamEndsStart : lastBeamEndsStart + intersectionAreaRings * beamLengthVertexCount;
	var sunUndersideStart = fakeExtrude && baseHeight > 0 ? pedestalStart + bottomFaceIndices.length : (rings + intersectionAreaRings) * (slices + 1);
	var underAnchorLoc = sunUndersideStart + slices + 1;

	for (var i = 0; i < rings; i++) {
		// the cap
		for (var j = 0; j < slices; j++) {
			var first = i * (slices + 1) + j;
			var second = first + slices + 1;
			indexData.push([first, second, first + 1]);
			indexData.push([second, second + 1, first + 1]);
		}
	}

	for (var _i7 = 0; _i7 < intersectionAreaRings; _i7++) {
		// the intersection area
		for (var _j4 = 0; _j4 < slices; _j4++) {
			var _first = (rings + _i7) * (slices + 1) + _j4;
			var _second = _first + slices + 1;
			var larger = !splitBeams ? (_j4 + per) % (per * 2) : _j4 % (per * 2);
			var smaller = _j4 % per;
			var k = smaller;
			if (larger >= per) {
				k = per - k;
				if (!plotFancy || k - 1 >= _i7) indexData.push([_first, _second, _first + 1]);
				if (!plotFancy || k - 1 > _i7) indexData.push([_second, _second + 1, _first + 1]);
			} else {
				if (!plotFancy || k > _i7) indexData.push([_second, _second + 1, _first]);
				if (!plotFancy || k >= _i7) indexData.push([_second + 1, _first + 1, _first]);
			}
		}
	}

	if (plotFancy || extraFancy) for (var _j5 = 0; _j5 < slices; _j5++) {
		// new beam indices

		var _larger = !splitBeams ? (_j5 + per) % (per * 2) : _j5 % (per * 2);
		var _smaller = _j5 % per;
		var _i8 = _smaller;
		var division = Math.floor(_j5 / per);
		var tipNumber = !splitBeams ? Math.floor(division / 2) : Math.ceil(division / 2);
		var tipIndex = tips + tipNumber;
		var isLastEdgeBeforeBeamValleyToSneakInOneMore = !splitBeams ? !((_j5 + 1) % (per * 2)) : !((_j5 + 1 + per) % (per * 2));
		var notLastEdge = !isLastEdgeBeforeBeamValleyToSneakInOneMore;

		if (_larger < per) {
			var firstRoot = (rings + _i8) * (slices + 1) + _j5;
			var secondRoot = (rings + _i8 + 1) * (slices + 1) + _j5 + 1;
			var additionalDueToBeamValleysHavingTwoLines = !splitBeams ? Math.floor(_j5 / (per * 2)) : Math.floor((_j5 + per) / (per * 2));
			var slice = _j5 + additionalDueToBeamValleysHavingTwoLines;
			var location = extraFancyStart;
			var nextLocation = location;
			var level = slice * beamLengthVertexCount * 2;
			var nextSlice = slice + 1;
			var nextLevel = nextSlice * beamLengthVertexCount * 2;
			var _k2 = (rings + intersectionAreaRings) * (slices + 1);
			if (fakeExtrude && baseHeight > 0) _k2 = pedestalStart + bottomFaceIndices.length;
			var underOne = _k2 + _j5;
			var underTwo = underOne + 1;
			if (!extraFancy) {
				indexData.push([secondRoot, firstRoot, tipIndex]); // beam top side
				indexData.push([underOne, underTwo, tipIndex]); // beam underside
			} else {
				var a = 0;
				var midFirst = location + level + a;
				var midSecond = nextLocation + nextLevel + a;
				if ((!debugEven || _j5 % 2 !== 0) && (!debugOdd || _j5 % 2 !== 1)) {
					if (!debugLeft && !debugTop) indexData.push([secondRoot, firstRoot, midSecond]);
					if (!debugRight && !debugTop) indexData.push([firstRoot, midFirst, midSecond]);
					if (!debugLeft && !debugBottom) indexData.push([underOne, underTwo, midSecond + beamLengthVertexCount]);
					if (!debugRight && !debugBottom) indexData.push([underOne, midSecond + beamLengthVertexCount, midFirst + beamLengthVertexCount]);
					for (a = 1; a < beamLengthVertexCount; a++) {
						var previousFirst = location + level + (a - 1);
						var previousSecond = nextLocation + nextLevel + (a - 1);
						var nextFirst = location + level + a;
						var nextSecond = nextLocation + nextLevel + a;
						if (!debugLeft && !debugTop) indexData.push([previousSecond, previousFirst, nextSecond]);

						//if (a < beamLengthVertexCount-1 && !debugRight && !debugTop) indexData.push([previousFirst, nextFirst, nextSecond]);
						if (!debugRight && !debugTop) indexData.push([previousFirst, nextFirst, nextSecond]);

						if (!debugLeft && !debugBottom) indexData.push([previousFirst + beamLengthVertexCount, previousSecond + beamLengthVertexCount, nextSecond + beamLengthVertexCount]);

						//if (a < beamLengthVertexCount-1 && !debugRight && !debugBottom) indexData.push([previousFirst+per, nextSecond+per, nextFirst+per]);
						if (!debugRight && !debugBottom) indexData.push([previousFirst + beamLengthVertexCount, nextSecond + beamLengthVertexCount, nextFirst + beamLengthVertexCount]);
					}
				}
			}
		}

		if (_larger >= per) {
			//if (larger >= per || (isLastEdgeBeforeBeamValleyToSneakInOneMore && j < slices)) {
			if (notLastEdge) _i8 = per - _i8;
			var _firstRoot3 = (rings + _i8) * (slices + 1) + _j5;
			var _secondRoot = _firstRoot3 - slices;
			var _additionalDueToBeamValleysHavingTwoLines2 = !splitBeams ? Math.floor(_j5 / (per * 2)) : Math.floor((_j5 + per) / (per * 2));
			var _slice2 = _j5 + _additionalDueToBeamValleysHavingTwoLines2;
			var _location4 = extraFancyStart;
			var _nextLocation = _location4;
			var _level = _slice2 * beamLengthVertexCount * 2;
			var _nextSlice = _slice2 + 1;
			var _nextLevel = _nextSlice * beamLengthVertexCount * 2;
			var _k3 = (rings + intersectionAreaRings) * (slices + 1);
			if (fakeExtrude && baseHeight > 0) _k3 = pedestalStart + bottomFaceIndices.length;
			var _underOne = _k3 + _j5;
			var _underTwo = _underOne + 1;
			if (!extraFancy) {
				indexData.push([_secondRoot, _firstRoot3, tipIndex]); // beam top side
				indexData.push([_underOne, _underTwo, tipIndex]); // beam underside
			} else {
				var _a10 = 0;
				var _midFirst = _location4 + _level + _a10;
				var _midSecond = _nextLocation + _nextLevel + _a10;
				if ((!debugEven || _j5 % 2 !== 0) && (!debugOdd || _j5 % 2 !== 1)) {
					if (!debugLeft && !debugTop) indexData.push([_secondRoot, _firstRoot3, _midFirst]);
					if (!debugRight && !debugTop) indexData.push([_secondRoot, _midFirst, _midSecond]);
					if (!debugLeft && !debugBottom) indexData.push([_underOne, _underTwo, _midFirst + beamLengthVertexCount]);
					if (!debugRight && !debugBottom) indexData.push([_underTwo, _midSecond + beamLengthVertexCount, _midFirst + beamLengthVertexCount]);
					for (_a10 = 1; _a10 < beamLengthVertexCount; _a10++) {
						var _previousFirst = _location4 + _level + (_a10 - 1);
						var _previousSecond = _nextLocation + _nextLevel + (_a10 - 1);
						var _nextFirst = _location4 + _level + _a10;
						var _nextSecond = _nextLocation + _nextLevel + _a10;
						if (!debugLeft && !debugTop) indexData.push([_previousSecond, _previousFirst, _nextFirst]);
						//if (a < per-1 && !debugRight && !debugTop) indexData.push([previousSecond, nextFirst, nextSecond]);
						if (!debugRight && !debugTop) indexData.push([_previousSecond, _nextFirst, _nextSecond]);
						if (!debugLeft && !debugBottom) indexData.push([_previousSecond + beamLengthVertexCount, _nextFirst + beamLengthVertexCount, _previousFirst + beamLengthVertexCount]);
						//if (a < per-1 && !debugRight && !debugBottom) indexData.push([previousSecond+per, nextSecond+per, nextFirst+per]);
						if (!debugRight && !debugBottom) indexData.push([_previousSecond + beamLengthVertexCount, _nextSecond + beamLengthVertexCount, _nextFirst + beamLengthVertexCount]);
					}
				}
			}
		}
	}

	if (!debugFirst && plotFancy && sphereFraction !== "whole" && splitBeams) for (var _i9 = 0; _i9 < intersectionAreaRings; _i9++) {
		// first beam ends
		var one = (rings + _i9) * (slices + 1);
		var two = (rings + _i9 + 1) * (slices + 1);
		var firstTip = tips;
		if (!extraFancy) {
			indexData.push([one, two, firstTip]); // beam end
		} else {
			var _location5 = extraFancyStart;
			if (_i9) _location5 = firstBeamEndsStart + (_i9 - 1) * beamLengthVertexCount;
			var _nextLocation2 = firstBeamEndsStart + _i9 * beamLengthVertexCount;
			// temporarily disabled again
			//if (i === intersectionAreaRings-1) nextLocation = extraFancyStart + beamLengthVertexCount; // last line is the underside
			var _a11 = 0;
			var _midFirst2 = _location5 + _a11;
			var _midSecond2 = _nextLocation2 + _a11;
			if ((!debugEven || _a11 % 2 !== 0) && (!debugOdd || _a11 % 2 !== 1)) {
				if (!debugLeft) indexData.push([one, two, _midFirst2]);
				if (!debugRight) indexData.push([two, _midSecond2, _midFirst2]);
			}
			for (_a11 = 1; _a11 < beamLengthVertexCount; _a11++) {
				var _previousFirst2 = _location5 + (_a11 - 1);
				var _previousSecond2 = _nextLocation2 + (_a11 - 1);
				var _nextFirst2 = _location5 + _a11;
				var _nextSecond2 = _nextLocation2 + _a11;
				if ((!debugEven || _a11 % 2 !== 0) && (!debugOdd || _a11 % 2 !== 1)) {
					if (!debugLeft) indexData.push([_previousSecond2, _nextFirst2, _previousFirst2]);
					if (!debugRight) indexData.push([_previousSecond2, _nextSecond2, _nextFirst2]);
				}
			}
		}
	}

	if (!debugLast && plotFancy && sphereFraction !== "whole" && splitBeams) for (var _i10 = 0; _i10 < intersectionAreaRings; _i10++) {
		// last beam ends
		var three = (rings + _i10) * (slices + 1) + slices;
		var four = (rings + _i10 + 1) * (slices + 1) + slices;
		var lastTip = tips + fullBeamCount;
		if (!extraFancy) {
			indexData.push([four, three, lastTip]); // beam end
		} else {
			var _location6 = extraFancyStart + (slices + lastEdgeCount) * beamLengthVertexCount * 2;
			if (_i10) _location6 = lastBeamEndsStart + (_i10 - 1) * beamLengthVertexCount;
			var _nextLocation3 = lastBeamEndsStart + _i10 * beamLengthVertexCount;
			// temporarily disabled again
			//if (i === intersectionAreaRings-1) nextLocation = extraFancyStart + (slices + lastEdgeCount) * beamLengthVertexCount * 2 + beamLengthVertexCount; // last line is the underside
			var _a12 = 0;
			var _midFirst3 = _location6 + _a12;
			var _midSecond3 = _nextLocation3 + _a12;
			if ((!debugEven || _a12 % 2 !== 0) && (!debugOdd || _a12 % 2 !== 1)) {
				if (!debugLeft) indexData.push([four, three, _midFirst3]);
				if (!debugRight) indexData.push([_midSecond3, four, _midFirst3]);
			}
			for (_a12 = 1; _a12 < beamLengthVertexCount; _a12++) {
				var _previousFirst3 = _location6 + (_a12 - 1);
				var _previousSecond3 = _nextLocation3 + (_a12 - 1);
				var _nextFirst3 = _location6 + _a12;
				var _nextSecond3 = _nextLocation3 + _a12;
				if ((!debugEven || _a12 % 2 !== 0) && (!debugOdd || _a12 % 2 !== 1)) {
					if (!debugLeft) indexData.push([_nextFirst3, _previousSecond3, _previousFirst3]);
					if (!debugRight) indexData.push([_nextSecond3, _previousSecond3, _nextFirst3]);
				}
			}
		}
	}

	if (sphereFraction !== "whole") for (var _i11 = 0; _i11 < rings + intersectionAreaRings; _i11++) {
		// sun ends
		var _first2 = _i11 * (slices + 1);
		var _second2 = _first2 + slices + 1;
		indexData.push([anchor, _second2, _first2]);
	}
	if (sphereFraction !== "whole") for (var _i12 = 0; _i12 < rings + intersectionAreaRings; _i12++) {
		// other slice
		var _j6 = slices;
		var _first3 = _i12 * (slices + 1) + _j6;
		var _second3 = _first3 + slices + 1;
		indexData.push([anchor, _first3, _second3]);
	}
	if (!debugBase) for (var _j7 = 0; _j7 < slices; _j7++) {
		// original sun bottom, without beams
		var _first4 = sunUndersideStart + _j7;
		var _second4 = _first4 + 1;
		if (fakeExtrude && baseHeight > 0 && sphereFraction === "whole") indexData.push([underAnchorLoc, _second4, _first4]);else if (fakeExtrude && baseHeight > 0) indexData.push([pedestalStart, _second4, _first4]);else indexData.push([anchor, _second4, _first4]);
	}

	if (fakeExtrude && baseHeight > 0) {
		// pedestal sides
		var length = bottomFaceIndices.length;
		for (var _i13 = 0; _i13 < length - 1; _i13++) {
			var topVertex = bottomFaceIndices[_i13];
			var bottomVertex = pedestalStart + _i13;
			var nextTopVertex = bottomFaceIndices[_i13 + 1];
			var nextBottomVertex = pedestalStart + _i13 + 1;
			if (!debugLeft) indexData.push([topVertex, bottomVertex, nextTopVertex]);
			if (!debugRight) indexData.push([bottomVertex, nextBottomVertex, nextTopVertex]);
		}
	}

	//deepFreeze(indexData);
	return indexData;
});

var meshSelector = exports.meshSelector = (0, _reselect.createSelector)([sunVerticesSelector, sunIndicesSelector, baseHeightSelector], function (sunVertices, sunIndices, baseHeight) {
	var cells = sunIndices;
	var mesh = new Mesh();
	var sunVerticesResult = sunVertices.map(function (item) {
		return item.slice(0);
	});
	mesh.setPositions(sunVerticesResult);
	var cellsResult = cells.map(function (item) {
		return item.slice(0);
	});
	mesh.setCells(cellsResult);
	mesh.process();
	var shift = vec3.create();
	vec3.set(shift, 0, 0, -baseHeight);
	move(mesh, shift); // Mutates! // This causes the model to keep shifting if vertices are not recalculated, happens on debug check click.
	return mesh;
});

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */
/* eslint-disable no-proto */



var base64 = __webpack_require__(95)
var ieee754 = __webpack_require__(137)
var isArray = __webpack_require__(142)

exports.Buffer = Buffer
exports.SlowBuffer = SlowBuffer
exports.INSPECT_MAX_BYTES = 50

/**
 * If `Buffer.TYPED_ARRAY_SUPPORT`:
 *   === true    Use Uint8Array implementation (fastest)
 *   === false   Use Object implementation (most compatible, even IE6)
 *
 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
 * Opera 11.6+, iOS 4.2+.
 *
 * Due to various browser bugs, sometimes the Object implementation will be used even
 * when the browser supports typed arrays.
 *
 * Note:
 *
 *   - Firefox 4-29 lacks support for adding new properties to `Uint8Array` instances,
 *     See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438.
 *
 *   - Chrome 9-10 is missing the `TypedArray.prototype.subarray` function.
 *
 *   - IE10 has a broken `TypedArray.prototype.subarray` function which returns arrays of
 *     incorrect length in some situations.

 * We detect these buggy browsers and set `Buffer.TYPED_ARRAY_SUPPORT` to `false` so they
 * get the Object implementation, which is slower but behaves correctly.
 */
Buffer.TYPED_ARRAY_SUPPORT = global.TYPED_ARRAY_SUPPORT !== undefined
  ? global.TYPED_ARRAY_SUPPORT
  : typedArraySupport()

/*
 * Export kMaxLength after typed array support is determined.
 */
exports.kMaxLength = kMaxLength()

function typedArraySupport () {
  try {
    var arr = new Uint8Array(1)
    arr.__proto__ = {__proto__: Uint8Array.prototype, foo: function () { return 42 }}
    return arr.foo() === 42 && // typed array instances can be augmented
        typeof arr.subarray === 'function' && // chrome 9-10 lack `subarray`
        arr.subarray(1, 1).byteLength === 0 // ie10 has broken `subarray`
  } catch (e) {
    return false
  }
}

function kMaxLength () {
  return Buffer.TYPED_ARRAY_SUPPORT
    ? 0x7fffffff
    : 0x3fffffff
}

function createBuffer (that, length) {
  if (kMaxLength() < length) {
    throw new RangeError('Invalid typed array length')
  }
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = new Uint8Array(length)
    that.__proto__ = Buffer.prototype
  } else {
    // Fallback: Return an object instance of the Buffer class
    if (that === null) {
      that = new Buffer(length)
    }
    that.length = length
  }

  return that
}

/**
 * The Buffer constructor returns instances of `Uint8Array` that have their
 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
 * returns a single octet.
 *
 * The `Uint8Array` prototype remains unmodified.
 */

function Buffer (arg, encodingOrOffset, length) {
  if (!Buffer.TYPED_ARRAY_SUPPORT && !(this instanceof Buffer)) {
    return new Buffer(arg, encodingOrOffset, length)
  }

  // Common case.
  if (typeof arg === 'number') {
    if (typeof encodingOrOffset === 'string') {
      throw new Error(
        'If encoding is specified then the first argument must be a string'
      )
    }
    return allocUnsafe(this, arg)
  }
  return from(this, arg, encodingOrOffset, length)
}

Buffer.poolSize = 8192 // not used by this implementation

// TODO: Legacy, not needed anymore. Remove in next major version.
Buffer._augment = function (arr) {
  arr.__proto__ = Buffer.prototype
  return arr
}

function from (that, value, encodingOrOffset, length) {
  if (typeof value === 'number') {
    throw new TypeError('"value" argument must not be a number')
  }

  if (typeof ArrayBuffer !== 'undefined' && value instanceof ArrayBuffer) {
    return fromArrayBuffer(that, value, encodingOrOffset, length)
  }

  if (typeof value === 'string') {
    return fromString(that, value, encodingOrOffset)
  }

  return fromObject(that, value)
}

/**
 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
 * if value is a number.
 * Buffer.from(str[, encoding])
 * Buffer.from(array)
 * Buffer.from(buffer)
 * Buffer.from(arrayBuffer[, byteOffset[, length]])
 **/
Buffer.from = function (value, encodingOrOffset, length) {
  return from(null, value, encodingOrOffset, length)
}

if (Buffer.TYPED_ARRAY_SUPPORT) {
  Buffer.prototype.__proto__ = Uint8Array.prototype
  Buffer.__proto__ = Uint8Array
  if (typeof Symbol !== 'undefined' && Symbol.species &&
      Buffer[Symbol.species] === Buffer) {
    // Fix subarray() in ES2016. See: https://github.com/feross/buffer/pull/97
    Object.defineProperty(Buffer, Symbol.species, {
      value: null,
      configurable: true
    })
  }
}

function assertSize (size) {
  if (typeof size !== 'number') {
    throw new TypeError('"size" argument must be a number')
  } else if (size < 0) {
    throw new RangeError('"size" argument must not be negative')
  }
}

function alloc (that, size, fill, encoding) {
  assertSize(size)
  if (size <= 0) {
    return createBuffer(that, size)
  }
  if (fill !== undefined) {
    // Only pay attention to encoding if it's a string. This
    // prevents accidentally sending in a number that would
    // be interpretted as a start offset.
    return typeof encoding === 'string'
      ? createBuffer(that, size).fill(fill, encoding)
      : createBuffer(that, size).fill(fill)
  }
  return createBuffer(that, size)
}

/**
 * Creates a new filled Buffer instance.
 * alloc(size[, fill[, encoding]])
 **/
Buffer.alloc = function (size, fill, encoding) {
  return alloc(null, size, fill, encoding)
}

function allocUnsafe (that, size) {
  assertSize(size)
  that = createBuffer(that, size < 0 ? 0 : checked(size) | 0)
  if (!Buffer.TYPED_ARRAY_SUPPORT) {
    for (var i = 0; i < size; ++i) {
      that[i] = 0
    }
  }
  return that
}

/**
 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
 * */
Buffer.allocUnsafe = function (size) {
  return allocUnsafe(null, size)
}
/**
 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
 */
Buffer.allocUnsafeSlow = function (size) {
  return allocUnsafe(null, size)
}

function fromString (that, string, encoding) {
  if (typeof encoding !== 'string' || encoding === '') {
    encoding = 'utf8'
  }

  if (!Buffer.isEncoding(encoding)) {
    throw new TypeError('"encoding" must be a valid string encoding')
  }

  var length = byteLength(string, encoding) | 0
  that = createBuffer(that, length)

  var actual = that.write(string, encoding)

  if (actual !== length) {
    // Writing a hex string, for example, that contains invalid characters will
    // cause everything after the first invalid character to be ignored. (e.g.
    // 'abxxcd' will be treated as 'ab')
    that = that.slice(0, actual)
  }

  return that
}

function fromArrayLike (that, array) {
  var length = array.length < 0 ? 0 : checked(array.length) | 0
  that = createBuffer(that, length)
  for (var i = 0; i < length; i += 1) {
    that[i] = array[i] & 255
  }
  return that
}

function fromArrayBuffer (that, array, byteOffset, length) {
  array.byteLength // this throws if `array` is not a valid ArrayBuffer

  if (byteOffset < 0 || array.byteLength < byteOffset) {
    throw new RangeError('\'offset\' is out of bounds')
  }

  if (array.byteLength < byteOffset + (length || 0)) {
    throw new RangeError('\'length\' is out of bounds')
  }

  if (byteOffset === undefined && length === undefined) {
    array = new Uint8Array(array)
  } else if (length === undefined) {
    array = new Uint8Array(array, byteOffset)
  } else {
    array = new Uint8Array(array, byteOffset, length)
  }

  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = array
    that.__proto__ = Buffer.prototype
  } else {
    // Fallback: Return an object instance of the Buffer class
    that = fromArrayLike(that, array)
  }
  return that
}

function fromObject (that, obj) {
  if (Buffer.isBuffer(obj)) {
    var len = checked(obj.length) | 0
    that = createBuffer(that, len)

    if (that.length === 0) {
      return that
    }

    obj.copy(that, 0, 0, len)
    return that
  }

  if (obj) {
    if ((typeof ArrayBuffer !== 'undefined' &&
        obj.buffer instanceof ArrayBuffer) || 'length' in obj) {
      if (typeof obj.length !== 'number' || isnan(obj.length)) {
        return createBuffer(that, 0)
      }
      return fromArrayLike(that, obj)
    }

    if (obj.type === 'Buffer' && isArray(obj.data)) {
      return fromArrayLike(that, obj.data)
    }
  }

  throw new TypeError('First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.')
}

function checked (length) {
  // Note: cannot use `length < kMaxLength()` here because that fails when
  // length is NaN (which is otherwise coerced to zero.)
  if (length >= kMaxLength()) {
    throw new RangeError('Attempt to allocate Buffer larger than maximum ' +
                         'size: 0x' + kMaxLength().toString(16) + ' bytes')
  }
  return length | 0
}

function SlowBuffer (length) {
  if (+length != length) { // eslint-disable-line eqeqeq
    length = 0
  }
  return Buffer.alloc(+length)
}

Buffer.isBuffer = function isBuffer (b) {
  return !!(b != null && b._isBuffer)
}

Buffer.compare = function compare (a, b) {
  if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {
    throw new TypeError('Arguments must be Buffers')
  }

  if (a === b) return 0

  var x = a.length
  var y = b.length

  for (var i = 0, len = Math.min(x, y); i < len; ++i) {
    if (a[i] !== b[i]) {
      x = a[i]
      y = b[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

Buffer.isEncoding = function isEncoding (encoding) {
  switch (String(encoding).toLowerCase()) {
    case 'hex':
    case 'utf8':
    case 'utf-8':
    case 'ascii':
    case 'latin1':
    case 'binary':
    case 'base64':
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      return true
    default:
      return false
  }
}

Buffer.concat = function concat (list, length) {
  if (!isArray(list)) {
    throw new TypeError('"list" argument must be an Array of Buffers')
  }

  if (list.length === 0) {
    return Buffer.alloc(0)
  }

  var i
  if (length === undefined) {
    length = 0
    for (i = 0; i < list.length; ++i) {
      length += list[i].length
    }
  }

  var buffer = Buffer.allocUnsafe(length)
  var pos = 0
  for (i = 0; i < list.length; ++i) {
    var buf = list[i]
    if (!Buffer.isBuffer(buf)) {
      throw new TypeError('"list" argument must be an Array of Buffers')
    }
    buf.copy(buffer, pos)
    pos += buf.length
  }
  return buffer
}

function byteLength (string, encoding) {
  if (Buffer.isBuffer(string)) {
    return string.length
  }
  if (typeof ArrayBuffer !== 'undefined' && typeof ArrayBuffer.isView === 'function' &&
      (ArrayBuffer.isView(string) || string instanceof ArrayBuffer)) {
    return string.byteLength
  }
  if (typeof string !== 'string') {
    string = '' + string
  }

  var len = string.length
  if (len === 0) return 0

  // Use a for loop to avoid recursion
  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'ascii':
      case 'latin1':
      case 'binary':
        return len
      case 'utf8':
      case 'utf-8':
      case undefined:
        return utf8ToBytes(string).length
      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return len * 2
      case 'hex':
        return len >>> 1
      case 'base64':
        return base64ToBytes(string).length
      default:
        if (loweredCase) return utf8ToBytes(string).length // assume utf8
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}
Buffer.byteLength = byteLength

function slowToString (encoding, start, end) {
  var loweredCase = false

  // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
  // property of a typed array.

  // This behaves neither like String nor Uint8Array in that we set start/end
  // to their upper/lower bounds if the value passed is out of range.
  // undefined is handled specially as per ECMA-262 6th Edition,
  // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.
  if (start === undefined || start < 0) {
    start = 0
  }
  // Return early if start > this.length. Done here to prevent potential uint32
  // coercion fail below.
  if (start > this.length) {
    return ''
  }

  if (end === undefined || end > this.length) {
    end = this.length
  }

  if (end <= 0) {
    return ''
  }

  // Force coersion to uint32. This will also coerce falsey/NaN values to 0.
  end >>>= 0
  start >>>= 0

  if (end <= start) {
    return ''
  }

  if (!encoding) encoding = 'utf8'

  while (true) {
    switch (encoding) {
      case 'hex':
        return hexSlice(this, start, end)

      case 'utf8':
      case 'utf-8':
        return utf8Slice(this, start, end)

      case 'ascii':
        return asciiSlice(this, start, end)

      case 'latin1':
      case 'binary':
        return latin1Slice(this, start, end)

      case 'base64':
        return base64Slice(this, start, end)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return utf16leSlice(this, start, end)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = (encoding + '').toLowerCase()
        loweredCase = true
    }
  }
}

// The property is used by `Buffer.isBuffer` and `is-buffer` (in Safari 5-7) to detect
// Buffer instances.
Buffer.prototype._isBuffer = true

function swap (b, n, m) {
  var i = b[n]
  b[n] = b[m]
  b[m] = i
}

Buffer.prototype.swap16 = function swap16 () {
  var len = this.length
  if (len % 2 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 16-bits')
  }
  for (var i = 0; i < len; i += 2) {
    swap(this, i, i + 1)
  }
  return this
}

Buffer.prototype.swap32 = function swap32 () {
  var len = this.length
  if (len % 4 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 32-bits')
  }
  for (var i = 0; i < len; i += 4) {
    swap(this, i, i + 3)
    swap(this, i + 1, i + 2)
  }
  return this
}

Buffer.prototype.swap64 = function swap64 () {
  var len = this.length
  if (len % 8 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 64-bits')
  }
  for (var i = 0; i < len; i += 8) {
    swap(this, i, i + 7)
    swap(this, i + 1, i + 6)
    swap(this, i + 2, i + 5)
    swap(this, i + 3, i + 4)
  }
  return this
}

Buffer.prototype.toString = function toString () {
  var length = this.length | 0
  if (length === 0) return ''
  if (arguments.length === 0) return utf8Slice(this, 0, length)
  return slowToString.apply(this, arguments)
}

Buffer.prototype.equals = function equals (b) {
  if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer')
  if (this === b) return true
  return Buffer.compare(this, b) === 0
}

Buffer.prototype.inspect = function inspect () {
  var str = ''
  var max = exports.INSPECT_MAX_BYTES
  if (this.length > 0) {
    str = this.toString('hex', 0, max).match(/.{2}/g).join(' ')
    if (this.length > max) str += ' ... '
  }
  return '<Buffer ' + str + '>'
}

Buffer.prototype.compare = function compare (target, start, end, thisStart, thisEnd) {
  if (!Buffer.isBuffer(target)) {
    throw new TypeError('Argument must be a Buffer')
  }

  if (start === undefined) {
    start = 0
  }
  if (end === undefined) {
    end = target ? target.length : 0
  }
  if (thisStart === undefined) {
    thisStart = 0
  }
  if (thisEnd === undefined) {
    thisEnd = this.length
  }

  if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
    throw new RangeError('out of range index')
  }

  if (thisStart >= thisEnd && start >= end) {
    return 0
  }
  if (thisStart >= thisEnd) {
    return -1
  }
  if (start >= end) {
    return 1
  }

  start >>>= 0
  end >>>= 0
  thisStart >>>= 0
  thisEnd >>>= 0

  if (this === target) return 0

  var x = thisEnd - thisStart
  var y = end - start
  var len = Math.min(x, y)

  var thisCopy = this.slice(thisStart, thisEnd)
  var targetCopy = target.slice(start, end)

  for (var i = 0; i < len; ++i) {
    if (thisCopy[i] !== targetCopy[i]) {
      x = thisCopy[i]
      y = targetCopy[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

// Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
//
// Arguments:
// - buffer - a Buffer to search
// - val - a string, Buffer, or number
// - byteOffset - an index into `buffer`; will be clamped to an int32
// - encoding - an optional encoding, relevant is val is a string
// - dir - true for indexOf, false for lastIndexOf
function bidirectionalIndexOf (buffer, val, byteOffset, encoding, dir) {
  // Empty buffer means no match
  if (buffer.length === 0) return -1

  // Normalize byteOffset
  if (typeof byteOffset === 'string') {
    encoding = byteOffset
    byteOffset = 0
  } else if (byteOffset > 0x7fffffff) {
    byteOffset = 0x7fffffff
  } else if (byteOffset < -0x80000000) {
    byteOffset = -0x80000000
  }
  byteOffset = +byteOffset  // Coerce to Number.
  if (isNaN(byteOffset)) {
    // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
    byteOffset = dir ? 0 : (buffer.length - 1)
  }

  // Normalize byteOffset: negative offsets start from the end of the buffer
  if (byteOffset < 0) byteOffset = buffer.length + byteOffset
  if (byteOffset >= buffer.length) {
    if (dir) return -1
    else byteOffset = buffer.length - 1
  } else if (byteOffset < 0) {
    if (dir) byteOffset = 0
    else return -1
  }

  // Normalize val
  if (typeof val === 'string') {
    val = Buffer.from(val, encoding)
  }

  // Finally, search either indexOf (if dir is true) or lastIndexOf
  if (Buffer.isBuffer(val)) {
    // Special case: looking for empty string/buffer always fails
    if (val.length === 0) {
      return -1
    }
    return arrayIndexOf(buffer, val, byteOffset, encoding, dir)
  } else if (typeof val === 'number') {
    val = val & 0xFF // Search for a byte value [0-255]
    if (Buffer.TYPED_ARRAY_SUPPORT &&
        typeof Uint8Array.prototype.indexOf === 'function') {
      if (dir) {
        return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset)
      } else {
        return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset)
      }
    }
    return arrayIndexOf(buffer, [ val ], byteOffset, encoding, dir)
  }

  throw new TypeError('val must be string, number or Buffer')
}

function arrayIndexOf (arr, val, byteOffset, encoding, dir) {
  var indexSize = 1
  var arrLength = arr.length
  var valLength = val.length

  if (encoding !== undefined) {
    encoding = String(encoding).toLowerCase()
    if (encoding === 'ucs2' || encoding === 'ucs-2' ||
        encoding === 'utf16le' || encoding === 'utf-16le') {
      if (arr.length < 2 || val.length < 2) {
        return -1
      }
      indexSize = 2
      arrLength /= 2
      valLength /= 2
      byteOffset /= 2
    }
  }

  function read (buf, i) {
    if (indexSize === 1) {
      return buf[i]
    } else {
      return buf.readUInt16BE(i * indexSize)
    }
  }

  var i
  if (dir) {
    var foundIndex = -1
    for (i = byteOffset; i < arrLength; i++) {
      if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
        if (foundIndex === -1) foundIndex = i
        if (i - foundIndex + 1 === valLength) return foundIndex * indexSize
      } else {
        if (foundIndex !== -1) i -= i - foundIndex
        foundIndex = -1
      }
    }
  } else {
    if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength
    for (i = byteOffset; i >= 0; i--) {
      var found = true
      for (var j = 0; j < valLength; j++) {
        if (read(arr, i + j) !== read(val, j)) {
          found = false
          break
        }
      }
      if (found) return i
    }
  }

  return -1
}

Buffer.prototype.includes = function includes (val, byteOffset, encoding) {
  return this.indexOf(val, byteOffset, encoding) !== -1
}

Buffer.prototype.indexOf = function indexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, true)
}

Buffer.prototype.lastIndexOf = function lastIndexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, false)
}

function hexWrite (buf, string, offset, length) {
  offset = Number(offset) || 0
  var remaining = buf.length - offset
  if (!length) {
    length = remaining
  } else {
    length = Number(length)
    if (length > remaining) {
      length = remaining
    }
  }

  // must be an even number of digits
  var strLen = string.length
  if (strLen % 2 !== 0) throw new TypeError('Invalid hex string')

  if (length > strLen / 2) {
    length = strLen / 2
  }
  for (var i = 0; i < length; ++i) {
    var parsed = parseInt(string.substr(i * 2, 2), 16)
    if (isNaN(parsed)) return i
    buf[offset + i] = parsed
  }
  return i
}

function utf8Write (buf, string, offset, length) {
  return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length)
}

function asciiWrite (buf, string, offset, length) {
  return blitBuffer(asciiToBytes(string), buf, offset, length)
}

function latin1Write (buf, string, offset, length) {
  return asciiWrite(buf, string, offset, length)
}

function base64Write (buf, string, offset, length) {
  return blitBuffer(base64ToBytes(string), buf, offset, length)
}

function ucs2Write (buf, string, offset, length) {
  return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length)
}

Buffer.prototype.write = function write (string, offset, length, encoding) {
  // Buffer#write(string)
  if (offset === undefined) {
    encoding = 'utf8'
    length = this.length
    offset = 0
  // Buffer#write(string, encoding)
  } else if (length === undefined && typeof offset === 'string') {
    encoding = offset
    length = this.length
    offset = 0
  // Buffer#write(string, offset[, length][, encoding])
  } else if (isFinite(offset)) {
    offset = offset | 0
    if (isFinite(length)) {
      length = length | 0
      if (encoding === undefined) encoding = 'utf8'
    } else {
      encoding = length
      length = undefined
    }
  // legacy write(string, encoding, offset, length) - remove in v0.13
  } else {
    throw new Error(
      'Buffer.write(string, encoding, offset[, length]) is no longer supported'
    )
  }

  var remaining = this.length - offset
  if (length === undefined || length > remaining) length = remaining

  if ((string.length > 0 && (length < 0 || offset < 0)) || offset > this.length) {
    throw new RangeError('Attempt to write outside buffer bounds')
  }

  if (!encoding) encoding = 'utf8'

  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'hex':
        return hexWrite(this, string, offset, length)

      case 'utf8':
      case 'utf-8':
        return utf8Write(this, string, offset, length)

      case 'ascii':
        return asciiWrite(this, string, offset, length)

      case 'latin1':
      case 'binary':
        return latin1Write(this, string, offset, length)

      case 'base64':
        // Warning: maxLength not taken into account in base64Write
        return base64Write(this, string, offset, length)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return ucs2Write(this, string, offset, length)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}

Buffer.prototype.toJSON = function toJSON () {
  return {
    type: 'Buffer',
    data: Array.prototype.slice.call(this._arr || this, 0)
  }
}

function base64Slice (buf, start, end) {
  if (start === 0 && end === buf.length) {
    return base64.fromByteArray(buf)
  } else {
    return base64.fromByteArray(buf.slice(start, end))
  }
}

function utf8Slice (buf, start, end) {
  end = Math.min(buf.length, end)
  var res = []

  var i = start
  while (i < end) {
    var firstByte = buf[i]
    var codePoint = null
    var bytesPerSequence = (firstByte > 0xEF) ? 4
      : (firstByte > 0xDF) ? 3
      : (firstByte > 0xBF) ? 2
      : 1

    if (i + bytesPerSequence <= end) {
      var secondByte, thirdByte, fourthByte, tempCodePoint

      switch (bytesPerSequence) {
        case 1:
          if (firstByte < 0x80) {
            codePoint = firstByte
          }
          break
        case 2:
          secondByte = buf[i + 1]
          if ((secondByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0x1F) << 0x6 | (secondByte & 0x3F)
            if (tempCodePoint > 0x7F) {
              codePoint = tempCodePoint
            }
          }
          break
        case 3:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | (thirdByte & 0x3F)
            if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
              codePoint = tempCodePoint
            }
          }
          break
        case 4:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          fourthByte = buf[i + 3]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | (fourthByte & 0x3F)
            if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
              codePoint = tempCodePoint
            }
          }
      }
    }

    if (codePoint === null) {
      // we did not generate a valid codePoint so insert a
      // replacement char (U+FFFD) and advance only 1 byte
      codePoint = 0xFFFD
      bytesPerSequence = 1
    } else if (codePoint > 0xFFFF) {
      // encode to utf16 (surrogate pair dance)
      codePoint -= 0x10000
      res.push(codePoint >>> 10 & 0x3FF | 0xD800)
      codePoint = 0xDC00 | codePoint & 0x3FF
    }

    res.push(codePoint)
    i += bytesPerSequence
  }

  return decodeCodePointsArray(res)
}

// Based on http://stackoverflow.com/a/22747272/680742, the browser with
// the lowest limit is Chrome, with 0x10000 args.
// We go 1 magnitude less, for safety
var MAX_ARGUMENTS_LENGTH = 0x1000

function decodeCodePointsArray (codePoints) {
  var len = codePoints.length
  if (len <= MAX_ARGUMENTS_LENGTH) {
    return String.fromCharCode.apply(String, codePoints) // avoid extra slice()
  }

  // Decode in chunks to avoid "call stack size exceeded".
  var res = ''
  var i = 0
  while (i < len) {
    res += String.fromCharCode.apply(
      String,
      codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH)
    )
  }
  return res
}

function asciiSlice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i] & 0x7F)
  }
  return ret
}

function latin1Slice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i])
  }
  return ret
}

function hexSlice (buf, start, end) {
  var len = buf.length

  if (!start || start < 0) start = 0
  if (!end || end < 0 || end > len) end = len

  var out = ''
  for (var i = start; i < end; ++i) {
    out += toHex(buf[i])
  }
  return out
}

function utf16leSlice (buf, start, end) {
  var bytes = buf.slice(start, end)
  var res = ''
  for (var i = 0; i < bytes.length; i += 2) {
    res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256)
  }
  return res
}

Buffer.prototype.slice = function slice (start, end) {
  var len = this.length
  start = ~~start
  end = end === undefined ? len : ~~end

  if (start < 0) {
    start += len
    if (start < 0) start = 0
  } else if (start > len) {
    start = len
  }

  if (end < 0) {
    end += len
    if (end < 0) end = 0
  } else if (end > len) {
    end = len
  }

  if (end < start) end = start

  var newBuf
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    newBuf = this.subarray(start, end)
    newBuf.__proto__ = Buffer.prototype
  } else {
    var sliceLen = end - start
    newBuf = new Buffer(sliceLen, undefined)
    for (var i = 0; i < sliceLen; ++i) {
      newBuf[i] = this[i + start]
    }
  }

  return newBuf
}

/*
 * Need to make sure that buffer isn't trying to write out of bounds.
 */
function checkOffset (offset, ext, length) {
  if ((offset % 1) !== 0 || offset < 0) throw new RangeError('offset is not uint')
  if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length')
}

Buffer.prototype.readUIntLE = function readUIntLE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }

  return val
}

Buffer.prototype.readUIntBE = function readUIntBE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    checkOffset(offset, byteLength, this.length)
  }

  var val = this[offset + --byteLength]
  var mul = 1
  while (byteLength > 0 && (mul *= 0x100)) {
    val += this[offset + --byteLength] * mul
  }

  return val
}

Buffer.prototype.readUInt8 = function readUInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length)
  return this[offset]
}

Buffer.prototype.readUInt16LE = function readUInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  return this[offset] | (this[offset + 1] << 8)
}

Buffer.prototype.readUInt16BE = function readUInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  return (this[offset] << 8) | this[offset + 1]
}

Buffer.prototype.readUInt32LE = function readUInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return ((this[offset]) |
      (this[offset + 1] << 8) |
      (this[offset + 2] << 16)) +
      (this[offset + 3] * 0x1000000)
}

Buffer.prototype.readUInt32BE = function readUInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] * 0x1000000) +
    ((this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    this[offset + 3])
}

Buffer.prototype.readIntLE = function readIntLE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readIntBE = function readIntBE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var i = byteLength
  var mul = 1
  var val = this[offset + --i]
  while (i > 0 && (mul *= 0x100)) {
    val += this[offset + --i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readInt8 = function readInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length)
  if (!(this[offset] & 0x80)) return (this[offset])
  return ((0xff - this[offset] + 1) * -1)
}

Buffer.prototype.readInt16LE = function readInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset] | (this[offset + 1] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt16BE = function readInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset + 1] | (this[offset] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt32LE = function readInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset]) |
    (this[offset + 1] << 8) |
    (this[offset + 2] << 16) |
    (this[offset + 3] << 24)
}

Buffer.prototype.readInt32BE = function readInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] << 24) |
    (this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    (this[offset + 3])
}

Buffer.prototype.readFloatLE = function readFloatLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, true, 23, 4)
}

Buffer.prototype.readFloatBE = function readFloatBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, false, 23, 4)
}

Buffer.prototype.readDoubleLE = function readDoubleLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, true, 52, 8)
}

Buffer.prototype.readDoubleBE = function readDoubleBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, false, 52, 8)
}

function checkInt (buf, value, offset, ext, max, min) {
  if (!Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance')
  if (value > max || value < min) throw new RangeError('"value" argument is out of bounds')
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
}

Buffer.prototype.writeUIntLE = function writeUIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var mul = 1
  var i = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUIntBE = function writeUIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var i = byteLength - 1
  var mul = 1
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUInt8 = function writeUInt8 (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  this[offset] = (value & 0xff)
  return offset + 1
}

function objectWriteUInt16 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 2); i < j; ++i) {
    buf[offset + i] = (value & (0xff << (8 * (littleEndian ? i : 1 - i)))) >>>
      (littleEndian ? i : 1 - i) * 8
  }
}

Buffer.prototype.writeUInt16LE = function writeUInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
  } else {
    objectWriteUInt16(this, value, offset, true)
  }
  return offset + 2
}

Buffer.prototype.writeUInt16BE = function writeUInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = (value & 0xff)
  } else {
    objectWriteUInt16(this, value, offset, false)
  }
  return offset + 2
}

function objectWriteUInt32 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffffffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 4); i < j; ++i) {
    buf[offset + i] = (value >>> (littleEndian ? i : 3 - i) * 8) & 0xff
  }
}

Buffer.prototype.writeUInt32LE = function writeUInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset + 3] = (value >>> 24)
    this[offset + 2] = (value >>> 16)
    this[offset + 1] = (value >>> 8)
    this[offset] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, true)
  }
  return offset + 4
}

Buffer.prototype.writeUInt32BE = function writeUInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, false)
  }
  return offset + 4
}

Buffer.prototype.writeIntLE = function writeIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = 0
  var mul = 1
  var sub = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeIntBE = function writeIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = byteLength - 1
  var mul = 1
  var sub = 0
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeInt8 = function writeInt8 (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  if (value < 0) value = 0xff + value + 1
  this[offset] = (value & 0xff)
  return offset + 1
}

Buffer.prototype.writeInt16LE = function writeInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
  } else {
    objectWriteUInt16(this, value, offset, true)
  }
  return offset + 2
}

Buffer.prototype.writeInt16BE = function writeInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = (value & 0xff)
  } else {
    objectWriteUInt16(this, value, offset, false)
  }
  return offset + 2
}

Buffer.prototype.writeInt32LE = function writeInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
    this[offset + 2] = (value >>> 16)
    this[offset + 3] = (value >>> 24)
  } else {
    objectWriteUInt32(this, value, offset, true)
  }
  return offset + 4
}

Buffer.prototype.writeInt32BE = function writeInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (value < 0) value = 0xffffffff + value + 1
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, false)
  }
  return offset + 4
}

function checkIEEE754 (buf, value, offset, ext, max, min) {
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
  if (offset < 0) throw new RangeError('Index out of range')
}

function writeFloat (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -3.4028234663852886e+38)
  }
  ieee754.write(buf, value, offset, littleEndian, 23, 4)
  return offset + 4
}

Buffer.prototype.writeFloatLE = function writeFloatLE (value, offset, noAssert) {
  return writeFloat(this, value, offset, true, noAssert)
}

Buffer.prototype.writeFloatBE = function writeFloatBE (value, offset, noAssert) {
  return writeFloat(this, value, offset, false, noAssert)
}

function writeDouble (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -1.7976931348623157E+308)
  }
  ieee754.write(buf, value, offset, littleEndian, 52, 8)
  return offset + 8
}

Buffer.prototype.writeDoubleLE = function writeDoubleLE (value, offset, noAssert) {
  return writeDouble(this, value, offset, true, noAssert)
}

Buffer.prototype.writeDoubleBE = function writeDoubleBE (value, offset, noAssert) {
  return writeDouble(this, value, offset, false, noAssert)
}

// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
Buffer.prototype.copy = function copy (target, targetStart, start, end) {
  if (!start) start = 0
  if (!end && end !== 0) end = this.length
  if (targetStart >= target.length) targetStart = target.length
  if (!targetStart) targetStart = 0
  if (end > 0 && end < start) end = start

  // Copy 0 bytes; we're done
  if (end === start) return 0
  if (target.length === 0 || this.length === 0) return 0

  // Fatal error conditions
  if (targetStart < 0) {
    throw new RangeError('targetStart out of bounds')
  }
  if (start < 0 || start >= this.length) throw new RangeError('sourceStart out of bounds')
  if (end < 0) throw new RangeError('sourceEnd out of bounds')

  // Are we oob?
  if (end > this.length) end = this.length
  if (target.length - targetStart < end - start) {
    end = target.length - targetStart + start
  }

  var len = end - start
  var i

  if (this === target && start < targetStart && targetStart < end) {
    // descending copy from end
    for (i = len - 1; i >= 0; --i) {
      target[i + targetStart] = this[i + start]
    }
  } else if (len < 1000 || !Buffer.TYPED_ARRAY_SUPPORT) {
    // ascending copy from start
    for (i = 0; i < len; ++i) {
      target[i + targetStart] = this[i + start]
    }
  } else {
    Uint8Array.prototype.set.call(
      target,
      this.subarray(start, start + len),
      targetStart
    )
  }

  return len
}

// Usage:
//    buffer.fill(number[, offset[, end]])
//    buffer.fill(buffer[, offset[, end]])
//    buffer.fill(string[, offset[, end]][, encoding])
Buffer.prototype.fill = function fill (val, start, end, encoding) {
  // Handle string cases:
  if (typeof val === 'string') {
    if (typeof start === 'string') {
      encoding = start
      start = 0
      end = this.length
    } else if (typeof end === 'string') {
      encoding = end
      end = this.length
    }
    if (val.length === 1) {
      var code = val.charCodeAt(0)
      if (code < 256) {
        val = code
      }
    }
    if (encoding !== undefined && typeof encoding !== 'string') {
      throw new TypeError('encoding must be a string')
    }
    if (typeof encoding === 'string' && !Buffer.isEncoding(encoding)) {
      throw new TypeError('Unknown encoding: ' + encoding)
    }
  } else if (typeof val === 'number') {
    val = val & 255
  }

  // Invalid ranges are not set to a default, so can range check early.
  if (start < 0 || this.length < start || this.length < end) {
    throw new RangeError('Out of range index')
  }

  if (end <= start) {
    return this
  }

  start = start >>> 0
  end = end === undefined ? this.length : end >>> 0

  if (!val) val = 0

  var i
  if (typeof val === 'number') {
    for (i = start; i < end; ++i) {
      this[i] = val
    }
  } else {
    var bytes = Buffer.isBuffer(val)
      ? val
      : utf8ToBytes(new Buffer(val, encoding).toString())
    var len = bytes.length
    for (i = 0; i < end - start; ++i) {
      this[i + start] = bytes[i % len]
    }
  }

  return this
}

// HELPER FUNCTIONS
// ================

var INVALID_BASE64_RE = /[^+\/0-9A-Za-z-_]/g

function base64clean (str) {
  // Node strips out invalid characters like \n and \t from the string, base64-js does not
  str = stringtrim(str).replace(INVALID_BASE64_RE, '')
  // Node converts strings with length < 2 to ''
  if (str.length < 2) return ''
  // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
  while (str.length % 4 !== 0) {
    str = str + '='
  }
  return str
}

function stringtrim (str) {
  if (str.trim) return str.trim()
  return str.replace(/^\s+|\s+$/g, '')
}

function toHex (n) {
  if (n < 16) return '0' + n.toString(16)
  return n.toString(16)
}

function utf8ToBytes (string, units) {
  units = units || Infinity
  var codePoint
  var length = string.length
  var leadSurrogate = null
  var bytes = []

  for (var i = 0; i < length; ++i) {
    codePoint = string.charCodeAt(i)

    // is surrogate component
    if (codePoint > 0xD7FF && codePoint < 0xE000) {
      // last char was a lead
      if (!leadSurrogate) {
        // no lead yet
        if (codePoint > 0xDBFF) {
          // unexpected trail
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        } else if (i + 1 === length) {
          // unpaired lead
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        }

        // valid lead
        leadSurrogate = codePoint

        continue
      }

      // 2 leads in a row
      if (codePoint < 0xDC00) {
        if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
        leadSurrogate = codePoint
        continue
      }

      // valid surrogate pair
      codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000
    } else if (leadSurrogate) {
      // valid bmp char, but last char was a lead
      if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
    }

    leadSurrogate = null

    // encode utf8
    if (codePoint < 0x80) {
      if ((units -= 1) < 0) break
      bytes.push(codePoint)
    } else if (codePoint < 0x800) {
      if ((units -= 2) < 0) break
      bytes.push(
        codePoint >> 0x6 | 0xC0,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x10000) {
      if ((units -= 3) < 0) break
      bytes.push(
        codePoint >> 0xC | 0xE0,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x110000) {
      if ((units -= 4) < 0) break
      bytes.push(
        codePoint >> 0x12 | 0xF0,
        codePoint >> 0xC & 0x3F | 0x80,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else {
      throw new Error('Invalid code point')
    }
  }

  return bytes
}

function asciiToBytes (str) {
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    // Node's code seems to be doing this and not & 0x7F..
    byteArray.push(str.charCodeAt(i) & 0xFF)
  }
  return byteArray
}

function utf16leToBytes (str, units) {
  var c, hi, lo
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    if ((units -= 2) < 0) break

    c = str.charCodeAt(i)
    hi = c >> 8
    lo = c % 256
    byteArray.push(lo)
    byteArray.push(hi)
  }

  return byteArray
}

function base64ToBytes (str) {
  return base64.toByteArray(base64clean(str))
}

function blitBuffer (src, dst, offset, length) {
  for (var i = 0; i < length; ++i) {
    if ((i + offset >= dst.length) || (i >= src.length)) break
    dst[i + offset] = src[i]
  }
  return i
}

function isnan (val) {
  return val !== val // eslint-disable-line no-self-compare
}

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(16)))

/***/ }),
/* 37 */
/***/ (function(module, exports) {

module.exports = function( a, b ) {
  return a[ 0 ] * b[ 1 ] - b[ 0 ] * a[ 1 ];
};


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

var isLeftOn = __webpack_require__(44);
var isLeft = __webpack_require__(18);

module.exports = function( a0, a, a1, b ) {
  if( isLeftOn( a, a1, a0 ) ) {
    return isLeft( a, b, a0 ) && isLeft( b, a, a1 );;
  }
  return !( isLeftOn( b, a, a0 ) && isLeftOn( a, b, a1 ) );
};


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

var vec2 = __webpack_require__(0).vec2;
var cross = __webpack_require__(37);
var isZero = __webpack_require__(10);

module.exports = function( a, b, c, d ) {
  var p = vec2.clone( a );
  var r = vec2.clone( b );
  vec2.subtract( r, r, p );

  var q = vec2.clone( c );
  var s = vec2.clone( d );
  vec2.subtract( s, s, q );

  var dqp = vec2.create();
  vec2.subtract( dqp, q, p );

  var t = -1.0;
  var rxs = cross( r, s );
  var qpxr = cross( dqp, r );
  var qpxs = cross( dqp, s );
  if( rxs != 0 ) {
    t = qpxs / rxs ;
  }
  else if( isZero( qpxr ) && isZero( rxs ) ) {
    var t = vec2.dot( dqp, r ) / vec2.dot( r, r );
  }
  else if( !isZero( qpxr ) && isZero( rxs ) ) {
    throw 'lines are parallel and do no intersect';
  }
  return vec2.fromValues( p[ 0 ] + t * r[ 0 ], p[ 1 ] + t * r[ 1 ] );
};


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

var isColinear = __webpack_require__(27);

module.exports = function( a, b, c ) {
  if( !isColinear( a, b, c ) ) {
    return false;
  }
  if( a[0] !== b[0] ) {
      return ( ( a[ 0 ] <= c[ 0 ] ) && ( c[ 0 ] <= b[ 0 ] ) ) ||
             ( ( a[ 0 ] >= c[ 0 ] ) && ( c[ 0 ] >= b[ 0 ] ) );
  }
  else {
    return ( ( a[ 1 ] <= c[ 1 ] ) && ( c[ 1 ] <= b[ 1 ] ) ) ||
           ( ( a[ 1 ] >= c[ 1 ] ) && ( c[ 1 ] >= b[ 1 ] ) );
  }
  return false;
};


/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

var inCone = __webpack_require__(38);
var isDiagonalie = __webpack_require__(42);

module.exports = function( i, j, polygon ) {
  var len = polygon.length;
  var a0 = polygon[ ( i - 1 < 0 ) ? len - 1 : i - 1 ];
  var a = polygon[ i ];
  var a1 = polygon[ ( i + 1 ) % len ];

  var b0 = polygon[ ( j - 1 < 0 ) ? len - 1 : j - 1 ];
  var b = polygon[ j ];
  var b1 = polygon[ ( j + 1 ) % len ];
  
  if( inCone( a0, a, a1, b ) && inCone( b0, b, b1, a ) && isDiagonalie( a, b, polygon ) ) {
    return true;
  }
  return false;
};


/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

var isEqual = __webpack_require__(43);
var intersectsProper = __webpack_require__(26);

module.exports = function( a, b, polygon ) {
  var c, c1, len = polygon.length;
  for( var i = 0; i < len; i++ ) {
    c = polygon[ i ];
    c1 = polygon[ ( i + 1 ) % len ];
    if( !isEqual( c, a ) && !isEqual( c1, a ) && !isEqual( c, b ) && !isEqual( c1, b ) &&
        intersectsProper( a, b, c, c1 ) ) {
          return false;
        }
  }
  return true;
};


/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

var isZero = __webpack_require__(10);
var isEqual = __webpack_require__(28);

module.exports = function( a, b ) {
  if( isEqual( a[0], b[0] ) && isEqual( a[1], b[1] ) ) {
    return true;
  }
  return false;
};


/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

var area2 = __webpack_require__(17);
var greaterThanZero = __webpack_require__(25);
var isZero = __webpack_require__(10);

module.exports = function( a, b, c ) {
  var res = area2( a, b, c );
  return greaterThanZero( res ) || isZero( res );
};


/***/ }),
/* 45 */
/***/ (function(module, exports) {

module.exports = function(dtype) {
  switch (dtype) {
    case 'int8':
      return Int8Array
    case 'int16':
      return Int16Array
    case 'int32':
      return Int32Array
    case 'uint8':
      return Uint8Array
    case 'uint16':
      return Uint16Array
    case 'uint32':
      return Uint32Array
    case 'float32':
      return Float32Array
    case 'float64':
      return Float64Array
    case 'array':
      return Array
  }
}

/***/ }),
/* 46 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["create"] = create;
/* harmony export (immutable) */ __webpack_exports__["fromMat4"] = fromMat4;
/* harmony export (immutable) */ __webpack_exports__["clone"] = clone;
/* harmony export (immutable) */ __webpack_exports__["copy"] = copy;
/* harmony export (immutable) */ __webpack_exports__["fromValues"] = fromValues;
/* harmony export (immutable) */ __webpack_exports__["set"] = set;
/* harmony export (immutable) */ __webpack_exports__["identity"] = identity;
/* harmony export (immutable) */ __webpack_exports__["transpose"] = transpose;
/* harmony export (immutable) */ __webpack_exports__["invert"] = invert;
/* harmony export (immutable) */ __webpack_exports__["adjoint"] = adjoint;
/* harmony export (immutable) */ __webpack_exports__["determinant"] = determinant;
/* harmony export (immutable) */ __webpack_exports__["multiply"] = multiply;
/* harmony export (immutable) */ __webpack_exports__["translate"] = translate;
/* harmony export (immutable) */ __webpack_exports__["rotate"] = rotate;
/* harmony export (immutable) */ __webpack_exports__["scale"] = scale;
/* harmony export (immutable) */ __webpack_exports__["fromTranslation"] = fromTranslation;
/* harmony export (immutable) */ __webpack_exports__["fromRotation"] = fromRotation;
/* harmony export (immutable) */ __webpack_exports__["fromScaling"] = fromScaling;
/* harmony export (immutable) */ __webpack_exports__["fromMat2d"] = fromMat2d;
/* harmony export (immutable) */ __webpack_exports__["fromQuat"] = fromQuat;
/* harmony export (immutable) */ __webpack_exports__["normalFromMat4"] = normalFromMat4;
/* harmony export (immutable) */ __webpack_exports__["projection"] = projection;
/* harmony export (immutable) */ __webpack_exports__["str"] = str;
/* harmony export (immutable) */ __webpack_exports__["frob"] = frob;
/* harmony export (immutable) */ __webpack_exports__["add"] = add;
/* harmony export (immutable) */ __webpack_exports__["subtract"] = subtract;
/* harmony export (immutable) */ __webpack_exports__["multiplyScalar"] = multiplyScalar;
/* harmony export (immutable) */ __webpack_exports__["multiplyScalarAndAdd"] = multiplyScalarAndAdd;
/* harmony export (immutable) */ __webpack_exports__["exactEquals"] = exactEquals;
/* harmony export (immutable) */ __webpack_exports__["equals"] = equals;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common__ = __webpack_require__(3);
/* Copyright (c) 2015, Brandon Jones, Colin MacKenzie IV.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE. */



/**
 * 3x3 Matrix
 * @module mat3
 */

/**
 * Creates a new identity mat3
 *
 * @returns {mat3} a new 3x3 matrix
 */
function create() {
  let out = new __WEBPACK_IMPORTED_MODULE_0__common__["ARRAY_TYPE"](9);
  out[0] = 1;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 1;
  out[5] = 0;
  out[6] = 0;
  out[7] = 0;
  out[8] = 1;
  return out;
}

/**
 * Copies the upper-left 3x3 values into the given mat3.
 *
 * @param {mat3} out the receiving 3x3 matrix
 * @param {mat4} a   the source 4x4 matrix
 * @returns {mat3} out
 */
function fromMat4(out, a) {
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  out[3] = a[4];
  out[4] = a[5];
  out[5] = a[6];
  out[6] = a[8];
  out[7] = a[9];
  out[8] = a[10];
  return out;
}

/**
 * Creates a new mat3 initialized with values from an existing matrix
 *
 * @param {mat3} a matrix to clone
 * @returns {mat3} a new 3x3 matrix
 */
function clone(a) {
  let out = new __WEBPACK_IMPORTED_MODULE_0__common__["ARRAY_TYPE"](9);
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  out[3] = a[3];
  out[4] = a[4];
  out[5] = a[5];
  out[6] = a[6];
  out[7] = a[7];
  out[8] = a[8];
  return out;
}

/**
 * Copy the values from one mat3 to another
 *
 * @param {mat3} out the receiving matrix
 * @param {mat3} a the source matrix
 * @returns {mat3} out
 */
function copy(out, a) {
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  out[3] = a[3];
  out[4] = a[4];
  out[5] = a[5];
  out[6] = a[6];
  out[7] = a[7];
  out[8] = a[8];
  return out;
}

/**
 * Create a new mat3 with the given values
 *
 * @param {Number} m00 Component in column 0, row 0 position (index 0)
 * @param {Number} m01 Component in column 0, row 1 position (index 1)
 * @param {Number} m02 Component in column 0, row 2 position (index 2)
 * @param {Number} m10 Component in column 1, row 0 position (index 3)
 * @param {Number} m11 Component in column 1, row 1 position (index 4)
 * @param {Number} m12 Component in column 1, row 2 position (index 5)
 * @param {Number} m20 Component in column 2, row 0 position (index 6)
 * @param {Number} m21 Component in column 2, row 1 position (index 7)
 * @param {Number} m22 Component in column 2, row 2 position (index 8)
 * @returns {mat3} A new mat3
 */
function fromValues(m00, m01, m02, m10, m11, m12, m20, m21, m22) {
  let out = new __WEBPACK_IMPORTED_MODULE_0__common__["ARRAY_TYPE"](9);
  out[0] = m00;
  out[1] = m01;
  out[2] = m02;
  out[3] = m10;
  out[4] = m11;
  out[5] = m12;
  out[6] = m20;
  out[7] = m21;
  out[8] = m22;
  return out;
}

/**
 * Set the components of a mat3 to the given values
 *
 * @param {mat3} out the receiving matrix
 * @param {Number} m00 Component in column 0, row 0 position (index 0)
 * @param {Number} m01 Component in column 0, row 1 position (index 1)
 * @param {Number} m02 Component in column 0, row 2 position (index 2)
 * @param {Number} m10 Component in column 1, row 0 position (index 3)
 * @param {Number} m11 Component in column 1, row 1 position (index 4)
 * @param {Number} m12 Component in column 1, row 2 position (index 5)
 * @param {Number} m20 Component in column 2, row 0 position (index 6)
 * @param {Number} m21 Component in column 2, row 1 position (index 7)
 * @param {Number} m22 Component in column 2, row 2 position (index 8)
 * @returns {mat3} out
 */
function set(out, m00, m01, m02, m10, m11, m12, m20, m21, m22) {
  out[0] = m00;
  out[1] = m01;
  out[2] = m02;
  out[3] = m10;
  out[4] = m11;
  out[5] = m12;
  out[6] = m20;
  out[7] = m21;
  out[8] = m22;
  return out;
}

/**
 * Set a mat3 to the identity matrix
 *
 * @param {mat3} out the receiving matrix
 * @returns {mat3} out
 */
function identity(out) {
  out[0] = 1;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 1;
  out[5] = 0;
  out[6] = 0;
  out[7] = 0;
  out[8] = 1;
  return out;
}

/**
 * Transpose the values of a mat3
 *
 * @param {mat3} out the receiving matrix
 * @param {mat3} a the source matrix
 * @returns {mat3} out
 */
function transpose(out, a) {
  // If we are transposing ourselves we can skip a few steps but have to cache some values
  if (out === a) {
    let a01 = a[1], a02 = a[2], a12 = a[5];
    out[1] = a[3];
    out[2] = a[6];
    out[3] = a01;
    out[5] = a[7];
    out[6] = a02;
    out[7] = a12;
  } else {
    out[0] = a[0];
    out[1] = a[3];
    out[2] = a[6];
    out[3] = a[1];
    out[4] = a[4];
    out[5] = a[7];
    out[6] = a[2];
    out[7] = a[5];
    out[8] = a[8];
  }

  return out;
}

/**
 * Inverts a mat3
 *
 * @param {mat3} out the receiving matrix
 * @param {mat3} a the source matrix
 * @returns {mat3} out
 */
function invert(out, a) {
  let a00 = a[0], a01 = a[1], a02 = a[2];
  let a10 = a[3], a11 = a[4], a12 = a[5];
  let a20 = a[6], a21 = a[7], a22 = a[8];

  let b01 = a22 * a11 - a12 * a21;
  let b11 = -a22 * a10 + a12 * a20;
  let b21 = a21 * a10 - a11 * a20;

  // Calculate the determinant
  let det = a00 * b01 + a01 * b11 + a02 * b21;

  if (!det) {
    return null;
  }
  det = 1.0 / det;

  out[0] = b01 * det;
  out[1] = (-a22 * a01 + a02 * a21) * det;
  out[2] = (a12 * a01 - a02 * a11) * det;
  out[3] = b11 * det;
  out[4] = (a22 * a00 - a02 * a20) * det;
  out[5] = (-a12 * a00 + a02 * a10) * det;
  out[6] = b21 * det;
  out[7] = (-a21 * a00 + a01 * a20) * det;
  out[8] = (a11 * a00 - a01 * a10) * det;
  return out;
}

/**
 * Calculates the adjugate of a mat3
 *
 * @param {mat3} out the receiving matrix
 * @param {mat3} a the source matrix
 * @returns {mat3} out
 */
function adjoint(out, a) {
  let a00 = a[0], a01 = a[1], a02 = a[2];
  let a10 = a[3], a11 = a[4], a12 = a[5];
  let a20 = a[6], a21 = a[7], a22 = a[8];

  out[0] = (a11 * a22 - a12 * a21);
  out[1] = (a02 * a21 - a01 * a22);
  out[2] = (a01 * a12 - a02 * a11);
  out[3] = (a12 * a20 - a10 * a22);
  out[4] = (a00 * a22 - a02 * a20);
  out[5] = (a02 * a10 - a00 * a12);
  out[6] = (a10 * a21 - a11 * a20);
  out[7] = (a01 * a20 - a00 * a21);
  out[8] = (a00 * a11 - a01 * a10);
  return out;
}

/**
 * Calculates the determinant of a mat3
 *
 * @param {mat3} a the source matrix
 * @returns {Number} determinant of a
 */
function determinant(a) {
  let a00 = a[0], a01 = a[1], a02 = a[2];
  let a10 = a[3], a11 = a[4], a12 = a[5];
  let a20 = a[6], a21 = a[7], a22 = a[8];

  return a00 * (a22 * a11 - a12 * a21) + a01 * (-a22 * a10 + a12 * a20) + a02 * (a21 * a10 - a11 * a20);
}

/**
 * Multiplies two mat3's
 *
 * @param {mat3} out the receiving matrix
 * @param {mat3} a the first operand
 * @param {mat3} b the second operand
 * @returns {mat3} out
 */
function multiply(out, a, b) {
  let a00 = a[0], a01 = a[1], a02 = a[2];
  let a10 = a[3], a11 = a[4], a12 = a[5];
  let a20 = a[6], a21 = a[7], a22 = a[8];

  let b00 = b[0], b01 = b[1], b02 = b[2];
  let b10 = b[3], b11 = b[4], b12 = b[5];
  let b20 = b[6], b21 = b[7], b22 = b[8];

  out[0] = b00 * a00 + b01 * a10 + b02 * a20;
  out[1] = b00 * a01 + b01 * a11 + b02 * a21;
  out[2] = b00 * a02 + b01 * a12 + b02 * a22;

  out[3] = b10 * a00 + b11 * a10 + b12 * a20;
  out[4] = b10 * a01 + b11 * a11 + b12 * a21;
  out[5] = b10 * a02 + b11 * a12 + b12 * a22;

  out[6] = b20 * a00 + b21 * a10 + b22 * a20;
  out[7] = b20 * a01 + b21 * a11 + b22 * a21;
  out[8] = b20 * a02 + b21 * a12 + b22 * a22;
  return out;
}

/**
 * Translate a mat3 by the given vector
 *
 * @param {mat3} out the receiving matrix
 * @param {mat3} a the matrix to translate
 * @param {vec2} v vector to translate by
 * @returns {mat3} out
 */
function translate(out, a, v) {
  let a00 = a[0], a01 = a[1], a02 = a[2],
    a10 = a[3], a11 = a[4], a12 = a[5],
    a20 = a[6], a21 = a[7], a22 = a[8],
    x = v[0], y = v[1];

  out[0] = a00;
  out[1] = a01;
  out[2] = a02;

  out[3] = a10;
  out[4] = a11;
  out[5] = a12;

  out[6] = x * a00 + y * a10 + a20;
  out[7] = x * a01 + y * a11 + a21;
  out[8] = x * a02 + y * a12 + a22;
  return out;
}

/**
 * Rotates a mat3 by the given angle
 *
 * @param {mat3} out the receiving matrix
 * @param {mat3} a the matrix to rotate
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat3} out
 */
function rotate(out, a, rad) {
  let a00 = a[0], a01 = a[1], a02 = a[2],
    a10 = a[3], a11 = a[4], a12 = a[5],
    a20 = a[6], a21 = a[7], a22 = a[8],

    s = Math.sin(rad),
    c = Math.cos(rad);

  out[0] = c * a00 + s * a10;
  out[1] = c * a01 + s * a11;
  out[2] = c * a02 + s * a12;

  out[3] = c * a10 - s * a00;
  out[4] = c * a11 - s * a01;
  out[5] = c * a12 - s * a02;

  out[6] = a20;
  out[7] = a21;
  out[8] = a22;
  return out;
};

/**
 * Scales the mat3 by the dimensions in the given vec2
 *
 * @param {mat3} out the receiving matrix
 * @param {mat3} a the matrix to rotate
 * @param {vec2} v the vec2 to scale the matrix by
 * @returns {mat3} out
 **/
function scale(out, a, v) {
  let x = v[0], y = v[1];

  out[0] = x * a[0];
  out[1] = x * a[1];
  out[2] = x * a[2];

  out[3] = y * a[3];
  out[4] = y * a[4];
  out[5] = y * a[5];

  out[6] = a[6];
  out[7] = a[7];
  out[8] = a[8];
  return out;
}

/**
 * Creates a matrix from a vector translation
 * This is equivalent to (but much faster than):
 *
 *     mat3.identity(dest);
 *     mat3.translate(dest, dest, vec);
 *
 * @param {mat3} out mat3 receiving operation result
 * @param {vec2} v Translation vector
 * @returns {mat3} out
 */
function fromTranslation(out, v) {
  out[0] = 1;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 1;
  out[5] = 0;
  out[6] = v[0];
  out[7] = v[1];
  out[8] = 1;
  return out;
}

/**
 * Creates a matrix from a given angle
 * This is equivalent to (but much faster than):
 *
 *     mat3.identity(dest);
 *     mat3.rotate(dest, dest, rad);
 *
 * @param {mat3} out mat3 receiving operation result
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat3} out
 */
function fromRotation(out, rad) {
  let s = Math.sin(rad), c = Math.cos(rad);

  out[0] = c;
  out[1] = s;
  out[2] = 0;

  out[3] = -s;
  out[4] = c;
  out[5] = 0;

  out[6] = 0;
  out[7] = 0;
  out[8] = 1;
  return out;
}

/**
 * Creates a matrix from a vector scaling
 * This is equivalent to (but much faster than):
 *
 *     mat3.identity(dest);
 *     mat3.scale(dest, dest, vec);
 *
 * @param {mat3} out mat3 receiving operation result
 * @param {vec2} v Scaling vector
 * @returns {mat3} out
 */
function fromScaling(out, v) {
  out[0] = v[0];
  out[1] = 0;
  out[2] = 0;

  out[3] = 0;
  out[4] = v[1];
  out[5] = 0;

  out[6] = 0;
  out[7] = 0;
  out[8] = 1;
  return out;
}

/**
 * Copies the values from a mat2d into a mat3
 *
 * @param {mat3} out the receiving matrix
 * @param {mat2d} a the matrix to copy
 * @returns {mat3} out
 **/
function fromMat2d(out, a) {
  out[0] = a[0];
  out[1] = a[1];
  out[2] = 0;

  out[3] = a[2];
  out[4] = a[3];
  out[5] = 0;

  out[6] = a[4];
  out[7] = a[5];
  out[8] = 1;
  return out;
}

/**
* Calculates a 3x3 matrix from the given quaternion
*
* @param {mat3} out mat3 receiving operation result
* @param {quat} q Quaternion to create matrix from
*
* @returns {mat3} out
*/
function fromQuat(out, q) {
  let x = q[0], y = q[1], z = q[2], w = q[3];
  let x2 = x + x;
  let y2 = y + y;
  let z2 = z + z;

  let xx = x * x2;
  let yx = y * x2;
  let yy = y * y2;
  let zx = z * x2;
  let zy = z * y2;
  let zz = z * z2;
  let wx = w * x2;
  let wy = w * y2;
  let wz = w * z2;

  out[0] = 1 - yy - zz;
  out[3] = yx - wz;
  out[6] = zx + wy;

  out[1] = yx + wz;
  out[4] = 1 - xx - zz;
  out[7] = zy - wx;

  out[2] = zx - wy;
  out[5] = zy + wx;
  out[8] = 1 - xx - yy;

  return out;
}

/**
* Calculates a 3x3 normal matrix (transpose inverse) from the 4x4 matrix
*
* @param {mat3} out mat3 receiving operation result
* @param {mat4} a Mat4 to derive the normal matrix from
*
* @returns {mat3} out
*/
function normalFromMat4(out, a) {
  let a00 = a[0], a01 = a[1], a02 = a[2], a03 = a[3];
  let a10 = a[4], a11 = a[5], a12 = a[6], a13 = a[7];
  let a20 = a[8], a21 = a[9], a22 = a[10], a23 = a[11];
  let a30 = a[12], a31 = a[13], a32 = a[14], a33 = a[15];

  let b00 = a00 * a11 - a01 * a10;
  let b01 = a00 * a12 - a02 * a10;
  let b02 = a00 * a13 - a03 * a10;
  let b03 = a01 * a12 - a02 * a11;
  let b04 = a01 * a13 - a03 * a11;
  let b05 = a02 * a13 - a03 * a12;
  let b06 = a20 * a31 - a21 * a30;
  let b07 = a20 * a32 - a22 * a30;
  let b08 = a20 * a33 - a23 * a30;
  let b09 = a21 * a32 - a22 * a31;
  let b10 = a21 * a33 - a23 * a31;
  let b11 = a22 * a33 - a23 * a32;

  // Calculate the determinant
  let det = b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;

  if (!det) {
    return null;
  }
  det = 1.0 / det;

  out[0] = (a11 * b11 - a12 * b10 + a13 * b09) * det;
  out[1] = (a12 * b08 - a10 * b11 - a13 * b07) * det;
  out[2] = (a10 * b10 - a11 * b08 + a13 * b06) * det;

  out[3] = (a02 * b10 - a01 * b11 - a03 * b09) * det;
  out[4] = (a00 * b11 - a02 * b08 + a03 * b07) * det;
  out[5] = (a01 * b08 - a00 * b10 - a03 * b06) * det;

  out[6] = (a31 * b05 - a32 * b04 + a33 * b03) * det;
  out[7] = (a32 * b02 - a30 * b05 - a33 * b01) * det;
  out[8] = (a30 * b04 - a31 * b02 + a33 * b00) * det;

  return out;
}

/**
 * Generates a 2D projection matrix with the given bounds
 *
 * @param {mat3} out mat3 frustum matrix will be written into
 * @param {number} width Width of your gl context
 * @param {number} height Height of gl context
 * @returns {mat3} out
 */
function projection(out, width, height) {
    out[0] = 2 / width;
    out[1] = 0;
    out[2] = 0;
    out[3] = 0;
    out[4] = -2 / height;
    out[5] = 0;
    out[6] = -1;
    out[7] = 1;
    out[8] = 1;
    return out;
}

/**
 * Returns a string representation of a mat3
 *
 * @param {mat3} a matrix to represent as a string
 * @returns {String} string representation of the matrix
 */
function str(a) {
  return 'mat3(' + a[0] + ', ' + a[1] + ', ' + a[2] + ', ' +
          a[3] + ', ' + a[4] + ', ' + a[5] + ', ' +
          a[6] + ', ' + a[7] + ', ' + a[8] + ')';
}

/**
 * Returns Frobenius norm of a mat3
 *
 * @param {mat3} a the matrix to calculate Frobenius norm of
 * @returns {Number} Frobenius norm
 */
function frob(a) {
  return(Math.sqrt(Math.pow(a[0], 2) + Math.pow(a[1], 2) + Math.pow(a[2], 2) + Math.pow(a[3], 2) + Math.pow(a[4], 2) + Math.pow(a[5], 2) + Math.pow(a[6], 2) + Math.pow(a[7], 2) + Math.pow(a[8], 2)))
}

/**
 * Adds two mat3's
 *
 * @param {mat3} out the receiving matrix
 * @param {mat3} a the first operand
 * @param {mat3} b the second operand
 * @returns {mat3} out
 */
function add(out, a, b) {
  out[0] = a[0] + b[0];
  out[1] = a[1] + b[1];
  out[2] = a[2] + b[2];
  out[3] = a[3] + b[3];
  out[4] = a[4] + b[4];
  out[5] = a[5] + b[5];
  out[6] = a[6] + b[6];
  out[7] = a[7] + b[7];
  out[8] = a[8] + b[8];
  return out;
}

/**
 * Subtracts matrix b from matrix a
 *
 * @param {mat3} out the receiving matrix
 * @param {mat3} a the first operand
 * @param {mat3} b the second operand
 * @returns {mat3} out
 */
function subtract(out, a, b) {
  out[0] = a[0] - b[0];
  out[1] = a[1] - b[1];
  out[2] = a[2] - b[2];
  out[3] = a[3] - b[3];
  out[4] = a[4] - b[4];
  out[5] = a[5] - b[5];
  out[6] = a[6] - b[6];
  out[7] = a[7] - b[7];
  out[8] = a[8] - b[8];
  return out;
}



/**
 * Multiply each element of the matrix by a scalar.
 *
 * @param {mat3} out the receiving matrix
 * @param {mat3} a the matrix to scale
 * @param {Number} b amount to scale the matrix's elements by
 * @returns {mat3} out
 */
function multiplyScalar(out, a, b) {
  out[0] = a[0] * b;
  out[1] = a[1] * b;
  out[2] = a[2] * b;
  out[3] = a[3] * b;
  out[4] = a[4] * b;
  out[5] = a[5] * b;
  out[6] = a[6] * b;
  out[7] = a[7] * b;
  out[8] = a[8] * b;
  return out;
}

/**
 * Adds two mat3's after multiplying each element of the second operand by a scalar value.
 *
 * @param {mat3} out the receiving vector
 * @param {mat3} a the first operand
 * @param {mat3} b the second operand
 * @param {Number} scale the amount to scale b's elements by before adding
 * @returns {mat3} out
 */
function multiplyScalarAndAdd(out, a, b, scale) {
  out[0] = a[0] + (b[0] * scale);
  out[1] = a[1] + (b[1] * scale);
  out[2] = a[2] + (b[2] * scale);
  out[3] = a[3] + (b[3] * scale);
  out[4] = a[4] + (b[4] * scale);
  out[5] = a[5] + (b[5] * scale);
  out[6] = a[6] + (b[6] * scale);
  out[7] = a[7] + (b[7] * scale);
  out[8] = a[8] + (b[8] * scale);
  return out;
}

/**
 * Returns whether or not the matrices have exactly the same elements in the same position (when compared with ===)
 *
 * @param {mat3} a The first matrix.
 * @param {mat3} b The second matrix.
 * @returns {Boolean} True if the matrices are equal, false otherwise.
 */
function exactEquals(a, b) {
  return a[0] === b[0] && a[1] === b[1] && a[2] === b[2] &&
         a[3] === b[3] && a[4] === b[4] && a[5] === b[5] &&
         a[6] === b[6] && a[7] === b[7] && a[8] === b[8];
}

/**
 * Returns whether or not the matrices have approximately the same elements in the same position.
 *
 * @param {mat3} a The first matrix.
 * @param {mat3} b The second matrix.
 * @returns {Boolean} True if the matrices are equal, false otherwise.
 */
function equals(a, b) {
  let a0 = a[0], a1 = a[1], a2 = a[2], a3 = a[3], a4 = a[4], a5 = a[5], a6 = a[6], a7 = a[7], a8 = a[8];
  let b0 = b[0], b1 = b[1], b2 = b[2], b3 = b[3], b4 = b[4], b5 = b[5], b6 = b[6], b7 = b[7], b8 = b[8];
  return (Math.abs(a0 - b0) <= __WEBPACK_IMPORTED_MODULE_0__common__["EPSILON"]*Math.max(1.0, Math.abs(a0), Math.abs(b0)) &&
          Math.abs(a1 - b1) <= __WEBPACK_IMPORTED_MODULE_0__common__["EPSILON"]*Math.max(1.0, Math.abs(a1), Math.abs(b1)) &&
          Math.abs(a2 - b2) <= __WEBPACK_IMPORTED_MODULE_0__common__["EPSILON"]*Math.max(1.0, Math.abs(a2), Math.abs(b2)) &&
          Math.abs(a3 - b3) <= __WEBPACK_IMPORTED_MODULE_0__common__["EPSILON"]*Math.max(1.0, Math.abs(a3), Math.abs(b3)) &&
          Math.abs(a4 - b4) <= __WEBPACK_IMPORTED_MODULE_0__common__["EPSILON"]*Math.max(1.0, Math.abs(a4), Math.abs(b4)) &&
          Math.abs(a5 - b5) <= __WEBPACK_IMPORTED_MODULE_0__common__["EPSILON"]*Math.max(1.0, Math.abs(a5), Math.abs(b5)) &&
          Math.abs(a6 - b6) <= __WEBPACK_IMPORTED_MODULE_0__common__["EPSILON"]*Math.max(1.0, Math.abs(a6), Math.abs(b6)) &&
          Math.abs(a7 - b7) <= __WEBPACK_IMPORTED_MODULE_0__common__["EPSILON"]*Math.max(1.0, Math.abs(a7), Math.abs(b7)) &&
          Math.abs(a8 - b8) <= __WEBPACK_IMPORTED_MODULE_0__common__["EPSILON"]*Math.max(1.0, Math.abs(a8), Math.abs(b8)));
}

/**
 * Alias for {@link mat3.multiply}
 * @function
 */
const mul = multiply;
/* harmony export (immutable) */ __webpack_exports__["mul"] = mul;


/**
 * Alias for {@link mat3.subtract}
 * @function
 */
const sub = subtract;
/* harmony export (immutable) */ __webpack_exports__["sub"] = sub;



/***/ }),
/* 47 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["create"] = create;
/* harmony export (immutable) */ __webpack_exports__["clone"] = clone;
/* harmony export (immutable) */ __webpack_exports__["length"] = length;
/* harmony export (immutable) */ __webpack_exports__["fromValues"] = fromValues;
/* harmony export (immutable) */ __webpack_exports__["copy"] = copy;
/* harmony export (immutable) */ __webpack_exports__["set"] = set;
/* harmony export (immutable) */ __webpack_exports__["add"] = add;
/* harmony export (immutable) */ __webpack_exports__["subtract"] = subtract;
/* harmony export (immutable) */ __webpack_exports__["multiply"] = multiply;
/* harmony export (immutable) */ __webpack_exports__["divide"] = divide;
/* harmony export (immutable) */ __webpack_exports__["ceil"] = ceil;
/* harmony export (immutable) */ __webpack_exports__["floor"] = floor;
/* harmony export (immutable) */ __webpack_exports__["min"] = min;
/* harmony export (immutable) */ __webpack_exports__["max"] = max;
/* harmony export (immutable) */ __webpack_exports__["round"] = round;
/* harmony export (immutable) */ __webpack_exports__["scale"] = scale;
/* harmony export (immutable) */ __webpack_exports__["scaleAndAdd"] = scaleAndAdd;
/* harmony export (immutable) */ __webpack_exports__["distance"] = distance;
/* harmony export (immutable) */ __webpack_exports__["squaredDistance"] = squaredDistance;
/* harmony export (immutable) */ __webpack_exports__["squaredLength"] = squaredLength;
/* harmony export (immutable) */ __webpack_exports__["negate"] = negate;
/* harmony export (immutable) */ __webpack_exports__["inverse"] = inverse;
/* harmony export (immutable) */ __webpack_exports__["normalize"] = normalize;
/* harmony export (immutable) */ __webpack_exports__["dot"] = dot;
/* harmony export (immutable) */ __webpack_exports__["cross"] = cross;
/* harmony export (immutable) */ __webpack_exports__["lerp"] = lerp;
/* harmony export (immutable) */ __webpack_exports__["hermite"] = hermite;
/* harmony export (immutable) */ __webpack_exports__["bezier"] = bezier;
/* harmony export (immutable) */ __webpack_exports__["random"] = random;
/* harmony export (immutable) */ __webpack_exports__["transformMat4"] = transformMat4;
/* harmony export (immutable) */ __webpack_exports__["transformMat3"] = transformMat3;
/* harmony export (immutable) */ __webpack_exports__["transformQuat"] = transformQuat;
/* harmony export (immutable) */ __webpack_exports__["rotateX"] = rotateX;
/* harmony export (immutable) */ __webpack_exports__["rotateY"] = rotateY;
/* harmony export (immutable) */ __webpack_exports__["rotateZ"] = rotateZ;
/* harmony export (immutable) */ __webpack_exports__["angle"] = angle;
/* harmony export (immutable) */ __webpack_exports__["str"] = str;
/* harmony export (immutable) */ __webpack_exports__["exactEquals"] = exactEquals;
/* harmony export (immutable) */ __webpack_exports__["equals"] = equals;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common__ = __webpack_require__(3);
/* Copyright (c) 2015, Brandon Jones, Colin MacKenzie IV.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE. */



/**
 * 3 Dimensional Vector
 * @module vec3
 */

/**
 * Creates a new, empty vec3
 *
 * @returns {vec3} a new 3D vector
 */
function create() {
  let out = new __WEBPACK_IMPORTED_MODULE_0__common__["ARRAY_TYPE"](3);
  out[0] = 0;
  out[1] = 0;
  out[2] = 0;
  return out;
}

/**
 * Creates a new vec3 initialized with values from an existing vector
 *
 * @param {vec3} a vector to clone
 * @returns {vec3} a new 3D vector
 */
function clone(a) {
  var out = new __WEBPACK_IMPORTED_MODULE_0__common__["ARRAY_TYPE"](3);
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  return out;
}

/**
 * Calculates the length of a vec3
 *
 * @param {vec3} a vector to calculate length of
 * @returns {Number} length of a
 */
function length(a) {
  let x = a[0];
  let y = a[1];
  let z = a[2];
  return Math.sqrt(x*x + y*y + z*z);
}

/**
 * Creates a new vec3 initialized with the given values
 *
 * @param {Number} x X component
 * @param {Number} y Y component
 * @param {Number} z Z component
 * @returns {vec3} a new 3D vector
 */
function fromValues(x, y, z) {
  let out = new __WEBPACK_IMPORTED_MODULE_0__common__["ARRAY_TYPE"](3);
  out[0] = x;
  out[1] = y;
  out[2] = z;
  return out;
}

/**
 * Copy the values from one vec3 to another
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the source vector
 * @returns {vec3} out
 */
function copy(out, a) {
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  return out;
}

/**
 * Set the components of a vec3 to the given values
 *
 * @param {vec3} out the receiving vector
 * @param {Number} x X component
 * @param {Number} y Y component
 * @param {Number} z Z component
 * @returns {vec3} out
 */
function set(out, x, y, z) {
  out[0] = x;
  out[1] = y;
  out[2] = z;
  return out;
}

/**
 * Adds two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {vec3} out
 */
function add(out, a, b) {
  out[0] = a[0] + b[0];
  out[1] = a[1] + b[1];
  out[2] = a[2] + b[2];
  return out;
}

/**
 * Subtracts vector b from vector a
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {vec3} out
 */
function subtract(out, a, b) {
  out[0] = a[0] - b[0];
  out[1] = a[1] - b[1];
  out[2] = a[2] - b[2];
  return out;
}

/**
 * Multiplies two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {vec3} out
 */
function multiply(out, a, b) {
  out[0] = a[0] * b[0];
  out[1] = a[1] * b[1];
  out[2] = a[2] * b[2];
  return out;
}

/**
 * Divides two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {vec3} out
 */
function divide(out, a, b) {
  out[0] = a[0] / b[0];
  out[1] = a[1] / b[1];
  out[2] = a[2] / b[2];
  return out;
}

/**
 * Math.ceil the components of a vec3
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a vector to ceil
 * @returns {vec3} out
 */
function ceil(out, a) {
  out[0] = Math.ceil(a[0]);
  out[1] = Math.ceil(a[1]);
  out[2] = Math.ceil(a[2]);
  return out;
}

/**
 * Math.floor the components of a vec3
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a vector to floor
 * @returns {vec3} out
 */
function floor(out, a) {
  out[0] = Math.floor(a[0]);
  out[1] = Math.floor(a[1]);
  out[2] = Math.floor(a[2]);
  return out;
}

/**
 * Returns the minimum of two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {vec3} out
 */
function min(out, a, b) {
  out[0] = Math.min(a[0], b[0]);
  out[1] = Math.min(a[1], b[1]);
  out[2] = Math.min(a[2], b[2]);
  return out;
}

/**
 * Returns the maximum of two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {vec3} out
 */
function max(out, a, b) {
  out[0] = Math.max(a[0], b[0]);
  out[1] = Math.max(a[1], b[1]);
  out[2] = Math.max(a[2], b[2]);
  return out;
}

/**
 * Math.round the components of a vec3
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a vector to round
 * @returns {vec3} out
 */
function round(out, a) {
  out[0] = Math.round(a[0]);
  out[1] = Math.round(a[1]);
  out[2] = Math.round(a[2]);
  return out;
}

/**
 * Scales a vec3 by a scalar number
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the vector to scale
 * @param {Number} b amount to scale the vector by
 * @returns {vec3} out
 */
function scale(out, a, b) {
  out[0] = a[0] * b;
  out[1] = a[1] * b;
  out[2] = a[2] * b;
  return out;
}

/**
 * Adds two vec3's after scaling the second operand by a scalar value
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @param {Number} scale the amount to scale b by before adding
 * @returns {vec3} out
 */
function scaleAndAdd(out, a, b, scale) {
  out[0] = a[0] + (b[0] * scale);
  out[1] = a[1] + (b[1] * scale);
  out[2] = a[2] + (b[2] * scale);
  return out;
}

/**
 * Calculates the euclidian distance between two vec3's
 *
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {Number} distance between a and b
 */
function distance(a, b) {
  let x = b[0] - a[0];
  let y = b[1] - a[1];
  let z = b[2] - a[2];
  return Math.sqrt(x*x + y*y + z*z);
}

/**
 * Calculates the squared euclidian distance between two vec3's
 *
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {Number} squared distance between a and b
 */
function squaredDistance(a, b) {
  let x = b[0] - a[0];
  let y = b[1] - a[1];
  let z = b[2] - a[2];
  return x*x + y*y + z*z;
}

/**
 * Calculates the squared length of a vec3
 *
 * @param {vec3} a vector to calculate squared length of
 * @returns {Number} squared length of a
 */
function squaredLength(a) {
  let x = a[0];
  let y = a[1];
  let z = a[2];
  return x*x + y*y + z*z;
}

/**
 * Negates the components of a vec3
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a vector to negate
 * @returns {vec3} out
 */
function negate(out, a) {
  out[0] = -a[0];
  out[1] = -a[1];
  out[2] = -a[2];
  return out;
}

/**
 * Returns the inverse of the components of a vec3
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a vector to invert
 * @returns {vec3} out
 */
function inverse(out, a) {
  out[0] = 1.0 / a[0];
  out[1] = 1.0 / a[1];
  out[2] = 1.0 / a[2];
  return out;
}

/**
 * Normalize a vec3
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a vector to normalize
 * @returns {vec3} out
 */
function normalize(out, a) {
  let x = a[0];
  let y = a[1];
  let z = a[2];
  let len = x*x + y*y + z*z;
  if (len > 0) {
    //TODO: evaluate use of glm_invsqrt here?
    len = 1 / Math.sqrt(len);
    out[0] = a[0] * len;
    out[1] = a[1] * len;
    out[2] = a[2] * len;
  }
  return out;
}

/**
 * Calculates the dot product of two vec3's
 *
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {Number} dot product of a and b
 */
function dot(a, b) {
  return a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
}

/**
 * Computes the cross product of two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {vec3} out
 */
function cross(out, a, b) {
  let ax = a[0], ay = a[1], az = a[2];
  let bx = b[0], by = b[1], bz = b[2];

  out[0] = ay * bz - az * by;
  out[1] = az * bx - ax * bz;
  out[2] = ax * by - ay * bx;
  return out;
}

/**
 * Performs a linear interpolation between two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @param {Number} t interpolation amount between the two inputs
 * @returns {vec3} out
 */
function lerp(out, a, b, t) {
  let ax = a[0];
  let ay = a[1];
  let az = a[2];
  out[0] = ax + t * (b[0] - ax);
  out[1] = ay + t * (b[1] - ay);
  out[2] = az + t * (b[2] - az);
  return out;
}

/**
 * Performs a hermite interpolation with two control points
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @param {vec3} c the third operand
 * @param {vec3} d the fourth operand
 * @param {Number} t interpolation amount between the two inputs
 * @returns {vec3} out
 */
function hermite(out, a, b, c, d, t) {
  let factorTimes2 = t * t;
  let factor1 = factorTimes2 * (2 * t - 3) + 1;
  let factor2 = factorTimes2 * (t - 2) + t;
  let factor3 = factorTimes2 * (t - 1);
  let factor4 = factorTimes2 * (3 - 2 * t);

  out[0] = a[0] * factor1 + b[0] * factor2 + c[0] * factor3 + d[0] * factor4;
  out[1] = a[1] * factor1 + b[1] * factor2 + c[1] * factor3 + d[1] * factor4;
  out[2] = a[2] * factor1 + b[2] * factor2 + c[2] * factor3 + d[2] * factor4;

  return out;
}

/**
 * Performs a bezier interpolation with two control points
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @param {vec3} c the third operand
 * @param {vec3} d the fourth operand
 * @param {Number} t interpolation amount between the two inputs
 * @returns {vec3} out
 */
function bezier(out, a, b, c, d, t) {
  let inverseFactor = 1 - t;
  let inverseFactorTimesTwo = inverseFactor * inverseFactor;
  let factorTimes2 = t * t;
  let factor1 = inverseFactorTimesTwo * inverseFactor;
  let factor2 = 3 * t * inverseFactorTimesTwo;
  let factor3 = 3 * factorTimes2 * inverseFactor;
  let factor4 = factorTimes2 * t;

  out[0] = a[0] * factor1 + b[0] * factor2 + c[0] * factor3 + d[0] * factor4;
  out[1] = a[1] * factor1 + b[1] * factor2 + c[1] * factor3 + d[1] * factor4;
  out[2] = a[2] * factor1 + b[2] * factor2 + c[2] * factor3 + d[2] * factor4;

  return out;
}

/**
 * Generates a random vector with the given scale
 *
 * @param {vec3} out the receiving vector
 * @param {Number} [scale] Length of the resulting vector. If ommitted, a unit vector will be returned
 * @returns {vec3} out
 */
function random(out, scale) {
  scale = scale || 1.0;

  let r = __WEBPACK_IMPORTED_MODULE_0__common__["RANDOM"]() * 2.0 * Math.PI;
  let z = (__WEBPACK_IMPORTED_MODULE_0__common__["RANDOM"]() * 2.0) - 1.0;
  let zScale = Math.sqrt(1.0-z*z) * scale;

  out[0] = Math.cos(r) * zScale;
  out[1] = Math.sin(r) * zScale;
  out[2] = z * scale;
  return out;
}

/**
 * Transforms the vec3 with a mat4.
 * 4th vector component is implicitly '1'
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the vector to transform
 * @param {mat4} m matrix to transform with
 * @returns {vec3} out
 */
function transformMat4(out, a, m) {
  let x = a[0], y = a[1], z = a[2];
  let w = m[3] * x + m[7] * y + m[11] * z + m[15];
  w = w || 1.0;
  out[0] = (m[0] * x + m[4] * y + m[8] * z + m[12]) / w;
  out[1] = (m[1] * x + m[5] * y + m[9] * z + m[13]) / w;
  out[2] = (m[2] * x + m[6] * y + m[10] * z + m[14]) / w;
  return out;
}

/**
 * Transforms the vec3 with a mat3.
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the vector to transform
 * @param {mat3} m the 3x3 matrix to transform with
 * @returns {vec3} out
 */
function transformMat3(out, a, m) {
  let x = a[0], y = a[1], z = a[2];
  out[0] = x * m[0] + y * m[3] + z * m[6];
  out[1] = x * m[1] + y * m[4] + z * m[7];
  out[2] = x * m[2] + y * m[5] + z * m[8];
  return out;
}

/**
 * Transforms the vec3 with a quat
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the vector to transform
 * @param {quat} q quaternion to transform with
 * @returns {vec3} out
 */
function transformQuat(out, a, q) {
  // benchmarks: http://jsperf.com/quaternion-transform-vec3-implementations

  let x = a[0], y = a[1], z = a[2];
  let qx = q[0], qy = q[1], qz = q[2], qw = q[3];

  // calculate quat * vec
  let ix = qw * x + qy * z - qz * y;
  let iy = qw * y + qz * x - qx * z;
  let iz = qw * z + qx * y - qy * x;
  let iw = -qx * x - qy * y - qz * z;

  // calculate result * inverse quat
  out[0] = ix * qw + iw * -qx + iy * -qz - iz * -qy;
  out[1] = iy * qw + iw * -qy + iz * -qx - ix * -qz;
  out[2] = iz * qw + iw * -qz + ix * -qy - iy * -qx;
  return out;
}

/**
 * Rotate a 3D vector around the x-axis
 * @param {vec3} out The receiving vec3
 * @param {vec3} a The vec3 point to rotate
 * @param {vec3} b The origin of the rotation
 * @param {Number} c The angle of rotation
 * @returns {vec3} out
 */
function rotateX(out, a, b, c){
  let p = [], r=[];
  //Translate point to the origin
  p[0] = a[0] - b[0];
  p[1] = a[1] - b[1];
  p[2] = a[2] - b[2];

  //perform rotation
  r[0] = p[0];
  r[1] = p[1]*Math.cos(c) - p[2]*Math.sin(c);
  r[2] = p[1]*Math.sin(c) + p[2]*Math.cos(c);

  //translate to correct position
  out[0] = r[0] + b[0];
  out[1] = r[1] + b[1];
  out[2] = r[2] + b[2];

  return out;
}

/**
 * Rotate a 3D vector around the y-axis
 * @param {vec3} out The receiving vec3
 * @param {vec3} a The vec3 point to rotate
 * @param {vec3} b The origin of the rotation
 * @param {Number} c The angle of rotation
 * @returns {vec3} out
 */
function rotateY(out, a, b, c){
  let p = [], r=[];
  //Translate point to the origin
  p[0] = a[0] - b[0];
  p[1] = a[1] - b[1];
  p[2] = a[2] - b[2];

  //perform rotation
  r[0] = p[2]*Math.sin(c) + p[0]*Math.cos(c);
  r[1] = p[1];
  r[2] = p[2]*Math.cos(c) - p[0]*Math.sin(c);

  //translate to correct position
  out[0] = r[0] + b[0];
  out[1] = r[1] + b[1];
  out[2] = r[2] + b[2];

  return out;
}

/**
 * Rotate a 3D vector around the z-axis
 * @param {vec3} out The receiving vec3
 * @param {vec3} a The vec3 point to rotate
 * @param {vec3} b The origin of the rotation
 * @param {Number} c The angle of rotation
 * @returns {vec3} out
 */
function rotateZ(out, a, b, c){
  let p = [], r=[];
  //Translate point to the origin
  p[0] = a[0] - b[0];
  p[1] = a[1] - b[1];
  p[2] = a[2] - b[2];

  //perform rotation
  r[0] = p[0]*Math.cos(c) - p[1]*Math.sin(c);
  r[1] = p[0]*Math.sin(c) + p[1]*Math.cos(c);
  r[2] = p[2];

  //translate to correct position
  out[0] = r[0] + b[0];
  out[1] = r[1] + b[1];
  out[2] = r[2] + b[2];

  return out;
}

/**
 * Get the angle between two 3D vectors
 * @param {vec3} a The first operand
 * @param {vec3} b The second operand
 * @returns {Number} The angle in radians
 */
function angle(a, b) {
  let tempA = fromValues(a[0], a[1], a[2]);
  let tempB = fromValues(b[0], b[1], b[2]);

  normalize(tempA, tempA);
  normalize(tempB, tempB);

  let cosine = dot(tempA, tempB);

  if(cosine > 1.0) {
    return 0;
  }
  else if(cosine < -1.0) {
    return Math.PI;
  } else {
    return Math.acos(cosine);
  }
}

/**
 * Returns a string representation of a vector
 *
 * @param {vec3} a vector to represent as a string
 * @returns {String} string representation of the vector
 */
function str(a) {
  return 'vec3(' + a[0] + ', ' + a[1] + ', ' + a[2] + ')';
}

/**
 * Returns whether or not the vectors have exactly the same elements in the same position (when compared with ===)
 *
 * @param {vec3} a The first vector.
 * @param {vec3} b The second vector.
 * @returns {Boolean} True if the vectors are equal, false otherwise.
 */
function exactEquals(a, b) {
  return a[0] === b[0] && a[1] === b[1] && a[2] === b[2];
}

/**
 * Returns whether or not the vectors have approximately the same elements in the same position.
 *
 * @param {vec3} a The first vector.
 * @param {vec3} b The second vector.
 * @returns {Boolean} True if the vectors are equal, false otherwise.
 */
function equals(a, b) {
  let a0 = a[0], a1 = a[1], a2 = a[2];
  let b0 = b[0], b1 = b[1], b2 = b[2];
  return (Math.abs(a0 - b0) <= __WEBPACK_IMPORTED_MODULE_0__common__["EPSILON"]*Math.max(1.0, Math.abs(a0), Math.abs(b0)) &&
          Math.abs(a1 - b1) <= __WEBPACK_IMPORTED_MODULE_0__common__["EPSILON"]*Math.max(1.0, Math.abs(a1), Math.abs(b1)) &&
          Math.abs(a2 - b2) <= __WEBPACK_IMPORTED_MODULE_0__common__["EPSILON"]*Math.max(1.0, Math.abs(a2), Math.abs(b2)));
}

/**
 * Alias for {@link vec3.subtract}
 * @function
 */
const sub = subtract;
/* harmony export (immutable) */ __webpack_exports__["sub"] = sub;


/**
 * Alias for {@link vec3.multiply}
 * @function
 */
const mul = multiply;
/* harmony export (immutable) */ __webpack_exports__["mul"] = mul;


/**
 * Alias for {@link vec3.divide}
 * @function
 */
const div = divide;
/* harmony export (immutable) */ __webpack_exports__["div"] = div;


/**
 * Alias for {@link vec3.distance}
 * @function
 */
const dist = distance;
/* harmony export (immutable) */ __webpack_exports__["dist"] = dist;


/**
 * Alias for {@link vec3.squaredDistance}
 * @function
 */
const sqrDist = squaredDistance;
/* harmony export (immutable) */ __webpack_exports__["sqrDist"] = sqrDist;


/**
 * Alias for {@link vec3.length}
 * @function
 */
const len = length;
/* harmony export (immutable) */ __webpack_exports__["len"] = len;


/**
 * Alias for {@link vec3.squaredLength}
 * @function
 */
const sqrLen = squaredLength;
/* harmony export (immutable) */ __webpack_exports__["sqrLen"] = sqrLen;


/**
 * Perform some operation over an array of vec3s.
 *
 * @param {Array} a the array of vectors to iterate over
 * @param {Number} stride Number of elements between the start of each vec3. If 0 assumes tightly packed
 * @param {Number} offset Number of elements to skip at the beginning of the array
 * @param {Number} count Number of vec3s to iterate over. If 0 iterates over entire array
 * @param {Function} fn Function to call for each vector in the array
 * @param {Object} [arg] additional argument to pass to fn
 * @returns {Array} a
 * @function
 */
const forEach = (function() {
  let vec = create();

  return function(a, stride, offset, count, fn, arg) {
    let i, l;
    if(!stride) {
      stride = 3;
    }

    if(!offset) {
      offset = 0;
    }

    if(count) {
      l = Math.min((count * stride) + offset, a.length);
    } else {
      l = a.length;
    }

    for(i = offset; i < l; i += stride) {
      vec[0] = a[i]; vec[1] = a[i+1]; vec[2] = a[i+2];
      fn(vec, vec, arg);
      a[i] = vec[0]; a[i+1] = vec[1]; a[i+2] = vec[2];
    }

    return a;
  };
})();
/* harmony export (immutable) */ __webpack_exports__["forEach"] = forEach;



/***/ }),
/* 48 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["create"] = create;
/* harmony export (immutable) */ __webpack_exports__["clone"] = clone;
/* harmony export (immutable) */ __webpack_exports__["fromValues"] = fromValues;
/* harmony export (immutable) */ __webpack_exports__["copy"] = copy;
/* harmony export (immutable) */ __webpack_exports__["set"] = set;
/* harmony export (immutable) */ __webpack_exports__["add"] = add;
/* harmony export (immutable) */ __webpack_exports__["subtract"] = subtract;
/* harmony export (immutable) */ __webpack_exports__["multiply"] = multiply;
/* harmony export (immutable) */ __webpack_exports__["divide"] = divide;
/* harmony export (immutable) */ __webpack_exports__["ceil"] = ceil;
/* harmony export (immutable) */ __webpack_exports__["floor"] = floor;
/* harmony export (immutable) */ __webpack_exports__["min"] = min;
/* harmony export (immutable) */ __webpack_exports__["max"] = max;
/* harmony export (immutable) */ __webpack_exports__["round"] = round;
/* harmony export (immutable) */ __webpack_exports__["scale"] = scale;
/* harmony export (immutable) */ __webpack_exports__["scaleAndAdd"] = scaleAndAdd;
/* harmony export (immutable) */ __webpack_exports__["distance"] = distance;
/* harmony export (immutable) */ __webpack_exports__["squaredDistance"] = squaredDistance;
/* harmony export (immutable) */ __webpack_exports__["length"] = length;
/* harmony export (immutable) */ __webpack_exports__["squaredLength"] = squaredLength;
/* harmony export (immutable) */ __webpack_exports__["negate"] = negate;
/* harmony export (immutable) */ __webpack_exports__["inverse"] = inverse;
/* harmony export (immutable) */ __webpack_exports__["normalize"] = normalize;
/* harmony export (immutable) */ __webpack_exports__["dot"] = dot;
/* harmony export (immutable) */ __webpack_exports__["lerp"] = lerp;
/* harmony export (immutable) */ __webpack_exports__["random"] = random;
/* harmony export (immutable) */ __webpack_exports__["transformMat4"] = transformMat4;
/* harmony export (immutable) */ __webpack_exports__["transformQuat"] = transformQuat;
/* harmony export (immutable) */ __webpack_exports__["str"] = str;
/* harmony export (immutable) */ __webpack_exports__["exactEquals"] = exactEquals;
/* harmony export (immutable) */ __webpack_exports__["equals"] = equals;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common__ = __webpack_require__(3);
/* Copyright (c) 2015, Brandon Jones, Colin MacKenzie IV.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE. */



/**
 * 4 Dimensional Vector
 * @module vec4
 */

/**
 * Creates a new, empty vec4
 *
 * @returns {vec4} a new 4D vector
 */
function create() {
  let out = new __WEBPACK_IMPORTED_MODULE_0__common__["ARRAY_TYPE"](4);
  out[0] = 0;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  return out;
}

/**
 * Creates a new vec4 initialized with values from an existing vector
 *
 * @param {vec4} a vector to clone
 * @returns {vec4} a new 4D vector
 */
function clone(a) {
  let out = new __WEBPACK_IMPORTED_MODULE_0__common__["ARRAY_TYPE"](4);
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  out[3] = a[3];
  return out;
}

/**
 * Creates a new vec4 initialized with the given values
 *
 * @param {Number} x X component
 * @param {Number} y Y component
 * @param {Number} z Z component
 * @param {Number} w W component
 * @returns {vec4} a new 4D vector
 */
function fromValues(x, y, z, w) {
  let out = new __WEBPACK_IMPORTED_MODULE_0__common__["ARRAY_TYPE"](4);
  out[0] = x;
  out[1] = y;
  out[2] = z;
  out[3] = w;
  return out;
}

/**
 * Copy the values from one vec4 to another
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the source vector
 * @returns {vec4} out
 */
function copy(out, a) {
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  out[3] = a[3];
  return out;
}

/**
 * Set the components of a vec4 to the given values
 *
 * @param {vec4} out the receiving vector
 * @param {Number} x X component
 * @param {Number} y Y component
 * @param {Number} z Z component
 * @param {Number} w W component
 * @returns {vec4} out
 */
function set(out, x, y, z, w) {
  out[0] = x;
  out[1] = y;
  out[2] = z;
  out[3] = w;
  return out;
}

/**
 * Adds two vec4's
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the first operand
 * @param {vec4} b the second operand
 * @returns {vec4} out
 */
function add(out, a, b) {
  out[0] = a[0] + b[0];
  out[1] = a[1] + b[1];
  out[2] = a[2] + b[2];
  out[3] = a[3] + b[3];
  return out;
}

/**
 * Subtracts vector b from vector a
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the first operand
 * @param {vec4} b the second operand
 * @returns {vec4} out
 */
function subtract(out, a, b) {
  out[0] = a[0] - b[0];
  out[1] = a[1] - b[1];
  out[2] = a[2] - b[2];
  out[3] = a[3] - b[3];
  return out;
}

/**
 * Multiplies two vec4's
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the first operand
 * @param {vec4} b the second operand
 * @returns {vec4} out
 */
function multiply(out, a, b) {
  out[0] = a[0] * b[0];
  out[1] = a[1] * b[1];
  out[2] = a[2] * b[2];
  out[3] = a[3] * b[3];
  return out;
}

/**
 * Divides two vec4's
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the first operand
 * @param {vec4} b the second operand
 * @returns {vec4} out
 */
function divide(out, a, b) {
  out[0] = a[0] / b[0];
  out[1] = a[1] / b[1];
  out[2] = a[2] / b[2];
  out[3] = a[3] / b[3];
  return out;
}

/**
 * Math.ceil the components of a vec4
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a vector to ceil
 * @returns {vec4} out
 */
function ceil(out, a) {
  out[0] = Math.ceil(a[0]);
  out[1] = Math.ceil(a[1]);
  out[2] = Math.ceil(a[2]);
  out[3] = Math.ceil(a[3]);
  return out;
}

/**
 * Math.floor the components of a vec4
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a vector to floor
 * @returns {vec4} out
 */
function floor(out, a) {
  out[0] = Math.floor(a[0]);
  out[1] = Math.floor(a[1]);
  out[2] = Math.floor(a[2]);
  out[3] = Math.floor(a[3]);
  return out;
}

/**
 * Returns the minimum of two vec4's
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the first operand
 * @param {vec4} b the second operand
 * @returns {vec4} out
 */
function min(out, a, b) {
  out[0] = Math.min(a[0], b[0]);
  out[1] = Math.min(a[1], b[1]);
  out[2] = Math.min(a[2], b[2]);
  out[3] = Math.min(a[3], b[3]);
  return out;
}

/**
 * Returns the maximum of two vec4's
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the first operand
 * @param {vec4} b the second operand
 * @returns {vec4} out
 */
function max(out, a, b) {
  out[0] = Math.max(a[0], b[0]);
  out[1] = Math.max(a[1], b[1]);
  out[2] = Math.max(a[2], b[2]);
  out[3] = Math.max(a[3], b[3]);
  return out;
}

/**
 * Math.round the components of a vec4
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a vector to round
 * @returns {vec4} out
 */
function round(out, a) {
  out[0] = Math.round(a[0]);
  out[1] = Math.round(a[1]);
  out[2] = Math.round(a[2]);
  out[3] = Math.round(a[3]);
  return out;
}

/**
 * Scales a vec4 by a scalar number
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the vector to scale
 * @param {Number} b amount to scale the vector by
 * @returns {vec4} out
 */
function scale(out, a, b) {
  out[0] = a[0] * b;
  out[1] = a[1] * b;
  out[2] = a[2] * b;
  out[3] = a[3] * b;
  return out;
}

/**
 * Adds two vec4's after scaling the second operand by a scalar value
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the first operand
 * @param {vec4} b the second operand
 * @param {Number} scale the amount to scale b by before adding
 * @returns {vec4} out
 */
function scaleAndAdd(out, a, b, scale) {
  out[0] = a[0] + (b[0] * scale);
  out[1] = a[1] + (b[1] * scale);
  out[2] = a[2] + (b[2] * scale);
  out[3] = a[3] + (b[3] * scale);
  return out;
}

/**
 * Calculates the euclidian distance between two vec4's
 *
 * @param {vec4} a the first operand
 * @param {vec4} b the second operand
 * @returns {Number} distance between a and b
 */
function distance(a, b) {
  let x = b[0] - a[0];
  let y = b[1] - a[1];
  let z = b[2] - a[2];
  let w = b[3] - a[3];
  return Math.sqrt(x*x + y*y + z*z + w*w);
}

/**
 * Calculates the squared euclidian distance between two vec4's
 *
 * @param {vec4} a the first operand
 * @param {vec4} b the second operand
 * @returns {Number} squared distance between a and b
 */
function squaredDistance(a, b) {
  let x = b[0] - a[0];
  let y = b[1] - a[1];
  let z = b[2] - a[2];
  let w = b[3] - a[3];
  return x*x + y*y + z*z + w*w;
}

/**
 * Calculates the length of a vec4
 *
 * @param {vec4} a vector to calculate length of
 * @returns {Number} length of a
 */
function length(a) {
  let x = a[0];
  let y = a[1];
  let z = a[2];
  let w = a[3];
  return Math.sqrt(x*x + y*y + z*z + w*w);
}

/**
 * Calculates the squared length of a vec4
 *
 * @param {vec4} a vector to calculate squared length of
 * @returns {Number} squared length of a
 */
function squaredLength(a) {
  let x = a[0];
  let y = a[1];
  let z = a[2];
  let w = a[3];
  return x*x + y*y + z*z + w*w;
}

/**
 * Negates the components of a vec4
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a vector to negate
 * @returns {vec4} out
 */
function negate(out, a) {
  out[0] = -a[0];
  out[1] = -a[1];
  out[2] = -a[2];
  out[3] = -a[3];
  return out;
}

/**
 * Returns the inverse of the components of a vec4
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a vector to invert
 * @returns {vec4} out
 */
function inverse(out, a) {
  out[0] = 1.0 / a[0];
  out[1] = 1.0 / a[1];
  out[2] = 1.0 / a[2];
  out[3] = 1.0 / a[3];
  return out;
}

/**
 * Normalize a vec4
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a vector to normalize
 * @returns {vec4} out
 */
function normalize(out, a) {
  let x = a[0];
  let y = a[1];
  let z = a[2];
  let w = a[3];
  let len = x*x + y*y + z*z + w*w;
  if (len > 0) {
    len = 1 / Math.sqrt(len);
    out[0] = x * len;
    out[1] = y * len;
    out[2] = z * len;
    out[3] = w * len;
  }
  return out;
}

/**
 * Calculates the dot product of two vec4's
 *
 * @param {vec4} a the first operand
 * @param {vec4} b the second operand
 * @returns {Number} dot product of a and b
 */
function dot(a, b) {
  return a[0] * b[0] + a[1] * b[1] + a[2] * b[2] + a[3] * b[3];
}

/**
 * Performs a linear interpolation between two vec4's
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the first operand
 * @param {vec4} b the second operand
 * @param {Number} t interpolation amount between the two inputs
 * @returns {vec4} out
 */
function lerp(out, a, b, t) {
  let ax = a[0];
  let ay = a[1];
  let az = a[2];
  let aw = a[3];
  out[0] = ax + t * (b[0] - ax);
  out[1] = ay + t * (b[1] - ay);
  out[2] = az + t * (b[2] - az);
  out[3] = aw + t * (b[3] - aw);
  return out;
}

/**
 * Generates a random vector with the given scale
 *
 * @param {vec4} out the receiving vector
 * @param {Number} [scale] Length of the resulting vector. If ommitted, a unit vector will be returned
 * @returns {vec4} out
 */
function random(out, vectorScale) {
  vectorScale = vectorScale || 1.0;

  //TODO: This is a pretty awful way of doing this. Find something better.
  out[0] = __WEBPACK_IMPORTED_MODULE_0__common__["RANDOM"]();
  out[1] = __WEBPACK_IMPORTED_MODULE_0__common__["RANDOM"]();
  out[2] = __WEBPACK_IMPORTED_MODULE_0__common__["RANDOM"]();
  out[3] = __WEBPACK_IMPORTED_MODULE_0__common__["RANDOM"]();
  normalize(out, out);
  scale(out, out, vectorScale);
  return out;
}

/**
 * Transforms the vec4 with a mat4.
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the vector to transform
 * @param {mat4} m matrix to transform with
 * @returns {vec4} out
 */
function transformMat4(out, a, m) {
  let x = a[0], y = a[1], z = a[2], w = a[3];
  out[0] = m[0] * x + m[4] * y + m[8] * z + m[12] * w;
  out[1] = m[1] * x + m[5] * y + m[9] * z + m[13] * w;
  out[2] = m[2] * x + m[6] * y + m[10] * z + m[14] * w;
  out[3] = m[3] * x + m[7] * y + m[11] * z + m[15] * w;
  return out;
}

/**
 * Transforms the vec4 with a quat
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the vector to transform
 * @param {quat} q quaternion to transform with
 * @returns {vec4} out
 */
function transformQuat(out, a, q) {
  let x = a[0], y = a[1], z = a[2];
  let qx = q[0], qy = q[1], qz = q[2], qw = q[3];

  // calculate quat * vec
  let ix = qw * x + qy * z - qz * y;
  let iy = qw * y + qz * x - qx * z;
  let iz = qw * z + qx * y - qy * x;
  let iw = -qx * x - qy * y - qz * z;

  // calculate result * inverse quat
  out[0] = ix * qw + iw * -qx + iy * -qz - iz * -qy;
  out[1] = iy * qw + iw * -qy + iz * -qx - ix * -qz;
  out[2] = iz * qw + iw * -qz + ix * -qy - iy * -qx;
  out[3] = a[3];
  return out;
}

/**
 * Returns a string representation of a vector
 *
 * @param {vec4} a vector to represent as a string
 * @returns {String} string representation of the vector
 */
function str(a) {
  return 'vec4(' + a[0] + ', ' + a[1] + ', ' + a[2] + ', ' + a[3] + ')';
}

/**
 * Returns whether or not the vectors have exactly the same elements in the same position (when compared with ===)
 *
 * @param {vec4} a The first vector.
 * @param {vec4} b The second vector.
 * @returns {Boolean} True if the vectors are equal, false otherwise.
 */
function exactEquals(a, b) {
  return a[0] === b[0] && a[1] === b[1] && a[2] === b[2] && a[3] === b[3];
}

/**
 * Returns whether or not the vectors have approximately the same elements in the same position.
 *
 * @param {vec4} a The first vector.
 * @param {vec4} b The second vector.
 * @returns {Boolean} True if the vectors are equal, false otherwise.
 */
function equals(a, b) {
  let a0 = a[0], a1 = a[1], a2 = a[2], a3 = a[3];
  let b0 = b[0], b1 = b[1], b2 = b[2], b3 = b[3];
  return (Math.abs(a0 - b0) <= __WEBPACK_IMPORTED_MODULE_0__common__["EPSILON"]*Math.max(1.0, Math.abs(a0), Math.abs(b0)) &&
          Math.abs(a1 - b1) <= __WEBPACK_IMPORTED_MODULE_0__common__["EPSILON"]*Math.max(1.0, Math.abs(a1), Math.abs(b1)) &&
          Math.abs(a2 - b2) <= __WEBPACK_IMPORTED_MODULE_0__common__["EPSILON"]*Math.max(1.0, Math.abs(a2), Math.abs(b2)) &&
          Math.abs(a3 - b3) <= __WEBPACK_IMPORTED_MODULE_0__common__["EPSILON"]*Math.max(1.0, Math.abs(a3), Math.abs(b3)));
}

/**
 * Alias for {@link vec4.subtract}
 * @function
 */
const sub = subtract;
/* harmony export (immutable) */ __webpack_exports__["sub"] = sub;


/**
 * Alias for {@link vec4.multiply}
 * @function
 */
const mul = multiply;
/* harmony export (immutable) */ __webpack_exports__["mul"] = mul;


/**
 * Alias for {@link vec4.divide}
 * @function
 */
const div = divide;
/* harmony export (immutable) */ __webpack_exports__["div"] = div;


/**
 * Alias for {@link vec4.distance}
 * @function
 */
const dist = distance;
/* harmony export (immutable) */ __webpack_exports__["dist"] = dist;


/**
 * Alias for {@link vec4.squaredDistance}
 * @function
 */
const sqrDist = squaredDistance;
/* harmony export (immutable) */ __webpack_exports__["sqrDist"] = sqrDist;


/**
 * Alias for {@link vec4.length}
 * @function
 */
const len = length;
/* harmony export (immutable) */ __webpack_exports__["len"] = len;


/**
 * Alias for {@link vec4.squaredLength}
 * @function
 */
const sqrLen = squaredLength;
/* harmony export (immutable) */ __webpack_exports__["sqrLen"] = sqrLen;


/**
 * Perform some operation over an array of vec4s.
 *
 * @param {Array} a the array of vectors to iterate over
 * @param {Number} stride Number of elements between the start of each vec4. If 0 assumes tightly packed
 * @param {Number} offset Number of elements to skip at the beginning of the array
 * @param {Number} count Number of vec4s to iterate over. If 0 iterates over entire array
 * @param {Function} fn Function to call for each vector in the array
 * @param {Object} [arg] additional argument to pass to fn
 * @returns {Array} a
 * @function
 */
const forEach = (function() {
  let vec = create();

  return function(a, stride, offset, count, fn, arg) {
    let i, l;
    if(!stride) {
      stride = 4;
    }

    if(!offset) {
      offset = 0;
    }

    if(count) {
      l = Math.min((count * stride) + offset, a.length);
    } else {
      l = a.length;
    }

    for(i = offset; i < l; i += stride) {
      vec[0] = a[i]; vec[1] = a[i+1]; vec[2] = a[i+2]; vec[3] = a[i+3];
      fn(vec, vec, arg);
      a[i] = vec[0]; a[i+1] = vec[1]; a[i+2] = vec[2]; a[i+3] = vec[3];
    }

    return a;
  };
})();
/* harmony export (immutable) */ __webpack_exports__["forEach"] = forEach;



/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = makeReflectTypes

//Construct type info for reflection.
//
// This iterates over the flattened list of uniform type values and smashes them into a JSON object.
//
// The leaves of the resulting object are either indices or type strings representing primitive glslify types
function makeReflectTypes(uniforms, useIndex) {
  var obj = {}
  for(var i=0; i<uniforms.length; ++i) {
    var n = uniforms[i].name
    var parts = n.split(".")
    var o = obj
    for(var j=0; j<parts.length; ++j) {
      var x = parts[j].split("[")
      if(x.length > 1) {
        if(!(x[0] in o)) {
          o[x[0]] = []
        }
        o = o[x[0]]
        for(var k=1; k<x.length; ++k) {
          var y = parseInt(x[k])
          if(k<x.length-1 || j<parts.length-1) {
            if(!(y in o)) {
              if(k < x.length-1) {
                o[y] = []
              } else {
                o[y] = {}
              }
            }
            o = o[y]
          } else {
            if(useIndex) {
              o[y] = i
            } else {
              o[y] = uniforms[i].type
            }
          }
        }
      } else if(j < parts.length-1) {
        if(!(x[0] in o)) {
          o[x[0]] = {}
        }
        o = o[x[0]]
      } else {
        if(useIndex) {
          o[x[0]] = i
        } else {
          o[x[0]] = uniforms[i].type
        }
      }
    }
  }
  return obj
}

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function doBind(gl, elements, attributes) {
  if(elements) {
    elements.bind()
  } else {
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, null)
  }
  var nattribs = gl.getParameter(gl.MAX_VERTEX_ATTRIBS)|0
  if(attributes) {
    if(attributes.length > nattribs) {
      throw new Error("gl-vao: Too many vertex attributes")
    }
    for(var i=0; i<attributes.length; ++i) {
      var attrib = attributes[i]
      if(attrib.buffer) {
        var buffer = attrib.buffer
        var size = attrib.size || 4
        var type = attrib.type || gl.FLOAT
        var normalized = !!attrib.normalized
        var stride = attrib.stride || 0
        var offset = attrib.offset || 0
        buffer.bind()
        gl.enableVertexAttribArray(i)
        gl.vertexAttribPointer(i, size, type, normalized, stride, offset)
      } else {
        if(typeof attrib === "number") {
          gl.vertexAttrib1f(i, attrib)
        } else if(attrib.length === 1) {
          gl.vertexAttrib1f(i, attrib[0])
        } else if(attrib.length === 2) {
          gl.vertexAttrib2f(i, attrib[0], attrib[1])
        } else if(attrib.length === 3) {
          gl.vertexAttrib3f(i, attrib[0], attrib[1], attrib[2])
        } else if(attrib.length === 4) {
          gl.vertexAttrib4f(i, attrib[0], attrib[1], attrib[2], attrib[3])
        } else {
          throw new Error("gl-vao: Invalid vertex attribute")
        }
        gl.disableVertexAttribArray(i)
      }
    }
    for(; i<nattribs; ++i) {
      gl.disableVertexAttribArray(i)
    }
  } else {
    gl.bindBuffer(gl.ARRAY_BUFFER, null)
    for(var i=0; i<nattribs; ++i) {
      gl.disableVertexAttribArray(i)
    }
  }
}

module.exports = doBind

/***/ }),
/* 51 */
/***/ (function(module, exports) {

module.exports = [
  // Keep this list sorted
  'abs'
  , 'acos'
  , 'all'
  , 'any'
  , 'asin'
  , 'atan'
  , 'ceil'
  , 'clamp'
  , 'cos'
  , 'cross'
  , 'dFdx'
  , 'dFdy'
  , 'degrees'
  , 'distance'
  , 'dot'
  , 'equal'
  , 'exp'
  , 'exp2'
  , 'faceforward'
  , 'floor'
  , 'fract'
  , 'gl_BackColor'
  , 'gl_BackLightModelProduct'
  , 'gl_BackLightProduct'
  , 'gl_BackMaterial'
  , 'gl_BackSecondaryColor'
  , 'gl_ClipPlane'
  , 'gl_ClipVertex'
  , 'gl_Color'
  , 'gl_DepthRange'
  , 'gl_DepthRangeParameters'
  , 'gl_EyePlaneQ'
  , 'gl_EyePlaneR'
  , 'gl_EyePlaneS'
  , 'gl_EyePlaneT'
  , 'gl_Fog'
  , 'gl_FogCoord'
  , 'gl_FogFragCoord'
  , 'gl_FogParameters'
  , 'gl_FragColor'
  , 'gl_FragCoord'
  , 'gl_FragData'
  , 'gl_FragDepth'
  , 'gl_FragDepthEXT'
  , 'gl_FrontColor'
  , 'gl_FrontFacing'
  , 'gl_FrontLightModelProduct'
  , 'gl_FrontLightProduct'
  , 'gl_FrontMaterial'
  , 'gl_FrontSecondaryColor'
  , 'gl_LightModel'
  , 'gl_LightModelParameters'
  , 'gl_LightModelProducts'
  , 'gl_LightProducts'
  , 'gl_LightSource'
  , 'gl_LightSourceParameters'
  , 'gl_MaterialParameters'
  , 'gl_MaxClipPlanes'
  , 'gl_MaxCombinedTextureImageUnits'
  , 'gl_MaxDrawBuffers'
  , 'gl_MaxFragmentUniformComponents'
  , 'gl_MaxLights'
  , 'gl_MaxTextureCoords'
  , 'gl_MaxTextureImageUnits'
  , 'gl_MaxTextureUnits'
  , 'gl_MaxVaryingFloats'
  , 'gl_MaxVertexAttribs'
  , 'gl_MaxVertexTextureImageUnits'
  , 'gl_MaxVertexUniformComponents'
  , 'gl_ModelViewMatrix'
  , 'gl_ModelViewMatrixInverse'
  , 'gl_ModelViewMatrixInverseTranspose'
  , 'gl_ModelViewMatrixTranspose'
  , 'gl_ModelViewProjectionMatrix'
  , 'gl_ModelViewProjectionMatrixInverse'
  , 'gl_ModelViewProjectionMatrixInverseTranspose'
  , 'gl_ModelViewProjectionMatrixTranspose'
  , 'gl_MultiTexCoord0'
  , 'gl_MultiTexCoord1'
  , 'gl_MultiTexCoord2'
  , 'gl_MultiTexCoord3'
  , 'gl_MultiTexCoord4'
  , 'gl_MultiTexCoord5'
  , 'gl_MultiTexCoord6'
  , 'gl_MultiTexCoord7'
  , 'gl_Normal'
  , 'gl_NormalMatrix'
  , 'gl_NormalScale'
  , 'gl_ObjectPlaneQ'
  , 'gl_ObjectPlaneR'
  , 'gl_ObjectPlaneS'
  , 'gl_ObjectPlaneT'
  , 'gl_Point'
  , 'gl_PointCoord'
  , 'gl_PointParameters'
  , 'gl_PointSize'
  , 'gl_Position'
  , 'gl_ProjectionMatrix'
  , 'gl_ProjectionMatrixInverse'
  , 'gl_ProjectionMatrixInverseTranspose'
  , 'gl_ProjectionMatrixTranspose'
  , 'gl_SecondaryColor'
  , 'gl_TexCoord'
  , 'gl_TextureEnvColor'
  , 'gl_TextureMatrix'
  , 'gl_TextureMatrixInverse'
  , 'gl_TextureMatrixInverseTranspose'
  , 'gl_TextureMatrixTranspose'
  , 'gl_Vertex'
  , 'greaterThan'
  , 'greaterThanEqual'
  , 'inversesqrt'
  , 'length'
  , 'lessThan'
  , 'lessThanEqual'
  , 'log'
  , 'log2'
  , 'matrixCompMult'
  , 'max'
  , 'min'
  , 'mix'
  , 'mod'
  , 'normalize'
  , 'not'
  , 'notEqual'
  , 'pow'
  , 'radians'
  , 'reflect'
  , 'refract'
  , 'sign'
  , 'sin'
  , 'smoothstep'
  , 'sqrt'
  , 'step'
  , 'tan'
  , 'texture2D'
  , 'texture2DLod'
  , 'texture2DProj'
  , 'texture2DProjLod'
  , 'textureCube'
  , 'textureCubeLod'
  , 'texture2DLodEXT'
  , 'texture2DProjLodEXT'
  , 'textureCubeLodEXT'
  , 'texture2DGradEXT'
  , 'texture2DProjGradEXT'
  , 'textureCubeGradEXT'
]


/***/ }),
/* 52 */
/***/ (function(module, exports) {

module.exports = [
  // current
    'precision'
  , 'highp'
  , 'mediump'
  , 'lowp'
  , 'attribute'
  , 'const'
  , 'uniform'
  , 'varying'
  , 'break'
  , 'continue'
  , 'do'
  , 'for'
  , 'while'
  , 'if'
  , 'else'
  , 'in'
  , 'out'
  , 'inout'
  , 'float'
  , 'int'
  , 'void'
  , 'bool'
  , 'true'
  , 'false'
  , 'discard'
  , 'return'
  , 'mat2'
  , 'mat3'
  , 'mat4'
  , 'vec2'
  , 'vec3'
  , 'vec4'
  , 'ivec2'
  , 'ivec3'
  , 'ivec4'
  , 'bvec2'
  , 'bvec3'
  , 'bvec4'
  , 'sampler1D'
  , 'sampler2D'
  , 'sampler3D'
  , 'samplerCube'
  , 'sampler1DShadow'
  , 'sampler2DShadow'
  , 'struct'

  // future
  , 'asm'
  , 'class'
  , 'union'
  , 'enum'
  , 'typedef'
  , 'template'
  , 'this'
  , 'packed'
  , 'goto'
  , 'switch'
  , 'default'
  , 'inline'
  , 'noinline'
  , 'volatile'
  , 'public'
  , 'static'
  , 'extern'
  , 'external'
  , 'interface'
  , 'long'
  , 'short'
  , 'double'
  , 'half'
  , 'fixed'
  , 'unsigned'
  , 'input'
  , 'output'
  , 'hvec2'
  , 'hvec3'
  , 'hvec4'
  , 'dvec2'
  , 'dvec3'
  , 'dvec4'
  , 'fvec2'
  , 'fvec3'
  , 'fvec4'
  , 'sampler2DRect'
  , 'sampler3DRect'
  , 'sampler2DRectShadow'
  , 'sizeof'
  , 'cast'
  , 'namespace'
  , 'using'
]


/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

var cross = __webpack_require__(30);
var normalize = __webpack_require__(31);

module.exports = function( a, b, c ) {
  var r = [ 0.0, 0.0, 0.0 ];
  cross( r, a, b, c );
  normalize( r, r );
  return r;
};


/***/ }),
/* 54 */
/***/ (function(module, exports) {

module.exports = function( a ) {
  var result = [];
  var len = a.length;
  var slen = a[ 0 ].length;
  var addZ = slen < 3 ? true : false;
  for( var i = 0; i < len; i++ ) {
    for( var j = 0; j < slen; j++ ) { result.push( a[ i ][ j ] ); }
    if( addZ ) { result.push( 0.0 ); }
  }
  return result;
};


/***/ }),
/* 55 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__root_js__ = __webpack_require__(159);


/** Built-in value references. */
var Symbol = __WEBPACK_IMPORTED_MODULE_0__root_js__["a" /* default */].Symbol;

/* harmony default export */ __webpack_exports__["a"] = (Symbol);


/***/ }),
/* 56 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__baseGetTag_js__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__getPrototype_js__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__isObjectLike_js__ = __webpack_require__(160);




/** `Object#toString` result references. */
var objectTag = '[object Object]';

/** Used for built-in method references. */
var funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to infer the `Object` constructor. */
var objectCtorString = funcToString.call(Object);

/**
 * Checks if `value` is a plain object, that is, an object created by the
 * `Object` constructor or one with a `[[Prototype]]` of `null`.
 *
 * @static
 * @memberOf _
 * @since 0.8.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 * }
 *
 * _.isPlainObject(new Foo);
 * // => false
 *
 * _.isPlainObject([1, 2, 3]);
 * // => false
 *
 * _.isPlainObject({ 'x': 0, 'y': 0 });
 * // => true
 *
 * _.isPlainObject(Object.create(null));
 * // => true
 */
function isPlainObject(value) {
  if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__isObjectLike_js__["a" /* default */])(value) || __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__baseGetTag_js__["a" /* default */])(value) != objectTag) {
    return false;
  }
  var proto = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__getPrototype_js__["a" /* default */])(value);
  if (proto === null) {
    return true;
  }
  var Ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor;
  return typeof Ctor == 'function' && Ctor instanceof Ctor &&
    funcToString.call(Ctor) == objectCtorString;
}

/* harmony default export */ __webpack_exports__["a"] = (isPlainObject);


/***/ }),
/* 57 */
/***/ (function(module, exports) {

module.exports = function( edge ) {
  var passed = true;
  if( edge.getIndex() === -1 ) {
    console.log('edge: ', edge.getIndex(), ' does not have a proper index' );
    passed = false;
  }
  if( edge.getHalfEdge() === undefined ) {
    console.log('edge: ', edge.getIndex(), ' does not have a half edge' );
    passed = false;
  }
  return passed;
};


/***/ }),
/* 58 */
/***/ (function(module, exports) {

module.exports = function( face ) {
  var passed = true;
  if( face.getIndex() === -1 ) {
    console.log('face: ', face.getIndex(), ' does not have a proper index' );
    passed = false;
  }
  if( face.getHalfEdge() === undefined ) {
    console.log('face: ', face.getIndex(), ' does not have a half edge' );
    passed = false;
  }
  return passed;
};


/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

var HalfEdgePrev = __webpack_require__(15);

module.exports = function( halfEdge ) {
  var passed = true;
  var he = halfEdge;
  if( he.getNextHalfEdge() === undefined ) {
    console.log( 'halfEdge: does not have a next half edge' );
    passed = false;
  }
  if( he.getFlipHalfEdge() === undefined ) {
    console.log( 'halfEdge: does not have a flip half edge' );
    passed = false;
  }  
  if( he.getVertex() === undefined ) {
    console.log( 'halfEdge: does not have a valid vertex' );
    passed = false;
  }
  if( he.getEdge() === undefined ) {
    console.log( 'halfEdge: does not have an edge' );
    passed = false;
  }
  if( he.getFace() === undefined ) {
    console.log( 'halfEdge: does not have a face' );
    passed = false;
  }
  return passed;
};


/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

var FaceIntegrity = __webpack_require__(58);
var EdgeIntegrity = __webpack_require__(57);
var VertexIntegrity = __webpack_require__(61);
var HalfEdgeIntegrity = __webpack_require__(59);

var Integrity = {};

Integrity.checkMesh = function( mesh ) {
  var passed = true;
  if( !this.checkFaces( mesh.getFaces() ) ) {
    console.log( 'faces are messed up' );
    passed = false;
  }

  if( !this.checkEdges( mesh.getEdges() ) ) {
    console.log( 'edges are messed up' );
    passed = false;
  }

  if( !this.checkVertices( mesh.getVertices() ) ) {
    console.log( 'vertices are messed up' );
    passed = false;
  }

  if( !this.checkHalfEdges( mesh.getHalfEdges() ) ) {
    console.log( 'half edges are messed up' );
    passed = false;
  }

  console.log( 'mesh is valid!' );
  return passed;
}

Integrity.checkEdges = function( edges ) {
  var passed = true;
  var len = edges.length;
  for( var i = 0; i < len; i++ ) {
    var edge = edges[ i ];
    passed = EdgeIntegrity( edge );
  }
  return passed;
}

Integrity.checkFaces = function( faces ) {
  var passed = true;
  var len = faces.length;
  for( var i = 0; i < len; i++ ) {
    var face = faces[ i ];
    passed = FaceIntegrity( face );
  }
  return passed;
}

Integrity.checkVertices = function( vertices ) {
  var passed = true;
  var len = vertices.length;
  for( var i = 0; i < len; i++ ) {
    var vertex = vertices[ i ];
    passed = VertexIntegrity( vertex );
  }
  return passed;
}

Integrity.checkHalfEdges = function( halfEdges ) {
  var passed = true;
  var len = halfEdges.length;
  for( var i = 0; i < len; i++ ) {
    var halfedge = halfEdges[ i ];
    passed = HalfEdgeIntegrity( halfedge );
  }
  return passed;
}

module.exports = Integrity; 


/***/ }),
/* 61 */
/***/ (function(module, exports) {

module.exports = function( vertex ) {
  var passed = true;
  if( vertex.getIndex() === -1 ) {
    console.log('vertex : ', vertex.getIndex(), ' does not have a proper index' );
    passed = false;
  }
  if( vertex.getHalfEdge() === undefined ) {
    console.log('vertex : ', vertex.getIndex(), ' does not have a half edge' );
    passed = false;
  }
  return passed;
};


/***/ }),
/* 62 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 63 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = compose;
/**
 * Composes single-argument functions from right to left. The rightmost
 * function can take multiple arguments as it provides the signature for
 * the resulting composite function.
 *
 * @param {...Function} funcs The functions to compose.
 * @returns {Function} A function obtained by composing the argument functions
 * from right to left. For example, compose(f, g, h) is identical to doing
 * (...args) => f(g(h(...args))).
 */

function compose() {
  for (var _len = arguments.length, funcs = Array(_len), _key = 0; _key < _len; _key++) {
    funcs[_key] = arguments[_key];
  }

  if (funcs.length === 0) {
    return function (arg) {
      return arg;
    };
  }

  if (funcs.length === 1) {
    return funcs[0];
  }

  return funcs.reduce(function (a, b) {
    return function () {
      return a(b.apply(undefined, arguments));
    };
  });
}

/***/ }),
/* 64 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ActionTypes; });
/* harmony export (immutable) */ __webpack_exports__["a"] = createStore;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash_es_isPlainObject__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_symbol_observable__ = __webpack_require__(187);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_symbol_observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_symbol_observable__);



/**
 * These are private action types reserved by Redux.
 * For any unknown actions, you must return the current state.
 * If the current state is undefined, you must return the initial state.
 * Do not reference these action types directly in your code.
 */
var ActionTypes = {
  INIT: '@@redux/INIT'

  /**
   * Creates a Redux store that holds the state tree.
   * The only way to change the data in the store is to call `dispatch()` on it.
   *
   * There should only be a single store in your app. To specify how different
   * parts of the state tree respond to actions, you may combine several reducers
   * into a single reducer function by using `combineReducers`.
   *
   * @param {Function} reducer A function that returns the next state tree, given
   * the current state tree and the action to handle.
   *
   * @param {any} [preloadedState] The initial state. You may optionally specify it
   * to hydrate the state from the server in universal apps, or to restore a
   * previously serialized user session.
   * If you use `combineReducers` to produce the root reducer function, this must be
   * an object with the same shape as `combineReducers` keys.
   *
   * @param {Function} [enhancer] The store enhancer. You may optionally specify it
   * to enhance the store with third-party capabilities such as middleware,
   * time travel, persistence, etc. The only store enhancer that ships with Redux
   * is `applyMiddleware()`.
   *
   * @returns {Store} A Redux store that lets you read the state, dispatch actions
   * and subscribe to changes.
   */
};function createStore(reducer, preloadedState, enhancer) {
  var _ref2;

  if (typeof preloadedState === 'function' && typeof enhancer === 'undefined') {
    enhancer = preloadedState;
    preloadedState = undefined;
  }

  if (typeof enhancer !== 'undefined') {
    if (typeof enhancer !== 'function') {
      throw new Error('Expected the enhancer to be a function.');
    }

    return enhancer(createStore)(reducer, preloadedState);
  }

  if (typeof reducer !== 'function') {
    throw new Error('Expected the reducer to be a function.');
  }

  var currentReducer = reducer;
  var currentState = preloadedState;
  var currentListeners = [];
  var nextListeners = currentListeners;
  var isDispatching = false;

  function ensureCanMutateNextListeners() {
    if (nextListeners === currentListeners) {
      nextListeners = currentListeners.slice();
    }
  }

  /**
   * Reads the state tree managed by the store.
   *
   * @returns {any} The current state tree of your application.
   */
  function getState() {
    return currentState;
  }

  /**
   * Adds a change listener. It will be called any time an action is dispatched,
   * and some part of the state tree may potentially have changed. You may then
   * call `getState()` to read the current state tree inside the callback.
   *
   * You may call `dispatch()` from a change listener, with the following
   * caveats:
   *
   * 1. The subscriptions are snapshotted just before every `dispatch()` call.
   * If you subscribe or unsubscribe while the listeners are being invoked, this
   * will not have any effect on the `dispatch()` that is currently in progress.
   * However, the next `dispatch()` call, whether nested or not, will use a more
   * recent snapshot of the subscription list.
   *
   * 2. The listener should not expect to see all state changes, as the state
   * might have been updated multiple times during a nested `dispatch()` before
   * the listener is called. It is, however, guaranteed that all subscribers
   * registered before the `dispatch()` started will be called with the latest
   * state by the time it exits.
   *
   * @param {Function} listener A callback to be invoked on every dispatch.
   * @returns {Function} A function to remove this change listener.
   */
  function subscribe(listener) {
    if (typeof listener !== 'function') {
      throw new Error('Expected listener to be a function.');
    }

    var isSubscribed = true;

    ensureCanMutateNextListeners();
    nextListeners.push(listener);

    return function unsubscribe() {
      if (!isSubscribed) {
        return;
      }

      isSubscribed = false;

      ensureCanMutateNextListeners();
      var index = nextListeners.indexOf(listener);
      nextListeners.splice(index, 1);
    };
  }

  /**
   * Dispatches an action. It is the only way to trigger a state change.
   *
   * The `reducer` function, used to create the store, will be called with the
   * current state tree and the given `action`. Its return value will
   * be considered the **next** state of the tree, and the change listeners
   * will be notified.
   *
   * The base implementation only supports plain object actions. If you want to
   * dispatch a Promise, an Observable, a thunk, or something else, you need to
   * wrap your store creating function into the corresponding middleware. For
   * example, see the documentation for the `redux-thunk` package. Even the
   * middleware will eventually dispatch plain object actions using this method.
   *
   * @param {Object} action A plain object representing “what changed”. It is
   * a good idea to keep actions serializable so you can record and replay user
   * sessions, or use the time travelling `redux-devtools`. An action must have
   * a `type` property which may not be `undefined`. It is a good idea to use
   * string constants for action types.
   *
   * @returns {Object} For convenience, the same action object you dispatched.
   *
   * Note that, if you use a custom middleware, it may wrap `dispatch()` to
   * return something else (for example, a Promise you can await).
   */
  function dispatch(action) {
    if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_lodash_es_isPlainObject__["a" /* default */])(action)) {
      throw new Error('Actions must be plain objects. ' + 'Use custom middleware for async actions.');
    }

    if (typeof action.type === 'undefined') {
      throw new Error('Actions may not have an undefined "type" property. ' + 'Have you misspelled a constant?');
    }

    if (isDispatching) {
      throw new Error('Reducers may not dispatch actions.');
    }

    try {
      isDispatching = true;
      currentState = currentReducer(currentState, action);
    } finally {
      isDispatching = false;
    }

    var listeners = currentListeners = nextListeners;
    for (var i = 0; i < listeners.length; i++) {
      var listener = listeners[i];
      listener();
    }

    return action;
  }

  /**
   * Replaces the reducer currently used by the store to calculate the state.
   *
   * You might need this if your app implements code splitting and you want to
   * load some of the reducers dynamically. You might also need this if you
   * implement a hot reloading mechanism for Redux.
   *
   * @param {Function} nextReducer The reducer for the store to use instead.
   * @returns {void}
   */
  function replaceReducer(nextReducer) {
    if (typeof nextReducer !== 'function') {
      throw new Error('Expected the nextReducer to be a function.');
    }

    currentReducer = nextReducer;
    dispatch({ type: ActionTypes.INIT });
  }

  /**
   * Interoperability point for observable/reactive libraries.
   * @returns {observable} A minimal observable of state changes.
   * For more information, see the observable proposal:
   * https://github.com/tc39/proposal-observable
   */
  function observable() {
    var _ref;

    var outerSubscribe = subscribe;
    return _ref = {
      /**
       * The minimal observable subscription method.
       * @param {Object} observer Any object that can be used as an observer.
       * The observer object should have a `next` method.
       * @returns {subscription} An object with an `unsubscribe` method that can
       * be used to unsubscribe the observable from the store, and prevent further
       * emission of values from the observable.
       */
      subscribe: function subscribe(observer) {
        if (typeof observer !== 'object') {
          throw new TypeError('Expected the observer to be an object.');
        }

        function observeState() {
          if (observer.next) {
            observer.next(getState());
          }
        }

        observeState();
        var unsubscribe = outerSubscribe(observeState);
        return { unsubscribe: unsubscribe };
      }
    }, _ref[__WEBPACK_IMPORTED_MODULE_1_symbol_observable___default.a] = function () {
      return this;
    }, _ref;
  }

  // When a store is created, an "INIT" action is dispatched so that every
  // reducer returns their initial state. This effectively populates
  // the initial state tree.
  dispatch({ type: ActionTypes.INIT });

  return _ref2 = {
    dispatch: dispatch,
    subscribe: subscribe,
    getState: getState,
    replaceReducer: replaceReducer
  }, _ref2[__WEBPACK_IMPORTED_MODULE_1_symbol_observable___default.a] = observable, _ref2;
}

/***/ }),
/* 65 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = warning;
/**
 * Prints a warning in the console if it exists.
 *
 * @param {String} message The warning message.
 * @returns {void}
 */
function warning(message) {
  /* eslint-disable no-console */
  if (typeof console !== 'undefined' && typeof console.error === 'function') {
    console.error(message);
  }
  /* eslint-enable no-console */
  try {
    // This error was thrown as a convenience so that if you enable
    // "break on all exceptions" in your console,
    // it would pause the execution at this line.
    throw new Error(message);
    /* eslint-disable no-empty */
  } catch (e) {}
  /* eslint-enable no-empty */
}

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.defaultMemoize = defaultMemoize;
exports.createSelectorCreator = createSelectorCreator;
exports.createStructuredSelector = createStructuredSelector;
function defaultEqualityCheck(a, b) {
  return a === b;
}

function areArgumentsShallowlyEqual(equalityCheck, prev, next) {
  if (prev === null || next === null || prev.length !== next.length) {
    return false;
  }

  // Do this in a for loop (and not a `forEach` or an `every`) so we can determine equality as fast as possible.
  var length = prev.length;
  for (var i = 0; i < length; i++) {
    if (!equalityCheck(prev[i], next[i])) {
      return false;
    }
  }

  return true;
}

function defaultMemoize(func) {
  var equalityCheck = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultEqualityCheck;

  var lastArgs = null;
  var lastResult = null;
  // we reference arguments instead of spreading them for performance reasons
  return function () {
    if (!areArgumentsShallowlyEqual(equalityCheck, lastArgs, arguments)) {
      // apply arguments instead of spreading for performance.
      lastResult = func.apply(null, arguments);
    }

    lastArgs = arguments;
    return lastResult;
  };
}

function getDependencies(funcs) {
  var dependencies = Array.isArray(funcs[0]) ? funcs[0] : funcs;

  if (!dependencies.every(function (dep) {
    return typeof dep === 'function';
  })) {
    var dependencyTypes = dependencies.map(function (dep) {
      return typeof dep;
    }).join(', ');
    throw new Error('Selector creators expect all input-selectors to be functions, ' + ('instead received the following types: [' + dependencyTypes + ']'));
  }

  return dependencies;
}

function createSelectorCreator(memoize) {
  for (var _len = arguments.length, memoizeOptions = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    memoizeOptions[_key - 1] = arguments[_key];
  }

  return function () {
    for (var _len2 = arguments.length, funcs = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      funcs[_key2] = arguments[_key2];
    }

    var recomputations = 0;
    var resultFunc = funcs.pop();
    var dependencies = getDependencies(funcs);

    var memoizedResultFunc = memoize.apply(undefined, [function () {
      recomputations++;
      // apply arguments instead of spreading for performance.
      return resultFunc.apply(null, arguments);
    }].concat(memoizeOptions));

    // If a selector is called with the exact same arguments we don't need to traverse our dependencies again.
    var selector = defaultMemoize(function () {
      var params = [];
      var length = dependencies.length;

      for (var i = 0; i < length; i++) {
        // apply arguments instead of spreading and mutate a local list of params for performance.
        params.push(dependencies[i].apply(null, arguments));
      }

      // apply arguments instead of spreading for performance.
      return memoizedResultFunc.apply(null, params);
    });

    selector.resultFunc = resultFunc;
    selector.recomputations = function () {
      return recomputations;
    };
    selector.resetRecomputations = function () {
      return recomputations = 0;
    };
    return selector;
  };
}

var createSelector = exports.createSelector = createSelectorCreator(defaultMemoize);

function createStructuredSelector(selectors) {
  var selectorCreator = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : createSelector;

  if (typeof selectors !== 'object') {
    throw new Error('createStructuredSelector expects first argument to be an object ' + ('where each property is a selector, instead received a ' + typeof selectors));
  }
  var objectKeys = Object.keys(selectors);
  return selectorCreator(objectKeys.map(function (key) {
    return selectors[key];
  }), function () {
    for (var _len3 = arguments.length, values = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
      values[_key3] = arguments[_key3];
    }

    return values.reduce(function (composition, value, index) {
      composition[objectKeys[index]] = value;
      return composition;
    }, {});
  });
}

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _preact = __webpack_require__(1);

var _preactRedux = __webpack_require__(8);

var _actions = __webpack_require__(9);

var actions = _interopRequireWildcard(_actions);

var _PairView = __webpack_require__(85);

var _PairView2 = _interopRequireDefault(_PairView);

var _interact = __webpack_require__(87);

var _interact2 = _interopRequireDefault(_interact);

var _ListPane = __webpack_require__(82);

var _ListPane2 = _interopRequireDefault(_ListPane);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_Component) {
	_inherits(App, _Component);

	function App(props) {
		_classCallCheck(this, App);

		var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

		_this.state = {
			width: window.innerWidth,
			height: window.innerHeight
		};
		_this.resize = _this.resize.bind(_this);
		return _this;
	}

	_createClass(App, [{
		key: "componentDidMount",
		value: function componentDidMount() {
			window.addEventListener("resize", this.resize, false);
		}
	}, {
		key: "componentWillUnmount",
		value: function componentWillUnmount() {
			window.removeEventListener("resize", this.resize);
		}
	}, {
		key: "resize",
		value: function resize() {
			var width = window.innerWidth;
			var height = window.innerHeight;
			this.setState({ width: width, height: height });
		}
	}, {
		key: "render",
		value: function render(props, state) {

			var dividerWidth = 9.0;
			var width = document.body.offsetWidth;
			var height = document.body.offsetHeight;
			var headerHeight = 38;
			var dividerRatio = this.props.now.dividerRatio;
			var controlHeight = 20;
			var paneHeight = height - controlHeight;
			var pairFrame = { origin: { x: 0, y: 0 }, size: { width: width, height: height } };
			var pairProps = {
				dividerWidth: dividerWidth,
				dividerRatio: dividerRatio,
				resizeDivider: this.props.resizeDivider,
				draggingDivider: this.props.draggingDivider,
				frame: pairFrame
			};

			return (0, _preact.h)(
				_PairView2.default,
				pairProps,
				(0, _preact.h)(_ListPane2.default, { fileName: "sunshine" }),
				(0, _preact.h)(_interact2.default, {
					radius: 20,
					rings: 50,
					sides: 50,
					shape: 1,

					width: this.state.width,
					height: this.state.height
				})
			);
		}
	}]);

	return App;
}(_preact.Component);

function mapStateToProps(state, ownProps) {
	return Object.assign({}, state, ownProps);
}
var ConnectedApp = (0, _preactRedux.connect)(mapStateToProps, actions)(App);
exports.default = ConnectedApp;

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.main = main;

var _actions = __webpack_require__(9);

var actions = _interopRequireWildcard(_actions);

var _selectors = __webpack_require__(23);

var selectors = _interopRequireWildcard(_selectors);

var _presets = __webpack_require__(88);

var _deepFreeze = __webpack_require__(105);

var _deepFreeze2 = _interopRequireDefault(_deepFreeze);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function processPresets(values) {
	var topLevelIds = [];
	var result = {
		0: {
			childIds: topLevelIds
		}
	};
	values.forEach(function (item) {
		topLevelIds.push(item.id);
		processPreset(item, result);
	});
	return result;
}
function processPreset(value, result) {
	var key = value.id;
	var childIds = [];
	if (value.type === "group") {
		value.default.forEach(function (item) {
			childIds.push(item.id);
			processPreset(item, result);
		});
		result[key] = {
			id: key,
			value: value.displayName,
			type: value.type,
			name: value.displayName,
			childIds: childIds
		};
	} else if (value.type === "bezier") {
		value.default.forEach(function (item) {
			childIds.push(item.id);
			processPreset(item, result);
		});
		var controlKey = value.id + "control";
		result[controlKey] = {
			id: controlKey,
			value: value.displayName,
			type: value.type,
			name: value.displayName,
			choiceIds: childIds
		};
		result[key] = {
			id: key,
			value: value.displayName,
			type: "array",
			name: value.displayName,
			childIds: [controlKey],
			choiceIds: childIds
		};
	} else {
		// not a group
		result[key] = Object.assign({
			name: value.displayName,
			value: value.default
		}, value);
	}
}

var initialTreeDict = processPresets(_presets.presets);

function idSorter(flattenedIds) {
	return function (a, b) {
		var A = flattenedIds.indexOf(a);
		var B = flattenedIds.indexOf(b);
		return A - B;
	};
}

function main() {
	var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	var initialAction = arguments[1];

	var modifiedAction = Object.assign({ state: state }, initialAction);
	var result = {
		// required:
		action: initialAction,
		history: history(state.history, modifiedAction),
		// preservables:
		now: now(state.now, modifiedAction),
		// custom:
		draggingDivider: draggingDivider(state.draggingDivider, modifiedAction)
	};
	(0, _deepFreeze2.default)(result);
	return result;
}
function undoables() {
	var present = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	var action = arguments[1];

	return {
		// preservables:
		before: before(present.before, action),
		after: after(present.after, action),
		// custom:
		normalizedTreeDict: normalizedTreeDict(present.normalizedTreeDict, action)
	};
}
function preservables() {
	var now = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	var action = arguments[1];

	return {
		// custom:
		collapsedIds: collapsedIds(now.collapsedIds, action),
		editingId: editingId(now.editingId, action), // Editing state probably doesn"t belong anywhere in here.
		dividerRatio: dividerRatio(now.dividerRatio, action),

		worldRotation: worldRotation(now.worldRotation, action),
		cameraOrientation: cameraOrientation(now.cameraOrientation, action)
	};
}

function before(state, action) {
	var previousState = action.state;
	if (action.undoable) return previousState.now;
	if (previousState && previousState.history) return previousState.history.present.before;
	return preservables(state, action);
}
function after(state, action) {
	var previousState = action.state;
	if (action.undoable) return preservables(previousState.now, action);
	if (previousState && previousState.history) return previousState.history.present.after;
	return preservables(state, action);
}
function now(state, action) {
	if (action.type === actions.UNDO) return action.state.history.present.before; // take you to where you were right before you made the change
	if (action.type === actions.REDO) return action.state.history.future[0].after; // take you to where you were right after you made the change
	return preservables(state, action);
}

function initialHistory() {
	return {
		past: [],
		present: undoables(undefined, {}),
		future: []
	};
}

function history() {
	var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialHistory();
	var action = arguments[1];
	var past = state.past,
	    present = state.present,
	    future = state.future;

	var isPreserving = action.preserve;
	var previousState = action.state;
	var previousAction = previousState.action;
	var isCoalescing = action.coalesce && previousAction && previousAction.type === action.type;

	if (action.type === actions.UNDO) return {
		past: past.slice(0, past.length - 1),
		present: past[past.length - 1],
		future: [present].concat(_toConsumableArray(future))
	};

	if (action.type === actions.REDO) return {
		past: [].concat(_toConsumableArray(past), [present]),
		present: future[0],
		future: future.slice(1)
	};

	if (isCoalescing || isPreserving) return {
		past: past,
		present: undoables(present, action),
		future: future
	};

	if (action.undoable) return {
		past: [].concat(_toConsumableArray(past), [present]),
		present: undoables(present, action),
		future: []
	};

	return state;
}

function draggingDivider(state, action) {
	if (action.type === actions.SET_DRAGGING_DIVIDER) {
		return action.draggingDivider;
	}
	return state;
}
function dividerRatio() {
	var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0.333;
	var action = arguments[1];

	if (action.type === actions.RESIZE_DIVIDER) return action.value;
	return state;
}

var zeroWorldRotation = [0, 0, 0, 0];
function worldRotation() {
	var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : zeroWorldRotation;
	var action = arguments[1];

	if (action.type === actions.CHANGE_WORLD_ROTATION) return action.value.slice(0);
	if (action.type === actions.RESET_WORLD_ROTATION_AND_CAMERA_ORIENTATION) return zeroWorldRotation;
	return state;
}

var zeroCameraOrientation = [0, 0, -50];
function cameraOrientation() {
	var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : zeroCameraOrientation;
	var action = arguments[1];

	if (action.type === actions.CHANGE_CAMERA_ORIENTATION) return action.value.slice(0);
	if (action.type === actions.RESET_WORLD_ROTATION_AND_CAMERA_ORIENTATION) return zeroCameraOrientation;
	return state;
}

function normalizedTreeDict() {
	var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialTreeDict;
	var action = arguments[1];
	var nodeId = action.nodeId,
	    parentId = action.parentId;

	var source = state;

	if (typeof nodeId === "undefined") return source;

	var normalizedTreeDict = {};
	Object.keys(source).forEach(function (key) {
		normalizedTreeDict[key] = source[key];
	});

	if (Array.isArray(nodeId)) {
		// Some actions affect a single node, other actions affect the selection, this might benefit from a refactoring
		nodeId.forEach(function (id, index) {
			var subAction = Object.assign({}, action, { nodeId: id, multipleSelectionIndex: index });
			normalizedTreeDict[id] = treeNode(source[id], subAction);
			if (typeof parentId !== "undefined") normalizedTreeDict[parentId[index]] = parentNode(source[parentId[index]], subAction); // if nodeId is array parentId is guaranteed to also be an array
		});
	} else {
		var node = source[nodeId];
		if (node.type === "array") {
			var array = action.value.split(",").map(parseFloat);
			var choiceIds = node.choiceIds;
			choiceIds.forEach(function (id, index) {
				var subAction = Object.assign({}, action, { nodeId: id, value: array[index] });
				normalizedTreeDict[id] = treeNode(source[id], subAction);
			});
		} else {
			normalizedTreeDict[nodeId] = treeNode(source[nodeId], action);
			if (typeof parentId !== "undefined") normalizedTreeDict[parentId] = parentNode(source[parentId], action);
		}
	}
	return normalizedTreeDict;
}

function parentNode() {
	var parent = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { childIds: [] };
	var action = arguments[1];

	return parent;
}

function treeNode() {
	var node = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { childIds: [] };
	var action = arguments[1];

	switch (action.type) {
		case actions.CHANGE_SETTING:
			return Object.assign({}, node, {
				value: action.value
			});
		default:
			return node;
	}
}

function collapsedIds() {
	var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
	var action = arguments[1];

	if (action.type === actions.DISCLOSURE_TOGGLE) {
		var nodeId = action.nodeId;
		var _collapsedIds = state.slice(0);
		var index = _collapsedIds.indexOf(nodeId);
		if (index < 0) {
			_collapsedIds.push(nodeId);
			var flattenedIds = selectors.flattenedIdsSelector(action.state);
			var sortFunction = idSorter(flattenedIds);
			_collapsedIds.sort(sortFunction);
		} else {
			_collapsedIds.splice(index, 1);
		}
		return _collapsedIds;
	}
	return state;
}

function editingId() {
	var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : -1;
	var action = arguments[1];

	if (action.type === actions.EDIT_NODE) return action.nodeId;
	return state;
}

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _preact = __webpack_require__(1);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ArrayCell = function (_Component) {
	_inherits(ArrayCell, _Component);

	function ArrayCell(props) {
		_classCallCheck(this, ArrayCell);

		var _this = _possibleConstructorReturn(this, (ArrayCell.__proto__ || Object.getPrototypeOf(ArrayCell)).call(this, props));

		_this.handleChangeText = _this.handleChangeText.bind(_this);
		_this.handleFocusText = _this.handleFocusText.bind(_this);
		_this.handleBlurText = _this.handleBlurText.bind(_this);
		_this.handleKeyDown = _this.handleKeyDown.bind(_this);
		_this.refCallback = _this.refCallback.bind(_this);
		_this.element = null;
		return _this;
	}

	_createClass(ArrayCell, [{
		key: "handleChangeText",
		value: function handleChangeText(e) {
			var value = e.target.value;
			var nodeId = this.props.node.id;
			this.props.changeSetting(nodeId, value);
		}
	}, {
		key: "handleFocusText",
		value: function handleFocusText(e) {
			window.addEventListener("keydown", this.handleKeyDown, false);
		}
	}, {
		key: "handleBlurText",
		value: function handleBlurText(e) {
			window.removeEventListener("keydown", this.handleKeyDown);
		}
	}, {
		key: "handleKeyDown",
		value: function handleKeyDown(e) {
			if (e.keyCode !== 13) return;
			e.stopPropagation();
			e.preventDefault();
			this.element.blur();
			return false;
		}
	}, {
		key: "refCallback",
		value: function refCallback(element) {
			if (this.element === null) this.element = element;
		}
	}, {
		key: "render",
		value: function render() {
			var id = this.props.id;

			var node = this.props.node;

			var childNodes = this.props.childNodes || [];
			var childValues = childNodes.map(function (node) {
				return node.value;
			});
			var value = childValues.join(", ");

			var textFieldStyle = {
				marginLeft: "16px",
				border: "0px",
				fontSize: "14px",
				height: "20px",
				left: "-1px", // fudge
				top: "-2px", // fudge
				backgroundColor: "white",
				whiteSpace: "nowrap"
			};

			var textFieldProps = {
				type: "text",
				name: id,
				style: textFieldStyle,
				value: value,
				ref: this.refCallback
			};

			textFieldProps.onChange = this.handleChangeText;
			textFieldProps.onFocus = this.handleFocusText;
			textFieldProps.onBlur = this.handleBlurText;
			textFieldProps.onKeyDown = this.handleKeyDownText;

			var textField = (0, _preact.h)("input", textFieldProps);

			return textField;
		}
	}]);

	return ArrayCell;
}(_preact.Component);
exports.default = ArrayCell;

/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _preact = __webpack_require__(1);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var bezier = __webpack_require__(24);
var cubic = __webpack_require__(24).prepare(4);

var BezierCell = function (_Component) {
	_inherits(BezierCell, _Component);

	function BezierCell(props) {
		_classCallCheck(this, BezierCell);

		var _this = _possibleConstructorReturn(this, (BezierCell.__proto__ || Object.getPrototypeOf(BezierCell)).call(this, props));

		_this.element = null;
		_this.mouseDown = _this.mouseDown.bind(_this);
		_this.mouseMove = _this.mouseMove.bind(_this);
		_this.mouseUp = _this.mouseUp.bind(_this);
		_this.refCallback = _this.refCallback.bind(_this);
		_this.dimension = 100;
		_this.dragging = 0;
		_this.rect = null;
		return _this;
	}

	_createClass(BezierCell, [{
		key: "mouseMove",
		value: function mouseMove(e) {
			var dimension = this.dimension;
			var rect = this.rect;
			var x = e.clientX - rect.left;
			var y = dimension - (e.clientY - rect.top);
			var dragging = this.dragging;
			var changeSetting = this.props.changeSetting;
			var variables = this.props.node.choiceIds;
			if (dragging === 1) {
				changeSetting(variables[0], x / dimension);
				changeSetting(variables[1], y / dimension);
			} else if (dragging === 2) {
				changeSetting(variables[2], x / dimension);
				changeSetting(variables[3], y / dimension);
			}
		}
	}, {
		key: "mouseUp",
		value: function mouseUp(e) {
			document.removeEventListener("mousemove", this.mouseMove);
			document.removeEventListener("mouseup", this.mouseUp);
			this.dragging = 0;
		}
	}, {
		key: "mouseDown",
		value: function mouseDown(e) {
			var threshold = 15;
			var element = this.element;
			var dimension = this.dimension;
			var rect = element.getBoundingClientRect();
			this.rect = rect;
			var x = e.clientX - rect.left;
			var y = e.clientY - rect.top;
			var x0 = this.props.value[0] * dimension;
			var y0 = dimension - this.props.value[1] * dimension;
			var x1 = this.props.value[2] * dimension;
			var y1 = dimension - this.props.value[3] * dimension;
			if (Math.abs(x - x0) < threshold && Math.abs(y - y0) < threshold) {
				this.dragging = 1;
			} else if (Math.abs(x - x1) < threshold && Math.abs(y - y1) < threshold) {
				this.dragging = 2;
			}
			if (this.dragging) {
				document.addEventListener("mousemove", this.mouseMove);
				document.addEventListener("mouseup", this.mouseUp);
			}
		}
	}, {
		key: "componentDidUpdate",
		value: function componentDidUpdate() {
			this.draw();
		}
	}, {
		key: "refCallback",
		value: function refCallback(element) {
			if (this.element === null) {
				this.element = element;
				element.width = this.dimension;
				element.height = this.dimension;
				this.draw();
			}
		}
	}, {
		key: "draw",
		value: function draw() {
			var canvas = this.element;
			if (!canvas) return;
			var context = canvas.getContext("2d");
			var childNodes = this.props.node.childNodes;
			var dimension = this.dimension;
			var R = dimension;
			var x0 = this.props.value[0];
			var y0 = this.props.value[1];
			var x1 = this.props.value[2];
			var y1 = this.props.value[3];
			var x = [0, x0, x1, 1];
			var y = [0, y0, y1, 1];
			var width = dimension;
			var height = dimension;
			canvas.width = width;
			canvas.height = height;
			context.clearRect(0, 0, width, height);
			context.beginPath();
			for (var t = 0; t < 1; t += 0.01) {
				var X = cubic(x, t) * R;
				var Y = cubic(y, t) * R;
				context.lineTo(X, dimension - Y);
			}
			context.moveTo(0, dimension - 0);
			context.lineTo(x0 * R, dimension - y0 * R);
			context.moveTo(R, dimension - R);
			context.lineTo(x1 * R, dimension - y1 * R);
			context.stroke();
			context.closePath();
		}
	}, {
		key: "render",
		value: function render() {
			var canvasProps = {
				ref: this.refCallback,
				onMouseDown: this.mouseDown,
				style: {
					width: "100px",
					height: "100px",
					position: "relative"
				}
			};
			var canvas = (0, _preact.h)("canvas", canvasProps);
			return canvas;
		}
	}]);

	return BezierCell;
}(_preact.Component);
exports.default = BezierCell;

/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _preact = __webpack_require__(1);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BoolCell = function (_Component) {
	_inherits(BoolCell, _Component);

	function BoolCell(props) {
		_classCallCheck(this, BoolCell);

		var _this = _possibleConstructorReturn(this, (BoolCell.__proto__ || Object.getPrototypeOf(BoolCell)).call(this, props));

		_this.handleCheckClick = _this.handleCheckClick.bind(_this);
		return _this;
	}

	_createClass(BoolCell, [{
		key: "handleCheckClick",
		value: function handleCheckClick(e) {
			var nodeId = this.props.node.id;
			var value = !this.props.node.value;
			this.props.changeSetting(nodeId, value);
		}
	}, {
		key: "render",
		value: function render() {
			var id = this.props.id;

			var node = this.props.node;
			var checked = node.value;

			var inputProps = {
				type: "checkbox",
				id: id,
				name: id,
				checked: checked,
				onClick: this.handleCheckClick,
				style: {
					zIndex: 1,
					width: "16px",
					height: "20px",
					marginTop: "-1px" // !!! one pixel shift
				}
			};

			return (0, _preact.h)("input", inputProps);
		}
	}]);

	return BoolCell;
}(_preact.Component);
exports.default = BoolCell;

/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _preact = __webpack_require__(1);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FloatCell = function (_Component) {
	_inherits(FloatCell, _Component);

	function FloatCell(props) {
		_classCallCheck(this, FloatCell);

		var _this = _possibleConstructorReturn(this, (FloatCell.__proto__ || Object.getPrototypeOf(FloatCell)).call(this, props));

		_this.handleChangeText = _this.handleChangeText.bind(_this);
		_this.handleFocusText = _this.handleFocusText.bind(_this);
		_this.handleBlurText = _this.handleBlurText.bind(_this);
		_this.handleKeyDown = _this.handleKeyDown.bind(_this);
		_this.refCallback = _this.refCallback.bind(_this);
		_this.element = null;
		return _this;
	}

	_createClass(FloatCell, [{
		key: "handleChangeText",
		value: function handleChangeText(e) {
			var value = e.target.value;
			var nodeId = this.props.node.id;
			this.props.changeSetting(nodeId, value);
		}
	}, {
		key: "handleFocusText",
		value: function handleFocusText(e) {
			window.addEventListener("keydown", this.handleKeyDown, false);
		}
	}, {
		key: "handleBlurText",
		value: function handleBlurText(e) {
			window.removeEventListener("keydown", this.handleKeyDown);
		}
	}, {
		key: "handleKeyDown",
		value: function handleKeyDown(e) {
			if (e.keyCode !== 13) return;
			e.stopPropagation();
			e.preventDefault();
			this.element.blur();
			return false;
		}
	}, {
		key: "refCallback",
		value: function refCallback(element) {
			if (this.element === null) this.element = element;
		}
	}, {
		key: "render",
		value: function render() {
			var id = this.props.id;

			var node = this.props.node;

			var textFieldStyle = {
				marginLeft: "16px",
				border: "0px",
				fontSize: "14px",
				height: "20px",
				left: "-1px", // fudge
				top: "-2px", // fudge
				backgroundColor: "white",
				whiteSpace: "nowrap"
			};

			var textFieldProps = {
				type: "text",
				name: id,
				style: textFieldStyle,
				value: node.value,
				ref: this.refCallback
			};

			textFieldProps.onChange = this.handleChangeText;
			textFieldProps.onFocus = this.handleFocusText;
			textFieldProps.onBlur = this.handleBlurText;
			textFieldProps.onKeyDown = this.handleKeyDownText;

			var textField = (0, _preact.h)("input", textFieldProps);

			return textField;
		}
	}]);

	return FloatCell;
}(_preact.Component);
exports.default = FloatCell;

/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _preact = __webpack_require__(1);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var IntCell = function (_Component) {
	_inherits(IntCell, _Component);

	function IntCell(props) {
		_classCallCheck(this, IntCell);

		var _this = _possibleConstructorReturn(this, (IntCell.__proto__ || Object.getPrototypeOf(IntCell)).call(this, props));

		_this.handleChangeText = _this.handleChangeText.bind(_this);
		_this.handleFocusText = _this.handleFocusText.bind(_this);
		_this.handleBlurText = _this.handleBlurText.bind(_this);
		_this.handleKeyDown = _this.handleKeyDown.bind(_this);
		_this.refCallback = _this.refCallback.bind(_this);
		_this.element = null;
		return _this;
	}

	_createClass(IntCell, [{
		key: "handleChangeText",
		value: function handleChangeText(e) {
			var value = e.target.value;
			var nodeId = this.props.node.id;
			this.props.changeSetting(nodeId, value);
		}
	}, {
		key: "handleFocusText",
		value: function handleFocusText(e) {
			window.addEventListener("keydown", this.handleKeyDown, false);
		}
	}, {
		key: "handleBlurText",
		value: function handleBlurText(e) {
			window.removeEventListener("keydown", this.handleKeyDown);
		}
	}, {
		key: "handleKeyDown",
		value: function handleKeyDown(e) {
			if (e.keyCode !== 13) return;
			e.stopPropagation();
			e.preventDefault();
			this.element.blur();
			return false;
		}
	}, {
		key: "refCallback",
		value: function refCallback(element) {
			if (this.element === null) this.element = element;
		}
	}, {
		key: "render",
		value: function render() {
			var id = this.props.id;

			var node = this.props.node;

			var textFieldStyle = {
				marginLeft: "16px",
				border: "0px",
				fontSize: "14px",
				height: "20px",
				left: "-1px", // fudge
				top: "-2px", // fudge
				backgroundColor: "white",
				whiteSpace: "nowrap"
			};

			var textFieldProps = {
				type: "text",
				name: id,
				style: textFieldStyle,
				value: node.value,
				ref: this.refCallback
			};

			textFieldProps.onChange = this.handleChangeText;
			textFieldProps.onFocus = this.handleFocusText;
			textFieldProps.onBlur = this.handleBlurText;
			textFieldProps.onKeyDown = this.handleKeyDownText;

			var textField = (0, _preact.h)("input", textFieldProps);

			return textField;
		}
	}]);

	return IntCell;
}(_preact.Component);
exports.default = IntCell;

/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _preact = __webpack_require__(1);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LabelCell = function (_Component) {
	_inherits(LabelCell, _Component);

	function LabelCell() {
		_classCallCheck(this, LabelCell);

		return _possibleConstructorReturn(this, (LabelCell.__proto__ || Object.getPrototypeOf(LabelCell)).apply(this, arguments));
	}

	_createClass(LabelCell, [{
		key: "render",
		value: function render() {
			var node = this.props.node;
			var nodeText = node.value;
			var labelStyle = {
				marginLeft: "16px",
				fontSize: "14px",
				height: "20px",
				whiteSpace: "nowrap"
			};
			var labelProps = {
				style: labelStyle
			};

			var label = (0, _preact.h)(
				"span",
				labelProps,
				nodeText
			);
			return label;
		}
	}]);

	return LabelCell;
}(_preact.Component);
exports.default = LabelCell;

/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _preact = __webpack_require__(1);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LengthCell = function (_Component) {
	_inherits(LengthCell, _Component);

	function LengthCell(props) {
		_classCallCheck(this, LengthCell);

		var _this = _possibleConstructorReturn(this, (LengthCell.__proto__ || Object.getPrototypeOf(LengthCell)).call(this, props));

		_this.handleChangeText = _this.handleChangeText.bind(_this);
		_this.handleFocusText = _this.handleFocusText.bind(_this);
		_this.handleBlurText = _this.handleBlurText.bind(_this);
		_this.handleKeyDown = _this.handleKeyDown.bind(_this);
		_this.refCallback = _this.refCallback.bind(_this);
		_this.element = null;
		return _this;
	}

	_createClass(LengthCell, [{
		key: "handleChangeText",
		value: function handleChangeText(e) {
			var value = e.target.value;
			var nodeId = this.props.node.id;
			this.props.changeSetting(nodeId, value);
		}
	}, {
		key: "handleFocusText",
		value: function handleFocusText(e) {
			window.addEventListener("keydown", this.handleKeyDown, false);
		}
	}, {
		key: "handleBlurText",
		value: function handleBlurText(e) {
			window.removeEventListener("keydown", this.handleKeyDown);
		}
	}, {
		key: "handleKeyDown",
		value: function handleKeyDown(e) {
			if (e.keyCode !== 13) return;
			e.stopPropagation();
			e.preventDefault();
			this.element.blur();
			return false;
		}
	}, {
		key: "refCallback",
		value: function refCallback(element) {
			if (this.element === null) this.element = element;
		}
	}, {
		key: "render",
		value: function render() {
			var id = this.props.id;

			var node = this.props.node;

			var textFieldStyle = {
				marginLeft: "16px",
				border: "0px",
				fontSize: "14px",
				height: "20px",
				left: "-1px", // fudge
				top: "-2px", // fudge
				backgroundColor: "white",
				whiteSpace: "nowrap"
			};

			var textFieldProps = {
				type: "text",
				name: id,
				style: textFieldStyle,
				value: node.value,
				ref: this.refCallback
			};

			textFieldProps.onChange = this.handleChangeText;
			textFieldProps.onFocus = this.handleFocusText;
			textFieldProps.onBlur = this.handleBlurText;
			textFieldProps.onKeyDown = this.handleKeyDownText;

			var textField = (0, _preact.h)("input", textFieldProps);

			return textField;
		}
	}]);

	return LengthCell;
}(_preact.Component);
exports.default = LengthCell;

/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _preact = __webpack_require__(1);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ListCell = function (_Component) {
	_inherits(ListCell, _Component);

	function ListCell(props) {
		_classCallCheck(this, ListCell);

		var _this = _possibleConstructorReturn(this, (ListCell.__proto__ || Object.getPrototypeOf(ListCell)).call(this, props));

		_this.handleListChange = _this.handleListChange.bind(_this);

		return _this;
	}

	_createClass(ListCell, [{
		key: "handleListChange",
		value: function handleListChange(e) {
			var value = e.target.value;
			var nodeId = this.props.node.id;
			this.props.changeSetting(nodeId, value);
		}
	}, {
		key: "render",
		value: function render(props, state) {
			var node = this.props.node;
			var value = node.value;
			var values = node.listValues;
			var labels = node.listLabels;
			var children = values.map(function (item, index) {
				return (0, _preact.h)(
					"option",
					{ value: item },
					labels[index]
				);
			});
			return (0, _preact.h)(
				"select",
				{ value: value, onChange: this.handleListChange },
				children
			);
		}
	}]);

	return ListCell;
}(_preact.Component);
exports.default = ListCell;

/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _preact = __webpack_require__(1);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TextCell = function (_Component) {
	_inherits(TextCell, _Component);

	function TextCell(props) {
		_classCallCheck(this, TextCell);

		var _this = _possibleConstructorReturn(this, (TextCell.__proto__ || Object.getPrototypeOf(TextCell)).call(this, props));

		_this.handleChangeText = _this.handleChangeText.bind(_this);
		_this.handleFocusText = _this.handleFocusText.bind(_this);
		_this.handleBlurText = _this.handleBlurText.bind(_this);
		_this.handleKeyDown = _this.handleKeyDown.bind(_this);
		_this.refCallback = _this.refCallback.bind(_this);
		_this.element = null;
		return _this;
	}

	_createClass(TextCell, [{
		key: "handleChangeText",
		value: function handleChangeText(e) {
			var value = e.target.value;
			var nodeId = this.props.node.id;
			this.props.changeSetting(nodeId, value);
		}
	}, {
		key: "handleFocusText",
		value: function handleFocusText(e) {
			window.addEventListener("keydown", this.handleKeyDown, false);
		}
	}, {
		key: "handleBlurText",
		value: function handleBlurText(e) {
			window.removeEventListener("keydown", this.handleKeyDown);
		}
	}, {
		key: "handleKeyDown",
		value: function handleKeyDown(e) {
			if (e.keyCode !== 13) return;
			e.stopPropagation();
			e.preventDefault();
			this.element.blur();
			return false;
		}
	}, {
		key: "refCallback",
		value: function refCallback(element) {
			if (this.element === null) this.element = element;
		}
	}, {
		key: "render",
		value: function render() {
			var id = this.props.id;

			var node = this.props.node;

			var textFieldStyle = {
				marginLeft: "16px",
				border: "0px",
				fontSize: "14px",
				height: "20px",
				left: "-1px", // fudge
				top: "-2px", // fudge
				backgroundColor: "white",
				whiteSpace: "nowrap"
			};

			var textFieldProps = {
				type: "text",
				name: id,
				style: textFieldStyle,
				value: node.value,
				ref: this.refCallback
			};

			textFieldProps.onChange = this.handleChangeText;
			textFieldProps.onFocus = this.handleFocusText;
			textFieldProps.onBlur = this.handleBlurText;
			textFieldProps.onKeyDown = this.handleKeyDownText;

			var textField = (0, _preact.h)("input", textFieldProps);

			return textField;
		}
	}]);

	return TextCell;
}(_preact.Component);
exports.default = TextCell;

/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _preact = __webpack_require__(1);

var DisclosureTriangle = function DisclosureTriangle(props) {
	var collapsed = props.collapsed;
	var color = "darkgray";
	var style = {
		position: "relative",
		marginTop: "5px",
		marginBottom: "-10px",
		borderStyle: "solid",
		borderWidth: "10px 5px 0 5px",
		borderColor: color + " transparent transparent transparent",
		width: "0px",
		height: "0px"
	};
	if (collapsed) {
		style.borderWidth = "5px 0 5px 10px";
		style.borderColor = "transparent transparent transparent " + color;
	}
	return (0, _preact.h)("div", { style: style });
};

exports.default = DisclosureTriangle;

/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _preact = __webpack_require__(1);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Divider = function (_Component) {
	_inherits(Divider, _Component);

	function Divider(props) {
		_classCallCheck(this, Divider);

		var _this = _possibleConstructorReturn(this, (Divider.__proto__ || Object.getPrototypeOf(Divider)).call(this, props));

		_this.element = null;
		_this.mouseDown = _this.mouseDown.bind(_this);
		_this.mouseMove = _this.mouseMove.bind(_this);
		_this.mouseUp = _this.mouseUp.bind(_this);
		_this.elementDidMount = _this.elementDidMount.bind(_this);
		return _this;
	}

	_createClass(Divider, [{
		key: "componentWillUnmount",
		value: function componentWillUnmount() {
			this.element.removeEventListener("mousedown", this.mouseDown);
		}
	}, {
		key: "mouseDown",
		value: function mouseDown(e) {
			e.preventDefault();
			e.stopPropagation();
			this.props.setDraggingDivider(true);
			document.addEventListener("mousemove", this.mouseMove, false);
			document.addEventListener("mouseup", this.mouseUp, false);
		}
	}, {
		key: "mouseMove",
		value: function mouseMove(e) {
			e.preventDefault();
			e.stopPropagation();
			this.props.resizeDivider(e);
		}
	}, {
		key: "mouseUp",
		value: function mouseUp(e) {
			e.preventDefault();
			e.stopPropagation();
			document.removeEventListener("mousemove", this.mouseMove);
			document.removeEventListener("mouseup", this.mouseUp);
			this.props.setDraggingDivider(false);
		}
	}, {
		key: "elementDidMount",
		value: function elementDidMount(element) {
			if (!this.element) {
				this.element = element;
				element.addEventListener("mousedown", this.mouseDown, false);
			}
		}
	}, {
		key: "render",
		value: function render() {

			var frame = this.props.frame;
			var style = {
				position: "absolute",
				left: frame.origin.x + "px",
				top: frame.origin.y + "px",
				width: frame.size.width + "px",
				height: frame.size.height + "px",
				cursor: this.props.cursor,
				background: "lightgray",
				zIndex: 1
			};

			// 		const drawLine = false;
			// 		if (drawLine) {
			// 			const half = (frame.size.width-1)/2;
			// 			style.borderLeft = half+"px solid rgba(255, 255, 0, 0)";
			// 			style.borderRight = half+"px solid rgba(255, 255, 0, 0)";
			// 			style.backgroundColor = "lightgray";
			// 			style.boxSizing = "border-box";
			// 			style.backgroundClip = "padding-box";
			// 			style.WebkitBoxSizing = "border-box";
			// 			style.WebkitBackgroundClip = "padding";
			// 		}
			var props = {
				key: "divider",
				className: "divider",
				style: style,
				ref: this.elementDidMount
			};
			return (0, _preact.h)("div", props);
		}
	}]);

	return Divider;
}(_preact.Component);
exports.default = Divider;

/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _preact = __webpack_require__(1);

var _preactRedux = __webpack_require__(8);

var _actions = __webpack_require__(9);

var actions = _interopRequireWildcard(_actions);

var _plot = __webpack_require__(35);

var plot = _interopRequireWildcard(_plot);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var normalize = __webpack_require__(2).normalizeArray;
var calculateNormals = __webpack_require__(2).faceNormals;
var lgp = __webpack_require__(144);

var ListHeader = function (_Component) {
	_inherits(ListHeader, _Component);

	function ListHeader(props) {
		_classCallCheck(this, ListHeader);

		var _this = _possibleConstructorReturn(this, (ListHeader.__proto__ || Object.getPrototypeOf(ListHeader)).call(this, props));

		_this.handleUndoClick = _this.handleUndoClick.bind(_this);
		_this.handleRedoClick = _this.handleRedoClick.bind(_this);
		_this.handleStlClick = _this.handleStlClick.bind(_this);
		_this.handleObjClick = _this.handleObjClick.bind(_this);
		return _this;
	}

	_createClass(ListHeader, [{
		key: "handleUndoClick",
		value: function handleUndoClick(e) {
			this.props.undo();
		}
	}, {
		key: "handleRedoClick",
		value: function handleRedoClick(e) {
			this.props.redo();
		}
	}, {
		key: "handleStlClick",
		value: function handleStlClick(e) {
			var mesh = this.props.mesh;
			lgp.fileWriter(this.props.fileName + ".stl", lgp.stlSerializer({
				positions: mesh.positions,
				cells: mesh.cells
			}));
		}
	}, {
		key: "handleObjClick",
		value: function handleObjClick(e) {
			var mesh = this.props.mesh;
			lgp.fileWriter(this.props.fileName + ".obj", lgp.objSerializer({
				positions: mesh.positions,
				cells: mesh.cells
			}));
		}
	}, {
		key: "render",
		value: function render(props, state) {
			var style = {
				width: "100%",
				whiteSpace: "nowrap"
			};
			return (0, _preact.h)(
				"div",
				{ style: style },
				(0, _preact.h)(
					"button",
					{ onClick: this.handleUndoClick, disabled: this.props.history.past.length === 0 },
					"undo"
				),
				(0, _preact.h)(
					"button",
					{ onClick: this.handleRedoClick, disabled: this.props.history.future.length === 0 },
					"redo"
				),
				(0, _preact.h)(
					"button",
					{ onClick: this.handleStlClick, disabled: this.props.debugging === true },
					"stl"
				),
				(0, _preact.h)(
					"button",
					{ onClick: this.handleObjClick, disabled: this.props.debugging === true },
					"obj"
				)
			);
		}
	}]);

	return ListHeader;
}(_preact.Component);

function mapStateToProps(state, ownProps) {
	return Object.assign({}, ownProps, {
		mesh: plot.meshSelector(state),
		debugging: plot.debuggingSelector(state),
		history: state.history
	});
}
var ConnectedListHeader = (0, _preactRedux.connect)(mapStateToProps, actions)(ListHeader);
exports.default = ConnectedListHeader;

/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = ListLayout;
var notFound = Number.MAX_VALUE;

function makePoint(x, y) {
	return {
		x: x,
		y: y
	};
}
function makeSize(width, height) {
	return {
		width: width,
		height: height
	};
}
function makeRect(x, y, width, height) {
	return {
		origin: makePoint(x, y),
		size: makeSize(width, height)
	};
}

function makeRange(location, length) {
	return {
		location: location,
		length: length
	};
}

function nullRange() {
	return makeRange(notFound, 0);
}

function intersectionRange(a, b) {
	if (a.location + a.length <= b.location || b.location + b.length <= a.location) return nullRange();
	var location = Math.max(a.location, b.location);
	var end = Math.min(a.location + a.length, b.location + b.length);
	return { location: location, length: end - location };
}

function ListLayout(props) {
	if (!props) throw new Error("ListLayout no props");
	if (!Object.keys(props).length) throw new Error("ListLayout no props");

	Object.keys(props).forEach(function (key) {
		// TODO: only copy the props you need
		this[key] = props[key];
	}.bind(this));
}

ListLayout.prototype = {
	rangeOfItemsInRect: function rangeOfItemsInRect(rect) {
		var itemCount = this.numberOfItems();
		var fullRange = makeRange(0, itemCount);
		var itemsPerRow = 1;
		var indexOrigin = 0;
		var itemRect = this.rectOfItemAtIndex(indexOrigin);
		var y = itemRect.origin.y + itemRect.size.height;
		while (y < rect.origin.y) {
			indexOrigin += itemsPerRow;
			var otherRect = this.rectOfItemAtIndex(indexOrigin);
			y = otherRect.origin.y + otherRect.size.height;
		}
		var indexMax = indexOrigin + itemsPerRow;
		while (y < rect.origin.y + rect.size.height) {
			indexMax += itemsPerRow;
			y = this.rectOfItemAtIndex(indexMax).origin.y;
		}
		var range = makeRange(indexOrigin, indexMax - indexOrigin);
		return intersectionRange(range, fullRange);
	},

	numberOfItems: function numberOfItems() {
		return this.exposedIds.length;
	},

	lineRangeOfItemAtIndex: function lineRangeOfItemAtIndex(index) {
		// This was for NSLayoutManager but itemsPerRow would be a lot easier.
		if (index > this.numberOfItems()) return nullRange();
		return makeRange(index, 1);
	},

	baselineOffsetOfItemAtIndex: function baselineOffsetOfItemAtIndex(index) {
		// This was for NSLayoutManager
		return 0;
	},

	keyOfItemAtIndex: function keyOfItemAtIndex(index) {
		return this.exposedIds[index];
	},

	indexOfItemWithKey: function indexOfItemWithKey(key) {
		return this.exposedIds.indexOf(key);
	},

	propsOfItemAtIndex: function propsOfItemAtIndex(index) {
		var key = this.keyOfItemAtIndex(index);
		var node = this.normalizedTreeDict[key];
		var text = node.text;
		var collapsed = this.collapsedIds.indexOf(key) > -1;
		var depth = this.depthOfItemAtIndex(index);
		var frame = this.rectOfItemAtIndex(index);
		return {
			key: key,
			id: key,
			text: text,
			node: node,
			collapsed: collapsed,
			depth: depth,
			editNode: this.editNode,
			changeText: this.changeText,
			disclosureToggle: this.disclosureToggle,
			changeUndoRegistered: this.changeUndoRegistered,
			inLiveResize: this.inLiveResize,
			frame: frame
		};
	},

	depthOfItemAtIndex: function depthOfItemAtIndex(index) {
		// depth should probably be copied to the node
		var key = this.keyOfItemAtIndex(index);
		return this.flattenedDepth[key];
	},

	rectOfItemAtIndex: function rectOfItemAtIndex(index) {
		// gets called frequently
		var dimension = this.dimension;
		var containerWidth = this.frame.size.width;
		var depth = this.depthOfItemAtIndex(index);
		var itemWidth = containerWidth - depth * this.margin;
		var x = 0;
		var y = index * dimension;
		return makeRect(x, y, itemWidth, dimension);
	},

	sortKeysOfItems: function sortKeysOfItems(a, b) {
		var A = this.flattenedIndexes[a];
		var B = this.flattenedIndexes[b];
		if (typeof A === "undefined") A = -1;
		if (typeof B === "undefined") B = -1;
		return A - B;
	},

	documentLength: function documentLength() {
		// can"t just get the last item rect
		var numberOfItems = this.numberOfItems();
		var lastItemRect = this.rectOfItemAtIndex(numberOfItems - 1);
		return lastItemRect.y + lastItemRect.height;
	},

	unmountingProps: function unmountingProps() {
		return {
			opacity: 0,
			zIndex: 0
		};
	}

};

/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _preact = __webpack_require__(1);

var _ListHeader = __webpack_require__(80);

var _ListHeader2 = _interopRequireDefault(_ListHeader);

var _ListView = __webpack_require__(84);

var _ListView2 = _interopRequireDefault(_ListView);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ListPane = function ListPane(props) {
	var headerHeight = 38;
	var listWidth = props.frame.size.width;
	var paneHeight = props.frame.size.height;
	var contentHeight = paneHeight - headerHeight;
	var headerFrame = { origin: { x: 0, y: 0 }, size: { width: listWidth, height: headerHeight } };
	var viewFrame = { origin: { x: 0, y: headerHeight }, size: { width: listWidth, height: contentHeight } };
	var listClipStyle = {
		width: listWidth + "px",
		height: paneHeight + "px",
		overflow: "auto"
	};
	var listContentStyle = {
		position: "relative",
		zIndex: 1,
		width: "100%",
		height: contentHeight + "px",
		top: headerHeight + "px"
	};
	var clipProps = {
		key: "ListClip",
		className: "clip",
		style: listClipStyle
	};
	var headerProps = {
		key: "ListHeader",
		frame: headerFrame,
		fileName: props.fileName
	};
	var viewProps = {
		dimension: 20,
		inset: 7,
		margin: 15,
		key: "ListContent",
		style: listContentStyle,
		frame: viewFrame
	};
	return (0, _preact.h)(
		"div",
		clipProps,
		(0, _preact.h)(_ListHeader2.default, headerProps),
		(0, _preact.h)(_ListView2.default, viewProps)
	);
};

exports.default = ListPane;

/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _preact = __webpack_require__(1);

var _DisclosureTriangle = __webpack_require__(78);

var _DisclosureTriangle2 = _interopRequireDefault(_DisclosureTriangle);

var _BoolCell = __webpack_require__(71);

var _BoolCell2 = _interopRequireDefault(_BoolCell);

var _FloatCell = __webpack_require__(72);

var _FloatCell2 = _interopRequireDefault(_FloatCell);

var _IntCell = __webpack_require__(73);

var _IntCell2 = _interopRequireDefault(_IntCell);

var _LengthCell = __webpack_require__(75);

var _LengthCell2 = _interopRequireDefault(_LengthCell);

var _ListCell = __webpack_require__(76);

var _ListCell2 = _interopRequireDefault(_ListCell);

var _TextCell = __webpack_require__(77);

var _TextCell2 = _interopRequireDefault(_TextCell);

var _LabelCell = __webpack_require__(74);

var _LabelCell2 = _interopRequireDefault(_LabelCell);

var _BezierCell = __webpack_require__(70);

var _BezierCell2 = _interopRequireDefault(_BezierCell);

var _ArrayCell = __webpack_require__(69);

var _ArrayCell2 = _interopRequireDefault(_ArrayCell);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function cellFromNode(node) {
	var type = node.type;

	switch (type) {
		case "bool":
			return _BoolCell2.default;
		case "float":
			return _FloatCell2.default;
		case "group":
			return _LabelCell2.default;
		case "int":
			return _IntCell2.default;
		case "length":
			return _LengthCell2.default;
		case "list":
			return _ListCell2.default;
		case "text":
			return _TextCell2.default;
		case "label":
			return _LabelCell2.default;
		case "bezier":
			return _BezierCell2.default;
	}
	return _LabelCell2.default;
}

var ListRow = function (_Component) {
	_inherits(ListRow, _Component);

	function ListRow(props) {
		_classCallCheck(this, ListRow);

		var _this = _possibleConstructorReturn(this, (ListRow.__proto__ || Object.getPrototypeOf(ListRow)).call(this, props));

		_this.handleCheckClick = _this.handleCheckClick.bind(_this);
		return _this;
	}

	_createClass(ListRow, [{
		key: "handleCheckClick",
		value: function handleCheckClick(e) {
			e.stopPropagation(); // prevent selecting text with shiftKeyPressed
			e.preventDefault(); // prevent selecting text with shiftKeyPressed
			this.props.disclosureToggle(this.props.id);
		}
	}, {
		key: "render",
		value: function render() {
			var _props = this.props,
			    id = _props.id,
			    collapsed = _props.collapsed,
			    editing = _props.editing,
			    shiftKeyPressed = _props.shiftKeyPressed;

			var node = this.props.node;
			if (!node) throw new Error("no node");
			var childIds = node.childIds;

			var inset = 7;
			var margin = 15;
			var depth = this.props.depth;
			var padding = inset + (depth - 1) * margin;
			var left = inset + depth * margin;

			var height = this.props.frame.size.height;
			if (node.type === "bezier") height = 100; // ugh


			var style = Object.assign({
				boxSizing: "border-box",
				paddingLeft: padding + "px",
				opacity: this.props.opacity,
				zIndex: this.props.zIndex,

				left: left + "px",
				width: "100%",
				height: height + "px",
				whiteSpace: "nowrap"
			}, this.props.style);

			var nodeId = id;

			if (editing) {
				style.overflow = "visible";
			}

			var itemProps = {
				style: style
			};

			var children = [];
			if (node.type === "group") {
				var labelCell = (0, _preact.h)(_LabelCell2.default, { node: node });
				children.push(labelCell);
			} else if (node.type === "bezier") {

				var childNodes = this.props.choiceNodes;
				var value = childNodes.map(function (node) {
					return node.value;
				});
				var bezierCell = (0, _preact.h)(_BezierCell2.default, _extends({}, this.props, { node: node, value: value }));
				children.push(bezierCell);
			} else if (node.type === "array") {
				if (node.name) {
					var labelProps = { node: { value: node.name } };
					var _labelCell = (0, _preact.h)(_LabelCell2.default, labelProps);
					children.push(_labelCell);
				}
				var arrayCell = (0, _preact.h)(_ArrayCell2.default, _extends({}, this.props, { node: node, childNodes: this.props.choiceNodes }));
				children.push(arrayCell);
			} else {
				if (node.name) {
					var _labelProps = { node: { value: node.name } };
					var _labelCell2 = (0, _preact.h)(_LabelCell2.default, _labelProps);
					children.push(_labelCell2);
				}
				var cell = cellFromNode(node);
				var result = Object.assign({}, this.props, node, { node: node });
				var rowElement = (0, _preact.h)(cell, result);
				children.push(rowElement);
			}

			if (!childIds || !childIds.length) return (0, _preact.h)(
				"div",
				itemProps,
				children
			);
			var checkProps = {
				type: "checkbox",
				id: nodeId,
				name: nodeId,
				checked: collapsed,
				onClick: this.handleCheckClick,
				style: {
					position: "absolute",
					zIndex: 1,
					cursor: "pointer",
					opacity: 0,
					width: "16px",
					height: "20px"
				}
			};
			var disclosureProps = {
				id: nodeId,
				collapsed: collapsed
			};
			return (0, _preact.h)(
				"div",
				itemProps,
				(0, _preact.h)("input", checkProps),
				(0, _preact.h)(_DisclosureTriangle2.default, disclosureProps),
				children
			);
		}
	}]);

	return ListRow;
}(_preact.Component);
exports.default = ListRow;

/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _preact = __webpack_require__(1);

var _preactRedux = __webpack_require__(8);

var _actions = __webpack_require__(9);

var actions = _interopRequireWildcard(_actions);

var _selectors = __webpack_require__(23);

var selectors = _interopRequireWildcard(_selectors);

var _ListRow = __webpack_require__(83);

var _ListRow2 = _interopRequireDefault(_ListRow);

var _ListLayout = __webpack_require__(81);

var _ListLayout2 = _interopRequireDefault(_ListLayout);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ListView = function (_Component) {
	_inherits(ListView, _Component);

	function ListView() {
		_classCallCheck(this, ListView);

		return _possibleConstructorReturn(this, (ListView.__proto__ || Object.getPrototypeOf(ListView)).apply(this, arguments));
	}

	_createClass(ListView, [{
		key: "shouldComponentUpdate",
		value: function shouldComponentUpdate(props) {
			var keys = Object.keys(this.props);
			var i = keys.length;
			while (i--) {
				var key = keys[i];
				if (key === "frame") {
					// don't update on width change
					if (props.frame.origin.x !== this.props.frame.origin.x) return true;
					if (props.frame.origin.y !== this.props.frame.origin.y) return true;
					if (props.frame.size.height !== this.props.frame.size.height) return true;
				} else if (props[key] !== this.props[key]) return true;
			};
			return false;
		}
	}, {
		key: "render",
		value: function render() {
			var _this2 = this;

			var props = this.props;
			var layoutManager = new _ListLayout2.default(props);
			var style = {
				backgroundColor: "white"
			};

			var children = props.exposedIds.map(function (id, index) {
				var childProps = layoutManager.propsOfItemAtIndex(index);

				var childNode = props.normalizedTreeDict[id];
				var childIds = childNode.childIds;
				var childNodes = [];
				if (childIds) childNodes = childIds.map(function (sub) {
					return props.normalizedTreeDict[sub];
				});
				var choiceNodes = [];
				var choiceIds = childNode.choiceIds;
				if (choiceIds) choiceNodes = choiceIds.map(function (sub) {
					return props.normalizedTreeDict[sub];
				});
				return (0, _preact.h)(_ListRow2.default, _extends({}, childProps, { childNodes: childNodes, choiceNodes: choiceNodes, changeSetting: _this2.props.changeSetting }));
			});

			return (0, _preact.h)(
				"div",
				{ style: style },
				children
			);
		}
	}]);

	return ListView;
}(_preact.Component);

function mapStateToProps(state, ownProps) {
	return Object.assign({}, ownProps, {
		exposedIds: selectors.exposedIdsSelector(state),
		normalizedTreeDict: selectors.normalizedTreeDictSelector(state),
		flattenedIds: selectors.flattenedIdsSelector(state),
		flattenedDepth: selectors.flattenedDepthSelector(state),
		collapsedIds: selectors.collapsedIdsSelector(state),
		shiftKeyPressed: state.shiftKeyPressed,
		editingId: state.now.editingId
	});
}
var ConnectedListView = (0, _preactRedux.connect)(mapStateToProps, actions)(ListView);
exports.default = ConnectedListView;

/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _preact = __webpack_require__(1);

var _Divider = __webpack_require__(79);

var _Divider2 = _interopRequireDefault(_Divider);

var _preactRedux = __webpack_require__(8);

var _actions = __webpack_require__(9);

var actions = _interopRequireWildcard(_actions);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PairView = function (_Component) {
	_inherits(PairView, _Component);

	function PairView(props) {
		_classCallCheck(this, PairView);

		return _possibleConstructorReturn(this, (PairView.__proto__ || Object.getPrototypeOf(PairView)).call(this, props));
	}

	_createClass(PairView, [{
		key: "render",
		value: function render() {
			var width = this.props.frame.size.width;
			var height = this.props.frame.size.height;
			var x = 0;
			var y = 0;
			var vertical = this.props.vertical;
			var dividerLoc = this.props.dividerRatio * width;
			if (typeof this.props.dividerRatio === "undefined") dividerLoc = (vertical ? height : width) / 2.0 + (vertical ? y : x);
			var dividerWidth = this.props.dividerWidth || 0;
			var halfDividerWidth = dividerWidth / 2;
			var leftWidth = dividerLoc - halfDividerWidth;
			var rightWidth = (vertical ? height : width) - dividerLoc - halfDividerWidth;
			var rightLoc = dividerLoc + halfDividerWidth;
			var middleLoc = dividerLoc - halfDividerWidth;

			var leftFrame = vertical ? {
				origin: { x: x, y: y },
				size: { width: width, height: leftWidth }
			} : {
				origin: { x: x, y: y },
				size: { width: leftWidth, height: height }
			};
			var rightFrame = {
				origin: { x: vertical ? x : rightLoc, y: vertical ? rightLoc : y },
				size: { width: vertical ? width : rightWidth, height: vertical ? rightWidth : height }
			};
			var middleFrame = {
				origin: { x: vertical ? x : middleLoc, y: vertical ? middleLoc : y },
				size: { width: vertical ? width : dividerWidth, height: vertical ? dividerWidth : height }
			};

			var resizeDivider = function (e) {
				var frame = this.props.frame;
				var dimension = this.props.vertical ? frame.size.height : frame.size.width;
				var loc = this.props.vertical ? frame.origin.y : frame.origin.x;
				var value = this.props.vertical ? e.clientY : e.clientX;
				var result = (value - loc) / dimension;
				this.props.resizeDivider(Math.max(0, Math.min(1, result)));
			}.bind(this);
			var frame = this.props.frame;
			var splitStyle = {
				left: frame.origin.x + "px",
				top: frame.origin.y + "px",
				width: frame.size.width + "px",
				height: frame.size.height + "px"
			};

			var cursor = vertical ? "row-resize" : "col-resize";
			if (this.props.draggingDivider) splitStyle.cursor = cursor;

			var left = (0, _preact.cloneElement)(this.props.children[0], {
				frame: leftFrame,
				key: "leftPane"

			});
			var right = (0, _preact.cloneElement)(this.props.children[1], {
				frame: rightFrame,
				key: "rightPane"
			});

			var dividerProps = {
				resizeDivider: resizeDivider,
				setDraggingDivider: this.props.setDraggingDivider,
				frame: middleFrame,
				cursor: cursor,
				key: "divider",
				vertical: vertical,
				controlView: this
			};

			var divider = (0, _preact.h)(_Divider2.default, dividerProps);
			var children = this.props.dividerWidth ? [left, divider, right] : [left, right];

			var className = "split horizontal";
			if (vertical) className = "split vertical";

			var divProps = {
				key: "splitView",
				style: splitStyle
			};
			return (0, _preact.h)(
				"div",
				divProps,
				children
			);
		}
	}]);

	return PairView;
}(_preact.Component);

function mapStateToProps(state, ownProps) {
	return { draggingDivider: state.draggingDivider };
}

var ConnectedPairView = (0, _preactRedux.connect)(mapStateToProps, actions)(PairView);
exports.default = ConnectedPairView;

/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _preact = __webpack_require__(1);

var _preactRedux = __webpack_require__(8);

var _App = __webpack_require__(67);

var _App2 = _interopRequireDefault(_App);

var _reducers = __webpack_require__(68);

var _redux = __webpack_require__(34);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//import { bind } from "decko";

var initialState = undefined;
var store = (0, _redux.createStore)(_reducers.main, initialState);

(0, _preact.render)((0, _preact.h)(
	_preactRedux.Provider,
	{ store: store },
	(0, _preact.h)(_App2.default, null)
), document.body);

/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _preact = __webpack_require__(1);

var _preactRedux = __webpack_require__(8);

var _actions = __webpack_require__(9);

var actions = _interopRequireWildcard(_actions);

var _primary = __webpack_require__(89);

var _primary2 = _interopRequireDefault(_primary);

var _trackball = __webpack_require__(90);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
//import { bind } from "decko";

var Interact = function (_Component) {
	_inherits(Interact, _Component);

	function Interact(props) {
		_classCallCheck(this, Interact);

		var _this = _possibleConstructorReturn(this, (Interact.__proto__ || Object.getPrototypeOf(Interact)).call(this, props));

		_this.element = null;
		_this.refCallback = _this.refCallback.bind(_this);
		_this.keyPress = _this.keyPress.bind(_this);
		// 		this.keyDown = this.keyDown.bind(this);
		_this.mouseDown = _this.mouseDown.bind(_this);
		_this.mouseDrag = _this.mouseDrag.bind(_this);
		_this.mouseUp = _this.mouseUp.bind(_this);
		_this.scrollWheel = _this.scrollWheel.bind(_this);
		_this.gDollyPanStartPoint = [0, 0];
		_this.gTrackBallRotation = [0, 0, 0, 0];
		_this.state = {
			gTrackball: false,
			gPan: false,
			gDollyPanStartPoint: [0, 0],
			gTrackBallRotation: [0, 0, 0, 0]
		};
		return _this;
	}

	_createClass(Interact, [{
		key: "componentWillUnmount",
		value: function componentWillUnmount() {
			window.removeEventListener("keypress", this.keyPress);
			this.element.removeEventListener("mousedown", this.mouseDown);
			this.element.removeEventListener("wheel", this.scrollWheel);
		}
	}, {
		key: "keyPress",
		value: function keyPress(e) {
			if (e.keyCode === 27) this.props.resetWorldRotationAndCameraOrientation();
		}
	}, {
		key: "convertWindowToViewCoordinates",
		value: function convertWindowToViewCoordinates(x, y) {
			var originX = this.props.frame.origin.x;
			var originY = this.props.frame.origin.y;
			return [x - originX, y - originY];
		}
	}, {
		key: "mouseDown",
		value: function mouseDown(e) {
			e.stopPropagation();
			e.preventDefault();
			document.addEventListener("mousemove", this.mouseDrag, false);
			document.addEventListener("mouseup", this.mouseUp, false);
			var point = this.convertWindowToViewCoordinates(e.clientX, e.clientY);
			if (e.shiftKey || e.altKey) {
				// pan
				var result = {};
				if (this.state.gTrackball) {
					// if we are currently tracking, end trackball
					// 				if (gTrackBallRotationA !== 0.0) {
					// 					console.log("how did this work trackball:",this.state.gTrackBallRotation);
					// 					console.log("how did this work world:",this.state.worldRotation);
					// 					addToRotationTrackball(this.state.gTrackBallRotation.slice(0), this.state.worldRotation.slice(0));
					// 				}
					result.gTrackBallRotation = [0, 0, 0, 0];
				}
				result.gPan = true;
				result.gTrackball = false; // no trackball

				this.gDollyPanStartPoint = point;

				this.setState(result);
			} else {
				var _result = {};
				_result.gPan = false; // no pan
				_result.gTrackball = true;

				var viewWidth = this.props.frame.size.width;
				var viewHeight = this.props.frame.size.height;
				(0, _trackball.startTrackball)(point[0], point[1], 0, 0, viewWidth, viewHeight);
				this.setState(_result);
			}
		}
	}, {
		key: "mouseUp",
		value: function mouseUp(e) {
			document.removeEventListener("mouseup", this.mouseUp);
			document.removeEventListener("mousemove", this.mouseDrag);
			if (this.state.gPan) {
				var result = {};
				result.gPan = false;
				this.setState(result);
			} else if (this.state.gTrackball) {
				var _result2 = {};
				_result2.gTrackball = false;
				var state = this.state;
				var gTrackBallRotation = state.gTrackBallRotation.slice(0);
				var worldRotation = this.props.now.worldRotation.slice(0);
				if (gTrackBallRotation[0] !== 0.0) (0, _trackball.addToRotationTrackball)(gTrackBallRotation, worldRotation);
				_result2.gTrackBallRotation = [0, 0, 0, 0];
				this.props.changeWorldRotation(worldRotation.slice(0));
				this.setState(_result2);
			}
		}
	}, {
		key: "mouseDrag",
		value: function mouseDrag(e) {
			var state = this.state;
			var point = this.convertWindowToViewCoordinates(e.clientX, e.clientY);
			if (state.gTrackball) {
				var gTrackBallRotation = state.gTrackBallRotation.slice(0);
				(0, _trackball.rollToTrackball)(point[0], point[1], gTrackBallRotation);
				var result = {};
				result.gTrackBallRotation = gTrackBallRotation.slice(0);
				this.setState(result);
			} else if (state.gPan) {
				var x = point[0];
				var y = point[1];
				var camera = this.props.now.cameraOrientation;
				var cameraX = camera[0];
				var cameraY = camera[1];
				var cameraZ = camera[2];

				var gDollyPanStartPointX = this.gDollyPanStartPoint[0];
				var gDollyPanStartPointY = this.gDollyPanStartPoint[1];

				var panX = (gDollyPanStartPointX - x) / (900.0 / -cameraZ);
				var panY = (gDollyPanStartPointY - y) / (900.0 / -cameraZ);

				this.gDollyPanStartPoint = [x, y];
				this.props.changeCameraOrientation([cameraX - panX, cameraY - panY, cameraZ]);
			}
		}
	}, {
		key: "scrollWheel",
		value: function scrollWheel(e) {
			var camera = this.props.now.cameraOrientation;
			var oldZ = camera[2];
			var newZ = oldZ - e.deltaY / 3.0;
			if (newZ < -300) newZ = -300;
			if (newZ > 40) newZ = 40;

			this.props.changeCameraOrientation([camera[0], camera[1], newZ]);
		}
	}, {
		key: "refCallback",
		value: function refCallback(element) {
			if (this.element !== null) return;
			this.element = element;
			window.addEventListener("keypress", this.keyPress);
			this.element.addEventListener("mousedown", this.mouseDown, false);
			this.element.addEventListener("wheel", this.scrollWheel, false);
		}
	}, {
		key: "render",
		value: function render(props, state) {
			var style = {
				left: this.props.frame.origin.x + "px",
				top: this.props.frame.origin.y + "px",
				width: this.props.frame.size.width + "px",
				height: this.props.frame.size.height + "px",
				position: "absolute"
			};

			var now = this.props.now;

			return (0, _preact.h)(
				"div",
				{ ref: this.refCallback, style: style },
				(0, _preact.h)(_primary2.default, {
					radius: this.props.radius,
					rings: this.props.rings,
					sides: this.props.sides,

					width: this.props.frame.size.width,
					height: this.props.frame.size.height,

					gTrackBallRotation: this.state.gTrackBallRotation,
					worldRotation: now.worldRotation,
					camera: now.camera
				})
			);
		}
	}]);

	return Interact;
}(_preact.Component);

function mapStateToProps(state, ownProps) {
	return Object.assign({}, state, ownProps);
}
var ConnectedInteract = (0, _preactRedux.connect)(mapStateToProps, actions)(Interact);
exports.default = ConnectedInteract;

/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
var fractionLabels = ["Quarter Circle", "Half Circle", "Whole Circle"];
var fractionValues = ["quarter", "half", "whole"];

// const sunShapeLabels = ["Sphere", "Cylinder"];
// const sunShapeValues = [1,2];


var debug = [{ "id": "debugEven", "displayName": "Even", "type": "bool", "default": false }, { "id": "debugOdd", "displayName": "Odd", "type": "bool", "default": false }, { "id": "debugLeft", "displayName": "Left", "type": "bool", "default": false }, { "id": "debugRight", "displayName": "Right", "type": "bool", "default": false }, { "id": "debugTop", "displayName": "Top", "type": "bool", "default": false }, { "id": "debugBottom", "displayName": "Bottom", "type": "bool", "default": false }, { "id": "debugFirst", "displayName": "First", "type": "bool", "default": false }, { "id": "debugLast", "displayName": "Last", "type": "bool", "default": false }, { "id": "debugBase", "displayName": "Base", "type": "bool", "default": false }];

var flameBezierValues = [{ "id": "x0", "displayName": "x0", "type": "float", "rangeMin": 0, "rangeMax": 1, "default": 0.1 }, { "id": "y0", "displayName": "y0", "type": "float", "rangeMin": 0, "rangeMax": 1, "default": 0.4 }, { "id": "x1", "displayName": "x1", "type": "float", "rangeMin": 0, "rangeMax": 1, "default": 0.2 }, { "id": "y1", "displayName": "y1", "type": "float", "rangeMin": 0, "rangeMax": 1, "default": 0.3 }];

// const notImplemented = [
// 	{ "id": "beamTopExtended", "displayName": "Extended Beam Top", "type": "bool", "default": false },
// 	{ "id": "beamGap", "displayName": "Beam gap", "type": "float", "rangeMin": 0, "rangeMax": 1, "default": 0.0 },
// 	{ "id": "flatTop", "displayName": "Flat Top", "type": "bool",  "default": true }
// ];

var sun = [{ "id": "horizonRatio", "displayName": "Horizon Radius Ratio", "type": "float", "rangeMin": 0, "rangeMax": 1, "default": 0.5 }, //0.7071 },
{ "id": "sunRatio", "displayName": "Height Ratio", "type": "float", "rangeMin": 0, "rangeMax": 1, "default": 0.25 }, { "id": "sphereFraction", "displayName": "Slice", "type": "list", "listLabels": fractionLabels, "listValues": fractionValues, "default": fractionValues[1] }];
var wavy = [{ "id": "wavyCount", "displayName": "Count", "type": "float", "rangeMin": 0.0, "rangeMax": 32.0, "default": 1.0 }, { "id": "wavyScale", "displayName": "Scale", "type": "float", "rangeMin": 0.0, "rangeMax": 32.0, "default": 1.0 }, { "id": "wavyAmount", "displayName": "Amount", "type": "float", "rangeMin": 0.0, "rangeMax": 32.0, "default": 1.0 }];
var beam = [{ "id": "beamCount", "displayName": "Count Per Quarter Circle", "type": "int", "rangeMin": 3, "rangeMax": 64, "default": 4.5 }, // <---
{ "id": "starRatio", "displayName": "Height Ratio", "type": "float", "rangeMin": 0, "rangeMax": 1, "default": 1 }, { "id": "splitBeams", "displayName": "Split First and Last Beam", "type": "bool", "default": false }, { "id": "useFlameBezier", "displayName": "Use Flame Bezier", "type": "bool", "default": true }, { "id": "flameBezier", "displayName": "Flame Bezier", "type": "bezier", "default": flameBezierValues },
//{ "id": "notImplemented", "displayName": "Not Implemented Yet", "type": "group", "default": notImplemented },
{ "id": "wavy", "displayName": "Wavy", "type": "group", "default": wavy }];

var base = [{ "id": "baseHeight", "displayName": "Base height", "type": "length", "rangeMin": 0, "rangeMax": 1.5, "default": 0.5 }];

var presets = exports.presets = [{ "id": "radius", "displayName": "Outer Radius", "type": "length", "rangeMin": 1, "rangeMax": 50, "default": 20 }, { "id": "resolution", "displayName": "Resolution", "type": "int", "rangeMin": 1, "rangeMax": 200, "default": 25 }, // <---
{ "id": "sun", "displayName": "Sun", "type": "group", "default": sun }, { "id": "beam", "displayName": "Beam", "type": "group", "default": beam }, { "id": "base", "displayName": "Base", "type": "group", "default": base }, { "id": "debug", "displayName": "Debug", "type": "group", "default": debug }];

/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _preact = __webpack_require__(1);

var _preactRedux = __webpack_require__(8);

var _actions = __webpack_require__(9);

var actions = _interopRequireWildcard(_actions);

var _plot = __webpack_require__(35);

var plot = _interopRequireWildcard(_plot);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // This file owes its existence to
// http://www.syedrezaali.com/ycam-grp/


//import deepFreeze from "deep-freeze"; // debug

//import { bind } from "decko";

// Import StackGL Webgl
var glGeometry = __webpack_require__(113);
var glShader = __webpack_require__(120);
var clear = __webpack_require__(109)();


// Import Math Libraries
var mat4 = __webpack_require__(0).mat4;
var mat3 = __webpack_require__(0).mat3; // from tutorial
var vec3 = __webpack_require__(0).vec3; // trackball

// Import Web Helper Libraries
var isMobile = __webpack_require__(140);

//const lgp = require("lgp");
var guf = __webpack_require__(2);

// Set the canvas size to fill the window and its pixel density
var mobile = isMobile(navigator.userAgent);
var dpr = mobile ? 1 : window.devicePixelRatio || 1;

//Setup Shaders
var vertexMeshShader = "precision mediump float;\n#define GLSLIFY 1\n\nattribute vec3 aPosition;\nattribute vec3 aNormal;\nattribute vec2 aUv;\n\nuniform mat4 uProjection;\nuniform mat4 uModel;\nuniform mat4 uView;\n\nuniform mat3 uNormalMatrix;\n\nuniform float dpr;\n\nuniform float uPointSize;\n\nvarying vec2 vUv;\nvarying vec3 vNormal;\n\nvoid main() {\n\tvUv = aUv;\n\tvec4 normal = uModel * vec4( aNormal, 0.0 ) ;\n\tvNormal = uNormalMatrix * normal.xyz;\n\tgl_Position = uProjection * uView * uModel * vec4( aPosition, 1.0 );\n\tgl_PointSize = 1.0 + dpr + uPointSize;\n}"; // From tutorial, setup solid shaders
var fragmentMeshShader = "precision mediump float;\n#define GLSLIFY 1\n\nuniform vec4 uColor;\n\nvarying vec2 vUv;\nvarying vec3 vNormal;\n\nvoid main() {\n\tvec3 normal = normalize( -vNormal );\n\tfloat diffuse = max( dot( normal, vec3( 0.0, 0.0, -1.0 ) ), 0.0 );\n\tgl_FragColor = vec4( uColor.rgb * diffuse, uColor.a );\n}"; // From tutorial, setup solid shaders

var d2r = Math.PI / 180.0;

var Primary = function (_Component) {
	_inherits(Primary, _Component);

	function Primary(props) {
		_classCallCheck(this, Primary);

		var _this = _possibleConstructorReturn(this, (Primary.__proto__ || Object.getPrototypeOf(Primary)).call(this, props));

		_this.canvas = null;
		_this.mesh = null;
		_this.meshGeo = null;
		_this.meshShader = null;
		_this.state = {
			modelMatrix: mat4.create(),
			viewMatrix: mat4.create(),
			normalMatrix: mat3.create(),
			rotationMatrix: mat4.create(),
			projectionMatrix: mat4.create(),
			gTrackball: false,
			gPan: false
		};
		_this.refCallback = _this.refCallback.bind(_this);
		return _this;
	}

	_createClass(Primary, [{
		key: "componentDidUpdate",
		value: function componentDidUpdate(props, state) {
			if (props.mesh !== this.props.mesh) {
				this.initMesh();
			}
			this.draw();
		}
	}, {
		key: "createGeo",
		value: function createGeo(positions, cells) {
			var canvas = this.canvas;
			var gl = canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
			var newPositions = [];
			var newNormals = [];
			for (var i = 0; i < cells.length; i++) {
				var a = positions[cells[i][0]];
				var b = positions[cells[i][1]];
				var c = positions[cells[i][2]];
				var n = guf.calculateNormal(a, b, c);
				newPositions.push(a, b, c);
				newNormals.push(n, n, n);
			}
			var geo = glGeometry(gl);
			geo.attr("aPosition", newPositions);
			geo.attr("aNormal", newNormals);
			return geo;
		}
	}, {
		key: "initMesh",
		value: function initMesh() {
			var mesh = this.props.mesh;
			this.meshGeo = this.createGeo(mesh.positions, mesh.cells);
		}
	}, {
		key: "draw",
		value: function draw() {
			var _props = this.props,
			    width = _props.width,
			    height = _props.height;

			var canvas = this.canvas;
			var gl = canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
			canvas.width = width;
			canvas.height = height;
			gl.viewportWidth = width;
			gl.viewportHeight = height;

			this.updateProjection();
			var meshGeo = this.meshGeo;
			gl.viewport(0, 0, gl.drawingBufferWidth, gl.drawingBufferHeight);
			clear(gl);

			// Set Blending
			gl.disable(gl.DEPTH_TEST);
			gl.enable(gl.BLEND);
			gl.blendFunc(gl.SRC_ALPHA, gl.ONE);
			this.drawMesh(meshGeo, [1, 1, 0, 1]);
		}
	}, {
		key: "updateProjection",
		value: function updateProjection() {
			// Set Perspective Projection
			var translate = -50;

			var canvas = this.canvas;
			var gl = canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
			var _state = this.state,
			    modelMatrix = _state.modelMatrix,
			    projectionMatrix = _state.projectionMatrix;
			var gTrackBallRotation = this.props.gTrackBallRotation;


			var worldRotation = this.props.now.worldRotation;
			var camera = this.props.now.cameraOrientation;

			var cameraX = camera[0];
			var cameraY = camera[1];
			var cameraZ = camera[2];

			var near = 0.01;
			var far = 1000.0;
			var fieldOfView = Math.PI / 4.0;
			var aspectRatio = gl.drawingBufferWidth / gl.drawingBufferHeight;
			mat4.perspective(projectionMatrix, fieldOfView, aspectRatio, near, far);

			mat4.identity(modelMatrix);
			mat4.translate(modelMatrix, modelMatrix, vec3.fromValues(0 + cameraX, 0 + cameraY, translate + cameraZ));

			var axis = vec3.create();
			vec3.set(axis, gTrackBallRotation[1], gTrackBallRotation[2], gTrackBallRotation[3]);
			mat4.rotate(modelMatrix, modelMatrix, d2r * gTrackBallRotation[0], axis);

			var axis2 = vec3.create();
			vec3.set(axis2, worldRotation[1], worldRotation[2], worldRotation[3]);
			mat4.rotate(modelMatrix, modelMatrix, d2r * worldRotation[0], axis2);
		}
	}, {
		key: "drawMesh",
		value: function drawMesh(geo, color) {
			var canvas = this.canvas;
			var gl = canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
			var meshShader = this.meshShader;
			if (geo) {
				gl.enable(gl.DEPTH_TEST);
				gl.enable(gl.BLEND);
				gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);
				geo.bind(meshShader);
				if (isMobile) {
					meshShader.uniforms.dpr = dpr * 2.0;
				} else {
					meshShader.uniforms.dpr = dpr;
				}

				meshShader.uniforms.uPointSize = 1.0;
				meshShader.uniforms.uProjection = this.state.projectionMatrix;
				meshShader.uniforms.uView = this.state.viewMatrix;
				meshShader.uniforms.uNormalMatrix = this.state.normalMatrix;
				meshShader.uniforms.uModel = this.state.modelMatrix;
				meshShader.uniforms.uColor = color;

				geo.draw(gl.TRIANGLES);
				geo.unbind();
			}
		}
	}, {
		key: "refCallback",
		value: function refCallback(canvas) {
			if (this.canvas !== null) return;
			var gl = canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
			if (!gl) throw new Error("this requires WebGL");
			this.canvas = canvas;
			var meshShader = glShader(gl, vertexMeshShader, fragmentMeshShader); // From tutorial, setup solid shaders
			this.meshShader = meshShader;
			this.initMesh();
			this.draw();
		}
	}, {
		key: "render",
		value: function render(props, state) {
			return (0, _preact.h)("canvas", { ref: this.refCallback });
		}
	}]);

	return Primary;
}(_preact.Component);

function mapStateToProps(state, ownProps) {
	return Object.assign({}, ownProps, {
		now: state.now,
		mesh: plot.meshSelector(state)
	});
}
var ConnectedPrimary = (0, _preactRedux.connect)(mapStateToProps, actions)(Primary);
exports.default = ConnectedPrimary;

/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.startTrackball = startTrackball;
exports.rollToTrackball = rollToTrackball;
exports.addToRotationTrackball = addToRotationTrackball;
/*
    trackball.c

	Copyright:	Copyright © 2002-2003 Apple Computer, Inc., All Rights Reserved

 Disclaimer: IMPORTANT:  This Apple software is supplied to you by Apple
 Computer, Inc. ("Apple") in consideration of your agreement to the
 following terms, and your use, installation, modification or
 redistribution of this Apple software constitutes acceptance of these
 terms.  If you do not agree with these terms, please do not use,
 install, modify or redistribute this Apple software.
 
 In consideration of your agreement to abide by the following terms, and
 subject to these terms, Apple grants you a personal, non-exclusive
 license, under Apple's copyrights in this original Apple software (the
 "Apple Software"), to use, reproduce, modify and redistribute the Apple
 Software, with or without modifications, in source and/or binary forms;
 provided that if you redistribute the Apple Software in its entirety and
 without modifications, you must retain this notice and the following
 text and disclaimers in all such redistributions of the Apple Software. 
 Neither the name, trademarks, service marks or logos of Apple Computer,
 Inc. may be used to endorse or promote products derived from the Apple
 Software without specific prior written permission from Apple.  Except
 as expressly stated in this notice, no other rights or licenses, express
 or implied, are granted by Apple herein, including but not limited to
 any patent rights that may be infringed by your derivative works or by
 other works in which the Apple Software may be incorporated.
 
 The Apple Software is provided by Apple on an "AS IS" basis.  APPLE
 MAKES NO WARRANTIES, EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION
 THE IMPLIED WARRANTIES OF NON-INFRINGEMENT, MERCHANTABILITY AND FITNESS
 FOR A PARTICULAR PURPOSE, REGARDING THE APPLE SOFTWARE OR ITS USE AND
 OPERATION ALONE OR IN COMBINATION WITH YOUR PRODUCTS.
 
 IN NO EVENT SHALL APPLE BE LIABLE FOR ANY SPECIAL, INDIRECT, INCIDENTAL
 OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF
 SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
 INTERRUPTION) ARISING IN ANY WAY OUT OF THE USE, REPRODUCTION,
 MODIFICATION AND/OR DISTRIBUTION OF THE APPLE SOFTWARE, HOWEVER CAUSED
 AND WHETHER UNDER THEORY OF CONTRACT, TORT (INCLUDING NEGLIGENCE),
 STRICT LIABILITY OR OTHERWISE, EVEN IF APPLE HAS BEEN ADVISED OF THE
 POSSIBILITY OF SUCH DAMAGE.

 *
 */

var kTol = 0.001;
var kRad2Deg = 180.0 / Math.PI;
var kDeg2Rad = Math.PI / 180.;

var gRadiusTrackball = void 0;
var gStartPtTrackball = [0, 0, 0];
var gEndPtTrackball = [0, 0, 0];
var gXCenterTrackball = 0;
var gYCenterTrackball = 0;

function startTrackball(x, y, originX, originY, width, height) {
	/* Start up the trackball.  The trackball works by pretending that a ball
    encloses the 3D view.  You roll this pretend ball with the mouse.  For
    example, if you click on the center of the ball and move the mouse straight
    to the right, you roll the ball around its Y-axis.  This produces a Y-axis
    rotation.  You can click on the "edge" of the ball and roll it around
    in a circle to get a Z-axis rotation.
    
    The math behind the trackball is simple: start with a vector from the first
    mouse-click on the ball to the center of the 3D view.  At the same time, set the radius
    of the ball to be the smaller dimension of the 3D view.  As you drag the mouse
    around in the 3D view, a second vector is computed from the surface of the ball
    to the center.  The axis of rotation is the cross product of these two vectors,
    and the angle of rotation is the angle between the two vectors.
  */

	// Figure the center of the view.
	gXCenterTrackball = originX + width * 0.5;
	gYCenterTrackball = originY + height * 0.5;
	gRadiusTrackball = Math.min(width, height) / 2;

	// Compute the starting vector from the surface of the ball to its center.
	gStartPtTrackball[0] = x - gXCenterTrackball;
	gStartPtTrackball[1] = y - gYCenterTrackball;
	var xxyy = gStartPtTrackball[0] * gStartPtTrackball[0] + gStartPtTrackball[1] * gStartPtTrackball[1];
	if (xxyy > gRadiusTrackball * gRadiusTrackball) {
		// Outside the sphere.
		gStartPtTrackball[2] = 0.0;
	} else gStartPtTrackball[2] = Math.sqrt(gRadiusTrackball * gRadiusTrackball - xxyy);
}

// update to new mouse position, output rotation angle
function rollToTrackball(x, y, rot) {
	// rot is output rotation angle
	gEndPtTrackball[0] = x - gXCenterTrackball;
	gEndPtTrackball[1] = y - gYCenterTrackball;
	if (Math.abs(gEndPtTrackball[0] - gStartPtTrackball[0]) < kTol && Math.abs(gEndPtTrackball[1] - gStartPtTrackball[1]) < kTol) return; // Not enough change in the vectors to have an action.

	// Compute the ending vector from the surface of the ball to its center.
	var xxyy = gEndPtTrackball[0] * gEndPtTrackball[0] + gEndPtTrackball[1] * gEndPtTrackball[1];
	if (xxyy > gRadiusTrackball * gRadiusTrackball) {
		// Outside the sphere.
		gEndPtTrackball[2] = 0.0;
	} else {
		gEndPtTrackball[2] = Math.sqrt(gRadiusTrackball * gRadiusTrackball - xxyy);
	}

	// Take the cross product of the two vectors. r = s X e
	rot[1] = -gStartPtTrackball[1] * gEndPtTrackball[2] + gStartPtTrackball[2] * gEndPtTrackball[1];
	rot[2] = -gStartPtTrackball[0] * gEndPtTrackball[2] + gStartPtTrackball[2] * gEndPtTrackball[0];
	rot[3] = -gStartPtTrackball[0] * gEndPtTrackball[1] + gStartPtTrackball[1] * gEndPtTrackball[0];

	// Use atan for a better angle.  If you use only cos or sin, you only get
	// half the possible angles, and you can end up with rotations that flip around near
	// the poles.
	// cos(a) = (s . e) / (||s|| ||e||)

	var cosAng = gStartPtTrackball[0] * gEndPtTrackball[0] + gStartPtTrackball[1] * gEndPtTrackball[1] + gStartPtTrackball[2] * gEndPtTrackball[2]; // (s . e)
	var ls = Math.sqrt(gStartPtTrackball[0] * gStartPtTrackball[0] + gStartPtTrackball[1] * gStartPtTrackball[1] + gStartPtTrackball[2] * gStartPtTrackball[2]);
	if (ls) ls = 1.0 / ls; // 1 / ||s||
	var le = Math.sqrt(gEndPtTrackball[0] * gEndPtTrackball[0] + gEndPtTrackball[1] * gEndPtTrackball[1] + gEndPtTrackball[2] * gEndPtTrackball[2]);
	if (le) le = 1.0 / le; // 1 / ||e||
	cosAng = cosAng * ls * le;

	// sin(a) = ||(s X e)|| / (||s|| ||e||)
	var lr = Math.sqrt(rot[1] * rot[1] + rot[2] * rot[2] + rot[3] * rot[3]); // ||(s X e)||;
	// keep this length in lr for normalizing the rotation vector later.
	var sinAng = lr * ls * le;
	rot[0] = Math.atan2(sinAng, cosAng) * kRad2Deg; // GL rotations are in degrees.

	// Normalize the rotation axis.
	if (lr) lr = 1 / lr;
	rot[1] *= lr;
	rot[2] *= lr;
	rot[3] *= lr;

	return rot;
}

function rotation2Quat(A, q) {
	// Convert a GL-style rotation to a quaternion.  The GL rotation looks like this:
	// {angle, x, y, z}, the corresponding quaternion looks like this:
	// {{v}, cos(angle/2)}, where {v} is {x, y, z} / sin(angle/2).

	var ang2 = A[0] * kDeg2Rad * 0.5; // The half angle // Convert from degrees ot radians, get the half-angle.
	var sinAng2 = Math.sin(ang2); // sin(half-angle)
	q[0] = A[1] * sinAng2;
	q[1] = A[2] * sinAng2;
	q[2] = A[3] * sinAng2;
	q[3] = Math.cos(ang2);
}
function addToRotationTrackball(dA, A) {
	var q0 = [],
	    q1 = [],
	    q2 = [];
	// Figure out A' = A . dA
	// In quaternions: let q0 <- A, and q1 <- dA.
	// Figure out q2 = q1 + q0 (note the order reversal!).
	// A' <- q3.

	rotation2Quat(A, q0);
	rotation2Quat(dA, q1);

	// q2 = q1 + q0;
	q2[0] = q1[1] * q0[2] - q1[2] * q0[1] + q1[3] * q0[0] + q1[0] * q0[3];
	q2[1] = q1[2] * q0[0] - q1[0] * q0[2] + q1[3] * q0[1] + q1[1] * q0[3];
	q2[2] = q1[0] * q0[1] - q1[1] * q0[0] + q1[3] * q0[2] + q1[2] * q0[3];
	q2[3] = q1[3] * q0[3] - q1[0] * q0[0] - q1[1] * q0[1] - q1[2] * q0[2];
	// Here's an excersize for the reader: it's a good idea to re-normalize your quaternions
	// every so often.  Experiment with different frequencies.

	// An identity rotation is expressed as rotation by 0 about any axis.
	// The "angle" term in a quaternion is really the cosine of the half-angle.
	// So, if the cosine of the half-angle is one (or, 1.0 within our tolerance),
	// then you have an identity rotation.
	//const tolerance = 1.0e-7;

	var tolerance = 0.0000001;
	var testValue = Math.abs(q2[3] - 1.0);
	if (testValue < tolerance) {
		// Identity rotation.
		A[0] = 0.0;
		A[1] = 1.0;
		A[2] = 0.0;
		A[3] = 0.0;
		return;
	}

	// If you get here, then you have a non-identity rotation.  In non-identity rotations,
	// the cosine of the half-angle is non-0, which means the sine of the angle is also
	// non-0.  So we can safely divide by sin(theta2).

	// Turn the quaternion back into an {angle, {axis}} rotation.
	var theta2 = Math.acos(q2[3]);
	var sinTheta2 = 1.0 / Math.sin(theta2);
	A[0] = theta2 * 2.0 * kRad2Deg;
	A[1] = q2[0] * sinTheta2;
	A[2] = q2[1] * sinTheta2;
	A[3] = q2[2] * sinTheta2;

	// 	dA[0] = 0.0;
	// 	dA[1] = 0.0;
	// 	dA[2] = 0.0;
	// 	dA[3] = 0.0;
}

/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

var padLeft = __webpack_require__(181)

module.exports = addLineNumbers
function addLineNumbers (string, start, delim) {
  start = typeof start === 'number' ? start : 1
  delim = delim || ': '

  var lines = string.split(/\r?\n/)
  var totalDigits = String(lines.length + start - 1).length
  return lines.map(function (line, i) {
    var c = i + start
    var digits = String(c).length
    var prefix = padLeft(c, totalDigits - digits)
    return prefix + delim + line
  }).join('\n')
}


/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

var dtype = __webpack_require__(93)

module.exports = pack

function pack(arr, type) {
  type = type || 'float32'

  if (!arr[0] || !arr[0].length) {
    return arr
  }

  var Arr = typeof type === 'string'
    ? dtype(type)
    : type

  var dim = arr[0].length
  var out = new Arr(arr.length * dim)
  var k = 0

  for (var i = 0; i < arr.length; i++)
  for (var j = 0; j < dim; j++) {
    out[k++] = arr[i][j]
  }

  return out
}


/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(Buffer) {module.exports = function(dtype) {
  switch (dtype) {
    case 'int8':
      return Int8Array
    case 'int16':
      return Int16Array
    case 'int32':
      return Int32Array
    case 'uint8':
      return Uint8Array
    case 'uint16':
      return Uint16Array
    case 'uint32':
      return Uint32Array
    case 'float32':
      return Float32Array
    case 'float64':
      return Float64Array
    case 'array':
      return Array
    case 'uint8_clamped':
      return Uint8ClampedArray
    case 'generic':
    case 'data':
    case 'dataview':
      return ArrayBuffer
    case 'buffer':
      if (typeof Buffer === "undefined") return ArrayBuffer
      return Buffer
  }
}

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(36).Buffer))

/***/ }),
/* 94 */
/***/ (function(module, exports) {

module.exports = function _atob(str) {
  return atob(str)
}


/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.byteLength = byteLength
exports.toByteArray = toByteArray
exports.fromByteArray = fromByteArray

var lookup = []
var revLookup = []
var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array

var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'
for (var i = 0, len = code.length; i < len; ++i) {
  lookup[i] = code[i]
  revLookup[code.charCodeAt(i)] = i
}

revLookup['-'.charCodeAt(0)] = 62
revLookup['_'.charCodeAt(0)] = 63

function placeHoldersCount (b64) {
  var len = b64.length
  if (len % 4 > 0) {
    throw new Error('Invalid string. Length must be a multiple of 4')
  }

  // the number of equal signs (place holders)
  // if there are two placeholders, than the two characters before it
  // represent one byte
  // if there is only one, then the three characters before it represent 2 bytes
  // this is just a cheap hack to not do indexOf twice
  return b64[len - 2] === '=' ? 2 : b64[len - 1] === '=' ? 1 : 0
}

function byteLength (b64) {
  // base64 is 4/3 + up to two characters of the original data
  return (b64.length * 3 / 4) - placeHoldersCount(b64)
}

function toByteArray (b64) {
  var i, l, tmp, placeHolders, arr
  var len = b64.length
  placeHolders = placeHoldersCount(b64)

  arr = new Arr((len * 3 / 4) - placeHolders)

  // if there are placeholders, only get up to the last complete 4 chars
  l = placeHolders > 0 ? len - 4 : len

  var L = 0

  for (i = 0; i < l; i += 4) {
    tmp = (revLookup[b64.charCodeAt(i)] << 18) | (revLookup[b64.charCodeAt(i + 1)] << 12) | (revLookup[b64.charCodeAt(i + 2)] << 6) | revLookup[b64.charCodeAt(i + 3)]
    arr[L++] = (tmp >> 16) & 0xFF
    arr[L++] = (tmp >> 8) & 0xFF
    arr[L++] = tmp & 0xFF
  }

  if (placeHolders === 2) {
    tmp = (revLookup[b64.charCodeAt(i)] << 2) | (revLookup[b64.charCodeAt(i + 1)] >> 4)
    arr[L++] = tmp & 0xFF
  } else if (placeHolders === 1) {
    tmp = (revLookup[b64.charCodeAt(i)] << 10) | (revLookup[b64.charCodeAt(i + 1)] << 4) | (revLookup[b64.charCodeAt(i + 2)] >> 2)
    arr[L++] = (tmp >> 8) & 0xFF
    arr[L++] = tmp & 0xFF
  }

  return arr
}

function tripletToBase64 (num) {
  return lookup[num >> 18 & 0x3F] + lookup[num >> 12 & 0x3F] + lookup[num >> 6 & 0x3F] + lookup[num & 0x3F]
}

function encodeChunk (uint8, start, end) {
  var tmp
  var output = []
  for (var i = start; i < end; i += 3) {
    tmp = (uint8[i] << 16) + (uint8[i + 1] << 8) + (uint8[i + 2])
    output.push(tripletToBase64(tmp))
  }
  return output.join('')
}

function fromByteArray (uint8) {
  var tmp
  var len = uint8.length
  var extraBytes = len % 3 // if we have 1 byte left, pad 2 bytes
  var output = ''
  var parts = []
  var maxChunkLength = 16383 // must be multiple of 3

  // go through the array every three bytes, we'll deal with trailing stuff later
  for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
    parts.push(encodeChunk(uint8, i, (i + maxChunkLength) > len2 ? len2 : (i + maxChunkLength)))
  }

  // pad the end with zeros, but make sure to not forget the extra bytes
  if (extraBytes === 1) {
    tmp = uint8[len - 1]
    output += lookup[tmp >> 2]
    output += lookup[(tmp << 4) & 0x3F]
    output += '=='
  } else if (extraBytes === 2) {
    tmp = (uint8[len - 2] << 8) + (uint8[len - 1])
    output += lookup[tmp >> 10]
    output += lookup[(tmp >> 4) & 0x3F]
    output += lookup[(tmp << 2) & 0x3F]
    output += '='
  }

  parts.push(output)

  return parts.join('')
}


/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Bit twiddling hacks for JavaScript.
 *
 * Author: Mikola Lysenko
 *
 * Ported from Stanford bit twiddling hack library:
 *    http://graphics.stanford.edu/~seander/bithacks.html
 */

 "use restrict";

//Number of bits in an integer
var INT_BITS = 32;

//Constants
exports.INT_BITS  = INT_BITS;
exports.INT_MAX   =  0x7fffffff;
exports.INT_MIN   = -1<<(INT_BITS-1);

//Returns -1, 0, +1 depending on sign of x
exports.sign = function(v) {
  return (v > 0) - (v < 0);
}

//Computes absolute value of integer
exports.abs = function(v) {
  var mask = v >> (INT_BITS-1);
  return (v ^ mask) - mask;
}

//Computes minimum of integers x and y
exports.min = function(x, y) {
  return y ^ ((x ^ y) & -(x < y));
}

//Computes maximum of integers x and y
exports.max = function(x, y) {
  return x ^ ((x ^ y) & -(x < y));
}

//Checks if a number is a power of two
exports.isPow2 = function(v) {
  return !(v & (v-1)) && (!!v);
}

//Computes log base 2 of v
exports.log2 = function(v) {
  var r, shift;
  r =     (v > 0xFFFF) << 4; v >>>= r;
  shift = (v > 0xFF  ) << 3; v >>>= shift; r |= shift;
  shift = (v > 0xF   ) << 2; v >>>= shift; r |= shift;
  shift = (v > 0x3   ) << 1; v >>>= shift; r |= shift;
  return r | (v >> 1);
}

//Computes log base 10 of v
exports.log10 = function(v) {
  return  (v >= 1000000000) ? 9 : (v >= 100000000) ? 8 : (v >= 10000000) ? 7 :
          (v >= 1000000) ? 6 : (v >= 100000) ? 5 : (v >= 10000) ? 4 :
          (v >= 1000) ? 3 : (v >= 100) ? 2 : (v >= 10) ? 1 : 0;
}

//Counts number of bits
exports.popCount = function(v) {
  v = v - ((v >>> 1) & 0x55555555);
  v = (v & 0x33333333) + ((v >>> 2) & 0x33333333);
  return ((v + (v >>> 4) & 0xF0F0F0F) * 0x1010101) >>> 24;
}

//Counts number of trailing zeros
function countTrailingZeros(v) {
  var c = 32;
  v &= -v;
  if (v) c--;
  if (v & 0x0000FFFF) c -= 16;
  if (v & 0x00FF00FF) c -= 8;
  if (v & 0x0F0F0F0F) c -= 4;
  if (v & 0x33333333) c -= 2;
  if (v & 0x55555555) c -= 1;
  return c;
}
exports.countTrailingZeros = countTrailingZeros;

//Rounds to next power of 2
exports.nextPow2 = function(v) {
  v += v === 0;
  --v;
  v |= v >>> 1;
  v |= v >>> 2;
  v |= v >>> 4;
  v |= v >>> 8;
  v |= v >>> 16;
  return v + 1;
}

//Rounds down to previous power of 2
exports.prevPow2 = function(v) {
  v |= v >>> 1;
  v |= v >>> 2;
  v |= v >>> 4;
  v |= v >>> 8;
  v |= v >>> 16;
  return v - (v>>>1);
}

//Computes parity of word
exports.parity = function(v) {
  v ^= v >>> 16;
  v ^= v >>> 8;
  v ^= v >>> 4;
  v &= 0xf;
  return (0x6996 >>> v) & 1;
}

var REVERSE_TABLE = new Array(256);

(function(tab) {
  for(var i=0; i<256; ++i) {
    var v = i, r = i, s = 7;
    for (v >>>= 1; v; v >>>= 1) {
      r <<= 1;
      r |= v & 1;
      --s;
    }
    tab[i] = (r << s) & 0xff;
  }
})(REVERSE_TABLE);

//Reverse bits in a 32 bit word
exports.reverse = function(v) {
  return  (REVERSE_TABLE[ v         & 0xff] << 24) |
          (REVERSE_TABLE[(v >>> 8)  & 0xff] << 16) |
          (REVERSE_TABLE[(v >>> 16) & 0xff] << 8)  |
           REVERSE_TABLE[(v >>> 24) & 0xff];
}

//Interleave bits of 2 coordinates with 16 bits.  Useful for fast quadtree codes
exports.interleave2 = function(x, y) {
  x &= 0xFFFF;
  x = (x | (x << 8)) & 0x00FF00FF;
  x = (x | (x << 4)) & 0x0F0F0F0F;
  x = (x | (x << 2)) & 0x33333333;
  x = (x | (x << 1)) & 0x55555555;

  y &= 0xFFFF;
  y = (y | (y << 8)) & 0x00FF00FF;
  y = (y | (y << 4)) & 0x0F0F0F0F;
  y = (y | (y << 2)) & 0x33333333;
  y = (y | (y << 1)) & 0x55555555;

  return x | (y << 1);
}

//Extracts the nth interleaved component
exports.deinterleave2 = function(v, n) {
  v = (v >>> n) & 0x55555555;
  v = (v | (v >>> 1))  & 0x33333333;
  v = (v | (v >>> 2))  & 0x0F0F0F0F;
  v = (v | (v >>> 4))  & 0x00FF00FF;
  v = (v | (v >>> 16)) & 0x000FFFF;
  return (v << 16) >> 16;
}


//Interleave bits of 3 coordinates, each with 10 bits.  Useful for fast octree codes
exports.interleave3 = function(x, y, z) {
  x &= 0x3FF;
  x  = (x | (x<<16)) & 4278190335;
  x  = (x | (x<<8))  & 251719695;
  x  = (x | (x<<4))  & 3272356035;
  x  = (x | (x<<2))  & 1227133513;

  y &= 0x3FF;
  y  = (y | (y<<16)) & 4278190335;
  y  = (y | (y<<8))  & 251719695;
  y  = (y | (y<<4))  & 3272356035;
  y  = (y | (y<<2))  & 1227133513;
  x |= (y << 1);
  
  z &= 0x3FF;
  z  = (z | (z<<16)) & 4278190335;
  z  = (z | (z<<8))  & 251719695;
  z  = (z | (z<<4))  & 3272356035;
  z  = (z | (z<<2))  & 1227133513;
  
  return x | (z << 2);
}

//Extracts nth interleaved component of a 3-tuple
exports.deinterleave3 = function(v, n) {
  v = (v >>> n)       & 1227133513;
  v = (v | (v>>>2))   & 3272356035;
  v = (v | (v>>>4))   & 251719695;
  v = (v | (v>>>8))   & 4278190335;
  v = (v | (v>>>16))  & 0x3FF;
  return (v<<22)>>22;
}

//Computes next combination in colexicographic order (this is mistakenly called nextPermutation on the bit twiddling hacks page)
exports.nextCombination = function(v) {
  var t = v | (v - 1);
  return (t + 1) | (((~t & -~t) - 1) >>> (countTrailingZeros(v) + 1));
}



/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

var isEqual = __webpack_require__(28);
var isLeft = __webpack_require__(18);

module.exports = function( polygon ) {
  // find the lowest rightmost point
  var ri = -1;
  var rx = -1000000, ry = 10000000;
  var len = polygon.length;
  var x, y;
  for( var i = 0; i < len; i++ ) {
    x = polygon[ i ][ 0 ];
    y = polygon[ i ][ 1 ];
    if( y < ry || ( ( y == ry ) && ( x > rx ) ) ) {
      ri = i;
      rx = x;
      ry = y;
    }
  }

  // calculate the angles (relative to the positive x-axis) from bottom
  // right most point and every other point
  var angles = [];
  for( var i = 0; i < len; i++ ) {
      x = polygon[ i ][ 0 ] - rx;
      y = polygon[ i ][ 1 ] - ry;
      angles[ i ] = { 'key' : i, 'value' : Math.atan2( y, x ), 'length' : ( x*x + y*y ) };
  }

  // sort the angles, keep the indicies of the original points for referece
  angles.sort( function( a, b ) {
    if( isEqual( a.value, b.value ) ) { return 0; }
    else if( a.value < b.value ) { return -1; }
    return 1; }
  );

  // remove points that have the same angle ( only remove the one closest to
  // the bottom right most point )
  var a, b;
  for( var i = 1; i < angles.length; i++ ) {
    a = angles[ i - 1 ];
    b = angles[ i ];
    if( isEqual( a.value, b.value ) ) {
        if( a.length > b.length ) {
          angles.splice( i, 1 );      //remove b ( 1 )
        }
        else {
          angles.splice( i - 1, 1 );  //remove a ( 0 )
        }
        i--;
    }
  }

  // use graham's algorithm to find the convex hull ( checks
  // to see if the next point on the stack turns left or right
  // if it turns right, the remove it and test again till you turn left
  var i = 1;
  var limit = angles.length;
  var index;
  var stack = [ angles[ limit - 1 ].key, ri ];
  while( i < limit ) {
    index = angles[ i ].key;
    var s = stack.length - 1;
    var sl = s - 1;
    if( isLeft( polygon[ stack[ sl ] ], polygon[ stack[ s ] ], polygon[ index ] ) ) {
      stack.push( index );
      i++;
    }
    else {
      stack.pop();
    }
  }
  return stack;
};


/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

var vec2 = __webpack_require__(0).vec2;
var vec3 = __webpack_require__(0).vec3;
var intersection = __webpack_require__(39);

module.exports = function( polygon, amount ) {
  amount = amount == undefined ? 0.5 : amount;
  var result = [];
  var len = polygon.length;
  var cpr = vec3.create();
  var zdir = vec3.fromValues( 0.0, 0.0, 1.0 );
  var cdir = vec3.create();
  var a = vec2.create();
  var b = vec2.create();
  var c = vec2.create();
  var d = vec2.create();

  var dir = vec2.create();
  var at, bt, ct, t;
  // Preform first a, b, calculation so we optimise loop
  at = polygon[ len - 1 ];
  bt = polygon[ 0 ];
  vec2.copy( a, at );
  vec2.copy( b, bt );
  vec2.subtract( dir, b, a );
  vec3.set( cdir, dir[ 0 ], dir[ 1 ], 0.0 );
  vec3.cross( cpr, cdir, zdir );
  vec3.normalize( cpr, cpr );
  vec3.scale( cpr, cpr, amount );
  vec2.copy( dir, cpr );
  vec2.add( a, a, dir );
  vec2.add( b, b, dir );

  for( var i = 0; i < len; i++ ) {
    bt = polygon[ i ];
    ct = polygon[ ( i + 1 ) % len ];

    vec2.copy( c, bt );
    vec2.copy( d, ct );

    vec2.subtract( dir, d, c );
    vec3.set( cdir, dir[ 0 ], dir[ 1 ], 0.0 );
    vec3.cross( cpr, cdir, zdir );
    vec3.normalize( cpr, cpr );
    vec3.scale( cpr, cpr, amount );
    vec2.copy( dir, cpr );
    vec2.add( c, c, dir );
    vec2.add( d, d, dir );

    result.push( intersection( a, b, c, d ) );

    vec2.copy( a, c );
    vec2.copy( b, d );
  }
  return result;
};


/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

var intersectsProper = __webpack_require__(26);
var isBetween = __webpack_require__(40);

module.exports = function( a, b, c, d )
{
  if( intersectsProper( a, b, c, d ) ) {
    return true;
  }
  else if( isBetween( a, b, c ) || isBetween( a, b, d ) ||
           isBetween( c, d, a ) || isBetween( c, d, b ) ) {
    return true;
  }
  return false;
};


/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

var isZero = __webpack_require__(10);

module.exports = function( a, b, c ) {
  var cax = c[ 0 ] - a[ 0 ];
  var cay = c[ 1 ] - a[ 1 ];
  var caz = c[ 2 ] - a[ 2 ];
  var bax = b[ 0 ] - a[ 0 ];
  var bay = b[ 1 ] - a[ 1 ];
  var baz = b[ 2 ] - a[ 2 ];
  return isZero( ( caz * bay ) - ( baz * cay ) ) &&
         isZero( ( baz * cax ) - ( bax * caz ) ) &&
         isZero( ( bax * cay ) - ( bay * cax ) );
};


/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

var isDiagonal = __webpack_require__(41);

module.exports = function( polygon ) {
  var len = polygon.length;
  var ears = [];
  for( var i = 0; i < len; i++ ) {
    var i0 = i - 1 < 0 ? len - 1 : i - 1;
    var i1 = ( i + 1 ) % len;
    ears.push( isDiagonal( i0, i1, polygon ) );
  }
  var polys = polygon.slice( 0 );
  var v0, v1, v2 = 0, v3, v4, n = polys.length, end = 0;
  var lookups = [];
  var llen = 0;
  for( var i = 0; i < len; i++ ) { lookups[ i ] = i; }
  var cells = [];
  while( n > 3 ) {
    do {
      llen = lookups.length;
      v2 = v2 % llen;
      if( ears[ lookups[ v2 ] ] ) {
        v4 = ( v2 + 2 ) % llen;
        v3 = ( v2 + 1 ) % llen;
        //v2//
        v1 = ( v2 - 1 );
        v1 = v1 < 0 ? llen + v1 : v1;
        v0 = v1 - 1;
        v0 = v0 < 0 ? llen + v0 : v0;

        v0 = v0 % llen;
        v1 = v1 % llen;
        v2 = v2 % llen;
        v3 = v3 % llen;
        v4 = v4 % llen;

        ears[ lookups[ v1 ] ] = isDiagonal( lookups[ v0 ], lookups[ v3 ], polys );
        ears[ lookups[ v3 ] ] = isDiagonal( lookups[ v1 ], lookups[ v4 ], polys );
        cells.push( [ lookups[ v2 ], lookups[ v3 ], lookups[ v1 ] ] );
        lookups.splice( v2, 1 );        
        end = v3;
        n--;
        break;
      }
      v2++;
    } while ( v2 != end );
  }
  cells.push( [ lookups[ 1 ], lookups[ 2 ], lookups[ 0 ] ] )
  return cells;
};


/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var createThunk = __webpack_require__(104)

function Procedure() {
  this.argTypes = []
  this.shimArgs = []
  this.arrayArgs = []
  this.arrayBlockIndices = []
  this.scalarArgs = []
  this.offsetArgs = []
  this.offsetArgIndex = []
  this.indexArgs = []
  this.shapeArgs = []
  this.funcName = ""
  this.pre = null
  this.body = null
  this.post = null
  this.debug = false
}

function compileCwise(user_args) {
  //Create procedure
  var proc = new Procedure()
  
  //Parse blocks
  proc.pre    = user_args.pre
  proc.body   = user_args.body
  proc.post   = user_args.post

  //Parse arguments
  var proc_args = user_args.args.slice(0)
  proc.argTypes = proc_args
  for(var i=0; i<proc_args.length; ++i) {
    var arg_type = proc_args[i]
    if(arg_type === "array" || (typeof arg_type === "object" && arg_type.blockIndices)) {
      proc.argTypes[i] = "array"
      proc.arrayArgs.push(i)
      proc.arrayBlockIndices.push(arg_type.blockIndices ? arg_type.blockIndices : 0)
      proc.shimArgs.push("array" + i)
      if(i < proc.pre.args.length && proc.pre.args[i].count>0) {
        throw new Error("cwise: pre() block may not reference array args")
      }
      if(i < proc.post.args.length && proc.post.args[i].count>0) {
        throw new Error("cwise: post() block may not reference array args")
      }
    } else if(arg_type === "scalar") {
      proc.scalarArgs.push(i)
      proc.shimArgs.push("scalar" + i)
    } else if(arg_type === "index") {
      proc.indexArgs.push(i)
      if(i < proc.pre.args.length && proc.pre.args[i].count > 0) {
        throw new Error("cwise: pre() block may not reference array index")
      }
      if(i < proc.body.args.length && proc.body.args[i].lvalue) {
        throw new Error("cwise: body() block may not write to array index")
      }
      if(i < proc.post.args.length && proc.post.args[i].count > 0) {
        throw new Error("cwise: post() block may not reference array index")
      }
    } else if(arg_type === "shape") {
      proc.shapeArgs.push(i)
      if(i < proc.pre.args.length && proc.pre.args[i].lvalue) {
        throw new Error("cwise: pre() block may not write to array shape")
      }
      if(i < proc.body.args.length && proc.body.args[i].lvalue) {
        throw new Error("cwise: body() block may not write to array shape")
      }
      if(i < proc.post.args.length && proc.post.args[i].lvalue) {
        throw new Error("cwise: post() block may not write to array shape")
      }
    } else if(typeof arg_type === "object" && arg_type.offset) {
      proc.argTypes[i] = "offset"
      proc.offsetArgs.push({ array: arg_type.array, offset:arg_type.offset })
      proc.offsetArgIndex.push(i)
    } else {
      throw new Error("cwise: Unknown argument type " + proc_args[i])
    }
  }
  
  //Make sure at least one array argument was specified
  if(proc.arrayArgs.length <= 0) {
    throw new Error("cwise: No array arguments specified")
  }
  
  //Make sure arguments are correct
  if(proc.pre.args.length > proc_args.length) {
    throw new Error("cwise: Too many arguments in pre() block")
  }
  if(proc.body.args.length > proc_args.length) {
    throw new Error("cwise: Too many arguments in body() block")
  }
  if(proc.post.args.length > proc_args.length) {
    throw new Error("cwise: Too many arguments in post() block")
  }

  //Check debug flag
  proc.debug = !!user_args.printCode || !!user_args.debug
  
  //Retrieve name
  proc.funcName = user_args.funcName || "cwise"
  
  //Read in block size
  proc.blockSize = user_args.blockSize || 64

  return createThunk(proc)
}

module.exports = compileCwise


/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var uniq = __webpack_require__(191)

// This function generates very simple loops analogous to how you typically traverse arrays (the outermost loop corresponds to the slowest changing index, the innermost loop to the fastest changing index)
// TODO: If two arrays have the same strides (and offsets) there is potential for decreasing the number of "pointers" and related variables. The drawback is that the type signature would become more specific and that there would thus be less potential for caching, but it might still be worth it, especially when dealing with large numbers of arguments.
function innerFill(order, proc, body) {
  var dimension = order.length
    , nargs = proc.arrayArgs.length
    , has_index = proc.indexArgs.length>0
    , code = []
    , vars = []
    , idx=0, pidx=0, i, j
  for(i=0; i<dimension; ++i) { // Iteration variables
    vars.push(["i",i,"=0"].join(""))
  }
  //Compute scan deltas
  for(j=0; j<nargs; ++j) {
    for(i=0; i<dimension; ++i) {
      pidx = idx
      idx = order[i]
      if(i === 0) { // The innermost/fastest dimension's delta is simply its stride
        vars.push(["d",j,"s",i,"=t",j,"p",idx].join(""))
      } else { // For other dimensions the delta is basically the stride minus something which essentially "rewinds" the previous (more inner) dimension
        vars.push(["d",j,"s",i,"=(t",j,"p",idx,"-s",pidx,"*t",j,"p",pidx,")"].join(""))
      }
    }
  }
  if (vars.length > 0) {
    code.push("var " + vars.join(","))
  }  
  //Scan loop
  for(i=dimension-1; i>=0; --i) { // Start at largest stride and work your way inwards
    idx = order[i]
    code.push(["for(i",i,"=0;i",i,"<s",idx,";++i",i,"){"].join(""))
  }
  //Push body of inner loop
  code.push(body)
  //Advance scan pointers
  for(i=0; i<dimension; ++i) {
    pidx = idx
    idx = order[i]
    for(j=0; j<nargs; ++j) {
      code.push(["p",j,"+=d",j,"s",i].join(""))
    }
    if(has_index) {
      if(i > 0) {
        code.push(["index[",pidx,"]-=s",pidx].join(""))
      }
      code.push(["++index[",idx,"]"].join(""))
    }
    code.push("}")
  }
  return code.join("\n")
}

// Generate "outer" loops that loop over blocks of data, applying "inner" loops to the blocks by manipulating the local variables in such a way that the inner loop only "sees" the current block.
// TODO: If this is used, then the previous declaration (done by generateCwiseOp) of s* is essentially unnecessary.
//       I believe the s* are not used elsewhere (in particular, I don't think they're used in the pre/post parts and "shape" is defined independently), so it would be possible to make defining the s* dependent on what loop method is being used.
function outerFill(matched, order, proc, body) {
  var dimension = order.length
    , nargs = proc.arrayArgs.length
    , blockSize = proc.blockSize
    , has_index = proc.indexArgs.length > 0
    , code = []
  for(var i=0; i<nargs; ++i) {
    code.push(["var offset",i,"=p",i].join(""))
  }
  //Generate loops for unmatched dimensions
  // The order in which these dimensions are traversed is fairly arbitrary (from small stride to large stride, for the first argument)
  // TODO: It would be nice if the order in which these loops are placed would also be somehow "optimal" (at the very least we should check that it really doesn't hurt us if they're not).
  for(var i=matched; i<dimension; ++i) {
    code.push(["for(var j"+i+"=SS[", order[i], "]|0;j", i, ">0;){"].join("")) // Iterate back to front
    code.push(["if(j",i,"<",blockSize,"){"].join("")) // Either decrease j by blockSize (s = blockSize), or set it to zero (after setting s = j).
    code.push(["s",order[i],"=j",i].join(""))
    code.push(["j",i,"=0"].join(""))
    code.push(["}else{s",order[i],"=",blockSize].join(""))
    code.push(["j",i,"-=",blockSize,"}"].join(""))
    if(has_index) {
      code.push(["index[",order[i],"]=j",i].join(""))
    }
  }
  for(var i=0; i<nargs; ++i) {
    var indexStr = ["offset"+i]
    for(var j=matched; j<dimension; ++j) {
      indexStr.push(["j",j,"*t",i,"p",order[j]].join(""))
    }
    code.push(["p",i,"=(",indexStr.join("+"),")"].join(""))
  }
  code.push(innerFill(order, proc, body))
  for(var i=matched; i<dimension; ++i) {
    code.push("}")
  }
  return code.join("\n")
}

//Count the number of compatible inner orders
// This is the length of the longest common prefix of the arrays in orders.
// Each array in orders lists the dimensions of the correspond ndarray in order of increasing stride.
// This is thus the maximum number of dimensions that can be efficiently traversed by simple nested loops for all arrays.
function countMatches(orders) {
  var matched = 0, dimension = orders[0].length
  while(matched < dimension) {
    for(var j=1; j<orders.length; ++j) {
      if(orders[j][matched] !== orders[0][matched]) {
        return matched
      }
    }
    ++matched
  }
  return matched
}

//Processes a block according to the given data types
// Replaces variable names by different ones, either "local" ones (that are then ferried in and out of the given array) or ones matching the arguments that the function performing the ultimate loop will accept.
function processBlock(block, proc, dtypes) {
  var code = block.body
  var pre = []
  var post = []
  for(var i=0; i<block.args.length; ++i) {
    var carg = block.args[i]
    if(carg.count <= 0) {
      continue
    }
    var re = new RegExp(carg.name, "g")
    var ptrStr = ""
    var arrNum = proc.arrayArgs.indexOf(i)
    switch(proc.argTypes[i]) {
      case "offset":
        var offArgIndex = proc.offsetArgIndex.indexOf(i)
        var offArg = proc.offsetArgs[offArgIndex]
        arrNum = offArg.array
        ptrStr = "+q" + offArgIndex // Adds offset to the "pointer" in the array
      case "array":
        ptrStr = "p" + arrNum + ptrStr
        var localStr = "l" + i
        var arrStr = "a" + arrNum
        if (proc.arrayBlockIndices[arrNum] === 0) { // Argument to body is just a single value from this array
          if(carg.count === 1) { // Argument/array used only once(?)
            if(dtypes[arrNum] === "generic") {
              if(carg.lvalue) {
                pre.push(["var ", localStr, "=", arrStr, ".get(", ptrStr, ")"].join("")) // Is this necessary if the argument is ONLY used as an lvalue? (keep in mind that we can have a += something, so we would actually need to check carg.rvalue)
                code = code.replace(re, localStr)
                post.push([arrStr, ".set(", ptrStr, ",", localStr,")"].join(""))
              } else {
                code = code.replace(re, [arrStr, ".get(", ptrStr, ")"].join(""))
              }
            } else {
              code = code.replace(re, [arrStr, "[", ptrStr, "]"].join(""))
            }
          } else if(dtypes[arrNum] === "generic") {
            pre.push(["var ", localStr, "=", arrStr, ".get(", ptrStr, ")"].join("")) // TODO: Could we optimize by checking for carg.rvalue?
            code = code.replace(re, localStr)
            if(carg.lvalue) {
              post.push([arrStr, ".set(", ptrStr, ",", localStr,")"].join(""))
            }
          } else {
            pre.push(["var ", localStr, "=", arrStr, "[", ptrStr, "]"].join("")) // TODO: Could we optimize by checking for carg.rvalue?
            code = code.replace(re, localStr)
            if(carg.lvalue) {
              post.push([arrStr, "[", ptrStr, "]=", localStr].join(""))
            }
          }
        } else { // Argument to body is a "block"
          var reStrArr = [carg.name], ptrStrArr = [ptrStr]
          for(var j=0; j<Math.abs(proc.arrayBlockIndices[arrNum]); j++) {
            reStrArr.push("\\s*\\[([^\\]]+)\\]")
            ptrStrArr.push("$" + (j+1) + "*t" + arrNum + "b" + j) // Matched index times stride
          }
          re = new RegExp(reStrArr.join(""), "g")
          ptrStr = ptrStrArr.join("+")
          if(dtypes[arrNum] === "generic") {
            /*if(carg.lvalue) {
              pre.push(["var ", localStr, "=", arrStr, ".get(", ptrStr, ")"].join("")) // Is this necessary if the argument is ONLY used as an lvalue? (keep in mind that we can have a += something, so we would actually need to check carg.rvalue)
              code = code.replace(re, localStr)
              post.push([arrStr, ".set(", ptrStr, ",", localStr,")"].join(""))
            } else {
              code = code.replace(re, [arrStr, ".get(", ptrStr, ")"].join(""))
            }*/
            throw new Error("cwise: Generic arrays not supported in combination with blocks!")
          } else {
            // This does not produce any local variables, even if variables are used multiple times. It would be possible to do so, but it would complicate things quite a bit.
            code = code.replace(re, [arrStr, "[", ptrStr, "]"].join(""))
          }
        }
      break
      case "scalar":
        code = code.replace(re, "Y" + proc.scalarArgs.indexOf(i))
      break
      case "index":
        code = code.replace(re, "index")
      break
      case "shape":
        code = code.replace(re, "shape")
      break
    }
  }
  return [pre.join("\n"), code, post.join("\n")].join("\n").trim()
}

function typeSummary(dtypes) {
  var summary = new Array(dtypes.length)
  var allEqual = true
  for(var i=0; i<dtypes.length; ++i) {
    var t = dtypes[i]
    var digits = t.match(/\d+/)
    if(!digits) {
      digits = ""
    } else {
      digits = digits[0]
    }
    if(t.charAt(0) === 0) {
      summary[i] = "u" + t.charAt(1) + digits
    } else {
      summary[i] = t.charAt(0) + digits
    }
    if(i > 0) {
      allEqual = allEqual && summary[i] === summary[i-1]
    }
  }
  if(allEqual) {
    return summary[0]
  }
  return summary.join("")
}

//Generates a cwise operator
function generateCWiseOp(proc, typesig) {

  //Compute dimension
  // Arrays get put first in typesig, and there are two entries per array (dtype and order), so this gets the number of dimensions in the first array arg.
  var dimension = (typesig[1].length - Math.abs(proc.arrayBlockIndices[0]))|0
  var orders = new Array(proc.arrayArgs.length)
  var dtypes = new Array(proc.arrayArgs.length)
  for(var i=0; i<proc.arrayArgs.length; ++i) {
    dtypes[i] = typesig[2*i]
    orders[i] = typesig[2*i+1]
  }
  
  //Determine where block and loop indices start and end
  var blockBegin = [], blockEnd = [] // These indices are exposed as blocks
  var loopBegin = [], loopEnd = [] // These indices are iterated over
  var loopOrders = [] // orders restricted to the loop indices
  for(var i=0; i<proc.arrayArgs.length; ++i) {
    if (proc.arrayBlockIndices[i]<0) {
      loopBegin.push(0)
      loopEnd.push(dimension)
      blockBegin.push(dimension)
      blockEnd.push(dimension+proc.arrayBlockIndices[i])
    } else {
      loopBegin.push(proc.arrayBlockIndices[i]) // Non-negative
      loopEnd.push(proc.arrayBlockIndices[i]+dimension)
      blockBegin.push(0)
      blockEnd.push(proc.arrayBlockIndices[i])
    }
    var newOrder = []
    for(var j=0; j<orders[i].length; j++) {
      if (loopBegin[i]<=orders[i][j] && orders[i][j]<loopEnd[i]) {
        newOrder.push(orders[i][j]-loopBegin[i]) // If this is a loop index, put it in newOrder, subtracting loopBegin, to make sure that all loopOrders are using a common set of indices.
      }
    }
    loopOrders.push(newOrder)
  }

  //First create arguments for procedure
  var arglist = ["SS"] // SS is the overall shape over which we iterate
  var code = ["'use strict'"]
  var vars = []
  
  for(var j=0; j<dimension; ++j) {
    vars.push(["s", j, "=SS[", j, "]"].join("")) // The limits for each dimension.
  }
  for(var i=0; i<proc.arrayArgs.length; ++i) {
    arglist.push("a"+i) // Actual data array
    arglist.push("t"+i) // Strides
    arglist.push("p"+i) // Offset in the array at which the data starts (also used for iterating over the data)
    
    for(var j=0; j<dimension; ++j) { // Unpack the strides into vars for looping
      vars.push(["t",i,"p",j,"=t",i,"[",loopBegin[i]+j,"]"].join(""))
    }
    
    for(var j=0; j<Math.abs(proc.arrayBlockIndices[i]); ++j) { // Unpack the strides into vars for block iteration
      vars.push(["t",i,"b",j,"=t",i,"[",blockBegin[i]+j,"]"].join(""))
    }
  }
  for(var i=0; i<proc.scalarArgs.length; ++i) {
    arglist.push("Y" + i)
  }
  if(proc.shapeArgs.length > 0) {
    vars.push("shape=SS.slice(0)") // Makes the shape over which we iterate available to the user defined functions (so you can use width/height for example)
  }
  if(proc.indexArgs.length > 0) {
    // Prepare an array to keep track of the (logical) indices, initialized to dimension zeroes.
    var zeros = new Array(dimension)
    for(var i=0; i<dimension; ++i) {
      zeros[i] = "0"
    }
    vars.push(["index=[", zeros.join(","), "]"].join(""))
  }
  for(var i=0; i<proc.offsetArgs.length; ++i) { // Offset arguments used for stencil operations
    var off_arg = proc.offsetArgs[i]
    var init_string = []
    for(var j=0; j<off_arg.offset.length; ++j) {
      if(off_arg.offset[j] === 0) {
        continue
      } else if(off_arg.offset[j] === 1) {
        init_string.push(["t", off_arg.array, "p", j].join(""))      
      } else {
        init_string.push([off_arg.offset[j], "*t", off_arg.array, "p", j].join(""))
      }
    }
    if(init_string.length === 0) {
      vars.push("q" + i + "=0")
    } else {
      vars.push(["q", i, "=", init_string.join("+")].join(""))
    }
  }

  //Prepare this variables
  var thisVars = uniq([].concat(proc.pre.thisVars)
                      .concat(proc.body.thisVars)
                      .concat(proc.post.thisVars))
  vars = vars.concat(thisVars)
  if (vars.length > 0) {
    code.push("var " + vars.join(","))
  }
  for(var i=0; i<proc.arrayArgs.length; ++i) {
    code.push("p"+i+"|=0")
  }
  
  //Inline prelude
  if(proc.pre.body.length > 3) {
    code.push(processBlock(proc.pre, proc, dtypes))
  }

  //Process body
  var body = processBlock(proc.body, proc, dtypes)
  var matched = countMatches(loopOrders)
  if(matched < dimension) {
    code.push(outerFill(matched, loopOrders[0], proc, body)) // TODO: Rather than passing loopOrders[0], it might be interesting to look at passing an order that represents the majority of the arguments for example.
  } else {
    code.push(innerFill(loopOrders[0], proc, body))
  }

  //Inline epilog
  if(proc.post.body.length > 3) {
    code.push(processBlock(proc.post, proc, dtypes))
  }
  
  if(proc.debug) {
    console.log("-----Generated cwise routine for ", typesig, ":\n" + code.join("\n") + "\n----------")
  }
  
  var loopName = [(proc.funcName||"unnamed"), "_cwise_loop_", orders[0].join("s"),"m",matched,typeSummary(dtypes)].join("")
  var f = new Function(["function ",loopName,"(", arglist.join(","),"){", code.join("\n"),"} return ", loopName].join(""))
  return f()
}
module.exports = generateCWiseOp


/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// The function below is called when constructing a cwise function object, and does the following:
// A function object is constructed which accepts as argument a compilation function and returns another function.
// It is this other function that is eventually returned by createThunk, and this function is the one that actually
// checks whether a certain pattern of arguments has already been used before and compiles new loops as needed.
// The compilation passed to the first function object is used for compiling new functions.
// Once this function object is created, it is called with compile as argument, where the first argument of compile
// is bound to "proc" (essentially containing a preprocessed version of the user arguments to cwise).
// So createThunk roughly works like this:
// function createThunk(proc) {
//   var thunk = function(compileBound) {
//     var CACHED = {}
//     return function(arrays and scalars) {
//       if (dtype and order of arrays in CACHED) {
//         var func = CACHED[dtype and order of arrays]
//       } else {
//         var func = CACHED[dtype and order of arrays] = compileBound(dtype and order of arrays)
//       }
//       return func(arrays and scalars)
//     }
//   }
//   return thunk(compile.bind1(proc))
// }

var compile = __webpack_require__(103)

function createThunk(proc) {
  var code = ["'use strict'", "var CACHED={}"]
  var vars = []
  var thunkName = proc.funcName + "_cwise_thunk"
  
  //Build thunk
  code.push(["return function ", thunkName, "(", proc.shimArgs.join(","), "){"].join(""))
  var typesig = []
  var string_typesig = []
  var proc_args = [["array",proc.arrayArgs[0],".shape.slice(", // Slice shape so that we only retain the shape over which we iterate (which gets passed to the cwise operator as SS).
                    Math.max(0,proc.arrayBlockIndices[0]),proc.arrayBlockIndices[0]<0?(","+proc.arrayBlockIndices[0]+")"):")"].join("")]
  var shapeLengthConditions = [], shapeConditions = []
  // Process array arguments
  for(var i=0; i<proc.arrayArgs.length; ++i) {
    var j = proc.arrayArgs[i]
    vars.push(["t", j, "=array", j, ".dtype,",
               "r", j, "=array", j, ".order"].join(""))
    typesig.push("t" + j)
    typesig.push("r" + j)
    string_typesig.push("t"+j)
    string_typesig.push("r"+j+".join()")
    proc_args.push("array" + j + ".data")
    proc_args.push("array" + j + ".stride")
    proc_args.push("array" + j + ".offset|0")
    if (i>0) { // Gather conditions to check for shape equality (ignoring block indices)
      shapeLengthConditions.push("array" + proc.arrayArgs[0] + ".shape.length===array" + j + ".shape.length+" + (Math.abs(proc.arrayBlockIndices[0])-Math.abs(proc.arrayBlockIndices[i])))
      shapeConditions.push("array" + proc.arrayArgs[0] + ".shape[shapeIndex+" + Math.max(0,proc.arrayBlockIndices[0]) + "]===array" + j + ".shape[shapeIndex+" + Math.max(0,proc.arrayBlockIndices[i]) + "]")
    }
  }
  // Check for shape equality
  if (proc.arrayArgs.length > 1) {
    code.push("if (!(" + shapeLengthConditions.join(" && ") + ")) throw new Error('cwise: Arrays do not all have the same dimensionality!')")
    code.push("for(var shapeIndex=array" + proc.arrayArgs[0] + ".shape.length-" + Math.abs(proc.arrayBlockIndices[0]) + "; shapeIndex-->0;) {")
    code.push("if (!(" + shapeConditions.join(" && ") + ")) throw new Error('cwise: Arrays do not all have the same shape!')")
    code.push("}")
  }
  // Process scalar arguments
  for(var i=0; i<proc.scalarArgs.length; ++i) {
    proc_args.push("scalar" + proc.scalarArgs[i])
  }
  // Check for cached function (and if not present, generate it)
  vars.push(["type=[", string_typesig.join(","), "].join()"].join(""))
  vars.push("proc=CACHED[type]")
  code.push("var " + vars.join(","))
  
  code.push(["if(!proc){",
             "CACHED[type]=proc=compile([", typesig.join(","), "])}",
             "return proc(", proc_args.join(","), ")}"].join(""))

  if(proc.debug) {
    console.log("-----Generated thunk:\n" + code.join("\n") + "\n----------")
  }
  
  //Compile thunk
  var thunk = new Function("compile", code.join("\n"))
  return thunk(compile.bind(undefined, proc))
}

module.exports = createThunk


/***/ }),
/* 105 */
/***/ (function(module, exports) {

module.exports = function deepFreeze (o) {
  Object.freeze(o);

  Object.getOwnPropertyNames(o).forEach(function (prop) {
    if (o.hasOwnProperty(prop)
    && o[prop] !== null
    && (typeof o[prop] === "object" || typeof o[prop] === "function")
    && !Object.isFrozen(o[prop])) {
      deepFreeze(o[prop]);
    }
  });
  
  return o;
};


/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function dupe_array(count, value, i) {
  var c = count[i]|0
  if(c <= 0) {
    return []
  }
  var result = new Array(c), j
  if(i === count.length-1) {
    for(j=0; j<c; ++j) {
      result[j] = value
    }
  } else {
    for(j=0; j<c; ++j) {
      result[j] = dupe_array(count, value, i+1)
    }
  }
  return result
}

function dupe_number(count, value) {
  var result, i
  result = new Array(count)
  for(i=0; i<count; ++i) {
    result[i] = value
  }
  return result
}

function dupe(count, value) {
  if(typeof value === "undefined") {
    value = 0
  }
  switch(typeof count) {
    case "number":
      if(count > 0) {
        return dupe_number(count|0, value)
      }
    break
    case "object":
      if(typeof (count.length) === "number") {
        return dupe_array(count, value, 0)
      }
    break
  }
  return []
}

module.exports = dupe

/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var pool = __webpack_require__(190)
var ops = __webpack_require__(179)
var ndarray = __webpack_require__(180)

var SUPPORTED_TYPES = [
  "uint8",
  "uint8_clamped",
  "uint16",
  "uint32",
  "int8",
  "int16",
  "int32",
  "float32" ]

function GLBuffer(gl, type, handle, length, usage) {
  this.gl = gl
  this.type = type
  this.handle = handle
  this.length = length
  this.usage = usage
}

var proto = GLBuffer.prototype

proto.bind = function() {
  this.gl.bindBuffer(this.type, this.handle)
}

proto.unbind = function() {
  this.gl.bindBuffer(this.type, null)
}

proto.dispose = function() {
  this.gl.deleteBuffer(this.handle)
}

function updateTypeArray(gl, type, len, usage, data, offset) {
  var dataLen = data.length * data.BYTES_PER_ELEMENT
  if(offset < 0) {
    gl.bufferData(type, data, usage)
    return dataLen
  }
  if(dataLen + offset > len) {
    throw new Error("gl-buffer: If resizing buffer, must not specify offset")
  }
  gl.bufferSubData(type, offset, data)
  return len
}

function makeScratchTypeArray(array, dtype) {
  var res = pool.malloc(array.length, dtype)
  var n = array.length
  for(var i=0; i<n; ++i) {
    res[i] = array[i]
  }
  return res
}

function isPacked(shape, stride) {
  var n = 1
  for(var i=stride.length-1; i>=0; --i) {
    if(stride[i] !== n) {
      return false
    }
    n *= shape[i]
  }
  return true
}

proto.update = function(array, offset) {
  if(typeof offset !== "number") {
    offset = -1
  }
  this.bind()
  if(typeof array === "object" && typeof array.shape !== "undefined") { //ndarray
    var dtype = array.dtype
    if(SUPPORTED_TYPES.indexOf(dtype) < 0) {
      dtype = "float32"
    }
    if(this.type === this.gl.ELEMENT_ARRAY_BUFFER) {
      var ext = gl.getExtension('OES_element_index_uint')
      if(ext && dtype !== "uint16") {
        dtype = "uint32"
      } else {
        dtype = "uint16"
      }
    }
    if(dtype === array.dtype && isPacked(array.shape, array.stride)) {
      if(array.offset === 0 && array.data.length === array.shape[0]) {
        this.length = updateTypeArray(this.gl, this.type, this.length, this.usage, array.data, offset)
      } else {
        this.length = updateTypeArray(this.gl, this.type, this.length, this.usage, array.data.subarray(array.offset, array.shape[0]), offset)
      }
    } else {
      var tmp = pool.malloc(array.size, dtype)
      var ndt = ndarray(tmp, array.shape)
      ops.assign(ndt, array)
      if(offset < 0) {
        this.length = updateTypeArray(this.gl, this.type, this.length, this.usage, tmp, offset)
      } else {
        this.length = updateTypeArray(this.gl, this.type, this.length, this.usage, tmp.subarray(0, array.size), offset)
      }
      pool.free(tmp)
    }
  } else if(Array.isArray(array)) { //Vanilla array
    var t
    if(this.type === this.gl.ELEMENT_ARRAY_BUFFER) {
      t = makeScratchTypeArray(array, "uint16")
    } else {
      t = makeScratchTypeArray(array, "float32")
    }
    if(offset < 0) {
      this.length = updateTypeArray(this.gl, this.type, this.length, this.usage, t, offset)
    } else {
      this.length = updateTypeArray(this.gl, this.type, this.length, this.usage, t.subarray(0, array.length), offset)
    }
    pool.free(t)
  } else if(typeof array === "object" && typeof array.length === "number") { //Typed array
    this.length = updateTypeArray(this.gl, this.type, this.length, this.usage, array, offset)
  } else if(typeof array === "number" || array === undefined) { //Number/default
    if(offset >= 0) {
      throw new Error("gl-buffer: Cannot specify offset when resizing buffer")
    }
    array = array | 0
    if(array <= 0) {
      array = 1
    }
    this.gl.bufferData(this.type, array|0, this.usage)
    this.length = array
  } else { //Error, case should not happen
    throw new Error("gl-buffer: Invalid data type")
  }
}

function createBuffer(gl, data, type, usage) {
  type = type || gl.ARRAY_BUFFER
  usage = usage || gl.DYNAMIC_DRAW
  if(type !== gl.ARRAY_BUFFER && type !== gl.ELEMENT_ARRAY_BUFFER) {
    throw new Error("gl-buffer: Invalid type for webgl buffer, must be either gl.ARRAY_BUFFER or gl.ELEMENT_ARRAY_BUFFER")
  }
  if(usage !== gl.DYNAMIC_DRAW && usage !== gl.STATIC_DRAW && usage !== gl.STREAM_DRAW) {
    throw new Error("gl-buffer: Invalid usage for buffer, must be either gl.DYNAMIC_DRAW, gl.STATIC_DRAW or gl.STREAM_DRAW")
  }
  var handle = gl.createBuffer()
  var result = new GLBuffer(gl, type, handle, 0, usage)
  result.update(data)
  return result
}

module.exports = createBuffer


/***/ }),
/* 108 */
/***/ (function(module, exports) {

exports.color = function(color) {
  return array(color, [0, 0, 0, 1])
}

exports.depth = function(depth) {
  return number(depth, 1)
}

exports.stencil = function(stencil) {
  return number(stencil, false)
}

function number(n, def) {
  if (n === false) return false
  if (typeof n === 'undefined') return def
  return n + 0
}

function array(a, def) {
  if (a === false) return false
  if (Array.isArray(a)) return a || def
  return def
}


/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

var defaults = __webpack_require__(108)

module.exports = clear

function clear(opts) {
  opts = opts || {}

  var color = defaults.color(opts.color)
  Object.defineProperty(clear, 'color', {
    get: function() { return color },
    set: function(value) {
      return color = defaults.color(value)
    }
  })

  var depth = defaults.depth(opts.depth)
  Object.defineProperty(clear, 'depth', {
    get: function() { return depth },
    set: function(value) {
      return depth = defaults.depth(value)
    }
  })

  var stencil = defaults.stencil(opts.stencil)
  Object.defineProperty(clear, 'stencil', {
    get: function() { return stencil },
    set: function(value) {
      return stencil = defaults.stencil(value)
    }
  })

  return clear

  function clear(gl) {
    var flags = 0

    if (color !== false) {
      gl.clearColor(color[0], color[1], color[2], color[3])
      flags |= gl.COLOR_BUFFER_BIT
    }
    if (depth !== false) {
      gl.clearDepth(depth)
      flags |= gl.DEPTH_BUFFER_BIT
    }
    if (stencil !== false) {
      gl.clearStencil(stencil)
      flags |= gl.STENCIL_BUFFER_BIT
    }

    gl.clear(flags)

    return gl
  }
}


/***/ }),
/* 110 */
/***/ (function(module, exports) {

module.exports = {
  0: 'NONE',
  1: 'ONE',
  2: 'LINE_LOOP',
  3: 'LINE_STRIP',
  4: 'TRIANGLES',
  5: 'TRIANGLE_STRIP',
  6: 'TRIANGLE_FAN',
  256: 'DEPTH_BUFFER_BIT',
  512: 'NEVER',
  513: 'LESS',
  514: 'EQUAL',
  515: 'LEQUAL',
  516: 'GREATER',
  517: 'NOTEQUAL',
  518: 'GEQUAL',
  519: 'ALWAYS',
  768: 'SRC_COLOR',
  769: 'ONE_MINUS_SRC_COLOR',
  770: 'SRC_ALPHA',
  771: 'ONE_MINUS_SRC_ALPHA',
  772: 'DST_ALPHA',
  773: 'ONE_MINUS_DST_ALPHA',
  774: 'DST_COLOR',
  775: 'ONE_MINUS_DST_COLOR',
  776: 'SRC_ALPHA_SATURATE',
  1024: 'STENCIL_BUFFER_BIT',
  1028: 'FRONT',
  1029: 'BACK',
  1032: 'FRONT_AND_BACK',
  1280: 'INVALID_ENUM',
  1281: 'INVALID_VALUE',
  1282: 'INVALID_OPERATION',
  1285: 'OUT_OF_MEMORY',
  1286: 'INVALID_FRAMEBUFFER_OPERATION',
  2304: 'CW',
  2305: 'CCW',
  2849: 'LINE_WIDTH',
  2884: 'CULL_FACE',
  2885: 'CULL_FACE_MODE',
  2886: 'FRONT_FACE',
  2928: 'DEPTH_RANGE',
  2929: 'DEPTH_TEST',
  2930: 'DEPTH_WRITEMASK',
  2931: 'DEPTH_CLEAR_VALUE',
  2932: 'DEPTH_FUNC',
  2960: 'STENCIL_TEST',
  2961: 'STENCIL_CLEAR_VALUE',
  2962: 'STENCIL_FUNC',
  2963: 'STENCIL_VALUE_MASK',
  2964: 'STENCIL_FAIL',
  2965: 'STENCIL_PASS_DEPTH_FAIL',
  2966: 'STENCIL_PASS_DEPTH_PASS',
  2967: 'STENCIL_REF',
  2968: 'STENCIL_WRITEMASK',
  2978: 'VIEWPORT',
  3024: 'DITHER',
  3042: 'BLEND',
  3088: 'SCISSOR_BOX',
  3089: 'SCISSOR_TEST',
  3106: 'COLOR_CLEAR_VALUE',
  3107: 'COLOR_WRITEMASK',
  3317: 'UNPACK_ALIGNMENT',
  3333: 'PACK_ALIGNMENT',
  3379: 'MAX_TEXTURE_SIZE',
  3386: 'MAX_VIEWPORT_DIMS',
  3408: 'SUBPIXEL_BITS',
  3410: 'RED_BITS',
  3411: 'GREEN_BITS',
  3412: 'BLUE_BITS',
  3413: 'ALPHA_BITS',
  3414: 'DEPTH_BITS',
  3415: 'STENCIL_BITS',
  3553: 'TEXTURE_2D',
  4352: 'DONT_CARE',
  4353: 'FASTEST',
  4354: 'NICEST',
  5120: 'BYTE',
  5121: 'UNSIGNED_BYTE',
  5122: 'SHORT',
  5123: 'UNSIGNED_SHORT',
  5124: 'INT',
  5125: 'UNSIGNED_INT',
  5126: 'FLOAT',
  5386: 'INVERT',
  5890: 'TEXTURE',
  6401: 'STENCIL_INDEX',
  6402: 'DEPTH_COMPONENT',
  6406: 'ALPHA',
  6407: 'RGB',
  6408: 'RGBA',
  6409: 'LUMINANCE',
  6410: 'LUMINANCE_ALPHA',
  7680: 'KEEP',
  7681: 'REPLACE',
  7682: 'INCR',
  7683: 'DECR',
  7936: 'VENDOR',
  7937: 'RENDERER',
  7938: 'VERSION',
  9728: 'NEAREST',
  9729: 'LINEAR',
  9984: 'NEAREST_MIPMAP_NEAREST',
  9985: 'LINEAR_MIPMAP_NEAREST',
  9986: 'NEAREST_MIPMAP_LINEAR',
  9987: 'LINEAR_MIPMAP_LINEAR',
  10240: 'TEXTURE_MAG_FILTER',
  10241: 'TEXTURE_MIN_FILTER',
  10242: 'TEXTURE_WRAP_S',
  10243: 'TEXTURE_WRAP_T',
  10497: 'REPEAT',
  10752: 'POLYGON_OFFSET_UNITS',
  16384: 'COLOR_BUFFER_BIT',
  32769: 'CONSTANT_COLOR',
  32770: 'ONE_MINUS_CONSTANT_COLOR',
  32771: 'CONSTANT_ALPHA',
  32772: 'ONE_MINUS_CONSTANT_ALPHA',
  32773: 'BLEND_COLOR',
  32774: 'FUNC_ADD',
  32777: 'BLEND_EQUATION_RGB',
  32778: 'FUNC_SUBTRACT',
  32779: 'FUNC_REVERSE_SUBTRACT',
  32819: 'UNSIGNED_SHORT_4_4_4_4',
  32820: 'UNSIGNED_SHORT_5_5_5_1',
  32823: 'POLYGON_OFFSET_FILL',
  32824: 'POLYGON_OFFSET_FACTOR',
  32854: 'RGBA4',
  32855: 'RGB5_A1',
  32873: 'TEXTURE_BINDING_2D',
  32926: 'SAMPLE_ALPHA_TO_COVERAGE',
  32928: 'SAMPLE_COVERAGE',
  32936: 'SAMPLE_BUFFERS',
  32937: 'SAMPLES',
  32938: 'SAMPLE_COVERAGE_VALUE',
  32939: 'SAMPLE_COVERAGE_INVERT',
  32968: 'BLEND_DST_RGB',
  32969: 'BLEND_SRC_RGB',
  32970: 'BLEND_DST_ALPHA',
  32971: 'BLEND_SRC_ALPHA',
  33071: 'CLAMP_TO_EDGE',
  33170: 'GENERATE_MIPMAP_HINT',
  33189: 'DEPTH_COMPONENT16',
  33306: 'DEPTH_STENCIL_ATTACHMENT',
  33635: 'UNSIGNED_SHORT_5_6_5',
  33648: 'MIRRORED_REPEAT',
  33901: 'ALIASED_POINT_SIZE_RANGE',
  33902: 'ALIASED_LINE_WIDTH_RANGE',
  33984: 'TEXTURE0',
  33985: 'TEXTURE1',
  33986: 'TEXTURE2',
  33987: 'TEXTURE3',
  33988: 'TEXTURE4',
  33989: 'TEXTURE5',
  33990: 'TEXTURE6',
  33991: 'TEXTURE7',
  33992: 'TEXTURE8',
  33993: 'TEXTURE9',
  33994: 'TEXTURE10',
  33995: 'TEXTURE11',
  33996: 'TEXTURE12',
  33997: 'TEXTURE13',
  33998: 'TEXTURE14',
  33999: 'TEXTURE15',
  34000: 'TEXTURE16',
  34001: 'TEXTURE17',
  34002: 'TEXTURE18',
  34003: 'TEXTURE19',
  34004: 'TEXTURE20',
  34005: 'TEXTURE21',
  34006: 'TEXTURE22',
  34007: 'TEXTURE23',
  34008: 'TEXTURE24',
  34009: 'TEXTURE25',
  34010: 'TEXTURE26',
  34011: 'TEXTURE27',
  34012: 'TEXTURE28',
  34013: 'TEXTURE29',
  34014: 'TEXTURE30',
  34015: 'TEXTURE31',
  34016: 'ACTIVE_TEXTURE',
  34024: 'MAX_RENDERBUFFER_SIZE',
  34041: 'DEPTH_STENCIL',
  34055: 'INCR_WRAP',
  34056: 'DECR_WRAP',
  34067: 'TEXTURE_CUBE_MAP',
  34068: 'TEXTURE_BINDING_CUBE_MAP',
  34069: 'TEXTURE_CUBE_MAP_POSITIVE_X',
  34070: 'TEXTURE_CUBE_MAP_NEGATIVE_X',
  34071: 'TEXTURE_CUBE_MAP_POSITIVE_Y',
  34072: 'TEXTURE_CUBE_MAP_NEGATIVE_Y',
  34073: 'TEXTURE_CUBE_MAP_POSITIVE_Z',
  34074: 'TEXTURE_CUBE_MAP_NEGATIVE_Z',
  34076: 'MAX_CUBE_MAP_TEXTURE_SIZE',
  34338: 'VERTEX_ATTRIB_ARRAY_ENABLED',
  34339: 'VERTEX_ATTRIB_ARRAY_SIZE',
  34340: 'VERTEX_ATTRIB_ARRAY_STRIDE',
  34341: 'VERTEX_ATTRIB_ARRAY_TYPE',
  34342: 'CURRENT_VERTEX_ATTRIB',
  34373: 'VERTEX_ATTRIB_ARRAY_POINTER',
  34466: 'NUM_COMPRESSED_TEXTURE_FORMATS',
  34467: 'COMPRESSED_TEXTURE_FORMATS',
  34660: 'BUFFER_SIZE',
  34661: 'BUFFER_USAGE',
  34816: 'STENCIL_BACK_FUNC',
  34817: 'STENCIL_BACK_FAIL',
  34818: 'STENCIL_BACK_PASS_DEPTH_FAIL',
  34819: 'STENCIL_BACK_PASS_DEPTH_PASS',
  34877: 'BLEND_EQUATION_ALPHA',
  34921: 'MAX_VERTEX_ATTRIBS',
  34922: 'VERTEX_ATTRIB_ARRAY_NORMALIZED',
  34930: 'MAX_TEXTURE_IMAGE_UNITS',
  34962: 'ARRAY_BUFFER',
  34963: 'ELEMENT_ARRAY_BUFFER',
  34964: 'ARRAY_BUFFER_BINDING',
  34965: 'ELEMENT_ARRAY_BUFFER_BINDING',
  34975: 'VERTEX_ATTRIB_ARRAY_BUFFER_BINDING',
  35040: 'STREAM_DRAW',
  35044: 'STATIC_DRAW',
  35048: 'DYNAMIC_DRAW',
  35632: 'FRAGMENT_SHADER',
  35633: 'VERTEX_SHADER',
  35660: 'MAX_VERTEX_TEXTURE_IMAGE_UNITS',
  35661: 'MAX_COMBINED_TEXTURE_IMAGE_UNITS',
  35663: 'SHADER_TYPE',
  35664: 'FLOAT_VEC2',
  35665: 'FLOAT_VEC3',
  35666: 'FLOAT_VEC4',
  35667: 'INT_VEC2',
  35668: 'INT_VEC3',
  35669: 'INT_VEC4',
  35670: 'BOOL',
  35671: 'BOOL_VEC2',
  35672: 'BOOL_VEC3',
  35673: 'BOOL_VEC4',
  35674: 'FLOAT_MAT2',
  35675: 'FLOAT_MAT3',
  35676: 'FLOAT_MAT4',
  35678: 'SAMPLER_2D',
  35680: 'SAMPLER_CUBE',
  35712: 'DELETE_STATUS',
  35713: 'COMPILE_STATUS',
  35714: 'LINK_STATUS',
  35715: 'VALIDATE_STATUS',
  35716: 'INFO_LOG_LENGTH',
  35717: 'ATTACHED_SHADERS',
  35718: 'ACTIVE_UNIFORMS',
  35719: 'ACTIVE_UNIFORM_MAX_LENGTH',
  35720: 'SHADER_SOURCE_LENGTH',
  35721: 'ACTIVE_ATTRIBUTES',
  35722: 'ACTIVE_ATTRIBUTE_MAX_LENGTH',
  35724: 'SHADING_LANGUAGE_VERSION',
  35725: 'CURRENT_PROGRAM',
  36003: 'STENCIL_BACK_REF',
  36004: 'STENCIL_BACK_VALUE_MASK',
  36005: 'STENCIL_BACK_WRITEMASK',
  36006: 'FRAMEBUFFER_BINDING',
  36007: 'RENDERBUFFER_BINDING',
  36048: 'FRAMEBUFFER_ATTACHMENT_OBJECT_TYPE',
  36049: 'FRAMEBUFFER_ATTACHMENT_OBJECT_NAME',
  36050: 'FRAMEBUFFER_ATTACHMENT_TEXTURE_LEVEL',
  36051: 'FRAMEBUFFER_ATTACHMENT_TEXTURE_CUBE_MAP_FACE',
  36053: 'FRAMEBUFFER_COMPLETE',
  36054: 'FRAMEBUFFER_INCOMPLETE_ATTACHMENT',
  36055: 'FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT',
  36057: 'FRAMEBUFFER_INCOMPLETE_DIMENSIONS',
  36061: 'FRAMEBUFFER_UNSUPPORTED',
  36064: 'COLOR_ATTACHMENT0',
  36096: 'DEPTH_ATTACHMENT',
  36128: 'STENCIL_ATTACHMENT',
  36160: 'FRAMEBUFFER',
  36161: 'RENDERBUFFER',
  36162: 'RENDERBUFFER_WIDTH',
  36163: 'RENDERBUFFER_HEIGHT',
  36164: 'RENDERBUFFER_INTERNAL_FORMAT',
  36168: 'STENCIL_INDEX8',
  36176: 'RENDERBUFFER_RED_SIZE',
  36177: 'RENDERBUFFER_GREEN_SIZE',
  36178: 'RENDERBUFFER_BLUE_SIZE',
  36179: 'RENDERBUFFER_ALPHA_SIZE',
  36180: 'RENDERBUFFER_DEPTH_SIZE',
  36181: 'RENDERBUFFER_STENCIL_SIZE',
  36194: 'RGB565',
  36336: 'LOW_FLOAT',
  36337: 'MEDIUM_FLOAT',
  36338: 'HIGH_FLOAT',
  36339: 'LOW_INT',
  36340: 'MEDIUM_INT',
  36341: 'HIGH_INT',
  36346: 'SHADER_COMPILER',
  36347: 'MAX_VERTEX_UNIFORM_VECTORS',
  36348: 'MAX_VARYING_VECTORS',
  36349: 'MAX_FRAGMENT_UNIFORM_VECTORS',
  37440: 'UNPACK_FLIP_Y_WEBGL',
  37441: 'UNPACK_PREMULTIPLY_ALPHA_WEBGL',
  37442: 'CONTEXT_LOST_WEBGL',
  37443: 'UNPACK_COLORSPACE_CONVERSION_WEBGL',
  37444: 'BROWSER_DEFAULT_WEBGL'
}


/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

var gl10 = __webpack_require__(110)

module.exports = function lookupConstant (number) {
  return gl10[number]
}


/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {


var sprintf = __webpack_require__(186).sprintf;
var glConstants = __webpack_require__(111);
var shaderName = __webpack_require__(129);
var addLineNumbers = __webpack_require__(91);

module.exports = formatCompilerError;

function formatCompilerError(errLog, src, type) {
    "use strict";

    var name = shaderName(src) || 'of unknown name (see npm glsl-shader-name)';

    var typeName = 'unknown type';
    if (type !== undefined) {
        typeName = type === glConstants.FRAGMENT_SHADER ? 'fragment' : 'vertex'
    }

    var longForm = sprintf('Error compiling %s shader %s:\n', typeName, name);
    var shortForm = sprintf("%s%s", longForm, errLog);

    var errorStrings = errLog.split('\n');
    var errors = {};

    for (var i = 0; i < errorStrings.length; i++) {
        var errorString = errorStrings[i];
        if (errorString === '' || errorString === "\0") continue;
        var lineNo = parseInt(errorString.split(':')[2]);
        if (isNaN(lineNo)) {
            throw new Error(sprintf('Could not parse error: %s', errorString));
        }
        errors[lineNo] = errorString;
    }

    var lines = addLineNumbers(src).split('\n');

    for (var i = 0; i < lines.length; i++) {
        if (!errors[i+3] && !errors[i+2] && !errors[i+1]) continue;
        var line = lines[i];
        longForm += line + '\n';
        if (errors[i+1]) {
            var e = errors[i+1];
            e = e.substr(e.split(':', 3).join(':').length + 1).trim();
            longForm += sprintf('^^^ %s\n\n', e);
        }
    }

    return {
        long: longForm.trim(),
        short: shortForm.trim()
    };
}



/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

var normalize = __webpack_require__(114)
var glType = __webpack_require__(125)
var createVAO = __webpack_require__(128)
var dtype = __webpack_require__(45)

module.exports = GLGeometry

function GLGeometry (gl) {
  if (!(this instanceof GLGeometry)) {
    return new GLGeometry(gl)
  }

  this._elementsType = 5123
  this._elementsBytes = 2
  this._attributes = []
  this._dirty = true
  this._attrLength = 0
  this._facesLength = 0
  this._index = null
  this._vao = null
  this._keys = []
  this.gl = gl
}

GLGeometry.prototype.dispose = function () {
  for (var i = 0; i < this._attributes.length; i++) {
    this._attributes[i].buffer.dispose()
  }

  this._attributes = []
  this._keys = []
  this._attrLength = 0 // Length of this attribute (the number of vertices it feeds)
  this._facesLength = 0 // Number of vertices needed to draw all faces
  this._dirty = true

  if (this._index) {
    this._index.dispose()
    this._index = null
  }

  if (this._vao) {
    this._vao.dispose()
    this._vao = null
  }
}

GLGeometry.prototype.faces = function faces (attr, opts) {
  var size = opts && opts.size || 3
  attr = attr.cells ? attr.cells : attr

  this._dirty = true

  if (this._index) {
    this._index.dispose()
  }

  this._index = normalize.create(this.gl
    , attr
    , size
    , this.gl.ELEMENT_ARRAY_BUFFER
    , 'uint16'
  )

  this._facesLength = this._index.length * size
  this._index = this._index.buffer

  return this
}

GLGeometry.prototype.attr = function attr (name, attr, opts) {
  // If we get a simplicial complex
  if (attr.cells && attr.positions) {
    return this.attr(name, attr.positions).faces(attr.cells, opts)
  }

  opts = opts || {}
  var size = opts.size || 3

  // Is this a known attribute (ie, an update)?
  var keyIndex = this._keys.indexOf(name)
  if (keyIndex > -1) {
    var toUpdate = this._attributes[keyIndex].buffer
    var offset = opts.offset || undefined
    normalize.update(toUpdate, attr, size, 'float32', offset)
    this._attrLength = toUpdate.length / size / 4
    return this
  }

  this._dirty = true

  var gl = this.gl
  var first = !this._attributes.length

  var attribute = normalize.create(gl, attr, size, gl.ARRAY_BUFFER, 'float32')
  if (!attribute) {
    throw new Error(
      'Unexpected attribute format: needs an ndarray, array, typed array, ' +
      'gl-buffer or simplicial complex'
    )
  }

  var buffer = attribute.buffer
  var length = attribute.length

  this._keys.push(name)
  this._attributes.push({
    size: size,
    buffer: buffer
  })

  if (first) {
    this._attrLength = length
  }

  return this
}

GLGeometry.prototype.bind = function bind (shader) {
  this.update()
  this._vao.bind()

  if (!this._keys) return
  if (!shader) return

  for (var i = 0; i < this._keys.length; i++) {
    var attr = shader.attributes[this._keys[i]]
    if (attr) attr.location = i
  }

  shader.bind()
}

GLGeometry.prototype.draw = function draw (mode, start, stop) {
  start = typeof start === 'undefined' ? 0 : start
  mode = typeof mode === 'undefined' ? this.gl.TRIANGLES : mode

  this.update()

  if (this._vao._useElements) {
    stop = typeof stop === 'undefined' ? this._facesLength : stop
    this.gl.drawElements(mode, stop - start, this._elementsType, start * this._elementsBytes)
  } else {
    stop = typeof stop === 'undefined' ? this._attrLength : stop
    this.gl.drawArrays(mode, start, stop - start)
  }
}

GLGeometry.prototype.unbind = function unbind () {
  this.update()
  this._vao.unbind()
}

GLGeometry.prototype.update = function update () {
  if (!this._dirty) return
  this._dirty = false
  if (this._vao) this._vao.dispose()

  this._vao = createVAO(this.gl, this._attributes, this._index)
  this._elementsType = this._vao._elementsType
  this._elementsBytes = dtype(
    glType(this._elementsType) || 'array'
  ).BYTES_PER_ELEMENT || 2
}


/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

var pack = __webpack_require__(92)
var ista = __webpack_require__(141)
var createBuffer = __webpack_require__(107)
var isnd = __webpack_require__(143)
var dtype = __webpack_require__(45)

module.exports.create = create
module.exports.update = update

function create (gl, attr, size, mode, type) {
  // if we get a gl-buffer
  if (attr.handle instanceof WebGLBuffer) {
    return {
      buffer: attr,
      length: attr.length / size / 4
    }
  }

  var arr = normalize(attr, size, type)
  return {
    buffer: createBuffer(gl, arr.data, mode),
    length: arr.length
  }
}

function update (buffer, attr, size, type, offset) {
  // if we get a gl-buffer
  if (attr.handle instanceof WebGLBuffer) {
    throw new Error('Unhandled update case: WebGLBuffer')
  }

  var arr = normalize(attr, size, type)
  buffer.update(arr.data, offset)
}

function normalize (attr, size, type) {
  // if we get a nested 2D array
  if (Array.isArray(attr) && Array.isArray(attr[0])) {
    return {
      data: pack(attr, type),
      length: attr.length
    }
  }

  // if we get a nested 2D array (with the second array being typed)
  if (Array.isArray(attr) && ista(attr[0])) {
    return {
      data: pack(attr, type),
      length: (attr.length * attr[0].length) / size
    }
  }

  // if we get a 1D array
  if (Array.isArray(attr)) {
    return {
      data: new (dtype(type))(attr),
      length: attr.length / size
    }
  }

  // if we get an ndarray
  if (isnd(attr)) {
    return {
      data: attr,
      length: ndlength(attr.shape) / size
    }
  }

  // if we get a typed array
  if (ista(attr)) {
    if (type && !(attr instanceof dtype(type))) {
      attr = convert(attr, dtype(type))
    }

    return {
      data: attr,
      length: attr.length / size
    }
  }
}

function ndlength (shape) {
  var length = 1
  for (var i = 0; i < shape.length; i++) length *= shape[i]
  return length
}

function convert (a, B) {
  var b = new B(a.length)
  for (var i = 0; i < a.length; i++) b[i] = a[i]
  return b
}


/***/ }),
/* 115 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["create"] = create;
/* harmony export (immutable) */ __webpack_exports__["clone"] = clone;
/* harmony export (immutable) */ __webpack_exports__["copy"] = copy;
/* harmony export (immutable) */ __webpack_exports__["identity"] = identity;
/* harmony export (immutable) */ __webpack_exports__["fromValues"] = fromValues;
/* harmony export (immutable) */ __webpack_exports__["set"] = set;
/* harmony export (immutable) */ __webpack_exports__["transpose"] = transpose;
/* harmony export (immutable) */ __webpack_exports__["invert"] = invert;
/* harmony export (immutable) */ __webpack_exports__["adjoint"] = adjoint;
/* harmony export (immutable) */ __webpack_exports__["determinant"] = determinant;
/* harmony export (immutable) */ __webpack_exports__["multiply"] = multiply;
/* harmony export (immutable) */ __webpack_exports__["rotate"] = rotate;
/* harmony export (immutable) */ __webpack_exports__["scale"] = scale;
/* harmony export (immutable) */ __webpack_exports__["fromRotation"] = fromRotation;
/* harmony export (immutable) */ __webpack_exports__["fromScaling"] = fromScaling;
/* harmony export (immutable) */ __webpack_exports__["str"] = str;
/* harmony export (immutable) */ __webpack_exports__["frob"] = frob;
/* harmony export (immutable) */ __webpack_exports__["LDU"] = LDU;
/* harmony export (immutable) */ __webpack_exports__["add"] = add;
/* harmony export (immutable) */ __webpack_exports__["subtract"] = subtract;
/* harmony export (immutable) */ __webpack_exports__["exactEquals"] = exactEquals;
/* harmony export (immutable) */ __webpack_exports__["equals"] = equals;
/* harmony export (immutable) */ __webpack_exports__["multiplyScalar"] = multiplyScalar;
/* harmony export (immutable) */ __webpack_exports__["multiplyScalarAndAdd"] = multiplyScalarAndAdd;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common__ = __webpack_require__(3);
/* Copyright (c) 2015, Brandon Jones, Colin MacKenzie IV.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE. */



/**
 * 2x2 Matrix
 * @module mat2
 */

/**
 * Creates a new identity mat2
 *
 * @returns {mat2} a new 2x2 matrix
 */
function create() {
  let out = new __WEBPACK_IMPORTED_MODULE_0__common__["ARRAY_TYPE"](4);
  out[0] = 1;
  out[1] = 0;
  out[2] = 0;
  out[3] = 1;
  return out;
}

/**
 * Creates a new mat2 initialized with values from an existing matrix
 *
 * @param {mat2} a matrix to clone
 * @returns {mat2} a new 2x2 matrix
 */
function clone(a) {
  let out = new __WEBPACK_IMPORTED_MODULE_0__common__["ARRAY_TYPE"](4);
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  out[3] = a[3];
  return out;
}

/**
 * Copy the values from one mat2 to another
 *
 * @param {mat2} out the receiving matrix
 * @param {mat2} a the source matrix
 * @returns {mat2} out
 */
function copy(out, a) {
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  out[3] = a[3];
  return out;
}

/**
 * Set a mat2 to the identity matrix
 *
 * @param {mat2} out the receiving matrix
 * @returns {mat2} out
 */
function identity(out) {
  out[0] = 1;
  out[1] = 0;
  out[2] = 0;
  out[3] = 1;
  return out;
}

/**
 * Create a new mat2 with the given values
 *
 * @param {Number} m00 Component in column 0, row 0 position (index 0)
 * @param {Number} m01 Component in column 0, row 1 position (index 1)
 * @param {Number} m10 Component in column 1, row 0 position (index 2)
 * @param {Number} m11 Component in column 1, row 1 position (index 3)
 * @returns {mat2} out A new 2x2 matrix
 */
function fromValues(m00, m01, m10, m11) {
  let out = new __WEBPACK_IMPORTED_MODULE_0__common__["ARRAY_TYPE"](4);
  out[0] = m00;
  out[1] = m01;
  out[2] = m10;
  out[3] = m11;
  return out;
}

/**
 * Set the components of a mat2 to the given values
 *
 * @param {mat2} out the receiving matrix
 * @param {Number} m00 Component in column 0, row 0 position (index 0)
 * @param {Number} m01 Component in column 0, row 1 position (index 1)
 * @param {Number} m10 Component in column 1, row 0 position (index 2)
 * @param {Number} m11 Component in column 1, row 1 position (index 3)
 * @returns {mat2} out
 */
function set(out, m00, m01, m10, m11) {
  out[0] = m00;
  out[1] = m01;
  out[2] = m10;
  out[3] = m11;
  return out;
}

/**
 * Transpose the values of a mat2
 *
 * @param {mat2} out the receiving matrix
 * @param {mat2} a the source matrix
 * @returns {mat2} out
 */
function transpose(out, a) {
  // If we are transposing ourselves we can skip a few steps but have to cache
  // some values
  if (out === a) {
    let a1 = a[1];
    out[1] = a[2];
    out[2] = a1;
  } else {
    out[0] = a[0];
    out[1] = a[2];
    out[2] = a[1];
    out[3] = a[3];
  }

  return out;
}

/**
 * Inverts a mat2
 *
 * @param {mat2} out the receiving matrix
 * @param {mat2} a the source matrix
 * @returns {mat2} out
 */
function invert(out, a) {
  let a0 = a[0], a1 = a[1], a2 = a[2], a3 = a[3];

  // Calculate the determinant
  let det = a0 * a3 - a2 * a1;

  if (!det) {
    return null;
  }
  det = 1.0 / det;

  out[0] =  a3 * det;
  out[1] = -a1 * det;
  out[2] = -a2 * det;
  out[3] =  a0 * det;

  return out;
}

/**
 * Calculates the adjugate of a mat2
 *
 * @param {mat2} out the receiving matrix
 * @param {mat2} a the source matrix
 * @returns {mat2} out
 */
function adjoint(out, a) {
  // Caching this value is nessecary if out == a
  let a0 = a[0];
  out[0] =  a[3];
  out[1] = -a[1];
  out[2] = -a[2];
  out[3] =  a0;

  return out;
}

/**
 * Calculates the determinant of a mat2
 *
 * @param {mat2} a the source matrix
 * @returns {Number} determinant of a
 */
function determinant(a) {
  return a[0] * a[3] - a[2] * a[1];
}

/**
 * Multiplies two mat2's
 *
 * @param {mat2} out the receiving matrix
 * @param {mat2} a the first operand
 * @param {mat2} b the second operand
 * @returns {mat2} out
 */
function multiply(out, a, b) {
  let a0 = a[0], a1 = a[1], a2 = a[2], a3 = a[3];
  let b0 = b[0], b1 = b[1], b2 = b[2], b3 = b[3];
  out[0] = a0 * b0 + a2 * b1;
  out[1] = a1 * b0 + a3 * b1;
  out[2] = a0 * b2 + a2 * b3;
  out[3] = a1 * b2 + a3 * b3;
  return out;
}

/**
 * Rotates a mat2 by the given angle
 *
 * @param {mat2} out the receiving matrix
 * @param {mat2} a the matrix to rotate
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat2} out
 */
function rotate(out, a, rad) {
  let a0 = a[0], a1 = a[1], a2 = a[2], a3 = a[3];
  let s = Math.sin(rad);
  let c = Math.cos(rad);
  out[0] = a0 *  c + a2 * s;
  out[1] = a1 *  c + a3 * s;
  out[2] = a0 * -s + a2 * c;
  out[3] = a1 * -s + a3 * c;
  return out;
}

/**
 * Scales the mat2 by the dimensions in the given vec2
 *
 * @param {mat2} out the receiving matrix
 * @param {mat2} a the matrix to rotate
 * @param {vec2} v the vec2 to scale the matrix by
 * @returns {mat2} out
 **/
function scale(out, a, v) {
  let a0 = a[0], a1 = a[1], a2 = a[2], a3 = a[3];
  let v0 = v[0], v1 = v[1];
  out[0] = a0 * v0;
  out[1] = a1 * v0;
  out[2] = a2 * v1;
  out[3] = a3 * v1;
  return out;
}

/**
 * Creates a matrix from a given angle
 * This is equivalent to (but much faster than):
 *
 *     mat2.identity(dest);
 *     mat2.rotate(dest, dest, rad);
 *
 * @param {mat2} out mat2 receiving operation result
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat2} out
 */
function fromRotation(out, rad) {
  let s = Math.sin(rad);
  let c = Math.cos(rad);
  out[0] = c;
  out[1] = s;
  out[2] = -s;
  out[3] = c;
  return out;
}

/**
 * Creates a matrix from a vector scaling
 * This is equivalent to (but much faster than):
 *
 *     mat2.identity(dest);
 *     mat2.scale(dest, dest, vec);
 *
 * @param {mat2} out mat2 receiving operation result
 * @param {vec2} v Scaling vector
 * @returns {mat2} out
 */
function fromScaling(out, v) {
  out[0] = v[0];
  out[1] = 0;
  out[2] = 0;
  out[3] = v[1];
  return out;
}

/**
 * Returns a string representation of a mat2
 *
 * @param {mat2} a matrix to represent as a string
 * @returns {String} string representation of the matrix
 */
function str(a) {
  return 'mat2(' + a[0] + ', ' + a[1] + ', ' + a[2] + ', ' + a[3] + ')';
}

/**
 * Returns Frobenius norm of a mat2
 *
 * @param {mat2} a the matrix to calculate Frobenius norm of
 * @returns {Number} Frobenius norm
 */
function frob(a) {
  return(Math.sqrt(Math.pow(a[0], 2) + Math.pow(a[1], 2) + Math.pow(a[2], 2) + Math.pow(a[3], 2)))
}

/**
 * Returns L, D and U matrices (Lower triangular, Diagonal and Upper triangular) by factorizing the input matrix
 * @param {mat2} L the lower triangular matrix
 * @param {mat2} D the diagonal matrix
 * @param {mat2} U the upper triangular matrix
 * @param {mat2} a the input matrix to factorize
 */

function LDU(L, D, U, a) {
  L[2] = a[2]/a[0];
  U[0] = a[0];
  U[1] = a[1];
  U[3] = a[3] - L[2] * U[1];
  return [L, D, U];
}

/**
 * Adds two mat2's
 *
 * @param {mat2} out the receiving matrix
 * @param {mat2} a the first operand
 * @param {mat2} b the second operand
 * @returns {mat2} out
 */
function add(out, a, b) {
  out[0] = a[0] + b[0];
  out[1] = a[1] + b[1];
  out[2] = a[2] + b[2];
  out[3] = a[3] + b[3];
  return out;
}

/**
 * Subtracts matrix b from matrix a
 *
 * @param {mat2} out the receiving matrix
 * @param {mat2} a the first operand
 * @param {mat2} b the second operand
 * @returns {mat2} out
 */
function subtract(out, a, b) {
  out[0] = a[0] - b[0];
  out[1] = a[1] - b[1];
  out[2] = a[2] - b[2];
  out[3] = a[3] - b[3];
  return out;
}

/**
 * Returns whether or not the matrices have exactly the same elements in the same position (when compared with ===)
 *
 * @param {mat2} a The first matrix.
 * @param {mat2} b The second matrix.
 * @returns {Boolean} True if the matrices are equal, false otherwise.
 */
function exactEquals(a, b) {
  return a[0] === b[0] && a[1] === b[1] && a[2] === b[2] && a[3] === b[3];
}

/**
 * Returns whether or not the matrices have approximately the same elements in the same position.
 *
 * @param {mat2} a The first matrix.
 * @param {mat2} b The second matrix.
 * @returns {Boolean} True if the matrices are equal, false otherwise.
 */
function equals(a, b) {
  let a0 = a[0], a1 = a[1], a2 = a[2], a3 = a[3];
  let b0 = b[0], b1 = b[1], b2 = b[2], b3 = b[3];
  return (Math.abs(a0 - b0) <= __WEBPACK_IMPORTED_MODULE_0__common__["EPSILON"]*Math.max(1.0, Math.abs(a0), Math.abs(b0)) &&
          Math.abs(a1 - b1) <= __WEBPACK_IMPORTED_MODULE_0__common__["EPSILON"]*Math.max(1.0, Math.abs(a1), Math.abs(b1)) &&
          Math.abs(a2 - b2) <= __WEBPACK_IMPORTED_MODULE_0__common__["EPSILON"]*Math.max(1.0, Math.abs(a2), Math.abs(b2)) &&
          Math.abs(a3 - b3) <= __WEBPACK_IMPORTED_MODULE_0__common__["EPSILON"]*Math.max(1.0, Math.abs(a3), Math.abs(b3)));
}

/**
 * Multiply each element of the matrix by a scalar.
 *
 * @param {mat2} out the receiving matrix
 * @param {mat2} a the matrix to scale
 * @param {Number} b amount to scale the matrix's elements by
 * @returns {mat2} out
 */
function multiplyScalar(out, a, b) {
  out[0] = a[0] * b;
  out[1] = a[1] * b;
  out[2] = a[2] * b;
  out[3] = a[3] * b;
  return out;
}

/**
 * Adds two mat2's after multiplying each element of the second operand by a scalar value.
 *
 * @param {mat2} out the receiving vector
 * @param {mat2} a the first operand
 * @param {mat2} b the second operand
 * @param {Number} scale the amount to scale b's elements by before adding
 * @returns {mat2} out
 */
function multiplyScalarAndAdd(out, a, b, scale) {
  out[0] = a[0] + (b[0] * scale);
  out[1] = a[1] + (b[1] * scale);
  out[2] = a[2] + (b[2] * scale);
  out[3] = a[3] + (b[3] * scale);
  return out;
}

/**
 * Alias for {@link mat2.multiply}
 * @function
 */
const mul = multiply;
/* harmony export (immutable) */ __webpack_exports__["mul"] = mul;


/**
 * Alias for {@link mat2.subtract}
 * @function
 */
const sub = subtract;
/* harmony export (immutable) */ __webpack_exports__["sub"] = sub;



/***/ }),
/* 116 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["create"] = create;
/* harmony export (immutable) */ __webpack_exports__["clone"] = clone;
/* harmony export (immutable) */ __webpack_exports__["copy"] = copy;
/* harmony export (immutable) */ __webpack_exports__["identity"] = identity;
/* harmony export (immutable) */ __webpack_exports__["fromValues"] = fromValues;
/* harmony export (immutable) */ __webpack_exports__["set"] = set;
/* harmony export (immutable) */ __webpack_exports__["invert"] = invert;
/* harmony export (immutable) */ __webpack_exports__["determinant"] = determinant;
/* harmony export (immutable) */ __webpack_exports__["multiply"] = multiply;
/* harmony export (immutable) */ __webpack_exports__["rotate"] = rotate;
/* harmony export (immutable) */ __webpack_exports__["scale"] = scale;
/* harmony export (immutable) */ __webpack_exports__["translate"] = translate;
/* harmony export (immutable) */ __webpack_exports__["fromRotation"] = fromRotation;
/* harmony export (immutable) */ __webpack_exports__["fromScaling"] = fromScaling;
/* harmony export (immutable) */ __webpack_exports__["fromTranslation"] = fromTranslation;
/* harmony export (immutable) */ __webpack_exports__["str"] = str;
/* harmony export (immutable) */ __webpack_exports__["frob"] = frob;
/* harmony export (immutable) */ __webpack_exports__["add"] = add;
/* harmony export (immutable) */ __webpack_exports__["subtract"] = subtract;
/* harmony export (immutable) */ __webpack_exports__["multiplyScalar"] = multiplyScalar;
/* harmony export (immutable) */ __webpack_exports__["multiplyScalarAndAdd"] = multiplyScalarAndAdd;
/* harmony export (immutable) */ __webpack_exports__["exactEquals"] = exactEquals;
/* harmony export (immutable) */ __webpack_exports__["equals"] = equals;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common__ = __webpack_require__(3);
/* Copyright (c) 2015, Brandon Jones, Colin MacKenzie IV.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE. */



/**
 * 2x3 Matrix
 * @module mat2d
 *
 * @description
 * A mat2d contains six elements defined as:
 * <pre>
 * [a, c, tx,
 *  b, d, ty]
 * </pre>
 * This is a short form for the 3x3 matrix:
 * <pre>
 * [a, c, tx,
 *  b, d, ty,
 *  0, 0, 1]
 * </pre>
 * The last row is ignored so the array is shorter and operations are faster.
 */

/**
 * Creates a new identity mat2d
 *
 * @returns {mat2d} a new 2x3 matrix
 */
function create() {
  let out = new __WEBPACK_IMPORTED_MODULE_0__common__["ARRAY_TYPE"](6);
  out[0] = 1;
  out[1] = 0;
  out[2] = 0;
  out[3] = 1;
  out[4] = 0;
  out[5] = 0;
  return out;
}

/**
 * Creates a new mat2d initialized with values from an existing matrix
 *
 * @param {mat2d} a matrix to clone
 * @returns {mat2d} a new 2x3 matrix
 */
function clone(a) {
  let out = new __WEBPACK_IMPORTED_MODULE_0__common__["ARRAY_TYPE"](6);
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  out[3] = a[3];
  out[4] = a[4];
  out[5] = a[5];
  return out;
}

/**
 * Copy the values from one mat2d to another
 *
 * @param {mat2d} out the receiving matrix
 * @param {mat2d} a the source matrix
 * @returns {mat2d} out
 */
function copy(out, a) {
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  out[3] = a[3];
  out[4] = a[4];
  out[5] = a[5];
  return out;
}

/**
 * Set a mat2d to the identity matrix
 *
 * @param {mat2d} out the receiving matrix
 * @returns {mat2d} out
 */
function identity(out) {
  out[0] = 1;
  out[1] = 0;
  out[2] = 0;
  out[3] = 1;
  out[4] = 0;
  out[5] = 0;
  return out;
}

/**
 * Create a new mat2d with the given values
 *
 * @param {Number} a Component A (index 0)
 * @param {Number} b Component B (index 1)
 * @param {Number} c Component C (index 2)
 * @param {Number} d Component D (index 3)
 * @param {Number} tx Component TX (index 4)
 * @param {Number} ty Component TY (index 5)
 * @returns {mat2d} A new mat2d
 */
function fromValues(a, b, c, d, tx, ty) {
  let out = new __WEBPACK_IMPORTED_MODULE_0__common__["ARRAY_TYPE"](6);
  out[0] = a;
  out[1] = b;
  out[2] = c;
  out[3] = d;
  out[4] = tx;
  out[5] = ty;
  return out;
}

/**
 * Set the components of a mat2d to the given values
 *
 * @param {mat2d} out the receiving matrix
 * @param {Number} a Component A (index 0)
 * @param {Number} b Component B (index 1)
 * @param {Number} c Component C (index 2)
 * @param {Number} d Component D (index 3)
 * @param {Number} tx Component TX (index 4)
 * @param {Number} ty Component TY (index 5)
 * @returns {mat2d} out
 */
function set(out, a, b, c, d, tx, ty) {
  out[0] = a;
  out[1] = b;
  out[2] = c;
  out[3] = d;
  out[4] = tx;
  out[5] = ty;
  return out;
}

/**
 * Inverts a mat2d
 *
 * @param {mat2d} out the receiving matrix
 * @param {mat2d} a the source matrix
 * @returns {mat2d} out
 */
function invert(out, a) {
  let aa = a[0], ab = a[1], ac = a[2], ad = a[3];
  let atx = a[4], aty = a[5];

  let det = aa * ad - ab * ac;
  if(!det){
    return null;
  }
  det = 1.0 / det;

  out[0] = ad * det;
  out[1] = -ab * det;
  out[2] = -ac * det;
  out[3] = aa * det;
  out[4] = (ac * aty - ad * atx) * det;
  out[5] = (ab * atx - aa * aty) * det;
  return out;
}

/**
 * Calculates the determinant of a mat2d
 *
 * @param {mat2d} a the source matrix
 * @returns {Number} determinant of a
 */
function determinant(a) {
  return a[0] * a[3] - a[1] * a[2];
}

/**
 * Multiplies two mat2d's
 *
 * @param {mat2d} out the receiving matrix
 * @param {mat2d} a the first operand
 * @param {mat2d} b the second operand
 * @returns {mat2d} out
 */
function multiply(out, a, b) {
  let a0 = a[0], a1 = a[1], a2 = a[2], a3 = a[3], a4 = a[4], a5 = a[5];
  let b0 = b[0], b1 = b[1], b2 = b[2], b3 = b[3], b4 = b[4], b5 = b[5];
  out[0] = a0 * b0 + a2 * b1;
  out[1] = a1 * b0 + a3 * b1;
  out[2] = a0 * b2 + a2 * b3;
  out[3] = a1 * b2 + a3 * b3;
  out[4] = a0 * b4 + a2 * b5 + a4;
  out[5] = a1 * b4 + a3 * b5 + a5;
  return out;
}

/**
 * Rotates a mat2d by the given angle
 *
 * @param {mat2d} out the receiving matrix
 * @param {mat2d} a the matrix to rotate
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat2d} out
 */
function rotate(out, a, rad) {
  let a0 = a[0], a1 = a[1], a2 = a[2], a3 = a[3], a4 = a[4], a5 = a[5];
  let s = Math.sin(rad);
  let c = Math.cos(rad);
  out[0] = a0 *  c + a2 * s;
  out[1] = a1 *  c + a3 * s;
  out[2] = a0 * -s + a2 * c;
  out[3] = a1 * -s + a3 * c;
  out[4] = a4;
  out[5] = a5;
  return out;
}

/**
 * Scales the mat2d by the dimensions in the given vec2
 *
 * @param {mat2d} out the receiving matrix
 * @param {mat2d} a the matrix to translate
 * @param {vec2} v the vec2 to scale the matrix by
 * @returns {mat2d} out
 **/
function scale(out, a, v) {
  let a0 = a[0], a1 = a[1], a2 = a[2], a3 = a[3], a4 = a[4], a5 = a[5];
  let v0 = v[0], v1 = v[1];
  out[0] = a0 * v0;
  out[1] = a1 * v0;
  out[2] = a2 * v1;
  out[3] = a3 * v1;
  out[4] = a4;
  out[5] = a5;
  return out;
}

/**
 * Translates the mat2d by the dimensions in the given vec2
 *
 * @param {mat2d} out the receiving matrix
 * @param {mat2d} a the matrix to translate
 * @param {vec2} v the vec2 to translate the matrix by
 * @returns {mat2d} out
 **/
function translate(out, a, v) {
  let a0 = a[0], a1 = a[1], a2 = a[2], a3 = a[3], a4 = a[4], a5 = a[5];
  let v0 = v[0], v1 = v[1];
  out[0] = a0;
  out[1] = a1;
  out[2] = a2;
  out[3] = a3;
  out[4] = a0 * v0 + a2 * v1 + a4;
  out[5] = a1 * v0 + a3 * v1 + a5;
  return out;
}

/**
 * Creates a matrix from a given angle
 * This is equivalent to (but much faster than):
 *
 *     mat2d.identity(dest);
 *     mat2d.rotate(dest, dest, rad);
 *
 * @param {mat2d} out mat2d receiving operation result
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat2d} out
 */
function fromRotation(out, rad) {
  let s = Math.sin(rad), c = Math.cos(rad);
  out[0] = c;
  out[1] = s;
  out[2] = -s;
  out[3] = c;
  out[4] = 0;
  out[5] = 0;
  return out;
}

/**
 * Creates a matrix from a vector scaling
 * This is equivalent to (but much faster than):
 *
 *     mat2d.identity(dest);
 *     mat2d.scale(dest, dest, vec);
 *
 * @param {mat2d} out mat2d receiving operation result
 * @param {vec2} v Scaling vector
 * @returns {mat2d} out
 */
function fromScaling(out, v) {
  out[0] = v[0];
  out[1] = 0;
  out[2] = 0;
  out[3] = v[1];
  out[4] = 0;
  out[5] = 0;
  return out;
}

/**
 * Creates a matrix from a vector translation
 * This is equivalent to (but much faster than):
 *
 *     mat2d.identity(dest);
 *     mat2d.translate(dest, dest, vec);
 *
 * @param {mat2d} out mat2d receiving operation result
 * @param {vec2} v Translation vector
 * @returns {mat2d} out
 */
function fromTranslation(out, v) {
  out[0] = 1;
  out[1] = 0;
  out[2] = 0;
  out[3] = 1;
  out[4] = v[0];
  out[5] = v[1];
  return out;
}

/**
 * Returns a string representation of a mat2d
 *
 * @param {mat2d} a matrix to represent as a string
 * @returns {String} string representation of the matrix
 */
function str(a) {
  return 'mat2d(' + a[0] + ', ' + a[1] + ', ' + a[2] + ', ' +
          a[3] + ', ' + a[4] + ', ' + a[5] + ')';
}

/**
 * Returns Frobenius norm of a mat2d
 *
 * @param {mat2d} a the matrix to calculate Frobenius norm of
 * @returns {Number} Frobenius norm
 */
function frob(a) {
  return(Math.sqrt(Math.pow(a[0], 2) + Math.pow(a[1], 2) + Math.pow(a[2], 2) + Math.pow(a[3], 2) + Math.pow(a[4], 2) + Math.pow(a[5], 2) + 1))
}

/**
 * Adds two mat2d's
 *
 * @param {mat2d} out the receiving matrix
 * @param {mat2d} a the first operand
 * @param {mat2d} b the second operand
 * @returns {mat2d} out
 */
function add(out, a, b) {
  out[0] = a[0] + b[0];
  out[1] = a[1] + b[1];
  out[2] = a[2] + b[2];
  out[3] = a[3] + b[3];
  out[4] = a[4] + b[4];
  out[5] = a[5] + b[5];
  return out;
}

/**
 * Subtracts matrix b from matrix a
 *
 * @param {mat2d} out the receiving matrix
 * @param {mat2d} a the first operand
 * @param {mat2d} b the second operand
 * @returns {mat2d} out
 */
function subtract(out, a, b) {
  out[0] = a[0] - b[0];
  out[1] = a[1] - b[1];
  out[2] = a[2] - b[2];
  out[3] = a[3] - b[3];
  out[4] = a[4] - b[4];
  out[5] = a[5] - b[5];
  return out;
}

/**
 * Multiply each element of the matrix by a scalar.
 *
 * @param {mat2d} out the receiving matrix
 * @param {mat2d} a the matrix to scale
 * @param {Number} b amount to scale the matrix's elements by
 * @returns {mat2d} out
 */
function multiplyScalar(out, a, b) {
  out[0] = a[0] * b;
  out[1] = a[1] * b;
  out[2] = a[2] * b;
  out[3] = a[3] * b;
  out[4] = a[4] * b;
  out[5] = a[5] * b;
  return out;
}

/**
 * Adds two mat2d's after multiplying each element of the second operand by a scalar value.
 *
 * @param {mat2d} out the receiving vector
 * @param {mat2d} a the first operand
 * @param {mat2d} b the second operand
 * @param {Number} scale the amount to scale b's elements by before adding
 * @returns {mat2d} out
 */
function multiplyScalarAndAdd(out, a, b, scale) {
  out[0] = a[0] + (b[0] * scale);
  out[1] = a[1] + (b[1] * scale);
  out[2] = a[2] + (b[2] * scale);
  out[3] = a[3] + (b[3] * scale);
  out[4] = a[4] + (b[4] * scale);
  out[5] = a[5] + (b[5] * scale);
  return out;
}

/**
 * Returns whether or not the matrices have exactly the same elements in the same position (when compared with ===)
 *
 * @param {mat2d} a The first matrix.
 * @param {mat2d} b The second matrix.
 * @returns {Boolean} True if the matrices are equal, false otherwise.
 */
function exactEquals(a, b) {
  return a[0] === b[0] && a[1] === b[1] && a[2] === b[2] && a[3] === b[3] && a[4] === b[4] && a[5] === b[5];
}

/**
 * Returns whether or not the matrices have approximately the same elements in the same position.
 *
 * @param {mat2d} a The first matrix.
 * @param {mat2d} b The second matrix.
 * @returns {Boolean} True if the matrices are equal, false otherwise.
 */
function equals(a, b) {
  let a0 = a[0], a1 = a[1], a2 = a[2], a3 = a[3], a4 = a[4], a5 = a[5];
  let b0 = b[0], b1 = b[1], b2 = b[2], b3 = b[3], b4 = b[4], b5 = b[5];
  return (Math.abs(a0 - b0) <= __WEBPACK_IMPORTED_MODULE_0__common__["EPSILON"]*Math.max(1.0, Math.abs(a0), Math.abs(b0)) &&
          Math.abs(a1 - b1) <= __WEBPACK_IMPORTED_MODULE_0__common__["EPSILON"]*Math.max(1.0, Math.abs(a1), Math.abs(b1)) &&
          Math.abs(a2 - b2) <= __WEBPACK_IMPORTED_MODULE_0__common__["EPSILON"]*Math.max(1.0, Math.abs(a2), Math.abs(b2)) &&
          Math.abs(a3 - b3) <= __WEBPACK_IMPORTED_MODULE_0__common__["EPSILON"]*Math.max(1.0, Math.abs(a3), Math.abs(b3)) &&
          Math.abs(a4 - b4) <= __WEBPACK_IMPORTED_MODULE_0__common__["EPSILON"]*Math.max(1.0, Math.abs(a4), Math.abs(b4)) &&
          Math.abs(a5 - b5) <= __WEBPACK_IMPORTED_MODULE_0__common__["EPSILON"]*Math.max(1.0, Math.abs(a5), Math.abs(b5)));
}

/**
 * Alias for {@link mat2d.multiply}
 * @function
 */
const mul = multiply;
/* harmony export (immutable) */ __webpack_exports__["mul"] = mul;


/**
 * Alias for {@link mat2d.subtract}
 * @function
 */
const sub = subtract;
/* harmony export (immutable) */ __webpack_exports__["sub"] = sub;



/***/ }),
/* 117 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["create"] = create;
/* harmony export (immutable) */ __webpack_exports__["clone"] = clone;
/* harmony export (immutable) */ __webpack_exports__["copy"] = copy;
/* harmony export (immutable) */ __webpack_exports__["fromValues"] = fromValues;
/* harmony export (immutable) */ __webpack_exports__["set"] = set;
/* harmony export (immutable) */ __webpack_exports__["identity"] = identity;
/* harmony export (immutable) */ __webpack_exports__["transpose"] = transpose;
/* harmony export (immutable) */ __webpack_exports__["invert"] = invert;
/* harmony export (immutable) */ __webpack_exports__["adjoint"] = adjoint;
/* harmony export (immutable) */ __webpack_exports__["determinant"] = determinant;
/* harmony export (immutable) */ __webpack_exports__["multiply"] = multiply;
/* harmony export (immutable) */ __webpack_exports__["translate"] = translate;
/* harmony export (immutable) */ __webpack_exports__["scale"] = scale;
/* harmony export (immutable) */ __webpack_exports__["rotate"] = rotate;
/* harmony export (immutable) */ __webpack_exports__["rotateX"] = rotateX;
/* harmony export (immutable) */ __webpack_exports__["rotateY"] = rotateY;
/* harmony export (immutable) */ __webpack_exports__["rotateZ"] = rotateZ;
/* harmony export (immutable) */ __webpack_exports__["fromTranslation"] = fromTranslation;
/* harmony export (immutable) */ __webpack_exports__["fromScaling"] = fromScaling;
/* harmony export (immutable) */ __webpack_exports__["fromRotation"] = fromRotation;
/* harmony export (immutable) */ __webpack_exports__["fromXRotation"] = fromXRotation;
/* harmony export (immutable) */ __webpack_exports__["fromYRotation"] = fromYRotation;
/* harmony export (immutable) */ __webpack_exports__["fromZRotation"] = fromZRotation;
/* harmony export (immutable) */ __webpack_exports__["fromRotationTranslation"] = fromRotationTranslation;
/* harmony export (immutable) */ __webpack_exports__["getTranslation"] = getTranslation;
/* harmony export (immutable) */ __webpack_exports__["getScaling"] = getScaling;
/* harmony export (immutable) */ __webpack_exports__["getRotation"] = getRotation;
/* harmony export (immutable) */ __webpack_exports__["fromRotationTranslationScale"] = fromRotationTranslationScale;
/* harmony export (immutable) */ __webpack_exports__["fromRotationTranslationScaleOrigin"] = fromRotationTranslationScaleOrigin;
/* harmony export (immutable) */ __webpack_exports__["fromQuat"] = fromQuat;
/* harmony export (immutable) */ __webpack_exports__["frustum"] = frustum;
/* harmony export (immutable) */ __webpack_exports__["perspective"] = perspective;
/* harmony export (immutable) */ __webpack_exports__["perspectiveFromFieldOfView"] = perspectiveFromFieldOfView;
/* harmony export (immutable) */ __webpack_exports__["ortho"] = ortho;
/* harmony export (immutable) */ __webpack_exports__["lookAt"] = lookAt;
/* harmony export (immutable) */ __webpack_exports__["targetTo"] = targetTo;
/* harmony export (immutable) */ __webpack_exports__["str"] = str;
/* harmony export (immutable) */ __webpack_exports__["frob"] = frob;
/* harmony export (immutable) */ __webpack_exports__["add"] = add;
/* harmony export (immutable) */ __webpack_exports__["subtract"] = subtract;
/* harmony export (immutable) */ __webpack_exports__["multiplyScalar"] = multiplyScalar;
/* harmony export (immutable) */ __webpack_exports__["multiplyScalarAndAdd"] = multiplyScalarAndAdd;
/* harmony export (immutable) */ __webpack_exports__["exactEquals"] = exactEquals;
/* harmony export (immutable) */ __webpack_exports__["equals"] = equals;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common__ = __webpack_require__(3);
/* Copyright (c) 2015, Brandon Jones, Colin MacKenzie IV.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE. */



/**
 * 4x4 Matrix
 * @module mat4
 */

/**
 * Creates a new identity mat4
 *
 * @returns {mat4} a new 4x4 matrix
 */
function create() {
  let out = new __WEBPACK_IMPORTED_MODULE_0__common__["ARRAY_TYPE"](16);
  out[0] = 1;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 0;
  out[5] = 1;
  out[6] = 0;
  out[7] = 0;
  out[8] = 0;
  out[9] = 0;
  out[10] = 1;
  out[11] = 0;
  out[12] = 0;
  out[13] = 0;
  out[14] = 0;
  out[15] = 1;
  return out;
}

/**
 * Creates a new mat4 initialized with values from an existing matrix
 *
 * @param {mat4} a matrix to clone
 * @returns {mat4} a new 4x4 matrix
 */
function clone(a) {
  let out = new __WEBPACK_IMPORTED_MODULE_0__common__["ARRAY_TYPE"](16);
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  out[3] = a[3];
  out[4] = a[4];
  out[5] = a[5];
  out[6] = a[6];
  out[7] = a[7];
  out[8] = a[8];
  out[9] = a[9];
  out[10] = a[10];
  out[11] = a[11];
  out[12] = a[12];
  out[13] = a[13];
  out[14] = a[14];
  out[15] = a[15];
  return out;
}

/**
 * Copy the values from one mat4 to another
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the source matrix
 * @returns {mat4} out
 */
function copy(out, a) {
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  out[3] = a[3];
  out[4] = a[4];
  out[5] = a[5];
  out[6] = a[6];
  out[7] = a[7];
  out[8] = a[8];
  out[9] = a[9];
  out[10] = a[10];
  out[11] = a[11];
  out[12] = a[12];
  out[13] = a[13];
  out[14] = a[14];
  out[15] = a[15];
  return out;
}

/**
 * Create a new mat4 with the given values
 *
 * @param {Number} m00 Component in column 0, row 0 position (index 0)
 * @param {Number} m01 Component in column 0, row 1 position (index 1)
 * @param {Number} m02 Component in column 0, row 2 position (index 2)
 * @param {Number} m03 Component in column 0, row 3 position (index 3)
 * @param {Number} m10 Component in column 1, row 0 position (index 4)
 * @param {Number} m11 Component in column 1, row 1 position (index 5)
 * @param {Number} m12 Component in column 1, row 2 position (index 6)
 * @param {Number} m13 Component in column 1, row 3 position (index 7)
 * @param {Number} m20 Component in column 2, row 0 position (index 8)
 * @param {Number} m21 Component in column 2, row 1 position (index 9)
 * @param {Number} m22 Component in column 2, row 2 position (index 10)
 * @param {Number} m23 Component in column 2, row 3 position (index 11)
 * @param {Number} m30 Component in column 3, row 0 position (index 12)
 * @param {Number} m31 Component in column 3, row 1 position (index 13)
 * @param {Number} m32 Component in column 3, row 2 position (index 14)
 * @param {Number} m33 Component in column 3, row 3 position (index 15)
 * @returns {mat4} A new mat4
 */
function fromValues(m00, m01, m02, m03, m10, m11, m12, m13, m20, m21, m22, m23, m30, m31, m32, m33) {
  let out = new __WEBPACK_IMPORTED_MODULE_0__common__["ARRAY_TYPE"](16);
  out[0] = m00;
  out[1] = m01;
  out[2] = m02;
  out[3] = m03;
  out[4] = m10;
  out[5] = m11;
  out[6] = m12;
  out[7] = m13;
  out[8] = m20;
  out[9] = m21;
  out[10] = m22;
  out[11] = m23;
  out[12] = m30;
  out[13] = m31;
  out[14] = m32;
  out[15] = m33;
  return out;
}

/**
 * Set the components of a mat4 to the given values
 *
 * @param {mat4} out the receiving matrix
 * @param {Number} m00 Component in column 0, row 0 position (index 0)
 * @param {Number} m01 Component in column 0, row 1 position (index 1)
 * @param {Number} m02 Component in column 0, row 2 position (index 2)
 * @param {Number} m03 Component in column 0, row 3 position (index 3)
 * @param {Number} m10 Component in column 1, row 0 position (index 4)
 * @param {Number} m11 Component in column 1, row 1 position (index 5)
 * @param {Number} m12 Component in column 1, row 2 position (index 6)
 * @param {Number} m13 Component in column 1, row 3 position (index 7)
 * @param {Number} m20 Component in column 2, row 0 position (index 8)
 * @param {Number} m21 Component in column 2, row 1 position (index 9)
 * @param {Number} m22 Component in column 2, row 2 position (index 10)
 * @param {Number} m23 Component in column 2, row 3 position (index 11)
 * @param {Number} m30 Component in column 3, row 0 position (index 12)
 * @param {Number} m31 Component in column 3, row 1 position (index 13)
 * @param {Number} m32 Component in column 3, row 2 position (index 14)
 * @param {Number} m33 Component in column 3, row 3 position (index 15)
 * @returns {mat4} out
 */
function set(out, m00, m01, m02, m03, m10, m11, m12, m13, m20, m21, m22, m23, m30, m31, m32, m33) {
  out[0] = m00;
  out[1] = m01;
  out[2] = m02;
  out[3] = m03;
  out[4] = m10;
  out[5] = m11;
  out[6] = m12;
  out[7] = m13;
  out[8] = m20;
  out[9] = m21;
  out[10] = m22;
  out[11] = m23;
  out[12] = m30;
  out[13] = m31;
  out[14] = m32;
  out[15] = m33;
  return out;
}


/**
 * Set a mat4 to the identity matrix
 *
 * @param {mat4} out the receiving matrix
 * @returns {mat4} out
 */
function identity(out) {
  out[0] = 1;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 0;
  out[5] = 1;
  out[6] = 0;
  out[7] = 0;
  out[8] = 0;
  out[9] = 0;
  out[10] = 1;
  out[11] = 0;
  out[12] = 0;
  out[13] = 0;
  out[14] = 0;
  out[15] = 1;
  return out;
}

/**
 * Transpose the values of a mat4
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the source matrix
 * @returns {mat4} out
 */
function transpose(out, a) {
  // If we are transposing ourselves we can skip a few steps but have to cache some values
  if (out === a) {
    let a01 = a[1], a02 = a[2], a03 = a[3];
    let a12 = a[6], a13 = a[7];
    let a23 = a[11];

    out[1] = a[4];
    out[2] = a[8];
    out[3] = a[12];
    out[4] = a01;
    out[6] = a[9];
    out[7] = a[13];
    out[8] = a02;
    out[9] = a12;
    out[11] = a[14];
    out[12] = a03;
    out[13] = a13;
    out[14] = a23;
  } else {
    out[0] = a[0];
    out[1] = a[4];
    out[2] = a[8];
    out[3] = a[12];
    out[4] = a[1];
    out[5] = a[5];
    out[6] = a[9];
    out[7] = a[13];
    out[8] = a[2];
    out[9] = a[6];
    out[10] = a[10];
    out[11] = a[14];
    out[12] = a[3];
    out[13] = a[7];
    out[14] = a[11];
    out[15] = a[15];
  }

  return out;
}

/**
 * Inverts a mat4
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the source matrix
 * @returns {mat4} out
 */
function invert(out, a) {
  let a00 = a[0], a01 = a[1], a02 = a[2], a03 = a[3];
  let a10 = a[4], a11 = a[5], a12 = a[6], a13 = a[7];
  let a20 = a[8], a21 = a[9], a22 = a[10], a23 = a[11];
  let a30 = a[12], a31 = a[13], a32 = a[14], a33 = a[15];

  let b00 = a00 * a11 - a01 * a10;
  let b01 = a00 * a12 - a02 * a10;
  let b02 = a00 * a13 - a03 * a10;
  let b03 = a01 * a12 - a02 * a11;
  let b04 = a01 * a13 - a03 * a11;
  let b05 = a02 * a13 - a03 * a12;
  let b06 = a20 * a31 - a21 * a30;
  let b07 = a20 * a32 - a22 * a30;
  let b08 = a20 * a33 - a23 * a30;
  let b09 = a21 * a32 - a22 * a31;
  let b10 = a21 * a33 - a23 * a31;
  let b11 = a22 * a33 - a23 * a32;

  // Calculate the determinant
  let det = b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;

  if (!det) {
    return null;
  }
  det = 1.0 / det;

  out[0] = (a11 * b11 - a12 * b10 + a13 * b09) * det;
  out[1] = (a02 * b10 - a01 * b11 - a03 * b09) * det;
  out[2] = (a31 * b05 - a32 * b04 + a33 * b03) * det;
  out[3] = (a22 * b04 - a21 * b05 - a23 * b03) * det;
  out[4] = (a12 * b08 - a10 * b11 - a13 * b07) * det;
  out[5] = (a00 * b11 - a02 * b08 + a03 * b07) * det;
  out[6] = (a32 * b02 - a30 * b05 - a33 * b01) * det;
  out[7] = (a20 * b05 - a22 * b02 + a23 * b01) * det;
  out[8] = (a10 * b10 - a11 * b08 + a13 * b06) * det;
  out[9] = (a01 * b08 - a00 * b10 - a03 * b06) * det;
  out[10] = (a30 * b04 - a31 * b02 + a33 * b00) * det;
  out[11] = (a21 * b02 - a20 * b04 - a23 * b00) * det;
  out[12] = (a11 * b07 - a10 * b09 - a12 * b06) * det;
  out[13] = (a00 * b09 - a01 * b07 + a02 * b06) * det;
  out[14] = (a31 * b01 - a30 * b03 - a32 * b00) * det;
  out[15] = (a20 * b03 - a21 * b01 + a22 * b00) * det;

  return out;
}

/**
 * Calculates the adjugate of a mat4
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the source matrix
 * @returns {mat4} out
 */
function adjoint(out, a) {
  let a00 = a[0], a01 = a[1], a02 = a[2], a03 = a[3];
  let a10 = a[4], a11 = a[5], a12 = a[6], a13 = a[7];
  let a20 = a[8], a21 = a[9], a22 = a[10], a23 = a[11];
  let a30 = a[12], a31 = a[13], a32 = a[14], a33 = a[15];

  out[0]  =  (a11 * (a22 * a33 - a23 * a32) - a21 * (a12 * a33 - a13 * a32) + a31 * (a12 * a23 - a13 * a22));
  out[1]  = -(a01 * (a22 * a33 - a23 * a32) - a21 * (a02 * a33 - a03 * a32) + a31 * (a02 * a23 - a03 * a22));
  out[2]  =  (a01 * (a12 * a33 - a13 * a32) - a11 * (a02 * a33 - a03 * a32) + a31 * (a02 * a13 - a03 * a12));
  out[3]  = -(a01 * (a12 * a23 - a13 * a22) - a11 * (a02 * a23 - a03 * a22) + a21 * (a02 * a13 - a03 * a12));
  out[4]  = -(a10 * (a22 * a33 - a23 * a32) - a20 * (a12 * a33 - a13 * a32) + a30 * (a12 * a23 - a13 * a22));
  out[5]  =  (a00 * (a22 * a33 - a23 * a32) - a20 * (a02 * a33 - a03 * a32) + a30 * (a02 * a23 - a03 * a22));
  out[6]  = -(a00 * (a12 * a33 - a13 * a32) - a10 * (a02 * a33 - a03 * a32) + a30 * (a02 * a13 - a03 * a12));
  out[7]  =  (a00 * (a12 * a23 - a13 * a22) - a10 * (a02 * a23 - a03 * a22) + a20 * (a02 * a13 - a03 * a12));
  out[8]  =  (a10 * (a21 * a33 - a23 * a31) - a20 * (a11 * a33 - a13 * a31) + a30 * (a11 * a23 - a13 * a21));
  out[9]  = -(a00 * (a21 * a33 - a23 * a31) - a20 * (a01 * a33 - a03 * a31) + a30 * (a01 * a23 - a03 * a21));
  out[10] =  (a00 * (a11 * a33 - a13 * a31) - a10 * (a01 * a33 - a03 * a31) + a30 * (a01 * a13 - a03 * a11));
  out[11] = -(a00 * (a11 * a23 - a13 * a21) - a10 * (a01 * a23 - a03 * a21) + a20 * (a01 * a13 - a03 * a11));
  out[12] = -(a10 * (a21 * a32 - a22 * a31) - a20 * (a11 * a32 - a12 * a31) + a30 * (a11 * a22 - a12 * a21));
  out[13] =  (a00 * (a21 * a32 - a22 * a31) - a20 * (a01 * a32 - a02 * a31) + a30 * (a01 * a22 - a02 * a21));
  out[14] = -(a00 * (a11 * a32 - a12 * a31) - a10 * (a01 * a32 - a02 * a31) + a30 * (a01 * a12 - a02 * a11));
  out[15] =  (a00 * (a11 * a22 - a12 * a21) - a10 * (a01 * a22 - a02 * a21) + a20 * (a01 * a12 - a02 * a11));
  return out;
}

/**
 * Calculates the determinant of a mat4
 *
 * @param {mat4} a the source matrix
 * @returns {Number} determinant of a
 */
function determinant(a) {
  let a00 = a[0], a01 = a[1], a02 = a[2], a03 = a[3];
  let a10 = a[4], a11 = a[5], a12 = a[6], a13 = a[7];
  let a20 = a[8], a21 = a[9], a22 = a[10], a23 = a[11];
  let a30 = a[12], a31 = a[13], a32 = a[14], a33 = a[15];

  let b00 = a00 * a11 - a01 * a10;
  let b01 = a00 * a12 - a02 * a10;
  let b02 = a00 * a13 - a03 * a10;
  let b03 = a01 * a12 - a02 * a11;
  let b04 = a01 * a13 - a03 * a11;
  let b05 = a02 * a13 - a03 * a12;
  let b06 = a20 * a31 - a21 * a30;
  let b07 = a20 * a32 - a22 * a30;
  let b08 = a20 * a33 - a23 * a30;
  let b09 = a21 * a32 - a22 * a31;
  let b10 = a21 * a33 - a23 * a31;
  let b11 = a22 * a33 - a23 * a32;

  // Calculate the determinant
  return b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;
}

/**
 * Multiplies two mat4s
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the first operand
 * @param {mat4} b the second operand
 * @returns {mat4} out
 */
function multiply(out, a, b) {
  let a00 = a[0], a01 = a[1], a02 = a[2], a03 = a[3];
  let a10 = a[4], a11 = a[5], a12 = a[6], a13 = a[7];
  let a20 = a[8], a21 = a[9], a22 = a[10], a23 = a[11];
  let a30 = a[12], a31 = a[13], a32 = a[14], a33 = a[15];

  // Cache only the current line of the second matrix
  let b0  = b[0], b1 = b[1], b2 = b[2], b3 = b[3];
  out[0] = b0*a00 + b1*a10 + b2*a20 + b3*a30;
  out[1] = b0*a01 + b1*a11 + b2*a21 + b3*a31;
  out[2] = b0*a02 + b1*a12 + b2*a22 + b3*a32;
  out[3] = b0*a03 + b1*a13 + b2*a23 + b3*a33;

  b0 = b[4]; b1 = b[5]; b2 = b[6]; b3 = b[7];
  out[4] = b0*a00 + b1*a10 + b2*a20 + b3*a30;
  out[5] = b0*a01 + b1*a11 + b2*a21 + b3*a31;
  out[6] = b0*a02 + b1*a12 + b2*a22 + b3*a32;
  out[7] = b0*a03 + b1*a13 + b2*a23 + b3*a33;

  b0 = b[8]; b1 = b[9]; b2 = b[10]; b3 = b[11];
  out[8] = b0*a00 + b1*a10 + b2*a20 + b3*a30;
  out[9] = b0*a01 + b1*a11 + b2*a21 + b3*a31;
  out[10] = b0*a02 + b1*a12 + b2*a22 + b3*a32;
  out[11] = b0*a03 + b1*a13 + b2*a23 + b3*a33;

  b0 = b[12]; b1 = b[13]; b2 = b[14]; b3 = b[15];
  out[12] = b0*a00 + b1*a10 + b2*a20 + b3*a30;
  out[13] = b0*a01 + b1*a11 + b2*a21 + b3*a31;
  out[14] = b0*a02 + b1*a12 + b2*a22 + b3*a32;
  out[15] = b0*a03 + b1*a13 + b2*a23 + b3*a33;
  return out;
}

/**
 * Translate a mat4 by the given vector
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the matrix to translate
 * @param {vec3} v vector to translate by
 * @returns {mat4} out
 */
function translate(out, a, v) {
  let x = v[0], y = v[1], z = v[2];
  let a00, a01, a02, a03;
  let a10, a11, a12, a13;
  let a20, a21, a22, a23;

  if (a === out) {
    out[12] = a[0] * x + a[4] * y + a[8] * z + a[12];
    out[13] = a[1] * x + a[5] * y + a[9] * z + a[13];
    out[14] = a[2] * x + a[6] * y + a[10] * z + a[14];
    out[15] = a[3] * x + a[7] * y + a[11] * z + a[15];
  } else {
    a00 = a[0]; a01 = a[1]; a02 = a[2]; a03 = a[3];
    a10 = a[4]; a11 = a[5]; a12 = a[6]; a13 = a[7];
    a20 = a[8]; a21 = a[9]; a22 = a[10]; a23 = a[11];

    out[0] = a00; out[1] = a01; out[2] = a02; out[3] = a03;
    out[4] = a10; out[5] = a11; out[6] = a12; out[7] = a13;
    out[8] = a20; out[9] = a21; out[10] = a22; out[11] = a23;

    out[12] = a00 * x + a10 * y + a20 * z + a[12];
    out[13] = a01 * x + a11 * y + a21 * z + a[13];
    out[14] = a02 * x + a12 * y + a22 * z + a[14];
    out[15] = a03 * x + a13 * y + a23 * z + a[15];
  }

  return out;
}

/**
 * Scales the mat4 by the dimensions in the given vec3 not using vectorization
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the matrix to scale
 * @param {vec3} v the vec3 to scale the matrix by
 * @returns {mat4} out
 **/
function scale(out, a, v) {
  let x = v[0], y = v[1], z = v[2];

  out[0] = a[0] * x;
  out[1] = a[1] * x;
  out[2] = a[2] * x;
  out[3] = a[3] * x;
  out[4] = a[4] * y;
  out[5] = a[5] * y;
  out[6] = a[6] * y;
  out[7] = a[7] * y;
  out[8] = a[8] * z;
  out[9] = a[9] * z;
  out[10] = a[10] * z;
  out[11] = a[11] * z;
  out[12] = a[12];
  out[13] = a[13];
  out[14] = a[14];
  out[15] = a[15];
  return out;
}

/**
 * Rotates a mat4 by the given angle around the given axis
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the matrix to rotate
 * @param {Number} rad the angle to rotate the matrix by
 * @param {vec3} axis the axis to rotate around
 * @returns {mat4} out
 */
function rotate(out, a, rad, axis) {
  let x = axis[0], y = axis[1], z = axis[2];
  let len = Math.sqrt(x * x + y * y + z * z);
  let s, c, t;
  let a00, a01, a02, a03;
  let a10, a11, a12, a13;
  let a20, a21, a22, a23;
  let b00, b01, b02;
  let b10, b11, b12;
  let b20, b21, b22;

  if (Math.abs(len) < __WEBPACK_IMPORTED_MODULE_0__common__["EPSILON"]) { return null; }

  len = 1 / len;
  x *= len;
  y *= len;
  z *= len;

  s = Math.sin(rad);
  c = Math.cos(rad);
  t = 1 - c;

  a00 = a[0]; a01 = a[1]; a02 = a[2]; a03 = a[3];
  a10 = a[4]; a11 = a[5]; a12 = a[6]; a13 = a[7];
  a20 = a[8]; a21 = a[9]; a22 = a[10]; a23 = a[11];

  // Construct the elements of the rotation matrix
  b00 = x * x * t + c; b01 = y * x * t + z * s; b02 = z * x * t - y * s;
  b10 = x * y * t - z * s; b11 = y * y * t + c; b12 = z * y * t + x * s;
  b20 = x * z * t + y * s; b21 = y * z * t - x * s; b22 = z * z * t + c;

  // Perform rotation-specific matrix multiplication
  out[0] = a00 * b00 + a10 * b01 + a20 * b02;
  out[1] = a01 * b00 + a11 * b01 + a21 * b02;
  out[2] = a02 * b00 + a12 * b01 + a22 * b02;
  out[3] = a03 * b00 + a13 * b01 + a23 * b02;
  out[4] = a00 * b10 + a10 * b11 + a20 * b12;
  out[5] = a01 * b10 + a11 * b11 + a21 * b12;
  out[6] = a02 * b10 + a12 * b11 + a22 * b12;
  out[7] = a03 * b10 + a13 * b11 + a23 * b12;
  out[8] = a00 * b20 + a10 * b21 + a20 * b22;
  out[9] = a01 * b20 + a11 * b21 + a21 * b22;
  out[10] = a02 * b20 + a12 * b21 + a22 * b22;
  out[11] = a03 * b20 + a13 * b21 + a23 * b22;

  if (a !== out) { // If the source and destination differ, copy the unchanged last row
    out[12] = a[12];
    out[13] = a[13];
    out[14] = a[14];
    out[15] = a[15];
  }
  return out;
}

/**
 * Rotates a matrix by the given angle around the X axis
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the matrix to rotate
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat4} out
 */
function rotateX(out, a, rad) {
  let s = Math.sin(rad);
  let c = Math.cos(rad);
  let a10 = a[4];
  let a11 = a[5];
  let a12 = a[6];
  let a13 = a[7];
  let a20 = a[8];
  let a21 = a[9];
  let a22 = a[10];
  let a23 = a[11];

  if (a !== out) { // If the source and destination differ, copy the unchanged rows
    out[0]  = a[0];
    out[1]  = a[1];
    out[2]  = a[2];
    out[3]  = a[3];
    out[12] = a[12];
    out[13] = a[13];
    out[14] = a[14];
    out[15] = a[15];
  }

  // Perform axis-specific matrix multiplication
  out[4] = a10 * c + a20 * s;
  out[5] = a11 * c + a21 * s;
  out[6] = a12 * c + a22 * s;
  out[7] = a13 * c + a23 * s;
  out[8] = a20 * c - a10 * s;
  out[9] = a21 * c - a11 * s;
  out[10] = a22 * c - a12 * s;
  out[11] = a23 * c - a13 * s;
  return out;
}

/**
 * Rotates a matrix by the given angle around the Y axis
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the matrix to rotate
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat4} out
 */
function rotateY(out, a, rad) {
  let s = Math.sin(rad);
  let c = Math.cos(rad);
  let a00 = a[0];
  let a01 = a[1];
  let a02 = a[2];
  let a03 = a[3];
  let a20 = a[8];
  let a21 = a[9];
  let a22 = a[10];
  let a23 = a[11];

  if (a !== out) { // If the source and destination differ, copy the unchanged rows
    out[4]  = a[4];
    out[5]  = a[5];
    out[6]  = a[6];
    out[7]  = a[7];
    out[12] = a[12];
    out[13] = a[13];
    out[14] = a[14];
    out[15] = a[15];
  }

  // Perform axis-specific matrix multiplication
  out[0] = a00 * c - a20 * s;
  out[1] = a01 * c - a21 * s;
  out[2] = a02 * c - a22 * s;
  out[3] = a03 * c - a23 * s;
  out[8] = a00 * s + a20 * c;
  out[9] = a01 * s + a21 * c;
  out[10] = a02 * s + a22 * c;
  out[11] = a03 * s + a23 * c;
  return out;
}

/**
 * Rotates a matrix by the given angle around the Z axis
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the matrix to rotate
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat4} out
 */
function rotateZ(out, a, rad) {
  let s = Math.sin(rad);
  let c = Math.cos(rad);
  let a00 = a[0];
  let a01 = a[1];
  let a02 = a[2];
  let a03 = a[3];
  let a10 = a[4];
  let a11 = a[5];
  let a12 = a[6];
  let a13 = a[7];

  if (a !== out) { // If the source and destination differ, copy the unchanged last row
    out[8]  = a[8];
    out[9]  = a[9];
    out[10] = a[10];
    out[11] = a[11];
    out[12] = a[12];
    out[13] = a[13];
    out[14] = a[14];
    out[15] = a[15];
  }

  // Perform axis-specific matrix multiplication
  out[0] = a00 * c + a10 * s;
  out[1] = a01 * c + a11 * s;
  out[2] = a02 * c + a12 * s;
  out[3] = a03 * c + a13 * s;
  out[4] = a10 * c - a00 * s;
  out[5] = a11 * c - a01 * s;
  out[6] = a12 * c - a02 * s;
  out[7] = a13 * c - a03 * s;
  return out;
}

/**
 * Creates a matrix from a vector translation
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.translate(dest, dest, vec);
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {vec3} v Translation vector
 * @returns {mat4} out
 */
function fromTranslation(out, v) {
  out[0] = 1;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 0;
  out[5] = 1;
  out[6] = 0;
  out[7] = 0;
  out[8] = 0;
  out[9] = 0;
  out[10] = 1;
  out[11] = 0;
  out[12] = v[0];
  out[13] = v[1];
  out[14] = v[2];
  out[15] = 1;
  return out;
}

/**
 * Creates a matrix from a vector scaling
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.scale(dest, dest, vec);
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {vec3} v Scaling vector
 * @returns {mat4} out
 */
function fromScaling(out, v) {
  out[0] = v[0];
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 0;
  out[5] = v[1];
  out[6] = 0;
  out[7] = 0;
  out[8] = 0;
  out[9] = 0;
  out[10] = v[2];
  out[11] = 0;
  out[12] = 0;
  out[13] = 0;
  out[14] = 0;
  out[15] = 1;
  return out;
}

/**
 * Creates a matrix from a given angle around a given axis
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.rotate(dest, dest, rad, axis);
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {Number} rad the angle to rotate the matrix by
 * @param {vec3} axis the axis to rotate around
 * @returns {mat4} out
 */
function fromRotation(out, rad, axis) {
  let x = axis[0], y = axis[1], z = axis[2];
  let len = Math.sqrt(x * x + y * y + z * z);
  let s, c, t;

  if (Math.abs(len) < __WEBPACK_IMPORTED_MODULE_0__common__["EPSILON"]) { return null; }

  len = 1 / len;
  x *= len;
  y *= len;
  z *= len;

  s = Math.sin(rad);
  c = Math.cos(rad);
  t = 1 - c;

  // Perform rotation-specific matrix multiplication
  out[0] = x * x * t + c;
  out[1] = y * x * t + z * s;
  out[2] = z * x * t - y * s;
  out[3] = 0;
  out[4] = x * y * t - z * s;
  out[5] = y * y * t + c;
  out[6] = z * y * t + x * s;
  out[7] = 0;
  out[8] = x * z * t + y * s;
  out[9] = y * z * t - x * s;
  out[10] = z * z * t + c;
  out[11] = 0;
  out[12] = 0;
  out[13] = 0;
  out[14] = 0;
  out[15] = 1;
  return out;
}

/**
 * Creates a matrix from the given angle around the X axis
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.rotateX(dest, dest, rad);
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat4} out
 */
function fromXRotation(out, rad) {
  let s = Math.sin(rad);
  let c = Math.cos(rad);

  // Perform axis-specific matrix multiplication
  out[0]  = 1;
  out[1]  = 0;
  out[2]  = 0;
  out[3]  = 0;
  out[4] = 0;
  out[5] = c;
  out[6] = s;
  out[7] = 0;
  out[8] = 0;
  out[9] = -s;
  out[10] = c;
  out[11] = 0;
  out[12] = 0;
  out[13] = 0;
  out[14] = 0;
  out[15] = 1;
  return out;
}

/**
 * Creates a matrix from the given angle around the Y axis
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.rotateY(dest, dest, rad);
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat4} out
 */
function fromYRotation(out, rad) {
  let s = Math.sin(rad);
  let c = Math.cos(rad);

  // Perform axis-specific matrix multiplication
  out[0]  = c;
  out[1]  = 0;
  out[2]  = -s;
  out[3]  = 0;
  out[4] = 0;
  out[5] = 1;
  out[6] = 0;
  out[7] = 0;
  out[8] = s;
  out[9] = 0;
  out[10] = c;
  out[11] = 0;
  out[12] = 0;
  out[13] = 0;
  out[14] = 0;
  out[15] = 1;
  return out;
}

/**
 * Creates a matrix from the given angle around the Z axis
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.rotateZ(dest, dest, rad);
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat4} out
 */
function fromZRotation(out, rad) {
  let s = Math.sin(rad);
  let c = Math.cos(rad);

  // Perform axis-specific matrix multiplication
  out[0]  = c;
  out[1]  = s;
  out[2]  = 0;
  out[3]  = 0;
  out[4] = -s;
  out[5] = c;
  out[6] = 0;
  out[7] = 0;
  out[8] = 0;
  out[9] = 0;
  out[10] = 1;
  out[11] = 0;
  out[12] = 0;
  out[13] = 0;
  out[14] = 0;
  out[15] = 1;
  return out;
}

/**
 * Creates a matrix from a quaternion rotation and vector translation
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.translate(dest, vec);
 *     let quatMat = mat4.create();
 *     quat4.toMat4(quat, quatMat);
 *     mat4.multiply(dest, quatMat);
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {quat4} q Rotation quaternion
 * @param {vec3} v Translation vector
 * @returns {mat4} out
 */
function fromRotationTranslation(out, q, v) {
  // Quaternion math
  let x = q[0], y = q[1], z = q[2], w = q[3];
  let x2 = x + x;
  let y2 = y + y;
  let z2 = z + z;

  let xx = x * x2;
  let xy = x * y2;
  let xz = x * z2;
  let yy = y * y2;
  let yz = y * z2;
  let zz = z * z2;
  let wx = w * x2;
  let wy = w * y2;
  let wz = w * z2;

  out[0] = 1 - (yy + zz);
  out[1] = xy + wz;
  out[2] = xz - wy;
  out[3] = 0;
  out[4] = xy - wz;
  out[5] = 1 - (xx + zz);
  out[6] = yz + wx;
  out[7] = 0;
  out[8] = xz + wy;
  out[9] = yz - wx;
  out[10] = 1 - (xx + yy);
  out[11] = 0;
  out[12] = v[0];
  out[13] = v[1];
  out[14] = v[2];
  out[15] = 1;

  return out;
}

/**
 * Returns the translation vector component of a transformation
 *  matrix. If a matrix is built with fromRotationTranslation,
 *  the returned vector will be the same as the translation vector
 *  originally supplied.
 * @param  {vec3} out Vector to receive translation component
 * @param  {mat4} mat Matrix to be decomposed (input)
 * @return {vec3} out
 */
function getTranslation(out, mat) {
  out[0] = mat[12];
  out[1] = mat[13];
  out[2] = mat[14];

  return out;
}

/**
 * Returns the scaling factor component of a transformation
 *  matrix. If a matrix is built with fromRotationTranslationScale
 *  with a normalized Quaternion paramter, the returned vector will be
 *  the same as the scaling vector
 *  originally supplied.
 * @param  {vec3} out Vector to receive scaling factor component
 * @param  {mat4} mat Matrix to be decomposed (input)
 * @return {vec3} out
 */
function getScaling(out, mat) {
  let m11 = mat[0];
  let m12 = mat[1];
  let m13 = mat[2];
  let m21 = mat[4];
  let m22 = mat[5];
  let m23 = mat[6];
  let m31 = mat[8];
  let m32 = mat[9];
  let m33 = mat[10];

  out[0] = Math.sqrt(m11 * m11 + m12 * m12 + m13 * m13);
  out[1] = Math.sqrt(m21 * m21 + m22 * m22 + m23 * m23);
  out[2] = Math.sqrt(m31 * m31 + m32 * m32 + m33 * m33);

  return out;
}

/**
 * Returns a quaternion representing the rotational component
 *  of a transformation matrix. If a matrix is built with
 *  fromRotationTranslation, the returned quaternion will be the
 *  same as the quaternion originally supplied.
 * @param {quat} out Quaternion to receive the rotation component
 * @param {mat4} mat Matrix to be decomposed (input)
 * @return {quat} out
 */
function getRotation(out, mat) {
  // Algorithm taken from http://www.euclideanspace.com/maths/geometry/rotations/conversions/matrixToQuaternion/index.htm
  let trace = mat[0] + mat[5] + mat[10];
  let S = 0;

  if (trace > 0) {
    S = Math.sqrt(trace + 1.0) * 2;
    out[3] = 0.25 * S;
    out[0] = (mat[6] - mat[9]) / S;
    out[1] = (mat[8] - mat[2]) / S;
    out[2] = (mat[1] - mat[4]) / S;
  } else if ((mat[0] > mat[5])&(mat[0] > mat[10])) {
    S = Math.sqrt(1.0 + mat[0] - mat[5] - mat[10]) * 2;
    out[3] = (mat[6] - mat[9]) / S;
    out[0] = 0.25 * S;
    out[1] = (mat[1] + mat[4]) / S;
    out[2] = (mat[8] + mat[2]) / S;
  } else if (mat[5] > mat[10]) {
    S = Math.sqrt(1.0 + mat[5] - mat[0] - mat[10]) * 2;
    out[3] = (mat[8] - mat[2]) / S;
    out[0] = (mat[1] + mat[4]) / S;
    out[1] = 0.25 * S;
    out[2] = (mat[6] + mat[9]) / S;
  } else {
    S = Math.sqrt(1.0 + mat[10] - mat[0] - mat[5]) * 2;
    out[3] = (mat[1] - mat[4]) / S;
    out[0] = (mat[8] + mat[2]) / S;
    out[1] = (mat[6] + mat[9]) / S;
    out[2] = 0.25 * S;
  }

  return out;
}

/**
 * Creates a matrix from a quaternion rotation, vector translation and vector scale
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.translate(dest, vec);
 *     let quatMat = mat4.create();
 *     quat4.toMat4(quat, quatMat);
 *     mat4.multiply(dest, quatMat);
 *     mat4.scale(dest, scale)
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {quat4} q Rotation quaternion
 * @param {vec3} v Translation vector
 * @param {vec3} s Scaling vector
 * @returns {mat4} out
 */
function fromRotationTranslationScale(out, q, v, s) {
  // Quaternion math
  let x = q[0], y = q[1], z = q[2], w = q[3];
  let x2 = x + x;
  let y2 = y + y;
  let z2 = z + z;

  let xx = x * x2;
  let xy = x * y2;
  let xz = x * z2;
  let yy = y * y2;
  let yz = y * z2;
  let zz = z * z2;
  let wx = w * x2;
  let wy = w * y2;
  let wz = w * z2;
  let sx = s[0];
  let sy = s[1];
  let sz = s[2];

  out[0] = (1 - (yy + zz)) * sx;
  out[1] = (xy + wz) * sx;
  out[2] = (xz - wy) * sx;
  out[3] = 0;
  out[4] = (xy - wz) * sy;
  out[5] = (1 - (xx + zz)) * sy;
  out[6] = (yz + wx) * sy;
  out[7] = 0;
  out[8] = (xz + wy) * sz;
  out[9] = (yz - wx) * sz;
  out[10] = (1 - (xx + yy)) * sz;
  out[11] = 0;
  out[12] = v[0];
  out[13] = v[1];
  out[14] = v[2];
  out[15] = 1;

  return out;
}

/**
 * Creates a matrix from a quaternion rotation, vector translation and vector scale, rotating and scaling around the given origin
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.translate(dest, vec);
 *     mat4.translate(dest, origin);
 *     let quatMat = mat4.create();
 *     quat4.toMat4(quat, quatMat);
 *     mat4.multiply(dest, quatMat);
 *     mat4.scale(dest, scale)
 *     mat4.translate(dest, negativeOrigin);
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {quat4} q Rotation quaternion
 * @param {vec3} v Translation vector
 * @param {vec3} s Scaling vector
 * @param {vec3} o The origin vector around which to scale and rotate
 * @returns {mat4} out
 */
function fromRotationTranslationScaleOrigin(out, q, v, s, o) {
  // Quaternion math
  let x = q[0], y = q[1], z = q[2], w = q[3];
  let x2 = x + x;
  let y2 = y + y;
  let z2 = z + z;

  let xx = x * x2;
  let xy = x * y2;
  let xz = x * z2;
  let yy = y * y2;
  let yz = y * z2;
  let zz = z * z2;
  let wx = w * x2;
  let wy = w * y2;
  let wz = w * z2;

  let sx = s[0];
  let sy = s[1];
  let sz = s[2];

  let ox = o[0];
  let oy = o[1];
  let oz = o[2];

  out[0] = (1 - (yy + zz)) * sx;
  out[1] = (xy + wz) * sx;
  out[2] = (xz - wy) * sx;
  out[3] = 0;
  out[4] = (xy - wz) * sy;
  out[5] = (1 - (xx + zz)) * sy;
  out[6] = (yz + wx) * sy;
  out[7] = 0;
  out[8] = (xz + wy) * sz;
  out[9] = (yz - wx) * sz;
  out[10] = (1 - (xx + yy)) * sz;
  out[11] = 0;
  out[12] = v[0] + ox - (out[0] * ox + out[4] * oy + out[8] * oz);
  out[13] = v[1] + oy - (out[1] * ox + out[5] * oy + out[9] * oz);
  out[14] = v[2] + oz - (out[2] * ox + out[6] * oy + out[10] * oz);
  out[15] = 1;

  return out;
}

/**
 * Calculates a 4x4 matrix from the given quaternion
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {quat} q Quaternion to create matrix from
 *
 * @returns {mat4} out
 */
function fromQuat(out, q) {
  let x = q[0], y = q[1], z = q[2], w = q[3];
  let x2 = x + x;
  let y2 = y + y;
  let z2 = z + z;

  let xx = x * x2;
  let yx = y * x2;
  let yy = y * y2;
  let zx = z * x2;
  let zy = z * y2;
  let zz = z * z2;
  let wx = w * x2;
  let wy = w * y2;
  let wz = w * z2;

  out[0] = 1 - yy - zz;
  out[1] = yx + wz;
  out[2] = zx - wy;
  out[3] = 0;

  out[4] = yx - wz;
  out[5] = 1 - xx - zz;
  out[6] = zy + wx;
  out[7] = 0;

  out[8] = zx + wy;
  out[9] = zy - wx;
  out[10] = 1 - xx - yy;
  out[11] = 0;

  out[12] = 0;
  out[13] = 0;
  out[14] = 0;
  out[15] = 1;

  return out;
}

/**
 * Generates a frustum matrix with the given bounds
 *
 * @param {mat4} out mat4 frustum matrix will be written into
 * @param {Number} left Left bound of the frustum
 * @param {Number} right Right bound of the frustum
 * @param {Number} bottom Bottom bound of the frustum
 * @param {Number} top Top bound of the frustum
 * @param {Number} near Near bound of the frustum
 * @param {Number} far Far bound of the frustum
 * @returns {mat4} out
 */
function frustum(out, left, right, bottom, top, near, far) {
  let rl = 1 / (right - left);
  let tb = 1 / (top - bottom);
  let nf = 1 / (near - far);
  out[0] = (near * 2) * rl;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 0;
  out[5] = (near * 2) * tb;
  out[6] = 0;
  out[7] = 0;
  out[8] = (right + left) * rl;
  out[9] = (top + bottom) * tb;
  out[10] = (far + near) * nf;
  out[11] = -1;
  out[12] = 0;
  out[13] = 0;
  out[14] = (far * near * 2) * nf;
  out[15] = 0;
  return out;
}

/**
 * Generates a perspective projection matrix with the given bounds
 *
 * @param {mat4} out mat4 frustum matrix will be written into
 * @param {number} fovy Vertical field of view in radians
 * @param {number} aspect Aspect ratio. typically viewport width/height
 * @param {number} near Near bound of the frustum
 * @param {number} far Far bound of the frustum
 * @returns {mat4} out
 */
function perspective(out, fovy, aspect, near, far) {
  let f = 1.0 / Math.tan(fovy / 2);
  let nf = 1 / (near - far);
  out[0] = f / aspect;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 0;
  out[5] = f;
  out[6] = 0;
  out[7] = 0;
  out[8] = 0;
  out[9] = 0;
  out[10] = (far + near) * nf;
  out[11] = -1;
  out[12] = 0;
  out[13] = 0;
  out[14] = (2 * far * near) * nf;
  out[15] = 0;
  return out;
}

/**
 * Generates a perspective projection matrix with the given field of view.
 * This is primarily useful for generating projection matrices to be used
 * with the still experiemental WebVR API.
 *
 * @param {mat4} out mat4 frustum matrix will be written into
 * @param {Object} fov Object containing the following values: upDegrees, downDegrees, leftDegrees, rightDegrees
 * @param {number} near Near bound of the frustum
 * @param {number} far Far bound of the frustum
 * @returns {mat4} out
 */
function perspectiveFromFieldOfView(out, fov, near, far) {
  let upTan = Math.tan(fov.upDegrees * Math.PI/180.0);
  let downTan = Math.tan(fov.downDegrees * Math.PI/180.0);
  let leftTan = Math.tan(fov.leftDegrees * Math.PI/180.0);
  let rightTan = Math.tan(fov.rightDegrees * Math.PI/180.0);
  let xScale = 2.0 / (leftTan + rightTan);
  let yScale = 2.0 / (upTan + downTan);

  out[0] = xScale;
  out[1] = 0.0;
  out[2] = 0.0;
  out[3] = 0.0;
  out[4] = 0.0;
  out[5] = yScale;
  out[6] = 0.0;
  out[7] = 0.0;
  out[8] = -((leftTan - rightTan) * xScale * 0.5);
  out[9] = ((upTan - downTan) * yScale * 0.5);
  out[10] = far / (near - far);
  out[11] = -1.0;
  out[12] = 0.0;
  out[13] = 0.0;
  out[14] = (far * near) / (near - far);
  out[15] = 0.0;
  return out;
}

/**
 * Generates a orthogonal projection matrix with the given bounds
 *
 * @param {mat4} out mat4 frustum matrix will be written into
 * @param {number} left Left bound of the frustum
 * @param {number} right Right bound of the frustum
 * @param {number} bottom Bottom bound of the frustum
 * @param {number} top Top bound of the frustum
 * @param {number} near Near bound of the frustum
 * @param {number} far Far bound of the frustum
 * @returns {mat4} out
 */
function ortho(out, left, right, bottom, top, near, far) {
  let lr = 1 / (left - right);
  let bt = 1 / (bottom - top);
  let nf = 1 / (near - far);
  out[0] = -2 * lr;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 0;
  out[5] = -2 * bt;
  out[6] = 0;
  out[7] = 0;
  out[8] = 0;
  out[9] = 0;
  out[10] = 2 * nf;
  out[11] = 0;
  out[12] = (left + right) * lr;
  out[13] = (top + bottom) * bt;
  out[14] = (far + near) * nf;
  out[15] = 1;
  return out;
}

/**
 * Generates a look-at matrix with the given eye position, focal point, and up axis
 *
 * @param {mat4} out mat4 frustum matrix will be written into
 * @param {vec3} eye Position of the viewer
 * @param {vec3} center Point the viewer is looking at
 * @param {vec3} up vec3 pointing up
 * @returns {mat4} out
 */
function lookAt(out, eye, center, up) {
  let x0, x1, x2, y0, y1, y2, z0, z1, z2, len;
  let eyex = eye[0];
  let eyey = eye[1];
  let eyez = eye[2];
  let upx = up[0];
  let upy = up[1];
  let upz = up[2];
  let centerx = center[0];
  let centery = center[1];
  let centerz = center[2];

  if (Math.abs(eyex - centerx) < __WEBPACK_IMPORTED_MODULE_0__common__["EPSILON"] &&
      Math.abs(eyey - centery) < __WEBPACK_IMPORTED_MODULE_0__common__["EPSILON"] &&
      Math.abs(eyez - centerz) < __WEBPACK_IMPORTED_MODULE_0__common__["EPSILON"]) {
    return mat4.identity(out);
  }

  z0 = eyex - centerx;
  z1 = eyey - centery;
  z2 = eyez - centerz;

  len = 1 / Math.sqrt(z0 * z0 + z1 * z1 + z2 * z2);
  z0 *= len;
  z1 *= len;
  z2 *= len;

  x0 = upy * z2 - upz * z1;
  x1 = upz * z0 - upx * z2;
  x2 = upx * z1 - upy * z0;
  len = Math.sqrt(x0 * x0 + x1 * x1 + x2 * x2);
  if (!len) {
    x0 = 0;
    x1 = 0;
    x2 = 0;
  } else {
    len = 1 / len;
    x0 *= len;
    x1 *= len;
    x2 *= len;
  }

  y0 = z1 * x2 - z2 * x1;
  y1 = z2 * x0 - z0 * x2;
  y2 = z0 * x1 - z1 * x0;

  len = Math.sqrt(y0 * y0 + y1 * y1 + y2 * y2);
  if (!len) {
    y0 = 0;
    y1 = 0;
    y2 = 0;
  } else {
    len = 1 / len;
    y0 *= len;
    y1 *= len;
    y2 *= len;
  }

  out[0] = x0;
  out[1] = y0;
  out[2] = z0;
  out[3] = 0;
  out[4] = x1;
  out[5] = y1;
  out[6] = z1;
  out[7] = 0;
  out[8] = x2;
  out[9] = y2;
  out[10] = z2;
  out[11] = 0;
  out[12] = -(x0 * eyex + x1 * eyey + x2 * eyez);
  out[13] = -(y0 * eyex + y1 * eyey + y2 * eyez);
  out[14] = -(z0 * eyex + z1 * eyey + z2 * eyez);
  out[15] = 1;

  return out;
}

/**
 * Generates a matrix that makes something look at something else.
 *
 * @param {mat4} out mat4 frustum matrix will be written into
 * @param {vec3} eye Position of the viewer
 * @param {vec3} center Point the viewer is looking at
 * @param {vec3} up vec3 pointing up
 * @returns {mat4} out
 */
function targetTo(out, eye, target, up) {
  let eyex = eye[0],
      eyey = eye[1],
      eyez = eye[2],
      upx = up[0],
      upy = up[1],
      upz = up[2];

  let z0 = eyex - target[0],
      z1 = eyey - target[1],
      z2 = eyez - target[2];

  let len = z0*z0 + z1*z1 + z2*z2;
  if (len > 0) {
    len = 1 / Math.sqrt(len);
    z0 *= len;
    z1 *= len;
    z2 *= len;
  }

  let x0 = upy * z2 - upz * z1,
      x1 = upz * z0 - upx * z2,
      x2 = upx * z1 - upy * z0;

  out[0] = x0;
  out[1] = x1;
  out[2] = x2;
  out[3] = 0;
  out[4] = z1 * x2 - z2 * x1;
  out[5] = z2 * x0 - z0 * x2;
  out[6] = z0 * x1 - z1 * x0;
  out[7] = 0;
  out[8] = z0;
  out[9] = z1;
  out[10] = z2;
  out[11] = 0;
  out[12] = eyex;
  out[13] = eyey;
  out[14] = eyez;
  out[15] = 1;
  return out;
};

/**
 * Returns a string representation of a mat4
 *
 * @param {mat4} a matrix to represent as a string
 * @returns {String} string representation of the matrix
 */
function str(a) {
  return 'mat4(' + a[0] + ', ' + a[1] + ', ' + a[2] + ', ' + a[3] + ', ' +
          a[4] + ', ' + a[5] + ', ' + a[6] + ', ' + a[7] + ', ' +
          a[8] + ', ' + a[9] + ', ' + a[10] + ', ' + a[11] + ', ' +
          a[12] + ', ' + a[13] + ', ' + a[14] + ', ' + a[15] + ')';
}

/**
 * Returns Frobenius norm of a mat4
 *
 * @param {mat4} a the matrix to calculate Frobenius norm of
 * @returns {Number} Frobenius norm
 */
function frob(a) {
  return(Math.sqrt(Math.pow(a[0], 2) + Math.pow(a[1], 2) + Math.pow(a[2], 2) + Math.pow(a[3], 2) + Math.pow(a[4], 2) + Math.pow(a[5], 2) + Math.pow(a[6], 2) + Math.pow(a[7], 2) + Math.pow(a[8], 2) + Math.pow(a[9], 2) + Math.pow(a[10], 2) + Math.pow(a[11], 2) + Math.pow(a[12], 2) + Math.pow(a[13], 2) + Math.pow(a[14], 2) + Math.pow(a[15], 2) ))
}

/**
 * Adds two mat4's
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the first operand
 * @param {mat4} b the second operand
 * @returns {mat4} out
 */
function add(out, a, b) {
  out[0] = a[0] + b[0];
  out[1] = a[1] + b[1];
  out[2] = a[2] + b[2];
  out[3] = a[3] + b[3];
  out[4] = a[4] + b[4];
  out[5] = a[5] + b[5];
  out[6] = a[6] + b[6];
  out[7] = a[7] + b[7];
  out[8] = a[8] + b[8];
  out[9] = a[9] + b[9];
  out[10] = a[10] + b[10];
  out[11] = a[11] + b[11];
  out[12] = a[12] + b[12];
  out[13] = a[13] + b[13];
  out[14] = a[14] + b[14];
  out[15] = a[15] + b[15];
  return out;
}

/**
 * Subtracts matrix b from matrix a
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the first operand
 * @param {mat4} b the second operand
 * @returns {mat4} out
 */
function subtract(out, a, b) {
  out[0] = a[0] - b[0];
  out[1] = a[1] - b[1];
  out[2] = a[2] - b[2];
  out[3] = a[3] - b[3];
  out[4] = a[4] - b[4];
  out[5] = a[5] - b[5];
  out[6] = a[6] - b[6];
  out[7] = a[7] - b[7];
  out[8] = a[8] - b[8];
  out[9] = a[9] - b[9];
  out[10] = a[10] - b[10];
  out[11] = a[11] - b[11];
  out[12] = a[12] - b[12];
  out[13] = a[13] - b[13];
  out[14] = a[14] - b[14];
  out[15] = a[15] - b[15];
  return out;
}

/**
 * Multiply each element of the matrix by a scalar.
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the matrix to scale
 * @param {Number} b amount to scale the matrix's elements by
 * @returns {mat4} out
 */
function multiplyScalar(out, a, b) {
  out[0] = a[0] * b;
  out[1] = a[1] * b;
  out[2] = a[2] * b;
  out[3] = a[3] * b;
  out[4] = a[4] * b;
  out[5] = a[5] * b;
  out[6] = a[6] * b;
  out[7] = a[7] * b;
  out[8] = a[8] * b;
  out[9] = a[9] * b;
  out[10] = a[10] * b;
  out[11] = a[11] * b;
  out[12] = a[12] * b;
  out[13] = a[13] * b;
  out[14] = a[14] * b;
  out[15] = a[15] * b;
  return out;
}

/**
 * Adds two mat4's after multiplying each element of the second operand by a scalar value.
 *
 * @param {mat4} out the receiving vector
 * @param {mat4} a the first operand
 * @param {mat4} b the second operand
 * @param {Number} scale the amount to scale b's elements by before adding
 * @returns {mat4} out
 */
function multiplyScalarAndAdd(out, a, b, scale) {
  out[0] = a[0] + (b[0] * scale);
  out[1] = a[1] + (b[1] * scale);
  out[2] = a[2] + (b[2] * scale);
  out[3] = a[3] + (b[3] * scale);
  out[4] = a[4] + (b[4] * scale);
  out[5] = a[5] + (b[5] * scale);
  out[6] = a[6] + (b[6] * scale);
  out[7] = a[7] + (b[7] * scale);
  out[8] = a[8] + (b[8] * scale);
  out[9] = a[9] + (b[9] * scale);
  out[10] = a[10] + (b[10] * scale);
  out[11] = a[11] + (b[11] * scale);
  out[12] = a[12] + (b[12] * scale);
  out[13] = a[13] + (b[13] * scale);
  out[14] = a[14] + (b[14] * scale);
  out[15] = a[15] + (b[15] * scale);
  return out;
}

/**
 * Returns whether or not the matrices have exactly the same elements in the same position (when compared with ===)
 *
 * @param {mat4} a The first matrix.
 * @param {mat4} b The second matrix.
 * @returns {Boolean} True if the matrices are equal, false otherwise.
 */
function exactEquals(a, b) {
  return a[0] === b[0] && a[1] === b[1] && a[2] === b[2] && a[3] === b[3] &&
         a[4] === b[4] && a[5] === b[5] && a[6] === b[6] && a[7] === b[7] &&
         a[8] === b[8] && a[9] === b[9] && a[10] === b[10] && a[11] === b[11] &&
         a[12] === b[12] && a[13] === b[13] && a[14] === b[14] && a[15] === b[15];
}

/**
 * Returns whether or not the matrices have approximately the same elements in the same position.
 *
 * @param {mat4} a The first matrix.
 * @param {mat4} b The second matrix.
 * @returns {Boolean} True if the matrices are equal, false otherwise.
 */
function equals(a, b) {
  let a0  = a[0],  a1  = a[1],  a2  = a[2],  a3  = a[3];
  let a4  = a[4],  a5  = a[5],  a6  = a[6],  a7  = a[7];
  let a8  = a[8],  a9  = a[9],  a10 = a[10], a11 = a[11];
  let a12 = a[12], a13 = a[13], a14 = a[14], a15 = a[15];

  let b0  = b[0],  b1  = b[1],  b2  = b[2],  b3  = b[3];
  let b4  = b[4],  b5  = b[5],  b6  = b[6],  b7  = b[7];
  let b8  = b[8],  b9  = b[9],  b10 = b[10], b11 = b[11];
  let b12 = b[12], b13 = b[13], b14 = b[14], b15 = b[15];

  return (Math.abs(a0 - b0) <= __WEBPACK_IMPORTED_MODULE_0__common__["EPSILON"]*Math.max(1.0, Math.abs(a0), Math.abs(b0)) &&
          Math.abs(a1 - b1) <= __WEBPACK_IMPORTED_MODULE_0__common__["EPSILON"]*Math.max(1.0, Math.abs(a1), Math.abs(b1)) &&
          Math.abs(a2 - b2) <= __WEBPACK_IMPORTED_MODULE_0__common__["EPSILON"]*Math.max(1.0, Math.abs(a2), Math.abs(b2)) &&
          Math.abs(a3 - b3) <= __WEBPACK_IMPORTED_MODULE_0__common__["EPSILON"]*Math.max(1.0, Math.abs(a3), Math.abs(b3)) &&
          Math.abs(a4 - b4) <= __WEBPACK_IMPORTED_MODULE_0__common__["EPSILON"]*Math.max(1.0, Math.abs(a4), Math.abs(b4)) &&
          Math.abs(a5 - b5) <= __WEBPACK_IMPORTED_MODULE_0__common__["EPSILON"]*Math.max(1.0, Math.abs(a5), Math.abs(b5)) &&
          Math.abs(a6 - b6) <= __WEBPACK_IMPORTED_MODULE_0__common__["EPSILON"]*Math.max(1.0, Math.abs(a6), Math.abs(b6)) &&
          Math.abs(a7 - b7) <= __WEBPACK_IMPORTED_MODULE_0__common__["EPSILON"]*Math.max(1.0, Math.abs(a7), Math.abs(b7)) &&
          Math.abs(a8 - b8) <= __WEBPACK_IMPORTED_MODULE_0__common__["EPSILON"]*Math.max(1.0, Math.abs(a8), Math.abs(b8)) &&
          Math.abs(a9 - b9) <= __WEBPACK_IMPORTED_MODULE_0__common__["EPSILON"]*Math.max(1.0, Math.abs(a9), Math.abs(b9)) &&
          Math.abs(a10 - b10) <= __WEBPACK_IMPORTED_MODULE_0__common__["EPSILON"]*Math.max(1.0, Math.abs(a10), Math.abs(b10)) &&
          Math.abs(a11 - b11) <= __WEBPACK_IMPORTED_MODULE_0__common__["EPSILON"]*Math.max(1.0, Math.abs(a11), Math.abs(b11)) &&
          Math.abs(a12 - b12) <= __WEBPACK_IMPORTED_MODULE_0__common__["EPSILON"]*Math.max(1.0, Math.abs(a12), Math.abs(b12)) &&
          Math.abs(a13 - b13) <= __WEBPACK_IMPORTED_MODULE_0__common__["EPSILON"]*Math.max(1.0, Math.abs(a13), Math.abs(b13)) &&
          Math.abs(a14 - b14) <= __WEBPACK_IMPORTED_MODULE_0__common__["EPSILON"]*Math.max(1.0, Math.abs(a14), Math.abs(b14)) &&
          Math.abs(a15 - b15) <= __WEBPACK_IMPORTED_MODULE_0__common__["EPSILON"]*Math.max(1.0, Math.abs(a15), Math.abs(b15)));
}

/**
 * Alias for {@link mat4.multiply}
 * @function
 */
const mul = multiply;
/* harmony export (immutable) */ __webpack_exports__["mul"] = mul;


/**
 * Alias for {@link mat4.subtract}
 * @function
 */
const sub = subtract;
/* harmony export (immutable) */ __webpack_exports__["sub"] = sub;



/***/ }),
/* 118 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["create"] = create;
/* harmony export (immutable) */ __webpack_exports__["identity"] = identity;
/* harmony export (immutable) */ __webpack_exports__["setAxisAngle"] = setAxisAngle;
/* harmony export (immutable) */ __webpack_exports__["getAxisAngle"] = getAxisAngle;
/* harmony export (immutable) */ __webpack_exports__["multiply"] = multiply;
/* harmony export (immutable) */ __webpack_exports__["rotateX"] = rotateX;
/* harmony export (immutable) */ __webpack_exports__["rotateY"] = rotateY;
/* harmony export (immutable) */ __webpack_exports__["rotateZ"] = rotateZ;
/* harmony export (immutable) */ __webpack_exports__["calculateW"] = calculateW;
/* harmony export (immutable) */ __webpack_exports__["slerp"] = slerp;
/* harmony export (immutable) */ __webpack_exports__["invert"] = invert;
/* harmony export (immutable) */ __webpack_exports__["conjugate"] = conjugate;
/* harmony export (immutable) */ __webpack_exports__["fromMat3"] = fromMat3;
/* harmony export (immutable) */ __webpack_exports__["fromEuler"] = fromEuler;
/* harmony export (immutable) */ __webpack_exports__["str"] = str;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mat3__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__vec3__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__vec4__ = __webpack_require__(48);
/* Copyright (c) 2015, Brandon Jones, Colin MacKenzie IV.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE. */






/**
 * Quaternion
 * @module quat
 */

/**
 * Creates a new identity quat
 *
 * @returns {quat} a new quaternion
 */
function create() {
  let out = new __WEBPACK_IMPORTED_MODULE_0__common__["ARRAY_TYPE"](4);
  out[0] = 0;
  out[1] = 0;
  out[2] = 0;
  out[3] = 1;
  return out;
}

/**
 * Set a quat to the identity quaternion
 *
 * @param {quat} out the receiving quaternion
 * @returns {quat} out
 */
function identity(out) {
  out[0] = 0;
  out[1] = 0;
  out[2] = 0;
  out[3] = 1;
  return out;
}

/**
 * Sets a quat from the given angle and rotation axis,
 * then returns it.
 *
 * @param {quat} out the receiving quaternion
 * @param {vec3} axis the axis around which to rotate
 * @param {Number} rad the angle in radians
 * @returns {quat} out
 **/
function setAxisAngle(out, axis, rad) {
  rad = rad * 0.5;
  let s = Math.sin(rad);
  out[0] = s * axis[0];
  out[1] = s * axis[1];
  out[2] = s * axis[2];
  out[3] = Math.cos(rad);
  return out;
}

/**
 * Gets the rotation axis and angle for a given
 *  quaternion. If a quaternion is created with
 *  setAxisAngle, this method will return the same
 *  values as providied in the original parameter list
 *  OR functionally equivalent values.
 * Example: The quaternion formed by axis [0, 0, 1] and
 *  angle -90 is the same as the quaternion formed by
 *  [0, 0, 1] and 270. This method favors the latter.
 * @param  {vec3} out_axis  Vector receiving the axis of rotation
 * @param  {quat} q     Quaternion to be decomposed
 * @return {Number}     Angle, in radians, of the rotation
 */
function getAxisAngle(out_axis, q) {
  let rad = Math.acos(q[3]) * 2.0;
  let s = Math.sin(rad / 2.0);
  if (s != 0.0) {
    out_axis[0] = q[0] / s;
    out_axis[1] = q[1] / s;
    out_axis[2] = q[2] / s;
  } else {
    // If s is zero, return any axis (no rotation - axis does not matter)
    out_axis[0] = 1;
    out_axis[1] = 0;
    out_axis[2] = 0;
  }
  return rad;
}

/**
 * Multiplies two quat's
 *
 * @param {quat} out the receiving quaternion
 * @param {quat} a the first operand
 * @param {quat} b the second operand
 * @returns {quat} out
 */
function multiply(out, a, b) {
  let ax = a[0], ay = a[1], az = a[2], aw = a[3];
  let bx = b[0], by = b[1], bz = b[2], bw = b[3];

  out[0] = ax * bw + aw * bx + ay * bz - az * by;
  out[1] = ay * bw + aw * by + az * bx - ax * bz;
  out[2] = az * bw + aw * bz + ax * by - ay * bx;
  out[3] = aw * bw - ax * bx - ay * by - az * bz;
  return out;
}

/**
 * Rotates a quaternion by the given angle about the X axis
 *
 * @param {quat} out quat receiving operation result
 * @param {quat} a quat to rotate
 * @param {number} rad angle (in radians) to rotate
 * @returns {quat} out
 */
function rotateX(out, a, rad) {
  rad *= 0.5;

  let ax = a[0], ay = a[1], az = a[2], aw = a[3];
  let bx = Math.sin(rad), bw = Math.cos(rad);

  out[0] = ax * bw + aw * bx;
  out[1] = ay * bw + az * bx;
  out[2] = az * bw - ay * bx;
  out[3] = aw * bw - ax * bx;
  return out;
}

/**
 * Rotates a quaternion by the given angle about the Y axis
 *
 * @param {quat} out quat receiving operation result
 * @param {quat} a quat to rotate
 * @param {number} rad angle (in radians) to rotate
 * @returns {quat} out
 */
function rotateY(out, a, rad) {
  rad *= 0.5;

  let ax = a[0], ay = a[1], az = a[2], aw = a[3];
  let by = Math.sin(rad), bw = Math.cos(rad);

  out[0] = ax * bw - az * by;
  out[1] = ay * bw + aw * by;
  out[2] = az * bw + ax * by;
  out[3] = aw * bw - ay * by;
  return out;
}

/**
 * Rotates a quaternion by the given angle about the Z axis
 *
 * @param {quat} out quat receiving operation result
 * @param {quat} a quat to rotate
 * @param {number} rad angle (in radians) to rotate
 * @returns {quat} out
 */
function rotateZ(out, a, rad) {
  rad *= 0.5;

  let ax = a[0], ay = a[1], az = a[2], aw = a[3];
  let bz = Math.sin(rad), bw = Math.cos(rad);

  out[0] = ax * bw + ay * bz;
  out[1] = ay * bw - ax * bz;
  out[2] = az * bw + aw * bz;
  out[3] = aw * bw - az * bz;
  return out;
}

/**
 * Calculates the W component of a quat from the X, Y, and Z components.
 * Assumes that quaternion is 1 unit in length.
 * Any existing W component will be ignored.
 *
 * @param {quat} out the receiving quaternion
 * @param {quat} a quat to calculate W component of
 * @returns {quat} out
 */
function calculateW(out, a) {
  let x = a[0], y = a[1], z = a[2];

  out[0] = x;
  out[1] = y;
  out[2] = z;
  out[3] = Math.sqrt(Math.abs(1.0 - x * x - y * y - z * z));
  return out;
}

/**
 * Performs a spherical linear interpolation between two quat
 *
 * @param {quat} out the receiving quaternion
 * @param {quat} a the first operand
 * @param {quat} b the second operand
 * @param {Number} t interpolation amount between the two inputs
 * @returns {quat} out
 */
function slerp(out, a, b, t) {
  // benchmarks:
  //    http://jsperf.com/quaternion-slerp-implementations
  let ax = a[0], ay = a[1], az = a[2], aw = a[3];
  let bx = b[0], by = b[1], bz = b[2], bw = b[3];

  let omega, cosom, sinom, scale0, scale1;

  // calc cosine
  cosom = ax * bx + ay * by + az * bz + aw * bw;
  // adjust signs (if necessary)
  if ( cosom < 0.0 ) {
    cosom = -cosom;
    bx = - bx;
    by = - by;
    bz = - bz;
    bw = - bw;
  }
  // calculate coefficients
  if ( (1.0 - cosom) > 0.000001 ) {
    // standard case (slerp)
    omega  = Math.acos(cosom);
    sinom  = Math.sin(omega);
    scale0 = Math.sin((1.0 - t) * omega) / sinom;
    scale1 = Math.sin(t * omega) / sinom;
  } else {
    // "from" and "to" quaternions are very close
    //  ... so we can do a linear interpolation
    scale0 = 1.0 - t;
    scale1 = t;
  }
  // calculate final values
  out[0] = scale0 * ax + scale1 * bx;
  out[1] = scale0 * ay + scale1 * by;
  out[2] = scale0 * az + scale1 * bz;
  out[3] = scale0 * aw + scale1 * bw;

  return out;
}

/**
 * Calculates the inverse of a quat
 *
 * @param {quat} out the receiving quaternion
 * @param {quat} a quat to calculate inverse of
 * @returns {quat} out
 */
function invert(out, a) {
  let a0 = a[0], a1 = a[1], a2 = a[2], a3 = a[3];
  let dot = a0*a0 + a1*a1 + a2*a2 + a3*a3;
  let invDot = dot ? 1.0/dot : 0;

  // TODO: Would be faster to return [0,0,0,0] immediately if dot == 0

  out[0] = -a0*invDot;
  out[1] = -a1*invDot;
  out[2] = -a2*invDot;
  out[3] = a3*invDot;
  return out;
}

/**
 * Calculates the conjugate of a quat
 * If the quaternion is normalized, this function is faster than quat.inverse and produces the same result.
 *
 * @param {quat} out the receiving quaternion
 * @param {quat} a quat to calculate conjugate of
 * @returns {quat} out
 */
function conjugate(out, a) {
  out[0] = -a[0];
  out[1] = -a[1];
  out[2] = -a[2];
  out[3] = a[3];
  return out;
}

/**
 * Creates a quaternion from the given 3x3 rotation matrix.
 *
 * NOTE: The resultant quaternion is not normalized, so you should be sure
 * to renormalize the quaternion yourself where necessary.
 *
 * @param {quat} out the receiving quaternion
 * @param {mat3} m rotation matrix
 * @returns {quat} out
 * @function
 */
function fromMat3(out, m) {
  // Algorithm in Ken Shoemake's article in 1987 SIGGRAPH course notes
  // article "Quaternion Calculus and Fast Animation".
  let fTrace = m[0] + m[4] + m[8];
  let fRoot;

  if ( fTrace > 0.0 ) {
    // |w| > 1/2, may as well choose w > 1/2
    fRoot = Math.sqrt(fTrace + 1.0);  // 2w
    out[3] = 0.5 * fRoot;
    fRoot = 0.5/fRoot;  // 1/(4w)
    out[0] = (m[5]-m[7])*fRoot;
    out[1] = (m[6]-m[2])*fRoot;
    out[2] = (m[1]-m[3])*fRoot;
  } else {
    // |w| <= 1/2
    let i = 0;
    if ( m[4] > m[0] )
      i = 1;
    if ( m[8] > m[i*3+i] )
      i = 2;
    let j = (i+1)%3;
    let k = (i+2)%3;

    fRoot = Math.sqrt(m[i*3+i]-m[j*3+j]-m[k*3+k] + 1.0);
    out[i] = 0.5 * fRoot;
    fRoot = 0.5 / fRoot;
    out[3] = (m[j*3+k] - m[k*3+j]) * fRoot;
    out[j] = (m[j*3+i] + m[i*3+j]) * fRoot;
    out[k] = (m[k*3+i] + m[i*3+k]) * fRoot;
  }

  return out;
}

/**
 * Creates a quaternion from the given euler angle x, y, z.
 *
 * @param {quat} out the receiving quaternion
 * @param {x} Angle to rotate around X axis in degrees.
 * @param {y} Angle to rotate around Y axis in degrees.
 * @param {z} Angle to rotate around Z axis in degrees.
 * @returns {quat} out
 * @function
 */
function fromEuler(out, x, y, z) {
    let halfToRad = 0.5 * Math.PI / 180.0;
    x *= halfToRad;
    y *= halfToRad;
    z *= halfToRad;

    let sx = Math.sin(x);
    let cx = Math.cos(x);
    let sy = Math.sin(y);
    let cy = Math.cos(y);
    let sz = Math.sin(z);
    let cz = Math.cos(z);

    out[0] = sx * cy * cz - cx * sy * sz;
    out[1] = cx * sy * cz + sx * cy * sz;
    out[2] = cx * cy * sz - sx * sy * cz;
    out[3] = cx * cy * cz + sx * sy * sz;

    return out;
}

/**
 * Returns a string representation of a quatenion
 *
 * @param {quat} a vector to represent as a string
 * @returns {String} string representation of the vector
 */
function str(a) {
  return 'quat(' + a[0] + ', ' + a[1] + ', ' + a[2] + ', ' + a[3] + ')';
}

/**
 * Creates a new quat initialized with values from an existing quaternion
 *
 * @param {quat} a quaternion to clone
 * @returns {quat} a new quaternion
 * @function
 */
const clone = __WEBPACK_IMPORTED_MODULE_3__vec4__["clone"];
/* harmony export (immutable) */ __webpack_exports__["clone"] = clone;


/**
 * Creates a new quat initialized with the given values
 *
 * @param {Number} x X component
 * @param {Number} y Y component
 * @param {Number} z Z component
 * @param {Number} w W component
 * @returns {quat} a new quaternion
 * @function
 */
const fromValues = __WEBPACK_IMPORTED_MODULE_3__vec4__["fromValues"];
/* harmony export (immutable) */ __webpack_exports__["fromValues"] = fromValues;


/**
 * Copy the values from one quat to another
 *
 * @param {quat} out the receiving quaternion
 * @param {quat} a the source quaternion
 * @returns {quat} out
 * @function
 */
const copy = __WEBPACK_IMPORTED_MODULE_3__vec4__["copy"];
/* harmony export (immutable) */ __webpack_exports__["copy"] = copy;


/**
 * Set the components of a quat to the given values
 *
 * @param {quat} out the receiving quaternion
 * @param {Number} x X component
 * @param {Number} y Y component
 * @param {Number} z Z component
 * @param {Number} w W component
 * @returns {quat} out
 * @function
 */
const set = __WEBPACK_IMPORTED_MODULE_3__vec4__["set"];
/* harmony export (immutable) */ __webpack_exports__["set"] = set;


/**
 * Adds two quat's
 *
 * @param {quat} out the receiving quaternion
 * @param {quat} a the first operand
 * @param {quat} b the second operand
 * @returns {quat} out
 * @function
 */
const add = __WEBPACK_IMPORTED_MODULE_3__vec4__["add"];
/* harmony export (immutable) */ __webpack_exports__["add"] = add;


/**
 * Alias for {@link quat.multiply}
 * @function
 */
const mul = multiply;
/* harmony export (immutable) */ __webpack_exports__["mul"] = mul;


/**
 * Scales a quat by a scalar number
 *
 * @param {quat} out the receiving vector
 * @param {quat} a the vector to scale
 * @param {Number} b amount to scale the vector by
 * @returns {quat} out
 * @function
 */
const scale = __WEBPACK_IMPORTED_MODULE_3__vec4__["scale"];
/* harmony export (immutable) */ __webpack_exports__["scale"] = scale;


/**
 * Calculates the dot product of two quat's
 *
 * @param {quat} a the first operand
 * @param {quat} b the second operand
 * @returns {Number} dot product of a and b
 * @function
 */
const dot = __WEBPACK_IMPORTED_MODULE_3__vec4__["dot"];
/* harmony export (immutable) */ __webpack_exports__["dot"] = dot;


/**
 * Performs a linear interpolation between two quat's
 *
 * @param {quat} out the receiving quaternion
 * @param {quat} a the first operand
 * @param {quat} b the second operand
 * @param {Number} t interpolation amount between the two inputs
 * @returns {quat} out
 * @function
 */
const lerp = __WEBPACK_IMPORTED_MODULE_3__vec4__["lerp"];
/* harmony export (immutable) */ __webpack_exports__["lerp"] = lerp;


/**
 * Calculates the length of a quat
 *
 * @param {quat} a vector to calculate length of
 * @returns {Number} length of a
 */
const length = __WEBPACK_IMPORTED_MODULE_3__vec4__["length"];
/* harmony export (immutable) */ __webpack_exports__["length"] = length;


/**
 * Alias for {@link quat.length}
 * @function
 */
const len = length;
/* harmony export (immutable) */ __webpack_exports__["len"] = len;


/**
 * Calculates the squared length of a quat
 *
 * @param {quat} a vector to calculate squared length of
 * @returns {Number} squared length of a
 * @function
 */
const squaredLength = __WEBPACK_IMPORTED_MODULE_3__vec4__["squaredLength"];
/* harmony export (immutable) */ __webpack_exports__["squaredLength"] = squaredLength;


/**
 * Alias for {@link quat.squaredLength}
 * @function
 */
const sqrLen = squaredLength;
/* harmony export (immutable) */ __webpack_exports__["sqrLen"] = sqrLen;


/**
 * Normalize a quat
 *
 * @param {quat} out the receiving quaternion
 * @param {quat} a quaternion to normalize
 * @returns {quat} out
 * @function
 */
const normalize = __WEBPACK_IMPORTED_MODULE_3__vec4__["normalize"];
/* harmony export (immutable) */ __webpack_exports__["normalize"] = normalize;


/**
 * Returns whether or not the quaternions have exactly the same elements in the same position (when compared with ===)
 *
 * @param {quat} a The first quaternion.
 * @param {quat} b The second quaternion.
 * @returns {Boolean} True if the vectors are equal, false otherwise.
 */
const exactEquals = __WEBPACK_IMPORTED_MODULE_3__vec4__["exactEquals"];
/* harmony export (immutable) */ __webpack_exports__["exactEquals"] = exactEquals;


/**
 * Returns whether or not the quaternions have approximately the same elements in the same position.
 *
 * @param {quat} a The first vector.
 * @param {quat} b The second vector.
 * @returns {Boolean} True if the vectors are equal, false otherwise.
 */
const equals = __WEBPACK_IMPORTED_MODULE_3__vec4__["equals"];
/* harmony export (immutable) */ __webpack_exports__["equals"] = equals;


/**
 * Sets a quaternion to represent the shortest rotation from one
 * vector to another.
 *
 * Both vectors are assumed to be unit length.
 *
 * @param {quat} out the receiving quaternion.
 * @param {vec3} a the initial vector
 * @param {vec3} b the destination vector
 * @returns {quat} out
 */
const rotationTo = (function() {
  let tmpvec3 = __WEBPACK_IMPORTED_MODULE_2__vec3__["create"]();
  let xUnitVec3 = __WEBPACK_IMPORTED_MODULE_2__vec3__["fromValues"](1,0,0);
  let yUnitVec3 = __WEBPACK_IMPORTED_MODULE_2__vec3__["fromValues"](0,1,0);

  return function(out, a, b) {
    let dot = __WEBPACK_IMPORTED_MODULE_2__vec3__["dot"](a, b);
    if (dot < -0.999999) {
      __WEBPACK_IMPORTED_MODULE_2__vec3__["cross"](tmpvec3, xUnitVec3, a);
      if (__WEBPACK_IMPORTED_MODULE_2__vec3__["len"](tmpvec3) < 0.000001)
        __WEBPACK_IMPORTED_MODULE_2__vec3__["cross"](tmpvec3, yUnitVec3, a);
      __WEBPACK_IMPORTED_MODULE_2__vec3__["normalize"](tmpvec3, tmpvec3);
      setAxisAngle(out, tmpvec3, Math.PI);
      return out;
    } else if (dot > 0.999999) {
      out[0] = 0;
      out[1] = 0;
      out[2] = 0;
      out[3] = 1;
      return out;
    } else {
      __WEBPACK_IMPORTED_MODULE_2__vec3__["cross"](tmpvec3, a, b);
      out[0] = tmpvec3[0];
      out[1] = tmpvec3[1];
      out[2] = tmpvec3[2];
      out[3] = 1 + dot;
      return normalize(out, out);
    }
  };
})();
/* harmony export (immutable) */ __webpack_exports__["rotationTo"] = rotationTo;


/**
 * Performs a spherical linear interpolation with two control points
 *
 * @param {quat} out the receiving quaternion
 * @param {quat} a the first operand
 * @param {quat} b the second operand
 * @param {quat} c the third operand
 * @param {quat} d the fourth operand
 * @param {Number} t interpolation amount
 * @returns {quat} out
 */
const sqlerp = (function () {
  let temp1 = create();
  let temp2 = create();

  return function (out, a, b, c, d, t) {
    slerp(temp1, a, d, t);
    slerp(temp2, b, c, t);
    slerp(out, temp1, temp2, 2 * t * (1 - t));

    return out;
  };
}());
/* harmony export (immutable) */ __webpack_exports__["sqlerp"] = sqlerp;


/**
 * Sets the specified quaternion with values corresponding to the given
 * axes. Each axis is a vec3 and is expected to be unit length and
 * perpendicular to all other specified axes.
 *
 * @param {vec3} view  the vector representing the viewing direction
 * @param {vec3} right the vector representing the local "right" direction
 * @param {vec3} up    the vector representing the local "up" direction
 * @returns {quat} out
 */
const setAxes = (function() {
  let matr = __WEBPACK_IMPORTED_MODULE_1__mat3__["create"]();

  return function(out, view, right, up) {
    matr[0] = right[0];
    matr[3] = right[1];
    matr[6] = right[2];

    matr[1] = up[0];
    matr[4] = up[1];
    matr[7] = up[2];

    matr[2] = -view[0];
    matr[5] = -view[1];
    matr[8] = -view[2];

    return normalize(out, fromMat3(out, matr));
  };
})();
/* harmony export (immutable) */ __webpack_exports__["setAxes"] = setAxes;



/***/ }),
/* 119 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["create"] = create;
/* harmony export (immutable) */ __webpack_exports__["clone"] = clone;
/* harmony export (immutable) */ __webpack_exports__["fromValues"] = fromValues;
/* harmony export (immutable) */ __webpack_exports__["copy"] = copy;
/* harmony export (immutable) */ __webpack_exports__["set"] = set;
/* harmony export (immutable) */ __webpack_exports__["add"] = add;
/* harmony export (immutable) */ __webpack_exports__["subtract"] = subtract;
/* harmony export (immutable) */ __webpack_exports__["multiply"] = multiply;
/* harmony export (immutable) */ __webpack_exports__["divide"] = divide;
/* harmony export (immutable) */ __webpack_exports__["ceil"] = ceil;
/* harmony export (immutable) */ __webpack_exports__["floor"] = floor;
/* harmony export (immutable) */ __webpack_exports__["min"] = min;
/* harmony export (immutable) */ __webpack_exports__["max"] = max;
/* harmony export (immutable) */ __webpack_exports__["round"] = round;
/* harmony export (immutable) */ __webpack_exports__["scale"] = scale;
/* harmony export (immutable) */ __webpack_exports__["scaleAndAdd"] = scaleAndAdd;
/* harmony export (immutable) */ __webpack_exports__["distance"] = distance;
/* harmony export (immutable) */ __webpack_exports__["squaredDistance"] = squaredDistance;
/* harmony export (immutable) */ __webpack_exports__["length"] = length;
/* harmony export (immutable) */ __webpack_exports__["squaredLength"] = squaredLength;
/* harmony export (immutable) */ __webpack_exports__["negate"] = negate;
/* harmony export (immutable) */ __webpack_exports__["inverse"] = inverse;
/* harmony export (immutable) */ __webpack_exports__["normalize"] = normalize;
/* harmony export (immutable) */ __webpack_exports__["dot"] = dot;
/* harmony export (immutable) */ __webpack_exports__["cross"] = cross;
/* harmony export (immutable) */ __webpack_exports__["lerp"] = lerp;
/* harmony export (immutable) */ __webpack_exports__["random"] = random;
/* harmony export (immutable) */ __webpack_exports__["transformMat2"] = transformMat2;
/* harmony export (immutable) */ __webpack_exports__["transformMat2d"] = transformMat2d;
/* harmony export (immutable) */ __webpack_exports__["transformMat3"] = transformMat3;
/* harmony export (immutable) */ __webpack_exports__["transformMat4"] = transformMat4;
/* harmony export (immutable) */ __webpack_exports__["str"] = str;
/* harmony export (immutable) */ __webpack_exports__["exactEquals"] = exactEquals;
/* harmony export (immutable) */ __webpack_exports__["equals"] = equals;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common__ = __webpack_require__(3);
/* Copyright (c) 2015, Brandon Jones, Colin MacKenzie IV.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE. */



/**
 * 2 Dimensional Vector
 * @module vec2
 */

/**
 * Creates a new, empty vec2
 *
 * @returns {vec2} a new 2D vector
 */
function create() {
  let out = new __WEBPACK_IMPORTED_MODULE_0__common__["ARRAY_TYPE"](2);
  out[0] = 0;
  out[1] = 0;
  return out;
}

/**
 * Creates a new vec2 initialized with values from an existing vector
 *
 * @param {vec2} a vector to clone
 * @returns {vec2} a new 2D vector
 */
function clone(a) {
  let out = new __WEBPACK_IMPORTED_MODULE_0__common__["ARRAY_TYPE"](2);
  out[0] = a[0];
  out[1] = a[1];
  return out;
}

/**
 * Creates a new vec2 initialized with the given values
 *
 * @param {Number} x X component
 * @param {Number} y Y component
 * @returns {vec2} a new 2D vector
 */
function fromValues(x, y) {
  let out = new __WEBPACK_IMPORTED_MODULE_0__common__["ARRAY_TYPE"](2);
  out[0] = x;
  out[1] = y;
  return out;
}

/**
 * Copy the values from one vec2 to another
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the source vector
 * @returns {vec2} out
 */
function copy(out, a) {
  out[0] = a[0];
  out[1] = a[1];
  return out;
}

/**
 * Set the components of a vec2 to the given values
 *
 * @param {vec2} out the receiving vector
 * @param {Number} x X component
 * @param {Number} y Y component
 * @returns {vec2} out
 */
function set(out, x, y) {
  out[0] = x;
  out[1] = y;
  return out;
}

/**
 * Adds two vec2's
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {vec2} out
 */
function add(out, a, b) {
  out[0] = a[0] + b[0];
  out[1] = a[1] + b[1];
  return out;
}

/**
 * Subtracts vector b from vector a
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {vec2} out
 */
function subtract(out, a, b) {
  out[0] = a[0] - b[0];
  out[1] = a[1] - b[1];
  return out;
}

/**
 * Multiplies two vec2's
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {vec2} out
 */
function multiply(out, a, b) {
  out[0] = a[0] * b[0];
  out[1] = a[1] * b[1];
  return out;
};

/**
 * Divides two vec2's
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {vec2} out
 */
function divide(out, a, b) {
  out[0] = a[0] / b[0];
  out[1] = a[1] / b[1];
  return out;
};

/**
 * Math.ceil the components of a vec2
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a vector to ceil
 * @returns {vec2} out
 */
function ceil(out, a) {
  out[0] = Math.ceil(a[0]);
  out[1] = Math.ceil(a[1]);
  return out;
};

/**
 * Math.floor the components of a vec2
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a vector to floor
 * @returns {vec2} out
 */
function floor(out, a) {
  out[0] = Math.floor(a[0]);
  out[1] = Math.floor(a[1]);
  return out;
};

/**
 * Returns the minimum of two vec2's
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {vec2} out
 */
function min(out, a, b) {
  out[0] = Math.min(a[0], b[0]);
  out[1] = Math.min(a[1], b[1]);
  return out;
};

/**
 * Returns the maximum of two vec2's
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {vec2} out
 */
function max(out, a, b) {
  out[0] = Math.max(a[0], b[0]);
  out[1] = Math.max(a[1], b[1]);
  return out;
};

/**
 * Math.round the components of a vec2
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a vector to round
 * @returns {vec2} out
 */
function round (out, a) {
  out[0] = Math.round(a[0]);
  out[1] = Math.round(a[1]);
  return out;
};

/**
 * Scales a vec2 by a scalar number
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the vector to scale
 * @param {Number} b amount to scale the vector by
 * @returns {vec2} out
 */
function scale(out, a, b) {
  out[0] = a[0] * b;
  out[1] = a[1] * b;
  return out;
};

/**
 * Adds two vec2's after scaling the second operand by a scalar value
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @param {Number} scale the amount to scale b by before adding
 * @returns {vec2} out
 */
function scaleAndAdd(out, a, b, scale) {
  out[0] = a[0] + (b[0] * scale);
  out[1] = a[1] + (b[1] * scale);
  return out;
};

/**
 * Calculates the euclidian distance between two vec2's
 *
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {Number} distance between a and b
 */
function distance(a, b) {
  var x = b[0] - a[0],
    y = b[1] - a[1];
  return Math.sqrt(x*x + y*y);
};

/**
 * Calculates the squared euclidian distance between two vec2's
 *
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {Number} squared distance between a and b
 */
function squaredDistance(a, b) {
  var x = b[0] - a[0],
    y = b[1] - a[1];
  return x*x + y*y;
};

/**
 * Calculates the length of a vec2
 *
 * @param {vec2} a vector to calculate length of
 * @returns {Number} length of a
 */
function length(a) {
  var x = a[0],
    y = a[1];
  return Math.sqrt(x*x + y*y);
};

/**
 * Calculates the squared length of a vec2
 *
 * @param {vec2} a vector to calculate squared length of
 * @returns {Number} squared length of a
 */
function squaredLength (a) {
  var x = a[0],
    y = a[1];
  return x*x + y*y;
};

/**
 * Negates the components of a vec2
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a vector to negate
 * @returns {vec2} out
 */
function negate(out, a) {
  out[0] = -a[0];
  out[1] = -a[1];
  return out;
};

/**
 * Returns the inverse of the components of a vec2
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a vector to invert
 * @returns {vec2} out
 */
function inverse(out, a) {
  out[0] = 1.0 / a[0];
  out[1] = 1.0 / a[1];
  return out;
};

/**
 * Normalize a vec2
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a vector to normalize
 * @returns {vec2} out
 */
function normalize(out, a) {
  var x = a[0],
    y = a[1];
  var len = x*x + y*y;
  if (len > 0) {
    //TODO: evaluate use of glm_invsqrt here?
    len = 1 / Math.sqrt(len);
    out[0] = a[0] * len;
    out[1] = a[1] * len;
  }
  return out;
};

/**
 * Calculates the dot product of two vec2's
 *
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {Number} dot product of a and b
 */
function dot(a, b) {
  return a[0] * b[0] + a[1] * b[1];
};

/**
 * Computes the cross product of two vec2's
 * Note that the cross product must by definition produce a 3D vector
 *
 * @param {vec3} out the receiving vector
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {vec3} out
 */
function cross(out, a, b) {
  var z = a[0] * b[1] - a[1] * b[0];
  out[0] = out[1] = 0;
  out[2] = z;
  return out;
};

/**
 * Performs a linear interpolation between two vec2's
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @param {Number} t interpolation amount between the two inputs
 * @returns {vec2} out
 */
function lerp(out, a, b, t) {
  var ax = a[0],
    ay = a[1];
  out[0] = ax + t * (b[0] - ax);
  out[1] = ay + t * (b[1] - ay);
  return out;
};

/**
 * Generates a random vector with the given scale
 *
 * @param {vec2} out the receiving vector
 * @param {Number} [scale] Length of the resulting vector. If ommitted, a unit vector will be returned
 * @returns {vec2} out
 */
function random(out, scale) {
  scale = scale || 1.0;
  var r = __WEBPACK_IMPORTED_MODULE_0__common__["RANDOM"]() * 2.0 * Math.PI;
  out[0] = Math.cos(r) * scale;
  out[1] = Math.sin(r) * scale;
  return out;
};

/**
 * Transforms the vec2 with a mat2
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the vector to transform
 * @param {mat2} m matrix to transform with
 * @returns {vec2} out
 */
function transformMat2(out, a, m) {
  var x = a[0],
    y = a[1];
  out[0] = m[0] * x + m[2] * y;
  out[1] = m[1] * x + m[3] * y;
  return out;
};

/**
 * Transforms the vec2 with a mat2d
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the vector to transform
 * @param {mat2d} m matrix to transform with
 * @returns {vec2} out
 */
function transformMat2d(out, a, m) {
  var x = a[0],
    y = a[1];
  out[0] = m[0] * x + m[2] * y + m[4];
  out[1] = m[1] * x + m[3] * y + m[5];
  return out;
};

/**
 * Transforms the vec2 with a mat3
 * 3rd vector component is implicitly '1'
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the vector to transform
 * @param {mat3} m matrix to transform with
 * @returns {vec2} out
 */
function transformMat3(out, a, m) {
  var x = a[0],
    y = a[1];
  out[0] = m[0] * x + m[3] * y + m[6];
  out[1] = m[1] * x + m[4] * y + m[7];
  return out;
};

/**
 * Transforms the vec2 with a mat4
 * 3rd vector component is implicitly '0'
 * 4th vector component is implicitly '1'
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the vector to transform
 * @param {mat4} m matrix to transform with
 * @returns {vec2} out
 */
function transformMat4(out, a, m) {
  let x = a[0];
  let y = a[1];
  out[0] = m[0] * x + m[4] * y + m[12];
  out[1] = m[1] * x + m[5] * y + m[13];
  return out;
}

/**
 * Returns a string representation of a vector
 *
 * @param {vec2} a vector to represent as a string
 * @returns {String} string representation of the vector
 */
function str(a) {
  return 'vec2(' + a[0] + ', ' + a[1] + ')';
}

/**
 * Returns whether or not the vectors exactly have the same elements in the same position (when compared with ===)
 *
 * @param {vec2} a The first vector.
 * @param {vec2} b The second vector.
 * @returns {Boolean} True if the vectors are equal, false otherwise.
 */
function exactEquals(a, b) {
  return a[0] === b[0] && a[1] === b[1];
}

/**
 * Returns whether or not the vectors have approximately the same elements in the same position.
 *
 * @param {vec2} a The first vector.
 * @param {vec2} b The second vector.
 * @returns {Boolean} True if the vectors are equal, false otherwise.
 */
function equals(a, b) {
  let a0 = a[0], a1 = a[1];
  let b0 = b[0], b1 = b[1];
  return (Math.abs(a0 - b0) <= __WEBPACK_IMPORTED_MODULE_0__common__["EPSILON"]*Math.max(1.0, Math.abs(a0), Math.abs(b0)) &&
          Math.abs(a1 - b1) <= __WEBPACK_IMPORTED_MODULE_0__common__["EPSILON"]*Math.max(1.0, Math.abs(a1), Math.abs(b1)));
}

/**
 * Alias for {@link vec2.length}
 * @function
 */
const len = length;
/* harmony export (immutable) */ __webpack_exports__["len"] = len;


/**
 * Alias for {@link vec2.subtract}
 * @function
 */
const sub = subtract;
/* harmony export (immutable) */ __webpack_exports__["sub"] = sub;


/**
 * Alias for {@link vec2.multiply}
 * @function
 */
const mul = multiply;
/* harmony export (immutable) */ __webpack_exports__["mul"] = mul;


/**
 * Alias for {@link vec2.divide}
 * @function
 */
const div = divide;
/* harmony export (immutable) */ __webpack_exports__["div"] = div;


/**
 * Alias for {@link vec2.distance}
 * @function
 */
const dist = distance;
/* harmony export (immutable) */ __webpack_exports__["dist"] = dist;


/**
 * Alias for {@link vec2.squaredDistance}
 * @function
 */
const sqrDist = squaredDistance;
/* harmony export (immutable) */ __webpack_exports__["sqrDist"] = sqrDist;


/**
 * Alias for {@link vec2.squaredLength}
 * @function
 */
const sqrLen = squaredLength;
/* harmony export (immutable) */ __webpack_exports__["sqrLen"] = sqrLen;


/**
 * Perform some operation over an array of vec2s.
 *
 * @param {Array} a the array of vectors to iterate over
 * @param {Number} stride Number of elements between the start of each vec2. If 0 assumes tightly packed
 * @param {Number} offset Number of elements to skip at the beginning of the array
 * @param {Number} count Number of vec2s to iterate over. If 0 iterates over entire array
 * @param {Function} fn Function to call for each vector in the array
 * @param {Object} [arg] additional argument to pass to fn
 * @returns {Array} a
 * @function
 */
const forEach = (function() {
  let vec = create();

  return function(a, stride, offset, count, fn, arg) {
    let i, l;
    if(!stride) {
      stride = 2;
    }

    if(!offset) {
      offset = 0;
    }

    if(count) {
      l = Math.min((count * stride) + offset, a.length);
    } else {
      l = a.length;
    }

    for(i = offset; i < l; i += stride) {
      vec[0] = a[i]; vec[1] = a[i+1];
      fn(vec, vec, arg);
      a[i] = vec[0]; a[i+1] = vec[1];
    }

    return a;
  };
})();
/* harmony export (immutable) */ __webpack_exports__["forEach"] = forEach;



/***/ }),
/* 120 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var createUniformWrapper   = __webpack_require__(122)
var createAttributeWrapper = __webpack_require__(121)
var makeReflect            = __webpack_require__(49)
var shaderCache            = __webpack_require__(124)
var runtime                = __webpack_require__(123)
var GLError                = __webpack_require__(19)

//Shader object
function Shader(gl) {
  this.gl         = gl

  //Default initialize these to null
  this._vref      =
  this._fref      =
  this._relink    =
  this.vertShader =
  this.fragShader =
  this.program    =
  this.attributes =
  this.uniforms   =
  this.types      = null
}

var proto = Shader.prototype

proto.bind = function() {
  if(!this.program) {
    this._relink()
  }
  this.gl.useProgram(this.program)
}

proto.dispose = function() {
  if(this._fref) {
    this._fref.dispose()
  }
  if(this._vref) {
    this._vref.dispose()
  }
  this.attributes =
  this.types      =
  this.vertShader =
  this.fragShader =
  this.program    =
  this._relink    =
  this._fref      =
  this._vref      = null
}

function compareAttributes(a, b) {
  if(a.name < b.name) {
    return -1
  }
  return 1
}

//Update export hook for glslify-live
proto.update = function(
    vertSource
  , fragSource
  , uniforms
  , attributes) {

  //If only one object passed, assume glslify style output
  if(!fragSource || arguments.length === 1) {
    var obj = vertSource
    vertSource = obj.vertex
    fragSource = obj.fragment
    uniforms   = obj.uniforms
    attributes = obj.attributes
  }

  var wrapper = this
  var gl      = wrapper.gl

  //Compile vertex and fragment shaders
  var pvref = wrapper._vref
  wrapper._vref = shaderCache.shader(gl, gl.VERTEX_SHADER, vertSource)
  if(pvref) {
    pvref.dispose()
  }
  wrapper.vertShader = wrapper._vref.shader
  var pfref = this._fref
  wrapper._fref = shaderCache.shader(gl, gl.FRAGMENT_SHADER, fragSource)
  if(pfref) {
    pfref.dispose()
  }
  wrapper.fragShader = wrapper._fref.shader

  //If uniforms/attributes is not specified, use RT reflection
  if(!uniforms || !attributes) {

    //Create initial test program
    var testProgram = gl.createProgram()
    gl.attachShader(testProgram, wrapper.fragShader)
    gl.attachShader(testProgram, wrapper.vertShader)
    gl.linkProgram(testProgram)
    if(!gl.getProgramParameter(testProgram, gl.LINK_STATUS)) {
      var errLog = gl.getProgramInfoLog(testProgram)
      throw new GLError(errLog, 'Error linking program:' + errLog)
    }

    //Load data from runtime
    uniforms   = uniforms   || runtime.uniforms(gl, testProgram)
    attributes = attributes || runtime.attributes(gl, testProgram)

    //Release test program
    gl.deleteProgram(testProgram)
  }

  //Sort attributes lexicographically
  // overrides undefined WebGL behavior for attribute locations
  attributes = attributes.slice()
  attributes.sort(compareAttributes)

  //Convert attribute types, read out locations
  var attributeUnpacked  = []
  var attributeNames     = []
  var attributeLocations = []
  for(var i=0; i<attributes.length; ++i) {
    var attr = attributes[i]
    if(attr.type.indexOf('mat') >= 0) {
      var size = attr.type.charAt(attr.type.length-1)|0
      var locVector = new Array(size)
      for(var j=0; j<size; ++j) {
        locVector[j] = attributeLocations.length
        attributeNames.push(attr.name + '[' + j + ']')
        if(typeof attr.location === 'number') {
          attributeLocations.push(attr.location + j)
        } else if(Array.isArray(attr.location) &&
                  attr.location.length === size &&
                  typeof attr.location[j] === 'number') {
          attributeLocations.push(attr.location[j]|0)
        } else {
          attributeLocations.push(-1)
        }
      }
      attributeUnpacked.push({
        name: attr.name,
        type: attr.type,
        locations: locVector
      })
    } else {
      attributeUnpacked.push({
        name: attr.name,
        type: attr.type,
        locations: [ attributeLocations.length ]
      })
      attributeNames.push(attr.name)
      if(typeof attr.location === 'number') {
        attributeLocations.push(attr.location|0)
      } else {
        attributeLocations.push(-1)
      }
    }
  }

  //For all unspecified attributes, assign them lexicographically min attribute
  var curLocation = 0
  for(var i=0; i<attributeLocations.length; ++i) {
    if(attributeLocations[i] < 0) {
      while(attributeLocations.indexOf(curLocation) >= 0) {
        curLocation += 1
      }
      attributeLocations[i] = curLocation
    }
  }

  //Rebuild program and recompute all uniform locations
  var uniformLocations = new Array(uniforms.length)
  function relink() {
    wrapper.program = shaderCache.program(
        gl
      , wrapper._vref
      , wrapper._fref
      , attributeNames
      , attributeLocations)

    for(var i=0; i<uniforms.length; ++i) {
      uniformLocations[i] = gl.getUniformLocation(
          wrapper.program
        , uniforms[i].name)
    }
  }

  //Perform initial linking, reuse program used for reflection
  relink()

  //Save relinking procedure, defer until runtime
  wrapper._relink = relink

  //Generate type info
  wrapper.types = {
    uniforms:   makeReflect(uniforms),
    attributes: makeReflect(attributes)
  }

  //Generate attribute wrappers
  wrapper.attributes = createAttributeWrapper(
      gl
    , wrapper
    , attributeUnpacked
    , attributeLocations)

  //Generate uniform wrappers
  Object.defineProperty(wrapper, 'uniforms', createUniformWrapper(
      gl
    , wrapper
    , uniforms
    , uniformLocations))
}

//Compiles and links a shader program with the given attribute and vertex list
function createShader(
    gl
  , vertSource
  , fragSource
  , uniforms
  , attributes) {

  var shader = new Shader(gl)

  shader.update(
      vertSource
    , fragSource
    , uniforms
    , attributes)

  return shader
}

module.exports = createShader


/***/ }),
/* 121 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = createAttributeWrapper

var GLError = __webpack_require__(19)

function ShaderAttribute(
    gl
  , wrapper
  , index
  , locations
  , dimension
  , constFunc) {
  this._gl        = gl
  this._wrapper   = wrapper
  this._index     = index
  this._locations = locations
  this._dimension = dimension
  this._constFunc = constFunc
}

var proto = ShaderAttribute.prototype

proto.pointer = function setAttribPointer(
    type
  , normalized
  , stride
  , offset) {

  var self      = this
  var gl        = self._gl
  var location  = self._locations[self._index]

  gl.vertexAttribPointer(
      location
    , self._dimension
    , type || gl.FLOAT
    , !!normalized
    , stride || 0
    , offset || 0)
  gl.enableVertexAttribArray(location)
}

proto.set = function(x0, x1, x2, x3) {
  return this._constFunc(this._locations[this._index], x0, x1, x2, x3)
}

Object.defineProperty(proto, 'location', {
  get: function() {
    return this._locations[this._index]
  }
  , set: function(v) {
    if(v !== this._locations[this._index]) {
      this._locations[this._index] = v|0
      this._wrapper.program = null
    }
    return v|0
  }
})

//Adds a vector attribute to obj
function addVectorAttribute(
    gl
  , wrapper
  , index
  , locations
  , dimension
  , obj
  , name) {

  //Construct constant function
  var constFuncArgs = [ 'gl', 'v' ]
  var varNames = []
  for(var i=0; i<dimension; ++i) {
    constFuncArgs.push('x'+i)
    varNames.push('x'+i)
  }
  constFuncArgs.push(
    'if(x0.length===void 0){return gl.vertexAttrib' +
    dimension + 'f(v,' +
    varNames.join() +
    ')}else{return gl.vertexAttrib' +
    dimension +
    'fv(v,x0)}')
  var constFunc = Function.apply(null, constFuncArgs)

  //Create attribute wrapper
  var attr = new ShaderAttribute(
      gl
    , wrapper
    , index
    , locations
    , dimension
    , constFunc)

  //Create accessor
  Object.defineProperty(obj, name, {
    set: function(x) {
      gl.disableVertexAttribArray(locations[index])
      constFunc(gl, locations[index], x)
      return x
    }
    , get: function() {
      return attr
    }
    , enumerable: true
  })
}

function addMatrixAttribute(
    gl
  , wrapper
  , index
  , locations
  , dimension
  , obj
  , name) {

  var parts = new Array(dimension)
  var attrs = new Array(dimension)
  for(var i=0; i<dimension; ++i) {
    addVectorAttribute(
        gl
      , wrapper
      , index[i]
      , locations
      , dimension
      , parts
      , i)
    attrs[i] = parts[i]
  }

  Object.defineProperty(parts, 'location', {
    set: function(v) {
      if(Array.isArray(v)) {
        for(var i=0; i<dimension; ++i) {
          attrs[i].location = v[i]
        }
      } else {
        for(var i=0; i<dimension; ++i) {
          attrs[i].location = v + i
        }
      }
      return v
    }
    , get: function() {
      var result = new Array(dimension)
      for(var i=0; i<dimension; ++i) {
        result[i] = locations[index[i]]
      }
      return result
    }
    , enumerable: true
  })

  parts.pointer = function(type, normalized, stride, offset) {
    type       = type || gl.FLOAT
    normalized = !!normalized
    stride     = stride || (dimension * dimension)
    offset     = offset || 0
    for(var i=0; i<dimension; ++i) {
      var location = locations[index[i]]
      gl.vertexAttribPointer(
            location
          , dimension
          , type
          , normalized
          , stride
          , offset + i * dimension)
      gl.enableVertexAttribArray(location)
    }
  }

  var scratch = new Array(dimension)
  var vertexAttrib = gl['vertexAttrib' + dimension + 'fv']

  Object.defineProperty(obj, name, {
    set: function(x) {
      for(var i=0; i<dimension; ++i) {
        var loc = locations[index[i]]
        gl.disableVertexAttribArray(loc)
        if(Array.isArray(x[0])) {
          vertexAttrib.call(gl, loc, x[i])
        } else {
          for(var j=0; j<dimension; ++j) {
            scratch[j] = x[dimension*i + j]
          }
          vertexAttrib.call(gl, loc, scratch)
        }
      }
      return x
    }
    , get: function() {
      return parts
    }
    , enumerable: true
  })
}

//Create shims for attributes
function createAttributeWrapper(
    gl
  , wrapper
  , attributes
  , locations) {

  var obj = {}
  for(var i=0, n=attributes.length; i<n; ++i) {

    var a = attributes[i]
    var name = a.name
    var type = a.type
    var locs = a.locations

    switch(type) {
      case 'bool':
      case 'int':
      case 'float':
        addVectorAttribute(
            gl
          , wrapper
          , locs[0]
          , locations
          , 1
          , obj
          , name)
      break

      default:
        if(type.indexOf('vec') >= 0) {
          var d = type.charCodeAt(type.length-1) - 48
          if(d < 2 || d > 4) {
            throw new GLError('', 'Invalid data type for attribute ' + name + ': ' + type)
          }
          addVectorAttribute(
              gl
            , wrapper
            , locs[0]
            , locations
            , d
            , obj
            , name)
        } else if(type.indexOf('mat') >= 0) {
          var d = type.charCodeAt(type.length-1) - 48
          if(d < 2 || d > 4) {
            throw new GLError('', 'Invalid data type for attribute ' + name + ': ' + type)
          }
          addMatrixAttribute(
              gl
            , wrapper
            , locs
            , locations
            , d
            , obj
            , name)
        } else {
          throw new GLError('', 'Unknown data type for attribute ' + name + ': ' + type)
        }
      break
    }
  }
  return obj
}


/***/ }),
/* 122 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var coallesceUniforms = __webpack_require__(49)
var GLError = __webpack_require__(19)

module.exports = createUniformWrapper

//Binds a function and returns a value
function identity(x) {
  var c = new Function('y', 'return function(){return y}')
  return c(x)
}

function makeVector(length, fill) {
  var result = new Array(length)
  for(var i=0; i<length; ++i) {
    result[i] = fill
  }
  return result
}

//Create shims for uniforms
function createUniformWrapper(gl, wrapper, uniforms, locations) {

  function makeGetter(index) {
    var proc = new Function(
        'gl'
      , 'wrapper'
      , 'locations'
      , 'return function(){return gl.getUniform(wrapper.program,locations[' + index + '])}')
    return proc(gl, wrapper, locations)
  }

  function makePropSetter(path, index, type) {
    switch(type) {
      case 'bool':
      case 'int':
      case 'sampler2D':
      case 'samplerCube':
        return 'gl.uniform1i(locations[' + index + '],obj' + path + ')'
      case 'float':
        return 'gl.uniform1f(locations[' + index + '],obj' + path + ')'
      default:
        var vidx = type.indexOf('vec')
        if(0 <= vidx && vidx <= 1 && type.length === 4 + vidx) {
          var d = type.charCodeAt(type.length-1) - 48
          if(d < 2 || d > 4) {
            throw new GLError('', 'Invalid data type')
          }
          switch(type.charAt(0)) {
            case 'b':
            case 'i':
              return 'gl.uniform' + d + 'iv(locations[' + index + '],obj' + path + ')'
            case 'v':
              return 'gl.uniform' + d + 'fv(locations[' + index + '],obj' + path + ')'
            default:
              throw new GLError('', 'Unrecognized data type for vector ' + name + ': ' + type)
          }
        } else if(type.indexOf('mat') === 0 && type.length === 4) {
          var d = type.charCodeAt(type.length-1) - 48
          if(d < 2 || d > 4) {
            throw new GLError('', 'Invalid uniform dimension type for matrix ' + name + ': ' + type)
          }
          return 'gl.uniformMatrix' + d + 'fv(locations[' + index + '],false,obj' + path + ')'
        } else {
          throw new GLError('', 'Unknown uniform data type for ' + name + ': ' + type)
        }
      break
    }
  }

  function enumerateIndices(prefix, type) {
    if(typeof type !== 'object') {
      return [ [prefix, type] ]
    }
    var indices = []
    for(var id in type) {
      var prop = type[id]
      var tprefix = prefix
      if(parseInt(id) + '' === id) {
        tprefix += '[' + id + ']'
      } else {
        tprefix += '.' + id
      }
      if(typeof prop === 'object') {
        indices.push.apply(indices, enumerateIndices(tprefix, prop))
      } else {
        indices.push([tprefix, prop])
      }
    }
    return indices
  }

  function makeSetter(type) {
    var code = [ 'return function updateProperty(obj){' ]
    var indices = enumerateIndices('', type)
    for(var i=0; i<indices.length; ++i) {
      var item = indices[i]
      var path = item[0]
      var idx  = item[1]
      if(locations[idx]) {
        code.push(makePropSetter(path, idx, uniforms[idx].type))
      }
    }
    code.push('return obj}')
    var proc = new Function('gl', 'locations', code.join('\n'))
    return proc(gl, locations)
  }

  function defaultValue(type) {
    switch(type) {
      case 'bool':
        return false
      case 'int':
      case 'sampler2D':
      case 'samplerCube':
        return 0
      case 'float':
        return 0.0
      default:
        var vidx = type.indexOf('vec')
        if(0 <= vidx && vidx <= 1 && type.length === 4 + vidx) {
          var d = type.charCodeAt(type.length-1) - 48
          if(d < 2 || d > 4) {
            throw new GLError('', 'Invalid data type')
          }
          if(type.charAt(0) === 'b') {
            return makeVector(d, false)
          }
          return makeVector(d, 0)
        } else if(type.indexOf('mat') === 0 && type.length === 4) {
          var d = type.charCodeAt(type.length-1) - 48
          if(d < 2 || d > 4) {
            throw new GLError('', 'Invalid uniform dimension type for matrix ' + name + ': ' + type)
          }
          return makeVector(d*d, 0)
        } else {
          throw new GLError('', 'Unknown uniform data type for ' + name + ': ' + type)
        }
      break
    }
  }

  function storeProperty(obj, prop, type) {
    if(typeof type === 'object') {
      var child = processObject(type)
      Object.defineProperty(obj, prop, {
        get: identity(child),
        set: makeSetter(type),
        enumerable: true,
        configurable: false
      })
    } else {
      if(locations[type]) {
        Object.defineProperty(obj, prop, {
          get: makeGetter(type),
          set: makeSetter(type),
          enumerable: true,
          configurable: false
        })
      } else {
        obj[prop] = defaultValue(uniforms[type].type)
      }
    }
  }

  function processObject(obj) {
    var result
    if(Array.isArray(obj)) {
      result = new Array(obj.length)
      for(var i=0; i<obj.length; ++i) {
        storeProperty(result, i, obj[i])
      }
    } else {
      result = {}
      for(var id in obj) {
        storeProperty(result, id, obj[id])
      }
    }
    return result
  }

  //Return data
  var coallesced = coallesceUniforms(uniforms, true)
  return {
    get: identity(processObject(coallesced)),
    set: makeSetter(coallesced),
    enumerable: true,
    configurable: true
  }
}


/***/ }),
/* 123 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.uniforms    = runtimeUniforms
exports.attributes  = runtimeAttributes

var GL_TO_GLSL_TYPES = {
  'FLOAT':       'float',
  'FLOAT_VEC2':  'vec2',
  'FLOAT_VEC3':  'vec3',
  'FLOAT_VEC4':  'vec4',
  'INT':         'int',
  'INT_VEC2':    'ivec2',
  'INT_VEC3':    'ivec3',
  'INT_VEC4':    'ivec4',
  'BOOL':        'bool',
  'BOOL_VEC2':   'bvec2',
  'BOOL_VEC3':   'bvec3',
  'BOOL_VEC4':   'bvec4',
  'FLOAT_MAT2':  'mat2',
  'FLOAT_MAT3':  'mat3',
  'FLOAT_MAT4':  'mat4',
  'SAMPLER_2D':  'sampler2D',
  'SAMPLER_CUBE':'samplerCube'
}

var GL_TABLE = null

function getType(gl, type) {
  if(!GL_TABLE) {
    var typeNames = Object.keys(GL_TO_GLSL_TYPES)
    GL_TABLE = {}
    for(var i=0; i<typeNames.length; ++i) {
      var tn = typeNames[i]
      GL_TABLE[gl[tn]] = GL_TO_GLSL_TYPES[tn]
    }
  }
  return GL_TABLE[type]
}

function runtimeUniforms(gl, program) {
  var numUniforms = gl.getProgramParameter(program, gl.ACTIVE_UNIFORMS)
  var result = []
  for(var i=0; i<numUniforms; ++i) {
    var info = gl.getActiveUniform(program, i)
    if(info) {
      var type = getType(gl, info.type)
      if(info.size > 1) {
        for(var j=0; j<info.size; ++j) {
          result.push({
            name: info.name.replace('[0]', '[' + j + ']'),
            type: type
          })
        }
      } else {
        result.push({
          name: info.name,
          type: type
        })
      }
    }
  }
  return result
}

function runtimeAttributes(gl, program) {
  var numAttributes = gl.getProgramParameter(program, gl.ACTIVE_ATTRIBUTES)
  var result = []
  for(var i=0; i<numAttributes; ++i) {
    var info = gl.getActiveAttrib(program, i)
    if(info) {
      result.push({
        name: info.name,
        type: getType(gl, info.type)
      })
    }
  }
  return result
}


/***/ }),
/* 124 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.shader   = getShaderReference
exports.program  = createProgram

var GLError = __webpack_require__(19)
var formatCompilerError = __webpack_require__(112);

var weakMap = typeof WeakMap === 'undefined' ? __webpack_require__(194) : WeakMap
var CACHE = new weakMap()

var SHADER_COUNTER = 0

function ShaderReference(id, src, type, shader, programs, count, cache) {
  this.id       = id
  this.src      = src
  this.type     = type
  this.shader   = shader
  this.count    = count
  this.programs = []
  this.cache    = cache
}

ShaderReference.prototype.dispose = function() {
  if(--this.count === 0) {
    var cache    = this.cache
    var gl       = cache.gl

    //Remove program references
    var programs = this.programs
    for(var i=0, n=programs.length; i<n; ++i) {
      var p = cache.programs[programs[i]]
      if(p) {
        delete cache.programs[i]
        gl.deleteProgram(p)
      }
    }

    //Remove shader reference
    gl.deleteShader(this.shader)
    delete cache.shaders[(this.type === gl.FRAGMENT_SHADER)|0][this.src]
  }
}

function ContextCache(gl) {
  this.gl       = gl
  this.shaders  = [{}, {}]
  this.programs = {}
}

var proto = ContextCache.prototype

function compileShader(gl, type, src) {
  var shader = gl.createShader(type)
  gl.shaderSource(shader, src)
  gl.compileShader(shader)
  if(!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    var errLog = gl.getShaderInfoLog(shader)
    try {
        var fmt = formatCompilerError(errLog, src, type);
    } catch (e){
        console.warn('Failed to format compiler error: ' + e);
        throw new GLError(errLog, 'Error compiling shader:\n' + errLog)
    }
    throw new GLError(errLog, fmt.short, fmt.long)
  }
  return shader
}

proto.getShaderReference = function(type, src) {
  var gl      = this.gl
  var shaders = this.shaders[(type === gl.FRAGMENT_SHADER)|0]
  var shader  = shaders[src]
  if(!shader || !gl.isShader(shader.shader)) {
    var shaderObj = compileShader(gl, type, src)
    shader = shaders[src] = new ShaderReference(
      SHADER_COUNTER++,
      src,
      type,
      shaderObj,
      [],
      1,
      this)
  } else {
    shader.count += 1
  }
  return shader
}

function linkProgram(gl, vshader, fshader, attribs, locations) {
  var program = gl.createProgram()
  gl.attachShader(program, vshader)
  gl.attachShader(program, fshader)
  for(var i=0; i<attribs.length; ++i) {
    gl.bindAttribLocation(program, locations[i], attribs[i])
  }
  gl.linkProgram(program)
  if(!gl.getProgramParameter(program, gl.LINK_STATUS)) {
    var errLog = gl.getProgramInfoLog(program)
    throw new GLError(errLog, 'Error linking program: ' + errLog)
  }
  return program
}

proto.getProgram = function(vref, fref, attribs, locations) {
  var token = [vref.id, fref.id, attribs.join(':'), locations.join(':')].join('@')
  var prog  = this.programs[token]
  if(!prog || !this.gl.isProgram(prog)) {
    this.programs[token] = prog = linkProgram(
      this.gl,
      vref.shader,
      fref.shader,
      attribs,
      locations)
    vref.programs.push(token)
    fref.programs.push(token)
  }
  return prog
}

function getCache(gl) {
  var ctxCache = CACHE.get(gl)
  if(!ctxCache) {
    ctxCache = new ContextCache(gl)
    CACHE.set(gl, ctxCache)
  }
  return ctxCache
}

function getShaderReference(gl, type, src) {
  return getCache(gl).getShaderReference(type, src)
}

function createProgram(gl, vref, fref, attribs, locations) {
  return getCache(gl).getProgram(vref, fref, attribs, locations)
}


/***/ }),
/* 125 */
/***/ (function(module, exports) {

module.exports = glToType
function glToType (flag) {
  switch (flag) {
    case 5126: return 'float32'   // gl.FLOAT
    case 5125: return 'uint32'    // gl.UNSIGNED_INT
    case 5124: return 'int32'     // gl.INT
    case 5123: return 'uint16'    // gl.UNSIGNED_SHORT
    case 32819: return 'uint16'   // gl.UNSIGNED_SHORT_4_4_4_4
    case 32820: return 'uint16'   // gl.UNSIGNED_SHORT_5_5_5_1
    case 33635: return 'uint16'   // gl.UNSIGNED_SHORT_5_6_5
    case 5122: return 'int16'     // gl.SHORT
    case 5121: return 'uint8'     // gl.UNSIGNED_BYTE
    case 5120: return 'int8'      // gl.BYTE
    default: return null
  }
}


/***/ }),
/* 126 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var bindAttribs = __webpack_require__(50)

function VAOEmulated(gl) {
  this.gl = gl
  this._elements = null
  this._attributes = null
  this._elementsType = gl.UNSIGNED_SHORT
}

VAOEmulated.prototype.bind = function() {
  bindAttribs(this.gl, this._elements, this._attributes)
}

VAOEmulated.prototype.update = function(attributes, elements, elementsType) {
  this._elements = elements
  this._attributes = attributes
  this._elementsType = elementsType || this.gl.UNSIGNED_SHORT
}

VAOEmulated.prototype.dispose = function() { }
VAOEmulated.prototype.unbind = function() { }

VAOEmulated.prototype.draw = function(mode, count, offset) {
  offset = offset || 0
  var gl = this.gl
  if(this._elements) {
    gl.drawElements(mode, count, this._elementsType, offset)
  } else {
    gl.drawArrays(mode, offset, count)
  }
}

function createVAOEmulated(gl) {
  return new VAOEmulated(gl)
}

module.exports = createVAOEmulated

/***/ }),
/* 127 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var bindAttribs = __webpack_require__(50)

function VertexAttribute(location, dimension, a, b, c, d) {
  this.location = location
  this.dimension = dimension
  this.a = a
  this.b = b
  this.c = c
  this.d = d
}

VertexAttribute.prototype.bind = function(gl) {
  switch(this.dimension) {
    case 1:
      gl.vertexAttrib1f(this.location, this.a)
    break
    case 2:
      gl.vertexAttrib2f(this.location, this.a, this.b)
    break
    case 3:
      gl.vertexAttrib3f(this.location, this.a, this.b, this.c)
    break
    case 4:
      gl.vertexAttrib4f(this.location, this.a, this.b, this.c, this.d)
    break
  }
}

function VAONative(gl, ext, handle) {
  this.gl = gl
  this._ext = ext
  this.handle = handle
  this._attribs = []
  this._useElements = false
  this._elementsType = gl.UNSIGNED_SHORT
}

VAONative.prototype.bind = function() {
  this._ext.bindVertexArrayOES(this.handle)
  for(var i=0; i<this._attribs.length; ++i) {
    this._attribs[i].bind(this.gl)
  }
}

VAONative.prototype.unbind = function() {
  this._ext.bindVertexArrayOES(null)
}

VAONative.prototype.dispose = function() {
  this._ext.deleteVertexArrayOES(this.handle)
}

VAONative.prototype.update = function(attributes, elements, elementsType) {
  this.bind()
  bindAttribs(this.gl, elements, attributes)
  this.unbind()
  this._attribs.length = 0
  if(attributes)
  for(var i=0; i<attributes.length; ++i) {
    var a = attributes[i]
    if(typeof a === "number") {
      this._attribs.push(new VertexAttribute(i, 1, a))
    } else if(Array.isArray(a)) {
      this._attribs.push(new VertexAttribute(i, a.length, a[0], a[1], a[2], a[3]))
    }
  }
  this._useElements = !!elements
  this._elementsType = elementsType || this.gl.UNSIGNED_SHORT
}

VAONative.prototype.draw = function(mode, count, offset) {
  offset = offset || 0
  var gl = this.gl
  if(this._useElements) {
    gl.drawElements(mode, count, this._elementsType, offset)
  } else {
    gl.drawArrays(mode, offset, count)
  }
}

function createVAONative(gl, ext) {
  return new VAONative(gl, ext, ext.createVertexArrayOES())
}

module.exports = createVAONative

/***/ }),
/* 128 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var createVAONative = __webpack_require__(127)
var createVAOEmulated = __webpack_require__(126)

function ExtensionShim (gl) {
  this.bindVertexArrayOES = gl.bindVertexArray.bind(gl)
  this.createVertexArrayOES = gl.createVertexArray.bind(gl)
  this.deleteVertexArrayOES = gl.deleteVertexArray.bind(gl)
}

function createVAO(gl, attributes, elements, elementsType) {
  var ext = gl.createVertexArray
    ? new ExtensionShim(gl)
    : gl.getExtension('OES_vertex_array_object')
  var vao

  if(ext) {
    vao = createVAONative(gl, ext)
  } else {
    vao = createVAOEmulated(gl)
  }
  vao.update(attributes, elements, elementsType)
  return vao
}

module.exports = createVAO


/***/ }),
/* 129 */
/***/ (function(module, exports, __webpack_require__) {

var tokenize = __webpack_require__(134)
var atob     = __webpack_require__(94)

module.exports = getName

function getName(src) {
  var tokens = Array.isArray(src)
    ? src
    : tokenize(src)

  for (var i = 0; i < tokens.length; i++) {
    var token = tokens[i]
    if (token.type !== 'preprocessor') continue
    var match = token.data.match(/\#define\s+SHADER_NAME(_B64)?\s+(.+)$/)
    if (!match) continue
    if (!match[2]) continue

    var b64  = match[1]
    var name = match[2]

    return (b64 ? atob(name) : name).trim()
  }
}


/***/ }),
/* 130 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = tokenize

var literals100 = __webpack_require__(52)
  , operators = __webpack_require__(133)
  , builtins100 = __webpack_require__(51)
  , literals300es = __webpack_require__(132)
  , builtins300es = __webpack_require__(131)

var NORMAL = 999          // <-- never emitted
  , TOKEN = 9999          // <-- never emitted
  , BLOCK_COMMENT = 0
  , LINE_COMMENT = 1
  , PREPROCESSOR = 2
  , OPERATOR = 3
  , INTEGER = 4
  , FLOAT = 5
  , IDENT = 6
  , BUILTIN = 7
  , KEYWORD = 8
  , WHITESPACE = 9
  , EOF = 10
  , HEX = 11

var map = [
    'block-comment'
  , 'line-comment'
  , 'preprocessor'
  , 'operator'
  , 'integer'
  , 'float'
  , 'ident'
  , 'builtin'
  , 'keyword'
  , 'whitespace'
  , 'eof'
  , 'integer'
]

function tokenize(opt) {
  var i = 0
    , total = 0
    , mode = NORMAL
    , c
    , last
    , content = []
    , tokens = []
    , token_idx = 0
    , token_offs = 0
    , line = 1
    , col = 0
    , start = 0
    , isnum = false
    , isoperator = false
    , input = ''
    , len

  opt = opt || {}
  var allBuiltins = builtins100
  var allLiterals = literals100
  if (opt.version === '300 es') {
    allBuiltins = builtins300es
    allLiterals = literals300es
  }

  return function(data) {
    tokens = []
    if (data !== null) return write(data.replace ? data.replace(/\r\n/g, '\n') : data)
    return end()
  }

  function token(data) {
    if (data.length) {
      tokens.push({
        type: map[mode]
      , data: data
      , position: start
      , line: line
      , column: col
      })
    }
  }

  function write(chunk) {
    i = 0
    input += chunk
    len = input.length

    var last

    while(c = input[i], i < len) {
      last = i

      switch(mode) {
        case BLOCK_COMMENT: i = block_comment(); break
        case LINE_COMMENT: i = line_comment(); break
        case PREPROCESSOR: i = preprocessor(); break
        case OPERATOR: i = operator(); break
        case INTEGER: i = integer(); break
        case HEX: i = hex(); break
        case FLOAT: i = decimal(); break
        case TOKEN: i = readtoken(); break
        case WHITESPACE: i = whitespace(); break
        case NORMAL: i = normal(); break
      }

      if(last !== i) {
        switch(input[last]) {
          case '\n': col = 0; ++line; break
          default: ++col; break
        }
      }
    }

    total += i
    input = input.slice(i)
    return tokens
  }

  function end(chunk) {
    if(content.length) {
      token(content.join(''))
    }

    mode = EOF
    token('(eof)')
    return tokens
  }

  function normal() {
    content = content.length ? [] : content

    if(last === '/' && c === '*') {
      start = total + i - 1
      mode = BLOCK_COMMENT
      last = c
      return i + 1
    }

    if(last === '/' && c === '/') {
      start = total + i - 1
      mode = LINE_COMMENT
      last = c
      return i + 1
    }

    if(c === '#') {
      mode = PREPROCESSOR
      start = total + i
      return i
    }

    if(/\s/.test(c)) {
      mode = WHITESPACE
      start = total + i
      return i
    }

    isnum = /\d/.test(c)
    isoperator = /[^\w_]/.test(c)

    start = total + i
    mode = isnum ? INTEGER : isoperator ? OPERATOR : TOKEN
    return i
  }

  function whitespace() {
    if(/[^\s]/g.test(c)) {
      token(content.join(''))
      mode = NORMAL
      return i
    }
    content.push(c)
    last = c
    return i + 1
  }

  function preprocessor() {
    if((c === '\r' || c === '\n') && last !== '\\') {
      token(content.join(''))
      mode = NORMAL
      return i
    }
    content.push(c)
    last = c
    return i + 1
  }

  function line_comment() {
    return preprocessor()
  }

  function block_comment() {
    if(c === '/' && last === '*') {
      content.push(c)
      token(content.join(''))
      mode = NORMAL
      return i + 1
    }

    content.push(c)
    last = c
    return i + 1
  }

  function operator() {
    if(last === '.' && /\d/.test(c)) {
      mode = FLOAT
      return i
    }

    if(last === '/' && c === '*') {
      mode = BLOCK_COMMENT
      return i
    }

    if(last === '/' && c === '/') {
      mode = LINE_COMMENT
      return i
    }

    if(c === '.' && content.length) {
      while(determine_operator(content));

      mode = FLOAT
      return i
    }

    if(c === ';' || c === ')' || c === '(') {
      if(content.length) while(determine_operator(content));
      token(c)
      mode = NORMAL
      return i + 1
    }

    var is_composite_operator = content.length === 2 && c !== '='
    if(/[\w_\d\s]/.test(c) || is_composite_operator) {
      while(determine_operator(content));
      mode = NORMAL
      return i
    }

    content.push(c)
    last = c
    return i + 1
  }

  function determine_operator(buf) {
    var j = 0
      , idx
      , res

    do {
      idx = operators.indexOf(buf.slice(0, buf.length + j).join(''))
      res = operators[idx]

      if(idx === -1) {
        if(j-- + buf.length > 0) continue
        res = buf.slice(0, 1).join('')
      }

      token(res)

      start += res.length
      content = content.slice(res.length)
      return content.length
    } while(1)
  }

  function hex() {
    if(/[^a-fA-F0-9]/.test(c)) {
      token(content.join(''))
      mode = NORMAL
      return i
    }

    content.push(c)
    last = c
    return i + 1
  }

  function integer() {
    if(c === '.') {
      content.push(c)
      mode = FLOAT
      last = c
      return i + 1
    }

    if(/[eE]/.test(c)) {
      content.push(c)
      mode = FLOAT
      last = c
      return i + 1
    }

    if(c === 'x' && content.length === 1 && content[0] === '0') {
      mode = HEX
      content.push(c)
      last = c
      return i + 1
    }

    if(/[^\d]/.test(c)) {
      token(content.join(''))
      mode = NORMAL
      return i
    }

    content.push(c)
    last = c
    return i + 1
  }

  function decimal() {
    if(c === 'f') {
      content.push(c)
      last = c
      i += 1
    }

    if(/[eE]/.test(c)) {
      content.push(c)
      last = c
      return i + 1
    }

    if (c === '-' && /[eE]/.test(last)) {
      content.push(c)
      last = c
      return i + 1
    }

    if(/[^\d]/.test(c)) {
      token(content.join(''))
      mode = NORMAL
      return i
    }

    content.push(c)
    last = c
    return i + 1
  }

  function readtoken() {
    if(/[^\d\w_]/.test(c)) {
      var contentstr = content.join('')
      if(allLiterals.indexOf(contentstr) > -1) {
        mode = KEYWORD
      } else if(allBuiltins.indexOf(contentstr) > -1) {
        mode = BUILTIN
      } else {
        mode = IDENT
      }
      token(content.join(''))
      mode = NORMAL
      return i
    }
    content.push(c)
    last = c
    return i + 1
  }
}


/***/ }),
/* 131 */
/***/ (function(module, exports, __webpack_require__) {

// 300es builtins/reserved words that were previously valid in v100
var v100 = __webpack_require__(51)

// The texture2D|Cube functions have been removed
// And the gl_ features are updated
v100 = v100.slice().filter(function (b) {
  return !/^(gl\_|texture)/.test(b)
})

module.exports = v100.concat([
  // the updated gl_ constants
    'gl_VertexID'
  , 'gl_InstanceID'
  , 'gl_Position'
  , 'gl_PointSize'
  , 'gl_FragCoord'
  , 'gl_FrontFacing'
  , 'gl_FragDepth'
  , 'gl_PointCoord'
  , 'gl_MaxVertexAttribs'
  , 'gl_MaxVertexUniformVectors'
  , 'gl_MaxVertexOutputVectors'
  , 'gl_MaxFragmentInputVectors'
  , 'gl_MaxVertexTextureImageUnits'
  , 'gl_MaxCombinedTextureImageUnits'
  , 'gl_MaxTextureImageUnits'
  , 'gl_MaxFragmentUniformVectors'
  , 'gl_MaxDrawBuffers'
  , 'gl_MinProgramTexelOffset'
  , 'gl_MaxProgramTexelOffset'
  , 'gl_DepthRangeParameters'
  , 'gl_DepthRange'

  // other builtins
  , 'trunc'
  , 'round'
  , 'roundEven'
  , 'isnan'
  , 'isinf'
  , 'floatBitsToInt'
  , 'floatBitsToUint'
  , 'intBitsToFloat'
  , 'uintBitsToFloat'
  , 'packSnorm2x16'
  , 'unpackSnorm2x16'
  , 'packUnorm2x16'
  , 'unpackUnorm2x16'
  , 'packHalf2x16'
  , 'unpackHalf2x16'
  , 'outerProduct'
  , 'transpose'
  , 'determinant'
  , 'inverse'
  , 'texture'
  , 'textureSize'
  , 'textureProj'
  , 'textureLod'
  , 'textureOffset'
  , 'texelFetch'
  , 'texelFetchOffset'
  , 'textureProjOffset'
  , 'textureLodOffset'
  , 'textureProjLod'
  , 'textureProjLodOffset'
  , 'textureGrad'
  , 'textureGradOffset'
  , 'textureProjGrad'
  , 'textureProjGradOffset'
])


/***/ }),
/* 132 */
/***/ (function(module, exports, __webpack_require__) {

var v100 = __webpack_require__(52)

module.exports = v100.slice().concat([
   'layout'
  , 'centroid'
  , 'smooth'
  , 'case'
  , 'mat2x2'
  , 'mat2x3'
  , 'mat2x4'
  , 'mat3x2'
  , 'mat3x3'
  , 'mat3x4'
  , 'mat4x2'
  , 'mat4x3'
  , 'mat4x4'
  , 'uint'
  , 'uvec2'
  , 'uvec3'
  , 'uvec4'
  , 'samplerCubeShadow'
  , 'sampler2DArray'
  , 'sampler2DArrayShadow'
  , 'isampler2D'
  , 'isampler3D'
  , 'isamplerCube'
  , 'isampler2DArray'
  , 'usampler2D'
  , 'usampler3D'
  , 'usamplerCube'
  , 'usampler2DArray'
  , 'coherent'
  , 'restrict'
  , 'readonly'
  , 'writeonly'
  , 'resource'
  , 'atomic_uint'
  , 'noperspective'
  , 'patch'
  , 'sample'
  , 'subroutine'
  , 'common'
  , 'partition'
  , 'active'
  , 'filter'
  , 'image1D'
  , 'image2D'
  , 'image3D'
  , 'imageCube'
  , 'iimage1D'
  , 'iimage2D'
  , 'iimage3D'
  , 'iimageCube'
  , 'uimage1D'
  , 'uimage2D'
  , 'uimage3D'
  , 'uimageCube'
  , 'image1DArray'
  , 'image2DArray'
  , 'iimage1DArray'
  , 'iimage2DArray'
  , 'uimage1DArray'
  , 'uimage2DArray'
  , 'image1DShadow'
  , 'image2DShadow'
  , 'image1DArrayShadow'
  , 'image2DArrayShadow'
  , 'imageBuffer'
  , 'iimageBuffer'
  , 'uimageBuffer'
  , 'sampler1DArray'
  , 'sampler1DArrayShadow'
  , 'isampler1D'
  , 'isampler1DArray'
  , 'usampler1D'
  , 'usampler1DArray'
  , 'isampler2DRect'
  , 'usampler2DRect'
  , 'samplerBuffer'
  , 'isamplerBuffer'
  , 'usamplerBuffer'
  , 'sampler2DMS'
  , 'isampler2DMS'
  , 'usampler2DMS'
  , 'sampler2DMSArray'
  , 'isampler2DMSArray'
  , 'usampler2DMSArray'
])


/***/ }),
/* 133 */
/***/ (function(module, exports) {

module.exports = [
    '<<='
  , '>>='
  , '++'
  , '--'
  , '<<'
  , '>>'
  , '<='
  , '>='
  , '=='
  , '!='
  , '&&'
  , '||'
  , '+='
  , '-='
  , '*='
  , '/='
  , '%='
  , '&='
  , '^^'
  , '^='
  , '|='
  , '('
  , ')'
  , '['
  , ']'
  , '.'
  , '!'
  , '~'
  , '*'
  , '/'
  , '%'
  , '+'
  , '-'
  , '<'
  , '>'
  , '&'
  , '^'
  , '|'
  , '?'
  , ':'
  , '='
  , ','
  , ';'
  , '{'
  , '}'
]


/***/ }),
/* 134 */
/***/ (function(module, exports, __webpack_require__) {

var tokenize = __webpack_require__(130)

module.exports = tokenizeString

function tokenizeString(str, opt) {
  var generator = tokenize(opt)
  var tokens = []

  tokens = tokens.concat(generator(str))
  tokens = tokens.concat(generator(null))

  return tokens
}


/***/ }),
/* 135 */
/***/ (function(module, exports, __webpack_require__) {

var normalize = __webpack_require__(2).normalizeArray;
var calculateNormal = __webpack_require__(53);

module.exports = function( verts, faces ) {
  var positions = verts;
  var con = verts[ 0 ].constructor;
  if( con === Array || con == Float32Array ) {
    positions = normalize( verts );
  }
  var cells = faces[ 0 ].constructor === Array ? normalize( faces ) : faces;
  var normals = [];
  var i0, i1, i2;
  var a = [];
  var b = [];
  var c = [];
  var d = [];
  for( var i = 0; i < cells.length; i += 3 ) {
    i0 = cells[ i ] * 3;
	  i1 = cells[ i + 1 ] * 3;
	  i2 = cells[ i + 2 ] * 3;
    a[ 0 ] = positions[ i0 ]; a[ 1 ] = positions[ i0 + 1 ]; a[ 2 ] = positions[ i0 + 2 ];
    b[ 0 ] = positions[ i1 ]; b[ 1 ] = positions[ i1 + 1 ]; b[ 2 ] = positions[ i1 + 2 ];
    c[ 0 ] = positions[ i2 ]; c[ 1 ] = positions[ i2 + 1 ]; c[ 2 ] = positions[ i2 + 2 ];
    d = calculateNormal( a, b, c );
    normals[ i ] = d[ 0 ];
    normals[ i + 1 ] = d[ 1 ];
    normals[ i + 2 ] = d[ 2 ];
  }
  return normals;
};


/***/ }),
/* 136 */
/***/ (function(module, exports, __webpack_require__) {

var cross = __webpack_require__(30);
var normalize = __webpack_require__(31);
var normalizeArray = __webpack_require__(54);

module.exports = function( verts, faces ) {
  var positions = verts[0].constructor === Array ? normalizeArray( verts ) : verts;
  var cells = faces[0].constructor === Array ? normalizeArray( faces ) : faces;

  //Create Vertex Face Map ( tells you which vert belong to what faces )
  var map = {};
  var plen = positions.length / 3;
  for( var i = 0; i < plen; i++ ) { map[ i ] = []; }

  //Fill in Map
  var clen = cells.length;
  var i0, i1, i2, index;
  for( var i = 0; i < clen; i += 3 ) {
    index = i;
    i0 = index; i1 = index + 1; i2 = index + 2;
      map[ cells[ i0 ] ].push( i );
      map[ cells[ i1 ] ].push( i );
      map[ cells[ i2 ] ].push( i );
  }

  //Calculate Vertex Normals
  var normals = [];
  var temp = [ 0.0, 0.0, 0.0 ];
  var norm = [ 0.0, 0.0, 0.0 ];
  var keys = Object.keys( map );
  var v0, v1, v2, a = [ 0.0, 0.0, 0.0 ], b = [ 0.0, 0.0, 0.0 ], c = [ 0.0, 0.0, 0.0 ];
  for( var i = 0; i < keys.length; i++ ) {
    var faces = map[ keys[ i ] ];
    for( var j = 0; j < faces.length; j++ ) {
      var index = faces[ j ];

      v0 = cells[ index ];
      v1 = cells[ index + 1 ];
      v2 = cells[ index + 2 ];

      a[ 0 ] = positions[ v0 * 3 ];
      a[ 1 ] = positions[ v0 * 3 + 1 ];
      a[ 2 ] = positions[ v0 * 3 + 2 ];

      b[ 0 ] = positions[ v1 * 3 ];
      b[ 1 ] = positions[ v1 * 3 + 1 ];
      b[ 2 ] = positions[ v1 * 3 + 2 ];

      c[ 0 ] = positions[ v2 * 3 ];
      c[ 1 ] = positions[ v2 * 3 + 1 ];
      c[ 2 ] = positions[ v2 * 3 + 2 ];

      cross( temp, a, b, c );

      norm[ 0 ] += temp[ 0 ];
      norm[ 1 ] += temp[ 1 ];
      norm[ 2 ] += temp[ 2 ];
    }
    normalize( norm, norm );
    normals.push( norm[ 0 ] , norm[ 1 ], norm[ 2 ] );
    norm[ 0 ] = 0.0; norm[ 1 ] = 0.0; norm[ 2 ] = 0.0;
  }
  return normals;
};


/***/ }),
/* 137 */
/***/ (function(module, exports) {

exports.read = function (buffer, offset, isLE, mLen, nBytes) {
  var e, m
  var eLen = nBytes * 8 - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var nBits = -7
  var i = isLE ? (nBytes - 1) : 0
  var d = isLE ? -1 : 1
  var s = buffer[offset + i]

  i += d

  e = s & ((1 << (-nBits)) - 1)
  s >>= (-nBits)
  nBits += eLen
  for (; nBits > 0; e = e * 256 + buffer[offset + i], i += d, nBits -= 8) {}

  m = e & ((1 << (-nBits)) - 1)
  e >>= (-nBits)
  nBits += mLen
  for (; nBits > 0; m = m * 256 + buffer[offset + i], i += d, nBits -= 8) {}

  if (e === 0) {
    e = 1 - eBias
  } else if (e === eMax) {
    return m ? NaN : ((s ? -1 : 1) * Infinity)
  } else {
    m = m + Math.pow(2, mLen)
    e = e - eBias
  }
  return (s ? -1 : 1) * m * Math.pow(2, e - mLen)
}

exports.write = function (buffer, value, offset, isLE, mLen, nBytes) {
  var e, m, c
  var eLen = nBytes * 8 - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var rt = (mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0)
  var i = isLE ? 0 : (nBytes - 1)
  var d = isLE ? 1 : -1
  var s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0

  value = Math.abs(value)

  if (isNaN(value) || value === Infinity) {
    m = isNaN(value) ? 1 : 0
    e = eMax
  } else {
    e = Math.floor(Math.log(value) / Math.LN2)
    if (value * (c = Math.pow(2, -e)) < 1) {
      e--
      c *= 2
    }
    if (e + eBias >= 1) {
      value += rt / c
    } else {
      value += rt * Math.pow(2, 1 - eBias)
    }
    if (value * c >= 2) {
      e++
      c /= 2
    }

    if (e + eBias >= eMax) {
      m = 0
      e = eMax
    } else if (e + eBias >= 1) {
      m = (value * c - 1) * Math.pow(2, mLen)
      e = e + eBias
    } else {
      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen)
      e = 0
    }
  }

  for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}

  e = (e << mLen) | m
  eLen += mLen
  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}

  buffer[offset + i - d] |= s * 128
}


/***/ }),
/* 138 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function iota(n) {
  var result = new Array(n)
  for(var i=0; i<n; ++i) {
    result[i] = i
  }
  return result
}

module.exports = iota

/***/ }),
/* 139 */
/***/ (function(module, exports) {

/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */

// The _isBuffer check is for Safari 5-7 support, because it's missing
// Object.prototype.constructor. Remove this eventually
module.exports = function (obj) {
  return obj != null && (isBuffer(obj) || isSlowBuffer(obj) || !!obj._isBuffer)
}

function isBuffer (obj) {
  return !!obj.constructor && typeof obj.constructor.isBuffer === 'function' && obj.constructor.isBuffer(obj)
}

// For Node v0.10 support. Remove this eventually.
function isSlowBuffer (obj) {
  return typeof obj.readFloatLE === 'function' && typeof obj.slice === 'function' && isBuffer(obj.slice(0, 0))
}


/***/ }),
/* 140 */
/***/ (function(module, exports) {

module.exports = isMobile;

function isMobile (ua) {
  if (!ua && typeof navigator != 'undefined') ua = navigator.userAgent;
  if (ua && ua.headers && typeof ua.headers['user-agent'] == 'string') {
    ua = ua.headers['user-agent'];
  }
  if (typeof ua != 'string') return false;

  return /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(ua) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(ua.substr(0,4));
}



/***/ }),
/* 141 */
/***/ (function(module, exports) {

module.exports      = isTypedArray
isTypedArray.strict = isStrictTypedArray
isTypedArray.loose  = isLooseTypedArray

var toString = Object.prototype.toString
var names = {
    '[object Int8Array]': true
  , '[object Int16Array]': true
  , '[object Int32Array]': true
  , '[object Uint8Array]': true
  , '[object Uint16Array]': true
  , '[object Uint32Array]': true
  , '[object Float32Array]': true
  , '[object Float64Array]': true
}

function isTypedArray(arr) {
  return (
       isStrictTypedArray(arr)
    || isLooseTypedArray(arr)
  )
}

function isStrictTypedArray(arr) {
  return (
       arr instanceof Int8Array
    || arr instanceof Int16Array
    || arr instanceof Int32Array
    || arr instanceof Uint8Array
    || arr instanceof Uint16Array
    || arr instanceof Uint32Array
    || arr instanceof Float32Array
    || arr instanceof Float64Array
  )
}

function isLooseTypedArray(arr) {
  return names[toString.call(arr)]
}


/***/ }),
/* 142 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = Array.isArray || function (arr) {
  return toString.call(arr) == '[object Array]';
};


/***/ }),
/* 143 */
/***/ (function(module, exports) {

module.exports = function(arr) {
  if (!arr) return false
  if (!arr.dtype) return false
  var re = new RegExp('function View[0-9]+d(:?' + arr.dtype + ')+')
  return re.test(String(arr.constructor))
}


/***/ }),
/* 144 */
/***/ (function(module, exports, __webpack_require__) {

//STLS
exports.stlSerializer = __webpack_require__(151);
exports.stlDeserializer = __webpack_require__(150);

//OBJS
exports.objSerializer = __webpack_require__(149);
exports.objDeserializer = __webpack_require__(148);

//SVGS
exports.svgSerializer = __webpack_require__(152);

//IMAGES
exports.imageWriter = __webpack_require__(147);

//FILE UTILITY
exports.fileReader = __webpack_require__(145);
exports.fileWriter = __webpack_require__(146);


/***/ }),
/* 145 */
/***/ (function(module, exports) {

module.exports = function( filePath, callback ) {
  var client = new XMLHttpRequest();
  client.open( 'GET', filePath );
  client.onreadystatechange = function() {
    if( client.readyState !== XMLHttpRequest.DONE ) {
      return;
    }

    if( client.status !== 200 ) {
      return;
    }

    if( callback ) {
      callback( client.responseText );
    }
  }
  client.send();
};


/***/ }),
/* 146 */
/***/ (function(module, exports) {

module.exports = function( filename, data ) {
  var pom = document.createElement( 'a' );
  pom.href = URL.createObjectURL( new Blob( [ data ], { type : 'text/plain'} ) );
  pom.download = filename;
  document.body.appendChild( pom );

  if( document.createEvent ) {
    var event = document.createEvent( 'MouseEvents' );
    event.initEvent( 'click', true, true );
    pom.dispatchEvent( event );
  }
  else {
    pom.click();
  }
};


/***/ }),
/* 147 */
/***/ (function(module, exports) {

module.exports = function( filename, data ) {
  var pom = document.createElement( 'a' );
  pom.href = URL.createObjectURL( dataURItoBlob( data ) );
  pom.download = filename;
  document.body.appendChild( pom );

  if( document.createEvent ) {
    var event = document.createEvent( 'MouseEvents' );
    event.initEvent( 'click', true, true );
    pom.dispatchEvent( event );
  }
  else {
    pom.click();
  }
};

function dataURItoBlob( data ) {
    var byteString;
    if( data.split( ',' )[ 0 ].indexOf( 'base64' ) >= 0 ) {
      byteString = atob( data.split( ',' )[ 1 ] );
    }
    else {
      byteString = unescape( data.split( ',' )[ 1 ] );
    }

    var mimeString = data.split( ',' )[ 0 ].split( ':' )[ 1 ].split( ';' )[ 0 ];
    var dataOut = new Uint8Array( byteString.length );
    for( var i = 0; i < byteString.length; i++ ) {
        dataOut[ i ] = byteString.charCodeAt( i );
    }

    return new Blob( [ dataOut ], { type : mimeString } );
}


/***/ }),
/* 148 */
/***/ (function(module, exports) {

module.exports = function( input, opts ) {

  opts = opts ? opts : {};
  var scale = opts.scale ? opts.scale : 1.0;
  var invert = opts.flipYZ ? -1.0 : 1.0;
  var flipYZ = opts.flipYZ ? true : false;

  var positions = [];
  var normals = [];
  var texcoords = [];

  var cells = [];
  var ncells = [];
  var tcells = [];

  var vRegex = /^v\s*(-?\d*\.?\d*e*[-\+]*\d*)[,|\s]?\s?(-?\d*\.?\d*e*[-\+]*\d*)[,|\s]?\s?(-?\d*\.?\d*e*[-\+]*\d*)\s*$/;
  var vt2Regex = /^vt\s*(-?\d*\.?\d*e*[-\+]*\d*)[,|\s]?\s?(-?\d*\.?\d*e*[-\+]*\d*)\s*$/;                      //texcoord 2D
  var vt3Regex = /^vt\s*(-?\d*\.?\d*e*[-\+]*\d*)[,|\s]?\s?(-?\d*\.?\d*e*[-\+]*\d*)[,|\s]?\s?(-?\d*\.?\d*e*[-\+]*\d*)\s*$/;   //texcoord 3D
  var vnRegex = /^vn\s*(-?\d*\.?\d*e*[-\+]*\d*)[,|\s]?\s?(-?\d*\.?\d*e*[-\+]*\d*)[,|\s]?\s?(-?\d*\.?\d*e*[-\+]*\d*)\s*$/;       //normal
  var fRegex = /^f\s*(.*)/;                                                    //Find Face

  var fv = /^(\d+)$/;                                                         //Found vertex
  var fvt = /^(\d+)\/(\d+)$/;                                                 //Found vertex texcoord
  var fvnt = /^(\d+)\/(\d+)\/(\d+)$/;                                         //Found vertex normal texcoord
  var fvn = /^(\d+)\/\/(\d+)$/;                                               //Found vertex normal

  var lines = input.split( '\n' );
  var len = lines.length;
  var line, results;
  for( var i = 0; i < len; i++ ) {
    line = lines[ i ];

    results = line.match( vRegex ); // got a vertex
    if( results ) {
      var p = [];
      p.push( scale * parseFloat( results[ 1 ] ) );
      p.push( scale * parseFloat( results[ flipYZ ? 3 : 2 ] ) );
      p.push( scale * parseFloat( results[ flipYZ ? 2 : 3 ] ) );
      positions.push( p );
      continue;
    }

    results = line.match( vnRegex ); // got a normal
    if( results ) {
      var p = [];
      p.push( invert * parseFloat( results[ 1 ] ) );
      p.push( invert * parseFloat( results[ flipYZ ? 3 : 2 ] ) );
      p.push( invert * parseFloat( results[ flipYZ ? 2 : 3 ] ) );
      normals.push( p );
      continue;
    }

    results = line.match( vt2Regex ); // got a texcoord v2
    if( results ) {
      var t = [];
      t.push( parseFloat( results[ 1 ] ) );
      t.push( parseFloat( results[ 2 ] ) );
      texcoords.push( t );
      continue;
    }

    results = line.match( vt3Regex ); //got a texcoord v3
    if( results ) {
      var t = [];
      t.push( parseFloat( results[ 1 ] ) );
      t.push( parseFloat( results[ 2 ] ) );
      t.push( parseFloat( results[ 3 ] ) );
      texcoords.push( t );
      continue;
    }

    results = line.match( fRegex );
    if( results ) {
      var parts = results[ 1 ].split( ' ' );
      var plen = parts.length;

      var vpc = [];   //positions cells
      var vtc = [];   //texture cells
      var vnc = [];   //normal cells
      for( var k = 0; k < plen; k++ ) {
          var part = parts[ k ];

          var res = part.match( fv );
          if( res ) {
            vpc.push( parseInt( res[ 1 ] ) - 1 );
            continue;
          }

          res = part.match( fvt );
          if( res ) {
            vpc.push( parseInt( res[ 1 ] ) - 1 );
            vtc.push( parseInt( res[ 2 ] ) - 1 );
            continue;
          }

          res = part.match( fvnt );
          if( res ) {
            vpc.push( parseInt( res[ 1 ] ) - 1 );
            vtc.push( parseInt( res[ 2 ] ) - 1 );
            vnc.push( parseInt( res[ 3 ] ) - 1 );
            continue;
          }

          res = part.match( fvn );
          if( res ) {
            vpc.push( parseInt( res[ 1 ] ) - 1 );
            vnc.push( parseInt( res[ 2 ] ) - 1 );
            continue;
          }
      }

      if( vpc.length ) cells.push( vpc );
      if( vtc.length ) tcells.push( vtc );
      if( vnc.length ) ncells.push( vnc );
    }
  }

  return {
    positions: positions,
    normals: normals,
    texcoords: texcoords,
    cells: cells,
    tcells: tcells,
    ncells: ncells,
  };
};


/***/ }),
/* 149 */
/***/ (function(module, exports) {

module.exports = function( input ) {
  if( input.constructor === Array ) {
    var output = "";
    for( var i = 0; i < input.length; i++ ) {
       output += serialize( input[0], i );
    }
    return output;
  }
  else {
    return serialize( input, 0 );
  }
};

function serialize( input, index ) {
  if( input.positions === undefined || input.cells === undefined ) {
    throw "Input Not Valid: Does not contain any positions or cells";
  }
  var name = input.name === undefined ? "model" + index : input.name;
  var cells = input.cells;
  var positions = input.positions;

  //Write verts
  var obj = "g " + name + "\n";
  var verts = "";
  var norms = "";
  var faces = "";
  if( positions[0].constructor === Number ) {
    for( var i = 0; i < positions.length; i += 3 ) {
      verts += "v " + positions[ i ] + " " + positions[ i + 1 ] + " " +  positions[ i + 2 ] + "\n";
    }
  }
  else {
    for( var i = 0; i < positions.length; i++ ) {
      verts += "v " + positions[ i ][ 0 ] + " " + positions[ i ][ 1 ] + " " +  positions[ i ][ 2 ] + "\n";
    }
  }

  if( cells[0].constructor === Number ) {
    for( var i = 0; i < cells.length; i += 3 ) {
      var i0 = cells[ i ] + 1;
      var i1 = cells[ i + 1 ] + 1;
      var i2 = cells[ i + 2 ] + 1;
      faces += "f " + i0 + "//" + i0 + " " + i1 + "//" + i1 + " " + i2 + "//" + i2 + "\n";
    }
  }
  else {
    for( var i = 0; i < cells.length; i++ ) {
      var i0 = cells[ i ][ 0 ] + 1;
      var i1 = cells[ i ][ 1 ] + 1;
      var i2 = cells[ i ][ 2 ] + 1;
      faces += "f " + i0 + "//" + i0 + " " + i1 + "//" + i1 + " " + i2 + "//" + i2 + "\n";
    }
  }

  obj += verts;
  obj += norms;
  obj += faces;
  return obj
}


/***/ }),
/* 150 */
/***/ (function(module, exports) {

module.exports = function( input, opts ) {

  opts = opts ? opts : {};
  var scale = opts.scale ? opts.scale : 1.0;
  var flipYZ = opts.flipYZ ? true : false;

  var objects = [];
  var currentObject;

  var solidStartRegex = /^solid\s(.*)$/;
  var solidEndRegex  = /^endsolid\s(.*)$/;
  var facetNormalRegex = /^\s*facet\snormal\s(-?\d*\.?\d*e*[-\+]*\d*)[,|\s]?\s?(-?\d*\.?\d*e*[-\+]*\d*)[,|\s]?\s?(-?\d*\.?\d*e*[-\+]*\d*)\s*$/;
  var vertexRegex = /^\s*vertex\s(-?\d*\.?\d*e*[-\+]*\d*)[,|\s]?\s?(-?\d*\.?\d*e*[-\+]*\d*)[,|\s]?\s?(-?\d*\.?\d*e*[-\+]*\d*)\s*$/;

  var x, y, z;

  var lines = input.split( '\n' );
  var len = lines.length;
  var line, results;
  for( var i = 0; i < len; i++ ) {
    line = lines[ i ];
    var res = line.match( solidStartRegex ); // got a new solid
    if( res ) {
      currentObject = {
        name: res[ 1 ],
        normals: [],
        positions: []
      };
      continue;
    }

    res = line.match( facetNormalRegex );
    if( res ) {
      x = parseFloat( res[ 1 ] );
      y = parseFloat( res[ flipYZ ? 3 : 2 ] );
      z = parseFloat( res[ flipYZ ? 2 : 3 ] );
      currentObject.normals.push( [ x, y, z ] );
      currentObject.normals.push( [ x, y, z ] );
      currentObject.normals.push( [ x, y, z ] );
      continue;
    }

    res = line.match( vertexRegex );
    if( res ) {
      currentObject.positions.push( [
        scale * parseFloat( res[ 1 ] ),
        scale * parseFloat( res[ flipYZ ? 3 : 2 ] ),
        scale * parseFloat( res[ flipYZ ? 2 : 3 ] )
      ] );
      continue;
    }

    var res = line.match( solidEndRegex );
    if( res ) {
      objects.push( currentObject );
    }
  }

  return objects;
};


/***/ }),
/* 151 */
/***/ (function(module, exports, __webpack_require__) {

var normalize = __webpack_require__(2).normalizeArray;
var calculateNormals = __webpack_require__(2).faceNormals;

module.exports = function( input ) {
  if( input.constructor === Array ) {
    var output = "";
    for( var i = 0; i < input.length; i++ ) {
       output += serialize( input[ 0 ], i );
    }
    return output;
  }
  else {
    return serialize( input, 0 );
  }
};

function serialize( input, index ) {
  if( input.positions === undefined || input.cells === undefined ) {
    throw "Input Not Valid: Does not contain any positions or cells";
  }
  var name = input.name === undefined ? "model" + index : input.name;
  var cells = input.cells[ 0 ].constructor === Array ? normalize( input.cells ) : input.cells;
  var positions = input.positions;
  var con = input.positions[ 0 ].constructor;
  if( con === Array || con == Float32Array ) {
    positions = normalize( input.positions );
  }

  var normals = undefined;
  if( input.normals != undefined ) {
    normals = input.normals[0].constructor === Array ? normalize( input.normals ) : input.normals;
  }
  else {
    normals = calculateNormals( positions, cells );
  }

  var i0, i1, i2, a, b, c;
  var stl = "solid " + name + "\n";
  for( var i = 0; i < cells.length; i += 3 ) {
    i0 = cells[ i ] * 3;
    i1 = cells[ i + 1 ] * 3;
    i2 = cells[ i + 2 ] * 3;
    stl += "facet normal " + normals[ i ] + " " + normals[ i + 1 ] + " " + normals[ i + 2 ] + "\n";
    stl += "\touter loop \n";
    stl += "\t\tvertex" + " " + positions[ i0 ] + " " + positions[ i0 + 1 ] + " " +  positions[ i0 + 2 ] + "\n";
    stl += "\t\tvertex" + " " + positions[ i1 ] + " " + positions[ i1 + 1 ] + " " +  positions[ i1 + 2 ] + "\n";
    stl += "\t\tvertex" + " " + positions[ i2 ] + " " + positions[ i2 + 1 ] + " " +  positions[ i2 + 2 ] + "\n";
    stl += "\tendloop \n";
    stl += "endfacet \n";
  }
  stl += ('endsolid\n');
  return stl
}


/***/ }),
/* 152 */
/***/ (function(module, exports, __webpack_require__) {

var normalize = __webpack_require__(2).normalizeArray;

var width = -1.0; var height = -1.0;

module.exports = function( input ) {
  var content = "";
  width = -1.0; height = -1.0;
  if( input.constructor === Array ) {
    for( var i = 0; i < input.length; i++ ) {
       content += serialize( input[0] );
    }
  }
  else {
    content += serialize( input );
  }
  var output = "<svg ";
  output += "width=\"" + width + "\" ";
  output += "height=\"" + height + "\" ";
  output += "xmlns=\"http://www.w3.org/2000/svg\" version=\"1.1\">\n";
  output += content;
  output += "</svg>\n";
  return output;
};

function serialize( input ) {
  if( input.polyline === undefined && input.polygon === undefined ) {
    throw "Input Not Valid: Does not contain any polylines or polygons";
  }

  var points = input.polyline;
  var inc = input.size !== undefined ? input.size : 3;
  var stroke = input.stroke !== undefined ? input.stroke : "black";
  var strokeWidth = input.strokeWidth !== undefined ? input.strokeWidth : "1";
  var fill = input.fill !== undefined ? input.fill : "none";

  var type = "polyline";
  if( points === undefined ) {
    points = input.polygon;
    type = "polygon";
  }

  var pl;
  if( points[ 0 ].constructor === Array ) {
    pl = normalize( points );
    inc = 3;
  }
  else {
    pl = points;
  }

  var bb = calculateBoundingRect( pl );
  var tl = bb[ 0 ];
  var br = bb[ 1 ];
  var w = br[ 0 ] - tl[ 0 ];
  var h = tl[ 1 ] - br[ 1 ];
  if( w > width ) { width = w; }
  if( h > height ) { height = h; }
  tl[ 0 ] *= -1.0;
  var plen = pl.length;
  var output = "\t<" + type + " points=\""

  for( var i = 0; i < plen; i += inc ) {
    output += ( tl[ 0 ] + pl[ i ] ) + ",";
    output += ( tl[ 1 ] + ( -1.0 * pl[ i + 1 ] ) );
    if( i + inc < plen ) { output += " "; }
    else { output += "\" "; }
  }

  output += "stroke=\"" + stroke;
  output += "\" stroke-width=\"" + strokeWidth;
  output += "\" fill=\"" + fill;
  output += "\" />\n";

  return output;
}

function calculateBoundingRect( points ) {
  var tl = [ 100000000.0, -100000000.0 ];
  var br = [ -100000000.0, 100000000.0 ];

  var len = points.length;
  for( var i = 0; i < len; i += 3 ) {
    var x = points[ i ];
    var y = points[ i + 1 ];
    if( x < tl[ 0 ] ) { tl[ 0 ] = x; }
    if( x > br[ 0 ] ) { br[ 0 ] = x; }
    if( y > tl[ 1 ] ) { tl[ 1 ] = y; }
    if( y < br[ 1 ] ) { br[ 1 ] = y; }
  }
  return [ tl, br ];
}


/***/ }),
/* 153 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Symbol_js__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__getRawTag_js__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__objectToString_js__ = __webpack_require__(157);




/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag = __WEBPACK_IMPORTED_MODULE_0__Symbol_js__["a" /* default */] ? __WEBPACK_IMPORTED_MODULE_0__Symbol_js__["a" /* default */].toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag && symToStringTag in Object(value))
    ? __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__getRawTag_js__["a" /* default */])(value)
    : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__objectToString_js__["a" /* default */])(value);
}

/* harmony default export */ __webpack_exports__["a"] = (baseGetTag);


/***/ }),
/* 154 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

/* harmony default export */ __webpack_exports__["a"] = (freeGlobal);

/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(16)))

/***/ }),
/* 155 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__overArg_js__ = __webpack_require__(158);


/** Built-in value references. */
var getPrototype = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__overArg_js__["a" /* default */])(Object.getPrototypeOf, Object);

/* harmony default export */ __webpack_exports__["a"] = (getPrototype);


/***/ }),
/* 156 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Symbol_js__ = __webpack_require__(55);


/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Built-in value references. */
var symToStringTag = __WEBPACK_IMPORTED_MODULE_0__Symbol_js__["a" /* default */] ? __WEBPACK_IMPORTED_MODULE_0__Symbol_js__["a" /* default */].toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

/* harmony default export */ __webpack_exports__["a"] = (getRawTag);


/***/ }),
/* 157 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}

/* harmony default export */ __webpack_exports__["a"] = (objectToString);


/***/ }),
/* 158 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

/* harmony default export */ __webpack_exports__["a"] = (overArg);


/***/ }),
/* 159 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__freeGlobal_js__ = __webpack_require__(154);


/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = __WEBPACK_IMPORTED_MODULE_0__freeGlobal_js__["a" /* default */] || freeSelf || Function('return this')();

/* harmony default export */ __webpack_exports__["a"] = (root);


/***/ }),
/* 160 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

/* harmony default export */ __webpack_exports__["a"] = (isObjectLike);


/***/ }),
/* 161 */
/***/ (function(module, exports, __webpack_require__) {

// Data Structure
exports.Edge = __webpack_require__(4);
exports.HalfEdge = __webpack_require__(6);
exports.Vertex = __webpack_require__(11);
exports.Face = __webpack_require__(5);
exports.Mesh = __webpack_require__(13);

// Checks
exports.Integrity = __webpack_require__(60);
exports.MeshIntegrity = __webpack_require__(163);
exports.FaceIntegrity = __webpack_require__(58);
exports.EdgeIntegrity = __webpack_require__(57);
exports.HalfEdgeIntegrity = __webpack_require__(59);
exports.VertexIntegrity = __webpack_require__(61);

// Queries
exports.HalfEdgePrev = __webpack_require__(15);
exports.EdgeVertices = __webpack_require__(177);
exports.FaceHalfEdges = __webpack_require__(12);
exports.FaceVertices = __webpack_require__(7);
exports.VertexFaces = __webpack_require__(178);
exports.VertexHalfEdges = __webpack_require__(21);
exports.VertexNeighbors = __webpack_require__(22);
exports.MeshCentroid = __webpack_require__(33);

// Operators
exports.InsertVertexOperator = __webpack_require__(20);
exports.InsertEdgeOperator = __webpack_require__(14);
exports.DeleteEdgeOperator = __webpack_require__(166);
exports.LoopOperator = __webpack_require__(170);
exports.CatmullClarkOperator = __webpack_require__(164);
exports.QuadSubdivideOperator = __webpack_require__(173);
exports.TriangulateOperator = __webpack_require__(175);
exports.ExtrudeOperator = __webpack_require__(168);
exports.PipeOperator = __webpack_require__(172);
exports.DuplicateOperator = __webpack_require__(167);
exports.CombineOperator = __webpack_require__(165);
exports.ScaleOperator = __webpack_require__(174);
exports.MoveOperator = __webpack_require__(171);
exports.InvertOperator = __webpack_require__(169);
exports.WireframeOperator = __webpack_require__(176);
exports.CreateFaceOperator = __webpack_require__(32);

// Generator
exports.ProfileGenerator = __webpack_require__(162);


/***/ }),
/* 162 */
/***/ (function(module, exports, __webpack_require__) {

var Mesh = __webpack_require__(13);

module.exports = function( profile ) {
  if( profile.length < 0 || profile[ 0 ].length < 2 ) {
    throw "profile must be a non-zero array of atleast 3 2D positions [ [ x0, y0 ], [ x1, y1 ], [ x2, y2 ] ]";
  }

  var mesh = new Mesh();
  var positions = [];
  var frontFace = [];
  var backFace = [];

  var len = profile.length;
  for( var i = 0; i < len; i++ ) {
    positions.push( [ profile[ i ][ 0 ], profile[ i ][ 1 ], 0.0 ] );
    frontFace.push( i );
    backFace.push( len - 1 - i );
  }
  var cells = [ frontFace, backFace ];

  mesh = new Mesh();
  mesh.setPositions( positions );
  mesh.setCells( cells );
  mesh.process();
  return mesh;
};


/***/ }),
/* 163 */
/***/ (function(module, exports, __webpack_require__) {

var Integrity = __webpack_require__(60);

module.exports = function( mesh ) {
  var passed = true;
  console.log( 'checking faces' );
  if( !Integrity.checkFaces( mesh.getFaces() ) ) {
    console.log( 'faces are messed up' );
    passed = false;
  }

  console.log( 'checking edges' );
  if( !Integrity.checkEdges( mesh.getEdges() ) ) {
    console.log( 'edges are messed up' );
    passed = false;
  }

  console.log( 'checking vertices' );
  if( !Integrity.checkVertices( mesh.getVertices() ) ) {
    console.log( 'vertices are messed up' );
    passed = false;
  }

  console.log( 'checking halfedges' );
  if( !Integrity.checkHalfEdges( mesh.getHalfEdges() ) ) {
    console.log( 'half edges are messed up' );
    passed = false;
  }

  console.log( 'mesh is valid!' );
  return passed;
};


/***/ }),
/* 164 */
/***/ (function(module, exports, __webpack_require__) {

var VertexNeighbors = __webpack_require__(22);
var FaceVertices = __webpack_require__(7);
var FaceHalfEdges = __webpack_require__(12);
var VertexHalfEdges = __webpack_require__(21);
var InsertVertex = __webpack_require__(20);
var InsertEdge = __webpack_require__(14);

var vec3 = __webpack_require__(0).vec3;

module.exports = function( mesh ) {
  var newPositions = [];
  var positions = mesh.positions;
  var plen = positions.length;
  for( var i = 0; i < plen; i++ ) {
    newPositions.push( vec3.clone( positions[ i ] ) );
  }

  var tmp = vec3.create();
  var newPos = vec3.create();
  //calculate new original vertex positions
  var vertices = mesh.getVertices();
  var vlen = vertices.length;
  var kmap = {};

  for( var i = 0; i < 32; i++ ) {
    var beta = 3.0 / ( 2.0 * i );
    var rho = 1.0 / ( 4.0 * i );
    kmap[ i ] = [ 1.0 - beta - rho, beta / i, rho / i ];
  }

  for( var i = 0; i < vlen; i++ ) {
      var vertex = vertices[ i ];
      var vertexIndex = vertex.getIndex();
      var vertexPos = positions[ vertexIndex ];

      var neighbors = VertexHalfEdges( vertex );
      var nlen = neighbors.length;

      var kernel = kmap[ nlen ];
      vec3.copy( newPos, vertexPos );
      vec3.scale( newPos, newPos, kernel[ 0 ] );

      for( var j = 0; j < nlen; j++ ) {
        var he = neighbors[ j ];

        var hen = he.getNextHalfEdge();
        var v0iPos = positions[ hen.getVertex().getIndex() ];
        vec3.scaleAndAdd( newPos, newPos, v0iPos, kernel[ 1 ] );

        var henn = hen.getNextHalfEdge();
        var v1iPos = positions[ henn.getVertex().getIndex() ];
        vec3.scaleAndAdd( newPos, newPos, v1iPos, kernel[ 2 ] );
      }
      vec3.copy( newPositions[ vertexIndex ], newPos );
  }

  //Calculate Face Verts
  var faceVerticesPosHash = {};
  var faces = mesh.getFaces();
  var flen = faces.length;
  for( var i = 0; i < flen; i++ ) {
    var face = faces[ i ];
    var faceVertices = FaceVertices( face );
    var vlen = faceVertices.length;
    var faceVertexPos = vec3.create();
    faceVerticesPosHash[ face.getIndex() ] = faceVertexPos;

    for( var j = 0; j < vlen; j++ ) {
      var vertex = faceVertices[ j ];
      var vertexIndex = vertex.getIndex();
      var vertexPos = positions[ vertexIndex ];
      vec3.scaleAndAdd( faceVertexPos, faceVertexPos, vertexPos, 1.0 / 4.0 );
    }
  }

  //Calculate Edge Verts
  var edgeVerticesPosHash = {};
  var edges = mesh.getEdges();
  var elen = edges.length;
  for( var i = 0; i < elen; i++ ) {
    var edge = edges[ i ];

    var edgeVertexPos = vec3.create();
    edgeVerticesPosHash[ edge.getIndex() ] = edgeVertexPos;

    var he = edge.getHalfEdge();
    var heVertex = he.getVertex();
    var heVertexPos = positions[ heVertex.getIndex() ];
    vec3.scaleAndAdd( edgeVertexPos, edgeVertexPos, heVertexPos, 6.0 / 16.0 );

    var heVertexPos0 = positions[ he.getNextHalfEdge().getNextHalfEdge().getVertex().getIndex() ];
    var heVertexPos1 = positions[ he.getNextHalfEdge().getNextHalfEdge().getNextHalfEdge().getVertex().getIndex() ];

    vec3.scaleAndAdd( edgeVertexPos, edgeVertexPos, heVertexPos0, 1.0 / 16.0 );
    vec3.scaleAndAdd( edgeVertexPos, edgeVertexPos, heVertexPos1, 1.0 / 16.0 );

    var hef = he.getFlipHalfEdge();
    var hefVertex = hef.getVertex();
    var hefVertexPos = positions[ hefVertex.getIndex() ];
    vec3.scaleAndAdd( edgeVertexPos, edgeVertexPos, hefVertexPos, 6.0 / 16.0 );

    var hefVertexPos0 = positions[ hef.getNextHalfEdge().getNextHalfEdge().getVertex().getIndex() ];
    var hefVertexPos1 = positions[ hef.getNextHalfEdge().getNextHalfEdge().getNextHalfEdge().getVertex().getIndex() ];

    vec3.scaleAndAdd( edgeVertexPos, edgeVertexPos, hefVertexPos0, 1.0 / 16.0 );
    vec3.scaleAndAdd( edgeVertexPos, edgeVertexPos, hefVertexPos1, 1.0 / 16.0 );
  }

  // console.log( edgeVerticesPosHash );
  // insert edges and set vertex positions


  for( var i = 0; i < elen; i++ ) {
    var edge = edges[ i ];
    var edgeIndex = edge.getIndex();
    InsertVertex( mesh, edge.getIndex(), edgeVerticesPosHash[ edgeIndex ] );
  }

  var edgeVertices = {};
  for( var i = 0; i < flen; i++ ) {
    var face = faces[ i ];
    edgeVertices[ face.getIndex() ] = [];
    var vertices = FaceVertices( face );
    var vlen = vertices.length;
    for( var j = 0; j < vlen; j++ ) {
      var vertex = vertices[ j ];
      var neighbors = VertexNeighbors( vertex );
      if( neighbors.length == 2 ) {
        edgeVertices[ face.getIndex() ].push( vertex );
      }
    }
  }

  var keys = Object.keys( edgeVertices );
  for( var i = 0; i < keys.length; i++ ) {
    var faceIndex = keys[ i ];
    var vertices = edgeVertices[ faceIndex ];
    var v0 = vertices[ 0 ];
    var v1 = vertices[ 1 ];
    var v2 = vertices[ 2 ];
    var v3 = vertices[ 3 ];
    var result = InsertEdge( mesh, v0.getIndex(), v2.getIndex() );
    var cv = InsertVertex( mesh, result.edge.getIndex(), faceVerticesPosHash[ faceIndex ] );
    edgeVertices[ faceIndex ].push( cv );
    InsertEdge( mesh, v1.getIndex(), cv.getIndex() );
    InsertEdge( mesh, v3.getIndex(), cv.getIndex() );
  }

  for( var i = 0; i < plen; i++ ) {
    vec3.copy( positions[ i ], newPositions[ i ] );
  }
};


/***/ }),
/* 165 */
/***/ (function(module, exports, __webpack_require__) {

var Mesh = __webpack_require__(13);
var Vertex = __webpack_require__(11);
var Edge = __webpack_require__(4);
var HalfEdge = __webpack_require__(6);
var Face = __webpack_require__(5);
var FaceHalfEdges = __webpack_require__(12);

var vec3 = __webpack_require__(0).vec3;

module.exports = function( mesh, other ) {
  var meshPositions = mesh.positions;
  var mplen = meshPositions.length;
  var meshVerticies = mesh.getVertices();
  var mvlen = meshVerticies.length;
  var meshFaces = mesh.getFaces();
  var mflen = meshFaces.length;
  var meshEdges = mesh.getEdges();
  var melen = meshEdges.length;
  var meshEdgeMap = mesh.getEdgeMap();

  var otherPositions = other.positions;
  var oplen = otherPositions.length;
  var otherVertices = other.getVertices();
  var ovlen = otherVertices.length;

  var otherCells = other.getCells();
  var oclen = otherCells.length;

  for( var i = 0; i < oplen; i++ ) {
    var v = new Vertex();
    v.setIndex( meshVerticies.length );
    meshVerticies.push( v );
    var p = vec3.clone( otherPositions[ i ] );
    meshPositions.push( p );
  }

  for( var i = 0; i < oclen; i++ ) {
    var cell = otherCells[ i ];
    var clen = cell.length;
    var face = new Face();
    face.setIndex( meshFaces.length );
    meshFaces.push( face );
    var lhe = undefined;
    var hes = [];
    for( var j = 0; j < clen; j++ ) {
      var i0 = mvlen + cell[ j ];
      var i1 = mvlen + cell[ ( j + 1 ) % clen ];

      var vertex = meshVerticies[ i0 ];
      var edge = mesh.getEdge( i0, i1 );
      var hasEdge = edge ? true : false;
      var he = new HalfEdge();

      if( !hasEdge ) {
        edge = new Edge();
        edge.setIndex( meshEdges.length );
        edge.setHalfEdge( he );
        meshEdges.push( edge );
        var keys = mesh.getEdgeKeys( i0, i1 );
        meshEdgeMap[ keys[ 0 ] ] = edge;
        meshEdgeMap[ keys[ 1 ] ] = edge;
      }
      else {
        var hef = edge.getHalfEdge();
        hef.setFlipHalfEdge( he );
        he.setFlipHalfEdge( hef );
      }

      //he
      he.setFace( face );
      he.setEdge( edge );

      he.setVertex( vertex );
      if( lhe ) {
        lhe.setNextHalfEdge( he );
      }
      hes.push( he );
      lhe = he;

      //vertex
      vertex.setHalfEdge( he );
    }
    face.setHalfEdge( lhe );
    lhe.setNextHalfEdge( hes[ 0 ] );
  }
};


/***/ }),
/* 166 */
/***/ (function(module, exports, __webpack_require__) {

var Face = __webpack_require__(5);
var Edge = __webpack_require__(4);
var HalfEdge = __webpack_require__(6);
var HalfEdgePrev = __webpack_require__(15);

module.exports = function( mesh, edgeIndex ) {
  var edges = mesh.getEdges();
  var edge = edges[ edgeIndex ];
  
  var edgeHalfEdge = edge.getHalfEdge();
  var edgeHalfEdgePrev = HalfEdgePrev( edgeHalfEdge );
  var edgeHalfEdgeNext = edgeHalfEdge.getNextHalfEdge();
  var edgeHalfEdgeVertex = edgeHalfEdge.getVertex();
  var edgeHalfEdgeFace = edgeHalfEdge.getFace();

  var edgeHalfEdgeFlip = edgeHalfEdge.getFlipHalfEdge();
  var edgeHalfEdgeFlipPrev = HalfEdgePrev( edgeHalfEdgeFlip );
  var edgeHalfEdgeFlipNext = edgeHalfEdgeFlip.getNextHalfEdge();
  var edgeHalfEdgeFlipVertex = edgeHalfEdgeFlip.getVertex();
  var edgeHalfEdgeFlipFace = edgeHalfEdgeFlip.getFace();

  // Set Face Half Edge
  edgeHalfEdgeFace.setHalfEdge( edgeHalfEdgeNext );
  //Set Half Edge Face Properties
  edgeHalfEdgePrev.setNextHalfEdge( edgeHalfEdgeFlipNext );
  edgeHalfEdgeVertex.setHalfEdge( edgeHalfEdgeFlipNext );

  // Set Half Edge Flip Face Properties
  edgeHalfEdgeFlipPrev.setNextHalfEdge( edgeHalfEdgeNext );
  edgeHalfEdgeFlipVertex.setHalfEdge( edgeHalfEdgeNext );

  // Remove Half Edge Flip Face
  var faces = mesh.getFaces();
  faces.splice( edgeHalfEdgeFlipFace.getIndex(), 1 );
  var flen = faces.length;
  for( var i = 0; i < flen; i++ ) {
    faces[ i ].setIndex( i );
  }

  // Remove Edge from Edges Array
  edges.splice( edgeIndex, 1 );
  var elen = edges.length;
  for( var i = 0; i < elen; i++ ) {
    edges[ i ].setIndex( i );
  }

  // Remove Edge from Edge Hash Map
  var keys = mesh.getEdgeKeys( edgeHalfEdgeVertex.getIndex(), edgeHalfEdgeFlipVertex.getIndex() );
  var edgeMap = mesh.getEdgeMap();
  delete edgeMap[ keys[ 0 ] ];
  delete edgeMap[ keys[ 1 ] ];
};


/***/ }),
/* 167 */
/***/ (function(module, exports, __webpack_require__) {

var Mesh = __webpack_require__(13);

var vec3 = __webpack_require__(0).vec3;

module.exports = function( mesh ) {
  var newMesh = new Mesh();
  var newPositions = [];
  var positions = mesh.getPositions();
  var plen = positions.length;
  for( var i = 0; i < plen; i++ ) {
    newPositions.push( vec3.clone( positions[ i ] ) );
  }
  newMesh.setPositions( newPositions );
  newMesh.setCells( mesh.getCells() );
  newMesh.process();
  return newMesh;
};


/***/ }),
/* 168 */
/***/ (function(module, exports, __webpack_require__) {

var Vertex = __webpack_require__(11);
var Edge = __webpack_require__(4);
var HalfEdge = __webpack_require__(6);
var Face = __webpack_require__(5);

var FaceHalfEdges = __webpack_require__(12);
var MeshCentroid = __webpack_require__(33);
var calculateNormal = __webpack_require__(2).calculateNormal;
var expandPolygon = __webpack_require__(29).expandPolygon2;

var vec3 = __webpack_require__(0).vec3;
var quat = __webpack_require__(0).quat;

var zAxis = vec3.fromValues( 0.0, 0.0, 1.0 );

module.exports = function( mesh, faceIndex, distance, scale ) {
  var meshVerts = mesh.getVertices();
  var meshHalfEdges = mesh.getHalfEdges();
  var meshEdges = mesh.getEdges();
  var meshEdgeMap = mesh.getEdgeMap();
  var meshFaces = mesh.getFaces();
  var meshPositions = mesh.positions;

  var originalFace = meshFaces[ faceIndex ];
  var faceHalfEdges = FaceHalfEdges( originalFace );
  var flen = faceHalfEdges.length;
  var originalVertices = [];
  for( var i = 0; i < flen; i++ ) {
    var he = faceHalfEdges[ i ];
    var vertex = he.getVertex();
    var vertexIndex = vertex.getIndex();
    originalVertices.push( vertex );
  }

  var vlen = originalVertices.length;
  var v0 = meshPositions[ originalVertices[ 0 ].getIndex() ];
  var v1 = meshPositions[ originalVertices[ 1 ].getIndex() ];
  var v2 = meshPositions[ originalVertices[ 2 ].getIndex() ];

  var normal = calculateNormal( v0, v1, v2 );
  var faceOri = quat.create();
  quat.rotationTo( faceOri, normal, zAxis );

  var newVertices = [];
  var polygon = [];
  var indicies = [];
  var zOffset = 0.0;
  for( var j = 0; j < vlen; j++ ) {
    var vertex = originalVertices[ j ];
    var vertexIndex = vertex.getIndex();
    var vertexPos = vec3.clone( meshPositions[ vertexIndex ] );
    vec3.transformQuat( vertexPos, vertexPos, faceOri );
    zOffset = vertexPos[ 2 ];
    polygon.push( [ vertexPos[ 0 ], vertexPos[ 1 ] ] );
    indicies.push( vertexIndex );
    newVertices.push( new Vertex() );
  }
  // console.log( zOffset );

  quat.rotationTo( faceOri, zAxis, normal );

  var results = expandPolygon( polygon, - ( scale ? scale : 0.00001 ) );

  var rlen = results.length;
  var newPositions = [];
  var newEdges = [];
  var newHalfEdges = [];

  zOffset += ( distance != undefined ? distance : 0.0 );

  for( var i = 0; i < rlen; i++ ) {
    var pos = results[ i ];
    var vpos = vec3.fromValues( pos[ 0 ], pos[ 1 ], zOffset );
    vec3.transformQuat( vpos, vpos, faceOri );
    // vec3.add( vpos, vpos, [0,0,zOffset]);
    newPositions.push( vpos );
    var vertex = newVertices[ i ];
    vertex.setIndex( meshPositions.length );
    meshPositions.push( vpos );
    meshVerts.push( vertex );
  }

  var lhe = undefined;
  var lhef = undefined;
  for( var i = 0; i < rlen; i++ ) {
    var f = originalFace;
    var v = newVertices[ i ];
    var vn = newVertices[ ( i + 1 ) % rlen ];

    var e = new Edge();
    var he = new HalfEdge();
    var hef = new HalfEdge();

    //he
    he.setFlipHalfEdge( hef );
    he.setEdge( e );
    he.setVertex( v );
    he.setFace( f );
    meshHalfEdges.push( he );
    //hef
    hef.setFlipHalfEdge( he );
    hef.setEdge( e );
    hef.setVertex( vn );
    meshHalfEdges.push( hef );

    //e
    e.setIndex( meshEdges.length );
    e.setHalfEdge( he );
    meshEdges.push( e );
    var keys = mesh.getEdgeKeys( v.getIndex(), vn.getIndex() );
    meshEdgeMap[ keys[ 0 ] ] = e;
    meshEdgeMap[ keys[ 1 ] ] = e;

    //v
    v.setHalfEdge( he );
    newEdges.push( e );
    newHalfEdges.push( he );

    if( lhe ) {
      lhe.setNextHalfEdge( he );
      hef.setNextHalfEdge( lhef );
    }
    lhe = he;
    lhef = hef;
  }

  var he = newHalfEdges[ 0 ];
  var hef = he.getFlipHalfEdge();
  lhe.setNextHalfEdge( he );
  hef.setNextHalfEdge( lhef );
  originalFace.setHalfEdge( he );

  var newFaces = [];
  var holeHalfEdges = [];
  var lf = undefined;
  var lhe = undefined;

  for( var i = 0; i < rlen; i++ ) {
    var v = newVertices[ i ];
    var vo = originalVertices[ i ];
    var heo = v.getHalfEdge();
    var heof = heo.getFlipHalfEdge();

    var ofhe = faceHalfEdges[ i ];
    var li = i - 1;
    li = li < 0 ? rlen + li : li;
    var ofhep = faceHalfEdges[ li ];

    var f = new Face();
    var e = new Edge();
    var he = new HalfEdge();
    var hef = new HalfEdge();

    //he
    he.setFlipHalfEdge( hef );
    he.setNextHalfEdge( ofhe );
    he.setEdge( e );
    he.setVertex( v );
    he.setFace( f );

    //hef
    hef.setFlipHalfEdge( he );
    hef.setNextHalfEdge( heof.getNextHalfEdge() );
    hef.setEdge( e );
    hef.setVertex( vo );
    hef.setFace( lf );

    //e
    e.setIndex( meshEdges.length );
    meshEdges.push( e );
    e.setHalfEdge( he );

    //f
    f.setIndex( meshFaces.length );
    f.setHalfEdge( he );
    meshFaces.push( f );
    newFaces.push( f );

    //vo
    vo.setHalfEdge( hef );

    //old connections
    heof.setNextHalfEdge( he );
    heof.setFace( f );
    ofhe.setFace( f );
    ofhep.setNextHalfEdge( hef );

    holeHalfEdges.push( he );
    lf = f;
  }

  var he = holeHalfEdges[ 0 ];
  var hef = he.getFlipHalfEdge();
  hef.setFace( newFaces[ newFaces.length - 1 ] );




  // //didn't work for more than 1
  // for( var i = 0; i < rlen; i++ ) {
  //   var vn0 = newVertices[ i ];
  //   var vn1 = newVertices[ ( i + 1 ) % rlen ];
  //
  //   var vo0 = originalVertices[ i ];
  //   var vo1 = originalVertices[ ( i + 1 ) % rlen ];
  //
  //   meshFaces.push( createFace( mesh, [ vo0, vo1, vn1, vn0 ] ) );
  // }

  return originalFace;
};

function createFace( mesh, vertices, face ) {
  var meshEdgeMap = mesh.getEdgeMap();
  var meshFaces = mesh.getFaces();
  var meshHalfEdges = mesh.getHalfEdges();
  var meshEdges = mesh.getEdges();

  if( !face ) {
    face = new Face();
    face.setIndex( meshFaces.length );
  }

  var vlen = vertices.length;
  var lhe;
  var hes = [];
  for( var i = 0; i < vlen; i++ ) {
    var v0 = vertices[ i ];
    var v1 = vertices[ ( i + 1 ) % vlen ];
    var i0 = v0.getIndex();
    var i1 = v1.getIndex();

    var he = new HalfEdge();
    var edge = mesh.getEdge( i0, i1 );
    if( edge ) {
      var het = edge.getHalfEdge();
      var hetv = het.getVertex();
      if( hetv == v0 ) {
        he = het;
      }
      else {
        he.setFlipHalfEdge( het );
        het.setFlipHalfEdge( he );
      }
    }
    else {
      edge = new Edge();
      var keys = mesh.getEdgeKeys( i0, i1 );
      edge.setIndex( meshEdges.length );
      meshEdges.push( edge );
      edge.setHalfEdge( he );
      meshEdgeMap[ keys[ 0 ] ] = edge;
      meshEdgeMap[ keys[ 1 ] ] = edge;
    }

    //he
    he.setEdge( edge );
    he.setFace( face );
    he.setVertex( v0 );
    if( lhe ) {
      lhe.setNextHalfEdge( he );
    }
    hes.push( he );
    lhe = he;
    meshHalfEdges.push( he );
  }
  face.setHalfEdge( lhe );
  lhe.setNextHalfEdge( hes[ 0 ] );
  return face;
}


/***/ }),
/* 169 */
/***/ (function(module, exports, __webpack_require__) {

var Mesh = __webpack_require__(13);
var FaceHalfEdges = __webpack_require__(12);
var FaceVertices = __webpack_require__(7);

var vec3 = __webpack_require__(0).vec3;

module.exports = function( mesh ) {
  var faces = mesh.getFaces();
  var flen = faces.length;
  for( var i = 0; i < flen; i++ ) {
    var hes = FaceHalfEdges( faces[ i ] );
    var vts = FaceVertices( faces[ i ] );
    var hlen = hes.length;
    for( var j = 0; j < hlen; j++ ) {
      var i0 = j;
      var i1 = ( j + 1 ) % hlen;

      var v0 = vts[ i0 ];
      var v1 = vts[ i1 ];

      var h0 = hes[ i0 ];
      var h1 = hes[ i1 ];
      h1.setNextHalfEdge( h0 );
      h0.setVertex( v1 );
      v1.setHalfEdge( h0 );
    }
  }
};


/***/ }),
/* 170 */
/***/ (function(module, exports, __webpack_require__) {

var vec3 = __webpack_require__(0).vec3;
var FaceVertices = __webpack_require__(7);
var VertexNeighbors = __webpack_require__(22);
var InsertVertex = __webpack_require__(20);
var InsertEdge = __webpack_require__(14);

module.exports = function( mesh ) {
  var positions = mesh.positions;
  var plen = positions.length;
  var newPositions = [];
  for( var i = 0; i < plen; i++ ) {
    newPositions.push( vec3.create() );
  }

  var vertices = mesh.getVertices();
  var vlen = vertices.length;
  var beta;
  for( var i = 0; i < vlen; i++ ) {
    var vertex = vertices[ i ];
    var vertexIndex = vertex.getIndex();
    var vertexPos = positions[ vertexIndex ];
    var newPos = newPositions[ vertexIndex ];

    var neighbors = VertexNeighbors( vertex );
    var nlen = neighbors.length;

    if( nlen === 3 ) {
      beta = 3.0 / 16.0;
    }
    else if( nlen > 3 ) {
      beta = ( ( 5.0 / 8.0 ) - Math.pow( ( 0.375 + 0.25 * Math.cos( ( Math.PI * 2.0 ) / nlen ) ), 2.0 ) ) / nlen;
    }

    vec3.scaleAndAdd( newPos, newPos, vertexPos, ( 1.0 - nlen * beta ) );

    for( var j = 0; j < nlen; j++ ) {
      var neighborPos = positions[ neighbors[ j ].getIndex() ];
      vec3.scaleAndAdd( newPos, newPos, neighborPos, beta );
    }
  }

  var edges = mesh.getEdges();
  var len = edges.length;
  var newVerts = [];
  var vertexAdjacentFactor = 0.375;
  var vertexOppositeFactor = 0.125;

  var newPos = vec3.create();
  for( var i = 0; i < len; i++ ) {
    vec3.set( newPos, 0, 0, 0 );
    var edge = edges[ i ];
    var halfEdge = edge.getHalfEdge();
    var halfEdgeFlip = halfEdge.getFlipHalfEdge();
    var halfEdgeTop = halfEdge.getNextHalfEdge().getNextHalfEdge();
    var halfEdgeFlipTop = halfEdgeFlip.getNextHalfEdge().getNextHalfEdge();

    var halfEdgeVertex = halfEdge.getVertex();
    var halfEdgeFlipVertex = halfEdgeFlip.getVertex();
    var halfEdgeTopVertex = halfEdgeTop.getVertex();
    var halfEdgeFlipTopVertex = halfEdgeFlipTop.getVertex();

    var halfEdgeVertexPos = positions[ halfEdgeVertex.getIndex() ];
    var halfEdgeFlipVertexPos = positions[ halfEdgeFlipVertex.getIndex() ];
    var halfEdgeTopVertexPos = positions[ halfEdgeTopVertex.getIndex() ];
    var halfEdgeFlipTopVertexPos = positions[ halfEdgeFlipTopVertex.getIndex() ];

    vec3.scaleAndAdd( newPos, newPos, halfEdgeVertexPos, vertexAdjacentFactor );
    vec3.scaleAndAdd( newPos, newPos, halfEdgeFlipVertexPos, vertexAdjacentFactor );
    vec3.scaleAndAdd( newPos, newPos, halfEdgeTopVertexPos, vertexOppositeFactor );
    vec3.scaleAndAdd( newPos, newPos, halfEdgeFlipTopVertexPos, vertexOppositeFactor );

    newVerts.push( InsertVertex( mesh, edge.getIndex(), newPos ) );
  }

  var faces = mesh.getFaces();
  var flen = faces.length;
  var result;
  for( var i = 0; i < flen; i++ ) {
    var face = faces[ i ];
    var vertices = FaceVertices( face );
    var vlen = vertices.length;

    var v1 = vertices[ 1 ];
    var v3 = vertices[ 3 ];
    var v5 = vertices[ 5 ];

    result = InsertEdge( mesh, v1.getIndex(), v3.getIndex() );
    result = InsertEdge( mesh, v3.getIndex(), v5.getIndex() );
    result = InsertEdge( mesh, v5.getIndex(), v1.getIndex() );
  }

  for( var i = 0; i < plen; i++ ) {
    vec3.copy( positions[ i ], newPositions[ i ] );
  }
};


/***/ }),
/* 171 */
/***/ (function(module, exports, __webpack_require__) {

var Mesh = __webpack_require__(13);

var vec3 = __webpack_require__(0).vec3;

var tmp = vec3.create();

module.exports = function( mesh, displacement ) {
  vec3.set( tmp, 0.0, 0.0, 0.0 );
  var positions = mesh.positions;
  var plen = positions.length;
  for( var i = 0; i < plen; i++ ) {
    var pos = positions[ i ];
    vec3.subtract( pos, pos, displacement );
  }
};


/***/ }),
/* 172 */
/***/ (function(module, exports, __webpack_require__) {

var Vertex = __webpack_require__(11);
var Edge = __webpack_require__(4);
var HalfEdge = __webpack_require__(6);
var Face = __webpack_require__(5);

var FaceHalfEdges = __webpack_require__(12);
var FaceVertices = __webpack_require__(7);
var HalfEdgePrev = __webpack_require__(15);

var createFace = __webpack_require__(32);

module.exports = function( mesh, faceIndex0, faceIndex1, vertexOffset ) {
  var meshFaces = mesh.getFaces();

  var f0 = meshFaces[ faceIndex0 ];
  var f0HalfEdges = FaceHalfEdges( f0 );
  var f0Vertices = FaceVertices( f0 );
  var f0len = f0Vertices.length;

  var f1 = meshFaces[ faceIndex1 ];
  var f1HalfEdges = FaceHalfEdges( f1 );
  var f1Vertices = FaceVertices( f1 );
  var f1len = f1Vertices.length;

  if( f0len != f1len ) {
    throw 'faces do not have the same number of vertices, can not create pipe';
  }

  var faces = [ f0, f1 ];
  var offset = vertexOffset != undefined ? vertexOffset : 2;
  for( var i = 0; i < f0len; i++ ) {

    var v0i0 = i - offset;
    v0i0 = v0i0 >= f0len ? v0i0 % f0len : v0i0;
    v0i0 = v0i0 < 0 ? f0len + v0i0 : v0i0;
    var v0i1 = ( ( i + 1 ) % f0len ) - offset;
    v0i1 = v0i1 >= f0len ? v0i1 % f0len : v0i1;
    v0i1 = v0i1 < 0 ? f0len + v0i1 : v0i1;

    var v1i0 = ( f0len - i ) % f0len;
    var v1i1 = ( f0len - ( i + 1 ) );
    var oldFace = faces[ i ];
    var inputFace = oldFace ? true : false;
    var result = createFace( mesh, [
      f0Vertices[ v0i0 ],
      f0Vertices[ v0i1 ],
      f1Vertices[ v1i1 ],
      f1Vertices[ v1i0 ] ], oldFace );

    if( !inputFace ) {
      meshFaces.push( result );
    }
  }
};


/***/ }),
/* 173 */
/***/ (function(module, exports, __webpack_require__) {

var vec3 = __webpack_require__(0).vec3;
var VertexNeighbors = __webpack_require__(22);
var FaceVertices = __webpack_require__(7);
var InsertVertex = __webpack_require__(20);
var InsertEdge = __webpack_require__(14);

module.exports = function( mesh ) {
  var edges = mesh.getEdges();
  var elen = edges.length;
  var edgeVertices = {};

  for( var i = 0; i < elen; i++ ) {
    var edge = edges[ i ];
    InsertVertex( mesh, edge.getIndex() );
  }

  var faces = mesh.getFaces();
  var flen = faces.length;
  for( var i = 0; i < flen; i++ ) {
    var face = faces[ i ];
    edgeVertices[ face.getIndex() ] = [];
    var vertices = FaceVertices( face );
    var vlen = vertices.length;
    for( var j = 0; j < vlen; j++ ) {
      var vertex = vertices[ j ];
      var neighbors = VertexNeighbors( vertex );
      if( neighbors.length == 2 ) {
        edgeVertices[ face.getIndex() ].push( vertex );
      }
    }
  }

  var keys = Object.keys( edgeVertices );
  for( var i = 0; i < keys.length; i++ ) {
    var faceIndex = keys[ i ];
    var vertices = edgeVertices[ faceIndex ];
    var v0 = vertices[ 0 ];
    var v1 = vertices[ 1 ];
    var v2 = vertices[ 2 ];
    var v3 = vertices[ 3 ];
    var result = InsertEdge( mesh, v0.getIndex(), v2.getIndex() );
    var cv = InsertVertex( mesh, result.edge.getIndex() );
    edgeVertices[ faceIndex ].push( cv );
    InsertEdge( mesh, v1.getIndex(), cv.getIndex() );
    InsertEdge( mesh, v3.getIndex(), cv.getIndex() );
  }
};


/***/ }),
/* 174 */
/***/ (function(module, exports, __webpack_require__) {

var MeshCentroid = __webpack_require__(33);

var vec3 = __webpack_require__(0).vec3;

var tmp = vec3.create();

module.exports = function( mesh, scale ) {
  if( scale.constructor != Array ) {
    scale = [ scale, scale, scale ];
  }
  vec3.set( tmp, 0.0, 0.0, 0.0 );
  var centroid = MeshCentroid( mesh );
  var positions = mesh.positions;
  var plen = positions.length;
  for( var i = 0; i < plen; i++ ) {
    var pos = positions[ i ];
    vec3.subtract( pos, pos, centroid );
    vec3.multiply( pos, pos, scale );
    vec3.add( pos, pos, centroid );
  }
};


/***/ }),
/* 175 */
/***/ (function(module, exports, __webpack_require__) {

var FaceVertices = __webpack_require__(7);
var calculateNormal = __webpack_require__(2).calculateNormal;
var triangulatePolygon = __webpack_require__(29).triangulatePolygon2;
var vec3 = __webpack_require__(0).vec3;
var quat = __webpack_require__(0).quat;
var InsertEdge = __webpack_require__(14);

module.exports = function( mesh ) {
  // console.log( 'starting triangulation' );
  var positions = mesh.positions;
  var faces = mesh.getFaces();
  var flen = faces.length;
  var zAxis = vec3.fromValues( 0.0, 0.0, 1.0 );
  var res = {};
  for( var i = 0; i < flen; i++ ) {
    var face = faces[ i ];
    var vertices = FaceVertices( face );
    var vlen = vertices.length;
    if( vlen === 3 ) { continue; }

    var v0 = positions[ vertices[ 0 ].getIndex() ];
    var v1 = positions[ vertices[ 1 ].getIndex() ];
    var v2 = positions[ vertices[ 2 ].getIndex() ];

    var normal = calculateNormal( v0, v1, v2 );
    var faceOri = quat.create();
    quat.rotationTo( faceOri, normal, zAxis );

    var polygon = [];
    var indicies = [];
    for( var j = 0; j < vlen; j++ ) {
      var vertex = vertices[ j ];
      var vertexIndex = vertex.getIndex();
      var vertexPos = vec3.clone( positions[ vertexIndex ] );
      vec3.transformQuat( vertexPos, vertexPos, faceOri );
      polygon.push( [ vertexPos[ 0 ], vertexPos[ 1 ] ] );
      indicies.push( vertexIndex );
    }

    var results = triangulatePolygon( polygon );
    var rlen = results.length;
    for( var k = 0; k < rlen; k++ ) {
      var result = results[ k ];

      var i1 = indicies[ result[ 1 ] ];
      var i2 = indicies[ result[ 2 ] ];

      InsertEdge( mesh, i1, i2 );
    }
  }
};


/***/ }),
/* 176 */
/***/ (function(module, exports, __webpack_require__) {

var Vertex = __webpack_require__(11);
var FaceHalfEdges = __webpack_require__(12);
var FaceVertices = __webpack_require__(7);
var VertexHalfEdges = __webpack_require__(21);
var CreateFace = __webpack_require__(32);
var Cross = __webpack_require__(2).cross;
var CalculateNormal = __webpack_require__(2).calculateNormal;
var ExpandPolygon = __webpack_require__(29).expandPolygon2;

var vec3 = __webpack_require__(0).vec3;
var quat = __webpack_require__(0).quat;

var tmp = vec3.create();
var tmp2 = vec3.create();
var p0p1 = vec3.create();
var p2p1 = vec3.create();

var zAxis = vec3.fromValues( 0.0, 0.0, 1.0 );

module.exports = function( mesh, offset, depth ) {
  var meshPositions = mesh.positions;
  var meshVertices = mesh.getVertices();
  var mvlen = meshVertices.length;

  var meshFaces = mesh.getFaces();
  var mflen = meshFaces.length;

  offset = offset != undefined ? offset : 1.0;
  depth = depth != undefined ? depth : offset;

  for( var i = 0; i < mvlen; i++ ) {
    var vertex = meshVertices[ i ];
    var vertexPosition = meshPositions[ vertex.getIndex() ];
    var vertexHalfEdges = VertexHalfEdges( vertex );
    var hlen = vertexHalfEdges.length;
    vec3.set( tmp, 0, 0, 0 );
    for( var j = 0; j < hlen; j++ ) {
      var h0 = vertexHalfEdges[ j ];
      var h1 = vertexHalfEdges[ ( j + 1 ) % hlen ];

      var h0n = h0.getNextHalfEdge();
      var h1n = h1.getNextHalfEdge();

      var v0 = h0n.getVertex();
      var v1 = h1n.getVertex();

      var p0 = meshPositions[ v0.getIndex() ];
      var p1 = meshPositions[ v1.getIndex() ];

      Cross( tmp2, p0, vertexPosition, p1 );
      vec3.add( tmp, tmp, tmp2 );
    }

    vec3.normalize( tmp, tmp );
    vec3.scale( tmp, tmp, depth );
    var newPosition = vec3.create();
    vec3.add( newPosition, vertexPosition, tmp );

    var vertex = new Vertex();
    vertex.setIndex( meshVertices.length );
    meshVertices.push( vertex );
    meshPositions.push( newPosition );
  }

  for( var k = 0; k < mflen; k++ ) {
    var face = meshFaces[ k ];
    var faceVertices = FaceVertices( face );
    var vlen = faceVertices.length;
    var v0 = meshPositions[ faceVertices[ 0 ].getIndex() ];
    var v1 = meshPositions[ faceVertices[ 1 ].getIndex() ];
    var v2 = meshPositions[ faceVertices[ 2 ].getIndex() ];

    var normal = CalculateNormal( v0, v1, v2 );
    var faceOri = quat.create();
    quat.rotationTo( faceOri, normal, zAxis );

    var newFaceVertices = [];
    var polygon = [];
    var zOffset = 0.0;
    for( var j = 0; j < vlen; j++ ) {
      var vertex = faceVertices[ j ];
      var vertexIndex = vertex.getIndex();
      var vertexPos = vec3.clone( meshPositions[ vertexIndex ] );
      vec3.transformQuat( vertexPos, vertexPos, faceOri );
      zOffset = vertexPos[ 2 ];
      polygon.push( [ vertexPos[ 0 ], vertexPos[ 1 ] ] );
      newFaceVertices.push( new Vertex() );
    }

    quat.rotationTo( faceOri, zAxis, normal );

    var results = ExpandPolygon( polygon, - offset );
    var rlen = results.length;

    for( var i = 0; i < rlen; i++ ) {
      var pos = results[ i ];
      var vpos = vec3.fromValues( pos[ 0 ], pos[ 1 ], zOffset );
      vec3.transformQuat( vpos, vpos, faceOri );
      var vertex = newFaceVertices[ i ];
      vertex.setIndex( meshVertices.length );
      meshPositions.push( vpos );
      meshVertices.push( vertex );
    }

    var faces = [ face ];
    for( var i = 0; i < vlen; i++ ) {
      var i0 = i;
      var i1 = ( i + 1 ) % vlen;
      var v0 = faceVertices[ i0 ];
      var v1 = faceVertices[ i1 ];

      var v0e = meshVertices[ v0.getIndex() + mvlen ];
      var v1e = meshVertices[ v1.getIndex() + mvlen ];

      var v2 = newFaceVertices[ i1 ];
      var v3 = newFaceVertices[ i0 ];

      var f = faces[ i ];
      var add = f == undefined ? true : false;
      var result;

      if( depth > 0.0 ) {
        result = CreateFace( mesh, [ v0, v1, v2, v3 ], f );
        meshFaces.push( CreateFace( mesh, [ v0e, v3, v2, v1e ] ) );
      }
      else {
        result = CreateFace( mesh, [ v3, v2, v1, v0 ], f );
        meshFaces.push( CreateFace( mesh, [ v1e, v2, v3, v0e ] ) );
      }

      if( add ) {
        meshFaces.push( result );
      }
    }
  }
};


/***/ }),
/* 177 */
/***/ (function(module, exports) {

module.exports = function( edge ) {
    var results = [];
    var he = edge.getHalfEdge();
    results.push( he.getVertex() );
    he = he.getFlipHalfEdge();
    results.push( he.getVertex() );
    return results; 
};


/***/ }),
/* 178 */
/***/ (function(module, exports) {

module.exports = function( vertex ) {
  var startHalfEdge = originalHalfEdge = he = vertex.getHalfEdge();
  var faces = [];
  do {
    if( he.getNextHalfEdge() === startHalfEdge ) {
      faces.push( he.getFace() );
      he = he.getFlipHalfEdge();
      startHalfEdge = he;
    }
    else {
      he = he.getNextHalfEdge();
    }
  } while ( he != originalHalfEdge );
  return faces;
};


/***/ }),
/* 179 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var compile = __webpack_require__(102)

var EmptyProc = {
  body: "",
  args: [],
  thisVars: [],
  localVars: []
}

function fixup(x) {
  if(!x) {
    return EmptyProc
  }
  for(var i=0; i<x.args.length; ++i) {
    var a = x.args[i]
    if(i === 0) {
      x.args[i] = {name: a, lvalue:true, rvalue: !!x.rvalue, count:x.count||1 }
    } else {
      x.args[i] = {name: a, lvalue:false, rvalue:true, count: 1}
    }
  }
  if(!x.thisVars) {
    x.thisVars = []
  }
  if(!x.localVars) {
    x.localVars = []
  }
  return x
}

function pcompile(user_args) {
  return compile({
    args:     user_args.args,
    pre:      fixup(user_args.pre),
    body:     fixup(user_args.body),
    post:     fixup(user_args.proc),
    funcName: user_args.funcName
  })
}

function makeOp(user_args) {
  var args = []
  for(var i=0; i<user_args.args.length; ++i) {
    args.push("a"+i)
  }
  var wrapper = new Function("P", [
    "return function ", user_args.funcName, "_ndarrayops(", args.join(","), ") {P(", args.join(","), ");return a0}"
  ].join(""))
  return wrapper(pcompile(user_args))
}

var assign_ops = {
  add:  "+",
  sub:  "-",
  mul:  "*",
  div:  "/",
  mod:  "%",
  band: "&",
  bor:  "|",
  bxor: "^",
  lshift: "<<",
  rshift: ">>",
  rrshift: ">>>"
}
;(function(){
  for(var id in assign_ops) {
    var op = assign_ops[id]
    exports[id] = makeOp({
      args: ["array","array","array"],
      body: {args:["a","b","c"],
             body: "a=b"+op+"c"},
      funcName: id
    })
    exports[id+"eq"] = makeOp({
      args: ["array","array"],
      body: {args:["a","b"],
             body:"a"+op+"=b"},
      rvalue: true,
      funcName: id+"eq"
    })
    exports[id+"s"] = makeOp({
      args: ["array", "array", "scalar"],
      body: {args:["a","b","s"],
             body:"a=b"+op+"s"},
      funcName: id+"s"
    })
    exports[id+"seq"] = makeOp({
      args: ["array","scalar"],
      body: {args:["a","s"],
             body:"a"+op+"=s"},
      rvalue: true,
      funcName: id+"seq"
    })
  }
})();

var unary_ops = {
  not: "!",
  bnot: "~",
  neg: "-",
  recip: "1.0/"
}
;(function(){
  for(var id in unary_ops) {
    var op = unary_ops[id]
    exports[id] = makeOp({
      args: ["array", "array"],
      body: {args:["a","b"],
             body:"a="+op+"b"},
      funcName: id
    })
    exports[id+"eq"] = makeOp({
      args: ["array"],
      body: {args:["a"],
             body:"a="+op+"a"},
      rvalue: true,
      count: 2,
      funcName: id+"eq"
    })
  }
})();

var binary_ops = {
  and: "&&",
  or: "||",
  eq: "===",
  neq: "!==",
  lt: "<",
  gt: ">",
  leq: "<=",
  geq: ">="
}
;(function() {
  for(var id in binary_ops) {
    var op = binary_ops[id]
    exports[id] = makeOp({
      args: ["array","array","array"],
      body: {args:["a", "b", "c"],
             body:"a=b"+op+"c"},
      funcName: id
    })
    exports[id+"s"] = makeOp({
      args: ["array","array","scalar"],
      body: {args:["a", "b", "s"],
             body:"a=b"+op+"s"},
      funcName: id+"s"
    })
    exports[id+"eq"] = makeOp({
      args: ["array", "array"],
      body: {args:["a", "b"],
             body:"a=a"+op+"b"},
      rvalue:true,
      count:2,
      funcName: id+"eq"
    })
    exports[id+"seq"] = makeOp({
      args: ["array", "scalar"],
      body: {args:["a","s"],
             body:"a=a"+op+"s"},
      rvalue:true,
      count:2,
      funcName: id+"seq"
    })
  }
})();

var math_unary = [
  "abs",
  "acos",
  "asin",
  "atan",
  "ceil",
  "cos",
  "exp",
  "floor",
  "log",
  "round",
  "sin",
  "sqrt",
  "tan"
]
;(function() {
  for(var i=0; i<math_unary.length; ++i) {
    var f = math_unary[i]
    exports[f] = makeOp({
                    args: ["array", "array"],
                    pre: {args:[], body:"this_f=Math."+f, thisVars:["this_f"]},
                    body: {args:["a","b"], body:"a=this_f(b)", thisVars:["this_f"]},
                    funcName: f
                  })
    exports[f+"eq"] = makeOp({
                      args: ["array"],
                      pre: {args:[], body:"this_f=Math."+f, thisVars:["this_f"]},
                      body: {args: ["a"], body:"a=this_f(a)", thisVars:["this_f"]},
                      rvalue: true,
                      count: 2,
                      funcName: f+"eq"
                    })
  }
})();

var math_comm = [
  "max",
  "min",
  "atan2",
  "pow"
]
;(function(){
  for(var i=0; i<math_comm.length; ++i) {
    var f= math_comm[i]
    exports[f] = makeOp({
                  args:["array", "array", "array"],
                  pre: {args:[], body:"this_f=Math."+f, thisVars:["this_f"]},
                  body: {args:["a","b","c"], body:"a=this_f(b,c)", thisVars:["this_f"]},
                  funcName: f
                })
    exports[f+"s"] = makeOp({
                  args:["array", "array", "scalar"],
                  pre: {args:[], body:"this_f=Math."+f, thisVars:["this_f"]},
                  body: {args:["a","b","c"], body:"a=this_f(b,c)", thisVars:["this_f"]},
                  funcName: f+"s"
                  })
    exports[f+"eq"] = makeOp({ args:["array", "array"],
                  pre: {args:[], body:"this_f=Math."+f, thisVars:["this_f"]},
                  body: {args:["a","b"], body:"a=this_f(a,b)", thisVars:["this_f"]},
                  rvalue: true,
                  count: 2,
                  funcName: f+"eq"
                  })
    exports[f+"seq"] = makeOp({ args:["array", "scalar"],
                  pre: {args:[], body:"this_f=Math."+f, thisVars:["this_f"]},
                  body: {args:["a","b"], body:"a=this_f(a,b)", thisVars:["this_f"]},
                  rvalue:true,
                  count:2,
                  funcName: f+"seq"
                  })
  }
})();

var math_noncomm = [
  "atan2",
  "pow"
]
;(function(){
  for(var i=0; i<math_noncomm.length; ++i) {
    var f= math_noncomm[i]
    exports[f+"op"] = makeOp({
                  args:["array", "array", "array"],
                  pre: {args:[], body:"this_f=Math."+f, thisVars:["this_f"]},
                  body: {args:["a","b","c"], body:"a=this_f(c,b)", thisVars:["this_f"]},
                  funcName: f+"op"
                })
    exports[f+"ops"] = makeOp({
                  args:["array", "array", "scalar"],
                  pre: {args:[], body:"this_f=Math."+f, thisVars:["this_f"]},
                  body: {args:["a","b","c"], body:"a=this_f(c,b)", thisVars:["this_f"]},
                  funcName: f+"ops"
                  })
    exports[f+"opeq"] = makeOp({ args:["array", "array"],
                  pre: {args:[], body:"this_f=Math."+f, thisVars:["this_f"]},
                  body: {args:["a","b"], body:"a=this_f(b,a)", thisVars:["this_f"]},
                  rvalue: true,
                  count: 2,
                  funcName: f+"opeq"
                  })
    exports[f+"opseq"] = makeOp({ args:["array", "scalar"],
                  pre: {args:[], body:"this_f=Math."+f, thisVars:["this_f"]},
                  body: {args:["a","b"], body:"a=this_f(b,a)", thisVars:["this_f"]},
                  rvalue:true,
                  count:2,
                  funcName: f+"opseq"
                  })
  }
})();

exports.any = compile({
  args:["array"],
  pre: EmptyProc,
  body: {args:[{name:"a", lvalue:false, rvalue:true, count:1}], body: "if(a){return true}", localVars: [], thisVars: []},
  post: {args:[], localVars:[], thisVars:[], body:"return false"},
  funcName: "any"
})

exports.all = compile({
  args:["array"],
  pre: EmptyProc,
  body: {args:[{name:"x", lvalue:false, rvalue:true, count:1}], body: "if(!x){return false}", localVars: [], thisVars: []},
  post: {args:[], localVars:[], thisVars:[], body:"return true"},
  funcName: "all"
})

exports.sum = compile({
  args:["array"],
  pre: {args:[], localVars:[], thisVars:["this_s"], body:"this_s=0"},
  body: {args:[{name:"a", lvalue:false, rvalue:true, count:1}], body: "this_s+=a", localVars: [], thisVars: ["this_s"]},
  post: {args:[], localVars:[], thisVars:["this_s"], body:"return this_s"},
  funcName: "sum"
})

exports.prod = compile({
  args:["array"],
  pre: {args:[], localVars:[], thisVars:["this_s"], body:"this_s=1"},
  body: {args:[{name:"a", lvalue:false, rvalue:true, count:1}], body: "this_s*=a", localVars: [], thisVars: ["this_s"]},
  post: {args:[], localVars:[], thisVars:["this_s"], body:"return this_s"},
  funcName: "prod"
})

exports.norm2squared = compile({
  args:["array"],
  pre: {args:[], localVars:[], thisVars:["this_s"], body:"this_s=0"},
  body: {args:[{name:"a", lvalue:false, rvalue:true, count:2}], body: "this_s+=a*a", localVars: [], thisVars: ["this_s"]},
  post: {args:[], localVars:[], thisVars:["this_s"], body:"return this_s"},
  funcName: "norm2squared"
})
  
exports.norm2 = compile({
  args:["array"],
  pre: {args:[], localVars:[], thisVars:["this_s"], body:"this_s=0"},
  body: {args:[{name:"a", lvalue:false, rvalue:true, count:2}], body: "this_s+=a*a", localVars: [], thisVars: ["this_s"]},
  post: {args:[], localVars:[], thisVars:["this_s"], body:"return Math.sqrt(this_s)"},
  funcName: "norm2"
})
  

exports.norminf = compile({
  args:["array"],
  pre: {args:[], localVars:[], thisVars:["this_s"], body:"this_s=0"},
  body: {args:[{name:"a", lvalue:false, rvalue:true, count:4}], body:"if(-a>this_s){this_s=-a}else if(a>this_s){this_s=a}", localVars: [], thisVars: ["this_s"]},
  post: {args:[], localVars:[], thisVars:["this_s"], body:"return this_s"},
  funcName: "norminf"
})

exports.norm1 = compile({
  args:["array"],
  pre: {args:[], localVars:[], thisVars:["this_s"], body:"this_s=0"},
  body: {args:[{name:"a", lvalue:false, rvalue:true, count:3}], body: "this_s+=a<0?-a:a", localVars: [], thisVars: ["this_s"]},
  post: {args:[], localVars:[], thisVars:["this_s"], body:"return this_s"},
  funcName: "norm1"
})

exports.sup = compile({
  args: [ "array" ],
  pre:
   { body: "this_h=-Infinity",
     args: [],
     thisVars: [ "this_h" ],
     localVars: [] },
  body:
   { body: "if(_inline_1_arg0_>this_h)this_h=_inline_1_arg0_",
     args: [{"name":"_inline_1_arg0_","lvalue":false,"rvalue":true,"count":2} ],
     thisVars: [ "this_h" ],
     localVars: [] },
  post:
   { body: "return this_h",
     args: [],
     thisVars: [ "this_h" ],
     localVars: [] }
 })

exports.inf = compile({
  args: [ "array" ],
  pre:
   { body: "this_h=Infinity",
     args: [],
     thisVars: [ "this_h" ],
     localVars: [] },
  body:
   { body: "if(_inline_1_arg0_<this_h)this_h=_inline_1_arg0_",
     args: [{"name":"_inline_1_arg0_","lvalue":false,"rvalue":true,"count":2} ],
     thisVars: [ "this_h" ],
     localVars: [] },
  post:
   { body: "return this_h",
     args: [],
     thisVars: [ "this_h" ],
     localVars: [] }
 })

exports.argmin = compile({
  args:["index","array","shape"],
  pre:{
    body:"{this_v=Infinity;this_i=_inline_0_arg2_.slice(0)}",
    args:[
      {name:"_inline_0_arg0_",lvalue:false,rvalue:false,count:0},
      {name:"_inline_0_arg1_",lvalue:false,rvalue:false,count:0},
      {name:"_inline_0_arg2_",lvalue:false,rvalue:true,count:1}
      ],
    thisVars:["this_i","this_v"],
    localVars:[]},
  body:{
    body:"{if(_inline_1_arg1_<this_v){this_v=_inline_1_arg1_;for(var _inline_1_k=0;_inline_1_k<_inline_1_arg0_.length;++_inline_1_k){this_i[_inline_1_k]=_inline_1_arg0_[_inline_1_k]}}}",
    args:[
      {name:"_inline_1_arg0_",lvalue:false,rvalue:true,count:2},
      {name:"_inline_1_arg1_",lvalue:false,rvalue:true,count:2}],
    thisVars:["this_i","this_v"],
    localVars:["_inline_1_k"]},
  post:{
    body:"{return this_i}",
    args:[],
    thisVars:["this_i"],
    localVars:[]}
})

exports.argmax = compile({
  args:["index","array","shape"],
  pre:{
    body:"{this_v=-Infinity;this_i=_inline_0_arg2_.slice(0)}",
    args:[
      {name:"_inline_0_arg0_",lvalue:false,rvalue:false,count:0},
      {name:"_inline_0_arg1_",lvalue:false,rvalue:false,count:0},
      {name:"_inline_0_arg2_",lvalue:false,rvalue:true,count:1}
      ],
    thisVars:["this_i","this_v"],
    localVars:[]},
  body:{
    body:"{if(_inline_1_arg1_>this_v){this_v=_inline_1_arg1_;for(var _inline_1_k=0;_inline_1_k<_inline_1_arg0_.length;++_inline_1_k){this_i[_inline_1_k]=_inline_1_arg0_[_inline_1_k]}}}",
    args:[
      {name:"_inline_1_arg0_",lvalue:false,rvalue:true,count:2},
      {name:"_inline_1_arg1_",lvalue:false,rvalue:true,count:2}],
    thisVars:["this_i","this_v"],
    localVars:["_inline_1_k"]},
  post:{
    body:"{return this_i}",
    args:[],
    thisVars:["this_i"],
    localVars:[]}
})  

exports.random = makeOp({
  args: ["array"],
  pre: {args:[], body:"this_f=Math.random", thisVars:["this_f"]},
  body: {args: ["a"], body:"a=this_f()", thisVars:["this_f"]},
  funcName: "random"
})

exports.assign = makeOp({
  args:["array", "array"],
  body: {args:["a", "b"], body:"a=b"},
  funcName: "assign" })

exports.assigns = makeOp({
  args:["array", "scalar"],
  body: {args:["a", "b"], body:"a=b"},
  funcName: "assigns" })


exports.equals = compile({
  args:["array", "array"],
  pre: EmptyProc,
  body: {args:[{name:"x", lvalue:false, rvalue:true, count:1},
               {name:"y", lvalue:false, rvalue:true, count:1}], 
        body: "if(x!==y){return false}", 
        localVars: [], 
        thisVars: []},
  post: {args:[], localVars:[], thisVars:[], body:"return true"},
  funcName: "equals"
})




/***/ }),
/* 180 */
/***/ (function(module, exports, __webpack_require__) {

var iota = __webpack_require__(138)
var isBuffer = __webpack_require__(139)

var hasTypedArrays  = ((typeof Float64Array) !== "undefined")

function compare1st(a, b) {
  return a[0] - b[0]
}

function order() {
  var stride = this.stride
  var terms = new Array(stride.length)
  var i
  for(i=0; i<terms.length; ++i) {
    terms[i] = [Math.abs(stride[i]), i]
  }
  terms.sort(compare1st)
  var result = new Array(terms.length)
  for(i=0; i<result.length; ++i) {
    result[i] = terms[i][1]
  }
  return result
}

function compileConstructor(dtype, dimension) {
  var className = ["View", dimension, "d", dtype].join("")
  if(dimension < 0) {
    className = "View_Nil" + dtype
  }
  var useGetters = (dtype === "generic")

  if(dimension === -1) {
    //Special case for trivial arrays
    var code =
      "function "+className+"(a){this.data=a;};\
var proto="+className+".prototype;\
proto.dtype='"+dtype+"';\
proto.index=function(){return -1};\
proto.size=0;\
proto.dimension=-1;\
proto.shape=proto.stride=proto.order=[];\
proto.lo=proto.hi=proto.transpose=proto.step=\
function(){return new "+className+"(this.data);};\
proto.get=proto.set=function(){};\
proto.pick=function(){return null};\
return function construct_"+className+"(a){return new "+className+"(a);}"
    var procedure = new Function(code)
    return procedure()
  } else if(dimension === 0) {
    //Special case for 0d arrays
    var code =
      "function "+className+"(a,d) {\
this.data = a;\
this.offset = d\
};\
var proto="+className+".prototype;\
proto.dtype='"+dtype+"';\
proto.index=function(){return this.offset};\
proto.dimension=0;\
proto.size=1;\
proto.shape=\
proto.stride=\
proto.order=[];\
proto.lo=\
proto.hi=\
proto.transpose=\
proto.step=function "+className+"_copy() {\
return new "+className+"(this.data,this.offset)\
};\
proto.pick=function "+className+"_pick(){\
return TrivialArray(this.data);\
};\
proto.valueOf=proto.get=function "+className+"_get(){\
return "+(useGetters ? "this.data.get(this.offset)" : "this.data[this.offset]")+
"};\
proto.set=function "+className+"_set(v){\
return "+(useGetters ? "this.data.set(this.offset,v)" : "this.data[this.offset]=v")+"\
};\
return function construct_"+className+"(a,b,c,d){return new "+className+"(a,d)}"
    var procedure = new Function("TrivialArray", code)
    return procedure(CACHED_CONSTRUCTORS[dtype][0])
  }

  var code = ["'use strict'"]

  //Create constructor for view
  var indices = iota(dimension)
  var args = indices.map(function(i) { return "i"+i })
  var index_str = "this.offset+" + indices.map(function(i) {
        return "this.stride[" + i + "]*i" + i
      }).join("+")
  var shapeArg = indices.map(function(i) {
      return "b"+i
    }).join(",")
  var strideArg = indices.map(function(i) {
      return "c"+i
    }).join(",")
  code.push(
    "function "+className+"(a," + shapeArg + "," + strideArg + ",d){this.data=a",
      "this.shape=[" + shapeArg + "]",
      "this.stride=[" + strideArg + "]",
      "this.offset=d|0}",
    "var proto="+className+".prototype",
    "proto.dtype='"+dtype+"'",
    "proto.dimension="+dimension)

  //view.size:
  code.push("Object.defineProperty(proto,'size',{get:function "+className+"_size(){\
return "+indices.map(function(i) { return "this.shape["+i+"]" }).join("*"),
"}})")

  //view.order:
  if(dimension === 1) {
    code.push("proto.order=[0]")
  } else {
    code.push("Object.defineProperty(proto,'order',{get:")
    if(dimension < 4) {
      code.push("function "+className+"_order(){")
      if(dimension === 2) {
        code.push("return (Math.abs(this.stride[0])>Math.abs(this.stride[1]))?[1,0]:[0,1]}})")
      } else if(dimension === 3) {
        code.push(
"var s0=Math.abs(this.stride[0]),s1=Math.abs(this.stride[1]),s2=Math.abs(this.stride[2]);\
if(s0>s1){\
if(s1>s2){\
return [2,1,0];\
}else if(s0>s2){\
return [1,2,0];\
}else{\
return [1,0,2];\
}\
}else if(s0>s2){\
return [2,0,1];\
}else if(s2>s1){\
return [0,1,2];\
}else{\
return [0,2,1];\
}}})")
      }
    } else {
      code.push("ORDER})")
    }
  }

  //view.set(i0, ..., v):
  code.push(
"proto.set=function "+className+"_set("+args.join(",")+",v){")
  if(useGetters) {
    code.push("return this.data.set("+index_str+",v)}")
  } else {
    code.push("return this.data["+index_str+"]=v}")
  }

  //view.get(i0, ...):
  code.push("proto.get=function "+className+"_get("+args.join(",")+"){")
  if(useGetters) {
    code.push("return this.data.get("+index_str+")}")
  } else {
    code.push("return this.data["+index_str+"]}")
  }

  //view.index:
  code.push(
    "proto.index=function "+className+"_index(", args.join(), "){return "+index_str+"}")

  //view.hi():
  code.push("proto.hi=function "+className+"_hi("+args.join(",")+"){return new "+className+"(this.data,"+
    indices.map(function(i) {
      return ["(typeof i",i,"!=='number'||i",i,"<0)?this.shape[", i, "]:i", i,"|0"].join("")
    }).join(",")+","+
    indices.map(function(i) {
      return "this.stride["+i + "]"
    }).join(",")+",this.offset)}")

  //view.lo():
  var a_vars = indices.map(function(i) { return "a"+i+"=this.shape["+i+"]" })
  var c_vars = indices.map(function(i) { return "c"+i+"=this.stride["+i+"]" })
  code.push("proto.lo=function "+className+"_lo("+args.join(",")+"){var b=this.offset,d=0,"+a_vars.join(",")+","+c_vars.join(","))
  for(var i=0; i<dimension; ++i) {
    code.push(
"if(typeof i"+i+"==='number'&&i"+i+">=0){\
d=i"+i+"|0;\
b+=c"+i+"*d;\
a"+i+"-=d}")
  }
  code.push("return new "+className+"(this.data,"+
    indices.map(function(i) {
      return "a"+i
    }).join(",")+","+
    indices.map(function(i) {
      return "c"+i
    }).join(",")+",b)}")

  //view.step():
  code.push("proto.step=function "+className+"_step("+args.join(",")+"){var "+
    indices.map(function(i) {
      return "a"+i+"=this.shape["+i+"]"
    }).join(",")+","+
    indices.map(function(i) {
      return "b"+i+"=this.stride["+i+"]"
    }).join(",")+",c=this.offset,d=0,ceil=Math.ceil")
  for(var i=0; i<dimension; ++i) {
    code.push(
"if(typeof i"+i+"==='number'){\
d=i"+i+"|0;\
if(d<0){\
c+=b"+i+"*(a"+i+"-1);\
a"+i+"=ceil(-a"+i+"/d)\
}else{\
a"+i+"=ceil(a"+i+"/d)\
}\
b"+i+"*=d\
}")
  }
  code.push("return new "+className+"(this.data,"+
    indices.map(function(i) {
      return "a" + i
    }).join(",")+","+
    indices.map(function(i) {
      return "b" + i
    }).join(",")+",c)}")

  //view.transpose():
  var tShape = new Array(dimension)
  var tStride = new Array(dimension)
  for(var i=0; i<dimension; ++i) {
    tShape[i] = "a[i"+i+"]"
    tStride[i] = "b[i"+i+"]"
  }
  code.push("proto.transpose=function "+className+"_transpose("+args+"){"+
    args.map(function(n,idx) { return n + "=(" + n + "===undefined?" + idx + ":" + n + "|0)"}).join(";"),
    "var a=this.shape,b=this.stride;return new "+className+"(this.data,"+tShape.join(",")+","+tStride.join(",")+",this.offset)}")

  //view.pick():
  code.push("proto.pick=function "+className+"_pick("+args+"){var a=[],b=[],c=this.offset")
  for(var i=0; i<dimension; ++i) {
    code.push("if(typeof i"+i+"==='number'&&i"+i+">=0){c=(c+this.stride["+i+"]*i"+i+")|0}else{a.push(this.shape["+i+"]);b.push(this.stride["+i+"])}")
  }
  code.push("var ctor=CTOR_LIST[a.length+1];return ctor(this.data,a,b,c)}")

  //Add return statement
  code.push("return function construct_"+className+"(data,shape,stride,offset){return new "+className+"(data,"+
    indices.map(function(i) {
      return "shape["+i+"]"
    }).join(",")+","+
    indices.map(function(i) {
      return "stride["+i+"]"
    }).join(",")+",offset)}")

  //Compile procedure
  var procedure = new Function("CTOR_LIST", "ORDER", code.join("\n"))
  return procedure(CACHED_CONSTRUCTORS[dtype], order)
}

function arrayDType(data) {
  if(isBuffer(data)) {
    return "buffer"
  }
  if(hasTypedArrays) {
    switch(Object.prototype.toString.call(data)) {
      case "[object Float64Array]":
        return "float64"
      case "[object Float32Array]":
        return "float32"
      case "[object Int8Array]":
        return "int8"
      case "[object Int16Array]":
        return "int16"
      case "[object Int32Array]":
        return "int32"
      case "[object Uint8Array]":
        return "uint8"
      case "[object Uint16Array]":
        return "uint16"
      case "[object Uint32Array]":
        return "uint32"
      case "[object Uint8ClampedArray]":
        return "uint8_clamped"
    }
  }
  if(Array.isArray(data)) {
    return "array"
  }
  return "generic"
}

var CACHED_CONSTRUCTORS = {
  "float32":[],
  "float64":[],
  "int8":[],
  "int16":[],
  "int32":[],
  "uint8":[],
  "uint16":[],
  "uint32":[],
  "array":[],
  "uint8_clamped":[],
  "buffer":[],
  "generic":[]
}

;(function() {
  for(var id in CACHED_CONSTRUCTORS) {
    CACHED_CONSTRUCTORS[id].push(compileConstructor(id, -1))
  }
});

function wrappedNDArrayCtor(data, shape, stride, offset) {
  if(data === undefined) {
    var ctor = CACHED_CONSTRUCTORS.array[0]
    return ctor([])
  } else if(typeof data === "number") {
    data = [data]
  }
  if(shape === undefined) {
    shape = [ data.length ]
  }
  var d = shape.length
  if(stride === undefined) {
    stride = new Array(d)
    for(var i=d-1, sz=1; i>=0; --i) {
      stride[i] = sz
      sz *= shape[i]
    }
  }
  if(offset === undefined) {
    offset = 0
    for(var i=0; i<d; ++i) {
      if(stride[i] < 0) {
        offset -= (shape[i]-1)*stride[i]
      }
    }
  }
  var dtype = arrayDType(data)
  var ctor_list = CACHED_CONSTRUCTORS[dtype]
  while(ctor_list.length <= d+1) {
    ctor_list.push(compileConstructor(dtype, ctor_list.length-1))
  }
  var ctor = ctor_list[d+1]
  return ctor(data, shape, stride, offset)
}

module.exports = wrappedNDArrayCtor


/***/ }),
/* 181 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*!
 * pad-left <https://github.com/jonschlinkert/pad-left>
 *
 * Copyright (c) 2014-2015, Jon Schlinkert.
 * Licensed under the MIT license.
 */



var repeat = __webpack_require__(185);

module.exports = function padLeft(str, num, ch) {
  ch = typeof ch !== 'undefined' ? (ch + '') : ' ';
  return repeat(ch, num) + str;
};

/***/ }),
/* 182 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = applyMiddleware;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__compose__ = __webpack_require__(63);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };



/**
 * Creates a store enhancer that applies middleware to the dispatch method
 * of the Redux store. This is handy for a variety of tasks, such as expressing
 * asynchronous actions in a concise manner, or logging every action payload.
 *
 * See `redux-thunk` package as an example of the Redux middleware.
 *
 * Because middleware is potentially asynchronous, this should be the first
 * store enhancer in the composition chain.
 *
 * Note that each middleware will be given the `dispatch` and `getState` functions
 * as named arguments.
 *
 * @param {...Function} middlewares The middleware chain to be applied.
 * @returns {Function} A store enhancer applying the middleware.
 */
function applyMiddleware() {
  for (var _len = arguments.length, middlewares = Array(_len), _key = 0; _key < _len; _key++) {
    middlewares[_key] = arguments[_key];
  }

  return function (createStore) {
    return function (reducer, preloadedState, enhancer) {
      var store = createStore(reducer, preloadedState, enhancer);
      var _dispatch = store.dispatch;
      var chain = [];

      var middlewareAPI = {
        getState: store.getState,
        dispatch: function dispatch(action) {
          return _dispatch(action);
        }
      };
      chain = middlewares.map(function (middleware) {
        return middleware(middlewareAPI);
      });
      _dispatch = __WEBPACK_IMPORTED_MODULE_0__compose__["a" /* default */].apply(undefined, chain)(store.dispatch);

      return _extends({}, store, {
        dispatch: _dispatch
      });
    };
  };
}

/***/ }),
/* 183 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = bindActionCreators;
function bindActionCreator(actionCreator, dispatch) {
  return function () {
    return dispatch(actionCreator.apply(undefined, arguments));
  };
}

/**
 * Turns an object whose values are action creators, into an object with the
 * same keys, but with every function wrapped into a `dispatch` call so they
 * may be invoked directly. This is just a convenience method, as you can call
 * `store.dispatch(MyActionCreators.doSomething())` yourself just fine.
 *
 * For convenience, you can also pass a single function as the first argument,
 * and get a function in return.
 *
 * @param {Function|Object} actionCreators An object whose values are action
 * creator functions. One handy way to obtain it is to use ES6 `import * as`
 * syntax. You may also pass a single function.
 *
 * @param {Function} dispatch The `dispatch` function available on your Redux
 * store.
 *
 * @returns {Function|Object} The object mimicking the original object, but with
 * every action creator wrapped into the `dispatch` call. If you passed a
 * function as `actionCreators`, the return value will also be a single
 * function.
 */
function bindActionCreators(actionCreators, dispatch) {
  if (typeof actionCreators === 'function') {
    return bindActionCreator(actionCreators, dispatch);
  }

  if (typeof actionCreators !== 'object' || actionCreators === null) {
    throw new Error('bindActionCreators expected an object or a function, instead received ' + (actionCreators === null ? 'null' : typeof actionCreators) + '. ' + 'Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?');
  }

  var keys = Object.keys(actionCreators);
  var boundActionCreators = {};
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    var actionCreator = actionCreators[key];
    if (typeof actionCreator === 'function') {
      boundActionCreators[key] = bindActionCreator(actionCreator, dispatch);
    }
  }
  return boundActionCreators;
}

/***/ }),
/* 184 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/* harmony export (immutable) */ __webpack_exports__["a"] = combineReducers;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__createStore__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash_es_isPlainObject__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_warning__ = __webpack_require__(65);




function getUndefinedStateErrorMessage(key, action) {
  var actionType = action && action.type;
  var actionName = actionType && '"' + actionType.toString() + '"' || 'an action';

  return 'Given action ' + actionName + ', reducer "' + key + '" returned undefined. ' + 'To ignore an action, you must explicitly return the previous state. ' + 'If you want this reducer to hold no value, you can return null instead of undefined.';
}

function getUnexpectedStateShapeWarningMessage(inputState, reducers, action, unexpectedKeyCache) {
  var reducerKeys = Object.keys(reducers);
  var argumentName = action && action.type === __WEBPACK_IMPORTED_MODULE_0__createStore__["b" /* ActionTypes */].INIT ? 'preloadedState argument passed to createStore' : 'previous state received by the reducer';

  if (reducerKeys.length === 0) {
    return 'Store does not have a valid reducer. Make sure the argument passed ' + 'to combineReducers is an object whose values are reducers.';
  }

  if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_lodash_es_isPlainObject__["a" /* default */])(inputState)) {
    return 'The ' + argumentName + ' has unexpected type of "' + {}.toString.call(inputState).match(/\s([a-z|A-Z]+)/)[1] + '". Expected argument to be an object with the following ' + ('keys: "' + reducerKeys.join('", "') + '"');
  }

  var unexpectedKeys = Object.keys(inputState).filter(function (key) {
    return !reducers.hasOwnProperty(key) && !unexpectedKeyCache[key];
  });

  unexpectedKeys.forEach(function (key) {
    unexpectedKeyCache[key] = true;
  });

  if (unexpectedKeys.length > 0) {
    return 'Unexpected ' + (unexpectedKeys.length > 1 ? 'keys' : 'key') + ' ' + ('"' + unexpectedKeys.join('", "') + '" found in ' + argumentName + '. ') + 'Expected to find one of the known reducer keys instead: ' + ('"' + reducerKeys.join('", "') + '". Unexpected keys will be ignored.');
  }
}

function assertReducerShape(reducers) {
  Object.keys(reducers).forEach(function (key) {
    var reducer = reducers[key];
    var initialState = reducer(undefined, { type: __WEBPACK_IMPORTED_MODULE_0__createStore__["b" /* ActionTypes */].INIT });

    if (typeof initialState === 'undefined') {
      throw new Error('Reducer "' + key + '" returned undefined during initialization. ' + 'If the state passed to the reducer is undefined, you must ' + 'explicitly return the initial state. The initial state may ' + 'not be undefined. If you don\'t want to set a value for this reducer, ' + 'you can use null instead of undefined.');
    }

    var type = '@@redux/PROBE_UNKNOWN_ACTION_' + Math.random().toString(36).substring(7).split('').join('.');
    if (typeof reducer(undefined, { type: type }) === 'undefined') {
      throw new Error('Reducer "' + key + '" returned undefined when probed with a random type. ' + ('Don\'t try to handle ' + __WEBPACK_IMPORTED_MODULE_0__createStore__["b" /* ActionTypes */].INIT + ' or other actions in "redux/*" ') + 'namespace. They are considered private. Instead, you must return the ' + 'current state for any unknown actions, unless it is undefined, ' + 'in which case you must return the initial state, regardless of the ' + 'action type. The initial state may not be undefined, but can be null.');
    }
  });
}

/**
 * Turns an object whose values are different reducer functions, into a single
 * reducer function. It will call every child reducer, and gather their results
 * into a single state object, whose keys correspond to the keys of the passed
 * reducer functions.
 *
 * @param {Object} reducers An object whose values correspond to different
 * reducer functions that need to be combined into one. One handy way to obtain
 * it is to use ES6 `import * as reducers` syntax. The reducers may never return
 * undefined for any action. Instead, they should return their initial state
 * if the state passed to them was undefined, and the current state for any
 * unrecognized action.
 *
 * @returns {Function} A reducer function that invokes every reducer inside the
 * passed object, and builds a state object with the same shape.
 */
function combineReducers(reducers) {
  var reducerKeys = Object.keys(reducers);
  var finalReducers = {};
  for (var i = 0; i < reducerKeys.length; i++) {
    var key = reducerKeys[i];

    if (process.env.NODE_ENV !== 'production') {
      if (typeof reducers[key] === 'undefined') {
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__utils_warning__["a" /* default */])('No reducer provided for key "' + key + '"');
      }
    }

    if (typeof reducers[key] === 'function') {
      finalReducers[key] = reducers[key];
    }
  }
  var finalReducerKeys = Object.keys(finalReducers);

  var unexpectedKeyCache = void 0;
  if (process.env.NODE_ENV !== 'production') {
    unexpectedKeyCache = {};
  }

  var shapeAssertionError = void 0;
  try {
    assertReducerShape(finalReducers);
  } catch (e) {
    shapeAssertionError = e;
  }

  return function combination() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var action = arguments[1];

    if (shapeAssertionError) {
      throw shapeAssertionError;
    }

    if (process.env.NODE_ENV !== 'production') {
      var warningMessage = getUnexpectedStateShapeWarningMessage(state, finalReducers, action, unexpectedKeyCache);
      if (warningMessage) {
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__utils_warning__["a" /* default */])(warningMessage);
      }
    }

    var hasChanged = false;
    var nextState = {};
    for (var _i = 0; _i < finalReducerKeys.length; _i++) {
      var _key = finalReducerKeys[_i];
      var reducer = finalReducers[_key];
      var previousStateForKey = state[_key];
      var nextStateForKey = reducer(previousStateForKey, action);
      if (typeof nextStateForKey === 'undefined') {
        var errorMessage = getUndefinedStateErrorMessage(_key, action);
        throw new Error(errorMessage);
      }
      nextState[_key] = nextStateForKey;
      hasChanged = hasChanged || nextStateForKey !== previousStateForKey;
    }
    return hasChanged ? nextState : state;
  };
}
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(62)))

/***/ }),
/* 185 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*!
 * repeat-string <https://github.com/jonschlinkert/repeat-string>
 *
 * Copyright (c) 2014-2015, Jon Schlinkert.
 * Licensed under the MIT License.
 */



/**
 * Results cache
 */

var res = '';
var cache;

/**
 * Expose `repeat`
 */

module.exports = repeat;

/**
 * Repeat the given `string` the specified `number`
 * of times.
 *
 * **Example:**
 *
 * ```js
 * var repeat = require('repeat-string');
 * repeat('A', 5);
 * //=> AAAAA
 * ```
 *
 * @param {String} `string` The string to repeat
 * @param {Number} `number` The number of times to repeat the string
 * @return {String} Repeated string
 * @api public
 */

function repeat(str, num) {
  if (typeof str !== 'string') {
    throw new TypeError('expected a string');
  }

  // cover common, quick use cases
  if (num === 1) return str;
  if (num === 2) return str + str;

  var max = str.length * num;
  if (cache !== str || typeof cache === 'undefined') {
    cache = str;
    res = '';
  } else if (res.length >= max) {
    return res.substr(0, max);
  }

  while (max > res.length && num > 1) {
    if (num & 1) {
      res += str;
    }

    num >>= 1;
    str += str;
  }

  res += str;
  res = res.substr(0, max);
  return res;
}


/***/ }),
/* 186 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;/* global window, exports, define */

!function() {
    'use strict'

    var re = {
        not_string: /[^s]/,
        not_bool: /[^t]/,
        not_type: /[^T]/,
        not_primitive: /[^v]/,
        number: /[diefg]/,
        numeric_arg: /[bcdiefguxX]/,
        json: /[j]/,
        not_json: /[^j]/,
        text: /^[^\x25]+/,
        modulo: /^\x25{2}/,
        placeholder: /^\x25(?:([1-9]\d*)\$|\(([^\)]+)\))?(\+)?(0|'[^$])?(-)?(\d+)?(?:\.(\d+))?([b-gijostTuvxX])/,
        key: /^([a-z_][a-z_\d]*)/i,
        key_access: /^\.([a-z_][a-z_\d]*)/i,
        index_access: /^\[(\d+)\]/,
        sign: /^[\+\-]/
    }

    function sprintf(key) {
        // `arguments` is not an array, but should be fine for this call
        return sprintf_format(sprintf_parse(key), arguments)
    }

    function vsprintf(fmt, argv) {
        return sprintf.apply(null, [fmt].concat(argv || []))
    }

    function sprintf_format(parse_tree, argv) {
        var cursor = 1, tree_length = parse_tree.length, arg, output = '', i, k, match, pad, pad_character, pad_length, is_positive, sign
        for (i = 0; i < tree_length; i++) {
            if (typeof parse_tree[i] === 'string') {
                output += parse_tree[i]
            }
            else if (Array.isArray(parse_tree[i])) {
                match = parse_tree[i] // convenience purposes only
                if (match[2]) { // keyword argument
                    arg = argv[cursor]
                    for (k = 0; k < match[2].length; k++) {
                        if (!arg.hasOwnProperty(match[2][k])) {
                            throw new Error(sprintf('[sprintf] property "%s" does not exist', match[2][k]))
                        }
                        arg = arg[match[2][k]]
                    }
                }
                else if (match[1]) { // positional argument (explicit)
                    arg = argv[match[1]]
                }
                else { // positional argument (implicit)
                    arg = argv[cursor++]
                }

                if (re.not_type.test(match[8]) && re.not_primitive.test(match[8]) && arg instanceof Function) {
                    arg = arg()
                }

                if (re.numeric_arg.test(match[8]) && (typeof arg !== 'number' && isNaN(arg))) {
                    throw new TypeError(sprintf('[sprintf] expecting number but found %T', arg))
                }

                if (re.number.test(match[8])) {
                    is_positive = arg >= 0
                }

                switch (match[8]) {
                    case 'b':
                        arg = parseInt(arg, 10).toString(2)
                        break
                    case 'c':
                        arg = String.fromCharCode(parseInt(arg, 10))
                        break
                    case 'd':
                    case 'i':
                        arg = parseInt(arg, 10)
                        break
                    case 'j':
                        arg = JSON.stringify(arg, null, match[6] ? parseInt(match[6]) : 0)
                        break
                    case 'e':
                        arg = match[7] ? parseFloat(arg).toExponential(match[7]) : parseFloat(arg).toExponential()
                        break
                    case 'f':
                        arg = match[7] ? parseFloat(arg).toFixed(match[7]) : parseFloat(arg)
                        break
                    case 'g':
                        arg = match[7] ? String(Number(arg.toPrecision(match[7]))) : parseFloat(arg)
                        break
                    case 'o':
                        arg = (parseInt(arg, 10) >>> 0).toString(8)
                        break
                    case 's':
                        arg = String(arg)
                        arg = (match[7] ? arg.substring(0, match[7]) : arg)
                        break
                    case 't':
                        arg = String(!!arg)
                        arg = (match[7] ? arg.substring(0, match[7]) : arg)
                        break
                    case 'T':
                        arg = Object.prototype.toString.call(arg).slice(8, -1).toLowerCase()
                        arg = (match[7] ? arg.substring(0, match[7]) : arg)
                        break
                    case 'u':
                        arg = parseInt(arg, 10) >>> 0
                        break
                    case 'v':
                        arg = arg.valueOf()
                        arg = (match[7] ? arg.substring(0, match[7]) : arg)
                        break
                    case 'x':
                        arg = (parseInt(arg, 10) >>> 0).toString(16)
                        break
                    case 'X':
                        arg = (parseInt(arg, 10) >>> 0).toString(16).toUpperCase()
                        break
                }
                if (re.json.test(match[8])) {
                    output += arg
                }
                else {
                    if (re.number.test(match[8]) && (!is_positive || match[3])) {
                        sign = is_positive ? '+' : '-'
                        arg = arg.toString().replace(re.sign, '')
                    }
                    else {
                        sign = ''
                    }
                    pad_character = match[4] ? match[4] === '0' ? '0' : match[4].charAt(1) : ' '
                    pad_length = match[6] - (sign + arg).length
                    pad = match[6] ? (pad_length > 0 ? pad_character.repeat(pad_length) : '') : ''
                    output += match[5] ? sign + arg + pad : (pad_character === '0' ? sign + pad + arg : pad + sign + arg)
                }
            }
        }
        return output
    }

    var sprintf_cache = Object.create(null)

    function sprintf_parse(fmt) {
        if (sprintf_cache[fmt]) {
            return sprintf_cache[fmt]
        }

        var _fmt = fmt, match, parse_tree = [], arg_names = 0
        while (_fmt) {
            if ((match = re.text.exec(_fmt)) !== null) {
                parse_tree.push(match[0])
            }
            else if ((match = re.modulo.exec(_fmt)) !== null) {
                parse_tree.push('%')
            }
            else if ((match = re.placeholder.exec(_fmt)) !== null) {
                if (match[2]) {
                    arg_names |= 1
                    var field_list = [], replacement_field = match[2], field_match = []
                    if ((field_match = re.key.exec(replacement_field)) !== null) {
                        field_list.push(field_match[1])
                        while ((replacement_field = replacement_field.substring(field_match[0].length)) !== '') {
                            if ((field_match = re.key_access.exec(replacement_field)) !== null) {
                                field_list.push(field_match[1])
                            }
                            else if ((field_match = re.index_access.exec(replacement_field)) !== null) {
                                field_list.push(field_match[1])
                            }
                            else {
                                throw new SyntaxError('[sprintf] failed to parse named argument key')
                            }
                        }
                    }
                    else {
                        throw new SyntaxError('[sprintf] failed to parse named argument key')
                    }
                    match[2] = field_list
                }
                else {
                    arg_names |= 2
                }
                if (arg_names === 3) {
                    throw new Error('[sprintf] mixing positional and named placeholders is not (yet) supported')
                }
                parse_tree.push(match)
            }
            else {
                throw new SyntaxError('[sprintf] unexpected placeholder')
            }
            _fmt = _fmt.substring(match[0].length)
        }
        return sprintf_cache[fmt] = parse_tree
    }

    /**
     * export to either browser or node.js
     */
    /* eslint-disable quote-props */
    if (true) {
        exports['sprintf'] = sprintf
        exports['vsprintf'] = vsprintf
    }
    if (typeof window !== 'undefined') {
        window['sprintf'] = sprintf
        window['vsprintf'] = vsprintf

        if (true) {
            !(__WEBPACK_AMD_DEFINE_RESULT__ = function() {
                return {
                    'sprintf': sprintf,
                    'vsprintf': vsprintf
                }
            }.call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))
        }
    }
    /* eslint-enable quote-props */
}()


/***/ }),
/* 187 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(188);


/***/ }),
/* 188 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global, module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ponyfill = __webpack_require__(189);

var _ponyfill2 = _interopRequireDefault(_ponyfill);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var root; /* global window */


if (typeof self !== 'undefined') {
  root = self;
} else if (typeof window !== 'undefined') {
  root = window;
} else if (typeof global !== 'undefined') {
  root = global;
} else if (true) {
  root = module;
} else {
  root = Function('return this')();
}

var result = (0, _ponyfill2['default'])(root);
exports['default'] = result;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(16), __webpack_require__(195)(module)))

/***/ }),
/* 189 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports['default'] = symbolObservablePonyfill;
function symbolObservablePonyfill(root) {
	var result;
	var _Symbol = root.Symbol;

	if (typeof _Symbol === 'function') {
		if (_Symbol.observable) {
			result = _Symbol.observable;
		} else {
			result = _Symbol('observable');
			_Symbol.observable = result;
		}
	} else {
		result = '@@observable';
	}

	return result;
};

/***/ }),
/* 190 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global, Buffer) {

var bits = __webpack_require__(96)
var dup = __webpack_require__(106)

//Legacy pool support
if(!global.__TYPEDARRAY_POOL) {
  global.__TYPEDARRAY_POOL = {
      UINT8   : dup([32, 0])
    , UINT16  : dup([32, 0])
    , UINT32  : dup([32, 0])
    , INT8    : dup([32, 0])
    , INT16   : dup([32, 0])
    , INT32   : dup([32, 0])
    , FLOAT   : dup([32, 0])
    , DOUBLE  : dup([32, 0])
    , DATA    : dup([32, 0])
    , UINT8C  : dup([32, 0])
    , BUFFER  : dup([32, 0])
  }
}

var hasUint8C = (typeof Uint8ClampedArray) !== 'undefined'
var POOL = global.__TYPEDARRAY_POOL

//Upgrade pool
if(!POOL.UINT8C) {
  POOL.UINT8C = dup([32, 0])
}
if(!POOL.BUFFER) {
  POOL.BUFFER = dup([32, 0])
}

//New technique: Only allocate from ArrayBufferView and Buffer
var DATA    = POOL.DATA
  , BUFFER  = POOL.BUFFER

exports.free = function free(array) {
  if(Buffer.isBuffer(array)) {
    BUFFER[bits.log2(array.length)].push(array)
  } else {
    if(Object.prototype.toString.call(array) !== '[object ArrayBuffer]') {
      array = array.buffer
    }
    if(!array) {
      return
    }
    var n = array.length || array.byteLength
    var log_n = bits.log2(n)|0
    DATA[log_n].push(array)
  }
}

function freeArrayBuffer(buffer) {
  if(!buffer) {
    return
  }
  var n = buffer.length || buffer.byteLength
  var log_n = bits.log2(n)
  DATA[log_n].push(buffer)
}

function freeTypedArray(array) {
  freeArrayBuffer(array.buffer)
}

exports.freeUint8 =
exports.freeUint16 =
exports.freeUint32 =
exports.freeInt8 =
exports.freeInt16 =
exports.freeInt32 =
exports.freeFloat32 = 
exports.freeFloat =
exports.freeFloat64 = 
exports.freeDouble = 
exports.freeUint8Clamped = 
exports.freeDataView = freeTypedArray

exports.freeArrayBuffer = freeArrayBuffer

exports.freeBuffer = function freeBuffer(array) {
  BUFFER[bits.log2(array.length)].push(array)
}

exports.malloc = function malloc(n, dtype) {
  if(dtype === undefined || dtype === 'arraybuffer') {
    return mallocArrayBuffer(n)
  } else {
    switch(dtype) {
      case 'uint8':
        return mallocUint8(n)
      case 'uint16':
        return mallocUint16(n)
      case 'uint32':
        return mallocUint32(n)
      case 'int8':
        return mallocInt8(n)
      case 'int16':
        return mallocInt16(n)
      case 'int32':
        return mallocInt32(n)
      case 'float':
      case 'float32':
        return mallocFloat(n)
      case 'double':
      case 'float64':
        return mallocDouble(n)
      case 'uint8_clamped':
        return mallocUint8Clamped(n)
      case 'buffer':
        return mallocBuffer(n)
      case 'data':
      case 'dataview':
        return mallocDataView(n)

      default:
        return null
    }
  }
  return null
}

function mallocArrayBuffer(n) {
  var n = bits.nextPow2(n)
  var log_n = bits.log2(n)
  var d = DATA[log_n]
  if(d.length > 0) {
    return d.pop()
  }
  return new ArrayBuffer(n)
}
exports.mallocArrayBuffer = mallocArrayBuffer

function mallocUint8(n) {
  return new Uint8Array(mallocArrayBuffer(n), 0, n)
}
exports.mallocUint8 = mallocUint8

function mallocUint16(n) {
  return new Uint16Array(mallocArrayBuffer(2*n), 0, n)
}
exports.mallocUint16 = mallocUint16

function mallocUint32(n) {
  return new Uint32Array(mallocArrayBuffer(4*n), 0, n)
}
exports.mallocUint32 = mallocUint32

function mallocInt8(n) {
  return new Int8Array(mallocArrayBuffer(n), 0, n)
}
exports.mallocInt8 = mallocInt8

function mallocInt16(n) {
  return new Int16Array(mallocArrayBuffer(2*n), 0, n)
}
exports.mallocInt16 = mallocInt16

function mallocInt32(n) {
  return new Int32Array(mallocArrayBuffer(4*n), 0, n)
}
exports.mallocInt32 = mallocInt32

function mallocFloat(n) {
  return new Float32Array(mallocArrayBuffer(4*n), 0, n)
}
exports.mallocFloat32 = exports.mallocFloat = mallocFloat

function mallocDouble(n) {
  return new Float64Array(mallocArrayBuffer(8*n), 0, n)
}
exports.mallocFloat64 = exports.mallocDouble = mallocDouble

function mallocUint8Clamped(n) {
  if(hasUint8C) {
    return new Uint8ClampedArray(mallocArrayBuffer(n), 0, n)
  } else {
    return mallocUint8(n)
  }
}
exports.mallocUint8Clamped = mallocUint8Clamped

function mallocDataView(n) {
  return new DataView(mallocArrayBuffer(n), 0, n)
}
exports.mallocDataView = mallocDataView

function mallocBuffer(n) {
  n = bits.nextPow2(n)
  var log_n = bits.log2(n)
  var cache = BUFFER[log_n]
  if(cache.length > 0) {
    return cache.pop()
  }
  return new Buffer(n)
}
exports.mallocBuffer = mallocBuffer

exports.clearCache = function clearCache() {
  for(var i=0; i<32; ++i) {
    POOL.UINT8[i].length = 0
    POOL.UINT16[i].length = 0
    POOL.UINT32[i].length = 0
    POOL.INT8[i].length = 0
    POOL.INT16[i].length = 0
    POOL.INT32[i].length = 0
    POOL.FLOAT[i].length = 0
    POOL.DOUBLE[i].length = 0
    POOL.UINT8C[i].length = 0
    DATA[i].length = 0
    BUFFER[i].length = 0
  }
}
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(16), __webpack_require__(36).Buffer))

/***/ }),
/* 191 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function unique_pred(list, compare) {
  var ptr = 1
    , len = list.length
    , a=list[0], b=list[0]
  for(var i=1; i<len; ++i) {
    b = a
    a = list[i]
    if(compare(a, b)) {
      if(i === ptr) {
        ptr++
        continue
      }
      list[ptr++] = a
    }
  }
  list.length = ptr
  return list
}

function unique_eq(list) {
  var ptr = 1
    , len = list.length
    , a=list[0], b = list[0]
  for(var i=1; i<len; ++i, b=a) {
    b = a
    a = list[i]
    if(a !== b) {
      if(i === ptr) {
        ptr++
        continue
      }
      list[ptr++] = a
    }
  }
  list.length = ptr
  return list
}

function unique(list, compare, sorted) {
  if(list.length === 0) {
    return list
  }
  if(compare) {
    if(!sorted) {
      list.sort(compare)
    }
    return unique_pred(list, compare)
  }
  if(!sorted) {
    list.sort()
  }
  return unique_eq(list)
}

module.exports = unique


/***/ }),
/* 192 */
/***/ (function(module, exports, __webpack_require__) {

var hiddenStore = __webpack_require__(193);

module.exports = createStore;

function createStore() {
    var key = {};

    return function (obj) {
        if ((typeof obj !== 'object' || obj === null) &&
            typeof obj !== 'function'
        ) {
            throw new Error('Weakmap-shim: Key must be object')
        }

        var store = obj.valueOf(key);
        return store && store.identity === key ?
            store : hiddenStore(obj, key);
    };
}


/***/ }),
/* 193 */
/***/ (function(module, exports) {

module.exports = hiddenStore;

function hiddenStore(obj, key) {
    var store = { identity: key };
    var valueOf = obj.valueOf;

    Object.defineProperty(obj, "valueOf", {
        value: function (value) {
            return value !== key ?
                valueOf.apply(this, arguments) : store;
        },
        writable: true
    });

    return store;
}


/***/ }),
/* 194 */
/***/ (function(module, exports, __webpack_require__) {

// Original - @Gozola.
// https://gist.github.com/Gozala/1269991
// This is a reimplemented version (with a few bug fixes).

var createStore = __webpack_require__(192);

module.exports = weakMap;

function weakMap() {
    var privates = createStore();

    return {
        'get': function (key, fallback) {
            var store = privates(key)
            return store.hasOwnProperty('value') ?
                store.value : fallback
        },
        'set': function (key, value) {
            privates(key).value = value;
            return this;
        },
        'has': function(key) {
            return 'value' in privates(key);
        },
        'delete': function (key) {
            return delete privates(key).value;
        }
    }
}


/***/ }),
/* 195 */
/***/ (function(module, exports) {

module.exports = function(module) {
	if(!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if(!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ })
/******/ ]);