(function (t) {
  function e(e) {
    for (
      var s, a, r = e[0], l = e[1], c = e[2], u = 0, d = [];
      u < r.length;
      u++
    )
      (a = r[u]),
        Object.prototype.hasOwnProperty.call(n, a) && n[a] && d.push(n[a][0]),
        (n[a] = 0);
    for (s in l) Object.prototype.hasOwnProperty.call(l, s) && (t[s] = l[s]);
    h && h(e);
    while (d.length) d.shift()();
    return o.push.apply(o, c || []), i();
  }
  function i() {
    for (var t, e = 0; e < o.length; e++) {
      for (var i = o[e], s = !0, a = 1; a < i.length; a++) {
        var r = i[a];
        0 !== n[r] && (s = !1);
      }
      s && (o.splice(e--, 1), (t = l((l.s = i[0]))));
    }
    return t;
  }
  var s = {},
    a = { app: 0 },
    n = { app: 0 },
    o = [];
  function r(t) {
    return (
      l.p +
      "js/" +
      ({}[t] || t) +
      "." +
      {
        "chunk-054a0638": "539e63e0",
        "chunk-2bc2cb16": "66ef8601",
        "chunk-2d2250de": "0271e94c",
        "chunk-3141b22c": "e208b605",
        "chunk-4dab67cb": "78097bf0",
        "chunk-62660a3c": "e1c99bf6",
        "chunk-779844b4": "df18e49b",
        "chunk-3d221c51": "b581dbb2",
        "chunk-a4a2e1ec": "4eb45a16",
        "chunk-7cb2a116": "923e77a3",
        "chunk-8dff10fe": "27727cab",
        "chunk-8f531b32": "d805551c",
        "chunk-a22893d4": "7e5836c8",
        "chunk-e7e4b6d8": "43c71b24",
        "chunk-f8c6f9be": "11fa3cf3",
      }[t] +
      ".js"
    );
  }
  function l(e) {
    if (s[e]) return s[e].exports;
    var i = (s[e] = { i: e, l: !1, exports: {} });
    return t[e].call(i.exports, i, i.exports, l), (i.l = !0), i.exports;
  }
  (l.e = function (t) {
    var e = [],
      i = {
        "chunk-054a0638": 1,
        "chunk-2bc2cb16": 1,
        "chunk-3141b22c": 1,
        "chunk-4dab67cb": 1,
        "chunk-62660a3c": 1,
        "chunk-779844b4": 1,
        "chunk-3d221c51": 1,
        "chunk-a4a2e1ec": 1,
        "chunk-7cb2a116": 1,
        "chunk-8dff10fe": 1,
        "chunk-8f531b32": 1,
        "chunk-a22893d4": 1,
        "chunk-e7e4b6d8": 1,
        "chunk-f8c6f9be": 1,
      };
    a[t]
      ? e.push(a[t])
      : 0 !== a[t] &&
        i[t] &&
        e.push(
          (a[t] = new Promise(function (e, i) {
            for (
              var s =
                  "css/" +
                  ({}[t] || t) +
                  "." +
                  {
                    "chunk-054a0638": "6006950b",
                    "chunk-2bc2cb16": "7fa20778",
                    "chunk-2d2250de": "31d6cfe0",
                    "chunk-3141b22c": "bb49019c",
                    "chunk-4dab67cb": "fde44895",
                    "chunk-62660a3c": "d1c350e4",
                    "chunk-779844b4": "8d64a14a",
                    "chunk-3d221c51": "901ed90d",
                    "chunk-a4a2e1ec": "116d3ab7",
                    "chunk-7cb2a116": "1a472609",
                    "chunk-8dff10fe": "35a72e3a",
                    "chunk-8f531b32": "cac5a498",
                    "chunk-a22893d4": "27bdbd53",
                    "chunk-e7e4b6d8": "27aa2ab0",
                    "chunk-f8c6f9be": "474e355f",
                  }[t] +
                  ".css",
                n = l.p + s,
                o = document.getElementsByTagName("link"),
                r = 0;
              r < o.length;
              r++
            ) {
              var c = o[r],
                u = c.getAttribute("data-href") || c.getAttribute("href");
              if ("stylesheet" === c.rel && (u === s || u === n)) return e();
            }
            var d = document.getElementsByTagName("style");
            for (r = 0; r < d.length; r++) {
              (c = d[r]), (u = c.getAttribute("data-href"));
              if (u === s || u === n) return e();
            }
            var h = document.createElement("link");
            (h.rel = "stylesheet"),
              (h.type = "text/css"),
              (h.onload = e),
              (h.onerror = function (e) {
                var s = (e && e.target && e.target.src) || n,
                  o = new Error(
                    "Loading CSS chunk " + t + " failed.\n(" + s + ")"
                  );
                (o.code = "CSS_CHUNK_LOAD_FAILED"),
                  (o.request = s),
                  delete a[t],
                  h.parentNode.removeChild(h),
                  i(o);
              }),
              (h.href = n);
            var p = document.getElementsByTagName("head")[0];
            p.appendChild(h);
          }).then(function () {
            a[t] = 0;
          }))
        );
    var s = n[t];
    if (0 !== s)
      if (s) e.push(s[2]);
      else {
        var o = new Promise(function (e, i) {
          s = n[t] = [e, i];
        });
        e.push((s[2] = o));
        var c,
          u = document.createElement("script");
        (u.charset = "utf-8"),
          (u.timeout = 120),
          l.nc && u.setAttribute("nonce", l.nc),
          (u.src = r(t));
        var d = new Error();
        c = function (e) {
          (u.onerror = u.onload = null), clearTimeout(h);
          var i = n[t];
          if (0 !== i) {
            if (i) {
              var s = e && ("load" === e.type ? "missing" : e.type),
                a = e && e.target && e.target.src;
              (d.message =
                "Loading chunk " + t + " failed.\n(" + s + ": " + a + ")"),
                (d.name = "ChunkLoadError"),
                (d.type = s),
                (d.request = a),
                i[1](d);
            }
            n[t] = void 0;
          }
        };
        var h = setTimeout(function () {
          c({ type: "timeout", target: u });
        }, 12e4);
        (u.onerror = u.onload = c), document.head.appendChild(u);
      }
    return Promise.all(e);
  }),
    (l.m = t),
    (l.c = s),
    (l.d = function (t, e, i) {
      l.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: i });
    }),
    (l.r = function (t) {
      "undefined" !== typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(t, "__esModule", { value: !0 });
    }),
    (l.t = function (t, e) {
      if ((1 & e && (t = l(t)), 8 & e)) return t;
      if (4 & e && "object" === typeof t && t && t.__esModule) return t;
      var i = Object.create(null);
      if (
        (l.r(i),
        Object.defineProperty(i, "default", { enumerable: !0, value: t }),
        2 & e && "string" != typeof t)
      )
        for (var s in t)
          l.d(
            i,
            s,
            function (e) {
              return t[e];
            }.bind(null, s)
          );
      return i;
    }),
    (l.n = function (t) {
      var e =
        t && t.__esModule
          ? function () {
              return t["default"];
            }
          : function () {
              return t;
            };
      return l.d(e, "a", e), e;
    }),
    (l.o = function (t, e) {
      return Object.prototype.hasOwnProperty.call(t, e);
    }),
    (l.p = "/"),
    (l.oe = function (t) {
      throw (console.error(t), t);
    });
  var c = (window["webpackJsonp"] = window["webpackJsonp"] || []),
    u = c.push.bind(c);
  (c.push = e), (c = c.slice());
  for (var d = 0; d < c.length; d++) e(c[d]);
  var h = u;
  o.push([0, "chunk-vendors"]), i();
})({
  0: function (t, e, i) {
    t.exports = i("56d7");
  },
  "0136": function (t, e, i) {},
  "0194": function (t, e, i) {},
  "03ce": function (t, e, i) {},
  "0b10": function (t, e, i) {
    "use strict";
    i("ee04");
  },
  "0f2c": function (t, e, i) {},
  "18fd": function (t, e, i) {
    "use strict";
    var s = function () {
        var t = this,
          e = t._self._c;
        return e("div", { staticClass: "songs-list-main" }, [
          e("div", { staticClass: "list-header flex" }, [
            e("div", { staticClass: "columnIndex" }, [t._v("序号")]),
            e("div", { staticClass: "columnSong" }, [t._v("歌曲")]),
            e("div", { staticClass: "columnSinger" }, [t._v("歌手")]),
            "mini" !== t.typeSize
              ? e("div", { staticClass: "columnAlbum" }, [t._v("专辑")])
              : t._e(),
            e("div", { staticClass: "columnTime" }, [t._v("时长")]),
          ]),
          e(
            "div",
            {
              ref: "curSongRef",
              staticClass: "list-scroll",
              style: { height: t.height + "px" },
            },
            [
              e(
                "div",
                { staticClass: "list-main", style: t.curSongSty },
                t._l(t.list, function (i, s) {
                  return e(
                    "div",
                    {
                      key: i.id,
                      class: t.isCurSong(i, s),
                      on: {
                        click: function (e) {
                          return e.stopPropagation(), t.tips(e, i);
                        },
                      },
                    },
                    [
                      e("div", { staticClass: "columnIndex" }, [
                        e("span", { staticClass: "songlist-index" }, [
                          t._v(t._s(t.indexMethod(s))),
                        ]),
                        t._m(0, !0),
                        e("i", {
                          class: t.playIcon(i),
                          on: {
                            click: function (e) {
                              return t.currentSong(i);
                            },
                          },
                        }),
                      ]),
                      e(
                        "div",
                        { staticClass: "columnSong songlist-name" },
                        [
                          e(
                            "router-link",
                            {
                              class: t.typeSize,
                              attrs: {
                                to: { path: "/song", query: { id: i.id } },
                              },
                            },
                            [t._v(" " + t._s(i.name) + " ")]
                          ),
                          "mini" !== t.typeSize
                            ? [
                                i.mvId
                                  ? e(
                                      "router-link",
                                      {
                                        staticClass: "mv-name",
                                        attrs: {
                                          to: {
                                            path: "/mv",
                                            query: { id: i.mvId },
                                          },
                                        },
                                      },
                                      [
                                        e("i", {
                                          staticClass: "iconfont icon-video",
                                        }),
                                      ]
                                    )
                                  : t._e(),
                                i.vip
                                  ? e("i", { staticClass: "iconfont icon-vip" })
                                  : t._e(),
                              ]
                            : t._e(),
                        ],
                        2
                      ),
                      e(
                        "div",
                        { staticClass: "columnSinger songlist-singer" },
                        t._l(i.singer, function (i, s) {
                          return e(
                            "router-link",
                            {
                              key: i.name,
                              staticClass: "song_name",
                              attrs: {
                                to: { path: "/singer", query: { id: i.id } },
                              },
                            },
                            [t._v(t._s(0 !== s ? " / " + i.name : i.name))]
                          );
                        }),
                        1
                      ),
                      "mini" !== t.typeSize
                        ? e(
                            "div",
                            { staticClass: "columnAlbum" },
                            [
                              i.album
                                ? e(
                                    "router-link",
                                    {
                                      staticClass: "songlist-album",
                                      attrs: {
                                        to: {
                                          path: "/album",
                                          query: { id: i.album.id },
                                        },
                                      },
                                    },
                                    [t._v(t._s(i.album.name))]
                                  )
                                : t._e(),
                            ],
                            1
                          )
                        : t._e(),
                      e("div", { staticClass: "columnTime" }, [
                        e("div", { staticClass: "songlist-time" }, [
                          t._v(" " + t._s(i.duration) + " "),
                        ]),
                        e(
                          "div",
                          { staticClass: "songlist-oper" },
                          [
                            "mini" !== t.typeSize
                              ? e("i", {
                                  staticClass: "iconfont icon-add",
                                  attrs: { title: "添加到列表" },
                                  on: {
                                    click: function (e) {
                                      return t.addSongList(i);
                                    },
                                  },
                                })
                              : t._e(),
                            e(
                              "el-popover",
                              {
                                ref: "popAddList",
                                refInFor: !0,
                                attrs: {
                                  placement: "bottom",
                                  trigger: "click",
                                },
                              },
                              [
                                e("i", {
                                  staticClass: "iconfont icon-add-list",
                                  attrs: {
                                    slot: "reference",
                                    title: "添加到歌单",
                                  },
                                  on: { click: t.closeAddListPop },
                                  slot: "reference",
                                }),
                              ]
                            ),
                            e("i", {
                              staticClass: "iconfont icon-collect",
                              on: {
                                click: function (e) {
                                  return t.likeSong(i);
                                },
                              },
                            }),
                            "mini" === t.typeSize
                              ? e("i", {
                                  staticClass: "iconfont icon-del",
                                  attrs: { title: "删除" },
                                  on: {
                                    click: function (e) {
                                      return e.stopPropagation(), t.delList(s);
                                    },
                                  },
                                })
                              : t._e(),
                          ],
                          1
                        ),
                      ]),
                    ]
                  );
                }),
                0
              ),
            ]
          ),
          t.isShowPagination
            ? e(
                "div",
                { staticClass: "pagination" },
                [
                  e("el-pagination", {
                    attrs: {
                      background: "",
                      "page-size": this.pageSize,
                      "current-page": t.currentPage,
                      layout: "prev, pager, next",
                      total: this.songList.length,
                    },
                    on: {
                      "current-change": t.currentChange,
                      "update:currentPage": function (e) {
                        t.currentPage = e;
                      },
                      "update:current-page": function (e) {
                        t.currentPage = e;
                      },
                    },
                  }),
                ],
                1
              )
            : t._e(),
        ]);
      },
      a = [
        function () {
          var t = this,
            e = t._self._c;
          return e("div", { staticClass: "audio-icon" }, [
            e("div", {
              staticClass: "column",
              staticStyle: { "animation-delay": "-1.2s" },
            }),
            e("div", { staticClass: "column" }),
            e("div", {
              staticClass: "column",
              staticStyle: { "animation-delay": "-1.5s" },
            }),
            e("div", {
              staticClass: "column",
              staticStyle: { "animation-delay": "-0.9s" },
            }),
            e("div", {
              staticClass: "column",
              staticStyle: { "animation-delay": "-0.6s" },
            }),
          ]);
        },
      ],
      n = i("2f62"),
      o = {
        name: "songList",
        components: {},
        props: {
          songList: { type: Array, required: !0 },
          typeSize: { type: String, default: "normal" },
          stripe: { type: Boolean, default: !1 },
          offset: { type: Number, default: 0 },
          height: { type: [Number, String], default: "auto" },
          isScroll: { type: Boolean, default: !1 },
          isShowTips: { type: Boolean, default: !0 },
        },
        data() {
          return {
            pageSize: 30,
            currentPage: 1,
            playing: !1,
            timer: null,
            curScroll: -1,
          };
        },
        computed: {
          ...Object(n["c"])(["playList", "playIndex", "isPlayed"]),
          list() {
            return this.isScroll
              ? this.songList
              : this.songList.slice(
                  (this.currentPage - 1) * this.pageSize,
                  this.currentPage * this.pageSize
                );
          },
          isCurSong() {
            const t = this;
            return (e, i) => [
              "list-item",
              t.stripe && i % 2 === 0 ? "stripe" : "",
              t.isPlayed && e.id === t.curSongInfo.id ? "active" : "",
              e.license || e.vip ? "disable" : "",
              e.vip ? "vip" : "",
            ];
          },
          isShowPagination() {
            return this.songList.length > this.pageSize && !this.isScroll;
          },
          playIcon() {
            const t = this;
            return (e) => [
              "iconfont",
              "playicon",
              this.isPlayed && e.id === t.curSongInfo.id
                ? "icon-pause"
                : "icon-play",
            ];
          },
          curSongSty() {
            return `transform: translateY(${this.curScroll}px)`;
          },
          curSongInfo() {
            return this.playList[this.playIndex];
          },
        },
        mounted() {
          this.scrollCurSong(this.curSongInfo);
        },
        methods: {
          ...Object(n["d"])({
            setPlayStatus: "SET_PLAYSTATUS",
            setPlayList: "SET_PLAYLIST",
            setPlayListTips: "setPlayListTips",
            setPlayIndex: "SET_PLAYINDEX",
          }),
          currentSong(t) {
            this.curSongInfo && t.id === this.curSongInfo.id
              ? this.setPlayStatus(!this.isPlayed)
              : (this.selectPlay({ list: [t] }),
                this.isShowTips &&
                  (this.setPlayListTips({ flag: !0, txt: "已开始播放" }),
                  clearTimeout(this.timer),
                  (this.timer = setTimeout(() => {
                    this.setPlayListTips({ flag: !1, txt: "已开始播放" });
                  }, 2e3))));
          },
          indexMethod(t) {
            return this.isScroll
              ? t + 1
              : (this.currentPage - 1) * this.pageSize + t + 1 + this.offset;
          },
          currentChange(t) {
            this.currentPage = t;
          },
          addSongList(t) {
            this.addList({ list: [t] }),
              this.isShowTips &&
                (this.setPlayListTips({ flag: !0, txt: "已添加到播放列表" }),
                clearTimeout(this.timer),
                (this.timer = setTimeout(() => {
                  this.setPlayListTips({ flag: !1, txt: "已添加到播放列表" });
                }, 2e3)));
          },
          delList(t) {
            this.playList.splice(t, 1), this.setPlayList(this.playList);
          },
          async likeSong(t) {
            const { data: e } = await this.$http.likeSong({
              id: t.id,
              like: !t.like,
            });
            if (200 !== e.code) return this.$msg.error("数据请求失败");
            this.$msg.success("收藏成功");
          },
          tips(t, e) {
            "A" !== t.target.nodeName &&
              (e.license &&
                this.$msg.error("由于版权保护，您所在的地区暂时无法使用。"),
              e.vip && this.$msg.error("付费歌曲，请在网易云音乐播放"));
          },
          closeAddListPop() {
            this.$refs.popAddList.forEach((t) => {
              t.doClose();
            });
          },
          scrollCurSong(t) {
            const e = this;
            if (e.isScroll) {
              const i = e.songList.findIndex((e) => e.id === t.id);
              i > 7 && i < e.songList.length - 8
                ? (e.curScroll = 50 * -(i - 4))
                : i >= e.songList.length - 8 && e.songList.length - 8 > 0
                ? (e.curScroll = 50 * -(e.songList.length - 8))
                : (e.curScroll = 0),
                e.$refs.curSongRef.addEventListener("wheel", (t) => {
                  t.wheelDelta > 0 || t.detail < 0
                    ? (e.curScroll =
                        Math.abs(e.curScroll) > 0 ? e.curScroll + 50 : 0)
                    : (e.curScroll =
                        Math.abs(e.curScroll) <
                        ((e.songList.length - 8) / 2) * 100
                          ? e.curScroll - 50
                          : e.curScroll);
                });
            }
          },
          ...Object(n["b"])(["selectPlay", "addList"]),
        },
        watch: {
          curSongInfo: {
            handler(t, e) {
              this.scrollCurSong(t);
            },
            deep: !0,
          },
          songList() {
            this.currentPage = 1;
          },
        },
        beforeDestroy() {
          clearTimeout(this.timer);
        },
      },
      r = o,
      l = (i("7567"), i("2877")),
      c = Object(l["a"])(r, s, a, !1, null, "e3b1866c", null);
    e["a"] = c.exports;
  },
  "1eb0": function (t, e, i) {},
  "3c5a": function (t, e, i) {},
  "44f8": function (t, e, i) {
    "use strict";
    var s = function () {
        var t = this,
          e = t._self._c;
        return e("div", [
          e("div", { class: ["lyrics-main", t.lyricName] }, [
            t.lyricObj.length
              ? e(
                  "div",
                  { ref: "lyrics", staticClass: "lyrics", style: t.transform },
                  t._l(t.lyricObj, function (i, s) {
                    return e("p", { key: s, class: [t.isCurLyric(s)] }, [
                      t._v(t._s(i.txt)),
                    ]);
                  }),
                  0
                )
              : e("div", { staticClass: "lyric-empty" }, [
                  t.lyric
                    ? e("p", [t._v("纯音乐，无歌词")])
                    : e("p", [t._v("歌词加载中......")]),
                ]),
          ]),
          "page" === t.local && t.lyricObj.length > 6
            ? e("div", { staticClass: "lyric-more" }, [
                t.isFull ? t._e() : e("p", [t._v("...")]),
                e(
                  "span",
                  {
                    on: {
                      click: function (e) {
                        return (
                          e.stopPropagation(),
                          t.fullLyric.apply(null, arguments)
                        );
                      },
                    },
                  },
                  [t._v(t._s(this.isFull ? "收起" : "展开"))]
                ),
              ])
            : t._e(),
        ]);
      },
      a = [],
      n =
        (i("14d9"),
        {
          name: "lyrics",
          components: {},
          props: {
            sId: { type: [Number, String], default: 0 },
            currentTime: { type: Number, default: 0 },
            local: { type: String, default: "" },
          },
          data() {
            return { lyric: null, lyricObj: [], curIndex: 0, isFull: !1 };
          },
          mounted() {
            this.getLyrics(this.sId);
          },
          computed: {
            lyricName() {
              return [
                "page" === this.local ? "page-lyrics" : "",
                this.isFull ? "fullLyrics" : "",
              ];
            },
            isCurLyric() {
              return (t) => (t !== this.curIndex || this.local ? "" : "active");
            },
            transform() {
              return this.curIndex > 6
                ? `transform: translateY(-${30 * (this.curIndex - 6)}px)`
                : "transform: translateY(0)";
            },
          },
          methods: {
            async getLyrics(t) {
              const { data: e } = await this.$http.lyrics({ id: t });
              if (200 !== e.code) return this.$msg.error("数据请求失败");
              this.formartLyric(e.lrc);
            },
            formartLyric(t) {
              const e = /^\[(\d{2}):(\d{2}.\d{2,})\]\s*(.+)$/;
              if (!t) return void (this.lyric = !0);
              const i = t.lyric.split("\n");
              (this.lyric = t.lyric),
                i.forEach((t) => {
                  const i = e.exec(t);
                  i &&
                    this.lyricObj.push({
                      t: 60 * i[1] * 1 + 1 * i[2],
                      txt: i[3],
                    });
                }),
                this.lyricObj.sort((t, e) => t.t - e.t);
            },
            findCurIndex(t) {
              for (let e = 0; e < this.lyricObj.length; e++)
                if (t <= this.lyricObj[e].t) return e;
              return this.lyricObj.length;
            },
            fullLyric() {
              this.isFull = !this.isFull;
            },
          },
          watch: {
            sId(t, e) {
              (this.lyric = null),
                (this.lyricObj = []),
                (this.curIndex = 0),
                this.getLyrics(t);
            },
            currentTime(t, e) {
              this.lyricObj.length &&
                (this.curIndex = this.findCurIndex(t) - 1);
            },
          },
        }),
      o = n,
      r = (i("a911"), i("2877")),
      l = Object(r["a"])(o, s, a, !1, null, "52340a13", null);
    e["a"] = l.exports;
  },
  4544: function (t, e, i) {
    "use strict";
    i("1eb0");
  },
  "55e6": function (t, e, i) {
    "use strict";
    i("b4b8");
  },
  "56d7": function (t, e, i) {
    "use strict";
    i.r(e);
    var s = {};
    i.r(s),
      i.d(s, "getBanner", function () {
        return Tt;
      }),
      i.d(s, "search", function () {
        return Ot;
      }),
      i.d(s, "serachHot", function () {
        return Mt;
      }),
      i.d(s, "serachHotDetail", function () {
        return At;
      }),
      i.d(s, "serachSuggest", function () {
        return jt;
      }),
      i.d(s, "serachMatch", function () {
        return Vt;
      }),
      i.d(s, "cloudsearch", function () {
        return Dt;
      }),
      i.d(s, "login", function () {
        return Nt;
      }),
      i.d(s, "logout", function () {
        return Ht;
      }),
      i.d(s, "getUserInfo", function () {
        return Ft;
      }),
      i.d(s, "checkSong", function () {
        return Et;
      }),
      i.d(s, "hotList", function () {
        return qt;
      }),
      i.d(s, "playList", function () {
        return Bt;
      }),
      i.d(s, "catlist", function () {
        return Yt;
      }),
      i.d(s, "playlistdetail", function () {
        return Wt;
      }),
      i.d(s, "playlistSCollect", function () {
        return Jt;
      }),
      i.d(s, "playlistRelated", function () {
        return Xt;
      }),
      i.d(s, "playlistComment", function () {
        return Kt;
      }),
      i.d(s, "subPlayList", function () {
        return Gt;
      }),
      i.d(s, "playlistUser", function () {
        return Qt;
      }),
      i.d(s, "addPlayList", function () {
        return Zt;
      }),
      i.d(s, "songDetail", function () {
        return te;
      }),
      i.d(s, "songUrl", function () {
        return ee;
      }),
      i.d(s, "likeSong", function () {
        return ie;
      }),
      i.d(s, "lyrics", function () {
        return se;
      }),
      i.d(s, "simiSong", function () {
        return ae;
      }),
      i.d(s, "commentSong", function () {
        return ne;
      }),
      i.d(s, "comment", function () {
        return oe;
      }),
      i.d(s, "commentLike", function () {
        return re;
      }),
      i.d(s, "album", function () {
        return le;
      }),
      i.d(s, "albumSub", function () {
        return ue;
      }),
      i.d(s, "albumDynamic", function () {
        return ce;
      }),
      i.d(s, "albumComment", function () {
        return de;
      }),
      i.d(s, "artistDesc", function () {
        return he;
      }),
      i.d(s, "artists", function () {
        return pe;
      }),
      i.d(s, "artistSub", function () {
        return me;
      }),
      i.d(s, "artistAlbum", function () {
        return fe;
      }),
      i.d(s, "artistMv", function () {
        return ge;
      }),
      i.d(s, "artistList", function () {
        return ye;
      }),
      i.d(s, "mv", function () {
        return be;
      }),
      i.d(s, "mvDetail", function () {
        return Se;
      }),
      i.d(s, "mvUrl", function () {
        return ke;
      }),
      i.d(s, "commentMv", function () {
        return Ce;
      }),
      i.d(s, "simiMv", function () {
        return _e;
      }),
      i.d(s, "personalized", function () {
        return Ut;
      }),
      i.d(s, "highquality", function () {
        return zt;
      }),
      i.d(s, "highqualitytag", function () {
        return Rt;
      }),
      i.d(s, "videoUrl", function () {
        return Ie;
      }),
      i.d(s, "videoDetail", function () {
        return Pe;
      }),
      i.d(s, "simiVideo", function () {
        return xe;
      }),
      i.d(s, "commentVideo", function () {
        return Te;
      }),
      i.d(s, "hotTopic", function () {
        return Oe;
      }),
      i.d(s, "topAlbum", function () {
        return De;
      }),
      i.d(s, "toplist", function () {
        return Le;
      }),
      i.d(s, "topListDetail", function () {
        return $e;
      }),
      i.d(s, "listDetail", function () {
        return we;
      }),
      i.d(s, "getNewMv", function () {
        return Ae;
      }),
      i.d(s, "topArtists", function () {
        return Me;
      }),
      i.d(s, "subArtist", function () {
        return ve;
      });
    var a = i("2b0e"),
      n = function () {
        var t = this,
          e = t._self._c;
        return e(
          "el-container",
          { staticClass: "container", attrs: { id: "app" } },
          [
            e("el-header", { attrs: { height: "80px" } }, [e("my-header")], 1),
            e(
              "el-main",
              [
                e("div", { staticClass: "layout" }, [e("router-view")], 1),
                e("my-footer"),
                e(
                  "el-backtop",
                  { attrs: { target: ".el-main", bottom: t.backBottom } },
                  [e("img", { attrs: { src: i("a330"), alt: "" } })]
                ),
              ],
              1
            ),
            t.loginDialogVisible ? e("Login") : t._e(),
            e("play-bar", {
              directives: [
                {
                  name: "show",
                  rawName: "v-show",
                  value: t.isShowPlayBar,
                  expression: "isShowPlayBar",
                },
              ],
            }),
          ],
          1
        );
      },
      o = [],
      r = function () {
        var t = this,
          e = t._self._c;
        return e("div", { staticClass: "header" }, [
          e(
            "div",
            { staticClass: "w1200" },
            [
              e(
                "el-row",
                { staticClass: "wrapper" },
                [
                  e(
                    "el-col",
                    { attrs: { span: 4 } },
                    [
                      e(
                        "router-link",
                        { staticClass: "logo", attrs: { to: "/" } },
                        [e("img", { attrs: { src: i("b640"), alt: "" } })]
                      ),
                    ],
                    1
                  ),
                  e("el-col", { attrs: { span: 12 } }, [
                    e(
                      "ul",
                      { staticClass: "nav" },
                      t._l(t.menuList, function (i) {
                        return e(
                          "li",
                          {
                            key: i.path,
                            class: [
                              0 === t.menuActive.indexOf(i.path)
                                ? "is-active"
                                : "",
                            ],
                            on: {
                              click: function (e) {
                                return t.selectMenu(i.path);
                              },
                            },
                          },
                          [e("span", [t._v(t._s(i.name))])]
                        );
                      }),
                      0
                    ),
                  ]),
                  e("el-col", { attrs: { span: 6 } }, [
                    e(
                      "span",
                      { staticClass: "search" },
                      [
                        e(
                          "el-popover",
                          {
                            directives: [
                              {
                                name: "clickoutside",
                                rawName: "v-clickoutside",
                                value: t.handleClose,
                                expression: "handleClose",
                              },
                            ],
                            ref: "popover",
                            attrs: {
                              width: "200",
                              placement: "bottom-end",
                              trigger: "manual",
                            },
                            model: {
                              value: t.isShowSearch,
                              callback: function (e) {
                                t.isShowSearch = e;
                              },
                              expression: "isShowSearch",
                            },
                          },
                          [
                            e("el-input", {
                              staticClass: "keyVal",
                              attrs: {
                                slot: "reference",
                                placeholder: "请输入歌名、歌词、歌手或专辑",
                                clearable: "",
                              },
                              on: {
                                focus: t.handleFocus,
                                input: t.handleInput,
                              },
                              slot: "reference",
                              model: {
                                value: t.keyVal,
                                callback: function (e) {
                                  t.keyVal = e;
                                },
                                expression: "keyVal",
                              },
                            }),
                            [
                              t.keyVal
                                ? e(
                                    "div",
                                    { staticClass: "search-key-list" },
                                    t._l(t.suggestInfo.order, function (i, s) {
                                      return e(
                                        "div",
                                        { key: s, staticClass: "search-item" },
                                        [
                                          e("h6", [t._v(t._s(t.listType[i]))]),
                                          e(
                                            "div",
                                            { staticClass: "item-main" },
                                            t._l(
                                              t.suggestInfo[i],
                                              function (s, a) {
                                                return e(
                                                  "div",
                                                  {
                                                    key: a,
                                                    staticClass: "list",
                                                    on: {
                                                      click: function (e) {
                                                        return t.jumpPage(s, i);
                                                      },
                                                    },
                                                  },
                                                  [
                                                    t._v(
                                                      " " + t._s(s.name) + " "
                                                    ),
                                                    "songs" === i
                                                      ? [
                                                          t._v(" -"),
                                                          t._l(
                                                            s.artists,
                                                            function (i, s) {
                                                              return e(
                                                                "span",
                                                                { key: s },
                                                                [
                                                                  t._v(
                                                                    t._s(
                                                                      i.name +
                                                                        (0 !== s
                                                                          ? " / "
                                                                          : "")
                                                                    )
                                                                  ),
                                                                ]
                                                              );
                                                            }
                                                          ),
                                                        ]
                                                      : "albums" === i
                                                      ? [
                                                          t._v(" -"),
                                                          e("span", [
                                                            t._v(
                                                              t._s(
                                                                s.artist.name
                                                              )
                                                            ),
                                                          ]),
                                                        ]
                                                      : t._e(),
                                                  ],
                                                  2
                                                );
                                              }
                                            ),
                                            0
                                          ),
                                        ]
                                      );
                                    }),
                                    0
                                  )
                                : e("div", { staticClass: "hot-search" }, [
                                    e("h5", [t._v("热门搜索")]),
                                    e(
                                      "div",
                                      { staticClass: "hot-search-list" },
                                      t._l(t.serachHot, function (i, s) {
                                        return e(
                                          "div",
                                          {
                                            key: s,
                                            staticClass: "hot-item",
                                            on: {
                                              click: function (e) {
                                                return t.jumpSearch(i);
                                              },
                                            },
                                          },
                                          [
                                            e(
                                              "span",
                                              {
                                                class: [
                                                  s < 3 ? "top-" + s : "",
                                                ],
                                              },
                                              [t._v(t._s(s + 1 + "."))]
                                            ),
                                            t._v(" " + t._s(i.first) + " "),
                                          ]
                                        );
                                      }),
                                      0
                                    ),
                                  ]),
                            ],
                          ],
                          2
                        ),
                        e("i", {
                          staticClass: "iconfont icon-search",
                          attrs: { slot: "suffix" },
                          on: { click: t.search },
                          slot: "suffix",
                        }),
                      ],
                      1
                    ),
                  ]),
                  e(
                    "el-col",
                    {
                      class: t.isLogin ? "user-avatar" : "login",
                      attrs: { span: 2 },
                    },
                    [
                      t.isLogin
                        ? e(
                            "div",
                            { staticClass: "logined" },
                            [
                              e(
                                "el-dropdown",
                                {
                                  attrs: { placement: "bottom" },
                                  on: { command: t.userMenuHandler },
                                },
                                [
                                  e(
                                    "el-image",
                                    {
                                      staticClass: "avatar",
                                      attrs: { src: t.userInfo.avatarUrl },
                                    },
                                    [
                                      e(
                                        "div",
                                        {
                                          staticClass: "image-slot",
                                          attrs: { slot: "placeholder" },
                                          slot: "placeholder",
                                        },
                                        [
                                          e("i", {
                                            staticClass:
                                              "iconfont icon-placeholder",
                                          }),
                                        ]
                                      ),
                                    ]
                                  ),
                                  e(
                                    "el-dropdown-menu",
                                    {
                                      attrs: { slot: "dropdown" },
                                      slot: "dropdown",
                                    },
                                    [
                                      e(
                                        "el-dropdown-item",
                                        { attrs: { command: "user" } },
                                        [
                                          e(
                                            "router-link",
                                            { attrs: { to: { name: "my" } } },
                                            [
                                              e("i", {
                                                staticClass:
                                                  "iconfont icon-home",
                                              }),
                                              t._v("我的主页"),
                                            ]
                                          ),
                                        ],
                                        1
                                      ),
                                      e(
                                        "el-dropdown-item",
                                        { attrs: { command: "quit" } },
                                        [
                                          e("i", {
                                            staticClass: "iconfont icon-quit",
                                          }),
                                          t._v("退出"),
                                        ]
                                      ),
                                    ],
                                    1
                                  ),
                                ],
                                1
                              ),
                            ],
                            1
                          )
                        : e(
                            "span",
                            {
                              staticClass: "login-btn",
                              on: { click: t.loginDialog },
                            },
                            [t._v("登录")]
                          ),
                    ]
                  ),
                ],
                1
              ),
            ],
            1
          ),
        ]);
      },
      l = [],
      c = (i("14d9"), i("2f62")),
      u = {
        name: "myHeader",
        components: {},
        data() {
          return {
            curIndex: "0",
            keyVal: "",
            logined: !0,
            profile: {},
            serachHot: [],
            suggestInfo: {},
            listType: {
              songs: "单曲",
              artists: "歌手",
              albums: "专辑",
              playlists: "歌单",
            },
            menuList: [
              { name: "首页", path: "/index" },
              { name: "排行榜", path: "/rank" },
              { name: "歌单", path: "/playlist" },
              { name: "MV", path: "/mvlist" },
              { name: "歌手", path: "/artist" },
              { name: "我的音乐", path: "/my" },
            ],
            isShowSearch: !1,
          };
        },
        computed: {
          ...Object(c["c"])(["isLogin", "userInfo"]),
          menuActive() {
            return this.$route.path;
          },
        },
        methods: {
          ...Object(c["d"])(["setLogin", "setUserInfo", "setLoginDialog"]),
          async getSearchHot() {
            const { data: t } = await this.$http.serachHot();
            if (200 !== t.code) return this.$msg.error("数据请求失败");
            this.serachHot = t.result.hots;
          },
          async getSerachSuggest() {
            const { data: t } = await this.$http.serachSuggest({
              keywords: this.keyVal,
            });
            if (200 !== t.code) return this.$msg.error("数据请求失败");
            this.suggestInfo = t.result;
          },
          async logout() {
            const { data: t } = await this.$http.logout();
            if (200 !== t.code) return this.$msg.error("数据请求失败");
            this.$msg.success("退出成功"),
              window.sessionStorage.removeItem("isLogin"),
              window.sessionStorage.removeItem("token"),
              window.sessionStorage.removeItem("cookie"),
              window.sessionStorage.removeItem("userInfo"),
              this.setLogin(!1),
              this.setUserInfo(),
              this.$route.path.indexOf("/my") >= 0 &&
                this.$router.push({ path: "/" });
          },
          loginDialog() {
            this.setLoginDialog(!0);
          },
          userMenuHandler(t) {
            switch (t) {
              case "home":
                this.$router.push({ name: "homePage" });
                break;
              case "grade":
                this.$router.push({ name: "grade" });
                break;
              case "set":
                this.$router.push({ name: "setting" });
                break;
              case "quit":
                this.logout();
                break;
            }
          },
          jumpSearch(t) {
            (this.isShowSearch = !1),
              (this.keyVal = t.first),
              t.first !== this.$route.query.key &&
                this.$router.push({ path: "/search", query: { key: t.first } });
          },
          jumpPage(t, e) {
            switch (((this.keyVal = t.name), e)) {
              case "songs":
                this.$router.push({ path: "/song", query: { id: t.id } });
                break;
              case "artists":
                this.$router.push({ path: "/singer", query: { id: t.id } });
                break;
              case "albums":
                this.$router.push({ path: "/album", query: { id: t.id } });
                break;
              case "playlists":
                this.$router.push({
                  path: "/playlist/detail",
                  query: { id: t.id },
                });
                break;
            }
            this.isShowSearch = !1;
          },
          showSearch() {
            this.keyVal
              ? ((this.suggestInfo = {}), this.getSerachSuggest())
              : ((this.serachHot = []), this.getSearchHot());
          },
          search() {
            this.keyVal &&
              (this.$router.push({
                path: "/search",
                query: { key: this.keyVal },
              }),
              (this.isShowSearch = !1));
          },
          handleInput() {
            this.keyVal
              ? (this.showSearch(), (this.isShowSearch = !0))
              : (this.isShowSearch = !1);
          },
          handleFocus() {
            this.showSearch(), (this.isShowSearch = !0);
          },
          handleClose() {
            this.isShowSearch = !1;
          },
          selectMenu(t) {
            this.isLogin || t.indexOf("/my") < 0
              ? this.$router.push({ path: t })
              : this.loginDialog();
          },
        },
        watch: {
          keyVal(t, e) {
            this.keyVal = t;
          },
        },
      },
      d = u,
      h = (i("e0fc"), i("2877")),
      p = Object(h["a"])(d, r, l, !1, null, "7b7b9f28", null),
      m = p.exports,
      f = function () {
        var t = this;
        t._self._c;
        return t._m(0);
      },
      g = [
        function () {
          var t = this,
            e = t._self._c;
          return e("div", { staticClass: "footer" }, [
            e("div", { staticClass: "w1200" }, [e("p", [t._v("trtst.com")])]),
          ]);
        },
      ],
      y = {
        components: {},
        data() {
          return {};
        },
        computed: {},
        methods: {},
      },
      v = y,
      b = (i("6bb4"), Object(h["a"])(v, f, g, !1, null, "3e409865", null)),
      S = b.exports,
      k = function () {
        var t = this,
          e = t._self._c;
        return t.curSongInfo
          ? e(
              "div",
              {
                class: ["play-bar", t.lockName],
                on: { mouseenter: t.enterBar, mouseleave: t.leaveBar },
              },
              [
                e("div", { staticClass: "fold" }, [
                  e(
                    "div",
                    { staticClass: "fold-btn", on: { click: t.lockBar } },
                    [
                      e("i", {
                        staticClass: "iconfont icon-lock",
                        class: [t.locked ? "active" : ""],
                      }),
                    ]
                  ),
                ]),
                e("progress-line", {
                  staticClass: "audioProgress",
                  attrs: { progressWidth: t.audioProgressWidth },
                  on: { setProgressLine: t.setAudioProgress },
                }),
                e(
                  "div",
                  { staticClass: "w1200" },
                  [
                    e("audio", {
                      ref: "audio",
                      attrs: { preload: "auto", src: t.curSongInfo.url },
                      on: {
                        canplay: t.canplaySong,
                        playing: t.playSong,
                        ended: t.endedSong,
                        error: t.errorSong,
                        timeupdate: t.updateSongTime,
                      },
                    }),
                    e(
                      "el-row",
                      { staticClass: "play-bar-inside" },
                      [
                        e(
                          "el-col",
                          { staticClass: "bar-l", attrs: { span: 7 } },
                          [
                            e(
                              "router-link",
                              {
                                attrs: {
                                  to: {
                                    path: "/song",
                                    query: { id: t.curSongInfo.id },
                                  },
                                },
                              },
                              [
                                e(
                                  "el-image",
                                  {
                                    staticClass: "bar-cover-img",
                                    attrs: { src: t.curSongInfo.album.picUrl },
                                  },
                                  [
                                    e(
                                      "div",
                                      {
                                        staticClass: "image-slot",
                                        attrs: { slot: "placeholder" },
                                        slot: "placeholder",
                                      },
                                      [
                                        e("i", {
                                          staticClass:
                                            "iconfont icon-placeholder",
                                        }),
                                      ]
                                    ),
                                  ]
                                ),
                              ],
                              1
                            ),
                            e(
                              "div",
                              { staticClass: "bar-name" },
                              [
                                e(
                                  "router-link",
                                  {
                                    staticClass: "song_name",
                                    attrs: {
                                      to: {
                                        path: "/song",
                                        query: { id: t.curSongInfo.id },
                                      },
                                    },
                                  },
                                  [t._v(t._s(t.curSongInfo.name))]
                                ),
                                e(
                                  "p",
                                  t._l(t.curSongInfo.singer, function (i, s) {
                                    return e(
                                      "router-link",
                                      {
                                        key: i.name,
                                        staticClass: "song_author",
                                        attrs: {
                                          to: {
                                            path: "/singer",
                                            query: { id: i.id },
                                          },
                                        },
                                      },
                                      [
                                        t._v(
                                          t._s(
                                            0 !== s ? " / " + i.name : i.name
                                          )
                                        ),
                                      ]
                                    );
                                  }),
                                  1
                                ),
                              ],
                              1
                            ),
                            e("div", { staticClass: "bar-time" }, [
                              e("span", [
                                t._v(
                                  t._s(
                                    t.$utils.formatSongTime(1e3 * t.currentTime)
                                  )
                                ),
                              ]),
                              t._v(" / " + t._s(t.curSongInfo.duration) + " "),
                            ]),
                          ],
                          1
                        ),
                        e(
                          "el-col",
                          { staticClass: "bar-m", attrs: { span: 9 } },
                          [
                            e("div", { staticClass: "bar-control" }, [
                              e("i", {
                                staticClass: "iconfont icon-audio-prev",
                                attrs: { title: "上一首" },
                                on: {
                                  click: function (e) {
                                    return (
                                      e.stopPropagation(),
                                      t.audioHandler("prev")
                                    );
                                  },
                                },
                              }),
                              e("i", {
                                class: ["iconfont", t.playIcon],
                                on: {
                                  click: function (e) {
                                    return (
                                      e.stopPropagation(),
                                      t.audioHandler("play")
                                    );
                                  },
                                },
                              }),
                              e("i", {
                                staticClass: "iconfont icon-audio-next",
                                attrs: { title: "下一首" },
                                on: {
                                  click: function (e) {
                                    return (
                                      e.stopPropagation(),
                                      t.audioHandler("next")
                                    );
                                  },
                                },
                              }),
                            ]),
                          ]
                        ),
                        e(
                          "el-col",
                          { staticClass: "bar-r", attrs: { span: 8 } },
                          [
                            e("div", { staticClass: "bar-oper" }, [
                              e(
                                "div",
                                { staticClass: "volume-main" },
                                [
                                  e("i", {
                                    class: ["iconfont", t.mutedIcon],
                                    attrs: { title: "音量" },
                                    on: {
                                      click: function (e) {
                                        return (
                                          e.stopPropagation(),
                                          t.volumeHandler.apply(null, arguments)
                                        );
                                      },
                                    },
                                  }),
                                  e("progress-line", {
                                    staticClass: "volumeLine",
                                    attrs: {
                                      progressWidth: t.volumeProgressWidth,
                                    },
                                    on: {
                                      setProgressLine: t.setvolumeProgress,
                                    },
                                  }),
                                ],
                                1
                              ),
                              e("i", {
                                staticClass: "iconfont",
                                class: t.modeIcon.className,
                                attrs: { title: t.modeIcon.title },
                                on: {
                                  click: function (e) {
                                    return (
                                      e.stopPropagation(),
                                      t.changePlayMode.apply(null, arguments)
                                    );
                                  },
                                },
                              }),
                              e(
                                "div",
                                {
                                  directives: [
                                    {
                                      name: "clickoutside",
                                      rawName: "v-clickoutside",
                                      value: t.popverClose,
                                      expression: "popverClose",
                                    },
                                  ],
                                  staticClass: "popver",
                                },
                                [
                                  e("div", { staticClass: "lyric" }, [
                                    e(
                                      "span",
                                      {
                                        staticClass: "lyric-btn",
                                        attrs: { title: "歌词" },
                                        on: { click: t.lyricsHandle },
                                      },
                                      [t._v("词")]
                                    ),
                                  ]),
                                  e(
                                    "div",
                                    {
                                      staticClass: "playlist",
                                      on: { click: t.playlistHandle },
                                    },
                                    [
                                      e("i", {
                                        staticClass: "iconfont icon-playlist",
                                        attrs: { title: "播放列表" },
                                      }),
                                      e(
                                        "div",
                                        { staticClass: "playlist-num" },
                                        [
                                          t._v(
                                            t._s(
                                              99 > t.playList.length
                                                ? t.playList.length
                                                : "99+"
                                            )
                                          ),
                                        ]
                                      ),
                                    ]
                                  ),
                                  e(
                                    "div",
                                    {
                                      directives: [
                                        {
                                          name: "show",
                                          rawName: "v-show",
                                          value: t.lyricsVisible,
                                          expression: "lyricsVisible",
                                        },
                                      ],
                                      staticClass: "lyrics-container",
                                    },
                                    [
                                      e(
                                        "h3",
                                        { staticClass: "lyrics-header" },
                                        [
                                          e("span", [t._v("歌词")]),
                                          e("i", {
                                            staticClass: "iconfont icon-closed",
                                            on: { click: t.lyricsHandle },
                                          }),
                                        ]
                                      ),
                                      e("lyrics", {
                                        attrs: {
                                          sId: t.curSongInfo.id,
                                          currentTime: t.currentTime,
                                        },
                                      }),
                                    ],
                                    1
                                  ),
                                  e(
                                    "div",
                                    {
                                      directives: [
                                        {
                                          name: "show",
                                          rawName: "v-show",
                                          value: t.playlistVisible,
                                          expression: "playlistVisible",
                                        },
                                      ],
                                      staticClass: "playlist-container",
                                    },
                                    [
                                      e(
                                        "h3",
                                        { staticClass: "playlist-header" },
                                        [
                                          e("span", [
                                            t._v("播放列表"),
                                            e("em", [
                                              t._v(
                                                "(共" +
                                                  t._s(t.playList.length) +
                                                  "首)"
                                              ),
                                            ]),
                                          ]),
                                          e(
                                            "div",
                                            {
                                              staticClass: "delSonglist",
                                              on: { click: t.clearSonglist },
                                            },
                                            [
                                              e("i", {
                                                staticClass:
                                                  "iconfont icon-del",
                                                attrs: { title: "清空列表" },
                                              }),
                                              t._v("清空列表"),
                                            ]
                                          ),
                                        ]
                                      ),
                                      e("song-list", {
                                        attrs: {
                                          songList: t.playList,
                                          isScroll: !0,
                                          height: 400,
                                          typeSize: "mini",
                                          isShowTips: !1,
                                        },
                                      }),
                                    ],
                                    1
                                  ),
                                ]
                              ),
                            ]),
                          ]
                        ),
                      ],
                      1
                    ),
                  ],
                  1
                ),
              ],
              1
            )
          : t._e();
      },
      C = [],
      _ = function () {
        var t = this,
          e = t._self._c;
        return e(
          "div",
          {
            ref: "progress",
            staticClass: "progress",
            on: {
              click: function (e) {
                return e.stopPropagation(), t.point.apply(null, arguments);
              },
            },
          },
          [
            e("div", { staticClass: "progress-line" }),
            e(
              "div",
              { staticClass: "progress-bg", style: { width: t.progressWidth } },
              [
                e("div", {
                  staticClass: "progress-btn",
                  on: {
                    mousedown: function (e) {
                      return e.target !== e.currentTarget
                        ? null
                        : (e.stopPropagation(), t.move());
                    },
                  },
                }),
              ]
            ),
          ]
        );
      },
      L = [],
      $ = {
        components: {},
        props: ["progressWidth"],
        data() {
          return {};
        },
        computed: {},
        methods: {
          move() {
            const t = this;
            return (
              (document.onmousemove = (e) => {
                t.setProgressLine(e, !1);
              }),
              (document.body.onselectstart = function () {
                return !1;
              }),
              (document.onmouseup = function (e) {
                t.setProgressLine(e),
                  (document.onmousemove =
                    document.onmouseup =
                    document.body.onselectstart =
                      null);
              }),
              !1
            );
          },
          point(t) {
            this.setProgressLine(t);
          },
          setProgressLine(t, e = !0) {
            const i = this,
              s = i.$refs.progress,
              a =
                t.clientX - this.getOffsetLeft(s) >= s.offsetWidth
                  ? s.offsetWidth
                  : t.clientX - this.getOffsetLeft(s) <= 0
                  ? 0
                  : t.clientX - this.getOffsetLeft(s);
            i.$emit("setProgressLine", { val: a / s.offsetWidth, flag: e });
          },
          getOffsetLeft(t) {
            let e = t.offsetLeft,
              i = t.offsetParent;
            while (null !== i) (e += i.offsetLeft), (i = i.offsetParent);
            return e;
          },
        },
      },
      w = $,
      I = (i("4544"), Object(h["a"])(w, _, L, !1, null, "b76b1d98", null)),
      P = I.exports,
      x = i("18fd"),
      T = i("44f8"),
      O = {
        components: { ProgressLine: P, songList: x["a"], Lyrics: T["a"] },
        data() {
          return {
            initAudioReady: !1,
            isMuted: !1,
            currentTime: 0,
            totalTime: 0,
            volumeNum: 0.5,
            oldVolume: 0,
            playMode: 0,
            timer: null,
            lyricsVisible: !1,
            playlistVisible: !1,
            isLock: !1,
            locked: !1,
            lockName: "active",
          };
        },
        created() {
          this.setPlayList(this.playList);
        },
        mounted() {
          this.leaveBar(this);
        },
        computed: {
          ...Object(c["c"])([
            "playIndex",
            "playList",
            "isPlayed",
            "playListTips",
          ]),
          playIcon() {
            return this.isPlayed ? "icon-audio-pause" : "icon-audio-play";
          },
          mutedIcon() {
            return this.isMuted ? "icon-volume-active" : "icon-volume";
          },
          modeIcon() {
            const t = [
              { className: "icon-loop", title: "循环模式" },
              { className: "icon-single-cycle", title: "单曲循环" },
              { className: "icon-shuffle", title: "随机播放" },
            ];
            return t[this.playMode];
          },
          audioProgressWidth() {
            return (this.currentTime / this.totalTime) * 100 + "%";
          },
          volumeProgressWidth() {
            return (this.volumeNum / 1) * 100 + "%";
          },
          curSongInfo() {
            return this.playList[this.playIndex];
          },
        },
        methods: {
          ...Object(c["d"])({
            setPlayStatus: "SET_PLAYSTATUS",
            setPlayIndex: "SET_PLAYINDEX",
            setPlayList: "SET_PLAYLIST",
          }),
          audioHandler(t) {
            "play" === t
              ? (this.setPlayStatus(!this.isPlayed),
                this.setPlayIndex(this.playIndex))
              : this.changeSong(t);
          },
          updateSongTime(t) {
            this.initAudioReady && (this.currentTime = t.target.currentTime);
          },
          canplaySong(t) {
            this.initAudioReady = !0;
          },
          playSong(t) {
            (this.initAudioReady = !0),
              this.setPlayStatus(!0),
              (this.totalTime = t.target.duration);
          },
          endedSong(t) {
            1 === this.playMode ? this.loopSong() : this.changeSong("next");
          },
          errorSong(t) {
            (this.initAudioReady = !1), this.setPlayStatus(!1);
          },
          volumeHandler() {
            (this.isMuted = this.$refs.audio.muted = this.isMuted ? 0 : 1),
              this.isMuted && (this.oldVolume = this.volumeNum),
              (this.volumeNum = this.isMuted ? 0 : this.oldVolume);
          },
          setAudioProgress(t) {
            (this.initAudioReady = !1),
              (this.currentTime = t.val * this.totalTime),
              t.flag && (this.$refs.audio.currentTime = t.val * this.totalTime);
          },
          setvolumeProgress(t) {
            (this.volumeNum = t.val),
              (this.oldVolume = t.val),
              (this.$refs.audio.volume = t.val),
              (this.isMuted = this.$refs.audio.muted = t.val ? 0 : 1);
          },
          changePlayMode() {
            this.playMode = this.playMode >= 2 ? 0 : this.playMode + 1;
          },
          clearSonglist() {
            window.localStorage.removeItem("playList"),
              this.setPlayList([]),
              this.setPlayStatus(!1),
              this.setPlayIndex(0);
          },
          changeSong(t) {
            if (1 !== this.playList.length) {
              let e = this.playIndex;
              (e =
                2 === this.playMode
                  ? Math.floor(Math.random() * this.playList.length - 1) + 1
                  : "prev" === t
                  ? 0 === e
                    ? this.playList.length - 1
                    : --e
                  : e >= this.playList.length - 1
                  ? 0
                  : ++e),
                (this.initAudioReady = !1),
                this.setPlayStatus(!1),
                this.setPlayIndex(e);
            } else this.loopSong();
          },
          loopSong() {
            (this.$refs.audio.currentTime = 0),
              this.$refs.audio.play(),
              this.setPlayStatus(!0);
          },
          enterBar() {
            clearTimeout(this.timer), (this.lockName = "active");
          },
          leaveBar(t) {
            const e = this;
            e.isLock ||
              e.locked ||
              (clearTimeout(e.timer),
              (e.timer = setTimeout(() => {
                e.lockName = e.isLock ? "active" : "";
              }, 3e3)));
          },
          lockBar() {
            (this.locked = !this.locked),
              (this.isLock = this.locked),
              this.leaveBar();
          },
          lyricsHandle() {
            (this.lyricsVisible = !this.lyricsVisible),
              (this.playlistVisible = !1),
              (this.isLock = this.lyricsVisible);
          },
          playlistHandle() {
            (this.playlistVisible = !this.playlistVisible),
              (this.lyricsVisible = !1),
              (this.isLock = this.playlistVisible);
          },
          popverClose() {
            (this.lyricsVisible = this.playlistVisible = this.isLock = !1),
              this.leaveBar();
          },
        },
        watch: {
          curSongInfo(t, e) {
            !t ||
              (e && t.id === e.id) ||
              ((this.initAudioReady = !1),
              (this.currentTime = 0),
              this.$nextTick(() => {
                const t = this.$refs.audio;
                t && t.play();
              }));
          },
          isPlayed(t) {
            this.initAudioReady &&
              this.$nextTick(() => {
                const e = this.$refs.audio;
                e && (t ? e.play() : e.pause());
              });
          },
        },
        destroyed() {
          clearTimeout(this.timer);
        },
      },
      D = O,
      M = (i("55e6"), Object(h["a"])(D, k, C, !1, null, "082fbc0b", null)),
      A = M.exports,
      j = function () {
        var t = this,
          e = t._self._c;
        return e(
          "div",
          { staticClass: "login" },
          [
            e(
              "el-dialog",
              {
                staticClass: "login-dialog",
                attrs: {
                  visible: t.loginDialogVisible,
                  width: "20%",
                  "before-close": t.handleClose,
                },
                on: {
                  "update:visible": function (e) {
                    t.loginDialogVisible = e;
                  },
                },
              },
              [
                e(
                  "div",
                  { staticClass: "login-wrapper" },
                  [
                    e("img", {
                      staticClass: "login-logo",
                      attrs: { src: i("b640"), alt: "" },
                    }),
                    e(
                      "el-form",
                      {
                        ref: "loginFormRef",
                        attrs: { model: t.loginForm, rules: t.loginFormRules },
                      },
                      [
                        e(
                          "el-form-item",
                          { attrs: { prop: "phone" } },
                          [
                            e(
                              "el-input",
                              {
                                attrs: { placeholder: "请输入网易云帐号登录" },
                                model: {
                                  value: t.loginForm.phone,
                                  callback: function (e) {
                                    t.$set(t.loginForm, "phone", e);
                                  },
                                  expression: "loginForm.phone",
                                },
                              },
                              [
                                e("i", {
                                  staticClass: "iconfont icon-phone",
                                  attrs: { slot: "prefix" },
                                  slot: "prefix",
                                }),
                              ]
                            ),
                          ],
                          1
                        ),
                        e(
                          "el-form-item",
                          { attrs: { prop: "pwd" } },
                          [
                            e(
                              "el-input",
                              {
                                attrs: {
                                  placeholder: "请输入密码",
                                  "show-password": "",
                                },
                                model: {
                                  value: t.loginForm.pwd,
                                  callback: function (e) {
                                    t.$set(t.loginForm, "pwd", e);
                                  },
                                  expression: "loginForm.pwd",
                                },
                              },
                              [
                                e("i", {
                                  staticClass: "iconfont icon-pwd",
                                  attrs: { slot: "prefix" },
                                  slot: "prefix",
                                }),
                              ]
                            ),
                          ],
                          1
                        ),
                      ],
                      1
                    ),
                  ],
                  1
                ),
                e(
                  "span",
                  {
                    staticClass: "dialog-footer",
                    attrs: { slot: "footer" },
                    slot: "footer",
                  },
                  [
                    e(
                      "el-button",
                      {
                        attrs: { type: "primary" },
                        on: { click: t.submitForm },
                      },
                      [t._v("登录")]
                    ),
                  ],
                  1
                ),
              ]
            ),
          ],
          1
        );
      },
      V = [],
      N = {
        components: {},
        data() {
          return {
            loginForm: { phone: "", pwd: "" },
            loginFormRules: {
              phone: [
                { required: !0, message: "请输入网易帐号", trigger: "blur" },
              ],
              pwd: [
                { required: !0, message: "请输入网易密码", trigger: "blur" },
              ],
            },
          };
        },
        computed: { ...Object(c["c"])(["loginDialogVisible"]) },
        methods: {
          ...Object(c["d"])(["setLogin", "setUserInfo", "setLoginDialog"]),
          handleClose() {
            this.setLoginDialog(!1);
          },
          submitForm() {
            this.$refs.loginFormRef.validate(async (t) => {
              if (t) {
                const { data: t } = await this.$http.login(this.loginForm);
                200 !== t.code
                  ? this.$msg.error(t.msg)
                  : (this.getUserInfo(t.profile.userId),
                    window.sessionStorage.setItem("token", t.token),
                    window.sessionStorage.setItem("cookie", t.cookie),
                    window.sessionStorage.setItem("isLogin", !0),
                    this.setLoginDialog(!1));
              }
            });
          },
          async getUserInfo(t) {
            const { data: e } = await this.$http.getUserInfo({ uid: t });
            200 !== e.code
              ? this.$msg.error(e.msg)
              : (window.sessionStorage.setItem(
                  "userInfo",
                  JSON.stringify(e.profile)
                ),
                this.setLogin(!0),
                this.setUserInfo(e.profile));
          },
        },
      },
      H = N,
      F = (i("bc1d"), Object(h["a"])(H, j, V, !1, null, "0546ae0f", null)),
      E = F.exports,
      q = {
        name: "app",
        components: { myHeader: m, myFooter: S, Login: E, playBar: A },
        data() {
          return { backBottom: 80 };
        },
        computed: {
          ...Object(c["c"])(["isLogin", "userInfo", "loginDialogVisible"]),
          isShowPlayBar() {
            return "/mv" !== this.$route.path && "/video" !== this.$route.path;
          },
        },
        methods: {},
      },
      B = q,
      U = (i("0b10"), Object(h["a"])(B, n, o, !1, null, "087d60fc", null)),
      z = U.exports,
      R = i("8c4f"),
      Y = function () {
        var t = this,
          e = t._self._c;
        return e("div", { staticClass: "favorite" }, [
          e("div", { staticClass: "favorite-header" }, [
            e("h4", [
              t._v("歌手列表 "),
              e("em", [t._v("(" + t._s(t.total) + ")")]),
            ]),
          ]),
          e(
            "div",
            { staticClass: "list-container" },
            [
              t.isLoading
                ? [e("Loading")]
                : t._l(t.list, function (i) {
                    return e(
                      "router-link",
                      {
                        key: i.id,
                        staticClass: "item",
                        attrs: { to: { path: "/singer", query: { id: i.id } } },
                      },
                      [
                        e(
                          "div",
                          { staticClass: "faceImg" },
                          [
                            e(
                              "el-image",
                              { attrs: { src: i.picUrl + "?param=120y120" } },
                              [
                                e(
                                  "div",
                                  {
                                    staticClass: "image-slot",
                                    attrs: { slot: "placeholder" },
                                    slot: "placeholder",
                                  },
                                  [
                                    e("i", {
                                      staticClass: "iconfont icon-placeholder",
                                    }),
                                  ]
                                ),
                              ]
                            ),
                          ],
                          1
                        ),
                        e("div", { staticClass: "info" }, [
                          e("div", { staticClass: "name" }, [
                            t._v(t._s(i.name)),
                          ]),
                          e("div", { staticClass: "size" }, [
                            e("span", [t._v("专辑: " + t._s(i.albumSize))]),
                            e("span", [t._v("MV: " + t._s(i.mvSize))]),
                          ]),
                        ]),
                      ]
                    );
                  }),
            ],
            2
          ),
        ]);
      },
      W = [],
      J = i("bf93"),
      X = {
        components: { Loading: J["a"] },
        data() {
          return { list: [], isLoading: !0, total: 0 };
        },
        computed: {},
        mounted() {
          this.getArtist();
        },
        methods: {
          async getArtist() {
            const { data: t } = await this.$http.subArtist();
            if (200 !== t.code) return this.$msg.error("数据请求失败");
            (this.list = t.data),
              (this.total = this.list.length),
              (this.isLoading = !1);
          },
        },
      },
      K = X,
      G = (i("939a"), Object(h["a"])(K, Y, W, !1, null, "f3fb886a", null)),
      Q = G.exports,
      Z = function () {
        var t = this,
          e = t._self._c;
        return e(
          "div",
          { staticClass: "playlist" },
          [
            e("div", { staticClass: "cover" }, [
              e(
                "div",
                { staticClass: "cover-img" },
                [
                  e("el-image", { attrs: { src: t.details.coverImgUrl } }, [
                    e(
                      "div",
                      {
                        staticClass: "image-slot",
                        attrs: { slot: "placeholder" },
                        slot: "placeholder",
                      },
                      [e("i", { staticClass: "iconfont icon-placeholder" })]
                    ),
                  ]),
                ],
                1
              ),
              e("div", { staticClass: "cover-info" }, [
                e("div", { staticClass: "cover-title" }, [
                  t._v(" " + t._s(t.details.name) + " "),
                ]),
                t.details.creator
                  ? e(
                      "div",
                      { staticClass: "cover-author" },
                      [
                        e(
                          "el-image",
                          {
                            staticClass: "cover-avatar",
                            attrs: { src: t.details.creator.avatarUrl },
                          },
                          [
                            e(
                              "div",
                              {
                                staticClass: "image-slot",
                                attrs: { slot: "placeholder" },
                                slot: "placeholder",
                              },
                              [
                                e("i", {
                                  staticClass: "iconfont icon-placeholder",
                                }),
                              ]
                            ),
                          ]
                        ),
                        e("div", { staticClass: "cover-name" }, [
                          t._v(t._s(t.details.creator.nickname)),
                        ]),
                        e("div", { staticClass: "cover-date" }, [
                          t._v(
                            t._s(
                              t.$utils.formartDate(
                                t.details.createTime,
                                "yyyy-MM-dd"
                              )
                            )
                          ),
                        ]),
                      ],
                      1
                    )
                  : t._e(),
                t.details.tags
                  ? e(
                      "div",
                      { staticClass: "cover-tags" },
                      t._l(t.details.tags, function (i, s) {
                        return e(
                          "router-link",
                          {
                            key: s,
                            staticClass: "tag",
                            attrs: {
                              to: { path: "/playlist", query: { cat: i } },
                            },
                          },
                          [t._v("#" + t._s(i))]
                        );
                      }),
                      1
                    )
                  : t._e(),
                e("div", { staticClass: "cover-digital" }, [
                  e("span", { staticClass: "cover-playCount" }, [
                    e("i", { staticClass: "iconfont icon-playnum" }),
                    t._v(
                      " " +
                        t._s(t.$utils.formartNum(t.details.playCount)) +
                        "次"
                    ),
                  ]),
                  e("span", { staticClass: "cover-collect" }, [
                    e("i", { staticClass: "iconfont icon-collect" }),
                    t._v(
                      " " + t._s(t.$utils.formartNum(t.details.subscribedCount))
                    ),
                  ]),
                  e("span", { staticClass: "cover-comment" }, [
                    e("i", { staticClass: "iconfont icon-comment" }),
                    t._v(
                      " " + t._s(t.$utils.formartNum(t.details.commentCount))
                    ),
                  ]),
                ]),
                t.details.description
                  ? e("div", { staticClass: "cover-desc" }, [
                      e("h5", [
                        t._v("歌单简介"),
                        t.isShowDesc
                          ? e(
                              "em",
                              {
                                staticClass: "desc-close",
                                on: {
                                  click: function (e) {
                                    t.isShowDesc = !1;
                                  },
                                },
                              },
                              [e("i", { staticClass: "iconfont icon-closed" })]
                            )
                          : t._e(),
                      ]),
                      e("p", {
                        domProps: { innerHTML: t._s(t.details.description) },
                        on: { click: t.showAllDesc },
                      }),
                      t.isShowDesc
                        ? e("pre", { staticClass: "cover-desc-all" }, [
                            t._v(
                              "                    " +
                                t._s(t.details.description) +
                                "\n                "
                            ),
                          ])
                        : t._e(),
                    ])
                  : t._e(),
              ]),
            ]),
            e("div", { staticClass: "song-header" }, [
              e("h4", [
                t._v("歌曲列表 "),
                e("em", [t._v(t._s(t.total + "首歌"))]),
              ]),
              e(
                "span",
                { staticClass: "play-all", on: { click: t.playAllSongs } },
                [
                  e("i", { staticClass: "iconfont icon-audio-play" }),
                  t._v(" 播放全部"),
                ]
              ),
            ]),
            t.isLoading
              ? [e("Loading")]
              : [
                  e("song-list", {
                    attrs: { songList: t.songList, stripe: !0 },
                  }),
                ],
          ],
          2
        );
      },
      tt = [],
      et = i("eb4d"),
      it = {
        components: { songList: x["a"], Loading: J["a"] },
        data() {
          return {
            id: "",
            details: {},
            songList: [],
            total: 0,
            isLoading: !0,
            isShowDesc: !1,
          };
        },
        computed: {},
        mounted() {
          (this.id = this.$route.query.id),
            this.getDetail({ id: this.id, s: "" });
        },
        methods: {
          ...Object(c["d"])({
            setPlayStatus: "SET_PLAYSTATUS",
            setPlayList: "SET_PLAYLIST",
            setPlayIndex: "SET_PLAYINDEX",
          }),
          async getDetail(t) {
            this.isLoading = !0;
            const { data: e } = await this.$http.playlistdetail(t);
            if (200 !== e.code) return this.$msg.error("数据请求失败");
            this.details = e.playlist;
            const i = e.playlist.trackIds;
            this.getAllSongs(i);
          },
          async getAllSongs(t) {
            const e = [],
              i = 500;
            let s = [];
            for (let a = 0; a < t.length; a += i) e.push(t.slice(a, a + i));
            for (let a = 0; a < e.length; a++) {
              const t = [];
              e[a].map((e) => {
                t.push(e.id);
              });
              const { data: i } = await this.$http.songDetail({
                ids: t.join(","),
                timestamp: new Date().valueOf() + a,
              });
              s = s.concat(this._formatSongs(i));
            }
            (this.songList = s), (this.total = s.length), (this.isLoading = !1);
          },
          playAllSongs() {
            this.playAll({ list: this.songList });
          },
          showAllDesc() {
            this.details.description.length > 88 &&
              (this.isShowDesc = !this.isShowDesc);
          },
          _formatSongs(t) {
            const e = [];
            return (
              t.songs.map((i, s) => {
                i.id &&
                  ((i.license = !t.privileges[s].cp),
                  e.push(Object(et["a"])(i)));
              }),
              e
            );
          },
          ...Object(c["b"])(["playAll"]),
        },
        watch: {
          $route() {
            (this.id = this.$route.query.id),
              this.getDetail({ id: this.id, s: "" });
          },
        },
      },
      st = it,
      at = (i("b13f"), Object(h["a"])(st, Z, tt, !1, null, "72b6eb5b", null)),
      nt = at.exports;
    a["default"].use(R["a"]);
    const ot = [
        { path: "/", redirect: "/index" },
        {
          path: "/index",
          name: "index",
          component: (t) => {
            i.e("chunk-054a0638")
              .then(
                function () {
                  var e = [i("37f9")];
                  t.apply(null, e);
                }.bind(this)
              )
              .catch(i.oe);
          },
        },
        {
          path: "/rank",
          name: "rank",
          component: (t) => {
            i.e("chunk-8dff10fe")
              .then(
                function () {
                  var e = [i("389a")];
                  t.apply(null, e);
                }.bind(this)
              )
              .catch(i.oe);
          },
        },
        {
          path: "/playlist",
          name: "playlist",
          component: (t) => {
            i.e("chunk-7cb2a116")
              .then(
                function () {
                  var e = [i("b887")];
                  t.apply(null, e);
                }.bind(this)
              )
              .catch(i.oe);
          },
        },
        {
          path: "/playlist/detail",
          name: "playlistdetail",
          component: (t) => {
            i.e("chunk-3141b22c")
              .then(
                function () {
                  var e = [i("2425")];
                  t.apply(null, e);
                }.bind(this)
              )
              .catch(i.oe);
          },
        },
        {
          path: "/song",
          name: "songs",
          component: (t) => {
            i.e("chunk-e7e4b6d8")
              .then(
                function () {
                  var e = [i("050a")];
                  t.apply(null, e);
                }.bind(this)
              )
              .catch(i.oe);
          },
        },
        {
          path: "/singer",
          name: "singer",
          component: (t) => {
            i.e("chunk-f8c6f9be")
              .then(
                function () {
                  var e = [i("2824")];
                  t.apply(null, e);
                }.bind(this)
              )
              .catch(i.oe);
          },
        },
        {
          path: "/album",
          name: "album",
          component: (t) => {
            i.e("chunk-4dab67cb")
              .then(
                function () {
                  var e = [i("dbea")];
                  t.apply(null, e);
                }.bind(this)
              )
              .catch(i.oe);
          },
        },
        {
          path: "/mvlist",
          name: "mvlist",
          component: (t) => {
            i.e("chunk-2bc2cb16")
              .then(
                function () {
                  var e = [i("e4d7")];
                  t.apply(null, e);
                }.bind(this)
              )
              .catch(i.oe);
          },
        },
        {
          path: "/mv",
          name: "mv",
          component: (t) => {
            Promise.all([i.e("chunk-779844b4"), i.e("chunk-a4a2e1ec")])
              .then(
                function () {
                  var e = [i("bab5")];
                  t.apply(null, e);
                }.bind(this)
              )
              .catch(i.oe);
          },
        },
        {
          path: "/my",
          name: "my",
          children: [
            { path: "/my/favorite", name: "myFavorite", component: Q },
            { path: "/my/playlist", name: "myPlaylist", component: nt },
          ],
          component: (t) => {
            i.e("chunk-a22893d4")
              .then(
                function () {
                  var e = [i("9639")];
                  t.apply(null, e);
                }.bind(this)
              )
              .catch(i.oe);
          },
        },
        {
          path: "/artist",
          name: "artist",
          component: (t) => {
            i.e("chunk-8f531b32")
              .then(
                function () {
                  var e = [i("04ad")];
                  t.apply(null, e);
                }.bind(this)
              )
              .catch(i.oe);
          },
        },
        {
          path: "/search",
          name: "search",
          component: (t) => {
            i.e("chunk-62660a3c")
              .then(
                function () {
                  var e = [i("efe3")];
                  t.apply(null, e);
                }.bind(this)
              )
              .catch(i.oe);
          },
        },
        {
          path: "/video",
          name: "video",
          component: (t) => {
            Promise.all([i.e("chunk-779844b4"), i.e("chunk-3d221c51")])
              .then(
                function () {
                  var e = [i("7f63")];
                  t.apply(null, e);
                }.bind(this)
              )
              .catch(i.oe);
          },
        },
        {
          path: "/user",
          name: "user",
          component: (t) => {
            i.e("chunk-2d2250de")
              .then(
                function () {
                  var e = [i("e382")];
                  t.apply(null, e);
                }.bind(this)
              )
              .catch(i.oe);
          },
        },
      ],
      rt = new R["a"]({
        mode: "history",
        scrollBehavior() {
          return { x: 0, y: 0 };
        },
        routes: ot,
      });
    var lt = rt,
      ct = {
        isLogin: !1,
        userInfo: null,
        loginDialogVisible: !1,
        isPlayed: !1,
        playList: [],
        playIndex: null,
        playListTips: 0,
      };
    const ut = "SET_PLAYSTATUS",
      dt = "SET_PLAYLIST",
      ht = "SET_PLAYINDEX",
      pt = {
        setLogin(t, e = !1) {
          t.isLogin = e;
        },
        setUserInfo(t, e = null) {
          t.userInfo = e;
        },
        setLoginDialog(t, e = null) {
          t.loginDialogVisible = e;
        },
        [ut](t, e = !1) {
          t.isPlayed = e;
        },
        [dt](t, e = null) {
          (t.playList = e),
            window.localStorage.setItem("playList", JSON.stringify(e));
        },
        [ht](t, e = 0) {
          (t.playIndex = e), window.localStorage.setItem("playIndex", e);
        },
        setPlayListTips(t, e = null) {
          t.playListTips = e;
        },
      };
    var mt = pt,
      ft = {
        isLogin(t) {
          return (
            t.isLogin || JSON.parse(window.sessionStorage.getItem("isLogin"))
          );
        },
        userInfo(t) {
          return (
            t.userInfo || JSON.parse(window.sessionStorage.getItem("userInfo"))
          );
        },
        loginDialogVisible(t) {
          return t.loginDialogVisible;
        },
        playList(t) {
          return t.playList.length
            ? t.playList
            : JSON.parse(window.localStorage.getItem("playList")) || [];
        },
        playIndex(t) {
          return (
            t.playIndex ||
            JSON.parse(window.localStorage.getItem("playIndex")) ||
            "0"
          );
        },
        curSongInfo(t) {
          return t.playList[t.playIndex];
        },
        isPlayed(t) {
          return t.isPlayed;
        },
        playListTips(t) {
          return t.playListTips;
        },
      },
      gt = i("fa7d");
    const yt = (t, e = []) =>
        gt["a"].concatPlayList(
          t.filter((t) => !t.license && !t.vip),
          e
        ),
      vt = (t, e) => e.findIndex((e) => e.id === t.id);
    var bt = {
      loginSuc(t, e) {
        t.commit("setLoginDialog", e);
      },
      playAll({ commit: t }, { list: e }) {
        t(dt, yt(e)), t(ut, !0), t(ht, 0);
      },
      selectPlay({ commit: t, state: e }, { list: i }) {
        const s = yt(i, e.playList);
        t(dt, s), t(ut, !0), t(ht, vt(i[0], s));
      },
      addList({ commit: t, state: e }, { list: i }) {
        const s = yt(i, e.playList);
        t(dt, s);
      },
    };
    a["default"].use(c["a"]);
    var St = new c["a"].Store({
        state: ct,
        mutations: mt,
        getters: ft,
        actions: bt,
      }),
      kt = i("1f94"),
      Ct = i.n(kt),
      _t = i("bc3a"),
      Lt = i.n(_t),
      $t = i("5c96");
    const wt = Lt.a.create({
      time: 6e4,
      withCredentials: !0,
      baseURL: "https://autumnfish.cn",
    });
    (wt.defaults.withCredentials = !0),
      (wt.defaults.validateStatus = function () {
        return !0;
      }),
      wt.interceptors.request.use(
        function (t) {
          return t;
        },
        function (t) {
          return (
            $t["Message"].error({ message: "请求超时!" }), Promise.reject(t)
          );
        }
      ),
      wt.interceptors.response.use(
        function (t) {
          const e = t.status;
          return 200 === e
            ? Promise.resolve(t)
            : 301 === e
            ? ($t["Message"].error({ message: "请先登录!" }), !1)
            : Promise.reject(t);
        },
        function (t) {
          return Promise.reject(t);
        }
      );
    const It = ["get", "post"],
      Pt = {};
    It.forEach((t) => {
      Pt[t] = function (e, i, s) {
        return new Promise(function (a, n) {
          wt[t](e, i, s)
            .then((t) => {
              200 === t.status && a(t);
            })
            .catch((t) => {
              n(t);
            });
        });
      };
    });
    var xt = Pt;
    const Tt = () => xt.get("/banner", {}),
      Ot = ({ keywords: t = "" }) => xt.get("/search?keywords=" + t, {}),
      Dt = ({
        keywords: t = "",
        limit: e = 30,
        offset: i = 0,
        type: s = "1",
      }) =>
        xt.get(
          `/cloudsearch?keywords=${t}&limit=${e}&offset=${i}&type=${s}`,
          {}
        ),
      Mt = () => xt.get("/search/hot", {}),
      At = () => xt.get("/search/hot/detail", {}),
      jt = ({ keywords: t = "" }) =>
        xt.get("/search/suggest?keywords=" + t, {}),
      Vt = ({ keywords: t = "" }) =>
        xt.get("/search/multimatch?keywords=" + t, {}),
      Nt = ({ phone: t = "", pwd: e = "" }) =>
        xt.get(`/login/cellphone?phone=${t}&password=${e}`, {}),
      Ht = () => xt.get("/logout", {}),
      Ft = ({ uid: t = "" }) => xt.get("/user/detail?uid=" + t, {}),
      Et = ({ id: t = "" }) => xt.get("/check/music?id=" + t, {}),
      qt = () => xt.get("/playlist/hot", {}),
      Bt = ({ order: t = "hot", cat: e = "", limit: i = 50, offset: s = 0 }) =>
        xt.get(`/top/playlist?limit=${i}&order=${t}&cat=${e}&offset=${s}`, {}),
      Ut = (t = 30) => xt.get("/personalized?limit=" + t, {}),
      zt = (t = 20, e = 0) =>
        xt.get(`/top/playlist/highquality?limit=${t}&before=${e}`, {}),
      Rt = () => xt.get("/playlist/highquality/tags", {}),
      Yt = () => xt.get("/playlist/catlist", {}),
      Wt = ({ id: t = "", s: e = 8 }) =>
        xt.get(`/playlist/detail?id=${t}&s=${e}`, {}),
      Jt = ({ id: t = "", limit: e = 20, offset: i = 0 }) =>
        xt.get(`/playlist/subscribers?id=${t}&limit=${e}&offset=${i}`, {}),
      Xt = ({ id: t = "" }) => xt.get("/related/playlist?id=" + t, {}),
      Kt = ({ id: t = "", limit: e = 20, offset: i = 0, before: s = 0 }) =>
        xt.get(
          `/comment/playlist?id=${t}&limit=${e}&offset=${i}&before=${s}`,
          {}
        ),
      Gt = ({ t: t = 1, id: e = "" }) =>
        xt.get(`/playlist/subscribe?t=${t}&id=${e}`, {}),
      Qt = ({ uid: t = "", limit: e = 30, offset: i = 0 }) =>
        xt.get(`/user/playlist?uid=${t}&limit=${e}&offset=${i}`, {}),
      Zt = ({ op: t = "add", pid: e = "", tracks: i = "" }) =>
        xt.get(`/playlist/tracks?op=${t}&pid=${e}&tracks=${i}`, {}),
      te = ({ ids: t = "", timestamp: e = 0 }) =>
        xt.post("/song/detail?timestamp=" + e, { ids: t }),
      ee = ({ id: t = "" }) => xt.get("/song/url?id=" + t, {}),
      ie = ({ id: t = "", like: e = !1 }) =>
        xt.get(`/like?id=${t}&like=${e}`, {}),
      se = ({ id: t = "" }) => xt.get("/lyric?id=" + t, {}),
      ae = ({ id: t = "" }) => xt.get("/simi/song?id=" + t, {}),
      ne = ({
        id: t = "",
        limit: e = 20,
        offset: i = 0,
        before: s = 0,
        timestamp: a = 0,
      }) =>
        xt.get(
          `/comment/music?id=${t}&limit=${e}&offset=${i}&before=${s}&timestamp=${a}`,
          {}
        ),
      oe = ({
        t: t = 1,
        type: e = 0,
        id: i = "",
        content: s = "",
        commentId: a = "",
      }) =>
        xt.get(
          `/comment?t=${t}&type=${e}&id=${i}&content=${s}&commentId=${a}`,
          {}
        ),
      re = ({ id: t = "", cid: e = "", t: i = 1, type: s = 0 }) =>
        xt.get(`/comment/like?id=${t}&cid=${e}&t=${i}&type=${s}`, {}),
      le = ({ id: t = "" }) => xt.get("/album?id=" + t, {}),
      ce = ({ id: t = "" }) => xt.get("/album/detail/dynamic?id=" + t, {}),
      ue = ({ id: t = "", t: e = 1 }) =>
        xt.get(`/album/sub?id=${t}&t=${e}`, {}),
      de = ({
        id: t = "",
        limit: e = 20,
        offset: i = 0,
        before: s = 0,
        timestamp: a = 0,
      }) =>
        xt.get(
          `/comment/album?id=${t}&limit=${e}&offset=${i}&before=${s}&timestamp=${a}`,
          {}
        ),
      he = ({ id: t = "" }) => xt.get("/artist/desc?id=" + t, {}),
      pe = ({ id: t = "" }) => xt.get("/artists?id=" + t, {}),
      me = ({ id: t = "", t: e = "1" }) =>
        xt.get(`/artist/sub?id=${t}&t=${e}`, {}),
      fe = ({ id: t = "", limit: e = 50, offset: i = 0 }) =>
        xt.get(`/artist/album?id=${t}&limit=${e}&offset=${i}`, {}),
      ge = ({ id: t = "", limit: e = 50, offset: i = 0 }) =>
        xt.get(`/artist/mv?id=${t}&limit=${e}&offset=${i}`, {}),
      ye = ({
        type: t = -1,
        area: e = -1,
        initial: i = "",
        limit: s = 50,
        offset: a = 0,
      }) =>
        xt.get(
          `/artist/list?type=${t}&area=${e}&initial=${i}&limit=${s}&offset=${a}`,
          {}
        ),
      ve = () => xt.get("/artist/sublist", {}),
      be = ({
        area: t = "",
        type: e = "",
        order: i = "",
        limit: s = 50,
        offset: a = 0,
      }) =>
        xt.get(
          `/mv/all?area=${t}&type=${e}&order=${i}&limit=${s}&offset=${a}`,
          {}
        ),
      Se = ({ id: t = "" }) => xt.get("/mv/detail?mvid=" + t, {}),
      ke = ({ id: t = "", r: e = 1080 }) =>
        xt.get(`/mv/url?id=${t}&r=${e}`, {}),
      Ce = ({
        id: t = "",
        limit: e = 20,
        offset: i = 0,
        before: s = 0,
        timestamp: a = 0,
      }) =>
        xt.get(
          `/comment/mv?id=${t}&limit=${e}&offset=${i}&before=${s}&timestamp=${a}`,
          {}
        ),
      _e = ({ id: t = "" }) => xt.get("/simi/mv?mvid=" + t, {}),
      Le = () => xt.get("/toplist", {}),
      $e = () => xt.get("/toplist/detail", {}),
      we = ({ id: t = "", s: e = 8 }) =>
        xt.get(`/playlist/detail?id=${t}&s=${e}`, {}),
      Ie = ({ id: t = "", r: e = 1080 }) =>
        xt.get(`/video/url?id=${t}&r=${e}`, {}),
      Pe = ({ id: t = "" }) => xt.get("/video/detail?id=" + t, {}),
      xe = ({ id: t = "" }) => xt.get("/related/allvideo?id=" + t, {}),
      Te = ({
        id: t = "",
        limit: e = 20,
        offset: i = 0,
        before: s = 0,
        timestamp: a = 0,
      }) =>
        xt.get(
          `/comment/video?id=${t}&limit=${e}&offset=${i}&before=${s}&timestamp=${a}`,
          {}
        ),
      Oe = (t = 20, e = 0) => xt.get(`/hot/topic?limit=${t}&offset=${e}`, {}),
      De = ({
        limit: t = 20,
        offset: e = 0,
        area: i = "all",
        type: s = "new",
        year: a = "",
        month: n = "",
      }) =>
        xt.get(
          `/top/album?limit=${t}&offset=${e}&area=${i}&type=${s}&year=${a}&month=${n}`,
          {}
        ),
      Me = ({ limit: t = 30, offset: e = 0 }) =>
        xt.get(`/top/artists?limit=${t}&offset=${e}`, {}),
      Ae = ({ limit: t = 30, area: e = "" }) =>
        xt.get(`/mv/first?limit=${t}&area=${e}`, {});
    var je = i("6d3b"),
      Ve = i("5dc8"),
      Ne = i("b42f"),
      He = i("d17a"),
      Fe = i("487a"),
      Ee = i.n(Fe),
      qe = i("fb03"),
      Be = i.n(qe);
    i("aede"), i("3c5a"), i("bbe3"), i("0fae");
    a["default"]
      .use($t["Container"])
      .use($t["Header"])
      .use($t["Main"])
      .use($t["Footer"])
      .use($t["Row"])
      .use($t["Col"])
      .use($t["Menu"])
      .use($t["MenuItem"])
      .use($t["Carousel"])
      .use($t["CarouselItem"])
      .use($t["Image"])
      .use($t["Popover"])
      .use($t["Dialog"])
      .use($t["Button"])
      .use($t["Form"])
      .use($t["FormItem"])
      .use($t["Input"])
      .use($t["Dropdown"])
      .use($t["DropdownMenu"])
      .use($t["DropdownItem"])
      .use($t["Pagination"])
      .use($t["Backtop"])
      .use($t["Table"])
      .use($t["TableColumn"])
      .use($t["Badge"])
      .use($t["Tooltip"])
      .use($t["Autocomplete"]),
      (a["default"].prototype.$msg = $t["Message"]),
      (a["default"].prototype.$msgBox = $t["MessageBox"]);
    i("bccf");
    a["default"].directive("clickoutside", {
      bind(t, e, i) {
        function s(i) {
          if (t.contains(i.target)) return !1;
          e.expression && e.value(i);
        }
        (t.__vueClickOutside__ = s), document.addEventListener("click", s);
      },
      update() {},
      unbind(t, e) {
        document.removeEventListener("click", t.__vueClickOutside__),
          delete t.__vueClickOutside__;
      },
    }),
      a["default"].directive("focus", {
        bind(t, e) {
          console.log("bind");
        },
        inserted(t, e) {
          console.log("inserted"), console.log(t), console.log(e), t.focus();
        },
        update() {
          console.log("update");
        },
      }),
      je["a"].use([Ve["a"], Ne["a"], He["a"]]),
      a["default"].use(Ct.a),
      a["default"].use(Ee.a),
      a["default"].use(Be()(je["a"])),
      (a["default"].config.productionTip = !1),
      (a["default"].prototype.$http = s),
      (a["default"].prototype.$utils = gt["a"]),
      new a["default"]({ router: lt, store: St, render: (t) => t(z) }).$mount(
        "#app"
      );
  },
  "6bb4": function (t, e, i) {
    "use strict";
    i("94e6");
  },
  7567: function (t, e, i) {
    "use strict";
    i("0136");
  },
  "939a": function (t, e, i) {
    "use strict";
    i("0194");
  },
  "94e6": function (t, e, i) {},
  9721: function (t, e, i) {},
  a330: function (t, e, i) {
    t.exports = i.p + "img/goTop.f63e0c59.png";
  },
  a911: function (t, e, i) {
    "use strict";
    i("e35e");
  },
  aede: function (t, e, i) {},
  b13f: function (t, e, i) {
    "use strict";
    i("0f2c");
  },
  b4b8: function (t, e, i) {},
  b640: function (t, e, i) {
    t.exports = i.p + "img/logo.acb54777.jpg";
  },
  bc1d: function (t, e, i) {
    "use strict";
    i("03ce");
  },
  bccf: function (t, e, i) {},
  bf93: function (t, e, i) {
    "use strict";
    var s = function () {
        var t = this;
        t._self._c;
        return t._m(0);
      },
      a = [
        function () {
          var t = this,
            e = t._self._c;
          return e("div", { staticClass: "loading" }, [
            e("div", { staticClass: "loader" }),
          ]);
        },
      ],
      n = {
        components: {},
        data() {
          return {};
        },
        computed: {},
        methods: {},
      },
      o = n,
      r = (i("eab0"), i("2877")),
      l = Object(r["a"])(o, s, a, !1, null, "0bb1d930", null);
    e["a"] = l.exports;
  },
  deef: function (t, e, i) {},
  e0fc: function (t, e, i) {
    "use strict";
    i("deef");
  },
  e35e: function (t, e, i) {},
  eab0: function (t, e, i) {
    "use strict";
    i("9721");
  },
  eb4d: function (t, e, i) {
    "use strict";
    i.d(e, "a", function () {
      return n;
    });
    var s = i("fa7d");
    class a {
      constructor({
        id: t,
        name: e,
        mvId: i,
        singer: s,
        album: a,
        alia: n,
        duration: o,
        url: r,
        vip: l,
        license: c,
        publishTime: u,
      }) {
        (this.id = t),
          (this.name = e),
          (this.mvId = i),
          (this.singer = s),
          (this.album = a),
          (this.alia = n),
          (this.duration = o),
          (this.url = r),
          (this.vip = l),
          (this.license = c),
          (this.publishTime = u);
      }
    }
    function n(t) {
      return new a({
        id: String(t.id),
        name: t.name,
        mvId: t.mv,
        singer: t.ar,
        album: t.al,
        alia: t.alia,
        vip: 1 === t.fee,
        license: t.license,
        duration: s["a"].formatSongTime(t.dt),
        url: `https://music.163.com/song/media/outer/url?id=${t.id}.mp3`,
        publishTime: s["a"].formatMsgTime(t.publishTime),
      });
    }
  },
  ee04: function (t, e, i) {},
  fa7d: function (t, e, i) {
    "use strict";
    e["a"] = {
      formartNum(t) {
        let e = 0;
        return (e = t > 9999 ? Math.round((t / 1e4) * 10) / 10 + "万" : t), e;
      },
      formartDate(t, e) {
        const i = new Date(t),
          s = {
            yyyy: i.getFullYear(),
            MM: (i.getMonth() + 1 + "").padStart(2, "0"),
            dd: (i.getDate() + "").padStart(2, "0"),
            HH: (i.getHours() + "").padStart(2, "0"),
            mm: (i.getMinutes() + "").padStart(2, "0"),
            ss: (i.getSeconds() + "").padStart(2, "0"),
          };
        for (const a in s) {
          const t = new RegExp("(" + a + ")").exec(e);
          t && (e = e.replace(t[1], s[a]));
        }
        return e;
      },
      formatSongTime(t = 0) {
        t /= 1e3;
        const e = (Math.floor(t / 60) + "").padStart(2, "0"),
          i = (Math.floor(t % 60) + "").padStart(2, "0");
        return `${e}:${i}`;
      },
      formatMsgTime(t) {
        let e = "";
        const i = new Date(),
          s = new Date(t);
        return (
          (e =
            i.toDateString() === s.toDateString()
              ? this.formartDate(t, "HH:mm")
              : s.getFullYear() === i.getFullYear()
              ? this.formartDate(t, "MM月dd日 HH:mm")
              : this.formartDate(t, "yyyy年MM月dd日")),
          e
        );
      },
      concatPlayList(t = [], e = []) {
        const i = [...e, ...t],
          s = new Map();
        for (const a of i) s.has(a.id) || s.set(a.id, a);
        return [...s.values()];
      },
    };
  },
});
//# sourceMappingURL=app.402228d4.js.map
