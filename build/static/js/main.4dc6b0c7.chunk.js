(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[3],{14:function(t,e,n){"use strict";n.d(e,"b",(function(){return r})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return u})),n.d(e,"f",(function(){return o})),n.d(e,"g",(function(){return i})),n.d(e,"e",(function(){return s})),n.d(e,"i",(function(){return b})),n.d(e,"j",(function(){return j})),n.d(e,"h",(function(){return d})),n.d(e,"d",(function(){return f}));var c=n(2),r=Object(c.b)("contacts/addRequests"),a=Object(c.b)("contacts/addSuccess"),u=Object(c.b)("contacts/addError"),o=Object(c.b)("contacts/deleteRequests"),i=Object(c.b)("contacts/deleteSuccess"),s=Object(c.b)("contacts/deleteError"),b=Object(c.b)("contacts/getRequests"),j=Object(c.b)("contacts/getSuccess"),d=Object(c.b)("contacts/getError"),f=Object(c.b)("contacts/FILTER")},24:function(t,e,n){"use strict";n.d(e,"g",(function(){return o})),n.d(e,"e",(function(){return i})),n.d(e,"d",(function(){return s})),n.d(e,"f",(function(){return b})),n.d(e,"a",(function(){return j})),n.d(e,"c",(function(){return d})),n.d(e,"b",(function(){return f}));var c=n(15),r=n.n(c);r.a.defaults.baseURL="https://connections-api.herokuapp.com";var a=function(t){r.a.defaults.headers.common.Authorization="Bearer ".concat(t)},u=function(){r.a.defaults.headers.common.Authorization=""},o=function(t){var e=t.name,n=t.email,c=t.password;return r.a.post("/users/signup",{name:e,email:n,password:c}).then((function(t){var e=t.data;return a(e.token),e})).catch((function(t){throw t}))},i=function(t){var e=t.email,n=t.password;return r.a.post("/users/login",{email:e,password:n}).then((function(t){var e=t.data;return a(e.token),e})).catch((function(t){throw t}))},s=function(){return r.a.post("/users/logout").then((function(){u()})).catch((function(t){throw t}))},b=function(t){return a(t),r.a.get("/users/current").then((function(t){return t.data})).catch((function(t){throw t}))},j=function(t){var e=t.name,n=t.number,c=t.id;return r.a.post("/contacts",{name:e,number:n,id:c}).then((function(t){return t.data})).catch((function(t){throw t}))},d=function(){return r.a.get("/contacts").then((function(t){return t.data})).catch((function(t){throw t}))},f=function(t){return r.a.delete("/contacts/".concat(t)).then((function(t){return t.data})).catch((function(t){throw t}))}},31:function(t,e,n){"use strict";n.d(e,"d",(function(){return i})),n.d(e,"b",(function(){return s})),n.d(e,"a",(function(){return b})),n.d(e,"c",(function(){return j}));var c=n(16),r=n.n(c),a=n(23),u=n(24),o=n(5),i=function(t){var e=t.name,n=t.email,c=t.password;return function(){var t=Object(a.a)(r.a.mark((function t(a){var i;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a(Object(o.k)()),t.prev=1,t.next=4,Object(u.g)({name:e,email:n,password:c});case 4:i=t.sent,a(Object(o.l)(i)),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),a(Object(o.j)(t.t0));case 11:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e){return t.apply(this,arguments)}}()},s=function(t){var e=t.email,n=t.password;return function(){var t=Object(a.a)(r.a.mark((function t(c){var a;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c(Object(o.e)()),t.prev=1,t.next=4,Object(u.e)({email:e,password:n});case 4:a=t.sent,c(Object(o.f)(a)),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),c(Object(o.d)(t.t0));case 11:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e){return t.apply(this,arguments)}}()},b=function(){return function(){var t=Object(a.a)(r.a.mark((function t(e){return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e(Object(o.b)()),t.prev=1,t.next=4,Object(u.d)();case 4:e(Object(o.c)()),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(1),e(Object(o.a)(t.t0));case 10:case"end":return t.stop()}}),t,null,[[1,7]])})));return function(e){return t.apply(this,arguments)}}()},j=function(){return function(){var t=Object(a.a)(r.a.mark((function t(e,n){var c,a;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(null!==(c=n().auth.token)){t.next=3;break}return t.abrupt("return");case 3:return e(Object(o.h)()),t.prev=4,t.next=7,Object(u.f)(c);case 7:a=t.sent,e(Object(o.i)(a)),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(4),e(Object(o.g)(t.t0));case 14:case"end":return t.stop()}}),t,null,[[4,11]])})));return function(e,n){return t.apply(this,arguments)}}()}},5:function(t,e,n){"use strict";n.d(e,"k",(function(){return r})),n.d(e,"l",(function(){return a})),n.d(e,"j",(function(){return u})),n.d(e,"e",(function(){return o})),n.d(e,"f",(function(){return i})),n.d(e,"d",(function(){return s})),n.d(e,"b",(function(){return b})),n.d(e,"c",(function(){return j})),n.d(e,"a",(function(){return d})),n.d(e,"h",(function(){return f})),n.d(e,"i",(function(){return O})),n.d(e,"g",(function(){return l}));var c=n(2),r=Object(c.b)("auth/registerRequests"),a=Object(c.b)("auth/registerSuccess"),u=Object(c.b)("auth/registerError"),o=Object(c.b)("auth/loginRequests"),i=Object(c.b)("auth/loginSuccess"),s=Object(c.b)("auth/loginError"),b=Object(c.b)("auth/logOutRequests"),j=Object(c.b)("auth/logOutSuccess"),d=Object(c.b)("auth/logOutError"),f=Object(c.b)("auth/refreshRequests"),O=Object(c.b)("auth/refreshSuccess"),l=Object(c.b)("auth/refreshError")},79:function(t,e,n){},80:function(t,e,n){"use strict";n.r(e);var c,r,a,u,o,i,s=n(0),b=n(25),j=n.n(b),d=n(13),f=n(18),O=n(44),l=n(27),h=n(2),p=n(17),g=n(45),v=n.n(g),x=n(46),m=n.n(x),k=n(4),w=n(7),y=n(14),I=Object(h.c)([],(c={},Object(k.a)(c,y.j,(function(t,e){return e.payload})),Object(k.a)(c,y.c,(function(t,e){var n=e.payload;return[].concat(Object(l.a)(t),[n])})),Object(k.a)(c,y.g,(function(t,e){var n=e.payload;return t.filter((function(t){return t.id!==n}))})),c)),L=Object(h.c)("",Object(k.a)({},y.d,(function(t,e){return e.payload}))),R=Object(w.b)({items:I,filter:L}),N=function(t,e){return e.payload},E=function(){return null},S=Object(h.c)(null,(r={},Object(k.a)(r,y.i,E),Object(k.a)(r,y.h,N),Object(k.a)(r,y.b,E),Object(k.a)(r,y.a,N),Object(k.a)(r,y.f,E),Object(k.a)(r,y.e,N),r)),T=R,q=n(5),z={name:null,email:null},C=Object(h.c)(z,(a={},Object(k.a)(a,q.l,(function(t,e){return e.payload.user})),Object(k.a)(a,q.f,(function(t,e){return e.payload.user})),Object(k.a)(a,q.c,(function(){return z})),Object(k.a)(a,q.i,(function(t,e){return e.payload})),a)),U=Object(h.c)(null,(u={},Object(k.a)(u,q.l,(function(t,e){return e.payload.token})),Object(k.a)(u,q.f,(function(t,e){return e.payload.token})),Object(k.a)(u,q.c,(function(){return null})),u)),A=Object(h.c)(!1,(o={},Object(k.a)(o,q.l,(function(){return!0})),Object(k.a)(o,q.f,(function(){return!0})),Object(k.a)(o,q.c,(function(){return!1})),Object(k.a)(o,q.i,(function(){return!0})),o)),F=Object(h.c)(!1,(i={},Object(k.a)(i,q.h,(function(){return!0})),Object(k.a)(i,q.i,(function(){return!1})),Object(k.a)(i,q.g,(function(){return!1})),i)),B=Object(w.b)({user:C,token:U,isLoggedIn:A,isRefresh:F}),J=[].concat(Object(l.a)(Object(h.d)({serializableCheck:{ignoredActions:[p.a,p.f,p.b,p.c,p.d,p.e]}})),[m.a]),P={key:"auth",storage:v.a,whitelist:["token"]},W=Object(h.a)({reducer:{contacts:T,auth:Object(p.g)(P,B),error:S},middleware:J,devTools:!1}),D=Object(p.h)(W),G=n(6),H={getIsLoggedIn:function(t){return t.auth.isLoggedIn},getUserName:function(t){return t.auth.user.name},getIsRefresh:function(t){return t.auth.isRefresh}},K=n(31),M=n(20),Q=n(28),V=n(1),X=["children","redirectTo"];function Y(t){var e=t.children,n=t.redirectTo,c=void 0===n?"/":n,r=Object(Q.a)(t,X),a=Object(d.c)(H.getIsLoggedIn);return Object(V.jsx)(G.b,Object(M.a)(Object(M.a)({},r),{},{children:a?e:Object(V.jsx)(G.a,{to:c})}))}var Z=["children","restricted","redirectTo"];function $(t){var e=t.children,n=(t.restricted,t.redirectTo),c=void 0===n?"/contacts":n,r=Object(Q.a)(t,Z),a=Object(d.c)(H.getIsLoggedIn);return Object(V.jsx)(G.b,Object(M.a)(Object(M.a)({},r),{},{children:a?Object(V.jsx)(G.a,{to:c}):e}))}var _=Object(s.lazy)((function(){return n.e(1).then(n.bind(null,85))})),tt=Object(s.lazy)((function(){return n.e(4).then(n.bind(null,86))})),et=Object(s.lazy)((function(){return n.e(2).then(n.bind(null,87))})),nt=Object(s.lazy)((function(){return n.e(0).then(n.bind(null,88))}));var ct=function(){var t=Object(d.b)(),e=Object(d.c)(H.getIsLoggedIn),n=Object(d.c)(H.getUserName),c=Object(d.c)(H.getIsRefresh);return Object(s.useEffect)((function(){t(Object(K.c)())}),[t]),Object(V.jsx)(V.Fragment,{children:c?Object(V.jsx)("h1",{children:"Loading..."}):Object(V.jsxs)(V.Fragment,{children:[Object(V.jsxs)("nav",{className:"container navContainer ",children:[Object(V.jsx)(f.b,{exact:!0,to:"/",className:"link",activeClassName:"activeLink",children:"Phonebook"}),e?Object(V.jsxs)("div",{children:[Object(V.jsxs)("span",{className:"navText",children:["Welcome, ",n]}),Object(V.jsx)("button",{className:"button",type:"button",onClick:function(){return t(Object(K.a)())},children:"LogOut"})]}):Object(V.jsxs)("div",{children:[Object(V.jsx)(f.b,{to:"/register",className:"link",activeClassName:"activeLink",children:"SignUp"}),Object(V.jsx)(f.b,{to:"/login",className:"link",activeClassName:"activeLink",children:"LogIn"})]})]}),Object(V.jsx)(G.d,{children:Object(V.jsxs)(s.Suspense,{fallback:Object(V.jsx)("div",{children:"Loading..."}),children:[Object(V.jsx)($,{exact:!0,path:"/",children:Object(V.jsx)(_,{})}),Object(V.jsx)($,{exact:!0,path:"/register",children:Object(V.jsx)(tt,{})}),Object(V.jsx)($,{exact:!0,path:"/login",children:Object(V.jsx)(et,{})}),Object(V.jsx)(Y,{path:"/contacts",redirectTo:"/",children:Object(V.jsx)(nt,{})})]})})]})})};n(79);j.a.render(Object(V.jsx)(d.a,{store:W,children:Object(V.jsx)(O.a,{loading:null,persistor:D,children:Object(V.jsx)(f.a,{children:Object(V.jsx)(ct,{})})})}),document.getElementById("root"))}},[[80,5,6]]]);
//# sourceMappingURL=main.4dc6b0c7.chunk.js.map