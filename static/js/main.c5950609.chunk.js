(this["webpackJsonpfront-end-ecommerce"]=this["webpackJsonpfront-end-ecommerce"]||[]).push([[0],{21:function(e,c,t){},22:function(e,c,t){"use strict";t.r(c);var n=t(1),i=t.n(n),r=t(4),a=t.n(r),s=t(2),j=t(3),o=t.p+"static/media/icon-menu.c6107d03.svg",l=t.p+"static/media/icon-cart.539ec608.svg",d=t.p+"static/media/image-product-1.520cc50b.jpg",b=t.p+"static/media/icon-delete.1fd1f1f7.svg",u=t(0),m=function(){var e=Object(s.c)((function(e){return e.cartReducer})),c=Object(s.b)();return Object(u.jsxs)("div",{className:"cart",children:[Object(u.jsx)("div",{className:"cart_head",children:Object(u.jsx)("h2",{children:"Cart"})}),Object(u.jsx)("hr",{className:"line"}),!e.counter&&Object(u.jsx)("div",{className:"empty_body",children:Object(u.jsx)("p",{children:"Cart is Empty"})}),e.counter?Object(u.jsxs)("div",{className:"cart_body",children:[Object(u.jsxs)("div",{className:"item",children:[Object(u.jsx)("div",{className:"item_img",children:Object(u.jsx)("img",{src:d,alt:"shoe"})}),Object(u.jsxs)("div",{className:"item_text",children:[Object(u.jsx)("p",{children:"Fall Limited Edition Sneakers"}),Object(u.jsxs)("p",{children:["$125 x ",e.counter," ",Object(u.jsxs)("b",{children:["$",e.price.toFixed(2)]})]})]}),Object(u.jsx)("div",{className:"item_icon",onClick:function(){return c({type:"REMOVE"})},children:Object(u.jsx)("img",{src:b,alt:"shoe"})})]}),Object(u.jsx)("div",{className:"checkout",children:Object(u.jsx)("button",{children:"checkout"})})]}):null]})},h=function(){var e=Object(n.useState)(!1),c=Object(j.a)(e,2),t=c[0],i=c[1],r=Object(s.b)(),a=Object(s.c)((function(e){return e.cartReducer}));return Object(u.jsxs)("div",{className:"navigation",children:[Object(u.jsx)("div",{className:"menu",onClick:function(){r({type:"TOGGLE"})},children:Object(u.jsx)("img",{src:o,alt:"menu_icon"})}),Object(u.jsx)("div",{className:"logo",children:Object(u.jsx)("h1",{children:"sneakers"})}),Object(u.jsxs)("div",{className:"links",children:[Object(u.jsx)("a",{href:"#collection",children:"Collections"}),Object(u.jsx)("a",{href:"#man",children:"Man"}),Object(u.jsx)("a",{href:"#woman",children:"Woman"}),Object(u.jsx)("a",{href:"#about",children:"About"}),Object(u.jsx)("a",{href:"#contacy",children:"Contact"})]}),Object(u.jsxs)("div",{className:"profile_section",children:[Object(u.jsxs)("div",{className:"cart_icon_cont",onClick:function(){i((function(e){return!e}))},children:[a.counter>0&&Object(u.jsx)("div",{className:"count",children:a.counter}),Object(u.jsx)("img",{alt:"cart_icon",src:l,style:{cursor:"pointer"}}),t&&Object(u.jsx)(m,{})]}),Object(u.jsx)("div",{className:"profile",children:Object(u.jsx)("img",{alt:"cart_icon",src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAMAAABHPGVmAAAC/VBMVEVHcEzh6Ova4und5Ofe5Ojk6ezc4ubb4OTd5Ojd5Ofe4uXa4OXb4eXb4+fc5Onb4+jf5Ojg5urd5eri5+za4eba3+Pe5Oje5OjX2t3Y3eDc3uHW19jP0dLT2NzS1djLzc7PzMrAv728ubbHxsXe5uiclZCYkYuUi4WOhoCmoZ21r6rU09O4tLCvq6elm5V3bGdkWVR6cm2GgHzJwbyBdW9jXVpeV1SEe3ZyaWRPRkJtZWDd5eqspaBqYFtXTkpdU05TSkZKQj+fm5dIRkU4NDJWU1EwLCpIPjtCOzhOS0ozMS9CQD8pJyUhISGSf3YqKiogJSg7Ojo3Lyw+NjMbGhodHR0mIyEiHRsYFxczKCRVPjh9YlhqT0RxWU4UFRQOEBARERGMbmO/nZHXoo6xjYDJtKuhiH+ieGkgGBUNDg4TFhjatKfg087t4Nzz5+XOlH6VXEhnRTlNLSNZOS88JR4RExP4wqvuxrjy2tH78u75+/7rzsXsvqzjr5vBf2iJVEJvQjXa3eD5zLjzuaFgNSkrGxYLDQ3wsZa+dl9nOSwJCwrppouzZUowIBvXkXXbjGrYiGSSUTyubVXhmn7QfV3Vg2DAblB5RTVFKiH81MLjk3HPhGuCRzVWLyXEinaeWEFwPC6hZVATGyAUICcaLTgtMTRGLymATjyKSzgZExAYJzC0c13Y3eGLjYyrZUrHc1SsXkSYVD25a0yiXkTMelc7UV0jN0NodX2DlqIkQ1UXMUCKqb281+lEXm0cQlekxNfP5fPZ6vWvzuEyR1RNbn4jVG8UPFDs9fze7vjR1tlHc44ePE7Q1Ndbi6Zom7gfTWQYN0iKss1KhKSXvNMZP1Q6aH8nY4IYSGATQVkjSl4iUGhuiJg9e5s2dJM9eZchV3UbTmoaTGYcVHIua4ovZIAbRFwcUW4gXHscRVwwa4o0Njk3aYSLtM0fOk0hS2YsU21CgJwbS2YiZ4gWMkQhXH0aOUokYYEpZoYaQldVkrAZS2UfT20bS2UgVHMaQ1va3vB6AAAA/3RSTlMAFzdnhqjF093p/1ig//////8j////kPP///////////////8K///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////t////////////////////////////////////////////////////////hv////////////////3/////////+v3////////4//+U/v////z///////////+l///u//////9Pjf///8TIGdzb7ifxOufn2sSYW12P+XXN5K6rclDSAAAXw0lEQVR4AayVxYLkOhJFb4ht2YmVWc00zLCb+bD3ebOezTDjY6osdKZBsqx4zM3dx7w6EXFti/CU0OeAPwdPx1NJqKSkAQLRhMkQExgg9Io7fimSVaMsMj6CGALIJECTALFERp9m53gCEo+FpHZUTvzJA2QiNkoNEiJKJRPA1oBfqBPaUAcA4tNGRJyBiBmAoKlZIbQwBJEN7/j5JKvoAmADIBggPYJqAkCgD2EaWCe+nKfxIw0nc/7skm83GQEfYTECGZPJaSVJTkIS0USSBmT4QwAGEllMZvbfZ5T4bKADLD5h1CRJSuEzK4qWqLNqGtj1aXXpDtXbkBkYRPssktXBwgIIFgAxOg/pgZIG8txXRFFJRDsUFPdMsouXFj/8O9BWD52Zemgb2gKjRrDBghS0nx1w/WpcTAbK1BSt7wOr3ncLNeoElsTd3wjwvX9YM+IhaWzlACCPsKEiKDLleqMrhG1KynszmFoNtliur1s9CYKCu37N34qBGc5tv/004yLtAMoALEAKcK7wre6VEfNL5Uehk8o0ZdnXFPfWDoj2cCjM+2MeAHA38hM7WdkCBP7EATUqs3BymsVe50JUAY2RBkpYIzwPwrkgchjMdzua2bIIEqTs6klfvGDNRMSABUbJ0Pomz/pWmfH6JIRhR0BgK3q+kLMEclXoSrnzcFFUnDNkHjM/dlzCKoEMADZYIFpH83qMZnTDumj6jQ10Mcq8gRmSGTAbQWzbITjuL9kNabhcjK2xu/wYidhMGJlhR/7JX9lKkro8LnazaDNsbG5mTb3iPhbTJdbRGeje0QEZXdEMLRdBXl3AgMwuP1Ky6rVBAMFEUaikCfX21eX1wYqYjTAak+SOXF8M8GjBGtijRquoG1zGdLa+asOFAXEozh8hIWtgAvDTP1sqBfkN3iRP6yobFumwJqK/zJqfcg5Ew5IAOptEnCp7yPBvIl57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"})})]})]})},O=(t(21),t(5)),f=t.p+"static/media/image-product-2.c8bb0aac.jpg",v=t.p+"static/media/image-product-3.af5c71ba.jpg",x=t.p+"static/media/image-product-4.9962862e.jpg",g=[{id:"01",img:d},{id:"02",img:f},{id:"03",img:v},{id:"04",img:x}],p=function(e){var c=Object(n.useState)(!1),t=Object(j.a)(c,2),r=t[0],a=t[1],s=function(){a((function(e){return!e}))};return Object(u.jsx)(i.a.Fragment,{children:Object(u.jsxs)("div",{className:"small_img",onClick:e.onClick,onMouseEnter:s,onMouseLeave:s,children:[e.active||r?Object(u.jsx)("div",{className:"overlaye"}):null,Object(u.jsx)("img",{src:e.src,style:e.active?{border:"3px solid hsl(26, 98%, 53%)",borderRadius:"10px",backgroundColor:"hsl(26, 98%, 53%)"}:{},alt:e.id,id:e.id})]})})},N=t.p+"static/media/icon-next.9621183a.svg",k=t.p+"static/media/icon-previous.80616402.svg",R=function(e){return{type:"SET",payload:e}},C=function(){var e=Object(n.useState)("01"),c=Object(j.a)(e,2),t=(c[0],c[1]),i=Object(n.useState)(window.innerWidth),r=Object(j.a)(i,2),a=r[0],o=r[1],l=Object(n.useState)(d),b=Object(j.a)(l,2),m=(b[0],b[1]),h=Object(s.b)(),f=Object(s.c)((function(e){return e.lightboxObjReducer.id})),v=Object(s.c)((function(e){return e.lightboxObjReducer}));Object(n.useEffect)((function(){var e=function(){return o(window.innerWidth)};return window.addEventListener("resize",e),function(){return window.removeEventListener("resize",e)}}),[]),Object(n.useEffect)((function(){x(v.id)}),[]);var x=function(e){var c=g.filter((function(c){return c.id===e}));h(R({id:c[0].id,img:c[0].img})),t(c[0].id),m(c[0].img)},C=g.map((function(e){var c=!1;return e.id===v.id&&(c=!0),Object(u.jsx)(p,Object(O.a)({active:c,id:e.id,onClick:function(){return x(e.id)},src:e.img},"active",c),e.id)}));return Object(u.jsxs)("div",{className:"carousel",children:[Object(u.jsxs)("div",{className:"focus",onClick:function(){return a>850&&void h({type:"TOGGLE"})},children:[Object(u.jsx)("img",{src:v.img,alt:"shoes"}),Object(u.jsx)("div",{className:"left",onClick:function(){for(var e,c=0;c<g.length;c++)if(g[c].id===f){e=c;break}var t,n=(0===(t=e)?t=g.length-1:t--,t);h(R(g[n]))},style:{display:a>850&&"none"},children:Object(u.jsx)("img",{src:k,alt:"prev_button"})}),Object(u.jsx)("div",{className:"right",onClick:function(){for(var e,c=0;c<g.length;c++)if(g[c].id===f){e=c;break}var t,n=((t=e)===g.length-1?t=0:t++,t);h(R(g[n]))},style:{display:a>850&&"none"},children:Object(u.jsx)("img",{src:N,alt:"next_button"})})]}),Object(u.jsx)("div",{className:"scroll",children:C})]})},M=function(){var e=Object(s.c)((function(e){return e.counterReducer})),c=Object(s.b)();return Object(u.jsxs)("div",{className:"shop",children:[Object(u.jsx)(C,{}),Object(u.jsxs)("div",{className:"text",children:[Object(u.jsx)("div",{className:"tag",children:"Sneaker Company"}),Object(u.jsx)("div",{className:"heading",children:"Fall Limited Edition Sneakers"}),Object(u.jsxs)("div",{className:"paragraph",children:[Object(u.jsx)("p",{className:"main_txt",children:"These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they\u2019ll withstand everything the weather can offer."}),Object(u.jsxs)("div",{className:"price",children:[Object(u.jsx)("p",{className:"amount",children:"$125.00"}),Object(u.jsx)("p",{className:"percent",children:"50%"})]}),Object(u.jsx)("div",{className:"strike",children:Object(u.jsx)("p",{children:"$250.00"})})]}),Object(u.jsxs)("div",{className:"btn",children:[Object(u.jsxs)("div",{className:"btn_add",children:[Object(u.jsx)("button",{className:"decrement",onClick:function(){return c({type:"DECREMENT"})},children:Object(u.jsx)("b",{children:"-"})}),Object(u.jsx)("span",{children:e}),Object(u.jsx)("button",{className:"increment",onClick:function(){return c({type:"INCREMENT"})},children:Object(u.jsx)("b",{children:"+"})})]}),Object(u.jsxs)("button",{onClick:function(){return c({type:"ADD",payload:{counter:e,price:125}})},children:[Object(u.jsx)("img",{src:l,alt:"cart_icon"}),Object(u.jsx)("span",{children:"Add to cart"})]})]})]})]})},A=t.p+"static/media/icon-close.c3904486.svg",z=function(){var e=Object(s.c)((function(e){return e.lightboxObjReducer.id})),c=Object(s.b)();return Object(u.jsxs)(i.a.Fragment,{children:[Object(u.jsx)("div",{className:"left",onClick:function(){for(var t,n=0;n<g.length;n++)if(g[n].id===e){t=n;break}var i,r=(0===(i=t)?i=g.length-1:i--,i);c(R(g[r]))},children:Object(u.jsx)("img",{src:k,alt:"prev_button"})}),Object(u.jsx)("div",{className:"right",onClick:function(){for(var t,n=0;n<g.length;n++)if(g[n].id===e){t=n;break}var i,r=((i=t)===g.length-1?i=0:i++,i);c(R(g[r]))},children:Object(u.jsx)("img",{src:N,alt:"next_button"})})]})},S=function(){var e=Object(s.b)();return Object(u.jsx)("div",{className:"lightbox",children:Object(u.jsxs)("div",{className:"lightbox_cont",children:[Object(u.jsx)("div",{className:"control_close",onClick:function(){return e({type:"TOGGLE"})},children:Object(u.jsx)("img",{src:A,alt:"close_button",className:"close"})}),Object(u.jsx)(C,{}),Object(u.jsx)(z,{})]})})},X=[{id:"05",urlName:"collection",anchor:"#collection"},{id:"01",urlName:"man",anchor:"#man"},{id:"02",urlName:"woman",anchor:"#woman"},{id:"03",urlName:"about",anchor:"#about"},{id:"04",urlName:"contact",anchor:"#contact"}],Y=function(){var e=Object(s.c)((function(e){return e.navReducer})),c=Object(s.b)();return Object(u.jsxs)(i.a.Fragment,{children:[e&&Object(u.jsx)("div",{className:"overlay",onClick:function(){return c({type:"TOGGLE"})}}),e&&Object(u.jsxs)("div",{className:"sidebar",style:{marginLeft:e&&"0px"},children:[Object(u.jsx)("img",{src:A,alt:"close_icon",className:"close",onClick:function(){return c({type:"TOGGLE"})}}),Object(u.jsx)("ul",{children:X.map((function(e){return Object(u.jsx)("li",{children:Object(u.jsx)("a",{href:e.anchor,children:e.urlName})},e.id)}))})]})]})};var I=function(){var e=Object(s.c)((function(e){return e.lightBoxReducer}));return Object(u.jsxs)(i.a.Fragment,{children:[e&&Object(u.jsx)(S,{}),Object(u.jsxs)("div",{className:"container",children:[Object(u.jsx)(Y,{}),Object(u.jsx)(h,{}),Object(u.jsx)(M,{})]})]})},E=t(6),G={counter:0,price:0},T=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:G,c=arguments.length>1?arguments[1]:void 0;return"ADD"===c.type?{counter:e.counter+c.payload.counter,price:e.price+c.payload.price*c.payload.counter}:"REMOVE"===c.type?G:e},U=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,c=arguments.length>1?arguments[1]:void 0;return"INCREMENT"===c.type?e+1:"DECREMENT"===c.type&&0!==e?e-1:e},V=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],c=arguments.length>1?arguments[1]:void 0;return"TOGGLE"===c.type?!e:e},y=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],c=arguments.length>1?arguments[1]:void 0;return"TOGGLE"===c.type?!e:e},F={id:"01",img:"/static/media/image-product-1.520cc50b.jpg 01"},J=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:F,c=arguments.length>1?arguments[1]:void 0;return"SET"===c.type?{id:c.payload.id,img:c.payload.img}:e},K=Object(E.a)({cartReducer:T,counterReducer:U,navReducer:V,lightBoxReducer:y,lightboxObjReducer:J}),W=Object(E.b)(K);a.a.render(Object(u.jsx)(i.a.StrictMode,{children:Object(u.jsx)(s.a,{store:W,children:Object(u.jsx)(I,{})})}),document.getElementById("root"))}},[[22,1,2]]]);
//# sourceMappingURL=main.c5950609.chunk.js.map