(this["webpackJsonpfio-register"]=this["webpackJsonpfio-register"]||[]).push([[0],{402:function(e,t,a){e.exports=a(804)},445:function(e,t){},447:function(e,t){},529:function(e,t){},550:function(e,t){},551:function(e,t){},801:function(e,t,a){},804:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),o=a(84),c=a.n(o),l=a(37),i=a(38),s=a(39),u=a(40),m=a(366),d=a(367),p=a(228),f=a(812),h=a(821),g=a(819),b=a(820),E=a(818),v=function(e){Object(u.a)(a,e);var t=Object(s.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){var e=this.props.ual.activeUser;return e?r.a.createElement(b.a,{secondary:!0},r.a.createElement(g.a,null,r.a.createElement("span",null,e.accountName,"@",e.requestPermission),r.a.createElement(g.a.Subheader,null,r.a.createElement("a",{href:"",onClick:this.props.ual.logout},"Sign out")))):r.a.createElement(E.a,{content:"Sign in",onClick:this.props.ual.showModal,size:"large",primary:!0})}}]),a}(n.Component),w=a(234),y=a(816),O=a(373),_=a(165),C=a(22),j=a.n(C),k=a(161),S=a(162),x=a(814),A=a(101),F=a(813),R=a(817),U={fio_address:"",owner_fio_public_key:"",max_fee:"",actor:"",tpid:""},I=function(e){Object(u.a)(a,e);var t=Object(s.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={account:void 0,balance:void 0,errors:[],fee:void 0,fields:U,show:!1},e.onOpen=function(t,a){e.props.ual.activeUser;e.resetData(),e.getAccount(),e.getBalance(),e.getFee()},e.resetData=function(){return e.setState({account:void 0,balance:void 0,errors:[],fee:void 0,fields:U})},e.getAccount=function(){var t=e.props.ual.activeUser;t.rpc.get_account(t.accountName).then((function(a){e.setState({account:a,fields:Object.assign({},e.state.fields,{actor:t.accountName,owner_fio_public_key:a.permissions.filter((function(e){return"owner"===e.perm_name}))[0].required_auth.keys[0].key})})}))},e.getBalance=function(){var t=e.props.ual.activeUser;t.rpc.get_currency_balance("fio.token",t.accountName,"fio").then((function(t){return e.setState({balance:t})}))},e.getFee=function(){e.props.ual.activeUser.rpc.get_table_rows({code:"fio.fee",table:"fiofees",scope:"fio.fee",key_type:"i128",index_position:2,lower_bound:"0x1a5f09714542254caaab363d520adfbd",upper_bound:"0x1a5f09714542254caaab363d520adfbd",limit:1}).then((function(t){e.setState({fee:t.rows[0],fields:Object.assign({},e.state.fields,{max_fee:t.rows[0].suf_amount})})}))},e.hide=function(){return e.setState({show:!1})},e.show=function(){return e.setState({show:!0})},e.onChange=function(t,a){var n=a.name,r=a.value;return e.setState({fields:Object.assign({},e.state.fields,Object(S.a)({},n,r))})},e.transact=Object(k.a)(j.a.mark((function t(){var a,n,r,o,c;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=e.state.fields,n=e.props.ual.activeUser,t.prev=2,r=n.accountName,o=n.requestPermission,c={actions:[{account:"fio.address",name:"regaddress",authorization:[{actor:r,permission:o}],data:a}]},t.next=7,n.signTransaction(c,{expireSeconds:120,blocksBehind:3});case 7:e.props.onSuccess(),e.hide(),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(2),e.setState({errors:t.t0.cause.json.fields});case 14:case"end":return t.stop()}}),t,null,[[2,11]])}))),e}return Object(i.a)(a,[{key:"render",value:function(){var e=this,t=this.props,a=t.domain,n=(t.ual.activeUser,this.state),o=(n.account,n.balance),c=n.errors,l=n.fee,i=n.fields,s=n.show;return r.a.createElement(x.a,{closeIcon:!0,content:r.a.createElement(b.a,{padded:!0,size:"large",style:{marginTop:0}},r.a.createElement(b.a,{color:"blue",secondary:!0},r.a.createElement(y.a,{size:"large"},r.a.createElement(y.a.Row,null,r.a.createElement(y.a.Cell,null,"Current FIO Balance"),r.a.createElement(y.a.Cell,{textAlign:"right"},o?r.a.createElement("strong",null,o[0]):r.a.createElement(A.a,{name:"spinner",loading:!0}))),r.a.createElement(y.a.Row,null,r.a.createElement(y.a.Cell,null,"Domain Registration Fee"),r.a.createElement(y.a.Cell,{textAlign:"right"},l?r.a.createElement("strong",null,(l.suf_amount/1e9).toFixed(9)," FIO"):r.a.createElement(A.a,{name:"spinner",loading:!0}))))),r.a.createElement(F.a,{error:c.length,onSubmit:this.transact},Object.keys(i).map((function(t){var a=c.filter((function(e){return e.name===t})),n=Object(_.a)(a,1)[0];return r.a.createElement(F.a.Field,null,r.a.createElement("label",null,t),r.a.createElement(F.a.Input,{error:!!n&&{content:n.error,pointing:"above"},name:t,onChange:e.onChange,value:i[t]}))})),r.a.createElement(R.a,{error:!0,header:"An error occurred while submitting the transaction",content:"Check the red fields above to correct the problems and try again."}),r.a.createElement(b.a,{basic:!0,clearing:!0},r.a.createElement(E.a,{content:"Register",floated:"right",primary:!0})))),header:"Register a FIO Domain",open:s,onClose:this.hide,onOpen:this.onOpen,trigger:r.a.createElement(E.a,{basic:!0,content:"New address@".concat(a.name),icon:"plus",onClick:this.show,primary:!0,size:"small"})})}}]),a}(n.Component),D={fio_domain:"",owner_fio_public_key:"",max_fee:"",actor:"",tpid:""},N=function(e){Object(u.a)(a,e);var t=Object(s.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={account:void 0,balance:void 0,errors:[],fee:void 0,fields:D,show:!1},e.onOpen=function(t,a){e.props.ual.activeUser;e.resetData(),e.getAccount(),e.getBalance(),e.getFee()},e.resetData=function(){return e.setState({account:void 0,balance:void 0,errors:[],fee:void 0,fields:D})},e.getAccount=function(){var t=e.props.ual.activeUser;t.rpc.get_account(t.accountName).then((function(a){e.setState({account:a,fields:Object.assign({},e.state.fields,{actor:t.accountName,owner_fio_public_key:a.permissions.filter((function(e){return"owner"===e.perm_name}))[0].required_auth.keys[0].key})})}))},e.getBalance=function(){var t=e.props.ual.activeUser;t.rpc.get_currency_balance("fio.token",t.accountName,"fio").then((function(t){return e.setState({balance:t})}))},e.getFee=function(){e.props.ual.activeUser.rpc.get_table_rows({code:"fio.fee",table:"fiofees",scope:"fio.fee",key_type:"i128",index_position:2,lower_bound:"0x1a5f09714542254caaab363d520adfbd",upper_bound:"0x1a5f09714542254caaab363d520adfbd",limit:1}).then((function(t){e.setState({fee:t.rows[0],fields:Object.assign({},e.state.fields,{max_fee:t.rows[0].suf_amount})})}))},e.hide=function(){return e.setState({show:!1})},e.show=function(){return e.setState({show:!0})},e.onChange=function(t,a){var n=a.name,r=a.value;return e.setState({fields:Object.assign({},e.state.fields,Object(S.a)({},n,r))})},e.transact=Object(k.a)(j.a.mark((function t(){var a,n,r,o,c;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=e.state.fields,n=e.props.ual.activeUser,t.prev=2,r=n.accountName,o=n.requestPermission,c={actions:[{account:"fio.address",name:"regdomain",authorization:[{actor:r,permission:o}],data:a}]},t.next=7,n.signTransaction(c,{expireSeconds:120,blocksBehind:3});case 7:e.props.onSuccess(),e.hide(),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(2),e.setState({errors:t.t0.cause.json.fields});case 14:case"end":return t.stop()}}),t,null,[[2,11]])}))),e}return Object(i.a)(a,[{key:"render",value:function(){var e=this,t=(this.props.ual.activeUser,this.state),a=(t.account,t.balance),n=t.errors,o=t.fee,c=t.fields,l=t.show;return r.a.createElement(x.a,{closeIcon:!0,content:r.a.createElement(b.a,{padded:!0,size:"large",style:{marginTop:0}},r.a.createElement(b.a,{color:"blue",secondary:!0},r.a.createElement(y.a,{size:"large"},r.a.createElement(y.a.Row,null,r.a.createElement(y.a.Cell,null,"Current FIO Balance"),r.a.createElement(y.a.Cell,{textAlign:"right"},a?r.a.createElement("strong",null,a[0]):r.a.createElement(A.a,{name:"spinner",loading:!0}))),r.a.createElement(y.a.Row,null,r.a.createElement(y.a.Cell,null,"Domain Registration Fee"),r.a.createElement(y.a.Cell,{textAlign:"right"},o?r.a.createElement("strong",null,(o.suf_amount/1e9).toFixed(9)," FIO"):r.a.createElement(A.a,{name:"spinner",loading:!0}))))),r.a.createElement(F.a,{error:n.length,onSubmit:this.transact},Object.keys(c).map((function(t){var a=n.filter((function(e){return e.name===t})),o=Object(_.a)(a,1)[0];return r.a.createElement(F.a.Field,null,r.a.createElement("label",null,t),r.a.createElement(F.a.Input,{error:!!o&&{content:o.error,pointing:"above"},name:t,onChange:e.onChange,value:c[t]}))})),r.a.createElement(R.a,{error:!0,header:"An error occurred while submitting the transaction",content:"Check the red fields above to correct the problems and try again."}),r.a.createElement(b.a,{basic:!0,clearing:!0},r.a.createElement(E.a,{content:"Register",floated:"right",primary:!0})))),header:"Register a FIO Domain",open:l,onClose:this.hide,onOpen:this.onOpen,trigger:r.a.createElement(E.a,{content:"Register Domain",floated:"right",icon:"plus",onClick:this.show,primary:!0})})}}]),a}(n.Component),B=function(e){Object(u.a)(a,e);var t=Object(s.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={addresses:[],domains:[]},e.sync=function(){var t=e.props.ual.activeUser;e.getDomains(t.accountName)},e.onSuccess=function(){e.sync()},e.getDomains=function(t){e.props.ual.activeUser.rpc.get_table_rows({code:"fio.address",table:"domains",scope:"fio.address",key_type:"name",index_position:2,lower_bound:t,upper_bound:t,limit:10}).then((function(t){e.setState({domains:t.rows}),t.rows.length&&t.rows.map(e.getAddresses)}))},e.getAddresses=function(t){e.props.ual.activeUser.rpc.get_table_rows({code:"fio.address",table:"fionames",scope:"fio.address",key_type:"i128",index_position:2,lower_bound:t.domainhash,upper_bound:t.domainhash,limit:10}).then((function(t){e.setState({addresses:Object(O.uniqBy)([].concat(Object(w.a)(e.state.addresses),Object(w.a)(t.rows)),"id")})}))},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){this.props.ual.activeUser&&this.sync()}},{key:"render",value:function(){var e=this,t=this.state,a=t.addresses,n=t.domains;return r.a.createElement(f.a,{fluid:!0},r.a.createElement(b.a,{attached:"top",clearing:!0,secondary:!0},r.a.createElement(g.a,{floated:"left",size:"large"},"FIO Domains"),r.a.createElement(N,{onSuccess:this.onSuccess,ual:this.props.ual}),r.a.createElement(E.a,{content:"Refresh Data",floated:"right",icon:"refresh",onClick:this.sync})),!n.length&&r.a.createElement(b.a,{attached:"bottom",size:"large",textAlign:"center"},r.a.createElement(g.a,null,"No domains associated to this account. Register one to get started.")),!!n.length&&r.a.createElement(y.a,{attached:"bottom",striped:!0},r.a.createElement(y.a.Header,null,r.a.createElement(y.a.Row,null,r.a.createElement(y.a.HeaderCell,null,"Domain Name"),r.a.createElement(y.a.HeaderCell,null,"Addresses"))),r.a.createElement(y.a.Body,null,n.map((function(t){var n=a.filter((function(e){return e.domain===t.name}));return r.a.createElement(y.a.Row,null,r.a.createElement(y.a.Cell,{collapsing:!0,verticalAlign:"top"},r.a.createElement(g.a,null,"@",t.name),r.a.createElement(y.a,{definition:!0},r.a.createElement(y.a.Body,null,r.a.createElement(y.a.Row,null,r.a.createElement(y.a.Cell,null,"Public"),r.a.createElement(y.a.Cell,null,t.is_public?"True":"False")),r.a.createElement(y.a.Row,null,r.a.createElement(y.a.Cell,null,"Expires"),r.a.createElement(y.a.Cell,null,new Date(1e3*t.expiration).toUTCString()))))),r.a.createElement(y.a.Cell,null,n.length?r.a.createElement(y.a,{definition:!0},r.a.createElement(y.a.Header,null,r.a.createElement(y.a.HeaderCell,null,"Address"),r.a.createElement(y.a.HeaderCell,null,"Public Key"),r.a.createElement(y.a.HeaderCell,null,"Expires")),r.a.createElement(y.a.Body,null,n.map((function(e){return r.a.createElement(y.a.Row,null,r.a.createElement(y.a.Cell,null,e.name),r.a.createElement(y.a.Cell,null,e.addresses[0].public_address),r.a.createElement(y.a.Cell,null,new Date(1e3*e.expiration).toUTCString()))})))):r.a.createElement(b.a,null,r.a.createElement(g.a,{size:"small"},"No associated addresses",r.a.createElement(g.a.Subheader,null,"Create a new FIO address for this domain using the button below."))),r.a.createElement(I,{domain:t,onSuccess:e.onSuccess,ual:e.props.ual})))})))))}}]),a}(n.Component),z=function(e){Object(u.a)(a,e);var t=Object(s.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){var e=this.props.ual;return r.a.createElement(f.a,{style:{margin:"3em 0"}},r.a.createElement(h.a,{relaxed:!0},r.a.createElement(h.a.Row,null,r.a.createElement(h.a.Column,{width:10},r.a.createElement(g.a,{size:"large"},"FIO Registration Helper",r.a.createElement(g.a.Subheader,null,"A tool to assist with domain and address registration."))),r.a.createElement(h.a.Column,{width:6,textAlign:"right"},r.a.createElement(v,{ual:e}))),r.a.createElement(h.a.Row,{columns:1},r.a.createElement(h.a.Column,null,e.activeUser?r.a.createElement(B,{ual:e}):r.a.createElement(b.a,{size:"large",stacked:!0,textAlign:"center"},r.a.createElement("p",null,"Login to manage domains and addresses for the FIO blockchain."),r.a.createElement(v,{ual:e}))))))}}]),a}(n.Component),H={chainId:"b20901380af44ef59c5918439a1f9a41d83669020319a80574b804a5f95cbd7e",name:"FIO Testnet",rpcEndpoints:[{protocol:"https",host:"fiotestnet.greymass.com",port:443}]},T=function(e){Object(u.a)(a,e);var t=Object(s.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){var e=new m.Anchor([H],{appName:"fio-register"}),t=new d.Scatter([H],{appName:"fio-register"});return r.a.createElement(p.UALProvider,{appName:"FIO Registration",authenticators:[e,t],chains:[H]},r.a.createElement(q,null))}}]),a}(n.Component),q=Object(p.withUAL)(z),P=function(){return r.a.createElement(T,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(801);c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(P,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[402,1,2]]]);
//# sourceMappingURL=main.081a381a.chunk.js.map