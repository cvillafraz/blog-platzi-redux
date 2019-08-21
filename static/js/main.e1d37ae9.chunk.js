(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{41:function(e,t,a){e.exports=a(73)},47:function(e,t,a){},71:function(e,t,a){},73:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(20),l=a.n(c),o=(a(46),a(47),a(10)),s=a(15),u=a(3),i=function(){return r.a.createElement("header",{id:"menu",className:"bg-dark sticky-top"},r.a.createElement("nav",{className:"navbar navbar-expand container"},r.a.createElement(o.c,{to:"/blog-platzi-redux",className:"nav-link text-light pl-0"},"Usuarios"),r.a.createElement(o.c,{to:"/blog-platzi-redux/tareas",className:"nav-link text-light"},"Tareas")))},m=function(e){var t=e.children;return r.a.createElement(r.a.Fragment,null,r.a.createElement(i,null),r.a.createElement("div",{className:"container mt-5"},t))},d=a(2),p=a.n(d),b=a(5),O=a(11),f=a.n(O),E=function(){var e=Object(b.a)(p.a.mark(function e(t){var a;return p.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:"USERS_LOADING"}),e.prev=1,e.next=4,f.a.get("https://jsonplaceholder.typicode.com/users");case 4:a=e.sent,t({type:"FETCH_USERS",payload:a.data}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),t({type:"USERS_ERROR",payload:"Informaci\xf3n de usuario no disponible."});case 11:case"end":return e.stop()}},e,null,[[1,8]])}));return function(t){return e.apply(this,arguments)}}(),y=(a(71),function(){return r.a.createElement("div",{className:"center"},r.a.createElement("div",{className:"lds-ring"},r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null)))}),h=function(e){var t=e.message;return r.a.createElement("h2",{"data-testid":"message",className:"center"},t)},g=(a(72),function(e){var t=e.users;return r.a.createElement("table",{className:"table table-borderless mt-4"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Nombre"),r.a.createElement("th",null,"Correo"),r.a.createElement("th",null,"Enlace"))),r.a.createElement("tbody",null,t.items&&t.items.length>0&&t.items.map(function(e,t){return r.a.createElement("tr",{key:e.id},r.a.createElement("td",{"data-testid":0===t&&"username"},e.name),r.a.createElement("td",null,e.email),r.a.createElement("td",null,e.website),r.a.createElement("td",null,r.a.createElement(o.b,{to:"/blog-platzi-redux/publicaciones/".concat(t)},r.a.createElement("span",{className:"fas fa-eye"}))))})))}),v=function(){var e=Object(u.c)(function(e){return e.users}),t=Object(u.b)(),a=Object(n.useCallback)(function(){return E(t)},[t]);return Object(n.useEffect)(function(){0!==e.items.length||e.error||a()},[e.items.length,e.error,a]),e.loading?r.a.createElement(y,null):e.error?r.a.createElement(h,{message:e.error}):r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",{className:"display-4"},"Usuarios"),r.a.createElement(g,{users:e}))},j=a(40),k=function(e){var t=e.comments,a=Object(u.c)(function(e){return e.posts}),n=a.com_error,c=a.com_loading;return n?r.a.createElement(h,{message:n}):c&&!t.length?r.a.createElement(y,null):r.a.createElement("ul",{id:"comments"},t.map(function(e){return r.a.createElement("li",{key:e.id},r.a.createElement("strong",null,r.a.createElement("u",null,e.email)),r.a.createElement("br",null),e.body)}))},_=a(16),S=a(1),x=function(){var e=Object(b.a)(p.a.mark(function e(t,a){var n,r,c,l,o,s,u,i,m,d;return p.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=a.dispatch,r=a.getState,n({type:"POSTS_LOADING"}),c=r().users.items,l=r().posts.items,o=c[t].id,e.prev=5,e.next=8,f.a.get("https://jsonplaceholder.typicode.com/posts?userId=".concat(o));case 8:s=e.sent,u=s.data.map(function(e){return Object(S.a)({},e,{comments:[],open:!1})}),i=[].concat(Object(_.a)(l),[u]),n({type:"FETCH_POSTS",payload:i}),m=i.length-1,(d=Object(_.a)(c))[t]=Object(S.a)({},c[t],{posts_key:m}),n({type:"FETCH_USERS",payload:d}),e.next=21;break;case 18:e.prev=18,e.t0=e.catch(5),n({type:"POSTS_ERROR",payload:"Publicaciones no disponibles."});case 21:case"end":return e.stop()}},e,null,[[5,18]])}));return function(t,a){return e.apply(this,arguments)}}(),N=function(){var e=Object(b.a)(p.a.mark(function e(t,a,n){var r,c,l,o,s,u;return p.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:r=n.dispatch,c=n.getState,l=c().posts.items,o=l[t][a],s=Object(S.a)({},o,{open:!o.open}),(u=Object(_.a)(l))[t]=Object(_.a)(l[t]),u[t][a]=s,r({type:"UPDATE_COMMENTS",payload:u});case 8:case"end":return e.stop()}},e)}));return function(t,a,n){return e.apply(this,arguments)}}(),T=function(){var e=Object(b.a)(p.a.mark(function e(t,a,n){var r,c,l,o,s,u,i;return p.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r=n.dispatch,c=n.getState,r({type:"COM_LOADING"}),l=c().posts.items,o=l[t][a],e.prev=4,e.next=7,f.a.get("https://jsonplaceholder.typicode.com/comments?postId=".concat(o.id));case 7:s=e.sent,u=Object(S.a)({},o,{comments:s.data}),(i=Object(_.a)(l))[t]=Object(_.a)(l[t]),i[t][a]=u,r({type:"UPDATE_COMMENTS",payload:i}),e.next=18;break;case 15:e.prev=15,e.t0=e.catch(4),r({type:"COM_ERROR",payload:"Comentarios no disponibles."});case 18:case"end":return e.stop()}},e,null,[[4,15]])}));return function(t,a,n){return e.apply(this,arguments)}}(),D=function(e){var t=e.match,a=Object(u.c)(function(e){return[e.posts,e.users]}),c=Object(j.a)(a,2),l=c[0],o=c[1],s=Object(u.b)(),i=Object(u.d)(),m=Object(n.useCallback)(function(){return E(s)},[s]),d=Object(n.useCallback)(function(e){return x(e,i)},[i]),O=Object(n.useCallback)(function(e,t){return N(e,t,i)},[i]),f=Object(n.useCallback)(function(e,t){return T(e,t,i)},[i]);return Object(n.useEffect)(function(){0!==o.items.length||o.error||m()},[m,o.error,o.items.length]),Object(n.useEffect)(function(){function e(){return(e=Object(b.a)(p.a.mark(function e(){return p.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!o.items.length||"posts_key"in o.items[t.params.key]){e.next=3;break}return e.next=3,d(t.params.key);case 3:case"end":return e.stop()}},e)}))).apply(this,arguments)}!function(){e.apply(this,arguments)}()},[d,t,o.items]),r.a.createElement("main",null,o.error?r.a.createElement(h,{message:o.error}):o.loading?r.a.createElement(y,null):o.items.length>0?r.a.createElement("h1",{"data-testid":"username",className:"mb-4 display-4"},"Publicaciones de ".concat(o.items[t.params.key].name)):null,function(){if(!o.items.length)return null;if(l.error)return r.a.createElement(h,{message:l.error});if(l.loading)return r.a.createElement(y,null);if(!("posts_key"in o.items[t.params.key]))return null;var e=o.items[t.params.key].posts_key;return l.items.length>0?l.items[e].map(function(t,a){return r.a.createElement("div",{key:t.id,className:"card my-4"},r.a.createElement("h2",{"data-testid":1==t.id&&"post-title",className:"card-title card-header"},t.title),r.a.createElement("div",{className:"card-body"},r.a.createElement("p",{"data-testid":1==t.id&&"post-body"},t.body),r.a.createElement("button",{className:"text-info border-0 bg-transparent text-left pl-0",onClick:function(){return n=e,r=a,c=t.comments,O(n,r),void(c.length||f(n,r));var n,r,c}},t.open?"Cerrar":"Mostrar"," comentarios")),t.open&&r.a.createElement(k,{comments:t.comments}))}):null}())},R=a(19),C=function(){var e=Object(b.a)(p.a.mark(function e(t){var a,n;return p.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:"LOADING_TODOS"}),e.prev=1,e.next=4,f.a.get("https://jsonplaceholder.typicode.com/todos");case 4:a=e.sent,n={},a.data.map(function(e){n[e.userId]=Object(S.a)({},n[e.userId],Object(R.a)({},e.id,Object(S.a)({},e)))}),t({type:"FETCH_TODOS",payload:n}),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),t({type:"ERROR_TODOS",payload:"Informaci\xf3n de tareas no disponible."});case 13:case"end":return e.stop()}},e,null,[[1,10]])}));return function(t){return e.apply(this,arguments)}}(),w=function(){var e=Object(b.a)(p.a.mark(function e(t,a){return p.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a({type:"LOADING_TODOS"}),e.prev=1,e.next=4,f.a.post("https://jsonplaceholder.typicode.com/todos",t);case 4:a({type:"ADD_TODO"}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),a({type:"ERROR_TODOS",payload:"Servicio no disponible en este momento."});case 10:case"end":return e.stop()}},e,null,[[1,7]])}));return function(t,a){return e.apply(this,arguments)}}(),I=function(){var e=Object(b.a)(p.a.mark(function e(t,a){return p.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a({type:"LOADING_TODOS"}),e.prev=1,e.next=4,f.a.put("https://jsonplaceholder.typicode.com/todos/".concat(t.id),t);case 4:a({type:"ADD_TODO"}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),a({type:"ERROR_TODOS",payload:"Servicio no disponible en este momento."});case 10:case"end":return e.stop()}},e,null,[[1,7]])}));return function(t,a){return e.apply(this,arguments)}}(),A=function(){var e=Object(b.a)(p.a.mark(function e(t,a){return p.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a({type:"LOADING_TODOS"}),e.prev=1,e.next=4,f.a.delete("https://jsonplaceholder.typicode.com/todos/".concat(t));case 4:a({type:"FETCH_TODOS",payload:{}}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),a({type:"ERROR_TODOS",payload:"Servicio no disponible en este momento."});case 10:case"end":return e.stop()}},e,null,[[1,7]])}));return function(t,a){return e.apply(this,arguments)}}(),U=function(){var e=Object(u.c)(function(e){return e.todos}),t=e.items,a=e.error,c=e.loading,l=Object(u.b)(),s=Object(u.d)(),i=Object(n.useCallback)(function(){return C(l)},[l]),m=Object(n.useCallback)(function(e){return A(e,l)},[l]),d=Object(n.useCallback)(function(e,t){return function(e,t,a){var n=a.dispatch,r=(0,a.getState)().todos.items,c=r[e][t],l=Object(S.a)({},r);l[e]=Object(S.a)({},r[e]),l[e][t]=Object(S.a)({},r[e][t],{completed:!c.completed}),n({type:"UPDATE_TODO",payload:l})}(e,t,s)},[s]);return Object(n.useEffect)(function(){Object.keys(t).length||c||i()},[i,t,c]),c?r.a.createElement(y,null):a?r.a.createElement(h,{message:a}):Object.keys(t).length?r.a.createElement("main",null,r.a.createElement("button",{className:"btn btn-success"},r.a.createElement(o.b,{to:"/blog-platzi-redux/tareas/guardar",className:"text-light"},"Agregar")),Object.keys(t).map(function(e){return r.a.createElement("div",{key:e},r.a.createElement("h2",{className:"my-4"},"Usuario ",e),r.a.createElement("ul",{className:"list-group"},function(e){var a=Object(S.a)({},t[e]);return Object.keys(a).map(function(t){return r.a.createElement("li",{key:t,className:"d-flex align-items-center justify-content-between list-group-item"},r.a.createElement("p",{style:{fontSize:"1.2rem",flexBasis:"55%"},className:"m-0"},r.a.createElement("input",{type:"checkbox",defaultChecked:a[t].completed,onChange:function(){return d(e,t)},className:"mr-2"}),a[t].title),r.a.createElement("div",null,r.a.createElement("button",{className:"btn btn-info"},r.a.createElement(o.b,{className:"text-white",to:"/blog-platzi-redux/tareas/guardar/".concat(e,"/").concat(t)},"Editar")),r.a.createElement("button",{className:"btn btn-danger ml-2",onClick:function(){return m(t)}},"Eliminar")))})}(e)))})):null},P=function(e){var t=e.match.params,a=t.user_id,c=t.todo_id,l=Object(u.c)(function(e){return e.todos}),o=l.items,i=l.userId,m=l.title,d=l.loading,p=l.error,b=l.redirect,O=Object(u.b)(),f=Object(u.d)(),E=Object(n.useCallback)(function(e,t){return function(e,t,a){var n=a.dispatch,r=(0,a.getState)().todos;n({type:"UPDATE_INPUTS",payload:Object(S.a)({},r,Object(R.a)({},e,t))})}(e,t,f)},[f]),g=Object(n.useCallback)(function(e){return w(e,O)},[O]),v=Object(n.useCallback)(function(e){return I(e,f)},[f]);return Object(n.useEffect)(function(){if(a&&c){var e=o[a][c];E("userId",e.userId),E("title",e.title)}else E("userId",""),E("title","")},[E,c,o,a]),r.a.createElement("form",null,r.a.createElement("h1",{className:"display-4 mb-4"},"Guardar Tarea"),r.a.createElement("div",{className:"form-group",style:{maxWidth:"480px"}},r.a.createElement("label",{htmlFor:"userId"},"Usuario id:"),r.a.createElement("input",{id:"userId",name:"userId",type:"number",value:i,className:"form-control",onChange:function(e){return E(e.target.name,e.target.value)}})),r.a.createElement("div",{className:"form-group",style:{maxWidth:"480px"}},r.a.createElement("label",{htmlFor:"title"},"T\xedtulo: "),r.a.createElement("input",{id:"title",className:"form-control",name:"title",value:m,onChange:function(e){return E(e.target.name,e.target.value)}})),r.a.createElement("button",{disabled:!!d||!i||!m,onClick:function(){var e={userId:i,title:m,completed:!1};if(a&&c){var t=o[a][c],n=Object(S.a)({},e,{completed:t.completed,id:t.id});v(n)}else g(e)},className:"btn btn-info"},"Guardar"),b?r.a.createElement(s.a,{to:"/blog-platzi-redux/tareas"}):d?r.a.createElement(y,null):p?r.a.createElement(h,{message:p}):null)},G=a(14),F=a(38),M=a(39),z={items:[],loading:!1,error:null},L={items:[],loading:!1,com_loading:!1,error:null,com_error:null},H={items:{},loading:!1,error:null,userId:"",title:"",redirect:!1},W=Object(G.combineReducers)({users:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:z,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_USERS":return Object(S.a)({},e,{items:t.payload,loading:!1});case"USERS_LOADING":return Object(S.a)({},e,{loading:!0});case"USERS_ERROR":return Object(S.a)({},e,{error:t.payload,loading:!1});default:return e}},posts:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:L,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_POSTS":return Object(S.a)({},e,{items:t.payload,loading:!1,error:null});case"UPDATE_COMMENTS":return Object(S.a)({},e,{items:t.payload,com_loading:!1,com_error:null});case"POSTS_LOADING":return Object(S.a)({},e,{loading:!0});case"COM_LOADING":return Object(S.a)({},e,{com_loading:!0});case"POSTS_ERROR":return Object(S.a)({},e,{error:t.payload,loading:!1});case"COM_ERROR":return Object(S.a)({},e,{com_error:t.payload,com_loading:!1});default:return e}},todos:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:H,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_TODOS":return Object(S.a)({},e,{items:t.payload,loading:!1,error:null,redirect:!1});case"LOADING_TODOS":return Object(S.a)({},e,{loading:!0});case"ERROR_TODOS":return Object(S.a)({},e,{error:t.payload,loading:!1});case"UPDATE_INPUTS":return t.payload;case"ADD_TODO":return Object(S.a)({},e,{todos:{},loading:!1,error:null,redirect:!0,userId:"",title:""});case"UPDATE_TODO":return Object(S.a)({},e,{items:t.payload});default:return e}}}),B=Object(G.createStore)(W,{},Object(M.composeWithDevTools)(Object(G.applyMiddleware)(F.a))),J=function(){return r.a.createElement(u.a,{store:B},r.a.createElement(o.a,null,r.a.createElement(m,null,r.a.createElement(s.d,null,r.a.createElement(s.b,{exact:!0,path:"/blog-platzi-redux",component:v}),r.a.createElement(s.b,{exact:!0,path:"/blog-platzi-redux/tareas",component:U}),r.a.createElement(s.b,{path:"/blog-platzi-redux/publicaciones/:key",component:D}),r.a.createElement(s.b,{path:"/blog-platzi-redux/tareas/guardar/:user_id?/:todo_id?",component:P}),r.a.createElement(s.b,{render:function(){return r.a.createElement(h,{message:"No se encontr\xf3 la p\xe1gina que buscabas"})}})))))};l.a.render(r.a.createElement(J,null),document.getElementById("root"))}},[[41,1,2]]]);
//# sourceMappingURL=main.e1d37ae9.chunk.js.map