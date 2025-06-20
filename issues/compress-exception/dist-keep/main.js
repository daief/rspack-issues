var globalHandle;
(() => {
  var e = {
      162: function (e) {
        'use strict';
        var t = function (e) {
            var t, n, o;
            return (
              !!(t = e) &&
              'object' == typeof t &&
              ((n = e),
              '[object RegExp]' !== (o = Object.prototype.toString.call(n)) &&
                '[object Date]' !== o &&
                n.$$typeof !== r)
            );
          },
          r =
            'function' == typeof Symbol && Symbol.for
              ? Symbol.for('react.element')
              : 60103;
        function n(e, t) {
          return !1 !== t.clone && t.isMergeableObject(e)
            ? a(Array.isArray(e) ? [] : {}, e, t)
            : e;
        }
        function o(e, t, r) {
          return e.concat(t).map(function (e) {
            return n(e, r);
          });
        }
        function i(e) {
          return Object.keys(e).concat(
            Object.getOwnPropertySymbols
              ? Object.getOwnPropertySymbols(e).filter(function (t) {
                  return e.propertyIsEnumerable(t);
                })
              : []
          );
        }
        function a(e, r, s) {
          ((s = s || {}).arrayMerge = s.arrayMerge || o),
            (s.isMergeableObject = s.isMergeableObject || t);
          var l,
            c,
            u = Array.isArray(r);
          return u !== Array.isArray(e)
            ? n(r, s)
            : u
            ? s.arrayMerge(e, r, s)
            : ((c = {}),
              (l = s).isMergeableObject(e) &&
                i(e).forEach(function (t) {
                  c[t] = n(e[t], l);
                }),
              i(r).forEach(function (t) {
                l.isMergeableObject(r[t]) && e[t]
                  ? (c[t] = (function (e, t) {
                      if (!t.customMerge) return a;
                      var r = t.customMerge(e);
                      return 'function' == typeof r ? r : a;
                    })(t, l)(e[t], r[t], l))
                  : (c[t] = n(r[t], l));
              }),
              c);
        }
        (a.all = function (e, t) {
          if (!Array.isArray(e))
            throw Error('first argument should be an array');
          return e.reduce(function (e, r) {
            return a(e, r, t);
          }, {});
        }),
          (e.exports = a);
      },
      714: function (e) {
        'use strict';
        var t = function (e) {
            var t, n, o;
            return (
              !!(t = e) &&
              'object' == typeof t &&
              ((n = e),
              '[object RegExp]' !== (o = Object.prototype.toString.call(n)) &&
                '[object Date]' !== o &&
                n.$$typeof !== r)
            );
          },
          r =
            'function' == typeof Symbol && Symbol.for
              ? Symbol.for('react.element')
              : 60103;
        function n(e, t) {
          return !1 !== t.clone && t.isMergeableObject(e)
            ? s(Array.isArray(e) ? [] : {}, e, t)
            : e;
        }
        function o(e, t, r) {
          return e.concat(t).map(function (e) {
            return n(e, r);
          });
        }
        function i(e) {
          return Object.keys(e).concat(
            Object.getOwnPropertySymbols
              ? Object.getOwnPropertySymbols(e).filter(function (t) {
                  return Object.propertyIsEnumerable.call(e, t);
                })
              : []
          );
        }
        function a(e, t) {
          try {
            return t in e;
          } catch (e) {
            return !1;
          }
        }
        function s(e, r, l) {
          ((l = l || {}).arrayMerge = l.arrayMerge || o),
            (l.isMergeableObject = l.isMergeableObject || t),
            (l.cloneUnlessOtherwiseSpecified = n);
          var c,
            u,
            d = Array.isArray(r);
          return d !== Array.isArray(e)
            ? n(r, l)
            : d
            ? l.arrayMerge(e, r, l)
            : ((u = {}),
              (c = l).isMergeableObject(e) &&
                i(e).forEach(function (t) {
                  u[t] = n(e[t], c);
                }),
              i(r).forEach(function (t) {
                (a(e, t) &&
                  !(
                    Object.hasOwnProperty.call(e, t) &&
                    Object.propertyIsEnumerable.call(e, t)
                  )) ||
                  (a(e, t) && c.isMergeableObject(r[t])
                    ? (u[t] = (function (e, t) {
                        if (!t.customMerge) return s;
                        var r = t.customMerge(e);
                        return 'function' == typeof r ? r : s;
                      })(t, c)(e[t], r[t], c))
                    : (u[t] = n(r[t], c)));
              }),
              u);
        }
        (s.all = function (e, t) {
          if (!Array.isArray(e))
            throw Error('first argument should be an array');
          return e.reduce(function (e, r) {
            return s(e, r, t);
          }, {});
        }),
          (e.exports = s);
      },
      699: function (e) {
        'use strict';
        var t,
          r = 'object' == typeof Reflect ? Reflect : null,
          n =
            r && 'function' == typeof r.apply
              ? r.apply
              : function (e, t, r) {
                  return Function.prototype.apply.call(e, t, r);
                };
        t =
          r && 'function' == typeof r.ownKeys
            ? r.ownKeys
            : Object.getOwnPropertySymbols
            ? function (e) {
                return Object.getOwnPropertyNames(e).concat(
                  Object.getOwnPropertySymbols(e)
                );
              }
            : function (e) {
                return Object.getOwnPropertyNames(e);
              };
        var o =
          Number.isNaN ||
          function (e) {
            return e != e;
          };
        function i() {
          i.init.call(this);
        }
        (e.exports = i),
          (e.exports.once = function (e, t) {
            return new Promise(function (r, n) {
              var o, i, a;
              function s(r) {
                e.removeListener(t, l), n(r);
              }
              function l() {
                'function' == typeof e.removeListener &&
                  e.removeListener('error', s),
                  r([].slice.call(arguments));
              }
              f(e, t, l, { once: !0 }),
                'error' !== t &&
                  ((o = e),
                  (i = s),
                  (a = { once: !0 }),
                  'function' == typeof o.on && f(o, 'error', i, a));
            });
          }),
          (i.EventEmitter = i),
          (i.prototype._events = void 0),
          (i.prototype._eventsCount = 0),
          (i.prototype._maxListeners = void 0);
        var a = 10;
        function s(e) {
          if ('function' != typeof e)
            throw TypeError(
              'The "listener" argument must be of type Function. Received type ' +
                typeof e
            );
        }
        function l(e) {
          return void 0 === e._maxListeners
            ? i.defaultMaxListeners
            : e._maxListeners;
        }
        function c(e, t, r, n) {
          if (
            (s(r),
            void 0 === (i = e._events)
              ? ((i = e._events = Object.create(null)), (e._eventsCount = 0))
              : (void 0 !== i.newListener &&
                  (e.emit('newListener', t, r.listener ? r.listener : r),
                  (i = e._events)),
                (a = i[t])),
            void 0 === a)
          )
            (a = i[t] = r), ++e._eventsCount;
          else if (
            ('function' == typeof a
              ? (a = i[t] = n ? [r, a] : [a, r])
              : n
              ? a.unshift(r)
              : a.push(r),
            (o = l(e)) > 0 && a.length > o && !a.warned)
          ) {
            a.warned = !0;
            var o,
              i,
              a,
              c = Error(
                'Possible EventEmitter memory leak detected. ' +
                  a.length +
                  ' ' +
                  String(t) +
                  ' listeners added. Use emitter.setMaxListeners() to increase limit'
              );
            (c.name = 'MaxListenersExceededWarning'),
              (c.emitter = e),
              (c.type = t),
              (c.count = a.length),
              console && console.warn && console.warn(c);
          }
          return e;
        }
        function u() {
          if (!this.fired)
            return (this.target.removeListener(this.type, this.wrapFn),
            (this.fired = !0),
            0 == arguments.length)
              ? this.listener.call(this.target)
              : this.listener.apply(this.target, arguments);
        }
        function d(e, t, r) {
          var n = {
              fired: !1,
              wrapFn: void 0,
              target: e,
              type: t,
              listener: r,
            },
            o = u.bind(n);
          return (o.listener = r), (n.wrapFn = o), o;
        }
        function p(e, t, r) {
          var n = e._events;
          if (void 0 === n) return [];
          var o = n[t];
          return void 0 === o
            ? []
            : 'function' == typeof o
            ? r
              ? [o.listener || o]
              : [o]
            : r
            ? (function (e) {
                for (var t = Array(e.length), r = 0; r < t.length; ++r)
                  t[r] = e[r].listener || e[r];
                return t;
              })(o)
            : g(o, o.length);
        }
        function h(e) {
          var t = this._events;
          if (void 0 !== t) {
            var r = t[e];
            if ('function' == typeof r) return 1;
            if (void 0 !== r) return r.length;
          }
          return 0;
        }
        function g(e, t) {
          for (var r = Array(t), n = 0; n < t; ++n) r[n] = e[n];
          return r;
        }
        function f(e, t, r, n) {
          if ('function' == typeof e.on) n.once ? e.once(t, r) : e.on(t, r);
          else if ('function' == typeof e.addEventListener)
            e.addEventListener(t, function o(i) {
              n.once && e.removeEventListener(t, o), r(i);
            });
          else
            throw TypeError(
              'The "emitter" argument must be of type EventEmitter. Received type ' +
                typeof e
            );
        }
        Object.defineProperty(i, 'defaultMaxListeners', {
          enumerable: !0,
          get: function () {
            return a;
          },
          set: function (e) {
            if ('number' != typeof e || e < 0 || o(e))
              throw RangeError(
                'The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' +
                  e +
                  '.'
              );
            a = e;
          },
        }),
          (i.init = function () {
            (void 0 === this._events ||
              this._events === Object.getPrototypeOf(this)._events) &&
              ((this._events = Object.create(null)), (this._eventsCount = 0)),
              (this._maxListeners = this._maxListeners || void 0);
          }),
          (i.prototype.setMaxListeners = function (e) {
            if ('number' != typeof e || e < 0 || o(e))
              throw RangeError(
                'The value of "n" is out of range. It must be a non-negative number. Received ' +
                  e +
                  '.'
              );
            return (this._maxListeners = e), this;
          }),
          (i.prototype.getMaxListeners = function () {
            return l(this);
          }),
          (i.prototype.emit = function (e) {
            for (var t = [], r = 1; r < arguments.length; r++)
              t.push(arguments[r]);
            var o = 'error' === e,
              i = this._events;
            if (void 0 !== i) o = o && void 0 === i.error;
            else if (!o) return !1;
            if (o) {
              if ((t.length > 0 && (a = t[0]), a instanceof Error)) throw a;
              var a,
                s = Error(
                  'Unhandled error.' + (a ? ' (' + a.message + ')' : '')
                );
              throw ((s.context = a), s);
            }
            var l = i[e];
            if (void 0 === l) return !1;
            if ('function' == typeof l) n(l, this, t);
            else
              for (var c = l.length, u = g(l, c), r = 0; r < c; ++r)
                n(u[r], this, t);
            return !0;
          }),
          (i.prototype.addListener = function (e, t) {
            return c(this, e, t, !1);
          }),
          (i.prototype.on = i.prototype.addListener),
          (i.prototype.prependListener = function (e, t) {
            return c(this, e, t, !0);
          }),
          (i.prototype.once = function (e, t) {
            return s(t), this.on(e, d(this, e, t)), this;
          }),
          (i.prototype.prependOnceListener = function (e, t) {
            return s(t), this.prependListener(e, d(this, e, t)), this;
          }),
          (i.prototype.removeListener = function (e, t) {
            var r, n, o, i, a;
            if ((s(t), void 0 === (n = this._events) || void 0 === (r = n[e])))
              return this;
            if (r === t || r.listener === t)
              0 == --this._eventsCount
                ? (this._events = Object.create(null))
                : (delete n[e],
                  n.removeListener &&
                    this.emit('removeListener', e, r.listener || t));
            else if ('function' != typeof r) {
              for (o = -1, i = r.length - 1; i >= 0; i--)
                if (r[i] === t || r[i].listener === t) {
                  (a = r[i].listener), (o = i);
                  break;
                }
              if (o < 0) return this;
              0 === o
                ? r.shift()
                : (function (e, t) {
                    for (; t + 1 < e.length; t++) e[t] = e[t + 1];
                    e.pop();
                  })(r, o),
                1 === r.length && (n[e] = r[0]),
                void 0 !== n.removeListener &&
                  this.emit('removeListener', e, a || t);
            }
            return this;
          }),
          (i.prototype.off = i.prototype.removeListener),
          (i.prototype.removeAllListeners = function (e) {
            var t, r, n;
            if (void 0 === (r = this._events)) return this;
            if (void 0 === r.removeListener)
              return (
                0 == arguments.length
                  ? ((this._events = Object.create(null)),
                    (this._eventsCount = 0))
                  : void 0 !== r[e] &&
                    (0 == --this._eventsCount
                      ? (this._events = Object.create(null))
                      : delete r[e]),
                this
              );
            if (0 == arguments.length) {
              var o,
                i = Object.keys(r);
              for (n = 0; n < i.length; ++n)
                'removeListener' !== (o = i[n]) && this.removeAllListeners(o);
              return (
                this.removeAllListeners('removeListener'),
                (this._events = Object.create(null)),
                (this._eventsCount = 0),
                this
              );
            }
            if ('function' == typeof (t = r[e])) this.removeListener(e, t);
            else if (void 0 !== t)
              for (n = t.length - 1; n >= 0; n--) this.removeListener(e, t[n]);
            return this;
          }),
          (i.prototype.listeners = function (e) {
            return p(this, e, !0);
          }),
          (i.prototype.rawListeners = function (e) {
            return p(this, e, !1);
          }),
          (i.listenerCount = function (e, t) {
            return 'function' == typeof e.listenerCount
              ? e.listenerCount(t)
              : h.call(e, t);
          }),
          (i.prototype.listenerCount = h),
          (i.prototype.eventNames = function () {
            return this._eventsCount > 0 ? t(this._events) : [];
          });
      },
      831: function (e, t, r) {
        e.exports = r(772).Symbol;
      },
      343: function (e) {
        e.exports = function (e, t) {
          for (
            var r = -1, n = null == e ? 0 : e.length, o = Array(n);
            ++r < n;

          )
            o[r] = t(e[r], r, e);
          return o;
        };
      },
      207: function (e) {
        e.exports = function (e, t, r, n) {
          var o = -1,
            i = null == e ? 0 : e.length;
          for (n && i && (r = e[++o]); ++o < i; ) r = t(r, e[o], o, e);
          return r;
        };
      },
      981: function (e) {
        var t = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;
        e.exports = function (e) {
          return e.match(t) || [];
        };
      },
      366: function (e, t, r) {
        var n = r(831),
          o = r(107),
          i = r(157),
          a = n ? n.toStringTag : void 0;
        e.exports = function (e) {
          return null == e
            ? void 0 === e
              ? '[object Undefined]'
              : '[object Null]'
            : a && a in Object(e)
            ? o(e)
            : i(e);
        };
      },
      435: function (e) {
        e.exports = function (e) {
          return function (t) {
            return null == e ? void 0 : e[t];
          };
        };
      },
      54: function (e, t, r) {
        var n = r(831),
          o = r(343),
          i = r(152),
          a = r(795),
          s = 1 / 0,
          l = n ? n.prototype : void 0,
          c = l ? l.toString : void 0;
        e.exports = function e(t) {
          if ('string' == typeof t) return t;
          if (i(t)) return o(t, e) + '';
          if (a(t)) return c ? c.call(t) : '';
          var r = t + '';
          return '0' == r && 1 / t == -s ? '-0' : r;
        };
      },
      311: function (e, t, r) {
        var n = r(207),
          o = r(329),
          i = r(618),
          a = RegExp("['’]", 'g');
        e.exports = function (e) {
          return function (t) {
            return n(i(o(t).replace(a, '')), e, '');
          };
        };
      },
      655: function (e, t, r) {
        e.exports = r(435)({
          À: 'A',
          Á: 'A',
          Â: 'A',
          Ã: 'A',
          Ä: 'A',
          Å: 'A',
          à: 'a',
          á: 'a',
          â: 'a',
          ã: 'a',
          ä: 'a',
          å: 'a',
          Ç: 'C',
          ç: 'c',
          Ð: 'D',
          ð: 'd',
          È: 'E',
          É: 'E',
          Ê: 'E',
          Ë: 'E',
          è: 'e',
          é: 'e',
          ê: 'e',
          ë: 'e',
          Ì: 'I',
          Í: 'I',
          Î: 'I',
          Ï: 'I',
          ì: 'i',
          í: 'i',
          î: 'i',
          ï: 'i',
          Ñ: 'N',
          ñ: 'n',
          Ò: 'O',
          Ó: 'O',
          Ô: 'O',
          Õ: 'O',
          Ö: 'O',
          Ø: 'O',
          ò: 'o',
          ó: 'o',
          ô: 'o',
          õ: 'o',
          ö: 'o',
          ø: 'o',
          Ù: 'U',
          Ú: 'U',
          Û: 'U',
          Ü: 'U',
          ù: 'u',
          ú: 'u',
          û: 'u',
          ü: 'u',
          Ý: 'Y',
          ý: 'y',
          ÿ: 'y',
          Æ: 'Ae',
          æ: 'ae',
          Þ: 'Th',
          þ: 'th',
          ß: 'ss',
          Ā: 'A',
          Ă: 'A',
          Ą: 'A',
          ā: 'a',
          ă: 'a',
          ą: 'a',
          Ć: 'C',
          Ĉ: 'C',
          Ċ: 'C',
          Č: 'C',
          ć: 'c',
          ĉ: 'c',
          ċ: 'c',
          č: 'c',
          Ď: 'D',
          Đ: 'D',
          ď: 'd',
          đ: 'd',
          Ē: 'E',
          Ĕ: 'E',
          Ė: 'E',
          Ę: 'E',
          Ě: 'E',
          ē: 'e',
          ĕ: 'e',
          ė: 'e',
          ę: 'e',
          ě: 'e',
          Ĝ: 'G',
          Ğ: 'G',
          Ġ: 'G',
          Ģ: 'G',
          ĝ: 'g',
          ğ: 'g',
          ġ: 'g',
          ģ: 'g',
          Ĥ: 'H',
          Ħ: 'H',
          ĥ: 'h',
          ħ: 'h',
          Ĩ: 'I',
          Ī: 'I',
          Ĭ: 'I',
          Į: 'I',
          İ: 'I',
          ĩ: 'i',
          ī: 'i',
          ĭ: 'i',
          į: 'i',
          ı: 'i',
          Ĵ: 'J',
          ĵ: 'j',
          Ķ: 'K',
          ķ: 'k',
          ĸ: 'k',
          Ĺ: 'L',
          Ļ: 'L',
          Ľ: 'L',
          Ŀ: 'L',
          Ł: 'L',
          ĺ: 'l',
          ļ: 'l',
          ľ: 'l',
          ŀ: 'l',
          ł: 'l',
          Ń: 'N',
          Ņ: 'N',
          Ň: 'N',
          Ŋ: 'N',
          ń: 'n',
          ņ: 'n',
          ň: 'n',
          ŋ: 'n',
          Ō: 'O',
          Ŏ: 'O',
          Ő: 'O',
          ō: 'o',
          ŏ: 'o',
          ő: 'o',
          Ŕ: 'R',
          Ŗ: 'R',
          Ř: 'R',
          ŕ: 'r',
          ŗ: 'r',
          ř: 'r',
          Ś: 'S',
          Ŝ: 'S',
          Ş: 'S',
          Š: 'S',
          ś: 's',
          ŝ: 's',
          ş: 's',
          š: 's',
          Ţ: 'T',
          Ť: 'T',
          Ŧ: 'T',
          ţ: 't',
          ť: 't',
          ŧ: 't',
          Ũ: 'U',
          Ū: 'U',
          Ŭ: 'U',
          Ů: 'U',
          Ű: 'U',
          Ų: 'U',
          ũ: 'u',
          ū: 'u',
          ŭ: 'u',
          ů: 'u',
          ű: 'u',
          ų: 'u',
          Ŵ: 'W',
          ŵ: 'w',
          Ŷ: 'Y',
          ŷ: 'y',
          Ÿ: 'Y',
          Ź: 'Z',
          Ż: 'Z',
          Ž: 'Z',
          ź: 'z',
          ż: 'z',
          ž: 'z',
          Ĳ: 'IJ',
          ĳ: 'ij',
          Œ: 'Oe',
          œ: 'oe',
          ŉ: "'n",
          ſ: 's',
        });
      },
      242: function (e, t, r) {
        e.exports =
          'object' == typeof r.g && r.g && r.g.Object === Object && r.g;
      },
      107: function (e, t, r) {
        var n = r(831),
          o = Object.prototype,
          i = o.hasOwnProperty,
          a = o.toString,
          s = n ? n.toStringTag : void 0;
        e.exports = function (e) {
          var t = i.call(e, s),
            r = e[s];
          try {
            e[s] = void 0;
            var n = !0;
          } catch (e) {}
          var o = a.call(e);
          return n && (t ? (e[s] = r) : delete e[s]), o;
        };
      },
      559: function (e) {
        var t =
          /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;
        e.exports = function (e) {
          return t.test(e);
        };
      },
      157: function (e) {
        var t = Object.prototype.toString;
        e.exports = function (e) {
          return t.call(e);
        };
      },
      772: function (e, t, r) {
        var n = r(242),
          o = 'object' == typeof self && self && self.Object === Object && self;
        e.exports = n || o || Function('return this')();
      },
      304: function (e) {
        var t = '\ud800-\udfff',
          r = '\\u2700-\\u27bf',
          n = 'a-z\\xdf-\\xf6\\xf8-\\xff',
          o = 'A-Z\\xc0-\\xd6\\xd8-\\xde',
          i =
            '\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000',
          a = "['’]",
          s = '[' + i + ']',
          l = '[' + n + ']',
          c = '[^' + t + i + '\\d+' + r + n + o + ']',
          u = '(?:\ud83c[\udde6-\uddff]){2}',
          d = '[\ud800-\udbff][\udc00-\udfff]',
          p = '[' + o + ']',
          h = '(?:' + l + '|' + c + ')',
          g = '(?:' + p + '|' + c + ')',
          f = '(?:' + a + '(?:d|ll|m|re|s|t|ve))?',
          m = '(?:' + a + '(?:D|LL|M|RE|S|T|VE))?',
          v =
            '(?:[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|\ud83c[\udffb-\udfff])?',
          b = '[\\ufe0e\\ufe0f]?',
          x =
            '(?:\\u200d(?:' +
            ['[^' + t + ']', u, d].join('|') +
            ')' +
            b +
            v +
            ')*',
          y = '(?:' + ['[' + r + ']', u, d].join('|') + ')' + (b + v + x),
          w = RegExp(
            [
              p + '?' + l + '+' + f + '(?=' + [s, p, '$'].join('|') + ')',
              g + '+' + m + '(?=' + [s, p + h, '$'].join('|') + ')',
              p + '?' + h + '+' + f,
              p + '+' + m,
              '\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])',
              '\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])',
              '\\d+',
              y,
            ].join('|'),
            'g'
          );
        e.exports = function (e) {
          return e.match(w) || [];
        };
      },
      329: function (e, t, r) {
        var n = r(655),
          o = r(188),
          i = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,
          a = RegExp('[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]', 'g');
        e.exports = function (e) {
          return (e = o(e)) && e.replace(i, n).replace(a, '');
        };
      },
      152: function (e) {
        e.exports = Array.isArray;
      },
      125: function (e) {
        e.exports = function (e) {
          return null != e && 'object' == typeof e;
        };
      },
      795: function (e, t, r) {
        var n = r(366),
          o = r(125);
        e.exports = function (e) {
          return 'symbol' == typeof e || (o(e) && '[object Symbol]' == n(e));
        };
      },
      857: function (e, t, r) {
        e.exports = r(311)(function (e, t, r) {
          return e + (r ? '-' : '') + t.toLowerCase();
        });
      },
      188: function (e, t, r) {
        var n = r(54);
        e.exports = function (e) {
          return null == e ? '' : n(e);
        };
      },
      618: function (e, t, r) {
        var n = r(981),
          o = r(559),
          i = r(188),
          a = r(304);
        e.exports = function (e, t, r) {
          return ((e = i(e)), void 0 === (t = r ? void 0 : t))
            ? o(e)
              ? a(e)
              : n(e)
            : e.match(t) || [];
        };
      },
    },
    t = {};
  function r(n) {
    var o = t[n];
    if (void 0 !== o) return o.exports;
    var i = (t[n] = { exports: {} });
    return e[n](i, i.exports, r), i.exports;
  }
  (r.n = (e) => {
    var t = e && e.__esModule ? () => e.default : () => e;
    return r.d(t, { a: t }), t;
  }),
    (r.d = (e, t) => {
      for (var n in t)
        r.o(t, n) &&
          !r.o(e, n) &&
          Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
    }),
    (r.g = (() => {
      if ('object' == typeof globalThis) return globalThis;
      try {
        return this || Function('return this')();
      } catch (e) {
        if ('object' == typeof window) return window;
      }
    })()),
    (r.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
    (() => {
      'use strict';
      function e() {
        return (e = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r)
                  ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
              }
              return e;
            }).apply(null, arguments);
      }
      let t = React;
      var n = r.n(t);
      function o(e, t) {
        'function' == typeof e ? e(t) : e && (e.current = t);
      }
      function i(e, t) {
        return function (r) {
          o(e, r), o(t, r);
        };
      }
      function a(e, t) {
        if (null == e) return {};
        var r,
          n,
          o = (function (e, t) {
            if (null == e) return {};
            var r = {};
            for (var n in e)
              if ({}.hasOwnProperty.call(e, n)) {
                if (-1 !== t.indexOf(n)) continue;
                r[n] = e[n];
              }
            return r;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          for (n = 0; n < i.length; n++)
            (r = i[n]),
              -1 === t.indexOf(r) &&
                {}.propertyIsEnumerable.call(e, r) &&
                (o[r] = e[r]);
        }
        return o;
      }
      function s(e) {
        return (0, t.memo)((0, t.forwardRef)(e));
      }
      function l(e) {
        return (l =
          'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  'function' == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? 'symbol'
                  : typeof e;
              })(e);
      }
      var c = r(857),
        u = r.n(c),
        d = r(162),
        p = r.n(d);
      let h = {
        breakpointsMap: { xs: 0, sm: 1280, md: 1440, lg: 1680, xl: 1920 },
      };
      var g = e(
        {},
        {
          brand: '#1A7AF8',
          info: '#1A7AF8',
          danger: '#FF2B00',
          warning: '#FFAB00',
          safe: '#16D9A8',
          dark: '#000000',
          light: '#FFFFFF',
        },
        {
          brand1: '#0C6CEB',
          brand2: '#1A7AF8',
          brand3: '#338BFF',
          brand4: '#4D9AFF',
          lightBrand1: 'rgba(26,122,248,0.04)',
          lightBrand2: 'rgba(26,122,248,0.08)',
          lightBrand3: 'rgba(26,122,248,0.12)',
          lightBrand4: 'rgba(26,122,248,0.16)',
          info1: '#0C6CEB',
          info2: '#1A7AF8',
          info3: '#338BFF',
          info4: '#4D9AFF',
          lightInfo1: 'rgba(26,122,248,0.04)',
          lightInfo2: 'rgba(26,122,248,0.08)',
          lightInfo3: 'rgba(26,122,248,0.12)',
          lightInfo4: 'rgba(26,122,248,0.16)',
          danger1: '#E62600',
          danger2: '#FF2B00',
          danger3: '#FF5533',
          danger4: '#FF6A4D',
          lightDanger1: 'rgba(255,43,0,0.04)',
          lightDanger2: 'rgba(255,43,0,0.08)',
          lightDanger3: 'rgba(255,43,0,0.12)',
          lightDanger4: 'rgba(255,43,0,0.16)',
          safe1: '#0ACC9C',
          safe2: '#16D9A8',
          safe3: '#2EE6B7',
          safe4: '#49F2C8',
          lightSafe1: 'rgba(73,242,200,0.04)',
          lightSafe2: 'rgba(73,242,200,0.08)',
          lightSafe3: 'rgba(73,242,200,0.12)',
          lightSafe4: 'rgba(73,242,200,0.16)',
          warning1: '#F2A200',
          warning2: '#FFAB00',
          warning3: '#FFBC33',
          warning4: '#FFC44D',
          lightWarning1: 'rgba(255,171,0,0.04)',
          lightWarning2: 'rgba(255,171,0,0.08)',
          lightWarning3: 'rgba(255,171,0,0.12)',
          lightWarning4: 'rgba(255,171,0,0.16)',
          neutral1: { normal: '#313438', hover: '#181E25', click: '#000000' },
          neutral2: { normal: '#60656C', hover: '#484C51', click: '#313438' },
          neutral3: { normal: '#92989F', hover: '#787E87', click: '#60656C' },
          neutral4: { normal: '#AEB2B7', hover: '#92989F', click: '#787E87' },
          neutral5: { normal: '#C8CBD0', hover: '#AEB2B7', click: '#92989F' },
          neutral6: { normal: '#DADDE0', hover: '#D2D6DA', click: '#C8CBD0' },
          neutral7: { normal: '#EDEEF0', hover: '#DADDE0', click: '#D2D6DA' },
          neutral8: { normal: '#F3F4F6', hover: '#E9EAED', click: '#DADDE0' },
          neutral9: { normal: '#F7F8FA', hover: '#EDEEF0', click: '#E9EAED' },
          neutral10: { normal: '#FAFBFC', hover: '#F3F4F6', click: '#EDEEF0' },
          gradient: {
            normal: 'linear-gradient(90deg, #33ADFF 0%, #1A7AF8 100%)',
            hover: 'linear-gradient(90deg, #60BFFF 0%, #589EFA 100%)',
            click: 'linear-gradient(90deg, #31A6F5 0%, #1876EE 100%)',
          },
        }
      );
      let f = (function (e) {
        var t = {
            higher: e.light,
            block: e.light,
            selectedBlock: e.light,
            global: e.light,
            disabled: e.neutral10.normal,
            divider: e.neutral7.normal,
            mask: e.dark,
            scrollBar: e.neutral7.normal,
            scrollBarHover: e.neutral7.hover,
          },
          r = {
            normal: e.neutral7.normal,
            hover: e.neutral7.hover,
            error: e.danger,
          },
          n = {
            title: e.neutral1.normal,
            text: e.neutral2.normal,
            assistant: e.neutral3.normal,
            secondary: e.neutral4.normal,
            darktip: e.neutral5.normal,
            placeholder: e.neutral5.normal,
            disabled: e.neutral6.normal,
            highlight: e.brand2,
            highlightHover: e.brand3,
            highlightClick: e.brand1,
            inverse: e.light,
          };
        return {
          background: t,
          border: r,
          icon: {
            normal: e.neutral5.normal,
            hover: e.neutral5.hover,
            click: e.neutral5.click,
            inverse: e.light,
          },
          text: n,
          feature: {
            info: e.info,
            loading: e.info,
            error: e.danger,
            success: e.safe,
            warning: e.warning,
          },
        };
      })(g);
      var m = /^#[a-fA-F0-9]{6}$/,
        v = /^#[a-fA-F0-9]{3}$/,
        b = /^rgb\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*\)$/i,
        x =
          /^rgba\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*([-+]?[0-9]*[.]?[0-9]+)\s*\)$/i;
      let y = {
          transparentize: function (t, r) {
            var n = (function (e) {
                if (e.match(m))
                  return {
                    red: parseInt(''.concat(e[1]).concat(e[2]), 16),
                    green: parseInt(''.concat(e[3]).concat(e[4]), 16),
                    blue: parseInt(''.concat(e[5]).concat(e[6]), 16),
                  };
                if (e.match(v))
                  return {
                    red: parseInt(''.concat(e[1]).concat(e[1]), 16),
                    green: parseInt(''.concat(e[2]).concat(e[2]), 16),
                    blue: parseInt(''.concat(e[3]).concat(e[3]), 16),
                  };
                var t = b.exec(e);
                if (t)
                  return {
                    red: parseInt(''.concat(t[1]), 10),
                    green: parseInt(''.concat(t[2]), 10),
                    blue: parseInt(''.concat(t[3]), 10),
                  };
                var r = x.exec(e);
                if (r)
                  return {
                    red: parseInt(''.concat(r[1]), 10),
                    green: parseInt(''.concat(r[2]), 10),
                    blue: parseInt(''.concat(r[3]), 10),
                    alpha: parseFloat(r[4]),
                  };
                throw Error(''.concat(e, ' is not a color string.'));
              })(r),
              o = 'number' == typeof n.alpha ? n.alpha : 1,
              i = e({}, n, { alpha: o * t });
            return 'rgba('
              .concat(i.red, ',')
              .concat(i.green, ',')
              .concat(i.blue, ',')
              .concat(i.alpha, ')');
          },
        },
        w = {
          s1: 0.9,
          s2: 0.8,
          s3: 0.7,
          s4: 0.6,
          s5: 0.5,
          s6: 0.4,
          s7: 0.3,
          s8: 0.2,
          s9: 0.16,
          s10: 0.12,
          s11: 0.08,
          s12: 0.04,
        };
      var k = { mask: w.s3, maskButton: w.s5, disabled: w.s7 };
      let S = {
        s1: {
          normal: '0 0 24px 0 rgba(102,102,102,0.08)',
          hover: '0 0 24px 0 rgba(102,102,102,0.16)',
        },
        s2: {
          normal: '0 0 12px 0 rgba(102,102,102,0.12)',
          hover: '0 0 12px 0 rgba(102,102,102,0.20)',
        },
      };
      var z = { popper: S.s2 };
      let C = {
          borderRadius: {
            s1: '2px',
            s2: '4px',
            s3: '8px',
            s4: '50%',
            s5: '999rem',
          },
          width: { s: 160, m: 240, l: 320, xl: 480 },
          height: { s: 28, m: 32, l: 40, xl: 48 },
        },
        I = {
          s1: 2,
          s2: 4,
          s3: 6,
          s4: 8,
          s5: 12,
          s6: 16,
          s7: 20,
          s8: 24,
          s9: 28,
          s10: 32,
          s11: 40,
          s12: 48,
          s13: 56,
          s14: 64,
          s15: 72,
          s16: 80,
          s17: 96,
          s18: 102,
          s19: 128,
          s20: 144,
          s21: 160,
        },
        L = {
          textIcon: {
            s1: I.s2,
            s2: I.s2,
            s3: I.s3,
            s4: I.s3,
            s5: I.s3,
            s6: I.s4,
            s7: I.s5,
            s8: I.s6,
          },
        };
      var R = {
          easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
          easeOut: 'cubic-bezier(0.0, 0, 0.2, 1)',
          easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
          sharp: 'cubic-bezier(0.4, 0, 0.6, 1)',
        },
        B = { fast: 150, normal: 300, slow: 450 };
      let E = { easing: R, duration: B };
      var O = {
        easing: { enter: R.easeOut, leave: R.easeIn, status: R.easeInOut },
        duration: { popper: B.normal, dialog: B.slow, status: B.fast },
      };
      let P = {
          global: {
            fontFamily:
              "Penrose, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei', 'Helvetica Neue', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'",
            fontSize: 12,
            lineHeight: 1.5,
          },
          fontWeight: { regular: 400, medium: 500, semibold: 600 },
          fontSize: {
            s1: 12,
            s2: 14,
            s3: 16,
            s4: 18,
            s5: 20,
            s6: 24,
            s7: 32,
            s8: 48,
          },
          lineHeight: {
            s1: 16,
            s2: 20,
            s3: 22,
            s4: 24,
            s5: 28,
            s6: 32,
            s7: 44,
            s8: 66,
          },
        },
        T = { s1: 10, s2: 100, s3: 1e3, s4: 1010, s5: 1030 };
      var M = { fixed: T.s2, dialog: T.s3, toast: T.s4, popper: T.s5 },
        F = function (e, t) {
          return t;
        },
        _ = (function (t) {
          var r,
            n,
            o,
            i,
            a,
            s,
            l,
            c,
            u,
            d,
            m,
            v,
            b,
            x,
            R,
            B,
            _,
            j,
            H,
            A,
            W,
            N,
            D,
            q,
            G,
            U,
            $,
            V,
            Z,
            Y,
            Q,
            K,
            J,
            X,
            ee,
            et,
            er,
            en,
            eo,
            ei,
            ea,
            es,
            el,
            ec,
            eu,
            ed,
            ep,
            eh,
            eg,
            ef,
            em,
            ev,
            eb,
            ex,
            ey,
            ew,
            ek,
            eS,
            ez,
            eC,
            eI,
            eL,
            eR,
            eB,
            eE,
            eO,
            eP,
            eT,
            eM,
            eF,
            e_,
            ej,
            eH,
            eA,
            eW,
            eN,
            eD,
            eq,
            eG,
            eU,
            e$,
            eV,
            eZ,
            eY,
            eQ,
            eK,
            eJ,
            eX,
            e0,
            e1,
            e2,
            e4,
            e3,
            e6,
            e8,
            e5,
            e7,
            e9,
            te,
            tt,
            tr,
            tn,
            to,
            ti,
            ta,
            ts,
            tl,
            tc,
            tu,
            td,
            tp,
            th,
            tg,
            tf,
            tm,
            tv,
            tb,
            tx,
            ty,
            tw,
            tk,
            tS,
            tz,
            tC,
            tI,
            tL,
            tR,
            tB,
            tE,
            tO,
            tP,
            tT,
            tM,
            tF,
            t_,
            tj,
            tH,
            tA,
            tW,
            tN,
            tD,
            tq,
            tG,
            tU,
            t$,
            tV,
            tZ,
            tY,
            tQ,
            tK,
            tJ,
            tX,
            t0,
            t1,
            t2,
            t4,
            t3,
            t6,
            t8,
            t5,
            t7,
            t9,
            re,
            rt,
            rr,
            rn,
            ro,
            ri,
            ra,
            rs,
            rl,
            rc,
            ru,
            rd,
            rp,
            rh,
            rg,
            rf,
            rm,
            rv,
            rb,
            rx,
            ry,
            rw,
            rk,
            rS,
            rz,
            rC,
            rI,
            rL,
            rR,
            rB,
            rE,
            rO,
            rP,
            rT,
            rM,
            rF,
            r_,
            rj,
            rH,
            rA,
            rW,
            rN,
            rD,
            rq,
            rG,
            rU,
            r$,
            rV,
            rZ,
            rY,
            rQ,
            rK,
            rJ,
            rX,
            r0,
            r1,
            r2,
            r4,
            r3,
            r6,
            r8,
            r5,
            r7,
            r9,
            ne,
            nt,
            nr,
            nn,
            no,
            ni,
            na,
            ns,
            nl,
            nc,
            nu,
            nd,
            np,
            nh,
            ng,
            nf,
            nm,
            nv,
            nb,
            nx,
            ny,
            nw,
            nk,
            nS,
            nz,
            nC,
            nI,
            nL,
            nR,
            nB,
            nE,
            nO,
            nP,
            nT,
            nM,
            nF,
            n_,
            nj,
            nH,
            nA,
            nW,
            nN,
            nD,
            nq,
            nG = t.prefix || 'muya-light',
            nU = {
              themeName: t.themeName || 'muya-theme-light',
              prefix: nG,
              breakpoints: p()({ spec: h }, t.breakpoints || {}, {
                arrayMerge: F,
              }),
              colors: p()({ spec: g, pattern: f }, t.colors || {}, {
                arrayMerge: F,
              }),
              opacity: p()({ spec: w, pattern: k }, t.opacity || {}, {
                arrayMerge: F,
              }),
              shadows: p()({ spec: S, pattern: z }, t.shadows || {}, {
                arrayMerge: F,
              }),
              size: p()({ spec: C }, t.size || {}, { arrayMerge: F }),
              spacing: p()({ spec: I, pattern: L }, t.spacing || {}, {
                arrayMerge: F,
              }),
              transition: p()({ spec: E, pattern: O }, t.transition || {}, {
                arrayMerge: F,
              }),
              typography: p()({ spec: P }, t.typography || {}, {
                arrayMerge: F,
              }),
              zIndex: p()({ spec: T, pattern: M }, t.zIndex || {}, {
                arrayMerge: F,
              }),
            },
            n$ = {
              Alert:
                ((N = nU.spacing),
                (D = nU.colors),
                (q = nU.typography),
                (G = N.spec),
                (U = D.spec),
                (V = ($ = q.spec).fontSize),
                (Z = $.lineHeight),
                {
                  borderRadius: '0px',
                  defaultShowIcon: !0,
                  padding: {
                    s: [6, 16, 6, 16],
                    m: [8, 16, 8, 16],
                    l: [10, 20, 10, 20],
                    xl: [14, 20, 14, 20],
                  },
                  hasTitleAndDescPaddingVertical: {
                    s: 12,
                    m: 16,
                    l: 20,
                    xl: 20,
                  },
                  hasIconPaddingLeft: { s: 34, m: 38, l: 44, xl: 44 },
                  hasIconAndDescPaddingLeft: { s: 34, m: 38, l: 44, xl: 44 },
                  hasCloseIconPaddingRight: { s: 52, m: 52, l: 54, xl: 54 },
                  typeBg: {
                    success: U.lightSafe2,
                    info: U.lightBrand2,
                    warning: U.lightWarning2,
                    error: U.lightDanger2,
                  },
                  typeBorder: {
                    success: 'none',
                    info: 'none',
                    warning: 'none',
                    error: 'none',
                  },
                  title: {
                    textFine: !0,
                    hasDescTextFine: !1,
                    fontSize: { s: V.s1, m: V.s1, l: V.s2, xl: V.s2 },
                    lineHeight: { s: Z.s1, m: Z.s1, l: Z.s2, xl: Z.s2 },
                    hasDescFontSize: V.s2,
                    hasDescLineHeight: Z.s2,
                    hasDescMarginBottom: G.s2,
                  },
                  desc: { fontSize: V.s1, lineHeight: Z.s1 },
                  icon: {
                    size: { s: V.s2, m: V.s2, l: V.s3, xl: V.s3 },
                    hasTitleAndDescSize: {
                      s: V.s2,
                      m: V.s2,
                      l: V.s3,
                      xl: V.s3,
                    },
                    left: { s: 12, m: 16, l: 20, xl: 20 },
                    top: { s: 7, m: 9, l: 12, xl: 16 },
                    bgColor: {
                      error: U.light,
                      warning: U.light,
                      success: U.light,
                      info: '',
                    },
                    hasTitleAndDescLeft: { s: 12, m: 16, l: 20, xl: 20 },
                    hasTitleAndDescTop: { s: 15, m: 19, l: 22, xl: 22 },
                    iconMarginRight: G.s4,
                  },
                  hasTitleAndDescCloseIconTop: { s: 8, m: 10, l: 13, xl: 13 },
                  closeIconTop: { s: 7, m: 10, l: 13, xl: 17 },
                  closeIconRight: { s: 12, m: 16, l: 20, xl: 20 },
                  closeIconButtonSize: { s: 's', m: 's', l: 'm', xl: 'm' },
                }),
              Badge:
                ((Y = nU.typography),
                (Q = nU.colors),
                (K = nU.zIndex),
                (J = nU.spacing),
                (X = Q.spec),
                (ee = J.spec),
                (et = Y.spec),
                {
                  offset: ee.s4,
                  padding: { xl: ee.s3, l: ee.s3, m: ee.s3, s: ee.s2 },
                  height: {
                    dot: { xl: 10, l: 10, m: 10, s: 6 },
                    text: { xl: 16, l: 16, m: 16, s: 12 },
                  },
                  backgroundColor: { stroke: X.light, fill: X.danger2 },
                  borderColor: X.danger2,
                  color: X.light,
                  fontWeight: et.fontWeight.semibold,
                  fontSize: { xl: 12, l: 12, m: 12, s: 10 },
                  zIndex: K.spec.s1,
                }),
              BaseMenu:
                ((er = nU.typography),
                (en = nU.colors),
                (eo = nU.size),
                (ei = nU.spacing),
                (ea = nU.opacity),
                (el = (es = en.pattern).background),
                (ec = es.text),
                (eu = en.spec),
                (ep = (ed = er.spec).fontSize),
                (eh = ed.fontWeight),
                (ef = (eg = eo.spec).borderRadius),
                (em = eg.height),
                (ev = ei.spec),
                (eb = ei.pattern.textIcon),
                {
                  item: {
                    height: e({}, em),
                    background: {
                      normal: eu.light,
                      hover: y.transparentize(ea.spec.s11, eu.neutral3.normal),
                      clicked: eu.lightBrand2,
                      selected: eu.lightBrand2,
                      selectedHover: eu.lightBrand3,
                      selectedClicked: eu.lightBrand4,
                      disabled: eu.light,
                    },
                    color: {
                      normal: eu.neutral2.normal,
                      hover: eu.neutral2.normal,
                      clicked: eu.brand,
                      selected: eu.brand,
                      selectedHover: eu.brand,
                      selectedClicked: eu.brand,
                      disabled: eu.neutral6.normal,
                    },
                    fontWeight: {
                      normal: eh.regular,
                      selected: eh.medium,
                      disabled: eh.regular,
                    },
                    paddingHorizontal: 12,
                    fontSize: { s: ep.s1, m: ep.s1, l: ep.s2, xl: ep.s2 },
                  },
                  iconMarginLeft: 2 * eb.s3,
                  iconColor: 'inherit',
                  group: {
                    color: ec.secondary,
                    background: el.block,
                    fontSize: ep.s1,
                    height: 24,
                    paddingLeft: { s: ev.s5, m: ev.s5, l: ev.s6, xl: ev.s6 },
                    itemIndent: ev.s5,
                    marginTop: ev.s2,
                  },
                  divider: {
                    paddingLeft: { s: ev.s5, m: ev.s5, l: ev.s6, xl: ev.s6 },
                    paddingRight: ev.s5,
                    paddingVertical: 5.5,
                  },
                  wrapper: {
                    paddingRight: ev.s2,
                    paddingVertical: ev.s2,
                    borderRadius: ef.s1,
                    innerPaddingRight: ev.s2,
                  },
                }),
              Breadcrumbs: {
                currentFontWeight: 'lighter',
                separatorColor: nU.colors.spec.neutral6.normal,
                separatorSize: { xl: 12, l: 10, m: 8, s: 8 },
                separatorHeadWidth: 25,
                separatorWidth: 20,
              },
              Button:
                ((ex = nU.typography),
                (ey = nU.colors),
                (ew = nU.size),
                (ek = nU.spacing),
                (eS = nU.opacity),
                (ez = ew.spec.borderRadius),
                (eC = ey.spec),
                (eI = ey.pattern),
                (eR = (eL = ex.spec).fontSize),
                (eB = eL.fontWeight),
                (eE = eL.lineHeight),
                (eO = {
                  primary: {
                    normal: eC.brand2,
                    click: eC.brand1,
                    hover: eC.brand3,
                  },
                  strong: e({}, eC.neutral1),
                  normal: e({}, eC.neutral2),
                  secondary: e({}, eC.neutral3),
                  weak: e({}, eC.neutral4),
                  danger: {
                    normal: eC.danger2,
                    click: eC.danger1,
                    hover: eC.danger3,
                  },
                  success: {
                    normal: eC.safe2,
                    click: eC.safe1,
                    hover: eC.safe3,
                  },
                  warning: {
                    normal: eC.warning2,
                    click: eC.warning1,
                    hover: eC.warning3,
                  },
                  mask: { normal: eC.light, click: eC.light, hover: eC.light },
                }),
                (eP = {
                  primary: {
                    normal: eC.lightBrand2,
                    click: eC.lightBrand2,
                    hover: eC.lightBrand1,
                  },
                  strong: {
                    normal: y.transparentize(eS.spec.s10, eC.neutral3.normal),
                    click: y.transparentize(eS.spec.s11, eC.neutral1.normal),
                    hover: y.transparentize(eS.spec.s12, eC.neutral1.normal),
                  },
                  normal: {
                    normal: y.transparentize(eS.spec.s10, eC.neutral3.normal),
                    click: y.transparentize(eS.spec.s11, eC.neutral2.normal),
                    hover: y.transparentize(eS.spec.s12, eC.neutral2.normal),
                  },
                  secondary: {
                    normal: y.transparentize(eS.spec.s10, eC.neutral4.normal),
                    click: y.transparentize(eS.spec.s11, eC.neutral3.normal),
                    hover: y.transparentize(eS.spec.s12, eC.neutral3.normal),
                  },
                  weak: {
                    normal: y.transparentize(eS.spec.s10, eC.neutral4.normal),
                    click: y.transparentize(eS.spec.s11, eC.neutral4.normal),
                    hover: y.transparentize(eS.spec.s12, eC.neutral4.normal),
                  },
                  danger: {
                    normal: eC.lightDanger2,
                    click: eC.lightDanger2,
                    hover: eC.lightDanger1,
                  },
                  success: {
                    normal: eC.lightSafe2,
                    click: eC.lightSafe2,
                    hover: eC.lightSafe1,
                  },
                  warning: {
                    normal: eC.lightWarning2,
                    click: eC.lightWarning2,
                    hover: eC.lightWarning1,
                  },
                  mask: {
                    normal: eC.light,
                    click: y.transparentize(eS.spec.s11, eC.light),
                    hover: y.transparentize(eS.spec.s12, eC.light),
                  },
                }),
                (eT = {
                  primary: eO.primary.normal,
                  strong: eC.neutral4.normal,
                  normal: eC.neutral5.normal,
                  secondary: eC.neutral5.normal,
                  weak: eC.neutral5.normal,
                  danger: eO.danger.normal,
                  success: eO.success.normal,
                  warning: eO.warning.normal,
                  mask: eO.mask.normal,
                }),
                {
                  padding: { xl: 24, l: 20, m: 14, s: 12 },
                  siblingSpacing: { xl: 12, l: 10, m: 8, s: 8 },
                  weakLevels: [eC.neutral5, eC.neutral6],
                  borderRadius: {
                    normal: ez.s1,
                    group: '0px',
                    circle: ez.s4,
                    round: ez.s5,
                  },
                  typeColor: eO,
                  lightTypeColor: eP,
                  inlineButtonTypeColor: e({}, eO, {
                    mask: {
                      normal: eC.light,
                      click: y.transparentize(eS.spec.s3, eC.light),
                      hover: y.transparentize(eS.spec.s1, eC.light),
                    },
                  }),
                  typeBgImage: {},
                  typeBgColor: {
                    mask: {
                      normal: y.transparentize(eS.spec.s5, eC.dark),
                      hover: y.transparentize(eS.spec.s4, eC.dark),
                      click: y.transparentize(eS.spec.s3, eC.dark),
                    },
                  },
                  defaultColor: eI.text.inverse,
                  borderColor: eT,
                  textColor: {},
                  maskColor: eI.background.mask,
                  lightMaskColor: eI.text.text,
                  fontSize: { xl: eR.s4, l: eR.s3, m: eR.s2, s: eR.s1 },
                  lineHeight: { xl: eE.s4, l: eE.s3, m: eE.s2, s: eE.s1 },
                  sidePadding: ek.spec.s3,
                  statusOpacity: {
                    normal: eS.spec.s10,
                    hover: eS.spec.s9,
                    click: eS.spec.s8,
                  },
                  maskStatusOpacity: { hover: eS.spec.s1, click: eS.spec.s3 },
                  zIndexOrder: {
                    weak: 1,
                    secondary: 2,
                    normal: 3,
                    strong: 4,
                    primary: 5,
                    success: 6,
                    warning: 7,
                    danger: 8,
                    mask: 9,
                  },
                  hoverZIndex: 10,
                  selectedZIndex: 11,
                  plainIsLight: !1,
                  loadingPosition: 'suffix',
                  defaultShape: 'normal',
                  plainColorHighlight: !1,
                  fontWeight: {
                    bold: eB.semibold,
                    normal: eB.medium,
                    lighter: eB.regular,
                  },
                }),
              Calendar:
                ((eM = nU.spacing),
                (eF = nU.colors),
                (e_ = nU.size),
                (ej = nU.typography),
                (eH = nU.opacity),
                (eA = eF.spec),
                (eW = eF.pattern),
                {
                  defaultWidth: 240,
                  pagerArrowTipDelay: 2e3,
                  pagerButton: { margin: '0 12px' },
                  head: { height: 36, defaultDecadeTitleLevel: 6 },
                  footer: { height: 36, optionMargin: '0 4px' },
                  panel: {
                    containerMonthPadding: '12px 0 8px 0',
                    containerOtherPadding: '24px 0 0 0',
                    monthPadding: '0 8px',
                    otherMargin: '0 -12px',
                    monthItemMarginBottom: 4,
                    otherItemMarginBottom: 24,
                  },
                  headButton: { padding: '0 2px' },
                  item: {
                    height: 24,
                    gutterInMonth: (eN = eM.spec).s2,
                    gutterOther: eN.s8,
                    fontSize: ej.spec.fontSize.s1,
                    borderRadius: e_.spec.borderRadius.s1,
                    background: {
                      normal: eA.light,
                      hover: y.transparentize(
                        eH.spec.s11,
                        eF.spec.neutral3.normal
                      ),
                      range: eA.lightBrand1,
                      rangeClick: eA.lightBrand2,
                      click: eA.lightBrand4,
                      selected: eA.brand,
                      selectedClick: eA.brand1,
                    },
                    color: {
                      normal: eW.text.title,
                      disabled: eW.text.disabled,
                      outside: eW.text.secondary,
                      current: eW.text.highlight,
                      selected: eW.text.inverse,
                    },
                  },
                  dateTimeCalendar: {
                    footerHeight: 40,
                    timeHeadMarginBottom: 4,
                  },
                }),
              Card:
                ((eD = nU.spacing),
                (eq = nU.colors),
                {
                  borderRadius: 4,
                  boxShadow: {
                    normal: (eG = nU.shadows).spec.s2.normal,
                    hover: eG.spec.s2.hover,
                  },
                  defaultMetaTitleLevel: 4,
                  border: '1px solid '.concat(eq.pattern.border.normal),
                  extra: { topPadding: eD.spec.s5, rightPadding: eD.spec.s5 },
                  checkbox: {
                    topPadding: eD.spec.s3,
                    rightPadding: eD.spec.s3,
                    checkedBorder: '1px solid '.concat(eq.spec.brand1),
                    normalBorder: '1px solid transparent',
                  },
                  header: {
                    padding: '16px 20px',
                    bottomBorder: '1px solid '.concat(eq.pattern.border.normal),
                  },
                  content: { padding: '16px 20px' },
                  actions: {
                    padding: '16px 20px',
                    topBorder: '1px solid '.concat(eq.pattern.border.normal),
                  },
                  skeleton: { height: '180px', width: '100%' },
                }),
              Carousel:
                ((eU = nU.colors),
                (e$ = nU.opacity),
                (eV = nU.size),
                (eZ = nU.spacing),
                {
                  indicator: { bottom: 16, padding: '0 20px' },
                  PagerButton: {
                    bgColor: (eY = eU.spec).dark,
                    iconColor: eY.light,
                    width: { xl: 30, l: 24, m: 20, s: 20 },
                    height: { xl: 48, l: 40, m: 32, s: 32 },
                    iconSize: { xl: 18, l: 16, m: 14, s: 14 },
                    borderRadius: eV.spec.borderRadius.s1,
                    opacity: e$.spec.s7,
                    hoverOpacity: e$.spec.s5,
                  },
                  IndexIndicator: {
                    borderWidth: 4,
                    selectedSize: 60,
                    size: 32,
                    color: eY.light,
                    gutter: eZ.spec.s4,
                    opacity: e$.spec.s7,
                    hoverOpacity: e$.spec.s5,
                    borderRadius: '0px',
                  },
                }),
              Cascader:
                ((eQ = nU.colors),
                (eK = nU.size),
                (eJ = nU.spacing),
                (eX = nU.typography),
                (e0 = nU.opacity),
                (e1 = eQ.pattern.background),
                (e2 = eQ.spec),
                (e3 = (e4 = eK.spec).height),
                (e6 = e4.borderRadius),
                (e8 = eJ.spec),
                (e5 = eX.spec.fontWeight),
                {
                  overscan: 2,
                  notFoundPanelHeight: 120,
                  menuMarginVertical: e8.s2,
                  menuMarginRight: e8.s2,
                  borderRadius: e6.s1,
                  offset: { s: 4, m: 4, l: 6, xl: 6 },
                  maxHeight: {
                    s: 6.5 * e3.s,
                    m: 6.5 * e3.m,
                    l: 6.5 * e3.l,
                    xl: 6.5 * e3.xl,
                  },
                  background: e1.higher,
                  item: {
                    marginRight: e8.s2,
                    paddingHorizontal: e8.s5,
                    height: e({}, e3),
                    fontLevel: { s: 's1', m: 's1', l: 's2', xl: 's2' },
                    iconMargin: '0 4px 0 12px',
                    background: {
                      normal: e2.light,
                      hover: y.transparentize(e0.spec.s11, e2.neutral3.normal),
                      clicked: e2.lightBrand2,
                      selected: e2.lightBrand2,
                      selectedHover: e2.lightBrand3,
                      selectedClicked: e2.lightBrand4,
                      disabled: e2.light,
                    },
                    color: {
                      normal: e2.neutral2.normal,
                      hover: e2.neutral2.normal,
                      clicked: e2.brand,
                      selected: e2.brand,
                      selectedHover: e2.brand,
                      selectedClicked: e2.brand,
                      disabled: e2.neutral6.normal,
                    },
                    fontWeight: {
                      normal: e5.regular,
                      selected: e5.medium,
                      disabled: e5.regular,
                    },
                    checkboxMarginRight: 8,
                    multipleSelectFontWeight: e5.medium,
                  },
                }),
              Checkbox:
                ((e7 = nU.typography),
                (e9 = nU.colors),
                (te = nU.spacing),
                (tt = nU.size),
                (tr = e9.spec),
                (tn = te.spec),
                (to = te.pattern),
                (ti = e7.spec.fontSize),
                {
                  marginRightInGroup: tn.s4,
                  textIconSpacing: {
                    xl: to.textIcon.s3,
                    l: to.textIcon.s2,
                    m: to.textIcon.s2,
                    s: to.textIcon.s1,
                  },
                  iconFontSize: { xl: ti.s5, l: ti.s4, m: ti.s3, s: ti.s2 },
                  fontLevel: { xl: 's3', l: 's2', m: 's1', s: 's1' },
                  labelColor: tr.neutral1.normal,
                  iconBgColor: tr.light,
                  inner: {
                    border: '1px solid',
                    borderRadius: tt.spec.borderRadius.s2,
                    icon: {
                      border: '2px solid #fff',
                      indeterminate: {
                        width: { xl: 10, l: 10, m: 8, s: 8 },
                        height: { xl: 2, l: 2, m: 2, s: 2 },
                      },
                    },
                  },
                  iconColor: {
                    unChecked: {
                      normal: tr.neutral5.normal,
                      hover: tr.brand,
                      click: tr.brand1,
                    },
                    checked: {
                      normal: tr.brand,
                      hover: tr.brand3,
                      click: tr.brand1,
                    },
                    indeterminate: {
                      normal: tr.brand,
                      hover: tr.brand3,
                      click: tr.brand1,
                    },
                  },
                }),
              DatePicker: { panelBorderRadius: nU.size.spec.borderRadius.s1 },
              Dialog:
                ((ta = nU.shadows),
                (ts = nU.size),
                (tl = nU.opacity),
                (tc = nU.colors),
                (tu = nU.spacing),
                {
                  shadow: ta.spec.s1.normal,
                  maskBgColor: y.transparentize(tl.pattern.mask, tc.spec.dark),
                  containerBorderRadius: ts.spec.borderRadius.s2,
                  top: 40,
                  size: {
                    s: { width: 404, height: 152 },
                    m: { width: 404, height: 192 },
                    l: { width: 480, height: 360 },
                    xl: { width: 480, height: 360 },
                  },
                  fullWidth: { widthPrecent: 70, marginTopAndBottom: 32 },
                  alertCloseIconTop: {
                    s: '33px',
                    m: '36px',
                    l: '36px',
                    xl: '36px',
                  },
                  actions: {
                    paddingForAlert: '20px 24px 24px 24px',
                    fullWidthPadding: '14px 28px 14px 28px',
                    complexPadding: '14px 24px 14px 24px',
                    childrenSpacing: 8,
                  },
                  title: {
                    paddingHorizontal: 24,
                    paddingVertical: 18,
                    fullWidthPadding: '28px 28px 18px 28px',
                    defaultTitleLevel: 4,
                    borderBottom: 'none',
                    closeIconRight: tu.spec.s6,
                    closeIconTop: tu.spec.s6,
                  },
                  content: {
                    paddingTop: '20px',
                    paddingBottom: '20px',
                    paddingHorizontal: '24px',
                    fullWidthPaddingHorizontal: '28px',
                    paddingWithType: '24px 24px 20px 50px',
                    typeIconBgColor: {
                      error: tc.spec.light,
                      warning: tc.spec.light,
                      success: tc.spec.light,
                      info: '',
                    },
                    iconMarginLeft: 10,
                    iconMarginTop: 0,
                    titleMarginBottom: 8,
                    defaultTitleLevel: 4,
                    borderColor: y.transparentize(0.7, tc.spec.neutral7.normal),
                  },
                }),
              Dropdown:
                (nU.colors,
                {
                  offset: {
                    s: (td = nU.spacing.spec).s2,
                    m: td.s3,
                    l: td.s3,
                    xl: td.s3,
                  },
                }),
              Form:
                ((tp = nU.spacing),
                (th = nU.size),
                (tg = nU.colors),
                (tf = th.spec.height),
                (tm = tp.spec),
                (tv = tg.pattern),
                {
                  defaultLabelWidth: 80,
                  requiredTip: '*',
                  requiredTipMarginRight: tm.s2,
                  requiredFontLevel: 's2',
                  labelPaddingRight: {
                    s: tm.s7,
                    m: tm.s7,
                    l: tm.s9,
                    xl: tm.s10,
                  },
                  labelHeight: e({}, tf),
                  labelColor: tv.text.text,
                  instantEditingLabelColor: tv.text.text,
                  topLabelPaddingBottom: {
                    s: tm.s3,
                    m: tm.s3,
                    l: tm.s4,
                    xl: tm.s4,
                  },
                  inlineFormItemMarginRight: { s: 44, m: 48, l: 52, xl: 58 },
                  errorMinHeight: { s: tm.s8, m: tm.s9, l: tm.s10, xl: tm.s11 },
                  labelFontSizeLevel: { s: 's1', m: 's1', l: 's2', xl: 's2' },
                  errorPaddingTop: tm.s2,
                  errorPaddingBottom: tm.s2,
                }),
              Guide:
                ((tb = nU.spacing),
                (tx = nU.colors),
                (ty = nU.opacity),
                (tw = nU.zIndex),
                (tk = nU.typography),
                {
                  titleLevel: 5,
                  subTitleMarginTop: (tS = tb.spec).s1,
                  closeIcon: { right: 10, top: 10, fontSize: 12 },
                  toolTips: {
                    minWidth: 200,
                    padding: ''.concat(tS.s6, 'px'),
                    space: 20,
                    boxShadow: '',
                    borderRadius: 4,
                  },
                  nextButton: { marginTop: tS.s5 },
                  mask: {
                    opacity: 1,
                    color: y.transparentize(ty.pattern.mask, tx.spec.dark),
                  },
                  informIcon: {
                    marginRight: tS.s4,
                    color: tx.pattern.feature.info,
                    fontSize: tk.spec.fontSize.s2,
                  },
                  skip: { bottom: -32 },
                  popoverCard: {
                    bgColor: tx.spec.brand1,
                    titleColor: tx.spec.light,
                    padding: '10px 16px',
                    hasDescPadding: '16px',
                    hasIconPaddingLeft: 38,
                    hasCloseIconPaddingRight: 46,
                    zIndex: tw.pattern.dialog - 1,
                    titleLevel: 5,
                    iconColor: tx.pattern.icon,
                    iconFontSize: tk.spec.fontSize.s2,
                    iconLeft: 16,
                    iconTop: 13,
                    iconHasDescTop: 19,
                    descColor: tx.spec.light,
                    descOpacity: ty.spec.s2,
                    descFontSize: tk.spec.fontSize.s1,
                    descLineHeight: tk.spec.lineHeight.s1,
                    descMarginTop: tS.s1,
                    closeIconColor: tx.spec.light,
                    closeIconOpacity: ty.spec.s5,
                    closeIconFontSize: tk.spec.fontSize.s1,
                    closeIconTop: 14,
                    closeIconRight: 18,
                    closeIconhasDescTop: 10,
                    closeIconhasDescRight: 8,
                    actionsMarginTop: 16,
                  },
                }),
              ImgCropper:
                ((tz = nU.colors),
                (tC = nU.size.spec.borderRadius),
                {
                  defaultSize: [210, 210],
                  cropperMarginBottom: 24,
                  maskColor: y.transparentize(0.5, tz.spec.dark),
                  borderColor: tz.spec.light,
                  borderRadius: { normal: '0px', circle: tC.s4, round: tC.s5 },
                  rotatePaddingLeft: 16,
                  actionPaddingLeft: 16,
                  sliderPadding: 16,
                }),
              ImgPreview:
                ((tI = nU.spacing),
                (tL = nU.typography),
                (tR = nU.colors),
                (tB = nU.shadows),
                (tE = nU.opacity),
                (tO = tI.spec),
                (tP = tL.spec.fontSize),
                {
                  spinColor: tR.spec.light,
                  responsiveWidth: [900, 1128, 1360, 1540],
                  imgWrapper: { marginTop: tO.s9, scrollBarSize: tO.s2 },
                  imgPagination: {
                    paddingVertical: tO.s9,
                    height: 120,
                    itemWidth: 64,
                    itemHeight: 64,
                    itemMrginRight: tO.s5,
                    itemOpacity: tE.spec.s3,
                    itemActiveBorderSize: 3,
                    buttonWidth: 30,
                    buttonHeight: 48,
                    buttonFontSize: tP.s4,
                    buttonOffset: -42,
                    borderActiveColor: tR.spec.brand,
                  },
                  pageButton: {
                    fontSize: 40,
                    color: tR.spec.light,
                    boxShadow: tB.spec.s2,
                    opacity: tE.spec.s5,
                    spacing: tO.s7,
                  },
                  closeIcon: {
                    top: tO.s9,
                    right: tO.s9,
                    fontSize: tP.s6,
                    color: tR.pattern.icon.normal,
                  },
                  imgActions: { bottom: tO.s9 },
                }),
              Input:
                ((tT = nU.size),
                (tM = nU.spacing),
                (tF = nU.colors),
                (tj = (t_ = tT.spec).borderRadius),
                (tH = t_.width),
                (tA = t_.height),
                {
                  inputPadding: {
                    s: (tW = tM.spec).s5,
                    m: tW.s5,
                    l: tW.s6,
                    xl: tW.s6,
                  },
                  inputAddonNodeMargin: {
                    s: tW.s2,
                    m: tW.s2,
                    l: tW.s4,
                    xl: tW.s4,
                  },
                  color: tF.pattern.text.title,
                  bgColor: tF.pattern.background.global,
                  focusShadow: 'none',
                  errorFocusShadow: 'none',
                  inputHeight: e({}, tA),
                  inputWidth: e({}, tH),
                  rangeInputWidth: { s: 320, m: 320, l: 480, xl: 480 },
                  textareaPadding: {
                    s: [10, 12, 10, 12],
                    m: [10, 12, 10, 12],
                    l: [14, 16, 14, 16],
                    xl: [14, 16, 14, 16],
                  },
                  autosizeTextareaPadding: {
                    s: [5, tW.s5, 5, tW.s5],
                    m: [7, tW.s5, 7, tW.s5],
                    l: [9, tW.s6, 9, tW.s6],
                    xl: [13, tW.s6, 13, tW.s6],
                  },
                  textareaLimitMarginBottom: { s: 34, m: 34, l: 42, xl: 42 },
                  textareaLimitPosition: {
                    s: { right: 12, bottom: 10 },
                    m: { right: 12, bottom: 10 },
                    l: { right: 14, bottom: 16 },
                    xl: { right: 16, bottom: 14 },
                  },
                  textareaHeight: { s: 92, m: 92, l: 116, xl: 116 },
                  textareaWidth: { s: 320, m: 320, l: 320, xl: 320 },
                  borderRadius: { s: tj.s1, m: tj.s1, l: tj.s1, xl: tj.s1 },
                  borderColor: {
                    normal: tF.spec.neutral6.normal,
                    hover: tF.spec.neutral6.hover,
                    focused: tF.spec.brand,
                  },
                  fontLevel: { s: 's1', m: 's1', l: 's2', xl: 's2' },
                  selectionBackground: tF.spec.lightBrand4,
                  inputTag: { margin: '0 4px 4px 0', outerPadding: 4 },
                  tagsInput: {
                    wrapperPadding: '4px 4px 0 4px',
                    contentPaddingRight: { s: 24, m: 24, l: 32, xl: 32 },
                  },
                }),
              InputNumber:
                ((tN = nU.size),
                {
                  arrowBorderColor: (tD = nU.colors).spec.neutral7.click,
                  arrowClickBgColor: tD.spec.neutral9.normal,
                  arrowSuffixNodeWrapperBorder: '1px solid '.concat(
                    tD.spec.neutral7.click
                  ),
                  arrowIconSize: { s: 8, m: 8, l: 10, xl: 10 },
                  plusIconSize: { s: 12, m: 12, l: 12, xl: 12 },
                  width: e({}, tN.spec.width),
                  plusMinusWidth: { s: 109, m: 109, l: 109, xl: 109 },
                  iconMargin: '2px 0',
                  rangeInputNumberWidth: { s: 320, m: 320, l: 480, xl: 480 },
                }),
              Menu:
                ((tq = nU.spacing),
                (tG = nU.size),
                (tU = nU.colors),
                (t$ = nU.typography),
                (tV = nU.opacity),
                (tY = (tZ = t$.spec).fontSize),
                (tQ = tZ.fontWeight),
                (tK = tU.spec),
                (tJ = tU.pattern),
                (tX = tq.spec),
                {
                  wrapper: {
                    inlineCollapsedWidth: tY.s3 + 2 * tX.s7,
                    borderRadius: tG.spec.borderRadius.s2,
                    background: tJ.background.higher,
                  },
                  item: {
                    indent: tX.s11,
                    indentWithIcon: 44,
                    marginHorizontal: 0,
                    marginVertical: tX.s1,
                    paddingHorizontal: tX.s7,
                    verticalPaddingHorizontal: tX.s5,
                    horizontalPaddingHorizontal: tX.s6,
                    background: {
                      normal: 'transparent',
                      hover: y.transparentize(tV.spec.s11, tK.neutral3.normal),
                      clicked: tK.lightBrand2,
                      selected: tK.lightBrand2,
                      selectedHover: tK.lightBrand3,
                      selectedClicked: tK.lightBrand4,
                      disabled: 'transparent',
                    },
                    color: {
                      normal: tK.neutral2.normal,
                      hover: tK.neutral2.normal,
                      clicked: tK.brand,
                      selected: tK.brand,
                      selectedHover: tK.brand,
                      selectedClicked: tK.brand,
                      disabled: tK.neutral6.normal,
                    },
                    fontWeight: {
                      normal: tQ.regular,
                      selected: tQ.medium,
                      disabled: tQ.regular,
                    },
                    horizontalBackground: {
                      normal: 'transparent',
                      hover: tK.light,
                      clicked: tK.light,
                      selected: tK.light,
                      selectedHover: tK.light,
                      selectedClicked: tK.light,
                      disabled: 'transparent',
                    },
                    horizontalColor: {
                      normal: tK.neutral2.normal,
                      hover: tK.brand,
                      clicked: tK.brand,
                      selected: tK.brand,
                      selectedHover: tK.brand,
                      selectedClicked: tK.brand,
                      disabled: tK.neutral6.normal,
                    },
                    inlineBorderRadius: {
                      s: 'unset',
                      m: 'unset',
                      l: 'unset',
                      xl: 'unset',
                    },
                  },
                  tooltip: { offset: tX.s3, size: 'l' },
                  background: 'transparent',
                  height: 36,
                  verticalHeight: { s: 32, m: 32, l: 40, xl: 40 },
                  verticalBorderRadius: tG.spec.borderRadius.s1,
                  fontLevel: 's2',
                  verticalFontLevel: { s: 's1', m: 's1', l: 's2', xl: 's2' },
                  iconMarginRight: tX.s4,
                  iconColor: tJ.icon.normal,
                  highlightIconColor: tJ.text.highlight,
                  verticalIconFontLevel: {
                    s: 's2',
                    m: 's2',
                    l: 's3',
                    xl: 's3',
                  },
                  iconFontLevel: 's3',
                  group: {
                    indent: tX.s7,
                    indentWithIcon: 24,
                    fontLevel: 's1',
                    height: 34,
                    verticalHeight: 24,
                    vericalMarginTop: tX.s2,
                    paddingHorizontal: tX.s7,
                    paddingTop: tX.s6,
                    itemPaddingInGroup: tX.s6 - tX.s4,
                    verticalpaddingTop: tX.s4,
                    background: 'transparent',
                    color: tJ.text.assistant,
                  },
                  subMenu: {
                    indent: tX.s7,
                    indentWithIcon: 24,
                    offset: tX.s2,
                    offsetHasScrollBar: 18,
                    verticalMinWidth: 124,
                    verticalPaddingVertical: tX.s2,
                    preventOverflowPadding: 100,
                    scrollBarPadding: tX.s2,
                    background: {
                      normal: 'transparent',
                      hover: y.transparentize(tV.spec.s11, tK.neutral3.normal),
                      clicked: y.transparentize(
                        tV.spec.s11,
                        tK.neutral3.normal
                      ),
                      selected: 'transparent',
                      selectedHover: tK.lightBrand3,
                      selectedClicked: tK.lightBrand4,
                      disabled: 'transparent',
                    },
                    color: {
                      normal: tK.neutral2.normal,
                      hover: tK.neutral2.normal,
                      clicked: tK.neutral2.normal,
                      selected: tK.brand,
                      selectedHover: tK.brand,
                      selectedClicked: tK.brand,
                      disabled: tK.neutral6.normal,
                    },
                    fontWeight: {
                      normal: tQ.regular,
                      selected: tQ.medium,
                      disabled: tQ.regular,
                    },
                    horizontalBackground: {
                      normal: 'transparent',
                      hover: tK.light,
                      clicked: tK.light,
                      selected: tK.light,
                      selectedHover: tK.light,
                      selectedClicked: tK.light,
                      disabled: 'transparent',
                    },
                    horizontalColor: {
                      normal: tK.neutral2.normal,
                      hover: tK.brand,
                      clicked: tK.brand,
                      selected: tK.brand,
                      selectedHover: tK.brand,
                      selectedClicked: tK.brand,
                      disabled: tK.neutral6.normal,
                    },
                  },
                  divider: {
                    inlinePaddingHorizontal: tX.s7,
                    paddingHorizontal: tX.s5,
                    paddingVertical: 5.5,
                  },
                }),
              Notification:
                ((t0 = nU.typography),
                (t1 = nU.shadows),
                (t2 = nU.transition),
                (t4 = nU.size),
                (t3 = nU.colors),
                (t8 = (t6 = t0.spec).fontSize),
                (t5 = t6.lineHeight),
                {
                  containerCenterTop: 96,
                  containerTop: 24,
                  containerBottom: 8,
                  toast: {
                    itemMarginBottom: 16,
                    minHeight: 60,
                    contentStyle: {
                      minWidth: 294,
                      maxWidth: 488,
                      padding: '10px 12px 10px 0',
                      fontSize: t8.s2,
                      lineHeight: t5.s2,
                    },
                    extraPadding: 36,
                    lineMaxChar: 30,
                    iconStyle: {
                      size: 16,
                      padding: '12px 8px 0 12px',
                      width: 36,
                    },
                    shadow: t1.spec.s1.normal,
                    easing: t2.spec.easing.sharp,
                    queueSetting: { interval: 3e3, timeout: 300, max: 3 },
                  },
                  notification: {
                    titleLevel: 5,
                    itemMarginBottom: 16,
                    titleMarginBottom: 2,
                    borderRadius: t4.spec.borderRadius.s2,
                    width: 388,
                    minHeight: 96,
                    lineMaxChar: 20,
                    actionsStyle: { padding: '16px 20px' },
                    contentStyle: {
                      lineHeight: t5.s1,
                      plainPadding: '16px 42px 16px 20px',
                      iconPadding: '16px 44px 16px 38px',
                    },
                    iconStyle: { size: 14, top: 18, left: 16 },
                    closeStyle: { size: 12, top: 12, right: 12 },
                    queueSetting: { interval: 4e3, timeout: 300, max: 1e3 },
                    shadow: t1.spec.s1.normal,
                    easing: t2.spec.easing.sharp,
                  },
                  iconBgColor: {
                    info: '',
                    error: t3.spec.light,
                    success: t3.spec.light,
                    warning: t3.spec.light,
                    loading: '',
                  },
                }),
              Pagination:
                ((t7 = nU.colors),
                (t9 = nU.typography),
                (re = nU.size),
                (rt = t7.spec),
                (rr = t7.pattern),
                (rn = re.spec.borderRadius),
                {
                  tooltipDelay: 2e3,
                  pageIconSize: 8,
                  numberFontLevel: { xl: 's3', l: 's3', m: 's2', s: 's1' },
                  itemHeight: { xl: 48, l: 40, m: 32, s: 28 },
                  itemLineHeight: { xl: 48, l: 40, m: 32, s: 28 },
                  itemPadding: { xl: 12, l: 10, m: 8, s: 6 },
                  itemMargin: { xl: 8, l: 8, m: 6, s: 6 },
                  totalPadding: { xl: 24, l: 24, m: 20, s: 20 },
                  jumpFontLevel: { xl: 's2', l: 's2', m: 's1', s: 's1' },
                  inputWidth: { xl: 48, l: 40, m: 32, s: 28 },
                  inputFontWeight: t9.spec.fontWeight.semibold,
                  itemFontWeight: {
                    normal: t9.spec.fontWeight.regular,
                    selected: t9.spec.fontWeight.semibold,
                  },
                  simpleSizeMap: { xl: 'l', l: 'l', m: 'm', s: 's' },
                  border: {
                    disabled: 'none',
                    normal: 'none',
                    current: 'none',
                    hover: 'none',
                    clicked: 'none',
                  },
                  background: {
                    whiteBg: rt.neutral9.normal,
                    darkBg: rt.light,
                    current: rt.brand2,
                    hover: rt.brand3,
                    clicked: rt.brand1,
                  },
                  numberColor: {
                    current: rt.light,
                    hover: rt.light,
                    normal: rr.text.title,
                  },
                  arrowColor: {
                    normal: rr.text.title,
                    disabled: rr.text.disabled,
                    hover: rt.light,
                    simpleHover: rt.brand3,
                  },
                  moreColor: {
                    normal: rr.text.title,
                    hover: rt.brand3,
                    clicked: rt.brand1,
                  },
                  borderRadius: { s: rn.s2, m: rn.s2, l: rn.s2, xl: rn.s2 },
                }),
              Popconfirm: {
                width: '200px',
                paddingLeftWithType: 38,
                translateX: -nU.spacing.spec.s4,
              },
              PopoverCard:
                ((ro = nU.size),
                (ri = nU.spacing),
                (ra = ro.spec.borderRadius),
                {
                  card: {
                    paddingHorizontal: ri.spec.s6,
                    paddingVertical: ri.spec.s6,
                    borderRadius: ra.s2,
                  },
                  title: { marginBottom: ri.spec.s1, level: 6 },
                  text: { type: 'assistant' },
                  actions: { marginTop: ri.spec.s5, marginLeft: ri.spec.s4 },
                }),
              Progress:
                ((rs = nU.colors),
                (rl = nU.size),
                (rc = nU.opacity),
                {
                  defaultFontSize: 80,
                  defaultBgColor: y.transparentize(
                    rc.spec.s12,
                    rs.spec.neutral1.normal
                  ),
                  height: 6,
                  borderRadius: rl.spec.borderRadius.s5,
                }),
              Radio:
                ((rd = (ru = nU.colors).spec),
                {
                  marginRightInGroup: 8,
                  fontLevel: { xl: 's3', l: 's2', m: 's1', s: 's1' },
                  iconSize: { xl: 20, l: 18, m: 16, s: 14 },
                  checkedCenterBg: ru.pattern.background.higher,
                  checkedCenterSize: { xl: 8, l: 6, m: 4, s: 4 },
                  iconColor: {
                    hover: ru.spec.light,
                    click: ru.spec.light,
                    unChecked: ru.spec.light,
                    checked: rd.brand,
                    checkedHover: ru.spec.brand3,
                    checkedClick: ru.spec.brand1,
                  },
                  borderColor: {
                    hover: ru.spec.brand,
                    click: ru.spec.brand1,
                    unChecked: ru.spec.neutral5.normal,
                    checked: rd.brand,
                    checkedHover: ru.spec.brand3,
                    checkedClick: ru.spec.brand1,
                  },
                }),
              Result:
                ((rp = nU.spacing),
                (rh = nU.colors),
                {
                  titleMarginTop: (rg = rp.spec).s5,
                  defaultTitleLevel: 4,
                  iconMarginRight: rg.s6,
                  subTitleMarginTop: rg.s1,
                  defaultSubTitleFontLevel: 's1',
                  reasonMarginTop: rg.s6,
                  reasonMarginBottom: rg.s9,
                  buttonMarginTop: rg.s5,
                  typeBg: {
                    success: rh.spec.lightSafe2,
                    info: rh.spec.lightBrand2,
                    warning: rh.spec.lightWarning2,
                    error: rh.spec.lightDanger2,
                  },
                  defaultIconSize: 32,
                  typeIconSize: {
                    forbidden: { width: 180, height: 180 },
                    empty: { width: 180, height: 180 },
                    emptySmall: { width: 48, height: 48 },
                  },
                }),
              ScrollView:
                ((rf = nU.opacity),
                (rm = nU.size),
                (rv = nU.colors),
                (rb = nU.spacing),
                {
                  scrollBar: {
                    size: { s: 4, m: 4, l: 10, xl: 10 },
                    borderRadius: rm.spec.borderRadius.s5,
                    background: y.transparentize(
                      rf.spec.s10,
                      rv.spec.neutral1.normal
                    ),
                    hoverBackground: y.transparentize(
                      rf.spec.s9,
                      rv.spec.neutral1.normal
                    ),
                  },
                  padding: rb.spec.s2,
                }),
              Select:
                ((rx = nU.typography),
                (ry = nU.size),
                (rw = nU.spacing),
                (rk = rx.spec.fontSize),
                (rz = (rS = ry.spec).height),
                (rC = rS.borderRadius),
                (rI = rw.spec),
                {
                  wrapperPadding: '4px 4px 0 4px',
                  contentPaddingRight: 24,
                  tag: { margin: '0 4px 4px 0', outerPadding: 4 },
                  ctrlHeight: {
                    s: rz.s - 2,
                    m: rz.m - 2,
                    l: rz.l - 2,
                    xl: rz.xl - 2,
                  },
                  ctrlPaddingLeft: { s: rI.s5, m: rI.s5, l: rI.s6, xl: rI.s6 },
                  fontSize: { s: rk.s1, m: rk.s1, l: rk.s2, xl: rk.s2 },
                  borderRadius: rC.s1,
                  offset: { s: rI.s2, m: rI.s2, l: rI.s3, xl: rI.s3 },
                  groupPaddingLeft: { s: rI.s5, m: rI.s5, l: rI.s6, xl: rI.s6 },
                  groupItemIndent: rI.s5,
                  iconRight: { s: rI.s5, m: rI.s5, l: rI.s6, xl: rI.s6 },
                  notFoundPanelHeight: 120,
                }),
              Skeleton: {
                backgroundColor: (rL = nU.colors).spec.neutral9.normal,
                activeBackgroundColor: rL.spec.neutral7.normal,
                card: {
                  titleHeight: 12,
                  titleWidth: '60%',
                  descHeight: 12,
                  descWidth: '40%',
                },
                paragraph: {
                  titleMarginBottom: 4,
                  titleWidth: 120,
                  height: 12,
                  marginTop: 20,
                },
                tree: {
                  squareMarginRight: 8,
                  squareSize: 16,
                  contentHeight: 12,
                  treeNodeMarginTop: 24,
                },
                navigation: {
                  squareSize: 16,
                  contentHeight: 12,
                  squareMarginRight: 8,
                  navigationNodeMarginTop: 24,
                  navigationHeadMarginBottom: 8,
                  navigationHeadScale: 0.7,
                  navigationNodeScaleList: [0.6, 1, 0.7, 0.9],
                },
              },
              Spin:
                ((rR = nU.opacity),
                (rB = nU.typography),
                (rE = nU.spacing),
                (rO = rB.spec.fontSize),
                (rP = rE.pattern.textIcon),
                {
                  maskOpacity: rR.spec.s1,
                  icon: {
                    fontSize: { s: rO.s3, m: rO.s6, l: rO.s7, xl: rO.s7 },
                    padding: {
                      s: ''.concat(rP.s1, 'px ').concat(rP.s6, 'px;'),
                      m: ''.concat(rP.s3, 'px ').concat(rP.s6, 'px;'),
                      l: ''.concat(rP.s6, 'px ').concat(rP.s7, 'px;'),
                      xl: ''.concat(rP.s6, 'px ').concat(rP.s7, 'px;'),
                    },
                  },
                  desc: {
                    fontSize: { s: rO.s1, m: rO.s2, l: rO.s3, xl: rO.s4 },
                    paddingRight: { s: rP.s6, m: rP.s6, l: rP.s7, xl: rP.s7 },
                  },
                }),
              Rate:
                ((rT = nU.colors),
                (rM = nU.spacing),
                (rF = nU.typography),
                (rj = (r_ = rT.spec).warning),
                (rH = r_.neutral6),
                (rA = rT.pattern.text.text),
                (rW = rF.spec.fontSize),
                {
                  color: rj,
                  bgColor: rH.normal,
                  size: rW.s6,
                  displaySize: rW.s1,
                  textColor: rA,
                  marginRight: rM.spec.s8,
                  displayMarginRight: rM.spec.s2,
                  textPadding: rM.spec.s2,
                }),
              Steps:
                ((rN = nU.colors),
                (rD = nU.typography),
                (rq = nU.spacing),
                (rG = nU.shadows),
                (rU = nU.size),
                (r$ = rD.spec),
                (rV = rN.spec),
                (rZ = rN.pattern),
                (rY = rG.pattern),
                (rQ = rU.spec.borderRadius),
                {
                  content: {
                    fontSize: {
                      s: r$.fontSize.s1,
                      m: r$.fontSize.s2,
                      l: r$.fontSize.s2,
                      xl: r$.fontSize.s3,
                    },
                    lineHeight: {
                      s: r$.lineHeight.s1,
                      m: r$.lineHeight.s2,
                      l: r$.lineHeight.s2,
                      xl: r$.lineHeight.s3,
                    },
                    fontWeight: r$.fontWeight.semibold,
                    color: {
                      wait: rV.neutral3.normal,
                      finish: rV.brand2,
                      process: rV.light,
                      error: rV.danger,
                      hover: rV.brand3,
                      clicked: rV.brand1,
                    },
                    background: {
                      wait: 'transparent',
                      finish: 'transparent',
                      process: rV.brand,
                      error: 'transparent',
                      hover: 'transparent',
                      clicked: 'transparent',
                    },
                    width: { s: '160px', m: '180px', l: '200px', xl: '220px' },
                    btnSpacing: rq.spec.s6,
                    verticalPaddingBottom: rq.spec.s7,
                    verticalMarginBottom: 10,
                  },
                  progressLine: {
                    bgColor: rV.neutral7.normal,
                    finishBgColor: rV.brand,
                    minWidth: 28,
                    vertical: {
                      top: { s: 34, m: 38, l: 42, xl: 46 },
                      left: { s: 12, m: 14, l: 16, xl: 18 },
                    },
                  },
                  circle: {
                    size: { s: 24, m: 28, l: 32, xl: 36 },
                    marginRight: {
                      s: rq.spec.s4,
                      m: rq.spec.s4,
                      l: rq.spec.s4,
                      xl: rq.spec.s5,
                    },
                  },
                  title: {
                    color: {
                      wait: rV.neutral4.normal,
                      finish: rV.brand,
                      process: rV.brand,
                      error: rV.danger,
                      hover: rV.brand3,
                      clicked: rV.brand1,
                    },
                    marginRight: { s: 10, m: 10, l: 10, xl: 12 },
                  },
                  description: {
                    maxWidth: 172,
                    marginLeft: { s: 24, m: 28, l: 32, xl: 36 },
                    paddingLeft: {
                      s: rq.spec.s4,
                      m: rq.spec.s4,
                      l: rq.spec.s4,
                      xl: rq.spec.s5,
                    },
                    marginTop: { s: 0, m: 0, l: -2, xl: -2 },
                  },
                  btn: {
                    width: 20,
                    height: 32,
                    background: rZ.background.block,
                    borderColor: rZ.border,
                    boxShadow: rY.popper,
                    color: rZ.icon.normal,
                    radius: rQ.s1,
                  },
                }),
              Switch:
                ((rK = nU.colors),
                (rJ = nU.size),
                (rX = nU.typography),
                (r0 = rK.spec),
                (r1 = rX.spec.fontSize),
                {
                  height: { s: 20, m: 20, l: 24, xl: 24 },
                  minWidth: { s: 42, m: 42, l: 48, xl: 48 },
                  borderRadius: rJ.spec.borderRadius.s5,
                  fontSize: { s: r1.s1, m: r1.s1, l: r1.s2, xl: r1.s2 },
                  background: {
                    checked: r0.brand,
                    unChecked: r0.neutral5.normal,
                  },
                  circleBackground: r0.light,
                  childrenMarginLeft: { checked: 8, unChecked: 24 },
                  childrenMarginRight: { checked: 24, unChecked: 8 },
                  activeBoxShadow: 'none',
                }),
              Slider:
                ((r2 = nU.colors),
                (r4 = nU.shadows),
                (r3 = nU.typography),
                {
                  circleSize: 12,
                  circleBoxShadow: r4.spec.s2.normal,
                  circleColor: r2.spec.brand,
                  circleBorderWidth: 2,
                  circleBorderColor: r2.spec.light,
                  circleBorderHoverColor: r2.spec.light,
                  circleActiveSize: 12,
                  circleActiveBorderSize: 0,
                  circleActiveBoxShadow: r4.spec.s2.hover,
                  circleActiveBorderColor: r2.spec.light,
                  trackHeight: 4,
                  trackBgColor: r2.spec.neutral7.normal,
                  trackHoverBgColor: r2.spec.neutral6.normal,
                  trackActiveBgColor: r2.spec.brand,
                  rootPadding: 4,
                  markRowGutter: 8,
                  markPointSize: 6,
                  markPointBorderSize: 1,
                  markPointColor: r2.spec.light,
                  includeMarkPointColor: r2.spec.light,
                  markPointBorderColor: r2.spec.neutral7.normal,
                  includeMarkPointBorderColor: r2.spec.brand,
                  labelNodeFontSize: r3.spec.fontSize.s1,
                  labelNodeLineHeight: r3.spec.lineHeight.s1,
                }),
              Table:
                ((r6 = nU.typography),
                (r8 = nU.colors),
                (r5 = nU.opacity),
                (r7 = nU.zIndex),
                (r9 = nU.size),
                {
                  arrowSize: 9,
                  expandIndent: 16,
                  fixedZIndex: r7.spec.s1,
                  color: r8.pattern.text.text,
                  borderRadius: r9.spec.borderRadius.s2,
                  headOrFooterHoverBackground: r8.spec.neutral7.normal,
                  headOrFooterBackground: r8.spec.neutral9.normal,
                  headOrFooterFontWeight: r6.spec.fontWeight.regular,
                  headOrFooterColor: r8.spec.neutral3.normal,
                  tableBackground: r8.pattern.background.block,
                  trBackground: {
                    stripe: r8.spec.neutral10.normal,
                    normal: r8.pattern.background.global,
                    hover: y.transparentize(
                      r5.spec.s11,
                      r8.spec.neutral3.normal
                    ),
                  },
                  leftFixedColumnBoxShadow:
                    '6px 0 6px 0px rgba(102,102,102,0.12)',
                  rightFixedColumnBoxShadow:
                    '-6px 0 6px 0px rgba(102,102,102,0.12)',
                  sizeData: {
                    s: {
                      fontLevel: 's1',
                      headerPaddingLevels: ['s4', 's7'],
                      cellPaddingLevels: ['s6', 's7'],
                    },
                    m: {
                      fontLevel: 's1',
                      headerPaddingLevels: ['s4', 's7'],
                      cellPaddingLevels: ['s7', 's7'],
                    },
                    l: {
                      fontLevel: 's2',
                      headerPaddingLevels: ['s5', 's8'],
                      cellPaddingLevels: ['s8', 's8'],
                    },
                    xl: {
                      fontLevel: 's2',
                      headerPaddingLevels: ['s5', 's8'],
                      cellPaddingLevels: ['s8', 's8'],
                    },
                  },
                  filterData: {
                    s: { buttonSize: 's' },
                    m: { buttonSize: 's' },
                    l: { buttonSize: 'm' },
                    xl: { buttonSize: 'm' },
                  },
                  paginationMargin: { s: 4, m: 4, l: 8, xl: 8 },
                }),
              Tabs:
                ((ne = nU.colors),
                (nt = nU.size),
                (nr = nU.spacing),
                (nn = nU.transition),
                (no = nU.opacity),
                (ni = ne.spec),
                (na = no.spec),
                (ns = nr.spec),
                {
                  height: e({}, nt.spec.height),
                  marginRight: { xl: ns.s11, l: ns.s10, m: ns.s10, s: ns.s8 },
                  padding: {
                    xl: '0 0 '.concat(ns.s1, 'px 0'),
                    l: '0 0 '.concat(ns.s1, 'px 0'),
                    m: '0 0 '.concat(ns.s1, 'px 0'),
                    s: '0 0 '.concat(ns.s1, 'px 0'),
                  },
                  indicator: {
                    activeColor: ni.brand,
                    activeHeight: ns.s1,
                    bgColor: ni.neutral7.normal,
                    bgHeight: 1,
                  },
                  iconSize: { xl: ns.s5, l: ns.s5, m: ns.s4, s: ns.s4 },
                  card: {
                    marginRight: 0,
                    height: { s: 26, m: 30, l: 38, xl: 46 },
                    padding: { xl: 24, l: 20, m: 14, s: 12 },
                    dividerSize: { xl: 18, l: 16, m: 14, s: 12 },
                    borderRadius: nt.spec.borderRadius.s1,
                    bgColor: ni.neutral8.normal,
                    bgSelectedColor: ne.pattern.background.higher,
                    bgHoverColor: ni.neutral8.hover,
                    hoverColor: ni.neutral2.normal,
                  },
                  panel: {
                    margin: ''.concat(nr.spec.s5, 'px auto'),
                    fade: nn.spec.duration.normal,
                  },
                  capsule: {
                    bgColor: ni.neutral8.normal,
                    bgPadding: {
                      xl: ''.concat(ns.s1, 'px'),
                      l: ''.concat(ns.s1, 'px'),
                      m: ''.concat(ns.s1, 'px'),
                      s: ''.concat(ns.s1, 'px'),
                    },
                    radius: {
                      xl: ''.concat(ns.s1, 'px'),
                      l: ''.concat(ns.s1, 'px'),
                      m: ''.concat(ns.s1, 'px'),
                      s: ''.concat(ns.s1, 'px'),
                    },
                    color: ni.neutral2.normal,
                    btnBgColor: {
                      normal: y.transparentize(0, ni.light),
                      hover: y.transparentize(na.s3, ni.light),
                      click: y.transparentize(1, ni.light),
                    },
                    btnPadding: {
                      xl: ''.concat(ns.s6, 'px'),
                      l: ''.concat(ns.s6, 'px'),
                      m: ''.concat(ns.s5, 'px'),
                      s: ''.concat(ns.s5, 'px'),
                    },
                  },
                }),
              Tag:
                ((i = (r = nU).colors),
                (a = r.size),
                (s = r.opacity),
                (l = r.typography),
                (c = i.pattern.text),
                (u = i.spec),
                (d = a.spec.borderRadius),
                (v = (m = l.spec).fontSize),
                (b = m.lineHeight),
                (x = {
                  primary: {
                    normal: u.brand2,
                    click: u.brand1,
                    hover: u.brand3,
                  },
                  normal: e({}, u.neutral8),
                  danger: {
                    normal: u.danger2,
                    click: u.danger1,
                    hover: u.danger3,
                  },
                  success: { normal: u.safe2, click: u.safe1, hover: u.safe3 },
                  warning: {
                    normal: u.warning2,
                    click: u.warning1,
                    hover: u.warning3,
                  },
                }),
                (R = {
                  base: {
                    normal: u.light,
                    hover: y.transparentize(s.spec.s1, u.light),
                    click: y.transparentize(s.spec.s3, u.light),
                  },
                  outline: {
                    normal: 'transparent',
                    hover: y.transparentize(s.spec.s12, u.light),
                    click: y.transparentize(s.spec.s11, u.light),
                  },
                  light: {
                    normal: y.transparentize(s.spec.s5, u.dark),
                    hover: y.transparentize(s.spec.s4, u.dark),
                    click: y.transparentize(s.spec.s3, u.dark),
                  },
                }),
                (B = {
                  base: u.neutral2,
                  outline: { normal: u.light, click: u.light, hover: u.light },
                  light: { normal: u.light, click: u.light, hover: u.light },
                }),
                (_ = {
                  normal: s.spec.s10,
                  hover: s.spec.s9,
                  click: s.spec.s8,
                }),
                (j =
                  ((n = {}),
                  ['primary', 'normal', 'danger', 'success', 'warning'].forEach(
                    function (e) {
                      n[e] = {
                        normal: 'transparent',
                        hover: y.transparentize(s.spec.s12, x[e].normal),
                        click: y.transparentize(s.spec.s11, x[e].normal),
                      };
                    }
                  ),
                  (n.normal = {
                    normal: 'transparent',
                    hover: y.transparentize(s.spec.s12, u.neutral2.normal),
                    click: y.transparentize(s.spec.s11, u.neutral2.normal),
                  }),
                  n)),
                (H = e({}, x, { normal: u.neutral5 })),
                (A = e({}, x, { normal: u.neutral2 })),
                (W =
                  ((o = {}),
                  ['primary', 'normal', 'danger', 'success', 'warning'].forEach(
                    function (e) {
                      (o[e] = {
                        normal: y.transparentize(_.normal, x[e].normal),
                        hover: y.transparentize(_.hover, x[e].normal),
                        click: y.transparentize(_.click, x[e].normal),
                      }),
                        (o.normal = {
                          normal: y.transparentize(_.normal, u.neutral3.normal),
                          hover: y.transparentize(_.hover, u.neutral3.normal),
                          click: y.transparentize(_.click, u.neutral3.normal),
                        });
                    }
                  ),
                  o)),
                {
                  height: { s: 20, m: 24, l: 28, xl: 32 },
                  paddingHorizontal: {
                    rect: { s: 6, m: 8, l: 8, xl: 12 },
                    circle: { s: 8, m: 10, l: 12, xl: 16 },
                  },
                  borderRadius: { circle: d.s5, rect: d.s1 },
                  background: {
                    plain: u.neutral9.normal,
                    hover: u.lightBrand3,
                    checked: u.brand2,
                    checkedHover: u.brand3,
                    checkedClicked: u.brand1,
                  },
                  fontSize: { s: 10, m: v.s1, l: v.s2, xl: v.s3 },
                  lineHeight: { xl: b.s3, l: b.s2, m: b.s1, s: 12 },
                  color: {
                    plain: u.neutral2.normal,
                    hover: u.brand,
                    click: u.brand4,
                    checked: c.inverse,
                    inverse: c.inverse,
                  },
                  iconSpacing: { s: 4, m: 6, l: 8, xl: 8 },
                  iconSize: { s: 8, m: 10, l: 10, xl: 14 },
                  marginRight: 8,
                  inverseHoverOpacity: s.spec.s1,
                  defaultBordered: !1,
                  defaultShape: 'circle',
                  lightBg: W,
                  lightColor: A,
                  maskColor: B,
                  maskBg: R,
                  outlineBg: j,
                  outlineBorder: H,
                  outlineColor: A,
                  statusOpacity: _,
                  typeColor: x,
                  maskStatusOpacity: {
                    normal: 0,
                    hover: s.spec.s1,
                    click: s.spec.s3,
                  },
                  disabledBg: y.transparentize(s.spec.s10, u.neutral6.normal),
                  disabledColor: u.neutral6.normal,
                }),
              Tooltip:
                ((nl = nU.colors),
                (nc = nU.opacity),
                (nu = nU.size),
                (nd = nU.typography),
                {
                  bgColor: y.transparentize(
                    nc.spec.s2,
                    nl.spec.neutral1.normal
                  ),
                  color: y.transparentize(nc.spec.s1, nl.spec.light),
                  linkColor: nl.spec.info4,
                  fontWeight: nd.spec.fontWeight.regular,
                  padding: {
                    s: [6, 12, 6, 12],
                    m: [6, 16, 6, 16],
                    l: [6, 16, 6, 16],
                    xl: [6, 16, 6, 16],
                  },
                  arrowSize: {
                    s: { width: 8, height: 4 },
                    m: { width: 12, height: 6 },
                    l: { width: 12, height: 6 },
                    xl: { width: 12, height: 6 },
                  },
                  fontLevel: { s: 's1', m: 's2', l: 's2', xl: 's2' },
                  maxWidth: 260,
                  borderRadius: {
                    s: nu.spec.borderRadius.s1,
                    m: nu.spec.borderRadius.s1,
                    l: nu.spec.borderRadius.s1,
                    xl: nu.spec.borderRadius.s1,
                  },
                }),
              Tree:
                ((np = nU.colors),
                (nh = nU.typography),
                (ng = nU.opacity),
                (nm = (nf = nh.spec).fontSize),
                (nv = nf.lineHeight),
                (nb = nf.fontWeight),
                (nx = np.spec),
                (ny = np.pattern),
                {
                  background: {
                    normal: nx.light,
                    hover: y.transparentize(ng.spec.s11, nx.neutral3.normal),
                    clicked: nx.lightBrand2,
                    selected: nx.lightBrand2,
                    selectedHover: nx.lightBrand2,
                    selectedClicked: nx.lightBrand3,
                    disabled: nx.light,
                  },
                  color: {
                    normal: nx.neutral2.normal,
                    hover: nx.neutral2.normal,
                    clicked: nx.brand,
                    selected: nx.brand,
                    selectedHover: nx.brand,
                    selectedClicked: nx.brand,
                    disabled: nx.neutral6.normal,
                  },
                  fontWeight: {
                    normal: nb.regular,
                    selected: nb.medium,
                    disabled: nb.regular,
                  },
                  fontSize: { s: nm.s1, m: nm.s1, l: nm.s2, xl: nm.s2 },
                  lineHeight: { s: nv.s1, m: nv.s1, l: nv.s2, xl: nv.s2 },
                  dragNodeHighlightOpacity: ng.spec.s3,
                  nodeHeight: { s: 32, m: 32, l: 36, xl: 36 },
                  firstNodePaddingLeft: { s: 12, m: 12, l: 12, xl: 12 },
                  contentMargin: '2px 0',
                  contentPaddingRight: { s: 16, m: 16, l: 16, xl: 16 },
                  childIndent: 20,
                  dragOverGapColor: nx.brand,
                  rootLevelColor: ny.text.title,
                  dragOverBgColor: nx.neutral7.normal,
                  checkboxMarginRight: 8,
                  iconFontSize: { s: 14, m: 14, l: 16, xl: 16 },
                  iconWrapperMarginRight: 4,
                  expandIconWrapperWidth: 16,
                  expandIconWrapperMargin: 4,
                  lineVertical: {
                    top: 34,
                    bottom: { s: 18, m: 18, l: 19, xl: 19 },
                    firstLevelLeft: { s: 24, m: 24, l: 24, xl: 24 },
                    otherLevelLeft: { s: 12, m: 12, l: 12, xl: 12 },
                  },
                  lineHorizontal: {
                    left: -4,
                    beforeLeft: { s: -12, m: -12, l: -12, xl: -12 },
                    beforeTop: { s: 16, m: 16, l: 18, xl: 18 },
                    beforeWidth: 8,
                  },
                  lineSize: 1,
                  itemHeight: { s: 36, m: 36, l: 40, xl: 40 },
                  overscan: 2,
                }),
              TreeSelect: {
                offset: {
                  s: (nw = nU.spacing.spec).s2,
                  m: nw.s2,
                  l: nw.s3,
                  xl: nw.s3,
                },
                popupPadding: 4,
                treeHeight: 200,
                selectedIconMarginLeft: nw.s4,
                selectedIconColor: 'inherit',
              },
              Transfer:
                ((nk = nU.colors),
                nU.size,
                (nS = nU.opacity),
                (nz = nU.typography),
                {
                  container: {
                    width: 400 + (nI = (nC = nU.spacing).spec.s12),
                    height: (2 * nC.spec.s4 + nz.spec.lineHeight.s1) * 9.5,
                  },
                  panel: {
                    backgroundColor: nk.pattern.background.selectedBlock,
                    borderColor: nk.pattern.border.normal,
                    checkboxMarginRight: nC.spec.s2,
                    header: {
                      backgroundColor: nk.spec.neutral8.normal,
                      paddingTop: nC.spec.s4,
                      paddingLeft: nC.spec.s5,
                      countColor: nk.spec.neutral3.normal,
                      search: {
                        paddingTop: nC.spec.s3,
                        paddingLeft: nC.spec.s5,
                      },
                      title: {
                        color: nk.spec.neutral1.normal,
                        fontSize: nz.spec.fontSize.s1,
                        weight: nz.spec.fontWeight.semibold,
                      },
                    },
                    list: { marginTop: nC.spec.s2 },
                    item: {
                      paddingTop: nC.spec.s4,
                      paddingLeft: nC.spec.s5,
                      lineHeight: nz.spec.lineHeight.s1,
                      fontSize: nz.spec.fontSize.s1,
                      color: nk.spec.neutral1.normal,
                      colorDisabled: nk.spec.neutral6.normal,
                      background: {
                        normal: nk.pattern.background.selectedBlock,
                        hover: y.transparentize(
                          nS.spec.s11,
                          nk.spec.neutral3.normal
                        ),
                        click: y.transparentize(
                          nS.spec.s10,
                          nk.spec.neutral3.normal
                        ),
                      },
                      extraColor: nk.spec.neutral4.normal,
                    },
                    footer: {
                      backgroundColor: nk.pattern.background.selectedBlock,
                      height: nC.spec.s10,
                      borderColor: nk.spec.neutral7.normal,
                    },
                  },
                  iconContainer: { width: nI },
                  icon: {
                    fontSize: nz.spec.fontSize.s3,
                    color: nk.spec.neutral6.normal,
                  },
                }),
              Typography: {
                defaultFontLevel: 's1',
                defaultTextType: 'text',
                defaultTitleType: 'title',
                titleFontLevelMap: {
                  h1: 's6',
                  h2: 's5',
                  h3: 's4',
                  h4: 's3',
                  h5: 's2',
                  h6: 's1',
                },
                titleMarginTop: '0',
                titleMarginBottom: '0',
              },
              Upload:
                ((nL = nU.colors),
                (nR = nU.shadows),
                (nB = nU.size),
                (nE = nU.opacity),
                (nO = nU.spacing),
                (nP = nU.typography),
                (nT = nB.spec.borderRadius),
                (nM = nO.spec),
                (nF = nP.spec.fontSize),
                {
                  shadow: nR.spec.s2,
                  borderRadius: nT.s1,
                  img: { borderRadius: nT.s2, hoverOpacity: nE.spec.s1 },
                  pictureWidth: { s: 56, m: 80, l: 96, xl: 96 },
                  result: {
                    size: {
                      s: { width: 200, height: 64, imgWidth: 48 },
                      m: { width: 240, height: 80, imgWidth: 64 },
                      l: { width: 280, height: 96, imgWidth: 80 },
                      xl: { width: 280, height: 96, imgWidth: 80 },
                    },
                    closeIconSize: { s: 10, m: 12, l: 12, xl: 12 },
                    closeIconSpacing: { s: 6, m: 8, l: 10, xl: 10 },
                    cardPaddingHorizontal: nM.s5,
                    cardPaddingVertial: nM.s6,
                  },
                  marginTop: { s: 6, m: 8, l: 10, xl: 10 },
                  card: {
                    size: { s: 80, m: 80, l: 96, xl: 96 },
                    titleMarginTop: nM.s3,
                    subTitleMarginTop: nM.s2,
                    titlePaddingRight: nM.s7,
                    titleFontLevel: 's2',
                    subTitleFontLevel: 's1',
                    iconFontLevel: nF.s5,
                    background: {
                      hover: y.transparentize(
                        nE.spec.s11,
                        nL.spec.neutral3.normal
                      ),
                      clicked: y.transparentize(
                        nE.spec.s10,
                        nL.spec.neutral3.normal
                      ),
                    },
                    hasUrlBackground: {
                      hover: y.transparentize(nE.spec.s11, nL.spec.brand),
                      clicked: y.transparentize(nE.spec.s10, nL.spec.brand),
                    },
                  },
                  progress: { height: 4 },
                  retryButton: {
                    marginInOtherType: nM.s4,
                    marginInTypePicture: {
                      s: nM.s2,
                      m: nM.s2,
                      l: nM.s3,
                      xl: nM.s3,
                    },
                  },
                  errorView: {
                    fontLevel: { s: 's1', m: 's1', l: 's2', xl: 's2' },
                    buttonSize: { s: 's', m: 's', l: 'm', xl: 'm' },
                  },
                  spinSize: { s: 's', m: 's', l: 'm', xl: 'm' },
                }),
              Timeline:
                ((n_ = nU.colors),
                (nj = nU.spacing),
                {
                  dotColor: n_.spec.brand,
                  dotSize: 9,
                  contentLeftMargin: 10,
                  contentTopMargin: nj.spec.s3,
                  lineWidth: 1,
                  itemPadding: 10,
                }),
              TimePicker: {
                width: 180,
                panelPadding: '4px 0',
                rowHeight: 32,
                itemHeight: 28,
                itemWidth: 28,
                itemBg: {
                  hover: (nH = nU.colors.spec).neutral10.normal,
                  clicked: nH.lightBrand2,
                  selected: nH.lightBrand2,
                },
                itemColor: {
                  normal: nH.neutral2.normal,
                  clicked: nH.brand,
                  selected: nH.brand,
                  disabled: nH.neutral6.normal,
                },
              },
              Img: {
                errorImg:
                  '//qhstaticssl.kujiale.com/newt/100759/image/png/1598864743996/776BA2A17BCA291CCC6956FE2DD07438.png',
                errorBgRepeat: 'repeat',
                errorBgSize: '100px 100px',
              },
              Collapse:
                ((nA = nU.spacing),
                (nW = nU.colors),
                (nN = nA.spec),
                {
                  background: nW.spec.neutral9,
                  headerPadding: ''.concat(nN.s6, 'px ').concat(nN.s10, 'px'),
                  panelMarginBottom: nN.s2,
                  contentPadding: ''.concat(nN.s7, 'px ').concat(nN.s10, 'px'),
                }),
              ExpandIcon: { size: 8 },
              Layout:
                ((nD = nU.opacity),
                {
                  background: (nq = nU.colors).pattern.background.global,
                  header: { height: 52, background: '#021329' },
                  content: {
                    height: '100%',
                    background: y.transparentize(
                      nD.spec.s10,
                      nq.spec.neutral4.normal
                    ),
                  },
                  sider: {
                    width: 200,
                    background: y.transparentize(
                      nD.spec.s10,
                      nq.spec.neutral4.normal
                    ),
                  },
                  footer: { height: 52, background: '#021329' },
                }),
            };
          return e({ components: n$ }, nU);
        })({});
      let j = styled;
      var H = r.n(j);
      let A = function () {
          return (0, t.useContext)(j.ThemeContext) || _;
        },
        W = function (r, n, o) {
          var i = A();
          return (0, t.useMemo)(
            function () {
              var t, a, s, c;
              return (
                (t = i.prefix),
                (s = Object.keys((a = o ? e({}, n, o) : n))),
                (c = {}),
                s.forEach(function (e) {
                  var n,
                    o = [
                      'muya-'.concat(r, '-').concat(u()(e)),
                      ''.concat(t, '-').concat(r, '-').concat(u()(e)),
                    ],
                    i = a[e];
                  i && 'string' == typeof i
                    ? o.push(i)
                    : i && 'object' === l(i) && (n = i),
                    (c[e] = { className: o.join(' '), style: n });
                }),
                c
              );
            },
            [r, n, o, i.prefix]
          );
        };
      var N = H().div.withConfig({ displayName: 'StyledContainerInner' })(
        ['position:relative;', ''],
        function (e) {
          return 'horizontal' === e.$direction
            ? (0, j.css)(['overflow-x:hidden;'])
            : (0, j.css)(['overflow-y:hidden;']);
        }
      );
      let D = n().memo(N);
      function q(e, t) {
        var r =
          arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        return 10 > Math.abs(e) ? t * (e + r) : t * r + e;
      }
      function G(e) {
        arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
      }
      function U(e, t, r, n, o, i, a) {
        try {
          var s = e[i](a),
            l = s.value;
        } catch (e) {
          return void r(e);
        }
        s.done ? t(l) : Promise.resolve(l).then(n, o);
      }
      function $(e) {
        return function () {
          var t = this,
            r = arguments;
          return new Promise(function (n, o) {
            var i = e.apply(t, r);
            function a(e) {
              U(i, n, o, a, s, 'next', e);
            }
            function s(e) {
              U(i, n, o, a, s, 'throw', e);
            }
            a(void 0);
          });
        };
      }
      Warning;
      function V(e, t) {
        return (V = Object.setPrototypeOf
          ? Object.setPrototypeOf.bind()
          : function (e, t) {
              return (e.__proto__ = t), e;
            })(e, t);
      }
      function Z(e) {
        return (Z = Object.setPrototypeOf
          ? Object.getPrototypeOf.bind()
          : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      var Y = r(714),
        Q = r.n(Y),
        K = r(699),
        J = ['getImgSrc'],
        X = ['getImgSrc'];
      function ee() {
        ee = function () {
          return e;
        };
        var e = {},
          t = Object.prototype,
          r = t.hasOwnProperty,
          n = 'function' == typeof Symbol ? Symbol : {},
          o = n.iterator || '@@iterator',
          i = n.asyncIterator || '@@asyncIterator',
          a = n.toStringTag || '@@toStringTag';
        function s(e, t, r) {
          return (
            Object.defineProperty(e, t, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            }),
            e[t]
          );
        }
        try {
          s({}, '');
        } catch (e) {
          s = function (e, t, r) {
            return (e[t] = r);
          };
        }
        function c(e, t, r, n) {
          var o,
            i = Object.create(
              (t && t.prototype instanceof p ? t : p).prototype
            ),
            a = new S(n || []);
          return (
            (o = 'suspendedStart'),
            (i._invoke = function (t, n) {
              if ('executing' === o)
                throw Error('Generator is already running');
              if ('completed' === o) {
                if ('throw' === t) throw n;
                return C();
              }
              for (a.method = t, a.arg = n; ; ) {
                var i = a.delegate;
                if (i) {
                  var s = (function e(t, r) {
                    var n = t.iterator[r.method];
                    if (void 0 === n) {
                      if (((r.delegate = null), 'throw' === r.method)) {
                        if (
                          t.iterator.return &&
                          ((r.method = 'return'),
                          (r.arg = void 0),
                          e(t, r),
                          'throw' === r.method)
                        )
                          return d;
                        (r.method = 'throw'),
                          (r.arg = TypeError(
                            "The iterator does not provide a 'throw' method"
                          ));
                      }
                      return d;
                    }
                    var o = u(n, t.iterator, r.arg);
                    if ('throw' === o.type)
                      return (
                        (r.method = 'throw'),
                        (r.arg = o.arg),
                        (r.delegate = null),
                        d
                      );
                    var i = o.arg;
                    return i
                      ? i.done
                        ? ((r[t.resultName] = i.value),
                          (r.next = t.nextLoc),
                          'return' !== r.method &&
                            ((r.method = 'next'), (r.arg = void 0)),
                          (r.delegate = null),
                          d)
                        : i
                      : ((r.method = 'throw'),
                        (r.arg = TypeError('iterator result is not an object')),
                        (r.delegate = null),
                        d);
                  })(i, a);
                  if (s) {
                    if (s === d) continue;
                    return s;
                  }
                }
                if ('next' === a.method) a.sent = a._sent = a.arg;
                else if ('throw' === a.method) {
                  if ('suspendedStart' === o) throw ((o = 'completed'), a.arg);
                  a.dispatchException(a.arg);
                } else 'return' === a.method && a.abrupt('return', a.arg);
                o = 'executing';
                var l = u(e, r, a);
                if ('normal' === l.type) {
                  if (
                    ((o = a.done ? 'completed' : 'suspendedYield'), l.arg === d)
                  )
                    continue;
                  return { value: l.arg, done: a.done };
                }
                'throw' === l.type &&
                  ((o = 'completed'), (a.method = 'throw'), (a.arg = l.arg));
              }
            }),
            i
          );
        }
        function u(e, t, r) {
          try {
            return { type: 'normal', arg: e.call(t, r) };
          } catch (e) {
            return { type: 'throw', arg: e };
          }
        }
        e.wrap = c;
        var d = {};
        function p() {}
        function h() {}
        function g() {}
        var f = {};
        s(f, o, function () {
          return this;
        });
        var m = Object.getPrototypeOf,
          v = m && m(m(z([])));
        v && v !== t && r.call(v, o) && (f = v);
        var b = (g.prototype = p.prototype = Object.create(f));
        function x(e) {
          ['next', 'throw', 'return'].forEach(function (t) {
            s(e, t, function (e) {
              return this._invoke(t, e);
            });
          });
        }
        function y(e, t) {
          var n;
          this._invoke = function (o, i) {
            function a() {
              return new t(function (n, a) {
                !(function n(o, i, a, s) {
                  var c = u(e[o], e, i);
                  if ('throw' !== c.type) {
                    var d = c.arg,
                      p = d.value;
                    return p && 'object' == l(p) && r.call(p, '__await')
                      ? t.resolve(p.__await).then(
                          function (e) {
                            n('next', e, a, s);
                          },
                          function (e) {
                            n('throw', e, a, s);
                          }
                        )
                      : t.resolve(p).then(
                          function (e) {
                            (d.value = e), a(d);
                          },
                          function (e) {
                            return n('throw', e, a, s);
                          }
                        );
                  }
                  s(c.arg);
                })(o, i, n, a);
              });
            }
            return (n = n ? n.then(a, a) : a());
          };
        }
        function w(e) {
          var t = { tryLoc: e[0] };
          1 in e && (t.catchLoc = e[1]),
            2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])),
            this.tryEntries.push(t);
        }
        function k(e) {
          var t = e.completion || {};
          (t.type = 'normal'), delete t.arg, (e.completion = t);
        }
        function S(e) {
          (this.tryEntries = [{ tryLoc: 'root' }]),
            e.forEach(w, this),
            this.reset(!0);
        }
        function z(e) {
          if (e) {
            var t = e[o];
            if (t) return t.call(e);
            if ('function' == typeof e.next) return e;
            if (!isNaN(e.length)) {
              var n = -1,
                i = function t() {
                  for (; ++n < e.length; )
                    if (r.call(e, n)) return (t.value = e[n]), (t.done = !1), t;
                  return (t.value = void 0), (t.done = !0), t;
                };
              return (i.next = i);
            }
          }
          return { next: C };
        }
        function C() {
          return { value: void 0, done: !0 };
        }
        return (
          (h.prototype = g),
          s(b, 'constructor', g),
          s(g, 'constructor', h),
          (h.displayName = s(g, a, 'GeneratorFunction')),
          (e.isGeneratorFunction = function (e) {
            var t = 'function' == typeof e && e.constructor;
            return (
              !!t &&
              (t === h || 'GeneratorFunction' === (t.displayName || t.name))
            );
          }),
          (e.mark = function (e) {
            return (
              Object.setPrototypeOf
                ? Object.setPrototypeOf(e, g)
                : ((e.__proto__ = g), s(e, a, 'GeneratorFunction')),
              (e.prototype = Object.create(b)),
              e
            );
          }),
          (e.awrap = function (e) {
            return { __await: e };
          }),
          x(y.prototype),
          s(y.prototype, i, function () {
            return this;
          }),
          (e.AsyncIterator = y),
          (e.async = function (t, r, n, o, i) {
            void 0 === i && (i = Promise);
            var a = new y(c(t, r, n, o), i);
            return e.isGeneratorFunction(r)
              ? a
              : a.next().then(function (e) {
                  return e.done ? e.value : a.next();
                });
          }),
          x(b),
          s(b, a, 'Generator'),
          s(b, o, function () {
            return this;
          }),
          s(b, 'toString', function () {
            return '[object Generator]';
          }),
          (e.keys = function (e) {
            var t = [];
            for (var r in e) t.push(r);
            return (
              t.reverse(),
              function r() {
                for (; t.length; ) {
                  var n = t.pop();
                  if (n in e) return (r.value = n), (r.done = !1), r;
                }
                return (r.done = !0), r;
              }
            );
          }),
          (e.values = z),
          (S.prototype = {
            constructor: S,
            reset: function (e) {
              if (
                ((this.prev = 0),
                (this.next = 0),
                (this.sent = this._sent = void 0),
                (this.done = !1),
                (this.delegate = null),
                (this.method = 'next'),
                (this.arg = void 0),
                this.tryEntries.forEach(k),
                !e)
              )
                for (var t in this)
                  't' === t.charAt(0) &&
                    r.call(this, t) &&
                    !isNaN(+t.slice(1)) &&
                    (this[t] = void 0);
            },
            stop: function () {
              this.done = !0;
              var e = this.tryEntries[0].completion;
              if ('throw' === e.type) throw e.arg;
              return this.rval;
            },
            dispatchException: function (e) {
              if (this.done) throw e;
              var t = this;
              function n(r, n) {
                return (
                  (a.type = 'throw'),
                  (a.arg = e),
                  (t.next = r),
                  n && ((t.method = 'next'), (t.arg = void 0)),
                  !!n
                );
              }
              for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                var i = this.tryEntries[o],
                  a = i.completion;
                if ('root' === i.tryLoc) return n('end');
                if (i.tryLoc <= this.prev) {
                  var s = r.call(i, 'catchLoc'),
                    l = r.call(i, 'finallyLoc');
                  if (s && l) {
                    if (this.prev < i.catchLoc) return n(i.catchLoc, !0);
                    if (this.prev < i.finallyLoc) return n(i.finallyLoc);
                  } else if (s) {
                    if (this.prev < i.catchLoc) return n(i.catchLoc, !0);
                  } else {
                    if (!l)
                      throw Error('try statement without catch or finally');
                    if (this.prev < i.finallyLoc) return n(i.finallyLoc);
                  }
                }
              }
            },
            abrupt: function (e, t) {
              for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                var o = this.tryEntries[n];
                if (
                  o.tryLoc <= this.prev &&
                  r.call(o, 'finallyLoc') &&
                  this.prev < o.finallyLoc
                ) {
                  var i = o;
                  break;
                }
              }
              i &&
                ('break' === e || 'continue' === e) &&
                i.tryLoc <= t &&
                t <= i.finallyLoc &&
                (i = null);
              var a = i ? i.completion : {};
              return (
                (a.type = e),
                (a.arg = t),
                i
                  ? ((this.method = 'next'), (this.next = i.finallyLoc), d)
                  : this.complete(a)
              );
            },
            complete: function (e, t) {
              if ('throw' === e.type) throw e.arg;
              return (
                'break' === e.type || 'continue' === e.type
                  ? (this.next = e.arg)
                  : 'return' === e.type
                  ? ((this.rval = this.arg = e.arg),
                    (this.method = 'return'),
                    (this.next = 'end'))
                  : 'normal' === e.type && t && (this.next = t),
                d
              );
            },
            finish: function (e) {
              for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var r = this.tryEntries[t];
                if (r.finallyLoc === e)
                  return this.complete(r.completion, r.afterLoc), k(r), d;
              }
            },
            catch: function (e) {
              for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var r = this.tryEntries[t];
                if (r.tryLoc === e) {
                  var n = r.completion;
                  if ('throw' === n.type) {
                    var o = n.arg;
                    k(r);
                  }
                  return o;
                }
              }
              throw Error('illegal catch attempt');
            },
            delegateYield: function (e, t, r) {
              return (
                (this.delegate = { iterator: z(e), resultName: t, nextLoc: r }),
                'next' === this.method && (this.arg = void 0),
                d
              );
            },
          }),
          e
        );
      }
      var et = ['kss.ksyun.com', 'kssws.ks-cdn.com', '-ks3.kujiale.com'],
        er = {
          options: {
            wait: 'on',
            resize: 'off',
            clean: 'auto',
            lazy: 'on',
            oss: 'auto',
            suffix: 'on',
          },
          concurrent: 6,
          throttleTime: 80,
          suffixs: { resizeMode: 'fill', ratio: window.devicePixelRatio || 1 },
          checkRegion: { top: -0.3, bottom: 0.3, left: -0.5, right: 0.5 },
          getImgSrc: function (e, t, r) {
            if ('off' === r.suffix) return e;
            'auto' === r.oss
              ? ((n = !1),
                et.forEach(function (t) {
                  -1 !== e.indexOf(t) && (n = !0);
                }),
                (o = n ? 'kss' : 'ali'))
              : (o = r.oss);
            var n,
              o,
              i = e;
            if (
              'off' !== r.clean &&
              ((i =
                'kss' === o
                  ? e.replace(/@base@tag.*$/, '')
                  : e.replace(/@.*$/, '').replace(/\?x-oss-process.*$/, '')),
              'auto' !== r.clean && r.clean)
            ) {
              var a,
                s,
                l = t.external || '';
              t.external = l +=
                ((a = new RegExp(r.clean)),
                (s = ''),
                e.replace(a, function (e) {
                  return (s = e), '';
                }),
                s);
            }
            var c = (function (e, t) {
              if ('kss' === t) {
                var r,
                  n,
                  o,
                  i = [];
                if (
                  ('auto' !== e.width || 'auto' !== e.height) &&
                  (e.width || e.height)
                ) {
                  if (
                    ('lfit' === e.resizeMode
                      ? i.push('&m=0')
                      : 'mfit' === e.resizeMode
                      ? i.push('&m=1')
                      : 'fill' === e.resizeMode && i.push('&m=1&c=1'),
                    'auto' !== e.width && e.width && e.ratio)
                  ) {
                    var a = Math.floor(e.width * e.ratio);
                    (a = Math.min(a, 4096)), i.push('&w='.concat(a));
                  }
                  if ('auto' !== e.height && e.height && e.ratio) {
                    var s = Math.floor(e.height * e.ratio);
                    (s = Math.min(s, 4096)), i.push('&h='.concat(s));
                  }
                }
                return (
                  e.format
                    ? i.push('&F='.concat(e.format))
                    : e.webp && i.push('&F=webp'),
                  e.q && i.push('&q='.concat(e.q)),
                  e.external && i.push(e.external),
                  i.length && i.unshift('@base@tag=imgScale'),
                  i.join('')
                );
              }
              return (
                (r = {}),
                ('auto' !== e.width || 'auto' !== e.height) &&
                  (e.width || e.height) &&
                  (r.resize = (function (e) {
                    var t = {};
                    if (
                      (e.resizeMode && (t.m = e.resizeMode),
                      t && 'auto' !== e.width && e.width && e.ratio)
                    ) {
                      var r = Math.floor(e.width * e.ratio);
                      t.w = r = Math.min(r, 4096);
                    }
                    if (t && 'auto' !== e.height && e.height && e.ratio) {
                      var n = Math.floor(e.height * e.ratio);
                      t.h = n = Math.min(n, 4096);
                    }
                    return t;
                  })(e)),
                e.format
                  ? ((r.format = {}), (r.format[e.format] = ''))
                  : e.webp && (r.format = { webp: '' }),
                e.Q
                  ? (r.quality = { Q: e.Q })
                  : e.q && (r.quality = { q: e.q }),
                e.blur && (r.blur = e.blur),
                (o = (n = Object.keys(r).map(function (e) {
                  var t = r[e],
                    n = [];
                  return (
                    n.push(e),
                    Object.keys(t).forEach(function (e) {
                      var r = t[e];
                      '' !== r
                        ? n.push(''.concat(e, '_').concat(r))
                        : n.push(e);
                    }),
                    n.join(',')
                  );
                })).length
                  ? '?x-oss-process=image/'.concat(n.join('/'))
                  : ''),
                e.external && '' !== o
                  ? ''.concat(o).concat(e.external)
                  : e.external && '' === o
                  ? '?x-oss-process=image/'.concat(e.external)
                  : o
              );
            })(t, o);
            return ''.concat(i).concat(c);
          },
        },
        en = new ((function (e) {
          if ('function' != typeof e && null !== e)
            throw TypeError(
              'Super expression must either be null or a function'
            );
          (u.prototype = Object.create(e && e.prototype, {
            constructor: { value: u, writable: !0, configurable: !0 },
          })),
            Object.defineProperty(u, 'prototype', { writable: !1 }),
            e && V(u, e);
          var t,
            r,
            n,
            o,
            i,
            s,
            c =
              ((t = (function () {
                if (
                  'undefined' == typeof Reflect ||
                  !Reflect.construct ||
                  Reflect.construct.sham
                )
                  return !1;
                if ('function' == typeof Proxy) return !0;
                try {
                  return (
                    Boolean.prototype.valueOf.call(
                      Reflect.construct(Boolean, [], function () {})
                    ),
                    !0
                  );
                } catch (e) {
                  return !1;
                }
              })()),
              function () {
                var e,
                  r = Z(u);
                e = t
                  ? Reflect.construct(r, arguments, Z(this).constructor)
                  : r.apply(this, arguments);
                if (e && ('object' == l(e) || 'function' == typeof e)) return e;
                if (void 0 !== e)
                  throw TypeError(
                    'Derived constructors may only return object or undefined'
                  );
                if (void 0 === this)
                  throw ReferenceError(
                    "this hasn't been initialised - super() hasn't been called"
                  );
                return this;
              });
          function u(e) {
            var t;
            if (!(this instanceof u))
              throw TypeError('Cannot call a class as a function');
            return (
              ((t = c.call(this)).scrollCheckFns = new Set()),
              (t.resizeCheckFns = new Set()),
              (t._poolStatus = 'none'),
              (t._lastCheckTime = { scroll: -1, resize: -1 }),
              (t._isChecking = { scroll: !1, resize: !1 }),
              (t._lastEventTimer = -1),
              (t._lastThrottleTimer = { scroll: -1, resize: -1 }),
              (t._name = void 0),
              (t._settings = er),
              (t._destroyFn = function () {}),
              (t._rectIntersect = function () {
                return !1;
              }),
              (t._name = e || 'default'),
              t.setMaxListeners(30),
              t
            );
          }
          return (
            (s = [
              {
                key: 'throttleCheck',
                value:
                  ((r = $(
                    ee().mark(function e(t) {
                      var r,
                        n,
                        o = this;
                      return ee().wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                if (
                                  ((r = t.type),
                                  (n = this._settings.throttleTime),
                                  clearTimeout(this._lastThrottleTimer[r]),
                                  !(
                                    Date.now() - this._lastCheckTime[r] < n ||
                                    this._isChecking[r]
                                  ))
                                ) {
                                  e.next = 8;
                                  break;
                                }
                                (this._lastThrottleTimer[r] = setTimeout(
                                  function () {
                                    return o.throttleCheck(t);
                                  },
                                  n
                                )),
                                  (e.next = 13);
                                break;
                              case 8:
                                return (
                                  (this._isChecking[r] = !0),
                                  (e.next = 11),
                                  this.check(t).catch(function () {})
                                );
                              case 11:
                                (this._isChecking[r] = !1),
                                  (this._lastCheckTime[r] = Date.now());
                              case 13:
                              case 'end':
                                return e.stop();
                            }
                        },
                        e,
                        this
                      );
                    })
                  )),
                  function (e) {
                    return r.apply(this, arguments);
                  }),
              },
              {
                key: 'debounceCheck',
                value: function (e) {
                  var t = this;
                  window.clearTimeout(this._lastEventTimer),
                    (this._lastEventTimer = window.setTimeout(function () {
                      t.check(e).catch(function () {});
                    }, this._settings.throttleTime));
                },
              },
              {
                key: 'setupSync',
                value: function (e) {
                  var t = this;
                  if (e) {
                    var r = this._settings,
                      n = r.getImgSrc,
                      o = a(r, J),
                      i = e.getImgSrc,
                      s = a(e, X),
                      l = Q()(o, s);
                    (l.getImgSrc = i || n), (this._settings = l);
                  }
                  var c = function () {
                      t.throttleCheck({ type: 'scroll' });
                    },
                    u = function () {
                      t._resetRectIntersect(),
                        t.throttleCheck({ type: 'resize' }),
                        t.debounceCheck({ type: 'resize' });
                    };
                  window.addEventListener('scroll', c, !0),
                    window.addEventListener('resize', u),
                    (this._destroyFn = function () {
                      window.removeEventListener('scroll', c, !0),
                        window.removeEventListener('resize', u);
                    }),
                    this._resetRectIntersect(),
                    this._settings.maxListeners &&
                      this.setMaxListeners(this._settings.maxListeners);
                  var d = this._settings.suffixs;
                  d.format ||
                    void 0 !== d.webp ||
                    (d.webp = (function () {
                      var e = document.createElement('canvas');
                      try {
                        if (e.getContext && e.getContext('2d'))
                          return (
                            0 ===
                            e.toDataURL('image/webp').indexOf('data:image/webp')
                          );
                        return !1;
                      } catch (e) {
                        return !1;
                      }
                    })()),
                    (this._poolStatus = 'ready'),
                    this.emit('pool_ready');
                },
              },
              {
                key: 'setup',
                value:
                  ((n = $(
                    ee().mark(function e(t) {
                      return ee().wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                this.setupSync(t);
                              case 1:
                              case 'end':
                                return e.stop();
                            }
                        },
                        e,
                        this
                      );
                    })
                  )),
                  function (e) {
                    return n.apply(this, arguments);
                  }),
              },
              {
                key: 'check',
                value:
                  ((o = $(
                    ee().mark(function e(t) {
                      return ee().wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (e.next = 2), this.waitReady();
                              case 2:
                                if ('resize' !== t.type) {
                                  e.next = 7;
                                  break;
                                }
                                return (
                                  (e.next = 5),
                                  this._runFns(this.resizeCheckFns)
                                );
                              case 5:
                                e.next = 9;
                                break;
                              case 7:
                                return (
                                  (e.next = 9),
                                  this._runFns(this.scrollCheckFns)
                                );
                              case 9:
                              case 'end':
                                return e.stop();
                            }
                        },
                        e,
                        this
                      );
                    })
                  )),
                  function (e) {
                    return o.apply(this, arguments);
                  }),
              },
              {
                key: 'waitReady',
                value: function () {
                  var e = this;
                  return 'ready' !== this._poolStatus
                    ? new Promise(function (t) {
                        e.once('pool_ready', t);
                      })
                    : Promise.resolve();
                },
              },
              {
                key: 'destroy',
                value: function () {
                  (this._poolStatus = 'none'), this._destroyFn();
                },
              },
              {
                key: 'rectIntersect',
                value: function (e) {
                  var t = this.getRect(e),
                    r = this._rectIntersect(t);
                  return { rect: t, intersect: r };
                },
              },
              {
                key: 'getSuffixs',
                value: function (e, t) {
                  var r = this._settings.suffixs;
                  return {
                    width: e.width || t.width || r.width,
                    height: e.height || t.height || r.height,
                    webp: void 0 !== e.webp ? e.webp : r.webp,
                    format: e.format || r.format,
                    resizeMode: e.resizeMode || r.resizeMode,
                    ratio: e.ratio || r.ratio,
                    blur: e.blur || r.blur,
                    q: e.q || r.q,
                    Q: e.Q || r.Q,
                    external: e.external || r.external,
                  };
                },
              },
              {
                key: 'reset',
                value: function (e) {
                  return this.destroy(), this.setup(e);
                },
              },
              {
                key: 'getImgSrc',
                value: function (e, t, r) {
                  var n = this.settings,
                    o = n.getImgSrc,
                    i = n.options;
                  return o(e, t, {
                    clean: r.clean || i.clean,
                    oss: r.oss || i.oss,
                    suffix: r.suffix || i.suffix,
                  });
                },
              },
              {
                key: 'getRect',
                value: function (e) {
                  return e.getBoundingClientRect();
                },
              },
              {
                key: '_runFns',
                value:
                  ((i = $(
                    ee().mark(function e(t) {
                      var r;
                      return ee().wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                if (0 !== t.size) {
                                  e.next = 2;
                                  break;
                                }
                                return e.abrupt('return');
                              case 2:
                                return (
                                  (r = Array.from(t.values())),
                                  (e.next = 5),
                                  (function (e, t, r) {
                                    var n = r,
                                      o = 0,
                                      i = [];
                                    return new Promise(function (r, a) {
                                      for (
                                        var s = function n(s) {
                                          (o -= 1),
                                            i.push(s),
                                            e.length
                                              ? ((o += 1),
                                                t(e.shift())
                                                  .then(n)
                                                  .catch(function (e) {
                                                    return a(e);
                                                  }))
                                              : 0 === o && r(i);
                                        };
                                        n > 0 && e.length;

                                      )
                                        (n -= 1),
                                          (o += 1),
                                          t(e.shift())
                                            .then(s)
                                            .catch(function (e) {
                                              return a(e);
                                            });
                                    });
                                  })(
                                    r,
                                    (function () {
                                      var e = $(
                                        ee().mark(function e(t) {
                                          return ee().wrap(
                                            function (e) {
                                              for (;;)
                                                switch ((e.prev = e.next)) {
                                                  case 0:
                                                    return (
                                                      (e.prev = 0),
                                                      (e.next = 3),
                                                      t()
                                                    );
                                                  case 3:
                                                    e.next = 8;
                                                    break;
                                                  case 5:
                                                    (e.prev = 5),
                                                      (e.t0 = e.catch(0)),
                                                      G(
                                                        '[ImgPool]: run checkFn with error.'
                                                      );
                                                  case 8:
                                                  case 'end':
                                                    return e.stop();
                                                }
                                            },
                                            e,
                                            null,
                                            [[0, 5]]
                                          );
                                        })
                                      );
                                      return function (t) {
                                        return e.apply(this, arguments);
                                      };
                                    })(),
                                    this._settings.concurrent
                                  )
                                );
                              case 5:
                              case 'end':
                                return e.stop();
                            }
                        },
                        e,
                        this
                      );
                    })
                  )),
                  function (e) {
                    return i.apply(this, arguments);
                  }),
              },
              {
                key: '_resetRectIntersect',
                value: function () {
                  var e,
                    t,
                    r = this._settings.checkRegion;
                  this._rectIntersect =
                    ((e = {
                      width: window.innerWidth,
                      height: window.innerHeight,
                      top: 0,
                      left: 0,
                    }),
                    (t = {
                      top: e.top + q(r.top, e.height),
                      bottom: e.top + q(r.bottom, e.height, 1),
                      left: e.left + q(r.left, e.width),
                      right: e.left + q(r.right, e.width, 1),
                    }),
                    function (e) {
                      var r, n;
                      return (
                        (r =
                          (e.top >= t.top && e.top <= t.bottom) ||
                          (e.top <= t.top && e.bottom >= t.bottom) ||
                          (e.bottom >= t.top && e.bottom <= t.bottom)),
                        (n =
                          (e.left >= t.left && e.left <= t.right) ||
                          (e.left <= t.left && e.right >= t.right) ||
                          (e.right >= t.left && e.right <= t.right)),
                        r && n
                      );
                    });
                },
              },
              {
                key: 'poolStatus',
                get: function () {
                  return this._poolStatus;
                },
              },
              {
                key: 'settings',
                get: function () {
                  return this._settings;
                },
              },
              {
                key: 'name',
                get: function () {
                  return this._name;
                },
              },
            ]),
            (function (e, t) {
              for (var r = 0; r < t.length; r++) {
                var n = t[r];
                (n.enumerable = n.enumerable || !1),
                  (n.configurable = !0),
                  'value' in n && (n.writable = !0),
                  Object.defineProperty(
                    e,
                    (function (e) {
                      var t = (function (e, t) {
                        if ('object' != l(e) || !e) return e;
                        var r = e[Symbol.toPrimitive];
                        if (void 0 !== r) {
                          var n = r.call(e, t || 'default');
                          if ('object' != l(n)) return n;
                          throw TypeError(
                            '@@toPrimitive must return a primitive value.'
                          );
                        }
                        return ('string' === t ? String : Number)(e);
                      })(e, 'string');
                      return 'symbol' == l(t) ? t : t + '';
                    })(n.key),
                    n
                  );
              }
            })(u.prototype, s),
            Object.defineProperty(u, 'prototype', { writable: !1 }),
            u
          );
        })(K.EventEmitter))();
      en.setupSync();
      var eo = n().createContext(en),
        ei = ['onTransitionEnd'],
        ea = H().div.withConfig({ displayName: 'BaseNode' })(
          ['position:relative;', ''],
          function (e) {
            var t,
              r,
              n = e.theme,
              o = e.$direction,
              i = e.$transition,
              a = e.$duration,
              s = n.transition.spec.easing;
            return (
              'horizontal' === o &&
                (t = (0, j.css)(['display:flex;width:100000px;height:100%;'])),
              'on' === (void 0 === i ? 'on' : i) &&
                (r = (0, j.css)(
                  ['transition:transform ', 'ms ', ';'],
                  a,
                  s.easeInOut
                )),
              (0, j.css)(['', ' ', ''], r, t)
            );
          }
        );
      let es = s(function (r, o) {
        var i = r.onTransitionEnd,
          s = a(r, ei),
          l = A(),
          c = (0, t.useContext)(eo),
          u = (0, t.useMemo)(
            function () {
              var e;
              return (
                (e = function () {
                  c.throttleCheck({ type: 'scroll' });
                }),
                function (t) {
                  e && !0 && e(t), i && 1 && i(t);
                }
              );
            },
            [i, c]
          );
        return n().createElement(
          ea,
          e({ theme: l }, s, { onTransitionEnd: u, ref: o })
        );
      });
      function el(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
        return n;
      }
      function ec(e, t) {
        if (e) {
          if ('string' == typeof e) return el(e, t);
          var r = {}.toString.call(e).slice(8, -1);
          return (
            'Object' === r && e.constructor && (r = e.constructor.name),
            'Map' === r || 'Set' === r
              ? Array.from(e)
              : 'Arguments' === r ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
              ? el(e, t)
              : void 0
          );
        }
      }
      function eu(e, t) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function (e, t) {
            var r =
              null == e
                ? null
                : ('undefined' != typeof Symbol && e[Symbol.iterator]) ||
                  e['@@iterator'];
            if (null != r) {
              var n,
                o,
                i,
                a,
                s = [],
                l = !0,
                c = !1;
              try {
                if (((i = (r = r.call(e)).next), 0 === t)) {
                  if (Object(r) !== r) return;
                  l = !1;
                } else
                  for (
                    ;
                    !(l = (n = i.call(r)).done) &&
                    (s.push(n.value), s.length !== t);
                    l = !0
                  );
              } catch (e) {
                (c = !0), (o = e);
              } finally {
                try {
                  if (
                    !l &&
                    null != r.return &&
                    ((a = r.return()), Object(a) !== a)
                  )
                    return;
                } finally {
                  if (c) throw o;
                }
              }
              return s;
            }
          })(e, t) ||
          ec(e, t) ||
          (function () {
            throw TypeError(
              'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
            );
          })()
        );
      }
      function ed() {
        return {
          get index() {
            return 0;
          },
          get itemIndex() {
            return 0;
          },
          get hasNext() {
            return !1;
          },
          get hasPrev() {
            return !1;
          },
          get hasNextItem() {
            return !1;
          },
          get hasPrevItem() {
            return !1;
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
          prevItem: function () {},
          nextItem: function () {},
          goToItem: function () {},
          next: function () {},
          prev: function () {},
          goTo: function () {},
          hasItem: function () {
            return !1;
          },
          hasStep: function () {
            return !1;
          },
          getItemOffset: function () {
            return 0;
          },
          getItemStep: function () {
            return 0;
          },
          getStepOffset: function () {
            return 0;
          },
          updateOffset: function () {},
        };
      }
      let ep = ShallowEqual;
      var eh = ['style'];
      function eg(e) {
        return e.map(function (e) {
          return e.current.getBoundingClientRect();
        });
      }
      function ef(e, t, r) {
        for (
          var n,
            o =
              ((n = t ? e[0].left : e[0].top),
              e.map(function (e) {
                return t ? e.right - n : e.bottom - n;
              })),
            i = 0,
            a = o.length;
          i < a;
          i++
        )
          if (o[i] >= r) return i + 1;
      }
      function em(e, t) {
        var r = e[0],
          n = e[e.length - 1];
        return t ? n.right - r.left : n.bottom - r.top;
      }
      function ev(r, n, o, a) {
        for (var s = 0; s < n; ) {
          var l = r[s],
            c = (0, t.createRef)(),
            u = i(o[s], c);
          a.push(c),
            r.push(
              (0, t.cloneElement)(l, e({}, l.props, { key: r.length, ref: u }))
            ),
            s++;
        }
      }
      function eb() {
        eb = function () {
          return e;
        };
        var e = {},
          t = Object.prototype,
          r = t.hasOwnProperty,
          n = 'function' == typeof Symbol ? Symbol : {},
          o = n.iterator || '@@iterator',
          i = n.asyncIterator || '@@asyncIterator',
          a = n.toStringTag || '@@toStringTag';
        function s(e, t, r) {
          return (
            Object.defineProperty(e, t, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            }),
            e[t]
          );
        }
        try {
          s({}, '');
        } catch (e) {
          s = function (e, t, r) {
            return (e[t] = r);
          };
        }
        function c(e, t, r, n) {
          var o,
            i = Object.create(
              (t && t.prototype instanceof p ? t : p).prototype
            ),
            a = new S(n || []);
          return (
            (o = 'suspendedStart'),
            (i._invoke = function (t, n) {
              if ('executing' === o)
                throw Error('Generator is already running');
              if ('completed' === o) {
                if ('throw' === t) throw n;
                return C();
              }
              for (a.method = t, a.arg = n; ; ) {
                var i = a.delegate;
                if (i) {
                  var s = (function e(t, r) {
                    var n = t.iterator[r.method];
                    if (void 0 === n) {
                      if (((r.delegate = null), 'throw' === r.method)) {
                        if (
                          t.iterator.return &&
                          ((r.method = 'return'),
                          (r.arg = void 0),
                          e(t, r),
                          'throw' === r.method)
                        )
                          return d;
                        (r.method = 'throw'),
                          (r.arg = TypeError(
                            "The iterator does not provide a 'throw' method"
                          ));
                      }
                      return d;
                    }
                    var o = u(n, t.iterator, r.arg);
                    if ('throw' === o.type)
                      return (
                        (r.method = 'throw'),
                        (r.arg = o.arg),
                        (r.delegate = null),
                        d
                      );
                    var i = o.arg;
                    return i
                      ? i.done
                        ? ((r[t.resultName] = i.value),
                          (r.next = t.nextLoc),
                          'return' !== r.method &&
                            ((r.method = 'next'), (r.arg = void 0)),
                          (r.delegate = null),
                          d)
                        : i
                      : ((r.method = 'throw'),
                        (r.arg = TypeError('iterator result is not an object')),
                        (r.delegate = null),
                        d);
                  })(i, a);
                  if (s) {
                    if (s === d) continue;
                    return s;
                  }
                }
                if ('next' === a.method) a.sent = a._sent = a.arg;
                else if ('throw' === a.method) {
                  if ('suspendedStart' === o) throw ((o = 'completed'), a.arg);
                  a.dispatchException(a.arg);
                } else 'return' === a.method && a.abrupt('return', a.arg);
                o = 'executing';
                var l = u(e, r, a);
                if ('normal' === l.type) {
                  if (
                    ((o = a.done ? 'completed' : 'suspendedYield'), l.arg === d)
                  )
                    continue;
                  return { value: l.arg, done: a.done };
                }
                'throw' === l.type &&
                  ((o = 'completed'), (a.method = 'throw'), (a.arg = l.arg));
              }
            }),
            i
          );
        }
        function u(e, t, r) {
          try {
            return { type: 'normal', arg: e.call(t, r) };
          } catch (e) {
            return { type: 'throw', arg: e };
          }
        }
        e.wrap = c;
        var d = {};
        function p() {}
        function h() {}
        function g() {}
        var f = {};
        s(f, o, function () {
          return this;
        });
        var m = Object.getPrototypeOf,
          v = m && m(m(z([])));
        v && v !== t && r.call(v, o) && (f = v);
        var b = (g.prototype = p.prototype = Object.create(f));
        function x(e) {
          ['next', 'throw', 'return'].forEach(function (t) {
            s(e, t, function (e) {
              return this._invoke(t, e);
            });
          });
        }
        function y(e, t) {
          var n;
          this._invoke = function (o, i) {
            function a() {
              return new t(function (n, a) {
                !(function n(o, i, a, s) {
                  var c = u(e[o], e, i);
                  if ('throw' !== c.type) {
                    var d = c.arg,
                      p = d.value;
                    return p && 'object' == l(p) && r.call(p, '__await')
                      ? t.resolve(p.__await).then(
                          function (e) {
                            n('next', e, a, s);
                          },
                          function (e) {
                            n('throw', e, a, s);
                          }
                        )
                      : t.resolve(p).then(
                          function (e) {
                            (d.value = e), a(d);
                          },
                          function (e) {
                            return n('throw', e, a, s);
                          }
                        );
                  }
                  s(c.arg);
                })(o, i, n, a);
              });
            }
            return (n = n ? n.then(a, a) : a());
          };
        }
        function w(e) {
          var t = { tryLoc: e[0] };
          1 in e && (t.catchLoc = e[1]),
            2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])),
            this.tryEntries.push(t);
        }
        function k(e) {
          var t = e.completion || {};
          (t.type = 'normal'), delete t.arg, (e.completion = t);
        }
        function S(e) {
          (this.tryEntries = [{ tryLoc: 'root' }]),
            e.forEach(w, this),
            this.reset(!0);
        }
        function z(e) {
          if (e) {
            var t = e[o];
            if (t) return t.call(e);
            if ('function' == typeof e.next) return e;
            if (!isNaN(e.length)) {
              var n = -1,
                i = function t() {
                  for (; ++n < e.length; )
                    if (r.call(e, n)) return (t.value = e[n]), (t.done = !1), t;
                  return (t.value = void 0), (t.done = !0), t;
                };
              return (i.next = i);
            }
          }
          return { next: C };
        }
        function C() {
          return { value: void 0, done: !0 };
        }
        return (
          (h.prototype = g),
          s(b, 'constructor', g),
          s(g, 'constructor', h),
          (h.displayName = s(g, a, 'GeneratorFunction')),
          (e.isGeneratorFunction = function (e) {
            var t = 'function' == typeof e && e.constructor;
            return (
              !!t &&
              (t === h || 'GeneratorFunction' === (t.displayName || t.name))
            );
          }),
          (e.mark = function (e) {
            return (
              Object.setPrototypeOf
                ? Object.setPrototypeOf(e, g)
                : ((e.__proto__ = g), s(e, a, 'GeneratorFunction')),
              (e.prototype = Object.create(b)),
              e
            );
          }),
          (e.awrap = function (e) {
            return { __await: e };
          }),
          x(y.prototype),
          s(y.prototype, i, function () {
            return this;
          }),
          (e.AsyncIterator = y),
          (e.async = function (t, r, n, o, i) {
            void 0 === i && (i = Promise);
            var a = new y(c(t, r, n, o), i);
            return e.isGeneratorFunction(r)
              ? a
              : a.next().then(function (e) {
                  return e.done ? e.value : a.next();
                });
          }),
          x(b),
          s(b, a, 'Generator'),
          s(b, o, function () {
            return this;
          }),
          s(b, 'toString', function () {
            return '[object Generator]';
          }),
          (e.keys = function (e) {
            var t = [];
            for (var r in e) t.push(r);
            return (
              t.reverse(),
              function r() {
                for (; t.length; ) {
                  var n = t.pop();
                  if (n in e) return (r.value = n), (r.done = !1), r;
                }
                return (r.done = !0), r;
              }
            );
          }),
          (e.values = z),
          (S.prototype = {
            constructor: S,
            reset: function (e) {
              if (
                ((this.prev = 0),
                (this.next = 0),
                (this.sent = this._sent = void 0),
                (this.done = !1),
                (this.delegate = null),
                (this.method = 'next'),
                (this.arg = void 0),
                this.tryEntries.forEach(k),
                !e)
              )
                for (var t in this)
                  't' === t.charAt(0) &&
                    r.call(this, t) &&
                    !isNaN(+t.slice(1)) &&
                    (this[t] = void 0);
            },
            stop: function () {
              this.done = !0;
              var e = this.tryEntries[0].completion;
              if ('throw' === e.type) throw e.arg;
              return this.rval;
            },
            dispatchException: function (e) {
              if (this.done) throw e;
              var t = this;
              function n(r, n) {
                return (
                  (a.type = 'throw'),
                  (a.arg = e),
                  (t.next = r),
                  n && ((t.method = 'next'), (t.arg = void 0)),
                  !!n
                );
              }
              for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                var i = this.tryEntries[o],
                  a = i.completion;
                if ('root' === i.tryLoc) return n('end');
                if (i.tryLoc <= this.prev) {
                  var s = r.call(i, 'catchLoc'),
                    l = r.call(i, 'finallyLoc');
                  if (s && l) {
                    if (this.prev < i.catchLoc) return n(i.catchLoc, !0);
                    if (this.prev < i.finallyLoc) return n(i.finallyLoc);
                  } else if (s) {
                    if (this.prev < i.catchLoc) return n(i.catchLoc, !0);
                  } else {
                    if (!l)
                      throw Error('try statement without catch or finally');
                    if (this.prev < i.finallyLoc) return n(i.finallyLoc);
                  }
                }
              }
            },
            abrupt: function (e, t) {
              for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                var o = this.tryEntries[n];
                if (
                  o.tryLoc <= this.prev &&
                  r.call(o, 'finallyLoc') &&
                  this.prev < o.finallyLoc
                ) {
                  var i = o;
                  break;
                }
              }
              i &&
                ('break' === e || 'continue' === e) &&
                i.tryLoc <= t &&
                t <= i.finallyLoc &&
                (i = null);
              var a = i ? i.completion : {};
              return (
                (a.type = e),
                (a.arg = t),
                i
                  ? ((this.method = 'next'), (this.next = i.finallyLoc), d)
                  : this.complete(a)
              );
            },
            complete: function (e, t) {
              if ('throw' === e.type) throw e.arg;
              return (
                'break' === e.type || 'continue' === e.type
                  ? (this.next = e.arg)
                  : 'return' === e.type
                  ? ((this.rval = this.arg = e.arg),
                    (this.method = 'return'),
                    (this.next = 'end'))
                  : 'normal' === e.type && t && (this.next = t),
                d
              );
            },
            finish: function (e) {
              for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var r = this.tryEntries[t];
                if (r.finallyLoc === e)
                  return this.complete(r.completion, r.afterLoc), k(r), d;
              }
            },
            catch: function (e) {
              for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var r = this.tryEntries[t];
                if (r.tryLoc === e) {
                  var n = r.completion;
                  if ('throw' === n.type) {
                    var o = n.arg;
                    k(r);
                  }
                  return o;
                }
              }
              throw Error('illegal catch attempt');
            },
            delegateYield: function (e, t, r) {
              return (
                (this.delegate = { iterator: z(e), resultName: t, nextLoc: r }),
                'next' === this.method && (this.arg = void 0),
                d
              );
            },
          }),
          e
        );
      }
      let ex = function (e) {
        if (document.body === e)
          return window.innerWidth - document.documentElement.clientWidth;
        var t = window.getComputedStyle(e),
          r = t.borderRightWidth,
          n = t.borderLeftWidth,
          o = n ? parseInt(n, 10) : 0,
          i = r ? parseInt(r, 10) : 0;
        return e.offsetWidth - e.clientWidth - o - i;
      };
      var ey =
        'undefined' != typeof window ? n().useLayoutEffect : n().useEffect;
      function ew(e) {
        var r =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
          n = (0, t.useRef)(function () {
            G(
              '[useEventCallback]: Cannot call an event handler while rendering.'
            );
          });
        return (
          ey(
            function () {
              n.current = e;
            },
            [e].concat(
              (function (e) {
                if (Array.isArray(e)) return el(e);
              })(r) ||
                (function (e) {
                  if (
                    ('undefined' != typeof Symbol &&
                      null != e[Symbol.iterator]) ||
                    null != e['@@iterator']
                  )
                    return Array.from(e);
                })(r) ||
                ec(r) ||
                (function () {
                  throw TypeError(
                    'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
                  );
                })()
            )
          ),
          (0, t.useCallback)(
            function () {
              return n.current.apply(void 0, arguments);
            },
            [n]
          )
        );
      }
      var ek = [
          'direction',
          'stepIndex',
          'itemIndex',
          'equalNum',
          'gutter',
          'offset',
          'duration',
          'onStepsChange',
          'children',
          'onTransitionEnd',
          'styles',
          'defaultIndex',
          'enableDiffChildren',
          'transitionStatus',
        ],
        eS = { panel: '' },
        ez = s(function (r, s) {
          var l,
            c,
            u,
            d,
            p,
            h,
            g,
            f,
            m,
            v,
            b,
            x,
            y,
            w,
            k,
            S,
            z,
            C,
            I,
            L,
            R,
            B,
            E,
            O,
            P,
            T,
            M,
            F,
            _,
            j,
            H,
            N,
            q,
            U,
            V,
            Z,
            Y,
            Q,
            K,
            J,
            X,
            ee,
            et,
            er,
            en,
            ei,
            ea,
            el,
            ec,
            ex,
            ey,
            ew,
            ez,
            eC,
            eI,
            eL,
            eR,
            eB,
            eE,
            eO,
            eP,
            eT,
            eM,
            eF,
            e_,
            ej = r.direction,
            eH = void 0 === ej ? 'horizontal' : ej,
            eA =
              (r.stepIndex,
              r.itemIndex,
              r.equalNum,
              r.gutter,
              r.offset,
              r.duration,
              r.onStepsChange,
              r.children,
              r.onTransitionEnd),
            eW = r.styles,
            eN = (r.defaultIndex, r.enableDiffChildren, r.transitionStatus),
            eD = a(r, ek),
            eq = W('swipe', eS, eW),
            eG = (0, t.useRef)(null),
            eU = n().useMemo(
              function () {
                return null == eG && null == s
                  ? null
                  : function (e) {
                      o(eG, e), o(s, e);
                    };
              },
              [l, eG, s]
            ),
            e$ =
              ((c = r.defaultIndex),
              (d = void 0 === (u = r.itemIndex) ? -1 : u),
              (h = void 0 === (p = r.direction) ? 'horizontal' : p),
              (f = void 0 === (g = r.stepIndex) ? -1 : g),
              (v = void 0 === (m = r.offset) ? -1 : m),
              (b = r.equalNum),
              (x = r.gutter),
              (y = r.onStepsChange),
              (w = r.children),
              (k = r.transitionStatus),
              (S = r.enableDiffChildren),
              (z = (0, t.useRef)()),
              (C = 'horizontal' === h),
              (I = eu((0, t.useState)(0), 2)[1]),
              (L = (0, t.useCallback)(function () {
                I(function (e) {
                  return e + 1;
                });
              }, [])),
              (R = (0, t.useRef)(!1)),
              (B = function () {
                z.current && y && y(z.current), (R.current = !0), L();
              }),
              (E = function (e, t) {
                if ((b && b >= e.length) || e.length <= 1) {
                  (z.current = ed()), B();
                  return;
                }
                var r,
                  n,
                  o,
                  i,
                  a,
                  s,
                  l,
                  u,
                  p,
                  g,
                  m,
                  v,
                  x,
                  y,
                  w,
                  k,
                  S,
                  I,
                  L,
                  R,
                  E,
                  O,
                  P,
                  T,
                  M,
                  F,
                  _,
                  j,
                  H,
                  A,
                  W,
                  N,
                  D,
                  q,
                  G = em(e, C),
                  U = C ? t.width : t.height;
                if (G <= U) {
                  (z.current = ed()), B();
                  return;
                }
                (i = (r = {
                  items: e,
                  containerSize: U,
                  direction: h,
                  stepIndex: f,
                  itemIndex: d,
                  defaultIndex: c,
                }).items),
                  (a = r.containerSize),
                  (s = r.direction),
                  (l = r.stepIndex),
                  (u = r.itemIndex),
                  (g = void 0 === (p = r.defaultIndex) ? 0 : p),
                  (x = (v = (function (e, t, r) {
                    var n =
                        arguments.length > 3 && void 0 !== arguments[3]
                          ? arguments[3]
                          : 0,
                      o = [],
                      i = [],
                      a = [],
                      s = [],
                      l = r ? 'left' : 'top',
                      c = r ? 'right' : 'bottom',
                      u = e[0][l],
                      d = e[e.length - 1][c],
                      p = u + t,
                      h = 0;
                    if ((a.push(0), d - u < t))
                      return {
                        itemSteps: o,
                        reverseItemSteps: i,
                        positionSteps: a,
                        reverseSteps: s,
                        defaultStepIndex: h,
                      };
                    for (var g = 0, f = e.length; g < f; g++) {
                      var m = e[g],
                        v = m[c],
                        b = m[l];
                      if (v > p) {
                        p = b + t;
                        var x = b - u;
                        a.push(x);
                      }
                      g === n && (h = a.length - 1), o.push(a.length - 1);
                    }
                    if (d - (a[a.length - 1] + u) < t) {
                      a.pop();
                      var y = d - u - t;
                      a.push(y), (p = d - t), s.push(y);
                      for (var w = e.length - 1; w >= 0; w--) {
                        var k = e[w],
                          S = k[c];
                        if (k[l] < p) {
                          p = S - t;
                          var z = S - u - t;
                          s.push(z);
                        }
                        i.push(s.length - 1);
                      }
                      s.pop(),
                        s.push(0),
                        s.sort(function (e, t) {
                          return e - t;
                        });
                    }
                    return {
                      itemSteps: o,
                      reverseItemSteps: i,
                      positionSteps: a,
                      reverseSteps: s,
                      defaultStepIndex: h,
                    };
                  })(i, a, (m = 'horizontal' === s), g)).itemSteps),
                  (y = v.reverseItemSteps),
                  (w = v.positionSteps),
                  (k = v.reverseSteps),
                  (S = v.defaultStepIndex),
                  (I = w[w.length - 1]),
                  (L = m ? 'left' : 'top'),
                  (R = i[0][L]),
                  (E = []),
                  (O = !0),
                  i.forEach(function (e) {
                    var t = e[L] - R;
                    t <= I && (E.push(t), t === I && (O = !1));
                  }),
                  O && E.push(I),
                  (P = 0),
                  (T = 0),
                  (n = w),
                  (o = x),
                  (M = l >= 0 ? l : S),
                  (T = n[n.length - 1]),
                  (F = M + 1),
                  (_ = M - 1),
                  (H = (j = u >= 0 ? u : g) - 1),
                  (A = j + 1),
                  (W = function () {
                    for (var e = 0, t = E.length; e < t; e++) {
                      var r = itemOffsets[e];
                      if (r === P) {
                        (A = (j = e) + 1), (H = j - 1);
                        break;
                      }
                      if (r > P) {
                        (H = (A = e) - 1), (j = e);
                        break;
                      }
                    }
                  }),
                  (N = function () {
                    for (var e = 0, t = n.length; e < t; e++) {
                      var r = n[e];
                      if (r === P) {
                        (F = (M = e) + 1), (_ = M - 1);
                        break;
                      }
                      if (r > P) {
                        (_ = (F = e) - 1), (M = e);
                        break;
                      }
                    }
                  }),
                  (D = function () {
                    k.length && M === o.length - 1
                      ? ((n = k), (o = y))
                      : k.length && M <= 0 && ((n = w), (o = x)),
                      (_ = M - 1),
                      (F = M + 1),
                      (P = n[M]),
                      W();
                  }),
                  (q = function () {
                    (H = j - 1), (A = j + 1), (P = itemOffsets[j]), N();
                  }),
                  D(),
                  (z.current = {
                    get index() {
                      return M;
                    },
                    get itemIndex() {
                      return j;
                    },
                    get hasNext() {
                      return void 0 !== n[F];
                    },
                    get hasPrev() {
                      return void 0 !== n[_];
                    },
                    get hasNextItem() {
                      return void 0 !== itemOffsets[A];
                    },
                    get hasPrevItem() {
                      return void 0 !== itemOffsets[H];
                    },
                    get size() {
                      return n.length;
                    },
                    get itemSize() {
                      return E.length;
                    },
                    get offset() {
                      return P;
                    },
                    get maxOffset() {
                      return T;
                    },
                    get direction() {
                      return s;
                    },
                    prevItem: function () {
                      this.hasPrevItem && ((j = H), q());
                    },
                    nextItem: function () {
                      this.hasNextItem && ((j = A), q());
                    },
                    goToItem: function (e) {
                      this.hasItem(e) && ((j = e), q());
                    },
                    next: function () {
                      this.hasNext && ((M = F), D());
                    },
                    prev: function () {
                      this.hasPrev && ((M = _), D());
                    },
                    goTo: function (e) {
                      this.hasStep(e) && ((M = e), D());
                    },
                    hasItem: function (e) {
                      return void 0 !== itemOffsets[e];
                    },
                    hasStep: function (e) {
                      return void 0 !== n[e];
                    },
                    getItemOffset: function (e) {
                      return itemOffsets[e];
                    },
                    getItemStep: function (e) {
                      return o[e] || 0;
                    },
                    getStepOffset: function (e) {
                      return n[e];
                    },
                    updateOffset: function (e) {
                      e > T || e < 0 || ((P = e), W(), N());
                    },
                  }),
                  B();
              }),
              (eO = ((P = (O = {
                children: w,
                direction: h,
                equalNum: b,
                gutter: x,
                onRectChange: E,
                containerRef: eG,
                enableDiffChildren: S,
              }).containerRef),
              (M = void 0 === (T = O.direction) ? 'horizontal' : T),
              (F = O.equalNum),
              (_ = O.children),
              (j = O.gutter),
              (H = O.duration),
              (q = void 0 !== (N = O.loop) && N),
              (V = void 0 !== (U = O.enableDiffChildren) && U),
              (Z = O.onRectChange),
              (Q = (Y = (0, t.useMemo)(
                function () {
                  var e = [];
                  return (
                    t.Children.forEach(_, function (r) {
                      (0, t.isValidElement)(r) && e.push(r);
                    }),
                    e
                  );
                },
                [_]
              )).length),
              (K = {
                status: 'init',
                children: Y,
                cloneNum: 0,
                equalNum: F,
                gutter: j,
                direction: M,
              }),
              (J = A()),
              (X = H || J.transition.spec.duration.slow),
              (et = (ee = eu((0, t.useState)(K), 2))[0]),
              (er = ee[1]),
              (et.equalNum !== F ||
                et.gutter !== j ||
                et.direction !== M ||
                et.children.length !== Y.length ||
                (V && !(0, ep.shallowEqualArrays)(et.children, Y))) &&
                er(K),
              (en = function (t) {
                er(function (r) {
                  return e({}, r, t);
                });
              }),
              (ei = 'horizontal' === et.direction),
              (ea = V ? et.children : Y),
              (ec = (el = (0, t.useMemo)(
                function () {
                  return 'init' !== et.status && et.containerRect
                    ? (function (r) {
                        var n =
                            arguments.length > 1 && void 0 !== arguments[1]
                              ? arguments[1]
                              : {},
                          o =
                            arguments.length > 2 && void 0 !== arguments[2]
                              ? arguments[2]
                              : 0,
                          s = [],
                          l = [],
                          c = [],
                          u = [];
                        t.Children.forEach(r, function (r) {
                          var o = r.props,
                            l = o.style,
                            d = a(o, eh),
                            p = (0, t.createRef)(),
                            h = i(r.ref, p),
                            g = e({}, l, n);
                          s.push(p),
                            u.push(r.ref),
                            c.push(
                              (0, t.cloneElement)(
                                r,
                                e({}, d, {
                                  key: null !== r.key ? r.key : c.length,
                                  style: g,
                                  ref: h,
                                })
                              )
                            );
                        });
                        var d = o,
                          p = c.length;
                        if (d > p && p > 0)
                          for (; d > p; ) (d -= p), ev(c, p, u, l);
                        return (
                          d > 0 && ev(c, d, u, l),
                          { refs: s, cloneRefs: l, nodes: c }
                        );
                      })(
                        ea,
                        (function (e, t, r) {
                          var n =
                              arguments.length > 3 && void 0 !== arguments[3]
                                ? arguments[3]
                                : 0,
                            o = {};
                          return (
                            r && t && e
                              ? ((o.width = (t.width - n * (r - 1)) / r),
                                n && (o.marginRight = n))
                              : r &&
                                t &&
                                ((o.height = (t.height - n * (r - 1)) / r),
                                n && (o.marginBottom = n)),
                            o
                          );
                        })(ei, et.containerRect, et.equalNum, et.gutter),
                        et.cloneNum
                      )
                    : { nodes: et.children, refs: [], cloneRefs: [] };
                },
                [
                  et.status,
                  et.containerRect,
                  et.equalNum,
                  et.gutter,
                  et.cloneNum,
                  et.children,
                  ei,
                  ea,
                ]
              )).nodes),
              (ex = el.refs),
              (ey = el.cloneRefs),
              (ew = (0, t.useRef)(!0)),
              (ez = function (e) {
                if (((ew.current = !0), q && !et.equalNum))
                  return void en({
                    status: 'clone_init',
                    cloneNum: 0,
                    containerRect: e,
                  });
                var t = 0;
                q && et.equalNum && Q > et.equalNum && (t = 3 * et.equalNum),
                  en({ status: 'done', cloneNum: t, containerRect: e });
              }),
              (eC = function () {
                var e = eg(ex),
                  t = ei ? et.containerRect.width : et.containerRect.height,
                  r = em(e, ei),
                  n = 0,
                  o = 3 * t;
                if (r < o) {
                  var i = Math.floor(o / r);
                  n = i * e.length + ef(e, ei, o - r * i);
                } else n = ef(e, ei, o);
                en({
                  status: 'done',
                  cloneNum: n,
                  containerRect: et.containerRect,
                });
              }),
              (eI = function () {
                var e;
                if ((P.current && (e = P.current.getBoundingClientRect()), !e))
                  return void G('[Swipe]: get container fail.');
                ez(e);
              }),
              (eL = (0, t.useContext)(eo)),
              (eR = $(
                eb().mark(function e() {
                  var t, r;
                  return eb().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if (
                            ((t = et.containerRect),
                            P.current &&
                              (r = P.current.getBoundingClientRect()),
                            r)
                          ) {
                            e.next = 5;
                            break;
                          }
                          return (
                            G(
                              '[Swipe]: get container fail when window is resized.'
                            ),
                            e.abrupt('return')
                          );
                        case 5:
                          var n, o;
                          if (
                            ((n = t),
                            (o = r),
                            !n ||
                              !o ||
                              n.width !== o.width ||
                              n.height !== o.height)
                          ) {
                            e.next = 7;
                            break;
                          }
                          return e.abrupt('return');
                        case 7:
                          ez(r);
                        case 8:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                })
              )),
              (eB = function () {
                return eR.apply(this, arguments);
              }),
              (0, t.useEffect)(function () {
                if ('init' === et.status) eI();
                else if ('clone_init' === et.status) eC();
                else if ('done' === et.status && ew.current) {
                  ew.current = !1;
                  var e = [];
                  ex.forEach(function (t) {
                    t.current && t.current.getBoundingClientRect && e.push(t);
                  }),
                    e.length !== ex.length &&
                      G(
                        '[Swipe]: please check `children`, it should be `React.ReactElement[]` and supports ref.'
                      );
                  var t = eg(e),
                    r = eg(ey);
                  Z(t, et.containerRect, r);
                }
                return (
                  eL.resizeCheckFns.add(eB),
                  function () {
                    eL.resizeCheckFns.delete(eB);
                  }
                );
              }),
              (eE = {
                finalDuration: X,
                state: et,
                shouldUpdateContainer: eB,
                nodes: ec,
              })).nodes),
              (eP = eE.finalDuration),
              (eT = 0),
              (eM = k || 'on'),
              v >= 0
                ? ((eT = v), (eM = k || 'off'))
                : z.current && d >= 0
                ? (eT = z.current.getItemOffset(d))
                : z.current && f >= 0 && (eT = z.current.getStepOffset(f)),
              R.current && (eM = 'off'),
              (eF = C ? ''.concat(-eT, 'px, 0') : '0, '.concat(-eT, 'px')),
              (e_ = (0, t.useMemo)(
                function () {
                  return { transform: 'translate('.concat(eF, ')') };
                },
                [eF]
              )),
              (R.current = !1),
              {
                finalDuration: eP,
                panelStyle: e_,
                nodes: eO,
                transitionStatus: eM,
                handleRectChange: E,
                finalOffset: eT,
              }),
            eV = e$.nodes,
            eZ = e$.panelStyle,
            eY = e$.transitionStatus,
            eQ = e$.finalDuration,
            eK = (0, t.useMemo)(
              function () {
                return eq.panel.style ? e({}, eq.panel.style, eZ) : eZ;
              },
              [eq.panel.style, eZ]
            );
          return n().createElement(
            D,
            e({ $direction: eH }, eD, { ref: eU }),
            n().createElement(
              es,
              {
                className: eq.panel.className,
                $duration: eQ,
                $transition: eN || eY,
                onTransitionEnd: eA,
                style: eK,
                $direction: eH,
              },
              eV
            )
          );
        });
      (ez.useSwipe = function () {
        var r,
          n = eu(
            (0, t.useState)({
              itemIndex: 0,
              stepIndex: 0,
              offset: 0,
              hasNext: !1,
              hasPrev: !1,
              stepSize: 0,
              hasNextItem: !1,
              hasPrevItem: !1,
              itemSize: 0,
              transitionStatus: 'off',
            }),
            2
          ),
          o = n[0],
          i = n[1],
          a = eu((0, t.useState)(!1), 2),
          s = a[0],
          l = a[1],
          c = (0, t.useRef)(),
          u = function (e) {
            var t = c.current,
              r = t.index;
            i({
              hasNext: t.hasNext,
              hasPrev: t.hasPrev,
              stepIndex: r,
              stepSize: t.size,
              offset: e,
              itemIndex: t.itemIndex,
              hasNextItem: t.hasNextItem,
              hasPrevItem: t.hasPrevItem,
              itemSize: t.itemSize,
              transitionStatus: 'on',
            });
          },
          d = (0, t.useRef)(!0),
          p = ew(function (e) {
            c.current = e;
            var t = {
              transitionStatus: 'off',
              stepIndex: d.current ? e.index : o.stepIndex,
              stepSize: e.size,
              hasNext: e.hasNext,
              hasPrev: e.hasPrev,
              itemIndex: d.current ? e.itemIndex : o.itemIndex,
              hasNextItem: e.hasNextItem,
              hasPrevItem: e.hasPrevItem,
              itemSize: e.itemSize,
              offset: e.offset,
            };
            (d.current = !1),
              void 0 !== t.stepIndex &&
                t.stepIndex >= e.size &&
                (t.stepIndex = e.size - 1),
              (0, ep.shallowEqualObjects)(o, t) || i(t);
          }),
          h = ew(function () {
            var e = c.current;
            e && (e.prev(), u());
          }),
          g = ew(function () {
            var e = c.current;
            e && (e.next(), u());
          }),
          f = ew(function (e) {
            var t = c.current;
            t && t.hasStep(e) && (t.goTo(e), u());
          }),
          m = ew(function () {
            var e = c.current;
            e && (e.prevItem(), u());
          }),
          v = ew(function () {
            var e = c.current;
            e && (e.nextItem(), u());
          }),
          b = ew(function (e) {
            var t = c.current;
            t && t.hasItem(e) && (t.goToItem(e), u());
          }),
          x = ew(function (e) {
            var t = c.current;
            if (t && s) {
              var r = 'horizontal' === t.direction ? e.deltaX : e.deltaY,
                n = (o.offset || t.offset) + r;
              n < 0 || n > t.maxOffset || (t.updateOffset(n), u(n));
            }
          }),
          y = (0, t.useCallback)(function () {
            l(!0);
          }, []),
          w = (0, t.useCallback)(function () {
            l(!1);
          }, []);
        return (
          (0, t.useEffect)(
            function () {
              var e = document.body,
                t =
                  document.body === e
                    ? window.innerWidth > document.documentElement.clientWidth
                    : e.scrollHeight > e.clientHeight,
                r = ex(e),
                n = window.getComputedStyle(e).paddingRight,
                o = n ? parseInt(n, 10) : 0,
                i = e.style,
                a = i.paddingRight,
                l = i.overflow;
              if (s && t)
                return (
                  (e.style.paddingRight = ''.concat(o + r, 'px')),
                  (e.style.overflow = 'hidden'),
                  function () {
                    (e.style.overflow = l), (e.style.paddingRight = a);
                  }
                );
            },
            [s, r]
          ),
          e({}, o, {
            manager: c.current,
            getItemStep: function (e) {
              var t = c.current;
              return t ? t.getItemStep(e) : 0;
            },
            onStepsChange: p,
            onNext: g,
            onPrev: h,
            onGoTo: f,
            onItemNext: v,
            onItemPrev: m,
            onItemGoTo: b,
            onWheel: x,
            onWheelActive: y,
            onWheelDisable: w,
          })
        );
      }),
        (window.Swipe = ez);
    })(),
    ((globalHandle = void 0 === globalHandle ? {} : globalHandle).main = {});
})();
