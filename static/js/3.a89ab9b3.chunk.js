(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[3],{298:function(e,a,s){e.exports={content:"Dialogs_content__MewNd",dialogs:"Dialogs_dialogs__1dXFH",messages:"Dialogs_messages__1ZIch",textArea:"Dialogs_textArea__39Dxu"}},299:function(e,a,s){e.exports={dialog:"DialogItem_dialog__3Xulf"}},300:function(e,a,s){e.exports={dialog:"Message_dialog__1nyTi"}},304:function(e,a,s){"use strict";s.r(a);var t=s(26),n=s(27),i=s(29),l=s(28),o=s(0),r=s.n(o),c=s(298),d=s.n(c),g=s(299),m=s.n(g),u=s(21),p=function(e){var a="/dialogs/"+e.id;return r.a.createElement("div",{className:m.a.dialogs},r.a.createElement("div",{className:m.a.dialog+" "+m.a.active},r.a.createElement(u.b,{to:a},e.name)))},f=s(300),v=s.n(f),E=function(e){return r.a.createElement("div",null,r.a.createElement("div",{className:v.a.dialog},e.message))},_=s(88),b=s(132),h=s(35),M=s(13),x=s(119),w=Object(h.a)(30),N=Object(b.a)({form:"dialogAddMessageForm"})((function(e){return r.a.createElement("form",{onSubmit:e.handleSubmit},r.a.createElement("div",{className:d.a.textArea},r.a.createElement(_.a,{name:"newMessageText",component:M.a,placeholder:"Please add your message",validate:[h.b,w]})),r.a.createElement("div",null,Object(x.a)("Send Message")))})),j=function(e){var a=e.dialogs.map((function(e){return r.a.createElement(p,{name:e.name,id:e.id,key:e.id})})),s=e.messages.map((function(e){return r.a.createElement(E,{message:e.messages,key:e.id})}));return r.a.createElement("div",{className:d.a.content},r.a.createElement("div",{className:d.a.dialogs},a),r.a.createElement("div",{className:d.a.messages},s,r.a.createElement(N,{onSubmit:function(a){e.addMessage(a.newMessageText)}})),r.a.createElement("div",null))},O=s(11),T=s(130),y=s(129),A=s(8),D=function(e){Object(i.a)(s,e);var a=Object(l.a)(s);function s(){return Object(t.a)(this,s),a.apply(this,arguments)}return Object(n.a)(s,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(j,{dialogs:this.props.dialogs,messages:this.props.messages,newMessageText:this.props.newMessageText,addMessage:this.props.addMessage,updateNewMessageText:this.props.updateNewMessageText}))}}]),s}(r.a.Component);a.default=Object(A.d)(Object(O.b)((function(e){return{dialogs:e.dialogsPage.dialogs,messages:e.dialogsPage.messages,newMessageText:e.dialogsPage.newMessageText,isAuth:e.auth.isAuth}}),{addMessage:T.a}),y.a)(D)}}]);
//# sourceMappingURL=3.a89ab9b3.chunk.js.map