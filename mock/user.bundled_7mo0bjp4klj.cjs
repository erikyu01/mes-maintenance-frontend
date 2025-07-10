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

// mock/user.js
var user_exports = {};
__export(user_exports, {
  default: () => user_default
});
module.exports = __toCommonJS(user_exports);
var userInfo = () => {
  const result = {
    id: 9527,
    avatar: "https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif",
    name: "Erik Yu",
    phone: "15988888888",
    email: "454539387@qq.com",
    identity: "",
    roles: ["admin"]
  };
  return result;
};
var list = () => {
  const result = [];
  const total = 10;
  for (let i = 1; i <= total; i++) {
    const item = {
      id: i,
      method: i % 4,
      deviceType: ["web", "glass", "mobile", "desktop", "others"][Math.floor(Math.random() * 5)],
      deviceOs: ["win10", "win11", "ios", "android", "others"][Math.floor(Math.random() * 5)],
      loginAddr: "\u52A0\u62FF\u5927 BC",
      loginTime: generateRandomDate()
      // Generate random date before today in 2025
    };
    result.push(item);
  }
  return result;
};
function generateRandomDate() {
  const today = /* @__PURE__ */ new Date();
  const start = /* @__PURE__ */ new Date("2025-01-01");
  const end = new Date(today.getFullYear() === 2025 ? today : "2025-12-31");
  const randomTime = start.getTime() + Math.random() * (end.getTime() - start.getTime());
  return new Date(randomTime).toISOString().split("T")[0];
}
var user_default = [
  {
    url: "/api/login",
    type: "get",
    response: (config) => {
      return {
        code: 200,
        message: "success",
        data: {
          token: "token"
        }
        // data: loginInfo()
      };
    }
  },
  {
    url: "/api/getUserInfo",
    type: "get",
    response: () => {
      return {
        code: 200,
        message: "success",
        data: userInfo()
      };
    }
  },
  {
    url: "/api/test",
    type: "get",
    response: () => {
      return {
        code: 5004,
        message: "fail",
        data: []
      };
    }
  },
  {
    url: "/api/logout",
    method: "get",
    response: () => {
      return {
        code: 200,
        message: "success"
      };
    }
  },
  {
    url: "/api/login/history",
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsibW9jay91c2VyLmpzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJjb25zdCBfX2luamVjdGVkX2ZpbGVuYW1lX18gPSBcIkM6XFxcXGRldlxcXFxWdWVcXFxcZXJpYy1tZXMtbWFpbnRlbmFuY2UtZnJvbnRlbmRcXFxcbW9ja1xcXFx1c2VyLmpzXCI7Y29uc3QgX19pbmplY3RlZF9kaXJuYW1lX18gPSBcIkM6XFxcXGRldlxcXFxWdWVcXFxcZXJpYy1tZXMtbWFpbnRlbmFuY2UtZnJvbnRlbmRcXFxcbW9ja1wiO2NvbnN0IF9faW5qZWN0ZWRfaW1wb3J0X21ldGFfdXJsX18gPSBcImZpbGU6Ly8vQzovZGV2L1Z1ZS9lcmljLW1lcy1tYWludGVuYW5jZS1mcm9udGVuZC9tb2NrL3VzZXIuanNcIjtcclxuLy8gaHR0cDovL21vY2tqcy5jb20vZXhhbXBsZXMuaHRtbCNPYmplY3RcclxuY29uc3QgbG9naW5JbmZvID0gKCkgPT4ge1xyXG4gIGNvbnN0IHJlc3VsdCA9IHtcclxuICAgIHRva2VuOiAndG9rZW4nXHJcbiAgfVxyXG4gIHJldHVybiByZXN1bHRcclxufVxyXG5cclxuY29uc3QgdXNlckluZm8gPSAoKSA9PiB7XHJcbiAgY29uc3QgcmVzdWx0ID0ge1xyXG4gICAgaWQ6IDk1MjcsXHJcbiAgICBhdmF0YXI6ICdodHRwczovL3dwaW1nLndhbGxzdGNuLmNvbS9mNzc4NzM4Yy1lNGY4LTQ4NzAtYjYzNC01NjcwM2I0YWNhZmUuZ2lmJyxcclxuICAgIG5hbWU6ICdFcmlrIFl1JyxcclxuICAgIHBob25lOiAnMTU5ODg4ODg4ODgnLFxyXG4gICAgZW1haWw6ICc0NTQ1MzkzODdAcXEuY29tJyxcclxuICAgIGlkZW50aXR5OiAnJyxcclxuICAgIHJvbGVzOiBbJ2FkbWluJ10sXHJcbiAgfVxyXG4gIHJldHVybiByZXN1bHRcclxufVxyXG5cclxuY29uc3QgbGlzdCA9ICgpID0+IHtcclxuICBjb25zdCByZXN1bHQgPSBbXVxyXG4gIGNvbnN0IHRvdGFsID0gMTAgLy8gR2VuZXJhdGUgMTAgZW50cmllc1xyXG5cclxuICBmb3IgKGxldCBpID0gMTsgaSA8PSB0b3RhbDsgaSsrKSB7XHJcbiAgICBjb25zdCBpdGVtID0ge1xyXG4gICAgICBpZDogaSxcclxuICAgICAgbWV0aG9kOiBpICUgNCxcclxuICAgICAgZGV2aWNlVHlwZTogWyd3ZWInLCAnZ2xhc3MnLCAnbW9iaWxlJywgJ2Rlc2t0b3AnLCAnb3RoZXJzJ11bTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogNSldLFxyXG4gICAgICBkZXZpY2VPczogWyd3aW4xMCcsICd3aW4xMScsICdpb3MnLCAnYW5kcm9pZCcsICdvdGhlcnMnXVtNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA1KV0sXHJcbiAgICAgIGxvZ2luQWRkcjogJ1x1NTJBMFx1NjJGRlx1NTkyNyBCQycsXHJcbiAgICAgIGxvZ2luVGltZTogZ2VuZXJhdGVSYW5kb21EYXRlKCkgLy8gR2VuZXJhdGUgcmFuZG9tIGRhdGUgYmVmb3JlIHRvZGF5IGluIDIwMjVcclxuICAgIH1cclxuICAgIHJlc3VsdC5wdXNoKGl0ZW0pXHJcbiAgfVxyXG5cclxuICByZXR1cm4gcmVzdWx0XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdlbmVyYXRlUmFuZG9tRGF0ZSgpIHtcclxuICBjb25zdCB0b2RheSA9IG5ldyBEYXRlKClcclxuICBjb25zdCBzdGFydCA9IG5ldyBEYXRlKCcyMDI1LTAxLTAxJylcclxuICBjb25zdCBlbmQgPSBuZXcgRGF0ZSh0b2RheS5nZXRGdWxsWWVhcigpID09PSAyMDI1ID8gdG9kYXkgOiAnMjAyNS0xMi0zMScpXHJcblxyXG4gIGNvbnN0IHJhbmRvbVRpbWUgPSBzdGFydC5nZXRUaW1lKCkgKyBNYXRoLnJhbmRvbSgpICogKGVuZC5nZXRUaW1lKCkgLSBzdGFydC5nZXRUaW1lKCkpXHJcbiAgcmV0dXJuIG5ldyBEYXRlKHJhbmRvbVRpbWUpLnRvSVNPU3RyaW5nKCkuc3BsaXQoJ1QnKVswXSAvLyBGb3JtYXQgYXMgWVlZWS1NTS1ERFxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBbXHJcbiAge1xyXG4gICAgdXJsOiAnL2FwaS9sb2dpbicsXHJcbiAgICB0eXBlOiAnZ2V0JyxcclxuICAgIHJlc3BvbnNlOiBjb25maWcgPT4ge1xyXG4gICAgICAvLyBjb25zdCB7IHVzZXJuYW1lIH0gPSBjb25maWcuYm9keVxyXG4gICAgICAvLyBjb25zdCB0b2tlbiA9IHRva2Vuc1t1c2VybmFtZV1cclxuICAgICAgLy8gaWYgKCF0b2tlbikge1xyXG4gICAgICAvLyAgIHJldHVybiB7XHJcbiAgICAgIC8vICAgICBjb2RlOiA2MDIwNCxcclxuICAgICAgLy8gICAgIG1lc3NhZ2U6ICdcdThEMjZcdTUzRjdcdTVCQzZcdTc4MDFcdTk1MTlcdThCRUYnXHJcbiAgICAgIC8vICAgfVxyXG4gICAgICAvLyB9XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgY29kZTogMjAwLFxyXG4gICAgICAgIG1lc3NhZ2U6ICdzdWNjZXNzJyxcclxuICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICB0b2tlbjogJ3Rva2VuJ1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBkYXRhOiBsb2dpbkluZm8oKVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSxcclxuXHJcbiAge1xyXG4gICAgdXJsOiAnL2FwaS9nZXRVc2VySW5mbycsXHJcbiAgICB0eXBlOiAnZ2V0JyxcclxuICAgIHJlc3BvbnNlOiAoKSA9PiB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgY29kZTogMjAwLFxyXG4gICAgICAgIG1lc3NhZ2U6ICdzdWNjZXNzJyxcclxuICAgICAgICBkYXRhOiB1c2VySW5mbygpXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9LFxyXG5cclxuICB7XHJcbiAgICB1cmw6ICcvYXBpL3Rlc3QnLFxyXG4gICAgdHlwZTogJ2dldCcsXHJcbiAgICByZXNwb25zZTogKCkgPT4ge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIGNvZGU6IDUwMDQsXHJcbiAgICAgICAgbWVzc2FnZTogJ2ZhaWwnLFxyXG4gICAgICAgIGRhdGE6IFtdXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9LFxyXG5cclxuICB7XHJcbiAgICB1cmw6IFwiL2FwaS9sb2dvdXRcIixcclxuICAgIG1ldGhvZDogXCJnZXRcIixcclxuICAgIHJlc3BvbnNlOiAoKSA9PiB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgY29kZTogMjAwLFxyXG4gICAgICAgIG1lc3NhZ2U6ICdzdWNjZXNzJ1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gIH0sXHJcblxyXG4gIHtcclxuICAgIHVybDogJy9hcGkvbG9naW4vaGlzdG9yeScsXHJcbiAgICB0eXBlOiAnZ2V0JyxcclxuICAgIHJlc3BvbnNlOiBjb25maWcgPT4ge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIGNvZGU6IDIwMCxcclxuICAgICAgICBtZXNzYWdlOiAnc3VjY2VzcycsXHJcbiAgICAgICAgZGF0YTogbGlzdCgpXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9LFxyXG5dXHJcbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBU0EsSUFBTSxXQUFXLE1BQU07QUFDckIsUUFBTSxTQUFTO0FBQUEsSUFDYixJQUFJO0FBQUEsSUFDSixRQUFRO0FBQUEsSUFDUixNQUFNO0FBQUEsSUFDTixPQUFPO0FBQUEsSUFDUCxPQUFPO0FBQUEsSUFDUCxVQUFVO0FBQUEsSUFDVixPQUFPLENBQUMsT0FBTztBQUFBLEVBQ2pCO0FBQ0EsU0FBTztBQUNUO0FBRUEsSUFBTSxPQUFPLE1BQU07QUFDakIsUUFBTSxTQUFTLENBQUM7QUFDaEIsUUFBTSxRQUFRO0FBRWQsV0FBUyxJQUFJLEdBQUcsS0FBSyxPQUFPLEtBQUs7QUFDL0IsVUFBTSxPQUFPO0FBQUEsTUFDWCxJQUFJO0FBQUEsTUFDSixRQUFRLElBQUk7QUFBQSxNQUNaLFlBQVksQ0FBQyxPQUFPLFNBQVMsVUFBVSxXQUFXLFFBQVEsRUFBRSxLQUFLLE1BQU0sS0FBSyxPQUFPLElBQUksQ0FBQyxDQUFDO0FBQUEsTUFDekYsVUFBVSxDQUFDLFNBQVMsU0FBUyxPQUFPLFdBQVcsUUFBUSxFQUFFLEtBQUssTUFBTSxLQUFLLE9BQU8sSUFBSSxDQUFDLENBQUM7QUFBQSxNQUN0RixXQUFXO0FBQUEsTUFDWCxXQUFXLG1CQUFtQjtBQUFBO0FBQUEsSUFDaEM7QUFDQSxXQUFPLEtBQUssSUFBSTtBQUFBLEVBQ2xCO0FBRUEsU0FBTztBQUNUO0FBRUEsU0FBUyxxQkFBcUI7QUFDNUIsUUFBTSxRQUFRLG9CQUFJLEtBQUs7QUFDdkIsUUFBTSxRQUFRLG9CQUFJLEtBQUssWUFBWTtBQUNuQyxRQUFNLE1BQU0sSUFBSSxLQUFLLE1BQU0sWUFBWSxNQUFNLE9BQU8sUUFBUSxZQUFZO0FBRXhFLFFBQU0sYUFBYSxNQUFNLFFBQVEsSUFBSSxLQUFLLE9BQU8sS0FBSyxJQUFJLFFBQVEsSUFBSSxNQUFNLFFBQVE7QUFDcEYsU0FBTyxJQUFJLEtBQUssVUFBVSxFQUFFLFlBQVksRUFBRSxNQUFNLEdBQUcsRUFBRSxDQUFDO0FBQ3hEO0FBRUEsSUFBTyxlQUFRO0FBQUEsRUFDYjtBQUFBLElBQ0UsS0FBSztBQUFBLElBQ0wsTUFBTTtBQUFBLElBQ04sVUFBVSxZQUFVO0FBU2xCLGFBQU87QUFBQSxRQUNMLE1BQU07QUFBQSxRQUNOLFNBQVM7QUFBQSxRQUNULE1BQU07QUFBQSxVQUNKLE9BQU87QUFBQSxRQUNUO0FBQUE7QUFBQSxNQUVGO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFBQSxFQUVBO0FBQUEsSUFDRSxLQUFLO0FBQUEsSUFDTCxNQUFNO0FBQUEsSUFDTixVQUFVLE1BQU07QUFDZCxhQUFPO0FBQUEsUUFDTCxNQUFNO0FBQUEsUUFDTixTQUFTO0FBQUEsUUFDVCxNQUFNLFNBQVM7QUFBQSxNQUNqQjtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQUEsRUFFQTtBQUFBLElBQ0UsS0FBSztBQUFBLElBQ0wsTUFBTTtBQUFBLElBQ04sVUFBVSxNQUFNO0FBQ2QsYUFBTztBQUFBLFFBQ0wsTUFBTTtBQUFBLFFBQ04sU0FBUztBQUFBLFFBQ1QsTUFBTSxDQUFDO0FBQUEsTUFDVDtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQUEsRUFFQTtBQUFBLElBQ0UsS0FBSztBQUFBLElBQ0wsUUFBUTtBQUFBLElBQ1IsVUFBVSxNQUFNO0FBQ2QsYUFBTztBQUFBLFFBQ0wsTUFBTTtBQUFBLFFBQ04sU0FBUztBQUFBLE1BQ1g7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUFBLEVBRUE7QUFBQSxJQUNFLEtBQUs7QUFBQSxJQUNMLE1BQU07QUFBQSxJQUNOLFVBQVUsWUFBVTtBQUNsQixhQUFPO0FBQUEsUUFDTCxNQUFNO0FBQUEsUUFDTixTQUFTO0FBQUEsUUFDVCxNQUFNLEtBQUs7QUFBQSxNQUNiO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFDRjsiLAogICJuYW1lcyI6IFtdCn0K
