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

// mock/article.js
var article_exports = {};
__export(article_exports, {
  default: () => article_default
});
module.exports = __toCommonJS(article_exports);
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
var article_default = [
  {
    url: "/api/article/list",
    method: "get",
    response: (config) => {
      const { importance, type, title, page = 1, limit = 20, sort } = config.query;
      const List2 = list();
      let mockList = List2.filter((item) => {
        if (importance && item.importance !== +importance)
          return false;
        if (type && item.type !== type)
          return false;
        if (title && item.title.indexOf(title) < 0)
          return false;
        return true;
      });
      if (sort === "-id") {
        mockList = mockList.reverse();
      }
      const pageList = mockList.filter((item, index) => index < limit * page && index >= limit * (page - 1));
      return {
        code: 200,
        message: "success",
        data: {
          total: mockList.length,
          items: pageList
        }
      };
    }
  },
  {
    url: "/api/article/detail",
    type: "get",
    response: (config) => {
      const { id } = config.query;
      for (const article of List) {
        if (article.id === +id) {
          return {
            code: 200,
            message: "success",
            data: article
          };
        }
      }
    }
  },
  {
    url: "/api/article/pv",
    type: "get",
    response: (_) => {
      return {
        code: 200,
        message: "success",
        data: {
          pvData: [
            { key: "PC", pv: 1024 },
            { key: "mobile", pv: 1024 },
            { key: "ios", pv: 1024 },
            { key: "android", pv: 1024 }
          ]
        }
      };
    }
  },
  {
    url: "/api/article/create",
    type: "post",
    response: (_) => {
      return {
        code: 200,
        message: "success",
        data: "success"
      };
    }
  },
  {
    url: "/api/article/update",
    type: "post",
    response: (_) => {
      return {
        code: 200,
        message: "success",
        data: "success"
      };
    }
  }
];
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsibW9jay9hcnRpY2xlLmpzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJjb25zdCBfX2luamVjdGVkX2ZpbGVuYW1lX18gPSBcIkM6XFxcXGRldlxcXFxWdWVcXFxcZXJpYy1tZXMtbWFpbnRlbmFuY2UtZnJvbnRlbmRcXFxcbW9ja1xcXFxhcnRpY2xlLmpzXCI7Y29uc3QgX19pbmplY3RlZF9kaXJuYW1lX18gPSBcIkM6XFxcXGRldlxcXFxWdWVcXFxcZXJpYy1tZXMtbWFpbnRlbmFuY2UtZnJvbnRlbmRcXFxcbW9ja1wiO2NvbnN0IF9faW5qZWN0ZWRfaW1wb3J0X21ldGFfdXJsX18gPSBcImZpbGU6Ly8vQzovZGV2L1Z1ZS9lcmljLW1lcy1tYWludGVuYW5jZS1mcm9udGVuZC9tb2NrL2FydGljbGUuanNcIjtcclxuY29uc3QgbGlzdCA9ICgpID0+IHtcclxuICBjb25zdCByZXN1bHQgPSBbXVxyXG4gIGNvbnN0IHRvdGFsID0gMTAwXHJcbiAgY29uc3QgYmFzZUNvbnRlbnQgPSAnPHA+SSBhbSB0ZXN0aW5nIGRhdGEsIEkgYW0gdGVzdGluZyBkYXRhLjwvcD48cD48aW1nIHNyYz1cImh0dHBzOi8vd3BpbWcud2FsbHN0Y24uY29tLzRjNjkwMDljLTBmZDQtNDE1My1iMTEyLTZjYjUzZDFjZjk0M1wiPjwvcD4nXHJcbiAgY29uc3QgaW1hZ2VfdXJpID0gJ2h0dHBzOi8vd3BpbWcud2FsbHN0Y24uY29tL2U0NTU4MDg2LTYzMWMtNDI1Yy05NDMwLTU2ZmZiNDZlNzBiMydcclxuICBcclxuICBmb3IgKGxldCBpID0gMTsgaSA8PSB0b3RhbDsgaSsrKSB7XHJcbiAgICBjb25zdCBpdGVtID0ge1xyXG4gICAgICBpZDogJ0BpbmNyZW1lbnQnLFxyXG4gICAgICB0aW1lc3RhbXA6ICdAZGF0ZXRpbWUoKScsXHJcbiAgICAgIGF1dGhvcjogJ0BmaXJzdCcsXHJcbiAgICAgIHJldmlld2VyOiAnQGZpcnN0JyxcclxuICAgICAgdGl0bGU6ICdAdGl0bGUoNSwgMTApJyxcclxuICAgICAgY29udGVudF9zaG9ydDogJ21vY2sgZGF0YScsXHJcbiAgICAgIGNvbnRlbnQ6IGJhc2VDb250ZW50LFxyXG4gICAgICBmb3JlY2FzdDogJ0BmbG9hdCgwLCAxMDAsIDIsIDIpJyxcclxuICAgICAgaW1wb3J0YW5jZTogJ0BpbnRlZ2VyKDEsIDMpJyxcclxuICAgICAgJ3R5cGV8MSc6IFsnQ04nLCAnVVMnLCAnSlAnLCAnRVUnXSxcclxuICAgICAgJ3N0YXR1c3wxJzogWydwdWJsaXNoZWQnLCAnZHJhZnQnXSxcclxuICAgICAgZGlzcGxheV90aW1lOiAnQGRhdGV0aW1lJyxcclxuICAgICAgY29tbWVudF9kaXNhYmxlZDogdHJ1ZSxcclxuICAgICAgcGFnZXZpZXdzOiAnQGludGVnZXIoMzAwLCA1MDAwKScsXHJcbiAgICAgIGltYWdlX3VyaSxcclxuICAgICAgcGxhdGZvcm1zOiBbJ2EtcGxhdGZvcm0nXVxyXG4gICAgfVxyXG4gICAgcmVzdWx0LnB1c2goIGl0ZW0gKTtcclxuICB9XHJcbiAgXHJcbiAgcmV0dXJuIHJlc3VsdFxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBbXHJcbiAge1xyXG4gICAgdXJsOiAnL2FwaS9hcnRpY2xlL2xpc3QnLFxyXG4gICAgbWV0aG9kOiAnZ2V0JyxcclxuICAgIHJlc3BvbnNlOiAoIGNvbmZpZyApID0+IHtcclxuICAgICAgY29uc3QgeyBpbXBvcnRhbmNlLCB0eXBlLCB0aXRsZSwgcGFnZSA9IDEsIGxpbWl0ID0gMjAsIHNvcnQgfSA9IGNvbmZpZy5xdWVyeVxyXG4gICAgICBcclxuICAgICAgY29uc3QgTGlzdCA9IGxpc3QoKVxyXG4gIFxyXG4gICAgICBsZXQgbW9ja0xpc3QgPSBMaXN0LmZpbHRlcihpdGVtID0+IHtcclxuICAgICAgICBpZiAoaW1wb3J0YW5jZSAmJiBpdGVtLmltcG9ydGFuY2UgIT09ICtpbXBvcnRhbmNlKSByZXR1cm4gZmFsc2VcclxuICAgICAgICBpZiAodHlwZSAmJiBpdGVtLnR5cGUgIT09IHR5cGUpIHJldHVybiBmYWxzZVxyXG4gICAgICAgIGlmICh0aXRsZSAmJiBpdGVtLnRpdGxlLmluZGV4T2YodGl0bGUpIDwgMCkgcmV0dXJuIGZhbHNlXHJcbiAgICAgICAgcmV0dXJuIHRydWVcclxuICAgICAgfSlcclxuICBcclxuICAgICAgaWYgKCBzb3J0ID09PSAnLWlkJyApIHtcclxuICAgICAgICBtb2NrTGlzdCA9IG1vY2tMaXN0LnJldmVyc2UoKVxyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICBjb25zdCBwYWdlTGlzdCA9IG1vY2tMaXN0LmZpbHRlcigoaXRlbSwgaW5kZXgpID0+IGluZGV4IDwgbGltaXQgKiBwYWdlICYmIGluZGV4ID49IGxpbWl0ICogKHBhZ2UgLSAxKSlcclxuICAgICAgXHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgY29kZTogMjAwLFxyXG4gICAgICAgIG1lc3NhZ2U6ICdzdWNjZXNzJyxcclxuICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICB0b3RhbDogbW9ja0xpc3QubGVuZ3RoLFxyXG4gICAgICAgICAgaXRlbXM6IHBhZ2VMaXN0XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSxcclxuICBcclxuICB7XHJcbiAgICB1cmw6ICcvYXBpL2FydGljbGUvZGV0YWlsJyxcclxuICAgIHR5cGU6ICdnZXQnLFxyXG4gICAgcmVzcG9uc2U6IGNvbmZpZyA9PiB7XHJcbiAgICAgIGNvbnN0IHsgaWQgfSA9IGNvbmZpZy5xdWVyeVxyXG4gICAgICBmb3IgKGNvbnN0IGFydGljbGUgb2YgTGlzdCkge1xyXG4gICAgICAgIGlmIChhcnRpY2xlLmlkID09PSAraWQpIHtcclxuICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGNvZGU6IDIwMCxcclxuICAgICAgICAgICAgbWVzc2FnZTogJ3N1Y2Nlc3MnLFxyXG4gICAgICAgICAgICBkYXRhOiBhcnRpY2xlXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSxcclxuICBcclxuICB7XHJcbiAgICB1cmw6ICcvYXBpL2FydGljbGUvcHYnLFxyXG4gICAgdHlwZTogJ2dldCcsXHJcbiAgICByZXNwb25zZTogXyA9PiB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgY29kZTogMjAwLFxyXG4gICAgICAgIG1lc3NhZ2U6ICdzdWNjZXNzJyxcclxuICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICBwdkRhdGE6IFtcclxuICAgICAgICAgICAgeyBrZXk6ICdQQycsIHB2OiAxMDI0IH0sXHJcbiAgICAgICAgICAgIHsga2V5OiAnbW9iaWxlJywgcHY6IDEwMjQgfSxcclxuICAgICAgICAgICAgeyBrZXk6ICdpb3MnLCBwdjogMTAyNCB9LFxyXG4gICAgICAgICAgICB7IGtleTogJ2FuZHJvaWQnLCBwdjogMTAyNCB9XHJcbiAgICAgICAgICBdXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSxcclxuICBcclxuICB7XHJcbiAgICB1cmw6ICcvYXBpL2FydGljbGUvY3JlYXRlJyxcclxuICAgIHR5cGU6ICdwb3N0JyxcclxuICAgIHJlc3BvbnNlOiBfID0+IHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICBjb2RlOiAyMDAsXHJcbiAgICAgICAgbWVzc2FnZTogJ3N1Y2Nlc3MnLFxyXG4gICAgICAgIGRhdGE6ICdzdWNjZXNzJ1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSxcclxuICBcclxuICB7XHJcbiAgICB1cmw6ICcvYXBpL2FydGljbGUvdXBkYXRlJyxcclxuICAgIHR5cGU6ICdwb3N0JyxcclxuICAgIHJlc3BvbnNlOiBfID0+IHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICBjb2RlOiAyMDAsXHJcbiAgICAgICAgbWVzc2FnZTogJ3N1Y2Nlc3MnLFxyXG4gICAgICAgIGRhdGE6ICdzdWNjZXNzJ1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG5dXHJcbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0EsSUFBTSxPQUFPLE1BQU07QUFDakIsUUFBTSxTQUFTLENBQUM7QUFDaEIsUUFBTSxRQUFRO0FBQ2QsUUFBTSxjQUFjO0FBQ3BCLFFBQU0sWUFBWTtBQUVsQixXQUFTLElBQUksR0FBRyxLQUFLLE9BQU8sS0FBSztBQUMvQixVQUFNLE9BQU87QUFBQSxNQUNYLElBQUk7QUFBQSxNQUNKLFdBQVc7QUFBQSxNQUNYLFFBQVE7QUFBQSxNQUNSLFVBQVU7QUFBQSxNQUNWLE9BQU87QUFBQSxNQUNQLGVBQWU7QUFBQSxNQUNmLFNBQVM7QUFBQSxNQUNULFVBQVU7QUFBQSxNQUNWLFlBQVk7QUFBQSxNQUNaLFVBQVUsQ0FBQyxNQUFNLE1BQU0sTUFBTSxJQUFJO0FBQUEsTUFDakMsWUFBWSxDQUFDLGFBQWEsT0FBTztBQUFBLE1BQ2pDLGNBQWM7QUFBQSxNQUNkLGtCQUFrQjtBQUFBLE1BQ2xCLFdBQVc7QUFBQSxNQUNYO0FBQUEsTUFDQSxXQUFXLENBQUMsWUFBWTtBQUFBLElBQzFCO0FBQ0EsV0FBTyxLQUFNLElBQUs7QUFBQSxFQUNwQjtBQUVBLFNBQU87QUFDVDtBQUVBLElBQU8sa0JBQVE7QUFBQSxFQUNiO0FBQUEsSUFDRSxLQUFLO0FBQUEsSUFDTCxRQUFRO0FBQUEsSUFDUixVQUFVLENBQUUsV0FBWTtBQUN0QixZQUFNLEVBQUUsWUFBWSxNQUFNLE9BQU8sT0FBTyxHQUFHLFFBQVEsSUFBSSxLQUFLLElBQUksT0FBTztBQUV2RSxZQUFNQSxRQUFPLEtBQUs7QUFFbEIsVUFBSSxXQUFXQSxNQUFLLE9BQU8sVUFBUTtBQUNqQyxZQUFJLGNBQWMsS0FBSyxlQUFlLENBQUM7QUFBWSxpQkFBTztBQUMxRCxZQUFJLFFBQVEsS0FBSyxTQUFTO0FBQU0saUJBQU87QUFDdkMsWUFBSSxTQUFTLEtBQUssTUFBTSxRQUFRLEtBQUssSUFBSTtBQUFHLGlCQUFPO0FBQ25ELGVBQU87QUFBQSxNQUNULENBQUM7QUFFRCxVQUFLLFNBQVMsT0FBUTtBQUNwQixtQkFBVyxTQUFTLFFBQVE7QUFBQSxNQUM5QjtBQUVBLFlBQU0sV0FBVyxTQUFTLE9BQU8sQ0FBQyxNQUFNLFVBQVUsUUFBUSxRQUFRLFFBQVEsU0FBUyxTQUFTLE9BQU8sRUFBRTtBQUVyRyxhQUFPO0FBQUEsUUFDTCxNQUFNO0FBQUEsUUFDTixTQUFTO0FBQUEsUUFDVCxNQUFNO0FBQUEsVUFDSixPQUFPLFNBQVM7QUFBQSxVQUNoQixPQUFPO0FBQUEsUUFDVDtBQUFBLE1BQ0Y7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUFBLEVBRUE7QUFBQSxJQUNFLEtBQUs7QUFBQSxJQUNMLE1BQU07QUFBQSxJQUNOLFVBQVUsWUFBVTtBQUNsQixZQUFNLEVBQUUsR0FBRyxJQUFJLE9BQU87QUFDdEIsaUJBQVcsV0FBVyxNQUFNO0FBQzFCLFlBQUksUUFBUSxPQUFPLENBQUMsSUFBSTtBQUN0QixpQkFBTztBQUFBLFlBQ0wsTUFBTTtBQUFBLFlBQ04sU0FBUztBQUFBLFlBQ1QsTUFBTTtBQUFBLFVBQ1I7QUFBQSxRQUNGO0FBQUEsTUFDRjtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQUEsRUFFQTtBQUFBLElBQ0UsS0FBSztBQUFBLElBQ0wsTUFBTTtBQUFBLElBQ04sVUFBVSxPQUFLO0FBQ2IsYUFBTztBQUFBLFFBQ0wsTUFBTTtBQUFBLFFBQ04sU0FBUztBQUFBLFFBQ1QsTUFBTTtBQUFBLFVBQ0osUUFBUTtBQUFBLFlBQ04sRUFBRSxLQUFLLE1BQU0sSUFBSSxLQUFLO0FBQUEsWUFDdEIsRUFBRSxLQUFLLFVBQVUsSUFBSSxLQUFLO0FBQUEsWUFDMUIsRUFBRSxLQUFLLE9BQU8sSUFBSSxLQUFLO0FBQUEsWUFDdkIsRUFBRSxLQUFLLFdBQVcsSUFBSSxLQUFLO0FBQUEsVUFDN0I7QUFBQSxRQUNGO0FBQUEsTUFDRjtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQUEsRUFFQTtBQUFBLElBQ0UsS0FBSztBQUFBLElBQ0wsTUFBTTtBQUFBLElBQ04sVUFBVSxPQUFLO0FBQ2IsYUFBTztBQUFBLFFBQ0wsTUFBTTtBQUFBLFFBQ04sU0FBUztBQUFBLFFBQ1QsTUFBTTtBQUFBLE1BQ1I7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUFBLEVBRUE7QUFBQSxJQUNFLEtBQUs7QUFBQSxJQUNMLE1BQU07QUFBQSxJQUNOLFVBQVUsT0FBSztBQUNiLGFBQU87QUFBQSxRQUNMLE1BQU07QUFBQSxRQUNOLFNBQVM7QUFBQSxRQUNULE1BQU07QUFBQSxNQUNSO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFFRjsiLAogICJuYW1lcyI6IFsiTGlzdCJdCn0K
