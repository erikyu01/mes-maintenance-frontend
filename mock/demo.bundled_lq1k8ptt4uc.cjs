var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
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
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// mock/demo.js
var demo_exports = {};
__export(demo_exports, {
  default: () => demo_default
});
module.exports = __toCommonJS(demo_exports);
var list = () => {
  const result = [];
  const total = 100;
  const baseContent = '<p>I am testing data, I am testing data.</p><p><img src="https://wpimg.wallstcn.com/4c69009c-0fd4-4153-b112-6cb53d1cf943"></p>';
  const image_uri = "https://wpimg.wallstcn.com/e4558086-631c-425c-9430-56ffb46e70b3";
  for (let i = 1; i <= total; i++) {
    const item = {
      id: "@increment",
      timestamp: "@datetime()",
      author: "@first",
      reviewer: "@first",
      title: "@title(5, 10)",
      content_short: "mock data",
      content: baseContent,
      forecast: "@float(0, 100, 2, 2)",
      importance: "@integer(1, 3)",
      "type|1": ["CN", "US", "JP", "EU"],
      "status|1": ["published", "draft"],
      display_time: "@datetime",
      comment_disabled: true,
      pageviews: "@integer(300, 5000)",
      image_uri,
      platforms: ["a-platform"]
    };
    result.push(item);
  }
  return result;
};
var demo_default = [
  {
    url: "/api/demo/tableList",
    method: "get",
    response: () => {
      return {
        code: 200,
        message: "success",
        data: list()
      };
    }
  }
];
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsibW9jay9kZW1vLmpzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJjb25zdCBfX2luamVjdGVkX2ZpbGVuYW1lX18gPSBcIkM6XFxcXGRldlxcXFxWdWVcXFxcZXJpYy1tZXMtbWFpbnRlbmFuY2UtZnJvbnRlbmRcXFxcbW9ja1xcXFxkZW1vLmpzXCI7Y29uc3QgX19pbmplY3RlZF9kaXJuYW1lX18gPSBcIkM6XFxcXGRldlxcXFxWdWVcXFxcZXJpYy1tZXMtbWFpbnRlbmFuY2UtZnJvbnRlbmRcXFxcbW9ja1wiO2NvbnN0IF9faW5qZWN0ZWRfaW1wb3J0X21ldGFfdXJsX18gPSBcImZpbGU6Ly8vQzovZGV2L1Z1ZS9lcmljLW1lcy1tYWludGVuYW5jZS1mcm9udGVuZC9tb2NrL2RlbW8uanNcIjtcclxuY29uc3QgbGlzdCA9ICgpID0+IHtcclxuICBjb25zdCByZXN1bHQgPSBbXVxyXG4gIGNvbnN0IHRvdGFsID0gMTAwXHJcbiAgY29uc3QgYmFzZUNvbnRlbnQgPSAnPHA+SSBhbSB0ZXN0aW5nIGRhdGEsIEkgYW0gdGVzdGluZyBkYXRhLjwvcD48cD48aW1nIHNyYz1cImh0dHBzOi8vd3BpbWcud2FsbHN0Y24uY29tLzRjNjkwMDljLTBmZDQtNDE1My1iMTEyLTZjYjUzZDFjZjk0M1wiPjwvcD4nXHJcbiAgY29uc3QgaW1hZ2VfdXJpID0gJ2h0dHBzOi8vd3BpbWcud2FsbHN0Y24uY29tL2U0NTU4MDg2LTYzMWMtNDI1Yy05NDMwLTU2ZmZiNDZlNzBiMydcclxuICBcclxuICBmb3IgKGxldCBpID0gMTsgaSA8PSB0b3RhbDsgaSsrKSB7XHJcbiAgICBjb25zdCBpdGVtID0ge1xyXG4gICAgICBpZDogJ0BpbmNyZW1lbnQnLFxyXG4gICAgICB0aW1lc3RhbXA6ICdAZGF0ZXRpbWUoKScsXHJcbiAgICAgIGF1dGhvcjogJ0BmaXJzdCcsXHJcbiAgICAgIHJldmlld2VyOiAnQGZpcnN0JyxcclxuICAgICAgdGl0bGU6ICdAdGl0bGUoNSwgMTApJyxcclxuICAgICAgY29udGVudF9zaG9ydDogJ21vY2sgZGF0YScsXHJcbiAgICAgIGNvbnRlbnQ6IGJhc2VDb250ZW50LFxyXG4gICAgICBmb3JlY2FzdDogJ0BmbG9hdCgwLCAxMDAsIDIsIDIpJyxcclxuICAgICAgaW1wb3J0YW5jZTogJ0BpbnRlZ2VyKDEsIDMpJyxcclxuICAgICAgJ3R5cGV8MSc6IFsnQ04nLCAnVVMnLCAnSlAnLCAnRVUnXSxcclxuICAgICAgJ3N0YXR1c3wxJzogWydwdWJsaXNoZWQnLCAnZHJhZnQnXSxcclxuICAgICAgZGlzcGxheV90aW1lOiAnQGRhdGV0aW1lJyxcclxuICAgICAgY29tbWVudF9kaXNhYmxlZDogdHJ1ZSxcclxuICAgICAgcGFnZXZpZXdzOiAnQGludGVnZXIoMzAwLCA1MDAwKScsXHJcbiAgICAgIGltYWdlX3VyaSxcclxuICAgICAgcGxhdGZvcm1zOiBbJ2EtcGxhdGZvcm0nXVxyXG4gICAgfVxyXG4gICAgcmVzdWx0LnB1c2goIGl0ZW0gKTtcclxuICB9XHJcbiAgXHJcbiAgcmV0dXJuIHJlc3VsdFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgW1xyXG4gIHtcclxuICAgIHVybDogJy9hcGkvZGVtby90YWJsZUxpc3QnLFxyXG4gICAgbWV0aG9kOiAnZ2V0JyxcclxuICAgIHJlc3BvbnNlOiAoKSA9PiB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgY29kZTogMjAwLFxyXG4gICAgICAgIG1lc3NhZ2U6ICdzdWNjZXNzJyxcclxuICAgICAgICBkYXRhOiBsaXN0KClcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0sXHJcbiAgXHJcbl1cclxuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQSxJQUFNLE9BQU8sTUFBTTtBQUNqQixRQUFNLFNBQVMsQ0FBQztBQUNoQixRQUFNLFFBQVE7QUFDZCxRQUFNLGNBQWM7QUFDcEIsUUFBTSxZQUFZO0FBRWxCLFdBQVMsSUFBSSxHQUFHLEtBQUssT0FBTyxLQUFLO0FBQy9CLFVBQU0sT0FBTztBQUFBLE1BQ1gsSUFBSTtBQUFBLE1BQ0osV0FBVztBQUFBLE1BQ1gsUUFBUTtBQUFBLE1BQ1IsVUFBVTtBQUFBLE1BQ1YsT0FBTztBQUFBLE1BQ1AsZUFBZTtBQUFBLE1BQ2YsU0FBUztBQUFBLE1BQ1QsVUFBVTtBQUFBLE1BQ1YsWUFBWTtBQUFBLE1BQ1osVUFBVSxDQUFDLE1BQU0sTUFBTSxNQUFNLElBQUk7QUFBQSxNQUNqQyxZQUFZLENBQUMsYUFBYSxPQUFPO0FBQUEsTUFDakMsY0FBYztBQUFBLE1BQ2Qsa0JBQWtCO0FBQUEsTUFDbEIsV0FBVztBQUFBLE1BQ1g7QUFBQSxNQUNBLFdBQVcsQ0FBQyxZQUFZO0FBQUEsSUFDMUI7QUFDQSxXQUFPLEtBQU0sSUFBSztBQUFBLEVBQ3BCO0FBRUEsU0FBTztBQUNUO0FBRUEsSUFBTyxlQUFRO0FBQUEsRUFDYjtBQUFBLElBQ0UsS0FBSztBQUFBLElBQ0wsUUFBUTtBQUFBLElBQ1IsVUFBVSxNQUFNO0FBQ2QsYUFBTztBQUFBLFFBQ0wsTUFBTTtBQUFBLFFBQ04sU0FBUztBQUFBLFFBQ1QsTUFBTSxLQUFLO0FBQUEsTUFDYjtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBRUY7IiwKICAibmFtZXMiOiBbXQp9Cg==
