"use strict";

function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t.return || t.return(); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _readOnlyError(r) { throw new TypeError('"' + r + '" is read-only'); }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
/*! 
Super simple WYSIWYG editor v0.9.1
https://summernote.org

Copyright 2013- Hackerwins and contributors
Summernote may be freely distributed under the MIT license.

Date: 2025-04-23T15:18Z
 */
(function () {
  "use strict";

  $.summernote = $.summernote || {
    lang: {}
  };
  $.extend(true, $.summernote.lang, {
    "en-US": {
      font: {
        bold: "Bold",
        italic: "Italic",
        underline: "Underline",
        clear: "Remove Font Style",
        height: "Line Height",
        name: "Font Family",
        strikethrough: "Strikethrough",
        subscript: "Subscript",
        superscript: "Superscript",
        size: "Font Size",
        sizeunit: "Font Size Unit"
      },
      image: {
        image: "Picture",
        insert: "Insert Image",
        resizeFull: "Resize full",
        resizeHalf: "Resize half",
        resizeQuarter: "Resize quarter",
        resizeNone: "Original size",
        floatLeft: "Float Left",
        floatRight: "Float Right",
        floatNone: "Remove float",
        shapeRounded: "Shape: Rounded",
        shapeCircle: "Shape: Circle",
        shapeThumbnail: "Shape: Thumbnail",
        shapeNone: "Shape: None",
        dragImageHere: "Drag image or text here",
        dropImage: "Drop image or Text",
        selectFromFiles: "Select from files",
        maximumFileSize: "Maximum file size",
        maximumFileSizeError: "Maximum file size exceeded.",
        url: "Image URL",
        remove: "Remove Image",
        original: "Original"
      },
      video: {
        video: "Video",
        videoLink: "Video Link",
        insert: "Insert Video",
        url: "Video URL",
        providers: "(YouTube, Google Drive, Vimeo, Vine, Instagram, DailyMotion, Youku, Peertube)"
      },
      link: {
        link: "Link",
        insert: "Insert Link",
        unlink: "Unlink",
        edit: "Edit",
        textToDisplay: "Text to display",
        url: "To what URL should this link go?",
        openInNewWindow: "Open in new window"
      },
      table: {
        table: "Table",
        addRowAbove: "Add row above",
        addRowBelow: "Add row below",
        addColLeft: "Add column left",
        addColRight: "Add column right",
        delRow: "Delete row",
        delCol: "Delete column",
        delTable: "Delete table"
      },
      hr: {
        insert: "Insert Horizontal Rule"
      },
      style: {
        style: "Style",
        p: "Normal",
        blockquote: "Quote",
        pre: "Code",
        h1: "Header 1",
        h2: "Header 2",
        h3: "Header 3",
        h4: "Header 4",
        h5: "Header 5",
        h6: "Header 6"
      },
      lists: {
        unordered: "Unordered list",
        ordered: "Ordered list"
      },
      options: {
        help: "Help",
        fullscreen: "Full Screen",
        codeview: "Code View"
      },
      paragraph: {
        paragraph: "Paragraph",
        outdent: "Outdent",
        indent: "Indent",
        left: "Align left",
        center: "Align center",
        right: "Align right",
        justify: "Justify full"
      },
      color: {
        recent: "Recent Color",
        more: "More Color",
        background: "Background Color",
        foreground: "Text Color",
        transparent: "Transparent",
        setTransparent: "Set transparent",
        reset: "Reset",
        resetToDefault: "Reset to default",
        cpSelect: "Select"
      },
      shortcut: {
        shortcuts: "Keyboard shortcuts",
        close: "Close",
        textFormatting: "Text formatting",
        action: "Action",
        paragraphFormatting: "Paragraph formatting",
        documentStyle: "Document Style",
        extraKeys: "Extra keys"
      },
      help: {
        "escape": "Escape",
        "insertParagraph": "Insert Paragraph",
        "undo": "Undo the last command",
        "redo": "Redo the last command",
        "tab": "Tab",
        "untab": "Untab",
        "bold": "Set a bold style",
        "italic": "Set a italic style",
        "underline": "Set a underline style",
        "strikethrough": "Set a strikethrough style",
        "removeFormat": "Clean a style",
        "justifyLeft": "Set left align",
        "justifyCenter": "Set center align",
        "justifyRight": "Set right align",
        "justifyFull": "Set full align",
        "insertUnorderedList": "Toggle unordered list",
        "insertOrderedList": "Toggle ordered list",
        "outdent": "Outdent on current paragraph",
        "indent": "Indent on current paragraph",
        "formatPara": "Change current block's format as a paragraph(P tag)",
        "formatH1": "Change current block's format as H1",
        "formatH2": "Change current block's format as H2",
        "formatH3": "Change current block's format as H3",
        "formatH4": "Change current block's format as H4",
        "formatH5": "Change current block's format as H5",
        "formatH6": "Change current block's format as H6",
        "insertHorizontalRule": "Insert horizontal rule",
        "linkDialog.show": "Show Link Dialog"
      },
      history: {
        undo: "Undo",
        redo: "Redo"
      },
      specialChar: {
        specialChar: "SPECIAL CHARACTERS",
        select: "Select Special characters"
      },
      output: {
        noSelection: "No Selection Made!"
      }
    }
  });
  var genericFontFamilies = ["sans-serif", "serif", "monospace", "cursive", "fantasy"];
  function validFontName(fontName) {
    return $.inArray(fontName.toLowerCase(), genericFontFamilies) === -1 ? "'".concat(fontName, "'") : fontName;
  }
  function createIsFontInstalledFunc() {
    var testText = "mw";
    var fontSize = "20px";
    var canvasWidth = 40;
    var canvasHeight = 20;
    var canvas = document.createElement("canvas");
    var context = canvas.getContext("2d", {
      willReadFrequently: true
    });
    canvas.width = canvasWidth;
    canvas.height = canvasHeight;
    context.textAlign = "center";
    context.fillStyle = "black";
    context.textBaseline = "middle";
    function getPxInfo(font, testFontName) {
      context.clearRect(0, 0, canvasWidth, canvasHeight);
      context.font = fontSize + " " + validFontName(font) + ', "' + testFontName + '"';
      context.fillText(testText, canvasWidth / 2, canvasHeight / 2);
      var pxInfo = context.getImageData(0, 0, canvasWidth, canvasHeight).data;
      return pxInfo.join("");
    }
    return function (fontName) {
      var testFontName = fontName === "Comic Sans MS" ? "Courier New" : "Comic Sans MS";
      var testInfo = getPxInfo(testFontName, testFontName);
      var fontInfo = getPxInfo(fontName, testFontName);
      return testInfo !== fontInfo;
    };
  }
  var userAgent = navigator.userAgent;
  var isMSIE = /MSIE|Trident/i.test(userAgent);
  var browserVersion;
  if (isMSIE) {
    var matches = /MSIE (\d+[.]\d+)/.exec(userAgent);
    if (matches) {
      browserVersion = parseFloat(matches[1]);
    }
    matches = /Trident\/.*rv:([0-9]{1,}[.0-9]{0,})/.exec(userAgent);
    if (matches) {
      browserVersion = parseFloat(matches[1]);
    }
  }
  var isEdge = /Edge\/\d+/.test(userAgent);
  var isSupportTouch = "ontouchstart" in window || navigator.MaxTouchPoints > 0 || navigator.msMaxTouchPoints > 0;
  var inputEventName = isMSIE ? "DOMCharacterDataModified DOMSubtreeModified DOMNodeInserted" : "input";
  var env = {
    isMac: navigator.appVersion.indexOf("Mac") > -1,
    isMSIE: isMSIE,
    isEdge: isEdge,
    isFF: !isEdge && /firefox/i.test(userAgent),
    isPhantom: /PhantomJS/i.test(userAgent),
    isWebkit: !isEdge && /webkit/i.test(userAgent),
    isChrome: !isEdge && /chrome/i.test(userAgent),
    isSafari: !isEdge && /safari/i.test(userAgent) && !/chrome/i.test(userAgent),
    browserVersion: browserVersion,
    isSupportTouch: isSupportTouch,
    isFontInstalled: createIsFontInstalledFunc(),
    isW3CRangeSupport: !!document.createRange,
    inputEventName: inputEventName,
    genericFontFamilies: genericFontFamilies,
    validFontName: validFontName
  };
  function eq(itemA) {
    return function (itemB) {
      return itemA === itemB;
    };
  }
  function eq2(itemA, itemB) {
    return itemA === itemB;
  }
  function peq2(propName) {
    return function (itemA, itemB) {
      return itemA[propName] === itemB[propName];
    };
  }
  function ok() {
    return true;
  }
  function fail() {
    return false;
  }
  function not(f) {
    return function () {
      return !f.apply(f, arguments);
    };
  }
  function and(fA, fB) {
    return function (item) {
      return fA(item) && fB(item);
    };
  }
  function self(a) {
    return a;
  }
  function invoke(obj, method) {
    return function () {
      return obj[method].apply(obj, arguments);
    };
  }
  var idCounter = 0;
  function resetUniqueId() {
    idCounter = 0;
  }
  function uniqueId(prefix) {
    var id = ++idCounter + "";
    return prefix ? prefix + id : id;
  }
  function rect2bnd(rect) {
    var $document = $(document);
    return {
      top: rect.top + $document.scrollTop(),
      left: rect.left + $document.scrollLeft(),
      width: rect.right - rect.left,
      height: rect.bottom - rect.top
    };
  }
  function invertObject(obj) {
    var inverted = {};
    for (var key2 in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key2)) {
        inverted[obj[key2]] = key2;
      }
    }
    return inverted;
  }
  function namespaceToCamel(namespace, prefix) {
    prefix = prefix || "";
    return prefix + namespace.split(".").map(function (name) {
      return name.substring(0, 1).toUpperCase() + name.substring(1);
    }).join("");
  }
  function debounce(func2, wait, immediate) {
    var timeout;
    return function () {
      var context = this;
      var args = arguments;
      var later = function later() {
        timeout = null;
        if (!immediate) {
          func2.apply(context, args);
        }
      };
      var callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) {
        func2.apply(context, args);
      }
    };
  }
  function isValidUrl(url) {
    var expression = /[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/gi;
    return expression.test(url);
  }
  var func = {
    eq: eq,
    eq2: eq2,
    peq2: peq2,
    ok: ok,
    fail: fail,
    self: self,
    not: not,
    and: and,
    invoke: invoke,
    resetUniqueId: resetUniqueId,
    uniqueId: uniqueId,
    rect2bnd: rect2bnd,
    invertObject: invertObject,
    namespaceToCamel: namespaceToCamel,
    debounce: debounce,
    isValidUrl: isValidUrl
  };
  function head(array) {
    return array[0];
  }
  function last(array) {
    return array[array.length - 1];
  }
  function initial(array) {
    return array.slice(0, array.length - 1);
  }
  function tail(array) {
    return array.slice(1);
  }
  function find(array, pred) {
    for (var idx = 0, len = array.length; idx < len; idx++) {
      var item = array[idx];
      if (pred(item)) {
        return item;
      }
    }
  }
  function all(array, pred) {
    for (var idx = 0, len = array.length; idx < len; idx++) {
      if (!pred(array[idx])) {
        return false;
      }
    }
    return true;
  }
  function contains(array, item) {
    if (array && array.length && item) {
      if (array.indexOf) {
        return array.indexOf(item) !== -1;
      } else if (array.contains) {
        return array.contains(item);
      }
    }
    return false;
  }
  function sum(array, fn) {
    fn = fn || func.self;
    return array.reduce(function (memo, v) {
      return memo + fn(v);
    }, 0);
  }
  function from(collection) {
    var result = [];
    var length = collection.length;
    var idx = -1;
    while (++idx < length) {
      result[idx] = collection[idx];
    }
    return result;
  }
  function isEmpty$1(array) {
    return !array || !array.length;
  }
  function clusterBy(array, fn) {
    if (!array.length) {
      return [];
    }
    var aTail = tail(array);
    return aTail.reduce(function (memo, v) {
      var aLast = last(memo);
      if (fn(last(aLast), v)) {
        aLast[aLast.length] = v;
      } else {
        memo[memo.length] = [v];
      }
      return memo;
    }, [[head(array)]]);
  }
  function compact(array) {
    var aResult = [];
    for (var idx = 0, len = array.length; idx < len; idx++) {
      if (array[idx]) {
        aResult.push(array[idx]);
      }
    }
    return aResult;
  }
  function unique(array) {
    var results = [];
    for (var idx = 0, len = array.length; idx < len; idx++) {
      if (!contains(results, array[idx])) {
        results.push(array[idx]);
      }
    }
    return results;
  }
  function next(array, item) {
    if (array && array.length && item) {
      var idx = array.indexOf(item);
      return idx === -1 ? null : array[idx + 1];
    }
    return null;
  }
  function prev(array, item) {
    if (array && array.length && item) {
      var idx = array.indexOf(item);
      return idx === -1 ? null : array[idx - 1];
    }
    return null;
  }
  var lists = {
    head: head,
    last: last,
    initial: initial,
    tail: tail,
    prev: prev,
    next: next,
    find: find,
    contains: contains,
    all: all,
    sum: sum,
    from: from,
    isEmpty: isEmpty$1,
    clusterBy: clusterBy,
    compact: compact,
    unique: unique
  };
  var NBSP_CHAR = String.fromCharCode(160);
  var ZERO_WIDTH_NBSP_CHAR = "\uFEFF";
  function isEditable(node) {
    return node && $(node).hasClass("note-editable");
  }
  function isControlSizing(node) {
    return node && $(node).hasClass("note-control-sizing");
  }
  function makePredByNodeName(nodeName) {
    nodeName = nodeName.toUpperCase();
    return function (node) {
      return node && node.nodeName.toUpperCase() === nodeName;
    };
  }
  function isText(node) {
    return node && node.nodeType === 3;
  }
  function isElement(node) {
    return node && node.nodeType === 1;
  }
  function isVoid(node) {
    return node && /^BR|^IMG|^HR|^IFRAME|^BUTTON|^INPUT|^AUDIO|^VIDEO|^EMBED/.test(node.nodeName.toUpperCase());
  }
  function isPara(node) {
    if (isEditable(node)) {
      return false;
    }
    return node && /^DIV|^P|^LI|^H[1-7]/.test(node.nodeName.toUpperCase());
  }
  function isHeading(node) {
    return node && /^H[1-7]/.test(node.nodeName.toUpperCase());
  }
  var isPre = makePredByNodeName("PRE");
  var isLi = makePredByNodeName("LI");
  function isPurePara(node) {
    return isPara(node) && !isLi(node);
  }
  var isTable = makePredByNodeName("TABLE");
  var isData = makePredByNodeName("DATA");
  function isInline(node) {
    return !isBodyContainer(node) && !isList(node) && !isHr(node) && !isPara(node) && !isTable(node) && !isBlockquote(node) && !isData(node);
  }
  function isList(node) {
    return node && /^UL|^OL/.test(node.nodeName.toUpperCase());
  }
  var isHr = makePredByNodeName("HR");
  function isCell(node) {
    return node && /^TD|^TH/.test(node.nodeName.toUpperCase());
  }
  var isBlockquote = makePredByNodeName("BLOCKQUOTE");
  function isBodyContainer(node) {
    return isCell(node) || isBlockquote(node) || isEditable(node);
  }
  var isAnchor = makePredByNodeName("A");
  function isParaInline(node) {
    return isInline(node) && !!ancestor(node, isPara);
  }
  function isBodyInline(node) {
    return isInline(node) && !ancestor(node, isPara);
  }
  var isBody = makePredByNodeName("BODY");
  function isClosestSibling(nodeA, nodeB) {
    return nodeA.nextSibling === nodeB || nodeA.previousSibling === nodeB;
  }
  function withClosestSiblings(node, pred) {
    pred = pred || func.ok;
    var siblings = [];
    if (node.previousSibling && pred(node.previousSibling)) {
      siblings.push(node.previousSibling);
    }
    siblings.push(node);
    if (node.nextSibling && pred(node.nextSibling)) {
      siblings.push(node.nextSibling);
    }
    return siblings;
  }
  var blankHTML = env.isMSIE && env.browserVersion < 11 ? "&nbsp;" : "<br>";
  function nodeLength(node) {
    if (isText(node)) {
      return node.nodeValue.length;
    }
    if (node) {
      return node.childNodes.length;
    }
    return 0;
  }
  function deepestChildIsEmpty(node) {
    do {
      if (node.firstElementChild === null || node.firstElementChild.innerHTML === "") break;
    } while (node = node.firstElementChild);
    return isEmpty(node);
  }
  function isEmpty(node) {
    var len = nodeLength(node);
    if (len === 0) {
      return true;
    } else if (!isText(node) && len === 1 && node.innerHTML === blankHTML) {
      return true;
    } else if (lists.all(node.childNodes, isText) && node.innerHTML === "") {
      return true;
    }
    return false;
  }
  function paddingBlankHTML(node) {
    if (!isVoid(node) && !nodeLength(node)) {
      node.innerHTML = blankHTML;
    }
  }
  function ancestor(node, pred) {
    while (node) {
      if (pred(node)) {
        return node;
      }
      if (isEditable(node)) {
        break;
      }
      node = node.parentNode;
    }
    return null;
  }
  function singleChildAncestor(node, pred) {
    node = node.parentNode;
    while (node) {
      if (nodeLength(node) !== 1) {
        break;
      }
      if (pred(node)) {
        return node;
      }
      if (isEditable(node)) {
        break;
      }
      node = node.parentNode;
    }
    return null;
  }
  function listAncestor(node, pred) {
    pred = pred || func.fail;
    var ancestors = [];
    ancestor(node, function (el) {
      if (!isEditable(el)) {
        ancestors.push(el);
      }
      return pred(el);
    });
    return ancestors;
  }
  function lastAncestor(node, pred) {
    var ancestors = listAncestor(node);
    return lists.last(ancestors.filter(pred));
  }
  function commonAncestor(nodeA, nodeB) {
    var ancestors = listAncestor(nodeA);
    for (var n = nodeB; n; n = n.parentNode) {
      if (ancestors.indexOf(n) > -1) return n;
    }
    return null;
  }
  function listPrev(node, pred) {
    pred = pred || func.fail;
    var nodes = [];
    while (node) {
      if (pred(node)) {
        break;
      }
      nodes.push(node);
      node = node.previousSibling;
    }
    return nodes;
  }
  function listNext(node, pred) {
    pred = pred || func.fail;
    var nodes = [];
    while (node) {
      if (pred(node)) {
        break;
      }
      nodes.push(node);
      node = node.nextSibling;
    }
    return nodes;
  }
  function listDescendant(node, pred) {
    var descendants = [];
    pred = pred || func.ok;
    (function fnWalk(current) {
      if (node !== current && pred(current)) {
        descendants.push(current);
      }
      for (var idx = 0, len = current.childNodes.length; idx < len; idx++) {
        fnWalk(current.childNodes[idx]);
      }
    })(node);
    return descendants;
  }
  function wrap(node, wrapperName) {
    var parent = node.parentNode;
    var wrapper = $("<" + wrapperName + ">")[0];
    parent.insertBefore(wrapper, node);
    wrapper.appendChild(node);
    return wrapper;
  }
  function insertAfter(node, preceding) {
    var next2 = preceding.nextSibling;
    var parent = preceding.parentNode;
    if (next2) {
      parent.insertBefore(node, next2);
    } else {
      parent.appendChild(node);
    }
    return node;
  }
  function appendChildNodes(node, aChild, isSkipPaddingBlankHTML) {
    $.each(aChild, function (idx, child) {
      if (!isSkipPaddingBlankHTML && isLi(node) && node.firstChild === null && isList(child)) {
        node.appendChild(create("br"));
      }
      node.appendChild(child);
    });
    return node;
  }
  function isLeftEdgePoint(point) {
    return point.offset === 0;
  }
  function isRightEdgePoint(point) {
    return point.offset === nodeLength(point.node);
  }
  function isEdgePoint(point) {
    return isLeftEdgePoint(point) || isRightEdgePoint(point);
  }
  function isLeftEdgeOf(node, ancestor2) {
    while (node && node !== ancestor2) {
      if (position(node) !== 0) {
        return false;
      }
      node = node.parentNode;
    }
    return true;
  }
  function isRightEdgeOf(node, ancestor2) {
    if (!ancestor2) {
      return false;
    }
    while (node && node !== ancestor2) {
      if (position(node) !== nodeLength(node.parentNode) - 1) {
        return false;
      }
      node = node.parentNode;
    }
    return true;
  }
  function isLeftEdgePointOf(point, ancestor2) {
    return isLeftEdgePoint(point) && isLeftEdgeOf(point.node, ancestor2);
  }
  function isRightEdgePointOf(point, ancestor2) {
    return isRightEdgePoint(point) && isRightEdgeOf(point.node, ancestor2);
  }
  function position(node) {
    var offset = 0;
    while (node = node.previousSibling) {
      offset += 1;
    }
    return offset;
  }
  function hasChildren(node) {
    return !!(node && node.childNodes && node.childNodes.length);
  }
  function prevPoint(point, isSkipInnerOffset) {
    var node;
    var offset;
    if (point.offset === 0) {
      if (isEditable(point.node)) {
        return null;
      }
      node = point.node.parentNode;
      offset = position(point.node);
    } else if (hasChildren(point.node)) {
      node = point.node.childNodes[point.offset - 1];
      offset = nodeLength(node);
    } else {
      node = point.node;
      offset = isSkipInnerOffset ? 0 : point.offset - 1;
    }
    return {
      node: node,
      offset: offset
    };
  }
  function nextPoint(point, isSkipInnerOffset) {
    var node, offset;
    if (nodeLength(point.node) === point.offset) {
      if (isEditable(point.node)) {
        return null;
      }
      var nextTextNode = getNextTextNode(point.node);
      if (nextTextNode) {
        node = nextTextNode;
        offset = 0;
      } else {
        node = point.node.parentNode;
        offset = position(point.node) + 1;
      }
    } else if (hasChildren(point.node)) {
      node = point.node.childNodes[point.offset];
      offset = 0;
    } else {
      node = point.node;
      offset = isSkipInnerOffset ? nodeLength(point.node) : point.offset + 1;
    }
    return {
      node: node,
      offset: offset
    };
  }
  function nextPointWithEmptyNode(point, isSkipInnerOffset) {
    var node,
      offset = 0;
    if (nodeLength(point.node) === point.offset) {
      if (isEditable(point.node)) {
        return null;
      }
      node = point.node.parentNode;
      offset = position(point.node) + 1;
      if (isEditable(node)) {
        node = point.node.nextSibling;
        offset = 0;
      }
    } else if (hasChildren(point.node)) {
      node = point.node.childNodes[point.offset];
      offset = 0;
    } else {
      node = point.node;
      offset = isSkipInnerOffset ? nodeLength(point.node) : point.offset + 1;
    }
    return {
      node: node,
      offset: offset
    };
  }
  function getNextTextNode(actual) {
    if (!actual.nextSibling) return void 0;
    if (actual.parent !== actual.nextSibling.parent) return void 0;
    if (isText(actual.nextSibling)) return actual.nextSibling;else return getNextTextNode(actual.nextSibling);
  }
  function isSamePoint(pointA, pointB) {
    return pointA.node === pointB.node && pointA.offset === pointB.offset;
  }
  function isVisiblePoint(point) {
    if (isText(point.node) || !hasChildren(point.node) || isEmpty(point.node)) {
      return true;
    }
    var leftNode = point.node.childNodes[point.offset - 1];
    var rightNode = point.node.childNodes[point.offset];
    if ((!leftNode || isVoid(leftNode)) && (!rightNode || isVoid(rightNode)) || isTable(rightNode)) {
      return true;
    }
    return false;
  }
  function prevPointUntil(point, pred) {
    while (point) {
      if (pred(point)) {
        return point;
      }
      point = prevPoint(point);
    }
    return null;
  }
  function nextPointUntil(point, pred) {
    while (point) {
      if (pred(point)) {
        return point;
      }
      point = nextPoint(point);
    }
    return null;
  }
  function isCharPoint(point) {
    if (!isText(point.node)) {
      return false;
    }
    var ch = point.node.nodeValue.charAt(point.offset - 1);
    return ch && ch !== " " && ch !== NBSP_CHAR;
  }
  function isSpacePoint(point) {
    if (!isText(point.node)) {
      return false;
    }
    var ch = point.node.nodeValue.charAt(point.offset - 1);
    return ch === " " || ch === NBSP_CHAR;
  }
  function walkPoint(startPoint, endPoint, handler, isSkipInnerOffset) {
    var point = startPoint;
    while (point && point.node) {
      handler(point);
      if (isSamePoint(point, endPoint)) {
        break;
      }
      var isSkipOffset = isSkipInnerOffset && startPoint.node !== point.node && endPoint.node !== point.node;
      point = nextPointWithEmptyNode(point, isSkipOffset);
    }
  }
  function makeOffsetPath(ancestor2, node) {
    var ancestors = listAncestor(node, func.eq(ancestor2));
    return ancestors.map(position).reverse();
  }
  function fromOffsetPath(ancestor2, offsets) {
    var current = ancestor2;
    for (var i = 0, len = offsets.length; i < len; i++) {
      if (current.childNodes.length <= offsets[i]) {
        current = current.childNodes[current.childNodes.length - 1];
      } else {
        current = current.childNodes[offsets[i]];
      }
    }
    return current;
  }
  function splitNode(point, options) {
    var isSkipPaddingBlankHTML = options && options.isSkipPaddingBlankHTML;
    var isNotSplitEdgePoint = options && options.isNotSplitEdgePoint;
    var isDiscardEmptySplits = options && options.isDiscardEmptySplits;
    if (isDiscardEmptySplits) {
      isSkipPaddingBlankHTML = true;
    }
    if (isEdgePoint(point) && (isText(point.node) || isNotSplitEdgePoint)) {
      if (isLeftEdgePoint(point)) {
        return point.node;
      } else if (isRightEdgePoint(point)) {
        return point.node.nextSibling;
      }
    }
    if (isText(point.node)) {
      return point.node.splitText(point.offset);
    } else {
      var childNode = point.node.childNodes[point.offset];
      var childNodes = listNext(childNode);
      var clone = insertAfter(point.node.cloneNode(false), point.node);
      appendChildNodes(clone, childNodes);
      if (!isSkipPaddingBlankHTML) {
        paddingBlankHTML(point.node);
        paddingBlankHTML(clone);
      }
      if (isDiscardEmptySplits) {
        if (isEmpty(point.node)) {
          remove(point.node);
        }
        if (isEmpty(clone)) {
          remove(clone);
          return point.node.nextSibling;
        }
      }
      return clone;
    }
  }
  function splitTree(root, point, options) {
    var ancestors = listAncestor(point.node, func.eq(root));
    if (!ancestors.length) {
      return null;
    } else if (ancestors.length === 1) {
      return splitNode(point, options);
    }
    if (ancestors.length > 2) {
      var domList = ancestors.slice(0, ancestors.length - 1);
      var ifHasNextSibling = domList.find(function (item) {
        return item.nextSibling;
      });
      if (ifHasNextSibling && point.offset != 0 && isRightEdgePoint(point)) {
        var nestSibling = ifHasNextSibling.nextSibling;
        var textNode;
        if (nestSibling.nodeType == 1) {
          textNode = nestSibling.childNodes[0];
          ancestors = listAncestor(textNode, func.eq(root));
          point = {
            node: textNode,
            offset: 0
          };
        } else if (nestSibling.nodeType == 3 && !nestSibling.data.match(/[\n\r]/g)) {
          textNode = nestSibling;
          ancestors = listAncestor(textNode, func.eq(root));
          point = {
            node: textNode,
            offset: 0
          };
        }
      }
    }
    return ancestors.reduce(function (node, parent) {
      if (node === point.node) {
        node = splitNode(point, options);
      }
      return splitNode({
        node: parent,
        offset: node ? position(node) : nodeLength(parent)
      }, options);
    });
  }
  function splitPoint(point, isInline2) {
    var pred = isInline2 ? isPara : isBodyContainer;
    var ancestors = listAncestor(point.node, pred);
    var topAncestor = lists.last(ancestors) || point.node;
    var splitRoot, container;
    if (pred(topAncestor)) {
      splitRoot = ancestors[ancestors.length - 2];
      container = topAncestor;
    } else {
      splitRoot = topAncestor;
      container = splitRoot.parentNode;
    }
    var pivot = splitRoot && splitTree(splitRoot, point, {
      isSkipPaddingBlankHTML: isInline2,
      isNotSplitEdgePoint: isInline2
    });
    if (!pivot && container === point.node) {
      pivot = point.node.childNodes[point.offset];
    }
    return {
      rightNode: pivot,
      container: container
    };
  }
  function create(nodeName) {
    return document.createElement(nodeName);
  }
  function createText(text) {
    return document.createTextNode(text);
  }
  function remove(node, isRemoveChild) {
    if (!node || !node.parentNode) {
      return;
    }
    if (node.removeNode) {
      return node.removeNode(isRemoveChild);
    }
    var parent = node.parentNode;
    if (!isRemoveChild) {
      var nodes = [];
      for (var i = 0, len = node.childNodes.length; i < len; i++) {
        nodes.push(node.childNodes[i]);
      }
      for (var _i = 0, _len = nodes.length; _i < _len; _i++) {
        parent.insertBefore(nodes[_i], node);
      }
    }
    parent.removeChild(node);
  }
  function removeWhile(node, pred) {
    while (node) {
      if (isEditable(node) || !pred(node)) {
        break;
      }
      var parent = node.parentNode;
      remove(node);
      node = parent;
    }
  }
  function replace(node, nodeName) {
    if (node.nodeName.toUpperCase() === nodeName.toUpperCase()) {
      return node;
    }
    var newNode = create(nodeName);
    if (node.style.cssText) {
      newNode.style.cssText = node.style.cssText;
    }
    appendChildNodes(newNode, lists.from(node.childNodes));
    insertAfter(newNode, node);
    remove(node);
    return newNode;
  }
  var isTextarea = makePredByNodeName("TEXTAREA");
  function value($node, stripLinebreaks) {
    var val = isTextarea($node[0]) ? $node.val() : $node.html();
    if (stripLinebreaks) {
      return val.replace(/[\n\r]/g, "");
    }
    return val;
  }
  function html($node, isNewlineOnBlock) {
    var markup = value($node);
    if (isNewlineOnBlock) {
      var regexTag = /<(\/?)(\b(?!!)[^>\s]*)(.*?)(\s*\/?>)/g;
      markup = markup.replace(regexTag, function (match, endSlash, name) {
        name = name.toUpperCase();
        var isEndOfInlineContainer = /^DIV|^TD|^TH|^P|^LI|^H[1-7]/.test(name) && !!endSlash;
        var isBlockNode = /^BLOCKQUOTE|^TABLE|^TBODY|^TR|^HR|^UL|^OL/.test(name);
        return match + (isEndOfInlineContainer || isBlockNode ? "\n" : "");
      });
      markup = markup.trim();
    }
    return markup;
  }
  function posFromPlaceholder(placeholder) {
    var $placeholder = $(placeholder);
    var pos = $placeholder.offset();
    var height = $placeholder.outerHeight(true);
    return {
      left: pos.left,
      top: pos.top + height
    };
  }
  function attachEvents($node, events) {
    Object.keys(events).forEach(function (key2) {
      $node.on(key2, events[key2]);
    });
  }
  function detachEvents($node, events) {
    Object.keys(events).forEach(function (key2) {
      $node.off(key2, events[key2]);
    });
  }
  function isCustomStyleTag(node) {
    return node && !isText(node) && lists.contains(node.classList, "note-styletag");
  }
  var dom = {
    /** @property {String} NBSP_CHAR */
    NBSP_CHAR: NBSP_CHAR,
    /** @property {String} ZERO_WIDTH_NBSP_CHAR */
    ZERO_WIDTH_NBSP_CHAR: ZERO_WIDTH_NBSP_CHAR,
    /** @property {String} blank */
    blank: blankHTML,
    /** @property {String} emptyPara */
    emptyPara: "<p>".concat(blankHTML, "</p>"),
    makePredByNodeName: makePredByNodeName,
    isEditable: isEditable,
    isControlSizing: isControlSizing,
    isText: isText,
    isElement: isElement,
    isVoid: isVoid,
    isPara: isPara,
    isPurePara: isPurePara,
    isHeading: isHeading,
    isInline: isInline,
    isBlock: func.not(isInline),
    isBodyInline: isBodyInline,
    isBody: isBody,
    isParaInline: isParaInline,
    isPre: isPre,
    isList: isList,
    isTable: isTable,
    isData: isData,
    isCell: isCell,
    isBlockquote: isBlockquote,
    isBodyContainer: isBodyContainer,
    isAnchor: isAnchor,
    isDiv: makePredByNodeName("DIV"),
    isLi: isLi,
    isBR: makePredByNodeName("BR"),
    isSpan: makePredByNodeName("SPAN"),
    isB: makePredByNodeName("B"),
    isU: makePredByNodeName("U"),
    isS: makePredByNodeName("S"),
    isI: makePredByNodeName("I"),
    isImg: makePredByNodeName("IMG"),
    isTextarea: isTextarea,
    deepestChildIsEmpty: deepestChildIsEmpty,
    isEmpty: isEmpty,
    isEmptyAnchor: func.and(isAnchor, isEmpty),
    isClosestSibling: isClosestSibling,
    withClosestSiblings: withClosestSiblings,
    nodeLength: nodeLength,
    isLeftEdgePoint: isLeftEdgePoint,
    isRightEdgePoint: isRightEdgePoint,
    isEdgePoint: isEdgePoint,
    isLeftEdgeOf: isLeftEdgeOf,
    isRightEdgeOf: isRightEdgeOf,
    isLeftEdgePointOf: isLeftEdgePointOf,
    isRightEdgePointOf: isRightEdgePointOf,
    prevPoint: prevPoint,
    nextPoint: nextPoint,
    nextPointWithEmptyNode: nextPointWithEmptyNode,
    isSamePoint: isSamePoint,
    isVisiblePoint: isVisiblePoint,
    prevPointUntil: prevPointUntil,
    nextPointUntil: nextPointUntil,
    isCharPoint: isCharPoint,
    isSpacePoint: isSpacePoint,
    walkPoint: walkPoint,
    ancestor: ancestor,
    singleChildAncestor: singleChildAncestor,
    listAncestor: listAncestor,
    lastAncestor: lastAncestor,
    listNext: listNext,
    listPrev: listPrev,
    listDescendant: listDescendant,
    commonAncestor: commonAncestor,
    wrap: wrap,
    insertAfter: insertAfter,
    appendChildNodes: appendChildNodes,
    position: position,
    hasChildren: hasChildren,
    makeOffsetPath: makeOffsetPath,
    fromOffsetPath: fromOffsetPath,
    splitTree: splitTree,
    splitPoint: splitPoint,
    create: create,
    createText: createText,
    remove: remove,
    removeWhile: removeWhile,
    replace: replace,
    html: html,
    value: value,
    posFromPlaceholder: posFromPlaceholder,
    attachEvents: attachEvents,
    detachEvents: detachEvents,
    isCustomStyleTag: isCustomStyleTag
  };
  var Context = /*#__PURE__*/function () {
    /**
     * @param {jQuery} $note
     * @param {Object} options
     */
    function Context($note, options) {
      _classCallCheck(this, Context);
      this.$note = $note;
      this.memos = {};
      this.modules = {};
      this.layoutInfo = {};
      this.options = $.extend(true, {}, options);
      $.summernote.ui = $.summernote.ui_template(this.options);
      this.ui = $.summernote.ui;
      this.initialize();
    }
    /**
     * create layout and initialize modules and other resources
     */
    return _createClass(Context, [{
      key: "initialize",
      value: function initialize() {
        this.layoutInfo = this.ui.createLayout(this.$note);
        this._initialize();
        this.$note.hide();
        return this;
      }
      /**
       * destroy modules and other resources and remove layout
       */
    }, {
      key: "destroy",
      value: function destroy() {
        this._destroy();
        this.$note.removeData("summernote");
        this.ui.removeLayout(this.$note, this.layoutInfo);
      }
      /**
       * destory modules and other resources and initialize it again
       */
    }, {
      key: "reset",
      value: function reset() {
        var disabled = this.isDisabled();
        this.code(dom.emptyPara);
        this._destroy();
        this._initialize();
        if (disabled) {
          this.disable();
        }
      }
    }, {
      key: "_initialize",
      value: function _initialize() {
        var _this = this;
        this.options.id = func.uniqueId($.now());
        this.options.container = this.options.container || this.layoutInfo.editor;
        var buttons = $.extend({}, this.options.buttons);
        Object.keys(buttons).forEach(function (key2) {
          _this.memo("button." + key2, buttons[key2]);
        });
        var modules = $.extend({}, this.options.modules, $.summernote.plugins || {});
        Object.keys(modules).forEach(function (key2) {
          _this.module(key2, modules[key2], true);
        });
        Object.keys(this.modules).forEach(function (key2) {
          _this.initializeModule(key2);
        });
      }
    }, {
      key: "_destroy",
      value: function _destroy() {
        var _this2 = this;
        Object.keys(this.modules).reverse().forEach(function (key2) {
          _this2.removeModule(key2);
        });
        Object.keys(this.memos).forEach(function (key2) {
          _this2.removeMemo(key2);
        });
        this.triggerEvent("destroy", this);
      }
    }, {
      key: "code",
      value: function code(html2) {
        var isActivated = this.invoke("codeview.isActivated");
        if (html2 === void 0) {
          this.invoke("codeview.sync");
          return isActivated ? this.layoutInfo.codable.val() : this.layoutInfo.editable.html();
        } else {
          if (isActivated) {
            this.invoke("codeview.sync", html2);
          } else {
            this.layoutInfo.editable.html(html2);
          }
          this.$note.val(html2);
          this.triggerEvent("change", html2, this.layoutInfo.editable);
        }
      }
    }, {
      key: "isDisabled",
      value: function isDisabled() {
        return this.layoutInfo.editable.attr("contenteditable") === "false";
      }
    }, {
      key: "enable",
      value: function enable() {
        this.layoutInfo.editable.attr("contenteditable", true);
        this.invoke("toolbar.activate", true);
        this.triggerEvent("disable", false);
        this.options.editing = true;
      }
    }, {
      key: "disable",
      value: function disable() {
        if (this.invoke("codeview.isActivated")) {
          this.invoke("codeview.deactivate");
        }
        this.layoutInfo.editable.attr("contenteditable", false);
        this.options.editing = false;
        this.invoke("toolbar.deactivate", true);
        this.triggerEvent("disable", true);
      }
    }, {
      key: "triggerEvent",
      value: function triggerEvent() {
        var namespace = lists.head(arguments);
        var args = lists.tail(lists.from(arguments));
        var callback = this.options.callbacks[func.namespaceToCamel(namespace, "on")];
        if (callback) {
          callback.apply(this.$note[0], args);
        }
        this.$note.trigger("summernote." + namespace, args);
      }
    }, {
      key: "initializeModule",
      value: function initializeModule(key2) {
        var module = this.modules[key2];
        module.shouldInitialize = module.shouldInitialize || func.ok;
        if (!module.shouldInitialize()) {
          return;
        }
        if (module.initialize) {
          module.initialize();
        }
        if (module.events) {
          dom.attachEvents(this.$note, module.events);
        }
      }
    }, {
      key: "module",
      value: function module(key2, ModuleClass, withoutIntialize) {
        if (arguments.length === 1) {
          return this.modules[key2];
        }
        this.modules[key2] = new ModuleClass(this);
        if (!withoutIntialize) {
          this.initializeModule(key2);
        }
      }
    }, {
      key: "removeModule",
      value: function removeModule(key2) {
        var module = this.modules[key2];
        if (module.shouldInitialize()) {
          if (module.events) {
            dom.detachEvents(this.$note, module.events);
          }
          if (module.destroy) {
            module.destroy();
          }
        }
        delete this.modules[key2];
      }
    }, {
      key: "memo",
      value: function memo(key2, obj) {
        if (arguments.length === 1) {
          return this.memos[key2];
        }
        this.memos[key2] = obj;
      }
    }, {
      key: "removeMemo",
      value: function removeMemo(key2) {
        if (this.memos[key2] && this.memos[key2].destroy) {
          this.memos[key2].destroy();
        }
        delete this.memos[key2];
      }
      /**
       * Some buttons need to change their visual style immediately once they get pressed
       */
    }, {
      key: "createInvokeHandlerAndUpdateState",
      value: function createInvokeHandlerAndUpdateState(namespace, value2) {
        var _this3 = this;
        return function (event) {
          _this3.createInvokeHandler(namespace, value2)(event);
          _this3.invoke("buttons.updateCurrentStyle");
        };
      }
    }, {
      key: "createInvokeHandler",
      value: function createInvokeHandler(namespace, value2) {
        var _this4 = this;
        return function (event) {
          event.preventDefault();
          var $target = $(event.target);
          _this4.invoke(namespace, value2 || $target.closest("[data-value]").data("value"), $target);
        };
      }
    }, {
      key: "invoke",
      value: function invoke() {
        var namespace = lists.head(arguments);
        var args = lists.tail(lists.from(arguments));
        var splits = namespace.split(".");
        var hasSeparator = splits.length > 1;
        var moduleName = hasSeparator && lists.head(splits);
        var methodName = hasSeparator ? lists.last(splits) : lists.head(splits);
        var module = this.modules[moduleName || "editor"];
        if (!moduleName && this[methodName]) {
          return this[methodName].apply(this, args);
        } else if (module && module[methodName] && module.shouldInitialize()) {
          return module[methodName].apply(module, args);
        }
      }
    }]);
  }();
  $.fn.extend({
    /**
     * Summernote API
     *
     * @param {Object|String}
     * @return {this}
     */
    summernote: function summernote() {
      var type = _typeof(lists.head(arguments));
      var isExternalAPICalled = type === "string";
      var hasInitOptions = type === "object";
      var options = $.extend({}, $.summernote.options, hasInitOptions ? lists.head(arguments) : {});
      options.langInfo = $.extend(true, {}, $.summernote.lang["en-US"], $.summernote.lang[options.lang]);
      options.icons = $.extend(true, {}, $.summernote.options.icons, options.icons);
      options.tooltip = options.tooltip === "auto" ? !env.isSupportTouch : options.tooltip;
      this.each(function (idx, note) {
        var $note2 = $(note);
        if (!$note2.data("summernote")) {
          var context = new Context($note2, options);
          $note2.data("summernote", context);
          $note2.data("summernote").triggerEvent("init", context.layoutInfo);
        }
      });
      var $note = this.first();
      if ($note.length) {
        var context = $note.data("summernote");
        if (isExternalAPICalled) {
          return context.invoke.apply(context, lists.from(arguments));
        } else if (options.focus) {
          context.invoke("editor.focus");
        }
      }
      return this;
    }
  });
  function textRangeToPoint(textRange, isStart) {
    var container = textRange.parentElement();
    var offset;
    var tester = document.body.createTextRange();
    var prevContainer;
    var childNodes = lists.from(container.childNodes);
    for (offset = 0; offset < childNodes.length; offset++) {
      if (dom.isText(childNodes[offset])) {
        continue;
      }
      tester.moveToElementText(childNodes[offset]);
      if (tester.compareEndPoints("StartToStart", textRange) >= 0) {
        break;
      }
      prevContainer = childNodes[offset];
    }
    if (offset !== 0 && dom.isText(childNodes[offset - 1])) {
      var textRangeStart = document.body.createTextRange();
      var curTextNode = null;
      textRangeStart.moveToElementText(prevContainer || container);
      textRangeStart.collapse(!prevContainer);
      curTextNode = prevContainer ? prevContainer.nextSibling : container.firstChild;
      var pointTester = textRange.duplicate();
      pointTester.setEndPoint("StartToStart", textRangeStart);
      var textCount = pointTester.text.replace(/[\r\n]/g, "").length;
      while (textCount > curTextNode.nodeValue.length && curTextNode.nextSibling) {
        textCount -= curTextNode.nodeValue.length;
        curTextNode = curTextNode.nextSibling;
      }
      curTextNode.nodeValue;
      if (isStart && curTextNode.nextSibling && dom.isText(curTextNode.nextSibling) && textCount === curTextNode.nodeValue.length) {
        textCount -= curTextNode.nodeValue.length;
        curTextNode = curTextNode.nextSibling;
      }
      container = curTextNode;
      offset = textCount;
    }
    return {
      cont: container,
      offset: offset
    };
  }
  function pointToTextRange(point) {
    var _textRangeInfo = function textRangeInfo(container, offset) {
      var node, isCollapseToStart;
      if (dom.isText(container)) {
        var prevTextNodes = dom.listPrev(container, func.not(dom.isText));
        var prevContainer = lists.last(prevTextNodes).previousSibling;
        node = prevContainer || container.parentNode;
        offset += lists.sum(lists.tail(prevTextNodes), dom.nodeLength);
        isCollapseToStart = !prevContainer;
      } else {
        node = container.childNodes[offset] || container;
        if (dom.isText(node)) {
          return _textRangeInfo(node, 0);
        }
        offset = 0;
        isCollapseToStart = false;
      }
      return {
        node: node,
        collapseToStart: isCollapseToStart,
        offset: offset
      };
    };
    var textRange = document.body.createTextRange();
    var info = _textRangeInfo(point.node, point.offset);
    textRange.moveToElementText(info.node);
    textRange.collapse(info.collapseToStart);
    textRange.moveStart("character", info.offset);
    return textRange;
  }
  var WrappedRange = /*#__PURE__*/function () {
    function WrappedRange(sc, so, ec, eo) {
      _classCallCheck(this, WrappedRange);
      this.sc = sc;
      this.so = so;
      this.ec = ec;
      this.eo = eo;
      this.isOnEditable = this.makeIsOn(dom.isEditable);
      this.isOnList = this.makeIsOn(dom.isList);
      this.isOnAnchor = this.makeIsOn(dom.isAnchor);
      this.isOnCell = this.makeIsOn(dom.isCell);
      this.isOnData = this.makeIsOn(dom.isData);
    }
    // nativeRange: get nativeRange from sc, so, ec, eo
    return _createClass(WrappedRange, [{
      key: "nativeRange",
      value: function nativeRange() {
        if (env.isW3CRangeSupport) {
          var w3cRange = document.createRange();
          w3cRange.setStart(this.sc, this.so);
          w3cRange.setEnd(this.ec, this.eo);
          return w3cRange;
        } else {
          var textRange = pointToTextRange({
            node: this.sc,
            offset: this.so
          });
          textRange.setEndPoint("EndToEnd", pointToTextRange({
            node: this.ec,
            offset: this.eo
          }));
          return textRange;
        }
      }
    }, {
      key: "getPoints",
      value: function getPoints() {
        return {
          sc: this.sc,
          so: this.so,
          ec: this.ec,
          eo: this.eo
        };
      }
    }, {
      key: "getStartPoint",
      value: function getStartPoint() {
        return {
          node: this.sc,
          offset: this.so
        };
      }
    }, {
      key: "getEndPoint",
      value: function getEndPoint() {
        return {
          node: this.ec,
          offset: this.eo
        };
      }
      /**
       * select update visible range
       */
    }, {
      key: "select",
      value: function select() {
        var nativeRng = this.nativeRange();
        if (env.isW3CRangeSupport) {
          var selection = document.getSelection();
          if (selection.rangeCount > 0) {
            selection.removeAllRanges();
          }
          selection.addRange(nativeRng);
        } else {
          nativeRng.select();
        }
        return this;
      }
      /**
       * Moves the scrollbar to start container(sc) of current range
       *
       * @return {WrappedRange}
       */
    }, {
      key: "scrollIntoView",
      value: function scrollIntoView(container) {
        var height = $(container).height();
        if (container.scrollTop + height < this.sc.offsetTop) {
          container.scrollTop += Math.abs(container.scrollTop + height - this.sc.offsetTop);
        }
        return this;
      }
      /**
       * @return {WrappedRange}
       */
    }, {
      key: "normalize",
      value: function normalize() {
        var getVisiblePoint = function getVisiblePoint(point, isLeftToRight) {
          if (!point) {
            return point;
          }
          if (dom.isVisiblePoint(point)) {
            if (!dom.isEdgePoint(point) || dom.isRightEdgePoint(point) && !isLeftToRight || dom.isLeftEdgePoint(point) && isLeftToRight || dom.isRightEdgePoint(point) && isLeftToRight && dom.isVoid(point.node.nextSibling) || dom.isLeftEdgePoint(point) && !isLeftToRight && dom.isVoid(point.node.previousSibling) || dom.isBlock(point.node) && dom.isEmpty(point.node)) {
              return point;
            }
          }
          var block = dom.ancestor(point.node, dom.isBlock);
          var hasRightNode = false;
          if (!hasRightNode) {
            var prevPoint2 = dom.prevPoint(point) || {
              node: null
            };
            hasRightNode = (dom.isLeftEdgePointOf(point, block) || dom.isVoid(prevPoint2.node)) && !isLeftToRight;
          }
          var hasLeftNode = false;
          if (!hasLeftNode) {
            var nextPoint3 = dom.nextPoint(point) || {
              node: null
            };
            hasLeftNode = (dom.isRightEdgePointOf(point, block) || dom.isVoid(nextPoint3.node)) && isLeftToRight;
          }
          if (hasRightNode || hasLeftNode) {
            if (dom.isVisiblePoint(point)) {
              return point;
            }
            isLeftToRight = !isLeftToRight;
          }
          var nextPoint2 = isLeftToRight ? dom.nextPointUntil(dom.nextPoint(point), dom.isVisiblePoint) : dom.prevPointUntil(dom.prevPoint(point), dom.isVisiblePoint);
          return nextPoint2 || point;
        };
        var endPoint = getVisiblePoint(this.getEndPoint(), false);
        var startPoint = this.isCollapsed() ? endPoint : getVisiblePoint(this.getStartPoint(), true);
        return new WrappedRange(startPoint.node, startPoint.offset, endPoint.node, endPoint.offset);
      }
      /**
       * returns matched nodes on range
       *
       * @param {Function} [pred] - predicate function
       * @param {Object} [options]
       * @param {Boolean} [options.includeAncestor]
       * @param {Boolean} [options.fullyContains]
       * @return {Node[]}
       */
    }, {
      key: "nodes",
      value: function nodes(pred, options) {
        pred = pred || func.ok;
        var includeAncestor = options && options.includeAncestor;
        var fullyContains = options && options.fullyContains;
        var startPoint = this.getStartPoint();
        var endPoint = this.getEndPoint();
        var nodes = [];
        var leftEdgeNodes = [];
        dom.walkPoint(startPoint, endPoint, function (point) {
          if (dom.isEditable(point.node)) {
            return;
          }
          var node;
          if (fullyContains) {
            if (dom.isLeftEdgePoint(point)) {
              leftEdgeNodes.push(point.node);
            }
            if (dom.isRightEdgePoint(point) && lists.contains(leftEdgeNodes, point.node)) {
              node = point.node;
            }
          } else if (includeAncestor) {
            node = dom.ancestor(point.node, pred);
          } else {
            node = point.node;
          }
          if (node && pred(node)) {
            nodes.push(node);
          }
        }, true);
        return lists.unique(nodes);
      }
      /**
       * returns commonAncestor of range
       * @return {Element} - commonAncestor
       */
    }, {
      key: "commonAncestor",
      value: function commonAncestor() {
        return dom.commonAncestor(this.sc, this.ec);
      }
      /**
       * returns expanded range by pred
       *
       * @param {Function} pred - predicate function
       * @return {WrappedRange}
       */
    }, {
      key: "expand",
      value: function expand(pred) {
        var startAncestor = dom.ancestor(this.sc, pred);
        var endAncestor = dom.ancestor(this.ec, pred);
        if (!startAncestor && !endAncestor) {
          return new WrappedRange(this.sc, this.so, this.ec, this.eo);
        }
        var boundaryPoints = this.getPoints();
        if (startAncestor) {
          boundaryPoints.sc = startAncestor;
          boundaryPoints.so = 0;
        }
        if (endAncestor) {
          boundaryPoints.ec = endAncestor;
          boundaryPoints.eo = dom.nodeLength(endAncestor);
        }
        return new WrappedRange(boundaryPoints.sc, boundaryPoints.so, boundaryPoints.ec, boundaryPoints.eo);
      }
      /**
       * @param {Boolean} isCollapseToStart
       * @return {WrappedRange}
       */
    }, {
      key: "collapse",
      value: function collapse(isCollapseToStart) {
        if (isCollapseToStart) {
          return new WrappedRange(this.sc, this.so, this.sc, this.so);
        } else {
          return new WrappedRange(this.ec, this.eo, this.ec, this.eo);
        }
      }
      /**
       * splitText on range
       */
    }, {
      key: "splitText",
      value: function splitText() {
        var isSameContainer = this.sc === this.ec;
        var boundaryPoints = this.getPoints();
        if (dom.isText(this.ec) && !dom.isEdgePoint(this.getEndPoint())) {
          this.ec.splitText(this.eo);
        }
        if (dom.isText(this.sc) && !dom.isEdgePoint(this.getStartPoint())) {
          boundaryPoints.sc = this.sc.splitText(this.so);
          boundaryPoints.so = 0;
          if (isSameContainer) {
            boundaryPoints.ec = boundaryPoints.sc;
            boundaryPoints.eo = this.eo - this.so;
          }
        }
        return new WrappedRange(boundaryPoints.sc, boundaryPoints.so, boundaryPoints.ec, boundaryPoints.eo);
      }
      /**
       * delete contents on range
       * @return {WrappedRange}
       */
    }, {
      key: "deleteContents",
      value: function deleteContents() {
        if (this.isCollapsed()) {
          return this;
        }
        var rng = this.splitText();
        var nodes = rng.nodes(null, {
          fullyContains: true
        });
        var point = dom.prevPointUntil(rng.getStartPoint(), function (point2) {
          return !lists.contains(nodes, point2.node);
        });
        var emptyParents = [];
        $.each(nodes, function (idx, node) {
          var parent = node.parentNode;
          if (point.node !== parent && dom.nodeLength(parent) === 1) {
            emptyParents.push(parent);
          }
          dom.remove(node, false);
        });
        $.each(emptyParents, function (idx, node) {
          dom.remove(node, false);
        });
        return new WrappedRange(point.node, point.offset, point.node, point.offset).normalize();
      }
      /**
       * makeIsOn: return isOn(pred) function
       */
    }, {
      key: "makeIsOn",
      value: function makeIsOn(pred) {
        return function () {
          var ancestor2 = dom.ancestor(this.sc, pred);
          return !!ancestor2 && ancestor2 === dom.ancestor(this.ec, pred);
        };
      }
      /**
       * @param {Function} pred
       * @return {Boolean}
       */
    }, {
      key: "isLeftEdgeOf",
      value: function isLeftEdgeOf(pred) {
        if (!dom.isLeftEdgePoint(this.getStartPoint())) {
          return false;
        }
        var node = dom.ancestor(this.sc, pred);
        return node && dom.isLeftEdgeOf(this.sc, node);
      }
      /**
       * returns whether range was collapsed or not
       */
    }, {
      key: "isCollapsed",
      value: function isCollapsed() {
        return this.sc === this.ec && this.so === this.eo;
      }
      /**
       * wrap inline nodes which children of body with paragraph
       *
       * @return {WrappedRange}
       */
    }, {
      key: "wrapBodyInlineWithPara",
      value: function wrapBodyInlineWithPara() {
        if (dom.isBodyContainer(this.sc) && dom.isEmpty(this.sc)) {
          this.sc.innerHTML = dom.emptyPara;
          return new WrappedRange(this.sc.firstChild, 0, this.sc.firstChild, 0);
        }
        var rng = this.normalize();
        if (dom.isParaInline(this.sc) || dom.isPara(this.sc)) {
          return rng;
        }
        var topAncestor;
        if (dom.isInline(rng.sc)) {
          var ancestors = dom.listAncestor(rng.sc, func.not(dom.isInline));
          topAncestor = lists.last(ancestors);
          if (!dom.isInline(topAncestor)) {
            topAncestor = ancestors[ancestors.length - 2] || rng.sc.childNodes[rng.so];
          }
        } else {
          topAncestor = rng.sc.childNodes[rng.so > 0 ? rng.so - 1 : 0];
        }
        if (topAncestor) {
          var inlineSiblings = dom.listPrev(topAncestor, dom.isParaInline).reverse();
          inlineSiblings = inlineSiblings.concat(dom.listNext(topAncestor.nextSibling, dom.isParaInline));
          if (inlineSiblings.length) {
            var para = dom.wrap(lists.head(inlineSiblings), "p");
            dom.appendChildNodes(para, lists.tail(inlineSiblings));
          }
        }
        return this.normalize();
      }
      /**
       * insert node at current cursor
       *
       * @param {Node} node
       * @param {Boolean} doNotInsertPara - default is false, removes added <p> that's added if true
       * @return {Node}
       */
    }, {
      key: "insertNode",
      value: function insertNode(node) {
        var doNotInsertPara = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
        var rng = this;
        if (dom.isText(node) || dom.isInline(node)) {
          rng = this.wrapBodyInlineWithPara().deleteContents();
        }
        var info = dom.splitPoint(rng.getStartPoint(), dom.isInline(node));
        if (info.rightNode) {
          info.rightNode.parentNode.insertBefore(node, info.rightNode);
          if (dom.isEmpty(info.rightNode) && (doNotInsertPara || dom.isPara(node))) {
            info.rightNode.parentNode.removeChild(info.rightNode);
          }
        } else {
          info.container.appendChild(node);
        }
        return node;
      }
      /**
       * insert html at current cursor
       */
    }, {
      key: "pasteHTML",
      value: function pasteHTML(markup) {
        markup = ((markup || "") + "").trim(markup);
        var contentsContainer = $("<div></div>").html(markup)[0];
        var childNodes = lists.from(contentsContainer.childNodes);
        var rng = this;
        var reversed = false;
        if (rng.so >= 0) {
          childNodes = childNodes.reverse();
          reversed = true;
        }
        childNodes = childNodes.map(function (childNode) {
          return rng.insertNode(childNode, !dom.isInline(childNode));
        });
        if (reversed) {
          childNodes = childNodes.reverse();
        }
        return childNodes;
      }
      /**
       * returns text in range
       *
       * @return {String}
       */
    }, {
      key: "toString",
      value: function toString() {
        var nativeRng = this.nativeRange();
        return env.isW3CRangeSupport ? nativeRng.toString() : nativeRng.text;
      }
      /**
       * returns range for word before cursor
       *
       * @param {Boolean} [findAfter] - find after cursor, default: false
       * @return {WrappedRange}
       */
    }, {
      key: "getWordRange",
      value: function getWordRange(findAfter) {
        var endPoint = this.getEndPoint();
        if (!dom.isCharPoint(endPoint)) {
          return this;
        }
        var startPoint = dom.prevPointUntil(endPoint, function (point) {
          return !dom.isCharPoint(point);
        });
        if (findAfter) {
          endPoint = dom.nextPointUntil(endPoint, function (point) {
            return !dom.isCharPoint(point);
          });
        }
        return new WrappedRange(startPoint.node, startPoint.offset, endPoint.node, endPoint.offset);
      }
      /**
       * returns range for words before cursor
       *
       * @param {Boolean} [findAfter] - find after cursor, default: false
       * @return {WrappedRange}
       */
    }, {
      key: "getWordsRange",
      value: function getWordsRange(findAfter) {
        var endPoint = this.getEndPoint();
        var isNotTextPoint = function isNotTextPoint(point) {
          return !dom.isCharPoint(point) && !dom.isSpacePoint(point);
        };
        if (isNotTextPoint(endPoint)) {
          return this;
        }
        var startPoint = dom.prevPointUntil(endPoint, isNotTextPoint);
        if (findAfter) {
          endPoint = dom.nextPointUntil(endPoint, isNotTextPoint);
        }
        return new WrappedRange(startPoint.node, startPoint.offset, endPoint.node, endPoint.offset);
      }
      /**
       * returns range for words before cursor that match with a Regex
       *
       * example:
       *  range: 'hi @Peter Pan'
       *  regex: '/@[a-z ]+/i'
       *  return range: '@Peter Pan'
       *
       * @param {RegExp} [regex]
       * @return {WrappedRange|null}
       */
    }, {
      key: "getWordsMatchRange",
      value: function getWordsMatchRange(regex) {
        var endPoint = this.getEndPoint();
        var startPoint = dom.prevPointUntil(endPoint, function (point) {
          if (!dom.isCharPoint(point) && !dom.isSpacePoint(point)) {
            return true;
          }
          var rng2 = new WrappedRange(point.node, point.offset, endPoint.node, endPoint.offset);
          var result2 = regex.exec(rng2.toString());
          return result2 && result2.index === 0;
        });
        var rng = new WrappedRange(startPoint.node, startPoint.offset, endPoint.node, endPoint.offset);
        var text = rng.toString();
        var result = regex.exec(text);
        if (result && result[0].length === text.length) {
          return rng;
        } else {
          return null;
        }
      }
      /**
       * create offsetPath bookmark
       *
       * @param {Node} editable
       */
    }, {
      key: "bookmark",
      value: function bookmark(editable2) {
        return {
          s: {
            path: dom.makeOffsetPath(editable2, this.sc),
            offset: this.so
          },
          e: {
            path: dom.makeOffsetPath(editable2, this.ec),
            offset: this.eo
          }
        };
      }
      /**
       * create offsetPath bookmark base on paragraph
       *
       * @param {Node[]} paras
       */
    }, {
      key: "paraBookmark",
      value: function paraBookmark(paras) {
        return {
          s: {
            path: lists.tail(dom.makeOffsetPath(lists.head(paras), this.sc)),
            offset: this.so
          },
          e: {
            path: lists.tail(dom.makeOffsetPath(lists.last(paras), this.ec)),
            offset: this.eo
          }
        };
      }
      /**
       * getClientRects
       * @return {Rect[]}
       */
    }, {
      key: "getClientRects",
      value: function getClientRects() {
        var nativeRng = this.nativeRange();
        return nativeRng.getClientRects();
      }
    }]);
  }();
  var range = {
    /**
     * create Range Object From arguments or Browser Selection
     *
     * @param {Node} sc - start container
     * @param {Number} so - start offset
     * @param {Node} ec - end container
     * @param {Number} eo - end offset
     * @return {WrappedRange}
     */
    create: function create(sc, so, ec, eo) {
      if (arguments.length === 4) {
        return new WrappedRange(sc, so, ec, eo);
      } else if (arguments.length === 2) {
        ec = sc;
        eo = so;
        return new WrappedRange(sc, so, ec, eo);
      } else {
        var wrappedRange = this.createFromSelection();
        if (!wrappedRange && arguments.length === 1) {
          var bodyElement = arguments[0];
          if (dom.isEditable(bodyElement)) {
            bodyElement = bodyElement.lastChild;
          }
          return this.createFromBodyElement(bodyElement, dom.emptyPara === arguments[0].innerHTML);
        }
        return wrappedRange;
      }
    },
    createFromBodyElement: function createFromBodyElement(bodyElement) {
      var isCollapseToStart = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var wrappedRange = this.createFromNode(bodyElement);
      return wrappedRange.collapse(isCollapseToStart);
    },
    createFromSelection: function createFromSelection() {
      var sc, so, ec, eo;
      if (env.isW3CRangeSupport) {
        var selection = document.getSelection();
        if (!selection || selection.rangeCount === 0) {
          return null;
        } else if (dom.isBody(selection.anchorNode)) {
          return null;
        }
        var nativeRng = selection.getRangeAt(0);
        sc = nativeRng.startContainer;
        so = nativeRng.startOffset;
        ec = nativeRng.endContainer;
        eo = nativeRng.endOffset;
      } else {
        var textRange = document.selection.createRange();
        var textRangeEnd = textRange.duplicate();
        textRangeEnd.collapse(false);
        var textRangeStart = textRange;
        textRangeStart.collapse(true);
        var startPoint = textRangeToPoint(textRangeStart, true);
        var endPoint = textRangeToPoint(textRangeEnd, false);
        if (dom.isText(startPoint.node) && dom.isLeftEdgePoint(startPoint) && dom.isTextNode(endPoint.node) && dom.isRightEdgePoint(endPoint) && endPoint.node.nextSibling === startPoint.node) {
          startPoint = endPoint;
        }
        sc = startPoint.cont;
        so = startPoint.offset;
        ec = endPoint.cont;
        eo = endPoint.offset;
      }
      return new WrappedRange(sc, so, ec, eo);
    },
    /**
     * @method
     *
     * create WrappedRange from node
     *
     * @param {Node} node
     * @return {WrappedRange}
     */
    createFromNode: function createFromNode(node) {
      var sc = node;
      var so = 0;
      var ec = node;
      var eo = dom.nodeLength(ec);
      if (dom.isVoid(sc)) {
        so = dom.listPrev(sc).length - 1;
        sc = sc.parentNode;
      }
      if (dom.isBR(ec)) {
        eo = dom.listPrev(ec).length - 1;
        ec = ec.parentNode;
      } else if (dom.isVoid(ec)) {
        eo = dom.listPrev(ec).length;
        ec = ec.parentNode;
      }
      return this.create(sc, so, ec, eo);
    },
    /**
     * create WrappedRange from node after position
     *
     * @param {Node} node
     * @return {WrappedRange}
     */
    createFromNodeBefore: function createFromNodeBefore(node) {
      return this.createFromNode(node).collapse(true);
    },
    /**
     * create WrappedRange from node after position
     *
     * @param {Node} node
     * @return {WrappedRange}
     */
    createFromNodeAfter: function createFromNodeAfter(node) {
      return this.createFromNode(node).collapse();
    },
    /**
     * @method
     *
     * create WrappedRange from bookmark
     *
     * @param {Node} editable
     * @param {Object} bookmark
     * @return {WrappedRange}
     */
    createFromBookmark: function createFromBookmark(editable2, bookmark) {
      var sc = dom.fromOffsetPath(editable2, bookmark.s.path);
      var so = bookmark.s.offset;
      var ec = dom.fromOffsetPath(editable2, bookmark.e.path);
      var eo = bookmark.e.offset;
      return new WrappedRange(sc, so, ec, eo);
    },
    /**
     * @method
     *
     * create WrappedRange from paraBookmark
     *
     * @param {Object} bookmark
     * @param {Node[]} paras
     * @return {WrappedRange}
     */
    createFromParaBookmark: function createFromParaBookmark(bookmark, paras) {
      var so = bookmark.s.offset;
      var eo = bookmark.e.offset;
      var sc = dom.fromOffsetPath(lists.head(paras), bookmark.s.path);
      var ec = dom.fromOffsetPath(lists.last(paras), bookmark.e.path);
      return new WrappedRange(sc, so, ec, eo);
    }
  };
  var KEY_MAP = {
    "BACKSPACE": 8,
    "TAB": 9,
    "ENTER": 13,
    "ESCAPE": 27,
    "SPACE": 32,
    "DELETE": 46,
    // Arrow
    "LEFT": 37,
    "UP": 38,
    "RIGHT": 39,
    "DOWN": 40,
    // Number: 0-9
    "NUM0": 48,
    "NUM1": 49,
    "NUM2": 50,
    "NUM3": 51,
    "NUM4": 52,
    "NUM5": 53,
    "NUM6": 54,
    "NUM7": 55,
    "NUM8": 56,
    // Alphabet: a-z
    "B": 66,
    "E": 69,
    "I": 73,
    "J": 74,
    "K": 75,
    "L": 76,
    "R": 82,
    "S": 83,
    "U": 85,
    "V": 86,
    "Y": 89,
    "Z": 90,
    "SLASH": 191,
    "LEFTBRACKET": 219,
    "BACKSLASH": 220,
    "RIGHTBRACKET": 221,
    // Navigation
    "HOME": 36,
    "END": 35,
    "PAGEUP": 33,
    "PAGEDOWN": 34
  };
  var key = {
    /**
     * @method isEdit
     *
     * @param {Number} keyCode
     * @return {Boolean}
     */
    isEdit: function isEdit(keyCode) {
      return lists.contains([KEY_MAP.BACKSPACE, KEY_MAP.TAB, KEY_MAP.ENTER, KEY_MAP.SPACE, KEY_MAP.DELETE], keyCode);
    },
    /**
     * @method isRemove
     *
     * @param {Number} keyCode
     * @return {Boolean}
     */
    isRemove: function isRemove(keyCode) {
      return lists.contains([KEY_MAP.BACKSPACE, KEY_MAP.DELETE], keyCode);
    },
    /**
     * @method isMove
     *
     * @param {Number} keyCode
     * @return {Boolean}
     */
    isMove: function isMove(keyCode) {
      return lists.contains([KEY_MAP.LEFT, KEY_MAP.UP, KEY_MAP.RIGHT, KEY_MAP.DOWN], keyCode);
    },
    /**
     * @method isNavigation
     *
     * @param {Number} keyCode
     * @return {Boolean}
     */
    isNavigation: function isNavigation(keyCode) {
      return lists.contains([KEY_MAP.HOME, KEY_MAP.END, KEY_MAP.PAGEUP, KEY_MAP.PAGEDOWN], keyCode);
    },
    /**
     * @property {Object} nameFromCode
     * @property {String} nameFromCode.8 "BACKSPACE"
     */
    nameFromCode: func.invertObject(KEY_MAP),
    code: KEY_MAP
  };
  function readFileAsDataURL(file) {
    return $.Deferred(function (deferred) {
      $.extend(new FileReader(), {
        onload: function onload(event) {
          var dataURL = event.target.result;
          deferred.resolve(dataURL);
        },
        onerror: function onerror(err) {
          deferred.reject(err);
        }
      }).readAsDataURL(file);
    }).promise();
  }
  function createImage(url) {
    return $.Deferred(function (deferred) {
      var $img = $("<img>");
      $img.one("load", function () {
        $img.off("error abort");
        deferred.resolve($img);
      }).one("error abort", function () {
        $img.off("load").detach();
        deferred.reject($img);
      }).css({
        display: "none"
      }).appendTo(document.body).attr("src", url);
    }).promise();
  }
  var History = /*#__PURE__*/function () {
    function History(context) {
      _classCallCheck(this, History);
      this.stack = [];
      this.stackOffset = -1;
      this.context = context;
      this.$editable = context.layoutInfo.editable;
      this.editable = this.$editable[0];
    }
    return _createClass(History, [{
      key: "makeSnapshot",
      value: function makeSnapshot() {
        var rng = range.create(this.editable);
        var emptyBookmark = {
          s: {
            path: [],
            offset: 0
          },
          e: {
            path: [],
            offset: 0
          }
        };
        return {
          contents: this.$editable.html(),
          bookmark: rng && rng.isOnEditable() ? rng.bookmark(this.editable) : emptyBookmark
        };
      }
    }, {
      key: "applySnapshot",
      value: function applySnapshot(snapshot) {
        if (snapshot.contents !== null) {
          this.$editable.html(snapshot.contents);
        }
        if (snapshot.bookmark !== null) {
          range.createFromBookmark(this.editable, snapshot.bookmark).select();
        }
      }
      /**
      * @method rewind
      * Rewinds the history stack back to the first snapshot taken.
      * Leaves the stack intact, so that "Redo" can still be used.
      */
    }, {
      key: "rewind",
      value: function rewind() {
        if (this.$editable.html() !== this.stack[this.stackOffset].contents) {
          this.recordUndo();
        }
        this.stackOffset = 0;
        this.applySnapshot(this.stack[this.stackOffset]);
      }
      /**
      *  @method commit
      *  Resets history stack, but keeps current editor's content.
      */
    }, {
      key: "commit",
      value: function commit() {
        this.stack = [];
        this.stackOffset = -1;
        this.recordUndo();
      }
      /**
      * @method reset
      * Resets the history stack completely; reverting to an empty editor.
      */
    }, {
      key: "reset",
      value: function reset() {
        this.stack = [];
        this.stackOffset = -1;
        this.$editable.html("");
        this.recordUndo();
      }
      /**
       * undo
       */
    }, {
      key: "undo",
      value: function undo() {
        if (this.$editable.html() !== this.stack[this.stackOffset].contents) {
          this.recordUndo();
        }
        if (this.stackOffset > 0) {
          this.stackOffset--;
          this.applySnapshot(this.stack[this.stackOffset]);
        }
      }
      /**
       * redo
       */
    }, {
      key: "redo",
      value: function redo() {
        if (this.stack.length - 1 > this.stackOffset) {
          this.stackOffset++;
          this.applySnapshot(this.stack[this.stackOffset]);
        }
      }
      /**
       * recorded undo
       */
    }, {
      key: "recordUndo",
      value: function recordUndo() {
        this.stackOffset++;
        if (this.stack.length > this.stackOffset) {
          this.stack = this.stack.slice(0, this.stackOffset);
        }
        this.stack.push(this.makeSnapshot());
        if (this.stack.length > this.context.options.historyLimit) {
          this.stack.shift();
          this.stackOffset -= 1;
        }
      }
    }]);
  }();
  var Style = /*#__PURE__*/function () {
    function Style() {
      _classCallCheck(this, Style);
    }
    return _createClass(Style, [{
      key: "jQueryCSS",
      value:
      /**
       * @method jQueryCSS
       *
       * [workaround] for old jQuery
       * passing an array of style properties to .css()
       * will result in an object of property-value pairs.
       * (compability with version < 1.9)
       *
       * @private
       * @param  {jQuery} $obj
       * @param  {Array} propertyNames - An array of one or more CSS properties.
       * @return {Object}
       */
      function jQueryCSS($obj, propertyNames) {
        var result = {};
        $.each(propertyNames, function (idx, propertyName) {
          result[propertyName] = $obj.css(propertyName);
        });
        return result;
      }
      /**
       * returns style object from node
       *
       * @param {jQuery} $node
       * @return {Object}
       */
    }, {
      key: "fromNode",
      value: function fromNode($node) {
        var properties = ["font-family", "font-size", "text-align", "list-style-type", "line-height"];
        var styleInfo = this.jQueryCSS($node, properties) || {};
        var fontSize = $node[0].style.fontSize || styleInfo["font-size"];
        styleInfo["font-size"] = parseInt(fontSize, 10);
        styleInfo["font-size-unit"] = fontSize.match(/[a-z%]+$/);
        return styleInfo;
      }
      /**
       * paragraph level style
       *
       * @param {WrappedRange} rng
       * @param {Object} styleInfo
       */
    }, {
      key: "stylePara",
      value: function stylePara(rng, styleInfo) {
        $.each(rng.nodes(dom.isPara, {
          includeAncestor: true
        }), function (idx, para) {
          $(para).css(styleInfo);
        });
      }
      /**
       * insert and returns styleNodes on range.
       *
       * @param {WrappedRange} rng
       * @param {Object} [options] - options for styleNodes
       * @param {String} [options.nodeName] - default: `SPAN`
       * @param {Boolean} [options.expandClosestSibling] - default: `false`
       * @param {Boolean} [options.onlyPartialContains] - default: `false`
       * @return {Node[]}
       */
    }, {
      key: "styleNodes",
      value: function styleNodes(rng, options) {
        rng = rng.splitText();
        var nodeName = options && options.nodeName || "SPAN";
        var expandClosestSibling = !!(options && options.expandClosestSibling);
        var onlyPartialContains = !!(options && options.onlyPartialContains);
        if (rng.isCollapsed()) {
          return [rng.insertNode(dom.create(nodeName))];
        }
        var pred = dom.makePredByNodeName(nodeName);
        var nodes = rng.nodes(dom.isText, {
          fullyContains: true
        }).map(function (text) {
          return dom.singleChildAncestor(text, pred) || dom.wrap(text, nodeName);
        });
        if (expandClosestSibling) {
          if (onlyPartialContains) {
            var nodesInRange = rng.nodes();
            pred = func.and(pred, function (node) {
              return lists.contains(nodesInRange, node);
            });
          }
          return nodes.map(function (node) {
            var siblings = dom.withClosestSiblings(node, pred);
            var head2 = lists.head(siblings);
            var tails = lists.tail(siblings);
            $.each(tails, function (idx, elem) {
              dom.appendChildNodes(head2, elem.childNodes);
              dom.remove(elem);
            });
            return lists.head(siblings);
          });
        } else {
          return nodes;
        }
      }
      /**
       * get current style on cursor
       *
       * @param {WrappedRange} rng
       * @return {Object} - object contains style properties.
       */
    }, {
      key: "current",
      value: function current(rng) {
        var $cont = $(!dom.isElement(rng.sc) ? rng.sc.parentNode : rng.sc);
        var styleInfo = this.fromNode($cont);
        try {
          styleInfo = $.extend(styleInfo, {
            "font-bold": document.queryCommandState("bold") ? "bold" : "normal",
            "font-italic": document.queryCommandState("italic") ? "italic" : "normal",
            "font-underline": document.queryCommandState("underline") ? "underline" : "normal",
            "font-subscript": document.queryCommandState("subscript") ? "subscript" : "normal",
            "font-superscript": document.queryCommandState("superscript") ? "superscript" : "normal",
            "font-strikethrough": document.queryCommandState("strikethrough") ? "strikethrough" : "normal",
            "font-family": document.queryCommandValue("fontname") || styleInfo["font-family"]
          });
        } catch (e) {}
        if (!rng.isOnList()) {
          styleInfo["list-style"] = "none";
        } else {
          var orderedTypes = ["circle", "disc", "disc-leading-zero", "square"];
          var isUnordered = orderedTypes.indexOf(styleInfo["list-style-type"]) > -1;
          styleInfo["list-style"] = isUnordered ? "unordered" : "ordered";
        }
        var para = dom.ancestor(rng.sc, dom.isPara);
        if (para && para.style["line-height"]) {
          styleInfo["line-height"] = para.style.lineHeight;
        } else {
          var lineHeight = parseInt(styleInfo["line-height"], 10) / parseInt(styleInfo["font-size"], 10);
          styleInfo["line-height"] = lineHeight.toFixed(1);
        }
        styleInfo.anchor = rng.isOnAnchor() && dom.ancestor(rng.sc, dom.isAnchor);
        styleInfo.ancestors = dom.listAncestor(rng.sc, dom.isEditable);
        styleInfo.range = rng;
        return styleInfo;
      }
    }]);
  }();
  var Bullet = /*#__PURE__*/function () {
    function Bullet() {
      _classCallCheck(this, Bullet);
    }
    return _createClass(Bullet, [{
      key: "insertOrderedList",
      value:
      /**
       * toggle ordered list
       */
      function insertOrderedList(editable2) {
        this.toggleList("OL", editable2);
      }
      /**
       * toggle unordered list
       */
    }, {
      key: "insertUnorderedList",
      value: function insertUnorderedList(editable2) {
        this.toggleList("UL", editable2);
      }
      /**
       * indent
       */
    }, {
      key: "indent",
      value: function indent(editable2) {
        var _this5 = this;
        var rng = range.create(editable2).wrapBodyInlineWithPara();
        var paras = rng.nodes(dom.isPara, {
          includeAncestor: true
        });
        var clustereds = lists.clusterBy(paras, func.peq2("parentNode"));
        $.each(clustereds, function (idx, paras2) {
          var head2 = lists.head(paras2);
          if (dom.isLi(head2)) {
            var previousList = _this5.findList(head2.previousSibling);
            if (previousList) {
              paras2.map(function (para) {
                return previousList.appendChild(para);
              });
            } else {
              _this5.wrapList(paras2, head2.parentNode.nodeName);
              paras2.map(function (para) {
                return para.parentNode;
              }).map(function (para) {
                return _this5.appendToPrevious(para);
              });
            }
          } else {
            $.each(paras2, function (idx2, para) {
              $(para).css("marginLeft", function (idx3, val) {
                return (parseInt(val, 10) || 0) + 25;
              });
            });
          }
        });
        rng.select();
      }
      /**
       * outdent
       */
    }, {
      key: "outdent",
      value: function outdent(editable2) {
        var _this6 = this;
        var rng = range.create(editable2).wrapBodyInlineWithPara();
        var paras = rng.nodes(dom.isPara, {
          includeAncestor: true
        });
        var clustereds = lists.clusterBy(paras, func.peq2("parentNode"));
        $.each(clustereds, function (idx, paras2) {
          var head2 = lists.head(paras2);
          if (dom.isLi(head2)) {
            _this6.releaseList([paras2]);
          } else {
            $.each(paras2, function (idx2, para) {
              $(para).css("marginLeft", function (idx3, val) {
                val = parseInt(val, 10) || 0;
                return val > 25 ? val - 25 : "";
              });
            });
          }
        });
        rng.select();
      }
      /**
       * toggle list
       *
       * @param {String} listName - OL or UL
       */
    }, {
      key: "toggleList",
      value: function toggleList(listName, editable2) {
        var _this7 = this;
        var rng = range.create(editable2).wrapBodyInlineWithPara();
        var paras = rng.nodes(dom.isPara, {
          includeAncestor: true
        });
        var bookmark = rng.paraBookmark(paras);
        var clustereds = lists.clusterBy(paras, func.peq2("parentNode"));
        if (lists.find(paras, dom.isPurePara)) {
          var wrappedParas = [];
          $.each(clustereds, function (idx, paras2) {
            wrappedParas = wrappedParas.concat(_this7.wrapList(paras2, listName));
          });
          paras = wrappedParas;
        } else {
          var diffLists = rng.nodes(dom.isList, {
            includeAncestor: true
          }).filter(function (listNode) {
            return !$.nodeName(listNode, listName);
          });
          if (diffLists.length) {
            $.each(diffLists, function (idx, listNode) {
              dom.replace(listNode, listName);
            });
          } else {
            paras = this.releaseList(clustereds, true);
          }
        }
        range.createFromParaBookmark(bookmark, paras).select();
      }
      /**
       * @param {Node[]} paras
       * @param {String} listName
       * @return {Node[]}
       */
    }, {
      key: "wrapList",
      value: function wrapList(paras, listName) {
        var head2 = lists.head(paras);
        var last2 = lists.last(paras);
        var prevList = dom.isList(head2.previousSibling) && head2.previousSibling;
        var nextList = dom.isList(last2.nextSibling) && last2.nextSibling;
        var listNode = prevList || dom.insertAfter(dom.create(listName || "UL"), last2);
        paras = paras.map(function (para) {
          return dom.isPurePara(para) ? dom.replace(para, "LI") : para;
        });
        dom.appendChildNodes(listNode, paras, true);
        if (nextList) {
          dom.appendChildNodes(listNode, lists.from(nextList.childNodes), true);
          dom.remove(nextList);
        }
        return paras;
      }
      /**
       * @method releaseList
       *
       * @param {Array[]} clustereds
       * @param {Boolean} isEscapseToBody
       * @return {Node[]}
       */
    }, {
      key: "releaseList",
      value: function releaseList(clustereds, isEscapseToBody) {
        var _this8 = this;
        var releasedParas = [];
        $.each(clustereds, function (idx, paras) {
          var head2 = lists.head(paras);
          var last2 = lists.last(paras);
          var headList = isEscapseToBody ? dom.lastAncestor(head2, dom.isList) : head2.parentNode;
          var parentItem = headList.parentNode;
          if (headList.parentNode.nodeName === "LI") {
            paras.map(function (para) {
              var newList = _this8.findNextSiblings(para);
              if (parentItem.nextSibling) {
                parentItem.parentNode.insertBefore(para, parentItem.nextSibling);
              } else {
                parentItem.parentNode.appendChild(para);
              }
              if (newList.length) {
                _this8.wrapList(newList, headList.nodeName);
                para.appendChild(newList[0].parentNode);
              }
            });
            if (headList.children.length === 0) {
              parentItem.removeChild(headList);
            }
            if (parentItem.childNodes.length === 0) {
              parentItem.parentNode.removeChild(parentItem);
            }
          } else {
            var lastList = headList.childNodes.length > 1 ? dom.splitTree(headList, {
              node: last2.parentNode,
              offset: dom.position(last2) + 1
            }, {
              isSkipPaddingBlankHTML: true
            }) : null;
            var middleList = dom.splitTree(headList, {
              node: head2.parentNode,
              offset: dom.position(head2)
            }, {
              isSkipPaddingBlankHTML: true
            });
            paras = isEscapseToBody ? dom.listDescendant(middleList, dom.isLi) : lists.from(middleList.childNodes).filter(dom.isLi);
            if (isEscapseToBody || !dom.isList(headList.parentNode)) {
              paras = paras.map(function (para) {
                return dom.replace(para, "P");
              });
            }
            $.each(lists.from(paras).reverse(), function (idx2, para) {
              dom.insertAfter(para, headList);
            });
            var rootLists = lists.compact([headList, middleList, lastList]);
            $.each(rootLists, function (idx2, rootList) {
              var listNodes = [rootList].concat(dom.listDescendant(rootList, dom.isList));
              $.each(listNodes.reverse(), function (idx3, listNode) {
                if (!dom.nodeLength(listNode)) {
                  dom.remove(listNode, true);
                }
              });
            });
          }
          releasedParas = releasedParas.concat(paras);
        });
        return releasedParas;
      }
      /**
       * @method appendToPrevious
       *
       * Appends list to previous list item, if
       * none exist it wraps the list in a new list item.
       *
       * @param {HTMLNode} ListItem
       * @return {HTMLNode}
       */
    }, {
      key: "appendToPrevious",
      value: function appendToPrevious(node) {
        return node.previousSibling ? dom.appendChildNodes(node.previousSibling, [node]) : this.wrapList([node], "LI");
      }
      /**
       * @method findList
       *
       * Finds an existing list in list item
       *
       * @param {HTMLNode} ListItem
       * @return {Array[]}
       */
    }, {
      key: "findList",
      value: function findList(node) {
        return node ? lists.find(node.children, function (child) {
          return ["OL", "UL"].indexOf(child.nodeName) > -1;
        }) : null;
      }
      /**
       * @method findNextSiblings
       *
       * Finds all list item siblings that follow it
       *
       * @param {HTMLNode} ListItem
       * @return {HTMLNode}
       */
    }, {
      key: "findNextSiblings",
      value: function findNextSiblings(node) {
        var siblings = [];
        while (node.nextSibling) {
          siblings.push(node.nextSibling);
          node = node.nextSibling;
        }
        return siblings;
      }
    }]);
  }();
  var Typing = /*#__PURE__*/function () {
    function Typing(context) {
      _classCallCheck(this, Typing);
      this.bullet = new Bullet();
      this.options = context.options;
    }
    /**
     * insert tab
     *
     * @param {WrappedRange} rng
     * @param {Number} tabsize
     */
    return _createClass(Typing, [{
      key: "insertTab",
      value: function insertTab(rng, tabsize) {
        var tab = dom.createText(new Array(tabsize + 1).join(dom.NBSP_CHAR));
        rng = rng.deleteContents();
        rng.insertNode(tab, true);
        rng = range.create(tab, tabsize);
        rng.select();
      }
      /**
       * insert paragraph
       *
       * @param {jQuery} $editable
       * @param {WrappedRange} rng Can be used in unit tests to "mock" the range
       *
       * blockquoteBreakingLevel
       *   0 - No break, the new paragraph remains inside the quote
       *   1 - Break the first blockquote in the ancestors list
       *   2 - Break all blockquotes, so that the new paragraph is not quoted (this is the default)
       */
    }, {
      key: "insertParagraph",
      value: function insertParagraph(editable2, rng) {
        rng = rng || range.create(editable2);
        rng = rng.deleteContents();
        rng = rng.wrapBodyInlineWithPara();
        var splitRoot = dom.ancestor(rng.sc, dom.isPara);
        var nextPara;
        if (splitRoot) {
          if (dom.isLi(splitRoot) && (dom.isEmpty(splitRoot) || dom.deepestChildIsEmpty(splitRoot))) {
            this.bullet.toggleList(splitRoot.parentNode.nodeName);
            return;
          } else {
            var blockquote = null;
            if (this.options.blockquoteBreakingLevel === 1) {
              blockquote = dom.ancestor(splitRoot, dom.isBlockquote);
            } else if (this.options.blockquoteBreakingLevel === 2) {
              blockquote = dom.lastAncestor(splitRoot, dom.isBlockquote);
            }
            if (blockquote) {
              nextPara = $(dom.emptyPara)[0];
              if (dom.isRightEdgePoint(rng.getStartPoint()) && dom.isBR(rng.sc.nextSibling)) {
                $(rng.sc.nextSibling).remove();
              }
              var split = dom.splitTree(blockquote, rng.getStartPoint(), {
                isDiscardEmptySplits: true
              });
              if (split) {
                split.parentNode.insertBefore(nextPara, split);
              } else {
                dom.insertAfter(nextPara, blockquote);
              }
            } else {
              nextPara = dom.splitTree(splitRoot, rng.getStartPoint());
              var emptyAnchors = dom.listDescendant(splitRoot, dom.isEmptyAnchor);
              emptyAnchors = emptyAnchors.concat(dom.listDescendant(nextPara, dom.isEmptyAnchor));
              $.each(emptyAnchors, function (idx, anchor) {
                dom.remove(anchor);
              });
              if ((dom.isHeading(nextPara) || dom.isPre(nextPara) || dom.isCustomStyleTag(nextPara)) && dom.isEmpty(nextPara)) {
                nextPara = dom.replace(nextPara, "p");
              }
            }
          }
        } else {
          var next2 = rng.sc.childNodes[rng.so];
          nextPara = $(dom.emptyPara)[0];
          if (next2) {
            rng.sc.insertBefore(nextPara, next2);
          } else {
            rng.sc.appendChild(nextPara);
          }
        }
        range.create(nextPara, 0).normalize().select().scrollIntoView(editable2);
      }
    }]);
  }();
  var _TableResultAction = function TableResultAction(startPoint, where, action, domTable) {
    var _startPoint = {
      "colPos": 0,
      "rowPos": 0
    };
    var _virtualTable = [];
    var _actionCellList = [];
    function setStartPoint() {
      if (!startPoint || !startPoint.tagName || startPoint.tagName.toLowerCase() !== "td" && startPoint.tagName.toLowerCase() !== "th") {
        return;
      }
      _startPoint.colPos = startPoint.cellIndex;
      if (!startPoint.parentElement || !startPoint.parentElement.tagName || startPoint.parentElement.tagName.toLowerCase() !== "tr") {
        return;
      }
      _startPoint.rowPos = startPoint.parentElement.rowIndex;
    }
    function setVirtualTablePosition(rowIndex, cellIndex, baseRow, baseCell, isRowSpan, isColSpan, isVirtualCell) {
      var objPosition = {
        "baseRow": baseRow,
        "baseCell": baseCell,
        "isRowSpan": isRowSpan,
        "isColSpan": isColSpan,
        "isVirtual": isVirtualCell
      };
      if (!_virtualTable[rowIndex]) {
        _virtualTable[rowIndex] = [];
      }
      _virtualTable[rowIndex][cellIndex] = objPosition;
    }
    function getActionCell(virtualTableCellObj, resultAction, virtualRowPosition, virtualColPosition) {
      return {
        "baseCell": virtualTableCellObj.baseCell,
        "action": resultAction,
        "virtualTable": {
          "rowIndex": virtualRowPosition,
          "cellIndex": virtualColPosition
        }
      };
    }
    function recoverCellIndex(rowIndex, cellIndex) {
      if (!_virtualTable[rowIndex]) {
        return cellIndex;
      }
      if (!_virtualTable[rowIndex][cellIndex]) {
        return cellIndex;
      }
      var newCellIndex = cellIndex;
      while (_virtualTable[rowIndex][newCellIndex]) {
        newCellIndex++;
        if (!_virtualTable[rowIndex][newCellIndex]) {
          return newCellIndex;
        }
      }
    }
    function addCellInfoToVirtual(row, cell) {
      var cellIndex = recoverCellIndex(row.rowIndex, cell.cellIndex);
      var cellHasColspan = cell.colSpan > 1;
      var cellHasRowspan = cell.rowSpan > 1;
      var isThisSelectedCell = row.rowIndex === _startPoint.rowPos && cell.cellIndex === _startPoint.colPos;
      setVirtualTablePosition(row.rowIndex, cellIndex, row, cell, cellHasRowspan, cellHasColspan, false);
      var rowspanNumber = cell.attributes.rowSpan ? parseInt(cell.attributes.rowSpan.value, 10) : 0;
      if (rowspanNumber > 1) {
        for (var rp = 1; rp < rowspanNumber; rp++) {
          var rowspanIndex = row.rowIndex + rp;
          adjustStartPoint(rowspanIndex, cellIndex, cell, isThisSelectedCell);
          setVirtualTablePosition(rowspanIndex, cellIndex, row, cell, true, cellHasColspan, true);
        }
      }
      var colspanNumber = cell.attributes.colSpan ? parseInt(cell.attributes.colSpan.value, 10) : 0;
      if (colspanNumber > 1) {
        for (var cp = 1; cp < colspanNumber; cp++) {
          var cellspanIndex = recoverCellIndex(row.rowIndex, cellIndex + cp);
          adjustStartPoint(row.rowIndex, cellspanIndex, cell, isThisSelectedCell);
          setVirtualTablePosition(row.rowIndex, cellspanIndex, row, cell, cellHasRowspan, true, true);
        }
      }
    }
    function adjustStartPoint(rowIndex, cellIndex, cell, isSelectedCell) {
      if (rowIndex === _startPoint.rowPos && _startPoint.colPos >= cell.cellIndex && cell.cellIndex <= cellIndex && !isSelectedCell) {
        _startPoint.colPos++;
      }
    }
    function createVirtualTable() {
      var rows = domTable.rows;
      for (var rowIndex = 0; rowIndex < rows.length; rowIndex++) {
        var cells = rows[rowIndex].cells;
        for (var cellIndex = 0; cellIndex < cells.length; cellIndex++) {
          addCellInfoToVirtual(rows[rowIndex], cells[cellIndex]);
        }
      }
    }
    function getDeleteResultActionToCell(cell) {
      switch (where) {
        case _TableResultAction.where.Column:
          if (cell.isColSpan) {
            return _TableResultAction.resultAction.SubtractSpanCount;
          }
          break;
        case _TableResultAction.where.Row:
          if (!cell.isVirtual && cell.isRowSpan) {
            return _TableResultAction.resultAction.AddCell;
          } else if (cell.isRowSpan) {
            return _TableResultAction.resultAction.SubtractSpanCount;
          }
          break;
      }
      return _TableResultAction.resultAction.RemoveCell;
    }
    function getAddResultActionToCell(cell) {
      switch (where) {
        case _TableResultAction.where.Column:
          if (cell.isColSpan) {
            return _TableResultAction.resultAction.SumSpanCount;
          } else if (cell.isRowSpan && cell.isVirtual) {
            return _TableResultAction.resultAction.Ignore;
          }
          break;
        case _TableResultAction.where.Row:
          if (cell.isRowSpan) {
            return _TableResultAction.resultAction.SumSpanCount;
          } else if (cell.isColSpan && cell.isVirtual) {
            return _TableResultAction.resultAction.Ignore;
          }
          break;
      }
      return _TableResultAction.resultAction.AddCell;
    }
    function init() {
      setStartPoint();
      createVirtualTable();
    }
    this.getActionList = function () {
      var fixedRow = where === _TableResultAction.where.Row ? _startPoint.rowPos : -1;
      var fixedCol = where === _TableResultAction.where.Column ? _startPoint.colPos : -1;
      var actualPosition = 0;
      var canContinue = true;
      while (canContinue) {
        var rowPosition = fixedRow >= 0 ? fixedRow : actualPosition;
        var colPosition = fixedCol >= 0 ? fixedCol : actualPosition;
        var row = _virtualTable[rowPosition];
        if (!row) {
          canContinue = false;
          return _actionCellList;
        }
        var cell = row[colPosition];
        if (!cell) {
          canContinue = false;
          return _actionCellList;
        }
        var resultAction = _TableResultAction.resultAction.Ignore;
        switch (action) {
          case _TableResultAction.requestAction.Add:
            resultAction = getAddResultActionToCell(cell);
            break;
          case _TableResultAction.requestAction.Delete:
            resultAction = getDeleteResultActionToCell(cell);
            break;
        }
        _actionCellList.push(getActionCell(cell, resultAction, rowPosition, colPosition));
        actualPosition++;
      }
      return _actionCellList;
    };
    init();
  };
  _TableResultAction.where = {
    "Row": 0,
    "Column": 1
  };
  _TableResultAction.requestAction = {
    "Add": 0,
    "Delete": 1
  };
  _TableResultAction.resultAction = {
    "Ignore": 0,
    "SubtractSpanCount": 1,
    "RemoveCell": 2,
    "AddCell": 3,
    "SumSpanCount": 4
  };
  var Table = /*#__PURE__*/function () {
    function Table() {
      _classCallCheck(this, Table);
    }
    return _createClass(Table, [{
      key: "tab",
      value:
      /**
       * handle tab key
       *
       * @param {WrappedRange} rng
       * @param {Boolean} isShift
       */
      function tab(rng, isShift) {
        var cell = dom.ancestor(rng.commonAncestor(), dom.isCell);
        var table = dom.ancestor(cell, dom.isTable);
        var cells = dom.listDescendant(table, dom.isCell);
        var nextCell = lists[isShift ? "prev" : "next"](cells, cell);
        if (nextCell) {
          range.create(nextCell, 0).select();
        }
      }
      /**
       * Add a new row
       *
       * @param {WrappedRange} rng
       * @param {String} position (top/bottom)
       * @return {Node}
       */
    }, {
      key: "addRow",
      value: function addRow(rng, position2) {
        var cell = dom.ancestor(rng.commonAncestor(), dom.isCell);
        var currentTr = $(cell).closest("tr");
        var trAttributes = this.recoverAttributes(currentTr);
        var html2 = $("<tr" + trAttributes + "></tr>");
        var vTable = new _TableResultAction(cell, _TableResultAction.where.Row, _TableResultAction.requestAction.Add, $(currentTr).closest("table")[0]);
        var actions = vTable.getActionList();
        for (var idCell = 0; idCell < actions.length; idCell++) {
          var currentCell = actions[idCell];
          var tdAttributes = this.recoverAttributes(currentCell.baseCell);
          switch (currentCell.action) {
            case _TableResultAction.resultAction.AddCell:
              html2.append("<td" + tdAttributes + ">" + dom.blank + "</td>");
              break;
            case _TableResultAction.resultAction.SumSpanCount:
              {
                if (position2 === "top") {
                  var baseCellTr = currentCell.baseCell.parent;
                  var isTopFromRowSpan = (!baseCellTr ? 0 : currentCell.baseCell.closest("tr").rowIndex) <= currentTr[0].rowIndex;
                  if (isTopFromRowSpan) {
                    var newTd = $("<div></div>").append($("<td" + tdAttributes + ">" + dom.blank + "</td>").removeAttr("rowspan")).html();
                    html2.append(newTd);
                    break;
                  }
                }
                var rowspanNumber = parseInt(currentCell.baseCell.rowSpan, 10);
                rowspanNumber++;
                currentCell.baseCell.setAttribute("rowSpan", rowspanNumber);
              }
              break;
          }
        }
        if (position2 === "top") {
          currentTr.before(html2);
        } else {
          var cellHasRowspan = cell.rowSpan > 1;
          if (cellHasRowspan) {
            var lastTrIndex = currentTr[0].rowIndex + (cell.rowSpan - 2);
            $($(currentTr).parent().find("tr")[lastTrIndex]).after($(html2));
            return;
          }
          currentTr.after(html2);
        }
      }
      /**
       * Add a new col
       *
       * @param {WrappedRange} rng
       * @param {String} position (left/right)
       * @return {Node}
       */
    }, {
      key: "addCol",
      value: function addCol(rng, position2) {
        var cell = dom.ancestor(rng.commonAncestor(), dom.isCell);
        var row = $(cell).closest("tr");
        var rowsGroup = $(row).siblings();
        rowsGroup.push(row);
        var vTable = new _TableResultAction(cell, _TableResultAction.where.Column, _TableResultAction.requestAction.Add, $(row).closest("table")[0]);
        var actions = vTable.getActionList();
        for (var actionIndex = 0; actionIndex < actions.length; actionIndex++) {
          var currentCell = actions[actionIndex];
          var tdAttributes = this.recoverAttributes(currentCell.baseCell);
          switch (currentCell.action) {
            case _TableResultAction.resultAction.AddCell:
              if (position2 === "right") {
                $(currentCell.baseCell).after("<td" + tdAttributes + ">" + dom.blank + "</td>");
              } else {
                $(currentCell.baseCell).before("<td" + tdAttributes + ">" + dom.blank + "</td>");
              }
              break;
            case _TableResultAction.resultAction.SumSpanCount:
              if (position2 === "right") {
                var colspanNumber = parseInt(currentCell.baseCell.colSpan, 10);
                colspanNumber++;
                currentCell.baseCell.setAttribute("colSpan", colspanNumber);
              } else {
                $(currentCell.baseCell).before("<td" + tdAttributes + ">" + dom.blank + "</td>");
              }
              break;
          }
        }
      }
      /*
      * Copy attributes from element.
      *
      * @param {object} Element to recover attributes.
      * @return {string} Copied string elements.
      */
    }, {
      key: "recoverAttributes",
      value: function recoverAttributes(el) {
        var resultStr = "";
        if (!el) {
          return resultStr;
        }
        var attrList = el.attributes || [];
        for (var i = 0; i < attrList.length; i++) {
          if (attrList[i].name.toLowerCase() === "id") {
            continue;
          }
          if (attrList[i].specified) {
            resultStr += " " + attrList[i].name + "='" + attrList[i].value + "'";
          }
        }
        return resultStr;
      }
      /**
       * Delete current row
       *
       * @param {WrappedRange} rng
       * @return {Node}
       */
    }, {
      key: "deleteRow",
      value: function deleteRow(rng) {
        var cell = dom.ancestor(rng.commonAncestor(), dom.isCell);
        var row = $(cell).closest("tr");
        var cellPos = row.children("td, th").index($(cell));
        var rowPos = row[0].rowIndex;
        var vTable = new _TableResultAction(cell, _TableResultAction.where.Row, _TableResultAction.requestAction.Delete, $(row).closest("table")[0]);
        var actions = vTable.getActionList();
        for (var actionIndex = 0; actionIndex < actions.length; actionIndex++) {
          if (!actions[actionIndex]) {
            continue;
          }
          var baseCell = actions[actionIndex].baseCell;
          var virtualPosition = actions[actionIndex].virtualTable;
          var hasRowspan = baseCell.rowSpan && baseCell.rowSpan > 1;
          var rowspanNumber = hasRowspan ? parseInt(baseCell.rowSpan, 10) : 0;
          switch (actions[actionIndex].action) {
            case _TableResultAction.resultAction.Ignore:
              continue;
            case _TableResultAction.resultAction.AddCell:
              {
                var nextRow = row.next("tr")[0];
                if (!nextRow) {
                  continue;
                }
                var cloneRow = row[0].cells[cellPos];
                if (hasRowspan) {
                  if (rowspanNumber > 2) {
                    rowspanNumber--;
                    nextRow.insertBefore(cloneRow, nextRow.cells[cellPos]);
                    nextRow.cells[cellPos].setAttribute("rowSpan", rowspanNumber);
                    nextRow.cells[cellPos].innerHTML = "";
                  } else if (rowspanNumber === 2) {
                    nextRow.insertBefore(cloneRow, nextRow.cells[cellPos]);
                    nextRow.cells[cellPos].removeAttribute("rowSpan");
                    nextRow.cells[cellPos].innerHTML = "";
                  }
                }
              }
              continue;
            case _TableResultAction.resultAction.SubtractSpanCount:
              if (hasRowspan) {
                if (rowspanNumber > 2) {
                  rowspanNumber--;
                  baseCell.setAttribute("rowSpan", rowspanNumber);
                  if (virtualPosition.rowIndex !== rowPos && baseCell.cellIndex === cellPos) {
                    baseCell.innerHTML = "";
                  }
                } else if (rowspanNumber === 2) {
                  baseCell.removeAttribute("rowSpan");
                  if (virtualPosition.rowIndex !== rowPos && baseCell.cellIndex === cellPos) {
                    baseCell.innerHTML = "";
                  }
                }
              }
              continue;
            case _TableResultAction.resultAction.RemoveCell:
              continue;
          }
        }
        row.remove();
      }
      /**
       * Delete current col
       *
       * @param {WrappedRange} rng
       * @return {Node}
       */
    }, {
      key: "deleteCol",
      value: function deleteCol(rng) {
        var cell = dom.ancestor(rng.commonAncestor(), dom.isCell);
        var row = $(cell).closest("tr");
        var cellPos = row.children("td, th").index($(cell));
        var vTable = new _TableResultAction(cell, _TableResultAction.where.Column, _TableResultAction.requestAction.Delete, $(row).closest("table")[0]);
        var actions = vTable.getActionList();
        for (var actionIndex = 0; actionIndex < actions.length; actionIndex++) {
          if (!actions[actionIndex]) {
            continue;
          }
          switch (actions[actionIndex].action) {
            case _TableResultAction.resultAction.Ignore:
              continue;
            case _TableResultAction.resultAction.SubtractSpanCount:
              {
                var baseCell = actions[actionIndex].baseCell;
                var hasColspan = baseCell.colSpan && baseCell.colSpan > 1;
                if (hasColspan) {
                  var colspanNumber = baseCell.colSpan ? parseInt(baseCell.colSpan, 10) : 0;
                  if (colspanNumber > 2) {
                    colspanNumber--;
                    baseCell.setAttribute("colSpan", colspanNumber);
                    if (baseCell.cellIndex === cellPos) {
                      baseCell.innerHTML = "";
                    }
                  } else if (colspanNumber === 2) {
                    baseCell.removeAttribute("colSpan");
                    if (baseCell.cellIndex === cellPos) {
                      baseCell.innerHTML = "";
                    }
                  }
                }
              }
              continue;
            case _TableResultAction.resultAction.RemoveCell:
              dom.remove(actions[actionIndex].baseCell, true);
              continue;
          }
        }
      }
      /**
       * create empty table element
       *
       * @param {Number} rowCount
       * @param {Number} colCount
       * @return {Node}
       */
    }, {
      key: "createTable",
      value: function createTable(colCount, rowCount, options) {
        var tds = [];
        var tdHTML;
        for (var idxCol = 0; idxCol < colCount; idxCol++) {
          tds.push("<td>" + dom.blank + "</td>");
        }
        tdHTML = tds.join("");
        var trs = [];
        var trHTML;
        for (var idxRow = 0; idxRow < rowCount; idxRow++) {
          trs.push("<tr>" + tdHTML + "</tr>");
        }
        trHTML = trs.join("");
        var $table = $("<table>" + trHTML + "</table>");
        if (options && options.tableClassName) {
          $table.addClass(options.tableClassName);
        }
        return $table[0];
      }
      /**
       * Delete current table
       *
       * @param {WrappedRange} rng
       * @return {Node}
       */
    }, {
      key: "deleteTable",
      value: function deleteTable(rng) {
        var cell = dom.ancestor(rng.commonAncestor(), dom.isCell);
        $(cell).closest("table").remove();
      }
    }]);
  }();
  var KEY_BOGUS = "bogus";
  var MAILTO_PATTERN$1 = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  var TEL_PATTERN$1 = /^(\+?\d{1,3}[\s-]?)?(\d{1,4})[\s-]?(\d{1,4})[\s-]?(\d{1,4})$/;
  var URL_SCHEME_PATTERN$1 = /^([A-Za-z][A-Za-z0-9+-.]*\:|#|\/)/;
  var Editor = /*#__PURE__*/function () {
    function Editor(context) {
      var _this9 = this;
      _classCallCheck(this, Editor);
      this.context = context;
      this.$note = context.layoutInfo.note;
      this.$editor = context.layoutInfo.editor;
      this.$editable = context.layoutInfo.editable;
      this.options = context.options;
      this.lang = this.options.langInfo;
      this.editable = this.$editable[0];
      this.lastRange = null;
      this.snapshot = null;
      this.style = new Style();
      this.table = new Table();
      this.typing = new Typing(context);
      this.bullet = new Bullet();
      this.history = new History(context);
      this.context.memo("help.escape", this.lang.help.escape);
      this.context.memo("help.undo", this.lang.help.undo);
      this.context.memo("help.redo", this.lang.help.redo);
      this.context.memo("help.tab", this.lang.help.tab);
      this.context.memo("help.untab", this.lang.help.untab);
      this.context.memo("help.insertParagraph", this.lang.help.insertParagraph);
      this.context.memo("help.insertOrderedList", this.lang.help.insertOrderedList);
      this.context.memo("help.insertUnorderedList", this.lang.help.insertUnorderedList);
      this.context.memo("help.indent", this.lang.help.indent);
      this.context.memo("help.outdent", this.lang.help.outdent);
      this.context.memo("help.formatPara", this.lang.help.formatPara);
      this.context.memo("help.insertHorizontalRule", this.lang.help.insertHorizontalRule);
      this.context.memo("help.fontName", this.lang.help.fontName);
      var commands = ["bold", "italic", "underline", "strikethrough", "superscript", "subscript", "justifyLeft", "justifyCenter", "justifyRight", "justifyFull", "formatBlock", "removeFormat", "backColor"];
      for (var idx = 0, len = commands.length; idx < len; idx++) {
        this[commands[idx]] = /* @__PURE__ */function (sCmd) {
          return function (value2) {
            _this9.beforeCommand();
            document.execCommand(sCmd, false, value2);
            _this9.afterCommand(true);
          };
        }(commands[idx]);
        this.context.memo("help." + commands[idx], this.lang.help[commands[idx]]);
      }
      this.fontName = this.wrapCommand(function (value2) {
        return _this9.fontStyling("font-family", env.validFontName(value2));
      });
      this.fontSize = this.wrapCommand(function (value2) {
        var unit = _this9.currentStyle()["font-size-unit"];
        return _this9.fontStyling("font-size", value2 + unit);
      });
      this.fontSizeUnit = this.wrapCommand(function (value2) {
        var size = _this9.currentStyle()["font-size"];
        return _this9.fontStyling("font-size", size + value2);
      });
      for (var _idx = 1; _idx <= 6; _idx++) {
        this["formatH" + _idx] = /* @__PURE__ */function (idx2) {
          return function () {
            _this9.formatBlock("H" + idx2);
          };
        }(_idx);
        this.context.memo("help.formatH" + _idx, this.lang.help["formatH" + _idx]);
      }
      this.insertParagraph = this.wrapCommand(function () {
        _this9.typing.insertParagraph(_this9.editable);
      });
      this.insertOrderedList = this.wrapCommand(function () {
        _this9.bullet.insertOrderedList(_this9.editable);
      });
      this.insertUnorderedList = this.wrapCommand(function () {
        _this9.bullet.insertUnorderedList(_this9.editable);
      });
      this.indent = this.wrapCommand(function () {
        _this9.bullet.indent(_this9.editable);
      });
      this.outdent = this.wrapCommand(function () {
        _this9.bullet.outdent(_this9.editable);
      });
      this.insertNode = this.wrapCommand(function (node) {
        if (_this9.isLimited($(node).text().length)) {
          return;
        }
        var rng = _this9.getLastRange();
        rng.insertNode(node);
        _this9.setLastRange(range.createFromNodeAfter(node).select());
      });
      this.insertText = this.wrapCommand(function (text) {
        if (_this9.isLimited(text.length)) {
          return;
        }
        var rng = _this9.getLastRange();
        var textNode = rng.insertNode(dom.createText(text));
        _this9.setLastRange(range.create(textNode, dom.nodeLength(textNode)).select());
      });
      this.pasteHTML = this.wrapCommand(function (markup) {
        if (_this9.isLimited(markup.length)) {
          return;
        }
        markup = _this9.context.invoke("codeview.purify", markup);
        var contents = _this9.getLastRange().pasteHTML(markup);
        _this9.setLastRange(range.createFromNodeAfter(lists.last(contents)).select());
      });
      this.formatBlock = this.wrapCommand(function (tagName, $target) {
        var onApplyCustomStyle = _this9.options.callbacks.onApplyCustomStyle;
        if (onApplyCustomStyle) {
          onApplyCustomStyle.call(_this9, $target, _this9.context, _this9.onFormatBlock);
        } else {
          _this9.onFormatBlock(tagName, $target);
        }
      });
      this.insertHorizontalRule = this.wrapCommand(function () {
        var hrNode = _this9.getLastRange().insertNode(dom.create("HR"));
        if (hrNode.nextSibling) {
          _this9.setLastRange(range.create(hrNode.nextSibling, 0).normalize().select());
        }
      });
      this.lineHeight = this.wrapCommand(function (value2) {
        _this9.style.stylePara(_this9.getLastRange(), {
          lineHeight: value2
        });
      });
      this.createLink = this.wrapCommand(function (linkInfo) {
        var rel = [];
        var linkUrl = linkInfo.url;
        var linkText = linkInfo.text;
        var isNewWindow = linkInfo.isNewWindow;
        var addNoReferrer = _this9.options.linkAddNoReferrer;
        var addNoOpener = _this9.options.linkAddNoOpener;
        var rng = linkInfo.range || _this9.getLastRange();
        var additionalTextLength = linkText.length - rng.toString().length;
        if (additionalTextLength > 0 && _this9.isLimited(additionalTextLength)) {
          return;
        }
        var isTextChanged = rng.toString() !== linkText;
        if (typeof linkUrl === "string") {
          linkUrl = linkUrl.trim();
        }
        if (_this9.options.onCreateLink) {
          linkUrl = _this9.options.onCreateLink(linkUrl);
        } else {
          linkUrl = _this9.checkLinkUrl(linkUrl);
        }
        var anchors = [];
        if (isTextChanged) {
          rng = rng.deleteContents();
          var anchor = rng.insertNode($("<A></A>").text(linkText)[0]);
          anchors.push(anchor);
        } else {
          anchors = _this9.style.styleNodes(rng, {
            nodeName: "A",
            expandClosestSibling: true,
            onlyPartialContains: true
          });
        }
        $.each(anchors, function (idx, anchor) {
          $(anchor).attr("href", linkUrl);
          if (isNewWindow) {
            $(anchor).attr("target", "_blank");
            if (addNoReferrer) {
              rel.push("noreferrer");
            }
            if (addNoOpener) {
              rel.push("noopener");
            }
            if (rel.length) {
              $(anchor).attr("rel", rel.join(" "));
            }
          } else {
            $(anchor).removeAttr("target");
          }
        });
        _this9.setLastRange(_this9.createRangeFromList(anchors).select());
      });
      this.color = this.wrapCommand(function (colorInfo) {
        var foreColor = colorInfo.foreColor;
        var backColor = colorInfo.backColor;
        if (foreColor) {
          document.execCommand("foreColor", false, foreColor);
        }
        if (backColor) {
          document.execCommand("backColor", false, backColor);
        }
      });
      this.foreColor = this.wrapCommand(function (colorInfo) {
        document.execCommand("foreColor", false, colorInfo);
      });
      this.insertTable = this.wrapCommand(function (dim) {
        var dimension = dim.split("x");
        var rng = _this9.getLastRange().deleteContents();
        rng.insertNode(_this9.table.createTable(dimension[0], dimension[1], _this9.options));
      });
      this.removeMedia = this.wrapCommand(function () {
        var $target = $(_this9.restoreTarget()).parent();
        if ($target.closest("figure").length) {
          $target.closest("figure").remove();
        } else {
          $target = $(_this9.restoreTarget()).detach();
        }
        _this9.setLastRange(range.createFromSelection($target).select());
        _this9.context.triggerEvent("media.delete", $target, _this9.$editable);
      });
      this.floatMe = this.wrapCommand(function (value2) {
        var $target = $(_this9.restoreTarget());
        $target.toggleClass("note-float-left", value2 === "left");
        $target.toggleClass("note-float-right", value2 === "right");
        $target.css("float", value2 === "none" ? "" : value2);
      });
      this.resize = this.wrapCommand(function (value2) {
        var $target = $(_this9.restoreTarget());
        value2 = parseFloat(value2);
        if (value2 === 0) {
          $target.css("width", "");
        } else {
          $target.css({
            width: value2 * 100 + "%",
            height: ""
          });
        }
      });
    }
    return _createClass(Editor, [{
      key: "initialize",
      value: function initialize() {
        var _this10 = this;
        this.$editable.on("keydown", function (event) {
          if (event.keyCode === key.code.ENTER) {
            _this10.context.triggerEvent("enter", event);
          }
          _this10.context.triggerEvent("keydown", event);
          _this10.snapshot = _this10.history.makeSnapshot();
          _this10.hasKeyShortCut = false;
          if (!event.isDefaultPrevented()) {
            if (_this10.options.shortcuts) {
              _this10.hasKeyShortCut = _this10.handleKeyMap(event);
            } else {
              _this10.preventDefaultEditableShortCuts(event);
            }
          }
          if (_this10.isLimited(1, event)) {
            var lastRange = _this10.getLastRange();
            if (lastRange.eo - lastRange.so === 0) {
              return false;
            }
          }
          _this10.setLastRange();
          if (_this10.options.recordEveryKeystroke) {
            if (_this10.hasKeyShortCut === false) {
              _this10.history.recordUndo();
            }
          }
        }).on("keyup", function (event) {
          _this10.setLastRange();
          _this10.context.triggerEvent("keyup", event);
        }).on("focus", function (event) {
          _this10.setLastRange();
          _this10.context.triggerEvent("focus", event);
        }).on("blur", function (event) {
          _this10.context.triggerEvent("blur", event);
        }).on("mousedown", function (event) {
          _this10.context.triggerEvent("mousedown", event);
        }).on("mouseup", function (event) {
          _this10.setLastRange();
          _this10.history.recordUndo();
          _this10.context.triggerEvent("mouseup", event);
        }).on("scroll", function (event) {
          _this10.context.triggerEvent("scroll", event);
        }).on("paste", function (event) {
          _this10.setLastRange();
          _this10.context.triggerEvent("paste", event);
        }).on("copy", function (event) {
          _this10.context.triggerEvent("copy", event);
        }).on("input", function () {
          if (_this10.isLimited(0) && _this10.snapshot) {
            _this10.history.applySnapshot(_this10.snapshot);
          }
        });
        this.$editable.attr("spellcheck", this.options.spellCheck);
        this.$editable.attr("autocorrect", this.options.spellCheck);
        if (this.options.disableGrammar) {
          this.$editable.attr("data-gramm", false);
        }
        this.$editable.html(dom.html(this.$note) || dom.emptyPara);
        this.$editable.on(env.inputEventName, func.debounce(function () {
          _this10.context.triggerEvent("change", _this10.$editable.html(), _this10.$editable);
        }, 10));
        this.$editable.on("focusin", function (event) {
          _this10.context.triggerEvent("focusin", event);
        }).on("focusout", function (event) {
          _this10.context.triggerEvent("focusout", event);
        });
        if (this.options.airMode) {
          if (this.options.overrideContextMenu) {
            this.$editor.on("contextmenu", function (event) {
              _this10.context.triggerEvent("contextmenu", event);
              return false;
            });
          }
        } else {
          if (this.options.width) {
            this.$editor.outerWidth(this.options.width);
          }
          if (this.options.height) {
            this.$editable.outerHeight(this.options.height);
          }
          if (this.options.maxHeight) {
            this.$editable.css("max-height", this.options.maxHeight);
          }
          if (this.options.minHeight) {
            this.$editable.css("min-height", this.options.minHeight);
          }
        }
        this.history.recordUndo();
        this.setLastRange();
      }
    }, {
      key: "destroy",
      value: function destroy() {
        this.$editable.off();
      }
    }, {
      key: "handleKeyMap",
      value: function handleKeyMap(event) {
        var keyMap = this.options.keyMap[env.isMac ? "mac" : "pc"];
        var keys = [];
        if (event.metaKey) {
          keys.push("CMD");
        }
        if (event.ctrlKey && !event.altKey) {
          keys.push("CTRL");
        }
        if (event.shiftKey) {
          keys.push("SHIFT");
        }
        var keyName = key.nameFromCode[event.keyCode];
        if (keyName) {
          keys.push(keyName);
        }
        var eventName = keyMap[keys.join("+")];
        if (keyName === "TAB" && !this.options.tabDisable) {
          this.afterCommand();
        } else if (eventName) {
          if (this.context.invoke(eventName) !== false) {
            event.preventDefault();
            return true;
          }
        } else if (key.isEdit(event.keyCode)) {
          if (key.isRemove(event.keyCode)) {
            this.context.invoke("removed");
          }
          this.afterCommand();
        }
        return false;
      }
    }, {
      key: "preventDefaultEditableShortCuts",
      value: function preventDefaultEditableShortCuts(event) {
        if ((event.ctrlKey || event.metaKey) && lists.contains([66, 73, 85], event.keyCode)) {
          event.preventDefault();
        }
      }
    }, {
      key: "isLimited",
      value: function isLimited(pad, event) {
        pad = pad || 0;
        if (typeof event !== "undefined") {
          if (key.isMove(event.keyCode) || key.isNavigation(event.keyCode) || event.ctrlKey || event.metaKey || lists.contains([key.code.BACKSPACE, key.code.DELETE], event.keyCode)) {
            return false;
          }
        }
        if (this.options.maxTextLength > 0) {
          if (this.$editable.text().length + pad > this.options.maxTextLength) {
            return true;
          }
        }
        return false;
      }
    }, {
      key: "checkLinkUrl",
      value: function checkLinkUrl(linkUrl) {
        if (MAILTO_PATTERN$1.test(linkUrl)) {
          return "mailto://" + linkUrl;
        } else if (TEL_PATTERN$1.test(linkUrl)) {
          return "tel://" + linkUrl;
        } else if (!URL_SCHEME_PATTERN$1.test(linkUrl)) {
          return "http://" + linkUrl;
        }
        return linkUrl;
      }
      /**
       * create range
       * @return {WrappedRange}
       */
    }, {
      key: "createRange",
      value: function createRange() {
        this.focus();
        this.setLastRange();
        return this.getLastRange();
      }
      /**
       * create a new range from the list of elements
       *
       * @param {list} dom element list
       * @return {WrappedRange}
       */
    }, {
      key: "createRangeFromList",
      value: function createRangeFromList(lst) {
        var startRange = range.createFromNodeBefore(lists.head(lst));
        var startPoint = startRange.getStartPoint();
        var endRange = range.createFromNodeAfter(lists.last(lst));
        var endPoint = endRange.getEndPoint();
        return range.create(startPoint.node, startPoint.offset, endPoint.node, endPoint.offset);
      }
      /**
       * set the last range
       *
       * if given rng is exist, set rng as the last range
       * or create a new range at the end of the document
       *
       * @param {WrappedRange} rng
       */
    }, {
      key: "setLastRange",
      value: function setLastRange(rng) {
        if (rng) {
          this.lastRange = rng;
        } else {
          this.lastRange = range.create(this.editable);
          if ($(this.lastRange.sc).closest(".note-editable").length === 0) {
            this.lastRange = range.createFromBodyElement(this.editable);
          }
        }
      }
      /**
       * get the last range
       *
       * if there is a saved last range, return it
       * or create a new range and return it
       *
       * @return {WrappedRange}
       */
    }, {
      key: "getLastRange",
      value: function getLastRange() {
        if (!this.lastRange) {
          this.setLastRange();
        }
        return this.lastRange;
      }
      /**
       * saveRange
       *
       * save current range
       *
       * @param {Boolean} [thenCollapse=false]
       */
    }, {
      key: "saveRange",
      value: function saveRange(thenCollapse) {
        if (thenCollapse) {
          this.getLastRange().collapse().select();
        }
      }
      /**
       * restoreRange
       *
       * restore lately range
       */
    }, {
      key: "restoreRange",
      value: function restoreRange() {
        if (this.lastRange) {
          this.lastRange.select();
          this.focus();
        }
      }
    }, {
      key: "saveTarget",
      value: function saveTarget(node) {
        this.$editable.data("target", node);
      }
    }, {
      key: "clearTarget",
      value: function clearTarget() {
        this.$editable.removeData("target");
      }
    }, {
      key: "restoreTarget",
      value: function restoreTarget() {
        return this.$editable.data("target");
      }
      /**
       * currentStyle
       *
       * current style
       * @return {Object|Boolean} unfocus
       */
    }, {
      key: "currentStyle",
      value: function currentStyle() {
        var rng = range.create();
        if (rng) {
          rng = rng.normalize();
        }
        return rng ? this.style.current(rng) : this.style.fromNode(this.$editable);
      }
      /**
       * style from node
       *
       * @param {jQuery} $node
       * @return {Object}
       */
    }, {
      key: "styleFromNode",
      value: function styleFromNode($node) {
        return this.style.fromNode($node);
      }
      /**
       * undo
       */
    }, {
      key: "undo",
      value: function undo() {
        this.context.triggerEvent("before.command", this.$editable.html());
        this.history.undo();
        this.context.triggerEvent("change", this.$editable.html(), this.$editable);
      }
      /*
      * commit
      */
    }, {
      key: "commit",
      value: function commit() {
        this.context.triggerEvent("before.command", this.$editable.html());
        this.history.commit();
        this.context.triggerEvent("change", this.$editable.html(), this.$editable);
      }
      /**
       * redo
       */
    }, {
      key: "redo",
      value: function redo() {
        this.context.triggerEvent("before.command", this.$editable.html());
        this.history.redo();
        this.context.triggerEvent("change", this.$editable.html(), this.$editable);
      }
      /**
       * before command
       */
    }, {
      key: "beforeCommand",
      value: function beforeCommand() {
        this.context.triggerEvent("before.command", this.$editable.html());
        document.execCommand("styleWithCSS", false, this.options.styleWithCSS);
        this.focus();
      }
      /**
       * after command
       * @param {Boolean} isPreventTrigger
       */
    }, {
      key: "afterCommand",
      value: function afterCommand(isPreventTrigger) {
        this.normalizeContent();
        this.history.recordUndo();
        if (!isPreventTrigger) {
          this.context.triggerEvent("change", this.$editable.html(), this.$editable);
        }
      }
      /**
       * handle tab key
       */
    }, {
      key: "tab",
      value: function tab() {
        var rng = this.getLastRange();
        if (rng.isCollapsed() && rng.isOnCell()) {
          this.table.tab(rng);
        } else {
          if (this.options.tabSize === 0) {
            return false;
          }
          if (!this.isLimited(this.options.tabSize)) {
            this.beforeCommand();
            this.typing.insertTab(rng, this.options.tabSize);
            this.afterCommand();
          }
        }
      }
      /**
       * handle shift+tab key
       */
    }, {
      key: "untab",
      value: function untab() {
        var rng = this.getLastRange();
        if (rng.isCollapsed() && rng.isOnCell()) {
          this.table.tab(rng, true);
        } else {
          if (this.options.tabSize === 0) {
            return false;
          }
        }
      }
      /**
       * run given function between beforeCommand and afterCommand
       */
    }, {
      key: "wrapCommand",
      value: function wrapCommand(fn) {
        return function () {
          this.beforeCommand();
          fn.apply(this, arguments);
          this.afterCommand();
        };
      }
      /**
       * removed (function added by 1der1)
      */
    }, {
      key: "removed",
      value: function removed(rng, node, tagName) {
        rng = range.create();
        if (rng.isCollapsed() && rng.isOnCell()) {
          node = rng.ec;
          if ((tagName = node.tagName) && node.childElementCount === 1 && node.childNodes[0].tagName === "BR") {
            if (tagName === "P") {
              node.remove();
            } else if (["TH", "TD"].indexOf(tagName) >= 0) {
              node.firstChild.remove();
            }
          }
        }
      }
      /**
       * insert image
       *
       * @param {String} src
       * @param {String|Function} param
       * @return {Promise}
       */
    }, {
      key: "insertImage",
      value: function insertImage(src, param) {
        var _this11 = this;
        return createImage(src).then(function ($image) {
          _this11.beforeCommand();
          if (typeof param === "function") {
            param($image);
          } else {
            if (typeof param === "string") {
              $image.attr("data-filename", param);
            }
            $image.css("width", Math.min(_this11.$editable.width(), $image.width()));
          }
          $image.show();
          _this11.getLastRange().insertNode($image[0]);
          _this11.setLastRange(range.createFromNodeAfter($image[0]).select());
          _this11.afterCommand();
        }).fail(function (e) {
          _this11.context.triggerEvent("image.upload.error", e);
        });
      }
      /**
       * insertImages
       * @param {File[]} files
       */
    }, {
      key: "insertImagesAsDataURL",
      value: function insertImagesAsDataURL(files) {
        var _this12 = this;
        $.each(files, function (idx, file) {
          var filename = file.name;
          if (_this12.options.maximumImageFileSize && _this12.options.maximumImageFileSize < file.size) {
            _this12.context.triggerEvent("image.upload.error", _this12.lang.image.maximumFileSizeError);
          } else {
            readFileAsDataURL(file).then(function (dataURL) {
              return _this12.insertImage(dataURL, filename);
            }).fail(function () {
              _this12.context.triggerEvent("image.upload.error");
            });
          }
        });
      }
      /**
       * insertImagesOrCallback
       * @param {File[]} files
       */
    }, {
      key: "insertImagesOrCallback",
      value: function insertImagesOrCallback(files) {
        var callbacks = this.options.callbacks;
        if (callbacks.onImageUpload) {
          this.context.triggerEvent("image.upload", files);
        } else {
          this.insertImagesAsDataURL(files);
        }
      }
      /**
       * return selected plain text
       * @return {String} text
       */
    }, {
      key: "getSelectedText",
      value: function getSelectedText() {
        var rng = this.getLastRange();
        if (rng.isOnAnchor()) {
          rng = range.createFromNode(dom.ancestor(rng.sc, dom.isAnchor));
        }
        return rng.toString();
      }
    }, {
      key: "onFormatBlock",
      value: function onFormatBlock(tagName, $target) {
        document.execCommand("FormatBlock", false, env.isMSIE ? "<" + tagName + ">" : tagName);
        if ($target && $target.length) {
          if ($target[0].tagName.toUpperCase() !== tagName.toUpperCase()) {
            $target = $target.find(tagName);
          }
          if ($target && $target.length) {
            var currentRange = this.createRange();
            var $parent = $([currentRange.sc, currentRange.ec]).closest(tagName);
            $parent.removeClass();
            var className = $target[0].className || "";
            if (className) {
              $parent.addClass(className);
            }
          }
        }
      }
    }, {
      key: "formatPara",
      value: function formatPara() {
        this.formatBlock("P");
      }
    }, {
      key: "fontStyling",
      value: function fontStyling(target, value2) {
        var rng = this.getLastRange();
        if (rng !== "") {
          var spans = this.style.styleNodes(rng);
          this.$editor.find(".note-status-output").html("");
          $(spans).css(target, value2);
          if (rng.isCollapsed()) {
            var firstSpan = lists.head(spans);
            if (firstSpan && !dom.nodeLength(firstSpan)) {
              firstSpan.innerHTML = dom.ZERO_WIDTH_NBSP_CHAR;
              range.createFromNode(firstSpan.firstChild).select();
              this.setLastRange();
              this.$editable.data(KEY_BOGUS, firstSpan);
            }
          } else {
            rng.select();
          }
        } else {
          var noteStatusOutput = $.now();
          this.$editor.find(".note-status-output").html('<div id="note-status-output-' + noteStatusOutput + '" class="alert alert-info">' + this.lang.output.noSelection + "</div>");
          setTimeout(function () {
            $("#note-status-output-" + noteStatusOutput).remove();
          }, 5e3);
        }
      }
      /**
       * unlink
       *
       * @type command
       */
    }, {
      key: "unlink",
      value: function unlink() {
        var rng = this.getLastRange();
        if (rng.isOnAnchor()) {
          var anchor = dom.ancestor(rng.sc, dom.isAnchor);
          rng = range.createFromNode(anchor);
          rng.select();
          this.setLastRange();
          this.beforeCommand();
          document.execCommand("unlink");
          this.afterCommand();
        }
      }
      /**
       * returns link info
       *
       * @return {Object}
       * @return {WrappedRange} return.range
       * @return {String} return.text
       * @return {Boolean} [return.isNewWindow=true]
       * @return {String} [return.url=""]
       */
    }, {
      key: "getLinkInfo",
      value: function getLinkInfo() {
        if (!this.hasFocus()) {
          this.focus();
        }
        var rng = this.getLastRange().expand(dom.isAnchor);
        var $anchor = $(lists.head(rng.nodes(dom.isAnchor)));
        var linkInfo = {
          range: rng,
          text: rng.toString(),
          url: $anchor.length ? $anchor.attr("href") : ""
        };
        if ($anchor.length) {
          linkInfo.isNewWindow = $anchor.attr("target") === "_blank";
        }
        return linkInfo;
      }
    }, {
      key: "addRow",
      value: function addRow(position2) {
        var rng = this.getLastRange(this.$editable);
        if (rng.isCollapsed() && rng.isOnCell()) {
          this.beforeCommand();
          this.table.addRow(rng, position2);
          this.afterCommand();
        }
      }
    }, {
      key: "addCol",
      value: function addCol(position2) {
        var rng = this.getLastRange(this.$editable);
        if (rng.isCollapsed() && rng.isOnCell()) {
          this.beforeCommand();
          this.table.addCol(rng, position2);
          this.afterCommand();
        }
      }
    }, {
      key: "deleteRow",
      value: function deleteRow() {
        var rng = this.getLastRange(this.$editable);
        if (rng.isCollapsed() && rng.isOnCell()) {
          this.beforeCommand();
          this.table.deleteRow(rng);
          this.afterCommand();
        }
      }
    }, {
      key: "deleteCol",
      value: function deleteCol() {
        var rng = this.getLastRange(this.$editable);
        if (rng.isCollapsed() && rng.isOnCell()) {
          this.beforeCommand();
          this.table.deleteCol(rng);
          this.afterCommand();
        }
      }
    }, {
      key: "deleteTable",
      value: function deleteTable() {
        var rng = this.getLastRange(this.$editable);
        if (rng.isCollapsed() && rng.isOnCell()) {
          this.beforeCommand();
          this.table.deleteTable(rng);
          this.afterCommand();
        }
      }
      /**
       * @param {Position} pos
       * @param {jQuery} $target - target element
       * @param {Boolean} [bKeepRatio] - keep ratio
       */
    }, {
      key: "resizeTo",
      value: function resizeTo(pos, $target, bKeepRatio) {
        var imageSize;
        if (bKeepRatio) {
          var newRatio = pos.y / pos.x;
          var ratio = $target.data("ratio");
          imageSize = {
            width: ratio > newRatio ? pos.x : pos.y / ratio,
            height: ratio > newRatio ? pos.x * ratio : pos.y
          };
        } else {
          imageSize = {
            width: pos.x,
            height: pos.y
          };
        }
        $target.css(imageSize);
      }
      /**
       * returns whether editable area has focus or not.
       */
    }, {
      key: "hasFocus",
      value: function hasFocus() {
        return this.$editable.is(":focus");
      }
      /**
       * set focus
       */
    }, {
      key: "focus",
      value: function focus() {
        if (!this.hasFocus()) {
          this.$editable.trigger("focus");
        }
      }
      /**
       * returns whether contents is empty or not.
       * @return {Boolean}
       */
    }, {
      key: "isEmpty",
      value: function isEmpty() {
        return dom.isEmpty(this.$editable[0]) || dom.emptyPara === this.$editable.html();
      }
      /**
       * Removes all contents and restores the editable instance to an _emptyPara_.
       */
    }, {
      key: "empty",
      value: function empty() {
        this.context.invoke("code", dom.emptyPara);
      }
      /**
       * normalize content
       */
    }, {
      key: "normalizeContent",
      value: function normalizeContent() {
        this.$editable[0].normalize();
      }
    }]);
  }();
  var Clipboard = /*#__PURE__*/function () {
    function Clipboard(context) {
      _classCallCheck(this, Clipboard);
      this.context = context;
      this.options = context.options;
      this.$editable = context.layoutInfo.editable;
    }
    return _createClass(Clipboard, [{
      key: "initialize",
      value: function initialize() {
        this.$editable.on("paste", this.pasteByEvent.bind(this));
      }
      /**
       * paste by clipboard event
       *
       * @param {Event} event
       */
    }, {
      key: "pasteByEvent",
      value: function pasteByEvent(event) {
        var _this13 = this;
        if (this.context.isDisabled()) {
          return;
        }
        var clipboardData = event.originalEvent.clipboardData;
        if (clipboardData && clipboardData.items && clipboardData.items.length) {
          var clipboardFiles = clipboardData.files;
          var clipboardText = clipboardData.getData("Text");
          if (clipboardFiles.length > 0 && this.options.allowClipboardImagePasting) {
            this.context.invoke("editor.insertImagesOrCallback", clipboardFiles);
            event.preventDefault();
          }
          if (clipboardText.length > 0 && this.context.invoke("editor.isLimited", clipboardText.length)) {
            event.preventDefault();
          }
        } else if (window.clipboardData) {
          var text = window.clipboardData.getData("text");
          if (this.context.invoke("editor.isLimited", text.length)) {
            event.preventDefault();
          }
        }
        setTimeout(function () {
          _this13.context.invoke("editor.afterCommand");
        }, 10);
      }
    }]);
  }();
  var Dropzone = /*#__PURE__*/function () {
    function Dropzone(context) {
      _classCallCheck(this, Dropzone);
      this.context = context;
      this.$eventListener = $(document);
      this.$editor = context.layoutInfo.editor;
      this.$editable = context.layoutInfo.editable;
      this.options = context.options;
      this.lang = this.options.langInfo;
      this.documentEventHandlers = {};
      this.$dropzone = $(['<div class="note-dropzone">', '<div class="note-dropzone-message"></div>', "</div>"].join("")).prependTo(this.$editor);
    }
    /**
     * attach Drag and Drop Events
     */
    return _createClass(Dropzone, [{
      key: "initialize",
      value: function initialize() {
        if (this.options.disableDragAndDrop) {
          this.documentEventHandlers.onDrop = function (e) {
            e.preventDefault();
          };
          this.$eventListener = this.$dropzone;
          this.$eventListener.on("drop", this.documentEventHandlers.onDrop);
        } else {
          this.attachDragAndDropEvent();
        }
      }
      /**
       * attach Drag and Drop Events
       */
    }, {
      key: "attachDragAndDropEvent",
      value: function attachDragAndDropEvent() {
        var _this14 = this;
        var collection = $();
        var $dropzoneMessage = this.$dropzone.find(".note-dropzone-message");
        this.documentEventHandlers.onDragenter = function (e) {
          var isCodeview = _this14.context.invoke("codeview.isActivated");
          var hasEditorSize = _this14.$editor.width() > 0 && _this14.$editor.height() > 0;
          if (!isCodeview && !collection.length && hasEditorSize) {
            _this14.$editor.addClass("dragover");
            _this14.$dropzone.width(_this14.$editor.width());
            _this14.$dropzone.height(_this14.$editor.height());
            $dropzoneMessage.text(_this14.lang.image.dragImageHere);
          }
          collection = collection.add(e.target);
        };
        this.documentEventHandlers.onDragleave = function (e) {
          collection = collection.not(e.target);
          if (!collection.length || e.target.nodeName === "BODY") {
            collection = $();
            _this14.$editor.removeClass("dragover");
          }
        };
        this.documentEventHandlers.onDrop = function () {
          collection = $();
          _this14.$editor.removeClass("dragover");
        };
        this.$eventListener.on("dragenter", this.documentEventHandlers.onDragenter).on("dragleave", this.documentEventHandlers.onDragleave).on("drop", this.documentEventHandlers.onDrop);
        this.$dropzone.on("dragenter", function () {
          _this14.$dropzone.addClass("hover");
          $dropzoneMessage.text(_this14.lang.image.dropImage);
        }).on("dragleave", function () {
          _this14.$dropzone.removeClass("hover");
          $dropzoneMessage.text(_this14.lang.image.dragImageHere);
        });
        this.$dropzone.on("drop", function (event) {
          var dataTransfer = event.originalEvent.dataTransfer;
          event.preventDefault();
          if (dataTransfer && dataTransfer.files && dataTransfer.files.length) {
            _this14.$editable.trigger("focus");
            _this14.context.invoke("editor.insertImagesOrCallback", dataTransfer.files);
          } else {
            $.each(dataTransfer.types, function (idx, type) {
              if (type.toLowerCase().indexOf("_moz_") > -1) {
                return;
              }
              var content = dataTransfer.getData(type);
              if (type.toLowerCase().indexOf("text") > -1) {
                _this14.context.invoke("editor.pasteHTML", content);
              } else {
                $(content).each(function (idx2, item) {
                  _this14.context.invoke("editor.insertNode", item);
                });
              }
            });
          }
        }).on("dragover", false);
      }
    }, {
      key: "destroy",
      value: function destroy() {
        var _this15 = this;
        Object.keys(this.documentEventHandlers).forEach(function (key2) {
          _this15.$eventListener.off(key2.slice(2).toLowerCase(), _this15.documentEventHandlers[key2]);
        });
        this.documentEventHandlers = {};
      }
    }]);
  }();
  var CodeView = /*#__PURE__*/function () {
    function CodeView(context) {
      _classCallCheck(this, CodeView);
      this.context = context;
      this.$editor = context.layoutInfo.editor;
      this.$editable = context.layoutInfo.editable;
      this.$codable = context.layoutInfo.codable;
      this.options = context.options;
      this.CodeMirrorConstructor = window.CodeMirror;
      if (this.options.codemirror.CodeMirrorConstructor) {
        this.CodeMirrorConstructor = this.options.codemirror.CodeMirrorConstructor;
      }
    }
    return _createClass(CodeView, [{
      key: "sync",
      value: function sync(html2) {
        var isCodeview = this.isActivated();
        var CodeMirror = this.CodeMirrorConstructor;
        if (isCodeview) {
          if (html2) {
            if (CodeMirror) {
              this.$codable.data("cmEditor").getDoc().setValue(html2);
            } else {
              this.$codable.val(html2);
            }
          } else {
            if (CodeMirror) {
              this.$codable.data("cmEditor").save();
            }
          }
        }
      }
    }, {
      key: "initialize",
      value: function initialize() {
        var _this16 = this;
        this.$codable.on("keyup", function (event) {
          if (event.keyCode === key.code.ESCAPE) {
            _this16.deactivate();
          }
        });
      }
      /**
       * @return {Boolean}
       */
    }, {
      key: "isActivated",
      value: function isActivated() {
        return this.$editor.hasClass("codeview");
      }
      /**
       * toggle codeview
       */
    }, {
      key: "toggle",
      value: function toggle() {
        if (this.isActivated()) {
          this.deactivate();
        } else {
          this.activate();
        }
        this.context.triggerEvent("codeview.toggled");
      }
      /**
       * purify input value
       * @param value
       * @returns {*}
       */
    }, {
      key: "purify",
      value: function purify(value2) {
        if (this.options.codeviewFilter) {
          value2 = value2.replace(this.options.codeviewFilterRegex, "");
          if (this.options.codeviewIframeFilter) {
            var whitelist = this.options.codeviewIframeWhitelistSrc.concat(this.options.codeviewIframeWhitelistSrcBase);
            value2 = value2.replace(/(<iframe.*?>.*?(?:<\/iframe>)?)/gi, function (tag) {
              if (/<.+src(?==?('|"|\s)?)[\s\S]+src(?=('|"|\s)?)[^>]*?>/i.test(tag)) {
                return "";
              }
              var _iterator = _createForOfIteratorHelper(whitelist),
                _step;
              try {
                for (_iterator.s(); !(_step = _iterator.n()).done;) {
                  var src = _step.value;
                  if (new RegExp('src="(https?:)?//' + src.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&") + '/(.+)"').test(tag)) {
                    return tag;
                  }
                }
              } catch (err) {
                _iterator.e(err);
              } finally {
                _iterator.f();
              }
              return "";
            });
          }
        }
        return value2;
      }
      /**
       * activate code view
       */
    }, {
      key: "activate",
      value: function activate() {
        var _this17 = this;
        var CodeMirror = this.CodeMirrorConstructor;
        this.$codable.val(dom.html(this.$editable, this.options.prettifyHtml));
        this.$codable.height(this.$editable.height());
        this.context.invoke("toolbar.updateCodeview", true);
        this.context.invoke("airPopover.updateCodeview", true);
        this.$editor.addClass("codeview");
        this.$codable.trigger("focus");
        if (CodeMirror) {
          var cmEditor = CodeMirror.fromTextArea(this.$codable[0], this.options.codemirror);
          if (this.options.codemirror.tern) {
            var server = new CodeMirror.TernServer(this.options.codemirror.tern);
            cmEditor.ternServer = server;
            cmEditor.on("cursorActivity", function (cm) {
              server.updateArgHints(cm);
            });
          }
          cmEditor.on("blur", function (event) {
            _this17.context.triggerEvent("blur.codeview", cmEditor.getValue(), event);
          });
          cmEditor.on("change", function () {
            _this17.context.triggerEvent("change.codeview", cmEditor.getValue(), cmEditor);
          });
          cmEditor.setSize(null, this.$editable.outerHeight());
          this.$codable.data("cmEditor", cmEditor);
        } else {
          this.$codable.on("blur", function (event) {
            _this17.context.triggerEvent("blur.codeview", _this17.$codable.val(), event);
          });
          this.$codable.on("input", function () {
            _this17.context.triggerEvent("change.codeview", _this17.$codable.val(), _this17.$codable);
          });
        }
      }
      /**
       * deactivate code view
       */
    }, {
      key: "deactivate",
      value: function deactivate() {
        var CodeMirror = this.CodeMirrorConstructor;
        if (CodeMirror) {
          var cmEditor = this.$codable.data("cmEditor");
          this.$codable.val(cmEditor.getValue());
          cmEditor.toTextArea();
        }
        var value2 = this.purify(dom.value(this.$codable, this.options.prettifyHtml) || dom.emptyPara);
        var isChange = this.$editable.html() !== value2;
        this.$editable.html(value2);
        this.$editable.height(this.options.height ? this.$codable.height() : "auto");
        this.$editor.removeClass("codeview");
        if (isChange) {
          this.context.triggerEvent("change", this.$editable.html(), this.$editable);
        }
        this.$editable.trigger("focus");
        this.context.invoke("toolbar.updateCodeview", false);
        this.context.invoke("airPopover.updateCodeview", false);
      }
    }, {
      key: "destroy",
      value: function destroy() {
        if (this.isActivated()) {
          this.deactivate();
        }
      }
    }]);
  }();
  var EDITABLE_PADDING = 24;
  var Statusbar = /*#__PURE__*/function () {
    function Statusbar(context) {
      _classCallCheck(this, Statusbar);
      this.$document = $(document);
      this.$statusbar = context.layoutInfo.statusbar;
      this.$editable = context.layoutInfo.editable;
      this.$codable = context.layoutInfo.codable;
      this.options = context.options;
    }
    return _createClass(Statusbar, [{
      key: "initialize",
      value: function initialize() {
        var _this18 = this;
        if (this.options.airMode || this.options.disableResizeEditor) {
          this.destroy();
          return;
        }
        this.$statusbar.on("mousedown touchstart", function (event) {
          event.preventDefault();
          event.stopPropagation();
          var editableTop = _this18.$editable.offset().top - _this18.$document.scrollTop();
          var editableCodeTop = _this18.$codable.offset().top - _this18.$document.scrollTop();
          var onStatusbarMove = function onStatusbarMove(event2) {
            var originalEvent = event2.type == "mousemove" ? event2 : event2.originalEvent.touches[0];
            var height = originalEvent.clientY - (editableTop + EDITABLE_PADDING);
            var heightCode = originalEvent.clientY - (editableCodeTop + EDITABLE_PADDING);
            height = _this18.options.minheight > 0 ? Math.max(height, _this18.options.minheight) : height;
            height = _this18.options.maxHeight > 0 ? Math.min(height, _this18.options.maxHeight) : height;
            heightCode = _this18.options.minheight > 0 ? Math.max(heightCode, _this18.options.minheight) : heightCode;
            heightCode = _this18.options.maxHeight > 0 ? Math.min(heightCode, _this18.options.maxHeight) : heightCode;
            _this18.$editable.height(height);
            _this18.$codable.height(heightCode);
          };
          _this18.$document.on("mousemove touchmove", onStatusbarMove).one("mouseup touchend", function () {
            _this18.$document.off("mousemove touchmove", onStatusbarMove);
          });
        });
      }
    }, {
      key: "destroy",
      value: function destroy() {
        this.$statusbar.off();
        this.$statusbar.addClass("locked");
      }
    }]);
  }();
  var Fullscreen = /*#__PURE__*/function () {
    function Fullscreen(context) {
      var _this19 = this;
      _classCallCheck(this, Fullscreen);
      this.context = context;
      this.$editor = context.layoutInfo.editor;
      this.$toolbar = context.layoutInfo.toolbar;
      this.$editable = context.layoutInfo.editable;
      this.$codable = context.layoutInfo.codable;
      this.$window = $(window);
      this.$scrollbar = $("html, body");
      this.scrollbarClassName = "note-fullscreen-body";
      this.onResize = function () {
        _this19.resizeTo({
          h: _this19.$window.height() - _this19.$toolbar.outerHeight()
        });
      };
    }
    return _createClass(Fullscreen, [{
      key: "resizeTo",
      value: function resizeTo(size) {
        this.$editable.css("height", size.h);
        this.$codable.css("height", size.h);
        if (this.$codable.data("cmeditor")) {
          this.$codable.data("cmeditor").setsize(null, size.h);
        }
      }
      /**
       * toggle fullscreen
       */
    }, {
      key: "toggle",
      value: function toggle() {
        this.$editor.toggleClass("fullscreen");
        var isFullscreen = this.isFullscreen();
        this.$scrollbar.toggleClass(this.scrollbarClassName, isFullscreen);
        if (isFullscreen) {
          this.$editable.data("orgHeight", this.$editable.css("height"));
          this.$editable.data("orgMaxHeight", this.$editable.css("maxHeight"));
          this.$editable.css("maxHeight", "");
          this.$window.on("resize", this.onResize).trigger("resize");
        } else {
          this.$window.off("resize", this.onResize);
          this.resizeTo({
            h: this.$editable.data("orgHeight")
          });
          this.$editable.css("maxHeight", this.$editable.css("orgMaxHeight"));
        }
        this.context.invoke("toolbar.updateFullscreen", isFullscreen);
      }
    }, {
      key: "isFullscreen",
      value: function isFullscreen() {
        return this.$editor.hasClass("fullscreen");
      }
    }, {
      key: "destroy",
      value: function destroy() {
        this.$scrollbar.removeClass(this.scrollbarClassName);
      }
    }]);
  }();
  var Handle = /*#__PURE__*/function () {
    function Handle(context) {
      var _this20 = this;
      _classCallCheck(this, Handle);
      this.context = context;
      this.$document = $(document);
      this.$editingArea = context.layoutInfo.editingArea;
      this.options = context.options;
      this.lang = this.options.langInfo;
      this.events = {
        "summernote.mousedown": function summernoteMousedown(we, e) {
          if (_this20.update(e.target, e)) {
            e.preventDefault();
          }
        },
        "summernote.keyup summernote.scroll summernote.change summernote.dialog.shown": function summernoteKeyup_summernoteScroll_summernoteChange_summernoteDialogShown() {
          _this20.update();
        },
        "summernote.disable summernote.blur": function summernoteDisable_summernoteBlur() {
          _this20.hide();
        },
        "summernote.codeview.toggled": function summernoteCodeviewToggled() {
          _this20.update();
        }
      };
    }
    return _createClass(Handle, [{
      key: "initialize",
      value: function initialize() {
        var _this21 = this;
        this.$handle = $(['<div class="note-handle">', '<div class="note-control-selection">', '<div class="note-control-selection-bg"></div>', '<div class="note-control-holder note-control-nw"></div>', '<div class="note-control-holder note-control-ne"></div>', '<div class="note-control-holder note-control-sw"></div>', '<div class="', this.options.disableResizeImage ? "note-control-holder" : "note-control-sizing", ' note-control-se"></div>', this.options.disableResizeImage ? "" : '<div class="note-control-selection-info"></div>', "</div>", "</div>"].join("")).prependTo(this.$editingArea);
        this.$handle.on("mousedown", function (event) {
          if (dom.isControlSizing(event.target)) {
            event.preventDefault();
            event.stopPropagation();
            var $target = _this21.$handle.find(".note-control-selection").data("target");
            var posStart = $target.offset();
            var scrollTop = _this21.$document.scrollTop();
            var onMouseMove = function onMouseMove(event2) {
              _this21.context.invoke("editor.resizeTo", {
                x: event2.clientX - posStart.left,
                y: event2.clientY - (posStart.top - scrollTop)
              }, $target, !event2.shiftKey);
              _this21.update($target[0], event2);
            };
            _this21.$document.on("mousemove", onMouseMove).one("mouseup", function (e) {
              e.preventDefault();
              _this21.$document.off("mousemove", onMouseMove);
              _this21.context.invoke("editor.afterCommand");
            });
            if (!$target.data("ratio")) {
              $target.data("ratio", $target.height() / $target.width());
            }
          }
        });
        this.$handle.on("wheel", function (event) {
          event.preventDefault();
          _this21.update();
        });
      }
    }, {
      key: "destroy",
      value: function destroy() {
        this.$handle.remove();
      }
    }, {
      key: "update",
      value: function update(target, event) {
        if (this.context.isDisabled()) {
          return false;
        }
        var isImage = dom.isImg(target);
        var $selection = this.$handle.find(".note-control-selection");
        this.context.invoke("imagePopover.update", target, event);
        if (isImage) {
          var $image = $(target);
          var areaRect = this.$editingArea[0].getBoundingClientRect();
          var imageRect = target.getBoundingClientRect();
          $selection.css({
            display: "block",
            left: imageRect.left - areaRect.left,
            top: imageRect.top - areaRect.top,
            width: imageRect.width,
            height: imageRect.height
          }).data("target", $image);
          var origImageObj = new Image();
          origImageObj.src = $image.attr("src");
          var sizingText = imageRect.width + "x" + imageRect.height + " (" + this.lang.image.original + ": " + origImageObj.width + "x" + origImageObj.height + ")";
          $selection.find(".note-control-selection-info").text(sizingText);
          this.context.invoke("editor.saveTarget", target);
        } else {
          this.hide();
        }
        return isImage;
      }
      /**
       * hide
       *
       * @param {jQuery} $handle
       */
    }, {
      key: "hide",
      value: function hide() {
        this.context.invoke("editor.clearTarget");
        this.$handle.children().hide();
      }
    }]);
  }();
  var defaultScheme = "http://";
  var linkPattern = /^([A-Za-z][A-Za-z0-9+-.]*\:[\/]{2}|tel:|mailto:[A-Z0-9._%+-]+@|xmpp:[A-Z0-9._%+-]+@)?(www\.)?(.+)$/i;
  var AutoLink = /*#__PURE__*/function () {
    function AutoLink(context) {
      var _this22 = this;
      _classCallCheck(this, AutoLink);
      this.context = context;
      this.options = context.options;
      this.$editable = context.layoutInfo.editable;
      this.events = {
        "summernote.keyup": function summernoteKeyup(we, event) {
          if (!event.isDefaultPrevented()) {
            _this22.handleKeyup(event);
          }
        },
        "summernote.keydown": function summernoteKeydown(we, event) {
          _this22.handleKeydown(event);
        }
      };
    }
    return _createClass(AutoLink, [{
      key: "initialize",
      value: function initialize() {
        this.lastWordRange = null;
      }
    }, {
      key: "destroy",
      value: function destroy() {
        this.lastWordRange = null;
      }
    }, {
      key: "replace",
      value: function replace() {
        if (!this.lastWordRange) {
          return;
        }
        var keyword = this.lastWordRange.toString();
        var match = keyword.match(linkPattern);
        if (match && (match[1] || match[2])) {
          var link = match[1] ? keyword : defaultScheme + keyword;
          var urlText = this.options.showDomainOnlyForAutolink ? keyword.replace(/^(?:https?:\/\/)?(?:tel?:?)?(?:mailto?:?)?(?:xmpp?:?)?(?:www\.)?/i, "").split("/")[0] : keyword;
          var node = $("<a></a>").html(urlText).attr("href", link)[0];
          if (this.context.options.linkTargetBlank) {
            $(node).attr("target", "_blank");
          }
          this.lastWordRange.insertNode(node);
          this.lastWordRange = null;
          this.context.invoke("editor.focus");
          this.context.triggerEvent("change", this.$editable.html(), this.$editable);
        }
      }
    }, {
      key: "handleKeydown",
      value: function handleKeydown(event) {
        if (lists.contains([key.code.ENTER, key.code.SPACE], event.keyCode)) {
          var wordRange = this.context.invoke("editor.createRange").getWordRange();
          this.lastWordRange = wordRange;
        }
      }
    }, {
      key: "handleKeyup",
      value: function handleKeyup(event) {
        if (key.code.SPACE === event.keyCode || key.code.ENTER === event.keyCode && !event.shiftKey) {
          this.replace();
        }
      }
    }]);
  }();
  var AutoSync = /*#__PURE__*/function () {
    function AutoSync(context) {
      var _this23 = this;
      _classCallCheck(this, AutoSync);
      this.$note = context.layoutInfo.note;
      this.events = {
        "summernote.change": function summernoteChange() {
          _this23.$note.val(context.invoke("code"));
        }
      };
    }
    return _createClass(AutoSync, [{
      key: "shouldInitialize",
      value: function shouldInitialize() {
        return dom.isTextarea(this.$note[0]);
      }
    }]);
  }();
  var AutoReplace = /*#__PURE__*/function () {
    function AutoReplace(context) {
      var _this24 = this;
      _classCallCheck(this, AutoReplace);
      this.context = context;
      this.options = context.options.replace || {};
      this.keys = [key.code.ENTER, key.code.SPACE, key.code.PERIOD, key.code.COMMA, key.code.SEMICOLON, key.code.SLASH];
      this.previousKeydownCode = null;
      this.events = {
        "summernote.keyup": function summernoteKeyup(we, event) {
          if (!event.isDefaultPrevented()) {
            _this24.handleKeyup(event);
          }
        },
        "summernote.keydown": function summernoteKeydown(we, event) {
          _this24.handleKeydown(event);
        }
      };
    }
    return _createClass(AutoReplace, [{
      key: "shouldInitialize",
      value: function shouldInitialize() {
        return !!this.options.match;
      }
    }, {
      key: "initialize",
      value: function initialize() {
        this.lastWord = null;
      }
    }, {
      key: "destroy",
      value: function destroy() {
        this.lastWord = null;
      }
    }, {
      key: "replace",
      value: function replace() {
        if (!this.lastWord) {
          return;
        }
        var self2 = this;
        var keyword = this.lastWord.toString();
        this.options.match(keyword, function (match) {
          if (match) {
            var node = "";
            if (typeof match === "string") {
              node = dom.createText(match);
            } else if (match instanceof jQuery) {
              node = match[0];
            } else if (match instanceof Node) {
              node = match;
            }
            if (!node) return;
            self2.lastWord.insertNode(node);
            self2.lastWord = null;
            self2.context.invoke("editor.focus");
          }
        });
      }
    }, {
      key: "handleKeydown",
      value: function handleKeydown(event) {
        if (this.previousKeydownCode && lists.contains(this.keys, this.previousKeydownCode)) {
          this.previousKeydownCode = event.keyCode;
          return;
        }
        if (lists.contains(this.keys, event.keyCode)) {
          var wordRange = this.context.invoke("editor.createRange").getWordRange();
          this.lastWord = wordRange;
        }
        this.previousKeydownCode = event.keyCode;
      }
    }, {
      key: "handleKeyup",
      value: function handleKeyup(event) {
        if (lists.contains(this.keys, event.keyCode)) {
          this.replace();
        }
      }
    }]);
  }();
  var Placeholder = /*#__PURE__*/function () {
    function Placeholder(context) {
      var _this25 = this;
      _classCallCheck(this, Placeholder);
      this.context = context;
      this.$editingArea = context.layoutInfo.editingArea;
      this.options = context.options;
      if (this.options.inheritPlaceholder === true) {
        this.options.placeholder = this.context.$note.attr("placeholder") || this.options.placeholder;
      }
      this.events = {
        "summernote.init summernote.change": function summernoteInit_summernoteChange() {
          _this25.update();
        },
        "summernote.codeview.toggled": function summernoteCodeviewToggled() {
          _this25.update();
        }
      };
    }
    return _createClass(Placeholder, [{
      key: "shouldInitialize",
      value: function shouldInitialize() {
        return !!this.options.placeholder;
      }
    }, {
      key: "initialize",
      value: function initialize() {
        var _this26 = this;
        this.$placeholder = $('<div class="note-placeholder"></div>');
        this.$placeholder.on("click", function () {
          _this26.context.invoke("focus");
        }).html(this.options.placeholder).prependTo(this.$editingArea);
        this.update();
      }
    }, {
      key: "destroy",
      value: function destroy() {
        this.$placeholder.remove();
      }
    }, {
      key: "update",
      value: function update() {
        var isShow = !this.context.invoke("codeview.isActivated") && this.context.invoke("editor.isEmpty");
        this.$placeholder.toggle(isShow);
      }
    }]);
  }();
  var Buttons = /*#__PURE__*/function () {
    function Buttons(context) {
      _classCallCheck(this, Buttons);
      this.ui = $.summernote.ui;
      this.context = context;
      this.$toolbar = context.layoutInfo.toolbar;
      this.options = context.options;
      this.lang = this.options.langInfo;
      this.invertedKeyMap = func.invertObject(this.options.keyMap[env.isMac ? "mac" : "pc"]);
    }
    return _createClass(Buttons, [{
      key: "representShortcut",
      value: function representShortcut(editorMethod) {
        var shortcut = this.invertedKeyMap[editorMethod];
        if (!this.options.shortcuts || !shortcut) {
          return "";
        }
        if (env.isMac) {
          shortcut = shortcut.replace("CMD", "⌘").replace("SHIFT", "⇧");
        }
        shortcut = shortcut.replace("BACKSLASH", "\\").replace("SLASH", "/").replace("LEFTBRACKET", "[").replace("RIGHTBRACKET", "]");
        return " (" + shortcut + ")";
      }
    }, {
      key: "button",
      value: function button(o) {
        if (!this.options.tooltip && o.tooltip) {
          delete o.tooltip;
        }
        o.container = this.options.container;
        return this.ui.button(o);
      }
    }, {
      key: "initialize",
      value: function initialize() {
        this.addToolbarButtons();
        this.addImagePopoverButtons();
        this.addLinkPopoverButtons();
        this.addTablePopoverButtons();
        this.fontInstalledMap = {};
      }
    }, {
      key: "destroy",
      value: function destroy() {
        delete this.fontInstalledMap;
      }
    }, {
      key: "isFontInstalled",
      value: function isFontInstalled(name) {
        if (!Object.prototype.hasOwnProperty.call(this.fontInstalledMap, name)) {
          this.fontInstalledMap[name] = env.isFontInstalled(name) || lists.contains(this.options.fontNamesIgnoreCheck, name);
        }
        return this.fontInstalledMap[name];
      }
    }, {
      key: "isFontDeservedToAdd",
      value: function isFontDeservedToAdd(name) {
        name = name.toLowerCase();
        return name !== "" && this.isFontInstalled(name) && env.genericFontFamilies.indexOf(name) === -1;
      }
    }, {
      key: "colorPalette",
      value: function colorPalette(className, tooltip, backColor, foreColor) {
        var _this27 = this;
        return this.ui.buttonGroup({
          className: "note-color " + className,
          children: [this.button({
            className: "note-current-color-button",
            contents: this.ui.icon(this.options.icons.font + " note-recent-color"),
            tooltip: tooltip,
            click: function click(event) {
              var $button = $(event.currentTarget);
              if (backColor && foreColor) {
                _this27.context.invoke("editor.color", {
                  backColor: $button.attr("data-backColor"),
                  foreColor: $button.attr("data-foreColor")
                });
              } else if (backColor) {
                _this27.context.invoke("editor.color", {
                  backColor: $button.attr("data-backColor")
                });
              } else if (foreColor) {
                _this27.context.invoke("editor.color", {
                  foreColor: $button.attr("data-foreColor")
                });
              }
            },
            callback: function callback($button) {
              var $recentColor = $button.find(".note-recent-color");
              if (backColor) {
                $recentColor.css("background-color", _this27.options.colorButton.backColor);
                $button.attr("data-backColor", _this27.options.colorButton.backColor);
              }
              if (foreColor) {
                $recentColor.css("color", _this27.options.colorButton.foreColor);
                $button.attr("data-foreColor", _this27.options.colorButton.foreColor);
              } else {
                $recentColor.css("color", "transparent");
              }
            }
          }), this.button({
            className: "dropdown-toggle",
            contents: this.ui.dropdownButtonContents("", this.options),
            tooltip: this.lang.color.more,
            data: {
              toggle: "dropdown"
            }
          }), this.ui.dropdown({
            items: (backColor ? ['<div class="note-palette">', '<div class="note-palette-title">' + this.lang.color.background + "</div>", "<div>", '<button type="button" class="note-color-reset btn btn-light btn-default" data-event="backColor" data-value="transparent">', this.lang.color.transparent, "</button>", "</div>", '<div class="note-holder" data-event="backColor"><!-- back colors --></div>', "<div>", '<button type="button" class="note-color-select btn btn-light btn-default" data-event="openPalette" data-value="backColorPicker-' + this.options.id + '">', this.lang.color.cpSelect, "</button>", '<input type="color" id="backColorPicker-' + this.options.id + '" class="note-btn note-color-select-btn" value="' + this.options.colorButton.backColor + '" data-event="backColorPalette-' + this.options.id + '">', "</div>", '<div class="note-holder-custom" id="backColorPalette-' + this.options.id + '" data-event="backColor"></div>', "</div>"].join("") : "") + (foreColor ? ['<div class="note-palette">', '<div class="note-palette-title">' + this.lang.color.foreground + "</div>", "<div>", '<button type="button" class="note-color-reset btn btn-light btn-default" data-event="removeFormat" data-value="foreColor">', this.lang.color.resetToDefault, "</button>", "</div>", '<div class="note-holder" data-event="foreColor"><!-- fore colors --></div>', "<div>", '<button type="button" class="note-color-select btn btn-light btn-default" data-event="openPalette" data-value="foreColorPicker-' + this.options.id + '">', this.lang.color.cpSelect, "</button>", '<input type="color" id="foreColorPicker-' + this.options.id + '" class="note-btn note-color-select-btn" value="' + this.options.colorButton.foreColor + '" data-event="foreColorPalette-' + this.options.id + '">', "</div>",
            // Fix missing Div, Commented to find easily if it's wrong
            '<div class="note-holder-custom" id="foreColorPalette-' + this.options.id + '" data-event="foreColor"></div>', "</div>"].join("") : ""),
            callback: function callback($dropdown) {
              $dropdown.find(".note-holder").each(function (idx, item) {
                var $holder = $(item);
                $holder.append(_this27.ui.palette({
                  colors: _this27.options.colors,
                  colorsName: _this27.options.colorsName,
                  eventName: $holder.data("event"),
                  container: _this27.options.container,
                  tooltip: _this27.options.tooltip
                }).render());
              });
              var customColors = [["#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF"]];
              $dropdown.find(".note-holder-custom").each(function (idx, item) {
                var $holder = $(item);
                $holder.append(_this27.ui.palette({
                  colors: customColors,
                  colorsName: customColors,
                  eventName: $holder.data("event"),
                  container: _this27.options.container,
                  tooltip: _this27.options.tooltip
                }).render());
              });
              $dropdown.find("input[type=color]").each(function (idx, item) {
                $(item).on("change", function () {
                  var $chip = $dropdown.find("#" + $(this).data("event")).find(".note-color-btn").first();
                  var color = this.value.toUpperCase();
                  $chip.css("background-color", color).attr("aria-label", color).attr("data-value", color).attr("data-original-title", color);
                  $chip.trigger("click");
                });
              });
            },
            click: function click(event) {
              event.stopPropagation();
              var $parent = $("." + className).find(".note-dropdown-menu");
              var $button = $(event.target);
              var eventName = $button.data("event");
              var value2 = $button.attr("data-value");
              if (eventName === "openPalette") {
                var $picker = $parent.find("#" + value2);
                var $palette = $($parent.find("#" + $picker.data("event")).find(".note-color-row")[0]);
                var $chip = $palette.find(".note-color-btn").last().detach();
                var color = $picker.val();
                $chip.css("background-color", color).attr("aria-label", color).attr("data-value", color).attr("data-original-title", color);
                $palette.prepend($chip);
                $picker.trigger("click");
              } else {
                if (lists.contains(["backColor", "foreColor"], eventName)) {
                  var key2 = eventName === "backColor" ? "background-color" : "color";
                  var $color = $button.closest(".note-color").find(".note-recent-color");
                  var $currentButton = $button.closest(".note-color").find(".note-current-color-button");
                  $color.css(key2, value2);
                  $currentButton.attr("data-" + eventName, value2);
                }
                _this27.context.invoke("editor." + eventName, value2);
              }
            }
          })]
        }).render();
      }
    }, {
      key: "addToolbarButtons",
      value: function addToolbarButtons() {
        var _this28 = this;
        this.context.memo("button.style", function () {
          return _this28.ui.buttonGroup([_this28.button({
            className: "dropdown-toggle",
            contents: _this28.ui.dropdownButtonContents(_this28.ui.icon(_this28.options.icons.magic), _this28.options),
            tooltip: _this28.lang.style.style,
            data: {
              toggle: "dropdown"
            }
          }), _this28.ui.dropdown({
            className: "dropdown-style",
            items: _this28.options.styleTags,
            title: _this28.lang.style.style,
            template: function template(item) {
              if (typeof item === "string") {
                item = {
                  tag: item,
                  title: Object.prototype.hasOwnProperty.call(_this28.lang.style, item) ? _this28.lang.style[item] : item
                };
              }
              var tag = item.tag;
              var title = item.title;
              var style = item.style ? ' style="' + item.style + '" ' : "";
              var className = item.className ? ' class="' + item.className + '"' : "";
              return "<" + tag + style + className + ">" + title + "</" + tag + ">";
            },
            click: _this28.context.createInvokeHandler("editor.formatBlock")
          })]).render();
        });
        var _loop = function _loop() {
          var item = _this28.options.styleTags[styleIdx];
          _this28.context.memo("button.style." + item, function () {
            return _this28.button({
              className: "note-btn-style-" + item,
              contents: '<div data-value="' + item + '">' + item.toUpperCase() + "</div>",
              tooltip: _this28.lang.style[item],
              click: _this28.context.createInvokeHandler("editor.formatBlock")
            }).render();
          });
        };
        for (var styleIdx = 0, styleLen = this.options.styleTags.length; styleIdx < styleLen; styleIdx++) {
          _loop();
        }
        this.context.memo("button.bold", function () {
          return _this28.button({
            className: "note-btn-bold",
            contents: _this28.ui.icon(_this28.options.icons.bold),
            tooltip: _this28.lang.font.bold + _this28.representShortcut("bold"),
            click: _this28.context.createInvokeHandlerAndUpdateState("editor.bold")
          }).render();
        });
        this.context.memo("button.italic", function () {
          return _this28.button({
            className: "note-btn-italic",
            contents: _this28.ui.icon(_this28.options.icons.italic),
            tooltip: _this28.lang.font.italic + _this28.representShortcut("italic"),
            click: _this28.context.createInvokeHandlerAndUpdateState("editor.italic")
          }).render();
        });
        this.context.memo("button.underline", function () {
          return _this28.button({
            className: "note-btn-underline",
            contents: _this28.ui.icon(_this28.options.icons.underline),
            tooltip: _this28.lang.font.underline + _this28.representShortcut("underline"),
            click: _this28.context.createInvokeHandlerAndUpdateState("editor.underline")
          }).render();
        });
        this.context.memo("button.clear", function () {
          return _this28.button({
            contents: _this28.ui.icon(_this28.options.icons.eraser),
            tooltip: _this28.lang.font.clear + _this28.representShortcut("removeFormat"),
            click: _this28.context.createInvokeHandler("editor.removeFormat")
          }).render();
        });
        this.context.memo("button.strikethrough", function () {
          return _this28.button({
            className: "note-btn-strikethrough",
            contents: _this28.ui.icon(_this28.options.icons.strikethrough),
            tooltip: _this28.lang.font.strikethrough + _this28.representShortcut("strikethrough"),
            click: _this28.context.createInvokeHandlerAndUpdateState("editor.strikethrough")
          }).render();
        });
        this.context.memo("button.superscript", function () {
          return _this28.button({
            className: "note-btn-superscript",
            contents: _this28.ui.icon(_this28.options.icons.superscript),
            tooltip: _this28.lang.font.superscript,
            click: _this28.context.createInvokeHandlerAndUpdateState("editor.superscript")
          }).render();
        });
        this.context.memo("button.subscript", function () {
          return _this28.button({
            className: "note-btn-subscript",
            contents: _this28.ui.icon(_this28.options.icons.subscript),
            tooltip: _this28.lang.font.subscript,
            click: _this28.context.createInvokeHandlerAndUpdateState("editor.subscript")
          }).render();
        });
        this.context.memo("button.fontname", function () {
          var styleInfo = _this28.context.invoke("editor.currentStyle");
          if (_this28.options.addDefaultFonts) {
            $.each(styleInfo["font-family"].split(","), function (idx, fontname) {
              fontname = fontname.trim().replace(/['"]+/g, "");
              if (_this28.isFontDeservedToAdd(fontname)) {
                if (_this28.options.fontNames.indexOf(fontname) === -1) {
                  _this28.options.fontNames.push(fontname);
                }
              }
            });
          }
          return _this28.ui.buttonGroup([_this28.button({
            className: "dropdown-toggle",
            contents: _this28.ui.dropdownButtonContents('<span class="note-current-fontname"></span>', _this28.options),
            tooltip: _this28.lang.font.name,
            data: {
              toggle: "dropdown"
            }
          }), _this28.ui.dropdownCheck({
            className: "dropdown-fontname",
            checkClassName: _this28.options.icons.menuCheck,
            items: _this28.options.fontNames.filter(_this28.isFontInstalled.bind(_this28)),
            title: _this28.lang.font.name,
            template: function template(item) {
              return '<span style="font-family: ' + env.validFontName(item) + '">' + item + "</span>";
            },
            click: _this28.context.createInvokeHandlerAndUpdateState("editor.fontName")
          })]).render();
        });
        this.context.memo("button.fontsize", function () {
          return _this28.ui.buttonGroup([_this28.button({
            className: "dropdown-toggle",
            contents: _this28.ui.dropdownButtonContents('<span class="note-current-fontsize"></span>', _this28.options),
            tooltip: _this28.lang.font.size,
            data: {
              toggle: "dropdown"
            }
          }), _this28.ui.dropdownCheck({
            className: "dropdown-fontsize",
            checkClassName: _this28.options.icons.menuCheck,
            items: _this28.options.fontSizes,
            title: _this28.lang.font.size,
            click: _this28.context.createInvokeHandlerAndUpdateState("editor.fontSize")
          })]).render();
        });
        this.context.memo("button.fontsizeunit", function () {
          return _this28.ui.buttonGroup([_this28.button({
            className: "dropdown-toggle",
            contents: _this28.ui.dropdownButtonContents('<span class="note-current-fontsizeunit"></span>', _this28.options),
            tooltip: _this28.lang.font.sizeunit,
            data: {
              toggle: "dropdown"
            }
          }), _this28.ui.dropdownCheck({
            className: "dropdown-fontsizeunit",
            checkClassName: _this28.options.icons.menuCheck,
            items: _this28.options.fontSizeUnits,
            title: _this28.lang.font.sizeunit,
            click: _this28.context.createInvokeHandlerAndUpdateState("editor.fontSizeUnit")
          })]).render();
        });
        this.context.memo("button.color", function () {
          return _this28.colorPalette("note-color-all", _this28.lang.color.recent, true, true);
        });
        this.context.memo("button.forecolor", function () {
          return _this28.colorPalette("note-color-fore", _this28.lang.color.foreground, false, true);
        });
        this.context.memo("button.backcolor", function () {
          return _this28.colorPalette("note-color-back", _this28.lang.color.background, true, false);
        });
        this.context.memo("button.ul", function () {
          return _this28.button({
            contents: _this28.ui.icon(_this28.options.icons.unorderedlist),
            tooltip: _this28.lang.lists.unordered + _this28.representShortcut("insertUnorderedList"),
            click: _this28.context.createInvokeHandler("editor.insertUnorderedList")
          }).render();
        });
        this.context.memo("button.ol", function () {
          return _this28.button({
            contents: _this28.ui.icon(_this28.options.icons.orderedlist),
            tooltip: _this28.lang.lists.ordered + _this28.representShortcut("insertOrderedList"),
            click: _this28.context.createInvokeHandler("editor.insertOrderedList")
          }).render();
        });
        var justifyLeft = this.button({
          contents: this.ui.icon(this.options.icons.alignLeft),
          tooltip: this.lang.paragraph.left + this.representShortcut("justifyLeft"),
          click: this.context.createInvokeHandler("editor.justifyLeft")
        });
        var justifyCenter = this.button({
          contents: this.ui.icon(this.options.icons.alignCenter),
          tooltip: this.lang.paragraph.center + this.representShortcut("justifyCenter"),
          click: this.context.createInvokeHandler("editor.justifyCenter")
        });
        var justifyRight = this.button({
          contents: this.ui.icon(this.options.icons.alignRight),
          tooltip: this.lang.paragraph.right + this.representShortcut("justifyRight"),
          click: this.context.createInvokeHandler("editor.justifyRight")
        });
        var justifyFull = this.button({
          contents: this.ui.icon(this.options.icons.alignJustify),
          tooltip: this.lang.paragraph.justify + this.representShortcut("justifyFull"),
          click: this.context.createInvokeHandler("editor.justifyFull")
        });
        var outdent = this.button({
          contents: this.ui.icon(this.options.icons.outdent),
          tooltip: this.lang.paragraph.outdent + this.representShortcut("outdent"),
          click: this.context.createInvokeHandler("editor.outdent")
        });
        var indent = this.button({
          contents: this.ui.icon(this.options.icons.indent),
          tooltip: this.lang.paragraph.indent + this.representShortcut("indent"),
          click: this.context.createInvokeHandler("editor.indent")
        });
        this.context.memo("button.justifyLeft", func.invoke(justifyLeft, "render"));
        this.context.memo("button.justifyCenter", func.invoke(justifyCenter, "render"));
        this.context.memo("button.justifyRight", func.invoke(justifyRight, "render"));
        this.context.memo("button.justifyFull", func.invoke(justifyFull, "render"));
        this.context.memo("button.outdent", func.invoke(outdent, "render"));
        this.context.memo("button.indent", func.invoke(indent, "render"));
        this.context.memo("button.paragraph", function () {
          return _this28.ui.buttonGroup([_this28.button({
            className: "dropdown-toggle",
            contents: _this28.ui.dropdownButtonContents(_this28.ui.icon(_this28.options.icons.alignLeft), _this28.options),
            tooltip: _this28.lang.paragraph.paragraph,
            data: {
              toggle: "dropdown"
            }
          }), _this28.ui.dropdown([_this28.ui.buttonGroup({
            className: "note-align",
            children: [justifyLeft, justifyCenter, justifyRight, justifyFull]
          }), _this28.ui.buttonGroup({
            className: "note-list",
            children: [outdent, indent]
          })])]).render();
        });
        this.context.memo("button.height", function () {
          return _this28.ui.buttonGroup([_this28.button({
            className: "dropdown-toggle",
            contents: _this28.ui.dropdownButtonContents(_this28.ui.icon(_this28.options.icons.textHeight), _this28.options),
            tooltip: _this28.lang.font.height,
            data: {
              toggle: "dropdown"
            }
          }), _this28.ui.dropdownCheck({
            items: _this28.options.lineHeights,
            checkClassName: _this28.options.icons.menuCheck,
            className: "dropdown-line-height",
            title: _this28.lang.font.height,
            click: _this28.context.createInvokeHandler("editor.lineHeight")
          })]).render();
        });
        this.context.memo("button.table", function () {
          return _this28.ui.buttonGroup([_this28.button({
            className: "dropdown-toggle",
            contents: _this28.ui.dropdownButtonContents(_this28.ui.icon(_this28.options.icons.table), _this28.options),
            tooltip: _this28.lang.table.table,
            data: {
              toggle: "dropdown"
            }
          }), _this28.ui.dropdown({
            title: _this28.lang.table.table,
            className: "note-table",
            items: ['<div class="note-dimension-picker">', '<div class="note-dimension-picker-mousecatcher" data-event="insertTable" data-value="1x1"></div>', '<div class="note-dimension-picker-highlighted"></div>', '<div class="note-dimension-picker-unhighlighted"></div>', "</div>", '<div class="note-dimension-display">1 x 1</div>'].join("")
          })], {
            callback: function callback($node) {
              var $catcher = $node.find(".note-dimension-picker-mousecatcher");
              $catcher.css({
                width: _this28.options.insertTableMaxSize.col + "em",
                height: _this28.options.insertTableMaxSize.row + "em"
              }).on("mousedown", _this28.context.createInvokeHandler("editor.insertTable")).on("mousemove", _this28.tableMoveHandler.bind(_this28));
            }
          }).render();
        });
        this.context.memo("button.link", function () {
          return _this28.button({
            contents: _this28.ui.icon(_this28.options.icons.link),
            tooltip: _this28.lang.link.link + _this28.representShortcut("linkDialog.show"),
            click: _this28.context.createInvokeHandler("linkDialog.show")
          }).render();
        });
        this.context.memo("button.picture", function () {
          return _this28.button({
            contents: _this28.ui.icon(_this28.options.icons.picture),
            tooltip: _this28.lang.image.image,
            click: _this28.context.createInvokeHandler("imageDialog.show")
          }).render();
        });
        this.context.memo("button.video", function () {
          return _this28.button({
            contents: _this28.ui.icon(_this28.options.icons.video),
            tooltip: _this28.lang.video.video,
            click: _this28.context.createInvokeHandler("videoDialog.show")
          }).render();
        });
        this.context.memo("button.hr", function () {
          return _this28.button({
            contents: _this28.ui.icon(_this28.options.icons.minus),
            tooltip: _this28.lang.hr.insert + _this28.representShortcut("insertHorizontalRule"),
            click: _this28.context.createInvokeHandler("editor.insertHorizontalRule")
          }).render();
        });
        this.context.memo("button.fullscreen", function () {
          return _this28.button({
            className: "btn-fullscreen note-codeview-keep",
            contents: _this28.ui.icon(_this28.options.icons.arrowsAlt),
            tooltip: _this28.lang.options.fullscreen,
            click: _this28.context.createInvokeHandler("fullscreen.toggle")
          }).render();
        });
        this.context.memo("button.codeview", function () {
          return _this28.button({
            className: "btn-codeview note-codeview-keep",
            contents: _this28.ui.icon(_this28.options.icons.code),
            tooltip: _this28.lang.options.codeview,
            click: _this28.context.createInvokeHandler("codeview.toggle")
          }).render();
        });
        this.context.memo("button.redo", function () {
          return _this28.button({
            contents: _this28.ui.icon(_this28.options.icons.redo),
            tooltip: _this28.lang.history.redo + _this28.representShortcut("redo"),
            click: _this28.context.createInvokeHandler("editor.redo")
          }).render();
        });
        this.context.memo("button.undo", function () {
          return _this28.button({
            contents: _this28.ui.icon(_this28.options.icons.undo),
            tooltip: _this28.lang.history.undo + _this28.representShortcut("undo"),
            click: _this28.context.createInvokeHandler("editor.undo")
          }).render();
        });
        this.context.memo("button.help", function () {
          return _this28.button({
            contents: _this28.ui.icon(_this28.options.icons.question),
            tooltip: _this28.lang.options.help,
            click: _this28.context.createInvokeHandler("helpDialog.show")
          }).render();
        });
      }
      /**
       * image: [
       *   ['imageResize', ['resizeFull', 'resizeHalf', 'resizeQuarter', 'resizeNone']],
       *   ['float', ['floatLeft', 'floatRight', 'floatNone']],
       *   ['remove', ['removeMedia']],
       * ],
       */
    }, {
      key: "addImagePopoverButtons",
      value: function addImagePopoverButtons() {
        var _this29 = this;
        this.context.memo("button.resizeFull", function () {
          return _this29.button({
            contents: '<span class="note-fontsize-10">100%</span>',
            tooltip: _this29.lang.image.resizeFull,
            click: _this29.context.createInvokeHandler("editor.resize", "1")
          }).render();
        });
        this.context.memo("button.resizeHalf", function () {
          return _this29.button({
            contents: '<span class="note-fontsize-10">50%</span>',
            tooltip: _this29.lang.image.resizeHalf,
            click: _this29.context.createInvokeHandler("editor.resize", "0.5")
          }).render();
        });
        this.context.memo("button.resizeQuarter", function () {
          return _this29.button({
            contents: '<span class="note-fontsize-10">25%</span>',
            tooltip: _this29.lang.image.resizeQuarter,
            click: _this29.context.createInvokeHandler("editor.resize", "0.25")
          }).render();
        });
        this.context.memo("button.resizeNone", function () {
          return _this29.button({
            contents: _this29.ui.icon(_this29.options.icons.rollback),
            tooltip: _this29.lang.image.resizeNone,
            click: _this29.context.createInvokeHandler("editor.resize", "0")
          }).render();
        });
        this.context.memo("button.floatLeft", function () {
          return _this29.button({
            contents: _this29.ui.icon(_this29.options.icons.floatLeft),
            tooltip: _this29.lang.image.floatLeft,
            click: _this29.context.createInvokeHandler("editor.floatMe", "left")
          }).render();
        });
        this.context.memo("button.floatRight", function () {
          return _this29.button({
            contents: _this29.ui.icon(_this29.options.icons.floatRight),
            tooltip: _this29.lang.image.floatRight,
            click: _this29.context.createInvokeHandler("editor.floatMe", "right")
          }).render();
        });
        this.context.memo("button.floatNone", function () {
          return _this29.button({
            contents: _this29.ui.icon(_this29.options.icons.rollback),
            tooltip: _this29.lang.image.floatNone,
            click: _this29.context.createInvokeHandler("editor.floatMe", "none")
          }).render();
        });
        this.context.memo("button.removeMedia", function () {
          return _this29.button({
            contents: _this29.ui.icon(_this29.options.icons.trash),
            tooltip: _this29.lang.image.remove,
            click: _this29.context.createInvokeHandler("editor.removeMedia")
          }).render();
        });
      }
    }, {
      key: "addLinkPopoverButtons",
      value: function addLinkPopoverButtons() {
        var _this30 = this;
        this.context.memo("button.linkDialogShow", function () {
          return _this30.button({
            contents: _this30.ui.icon(_this30.options.icons.link),
            tooltip: _this30.lang.link.edit,
            click: _this30.context.createInvokeHandler("linkDialog.show")
          }).render();
        });
        this.context.memo("button.unlink", function () {
          return _this30.button({
            contents: _this30.ui.icon(_this30.options.icons.unlink),
            tooltip: _this30.lang.link.unlink,
            click: _this30.context.createInvokeHandler("editor.unlink")
          }).render();
        });
      }
      /**
       * table : [
       *  ['add', ['addRowDown', 'addRowUp', 'addColLeft', 'addColRight']],
       *  ['delete', ['deleteRow', 'deleteCol', 'deleteTable']]
       * ],
       */
    }, {
      key: "addTablePopoverButtons",
      value: function addTablePopoverButtons() {
        var _this31 = this;
        this.context.memo("button.addRowUp", function () {
          return _this31.button({
            className: "btn-md",
            contents: _this31.ui.icon(_this31.options.icons.rowAbove),
            tooltip: _this31.lang.table.addRowAbove,
            click: _this31.context.createInvokeHandler("editor.addRow", "top")
          }).render();
        });
        this.context.memo("button.addRowDown", function () {
          return _this31.button({
            className: "btn-md",
            contents: _this31.ui.icon(_this31.options.icons.rowBelow),
            tooltip: _this31.lang.table.addRowBelow,
            click: _this31.context.createInvokeHandler("editor.addRow", "bottom")
          }).render();
        });
        this.context.memo("button.addColLeft", function () {
          return _this31.button({
            className: "btn-md",
            contents: _this31.ui.icon(_this31.options.icons.colBefore),
            tooltip: _this31.lang.table.addColLeft,
            click: _this31.context.createInvokeHandler("editor.addCol", "left")
          }).render();
        });
        this.context.memo("button.addColRight", function () {
          return _this31.button({
            className: "btn-md",
            contents: _this31.ui.icon(_this31.options.icons.colAfter),
            tooltip: _this31.lang.table.addColRight,
            click: _this31.context.createInvokeHandler("editor.addCol", "right")
          }).render();
        });
        this.context.memo("button.deleteRow", function () {
          return _this31.button({
            className: "btn-md",
            contents: _this31.ui.icon(_this31.options.icons.rowRemove),
            tooltip: _this31.lang.table.delRow,
            click: _this31.context.createInvokeHandler("editor.deleteRow")
          }).render();
        });
        this.context.memo("button.deleteCol", function () {
          return _this31.button({
            className: "btn-md",
            contents: _this31.ui.icon(_this31.options.icons.colRemove),
            tooltip: _this31.lang.table.delCol,
            click: _this31.context.createInvokeHandler("editor.deleteCol")
          }).render();
        });
        this.context.memo("button.deleteTable", function () {
          return _this31.button({
            className: "btn-md",
            contents: _this31.ui.icon(_this31.options.icons.trash),
            tooltip: _this31.lang.table.delTable,
            click: _this31.context.createInvokeHandler("editor.deleteTable")
          }).render();
        });
      }
    }, {
      key: "build",
      value: function build($container, groups) {
        for (var groupIdx = 0, groupLen = groups.length; groupIdx < groupLen; groupIdx++) {
          var group = groups[groupIdx];
          var groupName = Array.isArray(group) ? group[0] : group;
          var buttons = Array.isArray(group) ? group.length === 1 ? [group[0]] : group[1] : [group];
          var $group = this.ui.buttonGroup({
            className: "note-" + groupName
          }).render();
          for (var idx = 0, len = buttons.length; idx < len; idx++) {
            var btn = this.context.memo("button." + buttons[idx]);
            if (btn) {
              $group.append(typeof btn === "function" ? btn(this.context) : btn);
            }
          }
          $group.appendTo($container);
        }
      }
      /**
       * @param {jQuery} [$container]
       */
    }, {
      key: "updateCurrentStyle",
      value: function updateCurrentStyle($container) {
        var $cont = $container || this.$toolbar;
        var styleInfo = this.context.invoke("editor.currentStyle");
        this.updateBtnStates($cont, {
          ".note-btn-bold": function noteBtnBold() {
            return styleInfo["font-bold"] === "bold";
          },
          ".note-btn-italic": function noteBtnItalic() {
            return styleInfo["font-italic"] === "italic";
          },
          ".note-btn-underline": function noteBtnUnderline() {
            return styleInfo["font-underline"] === "underline";
          },
          ".note-btn-subscript": function noteBtnSubscript() {
            return styleInfo["font-subscript"] === "subscript";
          },
          ".note-btn-superscript": function noteBtnSuperscript() {
            return styleInfo["font-superscript"] === "superscript";
          },
          ".note-btn-strikethrough": function noteBtnStrikethrough() {
            return styleInfo["font-strikethrough"] === "strikethrough";
          }
        });
        if (styleInfo["font-family"]) {
          var fontNames = styleInfo["font-family"].split(",").map(function (name) {
            return name.replace(/[\'\"]/g, "").replace(/\s+$/, "").replace(/^\s+/, "");
          });
          var fontName = lists.find(fontNames, this.isFontInstalled.bind(this));
          $cont.find(".dropdown-fontname a").each(function (idx, item) {
            var $item = $(item);
            var isChecked = $item.data("value") + "" === fontName + "";
            $item.toggleClass("checked", isChecked);
          });
          $cont.find(".note-current-fontname").text(fontName).css("font-family", fontName);
        }
        if (styleInfo["font-size"]) {
          var fontSize = styleInfo["font-size"];
          $cont.find(".dropdown-fontsize a").each(function (idx, item) {
            var $item = $(item);
            var isChecked = $item.data("value") + "" === fontSize + "";
            $item.toggleClass("checked", isChecked);
          });
          $cont.find(".note-current-fontsize").text(fontSize);
          var fontSizeUnit = styleInfo["font-size-unit"];
          $cont.find(".dropdown-fontsizeunit a").each(function (idx, item) {
            var $item = $(item);
            var isChecked = $item.data("value") + "" === fontSizeUnit + "";
            $item.toggleClass("checked", isChecked);
          });
          $cont.find(".note-current-fontsizeunit").text(fontSizeUnit);
        }
        if (styleInfo["line-height"]) {
          var lineHeight = styleInfo["line-height"];
          $cont.find(".dropdown-line-height a").each(function (idx, item) {
            var $item = $(item);
            var isChecked = $(item).data("value") + "" === lineHeight + "";
            $item.toggleClass("checked", isChecked);
          });
          $cont.find(".note-current-line-height").text(lineHeight);
        }
      }
    }, {
      key: "updateBtnStates",
      value: function updateBtnStates($container, infos) {
        var _this32 = this;
        $.each(infos, function (selector, pred) {
          _this32.ui.toggleBtnActive($container.find(selector), pred());
        });
      }
    }, {
      key: "tableMoveHandler",
      value: function tableMoveHandler(event) {
        var PX_PER_EM = 18;
        var $picker = $(event.target.parentNode);
        var $dimensionDisplay = $picker.next();
        var $catcher = $picker.find(".note-dimension-picker-mousecatcher");
        var $highlighted = $picker.find(".note-dimension-picker-highlighted");
        var $unhighlighted = $picker.find(".note-dimension-picker-unhighlighted");
        var posOffset;
        if (event.offsetX === void 0) {
          var posCatcher = $(event.target).offset();
          posOffset = {
            x: event.pageX - posCatcher.left,
            y: event.pageY - posCatcher.top
          };
        } else {
          posOffset = {
            x: event.offsetX,
            y: event.offsetY
          };
        }
        var dim = {
          c: Math.ceil(posOffset.x / PX_PER_EM) || 1,
          r: Math.ceil(posOffset.y / PX_PER_EM) || 1
        };
        $highlighted.css({
          width: dim.c + "em",
          height: dim.r + "em"
        });
        $catcher.data("value", dim.c + "x" + dim.r);
        if (dim.c > 3 && dim.c < this.options.insertTableMaxSize.col) {
          $unhighlighted.css({
            width: dim.c + 1 + "em"
          });
        }
        if (dim.r > 3 && dim.r < this.options.insertTableMaxSize.row) {
          $unhighlighted.css({
            height: dim.r + 1 + "em"
          });
        }
        $dimensionDisplay.html(dim.c + " x " + dim.r);
      }
    }]);
  }();
  var Toolbar = /*#__PURE__*/function () {
    function Toolbar(context) {
      _classCallCheck(this, Toolbar);
      this.context = context;
      this.$window = $(window);
      this.$document = $(document);
      this.ui = $.summernote.ui;
      this.$note = context.layoutInfo.note;
      this.$editor = context.layoutInfo.editor;
      this.$toolbar = context.layoutInfo.toolbar;
      this.$editable = context.layoutInfo.editable;
      this.$statusbar = context.layoutInfo.statusbar;
      this.options = context.options;
      this.isFollowing = false;
      this.followScroll = this.followScroll.bind(this);
    }
    return _createClass(Toolbar, [{
      key: "shouldInitialize",
      value: function shouldInitialize() {
        return !this.options.airMode;
      }
    }, {
      key: "initialize",
      value: function initialize() {
        var _this33 = this;
        this.options.toolbar = this.options.toolbar || [];
        if (!this.options.toolbar.length) {
          this.$toolbar.hide();
        } else {
          this.context.invoke("buttons.build", this.$toolbar, this.options.toolbar);
        }
        if (this.options.toolbarContainer) {
          this.$toolbar.appendTo(this.options.toolbarContainer);
        }
        this.changeContainer(false);
        this.$note.on("summernote.keyup summernote.mouseup summernote.change", function () {
          _this33.context.invoke("buttons.updateCurrentStyle");
        });
        this.context.invoke("buttons.updateCurrentStyle");
        if (this.options.followingToolbar) {
          this.$window.on("scroll resize", this.followScroll);
        }
      }
    }, {
      key: "destroy",
      value: function destroy() {
        this.$toolbar.children().remove();
        if (this.options.followingToolbar) {
          this.$window.off("scroll resize", this.followScroll);
        }
      }
    }, {
      key: "followScroll",
      value: function followScroll() {
        if (this.$editor.hasClass("fullscreen")) {
          return false;
        }
        var editorHeight = this.$editor.outerHeight();
        var editorWidth = this.$editor.width();
        var toolbarHeight = this.$toolbar.height();
        var statusbarHeight = this.$statusbar.height();
        var otherBarHeight = 0;
        if (this.options.otherStaticBar) {
          otherBarHeight = $(this.options.otherStaticBar).outerHeight();
        }
        var currentOffset = this.$document.scrollTop();
        var editorOffsetTop = this.$editor.offset().top;
        var editorOffsetBottom = editorOffsetTop + editorHeight;
        var activateOffset = editorOffsetTop - otherBarHeight;
        var deactivateOffsetBottom = editorOffsetBottom - otherBarHeight - toolbarHeight - statusbarHeight;
        if (!this.isFollowing && currentOffset > activateOffset && currentOffset < deactivateOffsetBottom - toolbarHeight) {
          this.isFollowing = true;
          this.$editable.css({
            marginTop: this.$toolbar.outerHeight()
          });
          this.$toolbar.css({
            position: "fixed",
            top: otherBarHeight,
            width: editorWidth,
            zIndex: 1e3
          });
        } else if (this.isFollowing && (currentOffset < activateOffset || currentOffset > deactivateOffsetBottom)) {
          this.isFollowing = false;
          this.$toolbar.css({
            position: "relative",
            top: 0,
            width: "100%",
            zIndex: "auto"
          });
          this.$editable.css({
            marginTop: ""
          });
        }
      }
    }, {
      key: "changeContainer",
      value: function changeContainer(isFullscreen) {
        if (isFullscreen) {
          this.$toolbar.prependTo(this.$editor);
        } else {
          if (this.options.toolbarContainer) {
            this.$toolbar.appendTo(this.options.toolbarContainer);
          }
        }
        if (this.options.followingToolbar) {
          this.followScroll();
        }
      }
    }, {
      key: "updateFullscreen",
      value: function updateFullscreen(isFullscreen) {
        this.ui.toggleBtnActive(this.$toolbar.find(".btn-fullscreen"), isFullscreen);
        this.changeContainer(isFullscreen);
      }
    }, {
      key: "updateCodeview",
      value: function updateCodeview(isCodeview) {
        this.ui.toggleBtnActive(this.$toolbar.find(".btn-codeview"), isCodeview);
        if (isCodeview) {
          this.deactivate();
        } else {
          this.activate();
        }
      }
    }, {
      key: "activate",
      value: function activate(isIncludeCodeview) {
        var $btn = this.$toolbar.find("button");
        if (!isIncludeCodeview) {
          $btn = $btn.not(".note-codeview-keep");
        }
        this.ui.toggleBtn($btn, true);
      }
    }, {
      key: "deactivate",
      value: function deactivate(isIncludeCodeview) {
        var $btn = this.$toolbar.find("button");
        if (!isIncludeCodeview) {
          $btn = $btn.not(".note-codeview-keep");
        }
        this.ui.toggleBtn($btn, false);
      }
    }]);
  }();
  var MAILTO_PATTERN = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  var TEL_PATTERN = /^(\+?\d{1,3}[\s-]?)?(\d{1,4})[\s-]?(\d{1,4})[\s-]?(\d{1,4})$/;
  var URL_SCHEME_PATTERN = /^([A-Za-z][A-Za-z0-9+-.]*\:|#|\/)/;
  var LinkDialog = /*#__PURE__*/function () {
    function LinkDialog(context) {
      _classCallCheck(this, LinkDialog);
      this.context = context;
      this.ui = $.summernote.ui;
      this.$body = $(document.body);
      this.$editor = context.layoutInfo.editor;
      this.options = context.options;
      this.lang = this.options.langInfo;
      context.memo("help.linkDialog.show", this.options.langInfo.help["linkDialog.show"]);
    }
    return _createClass(LinkDialog, [{
      key: "initialize",
      value: function initialize() {
        var $container = this.options.dialogsInBody ? this.$body : this.options.container;
        var body = ['<div class="form-group note-form-group">', "<label for=\"note-dialog-link-txt-".concat(this.options.id, "\" class=\"note-form-label\">").concat(this.lang.link.textToDisplay, "</label>"), "<input id=\"note-dialog-link-txt-".concat(this.options.id, "\" class=\"note-link-text form-control note-form-control note-input\" type=\"text\"/>"), "</div>", '<div class="form-group note-form-group">', "<label for=\"note-dialog-link-url-".concat(this.options.id, "\" class=\"note-form-label\">").concat(this.lang.link.url, "</label>"), "<input id=\"note-dialog-link-url-".concat(this.options.id, "\" class=\"note-link-url form-control note-form-control note-input\" type=\"text\" value=\"http://\"/>"), "</div>", !this.options.disableLinkTarget ? $("<div></div>").append(this.ui.checkbox({
          className: "sn-checkbox-open-in-new-window",
          text: this.lang.link.openInNewWindow,
          checked: true
        }).render()).html() : ""].join("");
        var buttonClass = "btn btn-primary note-btn note-btn-primary note-link-btn";
        var footer = "<input type=\"button\" href=\"#\" class=\"".concat(buttonClass, "\" value=\"").concat(this.lang.link.insert, "\" disabled>");
        this.$dialog = this.ui.dialog({
          className: "link-dialog",
          title: this.lang.link.insert,
          fade: this.options.dialogsFade,
          body: body,
          footer: footer
        }).render().appendTo($container);
      }
    }, {
      key: "destroy",
      value: function destroy() {
        this.ui.hideDialog(this.$dialog);
        this.$dialog.remove();
      }
    }, {
      key: "bindEnterKey",
      value: function bindEnterKey($input, $btn) {
        $input.on("keypress", function (event) {
          if (event.keyCode === key.code.ENTER) {
            event.preventDefault();
            $btn.trigger("click");
          }
        });
      }
    }, {
      key: "checkLinkUrl",
      value: function checkLinkUrl(linkUrl) {
        if (MAILTO_PATTERN.test(linkUrl)) {
          return "mailto://" + linkUrl;
        } else if (TEL_PATTERN.test(linkUrl)) {
          return "tel://" + linkUrl;
        } else if (!URL_SCHEME_PATTERN.test(linkUrl)) {
          return "http://" + linkUrl;
        }
        return linkUrl;
      }
    }, {
      key: "onCheckLinkUrl",
      value: function onCheckLinkUrl($input) {
        var _this34 = this;
        $input.on("blur", function (event) {
          event.target.value = event.target.value == "" ? "" : _this34.checkLinkUrl(event.target.value);
        });
      }
      /**
       * toggle update button
       */
    }, {
      key: "toggleLinkBtn",
      value: function toggleLinkBtn($linkBtn, $linkText, $linkUrl) {
        this.ui.toggleBtn($linkBtn, $linkText.val() && $linkUrl.val());
      }
      /**
       * Show link dialog and set event handlers on dialog controls.
       *
       * @param {Object} linkInfo
       * @return {Promise}
       */
    }, {
      key: "showLinkDialog",
      value: function showLinkDialog(linkInfo) {
        var _this35 = this;
        return $.Deferred(function (deferred) {
          var $linkText = _this35.$dialog.find(".note-link-text");
          var $linkUrl = _this35.$dialog.find(".note-link-url");
          var $linkBtn = _this35.$dialog.find(".note-link-btn");
          var $openInNewWindow = _this35.$dialog.find(".sn-checkbox-open-in-new-window input[type=checkbox]");
          _this35.ui.onDialogShown(_this35.$dialog, function () {
            _this35.context.triggerEvent("dialog.shown");
            if (!linkInfo.url && func.isValidUrl(linkInfo.text)) {
              linkInfo.url = _this35.checkLinkUrl(linkInfo.text);
            }
            $linkText.on("input paste propertychange", function () {
              var text = $linkText.val();
              var div = document.createElement("div");
              div.innerText = text;
              text = div.innerHTML;
              linkInfo.text = text;
              _this35.toggleLinkBtn($linkBtn, $linkText, $linkUrl);
            }).val(linkInfo.text);
            $linkUrl.on("input paste propertychange", function () {
              if (!linkInfo.text) {
                $linkText.val($linkUrl.val());
              }
              _this35.toggleLinkBtn($linkBtn, $linkText, $linkUrl);
            }).val(linkInfo.url);
            if (!env.isSupportTouch) {
              $linkUrl.trigger("focus");
            }
            _this35.toggleLinkBtn($linkBtn, $linkText, $linkUrl);
            _this35.bindEnterKey($linkUrl, $linkBtn);
            _this35.bindEnterKey($linkText, $linkBtn);
            _this35.onCheckLinkUrl($linkUrl);
            var isNewWindowChecked = linkInfo.isNewWindow !== void 0 ? linkInfo.isNewWindow : _this35.context.options.linkTargetBlank;
            $openInNewWindow.prop("checked", isNewWindowChecked);
            $linkBtn.one("click", function (event) {
              event.preventDefault();
              deferred.resolve({
                range: linkInfo.range,
                url: $linkUrl.val(),
                text: $linkText.val(),
                isNewWindow: $openInNewWindow.is(":checked")
              });
              _this35.ui.hideDialog(_this35.$dialog);
            });
          });
          _this35.ui.onDialogHidden(_this35.$dialog, function () {
            $linkText.off();
            $linkUrl.off();
            $linkBtn.off();
            if (deferred.state() === "pending") {
              deferred.reject();
            }
          });
          _this35.ui.showDialog(_this35.$dialog);
        }).promise();
      }
      /**
       * @param {Object} layoutInfo
       */
    }, {
      key: "show",
      value: function show() {
        var _this36 = this;
        var linkInfo = this.context.invoke("editor.getLinkInfo");
        this.context.invoke("editor.saveRange");
        this.showLinkDialog(linkInfo).then(function (linkInfo2) {
          _this36.context.invoke("editor.restoreRange");
          _this36.context.invoke("editor.createLink", linkInfo2);
        }).fail(function () {
          _this36.context.invoke("editor.restoreRange");
        });
      }
    }]);
  }();
  var LinkPopover = /*#__PURE__*/function () {
    function LinkPopover(context) {
      var _this37 = this;
      _classCallCheck(this, LinkPopover);
      this.context = context;
      this.ui = $.summernote.ui;
      this.options = context.options;
      this.events = {
        "summernote.keyup summernote.mouseup summernote.change summernote.scroll": function summernoteKeyup_summernoteMouseup_summernoteChange_summernoteScroll() {
          _this37.update();
        },
        "summernote.disable summernote.dialog.shown": function summernoteDisable_summernoteDialogShown() {
          _this37.hide();
        },
        "summernote.blur": function summernoteBlur(we, event) {
          if (event.originalEvent && event.originalEvent.relatedTarget) {
            if (!_this37.$popover[0].contains(event.originalEvent.relatedTarget)) {
              _this37.hide();
            }
          } else {
            _this37.hide();
          }
        }
      };
    }
    return _createClass(LinkPopover, [{
      key: "shouldInitialize",
      value: function shouldInitialize() {
        return !lists.isEmpty(this.options.popover.link);
      }
    }, {
      key: "initialize",
      value: function initialize() {
        this.$popover = this.ui.popover({
          className: "note-link-popover",
          callback: function callback($node) {
            var $content2 = $node.find(".popover-content,.note-popover-content");
            $content2.prepend('<span><a target="_blank"></a>&nbsp;</span>');
          }
        }).render().appendTo(this.options.container);
        var $content = this.$popover.find(".popover-content,.note-popover-content");
        this.context.invoke("buttons.build", $content, this.options.popover.link);
        this.$popover.on("mousedown", function (event) {
          event.preventDefault();
        });
      }
    }, {
      key: "destroy",
      value: function destroy() {
        this.$popover.remove();
      }
    }, {
      key: "update",
      value: function update() {
        if (!this.context.invoke("editor.hasFocus")) {
          this.hide();
          return;
        }
        var rng = this.context.invoke("editor.getLastRange");
        if (rng.isCollapsed() && rng.isOnAnchor()) {
          var anchor = dom.ancestor(rng.sc, dom.isAnchor);
          var href = $(anchor).attr("href");
          this.$popover.find("a").attr("href", href).text(href);
          var pos = dom.posFromPlaceholder(anchor);
          var containerOffset = $(this.options.container).offset();
          pos.top -= containerOffset.top;
          pos.left -= containerOffset.left;
          this.$popover.css({
            display: "block",
            left: pos.left,
            top: pos.top
          });
        } else {
          this.hide();
        }
      }
    }, {
      key: "hide",
      value: function hide() {
        this.$popover.hide();
      }
    }]);
  }();
  var ImageDialog = /*#__PURE__*/function () {
    function ImageDialog(context) {
      _classCallCheck(this, ImageDialog);
      this.context = context;
      this.ui = $.summernote.ui;
      this.$body = $(document.body);
      this.$editor = context.layoutInfo.editor;
      this.options = context.options;
      this.lang = this.options.langInfo;
    }
    return _createClass(ImageDialog, [{
      key: "initialize",
      value: function initialize() {
        var imageLimitation = "";
        if (this.options.maximumImageFileSize) {
          var unit = Math.floor(Math.log(this.options.maximumImageFileSize) / Math.log(1024));
          var readableSize = (this.options.maximumImageFileSize / Math.pow(1024, unit)).toFixed(2) * 1 + " " + " KMGTP"[unit] + "B";
          imageLimitation = "<small>".concat(this.lang.image.maximumFileSize + " : " + readableSize, "</small>");
        }
        var $container = this.options.dialogsInBody ? this.$body : this.options.container;
        var body = ['<div class="form-group note-form-group note-group-select-from-files">', '<label for="note-dialog-image-file-' + this.options.id + '" class="note-form-label">' + this.lang.image.selectFromFiles + "</label>", '<input id="note-dialog-image-file-' + this.options.id + '" class="note-image-input form-control-file note-form-control note-input" ', ' type="file" name="files" accept="' + this.options.acceptImageFileTypes + '" multiple="multiple"/>', imageLimitation, "</div>", '<div class="form-group note-group-image-url">', '<label for="note-dialog-image-url-' + this.options.id + '" class="note-form-label">' + this.lang.image.url + "</label>", '<input id="note-dialog-image-url-' + this.options.id + '" class="note-image-url form-control note-form-control note-input" type="text"/>', "</div>"].join("");
        var buttonClass = "btn btn-primary note-btn note-btn-primary note-image-btn";
        var footer = "<input type=\"button\" href=\"#\" class=\"".concat(buttonClass, "\" value=\"").concat(this.lang.image.insert, "\" disabled>");
        this.$dialog = this.ui.dialog({
          title: this.lang.image.insert,
          fade: this.options.dialogsFade,
          body: body,
          footer: footer
        }).render().appendTo($container);
      }
    }, {
      key: "destroy",
      value: function destroy() {
        this.ui.hideDialog(this.$dialog);
        this.$dialog.remove();
      }
    }, {
      key: "bindEnterKey",
      value: function bindEnterKey($input, $btn) {
        $input.on("keypress", function (event) {
          if (event.keyCode === key.code.ENTER) {
            event.preventDefault();
            $btn.trigger("click");
          }
        });
      }
    }, {
      key: "show",
      value: function show() {
        var _this38 = this;
        this.context.invoke("editor.saveRange");
        this.showImageDialog().then(function (data) {
          _this38.ui.hideDialog(_this38.$dialog);
          _this38.context.invoke("editor.restoreRange");
          if (typeof data === "string") {
            if (_this38.options.callbacks.onImageLinkInsert) {
              _this38.context.triggerEvent("image.link.insert", data);
            } else {
              _this38.context.invoke("editor.insertImage", data);
            }
          } else {
            _this38.context.invoke("editor.insertImagesOrCallback", data);
          }
        }).fail(function () {
          _this38.context.invoke("editor.restoreRange");
        });
      }
      /**
       * show image dialog
       *
       * @param {jQuery} $dialog
       * @return {Promise}
       */
    }, {
      key: "showImageDialog",
      value: function showImageDialog() {
        var _this39 = this;
        return $.Deferred(function (deferred) {
          var $imageInput = _this39.$dialog.find(".note-image-input");
          var $imageUrl = _this39.$dialog.find(".note-image-url");
          var $imageBtn = _this39.$dialog.find(".note-image-btn");
          _this39.ui.onDialogShown(_this39.$dialog, function () {
            _this39.context.triggerEvent("dialog.shown");
            $imageInput.replaceWith($imageInput.clone().on("change", function (event) {
              deferred.resolve(event.target.files || event.target.value);
            }).val(""));
            $imageUrl.on("input paste propertychange", function () {
              _this39.ui.toggleBtn($imageBtn, $imageUrl.val());
            }).val("");
            if (!env.isSupportTouch) {
              $imageUrl.trigger("focus");
            }
            $imageBtn.on("click", function (event) {
              event.preventDefault();
              deferred.resolve($imageUrl.val());
            });
            _this39.bindEnterKey($imageUrl, $imageBtn);
          });
          _this39.ui.onDialogHidden(_this39.$dialog, function () {
            $imageInput.off();
            $imageUrl.off();
            $imageBtn.off();
            if (deferred.state() === "pending") {
              deferred.reject();
            }
          });
          _this39.ui.showDialog(_this39.$dialog);
        });
      }
    }]);
  }();
  var ImagePopover = /*#__PURE__*/function () {
    function ImagePopover(context) {
      var _this40 = this;
      _classCallCheck(this, ImagePopover);
      this.context = context;
      this.ui = $.summernote.ui;
      this.editable = context.layoutInfo.editable[0];
      this.options = context.options;
      this.events = {
        "summernote.disable summernote.dialog.shown": function summernoteDisable_summernoteDialogShown() {
          _this40.hide();
        },
        "summernote.blur": function summernoteBlur(we, event) {
          if (event.originalEvent && event.originalEvent.relatedTarget) {
            if (!_this40.$popover[0].contains(event.originalEvent.relatedTarget)) {
              _this40.hide();
            }
          } else {
            _this40.hide();
          }
        }
      };
    }
    return _createClass(ImagePopover, [{
      key: "shouldInitialize",
      value: function shouldInitialize() {
        return !lists.isEmpty(this.options.popover.image);
      }
    }, {
      key: "initialize",
      value: function initialize() {
        this.$popover = this.ui.popover({
          className: "note-image-popover"
        }).render().appendTo(this.options.container);
        var $content = this.$popover.find(".popover-content,.note-popover-content");
        this.context.invoke("buttons.build", $content, this.options.popover.image);
        this.$popover.on("mousedown", function (event) {
          event.preventDefault();
        });
      }
    }, {
      key: "destroy",
      value: function destroy() {
        this.$popover.remove();
      }
    }, {
      key: "update",
      value: function update(target, event) {
        if (dom.isImg(target)) {
          var position2 = $(target).offset();
          var containerOffset = $(this.options.container).offset();
          var pos = {};
          if (this.options.popatmouse) {
            pos.left = event.pageX - 20;
            pos.top = event.pageY;
          } else {
            pos = position2;
          }
          pos.top -= containerOffset.top;
          pos.left -= containerOffset.left;
          this.$popover.css({
            display: "block",
            left: pos.left,
            top: pos.top
          });
        } else {
          this.hide();
        }
      }
    }, {
      key: "hide",
      value: function hide() {
        this.$popover.hide();
      }
    }]);
  }();
  var TablePopover = /*#__PURE__*/function () {
    function TablePopover(context) {
      var _this41 = this;
      _classCallCheck(this, TablePopover);
      this.context = context;
      this.ui = $.summernote.ui;
      this.options = context.options;
      this.events = {
        "summernote.mousedown": function summernoteMousedown(we, event) {
          _this41.update(event.target);
        },
        "summernote.keyup summernote.scroll summernote.change": function summernoteKeyup_summernoteScroll_summernoteChange() {
          _this41.update();
        },
        "summernote.disable summernote.dialog.shown": function summernoteDisable_summernoteDialogShown() {
          _this41.hide();
        },
        "summernote.blur": function summernoteBlur(we, event) {
          if (event.originalEvent && event.originalEvent.relatedTarget) {
            if (!_this41.$popover[0].contains(event.originalEvent.relatedTarget)) {
              _this41.hide();
            }
          } else {
            _this41.hide();
          }
        }
      };
    }
    return _createClass(TablePopover, [{
      key: "shouldInitialize",
      value: function shouldInitialize() {
        return !lists.isEmpty(this.options.popover.table);
      }
    }, {
      key: "initialize",
      value: function initialize() {
        this.$popover = this.ui.popover({
          className: "note-table-popover"
        }).render().appendTo(this.options.container);
        var $content = this.$popover.find(".popover-content,.note-popover-content");
        this.context.invoke("buttons.build", $content, this.options.popover.table);
        if (env.isFF) {
          document.execCommand("enableInlineTableEditing", false, false);
        }
        this.$popover.on("mousedown", function (event) {
          event.preventDefault();
        });
      }
    }, {
      key: "destroy",
      value: function destroy() {
        this.$popover.remove();
      }
    }, {
      key: "update",
      value: function update(target) {
        if (this.context.isDisabled()) {
          return false;
        }
        var isCell2 = dom.isCell(target) || dom.isCell(target == null ? void 0 : target.parentElement);
        if (isCell2) {
          var pos = dom.posFromPlaceholder(target);
          var containerOffset = $(this.options.container).offset();
          pos.top -= containerOffset.top;
          pos.left -= containerOffset.left;
          this.$popover.css({
            display: "block",
            left: pos.left,
            top: pos.top
          });
        } else {
          this.hide();
        }
        return isCell2;
      }
    }, {
      key: "hide",
      value: function hide() {
        this.$popover.hide();
      }
    }]);
  }();
  var VideoDialog = /*#__PURE__*/function () {
    function VideoDialog(context) {
      _classCallCheck(this, VideoDialog);
      this.context = context;
      this.ui = $.summernote.ui;
      this.$body = $(document.body);
      this.$editor = context.layoutInfo.editor;
      this.options = context.options;
      this.lang = this.options.langInfo;
    }
    return _createClass(VideoDialog, [{
      key: "initialize",
      value: function initialize() {
        var $container = this.options.dialogsInBody ? this.$body : this.options.container;
        var body = ['<div class="form-group note-form-group row-fluid">', "<label for=\"note-dialog-video-url-".concat(this.options.id, "\" class=\"note-form-label\">").concat(this.lang.video.url, " <small class=\"text-muted\">").concat(this.lang.video.providers, "</small></label>"), "<input id=\"note-dialog-video-url-".concat(this.options.id, "\" class=\"note-video-url form-control note-form-control note-input\" type=\"text\"/>"), "</div>"].join("");
        var buttonClass = "btn btn-primary note-btn note-btn-primary note-video-btn";
        var footer = "<input type=\"button\" href=\"#\" class=\"".concat(buttonClass, "\" value=\"").concat(this.lang.video.insert, "\" disabled>");
        this.$dialog = this.ui.dialog({
          title: this.lang.video.insert,
          fade: this.options.dialogsFade,
          body: body,
          footer: footer
        }).render().appendTo($container);
      }
    }, {
      key: "destroy",
      value: function destroy() {
        this.ui.hideDialog(this.$dialog);
        this.$dialog.remove();
      }
    }, {
      key: "bindEnterKey",
      value: function bindEnterKey($input, $btn) {
        $input.on("keypress", function (event) {
          if (event.keyCode === key.code.ENTER) {
            event.preventDefault();
            $btn.trigger("click");
          }
        });
      }
    }, {
      key: "createVideoNode",
      value: function createVideoNode(url) {
        var ytRegExp = /(?:youtu\.be\/|youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=|shorts\/|live\/))([^&\n?]+)(?:.*[?&]t=([^&\n]+))?.*/;
        var ytRegExpForStart = /^(?:(\d+)h)?(?:(\d+)m)?(?:(\d+)s)?$/;
        var ytMatch = url.match(ytRegExp);
        var gdRegExp = /(?:\.|\/\/)drive\.google\.com\/file\/d\/(.[a-zA-Z0-9_-]*)\/view/;
        var gdMatch = url.match(gdRegExp);
        var igRegExp = /(?:www\.|\/\/)instagram\.com\/(reel|p)\/(.[a-zA-Z0-9_-]*)/;
        var igMatch = url.match(igRegExp);
        var vRegExp = /\/\/vine\.co\/v\/([a-zA-Z0-9]+)/;
        var vMatch = url.match(vRegExp);
        var vimRegExp = /\/\/(player\.)?vimeo\.com\/([a-z]*\/)*(\d+)[?]?.*/;
        var vimMatch = url.match(vimRegExp);
        var dmRegExp = /.+dailymotion.com\/(video|hub)\/([^_]+)[^#]*(#video=([^_&]+))?/;
        var dmMatch = url.match(dmRegExp);
        var youkuRegExp = /\/\/v\.youku\.com\/v_show\/id_(\w+)=*\.html/;
        var youkuMatch = url.match(youkuRegExp);
        var peerTubeRegExp = /\/\/(.*)\/videos\/watch\/([^?]*)(?:\?(?:start=(\w*))?(?:&stop=(\w*))?(?:&loop=([10]))?(?:&autoplay=([10]))?(?:&muted=([10]))?)?/;
        var peerTubeMatch = url.match(peerTubeRegExp);
        var qqRegExp = /\/\/v\.qq\.com.*?vid=(.+)/;
        var qqMatch = url.match(qqRegExp);
        var qqRegExp2 = /\/\/v\.qq\.com\/x?\/?(page|cover).*?\/([^\/]+)\.html\??.*/;
        var qqMatch2 = url.match(qqRegExp2);
        var mp4RegExp = /^.+.(mp4|m4v)$/;
        var mp4Match = url.match(mp4RegExp);
        var oggRegExp = /^.+.(ogg|ogv)$/;
        var oggMatch = url.match(oggRegExp);
        var webmRegExp = /^.+.(webm)$/;
        var webmMatch = url.match(webmRegExp);
        var fbRegExp = /(?:www\.|\/\/)facebook\.com\/([^\/]+)\/videos\/([0-9]+)/;
        var fbMatch = url.match(fbRegExp);
        var $video;
        if (ytMatch && ytMatch[1].length === 11) {
          var youtubeId = ytMatch[1];
          var start = 0;
          if (typeof ytMatch[2] !== "undefined") {
            var ytMatchForStart = ytMatch[2].match(ytRegExpForStart);
            if (ytMatchForStart) {
              for (var n = [3600, 60, 1], i = 0, r = n.length; i < r; i++) {
                start += typeof ytMatchForStart[i + 1] !== "undefined" ? n[i] * parseInt(ytMatchForStart[i + 1], 10) : 0;
              }
            } else {
              start = parseInt(ytMatch[2], 10);
            }
          }
          $video = $("<iframe>").attr("frameborder", 0).attr("src", "//www.youtube.com/embed/" + youtubeId + (start > 0 ? "?start=" + start : "")).attr("width", "640").attr("height", "360");
        } else if (gdMatch && gdMatch[0].length) {
          $video = $("<iframe>").attr("frameborder", 0).attr("src", "https://drive.google.com/file/d/" + gdMatch[1] + "/preview").attr("width", "640").attr("height", "480");
        } else if (igMatch && igMatch[0].length) {
          $video = $("<iframe>").attr("frameborder", 0).attr("src", "https://instagram.com/p/" + igMatch[2] + "/embed/").attr("width", "612").attr("height", "710").attr("scrolling", "no").attr("allowtransparency", "true");
        } else if (vMatch && vMatch[0].length) {
          $video = $("<iframe>").attr("frameborder", 0).attr("src", vMatch[0] + "/embed/simple").attr("width", "600").attr("height", "600").attr("class", "vine-embed");
        } else if (vimMatch && vimMatch[3].length) {
          $video = $("<iframe webkitallowfullscreen mozallowfullscreen allowfullscreen>").attr("frameborder", 0).attr("src", "//player.vimeo.com/video/" + vimMatch[3]).attr("width", "640").attr("height", "360");
        } else if (dmMatch && dmMatch[2].length) {
          $video = $("<iframe>").attr("frameborder", 0).attr("src", "//www.dailymotion.com/embed/video/" + dmMatch[2]).attr("width", "640").attr("height", "360");
        } else if (youkuMatch && youkuMatch[1].length) {
          $video = $("<iframe webkitallowfullscreen mozallowfullscreen allowfullscreen>").attr("frameborder", 0).attr("height", "498").attr("width", "510").attr("src", "//player.youku.com/embed/" + youkuMatch[1]);
        } else if (peerTubeMatch && peerTubeMatch[0].length) {
          var begin = 0;
          if (peerTubeMatch[2] !== "undefined") begin = peerTubeMatch[2];
          var end = 0;
          if (peerTubeMatch[3] !== "undefined") end = peerTubeMatch[3];
          var loop = 0;
          if (peerTubeMatch[4] !== "undefined") loop = peerTubeMatch[4];
          var autoplay = 0;
          if (peerTubeMatch[5] !== "undefined") autoplay = peerTubeMatch[5];
          var muted = 0;
          if (peerTubeMatch[6] !== "undefined") muted = peerTubeMatch[6];
          $video = $('<iframe allowfullscreen sandbox="allow-same-origin allow-scripts allow-popups">').attr("frameborder", 0).attr("src", "//" + peerTubeMatch[1] + "/videos/embed/" + peerTubeMatch[2] + "?loop=" + loop + "&autoplay=" + autoplay + "&muted=" + muted + (begin > 0 ? "&start=" + begin : "") + (end > 0 ? "&end=" + start : "")).attr("width", "560").attr("height", "315");
        } else if (qqMatch && qqMatch[1].length || qqMatch2 && qqMatch2[2].length) {
          var vid = qqMatch && qqMatch[1].length ? qqMatch[1] : qqMatch2[2];
          $video = $("<iframe webkitallowfullscreen mozallowfullscreen allowfullscreen>").attr("frameborder", 0).attr("height", "310").attr("width", "500").attr("src", "https://v.qq.com/txp/iframe/player.html?vid=" + vid + "&amp;auto=0");
        } else if (mp4Match || oggMatch || webmMatch) {
          $video = $("<video controls>").attr("src", url).attr("width", "640").attr("height", "360");
        } else if (fbMatch && fbMatch[0].length) {
          $video = $("<iframe>").attr("frameborder", 0).attr("src", "https://www.facebook.com/plugins/video.php?href=" + encodeURIComponent(fbMatch[0]) + "&show_text=0&width=560").attr("width", "560").attr("height", "301").attr("scrolling", "no").attr("allowtransparency", "true");
        } else {
          return false;
        }
        $video.addClass("note-video-clip");
        return $video[0];
      }
    }, {
      key: "show",
      value: function show() {
        var _this42 = this;
        var text = this.context.invoke("editor.getSelectedText");
        this.context.invoke("editor.saveRange");
        this.showVideoDialog(text).then(function (url) {
          _this42.ui.hideDialog(_this42.$dialog);
          _this42.context.invoke("editor.restoreRange");
          var $node = _this42.createVideoNode(url);
          if ($node) {
            _this42.context.invoke("editor.insertNode", $node);
          }
        }).fail(function () {
          _this42.context.invoke("editor.restoreRange");
        });
      }
      /**
       * show video dialog
       *
       * @param {jQuery} $dialog
       * @return {Promise}
       */
    }, {
      key: "showVideoDialog",
      value: function showVideoDialog() {
        var _this43 = this;
        return $.Deferred(function (deferred) {
          var $videoUrl = _this43.$dialog.find(".note-video-url");
          var $videoBtn = _this43.$dialog.find(".note-video-btn");
          _this43.ui.onDialogShown(_this43.$dialog, function () {
            _this43.context.triggerEvent("dialog.shown");
            $videoUrl.on("input paste propertychange", function () {
              _this43.ui.toggleBtn($videoBtn, $videoUrl.val());
            });
            if (!env.isSupportTouch) {
              $videoUrl.trigger("focus");
            }
            $videoBtn.on("click", function (event) {
              event.preventDefault();
              deferred.resolve($videoUrl.val());
            });
            _this43.bindEnterKey($videoUrl, $videoBtn);
          });
          _this43.ui.onDialogHidden(_this43.$dialog, function () {
            $videoUrl.off();
            $videoBtn.off();
            if (deferred.state() === "pending") {
              deferred.reject();
            }
          });
          _this43.ui.showDialog(_this43.$dialog);
        });
      }
    }]);
  }();
  var HelpDialog = /*#__PURE__*/function () {
    function HelpDialog(context) {
      _classCallCheck(this, HelpDialog);
      this.context = context;
      this.ui = $.summernote.ui;
      this.$body = $(document.body);
      this.$editor = context.layoutInfo.editor;
      this.options = context.options;
      this.lang = this.options.langInfo;
    }
    return _createClass(HelpDialog, [{
      key: "initialize",
      value: function initialize() {
        var $container = this.options.dialogsInBody ? this.$body : this.options.container;
        var body = ['<p class="text-center">', '<a href="http://summernote.org/" target="_blank" rel="noopener noreferrer">Summernote @@VERSION@@</a> · ', '<a href="https://github.com/summernote/summernote" target="_blank" rel="noopener noreferrer">Project</a> · ', '<a href="https://github.com/summernote/summernote/issues" target="_blank" rel="noopener noreferrer">Issues</a>', "</p>"].join("");
        this.$dialog = this.ui.dialog({
          title: this.lang.options.help,
          fade: this.options.dialogsFade,
          body: this.createShortcutList(),
          footer: body,
          callback: function callback($node) {
            $node.find(".modal-body,.note-modal-body").css({
              "max-height": 300,
              "overflow": "scroll"
            });
          }
        }).render().appendTo($container);
      }
    }, {
      key: "destroy",
      value: function destroy() {
        this.ui.hideDialog(this.$dialog);
        this.$dialog.remove();
      }
    }, {
      key: "createShortcutList",
      value: function createShortcutList() {
        var _this44 = this;
        var keyMap = this.options.keyMap[env.isMac ? "mac" : "pc"];
        return Object.keys(keyMap).map(function (key2) {
          var command = keyMap[key2];
          var $row = $('<div><div class="help-list-item"></div></div>');
          $row.append($("<label><kbd>" + key2 + "</kdb></label>").css({
            "width": 180,
            "margin-right": 10
          })).append($("<span></span>").html(_this44.context.memo("help." + command) || command));
          return $row.html();
        }).join("");
      }
      /**
       * show help dialog
       *
       * @return {Promise}
       */
    }, {
      key: "showHelpDialog",
      value: function showHelpDialog() {
        var _this45 = this;
        return $.Deferred(function (deferred) {
          _this45.ui.onDialogShown(_this45.$dialog, function () {
            _this45.context.triggerEvent("dialog.shown");
            deferred.resolve();
          });
          _this45.ui.showDialog(_this45.$dialog);
        }).promise();
      }
    }, {
      key: "show",
      value: function show() {
        var _this46 = this;
        this.context.invoke("editor.saveRange");
        this.showHelpDialog().then(function () {
          _this46.context.invoke("editor.restoreRange");
        });
      }
    }]);
  }();
  var AIRMODE_POPOVER_X_OFFSET = -5;
  var AIRMODE_POPOVER_Y_OFFSET = 5;
  var AirPopover = /*#__PURE__*/function () {
    function AirPopover(context) {
      var _this47 = this;
      _classCallCheck(this, AirPopover);
      this.context = context;
      this.ui = $.summernote.ui;
      this.options = context.options;
      this.hidable = true;
      this.onContextmenu = false;
      this.pageX = null;
      this.pageY = null;
      this.events = {
        "summernote.contextmenu": function summernoteContextmenu(event) {
          if (_this47.options.editing) {
            event.preventDefault();
            event.stopPropagation();
            _this47.onContextmenu = true;
            _this47.update(true);
          }
        },
        "summernote.mousedown": function summernoteMousedown(we, event) {
          _this47.pageX = event.pageX;
          _this47.pageY = event.pageY;
        },
        "summernote.keyup summernote.mouseup summernote.scroll": function summernoteKeyup_summernoteMouseup_summernoteScroll(we, event) {
          if (_this47.options.editing && !_this47.onContextmenu) {
            if (event.type == "keyup") {
              var range2 = _this47.context.invoke("editor.getLastRange");
              var wordRange = range2.getWordRange();
              var bnd = func.rect2bnd(lists.last(wordRange.getClientRects()));
              _this47.pageX = bnd.left;
              _this47.pageY = bnd.top;
            } else {
              _this47.pageX = event.pageX;
              _this47.pageY = event.pageY;
            }
            _this47.update();
          }
          _this47.onContextmenu = false;
        },
        "summernote.disable summernote.change summernote.dialog.shown summernote.blur": function summernoteDisable_summernoteChange_summernoteDialogShown_summernoteBlur() {
          _this47.hide();
        },
        "summernote.focusout": function summernoteFocusout() {
          if (!_this47.$popover.is(":active,:focus")) {
            _this47.hide();
          }
        }
      };
    }
    return _createClass(AirPopover, [{
      key: "shouldInitialize",
      value: function shouldInitialize() {
        return this.options.airMode && !lists.isEmpty(this.options.popover.air);
      }
    }, {
      key: "initialize",
      value: function initialize() {
        var _this48 = this;
        this.$popover = this.ui.popover({
          className: "note-air-popover"
        }).render().appendTo(this.options.container);
        var $content = this.$popover.find(".popover-content");
        this.context.invoke("buttons.build", $content, this.options.popover.air);
        this.$popover.on("mousedown", function () {
          _this48.hidable = false;
        });
        this.$popover.on("mouseup", function () {
          _this48.hidable = true;
        });
      }
    }, {
      key: "destroy",
      value: function destroy() {
        this.$popover.remove();
      }
    }, {
      key: "update",
      value: function update(forcelyOpen) {
        var styleInfo = this.context.invoke("editor.currentStyle");
        if (styleInfo.range && (!styleInfo.range.isCollapsed() || forcelyOpen)) {
          var rect = {
            left: this.pageX,
            top: this.pageY
          };
          var containerOffset = $(this.options.container).offset();
          rect.top -= containerOffset.top;
          rect.left -= containerOffset.left;
          this.$popover.css({
            display: "block",
            left: Math.max(rect.left, 0) + AIRMODE_POPOVER_X_OFFSET,
            top: rect.top + AIRMODE_POPOVER_Y_OFFSET
          });
          this.context.invoke("buttons.updateCurrentStyle", this.$popover);
        } else {
          this.hide();
        }
      }
    }, {
      key: "updateCodeview",
      value: function updateCodeview(isCodeview) {
        this.ui.toggleBtnActive(this.$popover.find(".btn-codeview"), isCodeview);
        if (isCodeview) {
          this.hide();
        }
      }
    }, {
      key: "hide",
      value: function hide() {
        if (this.hidable) {
          this.$popover.hide();
        }
      }
    }]);
  }();
  var POPOVER_DIST = 5;
  var HintPopover = /*#__PURE__*/function () {
    function HintPopover(context) {
      var _this49 = this;
      _classCallCheck(this, HintPopover);
      this.context = context;
      this.ui = $.summernote.ui;
      this.$editable = context.layoutInfo.editable;
      this.options = context.options;
      this.hint = this.options.hint || [];
      this.direction = this.options.hintDirection || "bottom";
      this.hints = Array.isArray(this.hint) ? this.hint : [this.hint];
      this.events = {
        "summernote.keyup": function summernoteKeyup(we, event) {
          if (!event.isDefaultPrevented()) {
            _this49.handleKeyup(event);
          }
        },
        "summernote.keydown": function summernoteKeydown(we, event) {
          _this49.handleKeydown(event);
        },
        "summernote.disable summernote.dialog.shown summernote.blur": function summernoteDisable_summernoteDialogShown_summernoteBlur() {
          _this49.hide();
        }
      };
    }
    return _createClass(HintPopover, [{
      key: "shouldInitialize",
      value: function shouldInitialize() {
        return this.hints.length > 0;
      }
    }, {
      key: "initialize",
      value: function initialize() {
        var _this50 = this;
        this.lastWordRange = null;
        this.matchingWord = null;
        this.$popover = this.ui.popover({
          className: "note-hint-popover",
          hideArrow: true,
          direction: ""
        }).render().appendTo(this.options.container);
        this.$popover.hide();
        this.$content = this.$popover.find(".popover-content,.note-popover-content");
        this.$content.on("click", ".note-hint-item", function (event) {
          _this50.$content.find(".active").removeClass("active");
          $(event.currentTarget).addClass("active");
          _this50.replace();
        });
        this.$popover.on("mousedown", function (event) {
          event.preventDefault();
        });
      }
    }, {
      key: "destroy",
      value: function destroy() {
        this.$popover.remove();
      }
    }, {
      key: "selectItem",
      value: function selectItem($item) {
        this.$content.find(".active").removeClass("active");
        $item.addClass("active");
        this.$content[0].scrollTop = $item[0].offsetTop - this.$content.innerHeight() / 2;
      }
    }, {
      key: "moveDown",
      value: function moveDown() {
        var $current = this.$content.find(".note-hint-item.active");
        var $next = $current.next();
        if ($next.length) {
          this.selectItem($next);
        } else {
          var $nextGroup = $current.parent().next();
          if (!$nextGroup.length) {
            $nextGroup = this.$content.find(".note-hint-group").first();
          }
          this.selectItem($nextGroup.find(".note-hint-item").first());
        }
      }
    }, {
      key: "moveUp",
      value: function moveUp() {
        var $current = this.$content.find(".note-hint-item.active");
        var $prev = $current.prev();
        if ($prev.length) {
          this.selectItem($prev);
        } else {
          var $prevGroup = $current.parent().prev();
          if (!$prevGroup.length) {
            $prevGroup = this.$content.find(".note-hint-group").last();
          }
          this.selectItem($prevGroup.find(".note-hint-item").last());
        }
      }
    }, {
      key: "replace",
      value: function replace() {
        var $item = this.$content.find(".note-hint-item.active");
        if ($item.length) {
          var node = this.nodeFromItem($item);
          if (this.matchingWord !== null && this.matchingWord.length === 0) {
            this.lastWordRange.so = this.lastWordRange.eo;
          } else if (this.matchingWord !== null && this.matchingWord.length > 0 && !this.lastWordRange.isCollapsed()) {
            var rangeCompute = this.lastWordRange.eo - this.lastWordRange.so - this.matchingWord.length;
            if (rangeCompute > 0) {
              this.lastWordRange.so += rangeCompute;
            }
          }
          this.lastWordRange.insertNode(node);
          if (this.options.hintSelect === "next") {
            var blank = document.createTextNode("");
            $(node).after(blank);
            range.createFromNodeBefore(blank).select();
          } else {
            range.createFromNodeAfter(node).select();
          }
          this.lastWordRange = null;
          this.hide();
          this.context.invoke("editor.focus");
          this.context.triggerEvent("change", this.$editable.html(), this.$editable);
        }
      }
    }, {
      key: "nodeFromItem",
      value: function nodeFromItem($item) {
        var hint = this.hints[$item.data("index")];
        var item = $item.data("item");
        var node = hint.content ? hint.content(item) : item;
        if (typeof node === "string") {
          node = dom.createText(node);
        }
        return node;
      }
    }, {
      key: "createItemTemplates",
      value: function createItemTemplates(hintIdx, items) {
        var hint = this.hints[hintIdx];
        return items.map(function (item, idx) {
          var $item = $('<div class="note-hint-item"></div>');
          $item.append(hint.template ? hint.template(item) : item + "");
          $item.data({
            "index": hintIdx,
            "item": item
          });
          if (hintIdx === 0 && idx === 0) {
            $item.addClass("active");
          }
          return $item;
        });
      }
    }, {
      key: "handleKeydown",
      value: function handleKeydown(event) {
        if (!this.$popover.is(":visible")) {
          return;
        }
        if (event.keyCode === key.code.ENTER) {
          event.preventDefault();
          this.replace();
        } else if (event.keyCode === key.code.UP) {
          event.preventDefault();
          this.moveUp();
        } else if (event.keyCode === key.code.DOWN) {
          event.preventDefault();
          this.moveDown();
        }
      }
    }, {
      key: "searchKeyword",
      value: function searchKeyword(index, keyword, callback) {
        var hint = this.hints[index];
        if (hint && hint.match.test(keyword) && hint.search) {
          var _matches = hint.match.exec(keyword);
          this.matchingWord = _matches[0];
          hint.search(_matches[1], callback);
        } else {
          callback();
        }
      }
    }, {
      key: "createGroup",
      value: function createGroup(idx, keyword) {
        var _this51 = this;
        var $group = $('<div class="note-hint-group note-hint-group-' + idx + '"></div>');
        this.searchKeyword(idx, keyword, function (items) {
          items = items || [];
          if (items.length) {
            $group.html(_this51.createItemTemplates(idx, items));
            _this51.show();
          }
        });
        return $group;
      }
    }, {
      key: "handleKeyup",
      value: function handleKeyup(event) {
        var _this52 = this;
        if (!lists.contains([key.code.ENTER, key.code.UP, key.code.DOWN], event.keyCode)) {
          var range2 = this.context.invoke("editor.getLastRange");
          var wordRange, keyword;
          if (this.options.hintMode === "words") {
            wordRange = range2.getWordsRange(range2);
            keyword = wordRange.toString();
            this.hints.forEach(function (hint) {
              if (hint.match.test(keyword)) {
                wordRange = range2.getWordsMatchRange(hint.match);
                return false;
              }
            });
            if (!wordRange) {
              this.hide();
              return;
            }
            keyword = wordRange.toString();
          } else {
            wordRange = range2.getWordRange();
            keyword = wordRange.toString();
          }
          if (this.hints.length && keyword) {
            this.$content.empty();
            var bnd = func.rect2bnd(lists.last(wordRange.getClientRects()));
            var containerOffset = $(this.options.container).offset();
            if (bnd) {
              bnd.top -= containerOffset.top;
              bnd.left -= containerOffset.left;
              this.$popover.hide();
              this.lastWordRange = wordRange;
              this.hints.forEach(function (hint, idx) {
                if (hint.match.test(keyword)) {
                  _this52.createGroup(idx, keyword).appendTo(_this52.$content);
                }
              });
              this.$content.find(".note-hint-item").first().addClass("active");
              if (this.direction === "top") {
                this.$popover.css({
                  left: bnd.left,
                  top: bnd.top - this.$popover.outerHeight() - POPOVER_DIST
                });
              } else {
                this.$popover.css({
                  left: bnd.left,
                  top: bnd.top + bnd.height + POPOVER_DIST
                });
              }
            }
          } else {
            this.hide();
          }
        }
      }
    }, {
      key: "show",
      value: function show() {
        this.$popover.show();
      }
    }, {
      key: "hide",
      value: function hide() {
        this.$popover.hide();
      }
    }]);
  }();
  $.summernote = $.extend($.summernote, {
    version: "@@VERSION@@",
    plugins: {},
    dom: dom,
    range: range,
    lists: lists,
    options: {
      langInfo: $.summernote.lang["en-US"],
      editing: true,
      modules: {
        "editor": Editor,
        "clipboard": Clipboard,
        "dropzone": Dropzone,
        "codeview": CodeView,
        "statusbar": Statusbar,
        "fullscreen": Fullscreen,
        "handle": Handle,
        // FIXME: HintPopover must be front of autolink
        //  - Script error about range when Enter key is pressed on hint popover
        "hintPopover": HintPopover,
        "autoLink": AutoLink,
        "autoSync": AutoSync,
        "autoReplace": AutoReplace,
        "placeholder": Placeholder,
        "buttons": Buttons,
        "toolbar": Toolbar,
        "linkDialog": LinkDialog,
        "linkPopover": LinkPopover,
        "imageDialog": ImageDialog,
        "imagePopover": ImagePopover,
        "tablePopover": TablePopover,
        "videoDialog": VideoDialog,
        "helpDialog": HelpDialog,
        "airPopover": AirPopover
      },
      buttons: {},
      lang: "en-US",
      followingToolbar: false,
      toolbarPosition: "top",
      otherStaticBar: "",
      // toolbar
      codeviewKeepButton: false,
      toolbar: [["style", ["style"]], ["font", ["bold", "underline", "clear"]], ["fontname", ["fontname"]], ["color", ["color"]], ["para", ["ul", "ol", "paragraph"]], ["table", ["table"]], ["insert", ["link", "picture", "video"]], ["view", ["fullscreen", "codeview", "help"]]],
      // popover
      popatmouse: true,
      popover: {
        image: [["resize", ["resizeFull", "resizeHalf", "resizeQuarter", "resizeNone"]], ["float", ["floatLeft", "floatRight", "floatNone"]], ["remove", ["removeMedia"]]],
        link: [["link", ["linkDialogShow", "unlink"]]],
        table: [["add", ["addRowDown", "addRowUp", "addColLeft", "addColRight"]], ["delete", ["deleteRow", "deleteCol", "deleteTable"]]],
        air: [["color", ["color"]], ["font", ["bold", "underline", "clear"]], ["para", ["ul", "paragraph"]], ["table", ["table"]], ["insert", ["link", "picture"]], ["view", ["fullscreen", "codeview"]]]
      },
      // link options
      linkAddNoReferrer: false,
      addLinkNoOpener: false,
      // air mode: inline editor
      airMode: false,
      overrideContextMenu: false,
      // TBD
      width: null,
      height: null,
      linkTargetBlank: true,
      focus: false,
      tabDisable: false,
      tabSize: 4,
      styleWithCSS: false,
      shortcuts: true,
      textareaAutoSync: true,
      tooltip: "auto",
      container: null,
      maxTextLength: 0,
      blockquoteBreakingLevel: 2,
      spellCheck: true,
      disableGrammar: false,
      placeholder: null,
      inheritPlaceholder: false,
      // TODO: need to be documented
      recordEveryKeystroke: false,
      historyLimit: 200,
      // TODO: need to be documented
      showDomainOnlyForAutolink: false,
      // TODO: need to be documented
      hintMode: "word",
      hintSelect: "after",
      hintDirection: "bottom",
      styleTags: ["p", "blockquote", "pre", "h1", "h2", "h3", "h4", "h5", "h6"],
      fontNames: ["Arial", "Arial Black", "Comic Sans MS", "Courier New", "Helvetica Neue", "Helvetica", "Impact", "Lucida Grande", "Tahoma", "Times New Roman", "Verdana"],
      fontNamesIgnoreCheck: [],
      addDefaultFonts: true,
      fontSizes: ["8", "9", "10", "11", "12", "14", "18", "24", "36"],
      fontSizeUnits: ["px", "pt"],
      // pallete colors(n x n)
      colors: [["#000000", "#424242", "#636363", "#9C9C94", "#CEC6CE", "#EFEFEF", "#F7F7F7", "#FFFFFF"], ["#FF0000", "#FF9C00", "#FFFF00", "#00FF00", "#00FFFF", "#0000FF", "#9C00FF", "#FF00FF"], ["#F7C6CE", "#FFE7CE", "#FFEFC6", "#D6EFD6", "#CEDEE7", "#CEE7F7", "#D6D6E7", "#E7D6DE"], ["#E79C9C", "#FFC69C", "#FFE79C", "#B5D6A5", "#A5C6CE", "#9CC6EF", "#B5A5D6", "#D6A5BD"], ["#E76363", "#F7AD6B", "#FFD663", "#94BD7B", "#73A5AD", "#6BADDE", "#8C7BC6", "#C67BA5"], ["#CE0000", "#E79439", "#EFC631", "#6BA54A", "#4A7B8C", "#3984C6", "#634AA5", "#A54A7B"], ["#9C0000", "#B56308", "#BD9400", "#397B21", "#104A5A", "#085294", "#311873", "#731842"], ["#630000", "#7B3900", "#846300", "#295218", "#083139", "#003163", "#21104A", "#4A1031"]],
      // http://chir.ag/projects/name-that-color/
      colorsName: [["Black", "Tundora", "Dove Gray", "Star Dust", "Pale Slate", "Gallery", "Alabaster", "White"], ["Red", "Orange Peel", "Yellow", "Green", "Cyan", "Blue", "Electric Violet", "Magenta"], ["Azalea", "Karry", "Egg White", "Zanah", "Botticelli", "Tropical Blue", "Mischka", "Twilight"], ["Tonys Pink", "Peach Orange", "Cream Brulee", "Sprout", "Casper", "Perano", "Cold Purple", "Careys Pink"], ["Mandy", "Rajah", "Dandelion", "Olivine", "Gulf Stream", "Viking", "Blue Marguerite", "Puce"], ["Guardsman Red", "Fire Bush", "Golden Dream", "Chelsea Cucumber", "Smalt Blue", "Boston Blue", "Butterfly Bush", "Cadillac"], ["Sangria", "Mai Tai", "Buddha Gold", "Forest Green", "Eden", "Venice Blue", "Meteorite", "Claret"], ["Rosewood", "Cinnamon", "Olive", "Parsley", "Tiber", "Midnight Blue", "Valentino", "Loulou"]],
      colorButton: {
        foreColor: "#000000",
        backColor: "#FFFF00"
      },
      lineHeights: ["1.0", "1.2", "1.4", "1.5", "1.6", "1.8", "2.0", "3.0"],
      tableClassName: "table table-bordered",
      insertTableMaxSize: {
        col: 10,
        row: 10
      },
      // By default, dialogs are attached in container.
      dialogsInBody: false,
      dialogsFade: false,
      maximumImageFileSize: null,
      acceptImageFileTypes: "image/*",
      allowClipboardImagePasting: true,
      callbacks: {
        onBeforeCommand: null,
        onBlur: null,
        onBlurCodeview: null,
        onChange: null,
        onChangeCodeview: null,
        onDialogShown: null,
        onEnter: null,
        onFocus: null,
        onImageLinkInsert: null,
        onImageUpload: null,
        onImageUploadError: null,
        onInit: null,
        onKeydown: null,
        onKeyup: null,
        onMousedown: null,
        onMouseup: null,
        onPaste: null,
        onScroll: null
      },
      codemirror: {
        mode: "text/html",
        htmlMode: true,
        lineNumbers: true
      },
      codeviewFilter: true,
      codeviewFilterRegex: /<\/*(?:applet|b(?:ase|gsound|link)|embed|frame(?:set)?|ilayer|l(?:ayer|ink)|meta|object|s(?:cript|tyle)|t(?:itle|extarea)|xml)[^>]*?>/gi,
      codeviewIframeFilter: true,
      codeviewIframeWhitelistSrc: [],
      codeviewIframeWhitelistSrcBase: ["www.youtube.com", "www.youtube-nocookie.com", "www.facebook.com", "vine.co", "instagram.com", "player.vimeo.com", "www.dailymotion.com", "player.youku.com", "jumpingbean.tv", "v.qq.com"],
      keyMap: {
        pc: {
          "ESC": "escape",
          "ENTER": "insertParagraph",
          "CTRL+Z": "undo",
          "CTRL+Y": "redo",
          "TAB": "tab",
          "SHIFT+TAB": "untab",
          "CTRL+B": "bold",
          "CTRL+I": "italic",
          "CTRL+U": "underline",
          "CTRL+SHIFT+S": "strikethrough",
          "CTRL+BACKSLASH": "removeFormat",
          "CTRL+SHIFT+L": "justifyLeft",
          "CTRL+SHIFT+E": "justifyCenter",
          "CTRL+SHIFT+R": "justifyRight",
          "CTRL+SHIFT+J": "justifyFull",
          "CTRL+SHIFT+NUM7": "insertUnorderedList",
          "CTRL+SHIFT+NUM8": "insertOrderedList",
          "CTRL+LEFTBRACKET": "outdent",
          "CTRL+RIGHTBRACKET": "indent",
          "CTRL+NUM0": "formatPara",
          "CTRL+NUM1": "formatH1",
          "CTRL+NUM2": "formatH2",
          "CTRL+NUM3": "formatH3",
          "CTRL+NUM4": "formatH4",
          "CTRL+NUM5": "formatH5",
          "CTRL+NUM6": "formatH6",
          "CTRL+ENTER": "insertHorizontalRule",
          "CTRL+K": "linkDialog.show"
        },
        mac: {
          "ESC": "escape",
          "ENTER": "insertParagraph",
          "CMD+Z": "undo",
          "CMD+SHIFT+Z": "redo",
          "TAB": "tab",
          "SHIFT+TAB": "untab",
          "CMD+B": "bold",
          "CMD+I": "italic",
          "CMD+U": "underline",
          "CMD+SHIFT+S": "strikethrough",
          "CMD+BACKSLASH": "removeFormat",
          "CMD+SHIFT+L": "justifyLeft",
          "CMD+SHIFT+E": "justifyCenter",
          "CMD+SHIFT+R": "justifyRight",
          "CMD+SHIFT+J": "justifyFull",
          "CMD+SHIFT+NUM7": "insertUnorderedList",
          "CMD+SHIFT+NUM8": "insertOrderedList",
          "CMD+LEFTBRACKET": "outdent",
          "CMD+RIGHTBRACKET": "indent",
          "CMD+NUM0": "formatPara",
          "CMD+NUM1": "formatH1",
          "CMD+NUM2": "formatH2",
          "CMD+NUM3": "formatH3",
          "CMD+NUM4": "formatH4",
          "CMD+NUM5": "formatH5",
          "CMD+NUM6": "formatH6",
          "CMD+ENTER": "insertHorizontalRule",
          "CMD+K": "linkDialog.show"
        }
      },
      icons: {
        "align": "note-icon-align",
        "alignCenter": "note-icon-align-center",
        "alignJustify": "note-icon-align-justify",
        "alignLeft": "note-icon-align-left",
        "alignRight": "note-icon-align-right",
        "rowBelow": "note-icon-row-below",
        "colBefore": "note-icon-col-before",
        "colAfter": "note-icon-col-after",
        "rowAbove": "note-icon-row-above",
        "rowRemove": "note-icon-row-remove",
        "colRemove": "note-icon-col-remove",
        "indent": "note-icon-align-indent",
        "outdent": "note-icon-align-outdent",
        "arrowsAlt": "note-icon-arrows-alt",
        "bold": "note-icon-bold",
        "caret": "note-icon-caret",
        "circle": "note-icon-circle",
        "close": "note-icon-close",
        "code": "note-icon-code",
        "eraser": "note-icon-eraser",
        "floatLeft": "note-icon-float-left",
        "floatRight": "note-icon-float-right",
        "font": "note-icon-font",
        "frame": "note-icon-frame",
        "italic": "note-icon-italic",
        "link": "note-icon-link",
        "unlink": "note-icon-chain-broken",
        "magic": "note-icon-magic",
        "menuCheck": "note-icon-menu-check",
        "minus": "note-icon-minus",
        "orderedlist": "note-icon-orderedlist",
        "pencil": "note-icon-pencil",
        "picture": "note-icon-picture",
        "question": "note-icon-question",
        "redo": "note-icon-redo",
        "rollback": "note-icon-rollback",
        "square": "note-icon-square",
        "strikethrough": "note-icon-strikethrough",
        "subscript": "note-icon-subscript",
        "superscript": "note-icon-superscript",
        "table": "note-icon-table",
        "textHeight": "note-icon-text-height",
        "trash": "note-icon-trash",
        "underline": "note-icon-underline",
        "undo": "note-icon-undo",
        "unorderedlist": "note-icon-unorderedlist",
        "video": "note-icon-video"
      }
    }
  });
  var Renderer = /*#__PURE__*/function () {
    function Renderer(markup, children, options, callback) {
      _classCallCheck(this, Renderer);
      this.markup = markup;
      this.children = children;
      this.options = options;
      this.callback = callback;
    }
    return _createClass(Renderer, [{
      key: "render",
      value: function render($parent) {
        var $node = $(this.markup);
        if (this.options && this.options.contents) {
          $node.html(this.options.contents);
        }
        if (this.options && this.options.className) {
          $node.addClass(this.options.className);
        }
        if (this.options && this.options.data) {
          $.each(this.options.data, function (k, v) {
            $node.attr("data-" + k, v);
          });
        }
        if (this.options && this.options.click) {
          $node.on("click", this.options.click);
        }
        if (this.children) {
          var $container = $node.find(".note-children-container");
          this.children.forEach(function (child) {
            child.render($container.length ? $container : $node);
          });
        }
        if (this.callback) {
          this.callback($node, this.options);
        }
        if (this.options && this.options.callback) {
          this.options.callback($node);
        }
        if ($parent) {
          $parent.append($node);
        }
        return $node;
      }
    }]);
  }();
  var renderer = {
    create: function create(markup, callback) {
      return function () {
        var options = _typeof(arguments[1]) === "object" ? arguments[1] : arguments[0];
        var children = Array.isArray(arguments[0]) ? arguments[0] : [];
        if (options && options.children) {
          children = options.children;
        }
        return new Renderer(markup, children, options, callback);
      };
    }
  };
  var editor = renderer.create('<div class="note-editor note-frame card"></div>');
  var toolbar = renderer.create('<div class="note-toolbar card-header" role="toolbar"></div>');
  var editingArea = renderer.create('<div class="note-editing-area"></div>');
  var codable = renderer.create('<textarea class="note-codable" aria-multiline="true"></textarea>');
  var editable = renderer.create('<div class="note-editable card-block" contentEditable="true" role="textbox" aria-multiline="true"></div>');
  var statusbar = renderer.create(['<output class="note-status-output" role="status" aria-live="polite"></output>', '<div class="note-statusbar" role="status">', '<div class="note-resizebar" aria-label="Resize">', '<div class="note-icon-bar"></div>', '<div class="note-icon-bar"></div>', '<div class="note-icon-bar"></div>', "</div>", "</div>"].join(""));
  var airEditor = renderer.create('<div class="note-editor note-airframe"></div>');
  var airEditable = renderer.create(['<div class="note-editable" contentEditable="true" role="textbox" aria-multiline="true"></div>', '<output class="note-status-output" role="status" aria-live="polite"></output>'].join(""));
  var buttonGroup = renderer.create('<div class="note-btn-group btn-group"></div>');
  var dropdown = renderer.create('<div class="note-dropdown-menu dropdown-menu" role="list"></div>', function ($node, options) {
    var markup = Array.isArray(options.items) ? options.items.map(function (item) {
      var value2 = typeof item === "string" ? item : item.value || "";
      var content = options.template ? options.template(item) : item;
      var option = _typeof(item) === "object" ? item.option : void 0;
      var dataValue = 'data-value="' + value2 + '"';
      var dataOption = option !== void 0 ? ' data-option="' + option + '"' : "";
      return '<a class="dropdown-item" href="#" ' + (dataValue + dataOption) + ' role="listitem" aria-label="' + value2 + '">' + content + "</a>";
    }).join("") : options.items;
    $node.html(markup).attr({
      "aria-label": options.title
    });
    if (options && options.codeviewKeepButton) {
      $node.addClass("note-codeview-keep");
    }
  });
  var dropdownButtonContents = function dropdownButtonContents(contents) {
    return contents;
  };
  var dropdownCheck = renderer.create('<div class="note-dropdown-menu dropdown-menu note-check" role="list"></div>', function ($node, options) {
    var markup = Array.isArray(options.items) ? options.items.map(function (item) {
      var value2 = typeof item === "string" ? item : item.value || "";
      var content = options.template ? options.template(item) : item;
      return '<a class="dropdown-item" href="#" data-value="' + value2 + '" role="listitem" aria-label="' + item + '">' + icon(options.checkClassName) + " " + content + "</a>";
    }).join("") : options.items;
    $node.html(markup).attr({
      "aria-label": options.title
    });
    if (options && options.codeviewKeepButton) {
      $node.addClass("note-codeview-keep");
    }
  });
  var dialog = renderer.create('<div class="modal note-modal" aria-hidden="false" tabindex="-1" role="dialog"></div>', function ($node, options) {
    if (options.fade) {
      $node.addClass("fade");
    }
    $node.attr({
      "aria-label": options.title
    });
    $node.html(['<div class="modal-dialog">', '<div class="modal-content">', options.title ? '<div class="modal-header"><h4 class="modal-title">' + options.title + '</h4><button type="button" class="close" data-dismiss="modal" aria-label="Close" aria-hidden="true">&times;</button></div>' : "", '<div class="modal-body">' + options.body + "</div>", options.footer ? '<div class="modal-footer">' + options.footer + "</div>" : "", "</div>", "</div>"].join(""));
  });
  var popover = renderer.create(['<div class="note-popover popover in">', '<div class="arrow"></div>', '<div class="popover-content note-children-container"></div>', "</div>"].join(""), function ($node, options) {
    var direction = typeof options.direction !== "undefined" ? options.direction : "bottom";
    $node.addClass(direction);
    if (options.hideArrow) {
      $node.find(".arrow").hide();
    }
  });
  var checkbox = renderer.create('<div class="form-check"></div>', function ($node, options) {
    $node.html(['<label class="form-check-label"' + (options.id ? ' for="note-' + options.id + '"' : "") + ">", '<input type="checkbox" class="form-check-input"' + (options.id ? ' id="note-' + options.id + '"' : ""), options.checked ? " checked" : "", ' aria-label="' + (options.text ? options.text : "") + '"', ' aria-checked="' + (options.checked ? "true" : "false") + '"/>', " " + (options.text ? options.text : "") + "</label>"].join(""));
  });
  var icon = function icon(iconClassName, tagName) {
    if (iconClassName.match(/^</)) {
      return iconClassName;
    }
    tagName = tagName || "i";
    return "<" + tagName + ' class="' + iconClassName + '"></' + tagName + ">";
  };
  var ui = function ui(editorOptions) {
    return {
      editor: editor,
      toolbar: toolbar,
      editingArea: editingArea,
      codable: codable,
      editable: editable,
      statusbar: statusbar,
      airEditor: airEditor,
      airEditable: airEditable,
      buttonGroup: buttonGroup,
      dropdown: dropdown,
      dropdownButtonContents: dropdownButtonContents,
      dropdownCheck: dropdownCheck,
      dialog: dialog,
      popover: popover,
      icon: icon,
      checkbox: checkbox,
      options: editorOptions,
      palette: function palette($node, options) {
        return renderer.create('<div class="note-color-palette"></div>', function ($node2, options2) {
          var contents = [];
          for (var row = 0, rowSize = options2.colors.length; row < rowSize; row++) {
            var eventName = options2.eventName;
            var colors = options2.colors[row];
            var colorsName = options2.colorsName[row];
            var buttons = [];
            for (var col = 0, colSize = colors.length; col < colSize; col++) {
              var color = colors[col];
              var colorName = colorsName[col];
              buttons.push(['<button type="button" class="note-color-btn"', 'style="background-color:', color, '" ', 'data-event="', eventName, '" ', 'data-value="', color, '" ', 'title="', colorName, '" ', 'aria-label="', colorName, '" ', 'data-toggle="button" tabindex="-1"></button>'].join(""));
            }
            contents.push('<div class="note-color-row">' + buttons.join("") + "</div>");
          }
          $node2.html(contents.join(""));
          if (options2.tooltip) {
            var tooltipOptions = {
              container: options2.container || editorOptions.container,
              trigger: "hover",
              placement: "bottom"
            };
            $node2.tooltip(_objectSpread({
              selector: ".note-color-btn"
            }, tooltipOptions));
          }
        })($node, options);
      },
      button: function button($node, options) {
        return renderer.create('<button type="button" class="note-btn btn btn-light btn-sm" tabindex="-1"></button>', function ($node2, options2) {
          if (options2 && options2.tooltip) {
            $node2.attr({
              title: options2.tooltip,
              "aria-label": options2.tooltip
            }).tooltip({
              container: options2.container || editorOptions.container,
              trigger: "hover",
              placement: "bottom"
            }).on("click", function (e) {
              $(e.currentTarget).tooltip("hide");
            });
          }
          if (options2 && options2.codeviewButton) {
            $node2.addClass("note-codeview-keep");
          }
        })($node, options);
      },
      toggleBtn: function toggleBtn($btn, isEnable) {
        $btn.toggleClass("disabled", !isEnable);
        $btn.attr("disabled", !isEnable);
      },
      toggleBtnActive: function toggleBtnActive($btn, isActive) {
        $btn.toggleClass("active", isActive);
      },
      onDialogShown: function onDialogShown($dialog, handler) {
        $dialog.one("shown.bs.modal", handler);
      },
      onDialogHidden: function onDialogHidden($dialog, handler) {
        $dialog.one("hidden.bs.modal", handler);
      },
      showDialog: function showDialog($dialog) {
        $dialog.modal("show");
      },
      hideDialog: function hideDialog($dialog) {
        $dialog.modal("hide");
      },
      createLayout: function createLayout($note) {
        var $editor = (editorOptions.airMode ? airEditor([editingArea([codable(), airEditable()])]) : editorOptions.toolbarPosition === "bottom" ? editor([editingArea([codable(), editable()]), toolbar(), statusbar()]) : editor([toolbar(), editingArea([codable(), editable()]), statusbar()])).render();
        $editor.insertAfter($note);
        return {
          note: $note,
          editor: $editor,
          toolbar: $editor.find(".note-toolbar"),
          editingArea: $editor.find(".note-editing-area"),
          editable: $editor.find(".note-editable"),
          codable: $editor.find(".note-codable"),
          statusbar: $editor.find(".note-statusbar")
        };
      },
      removeLayout: function removeLayout($note, layoutInfo) {
        $note.html(layoutInfo.editable.html());
        layoutInfo.editor.remove();
        $note.show();
      }
    };
  };
  $.summernote = $.extend($.summernote, {
    ui_template: ui,
    interface: "bs4"
  });
  $.summernote.options.styleTags = ["p", {
    title: "Blockquote",
    tag: "blockquote",
    className: "blockquote",
    value: "blockquote"
  }, "pre", "h1", "h2", "h3", "h4", "h5", "h6"];
})();