/******/ (() => { // webpackBootstrap
/******/ 	// runtime can't be in strict mode because a global variable is assign and maybe created.
/******/ 	var __webpack_modules__ = ({

/***/ "./src/common/cdn.js":
/*!***************************!*\
  !*** ./src/common/cdn.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "version": () => (/* binding */ version)
/* harmony export */ });
/* harmony import */ var twemoji__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! twemoji */ "../../../node_modules/twemoji/dist/twemoji.esm.js");
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/forum/app */ "flarum/forum/app");
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_app__WEBPACK_IMPORTED_MODULE_1__);


var version = /([0-9]+).[0-9]+.[0-9]+/g.exec(twemoji__WEBPACK_IMPORTED_MODULE_0__["default"].base)[1];
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
  return flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().forum.attribute('flarum-emoji.cdn').replace('[version]', version);
}
;

/***/ }),

/***/ "./src/forum/addComposerAutocomplete.js":
/*!**********************************************!*\
  !*** ./src/forum/addComposerAutocomplete.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ addComposerAutocomplete)
/* harmony export */ });
/* harmony import */ var simple_emoji_map__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! simple-emoji-map */ "../../../node_modules/simple-emoji-map/index.mjs");
/* harmony import */ var flarum_common_extend__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/common/extend */ "flarum/common/extend");
/* harmony import */ var flarum_common_extend__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_common_extend__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_common_components_TextEditor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/common/components/TextEditor */ "flarum/common/components/TextEditor");
/* harmony import */ var flarum_common_components_TextEditor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_TextEditor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_common_components_TextEditorButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/common/components/TextEditorButton */ "flarum/common/components/TextEditorButton");
/* harmony import */ var flarum_common_components_TextEditorButton__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_TextEditorButton__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var flarum_common_utils_KeyboardNavigatable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! flarum/common/utils/KeyboardNavigatable */ "flarum/common/utils/KeyboardNavigatable");
/* harmony import */ var flarum_common_utils_KeyboardNavigatable__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(flarum_common_utils_KeyboardNavigatable__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _fragments_AutocompleteDropdown__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./fragments/AutocompleteDropdown */ "./src/forum/fragments/AutocompleteDropdown.js");
/* harmony import */ var _helpers_getEmojiIconCode__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./helpers/getEmojiIconCode */ "./src/forum/helpers/getEmojiIconCode.js");
/* harmony import */ var _common_cdn__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../common/cdn */ "./src/common/cdn.js");
function _createForOfIteratorHelperLoose(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (it) return (it = it.call(o)).next.bind(it); if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; return function () { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }








function addComposerAutocomplete() {
  var emojiKeys = Object.keys(simple_emoji_map__WEBPACK_IMPORTED_MODULE_0__["default"]);
  var $container = $('<div class="ComposerBody-emojiDropdownContainer"></div>');
  var dropdown = new _fragments_AutocompleteDropdown__WEBPACK_IMPORTED_MODULE_5__["default"]();
  (0,flarum_common_extend__WEBPACK_IMPORTED_MODULE_1__.extend)((flarum_common_components_TextEditor__WEBPACK_IMPORTED_MODULE_2___default().prototype), 'oncreate', function () {
    var $editor = this.$('.TextEditor-editor').wrap('<div class="ComposerBody-emojiWrapper"></div>');
    this.navigator = new (flarum_common_utils_KeyboardNavigatable__WEBPACK_IMPORTED_MODULE_4___default())();
    this.navigator.when(function () {
      return dropdown.active;
    }).onUp(function () {
      return dropdown.navigate(-1);
    }).onDown(function () {
      return dropdown.navigate(1);
    }).onSelect(dropdown.complete.bind(dropdown)).onCancel(dropdown.hide.bind(dropdown)).bindTo($editor);
    $editor.after($container);
  });
  (0,flarum_common_extend__WEBPACK_IMPORTED_MODULE_1__.extend)((flarum_common_components_TextEditor__WEBPACK_IMPORTED_MODULE_2___default().prototype), 'buildEditorParams', function (params) {
    var _this = this;
    var relEmojiStart;
    var absEmojiStart;
    var typed;
    var applySuggestion = function applySuggestion(replacement) {
      _this.attrs.composer.editor.replaceBeforeCursor(absEmojiStart - 1, replacement + ' ');
      dropdown.hide();
    };
    params.inputListeners.push(function () {
      var selection = _this.attrs.composer.editor.getSelectionRange();
      var cursor = selection[0];
      if (selection[1] - cursor > 0) return;

      // Search backwards from the cursor for an ':' symbol. If we find
      // one and followed by a whitespace, we will want to show the
      // autocomplete dropdown!
      var lastChunk = _this.attrs.composer.editor.getLastNChars(15);
      absEmojiStart = 0;
      for (var i = lastChunk.length - 1; i >= 0; i--) {
        var character = lastChunk.substr(i, 1);
        // check what user typed, emoji names only contains alphanumeric,
        // underline, '+' and '-'
        if (!/[a-z0-9]|\+|\-|_|\:/.test(character)) break;
        // make sure ':' preceded by a whitespace or newline
        if (character === ':' && (i == 0 || /\s/.test(lastChunk.substr(i - 1, 1)))) {
          relEmojiStart = i + 1;
          absEmojiStart = cursor - lastChunk.length + i + 1;
          break;
        }
      }
      dropdown.hide();
      dropdown.active = false;
      if (absEmojiStart) {
        typed = lastChunk.substring(relEmojiStart).toLowerCase();
        var makeSuggestion = function makeSuggestion(_ref) {
          var emoji = _ref.emoji,
            name = _ref.name,
            code = _ref.code;
          return m("button", {
            key: emoji,
            onclick: function onclick() {
              return applySuggestion(emoji);
            },
            onmouseenter: function onmouseenter() {
              dropdown.setIndex($(this).parent().index() - 1);
            }
          }, m("img", {
            alt: emoji,
            className: "emoji",
            draggable: "false",
            loading: "lazy",
            src: (0,_common_cdn__WEBPACK_IMPORTED_MODULE_7__["default"])() + "72x72/" + code + ".png"
          }), name);
        };
        var buildSuggestions = function buildSuggestions() {
          var similarEmoji = [];

          // Build a regular expression to do a fuzzy match of the given input string
          var fuzzyRegexp = function fuzzyRegexp(str) {
            var reEscape = new RegExp('\\(([' + '+.*?[]{}()^$|\\'.replace(/(.)/g, '\\$1') + '])\\)', 'g');
            return new RegExp('(.*)' + str.toLowerCase().replace(/(.)/g, '($1)(.*?)').replace(reEscape, '(\\$1)') + '$', 'i');
          };
          var regTyped = fuzzyRegexp(typed);
          var maxSuggestions = 7;
          var findMatchingEmojis = function findMatchingEmojis(matcher) {
            for (var _i = 0; _i < emojiKeys.length && maxSuggestions > 0; _i++) {
              var curEmoji = emojiKeys[_i];
              if (similarEmoji.indexOf(curEmoji) === -1) {
                var names = simple_emoji_map__WEBPACK_IMPORTED_MODULE_0__["default"][curEmoji];
                for (var _iterator = _createForOfIteratorHelperLoose(names), _step; !(_step = _iterator()).done;) {
                  var name = _step.value;
                  if (matcher(name)) {
                    --maxSuggestions;
                    similarEmoji.push(curEmoji);
                    break;
                  }
                }
              }
            }
          };

          // First, try to find all emojis starting with the given string
          findMatchingEmojis(function (emoji) {
            return emoji.indexOf(typed) === 0;
          });

          // If there are still suggestions left, try for some fuzzy matches
          findMatchingEmojis(function (emoji) {
            return regTyped.test(emoji);
          });
          var suggestions = similarEmoji.map(function (emoji) {
            return {
              emoji: emoji,
              name: simple_emoji_map__WEBPACK_IMPORTED_MODULE_0__["default"][emoji][0],
              code: (0,_helpers_getEmojiIconCode__WEBPACK_IMPORTED_MODULE_6__["default"])(emoji)
            };
          }).map(makeSuggestion);
          if (suggestions.length) {
            dropdown.items = suggestions;
            m.render($container[0], dropdown.render());
            dropdown.show();
            var coordinates = _this.attrs.composer.editor.getCaretCoordinates(absEmojiStart);
            var width = dropdown.$().outerWidth();
            var height = dropdown.$().outerHeight();
            var parent = dropdown.$().offsetParent();
            var left = coordinates.left;
            var top = coordinates.top + 15;

            // Keep the dropdown inside the editor.
            if (top + height > parent.height()) {
              top = coordinates.top - height - 15;
            }
            if (left + width > parent.width()) {
              left = parent.width() - width;
            }

            // Prevent the dropdown from going off screen on mobile
            top = Math.max(-(parent.offset().top - $(document).scrollTop()), top);
            left = Math.max(-parent.offset().left, left);
            dropdown.show(left, top);
          }
        };
        buildSuggestions();
        dropdown.setIndex(0);
        dropdown.$().scrollTop(0);
        dropdown.active = true;
      }
    });
  });
  (0,flarum_common_extend__WEBPACK_IMPORTED_MODULE_1__.extend)((flarum_common_components_TextEditor__WEBPACK_IMPORTED_MODULE_2___default().prototype), 'toolbarItems', function (items) {
    var _this2 = this;
    items.add('emoji', m((flarum_common_components_TextEditorButton__WEBPACK_IMPORTED_MODULE_3___default()), {
      onclick: function onclick() {
        return _this2.attrs.composer.editor.insertAtCursor(' :');
      },
      icon: "far fa-smile"
    }, app.translator.trans('flarum-emoji.forum.composer.emoji_tooltip')));
  });
}

/***/ }),

/***/ "./src/forum/fragments/AutocompleteDropdown.js":
/*!*****************************************************!*\
  !*** ./src/forum/fragments/AutocompleteDropdown.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AutocompleteDropdown)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "../../../node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_common_Fragment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/common/Fragment */ "flarum/common/Fragment");
/* harmony import */ var flarum_common_Fragment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_common_Fragment__WEBPACK_IMPORTED_MODULE_1__);


var AutocompleteDropdown = /*#__PURE__*/function (_Fragment) {
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(AutocompleteDropdown, _Fragment);
  function AutocompleteDropdown() {
    var _this;
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _Fragment.call.apply(_Fragment, [this].concat(args)) || this;
    _this.items = [];
    _this.active = false;
    _this.index = 0;
    _this.keyWasJustPressed = false;
    return _this;
  }
  var _proto = AutocompleteDropdown.prototype;
  _proto.view = function view() {
    return m("ul", {
      className: "Dropdown-menu EmojiDropdown"
    }, m("li", {
      className: "Dropdown-header"
    }, app.translator.trans('flarum-emoji.forum.composer.type_to_search_text')), this.items.map(function (item) {
      return m("li", {
        key: item.attrs.key
      }, item);
    }));
  };
  _proto.show = function show(left, top) {
    this.$().show().css({
      left: left + 'px',
      top: top + 'px'
    });
    this.active = true;
  };
  _proto.hide = function hide() {
    this.$().hide();
    this.active = false;
  };
  _proto.navigate = function navigate(delta) {
    var _this2 = this;
    this.keyWasJustPressed = true;
    this.setIndex(this.index + delta, true);
    clearTimeout(this.keyWasJustPressedTimeout);
    this.keyWasJustPressedTimeout = setTimeout(function () {
      return _this2.keyWasJustPressed = false;
    }, 500);
  };
  _proto.complete = function complete() {
    this.$('li:not(.Dropdown-header)').eq(this.index).find('button').click();
  };
  _proto.setIndex = function setIndex(index, scrollToItem) {
    if (this.keyWasJustPressed && !scrollToItem) return;
    var $dropdown = this.$();
    var $items = $dropdown.find('li:not(.Dropdown-header)');
    var rangedIndex = index;
    if (rangedIndex < 0) {
      rangedIndex = $items.length - 1;
    } else if (rangedIndex >= $items.length) {
      rangedIndex = 0;
    }
    this.index = rangedIndex;
    var $item = $items.removeClass('active').eq(rangedIndex).addClass('active');
    if (scrollToItem) {
      var dropdownScroll = $dropdown.scrollTop();
      var dropdownTop = $dropdown.offset().top;
      var dropdownBottom = dropdownTop + $dropdown.outerHeight();
      var itemTop = $item.offset().top;
      var itemBottom = itemTop + $item.outerHeight();
      var scrollTop;
      if (itemTop < dropdownTop) {
        scrollTop = dropdownScroll - dropdownTop + itemTop - parseInt($dropdown.css('padding-top'), 10);
      } else if (itemBottom > dropdownBottom) {
        scrollTop = dropdownScroll - dropdownBottom + itemBottom + parseInt($dropdown.css('padding-bottom'), 10);
      }
      if (typeof scrollTop !== 'undefined') {
        $dropdown.stop(true).animate({
          scrollTop: scrollTop
        }, 100);
      }
    }
  };
  return AutocompleteDropdown;
}((flarum_common_Fragment__WEBPACK_IMPORTED_MODULE_1___default()));


/***/ }),

/***/ "./src/forum/helpers/getEmojiIconCode.js":
/*!***********************************************!*\
  !*** ./src/forum/helpers/getEmojiIconCode.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getEmojiIconCode)
/* harmony export */ });
/* harmony import */ var twemoji__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! twemoji */ "../../../node_modules/twemoji/dist/twemoji.esm.js");
/*! Copyright Twitter Inc. and other contributors. Licensed under MIT */ /*
                                                                         https://github.com/twitter/twemoji/blob/gh-pages/LICENSE
                                                                         */



// avoid using a string literal like '\u200D' here because minifiers expand it inline
var U200D = String.fromCharCode(0x200d);

// avoid runtime RegExp creation for not so smart,
// not JIT based, and old browsers / engines
var UFE0Fg = /\uFE0F/g;

/**
 * Used to both remove the possible variant
 *  and to convert utf16 into code points.
 *  If there is a zero-width-joiner (U+200D), leave the variants in.
 * @param   string    the raw text of the emoji match
 * @return  string    the code point
 */
function getEmojiIconCode(emoji) {
  return twemoji__WEBPACK_IMPORTED_MODULE_0__["default"].convert.toCodePoint(emoji.indexOf(U200D) < 0 ? emoji.replace(UFE0Fg, '') : emoji);
}

/***/ }),

/***/ "./src/forum/index.js":
/*!****************************!*\
  !*** ./src/forum/index.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/forum/app */ "flarum/forum/app");
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_app__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _addComposerAutocomplete__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./addComposerAutocomplete */ "./src/forum/addComposerAutocomplete.js");
/* harmony import */ var _renderEmoji__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./renderEmoji */ "./src/forum/renderEmoji.js");



flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().initializers.add('flarum-emoji', function () {
  // After typing ':' in the composer, show a dropdown suggesting a bunch of
  // emoji that the user could use.
  (0,_addComposerAutocomplete__WEBPACK_IMPORTED_MODULE_1__["default"])();

  // render emoji as image in Posts content and title.
  (0,_renderEmoji__WEBPACK_IMPORTED_MODULE_2__["default"])();
});

/***/ }),

/***/ "./src/forum/renderEmoji.js":
/*!**********************************!*\
  !*** ./src/forum/renderEmoji.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ renderEmoji)
/* harmony export */ });
/* harmony import */ var twemoji__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! twemoji */ "../../../node_modules/twemoji/dist/twemoji.esm.js");
/* harmony import */ var flarum_common_extend__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/common/extend */ "flarum/common/extend");
/* harmony import */ var flarum_common_extend__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_common_extend__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_common_models_Post__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/common/models/Post */ "flarum/common/models/Post");
/* harmony import */ var flarum_common_models_Post__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_common_models_Post__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _common_cdn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/cdn */ "./src/common/cdn.js");




function options() {
  return {
    base: (0,_common_cdn__WEBPACK_IMPORTED_MODULE_3__["default"])(),
    attributes: function attributes() {
      return {
        loading: 'lazy'
      };
    }
  };
}

/**
 * Parses an HTML string into a `<body>` node containing the HTML content.
 *
 * Vanilla JS implementation of jQuery's `$.parseHTML()`,
 * sourced from http://youmightnotneedjquery.com/
 */
function parseHTML(str) {
  var tmp = document.implementation.createHTMLDocument();
  tmp.body.innerHTML = str;
  return tmp.body;
}
function renderEmoji() {
  (0,flarum_common_extend__WEBPACK_IMPORTED_MODULE_1__.override)((flarum_common_models_Post__WEBPACK_IMPORTED_MODULE_2___default().prototype), 'contentHtml', function (original) {
    var contentHtml = original();
    if (this.oldContentHtml !== contentHtml) {
      // We need to parse the HTML string into a DOM node, then give it to Twemoji.
      //
      // This prevents some issues with the default find-replace that would be performed
      // on a string passed to `Twemoji.parse()`.
      //
      // The parse function can only handle a single DOM node provided, so we need to
      // wrap it in a node. In our `parseHTML` implementation, we wrap it in a `<body>`
      // element. This gets stripped below.
      //
      // See https://github.com/flarum/core/issues/2958
      var emojifiedDom = twemoji__WEBPACK_IMPORTED_MODULE_0__["default"].parse(parseHTML(contentHtml), options());

      // Steal the HTML string inside the emojified DOM `<body>` tag.
      this.emojifiedContentHtml = emojifiedDom.innerHTML;
      this.oldContentHtml = contentHtml;
    }
    return this.emojifiedContentHtml;
  });
  (0,flarum_common_extend__WEBPACK_IMPORTED_MODULE_1__.override)(s9e.TextFormatter, 'preview', function (original, text, element) {
    original(text, element);
    twemoji__WEBPACK_IMPORTED_MODULE_0__["default"].parse(element, options());
  });
}

/***/ }),

/***/ "../../../node_modules/twemoji/dist/twemoji.esm.js":
/*!*********************************************************!*\
  !*** ../../../node_modules/twemoji/dist/twemoji.esm.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/*! Copyright Twitter Inc. and other contributors. Licensed under MIT */
var twemoji = function () {
  "use strict";

  var twemoji = {
      base: "https://twemoji.maxcdn.com/v/14.0.2/",
      ext: ".png",
      size: "72x72",
      className: "emoji",
      convert: {
        fromCodePoint: fromCodePoint,
        toCodePoint: toCodePoint
      },
      onerror: function onerror() {
        if (this.parentNode) {
          this.parentNode.replaceChild(createText(this.alt, false), this);
        }
      },
      parse: parse,
      replace: replace,
      test: test
    },
    escaper = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      "'": "&#39;",
      '"': "&quot;"
    },
    re = /(?:\ud83d\udc68\ud83c\udffb\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc68\ud83c\udffc\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc68\ud83c\udffd\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc68\ud83c\udffe\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc68\ud83c\udfff\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffb\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffb\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc69\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffc\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffc\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc69\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffd\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffd\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc69\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffe\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffe\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc69\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udfff\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udfff\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc69\ud83c[\udffb-\udfff]|\ud83e\uddd1\ud83c\udffb\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83e\uddd1\ud83c[\udffc-\udfff]|\ud83e\uddd1\ud83c\udffc\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83e\uddd1\ud83c[\udffb\udffd-\udfff]|\ud83e\uddd1\ud83c\udffd\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83e\uddd1\ud83c[\udffb\udffc\udffe\udfff]|\ud83e\uddd1\ud83c\udffe\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83e\uddd1\ud83c[\udffb-\udffd\udfff]|\ud83e\uddd1\ud83c\udfff\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83e\uddd1\ud83c[\udffb-\udffe]|\ud83d\udc68\ud83c\udffb\u200d\u2764\ufe0f\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc68\ud83c\udffb\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffc-\udfff]|\ud83d\udc68\ud83c\udffc\u200d\u2764\ufe0f\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc68\ud83c\udffc\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb\udffd-\udfff]|\ud83d\udc68\ud83c\udffd\u200d\u2764\ufe0f\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc68\ud83c\udffd\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb\udffc\udffe\udfff]|\ud83d\udc68\ud83c\udffe\u200d\u2764\ufe0f\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc68\ud83c\udffe\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb-\udffd\udfff]|\ud83d\udc68\ud83c\udfff\u200d\u2764\ufe0f\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc68\ud83c\udfff\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb-\udffe]|\ud83d\udc69\ud83c\udffb\u200d\u2764\ufe0f\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffb\u200d\u2764\ufe0f\u200d\ud83d\udc69\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffb\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffc-\udfff]|\ud83d\udc69\ud83c\udffb\u200d\ud83e\udd1d\u200d\ud83d\udc69\ud83c[\udffc-\udfff]|\ud83d\udc69\ud83c\udffc\u200d\u2764\ufe0f\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffc\u200d\u2764\ufe0f\u200d\ud83d\udc69\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffc\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb\udffd-\udfff]|\ud83d\udc69\ud83c\udffc\u200d\ud83e\udd1d\u200d\ud83d\udc69\ud83c[\udffb\udffd-\udfff]|\ud83d\udc69\ud83c\udffd\u200d\u2764\ufe0f\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffd\u200d\u2764\ufe0f\u200d\ud83d\udc69\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffd\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb\udffc\udffe\udfff]|\ud83d\udc69\ud83c\udffd\u200d\ud83e\udd1d\u200d\ud83d\udc69\ud83c[\udffb\udffc\udffe\udfff]|\ud83d\udc69\ud83c\udffe\u200d\u2764\ufe0f\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffe\u200d\u2764\ufe0f\u200d\ud83d\udc69\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffe\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb-\udffd\udfff]|\ud83d\udc69\ud83c\udffe\u200d\ud83e\udd1d\u200d\ud83d\udc69\ud83c[\udffb-\udffd\udfff]|\ud83d\udc69\ud83c\udfff\u200d\u2764\ufe0f\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udfff\u200d\u2764\ufe0f\u200d\ud83d\udc69\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udfff\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb-\udffe]|\ud83d\udc69\ud83c\udfff\u200d\ud83e\udd1d\u200d\ud83d\udc69\ud83c[\udffb-\udffe]|\ud83e\uddd1\ud83c\udffb\u200d\u2764\ufe0f\u200d\ud83e\uddd1\ud83c[\udffc-\udfff]|\ud83e\uddd1\ud83c\udffb\u200d\ud83e\udd1d\u200d\ud83e\uddd1\ud83c[\udffb-\udfff]|\ud83e\uddd1\ud83c\udffc\u200d\u2764\ufe0f\u200d\ud83e\uddd1\ud83c[\udffb\udffd-\udfff]|\ud83e\uddd1\ud83c\udffc\u200d\ud83e\udd1d\u200d\ud83e\uddd1\ud83c[\udffb-\udfff]|\ud83e\uddd1\ud83c\udffd\u200d\u2764\ufe0f\u200d\ud83e\uddd1\ud83c[\udffb\udffc\udffe\udfff]|\ud83e\uddd1\ud83c\udffd\u200d\ud83e\udd1d\u200d\ud83e\uddd1\ud83c[\udffb-\udfff]|\ud83e\uddd1\ud83c\udffe\u200d\u2764\ufe0f\u200d\ud83e\uddd1\ud83c[\udffb-\udffd\udfff]|\ud83e\uddd1\ud83c\udffe\u200d\ud83e\udd1d\u200d\ud83e\uddd1\ud83c[\udffb-\udfff]|\ud83e\uddd1\ud83c\udfff\u200d\u2764\ufe0f\u200d\ud83e\uddd1\ud83c[\udffb-\udffe]|\ud83e\uddd1\ud83c\udfff\u200d\ud83e\udd1d\u200d\ud83e\uddd1\ud83c[\udffb-\udfff]|\ud83d\udc68\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68|\ud83d\udc69\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d[\udc68\udc69]|\ud83e\udef1\ud83c\udffb\u200d\ud83e\udef2\ud83c[\udffc-\udfff]|\ud83e\udef1\ud83c\udffc\u200d\ud83e\udef2\ud83c[\udffb\udffd-\udfff]|\ud83e\udef1\ud83c\udffd\u200d\ud83e\udef2\ud83c[\udffb\udffc\udffe\udfff]|\ud83e\udef1\ud83c\udffe\u200d\ud83e\udef2\ud83c[\udffb-\udffd\udfff]|\ud83e\udef1\ud83c\udfff\u200d\ud83e\udef2\ud83c[\udffb-\udffe]|\ud83d\udc68\u200d\u2764\ufe0f\u200d\ud83d\udc68|\ud83d\udc69\u200d\u2764\ufe0f\u200d\ud83d[\udc68\udc69]|\ud83e\uddd1\u200d\ud83e\udd1d\u200d\ud83e\uddd1|\ud83d\udc6b\ud83c[\udffb-\udfff]|\ud83d\udc6c\ud83c[\udffb-\udfff]|\ud83d\udc6d\ud83c[\udffb-\udfff]|\ud83d\udc8f\ud83c[\udffb-\udfff]|\ud83d\udc91\ud83c[\udffb-\udfff]|\ud83e\udd1d\ud83c[\udffb-\udfff]|\ud83d[\udc6b-\udc6d\udc8f\udc91]|\ud83e\udd1d)|(?:\ud83d[\udc68\udc69]|\ud83e\uddd1)(?:\ud83c[\udffb-\udfff])?\u200d(?:\u2695\ufe0f|\u2696\ufe0f|\u2708\ufe0f|\ud83c[\udf3e\udf73\udf7c\udf84\udf93\udfa4\udfa8\udfeb\udfed]|\ud83d[\udcbb\udcbc\udd27\udd2c\ude80\ude92]|\ud83e[\uddaf-\uddb3\uddbc\uddbd])|(?:\ud83c[\udfcb\udfcc]|\ud83d[\udd74\udd75]|\u26f9)((?:\ud83c[\udffb-\udfff]|\ufe0f)\u200d[\u2640\u2642]\ufe0f)|(?:\ud83c[\udfc3\udfc4\udfca]|\ud83d[\udc6e\udc70\udc71\udc73\udc77\udc81\udc82\udc86\udc87\ude45-\ude47\ude4b\ude4d\ude4e\udea3\udeb4-\udeb6]|\ud83e[\udd26\udd35\udd37-\udd39\udd3d\udd3e\uddb8\uddb9\uddcd-\uddcf\uddd4\uddd6-\udddd])(?:\ud83c[\udffb-\udfff])?\u200d[\u2640\u2642]\ufe0f|(?:\ud83d\udc68\u200d\ud83d\udc68\u200d\ud83d\udc66\u200d\ud83d\udc66|\ud83d\udc68\u200d\ud83d\udc68\u200d\ud83d\udc67\u200d\ud83d[\udc66\udc67]|\ud83d\udc68\u200d\ud83d\udc69\u200d\ud83d\udc66\u200d\ud83d\udc66|\ud83d\udc68\u200d\ud83d\udc69\u200d\ud83d\udc67\u200d\ud83d[\udc66\udc67]|\ud83d\udc69\u200d\ud83d\udc69\u200d\ud83d\udc66\u200d\ud83d\udc66|\ud83d\udc69\u200d\ud83d\udc69\u200d\ud83d\udc67\u200d\ud83d[\udc66\udc67]|\ud83d\udc68\u200d\ud83d\udc66\u200d\ud83d\udc66|\ud83d\udc68\u200d\ud83d\udc67\u200d\ud83d[\udc66\udc67]|\ud83d\udc68\u200d\ud83d\udc68\u200d\ud83d[\udc66\udc67]|\ud83d\udc68\u200d\ud83d\udc69\u200d\ud83d[\udc66\udc67]|\ud83d\udc69\u200d\ud83d\udc66\u200d\ud83d\udc66|\ud83d\udc69\u200d\ud83d\udc67\u200d\ud83d[\udc66\udc67]|\ud83d\udc69\u200d\ud83d\udc69\u200d\ud83d[\udc66\udc67]|\ud83c\udff3\ufe0f\u200d\u26a7\ufe0f|\ud83c\udff3\ufe0f\u200d\ud83c\udf08|\ud83d\ude36\u200d\ud83c\udf2b\ufe0f|\u2764\ufe0f\u200d\ud83d\udd25|\u2764\ufe0f\u200d\ud83e\ude79|\ud83c\udff4\u200d\u2620\ufe0f|\ud83d\udc15\u200d\ud83e\uddba|\ud83d\udc3b\u200d\u2744\ufe0f|\ud83d\udc41\u200d\ud83d\udde8|\ud83d\udc68\u200d\ud83d[\udc66\udc67]|\ud83d\udc69\u200d\ud83d[\udc66\udc67]|\ud83d\udc6f\u200d\u2640\ufe0f|\ud83d\udc6f\u200d\u2642\ufe0f|\ud83d\ude2e\u200d\ud83d\udca8|\ud83d\ude35\u200d\ud83d\udcab|\ud83e\udd3c\u200d\u2640\ufe0f|\ud83e\udd3c\u200d\u2642\ufe0f|\ud83e\uddde\u200d\u2640\ufe0f|\ud83e\uddde\u200d\u2642\ufe0f|\ud83e\udddf\u200d\u2640\ufe0f|\ud83e\udddf\u200d\u2642\ufe0f|\ud83d\udc08\u200d\u2b1b)|[#*0-9]\ufe0f?\u20e3|(?:[©®\u2122\u265f]\ufe0f)|(?:\ud83c[\udc04\udd70\udd71\udd7e\udd7f\ude02\ude1a\ude2f\ude37\udf21\udf24-\udf2c\udf36\udf7d\udf96\udf97\udf99-\udf9b\udf9e\udf9f\udfcd\udfce\udfd4-\udfdf\udff3\udff5\udff7]|\ud83d[\udc3f\udc41\udcfd\udd49\udd4a\udd6f\udd70\udd73\udd76-\udd79\udd87\udd8a-\udd8d\udda5\udda8\uddb1\uddb2\uddbc\uddc2-\uddc4\uddd1-\uddd3\udddc-\uddde\udde1\udde3\udde8\uddef\uddf3\uddfa\udecb\udecd-\udecf\udee0-\udee5\udee9\udef0\udef3]|[\u203c\u2049\u2139\u2194-\u2199\u21a9\u21aa\u231a\u231b\u2328\u23cf\u23ed-\u23ef\u23f1\u23f2\u23f8-\u23fa\u24c2\u25aa\u25ab\u25b6\u25c0\u25fb-\u25fe\u2600-\u2604\u260e\u2611\u2614\u2615\u2618\u2620\u2622\u2623\u2626\u262a\u262e\u262f\u2638-\u263a\u2640\u2642\u2648-\u2653\u2660\u2663\u2665\u2666\u2668\u267b\u267f\u2692-\u2697\u2699\u269b\u269c\u26a0\u26a1\u26a7\u26aa\u26ab\u26b0\u26b1\u26bd\u26be\u26c4\u26c5\u26c8\u26cf\u26d1\u26d3\u26d4\u26e9\u26ea\u26f0-\u26f5\u26f8\u26fa\u26fd\u2702\u2708\u2709\u270f\u2712\u2714\u2716\u271d\u2721\u2733\u2734\u2744\u2747\u2757\u2763\u2764\u27a1\u2934\u2935\u2b05-\u2b07\u2b1b\u2b1c\u2b50\u2b55\u3030\u303d\u3297\u3299])(?:\ufe0f|(?!\ufe0e))|(?:(?:\ud83c[\udfcb\udfcc]|\ud83d[\udd74\udd75\udd90]|[\u261d\u26f7\u26f9\u270c\u270d])(?:\ufe0f|(?!\ufe0e))|(?:\ud83c[\udf85\udfc2-\udfc4\udfc7\udfca]|\ud83d[\udc42\udc43\udc46-\udc50\udc66-\udc69\udc6e\udc70-\udc78\udc7c\udc81-\udc83\udc85-\udc87\udcaa\udd7a\udd95\udd96\ude45-\ude47\ude4b-\ude4f\udea3\udeb4-\udeb6\udec0\udecc]|\ud83e[\udd0c\udd0f\udd18-\udd1c\udd1e\udd1f\udd26\udd30-\udd39\udd3d\udd3e\udd77\uddb5\uddb6\uddb8\uddb9\uddbb\uddcd-\uddcf\uddd1-\udddd\udec3-\udec5\udef0-\udef6]|[\u270a\u270b]))(?:\ud83c[\udffb-\udfff])?|(?:\ud83c\udff4\udb40\udc67\udb40\udc62\udb40\udc65\udb40\udc6e\udb40\udc67\udb40\udc7f|\ud83c\udff4\udb40\udc67\udb40\udc62\udb40\udc73\udb40\udc63\udb40\udc74\udb40\udc7f|\ud83c\udff4\udb40\udc67\udb40\udc62\udb40\udc77\udb40\udc6c\udb40\udc73\udb40\udc7f|\ud83c\udde6\ud83c[\udde8-\uddec\uddee\uddf1\uddf2\uddf4\uddf6-\uddfa\uddfc\uddfd\uddff]|\ud83c\udde7\ud83c[\udde6\udde7\udde9-\uddef\uddf1-\uddf4\uddf6-\uddf9\uddfb\uddfc\uddfe\uddff]|\ud83c\udde8\ud83c[\udde6\udde8\udde9\uddeb-\uddee\uddf0-\uddf5\uddf7\uddfa-\uddff]|\ud83c\udde9\ud83c[\uddea\uddec\uddef\uddf0\uddf2\uddf4\uddff]|\ud83c\uddea\ud83c[\udde6\udde8\uddea\uddec\udded\uddf7-\uddfa]|\ud83c\uddeb\ud83c[\uddee-\uddf0\uddf2\uddf4\uddf7]|\ud83c\uddec\ud83c[\udde6\udde7\udde9-\uddee\uddf1-\uddf3\uddf5-\uddfa\uddfc\uddfe]|\ud83c\udded\ud83c[\uddf0\uddf2\uddf3\uddf7\uddf9\uddfa]|\ud83c\uddee\ud83c[\udde8-\uddea\uddf1-\uddf4\uddf6-\uddf9]|\ud83c\uddef\ud83c[\uddea\uddf2\uddf4\uddf5]|\ud83c\uddf0\ud83c[\uddea\uddec-\uddee\uddf2\uddf3\uddf5\uddf7\uddfc\uddfe\uddff]|\ud83c\uddf1\ud83c[\udde6-\udde8\uddee\uddf0\uddf7-\uddfb\uddfe]|\ud83c\uddf2\ud83c[\udde6\udde8-\udded\uddf0-\uddff]|\ud83c\uddf3\ud83c[\udde6\udde8\uddea-\uddec\uddee\uddf1\uddf4\uddf5\uddf7\uddfa\uddff]|\ud83c\uddf4\ud83c\uddf2|\ud83c\uddf5\ud83c[\udde6\uddea-\udded\uddf0-\uddf3\uddf7-\uddf9\uddfc\uddfe]|\ud83c\uddf6\ud83c\udde6|\ud83c\uddf7\ud83c[\uddea\uddf4\uddf8\uddfa\uddfc]|\ud83c\uddf8\ud83c[\udde6-\uddea\uddec-\uddf4\uddf7-\uddf9\uddfb\uddfd-\uddff]|\ud83c\uddf9\ud83c[\udde6\udde8\udde9\uddeb-\udded\uddef-\uddf4\uddf7\uddf9\uddfb\uddfc\uddff]|\ud83c\uddfa\ud83c[\udde6\uddec\uddf2\uddf3\uddf8\uddfe\uddff]|\ud83c\uddfb\ud83c[\udde6\udde8\uddea\uddec\uddee\uddf3\uddfa]|\ud83c\uddfc\ud83c[\uddeb\uddf8]|\ud83c\uddfd\ud83c\uddf0|\ud83c\uddfe\ud83c[\uddea\uddf9]|\ud83c\uddff\ud83c[\udde6\uddf2\uddfc]|\ud83c[\udccf\udd8e\udd91-\udd9a\udde6-\uddff\ude01\ude32-\ude36\ude38-\ude3a\ude50\ude51\udf00-\udf20\udf2d-\udf35\udf37-\udf7c\udf7e-\udf84\udf86-\udf93\udfa0-\udfc1\udfc5\udfc6\udfc8\udfc9\udfcf-\udfd3\udfe0-\udff0\udff4\udff8-\udfff]|\ud83d[\udc00-\udc3e\udc40\udc44\udc45\udc51-\udc65\udc6a\udc6f\udc79-\udc7b\udc7d-\udc80\udc84\udc88-\udc8e\udc90\udc92-\udca9\udcab-\udcfc\udcff-\udd3d\udd4b-\udd4e\udd50-\udd67\udda4\uddfb-\ude44\ude48-\ude4a\ude80-\udea2\udea4-\udeb3\udeb7-\udebf\udec1-\udec5\uded0-\uded2\uded5-\uded7\udedd-\udedf\udeeb\udeec\udef4-\udefc\udfe0-\udfeb\udff0]|\ud83e[\udd0d\udd0e\udd10-\udd17\udd20-\udd25\udd27-\udd2f\udd3a\udd3c\udd3f-\udd45\udd47-\udd76\udd78-\uddb4\uddb7\uddba\uddbc-\uddcc\uddd0\uddde-\uddff\ude70-\ude74\ude78-\ude7c\ude80-\ude86\ude90-\udeac\udeb0-\udeba\udec0-\udec2\uded0-\uded9\udee0-\udee7]|[\u23e9-\u23ec\u23f0\u23f3\u267e\u26ce\u2705\u2728\u274c\u274e\u2753-\u2755\u2795-\u2797\u27b0\u27bf\ue50a])|\ufe0f/g,
    UFE0Fg = /\uFE0F/g,
    U200D = String.fromCharCode(8205),
    rescaper = /[&<>'"]/g,
    shouldntBeParsed = /^(?:iframe|noframes|noscript|script|select|style|textarea)$/,
    fromCharCode = String.fromCharCode;
  return twemoji;
  function createText(text, clean) {
    return document.createTextNode(clean ? text.replace(UFE0Fg, "") : text);
  }
  function escapeHTML(s) {
    return s.replace(rescaper, replacer);
  }
  function defaultImageSrcGenerator(icon, options) {
    return "".concat(options.base, options.size, "/", icon, options.ext);
  }
  function grabAllTextNodes(node, allText) {
    var childNodes = node.childNodes,
      length = childNodes.length,
      subnode,
      nodeType;
    while (length--) {
      subnode = childNodes[length];
      nodeType = subnode.nodeType;
      if (nodeType === 3) {
        allText.push(subnode);
      } else if (nodeType === 1 && !("ownerSVGElement" in subnode) && !shouldntBeParsed.test(subnode.nodeName.toLowerCase())) {
        grabAllTextNodes(subnode, allText);
      }
    }
    return allText;
  }
  function grabTheRightIcon(rawText) {
    return toCodePoint(rawText.indexOf(U200D) < 0 ? rawText.replace(UFE0Fg, "") : rawText);
  }
  function parseNode(node, options) {
    var allText = grabAllTextNodes(node, []),
      length = allText.length,
      attrib,
      attrname,
      modified,
      fragment,
      subnode,
      text,
      match,
      i,
      index,
      img,
      rawText,
      iconId,
      src;
    while (length--) {
      modified = false;
      fragment = document.createDocumentFragment();
      subnode = allText[length];
      text = subnode.nodeValue;
      i = 0;
      while (match = re.exec(text)) {
        index = match.index;
        if (index !== i) {
          fragment.appendChild(createText(text.slice(i, index), true));
        }
        rawText = match[0];
        iconId = grabTheRightIcon(rawText);
        i = index + rawText.length;
        src = options.callback(iconId, options);
        if (iconId && src) {
          img = new Image();
          img.onerror = options.onerror;
          img.setAttribute("draggable", "false");
          attrib = options.attributes(rawText, iconId);
          for (attrname in attrib) {
            if (attrib.hasOwnProperty(attrname) && attrname.indexOf("on") !== 0 && !img.hasAttribute(attrname)) {
              img.setAttribute(attrname, attrib[attrname]);
            }
          }
          img.className = options.className;
          img.alt = rawText;
          img.src = src;
          modified = true;
          fragment.appendChild(img);
        }
        if (!img) fragment.appendChild(createText(rawText, false));
        img = null;
      }
      if (modified) {
        if (i < text.length) {
          fragment.appendChild(createText(text.slice(i), true));
        }
        subnode.parentNode.replaceChild(fragment, subnode);
      }
    }
    return node;
  }
  function parseString(str, options) {
    return replace(str, function (rawText) {
      var ret = rawText,
        iconId = grabTheRightIcon(rawText),
        src = options.callback(iconId, options),
        attrib,
        attrname;
      if (iconId && src) {
        ret = "<img ".concat('class="', options.className, '" ', 'draggable="false" ', 'alt="', rawText, '"', ' src="', src, '"');
        attrib = options.attributes(rawText, iconId);
        for (attrname in attrib) {
          if (attrib.hasOwnProperty(attrname) && attrname.indexOf("on") !== 0 && ret.indexOf(" " + attrname + "=") === -1) {
            ret = ret.concat(" ", attrname, '="', escapeHTML(attrib[attrname]), '"');
          }
        }
        ret = ret.concat("/>");
      }
      return ret;
    });
  }
  function replacer(m) {
    return escaper[m];
  }
  function returnNull() {
    return null;
  }
  function toSizeSquaredAsset(value) {
    return typeof value === "number" ? value + "x" + value : value;
  }
  function fromCodePoint(codepoint) {
    var code = typeof codepoint === "string" ? parseInt(codepoint, 16) : codepoint;
    if (code < 65536) {
      return fromCharCode(code);
    }
    code -= 65536;
    return fromCharCode(55296 + (code >> 10), 56320 + (code & 1023));
  }
  function parse(what, how) {
    if (!how || typeof how === "function") {
      how = {
        callback: how
      };
    }
    return (typeof what === "string" ? parseString : parseNode)(what, {
      callback: how.callback || defaultImageSrcGenerator,
      attributes: typeof how.attributes === "function" ? how.attributes : returnNull,
      base: typeof how.base === "string" ? how.base : twemoji.base,
      ext: how.ext || twemoji.ext,
      size: how.folder || toSizeSquaredAsset(how.size || twemoji.size),
      className: how.className || twemoji.className,
      onerror: how.onerror || twemoji.onerror
    });
  }
  function replace(text, callback) {
    return String(text).replace(re, callback);
  }
  function test(text) {
    re.lastIndex = 0;
    var result = re.test(text);
    re.lastIndex = 0;
    return result;
  }
  function toCodePoint(unicodeSurrogates, sep) {
    var r = [],
      c = 0,
      p = 0,
      i = 0;
    while (i < unicodeSurrogates.length) {
      c = unicodeSurrogates.charCodeAt(i++);
      if (p) {
        r.push((65536 + (p - 55296 << 10) + (c - 56320)).toString(16));
        p = 0;
      } else if (55296 <= c && c <= 56319) {
        p = c;
      } else {
        r.push(c.toString(16));
      }
    }
    return r.join(sep || "-");
  }
}();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (twemoji);

/***/ }),

/***/ "flarum/common/Fragment":
/*!********************************************************!*\
  !*** external "flarum.core.compat['common/Fragment']" ***!
  \********************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/Fragment'];

/***/ }),

/***/ "flarum/common/components/TextEditor":
/*!*********************************************************************!*\
  !*** external "flarum.core.compat['common/components/TextEditor']" ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/components/TextEditor'];

/***/ }),

/***/ "flarum/common/components/TextEditorButton":
/*!***************************************************************************!*\
  !*** external "flarum.core.compat['common/components/TextEditorButton']" ***!
  \***************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/components/TextEditorButton'];

/***/ }),

/***/ "flarum/common/extend":
/*!******************************************************!*\
  !*** external "flarum.core.compat['common/extend']" ***!
  \******************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/extend'];

/***/ }),

/***/ "flarum/common/models/Post":
/*!***********************************************************!*\
  !*** external "flarum.core.compat['common/models/Post']" ***!
  \***********************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/models/Post'];

/***/ }),

/***/ "flarum/common/utils/KeyboardNavigatable":
/*!*************************************************************************!*\
  !*** external "flarum.core.compat['common/utils/KeyboardNavigatable']" ***!
  \*************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/utils/KeyboardNavigatable'];

/***/ }),

/***/ "flarum/forum/app":
/*!**************************************************!*\
  !*** external "flarum.core.compat['forum/app']" ***!
  \**************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['forum/app'];

/***/ }),

/***/ "../../../node_modules/@babel/runtime/helpers/esm/inheritsLoose.js":
/*!*************************************************************************!*\
  !*** ../../../node_modules/@babel/runtime/helpers/esm/inheritsLoose.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _inheritsLoose)
/* harmony export */ });
/* harmony import */ var _setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setPrototypeOf.js */ "../../../node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js");

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  (0,_setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__["default"])(subClass, superClass);
}

/***/ }),

/***/ "../../../node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js":
/*!**************************************************************************!*\
  !*** ../../../node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _setPrototypeOf)
/* harmony export */ });
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };
  return _setPrototypeOf(o, p);
}

/***/ }),

/***/ "../../../node_modules/simple-emoji-map/index.mjs":
/*!********************************************************!*\
  !*** ../../../node_modules/simple-emoji-map/index.mjs ***!
  \********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport default export from named module */ _generated_emojis_json__WEBPACK_IMPORTED_MODULE_0__),
/* harmony export */   "variants": () => (/* reexport default export from named module */ _generated_variants_json__WEBPACK_IMPORTED_MODULE_1__)
/* harmony export */ });
/* harmony import */ var _generated_emojis_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./generated/emojis.json */ "../../../node_modules/simple-emoji-map/generated/emojis.json");
/* harmony import */ var _generated_variants_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./generated/variants.json */ "../../../node_modules/simple-emoji-map/generated/variants.json");





/***/ }),

/***/ "../../../node_modules/simple-emoji-map/generated/emojis.json":
/*!********************************************************************!*\
  !*** ../../../node_modules/simple-emoji-map/generated/emojis.json ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"🇦":["regional_indicator_a"],"🇧":["regional_indicator_b"],"🇨":["regional_indicator_c"],"🇩":["regional_indicator_d"],"🇪":["regional_indicator_e"],"🇫":["regional_indicator_f"],"🇬":["regional_indicator_g"],"🇭":["regional_indicator_h"],"🇮":["regional_indicator_i"],"🇯":["regional_indicator_j"],"🇰":["regional_indicator_k"],"🇱":["regional_indicator_l"],"🇲":["regional_indicator_m"],"🇳":["regional_indicator_n"],"🇴":["regional_indicator_o"],"🇵":["regional_indicator_p"],"🇶":["regional_indicator_q"],"🇷":["regional_indicator_r"],"🇸":["regional_indicator_s"],"🇹":["regional_indicator_t"],"🇺":["regional_indicator_u"],"🇻":["regional_indicator_v"],"🇼":["regional_indicator_w"],"🇽":["regional_indicator_x"],"🇾":["regional_indicator_y"],"🇿":["regional_indicator_z"],"😀":["grinning","grinning_face"],"😃":["grinning_face_with_big_eyes","smiley"],"😄":["grinning_face_with_closed_eyes","smile"],"😁":["beaming_face","grin"],"😆":["laughing","lol","satisfied","squinting_face"],"😅":["grinning_face_with_sweat","sweat_smile"],"🤣":["rofl"],"😂":["joy","lmao","tears_of_joy"],"🙂":["slightly_smiling_face"],"🙃":["upside_down_face"],"🫠":["melt","melting_face"],"😉":["wink","winking_face"],"😊":["blush","smiling_face_with_closed_eyes"],"😇":["halo","innocent"],"🥰":["smiling_face_with_3_hearts"],"😍":["heart_eyes","smiling_face_with_heart_eyes"],"🤩":["star_struck"],"😘":["blowing_a_kiss","kissing_heart"],"😗":["kissing","kissing_face"],"☺️":["relaxed","smiling_face"],"😚":["kissing_closed_eyes","kissing_face_with_closed_eyes"],"😙":["kissing_face_with_smiling_eyes","kissing_smiling_eyes"],"🥲":["smiling_face_with_tear"],"😋":["savoring_food","yum"],"😛":["face_with_tongue","stuck_out_tongue"],"😜":["stuck_out_tongue_winking_eye"],"🤪":["zany","zany_face"],"😝":["stuck_out_tongue_closed_eyes"],"🤑":["money_mouth_face"],"🤗":["hug","hugging","hugging_face"],"🤭":["face_with_hand_over_mouth","hand_over_mouth"],"🫢":["face_with_open_eyes_hand_over_mouth","gasp"],"🫣":["face_with_peeking_eye","peek"],"🤫":["shush","shushing_face"],"🤔":["thinking","thinking_face","wtf"],"🫡":["salute","saluting_face"],"🤐":["zipper_mouth","zipper_mouth_face"],"🤨":["face_with_raised_eyebrow","raised_eyebrow"],"😐️":["neutral","neutral_face"],"😑":["expressionless","expressionless_face"],"😶":["no_mouth"],"🫥":["dotted_line_face"],"😶‍🌫️":["in_clouds"],"😏":["smirk","smirking","smirking_face"],"😒":["unamused","unamused_face"],"🙄":["rolling_eyes"],"😬":["grimacing","grimacing_face"],"😮‍💨":["exhale","exhaling"],"🤥":["lying","lying_face"],"😌":["relieved","relieved_face"],"😔":["pensive","pensive_face"],"😪":["sleepy","sleepy_face"],"🤤":["drooling","drooling_face"],"😴":["sleeping","sleeping_face"],"😷":["mask","medical_mask"],"🤒":["face_with_thermometer"],"🤕":["face_with_head_bandage"],"🤢":["nauseated","nauseated_face"],"🤮":["face_vomiting","vomiting"],"🤧":["sneezing","sneezing_face"],"🥵":["hot","hot_face"],"🥶":["cold","cold_face"],"🥴":["woozy","woozy_face"],"😵":["dizzy_face","knocked_out"],"😵‍💫":["dizzy_eyes"],"🤯":["exploding_head"],"🤠":["cowboy","cowboy_face"],"🥳":["hooray","partying","partying_face"],"🥸":["disguised","disguised_face"],"😎":["smiling_face_with_sunglasses","sunglasses_cool","too_cool"],"🤓":["nerd","nerd_face"],"🧐":["face_with_monocle"],"😕":["confused","confused_face"],"🫤":["face_with_diagonal_mouth"],"😟":["worried","worried_face"],"🙁":["slightly_frowning_face"],"☹️":["white_frowning_face"],"😮":["face_with_open_mouth","open_mouth"],"😯":["hushed","hushed_face"],"😲":["astonished","astonished_face"],"😳":["flushed","flushed_face"],"🥺":["pleading","pleading_face"],"🥹":["face_holding_back_tears","watery_eyes"],"😦":["frowning","frowning_face"],"😧":["anguished","anguished_face"],"😨":["fearful","fearful_face"],"😰":["anxious","anxious_face","cold_sweat"],"😥":["disappointed_relieved","sad_relieved_face"],"😢":["cry","crying_face"],"😭":["loudly_crying_face","sob"],"😱":["scream","screaming_in_fear"],"😖":["confounded","confounded_face"],"😣":["persevere","persevering_face"],"😞":["disappointed","disappointed_face"],"😓":["downcast_face","sweat"],"😩":["weary","weary_face"],"😫":["tired","tired_face"],"🥱":["yawn","yawning","yawning_face"],"😤":["nose_steam","triumph"],"😡":["pout","pouting_face","rage"],"😠":["angry","angry_face"],"🤬":["censored","face_with_symbols_on_mouth"],"😈":["smiling_imp"],"👿":["angry_imp","imp"],"💀":["skull"],"☠️":["skull_and_crossbones"],"💩":["poop","shit"],"🤡":["clown","clown_face"],"👹":["japanese_ogre","ogre"],"👺":["goblin","japanese_goblin"],"👻":["ghost"],"👽️":["alien"],"👾":["alien_monster","space_invader"],"🤖":["robot","robot_face"],"😺":["grinning_cat","smiley_cat"],"😸":["grinning_cat_with_closed_eyes","smile_cat"],"😹":["joy_cat","tears_of_joy_cat"],"😻":["heart_eyes_cat","smiling_cat_with_heart_eyes"],"😼":["smirk_cat","wry_smile_cat"],"😽":["kissing_cat"],"🙀":["scream_cat","weary_cat"],"😿":["crying_cat"],"😾":["pouting_cat"],"🙈":["see_no_evil"],"🙉":["hear_no_evil"],"🙊":["speak_no_evil"],"💋":["kiss"],"💌":["love_letter"],"💘":["cupid","heart_with_arrow"],"💝":["gift_heart","heart_with_ribbon"],"💖":["sparkling_heart"],"💗":["growing_heart","heartpulse"],"💓":["beating_heart","heartbeat"],"💞":["revolving_hearts"],"💕":["two_hearts"],"💟":["heart_decoration"],"❣️":["heart_exclamation"],"💔":["broken_heart"],"❤️‍🔥":["heart_on_fire"],"❤️‍🩹":["mending_heart"],"❤️":["heart","red_heart"],"🧡":["orange_heart"],"💛":["yellow_heart"],"💚":["green_heart"],"💙":["blue_heart"],"💜":["purple_heart"],"🤎":["brown_heart"],"🖤":["black_heart"],"🤍":["white_heart"],"💯":["100"],"💢":["anger"],"💥":["boom","collision"],"💫":["dizzy"],"💦":["sweat_drops"],"💨":["dash","dashing_away"],"🕳️":["hole"],"💣️":["bomb"],"💬":["speech_balloon"],"👁‍🗨":["eye_in_speech_bubble"],"🗨️":["left_speech_bubble"],"🗯️":["right_anger_bubble"],"💭":["thought_balloon"],"💤":["zzz"],"👋":["wave","waving_hand"],"🤚":["raised_back_of_hand"],"🖐️":["raised_hand_with_fingers_splayed"],"✋":["high_five","raised_hand"],"🖖":["vulcan"],"🫱":["rightwards_hand"],"🫲":["leftwards_hand"],"🫳":["palm_down"],"🫴":["palm_up"],"👌":["ok_hand"],"🤌":["pinch","pinched_fingers"],"🤏":["pinching_hand"],"✌️":["v","victory"],"🤞":["fingers_crossed"],"🫰":["hand_with_index_finger_and_thumb_crossed"],"🤟":["love_you_gesture"],"🤘":["metal","sign_of_the_horns"],"🤙":["call_me_hand"],"👈️":["point_left"],"👉️":["point_right"],"👆️":["point_up"],"🖕":["middle_finger"],"👇️":["point_down"],"☝️":["point_up_2"],"🫵":["point_forward"],"👍️":["+1","thumbsup","yes"],"👎️":["-1","no","thumbsdown"],"✊":["fist"],"👊":["punch"],"🤛":["left_facing_fist"],"🤜":["right_facing_fist"],"👏":["clap","clapping_hands"],"🙌":["raised_hands"],"🫶":["heart_hands"],"👐":["open_hands"],"🤲":["palms_up_together"],"🤝":["handshake"],"🙏":["folded_hands","pray"],"✍️":["writing_hand"],"💅":["nail_care","nail_polish"],"🤳":["selfie"],"💪":["muscle","right_bicep"],"🦾":["mechanical_arm"],"🦿":["mechanical_leg"],"🦵":["leg"],"🦶":["foot"],"👂️":["ear"],"🦻":["ear_with_hearing_aid","hearing_aid"],"👃":["nose"],"🧠":["brain"],"🫀":["anatomical_heart"],"🫁":["lungs"],"🦷":["tooth"],"🦴":["bone"],"👀":["eyes"],"👁️":["eye"],"👅":["tongue"],"👄":["lips","mouth"],"🫦":["biting_lip"],"👶":["baby"],"🧒":["child"],"👦":["boy"],"👧":["girl"],"🧑":["adult"],"👱":["blond_haired"],"👨":["man"],"🧔":["person_bearded"],"🧔‍♂️":["man_bearded"],"🧔‍♀️":["woman_bearded"],"👨‍🦰":["man_red_haired"],"👨‍🦱":["man_curly_haired"],"👨‍🦳":["man_white_haired"],"👨‍🦲":["man_bald"],"👩":["woman"],"👩‍🦰":["woman_red_haired"],"🧑‍🦰":["red_haired"],"👩‍🦱":["woman_curly_haired"],"🧑‍🦱":["curly_haired"],"👩‍🦳":["woman_white_haired"],"🧑‍🦳":["white_haired"],"👩‍🦲":["woman_bald"],"🧑‍🦲":["bald"],"👱‍♀️":["woman_blond_haired"],"👱‍♂️":["man_blond_haired"],"🧓":["older_adult"],"👴":["older_man"],"👵":["older_woman"],"🙍":["person_frowning"],"🙍‍♂️":["man_frowning"],"🙍‍♀️":["woman_frowning"],"🙎":["person_pouting","pouting"],"🙎‍♂️":["man_pouting"],"🙎‍♀️":["woman_pouting"],"🙅":["no_good","person_gesturing_no"],"🙅‍♂️":["man_gesturing_no"],"🙅‍♀️":["woman_gesturing_no"],"🙆":["all_good","person_gesturing_ok"],"🙆‍♂️":["man_gesturing_ok"],"🙆‍♀️":["woman_gesturing_ok"],"💁":["person_tipping_hand"],"💁‍♂️":["man_tipping_hand"],"💁‍♀️":["woman_tipping_hand"],"🙋":["person_raising_hand"],"🙋‍♂️":["man_raising_hand"],"🙋‍♀️":["woman_raising_hand"],"🧏":["deaf_person"],"🧏‍♂️":["deaf_man"],"🧏‍♀️":["deaf_woman"],"🙇":["bow","person_bowing"],"🙇‍♂️":["man_bowing"],"🙇‍♀️":["woman_bowing"],"🤦":["facepalm","person_facepalming"],"🤦‍♂️":["man_facepalming"],"🤦‍♀️":["woman_facepalming"],"🤷":["person_shrugging","shrug"],"🤷‍♂️":["man_shrugging"],"🤷‍♀️":["woman_shrugging"],"🧑‍⚕️":["health_worker"],"👨‍⚕️":["man_health_worker"],"👩‍⚕️":["woman_health_worker"],"🧑‍🎓":["student"],"👨‍🎓":["man_student"],"👩‍🎓":["woman_student"],"🧑‍🏫":["teacher"],"👨‍🏫":["man_teacher"],"👩‍🏫":["woman_teacher"],"🧑‍⚖️":["judge"],"👨‍⚖️":["man_judge"],"👩‍⚖️":["woman_judge"],"🧑‍🌾":["farmer"],"👨‍🌾":["man_farmer"],"👩‍🌾":["woman_farmer"],"🧑‍🍳":["cook"],"👨‍🍳":["man_cook"],"👩‍🍳":["woman_cook"],"🧑‍🔧":["mechanic"],"👨‍🔧":["man_mechanic"],"👩‍🔧":["woman_mechanic"],"🧑‍🏭":["factory_worker"],"👨‍🏭":["man_factory_worker"],"👩‍🏭":["woman_factory_worker"],"🧑‍💼":["office_worker"],"👨‍💼":["man_office_worker"],"👩‍💼":["woman_office_worker"],"🧑‍🔬":["scientist"],"👨‍🔬":["man_scientist"],"👩‍🔬":["woman_scientist"],"🧑‍💻":["technologist"],"👨‍💻":["man_technologist"],"👩‍💻":["woman_technologist"],"🧑‍🎤":["singer"],"👨‍🎤":["man_singer"],"👩‍🎤":["woman_singer"],"🧑‍🎨":["artist"],"👨‍🎨":["man_artist"],"👩‍🎨":["woman_artist"],"🧑‍✈️":["pilot"],"👨‍✈️":["man_pilot"],"👩‍✈️":["woman_pilot"],"🧑‍🚀":["astronaut"],"👨‍🚀":["man_astronaut"],"👩‍🚀":["woman_astronaut"],"🧑‍🚒":["firefighter"],"👨‍🚒":["man_firefighter"],"👩‍🚒":["woman_firefighter"],"👮":["cop","police_officer"],"👮‍♂️":["man_police_officer"],"👮‍♀️":["woman_police_officer"],"🕵️":["detective"],"🕵️‍♂️":["man_detective"],"🕵️‍♀️":["woman_detective"],"💂":["guard"],"💂‍♂️":["man_guard"],"💂‍♀️":["woman_guard"],"🥷":["ninja"],"👷":["construction_worker"],"👷‍♂️":["man_construction_worker"],"👷‍♀️":["woman_construction_worker"],"🫅":["person_with_crown","royalty"],"🤴":["prince"],"👸":["princess"],"👳":["person_wearing_turban"],"👳‍♂️":["man_wearing_turban"],"👳‍♀️":["woman_wearing_turban"],"👲":["person_with_skullcap"],"🧕":["woman_with_headscarf"],"🤵":["person_in_tuxedo"],"🤵‍♂️":["man_in_tuxedo"],"🤵‍♀️":["woman_in_tuxedo"],"👰":["person_with_veil"],"👰‍♂️":["man_with_veil"],"👰‍♀️":["woman_with_veil"],"🤰":["pregnant_woman"],"🫃":["pregnant_man"],"🫄":["pregnant_person"],"🤱":["breast_feeding"],"👩‍🍼":["woman_feeding_baby"],"👨‍🍼":["man_feeding_baby"],"🧑‍🍼":["person_feeding_baby"],"👼":["angel"],"🎅":["santa"],"🤶":["mrs_claus"],"🧑‍🎄":["mx_claus"],"🦸":["superhero"],"🦸‍♂️":["man_superhero"],"🦸‍♀️":["woman_superhero"],"🦹":["supervillain"],"🦹‍♂️":["man_supervillain"],"🦹‍♀️":["woman_supervillain"],"🧙":["mage"],"🧙‍♂️":["man_mage"],"🧙‍♀️":["woman_mage"],"🧚":["fairy"],"🧚‍♂️":["man_fairy"],"🧚‍♀️":["woman_fairy"],"🧛":["vampire"],"🧛‍♂️":["man_vampire"],"🧛‍♀️":["woman_vampire"],"🧜":["merperson"],"🧜‍♂️":["merman"],"🧜‍♀️":["mermaid"],"🧝":["elf"],"🧝‍♂️":["man_elf"],"🧝‍♀️":["woman_elf"],"🧞":["genie"],"🧞‍♂️":["man_genie"],"🧞‍♀️":["woman_genie"],"🧟":["zombie"],"🧟‍♂️":["man_zombie"],"🧟‍♀️":["woman_zombie"],"🧌":["troll"],"💆":["massage","person_getting_massage"],"💆‍♂️":["man_getting_massage"],"💆‍♀️":["woman_getting_massage"],"💇":["haircut","person_getting_haircut"],"💇‍♂️":["man_getting_haircut"],"💇‍♀️":["woman_getting_haircut"],"🚶":["person_walking","walking"],"🚶‍♂️":["man_walking"],"🚶‍♀️":["woman_walking"],"🧍":["person_standing","standing"],"🧍‍♂️":["man_standing"],"🧍‍♀️":["woman_standing"],"🧎":["kneeling","person_kneeling"],"🧎‍♂️":["man_kneeling"],"🧎‍♀️":["woman_kneeling"],"🧑‍🦯":["person_with_probing_cane","person_with_white_cane"],"👨‍🦯":["man_with_probing_cane","man_with_white_cane"],"👩‍🦯":["woman_with_probing_cane","woman_with_white_cane"],"🧑‍🦼":["person_in_motorized_wheelchair"],"👨‍🦼":["man_in_motorized_wheelchair"],"👩‍🦼":["woman_in_motorized_wheelchair"],"🧑‍🦽":["person_in_manual_wheelchair"],"👨‍🦽":["man_in_manual_wheelchair"],"👩‍🦽":["woman_in_manual_wheelchair"],"🏃":["person_running","running"],"🏃‍♂️":["man_running"],"🏃‍♀️":["woman_running"],"💃":["dancer","woman_dancing"],"🕺":["man_dancing"],"🕴️":["levitate","levitating","person_in_suit_levitating"],"👯":["dancers","people_with_bunny_ears_partying"],"👯‍♂️":["men_with_bunny_ears_partying"],"👯‍♀️":["women_with_bunny_ears_partying"],"🧖":["person_in_steamy_room"],"🧖‍♂️":["man_in_steamy_room"],"🧖‍♀️":["woman_in_steamy_room"],"🧗":["climbing","person_climbing"],"🧗‍♂️":["man_climbing"],"🧗‍♀️":["woman_climbing"],"🤺":["fencer","fencing","person_fencing"],"🏇":["horse_racing"],"⛷️":["person_skiing","skier","skiing"],"🏂️":["person_snowboarding","snowboarder","snowboarding"],"🏌️":["golfer","golfing","person_golfing"],"🏌️‍♂️":["man_golfing"],"🏌️‍♀️":["woman_golfing"],"🏄️":["person_surfing","surfer","surfing"],"🏄‍♂️":["man_surfing"],"🏄‍♀️":["woman_surfing"],"🚣":["person_rowing_boat","rowboat"],"🚣‍♂️":["man_rowing_boat"],"🚣‍♀️":["woman_rowing_boat"],"🏊️":["person_swimming","swimmer","swimming"],"🏊‍♂️":["man_swimming"],"🏊‍♀️":["woman_swimming"],"⛹️":["person_bouncing_ball"],"⛹️‍♂️":["man_bouncing_ball"],"⛹️‍♀️":["woman_bouncing_ball"],"🏋️":["person_lifting_weights","weight_lifter","weight_lifting"],"🏋️‍♂️":["man_lifting_weights"],"🏋️‍♀️":["woman_lifting_weights"],"🚴":["bicyclist","biking","person_biking"],"🚴‍♂️":["man_biking"],"🚴‍♀️":["woman_biking"],"🚵":["mountain_bicyclist","mountain_biking","person_mountain_biking"],"🚵‍♂️":["man_mountain_biking"],"🚵‍♀️":["woman_mountain_biking"],"🤸":["cartwheeling","person_cartwheel"],"🤸‍♂️":["man_cartwheeling"],"🤸‍♀️":["woman_cartwheeling"],"🤼":["people_wrestling","wrestlers","wrestling"],"🤼‍♂️":["men_wrestling"],"🤼‍♀️":["women_wrestling"],"🤽":["person_playing_water_polo","water_polo"],"🤽‍♂️":["man_playing_water_polo"],"🤽‍♀️":["woman_playing_water_polo"],"🤾":["handball","person_playing_handball"],"🤾‍♂️":["man_playing_handball"],"🤾‍♀️":["woman_playing_handball"],"🤹":["juggler","juggling","person_juggling"],"🤹‍♂️":["man_juggling"],"🤹‍♀️":["woman_juggling"],"🧘":["person_in_lotus_position"],"🧘‍♂️":["man_in_lotus_position"],"🧘‍♀️":["woman_in_lotus_position"],"🛀":["bath","person_taking_bath"],"🛌":["person_in_bed","sleeping_accommodation"],"🧑‍🤝‍🧑":["people_holding_hands"],"👭":["two_women_holding_hands"],"👫":["couple"],"👬":["two_men_holding_hands"],"💏":["couple_kiss","couplekiss"],"👩‍❤️‍💋‍👨":["kiss_mw","kiss_wm"],"👨‍❤️‍💋‍👨":["kiss_mm"],"👩‍❤️‍💋‍👩":["kiss_ww"],"💑":["couple_with_heart"],"👩‍❤️‍👨":["couple_with_heart_mw","couple_with_heart_wm"],"👨‍❤️‍👨":["couple_with_heart_mm"],"👩‍❤️‍👩":["couple_with_heart_ww"],"👪️":["family"],"👨‍👩‍👦":["family_mwb"],"👨‍👩‍👧":["family_mwg"],"👨‍👩‍👧‍👦":["family_mwgb"],"👨‍👩‍👦‍👦":["family_mwbb"],"👨‍👩‍👧‍👧":["family_mwgg"],"👨‍👨‍👦":["family_mmb"],"👨‍👨‍👧":["family_mmg"],"👨‍👨‍👧‍👦":["family_mmgb"],"👨‍👨‍👦‍👦":["family_mmbb"],"👨‍👨‍👧‍👧":["family_mmgg"],"👩‍👩‍👦":["family_wwb"],"👩‍👩‍👧":["family_wwg"],"👩‍👩‍👧‍👦":["family_wwgb"],"👩‍👩‍👦‍👦":["family_wwbb"],"👩‍👩‍👧‍👧":["family_wwgg"],"👨‍👦":["family_mb"],"👨‍👦‍👦":["family_mbb"],"👨‍👧":["family_mg"],"👨‍👧‍👦":["family_mgb"],"👨‍👧‍👧":["family_mgg"],"👩‍👦":["family_wb"],"👩‍👦‍👦":["family_wbb"],"👩‍👧":["family_wg"],"👩‍👧‍👦":["family_wgb"],"👩‍👧‍👧":["family_wgg"],"🗣️":["speaking_head"],"👤":["bust_in_silhouette"],"👥":["busts_in_silhouette"],"🫂":["people_hugging"],"👣":["footprints"],"🏻":["tone1","tone_light"],"🏼":["tone2","tone_medium_light"],"🏽":["tone3","tone_medium"],"🏾":["tone4","tone_medium_dark"],"🏿":["tone5","tone_dark"],"🦰":["red_hair"],"🦱":["curly_hair"],"🦳":["white_hair"],"🦲":["no_hair"],"🐵":["monkey_face"],"🐒":["monkey"],"🦍":["gorilla"],"🦧":["orangutan"],"🐶":["dog_face"],"🐕️":["dog"],"🦮":["guide_dog"],"🐕‍🦺":["service_dog"],"🐩":["poodle"],"🐺":["wolf","wolf_face"],"🦊":["fox","fox_face"],"🦝":["raccoon"],"🐱":["cat_face"],"🐈️":["cat"],"🐈‍⬛":["black_cat"],"🦁":["lion","lion_face"],"🐯":["tiger_face"],"🐅":["tiger"],"🐆":["leopard"],"🐴":["horse_face"],"🐎":["horse","racehorse"],"🦄":["unicorn","unicorn_face"],"🦓":["zebra"],"🦌":["deer"],"🦬":["bison"],"🐮":["cow_face"],"🐂":["ox"],"🐃":["water_buffalo"],"🐄":["cow"],"🐷":["pig_face"],"🐖":["pig"],"🐗":["boar"],"🐽":["pig_nose"],"🐏":["ram"],"🐑":["ewe","sheep"],"🐐":["goat"],"🐪":["dromedary_camel"],"🐫":["camel"],"🦙":["llama"],"🦒":["giraffe"],"🐘":["elephant"],"🦣":["mammoth"],"🦏":["rhino","rhinoceros"],"🦛":["hippo"],"🐭":["mouse_face"],"🐁":["mouse"],"🐀":["rat"],"🐹":["hamster","hamster_face"],"🐰":["rabbit_face"],"🐇":["rabbit"],"🐿️":["chipmunk"],"🦫":["beaver"],"🦔":["hedgehog"],"🦇":["bat"],"🐻":["bear","bear_face"],"🐻‍❄️":["polar_bear","polar_bear_face"],"🐨":["koala","koala_face"],"🐼":["panda","panda_face"],"🦥":["sloth"],"🦦":["otter"],"🦨":["skunk"],"🦘":["kangaroo"],"🦡":["badger"],"🐾":["paw_prints"],"🦃":["turkey"],"🐔":["chicken","chicken_face"],"🐓":["rooster"],"🐣":["hatching_chick"],"🐤":["baby_chick"],"🐥":["hatched_chick"],"🐦️":["bird","bird_face"],"🐧":["penguin","penguin_face"],"🕊️":["dove"],"🦅":["eagle"],"🦆":["duck"],"🦢":["swan"],"🦉":["owl"],"🦤":["dodo"],"🪶":["feather"],"🦩":["flamingo"],"🦚":["peacock"],"🦜":["parrot"],"🐸":["frog","frog_face"],"🐊":["crocodile"],"🐢":["turtle"],"🦎":["lizard"],"🐍":["snake"],"🐲":["dragon_face"],"🐉":["dragon"],"🦕":["sauropod"],"🦖":["t-rex","trex"],"🐳":["spouting_whale"],"🐋":["whale"],"🐬":["dolphin"],"🦭":["seal"],"🐟️":["fish"],"🐠":["tropical_fish"],"🐡":["blowfish"],"🦈":["shark"],"🐙":["octopus"],"🐚":["shell"],"🪸":["coral"],"🐌":["snail"],"🦋":["butterfly"],"🐛":["bug"],"🐜":["ant"],"🐝":["bee"],"🪲":["beetle"],"🐞":["lady_beetle"],"🦗":["cricket"],"🪳":["cockroach"],"🕷️":["spider"],"🕸️":["spider_web"],"🦂":["scorpion"],"🦟":["mosquito"],"🪰":["fly"],"🪱":["worm"],"🦠":["microbe"],"💐":["bouquet"],"🌸":["cherry_blossom"],"💮":["white_flower"],"🪷":["lotus"],"🏵️":["rosette"],"🌹":["rose"],"🥀":["wilted_flower"],"🌺":["hibiscus"],"🌻":["sunflower"],"🌼":["blossom"],"🌷":["tulip"],"🌱":["seedling"],"🪴":["potted_plant"],"🌲":["evergreen_tree"],"🌳":["deciduous_tree"],"🌴":["palm_tree"],"🌵":["cactus"],"🌾":["ear_of_rice","sheaf_of_rice"],"🌿":["herb"],"☘️":["shamrock"],"🍀":["four_leaf_clover"],"🍁":["maple_leaf"],"🍂":["fallen_leaf"],"🍃":["leaves"],"🪹":["empty_nest","nest"],"🪺":["nest_with_eggs"],"🍇":["grapes"],"🍈":["melon"],"🍉":["watermelon"],"🍊":["orange","tangerine"],"🍋":["lemon"],"🍌":["banana"],"🍍":["pineapple"],"🥭":["mango"],"🍎":["apple","red_apple"],"🍏":["green_apple"],"🍐":["pear"],"🍑":["peach"],"🍒":["cherries"],"🍓":["strawberry"],"🫐":["blueberries"],"🥝":["kiwi"],"🍅":["tomato"],"🫒":["olive"],"🥥":["coconut"],"🥑":["avocado"],"🍆":["eggplant"],"🥔":["potato"],"🥕":["carrot"],"🌽":["corn","ear_of_corn"],"🌶️":["hot_pepper"],"🫑":["bell_pepper"],"🥒":["cucumber"],"🥬":["leafy_green"],"🥦":["broccoli"],"🧄":["garlic"],"🧅":["onion"],"🍄":["mushroom"],"🥜":["peanuts"],"🫘":["beans"],"🌰":["chestnut"],"🍞":["bread"],"🥐":["croissant"],"🥖":["baguette_bread"],"🫓":["flatbread"],"🥨":["pretzel"],"🥯":["bagel"],"🥞":["pancakes"],"🧇":["waffle"],"🧀":["cheese"],"🍖":["meat_on_bone"],"🍗":["poultry_leg"],"🥩":["cut_of_meat"],"🥓":["bacon"],"🍔":["hamburger"],"🍟":["french_fries","fries"],"🍕":["pizza"],"🌭":["hotdog"],"🥪":["sandwich"],"🌮":["taco"],"🌯":["burrito"],"🫔":["tamale"],"🥙":["stuffed_flatbread"],"🧆":["falafel"],"🥚":["egg"],"🍳":["cooking","fried_egg"],"🥘":["shallow_pan_of_food"],"🍲":["pot_of_food","stew"],"🫕":["fondue"],"🥣":["bowl_with_spoon"],"🥗":["green_salad","salad"],"🍿":["popcorn"],"🧈":["butter"],"🧂":["salt"],"🥫":["canned_food"],"🍱":["bento","bento_box"],"🍘":["rice_cracker"],"🍙":["rice_ball"],"🍚":["cooked_rice","rice"],"🍛":["curry","curry_rice"],"🍜":["ramen","steaming_bowl"],"🍝":["spaghetti"],"🍠":["sweet_potato"],"🍢":["oden"],"🍣":["sushi"],"🍤":["fried_shrimp"],"🍥":["fish_cake"],"🥮":["moon_cake"],"🍡":["dango"],"🥟":["dumpling"],"🥠":["fortune_cookie"],"🥡":["takeout_box"],"🦀":["crab"],"🦞":["lobster"],"🦐":["shrimp"],"🦑":["squid"],"🦪":["oyster"],"🍦":["icecream","soft_serve"],"🍧":["shaved_ice"],"🍨":["ice_cream"],"🍩":["doughnut"],"🍪":["cookie"],"🎂":["birthday","birthday_cake"],"🍰":["cake","shortcake"],"🧁":["cupcake"],"🥧":["pie"],"🍫":["chocolate_bar"],"🍬":["candy"],"🍭":["lollipop"],"🍮":["custard"],"🍯":["honey_pot"],"🍼":["baby_bottle"],"🥛":["glass_of_milk","milk"],"☕️":["coffee"],"🫖":["teapot"],"🍵":["tea"],"🍶":["sake"],"🍾":["champagne"],"🍷":["wine_glass"],"🍸️":["cocktail"],"🍹":["tropical_drink"],"🍺":["beer"],"🍻":["beers"],"🥂":["clinking_glasses"],"🥃":["tumbler_glass","whisky"],"🫗":["pour","pouring_liquid"],"🥤":["cup_with_straw"],"🧋":["boba_drink","bubble_tea"],"🧃":["beverage_box","juice_box"],"🧉":["mate"],"🧊":["ice","ice_cube"],"🥢":["chopsticks"],"🍽️":["fork_knife_plate"],"🍴":["fork_and_knife"],"🥄":["spoon"],"🔪":["knife"],"🫙":["jar"],"🏺":["amphora"],"🌍️":["earth_africa","earth_europe"],"🌎️":["earth_americas"],"🌏️":["earth_asia"],"🌐":["globe_with_meridians"],"🗺️":["world_map"],"🗾":["japan_map"],"🧭":["compass"],"🏔️":["mountain_snow"],"⛰️":["mountain"],"🌋":["volcano"],"🗻":["mount_fuji"],"🏕️":["camping"],"🏖️":["beach","beach_with_umbrella"],"🏜️":["desert"],"🏝️":["desert_island","island"],"🏞️":["national_park"],"🏟️":["stadium"],"🏛️":["classical_building"],"🏗️":["building_construction","construction_site"],"🧱":["bricks"],"🪨":["rock"],"🪵":["wood"],"🛖":["hut"],"🏘️":["homes","houses"],"🏚️":["derelict_house","house_abandoned"],"🏠️":["house"],"🏡":["house_with_garden"],"🏢":["office"],"🏣":["post_office"],"🏤":["european_post_office"],"🏥":["hospital"],"🏦":["bank"],"🏨":["hotel"],"🏩":["love_hotel"],"🏪":["convenience_store"],"🏫":["school"],"🏬":["department_store"],"🏭️":["factory"],"🏯":["japanese_castle"],"🏰":["castle","european_castle"],"💒":["wedding"],"🗼":["tokyo_tower"],"🗽":["statue_of_liberty"],"⛪️":["church"],"🕌":["mosque"],"🛕":["hindu_temple"],"🕍":["synagogue"],"⛩️":["shinto_shrine"],"🕋":["kaaba"],"⛲️":["fountain"],"⛺️":["tent"],"🌁":["foggy"],"🌃":["night_with_stars"],"🏙️":["cityscape"],"🌄":["sunrise_over_mountains"],"🌅":["sunrise"],"🌆":["city_dusk"],"🌇":["city_sunrise","city_sunset"],"🌉":["bridge_at_night"],"♨️":["hotsprings"],"🎠":["carousel_horse"],"🛝":["playground_slide","slide"],"🎡":["ferris_wheel"],"🎢":["roller_coaster"],"💈":["barber","barber_pole"],"🎪":["circus_tent"],"🚂":["steam_locomotive"],"🚃":["railway_car"],"🚄":["bullettrain_side"],"🚅":["bullettrain_front"],"🚆":["train"],"🚇️":["metro"],"🚈":["light_rail"],"🚉":["station"],"🚊":["tram"],"🚝":["monorail"],"🚞":["mountain_railway"],"🚋":["tram_car"],"🚌":["bus"],"🚍️":["oncoming_bus"],"🚎":["trolleybus"],"🚐":["minibus"],"🚑️":["ambulance"],"🚒":["fire_engine"],"🚓":["police_car"],"🚔️":["oncoming_police_car"],"🚕":["taxi"],"🚖":["oncoming_taxi"],"🚗":["car","red_car"],"🚘️":["oncoming_automobile"],"🚙":["blue_car","suv"],"🛻":["pickup_truck"],"🚚":["delivery_truck","truck"],"🚛":["articulated_lorry"],"🚜":["tractor"],"🏎️":["racing_car"],"🏍️":["motorcycle"],"🛵":["motor_scooter"],"🦽":["manual_wheelchair"],"🦼":["motorized_wheelchair"],"🛺":["auto_rickshaw"],"🚲️":["bicycle","bike"],"🛴":["scooter"],"🛹":["skateboard"],"🛼":["roller_skate"],"🚏":["busstop"],"🛣️":["motorway"],"🛤️":["railway_track"],"🛢️":["oil_drum"],"⛽️":["fuelpump"],"🛞":["wheel"],"🚨":["rotating_light"],"🚥":["traffic_light"],"🚦":["vertical_traffic_light"],"🛑":["octagonal_sign","stop_sign"],"🚧":["construction"],"⚓️":["anchor"],"🛟":["lifebuoy","ring_buoy"],"⛵️":["sailboat"],"🛶":["canoe"],"🚤":["speedboat"],"🛳️":["cruise_ship","passenger_ship"],"⛴️":["ferry"],"🛥️":["motorboat"],"🚢":["ship"],"✈️":["airplane"],"🛩️":["small_airplane"],"🛫":["airplane_departure"],"🛬":["airplane_arriving"],"🪂":["parachute"],"💺":["seat"],"🚁":["helicopter"],"🚟":["suspension_railway"],"🚠":["mountain_cableway"],"🚡":["aerial_tramway"],"🛰️":["satellite"],"🚀":["rocket"],"🛸":["flying_saucer"],"🛎️":["bellhop"],"🧳":["luggage"],"⌛️":["hourglass"],"⏳️":["hourglass_flowing_sand"],"⌚️":["watch"],"⏰":["alarm_clock"],"⏱️":["stopwatch"],"⏲️":["timer_clock"],"🕰️":["clock"],"🕛️":["clock12"],"🕧️":["clock1230"],"🕐️":["clock1"],"🕜️":["clock130"],"🕑️":["clock2"],"🕝️":["clock230"],"🕒️":["clock3"],"🕞️":["clock330"],"🕓️":["clock4"],"🕟️":["clock430"],"🕔️":["clock5"],"🕠️":["clock530"],"🕕️":["clock6"],"🕡️":["clock630"],"🕖️":["clock7"],"🕢️":["clock730"],"🕗️":["clock8"],"🕣️":["clock830"],"🕘️":["clock9"],"🕤️":["clock930"],"🕙️":["clock10"],"🕥️":["clock1030"],"🕚️":["clock11"],"🕦️":["clock1130"],"🌑":["new_moon"],"🌒":["waxing_crescent_moon"],"🌓":["first_quarter_moon"],"🌔":["waxing_gibbous_moon"],"🌕️":["full_moon"],"🌖":["waning_gibbous_moon"],"🌗":["last_quarter_moon"],"🌘":["waning_crescent_moon"],"🌙":["crescent_moon"],"🌚":["new_moon_with_face"],"🌛":["first_quarter_moon_with_face"],"🌜️":["last_quarter_moon_with_face"],"🌡️":["thermometer"],"☀️":["sun"],"🌝":["full_moon_with_face"],"🌞":["sun_with_face"],"🪐":["ringed_planet","saturn"],"⭐️":["star"],"🌟":["glowing_star","star2"],"🌠":["shooting_star","stars"],"🌌":["milky_way"],"☁️":["cloud"],"⛅️":["partly_sunny","sun_behind_cloud"],"⛈️":["stormy","thunder_cloud_and_rain"],"🌤️":["sun_behind_small_cloud","sunny"],"🌥️":["cloudy","sun_behind_large_cloud"],"🌦️":["sun_and_rain","sun_behind_rain_cloud"],"🌧️":["cloud_with_rain","rainy"],"🌨️":["cloud_with_snow","snowy"],"🌩️":["cloud_with_lightning","lightning"],"🌪️":["tornado"],"🌫️":["fog"],"🌬️":["wind_blowing_face"],"🌀":["cyclone"],"🌈":["rainbow"],"🌂":["closed_umbrella"],"☂️":["umbrella"],"☔️":["umbrella_with_rain"],"⛱️":["beach_umbrella","umbrella_on_ground"],"⚡️":["high_voltage","zap"],"❄️":["snowflake"],"☃️":["snowman2"],"⛄️":["snowman"],"☄️":["comet"],"🔥":["fire"],"💧":["droplet"],"🌊":["ocean","water_wave"],"🎃":["jack_o_lantern"],"🎄":["christmas_tree"],"🎆":["fireworks"],"🎇":["sparkler"],"🧨":["firecracker"],"✨":["sparkles"],"🎈":["balloon"],"🎉":["party","party_popper","tada"],"🎊":["confetti_ball"],"🎋":["tanabata_tree"],"🎍":["bamboo"],"🎎":["dolls"],"🎏":["carp_streamer","flags"],"🎐":["wind_chime"],"🎑":["moon_ceremony","rice_scene"],"🧧":["red_envelope"],"🎀":["ribbon"],"🎁":["gift"],"🎗️":["reminder_ribbon"],"🎟️":["admission_tickets","tickets"],"🎫":["ticket"],"🎖️":["military_medal"],"🏆️":["trophy"],"🏅":["sports_medal"],"🥇":["1st","first_place_medal"],"🥈":["2nd","second_place_medal"],"🥉":["3rd","third_place_medal"],"⚽️":["soccer"],"⚾️":["baseball"],"🥎":["softball"],"🏀":["basketball"],"🏐":["volleyball"],"🏈":["football"],"🏉":["rugby_football"],"🎾":["tennis"],"🥏":["flying_disc"],"🎳":["bowling"],"🏏":["cricket_game"],"🏑":["field_hockey"],"🏒":["hockey"],"🥍":["lacrosse"],"🏓":["ping_pong"],"🏸":["badminton"],"🥊":["boxing_glove"],"🥋":["martial_arts_uniform"],"🥅":["goal_net"],"⛳️":["golf"],"⛸️":["ice_skate"],"🎣":["fishing_pole","fishing_pole_and_fish"],"🤿":["diving_mask"],"🎽":["running_shirt","running_shirt_with_sash"],"🎿":["ski"],"🛷":["sled"],"🥌":["curling_stone"],"🎯":["bullseye","dart","direct_hit"],"🪀":["yo_yo"],"🪁":["kite"],"🎱":["8ball","billiards"],"🔮":["crystal_ball"],"🪄":["magic_wand"],"🧿":["nazar_amulet"],"🪬":["hamsa"],"🎮️":["controller","video_game"],"🕹️":["joystick"],"🎰":["slot_machine"],"🎲":["game_die"],"🧩":["jigsaw","puzzle_piece"],"🧸":["teddy_bear"],"🪅":["pinata"],"🪩":["disco","disco_ball","mirror_ball"],"🪆":["nesting_dolls"],"♠️":["spades"],"♥️":["hearts"],"♦️":["diamonds"],"♣️":["clubs"],"♟️":["chess_pawn"],"🃏":["black_joker"],"🀄️":["mahjong"],"🎴":["flower_playing_cards"],"🎭️":["performing_arts"],"🖼️":["frame_with_picture","framed_picture"],"🎨":["art","palette"],"🧵":["thread"],"🪡":["sewing_needle"],"🧶":["yarn"],"🪢":["knot"],"👓️":["eyeglasses","glasses"],"🕶️":["sunglasses"],"🥽":["goggles"],"🥼":["lab_coat"],"🦺":["safety_vest"],"👔":["necktie"],"👕":["shirt"],"👖":["jeans"],"🧣":["scarf"],"🧤":["gloves"],"🧥":["coat"],"🧦":["socks"],"👗":["dress"],"👘":["kimono"],"🥻":["sari"],"🩱":["one_piece_swimsuit"],"🩲":["briefs"],"🩳":["shorts"],"👙":["bikini"],"👚":["womans_clothes"],"👛":["purse"],"👜":["handbag"],"👝":["clutch_bag","pouch"],"🛍️":["shopping_bags"],"🎒":["backpack","school_satchel"],"🩴":["thong_sandal"],"👞":["mans_shoe"],"👟":["athletic_shoe","sneaker"],"🥾":["hiking_boot"],"🥿":["flat_shoe","womans_flat_shoe"],"👠":["high_heel"],"👡":["sandal"],"🩰":["ballet_shoes"],"👢":["boot"],"👑":["crown"],"👒":["womans_hat"],"🎩":["top_hat","tophat"],"🎓️":["graduation_cap","mortar_board"],"🧢":["billed_cap"],"🪖":["military_helmet"],"⛑️":["helmet_with_cross","rescue_worker_helmet"],"📿":["prayer_beads"],"💄":["lipstick"],"💍":["ring"],"💎":["gem"],"🔇":["mute","no_sound"],"🔈️":["low_volume","quiet_sound","speaker"],"🔉":["medium_volumne","sound"],"🔊":["high_volume","loud_sound"],"📢":["loudspeaker"],"📣":["mega","megaphone"],"📯":["postal_horn"],"🔔":["bell"],"🔕":["no_bell"],"🎼":["musical_score"],"🎵":["musical_note"],"🎶":["musical_notes","notes"],"🎙️":["studio_microphone"],"🎚️":["level_slider"],"🎛️":["control_knobs"],"🎤":["microphone"],"🎧️":["headphones"],"📻️":["radio"],"🎷":["saxophone"],"🪗":["accordion"],"🎸":["guitar"],"🎹":["musical_keyboard"],"🎺":["trumpet"],"🎻":["violin"],"🪕":["banjo"],"🥁":["drum"],"🪘":["long_drum"],"📱":["android","iphone","mobile_phone"],"📲":["calling","mobile_phone_arrow"],"☎️":["telephone"],"📞":["telephone_receiver"],"📟️":["pager"],"📠":["fax","fax_machine"],"🔋":["battery"],"🪫":["low_battery"],"🔌":["electric_plug"],"💻️":["laptop"],"🖥️":["computer","desktop_computer"],"🖨️":["printer"],"⌨️":["keyboard"],"🖱️":["computer_mouse"],"🖲️":["trackball"],"💽":["computer_disk","minidisc"],"💾":["floppy_disk"],"💿️":["cd","optical_disk"],"📀":["dvd"],"🧮":["abacus"],"🎥":["movie_camera"],"🎞️":["film_frames"],"📽️":["film_projector"],"🎬️":["clapper"],"📺️":["tv"],"📷️":["camera"],"📸":["camera_with_flash"],"📹️":["video_camera"],"📼":["vhs","videocassette"],"🔍️":["mag"],"🔎":["mag_right"],"🕯️":["candle"],"💡":["bulb","light_bulb"],"🔦":["flashlight"],"🏮":["izakaya_lantern","red_paper_lantern"],"🪔":["diya_lamp"],"📔":["notebook_with_decorative_cover"],"📕":["closed_book"],"📖":["book","open_book"],"📗":["green_book"],"📘":["blue_book"],"📙":["orange_book"],"📚️":["books"],"📓":["notebook"],"📒":["ledger"],"📃":["page_with_curl"],"📜":["scroll"],"📄":["page_facing_up"],"📰":["newspaper"],"🗞️":["rolled_up_newspaper"],"📑":["bookmark_tabs"],"🔖":["bookmark"],"🏷️":["label"],"💰️":["moneybag"],"🪙":["coin"],"💴":["yen"],"💵":["dollar"],"💶":["euro"],"💷":["pound"],"💸":["money_with_wings"],"💳️":["credit_card"],"🧾":["receipt"],"💹":["chart"],"✉️":["envelope"],"📧":["e-mail","email"],"📨":["incoming_envelope"],"📩":["envelope_with_arrow"],"📤️":["outbox_tray"],"📥️":["inbox_tray"],"📦️":["package"],"📫️":["mailbox"],"📪️":["mailbox_closed"],"📬️":["mailbox_with_mail"],"📭️":["mailbox_with_no_mail"],"📮":["postbox"],"🗳️":["ballot_box"],"✏️":["pencil"],"✒️":["black_nib"],"🖋️":["fountain_pen"],"🖊️":["pen"],"🖌️":["paintbrush"],"🖍️":["crayon"],"📝":["memo"],"💼":["briefcase"],"📁":["file_folder"],"📂":["open_file_folder"],"🗂️":["card_index_dividers"],"📅":["date"],"📆":["calendar"],"🗒️":["notepad_spiral"],"🗓️":["calendar_spiral"],"📇":["card_index"],"📈":["chart_increasing","chart_with_upwards_trend"],"📉":["chart_decreasing","chart_with_downwards_trend"],"📊":["bar_chart"],"📋️":["clipboard"],"📌":["pushpin"],"📍":["round_pushpin"],"📎":["paperclip"],"🖇️":["paperclips"],"📏":["straight_ruler"],"📐":["triangular_ruler"],"✂️":["scissors"],"🗃️":["card_file_box"],"🗄️":["file_cabinet"],"🗑️":["trashcan","wastebasket"],"🔒️":["lock","locked"],"🔓️":["unlock","unlocked"],"🔏":["lock_with_ink_pen","locked_with_pen"],"🔐":["closed_lock_with_key","locked_with_key"],"🔑":["key"],"🗝️":["old_key"],"🔨":["hammer"],"🪓":["axe"],"⛏️":["pick"],"⚒️":["hammer_and_pick"],"🛠️":["hammer_and_wrench"],"🗡️":["dagger"],"⚔️":["crossed_swords"],"🔫":["gun","pistol"],"🪃":["boomerang"],"🏹":["bow_and_arrow"],"🛡️":["shield"],"🪚":["carpentry_saw"],"🔧":["wrench"],"🪛":["screwdriver"],"🔩":["nut_and_bolt"],"⚙️":["gear"],"🗜️":["clamp","compression"],"⚖️":["scales"],"🦯":["probing_cane","white_cane"],"🔗":["link"],"⛓️":["chains"],"🪝":["hook"],"🧰":["toolbox"],"🧲":["magnet"],"🪜":["ladder"],"⚗️":["alembic"],"🧪":["test_tube"],"🧫":["petri_dish"],"🧬":["dna","double_helix"],"🔬":["microscope"],"🔭":["telescope"],"📡":["satellite_antenna"],"💉":["syringe"],"🩸":["drop_of_blood"],"💊":["pill"],"🩹":["adhesive_bandage","bandaid"],"🩼":["crutch"],"🩺":["stethoscope"],"🩻":["x-ray","xray"],"🚪":["door"],"🛗":["elevator"],"🪞":["mirror"],"🪟":["window"],"🛏️":["bed"],"🛋️":["couch_and_lamp"],"🪑":["chair"],"🚽":["toilet"],"🪠":["plunger"],"🚿":["shower"],"🛁":["bathtub"],"🪤":["mouse_trap"],"🪒":["razor"],"🧴":["lotion_bottle"],"🧷":["safety_pin"],"🧹":["broom"],"🧺":["basket"],"🧻":["roll_of_paper","toilet_paper"],"🪣":["bucket"],"🧼":["soap"],"🫧":["bubbles"],"🪥":["toothbrush"],"🧽":["sponge"],"🧯":["fire_extinguisher"],"🛒":["shopping_cart"],"🚬":["cigarette","smoking"],"⚰️":["coffin"],"🪦":["headstone"],"⚱️":["funeral_urn"],"🗿":["moai","moyai"],"🪧":["placard"],"🪪":["id_card"],"🏧":["atm"],"🚮":["litter_bin","put_litter_in_its_place"],"🚰":["potable_water"],"♿️":["handicapped","wheelchair"],"🚹️":["mens"],"🚺️":["womens"],"🚻":["bathroom","restroom"],"🚼️":["baby_symbol"],"🚾":["water_closet","wc"],"🛂":["passport_control"],"🛃":["customs"],"🛄":["baggage_claim"],"🛅":["left_luggage"],"⚠️":["warning"],"🚸":["children_crossing"],"⛔️":["no_entry"],"🚫":["no_entry_sign"],"🚳":["no_bicycles"],"🚭️":["no_smoking"],"🚯":["do_not_litter","no_littering"],"🚱":["non-potable_water"],"🚷":["no_pedestrians"],"📵":["no_mobile_phones"],"🔞":["no_one_under_18","underage"],"☢️":["radioactive"],"☣️":["biohazard"],"⬆️":["arrow_up"],"↗️":["arrow_upper_right"],"➡️":["arrow_right"],"↘️":["arrow_lower_right"],"⬇️":["arrow_down"],"↙️":["arrow_lower_left"],"⬅️":["arrow_left"],"↖️":["arrow_upper_left"],"↕️":["arrow_up_down"],"↔️":["left_right_arrow"],"↩️":["arrow_left_hook","leftwards_arrow_with_hook"],"↪️":["arrow_right_hook","rightwards_arrow_with_hook"],"⤴️":["arrow_heading_up"],"⤵️":["arrow_heading_down"],"🔃":["arrows_clockwise","clockwise"],"🔄":["arrows_counterclockwise","counterclockwise"],"🔙":["back"],"🔚":["end"],"🔛":["on"],"🔜":["soon"],"🔝":["top"],"🛐":["place_of_worship"],"⚛️":["atom","atom_symbol"],"🕉️":["om"],"✡️":["star_of_david"],"☸️":["wheel_of_dharma"],"☯️":["yin_yang"],"✝️":["latin_cross"],"☦️":["orthodox_cross"],"☪️":["star_and_crescent"],"☮️":["peace","peace_symbol"],"🕎":["menorah"],"🔯":["six_pointed_star"],"♈️":["aries"],"♉️":["taurus"],"♊️":["gemini"],"♋️":["cancer"],"♌️":["leo"],"♍️":["virgo"],"♎️":["libra"],"♏️":["scorpius"],"♐️":["sagittarius"],"♑️":["capricorn"],"♒️":["aquarius"],"♓️":["pisces"],"⛎":["ophiuchus"],"🔀":["shuffle","twisted_rightwards_arrows"],"🔁":["repeat"],"🔂":["repeat_one"],"▶️":["arrow_forward","play"],"⏩️":["fast_forward"],"⏭️":["next_track"],"⏯️":["play_pause"],"◀️":["arrow_backward","reverse"],"⏪️":["fast_reverse","rewind"],"⏮️":["previous_track"],"🔼":["arrow_up_small","up"],"⏫":["arrow_double_up","fast_up"],"🔽":["arrow_down_small","down"],"⏬":["arrow_double_down","fast_down"],"⏸️":["pause"],"⏹️":["stop"],"⏺️":["record"],"⏏️":["eject"],"🎦":["cinema"],"🔅":["dim_button","low_brightness"],"🔆":["bright_button","high_brightness"],"📶":["antenna_bars","signal_strength"],"📳":["vibration_mode"],"📴":["mobile_phone_off"],"♀️":["female","female_sign"],"♂️":["male","male_sign"],"⚧️":["transgender_symbol"],"✖️":["multiplication","multiply"],"➕":["plus"],"➖":["minus"],"➗":["divide","division"],"🟰":["heavy_equals_sign"],"♾️":["infinity"],"‼️":["bangbang","double_exclamation"],"⁉️":["exclamation_question","interrobang"],"❓️":["question"],"❔":["white_question"],"❕":["white_exclamation"],"❗️":["exclamation"],"〰️":["wavy_dash"],"💱":["currency_exchange"],"💲":["heavy_dollar_sign"],"⚕️":["medical","medical_symbol"],"♻️":["recycle","recycling_symbol"],"⚜️":["fleur-de-lis"],"🔱":["trident"],"📛":["name_badge"],"🔰":["beginner"],"⭕️":["hollow_red_circle","red_o"],"✅":["check_mark_button","white_check_mark"],"☑️":["ballot_box_with_check"],"✔️":["check_mark","heavy_check_mark"],"❌":["cross_mark","x"],"❎":["cross_mark_button","negative_squared_cross_mark"],"➰":["curly_loop"],"➿":["double_curly_loop","loop"],"〽️":["part_alternation_mark"],"✳️":["eight_spoked_asterisk"],"✴️":["eight_pointed_black_star"],"❇️":["sparkle"],"©️":["copyright"],"®️":["registered"],"™️":["tm","trade_mark"],"#️⃣":["hash","number_sign"],"*️⃣":["asterisk"],"0️⃣":["zero"],"1️⃣":["one"],"2️⃣":["two"],"3️⃣":["three"],"4️⃣":["four"],"5️⃣":["five"],"6️⃣":["six"],"7️⃣":["seven"],"8️⃣":["eight"],"9️⃣":["nine"],"🔟":["ten"],"🔠":["capital_abcd"],"🔡":["abcd"],"🔢":["1234"],"🔣":["symbols"],"🔤":["abc"],"🅰️":["a","a_blood"],"🆎":["ab","ab_blood"],"🅱️":["b","b_blood"],"🆑":["cl"],"🆒":["cool"],"🆓":["free"],"ℹ️":["info","information_source"],"🆔":["id"],"Ⓜ️":["m"],"🆕":["new"],"🆖":["ng"],"🅾️":["o","o_blood"],"🆗":["ok"],"🅿️":["parking"],"🆘":["sos"],"🆙":["up2"],"🆚":["vs"],"🈁":["ja_here","koko"],"🈂️":["ja_service_charge"],"🈷️":["ja_monthly_amount"],"🈶":["ja_not_free_of_carge"],"🈯️":["ja_reserved"],"🉐":["ideograph_advantage","ja_bargain"],"🈹":["ja_discount"],"🈚️":["ja_free_of_charge"],"🈲":["ja_prohibited"],"🉑":["accept","ja_acceptable"],"🈸":["ja_application"],"🈴":["ja_passing_grade"],"🈳":["ja_vacancy"],"㊗️":["congratulations","ja_congratulations"],"㊙️":["ja_secret","secret"],"🈺":["ja_open_for_business"],"🈵":["ja_no_vacancy"],"🔴":["red_circle"],"🟠":["orange_circle"],"🟡":["yellow_circle"],"🟢":["green_circle"],"🔵":["blue_circle"],"🟣":["purple_circle"],"🟤":["brown_circle"],"⚫️":["black_circle"],"⚪️":["white_circle"],"🟥":["red_square"],"🟧":["orange_square"],"🟨":["yellow_square"],"🟩":["green_square"],"🟦":["blue_square"],"🟪":["purple_square"],"🟫":["brown_square"],"⬛️":["black_large_square"],"⬜️":["white_large_square"],"◼️":["black_medium_square"],"◻️":["white_medium_square"],"◾️":["black_medium_small_square"],"◽️":["white_medium_small_square"],"▪️":["black_small_square"],"▫️":["white_small_square"],"🔶":["large_orange_diamond"],"🔷":["large_blue_diamond"],"🔸":["small_orange_diamond"],"🔹":["small_blue_diamond"],"🔺":["small_red_triangle"],"🔻":["small_red_triangle_down"],"💠":["diamond_shape_with_a_dot_inside","diamond_with_a_dot"],"🔘":["radio_button"],"🔳":["white_square_button"],"🔲":["black_square_button"],"🏁":["checkered_flag"],"🚩":["triangular_flag","triangular_flag_on_post"],"🎌":["crossed_flags"],"🏴":["black_flag"],"🏳️":["white_flag"],"🏳️‍🌈":["rainbow_flag"],"🏳️‍⚧️":["transgender_flag"],"🏴‍☠️":["jolly_roger","pirate_flag"],"🇦🇨":["ascension_island","flag_ac"],"🇦🇩":["andorra","flag_ad"],"🇦🇪":["flag_ae","united_arab_emirates"],"🇦🇫":["afghanistan","flag_af"],"🇦🇬":["antigua_barbuda","flag_ag"],"🇦🇮":["anguilla","flag_ai"],"🇦🇱":["albania","flag_al"],"🇦🇲":["armenia","flag_am"],"🇦🇴":["angola","flag_ao"],"🇦🇶":["antarctica","flag_aq"],"🇦🇷":["argentina","flag_ar"],"🇦🇸":["american_samoa","flag_as"],"🇦🇹":["austria","flag_at"],"🇦🇺":["australia","flag_au"],"🇦🇼":["aruba","flag_aw"],"🇦🇽":["aland_islands","flag_ax"],"🇦🇿":["azerbaijan","flag_az"],"🇧🇦":["bosnia_herzegovina","flag_ba"],"🇧🇧":["barbados","flag_bb"],"🇧🇩":["bangladesh","flag_bd"],"🇧🇪":["belgium","flag_be"],"🇧🇫":["burkina_faso","flag_bf"],"🇧🇬":["bulgaria","flag_bg"],"🇧🇭":["bahrain","flag_bh"],"🇧🇮":["burundi","flag_bi"],"🇧🇯":["benin","flag_bj"],"🇧🇱":["flag_bl","st_barthelemy"],"🇧🇲":["bermuda","flag_bm"],"🇧🇳":["brunei","flag_bn"],"🇧🇴":["bolivia","flag_bo"],"🇧🇶":["caribbean_netherlands","flag_bq"],"🇧🇷":["brazil","flag_br"],"🇧🇸":["bahamas","flag_bs"],"🇧🇹":["bhutan","flag_bt"],"🇧🇻":["bouvet_island","flag_bv"],"🇧🇼":["botswana","flag_bw"],"🇧🇾":["belarus","flag_by"],"🇧🇿":["belize","flag_bz"],"🇨🇦":["canada","flag_ca"],"🇨🇨":["cocos_islands","flag_cc"],"🇨🇩":["congo_kinshasa","flag_cd"],"🇨🇫":["central_african_republic","flag_cf"],"🇨🇬":["congo_brazzaville","flag_cg"],"🇨🇭":["flag_ch","switzerland"],"🇨🇮":["cote_divoire","flag_ci"],"🇨🇰":["cook_islands","flag_ck"],"🇨🇱":["chile","flag_cl"],"🇨🇲":["cameroon","flag_cm"],"🇨🇳":["china","flag_cn"],"🇨🇴":["colombia","flag_co"],"🇨🇵":["clipperton_island","flag_cp"],"🇨🇷":["costa_rica","flag_cr"],"🇨🇺":["cuba","flag_cu"],"🇨🇻":["cape_verde","flag_cv"],"🇨🇼":["curacao","flag_cw"],"🇨🇽":["christmas_island","flag_cx"],"🇨🇾":["cyprus","flag_cy"],"🇨🇿":["czech_republic","czechia","flag_cz"],"🇩🇪":["flag_de","germany"],"🇩🇬":["diego_garcia","flag_dg"],"🇩🇯":["djibouti","flag_dj"],"🇩🇰":["denmark","flag_dk"],"🇩🇲":["dominica","flag_dm"],"🇩🇴":["dominican_republic","flag_do"],"🇩🇿":["algeria","flag_dz"],"🇪🇦":["ceuta_melilla","flag_ea"],"🇪🇨":["ecuador","flag_ec"],"🇪🇪":["estonia","flag_ee"],"🇪🇬":["egypt","flag_eg"],"🇪🇭":["flag_eh","western_sahara"],"🇪🇷":["eritrea","flag_er"],"🇪🇸":["flag_es","spain"],"🇪🇹":["ethiopia","flag_et"],"🇪🇺":["european_union","flag_eu"],"🇫🇮":["finland","flag_fi"],"🇫🇯":["fiji","flag_fj"],"🇫🇰":["falkland_islands","flag_fk"],"🇫🇲":["flag_fm","micronesia"],"🇫🇴":["faroe_islands","flag_fo"],"🇫🇷":["flag_fr","france"],"🇬🇦":["flag_ga","gabon"],"🇬🇧":["flag_gb","uk","united_kingdom"],"🇬🇩":["flag_gd","grenada"],"🇬🇪":["flag_ge","georgia"],"🇬🇫":["flag_gf","french_guiana"],"🇬🇬":["flag_gg","guernsey"],"🇬🇭":["flag_gh","ghana"],"🇬🇮":["flag_gi","gibraltar"],"🇬🇱":["flag_gl","greenland"],"🇬🇲":["flag_gm","gambia"],"🇬🇳":["flag_gn","guinea"],"🇬🇵":["flag_gp","guadeloupe"],"🇬🇶":["equatorial_guinea","flag_gq"],"🇬🇷":["flag_gr","greece"],"🇬🇸":["flag_gs","south_georgia_south_sandwich_islands"],"🇬🇹":["flag_gt","guatemala"],"🇬🇺":["flag_gu","guam"],"🇬🇼":["flag_gw","guinea_bissau"],"🇬🇾":["flag_gy","guyana"],"🇭🇰":["flag_hk","hong_kong"],"🇭🇲":["flag_hm","heard_mcdonald_islands"],"🇭🇳":["flag_hn","honduras"],"🇭🇷":["croatia","flag_hr"],"🇭🇹":["flag_ht","haiti"],"🇭🇺":["flag_hu","hungary"],"🇮🇨":["canary_islands","flag_ic"],"🇮🇩":["flag_id","indonesia"],"🇮🇪":["flag_ie","ireland"],"🇮🇱":["flag_il","israel"],"🇮🇲":["flag_im","isle_of_man"],"🇮🇳":["flag_in","india"],"🇮🇴":["british_indian_ocean_territory","flag_io"],"🇮🇶":["flag_iq","iraq"],"🇮🇷":["flag_ir","iran"],"🇮🇸":["flag_is","iceland"],"🇮🇹":["flag_it","italy"],"🇯🇪":["flag_je","jersey"],"🇯🇲":["flag_jm","jamaica"],"🇯🇴":["flag_jo","jordan"],"🇯🇵":["flag_jp","japan"],"🇰🇪":["flag_ke","kenya"],"🇰🇬":["flag_kg","kyrgyzstan"],"🇰🇭":["cambodia","flag_kh"],"🇰🇮":["flag_ki","kiribati"],"🇰🇲":["comoros","flag_km"],"🇰🇳":["flag_kn","st_kitts_nevis"],"🇰🇵":["flag_kp","north_korea"],"🇰🇷":["flag_kr","south_korea"],"🇰🇼":["flag_kw","kuwait"],"🇰🇾":["cayman_islands","flag_ky"],"🇰🇿":["flag_kz","kazakhstan"],"🇱🇦":["flag_la","laos"],"🇱🇧":["flag_lb","lebanon"],"🇱🇨":["flag_lc","st_lucia"],"🇱🇮":["flag_li","liechtenstein"],"🇱🇰":["flag_lk","sri_lanka"],"🇱🇷":["flag_lr","liberia"],"🇱🇸":["flag_ls","lesotho"],"🇱🇹":["flag_lt","lithuania"],"🇱🇺":["flag_lu","luxembourg"],"🇱🇻":["flag_lv","latvia"],"🇱🇾":["flag_ly","libya"],"🇲🇦":["flag_ma","morocco"],"🇲🇨":["flag_mc","monaco"],"🇲🇩":["flag_md","moldova"],"🇲🇪":["flag_me","montenegro"],"🇲🇫":["flag_mf","st_martin"],"🇲🇬":["flag_mg","madagascar"],"🇲🇭":["flag_mh","marshall_islands"],"🇲🇰":["flag_mk","macedonia"],"🇲🇱":["flag_ml","mali"],"🇲🇲":["burma","flag_mm","myanmar"],"🇲🇳":["flag_mn","mongolia"],"🇲🇴":["flag_mo","macao","macau"],"🇲🇵":["flag_mp","northern_mariana_islands"],"🇲🇶":["flag_mq","martinique"],"🇲🇷":["flag_mr","mauritania"],"🇲🇸":["flag_ms","montserrat"],"🇲🇹":["flag_mt","malta"],"🇲🇺":["flag_mu","mauritius"],"🇲🇻":["flag_mv","maldives"],"🇲🇼":["flag_mw","malawi"],"🇲🇽":["flag_mx","mexico"],"🇲🇾":["flag_my","malaysia"],"🇲🇿":["flag_mz","mozambique"],"🇳🇦":["flag_na","namibia"],"🇳🇨":["flag_nc","new_caledonia"],"🇳🇪":["flag_ne","niger"],"🇳🇫":["flag_nf","norfolk_island"],"🇳🇬":["flag_ng","nigeria"],"🇳🇮":["flag_ni","nicaragua"],"🇳🇱":["flag_nl","netherlands"],"🇳🇴":["flag_no","norway"],"🇳🇵":["flag_np","nepal"],"🇳🇷":["flag_nr","nauru"],"🇳🇺":["flag_nu","niue"],"🇳🇿":["flag_nz","new_zealand"],"🇴🇲":["flag_om","oman"],"🇵🇦":["flag_pa","panama"],"🇵🇪":["flag_pe","peru"],"🇵🇫":["flag_pf","french_polynesia"],"🇵🇬":["flag_pg","papua_new_guinea"],"🇵🇭":["flag_ph","philippines"],"🇵🇰":["flag_pk","pakistan"],"🇵🇱":["flag_pl","poland"],"🇵🇲":["flag_pm","st_pierre_miquelon"],"🇵🇳":["flag_pn","pitcairn_islands"],"🇵🇷":["flag_pr","puerto_rico"],"🇵🇸":["flag_ps","palestinian_territories"],"🇵🇹":["flag_pt","portugal"],"🇵🇼":["flag_pw","palau"],"🇵🇾":["flag_py","paraguay"],"🇶🇦":["flag_qa","qatar"],"🇷🇪":["flag_re","reunion"],"🇷🇴":["flag_ro","romania"],"🇷🇸":["flag_rs","serbia"],"🇷🇺":["flag_ru","russia"],"🇷🇼":["flag_rw","rwanda"],"🇸🇦":["flag_sa","saudi_arabia"],"🇸🇧":["flag_sb","solomon_islands"],"🇸🇨":["flag_sc","seychelles"],"🇸🇩":["flag_sd","sudan"],"🇸🇪":["flag_se","sweden"],"🇸🇬":["flag_sg","singapore"],"🇸🇭":["flag_sh","st_helena"],"🇸🇮":["flag_si","slovenia"],"🇸🇯":["flag_sj","svalbard_jan_mayen"],"🇸🇰":["flag_sk","slovakia"],"🇸🇱":["flag_sl","sierra_leone"],"🇸🇲":["flag_sm","san_marino"],"🇸🇳":["flag_sn","senegal"],"🇸🇴":["flag_so","somalia"],"🇸🇷":["flag_sr","suriname"],"🇸🇸":["flag_ss","south_sudan"],"🇸🇹":["flag_st","sao_tome_principe"],"🇸🇻":["el_salvador","flag_sv"],"🇸🇽":["flag_sx","sint_maarten"],"🇸🇾":["flag_sy","syria"],"🇸🇿":["eswatini","flag_sz","swaziland"],"🇹🇦":["flag_ta","tristan_da_cunha"],"🇹🇨":["flag_tc","turks_caicos_islands"],"🇹🇩":["chad","flag_td"],"🇹🇫":["flag_tf","french_southern_territories"],"🇹🇬":["flag_tg","togo"],"🇹🇭":["flag_th","thailand"],"🇹🇯":["flag_tj","tajikistan"],"🇹🇰":["flag_tk","tokelau"],"🇹🇱":["flag_tl","timor_leste"],"🇹🇲":["flag_tm","turkmenistan"],"🇹🇳":["flag_tn","tunisia"],"🇹🇴":["flag_to","tonga"],"🇹🇷":["flag_tr","turkey_tr"],"🇹🇹":["flag_tt","trinidad_tobago"],"🇹🇻":["flag_tv","tuvalu"],"🇹🇼":["flag_tw","taiwan"],"🇹🇿":["flag_tz","tanzania"],"🇺🇦":["flag_ua","ukraine"],"🇺🇬":["flag_ug","uganda"],"🇺🇲":["flag_um","us_outlying_islands"],"🇺🇳":["flag_un","un","united_nations"],"🇺🇸":["flag_us","united_states","usa"],"🇺🇾":["flag_uy","uruguay"],"🇺🇿":["flag_uz","uzbekistan"],"🇻🇦":["flag_va","vatican_city"],"🇻🇨":["flag_vc","st_vincent_grenadines"],"🇻🇪":["flag_ve","venezuela"],"🇻🇬":["british_virgin_islands","flag_vg"],"🇻🇮":["flag_vi","us_virgin_islands"],"🇻🇳":["flag_vn","vietnam"],"🇻🇺":["flag_vu","vanuatu"],"🇼🇫":["flag_wf","wallis_futuna"],"🇼🇸":["flag_ws","samoa"],"🇽🇰":["flag_xk","kosovo"],"🇾🇪":["flag_ye","yemen"],"🇾🇹":["flag_yt","mayotte"],"🇿🇦":["flag_za","south_africa"],"🇿🇲":["flag_zm","zambia"],"🇿🇼":["flag_zw","zimbabwe"],"🏴󠁧󠁢󠁥󠁮󠁧󠁿":["england","flag_gbeng"],"🏴󠁧󠁢󠁳󠁣󠁴󠁿":["flag_gbsct","scotland"],"🏴󠁧󠁢󠁷󠁬󠁳󠁿":["flag_gbwls","wales"]}');

/***/ }),

/***/ "../../../node_modules/simple-emoji-map/generated/variants.json":
/*!**********************************************************************!*\
  !*** ../../../node_modules/simple-emoji-map/generated/variants.json ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"👋🏻":["wave_tone1","waving_hand_tone1"],"👋🏼":["wave_tone2","waving_hand_tone2"],"👋🏽":["wave_tone3","waving_hand_tone3"],"👋🏾":["wave_tone4","waving_hand_tone4"],"👋🏿":["wave_tone5","waving_hand_tone5"],"🤚🏻":["raised_back_of_hand_tone1"],"🤚🏼":["raised_back_of_hand_tone2"],"🤚🏽":["raised_back_of_hand_tone3"],"🤚🏾":["raised_back_of_hand_tone4"],"🤚🏿":["raised_back_of_hand_tone5"],"🖐🏻":["raised_hand_with_fingers_splayed_tone1"],"🖐🏼":["raised_hand_with_fingers_splayed_tone2"],"🖐🏽":["raised_hand_with_fingers_splayed_tone3"],"🖐🏾":["raised_hand_with_fingers_splayed_tone4"],"🖐🏿":["raised_hand_with_fingers_splayed_tone5"],"✋🏻":["high_five_tone1","raised_hand_tone1"],"✋🏼":["high_five_tone2","raised_hand_tone2"],"✋🏽":["high_five_tone3","raised_hand_tone3"],"✋🏾":["high_five_tone4","raised_hand_tone4"],"✋🏿":["high_five_tone5","raised_hand_tone5"],"🖖🏻":["vulcan_tone1"],"🖖🏼":["vulcan_tone2"],"🖖🏽":["vulcan_tone3"],"🖖🏾":["vulcan_tone4"],"🖖🏿":["vulcan_tone5"],"🫱🏻":["rightwards_hand_tone1"],"🫱🏼":["rightwards_hand_tone2"],"🫱🏽":["rightwards_hand_tone3"],"🫱🏾":["rightwards_hand_tone4"],"🫱🏿":["rightwards_hand_tone5"],"🫲🏻":["leftwards_hand_tone1"],"🫲🏼":["leftwards_hand_tone2"],"🫲🏽":["leftwards_hand_tone3"],"🫲🏾":["leftwards_hand_tone4"],"🫲🏿":["leftwards_hand_tone5"],"🫳🏻":["palm_down_tone1"],"🫳🏼":["palm_down_tone2"],"🫳🏽":["palm_down_tone3"],"🫳🏾":["palm_down_tone4"],"🫳🏿":["palm_down_tone5"],"🫴🏻":["palm_up_tone1"],"🫴🏼":["palm_up_tone2"],"🫴🏽":["palm_up_tone3"],"🫴🏾":["palm_up_tone4"],"🫴🏿":["palm_up_tone5"],"👌🏻":["ok_hand_tone1"],"👌🏼":["ok_hand_tone2"],"👌🏽":["ok_hand_tone3"],"👌🏾":["ok_hand_tone4"],"👌🏿":["ok_hand_tone5"],"🤌🏻":["pinch_tone1","pinched_fingers_tone1"],"🤌🏼":["pinch_tone2","pinched_fingers_tone2"],"🤌🏽":["pinch_tone3","pinched_fingers_tone3"],"🤌🏾":["pinch_tone4","pinched_fingers_tone4"],"🤌🏿":["pinch_tone5","pinched_fingers_tone5"],"🤏🏻":["pinching_hand_tone1"],"🤏🏼":["pinching_hand_tone2"],"🤏🏽":["pinching_hand_tone3"],"🤏🏾":["pinching_hand_tone4"],"🤏🏿":["pinching_hand_tone5"],"✌🏻":["v_tone1","victory_tone1"],"✌🏼":["v_tone2","victory_tone2"],"✌🏽":["v_tone3","victory_tone3"],"✌🏾":["v_tone4","victory_tone4"],"✌🏿":["v_tone5","victory_tone5"],"🤞🏻":["fingers_crossed_tone1"],"🤞🏼":["fingers_crossed_tone2"],"🤞🏽":["fingers_crossed_tone3"],"🤞🏾":["fingers_crossed_tone4"],"🤞🏿":["fingers_crossed_tone5"],"🫰🏻":["hand_with_index_finger_and_thumb_crossed_tone1"],"🫰🏼":["hand_with_index_finger_and_thumb_crossed_tone2"],"🫰🏽":["hand_with_index_finger_and_thumb_crossed_tone3"],"🫰🏾":["hand_with_index_finger_and_thumb_crossed_tone4"],"🫰🏿":["hand_with_index_finger_and_thumb_crossed_tone5"],"🤟🏻":["love_you_gesture_tone1"],"🤟🏼":["love_you_gesture_tone2"],"🤟🏽":["love_you_gesture_tone3"],"🤟🏾":["love_you_gesture_tone4"],"🤟🏿":["love_you_gesture_tone5"],"🤘🏻":["metal_tone1","sign_of_the_horns_tone1"],"🤘🏼":["metal_tone2","sign_of_the_horns_tone2"],"🤘🏽":["metal_tone3","sign_of_the_horns_tone3"],"🤘🏾":["metal_tone4","sign_of_the_horns_tone4"],"🤘🏿":["metal_tone5","sign_of_the_horns_tone5"],"🤙🏻":["call_me_hand_tone1"],"🤙🏼":["call_me_hand_tone2"],"🤙🏽":["call_me_hand_tone3"],"🤙🏾":["call_me_hand_tone4"],"🤙🏿":["call_me_hand_tone5"],"👈🏻":["point_left_tone1"],"👈🏼":["point_left_tone2"],"👈🏽":["point_left_tone3"],"👈🏾":["point_left_tone4"],"👈🏿":["point_left_tone5"],"👉🏻":["point_right_tone1"],"👉🏼":["point_right_tone2"],"👉🏽":["point_right_tone3"],"👉🏾":["point_right_tone4"],"👉🏿":["point_right_tone5"],"👆🏻":["point_up_tone1"],"👆🏼":["point_up_tone2"],"👆🏽":["point_up_tone3"],"👆🏾":["point_up_tone4"],"👆🏿":["point_up_tone5"],"🖕🏻":["middle_finger_tone1"],"🖕🏼":["middle_finger_tone2"],"🖕🏽":["middle_finger_tone3"],"🖕🏾":["middle_finger_tone4"],"🖕🏿":["middle_finger_tone5"],"👇🏻":["point_down_tone1"],"👇🏼":["point_down_tone2"],"👇🏽":["point_down_tone3"],"👇🏾":["point_down_tone4"],"👇🏿":["point_down_tone5"],"☝🏻":["point_up_2_tone1"],"☝🏼":["point_up_2_tone2"],"☝🏽":["point_up_2_tone3"],"☝🏾":["point_up_2_tone4"],"☝🏿":["point_up_2_tone5"],"🫵🏻":["point_forward_tone1"],"🫵🏼":["point_forward_tone2"],"🫵🏽":["point_forward_tone3"],"🫵🏾":["point_forward_tone4"],"🫵🏿":["point_forward_tone5"],"👍🏻":["+1_tone1","thumbsup_tone1","yes_tone1"],"👍🏼":["+1_tone2","thumbsup_tone2","yes_tone2"],"👍🏽":["+1_tone3","thumbsup_tone3","yes_tone3"],"👍🏾":["+1_tone4","thumbsup_tone4","yes_tone4"],"👍🏿":["+1_tone5","thumbsup_tone5","yes_tone5"],"👎🏻":["-1_tone1","no_tone1","thumbsdown_tone1"],"👎🏼":["-1_tone2","no_tone2","thumbsdown_tone2"],"👎🏽":["-1_tone3","no_tone3","thumbsdown_tone3"],"👎🏾":["-1_tone4","no_tone4","thumbsdown_tone4"],"👎🏿":["-1_tone5","no_tone5","thumbsdown_tone5"],"✊🏻":["fist_tone1"],"✊🏼":["fist_tone2"],"✊🏽":["fist_tone3"],"✊🏾":["fist_tone4"],"✊🏿":["fist_tone5"],"👊🏻":["punch_tone1"],"👊🏼":["punch_tone2"],"👊🏽":["punch_tone3"],"👊🏾":["punch_tone4"],"👊🏿":["punch_tone5"],"🤛🏻":["left_facing_fist_tone1"],"🤛🏼":["left_facing_fist_tone2"],"🤛🏽":["left_facing_fist_tone3"],"🤛🏾":["left_facing_fist_tone4"],"🤛🏿":["left_facing_fist_tone5"],"🤜🏻":["right_facing_fist_tone1"],"🤜🏼":["right_facing_fist_tone2"],"🤜🏽":["right_facing_fist_tone3"],"🤜🏾":["right_facing_fist_tone4"],"🤜🏿":["right_facing_fist_tone5"],"👏🏻":["clap_tone1","clapping_hands_tone1"],"👏🏼":["clap_tone2","clapping_hands_tone2"],"👏🏽":["clap_tone3","clapping_hands_tone3"],"👏🏾":["clap_tone4","clapping_hands_tone4"],"👏🏿":["clap_tone5","clapping_hands_tone5"],"🙌🏻":["raised_hands_tone1"],"🙌🏼":["raised_hands_tone2"],"🙌🏽":["raised_hands_tone3"],"🙌🏾":["raised_hands_tone4"],"🙌🏿":["raised_hands_tone5"],"🫶🏻":["heart_hands_tone1"],"🫶🏼":["heart_hands_tone2"],"🫶🏽":["heart_hands_tone3"],"🫶🏾":["heart_hands_tone4"],"🫶🏿":["heart_hands_tone5"],"👐🏻":["open_hands_tone1"],"👐🏼":["open_hands_tone2"],"👐🏽":["open_hands_tone3"],"👐🏾":["open_hands_tone4"],"👐🏿":["open_hands_tone5"],"🤲🏻":["palms_up_together_tone1"],"🤲🏼":["palms_up_together_tone2"],"🤲🏽":["palms_up_together_tone3"],"🤲🏾":["palms_up_together_tone4"],"🤲🏿":["palms_up_together_tone5"],"🤝🏻":["handshake_tone1"],"🤝🏼":["handshake_tone2"],"🤝🏽":["handshake_tone3"],"🤝🏾":["handshake_tone4"],"🤝🏿":["handshake_tone5"],"🫱🏻‍🫲🏼":["handshake_tone1-2"],"🫱🏻‍🫲🏽":["handshake_tone1-3"],"🫱🏻‍🫲🏾":["handshake_tone1-4"],"🫱🏻‍🫲🏿":["handshake_tone1-5"],"🫱🏼‍🫲🏻":["handshake_tone2-1"],"🫱🏼‍🫲🏽":["handshake_tone2-3"],"🫱🏼‍🫲🏾":["handshake_tone2-4"],"🫱🏼‍🫲🏿":["handshake_tone2-5"],"🫱🏽‍🫲🏻":["handshake_tone3-1"],"🫱🏽‍🫲🏼":["handshake_tone3-2"],"🫱🏽‍🫲🏾":["handshake_tone3-4"],"🫱🏽‍🫲🏿":["handshake_tone3-5"],"🫱🏾‍🫲🏻":["handshake_tone4-1"],"🫱🏾‍🫲🏼":["handshake_tone4-2"],"🫱🏾‍🫲🏽":["handshake_tone4-3"],"🫱🏾‍🫲🏿":["handshake_tone4-5"],"🫱🏿‍🫲🏻":["handshake_tone5-1"],"🫱🏿‍🫲🏼":["handshake_tone5-2"],"🫱🏿‍🫲🏽":["handshake_tone5-3"],"🫱🏿‍🫲🏾":["handshake_tone5-4"],"🙏🏻":["folded_hands_tone1","pray_tone1"],"🙏🏼":["folded_hands_tone2","pray_tone2"],"🙏🏽":["folded_hands_tone3","pray_tone3"],"🙏🏾":["folded_hands_tone4","pray_tone4"],"🙏🏿":["folded_hands_tone5","pray_tone5"],"✍🏻":["writing_hand_tone1"],"✍🏼":["writing_hand_tone2"],"✍🏽":["writing_hand_tone3"],"✍🏾":["writing_hand_tone4"],"✍🏿":["writing_hand_tone5"],"💅🏻":["nail_care_tone1","nail_polish_tone1"],"💅🏼":["nail_care_tone2","nail_polish_tone2"],"💅🏽":["nail_care_tone3","nail_polish_tone3"],"💅🏾":["nail_care_tone4","nail_polish_tone4"],"💅🏿":["nail_care_tone5","nail_polish_tone5"],"🤳🏻":["selfie_tone1"],"🤳🏼":["selfie_tone2"],"🤳🏽":["selfie_tone3"],"🤳🏾":["selfie_tone4"],"🤳🏿":["selfie_tone5"],"💪🏻":["muscle_tone1","right_bicep_tone1"],"💪🏼":["muscle_tone2","right_bicep_tone2"],"💪🏽":["muscle_tone3","right_bicep_tone3"],"💪🏾":["muscle_tone4","right_bicep_tone4"],"💪🏿":["muscle_tone5","right_bicep_tone5"],"🦵🏻":["leg_tone1"],"🦵🏼":["leg_tone2"],"🦵🏽":["leg_tone3"],"🦵🏾":["leg_tone4"],"🦵🏿":["leg_tone5"],"🦶🏻":["foot_tone1"],"🦶🏼":["foot_tone2"],"🦶🏽":["foot_tone3"],"🦶🏾":["foot_tone4"],"🦶🏿":["foot_tone5"],"👂🏻":["ear_tone1"],"👂🏼":["ear_tone2"],"👂🏽":["ear_tone3"],"👂🏾":["ear_tone4"],"👂🏿":["ear_tone5"],"🦻🏻":["ear_with_hearing_aid_tone1","hearing_aid_tone1"],"🦻🏼":["ear_with_hearing_aid_tone2","hearing_aid_tone2"],"🦻🏽":["ear_with_hearing_aid_tone3","hearing_aid_tone3"],"🦻🏾":["ear_with_hearing_aid_tone4","hearing_aid_tone4"],"🦻🏿":["ear_with_hearing_aid_tone5","hearing_aid_tone5"],"👃🏻":["nose_tone1"],"👃🏼":["nose_tone2"],"👃🏽":["nose_tone3"],"👃🏾":["nose_tone4"],"👃🏿":["nose_tone5"],"👶🏻":["baby_tone1"],"👶🏼":["baby_tone2"],"👶🏽":["baby_tone3"],"👶🏾":["baby_tone4"],"👶🏿":["baby_tone5"],"🧒🏻":["child_tone1"],"🧒🏼":["child_tone2"],"🧒🏽":["child_tone3"],"🧒🏾":["child_tone4"],"🧒🏿":["child_tone5"],"👦🏻":["boy_tone1"],"👦🏼":["boy_tone2"],"👦🏽":["boy_tone3"],"👦🏾":["boy_tone4"],"👦🏿":["boy_tone5"],"👧🏻":["girl_tone1"],"👧🏼":["girl_tone2"],"👧🏽":["girl_tone3"],"👧🏾":["girl_tone4"],"👧🏿":["girl_tone5"],"🧑🏻":["adult_tone1"],"🧑🏼":["adult_tone2"],"🧑🏽":["adult_tone3"],"🧑🏾":["adult_tone4"],"🧑🏿":["adult_tone5"],"👱🏻":["blond_haired_tone1"],"👱🏼":["blond_haired_tone2"],"👱🏽":["blond_haired_tone3"],"👱🏾":["blond_haired_tone4"],"👱🏿":["blond_haired_tone5"],"👨🏻":["man_tone1"],"👨🏼":["man_tone2"],"👨🏽":["man_tone3"],"👨🏾":["man_tone4"],"👨🏿":["man_tone5"],"🧔🏻":["person_bearded_tone1"],"🧔🏼":["person_bearded_tone2"],"🧔🏽":["person_bearded_tone3"],"🧔🏾":["person_bearded_tone4"],"🧔🏿":["person_bearded_tone5"],"🧔🏻‍♂️":["man_bearded_tone1"],"🧔🏼‍♂️":["man_bearded_tone2"],"🧔🏽‍♂️":["man_bearded_tone3"],"🧔🏾‍♂️":["man_bearded_tone4"],"🧔🏿‍♂️":["man_bearded_tone5"],"🧔🏻‍♀️":["woman_bearded_tone1"],"🧔🏼‍♀️":["woman_bearded_tone2"],"🧔🏽‍♀️":["woman_bearded_tone3"],"🧔🏾‍♀️":["woman_bearded_tone4"],"🧔🏿‍♀️":["woman_bearded_tone5"],"👨🏻‍🦰":["man_red_haired_tone1"],"👨🏼‍🦰":["man_red_haired_tone2"],"👨🏽‍🦰":["man_red_haired_tone3"],"👨🏾‍🦰":["man_red_haired_tone4"],"👨🏿‍🦰":["man_red_haired_tone5"],"👨🏻‍🦱":["man_curly_haired_tone1"],"👨🏼‍🦱":["man_curly_haired_tone2"],"👨🏽‍🦱":["man_curly_haired_tone3"],"👨🏾‍🦱":["man_curly_haired_tone4"],"👨🏿‍🦱":["man_curly_haired_tone5"],"👨🏻‍🦳":["man_white_haired_tone1"],"👨🏼‍🦳":["man_white_haired_tone2"],"👨🏽‍🦳":["man_white_haired_tone3"],"👨🏾‍🦳":["man_white_haired_tone4"],"👨🏿‍🦳":["man_white_haired_tone5"],"👨🏻‍🦲":["man_bald_tone1"],"👨🏼‍🦲":["man_bald_tone2"],"👨🏽‍🦲":["man_bald_tone3"],"👨🏾‍🦲":["man_bald_tone4"],"👨🏿‍🦲":["man_bald_tone5"],"👩🏻":["woman_tone1"],"👩🏼":["woman_tone2"],"👩🏽":["woman_tone3"],"👩🏾":["woman_tone4"],"👩🏿":["woman_tone5"],"👩🏻‍🦰":["woman_red_haired_tone1"],"👩🏼‍🦰":["woman_red_haired_tone2"],"👩🏽‍🦰":["woman_red_haired_tone3"],"👩🏾‍🦰":["woman_red_haired_tone4"],"👩🏿‍🦰":["woman_red_haired_tone5"],"🧑🏻‍🦰":["red_haired_tone1"],"🧑🏼‍🦰":["red_haired_tone2"],"🧑🏽‍🦰":["red_haired_tone3"],"🧑🏾‍🦰":["red_haired_tone4"],"🧑🏿‍🦰":["red_haired_tone5"],"👩🏻‍🦱":["woman_curly_haired_tone1"],"👩🏼‍🦱":["woman_curly_haired_tone2"],"👩🏽‍🦱":["woman_curly_haired_tone3"],"👩🏾‍🦱":["woman_curly_haired_tone4"],"👩🏿‍🦱":["woman_curly_haired_tone5"],"🧑🏻‍🦱":["curly_haired_tone1"],"🧑🏼‍🦱":["curly_haired_tone2"],"🧑🏽‍🦱":["curly_haired_tone3"],"🧑🏾‍🦱":["curly_haired_tone4"],"🧑🏿‍🦱":["curly_haired_tone5"],"👩🏻‍🦳":["woman_white_haired_tone1"],"👩🏼‍🦳":["woman_white_haired_tone2"],"👩🏽‍🦳":["woman_white_haired_tone3"],"👩🏾‍🦳":["woman_white_haired_tone4"],"👩🏿‍🦳":["woman_white_haired_tone5"],"🧑🏻‍🦳":["white_haired_tone1"],"🧑🏼‍🦳":["white_haired_tone2"],"🧑🏽‍🦳":["white_haired_tone3"],"🧑🏾‍🦳":["white_haired_tone4"],"🧑🏿‍🦳":["white_haired_tone5"],"👩🏻‍🦲":["woman_bald_tone1"],"👩🏼‍🦲":["woman_bald_tone2"],"👩🏽‍🦲":["woman_bald_tone3"],"👩🏾‍🦲":["woman_bald_tone4"],"👩🏿‍🦲":["woman_bald_tone5"],"🧑🏻‍🦲":["bald_tone1"],"🧑🏼‍🦲":["bald_tone2"],"🧑🏽‍🦲":["bald_tone3"],"🧑🏾‍🦲":["bald_tone4"],"🧑🏿‍🦲":["bald_tone5"],"👱🏻‍♀️":["woman_blond_haired_tone1"],"👱🏼‍♀️":["woman_blond_haired_tone2"],"👱🏽‍♀️":["woman_blond_haired_tone3"],"👱🏾‍♀️":["woman_blond_haired_tone4"],"👱🏿‍♀️":["woman_blond_haired_tone5"],"👱🏻‍♂️":["man_blond_haired_tone1"],"👱🏼‍♂️":["man_blond_haired_tone2"],"👱🏽‍♂️":["man_blond_haired_tone3"],"👱🏾‍♂️":["man_blond_haired_tone4"],"👱🏿‍♂️":["man_blond_haired_tone5"],"🧓🏻":["older_adult_tone1"],"🧓🏼":["older_adult_tone2"],"🧓🏽":["older_adult_tone3"],"🧓🏾":["older_adult_tone4"],"🧓🏿":["older_adult_tone5"],"👴🏻":["older_man_tone1"],"👴🏼":["older_man_tone2"],"👴🏽":["older_man_tone3"],"👴🏾":["older_man_tone4"],"👴🏿":["older_man_tone5"],"👵🏻":["older_woman_tone1"],"👵🏼":["older_woman_tone2"],"👵🏽":["older_woman_tone3"],"👵🏾":["older_woman_tone4"],"👵🏿":["older_woman_tone5"],"🙍🏻":["person_frowning_tone1"],"🙍🏼":["person_frowning_tone2"],"🙍🏽":["person_frowning_tone3"],"🙍🏾":["person_frowning_tone4"],"🙍🏿":["person_frowning_tone5"],"🙍🏻‍♂️":["man_frowning_tone1"],"🙍🏼‍♂️":["man_frowning_tone2"],"🙍🏽‍♂️":["man_frowning_tone3"],"🙍🏾‍♂️":["man_frowning_tone4"],"🙍🏿‍♂️":["man_frowning_tone5"],"🙍🏻‍♀️":["woman_frowning_tone1"],"🙍🏼‍♀️":["woman_frowning_tone2"],"🙍🏽‍♀️":["woman_frowning_tone3"],"🙍🏾‍♀️":["woman_frowning_tone4"],"🙍🏿‍♀️":["woman_frowning_tone5"],"🙎🏻":["person_pouting_tone1","pouting_tone1"],"🙎🏼":["person_pouting_tone2","pouting_tone2"],"🙎🏽":["person_pouting_tone3","pouting_tone3"],"🙎🏾":["person_pouting_tone4","pouting_tone4"],"🙎🏿":["person_pouting_tone5","pouting_tone5"],"🙎🏻‍♂️":["man_pouting_tone1"],"🙎🏼‍♂️":["man_pouting_tone2"],"🙎🏽‍♂️":["man_pouting_tone3"],"🙎🏾‍♂️":["man_pouting_tone4"],"🙎🏿‍♂️":["man_pouting_tone5"],"🙎🏻‍♀️":["woman_pouting_tone1"],"🙎🏼‍♀️":["woman_pouting_tone2"],"🙎🏽‍♀️":["woman_pouting_tone3"],"🙎🏾‍♀️":["woman_pouting_tone4"],"🙎🏿‍♀️":["woman_pouting_tone5"],"🙅🏻":["no_good_tone1","person_gesturing_no_tone1"],"🙅🏼":["no_good_tone2","person_gesturing_no_tone2"],"🙅🏽":["no_good_tone3","person_gesturing_no_tone3"],"🙅🏾":["no_good_tone4","person_gesturing_no_tone4"],"🙅🏿":["no_good_tone5","person_gesturing_no_tone5"],"🙅🏻‍♂️":["man_gesturing_no_tone1"],"🙅🏼‍♂️":["man_gesturing_no_tone2"],"🙅🏽‍♂️":["man_gesturing_no_tone3"],"🙅🏾‍♂️":["man_gesturing_no_tone4"],"🙅🏿‍♂️":["man_gesturing_no_tone5"],"🙅🏻‍♀️":["woman_gesturing_no_tone1"],"🙅🏼‍♀️":["woman_gesturing_no_tone2"],"🙅🏽‍♀️":["woman_gesturing_no_tone3"],"🙅🏾‍♀️":["woman_gesturing_no_tone4"],"🙅🏿‍♀️":["woman_gesturing_no_tone5"],"🙆🏻":["all_good_tone1","person_gesturing_ok_tone1"],"🙆🏼":["all_good_tone2","person_gesturing_ok_tone2"],"🙆🏽":["all_good_tone3","person_gesturing_ok_tone3"],"🙆🏾":["all_good_tone4","person_gesturing_ok_tone4"],"🙆🏿":["all_good_tone5","person_gesturing_ok_tone5"],"🙆🏻‍♂️":["man_gesturing_ok_tone1"],"🙆🏼‍♂️":["man_gesturing_ok_tone2"],"🙆🏽‍♂️":["man_gesturing_ok_tone3"],"🙆🏾‍♂️":["man_gesturing_ok_tone4"],"🙆🏿‍♂️":["man_gesturing_ok_tone5"],"🙆🏻‍♀️":["woman_gesturing_ok_tone1"],"🙆🏼‍♀️":["woman_gesturing_ok_tone2"],"🙆🏽‍♀️":["woman_gesturing_ok_tone3"],"🙆🏾‍♀️":["woman_gesturing_ok_tone4"],"🙆🏿‍♀️":["woman_gesturing_ok_tone5"],"💁🏻":["person_tipping_hand_tone1"],"💁🏼":["person_tipping_hand_tone2"],"💁🏽":["person_tipping_hand_tone3"],"💁🏾":["person_tipping_hand_tone4"],"💁🏿":["person_tipping_hand_tone5"],"💁🏻‍♂️":["man_tipping_hand_tone1"],"💁🏼‍♂️":["man_tipping_hand_tone2"],"💁🏽‍♂️":["man_tipping_hand_tone3"],"💁🏾‍♂️":["man_tipping_hand_tone4"],"💁🏿‍♂️":["man_tipping_hand_tone5"],"💁🏻‍♀️":["woman_tipping_hand_tone1"],"💁🏼‍♀️":["woman_tipping_hand_tone2"],"💁🏽‍♀️":["woman_tipping_hand_tone3"],"💁🏾‍♀️":["woman_tipping_hand_tone4"],"💁🏿‍♀️":["woman_tipping_hand_tone5"],"🙋🏻":["person_raising_hand_tone1"],"🙋🏼":["person_raising_hand_tone2"],"🙋🏽":["person_raising_hand_tone3"],"🙋🏾":["person_raising_hand_tone4"],"🙋🏿":["person_raising_hand_tone5"],"🙋🏻‍♂️":["man_raising_hand_tone1"],"🙋🏼‍♂️":["man_raising_hand_tone2"],"🙋🏽‍♂️":["man_raising_hand_tone3"],"🙋🏾‍♂️":["man_raising_hand_tone4"],"🙋🏿‍♂️":["man_raising_hand_tone5"],"🙋🏻‍♀️":["woman_raising_hand_tone1"],"🙋🏼‍♀️":["woman_raising_hand_tone2"],"🙋🏽‍♀️":["woman_raising_hand_tone3"],"🙋🏾‍♀️":["woman_raising_hand_tone4"],"🙋🏿‍♀️":["woman_raising_hand_tone5"],"🧏🏻":["deaf_person_tone1"],"🧏🏼":["deaf_person_tone2"],"🧏🏽":["deaf_person_tone3"],"🧏🏾":["deaf_person_tone4"],"🧏🏿":["deaf_person_tone5"],"🧏🏻‍♂️":["deaf_man_tone1"],"🧏🏼‍♂️":["deaf_man_tone2"],"🧏🏽‍♂️":["deaf_man_tone3"],"🧏🏾‍♂️":["deaf_man_tone4"],"🧏🏿‍♂️":["deaf_man_tone5"],"🧏🏻‍♀️":["deaf_woman_tone1"],"🧏🏼‍♀️":["deaf_woman_tone2"],"🧏🏽‍♀️":["deaf_woman_tone3"],"🧏🏾‍♀️":["deaf_woman_tone4"],"🧏🏿‍♀️":["deaf_woman_tone5"],"🙇🏻":["bow_tone1","person_bowing_tone1"],"🙇🏼":["bow_tone2","person_bowing_tone2"],"🙇🏽":["bow_tone3","person_bowing_tone3"],"🙇🏾":["bow_tone4","person_bowing_tone4"],"🙇🏿":["bow_tone5","person_bowing_tone5"],"🙇🏻‍♂️":["man_bowing_tone1"],"🙇🏼‍♂️":["man_bowing_tone2"],"🙇🏽‍♂️":["man_bowing_tone3"],"🙇🏾‍♂️":["man_bowing_tone4"],"🙇🏿‍♂️":["man_bowing_tone5"],"🙇🏻‍♀️":["woman_bowing_tone1"],"🙇🏼‍♀️":["woman_bowing_tone2"],"🙇🏽‍♀️":["woman_bowing_tone3"],"🙇🏾‍♀️":["woman_bowing_tone4"],"🙇🏿‍♀️":["woman_bowing_tone5"],"🤦🏻":["facepalm_tone1","person_facepalming_tone1"],"🤦🏼":["facepalm_tone2","person_facepalming_tone2"],"🤦🏽":["facepalm_tone3","person_facepalming_tone3"],"🤦🏾":["facepalm_tone4","person_facepalming_tone4"],"🤦🏿":["facepalm_tone5","person_facepalming_tone5"],"🤦🏻‍♂️":["man_facepalming_tone1"],"🤦🏼‍♂️":["man_facepalming_tone2"],"🤦🏽‍♂️":["man_facepalming_tone3"],"🤦🏾‍♂️":["man_facepalming_tone4"],"🤦🏿‍♂️":["man_facepalming_tone5"],"🤦🏻‍♀️":["woman_facepalming_tone1"],"🤦🏼‍♀️":["woman_facepalming_tone2"],"🤦🏽‍♀️":["woman_facepalming_tone3"],"🤦🏾‍♀️":["woman_facepalming_tone4"],"🤦🏿‍♀️":["woman_facepalming_tone5"],"🤷🏻":["person_shrugging_tone1","shrug_tone1"],"🤷🏼":["person_shrugging_tone2","shrug_tone2"],"🤷🏽":["person_shrugging_tone3","shrug_tone3"],"🤷🏾":["person_shrugging_tone4","shrug_tone4"],"🤷🏿":["person_shrugging_tone5","shrug_tone5"],"🤷🏻‍♂️":["man_shrugging_tone1"],"🤷🏼‍♂️":["man_shrugging_tone2"],"🤷🏽‍♂️":["man_shrugging_tone3"],"🤷🏾‍♂️":["man_shrugging_tone4"],"🤷🏿‍♂️":["man_shrugging_tone5"],"🤷🏻‍♀️":["woman_shrugging_tone1"],"🤷🏼‍♀️":["woman_shrugging_tone2"],"🤷🏽‍♀️":["woman_shrugging_tone3"],"🤷🏾‍♀️":["woman_shrugging_tone4"],"🤷🏿‍♀️":["woman_shrugging_tone5"],"🧑🏻‍⚕️":["health_worker_tone1"],"🧑🏼‍⚕️":["health_worker_tone2"],"🧑🏽‍⚕️":["health_worker_tone3"],"🧑🏾‍⚕️":["health_worker_tone4"],"🧑🏿‍⚕️":["health_worker_tone5"],"👨🏻‍⚕️":["man_health_worker_tone1"],"👨🏼‍⚕️":["man_health_worker_tone2"],"👨🏽‍⚕️":["man_health_worker_tone3"],"👨🏾‍⚕️":["man_health_worker_tone4"],"👨🏿‍⚕️":["man_health_worker_tone5"],"👩🏻‍⚕️":["woman_health_worker_tone1"],"👩🏼‍⚕️":["woman_health_worker_tone2"],"👩🏽‍⚕️":["woman_health_worker_tone3"],"👩🏾‍⚕️":["woman_health_worker_tone4"],"👩🏿‍⚕️":["woman_health_worker_tone5"],"🧑🏻‍🎓":["student_tone1"],"🧑🏼‍🎓":["student_tone2"],"🧑🏽‍🎓":["student_tone3"],"🧑🏾‍🎓":["student_tone4"],"🧑🏿‍🎓":["student_tone5"],"👨🏻‍🎓":["man_student_tone1"],"👨🏼‍🎓":["man_student_tone2"],"👨🏽‍🎓":["man_student_tone3"],"👨🏾‍🎓":["man_student_tone4"],"👨🏿‍🎓":["man_student_tone5"],"👩🏻‍🎓":["woman_student_tone1"],"👩🏼‍🎓":["woman_student_tone2"],"👩🏽‍🎓":["woman_student_tone3"],"👩🏾‍🎓":["woman_student_tone4"],"👩🏿‍🎓":["woman_student_tone5"],"🧑🏻‍🏫":["teacher_tone1"],"🧑🏼‍🏫":["teacher_tone2"],"🧑🏽‍🏫":["teacher_tone3"],"🧑🏾‍🏫":["teacher_tone4"],"🧑🏿‍🏫":["teacher_tone5"],"👨🏻‍🏫":["man_teacher_tone1"],"👨🏼‍🏫":["man_teacher_tone2"],"👨🏽‍🏫":["man_teacher_tone3"],"👨🏾‍🏫":["man_teacher_tone4"],"👨🏿‍🏫":["man_teacher_tone5"],"👩🏻‍🏫":["woman_teacher_tone1"],"👩🏼‍🏫":["woman_teacher_tone2"],"👩🏽‍🏫":["woman_teacher_tone3"],"👩🏾‍🏫":["woman_teacher_tone4"],"👩🏿‍🏫":["woman_teacher_tone5"],"🧑🏻‍⚖️":["judge_tone1"],"🧑🏼‍⚖️":["judge_tone2"],"🧑🏽‍⚖️":["judge_tone3"],"🧑🏾‍⚖️":["judge_tone4"],"🧑🏿‍⚖️":["judge_tone5"],"👨🏻‍⚖️":["man_judge_tone1"],"👨🏼‍⚖️":["man_judge_tone2"],"👨🏽‍⚖️":["man_judge_tone3"],"👨🏾‍⚖️":["man_judge_tone4"],"👨🏿‍⚖️":["man_judge_tone5"],"👩🏻‍⚖️":["woman_judge_tone1"],"👩🏼‍⚖️":["woman_judge_tone2"],"👩🏽‍⚖️":["woman_judge_tone3"],"👩🏾‍⚖️":["woman_judge_tone4"],"👩🏿‍⚖️":["woman_judge_tone5"],"🧑🏻‍🌾":["farmer_tone1"],"🧑🏼‍🌾":["farmer_tone2"],"🧑🏽‍🌾":["farmer_tone3"],"🧑🏾‍🌾":["farmer_tone4"],"🧑🏿‍🌾":["farmer_tone5"],"👨🏻‍🌾":["man_farmer_tone1"],"👨🏼‍🌾":["man_farmer_tone2"],"👨🏽‍🌾":["man_farmer_tone3"],"👨🏾‍🌾":["man_farmer_tone4"],"👨🏿‍🌾":["man_farmer_tone5"],"👩🏻‍🌾":["woman_farmer_tone1"],"👩🏼‍🌾":["woman_farmer_tone2"],"👩🏽‍🌾":["woman_farmer_tone3"],"👩🏾‍🌾":["woman_farmer_tone4"],"👩🏿‍🌾":["woman_farmer_tone5"],"🧑🏻‍🍳":["cook_tone1"],"🧑🏼‍🍳":["cook_tone2"],"🧑🏽‍🍳":["cook_tone3"],"🧑🏾‍🍳":["cook_tone4"],"🧑🏿‍🍳":["cook_tone5"],"👨🏻‍🍳":["man_cook_tone1"],"👨🏼‍🍳":["man_cook_tone2"],"👨🏽‍🍳":["man_cook_tone3"],"👨🏾‍🍳":["man_cook_tone4"],"👨🏿‍🍳":["man_cook_tone5"],"👩🏻‍🍳":["woman_cook_tone1"],"👩🏼‍🍳":["woman_cook_tone2"],"👩🏽‍🍳":["woman_cook_tone3"],"👩🏾‍🍳":["woman_cook_tone4"],"👩🏿‍🍳":["woman_cook_tone5"],"🧑🏻‍🔧":["mechanic_tone1"],"🧑🏼‍🔧":["mechanic_tone2"],"🧑🏽‍🔧":["mechanic_tone3"],"🧑🏾‍🔧":["mechanic_tone4"],"🧑🏿‍🔧":["mechanic_tone5"],"👨🏻‍🔧":["man_mechanic_tone1"],"👨🏼‍🔧":["man_mechanic_tone2"],"👨🏽‍🔧":["man_mechanic_tone3"],"👨🏾‍🔧":["man_mechanic_tone4"],"👨🏿‍🔧":["man_mechanic_tone5"],"👩🏻‍🔧":["woman_mechanic_tone1"],"👩🏼‍🔧":["woman_mechanic_tone2"],"👩🏽‍🔧":["woman_mechanic_tone3"],"👩🏾‍🔧":["woman_mechanic_tone4"],"👩🏿‍🔧":["woman_mechanic_tone5"],"🧑🏻‍🏭":["factory_worker_tone1"],"🧑🏼‍🏭":["factory_worker_tone2"],"🧑🏽‍🏭":["factory_worker_tone3"],"🧑🏾‍🏭":["factory_worker_tone4"],"🧑🏿‍🏭":["factory_worker_tone5"],"👨🏻‍🏭":["man_factory_worker_tone1"],"👨🏼‍🏭":["man_factory_worker_tone2"],"👨🏽‍🏭":["man_factory_worker_tone3"],"👨🏾‍🏭":["man_factory_worker_tone4"],"👨🏿‍🏭":["man_factory_worker_tone5"],"👩🏻‍🏭":["woman_factory_worker_tone1"],"👩🏼‍🏭":["woman_factory_worker_tone2"],"👩🏽‍🏭":["woman_factory_worker_tone3"],"👩🏾‍🏭":["woman_factory_worker_tone4"],"👩🏿‍🏭":["woman_factory_worker_tone5"],"🧑🏻‍💼":["office_worker_tone1"],"🧑🏼‍💼":["office_worker_tone2"],"🧑🏽‍💼":["office_worker_tone3"],"🧑🏾‍💼":["office_worker_tone4"],"🧑🏿‍💼":["office_worker_tone5"],"👨🏻‍💼":["man_office_worker_tone1"],"👨🏼‍💼":["man_office_worker_tone2"],"👨🏽‍💼":["man_office_worker_tone3"],"👨🏾‍💼":["man_office_worker_tone4"],"👨🏿‍💼":["man_office_worker_tone5"],"👩🏻‍💼":["woman_office_worker_tone1"],"👩🏼‍💼":["woman_office_worker_tone2"],"👩🏽‍💼":["woman_office_worker_tone3"],"👩🏾‍💼":["woman_office_worker_tone4"],"👩🏿‍💼":["woman_office_worker_tone5"],"🧑🏻‍🔬":["scientist_tone1"],"🧑🏼‍🔬":["scientist_tone2"],"🧑🏽‍🔬":["scientist_tone3"],"🧑🏾‍🔬":["scientist_tone4"],"🧑🏿‍🔬":["scientist_tone5"],"👨🏻‍🔬":["man_scientist_tone1"],"👨🏼‍🔬":["man_scientist_tone2"],"👨🏽‍🔬":["man_scientist_tone3"],"👨🏾‍🔬":["man_scientist_tone4"],"👨🏿‍🔬":["man_scientist_tone5"],"👩🏻‍🔬":["woman_scientist_tone1"],"👩🏼‍🔬":["woman_scientist_tone2"],"👩🏽‍🔬":["woman_scientist_tone3"],"👩🏾‍🔬":["woman_scientist_tone4"],"👩🏿‍🔬":["woman_scientist_tone5"],"🧑🏻‍💻":["technologist_tone1"],"🧑🏼‍💻":["technologist_tone2"],"🧑🏽‍💻":["technologist_tone3"],"🧑🏾‍💻":["technologist_tone4"],"🧑🏿‍💻":["technologist_tone5"],"👨🏻‍💻":["man_technologist_tone1"],"👨🏼‍💻":["man_technologist_tone2"],"👨🏽‍💻":["man_technologist_tone3"],"👨🏾‍💻":["man_technologist_tone4"],"👨🏿‍💻":["man_technologist_tone5"],"👩🏻‍💻":["woman_technologist_tone1"],"👩🏼‍💻":["woman_technologist_tone2"],"👩🏽‍💻":["woman_technologist_tone3"],"👩🏾‍💻":["woman_technologist_tone4"],"👩🏿‍💻":["woman_technologist_tone5"],"🧑🏻‍🎤":["singer_tone1"],"🧑🏼‍🎤":["singer_tone2"],"🧑🏽‍🎤":["singer_tone3"],"🧑🏾‍🎤":["singer_tone4"],"🧑🏿‍🎤":["singer_tone5"],"👨🏻‍🎤":["man_singer_tone1"],"👨🏼‍🎤":["man_singer_tone2"],"👨🏽‍🎤":["man_singer_tone3"],"👨🏾‍🎤":["man_singer_tone4"],"👨🏿‍🎤":["man_singer_tone5"],"👩🏻‍🎤":["woman_singer_tone1"],"👩🏼‍🎤":["woman_singer_tone2"],"👩🏽‍🎤":["woman_singer_tone3"],"👩🏾‍🎤":["woman_singer_tone4"],"👩🏿‍🎤":["woman_singer_tone5"],"🧑🏻‍🎨":["artist_tone1"],"🧑🏼‍🎨":["artist_tone2"],"🧑🏽‍🎨":["artist_tone3"],"🧑🏾‍🎨":["artist_tone4"],"🧑🏿‍🎨":["artist_tone5"],"👨🏻‍🎨":["man_artist_tone1"],"👨🏼‍🎨":["man_artist_tone2"],"👨🏽‍🎨":["man_artist_tone3"],"👨🏾‍🎨":["man_artist_tone4"],"👨🏿‍🎨":["man_artist_tone5"],"👩🏻‍🎨":["woman_artist_tone1"],"👩🏼‍🎨":["woman_artist_tone2"],"👩🏽‍🎨":["woman_artist_tone3"],"👩🏾‍🎨":["woman_artist_tone4"],"👩🏿‍🎨":["woman_artist_tone5"],"🧑🏻‍✈️":["pilot_tone1"],"🧑🏼‍✈️":["pilot_tone2"],"🧑🏽‍✈️":["pilot_tone3"],"🧑🏾‍✈️":["pilot_tone4"],"🧑🏿‍✈️":["pilot_tone5"],"👨🏻‍✈️":["man_pilot_tone1"],"👨🏼‍✈️":["man_pilot_tone2"],"👨🏽‍✈️":["man_pilot_tone3"],"👨🏾‍✈️":["man_pilot_tone4"],"👨🏿‍✈️":["man_pilot_tone5"],"👩🏻‍✈️":["woman_pilot_tone1"],"👩🏼‍✈️":["woman_pilot_tone2"],"👩🏽‍✈️":["woman_pilot_tone3"],"👩🏾‍✈️":["woman_pilot_tone4"],"👩🏿‍✈️":["woman_pilot_tone5"],"🧑🏻‍🚀":["astronaut_tone1"],"🧑🏼‍🚀":["astronaut_tone2"],"🧑🏽‍🚀":["astronaut_tone3"],"🧑🏾‍🚀":["astronaut_tone4"],"🧑🏿‍🚀":["astronaut_tone5"],"👨🏻‍🚀":["man_astronaut_tone1"],"👨🏼‍🚀":["man_astronaut_tone2"],"👨🏽‍🚀":["man_astronaut_tone3"],"👨🏾‍🚀":["man_astronaut_tone4"],"👨🏿‍🚀":["man_astronaut_tone5"],"👩🏻‍🚀":["woman_astronaut_tone1"],"👩🏼‍🚀":["woman_astronaut_tone2"],"👩🏽‍🚀":["woman_astronaut_tone3"],"👩🏾‍🚀":["woman_astronaut_tone4"],"👩🏿‍🚀":["woman_astronaut_tone5"],"🧑🏻‍🚒":["firefighter_tone1"],"🧑🏼‍🚒":["firefighter_tone2"],"🧑🏽‍🚒":["firefighter_tone3"],"🧑🏾‍🚒":["firefighter_tone4"],"🧑🏿‍🚒":["firefighter_tone5"],"👨🏻‍🚒":["man_firefighter_tone1"],"👨🏼‍🚒":["man_firefighter_tone2"],"👨🏽‍🚒":["man_firefighter_tone3"],"👨🏾‍🚒":["man_firefighter_tone4"],"👨🏿‍🚒":["man_firefighter_tone5"],"👩🏻‍🚒":["woman_firefighter_tone1"],"👩🏼‍🚒":["woman_firefighter_tone2"],"👩🏽‍🚒":["woman_firefighter_tone3"],"👩🏾‍🚒":["woman_firefighter_tone4"],"👩🏿‍🚒":["woman_firefighter_tone5"],"👮🏻":["cop_tone1","police_officer_tone1"],"👮🏼":["cop_tone2","police_officer_tone2"],"👮🏽":["cop_tone3","police_officer_tone3"],"👮🏾":["cop_tone4","police_officer_tone4"],"👮🏿":["cop_tone5","police_officer_tone5"],"👮🏻‍♂️":["man_police_officer_tone1"],"👮🏼‍♂️":["man_police_officer_tone2"],"👮🏽‍♂️":["man_police_officer_tone3"],"👮🏾‍♂️":["man_police_officer_tone4"],"👮🏿‍♂️":["man_police_officer_tone5"],"👮🏻‍♀️":["woman_police_officer_tone1"],"👮🏼‍♀️":["woman_police_officer_tone2"],"👮🏽‍♀️":["woman_police_officer_tone3"],"👮🏾‍♀️":["woman_police_officer_tone4"],"👮🏿‍♀️":["woman_police_officer_tone5"],"🕵🏻":["detective_tone1"],"🕵🏼":["detective_tone2"],"🕵🏽":["detective_tone3"],"🕵🏾":["detective_tone4"],"🕵🏿":["detective_tone5"],"🕵🏻‍♂️":["man_detective_tone1"],"🕵🏼‍♂️":["man_detective_tone2"],"🕵🏽‍♂️":["man_detective_tone3"],"🕵🏾‍♂️":["man_detective_tone4"],"🕵🏿‍♂️":["man_detective_tone5"],"🕵🏻‍♀️":["woman_detective_tone1"],"🕵🏼‍♀️":["woman_detective_tone2"],"🕵🏽‍♀️":["woman_detective_tone3"],"🕵🏾‍♀️":["woman_detective_tone4"],"🕵🏿‍♀️":["woman_detective_tone5"],"💂🏻":["guard_tone1"],"💂🏼":["guard_tone2"],"💂🏽":["guard_tone3"],"💂🏾":["guard_tone4"],"💂🏿":["guard_tone5"],"💂🏻‍♂️":["man_guard_tone1"],"💂🏼‍♂️":["man_guard_tone2"],"💂🏽‍♂️":["man_guard_tone3"],"💂🏾‍♂️":["man_guard_tone4"],"💂🏿‍♂️":["man_guard_tone5"],"💂🏻‍♀️":["woman_guard_tone1"],"💂🏼‍♀️":["woman_guard_tone2"],"💂🏽‍♀️":["woman_guard_tone3"],"💂🏾‍♀️":["woman_guard_tone4"],"💂🏿‍♀️":["woman_guard_tone5"],"🥷🏻":["ninja_tone1"],"🥷🏼":["ninja_tone2"],"🥷🏽":["ninja_tone3"],"🥷🏾":["ninja_tone4"],"🥷🏿":["ninja_tone5"],"👷🏻":["construction_worker_tone1"],"👷🏼":["construction_worker_tone2"],"👷🏽":["construction_worker_tone3"],"👷🏾":["construction_worker_tone4"],"👷🏿":["construction_worker_tone5"],"👷🏻‍♂️":["man_construction_worker_tone1"],"👷🏼‍♂️":["man_construction_worker_tone2"],"👷🏽‍♂️":["man_construction_worker_tone3"],"👷🏾‍♂️":["man_construction_worker_tone4"],"👷🏿‍♂️":["man_construction_worker_tone5"],"👷🏻‍♀️":["woman_construction_worker_tone1"],"👷🏼‍♀️":["woman_construction_worker_tone2"],"👷🏽‍♀️":["woman_construction_worker_tone3"],"👷🏾‍♀️":["woman_construction_worker_tone4"],"👷🏿‍♀️":["woman_construction_worker_tone5"],"🫅🏻":["person_with_crown_tone1","royalty_tone1"],"🫅🏼":["person_with_crown_tone2","royalty_tone2"],"🫅🏽":["person_with_crown_tone3","royalty_tone3"],"🫅🏾":["person_with_crown_tone4","royalty_tone4"],"🫅🏿":["person_with_crown_tone5","royalty_tone5"],"🤴🏻":["prince_tone1"],"🤴🏼":["prince_tone2"],"🤴🏽":["prince_tone3"],"🤴🏾":["prince_tone4"],"🤴🏿":["prince_tone5"],"👸🏻":["princess_tone1"],"👸🏼":["princess_tone2"],"👸🏽":["princess_tone3"],"👸🏾":["princess_tone4"],"👸🏿":["princess_tone5"],"👳🏻":["person_wearing_turban_tone1"],"👳🏼":["person_wearing_turban_tone2"],"👳🏽":["person_wearing_turban_tone3"],"👳🏾":["person_wearing_turban_tone4"],"👳🏿":["person_wearing_turban_tone5"],"👳🏻‍♂️":["man_wearing_turban_tone1"],"👳🏼‍♂️":["man_wearing_turban_tone2"],"👳🏽‍♂️":["man_wearing_turban_tone3"],"👳🏾‍♂️":["man_wearing_turban_tone4"],"👳🏿‍♂️":["man_wearing_turban_tone5"],"👳🏻‍♀️":["woman_wearing_turban_tone1"],"👳🏼‍♀️":["woman_wearing_turban_tone2"],"👳🏽‍♀️":["woman_wearing_turban_tone3"],"👳🏾‍♀️":["woman_wearing_turban_tone4"],"👳🏿‍♀️":["woman_wearing_turban_tone5"],"👲🏻":["person_with_skullcap_tone1"],"👲🏼":["person_with_skullcap_tone2"],"👲🏽":["person_with_skullcap_tone3"],"👲🏾":["person_with_skullcap_tone4"],"👲🏿":["person_with_skullcap_tone5"],"🧕🏻":["woman_with_headscarf_tone1"],"🧕🏼":["woman_with_headscarf_tone2"],"🧕🏽":["woman_with_headscarf_tone3"],"🧕🏾":["woman_with_headscarf_tone4"],"🧕🏿":["woman_with_headscarf_tone5"],"🤵🏻":["person_in_tuxedo_tone1"],"🤵🏼":["person_in_tuxedo_tone2"],"🤵🏽":["person_in_tuxedo_tone3"],"🤵🏾":["person_in_tuxedo_tone4"],"🤵🏿":["person_in_tuxedo_tone5"],"🤵🏻‍♂️":["man_in_tuxedo_tone1"],"🤵🏼‍♂️":["man_in_tuxedo_tone2"],"🤵🏽‍♂️":["man_in_tuxedo_tone3"],"🤵🏾‍♂️":["man_in_tuxedo_tone4"],"🤵🏿‍♂️":["man_in_tuxedo_tone5"],"🤵🏻‍♀️":["woman_in_tuxedo_tone1"],"🤵🏼‍♀️":["woman_in_tuxedo_tone2"],"🤵🏽‍♀️":["woman_in_tuxedo_tone3"],"🤵🏾‍♀️":["woman_in_tuxedo_tone4"],"🤵🏿‍♀️":["woman_in_tuxedo_tone5"],"👰🏻":["person_with_veil_tone1"],"👰🏼":["person_with_veil_tone2"],"👰🏽":["person_with_veil_tone3"],"👰🏾":["person_with_veil_tone4"],"👰🏿":["person_with_veil_tone5"],"👰🏻‍♂️":["man_with_veil_tone1"],"👰🏼‍♂️":["man_with_veil_tone2"],"👰🏽‍♂️":["man_with_veil_tone3"],"👰🏾‍♂️":["man_with_veil_tone4"],"👰🏿‍♂️":["man_with_veil_tone5"],"👰🏻‍♀️":["woman_with_veil_tone1"],"👰🏼‍♀️":["woman_with_veil_tone2"],"👰🏽‍♀️":["woman_with_veil_tone3"],"👰🏾‍♀️":["woman_with_veil_tone4"],"👰🏿‍♀️":["woman_with_veil_tone5"],"🤰🏻":["pregnant_woman_tone1"],"🤰🏼":["pregnant_woman_tone2"],"🤰🏽":["pregnant_woman_tone3"],"🤰🏾":["pregnant_woman_tone4"],"🤰🏿":["pregnant_woman_tone5"],"🫃🏻":["pregnant_man_tone1"],"🫃🏼":["pregnant_man_tone2"],"🫃🏽":["pregnant_man_tone3"],"🫃🏾":["pregnant_man_tone4"],"🫃🏿":["pregnant_man_tone5"],"🫄🏻":["pregnant_person_tone1"],"🫄🏼":["pregnant_person_tone2"],"🫄🏽":["pregnant_person_tone3"],"🫄🏾":["pregnant_person_tone4"],"🫄🏿":["pregnant_person_tone5"],"🤱🏻":["breast_feeding_tone1"],"🤱🏼":["breast_feeding_tone2"],"🤱🏽":["breast_feeding_tone3"],"🤱🏾":["breast_feeding_tone4"],"🤱🏿":["breast_feeding_tone5"],"👩🏻‍🍼":["woman_feeding_baby_tone1"],"👩🏼‍🍼":["woman_feeding_baby_tone2"],"👩🏽‍🍼":["woman_feeding_baby_tone3"],"👩🏾‍🍼":["woman_feeding_baby_tone4"],"👩🏿‍🍼":["woman_feeding_baby_tone5"],"👨🏻‍🍼":["man_feeding_baby_tone1"],"👨🏼‍🍼":["man_feeding_baby_tone2"],"👨🏽‍🍼":["man_feeding_baby_tone3"],"👨🏾‍🍼":["man_feeding_baby_tone4"],"👨🏿‍🍼":["man_feeding_baby_tone5"],"🧑🏻‍🍼":["person_feeding_baby_tone1"],"🧑🏼‍🍼":["person_feeding_baby_tone2"],"🧑🏽‍🍼":["person_feeding_baby_tone3"],"🧑🏾‍🍼":["person_feeding_baby_tone4"],"🧑🏿‍🍼":["person_feeding_baby_tone5"],"👼🏻":["angel_tone1"],"👼🏼":["angel_tone2"],"👼🏽":["angel_tone3"],"👼🏾":["angel_tone4"],"👼🏿":["angel_tone5"],"🎅🏻":["santa_tone1"],"🎅🏼":["santa_tone2"],"🎅🏽":["santa_tone3"],"🎅🏾":["santa_tone4"],"🎅🏿":["santa_tone5"],"🤶🏻":["mrs_claus_tone1"],"🤶🏼":["mrs_claus_tone2"],"🤶🏽":["mrs_claus_tone3"],"🤶🏾":["mrs_claus_tone4"],"🤶🏿":["mrs_claus_tone5"],"🧑🏻‍🎄":["mx_claus_tone1"],"🧑🏼‍🎄":["mx_claus_tone2"],"🧑🏽‍🎄":["mx_claus_tone3"],"🧑🏾‍🎄":["mx_claus_tone4"],"🧑🏿‍🎄":["mx_claus_tone5"],"🦸🏻":["superhero_tone1"],"🦸🏼":["superhero_tone2"],"🦸🏽":["superhero_tone3"],"🦸🏾":["superhero_tone4"],"🦸🏿":["superhero_tone5"],"🦸🏻‍♂️":["man_superhero_tone1"],"🦸🏼‍♂️":["man_superhero_tone2"],"🦸🏽‍♂️":["man_superhero_tone3"],"🦸🏾‍♂️":["man_superhero_tone4"],"🦸🏿‍♂️":["man_superhero_tone5"],"🦸🏻‍♀️":["woman_superhero_tone1"],"🦸🏼‍♀️":["woman_superhero_tone2"],"🦸🏽‍♀️":["woman_superhero_tone3"],"🦸🏾‍♀️":["woman_superhero_tone4"],"🦸🏿‍♀️":["woman_superhero_tone5"],"🦹🏻":["supervillain_tone1"],"🦹🏼":["supervillain_tone2"],"🦹🏽":["supervillain_tone3"],"🦹🏾":["supervillain_tone4"],"🦹🏿":["supervillain_tone5"],"🦹🏻‍♂️":["man_supervillain_tone1"],"🦹🏼‍♂️":["man_supervillain_tone2"],"🦹🏽‍♂️":["man_supervillain_tone3"],"🦹🏾‍♂️":["man_supervillain_tone4"],"🦹🏿‍♂️":["man_supervillain_tone5"],"🦹🏻‍♀️":["woman_supervillain_tone1"],"🦹🏼‍♀️":["woman_supervillain_tone2"],"🦹🏽‍♀️":["woman_supervillain_tone3"],"🦹🏾‍♀️":["woman_supervillain_tone4"],"🦹🏿‍♀️":["woman_supervillain_tone5"],"🧙🏻":["mage_tone1"],"🧙🏼":["mage_tone2"],"🧙🏽":["mage_tone3"],"🧙🏾":["mage_tone4"],"🧙🏿":["mage_tone5"],"🧙🏻‍♂️":["man_mage_tone1"],"🧙🏼‍♂️":["man_mage_tone2"],"🧙🏽‍♂️":["man_mage_tone3"],"🧙🏾‍♂️":["man_mage_tone4"],"🧙🏿‍♂️":["man_mage_tone5"],"🧙🏻‍♀️":["woman_mage_tone1"],"🧙🏼‍♀️":["woman_mage_tone2"],"🧙🏽‍♀️":["woman_mage_tone3"],"🧙🏾‍♀️":["woman_mage_tone4"],"🧙🏿‍♀️":["woman_mage_tone5"],"🧚🏻":["fairy_tone1"],"🧚🏼":["fairy_tone2"],"🧚🏽":["fairy_tone3"],"🧚🏾":["fairy_tone4"],"🧚🏿":["fairy_tone5"],"🧚🏻‍♂️":["man_fairy_tone1"],"🧚🏼‍♂️":["man_fairy_tone2"],"🧚🏽‍♂️":["man_fairy_tone3"],"🧚🏾‍♂️":["man_fairy_tone4"],"🧚🏿‍♂️":["man_fairy_tone5"],"🧚🏻‍♀️":["woman_fairy_tone1"],"🧚🏼‍♀️":["woman_fairy_tone2"],"🧚🏽‍♀️":["woman_fairy_tone3"],"🧚🏾‍♀️":["woman_fairy_tone4"],"🧚🏿‍♀️":["woman_fairy_tone5"],"🧛🏻":["vampire_tone1"],"🧛🏼":["vampire_tone2"],"🧛🏽":["vampire_tone3"],"🧛🏾":["vampire_tone4"],"🧛🏿":["vampire_tone5"],"🧛🏻‍♂️":["man_vampire_tone1"],"🧛🏼‍♂️":["man_vampire_tone2"],"🧛🏽‍♂️":["man_vampire_tone3"],"🧛🏾‍♂️":["man_vampire_tone4"],"🧛🏿‍♂️":["man_vampire_tone5"],"🧛🏻‍♀️":["woman_vampire_tone1"],"🧛🏼‍♀️":["woman_vampire_tone2"],"🧛🏽‍♀️":["woman_vampire_tone3"],"🧛🏾‍♀️":["woman_vampire_tone4"],"🧛🏿‍♀️":["woman_vampire_tone5"],"🧜🏻":["merperson_tone1"],"🧜🏼":["merperson_tone2"],"🧜🏽":["merperson_tone3"],"🧜🏾":["merperson_tone4"],"🧜🏿":["merperson_tone5"],"🧜🏻‍♂️":["merman_tone1"],"🧜🏼‍♂️":["merman_tone2"],"🧜🏽‍♂️":["merman_tone3"],"🧜🏾‍♂️":["merman_tone4"],"🧜🏿‍♂️":["merman_tone5"],"🧜🏻‍♀️":["mermaid_tone1"],"🧜🏼‍♀️":["mermaid_tone2"],"🧜🏽‍♀️":["mermaid_tone3"],"🧜🏾‍♀️":["mermaid_tone4"],"🧜🏿‍♀️":["mermaid_tone5"],"🧝🏻":["elf_tone1"],"🧝🏼":["elf_tone2"],"🧝🏽":["elf_tone3"],"🧝🏾":["elf_tone4"],"🧝🏿":["elf_tone5"],"🧝🏻‍♂️":["man_elf_tone1"],"🧝🏼‍♂️":["man_elf_tone2"],"🧝🏽‍♂️":["man_elf_tone3"],"🧝🏾‍♂️":["man_elf_tone4"],"🧝🏿‍♂️":["man_elf_tone5"],"🧝🏻‍♀️":["woman_elf_tone1"],"🧝🏼‍♀️":["woman_elf_tone2"],"🧝🏽‍♀️":["woman_elf_tone3"],"🧝🏾‍♀️":["woman_elf_tone4"],"🧝🏿‍♀️":["woman_elf_tone5"],"💆🏻":["massage_tone1","person_getting_massage_tone1"],"💆🏼":["massage_tone2","person_getting_massage_tone2"],"💆🏽":["massage_tone3","person_getting_massage_tone3"],"💆🏾":["massage_tone4","person_getting_massage_tone4"],"💆🏿":["massage_tone5","person_getting_massage_tone5"],"💆🏻‍♂️":["man_getting_massage_tone1"],"💆🏼‍♂️":["man_getting_massage_tone2"],"💆🏽‍♂️":["man_getting_massage_tone3"],"💆🏾‍♂️":["man_getting_massage_tone4"],"💆🏿‍♂️":["man_getting_massage_tone5"],"💆🏻‍♀️":["woman_getting_massage_tone1"],"💆🏼‍♀️":["woman_getting_massage_tone2"],"💆🏽‍♀️":["woman_getting_massage_tone3"],"💆🏾‍♀️":["woman_getting_massage_tone4"],"💆🏿‍♀️":["woman_getting_massage_tone5"],"💇🏻":["haircut_tone1","person_getting_haircut_tone1"],"💇🏼":["haircut_tone2","person_getting_haircut_tone2"],"💇🏽":["haircut_tone3","person_getting_haircut_tone3"],"💇🏾":["haircut_tone4","person_getting_haircut_tone4"],"💇🏿":["haircut_tone5","person_getting_haircut_tone5"],"💇🏻‍♂️":["man_getting_haircut_tone1"],"💇🏼‍♂️":["man_getting_haircut_tone2"],"💇🏽‍♂️":["man_getting_haircut_tone3"],"💇🏾‍♂️":["man_getting_haircut_tone4"],"💇🏿‍♂️":["man_getting_haircut_tone5"],"💇🏻‍♀️":["woman_getting_haircut_tone1"],"💇🏼‍♀️":["woman_getting_haircut_tone2"],"💇🏽‍♀️":["woman_getting_haircut_tone3"],"💇🏾‍♀️":["woman_getting_haircut_tone4"],"💇🏿‍♀️":["woman_getting_haircut_tone5"],"🚶🏻":["person_walking_tone1","walking_tone1"],"🚶🏼":["person_walking_tone2","walking_tone2"],"🚶🏽":["person_walking_tone3","walking_tone3"],"🚶🏾":["person_walking_tone4","walking_tone4"],"🚶🏿":["person_walking_tone5","walking_tone5"],"🚶🏻‍♂️":["man_walking_tone1"],"🚶🏼‍♂️":["man_walking_tone2"],"🚶🏽‍♂️":["man_walking_tone3"],"🚶🏾‍♂️":["man_walking_tone4"],"🚶🏿‍♂️":["man_walking_tone5"],"🚶🏻‍♀️":["woman_walking_tone1"],"🚶🏼‍♀️":["woman_walking_tone2"],"🚶🏽‍♀️":["woman_walking_tone3"],"🚶🏾‍♀️":["woman_walking_tone4"],"🚶🏿‍♀️":["woman_walking_tone5"],"🧍🏻":["person_standing_tone1","standing_tone1"],"🧍🏼":["person_standing_tone2","standing_tone2"],"🧍🏽":["person_standing_tone3","standing_tone3"],"🧍🏾":["person_standing_tone4","standing_tone4"],"🧍🏿":["person_standing_tone5","standing_tone5"],"🧍🏻‍♂️":["man_standing_tone1"],"🧍🏼‍♂️":["man_standing_tone2"],"🧍🏽‍♂️":["man_standing_tone3"],"🧍🏾‍♂️":["man_standing_tone4"],"🧍🏿‍♂️":["man_standing_tone5"],"🧍🏻‍♀️":["woman_standing_tone1"],"🧍🏼‍♀️":["woman_standing_tone2"],"🧍🏽‍♀️":["woman_standing_tone3"],"🧍🏾‍♀️":["woman_standing_tone4"],"🧍🏿‍♀️":["woman_standing_tone5"],"🧎🏻":["kneeling_tone1","person_kneeling_tone1"],"🧎🏼":["kneeling_tone2","person_kneeling_tone2"],"🧎🏽":["kneeling_tone3","person_kneeling_tone3"],"🧎🏾":["kneeling_tone4","person_kneeling_tone4"],"🧎🏿":["kneeling_tone5","person_kneeling_tone5"],"🧎🏻‍♂️":["man_kneeling_tone1"],"🧎🏼‍♂️":["man_kneeling_tone2"],"🧎🏽‍♂️":["man_kneeling_tone3"],"🧎🏾‍♂️":["man_kneeling_tone4"],"🧎🏿‍♂️":["man_kneeling_tone5"],"🧎🏻‍♀️":["woman_kneeling_tone1"],"🧎🏼‍♀️":["woman_kneeling_tone2"],"🧎🏽‍♀️":["woman_kneeling_tone3"],"🧎🏾‍♀️":["woman_kneeling_tone4"],"🧎🏿‍♀️":["woman_kneeling_tone5"],"🧑🏻‍🦯":["person_with_probing_cane_tone1","person_with_white_cane_tone1"],"🧑🏼‍🦯":["person_with_probing_cane_tone2","person_with_white_cane_tone2"],"🧑🏽‍🦯":["person_with_probing_cane_tone3","person_with_white_cane_tone3"],"🧑🏾‍🦯":["person_with_probing_cane_tone4","person_with_white_cane_tone4"],"🧑🏿‍🦯":["person_with_probing_cane_tone5","person_with_white_cane_tone5"],"👨🏻‍🦯":["man_with_probing_cane_tone1","man_with_white_cane_tone1"],"👨🏼‍🦯":["man_with_probing_cane_tone2","man_with_white_cane_tone2"],"👨🏽‍🦯":["man_with_probing_cane_tone3","man_with_white_cane_tone3"],"👨🏾‍🦯":["man_with_probing_cane_tone4","man_with_white_cane_tone4"],"👨🏿‍🦯":["man_with_probing_cane_tone5","man_with_white_cane_tone5"],"👩🏻‍🦯":["woman_with_probing_cane_tone1","woman_with_white_cane_tone1"],"👩🏼‍🦯":["woman_with_probing_cane_tone2","woman_with_white_cane_tone2"],"👩🏽‍🦯":["woman_with_probing_cane_tone3","woman_with_white_cane_tone3"],"👩🏾‍🦯":["woman_with_probing_cane_tone4","woman_with_white_cane_tone4"],"👩🏿‍🦯":["woman_with_probing_cane_tone5","woman_with_white_cane_tone5"],"🧑🏻‍🦼":["person_in_motorized_wheelchair_tone1"],"🧑🏼‍🦼":["person_in_motorized_wheelchair_tone2"],"🧑🏽‍🦼":["person_in_motorized_wheelchair_tone3"],"🧑🏾‍🦼":["person_in_motorized_wheelchair_tone4"],"🧑🏿‍🦼":["person_in_motorized_wheelchair_tone5"],"👨🏻‍🦼":["man_in_motorized_wheelchair_tone1"],"👨🏼‍🦼":["man_in_motorized_wheelchair_tone2"],"👨🏽‍🦼":["man_in_motorized_wheelchair_tone3"],"👨🏾‍🦼":["man_in_motorized_wheelchair_tone4"],"👨🏿‍🦼":["man_in_motorized_wheelchair_tone5"],"👩🏻‍🦼":["woman_in_motorized_wheelchair_tone1"],"👩🏼‍🦼":["woman_in_motorized_wheelchair_tone2"],"👩🏽‍🦼":["woman_in_motorized_wheelchair_tone3"],"👩🏾‍🦼":["woman_in_motorized_wheelchair_tone4"],"👩🏿‍🦼":["woman_in_motorized_wheelchair_tone5"],"🧑🏻‍🦽":["person_in_manual_wheelchair_tone1"],"🧑🏼‍🦽":["person_in_manual_wheelchair_tone2"],"🧑🏽‍🦽":["person_in_manual_wheelchair_tone3"],"🧑🏾‍🦽":["person_in_manual_wheelchair_tone4"],"🧑🏿‍🦽":["person_in_manual_wheelchair_tone5"],"👨🏻‍🦽":["man_in_manual_wheelchair_tone1"],"👨🏼‍🦽":["man_in_manual_wheelchair_tone2"],"👨🏽‍🦽":["man_in_manual_wheelchair_tone3"],"👨🏾‍🦽":["man_in_manual_wheelchair_tone4"],"👨🏿‍🦽":["man_in_manual_wheelchair_tone5"],"👩🏻‍🦽":["woman_in_manual_wheelchair_tone1"],"👩🏼‍🦽":["woman_in_manual_wheelchair_tone2"],"👩🏽‍🦽":["woman_in_manual_wheelchair_tone3"],"👩🏾‍🦽":["woman_in_manual_wheelchair_tone4"],"👩🏿‍🦽":["woman_in_manual_wheelchair_tone5"],"🏃🏻":["person_running_tone1","running_tone1"],"🏃🏼":["person_running_tone2","running_tone2"],"🏃🏽":["person_running_tone3","running_tone3"],"🏃🏾":["person_running_tone4","running_tone4"],"🏃🏿":["person_running_tone5","running_tone5"],"🏃🏻‍♂️":["man_running_tone1"],"🏃🏼‍♂️":["man_running_tone2"],"🏃🏽‍♂️":["man_running_tone3"],"🏃🏾‍♂️":["man_running_tone4"],"🏃🏿‍♂️":["man_running_tone5"],"🏃🏻‍♀️":["woman_running_tone1"],"🏃🏼‍♀️":["woman_running_tone2"],"🏃🏽‍♀️":["woman_running_tone3"],"🏃🏾‍♀️":["woman_running_tone4"],"🏃🏿‍♀️":["woman_running_tone5"],"💃🏻":["dancer_tone1","woman_dancing_tone1"],"💃🏼":["dancer_tone2","woman_dancing_tone2"],"💃🏽":["dancer_tone3","woman_dancing_tone3"],"💃🏾":["dancer_tone4","woman_dancing_tone4"],"💃🏿":["dancer_tone5","woman_dancing_tone5"],"🕺🏻":["man_dancing_tone1"],"🕺🏼":["man_dancing_tone2"],"🕺🏽":["man_dancing_tone3"],"🕺🏾":["man_dancing_tone4"],"🕺🏿":["man_dancing_tone5"],"🕴🏻":["levitate_tone1","levitating_tone1","person_in_suit_levitating_tone1"],"🕴🏼":["levitate_tone2","levitating_tone2","person_in_suit_levitating_tone2"],"🕴🏽":["levitate_tone3","levitating_tone3","person_in_suit_levitating_tone3"],"🕴🏾":["levitate_tone4","levitating_tone4","person_in_suit_levitating_tone4"],"🕴🏿":["levitate_tone5","levitating_tone5","person_in_suit_levitating_tone5"],"🧖🏻":["person_in_steamy_room_tone1"],"🧖🏼":["person_in_steamy_room_tone2"],"🧖🏽":["person_in_steamy_room_tone3"],"🧖🏾":["person_in_steamy_room_tone4"],"🧖🏿":["person_in_steamy_room_tone5"],"🧖🏻‍♂️":["man_in_steamy_room_tone1"],"🧖🏼‍♂️":["man_in_steamy_room_tone2"],"🧖🏽‍♂️":["man_in_steamy_room_tone3"],"🧖🏾‍♂️":["man_in_steamy_room_tone4"],"🧖🏿‍♂️":["man_in_steamy_room_tone5"],"🧖🏻‍♀️":["woman_in_steamy_room_tone1"],"🧖🏼‍♀️":["woman_in_steamy_room_tone2"],"🧖🏽‍♀️":["woman_in_steamy_room_tone3"],"🧖🏾‍♀️":["woman_in_steamy_room_tone4"],"🧖🏿‍♀️":["woman_in_steamy_room_tone5"],"🧗🏻":["climbing_tone1","person_climbing_tone1"],"🧗🏼":["climbing_tone2","person_climbing_tone2"],"🧗🏽":["climbing_tone3","person_climbing_tone3"],"🧗🏾":["climbing_tone4","person_climbing_tone4"],"🧗🏿":["climbing_tone5","person_climbing_tone5"],"🧗🏻‍♂️":["man_climbing_tone1"],"🧗🏼‍♂️":["man_climbing_tone2"],"🧗🏽‍♂️":["man_climbing_tone3"],"🧗🏾‍♂️":["man_climbing_tone4"],"🧗🏿‍♂️":["man_climbing_tone5"],"🧗🏻‍♀️":["woman_climbing_tone1"],"🧗🏼‍♀️":["woman_climbing_tone2"],"🧗🏽‍♀️":["woman_climbing_tone3"],"🧗🏾‍♀️":["woman_climbing_tone4"],"🧗🏿‍♀️":["woman_climbing_tone5"],"🏇🏻":["horse_racing_tone1"],"🏇🏼":["horse_racing_tone2"],"🏇🏽":["horse_racing_tone3"],"🏇🏾":["horse_racing_tone4"],"🏇🏿":["horse_racing_tone5"],"🏂🏻":["person_snowboarding_tone1","snowboarder_tone1","snowboarding_tone1"],"🏂🏼":["person_snowboarding_tone2","snowboarder_tone2","snowboarding_tone2"],"🏂🏽":["person_snowboarding_tone3","snowboarder_tone3","snowboarding_tone3"],"🏂🏾":["person_snowboarding_tone4","snowboarder_tone4","snowboarding_tone4"],"🏂🏿":["person_snowboarding_tone5","snowboarder_tone5","snowboarding_tone5"],"🏌🏻":["golfer_tone1","golfing_tone1","person_golfing_tone1"],"🏌🏼":["golfer_tone2","golfing_tone2","person_golfing_tone2"],"🏌🏽":["golfer_tone3","golfing_tone3","person_golfing_tone3"],"🏌🏾":["golfer_tone4","golfing_tone4","person_golfing_tone4"],"🏌🏿":["golfer_tone5","golfing_tone5","person_golfing_tone5"],"🏌🏻‍♂️":["man_golfing_tone1"],"🏌🏼‍♂️":["man_golfing_tone2"],"🏌🏽‍♂️":["man_golfing_tone3"],"🏌🏾‍♂️":["man_golfing_tone4"],"🏌🏿‍♂️":["man_golfing_tone5"],"🏌🏻‍♀️":["woman_golfing_tone1"],"🏌🏼‍♀️":["woman_golfing_tone2"],"🏌🏽‍♀️":["woman_golfing_tone3"],"🏌🏾‍♀️":["woman_golfing_tone4"],"🏌🏿‍♀️":["woman_golfing_tone5"],"🏄🏻":["person_surfing_tone1","surfer_tone1","surfing_tone1"],"🏄🏼":["person_surfing_tone2","surfer_tone2","surfing_tone2"],"🏄🏽":["person_surfing_tone3","surfer_tone3","surfing_tone3"],"🏄🏾":["person_surfing_tone4","surfer_tone4","surfing_tone4"],"🏄🏿":["person_surfing_tone5","surfer_tone5","surfing_tone5"],"🏄🏻‍♂️":["man_surfing_tone1"],"🏄🏼‍♂️":["man_surfing_tone2"],"🏄🏽‍♂️":["man_surfing_tone3"],"🏄🏾‍♂️":["man_surfing_tone4"],"🏄🏿‍♂️":["man_surfing_tone5"],"🏄🏻‍♀️":["woman_surfing_tone1"],"🏄🏼‍♀️":["woman_surfing_tone2"],"🏄🏽‍♀️":["woman_surfing_tone3"],"🏄🏾‍♀️":["woman_surfing_tone4"],"🏄🏿‍♀️":["woman_surfing_tone5"],"🚣🏻":["person_rowing_boat_tone1","rowboat_tone1"],"🚣🏼":["person_rowing_boat_tone2","rowboat_tone2"],"🚣🏽":["person_rowing_boat_tone3","rowboat_tone3"],"🚣🏾":["person_rowing_boat_tone4","rowboat_tone4"],"🚣🏿":["person_rowing_boat_tone5","rowboat_tone5"],"🚣🏻‍♂️":["man_rowing_boat_tone1"],"🚣🏼‍♂️":["man_rowing_boat_tone2"],"🚣🏽‍♂️":["man_rowing_boat_tone3"],"🚣🏾‍♂️":["man_rowing_boat_tone4"],"🚣🏿‍♂️":["man_rowing_boat_tone5"],"🚣🏻‍♀️":["woman_rowing_boat_tone1"],"🚣🏼‍♀️":["woman_rowing_boat_tone2"],"🚣🏽‍♀️":["woman_rowing_boat_tone3"],"🚣🏾‍♀️":["woman_rowing_boat_tone4"],"🚣🏿‍♀️":["woman_rowing_boat_tone5"],"🏊🏻":["person_swimming_tone1","swimmer_tone1","swimming_tone1"],"🏊🏼":["person_swimming_tone2","swimmer_tone2","swimming_tone2"],"🏊🏽":["person_swimming_tone3","swimmer_tone3","swimming_tone3"],"🏊🏾":["person_swimming_tone4","swimmer_tone4","swimming_tone4"],"🏊🏿":["person_swimming_tone5","swimmer_tone5","swimming_tone5"],"🏊🏻‍♂️":["man_swimming_tone1"],"🏊🏼‍♂️":["man_swimming_tone2"],"🏊🏽‍♂️":["man_swimming_tone3"],"🏊🏾‍♂️":["man_swimming_tone4"],"🏊🏿‍♂️":["man_swimming_tone5"],"🏊🏻‍♀️":["woman_swimming_tone1"],"🏊🏼‍♀️":["woman_swimming_tone2"],"🏊🏽‍♀️":["woman_swimming_tone3"],"🏊🏾‍♀️":["woman_swimming_tone4"],"🏊🏿‍♀️":["woman_swimming_tone5"],"⛹🏻":["person_bouncing_ball_tone1"],"⛹🏼":["person_bouncing_ball_tone2"],"⛹🏽":["person_bouncing_ball_tone3"],"⛹🏾":["person_bouncing_ball_tone4"],"⛹🏿":["person_bouncing_ball_tone5"],"⛹🏻‍♂️":["man_bouncing_ball_tone1"],"⛹🏼‍♂️":["man_bouncing_ball_tone2"],"⛹🏽‍♂️":["man_bouncing_ball_tone3"],"⛹🏾‍♂️":["man_bouncing_ball_tone4"],"⛹🏿‍♂️":["man_bouncing_ball_tone5"],"⛹🏻‍♀️":["woman_bouncing_ball_tone1"],"⛹🏼‍♀️":["woman_bouncing_ball_tone2"],"⛹🏽‍♀️":["woman_bouncing_ball_tone3"],"⛹🏾‍♀️":["woman_bouncing_ball_tone4"],"⛹🏿‍♀️":["woman_bouncing_ball_tone5"],"🏋🏻":["person_lifting_weights_tone1","weight_lifter_tone1","weight_lifting_tone1"],"🏋🏼":["person_lifting_weights_tone2","weight_lifter_tone2","weight_lifting_tone2"],"🏋🏽":["person_lifting_weights_tone3","weight_lifter_tone3","weight_lifting_tone3"],"🏋🏾":["person_lifting_weights_tone4","weight_lifter_tone4","weight_lifting_tone4"],"🏋🏿":["person_lifting_weights_tone5","weight_lifter_tone5","weight_lifting_tone5"],"🏋🏻‍♂️":["man_lifting_weights_tone1"],"🏋🏼‍♂️":["man_lifting_weights_tone2"],"🏋🏽‍♂️":["man_lifting_weights_tone3"],"🏋🏾‍♂️":["man_lifting_weights_tone4"],"🏋🏿‍♂️":["man_lifting_weights_tone5"],"🏋🏻‍♀️":["woman_lifting_weights_tone1"],"🏋🏼‍♀️":["woman_lifting_weights_tone2"],"🏋🏽‍♀️":["woman_lifting_weights_tone3"],"🏋🏾‍♀️":["woman_lifting_weights_tone4"],"🏋🏿‍♀️":["woman_lifting_weights_tone5"],"🚴🏻":["bicyclist_tone1","biking_tone1","person_biking_tone1"],"🚴🏼":["bicyclist_tone2","biking_tone2","person_biking_tone2"],"🚴🏽":["bicyclist_tone3","biking_tone3","person_biking_tone3"],"🚴🏾":["bicyclist_tone4","biking_tone4","person_biking_tone4"],"🚴🏿":["bicyclist_tone5","biking_tone5","person_biking_tone5"],"🚴🏻‍♂️":["man_biking_tone1"],"🚴🏼‍♂️":["man_biking_tone2"],"🚴🏽‍♂️":["man_biking_tone3"],"🚴🏾‍♂️":["man_biking_tone4"],"🚴🏿‍♂️":["man_biking_tone5"],"🚴🏻‍♀️":["woman_biking_tone1"],"🚴🏼‍♀️":["woman_biking_tone2"],"🚴🏽‍♀️":["woman_biking_tone3"],"🚴🏾‍♀️":["woman_biking_tone4"],"🚴🏿‍♀️":["woman_biking_tone5"],"🚵🏻":["mountain_bicyclist_tone1","mountain_biking_tone1","person_mountain_biking_tone1"],"🚵🏼":["mountain_bicyclist_tone2","mountain_biking_tone2","person_mountain_biking_tone2"],"🚵🏽":["mountain_bicyclist_tone3","mountain_biking_tone3","person_mountain_biking_tone3"],"🚵🏾":["mountain_bicyclist_tone4","mountain_biking_tone4","person_mountain_biking_tone4"],"🚵🏿":["mountain_bicyclist_tone5","mountain_biking_tone5","person_mountain_biking_tone5"],"🚵🏻‍♂️":["man_mountain_biking_tone1"],"🚵🏼‍♂️":["man_mountain_biking_tone2"],"🚵🏽‍♂️":["man_mountain_biking_tone3"],"🚵🏾‍♂️":["man_mountain_biking_tone4"],"🚵🏿‍♂️":["man_mountain_biking_tone5"],"🚵🏻‍♀️":["woman_mountain_biking_tone1"],"🚵🏼‍♀️":["woman_mountain_biking_tone2"],"🚵🏽‍♀️":["woman_mountain_biking_tone3"],"🚵🏾‍♀️":["woman_mountain_biking_tone4"],"🚵🏿‍♀️":["woman_mountain_biking_tone5"],"🤸🏻":["cartwheeling_tone1","person_cartwheel_tone1"],"🤸🏼":["cartwheeling_tone2","person_cartwheel_tone2"],"🤸🏽":["cartwheeling_tone3","person_cartwheel_tone3"],"🤸🏾":["cartwheeling_tone4","person_cartwheel_tone4"],"🤸🏿":["cartwheeling_tone5","person_cartwheel_tone5"],"🤸🏻‍♂️":["man_cartwheeling_tone1"],"🤸🏼‍♂️":["man_cartwheeling_tone2"],"🤸🏽‍♂️":["man_cartwheeling_tone3"],"🤸🏾‍♂️":["man_cartwheeling_tone4"],"🤸🏿‍♂️":["man_cartwheeling_tone5"],"🤸🏻‍♀️":["woman_cartwheeling_tone1"],"🤸🏼‍♀️":["woman_cartwheeling_tone2"],"🤸🏽‍♀️":["woman_cartwheeling_tone3"],"🤸🏾‍♀️":["woman_cartwheeling_tone4"],"🤸🏿‍♀️":["woman_cartwheeling_tone5"],"🤽🏻":["person_playing_water_polo_tone1","water_polo_tone1"],"🤽🏼":["person_playing_water_polo_tone2","water_polo_tone2"],"🤽🏽":["person_playing_water_polo_tone3","water_polo_tone3"],"🤽🏾":["person_playing_water_polo_tone4","water_polo_tone4"],"🤽🏿":["person_playing_water_polo_tone5","water_polo_tone5"],"🤽🏻‍♂️":["man_playing_water_polo_tone1"],"🤽🏼‍♂️":["man_playing_water_polo_tone2"],"🤽🏽‍♂️":["man_playing_water_polo_tone3"],"🤽🏾‍♂️":["man_playing_water_polo_tone4"],"🤽🏿‍♂️":["man_playing_water_polo_tone5"],"🤽🏻‍♀️":["woman_playing_water_polo_tone1"],"🤽🏼‍♀️":["woman_playing_water_polo_tone2"],"🤽🏽‍♀️":["woman_playing_water_polo_tone3"],"🤽🏾‍♀️":["woman_playing_water_polo_tone4"],"🤽🏿‍♀️":["woman_playing_water_polo_tone5"],"🤾🏻":["handball_tone1","person_playing_handball_tone1"],"🤾🏼":["handball_tone2","person_playing_handball_tone2"],"🤾🏽":["handball_tone3","person_playing_handball_tone3"],"🤾🏾":["handball_tone4","person_playing_handball_tone4"],"🤾🏿":["handball_tone5","person_playing_handball_tone5"],"🤾🏻‍♂️":["man_playing_handball_tone1"],"🤾🏼‍♂️":["man_playing_handball_tone2"],"🤾🏽‍♂️":["man_playing_handball_tone3"],"🤾🏾‍♂️":["man_playing_handball_tone4"],"🤾🏿‍♂️":["man_playing_handball_tone5"],"🤾🏻‍♀️":["woman_playing_handball_tone1"],"🤾🏼‍♀️":["woman_playing_handball_tone2"],"🤾🏽‍♀️":["woman_playing_handball_tone3"],"🤾🏾‍♀️":["woman_playing_handball_tone4"],"🤾🏿‍♀️":["woman_playing_handball_tone5"],"🤹🏻":["juggler_tone1","juggling_tone1","person_juggling_tone1"],"🤹🏼":["juggler_tone2","juggling_tone2","person_juggling_tone2"],"🤹🏽":["juggler_tone3","juggling_tone3","person_juggling_tone3"],"🤹🏾":["juggler_tone4","juggling_tone4","person_juggling_tone4"],"🤹🏿":["juggler_tone5","juggling_tone5","person_juggling_tone5"],"🤹🏻‍♂️":["man_juggling_tone1"],"🤹🏼‍♂️":["man_juggling_tone2"],"🤹🏽‍♂️":["man_juggling_tone3"],"🤹🏾‍♂️":["man_juggling_tone4"],"🤹🏿‍♂️":["man_juggling_tone5"],"🤹🏻‍♀️":["woman_juggling_tone1"],"🤹🏼‍♀️":["woman_juggling_tone2"],"🤹🏽‍♀️":["woman_juggling_tone3"],"🤹🏾‍♀️":["woman_juggling_tone4"],"🤹🏿‍♀️":["woman_juggling_tone5"],"🧘🏻":["person_in_lotus_position_tone1"],"🧘🏼":["person_in_lotus_position_tone2"],"🧘🏽":["person_in_lotus_position_tone3"],"🧘🏾":["person_in_lotus_position_tone4"],"🧘🏿":["person_in_lotus_position_tone5"],"🧘🏻‍♂️":["man_in_lotus_position_tone1"],"🧘🏼‍♂️":["man_in_lotus_position_tone2"],"🧘🏽‍♂️":["man_in_lotus_position_tone3"],"🧘🏾‍♂️":["man_in_lotus_position_tone4"],"🧘🏿‍♂️":["man_in_lotus_position_tone5"],"🧘🏻‍♀️":["woman_in_lotus_position_tone1"],"🧘🏼‍♀️":["woman_in_lotus_position_tone2"],"🧘🏽‍♀️":["woman_in_lotus_position_tone3"],"🧘🏾‍♀️":["woman_in_lotus_position_tone4"],"🧘🏿‍♀️":["woman_in_lotus_position_tone5"],"🛀🏻":["bath_tone1","person_taking_bath_tone1"],"🛀🏼":["bath_tone2","person_taking_bath_tone2"],"🛀🏽":["bath_tone3","person_taking_bath_tone3"],"🛀🏾":["bath_tone4","person_taking_bath_tone4"],"🛀🏿":["bath_tone5","person_taking_bath_tone5"],"🛌🏻":["person_in_bed_tone1","sleeping_accommodation_tone1"],"🛌🏼":["person_in_bed_tone2","sleeping_accommodation_tone2"],"🛌🏽":["person_in_bed_tone3","sleeping_accommodation_tone3"],"🛌🏾":["person_in_bed_tone4","sleeping_accommodation_tone4"],"🛌🏿":["person_in_bed_tone5","sleeping_accommodation_tone5"],"🧑🏻‍🤝‍🧑🏻":["people_holding_hands_tone1"],"🧑🏻‍🤝‍🧑🏼":["people_holding_hands_tone1-2"],"🧑🏻‍🤝‍🧑🏽":["people_holding_hands_tone1-3"],"🧑🏻‍🤝‍🧑🏾":["people_holding_hands_tone1-4"],"🧑🏻‍🤝‍🧑🏿":["people_holding_hands_tone1-5"],"🧑🏼‍🤝‍🧑🏻":["people_holding_hands_tone2-1"],"🧑🏼‍🤝‍🧑🏼":["people_holding_hands_tone2"],"🧑🏼‍🤝‍🧑🏽":["people_holding_hands_tone2-3"],"🧑🏼‍🤝‍🧑🏾":["people_holding_hands_tone2-4"],"🧑🏼‍🤝‍🧑🏿":["people_holding_hands_tone2-5"],"🧑🏽‍🤝‍🧑🏻":["people_holding_hands_tone3-1"],"🧑🏽‍🤝‍🧑🏼":["people_holding_hands_tone3-2"],"🧑🏽‍🤝‍🧑🏽":["people_holding_hands_tone3"],"🧑🏽‍🤝‍🧑🏾":["people_holding_hands_tone3-4"],"🧑🏽‍🤝‍🧑🏿":["people_holding_hands_tone3-5"],"🧑🏾‍🤝‍🧑🏻":["people_holding_hands_tone4-1"],"🧑🏾‍🤝‍🧑🏼":["people_holding_hands_tone4-2"],"🧑🏾‍🤝‍🧑🏽":["people_holding_hands_tone4-3"],"🧑🏾‍🤝‍🧑🏾":["people_holding_hands_tone4"],"🧑🏾‍🤝‍🧑🏿":["people_holding_hands_tone4-5"],"🧑🏿‍🤝‍🧑🏻":["people_holding_hands_tone5-1"],"🧑🏿‍🤝‍🧑🏼":["people_holding_hands_tone5-2"],"🧑🏿‍🤝‍🧑🏽":["people_holding_hands_tone5-3"],"🧑🏿‍🤝‍🧑🏾":["people_holding_hands_tone5-4"],"🧑🏿‍🤝‍🧑🏿":["people_holding_hands_tone5"],"👭🏻":["two_women_holding_hands_tone1"],"👭🏼":["two_women_holding_hands_tone2"],"👭🏽":["two_women_holding_hands_tone3"],"👭🏾":["two_women_holding_hands_tone4"],"👭🏿":["two_women_holding_hands_tone5"],"👩🏻‍🤝‍👩🏼":["two_women_holding_hands_tone1-2"],"👩🏻‍🤝‍👩🏽":["two_women_holding_hands_tone1-3"],"👩🏻‍🤝‍👩🏾":["two_women_holding_hands_tone1-4"],"👩🏻‍🤝‍👩🏿":["two_women_holding_hands_tone1-5"],"👩🏼‍🤝‍👩🏻":["two_women_holding_hands_tone2-1"],"👩🏼‍🤝‍👩🏽":["two_women_holding_hands_tone2-3"],"👩🏼‍🤝‍👩🏾":["two_women_holding_hands_tone2-4"],"👩🏼‍🤝‍👩🏿":["two_women_holding_hands_tone2-5"],"👩🏽‍🤝‍👩🏻":["two_women_holding_hands_tone3-1"],"👩🏽‍🤝‍👩🏼":["two_women_holding_hands_tone3-2"],"👩🏽‍🤝‍👩🏾":["two_women_holding_hands_tone3-4"],"👩🏽‍🤝‍👩🏿":["two_women_holding_hands_tone3-5"],"👩🏾‍🤝‍👩🏻":["two_women_holding_hands_tone4-1"],"👩🏾‍🤝‍👩🏼":["two_women_holding_hands_tone4-2"],"👩🏾‍🤝‍👩🏽":["two_women_holding_hands_tone4-3"],"👩🏾‍🤝‍👩🏿":["two_women_holding_hands_tone4-5"],"👩🏿‍🤝‍👩🏻":["two_women_holding_hands_tone5-1"],"👩🏿‍🤝‍👩🏼":["two_women_holding_hands_tone5-2"],"👩🏿‍🤝‍👩🏽":["two_women_holding_hands_tone5-3"],"👩🏿‍🤝‍👩🏾":["two_women_holding_hands_tone5-4"],"👫🏻":["couple_tone1"],"👫🏼":["couple_tone2"],"👫🏽":["couple_tone3"],"👫🏾":["couple_tone4"],"👫🏿":["couple_tone5"],"👩🏻‍🤝‍👨🏼":["couple_tone1-2"],"👩🏻‍🤝‍👨🏽":["couple_tone1-3"],"👩🏻‍🤝‍👨🏾":["couple_tone1-4"],"👩🏻‍🤝‍👨🏿":["couple_tone1-5"],"👩🏼‍🤝‍👨🏻":["couple_tone2-1"],"👩🏼‍🤝‍👨🏽":["couple_tone2-3"],"👩🏼‍🤝‍👨🏾":["couple_tone2-4"],"👩🏼‍🤝‍👨🏿":["couple_tone2-5"],"👩🏽‍🤝‍👨🏻":["couple_tone3-1"],"👩🏽‍🤝‍👨🏼":["couple_tone3-2"],"👩🏽‍🤝‍👨🏾":["couple_tone3-4"],"👩🏽‍🤝‍👨🏿":["couple_tone3-5"],"👩🏾‍🤝‍👨🏻":["couple_tone4-1"],"👩🏾‍🤝‍👨🏼":["couple_tone4-2"],"👩🏾‍🤝‍👨🏽":["couple_tone4-3"],"👩🏾‍🤝‍👨🏿":["couple_tone4-5"],"👩🏿‍🤝‍👨🏻":["couple_tone5-1"],"👩🏿‍🤝‍👨🏼":["couple_tone5-2"],"👩🏿‍🤝‍👨🏽":["couple_tone5-3"],"👩🏿‍🤝‍👨🏾":["couple_tone5-4"],"👬🏻":["two_men_holding_hands_tone1"],"👬🏼":["two_men_holding_hands_tone2"],"👬🏽":["two_men_holding_hands_tone3"],"👬🏾":["two_men_holding_hands_tone4"],"👬🏿":["two_men_holding_hands_tone5"],"👨🏻‍🤝‍👨🏼":["two_men_holding_hands_tone1-2"],"👨🏻‍🤝‍👨🏽":["two_men_holding_hands_tone1-3"],"👨🏻‍🤝‍👨🏾":["two_men_holding_hands_tone1-4"],"👨🏻‍🤝‍👨🏿":["two_men_holding_hands_tone1-5"],"👨🏼‍🤝‍👨🏻":["two_men_holding_hands_tone2-1"],"👨🏼‍🤝‍👨🏽":["two_men_holding_hands_tone2-3"],"👨🏼‍🤝‍👨🏾":["two_men_holding_hands_tone2-4"],"👨🏼‍🤝‍👨🏿":["two_men_holding_hands_tone2-5"],"👨🏽‍🤝‍👨🏻":["two_men_holding_hands_tone3-1"],"👨🏽‍🤝‍👨🏼":["two_men_holding_hands_tone3-2"],"👨🏽‍🤝‍👨🏾":["two_men_holding_hands_tone3-4"],"👨🏽‍🤝‍👨🏿":["two_men_holding_hands_tone3-5"],"👨🏾‍🤝‍👨🏻":["two_men_holding_hands_tone4-1"],"👨🏾‍🤝‍👨🏼":["two_men_holding_hands_tone4-2"],"👨🏾‍🤝‍👨🏽":["two_men_holding_hands_tone4-3"],"👨🏾‍🤝‍👨🏿":["two_men_holding_hands_tone4-5"],"👨🏿‍🤝‍👨🏻":["two_men_holding_hands_tone5-1"],"👨🏿‍🤝‍👨🏼":["two_men_holding_hands_tone5-2"],"👨🏿‍🤝‍👨🏽":["two_men_holding_hands_tone5-3"],"👨🏿‍🤝‍👨🏾":["two_men_holding_hands_tone5-4"],"💏🏻":["couple_kiss_tone1","couplekiss_tone1"],"💏🏼":["couple_kiss_tone2","couplekiss_tone2"],"💏🏽":["couple_kiss_tone3","couplekiss_tone3"],"💏🏾":["couple_kiss_tone4","couplekiss_tone4"],"💏🏿":["couple_kiss_tone5","couplekiss_tone5"],"🧑🏻‍❤️‍💋‍🧑🏼":["couple_kiss_tone1-2","couplekiss_tone1-2"],"🧑🏻‍❤️‍💋‍🧑🏽":["couple_kiss_tone1-3","couplekiss_tone1-3"],"🧑🏻‍❤️‍💋‍🧑🏾":["couple_kiss_tone1-4","couplekiss_tone1-4"],"🧑🏻‍❤️‍💋‍🧑🏿":["couple_kiss_tone1-5","couplekiss_tone1-5"],"🧑🏼‍❤️‍💋‍🧑🏻":["couple_kiss_tone2-1","couplekiss_tone2-1"],"🧑🏼‍❤️‍💋‍🧑🏽":["couple_kiss_tone2-3","couplekiss_tone2-3"],"🧑🏼‍❤️‍💋‍🧑🏾":["couple_kiss_tone2-4","couplekiss_tone2-4"],"🧑🏼‍❤️‍💋‍🧑🏿":["couple_kiss_tone2-5","couplekiss_tone2-5"],"🧑🏽‍❤️‍💋‍🧑🏻":["couple_kiss_tone3-1","couplekiss_tone3-1"],"🧑🏽‍❤️‍💋‍🧑🏼":["couple_kiss_tone3-2","couplekiss_tone3-2"],"🧑🏽‍❤️‍💋‍🧑🏾":["couple_kiss_tone3-4","couplekiss_tone3-4"],"🧑🏽‍❤️‍💋‍🧑🏿":["couple_kiss_tone3-5","couplekiss_tone3-5"],"🧑🏾‍❤️‍💋‍🧑🏻":["couple_kiss_tone4-1","couplekiss_tone4-1"],"🧑🏾‍❤️‍💋‍🧑🏼":["couple_kiss_tone4-2","couplekiss_tone4-2"],"🧑🏾‍❤️‍💋‍🧑🏽":["couple_kiss_tone4-3","couplekiss_tone4-3"],"🧑🏾‍❤️‍💋‍🧑🏿":["couple_kiss_tone4-5","couplekiss_tone4-5"],"🧑🏿‍❤️‍💋‍🧑🏻":["couple_kiss_tone5-1","couplekiss_tone5-1"],"🧑🏿‍❤️‍💋‍🧑🏼":["couple_kiss_tone5-2","couplekiss_tone5-2"],"🧑🏿‍❤️‍💋‍🧑🏽":["couple_kiss_tone5-3","couplekiss_tone5-3"],"🧑🏿‍❤️‍💋‍🧑🏾":["couple_kiss_tone5-4","couplekiss_tone5-4"],"👩🏻‍❤️‍💋‍👨🏻":["kiss_mw_tone1","kiss_wm_tone1"],"👩🏻‍❤️‍💋‍👨🏼":["kiss_mw_tone1-2","kiss_wm_tone1-2"],"👩🏻‍❤️‍💋‍👨🏽":["kiss_mw_tone1-3","kiss_wm_tone1-3"],"👩🏻‍❤️‍💋‍👨🏾":["kiss_mw_tone1-4","kiss_wm_tone1-4"],"👩🏻‍❤️‍💋‍👨🏿":["kiss_mw_tone1-5","kiss_wm_tone1-5"],"👩🏼‍❤️‍💋‍👨🏻":["kiss_mw_tone2-1","kiss_wm_tone2-1"],"👩🏼‍❤️‍💋‍👨🏼":["kiss_mw_tone2","kiss_wm_tone2"],"👩🏼‍❤️‍💋‍👨🏽":["kiss_mw_tone2-3","kiss_wm_tone2-3"],"👩🏼‍❤️‍💋‍👨🏾":["kiss_mw_tone2-4","kiss_wm_tone2-4"],"👩🏼‍❤️‍💋‍👨🏿":["kiss_mw_tone2-5","kiss_wm_tone2-5"],"👩🏽‍❤️‍💋‍👨🏻":["kiss_mw_tone3-1","kiss_wm_tone3-1"],"👩🏽‍❤️‍💋‍👨🏼":["kiss_mw_tone3-2","kiss_wm_tone3-2"],"👩🏽‍❤️‍💋‍👨🏽":["kiss_mw_tone3","kiss_wm_tone3"],"👩🏽‍❤️‍💋‍👨🏾":["kiss_mw_tone3-4","kiss_wm_tone3-4"],"👩🏽‍❤️‍💋‍👨🏿":["kiss_mw_tone3-5","kiss_wm_tone3-5"],"👩🏾‍❤️‍💋‍👨🏻":["kiss_mw_tone4-1","kiss_wm_tone4-1"],"👩🏾‍❤️‍💋‍👨🏼":["kiss_mw_tone4-2","kiss_wm_tone4-2"],"👩🏾‍❤️‍💋‍👨🏽":["kiss_mw_tone4-3","kiss_wm_tone4-3"],"👩🏾‍❤️‍💋‍👨🏾":["kiss_mw_tone4","kiss_wm_tone4"],"👩🏾‍❤️‍💋‍👨🏿":["kiss_mw_tone4-5","kiss_wm_tone4-5"],"👩🏿‍❤️‍💋‍👨🏻":["kiss_mw_tone5-1","kiss_wm_tone5-1"],"👩🏿‍❤️‍💋‍👨🏼":["kiss_mw_tone5-2","kiss_wm_tone5-2"],"👩🏿‍❤️‍💋‍👨🏽":["kiss_mw_tone5-3","kiss_wm_tone5-3"],"👩🏿‍❤️‍💋‍👨🏾":["kiss_mw_tone5-4","kiss_wm_tone5-4"],"👩🏿‍❤️‍💋‍👨🏿":["kiss_mw_tone5","kiss_wm_tone5"],"👨🏻‍❤️‍💋‍👨🏻":["kiss_mm_tone1"],"👨🏻‍❤️‍💋‍👨🏼":["kiss_mm_tone1-2"],"👨🏻‍❤️‍💋‍👨🏽":["kiss_mm_tone1-3"],"👨🏻‍❤️‍💋‍👨🏾":["kiss_mm_tone1-4"],"👨🏻‍❤️‍💋‍👨🏿":["kiss_mm_tone1-5"],"👨🏼‍❤️‍💋‍👨🏻":["kiss_mm_tone2-1"],"👨🏼‍❤️‍💋‍👨🏼":["kiss_mm_tone2"],"👨🏼‍❤️‍💋‍👨🏽":["kiss_mm_tone2-3"],"👨🏼‍❤️‍💋‍👨🏾":["kiss_mm_tone2-4"],"👨🏼‍❤️‍💋‍👨🏿":["kiss_mm_tone2-5"],"👨🏽‍❤️‍💋‍👨🏻":["kiss_mm_tone3-1"],"👨🏽‍❤️‍💋‍👨🏼":["kiss_mm_tone3-2"],"👨🏽‍❤️‍💋‍👨🏽":["kiss_mm_tone3"],"👨🏽‍❤️‍💋‍👨🏾":["kiss_mm_tone3-4"],"👨🏽‍❤️‍💋‍👨🏿":["kiss_mm_tone3-5"],"👨🏾‍❤️‍💋‍👨🏻":["kiss_mm_tone4-1"],"👨🏾‍❤️‍💋‍👨🏼":["kiss_mm_tone4-2"],"👨🏾‍❤️‍💋‍👨🏽":["kiss_mm_tone4-3"],"👨🏾‍❤️‍💋‍👨🏾":["kiss_mm_tone4"],"👨🏾‍❤️‍💋‍👨🏿":["kiss_mm_tone4-5"],"👨🏿‍❤️‍💋‍👨🏻":["kiss_mm_tone5-1"],"👨🏿‍❤️‍💋‍👨🏼":["kiss_mm_tone5-2"],"👨🏿‍❤️‍💋‍👨🏽":["kiss_mm_tone5-3"],"👨🏿‍❤️‍💋‍👨🏾":["kiss_mm_tone5-4"],"👨🏿‍❤️‍💋‍👨🏿":["kiss_mm_tone5"],"👩🏻‍❤️‍💋‍👩🏻":["kiss_ww_tone1"],"👩🏻‍❤️‍💋‍👩🏼":["kiss_ww_tone1-2"],"👩🏻‍❤️‍💋‍👩🏽":["kiss_ww_tone1-3"],"👩🏻‍❤️‍💋‍👩🏾":["kiss_ww_tone1-4"],"👩🏻‍❤️‍💋‍👩🏿":["kiss_ww_tone1-5"],"👩🏼‍❤️‍💋‍👩🏻":["kiss_ww_tone2-1"],"👩🏼‍❤️‍💋‍👩🏼":["kiss_ww_tone2"],"👩🏼‍❤️‍💋‍👩🏽":["kiss_ww_tone2-3"],"👩🏼‍❤️‍💋‍👩🏾":["kiss_ww_tone2-4"],"👩🏼‍❤️‍💋‍👩🏿":["kiss_ww_tone2-5"],"👩🏽‍❤️‍💋‍👩🏻":["kiss_ww_tone3-1"],"👩🏽‍❤️‍💋‍👩🏼":["kiss_ww_tone3-2"],"👩🏽‍❤️‍💋‍👩🏽":["kiss_ww_tone3"],"👩🏽‍❤️‍💋‍👩🏾":["kiss_ww_tone3-4"],"👩🏽‍❤️‍💋‍👩🏿":["kiss_ww_tone3-5"],"👩🏾‍❤️‍💋‍👩🏻":["kiss_ww_tone4-1"],"👩🏾‍❤️‍💋‍👩🏼":["kiss_ww_tone4-2"],"👩🏾‍❤️‍💋‍👩🏽":["kiss_ww_tone4-3"],"👩🏾‍❤️‍💋‍👩🏾":["kiss_ww_tone4"],"👩🏾‍❤️‍💋‍👩🏿":["kiss_ww_tone4-5"],"👩🏿‍❤️‍💋‍👩🏻":["kiss_ww_tone5-1"],"👩🏿‍❤️‍💋‍👩🏼":["kiss_ww_tone5-2"],"👩🏿‍❤️‍💋‍👩🏽":["kiss_ww_tone5-3"],"👩🏿‍❤️‍💋‍👩🏾":["kiss_ww_tone5-4"],"👩🏿‍❤️‍💋‍👩🏿":["kiss_ww_tone5"],"💑🏻":["couple_with_heart_tone1"],"💑🏼":["couple_with_heart_tone2"],"💑🏽":["couple_with_heart_tone3"],"💑🏾":["couple_with_heart_tone4"],"💑🏿":["couple_with_heart_tone5"],"🧑🏻‍❤️‍🧑🏼":["couple_with_heart_tone1-2"],"🧑🏻‍❤️‍🧑🏽":["couple_with_heart_tone1-3"],"🧑🏻‍❤️‍🧑🏾":["couple_with_heart_tone1-4"],"🧑🏻‍❤️‍🧑🏿":["couple_with_heart_tone1-5"],"🧑🏼‍❤️‍🧑🏻":["couple_with_heart_tone2-1"],"🧑🏼‍❤️‍🧑🏽":["couple_with_heart_tone2-3"],"🧑🏼‍❤️‍🧑🏾":["couple_with_heart_tone2-4"],"🧑🏼‍❤️‍🧑🏿":["couple_with_heart_tone2-5"],"🧑🏽‍❤️‍🧑🏻":["couple_with_heart_tone3-1"],"🧑🏽‍❤️‍🧑🏼":["couple_with_heart_tone3-2"],"🧑🏽‍❤️‍🧑🏾":["couple_with_heart_tone3-4"],"🧑🏽‍❤️‍🧑🏿":["couple_with_heart_tone3-5"],"🧑🏾‍❤️‍🧑🏻":["couple_with_heart_tone4-1"],"🧑🏾‍❤️‍🧑🏼":["couple_with_heart_tone4-2"],"🧑🏾‍❤️‍🧑🏽":["couple_with_heart_tone4-3"],"🧑🏾‍❤️‍🧑🏿":["couple_with_heart_tone4-5"],"🧑🏿‍❤️‍🧑🏻":["couple_with_heart_tone5-1"],"🧑🏿‍❤️‍🧑🏼":["couple_with_heart_tone5-2"],"🧑🏿‍❤️‍🧑🏽":["couple_with_heart_tone5-3"],"🧑🏿‍❤️‍🧑🏾":["couple_with_heart_tone5-4"],"👩🏻‍❤️‍👨🏻":["couple_with_heart_mw_tone1","couple_with_heart_wm_tone1"],"👩🏻‍❤️‍👨🏼":["couple_with_heart_mw_tone1-2","couple_with_heart_wm_tone1-2"],"👩🏻‍❤️‍👨🏽":["couple_with_heart_mw_tone1-3","couple_with_heart_wm_tone1-3"],"👩🏻‍❤️‍👨🏾":["couple_with_heart_mw_tone1-4","couple_with_heart_wm_tone1-4"],"👩🏻‍❤️‍👨🏿":["couple_with_heart_mw_tone1-5","couple_with_heart_wm_tone1-5"],"👩🏼‍❤️‍👨🏻":["couple_with_heart_mw_tone2-1","couple_with_heart_wm_tone2-1"],"👩🏼‍❤️‍👨🏼":["couple_with_heart_mw_tone2","couple_with_heart_wm_tone2"],"👩🏼‍❤️‍👨🏽":["couple_with_heart_mw_tone2-3","couple_with_heart_wm_tone2-3"],"👩🏼‍❤️‍👨🏾":["couple_with_heart_mw_tone2-4","couple_with_heart_wm_tone2-4"],"👩🏼‍❤️‍👨🏿":["couple_with_heart_mw_tone2-5","couple_with_heart_wm_tone2-5"],"👩🏽‍❤️‍👨🏻":["couple_with_heart_mw_tone3-1","couple_with_heart_wm_tone3-1"],"👩🏽‍❤️‍👨🏼":["couple_with_heart_mw_tone3-2","couple_with_heart_wm_tone3-2"],"👩🏽‍❤️‍👨🏽":["couple_with_heart_mw_tone3","couple_with_heart_wm_tone3"],"👩🏽‍❤️‍👨🏾":["couple_with_heart_mw_tone3-4","couple_with_heart_wm_tone3-4"],"👩🏽‍❤️‍👨🏿":["couple_with_heart_mw_tone3-5","couple_with_heart_wm_tone3-5"],"👩🏾‍❤️‍👨🏻":["couple_with_heart_mw_tone4-1","couple_with_heart_wm_tone4-1"],"👩🏾‍❤️‍👨🏼":["couple_with_heart_mw_tone4-2","couple_with_heart_wm_tone4-2"],"👩🏾‍❤️‍👨🏽":["couple_with_heart_mw_tone4-3","couple_with_heart_wm_tone4-3"],"👩🏾‍❤️‍👨🏾":["couple_with_heart_mw_tone4","couple_with_heart_wm_tone4"],"👩🏾‍❤️‍👨🏿":["couple_with_heart_mw_tone4-5","couple_with_heart_wm_tone4-5"],"👩🏿‍❤️‍👨🏻":["couple_with_heart_mw_tone5-1","couple_with_heart_wm_tone5-1"],"👩🏿‍❤️‍👨🏼":["couple_with_heart_mw_tone5-2","couple_with_heart_wm_tone5-2"],"👩🏿‍❤️‍👨🏽":["couple_with_heart_mw_tone5-3","couple_with_heart_wm_tone5-3"],"👩🏿‍❤️‍👨🏾":["couple_with_heart_mw_tone5-4","couple_with_heart_wm_tone5-4"],"👩🏿‍❤️‍👨🏿":["couple_with_heart_mw_tone5","couple_with_heart_wm_tone5"],"👨🏻‍❤️‍👨🏻":["couple_with_heart_mm_tone1"],"👨🏻‍❤️‍👨🏼":["couple_with_heart_mm_tone1-2"],"👨🏻‍❤️‍👨🏽":["couple_with_heart_mm_tone1-3"],"👨🏻‍❤️‍👨🏾":["couple_with_heart_mm_tone1-4"],"👨🏻‍❤️‍👨🏿":["couple_with_heart_mm_tone1-5"],"👨🏼‍❤️‍👨🏻":["couple_with_heart_mm_tone2-1"],"👨🏼‍❤️‍👨🏼":["couple_with_heart_mm_tone2"],"👨🏼‍❤️‍👨🏽":["couple_with_heart_mm_tone2-3"],"👨🏼‍❤️‍👨🏾":["couple_with_heart_mm_tone2-4"],"👨🏼‍❤️‍👨🏿":["couple_with_heart_mm_tone2-5"],"👨🏽‍❤️‍👨🏻":["couple_with_heart_mm_tone3-1"],"👨🏽‍❤️‍👨🏼":["couple_with_heart_mm_tone3-2"],"👨🏽‍❤️‍👨🏽":["couple_with_heart_mm_tone3"],"👨🏽‍❤️‍👨🏾":["couple_with_heart_mm_tone3-4"],"👨🏽‍❤️‍👨🏿":["couple_with_heart_mm_tone3-5"],"👨🏾‍❤️‍👨🏻":["couple_with_heart_mm_tone4-1"],"👨🏾‍❤️‍👨🏼":["couple_with_heart_mm_tone4-2"],"👨🏾‍❤️‍👨🏽":["couple_with_heart_mm_tone4-3"],"👨🏾‍❤️‍👨🏾":["couple_with_heart_mm_tone4"],"👨🏾‍❤️‍👨🏿":["couple_with_heart_mm_tone4-5"],"👨🏿‍❤️‍👨🏻":["couple_with_heart_mm_tone5-1"],"👨🏿‍❤️‍👨🏼":["couple_with_heart_mm_tone5-2"],"👨🏿‍❤️‍👨🏽":["couple_with_heart_mm_tone5-3"],"👨🏿‍❤️‍👨🏾":["couple_with_heart_mm_tone5-4"],"👨🏿‍❤️‍👨🏿":["couple_with_heart_mm_tone5"],"👩🏻‍❤️‍👩🏻":["couple_with_heart_ww_tone1"],"👩🏻‍❤️‍👩🏼":["couple_with_heart_ww_tone1-2"],"👩🏻‍❤️‍👩🏽":["couple_with_heart_ww_tone1-3"],"👩🏻‍❤️‍👩🏾":["couple_with_heart_ww_tone1-4"],"👩🏻‍❤️‍👩🏿":["couple_with_heart_ww_tone1-5"],"👩🏼‍❤️‍👩🏻":["couple_with_heart_ww_tone2-1"],"👩🏼‍❤️‍👩🏼":["couple_with_heart_ww_tone2"],"👩🏼‍❤️‍👩🏽":["couple_with_heart_ww_tone2-3"],"👩🏼‍❤️‍👩🏾":["couple_with_heart_ww_tone2-4"],"👩🏼‍❤️‍👩🏿":["couple_with_heart_ww_tone2-5"],"👩🏽‍❤️‍👩🏻":["couple_with_heart_ww_tone3-1"],"👩🏽‍❤️‍👩🏼":["couple_with_heart_ww_tone3-2"],"👩🏽‍❤️‍👩🏽":["couple_with_heart_ww_tone3"],"👩🏽‍❤️‍👩🏾":["couple_with_heart_ww_tone3-4"],"👩🏽‍❤️‍👩🏿":["couple_with_heart_ww_tone3-5"],"👩🏾‍❤️‍👩🏻":["couple_with_heart_ww_tone4-1"],"👩🏾‍❤️‍👩🏼":["couple_with_heart_ww_tone4-2"],"👩🏾‍❤️‍👩🏽":["couple_with_heart_ww_tone4-3"],"👩🏾‍❤️‍👩🏾":["couple_with_heart_ww_tone4"],"👩🏾‍❤️‍👩🏿":["couple_with_heart_ww_tone4-5"],"👩🏿‍❤️‍👩🏻":["couple_with_heart_ww_tone5-1"],"👩🏿‍❤️‍👩🏼":["couple_with_heart_ww_tone5-2"],"👩🏿‍❤️‍👩🏽":["couple_with_heart_ww_tone5-3"],"👩🏿‍❤️‍👩🏾":["couple_with_heart_ww_tone5-4"],"👩🏿‍❤️‍👩🏿":["couple_with_heart_ww_tone5"]}');

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!******************!*\
  !*** ./forum.js ***!
  \******************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_forum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/forum */ "./src/forum/index.js");

})();

module.exports = __webpack_exports__;
/******/ })()
;
//# sourceMappingURL=forum.js.map