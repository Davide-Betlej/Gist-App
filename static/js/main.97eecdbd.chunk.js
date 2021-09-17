(this["webpackJsonpgist-test"]=this["webpackJsonpgist-test"]||[]).push([[0],{135:function(t,e,n){},163:function(t,e,n){"use strict";n.r(e);var i=n(0),s=n.n(i),a=n(12),c=n.n(a),r=n(62),o=n.n(r),l=n(88),d=n(31),u=n(32),h=n(26),j=n(35),b=n(34),p=n(218),O=n(116),v=n.n(O),x=n(227),m=(n(135),n(228)),g=n(85),f=n.n(g),y=n(231),k=n(219),C=n(234),G=n(232),D=n(109),w=n.n(D),S=n(220),F=n(2),E=function(t){Object(j.a)(n,t);var e=Object(b.a)(n);function n(){return Object(d.a)(this,n),e.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){var t=this;return Object(F.jsxs)(y.a,{open:this.props.open,children:[Object(F.jsx)(p.a,{}),Object(F.jsx)(k.a,{children:this.props.dataFound?this.props.gistData.slice(0,20).map((function(e,n){return Object(F.jsxs)(G.a,{button:!0,onClick:function(n){return t.props.onClick(e.id,n)},children:[Object(F.jsx)(S.a,{children:Object(F.jsx)(w.a,{})}),Object(F.jsx)(C.a,{primary:e.description})]},n)})):Object(F.jsx)(G.a,{children:Object(F.jsx)(C.a,{primary:"No gists yet..."})})})]})}}]),n}(s.a.Component),N=n(110),P=n(235),R=n(229),A=n(115),B=n.n(A),I=function(t){Object(j.a)(n,t);var e=Object(b.a)(n);function n(){return Object(d.a)(this,n),e.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return Object(F.jsxs)("div",{children:[this.props.gistPreview||!this.props.dataFound?Object(F.jsx)("div",{className:"GistPreview",children:Object(F.jsx)(N.a,{className:"Gist",id:this.props.gistPreview})}):null,Object(F.jsx)(P.a,{}),this.props.gistPreview||!this.props.dataFound?Object(F.jsx)("div",{className:"DeleteButton",children:Object(F.jsx)(R.a,{onClick:this.props.deleteGist,variant:"contained",color:"secondary",startIcon:Object(F.jsx)(B.a,{}),children:"Delete"})}):null]})}}]),n}(s.a.Component),q=n(14),M=n(85),T=function(t){Object(j.a)(n,t);var e=Object(b.a)(n);function n(t){var i;return Object(d.a)(this,n),(i=e.call(this,t)).token="CHANGE THIS TOKEN",i.client=M.create({baseURL:"https://api.github.com/",responseType:"json",headers:{Accept:"application/vnd.github.v3+json",Authorization:"token "+i.token}}),i}return Object(u.a)(n,[{key:"getRequest",value:function(t){return this.client.get(t)}},{key:"postRequest",value:function(t,e){return this.client.post(t,e)}},{key:"deleteRequest",value:function(t){return this.client.delete(t)}},{key:"patchRequest",value:function(t,e){return this.client.patch(t,e)}},{key:"root",value:function(){return this.getRequest("/")}},{key:"createGist",value:function(t){return this.postRequest("/gists",t)}},{key:"getGist",value:function(t){return this.getRequest("/gists/".concat(t))}},{key:"deleteGist",value:function(t){return this.deleteRequest("/gists/".concat(t))}},{key:"editGist",value:function(t,e){return this.patchRequest("/gists/".concat(t),e)}}]),n}(s.a.Component),W=n(237),H=n(236),L=n(90),J=n.n(L),U={description:"",extension:"",content:"",editDescription:"",editExtension:"",editContent:""},z=function(t){Object(j.a)(n,t);var e=Object(b.a)(n);function n(t){var i;return Object(d.a)(this,n),(i=e.call(this,t)).editFormReset=function(){document.getElementById("EditForm").reset(),i.setState(U)},i.formReset=function(){document.getElementById("SubmitForm").reset(),i.setState(U)},i.state=U,i.handleChange=i.handleChange.bind(Object(h.a)(i)),i.handleSubmit=i.handleSubmit.bind(Object(h.a)(i)),i.handleEdit=i.handleEdit.bind(Object(h.a)(i)),i}return Object(u.a)(n,[{key:"handleChange",value:function(t){this.setState(Object(q.a)({},t.target.name,t.target.value))}},{key:"handleSubmit",value:function(t){t.preventDefault();var e={description:this.state.description,public:!0,files:Object(q.a)({},this.state.extension,{content:this.state.content})};(new T).createGist(e).then((function(){return alert("Gist Submitted!")})).catch((function(t){return alert(t)})),this.formReset()}},{key:"handleEdit",value:function(t){t.preventDefault();var e={description:this.state.editDescription,files:Object(q.a)({},this.state.editExtension,{content:this.state.editContent})};(new T).editGist(this.props.gistPreview,e).then((function(){return alert("Gist Edited!")})).catch((function(t){return alert(t)})),this.editFormReset()}},{key:"render",value:function(){return Object(F.jsxs)("div",{style:{display:"flex",width:"100%",justifyContent:"space-around"},children:[Object(F.jsx)("div",{className:"AddGistDiv",children:Object(F.jsxs)(H.a,{sx:{width:"100%",maxWidth:500,border:"1px solid grey",padding:"2rem"},children:[Object(F.jsx)(W.a,{variant:"h2",component:"div",gutterBottom:!0,align:"center",children:"Add Gist:"}),Object(F.jsxs)("form",{id:"SubmitForm",onSubmit:this.handleSubmit,onChange:this.handleChange,children:[Object(F.jsxs)("div",{children:[Object(F.jsx)("label",{htmlFor:"description",children:"Description:"}),Object(F.jsx)("input",{className:"GistDesc",type:"text",name:"description",id:"description",placeholder:"Hello World example"})]}),Object(F.jsx)("br",{}),Object(F.jsx)("label",{htmlFor:"extension",children:"Filename(with extension): "}),Object(F.jsx)("input",{className:"GistExt",type:"text",name:"extension",id:"extension",placeholder:"helloWorld.js"}),Object(F.jsx)("br",{}),Object(F.jsxs)("div",{className:"TextArea",children:[Object(F.jsx)(W.a,{variant:"h4",component:"div",gutterBottom:!0,align:"center",children:"Code:"}),Object(F.jsx)("textarea",{name:"content",className:"AddGistTextArea",placeholder:"console.log('Hello World!')"})]}),Object(F.jsx)("br",{}),Object(F.jsx)("div",{className:"DivButton",children:Object(F.jsx)(R.a,{variant:"contained",endIcon:Object(F.jsx)(J.a,{}),type:"submit",children:"Submit"})})]})]})}),Object(F.jsx)("div",{className:"EditGistDiv",children:Object(F.jsxs)(H.a,{sx:{width:"100%",maxWidth:500,border:"1px solid grey",padding:"2rem"},children:[Object(F.jsx)(W.a,{variant:"h2",component:"div",gutterBottom:!0,align:"center",children:"Update Gist:"}),Object(F.jsxs)("form",{id:"EditForm",onChange:this.handleChange,children:[Object(F.jsxs)("div",{children:[Object(F.jsx)("label",{htmlFor:"description",children:"Description:"}),Object(F.jsx)("input",{className:"GistDesc",type:"text",name:"editDescription",id:"description"})]}),Object(F.jsx)("br",{}),Object(F.jsx)("label",{htmlFor:"extension",children:"Filename(with extension): "}),Object(F.jsx)("input",{className:"GistExt",type:"text",name:"editExtension",id:"extension"}),Object(F.jsx)("br",{}),Object(F.jsxs)("div",{className:"TextArea",children:[Object(F.jsx)(W.a,{variant:"h4",component:"div",gutterBottom:!0,align:"center",children:"Code:"}),Object(F.jsx)("textarea",{name:"editContent",className:"AddGistTextArea"})]}),Object(F.jsx)("br",{}),Object(F.jsx)("div",{className:"DivButton",children:Object(F.jsx)(R.a,{variant:"contained",endIcon:Object(F.jsx)(J.a,{}),type:"submit",onClick:this.handleEdit,children:"Submit"})})]})]})})]})}}]),n}(s.a.Component),K=n(117),Q=n.n(K),V=function(t){Object(j.a)(n,t);var e=Object(b.a)(n);function n(){var t;return Object(d.a)(this,n),(t=e.call(this)).state={dataFound:!0,open:!1,gistPreview:"",gistData:[]},t.componentDidMount=t.componentDidMount.bind(Object(h.a)(t)),t.handleOverlayClick=t.handleOverlayClick.bind(Object(h.a)(t)),t.handleClick=t.handleClick.bind(Object(h.a)(t)),t.handleMenuIcon=t.handleMenuIcon.bind(Object(h.a)(t)),t.deleteGist=t.deleteGist.bind(Object(h.a)(t)),t}return Object(u.a)(n,[{key:"handleClick",value:function(t,e){e.preventDefault(),this.setState({open:!1,gistPreview:t})}},{key:"handleMenuIcon",value:function(t){t.preventDefault(),!0===this.state.open?this.setState({open:!1}):!1===this.state.open&&this.setState({open:!0})}},{key:"handleOverlayClick",value:function(){!0===this.state.open?this.setState({open:!1}):!1===this.state.open&&this.setState({open:!0})}},{key:"getGists",value:function(){var t=Object(l.a)(o.a.mark((function t(){var e;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,f.a.get("https://api.github.com/users/Davide-Betlej/gists");case 3:return e=t.sent,t.abrupt("return",e);case 7:t.prev=7,t.t0=t.catch(0),console.error(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(){return t.apply(this,arguments)}}()},{key:"componentDidMount",value:function(){var t=Object(l.a)(o.a.mark((function t(){var e;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.getGists();case 2:200===(e=t.sent).status?(this.setState({gistPreview:e.data[0].id,gistData:e.data}),console.log(e.data),console.log("All good!")):this.setState({dataFound:!1});case 4:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"deleteGist",value:function(){(new T).deleteGist(this.state.gistPreview).then((function(t){return console.log(t)})).then((function(){return alert("Gist Deleted!")})).catch((function(t){return alert(t)})),this.setState({gistPreview:""})}},{key:"render",value:function(){return Object(F.jsxs)("div",{children:[Object(F.jsx)(p.a,{position:"sticky",children:Object(F.jsxs)(x.a,{children:[Object(F.jsx)(v.a,{onClick:this.handleMenuIcon,style:{cursor:"pointer"}}),Object(F.jsx)(W.a,{variant:"h4",component:"div",align:"center",marginLeft:"2rem",noWrap:"true",children:"Gist App - Davide Betlej"}),Object(F.jsx)(m.a,{placeholder:"Search\u2026"}),Object(F.jsx)(Q.a,{onClick:this.componentDidMount,style:{marginLeft:100,cursor:"pointer"}})]})}),Object(F.jsx)(E,{open:this.state.open,dataFound:this.state.dataFound,gistData:this.state.gistData,handleoverlayclick:this.handleOverlayClick,onClick:this.handleClick}),Object(F.jsx)(I,{gistPreview:this.state.gistPreview,dataFound:this.state.dataFound,deleteGist:this.deleteGist}),Object(F.jsx)(z,{gistPreview:this.state.gistPreview})]})}}]),n}(s.a.Component);c.a.render(Object(F.jsx)("div",{children:Object(F.jsx)(V,{})}),document.getElementById("root"))}},[[163,1,2]]]);
//# sourceMappingURL=main.97eecdbd.chunk.js.map