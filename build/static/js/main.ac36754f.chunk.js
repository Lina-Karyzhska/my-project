(this["webpackJsonpmy-project"]=this["webpackJsonpmy-project"]||[]).push([[0],{126:function(e,t,i){"use strict";i.r(t);var n=i(0),a=i.n(n),r=i(14),s=i.n(r),c=i(8),o=i(9),l=i(11),d=i(10),u=(i(96),i(26)),h=i(42),j=i(1),b=function(e){Object(l.a)(i,e);var t=Object(d.a)(i);function i(e){return Object(c.a)(this,i),t.call(this,e)}return Object(o.a)(i,[{key:"render",value:function(){return Object(j.jsx)("div",{onClick:this.props.handleClick,className:"header__login_btn",children:Object(j.jsxs)("svg",{height:"80px",viewBox:"0 0 512 512",xmlns:"http://www.w3.org/2000/svg",children:[Object(j.jsx)("path",{d:"m218.667969 240h-202.667969c-8.832031 0-16-7.167969-16-16s7.167969-16 16-16h202.667969c8.832031 0 16 7.167969 \r 16 16s-7.167969 16-16 16zm0 0"}),Object(j.jsx)("path",{d:"m138.667969 320c-4.097657 0-8.191407-1.558594-11.308594-4.691406-6.25-6.253906-6.25-16.386719 \r 0-22.636719l68.695313-68.691406-68.695313-68.671875c-6.25-6.253906-6.25-16.386719 0-22.636719s16.382813-6.25 22.636719 0l80 \r 80c6.25 6.25 6.25 16.382813 0 22.636719l-80 80c-3.136719 3.132812-7.234375 4.691406-11.328125 4.691406zm0 0"}),Object(j.jsx)("path",{d:"m341.332031 512c-23.53125 0-42.664062-19.136719-42.664062-42.667969v-384c0-18.238281 11.605469-34.515625 \r 28.882812-40.511719l128.171875-42.730468c28.671875-8.789063 56.277344 12.480468 56.277344 40.578125v384c0 18.21875-11.605469 \r 34.472656-28.863281 40.488281l-128.214844 42.753906c-4.671875 1.449219-9 2.089844-13.589844 2.089844zm128-480c-1.386719 \r 0-2.558593.171875-3.816406.554688l-127.636719 42.558593c-4.183594 1.453125-7.210937 5.675781-7.210937 10.21875v384c0 7.277344 \r 7.890625 12.183594 14.484375 10.113281l127.636718-42.558593c4.160157-1.453125 7.210938-5.675781 \r 7.210938-10.21875v-384c0-5.867188-4.777344-10.667969-10.667969-10.667969zm0 0"}),Object(j.jsx)("path",{d:"m186.667969 106.667969c-8.832031 0-16-7.167969-16-16v-32c0-32.363281 26.300781-58.667969 58.664062-58.667969h240c8.832031 0\r 16 7.167969 16 16s-7.167969 16-16 16h-240c-14.699219 0-26.664062 11.96875-26.664062 26.667969v32c0 8.832031-7.167969 16-16 16zm0 0"}),Object(j.jsx)("path",{d:"m314.667969 448h-85.335938c-32.363281 0-58.664062-26.304688-58.664062-58.667969v-32c0-8.832031 7.167969-16 16-16s16 \r 7.167969 16 16v32c0 14.699219 11.964843 26.667969 26.664062 26.667969h85.335938c8.832031 0 16 7.167969 16 16s-7.167969 16-16 \r 16zm0 0"})]})})}}]),i}(n.Component),m=i(37),p=function(){var e=Object(m.b)(),t=e.loginWithRedirect;e.isAuthenticated;return Object(j.jsx)("li",{className:"header__menu_link",children:Object(j.jsx)("a",{onClick:function(){t()},className:"header__link",children:"Log In"})})},f=function(){var e=Object(m.b)().logout;return[Object(j.jsx)("li",{className:"header__menu_link",children:Object(j.jsx)(h.b,{to:"/profile",className:"header__link",children:"Profile"})},"1"),Object(j.jsx)("li",{className:"header__menu_link",children:Object(j.jsx)("a",{onClick:function(){localStorage.clear(),e({returnTo:"http://localhost:3000"})},className:"header__link",children:"Log Out"})},"2")]};var O,v=function(e){Object(l.a)(i,e);var t=Object(d.a)(i);function i(e){var n;return Object(c.a)(this,i),(n=t.call(this,e)).updateScreen=function(){var e=window.innerWidth>768;n.setState({isBig:e})},n.handleSubmit=function(e){e.preventDefault(),n.props.handleChange(n.filmTitle.current.value),document.querySelector(".section_second").scrollIntoView({behavior:"smooth"}),n.filmTitle.current.value=""},n.info={},n.filmTitle=a.a.createRef(),n.state={isAuthenticated:localStorage.isAuthenticated||"false",isBig:window.innerWidth>768},n}return Object(o.a)(i,[{key:"componentDidMount",value:function(){window.addEventListener("resize",this.updateScreen)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.updatescreen)}},{key:"componentDidUpdate",value:function(){this.state.isAuthenticated==this.props.info.isAuthenticated||this.props.info.isLoading||(this.setState({isAuthenticated:this.props.info.isAuthenticated}),localStorage.isAuthenticated=this.props.info.isAuthenticated,this.props.handleAuth(this.props.info.isAuthenticated)),this.props.info.isAuthenticated&&!this.props.info.isLoading&&(localStorage.nickname=this.props.info.user.nickname,localStorage.email=this.props.info.user.email)}},{key:"render",value:function(){return Object(j.jsx)("header",{className:"header",children:Object(j.jsxs)("div",{className:"header__wrapper  section__wrapper",children:[Object(j.jsxs)(h.b,{to:"/",className:"header__logo header__link",children:[Object(j.jsx)("span",{className:"header__logo_accent",children:"LOVE"}),"FILMS"]}),Object(j.jsxs)("div",{className:"header__controls",children:[this.state.isBig?Object(j.jsx)("form",{className:"header__search_wrapper",onSubmit:this.handleSubmit,children:Object(j.jsx)("input",{className:"header__search search",type:"text",placeholder:"Search by name",ref:this.filmTitle})}):null,"true"==localStorage.isAuthenticated?Object(j.jsx)("div",{className:"header__profile_avatar",children:Object(j.jsx)("span",{})}):Object(j.jsx)(b,{onClick:this.props.loginWithRedirect}),Object(j.jsxs)("div",{className:"header__menu_wrapper",children:[Object(j.jsx)("div",{className:"header__menu_arrow"}),Object(j.jsx)("ul",{className:"header__menu",children:"true"==localStorage.isAuthenticated?Object(j.jsx)(f,{}):Object(j.jsx)(p,{})})]})]})]})})}}]),i}(n.Component),g=(O=v,function(e){var t=Object(m.b)(),i=t.user,n=t.isAuthenticated,a=t.isLoading;return Object(j.jsx)(O,Object(u.a)(Object(u.a)({},e),{},{info:{user:i,isAuthenticated:n,isLoading:a}}))}),x=i(16),_=i(80),w=i(47),S=(i(109),i(110),i(81)),N=i.n(S),F=function(e){Object(l.a)(i,e);var t=Object(d.a)(i);function i(e){return Object(c.a)(this,i),t.call(this,e)}return Object(o.a)(i,[{key:"render",value:function(){var e=this.props.info,t=e.Title,i=e.Plot,n=e.Genre,a=e.Actors,r=e.Poster,s=e.Ratings;return Object(j.jsxs)("div",{className:"slider__item",children:[Object(j.jsx)("div",{className:"slider__item_mask"}),Object(j.jsxs)("div",{className:"slider__item_description",children:[Object(j.jsx)("h2",{className:"slider__title",children:t}),Object(j.jsx)("p",{children:i}),Object(j.jsx)("h3",{className:"slider__subtitle",children:"Genres"}),Object(j.jsx)("p",{children:n}),Object(j.jsx)("h3",{className:"slider__subtitle",children:"Cast"}),Object(j.jsx)("p",{children:a}),Object(j.jsxs)("div",{className:"rating__wrapper",children:[Object(j.jsx)("svg",{className:"rating",xmlns:"http://www.w3.org/2000/svg",width:"20px",height:"20px",viewBox:"0 0 30 30",children:Object(j.jsx)("image",{id:"tomatometer-fresh.149b5e8adc3",width:"30px",height:"30px",xlinkHref:"data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAC1UlEQVRIicWXT0gUURzHPzObIy5saoWUptYqYcUULEUlJtGfS3oLq0MQneoSWxRBl25BBUHbyS7dMggpiiSKyEMWQTCiC6ZUKv7NRTTX9amz/+LZrG3+aV1z1+9hYOa9mc/7Pb7vzfcpJJJHzwQuAZtxey8m7L9ELQV8DbgNBIGtuL39ePQS4CSwHmjE7W1IBdgGvAKOAbeAr0AtkGH1mAJO4fa++H+wR98EXAAqgWygD6gCJoEsQLV6RoA9uL3NyUAXBnt0CagD1i7hfRNosQY3BnwHPgL1uL2DSwd7dDl9N62qNgIHgIJkq7H8IH1xA7c3mhj8ZwDVgDTVwSRgZnEg1FHdOzFd4ZtyCJsSOTw42VwgQlc0Q/z4N9ij68B94FD84w3T4W/DmbbimKEUEG9eD4w0FNoH1ShquW8q5+iAcNpD0YUK8QEnNEM0LQz26Nu1SLTOVBUJt8UANV2B9odNPlf+6S2d/gzVKZ+X+oOtbc96diUxG9KUVZohGueBTZc9D/hsqkpRpyNjNKgSLPUH87LCUYKqguOMczyi4MgMR4danvdmOseDOUmApUaB3ZoheuXNmriGB0CRFolSNmbmxr/RUGjv3uY3R473Ca63jurZZiRj3mcTK9da/1WzFZsu+xHg7TI+thxVaoZ4H9sILqcJKnVeXhTTZZeLf3jOtKdSfmCdrHh/GqFYO6IuwWVphMZUolpuS7fy1VWASikSHFgF8JAEd60CuEOCP6QZKrdOr2r9sj6lEVyvGSIcM1dtmqAyFNwjLjs9siJMqlWrGaJtFqwZIgScsxJjqvTFSjXEVyzhMimetZLjSqvfCgKBeWAL/gSoASZWENwKlGuG+GvZztu5NEM8ncnK/+/0MHAX2KcZomdu46InCdNll22y+qvA3iSA0iePgTuaIdoX65T4CPN7EDsBGXkrgB0zBzjQrOafQDdgAO+Al5ohZLhfXMAv5izh16rtLgsAAAAASUVORK5CYII="})}),s]})]}),Object(j.jsx)("img",{src:r,alt:"poster"})]})}}]),i}(n.Component),y=function(e){Object(l.a)(i,e);var t=Object(d.a)(i);function i(e){var n;return Object(c.a)(this,i),(n=t.call(this,e)).getSlides=function(){var e,t=[],i=Object(_.a)(n.state.slides);try{for(i.s();!(e=i.n()).done;){var a=e.value;t.push(Object(j.jsx)(F,{info:a},a.id))}}catch(r){i.e(r)}finally{i.f()}return t},n.state={slides:[]},n.getTopFilms=n.getTopFilms.bind(Object(w.a)(n)),n}return Object(o.a)(i,[{key:"getRandomInt",value:function(e){return Math.floor(Math.random()*Math.floor(e))}},{key:"getTopFilms",value:function(){var e=this;fetch("./data.json",{headers:{"Content-Type":"application/json",Accept:"application/json"}}).then((function(e){return e.json()})).then((function(t){for(var i=t.length,n=[],a=0;a<3;a++){var r=e.getRandomInt(i);n.push(t[r])}e.setState({slides:n})}))}},{key:"componentDidMount",value:function(){this.getTopFilms()}},{key:"render",value:function(){return Object(j.jsxs)("div",{className:"section__slider",children:[Object(j.jsx)("div",{className:"slider__mask"}),Object(j.jsx)("section",{className:"slider",children:Object(j.jsx)("div",{className:"slider__wrapper",children:Object(j.jsx)(N.a,Object(u.a)(Object(u.a)({},{infinite:!0,slidesToShow:1,slidesToScroll:1,autoplay:!0,autoplaySpeed:7e3,arrows:!1}),{},{children:this.getSlides()}))})})]})}}]),i}(n.Component),A=i(39),C=i(29),k=i(163),L=i(166),T=i(169),z=i(168),I=i(180),M=i(172),U=function(e){Object(l.a)(i,e);var t=Object(d.a)(i);function i(e){return Object(c.a)(this,i),t.call(this,e)}return Object(o.a)(i,[{key:"render",value:function(){return Object(j.jsxs)("svg",{version:"1.1",id:"Capa_1",xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",viewBox:"0 0 512 512",style:{enableBackground:"new 0 0 512 512"},width:"16px",height:"16px",children:[Object(j.jsx)("path",{d:"M499.92,188.26l-165.839-15.381L268.205,19.91c-4.612-10.711-19.799-10.711-24.411,0l-65.875,152.97\r L12.08,188.26c-11.612,1.077-16.305,15.52-7.544,23.216l125.126,109.922L93.044,483.874c-2.564,11.376,9.722,20.302,19.749,14.348\r L256,413.188l143.207,85.034c10.027,5.954,22.314-2.972,19.75-14.348l-36.619-162.476l125.126-109.922\r C516.225,203.78,511.532,189.337,499.92,188.26z"}),Object(j.jsx)("path",{d:"M268.205,19.91c-4.612-10.711-19.799-10.711-24.411,0l-65.875,152.97L12.08,188.26\r c-11.612,1.077-16.305,15.52-7.544,23.216l125.126,109.922L93.044,483.874c-2.564,11.376,9.722,20.302,19.749,14.348l31.963-18.979\r c4.424-182.101,89.034-310.338,156.022-383.697L268.205,19.91z"})]})}}]),i}(a.a.Component),E=Object(k.a)((function(e){return{card:{width:"100%",backgroundColor:"#414f57",color:"#fff","& .MuiPaper-root":{margin:0,marginLeft:0}},media:{height:300}}}));function B(e){var t,i=e.isFetched,n="card__favbtn card__desc";e.isFav&&(n+=" card__favbtn_isFav"),e.info&&(t=e.info);var r=E();return Object(j.jsxs)(L.a,{className:r.card,children:[i?Object(j.jsx)("div",{className:"card__img_wrapper",children:Object(j.jsx)("img",{src:t.Poster,alt:"poster",className:"card__img"})}):Object(j.jsx)(z.a,{animation:"wave",variant:"rect",className:r.media}),Object(j.jsx)(T.a,{children:i?Object(j.jsxs)(a.a.Fragment,{children:[Object(j.jsx)("h4",{children:t.Title}),Object(j.jsxs)("p",{children:[Object(j.jsx)("span",{className:"card__desc",children:t.Year}),Object(j.jsx)("span",{className:"card__desc",children:t.Type})]}),Object(j.jsxs)("div",{children:[Object(j.jsx)("svg",{className:"rating",xmlns:"http://www.w3.org/2000/svg",width:"20px",height:"20px",viewBox:"0 0 30 30",children:Object(j.jsx)("image",{id:"tomatometer-fresh.149b5e8adc3",width:"30px",height:"30px",xlinkHref:"data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAC1UlEQVRIicWXT0gUURzHPzObIy5saoWUptYqYcUULEUlJtGfS3oLq0MQneoSWxRBl25BBUHbyS7dMggpiiSKyEMWQTCiC6ZUKv7NRTTX9amz/+LZrG3+aV1z1+9hYOa9mc/7Pb7vzfcpJJJHzwQuAZtxey8m7L9ELQV8DbgNBIGtuL39ePQS4CSwHmjE7W1IBdgGvAKOAbeAr0AtkGH1mAJO4fa++H+wR98EXAAqgWygD6gCJoEsQLV6RoA9uL3NyUAXBnt0CagD1i7hfRNosQY3BnwHPgL1uL2DSwd7dDl9N62qNgIHgIJkq7H8IH1xA7c3mhj8ZwDVgDTVwSRgZnEg1FHdOzFd4ZtyCJsSOTw42VwgQlc0Q/z4N9ij68B94FD84w3T4W/DmbbimKEUEG9eD4w0FNoH1ShquW8q5+iAcNpD0YUK8QEnNEM0LQz26Nu1SLTOVBUJt8UANV2B9odNPlf+6S2d/gzVKZ+X+oOtbc96diUxG9KUVZohGueBTZc9D/hsqkpRpyNjNKgSLPUH87LCUYKqguOMczyi4MgMR4danvdmOseDOUmApUaB3ZoheuXNmriGB0CRFolSNmbmxr/RUGjv3uY3R473Ca63jurZZiRj3mcTK9da/1WzFZsu+xHg7TI+thxVaoZ4H9sILqcJKnVeXhTTZZeLf3jOtKdSfmCdrHh/GqFYO6IuwWVphMZUolpuS7fy1VWASikSHFgF8JAEd60CuEOCP6QZKrdOr2r9sj6lEVyvGSIcM1dtmqAyFNwjLjs9siJMqlWrGaJtFqwZIgScsxJjqvTFSjXEVyzhMimetZLjSqvfCgKBeWAL/gSoASZWENwKlGuG+GvZztu5NEM8ncnK/+/0MHAX2KcZomdu46InCdNll22y+qvA3iSA0iePgTuaIdoX65T4CPN7EDsBGXkrgB0zBzjQrOafQDdgAO+Al5ohZLhfXMAv5izh16rtLgsAAAAASUVORK5CYII="})}),Object(j.jsx)("span",{className:"card__desc",children:t.Ratings}),"true"==localStorage.isAuthenticated?Object(j.jsx)(I.a,{title:"Add to favorite",placement:"right",TransitionComponent:M.a,enterDelay:500,children:Object(j.jsx)("span",{children:Object(j.jsx)("button",{"data-isfav":e.isFav,onClick:function(t){return function(t){t.currentTarget.disabled||e.setFav(t)}(t)},className:n,children:Object(j.jsx)(U,{})})})}):null]})]}):Object(j.jsxs)(a.a.Fragment,{children:[Object(j.jsx)(z.a,{animation:"wave",height:10,width:"70%",style:{margin:"auto",marginBottom:"5px"}}),Object(j.jsx)(z.a,{animation:"wave",height:10,width:"50%",style:{margin:"auto",marginBottom:"5px"}}),Object(j.jsxs)("div",{style:{display:"flex",justifyContent:"center"},children:[Object(j.jsx)(z.a,{animation:"wave",height:10,width:"15%",style:{margin:"0 5px"}}),Object(j.jsx)(z.a,{animation:"wave",height:10,width:"15%",style:{margin:"0 5px"}})]})]})})]})}var R=function(e){Object(l.a)(i,e);var t=Object(d.a)(i);function i(e){var n;return Object(c.a)(this,i),(n=t.call(this,e)).setFav=function(e){if("false"==e.currentTarget.dataset.isfav){localStorage[n.info.id]=JSON.stringify(Object(u.a)(Object(u.a)({},n.info),{isFav:!0})),e.currentTarget.dataset.isfav="true"}else localStorage.removeItem(n.info.id),e.currentTarget.dataset.isfav="false";n.setState({isFav:!n.state.isFav})},n.state={isFav:!1},n}return Object(o.a)(i,[{key:"componentDidMount",value:function(){this.info&&localStorage[this.info.id]&&!this.state.isFav&&this.setState({isFav:!0})}},{key:"componentDidUpdate",value:function(){this.info&&localStorage[this.info.id]&&!this.state.isFav&&this.setState({isFav:!0})}},{key:"render",value:function(){return this.info=this.props.info,Object(j.jsx)("div",{className:"card",children:Object(j.jsx)(B,{setFav:this.setFav,isFetched:this.props.isFetched,isFav:this.state.isFav,info:this.info})})}}]),i}(n.Component),D=i(5),W=i(181),V=Object(k.a)((function(e){return{tooltip:{backgroundColor:"transparent",color:"black"},tooltipPlacementTop:{margin:"0px",position:"relative",top:"2px",color:"#d9d9d9"}}}));function Z(e){var t=e.children,i=e.open,n=e.value,a=V();return Object(j.jsx)(I.a,{classes:a,open:i,enterTouchDelay:0,placement:"top",title:n,children:t})}var G=Object(D.a)({root:{color:"#d9d9d9",height:3,padding:"13px 0"},thumb:{height:10,width:10,border:"1px solid currentColor",marginTop:-4,marginLeft:-4},track:{height:3,top:"12.5px"},rail:{color:"#666",opacity:1,height:2}})(W.a),q=function(e){Object(l.a)(i,e);var t=Object(d.a)(i);function i(){return Object(c.a)(this,i),t.apply(this,arguments)}return Object(o.a)(i,[{key:"render",value:function(){var e=this;return Object(j.jsx)("div",{children:Object(j.jsx)(G,{onChangeCommitted:function(t,i){return e.props.setFilter("years",i)},ValueLabelComponent:Z,valueLabelDisplay:"on",defaultValue:[1940,2021],min:1940,max:2021})})}}]),i}(a.a.Component),H=i(4),K=i(176),Y=i(182),P=Object(k.a)({root:{fontSize:"1rem",transition:"700ms","&:hover":{backgroundColor:"rgba(217, 217, 217, 0.06)"}},icon:{borderRadius:3,width:16,height:16,backgroundColor:"#566269"},checkedIcon:{backgroundColor:"#d9d9d9","&:before":{display:"block",width:16,height:16,backgroundImage:"url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M12 5c-.28 0-.53.11-.71.29L7 9.59l-2.29-2.3a1.003 1.003 0 00-1.42 1.42l3 3c.18.18.43.29.71.29s.53-.11.71-.29l5-5A1.003 1.003 0 0012 5z' fill='black'/%3E%3C/svg%3E\")",content:'""'}}});function J(e){var t=P(),i="Movie"==e.name?"isMovie":"isTV";return Object(j.jsx)(Y.a,{value:"end",control:Object(j.jsx)(K.a,Object(u.a)({className:t.root,onChange:function(t){return e.setFilter(i,t.target.checked)},disableRipple:!0,color:"default",checkedIcon:Object(j.jsx)("span",{className:Object(H.a)(t.icon,t.checkedIcon)}),icon:Object(j.jsx)("span",{className:t.icon}),inputProps:{"aria-label":"decorative checkbox"}},e)),label:e.name,labelPlacement:"end"})}var Q=function(e){Object(l.a)(i,e);var t=Object(d.a)(i);function i(e){return Object(c.a)(this,i),t.call(this,e)}return Object(o.a)(i,[{key:"render",value:function(){return Object(j.jsx)(J,{setFilter:this.props.setFilter,name:this.props.name})}}]),i}(a.a.Component),X=i(183),$=i(173),ee=i(174),te=i(175),ie=(i(79),Object(k.a)((function(e){return{formControl:{margin:e.spacing(1),width:"100px","& .MuiInputBase-root":{color:"#d9d9d9",backgroundColor:"#566269",padding:"0 10px",width:"100%",borderRadius:"5px"},"& .MuiInput-underline:after":{border:"none"},"& .MuiInput-underline:before":{border:"none"},"& .MuiInput-underline:hover:not(.Mui-disabled):before":{border:"none"}},selectEmpty:{marginTop:e.spacing(2)}}})));function ne(e){var t=ie(),i=a.a.useState(""),n=Object(A.a)(i,2),r=n[0],s=n[1];return Object(j.jsx)(te.b,{injectFirst:!0,children:Object(j.jsx)($.a,{className:t.formControl,children:Object(j.jsxs)(ee.a,{value:r,onChange:function(t){s(t.target.value),e.setFilter("genre",t.target.value)},displayEmpty:!0,className:t.select,inputProps:{"aria-label":"Without label"},children:[Object(j.jsx)(X.a,{value:"",children:"Genre"}),Object(j.jsx)(X.a,{value:"Drama",children:"Drama"}),Object(j.jsx)(X.a,{value:"Comedy",children:"Comedy"}),Object(j.jsx)(X.a,{value:"Adventure",children:"Adventure"}),Object(j.jsx)(X.a,{value:"Sci-Fi",children:"Sci-Fi"}),Object(j.jsx)(X.a,{value:"Romance",children:"Romance"}),Object(j.jsx)(X.a,{value:"Crime",children:"Crime"})]})})})}var ae=Object(k.a)((function(e){return{formControl:{margin:"0 8px","& .MuiInputBase-root":{color:"#d9d9d9",paddingRight:"5px",borderRadius:"5px"},"& .MuiInput-underline:after":{border:"none"},"& .MuiInput-underline:before":{border:"none"},"& .MuiInput-underline:hover:not(.Mui-disabled):before":{border:"none"}},selectEmpty:{marginTop:e.spacing(2)}}}));function re(e){var t=ae(),i=a.a.useState(""),n=Object(A.a)(i,2),r=n[0],s=n[1];return Object(j.jsx)(te.b,{injectFirst:!0,children:Object(j.jsx)($.a,{className:t.formControl,children:Object(j.jsxs)(ee.a,{value:r,onChange:function(t){s(t.target.value),e.setFilter("sort",t.target.value)},displayEmpty:!0,className:t.select,inputProps:{"aria-label":"Without label"},children:[Object(j.jsx)(X.a,{value:"",children:"None"}),Object(j.jsx)(X.a,{value:"Critic's Score",children:"Critic's Score"}),Object(j.jsx)(X.a,{value:"Year",children:"Year"})]})})})}var se=i(179);function ce(e){return Object(j.jsx)(se.a,{open:e.isOpen,onClose:function(){return e.toggleDrawer(!1)},children:e.children})}var oe=function(e){Object(l.a)(i,e);var t=Object(d.a)(i);function i(e){var n;return Object(c.a)(this,i),(n=t.call(this,e)).updateDrawer=function(){var e=!(window.innerWidth>768);n.setState({drawer:e,isOpen:!e})},n.setFilters=function(e,t){n.filters[e]=t,n.props.getFilters(n.filters),document.querySelector(".section_second").scrollIntoView({behavior:"smooth"})},n.toggleDrawer=function(e,t){t&&t.preventDefault(),n.setState({isOpen:e})},n.filters={isMovie:!1,isTV:!1,genre:"",years:[1940,2021],sort:"",title:""},n.state={drawer:!(window.innerWidth>768),isOpen:window.innerWidth>768},n}return Object(o.a)(i,[{key:"componentDidMount",value:function(){window.addEventListener("resize",this.updateDrawer)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.updateDrawer)}},{key:"componentDidUpdate",value:function(){this.filters.title!=this.props.title&&(this.filters.title=this.props.title,this.props.getFilters(this.filters))}},{key:"render",value:function(){var e=this;return Object(j.jsxs)("form",{className:"filter",children:[this.state.drawer?Object(j.jsx)("button",{className:"filter__btn button",onClick:function(t){return e.toggleDrawer(!0,t)},children:"Set filters"}):null,this.state.drawer?Object(j.jsx)(ce,{isOpen:this.state.isOpen,toggleDrawer:this.toggleDrawer,children:Object(j.jsxs)("div",{className:"filter__params_drawer",children:[Object(j.jsx)("form",{className:"search_wrapper",onSubmit:this.handleSubmit,children:Object(j.jsx)("input",{className:"search",type:"text",placeholder:"Search by name",ref:this.filmTitle})}),Object(j.jsxs)("div",{className:"filter__control filter__types filter__types_drawer",children:[Object(j.jsx)(Q,{setFilter:this.setFilters,name:"TV"}),Object(j.jsx)(Q,{setFilter:this.setFilters,name:"Movie"})]}),Object(j.jsx)("div",{className:"filter__control filter__dropdown filter__dropdown_genres",children:Object(j.jsx)(ne,{setFilter:this.setFilters})}),Object(j.jsxs)("div",{className:"filter__control filter__slider",children:[Object(j.jsx)("span",{children:"Age"}),Object(j.jsx)(q,{setFilter:this.setFilters})]}),Object(j.jsxs)("div",{className:"filter__control filter__dropdown_sort",children:[Object(j.jsx)("span",{children:"Sort by:"}),Object(j.jsx)(re,{setFilter:this.setFilters})]})]})}):Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)("div",{className:"filter__params",children:[Object(j.jsxs)("div",{className:"filter__types",children:[Object(j.jsx)(Q,{setFilter:this.setFilters,name:"TV"}),Object(j.jsx)(Q,{setFilter:this.setFilters,name:"Movie"})]}),Object(j.jsx)("div",{className:"filter__dropdown filter__dropdown_genres",children:Object(j.jsx)(ne,{setFilter:this.setFilters})}),Object(j.jsxs)("div",{className:"filter__slider",children:[Object(j.jsx)("span",{children:"Age"}),Object(j.jsx)(q,{setFilter:this.setFilters})]})]}),Object(j.jsxs)("div",{className:"filter__dropdown_sort",children:[Object(j.jsx)("span",{children:"Sort by:"}),Object(j.jsx)(re,{setFilter:this.setFilters})]})]})]})}}]),i}(n.Component),le=function(e){Object(l.a)(i,e);var t=Object(d.a)(i);function i(e){return Object(c.a)(this,i),t.call(this,e)}return Object(o.a)(i,[{key:"render",value:function(){return Object(j.jsx)("div",{className:"filmlist__button",children:Object(j.jsx)("button",{onClick:this.props.handleClick,className:"button",children:this.props.inner})})}}]),i}(n.Component),de=function(e){Object(l.a)(i,e);var t=Object(d.a)(i);function i(e){var n;return Object(c.a)(this,i),(n=t.call(this,e)).getFilms=function(){fetch("data.json",{headers:{"Content-Type":"application/json",Accept:"application/json"}}).then((function(e){return e.json()})).then((function(e){n.filmList=Object(C.a)(e),n.setState({filmList:Object(C.a)(e)})})),n.isFetched=!0},n.updateSize=function(){n.size=window.innerWidth>1024?10:window.innerWidth>768||window.innerWidth<500?8:9,n.setState({counter:n.size})},n.getCards=function(){for(var e=[],t=0;t<n.state.counter&&n.state.filmList[t];t++){var i=n.state.filmList[t],a=i.id,r=i.Title,s=i.Year,c=i.Type,o=i.Ratings,l=i.Poster;e.push(Object(j.jsx)(R,{info:{Title:r,Year:s,Type:c,Ratings:o,Poster:l,id:a},isFetched:!0},a))}return e.length?e:Object(j.jsx)("div",{className:"filmlist__notFound",children:"Not found"})},n.getFilteredFilms=function(e){for(var t,i={movie:e.isMovie&&!e.isTV,series:!e.isMovie&&e.isTV},a=function(){var e=Object(A.a)(s[r],2),i=e[0];e[1]&&(t=Object(C.a)(n.filmList.filter((function(e){return e.Type==i}))))},r=0,s=Object.entries(i);r<s.length;r++)a();t||(t=Object(C.a)(n.filmList)),t=Object(C.a)(t.filter((function(t){return t.Genre.includes(e.genre)}))),t=Object(C.a)(t.filter((function(t){return n.getYear(t,e)}))),t=Object(C.a)(t.filter((function(e){return e.Title.includes(n.props.title)||e.Title.toLowerCase().includes(n.props.title)}))),e.sort&&n.sort(t,e.sort),n.isFetched=!0,n.setState({filmList:Object(C.a)(t),counter:n.size})},n.sort=function(e,t){"Critic's Score"==t?e.sort(n.compareByScore):e.sort(n.compareByYear)},n.increaseCounter=function(){n.setState({counter:n.state.counter+n.size})},n.revertCounter=function(){n.setState({counter:n.size})},n.areAllFilmsShown=function(){if(n.state.filmList.length>n.size)return n.state.counter>=n.state.filmList.length},n.isFetched=!1,n.filmList=[],n.size=window.innerWidth>1024?10:window.innerWidth>768||window.innerWidth<500?8:9,n.state={filmList:[],counter:n.size},n.getYear=n.getYear.bind(Object(w.a)(n)),n}return Object(o.a)(i,[{key:"getSkeletons",value:function(){for(var e=[],t=0;t<this.size;t++)e.push(Object(j.jsx)(R,{},t));return e}},{key:"componentDidMount",value:function(){this.getFilms(),window.addEventListener("resize",this.updateSize)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.updateSize)}},{key:"getYear",value:function(e,t){var i="".concat(e.Year).split("\u2013");return""!=+i[1]&&i[1]?i[0]>=t.years[0]&&i[1]<=t.years[1]:i[0]>=t.years[0]&&+i[0]<=t.years[1]}},{key:"compareByScore",value:function(e,t){return t.Ratings.split("%")[0]-e.Ratings.split("%")[0]}},{key:"compareByYear",value:function(e,t){return"".concat(t.Year).split("\u2013")[0]-"".concat(e.Year).split("\u2013")[0]}},{key:"render",value:function(){return Object(j.jsxs)("div",{className:"section__wrapper",children:[Object(j.jsx)("div",{className:"filmlist__control",children:Object(j.jsx)(oe,{title:this.props.title,getFilters:this.getFilteredFilms})}),Object(j.jsx)("div",{className:"filmlist",children:this.isFetched?this.getCards():this.getSkeletons()}),this.areAllFilmsShown()?Object(j.jsx)(le,{handleClick:this.revertCounter,inner:"Hide"}):this.state.filmList.length>this.size&&Object(j.jsx)(le,{handleClick:this.increaseCounter,inner:"More"})]})}}]),i}(n.Component),ue=function(e){Object(l.a)(i,e);var t=Object(d.a)(i);function i(e){return Object(c.a)(this,i),t.call(this,e)}return Object(o.a)(i,[{key:"getImage",value:function(e){var t=document.getElementById("canvasAvatar"),i=t.getContext("2d"),n=new Image,a=e.target.files[0];if(a.type.match("image.*")){var r=new FileReader;r.readAsDataURL(a),r.onload=function(e){e.target.readyState==FileReader.DONE&&(n.src=e.target.result,localStorage.imgSrc=e.target.result,n.onload=function(){return i.drawImage(n,0,0,t.width,t.height)})}}else alert("not an image")}},{key:"componentDidMount",value:function(){var e=document.getElementById("canvasAvatar"),t=e.getContext("2d");if(localStorage.imgSrc){var i=new Image;i.src=localStorage.imgSrc,i.onload=function(){return t.drawImage(i,0,0,e.width,e.height)}}}},{key:"render",value:function(){return Object(j.jsxs)("div",{className:"profile__avatar",children:[Object(j.jsx)("canvas",{className:"profile__avatar_canvas",id:"canvasAvatar"}),Object(j.jsx)("label",{className:"button profile__avatar_btn",htmFlor:"avatar_input",children:"Load"}),Object(j.jsx)("input",{className:"profile__avatar_input",id:"avatar_input",type:"file",onChange:this.getImage})]})}}]),i}(n.Component),he=i(25),je=Object(k.a)((function(e){var t;return{formControl:(t={margin:e.spacing(1),width:"100%"},Object(he.a)(t,"margin","0px"),Object(he.a)(t,"& .MuiInputBase-root",{color:"#414f57",backgroundColor:"rgb(144, 163, 173, 0.5)",borderRadius:"5px 5px 0 0",padding:"0px",paddingTop:"5px",width:"100%",fontFamily:"'Poppins', sans-serif",fontSize:"1rem"}),Object(he.a)(t,"& .Mui-disabled",{backgroundColor:"transparent",borderRadius:0}),Object(he.a)(t,"& .MuiInput-underline:after",{border:"none"}),Object(he.a)(t,"& .MuiInput-underline:before",{border:"none"}),Object(he.a)(t,"& .MuiInput-underline:hover:not(.Mui-disabled):before",{border:"none"}),Object(he.a)(t,"& .MuiSelect-root",{padding:"5px",borderBottom:"1px solid #414f57"}),t),selectEmpty:{marginTop:e.spacing(2)}}}));function be(e){var t=je(),i=a.a.useState(""),n=Object(A.a)(i,2),r=n[0],s=n[1];return Object(j.jsx)(te.b,{injectFirst:!0,children:Object(j.jsx)($.a,{className:t.formControl,disabled:e.disabled,children:Object(j.jsxs)(ee.a,{value:r,onChange:function(t){s(t.target.value),e.setGender("gender",t.target.value)},id:"gender",displayEmpty:!0,defaultValue:e.value,className:t.select,inputProps:{"aria-label":"Without label"},children:[Object(j.jsx)(X.a,{value:""}),Object(j.jsx)(X.a,{value:"Male",children:"Male"}),Object(j.jsx)(X.a,{value:"Female",children:"Female"}),Object(j.jsx)(X.a,{value:"Other",children:"Other"})]})})})}var me=function(e){Object(l.a)(i,e);var t=Object(d.a)(i);function i(e){var n;return Object(c.a)(this,i),(n=t.call(this,e)).changeInfo=function(){Object(C.a)(document.querySelectorAll(".profile__information_input")).forEach((function(e){e.toggleAttribute("disabled"),e.classList.toggle("disabled")})),document.querySelector(".profile__information_textarea").toggleAttribute("disabled"),document.querySelector(".profile__information_textarea").classList.toggle("disabled"),n.setState({disabled:!n.state.disabled})},n.setUserInfo=function(e,t){n.user[e]=t,localStorage[e]=t,n.setState({changed:!n.state.changed})},n.user={nickname:localStorage.nickname||"",email:localStorage.email||"",gender:localStorage.gender||"",age:localStorage.age||"",city:localStorage.city||"",media:localStorage.media||"",about:localStorage.about||"",name:localStorage.name||""},n.state={changed:!1,disabled:!0},n}return Object(o.a)(i,[{key:"componentDidMount",value:function(){this.setState({changed:!1})}},{key:"render",value:function(){var e,t=this;return Object(j.jsxs)("div",{className:"profile__information",children:[Object(j.jsx)("h3",{className:"profile__information_nickname",children:this.user.nickname}),Object(j.jsxs)("div",{className:"profile__information_wrapper",children:[Object(j.jsxs)("div",{className:"profile__information_input_wrapper",children:[Object(j.jsx)("label",{className:"profile__information_input_title",htmlFor:"name",children:"Name Surname"}),Object(j.jsx)("input",{className:"profile__information_input disabled",value:this.user.name,id:"name",type:"text",disabled:!0,ref:this.user.name,onChange:function(e){return t.setUserInfo(e.target.getAttribute("id"),e.target.value)}})]}),Object(j.jsxs)("div",{className:"profile__information_input_wrapper",children:[Object(j.jsx)("label",{className:"profile__information_input_title",htmlFor:"email",children:"Email"}),Object(j.jsx)("input",(e={className:"profile__information_input disabled",value:this.user.email,id:"email",type:"email"},Object(he.a)(e,"value",this.user.email),Object(he.a)(e,"disabled",!0),Object(he.a)(e,"ref",this.user.email),Object(he.a)(e,"onChange",(function(e){return t.setUserInfo(e.target.getAttribute("id"),e.target.value)})),e))]}),Object(j.jsxs)("div",{className:"profile__information_input_wrapper",children:[Object(j.jsx)("label",{className:"profile__information_input_title",htmlFor:"age",children:"Age"}),Object(j.jsx)("input",{className:"profile__information_input disabled",value:this.user.age,id:"age",type:"number",min:"0",max:"100",disabled:!0,ref:this.user.age,onChange:function(e){return t.setUserInfo(e.target.getAttribute("id"),e.target.value)}})]}),Object(j.jsxs)("div",{className:"profile__information_input_wrapper",children:[Object(j.jsx)("label",{className:"profile__information_input_title",htmlFor:"city",children:"City"}),Object(j.jsx)("input",{className:"profile__information_input disabled",value:this.user.city,id:"city",type:"text",disabled:!0,ref:this.user.city,onChange:function(e){return t.setUserInfo(e.target.getAttribute("id"),e.target.value)}})]}),Object(j.jsxs)("div",{className:"profile__information_input_wrapper",children:[Object(j.jsx)("label",{className:"profile__information_input_title",children:"Gender"}),Object(j.jsx)(be,{disabled:this.state.disabled,value:this.user.genre,setGender:this.setUserInfo})]}),Object(j.jsxs)("div",{className:"profile__information_input_wrapper",children:[Object(j.jsx)("label",{className:"profile__information_input_title",htmlFor:"media",children:"Media"}),Object(j.jsx)("input",{className:"profile__information_input disabled",value:this.user.media,id:"media",type:"text",disabled:!0,ref:this.user.media,onChange:function(e){return t.setUserInfo(e.target.getAttribute("id"),e.target.value)}})]})]}),Object(j.jsxs)("div",{className:"profile__information_textarea_wrapper",children:[Object(j.jsx)("label",{className:"profile__information_input_title",htmlFor:"about",children:"About me"}),Object(j.jsx)("textarea",{value:this.user.about,id:"about",className:"profile__information_textarea disabled",disabled:!0,ref:this.user.about,onChange:function(e){return t.setUserInfo(e.target.getAttribute("id"),e.target.value)}})]}),Object(j.jsx)("div",{className:"profile__information_btn_wrapper",children:Object(j.jsx)("button",{className:"profile__information_btn button",onClick:this.changeInfo,children:this.state.disabled?"Change information":"Confirm"})})]})}}]),i}(n.Component),pe=function(e){Object(l.a)(i,e);var t=Object(d.a)(i);function i(e){return Object(c.a)(this,i),t.call(this,e)}return Object(o.a)(i,[{key:"render",value:function(){return Object(j.jsxs)("div",{className:"section__wrapper profile",children:[Object(j.jsx)("h2",{className:"profile__title",children:"Profile"}),Object(j.jsxs)("div",{className:"profile__wrapper",children:[Object(j.jsx)(ue,{}),Object(j.jsx)(me,{})]})]})}}]),i}(n.Component),fe=function(e){Object(l.a)(i,e);var t=Object(d.a)(i);function i(e){var n;return Object(c.a)(this,i),(n=t.call(this,e)).getFavFilms=function(){var e=[];for(var t in localStorage)localStorage.hasOwnProperty(t)&&!isNaN(t)&&e.push(JSON.parse(localStorage[t]));n.isFetched=!0,n.favFilms=[].concat(e),n.setState({favFilms:[].concat(e)})},n.updateSize=function(){n.size=window.innerWidth>1024?10:window.innerWidth>768||window.innerWidth<500?8:9,n.setState({counter:n.size})},n.getCards=function(){for(var e=[],t=0;t<n.state.counter&&n.state.favFilms[t];t++){var i=n.state.favFilms[t],a=i.id,r=i.Title,s=i.Year,c=i.Type,o=i.Ratings,l=i.Poster;e.push(Object(j.jsx)(R,{info:{Title:r,Year:s,Type:c,Ratings:o,Poster:l,id:a},isFetched:!0},a))}return e.length?e:Object(j.jsx)("div",{className:"filmlist__notFound",children:"Not found"})},n.getFilteredFilms=function(){var e;e=Object(C.a)(n.favFilms.filter((function(e){return e.Title.includes(n.props.title)||e.Title.toLowerCase().includes(n.props.title)}))),n.isFetched=!0,n.title=n.props.title,n.setState({favFilms:Object(C.a)(e),counter:n.size})},n.increaseCounter=function(){n.setState({counter:n.state.counter+n.size})},n.revertCounter=function(){n.setState({counter:n.size})},n.areAllFilmsShown=function(){if(n.state.favFilms.length>n.size)return n.state.counter>=n.state.favFilms.length},n.toggleFavList=function(){n.setState({isShown:!n.state.isShown}),setTimeout((function(){return document.querySelector(".section_second").scrollIntoView({behavior:"smooth"})}),0)},n.isFetched=!1,n.favFilms=[],n.title="",n.size=window.innerWidth>1024?10:window.innerWidth>768||window.innerWidth<500?8:9,n.state={favFilms:[],counter:n.size,isShown:n.props.favFilmsShown},n}return Object(o.a)(i,[{key:"getSkeletons",value:function(){for(var e=[],t=0;t<this.state.counter;t++)e.push(Object(j.jsx)(R,{},t));return e}},{key:"componentDidMount",value:function(){this.getFavFilms(),this.title!=this.props.title&&this.getFilteredFilms(),window.addEventListener("resize",this.updateSize)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.updateSize)}},{key:"componentDidUpdate",value:function(){this.title!=this.props.title&&this.getFilteredFilms()}},{key:"render",value:function(){return Object(j.jsxs)("div",{className:"section__wrapper",children:[Object(j.jsx)("div",{className:"fav__btn",children:Object(j.jsx)(le,{handleClick:this.toggleFavList,inner:this.state.isShown?"Hide":"Show Favorite Films"})}),this.state.isShown?Object(j.jsx)("div",{className:"filmlist",children:this.isFetched?this.getCards():this.getSkeletons()}):null,this.areAllFilmsShown()?Object(j.jsx)(le,{handleClick:this.revertCounter,inner:"Hide"}):this.state.isShown&&this.state.favFilms.length>this.size&&Object(j.jsx)(le,{handleClick:this.increaseCounter,inner:"More"})]})}}]),i}(n.Component),Oe=function(e){Object(l.a)(i,e);var t=Object(d.a)(i);function i(e){return Object(c.a)(this,i),t.call(this,e)}return Object(o.a)(i,[{key:"render",value:function(){var e=this,t="section section_";return this.props.isFirst?t+="first":t+="second",Object(j.jsx)("div",{className:t,children:Object(j.jsxs)(x.d,{children:[Object(j.jsx)(x.b,{exact:!0,path:"/",children:this.props.isFirst?Object(j.jsx)(y,{}):Object(j.jsx)(de,{title:this.props.title})}),"true"==localStorage.isAuthenticated&&Object(j.jsx)(x.b,{exact:!0,path:"/profile",component:this.props.isFirst?pe:function(t){return Object(j.jsx)(fe,Object(u.a)(Object(u.a)({},t),{},{title:e.props.title,favFilmsShown:e.props.favFilmsShown}))}}),Object(j.jsx)(x.a,{to:"/"})]})})}}]),i}(n.Component),ve=function(e){Object(l.a)(i,e);var t=Object(d.a)(i);function i(e){return Object(c.a)(this,i),t.call(this,e)}return Object(o.a)(i,[{key:"render",value:function(){return Object(j.jsxs)("main",{children:[Object(j.jsx)(Oe,{isFirst:!0}),Object(j.jsx)(Oe,{title:this.props.title,isFirst:!1,favFilmsShown:this.props.favFilmsShown}),"false"==localStorage.isAuthenticated&&Object(j.jsx)("div",{className:"modal",children:Object(j.jsx)("p",{children:"You can create favourite list after registration"})})]})}}]),i}(n.Component),ge=function(e){Object(l.a)(i,e);var t=Object(d.a)(i);function i(e){var n;return Object(c.a)(this,i),(n=t.call(this,e)).getTitle=function(e){document.querySelector(".fav__btn .button")&&"Hide"==document.querySelector(".fav__btn .button").innerText?n.setState({title:e,favFilmsShown:!0}):n.setState({title:e,favFilmsShown:!1})},n.registration=function(e){n.setState({isAuthenticated:e})},n.state={title:"",isAuthenticated:!1,favFilmsShown:!1},n}return Object(o.a)(i,[{key:"render",value:function(){return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(g,{handleAuth:this.registration,handleChange:this.getTitle}),Object(j.jsx)(ve,{title:this.state.title,favFilmsShown:this.state.favFilmsShown})]})}}]),i}(n.Component);s.a.render(Object(j.jsx)(m.a,{domain:"polinakaryzhska.us.auth0.com",clientId:"EQR0m5bfhRTkhN071nXZhFRYvfN86jyI",redirectUri:"http://localhost:3000/",children:Object(j.jsx)(h.a,{children:Object(j.jsx)(ge,{})})}),document.getElementById("root"))},79:function(e,t,i){},96:function(e,t,i){}},[[126,1,2]]]);
//# sourceMappingURL=main.ac36754f.chunk.js.map