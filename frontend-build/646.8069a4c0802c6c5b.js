"use strict";(self.webpackChunksocial_media=self.webpackChunksocial_media||[]).push([[646],{7646:(U,l,s)=>{s.r(l),s.d(l,{ProfileModule:()=>C});var i=s(6895),r=s(8184),c=s(7579),u=s(9300),p=s(2722),f=s(4004),d=s(5698),t=s(8256),m=s(2480),h=s(5610);function v(o,n){if(1&o&&(t.ynx(0),t._UZ(1,"app-post-card",1),t.BQk()),2&o){const e=n.$implicit;t.xp6(1),t.Q6J("postData",e)}}const g=[{path:"**",component:(()=>{class o{constructor(e,a,y){this.activatedRoute=e,this.dataService=a,this.router=y,this.userData={username:"",data:{followingList:[],followerList:[],posts:[]}},this.unsubscribe$=new c.x}ngOnInit(){this.getUserData(),this.router.events.pipe((0,u.h)(e=>e instanceof r.m2),(0,p.R)(this.unsubscribe$)).subscribe(e=>{this.getUserData()})}ngOnDestroy(){this.unsubscribe$.next(),this.unsubscribe$.complete()}getUserData(){this.dataService.getUser(this.activatedRoute.snapshot.url[0].path).pipe((0,f.U)(e=>this.userData=e),(0,d.q)(1)).subscribe({next(e){},error(e){},complete(){}})}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(r.gz),t.Y36(m.D),t.Y36(r.F0))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-profile"]],decls:4,vars:4,consts:[[4,"ngFor","ngForOf"],[3,"postData"]],template:function(e,a){1&e&&(t.YNc(0,v,2,1,"ng-container",0),t.TgZ(1,"pre"),t._uU(2),t.ALo(3,"json"),t.qZA()),2&e&&(t.Q6J("ngForOf",a.userData.data.posts),t.xp6(2),t.Oqu(t.lcZ(3,2,a.userData)))},dependencies:[i.sg,h.i,i.Ts]}),o})()}];let P=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[r.Bz.forChild(g),r.Bz]}),o})();var D=s(9820);let C=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[i.ez,P,D.u]}),o})()}}]);