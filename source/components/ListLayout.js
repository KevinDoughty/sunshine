const notFound = Number.MAX_VALUE;

function makePoint(x,y) {
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
function makeRect(x,y,width,height) {
	return {
		origin: makePoint(x,y),
		size: makeSize(width,height)
	};
}

function makeRange(location, length) {
	return {
		location: location,
		length: length
	};
}

function nullRange() {
	return makeRange(notFound,0);
}

function intersectionRange(a,b) {
	if (a.location + a.length <= b.location || b.location + b.length <= a.location) return nullRange();
	const location = Math.max( a.location, b.location );
	const end = Math.min( a.location + a.length, b.location + b.length );
	return { location: location, length: end - location };
}

export default function ListLayout(props) {
	if (!props) throw new Error("ListLayout no props");
	if (!Object.keys(props).length) throw new Error("ListLayout no props");

	Object.keys(props).forEach( function(key) { // TODO: only copy the props you need
		this[key] = props[key];
	}.bind(this));
}

ListLayout.prototype = {
	rangeOfItemsInRect:function(rect) {
		const itemCount = this.numberOfItems();
		const fullRange = makeRange(0,itemCount);
		const itemsPerRow = 1;
		let indexOrigin = 0;
		const itemRect = this.rectOfItemAtIndex(indexOrigin);
		let y = itemRect.origin.y + itemRect.size.height;
		while (y < rect.origin.y) {
			indexOrigin += itemsPerRow;
			const otherRect = this.rectOfItemAtIndex(indexOrigin);
			y = otherRect.origin.y + otherRect.size.height;
		}
		let indexMax = indexOrigin + itemsPerRow;
		while (y < rect.origin.y + rect.size.height) {
			indexMax += itemsPerRow;
			y = this.rectOfItemAtIndex(indexMax).origin.y;
		}
		const range = makeRange(indexOrigin, indexMax-indexOrigin);
		return intersectionRange(range, fullRange);
	},

	numberOfItems:function() {
		return this.exposedIds.length;
	},

	lineRangeOfItemAtIndex:function(index) { // This was for NSLayoutManager but itemsPerRow would be a lot easier.
		if (index > this.numberOfItems()) return nullRange();
		return makeRange(index,1);
	},

	baselineOffsetOfItemAtIndex:function(index) { // This was for NSLayoutManager
		return 0;
	},

	keyOfItemAtIndex:function(index) {
		return this.exposedIds[index];
	},

	indexOfItemWithKey:function(key) {
		return this.exposedIds.indexOf(key);
	},

	propsOfItemAtIndex:function(index) {
		const key = this.keyOfItemAtIndex(index);
		const node = this.normalizedTreeDict[key];
		const text = node.text;
		const collapsed = (this.collapsedIds.indexOf(key) > -1);
		const depth = this.depthOfItemAtIndex(index);
		const frame = this.rectOfItemAtIndex(index);
		return {
			key: key,
			id: key,
			text,
			node,
			collapsed,
			depth,
			editNode: this.editNode,
			changeText: this.changeText,
			disclosureToggle: this.disclosureToggle,
			changeUndoRegistered: this.changeUndoRegistered,
			inLiveResize: this.inLiveResize,
			frame
		};
	},

	depthOfItemAtIndex: function(index) { // depth should probably be copied to the node
		const key = this.keyOfItemAtIndex(index);
		return this.flattenedDepth[key];
	},

	rectOfItemAtIndex:function(index) { // gets called frequently
		const dimension = this.dimension;
		const containerWidth = this.frame.size.width;
		const depth = this.depthOfItemAtIndex(index);
		const itemWidth = containerWidth - depth * this.margin;
		const x = 0;
		const y = index * dimension;
		return makeRect(x,y,itemWidth,dimension);
	},

	sortKeysOfItems:function(a,b) {
		let A = this.flattenedIndexes[a];
		let B = this.flattenedIndexes[b];
		if (typeof A === "undefined") A = -1;
		if (typeof B === "undefined") B = -1;
		return A - B;
	},

	documentLength: function() { // can"t just get the last item rect
		const numberOfItems = this.numberOfItems();
		const lastItemRect = this.rectOfItemAtIndex(numberOfItems -1);
		return lastItemRect.y + lastItemRect.height;
	},

	unmountingProps: function() {
		return {
			opacity: 0,
			zIndex: 0
		};
	}

};