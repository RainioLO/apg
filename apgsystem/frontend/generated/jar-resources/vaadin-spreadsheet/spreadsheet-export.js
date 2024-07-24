function SpreadsheetApi(){var Pb='',Qb=0,Rb='gwt.codesvr=',Sb='gwt.hosted=',Tb='gwt.hybrid',Ub='SpreadsheetApi',Vb='#',Wb='?',Xb='/',Yb=1,Zb='img',$b='clear.cache.gif',_b='baseUrl',ac='script',bc='SpreadsheetApi.nocache.js',cc='base',dc='//',ec='meta',fc='name',gc='gwt:property',hc='content',ic='=',jc='gwt:onPropertyErrorFn',kc='Bad handler "',lc='" for "gwt:onPropertyErrorFn"',mc='gwt:onLoadErrorFn',nc='" for "gwt:onLoadErrorFn"',oc='modernie',pc='MSIE',qc='Trident',rc='yes',sc='none',tc='user.agent',uc='webkit',vc='safari',wc='msie',xc=10,yc=11,zc='ie10',Ac=9,Bc='ie9',Cc=8,Dc='ie8',Ec='gecko',Fc='gecko1_8',Gc=2,Hc=3,Ic=4,Jc='Single-script hosted mode not yet implemented. See issue ',Kc='http://code.google.com/p/google-web-toolkit/issues/detail?id=2079',Lc='8D5C42921F2DBC8EB3DB186C85EBF66B',Mc=':1',Nc=':2',Oc=':',Pc='DOMContentLoaded',Qc=50;var l=Pb,m=Qb,n=Rb,o=Sb,p=Tb,q=Ub,r=Vb,s=Wb,t=Xb,u=Yb,v=Zb,w=$b,A=_b,B=ac,C=bc,D=cc,F=dc,G=ec,H=fc,I=gc,J=hc,K=ic,L=jc,M=kc,N=lc,O=mc,P=nc,Q=oc,R=pc,S=qc,T=rc,U=sc,V=tc,W=uc,X=vc,Y=wc,Z=xc,$=yc,_=zc,ab=Ac,bb=Bc,cb=Cc,db=Dc,eb=Ec,fb=Fc,gb=Gc,hb=Hc,ib=Ic,jb=Jc,kb=Kc,lb=Lc,mb=Mc,nb=Nc,ob=Oc,pb=Pc,qb=Qc;var rb=window,sb=document,tb,ub,vb=l,wb={},xb=[],yb=[],zb=[],Ab=m,Bb,Cb;if(!rb.__gwt_stylesLoaded){rb.__gwt_stylesLoaded={}}if(!rb.__gwt_scriptsLoaded){rb.__gwt_scriptsLoaded={}}function Db(){var b=false;try{var c=rb.location.search;return (c.indexOf(n)!=-1||(c.indexOf(o)!=-1||rb.external&&rb.external.gwtOnLoad))&&c.indexOf(p)==-1}catch(a){}Db=function(){return b};return b}
function Eb(){if(tb&&ub){tb(Bb,q,vb,Ab)}}
function Fb(){function e(a){var b=a.lastIndexOf(r);if(b==-1){b=a.length}var c=a.indexOf(s);if(c==-1){c=a.length}var d=a.lastIndexOf(t,Math.min(c,b));return d>=m?a.substring(m,d+u):l}
function f(a){if(a.match(/^\w+:\/\//)){}else{var b=sb.createElement(v);b.src=a+w;a=e(b.src)}return a}
function g(){var a=Ib(A);if(a!=null){return a}return l}
function h(){var a=sb.getElementsByTagName(B);for(var b=m;b<a.length;++b){if(a[b].src.indexOf(C)!=-1){return e(a[b].src)}}return l}
function i(){var a=sb.getElementsByTagName(D);if(a.length>m){return a[a.length-u].href}return l}
function j(){var a=sb.location;return a.href==a.protocol+F+a.host+a.pathname+a.search+a.hash}
var k=g();if(k==l){k=h()}if(k==l){k=i()}if(k==l&&j()){k=e(sb.location.href)}k=f(k);return k}
function Gb(){var b=document.getElementsByTagName(G);for(var c=m,d=b.length;c<d;++c){var e=b[c],f=e.getAttribute(H),g;if(f){if(f==I){g=e.getAttribute(J);if(g){var h,i=g.indexOf(K);if(i>=m){f=g.substring(m,i);h=g.substring(i+u)}else{f=g;h=l}wb[f]=h}}else if(f==L){g=e.getAttribute(J);if(g){try{Cb=eval(g)}catch(a){alert(M+g+N)}}}else if(f==O){g=e.getAttribute(J);if(g){try{Bb=eval(g)}catch(a){alert(M+g+P)}}}}}}
var Hb=function(a,b){return b in xb[a]};var Ib=function(a){var b=wb[a];return b==null?null:b};function Jb(a,b){var c=zb;for(var d=m,e=a.length-u;d<e;++d){c=c[a[d]]||(c[a[d]]=[])}c[a[e]]=b}
function Kb(a){var b=yb[a](),c=xb[a];if(b in c){return b}var d=[];for(var e in c){d[c[e]]=e}if(Cb){Cb(a,d,b)}throw null}
yb[Q]=function(){{var a=rb.navigator.userAgent;if(a.indexOf(R)==-1&&a.indexOf(S)!=-1){return T}return U}};xb[Q]={'none':m,'yes':u};yb[V]=function(){var a=navigator.userAgent.toLowerCase();var b=sb.documentMode;if(function(){return a.indexOf(W)!=-1}())return X;if(function(){return a.indexOf(Y)!=-1&&(b>=Z&&b<$)}())return _;if(function(){return a.indexOf(Y)!=-1&&(b>=ab&&b<$)}())return bb;if(function(){return a.indexOf(Y)!=-1&&(b>=cb&&b<$)}())return db;if(function(){return a.indexOf(eb)!=-1||b>=$}())return fb;return X};xb[V]={'gecko1_8':m,'ie10':u,'ie8':gb,'ie9':hb,'safari':ib};SpreadsheetApi.onScriptLoad=function(a){SpreadsheetApi=null;tb=a;Eb()};if(Db()){alert(jb+kb);return}Fb();Gb();try{var Lb;Jb([U,fb],lb);Jb([T,fb],lb+mb);Jb([U,X],lb+nb);Lb=zb[Kb(Q)][Kb(V)];var Mb=Lb.indexOf(ob);if(Mb!=-1){Ab=Number(Lb.substring(Mb+u))}}catch(a){return}var Nb;function Ob(){if(!ub){ub=true;Eb();if(sb.removeEventListener){sb.removeEventListener(pb,Ob,false)}if(Nb){clearInterval(Nb)}}}
if(sb.addEventListener){sb.addEventListener(pb,function(){Ob()},false)}var Nb=setInterval(function(){if(/loaded|complete/.test(sb.readyState)){Ob()}},qb)}
SpreadsheetApi();(function () {var $gwt_version = "2.9.0";var $wnd = window;var $doc = $wnd.document;var $moduleName, $moduleBase;var $stats = $wnd.__gwtStatsEvent ? function(a) {$wnd.__gwtStatsEvent(a)} : null;var $strongName = '8D5C42921F2DBC8EB3DB186C85EBF66B';function K(){}
function EE(){}
function AE(){}
function Mg(){}
function Tg(){}
function eb(){}
function rb(){}
function lf(){}
function ln(){}
function dn(){}
function sn(){}
function En(){}
function Ln(){}
function Sn(){}
function Zn(){}
function fo(){}
function mo(){}
function to(){}
function Eo(){}
function Lo(){}
function To(){}
function $o(){}
function kp(){}
function qp(){}
function wp(){}
function wF(){}
function yF(){}
function UE(){}
function bG(){}
function AH(){}
function CH(){}
function VH(){}
function XH(){}
function lK(){}
function PK(){}
function RK(){}
function QL(){}
function aM(){}
function TN(){}
function IP(){}
function MP(){}
function MQ(){}
function _S(){}
function fT(){}
function sT(){}
function ZY(){}
function IZ(){}
function S0(){}
function P1(){}
function $1(){}
function $2(){}
function F2(){}
function a3(){}
function c3(){}
function f3(){}
function h3(){}
function j3(){}
function l3(){}
function n3(){}
function p3(){}
function r3(){}
function s3(){}
function u3(){}
function w3(){}
function x3(){}
function z3(){}
function B3(){}
function C3(){}
function E3(){}
function F3(){}
function H3(){}
function I3(){}
function K3(){}
function M3(){}
function O3(){}
function Q3(){}
function S3(){}
function U3(){}
function U6(){}
function K6(){}
function M6(){}
function O6(){}
function Q6(){}
function S6(){}
function W6(){}
function Y6(){}
function Y5(){}
function $6(){}
function _6(){}
function a7(){}
function c7(){}
function e7(){}
function g7(){}
function i7(){}
function m7(){}
function o7(){}
function q7(){}
function s7(){}
function rsb(){}
function yfb(){}
function ylb(){}
function Hlb(){}
function Plb(){}
function Xlb(){}
function cqb(){}
function Drb(){}
function Frb(){}
function Hrb(){}
function Hcb(){}
function Qcb(){}
function Rcb(){}
function Xcb(){}
function Ycb(){}
function pbb(){}
function Enb(){}
function Eqb(){}
function sqb(){}
function vqb(){}
function yqb(){}
function Bqb(){}
function Hqb(){}
function Kqb(){}
function Nqb(){}
function Qqb(){}
function epb(){}
function ipb(){}
function kpb(){}
function XE(a){}
function w2(a){}
function wH(){aH()}
function tH(){rH()}
function si(){Fh()}
function Mi(){Fh()}
function IG(){HG()}
function WL(){OL()}
function ZL(){OL()}
function hM(){gM()}
function dH(a){KF(a)}
function Jbb(){ybb()}
function kdb(){kdb=AE}
function Zm(a,b){a.b=b}
function Um(a,b){a.f=b}
function Ym(a,b){a.a=b}
function cc(a,b){a.a=b}
function HE(a,b){a.a=b}
function IE(a,b){a.b=b}
function CQ(a,b){a.b=b}
function RQ(a,b){a.c=b}
function SQ(a,b){a.e=b}
function aG(a,b){a.d=b}
function aR(a,b){a.b=b}
function KR(a,b){a.b=b}
function eR(a,b){a.k=b}
function JR(a,b){a.a=b}
function NI(a,b){a.a=b}
function dN(a,b){a.r=b}
function LN(a,b){a.o=b}
function JW(a,b){a.G=b}
function KW(a,b){a.H=b}
function K_(a,b){a.A=b}
function x_(a,b){a.g=b}
function y_(a,b){a.i=b}
function z_(a,b){a.j=b}
function D_(a,b){a.q=b}
function E_(a,b){a.r=b}
function X_(a,b){a.L=b}
function __(a,b){a.M=b}
function TY(a,b){a.e=b}
function UY(a,b){a.f=b}
function b0(a,b){a.O=b}
function c0(a,b){a.R=b}
function g0(a,b){a.W=b}
function h0(a,b){a.Z=b}
function i0(a,b){a.$=b}
function qsb(a,b){a.a=b}
function oe(a,b){a.Xc=b}
function vh(b,a){b.id=a}
function bb(a){this.a=a}
function ib(a){this.a=a}
function Eb(a){this.a=a}
function Kb(a){this.a=a}
function Ag(a){this.a=a}
function Cg(a){this.a=a}
function CJ(a){this.a=a}
function EJ(a){this.a=a}
function ep(a){this.a=a}
function Sp(a){this.a=a}
function QE(a){this.a=a}
function WE(a){this.a=a}
function II(a){this.a=a}
function LI(a){this.a=a}
function nK(a){this.a=a}
function pK(a){this.a=a}
function pP(a){this.a=a}
function hP(a){this.a=a}
function jP(a){this.a=a}
function nP(a){this.a=a}
function nM(a){this.a=a}
function kO(a){this.a=a}
function sO(a){this.a=a}
function rP(a){this.a=a}
function tP(a){this.a=a}
function vP(a){this.a=a}
function zP(a){this.a=a}
function BP(a){this.a=a}
function PP(a){this.a=a}
function lR(a){this.a=a}
function nR(a){this.a=a}
function qS(a){this.a=a}
function sS(a){this.a=a}
function uS(a){this.a=a}
function US(a){this.a=a}
function RT(a){this.a=a}
function TT(a){this.a=a}
function VT(a){this.a=a}
function _X(a){this.a=a}
function lY(a){this.a=a}
function rY(a){this.a=a}
function tY(a){this.a=a}
function BY(a){this.a=a}
function DY(a){this.a=a}
function IY(a){this.a=a}
function KY(a){this.a=a}
function BZ(a){this.a=a}
function HZ(a){this.a=a}
function OZ(a){this.a=a}
function RZ(a){this.a=a}
function F0(a){this.a=a}
function I0(a){this.b=a}
function GL(a){this.c=a}
function _1(a){this.a=a}
function O2(a){this.a=a}
function Q2(a){this.a=a}
function F4(a){this.a=a}
function K4(a){this.a=a}
function M4(a){this.a=a}
function Q4(a){this.a=a}
function y5(a){this.a=a}
function E5(a){this.a=a}
function G5(a){this.a=a}
function I5(a){this.a=a}
function u6(a){this.a=a}
function k7(a){this.a=a}
function M9(a){this.a=a}
function Q9(a){this.a=a}
function Ao(){this.a={}}
function E1(){this.a={}}
function vab(a,b){a.a=b}
function wab(a,b){a.b=b}
function xab(a,b){a.c=b}
function yab(a,b){a.e=b}
function zab(a,b){a.f=b}
function Aab(a,b){a.g=b}
function Bab(a,b){a.i=b}
function Dab(a,b){a.j=b}
function Eab(a,b){a.k=b}
function Fab(a,b){a.n=b}
function Gab(a,b){a.o=b}
function Hab(a,b){a.p=b}
function Iab(a,b){a.q=b}
function Jab(a,b){a.r=b}
function Kab(a,b){a.s=b}
function Lab(a,b){a.t=b}
function Nab(a,b){a.u=b}
function Oab(a,b){a.v=b}
function Pab(a,b){a.w=b}
function Qab(a,b){a.A=b}
function Rab(a,b){a.d=b}
function Sab(a,b){a.B=b}
function Tab(a,b){a.C=b}
function Uab(a,b){a.D=b}
function Vab(a,b){a.F=b}
function Wab(a,b){a.G=b}
function Xab(a,b){a.H=b}
function Yab(a,b){a.I=b}
function Zab(a,b){a.J=b}
function $ab(a,b){a.K=b}
function _ab(a,b){a.L=b}
function abb(a,b){a.M=b}
function bbb(a,b){a.N=b}
function cbb(a,b){a.O=b}
function dbb(a,b){a.P=b}
function ebb(a,b){a.Q=b}
function fbb(a,b){a.R=b}
function gbb(a,b){a.S=b}
function hbb(a,b){a.T=b}
function ibb(a,b){a.U=b}
function jbb(a,b){a.V=b}
function zbb(a,b){a.a=b}
function Abb(a,b){a.b=b}
function Bbb(a,b){a.c=b}
function Cbb(a,b){a.d=b}
function Dbb(a,b){a.e=b}
function Ebb(a,b){a.f=b}
function Fbb(a,b){a.g=b}
function Gbb(a,b){a.i=b}
function Hbb(a,b){a.j=b}
function Ibb(a,b){a.k=b}
function Yqb(a,b){a.b=b}
function IW(a,b){a.lb=b}
function PW(a,b){a.Qb=b}
function UW(a,b){a.mb=b}
function VW(a,b){a.ec=b}
function WW(a,b){a.fc=b}
function Ykb(a){this.c=a}
function ieb(a){this.a=a}
function Hjb(a){this.a=a}
function Njb(a){this.a=a}
function Sjb(a){this.a=a}
function Xjb(a){this.a=a}
function rjb(a){this.d=a}
function usb(a){this.a=a}
function ubb(a){this.a=a}
function wbb(a){this.a=a}
function edb(a){this.a=a}
function Zdb(a){this.a=a}
function ueb(a){this.a=a}
function Qib(a){this.a=a}
function _lb(a){this.b=a}
function pmb(a){this.b=a}
function Omb(a){this.c=a}
function pnb(a){this.a=a}
function tnb(a){this.a=a}
function tpb(a){this.a=a}
function rpb(a){this.a=a}
function vpb(a){this.a=a}
function xpb(a){this.a=a}
function Orb(a){this.a=a}
function Trb(a){this.a=a}
function esb(a){this.a=a}
function jsb(a){this.a=a}
function rj(b,a){b.src=a}
function EH(a,b){Pe(b,a)}
function Crb(a,b){a.add(b)}
function qf(a){pf=a;gg()}
function BK(){BK=AE;FK()}
function LL(){LL=AE;KL()}
function of(){this.a=Wf()}
function An(){this.c=++xn}
function Vnb(){Cib(this)}
function Akb(){pkb(this)}
function Ucb(){Tcb(this)}
function sj(b,a){b.value=a}
function Pm(b,a){b.value=a}
function TO(a,b){bL(a.j,b)}
function VO(a,b){af(a.j,b)}
function PQ(a,b){xh(a.a,b)}
function bR(a,b){QQ(a.g,b)}
function d$(a,b){$T(a.V,b)}
function h$(a,b){hU(a.V,b)}
function L$(a,b){TO(a.u,b)}
function m_(a,b){jW(a.V,b)}
function n_(a,b){iW(a.V,b)}
function u_(a,b){IW(a.V,b)}
function v_(a,b){JW(a.V,b)}
function w_(a,b){KW(a.V,b)}
function F_(a,b){LW(a.V,b)}
function G_(a,b){MW(a.V,b)}
function L_(a,b){OW(a.V,b)}
function M_(a,b){PW(a.V,b)}
function N_(a,b){HW(a.V,b)}
function Q_(a,b){RW(a.V,b)}
function R_(a,b){SW(a.V,b)}
function Y_(a,b){UW(a.V,b)}
function O_(a,b){UV(a.V,b)}
function Z_(a,b){VW(a.V,b)}
function $_(a,b){WW(a.V,b)}
function W_(a,b){WO(a.u,b)}
function P_(a,b){IT(a.U,b)}
function l0(a,b){JT(a.U,b)}
function d0(a,b){NW(a.V,b)}
function j0(a,b){$W(a.V,b)}
function n0(a,b){qX(a.V,b)}
function o0(a,b){rX(a.V,b)}
function u0(a,b){TX(a.V,b)}
function v0(a,b){UX(a.V,b)}
function zS(a,b){Vg(b,a.k)}
function OS(a,b){Vg(b,a.B)}
function QO(a){bL(a.j,a.c)}
function V2(a){W2(a);X2(a)}
function xR(a){a.a=0;a.b=0}
function YM(a){a.s=new Akb}
function MI(){MI=AE;new Vnb}
function T1(){T1=AE;new U1}
function Fh(){Fh=AE;Eh=PD()}
function CF(){CF=AE;AF=QD()}
function yG(){yG=AE;uG=RD()}
function MJ(){MJ=AE;LJ=TD()}
function gM(){gM=AE;fM=lM()}
function WQ(){VQ.call(this)}
function T0(){VQ.call(this)}
function G0(){rb.call(this)}
function Uf(b,a){b.length=a}
function m4(a,b){a.a[ayb]=b}
function zo(a,b,c){a.a[b]=c}
function O$(a,b){jab(a.W,b)}
function _$(a,b){nab(a.W,b)}
function E$(a,b){kbb(a.W,b)}
function h_(a,b){kab(a.W,b)}
function t_(a,b){Cab(a.W,b)}
function ZW(a,b){bS(a.yc,b)}
function Wfb(a){Pfb(this,a)}
function dc(a){cc(this,a.id)}
function wg(a){return a.Jd()}
function Gg(a){Fg();Eg.Ld(a)}
function ybb(){ybb=AE;Obb()}
function hdb(){Jf.call(this)}
function eeb(){Jf.call(this)}
function Eeb(){Jf.call(this)}
function Afb(){Jf.call(this)}
function npb(){Jf.call(this)}
function Jnb(){Jf.call(this)}
function Of(){Of=AE;Nf=new K}
function OE(){OE=AE;NE=new UE}
function ng(){ng=AE;mg=new $1}
function HG(){HG=AE;GG=new An}
function dF(){this.a=new qfb}
function jO(a,b){h_(a.a.a,b)}
function qe(a,b){uh(a.md(),b)}
function se(a,b){Ce(a.md(),b)}
function yL(a,b){AL(a,b,a.c)}
function YI(a,b){cJ(a,b,b,-1)}
function Oh(a,b,c){a.add(b,c)}
function SW(a,b){a.ub=b;pX(a)}
function D1(a,b){return null}
function Ah(b,a){b.tabIndex=a}
function nf(b,a){b.fillStyle=a}
function Tf(b,a){b[b.length]=a}
function Vf(b,a){b[b.length]=a}
function zh(b,a){b.scrollTop=a}
function Lb(a){Kb.call(this,a)}
function xc(a){Kb.call(this,a)}
function Kf(a){If.call(this,a)}
function Vp(a){Tp.call(this,a)}
function YE(a){XE.call(this,a)}
function TH(a){Vp.call(this,a)}
function Cj(a){(Fh(),Eh).Wd(a)}
function _h(a){Fh();return a|0}
function yo(a,b){return a.a[b]}
function JO(a){return a.g&&a.f}
function rZ(a,b){h$(hQ(a.a),b)}
function wZ(a,b){n0(hQ(a.a),b)}
function xZ(a,b){o0(hQ(a.a),b)}
function zZ(a,b){u0(hQ(a.a),b)}
function AZ(a,b){v0(hQ(a.a),b)}
function XJ(a,b){qI(a,b);SJ(a)}
function C_(a,b){a.p=b;FR(a.Q)}
function w0(a){SV(a.V);NT(a.U)}
function s0(a,b,c){KX(a.V,b,c)}
function o$(a,b,c){DU(a.V,b,c)}
function r_(a,b,c){GW(a.V,b,c)}
function a4(a){If.call(this,a)}
function idb(a){Kf.call(this,a)}
function deb(a){Kf.call(this,a)}
function feb(a){Kf.call(this,a)}
function Geb(a){Kf.call(this,a)}
function Feb(a){Mf.call(this,a)}
function Bfb(a){Kf.call(this,a)}
function Gb(){Eb.call(this,Qtb)}
function Hb(){Eb.call(this,Rtb)}
function Pb(){Eb.call(this,Stb)}
function Rb(){Eb.call(this,Ttb)}
function Tb(){Eb.call(this,Utb)}
function Ub(){Eb.call(this,Vtb)}
function Vb(){Eb.call(this,Wtb)}
function fc(){Eb.call(this,Xtb)}
function rc(){Eb.call(this,Ytb)}
function sc(){Eb.call(this,Ztb)}
function tc(){Eb.call(this,$tb)}
function vc(){Eb.call(this,_tb)}
function wc(){Eb.call(this,aub)}
function zc(){Eb.call(this,bub)}
function Ec(){Eb.call(this,cub)}
function Xd(){Eb.call(this,dub)}
function uE(){sE==null&&(sE=[])}
function fL(){fL=AE;_e();nL()}
function C1(){C1=AE;B1=new An}
function v2(){v2=AE;u2=new An}
function Scb(){this.a=new Akb}
function $nb(){this.a=new Vnb}
function Wqb(){this.a=new Vnb}
function WG(a,b){a.__listener=b}
function _H(a,b){aI((CF(),a),b)}
function ne(a,b){oe(a,(CF(),b))}
function he(a){return CF(),a.Xc}
function je(a){return CF(),a.Xc}
function WI(a){return CF(),a.Xc}
function aJ(a){return CF(),a.Xc}
function zV(a,b){return b<=a.ob}
function I_(a,b){a.v=new Ckb(b)}
function J_(a,b){a.w=new Ckb(b)}
function i_(a,b,c){mbb(a.W,b,c)}
function A$(a,b,c){hab(a.W,b,c)}
function Y$(a,b,c){iab(a.W,c,b)}
function f1(a,b,c){zib(a.c,b,c)}
function dq(a,b){return Gdb(a,b)}
function Tcb(a){a.a=(Ecb(),Ccb)}
function cdb(a){Kf.call(this,a)}
function gdb(a){Kf.call(this,a)}
function jdb(a){idb.call(this,a)}
function tfb(a){idb.call(this,a)}
function klb(a){Isb(a);this.a=a}
function vsb(a,b){asb(a.b,a.a,b)}
function Dsb(a,b){return jq(a,b)}
function OF(a,b){CF();AF.Ke(a,b)}
function PF(a,b){CF();AF.Le(a,b)}
function YF(a,b){CF();AF.Le(a,b)}
function df(a){oe(this,(CF(),a))}
function jf(a){oe(this,(CF(),a))}
function sI(a){oe(this,(CF(),a))}
function ag(){ag=AE;!!(Fg(),Eg)}
function vob(){vob=AE;uob=xob()}
function Glb(){throw VD(new npb)}
function Qo(){this.a=avb in $wnd}
function RG(){Ep.call(this,null)}
function zN(){MJ();tN.call(this)}
function cN(a,b){UJ(a,b);aN(a,1)}
function fN(a,b){YJ(a,b);aN(a,1)}
function AI(a,b){kI(a.a,b,false)}
function IM(a,b){a.j=b;Vg(a.d,b)}
function YW(a,b,c){a.sc=c;a.rc=b}
function Rpb(a,b,c){b.Pf(a.a[c])}
function lsb(a,b,c){b.Pf(xfb(c))}
function X3(a,b,c){v4(a).Hf(b,c)}
function nO(a){!a.b&&(a.b=TF(a))}
function L9(a){oe(this,(CF(),a))}
function y2(a){w2(this);this.a=a}
function Ieb(a){deb.call(this,a)}
function fnb(a){_lb.call(this,a)}
function jnb(a){fnb.call(this,a)}
function Anb(a){tmb.call(this,a)}
function jfb(){edb.call(this,'')}
function qfb(){edb.call(this,'')}
function rfb(){edb.call(this,'')}
function omb(){throw VD(new Afb)}
function Nmb(){throw VD(new Afb)}
function Flb(){Flb=AE;Elb=new Hlb}
function V0(){V0=AE;U0=$0();_0()}
function Dh(a){a=dfb(a);return a}
function wdb(a){vdb(a);return a.k}
function xdb(a){vdb(a);return a.i}
function adb(a){return Object(a)}
function p$(a){return a.S[a.a-1]}
function bE(a,b){return YD(a,b)>0}
function dE(a,b){return YD(a,b)<0}
function re(a,b,c){Ae(a.md(),b,c)}
function Csb(a,b,c){a.splice(b,c)}
function qpb(a,b){while(a.lg(b));}
function Cb(a,b){th(b,'role',a.a)}
function Dp(a,b){return Pp(a.a,b)}
function Lq(a){return a.l|a.m<<22}
function bF(b,a){return b.test(a)}
function NF(a){CF();BF=a;AF.Je(a)}
function WF(a){CF();BF=a;AF.Je(a)}
function Lj(a){(Fh(),a).opacity=0}
function ec(){Eb.call(this,'img')}
function jc(){Eb.call(this,'log')}
function Qd(){Eb.call(this,'row')}
function Zd(){Eb.call(this,'tab')}
function ek(){_j.call(this,Kub,3)}
function ul(){rl.call(this,Kub,1)}
function Am(){wm.call(this,Kub,1)}
function xJ(){yJ.call(this,false)}
function oG(){this.a=new Ep(null)}
function JH(){this.o=new DL(this)}
function b2(){b2=AE;CF();Qi($doc)}
function Cnb(){Cnb=AE;Bnb=new Enb}
function lg(){Xf!=0&&(Xf=0);_f=-1}
function A6(a,b){b<0&&(b=0);a.a=b}
function B6(a,b){b<0&&(b=0);a.d=b}
function Nj(a,b){this.b=a;this.c=b}
function Ab(a,b){this.b=a;this.a=b}
function ifb(a,b){a.a+=b;return a}
function lfb(a,b){a.a+=b;return a}
function zpb(a,b){while(a.og(b));}
function aZ(a,b){return e1(a.D,b)}
function OU(a,b){return s$(a.a,b)}
function _D(a,b){return YD(a,b)==0}
function eE(a,b){return YD(a,b)<=0}
function te(a,b){De((CF(),a.Xc),b)}
function ve(a,b){OF((CF(),a.Xc),b)}
function cf(a,b){Ah((CF(),a.Xc),b)}
function Wg(a){return Jh((Fh(),a))}
function rg(a){return !!a.b||!!a.g}
function lh(a){return Ih((Fh(),a))}
function eh(a,b){(Fh(),Eh).Qd(a,b)}
function uh(b,a){b.className=a||''}
function wh(b,a){b.innerHTML=a||''}
function xh(a,b){(Fh(),Eh).ee(a,b)}
function yh(a,b){(Fh(),Eh).fe(a,b)}
function _j(a,b){Nj.call(this,a,b)}
function Ak(a,b){Nj.call(this,a,b)}
function rl(a,b){Nj.call(this,a,b)}
function Cl(a,b){Nj.call(this,a,b)}
function Nl(a,b){Nj.call(this,a,b)}
function Wl(a,b){Nj.call(this,a,b)}
function im(a,b){Nj.call(this,a,b)}
function km(){im.call(this,'PX',0)}
function mm(){im.call(this,'EM',2)}
function nm(){im.call(this,'EX',3)}
function om(){im.call(this,'PT',4)}
function pm(){im.call(this,'PC',5)}
function qm(){im.call(this,'IN',6)}
function rm(){im.call(this,'CM',7)}
function sm(){im.call(this,'MM',8)}
function Zb(){Eb.call(this,'form')}
function $b(){Eb.call(this,'grid')}
function kc(){Eb.call(this,'main')}
function mc(){Eb.call(this,'math')}
function nc(){Eb.call(this,'menu')}
function gc(){Eb.call(this,'list')}
function uc(){Eb.call(this,'note')}
function ee(){Eb.call(this,'tree')}
function wm(a,b){Nj.call(this,a,b)}
function Im(a,b){Nj.call(this,a,b)}
function bq(a,b){Nj.call(this,a,b)}
function oL(a,b){Nj.call(this,a,b)}
function bO(a,b){_N.call(this,a,b)}
function qO(a,b){this.a=a;this.b=b}
function UI(a,b){this.a=a;this.b=b}
function RN(a,b){this.a=a;this.b=b}
function DP(a,b){this.a=a;this.b=b}
function NQ(a,b){this.b=a;this.a=b}
function fY(a,b){this.a=a;this.b=b}
function hY(a,b){this.a=a;this.b=b}
function jY(a,b){this.a=a;this.b=b}
function nY(a,b){this.a=a;this.b=b}
function pY(a,b){this.a=a;this.b=b}
function MY(a,b){this.a=a;this.b=b}
function RY(a,b){this.b=a;this.a=b}
function LR(a,b){this.c=b;this.d=a}
function DZ(a,b){this.a=a;this.b=b}
function KZ(a,b){this.a=a;this.b=b}
function PZ(a,b){this.a=a;this.b=b}
function M0(a,b){this.a=a;this.b=b}
function pR(a,b){_N.call(this,a,b)}
function Z2(a,b){this.a=a;this.b=b}
function Y3(a,b){this.b=a;this.a=b}
function O4(a,b){this.a=a;this.b=b}
function O5(a,b){this.b=a;this.a=b}
function w6(a,b){this.a=a;this.b=b}
function y6(a,b){this.a=a;this.b=b}
function O9(a,b){this.a=a;this.b=b}
function $W(a,b){a.Sc=b;aS(a.yc,b)}
function e1(a,b){return wib(a.c,b)}
function Pp(a,b){return tib(a.d,b)}
function UF(a){return TG((CF(),a))}
function Dib(a){return a.a.c+a.b.c}
function sM(a){Qp(a.a,a.d,a.c,a.b)}
function DN(a){$M(a,false);ah(a.i)}
function tb(a){$wnd.clearTimeout(a)}
function geb(a,b){Lf.call(this,a,b)}
function zrb(a,b){Nj.call(this,a,b)}
function Fb(){Eb.call(this,'alert')}
function be(){Eb.call(this,'timer')}
function ac(){Eb.call(this,'group')}
function Dc(){Eb.call(this,'radio')}
function Gj(b,a){b.selectedIndex=a}
function Asb(a,b,c){a.splice(b,0,c)}
function sZ(a,b,c){o$(hQ(a.a),b,c)}
function eJ(a,b){Gj((CF(),a.Xc),b)}
function Je(a,b){!!a.Vc&&Cp(a.Vc,b)}
function fkb(a,b){this.a=a;this.b=b}
function osb(a,b){this.a=a;this.b=b}
function wsb(a,b){this.b=a;this.a=b}
function kg(a){$wnd.clearTimeout(a)}
function kG(a){jG();return nG(hG,a)}
function Bj(a){return (Fh(),a).type}
function Hj(a){return (Fh(),a)[Gub]}
function Ij(a){return (Fh(),a)[gub]}
function Jj(a){return (Fh(),a)[Hub]}
function Kj(a){return (Fh(),a)[Iub]}
function rH(){rH=AE;aH();ZG[pvb]=eH}
function CG(){if(!sG){yH();sG=true}}
function DG(){if(!xG){zH();xG=true}}
function oU(a){tU(a);pU(a);a.v=true}
function ZZ(a){A5(a.e);tJ(a.e,null)}
function X$(a,b){EV(a.V)||DX(a.V,b)}
function p0(a,b,c,d){obb(a.W,b,c,d)}
function y4(a,b,c,d){a[b][c].type=d}
function qbb(a,b,c){a[b.a]=adb(c.a)}
function rbb(a,b,c){a[b.a]=adb(c.a)}
function Pbb(a,b){Nj.call(this,a,b)}
function jcb(a,b){Nj.call(this,a,b)}
function scb(a,b){Nj.call(this,a,b)}
function Acb(a,b){Nj.call(this,a,b)}
function Fcb(a,b){Nj.call(this,a,b)}
function cL(a){_e();df.call(this,a)}
function S4(){v2();y2.call(this,{})}
function lm(){im.call(this,'PCT',1)}
function Mm(){Im.call(this,'PRE',2)}
function FE(){QF();OE();PE();new c1}
function zob(){vob();return new uob}
function Bob(a,b){return a.a.get(b)}
function _eb(a,b){return a.substr(b)}
function Ynb(a,b){return tib(a.a,b)}
function J(a,b){return cr(a)===cr(b)}
function Zq(a){return typeof a===ctb}
function $q(a){return typeof a===dtb}
function cE(a){return typeof a===dtb}
function br(a){return typeof a===etb}
function cr(a){return a==null?null:a}
function W3(a){return a.b.a+'.'+a.a}
function sb(a){$wnd.clearInterval(a)}
function Lpb(a,b){Bpb.call(this,a,b)}
function Ob(){Eb.call(this,'banner')}
function Wd(){Eb.call(this,'slider')}
function Ud(){Eb.call(this,'search')}
function Yd(){Eb.call(this,'status')}
function Wb(){Eb.call(this,'dialog')}
function Fc(){Eb.call(this,'region')}
function bk(){_j.call(this,'NONE',0)}
function Ck(){Ak.call(this,'NONE',0)}
function Yl(){Wl.call(this,'CLIP',0)}
function wl(){rl.call(this,'AUTO',3)}
function Rl(){Nl.call(this,'LEFT',2)}
function Ep(a){Fp.call(this,a,false)}
function IJ(a,b){JJ.call(this,a.a,b)}
function sL(){oL.call(this,'LEFT',2)}
function vK(a){V.call(this);this.a=a}
function y1(a){this.a=z1(a);this.b=a}
function D6(a){this.a=a;V.call(this)}
function Jb(a,b,c){th(b,a.a,Ib(a,c))}
function KX(a,b,c){yT(wib(a.Bc,b),c)}
function MH(a,b){HH(a,b,(CF(),a.Xc))}
function mI(a,b){HH(a,b,(CF(),a.Xc))}
function af(a,b){(CF(),a.Xc)[nub]=!b}
function XF(a,b){CF();a.__listener=b}
function Fpb(a,b){Bpb.call(this,a,b)}
function Ipb(a,b){Bpb.call(this,a,b)}
function Reb(a,b){return a.indexOf(b)}
function ppb(a){return a!=null?Q(a):0}
function gib(a){return !a?null:a.gg()}
function Xg(a){return !!Jh((Fh(),a))}
function mdb(a){kdb();return Isb(a),a}
function _rb(a,b,c){Crb(b,c);return b}
function mfb(a,b){a.a+=''+b;return a}
function nfb(a,b){a.a+=''+b;return a}
function ofb(a,b){a.a+=''+b;return a}
function _Z(a,b,c,d){a.a=b;$Z(a,c,d)}
function fH(a){(Fh(),Eh).Wd(a);gH(a)}
function yb(a){this.a=a;rb.call(this)}
function Nb(){Eb.call(this,'article')}
function lc(){Eb.call(this,'marquee')}
function pc(){Eb.call(this,'menubar')}
function ce(){Eb.call(this,'toolbar')}
function de(){Eb.call(this,'tooltip')}
function $d(){Eb.call(this,'tablist')}
function bc(){Eb.call(this,'heading')}
function hc(){Eb.call(this,'listbox')}
function ae(){Eb.call(this,'textbox')}
function ph(a){return (Fh(),Eh).be(a)}
function mh(a){return (Fh(),Eh).ae(a)}
function qh(a){return (Fh(),Eh).ge(a)}
function gh(a){return (Fh(),Eh).Xd(a)}
function ih(a){return (Fh(),Eh).Yd(a)}
function ij(a){return (Fh(),Eh).$d(a)}
function hj(a){return (Fh(),Eh).Zd(a)}
function tj(a){return (Fh(),Eh).Rd(a)}
function vj(a){return (Fh(),Eh).Sd(a)}
function wj(a){return (Fh(),Eh).Td(a)}
function xj(a){return (Fh(),Eh).Vd(a)}
function nj(a){return Kh((Fh(),Eh),a)}
function oj(a){return Lh((Fh(),Eh),a)}
function Sm(a){return (Fh(),a).target}
function mq(a){return nq(a.l,a.m,a.h)}
function FF(a){CF();return AF.Ee(a,0)}
function ZK(a){return pM((CF(),a.Xc))}
function $K(a){return qM((CF(),a.Xc))}
function _e(){_e=AE;$e=(OL(),OL(),NL)}
function yI(){yI=AE;xI=(OL(),OL(),ML)}
function fk(){_j.call(this,'SOLID',4)}
function Uk(){Ak.call(this,'FLEX',17)}
function Yk(){Ak.call(this,'BLOCK',1)}
function il(){Ak.call(this,'TABLE',7)}
function Hl(){Cl.call(this,'FIXED',3)}
function Sl(){Nl.call(this,'RIGHT',3)}
function tL(){oL.call(this,'RIGHT',3)}
function PL(a){return (Fh(),Eh).ce(a)}
function DV(a){return rV(a,a.rc,a.sc)}
function t$(a,b,c){return D0(a.I,b,c)}
function u$(a,b,c){return E0(a.I,b,c)}
function P$(a,b,c){!!a.R&&FZ(a.R,b,c)}
function a_(a,b,c){!!a.R&&GZ(a.R,b,c)}
function _Q(a,b){ykb(a.f,b);vL(a.i,b)}
function T$(a){g$(a,a.b,true);FU(a.V)}
function zK(a){this.a=a;rb.call(this)}
function zY(a){this.a=a;rb.call(this)}
function vY(a){this.a=a;rb.call(this)}
function lP(a){this.a=a;rb.call(this)}
function xP(a){this.a=a;rb.call(this)}
function oS(a){this.a=a;rb.call(this)}
function O0(a){this.a=a;rb.call(this)}
function H4(a){this.a=a;rb.call(this)}
function P5(a){this.a=a;rb.call(this)}
function W5(a){this.a=a;rb.call(this)}
function p6(a){this.a=a;rb.call(this)}
function mob(a){this.a=zob();this.b=a}
function Eob(a){this.a=zob();this.b=a}
function EM(a,b){a.o=b;LM(a);a.g=true}
function rf(a){a.i=fq(IB,atb,74,0,0,1)}
function pkb(a){a.a=fq(GB,atb,1,0,5,1)}
function Qb(){Eb.call(this,'checkbox')}
function Sb(){Eb.call(this,'combobox')}
function Yb(){Eb.call(this,'document')}
function _b(){Eb.call(this,'gridcell')}
function _d(){Eb.call(this,'tabpanel')}
function ge(){Eb.call(this,'treeitem')}
function fe(){Eb.call(this,'treegrid')}
function Rd(){Eb.call(this,'rowgroup')}
function ic(){Eb.call(this,'listitem')}
function qc(){Eb.call(this,'menuitem')}
function ck(){_j.call(this,'DOTTED',1)}
function dk(){_j.call(this,'DASHED',2)}
function $k(){Ak.call(this,'INLINE',2)}
function gl(){Ak.call(this,'RUN_IN',6)}
function El(){Cl.call(this,'STATIC',0)}
function Pl(){Nl.call(this,'CENTER',0)}
function vl(){rl.call(this,'SCROLL',2)}
function Km(){Im.call(this,'NORMAL',0)}
function Lm(){Im.call(this,'NOWRAP',1)}
function qL(){oL.call(this,'CENTER',0)}
function Aj(a){return (Fh(),a).touches}
function Fj(a){return (Fh(),a).options}
function Ri(a,b){return Gh((Fh(),a),b)}
function wN(a,b){MJ();Pd();Db(vN(a),b)}
function th(c,a,b){c.setAttribute(a,b)}
function FP(a,b,c){NM.call(this,a,b,c)}
function vg(a,b){a.d=xg(a.d,[b,false])}
function yZ(a,b,c,d){q0(hQ(a.a),b,c,d)}
function aW(a){mU(a);vX(a);yX(a);EU(a)}
function k_(a){_V(a.V);bW(a.V);cW(a.V)}
function xO(a){Z1((ng(),mg),new BP(a))}
function AO(a){Z1((ng(),mg),new tP(a))}
function eP(a){Z1((ng(),mg),new nP(a))}
function DT(a){Z1((ng(),mg),new VT(a))}
function FU(a){Z1((ng(),mg),new lY(a))}
function G2(a,b){a.d=1;Y2(new Z2(a,b))}
function nrb(a,b){if(arb){return}a.b=b}
function Nrb(a,b){return a[a.length]=b}
function Srb(a,b){return a[a.length]=b}
function Vkb(a){return a.a<a.c.a.length}
function VD(a){return a.backingJsObject}
function Pnb(a){return a<10?'0'+a:''+a}
function jeb(a,b){return a<b?-1:a>b?1:0}
function tsb(a,b,c){return _rb(a.a,b,c)}
function asb(a,b,c){qsb(a,tsb(b,a.a,c))}
function ZH(a,b){(CF(),a)['align']=b.a}
function Kgb(a){mgb();Lgb.call(this,a)}
function Rp(a){this.d=new Vnb;this.c=a}
function b1(){b1=AE;new Tob;a1=new Akb}
function vm(){vm=AE;um=new ym;tm=new Am}
function Vl(){Vl=AE;Tl=new Yl;Ul=new Zl}
function Ql(){Nl.call(this,'JUSTIFY',1)}
function tl(){rl.call(this,'VISIBLE',0)}
function ym(){wm.call(this,'VISIBLE',0)}
function rL(){oL.call(this,'JUSTIFY',1)}
function Xb(){Eb.call(this,'directory')}
function Vd(){Eb.call(this,'separator')}
function Sd(){Eb.call(this,'rowheader')}
function Td(){Eb.call(this,'scrollbar')}
function d4(a,b){c4.call(this,null,a,b)}
function w$(a,b){return Ynb(a.G,reb(b))}
function z$(a,b){return Ynb(a.H,reb(b))}
function bV(a){return Yvb+a.rc+Zvb+a.sc}
function xfb(a){return a.backingJsObject}
function Vg(b,a){return b.appendChild(a)}
function _g(b,a){return b.removeChild(a)}
function nh(b,a){return parseInt(b[a])|0}
function nq(a,b,c){return {l:a,m:b,h:c}}
function Yq(a,b){return a!=null&&Wq(a,b)}
function GF(a){CF();return Ih((Fh(),a))}
function HF(a){CF();return Jh((Fh(),a))}
function yj(a){return (Fh(),a).keyCode|0}
function Ej(a){(Fh(),a).options.length=0}
function UG(a){if(!SG){a.Ge();SG=true}}
function KM(a){BM(a);DM(a);CM(a);a.gf()}
function r4(a,b,c){a.f[(new f4(b)).a]=c}
function IF(a,b,c){CF();AF.He(a,MF(b),c)}
function aF(c,a,b){return a.replace(c,b)}
function CM(a){if(a.e){ah(a.e);a.e=null}}
function BM(a){if(a.a){ah(a.a);a.a=null}}
function DM(a){if(a.j){ah(a.j);a.j=null}}
function PO(a){bL(a.a,a.b);bf(a.a,false)}
function BO(a){bL(a.j,'');XO(a,'');DO(a)}
function XO(a,b){a.b=b;bL(a.a,b);bP(a,b)}
function _O(a){a.v=false;a.u=false;$O(a)}
function GS(a){ah(a.B);YF(a.B,-15736909)}
function XW(a,b,c){yh(a.zc,b);zh(a.zc,c)}
function NZ(a,b){return xib(VP(a.a).c,b)}
function e$(a){return (!a.T||!a.D)&&!a.Z}
function f$(a){return (!a.T||!a.F)&&!a.Z}
function lcb(a){return !!a&&!a.isEmpty()}
function ET(a){return FT(a,a.u.length-1)}
function Fl(){Cl.call(this,'RELATIVE',1)}
function Gl(){Cl.call(this,'ABSOLUTE',2)}
function Zl(){Wl.call(this,'ELLIPSIS',1)}
function Sk(){Ak.call(this,'INITIAL',16)}
function Nm(){Im.call(this,'PRE_LINE',3)}
function Om(){Im.call(this,'PRE_WRAP',4)}
function Ufb(a){Lfb();Vfb.call(this,a,0)}
function Jf(){rf(this);tf(this);this.Hd()}
function Brb(a,b){this.a=a;ulb();this.b=b}
function Ueb(a,b){return a.lastIndexOf(b)}
function Seb(a,b,c){return a.indexOf(b,c)}
function pdb(a){kdb();return a?true:false}
function prb(a){if(arb){return}a.e=false}
function Gsb(a){if(!a){throw VD(new npb)}}
function Msb(a){if(!a){throw VD(new eeb)}}
function SH(){SH=AE;QH=new VH;RH=new XH}
function Usb(){Usb=AE;Rsb=new K;Tsb=new K}
function Teb(a){return Peb(etb,typeof(a))}
function Xdb(a){return Peb(dtb,typeof(a))}
function Qsb(a){return a.$H||(a.$H=++Psb)}
function ie(a){return nh((CF(),a.Xc),eub)}
function zj(a){return !!(Fh(),a).shiftKey}
function Zg(a,b){return (Fh(),Eh).de(a,b)}
function wq(a){return a.l+a.m*itb+a.h*htb}
function dJ(a){(CF(),a.Xc).multiple=false}
function pe(a,b){(CF(),a.Xc).style[gub]=b}
function ue(a,b){(CF(),a.Xc).style[hub]=b}
function Dj(a){(Fh(),a).stopPropagation()}
function VK(a){this.c=a;this.a=!!this.c.O}
function hL(){fL();iL.call(this,ej($doc))}
function el(){Ak.call(this,'LIST_ITEM',5)}
function DQ(){BQ.call(this);this.a=new MQ}
function Do(){Do=AE;Co=new Bn(_ub,new Eo)}
function eo(){eo=AE;co=new Bn(Eub,new fo)}
function so(){so=AE;ro=new Bn(Zub,new to)}
function Zo(){Zo=AE;Yo=new Bn(bvb,new $o)}
function rn(){rn=AE;qn=new Bn(Fub,new sn)}
function OJ(a){return nh((CF(),a.Xc),Jvb)}
function PJ(a){return nh((CF(),a.Xc),eub)}
function fU(a,b){return !!a.r&&xib(a.r,b)}
function B_(a,b){Cib(a.n);!!b&&_hb(a.n,b)}
function sfb(a){edb.call(this,(Isb(a),a))}
function tmb(a){_lb.call(this,a);this.a=a}
function Hmb(a){pmb.call(this,a);this.a=a}
function W(a){this.j=new bb(this);this.s=a}
function Jg(a){Fg();return parseInt(a)||-1}
function afb(a,b,c){return a.substr(b,c-b)}
function Gh(a,b){return a.createElement(b)}
function Znb(a,b){return Aib(a.a,b)!=null}
function Hnb(a,b){b.$modCount=a.$modCount}
function Fp(a,b){this.a=new Rp(b);this.b=a}
function zO(a,b){Z1((ng(),mg),new DP(a,b))}
function ZQ(a,b){b?dh(a.j,zwb):sh(a.j,zwb)}
function oJ(a){if(sJ(a)){return}a.i&&uJ(a)}
function lO(a){if(a.b){sM(a.b.a);a.b=null}}
function YQ(a){if(a.c){_Q(a,a.c);a.c=null}}
function mW(a){c_(a.a,a.db,a.zb,a.bb,a.xb)}
function f0(a,b){kT(a.V.Ec);!!b&&aU(a.V,b)}
function r0(a,b){Z1((ng(),mg),new M0(a,b))}
function heb(a,b){return Yq(b,90)&&b.a==a.a}
function xV(a,b,c){return b<=a.ob&&c<=a.Sc}
function Mj(a){return a.b!=null?a.b:''+a.c}
function fj(b,a){return b.createTextNode(a)}
function lj(b,a){return b.getElementById(a)}
function vdb(a){if(a.k!=null){return}Kdb(a)}
function cF(a){ofb(a.a,pF('Fill'));return a}
function BN(a){(CF(),a.Xc).style[Iub]='1'}
function FN(a){(CF(),a.Xc).style[Iub]='0'}
function BS(a){(CF(),a.Xc).style[Iub]='2'}
function RS(a){(CF(),a.Xc).style[Iub]='2'}
function CK(b,a){BK();b.__gwt_resolve=DK(a)}
function qJ(a){if(sJ(a)){return}!a.i&&uJ(a)}
function HO(a){return !a.v||a.v&&!a.u&&!a.f}
function c6(a){return !a.C&&(a.C=gQ(a)),a.C}
function H1(b,a){return b.hasOwnProperty(a)}
function Lnb(a){this.a=new $wnd.Date(oE(a))}
function l_(a){a.d?(a.d=false):dW(a.V,true)}
function e_(a,b,c){tab(a.W,c,b);pb(a.s,200)}
function PV(a,b){a.Gb=b;a.Hb=WX(b);N5(a.Ib)}
function grb(a,b){if(arb){return}rkb(a.a,b)}
function $rb(a,b){Krb.call(this,a);this.a=b}
function Mrb(a,b){Krb.call(this,a);this.a=b}
function Rrb(a,b){Krb.call(this,a);this.a=b}
function rI(){sI.call(this,(CF(),Qi($doc)))}
function Qk(){Ak.call(this,'TABLE_ROW',15)}
function Mk(){Ak.call(this,'TABLE_CELL',13)}
function Wk(){Ak.call(this,'INLINE_FLEX',18)}
function al(){Ak.call(this,'INLINE_BLOCK',3)}
function cl(){Ak.call(this,'INLINE_TABLE',4)}
function xf(a,b){a.backingJsObject=b;uf(a,b)}
function xb(a,b){return $wnd.setTimeout(a,b)}
function bsb(a,b){return a.a.lg(new esb(b))}
function gsb(a,b){return a.a.lg(new jsb(b))}
function bg(a,b,c){return a.apply(b,c);var d}
function ar(a,b){return a&&b&&a instanceof b}
function gJ(a,b){return mJ(a,b,a.b.a.length)}
function SF(a){return CF(),TG((Fh(),a).type)}
function TK(){KK.call(this,(JK(),$doc.body))}
function VP(a){!a.K&&(a.K=a.rf());return a.K}
function hQ(a){!a.C&&(a.C=a.wf());return a.C}
function fS(a){a.k=0;a.n=0;ob(a.M);a.N=false}
function dS(a){if(!a.N){a.N=true;qb(a.M,50)}}
function t5(a,b){dh(b,dzb);a.b&&Xnb(a.a.p,b)}
function tob(a,b){var c;c=a[Tzb];c.call(a,b)}
function sob(a,b){var c;c=a[Tzb];c.call(a,b)}
function Wdb(a,b){return Isb(a),cr(a)===cr(b)}
function Peb(a,b){return Isb(a),cr(a)===cr(b)}
function Rjb(a,b){return a.a.containsValue(b)}
function wb(a,b){return $wnd.setInterval(a,b)}
function Veb(a,b,c){return a.lastIndexOf(b,c)}
function Yg(c,a,b){return c.insertBefore(a,b)}
function Hh(a,b){return a.getAttribute(b)||''}
function TV(a){return Peb(a,Vvb)||Peb(a,Wvb)}
function uj(a){return (Fh(),a).changedTouches}
function Qm(a){return _h((Fh(),a).clientX||0)}
function Rm(a){return _h((Fh(),a).clientY||0)}
function lT(a){return String.fromCharCode(a)}
function ug(a,b){a.b=xg(a.b,[b,false]);sg(a)}
function gN(a,b){(CF(),a.Xc).style[Iub]=b+''}
function ndb(a,b){kdb();return a==b?0:a?1:-1}
function c1(){b1();new Vnb;new Vnb;new Vnb}
function cn(){cn=AE;bn=new Bn('blur',new dn)}
function kn(){kn=AE;jn=new Bn('click',new ln)}
function Dn(){Dn=AE;Cn=new Bn('focus',new En)}
function Yn(){Yn=AE;Xn=new Bn('keyup',new Zn)}
function jG(){jG=AE;new qG;hG=new oG;iG=lG()}
function mp(a){var b;if(jp){b=new kp;a.td(b)}}
function sp(a){var b;if(pp){b=new qp;Cp(a,b)}}
function Bp(a,b,c){return new Sp(Ip(a.a,b,c))}
function FY(a,b,c){this.a=a;this.b=b;this.c=c}
function K0(a,b,c){this.a=a;this.b=b;this.c=c}
function Q0(a,b,c){this.a=a;this.c=b;this.b=c}
function S9(a,b,c){this.a=a;this.b=b;this.c=c}
function g4(a,b){this.a=a;this.b=h4(this.a,b)}
function qX(a,b){tX(a,a.db,a.zb,1,a.ob,a.d,b)}
function orb(a,b){if(arb){return}!!b&&(a.d=b)}
function Esb(a,b){if(!a){throw VD(new deb(b))}}
function Zbb(a,b){a.b=b;a.c=0;a.d=a.b+'.'+a.c}
function aI(a,b){a.style['verticalAlign']=b.a}
function cR(a,b){b!=null?cN(a.e,b):cN(a.e,'')}
function dR(a,b){b!=null?fN(a.e,b):fN(a.e,'')}
function KU(a,b,c){return wib(a.e,Yvb+b+Zvb+c)}
function p4(a,b,c,d){y4(a.c,(vdb(b),b.k),c,d)}
function xS(a,b,c,d,e){a.i=b;a.f=c;a.g=d;a.e=e}
function LS(a,b,c,d,e){a.t=b;a.r=c;a.s=d;a.q=e}
function kX(a){a.X=0;a.Y=0;ob(a.mc);a.nc=false}
function OV(a){!a.o&&a.k!=-1&&a.n!=-1&&N5(a.p)}
function fb(a){$wnd.cancelAnimationFrame(a.id)}
function A5(a){(OL(),OL(),ML).af((CF(),a.Xc))}
function UX(a,b){tX(a,1,a.Sc,a.bb,a.xb,a.Qc,b)}
function bL(a,b){(CF(),a.Xc)[Qvb]=b!=null?b:''}
function Lob(a,b,c){this.a=a;this.b=b;this.c=c}
function Yob(a,b,c){this.d=a;this.b=c;this.a=b}
function Ncb(a,b,c){Nj.call(this,a,b);this.a=c}
function f4(a){g4.call(this,(vdb(a),a.k),null)}
function Ok(){Ak.call(this,'TABLE_COLUMN',14)}
function kl(){Ak.call(this,'TABLE_CAPTION',8)}
function ldb(a){kdb();return Peb(ctb,typeof(a))}
function lE(a,b){return ZD(Iq(cE(a)?nE(a):a,b))}
function jE(a,b){return ZD(Gq(cE(a)?nE(a):a,b))}
function kE(a,b){return ZD(Hq(cE(a)?nE(a):a,b))}
function Hp(a,b){!a.a&&(a.a=new Akb);rkb(a.a,b)}
function yp(a){var b;if(vp){b=new wp;Cp(a.a,b)}}
function hpb(){hpb=AE;fpb=new ipb;gpb=new kpb}
function Kn(){Kn=AE;Jn=new Bn('keydown',new Ln)}
function teb(){teb=AE;seb=fq(AB,atb,90,256,0,1)}
function Wpb(a){this.b=(Isb(a),a);this.a=16464}
function Xfb(a,b){this.e=b;Rfb(this,(Isb(a),a))}
function mb(){this.a=new Akb;this.b=new yb(this)}
function Rn(){Rn=AE;Qn=new Bn('keypress',new Sn)}
function Ko(){Ko=AE;Jo=new Bn('touchend',new Lo)}
function pE(a){if(cE(a)){return a|0}return Lq(a)}
function $cb(a){if(a==null){return 0}return +a}
function rkb(a,b){a.a[a.a.length]=b;return true}
function Bsb(a,b,c){zsb(c,0,a,b,c.length,false)}
function Jp(a,b,c,d){var e;e=Mp(a,b,c);e.add(d)}
function gU(a,b){return !!a.tb&&a.tb.contains(b)}
function ub(a,b){return Ysb(function(){a.jd(b)})}
function N1(a,b){return a[0]!==b[0]||a[2]!==b[2]}
function O1(a,b){return a[1]!==b[1]||a[3]!==b[3]}
function z2(a,b){v2();w2(this);this.c=a;this.b=b}
function k$(a,b){xR(a.Q);BO(a.u);j$(a);lU(a.V,b)}
function RV(a){N5(a.lc);KV(a);IX(a);_V(a);cW(a)}
function gX(a){if(!a.nc){a.nc=true;qb(a.mc,50)}}
function CW(a){yW(a,a.yc.e,a.yc.f,a.yc.K,a.yc.L)}
function p1(a){if(!a.a.s){return -1}return a.a.a}
function qE(a){if(cE(a)){return ''+a}return Mq(a)}
function ukb(a,b){Hsb(b,a.a.length);return a.a[b]}
function glb(a,b){Fsb(b,a.length);elb(a,0,b,null)}
function N5(a){!a.c&&(a.c=new P5(a));pb(a.c,a.b)}
function DO(a){a.k=-1;a.n=-1;a.o=-1;a.p=-1;CO(a)}
function Deb(){Deb=AE;Ceb=fq(CB,atb,103,256,0,1)}
function So(){So=AE;Ro=new Bn('touchmove',new To)}
function lo(){lo=AE;ko=new Bn('mousedown',new mo)}
function VQ(){this.qb=new Vnb;this.gb=(rcb(),pcb)}
function wO(a){var b;a.c=(b=_K(a.j),b==null?'':b)}
function jW(a,b){var c;c=Bib(a.Bc,b);!!c&&eW(a,c)}
function Ddb(a,b){var c;c=Adb(a,b);c.f=2;return c}
function rX(a,b){tX(a,a.db,a.zb,a.bb,a.xb,a.kc,b)}
function U9(a,b){X9(a.a,iq(dq(GB,1),atb,1,5,[b]))}
function V9(a,b){X9(a.b,iq(dq(GB,1),atb,1,5,[b]))}
function W9(a,b){X9(a.c,iq(dq(GB,1),atb,1,5,[b]))}
function Ui(a){return (Fh(),a).createElement(Xtb)}
function Xi(a){return (Fh(),a).createElement(_tb)}
function mcb(a){return a.jb==null||a.jb.length==0}
function ncb(a){return a.nb==null||a.nb.length==0}
function hq(a){return Array.isArray(a)&&a.rg===EE}
function Xq(a){return !Array.isArray(a)&&a.rg===EE}
function kh(b,a){return b.getElementsByTagName(a)}
function aj(a){return (Fh(),a).createElement('td')}
function bj(a){return (Fh(),a).createElement('tr')}
function Dnb(a,b){return Isb(a),odb(a,(Isb(b),b))}
function Uqb(a,b){zib(a.a,(drb(),arb)?null:b.c,b)}
function qkb(a,b,c){Ksb(b,a.a.length);Asb(a.a,b,c)}
function xg(a,b){!a&&(a=[]);a[a.length]=b;return a}
function bcb(a,b){this.a=a;this.b=b;this.c='poll'}
function DL(a){this.b=a;this.a=fq(kw,atb,13,4,0,1)}
function Kk(){Ak.call(this,'TABLE_ROW_GROUP',12)}
function Ek(){Ak.call(this,'TABLE_COLUMN_GROUP',9)}
function $E(a){YE.call(this,new XE(null));this.a=a}
function QI(a){MI();OI.call(this,(uF(),new qF(a)))}
function LK(a){JK();try{a.xd()}finally{Znb(IK,a)}}
function GE(a){if(a.b){return a.b}return nqb(),eqb}
function gg(){ag();if(Yf){return}Yf=true;hg(false)}
function HJ(a){re(a,xe((CF(),a.Xc))+'-'+Hvb,false)}
function fQ(a){o2(he(a.yf()),true);!!a.q&&ob(a.q)}
function U4(a,b){Q1(b,he(c6(a.c)));UP(a.a,bB).sg()}
function gR(a,b,c){a.n=c;a.d=b;dN(a.e,b);SQ(a.g,b)}
function uV(a,b,c){return c>a.Sc&&c<=a.zb&&b<=a.ob}
function yV(a,b,c){return b>a.ob&&b<=a.xb&&c<=a.Sc}
function v$(a,b){return a.M.length>=b?a.M[b-1]:a.r}
function Aob(a,b){return !(a.a.get(b)===undefined)}
function Aib(a,b){return br(b)?Bib(a,b):lob(a.a,b)}
function AV(a){return !Peb((zk(),fub),Hj(a.style))}
function H2(a){var b;a.d=2;return b=a.a,a.a=null,b}
function TD(){if(OD==2){return new aM}return new hM}
function SD(){if(OD==2){return new ZL}return new WL}
function RD(){if(OD==2){return new AH}return new CH}
function QD(){if(OD==2){return new wH}return new tH}
function PD(){if(OD==2){return new Mi}return new si}
function u1(){k1();return $wnd.navigator.userAgent}
function Qi(a){return (Fh(),a).createElement('div')}
function Ti(a){return (Fh(),a).createElement('img')}
function s2(){s2=AE;r2=trb('spreadsheet RpcProxy')}
function Ckb(a){pkb(this);Bsb(this.a,0,a.toArray())}
function If(a){rf(this);this.f=a;tf(this);this.Hd()}
function Bpb(a,b){this.d=a;this.c=(b&64)!=0?b|qtb:b}
function kab(a,b){X9(a.B,iq(dq(GB,1),atb,1,5,[b]))}
function kbb(a,b){X9(a.R,iq(dq(GB,1),atb,1,5,[b]))}
function zq(a,b){return nq(a.l&b.l,a.m&b.m,a.h&b.h)}
function Fq(a,b){return nq(a.l|b.l,a.m|b.m,a.h|b.h)}
function Nq(a,b){return nq(a.l^b.l,a.m^b.m,a.h^b.h)}
function p_(a,b,c,d,e,f,g,h){HR(a.Q,b,c,d,e,f,g,h)}
function Jsb(a,b){if(a==null){throw VD(new Geb(b))}}
function rJ(a){if(sJ(a)){return}a.i?undefined:vJ(a)}
function pJ(a){if(sJ(a)){return}a.i?vJ(a):undefined}
function RE(a){a.a=trb('');prb(a.a);TE(a.a);SE(a.a)}
function bW(a){a.k!=-1&&a.n!=-1&&a.j!=null&&GN(a.q)}
function LF(a){CF();!!BF&&a==BF&&(BF=null);AF.Ie(a)}
function VF(a){CF();!!BF&&a==BF&&(BF=null);AF.Ie(a)}
function v1(a,b){var c,d;d=x1(a,b);c=A1(d);return c}
function XQ(a,b){return Ie(a.e,b,jp?jp:(jp=new An))}
function veb(a,b){return YD(a,b)<0?-1:YD(a,b)>0?1:0}
function c_(a,b,c,d,e){oab(a.W,b,d,c,e);pb(a.s,200)}
function o4(a,b,c,d){a.b[W3(new Y3(new f4(b),c))]=d}
function q4(a,b,c,d){a.e[W3(new Y3(new f4(b),c))]=d}
function vfb(){vfb=AE;ufb=new YE(null);new YE(null)}
function JK(){JK=AE;GK=new PK;HK=new Vnb;IK=new $nb}
function OL(){OL=AE;ML=SD();NL=Yq(ML,147)?new QL:ML}
function nI(){JH.call(this);ne(this,Ri($doc,'div'))}
function aK(){_J.call(this);this.u=true;this.v=true}
function Gk(){Ak.call(this,'TABLE_HEADER_GROUP',10)}
function Ik(){Ak.call(this,'TABLE_FOOTER_GROUP',11)}
function DI(){CI.call(this);kI(this.a,'\u25BC',true)}
function Zi(a){return (Fh(),a).createElement('span')}
function jh(a){return (Fh(),a).getAttribute(qub)||''}
function ke(a){return (CF(),a.Xc).style.display!=fub}
function xT(a,b){(CF(),a.Xc).style[hub]=b+(hm(),Kvb)}
function kb(a,b){ykb(a.a,b);a.a.a.length==0&&ob(a.b)}
function UJ(a,b){a.w=b;SJ(a);b.length==0&&(a.w=null)}
function YJ(a,b){a.A=b;SJ(a);b.length==0&&(a.A=null)}
function SO(a,b){b.length==0?bL(a.j,b):bL(a.j,'='+b)}
function x$(a,b){return !!a.v&&vkb(a.v,reb(b),0)!=-1}
function y$(a,b){return !!a.w&&vkb(a.w,reb(b),0)!=-1}
function Eq(a){return nq(~a.l&fvb,~a.m&fvb,~a.h&jtb)}
function q1(a){return a.a.t==5&&(a.a.u==3||a.a.u==4)}
function oh(b,a){return b[a]==null?null:String(b[a])}
function ilb(a){return new $rb(null,hlb(a,a.length))}
function tib(a,b){return br(b)?xib(a,b):!!job(a.a,b)}
function hlb(a,b){return Apb(b,a.length),new Spb(a,b)}
function ysb(a,b){var c;c=a.slice(0,b);return jq(c,a)}
function c$(a,b,c,d){var e;e=new zT(c,d);_T(a.V,b,e)}
function n5(a,b){a.a.e=a.c+(a.b-a.c)*b;h5(a.a,a.a.e)}
function $P(a,b){if(a.H==b){return}a.H=b;ulb();Flb()}
function Cib(a){a.a=new mob(a);a.b=new Eob(a);Inb(a)}
function _nb(a){this.a=new Wnb(a.size());Ihb(this,a)}
function Xkb(a){Msb(a.b!=-1);xkb(a.c,a.a=a.b);a.b=-1}
function Y2(a){U2(a);N2((!I2&&(I2=new S2),I2),a.a.c)}
function AG(a,b){return Bp((!tG&&(tG=new RG),tG),a,b)}
function cj(a){return (Fh(),a).createElement('table')}
function $i(a){return (Fh(),a).createElement('style')}
function _i(a){return (Fh(),a).createElement('tbody')}
function Vi(a){return (Fh(),Eh).Od(a,Eub,false,false)}
function RJ(a){return !Peb(Uub,Jj((CF(),a.Xc).style))}
function XZ(a){!Peb(Uub,Jj((CF(),a.Xc).style))&&hN(a)}
function uT(a,b){(CF(),a.Xc).style[gub]=b+(hm(),'pt')}
function Hgb(a,b,c){mgb();this.e=a;this.d=b;this.a=c}
function xN(){MJ();_J.call(this);YM(this);gN(this,UM)}
function yN(){MJ();aK.call(this);YM(this);gN(this,UM)}
function B$(a){a.C?k$(a,false):(a.C=true);D$(a,a.a-1)}
function $O(a){a.f=false;a.e=null;a.q=-1;a.s=-1;DO(a)}
function dI(a){if(a.bb){return a.bb.ud()}return false}
function Isb(a){if(a==null){throw VD(new Eeb)}return a}
function tbb(a){var b;b=[];mpb(a,new ubb(b));return b}
function Bdb(a,b,c){var d;d=Adb(a,b);Odb(c,d);return d}
function Adb(a,b){var c;c=new ydb;c.g=a;c.d=b;return c}
function Xnb(a,b){var c;c=yib(a.a,b,a);return c==null}
function cX(a,b,c){var d,e;d=b+10;e=c-25;eN(a.Xb,d,e)}
function iU(a){var b;b=cU(a);xU(a,new Akb,a.bb,a.xb,b)}
function ig(a){$wnd.setTimeout(function(){throw a},0)}
function Si(a){return (Fh(),a).createElement('iframe')}
function Pi(a){return (Fh(),a).createElement('canvas')}
function Yi(a){return (Fh(),a).createElement('select')}
function opb(a,b){return cr(a)===cr(b)||a!=null&&M(a,b)}
function $I(a,b){ZI(a,b);return _I(Fj((CF(),a.Xc))[b])}
function Xl(){Vl();return iq(dq(Nt,1),atb,93,0,[Tl,Ul])}
function xm(){vm();return iq(dq($t,1),atb,94,0,[um,tm])}
function nG(a,b){return Bp(a.a,(!vp&&(vp=new An),vp),b)}
function zG(a){yG();CG();return AG(jp?jp:(jp=new An),a)}
function XP(a){if(!a.tf().ob){return false}return true}
function Irb(a){if(!a.b){Jrb(a);a.c=true}else{Irb(a.b)}}
function Mpb(a,b){Isb(b);while(a.c<a.d){Rpb(a,b,a.c++)}}
function gZ(a,b,c){a.e=b;M_((!a.C&&(a.C=new x0),a.C),c)}
function n4(a,b,c){a.b[W3(new Y3(new f4(b),'!new'))]=c}
function vZ(a,b,c,d,e,f,g,h){p_(hQ(a.a),b,c,d,e,f,g,h)}
function q_(a,b,c,d,e,f,g,h,i){IR(a.Q,b,c,d,e,f,g,h,i)}
function KK(a){JH.call(this);oe(this,(CF(),a));Ke(this)}
function zI(a){oe(this,(CF(),a));this.a=new lI(this.Xc)}
function Tob(){this.a=new epb;this.c=new epb;Sob(this)}
function T2(a){this.a=new Akb;this.c='__eager';this.b=a}
function L2(a){var b;b=a.a['__eager'];b.d==0&&G2(b,a.c)}
function EV(a){return !!a.T&&xib(a.T,Yvb+a.rc+Zvb+a.sc)}
function vib(a,b){return br(b)?wib(a,b):gib(job(a.a,b))}
function Unb(a,b){return cr(a)===cr(b)||a!=null&&M(a,b)}
function F1(b,a){return Object.hasOwnProperty.call(b,a)}
function r$(a,b){return b>0&&a.g.length>=b?a.g[b-1]:a.q}
function efb(a){return String.fromCharCode.apply(null,a)}
function kfb(a,b){a.a+=String.fromCharCode(b);return a}
function k5(a,b){X4();var c;c=new w5;u5(c,a,b);return c}
function Edb(a,b){var c;c=Adb('',a);c.j=b;c.f=1;return c}
function dab(a,b){X9(a.p,iq(dq(GB,1),atb,1,5,[reb(b)]))}
function jab(a,b){X9(a.A,iq(dq(GB,1),atb,1,5,[reb(b)]))}
function nab(a,b){X9(a.D,iq(dq(GB,1),atb,1,5,[reb(b)]))}
function qab(a,b){X9(a.L,iq(dq(GB,1),atb,1,5,[reb(b)]))}
function Cab(a,b){X9(a.Q,iq(dq(GB,1),atb,1,5,[tbb(b)]))}
function Neb(a,b){Osb(b,a.length);return a.charCodeAt(b)}
function QJ(a){if(!a.M){return}uK(a.L,false,false);mp(a)}
function dj(a){return (Fh(),a).createElement('textarea')}
function bf(a,b){b?$e.af((CF(),a.Xc)):$e.$e((CF(),a.Xc))}
function w5(){this.b=s1((k1(),!j1&&(j1=new t1),k1(),j1))}
function JE(){HE(this,new WE(true));IE(this,(nqb(),eqb))}
function xM(a,b,c,d){this.a=a;this.d=b;this.c=c;this.b=d}
function RM(a,b,c,d){this.d=a;this.a=b;this.c=c;this.b=d}
function r6(a,b,c,d){this.a=a;this.b=b;this.c=c;this.d=d}
function bY(a,b,c,d){this.a=a;this.d=b;this.b=c;this.c=d}
function dY(a,b,c,d){this.a=a;this.d=b;this.b=c;this.c=d}
function Spb(a,b){this.c=0;this.d=b;this.b=17488;this.a=a}
function Vcb(a,b,c){Tcb(this);this.c=a;this.b=b;this.a=c}
function Krb(a){if(!a){this.b=null;new Akb}else{this.b=a}}
function Yrb(a,b){Jrb(a);return new Rrb(a,new hsb(b,a.a))}
function Wrb(a,b){Jrb(a);return new $rb(a,new msb(b,a.a))}
function Xrb(a,b){Jrb(a);return new Mrb(a,new csb(b,a.a))}
function yib(a,b,c){return br(b)?zib(a,b,c):kob(a.a,b,c)}
function GV(a,b){return b==a.c||b==a.Nc||b==a.Pc||b==a.zc}
function ygb(a){var b;b=a.a[0];return a.e>0||b==ptb?b:-b}
function ah(a){var b;b=Jh((Fh(),a));!!b&&b.removeChild(a)}
function b6(){var a;a=null;a+=(acb(),'?v='+_bb);return a}
function Fg(){Fg=AE;var a,b;b=!Lg();a=new Tg;Eg=b?new Mg:a}
function ulb(){ulb=AE;rlb=new ylb;slb=new Plb;tlb=new Xlb}
function Xsb(){if(Ssb==256){Rsb=Tsb;Tsb=new K;Ssb=0}++Ssb}
function SE(a){var b,c;b=new JE;grb(a,b);c=new LE;grb(a,c)}
function hH(a){var b;b=(Fh(),Eh).Td(a);b[Avb]=a.type;gH(a)}
function Db(a,b){Jb((Cc(),Bc),a,iq(dq(MB,1),stb,2,6,[b]))}
function w7(a,b,c){f1(a.e.D,c,Hh((Fh(),b),'resource-'+c))}
function tZ(a,b,c,d,e,f,g,h,i){q_(hQ(a.a),b,c,d,e,f,g,h,i)}
function Bib(a,b){return b==null?lob(a.a,null):Dob(a.b,b)}
function rG(a){return $wnd.decodeURI(a.replace('%23','#'))}
function X1(a){if(!a){return otb}return Y1(a)+' ('+a.G+')'}
function r1(a){if(a.a.b==8){return a.a.c>=0}return a.a.b>8}
function Sob(a){a.a.a=a.c;a.c.b=a.a;a.a.b=a.c.a=null;a.b=0}
function uM(a,b,c){this.a=a;this.d=b;this.c=null;this.b=c}
function vM(a,b,c){this.a=a;this.d=b;this.c=null;this.b=c}
function Jeb(a,b,c){this.a=btb;this.d=a;this.b=b;this.c=c}
function o5(a,b,c){this.a=a;this.c=b;this.b=c;V.call(this)}
function bT(a,b){if(!a.a.f){NW(a.b,true);J$(a.b.a)}Dj(b.a)}
function XD(a,b){return ZD(zq(cE(a)?nE(a):a,cE(b)?nE(b):b))}
function iE(a,b){return ZD(Fq(cE(a)?nE(a):a,cE(b)?nE(b):b))}
function rE(a,b){return ZD(Nq(cE(a)?nE(a):a,cE(b)?nE(b):b))}
function cq(){aq();return iq(dq(Mu,1),atb,109,0,[_p,$p,Zp])}
function oc(a,b){Jb((Cc(),Ac),a,iq(dq(Nr,1),atb,175,0,[b]))}
function LE(){HE(this,new WE(false));IE(this,(nqb(),eqb))}
function Bl(){Bl=AE;Al=new El;zl=new Fl;xl=new Gl;yl=new Hl}
function ql(){ql=AE;pl=new tl;nl=new ul;ol=new vl;ml=new wl}
function Ml(){Ml=AE;Il=new Pl;Jl=new Ql;Kl=new Rl;Ll=new Sl}
function nL(){nL=AE;jL=new qL;kL=new rL;lL=new sL;mL=new tL}
function X4(){X4=AE;V4=q1((k1(),!j1&&(j1=new t1),k1(),j1))}
function iO(a){a.a.C&&X9(a.a.a.W.n,iq(dq(GB,1),atb,1,5,[]))}
function mbb(a,b,c){X9(a.T,iq(dq(GB,1),atb,1,5,[reb(b),c]))}
function $N(a,b){if(a.b){a.pf(0);a.f||a.mf(b)}else{a.pf(b)}}
function sN(a){if(a.r){W1(a.r);return a.q}else{return null}}
function Vpb(a){if(!a.d){a.d=new Ykb(a.b);a.c=a.b.a.length}}
function krb(a,b){if(!_qb){return}mrb(a,(nqb(),jqb),b,null)}
function qrb(a,b){if(!brb){return}mrb(a,(nqb(),lqb),b,null)}
function rrb(a,b){if(!crb){return}mrb(a,(nqb(),mqb),b,null)}
function xib(a,b){return b==null?!!job(a.a,null):Aob(a.b,b)}
function xlb(a){ulb();return Yq(a,180)?new Anb(a):new tmb(a)}
function e2(a){b2();var b,c;b=m2(a);c=n2(a);return d2(b,c)}
function NH(a,b){var c;c=IH(a,b);c&&OH((CF(),b.Xc));return c}
function F6(a,b){var c;c=a.Of();Object.assign(c,b);return c}
function yf(a,b){var c;c=wdb(a.pg);return b==null?c:c+': '+b}
function Inb(a){var b,c;c=a;b=c.$modCount|0;c.$modCount=b+1}
function wV(a,b,c){return b>=a.bb&&b<=a.xb&&c>=a.db&&c<=a.zb}
function c4(a,b,c){this.b=b;this.c=xlb(new klb(c));this.a=a}
function C6(a,b,c,d){this.b=a;this.c=b;B6(this,c);A6(this,d)}
function Qp(a,b,c,d){a.b>0?Hp(a,new xM(a,b,c,d)):Lp(a,b,c,d)}
function RW(a,b){oX(a,HU(a),b);FX(a,b);a.tb=VV(b,a.tb);pX(a)}
function hh(a){return (Fh(),Eh).Xd(a)+((a.offsetWidth||0)|0)}
function dr(a){return Math.max(Math.min(a,ftb),-2147483648)|0}
function aib(a,b){return b===a?'(this Map)':b==null?otb:DE(b)}
function Zcb(a,b){if(a==null){return b==null}return Peb(a,b)}
function Idb(a){if(a.Vf()){return null}var b=a.j;return xE[b]}
function BE(a){function b(){}
;b.prototype=a||{};return new b}
function fh(a){return (Fh(),Eh).Yd(a)+((a.offsetHeight||0)|0)}
function Ie(a,b,c){return Bp(!a.Vc?(a.Vc=new Ep(a)):a.Vc,c,b)}
function sl(){ql();return iq(dq(At,1),atb,62,0,[pl,nl,ol,ml])}
function Dl(){Bl();return iq(dq(Ft,1),atb,63,0,[Al,zl,xl,yl])}
function Ol(){Ml();return iq(dq(Kt,1),atb,64,0,[Il,Jl,Kl,Ll])}
function pL(){nL();return iq(dq(fw,1),atb,65,0,[jL,kL,lL,mL])}
function Gcb(){Ecb();return iq(dq($A,1),atb,142,0,[Ccb,Dcb])}
function mG(){jG();var a;a=lG();if(!Peb(a,iG)){iG=a;yp(hG)}}
function MK(){JK();try{UH(IK,GK)}finally{Cib(IK.a);Cib(HK)}}
function rM(b,c,d){try{b.setSelectionRange(c,c+d)}catch(a){}}
function YO(b,c,d){try{b.setSelectionRange(c,c+d)}catch(a){}}
function pM(b){try{return b.selectionStart}catch(a){return 0}}
function WV(a,b){if(b){Cib(b);!!a&&_hb(b,a)}else{b=a}return b}
function d1(a){if(!a.b){a.b=new a$;dN(a.b,hQ(a.d))}return a.b}
function mU(a){kT(a.Dc);if(a.pb){kT(a.pb);ah(a.pb);a.pb=null}}
function gp(a,b){var c;if(dp){c=new ep(b);!!a.Vc&&Cp(a.Vc,c)}}
function inb(a,b){var c;for(c=0;c<b;++c){a[c]=new tnb(a[c])}}
function Vrb(a,b){var c;return Zrb(a,new Akb,(c=new usb(b),c))}
function Apb(a,b){if(0>a||a>b){throw VD(new jdb(Btb+a+Ctb+b))}}
function Ksb(a,b){if(a<0||a>b){throw VD(new idb(Dtb+a+Etb+b))}}
function LT(a,b){if(!a)return;(Fh(),Eh).ee(a,b);a.title=b||''}
function jI(a){var b;b=a.c?lh(a.a):a.a;return (Fh(),Eh).ae(b)}
function RO(a){a.t.Z?pb(new xP(a),100):Z1((ng(),mg),new zP(a))}
function dX(a,b,c,d){a.Zb=false;Z1((ng(),mg),new dY(a,b,c,d))}
function fX(a,b,c,d){a.Zb=false;Z1((ng(),mg),new bY(a,b,c,d))}
function s_(a,b){if(!a.f){a.f=b}else{Cib(a.f);!!b&&_hb(a.f,b)}}
function A_(a,b){if(!a.k){a.k=b}else{Cib(a.k);!!b&&_hb(a.k,b)}}
function a0(a,b){if(!a.N){a.N=b}else{Cib(a.N);!!b&&_hb(a.N,b)}}
function TP(a,b){if(!a.I){return ulb(),ulb(),rlb}return a.I[b]}
function g5(a,b){a.a=b;if(V4){b+=a.n;h5(a,-b)}else{h5(a,-a.a)}}
function Pib(a,b){if(Yq(b,100)){return Zhb(a.a,b)}return false}
function wib(a,b){return b==null?gib(job(a.a,null)):Bob(a.b,b)}
function Web(a){return (new RegExp('^([^A-z0-9:!])$')).test(a)}
function w4(a){return (!I2&&(I2=new S2),I2).c.d[(new f4(a)).b]}
function MF(a){CF();return a.__gwt_resolve?a.__gwt_resolve():a}
function Arb(){yrb();return iq(dq(tD,1),atb,86,0,[vrb,wrb,xrb])}
function Ch(a){if(bh(a)){return !!a&&a.nodeType==1}return false}
function $g(a){while(a.lastChild){a.removeChild(a.lastChild)}}
function tN(){aK.call(this);this.I=false;YM(this);gN(this,UM)}
function Lf(a,b){rf(this);this.e=b;this.f=a;tf(this);this.Hd()}
function lI(a){this.a=a;this.c=false;this.b=Xp(a);this.d=this.b}
function OH(a){a.style[Cvb]='';a.style[Dvb]='';a.style[zub]=''}
function HH(a,b,c){Ne(b);yL(a.o,b);CF();Vg(c,MF(b.Xc));Pe(b,a)}
function FM(a,b,c,d){if(!Peb(a.b,c)){a.b=c;a.gf()}a.f=d;EM(a,b)}
function pfb(a,b,c){a.a=afb(a.a,0,b)+(''+c)+_eb(a.a,b);return a}
function Y9(a,b,c){X9(a.e,iq(dq(GB,1),atb,1,5,[reb(b),reb(c)]))}
function ak(){$j();return iq(dq(bt,1),atb,54,0,[Yj,Wj,Vj,Xj,Zj])}
function Jm(){Hm();return iq(dq(eu,1),atb,55,0,[Cm,Dm,Em,Fm,Gm])}
function zib(a,b,c){return b==null?kob(a.a,null,c):Cob(a.b,b,c)}
function Pob(a,b){Isb(b);while(a.a<a.c.a.length){vsb(b,Wkb(a))}}
function Osb(a,b){if(a<0||a>=b){throw VD(new tfb(Dtb+a+Etb+b))}}
function Hsb(a,b){if(a<0||a>=b){throw VD(new idb(Dtb+a+Etb+b))}}
function U_(a,b){if(!a.G){a.G=b}else{Cib(a.G.a);!!b&&Ihb(a.G,b)}}
function V_(a,b){if(!a.H){a.H=b}else{Cib(a.H.a);!!b&&Ihb(a.H,b)}}
function K1(a,b){if(a.b!=b){a.b=b;return true}else{return false}}
function L1(a,b){if(a.e!=b){a.e=b;return true}else{return false}}
function iob(a,b){var c;c=a.a.get(b);return c==null?new Array:c}
function Gdb(a,b){var c=a.a=a.a||[];return c[b]||(c[b]=a.Qf(b))}
function VG(a){var b=a.__listener;return !_q(b)&&Yq(b,9)?b:null}
function BG(a){yG();CG();DG();return AG((!pp&&(pp=new An),pp),a)}
function Qf(a){Of();Mf.call(this,a);this.a='';this.b=a;this.a=''}
function e5(a,b){var c;if(!W4&&Aj(b.a).length==1){c=b.a;_4(a,c)}}
function xH(a,b){for(var c in a){a.hasOwnProperty(c)&&b(c,a[c])}}
function fab(a,b,c){X9(a.r,iq(dq(GB,1),atb,1,5,[reb(b),reb(c)]))}
function cab(a,b,c){X9(a.o,iq(dq(GB,1),atb,1,5,[reb(b),reb(c)]))}
function gab(a,b,c){X9(a.s,iq(dq(GB,1),atb,1,5,[reb(b),reb(c)]))}
function iab(a,b,c){X9(a.w,iq(dq(GB,1),atb,1,5,[reb(b),reb(c)]))}
function lab(a,b,c){X9(a.H,iq(dq(GB,1),atb,1,5,[reb(b),reb(c)]))}
function mab(a,b,c){X9(a.I,iq(dq(GB,1),atb,1,5,[reb(b),reb(c)]))}
function pab(a,b,c){X9(a.K,iq(dq(GB,1),atb,1,5,[reb(b),reb(c)]))}
function rab(a,b,c){X9(a.M,iq(dq(GB,1),atb,1,5,[reb(b),reb(c)]))}
function tab(a,b,c){X9(a.O,iq(dq(GB,1),atb,1,5,[reb(b),reb(c)]))}
function lbb(a,b,c){X9(a.S,iq(dq(GB,1),atb,1,5,[reb(b),reb(c)]))}
function Qbb(){Obb();return iq(dq(OA,1),atb,120,0,[Lbb,Nbb,Mbb])}
function kcb(){icb();return iq(dq(SA,1),atb,116,0,[gcb,hcb,fcb])}
function tcb(){rcb();return iq(dq(WA,1),atb,111,0,[qcb,pcb,ocb])}
function mf(a,b){return !!a&&!!a.equals?a.equals(b):cr(a)===cr(b)}
function $U(a,b){return y$(a.a,b)?0:b>=a.W.length?QU(a):a.W[b-1]}
function FZ(a,b,c){if(VP(a.a).u){a.a.g=b;a.a.f=null;dab(a.a.i,c)}}
function GZ(a,b,c){if(VP(a.a).u){a.a.g=b;a.a.f=null;qab(a.a.i,c)}}
function sU(a){var b;b=JU(a,a.rc,a.sc);a.nb=null;!!b&&sh(b.d,$wb)}
function FV(a){var b;b=KU(a,a.rc,a.sc);return !!b&&b.isPercentage}
function oE(a){var b;if(cE(a)){b=a;return b==-0.?0:b}return Kq(a)}
function l$(a,b){var c,d;c=a>0?q$(a):'';d=b>0?''+b:'';return c+d}
function Wkb(a){Gsb(a.a<a.c.a.length);a.b=a.a++;return a.c.a[a.b]}
function j$(a){if(a.J){while(0<a.J.a.length){hW(a.V,xkb(a.J,0))}}}
function ZJ(a){if(a.M){return}else a.Tc&&Ne(a);uK(a.L,true,false)}
function U$(a,b){a.t&&(a.c=false,Z1((ng(),mg),new Q0(a,b,false)))}
function csb(a,b){Fpb.call(this,b.jg(),b.ig()&-6);Isb(a);this.a=b}
function hsb(a,b){Ipb.call(this,b.jg(),b.ig()&-6);Isb(a);this.a=b}
function Zqb(a,b){this.a=a;this.d=b;this.c=(vfb(),aE(Date.now()))}
function Bjb(a,b,c){Lsb(b,c,a.size());this.c=a;this.a=b;this.b=c-b}
function qjb(a){Msb(a.c!=-1);a.d.removeAtIndex(a.c);a.b=a.c;a.c=-1}
function Yeb(a,b,c){c=gfb(c);return a.replace(new RegExp(b,'g'),c)}
function uF(){uF=AE;new RegExp('%5B','g');new RegExp('%5D','g')}
function aP(a){var b;E$(a.t,Yeb((b=_K(a.a),b==null?'':b),' ',''))}
function JT(a,b){a.j=b;a.a.style[Gub]=(b?(zk(),ok):(zk(),kk)).je()}
function JS(a,b){a.k.style[gub]=b+(hm(),Kvb);a.u.style[gub]=b+Kvb}
function Z1(a,b){++a.a;a.b=xg(a.b,[b,false]);sg(a);ug(a,new _1(a))}
function Gnb(a,b){if(b.$modCount!=a.$modCount){throw VD(new Jnb)}}
function GM(a){if(!a.a){a.a=Qi($doc);a.a.className=Vvb;Vg(a.d,a.a)}}
function HM(a){if(!a.e){a.e=Qi($doc);a.e.className=Wvb;Vg(a.d,a.e)}}
function rh(a,b){var c;b=Dh(b);c=Bh(a.className||'',b);return c!=-1}
function Cdb(a,b,c,d){var e;e=Adb(a,b);Odb(c,e);e.f=d?8:0;return e}
function uU(a,b,c,d){var e;e=Yvb+c+Zvb+d;zib(a.r,e,b);p0(a.a,b,c,d)}
function Kh(a,b){var c;return ph((c=a._d(b),c?c:b.documentElement))}
function bh(b){try{return !!b&&!!b.nodeType}catch(a){return false}}
function Af(b){if(!('stack' in b)){try{throw b}catch(a){}}return b}
function VV(a,b){if(b){b.clear();!!a&&b.addAll(a)}else{b=a}return b}
function LV(a,b){!!a.gb&&FN(a.gb);(CF(),b.Xc).style[Iub]='1';a.gb=b}
function eV(a){return iq(dq(hr,1),ixb,17,15,[a.db,a.bb,a.zb,a.xb])}
function Ocb(){Mcb();return iq(dq(aB,1),atb,98,0,[Kcb,Lcb,Jcb,Icb])}
function job(a,b){var c;return hob(b,iob(a,b==null?0:(c=Q(b),c|0)))}
function LW(a,b){b?sh(a.Fc,'nogrid'):dh(a.Fc,'nogrid');a.Db&&RX(a)}
function GU(a,b){b?Z1((ng(),mg),new lY(a)):(a.zc.focus(),undefined)}
function fg(a){a&&pg((ng(),mg));--Xf;if(a){if(_f!=-1){kg(_f);_f=-1}}}
function hN(a){VM=a;_M(a);a.F?T(new D6(a),200,Wf()):aN(a,1);VM=null}
function ab(a,b){U(a.a,b)?(a.a.q=a.a.s.gd(a.a.j,a.a.n)):(a.a.q=null)}
function pgb(a){while(a.d>0&&a.a[--a.d]==0);a.a[a.d++]==0&&(a.e=0)}
function vjb(a,b){this.a=a;rjb.call(this,a);Ksb(b,a.size());this.b=b}
function XY(a,b,c,d,e){this.g=a;this.b=b;this.c=d;this.d=e;this.a=c}
function oob(a){this.e=a;this.b=this.e.a.entries();this.a=new Array}
function ZO(a){a.v=true;zO(a,a.w);dP(a,true);Z1((ng(),mg),new tP(a))}
function CL(a,b){var c;c=zL(a,b);if(c==-1){throw VD(new npb)}BL(a,c)}
function MU(a,b,c){var d;d=wib(a.e,Yvb+b+Zvb+c);return !d?'':d.value}
function GW(a,b,c){MX(a,HU(a),b);EX(a,b);a.r=WV(b,a.r);a.i=WV(c,a.i)}
function aab(a,b,c,d){X9(a.j,iq(dq(GB,1),atb,1,5,[reb(b),reb(c),d]))}
function obb(a,b,c,d){X9(a.V,iq(dq(GB,1),atb,1,5,[b,reb(c),reb(d)]))}
function QQ(a,b){(CF(),a.Xc).style[Gub]=(b?(zk(),ok):(zk(),gk)).je()}
function ob(a){if(!a.j){return}++a.g;a.i?sb(a.j.a):tb(a.j.a);a.j=null}
function qF(a){if(a==null){throw VD(new Geb('uri is null'))}this.a=a}
function eF(a){if(a==null){throw VD(new Geb('html is null'))}this.a=a}
function qj(a){return Peb(a.compatMode,tub)?a.documentElement:a.body}
function DK(a){return function(){this.__gwt_resolve=EK;return a.nd()}}
function nT(a,b){return a.sheet.insertRule(b,a.sheet.cssRules.length)}
function NW(a,b){b?Ae((CF(),a.Xc),txb,false):Ae((CF(),a.Xc),txb,true)}
function EZ(a,b,c,d){if(VP(a.a).u){a.a.f=b;a.a.g=null;gab(a.a.i,d,c)}}
function Ecb(){Ecb=AE;Ccb=new Fcb('ALERT',0);Dcb=new Fcb('STATUS',1)}
function drb(){drb=AE;arb=false;$qb=true;_qb=true;crb=true;brb=true}
function EK(){throw 'A PotentialElement cannot be resolved twice.'}
function KI(){KI=AE;new LI('bottom');new LI('middle');JI=new LI(Dvb)}
function Hm(){Hm=AE;Cm=new Km;Dm=new Lm;Em=new Mm;Fm=new Nm;Gm=new Om}
function $j(){$j=AE;Yj=new bk;Wj=new ck;Vj=new dk;Xj=new ek;Zj=new fk}
function o6(a,b){this.a=a;this.f=new F4(this);this.c=b;this.b='click'}
function f6(){BQ.call(this);this.a=null;new o6(this,this);this.b=null}
function iL(a){gL.call(this,a);(CF(),this.Xc).className='gwt-TextBox'}
function ZI(a,b){if(b<0||b>=Fj((CF(),a.Xc)).length){throw VD(new hdb)}}
function R1(a,b){return a-(Fh(),Eh).Xd(b)+Eh.be(b)+nj(b.ownerDocument)}
function A1(a){var b=parseInt(a,10);if(isNaN(b))return 0;else return b}
function cV(a){var b;b=wib(a.e,Yvb+a.rc+Zvb+a.sc);return !b?'':b.value}
function trb(a){drb();if(arb){return new srb(null)}return Vqb(Xqb(),a)}
function Oeb(a,b){var c;c=b.length;return Peb(a.substr(a.length-c,c),b)}
function BI(a){var b;zI.call(this,(b=a,Qeb('span',(Fh(),a).tagName),b))}
function s4(a,b,c){var d;d=!c?null:(vdb(c),c.k);A4(a.c,(vdb(b),b.k),d)}
function NM(a,b,c){this.n=a;this.c=b;this.k=c;this.d=Qi($doc);KM(this)}
function Gob(a){this.d=a;this.b=this.d.a.entries();this.a=this.b.next()}
function _F(a){a.e=false;a.f=null;a.a=false;a.b=false;a.c=true;a.d=null}
function zM(a){!!a.a&&Vg(a.d,a.a);!!a.e&&Vg(a.d,a.e);!!a.j&&Vg(a.d,a.j)}
function gj(a){!a.gwt_uid&&(a.gwt_uid=1);return 'gwt-uid-'+a.gwt_uid++}
function Wf(){if(Date.now){return Date.now()}return (new Date).getTime()}
function dg(b){ag();return function(){return eg(b,this,arguments);var a}}
function Bcb(){zcb();return iq(dq(YA,1),atb,77,0,[wcb,ycb,vcb,ucb,xcb])}
function tgb(a,b){var c;for(c=a.d-1;c>=0&&a.a[c]===b[c];c--);return c<0}
function dU(a){var b,c;c=0;for(b=1;b<a.db-a.Sc;b++){c+=a.W[b-1]}return c}
function Jh(a){var b=a.parentNode;(!b||b.nodeType!=1)&&(b=null);return b}
function n1(){var a=$wnd.document.documentMode;if(!a)return -1;return a}
function tf(a){if(a.k){a.backingJsObject!==ktb&&a.Hd();a.i=null}return a}
function wkb(a,b,c){for(;c>=0;--c){if(opb(b,a.a[c])){return c}}return -1}
function Zeb(a,b,c){var d;c=gfb(c);d=new RegExp(b);return a.replace(d,c)}
function Qob(a,b,c,d){var e;e=new epb;e.c=b;e.b=c;e.a=d;d.b=c.a=e;++a.b}
function i5(a,b,c,d){if(b>0){a.r=true;a.i=new o5(a,c,d);T(a.i,b,Wf())}}
function H$(a,b){a.B&&!a.u.f&&(a.c=false,Z1((ng(),mg),new Q0(a,b,true)))}
function M$(a,b,c,d){if(a.R){(c!=a.V.rc||d!=a.V.sc)&&n$(a);EZ(a.R,b,c,d)}}
function gS(a){a.N&&fS(a);R$(a.Q.a,a.Q.rc,a.U,a.Q.sc,a.V);a.o=false;cS(a)}
function o_(a){YW(a.V,1,1);d_(a,a.i,a.O);R$(a,1,a.i,1,a.O);t0(a,1,1,null)}
function le(a,b){re(a,xe((MJ(),LJ).df((CF(),CF(),lh(a.Xc))))+'-'+b,false)}
function CI(){BI.call(this,Qi($doc));(CF(),this.Xc).className='gwt-HTML'}
function t4(){this.a={};this.f={};this.d={};this.e={};this.b={};this.c={}}
function aqb(a,b){this.b=', ';this.d=a;this.e=b;this.c=this.d+(''+this.e)}
function srb(a){drb();if(arb){return}this.c=a;this.e=true;this.a=new Akb}
function msb(a,b){Lpb.call(this,b.jg(),b.ig()&-6);Isb(a);this.a=a;this.b=b}
function xkb(a,b){var c;c=(Hsb(b,a.a.length),a.a[b]);Csb(a.a,b,1);return c}
function cU(a){var b,c;c=0;for(b=1;b<a.bb-a.ob;b++){c+=r$(a.a,b)}return c}
function lq(a){var b,c,d;b=a&fvb;c=a>>22&fvb;d=a<0?jtb:0;return nq(b,c,d)}
function HV(a){var b;b=new Akb;rkb(b,a.sb);skb(b,PU(a));return new Ykb(b)}
function PE(){var a;RE(NE);if(!pf){a=trb((vdb(Ru),Ru.k));qf(new QE(a))}}
function qG(){var a;a=Ysb(mG);$wnd.addEventListener('hashchange',a,false)}
function k1(){k1=AE;var a;a=m1((!j1&&(j1=new t1),j1));JK();re(NK(),a,true)}
function thb(a,b,c,d){var e;e=fq(hr,ixb,17,b,15,1);uhb(e,a,b,c,d);return e}
function nbb(a,b,c,d){X9(a.U,iq(dq(GB,1),atb,1,5,[reb(b),reb(c),reb(d)]))}
function urb(a,b,c,d){Isb(a);Isb(b);Isb(c);Isb(d);return new Brb(b,new cqb)}
function Cgb(a,b){if(b==0||a.e==0){return a}return b>0?Wgb(a,b):Zgb(a,-b)}
function Dgb(a,b){if(b==0||a.e==0){return a}return b>0?Zgb(a,b):Wgb(a,-b)}
function Nsb(a,b,c){if(a<0||b>c||b<a){throw VD(new tfb(Ftb+a+Gtb+b+Ctb+c))}}
function _pb(a,b){!a.a?(a.a=new sfb(a.d)):ofb(a.a,a.b);mfb(a.a,b);return a}
function zL(a,b){var c;for(c=0;c<a.c;++c){if(a.a[c]==b){return c}}return -1}
function LU(a,b,c){var d;d=wib(a.e,Yvb+b+Zvb+c);return !d?'':d.formulaValue}
function gH(a){var b;b=kH(a);if(!b){return}EF(a,b.nodeType!=1?null:b,VG(b))}
function SJ(a){var b;b=a.O;if(b){a.w!=null&&b.od(a.w);a.A!=null&&b.qd(a.A)}}
function Z$(a){var b,c;b=ph(a.V.zc);c=(a.V.zc.scrollTop||0)|0;lbb(a.W,b,c)}
function Qe(a,b){a.Uc==-1?PF((CF(),a.Xc),b|(a.Xc.__eventBits||0)):(a.Uc|=b)}
function EN(a){jI(a.a).length==0?De((CF(),a.Xc),false):De((CF(),a.Xc),true)}
function OI(a){NI(this,new XI(this,a));(CF(),this.Xc).className='gwt-Image'}
function Tdb(a){return Peb(dtb,typeof(a))||ar(a,$wnd.java.lang.Number$impl)}
function jm(){hm();return iq(dq(Xt,1),atb,34,0,[gm,em,_l,am,fm,dm,bm,$l,cm])}
function JF(b){CF();try{return !!b&&!!b.__gwt_resolve}catch(a){return false}}
function qM(b){try{return b.selectionEnd-b.selectionStart}catch(a){return 0}}
function c2(){b2();$wnd.getSelection&&$wnd.getSelection().removeAllRanges()}
function Bkb(a){pkb(this);Esb(a>=0,'Initial capacity must not be negative')}
function Npb(a,b){Isb(b);if(a.c<a.d){Rpb(a,b,a.c++);return true}return false}
function VU(a,b,c){var d;d=wib(a.e,Yvb+b+Zvb+c);return !d?'':d.originalValue}
function ohb(a,b,c,d){var e;e=fq(hr,ixb,17,b+1,15,1);phb(e,a,b,c,d);return e}
function fq(a,b,c,d,e,f){var g;g=gq(e,d);e!=10&&iq(dq(a,f),b,c,e,g);return g}
function eU(a,b,c){var d,e,f;f=0;for(e=b;e<=c;e++){d=r$(a.a,e);f+=d}return f}
function DF(a,b){CF();var c;c=VG(b);if(!c){return false}EF(a,b,c);return true}
function jq(a,b){eq(b)!=10&&iq(O(b),b.qg,b.__elementTypeId$,eq(b),a);return a}
function ej(a){var b;return b=(Fh(),a).createElement('INPUT'),b.type='text',b}
function QG(a){var b;PG();b=NG.get(a);return !b?null:b.getAtIndex(b.size()-1)}
function hE(a){var b;if(cE(a)){b=0-a;if(!isNaN(b)){return b}}return ZD(Dq(a))}
function WP(a,b){var c;c=(!a.K&&(a.K=RP(a)),a.K).pb;return !!c&&c.contains(b)}
function gL(a){var b;cL.call(this,(b=a,!xF&&(xF=new yF),!vF&&(vF=new wF),b))}
function yJ(a){var b;this.b=new Akb;this.f=new Akb;lJ(this,(b=a,GJ(),LL(),b))}
function jZ(){BQ.call(this);this.a=new BZ(this);this.j=new Akb;this.c=new $nb}
function Ggb(a,b){mgb();this.e=a;this.d=1;this.a=iq(dq(hr,1),ixb,17,15,[b])}
function elb(a,b,c,d){var e;d=(Cnb(),!d?Bnb:d);e=a.slice(b,c);flb(e,a,b,c,-b)}
function erb(a,b,c,d){var e;e=new Zqb(b,c);e.e=d;Yqb(e,arb?null:a.c);frb(a,e)}
function v7(a){var b;b=Yeb((vdb($x),$x.k),rtb,'.');return TP(a.e,b).Ne().Ye()}
function wgb(a){var b;if(a.e==0){return -1}b=vgb(a);return (b<<5)+peb(a.a[b])}
function S$(a,b){aab(a.W,a.V.sc,a.V.rc,b);g$(a,b,true);FU(a.V);BR(a.Q,false)}
function T_(a,b){a.F=b;a.F?Ae((CF(),a.Xc),Nxb,true):Ae((CF(),a.Xc),Nxb,false)}
function jV(a){rV(a,a.rc,a.sc)||BW(a,a.rc,a.sc);Z1((ng(),mg),new hY(a,true))}
function yT(a,b){vT(a,b.col,b.row);uT(a,b.height);xT(a,b.width);wT(a,b.dx,b.dy)}
function bI(a){if(!a.bb){throw VD(new feb('initWidget() is not called yet'))}}
function UK(a){if(!a.a||!a.c.O){throw VD(new npb)}a.a=false;return a.b=a.c.O}
function FL(a){if(a.b>=a.c.c){throw VD(new npb)}a.a=a.c.a[a.b];++a.b;return a.a}
function Kob(a){if(a.a.d!=a.c){return Bob(a.a,a.b.value[0])}return a.b.value[1]}
function vkb(a,b,c){for(;c<a.a.length;++c){if(opb(b,a.a[c])){return c}}return -1}
function Zrb(a,b,c){var d;Irb(a);d=new rsb;d.a=b;a.a.kg(new wsb(d,c));return d.a}
function EG(){yG();var a;if(sG){a=new IG;!!tG&&Cp(tG,a);return null}return null}
function l1(){try{document.createEvent($ub);return true}catch(a){return false}}
function V$(a){a.t=true;a.c=true;a.B?(a.B=false):EV(a.V)?(a.b=''):(a.b=cV(a.V))}
function dP(a,b){if(b){Z1((ng(),mg),new jP(a))}else if(a.f){a.q=ZK(a.e);yO(a)}}
function hS(a){var b;b=RR(a);a.v=(Fh(),Eh).Xd(b);a.w=Eh.Yd(b);a.O=a.e;a.P=a.K}
function Xib(a){var b;Gnb(a.e,a);Gsb(a.b);a.c=a.a;b=a.a.Ye();a.b=Wib(a);return b}
function Lrb(a){var b;Irb(a);b=fq(fr,atb,17,0,15,1);zpb(a.a,new Orb(b));return b}
function Qrb(a){var b;Irb(a);b=fq(hr,ixb,17,0,15,1);zpb(a.a,new Trb(b));return b}
function Ih(a){var b=a.firstChild;while(b&&b.nodeType!=1)b=b.nextSibling;return b}
function Lh(a,b){var c;return ((c=a._d(b),c?c:b.documentElement).scrollTop||0)|0}
function kH(a){var b;b=(Fh(),Eh).Td(a);while(!!b&&!VG(b)){b=b.parentNode}return b}
function CT(a){var b;b=Qi($doc);LT(b,a);b.className='sheet-tabsheet-tab';return b}
function fJ(){_e();df.call(this,Yi($doc));(CF(),this.Xc).className='gwt-ListBox'}
function wT(a,b,c){(CF(),a.Xc).style[Twb]=b+(hm(),Kvb);a.Xc.style[Uwb]=c+'pt'}
function hab(a,b,c){X9(a.v,iq(dq(GB,1),atb,1,5,[(kdb(),b?true:false),reb(c)]))}
function $9(a,b,c,d,e){X9(a.g,iq(dq(GB,1),atb,1,5,[reb(b),reb(c),reb(d),reb(e)]))}
function TW(a,b,c,d,e){var f;f=UU(a,b);if(f){FM(f,c,d,e);return true}return false}
function q0(a,b,c,d){if(a.V.rc==c&&a.V.sc==d){t0(a,c,d,null);b!=null&&XO(a.u,b)}}
function W$(a,b,c){aab(a.W,a.V.sc,a.V.rc,b);g$(a,b,c);if(c){FU(a.V);DR(a.Q,false)}}
function T(a,b,c){S(a);a.o=true;a.p=false;a.k=b;a.t=c;a.n=null;++a.r;ab(a.j,Wf())}
function x7(a,b,c){var d;d=Yeb((vdb($x),$x.k),rtb,'.');sZ(TP(a.e,d).Ne().Ye(),b,c)}
function N2(a,b){var c,d;d=H2(a.a[b]);for(c=new Ykb(d);c.a<c.c.a.length;){Wkb(c)}}
function Vfb(a,b){this.e=b;this.a=Zfb(a);this.a<54?(this.f=oE(a)):(this.c=Tgb(a))}
function g1(){this.c=new Vnb;this.a=new E1;L2((!I2&&(I2=new S2),I2));this.d=new f6}
function aq(){aq=AE;_p=new bq('RTL',0);$p=new bq('LTR',1);Zp=new bq('DEFAULT',2)}
function Sq(){Sq=AE;Oq=nq(fvb,fvb,524287);Pq=nq(0,0,gvb);Qq=lq(1);lq(2);Rq=lq(0)}
function bab(a,b,c,d,e){X9(a.k,iq(dq(GB,1),atb,1,5,[reb(b),reb(c),reb(d),reb(e)]))}
function oab(a,b,c,d,e){X9(a.F,iq(dq(GB,1),atb,1,5,[reb(b),reb(c),reb(d),reb(e)]))}
function uab(a,b,c,d,e){X9(a.P,iq(dq(GB,1),atb,1,5,[reb(b),reb(c),reb(d),reb(e)]))}
function zgb(a,b){if(b.e==0){return lgb}if(a.e==0){return lgb}return yhb(),zhb(a,b)}
function Kq(a){if(Aq(a,(Sq(),Rq))<0){return -wq(Dq(a))}return a.l+a.m*itb+a.h*htb}
function kj(a){return (Peb(a.compatMode,tub)?a.documentElement:a.body).clientWidth|0}
function bfb(a,b){return b==(hpb(),hpb(),gpb)?a.toLocaleLowerCase():a.toLowerCase()}
function cfb(a,b){return b==(hpb(),hpb(),gpb)?a.toLocaleUpperCase():a.toUpperCase()}
function S1(a,b){return a-(Fh(),Eh).Yd(b)+((b.scrollTop||0)|0)+oj(b.ownerDocument)}
function eq(a){return a.__elementTypeCategory$==null?10:a.__elementTypeCategory$}
function _q(a){return a!=null&&(typeof a===Zsb||typeof a==='function')&&!(a.rg===EE)}
function jj(a){return (Peb(a.compatMode,tub)?a.documentElement:a.body).clientHeight|0}
function og(a){var b,c;if(a.c){c=null;do{b=a.c;a.c=null;c=yg(b,c)}while(a.c);a.c=c}}
function pg(a){var b,c;if(a.d){c=null;do{b=a.d;a.d=null;c=yg(b,c)}while(a.d);a.d=c}}
function PG(){var a;a=(yG(),$wnd.location.search);if(!NG||!Peb(MG,a)){NG=OG(a);MG=a}}
function kQ(a,b){o2(he(a.yf()),true);!!a.q&&ob(a.q);if(a.r){!!b.a&&Cj(b.a);a.r=false}}
function kI(a,b,c){a.c=false;c?wh(a.a,b):xh(a.a,b);if(a.d!=a.b){a.d=a.b;Yp(a.a,a.b)}}
function nJ(a,b,c){if(!!b&&!b.b){return}tJ(a,b);c&&a.e&&a.Se();!!b&&a.c&&jJ(a,b,false)}
function QY(a,b,c){var d;c.a?a.appendChild(b):(d=Jh((Fh(),b)),!!d&&d.removeChild(b))}
function me(a,b){var c=a.parentNode;if(!c){return}c.insertBefore(b,a);c.removeChild(a)}
function tkb(a,b){var c,d,e,f;Isb(b);for(d=a.a,e=0,f=d.length;e<f;++e){c=d[e];b.Pf(c)}}
function vL(a,b){var c,d;d=HF((CF(),b.Xc));c=IH(a,b);c&&_g(a.c,Jh((Fh(),d)));return c}
function Rob(a,b){var c;c=b.c;b.a.b=b.b;b.b.a=b.a;b.a=b.b=null;b.c=null;--a.b;return c}
function Odb(a,b){var c;if(!a){return}b.j=a;var d=Idb(b);if(!d){xE[a]=[b];return}d.pg=b}
function Y1(a){var b;if(!a){return '(null)'}b=wdb(a.pg);return _eb(b,Ueb(b,ffb(46))+1)}
function Ybb(a,b,c){b<0&&(b=0);(c<0||c>a.length)&&(c=a.length);return a.substr(b,c-b)}
function UP(a,b){var c;c=(vdb(b),b.k);F1(a.J,c)||(a.J[c]=t2(b),undefined);return a.J[c]}
function WJ(a,b){a.hf(false);hN(a);b.We(nh((CF(),a.Xc),eub),nh(a.Xc,Jvb));a.hf(true)}
function NJ(a,b){var c;c=(Fh(),Eh).Vd(b);if(Ch(c)){return Zg((CF(),a.Xc),c)}return false}
function sV(a,b,c){var d;d=wib(a.e,Yvb+b+Zvb+c);return !d?w$(a.a,b)&&z$(a.a,c):d.locked}
function rV(a,b,c){return (b<=a.ob||b>=TU(a)&&b<=YU(a))&&(c<=a.Sc||c<=fV(a)&&c>=IU(a))}
function s$(a,b){return !!a.v&&vkb(a.v,reb(b),0)!=-1?0:b>0&&a.g.length>=b?a.g[b-1]:a.q}
function vW(a,b){var c;kT(a);for(c=0;c<b.a.length;c++){nT(a,(Hsb(c,b.a.length),b.a[c]))}}
function tE(){uE();var a=sE;for(var b=0;b<arguments.length;b++){a.push(arguments[b])}}
function Wp(a){if(null==a){throw VD(new Geb('encodedURLComponent cannot be null'))}}
function Di(a){return a.ownerDocument.defaultView.getComputedStyle(a,'').direction=='rtl'}
function pj(a){return ((Peb(a.compatMode,tub)?a.documentElement:a.body).scrollWidth||0)|0}
function wS(a,b){a.k.style[gub]=b+(hm(),Kvb);a.d.style[gub]=b+Kvb;a.j.style[gub]=b+Kvb}
function ZN(a,b){a.f=b;b?Ae((CF(),a.Xc),'inversed',true):Ae((CF(),a.Xc),'inversed',false)}
function _9(a,b,c,d){X9(a.i,iq(dq(GB,1),atb,1,5,[reb(b),reb(c),(kdb(),d?true:false)]))}
function yW(a,b,c,d,e){var f;f=zW(a,b,c,true);AW(a,d,e,true)&&(f=true);if(f){QV(a);KV(a)}}
function lW(a,b,c,d,e){var f,g;tU(a);for(g=b;g<=c;g++){EW(a,g)}for(f=d;f<=e;f++){DW(a,f)}}
function _hb(a,b){var c,d;Isb(b);for(d=b.Zf().Ne();d.Xe();){c=d.Ye();a.put(c.fg(),c.gg())}}
function GT(a,b){var c,d,e;e=a.u[b];d=j2(e);c=new y1(e);d+=w1(c)[1];d+=w1(c)[3];return d}
function peb(a){var b,c;if(a==0){return 32}else{c=0;for(b=1;(b&a)==0;b<<=1){++c}return c}}
function qg(a){var b;if(a.b){b=a.b;a.b=null;!a.g&&(a.g=[]);yg(b,a.g)}!!a.g&&(a.g=tg(a.g))}
function aV(a){var b;b=Yvb+a.rc+Zvb+a.sc;if(CV(a,b)){return UU(a,b)}return JU(a,a.rc,a.sc)}
function Ig(a){var b=/function(?:\s+([\w$]+))?\s*\(/;var c=b.exec(a);return c&&c[1]||$sb}
function ogb(a){var b;b=fq(hr,ixb,17,a.d,15,1);wfb(a.a,0,b,0,a.d);return new Hgb(a.e,a.d,b)}
function Sfb(a){if(a.a<54){return a.f<0?-1:a.f>0?1:0}return (!a.c&&(a.c=Sgb(a.f)),a.c).e}
function mj(a){return ((Peb(a.compatMode,tub)?a.documentElement:a.body).scrollHeight||0)|0}
function TI(a,b){var c;c=oh((CF(),b.Xc),Avb);Peb(Eub,c)&&(a.a=new UI(a,b),Z1((ng(),mg),a.a))}
function _K(a){var b,c;c=oh((CF(),a.Xc),Qvb);b=(Isb(c),c);if(Peb('',c)){return null}return b}
function G1(c){var a=[];for(var b in c){Object.hasOwnProperty.call(c,b)&&a.push(b)}return a}
function WX(a){if(!a.target||a.target.shadowRoot){return a.composedPath()[0]}return a.target}
function Mf(a){rf(this);tf(this);this.backingJsObject=a;uf(this,a);this.f=a==null?otb:DE(a)}
function VZ(a,b,c,d,e,f){this.e=a;this.f=b;this.a=c;this.b=d;this.d=e;this.c=f;rb.call(this)}
function BQ(){this.J={};this.s=[];Bp((!this.F&&(this.F=new Ep(this)),this.F),(C1(),B1),this)}
function Obb(){Obb=AE;Lbb=new Pbb('LEFT',0);Nbb=new Pbb('RIGHT',1);Mbb=new Pbb('MIDDLE',2)}
function sab(a,b,c,d,e,f){X9(a.N,iq(dq(GB,1),atb,1,5,[tbb(b),reb(c),reb(d),reb(e),reb(f)]))}
function Mab(a,b,c,d){X9(a.u,iq(dq(GB,1),atb,1,5,[(kdb(),b?true:false),reb(c),d?true:false]))}
function EF(a,b,c){CF();var d;d=zF;zF=a;b==BF&&TG((Fh(),a).type)==8192&&(BF=null);c.wd(a);zF=d}
function KF(a){CF();var b;b=dG(RF,a);if(!b&&!!a){(Fh(),a).stopPropagation();Eh.Wd(a)}return b}
function TE(a){var b,c;c=QG('logLevel');b=c==null?null:qqb(c);b?nrb(a,b):nrb(a,(nqb(),jqb))}
function lG(){var a;a=(yG(),uG).Me();if(a==null||a.length==0){return ''}return rG(a.substr(1))}
function bJ(a){var b;b=(CF(),a.Xc).selectedIndex;return b==-1?null:(ZI(a,b),Fj(a.Xc)[b].value)}
function vT(a,b,c){var d;a.a=b;a.b=c;(CF(),a.Xc).className=Swb;d=Yvb+b+Zvb+c;Ae(a.Xc,d,true)}
function Ygb(a,b,c){var d,e,f;d=0;for(e=0;e<c;e++){f=b[e];a[e]=f<<1|d;d=f>>>31}d!=0&&(a[c]=d)}
function Ihb(a,b){var c,d,e;Isb(b);c=false;for(e=b.Ne();e.Xe();){d=e.Ye();c=c|a.add(d)}return c}
function WU(a,b,c){if(b<=a.ob){return c<=a.Sc?a.Nc:a.c}else if(c<=a.Sc){return a.Pc}return a.zc}
function egb(a){if(a==0){return Cfb[0]}if(a>=0&&a<Jfb.length){return Jfb[a]}return new Vfb(0,a)}
function hrb(a){if(!$qb){return}mrb(a,(nqb(),gqb),'invalid column index, halting parse',null)}
function aE(a){if(gtb<a&&a<htb){return a<0?$wnd.Math.ceil(a):$wnd.Math.floor(a)}return ZD(Bq(a))}
function zH(){var b=$wnd.onresize;$wnd.onresize=Ysb(function(a){try{FG()}finally{b&&b(a)}})}
function xe(a){var b,c;b=a.className||'';c=Reb(b,ffb(32));if(c>=0){return b.substr(0,c)}return b}
function vgb(a){var b;if(a.b==-2){if(a.e==0){b=-1}else{for(b=0;a.a[b]==0;b++);}a.b=b}return a.b}
function Xqb(){var a;if(!Tqb){Tqb=new Wqb;a=new srb('');nrb(a,(nqb(),jqb));Uqb(Tqb,a)}return Tqb}
function ZD(a){var b;b=a.h;if(b==0){return a.l+a.m*itb}if(b==jtb){return a.l+a.m*itb-htb}return a}
function a5(a){if(V4){if(a.q[czb]||null){return nh(a.q,czb)}return 0}return (a.q.scrollTop||0)|0}
function pQ(a){if(a.w){sM(a.w.a);a.w=null}if(a.v){sM(a.v.a);a.v=null}if(a.u){sM(a.u.a);a.u=null}}
function iQ(a,b){var c;Q1(b.a,he(a.yf()));!!b.a&&Cj(b.a);Dj(b.a);(c=a,xj(b.a),c).sf(NA).sg();c2()}
function I$(a,b,c){aab(a.W,a.V.sc,a.V.rc,b);g$(a,b,true);FU(a.V);c?ER(a.Q,false):BR(a.Q,false)}
function K$(a,b,c){aab(a.W,a.V.sc,a.V.rc,b);g$(a,b,true);FU(a.V);c?CR(a.Q,false):DR(a.Q,false)}
function De(a,b){a.style.display=b?'':fub;b?a.removeAttribute(kub):a.setAttribute(kub,'true')}
function wE(a,b){typeof window===Zsb&&typeof window['$gwt']===Zsb&&(window['$gwt'][a]=b)}
function zg(b,c){ng();function d(){var a=Ysb(wg)(b);a&&$wnd.setTimeout(d,c)}
$wnd.setTimeout(d,c)}
function f2(){b2();if($wnd.document.activeElement){return $wnd.document.activeElement}return null}
function Lgb(a){Isb(a);if(a.length==0){throw VD(new Ieb('Zero length BigInteger'))}Qgb(this,a)}
function rcb(){rcb=AE;qcb=new scb('TEXT',0);pcb=new scb('PREFORMATTED',1);ocb=new scb('HTML',2)}
function icb(){icb=AE;gcb=new jcb('DISABLED',0);hcb=new jcb('MANUAL',1);fcb=new jcb('AUTOMATIC',2)}
function I1(a,b){Mhb(new klb(iq(dq(hr,2),atb,22,0,[a])));Mhb(new klb(iq(dq(hr,2),atb,22,0,[b])))}
function mpb(a,b){var c,d;Isb(b);for(d=new Yib((new Qib(a)).a);d.b;){c=Xib(d);b.Cf(c.fg(),c.gg())}}
function qU(a){var b,c;for(c=new Ykb(a);c.a<c.c.a.length;){b=Wkb(c);ah(b.d)}a.a=fq(GB,atb,1,0,5,1)}
function M1(){this.d=fq(hr,ixb,17,4,15,1);this.a=fq(hr,ixb,17,4,15,1);this.c=fq(hr,ixb,17,4,15,1)}
function sg(a){if(!a.j){a.j=true;!a.f&&(a.f=new Ag(a));zg(a.f,1);!a.i&&(a.i=new Cg(a));zg(a.i,50)}}
function S(a){if(!a.o){return}a.u=a.p;a.n=null;a.o=false;a.p=false;if(a.q){a.q.hd();a.q=null}a.bd()}
function oI(a,b){if(a.O){throw VD(new feb('SimplePanel can only contain one child widget'))}a.Re(b)}
function kf(){_e();var a;!hf&&(hf=new lf);a=Pi($doc);if(!a.getContext){return null}return new jf(a)}
function ri(a){var b=a.ownerDocument.defaultView.getComputedStyle(a,null);return b.direction=='rtl'}
function nE(a){var b,c,d,e;e=a;d=0;if(e<0){e+=htb;d=jtb}c=dr(e/itb);b=dr(e-c*itb);return nq(b,c,d)}
function QX(a,b,c,d,e){var f;if(CV(a,Yvb+c+Zvb+e)){f=u$(a.a,c,e);c=f.col2;e=f.row2}$R(a.yc,b,c,d,e)}
function Wi(a,b,c,d,e,f){return (Fh(),Eh).Pd(a,Fub,true,true,0,b,c,d,e,false,false,false,false,2,f)}
function Z9(a,b,c,d,e,f,g){X9(a.f,iq(dq(GB,1),atb,1,5,[reb(b),reb(c),reb(d),reb(e),reb(f),reb(g)]))}
function $Q(a){var b;b=Wg(a.j);b?WJ(a.e,a.a):Z1((ng(),mg),new nR(a));!!a.d&&PQ(a.g,MU(a.d,a.b,a.k))}
function TR(a){return (CF(),a.Xc).style.display!=fub||!!a.a&&ke(a.a)||!!a.X&&ke(a.X)||!!a.W&&ke(a.W)}
function m2(a){b2();return (Fh(),a).type.indexOf(Dwb)!=-1?Qm(a.changedTouches[0]):_h(a.clientX||0)}
function n2(a){b2();return (Fh(),a).type.indexOf(Dwb)!=-1?Rm(a.changedTouches[0]):_h(a.clientY||0)}
function jrb(a){if(arb){return fq(fD,Uzb,110,0,0,1)}return zkb(a.a,fq(fD,Uzb,110,a.a.a.length,0,1))}
function fgb(a){if(a==dr(a)){return egb(dr(a))}if(a>=0){return new Vfb(0,ftb)}return new Vfb(0,ptb)}
function UD(a){var b;if(Yq(a,20)){return a}b=a&&a.__java$exception;if(!b){b=new Qf(a);Gg(b)}return b}
function q$(a){var b;b='';while(a>0){b=String.fromCharCode(65+(a-1)%26&utb)+b;a=(a-1)/26|0}return b}
function Dob(a,b){var c;c=a.a.get(b);if(c===undefined){++a.d}else{tob(a.a,b);--a.c;Inb(a.b)}return c}
function ajb(a,b){var c,d;for(c=0,d=a.size();c<d;++c){if(opb(b,a.getAtIndex(c))){return c}}return -1}
function uib(a,b){var c,d;for(d=b.Ne();d.Xe();){c=d.Ye();if(Unb(a,c.gg())){return true}}return false}
function yq(a,b){var c,d,e;c=a.l+b.l;d=a.m+b.m+(c>>22);e=a.h+b.h+(d>>22);return nq(c&fvb,d&fvb,e&jtb)}
function Jq(a,b){var c,d,e;c=a.l-b.l;d=a.m-b.m+(c>>22);e=a.h-b.h+(d>>22);return nq(c&fvb,d&fvb,e&jtb)}
function p2(a){b2();var b,c;c=a.getElementsByTagName('img');for(b=0;b<c.length;b++){PF(c[b],ovb)}}
function QR(a,b,c){var d,e;if(a==null||a.length<c-1){return 0}e=0;for(d=b;d<c;d++){e+=a[d-1]}return e}
function iq(a,b,c,d,e){e.pg=a;e.qg=b;e.rg=EE;e.__elementTypeId$=c;e.__elementTypeCategory$=d;return e}
function ykb(a,b){var c;c=vkb(a,b,0);if(c==-1){return false}Hsb(c,a.a.length);Csb(a.a,c,1);return true}
function Wib(a){if(a.a.Xe()){return true}if(a.a!=a.d){return false}a.a=new oob(a.e.a);return a.a.Xe()}
function Qdb(a){if(a==null){return false}return a.$implements__java_lang_Cloneable||Array.isArray(a)}
function Wnb(a){Esb(a>=0,'Negative initial capacity');Esb(true,'Non-positive load factor');Cib(this)}
function B5(a){this.a=a;yJ.call(this,true);He(this,this,(eo(),eo(),co));He(this,this,(Yn(),Yn(),Xn))}
function j5(a){X4();this.s=fq(hr,ixb,17,3,15,1);this.b=fq(fr,atb,17,3,15,1);this.p=new _nb(new klb(a))}
function Ce(a,b){if(!a){throw VD(new Kf(iub))}b=dfb(b);if(b.length==0){throw VD(new deb(jub))}Ge(a,b)}
function _I(a){var b;b=a.text;(Fh(),a).hasAttribute(Gvb)&&b.length>1&&(b=afb(b,1,b.length-1));return b}
function vlb(a){ulb();var b,c,d;d=0;for(c=a.Ne();c.Xe();){b=c.Ye();d=d+(b!=null?Q(b):0);d=d|0}return d}
function Dq(a){var b,c,d;b=~a.l+1&fvb;c=~a.m+(b==0?1:0)&fvb;d=~a.h+(b==0&&c==0?1:0)&jtb;return nq(b,c,d)}
function J2(a,b){var c,d,e,f,g,h;h=b.c;a.a[h]=b;g=b.b;for(d=g,e=0,f=d.length;e<f;++e){c=d[e];a.d[c]=h}}
function AT(a,b){var c,d,e,f,g;for(e=b,f=0,g=e.length;f<g;++f){d=e[f];c=CT(d);Vg(a.c,c);Tf(a.u,c)}NT(a)}
function fZ(a,b){var c,d;for(d=a.c.Ne();d.Xe();){c=d.Ye();b.contains(c)||m_((!a.C&&(a.C=new x0),a.C),c)}}
function wlb(a){ulb();var b,c,d;d=1;for(c=a.Ne();c.Xe();){b=c.Ye();d=31*d+(b!=null?Q(b):0);d=d|0}return d}
function tq(a){var b,c,d;b=~a.l+1&fvb;c=~a.m+(b==0?1:0)&fvb;d=~a.h+(b==0&&c==0?1:0)&jtb;a.l=b;a.m=c;a.h=d}
function vV(a,b,c){return c<=a.Sc&&(b>=a.bb&&b<=a.xb||b<=a.ob)||b<=a.ob&&(c>=a.db&&c<=a.zb||c<=a.Sc)}
function MW(a,b){a.Z=b;b?sh(a.Fc,'noheaders'):dh(a.Fc,'noheaders');if(a.Db){KV(a);RX(a);xX(a);NX(a)}}
function WY(a){a.c==0?V9(a.b,a.a):a.c==1?W9(a.b,a.a):U9(a.b,a.a);$M(d1(a.g.a.a.D),false);GU(a.d.V,true)}
function O(a){return br(a)?MB:$q(a)?tB:Zq(a)?rB:Xq(a)?a.pg:hq(a)?a.pg:a.pg||Array.isArray(a)&&dq(Is,1)||Is}
function eH(a){aH();var b;b=!KF(a);if(b||!YG){return}DF(a,YG)&&((Fh(),a).stopPropagation(),undefined)}
function qq(a,b,c,d,e){var f;f=Hq(a,b);c&&tq(f);if(e){a=sq(a,b);d?(kq=Dq(a)):(kq=nq(a.l,a.m,a.h))}return f}
function skb(a,b){var c,d;c=b.toArray();d=c.length;if(d==0){return false}Bsb(a.a,a.a.length,c);return true}
function uq(a){var b,c;c=oeb(a.h);if(c==32){b=oeb(a.m);return b==32?oeb(a.l)+32:b+20-10}else{return c-12}}
function A4(a,b,c){var d=a[c];if(d!==undefined){var e=function(){};e.prototype=d;a[b]=new e}else{a[b]={}}}
function qhb(a,b,c){var d;for(d=c-1;d>=0&&a[d]===b[d];d--);return d<0?0:dE(XD(a[d],Ozb),XD(b[d],Ozb))?-1:1}
function IS(a,b){a.i.style[Gub]=(b?(zk(),ok):(zk(),gk)).je();a.g.style[Gub]=(b?(zk(),ok):(zk(),gk)).je()}
function iN(a,b){a.style[Cvb]=b.b+(hm(),Kvb);a.style[Dvb]=b.c+Kvb;a.style[hub]=b.d+Kvb;a.style[gub]=b.a+Kvb}
function AS(a,b){De((CF(),a.Xc),b);b?(a.Xc.style[Nvb]='',undefined):(a.Xc.style[Nvb]=(ql(),Uub),undefined)}
function JV(a,b,c){var d;Vg(a.zc,a.hb);uh(a.hb,'cell '+b);xh(a.hb,c);d=a.hb.clientWidth|0;ah(a.hb);return d}
function pI(a,b){if(a.O!=b){return false}try{Pe(b,null)}finally{_g(a.Qe(),(CF(),b.Xc));a.O=null}return true}
function u5(a,b,c){if(a.b){a.a=new j5(iq(dq(Is,1),atb,0,2,[]));He(b,a,(Zo(),Zo(),Yo))}else{a.a=null}v5(a,c)}
function Bk(){zk();return iq(dq(vt,1),atb,23,0,[ok,gk,jk,kk,mk,nk,pk,qk,rk,uk,wk,vk,yk,sk,tk,xk,ik,hk,lk])}
function S2(){this.a={};this.d={};this.c=new t4;this.b=new Akb;J2(this,new T2(iq(dq(MB,1),stb,2,6,[ayb])))}
function ydb(){++udb;this.k=null;this.i=null;this.g=null;this.d=null;this.b=null;this.j=null;this.a=null}
function Yib(a){this.e=a;this.d=new Gob(this.e.b);this.a=this.d;this.b=Wib(this);this.$modCount=a.$modCount}
function Op(a){var b,c;if(a.a){try{for(c=new Ykb(a.a);c.a<c.c.a.length;){b=Wkb(c);b.Kd()}}finally{a.a=null}}}
function bN(a,b){var c,d;QJ(a);for(d=new Ykb(a.s);d.a<d.c.a.length;){c=Wkb(d);WY(c)}a.s.a=fq(GB,atb,1,0,5,1)}
function Khb(a,b){var c,d;Isb(b);for(d=b.Ne();d.Xe();){c=d.Ye();if(!a.contains(c)){return false}}return true}
function hob(a,b){var c,d,e,f;for(d=b,e=0,f=d.length;e<f;++e){c=d[e];if(Unb(a,c.fg())){return c}}return null}
function AU(a){var b,c,d;for(d=1;d<=a.Sc;d++){for(c=1;c<=a.ob;c++){b=new NM(a,c,d);Vg(a.Nc,b.d);rkb(a.Mc,b)}}}
function YD(a,b){var c;if(cE(a)&&cE(b)){c=a-b;if(!isNaN(c)){return c}}return Aq(cE(a)?nE(a):a,cE(b)?nE(b):b)}
function hb(b,c){var d=Ysb(function(){var a=Wf();b.fd(a)});var e=$wnd.requestAnimationFrame(d,c);return {id:e}}
function VL(){return function(a){var b=this.parentNode;b.onfocus&&$wnd.setTimeout(function(){b.focus()},0)}}
function qdb(a){if(Peb(typeof(a),etb)){return true}return a!=null&&a.$implements__java_lang_CharSequence}
function TF(a){CF();UG(AF);!ZF&&(ZF=new An);if(!RF){RF=new Fp(null,true);$F=new bG}return Bp(RF,ZF,a)}
function HI(){HI=AE;new II((Ml(),'center'));new II('justify');FI=new II(Cvb);new II('right');GI=FI;EI=GI}
function hm(){hm=AE;gm=new km;em=new lm;_l=new mm;am=new nm;fm=new om;dm=new pm;bm=new qm;$l=new rm;cm=new sm}
function yrb(){yrb=AE;vrb=new zrb('CONCURRENT',0);wrb=new zrb('IDENTITY_FINISH',1);xrb=new zrb('UNORDERED',2)}
function qb(a,b){if(b<=0){throw VD(new deb('must be positive'))}!!a.j&&ob(a);a.i=true;a.j=reb(wb(ub(a,a.g),b))}
function Oe(a,b){a.Tc&&(CF(),a.Xc.__listener=null,undefined);!!a.Xc&&me(a.Xc,b);a.Xc=b;a.Tc&&(CF(),WG(a.Xc,a))}
function j_(a,b){var c,d;if(a.u.f){_O(a.u);iX(a.V,false)}c=ph(a.V.zc);d=(a.V.zc.scrollTop||0)|0;nbb(a.W,b,c,d)}
function BV(a,b){var c,d;if(a.S){d=WX(b);c=he(a.S);return (Fh(),Eh).de(c,d)||!!Jh(c)&&Zg(Jh(c),d)}return false}
function bP(a,b){var c,d;d=Fj(aJ(a.B)).length;for(c=0;c<d;c++){if(Peb($I(a.B,c),b)){eJ(a.B,c);return}}eJ(a.B,0)}
function BL(a,b){var c;if(b<0||b>=a.c){throw VD(new hdb)}--a.c;for(c=b;c<a.c;++c){a.a[c]=a.a[c+1]}a.a[a.c]=null}
function bU(a,b,c){var d,e,f,g;g=0;for(d=b;d<=c;d++){e=v$(a.a,d);f=Qfb(dgb(e*a.Lb/72));g+=f;a.W[d-1]=f}return g}
function dlb(a,b,c,d,e,f,g){var h;h=c;while(f<g){h>=d||b<c&&Dnb(a[b],a[h])<=0?(e[f++]=a[b++]):(e[f++]=a[h++])}}
function DX(a,b){if(a.R);else{bL(a.sb,b);a._&&(rV(a,a.rc,a.sc)||BW(a,a.rc,a.sc),Z1((ng(),mg),new hY(a,false)))}}
function qI(a,b){if(b==a.O){return}!!b&&Ne(b);!!a.O&&pI(a,a.O);a.O=b;if(b){CF();Vg(a.Qe(),MF(he(a.O)));Pe(b,a)}}
function HS(a,b){a.b=b;a.a.style[Hub]=(b?(vm(),tm):(vm(),um)).je();a.d.style[Hub]=(b?(vm(),tm):(vm(),um)).je()}
function KS(a,b){a.n=b;a.k.style[Hub]=(b?(vm(),tm):(vm(),um)).je();a.p.style[Hub]=(b?(vm(),tm):(vm(),um)).je()}
function NS(a,b){a.v=b;a.u.style[Hub]=(b?(vm(),tm):(vm(),um)).je();a.A.style[Hub]=(b?(vm(),tm):(vm(),um)).je()}
function QS(a,b){a.H=b;a.G.style[Hub]=(b?(vm(),tm):(vm(),um)).je();a.J.style[Hub]=(b?(vm(),tm):(vm(),um)).je()}
function MZ(a,b){var c,d;d=wib(VP(a.a).c,b);c=tT(d,oh(a.a.e,'appId'));return new PY('custom-editor-'+d,c,a.a.e)}
function hJ(a,b,c){var d;if(a.i){d=(CF(),bj($doc));IF(a.d,d,b);Vg(d,MF(c))}else{d=FF(a.d);CF();AF.He(d,MF(c),b)}}
function FG(){yG();var a,b;if(xG){b=kj($doc);a=jj($doc);if(wG!=b||vG!=a){wG=b;vG=a;sp((!tG&&(tG=new RG),tG))}}}
function $J(a){if(a.J){sM(a.J.a);a.J=null}if(a.D){sM(a.D.a);a.D=null}if(a.M){a.J=TF(new nK(a));a.D=kG(new pK(a))}}
function IX(a){var b,c;for(c=new Yib((new Qib(a.Kb)).a);c.b;){b=Xib(c);ZV(a,b.fg(),b.gg());$V(a,b.fg(),b.gg())}}
function Zfb(a){var b;YD(a,0)<0&&(a=ZD(Eq(cE(a)?nE(a):a)));return b=pE(kE(a,32)),64-(b!=0?oeb(b):oeb(pE(a))+32)}
function Gf(a){var b;if(a!=null){b=a.__java$exception;if(b){return b}}return ar(a,TypeError)?new Feb(a):new Mf(a)}
function WD(a,b){var c;if(cE(a)&&cE(b)){c=a+b;if(gtb<c&&c<htb){return c}}return ZD(yq(cE(a)?nE(a):a,cE(b)?nE(b):b))}
function gE(a,b){var c;if(cE(a)&&cE(b)){c=a*b;if(gtb<c&&c<htb){return c}}return ZD(Cq(cE(a)?nE(a):a,cE(b)?nE(b):b))}
function mE(a,b){var c;if(cE(a)&&cE(b)){c=a-b;if(gtb<c&&c<htb){return c}}return ZD(Jq(cE(a)?nE(a):a,cE(b)?nE(b):b))}
function Ae(a,b,c){if(!a){throw VD(new Kf(iub))}b=dfb(b);if(b.length==0){throw VD(new deb(jub))}c?dh(a,b):sh(a,b)}
function Fsb(a,b){if(0>a){throw VD(new deb('fromIndex: 0 > toIndex: '+a))}if(a>b){throw VD(new jdb(Btb+a+Ctb+b))}}
function pb(a,b){if(b<0){throw VD(new deb('must be non-negative'))}!!a.j&&ob(a);a.i=false;a.j=reb(xb(ub(a,a.g),b))}
function C$(a){var b;if(!EV(a.V)&&!a.e&&!!a.p&&NZ(a.p,bV(a.V))){b=MZ(a.p,bV(a.V));a.o=true;VO(a.u,false);CU(a.V,b)}}
function xgb(a){var b;if(a.c!=0){return a.c}for(b=0;b<a.a.length;b++){a.c=a.c*33+(a.a[b]&-1)}a.c=a.c*a.e;return a.c}
function l5(a){var b,c,d,e;b=a.childNodes;e=new Akb;for(c=0;c<b.length;c++){d=b[c];d.nodeType==1&&rkb(e,d)}return e}
function Ofb(a){var b,c;b=Sfb(a);c=a.a-a.e/Nzb;c<-149||b==0?(b*=0):c>129?(b*=Infinity):(b=Udb(Tfb(a)));return b}
function bdb(c){var a=[];for(var b in c){Object.prototype.hasOwnProperty.call(c,b)&&b!='$H'&&a.push(b)}return a}
function kJ(a,b){var c,d;for(d=new Ykb(a.f);d.a<d.c.a.length;){c=Wkb(d);if(Zg((CF(),c.Xc),b)){return c}}return null}
function iW(a,b){var c,d;c=b.b;d=b.k;Bib(a.Cc,Yvb+c+Zvb+d);eW(a,b);c>=a.bb&&c<=a.xb&&d>=a.db&&d<=a.zb&&DM(JU(a,c,d))}
function d2(a,b){b2();var c=$wnd.document.elementFromPoint(a,b);c!=null&&c.nodeType==3&&(c=c.parentNode);return c}
function Mp(a,b,c){var d,e;e=vib(a.d,b);if(!e){e=new Vnb;yib(a.d,b,e)}d=e.get(c);if(!d){d=new Akb;e.put(c,d)}return d}
function e4(a){var b,c;b=u4(a);c=b.Hf(null,iq(dq(GB,1),atb,1,5,[]));Yq(c,99)&&K2((!I2&&(I2=new S2),I2),a.a);return c}
function I6(a){var b,c;if(a==null||a.length==0||Peb(otb,a)){return null}c=_cb(a);b=new WQ;Object.assign(b,c);return b}
function Sgb(a){mgb();if(a<0){if(a!=-1){return new Fgb(-1,-a)}return ggb}else return a<=10?igb[dr(a)]:new Fgb(1,a)}
function dgb(a){Lfb();if(!isNaN(a)&&!isFinite(a)||isNaN(a)){throw VD(new Ieb('Infinite or NaN'))}return new Wfb(''+a)}
function Xp(a){var b;b=oh(a,'dir');if(Qeb('rtl',b)){return aq(),_p}else if(Qeb('ltr',b)){return aq(),$p}return aq(),Zp}
function i2(a){b2();var b,c;c=g2(a);if((k1(),!j1&&(j1=new t1),k1(),j1).a.j){b=h2(a);if(b>c&&b<=c+1){return b}}return c}
function l2(a){b2();var b,c;c=j2(a);if((k1(),!j1&&(j1=new t1),k1(),j1).a.j){b=k2(a);if(b>c&&b<=c+1){return b}}return c}
function reb(a){var b,c;if(a>-129&&a<128){b=a+128;c=(teb(),seb)[b];!c&&(c=seb[b]=new ieb(a));return c}return new ieb(a)}
function Ib(a,b){var c,d,e,f,g;c=new qfb;for(e=b,f=0,g=e.length;f<g;++f){d=e[f];ofb(ofb(c,a.ld(d)),' ')}return dfb(c.a)}
function Np(a,b,c){var d,e;e=vib(a.d,b);if(!e){return ulb(),ulb(),rlb}d=e.get(c);if(!d){return ulb(),ulb(),rlb}return d}
function eab(a,b,c,d,e,f){var g;X9(a.q,iq(dq(GB,1),atb,1,5,[(g=[],mpb(b,new wbb(g)),g),reb(c),reb(d),reb(e),reb(f)]))}
function Ahb(a,b,c,d,e){if(b==0||d==0){return}b==1?(e[d]=Chb(e,c,d,a[0])):d==1?(e[b]=Chb(e,a,b,c[0])):Bhb(a,c,e,b,d)}
function clb(a,b,c){var d,e,f;for(d=b+1;d<c;++d){for(e=d;e>b&&Dnb(a[e-1],a[e])>0;--e){f=a[e];a[e]=a[e-1];a[e-1]=f}}}
function uL(a,b){var c,d,e;d=(CF(),bj($doc));c=(e=aj($doc),ZH(e,a.a),_H(e,a.b),e);Vg(d,MF(c));Vg(a.c,MF(d));HH(a,b,c)}
function VJ(a,b,c){var d;a.H=b;a.N=c;b-=hj($doc);c-=ij($doc);d=(CF(),a.Xc);d.style[Cvb]=b+(hm(),Kvb);d.style[Dvb]=c+Kvb}
function H_(a,b){b!=null&&b.length!=0?((CF(),a.Xc).style[gub]=b,undefined):((CF(),a.Xc).style[gub]='400.0px',undefined)}
function k0(a,b){b!=null&&b.length!=0?((CF(),a.Xc).style[hub]=b,undefined):((CF(),a.Xc).style[hub]='500.0px',undefined)}
function S_(a,b){a.D=b;a.D?((CF(),a.Xc).className||'').indexOf(Mxb)!=-1||Ae(a.Xc,Mxb,true):Ae((CF(),a.Xc),Mxb,false)}
function y0(a){var b;b=nj($doc);return b2(),(Fh(),a).type.indexOf(Dwb)!=-1?Qm(a.changedTouches[0])+b:_h(a.clientX||0)+b}
function z0(a){var b;b=oj($doc);return b2(),(Fh(),a).type.indexOf(Dwb)!=-1?Rm(a.changedTouches[0])+b:_h(a.clientY||0)+b}
function eZ(a){mQ(a);k$((!a.C&&(a.C=new x0),a.C),true);!!a.c&&a.c.clear();a.j.a=fq(GB,atb,1,0,5,1);!!a.b&&sM(a.b.a)}
function M(a,b){return br(a)?Peb(a,b):$q(a)?Wdb(a,b):Zq(a)?(Isb(a),cr(a)===cr(b)):Xq(a)?a.Yc(b):hq(a)?J(a,b):mf(a,b)}
function sgb(a,b){var c;if(cr(a)===cr(b)){return true}if(Yq(b,11)){c=b;return a.e==c.e&&a.d==c.d&&tgb(a,c.a)}return false}
function Ydb(a,b){if(a<b){return -1}if(a>b){return 1}if(a==b){return a==0?Ydb(1/a,1/b):0}return isNaN(a)?isNaN(b)?0:1:-1}
function Jrb(a){if(a.b){Jrb(a.b)}else if(a.c){throw VD(new feb("Stream already terminated, can't be modified or used"))}}
function bgb(a){if(a<ptb){throw VD(new gdb('Overflow'))}else if(a>ftb){throw VD(new gdb('Underflow'))}else{return dr(a)}}
function V(){W.call(this,(!db&&(db=!!$wnd.requestAnimationFrame&&!!$wnd.cancelAnimationFrame?new eb:new mb),db))}
function Bn(a,b){var c;An.call(this);this.a=b;!Xm&&(Xm=new Ao);c=yo(Xm,a);if(!c){c=new Akb;zo(Xm,a,c)}c.add(this);this.b=a}
function NP(a){fL();hL.call(this);this.a=a;this.Uc==-1?PF((CF(),this.Xc),gvb|(this.Xc.__eventBits||0)):(this.Uc|=gvb)}
function DE(a){var b;if(Array.isArray(a)&&a.rg===EE){return wdb(O(a))+'@'+(b=Q(a)>>>0,b.toString(16))}return a.toString()}
function Le(a,b){var c;switch(CF(),TG((Fh(),b).type)){case 16:case 32:c=Eh.Ud(b);if(!!c&&Zg(a.Xc,c)){return}}$m(b,a,a.Xc)}
function mhb(a,b,c){var d,e,f,g;f=0;for(d=b-1;d>=0;d--){g=WD(jE(f,32),XD(a[d],Ozb));e=ihb(g,c);f=pE(kE(e,32))}return pE(f)}
function rhb(a,b,c){var d,e;d=XD(c,Ozb);for(e=0;YD(d,0)!=0&&e<b;e++){d=WD(d,XD(a[e],Ozb));a[e]=pE(d);d=kE(d,32)}return pE(d)}
function Cob(a,b,c){var d;d=a.a.get(b);a.a.set(b,c===undefined?null:c);if(d===undefined){++a.c;Inb(a.b)}else{++a.d}return d}
function ZP(a,b,c){var d;d=Yeb((vdb(b),b.k),rtb,'.');!a.I&&(a.I={});null==a.I[d]&&(a.I[d]=new Akb,undefined);a.I[d].add(c)}
function f_(a,b,c,d,e){var f;f=JP(a.I,d,e,b,c);if(f.col1==b&&f.col2==c&&f.row1==d&&f.row2==e){uab(a.W,d,b,e,c);pb(a.s,200)}}
function xY(a,b,c,d,e){var f,g,h;for(g=b;g<=c;g++){for(h=d;h<=e;h++){f=JU(a.a,h,g);!!f&&f.o!=null&&f.o.length!=0&&f.g&&AM(f)}}}
function yY(a,b,c,d,e){var f,g,h;for(g=b;g<=c;g++){for(h=d;h<=e;h++){f=JU(a.a,h,g);!!f&&f.o!=null&&f.o.length!=0&&f.g&&MM(f)}}}
function h5(a,b){var c,d,e;for(d=new Ykb(a.g);d.a<d.c.a.length;){c=Wkb(d);e=c.style;e[iwb]='translate3d(0px,'+b+'px,0px)'}}
function sJ(a){var b,c;if(!a.g){for(c=new Ykb(a.f);c.a<c.c.a.length;){b=Wkb(c);if(b.b){tJ(a,b);break}}return true}return false}
function i$(a){var b,c;if(a.e){if(!a.K){return}c=new O0(a);pb(c,xub);a.K=false;W1(a);b=t2(ly);X9(b.J,iq(dq(GB,1),atb,1,5,[]))}}
function bZ(a,b,c,d){var e,f;e=tT(c,oh(a.e,'appId'));f=new PY('custom-component-'+c,e,a.e);d==null?kob(b.a,null,f):Cob(b.b,d,f)}
function NK(){JK();var a;a=vib(HK,null);if(a){return a}Dib(HK)==0&&zG(new RK);a=new TK;yib(HK,null,a);Xnb(IK,a);return a}
function h4(a,b){var c,d;d=a;if(b!=null&&b.length!=0){d+='<';for(c=0;c<b.length;c++){c!=0&&(d+=',');d+=''+b[c]}d+='>'}return d}
function qT(a){var b=a.length;var c=0;var d=0;var e=0;while(c<b){d=a.charCodeAt(c);d>47&&d<58&&(e=e*10+d-48);c++}return e}
function irb(a){var b,c;if(a.b){return a.b}c=arb?null:a.d;while(c){b=arb?null:c.b;if(b){return b}c=arb?null:c.d}return nqb(),jqb}
function j2(a){b2();if(a.getBoundingClientRect){var b=a.getBoundingClientRect();return b.right-b.left}else{return a.offsetWidth}}
function JM(a,b,c,d){a.c=b;a.k=c;a.b=!d?'cs0':d.cellStyle;a.o=!d?null:d.value;a.f=!!d&&d.needsMeasure;LM(a);KM(a);a.g=true}
function wR(a,b,c){var d;d=t$(a.d,b,c);if(d){a.a=b;a.b=c;b=d.col1;c=d.row1}else{a.a=0;a.b=0}BW(a.c,b,c);GR(a,b,c,(MU(a.c,b,c),d))}
function Rfb(a,b){var c;a.c=b;a.a=Ugb(b);a.a<54&&(a.f=(c=b.d>1?iE(jE(b.a[1],32),XD(b.a[0],Ozb)):XD(b.a[0],Ozb),oE(gE(b.e,c))))}
function fE(a,b){var c;if(cE(a)&&cE(b)){c=a%b;if(gtb<c&&c<htb){return c}}return ZD((oq(cE(a)?nE(a):a,cE(b)?nE(b):b,true),kq))}
function jJ(a,b,c){var d;if(!b.b){return}tJ(a,b);if(c&&!!b.a){tJ(a,null);(yI(),xI).$e((CF(),a.Xc));d=b.a;vg((ng(),mg),new CJ(d))}}
function J$(a){var b;if(!a.B&&!a.u.f){a.B=true;a.c=true;if(a.t){a.t=false}else{eX(a.V,false,(b=_K(a.u.j),b==null?'':b));ZO(a.u)}}}
function Ugb(a){var b,c,d;if(a.e==0){return 0}b=a.d<<5;c=a.a[a.d-1];if(a.e<0){d=vgb(a);if(d==a.d-1){--c;c=c|0}}b-=oeb(c);return b}
function Ogb(a){var b,c,d;if(a<kgb.length){return kgb[a]}c=a>>5;b=a&31;d=fq(hr,ixb,17,c+1,15,1);d[c]=1<<b;return new Hgb(1,c+1,d)}
function gW(a){var b,c,d;for(c=new Ykb(a);c.a<c.c.a.length;){b=Wkb(c);d=Jh((Fh(),b));!!d&&d.removeChild(b)}a.a=fq(GB,atb,1,0,5,1)}
function SS(a){var b,c;c=s$(a.F.q,a.e);for(b=a.e+1;b<=a.f;b++){c+=s$(a.F.q,b)}a.G.style[hub]=c+1+(hm(),Kvb);a.a.style[hub]=c+1+Kvb}
function rK(a){if(!a.i){qK(a);a.c||NH((JK(),NK()),a.a)}(MJ(),LJ).ef(he(a.a),'rect(auto, auto, auto, auto)');he(a.a).style[Nvb]=Tub}
function Wcb(){this.b=(icb(),gcb);this.c=new Vnb;this.c.put('transport',(Mcb(),Kcb).a);this.c.put('fallbackTransport',Icb.a)}
function K5(){CI.call(this);(CF(),this.Xc).className='v-label';this.Uc==-1?PF(this.Xc,241|(this.Xc.__eventBits||0)):(this.Uc|=241)}
function zT(a,b){rI.call(this);a.qd('100%');a.od('100%');(CF(),this.Xc).style[Xvb]=fub;a.Xc.style[Xvb]='all';oI(this,a);yT(this,b)}
function pq(a,b){if(a.h==gvb&&a.m==0&&a.l==0){b&&(kq=nq(0,0,0));return mq((Sq(),Qq))}b&&(kq=nq(a.l,a.m,a.h));return nq(0,0,0)}
function QU(a){if(a.V==-1){if(a.Lb==0){Xg(a.Mb)&&(a.Lb=(a.Mb.offsetWidth||0)|0);a.Lb==0&&(a.Lb=96)}a.V=dr(a.a.r*a.Lb/72)}return a.V}
function uZ(a,b){var c,d;if(a.a.f){c=(b2(),m2(a.a.f));d=n2(a.a.f)}else{c=(b2(),m2(a.a.g));d=n2(a.a.g)}_Z(d1(a.a.D),new DZ(a,b),c,d)}
function IH(a,b){var c;if(b.Wc!=a){return false}try{Pe(b,null)}finally{c=(CF(),b.Xc);_g((null,Jh((Fh(),c))),c);CL(a.o,b)}return true}
function Jhb(a,b,c){var d,e;for(e=a.Ne();e.Xe();){d=e.Ye();if(cr(b)===cr(d)||b!=null&&M(b,d)){c&&e.Ze();return true}}return false}
function cg(){var a;if(Xf!=0){a=Wf();if(a-$f>2000){$f=a;_f=$wnd.setTimeout(lg,10)}}if(Xf++==0){og((ng(),mg));return true}return false}
function Lsb(a,b,c){if(a<0||b>c){throw VD(new idb(Ftb+a+Gtb+b+', size: '+c))}if(a>b){throw VD(new deb(Ftb+a+' > toIndex: '+b))}}
function YS(a,b){switch(CF(),TG((Fh(),b).type)){case itb:case uvb:NV(a.c,b);case 8:case 8192:lX(a.c,b);break;case 64:MV(a.c,b);}}
function JX(a,b){var c,d;if(b){IV(a.kc);IV(a.Qc);IV(a.d);for(d=new Ykb(a.Mc);d.a<d.c.a.length;){c=Wkb(d);!!c&&(c.g=true)}}pb(a.Jb,20)}
function E0(a,b,c){var d,e;if(a.a.J){for(e=new Ykb(a.a.J);e.a<e.c.a.length;){d=Wkb(e);if(d.col1==b&&d.row1==c){return d}}}return null}
function m$(a,b,c,d){var e;e=new jfb;ifb(e,$wnd.Math.abs(d-c)+1);e.a+='R';e.a+=' x ';ifb(e,$wnd.Math.abs(b-a)+1);e.a+='C';return e.a}
function Lp(a,b,c,d){var e,f,g;e=Np(a,b,c);f=e.remove(d);f&&e.isEmpty()&&(g=vib(a.d,b),g.remove(c),g.isEmpty()&&Aib(a.d,b),undefined)}
function GJ(){GJ=AE;uF();new qF('data:image/gif;base64,R0lGODlhBQAJAIAAAAAAAAAAACH5BAEAAAEALAAAAAAFAAkAAAIMRB5gp9v2YlJsJRQKADs=')}
function nqb(){nqb=AE;eqb=new sqb;fqb=new vqb;gqb=new yqb;hqb=new Bqb;iqb=new Eqb;jqb=new Hqb;kqb=new Kqb;lqb=new Nqb;mqb=new Qqb}
function PU(a){var b;b=new Akb;!!a.S&&rkb(b,a.S);skb(b,new Sjb(a.Bc));!!a.T&&skb(b,new Sjb(a.T));!!a.Cc&&skb(b,new Sjb(a.Cc));return b}
function Nh(a){var b=0;var c=a;while(c.offsetParent){b-=c.scrollTop;c=c.parentNode}while(a){b+=a.offsetTop;a=a.offsetParent}return b}
function Mh(a){var b=0;var c=a;while(c.offsetParent){b-=c.scrollLeft;c=c.parentNode}while(a){b+=a.offsetLeft;a=a.offsetParent}return b}
function g2(a){var b;if(a.getBoundingClientRect!=null){var c=a.getBoundingClientRect();b=c.bottom-c.top}else{b=a.offsetHeight}return b}
function blb(a){var b,c,d,e,f;if(a==null){return 0}f=1;for(c=a,d=0,e=c.length;d<e;++d){b=c[d];f=31*f+(b!=null?Q(b):0);f=f|0}return f}
function hfb(a,b,c){var d,e,f,g;f=b+c;Nsb(b,f,a.length);g='';for(e=b;e<f;){d=$wnd.Math.min(e+10000,f);g+=efb(a.slice(e,d));e=d}return g}
function Wgb(a,b){var c,d,e,f;c=b>>5;b&=31;e=a.d+c+(b==0?0:1);d=fq(hr,ixb,17,e,15,1);Xgb(d,a.a,c,b);f=new Hgb(a.e,e,d);pgb(f);return f}
function Ndb(a,b){var c=0;while(!b[c]||b[c]==''){c++}var d=b[c++];for(;c<b.length;c++){if(!b[c]||b[c]==''){continue}d+=a+b[c]}return d}
function tV(a,b,c){return b>=a.bb&&b<=a.xb&&c>=a.db&&c<=a.zb||b<=a.ob&&c<=a.Sc||b>a.ob&&b<=a.xb&&c<=a.Sc||c>a.Sc&&c<=a.zb&&b<=a.ob}
function Lg(){if(Error.stackTraceLimit>0){$wnd.Error.stackTraceLimit=Error.stackTraceLimit=64;return true}return 'stack' in new Error}
function ngb(a,b){if(a.e>b.e){return 1}if(a.e<b.e){return -1}if(a.d>b.d){return a.e}if(a.d<b.d){return -b.e}return a.e*qhb(a.a,b.a,a.d)}
function RR(a){if(yV(a.Q,a.e,a.K)){return he(a.X)}if(uV(a.Q,a.e,a.K)){return he(a.a)}if(xV(a.Q,a.e,a.K)){return he(a.W)}return he(a.b)}
function IV(a){var b,c,d,e;for(e=new Ykb(a);e.a<e.c.a.length;){d=Wkb(e);for(c=new Ykb(d);c.a<c.c.a.length;){b=Wkb(c);!!b&&(b.g=true)}}}
function rU(a){var b,c,d,e;kT(a.Fb);for(d=(e=(new Sjb(a.Eb)).a.Zf().Ne(),new Xjb(e));d.a.Xe();){c=(b=d.a.Ye(),b.gg());ah(c.d)}Cib(a.Eb)}
function beb(a){var b;b=Udb(a);if(b>3.4028234663852886E38){return Infinity}else if(b<-3.4028234663852886E38){return -Infinity}return b}
function mrb(a,b,c,d){($qb?b.Wf()>=irb(a).Wf():_qb?b.Wf()>=(nqb(),800):crb?b.Wf()>=(nqb(),900):brb&&b.Wf()>=(nqb(),xub))&&erb(a,b,c,d)}
function lrb(a,b,c){($qb?b.Wf()>=irb(a).Wf():_qb?b.Wf()>=(nqb(),800):crb?b.Wf()>=(nqb(),900):brb&&b.Wf()>=(nqb(),xub))&&erb(a,b,c,null)}
function wf(a,b,c){var d,e,f,g,h;for(e=(a.i==null&&(a.i=(Fg(),h=Eg.Md(a),Hg(h))),a.i),f=0,g=e.length;f<g;++f){d=e[f];b.Ce(c+'\tat '+d)}}
function w1(a){var b;b=iq(dq(hr,1),ixb,17,15,[0,0,0,0]);b[0]=v1(a,cwb);b[1]=v1(a,Vwb);b[2]=v1(a,'marginBottom');b[3]=v1(a,bwb);return b}
function zkb(a,b){var c,d;d=a.a.length;b.length<d&&(b=Dsb(new Array(d),b));for(c=0;c<d;++c){b[c]=a.a[c]}b.length>d&&(b[d]=null);return b}
function jlb(a,b){var c,d;d=a.a.length;b.length<d&&(b=Dsb(new Array(d),b));for(c=0;c<d;++c){b[c]=a.a[c]}b.length>d&&(b[d]=null);return b}
function RU(a,b){var c,d;d=0;for(c=new Ykb(b);c.a<c.c.a.length;){Wkb(c);if(!x$(a.a,d+1)){return Hsb(d,b.a.length),b.a[d]}++d}return null}
function IU(a){var b,c,d;d=a.zb;b=fh(a.zc);for(c=a.kc.a.length-1;c>0;c--){if(fh(ukb(ukb(a.kc,c),0).d)<=b){return d}else{--d}}return a.zb}
function zcb(){zcb=AE;wcb=new Acb('INFO',0);ycb=new Acb(Jzb,1);vcb=new Acb('ERROR',2);ucb=new Acb('CRITICAL',3);xcb=new Acb('SYSTEM',4)}
function Beb(a){var b,c;if(YD(a,-129)>0&&YD(a,128)<0){b=pE(a)+128;c=(Deb(),Ceb)[b];!c&&(c=Ceb[b]=new ueb(a));return c}return new ueb(a)}
function Tgb(a){mgb();if(YD(a,0)<0){if(YD(a,-1)!=0){return new Igb(-1,hE(a))}return ggb}else return YD(a,10)<=0?igb[pE(a)]:new Igb(1,a)}
function Rdb(a){var b;b=typeof(a);if(Peb(b,ctb)||Peb(b,dtb)||Peb(b,etb)){return true}return a!=null&&a.$implements__java_lang_Comparable}
function Qeb(a,b){Isb(a);if(b==null){return false}if(Peb(a,b)){return true}return a.length==b.length&&Peb(a.toLowerCase(),b.toLowerCase())}
function tT(a,b){return $wnd.Vaadin&&$wnd.Vaadin.Flow&&$wnd.Vaadin.Flow.clients[b]&&$wnd.Vaadin.Flow.clients[b].getByNodeId(parseInt(a))}
function tdb(a){if(a>=48&&a<48+$wnd.Math.min(10,10)){return a-48}if(a>=97&&a<97){return a-97+10}if(a>=65&&a<65){return a-65+10}return -1}
function fR(a,b,c){var d;d=a.e.r;!!d&&Yq(d,158)&&LX(d,a,a.k,a.b,b,c);sh((CF(),a.Xc),'c'+a.b+'r'+a.k);a.b=c;a.k=b;dh(a.Xc,'c'+a.b+'r'+a.k)}
function SR(a,b,c){var d,e,f,g;g=d2(b,c);if(g){d=(Fh(),g).getAttribute(qub)||'';pT(a.Q.wb,d);e=a.Q.wb.a;f=a.Q.wb.b;e!=0&&f!=0&&jS(a,e,f)}}
function acb(){acb=AE;var b;_bb='8.22.0';b=$eb(_bb,'[-.]',4);Vdb(b[0]);Vdb(b[1]);try{Vdb(b[2])}catch(a){a=UD(a);if(!Yq(a,46))throw VD(a)}}
function $Y(a,b){var c,d;for(d=b.keySet().Ne();d.Xe();){c=d.Ye();a.c.contains(c)?s0((!a.C&&(a.C=new x0),a.C),c,b.get(c)):_Y(a,c,b.get(c))}}
function D$(a,b){var c,d;a.A.length>b?(c=a.A[b]):(c=0);a.$.length>b?(d=a.$[b]):(d=0);pW(a.V,c,d);(c!=0||d!=0)&&Z1((ng(),mg),new K0(a,c,d))}
function iX(a,b){a._=false;a.ab=false;rT(a.$,fxb,0);bf(a.sb,false);bL(a.sb,'');ue(a.sb,'0');pe(a.sb,'');qe(a.sb,'');b&&Z1((ng(),mg),new lY(a))}
function YR(a,b,c,d,e){a.G=b;a.I=d;a.H=c;a.J=e;yS(a.B,b,c,d,e);a.ab>0&a.r>0&&yS(a.D,b,c,d,e);a.ab>0&&yS(a.F,b,c,d,e);a.r>0&&yS(a.A,b,c,d,e)}
function Chb(a,b,c,d){yhb();var e,f;e=0;for(f=0;f<c;f++){e=WD(gE(XD(b[f],Ozb),XD(d,Ozb)),XD(pE(e),Ozb));a[f]=pE(e);e=lE(e,32)}return pE(e)}
function $S(a,b,c,d,e){CF();AF.Le(b,Rwb);b.__listener=a;AF.Le(c,Rwb);c.__listener=a;AF.Le(d,Rwb);d.__listener=a;AF.Le(e,Rwb);e.__listener=a}
function MX(a,b,c){var d,e,f;for(e=new Ykb(b);e.a<e.c.a.length;){d=Wkb(e);f=Yvb+d.c+Zvb+d.k;!!c&&Aob(c.b,f)?GM(d):!!a.r&&xib(a.r,f)&&BM(d)}}
function pU(a){var b,c,d,e;for(c=(e=(new Hjb(a.t.a)).a.Zf().Ne(),new Njb(e));c.a.Xe();){b=(d=c.a.Ye(),d.fg());sh(b.d,Zwb)}Cib(a.t.a);Cib(a.u.a)}
function HY(a,b){var c;c=Jh((Fh(),b))?oT(jh(Jh(b))):0;if(a.a.bc||c==1){return f$(a.a.a)}else if(a.a.ac||c==2){return e$(a.a.a)}return false}
function u4(a){var b;b=(!I2&&(I2=new S2),I2).c.b[W3(new Y3(a,'!new'))];if(!b){throw VD(new a4('There is no constructor for '+a.b))}return b}
function v4(a){var b;b=(!I2&&(I2=new S2),I2).c.b[a.b.a+'.'+a.a];if(!b){throw VD(new a4('There is no invoker for '+(a.b.b+'.'+a.a)))}return b}
function x4(a){var b;b=(!I2&&(I2=new S2),I2).c.e[a.b.a+'.'+a.a];if(!b){throw VD(new a4('There is no return type for '+(a.b.b+'.'+a.a)))}return b}
function _cb(b){var c;try{return c=$wnd.JSON.parse(b),c}catch(a){a=UD(a);if(Yq(a,21)){throw VD(new cdb("Can't parse "+b))}else throw VD(a)}}
function RP(b){var c,d,e;try{e=cQ(b);d=e4(e);return d}catch(a){a=UD(a);if(Yq(a,79)){c=a;throw VD(new geb(wwb+xdb(b.pg)+xwb,c))}else throw VD(a)}}
function Jgb(a){mgb();if(a.length==0){this.e=0;this.d=1;this.a=iq(dq(hr,1),ixb,17,15,[0])}else{this.e=1;this.d=a.length;this.a=a;pgb(this)}}
function Fgb(a,b){this.e=a;if(b<Qzb){this.d=1;this.a=iq(dq(hr,1),ixb,17,15,[b|0])}else{this.d=2;this.a=iq(dq(hr,1),ixb,17,15,[b%Qzb|0,b/Qzb|0])}}
function R5(){rI.call(this);new O5(200,new Y5);(CF(),this.Xc).tabIndex=-1;!this.b&&(this.b=k5(this,iq(dq(Is,1),atb,0,2,[])));t5(this.b,this.Xc)}
function Yp(a,b){switch(b.c){case 0:{a['dir']='rtl';break}case 1:{a['dir']='ltr';break}case 2:{Xp(a)!=(aq(),Zp)&&(a['dir']='',undefined);break}}}
function qK(a){if(a.i){if(a.a.G){Vg($doc.body,a.a.B);a.f=BG(a.a.C);kK();a.b=true}}else if(a.b){_g($doc.body,a.a.B);sM(a.f.a);a.f=null;a.b=false}}
function m0(a,b,c,d){if(a.C){if(a.a!=c){MT(a.U,b,d);KT(a.U,c)}else (a.S==null||!alb(a.S,b))&&MT(a.U,b,false)}else{AT(a.U,b);KT(a.U,c)}a.S=b;a.a=c}
function KL(){var a,b;KL=AE;uF();new qF((ag(),a='__gwtDevModeHook:'+$moduleName+':moduleBase',b=$wnd||self,b[a]||$moduleBase)+'clear.cache.gif')}
function NO(a,b){var c,d,e,f,g;g=new Akb;for(d=$eb(b,'[^A-z0-9:!]+',0),e=0,f=d.length;e<f;++e){c=d[e];IO(a,c)&&(g.a[g.a.length]=c,true)}return g}
function Q(a){return br(a)?Wsb(a):$q(a)?dr((Isb(a),a)):Zq(a)?(Isb(a),a)?1231:1237:Xq(a)?a.$c():hq(a)?Qsb(a):!!a&&!!a.hashCode?a.hashCode():Qsb(a)}
function Wq(a,b){if(br(a)){return !!Vq[b]}else if(a.qg){return !!a.qg[b]}else if($q(a)){return !!Uq[b]}else if(Zq(a)){return !!Tq[b]}return false}
function _U(a){var b=a.sheet.cssRules?a.sheet.cssRules:a.sheet.rules;var c=[];for(var d=0;d<b.length;d++){c.push(b[d].cssText)}return c.join(' ')}
function kT(a){var b=a.sheet.cssRules?a.sheet.cssRules:a.sheet.rules;while(b.length>0){a.sheet.deleteRule?a.sheet.deleteRule(0):a.sheet.removeRule(0)}}
function OW(a,b){a.ob=b;XR(a.yc,b);b>0?rT(a.$,'.'+a.Ac+' .top-left-pane .cell.col'+b+', .'+a.Ac+' .bottom-left-pane .cell.col'+b,1):rT(a.$,fxb,1)}
function uX(a,b,c,d,e){var f,g,h;if(b==16){AI(a.rb,e);g=Yvb+c+Zvb+d;h=UU(a,g);h?(f=h.d):(f=JU(a,c,d).d);WJ(a.qb,new fY(a,f))}else{$M(a.qb,false)}}
function oX(a,b,c){var d,e,f;for(e=new Ykb(b);e.a<e.c.a.length;){d=Wkb(e);f=Yvb+d.c+Zvb+d.k;!!c&&xib(c.a,f)?HM(d):!!a.tb&&a.tb.contains(f)&&CM(d)}}
function Wsb(a){Usb();var b,c,d;c=':'+a;d=Tsb[c];if(d!=null){return dr((Isb(d),d))}d=Rsb[c];b=d==null?Vsb(a):dr((Isb(d),d));Xsb();Tsb[c]=b;return b}
function pW(a,b,c){a.Db=false;Cib(a.e);Cib(a.qc);Xg(a.Mb)&&(a.Lb=(a.Mb.offsetWidth||0)|0);fW(a);$R(a.yc,1,1,1,1);a.V=-1;Z1((ng(),mg),new FY(a,b,c))}
function jg(a,b){ag();var c;c=pf;if(c){if(c==Zf){return}mrb(c.a,(nqb(),lqb),a.Gd(),a);return}if(b){ig(Yq(a,81)?a.Id():a)}else{vfb();vf(a,ufb,'','')}}
function Tp(a){var b,c,d;Lf.call(this,Up(a),a.isEmpty()?null:a.Ne().Ye());this.a=a;d=0;for(c=a.Ne();c.Xe();){b=c.Ye();if(d++==0){continue}sf(this,b)}}
function vU(a){var b,c,d,e;for(e=a.Sc>0?a.Sc+1:1;e<=a.zb;e++){d=new Akb;for(c=1;c<=a.ob;c++){b=new NM(a,c,e);Vg(a.c,b.d);d.a[d.a.length]=b}rkb(a.d,d)}}
function BU(a){var b,c,d,e;for(e=1;e<=a.Sc;e++){d=new Akb;for(c=a.ob>0?a.ob+1:1;c<=a.xb;c++){b=new NM(a,c,e);Vg(a.Pc,b.d);d.a[d.a.length]=b}rkb(a.Qc,d)}}
function Lhb(a,b){var c,d,e,f;f=a.size();b.length<f&&(b=Dsb(new Array(f),b));e=b;d=a.Ne();for(c=0;c<f;++c){e[c]=d.Ye()}b.length>f&&(b[f]=null);return b}
function eN(a,b,c){var d;d=(CF(),a.Xc).style;d[bwb]=(WM==-1&&(WM=jN(Cvb)),-WM+(hm(),Kvb));d[cwb]=(XM==-1&&(XM=jN(Dvb)),-XM+Kvb);VJ(a,b,c);aN(a,a.F?0:1)}
function lV(a,b,c){var d,e,f,g;g=d2(b,c);if(g){d=(Fh(),g).getAttribute(qub)||'';pT(a.wb,d);e=a.wb.a;f=a.wb.b;if(e!=0&&f!=0){d_(a.a,e,f);a.Jc=e;a.Kc=f}}}
function He(a,b,c){var d;d=UF(c.b);d==-1?ve(a,c.b):a.Uc==-1?PF((CF(),a.Xc),d|(a.Xc.__eventBits||0)):(a.Uc|=d);return Bp(!a.Vc?(a.Vc=new Ep(a)):a.Vc,c,b)}
function sq(a,b){var c,d,e;if(b<=22){c=a.l&(1<<b)-1;d=e=0}else if(b<=44){c=a.l;d=a.m&(1<<b-22)-1;e=0}else{c=a.l;d=a.m;e=a.h&(1<<b-44)-1}return nq(c,d,e)}
function g$(a,b,c){a.B=false;_O(a.u);a.t=false;if(!EV(a.V)){b==null&&(b='');a.P=Peb(b.substr(0,1),'=')||Peb(b.substr(0,1),'+');iX(a.V,c);a.P||PX(a.V,b)}}
function H6(a){var b,c,d;b=Lrb(Xrb(new $rb(null,new Wpb(G6(a,new c7))),new _6));d=fq(gr,atb,17,b.length,15,1);for(c=0;c<b.length;c++){d[c]=b[c]}return d}
function CS(a){var b,c;c=s$(a.p.q,a.b);for(b=a.b+1;b<=a.c;b++){c+=s$(a.p.q,b)}a.k.style[hub]=c+1+(hm(),Kvb);a.q.style[hub]=c+1+Kvb;a.a.style[hub]=c+1+Kvb}
function PY(a,b,c){var d;d=Ri($doc,'slot');d.setAttribute('name',a);oe(this,(CF(),d));b.setAttribute('slot',a);Ie(this,new RY(c,b),(!dp&&(dp=new An),dp))}
function gq(a,b){var c=new Array(b);var d;switch(a){case 14:case 15:d=0;break;case 16:d=false;break;default:return c;}for(var e=0;e<b;++e){c[e]=d}return c}
function Xeb(a,b,c){var d,e;d=Yeb(b,'([/\\\\\\.\\*\\+\\?\\|\\(\\)\\[\\]\\{\\}$^])','\\\\$1');e=Yeb(Yeb(c,'\\\\','\\\\\\\\'),rtb,'\\\\$');return Yeb(a,d,e)}
function CX(a){var b,c;c=HF(he(a.sb));a.sc<=a.Sc?a.rc<=a.ob?(b=a.Nc):(b=a.Pc):a.rc<=a.ob?(b=a.c):(b=a.zc);if(c!=b){_g(c,he(a.sb));CF();Vg(b,MF(he(a.sb)))}}
function W1(a){var b,c,d,e;e=(b1(),b1(),a1);for(c=new Ykb(e);c.a<c.c.a.length;){b=Wkb(c);d=b.a;!a?null:(D1(d,(CF(),a.Xc).tkPid),null);continue}return null}
function fV(a){var b,c,d,e,f;d=a.db;b=ih(a.zc);for(f=new Ykb(a.kc);f.a<f.c.a.length;){e=Wkb(f);c=RU(a,e);if(!!c&&ih(c.d)>=b){return d}else{++d}}return a.db}
function D0(a,b,c){var d,e;if(a.a.J){for(e=new Ykb(a.a.J);e.a<e.c.a.length;){d=Wkb(e);if(d.col1<=b&&d.row1<=c&&d.col2>=b&&d.row2>=c){return d}}}return null}
function ddb(a){var b;if(a==null){return false}b=typeof(a);return Peb(b,ctb)||Peb(b,dtb)||Peb(b,etb)||a.$implements__java_io_Serializable||Array.isArray(a)}
function sK(a){qK(a);if(a.i){he(a.a).style[zub]=Bub;a.a.N!=-1&&a.a.Ve(a.a.H,a.a.N);MH((JK(),NK()),a.a)}else{a.c||NH((JK(),NK()),a.a)}he(a.a).style[Nvb]=Tub}
function Sbb(a,b){var c,d;if(b.indexOf('android')==-1){return}c=Ybb(b,b.indexOf('android ')+8,b.length);c=Ybb(c,0,c.indexOf(';'));d=$eb(c,'\\.',0);Wbb(a,d)}
function DU(a,b,c){var d;++b;++c;d=Yvb+b+Zvb+c;if(xib(a.b,d)){a.o=true;a.Q=wib(a.b,d);JN(a.Q,true)}else{a.o=true;a.k=b;a.n=c;_W(a,b,c);a.Q=a.q;JN(a.q,true)}}
function cW(a){var b,c,d,e;if(a.Cc){for(e=(c=(new Sjb(a.Cc)).a.Zf().Ne(),new Xjb(c));e.a.Xe();){d=(b=e.a.Ye(),b.gg());d.e.M&&!!d.d&&tV(d.d,d.b,d.k)&&$Q(d)}}}
function G6(a,b){var c,d,e,f,g;d=new Akb;if(a==null||a.length==0||Peb(otb,a)){return d}e=_cb(a);for(c=0;c<e.length;c++){f=(g=e[c],g);rkb(d,b.Nf(f))}return d}
function xq(a,b){var c,d,e;e=a.h-b.h;if(e<0){return false}c=a.l-b.l;d=a.m-b.m+(c>>22);e+=d>>22;if(e<0){return false}a.l=c&fvb;a.m=d&fvb;a.h=e&jtb;return true}
function FR(a){var b;if(a.d.o){a.d.o=false;fW(a.c)}if(!EV(a.c)&&!a.d.e&&!!a.d.p&&NZ(a.d.p,bV(a.c))){b=MZ(a.d.p,bV(a.c));a.d.o=true;VO(a.d.u,false);CU(a.c,b)}}
function oT(b){try{var c=b.charAt(0);if(c==='r'){c=b.charAt(1);if(c==='h'){return 1}}else if(c==='c'){c=b.charAt(1);if(c==='h'){return 2}}}catch(a){}return 0}
function OK(a){JK();var b;b=vib(HK,a);if(b){if(!a||(CF(),b.Xc==a)){return b}}Dib(HK)==0&&zG(new RK);!a?(b=new TK):(b=new KK(a));yib(HK,a,b);Xnb(IK,b);return b}
function cQ(b){var c;try{return x4(new Y3(new f4(b.pg),'getState'))}catch(a){a=UD(a);if(Yq(a,79)){c=a;throw VD(new geb(wwb+xdb(b.pg)+xwb,c))}else throw VD(a)}}
function ZR(a,b){if(b==(ke(a.B)||!!a.A&&ke(a.A)||!!a.F&&ke(a.F)||!!a.D&&ke(a.D))){return}AS(a.B,b);!!a.D&&AS(a.D,b);!!a.F&&AS(a.F,b);!!a.A&&AS(a.A,b);_R(a,!b)}
function E2(a,b){var c=a.split('.');while(typeof b==Zsb){var d=c.shift();if(!(d in b)){return false}else if(c.length==0){return true}else{b=b[d]}}return false}
function dT(a,b){var c,d;c=yj(b.a);if(a.b._){if(c==13){I$(a.b.a,(d=_K(a.b.sb),d==null?'':d),zj(b.a))}else{jV(a.b);dP(a.a,true);ZO(a.a);eP(a.a);AO(a.a)}}Dj(b.a)}
function IT(a,b){if(b==null){a.f.style[Gub]=(zk(),fub);a.c.style[Vwb]=(hm(),Lvb)}else{a.c.style[Vwb]=(hm(),'206.0px');a.f.style[Gub]=(zk(),'inline');xh(a.f,b)}}
function UU(a,b){var c,d,e,f;for(d=(f=(new Sjb(a.Eb)).a.Zf().Ne(),new Xjb(f));d.a.Xe();){c=(e=d.a.Ye(),e.gg());if(Peb(b,Yvb+c.c+Zvb+c.k)){return c}}return null}
function PX(a,b){var c,d,e;e=aV(a);(wV(a,a.rc,a.sc)||vV(a,a.rc,a.sc))&&!!e&&EM(e,b);d=a.Sc>0?0:a.bb;for(;d<a.rc;d++){c=JU(a,d,a.sc);!!c&&(c.g=true)}JX(a,false)}
function s1(a){if(!a.b){return false}if(a.a.t==5&&a.a.s&&p1(a)>=534){return false}if(a.a.t==4&&a.a.s&&a.a.u>=6){return false}if(a.a.j){return false}return true}
function $D(a,b){var c;if(cE(a)&&cE(b)){c=a/b;if(gtb<c&&c<htb){return c<0?$wnd.Math.ceil(c):$wnd.Math.floor(c)}}return ZD(oq(cE(a)?nE(a):a,cE(b)?nE(b):b,false))}
function Vbb(a,b){var c,d;if(b.indexOf('os ')==-1||b.indexOf(' like mac')==-1){return}c=Ybb(b,b.indexOf('os ')+3,b.indexOf(' like mac'));d=$eb(c,'_',0);Wbb(a,d)}
function OM(a,b,c,d){this.n=a;this.c=b;this.k=c;this.d=Qi($doc);if(!d){this.o=null}else{this.f=d.needsMeasure;this.o=d.value;this.b=d.cellStyle}KM(this);LM(this)}
function odb(a,b){var c,d;kdb();return br(a)?(c=(Isb(a),a),d=(Isb(b),b),c==d?0:c<d?-1:1):$q(a)?Ydb((Isb(a),a),(Isb(b),b)):Zq(a)?ndb((Isb(a),a),(Isb(b),b)):a.ie(b)}
function fW(a){var b,c;if(a.R){a.R=false;sh(he(a.S),gxb);Pe(a.S,null);Ne(a.S);if(a.Db){c=aV(a);if(c){b=wib(a.e,Yvb+a.rc+Zvb+a.sc);EM(c,!b?null:b.value)}}a.S=null}}
function sW(a){var b,c,d;d=new Akb;yU(a,a.w,d);c=dU(a);zU(a,d,a.db,a.zb,c);b=cU(a);xU(a,d,a.bb,a.xb,b);a.ob>0&&xU(a,d,1,a.ob,0);a.Sc>0&&zU(a,d,1,a.Sc,0);vW(a.w,d)}
function Zhb(a,b){var c,d,e;c=b.fg();e=b.gg();d=a.get(c);if(!(cr(e)===cr(d)||e!=null&&M(e,d))){return false}if(d==null&&!a.containsKey(c)){return false}return true}
function Aq(a,b){var c,d,e,f,g,h,i,j;i=a.h>>19;j=b.h>>19;if(i!=j){return j-i}e=a.h;h=b.h;if(e!=h){return e-h}d=a.m;g=b.m;if(d!=g){return d-g}c=a.l;f=b.l;return c-f}
function CV(a,b){var c,d,e,f;for(d=(f=(new Sjb(a.Eb)).a.Zf().Ne(),new Xjb(f));d.a.Xe();){c=(e=d.a.Ye(),e.gg());if(Peb(b,Yvb+c.c+Zvb+c.k)){return true}}return false}
function bX(a,b,c,d,e,f){var g,h,i,j,k;for(k=e;k<=f;k++){for(g=c;g<=d;g++){j=Yvb+g+Zvb+k;if(Aob(b.b,j)){CV(a,j)?(h=UU(a,j)):(h=JU(a,g,k));i=Bob(b.b,j);YT(a,h,i)}}}}
function _5(a){if(a.b){ob(a.b);a.b=null}if((!a.K&&(a.K=RP(a)),a.K).i>=0){a.b=new p6(a);qb(a.b,(!a.K&&(a.K=RP(a)),a.K).i)}else{null.sg(new bcb(a.G,(vdb(bB),bB.k)))}}
function XI(a,b){Oe(a,Ti($doc));YF((CF(),a.Xc),ovb);a.Uc==-1?PF(a.Xc,133398655|(a.Xc.__eventBits||0)):(a.Uc|=133398655);!!a.a&&(a.Xc[Avb]='',undefined);rj(a.Xc,b.a)}
function _T(a,b,c){var d,e;e=a.Sc>=c.b;d=a.ob>=c.a;e&&d?Vg(a.Nc,(CF(),c.Xc)):e?Vg(a.Pc,(CF(),c.Xc)):d?Vg(a.c,(CF(),c.Xc)):Vg(a.zc,(CF(),c.Xc));Pe(c,a);zib(a.Bc,b,c)}
function Ne(a){if(!a.Wc){JK();Ynb(IK,a)&&LK(a)}else if(Yq(a.Wc,31)){a.Wc.Oe(a)}else if(a.Wc){throw VD(new feb("This widget's parent does not implement HasWidgets"))}}
function B4(a,b){var c;if(SF(b.d)==8){sM(a.e.a);c=e2(b.d);!!a.d&&c==a.d?(a.g=true):krb(trb((vdb(xz),xz.k)),'Ignoring mouseup from '+c+' when mousedown was on '+a.d)}}
function wJ(a,b){var c,d,e,f;if(!a.i){return}d=vkb(a.b,b,0);if(d==-1){return}c=a.i?a.d:FF(a.d);f=(CF(),AF.Ee(c,d));e=AF.Fe(f);e==2&&_g(f,AF.Ee(f,1));b.Xc['colSpan']=2}
function Y4(a,b,c){var d,e,f;$wnd.Math.abs(b-c);e=350;e<=0&&(e=1);krb(trb((vdb(Mz),Mz.k)),'Animate '+e+' '+c+' '+b);f=-b+a.n;d=-c+a.n;if(V4){d-=a.n;f-=a.n}i5(a,e,d,f)}
function Igb(a,b){this.e=a;if(_D(XD(b,-4294967296),0)){this.d=1;this.a=iq(dq(hr,1),ixb,17,15,[pE(b)])}else{this.d=2;this.a=iq(dq(hr,1),ixb,17,15,[pE(b),pE(kE(b,32))])}}
function chb(a){var b,c,d;if(YD(a,0)>=0){c=$D(a,hvb);d=fE(a,hvb)}else{b=lE(a,1);c=$D(b,500000000);d=fE(b,500000000);d=WD(jE(d,1),XD(a,1))}return iE(jE(d,32),XD(c,Ozb))}
function vE(b,c,d,e){uE();var f=sE;$moduleName=c;$moduleBase=d;OD=e;function g(){for(var a=0;a<f.length;a++){f[a]()}}
if(b){try{Ysb(g)()}catch(a){b(c,a)}}else{Ysb(g)()}}
function Hg(a){var b,c,d,e;b='Gg';c='Ff';e=$wnd.Math.min(a.length,5);for(d=e-1;d>=0;d--){if(Peb(a[d].d,b)||Peb(a[d].d,c)){a.length>=d+1&&a.splice(0,d+1);break}}return a}
function $m(a,b,c){var d,e,f,g,h;if(Xm){h=yo(Xm,(Fh(),a).type);if(h){for(g=h.Ne();g.Xe();){f=g.Ye();d=f.a.a;e=f.a.b;Ym(f.a,a);Zm(f.a,c);Je(b,f.a);Ym(f.a,d);Zm(f.a,e)}}}}
function Ubb(b,c){b.u=-1;b.v=-1;if(c.length>2){try{b.u=Vdb(c[1])}catch(a){a=UD(a);if(!Yq(a,21))throw VD(a)}try{b.v=Vdb(c[0])}catch(a){a=UD(a);if(!Yq(a,21))throw VD(a)}}}
function $hb(a,b,c){var d,e,f;for(e=a.Zf().Ne();e.Xe();){d=e.Ye();f=d.fg();if(cr(b)===cr(f)||b!=null&&M(b,f)){if(c){d=new fkb(d.fg(),d.gg());e.Ze()}return d}}return null}
function NT(a){var b;if(a.s==0){dh(a.p,Uub);dh(a.n,Uub)}else{sh(a.p,Uub);sh(a.n,Uub)}b=FT(a,a.u.length-1);if(a.s<b){sh(a.q,Uub);sh(a.o,Uub)}else{dh(a.q,Uub);dh(a.o,Uub)}}
function YT(a,b,c){var d;if(!b||!c){return}EM(b,null);d=c.Wc;if(d){if(a==d){Vg(b.d,(CF(),c.Xc))}else{Ne(c);Vg(b.d,(CF(),c.Xc));Pe(c,a)}}else{Vg(b.d,(CF(),c.Xc));Pe(c,a)}}
function Kg(a){Fg();var b=a.backingJsObject;if(b&&b.stack){var c=b.stack;var d=b+'\n';c.substring(0,d.length)==d&&(c=c.substring(d.length));return c.split('\n')}return []}
function uhb(a,b,c,d,e){var f,g;f=0;for(g=0;g<e;g++){f=WD(f,mE(XD(b[g],Ozb),XD(d[g],Ozb)));a[g]=pE(f);f=kE(f,32)}for(;g<c;g++){f=WD(f,XD(b[g],Ozb));a[g]=pE(f);f=kE(f,32)}}
function oF(){oF=AE;new eF('');kF=new RegExp('[&<>\'"]');iF=new RegExp('&','g');jF=new RegExp('>','g');lF=new RegExp('<','g');nF=new RegExp("'",'g');mF=new RegExp('"','g')}
function n$(a){var b,c;if(a.u.f);else if(a.B||a.t){a.c=true;b=(c=_K(a.u.j),c==null?'':c);aab(a.W,a.V.sc,a.V.rc,b);g$(a,b,true)}else if(a.o){a.o=false;fW(a.V);VO(a.u,true)}}
function wfb(a,b,c,d,e){vfb();var f,g;Jsb(a,'src');Jsb(c,'dest');O(a);O(c);g=a.length;f=c.length;if(b<0||d<0||e<0||b+e>g||d+e>f){throw VD(new hdb)}e>0&&zsb(a,b,c,d,e,true)}
function dh(a,b){var c,d;b=Dh(b);d=a.className||'';c=Bh(d,b);if(c==-1){d.length>0?(a.className=d+' '+b||'',undefined):(a.className=b||'',undefined);return true}return false}
function uJ(a){var b,c,d;if(!a.g){return}c=vkb(a.f,a.g,0);b=c;while(true){c=c+1;c==a.f.a.length&&(c=0);if(c==b){d=ukb(a.f,b);break}else{d=ukb(a.f,c);if(d.b){break}}}tJ(a,d)}
function vJ(a){var b,c,d;if(!a.g){return}c=vkb(a.f,a.g,0);b=c;while(true){c=c-1;c<0&&(c=a.f.a.length-1);if(c==b){d=ukb(a.f,b);break}else{d=ukb(a.f,c);if(d.b){break}}}tJ(a,d)}
function vR(a,b,c){var d;d=t$(a.d,b,c);if(d){a.a=b;a.b=c;b=d.col1;c=d.row1}else{a.a=0;a.b=0}nX(a.c,b,c);BW(a.c,b,c);t0(a.d,b,c,null);FR(a);_9(a.d.W,c,b,false);pb(a.d.s,200)}
function a6(a){var b,c,d;d=kh($doc.getElementsByTagName(Yxb)[0],Xtb);for(b=0;b<d.length;b++){c=d[b];if(Peb(Zxb,c.rel)&&Peb(pxb,c.type)&&Peb(a,c.href)){return c}}return null}
function gfb(a){var b;b=0;while(0<=(b=a.indexOf('\\',b))){Osb(b+1,a.length);a.charCodeAt(b+1)==36?(a=a.substr(0,b)+'$'+_eb(a,++b)):(a=a.substr(0,b)+(''+_eb(a,++b)))}return a}
function dG(a,b){var c,d,e,f,g;if(!!ZF&&!!a&&Dp(a,ZF)){c=$F.a;d=$F.b;e=$F.c;f=$F.d;_F($F);aG($F,b);Cp(a,$F);g=!($F.a&&!$F.b);$F.a=c;$F.b=d;$F.c=e;$F.d=f;return g}return true}
function bS(a,b){if(b==((CF(),a.Xc).style.display!=fub||!!a.a&&ke(a.a)||!!a.X&&ke(a.X)||!!a.W&&ke(a.W))){return}De(a.Xc,b);!!a.W&&te(a.W,b);!!a.X&&te(a.X,b);!!a.a&&te(a.a,b)}
function b5(a){var b,c,d;if(V4){a.q[czb]=a.c}else{for(c=new Ykb(a.g);c.a<c.c.a.length;){b=Wkb(c);d=b.style;d[iwb]='translate3d(0,0,0)'}zh(a.q,a.c)}W4=null;sM(a.d.a);a.d=null}
function NN(a,b,c,d){a.c=b;a.d=c;a.b=d;(CF(),a.Xc).style[Hub]=Uub;!!a.t&&(a.t.style[Hub]=Uub,undefined);a.i.style[Hub]=(vm(),Uub);hN(a);a.k=nh(a.Xc,Jvb);a.n=nh(a.Xc,eub);GN(a)}
function J4(a,b){var c,d,e,f;if(!a.a.q){return false}f=uj(b.a)[0];d=_h((Fh(),f).clientX||0)-a.a.A;e=_h(f.clientY||0)-a.a.B;c=d*d+e*e;if(c>a.a.k*a.a.k){return true}return false}
function YU(a){var b,c,d,e;if(a.kc.a.length==0){return a.xb}d=a.xb;b=ukb(a.kc,0);e=b.size();for(c=e-1;c>0;c--){if(hh(b.getAtIndex(c).d)<hh(a.zc)){return d}else{--d}}return a.xb}
function SV(a){var b,c;if(a.Db){b=(a.zc.offsetHeight||0)|0;c=(a.zc.offsetWidth||0)|0;if(b>a.oc||c>a.pc){a.oc=b;a.pc=c;a.Ob=-a.a.j;a.Pb=-a.a.L;N5(a.lc)}else{a.oc=b;a.pc=c}_V(a)}}
function Mhb(a){var b,c,d;d=new aqb('[',']');for(c=a.Ne();c.Xe();){b=c.Ye();_pb(d,b===a?'(this Collection)':b==null?otb:DE(b))}return !d.a?d.c:d.e.length==0?d.a.a:d.a.a+(''+d.e)}
function AM(a){var b;if(a.i){LM(a);!!a.j&&Vg(a.d,a.j)}b=vib(a.n.qc,new RM(a.o,a.b,a.k,a.c));if(!b){b=reb((a.d.scrollWidth||0)|0);yib(a.n.qc,new RM(a.o,a.b,a.k,a.c),b)}return b.a}
function bH(){$G=Ysb(gH);_G=Ysb(hH);var c=xH;var d=XG;c(d,function(a,b){d[a]=Ysb(b)});var e=ZG;c(e,function(a,b){e[a]=Ysb(b)});c(e,function(a,b){$wnd.addEventListener(a,b,true)})}
function JJ(a,b){oe(this,(CF(),aj($doc)));re(this,xe(this.Xc)+'-'+Hvb,false);wh(this.Xc,a);this.Xc.className='gwt-MenuItem';th(this.Xc,'id',gj($doc));Pd();Cb(kd,this.Xc);this.a=b}
function EX(a,b){var c,d,e,f,g;for(f=(g=(new Sjb(a.Eb)).a.Zf().Ne(),new Xjb(g));f.a.Xe();){e=(c=f.a.Ye(),c.gg());d=Yvb+e.c+Zvb+e.k;!!b&&Aob(b.b,d)?GM(e):!!a.r&&xib(a.r,d)&&BM(e)}}
function NU(a){var b,c;if(a.K.a.length==0){return 0}b=0;while(x$(a.a,b+1)){++b}c=new M1;!!a.ib&&a.ib.a.length>0&&b<=a.ib.a.length?J1(c,ukb(a.ib,b)):J1(c,ukb(a.K,b));return dr(c.b)}
function ZU(a){var b,c;if(a.ic.a.length==0){return 0}b=0;while(y$(a.a,b+1)){++b}c=new M1;!!a.jb&&a.jb.a.length>0&&b<=a.jb.a.length?J1(c,ukb(a.jb,b)):J1(c,ukb(a.ic,b));return dr(c.e)}
function DW(a,b){var c,d,e;if(!!a.ib&&a.ib.a.length>b-1){Xnb(a.uc,reb(b));d=ukb(a.ib,b-1);dh(d,axb)}else{Xnb(a.tc,reb(b));e=b-a.bb;if(e>=0&&a.K.a.length>e){c=ukb(a.K,e);dh(c,axb)}}}
function EW(a,b){var c,d;if(!!a.jb&&a.jb.a.length>b-1){Xnb(a.vc,reb(b));c=ukb(a.jb,b-1);dh(c,_wb)}else{Xnb(a.wc,reb(b));d=b-a.db;if(d>=0&&a.ic.a.length>d){c=ukb(a.ic,d);dh(c,_wb)}}}
function Fhb(a,b){yhb();var c,d;d=(mgb(),hgb);c=a;for(;b>1;b>>=1){(b&1)!=0&&(d=zgb(d,c));c.d==1?(c=zgb(c,c)):(c=new Jgb(Hhb(c.a,c.d,fq(hr,ixb,17,c.d<<1,15,1))))}d=zgb(d,c);return d}
function xob(){function b(){try{return (new Map).entries().next().done}catch(a){return false}}
if(typeof Map==='function'&&Map.prototype.entries&&b()){return Map}else{return yob()}}
function HT(a,b){if(a.s<b){do{a.t-=GT(a,a.s);++a.s}while(a.s<b);a.c.style[bwb]=a.t+(hm(),Kvb)}else if(a.s>b){do{--a.s;a.t+=GT(a,a.s)}while(a.s>b);a.c.style[bwb]=a.t+(hm(),Kvb)}NT(a)}
function t2(a){s2();krb(r2,(vdb(a),'asking for '+a.k));if(ly==a){krb(r2,(vdb(KA),'Returning '+KA.k+' from fake RpcProxy'));return new pbb}throw VD(new feb(''+a+' is not supported'))}
function yg(b,c){var d,e,f,g;for(e=0,f=b.length;e<f;e++){g=b[e];try{g[1]?g[0].Jd()&&(c=xg(c,g)):g[0].Kd()}catch(a){a=UD(a);if(Yq(a,20)){d=a;ag();jg(d,true)}else throw VD(a)}}return c}
function cS(a){var b;if(a._){!!a.$&&$M(a.$,false);a.$=new yN;dN(a.$,a.Q.a);re(a.$,Hwb,true);b=new xJ;gJ(b,new IJ(new eF(cF(new dF).a.a),new qS(a)));oI(a.$,b);Z1((ng(),mg),new sS(a))}}
function Vgb(a,b){var c,d,e;e=a.e;if(b==0||a.e==0){return}d=b>>5;a.d-=d;if(!$gb(a.a,a.d,a.a,d,b&31)&&e<0){for(c=0;c<a.d&&a.a[c]==-1;c++){a.a[c]=0}c==a.d&&++a.d;++a.a[c]}pgb(a);a.b=-2}
function Xgb(a,b,c,d){var e,f,g;if(d==0){wfb(b,0,a,c,a.length-c)}else{g=32-d;a[a.length-1]=0;for(f=a.length-1;f>c;f--){a[f]|=b[f-c-1]>>>g;a[f-1]=b[f-c-1]<<d}}for(e=0;e<c;e++){a[e]=0}}
function sf(a,b){Jsb(b,'Cannot suppress a null exception.');Esb(b!=a,'Exception can not suppress itself.');if(a.g){return}a.j==null?(a.j=iq(dq(OB,1),atb,20,0,[b])):(a.j[a.j.length]=b)}
function eg(b,c,d){var e,f;e=cg();try{if(pf){try{return bg(b,c,d)}catch(a){a=UD(a);if(Yq(a,20)){f=a;jg(f,true);return undefined}else throw VD(a)}}else{return bg(b,c,d)}}finally{fg(e)}}
function KT(a,b){var c,d;a.r!=-1&&sh(a.u[a.r],Wwb);a.r=b-1;c=a.u[a.r];dh(c,Wwb);if(a.s>a.r){HT(a,a.r)}else if(hh(a.k)<(Fh(),Eh).Xd(c)+((c.offsetWidth||0)|0)&&!a.d){d=FT(a,a.r);HT(a,d)}}
function K2(a,b){var c,d,e;if(a.b.a.length!=0){for(d=new Ykb(a.b);d.a<d.c.a.length;){c=Wkb(d);e=null.sg();if(Peb(b.substr(0,e.length),e)){M2(a,null.tg+' '+null.tg);ykb(a.b,c);return}}}}
function Cp(b,c){var d,e;!c.e||c.ne();e=c.f;Um(c,b.b);try{Kp(b.a,c)}catch(a){a=UD(a);if(Yq(a,89)){d=a;throw VD(new Vp(d.a))}else throw VD(a)}finally{e==null?(c.e=true,c.f=null):(c.f=e)}}
function jN(b){try{var c=$wnd.document.body;var d=c.currentStyle?c.currentStyle:getComputedStyle(c);if(d&&d.position=='relative'){return c.getBoundingClientRect()[b]}}catch(a){}return 0}
function FX(a,b){var c,d,e,f,g;for(f=(g=(new Sjb(a.Eb)).a.Zf().Ne(),new Xjb(g));f.a.Xe();){e=(c=f.a.Ye(),c.gg());d=Yvb+e.c+Zvb+e.k;!!b&&xib(b.a,d)?HM(e):!!a.tb&&a.tb.contains(d)&&CM(e)}}
function _0(){var a=document.createElement(Uxb);var b=['animation','oAnimation','mozAnimation','webkitAnimation'];for(var c=0;c<b.length;c++){if(a.style[b[c]]!==undefined){return b[c]}}}
function ffb(a){var b,c;if(a>=ttb){b=55296+(a-ttb>>10&1023)&utb;c=56320+(a-ttb&1023)&utb;return String.fromCharCode(b)+(''+String.fromCharCode(c))}else{return String.fromCharCode(a&utb)}}
function y7(a,b){this.c=new Vnb;this.a=new Vnb;this.b=new Vnb;this.d=fq(MB,stb,2,0,6,1);!!a&&(this.e=new jZ,gZ(this.e,a,b),SP(this.e,new g1),this.f=hQ(this.e),MH(OK(b),this.f),undefined)}
function Vqb(a,b){var c,d,e,f;c=wib(a.a,b);if(!c){d=new srb(b);e=(drb(),arb)?null:d.c;f=afb(e,0,$wnd.Math.max(0,Ueb(e,ffb(46))));orb(d,Vqb(a,f));zib(a.a,arb?null:d.c,d);return d}return c}
function HX(a,b){var c,d,e,f;e=Yvb+b.col1+Zvb+b.row1;f=vib(a.Eb,reb(b.id));Aib(a.Kb,b);GX(a,b,f);d=f.d;if(xib(a.b,e)){c=wib(a.b,e);Peb(Hj(d.style),(zk(),fub))?($M(c,false),ah(c.i)):GN(c)}}
function q2(a,b,c){var d,e,f,g,h;for(f=(zcb(),iq(dq(YA,1),atb,77,0,[wcb,ycb,vcb,ucb,xcb])),g=0,h=f.length;g<h;++g){e=f[g];d=b+'-'+bfb(e.b!=null?e.b:''+e.c,(hpb(),fpb));c==e?dh(a,d):sh(a,d)}}
function Tnb(){Tnb=AE;Rnb=iq(dq(MB,1),stb,2,6,['Sun','Mon','Tue','Wed','Thu','Fri','Sat']);Snb=iq(dq(MB,1),stb,2,6,['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'])}
function yE(){xE={};!Array.isArray&&(Array.isArray=function(a){return Object.prototype.toString.call(a)==='[object Array]'});function b(){return (new Date).getTime()}
!Date.now&&(Date.now=b)}
function dfb(a){var b,c,d;c=a.length;d=0;while(d<c&&(Osb(d,a.length),a.charCodeAt(d)<=32)){++d}b=c;while(b>d&&(Osb(b-1,a.length),a.charCodeAt(b-1)<=32)){--b}return d>0||b<c?a.substr(d,b-d):a}
function wL(){JH.call(this);this.d=(CF(),cj($doc));this.c=_i($doc);Vg(this.d,MF(this.c));ne(this,this.d);this.a=(HI(),EI);this.b=(KI(),JI);this.d['cellSpacing']='0';this.d['cellPadding']='0'}
function t1(){k1();var a;this.a=new $bb(u1());if(this.a.j){a=n1();a!=-1&&Zbb(this.a,a)}this.a.e?(this.b=avb in window):this.a.j?(this.b=!!navigator.msMaxTouchPoints):(this.b=!this.a.p&&l1())}
function Z4(a){var b,c,d,e,f;if(a.k<3){krb(trb((vdb(Mz),Mz.k)),'Not enough data for speed calculation');return 0}d=a.k%3;b=a.s[d];c=a.b[d];d+=3;--d;d=d%3;e=a.s[d];f=a.b[d];return (b-e)/(f-c)}
function UH(b,c){SH();var d,e,f,g;d=null;for(g=b.Ne();g.Xe();){f=g.Ye();try{c.Pe(f)}catch(a){a=UD(a);if(Yq(a,20)){e=a;!d&&(d=new $nb);yib(d.a,e,d)}else throw VD(a)}}if(d){throw VD(new TH(d))}}
function l4(a,b,c){var d,e,f,g;d=(!I2&&(I2=new S2),I2).c.d[(new f4(b)).b];if(!d){d={};a.d[(new f4(b)).b]=d}for(f=new pmb(c.c.b.Ne());f.b.Xe();){e=f.b.Ye();g=d[e];if(!g){g=[];d[e]=g}g.push(c)}}
function Mcb(){Mcb=AE;Kcb=new Ncb('WEBSOCKET',0,'websocket');Lcb=new Ncb('WEBSOCKET_XHR',1,'websocket-xhr');Jcb=new Ncb('STREAMING',2,'streaming');Icb=new Ncb('LONG_POLLING',3,'long-polling')}
function LM(a){a.d.style[Nvb]=(ql(),Uub);if(a.o==null||a.o.length==0){xh(a.d,'');a.d.style[Iub]=''}else{a.d.style[Iub]='1';a.f&&a.ff()>0&&JV(a.n,a.b,a.o)>a.ff()?xh(a.d,'###'):xh(a.d,a.o)}zM(a)}
function oQ(a,b,c,d){var e,f;Peb(c.substr(0,1),'-')?(f='-'.length,Peb(b.substr(b.length-f,f),'-')&&Zeb(c,'-','')):(e='-'.length,Peb(b.substr(b.length-e,e),'-')||(b+='-'));a.yf().pd(b+(''+c),d)}
function rT(a,b,c){if(!a.sheet.cssRules[c]){return -1}var d=a.sheet.cssRules[c].selectorText;var e=a.sheet.cssRules[c].cssText.replace(d,b);a.sheet.deleteRule(c);return a.sheet.insertRule(e,c)}
function Udb(a){Sdb==null&&(Sdb=new RegExp('^\\s*[+-]?(NaN|Infinity|((\\d+\\.?\\d*)|(\\.\\d+))([eE][+-]?\\d+)?[dDfF]?)\\s*$'));if(!Sdb.test(a)){throw VD(new Ieb(ntb+a+'"'))}return parseFloat(a)}
function Gq(a,b){var c,d,e;b&=63;if(b<22){c=a.l<<b;d=a.m<<b|a.l>>22-b;e=a.h<<b|a.m>>22-b}else if(b<44){c=0;d=a.l<<b-22;e=a.m<<b-22|a.l>>44-b}else{c=0;d=0;e=a.l<<b-44}return nq(c&fvb,d&fvb,e&jtb)}
function pT(h,a){var b=a.length;var c=0;var d=0;var e=0;var f=0;var g=0;while(c<b){d=a.charCodeAt(c);d===32?(e=e+1):d>47&&d<58&&(e===0?(g=g*10+d-48):(f=f*10+d-48));if(e===2){break}c++}h.b=f;h.a=g}
function CU(a,b){var c,d,e;a.R=true;rT(a.$,fxb,0);a.S=b;e=aV(a);if(!e){return}EM(e,null);d=b.Wc;!!d&&a!=d&&Ne(b);c=e.d;dh(c,gxb);Vg(c,(CF(),b.Xc));(!d||!!d&&a!=d)&&Pe(b,a);Z1((ng(),mg),new lY(a))}
function Pe(a,b){var c;c=a.Wc;if(!b){try{!!c&&c.ud()&&a.xd()}finally{a.Wc=null}}else{if(c){throw VD(new feb('Cannot set a new parent without first clearing the old parent'))}a.Wc=b;b.ud()&&a.vd()}}
function cJ(a,b,c,d){var e,f,g,h;h=(CF(),a.Xc);g=Xi($doc);g.text=b;g.removeAttribute(Gvb);g.value=c;f=(Fh(),h).options.length;(d<0||d>f)&&(d=f);if(d==f){Oh(h,g,null)}else{e=h.options[d];Oh(h,g,e)}}
function YN(a,b){if(a.b==b){return}if(b){a.a.innerHTML='+';Ae((CF(),a.Xc),'minus',false);Ae(a.Xc,'plus',true)}else{a.a.innerHTML='&#x2212;';Ae((CF(),a.Xc),'plus',false);Ae(a.Xc,'minus',true)}a.b=b}
function FT(a,b){var c;c=((a.k.offsetWidth||0)|0)-((a.i.offsetWidth||0)|0);Peb(Hj(a.f.style),fub)||(c-=(a.f.offsetWidth||0)|0);c=dr(c-GT(a,b));while(b>0&&c-GT(a,b-1)>0){--b;c=dr(c-GT(a,b))}return b}
function nU(a){var b,c,d,e;DN(a.q);for(c=(e=(new Sjb(a.b)).a.Zf().Ne(),new Xjb(e));c.a.Xe();){b=(d=c.a.Ye(),d.gg());$M(b,false);ah(b.i)}Cib(a.b);!!a.r&&Cib(a.r);!!a.i&&Cib(a.i);!!a.tb&&a.tb.clear()}
function CO(a){var b,c,d,e;for(c=(e=(new Hjb(a.F.a)).a.Zf().Ne(),new Njb(e));c.a.Xe();){b=(d=c.a.Ye(),d.fg());b.d.style[nwb]='';b.d.style[owb]=''}Cib(a.F.a);a.i.a=fq(GB,atb,1,0,5,1);Cib(a.D);$g(a.r)}
function flb(a,b,c,d,e){var f,g,h,i;f=d-c;if(f<7){clb(b,c,d);return}h=c+e;g=d+e;i=h+(g-h>>1);flb(b,a,h,i,-e);flb(b,a,i,g,-e);if(Dnb(a[i-1],a[i])<=0){while(c<d){b[c++]=a[h++]}return}dlb(a,h,i,g,b,c,d)}
function Pf(a){var b;if(a.c==null){b=cr(a.b)===cr(Nf)?null:a.b;a.d=b==null?otb:_q(b)?b==null?null:b.name:br(b)?'String':wdb(O(b));a.a=a.a+': '+(_q(b)?b==null?null:b.message:b+'');a.c='('+a.d+') '+a.a}}
function $gb(a,b,c,d,e){var f,g,h;f=true;for(g=0;g<d;g++){f=f&c[g]==0}if(e==0){wfb(c,d,a,0,b);g=b}else{h=32-e;f=f&c[g]<<h==0;for(g=0;g<b-1;g++){a[g]=c[g+d]>>>e|c[g+d+1]<<h}a[g]=c[g+d]>>>e;++g}return f}
function vf(a,b,c,d){var e,f,g,h,i;b.Ce(d+c+a);wf(a,b,d);for(f=(a.j==null&&(a.j=fq(OB,atb,20,0,0,1)),a.j),g=0,h=f.length;g<h;++g){e=f[g];vf(e,b,'Suppressed: ','\t'+d)}i=a.e;!!i&&vf(i,b,'Caused by: ',d)}
function Iq(a,b){var c,d,e,f;b&=63;c=a.h&jtb;if(b<22){f=c>>>b;e=a.m>>b|c<<22-b;d=a.l>>b|a.m<<22-b}else if(b<44){f=0;e=c>>>b-22;d=a.m>>b-22|a.h<<44-b}else{f=0;e=0;d=c>>>b-44}return nq(d&fvb,e&fvb,f&jtb)}
function tK(a,b){var c,d,e,f,g,h;a.i||(b=1-b);g=0;e=0;f=0;c=0;d=dr(b*a.d);h=dr(b*a.e);switch(0){case 0:g=a.d-d>>1;e=a.e-h>>1;f=e+h;c=g+d;}(MJ(),LJ).ef(he(a.a),'rect('+g+'px, '+f+'px, '+c+'px, '+e+'px)')}
function YP(a,b){var c,d,e,f,g,h,i,j,k;a.vf(XP(a));c=w4(a.pg);if(c){e=new $nb;k=G1(c);for(d=0;d<k.length;d++){j=k[d];if(b.Gf(j)){i=c[j];for(f=0;f<i.length;f++){g=i[f];h=yib(e.a,g,e);h==null&&b4(g,b)}}}}}
function PR(a,b,c,d){var e,f;f=0;e=0;if(c<0){if(b>1){while(b>1&&e>c){--b;e-=a[b-1]}d&&e<c&&++b;f=b}else{f=1}}else{if(b<a.length){while(b<=a.length&&e<c){e+=a[b-1];++b}f=b}else{f=a.length}}return d?f:f-1}
function o1(a){if(a.a.t==5){return 'v-android'}else if(a.a.t==4){return 'v-ios v-ios'+a.a.u}else if(a.a.t==1){return 'v-win'}else if(a.a.t==3){return 'v-lin'}else if(a.a.t==2){return 'v-mac'}return null}
function mJ(a,b,c){var d,e;if(c<0||c>a.b.a.length){throw VD(new hdb)}qkb(a.b,c,b);e=0;for(d=0;d<c;d++){Yq(ukb(a.b,d),97)&&++e}qkb(a.f,e,b);hJ(a,c,(CF(),b.Xc));re(b,xe(b.Xc)+'-'+Hvb,false);wJ(a,b);return b}
function eT(a,b,c){var d;a.b=b;a.a=c;d=b.sb;He(d,a,(Dn(),Dn(),Cn));He(d,a,(cn(),cn(),bn));He(d,a,(Rn(),Rn(),Qn));He(d,a,(Kn(),Kn(),Jn));He(d,a,(kn(),kn(),jn));He(d,a,(lo(),lo(),ko));He(d,a,(so(),so(),ro))}
function J6(a,b,c){var d,e,f,g,h,i,j,k;if(a==null||a.length==0||Peb(otb,a)){return null}f=_cb(a);d=new Vnb;for(e=0;e<(i=bdb(f),i).length;e++){g=(h=bdb(f),h)[e];j=(k=f[g],k);yib(d,b.Nf(g),c.Nf(j))}return d}
function KV(a){var b,c;b=-ph(a.zc);c=-((a.zc.scrollTop||0)|0);a.Pc.style[bwb]=b+(hm(),Kvb);a.I.style[bwb]=b+Kvb;a.c.style[cwb]=c+Kvb;a.gc.style[cwb]=c+Kvb;a.D.style[bwb]=b-a.g+Kvb;a.cc.style[cwb]=c-a.f+Kvb}
function o2(a,b){b2();if(!b){a.ondrag=function(){return false};a.onselectstart=function(){return false};a.style.webkitUserSelect=fub}else{a.ondrag=null;a.onselectstart=null;a.style.webkitUserSelect='text'}}
function X9(b,c){if(!b){return}var d=[];for(var e=0;e<c.length;e++){var f=c[e];var g=Object.getOwnPropertyNames(f).find(function(a){return /^(a|value_0|value.*g\$)$/.test(a)});var h=g?f[g]:f;d.push(h)}b(d)}
function pX(a){var b,c,d,e,f;if(!a.tb){return}if(a.b){for(d=new Yib((new Qib(a.b)).a);d.b;){c=Xib(d);f=c.fg();b=c.gg();e=a.tb.contains(f)?a.ub:null;KN(b,e)}}if(a.q){e=a.tb.contains(a.j)?a.ub:null;KN(a.q,e)}}
function $V(a,b,c){var d,e,f;if(b.col1<=a.ob&&b.col2>a.ob){d=a.a.g;f=QR(d,b.col1,a.ob+1);e=QR(d,a.ob+1,b.col2+1)-ph(a.zc)+1;if(e>0){f+=e;c.d.style[qwb]=''}else{c.d.style[qwb]='0'}c.d.style[hub]=f+(hm(),Kvb)}}
function hZ(a){if(!(!a.K&&(a.K=new T0),a.K).c){C_((!a.C&&(a.C=new x0),a.C),null)}else if(!(!a.C&&(a.C=new x0),a.C).p){!a.d&&(a.d=new OZ(a));C_((!a.C&&(a.C=new x0),a.C),a.d)}else{C$((!a.C&&(a.C=new x0),a.C))}}
function Xbb(b,c){var d,e;d=Reb(c,ffb(46));d<0&&(d=c.length);b.b=Vdb(Ybb(c,0,d));e=Seb(c,ffb(46),d+1);e<0&&(e=c.length);try{b.c=Vdb(Yeb(Ybb(c,d+1,e),'[^0-9].*',''))}catch(a){a=UD(a);if(!Yq(a,46))throw VD(a)}}
function iJ(a){var b,c,d;tJ(a,null);b=a.i?a.d:FF(a.d);while(CF(),AF.Fe(b)>0){_g(b,AF.Ee(b,0))}for(d=new Ykb(a.b);d.a<d.c.a.length;){c=Wkb(d);c.Xc['colSpan']=1}a.f.a=fq(GB,atb,1,0,5,1);a.b.a=fq(GB,atb,1,0,5,1)}
function zk(){zk=AE;ok=new Ck;gk=new Yk;jk=new $k;kk=new al;mk=new cl;nk=new el;pk=new gl;qk=new il;rk=new kl;uk=new Ek;wk=new Gk;vk=new Ik;yk=new Kk;sk=new Mk;tk=new Ok;xk=new Qk;ik=new Sk;hk=new Uk;lk=new Wk}
function AL(a,b,c){var d,e,f;if(c<0||c>a.c){throw VD(new hdb)}if(a.c==a.a.length){f=fq(kw,atb,13,a.a.length*2,0,1);for(e=0;e<a.a.length;++e){f[e]=a.a[e]}a.a=f}++a.c;for(d=a.c-1;d>c;--d){a.a[d]=a.a[d-1]}a.a[c]=b}
function Z0(a,b){V0();if(a._vaadin_animationend_callbacks){var c=a._vaadin_animationend_callbacks;for(var d=0;d<c.length;d++){if(c[d].listener==b){a.removeEventListener(U0,c[d],false);return true}}return false}}
function lb(a){var b,c,d,e,f,g;b=fq(nr,{738:1,3:1},177,a.a.a.length,0,1);b=zkb(a.a,b);c=new of;for(e=b,f=0,g=e.length;f<g;++f){d=e[f];ykb(a.a,d);ab(d.a,c.a)}a.a.a.length>0&&pb(a.b,$wnd.Math.max(5,16-(Wf()-c.a)))}
function Up(a){var b,c,d,e,f;c=a.size();if(c==0){return null}b=new sfb(c==1?'Exception caught: ':c+' exceptions caught: ');d=true;for(f=a.Ne();f.Xe();){e=f.Ye();d?(d=false):(b.a+='; ',b);ofb(b,e.Gd())}return b.a}
function oO(a,b){fL();gL.call(this,dj($doc));(CF(),this.Xc).className='gwt-TextArea';this.c=a;this.a=b;this.Xc.style[zub]=(Bl(),Bub);this.Xc.style[Iub]='1';this.Xc.style[Cvb]=(hm(),'-1000.0px');Lj(this.Xc.style)}
function TU(a){var b,c,d,e,f,g;g=a.bb;b=gh(a.zc);e=new Akb;f=0;for(f=0;f<a.kc.a.length;f++){y$(a.a,f+1)||(e=ukb(a.kc,f))}for(d=new Ykb(e);d.a<d.c.a.length;){c=Wkb(d);if(gh(c.d)>=b){return g}else{++g}}return a.bb}
function lX(a,b){kX(a);VF(a.zc);(a.rc!=a.Jc||a.sc!=a.Kc)&&a.Jc!=-1&&a.Kc!=-1?R$(a.a,a.rc,a.Jc,a.sc,a.Kc):F$(a.a,a.Jc,a.Kc,(mh(WX(b)),!!(Fh(),b).shiftKey),!!b.metaKey||!!b.ctrlKey,true);a.xc=false;a.Jc=-1;a.Kc=-1}
function frb(a,b){var c,d,e,f,g,h,i,j;for(e=jrb(a),g=0,i=e.length;g<i;++g){c=e[g];c.Be(b)}j=!arb&&a.e?arb?null:a.d:null;while(j){for(d=jrb(j),f=0,h=d.length;f<h;++f){c=d[f];c.Be(b)}j=!arb&&j.e?arb?null:j.d:null}}
function HN(a,b){AI(a.a,b);EN(a.a);ke(a.f)&&(ke(a.a)||ke(a.g)||Peb((zk(),Mub),Hj(a.e.style)))?(je(a.f).className||'').indexOf(jwb)!=-1||re(a.f,jwb,true):(je(a.f).className||'').indexOf(jwb)!=-1&&re(a.f,jwb,false)}
function IN(a,b){AI(a.g,b);EN(a.g);ke(a.f)&&(ke(a.a)||ke(a.g)||Peb((zk(),Mub),Hj(a.e.style)))?(je(a.f).className||'').indexOf(jwb)!=-1||re(a.f,jwb,true):(je(a.f).className||'').indexOf(jwb)!=-1&&re(a.f,jwb,false)}
function KN(a,b){AI(a.f,b);EN(a.f);ke(a.f)&&(ke(a.a)||ke(a.g)||Peb((zk(),Mub),Hj(a.e.style)))?(je(a.f).className||'').indexOf(jwb)!=-1||re(a.f,jwb,true):(je(a.f).className||'').indexOf(jwb)!=-1&&re(a.f,jwb,false)}
function nQ(a,b){a.yf().pd('v-disabled',!b);Yq(a.yf(),73)&&a.yf().Ad(b);Yq(a,136)||qrb(trb((vdb(Dz),Dz.k)),'Parent of connector '+X1(a)+' is null. This is typically an indication of a broken component hierarchy')}
function kW(a,b,c,d,e){var f,g,h,i;pU(a);for(i=d;i<=e;i++){for(f=b;f<=c;f++){if(a.rc!=f||a.sc!=i){g=JU(a,f,i);Xnb(a.u,new MY(f,i));if(g){Xnb(a.t,g);dh(g.d,Zwb)}h=UU(a,Yvb+f+Zvb+i);if(h){Xnb(a.t,h);dh(h.d,Zwb)}}}}}
function x2(a,b){if(a.b){return true}else if(a.c){return E2(b,a.c)}else{if(a.a){return H1(a.a,b)}else{throw VD(new feb('StateChangeEvent should have either stateJson, changedProperties or changePropertiesSet'))}}}
function sh(a,b){var c,d,e,f,g;b=Dh(b);g=a.className||'';e=Bh(g,b);if(e!=-1){c=dfb(g.substr(0,e));d=dfb(_eb(g,e+b.length));c.length==0?(f=d):d.length==0?(f=c):(f=c+' '+d);a.className=f||'';return true}return false}
function BT(a){var b,c,d;a.d=false;ah(a.g);c=a.u[a.r];c.style[hub]='';d=a.g.value;if(PT(d)&&!Peb(a.b,d)){for(b=0;b<a.u.length;b++){if(Peb(d,mh(a.u[b]))){LT(c,a.b);return}}i_(a.e,a.r,d);LT(c,d);NT(a)}else{LT(c,a.b)}}
function hX(a,b){var c,d;VF((CF(),a.Xc));a.Ub.className=nxb;sh(a.Vb,Yvb+a.$b);he(a.yc).style[bwb]='';if(a.Zb){c=new Vnb;d=b-a.Sb;d<0&&(d=0);d!=s$(a.a,a.$b)&&yib(c,reb(a.$b),reb(d));c.a.c+c.b.c==0||Q$(a.a,c)}a.$b=-1}
function kob(a,b,c){var d,e,f,g,h;h=b==null?0:(g=Q(b),g|0);e=(d=a.a.get(h),d==null?new Array:d);if(e.length==0){a.a.set(h,e)}else{f=hob(b,e);if(f){return f.hg(c)}}e[e.length]=new fkb(b,c);++a.c;Inb(a.b);return null}
function VE(a,b){var c,d,e;c=new qfb;ofb(c,(d=new Lnb(b.c),e=new qfb,ofb(e,Knb(d)),e.a+=' ',ofb(e,b.b),e.a+='\n',ofb(e,b.a.Sf()),e.a+=': ',e.a));ofb(c,b.d);if(a.a&&!!b.e){c.a+='\n';vf(b.e,new $E(c),'','')}return c.a}
function zsb(a,b,c,d,e,f){var g,h,i,j,k;if(cr(a)===cr(c)){a=a.slice(b,b+e);b=0}i=c;for(h=b,j=b+e;h<j;){g=$wnd.Math.min(h+10000,j);e=g-h;k=a.slice(h,g);k.splice(0,0,d,f?e:0);Array.prototype.splice.apply(i,k);h=g;d+=e}}
function Me(a){if(!a.ud()){throw VD(new feb("Should only call onDetach when the widget is attached to the browser's document"))}try{a.zd();gp(a,false)}finally{try{a.sd()}finally{CF();a.Xc.__listener=null;a.Tc=false}}}
function qW(a){var b,c;if(a.ob<a.ib.a.length){while(a.ib.a.length>a.ob){ah(xkb(a.ib,a.ib.a.length-1))}}else{for(c=a.ib.a.length+1;c<=a.ob;c++){b=Qi($doc);wh(b,q$(c)+rxb);b.className=qxb+c||'';rkb(a.ib,b);Vg(a.Nc,b)}}}
function z1(a){if(a.nodeType!=1){return {}}if($wnd.document.defaultView&&$wnd.document.defaultView.getComputedStyle){return $wnd.document.defaultView.getComputedStyle(a,null)}if(a.currentStyle){return a.currentStyle}}
function Ip(a,b,c){var d;if(!b){throw VD(new Geb('Cannot add a handler with a null type'))}if(!c){throw VD(new Geb('Cannot add a null handler'))}a.b>0?Hp(a,new vM(a,b,c)):(d=Mp(a,b,null),d.add(c));return new uM(a,b,c)}
function t0(a,b,c,d){var e;if(!a.V._){e=LU(a.V,b,c);if(e!=null&&e.length!=0){SO(a.u,e);DX(a.V,'='+e)}else{TO(a.u,VU(a.V,b,c))}}a.e=sV(a.V,b,c);a.o?CU(a.V,MZ(a.p,bV(a.V))):VO(a.u,!a.e);d!=null?XO(a.u,d):XO(a.u,l$(b,c))}
function X0(a){V0();if(a.webkitAnimationName)return a.webkitAnimationName;if(a.animationName)return a.animationName;if(a.mozAnimationName)return a.mozAnimationName;if(a.oAnimationName)return a.oAnimationName;return ''}
function Bh(a,b){var c,d,e;c=a.indexOf(b);while(c!=-1){if(c==0||(Osb(c-1,a.length),a.charCodeAt(c-1)==32)){d=c+b.length;e=a.length;if(d==e||d<e&&(Osb(d,a.length),a.charCodeAt(d)==32)){break}}c=a.indexOf(b,c+1)}return c}
function ZM(a){var b;if(!a.t&&(b=(k1(),!j1&&(j1=new t1),k1(),j1),b.a.j&&r1(b))){a.t=Si($doc);a.t.style[zub]=(Bl(),Bub);a.t.style['borderStyle']=($j(),fub);a.t.tabIndex=-1;a.t.frameBorder=0;a.t.marginHeight=0}return a.t}
function WO(a,b){var c,d,e;Ej(he(a.B));YI(a.B,'');if(!!b&&b.a.length!=0){te(a.B,true);te(a.C,true);for(d=new Ykb(b);d.a<d.c.a.length;){c=Wkb(d);YI(a.B,c)}bP(a,(e=_K(a.a),e==null?'':e))}else{te(a.B,false);te(a.C,false)}}
function e0(a,b){if(a.T!=b){a.T=b;b?Ae((CF(),a.Xc),'protected',true):Ae((CF(),a.Xc),'protected',false);if(a.C){if(b){if(a.o){a.o=false;fW(a.V)}}else{a.e=false;FR(a.Q);if(a.o){_9(a.W,a.V.sc,a.V.rc,false);pb(a.s,200)}}}}}
function v5(a,b){var c,d,e,f,g,h,i;if(a.b){for(f=(i=(new Hjb(a.a.p.a)).a.Zf().Ne(),new Njb(i));f.a.Xe();){c=(h=f.a.Ye(),h.fg());sh(c,dzb)}Cib(a.a.p.a)}for(d=b,e=0,g=d.length;e<g;++e){c=d[e];dh(c,dzb);a.b&&Xnb(a.a.p,c)}}
function Yfb(a){var b,c;if(a>-140737488355328&&a<140737488355328){if(a==0){return 0}b=a<0;b&&(a=-a);c=dr($wnd.Math.floor($wnd.Math.log(a)/0.6931471805599453));(!b||a!=$wnd.Math.pow(2,c))&&++c;return c}return Zfb(aE(a))}
function qi(a,b){if(Element.prototype.getBoundingClientRect){return b.getBoundingClientRect().top+a.scrollTop|0}else{var c=b.ownerDocument;return c.getBoxObjectFor(b).screenY-c.getBoxObjectFor(c.documentElement).screenY}}
function pi(a,b){if(Element.prototype.getBoundingClientRect){return b.getBoundingClientRect().left+a.scrollLeft|0}else{var c=b.ownerDocument;return c.getBoxObjectFor(b).screenX-c.getBoxObjectFor(c.documentElement).screenX}}
function yU(a,b,c){var d,e,f,g,h,i,j;h=new $nb;for(e=new Yib((new Qib(a.Bc)).a);e.b;){d=Xib(e);g=d.gg();Xnb(h,''+g.b)}j=fq(MB,stb,2,Dib(h.a),6,1);Lhb(h,j);i=mT(b,j);for(f=0;f<i.length;f++){vkb(c,i[f],0)!=-1||rkb(c,i[f])}}
function W0(b,c){V0();var d=Ysb(function(a){c.Df(a)});d.listener=c;b.addEventListener(U0,d,false);!b._vaadin_animationend_callbacks&&(b._vaadin_animationend_callbacks=[]);b._vaadin_animationend_callbacks.push(d);return d}
function FS(a,b){switch(CF(),TG((Fh(),b).type)){case svb:if(b.touches.length>1){return}case 4:MR(a.F,b);break;case 8:case itb:case uvb:LF(a.Xc);case 8192:eS(a.F);break;case 64:UR(a.F,b);break;case tvb:UR(a.F,b);Eh.Wd(b);}}
function alb(a,b){var c,d,e;if(cr(a)===cr(b)){return true}if(a==null||b==null){return false}if(a.length!=b.length){return false}for(c=0;c<a.length;++c){d=a[c];e=b[c];if(!(d==e||d!=null&&Peb(d,e))){return false}}return true}
function vN(a){MJ();var b,c,d;c=null.sg();c+='-overlays';b=(CF(),lj($doc,c));if(!b){b=Qi($doc);b.id=c;d=hQ(a.d).Wc.md().className||'';d!=null&&d.length!=0&&dh(b,d);dh(b,'v-overlay-container');Vg(he((JK(),NK())),b)}return b}
function PS(a,b,c,d,e){a.J.style[Hub]=(b&&!a.H?(vm(),um):(vm(),tm)).je();a.p.style[Hub]=(e&&!a.n?(vm(),um):(vm(),tm)).je();a.A.style[Hub]=(c&&!a.v?(vm(),um):(vm(),tm)).je();a.d.style[Hub]=(d&&!a.b?(vm(),um):(vm(),tm)).je()}
function f5(a){if(a.c<0){Y4(a,0,a.c);a.c=0}else if(a.c>((a.q.scrollHeight||0)|0)-(a.q.clientHeight|0)){Y4(a,((a.q.scrollHeight||0)|0)-(a.q.clientHeight|0),a.c);a.c=((a.q.scrollHeight||0)|0)-(a.q.clientHeight|0)}else{b5(a)}}
function ZS(a,b){var c,d,e;d=WX(b);e=(Fh(),d).getAttribute(qub)||'';if(!Jh(d)){return}if(jh(Jh(d)).indexOf(Pwb)!=-1&&e!=null&&e.indexOf(Qwb)!=-1){c=a.c.wb;if(oT(e)==0){pT(c,e);G$(a.c.a,c.a,c.b,Eh.ae(d))}b.stopPropagation()}}
function HU(a){var b,c,d,e,f;b=new Ckb(a.Mc);for(e=new Ykb(a.Qc);e.a<e.c.a.length;){c=Wkb(e);skb(b,c)}for(f=new Ykb(a.d);f.a<f.c.a.length;){c=Wkb(f);skb(b,c)}for(d=new Ykb(a.kc);d.a<d.c.a.length;){c=Wkb(d);skb(b,c)}return b}
function $0(){var a=document.createElement(Uxb);var b={'animationName':Vxb,'OAnimationName':'oAnimationEnd','MozAnimation':Vxb,'WebkitAnimation':'webkitAnimationEnd'};for(var c in b){if(a.style[c]!==undefined){return b[c]}}}
function ZV(a,b,c){var d,e,f;if(b.row1<=a.Sc&&b.row2>a.Sc){f=a.a.V.W;e=QR(f,b.row1,a.Sc+1);d=QR(f,a.Sc+1,b.row2+1)+1-((a.zc.scrollTop||0)|0);if(d>0){e+=d;c.d.style[rwb]=''}else{c.d.style[rwb]='0'}c.d.style[gub]=e+(hm(),Kvb)}}
function lM(){function b(a){return parseInt(a[1])*xub+parseInt(a[2])}
var c=navigator.userAgent;if(c.indexOf('Macintosh')!=-1){var d=/rv:([0-9]+)\.([0-9]+)/.exec(c);if(d&&d.length==3){if(b(d)<=1008){return true}}}return false}
function rW(a){var b,c;if(a.Sc<a.jb.a.length){while(a.jb.a.length>a.Sc){ah(xkb(a.jb,a.jb.a.length-1))}}else{for(b=a.jb.a.length+1;b<=a.Sc;b++){c=Qi($doc);c.innerHTML=''+b+rxb||'';c.className=sxb+b||'';rkb(a.jb,c);Vg(a.Nc,c)}}}
function _W(a,b,c){var d,e,f,g;d=Yvb+b+Zvb+c;if(xib(a.b,d)){return}g=UU(a,d);if(g){e=g.d}else{e=JU(a,b,c).d;LN(a.q,Jh((Fh(),e)))}HN(a.q,wib(a.i,d));IN(a.q,wib(a.r,d));f=a.tb.contains(d)?a.ub:null;KN(a.q,f);MN(a.q,e,c,b);a.j=d}
function mT(a,b){var c=[];var d=a.sheet.cssRules?a.sheet.cssRules:a.sheet.rules;for(var e=0;e<d.length;e++){var f=d[e];for(var g=0;g<b.length;g++){f['selectorText'].indexOf('.row'+b[g]+',')!==-1&&c.push(f['cssText'])}}return c}
function Qfb(a){return a.e<=-32||a.e>(a.d>0?a.d:$wnd.Math.floor((a.a-1)*Nzb)+1)?0:ygb(a.e==0||a.a==0&&a.f!=-1?(!a.c&&(a.c=Sgb(a.f)),a.c):a.e<0?zgb((!a.c&&(a.c=Sgb(a.f)),a.c),Ghb(-a.e)):qgb((!a.c&&(a.c=Sgb(a.f)),a.c),Ghb(a.e)))}
function Bhb(a,b,c,d,e){var f,g,h,i;if(cr(a)===cr(b)&&d==e){Hhb(a,d,c);return}for(h=0;h<d;h++){g=0;f=a[h];for(i=0;i<e;i++){g=WD(WD(gE(XD(f,Ozb),XD(b[i],Ozb)),XD(c[h+i],Ozb)),XD(pE(g),Ozb));c[h+i]=pE(g);g=lE(g,32)}c[h+e]=pE(g)}}
function U(a,b){var c,d,e;c=a.r;d=b>=a.t+a.k;if(a.p&&!d){e=(b-a.t)/a.k;a.ed(a.ad(e));return a.o&&a.r==c}if(!a.p&&b>=a.t){a.p=true;a.dd();if(!(a.o&&a.r==c)){return false}}if(d){a.o=false;a.p=false;a.cd();return false}return true}
function mV(a,b){var c,d,e,f;e=a.a.L;f=b-e;c=b+a.oc+e;f<0&&(f=0);d=a.a.O;while(a.Ab<c&&a.zb<d){if(a.eb+$U(a,a.db)<f){a.eb+=$U(a,a.db);++a.db}++a.zb;a.Ab+=$U(a,a.zb)}while(f>a.eb+$U(a,a.db)&&a.db<d){a.eb+=$U(a,a.db);++a.db}tW(a)}
function CE(a,b){var c=$wnd;if(a===''){return c}var d=a.split('.');!(d[0] in c)&&c.execScript&&c.execScript('var '+d[0]);if(b){var e=b.prototype.pg;e.e=b}for(var f;d.length&&(f=d.shift());){c=c[f]=c[f]||!d.length&&b||{}}return c}
function yi(){var a=/rv:([0-9]+)\.([0-9]+)(\.([0-9]+))?.*?/.exec(navigator.userAgent.toLowerCase());if(a&&a.length>=3){var b=parseInt(a[1])*1000000+parseInt(a[2])*xub+parseInt(a.length>=5&&!isNaN(a[4])?a[4]:0);return b}return -1}
function cI(a,b){var c;if(a.bb){throw VD(new feb('Composite.initWidget() may only be called once.'))}if(!b){throw VD(new Geb('widget cannot be null'))}Yq(b,179)&&b;Ne(b);c=(CF(),b.Xc);oe(a,c);(BK(),JF(c))&&CK(c,a);a.bb=b;Pe(b,a)}
function _Y(a,b,c){var d,e;switch(c.type){case 'IMAGE':c$((!a.C&&(a.C=new x0),a.C),b,new QI(e1(a.D,b)),c);break;case 'COMPONENT':d=tT(b,oh(a.e,'appId'));e=new PY('overlay-component-'+b,d,a.e);c$((!a.C&&(a.C=new x0),a.C),b,e,c);}}
function oeb(a){var b,c,d;if(a<0){return 0}else if(a==0){return 32}else{d=-(a>>16);b=d>>16&16;c=16-b;a=a>>b;d=a-256;b=d>>16&8;c+=b;a<<=b;d=a-4096;b=d>>16&4;c+=b;a<<=b;d=a-qtb;b=d>>16&2;c+=b;a<<=b;d=a>>14;b=d&~(d>>1);return c+2-b}}
function $5(a,b){var c;if(a.a!=null){(!a.C&&(a.C=gQ(a)),a.C).Wc.pd(a.a,false);sh(vN(a.D),a.a)}a.a=b;if(b!=null){(!a.C&&(a.C=gQ(a)),a.C).Wc.pd(b,true);dh(vN(a.D),a.a);e6(b)}null.sg();c=new S4;!!a.F&&Cp(a.F,c);ulb();Flb();null.sg()}
function Agb(a,b){var c;if(b<0){throw VD(new gdb('Negative exponent'))}if(b==0){return hgb}else if(b==1||sgb(a,hgb)||sgb(a,lgb)){return a}if(!Egb(a,0)){c=1;while(!Egb(a,c)){++c}return zgb(Ogb(c*b),Agb(Dgb(a,c),b))}return Fhb(a,b)}
function _J(){rI.call(this);this.C=new lK;this.F=false;this.H=-1;this.L=new vK(this);this.N=-1;Vg((CF(),this.Xc),LJ.bf());this.Ve(0,0);LJ.df((null,lh(this.Xc))).className='gwt-PopupPanel';LJ.cf(GF(this.Xc)).className='popupContent'}
function jQ(a,b,c){var d;if(!!a.q&&!!a.q.j){return}o2((CF(),b.Xc),false);if((k1(),!j1&&(j1=new t1),k1(),j1).a.t==5){return}Q1(c.a,b.Xc);xj(c.a);a.q=new H4(a);d=uj(c.a)[0];a.A=_h((Fh(),d).clientX||0);a.B=_h(d.clientY||0);pb(a.q,500)}
function Tbb(a,b){var c,d,e,f,g;g=b.indexOf('; cros ');if(g==-1){return}d=Seb(b,ffb(41),g);if(d==-1){return}c=d;while(c>=g&&(Osb(c,b.length),b.charCodeAt(c)!=32)){--c}if(c==g){return}e=b.substr(c+1,d-(c+1));f=$eb(e,'\\.',0);Ubb(a,f)}
function GR(a,b,c,d){n$(a.d);a.c.C||(a.c.C=true,undefined);if(!TR(a.c.yc)){ZW(a.c,true);sU(a.c)}YW(a.c,b,c);QX(a.c,b,b,c,c);d?OX(a.c,b,d.col2,c,d.row2,true):OX(a.c,b,b,c,c,true);FR(a);t0(a.d,b,c,null);_9(a.d.W,c,b,true);pb(a.d.s,200)}
function G$(a,b,c,d){var e,f;if(a.V.sc!=c&&a.V.rc!=b){F$(a,b,c,false,false,true)}else{e=JU(a.V,b,c);d=e.o;a.b=d;wO(a.u);d=(f=_K(a.u.j),f==null?'':f)}a.t=false;i$(a);if(!a.e){if(!a.B&&!a.o){a.B=true;eX(a.V,true,d);a.u.u=true;ZO(a.u)}}}
function $4(a,b){var c,d,e,f,g;g=(Fh(),b).target;for(d=(f=(new Hjb(a.p.a)).a.Zf().Ne(),new Njb(f));d.a.Xe();){c=(e=d.a.Ye(),e.fg());if(Eh.de(c,g)&&((c.scrollHeight||0)|0)>(c.clientHeight|0)){a.q=c;a.g=l5(a.q);return true}}return false}
function zE(a,b,c){var d=xE,h;var e=d[a];var f=e instanceof Array?e[0]:null;if(e&&!f){_=e}else{_=(h=b&&b.prototype,!h&&(h=xE[b]),BE(h));_.qg=c;!b&&(_.rg=EE);d[a]=_}for(var g=3;g<arguments.length;++g){arguments[g].prototype=_}f&&(_.pg=f)}
function a$(){MJ();tN.call(this);this.e=new B5(this);this.b=new O5(100,new E5(this));XJ(this,this.e);LJ.df((CF(),CF(),lh(this.Xc))).className=Hwb;vh(this.Xc,gj($doc));Ie(this,new y5(this),jp?jp:(jp=new An));this.Xc['id']='PID_VAADIN_CM'}
function iV(a,b){var c,d,e,f;c=a.a.j;d=b-c;f=b+a.pc+c;d<0&&(d=0);e=a.a.i;while(a.yb<f&&a.xb<e){if(a.cb+s$(a.a,a.bb)<d){a.cb+=s$(a.a,a.bb);++a.bb}++a.xb;a.yb+=s$(a.a,a.xb)}while(d>a.cb+s$(a.a,a.bb)&&a.bb<e){a.cb+=s$(a.a,a.bb);++a.bb}oW(a)}
function Ge(a,b){var c=(a.className||'').split(/\s+/);if(!c){return}var d=c[0];var e=d.length;c[0]=b;for(var f=1,g=c.length;f<g;f++){var h=c[f];h.length>e&&h.charAt(e)=='-'&&h.indexOf(d)==0&&(c[f]=b+h.substring(e))}a.className=c.join(' ')}
function lS(a,b){var c;this.M=new oS(this);this.q=a;this.Q=b;this._=b.Rc;this.b=new TS(this);cI(this,this.b);RS(this.b);re(this.b,Iwb,true);bS(this,false);this.B=new DS(this);re(this.B,Iwb,true);BS(this.B);c=b.zc;OS(this.b,c);zS(this.B,c)}
function b4(b,c){var d,e,f,g;d=c.f;e=b.a;!e&&(e=O(d));f=new f4(e);try{X3(new Y3(f,b.b),d,iq(dq(GB,1),atb,1,5,[]))}catch(a){a=UD(a);if(Yq(a,79)){g=a;throw VD(new Lf("Couldn't invoke @OnStateChange method "+f.b+'.'+b.b,g))}else throw VD(a)}}
function XR(a,b){a.r=b;if(b>0&&!a.a){a.a=new TS(a);OS(a.a,a.Q.c);te(a.a,false);RS(a.a);re(a.a,Fwb,true);a.A=new DS(a);zS(a.A,a.Q.c);AS(a.A,false);BS(a.A);re(a.A,Fwb,true)}else if(b==0&&!!a.a){GS(a.a);a.a=null;ah(a.A.k);a.A=null}kS(a);iS(a)}
function aS(a,b){a.ab=b;if(b>0&&!a.X){a.X=new TS(a);OS(a.X,a.Q.Pc);te(a.X,false);RS(a.X);re(a.X,'top-right',true);a.F=new DS(a);zS(a.F,a.Q.Pc);AS(a.F,false);BS(a.F);re(a.F,Gwb,true)}else if(b==0&&!!a.X){GS(a.X);a.X=null;ah(a.F.k);a.F=null}kS(a);iS(a)}
function kS(a){if(a.ab>0&&a.r>0&&!a.W){a.W=new TS(a);OS(a.W,a.Q.Nc);te(a.W,false);RS(a.W);re(a.W,Gwb,true);a.D=new DS(a);zS(a.D,a.Q.Nc);AS(a.D,false);BS(a.D);re(a.D,Gwb,true)}else if(!!a.W&&(a.ab==0||a.r==0)){GS(a.W);a.W=null;ah(a.D.k);a.D=null}}
function Egb(a,b){var c,d,e;if(b==0){return (a.a[0]&1)!=0}if(b<0){throw VD(new gdb('Negative bit address'))}e=b>>5;if(e>=a.d){return a.e<0}c=a.a[e];b=1<<(b&31);if(a.e<0){d=vgb(a);if(e<d){return false}else d==e?(c=-c):(c=~c)}return (c&b)!=0}
function mQ(a){!a.C&&(a.C=new x0);if(!!a.C&&dI((!a.C&&(a.C=new x0),a.C))){Ne((!a.C&&(a.C=new x0),a.C));qrb(trb((vdb(Dz),Dz.k)),'Widget is still attached to the DOM after the connector ('+X1(a)+') has been unregistered. Widget was removed.')}}
function Hq(a,b){var c,d,e,f,g;b&=63;c=a.h;d=(c&gvb)!=0;d&&(c|=-1048576);if(b<22){g=c>>b;f=a.m>>b|c<<22-b;e=a.l>>b|a.m<<22-b}else if(b<44){g=d?jtb:0;f=c>>b-22;e=a.m>>b-22|c<<44-b}else{g=d?jtb:0;f=d?fvb:0;e=c>>b-44}return nq(e&fvb,f&fvb,g&jtb)}
function lob(a,b){var c,d,e,f,g,h;g=b==null?0:(f=Q(b),f|0);d=(c=a.a.get(g),c==null?new Array:c);for(h=0;h<d.length;h++){e=d[h];if(Unb(b,e.fg())){if(d.length==1){d.length=0;sob(a.a,g)}else{d.splice(h,1)}--a.c;Inb(a.b);return e.gg()}}return null}
function jX(a,b){var c,d,e;VF((CF(),a.Xc));a.Ub.className=nxb;he(a.yc).style[cwb]='';sh(a.Vb,'row'+a._b);if(a.Zb){c=new Vnb;e=b-a.Sb;d=Ofb(dgb(e/a.Lb*72));d<0&&(d=0);d!=v$(a.a,a._b)&&yib(c,reb(a._b),new Zdb(d));c.a.c+c.b.c==0||b_(a.a,c)}a._b=-1}
function kK(){var a,b,c,d;null.sg();d=(yG(),qj($doc).clientWidth|0);c=qj($doc).clientHeight|0;null.sg((zk(),fub));null.sg((hm(),Lvb));null.sg(Lvb);b=pj($doc);a=mj($doc);null.sg($wnd.Math.max(b,d)+Kvb);null.sg($wnd.Math.max(a,c)+Kvb);null.sg(Mub)}
function CZ(a){var b,c,d,e,f,g;d=new Akb;g=hQ(a.a.a);e=a.a.a.i;for(c=new Ykb(a.b);c.a<c.c.a.length;){b=Wkb(c);f=new XY(a,e,b.key,b.type,g);TY(f,b.caption);UY(f,aZ(a.a.a,b.key));d.a[d.a.length]=f}return zkb(d,fq(Iz,{725:1,3:1},125,d.a.length,0,1))}
function lhb(a,b,c,d,e){var f,g,h;f=0;g=0;for(h=0;h<d;h++){f=(yhb(),WD(gE(XD(c[h],Ozb),XD(e,Ozb)),XD(pE(f),Ozb)));g=WD(mE(XD(a[b+h],Ozb),XD(f,Ozb)),g);a[b+h]=pE(g);g=kE(g,32);f=lE(f,32)}g=WD(mE(XD(a[b+d],Ozb),f),g);a[b+d]=pE(g);return pE(kE(g,32))}
function MT(a,b,c){var d,e,f,g,h;if(c){a.c.style[bwb]='';a.s=0;a.t=0}for(e=b.length;e<a.u.length;e++){ah(a.u[e])}Uf(a.u,b.length);for(d=0;d<b.length;d++){f=a.u[d];if(f){h=f;LT(h,b[d])}else{g=CT(b[d]);Vg(a.c,g);a.u[d]=g}}a.r>=a.u.length&&(a.r=-1);NT(a)}
function Kdb(a){if(a.Uf()){var b=a.c;b.Vf()?(a.k='['+b.j):!b.Uf()?(a.k='[L'+b.Sf()+';'):(a.k='['+b.Sf());a.b=b.Rf()+'[]';a.i=b.Tf()+'[]';return}var c=a.g;var d=a.d;d=d.split('/');a.k=Ndb('.',[c,Ndb('$',d)]);a.b=Ndb('.',[c,Ndb('.',d)]);a.i=d[d.length-1]}
function MN(a,b,c,d){a.c=b;a.d=c;a.b=d;(CF(),a.Xc).style[Hub]=Uub;!!a.t&&(a.t.style[Hub]=Uub,undefined);a.i.style[Hub]=(vm(),Uub);hN(a);a.k=nh(a.Xc,Jvb);a.n=nh(a.Xc,eub);CN(a);a.Xc.style[Hub]=Tub;!!a.t&&(a.t.style[Hub]=Tub,undefined);a.i.style[Hub]=Tub}
function IR(a,b,c,d,e,f,g,h,i){var j,k;t0(a.d,c,d,b);a.c.C||(a.c.C=true,undefined);if(!TR(a.c.yc)){ZW(a.c,true);sU(a.c)}j=a.c.rc;k=a.c.sc;if(j!=c||k!=d){YW(a.c,c,d);FR(a)}QX(a.c,e,f,g,h);OX(a.c,e,f,g,h,true);i&&!qV(a.c,e,f,g,h)&&yW(a.c,e,f,g,h);FU(a.c)}
function pF(a){oF();if(!bF(kF,a)){return a}a.indexOf('&')!=-1&&(a=aF(iF,a,'&amp;'));a.indexOf('<')!=-1&&(a=aF(lF,a,'&lt;'));a.indexOf('>')!=-1&&(a=aF(jF,a,'&gt;'));a.indexOf('"')!=-1&&(a=aF(mF,a,'&quot;'));a.indexOf("'")!=-1&&(a=aF(nF,a,'&#39;'));return a}
function Ke(a){var b;if(a.ud()){throw VD(new feb("Should only call onAttach when the widget is detached from the browser's document"))}a.Tc=true;CF();WG(a.Xc,a);b=a.Uc;a.Uc=-1;b>0&&(a.Uc==-1?PF(a.Xc,b|(a.Xc.__eventBits||0)):(a.Uc|=b));a.rd();a.yd();gp(a,true)}
function qQ(a,b,c){var d,e,f;e='%'.length;Peb(b.substr(b.length-e,e),'%')!=Oeb(a.p,'%');d='%'.length;Peb(c.substr(c.length-d,d),'%')!=Oeb(a.o,'%');a.p=b;a.o=c;f=a.yf();f.pd('v-has-width',!ncb(a.xf()));f.pd('v-has-height',!mcb(a.xf()));a.yf().qd(b);a.yf().od(c)}
function eS(a){var b,c,d,e;a.C=false;ZR(a,false);a.N&&fS(a);if(a.j){e_(a.q,a.G,a.I)}else if(a.s){b=$wnd.Math.min(a.e,a.G);c=$wnd.Math.max(a.f,a.H);d=$wnd.Math.min(a.K,a.I);e=$wnd.Math.max(a.L,a.J);b<=c&&d<=e&&f_(a.q,b,c,d,e)}sh(he(a.Q),'selecting');_R(a,false)}
function _4(a,b){var c;a.r&&S(a.i);c=(Fh(),b).touches[0];if($4(a,c)){krb(trb((vdb(Mz),Mz.k)),'TouchDelegate takes over');b.stopPropagation();a.d=TF(a);W4=a;a.o=_h(c.clientY||0);a.s[0]=a.o;a.b[0]=Wf();a.k=1;a.n=a5(a);krb(trb((vdb(Mz),Mz.k)),'ST'+a.n);a.j=false}}
function Bgb(a,b){var c,d,e,f,g,h;if(b.e==0){throw VD(new gdb(Pzb))}h=a.d;c=b.d;if((h!=c?h>c?1:-1:qhb(a.a,b.a,h))==-1){return a}f=c;e=fq(hr,ixb,17,f,15,1);if(f==1){e[0]=mhb(a.a,h,b.a[0])}else{d=h-c+1;e=fhb(null,d,a.a,h,b.a,c)}g=new Hgb(a.e,f,e);pgb(g);return g}
function FW(a,b,c){var d,e,f,g,h,i,j;if(b){pT(a.wb,c);j=a.wb.b;i=a.wb.a;h=UU(a,c);d=h?h:JU(a,i,j);e=new ON(a,Wg(d.d));HN(e,wib(a.i,c));IN(e,wib(a.r,c));g=a.tb.contains(c)?a.ub:null;KN(e,g);NN(e,d.d,j,i);zib(a.b,c,e)}else{f=Bib(a.b,c);!!f&&($M(f,false),ah(f.i))}}
function $Z(a,b,c){var d,e,f,g,h,i;h=CZ(a.a);if(h==null||h.length==0){return}a.d=b;a.f=c;iJ(a.e);for(e=h,f=0,g=e.length;f<g;++f){d=e[f];gJ(a.e,new JJ((i=new qfb,i.a+='<div>',ofb(i,d.e),i.a+='<\/div>',i.a),d))}p2(he(a.e));a.c=f2();UJ(a,'');aN(a,1);WJ(a,new G5(a))}
function nV(a,b){var c,d,e,f;e=a.a.L;f=b-e;c=b+a.oc+e;f<0&&(f=0);d=a.Sc+1;while(a.eb>f&&a.db>d){if(a.Ab-$U(a,a.zb)>c){a.Ab-=$U(a,a.zb);--a.zb}--a.db;a.eb-=$U(a,a.db)}if(a.eb<=0||a.db<=1){a.eb=0;a.db=d}while(c<a.Ab-$U(a,a.zb)&&a.zb>1){a.Ab-=$U(a,a.zb);--a.zb}tW(a)}
function hg(g){ag();function h(a,b,c,d,e){if(!e){e=a+' ('+b+':'+c;d&&(e+=':'+d);e+=')'}var f=Gf(e);jg(f,false)}
;function i(a){var b=a.onerror;if(b&&!g){return}a.onerror=function(){h.apply(this,arguments);b&&b.apply(this,arguments);return false}}
i($wnd);i(window)}
function k2(a){var b=a.ownerDocument.defaultView.getComputedStyle(a);var c=b.width;if(c==Uvb){return j2(a)}var d=parseFloat(c);var e=parseFloat(b.borderLeftWidth)+parseFloat(b.borderRightWidth);var f=parseFloat(b.paddingLeft)+parseFloat(b.paddingRight);return d+e+f}
function h2(a){var b=a.ownerDocument.defaultView.getComputedStyle(a);var c=b.height;if(c==Uvb){return g2(a)}var d=parseFloat(c);var e=parseFloat(b.borderTopWidth)+parseFloat(b.borderBottomWidth);var f=parseFloat(b.paddingTop)+parseFloat(b.paddingBottom);return d+e+f}
function XV(a){var b,c,d,e,f,g,h;g=new Hjb(a.a.f);b=new Vnb;Vg(a.zc,a.hb);xh(a.hb,oxb);for(f=(h=g.a.Zf().Ne(),new Njb(h));f.a.Xe();){e=(d=f.a.Ye(),d.fg());uh(a.hb,'cell cs'+e);c=a.hb.clientWidth|0;yib(b,e,new Zdb(Ofb(Nfb(new Ufb(c),new Ufb(10)))))}ah(a.hb);t_(a.a,b)}
function vq(a){var b,c,d;c=a.l;if((c&c-1)!=0){return -1}d=a.m;if((d&d-1)!=0){return -1}b=a.h;if((b&b-1)!=0){return -1}if(b==0&&d==0&&c==0){return -1}if(b==0&&d==0&&c!=0){return peb(c)}if(b==0&&d!=0&&c==0){return peb(d)+22}if(b!=0&&d==0&&c==0){return peb(b)+44}return -1}
function JU(a,b,c){var d,e,f,g;if(c<=a.Sc&&(b>=a.bb&&b<=a.xb||b<=a.ob)||b<=a.ob&&(c>=a.db&&c<=a.zb||c<=a.Sc)){return SU(a,b,c)}else{e=b-a.bb;f=c-a.db;if(e<0||f<0){return null}g=a.kc.a.length>f;if(g){d=ukb(a.kc,f).a.length>e;if(d){return ukb(ukb(a.kc,f),e)}}}return null}
function tJ(a,b){var c,d;if(b==a.g){return}if(a.g){HJ(a.g);if(a.i){d=HF(he(a.g));CF();if(AF.Fe(d)==2){c=AF.Ee(d,1);Ae(c,Ivb,false)}}}if(b){re(b,xe((CF(),b.Xc))+'-'+Hvb,true);if(a.i){d=HF(b.Xc);if(AF.Fe(d)==2){c=AF.Ee(d,1);Ae(c,Ivb,true)}}Pd();oc(a.Xc,new dc(b.Xc))}a.g=b}
function aL(a,b,c){if(!a.Tc){return}if(c<0){throw VD(new idb('Length must be a positive integer. Length: '+c))}if(b<0||c+b>oh((CF(),a.Xc),Qvb).length){throw VD(new idb('From Index: '+b+'  To Index: '+(b+c)+'  Text Length: '+oh((CF(),a.Xc),Qvb).length))}rM((CF(),a.Xc),b,c)}
function hO(a){var b,c,d,e,f,g,h,i,j;if(a.a.C){g=a.a.yc.f;h=a.a.yc.e;j=a.a.yc.K;i=a.a.yc.L;f=new qfb;for(e=j;e<=i;e++){for(c=h;c<=g;c++){b=MU(a.a,c,e);b!=null&&(f.a+=''+b,f);c!=g&&(f.a+='\t',f)}e!=i&&(f.a+='\n',f)}d=f.a;return d}return "non-continous selection, can't copy"}
function IO(a,b){var c,d,e,f,g,h,i;c=a.d;if(!c){i='';for(f=a.t.S,g=0,h=f.length;g<h;++g){e=f[g];i+=e+'|'}i=afb(i,0,i.length-1);d='^(('+i+')!){0,1}';d+='([A-Za-z]{1,3}[0-9]{1,7})';d+='(:([A-Za-z]{1,3}[0-9]{1,7})){0,1}';a.d=c=new RegExp(d);pb(new lP(a),2000)}return c.test(b)}
function hV(a,b){var c,d,e,f;c=a.a.j;d=b-c;f=b+a.pc+c;d<0&&(d=0);e=a.ob+1;while(a.cb>d&&a.bb>e){if(a.yb-s$(a.a,a.xb)>f){a.yb-=s$(a.a,a.xb);--a.xb}--a.bb;a.cb-=s$(a.a,a.bb)}if(a.cb<=0||a.bb<=1){a.cb=0;a.bb=e}while(f<a.yb-s$(a.a,a.xb)&&a.xb>1){a.yb-=s$(a.a,a.xb);--a.xb}oW(a)}
function pV(a){var b,c;b=new _S;b.c=a;b.a=a.vb;$S(b,a.Nc,a.Pc,a.c,a.zc);if(a.Rc&&(k1(),!j1&&(j1=new t1),k1(),j1).a.t==4){c=new RZ(a);He(a,c,(Zo(),Zo(),Yo));He(a,c,(Ko(),Ko(),Jo));He(a,c,(So(),So(),Ro));He(a,c,(Do(),Do(),Co))}a.Nb=TF(new IY(a));He(a,new KY(a),(rn(),rn(),qn))}
function Bq(a){var b,c,d,e,f;if(isNaN(a)){return Sq(),Rq}if(a<-9223372036854775808){return Sq(),Pq}if(a>=9223372036854775807){return Sq(),Oq}e=false;if(a<0){e=true;a=-a}d=0;if(a>=htb){d=dr(a/htb);a-=d*htb}c=0;if(a>=itb){c=dr(a/itb);a-=c*itb}b=dr(a);f=nq(b,c,d);e&&tq(f);return f}
function KO(a,b,c,d,e){var f;if(!a.f){return}if(a.k==-1){a.k=a.I.rc;a.n=a.I.sc}c?--a.n:d?++a.k:e?++a.n:--a.k;a.n==0&&(a.n=1);a.k==0&&(a.k=1);f=eV(a.I);a.n>f[2]-1&&(a.n=f[2]-1);a.k>f[3]-1&&(a.k=f[3]-1);if(b&&a.o!=-1);else{a.o=a.k;a.p=a.n}UO(a,a.o,a.p,a.k,a.n,false);BW(a.I,a.k,a.n)}
function aX(a,b){var c,d,e,f;if(a.T){for(f=(d=(new Sjb(a.T)).a.Zf().Ne(),new Xjb(d));f.a.Xe();){e=(c=f.a.Ye(),c.gg());Rjb(new Sjb(b),e)||Ne(e)}}a.Sc>0&&a.ob>0&&bX(a,b,1,a.Sc,1,a.ob);a.Sc>0&&bX(a,b,1,a.Sc,a.bb,a.xb);a.ob>0&&bX(a,b,1,a.db,a.zb,a.ob);bX(a,b,a.bb,a.xb,a.db,a.zb);a.T=b}
function TX(a,b){var c,d,e;if(a.Mc.a.length!=0){d=new Ykb(b);while(d.a<d.c.a.length){c=Wkb(d);FM(ukb(a.Mc,(c.row-1)*a.ob+c.col-1),c.value,c.cellStyle,c.needsMeasure);e=Yvb+c.col+Zvb+c.row;TW(a,e,c.value,c.cellStyle,c.needsMeasure);c.value==null?Bib(a.e,e):zib(a.e,e,c)}}JX(a,false)}
function zhb(a,b){yhb();var c,d,e,f,g,h,i,j,k;if(b.d>a.d){h=a;a=b;b=h}if(b.d<63){return Ehb(a,b)}g=(a.d&-2)<<4;j=Dgb(a,g);k=Dgb(b,g);d=shb(a,Cgb(j,g));e=shb(b,Cgb(k,g));i=zhb(j,k);c=zhb(d,e);f=zhb(shb(j,d),shb(e,k));f=nhb(nhb(f,i),c);f=Cgb(f,g);i=Cgb(i,g<<1);return nhb(nhb(i,f),c)}
function WR(a,b){a.p=b;if(b){re(a.b,Ewb,true);IS(a.b,b);if(a.W){IS(a.W,b);re(a.W,Ewb,true)}if(a.X){IS(a.X,b);re(a.X,Ewb,true)}if(a.a){IS(a.a,b);re(a.a,Ewb,true)}_R(a,true)}else{re(a.b,Ewb,false);!!a.W&&re(a.W,Ewb,false);!!a.X&&re(a.X,Ewb,false);!!a.a&&re(a.a,Ewb,false);_R(a,false)}}
function _V(a){var b,c,d,e,f,g;for(c=(f=(new Sjb(a.b)).a.Zf().Ne(),new Xjb(f));c.a.Xe();){b=(e=c.a.Ye(),e.gg());g=b.d;d=b.b;x$(a.a,d)||y$(a.a,g)||!(d>=a.bb&&d<=a.xb&&g>=a.db&&g<=a.zb||d<=a.ob&&g<=a.Sc||d>a.ob&&d<=a.xb&&g<=a.Sc||g>a.Sc&&g<=a.zb&&d<=a.ob)?($M(b,false),ah(b.i)):GN(b)}}
function Vsb(a){var b,c,d,e;b=0;d=a.length;e=d-4;c=0;while(c<e){b=(Osb(c+3,a.length),a.charCodeAt(c+3)+(Osb(c+2,a.length),31*(a.charCodeAt(c+2)+(Osb(c+1,a.length),31*(a.charCodeAt(c+1)+(Osb(c,a.length),31*(a.charCodeAt(c)+31*b)))))));b=b|0;c+=4}while(c<d){b=b*31+Neb(a,c++)}b=b|0;return b}
function Rbb(a,b){var c,d,e;d=b;e=a.length;while(d<e){c=(Osb(d,a.length),a.charCodeAt(d));sdb==null&&(sdb=new RegExp('[A-Z]','i'));if(!(sdb.test(String.fromCharCode(c))||(rdb==null&&(rdb=new RegExp('\\d')),rdb.test(String.fromCharCode(c)))||c==95||c==46)){break}++d}return a.substr(b,d-b)}
function iZ(a){var b,c,d,e,f;e=(!a.K&&(a.K=new T0),a.K).ab;f=(!a.C&&(a.C=new x0),a.C);for(d=new Ykb(a.j);d.a<d.c.a.length;){b=Wkb(d);vkb(e,b,0)!=-1||FW(f.V,false,b)}if(e){for(c=new Ykb(e);c.a<c.c.a.length;){b=Wkb(c);vkb(a.j,b,0)!=-1||FW(f.V,true,b)}}a.j.a=fq(GB,atb,1,0,5,1);!!e&&skb(a.j,e)}
function YZ(a,b,c){var d,e;b=ie(a.e);d=a.d;e=a.f;if(b+d>(yG(),qj($doc).clientWidth|0)){d=d-b;d<0&&(d=0)}c+e>(qj($doc).clientHeight|0)&&(e=$wnd.Math.max(0,(qj($doc).clientHeight|0)-c));e==0&&cN(a,(qj($doc).clientHeight|0)+Kvb);eN(a,d,e);(CF(),a.Xc).style[zub]=(Bl(),Aub);Z1((ng(),mg),new I5(a))}
function Knb(a){var b,c,d;d=-a.a.getTimezoneOffset();b=(d>=0?'+':'')+(d/60|0);c=Pnb($wnd.Math.abs(d)%60);return (Tnb(),Rnb)[a.a.getDay()]+' '+Snb[a.a.getMonth()]+' '+Pnb(a.a.getDate())+' '+Pnb(a.a.getHours())+':'+Pnb(a.a.getMinutes())+':'+Pnb(a.a.getSeconds())+' GMT'+b+c+' '+a.a.getFullYear()}
function EO(a){var b,c,d,e,f,g,h,i;if(a.A!=null){g=OO(a,a.A);if(!g){return}e=$wnd.Math.min(g.col1,g.col2);d=$wnd.Math.max(g.col1,g.col2);i=$wnd.Math.min(g.row1,g.row2);h=$wnd.Math.max(g.row1,g.row2);for(b=e;b<=d;b++){for(f=i;f<=h;f++){c=JU(a.I,b,f);!!c&&(c.d.style[owb]='',undefined)}}}a.A=null}
function Ehb(a,b){var c,d,e,f,g,h,i,j,k,l,m;d=a.d;f=b.d;h=d+f;i=a.e!=b.e?-1:1;if(h==2){k=gE(XD(a.a[0],Ozb),XD(b.a[0],Ozb));m=pE(k);l=pE(lE(k,32));return l==0?new Ggb(i,m):new Hgb(i,2,iq(dq(hr,1),ixb,17,15,[m,l]))}c=a.a;e=b.a;g=fq(hr,ixb,17,h,15,1);Ahb(c,d,e,f,g);j=new Hgb(i,h,g);pgb(j);return j}
function Dhb(a,b){yhb();var c,d,e,f,g,h,i,j,k;j=a.e;if(j==0){return mgb(),lgb}d=a.d;c=a.a;if(d==1){e=gE(XD(c[0],Ozb),XD(b,Ozb));i=pE(e);g=pE(lE(e,32));return g==0?new Ggb(j,i):new Hgb(j,2,iq(dq(hr,1),ixb,17,15,[i,g]))}h=d+1;f=fq(hr,ixb,17,h,15,1);f[d]=Chb(f,c,d,b);k=new Hgb(j,h,f);pgb(k);return k}
function EU(a){var b,c,d,e,f,g;for(d=(g=(new Hjb(a.u.a)).a.Zf().Ne(),new Njb(g));d.a.Xe();){c=(e=d.a.Ye(),e.fg());if(c.a!=a.rc||c.b!=a.sc){b=JU(a,c.a,c.b);if(b){dh(b.d,Zwb);Xnb(a.t,b)}f=UU(a,Yvb+c.a+Zvb+c.b);if(f){Xnb(a.t,f);dh(f.d,Zwb)}}}if(a.nb){b=JU(a,a.nb.a,a.nb.b);!!b&&dh(b.d,$wb)}FO(a.a.u)}
function uf(d,b){if(b instanceof Object){try{b.__java$exception=d;if(navigator.userAgent.toLowerCase().indexOf('msie')!=-1&&$doc.documentMode<9){return}var c=d;Object.defineProperties(b,{cause:{get:function(){var a=c.Fd();return a&&a.Dd()}},suppressed:{get:function(){return c.Ed()}}})}catch(a){}}}
function aH(){aH=AE;XG={_default_:gH,dragenter:fH,dragover:fH};ZG={click:eH,dblclick:eH,mousedown:eH,mouseup:eH,mousemove:eH,mouseover:eH,mouseout:eH,mousewheel:eH,keydown:dH,keyup:dH,keypress:dH,touchstart:eH,touchend:eH,touchmove:eH,touchcancel:eH,gesturestart:eH,gestureend:eH,gesturechange:eH}}
function uK(a,b,c){var d;a.c=c;S(a);if(a.g){ob(a.g);a.g=null;rK(a)}a.a.M=b;$J(a.a);d=!c&&a.a.F;a.i=b;if(d){if(b){qK(a);he(a.a).style[zub]=Bub;a.a.N!=-1&&a.a.Ve(a.a.H,a.a.N);(MJ(),LJ).ef(he(a.a),'rect(0px, 0px, 0px, 0px)');MH((JK(),NK()),a.a);a.g=new zK(a);pb(a.g,1)}else{T(a,200,Wf())}}else{sK(a)}}
function HR(a,b,c,d,e,f,g,h){if(a.d.o){a.d.o=false;fW(a.c)}a.d.e=g;YW(a.c,c,d);FR(a);a.c.C||(a.c.C=true,undefined);if(!TR(a.c.yc)){ZW(a.c,true);sU(a.c)}QX(a.c,c,c,d,d);OX(a.c,c,c,d,d,true);f?SO(a.d.u,e):TO(a.d.u,e);VO(a.d.u,!g);b!=null?XO(a.d.u,b):XO(a.d.u,l$(c,d));DV(a.c)||BW(a.c,c,d);h||FU(a.c)}
function Zgb(a,b){var c,d,e,f,g;d=b>>5;b&=31;if(d>=a.d){return a.e<0?(mgb(),ggb):(mgb(),lgb)}f=a.d-d;e=fq(hr,ixb,17,f+1,15,1);$gb(e,f,a.a,d,b);if(a.e<0){for(c=0;c<d&&a.a[c]==0;c++);if(c<d||b>0&&a.a[c]<<32-b!=0){for(c=0;c<f&&e[c]==-1;c++){e[c]=0}c==f&&++f;++e[c]}}g=new Hgb(a.e,f,e);pgb(g);return g}
function ihb(a,b){var c,d,e,f,g;d=XD(b,Ozb);if(YD(a,0)>=0){f=$D(a,d);g=fE(a,d)}else{c=lE(a,1);e=b>>>1;f=$D(c,e);g=fE(c,e);g=WD(jE(g,1),XD(a,1));if((b&1)!=0){if(YD(f,g)<=0){g=mE(g,f)}else{if(eE(mE(f,g),d)){g=WD(g,mE(d,f));f=mE(f,1)}else{g=WD(g,mE(jE(d,1),f));f=mE(f,2)}}}}return iE(jE(g,32),XD(f,Ozb))}
function _N(a,b){nI.call(this);this.a=Qi($doc);this.b=false;this.f=false;this.k=-1;this.g=-1;this.i=-1;this.j=-1;this.n=-1;this.d=-1;this.e=a;this.c=b;(CF(),this.Xc).className='grouping';Ae(this.Xc,'minus',true);this.a.innerHTML='&#x2212;';this.a.className='expand';Vg(this.Xc,this.a);YF(this.Xc,262145)}
function Y0(a){V0();var b=a.a;if(!b.getPropertyValue)return '';if(b.getPropertyValue(Qxb))return b.getPropertyValue(Qxb);if(b.getPropertyValue(Rxb))return b.getPropertyValue(Rxb);if(b.getPropertyValue(Sxb))return b.getPropertyValue(Sxb);if(b.getPropertyValue(Txb))return b.getPropertyValue(Txb);return ''}
function TQ(){this.d=Qi($doc);this.b=Qi($doc);this.a=Qi($doc);this.d.className='v-spreadsheet-popupbutton-overlay-header';this.b.className='v-window-closebox';this.b.setAttribute('role',Stb);this.a.className='header-caption';Vg(this.d,this.b);Vg(this.d,this.a);YF(this.b,1);XF(this.b,this);ne(this,this.d)}
function $R(a,b,c,d,e){var f;a.e=b;a.K=d;a.f=c;a.L=e;a.Y=QR(a.q.V.W,d,e+1);a.Z=QR(a.q.g,b,c+1);f=a.Z==0||a.Y==0;MS(a.b,b,c,d,e);f&&IS(a.b,true);if(a.ab>0&a.r>0){MS(a.W,b,c,d,e);f&&IS(a.W,true)}if(a.ab>0){MS(a.X,b,c,d,e);f&&IS(a.X,true)}if(a.r>0){MS(a.a,b,c,d,e);f&&IS(a.a,true)}a.p&&WR(a,false);a.o||cS(a)}
function YL(a){var b=$doc.createElement('div');b.tabIndex=0;var c=$doc.createElement('input');c.type='text';c.tabIndex=-1;c.setAttribute(kub,'true');var d=c.style;d.opacity=0;d.height='1px';d.width='1px';d.zIndex=-1;d.overflow=Uub;d.position=Bub;c.addEventListener('focus',a,false);b.appendChild(c);return b}
function Wbb(b,c){b.u=-1;b.v=-1;if(c.length>=1){try{b.u=Vdb(c[0])}catch(a){a=UD(a);if(!Yq(a,21))throw VD(a)}}if(c.length>=2){try{b.v=Vdb(c[1])}catch(a){a=UD(a);if(!Yq(a,21))throw VD(a)}if(b.v==-1&&c[1].indexOf('-')!=-1){try{b.v=Vdb(afb(c[1],0,Reb(c[1],ffb(45))))}catch(a){a=UD(a);if(!Yq(a,21))throw VD(a)}}}}
function tg(a){var b,c,d,e,f,g,h;f=a.length;if(f==0){return null}b=false;c=new of;while(Wf()-c.a<16){d=false;for(e=0;e<f;e++){h=a[e];if(!h){continue}d=true;if(!h[0].Jd()){a[e]=null;b=true}}if(!d){break}}if(b){g=[];for(e=0;e<f;e++){!!a[e]&&(g[g.length]=a[e],undefined)}return g.length==0?null:g}else{return a}}
function nX(a,b,c){var d,e,f,g;e=JU(a,b,c);d=UU(a,Yvb+b+Zvb+c);g=JU(a,a.rc,a.sc);f=UU(a,Yvb+a.rc+Zvb+a.sc);Xnb(a.u,new MY(a.rc,a.sc));if(g){Xnb(a.t,g);sh(g.d,$wb);dh(g.d,Zwb)}if(f){Xnb(a.t,f);sh(f.d,$wb);dh(f.d,Zwb)}Znb(a.u,new MY(b,c));if(e){Znb(a.t,e);sh(e.d,Zwb)}if(d){Znb(a.t,d);sh(d.d,Zwb)}a.sc=c;a.rc=b}
function _M(a){var b,c,d;d=a.Tc&&a.M;ZJ(a);if(d){return false}else{a.hf(false);re(a,xe(LJ.df((CF(),CF(),lh(a.Xc))))+'-'+_vb,true);c=new y1(a.Xc);b=Y0(c);b==null&&(b='');a.hf(true);if(b.indexOf(_vb)!=-1){a.F=false;W0(a.Xc,new u6(a));return true}else{re(a,xe(LJ.df((null,lh(a.Xc))))+'-'+_vb,false);return false}}}
function aU(b,c){var d,e,f,g;if(c.a.length>0){e=new sfb(_U(b.Ec));for(g=new Ykb(c);g.a<g.c.a.length;){f=Wkb(g);try{ofb(e,Xeb(f,Xwb,Ywb+b.Ac+' .cell.col'))}catch(a){a=UD(a);if(Yq(a,21)){d=a;lrb(b.U,(nqb(),lqb),'Invalid custom cell border style: '+f+', '+d.Gd())}else throw VD(a)}}$g(b.Ec);Vg(b.Ec,fj($doc,e.a))}}
function x0(){this.n=new Vnb;this.I=new F0(this);this.s=new G0;h0(this,(!Bo&&(Bo=new Qo),Bo.a));this.V=new VX(this,this.Z);this.u=new fP(this,this.V);this.U=new QT(this);this.Q=new LR(this,this.V);Vg(he(this.V),he(this.u));Vg(he(this.V),he(this.U));cI(this,this.V);Ie(this.V,new I0(this),(!dp&&(dp=new An),dp))}
function OO(a,b){var c,d,e,f,g,h;f=new IP;if(b.indexOf('!')!=-1){h=$eb(b,'!',0)[0];return Peb(p$(a.t),h)?OO(a,$eb(b,'!',0)[1]):null}else if(b.indexOf(':')!=-1){g=$eb(b,':',0);c=gP(g[0]);f.col1=c.a;f.row1=c.b;d=gP(g[1]);f.col2=d.a;f.row2=d.b}else{e=gP(b);f.col1=e.a;f.row1=e.b;f.col2=f.col1;f.row2=f.row1}return f}
function V1(a,b,c){T1();a.onload=Ysb(function(){a.onload=null;a.onerror=null;a.onreadystatechange=null;b.Ff(c)});a.onerror=Ysb(function(){a.onload=null;a.onerror=null;a.onreadystatechange=null;b.Ef(c)});a.onreadystatechange=function(){('loaded'===a.readyState||'complete'===a.readyState)&&a.onload(arguments[0])}}
function mgb(){mgb=AE;var a;hgb=new Ggb(1,1);jgb=new Ggb(1,10);lgb=new Ggb(0,0);ggb=new Ggb(-1,1);igb=iq(dq(RB,1),atb,11,0,[lgb,hgb,new Ggb(1,2),new Ggb(1,3),new Ggb(1,4),new Ggb(1,5),new Ggb(1,6),new Ggb(1,7),new Ggb(1,8),new Ggb(1,9),jgb]);kgb=fq(RB,atb,11,32,0,1);for(a=0;a<kgb.length;a++){kgb[a]=Tgb(jE(1,a))}}
function FK(){var c=function(){};c.prototype={className:'',clientHeight:0,clientWidth:0,dir:'',getAttribute:function(a,b){return this[a]},href:'',id:'',lang:'',nodeType:1,removeAttribute:function(a,b){this[a]=undefined},setAttribute:function(a,b){this[a]=b},src:'',style:{},title:''};$wnd.GwtPotentialElementShim=c}
function R$(a,b,c,d,e){var f,g,h,i;if(b==0||c==0||d==0||e==0||b==c&&d==e&&b==a.V.rc&&d==a.V.sc){return}f=c;g=e;if(b>c){i=b;b=c;c=i}if(d>e){i=d;d=e;e=i}if(a.u.f){UO(a.u,a.X,a.Y,f,g,false);DO(a.u)}else{h=JP(a.I,d,e,b,c);Z9(a.W,a.V.sc,a.V.rc,h.row1,h.col1,h.row2,h.col2);XO(a.u,l$(a.V.rc,a.V.sc));FR(a.Q);pb(a.s,200)}}
function iS(a){LS(a.b,a.ab==0?0:a.ab+1,0,a.r==0?0:a.r+1,0);!!a.a&&LS(a.a,a.ab==0?0:a.ab+1,0,0,a.r);!!a.X&&LS(a.X,0,a.ab,a.r==0?0:a.r+1,0);!!a.W&&LS(a.W,0,a.ab,0,a.r);xS(a.B,a.ab==0?0:a.ab+1,0,a.r==0?0:a.r+1,0);!!a.A&&xS(a.A,a.ab==0?0:a.ab+1,0,0,a.r);!!a.F&&xS(a.F,0,a.ab,a.r==0?0:a.r+1,0);!!a.D&&xS(a.D,0,a.ab,0,a.r)}
function TS(a){this.F=a;this.B=Qi($doc);this.G=Qi($doc);this.k=Qi($doc);this.u=Qi($doc);this.a=Qi($doc);this.g=Qi($doc);this.i=Qi($doc);this.I=Qi($doc);this.o=Qi($doc);this.w=Qi($doc);this.c=Qi($doc);this.J=Qi($doc);this.p=Qi($doc);this.A=Qi($doc);this.d=Qi($doc);ES(this);YF(this.B,15736908);XF(this.B,new US(this))}
function qqb(a){nqb();var b;b=cfb(a,(hpb(),fpb));switch(b){case 'ALL':return eqb;case 'CONFIG':return fqb;case 'FINE':return gqb;case 'FINER':return hqb;case 'FINEST':return iqb;case 'INFO':return jqb;case 'OFF':return kqb;case 'SEVERE':return lqb;case Jzb:return mqb;default:throw VD(new deb('Invalid level "'+a+'"'));}}
function Mq(a){var b,c,d,e,f;if(a.l==0&&a.m==0&&a.h==0){return '0'}if(a.h==gvb&&a.m==0&&a.l==0){return '-9223372036854775808'}if(a.h>>19!=0){return '-'+Mq(Dq(a))}c=a;d='';while(!(c.l==0&&c.m==0&&c.h==0)){e=lq(hvb);c=oq(c,e,true);b=''+Lq(kq);if(!(c.l==0&&c.m==0&&c.h==0)){f=9-b.length;for(;f>0;f--){b='0'+b}}d=b+d}return d}
function wob(){if(!Object.create||!Object.getOwnPropertyNames){return false}var a='__proto__';var b=Object.create(null);if(b[a]!==undefined){return false}var c=Object.getOwnPropertyNames(b);if(c.length!=0){return false}b[a]=42;if(b[a]!==42){return false}if(Object.getOwnPropertyNames(b).length==0){return false}return true}
function DS(a){this.p=a;this.k=Qi($doc);this.q=Qi($doc);this.d=Qi($doc);this.j=Qi($doc);this.a=Qi($doc);this.k.className=Jwb;dh(this.k,'paintmode');this.q.className='s-top';this.d.className=Kwb;this.j.className=Lwb;this.a.className=Mwb;Vg(this.q,this.d);Vg(this.q,this.j);Vg(this.d,this.a);Vg(this.k,this.q);ne(this,this.k)}
function e6(a){var b,c,d,e,f;e=$doc.querySelectorAll('link[rel~="icon"]');for(c=0;c<e.length;c++){d=e[c];b=(Fh(),d).getAttribute('href')||'';if(b!=null&&b.indexOf('VAADIN/themes')!=-1&&(f=fzb.length,Peb(b.substr(b.length-f,f),fzb))){b=Zeb(b,'VAADIN/themes/.+?/favicon.ico','VAADIN/themes/'+a+fzb);d.setAttribute('href',b)}}}
function FO(a){var b,c,d,e,f,g,h;for(c=(h=(new Hjb(a.F.a)).a.Zf().Ne(),new Njb(h));c.a.Xe();){b=(g=c.a.Ye(),g.fg());d=new MY(b.c,b.k);if(!tib(a.D,d)){b.d.style[nwb]='';b.d.style[owb]=''}}Cib(a.F.a);a.f&&yO(a);for(f=new Yib((new Qib(a.D)).a);f.b;){e=Xib(f);b=JU(a.I,e.fg().a,e.fg().b);if(b){b.d.style[nwb]=e.gg();Xnb(a.F,b)}}}
function $M(a,b){var c,d;if((LJ.df((CF(),CF(),lh(a.Xc))).className||'').indexOf(_vb)!=-1){W0(a.Xc,new w6(a,b))}else{re(a,xe(LJ.df((null,lh(a.Xc))))+'-'+awb,true);d=new y1(a.Xc);c=Y0(d);c==null&&(c='');if(c.indexOf(awb)!=-1){a.F=false;W0(a.Xc,new y6(a,b));a.K=false}else{re(a,xe(LJ.df((null,lh(a.Xc))))+'-'+awb,false);bN(a,b)}}}
function Q1(a,b){var c;c=new Jbb;Ibb(c,UF((Fh(),a).type));Bbb(c,(b2(),m2(a)));Cbb(c,n2(a));Eh.Rd(a)==1?Abb(c,(Obb(),Lbb)):Eh.Rd(a)==2?Abb(c,(Obb(),Nbb)):Eh.Rd(a)==4?Abb(c,(Obb(),Mbb)):Abb(c,(Obb(),Lbb));zbb(c,!!a.altKey);Dbb(c,!!a.ctrlKey);Ebb(c,!!a.metaKey);Hbb(c,!!a.shiftKey);if(b){Fbb(c,R1(c.c,b));Gbb(c,S1(c.d,b))}return c}
function tU(a){var b,c,d,e,f,g;for(g=new Ykb(a.ic);g.a<g.c.a.length;){e=Wkb(g);sh(e,_wb)}for(d=new Ykb(a.K);d.a<d.c.a.length;){b=Wkb(d);sh(b,axb)}if(a.jb){for(f=new Ykb(a.jb);f.a<f.c.a.length;){e=Wkb(f);sh(e,_wb)}}if(a.ib){for(c=new Ykb(a.ib);c.a<c.c.a.length;){b=Wkb(c);sh(b,axb)}}Cib(a.wc.a);Cib(a.tc.a);Cib(a.vc.a);Cib(a.uc.a)}
function LO(a,b,c){var d,e,f,g,h,i,j,k;g=$wnd.Math.min(b.col1,b.col2);f=$wnd.Math.max(b.col1,b.col2);k=$wnd.Math.min(b.row1,b.row2);j=$wnd.Math.max(b.row1,b.row2);if(f>20000){hrb(trb((vdb(Vw),Vw.i)));return}for(d=g;d<=f;d++){for(i=k;i<=j;i++){e=JU(a.I,d,i);if(e){h=e.d;h.style[nwb]=c;Xnb(a.F,e);yib(a.D,new MY(d,i),c)}}}rkb(a.i,b)}
function gP(a){var b,c,d,e,f,g,h,i,j;b='';g='';if(a!=null){j=$eb(a.toUpperCase(),'[0-9]',0);i=$eb(a,'[A-z]',0);j.length>0&&(b=j[0]);i.length>0&&(g=i[i.length-1])}h=g.length>0?reb(Vdb(g)).a:0;d=0;for(f=0;f<b.length;f++){e=(Osb(f,b.length),b.charCodeAt(f));c=0;e>=65&&e<=90?(c=e-64):e>=97&&e<=122&&(c=e-96);d=d*26+c}return new MY(d,h)}
function Q$(a,b){var c,d,e,f,g,h,i;for(d=new Yib((new Qib(b)).a);d.b;){c=Xib(d);e=c.fg().a;h=c.gg().a;if(h==0){if(!a.v){a.v=new Akb;rkb(a.v,reb(e))}else vkb(a.v,reb(e),0)!=-1||rkb(a.v,reb(e))}a.g[e-1]=h}dW(a.V,false);if(a.J){for(g=new Ykb(a.J);g.a<g.c.a.length;){f=Wkb(g);HX(a.V,f)}}a.d=true;i=eV(a.V);eab(a.W,b,i[0],i[1],i[2],i[3])}
function b_(a,b){var c,d,e,f,g,h,i;for(d=new Yib((new Qib(b)).a);d.b;){c=Xib(d);e=c.fg().a;h=c.gg().a;if(h==0){if(!a.w){a.w=new Akb;rkb(a.w,reb(e))}else vkb(a.w,reb(e),0)!=-1||rkb(a.w,reb(e))}a.M[e-1]=h}dW(a.V,false);if(a.J){for(g=new Ykb(a.J);g.a<g.c.a.length;){f=Wkb(g);HX(a.V,f)}}a.d=true;i=eV(a.V);sab(a.W,b,i[0],i[1],i[2],i[3])}
function yhb(){yhb=AE;var a,b;vhb=fq(RB,atb,11,32,0,1);whb=fq(RB,atb,11,32,0,1);xhb=iq(dq(hr,1),ixb,17,15,[1,5,25,125,625,3125,15625,78125,390625,1953125,9765625,48828125,Lzb,Mzb]);a=1;for(b=0;b<=18;b++){vhb[b]=Tgb(a);whb[b]=Tgb(jE(a,b));a=gE(a,5)}for(;b<whb.length;b++){vhb[b]=zgb(vhb[b-1],vhb[1]);whb[b]=zgb(whb[b-1],(mgb(),jgb))}}
function OT(a){var b,c,d,e,f,g;e=a.g.value;if(e.length>31){e=e.substr(0,31);sj(a.g,e)}xh(a.v,e);f=(a.v.offsetWidth||0)|0;f<50&&(f=50);c=a.u[a.r];b=hh(a.k);d=(Fh(),Eh).Xd(c)+((c.offsetWidth||0)|0)+10;while(d>b&&a.s<a.u.length-1){g=GT(a,a.s);d=dr(d-g);a.t-=g;++a.s}a.c.style[bwb]=a.t+(hm(),Kvb);a.g.style[hub]=f+5+Kvb;c.style[hub]=f+Kvb}
function sH(){$wnd.addEventListener('mouseout',Ysb(function(a){var b=(aH(),YG);if(b&&!a.relatedTarget){if('html'==a.target.tagName.toLowerCase()){var c=$doc.createEvent(vub);c.initMouseEvent(Zub,true,true,$wnd,0,a.screenX,a.screenY,a.clientX,a.clientY,a.ctrlKey,a.altKey,a.shiftKey,a.metaKey,a.button,null);b.dispatchEvent(c)}}}),true)}
function rQ(a){var b,c,d,e,f,g;g=a.xf();f=xe(a.yf().md());a.yf().pd('v-widget',true);oQ(a,f,'-error',null!=g.ib);for(b=0;b<a.s.length;b++){e=a.s[b];a.yf().pd(e,false);oQ(a,f+'-',e,false)}a.s.length=0;if(lcb(g.mb)){for(d=g.mb.Ne();d.Xe();){c=d.Ye();a.yf().pd(c,true);oQ(a,f+'-',c,true);Vf(a.s,c)}}g.lb!=null&&!Peb(g.lb,f)&&se(a.yf(),g.lb)}
function OX(a,b,c,d,e,f){var g,h,i,j,k,l;a.v=false;if(f){pU(a);tU(a);i=JU(a,a.rc,a.sc);a.nb=null;!!i&&sh(i.d,$wb)}for(l=d;l<=e;l++){for(h=b;h<=c;h++){if(h!=a.rc||l!=a.sc){i=JU(a,h,l);Xnb(a.u,new MY(h,l));if(i){Xnb(a.t,i);dh(i.d,Zwb)}j=UU(a,Yvb+h+Zvb+l);if(j){Xnb(a.t,j);dh(j.d,Zwb)}}}}for(k=d;k<=e;k++){EW(a,k)}for(g=b;g<=c;g++){DW(a,g)}}
function hR(){_e();this.j=Qi($doc);this.a=new lR(this);this.f=new Akb;this.j.className=Cwb;this.j.setAttribute('role',Stb);this.e=new zN;qe(this.e,'v-spreadsheet-popupbutton-overlay');this.i=new wL;se(this.i,'overlay-layout');this.g=new TQ;RQ(this.g,this.e);uL(this.i,this.g);oI(this.e,this.i);ne(this,this.j);He(this,this,(kn(),kn(),jn))}
function dV(a,b,c,d){var e,f,g,h;h=new sfb(Ywb);nfb(ofb(ofb(h,a.Ac),' .sheet .cell.cs'),b);for(g=new Yib((new Qib(c)).a);g.b;){e=Xib(g);heb(e.gg(),b)&&ofb(nfb(ofb(ofb((h.a+=hxb,h),a.Ac),exb),e.fg()),'.cell.cs0')}for(f=new Yib((new Qib(d)).a);f.b;){e=Xib(f);heb(e.gg(),b)&&ofb(nfb(ofb(ofb((h.a+=hxb,h),a.Ac),cxb),e.fg()),'.cell.cs0')}return h.a}
function NX(a){var b,c,d,e,f,g;BX(a,a.gc,a.dc,a.mb,a.jb,false,a.fc);g=a.Z?a.fc+1:a.fc;if(a.hc.childNodes.length==g){return}$g(a.hc);for(e=1;e<=g;e++){c=Qi($doc);Vg(a.hc,c);(Fh(),Eh).ee(c,''+e);c.className=wxb;f=e;CF();AF.Le(c,1);XF(c,new pY(a,f))}$g(a.cc);for(d=1;d<=g-1;d++){b=Qi($doc);Vg(a.cc,b);b.className=owb;b.style[bwb]=15*d+(hm(),Kvb)}}
function lQ(a,b){b.Gf('id')&&(a.xf().kb!=null?vh(he(a.yf()),a.xf().kb):b.b||(he(a.yf()).removeAttribute('id'),undefined));Yq(a.xf(),126)?Yq(a.yf(),60)&&a.yf().Bd((a.xf(),0)):Yq(a.xf(),166)&&Yq(a.yf(),60)&&a.yf().Bd(a.xf().n);YP(a,b);rQ(a);qQ(a,a.xf().nb==null?'':a.xf().nb,a.xf().jb==null?'':a.xf().jb);if(!a.t&&a.Af()){a.t=true;null.sg(a.yf())}}
function _R(a,b){var c,d,e,f;if(a._){c=!(!!a.a&&a.a.K>a.b.K)&&b;e=!(!!a.X&&a.X.j>a.b.j)&&b;PS(a.b,c,e,c,e);if(a.a){c=!(!!a.b&&a.b.K>=a.a.K)&&b;d=!(!!a.W&&a.W.j>a.a.j)&&b;PS(a.a,c,d,c,d)}if(a.X){f=!(!!a.W&&a.W.K>a.X.K)&&b;e=!(!!a.b&&a.b.j>=a.X.j)&&b;PS(a.X,f,e,f,e)}if(a.W){f=!(!!a.X&&a.X.K>=a.W.K)&&b;d=!(!!a.a&&a.a.j>=a.W.j)&&b;PS(a.W,f,d,f,d)}}}
function PT(a){var b,c,d;if(a==null){return false}d=a.length;if(d<1||d>31){return false}for(c=0;c<d;c++){b=(Osb(c,a.length),a.charCodeAt(c));switch(b){case 47:case 92:case 63:case 42:case 93:case 91:case 58:return false;default:continue;}}Osb(0,a.length);if(a.charCodeAt(0)==39||(Osb(d-1,a.length),a.charCodeAt(d-1)==39)){return false}return true}
function Qgb(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p,q;n=b.length;i=n;Osb(0,b.length);if(b.charCodeAt(0)==45){l=-1;m=1;--n}else{l=1;m=0}f=(bhb(),ahb)[10];e=n/f|0;q=n%f;q!=0&&++e;h=fq(hr,ixb,17,e,15,1);c=_gb[8];g=0;o=m+(q==0?f:q);for(p=m;p<i;p=o,o=p+f){d=Vdb(b.substr(p,o-p));j=(yhb(),Chb(h,h,g,c));j+=rhb(h,g,d);h[g++]=j}k=g;a.e=l;a.d=k;a.a=h;pgb(a)}
function yH(){var d=$wnd.onbeforeunload;var e=$wnd.onunload;$wnd.onbeforeunload=function(a){var b,c;try{b=Ysb(EG)()}finally{c=d&&d(a)}if(b!=null){return b}if(c!=null){return c}};$wnd.onunload=Ysb(function(a){try{yG();sG&&mp((!tG&&(tG=new RG),tG))}finally{e&&e(a);$wnd.onresize=null;$wnd.onscroll=null;$wnd.onbeforeunload=null;$wnd.onunload=null}})}
function Kp(b,c){var d,e,f,g,h,i;if(!c){throw VD(new Geb('Cannot fire null event'))}try{++b.b;h=(e=Np(b,c.me(),null),e);d=null;i=b.c?h._f(h.size()):h.$f();while(b.c?i.cg():i.Xe()){g=b.c?i.dg():i.Ye();try{c.ke(g)}catch(a){a=UD(a);if(Yq(a,20)){f=a;!d&&(d=new $nb);yib(d.a,f,d)}else throw VD(a)}}if(d){throw VD(new Tp(d))}}finally{--b.b;b.b==0&&Op(b)}}
function QW(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,o,p;k=(d.offsetWidth||0)|0;j=b-k;i=(Fh(),Eh).Xd(d);if(j>0){o=(yG(),(qj($doc).clientWidth|0)+nj($doc));n=nj($doc);h=o-i;e=i-n;h<b&&e>=j&&(i-=j)}l=Eh.Yd(d);p=(yG(),oj($doc));m=oj($doc)+(qj($doc).clientHeight|0);f=l-p;g=m-(l+((d.offsetHeight||0)|0));g<c&&f>=c?(l-=c):(l+=(d.offsetHeight||0)|0);eN(a.qb,i,l)}
function SP(a,b){a.D=b;a.G='1';!!a&&(he((!a.C&&(a.C=new x0),a.C)).tkPid='1',undefined);Bp((!a.F&&(a.F=new Ep(a)),a.F),(v2(),u2),a);O_((!a.C&&(a.C=new x0),a.C),a.G);ZP(a,$x,a.a);!a.C&&(a.C=new x0);a.i=new pbb;g0((!a.C&&(a.C=new x0),a.C),a.i);c0((!a.C&&(a.C=new x0),a.C),new HZ(a));a.b=He(d1(a.D),new IZ,(rn(),rn(),qn));X9(a.i.d,iq(dq(GB,1),atb,1,5,[]))}
function X2(c){var d={setter:function(a,b){a.b=b},getter:function(a){return a.b}};c.Jf(_A,'title',d);var d={setter:function(a,b){a.q=b},getter:function(a){return a.q}};c.Jf(jB,$yb,d);var d={setter:function(a,b){a.n=mdb(b)},getter:function(a){return pdb(a.n)}};c.Jf(dB,_yb,d);var d={setter:function(a,b){a.nb=b},getter:function(a){return a.nb}};c.Jf(LA,hub,d)}
function XN(a,b){var c;b.b=a.b;b.e=a.e;b.f=a.f;xh(b.a,mh(a.a));c=(CF(),b.Xc).style;qe(b,a.Xc.className||'');a.i>-1&&(c[bwb]=a.i+(hm(),Kvb),undefined);a.j>-1&&(c[cwb]=a.j+(hm(),Kvb),undefined);a.d>-1&&(c[gub]=a.d+(hm(),Kvb),undefined);a.n>-1&&(c[hub]=a.n+(hm(),Kvb),undefined);a.k>-1&&(c[Dvb]=a.k+(hm(),Kvb),undefined);a.g>-1&&(c[Cvb]=a.g+(hm(),Kvb),undefined)}
function jhb(a,b){var c,d,e,f,g,h;f=(d=pE(a),d!=0?peb(d):peb(pE(kE(a,32)))+32);g=(e=pE(b),e!=0?peb(e):peb(pE(kE(b,32)))+32);h=$wnd.Math.min(f,g);f!=0&&(a=lE(a,f));g!=0&&(b=lE(b,g));do{if(YD(a,b)>=0){a=mE(a,b);a=lE(a,(c=pE(a),c!=0?peb(c):peb(pE(kE(a,32)))+32))}else{b=mE(b,a);b=lE(b,(c=pE(b),c!=0?peb(c):peb(pE(kE(b,32)))+32))}}while(YD(a,0)!=0);return jE(b,h)}
function GX(a,b,c){var d,e,f;f=0;e=0;d=c.d;if(a.ob>=b.col1&&b.col2>a.ob){$V(a,b,c);yib(a.Kb,b,c);f=1}else{f=QR(a.a.g,b.col1,b.col2+1);d.style[hub]=f+(hm(),Kvb)}if(a.Sc>=b.row1&&b.row2>a.Sc){ZV(a,b,c);yib(a.Kb,b,c);e=1}else{e=QR(a.a.V.W,b.row1,b.row2+1);d.style[gub]=e+(hm(),Kvb)}f==0||e==0?(c.d.style[Gub]=(zk(),fub),undefined):(c.d.style[Gub]='flex',undefined)}
function ghb(a,b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p;n=a.a;o=a.d;p=a.e;if(o==1){d=XD(n[0],Ozb);e=XD(b,Ozb);f=$D(d,e);j=fE(d,e);p!=c&&(f=hE(f));p<0&&(j=hE(j));return iq(dq(RB,1),atb,11,0,[Tgb(f),Tgb(j)])}h=o;i=p==c?1:-1;g=fq(hr,ixb,17,h,15,1);k=iq(dq(hr,1),ixb,17,15,[hhb(g,n,o,b)]);l=new Hgb(i,h,g);m=new Hgb(p,1,k);pgb(l);pgb(m);return iq(dq(RB,1),atb,11,0,[l,m])}
function xX(a){var b,c,d,e,f,g,h;BX(a,a.I,a.F,a.lb,a.ib,true,a.H);g=a.Z?a.H+1:a.H;if(a.J.childNodes.length==g){return}$g(a.J);for(e=1;e<=g;e++){h=Zi($doc);c=Qi($doc);Vg(a.J,c);c.appendChild(h);(Fh(),Eh).ee(h,''+e);c.className=wxb;f=e;CF();AF.Le(c,1);XF(c,new nY(a,f))}$g(a.D);for(d=1;d<=g-1;d++){b=Qi($doc);Vg(a.D,b);b.className=owb;b.style[cwb]=18*d+(hm(),Kvb)}}
function hhb(a,b,c,d){var e,f,g,h,i,j,k;j=0;f=XD(d,Ozb);for(h=c-1;h>=0;h--){k=iE(jE(j,32),XD(b[h],Ozb));if(YD(k,0)>=0){i=$D(k,f);j=fE(k,f)}else{e=lE(k,1);g=d>>>1;i=$D(e,g);j=fE(e,g);j=WD(jE(j,1),XD(k,1));if((d&1)!=0){if(YD(i,j)<=0){j=mE(j,i)}else{if(eE(mE(i,j),f)){j=WD(j,mE(f,i));i=mE(i,1)}else{j=WD(j,mE(jE(f,1),i));i=mE(i,2)}}}}a[h]=pE(XD(i,Ozb))}return pE(j)}
function NR(a,b){var c,d;a.S=xV(a.Q,a.f,a.L);a.T=yV(a.Q,a.f,a.L);a.R=uV(a.Q,a.f,a.L);a.g=!a.S&&!a.T;a.i=!a.S&&!a.R;a.t=ph(a.Q.zc);a.u=(a.Q.zc.scrollTop||0)|0;a.c=(c=nj($doc),b2(),(Fh(),b).type.indexOf(Dwb)!=-1?Qm(b.changedTouches[0])+c:_h(b.clientX||0)+c);a.d=(d=oj($doc),b.type.indexOf(Dwb)!=-1?Rm(b.changedTouches[0])+d:_h(b.clientY||0)+d);a.U=a.f;a.V=a.L;hS(a)}
function Hhb(a,b,c){var d,e,f,g,h;for(f=0;f<b;f++){d=0;for(h=f+1;h<b;h++){d=WD(WD(gE(XD(a[f],Ozb),XD(a[h],Ozb)),XD(c[f+h],Ozb)),XD(pE(d),Ozb));c[f+h]=pE(d);d=lE(d,32)}c[f+b]=pE(d)}Ygb(c,c,b<<1);d=0;for(e=0,g=0;e<b;++e,g++){d=WD(WD(gE(XD(a[e],Ozb),XD(a[e],Ozb)),XD(c[g],Ozb)),XD(pE(d),Ozb));c[g]=pE(d);d=lE(d,32);++g;d=WD(d,XD(c[g],Ozb));c[g]=pE(d);d=lE(d,32)}return c}
function gQ(b){var c,d,e,f;e=new f4(b.pg);try{f=x4(new Y3(e,'getWidget'));d=e4(f);return d}catch(a){a=UD(a);if(Yq(a,79)){c=a;throw VD(new geb('Default implementation of createWidget() does not work for '+xdb(b.pg)+'. This might be caused by explicitely using '+'super.createWidget() or some unspecified '+'problem with the widgetset compilation.',c))}else throw VD(a)}}
function rgb(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p;f=b.e;if(f==0){throw VD(new gdb(Pzb))}e=b.d;d=b.a;if(e==1){return ghb(a,d[0],f)}n=a.a;o=a.d;c=o!=e?o>e?1:-1:qhb(n,d,o);if(c<0){return iq(dq(RB,1),atb,11,0,[lgb,a])}p=a.e;h=o-e+1;k=e;i=p==f?1:-1;g=fq(hr,ixb,17,h,15,1);j=fhb(g,h,n,o,d,e);l=new Hgb(i,h,g);m=new Hgb(p,k,j);pgb(l);pgb(m);return iq(dq(RB,1),atb,11,0,[l,m])}
function ugb(a,b){var c,d,e,f;c=a.e<0?new Hgb(1,a.d,a.a):a;d=b.e<0?new Hgb(1,b.d,b.a):b;if(c.e==0){return d}else if(d.e==0){return c}if((c.d==1||c.d==2&&c.a[1]>0)&&(d.d==1||d.d==2&&d.a[1]>0)){return Tgb(jhb((f=c.d>1?iE(jE(c.a[1],32),XD(c.a[0],Ozb)):XD(c.a[0],Ozb),gE(c.e,f)),(e=d.d>1?iE(jE(d.a[1],32),XD(d.a[0],Ozb)):XD(d.a[0],Ozb),gE(d.e,e))))}return khb(ogb(c),ogb(d))}
function JN(a,b){if(b){Pm(a.e,jI(a.g.a));te(a.g,false);a.e.style[Gub]=(zk(),Mub);a.e.focus();a.e.select()}else{AI(a.g,a.e.value);te(a.g,true);a.e.style[Gub]=(zk(),fub);uU(a.r,jI(a.g.a),a.b,a.d)}ke(a.f)&&(ke(a.a)||ke(a.g)||Peb((zk(),Mub),Hj(a.e.style)))?(je(a.f).className||'').indexOf(jwb)!=-1||re(a.f,jwb,true):(je(a.f).className||'').indexOf(jwb)!=-1&&re(a.f,jwb,false)}
function eX(a,b,c){var d,e;a._=true;rT(a.$,'.'+a.Ac+' .sheet div'+(Xwb+a.rc+'.row'+a.sc),0);qe(a.sb,Yvb+a.rc+Zvb+a.sc+' cell'+' '+(e=KU(a,a.rc,a.sc),!e?'cs0':e.cellStyle));if(CV(a,Yvb+a.rc+Zvb+a.sc)){a.ab=true;d=UU(a,Yvb+a.rc+Zvb+a.sc);!!d&&pe(a.sb,Ij(d.d.style))}CX(a);b&&(rV(a,a.rc,a.sc)||BW(a,a.rc,a.sc),Z1((ng(),mg),new hY(a,false)));Z1((ng(),mg),new jY(a,c));bL(a.sb,c)}
function Vdb(a){var b,c,d,e,f;if(a==null){throw VD(new Ieb(otb))}d=a.length;e=d>0&&(Osb(0,a.length),a.charCodeAt(0)==45||(Osb(0,a.length),a.charCodeAt(0)==43))?1:0;for(b=e;b<d;b++){if(tdb((Osb(b,a.length),a.charCodeAt(b)))==-1){throw VD(new Ieb(ntb+a+'"'))}}f=parseInt(a,10);c=f<ptb;if(isNaN(f)){throw VD(new Ieb(ntb+a+'"'))}else if(c||f>ftb){throw VD(new Ieb(ntb+a+'"'))}return f}
function d_(a,b,c){var d,e,f,g,h,i,j;b==0?(b=1):b<0&&(b=YU(a.V)+1);b>a.i&&(b=a.i);c==0?(c=1):c<0&&(c=IU(a.V)+1);c>a.O&&(c=a.O);h=a.V.rc;i=a.V.sc;if(b<=h){d=b;e=h}else{d=h;e=b}if(c<=i){f=c;g=i}else{f=i;g=c}if(a.u.f){UO(a.u,a.X,a.Y,b,c,false)}else{j=JP(a.I,f,g,d,e);QX(a.V,j.col1,j.col2,j.row1,j.row2);OX(a.V,j.col1,j.col2,j.row1,j.row2,true);XO(a.u,m$(j.col1,j.col2,j.row1,j.row2))}}
function rq(a,b,c,d,e,f){var g,h,i,j,k,l,m;j=uq(b)-uq(a);g=Gq(b,j);i=nq(0,0,0);while(j>=0){h=xq(a,g);if(h){j<22?(i.l|=1<<j,undefined):j<44?(i.m|=1<<j-22,undefined):(i.h|=1<<j-44,undefined);if(a.l==0&&a.m==0&&a.h==0){break}}k=g.m;l=g.h;m=g.l;g.h=l>>>1;g.m=k>>>1|(l&1)<<21;g.l=m>>>1|(k&1)<<21;--j}c&&tq(i);if(f){if(d){kq=Dq(a);e&&(kq=Jq(kq,(Sq(),Qq)))}else{kq=nq(a.l,a.m,a.h)}}return i}
function $eb(a,b,c){var d,e,f,g,h,i,j,k;d=new RegExp(b,'g');j=fq(MB,stb,2,0,6,1);e=0;k=a;g=null;while(true){i=d.exec(k);if(i==null||k==''||e==c-1&&c>0){j[e]=k;break}else{h=i.index;j[e]=k.substr(0,h);k=afb(k,h+i[0].length,k.length);d.lastIndex=0;if(g==k){j[e]=k.substr(0,1);k=k.substr(1)}g=k;++e}}if(c==0&&a.length>0){f=j.length;while(f>0&&j[f-1]==''){--f}f<j.length&&(j.length=f)}return j}
function mO(a,b){var c,d,e,f;d=!a.c.vb&&!!(Fh(),b).ctrlKey||!!(Fh(),b).metaKey;f=WX(b);e=GV(a.c,f);if(!d||!e){return}if(((Fh(),b).keyCode|0)==67||(b.keyCode|0)==88){(_e(),$e).af((CF(),a.Xc));bL(a,hO(a.a));c=oh(a.Xc,Qvb).length;c>0&&aL(a,0,c);a.Xc.style[Cvb]=(hm(),'100.0px');zg((ng(),new qO(a,b)),100)}if((b.keyCode|0)==86){(CF(),a.Xc)[Qvb]='';(_e(),$e).af(a.Xc);zg((ng(),new sO(a)),100)}}
function U1(){var a,b,c,d,e,f,g,h,i,j;this.a=new $nb;new Vnb;a=$doc;a.getElementsByTagName(Yxb)[0];i=a.getElementsByTagName('script');for(e=0;e<i.length;e++){b=i[e];j=b.src;j!=null&&j.length!=0&&Xnb(this.a,j)}g=a.getElementsByTagName(Xtb);for(d=0;d<g.length;d++){f=g[d];h=f.rel;c=f.href;Qeb(Zxb,h)&&c!=null&&c.length!=0&&Xnb(this.a,c);Qeb('import',h)&&c!=null&&c.length!=0&&Xnb(this.a,c)}}
function XS(a,b){var c,d;if(!a.c._){if(!a.b){return}d=(Fh(),b).keyCode|0;c=Eh.Sd(b);if((c==122||c==121)&&(!!b.ctrlKey||!!b.metaKey)){Eh.Wd(b);b.stopPropagation();return}if(c==0){switch(d){case 38:case 40:case 37:case 39:case 9:case 8:case 46:case 32:Eh.Wd(b);b.stopPropagation();break;case 13:g_(a.c.a,b,String.fromCharCode(c));}}else !b.ctrlKey&&!b.metaKey&&g_(a.c.a,b,String.fromCharCode(c))}}
function phb(a,b,c,d,e){var f,g;f=WD(XD(b[0],Ozb),XD(d[0],Ozb));a[0]=pE(f);f=kE(f,32);if(c>=e){for(g=1;g<e;g++){f=WD(f,WD(XD(b[g],Ozb),XD(d[g],Ozb)));a[g]=pE(f);f=kE(f,32)}for(;g<c;g++){f=WD(f,XD(b[g],Ozb));a[g]=pE(f);f=kE(f,32)}}else{for(g=1;g<c;g++){f=WD(f,WD(XD(b[g],Ozb),XD(d[g],Ozb)));a[g]=pE(f);f=kE(f,32)}for(;g<e;g++){f=WD(f,XD(d[g],Ozb));a[g]=pE(f);f=kE(f,32)}}YD(f,0)!=0&&(a[g]=pE(f))}
function SU(a,b,c){var d,e,f,g,h,i,j,k,l;f=b-1;j=c-1;if(j<0||f<0){return null}if(a.Sc<c){l=c>=a.db;k=a.d.a.length>c-a.db;if(l&&k){g=ukb(a.d,c-a.db).a.length>f;if(g){return ukb(ukb(a.d,c-a.db),f)}}}else if(a.ob<b){h=b-a.bb;k=a.Qc.a.length>j;if(k){i=b>=a.bb;g=ukb(a.Qc,j).a.length>h;if(i&&g){return ukb(ukb(a.Qc,j),h)}}}else{e=j*a.ob+f;d=a.Mc.a.length>e;if(e>=0&&d){return ukb(a.Mc,e)}}return null}
function d6(a,b,c,d,e){var f,g;f=null;if(b!=null){f=a6(d);!f&&rrb(trb((vdb(bA),bA.k)),'Did not find the link tag for the old theme ('+d+'), adding a new stylesheet for the new theme ('+e+')')}if(c!=null){g=Ui($doc);g.rel=Zxb;g.type=pxb;g.href=e;V1(g,new r6(a,c,e,f),null);f?Yg($doc.getElementsByTagName(Yxb)[0],g,f):Vg($doc.getElementsByTagName(Yxb)[0],g)}else{!!f&&_g(Jh((Fh(),f)),f);$5(a,null)}}
function VR(a,b){var c,d,e,f,g,h,i,j;a.o=true;c=(g=nj($doc),b2(),(Fh(),b).type.indexOf(Dwb)!=-1?Qm(b.changedTouches[0])+g:_h(b.clientX||0)+g);d=(h=oj($doc),b.type.indexOf(Dwb)!=-1?Rm(b.changedTouches[0])+h:_h(b.clientY||0)+h);if(OR(a,d,c)){return}i=c-a.v+ph(a.Q.zc)-a.t;j=d-a.w+((a.Q.zc.scrollTop||0)|0)-a.u;i-=70;j-=20;e=a.q.g;f=a.q.V.W;a.U=PR(e,a.O,i,true);a.V=PR(f,a.P,j,true);d_(a.Q.a,a.U,a.V)}
function UR(a,b){var c,d,e,f,g,h,i,j,k,l;a.j=false;a.s=false;c=(i=nj($doc),b2(),(Fh(),b).type.indexOf(Dwb)!=-1?Qm(b.changedTouches[0])+i:_h(b.clientX||0)+i);d=(j=oj($doc),b.type.indexOf(Dwb)!=-1?Rm(b.changedTouches[0])+j:_h(b.clientY||0)+j);if(OR(a,d,c)){return}k=c-a.v+ph(a.Q.zc)-a.t;l=d-a.w+((a.Q.zc.scrollTop||0)|0)-a.u;f=a.q.g;h=a.q.V.W;e=PR(f,a.e,k,false);g=PR(h,a.K,l,false);e>=0&&g>=0&&jS(a,e,g)}
function yX(b){var c,d,e,f,g,h,i,j;i=b.a.n;try{f=new Ckb(new Hjb(i));ulb();glb(f.a,f.a.length);g=f.a.length;h=new sfb(_U(b.Dc));for(d=0;d<g;d++){e=(Hsb(d,f.a.length),f.a[d]);j=gib(job(i.a,e));ofb(h,Ywb+b.Ac+' .sheet .cell.cf'+e+' {'+j+'}')}$g(b.Dc);Vg(b.Dc,fj($doc,h.a))}catch(a){a=UD(a);if(Yq(a,21)){c=a;qrb(b.U,'SheetWidget:updateConditionalFormattingStyles: '+yf(c,c.Gd())+vxb)}else throw VD(a)}}
function Mfb(a,b){var c,d,e,f,g,h;e=Sfb(a);h=Sfb(b);if(e==h){if(a.e==b.e&&a.a<54&&b.a<54){return a.f<b.f?-1:a.f>b.f?1:0}d=a.e-b.e;c=(a.d>0?a.d:$wnd.Math.floor((a.a-1)*Nzb)+1)-(b.d>0?b.d:$wnd.Math.floor((b.a-1)*Nzb)+1);if(c>d+1){return e}else if(c<d-1){return -e}else{f=(!a.c&&(a.c=Sgb(a.f)),a.c);g=(!b.c&&(b.c=Sgb(b.f)),b.c);d<0?(f=zgb(f,Ghb(-d))):d>0&&(g=zgb(g,Ghb(d)));return ngb(f,g)}}else return e<h?-1:1}
function kU(a){var b,c,d,e,f,g,h,i;ah(a.fb);for(f=new Ykb(a.K);f.a<f.c.a.length;){d=Wkb(f);g=Jh((Fh(),d));!!g&&g.removeChild(d)}a.K.a=fq(GB,atb,1,0,5,1);for(e=new Ykb(a.ic);e.a<e.c.a.length;){d=Wkb(e);g=Jh((Fh(),d));!!g&&g.removeChild(d)}a.ic.a=fq(GB,atb,1,0,5,1);for(i=new Ykb(a.kc);i.a<i.c.a.length;){h=Wkb(i);for(c=new Ykb(h);c.a<c.c.a.length;){b=Wkb(c);ah(b.d)}h.a=fq(GB,atb,1,0,5,1)}a.kc.a=fq(GB,atb,1,0,5,1)}
function $T(a,b){var c,d,e,f,g;!a.Cc&&(a.Cc=new Vnb);d=b.b;g=b.k;e=Yvb+d+Zvb+g;if(d!=0&&g!=0){zib(a.Cc,e,b);if(d>=a.bb&&d<=a.xb&&g>=a.db&&g<=a.zb||d<=a.ob&&g<=a.Sc||d>a.ob&&d<=a.xb&&g<=a.Sc||g>a.Sc&&g<=a.zb&&d<=a.ob){c=JU(a,d,g);f=b.Wc;if(f){if(a==f){IM(c,(CF(),b.Xc))}else{Ne(b);IM(c,(CF(),b.Xc));Pe(b,a)}}else{IM(c,(CF(),b.Xc));Pe(b,a)}}}else{while(xib(a.Cc,e)){aR(b,--d);e=Yvb+d+Zvb+g}zib(a.Cc,e,b)}gR(b,a,a.zc)}
function lU(a,b){var c,d,e,f,g,h;a.Db=false;for(e=new Ykb(PU(a));e.a<e.c.a.length;){d=Wkb(e);eW(a,d)}a.S=null;for(h=(f=(new Sjb(a.Bc)).a.Zf().Ne(),new Xjb(f));h.a.Xe();){g=(c=h.a.Ye(),c.gg());eW(a,g)}Cib(a.Bc);if(a.T){Cib(a.T);a.T=null}kU(a);Cib(a.e);Cib(a.qc);kT(a.w);oU(a);sU(a);mU(a);rU(a);nU(a);if(b){kT(a.Ec);ah(a.w);ah(a.Dc);ah(a.Ec);ah(a.$);ah(a.Wb);ah(a.Fb);!!a.pb&&ah(a.pb);if(a.Nb){sM(a.Nb.a);a.Nb=null}}}
function qV(a,b,c,d,e){return (b<=a.ob||b>=TU(a)&&b<=YU(a))&&(d<=a.Sc||d<=fV(a)&&d>=IU(a))&&(b>=a.bb&&b<=a.xb&&e>=a.db&&e<=a.zb||b<=a.ob&&e<=a.Sc||b>a.ob&&b<=a.xb&&e<=a.Sc||e>a.Sc&&e<=a.zb&&b<=a.ob)&&(c>=a.bb&&c<=a.xb&&d>=a.db&&d<=a.zb||c<=a.ob&&d<=a.Sc||c>a.ob&&c<=a.xb&&d<=a.Sc||d>a.Sc&&d<=a.zb&&c<=a.ob)&&(c>=a.bb&&c<=a.xb&&e>=a.db&&e<=a.zb||c<=a.ob&&e<=a.Sc||c>a.ob&&c<=a.xb&&e<=a.Sc||e>a.Sc&&e<=a.zb&&c<=a.ob)}
function UO(a,b,c,d,e,f){var g,h,i,j,k,l,m,n,o,p;if(b==d&&c==e){g=l$(b,c)}else{if(b>d){o=b;b=d;d=o}if(c>e){o=c;c=e;e=o}g=l$(b,c)+':'+l$(d,e)}if(f&&a.s>=0){g=','+g;++a.q}k=$K(a.e);i=k>0;if(i){l=ZK(a.e);h=l+k;a.s=l;a.q=h}else if(f||a.s<0){l=a.q;h=a.q;a.s=a.q}else{l=a.s;h=a.q}p=(j=_K(a.e),j==null?'':j);m=p.substr(0,l);n=afb(p,h,p.length);p=m+g+n;a.q=(m+g).length;bL(a.e,p);a.e==a.w&&bL(a.j,p);Z1((ng(),mg),new vP(a))}
function lJ(a,b){var c,d,e;d=(CF(),cj($doc));a.d=_i($doc);Vg(d,MF(a.d));if(!b){e=bj($doc);Vg(a.d,MF(e))}a.i=b;c=(yI(),xI)._e();Vg(c,MF(d));oe(a,c);Pd();Cb(jd,a.Xc);a.Uc==-1?PF(a.Xc,2225|(a.Xc.__eventBits||0)):(a.Uc|=2225);a.Xc.className='gwt-MenuBar';b?re(a,xe(a.Xc)+'-'+'vertical',true):re(a,xe(a.Xc)+'-'+'horizontal',true);a.Xc.style['outline']='0px';a.Xc.setAttribute('hideFocus','true');He(a,new EJ(a),(cn(),cn(),bn))}
function GN(a){var b,c;if(a.c){b=hh(a.c);c=ih(a.c);if(b>=gh(a.o)&&b<hh(a.o)&&c>=ih(a.o)&&c<=fh(a.o)){CN(a);(CF(),a.Xc).style[Hub]=Tub;!!a.t&&(a.t.style[Hub]=Tub,undefined);a.i.style[Hub]=(vm(),Tub);a.M||hN(a)}else{(CF(),a.Xc).style[Hub]=Uub;!!a.t&&(a.t.style[Hub]=Uub,undefined);a.i.style[Hub]=(vm(),Uub)}}else{(CF(),a.Xc).style[Hub]=Uub;!!a.t&&(a.t.style[Hub]=Uub,undefined);a.i.style[Hub]=(vm(),Uub);$M(a,false);ah(a.i)}}
function MO(a,b){var c,d,e,f,g,h,i,j,k,l;CO(a);k=NO(a,b);Cib(a.G);e=0;d=0;for(j=new Ykb(k);j.a<j.c.a.length;){i=Wkb(j);h=OO(a,i);if(!h){continue}if(xib(a.G,i)){c=wib(a.G,i)}else{d=d%uO.a.length;c=ukb(uO,d);zib(a.G,i,c);++d}c=Xeb(c,'%s','0.25');LO(a,h,c);g=b.indexOf(i,e);f=(CF(),Zi($doc));l=b.substr(e,g-e);l=Yeb(l,' ','&nbsp;');f.innerHTML=l||'';Vg(a.r,f);e=g+i.length;f=Zi($doc);(Fh(),Eh).ee(f,i);f.style[nwb]=c;Vg(a.r,f)}}
function eW(b,c){var d,e,f,g,h;try{d=(CF(),c.Xc);g=Jh((Fh(),d));h=c.Wc;e=mf(b.zc,g)||mf(b.Nc,g)||mf(b.Pc,g)||mf(b.c,g);if(e||M(c,b.S)||!!g&&!!g.parentNode&&Zg(b.zc,g.parentNode)){Pe(c,null);f=Jh(d);!!f&&f.removeChild(d);return true}else if(M(b,h)){Pe(c,null);return true}else{return false}}catch(a){a=UD(a);if(Yq(a,21)){lrb(b.U,(nqb(),mqb),'Exception while removing child widget from SheetWidget')}else throw VD(a)}return false}
function hU(a,b){var c,d,e,f,g,h;for(e=new Ykb(b);e.a<e.c.a.length;){d=Wkb(e);h=Yvb+d.col+Zvb+d.row;d.value==null?Bib(a.e,h):zib(a.e,h,d);if(!TW(a,h,d.value,d.cellStyle,d.needsMeasure)){f=null;wV(a,d.col,d.row)?(f=ukb(ukb(a.kc,d.row-a.db),d.col-a.bb)):vV(a,d.col,d.row)&&(f=SU(a,d.col,d.row));if(f){FM(f,d.value,d.cellStyle,d.needsMeasure);f.g=true}g=a.Sc>0?0:a.bb;for(;g<d.col;g++){c=JU(a,g,d.row);!!c&&(c.g=true)}}}JX(a,false)}
function QV(b){var c,d,e,f,g;e=b.Lc+((b.zc.scrollTop||0)|0);d=ph(b.zc);g=e-b.Pb;c=d-b.Ob;if($wnd.Math.abs(g)<(b.a.L/2|0)&&$wnd.Math.abs(c)<(b.a.j/2|0)){return}try{if($wnd.Math.abs(c)>(b.a.j/2|0)){b.Ob=d;c>0?iV(b,d):c<0&&hV(b,d)}if($wnd.Math.abs(g)>(b.a.L/2|0)){b.Pb=e;g>0?mV(b,e):g<0&&nV(b,e)}N5(b.Rb)}catch(a){a=UD(a);if(Yq(a,20)){f=a;qrb(b.U,'SheetWidget:updateSheetDisplay: '+yf(f,f.Gd()))}else throw VD(a)}sW(b);wX(b,g,c);EU(b)}
function Pcb(){VQ.call(this);this.q=new Ycb;this.c=new Qcb;this.e=new Vnb;this.e.put('error',new Vcb('Error: ',' - close with ESC-key',(Ecb(),Ccb)));this.e.put('warning',new Vcb('Warning: ',null,Ccb));this.e.put('humanized',new Vcb('Info: ',null,Ccb));this.e.put('tray',new Vcb('Status: ',null,Ccb));this.e.put('assistive',new Vcb('Note: ',null,Ccb));this.g=new Hcb;this.d=new Scb;this.j=new Wcb;this.k=new Xcb;this.lb='v-ui';this.n=1}
function shb(a,b){var c,d,e,f,g,h,i,j,k,l;g=a.e;i=b.e;if(i==0){return a}if(g==0){return b.e==0?b:new Hgb(-b.e,b.d,b.a)}f=a.d;h=b.d;if(f+h==2){c=XD(a.a[0],Ozb);d=XD(b.a[0],Ozb);g<0&&(c=hE(c));i<0&&(d=hE(d));return Tgb(mE(c,d))}e=f!=h?f>h?1:-1:qhb(a.a,b.a,f);if(e==-1){l=-i;k=g==i?thb(b.a,h,a.a,f):ohb(b.a,h,a.a,f)}else{l=g;if(g==i){if(e==0){return mgb(),lgb}k=thb(a.a,f,b.a,h)}else{k=ohb(a.a,f,b.a,h)}}j=new Hgb(l,k.length,k);pgb(j);return j}
function HW(a,b){var c,d,e,f,g;if(!a.s){a.s=b}else{Cib(a.s);!!b&&_hb(a.s,b)}if(!!b&&b.a.c+b.b.c!=0){g=new qfb;for(e=(f=(new Hjb(b)).a.Zf().Ne(),new Njb(f));e.a.Xe();){c=Xeb(Xeb((d=e.a.Ye(),d.fg()),Yvb,Xwb),' r','.r');g.a+=''+c;e.a.Xe()&&(g.a+=',',g)}if(!a.pb){a.pb=$i($doc);a.pb.type=pxb;vh(a.pb,a.Ac+'-hyperlinkstyle');Vg(a.w.parentNode,a.pb);g.a+='{ cursor: pointer !important; }';nT(a.pb,g.a)}else{rT(a.pb,g.a,0)}}else{!!a.pb&&rT(a.pb,fxb,0)}}
function OG(b){var c,d,e,f,g,h,i,j,k,l,m,n,o;k=new Vnb;if(b!=null&&b.length>1){l=b.substr(1);for(h=$eb(l,'&',0),i=0,j=h.length;i<j;++i){g=h[i];f=$eb(g,'=',2);e=f[0];if(e.length==0){continue}m=f.length>1?f[1]:'';try{m=(Wp(m),o=/\+/g,decodeURIComponent(m.replace(o,'%20')))}catch(a){a=UD(a);if(!Yq(a,81))throw VD(a)}n=k.get(e);if(!n){n=new Akb;k.put(e,n)}n.add(m)}}for(d=k.Zf().Ne();d.Xe();){c=d.Ye();c.hg(xlb(c.gg()))}k=(ulb(),new Omb(k));return k}
function wX(a,b,c){var d,e,f,g,h,i,j;e=ukb(ukb(a.kc,0),0);j=ukb(a.kc,a.kc.a.length-1);h=ukb(j,j.a.length-1);f=e.k;i=h.k;d=e.c;g=h.c;fW(a);if(f>a.zb||i<a.db||d>a.xb||g<a.bb){wW(a,a.db,a.zb,a.bb,a.xb,a.kc,a.zc);b!=0&&a.ob>0&&wW(a,a.db,a.zb,1,a.ob,a.d,a.c);c!=0&&a.Sc>0&&wW(a,1,a.Sc,a.bb,a.xb,a.Qc,a.Pc)}else{xW(a,b,c,a.db,a.zb,a.bb,a.xb,a.kc,a.zc);b!=0&&a.ob>0&&xW(a,b,0,a.db,a.zb,1,a.ob,a.d,a.c);c!=0&&a.Sc>0&&xW(a,0,c,1,a.Sc,a.bb,a.xb,a.Qc,a.Pc)}}
function qgb(a,b){var c,d,e,f,g,h,i,j,k,l;if(b.e==0){throw VD(new gdb(Pzb))}e=b.e;if(b.d==1&&b.a[0]==1){return b.e>0?a:a.e==0?a:new Hgb(-a.e,a.d,a.a)}k=a.e;j=a.d;d=b.d;if(j+d==2){l=$D(XD(a.a[0],Ozb),XD(b.a[0],Ozb));k!=e&&(l=hE(l));return Tgb(l)}c=j!=d?j>d?1:-1:qhb(a.a,b.a,j);if(c==0){return k==e?hgb:ggb}if(c==-1){return lgb}g=j-d+1;f=fq(hr,ixb,17,g,15,1);h=k==e?1:-1;d==1?hhb(f,a.a,j,b.a[0]):fhb(f,g,a.a,j,b.a,d);i=new Hgb(h,g,f);pgb(i);return i}
function LX(a,b,c,d,e,f){var g,h;Bib(a.Cc,Yvb+d+Zvb+c);zib(a.Cc,Yvb+f+Zvb+e,b);h=b.Wc;if(f>=a.bb&&f<=a.xb&&e>=a.db&&e<=a.zb||f<=a.ob&&e<=a.Sc||f>a.ob&&f<=a.xb&&e<=a.Sc||e>a.Sc&&e<=a.zb&&f<=a.ob){g=JU(a,f,e);if(h){if(M(a,h)){(d>=a.bb&&d<=a.xb&&c>=a.db&&c<=a.zb||d<=a.ob&&c<=a.Sc||d>a.ob&&d<=a.xb&&c<=a.Sc||c>a.Sc&&c<=a.zb&&d<=a.ob)&&DM(JU(a,d,c));IM(g,(CF(),b.Xc))}else{Ne(b);IM(g,(CF(),b.Xc));Pe(b,a)}}else{IM(g,(CF(),b.Xc));Pe(b,a)}}else !!h&&Ne(b)}
function MR(a,b){var c,d;a.S=xV(a.Q,a.f,a.L);a.T=yV(a.Q,a.f,a.L);a.R=uV(a.Q,a.f,a.L);a.g=!a.S&&!a.T;a.i=!a.S&&!a.R;a.t=ph(a.Q.zc);a.u=(a.Q.zc.scrollTop||0)|0;a.c=(c=nj($doc),b2(),(Fh(),b).type.indexOf(Dwb)!=-1?Qm(b.changedTouches[0])+c:_h(b.clientX||0)+c);a.d=(d=oj($doc),b.type.indexOf(Dwb)!=-1?Rm(b.changedTouches[0])+d:_h(b.clientY||0)+d);a.U=a.f;a.V=a.L;a.C=true;a.j=false;a.s=false;hS(a);NF((CF(),a.Xc));Eh.Wd(b);dh(he(a.Q),'selecting');_R(a,true)}
function Ghb(a){yhb();var b,c,d,e;b=dr(a);if(a<whb.length){return whb[b]}else if(a<=50){return Agb((mgb(),jgb),b)}else if(a<=xub){return Cgb(Agb(vhb[1],b),b)}if(a>1000000){throw VD(new gdb('power of ten too big'))}if(a<=ftb){return Cgb(Agb(vhb[1],b),b)}d=Agb(vhb[1],ftb);e=d;c=aE(a-ftb);b=dr(a%ftb);while(YD(c,ftb)>0){e=zgb(e,d);c=mE(c,ftb)}e=zgb(e,Agb(vhb[1],b));e=Cgb(e,ftb);c=aE(a-ftb);while(YD(c,ftb)>0){e=Cgb(e,ftb);c=mE(c,ftb)}e=Cgb(e,b);return e}
function Ii(a){if(a.offsetTop==null){return 0}var b=0;var c=a.ownerDocument;var d=a.parentNode;if(d){while(d.offsetParent){b-=d.scrollTop;d=d.parentNode}}while(a){b+=a.offsetTop;if(c.defaultView.getComputedStyle(a,'')[zub]==Aub){b+=c.body.scrollTop;return b}var e=a.offsetParent;e&&$wnd.devicePixelRatio&&(b+=parseInt(c.defaultView.getComputedStyle(e,'').getPropertyValue('border-top-width')));if(e&&e.tagName=='BODY'&&a.style.position==Bub){break}a=e}return b}
function SX(a){var b,c,d;a.W=fq(hr,ixb,17,a.a.O,15,1);a.Lc=0;d=0;if(a.Sc>0){d=bU(a,1,a.Sc);a.Lc=dr(d+1)}b=bU(a,a.Sc+1,a.a.O);a.Bb=0;a.ob>0&&(a.Bb=eU(a,1,a.ob));c=eU(a,a.ob+1,a.a.i);RX(a);d>0&&a.Bb>0?sh(a.Nc,yxb):dh(a.Nc,yxb);d>0?sh(a.Pc,yxb):dh(a.Pc,yxb);a.Bb>0?sh(a.c,yxb):dh(a.c,yxb);a.Pc.style[bwb]=(hm(),Lvb);a.c.style[cwb]=Lvb;a.I.style[bwb]=Lvb;a.gc.style[bwb]=Lvb;KV(a);a.fb.style[gub]=b+Kvb;a.fb.style[hub]=c+Kvb;a.c.style[gub]=b+Kvb;a.Pc.style[hub]=c+Kvb}
function oW(a){var b,c;if(a.ib){if(a.ob>0){qW(a)}else{gW(a.ib);a.ib=null}}else if(a.ob>0){a.ib=new Akb;qW(a)}for(c=a.bb;c<=a.xb;c++){if(c>a.ob){if(c-a.bb<a.K.a.length){b=ukb(a.K,c-a.bb)}else{b=Qi($doc);Vg(a.Pc,b);qkb(a.K,c-a.bb,b)}b.className=qxb+c||'';wh(b,q$(c)+rxb);Ynb(a.tc,reb(c))&&dh(b,axb)}else{qrb(a.U,'Trying to add plain column header (index:'+c+') into frozen pane, horizontalSplitPosition: '+a.ob)}}while(a.K.a.length>a.xb-a.bb+1){ah(xkb(a.K,a.K.a.length-1))}}
function tW(a){var b,c;if(a.jb){if(a.Sc>0){rW(a)}else{gW(a.jb);a.jb=null}}else if(a.Sc>0){a.jb=new Akb;rW(a)}for(b=a.db;b<=a.zb;b++){if(a.Sc<b){if(b-a.db<a.ic.a.length){c=ukb(a.ic,b-a.db)}else{c=Qi($doc);Vg(a.c,c);qkb(a.ic,b-a.db,c)}c.className=sxb+b||'';c.innerHTML=''+b+rxb||'';Ynb(a.wc,reb(b))&&dh(c,_wb)}else{qrb(a.U,'Trying to add plain row header (index:'+b+') into frozen pane, verticalSplitPosition: '+a.Sc)}}while(a.ic.a.length>a.zb-a.db+1){ah(xkb(a.ic,a.ic.a.length-1))}}
function XU(a,b,c,d){var e,f,g,h,i;f=UU(a,Yvb+d.c+Zvb+d.k);if(!f){i=d.d;g=d.c;h=d.k;e=false;if(b<(Fh(),Eh).Xd(i)&&d.c>a.bb){--g;while(x$(a.a,g)&&g>a.bb){--g}e=true}else if(b>Eh.Xd(i)+((i.offsetWidth||0)|0)&&d.c<a.xb){++g;while(x$(a.a,g)&&g<a.xb){++g}e=true}if(c<Eh.Yd(i)&&d.k>a.db){--h;while(y$(a.a,h)&&h>a.db){--h}e=true}else if(c>Eh.Yd(i)+((i.offsetHeight||0)|0)&&d.k<a.zb){++h;while(y$(a.a,h)&&h<a.zb){++h}e=true}if(e){return XU(a,b,c,JU(a,g,h))}return d}else{return f}}
function ER(a,b){var c,d,e,f,g,h,i;e=a.c.yc.e;g=a.c.yc.f;i=a.c.yc.K;c=a.c.yc.L;d=a.c.rc;h=a.c.sc;f=t$(a.d,d,h);if(!!f&&a.a!=0){d=a.a;h=f.row1}--h;while(!!a.d.w&&vkb(a.d.w,reb(h),0)!=-1&&h>1){--h}if(!b&&(e!=g||i!=c)&&(!f||e!=f.col1||g!=f.col2||i!=f.row1||c!=f.row2)){if(h<i){h=c;while(!!a.d.w&&vkb(a.d.w,reb(h),0)!=-1&&h>i){--h}--d;while(!!a.d.v&&vkb(a.d.v,reb(d),0)!=-1&&d>=e){--d}d<e&&(d=g);while(!!a.d.v&&vkb(a.d.v,reb(d),0)!=-1&&d>=e){--d}}vR(a,d,h)}else{h>0&&wR(a,d,h)}}
function BR(a,b){var c,d,e,f,g,h,i;e=a.c.yc.e;g=a.c.yc.f;i=a.c.yc.K;c=a.c.yc.L;d=a.c.rc;h=a.c.sc;f=t$(a.d,d,h);if(!!f&&a.a!=0){d=a.a;h=f.row2}++h;while(!!a.d.w&&vkb(a.d.w,reb(h),0)!=-1&&h<a.d.O){++h}if(!b&&(e!=g||i!=c)&&(!f||e!=f.col1||g!=f.col2||i!=f.row1||c!=f.row2)){if(h>c){h=i;while(!!a.d.w&&vkb(a.d.w,reb(h),0)!=-1&&h<c){++h}++d;while(!!a.d.v&&vkb(a.d.v,reb(d),0)!=-1&&d<=g){++d}d>g&&(d=e);while(!!a.d.v&&vkb(a.d.v,reb(d),0)!=-1&&d<=g){++d}}vR(a,d,h)}else{h<=a.d.O&&wR(a,d,h)}}
function DR(a,b){var c,d,e,f,g,h,i;e=a.c.yc.e;g=a.c.yc.f;i=a.c.yc.K;c=a.c.yc.L;d=a.c.rc;h=a.c.sc;f=t$(a.d,d,h);if(!!f&&a.b!=0){d=f.col2;h=a.b}++d;while(!!a.d.v&&vkb(a.d.v,reb(d),0)!=-1&&d<a.d.i){++d}if(!b&&(e!=g||i!=c)&&(!f||e!=f.col1||g!=f.col2||i!=f.row1||c!=f.row2)){if(d>g){d=e;while(!!a.d.v&&vkb(a.d.v,new ieb(d),0)!=-1&&d<=g){++d}++h;while(!!a.d.w&&vkb(a.d.w,reb(h),0)!=-1&&h<=c){++h}h>c&&(h=i);while(!!a.d.w&&vkb(a.d.w,reb(h),0)!=-1&&h<=c){++h}}vR(a,d,h)}else{d<=a.d.i&&wR(a,d,h)}}
function CR(a,b){var c,d,e,f,g,h,i;e=a.c.yc.e;g=a.c.yc.f;i=a.c.yc.K;c=a.c.yc.L;d=a.c.rc;h=a.c.sc;f=t$(a.d,d,h);if(!!f&&a.b!=0){d=f.col1;h=a.b}--d;while(!!a.d.v&&vkb(a.d.v,reb(d),0)!=-1&&d>0){--d}if(!b&&(e!=g||i!=c)&&(!f||e!=f.col1||g!=f.col2||i!=f.row1||c!=f.row2)){if(d<e){d=g;while(!!a.d.v&&vkb(a.d.v,reb(d),0)!=-1&&d>=e){--d}--h;while(!!a.d.w&&vkb(a.d.w,reb(h),0)!=-1&&h>=i){--h}h<i&&(h=c);while(!!a.d.w&&vkb(a.d.w,reb(h),0)!=-1&&h>=i){--h}}vR(a,d,h)}else{d>0&&wR(a,d,h)}}
function khb(a,b){var c,d,e,f,g,h;c=wgb(a);d=wgb(b);e=$wnd.Math.min(c,d);Vgb(a,c);Vgb(b,d);if(ngb(a,b)==1){f=a;a=b;b=f}do{if(b.d==1||b.d==2&&b.a[1]>0){b=Tgb(jhb((h=a.d>1?iE(jE(a.a[1],32),XD(a.a[0],Ozb)):XD(a.a[0],Ozb),gE(a.e,h)),(g=b.d>1?iE(jE(b.a[1],32),XD(b.a[0],Ozb)):XD(b.a[0],Ozb),gE(b.e,g))));break}if(b.d>a.d*1.2){b=Bgb(b,a);b.e!=0&&Vgb(b,wgb(b))}else{do{uhb(b.a,b.a,b.d,a.a,a.d);pgb(b);b.b=-2;Vgb(b,wgb(b))}while(ngb(b,a)>=0)}f=b;b=a;a=f}while(a.e!=0);return Cgb(b,e)}
function YV(b,c){var d,e,f,g,h,i;try{g=aV(b);if(!g){qrb(b.U,'Selected cell is null');return}EM(g,c);h=JV(b,g.b,c);d=g.c;if(b.ab){f=u$(b.a,b.rc,b.sc);d=f.col2;i=QR(b.a.g,f.col1,f.col2+1)}else{i=s$(b.a,d)}while(i<h&&d<b.a.i){i+=s$(b.a,++d)}ue(b.sb,i+1+Kvb)}catch(a){a=UD(a);if(Yq(a,21)){e=a;qrb(b.U,'SheetWidget:recalculateInputElementWidth: '+yf(e,e.Gd())+' while calculating input element width');rV(b,b.rc,b.sc)||BW(b,b.rc,b.sc);Z1((ng(),mg),new hY(b,false))}else throw VD(a)}}
function bhb(){bhb=AE;_gb=iq(dq(hr,1),ixb,17,15,[ptb,1162261467,Rzb,Mzb,362797056,1977326743,Rzb,387420489,hvb,214358881,429981696,815730721,1475789056,170859375,268435456,410338673,612220032,893871739,1280000000,1801088541,113379904,148035889,191102976,Lzb,308915776,387420489,481890304,594823321,729000000,887503681,Rzb,1291467969,1544804416,1838265625,60466176]);ahb=iq(dq(hr,1),ixb,17,15,[-1,-1,31,19,15,13,11,11,10,9,9,8,8,8,8,7,7,7,7,7,7,7,6,6,6,6,6,6,6,6,6,6,6,6,6,6,5])}
function yO(a){var b,c,d,e,f,g,h,i;i=(f=_K(a.e),f==null?'':f);c=ZK(a.e);e=0;while(--c>0){Osb(c,i.length);i.charCodeAt(c)==34&&(c==0||(Osb(c-1,i.length),i.charCodeAt(c-1)!=92))&&++e}if(e%2==1){return}g=-1;d=-1;c=ZK(a.e);while(c>0){b=(Osb(c-1,i.length),i.charCodeAt(c-1));if(Web(String.fromCharCode(b))){g=c;break}--c}c=ZK(a.e);while(c<i.length){b=(Osb(c,i.length),i.charCodeAt(c));if(Web(String.fromCharCode(b))){d=c;break}++c}h=i.substr(g,d-g);EO(a);if(IO(a,h)){a.s=g;a.q=d;cP(a,h)}}
function nW(a){var b,c,d,e,f,g,h;qU(a.Mc);for(g=new Ykb(a.Qc);g.a<g.c.a.length;){e=Wkb(g);qU(e)}a.Qc.a=fq(GB,atb,1,0,5,1);for(h=new Ykb(a.d);h.a<h.c.a.length;){e=Wkb(h);qU(e)}a.d.a=fq(GB,atb,1,0,5,1);for(f=new Ykb(a.kc);f.a<f.c.a.length;){e=Wkb(f);qU(e)}a.kc.a=fq(GB,atb,1,0,5,1);Vg(a.zc,a.fb);if(a.Sc>0&&a.ob>0){AU(a);BU(a);vU(a)}else a.Sc>0?BU(a):a.ob>0&&vU(a);for(c=a.db;c<=a.zb;c++){e=new Bkb(a.xb);for(d=a.bb;d<=a.xb;d++){b=new NM(a,d,c);Vg(a.zc,b.d);e.a[e.a.length]=b}rkb(a.kc,e)}}
function wU(a){var b,c,d,e,f;f=Qi($doc);dh(f,'cell-range-bg-color');f.style[hub]=(hm(),Lvb);f.style[gub]=Lvb;Vg(a.zc,f);e=new y1(f);b=x1(e,nwb);b=Xeb(b,'!important','');_g(a.zc,f);if(b!=null&&dfb(b).length!=0){d=kf();(CF(),d.Xc).height=1;d.Xc.width=1;nf(d.Xc.getContext('2d'),b);d.Xc.getContext('2d').fillRect(0,0,1,1);c='url("'+d.Xc.toDataURL()+'")';nT(a.Dc,'.'+a.Ac+bxb+'background-image: '+c+' !important;'+'}')}else{nT(a.Dc,'.'+a.Ac+bxb+'background-color: rgba(232, 242, 252, 0.8) !important;'+'}')}}
function wW(a,b,c,d,e,f,g){var h,i,j,k,l;for(k=b;k<=c;k++){if(f.a.length>k-b){l=(Hsb(k-b,f.a.length),f.a[k-b])}else{l=new Akb;Ksb(k-b,f.a.length);Asb(f.a,k-b,l)}for(h=d;h<=e;h++){if(l.a.length>h-d){i=(Hsb(h-d,l.a.length),l.a[h-d]);JM(i,h,k,wib(a.e,Yvb+h+Zvb+k))}else{i=new OM(a,h,k,wib(a.e,Yvb+h+Zvb+k));Vg(g,i.d);Ksb(h-d,l.a.length);Asb(l.a,h-d,i)}}while(l.a.length>e-d+1){ah(xkb(l,l.a.length-1).d)}}while(f.a.length>c-b+1){for(j=new Ykb(xkb(f,f.a.length-1));j.a<j.c.a.length;){i=Wkb(j);ah(i.d)}}JX(a,false)}
function cP(a,b){var c,d,e,f,g,h,i,j,k,l;if(xib(a.G,b)){j=OO(a,b);if(!j){return}f=$wnd.Math.min(j.col1,j.col2);e=$wnd.Math.max(j.col1,j.col2);l=$wnd.Math.min(j.row1,j.row2);k=$wnd.Math.max(j.row1,j.row2);if(e>20000){hrb(trb((vdb(Vw),Vw.i)));return}for(c=f;c<=e;c++){for(i=l;i<=k;i++){d=JU(a.I,c,i);if(d){h=d.d;g=Xeb(wib(a.G,b),'%s','0.75');c==f&&(h.style['borderLeft']=pwb+g,undefined);c==e&&(h.style[qwb]=pwb+g,undefined);i==l&&(h.style['borderTop']=pwb+g,undefined);i==k&&(h.style[rwb]=pwb+g,undefined)}}}a.A=b}}
function nhb(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o;g=a.e;i=b.e;if(g==0){return b}if(i==0){return a}f=a.d;h=b.d;if(f+h==2){c=XD(a.a[0],Ozb);d=XD(b.a[0],Ozb);if(g==i){k=WD(c,d);o=pE(k);n=pE(lE(k,32));return n==0?new Ggb(g,o):new Hgb(g,2,iq(dq(hr,1),ixb,17,15,[o,n]))}return Tgb(g<0?mE(d,c):mE(c,d))}else if(g==i){m=g;l=f>=h?ohb(a.a,f,b.a,h):ohb(b.a,h,a.a,f)}else{e=f!=h?f>h?1:-1:qhb(a.a,b.a,f);if(e==0){return mgb(),lgb}if(e==1){m=g;l=thb(a.a,f,b.a,h)}else{m=i;l=thb(b.a,h,a.a,f)}}j=new Hgb(m,l.length,l);pgb(j);return j}
function cZ(a,b){var c,d,e,f,g;f=(!a.C&&(a.C=new x0),a.C);e=(!a.K&&(a.K=new T0),a.K);if(b.Gf('componentIDtoCellKeysMap')){c=e.o;d=new Vnb;!!c&&c.a.c+c.b.c!=0&&mpb(c,new PZ(a,d));aX(f.V,d)}b.Gf('cellKeysToEditorIdMap')&&hZ(a);(b.Gf('cellComments')||b.Gf('cellCommentAuthors'))&&r_(f,e.b,e.a);b.Gf('visibleCellComments')&&iZ(a);b.Gf('invalidFormulaCells')&&Q_(f,e.F);b.Gf('overlays')&&(g=!(!a.K&&(a.K=new T0),a.K).N?(ulb(),ulb(),slb):(!a.K&&(a.K=new T0),a.K).N,fZ(a,g.keySet()),$Y(a,g),a.c=g.keySet(),undefined);RX(f.V)}
function N$(a,b,c,d){var e,f,g,h,i;n$(a);g=a.V.Sc>0?1:fV(a.V);c||t0(a,b,g,null);if(c){i=a.V.rc;e=i>b?b:i;f=i>b?i:b;h=a.O;if(TR(a.V.yc)){QX(a.V,e,f,1,h);OX(a.V,e,f,1,h,true)}else{OX(a.V,e,f,1,h,false)}TR(a.V.yc)?$9(a.W,1,e,h,f):bab(a.W,1,e,h,f)}else if(d){a.V.C&&(a.V.C=false,undefined);TR(a.V.yc)&&ZW(a.V,false);mX(a.V,b,g);FR(a.Q);OX(a.V,b,b,1,a.O,false);cab(a.W,g,b)}else{a.V.C||(a.V.C=true,undefined);if(!TR(a.V.yc)){ZW(a.V,true);sU(a.V)}YW(a.V,b,g);QX(a.V,b,b,1,a.O);OX(a.V,b,b,1,a.O,true);FR(a.Q);fab(a.W,b,g)}pb(a.s,200)}
function $$(a,b,c,d){var e,f,g,h,i;f=a.V.ob>0?1:TU(a.V);n$(a);c||t0(a,f,b,null);if(c){e=a.i;i=a.V.sc;g=i>b?b:i;h=i>b?i:b;if(TR(a.V.yc)){QX(a.V,1,e,g,h);OX(a.V,1,e,g,h,true)}else{OX(a.V,1,e,g,h,false)}TR(a.V.yc)?$9(a.W,g,1,h,e):bab(a.W,g,1,h,e)}else if(d){a.V.C&&(a.V.C=false,undefined);TR(a.V.yc)&&ZW(a.V,false);mX(a.V,f,b);FR(a.Q);OX(a.V,1,a.i,b,b,false);pab(a.W,b,f)}else{a.V.C||(a.V.C=true,undefined);if(!TR(a.V.yc)){ZW(a.V,true);sU(a.V)}YW(a.V,f,b);QX(a.V,1,a.i,b,b);OX(a.V,1,a.i,b,b,true);FR(a.Q);rab(a.W,b,f)}pb(a.s,200)}
function vX(b){var c,d,e,f,g,h,i,j,k,l;h=(b1(),false&&QG('debug')!=null);l=b.a.f;k=0;h&&(k=(vfb(),aE(Date.now())));i=b.a.N;c=b.a.k;if(l){try{j=new sfb(_U(b.Dc));for(g=new Yib((new Qib(l)).a);g.b;){f=Xib(g);f.fg().a==0?ofb(j,Ywb+b.Ac+' .sheet .cell {'+f.gg()+'}'):ofb(j,dV(b,f.fg(),i,c)+' {'+f.gg()+'}')}$g(b.Dc);Vg(b.Dc,fj($doc,j.a))}catch(a){a=UD(a);if(Yq(a,21)){d=a;qrb(b.U,'SheetWidget:updateStyles: '+yf(d,d.Gd())+vxb)}else throw VD(a)}}if(h){e=(vfb(),aE(Date.now()));krb(b.U,'Style update took:'+qE(mE(e,k))+'ms')}XV(b);wU(b)}
function jS(a,b,c){var d,e,f,g,h,i,j;if(b>=a.e&&b<=a.f&&c>=a.K&&c<=a.L){j=$wnd.Math.abs(a.L-c);h=$wnd.Math.abs(a.f-b);if(a._||j==0&&h==0){YR(a,0,0,0,0);ZR(a,false);return}ZR(a,true);a.j=true;if(j>h){i=$wnd.Math.max(a.K+1,a.L-j+1);YR(a,a.e,a.f,i,a.L)}else{i=$wnd.Math.max(a.e+1,a.f-h+1);YR(a,i,a.f,a.K,a.L)}}else if(c<a.K||c>a.L||b<a.e||b>a.f){ZR(a,true);a.s=true;d=c-a.L;g=a.K-c;e=a.e-b;f=b-a.f;$wnd.Math.max(d,g)>$wnd.Math.max(e,f)?d>g?YR(a,a.e,a.f,a.L+1,c):YR(a,a.e,a.f,c+1,a.K-1):f>e?YR(a,a.f+1,b,a.K,a.L):YR(a,b+1,a.e-1,a.K,a.L)}}
function WS(a,b){var c;if(!a.c._){if(!a.b){return}c=(Fh(),b).keyCode|0;switch(c){case 8:case 113:case 38:case 40:case 37:case 39:case 9:case 46:case 32:if(Eh.Sd(b)==0){g_(a.c.a,b,'');Eh.Wd(b);b.stopPropagation()}break;case 89:if(!a.a&&!!b.ctrlKey||!!b.metaKey){X9(a.c.a.W.C,iq(dq(GB,1),atb,1,5,[]));Eh.Wd(b);b.stopPropagation()}break;case 90:if(!a.a&&!!b.ctrlKey||!!b.metaKey){X9(a.c.a.W.G,iq(dq(GB,1),atb,1,5,[]));Eh.Wd(b);b.stopPropagation()}break;case 65:if(!a.a&&!!b.ctrlKey||!!b.metaKey){o_(a.c.a);Eh.Wd(b);b.stopPropagation()}}}}
function mX(a,b,c){var d,e,f,g,h,i;h=JU(a,a.rc,a.sc);g=UU(a,Yvb+a.rc+Zvb+a.sc);if(a.v){Xnb(a.u,new MY(a.rc,a.sc));if(h){Xnb(a.t,h);dh(h.d,Zwb)}if(g){Xnb(a.t,g);dh(g.d,Zwb)}a.v=false}else{Xnb(a.u,new MY(a.rc,a.sc));if(h){Xnb(a.t,h);dh(h.d,Zwb)}if(g){Xnb(a.t,g);dh(g.d,Zwb)}i=u$(a.a,b,c);EW(a,c);if(i){for(d=i.row1+1;d<=i.row2;d++){EW(a,d)}}DW(a,b);if(i){for(d=i.col1+1;d<=i.col2;d++){DW(a,d)}}}if(h){a.nb=null;sh(h.d,$wb)}!!g&&sh(g.d,$wb);f=JU(a,b,c);if(f){a.nb=new MY(f.c,f.k);dh(f.d,$wb)}e=UU(a,Yvb+b+Zvb+c);!!e&&dh(e.d,$wb);a.sc=c;a.rc=b}
function ES(a){a.B.className=Jwb;a.F._&&dh(a.B,Dwb);a.G.className='s-top';a.k.className=Kwb;a.u.className=Lwb;a.a.className=Mwb;a.g.className='s-corner';a.i.className='s-corner-touch';a.I.className=Nwb;a.o.className=Nwb;a.w.className=Nwb;a.c.className=Nwb;a.J.className=Owb;a.p.className=Owb;a.A.className=Owb;a.d.className=Owb;if(a.F._){Vg(a.u,a.i);Vg(a.i,a.g)}else{Vg(a.u,a.g)}Vg(a.G,a.k);Vg(a.G,a.u);Vg(a.k,a.a);Vg(a.B,a.G);if(a.F._){Vg(a.G,a.J);Vg(a.k,a.p);Vg(a.u,a.A);Vg(a.a,a.d);Vg(a.J,a.I);Vg(a.p,a.o);Vg(a.A,a.w);Vg(a.d,a.c)}ne(a,a.B)}
function zU(a,b,c,d,e){var f,g,h,i,j,k,l,m;l=e;m=new Vnb;for(h=c;h<=d;h++){k=new qfb;j=a.W[h-1];ofb(lfb(ofb(lfb(ofb(ofb(ofb(lfb(ofb(ofb(ofb(lfb(ofb(ofb((k.a+='.',k),a.Ac),exb),h),', .'),a.Ac),'>.resize-line.row'),h),' { '),y$(a.a,h)?dxb:'display: flex;'),'height: '),j),'px; top:'),l),'px; }\n');l+=j;yib(m,reb(h),reb(l));rkb(b,k.a)}for(g=new Yib((new Qib(a.Eb)).a);g.b;){f=Xib(g);i=f.gg().k-1;!(i==d&&d==a.Sc)&&tib(m,reb(i))?(f.gg().d.style[Dvb]=vib(m,reb(i)).a+(hm(),Kvb),undefined):i<c&&d!=a.Sc&&(f.gg().d.style[Dvb]=(hm(),Lvb),undefined)}}
function xU(a,b,c,d,e){var f,g,h,i,j,k,l,m,n;l=e;m=new Vnb;for(k=c;k<=d;k++){n=new qfb;h=r$(a.a,k);ofb(lfb(ofb(lfb(ofb(ofb(ofb(lfb(ofb(ofb(ofb(lfb(ofb(ofb((n.a+='.',n),a.Ac),cxb),k),', .'),a.Ac),'>.resize-line.col'),k),' { '),x$(a.a,k)?dxb:''),'width: '),h),'px; left:'),l),'px; }\n');l+=h;yib(m,reb(k),reb(l));rkb(b,n.a)}f=hh((CF(),a.Xc));for(j=new Yib((new Qib(a.Eb)).a);j.b;){i=Xib(j);g=i.gg().c-1;!(g==d&&d==a.ob)&&tib(m,reb(g))?(i.gg().d.style[Cvb]=vib(m,reb(g)).a+(hm(),Kvb),undefined):g>d&&d!=a.ob&&(i.gg().d.style[Cvb]=f+(hm(),Kvb),undefined)}}
function MS(a,b,c,d,e){var f;sh(a.B,Yvb+a.e+Zvb+a.C);if(a.s>0&&b<a.s){b=a.s;KS(a,true)}else{KS(a,false)}if(a.t>0&&d<a.t){d=a.t;QS(a,true)}else{QS(a,false)}if(a.r>0&&e>a.r){e=a.r;HS(a,true);a.i.style[Gub]=(zk(),fub);a.g.style[Gub]=fub}else{HS(a,false);a.i.style[Gub]=(zk(),Mub);a.g.style[Gub]=Mub}if(a.q>0&&a.q<c){c=a.q;NS(a,true)}else{NS(a,false)}a.e=b;a.C=d;a.f=c;a.D=e;a.K=c-b;a.j=e-d;if(b<=c&&d<=e){dh(a.B,Yvb+a.e+Zvb+a.C);De((CF(),a.Xc),true);SS(a);f=a.F.q.V.W;f!=null&&f.length!=0&&JS(a,QR(a.F.q.V.W,a.C,a.D+1))}else{De((CF(),a.Xc),false)}}
function Tfb(a){var b,c,d,e,f;if(a.g!=null){return a.g}if(a.a<32){a.g=dhb(aE(a.f),dr(a.e));return a.g}e=ehb((!a.c&&(a.c=Sgb(a.f)),a.c),0);if(a.e==0){return e}b=(!a.c&&(a.c=Sgb(a.f)),a.c).e<0?2:1;c=e.length;d=-a.e+c-b;f=new qfb;f.a+=''+e;if(a.e>0&&d>=-6){if(d>=0){pfb(f,c-dr(a.e),String.fromCharCode(46))}else{f.a=afb(f.a,0,b-1)+'0.'+_eb(f.a,b-1);pfb(f,b+1,hfb(Dfb,0,-dr(d)-1))}}else{if(c-b>=1){pfb(f,b,String.fromCharCode(46));++c}pfb(f,c,String.fromCharCode(69));d>0&&pfb(f,++c,String.fromCharCode(43));pfb(f,++c,''+qE(aE(d)))}a.g=f.a;return a.g}
function TJ(a,b){var c,d,e,f;if(b.a||!a.K&&b.b){a.I&&(b.a=true);return}b.c&&false&&(b.a=true);if(b.a){return}d=b.d;c=NJ(a,d);c&&(b.b=true);a.I&&(b.a=true);f=(CF(),TG((Fh(),d).type));switch(f){case 512:case 256:case 128:{(d.keyCode|0)&utb;(d.shiftKey?1:0)|(d.metaKey?8:0)|(d.ctrlKey?2:0)|(d.altKey?4:0);return}case 4:case svb:{if(BF){b.b=true;return}}if(!c&&a.u){a.Ue(true);return}break;case 8:case 64:case 1:case 2:case itb:{if(BF){b.b=true;return}break}case 2048:{e=Eh.Vd(d);if(a.I&&!c&&!!e){e.blur&&e!=$doc.body&&e.blur();b.a=true;return}break}}}
function vO(){vO=AE;uO=new Akb;rkb(uO,'rgba(48, 144, 240, %s)');rkb(uO,'rgba(236, 100, 100, %s)');rkb(uO,'rgba(152, 223, 88, %s)');rkb(uO,'rgba(249, 221, 81, %s)');rkb(uO,'rgba(36, 220, 212, %s)');rkb(uO,'rgba(236, 100, 165, %s)');rkb(uO,'rgba(104, 92, 176, %s)');rkb(uO,'rgba(255, 125, 66, %s)');rkb(uO,'rgba(51, 97, 144, %s)');rkb(uO,'rgba(170, 81, 77, %s)');rkb(uO,'rgba(127, 176, 83, %s)');rkb(uO,'rgba(187, 168, 91, %s)');rkb(uO,'rgba(36, 121, 129, %s)');rkb(uO,'rgba(150, 57, 112, %s)');rkb(uO,'rgba(75, 86, 168, %s)');rkb(uO,'rgba(154, 89, 61, %s)')}
function zW(a,b,c,d){var e,f,g,h,i,j;j=false;b<=a.ob&&(b=a.ob+1);f=TU(a);h=YU(a);if(d){if(b<f){i=0;for(e=f-1;e>=b-1&&e>0;e--){i+=s$(a.a,e)}yh(a.zc,ph(a.zc)-i);(b<=a.bb||i>(a.a.j/2|0))&&(j=true)}else if(b>h){i=0;g=a.a.i;for(e=h+1;e<=b+1&&e<=g;e++){i+=s$(a.a,e)}yh(a.zc,ph(a.zc)+i);(b>=a.xb||i>(a.a.j/2|0))&&(j=true)}}else{if(c>h){i=0;g=a.a.i;for(e=h+1;e<=c+1&&e<=g;e++){i+=s$(a.a,e)}yh(a.zc,ph(a.zc)+i);(c>=a.xb||i>(a.a.j/2|0))&&(j=true)}else if(c<f){i=0;for(e=f-1;e>=c-1&&e>0;e--){i+=s$(a.a,e)}yh(a.zc,ph(a.zc)-i);(c<=a.bb||i>(a.a.j/2|0))&&(j=true)}}return j}
function tX(a,b,c,d,e,f,g){var h,i,j,k,l;if(f.a.length==0){return}i=new Ykb(g);k=null;l=-1;while(i.a<i.c.a.length){h=Wkb(i);if(h.row>=b&&h.row<=c&&h.col>=d&&h.col<=e){if(l!=h.row){(Hsb(0,f.a.length),f.a[0]).a.length>0&&ukb((Hsb(0,f.a.length),f.a[0]),0).k!=b&&(b=ukb((Hsb(0,f.a.length),f.a[0]),0).k);k=ukb(f,h.row-b);l=h.row;(Hsb(0,k.a.length),k.a[0]).c!=d&&(d=(Hsb(0,k.a.length),k.a[0]).c)}FM(ukb(k,h.col-d),h.value,h.cellStyle,h.needsMeasure)}j=Yvb+h.col+Zvb+h.row;TW(a,j,h.value,h.cellStyle,h.needsMeasure);h.value==null?Bib(a.e,j):zib(a.e,j,h)}JX(a,false)}
function Cq(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,A,B,C,D,F,G;c=a.l&8191;d=a.l>>13|(a.m&15)<<9;e=a.m>>4&8191;f=a.m>>17|(a.h&255)<<5;g=(a.h&1048320)>>8;h=b.l&8191;i=b.l>>13|(b.m&15)<<9;j=b.m>>4&8191;k=b.m>>17|(b.h&255)<<5;l=(b.h&1048320)>>8;B=c*h;C=d*h;D=e*h;F=f*h;G=g*h;if(i!=0){C+=c*i;D+=d*i;F+=e*i;G+=f*i}if(j!=0){D+=c*j;F+=d*j;G+=e*j}if(k!=0){F+=c*k;G+=d*k}l!=0&&(G+=c*l);n=B&fvb;o=(C&511)<<13;m=n+o;q=B>>22;r=C>>9;s=(D&262143)<<4;t=(F&31)<<17;p=q+r+s+t;v=D>>18;w=F>>5;A=(G&4095)<<8;u=v+w+A;p+=m>>22;m&=fvb;u+=p>>22;p&=fvb;u&=jtb;return nq(m,p,u)}
function jU(a,b,c){var d,e,f,g,h,i,j;i=ih(a.zc);g=gh(a.zc);f=fh(a.zc);h=hh(a.zc);a.A=c;a.B=b;b<i?(a.O||!a.Ic&&!a.Hc)&&(a.Y=b-i):b>f?(a.Y=b-f):(a.Y=0);c<g?(a.P||!a.Gc&&!a.Hc)&&(a.X=c-g):c>h?(a.X=c-h):(a.X=0);j=false;if(((a.zc.scrollTop||0)|0)!=0){e=b<i;if(!a.O&&(a.Hc||a.Ic)&&vV(a,a.Jc,a.Kc)&&!e){a.zc.scrollTop=0;RV(a);a.O=true;j=true}}if(ph(a.zc)!=0){d=c<g;if(!a.P&&(a.Hc||a.Gc)&&vV(a,a.Jc,a.Kc)&&!d){yh(a.zc,0);RV(a);a.P=true;j=true}}if(a.Y<0&&((a.zc.scrollTop||0)|0)!=0||a.Y>0||a.X<0&&ph(a.zc)!=0||a.X>0){gX(a);j=true}if(j){return true}else{kX(a);return false}}
function OR(a,b,c){var d,e,f,g,h,i,j;i=ih(a.Q.zc);g=gh(a.Q.zc);f=fh(a.Q.zc);h=hh(a.Q.zc);a.c=c;a.d=b;b<i?(a.g||!a.T&&!a.S)&&(a.n=b-i):b>f?(a.n=b-f):(a.n=0);c<g?(a.i||!a.R&&!a.S)&&(a.k=c-g):c>h?(a.k=c-h):(a.k=0);j=false;if(((a.Q.zc.scrollTop||0)|0)!=0){e=b<i;if(!a.g&&(a.S||a.T)&&vV(a.Q,a.U,a.V)&&!e){a.Q.zc.scrollTop=0;RV(a.Q);a.u=0;a.g=true;j=true}}if(ph(a.Q.zc)!=0){d=c<g;if(!a.i&&(a.S||a.R)&&vV(a.Q,a.U,a.V)&&!d){yh(a.Q.zc,0);RV(a.Q);a.t=0;a.i=true;j=true}}if(a.n<0&&((a.Q.zc.scrollTop||0)|0)!=0||a.n>0||a.k<0&&ph(a.Q.zc)!=0||a.k>0){dS(a);j=true}if(j){return true}else{fS(a);return false}}
function AX(a,b){var c,d,e,f;c=0;if(a.H>0){d=a.Z?a.H+1:a.H;c=3+d*18}f=0;if(a.fc>0){e=a.Z?a.fc+1:a.fc;f=1+e*15}if(f==0){a.gc.style[Gub]=(zk(),fub);a.hc.style[Gub]=fub}else{a.gc.style[Gub]=(zk(),Mub);a.hc.style[Gub]=Mub}a.Z||(a.hc.style[Gub]=(zk(),fub),undefined);!!a.jb&&a.fc>0?(a.dc.style[Gub]=(zk(),Mub),undefined):(a.dc.style[Gub]=(zk(),fub),undefined);a.gc.style[hub]=f+(hm(),Kvb);a.gc.style[Dvb]=b+Kvb;a.dc.style[hub]=f+Kvb;a.dc.style[Dvb]=b+Kvb;a.hc.style[Dvb]=b+c+Kvb;if(a.Db){a.hc.style[gub]=NU(a)+Kvb;a.hc.style[xxb]=NU(a)+Kvb}a.hc.style[hub]=f+Kvb;return f}
function m1(a){var b,c,d,e,f;if(i1==null){c='';d='';e='';b='';if(a.a.g){c='ff';d=c+a.a.b;e=d+a.a.c;b='gecko'}else if(a.a.e){c='sa';d='ch';b=Wxb}else if(a.a.q){c='sa';d=c+a.a.b;e=d+a.a.c;b=Wxb}else if(a.a.p){c='sa';d=c+a.a.b;e=d+a.a.c;b=Wxb}else if(a.a.j){c='ie';d=c+a.a.b;e=d+a.a.c;b='trident'}else if(a.a.f){c='edge';d=c+a.a.b;e=d+a.a.c;b=''}else if(a.a.o){c='op';d=c+a.a.b;e=d+a.a.c;b='presto'}i1='v-'+c;d.length==0||(i1=i1+' '+'v-'+d);e.length==0||(i1=i1+' '+'v-'+e);b.length==0||(i1=i1+' '+'v-'+b);f=o1(a);f!=null&&(i1=i1+' '+f);a.b&&(i1=i1+' '+'v-'+Dwb)}return i1}
function Gi(a){if(a.offsetLeft==null){return 0}var b=0;var c=a.ownerDocument;var d=a.parentNode;if(d){while(d.offsetParent){b-=d.scrollLeft;c.defaultView.getComputedStyle(d,'').getPropertyValue('direction')=='rtl'&&(b+=d.scrollWidth-d.clientWidth);d=d.parentNode}}while(a){b+=a.offsetLeft;if(c.defaultView.getComputedStyle(a,'')[zub]==Aub){b+=c.body.scrollLeft;return b}var e=a.offsetParent;e&&$wnd.devicePixelRatio&&(b+=parseInt(c.defaultView.getComputedStyle(e,'').getPropertyValue('border-left-width')));if(e&&e.tagName=='BODY'&&a.style.position==Bub){break}a=e}return b}
function ZT(a,b){var c,d,e,f,g,h,i,j,k,l;l=new qfb;for(k=b.row1;k<=b.row2;k++){for(c=b.col1;c<=b.col2;c++){l.a+=Xwb+c+'.row'+k;(k!=b.row2||c!=b.col2)&&(l.a+=',',l)}}if(l.a.length!=0){l.a+='{ display: none; }';nT(a.Fb,l.a)}i=Yvb+b.col1+Zvb+b.row1;j=new FP(a,b.col1,b.row1);f='cs0';d=JU(a,b.col1,b.row1);!!d&&(f=d.b);FM(j,MU(a,b.col1,b.row1),f,false);h=j.d;dh(h,uwb);GX(a,b,j);Vg(WU(a,b.col1,b.row1),h);yib(a.Eb,reb(b.id),j);!!a.r&&xib(a.r,i)&&GM(j);!!a.tb&&a.tb.contains(i)&&HM(j);if(xib(a.b,i)){e=wib(a.b,i);NN(e,h,b.row1,b.col1)}if(!!a.T&&xib(a.T,i)){g=wib(a.T,i);YT(a,j,g)}}
function UV(a,b){a.Ac='spreadsheet-'+b;dh(a.Fc,a.Ac);a.w.type=pxb;vh(a.w,a.Ac+'-dynamicStyle');Vg(a.Qb,a.w);a.Dc.type=pxb;vh(a.Dc,a.Ac+'-sheetStyle');Vg(a.Qb,a.Dc);a.Ec.type=pxb;vh(a.Ec,a.Ac+'-customCellSizeStyle');Vg(a.Qb,a.Ec);a.$.type=pxb;vh(a.$,a.Ac+'-editedCellStyle');Vg(a.Qb,a.$);nT(a.$,'.notusedselector{ display: inline !important; outline: none !important; width: auto !important; z-index: -10; }');nT(a.$,'.notusedselector{ overflow: hidden; }');a.Fb.type=pxb;vh(a.Fb,a.Ac+'-mergedRegionStyle');Vg(a.Qb,a.Fb);a.Wb.type=pxb;vh(a.Wb,a.Ac+'-resizeStyle');Vg(a.Qb,a.Wb)}
function aN(b,c){var d,e,f,g,h,i,j;if(!b.Tc){return}h=-1;try{h=Vdb(Kj((CF(),b.Xc).style))}catch(a){a=UD(a);if(Yq(a,21)){h=xub}else throw VD(a)}h==-1&&(h=UM);if((k1(),!j1&&(j1=new t1),k1(),j1).a.j){nh((CF(),b.Xc),Jvb);nh(b.Xc,eub)}f=(!j1&&(j1=new t1),j1);if(f.a.j&&r1(f)){g=new C6((i=gh((CF(),b.Xc)),i-=hj($doc),i-=(WM==-1&&(WM=jN(Cvb)),WM),i),(j=ih(b.Xc),j-=ij($doc),j-=(XM==-1&&(XM=jN(Dvb)),XM),j),nh(b.Xc,eub),nh(b.Xc,Jvb));g.b+=dr(g.d*(1-c)/2);g.c+=dr(g.a*(1-c)/2);g.d=dr(g.d*c);g.a=dr(g.a*c);d=Wg(b.Xc);e=(!j1&&(j1=new t1),j1);if(e.a.j&&r1(e)){iN(ZM(b),g);!Wg(b.t)&&Yg(d,b.t,b.Xc)}}}
function oq(a,b,c){var d,e,f,g,h,i;if(b.l==0&&b.m==0&&b.h==0){throw VD(new gdb('divide by zero'))}if(a.l==0&&a.m==0&&a.h==0){c&&(kq=nq(0,0,0));return nq(0,0,0)}if(b.h==gvb&&b.m==0&&b.l==0){return pq(a,c)}i=false;if(b.h>>19!=0){b=Dq(b);i=!i}g=vq(b);f=false;e=false;d=false;if(a.h==gvb&&a.m==0&&a.l==0){e=true;f=true;if(g==-1){a=mq((Sq(),Oq));d=true;i=!i}else{h=Hq(a,g);i&&tq(h);c&&(kq=nq(0,0,0));return h}}else if(a.h>>19!=0){f=true;a=Dq(a);d=true;i=!i}if(g!=-1){return qq(a,g,i,f,c)}if(Aq(a,b)<0){c&&(f?(kq=Dq(a)):(kq=nq(a.l,a.m,a.h)));return nq(0,0,0)}return rq(d?a:nq(a.l,a.m,a.h),b,i,f,e,c)}
function uW(a,b,c){var d,e;yh(a.zc,b);zh(a.zc,c);a.oc=(a.zc.offsetHeight||0)|0;a.pc=(a.zc.offsetWidth||0)|0;a.Ob=b;a.Pb=c;a.db=1;a.eb=0;a.Sc>0&&(a.db=a.Sc+1);a.bb=1;a.cb=0;a.ob>0&&(a.bb=a.ob+1);a.xb=0;sU(a);oU(a);d=a.a.j;if(a.cb<b-d){do{a.cb+=s$(a.a,a.bb);++a.bb}while(a.cb<b-d)}a.xb=a.bb;a.yb=a.cb+s$(a.a,a.bb);e=a.a.L;if(a.eb<c-e){do{a.db>=a.a.M.length?(a.eb+=QU(a)):(a.eb+=$U(a,a.db));++a.db}while(a.eb<c-e)}a.zb=a.db;a.Ab=a.eb+$U(a,a.zb);while(a.yb<b+a.pc+d&&a.xb<a.a.i){++a.xb;a.yb+=s$(a.a,a.xb)}while(a.Ab<c+a.oc+e&&a.zb<a.a.O){++a.zb;a.zb>=a.a.M.length?(a.Ab+=QU(a)):(a.Ab+=$U(a,a.zb))}}
function Pg(a,b){var c,d,e,f,g,h,i,j,k;j='';if(b.length==0){return a.Nd(btb,$sb,-1,-1)}k=dfb(b);Peb(k.substr(0,3),'at ')&&(k=k.substr(3));k=k.replace(/\[.*?\]/g,'');g=k.indexOf('(');if(g==-1){g=k.indexOf('@');if(g==-1){j=k;k=''}else{j=dfb(k.substr(g+1));k=dfb(k.substr(0,g))}}else{c=k.indexOf(')',g);j=k.substr(g+1,c-(g+1));k=dfb(k.substr(0,g))}g=Reb(k,ffb(46));g!=-1&&(k=k.substr(g+1));(k.length==0||Peb(k,'Anonymous function'))&&(k=$sb);h=Ueb(j,ffb(58));e=Veb(j,ffb(58),h-1);i=-1;d=-1;f=btb;if(h!=-1&&e!=-1){f=j.substr(0,e);i=Jg(j.substr(e+1,h-(e+1)));d=Jg(j.substr(h+1))}return a.Nd(f,k,i,d)}
function yS(a,b,c,d,e){var f;sh(a.k,Yvb+a.b+Zvb+a.n);if(a.g>0&&b<a.g){b=a.g;a.d.style[Hub]=(vm(),Uub)}else{a.d.style[Hub]=(vm(),Tub)}if(a.i>0&&d<a.i){d=a.i;a.q.style[Hub]=(vm(),Uub)}else{a.q.style[Hub]=(vm(),Tub)}if(a.f>0&&e>a.f){e=a.f;a.a.style[Hub]=(vm(),Uub)}else{a.a.style[Hub]=(vm(),Tub)}if(a.e>0&&a.e<c){c=a.e;a.j.style[Hub]=(vm(),Uub)}else{a.j.style[Hub]=(vm(),Tub)}a.b=b;a.n=d;a.c=c;a.o=e;if(b<=c&&d<=e){dh(a.k,Yvb+a.b+Zvb+a.n);De((CF(),a.Xc),true);a.Xc.style[Nvb]='';CS(a);f=a.p.q.V.W;f!=null&&f.length!=0&&wS(a,QR(a.p.q.V.W,a.n,a.o+1))}else{De((CF(),a.Xc),false);a.Xc.style[Nvb]=(ql(),Uub)}}
function gV(a,b,c){var d,e,f,g,h,i,j,k;a.Zb=true;d=b-a.Sb;d<0&&(d=0);kT(a.Wb);d>0?AI(a.Yb,'Width: '+d+Kvb):AI(a.Yb,jxb);j='.'+a.Ac+kxb+a.$b+'{width:'+d+lxb;nT(a.Wb,j);e=0;k=hh(a.zc)-b;for(g=a.$b+1;g<=a.xb&&e<k;g++){e+=s$(a.a,g)}i=b-a.Tb;i<a.Sb-a.Tb&&(i=a.Sb-a.Tb);j='';for(h=a.$b+1;h<=a.xb;h++){j+='.'+a.Ac+kxb+h;a.xb!=h&&(j+=',')}if(!!a.ib&&a.$b>=a.ib.a.length){for(f=1;f<=a.ib.a.length;f++){i+=s$(a.a,f)}}i=a.Cb+i;(!a.ib||a.$b>a.ib.a.length)&&(i-=ph(a.zc));if(j.length!=0){j+='{margin-left:'+i+lxb;nT(a.Wb,j)}j='.'+a.Ac+'.col-resizing > div.resize-line.ch {margin-left:'+(i-1)+lxb;nT(a.Wb,j);cX(a,b,c)}
function M2(a,b){var c,d;if(!a.e){a.e=new CI;He(a.e,new O2(a),(kn(),kn(),jn));He(a.e,new Q2(a),(Zo(),Zo(),Yo))}c=dfb(jI(a.e.a));c+=c.length==0?'Using Evaluation License of: ':', ';AI(a.e,c+b);MH((JK(),NK()),a.e);he(a.e).className='';d=he(a.e).style;d[zub]=(Bl(),Aub);d[twb]=(Ml(),'center');d['right']=(hm(),Lvb);d[Cvb]=Lvb;d['bottom']=Lvb;d['padding']='0.5em 1em';d['font-family']='sans-serif';d['fontSize']='12.0px';d[xxb]='1.1em';d['color']='white';d[nwb]='black';(Fh(),d).opacity=0.7;d[Iub]='2147483646';d[Dvb]=Uvb;d[hub]=Uvb;d[Gub]=(zk(),Mub);d['whiteSpace']=(Hm(),'normal');d[Hub]=(vm(),Tub);d['margin']=Lvb}
function x1(j,a){var b=j.a;var c=j.b;if(a.indexOf(owb)>-1&&a.indexOf('Width')>-1){var d=a.substring(0,a.length-5)+'Style';if(b.getPropertyValue)var e=b.getPropertyValue(d);else var e=b[d];if(e==fub)return '0px'}if(b.getPropertyValue){a=a.replace(/([A-Z])/g,'-$1').toLowerCase('en');var f=b.getPropertyValue(a)}else{var f=b[a];var g=c.style;if(!/^\d+(px)?$/i.test(f)&&/^\d/.test(f)){var h=g.left,i=c.runtimeStyle.left;c.runtimeStyle.left=b.left;g.left=f||0;f=g.pixelLeft+Kvb;g.left=h;c.runtimeStyle.left=i}}if(a.indexOf('margin')>-1&&f==Uvb){return '0px'}a==hub&&f==Uvb?(f=c.clientWidth+Kvb):a==gub&&f==Uvb&&(f=c.clientHeight+Kvb);return f}
function d5(a,b){var c,d,e,f,g,h,i;if(!a.j){f=Wf()-a.b[0];krb(trb((vdb(Mz),Mz.k)),f+' ms from start to move')}e=(h=(Fh(),b).changedTouches[0],a.f=_h(h.clientY||0),i=a.k++,i=i%3,a.b[i]=Wf(),a.s[i]=a.f,a.j?a.j:$wnd.Math.abs(a.o-a.f)>=3);if(e){c=a.o-a.f;d=a.n+c;if(d>((a.q.scrollHeight||0)|0)-(a.q.clientHeight|0)){g=c+a.n-(((a.q.scrollHeight||0)|0)-(a.q.clientHeight|0));g=g/2|0;g>(V4?0:(a.q.clientHeight|0)/3|0)&&(g=V4?0:(a.q.clientHeight|0)/3|0);c=((a.q.scrollHeight||0)|0)-(a.q.clientHeight|0)+g-a.n}else if(d<0){g=d/2|0;-g>(V4?0:(a.q.clientHeight|0)/3|0)&&(g=-(V4?0:(a.q.clientHeight|0)/3|0));c=g-a.n}g5(a,c);a.j=true;Eh.Wd(b);b.stopPropagation()}}
function Cc(){Cc=AE;Ac=new Lb('aria-activedescendant');new xc('aria-atomic');new Lb('aria-autocomplete');new Lb('aria-controls');new Lb('aria-describedby');new Lb('aria-dropeffect');new Lb('aria-flowto');new xc('aria-haspopup');Bc=new xc('aria-label');new Lb('aria-labelledby');new xc('aria-level');new Lb('aria-live');new xc('aria-multiline');new xc('aria-multiselectable');new Lb('aria-orientation');new Lb('aria-owns');new xc('aria-posinset');new xc('aria-readonly');new Lb('aria-relevant');new xc('aria-required');new xc('aria-setsize');new Lb('aria-sort');new xc('aria-valuemax');new xc('aria-valuemin');new xc('aria-valuenow');new xc('aria-valuetext')}
function dZ(a,b){var c,d,e,f;d=(!a.C&&(a.C=new x0),a.C);c=(!a.K&&(a.K=new T0),a.K);if(c.O||b.b){c.O=false;e=(!a.K&&(a.K=new T0),a.K);f=(!a.C&&(a.C=new x0),a.C);hZ(a);m0(f,e.X,e.W,b.Gf(Gxb));e0(f,e.Y);f.C?k$(f,false):(f.C=true);D$(f,f.a-1);r0(f,e.L);Z1((ng(),mg),new KZ(a,b))}else{(b.Gf('sheetNames')||b.Gf('sheetIndex'))&&m0(d,c.X,c.W,b.Gf(Gxb));if(b.Gf(Hxb)||b.Gf(Ixb)||b.Gf('colW')||b.Gf('rowH')||b.Gf('rows')||b.Gf('cols')||b.Gf(Jxb)||b.Gf(Kxb)){d.d?(d.d=false):dW(d.V,true);r0((!a.C&&(a.C=new x0),a.C),(!a.K&&(a.K=new T0),a.K).L)}else b.Gf('mergedRegions')&&r0((!a.C&&(a.C=new x0),a.C),(!a.K&&(a.K=new T0),a.K).L);b.Gf('sheetProtected')&&e0(d,c.Y);cZ(a,b)}}
function BW(a,b,c){var d,e,f,g,h,i,j,k,l,m;l=false;f=TU(a);if(b<f&&b>a.ob){k=0;for(e=f-1;e>=b-1&&e>0;e--){k+=s$(a.a,e)}yh(a.zc,ph(a.zc)-k);(b<=a.bb||k>(a.a.j/2|0))&&(l=true)}else{j=YU(a);if(b>j){k=0;g=a.a.i;for(e=j+1;e<=b+1&&e<=g;e++){k+=s$(a.a,e)}yh(a.zc,ph(a.zc)+k);(b>=a.xb||k>(a.a.j/2|0))&&(l=true)}}m=fV(a);if(c<m&&c>a.Sc){k=0;for(e=m-1;e>=c-1&&e>0;e--){k+=y$(a.a,e)?0:e>=a.W.length?QU(a):a.W[e-1]}i=((a.zc.scrollTop||0)|0)-k;zh(a.zc,i>0?i:0);(c<=a.db||k>(a.a.L/2|0))&&(l=true)}else{d=IU(a);if(c>d){k=0;h=a.a.O;for(e=d+1;e<=c+1&&e<=h;e++){k+=y$(a.a,e)?0:e>=a.W.length?QU(a):a.W[e-1]}zh(a.zc,((a.zc.scrollTop||0)|0)+k);(c>=a.zb||k>(a.a.L/2|0))&&(l=true)}}if(l){QV(a);KV(a)}}
function J1(a,b){var c,d,e,f,g,h,i,j,k,l,m,n;e=false;l=false;d=new y1(b);i=(m=iq(dq(hr,1),ixb,17,15,[0,0,0,0]),m[0]=v1(d,Uwb),m[1]=v1(d,'paddingRight'),m[2]=v1(d,'paddingBottom'),m[3]=v1(d,Twb),m);if(!e&&N1(a.d,i)){I1(a.d,i);e=true}if(!l&&O1(a.d,i)){I1(a.d,i);l=true}a.d=i;f=w1(d);if(!e&&N1(a.c,f)){I1(a.c,f);e=true}if(!l&&O1(a.c,f)){I1(a.c,f);l=true}a.c=f;c=(n=iq(dq(hr,1),ixb,17,15,[0,0,0,0]),n[0]=v1(d,'borderTopWidth'),n[1]=v1(d,'borderRightWidth'),n[2]=v1(d,'borderBottomWidth'),n[3]=v1(d,'borderLeftWidth'),n);if(!e&&N1(a.a,c)){I1(a.a,c);e=true}if(!l&&O1(a.a,c)){I1(a.a,c);l=true}a.a=c;j=i2(b);g=j+(f[0]+f[2]);K1(a,g)&&(e=true);k=l2(b);h=k+(f[1]+f[3]);L1(a,h)&&(l=true);return new P1}
function XT(a){a.U=trb('spreadsheet SheetWidget');a.qc=new Vnb;a.Fc=Qi($doc);a.zc=Qi($doc);a.N=Qi($doc);a.fb=Qi($doc);a.Ub=Qi($doc);a.Vb=Qi($doc);a.ic=new Akb;a.jb=new Akb;a.K=new Akb;a.ib=new Akb;a.kc=new Akb;a.Mc=new Akb;a.Qc=new Akb;a.d=new Akb;a.w=$i($doc);a.Dc=$i($doc);a.Ec=$i($doc);a.$=$i($doc);a.Wb=$i($doc);a.Fb=$i($doc);a.Mb=Qi($doc);a.Nc=Qi($doc);a.Pc=Qi($doc);a.c=Qi($doc);a.I=Qi($doc);a.gc=Qi($doc);a.F=Qi($doc);a.dc=Qi($doc);a.kb=Qi($doc);a.J=Qi($doc);a.hc=Qi($doc);a.D=Qi($doc);a.cc=Qi($doc);a.hb=Zi($doc);a.wb=new sT;a.t=new $nb;a.u=new $nb;a.wc=new $nb;a.tc=new $nb;a.vc=new $nb;a.uc=new $nb;a.p=new O5(300,new _X(a));a.Ib=new O5(100,new tY(a));a.mc=new vY(a);a.Jb=new zY(a)}
function Nfb(a,b){var c,d,e,f,g,h,i,j,k,l;j=(!a.c&&(a.c=Sgb(a.f)),a.c);k=(!b.c&&(b.c=Sgb(b.f)),b.c);c=a.e-b.e;g=0;e=1;h=Ifb.length-1;if(b.a==0&&b.f!=-1){throw VD(new gdb('Division by zero'))}if(j.e==0){return fgb(c)}d=ugb(j,k);j=qgb(j,d);k=qgb(k,d);f=wgb(k);k=Dgb(k,f);do{l=rgb(k,Ifb[e]);if(l[1].e==0){g+=e;e<h&&++e;k=l[0]}else{if(e==1){break}e=1}}while(true);if(!sgb(k.e<0?new Hgb(1,k.d,k.a):k,(mgb(),hgb))){throw VD(new gdb('Non-terminating decimal expansion; no exact representable decimal result'))}k.e<0&&(j=j.e==0?j:new Hgb(-j.e,j.d,j.a));i=bgb(c+$wnd.Math.max(f,g));e=f-g;j=e>0?(yhb(),e<xhb.length?Dhb(j,xhb[e]):e<vhb.length?zgb(j,vhb[e]):zgb(j,Agb(vhb[1],e))):Cgb(j,-e);return new Xfb(j,i)}
function zX(a,b){var c,d,e;a.kb.style[Dvb]=b+(hm(),Kvb);c=0;if(a.H>0){d=a.Z?a.H+1:a.H;c=3+d*18}e=0;a.fc>0&&(e=1+(a.fc+1)*15);if(c==0){a.I.style[Gub]=(zk(),fub);a.J.style[Gub]=fub}else{a.I.style[Gub]=(zk(),Mub);a.J.style[Gub]=Mub}a.Z||(a.J.style[Gub]=(zk(),fub),undefined);!!a.ib&&a.H>0?(a.F.style[Gub]=(zk(),Mub),undefined):(a.F.style[Gub]=(zk(),fub),undefined);a.I.style[gub]=c+Kvb;a.I.style[Dvb]=b+Kvb;a.F.style[gub]=c+Kvb;a.F.style[Dvb]=b+Kvb;a.J.style[Dvb]=b+Kvb;a.J.style[gub]=c+Kvb;a.Db&&(a.J.style[hub]=ZU(a)+Kvb,undefined);a.J.style[Cvb]=e+Kvb;a.D.style[Dvb]=b+Kvb;a.D.style[Cvb]=e+Kvb;a.D.style[gub]=c+Kvb;a.cc.style[Dvb]=b+c+Kvb;a.cc.style[Cvb]=Lvb;a.cc.style[hub]=e+Kvb;a.g=e;a.f=c;return c}
function GO(a,b){var c,d;switch((Fh(),b).keyCode|0){case 8:case 46:a.t.Z?pb(new xP(a),100):Z1((ng(),mg),new zP(a));Z1((ng(),mg),new BP(a));break;case 27:bL(a.j,a.c);T$(a.t);$O(a);b.stopPropagation();Eh.Wd(b);break;case 13:S$(a.t,(d=_K(a.j),d==null?'':d));$O(a);b.stopPropagation();Eh.Wd(b);break;case 9:W$(a.t,(c=_K(a.j),c==null?'':c),!b.shiftKey);$O(a);b.stopPropagation();break;case 38:if(a.g){KO(a,!!b.shiftKey,true,false,false);Eh.Wd(b)}break;case 39:if(a.g){KO(a,!!b.shiftKey,false,true,false);Eh.Wd(b)}break;case 40:if(a.g){KO(a,!!b.shiftKey,false,false,true);Eh.Wd(b)}break;case 37:if(a.g){KO(a,!!b.shiftKey,false,false,false);Eh.Wd(b)}break;default:zO(a,a.j);}if(a.e){dP(a,false);Z1((ng(),mg),new nP(a))}}
function kV(a,b,c){var d,e,f,g,h,i,j,k;a.Zb=true;d=c-a.Sb;d<0&&(d=0);kT(a.Wb);d>0?AI(a.Yb,'Height: '+d+'px \u2248 '+Ofb(dgb(d/a.Lb*72))+'pt'):AI(a.Yb,'Hide row');j='.'+a.Ac+mxb+a._b+'{height:'+d+lxb;nT(a.Wb,j);e=0;k=fh(a.zc)-c;for(g=a._b+1;g<=a.zb&&e<k;g++){e+=y$(a.a,g)?0:g>=a.W.length?QU(a):a.W[g-1]}i=c-a.Tb;i<a.Sb-a.Tb&&(i=a.Sb-a.Tb);j='';for(h=a._b+1;h<=a.zb;h++){j+='.'+a.Ac+mxb+h;a.zb!=h&&(j+=',')}if(!!a.jb&&a._b>=a.jb.a.length){for(f=1;f<=a.jb.a.length;f++){i+=y$(a.a,f)?0:f>=a.W.length?QU(a):a.W[f-1]}}i+=a.Oc;(!a.jb||a._b>a.jb.a.length)&&(i-=(a.zc.scrollTop||0)|0);if(j.length!=0){j+='{margin-top:'+i+lxb;nT(a.Wb,j)}j='.'+a.Ac+'.row-resizing > div.resize-line.rh {margin-top:'+(i-1)+lxb;nT(a.Wb,j);cX(a,b,c)}
function MV(a,b){var c,d,e,f,g,h,i,j,k,l,m;if(!!(Fh(),b).changedTouches&&b.changedTouches.length>0){k=b.changedTouches;i=Sm(k[k.length-1])}else if(!!b.touches&&b.touches.length>0){k=b.touches;i=Sm(k[k.length-1])}else{i=WX(b)}m=(g=oj($doc),b2(),b.type.indexOf(Dwb)!=-1?Rm(b.changedTouches[0])+g:_h(b.clientY||0)+g);l=(f=nj($doc),b.type.indexOf(Dwb)!=-1?Qm(b.changedTouches[0])+f:_h(b.clientX||0)+f);if(jU(a,m,l)){return}d=0;e=0;c=null;if(i){c=i.getAttribute(qub)||'';pT(a.wb,c);d=a.wb.a;e=a.wb.b}if(e==0||d==0){return}h=uwb.length;if(!Peb(c.substr(c.length-h,h),uwb)){j=XU(a,l,m,JU(a,d,e));d=j.c;e=j.k}if(d!=a.Jc||e!=a.Kc){d==0&&(l>hh(Jh(i))?(d=YU(a)+1):(d=a.Jc));e==0&&(m>fh(a.zc)?(e=IU(a)+1):(e=a.Kc));d_(a.a,d,e);a.Jc=d;a.Kc=e}}
function TG(a){switch(a){case 'blur':return 4096;case 'change':return 1024;case 'click':return 1;case 'dblclick':return 2;case 'focus':return 2048;case 'keydown':return 128;case 'keypress':return 256;case 'keyup':return 512;case Eub:return ovb;case 'losecapture':return 8192;case 'mousedown':return 4;case 'mousemove':return 64;case 'mouseout':return 32;case 'mouseover':return 16;case Zub:return 8;case 'scroll':return qtb;case 'error':return ttb;case pvb:case 'mousewheel':return qvb;case Fub:return rvb;case 'paste':return gvb;case bvb:return svb;case 'touchmove':return tvb;case 'touchend':return itb;case _ub:return uvb;case 'gesturestart':return vvb;case 'gesturechange':return wvb;case 'gestureend':return xvb;default:return -1;}}
function hW(b,c){var d,e,f,g,h,i,j;h=Yvb+c.col1+Zvb+c.row1;b.Fb.sheet.deleteRule(0);i=vib(b.Eb,reb(c.id));j=JU(b,c.col1,c.row1);!!j&&FM(j,i.o,i.b,false);ah(Aib(b.Eb,reb(c.id)).d);Aib(b.Kb,c);c.col1>=b.yc.e&&c.col2<=b.yc.f&&c.row1>=b.yc.K&&c.row2<=b.yc.L&&OX(b,c.col1,c.col2,c.row1,c.row2,false);f=null;if(!!b.r&&xib(b.r,h)){try{d=ukb(ukb(b.kc,c.row1-b.db),c.col1-b.bb);GM(d);f=d.d}catch(a){a=UD(a);if(!Yq(a,21))throw VD(a)}}if(!!b.tb&&b.tb.contains(h)){try{d=ukb(ukb(b.kc,c.row1-b.db),c.col1-b.bb);HM(d);f=d.d}catch(a){a=UD(a);if(!Yq(a,21))throw VD(a)}}if(xib(b.b,h)&&!!f){e=wib(b.b,h);NN(e,f,c.row1,c.col1)}if(!!b.T&&xib(b.T,h)){try{d=ukb(ukb(b.kc,c.row1-b.db),c.col1-b.bb);g=wib(b.T,h);YT(b,d,g)}catch(a){a=UD(a);if(!Yq(a,21))throw VD(a)}}}
function VX(a,b){var c;XT(this);c=u1().toLowerCase();this.vb=c.indexOf('macintosh')!=-1||c.indexOf('mac osx')!=-1||c.indexOf('mac os x')!=-1;this.a=a;this.Rc=b;this.e=new Vnb;this.b=new Vnb;this.Bc=new Vnb;this.Eb=new Vnb;this.Kb=new Vnb;this.rb=new K5;qe(this.rb,'v-spreadsheet-hyperlink-tooltip-label');this.qb=new xN;qe(this.qb,'v-tooltip');this.qb.r=this;oI(this.qb,this.rb);this.Yb=new K5;qe(this.Yb,'v-spreadsheet-resize-tooltip-label');this.Xb=new xN;qe(this.Xb,'v-tooltip');this.Xb.r=this;oI(this.Xb,this.Yb);this.q=new ON(this,this.zc);BN(this.q);oV(this);Ae((CF(),this.Xc),txb,true);this.yc=new lS(a,this);this.M=new oO(this,new kO(this));Vg(this.Xc,he(this.M));pV(this);this.lc=new O5(20,new BY(this));this.Rb=new O5(100,new DY(this))}
function RX(a){var b,c,d,e,f,g,h,i;d=a.ob>0?1:0;jh(a.Fc).indexOf('report')!=-1&&(d=0);i=0;a.ic.a.length==0||(i=ZU(a));f=0;a.K.a.length==0||(f=NU(a));e=0;if(a.a.u){g=new M1;J1(g,he(a.a.u));e=dr(g.b)}b=zX(a,e);c=AX(a,e);a.kb.style[Dvb]=e+(hm(),Kvb);c==0||b==0?(a.kb.style[Gub]=(zk(),fub),undefined):(a.kb.style[Gub]=(zk(),Mub),undefined);a.kb.style[gub]=b+Kvb;a.kb.style[hub]=c+Kvb;Z1((ng(),mg),new rY(a));if(!a.Z){i=0;f=0}a.Oc=f+e+b;a.Cb=i+c;h=a.Nc.style;h[hub]=a.Bb+i+1+Kvb;h[gub]=a.Lc+f+Kvb;h[Dvb]=e+b+Kvb;h[Cvb]=c+Kvb;h=a.Pc.style;h[Cvb]=a.Bb+a.Cb+d+Kvb;h[gub]=a.Lc+f+Kvb;h[Dvb]=e+b+Kvb;h=a.c.style;h[hub]=a.Bb+i+1+Kvb;h[Dvb]=a.Lc+a.Oc+Kvb;h[Cvb]=c+Kvb;h=a.zc.style;h[Cvb]=a.Bb+a.Cb+d+Kvb;h[Dvb]=a.Lc+a.Oc+Kvb;h=a.N.style;h[Dvb]=e+b+Kvb;h[Cvb]=c+Kvb}
function MM(a){var b,c,d,e,f,g,h,i,j,k,l,m;k=jh(a.d).indexOf(' r ')!=-1||Oeb(jh(a.d),' r');e=r$(a.n.a,a.c);l=vib(a.n.qc,new RM(a.o,a.b,a.k,a.c));!l&&(l=reb(AM(a)));j=l.a-e;if(!k&&j>0){j+=2;c=a.c;m=0;d=a.n.a.g;g=zV(a.n,c);while(c<d.length&&m<j){if(g&&!zV(a.n,c+1)){break}h=JU(a.n,c+1,a.k);if(!!h&&h.o!=null&&h.o.length!=0){break}m+=d[c];++c}m+=e;i=Qi($doc);i.style[Xvb]=fub;i.style[hub]=m+(hm(),Kvb);i.style[Nvb]=(ql(),Uub);i.style['textOverflow']=(Vl(),'ellipsis');b=a.d.childNodes;if(b){for(f=b.length-1;f>=0;f--){i.appendChild(b[f])}}a.d.innerHTML='';Vg(a.d,i);zM(a);a.i=true}else{a.i=false}CV(a.n,Yvb+a.c+Zvb+a.k)&&!Yq(a,171)?(a.d.style[Nvb]=(ql(),Uub),undefined):j>0?(a.d.style[Nvb]=(ql(),Tub),undefined):(a.d.style[Nvb]=(ql(),Uub),undefined);a.g=false}
function fhb(a,b,c,d,e,f){var g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,A;q=fq(hr,ixb,17,d+1,15,1);r=fq(hr,ixb,17,f+1,15,1);s=f;i=oeb(e[f-1]);if(i!=0){Xgb(r,e,0,i);Xgb(q,c,0,i)}else{wfb(c,0,q,0,d);wfb(e,0,r,0,f)}j=r[s-1];l=b-1;m=d;while(l>=0){k=0;if(q[m]==j){k=-1}else{t=WD(jE(XD(q[m],Ozb),32),XD(q[m-1],Ozb));w=ihb(t,j);k=pE(w);v=pE(kE(w,32));if(k!=0){o=0;A=0;u=false;++k;do{--k;if(u){break}o=gE(XD(k,Ozb),XD(r[s-2],Ozb));A=WD(jE(v,32),XD(q[m-2],Ozb));p=WD(XD(v,Ozb),XD(j,Ozb));oeb(pE(lE(p,32)))<32?(u=true):(v=pE(p))}while(bE(rE(o,Szb),rE(A,Szb)))}}if(k!=0){g=lhb(q,m-s,r,s,k);if(g!=0){--k;h=0;for(n=0;n<s;n++){h=WD(h,WD(XD(q[m-s+n],Ozb),XD(r[n],Ozb)));q[m-s+n]=pE(h);h=lE(h,32)}}}a!=null&&(a[l]=k);--m;--l}if(i!=0){$gb(r,s,q,0,i);return r}wfb(q,0,r,0,f);return q}
function CN(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o;h=hh(a.c);e=(a.c.offsetLeft||0)|0;g=(a.c.offsetWidth||0)|0;f=(a.c.offsetTop||0)|0;i=ih(a.c);k=h+15;if(k+a.n>hh(a.o)){o=gh(a.c)-15-a.n;gh(a.o)<o&&(k=o)}l=i-15;m=fh(a.o);if(l+a.k>m){l-=l+a.k-m+5;n=ih(a.o);l<n&&(l=n)}else l<ih(a.o)&&(l+=ih(a.o)-l);eN(a,k,l);a.j!=null&&sh(a.i,a.j);a.j=Yvb+a.b+Zvb+a.d;l+=2;k+=2;c=i-l;if(k>h){b=k-h;if(c>0){j=-($wnd.Math.atan(c/b)*gwb)}else{c=$wnd.Math.abs(c);j=0}}else{k-=2;b=h-(k+a.n);if(c>0){j=-180+$wnd.Math.atan(c/b)*gwb}else{c=$wnd.Math.abs(c);j=-180}}d=$wnd.Math.sqrt(b*b+c*c)+1;a.i.style[hub]=d+(hm(),Kvb);a.i.style[Dvb]=f+Kvb;a.i.style[Cvb]=e+g+Kvb;a.i.style['transform']=hwb+j+'deg)';a.i.style['msTransform']=hwb+j+'deg)';a.i.style[iwb]=hwb+j+'deg)';dh(a.i,a.j);Vg(a.o,a.i)}
function AW(a,b,c,d){var e,f,g,h,i,j,k;j=false;b<=a.Sc&&(b=a.Sc+1);k=fV(a);e=IU(a);if(d){if(b<k){i=0;for(f=k-1;f>=b-1&&f>0;f--){i+=y$(a.a,f)?0:f>=a.W.length?QU(a):a.W[f-1]}h=((a.zc.scrollTop||0)|0)-i;zh(a.zc,h>0?h:0);(b<=a.db||i>(a.a.L/2|0))&&(j=true)}else if(b>e){i=0;g=a.a.O;for(f=e+1;f<=b+1&&f<=g;f++){i+=y$(a.a,f)?0:f>=a.W.length?QU(a):a.W[f-1]}zh(a.zc,((a.zc.scrollTop||0)|0)+i);(b>=a.zb||i>(a.a.L/2|0))&&(j=true)}}else{if(c>e){i=0;g=a.a.O;for(f=e+1;f<=c+1&&f<=g;f++){i+=y$(a.a,f)?0:f>=a.W.length?QU(a):a.W[f-1]}zh(a.zc,((a.zc.scrollTop||0)|0)+i);(c>=a.zb||i>(a.a.L/2|0))&&(j=true)}else if(c<k){i=0;for(f=k-1;f>=c-1&&f>0;f--){i+=y$(a.a,f)?0:f>=a.W.length?QU(a):a.W[f-1]}h=((a.zc.scrollTop||0)|0)-i;zh(a.zc,h>0?h:0);(c<=a.db||i>(a.a.L/2|0))&&(j=true)}}return j}
function c5(a){var b,c,d,e,f,g,h,i,j;if(!a.j){W4=null;sM(a.d.a);a.d=null;return}b=a.n+a.a;g=((a.q.scrollHeight||0)|0)-(a.q.clientHeight|0);c=-1;if(b>g){i=g-b;d=g}else if(b<0){i=-b;d=0}else{h=Z4(a);krb(trb((vdb(Mz),Mz.k)),'pxPerMs'+h);i=dr(0.5*h*h/0.002);h<0&&(i=-i);d=b+i;if(d>g+(V4?0:(a.q.clientHeight|0)/3|0)){d=((a.q.scrollHeight||0)|0)-(a.q.clientHeight|0)+(V4?0:(a.q.clientHeight|0)/3|0);e=d-b;i=e}else if(d<-(V4?0:(a.q.clientHeight|0)/3|0)){d=-(V4?0:(a.q.clientHeight|0)/3|0);e=d-b;i=e}else{c=dr($wnd.Math.abs(h/0.002))}}c==-1&&(c=350);if(c>1500){krb(trb((vdb(Mz),Mz.k)),'Max animation time. '+c);c=1500}a.c=d;if($wnd.Math.abs(i)<3||c<20){krb(trb((vdb(Mz),Mz.k)),"Small 'momentum' "+i+' |  '+c+' Skipping animation,');b5(a);return}j=-d+a.n;f=-b+a.n;if(V4){f-=a.n;j-=a.n}i5(a,c,f,j)}
function fP(a,b){vO();var c,d,e;this.r=(CF(),Qi($doc));this.i=new Akb;this.F=new $nb;this.D=new Vnb;this.G=new Vnb;this.t=a;this.I=b;this.w=b.sb;this.H=new fT;eT(this.H,b,this);this.j=new hL;cf(this.j,2);this.a=new hL;cf(this.a,1);qe(this.j,'functionfield');qe(this.a,'addressfield');this.B=new fJ;qe(this.B,'namedrangebox');dJ(this.B);YI(this.B,'');this.C=new DI;qe(this.C,'arrow');te(this.B,false);te(this.C,false);d=new nI;c=new nI;e=new nI;c.Xc.className='fixed-left-panel';e.Xc.className='adjusting-right-panel';mI(c,this.a);mI(c,this.C);mI(c,this.B);mI(e,this.j);HH(d,c,d.Xc);HH(d,e,d.Xc);cI(this,d);this.Xc.className='functionbar';YF(he(this.B),1024);XF(he(this.B),new hP(this));YF(he(this.a),6656);XF(he(this.a),new pP(this));YF(he(this.j),7048);XF(he(this.j),new rP(this));this.r.className='formulaoverlay';Vg(this.Xc,this.r)}
function sX(b,c,d){var e,f,g,h,i,j,k;g=(CF(),TG((Fh(),c).type));j=d.getAttribute(qub)||'';if(Peb(j,Vvb)||Peb(j,Wvb)){e=Jh(d);f=e.getAttribute(qub)||'';i=uwb.length;Peb(f.substr(f.length-i,i),uwb)&&(f=Xeb(f,uxb,''));if(xib(b.b,f)){return}if(g==16){if(!(RJ(b.q)&&Peb(f,b.j))){pT(b.wb,f);b.k=b.wb.a;b.n=b.wb.b;N5(b.p)}}else{k=Eh.Ud(c);if(!b.o&&!(!!k&&!!k.equals?k.equals(e):k==e)){DN(b.q);b.j=null;b.k=-1;b.n=-1}}}else{i=uwb.length;Peb(j.substr(j.length-i,i),uwb)&&(j=Xeb(j,uxb,''));if(xib(b.b,j)){return}if(g==16){if(!(RJ(b.q)&&Peb(j,b.j))){WF(b.zc);pT(b.wb,j);b.k=b.wb.a;b.n=b.wb.b;N5(b.p)}}else if(g==32){k=Eh.Ud(c);if(!b.o&&!!k&&!!Jh(k)){try{if(!(TV(k.getAttribute(qub)||'')&&mf(Jh(k),d))){DN(b.q);b.j=null;b.n=-1;b.k=-1}}catch(a){a=UD(a);if(Yq(a,49)){h=a;rrb(b.U,'SheetWidget:updateCellCommentDisplay: NPE ONMOUSEOUT, '+h.f)}else throw VD(a)}}}}}
function Lfb(){Lfb=AE;var a,b,c;new Vfb(1,0);new Vfb(10,0);new Vfb(0,0);Cfb=fq(QB,atb,36,11,0,1);Dfb=fq(er,atb,17,100,15,1);Efb=iq(dq(fr,1),atb,17,15,[1,5,25,125,625,3125,15625,78125,390625,1953125,9765625,48828125,Lzb,Mzb,6103515625,30517578125,152587890625,762939453125,3814697265625,19073486328125,95367431640625,476837158203125,2384185791015625]);Ffb=fq(hr,ixb,17,Efb.length,15,1);Gfb=iq(dq(fr,1),atb,17,15,[1,10,100,xub,10000,100000,1000000,10000000,100000000,hvb,10000000000,100000000000,1000000000000,10000000000000,100000000000000,1000000000000000,10000000000000000]);Hfb=fq(hr,ixb,17,Gfb.length,15,1);Jfb=fq(QB,atb,36,11,0,1);a=0;for(;a<Jfb.length;a++){Cfb[a]=new Vfb(a,0);Jfb[a]=new Vfb(0,a);Dfb[a]=48}for(;a<Dfb.length;a++){Dfb[a]=48}for(c=0;c<Ffb.length;c++){Ffb[c]=Yfb(Efb[c])}for(b=0;b<Hfb.length;b++){Hfb[b]=Yfb(Gfb[b])}yhb();Ifb=vhb}
function yob(){function e(){this.obj=this.createObject()}
;e.prototype.createObject=function(a){return Object.create(null)};e.prototype.get=function(a){return this.obj[a]};e.prototype.set=function(a,b){this.obj[a]=b};e.prototype[Tzb]=function(a){delete this.obj[a]};e.prototype.keys=function(){return Object.getOwnPropertyNames(this.obj)};e.prototype.entries=function(){var b=this.keys();var c=this;var d=0;return {next:function(){if(d>=b.length)return {done:true};var a=b[d++];return {value:[a,c.get(a)],done:false}}}};if(!wob()){e.prototype.createObject=function(){return {}};e.prototype.get=function(a){return this.obj[':'+a]};e.prototype.set=function(a,b){this.obj[':'+a]=b};e.prototype[Tzb]=function(a){delete this.obj[':'+a]};e.prototype.keys=function(){var a=[];for(var b in this.obj){b.charCodeAt(0)==58&&a.push(b.substring(1))}return a}}return e}
function QT(a){this.k=Qi($doc);this.c=Qi($doc);this.i=Qi($doc);this.n=Qi($doc);this.o=Qi($doc);this.p=Qi($doc);this.q=Qi($doc);this.a=Qi($doc);this.g=ej($doc);this.v=Qi($doc);this.u=[];this.f=Qi($doc);this.e=a;this.n.className='scroll-tabs-beginning';this.o.className='scroll-tabs-end';this.p.className='scroll-tabs-left';this.q.className='scroll-tabs-right';this.a.className='add-new-tab';this.i.className='sheet-tabsheet-options';Vg(this.i,this.n);Vg(this.i,this.p);Vg(this.i,this.q);Vg(this.i,this.o);Vg(this.i,this.a);this.c.className='sheet-tabsheet-container';this.v.className='sheet-tabsheet-temp';Vg(this.k,this.v);this.k.className='sheet-tabsheet';Vg(this.k,this.i);Vg(this.k,this.c);this.f.className='sheet-tabsheet-infolabel';Vg(this.k,this.f);ne(this,this.k);YF(this.k,3);XF(this.k,new RT(this));YF(this.g,4736);XF(this.g,new TT(this));this.g.maxLength=31}
function ON(a,b){MJ();var c;xN.call(this);this.e=dj($doc);this.o=b;this.p=new nI;oI(this,this.p);this.i=Qi($doc);this.i.className=kwb;this.a=new K5;te(this.a,false);qe(this.a,'comment-overlay-author');this.g=new K5;te(this.g,false);qe(this.g,'comment-overlay-label');LJ.df((CF(),CF(),lh(this.Xc))).className='v-spreadsheet-comment-overlay';Ae(LJ.df((null,lh(this.Xc))),'v-spreadsheet-comment-overlay-shadow',true);this.r=a;this.F=false;this.Xc.style[Hub]=Uub;!!this.t&&(this.t.style[Hub]=Uub,undefined);this.i.style[Hub]=(vm(),Uub);this.Xc.style[Iub]='0';this.f=new K5;te(this.f,false);qe(this.f,'comment-overlay-invalidformula');mI(this.p,this.f);mI(this.p,this.a);mI(this.p,this.g);dh(this.e,'comment-overlay-input');this.e.style[Gub]=(zk(),fub);Vg(this.Xc,this.e);this.e.rows=4;this.e.style[hub]=(hm(),'200.0px');c=new RN(this,a);He(this.a,c,(kn(),kn(),jn));He(this.g,c,(null,jn))}
function dhb(a,b){bhb();var c,d,e,f,g,h,i,j,k,l,m,n,o,p;i=YD(a,0)<0;i&&(a=hE(a));if(YD(a,0)==0){switch(b){case 0:return '0';case 1:return '0.0';case 2:return '0.00';case 3:return '0.000';case 4:return '0.0000';case 5:return '0.00000';case 6:return '0.000000';default:n=new qfb;b<0?(n.a+='0E+',n):(n.a+='0E',n);n.a+=b==ptb?'2147483648':''+-b;return n.a;}}k=18;l=fq(er,atb,17,k+1,15,1);c=k;p=a;do{j=p;p=$D(p,10);l[--c]=pE(WD(48,mE(j,gE(p,10))))&utb}while(YD(p,0)!=0);e=mE(mE(mE(k,c),b),1);if(b==0){i&&(l[--c]=45);return hfb(l,c,k-c)}if(b>0&&YD(e,-6)>=0){if(YD(e,0)>=0){f=c+pE(e);for(h=k-1;h>=f;h--){l[h+1]=l[h]}l[++f]=46;i&&(l[--c]=45);return hfb(l,c,k-c+1)}for(g=2;dE(g,WD(hE(e),1));g++){l[--c]=48}l[--c]=46;l[--c]=48;i&&(l[--c]=45);return hfb(l,c,k-c)}o=c+1;d=k;m=new rfb;i&&(m.a+='-',m);if(d-o>=1){kfb(m,l[c]);m.a+='.';m.a+=hfb(l,c+1,k-c-1)}else{m.a+=hfb(l,c,k-c)}m.a+='E';YD(e,0)>0&&(m.a+='+',m);m.a+=''+qE(e);return m.a}
function BX(a,b,c,d,e,f,g){var h,i,j,k,l,m,n,o,p,q,r,s;n=HV(a);while(n.a<n.c.a.length){q=Wkb(n);Yq(q,96)&&Pe(q,null)}$g(b);$g(c);h=0;f&&!a.G?(h=5):!f&&!a.ec&&(h=2);if(g>0){if(f){s=a.gc.clientWidth|0;a.Z&&(s+=ZU(a))}else{s=a.I.clientHeight|0;a.Z&&(s+=NU(a))}s+=h;for(l=new Ykb(d);l.a<l.c.a.length;){k=Wkb(l);if(f){p=new bO(k.uniqueIndex,a.a);ZN(p,a.G)}else{p=new pR(k.uniqueIndex,a.a);ZN(p,a.ec)}r=s;for(m=0;m<k.startIndex;m++){f?(r+=s$(a.a,m+1)):(r+=y$(a.a,m+1)?0:m+1>=a.W.length?QU(a):a.W[m+1-1])}p.f&&(f?(r-=OU(a,k.startIndex)/2|0):(r-=$U(a,k.startIndex)/2|0));p.nf(r,k.level-1);YN(p,k.collapsed);Vg(b,(CF(),p.Xc));Pe(p,a);o=0;for(j=k.startIndex;j<=k.endIndex;j++){f?(o+=s$(a.a,j+1)):(o+=y$(a.a,j+1)?0:j+1>=a.W.length?QU(a):a.W[j+1-1])}o-=h;p.f?f?(o+=OU(a,k.startIndex)/2):(o+=$U(a,k.startIndex)/2):f?(o+=OU(a,k.endIndex+2)/2):(o+=$U(a,k.endIndex+2)/2);$N(p,o);if(!!e&&e.a.length>k.startIndex){i=p.kf();Vg(c,i.Xc);Pe(i,a)}}}}
function QF(){var a,b,c;b=$doc.compatMode;a=iq(dq(MB,1),stb,2,6,[tub]);for(c=0;c<a.length;c++){if(Peb(a[c],b)){return}}a.length==1&&Peb(tub,a[0])&&Peb('BackCompat',b)?"GWT no longer supports Quirks Mode (document.compatMode=' BackCompat').<br>Make sure your application's host HTML page has a Standards Mode (document.compatMode=' CSS1Compat') doctype,<br>e.g. by using &lt;!doctype html&gt; at the start of your application's HTML page.<br><br>To continue using this unsupported rendering mode and risk layout problems, suppress this message by adding<br>the following line to your*.gwt.xml module file:<br>&nbsp;&nbsp;&lt;extend-configuration-property name=\"document.compatMode\" value=\""+b+'"/&gt;':"Your *.gwt.xml module configuration prohibits the use of the current document rendering mode (document.compatMode=' "+b+"').<br>Modify your application's host HTML page doctype, or update your custom "+"'document.compatMode' configuration property settings."}
function cH(a,b){var c=(a.__eventBits||0)^b;a.__eventBits=b;if(!c)return;c&1&&(a.onclick=b&1?$G:null);c&2&&(a.ondblclick=b&2?$G:null);c&4&&(a.onmousedown=b&4?$G:null);c&8&&(a.onmouseup=b&8?$G:null);c&16&&(a.onmouseover=b&16?$G:null);c&32&&(a.onmouseout=b&32?$G:null);c&64&&(a.onmousemove=b&64?$G:null);c&128&&(a.onkeydown=b&128?$G:null);c&256&&(a.onkeypress=b&256?$G:null);c&512&&(a.onkeyup=b&512?$G:null);c&1024&&(a.onchange=b&1024?$G:null);c&2048&&(a.onfocus=b&2048?$G:null);c&4096&&(a.onblur=b&4096?$G:null);c&8192&&(a.onlosecapture=b&8192?$G:null);c&qtb&&(a.onscroll=b&qtb?$G:null);c&ovb&&(a.onload=b&ovb?_G:null);c&ttb&&(a.onerror=b&ttb?$G:null);c&qvb&&(a.onmousewheel=b&qvb?$G:null);c&rvb&&(a.oncontextmenu=b&rvb?$G:null);c&gvb&&(a.onpaste=b&gvb?$G:null);c&svb&&(a.ontouchstart=b&svb?$G:null);c&tvb&&(a.ontouchmove=b&tvb?$G:null);c&itb&&(a.ontouchend=b&itb?$G:null);c&uvb&&(a.ontouchcancel=b&uvb?$G:null);c&vvb&&(a.ongesturestart=b&vvb?$G:null);c&wvb&&(a.ongesturechange=b&wvb?$G:null);c&xvb&&(a.ongestureend=b&xvb?$G:null)}
function JP(a,b,c,d,e){var f,g,h,i,j,k;if(b==c&&d==e){h=D0(a,d,b);if(!h){h=new IP;h.col1=d;h.col2=e;h.row1=b;h.row2=c}return h}else{g=E0(a,d,b);if(!!g&&g.col2>=e&&g.row2>=c){return g}}k=false;f=d;while(f<=e){i=D0(a,f,b);if(i){f=i.col2+1;if(d>i.col1){d=i.col1;k=true}if(e<i.col2){e=i.col2;k=true}if(b>i.row1){b=i.row1;k=true}}else{++f}}b>c&&(b=c);f=b;while(f<=c){i=D0(a,e,f);if(i){f=i.row2+1;if(e<i.col2){e=i.col2;k=true}if(b>i.row1){b=i.row1;k=true}if(c<i.row2){c=i.row2;k=true}}else{++f}}e<d&&(e=d);f=d;while(f<=e){i=D0(a,f,c);if(i){f=i.col2+1;if(d>i.col1){d=i.col1;k=true}if(e<i.col2){e=i.col2;k=true}if(c<i.row2){c=i.row2;k=true}}else{++f}}c<b&&(c=b);f=b;while(f<=c){i=D0(a,d,f);if(i){f=i.row2+1;if(d>i.col1){d=i.col1;k=true}if(b>i.row1){b=i.row1;k=true}if(c<i.row2){c=i.row2;k=true}}else{++f}}d>e&&(d=e);if(k){return JP(a,b,c,d,e)}else if(b==c&&d==e){h=D0(a,d,b);if(!h){h=new IP;h.col1=d;h.col2=e;h.row1=b;h.row2=c}return h}else{g=E0(a,d,b);if(!!g&&g.col2>=e&&g.row2>=c){return g}}j=new IP;j.col1=d;j.col2=e;j.row1=b;j.row2=c;return j}
function cT(a,b){var c,d,e,f,g,h;e=yj(b.a);d=a.b.a;if(a.b._){switch(e){case 8:case 46:jV(a.b);eP(a.a);dP(a.a,true);AO(a.a);xO(a.a);break;case 27:g$(d,d.b,true);QO(d.u);FU(d.V);DO(a.a);break;case 9:K$(d,(h=_K(a.b.sb),h==null?'':h),zj(b.a));DO(a.a);!!b.a&&Cj(b.a);break;case 38:if(HO(a.a)){I$(d,(g=_K(a.b.sb),g==null?'':g),true);!!b.a&&Cj(b.a)}else if(JO(a.a)){KO(a.a,zj(b.a),true,false,false);!!b.a&&Cj(b.a)}break;case 40:if(HO(a.a)){I$(d,(g=_K(a.b.sb),g==null?'':g),false);!!b.a&&Cj(b.a)}else if(JO(a.a)){KO(a.a,zj(b.a),false,false,true);!!b.a&&Cj(b.a)}break;case 37:if(HO(a.a)){K$(d,(g=_K(a.b.sb),g==null?'':g),true);!!b.a&&Cj(b.a)}else if(JO(a.a)){KO(a.a,zj(b.a),false,false,false);!!b.a&&Cj(b.a)}else if(a.a.v){dP(a.a,true);ZK(a.b.sb)==0&&!!b.a&&Cj(b.a)}break;case 39:if(HO(a.a)){K$(d,(g=_K(a.b.sb),g==null?'':g),false);!!b.a&&Cj(b.a)}else if(JO(a.a)){KO(a.a,zj(b.a),false,true,false);!!b.a&&Cj(b.a)}else if(a.a.v){dP(a.a,true);c=ZK(a.b.sb);f=(g=_K(a.b.sb),g==null?'':g).length;c==f&&!!b.a&&Cj(b.a)}}}else{g_(d,b.a,lT(vj(b.a)))}Dj(b.a)}
function F$(a,b,c,d,e,f){var g,h,i,j,k,l,m,n,o;n$(a);if(b==0||c==0){return}j=false;f||(j=c!=a.V.sc||b!=a.V.rc);if(d){m=a.V.rc;n=a.V.sc;g=m>b?b:m;h=m>b?m:b;k=n>c?c:n;l=n>c?n:c;o=JP(a.I,k,l,g,h);if(a.u.f);else if(TR(a.V.yc)){QX(a.V,o.col1,o.col2,o.row1,o.row2);OX(a.V,o.col1,o.col2,o.row1,o.row2,true)}else{OX(a.V,o.col1,o.col2,o.row1,o.row2,false)}if(a.u.f){UO(a.u,a.X,a.Y,b,c,false)}else if(f){TR(a.V.yc)?$9(a.W,o.row1,o.col1,o.row2,o.col2):bab(a.W,o.row1,o.col1,o.row2,o.col2);pb(a.s,200)}}else if(e){if(b==a.V.rc&&c==a.V.sc){return}if(a.u.f){UO(a.u,b,c,b,c,true)}else{a.V.C&&(a.V.C=false,undefined);TR(a.V.yc)&&ZW(a.V,false);mX(a.V,b,c);FR(a.Q);j&&t0(a,b,c,null);if(f){Y9(a.W,c,b);pb(a.s,200)}}}else{i=E0(a.I,b,c);if(a.u.f){a.X=b;a.Y=c;UO(a.u,b,c,b,c,false)}else{a.V.C||(a.V.C=true,undefined);if(!TR(a.V.yc)){ZW(a.V,true);sU(a.V)}YW(a.V,b,c);if(i){QX(a.V,i.col1,i.col2,i.row1,i.row2);OX(a.V,i.col1,i.col2,i.row1,i.row2,true);JR(a.Q,i.col1);KR(a.Q,i.row1)}else{QX(a.V,b,b,c,c);OX(a.V,b,b,c,c,true)}j&&t0(a,b,c,null);if(f){FR(a.Q);_9(a.W,c,b,true);pb(a.s,200)}}}}
function oV(a){ne(a,a.Fc);Vg(a.Fc,a.zc);dh(a.Fc,'v-spreadsheet');a.zc.className='bottom-right-pane';dh(a.zc,Pwb);a.zc.tabIndex=3;a.Pc.className='top-right-pane';dh(a.Pc,Pwb);Vg(a.Fc,a.Pc);a.c.className='bottom-left-pane';dh(a.c,Pwb);Vg(a.Fc,a.c);a.Nc.className='top-left-pane';dh(a.Nc,Pwb);Vg(a.Fc,a.Nc);a.I.className='col-group-pane';Vg(a.Fc,a.I);a.gc.className='row-group-pane';Vg(a.Fc,a.gc);a.F.className='col-group-freeze-pane';Vg(a.Fc,a.F);a.dc.className='row-group-freeze-pane';Vg(a.Fc,a.dc);a.hc.className='row-group-summary';Vg(a.Fc,a.hc);a.J.className='col-group-summary';Vg(a.Fc,a.J);a.D.className='col-group-border';Vg(a.Fc,a.D);a.cc.className='row-group-border';Vg(a.Fc,a.cc);a.kb.className='grouping-corner';Vg(a.Fc,a.kb);a.Ub.className=nxb;Vg(a.Fc,a.Ub);a.Vb.className=nxb;Vg(a.zc,a.Vb);a.N.className='corner';Vg(a.Fc,a.N);a.fb.className='floater';a.sb=new NP(a);ue(a.sb,'0');bL(a.sb,'x');he(a.sb).id='cellinput';CF();Vg(a.zc,MF(he(a.sb)));EH(a,a.sb);a.Mb.style[hub]=(hm(),'1.0in');a.Mb.style[zub]=(Bl(),Bub);a.Mb.style[Hub]=(vm(),Uub);a.Mb.style['padding']=Lvb;Vg(a.Fc,a.Mb);a.hb.style[Hub]=Uub;xh(a.hb,oxb)}
function Pfb(a,b){var c,d,e,f,g,h,i,j;c=0;g=0;f=b.length;h=null;j=new rfb;if(g<f&&(Osb(g,b.length),b.charCodeAt(g)==43)){++g;++c;if(g<f&&(Osb(g,b.length),b.charCodeAt(g)==43||(Osb(g,b.length),b.charCodeAt(g)==45))){throw VD(new Ieb(ntb+b+'"'))}}while(g<f&&(Osb(g,b.length),b.charCodeAt(g)!=46)&&(Osb(g,b.length),b.charCodeAt(g)!=101)&&(Osb(g,b.length),b.charCodeAt(g)!=69)){++g}j.a+=''+b.substr(c,g-c);if(g<f&&(Osb(g,b.length),b.charCodeAt(g)==46)){++g;c=g;while(g<f&&(Osb(g,b.length),b.charCodeAt(g)!=101)&&(Osb(g,b.length),b.charCodeAt(g)!=69)){++g}a.e=g-c;j.a+=''+b.substr(c,g-c)}else{a.e=0}if(g<f&&(Osb(g,b.length),b.charCodeAt(g)==101||(Osb(g,b.length),b.charCodeAt(g)==69))){++g;c=g;if(g<f&&(Osb(g,b.length),b.charCodeAt(g)==43)){++g;g<f&&(Osb(g,b.length),b.charCodeAt(g)!=45)&&++c}h=b.substr(c,f-c);a.e=a.e-Vdb(h);if(a.e!=dr(a.e)){throw VD(new Ieb('Scale out of range.'))}}i=j.a;if(i.length<16){a.f=(Kfb==null&&(Kfb=new RegExp('^[+-]?\\d*$','i')),Kfb.test(i)?parseInt(i,10):NaN);if(isNaN(a.f)){throw VD(new Ieb(ntb+b+'"'))}a.a=Yfb(a.f)}else{Rfb(a,new Kgb(i))}a.d=j.a.length;for(e=0;e<j.a.length;++e){d=Neb(j.a,e);if(d!=45&&d!=48){break}--a.d}a.d==0&&(a.d=1)}
function u7(a,b,c){var d,e,f,g,h,i;for(e=iq(dq(MB,1),stb,2,6,[izb,jzb,'rows','cols',kzb,lzb,mzb,nzb,ozb,pzb,'defRowH','defColW','rowH','colW',qzb,rzb,szb,tzb,uzb,vzb,wzb,Hxb,Ixb,xzb,yzb,zzb,Azb,Bzb,Czb,Jxb,Kxb,Dzb,Ezb,Fzb,Gzb,Hzb,gub,hub,lyb,myb,hyb,Wyb,'id',Lyb,uyb,iyb,Xyb,syb]),f=0,g=e.length;f<g;++f){d=e[f];if(c.b||x2(c,d)){i=(!b.C&&(b.C=new x0),b.C);h=VP(a.e);Peb(izb,d)&&X_(i,h.P);Peb(jzb,d)&&z_(i,h.k);Peb('rows',d)&&b0(i,h.V);Peb('cols',d)&&y_(i,h.j);Peb(kzb,d)&&u_(i,h.e);Peb(lzb,d)&&Y_(i,h.Q);Peb(mzb,d)&&w_(i,h.g);Peb(nzb,d)&&$_(i,h.S);Peb(ozb,d)&&v_(i,h.f);Peb(pzb,d)&&Z_(i,h.R);Peb('defRowH',d)&&E_(i,h.r);Peb('defColW',d)&&D_(i,h.q);Peb('rowH',d)&&__(i,h.T);Peb('colW',d)&&x_(i,h.i);Peb(qzb,d)&&s_(i,h.d);Peb(rzb,d)&&a0(i,h.U);Peb(szb,d)&&A_(i,h.n);Peb(tzb,d)&&U_(i,h.J);Peb(uzb,d)&&V_(i,h.K);Peb(vzb,d)&&f0(i,h.Z);Peb(wzb,d)&&B_(i,h.p);Peb(Hxb,d)&&I_(i,h.v);Peb(Ixb,d)&&J_(i,h.w);Peb(xzb,d)&&i0(i,h.$);Peb(yzb,d)&&K_(i,h.A);Peb(zzb,d)&&l0(i,h.cb);Peb(Azb,d)&&N_(i,h.C);Peb(Bzb,d)&&F_(i,h.s);Peb(Czb,d)&&G_(i,h.t);Peb(Jxb,d)&&j0(i,h._);Peb(Kxb,d)&&L_(i,h.B);Peb(Dzb,d)&&P_(i,h.D);Peb(Ezb,d)&&R_(i,h.G);Peb(Fzb,d)&&S_(i,h.H);Peb(Gzb,d)&&T_(i,h.I);Peb(Hzb,d)&&W_(i,h.M);Peb(gub,d)&&H_(i,h.jb);Peb(hub,d)&&k0(i,h.nb);Peb('id',d)&&O_(i,h.kb)}}}
function ehb(a,b){bhb();var c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,A,B,C,D,F,G,H;B=a.e;o=a.d;e=a.a;if(B==0){switch(b){case 0:return '0';case 1:return '0.0';case 2:return '0.00';case 3:return '0.000';case 4:return '0.0000';case 5:return '0.00000';case 6:return '0.000000';default:w=new qfb;b<0?(w.a+='0E+',w):(w.a+='0E',w);w.a+=-b;return w.a;}}t=o*10+1+7;u=fq(er,atb,17,t+1,15,1);c=t;if(o==1){h=e[0];if(h<0){H=XD(h,Ozb);do{p=H;H=$D(H,10);u[--c]=48+pE(mE(p,gE(H,10)))&utb}while(YD(H,0)!=0)}else{H=h;do{p=H;H=H/10|0;u[--c]=48+(p-H*10)&utb}while(H!=0)}}else{D=fq(hr,ixb,17,o,15,1);G=o;wfb(e,0,D,0,G);I:while(true){A=0;for(j=G-1;j>=0;j--){F=WD(jE(A,32),XD(D[j],Ozb));r=chb(F);D[j]=pE(r);A=pE(kE(r,32))}s=pE(A);q=c;do{u[--c]=48+s%10&utb}while((s=s/10|0)!=0&&c!=0);d=9-q+c;for(i=0;i<d&&c>0;i++){u[--c]=48}l=G-1;for(;D[l]==0;l--){if(l==0){break I}}G=l+1}while(u[c]==48){++c}}n=B<0;g=t-c-b-1;if(b==0){n&&(u[--c]=45);return hfb(u,c,t-c)}if(b>0&&g>=-6){if(g>=0){k=c+g;for(m=t-1;m>=k;m--){u[m+1]=u[m]}u[++k]=46;n&&(u[--c]=45);return hfb(u,c,t-c+1)}for(l=2;l<-g+1;l++){u[--c]=48}u[--c]=46;u[--c]=48;n&&(u[--c]=45);return hfb(u,c,t-c)}C=c+1;f=t;v=new rfb;n&&(v.a+='-',v);if(f-C>=1){kfb(v,u[c]);v.a+='.';v.a+=hfb(u,c+1,t-c-1)}else{v.a+=hfb(u,c,t-c)}v.a+='E';g>0&&(v.a+='+',v);v.a+=''+g;return v.a}
function g_(a,b,c){var d,e;if((Fh(),Eh).Sd(b)==0&&(b.keyCode|0)!=32||Eh.Sd(b)==13){switch(b.keyCode|0){case 8:case 46:i$(a);if(!a.e){X9(a.W.t,iq(dq(GB,1),atb,1,5,[]));TO(a.u,'')}break;case 40:b.shiftKey?AR(a.Q,true):BR(a.Q,true);break;case 37:b.shiftKey?zR(a.Q,false):CR(a.Q,true);break;case 9:b.shiftKey?CR(a.Q,vkb(a.v,reb(a.V.rc),0)!=-1||vkb(a.w,reb(a.V.sc),0)!=-1):DR(a.Q,vkb(a.v,reb(a.V.rc),0)!=-1||vkb(a.w,reb(a.V.sc),0)!=-1);break;case 39:b.shiftKey?zR(a.Q,true):DR(a.Q,true);break;case 38:b.shiftKey?AR(a.Q,false):ER(a.Q,true);break;case 113:case 13:if(13==(b.keyCode|0)){if(vkb(a.v,reb(a.V.rc),0)!=-1||vkb(a.w,reb(a.V.sc),0)!=-1){BR(a.Q,true);break}else{if(a.V.yc.e!=a.V.yc.f||a.V.yc.K!=a.V.yc.L){b.shiftKey?ER(a.Q,false):BR(a.Q,false);break}}}i$(a);if(!EV(a.V)&&!a.B&&!a.e&&!a.o){a.b=cV(a.V);wO(a.u);a.t=false;a.B=true;eX(a.V,true,(d=_K(a.u.j),d==null?'':d));a.u.u=true;ZO(a.u)}}}else{if(!(vkb(a.v,reb(a.V.rc),0)!=-1||vkb(a.w,reb(a.V.sc),0)!=-1)){i$(a);if(!EV(a.V)&&!a.B&&!a.e&&!a.o){a.B=true;a.b=cV(a.V);ZO(a.u);if(Oeb(a.b,'%')||FV(a.V)){(e=new $nb,zib(e.a,'0',e),zib(e.a,'1',e),zib(e.a,'2',e),zib(e.a,'3',e),zib(e.a,'4',e),zib(e.a,'5',e),zib(e.a,'6',e),zib(e.a,'7',e),zib(e.a,'8',e),zib(e.a,'9',e),zib(e.a,'-',e),zib(e.a,'+',e),xib(e.a,c))&&(c=c+'%');eX(a.V,true,c)}else{eX(a.V,true,c);wO(a.u)}TO(a.u,c)}}}}
function yR(a,b,c,d,e){var f,g,h,i,j,k,l,m;if(b==c&&d==e){h=t$(a.d,d,b);if(!h){h=new IP;h.col1=d;h.col2=e;h.row1=b;h.row2=c}return h}else{g=u$(a.d,d,b);if(!!g&&g.col2>=e&&g.row2>=c){return g}}k=a.c.rc;l=a.c.sc;if(k<d||k>e||l<b||l>c){return t$(a.d,k,a.c.sc)}m=false;f=d;while(f<=e){i=t$(a.d,f,b);if(i){f=i.col2+1;if(b>i.row1){m=true;if(b<c){i.row2>c?(b=i.row2+1):(b=c);f=d}else{if(k<i.col1){e=i.col1-1}else if(k>i.col2){d=i.col2+1}else{d=i.col1;e=i.col2;break}}}}else{++f}}b>c&&(b=c);f=b;while(f<=c){i=t$(a.d,e,f);if(i){f=i.row2+1;if(e<i.col2){m=true;if(e>d){i.col1>d?(e=i.col1-1):(e=d);f=b}else{if(l<i.row1){c=i.row1-1}else if(l>i.row2){b=i.row2+1}else{b=i.row1;c=i.row2;break}}}}else{++f}}e<d&&(e=d);f=d;while(f<=e){i=t$(a.d,f,c);if(i){f=i.col2+1;if(c<i.row2){m=true;if(c>b){b<i.row1?(c=i.row1-1):(c=b);f=d}else{if(k<i.col1){e=i.col1-1}else if(k>i.col2){d=i.col2+1}else{e=i.col1;d=i.col2;break}}}}else{++f}}c<b&&(c=b);f=b;while(f<=c){i=t$(a.d,d,f);if(i){f=i.row2+1;if(d>i.col1){m=true;if(d<e){e>i.col2?(d=i.col2+1):(d=e);f=b}else{if(l<i.row1){c=i.row1-1}else if(l>i.row2){b=i.row2+1}else{b=i.row1;c=i.row2;break}}}}else{++f}}d>e&&(d=e);if(m){return yR(a,b,c,d,e)}else if(b==c&&d==e){h=t$(a.d,d,b);if(!h){h=new IP;h.col1=d;h.col2=e;h.row1=b;h.row2=c}return h}else{g=u$(a.d,d,b);if(!!g&&g.col2>=e&&g.row2>=c){return g}}j=new IP;j.col1=d;j.col2=e;j.row1=b;j.row2=c;return j}
function dW(b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,A,B,C,D,F,G;SX(b);D=b.Lc+((b.zc.scrollTop||0)|0);C=ph(b.zc);G=D-b.Pb;l=C-b.Ob;try{if(b.zb>b.a.O){b.zb=b.a.O;while(b.zb-b.db+1<b.kc.a.length){A=xkb(b.kc,b.kc.a.length-1);for(g=new Ykb(A);g.a<g.c.a.length;){f=Wkb(g);ah(f.d)}ah(xkb(b.ic,b.ic.a.length-1))}}if(b.xb>b.a.i){b.xb=b.a.i;for(B=new Ykb(b.kc);B.a<B.c.a.length;){A=Wkb(B);while(b.xb-b.bb+1<A.a.length){ah(xkb(A,A.a.length-1).d)}}while(b.xb-b.bb+1<b.K.a.length){ah(xkb(b.K,b.K.a.length-1))}}r=1;for(n=1;n<b.db;n++){r+=y$(b.a,n)?0:n>=b.W.length?QU(b):b.W[n-1];n==b.Sc&&(b.Lc=r)}t=r;for(o=b.db;o<=b.zb;o++){t+=y$(b.a,o)?0:o>=b.W.length?QU(b):b.W[o-1]}d=b.Lc+D+b.oc+b.a.L;F=r-b.eb;e=t-b.Ab;b.eb=r;b.Ab=t;q=0;for(p=1;p<b.bb;p++){q+=s$(b.a,p);b.ob==p&&(b.Bb=q)}s=q;for(m=b.bb;m<=b.xb;m++){s+=s$(b.a,m)}v=b.Bb+C+b.pc+b.a.j;w=s-b.yb;b.cb=q;b.yb=s;hV(b,C);wX(b,0,-1);if(w<0||l>0||b.xb<b.a.i&&b.yb<v){iV(b,C);wX(b,0,1)}if(F>0||G<0){nV(b,D);wX(b,-1,0)}if(e!=0||G>0||b.zb<b.a.O&&b.Ab<d){mV(b,D);wX(b,1,0)}sW(b);b.Ob=C;b.Pb=D;c&&N5(b.Rb);for(i=(u=(new Sjb(b.b)).a.Zf().Ne(),new Xjb(u));i.a.Xe();){h=(k=i.a.Ye(),k.gg());x$(b.a,h.b)||y$(b.a,h.d)?($M(h,false),ah(h.i)):GN(h)}KV(b);QX(b,b.yc.e,b.yc.f,b.yc.K,b.yc.L);xX(b);NX(b);JX(b,true)}catch(a){a=UD(a);if(Yq(a,21)){j=a;qrb(b.U,'SheetWidget:relayoutSheet: '+yf(j,j.Gd())+' while relayouting spreadsheet');uW(b,C,D);sW(b);c_(b.a,b.db,b.zb,b.bb,b.xb);oW(b);tW(b);xX(b);NX(b);nW(b);_V(b);IX(b)}else throw VD(a)}}
function AR(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o;o=a.c.yc.K;h=o;f=a.c.yc.e;d=a.c.yc.L;g=d;j=a.c.yc.f;m=a.c.sc;l=a.c.rc;i=u$(a.d,l,m);c=false;if(a.c.C){!!i&&(b&&i.row1!=o||!b&&i.row2==d)&&(m=i.row2);n=null;if(m==o){if(b&&d+1<=a.d.O){++d;while(!!a.d.w&&vkb(a.d.w,reb(d),0)!=-1&&d<a.d.O){++d}n=JP(a.d.I,o,d,f,j)}else if(!b){if(o!=d){--d;while(!!a.d.w&&vkb(a.d.w,reb(d),0)!=-1&&d>o){--d}n=yR(a,o,d,f,j)}else if(o-1>0){c=true;--o;while(!!a.d.w&&vkb(a.d.w,reb(o),0)!=-1&&o>1){--o}n=JP(a.d.I,o,d,f,j)}}}else if(m==d){if(b){if(o!=d){c=true;++o;while(!!a.d.w&&vkb(a.d.w,reb(o),0)!=-1&&o<d){++o}n=yR(a,o,d,f,j)}else if(d+1<=a.d.O){++d;while(!!a.d.w&&vkb(a.d.w,reb(d),0)!=-1&&d<a.d.O){++d}n=JP(a.d.I,o,d,f,j)}}else if(!b&&o-1>0){c=true;--o;while(!!a.d.w&&vkb(a.d.w,reb(o),0)!=-1&&o>1){--o}n=JP(a.d.I,o,d,f,j)}}else{if(b){if(d+1<=a.d.O){++d;while(!!a.d.w&&vkb(a.d.w,reb(d),0)!=-1&&d<a.d.O){++d}n=JP(a.d.I,o,d,f,j)}}else{c=true;if(o-1>0){--o;while(!!a.d.w&&vkb(a.d.w,reb(o),0)!=-1&&o>1){--o}n=JP(a.d.I,o,d,f,j)}}}if(!n){return}QX(a.c,n.col1,n.col2,n.row1,n.row2);kW(a.c,n.col1,n.col2,n.row1,n.row2);lW(a.c,n.row1,n.row2,n.col1,n.col2);AW(a.c,n.row1,n.row2,c)}else{if(i){k=i.row2;e=i.col2}else{k=m;e=l}if(b){++k;while(!!a.d.w&&vkb(a.d.w,reb(k),0)!=-1&&k<a.d.O){++k}}else{--m;while(!!a.d.w&&vkb(a.d.w,reb(m),0)!=-1&&m>1){--m}}if(m>0&&k<=a.d.O){n=JP(a.d.I,m,k,l,e);if(n){a.c.C=true;ZW(a.c,true);sU(a.c);QX(a.c,n.col1,n.col2,n.row1,n.row2);OX(a.c,n.col1,n.col2,n.row1,n.row2,true)}}CW(a.c)}if(f!=a.c.yc.e||j!=a.c.yc.f||h!=a.c.yc.K||g!=a.c.yc.L){$9(a.d.W,a.c.yc.K,a.c.yc.e,a.c.yc.L,a.c.yc.f);pb(a.d.s,200)}}
function zR(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o;o=a.c.yc.K;f=a.c.yc.e;g=f;j=a.c.yc.f;h=j;d=a.c.yc.L;l=a.c.rc;m=a.c.sc;i=E0(a.d.I,l,m);c=false;if(a.c.C){!!i&&(b&&i.col1!=f||!b&&i.col2==j)&&(l=i.col2);n=null;if(l==f){if(b&&j+1<=a.d.i){++j;while(!!a.d.v&&vkb(a.d.v,reb(j),0)!=-1&&j<a.d.i){++j}n=JP(a.d.I,o,d,f,j)}else if(!b){if(j!=f){--j;while(!!a.d.v&&vkb(a.d.v,reb(j),0)!=-1&&j>f){--j}n=yR(a,o,d,f,j)}else if(f-1>0){c=true;--f;while(!!a.d.v&&vkb(a.d.v,reb(f),0)!=-1&&f>1){--f}n=JP(a.d.I,o,d,f,j)}}}else if(l==j){if(b){if(j!=f){c=true;++f;while(!!a.d.v&&vkb(a.d.v,reb(f),0)!=-1&&f<j){++f}n=yR(a,o,d,f,j)}else if(j+1<=a.d.i){++j;while(!!a.d.v&&vkb(a.d.v,reb(j),0)!=-1&&j<a.d.i){++j}n=JP(a.d.I,o,d,f,j)}}else if(!b&&f-1>0){c=true;--f;while(!!a.d.v&&vkb(a.d.v,reb(f),0)!=-1&&f>1){--f}n=JP(a.d.I,o,d,f,j)}}else{if(b){if(j+1<=a.d.i){++j;while(!!a.d.v&&vkb(a.d.v,reb(j),0)!=-1&&j<a.d.i){++j}n=JP(a.d.I,o,d,f,j)}}else{c=true;if(f-1>0){--f;while(!!a.d.v&&vkb(a.d.v,reb(f),0)!=-1&&f>1){--f}n=JP(a.d.I,o,d,f,j)}}}if(!n){return}QX(a.c,n.col1,n.col2,n.row1,n.row2);kW(a.c,n.col1,n.col2,n.row1,n.row2);lW(a.c,n.row1,n.row2,n.col1,n.col2);zW(a.c,n.col1,n.col2,c)}else{if(i){k=i.row2;e=i.col2}else{k=m;e=l}if(b){++e;while(!!a.d.v&&vkb(a.d.v,reb(e),0)!=-1&&e<a.d.i){++e}}else{--l;while(!!a.d.v&&vkb(a.d.v,reb(l),0)!=-1&&l>1){--l}}if(l>0&&e<a.d.i){n=JP(a.d.I,m,k,l,e);if(n){a.c.C=true;ZW(a.c,true);sU(a.c);QX(a.c,n.col1,n.col2,n.row1,n.row2);OX(a.c,n.col1,n.col2,n.row1,n.row2,true)}}CW(a.c)}if(g!=a.c.yc.e||h!=a.c.yc.f||o!=a.c.yc.K||d!=a.c.yc.L){$9(a.d.W,a.c.yc.K,a.c.yc.e,a.c.yc.L,a.c.yc.f);pb(a.d.s,200)}}
function xW(a,b,c,d,e,f,g,h,i){var j,k,l,m,n,o,p,q,r,s,t,u,v,w,A;o=ukb((Hsb(0,h.a.length),h.a[0]),0).k;s=ukb(ukb(h,h.a.length-1),0).k;n=ukb((Hsb(0,h.a.length),h.a[0]),0).c;r=ukb((Hsb(0,h.a.length),h.a[0]),(Hsb(0,h.a.length),h.a[0]).a.length-1).c;A=new Akb;for(q=new Ykb(h);q.a<q.c.a.length;){u=Wkb(q);t=(Hsb(0,u.a.length),u.a[0]).k;if(b>0){if(t<d){if(s<e){t=++s;Xkb(q);A.a[A.a.length]=u}else{for(l=new Ykb(u);l.a<l.c.a.length;){k=Wkb(l);ah(k.d)}Xkb(q);continue}}}else if(b<0){if(t>e){if(o>d){t=--o;Xkb(q);A.a[A.a.length]=u}else{for(l=new Ykb(u);l.a<l.c.a.length;){k=Wkb(l);ah(k.d)}Xkb(q);continue}}}n=(Hsb(0,u.a.length),u.a[0]).c;r=ukb(u,u.a.length-1).c;w=new Akb;for(m=new Ykb(u);m.a<m.c.a.length;){k=Wkb(m);j=k.c;if(c>0){if(j<f){if(r<g){j=++r;Xkb(m);w.a[w.a.length]=k}else{ah(k.d);Xkb(m);continue}}}else if(c<0){if(j>g){if(n>f){j=--n;Xkb(m);w.a[w.a.length]=k}else{ah(k.d);Xkb(m);continue}}}(j!=k.c||t!=k.k)&&JM(k,j,t,wib(a.e,Yvb+j+Zvb+t))}if(c>0){for(l=new Ykb(w);l.a<l.c.a.length;){k=Wkb(l);u.a[u.a.length]=k}while(r<g){++r;k=new OM(a,r,t,wib(a.e,Yvb+r+Zvb+t));Vg(i,k.d);u.a[u.a.length]=k}}else if(c<0){for(l=new Ykb(w);l.a<l.c.a.length;){k=Wkb(l);Ksb(0,u.a.length);Asb(u.a,0,k)}while(n>f){--n;k=new OM(a,n,t,wib(a.e,Yvb+n+Zvb+t));Vg(i,k.d);Ksb(0,u.a.length);Asb(u.a,0,k)}}}if(b>0){for(v=new Ykb(A);v.a<v.c.a.length;){u=Wkb(v);h.a[h.a.length]=u}}else{for(v=new Ykb(A);v.a<v.c.a.length;){u=Wkb(v);Ksb(0,h.a.length);Asb(h.a,0,u)}}if(b>0){while(s<e){u=new Bkb(g-f+1);++s;for(p=f;p<=g;p++){k=new OM(a,p,s,wib(a.e,Yvb+p+Zvb+s));u.a[u.a.length]=k;Vg(i,k.d)}h.a[h.a.length]=u}}else if(b<0){while(o>d){u=new Akb;--o;for(p=f;p<=g;p++){k=new OM(a,p,o,wib(a.e,Yvb+p+Zvb+o));u.a[u.a.length]=k;Vg(i,k.d)}Ksb(0,h.a.length);Asb(h.a,0,u)}}JX(a,false)}
function NV(b,c){var d,e,f,g,h,i,j,k,l,m,n,o;k=WX(c);d=(Fh(),k).getAttribute(qub)||'';if(b.o&&d.indexOf('comment-overlay')==-1){b.o=false;JN(b.Q,false);if(M(b.Q,b.q)){DN(b.q);b.j=null;b.k=-1;b.n=-1}}if(d.indexOf(Pwb)!=-1||Peb(k.tagName,'input')||Peb(d,'floater')){return}o=b.Rc&&(Peb('s-top',d)||Peb(Kwb,d)||Peb(Mwb,d)||Peb(Lwb,d));if(BV(b,c)||o){Peb(Fub,c.type)?M$(b.a,c,b.rc,b.sc):b.xc&&lX(b,c)}else if(d.indexOf(Qwb)!=-1){Peb(d,Vvb)||Peb(d,Wvb)?pT(b.wb,jh(Jh(k))):pT(b.wb,d);m=b.wb.a;n=b.wb.b;try{j=uwb.length;if(!Peb(d.substr(d.length-j,j),uwb)){e=(h=nj($doc),b2(),c.type.indexOf(Dwb)!=-1?Qm(c.changedTouches[0])+h:_h(c.clientX||0)+h);f=(i=oj($doc),c.type.indexOf(Dwb)!=-1?Rm(c.changedTouches[0])+i:_h(c.clientY||0)+i);l=XU(b,e,f,JU(b,m,n));k=l.d;m=l.c;n=l.k}}catch(a){a=UD(a);if(Yq(a,81)){qrb(b.U,'SheetWidget:onSheetMouseDown - JSE while trying to find real event target, className:'+d)}else if(Yq(a,33)){qrb(b.U,'SheetWidget:onSheetMouseDown - IOOBE while trying to find real event target, className:'+d)}else throw VD(a)}c.stopPropagation();Eh.Wd(c);if(Peb(Fub,c.type)){VF(b.zc);M$(b.a,c,m,n)}else{b.zc.focus();b._&&!Zg(he(b.sb),k)&&H$(b.a,(g=_K(b.sb),g==null?'':g));if(!!c.ctrlKey||!!c.metaKey||!!c.shiftKey){F$(b.a,m,n,(Eh.ae(k),!!c.shiftKey),!!c.metaKey||!!c.ctrlKey,true);b.Jc=-1;b.Kc=-1}else{if(!!b.s&&xib(b.s,Yvb+b.wb.a+Zvb+b.wb.b)){Y$(b.a,m,n)}else{F$(b.a,m,n,(Eh.ae(k),!!c.shiftKey),!!c.metaKey||!!c.ctrlKey,false);b.xc=true;b.Jc=m;b.Kc=n;b.Hc=m<=b.ob&&n<=b.Sc;b.Ic=m>b.ob&&m<=b.xb&&n<=b.Sc;b.Gc=n>b.Sc&&n<=b.zb&&m<=b.ob;b.O=!b.Hc&&!b.Ic;b.P=!b.Hc&&!b.Gc;b.A=(h=nj($doc),b2(),c.type.indexOf(Dwb)!=-1?Qm(c.changedTouches[0])+h:_h(c.clientX||0)+h);b.B=(i=oj($doc),c.type.indexOf(Dwb)!=-1?Rm(c.changedTouches[0])+i:_h(c.clientY||0)+i);WF(b.zc)}}}}}
function Pd(){Pd=AE;Hc=new Gb;Gc=new Fb;Ic=new Hb;Jc=new Nb;Kc=new Ob;Lc=new Pb;Mc=new Qb;Nc=new Rb;Oc=new Sb;Pc=new Tb;Qc=new Ub;Rc=new Vb;Sc=new Wb;Tc=new Xb;Uc=new Yb;Vc=new Zb;Xc=new _b;Wc=new $b;Yc=new ac;Zc=new bc;$c=new ec;_c=new fc;bd=new hc;cd=new ic;ad=new gc;dd=new jc;ed=new kc;fd=new lc;gd=new mc;jd=new pc;ld=new rc;md=new sc;kd=new qc;hd=new nc;nd=new tc;od=new uc;pd=new vc;qd=new wc;rd=new zc;td=new Ec;sd=new Dc;ud=new Fc;xd=new Rd;yd=new Sd;wd=new Qd;zd=new Td;Ad=new Ud;Bd=new Vd;Cd=new Wd;Dd=new Xd;Ed=new Yd;Gd=new $d;Hd=new _d;Fd=new Zd;Id=new ae;Jd=new be;Kd=new ce;Ld=new de;Nd=new fe;Od=new ge;Md=new ee;vd=new Vnb;zib(vd,'region',ud);zib(vd,'alert',Gc);zib(vd,'dialog',Sc);zib(vd,Qtb,Hc);zib(vd,Rtb,Ic);zib(vd,'document',Uc);zib(vd,'article',Jc);zib(vd,'banner',Kc);zib(vd,Stb,Lc);zib(vd,'checkbox',Mc);zib(vd,'gridcell',Xc);zib(vd,Ttb,Nc);zib(vd,'group',Yc);zib(vd,'combobox',Oc);zib(vd,Utb,Pc);zib(vd,Vtb,Qc);zib(vd,Wtb,Rc);zib(vd,'list',ad);zib(vd,'directory',Tc);zib(vd,'form',Vc);zib(vd,'grid',Wc);zib(vd,'heading',Zc);zib(vd,'img',$c);zib(vd,Xtb,_c);zib(vd,'listbox',bd);zib(vd,'listitem',cd);zib(vd,'log',dd);zib(vd,'main',ed);zib(vd,'marquee',fd);zib(vd,'math',gd);zib(vd,'menu',hd);zib(vd,'menubar',jd);zib(vd,'menuitem',kd);zib(vd,Ytb,ld);zib(vd,_tb,pd);zib(vd,'radio',sd);zib(vd,Ztb,md);zib(vd,$tb,nd);zib(vd,'note',od);zib(vd,aub,qd);zib(vd,bub,rd);zib(vd,cub,td);zib(vd,'row',wd);zib(vd,'rowgroup',xd);zib(vd,'rowheader',yd);zib(vd,'search',Ad);zib(vd,'separator',Bd);zib(vd,'scrollbar',zd);zib(vd,'slider',Cd);zib(vd,dub,Dd);zib(vd,'status',Ed);zib(vd,'tab',Fd);zib(vd,'tablist',Gd);zib(vd,'tabpanel',Hd);zib(vd,'textbox',Id);zib(vd,'timer',Jd);zib(vd,'toolbar',Kd);zib(vd,'tooltip',Ld);zib(vd,'tree',Md);zib(vd,'treegrid',Nd);zib(vd,'treeitem',Od)}
function $bb(b){var c,d,e;b=bfb(b,(hpb(),fpb));this.i=b.indexOf('gecko')!=-1&&b.indexOf(Wxb)==-1&&b.indexOf(Izb)==-1;b.indexOf(' presto/')!=-1;this.r=b.indexOf(Izb)!=-1;this.s=!this.r&&b.indexOf('applewebkit')!=-1;this.e=b.indexOf(' chrome/')!=-1||b.indexOf(' crios/')!=-1;this.o=b.indexOf('opera')!=-1;this.j=b.indexOf('msie')!=-1&&!this.o&&b.indexOf('webtv')==-1;this.j=this.j||this.r;this.p=b.indexOf('phantomjs/')!=-1;this.g=b.indexOf(' firefox/')!=-1||b.indexOf('fxios/')!=-1;this.q=!this.e&&!this.j&&!this.p&&!this.g&&b.indexOf('safari')!=-1;if(b.indexOf(' edge/')!=-1){this.f=true;this.e=false;this.o=false;this.j=false;this.q=false;this.g=false;this.s=false;this.i=false;this.p=false}b.indexOf('chromeframe')!=-1;try{if(this.i){d=b.indexOf('rv:');if(d>=0){e=b.substr(d+3);e=Zeb(e,'(\\.[0-9]+).+','$1');this.a=beb(e)}}else if(this.s){e=_eb(b,b.indexOf('webkit/')+7);e=Zeb(e,'([0-9]+)[^0-9].+','$1');this.a=beb(e)}else if(this.r){e=_eb(b,b.indexOf(Izb)+8);e=Zeb(e,'([0-9]+\\.[0-9]+).*','$1');this.a=beb(e);this.a>7&&(this.a=7)}else this.f&&(this.a=0)}catch(a){a=UD(a);if(Yq(a,21)){vfb()}else throw VD(a)}try{if(this.j){if(b.indexOf('msie')==-1){d=b.indexOf('rv:');if(d>=0){c=d+3;this.d=Rbb(b,c);Xbb(this,this.d)}}else if(this.r){Zbb(this,dr(this.a)+4)}else{c=b.indexOf('msie ')+5;this.d=Rbb(b,c);Xbb(this,this.d)}}else if(this.g){c=b.indexOf(' firefox/');c!=-1?(c+=9):(c=b.indexOf(' fxios/')+7);this.d=Rbb(b,c);Xbb(this,this.d)}else if(this.e){c=b.indexOf(' chrome/');c!=-1?(c+=8):(c=b.indexOf(' crios/')+7);this.d=Rbb(b,c);Xbb(this,this.d)}else if(this.q){c=b.indexOf(' version/')+9;this.d=Rbb(b,c);Xbb(this,this.d)}else if(this.o){c=b.indexOf(' version/');c!=-1?(c+=9):(c=b.indexOf('opera/')+6);this.d=Rbb(b,c);Xbb(this,this.d)}else if(this.f){c=b.indexOf(' edge/')+6;this.d=Rbb(b,c);Xbb(this,this.d)}else if(this.p){c=b.indexOf(' phantomjs/')+11;this.d=Rbb(b,c);Xbb(this,this.d)}}catch(a){a=UD(a);if(Yq(a,21)){vfb()}else throw VD(a)}if(b.indexOf('windows ')!=-1){this.t=1;b.indexOf('windows phone')!=-1}else if(b.indexOf('android')!=-1){this.t=5;Sbb(this,b)}else if(b.indexOf('linux')!=-1){this.t=3}else if(b.indexOf('macintosh')!=-1||b.indexOf('mac osx')!=-1||b.indexOf('mac os x')!=-1){this.k=b.indexOf('ipad')!=-1;this.n=b.indexOf('iphone')!=-1;if(this.k||b.indexOf('ipod')!=-1||this.n){this.t=4;Vbb(this,b)}else{this.t=2}}else if(b.indexOf('; cros ')!=-1){this.t=6;Tbb(this,b)}}
function U2(a){s4(a.b,GB,null);s4(a.b,_A,GB);s4(a.b,TA,GB);s4(a.b,cB,GB);s4(a.b,dB,GB);s4(a.b,eB,GB);s4(a.b,fB,GB);s4(a.b,gB,GB);s4(a.b,hB,GB);s4(a.b,iB,GB);s4(a.b,LA,TA);s4(a.b,VA,LA);s4(a.b,jB,VA);m4(a.b,bA);n4(a.b,Zz,new $2);n4(a.b,bA,new x3);n4(a.b,_A,new I3);n4(a.b,jB,new K3);n4(a.b,cB,new M3);n4(a.b,dB,new O3);n4(a.b,eB,new Q3);n4(a.b,fB,new S3);n4(a.b,gB,new U3);n4(a.b,hB,new a3);n4(a.b,iB,new c3);q4(a.b,bA,'getWidget',new f4(Zz));q4(a.b,bA,'getState',new f4(jB));o4(a.b,Dz,byb,new f3);o4(a.b,Dz,cyb,new h3);o4(a.b,bA,dyb,new j3);o4(a.b,bA,eyb,new l3);o4(a.b,bA,fyb,new n3);V2(a.b);p4(a.b,gB,gyb,new f4(rB));p4(a.b,dB,'am',new f4(MB));p4(a.b,LA,hyb,new f4(MB));p4(a.b,LA,iyb,new f4(rB));p4(a.b,iB,jyb,new f4(AB));p4(a.b,dB,kyb,new f4(MB));p4(a.b,dB,'dayNames',new f4(dq(MB,1)));p4(a.b,LA,lyb,new f4(MB));p4(a.b,LA,myb,new f4(WA));p4(a.b,hB,nyb,new f4(AB));p4(a.b,hB,oyb,new f4(rB));p4(a.b,hB,pyb,new f4(MB));p4(a.b,hB,qyb,new f4(MB));p4(a.b,jB,ryb,new f4(rB));p4(a.b,TA,syb,new f4(rB));p4(a.b,LA,tyb,new f4(YA));p4(a.b,LA,uyb,new f4(MB));p4(a.b,dB,vyb,new f4(AB));p4(a.b,cB,wyb,new f4(AB));p4(a.b,_A,xyb,new f4(rB));p4(a.b,LA,gub,new f4(MB));p4(a.b,dB,yyb,new f4(MB));p4(a.b,LA,'id',new f4(MB));p4(a.b,jB,zyb,new f4(CB));p4(a.b,jB,Ayb,new f4(cB));p4(a.b,eB,Byb,new g4(Cyb,iq(dq(vz,1),atb,5,0,[new f4(dB)])));p4(a.b,jB,Dyb,new f4(eB));p4(a.b,iB,'maxWidth',new f4(AB));p4(a.b,gB,'mode',new f4(SA));p4(a.b,dB,Eyb,new f4(dq(MB,1)));p4(a.b,dB,'name',new f4(MB));p4(a.b,jB,Fyb,new g4(Gyb,iq(dq(vz,1),atb,5,0,[new f4(MB),new f4(fB)])));p4(a.b,fB,Hyb,new f4($A));p4(a.b,iB,'openDelay',new f4(AB));p4(a.b,jB,Iyb,new f4(MB));p4(a.b,jB,'pageState',new f4(_A));p4(a.b,gB,Jyb,new g4(Gyb,iq(dq(vz,1),atb,5,0,[new f4(MB),new f4(MB)])));p4(a.b,dB,'pm',new f4(MB));p4(a.b,jB,Kyb,new f4(AB));p4(a.b,fB,'postfix',new f4(MB));p4(a.b,fB,'prefix',new f4(MB));p4(a.b,LA,Lyb,new f4(MB));p4(a.b,jB,Myb,new f4(gB));p4(a.b,gB,'pushUrl',new f4(MB));p4(a.b,iB,Nyb,new f4(AB));p4(a.b,iB,Oyb,new f4(AB));p4(a.b,hB,Pyb,new f4(AB));p4(a.b,jB,Qyb,new f4(hB));p4(a.b,hB,Ryb,new f4(AB));p4(a.b,TA,Syb,new g4('java.util.Set',iq(dq(vz,1),atb,5,0,[new f4(MB)])));p4(a.b,TA,'resources',new g4(Gyb,iq(dq(vz,1),atb,5,0,[new f4(MB),new f4(UA)])));p4(a.b,cB,Tyb,new f4(AB));p4(a.b,dB,Uyb,new f4(dq(MB,1)));p4(a.b,dB,Vyb,new f4(dq(MB,1)));p4(a.b,LA,Wyb,new g4(Cyb,iq(dq(vz,1),atb,5,0,[new f4(MB)])));p4(a.b,jB,Xyb,new f4(AB));p4(a.b,jB,'theme',new f4(MB));p4(a.b,cB,Yyb,new f4(AB));p4(a.b,jB,Zyb,new f4(rB));p4(a.b,_A,'title',new f4(MB));p4(a.b,jB,$yb,new f4(iB));p4(a.b,dB,_yb,new f4(rB));p4(a.b,LA,hub,new f4(MB));r4(a.b,SA,new p3);r4(a.b,UA,new s3);r4(a.b,WA,new u3);r4(a.b,YA,new z3);r4(a.b,$A,new C3);r4(a.b,dq(MB,1),new F3);l4(a.b,bA,new c4(Dz,byb,iq(dq(MB,1),stb,2,6,[uyb,tyb])));l4(a.b,bA,new c4(Dz,cyb,iq(dq(MB,1),stb,2,6,[Syb])));l4(a.b,bA,new d4(dyb,iq(dq(MB,1),stb,2,6,['theme'])));l4(a.b,bA,new d4(eyb,iq(dq(MB,1),stb,2,6,[Zyb])));l4(a.b,bA,new d4(fyb,iq(dq(MB,1),stb,2,6,[zyb])))}
function W2(c){var d={setter:function(a,b){a.a=mdb(b)},getter:function(a){return pdb(a.a)}};c.Jf(gB,gyb,d);var d={setter:function(a,b){a.a=b},getter:function(a){return a.a}};c.Jf(dB,'am',d);var d={setter:function(a,b){a.db=b},getter:function(a){return a.db}};c.Jf(LA,hyb,d);var d={setter:function(a,b){a.eb=mdb(b)},getter:function(a){return pdb(a.eb)}};c.Jf(LA,iyb,d);var d={setter:function(a,b){a.a=b.Wf()},getter:function(a){return reb(a.a)}};c.Jf(iB,jyb,d);var d={setter:function(a,b){a.b=b},getter:function(a){return a.b}};c.Jf(dB,kyb,d);var d={setter:function(a,b){a.c=b},getter:function(a){return a.c}};c.Jf(dB,'dayNames',d);var d={noLayout:1,setter:function(a,b){a.fb=b},getter:function(a){return a.fb}};c.Jf(LA,lyb,d);var d={noLayout:1,setter:function(a,b){a.gb=b},getter:function(a){return a.gb}};c.Jf(LA,myb,d);var d={setter:function(a,b){a.a=b.Wf()},getter:function(a){return reb(a.a)}};c.Jf(hB,nyb,d);var d={setter:function(a,b){a.b=mdb(b)},getter:function(a){return pdb(a.b)}};c.Jf(hB,oyb,d);var d={setter:function(a,b){a.c=b},getter:function(a){return a.c}};c.Jf(hB,pyb,d);var d={setter:function(a,b){a.d=b},getter:function(a){return a.d}};c.Jf(hB,qyb,d);var d={setter:function(a,b){a.a=mdb(b)},getter:function(a){return pdb(a.a)}};c.Jf(jB,ryb,d);var d={setter:function(a,b){a.ob=mdb(b)},getter:function(a){return pdb(a.ob)}};c.Jf(TA,syb,d);var d={setter:function(a,b){a.hb=b},getter:function(a){return a.hb}};c.Jf(LA,tyb,d);var d={setter:function(a,b){a.ib=b},getter:function(a){return a.ib}};c.Jf(LA,uyb,d);var d={setter:function(a,b){a.d=b.Wf()},getter:function(a){return reb(a.d)}};c.Jf(dB,vyb,d);var d={setter:function(a,b){a.a=b.Wf()},getter:function(a){return reb(a.a)}};c.Jf(cB,wyb,d);var d={setter:function(a,b){a.a=mdb(b)},getter:function(a){return pdb(a.a)}};c.Jf(_A,xyb,d);var d={setter:function(a,b){a.jb=b},getter:function(a){return a.jb}};c.Jf(LA,gub,d);var d={setter:function(a,b){a.e=b},getter:function(a){return a.e}};c.Jf(dB,yyb,d);var d={setter:function(a,b){a.kb=b},getter:function(a){return a.kb}};c.Jf(LA,'id',d);var d={setter:function(a,b){a.b=b.Xf()},getter:function(a){return Beb(a.b)}};c.Jf(jB,zyb,d);var d={setter:function(a,b){a.c=b},getter:function(a){return a.c}};c.Jf(jB,Ayb,d);var d={setter:function(a,b){a.a=b},getter:function(a){return a.a}};c.Jf(eB,Byb,d);var d={setter:function(a,b){a.d=b},getter:function(a){return a.d}};c.Jf(jB,Dyb,d);var d={setter:function(a,b){a.b=b.Wf()},getter:function(a){return reb(a.b)}};c.Jf(iB,'maxWidth',d);var d={setter:function(a,b){a.b=b},getter:function(a){return a.b}};c.Jf(gB,'mode',d);var d={setter:function(a,b){a.f=b},getter:function(a){return a.f}};c.Jf(dB,Eyb,d);var d={setter:function(a,b){a.g=b},getter:function(a){return a.g}};c.Jf(dB,'name',d);var d={setter:function(a,b){a.e=b},getter:function(a){return a.e}};c.Jf(jB,Fyb,d);var d={setter:function(a,b){a.a=b},getter:function(a){return a.a}};c.Jf(fB,Hyb,d);var d={setter:function(a,b){a.c=b.Wf()},getter:function(a){return reb(a.c)}};c.Jf(iB,'openDelay',d);var d={setter:function(a,b){a.f=b},getter:function(a){return a.f}};c.Jf(jB,Iyb,d);var d={setter:function(a,b){a.g=b},getter:function(a){return a.g}};c.Jf(jB,'pageState',d);var d={setter:function(a,b){a.c=b},getter:function(a){return a.c}};c.Jf(gB,Jyb,d);var d={setter:function(a,b){a.i=b},getter:function(a){return a.i}};c.Jf(dB,'pm',d);var d={setter:function(a,b){a.i=b.Wf()},getter:function(a){return reb(a.i)}};c.Jf(jB,Kyb,d);var d={setter:function(a,b){a.b=b},getter:function(a){return a.b}};c.Jf(fB,'postfix',d);var d={setter:function(a,b){a.c=b},getter:function(a){return a.c}};c.Jf(fB,'prefix',d);var d={setter:function(a,b){a.lb=b},getter:function(a){return a.lb}};c.Jf(LA,Lyb,d);var d={setter:function(a,b){a.j=b},getter:function(a){return a.j}};c.Jf(jB,Myb,d);var d={setter:function(a,b){a.d=b},getter:function(a){return a.d}};c.Jf(gB,'pushUrl',d);var d={setter:function(a,b){a.d=b.Wf()},getter:function(a){return reb(a.d)}};c.Jf(iB,Nyb,d);var d={setter:function(a,b){a.e=b.Wf()},getter:function(a){return reb(a.e)}};c.Jf(iB,Oyb,d);var d={setter:function(a,b){a.e=b.Wf()},getter:function(a){return reb(a.e)}};c.Jf(hB,Pyb,d);var d={setter:function(a,b){a.k=b},getter:function(a){return a.k}};c.Jf(jB,Qyb,d);var d={setter:function(a,b){a.f=b.Wf()},getter:function(a){return reb(a.f)}};c.Jf(hB,Ryb,d);var d={noLayout:1,setter:function(a,b){a.pb=b},getter:function(a){return a.pb}};c.Jf(TA,Syb,d);var d={setter:function(a,b){a.qb=b},getter:function(a){return a.qb}};c.Jf(TA,'resources',d);var d={setter:function(a,b){a.b=b.Wf()},getter:function(a){return reb(a.b)}};c.Jf(cB,Tyb,d);var d={setter:function(a,b){a.j=b},getter:function(a){return a.j}};c.Jf(dB,Uyb,d);var d={setter:function(a,b){a.k=b},getter:function(a){return a.k}};c.Jf(dB,Vyb,d);var d={setter:function(a,b){a.mb=b},getter:function(a){return a.mb}};c.Jf(LA,Wyb,d);var d={noLayout:1,setter:function(a,b){a.n=b.Wf()},getter:function(a){return reb(a.n)}};c.Jf(jB,Xyb,d);var d={setter:function(a,b){a.o=b},getter:function(a){return a.o}};c.Jf(jB,'theme',d);var d={setter:function(a,b){a.c=b.Wf()},getter:function(a){return reb(a.c)}};c.Jf(cB,Yyb,d);var d={setter:function(a,b){a.p=mdb(b)},getter:function(a){return pdb(a.p)}};c.Jf(jB,Zyb,d)}
var Zsb='object',$sb='anonymous',_sb='fnStack',atb={3:1},btb='Unknown',ctb='boolean',dtb='number',etb='string',ftb=2147483647,gtb=-17592186044416,htb=17592186044416,itb=4194304,jtb=1048575,ktb='__noinit__',ltb={3:1,21:1,24:1,20:1},mtb={3:1,21:1,33:1,24:1,20:1},ntb='For input string: "',otb='null',ptb=-2147483648,qtb=16384,rtb='\\$',stb={3:1,42:1},ttb=65536,utb=65535,vtb={38:1,80:1},wtb={38:1,101:1},xtb={100:1},ytb={3:1,38:1,80:1,180:1},ztb={3:1,149:1},Atb={3:1,38:1,101:1},Btb='fromIndex: 0, toIndex: ',Ctb=', length: ',Dtb='Index: ',Etb=', Size: ',Ftb='fromIndex: ',Gtb=', toIndex: ',Htb='java.lang',Itb='com.google.gwt.core.client',Jtb='com.google.gwt.core.client.impl',Ktb='java.util',Ltb='java.util.stream',Mtb=3.141592653589793,Ntb='com.google.gwt.animation.client',Otb='com.google.gwt.user.client',Ptb='com.google.gwt.aria.client',Qtb='alertdialog',Rtb='application',Stb='button',Ttb='columnheader',Utb='complementary',Vtb='contentinfo',Wtb='definition',Xtb='link',Ytb='menuitemcheckbox',Ztb='menuitemradio',$tb='navigation',_tb='option',aub='presentation',bub='progressbar',cub='radiogroup',dub='spinbutton',eub='offsetWidth',fub='none',gub='height',hub='width',iub='Null widget handle. If you are creating a composite, ensure that initWidget() has been called.',jub='Style names cannot be empty',kub='aria-hidden',lub='com.google.gwt.user.client.ui',mub={18:1,14:1,9:1,16:1,19:1,12:1,13:1},nub='disabled',oub={18:1,14:1,9:1,60:1,73:1,16:1,19:1,12:1,13:1},pub='com.google.gwt.canvas.client',qub='class',rub={115:1},tub='CSS1Compat',uub='com.google.gwt.dom.client',vub='MouseEvents',wub='DOMImplStandard',xub=1000,yub='DOMImplMozilla',zub='position',Aub='fixed',Bub='absolute',Cub='DOMImplStandardBase',Dub='DOMImplWebkit',Eub='load',Fub='contextmenu',Gub='display',Hub='visibility',Iub='zIndex',Jub={54:1,15:1,3:1,6:1,4:1},Kub='HIDDEN',Lub={23:1,15:1,3:1,6:1,4:1},Mub='block',Nub={15:1,62:1,3:1,6:1,4:1},Oub={15:1,63:1,3:1,6:1,4:1},Pub={15:1,64:1,3:1,6:1,4:1},Qub={15:1,93:1,3:1,6:1,4:1},Rub={34:1,3:1,6:1,4:1},Sub={15:1,94:1,3:1,6:1,4:1},Tub='visible',Uub='hidden',Vub={15:1,55:1,3:1,6:1,4:1},Wub='com.google.web.bindery.event.shared',Xub='com.google.gwt.event.shared',Yub='com.google.gwt.event.dom.client',Zub='mouseup',$ub='TouchEvent',_ub='touchcancel',avb='ontouchstart',bvb='touchstart',cvb='com.google.gwt.event.logical.shared',dvb={89:1,3:1,21:1,24:1,20:1},evb='UmbrellaException',fvb=4194303,gvb=524288,hvb=1000000000,ivb='java.util.logging',jvb='com.google.gwt.logging.client',kvb='com.google.gwt.logging.impl',lvb='java.io',mvb='com.google.gwt.safehtml.shared',nvb='com.google.gwt.text.shared.testing',ovb=32768,pvb='DOMMouseScroll',qvb=131072,rvb=262144,svb=1048576,tvb=2097152,uvb=8388608,vvb=16777216,wvb=33554432,xvb=67108864,yvb={114:1},zvb='com.google.gwt.user.client.impl',Avb='__gwtLastUnhandledEvent',Bvb={18:1,14:1,9:1,16:1,31:1,19:1,12:1,13:1},Cvb='left',Dvb='top',Evb={18:1,14:1,9:1,16:1,179:1,19:1,12:1,13:1},Fvb={25:1},Gvb='bidiwrapped',Hvb='selected',Ivb='subMenuIcon-selected',Jvb='offsetHeight',Kvb='px',Lvb='0.0px',Mvb={27:1,182:1},Nvb='overflow',Ovb={18:1,14:1,9:1,16:1,31:1,19:1,134:1,12:1,13:1},Pvb={668:1,27:1},Qvb='value',Rvb={65:1,3:1,6:1,4:1},Svb='com.google.gwt.user.client.ui.impl',Tvb={145:1,147:1},Uvb='auto',Vvb='cell-comment-triangle',Wvb='cell-invalidformula-triangle',Xvb='pointerEvents',Yvb='col',Zvb=' row',$vb='com.vaadin.addon.spreadsheet.client',_vb='animate-in',awb='animate-out',bwb='marginLeft',cwb='marginTop',dwb='com.vaadin.client.widgets',ewb='com.vaadin.client.ui',fwb='spreadsheet-overlays',gwb=57.29577951308232,hwb='rotate(',iwb='webkitTransform',jwb='comment-overlay-separator',kwb='comment-overlay-line',lwb={181:1,27:1},mwb={18:1,14:1,9:1,16:1,31:1,19:1,12:1,13:1,96:1},nwb='backgroundColor',owb='border',pwb='2px solid ',qwb='borderRight',rwb='borderBottom',swb={9:1},twb='textAlign',uwb='merged-cell',vwb='com.vaadin.shared',wwb='There is no information about the state for ',xwb='. Did you remember to compile the right widgetset?',ywb={27:1,99:1,121:1,3:1},zwb='active',Awb='com.vaadin.shared.communication',Bwb={67:1,75:1,3:1},Cwb='popupbutton',Dwb='touch',Ewb='fill',Fwb='bottom-left',Gwb='top-left',Hwb='v-contextmenu',Iwb='bottom-right',Jwb='sheet-selection',Kwb='s-left',Lwb='s-right',Mwb='s-bottom',Nwb='square',Owb='fill-touch-square',Pwb='sheet',Qwb='cell',Rwb=16022015,Swb='sheet-image',Twb='paddingLeft',Uwb='paddingTop',Vwb='marginRight',Wwb='selected-tab',Xwb='.col',Ywb='.v-spreadsheet.',Zwb='cell-range',$wb='selected-cell-highlight',_wb='selected-row-header',axb='selected-column-header',bxb=' .sheet .cell.cell-range {',cxb=' .sheet .col',dxb='display:none;',exb=' .sheet .row',fxb='.notusedselector',gxb='custom-editor-cell',hxb=', .v-spreadsheet.',ixb={22:1,3:1},jxb='Hide column',kxb=' > div.ch.col',lxb='px;}',mxb=' > div.rh.row',nxb='resize-line',oxb='5555555555',pxb='text/css',qxb='ch col',rxb='<div class="header-resize-dnd-first" ><\/div><div class="header-resize-dnd-second" ><\/div>',sxb='rh row',txb='notfocused',uxb=' merged-cell',vxb=' while creating the cell styles',wxb='expandbutton',xxb='lineHeight',yxb='inactive',zxb='row-resizing',Axb='col-resizing',Bxb='header-resize-dnd-first',Cxb='header-resize-dnd-second',Dxb={148:1,27:1},Exb={717:1,27:1},Fxb={25:1,720:1,125:1},Gxb='workbookChangeToggle',Hxb='hiddenColumnIndexes',Ixb='hiddenRowIndexes',Jxb='verticalSplitPosition',Kxb='horizontalSplitPosition',Lxb='com.vaadin.client',Mxb='lock-format-columns',Nxb='lock-format-rows',Oxb='com.vaadin.addon.spreadsheet.shared',Pxb='com.vaadin.shared.ui',Qxb='-webkit-animation-name',Rxb='animation-name',Sxb='-moz-animation-name',Txb='-o-animation-name',Uxb='fakeelement',Vxb='animationend',Wxb='webkit',Xxb='com.vaadin.client.communication',Yxb='head',Zxb='stylesheet',$xb='com.vaadin.client.metadata',_xb={245:1,27:1},ayb='com.vaadin.ui.UI',byb='setErrorLevel',cyb='handleContextClickListenerChange',dyb='onThemeChange',eyb='onThoroughSizeChckChange',fyb='signalRoundTripCompleted',gyb='alwaysUseXhrForServerRequests',hyb='caption',iyb='captionAsHtml',jyb='closeTimeout',kyb='dateFormat',lyb='description',myb='descriptionContentMode',nyb='dialogGracePeriod',oyb='dialogModal',pyb='dialogText',qyb='dialogTextGaveUp',ryb='enableMobileHTML5DnD',syb='enabled',tyb='errorLevel',uyb='errorMessage',vyb='firstDayOfWeek',wyb='firstDelay',xyb='hasResizeListeners',yyb='hourMinuteDelimiter',zyb='latestDelayedCallbackID',Ayb='loadingIndicatorConfiguration',Byb='localeData',Cyb='java.util.List',Dyb='localeServiceState',Eyb='monthNames',Fyb='notificationConfigurations',Gyb='java.util.Map',Hyb='notificationRole',Iyb='overlayContainerLabel',Jyb='parameters',Kyb='pollInterval',Lyb='primaryStyleName',Myb='pushConfiguration',Nyb='quickOpenDelay',Oyb='quickOpenTimeout',Pyb='reconnectAttempts',Qyb='reconnectDialogConfiguration',Ryb='reconnectInterval',Syb='registeredEventListeners',Tyb='secondDelay',Uyb='shortDayNames',Vyb='shortMonthNames',Wyb='styles',Xyb='tabIndex',Yyb='thirdDelay',Zyb='thoroughSizeCheck',$yb='tooltipConfiguration',_yb='twelveHourClock',azb={32:1},bzb={148:1,246:1,247:1,27:1},czb='_vScrollTop',dzb='v-scrollable',ezb='v-label-undef-w',fzb='/favicon.ico',gzb='com.vaadin.client.ui.ui',hzb='com.vaadin.component.spreadsheet.client.js',izb='rowBufferSize',jzb='columnBufferSize',kzb='colGroupingData',lzb='rowGroupingData',mzb='colGroupingMax',nzb='rowGroupingMax',ozb='colGroupingInversed',pzb='rowGroupingInversed',qzb='cellStyleToCSSStyle',rzb='rowIndexToStyleIndex',szb='columnIndexToStyleIndex',tzb='lockedColumnIndexes',uzb='lockedRowIndexes',vzb='shiftedCellBorderStyles',wzb='conditionalFormattingStyles',xzb='verticalScrollPositions',yzb='horizontalScrollPositions',zzb='workbookProtected',Azb='hyperlinksTooltips',Bzb='displayGridlines',Czb='displayRowColHeadings',Dzb='infoLabelValue',Ezb='invalidFormulaErrorMessage',Fzb='lockFormatColumns',Gzb='lockFormatRows',Hzb='namedRanges',Izb='trident/',Jzb='WARNING',Kzb='com.vaadin.shared.ui.ui',Lzb=244140625,Mzb=1220703125,Nzb=0.3010299956639812,Ozb=4294967295,Pzb='BigInteger divide by zero',Qzb=4294967296,Rzb=1073741824,Szb={l:0,m:0,h:524288},Tzb='delete',Uzb={3:1,721:1},Vzb='locale',Wzb='default',Xzb='user.agent';var _,xE,sE,OD=-1;$wnd.goog=$wnd.goog||{};$wnd.goog.global=$wnd.goog.global||$wnd;yE();zE(1,null,{},K);_.Yc=function L(a){return J(this,a)};_.Zc=function N(){return this.pg};_.$c=function P(){return Qsb(this)};_._c=function R(){var a;return wdb(O(this))+'@'+(a=Q(this)>>>0,a.toString(16))};_.equals=function(a){return this.Yc(a)};_.hashCode=function(){return this.$c()};_.toString=function(){return this._c()};var Eg;zE(687,1,{});zE(308,687,{},Mg);_.Ld=function Ng(a){var b={},j;var c=[];a[_sb]=c;var d=arguments.callee.caller;while(d){var e=(Fg(),d.name||(d.name=Ig(d.toString())));c.push(e);var f=':'+e;var g=b[f];if(g){var h,i;for(h=0,i=g.length;h<i;h++){if(g[h]===d){return}}}(g||(b[f]=[])).push(d);d=d.caller}};_.Md=function Og(a){var b,c,d,e;d=(Fg(),a&&a[_sb]?a[_sb]:[]);c=d.length;e=fq(IB,atb,74,c,0,1);for(b=0;b<c;b++){e[b]=new Jeb(d[b],null,-1)}return e};zE(688,687,{});_.Ld=function Qg(a){};_.Nd=function Rg(a,b,c,d){return new Jeb(b,a+'@'+d,c<0?-1:c)};_.Md=function Sg(a){var b,c,d,e,f,g;e=Kg(a);f=fq(IB,atb,74,0,0,1);b=0;d=e.length;if(d==0){return f}g=Pg(this,e[0]);Peb(g.d,$sb)||(f[b++]=g);for(c=1;c<d;c++){f[b++]=Pg(this,e[c])}return f};zE(309,688,{},Tg);_.Nd=function Ug(a,b,c,d){return new Jeb(b,a,-1)};var Tq,Uq,Vq;zE(20,1,{3:1,20:1});_.Cd=function zf(a){return new Error(a)};_.Dd=function Bf(){return this.backingJsObject};_.Ed=function Cf(){var a;return a=Vrb(Wrb(ilb((this.j==null&&(this.j=fq(OB,atb,20,0,0,1)),this.j)),new yfb),urb(new Frb,new Drb,new Hrb,iq(dq(tD,1),atb,86,0,[(yrb(),wrb)]))),a.Yf(fq(GB,atb,1,a.size(),5,1))};_.Fd=function Df(){return this.e};_.Gd=function Ef(){return this.f};_.Hd=function Ff(){xf(this,Af(this.Cd(yf(this,this.f))));Gg(this)};_._c=function Hf(){return yf(this,this.Gd())};_.backingJsObject=ktb;_.g=false;_.k=true;zE(21,20,{3:1,21:1,20:1});zE(24,21,ltb,Kf,Lf);zE(33,24,mtb,hdb,idb);zE(185,33,mtb,jdb);Tq={3:1,306:1,6:1};zE(183,1,{},ydb);_.Qf=function zdb(a){var b;b=new ydb;b.f=4;a>1?(b.c=Gdb(this,a-1)):(b.c=this);return b};_.Rf=function Fdb(){vdb(this);return this.b};_.Sf=function Hdb(){return wdb(this)};_.Tf=function Jdb(){return xdb(this)};_.Uf=function Ldb(){return (this.f&4)!=0};_.Vf=function Mdb(){return (this.f&1)!=0};_._c=function Pdb(){return ((this.f&2)!=0?'interface ':(this.f&1)!=0?'':'class ')+(vdb(this),this.k)};_.f=0;var udb=1;zE(82,1,{3:1,82:1});var Sdb;Uq={3:1,6:1,307:1,82:1};zE(4,1,{3:1,6:1,4:1});_.ie=function Pj(a){return this.c-a.c};_.compareTo=function Oj(a){return this.c-a.c};_.equals=function Qj(a){return this===a};_.Yc=function(a){return this.equals(a)};_.hashCode=function Rj(){return Qsb(this)};_.$c=function(){return this.hashCode()};_.name=function Sj(){return this.b!=null?this.b:''+this.c};_.ordinal=function Tj(){return this.c};_.toString=function Uj(){return Mj(this)};_._c=function(){return this.toString()};_.c=0;zE(68,24,ltb,deb);zE(37,24,ltb,eeb,feb,geb);zE(90,82,{3:1,6:1,90:1,82:1},ieb);_.ie=function keb(a){return jeb(this.a,a.a)};_.Yc=function leb(a){return heb(this,a)};_.$c=function meb(){return this.a};_.Wf=function neb(){return this.a};_._c=function qeb(){return ''+this.a};_.a=0;zE(102,24,ltb,Mf);zE(818,1,{});zE(49,102,{3:1,21:1,49:1,24:1,20:1},Eeb,Feb,Geb);_.Cd=function Heb(a){return new TypeError(a)};Vq={3:1,184:1,6:1,2:1};zE(214,33,mtb,tfb);zE(249,1,{},yfb);_.Nf=function zfb(a){return xfb(a)};zE(29,24,ltb,Afb,Bfb);zE(689,1,{38:1});_.add=function Nhb(a){throw VD(new Bfb('Add not supported on this collection'))};_.addAll=function Ohb(a){return Ihb(this,a)};_.clear=function Phb(){var a;for(a=this.Ne();a.Xe();){a.Ye();a.Ze()}};_.contains=function Qhb(a){return Jhb(this,a,false)};_.containsAll=function Rhb(a){return Khb(this,a)};_.isEmpty=function Shb(){return this.size()==0};_.remove=function Thb(a){return Jhb(this,a,true)};_.removeAll=function Uhb(a){var b,c,d;Isb(a);b=false;for(c=this.Ne();c.Xe();){d=c.Ye();if(a.contains(d)){c.Ze();b=true}}return b};_.retainAll=function Vhb(a){var b,c,d;Isb(a);b=false;for(c=this.Ne();c.Xe();){d=c.Ye();if(!a.contains(d)){c.Ze();b=true}}return b};_.toArray=function Whb(){return this.Yf(fq(GB,atb,1,this.size(),5,1))};_.Yf=function Xhb(a){return Lhb(this,a)};_._c=function Yhb(){return Mhb(this)};zE(690,689,vtb);_.addAtIndex=function bjb(a,b){throw VD(new Bfb('Add not supported on this list'))};_.add=function cjb(a){this.addAtIndex(this.size(),a);return true};_.addAllAtIndex=function djb(a,b){var c,d,e;Isb(b);c=false;for(e=b.Ne();e.Xe();){d=e.Ye();this.addAtIndex(a++,d);c=true}return c};_.clear=function ejb(){this.ag(0,this.size())};_.Yc=function fjb(a){var b,c,d,e,f;if(a===this){return true}if(!Yq(a,80)){return false}f=a;if(this.size()!=f.size()){return false}e=f.Ne();for(c=this.Ne();c.Xe();){b=c.Ye();d=e.Ye();if(!(cr(b)===cr(d)||b!=null&&M(b,d))){return false}}return true};_.$c=function gjb(){return wlb(this)};_.indexOf=function hjb(a){return ajb(this,a)};_.Ne=function ijb(){return new rjb(this)};_.lastIndexOf=function jjb(a){var b;for(b=this.size()-1;b>-1;--b){if(opb(a,this.getAtIndex(b))){return b}}return -1};_.$f=function kjb(){return this._f(0)};_._f=function ljb(a){return new vjb(this,a)};_.removeAtIndex=function mjb(a){throw VD(new Bfb('Remove not supported on this list'))};_.ag=function njb(a,b){var c,d;d=this._f(a);for(c=a;c<b;++c){d.Ye();d.Ze()}};_.setAtIndex=function ojb(a,b){throw VD(new Bfb('Set not supported on this list'))};_.subList=function pjb(a,b){return new Bjb(this,a,b)};zE(200,1,{},rjb);_.Xe=function sjb(){return this.b<this.d.size()};_.Ye=function tjb(){Gsb(this.b<this.d.size());return this.d.getAtIndex(this.c=this.b++)};_.Ze=function ujb(){qjb(this)};_.b=0;_.c=-1;zE(310,200,{},vjb);_.Ze=function zjb(){qjb(this)};_.bg=function wjb(a){this.a.addAtIndex(this.b,a);++this.b;this.c=-1};_.cg=function xjb(){return this.b>0};_.dg=function yjb(){Gsb(this.b>0);return this.a.getAtIndex(this.c=--this.b)};_.eg=function Ajb(a){Msb(this.c!=-1);this.a.setAtIndex(this.c,a)};zE(311,690,vtb,Bjb);_.addAtIndex=function Cjb(a,b){Ksb(a,this.b);this.c.addAtIndex(this.a+a,b);++this.b};_.getAtIndex=function Djb(a){Hsb(a,this.b);return this.c.getAtIndex(this.a+a)};_.removeAtIndex=function Ejb(a){var b;Hsb(a,this.b);b=this.c.removeAtIndex(this.a+a);--this.b;return b};_.setAtIndex=function Fjb(a,b){Hsb(a,this.b);return this.c.setAtIndex(this.a+a,b)};_.size=function Gjb(){return this.b};_.a=0;_.b=0;zE(691,1,{149:1});_.getOrDefault=function hib(a,b){var c;return c=this.get(a),c==null&&!this.containsKey(a)?b:c};_.putIfAbsent=function nib(a,b){var c;return c=this.get(a),c!=null?c:this.put(a,b)};_.replace=function pib(a,b){return this.containsKey(a)?this.put(a,b):null};_.clear=function bib(){this.Zf().clear()};_.containsKey=function cib(a){return !!$hb(this,a,false)};_.containsValue=function dib(a){var b,c,d;for(c=this.Zf().Ne();c.Xe();){b=c.Ye();d=b.gg();if(cr(a)===cr(d)||a!=null&&M(a,d)){return true}}return false};_.Yc=function eib(a){var b,c,d;if(a===this){return true}if(!Yq(a,149)){return false}d=a;if(this.size()!=d.size()){return false}for(c=d.Zf().Ne();c.Xe();){b=c.Ye();if(!Zhb(this,b)){return false}}return true};_.get=function fib(a){return gib($hb(this,a,false))};_.$c=function iib(){return vlb(this.Zf())};_.isEmpty=function jib(){return this.size()==0};_.keySet=function kib(){return new Hjb(this)};_.put=function lib(a,b){throw VD(new Bfb('Put not supported on this map'))};_.putAll=function mib(a){_hb(this,a)};_.remove=function oib(a){return gib($hb(this,a,true))};_.size=function qib(){return this.Zf().size()};_._c=function rib(){var a,b,c;c=new aqb('{','}');for(b=this.Zf().Ne();b.Xe();){a=b.Ye();_pb(c,aib(this,a.fg())+'='+aib(this,a.gg()))}return !c.a?c.c:c.e.length==0?c.a.a:c.a.a+(''+c.e)};_.values=function sib(){return new Sjb(this)};zE(692,689,wtb);_.Yc=function Mib(a){var b;if(a===this){return true}if(!Yq(a,101)){return false}b=a;if(b.size()!=this.size()){return false}return Khb(this,b)};_.$c=function Nib(){return vlb(this)};_.removeAll=function Oib(a){var b,c,d,e;Isb(a);e=this.size();if(e<a.size()){for(b=this.Ne();b.Xe();){c=b.Ye();a.contains(c)&&b.Ze()}}else{for(d=a.Ne();d.Xe();){c=d.Ye();this.remove(c)}}return e!=this.size()};zE(58,692,wtb,Hjb);_.clear=function Ijb(){this.a.clear()};_.contains=function Jjb(a){return this.a.containsKey(a)};_.Ne=function Kjb(){var a;return a=this.a.Zf().Ne(),new Njb(a)};_.remove=function Ljb(a){if(this.a.containsKey(a)){this.a.remove(a);return true}return false};_.size=function Mjb(){return this.a.size()};zE(61,1,{},Njb);_.Xe=function Ojb(){return this.a.Xe()};_.Ye=function Pjb(){var a;return a=this.a.Ye(),a.fg()};_.Ze=function Qjb(){this.a.Ze()};zE(39,689,{38:1},Sjb);_.clear=function Tjb(){this.a.clear()};_.contains=function Ujb(a){return Rjb(this,a)};_.Ne=function Vjb(){var a;return a=this.a.Zf().Ne(),new Xjb(a)};_.size=function Wjb(){return this.a.size()};zE(51,1,{},Xjb);_.Xe=function Yjb(){return this.a.Xe()};_.Ye=function Zjb(){var a;return a=this.a.Ye(),a.gg()};_.Ze=function $jb(){this.a.Ze()};zE(318,1,xtb);_.Yc=function _jb(a){var b;if(!Yq(a,100)){return false}b=a;return opb(this.a,b.fg())&&opb(this.b,b.gg())};_.fg=function akb(){return this.a};_.gg=function bkb(){return this.b};_.$c=function ckb(){return ppb(this.a)^ppb(this.b)};_.hg=function dkb(a){var b;b=this.b;this.b=a;return b};_._c=function ekb(){return this.a+'='+this.b};zE(208,318,xtb,fkb);zE(10,690,{3:1,10:1,38:1,80:1,180:1},Akb,Bkb,Ckb);_.addAtIndex=function Dkb(a,b){qkb(this,a,b)};_.add=function Ekb(a){return rkb(this,a)};_.addAllAtIndex=function Fkb(a,b){var c,d;Ksb(a,this.a.length);c=b.toArray();d=c.length;if(d==0){return false}Bsb(this.a,a,c);return true};_.addAll=function Gkb(a){return skb(this,a)};_.clear=function Hkb(){this.a=fq(GB,atb,1,0,5,1)};_.contains=function Ikb(a){return vkb(this,a,0)!=-1};_.getAtIndex=function Jkb(a){return ukb(this,a)};_.indexOf=function Kkb(a){return vkb(this,a,0)};_.isEmpty=function Lkb(){return this.a.length==0};_.Ne=function Mkb(){return new Ykb(this)};_.lastIndexOf=function Nkb(a){return wkb(this,a,this.a.length-1)};_.removeAtIndex=function Okb(a){return xkb(this,a)};_.remove=function Pkb(a){return ykb(this,a)};_.ag=function Qkb(a,b){var c;Lsb(a,b,this.a.length);c=b-a;Csb(this.a,a,c)};_.setAtIndex=function Rkb(a,b){var c;c=(Hsb(a,this.a.length),this.a[a]);this.a[a]=b;return c};_.size=function Skb(){return this.a.length};_.toArray=function Tkb(){return ysb(this.a,this.a.length)};_.Yf=function Ukb(a){return zkb(this,a)};zE(7,1,{},Ykb);_.Xe=function Zkb(){return Vkb(this)};_.Ye=function $kb(){return Wkb(this)};_.Ze=function _kb(){Xkb(this)};_.a=0;_.b=-1;var rlb,slb,tlb;zE(385,690,ytb,ylb);_.contains=function zlb(a){return false};_.getAtIndex=function Alb(a){return Hsb(a,0),null};_.Ne=function Blb(){return ulb(),Flb(),Elb};_.$f=function Clb(){return ulb(),Flb(),Elb};_.size=function Dlb(){return 0};zE(386,1,{},Hlb);_.bg=function Ilb(a){throw VD(new Afb)};_.Xe=function Jlb(){return false};_.cg=function Klb(){return false};_.Ye=function Llb(){return Glb()};_.dg=function Mlb(){throw VD(new npb)};_.Ze=function Nlb(){throw VD(new eeb)};_.eg=function Olb(a){throw VD(new eeb)};var Elb;zE(388,691,ztb,Plb);_.containsKey=function Qlb(a){return false};_.containsValue=function Rlb(a){return false};_.Zf=function Slb(){return ulb(),tlb};_.get=function Tlb(a){return null};_.keySet=function Ulb(){return ulb(),tlb};_.size=function Vlb(){return 0};_.values=function Wlb(){return ulb(),rlb};zE(387,692,Atb,Xlb);_.contains=function Ylb(a){return false};_.Ne=function Zlb(){return ulb(),Flb(),Elb};_.size=function $lb(){return 0};zE(66,24,{3:1,21:1,24:1,20:1,66:1},npb);zE(152,1,{});_.kg=function Epb(a){qpb(this,a)};_.ig=function Cpb(){return this.c};_.jg=function Dpb(){return this.d};_.c=0;_.d=0;zE(254,152,{});zE(257,1,{});_.kg=function Qpb(a){qpb(this,a)};_.ig=function Opb(){return this.b};_.jg=function Ppb(){return this.d-this.c};_.b=0;_.c=0;_.d=0;zE(258,257,{},Spb);_.kg=function Tpb(a){Mpb(this,a)};_.lg=function Upb(a){return Npb(this,a)};zE(253,1,{},cqb);_.Nf=function dqb(a){return a};zE(86,4,{3:1,6:1,4:1,86:1},zrb);var vrb,wrb,xrb;zE(661,1,{},Brb);zE(251,1,{},Drb);_.Cf=function Erb(a,b){Crb(a,b)};zE(250,1,{},Frb);_.Of=function Grb(){return new Akb};zE(252,1,{},Hrb);zE(169,1,{});_.c=false;zE(95,169,{},$rb);zE(529,254,{},msb);_.lg=function nsb(a){return this.b.lg(new osb(this,a))};zE(533,1,{},osb);_.Pf=function psb(a){lsb(this.a,this.b,a)};zE(532,1,{},rsb);_.Pf=function ssb(a){qsb(this,a)};zE(536,1,{},usb);zE(537,1,{},wsb);_.Pf=function xsb(a){vsb(this,a)};zE(820,1,{});zE(816,1,{});var Psb=0;var Rsb,Ssb=0,Tsb;var GB=Bdb(Htb,'Object',1);var Is=Bdb(Itb,'JavaScriptObject$',0);var Ss=Bdb(Jtb,'StackTraceCreator/Collector',687);var Ps=Bdb(Jtb,'StackTraceCreator/CollectorLegacy',308);var Rs=Bdb(Jtb,'StackTraceCreator/CollectorModern',688);var Qs=Bdb(Jtb,'StackTraceCreator/CollectorModernNoSourceMap',309);var OB=Bdb(Htb,'Throwable',20);var vB=Bdb(Htb,'Exception',21);var HB=Bdb(Htb,'RuntimeException',24);var zB=Bdb(Htb,'IndexOutOfBoundsException',33);var qB=Bdb(Htb,'ArrayIndexOutOfBoundsException',185);var rB=Bdb(Htb,'Boolean',306);var sB=Bdb(Htb,'Class',183);var FB=Bdb(Htb,'Number',82);var tB=Bdb(Htb,'Double',307);var uB=Bdb(Htb,'Enum',4);var xB=Bdb(Htb,'IllegalArgumentException',68);var yB=Bdb(Htb,'IllegalStateException',37);var AB=Bdb(Htb,'Integer',90);var BB=Bdb(Htb,'JsException',102);var DB=Bdb(Htb,'NullPointerException',49);var MB=Bdb(Htb,'String',2);var LB=Bdb(Htb,'StringIndexOutOfBoundsException',214);var NB=Bdb(Htb,'Throwable/lambda$0$Type',249);var PB=Bdb(Htb,'UnsupportedOperationException',29);var SB=Bdb(Ktb,'AbstractCollection',689);var MC=Ddb(Ktb,'List');var ZB=Bdb(Ktb,'AbstractList',690);var WB=Bdb(Ktb,'AbstractList/IteratorImpl',200);var XB=Bdb(Ktb,'AbstractList/ListIteratorImpl',310);var YB=Bdb(Ktb,'AbstractList/SubList',311);var QC=Ddb(Ktb,'Map');var fC=Bdb(Ktb,'AbstractMap',691);var SC=Ddb(Ktb,'Set');var hC=Bdb(Ktb,'AbstractSet',692);var _B=Bdb(Ktb,'AbstractMap/1',58);var $B=Bdb(Ktb,'AbstractMap/1/1',61);var bC=Bdb(Ktb,'AbstractMap/2',39);var aC=Bdb(Ktb,'AbstractMap/2/1',51);var cC=Bdb(Ktb,'AbstractMap/AbstractEntry',318);var dC=Bdb(Ktb,'AbstractMap/SimpleEntry',208);var jC=Bdb(Ktb,'ArrayList',10);var iC=Bdb(Ktb,'ArrayList/1',7);var mC=Bdb(Ktb,'Collections/EmptyList',385);var lC=Bdb(Ktb,'Collections/EmptyListIterator',386);var nC=Bdb(Ktb,'Collections/EmptyMap',388);var oC=Bdb(Ktb,'Collections/EmptySet',387);var RC=Bdb(Ktb,'NoSuchElementException',66);var aD=Bdb(Ktb,'Spliterators/BaseSpliterator',152);var ZC=Bdb(Ktb,'Spliterators/AbstractSpliterator',254);var _C=Bdb(Ktb,'Spliterators/BaseArraySpliterator',257);var $C=Bdb(Ktb,'Spliterators/ArraySpliterator',258);var dD=Bdb('java.util.function','Function/lambda$0$Type',253);var tD=Cdb(Ltb,'Collector/Characteristics',86,Arb);var uD=Bdb(Ltb,'CollectorImpl',661);var vD=Bdb(Ltb,'Collectors/20methodref$add$Type',251);var wD=Bdb(Ltb,'Collectors/21methodref$ctor$Type',250);var xD=Bdb(Ltb,'Collectors/lambda$42$Type',252);var MD=Bdb(Ltb,'TerminatableStream',169);var LD=Bdb(Ltb,'StreamImpl',95);var HD=Bdb(Ltb,'StreamImpl/MapToObjSpliterator',529);var GD=Bdb(Ltb,'StreamImpl/MapToObjSpliterator/lambda$0$Type',533);var ID=Bdb(Ltb,'StreamImpl/ValueConsumer',532);var JD=Bdb(Ltb,'StreamImpl/lambda$4$Type',536);var KD=Bdb(Ltb,'StreamImpl/lambda$5$Type',537);zE(131,1,{});_.ad=function X(a){return (1+$wnd.Math.cos(Mtb+a*Mtb))/2};_.bd=function Y(){this.u&&this.cd()};_.cd=function Z(){this.ed(this.ad(1))};_.dd=function $(){this.ed(this.ad(0))};_.k=-1;_.o=false;_.p=false;_.r=-1;_.t=-1;_.u=false;var qr=Bdb(Ntb,'Animation',131);zE(327,1,{},bb);_.fd=function cb(a){ab(this,a)};var ir=Bdb(Ntb,'Animation/1',327);zE(711,1,{});var db;var pr=Bdb(Ntb,'AnimationScheduler',711);zE(176,1,{176:1});var jr=Bdb(Ntb,'AnimationScheduler/AnimationHandle',176);zE(648,711,{},eb);_.gd=function gb(a,b){var c;c=hb(a,b);return new ib(c)};var lr=Bdb(Ntb,'AnimationSchedulerImplStandard',648);zE(649,176,{176:1},ib);_.hd=function jb(){fb(this.a)};var kr=Bdb(Ntb,'AnimationSchedulerImplStandard/1',649);zE(650,711,{},mb);_.gd=function nb(a,b){var c;c=new Ab(this,a);rkb(this.a,c);this.a.a.length==1&&pb(this.b,16);return c};var or=Bdb(Ntb,'AnimationSchedulerImplTimer',650);zE(43,1,{});_.jd=function vb(a){if(a!=this.g){return}this.i||(this.j=null);this.kd()};_.g=0;_.i=false;_.j=null;var cv=Bdb(Otb,'Timer',43);zE(651,43,{},yb);_.kd=function zb(){lb(this.a)};var mr=Bdb(Ntb,'AnimationSchedulerImplTimer/1',651);zE(177,176,{176:1,177:1},Ab);_.hd=function Bb(){kb(this.b,this)};var nr=Bdb(Ntb,'AnimationSchedulerImplTimer/AnimationHandleImpl',177);zE(8,1,{});var js=Bdb(Ptb,'RoleImpl',8);zE(576,8,{},Fb);var rr=Bdb(Ptb,'AlertRoleImpl',576);zE(575,8,{},Gb);var sr=Bdb(Ptb,'AlertdialogRoleImpl',575);zE(577,8,{},Hb);var tr=Bdb(Ptb,'ApplicationRoleImpl',577);zE(244,1,{});var wr=Bdb(Ptb,'Attribute',244);zE(57,244,{},Lb);_.ld=function Mb(a){return a.a};var ur=Bdb(Ptb,'AriaValueAttribute',57);zE(578,8,{},Nb);var vr=Bdb(Ptb,'ArticleRoleImpl',578);zE(579,8,{},Ob);var xr=Bdb(Ptb,'BannerRoleImpl',579);zE(580,8,{},Pb);var yr=Bdb(Ptb,'ButtonRoleImpl',580);zE(581,8,{},Qb);var zr=Bdb(Ptb,'CheckboxRoleImpl',581);zE(582,8,{},Rb);var Ar=Bdb(Ptb,'ColumnheaderRoleImpl',582);zE(583,8,{},Sb);var Br=Bdb(Ptb,'ComboboxRoleImpl',583);zE(584,8,{},Tb);var Cr=Bdb(Ptb,'ComplementaryRoleImpl',584);zE(585,8,{},Ub);var Dr=Bdb(Ptb,'ContentinfoRoleImpl',585);zE(586,8,{},Vb);var Er=Bdb(Ptb,'DefinitionRoleImpl',586);zE(587,8,{},Wb);var Fr=Bdb(Ptb,'DialogRoleImpl',587);zE(588,8,{},Xb);var Gr=Bdb(Ptb,'DirectoryRoleImpl',588);zE(589,8,{},Yb);var Hr=Bdb(Ptb,'DocumentRoleImpl',589);zE(590,8,{},Zb);var Ir=Bdb(Ptb,'FormRoleImpl',590);zE(592,8,{},$b);var Jr=Bdb(Ptb,'GridRoleImpl',592);zE(591,8,{},_b);var Kr=Bdb(Ptb,'GridcellRoleImpl',591);zE(593,8,{},ac);var Lr=Bdb(Ptb,'GroupRoleImpl',593);zE(594,8,{},bc);var Mr=Bdb(Ptb,'HeadingRoleImpl',594);zE(175,1,{739:1,175:1},dc);var Nr=Bdb(Ptb,'Id',175);zE(595,8,{},ec);var Or=Bdb(Ptb,'ImgRoleImpl',595);zE(596,8,{},fc);var Pr=Bdb(Ptb,'LinkRoleImpl',596);zE(599,8,{},gc);var Qr=Bdb(Ptb,'ListRoleImpl',599);zE(597,8,{},hc);var Rr=Bdb(Ptb,'ListboxRoleImpl',597);zE(598,8,{},ic);var Sr=Bdb(Ptb,'ListitemRoleImpl',598);zE(600,8,{},jc);var Tr=Bdb(Ptb,'LogRoleImpl',600);zE(601,8,{},kc);var Ur=Bdb(Ptb,'MainRoleImpl',601);zE(602,8,{},lc);var Vr=Bdb(Ptb,'MarqueeRoleImpl',602);zE(603,8,{},mc);var Wr=Bdb(Ptb,'MathRoleImpl',603);zE(608,8,{},nc);var Xr=Bdb(Ptb,'MenuRoleImpl',608);zE(604,8,{},pc);var Yr=Bdb(Ptb,'MenubarRoleImpl',604);zE(607,8,{},qc);var Zr=Bdb(Ptb,'MenuitemRoleImpl',607);zE(605,8,{},rc);var $r=Bdb(Ptb,'MenuitemcheckboxRoleImpl',605);zE(606,8,{},sc);var _r=Bdb(Ptb,'MenuitemradioRoleImpl',606);zE(609,8,{},tc);var as=Bdb(Ptb,'NavigationRoleImpl',609);zE(610,8,{},uc);var bs=Bdb(Ptb,'NoteRoleImpl',610);zE(611,8,{},vc);var cs=Bdb(Ptb,'OptionRoleImpl',611);zE(612,8,{},wc);var ds=Bdb(Ptb,'PresentationRoleImpl',612);zE(44,244,{},xc);_.ld=function yc(a){return a==null?otb:DE(a)};var es=Bdb(Ptb,'PrimitiveValueAttribute',44);zE(613,8,{},zc);var fs=Bdb(Ptb,'ProgressbarRoleImpl',613);var Ac,Bc;zE(615,8,{},Dc);var gs=Bdb(Ptb,'RadioRoleImpl',615);zE(614,8,{},Ec);var hs=Bdb(Ptb,'RadiogroupRoleImpl',614);zE(616,8,{},Fc);var is=Bdb(Ptb,'RegionRoleImpl',616);var Gc,Hc,Ic,Jc,Kc,Lc,Mc,Nc,Oc,Pc,Qc,Rc,Sc,Tc,Uc,Vc,Wc,Xc,Yc,Zc,$c,_c,ad,bd,cd,dd,ed,fd,gd,hd,jd,kd,ld,md,nd,od,pd,qd,rd,sd,td,ud,vd,wd,xd,yd,zd,Ad,Bd,Cd,Dd,Ed,Fd,Gd,Hd,Id,Jd,Kd,Ld,Md,Nd,Od;zE(619,8,{},Qd);var ks=Bdb(Ptb,'RowRoleImpl',619);zE(617,8,{},Rd);var ls=Bdb(Ptb,'RowgroupRoleImpl',617);zE(618,8,{},Sd);var ms=Bdb(Ptb,'RowheaderRoleImpl',618);zE(620,8,{},Td);var ns=Bdb(Ptb,'ScrollbarRoleImpl',620);zE(621,8,{},Ud);var os=Bdb(Ptb,'SearchRoleImpl',621);zE(622,8,{},Vd);var ps=Bdb(Ptb,'SeparatorRoleImpl',622);zE(623,8,{},Wd);var qs=Bdb(Ptb,'SliderRoleImpl',623);zE(624,8,{},Xd);var rs=Bdb(Ptb,'SpinbuttonRoleImpl',624);zE(625,8,{},Yd);var ss=Bdb(Ptb,'StatusRoleImpl',625);zE(628,8,{},Zd);var ts=Bdb(Ptb,'TabRoleImpl',628);zE(626,8,{},$d);var us=Bdb(Ptb,'TablistRoleImpl',626);zE(627,8,{},_d);var vs=Bdb(Ptb,'TabpanelRoleImpl',627);zE(629,8,{},ae);var ws=Bdb(Ptb,'TextboxRoleImpl',629);zE(630,8,{},be);var xs=Bdb(Ptb,'TimerRoleImpl',630);zE(631,8,{},ce);var ys=Bdb(Ptb,'ToolbarRoleImpl',631);zE(632,8,{},de);var zs=Bdb(Ptb,'TooltipRoleImpl',632);zE(635,8,{},ee);var As=Bdb(Ptb,'TreeRoleImpl',635);zE(633,8,{},fe);var Bs=Bdb(Ptb,'TreegridRoleImpl',633);zE(634,8,{},ge);var Cs=Bdb(Ptb,'TreeitemRoleImpl',634);zE(12,1,{16:1,12:1});_.md=function we(){return je(this)};_.nd=function ye(){throw VD(new Afb)};_.od=function ze(a){pe(this,a)};_.pd=function Be(a,b){re(this,a,b)};_.qd=function Ee(a){ue(this,a)};_._c=function Fe(){if(!this.Xc){return '(null handle)'}return qh((CF(),this.Xc))};var aw=Bdb(lub,'UIObject',12);zE(13,12,mub);_.rd=function Re(){};_.sd=function Se(){};_.td=function Te(a){Je(this,a)};_.ud=function Ue(){return this.Tc};_.vd=function Ve(){Ke(this)};_.wd=function We(a){Le(this,a)};_.xd=function Xe(){Me(this)};_.yd=function Ye(){};_.zd=function Ze(){};_.Tc=false;_.Uc=0;var kw=Bdb(lub,'Widget',13);var wv=Ddb(lub,'Focusable');zE(209,13,oub);_.vd=function ef(){var a;Ke(this);a=PL((CF(),this.Xc));-1==a&&(this.Xc.tabIndex=0,undefined)};_.Ad=function ff(a){af(this,a)};_.Bd=function gf(a){cf(this,a)};var $e;var vv=Bdb(lub,'FocusWidget',209);zE(658,209,oub,jf);var hf;var Fs=Bdb(pub,'Canvas',658);zE(714,1,{});var Es=Bdb(pub,'Canvas/CanvasElementSupportDetector',714);zE(659,714,{},lf);var Ds=Bdb(pub,'Canvas/CanvasElementSupportDetectedMaybe',659);zE(211,1,{},of);_.a=0;var Gs=Bdb(Itb,'Duration',211);var pf=null;zE(351,102,ltb);var Ls=Bdb(Jtb,'JavaScriptExceptionBase',351);zE(81,351,{81:1,3:1,21:1,24:1,20:1},Qf);_.Gd=function Rf(){Pf(this);return this.c};_.Id=function Sf(){return cr(this.b)===cr(Nf)?null:this.b};var Nf;var Hs=Bdb(Itb,'JavaScriptException',81);var Js=Ddb(Itb,'RunAsyncCallback');zE(669,1,{});var Ks=Bdb(Itb,'Scheduler',669);var Xf=0,Yf=false,Zf,$f=0,_f=-1;zE(352,669,{});_.e=false;_.j=false;var mg;var Os=Bdb(Jtb,'SchedulerImpl',352);zE(353,1,{},Ag);_.Jd=function Bg(){this.a.e=true;qg(this.a);this.a.e=false;return this.a.j=rg(this.a)};var Ms=Bdb(Jtb,'SchedulerImpl/Flusher',353);zE(354,1,{},Cg);_.Jd=function Dg(){this.a.e&&zg(this.a.f,1);return this.a.j};var Ns=Bdb(Jtb,'SchedulerImpl/Rescuer',354);zE(115,1,rub);_.Rd=function Ph(a){return a.button|0};_.Td=function Qh(a){return a.currentTarget};_.Xd=function Rh(a){return _h(Mh(a))};_.Yd=function Sh(a){return _h(Nh(a))};_.Zd=function Th(a){return 0};_.$d=function Uh(a){return 0};_._d=function Vh(a){return Peb(a.compatMode,tub)?a.documentElement:a.body};_.ae=function Wh(a){var b='',c=a.firstChild;while(c){c.nodeType==1?(b+=this.ae(c)):c.nodeValue&&(b+=c.nodeValue);c=c.nextSibling}return b};_.be=function Xh(a){return _h(a.scrollLeft||0)};_.ce=function Yh(a){return a.tabIndex};_.ee=function Zh(a,b){while(a.firstChild){a.removeChild(a.firstChild)}b!=null&&a.appendChild(a.ownerDocument.createTextNode(b))};_.fe=function $h(a,b){a.scrollLeft=b};_.ge=function ai(a){return a.outerHTML};var Eh;var Xs=Bdb(uub,'DOMImpl',115);zE(700,115,rub);_.Od=function bi(a,b,c,d){var e=a.createEvent('HTMLEvents');e.initEvent(b,c,d);return e};_.Pd=function ci(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){n==1?(n=0):n==4?(n=1):(n=2);var p=a.createEvent(vub);p.initMouseEvent(b,c,d,null,e,f,g,h,i,j,k,l,m,n,o);return p};_.Qd=function di(a,b){a.dispatchEvent(b)};_.Rd=function ei(a){var b=a.button;if(b==1){return 4}else if(b==2){return 2}return 1};_.Sd=function fi(a){return a.charCode||0};_.Ud=function gi(a){return a.relatedTarget};_.Vd=function hi(a){return a.target};_.Wd=function ii(a){a.preventDefault()};_._d=function ji(a){if(a.scrollingElement){return a.scrollingElement}return this.he(a)};_.ae=function ki(a){return a.textContent};_.he=function li(a){return Peb(a.compatMode,tub)?a.documentElement:a.body};_.de=function mi(a,b){return a.contains(b)};_.ee=function ni(a,b){a.textContent=b||''};var Vs=Bdb(uub,wub,700);zE(476,700,rub,si);_.Ud=function ti(b){var c=b.relatedTarget;if(!c){return null}try{var d=c.nodeName;return c}catch(a){return null}};_.Xd=function ui(a){return pi(qj(a.ownerDocument),a)};_.Yd=function vi(a){return qi(qj(a.ownerDocument),a)};_.Zd=function wi(a){var b=$wnd.getComputedStyle(a.documentElement,null);if(b==null){return 0}return parseInt(b.marginLeft,10)+parseInt(b.borderLeftWidth,10)};_.$d=function xi(a){var b=$wnd.getComputedStyle(a.documentElement,null);if(b==null){return 0}return parseInt(b.marginTop,10)+parseInt(b.borderTopWidth,10)};_.be=function zi(a){var b;b=(oi==-2&&(oi=yi()),oi);if(!(b!=-1&&b>=1009000)&&ri(a)){return _h(a.scrollLeft||0)-(((a.scrollWidth||0)|0)-(a.clientWidth|0))}return _h(a.scrollLeft||0)};_.de=function Ai(a,b){return a===b||!!(a.compareDocumentPosition(b)&16)};_.fe=function Bi(a,b){var c;c=(oi==-2&&(oi=yi()),oi);!(c!=-1&&c>=1009000)&&ri(a)&&(b+=((a.scrollWidth||0)|0)-(a.clientWidth|0));a.scrollLeft=b};_.ge=function Ci(a){var b=a.ownerDocument;var c=a.cloneNode(true);var d=b.createElement('DIV');d.appendChild(c);outer=d.innerHTML;c.innerHTML='';return outer};var oi=-2;var Ts=Bdb(uub,yub,476);zE(701,700,rub);_.Td=function Ei(a){return a.currentTarget||$wnd};_.Xd=function Fi(a){var b,c;c=a.getBoundingClientRect&&a.getBoundingClientRect();b=c?c.left+Kh(this,a.ownerDocument):Gi(a);return Fh(),b|0};_.Yd=function Hi(a){var b,c,d;b=a.getBoundingClientRect&&a.getBoundingClientRect();c=b?b.top+Lh(this,a.ownerDocument):Ii(a);return Fh(),c|0};_.be=function Ji(a){if(!Qeb('body',(Fh(),a).tagName)&&Di(a)){return _h(a.scrollLeft||0)-(((a.scrollWidth||0)|0)-(a.clientWidth|0))}return _h(a.scrollLeft||0)};_.ce=function Ki(a){return typeof a.tabIndex!='undefined'?a.tabIndex:-1};_.fe=function Li(a,b){!Qeb('body',(Fh(),a).tagName)&&Di(a)&&(b+=((a.scrollWidth||0)|0)-(a.clientWidth|0));a.scrollLeft=b};var Us=Bdb(uub,Cub,701);zE(475,701,rub,Mi);_.Vd=function Ni(a){var b=a.target;b&&b.nodeType==3&&(b=b.parentNode);return b};_.he=function Oi(a){return a.body};var Ws=Bdb(uub,Dub,475);zE(54,4,Jub);var Vj,Wj,Xj,Yj,Zj;var bt=Cdb(uub,'Style/BorderStyle',54,ak);zE(428,54,Jub,bk);var Ys=Cdb(uub,'Style/BorderStyle/1',428,null);zE(429,54,Jub,ck);var Zs=Cdb(uub,'Style/BorderStyle/2',429,null);zE(430,54,Jub,dk);var $s=Cdb(uub,'Style/BorderStyle/3',430,null);zE(431,54,Jub,ek);var _s=Cdb(uub,'Style/BorderStyle/4',431,null);zE(432,54,Jub,fk);var at=Cdb(uub,'Style/BorderStyle/5',432,null);zE(23,4,Lub);var gk,hk,ik,jk,kk,lk,mk,nk,ok,pk,qk,rk,sk,tk,uk,vk,wk,xk,yk;var vt=Cdb(uub,'Style/Display',23,Bk);zE(433,23,Lub,Ck);_.je=function Dk(){return fub};var mt=Cdb(uub,'Style/Display/1',433,null);zE(442,23,Lub,Ek);_.je=function Fk(){return 'table-column-group'};var ct=Cdb(uub,'Style/Display/10',442,null);zE(443,23,Lub,Gk);_.je=function Hk(){return 'table-header-group'};var dt=Cdb(uub,'Style/Display/11',443,null);zE(444,23,Lub,Ik);_.je=function Jk(){return 'table-footer-group'};var et=Cdb(uub,'Style/Display/12',444,null);zE(445,23,Lub,Kk);_.je=function Lk(){return 'table-row-group'};var ft=Cdb(uub,'Style/Display/13',445,null);zE(446,23,Lub,Mk);_.je=function Nk(){return 'table-cell'};var gt=Cdb(uub,'Style/Display/14',446,null);zE(447,23,Lub,Ok);_.je=function Pk(){return 'table-column'};var ht=Cdb(uub,'Style/Display/15',447,null);zE(448,23,Lub,Qk);_.je=function Rk(){return 'table-row'};var it=Cdb(uub,'Style/Display/16',448,null);zE(449,23,Lub,Sk);_.je=function Tk(){return 'initial'};var jt=Cdb(uub,'Style/Display/17',449,null);zE(450,23,Lub,Uk);_.je=function Vk(){return 'flex'};var kt=Cdb(uub,'Style/Display/18',450,null);zE(451,23,Lub,Wk);_.je=function Xk(){return 'inline-flex'};var lt=Cdb(uub,'Style/Display/19',451,null);zE(434,23,Lub,Yk);_.je=function Zk(){return Mub};var nt=Cdb(uub,'Style/Display/2',434,null);zE(435,23,Lub,$k);_.je=function _k(){return 'inline'};var ot=Cdb(uub,'Style/Display/3',435,null);zE(436,23,Lub,al);_.je=function bl(){return 'inline-block'};var pt=Cdb(uub,'Style/Display/4',436,null);zE(437,23,Lub,cl);_.je=function dl(){return 'inline-table'};var qt=Cdb(uub,'Style/Display/5',437,null);zE(438,23,Lub,el);_.je=function fl(){return 'list-item'};var rt=Cdb(uub,'Style/Display/6',438,null);zE(439,23,Lub,gl);_.je=function hl(){return 'run-in'};var st=Cdb(uub,'Style/Display/7',439,null);zE(440,23,Lub,il);_.je=function jl(){return 'table'};var tt=Cdb(uub,'Style/Display/8',440,null);zE(441,23,Lub,kl);_.je=function ll(){return 'table-caption'};var ut=Cdb(uub,'Style/Display/9',441,null);zE(62,4,Nub);var ml,nl,ol,pl;var At=Cdb(uub,'Style/Overflow',62,sl);zE(452,62,Nub,tl);var wt=Cdb(uub,'Style/Overflow/1',452,null);zE(453,62,Nub,ul);var xt=Cdb(uub,'Style/Overflow/2',453,null);zE(454,62,Nub,vl);var yt=Cdb(uub,'Style/Overflow/3',454,null);zE(455,62,Nub,wl);var zt=Cdb(uub,'Style/Overflow/4',455,null);zE(63,4,Oub);var xl,yl,zl,Al;var Ft=Cdb(uub,'Style/Position',63,Dl);zE(456,63,Oub,El);var Bt=Cdb(uub,'Style/Position/1',456,null);zE(457,63,Oub,Fl);var Ct=Cdb(uub,'Style/Position/2',457,null);zE(458,63,Oub,Gl);var Dt=Cdb(uub,'Style/Position/3',458,null);zE(459,63,Oub,Hl);var Et=Cdb(uub,'Style/Position/4',459,null);zE(64,4,Pub);var Il,Jl,Kl,Ll;var Kt=Cdb(uub,'Style/TextAlign',64,Ol);zE(460,64,Pub,Pl);var Gt=Cdb(uub,'Style/TextAlign/1',460,null);zE(461,64,Pub,Ql);var Ht=Cdb(uub,'Style/TextAlign/2',461,null);zE(462,64,Pub,Rl);var It=Cdb(uub,'Style/TextAlign/3',462,null);zE(463,64,Pub,Sl);var Jt=Cdb(uub,'Style/TextAlign/4',463,null);zE(93,4,Qub);var Tl,Ul;var Nt=Cdb(uub,'Style/TextOverflow',93,Xl);zE(464,93,Qub,Yl);var Lt=Cdb(uub,'Style/TextOverflow/1',464,null);zE(465,93,Qub,Zl);var Mt=Cdb(uub,'Style/TextOverflow/2',465,null);zE(34,4,Rub);var $l,_l,am,bm,cm,dm,em,fm,gm;var Xt=Cdb(uub,'Style/Unit',34,jm);zE(419,34,Rub,km);var Ot=Cdb(uub,'Style/Unit/1',419,null);zE(420,34,Rub,lm);var Pt=Cdb(uub,'Style/Unit/2',420,null);zE(421,34,Rub,mm);var Qt=Cdb(uub,'Style/Unit/3',421,null);zE(422,34,Rub,nm);var Rt=Cdb(uub,'Style/Unit/4',422,null);zE(423,34,Rub,om);var St=Cdb(uub,'Style/Unit/5',423,null);zE(424,34,Rub,pm);var Tt=Cdb(uub,'Style/Unit/6',424,null);zE(425,34,Rub,qm);var Ut=Cdb(uub,'Style/Unit/7',425,null);zE(426,34,Rub,rm);var Vt=Cdb(uub,'Style/Unit/8',426,null);zE(427,34,Rub,sm);var Wt=Cdb(uub,'Style/Unit/9',427,null);zE(94,4,Sub);var tm,um;var $t=Cdb(uub,'Style/Visibility',94,xm);zE(466,94,Sub,ym);_.je=function zm(){return Tub};var Yt=Cdb(uub,'Style/Visibility/1',466,null);zE(467,94,Sub,Am);_.je=function Bm(){return Uub};var Zt=Cdb(uub,'Style/Visibility/2',467,null);zE(55,4,Vub);var Cm,Dm,Em,Fm,Gm;var eu=Cdb(uub,'Style/WhiteSpace',55,Jm);zE(468,55,Vub,Km);var _t=Cdb(uub,'Style/WhiteSpace/1',468,null);zE(469,55,Vub,Lm);var au=Cdb(uub,'Style/WhiteSpace/2',469,null);zE(470,55,Vub,Mm);var bu=Cdb(uub,'Style/WhiteSpace/3',470,null);zE(471,55,Vub,Nm);var cu=Cdb(uub,'Style/WhiteSpace/4',471,null);zE(472,55,Vub,Om);var du=Cdb(uub,'Style/WhiteSpace/5',472,null);zE(683,1,{});_._c=function Tm(){return 'An event type'};var tw=Bdb(Wub,'Event',683);zE(684,683,{});_.me=function Vm(){return this.le()};_.ne=function Wm(){this.e=false;this.f=null};_.e=false;var Hu=Bdb(Xub,'GwtEvent',684);zE(695,684,{});_.le=function _m(){return this.oe()};_.me=function an(){return this.oe()};var Xm;var ju=Bdb(Yub,'DomEvent',695);zE(543,695,{},dn);_.ke=function en(a){a.pe(this)};_.le=function gn(){return bn};_.me=function hn(){return bn};_.oe=function fn(){return bn};var bn;var fu=Bdb(Yub,'BlurEvent',543);zE(696,695,{});var lu=Bdb(Yub,'HumanInputEvent',696);zE(697,696,{});var tu=Bdb(Yub,'MouseEvent',697);zE(418,697,{},ln);_.ke=function mn(a){a.qe(this)};_.le=function on(){return jn};_.me=function pn(){return jn};_.oe=function nn(){return jn};var jn;var gu=Bdb(Yub,'ClickEvent',418);zE(482,695,{},sn);_.ke=function tn(a){a.re(this)};_.le=function vn(){return qn};_.me=function wn(){return qn};_.oe=function un(){return qn};var qn;var hu=Bdb(Yub,'ContextMenuEvent',482);zE(294,1,{});_.$c=function yn(){return this.c};_._c=function zn(){return 'Event type'};_.c=0;var xn=0;var rw=Bdb(Wub,'Event/Type',294);zE(50,294,{},An);var Gu=Bdb(Xub,'GwtEvent/Type',50);zE(40,50,{40:1},Bn);var iu=Bdb(Yub,'DomEvent/Type',40);zE(542,695,{},En);_.ke=function Fn(a){bT(a,this)};_.le=function Hn(){return Cn};_.me=function In(){return Cn};_.oe=function Gn(){return Cn};var Cn;var ku=Bdb(Yub,'FocusEvent',542);zE(706,695,{});var ou=Bdb(Yub,'KeyEvent',706);zE(707,706,{});var mu=Bdb(Yub,'KeyCodeEvent',707);zE(541,707,{},Ln);_.ke=function Mn(a){cT(a,this)};_.le=function On(){return Jn};_.me=function Pn(){return Jn};_.oe=function Nn(){return Jn};var Jn;var nu=Bdb(Yub,'KeyDownEvent',541);zE(652,706,{},Sn);_.ke=function Tn(a){dT(a,this)};_.le=function Vn(){return Qn};_.me=function Wn(){return Qn};_.oe=function Un(){return Qn};var Qn;var pu=Bdb(Yub,'KeyPressEvent',652);zE(655,707,{},Zn);_.ke=function $n(a){a.se(this)};_.le=function ao(){return Xn};_.me=function bo(){return Xn};_.oe=function _n(){return Xn};var Xn;var qu=Bdb(Yub,'KeyUpEvent',655);zE(654,695,{},fo);_.ke=function go(a){N5(a.a.b)};_.le=function io(){return co};_.me=function jo(){return co};_.oe=function ho(){return co};var co;var ru=Bdb(Yub,'LoadEvent',654);zE(540,697,{},mo);_.ke=function no(a){a.te(this)};_.le=function po(){return ko};_.me=function qo(){return ko};_.oe=function oo(){return ko};var ko;var su=Bdb(Yub,'MouseDownEvent',540);zE(653,697,{},to);_.ke=function uo(a){a.ue(this)};_.le=function wo(){return ro};_.me=function xo(){return ro};_.oe=function vo(){return ro};var ro;var uu=Bdb(Yub,'MouseUpEvent',653);zE(554,1,{},Ao);var vu=Bdb(Yub,'PrivateMap',554);zE(710,696,{});var Bo;var zu=Bdb(Yub,$ub,710);zE(647,710,{},Eo);_.ke=function Fo(a){!!a.b&&ob(a.b)};_.le=function Ho(){return Co};_.me=function Io(){return Co};_.oe=function Go(){return Co};var Co;var wu=Bdb(Yub,'TouchCancelEvent',647);zE(645,710,{},Lo);_.ke=function Mo(a){a.ve(this)};_.le=function Oo(){return Jo};_.me=function Po(){return Jo};_.oe=function No(){return Jo};var Jo;var xu=Bdb(Yub,'TouchEndEvent',645);zE(553,1,{},Qo);_.a=false;var yu=Bdb(Yub,'TouchEvent/TouchSupportDetector',553);zE(646,710,{},To);_.ke=function Uo(a){a.we(this)};_.le=function Wo(){return Ro};_.me=function Xo(){return Ro};_.oe=function Vo(){return Ro};var Ro;var Au=Bdb(Yub,'TouchMoveEvent',646);zE(644,710,{},$o);_.ke=function _o(a){a.xe(this)};_.le=function bp(){return Yo};_.me=function cp(){return Yo};_.oe=function ap(){return Yo};var Yo;var Bu=Bdb(Yub,'TouchStartEvent',644);zE(305,684,{},ep);_.ke=function fp(a){a.ye(this)};_.me=function ip(){return dp};_.le=function hp(){return dp};_.a=false;var dp;var Cu=Bdb(cvb,'AttachEvent',305);zE(544,684,{},kp);_.ke=function lp(a){a.ze(this)};_.me=function op(){return jp};_.le=function np(){return jp};var jp;var Du=Bdb(cvb,'CloseEvent',544);zE(557,684,{},qp);_.ke=function rp(a){a.Ae(this)};_.me=function up(){return pp};_.le=function tp(){return pp};var pp;var Eu=Bdb(cvb,'ResizeEvent',557);zE(574,684,{},wp);_.ke=function xp(a){a.a.v&&a.a.Te()};_.me=function Ap(){return vp};_.le=function zp(){return vp};var vp;var Fu=Bdb(cvb,'ValueChangeEvent',574);zE(76,1,{14:1},Ep,Fp);_.td=function Gp(a){Cp(this,a)};var Ju=Bdb(Xub,'HandlerManager',76);zE(693,1,{});var sw=Bdb(Wub,'EventBus',693);zE(357,693,{});_.b=0;_.c=false;var xw=Bdb(Wub,'SimpleEventBus',357);zE(358,357,{},Rp);var Iu=Bdb(Xub,'HandlerManager/Bus',358);zE(550,1,{},Sp);var Ku=Bdb(Xub,'LegacyHandlerWrapper',550);zE(89,24,dvb,Tp);var yw=Bdb(Wub,evb,89);zE(196,89,dvb,Vp);var Lu=Bdb(Xub,evb,196);zE(109,4,{109:1,3:1,6:1,4:1},bq);var Zp,$p,_p;var Mu=Cdb('com.google.gwt.i18n.client','HasDirection/Direction',109,cq);var kq;var Oq,Pq,Qq,Rq;zE(110,1,{110:1});var fD=Bdb(ivb,'Handler',110);zE(265,110,{110:1},JE);_.Be=function KE(a){var b,c;if(!window.console||(GE(this),ptb>a.a.Wf())){return}b=VE(this.a,a);c=a.a.Wf();c>=(nqb(),xub)?(window.console.error(b),undefined):c>=900?(window.console.warn(b),undefined):c>=800?(window.console.info(b),undefined):(window.console.log(b),undefined)};var Nu=Bdb(jvb,'ConsoleLogHandler',265);zE(266,110,{110:1},LE);_.Be=function ME(a){return};var Ou=Bdb(jvb,'DevelopmentModeLogHandler',266);var NE;var Ru=Bdb(jvb,'LogConfiguration',null);zE(264,1,{},QE);var Pu=Bdb(jvb,'LogConfiguration/1',264);zE(263,1,{},UE);var Qu=Bdb(jvb,'LogConfiguration/LogConfigurationImplRegular',263);zE(708,1,{});var eD=Bdb(ivb,'Formatter',708);zE(709,708,{});var Tu=Bdb(kvb,'FormatterImpl',709);zE(242,709,{},WE);_.a=false;var Su=Bdb(jvb,'TextLogFormatter',242);zE(671,1,{});var mB=Bdb(lvb,'OutputStream',671);zE(190,671,{},XE);var lB=Bdb(lvb,'FilterOutputStream',190);zE(153,190,{},YE);_.Ce=function ZE(a){};var nB=Bdb(lvb,'PrintStream',153);zE(638,153,{},$E);_.Ce=function _E(a){ofb(this.a,a);ofb(this.a,'\n')};var Uu=Bdb(kvb,'StackTracePrintStream',638);zE(563,1,{},dF);var Vu=Bdb(mvb,'SafeHtmlBuilder',563);zE(146,1,{734:1,146:1,3:1},eF);_.Yc=function fF(a){if(!Yq(a,146)){return false}return Peb(this.a,a.a)};_.$c=function gF(){return Wsb(this.a)};_._c=function hF(){return 'safe: "'+this.a+'"'};var Wu=Bdb(mvb,'SafeHtmlString',146);var iF,jF,kF,lF,mF,nF;zE(119,1,{737:1,119:1},qF);_.Yc=function rF(a){if(!Yq(a,119)){return false}return Peb(this.a,a.a)};_.$c=function sF(){return Wsb(this.a)};_._c=function tF(){return 'safe: "'+this.a+'"'};var Xu=Bdb(mvb,'SafeUriString',119);zE(713,1,{});var Yu=Bdb('com.google.gwt.text.shared','AbstractRenderer',713);zE(657,1,{},wF);var vF;var Zu=Bdb(nvb,'PassthroughParser',657);zE(656,713,{},yF);var xF;var $u=Bdb(nvb,'PassthroughRenderer',656);var zF=null,AF,BF;var RF;zE(328,684,{},bG);_.ke=function cG(a){a.De(this);$F.c=false};_.me=function fG(){return ZF};_.le=function eG(){return ZF};_.ne=function gG(){_F(this)};_.a=false;_.b=false;_.c=false;var ZF,$F;var _u=Bdb(Otb,'Event/NativePreviewEvent',328);var hG,iG;zE(548,1,{14:1},oG);_.td=function pG(a){Cp(this.a,a)};var av=Bdb(Otb,'History/HistoryEventSource',548);zE(549,1,{},qG);var bv=Bdb(Otb,'History/HistoryImpl',549);var sG=false,tG,uG,vG=0,wG=0,xG=false;zE(356,684,{},IG);_.ke=function JG(a){null.sg()};_.me=function LG(){return GG};_.le=function KG(){return GG};var GG;var dv=Bdb(Otb,'Window/ClosingEvent',356);var MG='',NG;zE(159,76,{14:1},RG);var ev=Bdb(Otb,'Window/WindowHandlers',159);zE(114,1,yvb);var SG=false;var jv=Bdb(zvb,'DOMImpl',114);zE(698,114,yvb);_.Ee=function iH(a,b){var c=0,d=a.firstChild;while(d){if(d.nodeType==1){if(b==c)return d;++c}d=d.nextSibling}return null};_.Fe=function jH(a){var b=0,c=a.firstChild;while(c){c.nodeType==1&&++b;c=c.nextSibling}return b};_.Ge=function lH(){bH()};_.He=function mH(a,b,c){var d=0,e=a.firstChild,f=null;while(e){if(e.nodeType==1){if(d==c){f=e;break}++d}e=e.nextSibling}a.insertBefore(b,f)};_.Ie=function nH(a){UG(this);YG==a&&(YG=null)};_.Je=function oH(a){UG(this);YG=a};_.Ke=function pH(a,b){var c,d;UG(this);c=XG;d=c[b]||c['_default_'];a.addEventListener(b,d,false)};_.Le=function qH(a,b){UG(this);cH(a,b)};var XG,YG,ZG,$G,_G;var hv=Bdb(zvb,wub,698);zE(473,698,yvb,tH);_.Ge=function uH(){bH();sH()};_.Le=function vH(a,b){UG(this);cH(a,b);b&qvb&&a.addEventListener(pvb,(aH(),$G),false)};var fv=Bdb(zvb,yub,473);zE(699,698,yvb);var gv=Bdb(zvb,Cub,699);zE(474,699,yvb,wH);var iv=Bdb(zvb,Dub,474);zE(170,1,{170:1},AH);_.Me=function BH(){return $wnd.location.hash};var lv=Bdb(zvb,'WindowImpl',170);zE(551,170,{170:1},CH);_.Me=function DH(){var a=$wnd.location.href;var b=a.indexOf('#');return b>0?a.substring(b):''};var kv=Bdb(zvb,'WindowImplMozilla',551);zE(682,13,Bvb);_.rd=function FH(){UH(this,(SH(),QH))};_.sd=function GH(){UH(this,(SH(),RH))};var Mv=Bdb(lub,'Panel',682);zE(154,682,Bvb);_.Ne=function KH(){return new GL(this.o)};_.Oe=function LH(a){return IH(this,a)};var rv=Bdb(lub,'ComplexPanel',154);zE(349,154,Bvb);_.Oe=function PH(a){return NH(this,a)};var mv=Bdb(lub,'AbsolutePanel',349);zE(277,196,dvb,TH);var QH,RH;var pv=Bdb(lub,'AttachDetachException',277);zE(278,1,{},VH);_.Pe=function WH(a){a.vd()};var nv=Bdb(lub,'AttachDetachException/1',278);zE(279,1,{},XH);_.Pe=function YH(a){a.xd()};var ov=Bdb(lub,'AttachDetachException/2',279);zE(477,154,Bvb);var qv=Bdb(lub,'CellPanel',477);zE(686,13,Evb);_.ud=function eI(){return dI(this)};_.vd=function fI(){bI(this);if(this.Uc!=-1){Qe(this.bb,this.Uc);this.Uc=-1}this.bb.vd();CF();this.Xc.__listener=this;gp(this,true)};_.wd=function gI(a){Le(this,a);this.bb.wd(a)};_.xd=function hI(){try{gp(this,false)}finally{this.bb.xd()}};_.nd=function iI(){ne(this,this.bb.nd());return CF(),this.Xc};var sv=Bdb(lub,'Composite',686);zE(637,1,{},lI);_.c=false;var tv=Bdb(lub,'DirectionalTextHelper',637);zE(88,154,Bvb,nI);var uv=Bdb(lub,'FlowPanel',88);zE(130,682,Bvb);_.Qe=function tI(){return CF(),this.Xc};_.Ne=function uI(){return new VK(this)};_.Oe=function vI(a){return pI(this,a)};_.Re=function wI(a){qI(this,a)};var Yv=Bdb(lub,'SimplePanel',130);var xI;var EI,FI,GI;zE(237,13,mub);var Fv=Bdb(lub,'LabelBase',237);zE(552,237,mub);var Gv=Bdb(lub,'Label',552);zE(144,552,mub,CI,DI);var xv=Bdb(lub,'HTML',144);var JI;zE(702,1,{});var yv=Bdb(lub,'HasHorizontalAlignment/AutoHorizontalAlignmentConstant',702);zE(141,702,{},II);var zv=Bdb(lub,'HasHorizontalAlignment/HorizontalAlignmentConstant',141);zE(167,1,{},LI);var Av=Bdb(lub,'HasVerticalAlignment/VerticalAlignmentConstant',167);zE(240,13,mub,QI);_.wd=function RI(a){CF();TG((Fh(),a).type)==ovb&&!!this.a&&(this.Xc[Avb]='',undefined);Le(this,a)};_.yd=function SI(){TI(this.a,this)};var Ev=Bdb(lub,'Image',240);zE(572,1,{});_.a=null;var Cv=Bdb(lub,'Image/State',572);zE(573,1,Fvb,UI);_.Kd=function VI(){var a;if(this.b.a!=this.a||this!=this.a.a){return}this.a.a=null;if(!this.b.Tc){WI(this.b)[Avb]=Eub;return}a=Vi($doc);eh(WI(this.b),a)};var Bv=Bdb(lub,'Image/State/1',573);zE(241,572,{},XI);var Dv=Bdb(lub,'Image/UnclippedState',241);zE(523,209,oub,fJ);var Hv=Bdb(lub,'ListBox',523);zE(138,13,mub,xJ);_.Se=function zJ(){(yI(),xI).af((CF(),this.Xc))};_.wd=function AJ(a){var b,c;b=kJ(this,(CF(),(Fh(),Eh).Vd(a)));switch(TG(a.type)){case 1:{(yI(),xI).af(this.Xc);!!b&&jJ(this,b,true);break}case 16:{!!b&&nJ(this,b,true);break}case 32:{!!b&&nJ(this,null,false);break}case 2048:{sJ(this);break}case 128:{c=a.keyCode|0;c=c;switch(c){case 37:rJ(this);a.stopPropagation();Eh.Wd(a);break;case 39:qJ(this);a.stopPropagation();Eh.Wd(a);break;case 38:pJ(this);a.stopPropagation();Eh.Wd(a);break;case 40:oJ(this);a.stopPropagation();Eh.Wd(a);break;case 27:tJ(this,null);a.stopPropagation();Eh.Wd(a);break;case 9:tJ(this,null);break;case 13:if(!sJ(this)){jJ(this,this.g,true);a.stopPropagation();Eh.Wd(a)}}break}}Le(this,a)};_.xd=function BJ(){Me(this)};_.c=false;_.e=true;_.i=false;var Kv=Bdb(lub,'MenuBar',138);zE(403,1,Fvb,CJ);_.Kd=function DJ(){this.a.Kd()};var Iv=Bdb(lub,'MenuBar/1',403);zE(404,1,{722:1,27:1},EJ);_.pe=function FJ(a){tJ(this.a,null)};var Jv=Bdb(lub,'MenuBar/2',404);zE(97,12,{16:1,97:1,12:1},IJ,JJ);_.Ad=function KJ(a){a?re(this,xe((CF(),this.Xc))+'-'+nub,false):re(this,xe((CF(),this.Xc))+'-'+nub,true);this.b=a};_.b=true;var Lv=Bdb(lub,'MenuItem',97);zE(108,130,Bvb);_.Qe=function bK(){return LJ.cf(GF((CF(),this.Xc)))};_.md=function cK(){return LJ.df((CF(),CF(),lh(this.Xc)))};_.Te=function dK(){this.Ue(false)};_.Ue=function eK(a){QJ(this)};_.zd=function fK(){this.M&&uK(this.L,false,true)};_.od=function gK(a){UJ(this,a)};_.Ve=function hK(a,b){VJ(this,a,b)};_.Re=function iK(a){XJ(this,a)};_.qd=function jK(a){YJ(this,a)};_.u=false;_.v=false;_.F=false;_.G=false;_.H=0;_.I=false;_.K=false;_.M=false;_.N=0;var LJ;var Sv=Bdb(lub,'PopupPanel',108);zE(323,1,{718:1,27:1},lK);_.Ae=function mK(a){kK()};var Nv=Bdb(lub,'PopupPanel/1',323);zE(324,1,Mvb,nK);_.De=function oK(a){TJ(this.a,a)};var Ov=Bdb(lub,'PopupPanel/3',324);zE(325,1,{728:1,27:1},pK);var Pv=Bdb(lub,'PopupPanel/4',325);zE(321,131,{},vK);_.cd=function wK(){rK(this)};_.dd=function xK(){this.d=OJ(this.a);this.e=PJ(this.a);he(this.a).style[Nvb]=Uub;tK(this,(1+$wnd.Math.cos(Mtb))/2)};_.ed=function yK(a){tK(this,a)};_.a=null;_.b=false;_.c=false;_.d=0;_.e=-1;_.i=false;var Rv=Bdb(lub,'PopupPanel/ResizeAnimation',321);zE(322,43,{},zK);_.kd=function AK(){this.a.g=null;T(this.a,200,Wf())};var Qv=Bdb(lub,'PopupPanel/ResizeAnimation/1',322);zE(134,349,Ovb,KK);var GK,HK,IK;var Wv=Bdb(lub,'RootPanel',134);zE(350,1,{},PK);_.Pe=function QK(a){a.ud()&&a.xd()};var Tv=Bdb(lub,'RootPanel/1',350);zE(213,1,Pvb,RK);_.ze=function SK(a){MK()};var Uv=Bdb(lub,'RootPanel/2',213);zE(212,134,Ovb,TK);var Vv=Bdb(lub,'RootPanel/DefaultRootPanel',212);zE(326,1,{},VK);_.Ye=function XK(){return UK(this)};_.Xe=function WK(){return this.a};_.Ze=function YK(){!!this.b&&pI(this.c,this.b)};_.a=false;_.b=null;var Xv=Bdb(lub,'SimplePanel/1',326);zE(524,209,oub);_.wd=function dL(a){var b;b=(CF(),TG((Fh(),a).type));(b&896)!=0?Le(this,a):Le(this,a)};_.yd=function eL(){};var gw=Bdb(lub,'ValueBoxBase',524);zE(234,524,oub);var $v=Bdb(lub,'TextBoxBase',234);zE(566,234,oub);var Zv=Bdb(lub,'TextArea',566);zE(143,234,oub,hL);var _v=Bdb(lub,'TextBox',143);zE(65,4,Rvb);var jL,kL,lL,mL;var fw=Cdb(lub,'ValueBoxBase/TextAlignment',65,pL);zE(525,65,Rvb,qL);var bw=Cdb(lub,'ValueBoxBase/TextAlignment/1',525,null);zE(526,65,Rvb,rL);var cw=Cdb(lub,'ValueBoxBase/TextAlignment/2',526,null);zE(527,65,Rvb,sL);var dw=Cdb(lub,'ValueBoxBase/TextAlignment/3',527,null);zE(528,65,Rvb,tL);var ew=Cdb(lub,'ValueBoxBase/TextAlignment/4',528,null);zE(478,477,Bvb,wL);_.Oe=function xL(a){return vL(this,a)};var hw=Bdb(lub,'VerticalPanel',478);zE(513,1,{},DL);_.Ne=function EL(){return new GL(this)};_.c=0;var jw=Bdb(lub,'WidgetCollection',513);zE(233,1,{},GL);_.Ye=function IL(){return FL(this)};_.Xe=function HL(){return this.b<this.c.c};_.Ze=function JL(){if(!this.a){throw VD(new eeb)}this.c.b.Oe(this.a);--this.b;this.a=null};_.b=0;var iw=Bdb(lub,'WidgetCollection/WidgetIterator',233);zE(145,1,{145:1},QL);_.$e=function RL(a){a.blur()};_._e=function SL(){var a;a=Qi($doc);a.tabIndex=0;return a};_.af=function TL(a){a.focus()};var ML,NL;var nw=Bdb(Svb,'FocusImpl',145);zE(147,145,Tvb,WL);_._e=function XL(){return YL(UL?UL:(UL=VL()))};var UL;var mw=Bdb(Svb,'FocusImplStandard',147);zE(639,147,Tvb,ZL);_.$e=function $L(a){$wnd.setTimeout(function(){a.blur()},0)};_.af=function _L(a){$wnd.setTimeout(function(){a.focus()},0)};var lw=Bdb(Svb,'FocusImplSafari',639);zE(172,1,{172:1},aM);_.bf=function bM(){return Qi($doc)};_.cf=function cM(a){return a};_.df=function dM(a){return Jh((Fh(),a))};_.ef=function eM(a,b){a.style['clip']=b};var qw=Bdb(Svb,'PopupImpl',172);zE(555,172,{172:1},hM);_.bf=function iM(){var a;a=(CF(),Qi($doc));if(fM){a.innerHTML='<div><\/div>';Z1((ng(),mg),new nM(a))}return a};_.cf=function jM(a){return fM?Ih((Fh(),a)):a};_.df=function kM(a){return fM?a:Jh((Fh(),a))};_.ef=function mM(a,b){a.style['clip']=b;a.style[Gub]=(zk(),fub);a.style[Gub]=''};var fM=false;var pw=Bdb(Svb,'PopupImplMozilla',555);zE(556,1,Fvb,nM);_.Kd=function oM(){this.a.style[Nvb]=(ql(),Uvb)};var ow=Bdb(Svb,'PopupImplMozilla/1',556);zE(359,1,{},uM);var uw=Bdb(Wub,'SimpleEventBus/1',359);zE(360,1,{719:1},vM);_.Kd=function wM(){Jp(this.a,this.d,this.c,this.b)};var vw=Bdb(Wub,'SimpleEventBus/2',360);zE(361,1,{719:1},xM);_.Kd=function yM(){Lp(this.a,this.d,this.c,this.b)};var ww=Bdb(Wub,'SimpleEventBus/3',361);zE(53,1,{53:1},NM,OM);_.ff=function PM(){return r$(this.n.a,this.c)};_.gf=function QM(){uh(this.d,Yvb+this.c+Zvb+this.k+' cell '+this.b)};_.b='cs0';_.c=0;_.f=false;_.g=true;_.i=false;_.k=0;var Dw=Bdb($vb,'Cell',53);zE(112,1,{112:1},RM);_.Yc=function SM(a){var b;if(this===a){return true}if(a==null){return false}if(!Yq(a,112)){return false}b=a;return this.d==b.d&&this.a==b.a&&opb(reb(this.c),reb(b.c))&&opb(reb(this.b),reb(b.b))};_.$c=function TM(){return blb(iq(dq(GB,1),atb,1,5,[this.d,this.a,reb(this.c),reb(this.b)]))};_.b=0;_.c=0;var zw=Bdb($vb,'Cell/CellValueStyleKey',112);zE(160,108,Bvb);_.Te=function kN(){$M(this,false)};_.Ue=function lN(a){$M(this,a)};_.vd=function mN(){var a,b;b=VM;if(b){a=b.jf();Vg(a,(CF(),this.Xc))}Ke(this)};_.xd=function nN(){Me(this);!!this.t&&ah(this.t)};_.od=function oN(a){cN(this,a)};_.Ve=function pN(a,b){eN(this,a,b)};_.hf=function qN(a){(CF(),this.Xc).style[Hub]=a?Tub:Uub;!!this.t&&(this.t.style[Hub]=a?Tub:Uub,undefined)};_.qd=function rN(a){fN(this,a)};var UM=20000,VM,WM=-1,XM=-1;var hA=Bdb(dwb,'Overlay',160);zE(135,160,Bvb);_.jf=function uN(){sN(this);rrb(trb(xdb(this.pg)),'Could not determine ApplicationConnection for Overlay. Overlay will be attached directly to the root panel');return he((JK(),NK()))};var Wz=Bdb(ewb,'VOverlay',135);zE(113,135,Bvb,xN,yN,zN);_.jf=function AN(){var a;return a=(CF(),$doc.getElementById(fwb)),!a?(JK(),$doc.body):a};var ky=Bdb($vb,'SpreadsheetOverlay',113);zE(165,113,{18:1,14:1,9:1,16:1,31:1,19:1,12:1,13:1,165:1},ON);_.Te=function PN(){DN(this)};_.hf=function QN(a){(CF(),this.Xc).style[Hub]=a?Tub:Uub;!!this.t&&(this.t.style[Hub]=a?Tub:Uub,undefined);this.i.style[Hub]=(a?(vm(),um):(vm(),tm)).je()};_.b=0;_.d=0;_.k=0;_.n=0;var Bw=Bdb($vb,'CellComment',165);zE(395,1,lwb,RN);_.qe=function SN(a){LV(this.b,this.a)};var Aw=Bdb($vb,'CellComment/1',395);zE(191,1,{191:1,3:1},TN);_.equals=function UN(a){var b;if(this===a){return true}if(a==null){return false}if(Cw!=O(a)){return false}b=a;if(this.col!=b.col){return false}if(this.row!=b.row){return false}return true};_.Yc=function(a){return this.equals(a)};_.hashCode=function VN(){var a;a=this.row+((this.col+1)/2|0);return 31*(this.col+a*a)};_.$c=function(){return this.hashCode()};_.toString=function WN(){return ofb(ofb(ofb(lfb(ofb(lfb(ofb(new qfb,'r'),this.row),'c'),this.col),this.cellStyle),'|'),this.value).a};_._c=function(){return this.toString()};_.cellStyle='cs0';_.col=0;_.isPercentage=false;_.locked=false;_.needsMeasure=false;_.row=0;var Cw=Bdb($vb,'CellData',191);zE(96,88,mwb);_.wd=function aO(a){(Fh(),Eh).Wd(a);a.stopPropagation();if(Eh.Rd(a)==1){this.c.qf(this.lf(),this.e,!this.b);YN(this,!this.b)}};_.b=false;_.d=0;_.e=0;_.f=false;_.g=0;_.i=0;_.j=0;_.k=0;_.n=0;var Ww=Bdb($vb,'GroupingWidget',96);zE(238,96,mwb,bO);_.kf=function cO(){var a;a=new bO(this.e,this.c);XN(this,a);return a};_.lf=function dO(){return true};_.mf=function eO(a){(CF(),this.Xc).style[bwb]=a+(hm(),Kvb);this.i=a};_.nf=function fO(a,b){this.k=9+b*18;this.g=a;(CF(),this.Xc).style[Dvb]=this.k+(hm(),Kvb);this.Xc.style[Cvb]=a+Kvb};_.pf=function gO(a){(CF(),this.Xc).style[hub]=a+(hm(),Kvb);this.n=a};var Ew=Bdb($vb,'ColumnGrouping',238);zE(640,1,{},kO);var Fw=Bdb($vb,'CopyPasteHandlerImpl',640);zE(567,566,{18:1,27:1,14:1,182:1,9:1,60:1,73:1,16:1,19:1,12:1,13:1},oO);_.De=function pO(a){var b;b=a.d;UF((Fh(),b).type)==128&&mO(this,b)};var Iw=Bdb($vb,'CopyPasteTextBox',567);zE(568,1,{},qO);_.Jd=function rO(){FU(this.a.c);he(this.a).style[Cvb]=(hm(),'-1000.0px');yj(this.b)==67?this.a.a:yj(this.b)==88&&iO(this.a.a);return false};var Gw=Bdb($vb,'CopyPasteTextBox/1',568);zE(569,1,{},sO);_.Jd=function tO(){var a,b;a=(b=_K(this.a),b==null?'':b);jO(this.a.a,a);FU(this.a.c);return false};var Hw=Bdb($vb,'CopyPasteTextBox/2',569);zE(377,686,Evb,fP);_.f=false;_.g=false;_.k=-1;_.n=-1;_.o=-1;_.p=-1;_.q=-1;_.s=-1;_.u=false;_.v=false;_.A=null;var uO;var Vw=Bdb($vb,'FormulaBarWidget',377);zE(378,1,swb,hP);_.wd=function iP(a){bL(this.a.a,bJ(this.a.B));aP(this.a)};var Mw=Bdb($vb,'FormulaBarWidget/1',378);zE(383,1,Fvb,jP);_.Kd=function kP(){if(this.a.f){this.a.s=-1;this.a.q=ZK(this.a.e);yO(this.a)}};var Jw=Bdb($vb,'FormulaBarWidget/10',383);zE(384,43,{},lP);_.kd=function mP(){this.a.d=null};var Kw=Bdb($vb,'FormulaBarWidget/11',384);zE(220,1,Fvb,nP);_.Kd=function oP(){var a;if(!this.a.f){return}MO(this.a,(a=_K(this.a.e),a==null?'':a));yO(this.a)};var Lw=Bdb($vb,'FormulaBarWidget/12',220);zE(379,1,swb,pP);_.wd=function qP(a){var b,c,d;d=(CF(),TG((Fh(),a).type));if(d==512){b=a.keyCode|0;if(b==13){aP(this.a);bP(this.a,(c=_K(this.a.a),c==null?'':c));bf(this.a.a,false)}else if(b==27){PO(this.a);FU(this.a.t.V)}}else if(d==2048){d0(this.a.t,true);he(this.a.a).style[twb]=(Ml(),Cvb)}else{d0(this.a.t,false);he(this.a.a).style[twb]=''}};var Nw=Bdb($vb,'FormulaBarWidget/2',379);zE(380,1,swb,rP);_.wd=function sP(a){var b;switch(CF(),TG((Fh(),a).type)){case 2048:if(this.a.f&&this.a.e==this.a.w){this.a.f=false;zO(this.a,this.a.j)}else{d0(this.a.t,true);this.a.c=(b=_K(this.a.j),b==null?'':b);V$(this.a.t);zO(this.a,this.a.j)}break;case 4096:if(!this.a.f){d0(this.a.t,false);U$(this.a.t,(b=_K(this.a.j),b==null?'':b))}break;case 128:GO(this.a,a);break;case gvb:case 256:AO(this.a);dP(this.a,true);RO(this.a);break;case 8:this.a.f&&dP(this.a,true);}};var Ow=Bdb($vb,'FormulaBarWidget/3',380);zE(216,1,Fvb,tP);_.Kd=function uP(){var a,b,c,d;if(!this.a.f){return}d=(c=_K(this.a.e),c==null?'':c);b=ZK(this.a.e);a=b>0?(Osb(b-1,d.length),d.charCodeAt(b-1)):0;this.a.g=false;a==40||a==43||a==45||a==47||a==42?(this.a.g=true):a==61&&d.length==1&&(this.a.g=true)};var Pw=Bdb($vb,'FormulaBarWidget/4',216);zE(381,1,Fvb,vP);_.Kd=function wP(){var a;bf(this.a.e,true);YO(he(this.a.e),this.a.q,0);MO(this.a,(a=_K(this.a.e),a==null?'':a));yO(this.a)};var Qw=Bdb($vb,'FormulaBarWidget/5',381);zE(217,43,{},xP);_.kd=function yP(){var a;X$(this.a.t,(a=_K(this.a.j),a==null?'':a))};var Rw=Bdb($vb,'FormulaBarWidget/6',217);zE(218,1,Fvb,zP);_.Kd=function AP(){var a;X$(this.a.t,(a=_K(this.a.j),a==null?'':a))};var Sw=Bdb($vb,'FormulaBarWidget/7',218);zE(219,1,Fvb,BP);_.Kd=function CP(){var a;!!this.a.e&&(a=_K(this.a.e),a==null?'':a).length==0&&(this.a.e==this.a.w?_O(this.a):$O(this.a))};var Tw=Bdb($vb,'FormulaBarWidget/8',219);zE(382,1,Fvb,DP);_.Kd=function EP(){var a,b;if(!this.a.f){b=(a=_K(this.b),a==null?'':a);if(Peb(b.substr(0,1),'=')||Peb(b.substr(0,1),'+')){this.a.f=true;this.a.e=this.b;MO(this.a,b);yO(this.a)}}};var Uw=Bdb($vb,'FormulaBarWidget/9',382);zE(171,53,{53:1,171:1},FP);_.ff=function GP(){return this.d.clientWidth|0};_.gf=function HP(){uh(this.d,Yvb+this.c+Zvb+this.k+' cell '+this.b+' '+uwb)};var Xw=Bdb($vb,'MergedCell',171);zE(71,1,{71:1,3:1},IP);_.col1=0;_.col2=0;_.id=0;_.row1=0;_.row2=0;var Yw=Bdb($vb,'MergedRegion',71);zE(192,1,{192:1,3:1},MP);_.col=0;_.dx=0;_.dy=0;_.height=0;_.row=0;_.type='IMAGE';_.width=0;var KP='COMPONENT',LP='IMAGE';var Zw=Bdb($vb,'OverlayInfo',192);zE(564,143,oub,NP);_.wd=function OP(a){var b;CF();TG((Fh(),a).type)==gvb&&Z1((ng(),mg),new PP(this));b=TG(a.type);(b&896)!=0?Le(this,a):Le(this,a)};var _w=Bdb($vb,'PasteAwareTextBox',564);zE(565,1,Fvb,PP);_.Kd=function QP(){jV(this.a.a)};var $w=Bdb($vb,'PasteAwareTextBox/1',565);var ax=Ddb($vb,'PopupButtonClientRpc');var MA=Ddb(vwb,'Connector');zE(268,1,ywb);_.rf=function _P(){return RP(this)};_.sf=function aQ(a){return UP(this,a)};_.tf=function bQ(){return VP(this)};_.uf=function dQ(a){YP(this,a)};_.vf=function eQ(a){$P(this,a)};_.H=true;var Fz=Bdb(ewb,'AbstractConnector',268);zE(269,268,ywb);_.tf=function uQ(){return this.xf()};_.wf=function sQ(){return gQ(this)};_.xf=function tQ(){return !this.K&&(this.K=this.rf()),this.K};_.yf=function vQ(){return hQ(this)};_.zf=function wQ(){var a,b,c;if(!this.n&&(b=this.tf().pb,!!b&&b.contains('cClick'))){this.n=He(this.yf(),new M4(this),(rn(),rn(),qn));(k1(),!j1&&(j1=new t1),k1(),j1).b&&(c=this.yf(),this.w=He(c,new O4(this,c),(Zo(),Zo(),Yo)),this.v=He(c,new K4(this),(So(),So(),Ro)),this.u=He(c,new Q4(this),(Ko(),Ko(),Jo)),undefined)}else if(!!this.n&&(a=this.tf().pb,!(!!a&&a.contains('cClick')))){sM(this.n.a);this.n=null;pQ(this)}};_.Af=function xQ(){var a;a=this.xf();if(a.fb!=null&&a.fb.length!=0){return true}return a.ib!=null&&a.ib.length!=0};_.uf=function yQ(a){lQ(this,a)};_.Bf=function zQ(){var a;a=this.yf();q2((CF(),a.Xc),xe(a.md())+'-error',this.xf().hb)};_.vf=function AQ(a){$P(this,a);nQ(this,XP(this))};_.k=20;_.n=null;_.o='';_.p='';_.r=false;_.t=false;_.A=0;_.B=0;var Dz=Bdb(ewb,'AbstractComponentConnector',269);zE(155,269,ywb);var Gz=Bdb(ewb,'AbstractHasComponentsConnector',155);zE(329,155,{181:1,668:1,27:1,99:1,121:1,3:1},DQ);_.xf=function GQ(){return !this.K&&(this.K=RP(this)),this.K};_.tf=function HQ(){return !this.K&&(this.K=RP(this)),this.K};_.yf=function IQ(){return !this.C&&(this.C=new hR),this.C};_.wf=function EQ(){return new hR};_.sf=function FQ(a){return this.b};_.qe=function JQ(a){var b;b=(!this.C&&(this.C=new hR),this.C);lab(this.b,b.k,b.b)};_.ze=function KQ(a){var b;b=(!this.C&&(this.C=new hR),this.C);b.Tc&&mab(this.b,b.k,b.b)};_.uf=function LQ(a){var b,c;c=(!this.C&&(this.C=new hR),this.C);b=(!this.K&&(this.K=RP(this)),this.K);(a.Gf(Yvb)||a.Gf('row'))&&Z1((ng(),mg),new NQ(c,b));a.Gf(zwb)&&ZQ(c,b.active);a.Gf('popupHeight')&&cR(c,b.popupHeight);a.Gf('popupWidth')&&dR(c,b.popupWidth);a.Gf('headerHidden')&&bR(c,b.headerHidden)};var dx=Bdb($vb,'PopupButtonConnector',329);zE(330,1,atb,MQ);var bx=Bdb($vb,'PopupButtonConnector/1',330);zE(331,1,Fvb,NQ);_.Kd=function OQ(){fR(this.b,this.a.row,this.a.col)};var cx=Bdb($vb,'PopupButtonConnector/2',331);zE(355,13,mub,TQ);_.wd=function UQ(a){if(mf(WX(a),this.b)){$M(this.c,false);FU(this.e)}else{Le(this,a)}};var ex=Bdb($vb,'PopupButtonHeader',355);var fx=Ddb($vb,'PopupButtonServerRpc');zE(75,1,{75:1,3:1});_.ob=true;var TA=Bdb(Awb,'SharedState',75);zE(67,75,Bwb);_.db=null;_.eb=false;_.fb='';_.hb=null;_.ib=null;_.jb='';_.kb=null;_.lb=null;_.mb=null;_.nb='';var LA=Bdb(vwb,'AbstractComponentState',67);zE(193,67,{193:1,67:1,75:1,3:1},WQ);_.active=false;_.col=0;_.headerHidden=false;_.popupHeight=null;_.popupWidth=null;_.row=0;var gx=Bdb($vb,'PopupButtonState',193);zE(70,209,{181:1,18:1,27:1,14:1,9:1,60:1,73:1,16:1,19:1,12:1,13:1,70:1},hR);_.qe=function iR(a){$Q(this);Dj(a.a)};_.xd=function jR(){$M(this.e,false);YQ(this);Me(this)};_.pd=function kR(a,b){Ae((CF(),this.Xc),a,b);re(this.e,a,b)};_.b=0;_.k=0;var jx=Bdb($vb,'PopupButtonWidget',70);zE(319,1,{},lR);_.We=function mR(a,b){var c,d,e,f,g;f=Wg(this.a.j);c=(Fh(),Eh).Yd(f)+((f.offsetHeight||0)|0);d=Eh.Xd(f)+((f.offsetWidth||0)|0);e=d-a;e<gh(this.a.n)&&(e=d);g=c;g+b>fh(this.a.n)&&(g=Eh.Yd(f)-b);g<ih(this.a.n)&&(g=ih(this.a.n));eN(this.a.e,e,g)};var hx=Bdb($vb,'PopupButtonWidget/1',319);zE(320,1,Fvb,nR);_.Kd=function oR(){WJ(this.a.e,this.a.a)};var ix=Bdb($vb,'PopupButtonWidget/2',320);zE(239,96,mwb,pR);_.kf=function qR(){var a;a=new pR(this.e,this.c);XN(this,a);return a};_.lf=function rR(){return false};_.mf=function sR(a){(CF(),this.Xc).style[cwb]=a+(hm(),Kvb);this.j=a};_.nf=function tR(a,b){this.g=6+b*15;this.k=a;(CF(),this.Xc).style[Cvb]=this.g+(hm(),Kvb);this.Xc.style[Dvb]=a+Kvb};_.pf=function uR(a){(CF(),this.Xc).style[gub]=a+(hm(),Kvb);this.d=a};var kx=Bdb($vb,'RowGrouping',239);zE(394,1,{},LR);_.a=0;_.b=0;var lx=Bdb($vb,'SelectionHandler',394);zE(406,686,Evb,lS);_.od=function mS(a){};_.qd=function nS(a){};_.c=0;_.d=0;_.e=0;_.f=0;_.g=false;_.i=false;_.j=false;_.k=0;_.n=0;_.o=false;_.p=false;_.r=0;_.s=false;_.t=0;_.u=0;_.v=0;_.w=0;_.C=false;_.G=0;_.H=0;_.I=0;_.J=0;_.K=0;_.L=0;_.N=false;_.O=0;_.P=0;_.R=false;_.S=false;_.T=false;_.U=0;_.V=0;_.Y=0;_.Z=0;_._=false;_.ab=0;var tx=Bdb($vb,'SelectionWidget',406);zE(408,43,{},oS);_.kd=function pS(){var a,b,c,d,e,f,g,h,i;zh(this.a.Q.zc,((this.a.Q.zc.scrollTop||0)|0)+(this.a.n/2|0));yh(this.a.Q.zc,ph(this.a.Q.zc)+(this.a.k/2|0));RV(this.a.Q);g=this.a.c;h=this.a.d;this.a.k<0?(g=gh(this.a.Q.zc)+5):this.a.k>0&&(g=hh(this.a.Q.zc)-25);this.a.n<0?(h=ih(this.a.Q.zc)+5):this.a.n>0&&(h=fh(this.a.Q.zc)-25);if(this.a.n!=0&&((this.a.Q.zc.scrollTop||0)|0)==0){e=new M1;J1(e,this.a.Q.Fc);d=ih(this.a.Q.Fc)+e.d[0]+5;this.a.d>d?(h=this.a.d):(h=d)}if(this.a.k!=0&&ph(this.a.Q.zc)==0){e=new M1;J1(e,this.a.Q.Fc);c=gh(this.a.Q.Fc)+e.d[3]+5;this.a.c>c?(g=this.a.c):(g=c)}if(this.a.C){SR(this.a,g,h)}else{i=d2(g,h);if(i){a=(Fh(),i).getAttribute(qub)||'';pT(this.a.Q.wb,a);b=this.a.Q.wb.a;f=this.a.Q.wb.b;b!=0&&f!=0&&d_(this.a.Q.a,b,f)}}};var mx=Bdb($vb,'SelectionWidget/1',408);zE(409,1,Fvb,qS);_.Kd=function rS(){WR(this.a,true);$M(this.a.$,false)};var nx=Bdb($vb,'SelectionWidget/2',409);zE(410,1,Fvb,sS);_.Kd=function tS(){WJ(this.a.$,new uS(this));hN(this.a.$)};var px=Bdb($vb,'SelectionWidget/3',410);zE(411,1,{},uS);_.We=function vS(a,b){var c,d,e,f,g;f=0;d=0;c=0;g=0;e=0;if(!!this.a.a.X&&ke(this.a.a.X)){f=ih(this.a.a.X.G);d=gh(this.a.a.X.G);g=this.a.a.X.G.clientWidth|0;c=fh(this.a.a.X.a)+5;ke(this.a.a.W)&&(g+=this.a.a.W.G.clientWidth|0);ke(this.a.a.b)&&(c=fh(this.a.a.b.a)+5)}else if(!!this.a.a.W&&ke(this.a.a.W)){f=ih(this.a.a.W.G);d=gh(this.a.a.W.G);g=this.a.a.W.G.clientWidth|0;c=fh(this.a.a.W.a)+5;ke(this.a.a.a)&&(c=fh(this.a.a.a.a)+5)}else if(!!this.a.a.a&&ke(this.a.a.a)){f=ih(this.a.a.a.G);d=gh(this.a.a.a.G);g=this.a.a.a.G.clientWidth|0;c=fh(this.a.a.a.a)+5;ke(this.a.a.b)&&(g+=this.a.a.b.G.clientWidth|0)}else{f=ih(this.a.a.b.G);d=gh(this.a.a.b.G);g=this.a.a.b.G.clientWidth|0;c=fh(this.a.a.b.a)+5}g>(he(this.a.a.Q).clientWidth|0)&&(g=he(this.a.a.Q).clientWidth|0);this.a.a.Q.Sc>0?(e=ih(this.a.a.Q.Pc)):(e=ih(this.a.a.Q.zc));f-=b+5;d+=(g/2|0)-(a/2|0);e>f&&(f=c+5);eN(this.a.a.$,d,f)};var ox=Bdb($vb,'SelectionWidget/3/1',411);zE(140,13,mub,DS);_.b=0;_.c=0;_.e=0;_.f=0;_.g=0;_.i=0;_.n=0;_.o=0;var qx=Bdb($vb,'SelectionWidget/PaintOutlineWidget',140);zE(139,13,mub,TS);_.b=false;_.e=0;_.f=0;_.j=0;_.n=false;_.q=0;_.r=0;_.s=0;_.t=0;_.v=false;_.C=0;_.D=0;_.H=false;_.K=0;var sx=Bdb($vb,'SelectionWidget/SelectionOutlineWidget',139);zE(407,1,swb,US);_.wd=function VS(a){var b,c,d;b=(CF(),(Fh(),Eh).Vd(a));d=TG(a.type);c=d==svb||d==itb||d==tvb||d==uvb;if(this.a.F.C){FS(this.a,a);a.stopPropagation()}else if(d==4){if(mf(b,this.a.g)){FS(this.a,a);a.stopPropagation()}else if(mf(b,this.a.G));else if(mf(b,this.a.k));else if(mf(b,this.a.u));else mf(b,this.a.a)}else if(c){if(d==itb||d==uvb){VF(this.a.B);gS(this.a.F)}else if(mf(b,this.a.g)||mf(b,this.a.i)){if(d==svb){WF(this.a.B);NR(this.a.F,a)}else{VR(this.a.F,a)}}else{this.a.F.p&&FS(this.a,a)}a.stopPropagation()}};var rx=Bdb($vb,'SelectionWidget/SelectionOutlineWidget/1',407);zE(641,1,swb,_S);_.wd=function aT(a){var b;if(jh(WX(a)).indexOf(Cwb)!=-1){NW(this.c,true);return}b=(CF(),TG((Fh(),a).type));if(b==2048){NW(this.c,true);this.b=true}else if(b==4096){NW(this.c,false);this.b=false}else if(b==tvb){a.stopPropagation()}else if(this.c.xc){qtb==b&&RV(this.c);YS(this,a)}else{switch(b){case qtb:RV(this.c);break;case 256:XS(this,a);break;case 128:WS(this,a);break;case 4:Eh.Rd(a)!=2&&NV(this.c,a);break;case rvb:NV(this.c,a);break;case 2:ZS(this,a);break;case 32:case 16:PV(this.c,a);break;case 64:OV(this.c);}}};_.a=false;_.b=false;var ux=Bdb($vb,'SheetEventListener',641);zE(570,1,{722:1,181:1,733:1,730:1,735:1,246:1,247:1,27:1},fT);_.pe=function gT(a){var b;NW(this.b,false);if(this.a.f){dP(this.a,false)}else if(this.b._){H$(this.b.a,(b=_K(this.b.sb),b==null?'':b));DO(this.a)}Dj(a.a)};_.qe=function hT(a){this.b._&&(this.a.v=true);Dj(a.a)};_.te=function iT(a){var b;if(tj(a.a)==2){b=this.b.wb;pT(b,bV(this.b));M$(this.b.a,a.a,b.a,b.b)}Dj(a.a)};_.ue=function jT(a){dP(this.a,false)};var vx=Bdb($vb,'SheetInputEventListener',570);zE(348,1,{},sT);_.a=0;_.b=0;var wx=Bdb($vb,'SheetJsniUtil',348);zE(235,130,{18:1,14:1,9:1,16:1,31:1,19:1,12:1,13:1,235:1},zT);_.a=0;_.b=0;var xx=Bdb($vb,'SheetOverlay',235);zE(301,13,mub,QT);_.b='';_.d=false;_.j=false;_.r=-1;_.s=0;_.t=0;var Bx=Bdb($vb,'SheetTabSheet',301);zE(302,1,swb,RT);_.wd=function ST(a){var b,c,d,e,f;d=WX(a);f=(CF(),TG((Fh(),a).type));if(mf(d,this.a.g)){return}a.stopPropagation();if(f==1){this.a.d&&!this.a.j&&BT(this.a);GU(this.a.e.V,false);if(Zg(this.a.i,d)&&!rh(d,Uub)){if(mf(d,this.a.n)){this.a.t=0;this.a.s=0;this.a.c.style[bwb]=this.a.t+(hm(),Kvb);NT(this.a)}else if(mf(d,this.a.p)){if(this.a.s>0){--this.a.s;this.a.s==0?(this.a.t=0):(this.a.t+=GT(this.a,this.a.s));this.a.c.style[bwb]=this.a.t+(hm(),Kvb)}NT(this.a)}else if(mf(d,this.a.q)){if(this.a.s<this.a.u.length-1){this.a.t-=GT(this.a,this.a.s);this.a.c.style[bwb]=this.a.t+(hm(),Kvb);++this.a.s;NT(this.a)}}else if(mf(d,this.a.o)){e=ET(this.a);HT(this.a,e)}else mf(d,this.a.a)&&(this.a.j||Z$(this.a.e))}else if(Zg(this.a.c,d)){for(c=0;c<this.a.u.length;c++){mf(this.a.u[c],d)&&c!=this.a.r&&j_(this.a.e,c)}}}else if(f==2){if(!this.a.j){for(c=0;c<this.a.u.length;c++){if(mf(this.a.u[c],d)){if(c!=this.a.r){j_(this.a.e,c)}else{this.a.d=true;b=this.a.u[c];this.a.b=Eh.ae(b);sj(this.a.g,this.a.b);Eh.ee(b,'');Vg(b,this.a.g);this.a.g.focus();OT(this.a)}}}}}};var yx=Bdb($vb,'SheetTabSheet/1',302);zE(303,1,swb,TT);_.wd=function UT(a){var b,c;c=(CF(),TG((Fh(),a).type));if(this.a.d){if(c==4096){BT(this.a)}else{switch(a.keyCode|0){case 13:case 9:BT(this.a);break;case 27:this.a.d=false;ah(this.a.g);b=this.a.u[this.a.r];b.style[hub]='';LT(b,this.a.b);FU(this.a.e.V);break;default:DT(this.a);}}}a.stopPropagation()};var zx=Bdb($vb,'SheetTabSheet/2',303);zE(304,1,Fvb,VT);_.Kd=function WT(){OT(this.a)};var Ax=Bdb($vb,'SheetTabSheet/3',304);zE(158,682,{18:1,14:1,9:1,16:1,31:1,19:1,12:1,13:1,158:1},VX);_.Ne=function XX(){return HV(this)};_.vd=function YX(){Ke(this);nO(this.M);!this.M.Wc&&EH(this,this.M)};_.zd=function ZX(){$M(this.qb,false);$M(this.Xb,false);lO(this.M)};_.Oe=function $X(a){return eW(this,a)};_.f=0;_.g=0;_.k=-1;_.n=-1;_.o=false;_.v=true;_.A=0;_.B=0;_.C=true;_.G=false;_.H=0;_.L=false;_.O=false;_.P=false;_.R=false;_.V=-1;_.X=0;_.Y=0;_.Z=false;_._=false;_.ab=false;_.bb=0;_.cb=0;_.db=0;_.eb=0;_.nb=null;_.ob=0;_.ub=null;_.vb=false;_.xb=0;_.yb=0;_.zb=0;_.Ab=0;_.Bb=0;_.Cb=0;_.Db=false;_.Lb=0;_.Ob=0;_.Pb=0;_.Sb=0;_.Tb=0;_.Zb=false;_.$b=-1;_._b=-1;_.ac=false;_.bc=false;_.ec=false;_.fc=0;_.jc=false;_.nc=false;_.oc=0;_.pc=0;_.rc=0;_.sc=0;_.xc=false;_.Gc=false;_.Hc=false;_.Ic=false;_.Jc=0;_.Kc=0;_.Lc=0;_.Oc=0;_.Rc=false;_.Sc=0;var Vx=Bdb($vb,'SheetWidget',158);zE(332,1,Fvb,_X);_.Kd=function aY(){this.a.k!=-1&&this.a.n!=-1&&_W(this.a,this.a.k,this.a.n)};var Lx=Bdb($vb,'SheetWidget/1',332);zE(341,1,Fvb,bY);_.Kd=function cY(){var a,b;if(this.a.jc){return}b=this.d;while(y$(this.a.a,b)){--b}if(b==0){return}WF(he(this.a));this.a.bc=true;this.a._b=b;this.a.$b=-1;this.a._b<=this.a.Sc?(a=ukb(this.a.jb,this.a._b-1)):(a=ukb(this.a.ic,b-this.a.db));this.a.Sb=(Fh(),Eh).Yd(a);this.a.Tb=Eh.Yd(a)+((a.offsetHeight||0)|0);v$(this.a.a,b)>0?AI(this.a.Yb,'Height: '+v$(this.a.a,b)+'pt'):AI(this.a.Yb,'Hide row');cX(this.a,this.b,this.c);hN(this.a.Xb);dh(this.a.Fc,zxb);dh(this.a.Vb,'row'+b);++b;while(this.d<this.a.a.O&&y$(this.a.a,b)){++b}dh(this.a.Ub,sxb+b);kV(this.a,this.b,this.c)};_.b=0;_.c=0;_.d=0;var Cx=Bdb($vb,'SheetWidget/10',341);zE(342,1,Fvb,dY);_.Kd=function eY(){var a,b;if(this.a.L){return}b=this.d;while(x$(this.a.a,b)){--b}if(b<1){return}WF(he(this.a));this.a.ac=true;this.a.$b=b;this.a._b=-1;this.a.$b<=this.a.ob?(a=ukb(this.a.ib,this.a.$b-1)):(a=ukb(this.a.K,b-this.a.bb));this.a.Sb=(Fh(),Eh).Xd(a);this.a.Tb=Eh.Xd(a)+((a.offsetWidth||0)|0);r$(this.a.a,b)>0?AI(this.a.Yb,'Width: '+r$(this.a.a,b)+Kvb):AI(this.a.Yb,jxb);cX(this.a,this.b,this.c);hN(this.a.Xb);dh(this.a.Fc,Axb);dh(this.a.Vb,Yvb+b);++b;while(this.d<=this.a.a.i&&x$(this.a.a,b)){++b}dh(this.a.Ub,qxb+b);gV(this.a,this.b,this.c)};_.b=0;_.c=0;_.d=0;var Dx=Bdb($vb,'SheetWidget/11',342);zE(343,1,{},fY);_.We=function gY(a,b){QW(this.a,a,b,this.b)};var Ex=Bdb($vb,'SheetWidget/12',343);zE(132,1,Fvb,hY);_.Kd=function iY(){var a,b;b=(a=_K(this.a.sb),a==null?'':a);YV(this.a,b);this.b&&L$(this.a.a,b)};_.b=false;var Fx=Bdb($vb,'SheetWidget/13',132);zE(344,1,Fvb,jY);_.Kd=function kY(){bf(this.a.sb,true);Oeb(this.b,'%')?aL(this.a.sb,this.b.length-1,0):aL(this.a.sb,this.b.length,0)};var Gx=Bdb($vb,'SheetWidget/14',344);zE(133,1,Fvb,lY);_.Kd=function mY(){this.a.zc.focus()};var Hx=Bdb($vb,'SheetWidget/15',133);zE(345,1,swb,nY);_.wd=function oY(a){A$(this.a.a,true,this.b)};_.b=0;var Ix=Bdb($vb,'SheetWidget/16',345);zE(346,1,swb,pY);_.wd=function qY(a){A$(this.a.a,false,this.b)};_.b=0;var Jx=Bdb($vb,'SheetWidget/17',346);zE(347,1,Fvb,rY);_.Kd=function sY(){var a,b,c,d,e,f,g,h,i,j;g=this.a.Nc.clientWidth|0;e=this.a.gc.clientWidth|0;j=g+e;if(e==0&&!AV(this.a.F)){j-=1}else if(e!=0&&!AV(this.a.F));else e!=0&&AV(this.a.F)&&(j+=2);this.a.F.style[hub]=j+(hm(),Kvb);f=this.a.Nc.clientHeight|0;b=this.a.I.clientHeight|0;c=f+b;if(b==0&&!AV(this.a.dc));else b!=0&&!AV(this.a.dc)?(c+=1):b!=0&&AV(this.a.dc)&&(c+=2);this.a.dc.style[gub]=c+Kvb;a=this.a.c.clientHeight|0;i=this.a.Pc.clientWidth|0;h=i+j;d=a+c;AV(this.a.F)&&(h+=1);AV(this.a.dc)&&(d+=1);this.a.I.style[hub]=h+Kvb;this.a.D.style[hub]=h+Kvb;this.a.gc.style[gub]=d+Kvb;this.a.cc.style[gub]=d+Kvb};var Kx=Bdb($vb,'SheetWidget/18',347);zE(333,1,Fvb,tY);_.Kd=function uY(){var b,c,d,e,f;if(this.a._){return}e=this.a.Hb;if(!Jh((Fh(),e))){return}f=jh(Jh(e)).indexOf(Pwb)!=-1;b=e.getAttribute(qub)||'';if(Peb(b.substr(0,20),kwb)){return}b.indexOf(Qwb)!=-1&&(b=afb(b,0,b.indexOf(' cell')));if(Peb(b,Swb)){e=wj(this.a.Gb);b=e.getAttribute(qub)||''}else if(SF(this.a.Gb)==16&&f){pT(this.a.wb,b);try{c=this.a.wb.a;d=this.a.wb.b;if(c==0||d==0){return}e=XU(this.a,y0(this.a.Gb),z0(this.a.Gb),JU(this.a,c,d)).d;b=e.getAttribute(qub)||'';b.indexOf(Qwb)!=-1&&(b=afb(b,0,b.indexOf(' cell')))}catch(a){a=UD(a);if(Yq(a,81)){qrb(this.a.U,'SheetWidget:onSheetMouseOverOrOut: JSE while trying to find real event target, className:'+b)}else if(Yq(a,33)){rrb(this.a.U,'SheetWidget:onSheetMouseOverOrOut: IOOBE while trying to find correct event target, className:'+b)}else throw VD(a)}}pT(this.a.wb,b);if(Peb(b,Vvb)||Peb(b,Wvb)||Peb(b,this.a.j)||fU(this.a,b)||gU(this.a,b)){sX(this.a,this.a.Gb,e)}else{if(!this.a.o&&this.a.q.M&&b.indexOf('comment')==-1){VF(this.a.zc);DN(this.a.q);this.a.j=null;this.a.k=-1;this.a.n=-1}}if(f&&!!this.a.s&&xib(this.a.s,b)){uX(this.a,SF(this.a.Gb),this.a.wb.a,this.a.wb.b,wib(this.a.s,b));return}else RJ(this.a.qb)&&$M(this.a.qb,false)};var Mx=Bdb($vb,'SheetWidget/2',333);zE(334,43,{},vY);_.kd=function wY(){var a,b,c,d,e;zh(this.a.zc,((this.a.zc.scrollTop||0)|0)+(this.a.Y/2|0));yh(this.a.zc,ph(this.a.zc)+(this.a.X/2|0));RV(this.a);d=this.a.A;e=this.a.B;this.a.X<0?(d=gh(this.a.zc)+5):this.a.X>0&&(d=hh(this.a.zc)-25);this.a.Y<0?(e=ih(this.a.zc)+5):this.a.Y>0&&(e=fh(this.a.zc)-25);if(this.a.Y!=0&&((this.a.zc.scrollTop||0)|0)==0){c=new M1;J1(c,this.a.Fc);b=ih(this.a.Fc)+c.d[0]+5;this.a.B>b?(e=this.a.B):(e=b)}if(this.a.X!=0&&ph(this.a.zc)==0){c=new M1;J1(c,this.a.Fc);a=gh(this.a.Fc)+c.d[3]+5;this.a.A>a?(d=this.a.A):(d=a)}lV(this.a,d,e)};var Nx=Bdb($vb,'SheetWidget/3',334);zE(335,43,{},zY);_.kd=function AY(){xY(this,this.a.db,this.a.zb,this.a.bb,this.a.xb);xY(this,0,this.a.Sc,0,this.a.ob);xY(this,0,this.a.Sc,this.a.bb,this.a.xb);xY(this,this.a.db,this.a.zb,0,this.a.ob);yY(this,this.a.db,this.a.zb,this.a.bb,this.a.xb);yY(this,0,this.a.Sc,0,this.a.ob);yY(this,0,this.a.Sc,this.a.bb,this.a.xb);yY(this,this.a.db,this.a.zb,0,this.a.ob)};var Ox=Bdb($vb,'SheetWidget/4',335);zE(336,1,Fvb,BY);_.Kd=function CY(){this.a.Db&&QV(this.a)};var Px=Bdb($vb,'SheetWidget/5',336);zE(337,1,Fvb,DY);_.Kd=function EY(){mW(this.a)};var Qx=Bdb($vb,'SheetWidget/6',337);zE(338,1,Fvb,FY);_.Kd=function GY(){this.a.Lb==0&&Xg(this.a.Mb)&&(this.a.Lb=(this.a.Mb.offsetWidth||0)|0);SX(this.a);vX(this.a);yX(this.a);uW(this.a,this.b,this.c);sW(this.a);c_(this.a.a,this.a.db,this.a.zb,this.a.bb,this.a.xb);oW(this.a);tW(this.a);xX(this.a);NX(this.a);nW(this.a);this.a.Db=true};_.b=0;_.c=0;var Rx=Bdb($vb,'SheetWidget/7',338);zE(339,1,Mvb,IY);_.De=function JY(a){var b,c,d,e,f,g;c=SF(a.d);f=a.d;g=WX(f);b='';!!g&&g.nodeType==1&&(b=(Fh(),g).getAttribute(qub)||'');Zg(he(this.a),WX(f))&&(svb==c||4==c||8==c||2==c||1==c)&&NW(this.a,true);if((this.a.ac||this.a.bc)&&c==64){if(this.a.$b!=-1){gV(this.a,y0(f),z0(f))}else if(this.a._b!=-1){kV(this.a,y0(f),z0(f))}else{this.a.ac=false;this.a.bc=false}a.a=true}else if(c==8&&HY(this,g)){if(this.a.ac||this.a.bc||Peb(b,Bxb)||Peb(b,Cxb)){this.a.L=true;this.a.jc=true;this.a.ac=false;this.a.bc=false;kT(this.a.Wb);$M(this.a.Xb,false);a.a=true;if(this.a.$b!=-1){sh(this.a.Fc,Axb);hX(this.a,y0(a.d))}else if(this.a._b!=-1){sh(this.a.Fc,zxb);jX(this.a,z0(a.d))}}}else{if(Zg(he(this.a),g)){if(c==1){d=oT(b);if(d==1||d==2){e=qT(b);d==1?$$(this.a.a,e,!!(Fh(),f).shiftKey,!!f.metaKey||!!f.ctrlKey):N$(this.a.a,e,!!(Fh(),f).shiftKey,!!f.metaKey||!!f.ctrlKey);a.a=true;this.a.zc.focus()}}else if(c==4&&HY(this,g)){if(Peb(b,Bxb)){b=jh(Jh((Fh(),g)));d=oT(b);if(d==1){d=qT(b);this.a.jc=false;fX(this.a,d-1,y0(f),z0(f))}else if(d==2){d=qT(b);this.a.L=false;dX(this.a,d-1,y0(f),z0(f))}a.a=true}else if(Peb(b,Cxb)){b=jh(Jh((Fh(),g)));d=oT(b);if(d==1){d=qT(b);this.a.jc=false;fX(this.a,d,y0(f),z0(f))}else if(d==2){d=qT(b);this.a.L=false;dX(this.a,d,y0(f),z0(f))}a.a=true}}else if(c==2&&HY(this,g)){if(Peb(b,Bxb)){b=jh(Jh((Fh(),g)));d=oT(b);if(d==1){d=qT(b)-1;while(y$(this.a.a,d)&&d>0){--d}d>0&&_$(this.a.a,d)}else if(d==2){d=qT(b)-1;while(x$(this.a.a,d)&&d>0){--d}d>0&&O$(this.a.a,d)}a.a=true}else if(Peb(b,Cxb)){b=jh(Jh((Fh(),g)));d=oT(b);if(d==1){d=qT(b);while(y$(this.a.a,d)&&d>0){--d}d>0&&_$(this.a.a,d)}else if(d==2){d=qT(b);while(x$(this.a.a,d)&&d>0){--d}d>0&&O$(this.a.a,d)}a.a=true}}}}};var Sx=Bdb($vb,'SheetWidget/8',339);zE(340,1,Dxb,KY);_.re=function LY(a){var b,c,d,e;if(this.a.a.R){e=WX(a.a);b=(Fh(),e).getAttribute(qub)||'';c=oT(b);if(c==1||c==2){d=qT(b);c==1?a_(this.a.a,a.a,d):P$(this.a.a,a.a,d)}!!a.a&&Cj(a.a);Dj(a.a)}};var Tx=Bdb($vb,'SheetWidget/9',340);zE(52,1,{52:1},MY);_.Yc=function NY(a){if(a==null||!Yq(a,52)){return false}return this.b==a.b&&this.a==a.a};_.$c=function OY(){var a;a=this.b+((this.a+1)/2|0);return 31*(this.a+a*a)};_.a=0;_.b=0;var Ux=Bdb($vb,'SheetWidget/CellCoord',52);zE(174,13,mub,PY);var Xx=Bdb($vb,'Slot',174);zE(571,1,Exb,RY);_.ye=function SY(a){QY(this.b,this.a,a)};var Wx=Bdb($vb,'Slot/lambda$0$Type',571);zE(125,1,Fxb);_._c=function VY(){return 'Action [owner='+this.g+', iconUrl='+this.f+', caption='+this.e+']'};_.e='';_.f=null;var Iz=Bdb(ewb,'Action',125);zE(243,125,Fxb,XY);_.Kd=function YY(){WY(this)};_.a='';_.c=0;var Zx=Bdb($vb,'SpreadsheetAction',243);zE(194,1,{194:1,3:1},ZY);_.type=0;var Yx=Bdb($vb,'SpreadsheetActionDetails',194);var $x=Ddb($vb,'SpreadsheetClientRpc');zE(280,155,ywb,jZ);_.xf=function nZ(){return !this.K&&(this.K=new T0),this.K};_.tf=function oZ(){return !this.K&&(this.K=new T0),this.K};_.yf=function pZ(){return !this.C&&(this.C=new x0),this.C};_.rf=function kZ(){return new T0};_.wf=function lZ(){return new x0};_.sf=function mZ(a){return this.i};_.uf=function qZ(a){dZ(this,a)};var gy=Bdb($vb,'SpreadsheetConnector',280);zE(281,1,{726:1,3:1},BZ);var ay=Bdb($vb,'SpreadsheetConnector/1',281);zE(282,1,{},DZ);var _x=Bdb($vb,'SpreadsheetConnector/1/1',282);zE(283,1,{},HZ);var by=Bdb($vb,'SpreadsheetConnector/4',283);zE(284,1,Dxb,IZ);_.re=function JZ(a){!!a.a&&Cj(a.a);Dj(a.a)};var cy=Bdb($vb,'SpreadsheetConnector/5',284);zE(285,1,Fvb,KZ);_.Kd=function LZ(){cZ(this.a,this.b)};var dy=Bdb($vb,'SpreadsheetConnector/6',285);zE(287,1,{},OZ);var ey=Bdb($vb,'SpreadsheetConnector/7',287);zE(286,1,{},PZ);_.Cf=function QZ(a,b){bZ(this.a,this.b,a,b)};var fy=Bdb($vb,'SpreadsheetConnector/lambda$0$Type',286);zE(642,1,{736:1,716:1,715:1,245:1,27:1},RZ);_.ve=function SZ(a){!!this.b&&ob(this.b)};_.we=function TZ(a){!!this.b&&ob(this.b)};_.xe=function UZ(a){var b,c,d,e,f,g,h,i,j,k,l;e=a.a;j=(Fh(),Eh).Vd(e);!j&&(j=he(this.a));d=j;k=e.targetTouches;l=null;!!k&&k.length>0&&(l=k[0]);h=l?_h(l.screenX||0):_h(e.screenX||0);i=!l?_h(e.screenY||0):_h(l.screenY||0);b=l?_h(l.clientX||0):_h(e.clientX||0);c=l?_h(l.clientY||0):_h(e.clientY||0);f=l?l.target:Eh.Vd(e);g=f?f:null;this.b=new VZ(h,i,b,c,g,d);pb(this.b,750)};var iy=Bdb($vb,'SpreadsheetContextMenuPolyfill',642);zE(643,43,{},VZ);_.kd=function WZ(){var a;a=Wi($doc,this.e,this.f,this.a,this.b,this.d);eh(this.c,a)};_.a=0;_.b=0;_.e=0;_.f=0;var hy=Bdb($vb,'SpreadsheetContextMenuPolyfill/1',643);zE(396,135,Bvb);_.d=0;_.f=0;var Sz=Bdb(ewb,'VContextMenu',396);zE(397,396,Bvb,a$);_.jf=function b$(){var a;return a=(CF(),CF(),$doc.getElementById(fwb)),!a?(JK(),$doc.body):a};var jy=Bdb($vb,'SpreadsheetOverlay/SpreadsheetContextMenu',397);var ly=Ddb($vb,'SpreadsheetServerRpc');var By=Ddb(Lxb,'Focusable');zE(28,686,{18:1,14:1,9:1,16:1,179:1,19:1,12:1,13:1,28:1},x0);_.qf=function A0(a,b,c){Mab(this.W,a,b,c)};_.od=function B0(a){H_(this,a)};_.qd=function C0(a){k0(this,a)};_.a=0;_.c=false;_.d=false;_.e=false;_.i=0;_.j=0;_.o=false;_.q=0;_.r=0;_.t=false;_.B=false;_.C=false;_.D=true;_.F=true;_.K=true;_.L=0;_.O=0;_.P=false;_.T=false;_.X=0;_.Y=0;_.Z=false;var ty=Bdb($vb,'SpreadsheetWidget',28);zE(295,1,atb,F0);var my=Bdb($vb,'SpreadsheetWidget/1',295);zE(296,43,{},G0);_.kd=function H0(){};var ny=Bdb($vb,'SpreadsheetWidget/2',296);zE(297,1,Exb,I0);_.ye=function J0(a){if(a.a){XW(this.b.V,this.a,this.c)}else{this.a=ph(this.b.V.zc);this.c=(this.b.V.zc.scrollTop||0)|0}};_.a=0;_.c=0;var oy=Bdb($vb,'SpreadsheetWidget/3',297);zE(298,1,Fvb,K0);_.Kd=function L0(){XW(this.a.V,this.b,this.c)};_.b=0;_.c=0;var py=Bdb($vb,'SpreadsheetWidget/4',298);zE(299,1,Fvb,M0);_.Kd=function N0(){var a,b,c;j$(this.a);if(this.b){b=0;while(b<this.b.a.length){c=ukb(this.b,b);ZT(this.a.V,c);a=JU(this.a.V,c.col1,c.row1);!!a&&FM(a,a.o,a.b,false);++b}iU(this.a.V)}!this.b?(this.a.J=null):(this.a.J=new Ckb(this.b))};var qy=Bdb($vb,'SpreadsheetWidget/5',299);zE(300,43,{},O0);_.kd=function P0(){this.a.K=true};var ry=Bdb($vb,'SpreadsheetWidget/6',300);zE(198,1,Fvb,Q0);_.Kd=function R0(){if(!this.a.c){aab(this.a.W,this.a.V.sc,this.a.V.rc,this.c);g$(this.a,this.c,this.b)}};_.b=false;var sy=Bdb($vb,'SpreadsheetWidget/7',198);zE(236,1,{236:1,3:1},S0);_.collapsed=false;_.endIndex=0;_.level=0;_.startIndex=0;_.uniqueIndex=0;var uy=Bdb(Oxb,'GroupingData',236);zE(126,67,{67:1,75:1,126:1,3:1});var ZA=Bdb(Pxb,'TabIndexState',126);zE(45,126,{45:1,67:1,75:1,126:1,3:1},T0);_.d=null;_.f=false;_.g=0;_.j=0;_.k=200;_.n=null;_.p=null;_.q=0;_.r=0;_.s=true;_.t=true;_.u=false;_.v=null;_.w=null;_.B=0;_.G='Invalid formula';_.H=true;_.I=true;_.J=null;_.K=null;_.O=false;_.P=200;_.R=false;_.S=0;_.U=null;_.V=0;_.W=1;_.X=null;_.Y=false;_.Z=null;_._=0;_.bb=false;_.cb=false;var vy=Bdb(Oxb,'SpreadsheetState',45);var U0;zE(248,1,{},c1);var a1;var wy=Bdb(Lxb,'ApplicationConfiguration',248);zE(210,1,{14:1,210:1},g1);_.td=function h1(a){};_.b=null;var xy=Bdb(Lxb,'ApplicationConnection',210);zE(56,1,{},t1);_.b=false;var i1=null,j1;var yy=Bdb(Lxb,'BrowserInfo',56);zE(117,1,{},y1);var zy=Bdb(Lxb,'ComputedStyle',117);zE(685,684,{});var Hy=Bdb(Xxb,'AbstractServerConnectorEvent',685);var B1;zE(483,1,{},E1);var Ay=Bdb(Lxb,'ConnectorMap',483);zE(84,1,{},M1);_.b=-1;_.e=-1;var Dy=Bdb(Lxb,'MeasuredSize',84);zE(545,1,{},P1);var Cy=Bdb(Lxb,'MeasuredSize/MeasureResult',545);zE(376,1,{},U1);var Ey=Bdb(Lxb,'ResourceLoader',376);zE(412,352,{},$1);_.a=0;var Gy=Bdb(Lxb,'VSchedulerImpl',412);zE(413,1,Fvb,_1);_.Kd=function a2(){this.a.a--};var Fy=Bdb(Lxb,'VSchedulerImpl/lambda$0$Type',413);var r2;zE(197,685,{},z2);_.ke=function A2(a){a.uf(this)};_.me=function C2(){return u2};_.le=function B2(){return u2};_.Gf=function D2(a){return x2(this,a)};_.b=false;var u2;var Iy=Bdb(Xxb,'StateChangeEvent',197);zE(662,1,{},F2);var Jy=Bdb(Xxb,'URLReference_Serializer',662);zE(168,1,{168:1});_.d=0;var Ky=Bdb($xb,'AsyncBundleLoader',168);zE(367,1,{});var I2;var pz=Bdb($xb,'ConnectorBundleLoader',367);zE(368,1,lwb,O2);_.qe=function P2(a){Ne(this.a.e)};var Ly=Bdb($xb,'ConnectorBundleLoader/lambda$0$Type',368);zE(369,1,_xb,Q2);_.xe=function R2(a){Ne(this.a.e)};var My=Bdb($xb,'ConnectorBundleLoader/lambda$1$Type',369);zE(78,367,{},S2);var oz=Bdb($xb,'ConnectorBundleLoaderXXImpl',78);zE(484,168,{168:1},T2);var nz=Bdb($xb,'ConnectorBundleLoaderXXImpl/1',484);zE(485,1,{},Z2);var mz=Bdb($xb,'ConnectorBundleLoaderXXImpl/1/1',485);zE(486,1,azb,$2);_.Hf=function _2(a,b){return new R5};var Zy=Bdb($xb,'ConnectorBundleLoaderXXImpl/1/1/1',486);zE(495,1,azb,a3);_.Hf=function b3(a,b){return new Xcb};var Ny=Bdb($xb,'ConnectorBundleLoaderXXImpl/1/1/10',495);zE(496,1,azb,c3);_.Hf=function d3(a,b){return new Ycb};var Oy=Bdb($xb,'ConnectorBundleLoaderXXImpl/1/1/11',496);zE(704,1,azb);_.Hf=function e3(a,b){var c,d,e,f,g;c=[];for(e=b,f=0,g=e.length;f<g;++f){d=e[f];c.push(d)}return this.If(a,c)};var qz=Bdb($xb,'JsniInvoker',704);zE(497,704,azb,f3);_.If=function g3(a,b){a.Bf();return null};var Py=Bdb($xb,'ConnectorBundleLoaderXXImpl/1/1/12',497);zE(498,704,azb,h3);_.If=function i3(a,b){a.zf();return null};var Qy=Bdb($xb,'ConnectorBundleLoaderXXImpl/1/1/13',498);zE(499,704,azb,j3);_.If=function k3(a,b){a.Kf();return null};var Ry=Bdb($xb,'ConnectorBundleLoaderXXImpl/1/1/14',499);zE(500,704,azb,l3);_.If=function m3(a,b){a.Lf();return null};var Sy=Bdb($xb,'ConnectorBundleLoaderXXImpl/1/1/15',500);zE(501,704,azb,n3);_.If=function o3(a,b){a.Mf();return null};var Ty=Bdb($xb,'ConnectorBundleLoaderXXImpl/1/1/16',501);zE(502,1,azb,p3);_.Hf=function q3(a,b){return new r3};var Vy=Bdb($xb,'ConnectorBundleLoaderXXImpl/1/1/17',502);zE(503,1,{},r3);var Uy=Bdb($xb,'ConnectorBundleLoaderXXImpl/1/1/17/1',503);zE(504,1,azb,s3);_.Hf=function t3(a,b){return new F2};var Wy=Bdb($xb,'ConnectorBundleLoaderXXImpl/1/1/18',504);zE(505,1,azb,u3);_.Hf=function v3(a,b){return new w3};var Yy=Bdb($xb,'ConnectorBundleLoaderXXImpl/1/1/19',505);zE(506,1,{},w3);var Xy=Bdb($xb,'ConnectorBundleLoaderXXImpl/1/1/19/1',506);zE(487,1,azb,x3);_.Hf=function y3(a,b){return new f6};var ez=Bdb($xb,'ConnectorBundleLoaderXXImpl/1/1/2',487);zE(507,1,azb,z3);_.Hf=function A3(a,b){return new B3};var _y=Bdb($xb,'ConnectorBundleLoaderXXImpl/1/1/20',507);zE(508,1,{},B3);var $y=Bdb($xb,'ConnectorBundleLoaderXXImpl/1/1/20/1',508);zE(509,1,azb,C3);_.Hf=function D3(a,b){return new E3};var bz=Bdb($xb,'ConnectorBundleLoaderXXImpl/1/1/21',509);zE(510,1,{},E3);var az=Bdb($xb,'ConnectorBundleLoaderXXImpl/1/1/21/1',510);zE(511,1,azb,F3);_.Hf=function G3(a,b){return new H3};var dz=Bdb($xb,'ConnectorBundleLoaderXXImpl/1/1/22',511);zE(512,1,{},H3);var cz=Bdb($xb,'ConnectorBundleLoaderXXImpl/1/1/22/1',512);zE(488,1,azb,I3);_.Hf=function J3(a,b){return new Hcb};var fz=Bdb($xb,'ConnectorBundleLoaderXXImpl/1/1/3',488);zE(489,1,azb,K3);_.Hf=function L3(a,b){return new Pcb};var gz=Bdb($xb,'ConnectorBundleLoaderXXImpl/1/1/4',489);zE(490,1,azb,M3);_.Hf=function N3(a,b){return new Qcb};var hz=Bdb($xb,'ConnectorBundleLoaderXXImpl/1/1/5',490);zE(491,1,azb,O3);_.Hf=function P3(a,b){return new Rcb};var iz=Bdb($xb,'ConnectorBundleLoaderXXImpl/1/1/6',491);zE(492,1,azb,Q3);_.Hf=function R3(a,b){return new Scb};var jz=Bdb($xb,'ConnectorBundleLoaderXXImpl/1/1/7',492);zE(493,1,azb,S3);_.Hf=function T3(a,b){return new Ucb};var kz=Bdb($xb,'ConnectorBundleLoaderXXImpl/1/1/8',493);zE(494,1,azb,U3);_.Hf=function V3(a,b){return new Wcb};var lz=Bdb($xb,'ConnectorBundleLoaderXXImpl/1/1/9',494);zE(72,1,{72:1},Y3);_.Yc=function Z3(a){var b;if(a===this){return true}else if(Yq(a,72)){b=a;return Peb(b.b.b+'.'+b.a,this.b.b+'.'+this.a)}else{return false}};_.$c=function $3(){return Wsb(this.b.b+'.'+this.a)};_._c=function _3(){return this.b.b+'.'+this.a};var rz=Bdb($xb,'Method',72);zE(79,21,{79:1,3:1,21:1,20:1},a4);var sz=Bdb($xb,'NoDataException',79);zE(83,1,{83:1},c4,d4);var tz=Bdb($xb,'OnStateChangeMethod',83);zE(5,1,{5:1},f4,g4);_.Yc=function i4(a){var b;if(a===this){return true}else if(Yq(a,5)){b=a;return Peb(b.b,this.b)}else{return false}};_.$c=function j4(){return Wsb(this.b)};_._c=function k4(){return this.b};var vz=Bdb($xb,'Type',5);zE(415,1,{},t4);_.Jf=function z4(a,b,c){this.c[vdb(a),a.k][b]=c};var uz=Bdb($xb,'TypeDataStore',415);zE(371,1,bzb);_.re=function C4(a){WP(this.c,this.b)&&!!a.a&&Cj(a.a)};_.te=function D4(a){this.d=e2(a.a);this.g=false;this.e=TF(this.f)};_.ue=function E4(a){WP(this.c,this.b)&&this.g&&!!this.d&&e2(a.a)==this.d&&U4(this,a.a);this.g=false;this.d=null};_.g=false;var xz=Bdb(ewb,'AbstractClickEventHandler',371);zE(375,1,Mvb,F4);_.De=function G4(a){B4(this.a,a)};var wz=Bdb(ewb,'AbstractClickEventHandler/lambda$0$Type',375);zE(289,43,{},H4);_.kd=function I4(){this.a.sf(NA).sg();c2();this.a.r=true};var yz=Bdb(ewb,'AbstractComponentConnector/2',289);zE(291,1,{715:1,27:1},K4);_.we=function L4(a){J4(this,a)&&fQ(this.a)};var zz=Bdb(ewb,'AbstractComponentConnector/3',291);zE(288,1,Dxb,M4);_.re=function N4(a){iQ(this.a,a)};var Az=Bdb(ewb,'AbstractComponentConnector/lambda$0$Type',288);zE(290,1,_xb,O4);_.xe=function P4(a){jQ(this.a,this.b,a)};var Bz=Bdb(ewb,'AbstractComponentConnector/lambda$1$Type',290);zE(292,1,{716:1,27:1},Q4);_.ve=function R4(a){kQ(this.a,a)};var Cz=Bdb(ewb,'AbstractComponentConnector/lambda$2$Type',292);zE(293,197,{},S4);_.Gf=function T4(a){return true};var Ez=Bdb(ewb,'AbstractConnector/FullStateChangeEvent',293);zE(370,155,ywb);var Hz=Bdb(ewb,'AbstractSingleComponentContainerConnector',370);zE(215,371,bzb);var Jz=Bdb(ewb,'ClickEventHandler',215);zE(664,1,Mvb,j5);_.De=function m5(a){var b;b=SF(a.d);if(this.r){a.a=true;b==svb&&_4(this,a.d);return}switch(b){case tvb:if(!a.a){d5(this,a.d);this.j&&(a.a=true)}break;case itb:case uvb:if(!a.a){this.j&&(a.a=true);c5(this)}break;case 64:this.j&&(a.a=true);break;default:krb(trb((vdb(Mz),Mz.k)),'Non touch event:'+Bj(a.d));a.a=true;}};_.a=0;_.c=0;_.e=0;_.f=0;_.j=false;_.k=0;_.n=0;_.o=0;_.r=false;var V4=false,W4;var Mz=Bdb(ewb,'TouchScrollDelegate',664);zE(666,131,{},o5);_.ad=function p5(a){return 1+$wnd.Math.pow(a-1,3)};_.bd=function q5(){var a;a=dr(this.b-this.a.e);this.a.c-=a;b5(this.a);this.a.r=false};_.cd=function r5(){n5(this,1+$wnd.Math.pow(0,3));this.a.r=false;f5(this.a)};_.ed=function s5(a){n5(this,a)};_.b=0;_.c=0;var Kz=Bdb(ewb,'TouchScrollDelegate/1',666);zE(665,1,_xb,w5);_.xe=function x5(a){e5(this.a,a)};_.b=false;var Lz=Bdb(ewb,'TouchScrollDelegate/TouchScrollHandler',665);zE(400,1,Pvb,y5);_.ze=function z5(a){var b;b=f2();if(!!this.a.c&&(!b||Zg(he(this.a.e),b)||mf((JK(),$doc.body),b))){this.a.c.focus();this.a.c=null}};var Nz=Bdb(ewb,'VContextMenu/1',400);zE(398,138,{732:1,731:1,18:1,27:1,14:1,9:1,16:1,19:1,12:1,13:1},B5);_.Se=function C5(){(OL(),OL(),ML).af((CF(),this.Xc))};_.se=function D5(a){yj(a.a)==27&&$M(this.a,false)};var Oz=Bdb(ewb,'VContextMenu/CMenuBar',398);zE(399,1,Fvb,E5);_.Kd=function F5(){XZ(this.a)};var Pz=Bdb(ewb,'VContextMenu/lambda$0$Type',399);zE(402,1,{},G5);_.We=function H5(a,b){YZ(this.a,a,b)};var Qz=Bdb(ewb,'VContextMenu/lambda$1$Type',402);zE(401,1,Fvb,I5);_.Kd=function J5(){ZZ(this.a)};var Rz=Bdb(ewb,'VContextMenu/lambda$2$Type',401);zE(118,144,mub,K5);_.wd=function L5(a){Le(this,a);CF();if(TG((Fh(),a).type)==ovb){W1(this);a.stopPropagation();return}};_.qd=function M5(a){(CF(),this.Xc).style[hub]=a;a==null||a.length==0?Ae(this.Xc,ezb,true):Ae(this.Xc,ezb,false)};var Tz=Bdb(ewb,'VLabel',118);zE(91,1,{},O5);_.b=0;var Vz=Bdb(ewb,'VLazyExecutor',91);zE(405,43,{},P5);_.kd=function Q5(){this.a.c=null;this.a.a.Kd()};var Uz=Bdb(ewb,'VLazyExecutor/1',405);zE(232,130,{18:1,718:1,27:1,14:1,9:1,729:1,60:1,16:1,31:1,19:1,12:1,13:1,232:1},R5);_.yd=function S5(){if(((CF(),this.Xc).ownerDocument.body.className||'').indexOf('v-generated-body')==-1){this.a=new W5(this);pb(this.a,xub)}};_.Ae=function T5(a){yG();qj($doc).clientWidth|0;qj($doc).clientHeight|0};_.zd=function U5(){if(this.a){ob(this.a);this.a=null}};_.Bd=function V5(a){Ah((CF(),this.Xc),a)};var Zz=Bdb(ewb,'VUI',232);zE(547,43,{},W5);_.kd=function X5(){yG();qj($doc).clientWidth|0;qj($doc).clientHeight|0;pb(this.a.a,xub)};var Xz=Bdb(ewb,'VUI/1',547);zE(546,1,Fvb,Y5);_.Kd=function Z5(){yG();qj($doc).clientWidth|0;qj($doc).clientHeight|0};var Yz=Bdb(ewb,'VUI/lambda$0$Type',546);zE(136,370,{27:1,99:1,121:1,136:1,3:1},f6);_.xf=function g6(){return !this.K&&(this.K=RP(this)),this.K};_.tf=function h6(){return !this.K&&(this.K=RP(this)),this.K};_.yf=function i6(){return c6(this)};_.Af=function j6(){return true};_.uf=function k6(a){var b;lQ(this,a);if(a.Gf($yb)){null.sg((!this.K&&(this.K=RP(this)),this.K).q.a);null.sg((!this.K&&(this.K=RP(this)),this.K).q.c);null.sg((!this.K&&(this.K=RP(this)),this.K).q.d);null.sg((!this.K&&(this.K=RP(this)),this.K).q.e);null.sg((!this.K&&(this.K=RP(this)),this.K).q.b)}if(a.Gf(Ayb)){null.sg((!this.K&&(this.K=RP(this)),this.K).c.a);null.sg((!this.K&&(this.K=RP(this)),this.K).c.b);null.sg((!this.K&&(this.K=RP(this)),this.K).c.c)}a.Gf(Kyb)&&_5(this);if(a.Gf('pageState.title')){b=(!this.K&&(this.K=RP(this)),this.K).g.b;b!=null&&(yG(),$doc.title=b,undefined)}a.Gf(Myb)&&null.sg((!this.K&&(this.K=RP(this)),this.K).j.b!=(icb(),gcb));a.Gf(Qyb)&&null.sg();a.Gf(Iyb)&&wN(this.D,(!this.K&&(this.K=RP(this)),this.K).f)};_.Kf=function l6(){var a,b,c,d;c=this.a;a=(!this.K&&(this.K=RP(this)),this.K).o;d=b6();b=b6();if(Zcb(c,a)){if(a==null){return}!a6(d)?d6(this,null,a,null,b):rh(he((!this.C&&(this.C=gQ(this)),this.C).Wc),a)||$5(this,a);return}krb(trb((vdb(bA),bA.k)),'Changing theme from '+c+' to '+a);d6(this,c,a,d,b)};_.Lf=function m6(){null.sg((!this.K&&(this.K=RP(this)),this.K).p)};_.Mf=function n6(){UP(this,XA).sg((!this.K&&(this.K=RP(this)),this.K).b)};var bA=Bdb(gzb,'UIConnector',136);zE(372,215,bzb,o6);var aA=Bdb(gzb,'UIConnector/1',372);zE(373,43,{},p6);_.kd=function q6(){if(VP(this.a).i<0){ob(this.a.b);this.a.b=null;return}UP(this.a,bB).sg();null.sg()};var $z=Bdb(gzb,'UIConnector/10',373);zE(374,1,{},r6);_.Ef=function s6(a){rrb(trb((vdb(bA),bA.k)),'Could not load theme from '+b6())};_.Ff=function t6(a){krb(trb((vdb(bA),bA.k)),'Loading of '+this.b+' from '+this.c+' completed');!!this.d&&_g(Wg(this.d),this.d);$5(this.a,this.b)};var _z=Bdb(gzb,'UIConnector/11',374);zE(364,1,{},u6);_.Df=function v6(a){var b;b=X0(a);if(b.indexOf(_vb)!=-1){Z0(he(this.a),this);le(this.a,_vb)}};var cA=Bdb(dwb,'Overlay/1',364);zE(365,1,{},w6);_.Df=function x6(a){if(X0(a).indexOf(_vb)!=-1){Z0(he(this.a),this);bN(this.a,this.b)}};_.b=false;var dA=Bdb(dwb,'Overlay/2',365);zE(366,1,{},y6);_.Df=function z6(a){var b;b=X0(a);if(b.indexOf(awb)!=-1){Z0(he(this.a),this);le(this.a,_vb);le(this.a,awb);bN(this.a,this.b)}};_.b=false;var eA=Bdb(dwb,'Overlay/3',366);zE(362,1,{},C6);_.a=0;_.b=0;_.c=0;_.d=0;var fA=Bdb(dwb,'Overlay/PositionAndSize',362);zE(363,131,{},D6);_.ed=function E6(a){aN(this.a,a)};var gA=Bdb(dwb,'Overlay/ResizeAnimation',363);zE(106,1,{},K6);_.Nf=function L6(a){return DE(a)};var iA=Bdb(hzb,'Parser/10methodref$toString$Type',106);zE(313,1,{},M6);_.Nf=function N6(a){return DE(a)};var jA=Bdb(hzb,'Parser/11methodref$toString$Type',313);zE(316,1,{},O6);_.Nf=function P6(a){return DE(a)};var kA=Bdb(hzb,'Parser/12methodref$toString$Type',316);zE(201,1,{},Q6);_.Of=function R6(){return new S0};var lA=Bdb(hzb,'Parser/2methodref$ctor$Type',201);zE(202,1,{},S6);_.Nf=function T6(a){return reb(Vdb(a))};var mA=Bdb(hzb,'Parser/3methodref$valueOf$Type',202);zE(203,1,{},U6);_.Nf=function V6(a){return DE(a)};var nA=Bdb(hzb,'Parser/4methodref$toString$Type',203);zE(204,1,{},W6);_.Nf=function X6(a){return reb(Vdb(a))};var oA=Bdb(hzb,'Parser/5methodref$valueOf$Type',204);zE(104,1,{},Y6);_.Nf=function Z6(a){return DE(a)};var pA=Bdb(hzb,'Parser/6methodref$toString$Type',104);zE(156,1,{},$6);var qA=Bdb(hzb,'Parser/7methodref$intValue$Type',156);zE(312,1,{},_6);var rA=Bdb(hzb,'Parser/8methodref$doubleValue$Type',312);zE(105,1,{},a7);_.Nf=function b7(a){return DE(a)};var sA=Bdb(hzb,'Parser/9methodref$toString$Type',105);zE(129,1,{},c7);_.Nf=function d7(a){return _q(a)?$cb(a):Udb(DE(a))};var tA=Bdb(hzb,'Parser/lambda$12$Type',129);zE(314,1,{},e7);_.Of=function f7(){return new IP};var uA=Bdb(hzb,'Parser/lambda$17$Type',314);zE(107,1,{},g7);_.Of=function h7(){return new TN};var vA=Bdb(hzb,'Parser/lambda$18$Type',107);zE(315,1,{},i7);_.Of=function j7(){return new ZY};var wA=Bdb(hzb,'Parser/lambda$19$Type',315);zE(69,1,{},k7);_.Nf=function l7(a){return F6(this.a,a)};var xA=Bdb(hzb,'Parser/lambda$20$Type',69);zE(317,1,{},m7);_.Nf=function n7(a){var b;return b=new MP,Object.assign(b,a),b};var yA=Bdb(hzb,'Parser/lambda$22$Type',317);zE(205,1,{},o7);_.Nf=function p7(a){return reb(dr(_q(a)?$cb(a):Udb(DE(a))))};var zA=Bdb(hzb,'Parser/lambda$6$Type',205);zE(206,1,{},q7);_.Nf=function r7(a){return reb(dr(_q(a)?$cb(a):Udb(DE(a))))};var AA=Bdb(hzb,'Parser/lambda$7$Type',206);zE(207,1,{},s7);_.Nf=function t7(a){return reb(dr(_q(a)?$cb(a):Udb(DE(a))))};var BA=Bdb(hzb,'Parser/lambda$9$Type',207);zE(681,1,{},y7);_.addPopupButton=function z7(a){var b,c,d,e;d=I6(a);c=d.sheet+'_'+d.row+'_'+d.col;if(xib(this.c,c)){e=wib(this.c,c)}else{zib(this.a,c,b=new DQ);zib(this.c,c,e=(!b.C&&(b.C=new hR),b.C));zib(this.b,c,d);CQ(b,this.e.i);ZP(b,ax,b.a);He((!b.C&&(b.C=new hR),b.C),b,(kn(),kn(),jn));XQ((!b.C&&(b.C=new hR),b.C),b);aR(e,d.col);eR(e,d.row);bR(e,d.headerHidden);gR(e,this.f.V,he(this.f.V));dR(e,d.popupWidth);cR(e,d.popupHeight)}ZQ(e,d.active);d$(this.f,e)};_.cellsUpdated=function A7(a){var b;b=Yeb((vdb($x),$x.k),rtb,'.');rZ(TP(this.e,b).Ne().Ye(),G6(a,new k7(new g7)))};_.closePopup=function B7(a,b){var c;c=wib(this.c,p$(this.f)+'_'+a+'_'+b);!!c&&($M(c.e,false),YQ(c))};_.disconnected=function C7(){!!this.e&&eZ(this.e)};_.editCellComment=function D7(a,b){Z1((ng(),mg),new S9(this,a,b))};_.invalidCellAddress=function E7(){var a;a=Yeb((vdb($x),$x.k),rtb,'.');PO(hQ(TP(this.e,a).Ne().Ye().a).u)};_.layout=function F7(){l_(this.f);k_(hQ(this.e))};_.load=function G7(){B$(this.f)};_.notifyStateChanges=function H7(a,b){var c,d,e,f,g,h;h={};for(e=a,f=0,g=e.length;f<g;++f){d=e[f];h[d]=''}c=new z2(h,b);u7(this,this.e,c);dZ(this.e,c)};_.onPopupButtonOpened=function I7(a,b,c,d){var e,f,g;e=tT(c,d);if(!e){return}f=new L9(Ih((Fh(),e)));CF();if(f.Xc){g=wib(this.c,p$(this.f)+'_'+a+'_'+b);g.e.M||!!g.d&&tV(g.d,g.b,g.k)&&$Q(g);g.c=f;rkb(g.f,f);uL(g.i,f)}};_.refreshCellStyles=function J7(){Z1((ng(),mg),new Q9(this))};_.relayout=function K7(){Z1((ng(),mg),new M9(this))};_.relayoutSheet=function L7(){l_(this.f)};_.removePopupButton=function M7(a){var b,c,d;d=I6(a);b=d.sheet+'_'+d.row+'_'+d.col;c=wib(this.c,b);if(c){n_(this.f,c);Bib(this.c,b);Bib(this.a,b);Bib(this.b,b)}};_.resize=function N7(){w0(this.f)};_.setActionOnColumnHeaderCallback=function O7(a){vab(this.e.i,a)};_.setActionOnCurrentSelectionCallback=function P7(a){wab(this.e.i,a)};_.setActionOnRowHeaderCallback=function Q7(a){xab(this.e.i,a)};_.setCellAddedToSelectionAndSelectedCallback=function R7(a){yab(this.e.i,a)};_.setCellCommentAuthors=function S7(a){VP(this.e).a=J6(a,new a7,new K6)};_.setCellComments=function T7(a){VP(this.e).b=J6(a,new a7,new K6)};_.setCellKeysToEditorIdMap=function U7(a){VP(this.e).c=J6(a,new a7,new K6)};_.setCellRangePaintedCallback=function V7(a){zab(this.e.i,a)};_.setCellRangeSelectedCallback=function W7(a){Aab(this.e.i,a)};_.setCellSelectedCallback=function X7(a){Bab(this.e.i,a)};_.setCellStyleToCSSStyle=function Y7(a){VP(this.e).d=J6(a,new S6,new U6)};_.setCellValueEditedCallback=function Z7(a){Dab(this.e.i,a)};_.setCellsAddedToRangeSelectionCallback=function $7(a){Eab(this.e.i,a)};_.setClass=function _7(a){var b,c,d,e,f,g,h;for(d=this.d,f=0,h=d.length;f<h;++f){b=d[f];re(this.f,b,false)}this.d=a.length==0?fq(MB,stb,2,0,6,1):$eb(a,' ',0);for(c=this.d,e=0,g=c.length;e<g;++e){b=c[e];re(this.f,b,true)}};_.setClearSelectedCellsOnCutCallback=function a8(a){Fab(this.e.i,a)};_.setColGroupingData=function b8(a){VP(this.e).e=G6(a,new k7(new Q6))};_.setColGroupingInversed=function c8(a){VP(this.e).f=a};_.setColGroupingMax=function d8(a){VP(this.e).g=a};_.setColW=function e8(a){VP(this.e).i=Qrb(Yrb(new $rb(null,new Wpb(G6(a,new c7))),new $6))};_.setCols=function f8(a){VP(this.e).j=a};_.setColumnAddedToSelectionCallback=function g8(a){Gab(this.e.i,a)};_.setColumnBufferSize=function h8(a){VP(this.e).k=a};_.setColumnHeaderContextMenuOpenCallback=function i8(a){Hab(this.e.i,a)};_.setColumnIndexToStyleIndex=function j8(a){VP(this.e).n=J6(a,new W6,new o7)};_.setColumnResizedCallback=function k8(a){Iab(this.e.i,a)};_.setColumnSelectedCallback=function l8(a){Jab(this.e.i,a)};_.setComponentIDtoCellKeysMap=function m8(a){VP(this.e).o=J6(a,new a7,new K6)};_.setConditionalFormattingStyles=function n8(a){VP(this.e).p=J6(a,new S6,new U6)};_.setContextMenuOpenOnSelectionCallback=function o8(a){Kab(this.e.i,a)};_.setDefColW=function p8(a){VP(this.e).q=a};_.setDefRowH=function q8(a){VP(this.e).r=a};_.setDeleteSelectedCellsCallback=function r8(a){Lab(this.e.i,a)};_.setDisplayGridlines=function s8(a){VP(this.e).s=a};_.setDisplayRowColHeadings=function t8(a){VP(this.e).t=a};_.setGroupingCollapsedCallback=function u8(a){Nab(this.e.i,a)};_.setHasActions=function v8(a){VP(this.e).u=a};_.setHeight=function w8(a){VP(this.e).jb=a};_.setHiddenColumnIndexes=function x8(a){VP(this.e).v=G6(a,new s7)};_.setHiddenRowIndexes=function y8(a){VP(this.e).w=G6(a,new s7)};_.setHorizontalScrollPositions=function z8(a){VP(this.e).A=Qrb(Yrb(new $rb(null,new Wpb(G6(a,new c7))),new $6))};_.setHorizontalSplitPosition=function A8(a){VP(this.e).B=a};_.setHyperlinksTooltips=function B8(a){VP(this.e).C=J6(a,new a7,new K6)};_.setId=function C8(a){VP(this.e).kb=a};_.setInfoLabelValue=function D8(a){VP(this.e).D=a};_.setInvalidFormulaCells=function E8(a){VP(this.e).F=new _nb(G6(a,new M6))};_.setInvalidFormulaErrorMessage=function F8(a){VP(this.e).G=a};_.setLevelHeaderClickedCallback=function G8(a){Oab(this.e.i,a)};_.setLinkCellClickedCallback=function H8(a){Pab(this.e.i,a)};_.setLockFormatColumns=function I8(a){VP(this.e).H=a};_.setLockFormatRows=function J8(a){VP(this.e).I=a};_.setLockedColumnIndexes=function K8(a){VP(this.e).J=new _nb(G6(a,new q7))};_.setLockedRowIndexes=function L8(a){VP(this.e).K=new _nb(G6(a,new q7))};_.setMergedRegions=function M8(a){VP(this.e).L=G6(a,new k7(new e7))};_.setNamedRanges=function N8(a){VP(this.e).M=G6(a,new Y6)};_.setOnColumnAutofitCallback=function O8(a){Qab(this.e.i,a)};_.setOnConnectorInitCallback=function P8(a){Rab(this.e.i,a)};_.setOnPasteCallback=function Q8(a){Sab(this.e.i,a)};_.setOnRedoCallback=function R8(a){Tab(this.e.i,a)};_.setOnRowAutofitCallback=function S8(a){Uab(this.e.i,a)};_.setOnSheetScrollCallback=function T8(a){Vab(this.e.i,a)};_.setOnUndoCallback=function U8(a){Wab(this.e.i,a)};_.setOverlays=function V8(a){VP(this.e).N=J6(a,new O6,new m7)};_.setPopupButtonClickCallback=function W8(a){Xab(this.e.i,a)};_.setPopupCloseCallback=function X8(a){Yab(this.e.i,a)};_.setProtectedCellWriteAttemptedCallback=function Y8(a){Zab(this.e.i,a)};_.setReload=function Z8(a){VP(this.e).O=true};_.setResources=function $8(a,b){var c;c=G6(b,new Y6);tkb(c,new O9(this,a))};_.setRowAddedToRangeSelectionCallback=function _8(a){$ab(this.e.i,a)};_.setRowBufferSize=function a9(a){VP(this.e).P=a};_.setRowGroupingData=function b9(a){VP(this.e).Q=G6(a,new k7(new Q6))};_.setRowGroupingInversed=function c9(a){VP(this.e).R=a};_.setRowGroupingMax=function d9(a){VP(this.e).S=a};_.setRowH=function e9(a){VP(this.e).T=H6(a)};_.setRowHeaderContextMenuOpenCallback=function f9(a){_ab(this.e.i,a)};_.setRowIndexToStyleIndex=function g9(a){VP(this.e).U=J6(a,new W6,new o7)};_.setRowSelectedCallback=function h9(a){abb(this.e.i,a)};_.setRows=function i9(a){VP(this.e).V=a};_.setRowsResizedCallback=function j9(a){bbb(this.e.i,a)};_.setSelectedCellAndRange=function k9(a,b,c,d,e,f,g,h){var i;i=Yeb((vdb($x),$x.k),rtb,'.');tZ(TP(this.e,i).Ne().Ye(),a,b,c,d,e,f,g,h)};_.setSelectionDecreasePaintedCallback=function l9(a){cbb(this.e.i,a)};_.setSelectionIncreasePaintedCallback=function m9(a){dbb(this.e.i,a)};_.setSetCellStyleWidthRatiosCallback=function n9(a){ebb(this.e.i,a)};_.setSheetAddressChangedCallback=function o9(a){fbb(this.e.i,a)};_.setSheetCreatedCallback=function p9(a){gbb(this.e.i,a)};_.setSheetIndex=function q9(a){VP(this.e).W=a};_.setSheetNames=function r9(a){VP(this.e).X=zkb(G6(a,new Y6),fq(MB,stb,2,0,6,1))};_.setSheetProtected=function s9(a){VP(this.e).Y=a};_.setSheetRenamedCallback=function t9(a){hbb(this.e.i,a)};_.setSheetSelectedCallback=function u9(a){ibb(this.e.i,a)};_.setShiftedCellBorderStyles=function v9(a){VP(this.e).Z=G6(a,new Y6)};_.setUpdateCellCommentCallback=function w9(a){jbb(this.e.i,a)};_.setVerticalScrollPositions=function x9(a){VP(this.e).$=Qrb(Yrb(new $rb(null,new Wpb(G6(a,new c7))),new $6))};_.setVerticalSplitPosition=function y9(a){VP(this.e)._=a};_.setVisibleCellComments=function z9(a){VP(this.e).ab=G6(a,new Y6)};_.setWidth=function A9(a){VP(this.e).nb=a};_.setWorkbookChangeToggle=function B9(a){VP(this.e).bb=a};_.setWorkbookProtected=function C9(a){VP(this.e).cb=a};_.showActions=function D9(a){var b;b=Yeb((vdb($x),$x.k),rtb,'.');uZ(TP(this.e,b).Ne().Ye(),G6(a,new k7(new i7)))};_.showSelectedCell=function E9(a,b,c,d,e,f,g){var h;h=Yeb((vdb($x),$x.k),rtb,'.');vZ(TP(this.e,h).Ne().Ye(),a,b,c,d,e,f,g)};_.updateBottomLeftCellValues=function F9(a){var b;b=Yeb((vdb($x),$x.k),rtb,'.');wZ(TP(this.e,b).Ne().Ye(),G6(a,new k7(new g7)))};_.updateBottomRightCellValues=function G9(a){var b;b=Yeb((vdb($x),$x.k),rtb,'.');xZ(TP(this.e,b).Ne().Ye(),G6(a,new k7(new g7)))};_.updateCellsAndRefreshCellStyles=function H9(){};_.updateFormulaBar=function I9(a,b,c){var d;d=Yeb((vdb($x),$x.k),rtb,'.');yZ(TP(this.e,d).Ne().Ye(),a,b,c)};_.updateTopLeftCellValues=function J9(a){var b;b=Yeb((vdb($x),$x.k),rtb,'.');zZ(TP(this.e,b).Ne().Ye(),G6(a,new k7(new g7)))};_.updateTopRightCellValues=function K9(a){var b;b=Yeb((vdb($x),$x.k),rtb,'.');AZ(TP(this.e,b).Ne().Ye(),G6(a,new k7(new g7)))};var HA=Bdb(hzb,'SpreadsheetJsApi',681);zE(270,13,mub,L9);var CA=Bdb(hzb,'SpreadsheetJsApi/ContentWidget',270);zE(271,1,Fvb,M9);_.Kd=function N9(){l_(this.a.f)};var DA=Bdb(hzb,'SpreadsheetJsApi/lambda$0$Type',271);zE(272,1,{},O9);_.Pf=function P9(a){w7(this.a,this.b,a)};var EA=Bdb(hzb,'SpreadsheetJsApi/lambda$1$Type',272);zE(273,1,Fvb,Q9);_.Kd=function R9(){aW(hQ(v7(this.a).a).V)};var FA=Bdb(hzb,'SpreadsheetJsApi/lambda$2$Type',273);zE(274,1,Fvb,S9);_.Kd=function T9(){x7(this.a,this.b,this.c)};_.b=0;_.c=0;var GA=Bdb(hzb,'SpreadsheetJsApi/lambda$3$Type',274);zE(195,1,{724:1,3:1},pbb);_.qf=function sbb(a,b,c){Mab(this,a,b,c)};var KA=Bdb(hzb,'SpreadsheetServerRpcImpl',195);zE(275,1,{},ubb);_.Cf=function vbb(a,b){qbb(this.a,a,b)};var IA=Bdb(hzb,'SpreadsheetServerRpcImpl/lambda$0$Type',275);zE(276,1,{},wbb);_.Cf=function xbb(a,b){rbb(this.a,a,b)};var JA=Bdb(hzb,'SpreadsheetServerRpcImpl/lambda$1$Type',276);zE(667,1,atb,Jbb);_._c=function Kbb(){return Mj(this.b)+','+this.c+','+this.d+','+this.a+','+this.e+','+this.f+','+this.j+','+this.k+','+this.g+','+this.i};_.a=false;_.c=0;_.d=0;_.e=false;_.f=false;_.g=-1;_.i=-1;_.j=false;_.k=0;var PA=Bdb(vwb,'MouseEventDetails',667);zE(120,4,{120:1,3:1,6:1,4:1},Pbb);var Lbb,Mbb,Nbb;var OA=Cdb(vwb,'MouseEventDetails/MouseButton',120,Qbb);zE(558,1,atb,$bb);_.a=-1;_.b=-1;_.c=-1;_.e=false;_.f=false;_.g=false;_.i=false;_.j=false;_.k=false;_.n=false;_.o=false;_.p=false;_.q=false;_.r=false;_.s=false;_.t=0;_.u=-1;_.v=-1;var QA=Bdb(vwb,'VBrowserDetails',558);var _bb;zE(173,1,{173:1,3:1},bcb);_.Yc=function ccb(a){var b;if(!Yq(a,173)){return false}b=a;if(!Zcb(this.a,b.a)){return false}if(!Zcb(this.b,b.b)){return false}if(!Zcb(this.c,b.c)){return false}if(!Zcb(this.d,b.d)){return false}return true};_.$c=function dcb(){var a;a=1;a=31*a+(this.a==null?0:Wsb(this.a));a=31*a+(this.b==null?0:Wsb(this.b));a=31*a+(this.c==null?0:Wsb(this.c));a=31*a+blb(this.d);return a};_._c=function ecb(){return this.a+':'+this.b+'.'+this.c+'('+otb+')'};var RA=Bdb(Awb,'MethodInvocation',173);zE(116,4,{116:1,3:1,6:1,4:1},jcb);var fcb,gcb,hcb;var SA=Cdb(Awb,'PushMode',116,kcb);zE(416,67,Bwb);var VA=Bdb(Pxb,'AbstractSingleComponentContainerState',416);zE(111,4,{111:1,3:1,6:1,4:1},scb);var ocb,pcb,qcb;var WA=Cdb(Pxb,'ContentMode',111,tcb);zE(77,4,{77:1,3:1,6:1,4:1},Acb);var ucb,vcb,wcb,xcb,ycb;var YA=Cdb(Pxb,'ErrorLevel',77,Bcb);zE(142,4,{142:1,3:1,6:1,4:1},Fcb);var Ccb,Dcb;var $A=Cdb(Kzb,'NotificationRole',142,Gcb);zE(231,1,atb,Hcb);_.a=false;_.b=null;var _A=Bdb(Kzb,'PageState',231);zE(98,4,{98:1,3:1,6:1,4:1},Ncb);var Icb,Jcb,Kcb,Lcb;var aB=Cdb(Kzb,'Transport',98,Ocb);zE(166,416,{67:1,75:1,166:1,3:1},Pcb);_.a=false;_.b=0;_.f='This content is announced automatically and does not need to be navigated into.';_.i=-1;_.n=0;_.p=true;var jB=Bdb(Kzb,'UIState',166);zE(224,1,atb,Qcb);_.a=300;_.b=1500;_.c=5000;var cB=Bdb(Kzb,'UIState/LoadingIndicatorConfigurationState',224);zE(417,1,atb,Rcb);_.d=0;_.n=false;var dB=Bdb(Kzb,'UIState/LocaleData',417);zE(228,1,atb,Scb);var eB=Bdb(Kzb,'UIState/LocaleServiceState',228);zE(92,1,atb,Ucb,Vcb);var fB=Bdb(Kzb,'UIState/NotificationTypeConfiguration',92);zE(226,1,atb,Wcb);_.a=false;_.d=null;var gB=Bdb(Kzb,'UIState/PushConfigurationState',226);zE(227,1,atb,Xcb);_.a=400;_.b=false;_.c='Server connection lost, trying to reconnect...';_.d='Server connection lost.';_.e=10000;_.f=5000;var hB=Bdb(Kzb,'UIState/ReconnectDialogConfigurationState',227);zE(225,1,atb,Ycb);_.a=300;_.b=500;_.c=750;_.d=100;_.e=xub;var iB=Bdb(Kzb,'UIState/TooltipConfigurationState',225);zE(414,24,ltb,cdb);var kB=Bdb('elemental.json','JsonException',414);zE(124,1,{184:1});_._c=function fdb(){return this.a};var oB=Bdb(Htb,'AbstractStringBuilder',124);zE(59,24,ltb,gdb);var pB=Bdb(Htb,'ArithmeticException',59);var rdb,sdb;zE(127,82,{3:1,6:1,127:1,82:1},Zdb);_.ie=function $db(a){return Ydb(this.a,a.a)};_.Yc=function _db(a){return Yq(a,127)&&Wdb(this.a,a.a)};_.$c=function aeb(){return dr(this.a)};_._c=function ceb(){return ''+this.a};_.a=0;var wB=Bdb(Htb,'Float',127);var seb;zE(103,82,{3:1,6:1,103:1,82:1},ueb);_.ie=function web(a){return veb(this.a,a.a)};_.Yc=function xeb(a){return Yq(a,103)&&_D(a.a,this.a)};_.$c=function yeb(){return pE(this.a)};_.Xf=function zeb(){return this.a};_._c=function Aeb(){return ''+qE(this.a)};_.a=0;var CB=Bdb(Htb,'Long',103);var Ceb;zE(46,68,{3:1,21:1,46:1,24:1,20:1},Ieb);var EB=Bdb(Htb,'NumberFormatException',46);zE(74,1,{3:1,74:1},Jeb);_.Yc=function Keb(a){var b;if(Yq(a,74)){b=a;return this.c==b.c&&this.d==b.d&&this.a==b.a&&this.b==b.b}return false};_.$c=function Leb(){return blb(iq(dq(GB,1),atb,1,5,[reb(this.c),this.a,this.d,this.b]))};_._c=function Meb(){return this.a+'.'+this.d+'('+(this.b!=null?this.b:'Unknown Source')+(this.c>=0?':'+this.c:'')+')'};_.c=0;var IB=Bdb(Htb,'StackTraceElement',74);zE(260,124,{184:1},jfb);var JB=Bdb(Htb,'StringBuffer',260);zE(30,124,{184:1},qfb,rfb,sfb);var KB=Bdb(Htb,'StringBuilder',30);zE(826,1,{});var ufb;zE(36,82,{3:1,6:1,82:1,36:1},Ufb,Vfb,Wfb,Xfb);_.ie=function $fb(a){return Mfb(this,a)};_.Yc=function _fb(a){var b;if(this===a){return true}if(Yq(a,36)){b=a;return this.e==b.e&&Mfb(this,b)==0}return false};_.$c=function agb(){var a;if(this.b!=0){return this.b}if(this.a<54){a=aE(this.f);this.b=pE(XD(a,-1));this.b=33*this.b+pE(XD(kE(a,32),-1));this.b=17*this.b+dr(this.e);return this.b}this.b=17*xgb(this.c)+dr(this.e);return this.b};_._c=function cgb(){return Tfb(this)};_.a=0;_.b=0;_.d=0;_.e=0;_.f=0;var Cfb,Dfb,Efb,Ffb,Gfb,Hfb,Ifb,Jfb,Kfb;var QB=Bdb('java.math','BigDecimal',36);zE(11,82,{3:1,6:1,82:1,11:1},Fgb,Ggb,Hgb,Igb,Jgb,Kgb);_.ie=function Mgb(a){return ngb(this,a)};_.Yc=function Ngb(a){return sgb(this,a)};_.$c=function Pgb(){return xgb(this)};_._c=function Rgb(){return ehb(this,0)};_.b=-2;_.c=0;_.d=0;_.e=0;var ggb,hgb,igb,jgb,kgb,lgb;var RB=Bdb('java.math','BigInteger',11);var _gb,ahb;var vhb,whb,xhb;zE(157,691,{149:1});_.clear=function Eib(){Cib(this)};_.containsKey=function Fib(a){return tib(this,a)};_.containsValue=function Gib(a){return uib(a,this.b)||uib(a,this.a)};_.Zf=function Hib(){return new Qib(this)};_.get=function Iib(a){return vib(this,a)};_.put=function Jib(a,b){return yib(this,a,b)};_.remove=function Kib(a){return Aib(this,a)};_.size=function Lib(){return Dib(this)};var VB=Bdb(Ktb,'AbstractHashMap',157);zE(47,692,wtb,Qib);_.clear=function Rib(){Cib(this.a)};_.contains=function Sib(a){return Pib(this,a)};_.Ne=function Tib(){return new Yib(this.a)};_.remove=function Uib(a){var b;if(Pib(this,a)){b=a.fg();Aib(this.a,b);return true}return false};_.size=function Vib(){return Dib(this.a)};var UB=Bdb(Ktb,'AbstractHashMap/EntrySet',47);zE(48,1,{},Yib);_.Ye=function $ib(){return Xib(this)};_.Xe=function Zib(){return this.b};_.Ze=function _ib(){Msb(!!this.c);Gnb(this.e,this);this.c.Ze();this.c=null;this.b=Wib(this);Hnb(this.e,this)};_.b=false;var TB=Bdb(Ktb,'AbstractHashMap/EntrySetIterator',48);zE(703,1,xtb);_.Yc=function gkb(a){var b;if(!Yq(a,100)){return false}b=a;return opb(this.b.value[0],b.fg())&&opb(Kob(this),b.gg())};_.$c=function hkb(){return ppb(this.b.value[0])^ppb(Kob(this))};_._c=function ikb(){return this.b.value[0]+'='+Kob(this)};var eC=Bdb(Ktb,'AbstractMapEntry',703);zE(694,690,vtb);_.addAtIndex=function jkb(a,b){var c;c=this._f(a);c.bg(b)};_.addAllAtIndex=function kkb(a,b){var c,d,e,f;Isb(b);f=false;e=this._f(a);for(d=b.Ne();d.Xe();){c=d.Ye();e.bg(c);f=true}return f};_.getAtIndex=function lkb(b){var c;c=this._f(b);try{return c.Ye()}catch(a){a=UD(a);if(Yq(a,66)){throw VD(new idb("Can't get element "+b))}else throw VD(a)}};_.Ne=function mkb(){return this._f(0)};_.removeAtIndex=function nkb(b){var c,d;c=this._f(b);try{d=c.Ye();c.Ze();return d}catch(a){a=UD(a);if(Yq(a,66)){throw VD(new idb("Can't remove element "+b))}else throw VD(a)}};_.setAtIndex=function okb(b,c){var d,e;d=this._f(b);try{e=d.Ye();d.eg(c);return e}catch(a){a=UD(a);if(Yq(a,66)){throw VD(new idb("Can't set element "+b))}else throw VD(a)}};var gC=Bdb(Ktb,'AbstractSequentialList',694);zE(128,690,ytb,klb);_.contains=function llb(a){return ajb(this,a)!=-1};_.getAtIndex=function mlb(a){return Hsb(a,this.a.length),this.a[a]};_.setAtIndex=function nlb(a,b){var c;c=(Hsb(a,this.a.length),this.a[a]);this.a[a]=b;return c};_.size=function olb(){return this.a.length};_.toArray=function plb(){return jlb(this,fq(GB,atb,1,this.a.length,5,1))};_.Yf=function qlb(a){return jlb(this,a)};var kC=Bdb(Ktb,'Arrays/ArrayList',128);zE(161,1,{38:1},_lb);_.add=function amb(a){throw VD(new Afb)};_.addAll=function bmb(a){throw VD(new Afb)};_.clear=function cmb(){throw VD(new Afb)};_.contains=function dmb(a){return this.b.contains(a)};_.containsAll=function emb(a){return this.b.containsAll(a)};_.isEmpty=function fmb(){return this.b.isEmpty()};_.Ne=function gmb(){return new pmb(this.b.Ne())};_.remove=function hmb(a){throw VD(new Afb)};_.removeAll=function imb(a){throw VD(new Afb)};_.retainAll=function jmb(a){throw VD(new Afb)};_.size=function kmb(){return this.b.size()};_.toArray=function lmb(){return this.b.toArray()};_.Yf=function mmb(a){return this.b.Yf(a)};_._c=function nmb(){return DE(this.b)};var qC=Bdb(Ktb,'Collections/UnmodifiableCollection',161);zE(163,1,{},pmb);_.Xe=function qmb(){return this.b.Xe()};_.Ye=function rmb(){return this.b.Ye()};_.Ze=function smb(){omb()};var pC=Bdb(Ktb,'Collections/UnmodifiableCollectionIterator',163);zE(162,161,vtb,tmb);_.addAtIndex=function umb(a,b){throw VD(new Afb)};_.addAllAtIndex=function vmb(a,b){throw VD(new Afb)};_.Yc=function wmb(a){return M(this.a,a)};_.getAtIndex=function xmb(a){return this.a.getAtIndex(a)};_.$c=function ymb(){return Q(this.a)};_.indexOf=function zmb(a){return this.a.indexOf(a)};_.isEmpty=function Amb(){return this.a.isEmpty()};_.lastIndexOf=function Bmb(a){return this.a.lastIndexOf(a)};_.$f=function Cmb(){return new Hmb(this.a._f(0))};_._f=function Dmb(a){return new Hmb(this.a._f(a))};_.removeAtIndex=function Emb(a){throw VD(new Afb)};_.setAtIndex=function Fmb(a,b){throw VD(new Afb)};_.subList=function Gmb(a,b){return new tmb(this.a.subList(a,b))};var sC=Bdb(Ktb,'Collections/UnmodifiableList',162);zE(223,163,{},Hmb);_.Ze=function Lmb(){omb()};_.bg=function Imb(a){throw VD(new Afb)};_.cg=function Jmb(){return this.a.cg()};_.dg=function Kmb(){return this.a.dg()};_.eg=function Mmb(a){throw VD(new Afb)};var rC=Bdb(Ktb,'Collections/UnmodifiableListIterator',223);zE(389,1,{149:1},Omb);_.getOrDefault=function Vmb(a,b){var c;return c=this.c.get(a),c==null&&!this.c.containsKey(a)?b:c};_.putIfAbsent=function _mb(a,b){var c;return c=this.c.get(a),c!=null?c:Nmb()};_.replace=function bnb(a,b){return this.c.containsKey(a)?Nmb():null};_.clear=function Pmb(){throw VD(new Afb)};_.containsKey=function Qmb(a){return this.c.containsKey(a)};_.containsValue=function Rmb(a){return this.c.containsValue(a)};_.Zf=function Smb(){!this.a&&(this.a=new jnb(this.c.Zf()));return this.a};_.Yc=function Tmb(a){return M(this.c,a)};_.get=function Umb(a){return this.c.get(a)};_.$c=function Wmb(){return Q(this.c)};_.isEmpty=function Xmb(){return this.c.isEmpty()};_.keySet=function Ymb(){!this.b&&(this.b=new fnb(this.c.keySet()));return this.b};_.put=function Zmb(a,b){return Nmb()};_.putAll=function $mb(a){throw VD(new Afb)};_.remove=function anb(a){throw VD(new Afb)};_.size=function cnb(){return this.c.size()};_._c=function dnb(){return DE(this.c)};_.values=function enb(){!this.d&&(this.d=new _lb(this.c.values()));return this.d};var wC=Bdb(Ktb,'Collections/UnmodifiableMap',389);zE(221,161,wtb,fnb);_.Yc=function gnb(a){return M(this.b,a)};_.$c=function hnb(){return Q(this.b)};var yC=Bdb(Ktb,'Collections/UnmodifiableSet',221);zE(390,221,wtb,jnb);_.contains=function knb(a){return this.b.contains(a)};_.containsAll=function lnb(a){return this.b.containsAll(a)};_.Ne=function mnb(){var a;a=this.b.Ne();return new pnb(a)};_.toArray=function nnb(){var a;a=this.b.toArray();inb(a,a.length);return a};_.Yf=function onb(a){var b;b=this.b.Yf(a);inb(b,this.b.size());return b};var vC=Bdb(Ktb,'Collections/UnmodifiableMap/UnmodifiableEntrySet',390);zE(392,1,{},pnb);_.Ye=function rnb(){return new tnb(this.a.Ye())};_.Xe=function qnb(){return this.a.Xe()};_.Ze=function snb(){throw VD(new Afb)};var tC=Bdb(Ktb,'Collections/UnmodifiableMap/UnmodifiableEntrySet/1',392);zE(222,1,xtb,tnb);_.Yc=function unb(a){return this.a.Yc(a)};_.fg=function vnb(){return this.a.fg()};_.gg=function wnb(){return this.a.gg()};_.$c=function xnb(){return this.a.$c()};_.hg=function ynb(a){throw VD(new Afb)};_._c=function znb(){return DE(this.a)};var uC=Bdb(Ktb,'Collections/UnmodifiableMap/UnmodifiableEntrySet/UnmodifiableEntry',222);zE(391,162,{38:1,80:1,180:1},Anb);var xC=Bdb(Ktb,'Collections/UnmodifiableRandomAccessList',391);var Bnb;zE(663,1,atb,Enb);_.Yc=function Fnb(a){return this===a};var zC=Bdb(Ktb,'Comparators/NaturalOrderComparator',663);zE(660,24,ltb,Jnb);var AC=Bdb(Ktb,'ConcurrentModificationException',660);zE(178,1,{3:1,6:1,178:1},Lnb);_.ie=function Mnb(a){return veb(aE(this.a.getTime()),aE(a.a.getTime()))};_.Yc=function Nnb(a){return Yq(a,178)&&_D(aE(this.a.getTime()),aE(a.a.getTime()))};_.$c=function Onb(){var a;a=aE(this.a.getTime());return pE(rE(a,lE(a,32)))};_._c=function Qnb(){return Knb(this)};var BC=Bdb(Ktb,'Date',178);var Rnb,Snb;zE(26,157,ztb,Vnb,Wnb);var CC=Bdb(Ktb,'HashMap',26);zE(35,692,Atb,$nb,_nb);_.add=function aob(a){return Xnb(this,a)};_.clear=function bob(){Cib(this.a)};_.contains=function cob(a){return Ynb(this,a)};_.isEmpty=function dob(){return Dib(this.a)==0};_.Ne=function eob(){var a;return a=(new Hjb(this.a)).a.Zf().Ne(),new Njb(a)};_.remove=function fob(a){return Znb(this,a)};_.size=function gob(){return Dib(this.a)};var DC=Bdb(Ktb,'HashSet',35);zE(481,1,{},mob);_.Ne=function nob(){return new oob(this)};_.c=0;var FC=Bdb(Ktb,'InternalHashCodeMap',481);zE(230,1,{},oob);_.Ye=function qob(){return this.d=this.a[this.c++],this.d};_.Xe=function pob(){var a;if(this.c<this.a.length){return true}a=this.b.next();if(!a.done){this.a=a.value[1];this.c=0;return true}return false};_.Ze=function rob(){lob(this.e,this.d.fg());this.c!=0&&--this.c};_.c=0;_.d=null;var EC=Bdb(Ktb,'InternalHashCodeMap/1',230);var uob;zE(479,1,{},Eob);_.Ne=function Fob(){return new Gob(this)};_.c=0;_.d=0;var IC=Bdb(Ktb,'InternalStringMap',479);zE(229,1,{},Gob);_.Ye=function Iob(){return this.c=this.a,this.a=this.b.next(),new Lob(this.d,this.c,this.d.d)};_.Xe=function Hob(){return !this.a.done};_.Ze=function Job(){Dob(this.d,this.c.value[0])};var GC=Bdb(Ktb,'InternalStringMap/1',229);zE(480,703,xtb,Lob);_.fg=function Mob(){return this.b.value[0]};_.gg=function Nob(){return Kob(this)};_.hg=function Oob(a){return Cob(this.a,this.b.value[0],a)};_.c=0;var HC=Bdb(Ktb,'InternalStringMap/2',480);zE(267,694,{3:1,38:1,80:1},Tob);_.add=function Uob(a){Qob(this,a,this.c.b,this.c);return true};_.clear=function Vob(){Sob(this)};_._f=function Wob(a){var b,c;Ksb(a,this.b);if(a>=this.b>>1){c=this.c;for(b=this.b;b>a;--b){c=c.b}}else{c=this.a.a;for(b=0;b<a;++b){c=c.a}}return new Yob(this,a,c)};_.size=function Xob(){return this.b};_.b=0;var LC=Bdb(Ktb,'LinkedList',267);zE(393,1,{},Yob);_.bg=function Zob(a){Qob(this.d,a,this.b.b,this.b);++this.a;this.c=null};_.Xe=function $ob(){return this.b!=this.d.c};_.cg=function _ob(){return this.b.b!=this.d.a};_.Ye=function apb(){Gsb(this.b!=this.d.c);this.c=this.b;this.b=this.b.a;++this.a;return this.c.c};_.dg=function bpb(){Gsb(this.b.b!=this.d.a);this.c=this.b=this.b.b;--this.a;return this.c.c};_.Ze=function cpb(){var a;Msb(!!this.c);a=this.c.a;Rob(this.d,this.c);this.b==this.c?(this.b=a):--this.a;this.c=null};_.eg=function dpb(a){Msb(!!this.c);this.c.c=a};_.a=0;_.c=null;var JC=Bdb(Ktb,'LinkedList/ListIteratorImpl',393);zE(164,1,{},epb);var KC=Bdb(Ktb,'LinkedList/Node',164);zE(670,1,{});var fpb,gpb;var PC=Bdb(Ktb,'Locale',670);zE(261,670,{},ipb);_._c=function jpb(){return ''};var NC=Bdb(Ktb,'Locale/1',261);zE(262,670,{},kpb);_._c=function lpb(){return 'unknown'};var OC=Bdb(Ktb,'Locale/4',262);zE(186,1,{150:1},rpb);_.mg=function spb(a){this.a.Pf(a)};var TC=Bdb(Ktb,'Spliterator/OfDouble/0methodref$accept$Type',186);zE(187,1,{150:1},tpb);_.mg=function upb(a){vsb(this.a,a)};var UC=Bdb(Ktb,'Spliterator/OfDouble/1methodref$accept$Type',187);zE(188,1,{151:1},vpb);_.ng=function wpb(a){this.a.Pf(reb(a))};var VC=Bdb(Ktb,'Spliterator/OfInt/2methodref$accept$Type',188);zE(189,1,{151:1},xpb);_.ng=function ypb(a){vsb(this.a,reb(a))};var WC=Bdb(Ktb,'Spliterator/OfInt/3methodref$accept$Type',189);zE(255,152,{});_.kg=function Gpb(a){zpb(this,new tpb(a))};_.lg=function Hpb(a){return Yq(a,150)?bsb(this,a):bsb(this,new rpb(a))};var XC=Bdb(Ktb,'Spliterators/AbstractDoubleSpliterator',255);zE(256,152,{});_.kg=function Jpb(a){zpb(this,new xpb(a))};_.lg=function Kpb(a){return Yq(a,151)?gsb(this,a):gsb(this,new vpb(a))};var YC=Bdb(Ktb,'Spliterators/AbstractIntSpliterator',256);zE(123,1,{},Wpb);_.ig=function Xpb(){return this.a};_.jg=function Ypb(){Vpb(this);return this.c};_.kg=function Zpb(a){Vpb(this);Pob(this.d,a)};_.lg=function $pb(a){Isb(a);Vpb(this);if(Vkb(this.d)){a.Pf(Wkb(this.d));return true}return false};_.a=0;_.c=0;var bD=Bdb(Ktb,'Spliterators/IteratorSpliterator',123);zE(199,1,{},aqb);_._c=function bqb(){return !this.a?this.c:this.e.length==0?this.a.a:this.a.a+(''+this.e)};var cD=Bdb(Ktb,'StringJoiner',199);zE(705,1,atb);_.Sf=function oqb(){return 'DUMMY'};_.Wf=function pqb(){return -1};_._c=function rqb(){return this.Sf()};var eqb,fqb,gqb,hqb,iqb,jqb,kqb,lqb,mqb;var pD=Bdb(ivb,'Level',705);zE(514,705,atb,sqb);_.Sf=function tqb(){return 'ALL'};_.Wf=function uqb(){return ptb};var gD=Bdb(ivb,'Level/LevelAll',514);zE(515,705,atb,vqb);_.Sf=function wqb(){return 'CONFIG'};_.Wf=function xqb(){return 700};var hD=Bdb(ivb,'Level/LevelConfig',515);zE(516,705,atb,yqb);_.Sf=function zqb(){return 'FINE'};_.Wf=function Aqb(){return 500};var iD=Bdb(ivb,'Level/LevelFine',516);zE(517,705,atb,Bqb);_.Sf=function Cqb(){return 'FINER'};_.Wf=function Dqb(){return 400};var jD=Bdb(ivb,'Level/LevelFiner',517);zE(518,705,atb,Eqb);_.Sf=function Fqb(){return 'FINEST'};_.Wf=function Gqb(){return 300};var kD=Bdb(ivb,'Level/LevelFinest',518);zE(519,705,atb,Hqb);_.Sf=function Iqb(){return 'INFO'};_.Wf=function Jqb(){return 800};var lD=Bdb(ivb,'Level/LevelInfo',519);zE(520,705,atb,Kqb);_.Sf=function Lqb(){return 'OFF'};_.Wf=function Mqb(){return ftb};var mD=Bdb(ivb,'Level/LevelOff',520);zE(521,705,atb,Nqb);_.Sf=function Oqb(){return 'SEVERE'};_.Wf=function Pqb(){return xub};var nD=Bdb(ivb,'Level/LevelSevere',521);zE(522,705,atb,Qqb);_.Sf=function Rqb(){return Jzb};_.Wf=function Sqb(){return 900};var oD=Bdb(ivb,'Level/LevelWarning',522);zE(539,1,{},Wqb);var Tqb;var qD=Bdb(ivb,'LogManager',539);zE(636,1,atb,Zqb);_.b='';_.c=0;_.e=null;var rD=Bdb(ivb,'LogRecord',636);zE(137,1,{137:1},srb);_.e=false;var $qb=false,_qb=false,arb=false,brb=false,crb=false;var sD=Bdb(ivb,'Logger',137);zE(561,169,{},Mrb);var zD=Bdb(Ltb,'DoubleStreamImpl',561);zE(562,1,{150:1},Orb);_.mg=function Prb(a){Nrb(this.a,a)};var yD=Bdb(Ltb,'DoubleStreamImpl/lambda$0$Type',562);zE(559,169,{},Rrb);var BD=Bdb(Ltb,'IntStreamImpl',559);zE(560,1,{151:1},Trb);_.ng=function Urb(a){Srb(this.a,a)};var AD=Bdb(Ltb,'IntStreamImpl/lambda$6$Type',560);zE(531,255,{},csb);_.og=function dsb(a){return bsb(this,a)};var DD=Bdb(Ltb,'StreamImpl/MapToDoubleSpliterator',531);zE(535,1,{},esb);_.Pf=function fsb(a){this.a.mg((Isb(a),a))};var CD=Bdb(Ltb,'StreamImpl/MapToDoubleSpliterator/lambda$0$Type',535);zE(530,256,{},hsb);_.og=function isb(a){return gsb(this,a)};var FD=Bdb(Ltb,'StreamImpl/MapToIntSpliterator',530);zE(534,1,{},jsb);_.Pf=function ksb(a){this.a.ng(dr((Isb(a),a)))};var ED=Bdb(Ltb,'StreamImpl/MapToIntSpliterator/lambda$0$Type',534);zE(712,1,{});var ND=Bdb('javaemul.internal','ConsoleLogger',712);var er=Edb('char','C');var hr=Edb('int','I');var NA=Ddb(vwb,'ContextClickRpc');var fr=Edb('double','D');var gr=Edb('float','F');var bB=Ddb(Kzb,'UIServerRpc');var XA=Ddb(Pxb,'DelayedCallbackRpc');var UA=Bdb(Awb,'URLReference',null);_=CE('Vaadin.Spreadsheet.Api',y7);_=CE('Vaadin.Spreadsheet.CellData',TN);_=CE('Vaadin.Spreadsheet.OverlayInfo',MP);_.COMPONENT=KP;_.IMAGE=LP;_=CE('Vaadin.Spreadsheet.PopupButtonState',WQ);_=CE('Vaadin.Spreadsheet.SpreadsheetActionDetails',ZY);_=CE('java.io.Serializable');_.$isInstance=ddb;kdb();_=CE('java.lang.Boolean');_.$isInstance=ldb;_=CE('java.lang.CharSequence');_.$isInstance=qdb;_=CE('java.lang.Cloneable');_.$isInstance=Qdb;_=CE('java.lang.Comparable');_.$isInstance=Rdb;_=CE('java.lang.Double');_.$isInstance=Xdb;_=CE('java.lang.Number');_.$isInstance=Tdb;_=CE('java.lang.String');_.$isInstance=Teb;_=CE('java.lang.Throwable');_.of=Gf;var Ysb=(ag(),dg);var gwtOnLoad=gwtOnLoad=vE;tE(FE);wE('permProps',[[[Vzb,Wzb],[Xzb,'gecko1_8']],[[Vzb,Wzb],[Xzb,'gecko1_8']],[[Vzb,Wzb],[Xzb,'safari']]]);if (SpreadsheetApi) SpreadsheetApi.onScriptLoad(gwtOnLoad);})();

let Spreadsheet = Vaadin.Spreadsheet.Api;

export { Spreadsheet };
