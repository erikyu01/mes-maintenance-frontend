var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// mock/workorder.js
var workorder_exports = {};
__export(workorder_exports, {
  default: () => workorder_default
});
module.exports = __toCommonJS(workorder_exports);
var import_mockjs = __toESM(require("mockjs"));
var list = () => {
  const result = [];
  const total = 50;
  for (let i = 1; i <= total; i++) {
    const item = {
      ID: i,
      \u622A\u6B62\u65E5\u671F: '@date("2025-03-dd")',
      // 随机生成的截止日期
      \u5DE5\u5355\u53F7: '@date("yyyyMMdd")-WO-1-2-@string("number", 6)',
      // 工单编码格式
      \u5DE5\u5355\u9884\u89C8\u56FE: "https://wpimg.wallstcn.com/e4558086-631c-425c-9430-56ffb46e70b3",
      \u8FDB\u5EA6: "@integer(0, 100) %",
      // 随机生成 0% - 100%
      \u4F18\u5148\u7EA7: '@pick(["\u4F4E", "\u4E2D", "\u9AD8"])',
      // 随机生成优先级
      \u7EF4\u62A4\u7C7B\u578B: '@pick(["\u9884\u9632\u6027\u7EF4\u62A4", "\u7EA0\u6B63\u6027\u7EF4\u62A4", "\u7D27\u6025\u7EF4\u62A4"])',
      // 随机生成维护类型
      \u7C7B\u522B: '@pick(["\u7535\u6C14", "\u673A\u68B0", "\u4EEA\u8868"])',
      // 随机生成类别
      \u6D3E\u53D1\u4EBA: "@cname",
      // 派发人随机生成名字
      \u521B\u5EFA\u8005: "@cname",
      // 创建者随机生成名字
      \u9884\u4F30\u65F6\u95F4: "@integer(1, 8) \u5C0F\u65F6"
      // 随机生成 1 - 8 小时
    };
    result.push(import_mockjs.default.mock(item));
  }
  return result;
};
var workorder_default = [
  {
    url: "/api/workorders",
    type: "get",
    response: (config) => {
      return {
        code: 200,
        message: "success",
        data: list()
      };
    }
  }
];
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsibW9jay93b3Jrb3JkZXIuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9faW5qZWN0ZWRfZmlsZW5hbWVfXyA9IFwiQzpcXFxcZGV2XFxcXFZ1ZVxcXFxlcmljLW1lcy1tYWludGVuYW5jZS1mcm9udGVuZFxcXFxtb2NrXFxcXHdvcmtvcmRlci5qc1wiO2NvbnN0IF9faW5qZWN0ZWRfZGlybmFtZV9fID0gXCJDOlxcXFxkZXZcXFxcVnVlXFxcXGVyaWMtbWVzLW1haW50ZW5hbmNlLWZyb250ZW5kXFxcXG1vY2tcIjtjb25zdCBfX2luamVjdGVkX2ltcG9ydF9tZXRhX3VybF9fID0gXCJmaWxlOi8vL0M6L2Rldi9WdWUvZXJpYy1tZXMtbWFpbnRlbmFuY2UtZnJvbnRlbmQvbW9jay93b3Jrb3JkZXIuanNcIjtpbXBvcnQgTW9jayBmcm9tICdtb2NranMnXHJcblxyXG5jb25zdCBsaXN0ID0gKCkgPT4ge1xyXG4gIGNvbnN0IHJlc3VsdCA9IFtdXHJcbiAgY29uc3QgdG90YWwgPSA1MCAvLyBcdTYzQTdcdTUyMzZcdTc1MUZcdTYyMTBcdTc2ODRcdTVERTVcdTUzNTVcdTY1NzBcdTkxQ0ZcclxuXHJcbiAgZm9yICggbGV0IGkgPSAxOyBpIDw9IHRvdGFsOyBpKysgKSB7XHJcbiAgICBjb25zdCBpdGVtID0ge1xyXG4gICAgICBJRCA6IGksXHJcbiAgICAgIFx1NjIyQVx1NkI2Mlx1NjVFNVx1NjcxRiA6ICdAZGF0ZShcIjIwMjUtMDMtZGRcIiknLCAvLyBcdTk2OEZcdTY3M0FcdTc1MUZcdTYyMTBcdTc2ODRcdTYyMkFcdTZCNjJcdTY1RTVcdTY3MUZcclxuICAgICAgXHU1REU1XHU1MzU1XHU1M0Y3IDogJ0BkYXRlKFwieXl5eU1NZGRcIiktV08tMS0yLUBzdHJpbmcoXCJudW1iZXJcIiwgNiknLCAvLyBcdTVERTVcdTUzNTVcdTdGMTZcdTc4MDFcdTY4M0NcdTVGMEZcclxuICAgICAgXHU1REU1XHU1MzU1XHU5ODg0XHU4OUM4XHU1NkZFIDogJ2h0dHBzOi8vd3BpbWcud2FsbHN0Y24uY29tL2U0NTU4MDg2LTYzMWMtNDI1Yy05NDMwLTU2ZmZiNDZlNzBiMycsXHJcbiAgICAgIFx1OEZEQlx1NUVBNiA6ICdAaW50ZWdlcigwLCAxMDApICUnLCAvLyBcdTk2OEZcdTY3M0FcdTc1MUZcdTYyMTAgMCUgLSAxMDAlXHJcbiAgICAgIFx1NEYxOFx1NTE0OFx1N0VBNyA6ICdAcGljayhbXCJcdTRGNEVcIiwgXCJcdTRFMkRcIiwgXCJcdTlBRDhcIl0pJywgLy8gXHU5NjhGXHU2NzNBXHU3NTFGXHU2MjEwXHU0RjE4XHU1MTQ4XHU3RUE3XHJcbiAgICAgIFx1N0VGNFx1NjJBNFx1N0M3Qlx1NTc4QiA6ICdAcGljayhbXCJcdTk4ODRcdTk2MzJcdTYwMjdcdTdFRjRcdTYyQTRcIiwgXCJcdTdFQTBcdTZCNjNcdTYwMjdcdTdFRjRcdTYyQTRcIiwgXCJcdTdEMjdcdTYwMjVcdTdFRjRcdTYyQTRcIl0pJywgLy8gXHU5NjhGXHU2NzNBXHU3NTFGXHU2MjEwXHU3RUY0XHU2MkE0XHU3QzdCXHU1NzhCXHJcbiAgICAgIFx1N0M3Qlx1NTIyQiA6ICdAcGljayhbXCJcdTc1MzVcdTZDMTRcIiwgXCJcdTY3M0FcdTY4QjBcIiwgXCJcdTRFRUFcdTg4NjhcIl0pJywgLy8gXHU5NjhGXHU2NzNBXHU3NTFGXHU2MjEwXHU3QzdCXHU1MjJCXHJcbiAgICAgIFx1NkQzRVx1NTNEMVx1NEVCQSA6ICdAY25hbWUnLCAvLyBcdTZEM0VcdTUzRDFcdTRFQkFcdTk2OEZcdTY3M0FcdTc1MUZcdTYyMTBcdTU0MERcdTVCNTdcclxuICAgICAgXHU1MjFCXHU1RUZBXHU4MDA1IDogJ0BjbmFtZScsIC8vIFx1NTIxQlx1NUVGQVx1ODAwNVx1OTY4Rlx1NjczQVx1NzUxRlx1NjIxMFx1NTQwRFx1NUI1N1xyXG4gICAgICBcdTk4ODRcdTRGMzBcdTY1RjZcdTk1RjQgOiAnQGludGVnZXIoMSwgOCkgXHU1QzBGXHU2NUY2JyAvLyBcdTk2OEZcdTY3M0FcdTc1MUZcdTYyMTAgMSAtIDggXHU1QzBGXHU2NUY2XHJcbiAgICB9XHJcbiAgICByZXN1bHQucHVzaCggTW9jay5tb2NrKCBpdGVtICkgKVxyXG4gIH1cclxuICByZXR1cm4gcmVzdWx0XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFtcclxuICB7XHJcbiAgICB1cmwgOiAnL2FwaS93b3Jrb3JkZXJzJyxcclxuICAgIHR5cGUgOiAnZ2V0JyxcclxuICAgIHJlc3BvbnNlIDogY29uZmlnID0+IHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICBjb2RlIDogMjAwLFxyXG4gICAgICAgIG1lc3NhZ2UgOiAnc3VjY2VzcycsXHJcbiAgICAgICAgZGF0YSA6IGxpc3QoKVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5dXHJcbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUEyUixvQkFBaUI7QUFFNVMsSUFBTSxPQUFPLE1BQU07QUFDakIsUUFBTSxTQUFTLENBQUM7QUFDaEIsUUFBTSxRQUFRO0FBRWQsV0FBVSxJQUFJLEdBQUcsS0FBSyxPQUFPLEtBQU07QUFDakMsVUFBTSxPQUFPO0FBQUEsTUFDWCxJQUFLO0FBQUEsTUFDTCwwQkFBTztBQUFBO0FBQUEsTUFDUCxvQkFBTTtBQUFBO0FBQUEsTUFDTixnQ0FBUTtBQUFBLE1BQ1IsY0FBSztBQUFBO0FBQUEsTUFDTCxvQkFBTTtBQUFBO0FBQUEsTUFDTiwwQkFBTztBQUFBO0FBQUEsTUFDUCxjQUFLO0FBQUE7QUFBQSxNQUNMLG9CQUFNO0FBQUE7QUFBQSxNQUNOLG9CQUFNO0FBQUE7QUFBQSxNQUNOLDBCQUFPO0FBQUE7QUFBQSxJQUNUO0FBQ0EsV0FBTyxLQUFNLGNBQUFBLFFBQUssS0FBTSxJQUFLLENBQUU7QUFBQSxFQUNqQztBQUNBLFNBQU87QUFDVDtBQUVBLElBQU8sb0JBQVE7QUFBQSxFQUNiO0FBQUEsSUFDRSxLQUFNO0FBQUEsSUFDTixNQUFPO0FBQUEsSUFDUCxVQUFXLFlBQVU7QUFDbkIsYUFBTztBQUFBLFFBQ0wsTUFBTztBQUFBLFFBQ1AsU0FBVTtBQUFBLFFBQ1YsTUFBTyxLQUFLO0FBQUEsTUFDZDtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQ0Y7IiwKICAibmFtZXMiOiBbIk1vY2siXQp9Cg==
