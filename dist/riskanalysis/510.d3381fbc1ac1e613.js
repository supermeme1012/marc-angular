"use strict";(self.webpackChunkriskanalysis=self.webpackChunkriskanalysis||[]).push([[510],{3179:(j,d,s)=>{s.r(d),s.d(d,{AuthUnlockSessionModule:()=>Q});var c=s(2510),g=s(4859),l=s(9549),f=s(7392),p=s(4144),h=s(1572),v=s(6236),x=s(7775),y=s(4466),a=s(4006),Z=s(8288),e=s(4650),U=s(8951),A=s(7495),k=s(2494),w=s(6895);const S=["unlockSessionNgForm"];function T(t,i){if(1&t&&(e.TgZ(0,"fuse-alert",40),e._uU(1),e.qZA()),2&t){const o=e.oxw();e.Q6J("appearance","outline")("showIcon",!1)("type",o.alert.type)("@shake","error"===o.alert.type),e.xp6(1),e.hij(" ",o.alert.message," ")}}function b(t,i){1&t&&e._UZ(0,"mat-icon",41),2&t&&e.Q6J("svgIcon","heroicons_solid:eye")}function C(t,i){1&t&&e._UZ(0,"mat-icon",41),2&t&&e.Q6J("svgIcon","heroicons_solid:eye-off")}function F(t,i){1&t&&(e.TgZ(0,"span"),e._uU(1," Unlock your session "),e.qZA())}function I(t,i){1&t&&e._UZ(0,"mat-progress-spinner",42),2&t&&e.Q6J("diameter",24)("mode","indeterminate")}const J=function(){return["/sign-out"]},N=[{path:"",component:(()=>{class t{constructor(o,n,r,u,m){this._activatedRoute=o,this._authService=n,this._formBuilder=r,this._router=u,this._userService=m,this.alert={type:"success",message:""},this.showAlert=!1}ngOnInit(){this._userService.user$.subscribe(o=>{this.name=o.name,this._email=o.email}),this.unlockSessionForm=this._formBuilder.group({name:[{value:this.name,disabled:!0}],password:["",a.kI.required]})}unlock(){this.unlockSessionForm.invalid||(this.unlockSessionForm.disable(),this.showAlert=!1,this._authService.unlockSession({email:this._email??"",password:this.unlockSessionForm.get("password").value}).subscribe(()=>{const o=this._activatedRoute.snapshot.queryParamMap.get("redirectURL")||"/signed-in-redirect";this._router.navigateByUrl(o)},o=>{this.unlockSessionForm.enable(),this.unlockSessionNgForm.resetForm({name:{value:this.name,disabled:!0}}),this.alert={type:"error",message:"Invalid password"},this.showAlert=!0}))}}return t.\u0275fac=function(o){return new(o||t)(e.Y36(c.gz),e.Y36(U.e),e.Y36(a.QS),e.Y36(c.F0),e.Y36(A.K))},t.\u0275cmp=e.Xpm({type:t,selectors:[["auth-unlock-session"]],viewQuery:function(o,n){if(1&o&&e.Gf(S,5),2&o){let r;e.iGM(r=e.CRH())&&(n.unlockSessionNgForm=r.first)}},decls:60,vars:13,consts:[[1,"flex","flex-col","sm:flex-row","items-center","md:items-start","sm:justify-center","md:justify-start","flex-auto","min-w-0"],[1,"md:flex","md:items-center","md:justify-end","w-full","sm:w-auto","md:h-full","md:w-1/2","py-8","px-4","sm:p-12","md:p-16","sm:rounded-2xl","md:rounded-none","sm:shadow","md:shadow-none","sm:bg-card"],[1,"w-full","max-w-80","sm:w-80","mx-auto","sm:mx-0"],[1,"w-12"],["src","assets/images/logo/logo.svg"],[1,"mt-8","text-4xl","font-extrabold","tracking-tight","leading-tight"],[1,"mt-0.5","font-medium"],["class","mt-8 -mb-4",3,"appearance","showIcon","type",4,"ngIf"],[1,"mt-8",3,"formGroup"],["unlockSessionNgForm","ngForm"],[1,"w-full"],["id","name","matInput","",3,"formControlName"],["id","password","matInput","","type","password",3,"formControlName"],["passwordField",""],["mat-icon-button","","type","button","matSuffix","",3,"click"],["class","icon-size-5",3,"svgIcon",4,"ngIf"],["mat-flat-button","",1,"fuse-mat-button-large","w-full","mt-3",3,"color","disabled","click"],[4,"ngIf"],[3,"diameter","mode",4,"ngIf"],[1,"mt-8","text-md","font-medium","text-secondary"],[1,"ml-1","text-primary-500","hover:underline",3,"routerLink"],[1,"relative","hidden","md:flex","flex-auto","items-center","justify-center","w-1/2","h-full","p-16","lg:px-28","overflow-hidden","bg-gray-800","dark:border-l"],["viewBox","0 0 960 540","width","100%","height","100%","preserveAspectRatio","xMidYMax slice","xmlns","http://www.w3.org/2000/svg",1,"absolute","inset-0","pointer-events-none"],["fill","none","stroke","currentColor","stroke-width","100",1,"text-gray-700","opacity-25"],["r","234","cx","196","cy","23"],["r","234","cx","790","cy","491"],["viewBox","0 0 220 192","width","220","height","192","fill","none",1,"absolute","-top-16","-right-16","text-gray-700"],["id","837c3e70-6c3a-44e6-8854-cc48c737b659","x","0","y","0","width","20","height","20","patternUnits","userSpaceOnUse"],["x","0","y","0","width","4","height","4","fill","currentColor"],["width","220","height","192","fill","url(#837c3e70-6c3a-44e6-8854-cc48c737b659)"],[1,"z-10","relative","w-full","max-w-2xl"],[1,"text-7xl","font-bold","leading-none","text-gray-100"],[1,"mt-6","text-lg","tracking-tight","leading-6","text-gray-400"],[1,"flex","items-center","mt-8"],[1,"flex","flex-0","items-center","-space-x-1.5"],["src","assets/images/avatars/female-18.jpg",1,"flex-0","w-10","h-10","rounded-full","ring-4","ring-offset-1","ring-gray-800","ring-offset-gray-800","object-cover"],["src","assets/images/avatars/female-11.jpg",1,"flex-0","w-10","h-10","rounded-full","ring-4","ring-offset-1","ring-gray-800","ring-offset-gray-800","object-cover"],["src","assets/images/avatars/male-09.jpg",1,"flex-0","w-10","h-10","rounded-full","ring-4","ring-offset-1","ring-gray-800","ring-offset-gray-800","object-cover"],["src","assets/images/avatars/male-16.jpg",1,"flex-0","w-10","h-10","rounded-full","ring-4","ring-offset-1","ring-gray-800","ring-offset-gray-800","object-cover"],[1,"ml-4","font-medium","tracking-tight","text-gray-400"],[1,"mt-8","-mb-4",3,"appearance","showIcon","type"],[1,"icon-size-5",3,"svgIcon"],[3,"diameter","mode"]],template:function(o,n){if(1&o){const r=e.EpF();e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3),e._UZ(4,"img",4),e.qZA(),e.TgZ(5,"div",5),e._uU(6,"Unlock your session"),e.qZA(),e.TgZ(7,"div",6),e._uU(8,"Your session is locked due to inactivity"),e.qZA(),e.YNc(9,T,2,5,"fuse-alert",7),e.TgZ(10,"form",8,9)(12,"mat-form-field",10)(13,"mat-label"),e._uU(14,"Full name"),e.qZA(),e._UZ(15,"input",11),e.qZA(),e.TgZ(16,"mat-form-field",10)(17,"mat-label"),e._uU(18,"Password"),e.qZA(),e._UZ(19,"input",12,13),e.TgZ(21,"button",14),e.NdJ("click",function(){e.CHM(r);const m=e.MAs(20);return e.KtG(m.type="password"===m.type?"text":"password")}),e.YNc(22,b,1,1,"mat-icon",15),e.YNc(23,C,1,1,"mat-icon",15),e.qZA(),e.TgZ(24,"mat-error"),e._uU(25," Password is required "),e.qZA()(),e.TgZ(26,"button",16),e.NdJ("click",function(){return n.unlock()}),e.YNc(27,F,2,0,"span",17),e.YNc(28,I,1,2,"mat-progress-spinner",18),e.qZA(),e.TgZ(29,"div",19)(30,"span"),e._uU(31,"I'm not"),e.qZA(),e.TgZ(32,"a",20),e._uU(33),e.qZA()()()()(),e.TgZ(34,"div",21),e.O4$(),e.TgZ(35,"svg",22)(36,"g",23),e._UZ(37,"circle",24)(38,"circle",25),e.qZA()(),e.TgZ(39,"svg",26)(40,"defs")(41,"pattern",27),e._UZ(42,"rect",28),e.qZA()(),e._UZ(43,"rect",29),e.qZA(),e.kcU(),e.TgZ(44,"div",30)(45,"div",31)(46,"div"),e._uU(47,"Welcome to"),e.qZA(),e.TgZ(48,"div"),e._uU(49,"our community"),e.qZA()(),e.TgZ(50,"div",32),e._uU(51," Fuse helps developers to build organized and well coded dashboards full of beautiful and rich modules. Join us and start building your application today. "),e.qZA(),e.TgZ(52,"div",33)(53,"div",34),e._UZ(54,"img",35)(55,"img",36)(56,"img",37)(57,"img",38),e.qZA(),e.TgZ(58,"div",39),e._uU(59,"More than 17k people joined us, it's your turn "),e.qZA()()()()()}if(2&o){const r=e.MAs(20);e.xp6(9),e.Q6J("ngIf",n.showAlert),e.xp6(1),e.Q6J("formGroup",n.unlockSessionForm),e.xp6(5),e.Q6J("formControlName","name"),e.xp6(4),e.Q6J("formControlName","password"),e.xp6(3),e.Q6J("ngIf","password"===r.type),e.xp6(1),e.Q6J("ngIf","text"===r.type),e.xp6(3),e.Q6J("color","primary")("disabled",n.unlockSessionForm.disabled),e.xp6(1),e.Q6J("ngIf",!n.unlockSessionForm.disabled),e.xp6(1),e.Q6J("ngIf",n.unlockSessionForm.disabled),e.xp6(4),e.Q6J("routerLink",e.DdM(12,J)),e.xp6(1),e.Oqu(n.name)}},dependencies:[c.yS,g.lW,l.TO,l.KE,l.hX,l.R9,f.Hw,p.Nt,h.Ou,k.W,w.O5,a._Y,a.Fj,a.JJ,a.JL,a.sg,a.u],encapsulation:2,data:{animation:Z.L}}),t})()}];let Q=(()=>{class t{}return t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[c.Bz.forChild(N),g.ot,l.lN,f.Ps,p.c,h.Cq,v.J,x.fC,y.m]}),t})()}}]);