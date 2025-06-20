// node_modules/@muya-ui/core/es/Swipe/generateSwipeManager.js
function getStepsArr(items, containerSize, isH) {
  var defaultIndex = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
  var itemSteps = [];
  var reverseItemSteps = [];
  var positionSteps = [];
  var reverseSteps = [];
  var prevKey = isH ? 'left' : 'top';
  var nextKey = isH ? 'right' : 'bottom';
  var panelStartPoint = items[0][prevKey];
  var panelEndPoint = items[items.length - 1][nextKey];
  var baseline = panelStartPoint + containerSize;
  var panelSize = panelEndPoint - panelStartPoint;
  var defaultStepIndex = 0;
  positionSteps.push(0);

  if (panelSize < containerSize) {
    return {
      itemSteps: itemSteps,
      reverseItemSteps: reverseItemSteps,
      positionSteps: positionSteps,
      reverseSteps: reverseSteps,
      defaultStepIndex: defaultStepIndex
    };
  }

  for (var i = 0, l = items.length; i < l; i++) {
    var item = items[i];
    var itemNext = item[nextKey];
    var itemPrev = item[prevKey];

    if (itemNext > baseline) {
      baseline = itemPrev + containerSize;
      var offset = itemPrev - panelStartPoint;
      positionSteps.push(offset);
    }

    if (i === defaultIndex) {
      defaultStepIndex = positionSteps.length - 1;
    }

    itemSteps.push(positionSteps.length - 1);
  }

  var lastPageSize = panelEndPoint - (positionSteps[positionSteps.length - 1] + panelStartPoint);

  if (lastPageSize < containerSize) {
    positionSteps.pop();
    var lastPositionOffset = panelEndPoint - panelStartPoint - containerSize;
    positionSteps.push(lastPositionOffset);
    baseline = panelEndPoint - containerSize;
    reverseSteps.push(lastPositionOffset);

    for (var _i = items.length - 1; _i >= 0; _i--) {
      var _item = items[_i];
      var _itemNext = _item[nextKey];
      var _itemPrev = _item[prevKey];

      if (_itemPrev < baseline) {
        baseline = _itemNext - containerSize;

        var _offset = _itemNext - panelStartPoint - containerSize;

        reverseSteps.push(_offset);
      }

      reverseItemSteps.push(reverseSteps.length - 1);
    }

    reverseSteps.pop();
    reverseSteps.push(0);
    reverseSteps.sort(function (a, b) {
      return a - b;
    });
  }

  return {
    itemSteps: itemSteps,
    reverseItemSteps: reverseItemSteps,
    positionSteps: positionSteps,
    reverseSteps: reverseSteps,
    defaultStepIndex: defaultStepIndex
  };
}

export function getItemOffsets(items, lastPageOffset, isH) {
  var prevKey = isH ? 'left' : 'top';
  var panelStartPoint = items[0][prevKey];
  var offsets = [];
  var hasLast = true;
  items.forEach(function (item) {
    var itemPrev = item[prevKey];
    var offset = itemPrev - panelStartPoint;

    if (offset <= lastPageOffset) {
      offsets.push(offset);

      if (offset === lastPageOffset) {
        hasLast = false;
      }
    }
  });

  if (hasLast) {
    offsets.push(lastPageOffset);
  }

  return offsets;
}
export function generateDisabledSwipeManager() {
  return {
    get index() {
      return 0;
    },

    get itemIndex() {
      return 0;
    },

    get hasNext() {
      return false;
    },

    get hasPrev() {
      return false;
    },

    get hasNextItem() {
      return false;
    },

    get hasPrevItem() {
      return false;
    },

    get size() {
      return 0;
    },

    get itemSize() {
      return 0;
    },

    get offset() {
      return 0;
    },

    get maxOffset() {
      return 0;
    },

    get direction() {
      return 'horizontal';
    },

    prevItem: function prevItem() {},
    nextItem: function nextItem() {},
    goToItem: function goToItem() {},
    next: function next() {},
    prev: function prev() {},
    goTo: function goTo() {},
    hasItem: function hasItem() {
      return false;
    },
    hasStep: function hasStep() {
      return false;
    },
    getItemOffset: function getItemOffset() {
      return 0;
    },
    getItemStep: function getItemStep() {
      return 0;
    },
    getStepOffset: function getStepOffset() {
      return 0;
    },
    updateOffset: function updateOffset() {}
  };
}
export default function generateSwipeManager(args) {
  var items = args.items,
      containerSize = args.containerSize,
      direction = args.direction,
      stepIndex = args.stepIndex,
      itemIndex = args.itemIndex,
      _args$defaultIndex = args.defaultIndex,
      defaultIndex = _args$defaultIndex === void 0 ? 0 : _args$defaultIndex;
  var isH = direction === 'horizontal';
  var innerSteps;
  var innerItemSteps;

  var _getStepsArr = getStepsArr(items, containerSize, isH, defaultIndex),
      itemSteps = _getStepsArr.itemSteps,
      reverseItemSteps = _getStepsArr.reverseItemSteps,
      positionSteps = _getStepsArr.positionSteps,
      reverseSteps = _getStepsArr.reverseSteps,
      defaultStepIndex = _getStepsArr.defaultStepIndex;

  var itemOffsets = getItemOffsets(items, positionSteps[positionSteps.length - 1], isH); // 公共的状态

  var currentOffset = 0;
  var maxOffset = 0; // step 的状态

  innerSteps = positionSteps;
  innerItemSteps = itemSteps;
  var currentIndex = stepIndex >= 0 ? stepIndex : defaultStepIndex;
  maxOffset = innerSteps[innerSteps.length - 1];
  var nextIndex = currentIndex + 1;
  var prevIndex = currentIndex - 1; // item 的状态

  var currentItemIndex = itemIndex >= 0 ? itemIndex : defaultIndex;
  var prevItemIndex = currentItemIndex - 1;
  var nextItemIndex = currentItemIndex + 1;

  var refreshItemIndex = function refreshItemIndex() {
    for (var i = 0, l = itemOffsets.length; i < l; i++) {
      var itemOffset = itemOffsets[i];

      if (itemOffset === currentOffset) {
        currentItemIndex = i;
        nextItemIndex = currentItemIndex + 1;
        prevItemIndex = currentItemIndex - 1;
        break;
      } else if (itemOffset > currentOffset) {
        nextItemIndex = i;
        prevItemIndex = nextItemIndex - 1;
        currentItemIndex = i;
        break;
      }
    }
  };

  var refreshStepIndex = function refreshStepIndex() {
    for (var i = 0, l = innerSteps.length; i < l; i++) {
      var stepOffset = innerSteps[i];

      if (stepOffset === currentOffset) {
        currentIndex = i;
        nextIndex = currentIndex + 1;
        prevIndex = currentIndex - 1;
        break;
      } else if (stepOffset > currentOffset) {
        nextIndex = i;
        prevIndex = nextIndex - 1;
        currentIndex = i;
        break;
      }
    }
  };

  var updateSteps = function updateSteps() {
    if (reverseSteps.length && currentIndex === innerItemSteps.length - 1) {
      innerSteps = reverseSteps;
      innerItemSteps = reverseItemSteps;
    } else if (reverseSteps.length && currentIndex <= 0) {
      innerSteps = positionSteps;
      innerItemSteps = itemSteps;
    }

    prevIndex = currentIndex - 1;
    nextIndex = currentIndex + 1;
    currentOffset = innerSteps[currentIndex];
    refreshItemIndex();
  };

  var updateItems = function updateItems() {
    prevItemIndex = currentItemIndex - 1;
    nextItemIndex = currentItemIndex + 1;
    currentOffset = itemOffsets[currentItemIndex];
    refreshStepIndex();
  };

  updateSteps();
  return {
    get index() {
      return currentIndex;
    },

    get itemIndex() {
      return currentItemIndex;
    },

    get hasNext() {
      return innerSteps[nextIndex] !== undefined;
    },

    get hasPrev() {
      return innerSteps[prevIndex] !== undefined;
    },

    get hasNextItem() {
      return itemOffsets[nextItemIndex] !== undefined;
    },

    get hasPrevItem() {
      return itemOffsets[prevItemIndex] !== undefined;
    },

    get size() {
      return innerSteps.length;
    },

    get itemSize() {
      return itemOffsets.length;
    },

    get offset() {
      return currentOffset;
    },

    get maxOffset() {
      return maxOffset;
    },

    get direction() {
      return direction;
    },

    prevItem: function prevItem() {
      if (!this.hasPrevItem) {
        return;
      }

      currentItemIndex = prevItemIndex;
      updateItems();
    },
    nextItem: function nextItem() {
      if (!this.hasNextItem) {
        return;
      }

      currentItemIndex = nextItemIndex;
      updateItems();
    },
    goToItem: function goToItem(itemIndex) {
      if (!this.hasItem(itemIndex)) {
        return;
      }

      currentItemIndex = itemIndex;
      updateItems();
    },
    next: function next() {
      if (!this.hasNext) {
        return;
      }

      currentIndex = nextIndex;
      updateSteps();
    },
    prev: function prev() {
      if (!this.hasPrev) {
        return;
      }

      currentIndex = prevIndex;
      updateSteps();
    },
    goTo: function goTo(stepKey) {
      if (!this.hasStep(stepKey)) {
        return;
      }

      currentIndex = stepKey;
      updateSteps();
    },
    hasItem: function hasItem(itemIndex) {
      return itemOffsets[itemIndex] !== undefined;
    },
    hasStep: function hasStep(stepKey) {
      return innerSteps[stepKey] !== undefined;
    },
    getItemOffset: function getItemOffset(itemIndex) {
      return itemOffsets[itemIndex];
    },
    getItemStep: function getItemStep(itemIndex) {
      return innerItemSteps[itemIndex] || 0;
    },
    getStepOffset: function getStepOffset(stepKey) {
      return innerSteps[stepKey];
    },
    // 只有在支持滚轮的时候需要处理这个
    updateOffset: function updateOffset(offset) {
      if (offset > maxOffset || offset < 0) {
        return;
      }

      currentOffset = offset;
      refreshItemIndex();
      refreshStepIndex();
    }
  };
}