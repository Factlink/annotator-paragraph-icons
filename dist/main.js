// Isolate libraries from global libraries to some degree. Uses jQuery from
// Annotator.js for now.
// TODO: Better would be to wrap everything, including the Annotator.js
// library in an iframe to get full isolation from the host page.
// See: https://github.com/Factlink/js-library/blob/825adb0548af92fc21d6f22b2deb9ec768a4a3f2/app/js/loader/loader_common.coffee
(function($, Tether) {
  var global = this;

/*! tether 0.7.0 */
!function(t,e){"function"==typeof define&&define.amd?define(e):"object"==typeof exports?module.exports=e(require,exports,module):t.Tether=e()}(this,function(t,e,o){return function(){var t,e,o,i,n,s,l,r,h,a,f,p,u,d,g,c,m,b,v,y={}.hasOwnProperty,w=[].indexOf||function(t){for(var e=0,o=this.length;o>e;e++)if(e in this&&this[e]===t)return e;return-1},C=[].slice;null==this.Tether&&(this.Tether={modules:[]}),p=function(t){var e,o,i,n,s;if(o=getComputedStyle(t).position,"fixed"===o)return t;for(i=void 0,e=t;e=e.parentNode;){try{n=getComputedStyle(e)}catch(l){}if(null==n)return e;if(/(auto|scroll)/.test(n.overflow+n.overflowY+n.overflowX)&&("absolute"!==o||"relative"===(s=n.position)||"absolute"===s||"fixed"===s))return e}return document.body},m=function(){var t;return t=0,function(){return t++}}(),v={},a=function(t){var e,i,s,l,r;if(s=t._tetherZeroElement,null==s&&(s=t.createElement("div"),s.setAttribute("data-tether-id",m()),n(s.style,{top:0,left:0,position:"absolute"}),t.body.appendChild(s),t._tetherZeroElement=s),e=s.getAttribute("data-tether-id"),null==v[e]){v[e]={},r=s.getBoundingClientRect();for(i in r)l=r[i],v[e][i]=l;o(function(){return v[e]=void 0})}return v[e]},d=null,l=function(t){var e,o,i,n,s,l,r;t===document?(o=document,t=document.documentElement):o=t.ownerDocument,i=o.documentElement,e={},r=t.getBoundingClientRect();for(n in r)l=r[n],e[n]=l;return s=a(o),e.top-=s.top,e.left-=s.left,null==e.width&&(e.width=document.body.scrollWidth-e.left-e.right),null==e.height&&(e.height=document.body.scrollHeight-e.top-e.bottom),e.top=e.top-i.clientTop,e.left=e.left-i.clientLeft,e.right=o.body.clientWidth-e.width-e.left,e.bottom=o.body.clientHeight-e.height-e.top,e},h=function(t){return t.offsetParent||document.documentElement},f=function(){var t,e,o,i,s;return t=document.createElement("div"),t.style.width="100%",t.style.height="200px",e=document.createElement("div"),n(e.style,{position:"absolute",top:0,left:0,pointerEvents:"none",visibility:"hidden",width:"200px",height:"150px",overflow:"hidden"}),e.appendChild(t),document.body.appendChild(e),i=t.offsetWidth,e.style.overflow="scroll",s=t.offsetWidth,i===s&&(s=e.clientWidth),document.body.removeChild(e),o=i-s,{width:o,height:o}},n=function(t){var e,o,i,n,s,l,r;for(null==t&&(t={}),e=[],Array.prototype.push.apply(e,arguments),r=e.slice(1),s=0,l=r.length;l>s;s++)if(i=r[s])for(o in i)y.call(i,o)&&(n=i[o],t[o]=n);return t},g=function(t,e){var o,i,n,s,l,h;if(null!=t.classList){for(l=e.split(" "),h=[],n=0,s=l.length;s>n;n++)i=l[n],i.trim()&&h.push(t.classList.remove(i));return h}return o=r(t).replace(new RegExp("(^| )"+e.split(" ").join("|")+"( |$)","gi")," "),c(t,o)},e=function(t,e){var o,i,n,s,l;if(null!=t.classList){for(s=e.split(" "),l=[],i=0,n=s.length;n>i;i++)o=s[i],o.trim()&&l.push(t.classList.add(o));return l}return g(t,e),o=r(t)+(" "+e),c(t,o)},u=function(t,e){return null!=t.classList?t.classList.contains(e):new RegExp("(^| )"+e+"( |$)","gi").test(r(t))},r=function(t){return t.className instanceof SVGAnimatedString?t.className.baseVal:t.className},c=function(t,e){return t.setAttribute("class",e)},b=function(t,o,i){var n,s,l,r,h,a;for(s=0,r=i.length;r>s;s++)n=i[s],w.call(o,n)<0&&u(t,n)&&g(t,n);for(a=[],l=0,h=o.length;h>l;l++)n=o[l],a.push(u(t,n)?void 0:e(t,n));return a},i=[],o=function(t){return i.push(t)},s=function(){var t,e;for(e=[];t=i.pop();)e.push(t());return e},t=function(){function t(){}return t.prototype.on=function(t,e,o,i){var n;return null==i&&(i=!1),null==this.bindings&&(this.bindings={}),null==(n=this.bindings)[t]&&(n[t]=[]),this.bindings[t].push({handler:e,ctx:o,once:i})},t.prototype.once=function(t,e,o){return this.on(t,e,o,!0)},t.prototype.off=function(t,e){var o,i,n;if(null!=(null!=(i=this.bindings)?i[t]:void 0)){if(null==e)return delete this.bindings[t];for(o=0,n=[];o<this.bindings[t].length;)n.push(this.bindings[t][o].handler===e?this.bindings[t].splice(o,1):o++);return n}},t.prototype.trigger=function(){var t,e,o,i,n,s,l,r,h;if(o=arguments[0],t=2<=arguments.length?C.call(arguments,1):[],null!=(l=this.bindings)?l[o]:void 0){for(n=0,h=[];n<this.bindings[o].length;)r=this.bindings[o][n],i=r.handler,e=r.ctx,s=r.once,i.apply(null!=e?e:this,t),h.push(s?this.bindings[o].splice(n,1):n++);return h}},t}(),this.Tether.Utils={getScrollParent:p,getBounds:l,getOffsetParent:h,extend:n,addClass:e,removeClass:g,hasClass:u,updateClasses:b,defer:o,flush:s,uniqueId:m,Evented:t,getScrollBarSize:f}}.call(this),function(){var t,e,o,i,n,s,l,r,h,a,f,p,u,d,g,c,m,b,v,y,w,C,O,T,x,A,E,S,W,M=[].slice,P=function(t,e){return function(){return t.apply(e,arguments)}};if(null==this.Tether)throw new Error("You must include the utils.js file before tether.js");i=this.Tether,W=i.Utils,c=W.getScrollParent,m=W.getSize,d=W.getOuterSize,p=W.getBounds,u=W.getOffsetParent,a=W.extend,n=W.addClass,O=W.removeClass,A=W.updateClasses,h=W.defer,f=W.flush,g=W.getScrollBarSize,E=function(t,e,o){return null==o&&(o=1),t+o>=e&&e>=t-o},x=function(){var t,e,o,i,n;for(t=document.createElement("div"),n=["transform","webkitTransform","OTransform","MozTransform","msTransform"],o=0,i=n.length;i>o;o++)if(e=n[o],void 0!==t.style[e])return e}(),T=[],C=function(){var t,e,o;for(e=0,o=T.length;o>e;e++)t=T[e],t.position(!1);return f()},b=function(){var t;return null!=(t="undefined"!=typeof performance&&null!==performance&&"function"==typeof performance.now?performance.now():void 0)?t:+new Date},function(){var t,e,o,i,n,s,l,r,h;for(e=null,o=null,i=null,n=function(){if(null!=o&&o>16)return o=Math.min(o-16,250),void(i=setTimeout(n,250));if(!(null!=e&&b()-e<10))return null!=i&&(clearTimeout(i),i=null),e=b(),C(),o=b()-e},r=["resize","scroll","touchmove"],h=[],s=0,l=r.length;l>s;s++)t=r[s],h.push(window.addEventListener(t,n));return h}(),t={center:"center",left:"right",right:"left"},e={middle:"middle",top:"bottom",bottom:"top"},o={top:0,left:0,middle:"50%",center:"50%",bottom:"100%",right:"100%"},r=function(o,i){var n,s;return n=o.left,s=o.top,"auto"===n&&(n=t[i.left]),"auto"===s&&(s=e[i.top]),{left:n,top:s}},l=function(t){var e,i;return{left:null!=(e=o[t.left])?e:t.left,top:null!=(i=o[t.top])?i:t.top}},s=function(){var t,e,o,i,n,s,l;for(e=1<=arguments.length?M.call(arguments,0):[],o={top:0,left:0},n=0,s=e.length;s>n;n++)l=e[n],i=l.top,t=l.left,"string"==typeof i&&(i=parseFloat(i,10)),"string"==typeof t&&(t=parseFloat(t,10)),o.top+=i,o.left+=t;return o},v=function(t,e){return"string"==typeof t.left&&-1!==t.left.indexOf("%")&&(t.left=parseFloat(t.left,10)/100*e.width),"string"==typeof t.top&&-1!==t.top.indexOf("%")&&(t.top=parseFloat(t.top,10)/100*e.height),t},y=w=function(t){var e,o,i;return i=t.split(" "),o=i[0],e=i[1],{top:o,left:e}},S=function(){function t(t){this.position=P(this.position,this);var e,o,n,s,l;for(T.push(this),this.history=[],this.setOptions(t,!1),s=i.modules,o=0,n=s.length;n>o;o++)e=s[o],null!=(l=e.initialize)&&l.call(this);this.position()}return t.modules=[],t.prototype.getClass=function(t){var e,o;return(null!=(e=this.options.classes)?e[t]:void 0)?this.options.classes[t]:(null!=(o=this.options.classes)?o[t]:void 0)!==!1?this.options.classPrefix?""+this.options.classPrefix+"-"+t:t:""},t.prototype.setOptions=function(t,e){var o,i,s,l,r,h;for(this.options=t,null==e&&(e=!0),o={offset:"0 0",targetOffset:"0 0",targetAttachment:"auto auto",classPrefix:"tether"},this.options=a(o,this.options),r=this.options,this.element=r.element,this.target=r.target,this.targetModifier=r.targetModifier,"viewport"===this.target?(this.target=document.body,this.targetModifier="visible"):"scroll-handle"===this.target&&(this.target=document.body,this.targetModifier="scroll-handle"),h=["element","target"],s=0,l=h.length;l>s;s++){if(i=h[s],null==this[i])throw new Error("Tether Error: Both element and target must be defined");null!=this[i].jquery?this[i]=this[i][0]:"string"==typeof this[i]&&(this[i]=document.querySelector(this[i]))}if(n(this.element,this.getClass("element")),n(this.target,this.getClass("target")),!this.options.attachment)throw new Error("Tether Error: You must provide an attachment");return this.targetAttachment=y(this.options.targetAttachment),this.attachment=y(this.options.attachment),this.offset=w(this.options.offset),this.targetOffset=w(this.options.targetOffset),null!=this.scrollParent&&this.disable(),"scroll-handle"===this.targetModifier?this.scrollParent=this.target:this.scrollParent=c(this.target),this.options.enabled!==!1?this.enable(e):void 0},t.prototype.getTargetBounds=function(){var t,e,o,i,n,s,l,r,h;if(null==this.targetModifier)return p(this.target);switch(this.targetModifier){case"visible":return this.target===document.body?{top:pageYOffset,left:pageXOffset,height:innerHeight,width:innerWidth}:(t=p(this.target),n={height:t.height,width:t.width,top:t.top,left:t.left},n.height=Math.min(n.height,t.height-(pageYOffset-t.top)),n.height=Math.min(n.height,t.height-(t.top+t.height-(pageYOffset+innerHeight))),n.height=Math.min(innerHeight,n.height),n.height-=2,n.width=Math.min(n.width,t.width-(pageXOffset-t.left)),n.width=Math.min(n.width,t.width-(t.left+t.width-(pageXOffset+innerWidth))),n.width=Math.min(innerWidth,n.width),n.width-=2,n.top<pageYOffset&&(n.top=pageYOffset),n.left<pageXOffset&&(n.left=pageXOffset),n);case"scroll-handle":return h=this.target,h===document.body?(h=document.documentElement,t={left:pageXOffset,top:pageYOffset,height:innerHeight,width:innerWidth}):t=p(h),r=getComputedStyle(h),o=h.scrollWidth>h.clientWidth||"scroll"===[r.overflow,r.overflowX]||this.target!==document.body,s=0,o&&(s=15),i=t.height-parseFloat(r.borderTopWidth)-parseFloat(r.borderBottomWidth)-s,n={width:15,height:.975*i*(i/h.scrollHeight),left:t.left+t.width-parseFloat(r.borderLeftWidth)-15},e=0,408>i&&this.target===document.body&&(e=-11e-5*Math.pow(i,2)-.00727*i+22.58),this.target!==document.body&&(n.height=Math.max(n.height,24)),l=this.target.scrollTop/(h.scrollHeight-i),n.top=l*(i-n.height-e)+t.top+parseFloat(r.borderTopWidth),this.target===document.body&&(n.height=Math.max(n.height,24)),n}},t.prototype.clearCache=function(){return this._cache={}},t.prototype.cache=function(t,e){return null==this._cache&&(this._cache={}),null==this._cache[t]&&(this._cache[t]=e.call(this)),this._cache[t]},t.prototype.enable=function(t){return null==t&&(t=!0),n(this.target,this.getClass("enabled")),n(this.element,this.getClass("enabled")),this.enabled=!0,this.scrollParent!==document&&this.scrollParent.addEventListener("scroll",this.position),t?this.position():void 0},t.prototype.disable=function(){return O(this.target,this.getClass("enabled")),O(this.element,this.getClass("enabled")),this.enabled=!1,null!=this.scrollParent?this.scrollParent.removeEventListener("scroll",this.position):void 0},t.prototype.destroy=function(){var t,e,o,i,n;for(this.disable(),n=[],t=o=0,i=T.length;i>o;t=++o){if(e=T[t],e===this){T.splice(t,1);break}n.push(void 0)}return n},t.prototype.updateAttachClasses=function(t,e){var o,i,n,s,l,r,a,f,p,u=this;for(null==t&&(t=this.attachment),null==e&&(e=this.targetAttachment),s=["left","top","bottom","right","middle","center"],(null!=(p=this._addAttachClasses)?p.length:void 0)&&this._addAttachClasses.splice(0,this._addAttachClasses.length),o=null!=this._addAttachClasses?this._addAttachClasses:this._addAttachClasses=[],t.top&&o.push(""+this.getClass("element-attached")+"-"+t.top),t.left&&o.push(""+this.getClass("element-attached")+"-"+t.left),e.top&&o.push(""+this.getClass("target-attached")+"-"+e.top),e.left&&o.push(""+this.getClass("target-attached")+"-"+e.left),i=[],l=0,a=s.length;a>l;l++)n=s[l],i.push(""+this.getClass("element-attached")+"-"+n);for(r=0,f=s.length;f>r;r++)n=s[r],i.push(""+this.getClass("target-attached")+"-"+n);return h(function(){return null!=u._addAttachClasses?(A(u.element,u._addAttachClasses,i),A(u.target,u._addAttachClasses,i),u._addAttachClasses=void 0):void 0})},t.prototype.position=function(t){var e,o,n,h,a,d,c,m,b,y,w,C,O,T,x,A,E,S,W,M,P,z,B,_,F,L,Y,H,X,N,j,R,U,q,k,D=this;if(null==t&&(t=!0),this.enabled){for(this.clearCache(),M=r(this.targetAttachment,this.attachment),this.updateAttachClasses(this.attachment,M),e=this.cache("element-bounds",function(){return p(D.element)}),F=e.width,n=e.height,0===F&&0===n&&null!=this.lastSize?(N=this.lastSize,F=N.width,n=N.height):this.lastSize={width:F,height:n},B=z=this.cache("target-bounds",function(){return D.getTargetBounds()}),b=v(l(this.attachment),{width:F,height:n}),P=v(l(M),B),a=v(this.offset,{width:F,height:n}),d=v(this.targetOffset,B),b=s(b,a),P=s(P,d),h=z.left+P.left-b.left,_=z.top+P.top-b.top,j=i.modules,L=0,H=j.length;H>L;L++){if(c=j[L],x=c.position.call(this,{left:h,top:_,targetAttachment:M,targetPos:z,attachment:this.attachment,elementPos:e,offset:b,targetOffset:P,manualOffset:a,manualTargetOffset:d,scrollbarSize:S}),x===!1)return!1;null!=x&&"object"==typeof x&&(_=x.top,h=x.left)}if(m={page:{top:_,left:h},viewport:{top:_-pageYOffset,bottom:pageYOffset-_-n+innerHeight,left:h-pageXOffset,right:pageXOffset-h-F+innerWidth}},document.body.scrollWidth>window.innerWidth&&(S=this.cache("scrollbar-size",g),m.viewport.bottom-=S.height),document.body.scrollHeight>window.innerHeight&&(S=this.cache("scrollbar-size",g),m.viewport.right-=S.width),(""!==(R=document.body.style.position)&&"static"!==R||""!==(U=document.body.parentElement.style.position)&&"static"!==U)&&(m.page.bottom=document.body.scrollHeight-_-n,m.page.right=document.body.scrollWidth-h-F),(null!=(q=this.options.optimizations)?q.moveElement:void 0)!==!1&&null==this.targetModifier){for(w=this.cache("target-offsetparent",function(){return u(D.target)}),T=this.cache("target-offsetparent-bounds",function(){return p(w)}),O=getComputedStyle(w),o=getComputedStyle(this.element),C=T,y={},k=["Top","Left","Bottom","Right"],Y=0,X=k.length;X>Y;Y++)W=k[Y],y[W.toLowerCase()]=parseFloat(O["border"+W+"Width"]);T.right=document.body.scrollWidth-T.left-C.width+y.right,T.bottom=document.body.scrollHeight-T.top-C.height+y.bottom,m.page.top>=T.top+y.top&&m.page.bottom>=T.bottom&&m.page.left>=T.left+y.left&&m.page.right>=T.right&&(E=w.scrollTop,A=w.scrollLeft,m.offset={top:m.page.top-T.top+E-y.top,left:m.page.left-T.left+A-y.left})}return this.move(m),this.history.unshift(m),this.history.length>3&&this.history.pop(),t&&f(),!0}},t.prototype.move=function(t){var e,o,i,n,s,l,r,f,p,d,g,c,m,b,v,y,w,C=this;if(null!=this.element.parentNode){f={};for(d in t){f[d]={};for(n in t[d]){for(i=!1,y=this.history,b=0,v=y.length;v>b;b++)if(r=y[b],!E(null!=(w=r[d])?w[n]:void 0,t[d][n])){i=!0;break}i||(f[d][n]=!0)}}e={top:"",left:"",right:"",bottom:""},p=function(t,o){var i,n,s;return(null!=(s=C.options.optimizations)?s.gpu:void 0)===!1?(t.top?e.top=""+o.top+"px":e.bottom=""+o.bottom+"px",t.left?e.left=""+o.left+"px":e.right=""+o.right+"px"):(t.top?(e.top=0,n=o.top):(e.bottom=0,n=-o.bottom),t.left?(e.left=0,i=o.left):(e.right=0,i=-o.right),e[x]="translateX("+Math.round(i)+"px) translateY("+Math.round(n)+"px)","msTransform"!==x?e[x]+=" translateZ(0)":void 0)},s=!1,(f.page.top||f.page.bottom)&&(f.page.left||f.page.right)?(e.position="absolute",p(f.page,t.page)):(f.viewport.top||f.viewport.bottom)&&(f.viewport.left||f.viewport.right)?(e.position="fixed",p(f.viewport,t.viewport)):null!=f.offset&&f.offset.top&&f.offset.left?(e.position="absolute",l=this.cache("target-offsetparent",function(){return u(C.target)}),u(this.element)!==l&&h(function(){return C.element.parentNode.removeChild(C.element),l.appendChild(C.element)}),p(f.offset,t.offset),s=!0):(e.position="absolute",p({top:!0,left:!0},t.page)),s||"BODY"===this.element.parentNode.tagName||(this.element.parentNode.removeChild(this.element),document.body.appendChild(this.element)),m={},c=!1;for(n in e)g=e[n],o=this.element.style[n],""===o||""===g||"top"!==n&&"left"!==n&&"bottom"!==n&&"right"!==n||(o=parseFloat(o),g=parseFloat(g)),o!==g&&(c=!0,m[n]=e[n]);return c?h(function(){return a(C.element.style,m)}):void 0}},t}(),i.position=C,this.Tether=a(S,i)}.call(this),function(){var t,e,o,i,n,s,l,r,h,a,f=[].indexOf||function(t){for(var e=0,o=this.length;o>e;e++)if(e in this&&this[e]===t)return e;return-1};a=this.Tether.Utils,l=a.getOuterSize,s=a.getBounds,r=a.getSize,i=a.extend,h=a.updateClasses,o=a.defer,e={left:"right",right:"left",top:"bottom",bottom:"top",middle:"middle"},t=["left","top","right","bottom"],n=function(e,o){var i,n,l,r,h,a,f;if("scrollParent"===o?o=e.scrollParent:"window"===o&&(o=[pageXOffset,pageYOffset,innerWidth+pageXOffset,innerHeight+pageYOffset]),o===document&&(o=o.documentElement),null!=o.nodeType)for(n=r=s(o),h=getComputedStyle(o),o=[n.left,n.top,r.width+n.left,r.height+n.top],i=a=0,f=t.length;f>a;i=++a)l=t[i],l=l[0].toUpperCase()+l.substr(1),"Top"===l||"Left"===l?o[i]+=parseFloat(h["border"+l+"Width"]):o[i]-=parseFloat(h["border"+l+"Width"]);return o},this.Tether.modules.push({position:function(e){var l,r,a,p,u,d,g,c,m,b,v,y,w,C,O,T,x,A,E,S,W,M,P,z,B,_,F,L,Y,H,X,N,j,R,U,q,k,D,Z,V,$,G,I,J,K,Q,tt,et=this;if(_=e.top,v=e.left,W=e.targetAttachment,!this.options.constraints)return!0;for(A=function(e){var o,i,n,s;for(et.removeClass(e),s=[],i=0,n=t.length;n>i;i++)o=t[i],s.push(et.removeClass(""+e+"-"+o));return s},V=this.cache("element-bounds",function(){return s(et.element)}),b=V.height,F=V.width,0===F&&0===b&&null!=this.lastSize&&($=this.lastSize,F=$.width,b=$.height),P=this.cache("target-bounds",function(){return et.getTargetBounds()}),M=P.height,z=P.width,S={},m={},r=[this.getClass("pinned"),this.getClass("out-of-bounds")],G=this.options.constraints,L=0,N=G.length;N>L;L++)c=G[L],c.outOfBoundsClass&&r.push(c.outOfBoundsClass),c.pinnedClass&&r.push(c.pinnedClass);for(Y=0,j=r.length;j>Y;Y++)for(g=r[Y],I=["left","top","right","bottom"],H=0,R=I.length;R>H;H++)E=I[H],r.push(""+g+"-"+E);for(l=[],S=i({},W),m=i({},this.attachment),J=this.options.constraints,X=0,U=J.length;U>X;X++){if(c=J[X],B=c.to,a=c.attachment,O=c.pin,null==a&&(a=""),f.call(a," ")>=0?(K=a.split(" "),d=K[0],u=K[1]):u=d=a,p=n(this,B),("target"===d||"both"===d)&&(_<p[1]&&"top"===S.top&&(_+=M,S.top="bottom"),_+b>p[3]&&"bottom"===S.top&&(_-=M,S.top="top")),"together"===d&&(_<p[1]&&"top"===S.top&&("bottom"===m.top?(_+=M,S.top="bottom",_+=b,m.top="top"):"top"===m.top&&(_+=M,S.top="bottom",_-=b,m.top="bottom")),_+b>p[3]&&"bottom"===S.top&&("top"===m.top?(_-=M,S.top="top",_-=b,m.top="bottom"):"bottom"===m.top&&(_-=M,S.top="top",_+=b,m.top="top")),"middle"===S.top&&(_+b>p[3]&&"top"===m.top?(_-=b,m.top="bottom"):_<p[1]&&"bottom"===m.top&&(_+=b,m.top="top"))),("target"===u||"both"===u)&&(v<p[0]&&"left"===S.left&&(v+=z,S.left="right"),v+F>p[2]&&"right"===S.left&&(v-=z,S.left="left")),"together"===u&&(v<p[0]&&"left"===S.left?"right"===m.left?(v+=z,S.left="right",v+=F,m.left="left"):"left"===m.left&&(v+=z,S.left="right",v-=F,m.left="right"):v+F>p[2]&&"right"===S.left?"left"===m.left?(v-=z,S.left="left",v-=F,m.left="right"):"right"===m.left&&(v-=z,S.left="left",v+=F,m.left="left"):"center"===S.left&&(v+F>p[2]&&"left"===m.left?(v-=F,m.left="right"):v<p[0]&&"right"===m.left&&(v+=F,m.left="left"))),("element"===d||"both"===d)&&(_<p[1]&&"bottom"===m.top&&(_+=b,m.top="top"),_+b>p[3]&&"top"===m.top&&(_-=b,m.top="bottom")),("element"===u||"both"===u)&&(v<p[0]&&"right"===m.left&&(v+=F,m.left="left"),v+F>p[2]&&"left"===m.left&&(v-=F,m.left="right")),"string"==typeof O?O=function(){var t,e,o,i;for(o=O.split(","),i=[],e=0,t=o.length;t>e;e++)C=o[e],i.push(C.trim());return i}():O===!0&&(O=["top","left","right","bottom"]),O||(O=[]),T=[],y=[],_<p[1]&&(f.call(O,"top")>=0?(_=p[1],T.push("top")):y.push("top")),_+b>p[3]&&(f.call(O,"bottom")>=0?(_=p[3]-b,T.push("bottom")):y.push("bottom")),v<p[0]&&(f.call(O,"left")>=0?(v=p[0],T.push("left")):y.push("left")),v+F>p[2]&&(f.call(O,"right")>=0?(v=p[2]-F,T.push("right")):y.push("right")),T.length)for(x=null!=(Q=this.options.pinnedClass)?Q:this.getClass("pinned"),l.push(x),D=0,q=T.length;q>D;D++)E=T[D],l.push(""+x+"-"+E);if(y.length)for(w=null!=(tt=this.options.outOfBoundsClass)?tt:this.getClass("out-of-bounds"),l.push(w),Z=0,k=y.length;k>Z;Z++)E=y[Z],l.push(""+w+"-"+E);(f.call(T,"left")>=0||f.call(T,"right")>=0)&&(m.left=S.left=!1),(f.call(T,"top")>=0||f.call(T,"bottom")>=0)&&(m.top=S.top=!1),(S.top!==W.top||S.left!==W.left||m.top!==this.attachment.top||m.left!==this.attachment.left)&&this.updateAttachClasses(m,S)}return o(function(){return h(et.target,l,r),h(et.element,l,r)}),{top:_,left:v}}})}.call(this),function(){var t,e,o,i;i=this.Tether.Utils,e=i.getBounds,o=i.updateClasses,t=i.defer,this.Tether.modules.push({position:function(i){var n,s,l,r,h,a,f,p,u,d,g,c,m,b,v,y,w,C,O,T,x,A,E,S,W,M=this;if(g=i.top,a=i.left,x=this.cache("element-bounds",function(){return e(M.element)}),h=x.height,c=x.width,d=this.getTargetBounds(),r=g+h,f=a+c,n=[],g<=d.bottom&&r>=d.top)for(A=["left","right"],m=0,w=A.length;w>m;m++)p=A[m],((E=d[p])===a||E===f)&&n.push(p);if(a<=d.right&&f>=d.left)for(S=["top","bottom"],b=0,C=S.length;C>b;b++)p=S[b],((W=d[p])===g||W===r)&&n.push(p);for(l=[],s=[],u=["left","top","right","bottom"],l.push(this.getClass("abutted")),v=0,O=u.length;O>v;v++)p=u[v],l.push(""+this.getClass("abutted")+"-"+p);for(n.length&&s.push(this.getClass("abutted")),y=0,T=n.length;T>y;y++)p=n[y],s.push(""+this.getClass("abutted")+"-"+p);return t(function(){return o(M.target,s,l),o(M.element,s,l)}),!0}})}.call(this),function(){this.Tether.modules.push({position:function(t){var e,o,i,n,s,l,r;return l=t.top,e=t.left,this.options.shift?(o=function(t){return"function"==typeof t?t.call(this,{top:l,left:e}):t},i=o(this.options.shift),"string"==typeof i?(i=i.split(" "),i[1]||(i[1]=i[0]),s=i[0],n=i[1],s=parseFloat(s,10),n=parseFloat(n,10)):(r=[i.top,i.left],s=r[0],n=r[1]),l+=s,e+=n,{top:l,left:e}):void 0}})}.call(this),this.Tether});
(function() {
  global.AttentionSpan = (function() {
    function AttentionSpan(options) {
      var base, base1;
      this.options = options != null ? options : {};
      this._has_attention = false;
      if ((base = this.options).wait_for_attention == null) {
        base.wait_for_attention = 0;
      }
      if ((base1 = this.options).wait_for_neglection == null) {
        base1.wait_for_neglection = 0;
      }
    }

    AttentionSpan.prototype.gainAttention = function() {
      this.clearTimeout('losing_attention_timeout_handler');
      return this.gaining_attention_timeout_handler != null ? this.gaining_attention_timeout_handler : this.gaining_attention_timeout_handler = setTimeout((function(_this) {
        return function() {
          return _this.gainAttentionNow();
        };
      })(this), this.options.wait_for_attention);
    };

    AttentionSpan.prototype.loseAttention = function() {
      this.clearTimeout('gaining_attention_timeout_handler');
      return this.losing_attention_timeout_handler != null ? this.losing_attention_timeout_handler : this.losing_attention_timeout_handler = setTimeout((function(_this) {
        return function() {
          return _this.loseAttentionNow();
        };
      })(this), this.options.wait_for_neglection);
    };

    AttentionSpan.prototype.has_attention = function() {
      return this._has_attention;
    };

    AttentionSpan.prototype.loseAttentionNow = function() {
      var base;
      this.clearTimeout('gaining_attention_timeout_handler');
      this.clearTimeout('losing_attention_timeout_handler');
      this._has_attention = false;
      return typeof (base = this.options).onAttentionLost === "function" ? base.onAttentionLost() : void 0;
    };

    AttentionSpan.prototype.gainAttentionNow = function() {
      var base;
      this.clearTimeout('gaining_attention_timeout_handler');
      this.clearTimeout('losing_attention_timeout_handler');
      this._has_attention = true;
      return typeof (base = this.options).onAttentionGained === "function" ? base.onAttentionGained() : void 0;
    };

    AttentionSpan.prototype.clearTimeout = function(name) {
      clearTimeout(this[name]);
      return delete this[name];
    };

    AttentionSpan.prototype.destroy = function() {
      this.clearTimeout('gaining_attention_timeout_handler');
      return this.clearTimeout('losing_attention_timeout_handler');
    };

    return AttentionSpan;

  })();

}).call(this);

(function() {
  var mouse_touch_drag_events;

  global.$factlinkCoreContainer = $("<factlink-core-container></factlink-core-container>");

  $('body').append(global.$factlinkCoreContainer);

  mouse_touch_drag_events = "mouseup mousedown click mouseenter mouseleave mousemove mouseout mouseover dblclick\nshow contextmenu\ndrag dragstart dragenter dragover dragleave dragend drop\ntouchstart touchmove touchleave touchenter touchend touchcancel";

  global.$factlinkCoreContainer.on(mouse_touch_drag_events, function(event) {
    return event.stopPropagation();
  });

}).call(this);

(function() {
  var IconButton, hostATag, hrefToHost,
    bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

  hostATag = document.createElement('a');

  hrefToHost = function(href) {
    hostATag.href = href;
    return hostATag.host;
  };

  IconButton = (function() {
    function IconButton(options) {
      this._targetElement = options.targetElement;
      this._targetOffset = options.targetOffset;
      this.$el = $("<factlink-icon-button>\n  <factlink-icon-button-bubble>\n    " + options.content + "\n    <factlink-icon-button-bubble-triangle></factlink-icon-button-bubble-triangle>\n  </factlink-icon-button-bubble>\n</factlink-icon-button>");
      global.$factlinkCoreContainer.append(this.$el);
      this._setStyles();
      this._robustHover = new global.RobustHover({
        $el: this.$el,
        mouseenter: options.onmouseenter,
        mouseleave: options.onmouseleave
      });
      this.$el.on('click', options.onclick);
      this._tether = new global.Tether(this._tether_options());
    }

    IconButton.prototype.resetOffset = function(targetOffset) {
      if (targetOffset === this._targetOffset) {
        return;
      }
      this._targetOffset = targetOffset;
      return this._tether.setOptions(this._tether_options());
    };

    IconButton.prototype._tether_options = function() {
      return {
        element: this.$el[0],
        target: this._targetElement,
        attachment: 'top left',
        targetAttachment: 'top right',
        classPrefix: 'factlink-tether',
        targetOffset: this._targetOffset || '0 0'
      };
    };

    IconButton.prototype.destroy = function() {
      this._tether.destroy();
      this._robustHover.destroy();
      return this.$el.remove();
    };

    IconButton.prototype.fadeIn = function() {
      return this.$el.addClass('factlink-control-visible');
    };

    IconButton.prototype.fadeOut = function() {
      return this.$el.removeClass('factlink-control-visible');
    };

    IconButton.prototype._setStyles = function() {
      var b, g, r, style, targetBrightness, targetColor, targetRGB;
      style = window.getComputedStyle(this._targetElement);
      targetColor = style.color;
      targetRGB = targetColor.match(/^rgba?\((\d+),\s*(\d+),\s*(\d+)(,\s*\d+(\.\d+)?)?\)$/);
      r = targetRGB[1] / 255;
      g = targetRGB[2] / 255;
      b = targetRGB[3] / 255;
      targetBrightness = 0.2126 * r * r + 0.7152 * g * g + 0.0722 * b * b;
      this.$el.css({
        'line-height': style.lineHeight,
        'font-size': style.fontSize,
        'font-family': style.fontFamily
      });
      this.$el.find('factlink-icon-button-bubble').css({
        'background-color': targetColor,
        'color': targetBrightness > 0.5 ? 'black' : 'white',
        'font-size': Math.max(12, Math.min(16, Math.round(0.8 * parseInt(style.fontSize))))
      });
      this.$el.find('factlink-icon-button-bubble-triangle').css({
        'border-top-color': targetColor
      });
      return this.$el.css(this._siteSpecificStyles());
    };

    IconButton.prototype._siteSpecificStyles = function() {
      switch (hrefToHost(window.location.href)) {
        case 'medium.com':
          return {
            'margin-left': '2em'
          };
        default:
          return {};
      }
    };

    return IconButton;

  })();

  global.ParagraphIconButtonContainer = (function() {
    function ParagraphIconButtonContainer(paragraphElement, onClick) {
      this._onHideAllParagraphButtons = bind(this._onHideAllParagraphButtons, this);
      this._showOnlyThisParagraphButton = bind(this._showOnlyThisParagraphButton, this);
      this.$paragraph = $(paragraphElement);
      this._iconButton = new IconButton({
        content: '+',
        targetElement: this.$paragraph[0],
        onmouseenter: (function(_this) {
          return function() {
            var ref;
            return (ref = _this._attentionSpan) != null ? ref.gainAttention() : void 0;
          };
        })(this),
        onmouseleave: (function(_this) {
          return function() {
            var ref;
            return (ref = _this._attentionSpan) != null ? ref.loseAttention() : void 0;
          };
        })(this),
        onclick: onClick
      });
      this._attentionSpan = new global.AttentionSpan({
        wait_for_neglection: 500,
        onAttentionGained: (function(_this) {
          return function() {
            return _this._iconButton.fadeIn();
          };
        })(this),
        onAttentionLost: (function(_this) {
          return function() {
            return _this._iconButton.fadeOut();
          };
        })(this)
      });
      this._robustParagraphHover = new global.RobustHover({
        $el: this.$paragraph,
        mouseenter: this._showOnlyThisParagraphButton,
        mouseleave: (function(_this) {
          return function() {
            return _this._attentionSpan.loseAttention();
          };
        })(this)
      });
      $(document).on('hideAllParagraphButtons', this._onHideAllParagraphButtons);
    }

    ParagraphIconButtonContainer.prototype._showOnlyThisParagraphButton = function() {
      $(document).trigger('hideAllParagraphButtons');
      return this._attentionSpan.gainAttention();
    };

    ParagraphIconButtonContainer.prototype._onHideAllParagraphButtons = function() {
      return this._attentionSpan.loseAttentionNow();
    };

    ParagraphIconButtonContainer.prototype.destroy = function() {
      var ref, ref1;
      this._iconButton.destroy();
      if ((ref = this._attentionSpan) != null) {
        ref.destroy();
      }
      return (ref1 = this._robustParagraphHover) != null ? ref1.destroy() : void 0;
    };

    return ParagraphIconButtonContainer;

  })();

}).call(this);

(function() {
  $.fn.distinctDescendants = function() {
    var $parents, elements;
    $parents = [];
    $(this).parentsUntil(function() {
      var $parent, isParentAlready;
      $parent = $(this);
      isParentAlready = $parent.data('$.fn.distinctDescendants.isParent');
      $parent.data('$.fn.distinctDescendants.isParent', true);
      $parents.push($parent);
      return isParentAlready;
    });
    elements = $(this).filter(function() {
      return !$(this).data('$.fn.distinctDescendants.isParent');
    });
    $parents.forEach(function($parent) {
      return $parent.removeData('$.fn.distinctDescendants.isParent');
    });
    return $(elements);
  };

}).call(this);

(function() {
  global.ParagraphButtons = (function() {
    function ParagraphButtons(_onClick) {
      this._onClick = _onClick;
    }

    ParagraphButtons.prototype._paragraphHasContent = function(el) {
      var $clonedEl, textLength;
      $clonedEl = $(el).clone();
      $clonedEl.find('a').remove();
      textLength = $clonedEl.text().trim().replace(/\s\s+/g, ' ').length;
      $clonedEl.remove();
      return textLength >= 50;
    };

    ParagraphButtons.prototype._addParagraphButton = function(el) {
      if (!this._paragraphHasContent(el)) {
        return;
      }
      return new global.ParagraphIconButtonContainer(el, (function(_this) {
        return function() {
          return _this._onClick(el);
        };
      })(this));
    };

    ParagraphButtons.prototype._addParagraphButtonsBatch = function(elements) {
      var el, elementsLeft, i, len, ref;
      ref = elements.slice(0, 10);
      for (i = 0, len = ref.length; i < len; i++) {
        el = ref[i];
        this._addParagraphButton(el);
      }
      elementsLeft = elements.slice(10);
      if (elementsLeft.length > 0) {
        return setTimeout(((function(_this) {
          return function() {
            return _this._addParagraphButtonsBatch(elementsLeft);
          };
        })(this)), 200);
      }
    };

    ParagraphButtons.prototype._paragraphSelectors = function() {
      return ['p', 'li', 'dd', 'dt', '.paragraph', '.para', '.par', '.text', '.summary'];
    };

    ParagraphButtons.prototype._prefixedParagraphSelectors = function(prefix) {
      var i, len, ref, results, selector;
      ref = this._paragraphSelectors();
      results = [];
      for (i = 0, len = ref.length; i < len; i++) {
        selector = ref[i];
        results.push(prefix + ' ' + selector);
      }
      return results;
    };

    ParagraphButtons.prototype._defaultSelector = function() {
      return this._paragraphSelectors().join(',');
    };

    ParagraphButtons.prototype._articleContainerSelector = function() {
      var $element, i, len, selector, selectors;
      selectors = ['article', 'div.article', 'div.story', 'div.single-post', 'div.post', 'div#bodyContent', 'div#content', 'div.content', 'div#main', 'div.main', 'div#page', 'div.page', 'div#site', 'div.site'];
      for (i = 0, len = selectors.length; i < len; i++) {
        selector = selectors[i];
        $element = $(selector);
        if ($element.length === 1 && $element.is(':visible')) {
          return this._prefixedParagraphSelectors(selector).join(',');
        }
      }
      return null;
    };

    ParagraphButtons.prototype._paragraphElements = function() {
      var selector;
      selector = this._articleContainerSelector() || this._defaultSelector();
      console.info('Paragraph selector:', selector);
      return $(selector).distinctDescendants().filter(':visible');
    };

    ParagraphButtons.prototype.addParagraphButtons = function() {
      return this._addParagraphButtonsBatch(this._paragraphElements());
    };

    return ParagraphButtons;

  })();

}).call(this);

(function() {
  window.paragraphUi = function() {
    return {
      start: function(app) {
        var paragraphButtons;
        paragraphButtons = new global.ParagraphButtons(function(el) {
          return app.runHook('createFromParagraph', [el]);
        });
        return paragraphButtons.addParagraphButtons();
      }
    };
  };

}).call(this);

(function() {
  var bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

  global.RobustHover = (function() {
    function RobustHover(_options) {
      this._options = _options;
      this._onMouseLeave = bind(this._onMouseLeave, this);
      this._onMouseEnter = bind(this._onMouseEnter, this);
      this._hovered = false;
      this._options.$el.on('mousemove', this._onMouseEnter);
      this._options.$el.on('mouseleave', this._onMouseLeave);
    }

    RobustHover.prototype.destroy = function() {
      var ref;
      this._options.$el.off('mousemove', this._onMouseEnter);
      this._options.$el.off('mouseleave', this._onMouseLeave);
      return (ref = this._options.$externalDocument) != null ? ref.off('mousemove', this._onMouseLeave) : void 0;
    };

    RobustHover.prototype._onMouseEnter = function() {
      var base, ref;
      if (this._hovered) {
        return;
      }
      if ((ref = this._options.$externalDocument) != null) {
        ref.on('mousemove', this._onMouseLeave);
      }
      this._hovered = true;
      return typeof (base = this._options).mouseenter === "function" ? base.mouseenter() : void 0;
    };

    RobustHover.prototype._onMouseLeave = function() {
      var base, ref;
      if (!this._hovered) {
        return;
      }
      if ((ref = this._options.$externalDocument) != null) {
        ref.off('mousemove', this._onMouseLeave);
      }
      this._hovered = false;
      return typeof (base = this._options).mouseleave === "function" ? base.mouseleave() : void 0;
    };

    return RobustHover;

  })();

}).call(this);

}).call({}, annotator.util.$);
