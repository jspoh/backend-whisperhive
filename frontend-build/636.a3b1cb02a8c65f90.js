"use strict";(self.webpackChunksocial_media=self.webpackChunksocial_media||[]).push([[636],{9636:(He,k,a)=>{a.r(k),a.d(k,{ProfileModule:()=>M});var p=a(6895),x=a(8551),G=a(1135),q=a(7579),F=a(2722),W=a(9300),K=a(4004),I=a(5698),e=a(8274),Z=a(2480),X=a(5610),U=a(8077);function ee(i,s){if(1&i){const t=e.EpF();e.TgZ(0,"div",17),e.NdJ("click",function(){e.CHM(t);const o=e.oxw(2);return e.KtG(o.onFollowAction(!0))}),e._UZ(1,"i",23),e.qZA()}}function te(i,s){if(1&i){const t=e.EpF();e.TgZ(0,"div",17,16),e.NdJ("click",function(){e.CHM(t);const o=e.oxw(2);return e.KtG(o.onFollowAction(!1))}),e._UZ(2,"i",24),e.qZA()}}function ie(i,s){if(1&i){const t=e.EpF();e.TgZ(0,"div",4)(1,"div",5),e._UZ(2,"img",6)(3,"img",7),e.qZA(),e.TgZ(4,"div",8)(5,"p",9),e._uU(6),e.qZA(),e.TgZ(7,"p",10),e._uU(8),e.qZA()(),e.TgZ(9,"div",11)(10,"p",12),e.NdJ("click",function(){e.CHM(t);const o=e.oxw();return e.KtG(o.onWhispersClicked())}),e._uU(11),e.qZA(),e.TgZ(12,"p",13),e._uU(13),e.qZA(),e.TgZ(14,"p",13),e._uU(15),e.qZA()(),e.TgZ(16,"div",14),e.YNc(17,ee,2,0,"div",15),e.YNc(18,te,3,0,"ng-template",null,16,e.W1O),e.TgZ(20,"div",17),e.NdJ("click",function(){e.CHM(t);const o=e.oxw();return e.KtG(o.onMessage())}),e._UZ(21,"i",18),e.qZA(),e.TgZ(22,"div",17),e.NdJ("click",function(){e.CHM(t);const o=e.oxw();return e.KtG(o.onOptions())}),e._UZ(23,"i",19),e.qZA()(),e.TgZ(24,"div",20),e._UZ(25,"i",21),e._uU(26," 04 October 2000 "),e.qZA(),e.TgZ(27,"div",22),e._uU(28," Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos neque voluptate debitis animi et dolor, earum amet quo excepturi aspernatur beatae laboriosam ad commodi eligendi minus voluptatibus itaque sequi quidem iusto reiciendis? Rem fugiat molestias debitis assumenda dicta perspiciatis placeat possimus voluptate at doloremque ipsa illum, magni ullam minima soluta. "),e.qZA()()}if(2&i){const t=e.MAs(19),n=e.oxw();e.xp6(6),e.hij("@",n.userData.username,""),e.xp6(2),e.Oqu(n.userData.name),e.xp6(3),e.AsE(" ",n.userData.data.posts.length," ",1===n.userData.data.posts.length?"Whisper":"Whispers"," "),e.xp6(2),e.hij(" ",n.userData.data.followerList.length," Followers "),e.xp6(2),e.hij(" ",n.userData.data.followingList.length," Following "),e.xp6(2),e.Q6J("ngIf",!n.userData.following)("ngIfElse",t)}}function ne(i,s){1&i&&e._uU(0,"mdCard")}function se(i,s){1&i&&e._uU(0,"smCard")}class O{constructor(s,t,n){this.router=s,this.userService=t,this.dataService=n,this.userData={username:"",name:"",following:null,data:{currentUser:"",followingList:[],followerList:[],posts:[]}},this.cardSize="lg",this.whispersClicked=new e.vpe,this.unsubscribe$=new q.x}ngOnInit(){}ngOnDestroy(){this.unsubscribe$.next(),this.unsubscribe$.complete()}onFollowAction(s){this.userService.userIsLoggedIn$.getValue()?this.dataService.followAction({currentUser:this.userData.data.currentUser,viewingUser:this.userData.username,follow:s}).pipe((0,I.q)(1)).subscribe({next:n=>{this.userData.following=!this.userData.following},error:n=>{}}):this.userService.onUserNotLoggedInAction()}onMessage(){this.userService.userIsLoggedIn$.getValue()||this.userService.onUserNotLoggedInAction()}onOptions(){this.userService.userIsLoggedIn$.getValue()||this.userService.onUserNotLoggedInAction()}onWhispersClicked(){this.whispersClicked.emit()}}O.\u0275fac=function(s){return new(s||O)(e.Y36(x.F0),e.Y36(U.K),e.Y36(Z.D))},O.\u0275cmp=e.Xpm({type:O,selectors:[["app-profile-card"]],inputs:{userData:"userData",cardSize:"cardSize"},outputs:{whispersClicked:"whispersClicked"},decls:7,vars:1,consts:[[3,"ngTemplateOutlet"],["lgCard",""],["mdCard",""],["smCard",""],[1,"bg-slate-200","rounded-2xl","shadow-2xl","relative"],[1,"flex","flex-col","items-center","relative","h-[24rem]"],["src","https://t3.ftcdn.net/jpg/02/48/42/64/360_F_248426448_NVKLywWqArG2ADUxDq6QprtIzsF82dMF.jpg","alt","cover photo",1,"w-full","h-60","object-cover"],["src","https://image.kpopmap.com/2019/02/IU-LILAC.jpg","alt","",1,"rounded-full","w-52","h-52","absolute","top-28","shadow-2xl"],[1,"text-lg","mx-auto","w-max","-mt-12"],[1,"text-center","font-bold"],[1,"text-center","font-semibold"],[1,"flex","justify-between","my-8","w-1/2","mx-auto","text-lg"],[1,"h-8","cursor-pointer",3,"click"],[1,"h-8","cursor-pointer"],[1,"absolute","right-20","top-72","flex","gap-4"],["class","border rounded-full border-black w-10 h-10 flex justify-center items-center cursor-pointer hover:bg-slate-300 transition-colors",3,"click",4,"ngIf","ngIfElse"],["unfollowBtn",""],[1,"border","rounded-full","border-black","w-10","h-10","flex","justify-center","items-center","cursor-pointer","hover:bg-slate-300","transition-colors",3,"click"],[1,"fa-solid","fa-comment"],[1,"fa-solid","fa-ellipsis"],[1,"absolute","top-[18.875rem]","left-20"],[1,"fa-solid","fa-cake-candles"],[1,"py-8","px-16","-mt-12"],[1,"fa-solid","fa-user-plus"],[1,"fa-solid","fa-user-minus"]],template:function(s,t){if(1&s&&(e.GkF(0,0),e.YNc(1,ie,29,8,"ng-template",null,1,e.W1O),e.YNc(3,ne,1,0,"ng-template",null,2,e.W1O),e.YNc(5,se,1,0,"ng-template",null,3,e.W1O)),2&s){const n=e.MAs(2);e.Q6J("ngTemplateOutlet",n)}},dependencies:[p.O5,p.tP]});var E=a(433);function J(i,s,t,n,o,r,l){try{var u=i[r](l),c=u.value}catch(g){return void t(g)}u.done?s(c):Promise.resolve(c).then(n,o)}function Y(i){return function(){var s=this,t=arguments;return new Promise(function(n,o){var r=i.apply(s,t);function l(c){J(r,n,o,l,u,"next",c)}function u(c){J(r,n,o,l,u,"throw",c)}l(void 0)})}}const A={toolbar:[["bold","italic","underline","strike"],["blockquote","code-block"],[{header:1},{header:2}],[{list:"ordered"},{list:"bullet"}],[{script:"sub"},{script:"super"}],[{indent:"-1"},{indent:"+1"}],[{direction:"rtl"}],[{size:["small",!1,"large","huge"]}],[{header:[1,2,3,4,5,6,!1]}],[{color:[]},{background:[]}],[{font:[]}],[{align:[]}],["clean"],["link","image","video"]]},N=new e.OlP("config",{providedIn:"root",factory:()=>({modules:A})});var D=a(1481),oe=a(9770),R=a(9751),v=a(576);function re(i){return!!i&&(i instanceof R.y||(0,v.m)(i.lift)&&(0,v.m)(i.subscribe))}var le=a(6805),ae=a(930);function ue(i,s){const t="object"==typeof s;return new Promise((n,o)=>{const r=new ae.Hp({next:l=>{n(l),r.unsubscribe()},error:o,complete:()=>{t?n(s.defaultValue):o(new le.K)}});i.subscribe(r)})}var ce=a(727),de=a(8421),V=a(5577),he=a(1144),fe=a(3268);const me=["addListener","removeListener"],pe=["addEventListener","removeEventListener"],ge=["on","off"];function S(i,s,t,n){if((0,v.m)(t)&&(n=t,t=void 0),n)return S(i,s,t).pipe((0,fe.Z)(n));const[o,r]=function be(i){return(0,v.m)(i.addEventListener)&&(0,v.m)(i.removeEventListener)}(i)?pe.map(l=>u=>i[l](s,u,t)):function ve(i){return(0,v.m)(i.addListener)&&(0,v.m)(i.removeListener)}(i)?me.map(H(i,s)):function Ce(i){return(0,v.m)(i.on)&&(0,v.m)(i.off)}(i)?ge.map(H(i,s)):[];if(!o&&(0,he.z)(i))return(0,V.z)(l=>S(l,s,t))((0,de.Xf)(i));if(!o)throw new TypeError("Invalid event target");return new R.y(l=>{const u=(...c)=>l.next(1<c.length?c:c[0]);return o(u),()=>r(u)})}function H(i,s){return t=>n=>i[t](s,n)}var ye=a(6063);class xe extends q.x{constructor(s=1/0,t=1/0,n=ye.l){super(),this._bufferSize=s,this._windowTime=t,this._timestampProvider=n,this._buffer=[],this._infiniteTimeWindow=!0,this._infiniteTimeWindow=t===1/0,this._bufferSize=Math.max(1,s),this._windowTime=Math.max(1,t)}next(s){const{isStopped:t,_buffer:n,_infiniteTimeWindow:o,_timestampProvider:r,_windowTime:l}=this;t||(n.push(s),!o&&n.push(r.now()+l)),this._trimBuffer(),super.next(s)}_subscribe(s){this._throwIfClosed(),this._trimBuffer();const t=this._innerSubscribe(s),{_infiniteTimeWindow:n,_buffer:o}=this,r=o.slice();for(let l=0;l<r.length&&!s.closed;l+=n?1:2)s.next(r[l]);return this._checkFinalizedStatuses(s),t}_trimBuffer(){const{_bufferSize:s,_timestampProvider:t,_buffer:n,_infiniteTimeWindow:o}=this,r=(o?1:2)*s;if(s<1/0&&r<n.length&&n.splice(0,n.length-r),!o){const l=t.now();let u=0;for(let c=1;c<n.length&&n[c]<=l;c+=2)u=c;u&&n.splice(0,u+1)}}}var Ee=a(3099),j=a(7146);function _e(i,s){1&i&&e._UZ(0,"div",2)}function Te(i,s){1&i&&e._UZ(0,"pre",2)}function Me(i,s){if(1&i&&(e.ynx(0),e.YNc(1,_e,1,0,"div",1),e.YNc(2,Te,1,0,"pre",1),e.BQk()),2&i){const t=e.oxw();e.xp6(1),e.Q6J("ngIf",!t.preserve),e.xp6(1),e.Q6J("ngIf",t.preserve)}}function qe(i,s){1&i&&e._UZ(0,"div",2)}function Oe(i,s){1&i&&e._UZ(0,"pre",2)}function Se(i,s){if(1&i&&(e.ynx(0),e.YNc(1,qe,1,0,"div",1),e.YNc(2,Oe,1,0,"pre",1),e.BQk()),2&i){const t=e.oxw();e.xp6(1),e.Q6J("ngIf",!t.preserve),e.xp6(1),e.Q6J("ngIf",t.preserve)}}const Pe=[[["","quill-editor-toolbar",""]]],Le=["[quill-editor-toolbar]"];function Qe(i,s){1&i&&e._UZ(0,"div",1)}function De(i,s){1&i&&e._UZ(0,"pre",1)}const P=(i,s)=>i||s||"html";let z=(()=>{class i{constructor(t,n){var o=this;this.config=n,this.quill$=(0,oe.P)(Y(function*(){if(!o.Quill){const r=o.document.addEventListener;o.document.addEventListener=o.document.__zone_symbol__addEventListener||o.document.addEventListener;const l=yield a.e(971).then(a.t.bind(a,9971,19));o.document.addEventListener=r,o.Quill=l.default?l.default:l}return o.config.customOptions?.forEach(r=>{const l=o.Quill.import(r.import);l.whitelist=r.whitelist,o.Quill.register(l,!0,o.config.suppressGlobalRegisterWarning)}),yield o.registerCustomModules(o.Quill,o.config.customModules,o.config.suppressGlobalRegisterWarning)})).pipe(function we(i,s,t){let n,o=!1;return i&&"object"==typeof i?({bufferSize:n=1/0,windowTime:s=1/0,refCount:o=!1,scheduler:t}=i):n=i??1/0,(0,Ee.B)({connector:()=>new xe(n,s,t),resetOnError:!0,resetOnComplete:!1,resetOnRefCountZero:o})}({bufferSize:1,refCount:!0})),this.document=t.get(p.K0),this.config||(this.config={modules:A})}getQuill(){return this.quill$}registerCustomModules(t,n,o){return Y(function*(){if(Array.isArray(n))for(let{implementation:r,path:l}of n)re(r)&&(r=yield ue(r)),t.register(l,r,o);return t})()}}return i.\u0275fac=function(t){return new(t||i)(e.LFG(e.zs3),e.LFG(N,8))},i.\u0275prov=e.Yz7({token:i,factory:i.\u0275fac,providedIn:"root"}),i})(),ze=(()=>{class i{constructor(t,n,o,r,l,u,c,g){this.elementRef=n,this.cd=o,this.domSanitizer=r,this.platformId=l,this.renderer=u,this.zone=c,this.service=g,this.required=!1,this.customToolbarPosition="top",this.styles=null,this.strict=!0,this.customOptions=[],this.customModules=[],this.preserveWhitespace=!1,this.trimOnValidation=!1,this.compareValues=!1,this.filterNull=!1,this.defaultEmptyValue=null,this.onEditorCreated=new e.vpe,this.onEditorChanged=new e.vpe,this.onContentChanged=new e.vpe,this.onSelectionChanged=new e.vpe,this.onFocus=new e.vpe,this.onBlur=new e.vpe,this.disabled=!1,this.preserve=!1,this.toolbarPosition="top",this.subscription=null,this.quillSubscription=null,this.valueGetter=(f,d)=>{let h=d.querySelector(".ql-editor").innerHTML;("<p><br></p>"===h||"<div><br></div>"===h)&&(h=this.defaultEmptyValue);let m=h;const C=P(this.format,this.service.config.format);if("text"===C)m=f.getText();else if("object"===C)m=f.getContents();else if("json"===C)try{m=JSON.stringify(f.getContents())}catch{m=f.getText()}return m},this.valueSetter=(f,d)=>{const h=P(this.format,this.service.config.format);if("html"===h)return([!0,!1].includes(this.sanitize)?this.sanitize:this.service.config.sanitize||!1)&&(d=this.domSanitizer.sanitize(e.q3G.HTML,d)),f.clipboard.convert(d);if("json"===h)try{return JSON.parse(d)}catch{return[{insert:d}]}return d},this.selectionChangeHandler=(f,d,h)=>{const m=!f&&!!this.onModelTouched;!this.onBlur.observed&&!this.onFocus.observed&&!this.onSelectionChanged.observed&&!m||this.zone.run(()=>{null===f?this.onBlur.emit({editor:this.quillEditor,source:h}):null===d&&this.onFocus.emit({editor:this.quillEditor,source:h}),this.onSelectionChanged.emit({editor:this.quillEditor,oldRange:d,range:f,source:h}),m&&this.onModelTouched(),this.cd.markForCheck()})},this.textChangeHandler=(f,d,h)=>{const m=this.quillEditor.getText(),C=this.quillEditor.getContents();let b=this.editorElem.querySelector(".ql-editor").innerHTML;("<p><br></p>"===b||"<div><br></div>"===b)&&(b=this.defaultEmptyValue);const y=this.trackChanges||this.service.config.trackChanges,B=("user"===h||y&&"all"===y)&&!!this.onModelChange;!this.onContentChanged.observed&&!B||this.zone.run(()=>{B&&this.onModelChange(this.valueGetter(this.quillEditor,this.editorElem)),this.onContentChanged.emit({content:C,delta:f,editor:this.quillEditor,html:b,oldDelta:d,source:h,text:m}),this.cd.markForCheck()})},this.editorChangeHandler=(f,d,h,m)=>{if(this.onEditorChanged.observed)if("text-change"===f){const C=this.quillEditor.getText(),b=this.quillEditor.getContents();let y=this.editorElem.querySelector(".ql-editor").innerHTML;("<p><br></p>"===y||"<div><br></div>"===y)&&(y=this.defaultEmptyValue),this.zone.run(()=>{this.onEditorChanged.emit({content:b,delta:d,editor:this.quillEditor,event:f,html:y,oldDelta:h,source:m,text:C}),this.cd.markForCheck()})}else this.zone.run(()=>{this.onEditorChanged.emit({editor:this.quillEditor,event:f,oldRange:h,range:d,source:m}),this.cd.markForCheck()})},this.document=t.get(p.K0)}static normalizeClassNames(t){return t.trim().split(" ").reduce((o,r)=>{const l=r.trim();return l&&o.push(l),o},[])}ngOnInit(){this.preserve=this.preserveWhitespace,this.toolbarPosition=this.customToolbarPosition}ngAfterViewInit(){(0,p.PM)(this.platformId)||(this.quillSubscription=this.service.getQuill().pipe((0,V.z)(t=>{const n=[this.service.registerCustomModules(t,this.customModules)],o=this.beforeRender??this.service.config.beforeRender;return o&&n.push(o()),Promise.all(n).then(()=>t)})).subscribe(t=>{this.editorElem=this.elementRef.nativeElement.querySelector("[quill-editor-element]");const n=this.elementRef.nativeElement.querySelector("[quill-editor-toolbar]"),o=Object.assign({},this.modules||this.service.config.modules);n?o.toolbar=n:void 0===o.toolbar&&(o.toolbar=A.toolbar);let r=void 0!==this.placeholder?this.placeholder:this.service.config.placeholder;void 0===r&&(r="Insert text here ..."),this.styles&&Object.keys(this.styles).forEach(h=>{this.renderer.setStyle(this.editorElem,h,this.styles[h])}),this.classes&&this.addClasses(this.classes),this.customOptions.forEach(h=>{const m=t.import(h.import);m.whitelist=h.whitelist,t.register(m,!0)});let l=this.bounds&&"self"===this.bounds?this.editorElem:this.bounds;l||(l=this.service.config.bounds?this.service.config.bounds:this.document.body);let u=this.debug;!u&&!1!==u&&this.service.config.debug&&(u=this.service.config.debug);let c=this.readOnly;!c&&!1!==this.readOnly&&(c=void 0!==this.service.config.readOnly&&this.service.config.readOnly);let g=this.defaultEmptyValue;this.service.config.hasOwnProperty("defaultEmptyValue")&&(g=this.service.config.defaultEmptyValue);let f=this.scrollingContainer;!f&&null!==this.scrollingContainer&&(f=null===this.service.config.scrollingContainer||this.service.config.scrollingContainer?this.service.config.scrollingContainer:null);let d=this.formats;if(!d&&void 0===d&&(d=this.service.config.formats?[...this.service.config.formats]:null===this.service.config.formats?null:void 0),this.zone.runOutsideAngular(()=>{if(this.quillEditor=new t(this.editorElem,{bounds:l,debug:u,formats:d,modules:o,placeholder:r,readOnly:c,defaultEmptyValue:g,scrollingContainer:f,strict:this.strict,theme:this.theme||(this.service.config.theme?this.service.config.theme:"snow")}),this.linkPlaceholder){const m=this.quillEditor?.theme?.tooltip?.root?.querySelector("input[data-link]");m?.dataset&&(m.dataset.link=this.linkPlaceholder)}}),this.content){if("text"===P(this.format,this.service.config.format))this.quillEditor.setText(this.content,"silent");else{const m=this.valueSetter(this.quillEditor,this.content);this.quillEditor.setContents(m,"silent")}this.quillEditor.getModule("history").clear()}this.setDisabledState(),this.addQuillEventListeners(),(this.onEditorCreated.observed||this.onValidatorChanged)&&requestAnimationFrame(()=>{this.onValidatorChanged&&this.onValidatorChanged(),this.onEditorCreated.emit(this.quillEditor),this.onEditorCreated.complete()})}))}ngOnDestroy(){this.dispose(),this.quillSubscription?.unsubscribe(),this.quillSubscription=null}ngOnChanges(t){if(this.quillEditor){if(t.readOnly&&this.quillEditor.enable(!t.readOnly.currentValue),t.placeholder&&(this.quillEditor.root.dataset.placeholder=t.placeholder.currentValue),t.defaultEmptyValue&&(this.quillEditor.root.dataset.defaultEmptyValue=t.defaultEmptyValue.currentValue),t.styles){const n=t.styles.currentValue,o=t.styles.previousValue;o&&Object.keys(o).forEach(r=>{this.renderer.removeStyle(this.editorElem,r)}),n&&Object.keys(n).forEach(r=>{this.renderer.setStyle(this.editorElem,r,this.styles[r])})}if(t.classes){const n=t.classes.currentValue,o=t.classes.previousValue;o&&this.removeClasses(o),n&&this.addClasses(n)}t.debounceTime&&this.addQuillEventListeners()}}addClasses(t){i.normalizeClassNames(t).forEach(n=>{this.renderer.addClass(this.editorElem,n)})}removeClasses(t){i.normalizeClassNames(t).forEach(n=>{this.renderer.removeClass(this.editorElem,n)})}writeValue(t){if(this.filterNull&&null===t||(this.content=t,!this.quillEditor))return;const n=P(this.format,this.service.config.format),o=this.valueSetter(this.quillEditor,t);if(this.compareValues){const r=this.quillEditor.getContents();if(JSON.stringify(r)===JSON.stringify(o))return}t?"text"===n?this.quillEditor.setText(t):this.quillEditor.setContents(o):this.quillEditor.setText("")}setDisabledState(t=this.disabled){this.disabled=t,this.quillEditor&&(t?(this.quillEditor.disable(),this.renderer.setAttribute(this.elementRef.nativeElement,"disabled","disabled")):(this.readOnly||this.quillEditor.enable(),this.renderer.removeAttribute(this.elementRef.nativeElement,"disabled")))}registerOnChange(t){this.onModelChange=t}registerOnTouched(t){this.onModelTouched=t}registerOnValidatorChange(t){this.onValidatorChanged=t}validate(){if(!this.quillEditor)return null;const t={};let n=!0;const o=this.quillEditor.getText(),r=this.trimOnValidation?o.trim().length:1===o.length&&0===o.trim().length?0:o.length-1,l=this.quillEditor.getContents().ops,u=l&&1===l.length&&["\n",""].includes(l[0].insert);return this.minLength&&r&&r<this.minLength&&(t.minLengthError={given:r,minLength:this.minLength},n=!1),this.maxLength&&r>this.maxLength&&(t.maxLengthError={given:r,maxLength:this.maxLength},n=!1),this.required&&!r&&u&&(t.requiredError={empty:!0},n=!1),n?null:t}addQuillEventListeners(){this.dispose(),this.zone.runOutsideAngular(()=>{this.subscription=new ce.w0,this.subscription.add(S(this.quillEditor,"selection-change").subscribe(([o,r,l])=>{this.selectionChangeHandler(o,r,l)}));let t=S(this.quillEditor,"text-change"),n=S(this.quillEditor,"editor-change");"number"==typeof this.debounceTime&&(t=t.pipe((0,j.b)(this.debounceTime)),n=n.pipe((0,j.b)(this.debounceTime))),this.subscription.add(t.subscribe(([o,r,l])=>{this.textChangeHandler(o,r,l)})),this.subscription.add(n.subscribe(([o,r,l,u])=>{this.editorChangeHandler(o,r,l,u)}))})}dispose(){null!==this.subscription&&(this.subscription.unsubscribe(),this.subscription=null)}}return i.\u0275fac=function(t){return new(t||i)(e.Y36(e.zs3),e.Y36(e.SBq),e.Y36(e.sBO),e.Y36(D.H7),e.Y36(e.Lbi),e.Y36(e.Qsj),e.Y36(e.R0b),e.Y36(z))},i.\u0275dir=e.lG2({type:i,inputs:{format:"format",theme:"theme",modules:"modules",debug:"debug",readOnly:"readOnly",placeholder:"placeholder",maxLength:"maxLength",minLength:"minLength",required:"required",formats:"formats",customToolbarPosition:"customToolbarPosition",sanitize:"sanitize",beforeRender:"beforeRender",styles:"styles",strict:"strict",scrollingContainer:"scrollingContainer",bounds:"bounds",customOptions:"customOptions",customModules:"customModules",trackChanges:"trackChanges",preserveWhitespace:"preserveWhitespace",classes:"classes",trimOnValidation:"trimOnValidation",linkPlaceholder:"linkPlaceholder",compareValues:"compareValues",filterNull:"filterNull",debounceTime:"debounceTime",defaultEmptyValue:"defaultEmptyValue",valueGetter:"valueGetter",valueSetter:"valueSetter"},outputs:{onEditorCreated:"onEditorCreated",onEditorChanged:"onEditorChanged",onContentChanged:"onContentChanged",onSelectionChanged:"onSelectionChanged",onFocus:"onFocus",onBlur:"onBlur"},features:[e.TTD]}),i})(),$=(()=>{class i extends ze{constructor(t,n,o,r,l,u,c,g){super(t,n,o,r,l,u,c,g)}}return i.\u0275fac=function(t){return new(t||i)(e.Y36(e.zs3),e.Y36(e.SBq),e.Y36(e.sBO),e.Y36(D.H7),e.Y36(e.Lbi),e.Y36(e.Qsj),e.Y36(e.R0b),e.Y36(z))},i.\u0275cmp=e.Xpm({type:i,selectors:[["quill-editor"]],standalone:!0,features:[e._Bn([{multi:!0,provide:E.JU,useExisting:(0,e.Gpc)(()=>i)},{multi:!0,provide:E.Cf,useExisting:(0,e.Gpc)(()=>i)}]),e.qOj,e.jDz],ngContentSelectors:Le,decls:3,vars:2,consts:[[4,"ngIf"],["quill-editor-element","",4,"ngIf"],["quill-editor-element",""]],template:function(t,n){1&t&&(e.F$t(Pe),e.YNc(0,Me,3,2,"ng-container",0),e.Hsn(1),e.YNc(2,Se,3,2,"ng-container",0)),2&t&&(e.Q6J("ngIf","top"!==n.toolbarPosition),e.xp6(2),e.Q6J("ngIf","top"===n.toolbarPosition))},dependencies:[p.ez,p.O5],styles:["[_nghost-%COMP%]{display:inline-block}"]}),i})(),Ie=(()=>{class i{constructor(t,n){this.sanitizer=t,this.service=n,this.content="",this.innerHTML="",this.themeClass="ql-snow"}ngOnChanges(t){if(t.theme?this.themeClass=`ql-${t.theme.currentValue||(this.service.config.theme?this.service.config.theme:"snow")} ngx-quill-view-html`:this.theme||(this.themeClass=`ql-${this.service.config.theme?this.service.config.theme:"snow"} ngx-quill-view-html`),t.content){const n=t.content.currentValue,o=[!0,!1].includes(this.sanitize)?this.sanitize:this.service.config.sanitize||!1;this.innerHTML=o?n:this.sanitizer.bypassSecurityTrustHtml(n)}}}return i.\u0275fac=function(t){return new(t||i)(e.Y36(D.H7),e.Y36(z))},i.\u0275cmp=e.Xpm({type:i,selectors:[["quill-view-html"]],inputs:{content:"content",theme:"theme",sanitize:"sanitize"},standalone:!0,features:[e.TTD,e.jDz],decls:2,vars:2,consts:[[1,"ql-container",3,"ngClass"],[1,"ql-editor",3,"innerHTML"]],template:function(t,n){1&t&&(e.TgZ(0,"div",0),e._UZ(1,"div",1),e.qZA()),2&t&&(e.Q6J("ngClass",n.themeClass),e.xp6(1),e.Q6J("innerHTML",n.innerHTML,e.oJD))},dependencies:[p.ez,p.mk],styles:[".ql-container.ngx-quill-view-html{border:0}\n"],encapsulation:2}),i})(),Ze=(()=>{class i{constructor(t,n,o,r,l,u){this.elementRef=t,this.renderer=n,this.zone=o,this.service=r,this.domSanitizer=l,this.platformId=u,this.strict=!0,this.customModules=[],this.customOptions=[],this.preserveWhitespace=!1,this.onEditorCreated=new e.vpe,this.preserve=!1,this.quillSubscription=null,this.valueSetter=(c,g)=>{const f=P(this.format,this.service.config.format);let d=g;if("text"===f)c.setText(d);else{if("html"===f)([!0,!1].includes(this.sanitize)?this.sanitize:this.service.config.sanitize||!1)&&(g=this.domSanitizer.sanitize(e.q3G.HTML,g)),d=c.clipboard.convert(g);else if("json"===f)try{d=JSON.parse(g)}catch{d=[{insert:g}]}c.setContents(d)}}}ngOnInit(){this.preserve=this.preserveWhitespace}ngOnChanges(t){this.quillEditor&&t.content&&this.valueSetter(this.quillEditor,t.content.currentValue)}ngAfterViewInit(){(0,p.PM)(this.platformId)||(this.quillSubscription=this.service.getQuill().pipe((0,V.z)(t=>{const n=[this.service.registerCustomModules(t,this.customModules)],o=this.beforeRender??this.service.config.beforeRender;return o&&n.push(o()),Promise.all(n).then(()=>t)})).subscribe(t=>{const n=Object.assign({},this.modules||this.service.config.modules);n.toolbar=!1,this.customOptions.forEach(u=>{const c=t.import(u.import);c.whitelist=u.whitelist,t.register(c,!0)});let o=this.debug;!o&&!1!==o&&this.service.config.debug&&(o=this.service.config.debug);let r=this.formats;!r&&void 0===r&&(r=this.service.config.formats?Object.assign({},this.service.config.formats):null===this.service.config.formats?null:void 0);const l=this.theme||(this.service.config.theme?this.service.config.theme:"snow");this.editorElem=this.elementRef.nativeElement.querySelector("[quill-view-element]"),this.zone.runOutsideAngular(()=>{this.quillEditor=new t(this.editorElem,{debug:o,formats:r,modules:n,readOnly:!0,strict:this.strict,theme:l})}),this.renderer.addClass(this.editorElem,"ngx-quill-view"),this.content&&this.valueSetter(this.quillEditor,this.content),this.onEditorCreated.observers.length&&requestAnimationFrame(()=>{this.onEditorCreated.emit(this.quillEditor),this.onEditorCreated.complete()})}))}ngOnDestroy(){this.quillSubscription?.unsubscribe(),this.quillSubscription=null}}return i.\u0275fac=function(t){return new(t||i)(e.Y36(e.SBq),e.Y36(e.Qsj),e.Y36(e.R0b),e.Y36(z),e.Y36(D.H7),e.Y36(e.Lbi))},i.\u0275cmp=e.Xpm({type:i,selectors:[["quill-view"]],inputs:{format:"format",theme:"theme",modules:"modules",debug:"debug",formats:"formats",sanitize:"sanitize",beforeRender:"beforeRender",strict:"strict",content:"content",customModules:"customModules",customOptions:"customOptions",preserveWhitespace:"preserveWhitespace"},outputs:{onEditorCreated:"onEditorCreated"},standalone:!0,features:[e.TTD,e.jDz],decls:2,vars:2,consts:[["quill-view-element","",4,"ngIf"],["quill-view-element",""]],template:function(t,n){1&t&&(e.YNc(0,Qe,1,0,"div",0),e.YNc(1,De,1,0,"pre",0)),2&t&&(e.Q6J("ngIf",!n.preserve),e.xp6(1),e.Q6J("ngIf",n.preserve))},dependencies:[p.ez,p.O5],styles:[".ql-container.ngx-quill-view{border:0}\n"],encapsulation:2}),i})(),Ae=(()=>{class i{static forRoot(t){return{ngModule:i,providers:[{provide:N,useValue:t}]}}}return i.\u0275fac=function(t){return new(t||i)},i.\u0275mod=e.oAB({type:i}),i.\u0275inj=e.cJS({imports:[$,Ze,Ie]}),i})();const Ve=function(i){return{"!cursor-not-allowed":i}};class L{constructor(s,t){this.userService=s,this.dataService=t,this.displayUser="",this.updateData$=new q.x,this.htmlText="",this.stayAnon=!0,this.quillStyle={background:"rgb(241,245,249)","border-width":"0px 0px 0px 0px","font-size":"16px"},this.quillFormats=["bold","code","italic","strike","script","underline","indent","list","align","direction","code-block","formula"],this.quillConfig={toolbar:{container:[["bold","italic","underline","strike"],[{list:"ordered"},{list:"bullet"}],["code-block"]]}}}ngOnInit(){}onContextMenu(s){}onPaste(s){}onDragAndDrop(s){s.preventDefault()}onPost(){const s={anon:this.stayAnon,comment:!1,comment_on:null,content:this.htmlText,from:this.userService.username$.getValue()?this.userService.username$.getValue():null,to:this.displayUser};this.dataService.createPost(s).pipe((0,I.q)(1)).subscribe({next:t=>this.updateData$.next()}),this.htmlText=""}onAnonToggle(){this.userService.userIsLoggedIn$.getValue()||alert("Please log in to disable anonymity")}}L.\u0275fac=function(s){return new(s||L)(e.Y36(U.K),e.Y36(Z.D))},L.\u0275cmp=e.Xpm({type:L,selectors:[["app-create-post"]],hostBindings:function(s,t){1&s&&e.NdJ("drop",function(o){return t.onDragAndDrop(o)})},inputs:{displayUser:"displayUser",updateData$:"updateData$"},decls:16,vars:14,consts:[[1,"bg-slate-200","rounded-2xl","w-full","relative","shadow-2xl",3,"contextmenu"],[1,"w-full","h-max","overflow-hidden","rounded-2xl","bg-slate-100"],["placeholder","Tell me something anonymously.. or not",1,"w-full","bg-slate-200",3,"ngModel","styles","modules","formats","sanitize","ngModelChange","paste"],[1,"absolute","top-1","right-2","flex","justify-between","items-center","gap-4","overflow-hidden"],[1,"flex","gap-2"],[1,"relative","flex","cursor-pointer","items-center",3,"ngClass","click"],["type","checkbox","checked","",1,"hidden",3,"disabled","ngModel","ngModelChange"],[1,"relative","h-5","w-10","flex-shrink-0","rounded-full","bg-gray-300","toggle-bg"],[1,"toggle-btn","z-1","absolute","inset-y-0","right-0","left-0","top-0","flex","h-max","w-max","items-center","justify-center","rounded-full","transition-all"],[1,"h-5","w-5","rounded-full","bg-blue-500"],[1,"ml-3","text-gray-700"],[1,"bg-slate-900","hover:bg-slate-800","focus:bg-slate-900","text-white","hover:scale-105","transition-all","font-medium","py-1","px-4","rounded-full","w-24","border","border-black",3,"click"]],template:function(s,t){1&s&&(e.TgZ(0,"div",0),e.NdJ("contextmenu",function(o){return t.onContextMenu(o)}),e.TgZ(1,"div",1)(2,"quill-editor",2),e.NdJ("ngModelChange",function(o){return t.htmlText=o})("paste",function(o){return t.onPaste(o)}),e.qZA()(),e.TgZ(3,"div",3)(4,"div",4)(5,"label",5),e.NdJ("click",function(){return t.onAnonToggle()}),e.ALo(6,"async"),e.TgZ(7,"input",6),e.NdJ("ngModelChange",function(o){return t.stayAnon=o}),e.ALo(8,"async"),e.qZA(),e.TgZ(9,"div",7)(10,"div",8),e._UZ(11,"div",9),e.qZA()(),e.TgZ(12,"span",10),e._uU(13,"Stay anonymous"),e.qZA()()(),e.TgZ(14,"button",11),e.NdJ("click",function(){return t.onPost()}),e._uU(15," Post "),e.qZA()()()),2&s&&(e.xp6(2),e.Q6J("ngModel",t.htmlText)("styles",t.quillStyle)("modules",t.quillConfig)("formats",t.quillFormats)("sanitize",!0),e.xp6(3),e.Q6J("ngClass",e.VKq(12,Ve,!e.lcZ(6,8,t.userService.userIsLoggedIn$))),e.xp6(2),e.Q6J("disabled",!e.lcZ(8,10,t.userService.userIsLoggedIn$))("ngModel",t.stayAnon))},dependencies:[p.mk,E.Wl,E.JJ,E.On,$,p.Ov],styles:["input[_ngcontent-%COMP%]:checked + div[_ngcontent-%COMP%] > .toggle-btn[_ngcontent-%COMP%]{left:calc(100% - 20px)}input[_ngcontent-%COMP%]:checked + div.toggle-bg[_ngcontent-%COMP%]{--tw-bg-opacity: 1;background-color:rgb(147 197 253 / var(--tw-bg-opacity))}"]});const ke=["posts"],Fe=function(i){return{"mb-16":i}};function Ue(i,s){if(1&i&&(e.TgZ(0,"div",6,7),e._UZ(2,"app-post-card",8),e.qZA()),2&i){const t=s.$implicit,n=s.index,o=e.oxw().ngIf;e.Q6J("ngClass",e.VKq(2,Fe,n===o.data.posts.length-1)),e.xp6(2),e.Q6J("postData",t)}}function Je(i,s){1&i&&(e.ynx(0),e.TgZ(1,"div",9),e._uU(2,"No whispers yet!"),e.qZA(),e.BQk())}function Ye(i,s){if(1&i){const t=e.EpF();e.ynx(0),e.TgZ(1,"div",1)(2,"app-profile-card",2),e.NdJ("whispersClicked",function(){e.CHM(t);const o=e.oxw();return e.KtG(o.scrollToPosts())}),e.qZA(),e.TgZ(3,"div",3),e._UZ(4,"app-create-post",4),e.qZA(),e.YNc(5,Ue,3,4,"div",5),e.YNc(6,Je,3,0,"ng-container",0),e.qZA(),e.BQk()}if(2&i){const t=s.ngIf,n=e.oxw();e.xp6(2),e.Q6J("userData",t)("cardSize","lg"),e.xp6(2),e.Q6J("displayUser",t.username)("updateData$",n.updateData$),e.xp6(1),e.Q6J("ngForOf",t.data.posts),e.xp6(1),e.Q6J("ngIf",0===t.data.posts.length)}}class Q{constructor(s,t,n){this.activatedRoute=s,this.dataService=t,this.router=n,this.userData$=new G.X({username:"",name:"",following:null,data:{currentUser:"",followingList:[],followerList:[],posts:[]}}),this.updateData$=new q.x,this.unsubscribe$=new q.x,this.postsToRetrieveOnInit=5,this.postsToRetrieve=5}ngOnInit(){this.getUserData(this.postsToRetrieveOnInit),this.updateData$.pipe((0,F.R)(this.unsubscribe$)).subscribe(()=>{this.getUserData(this.postsToRetrieve)}),this.router.events.pipe((0,W.h)(s=>s instanceof x.m2),(0,F.R)(this.unsubscribe$)).subscribe(()=>{this.getUserData(this.postsToRetrieveOnInit)})}ngOnDestroy(){this.unsubscribe$.next(),this.unsubscribe$.complete()}getUserData(s){this.dataService.getUser(this.activatedRoute.snapshot.url[0].path,s).pipe((0,K.U)(t=>this.userData$.next(t)),(0,I.q)(1)).subscribe({next(t){},error(t){},complete(){}})}scrollToPosts(){console.log(this.posts),this.posts?.get(0)?.nativeElement.scrollIntoView({behavior:"smooth",block:"start"})}onScroll(s){Math.ceil(window.scrollY)===document.documentElement.scrollHeight-window.innerHeight&&(this.postsToRetrieve+=this.postsToRetrieveOnInit,this.updateData$.next())}}Q.\u0275fac=function(s){return new(s||Q)(e.Y36(x.gz),e.Y36(Z.D),e.Y36(x.F0))},Q.\u0275cmp=e.Xpm({type:Q,selectors:[["app-profile"]],viewQuery:function(s,t){if(1&s&&e.Gf(ke,5),2&s){let n;e.iGM(n=e.CRH())&&(t.posts=n)}},hostBindings:function(s,t){1&s&&e.NdJ("scroll",function(o){return t.onScroll(o)},!1,e.Jf7)},decls:2,vars:3,consts:[[4,"ngIf"],[1,"flex","flex-col","items-center"],[1,"max-w-5/6","w-[48rem]","block","shadow-2xl","mb-8",3,"userData","cardSize","whispersClicked"],[1,"shadow-2xl","w-[48rem]","mb-8"],[3,"displayUser","updateData$"],["class","mb-8 shadow-2xl max-w-5/6 w-[48rem] block scroll-mt-20",3,"ngClass",4,"ngFor","ngForOf"],[1,"mb-8","shadow-2xl","max-w-5/6","w-[48rem]","block","scroll-mt-20",3,"ngClass"],["posts",""],[3,"postData"],[1,"text-2xl","mt-12"]],template:function(s,t){1&s&&(e.YNc(0,Ye,7,6,"ng-container",0),e.ALo(1,"async")),2&s&&e.Q6J("ngIf",e.lcZ(1,1,t.userData$))},dependencies:[p.mk,p.sg,p.O5,X.i,O,L,p.Ov]});const Ne=[{path:"**",component:Q}];class w{}w.\u0275fac=function(s){return new(s||w)},w.\u0275mod=e.oAB({type:w}),w.\u0275inj=e.cJS({imports:[x.Bz.forChild(Ne),x.Bz]});var Re=a(1340);class _{}_.\u0275fac=function(s){return new(s||_)},_.\u0275mod=e.oAB({type:_}),_.\u0275inj=e.cJS({imports:[p.ez]});class T{}T.\u0275fac=function(s){return new(s||T)},T.\u0275mod=e.oAB({type:T}),T.\u0275inj=e.cJS({imports:[p.ez,E.u5,Ae.forRoot()]});class M{}M.\u0275fac=function(s){return new(s||M)},M.\u0275mod=e.oAB({type:M}),M.\u0275inj=e.cJS({imports:[p.ez,w,Re.u,_,T]})}}]);