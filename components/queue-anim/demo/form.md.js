webpackJsonp([173,359],{752:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}var p=(s(99),s(98)),o=t(p),e=(s(35),s(34)),c=t(e),u=(s(24),s(23)),l=t(u),k=(s(17),s(25)),i=t(k),r=(s(7),s(6)),m=t(r),g=(s(43),s(41)),d=t(g),f=(s(47),s(46)),y=t(f),v=Object.assign||function(n){for(var a=1;a<arguments.length;a++){var s=arguments[a];for(var t in s)Object.prototype.hasOwnProperty.call(s,t)&&(n[t]=s[t])}return n},h=s(1),w=t(h),b=s(2);t(b);n.exports={content:[["p","\u8868\u5355\u7ec4\u5408\u7684\u8fdb\u573a\u4e0e\u51fa\u573a\u52a8\u753b\u3002"]],meta:{order:4,title:"\u8868\u5355\u52a8\u753b\u8fdb\u51fa\u573a",filename:"components/queue-anim/demo/form.md",id:"components-queue-anim-demo-form"},toc:["ul"],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword" >import</span> <span class="token punctuation" >{</span> QueueAnim<span class="token punctuation" >,</span> Button<span class="token punctuation" >,</span> Radio<span class="token punctuation" >,</span> Input<span class="token punctuation" >,</span> Form<span class="token punctuation" >,</span> Row<span class="token punctuation" >,</span> Col <span class="token punctuation" >}</span> <span class="token keyword" >from</span> <span class="token string" >\'antd\'</span><span class="token punctuation" >;</span>\n<span class="token keyword" >const</span> FormItem <span class="token operator" >=</span> Form<span class="token punctuation" >.</span>Item<span class="token punctuation" >;</span>\n<span class="token keyword" >const</span> RadioGroup <span class="token operator" >=</span> Radio<span class="token punctuation" >.</span>Group<span class="token punctuation" >;</span>\n\n<span class="token keyword" >const</span> Test <span class="token operator" >=</span> React<span class="token punctuation" >.</span><span class="token function" >createClass</span><span class="token punctuation" >(</span><span class="token punctuation" >{</span>\n  <span class="token function" >getInitialState</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    <span class="token keyword" >return</span> <span class="token punctuation" >{</span>\n      show<span class="token punctuation" >:</span> <span class="token boolean" >true</span><span class="token punctuation" >,</span>\n    <span class="token punctuation" >}</span><span class="token punctuation" >;</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n  <span class="token function" >onClick</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    <span class="token keyword" >this</span><span class="token punctuation" >.</span><span class="token function" >setState</span><span class="token punctuation" >(</span><span class="token punctuation" >{</span>\n      show<span class="token punctuation" >:</span> <span class="token operator" >!</span><span class="token keyword" >this</span><span class="token punctuation" >.</span>state<span class="token punctuation" >.</span>show<span class="token punctuation" >,</span>\n    <span class="token punctuation" >}</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n  <span class="token function" >render</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    <span class="token keyword" >const</span> formItemLayout <span class="token operator" >=</span> <span class="token punctuation" >{</span>\n      labelCol<span class="token punctuation" >:</span> <span class="token punctuation" >{</span> span<span class="token punctuation" >:</span> <span class="token number" >6</span> <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n      wrapperCol<span class="token punctuation" >:</span> <span class="token punctuation" >{</span> span<span class="token punctuation" >:</span> <span class="token number" >14</span> <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n    <span class="token punctuation" >}</span><span class="token punctuation" >;</span>\n    <span class="token keyword" >return</span> <span class="token punctuation" >(</span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span><span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>p</span> <span class="token attr-name" >className</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>buttons<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\n          <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Button</span> <span class="token attr-name" >type</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>primary<span class="token punctuation" >"</span></span> <span class="token attr-name" >onClick</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token keyword" >this</span><span class="token punctuation" >.</span>onClick<span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span>\u5207\u6362<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Button</span><span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>p</span><span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>QueueAnim</span> <span class="token attr-name" >component</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span>Form<span class="token punctuation" >}</span></span> <span class="token attr-name" >className</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>ant-form</span> <span class="token attr-name" >ant-form-horizontal"</span> <span class="token attr-name" >type</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>bottom<span class="token punctuation" >"</span></span> <span class="token attr-name" >leaveReverse</span><span class="token punctuation" >></span></span>\n          <span class="token punctuation" >{</span><span class="token keyword" >this</span><span class="token punctuation" >.</span>state<span class="token punctuation" >.</span>show <span class="token operator" >?</span> <span class="token punctuation" >[</span>\n            <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>FormItem</span> <span class="token attr-name" >key</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>item1<span class="token punctuation" >"</span></span> <span class="token attr-name" >{...formItemLayout}</span> <span class="token attr-name" >label</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>\u7528\u6237\u540d\uff1a<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\n              <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>p</span> <span class="token attr-name" >className</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>ant-form-text<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\u5927\u773c\u840c minion<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>p</span><span class="token punctuation" >></span></span>\n            <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>FormItem</span><span class="token punctuation" >></span></span><span class="token punctuation" >,</span>\n            <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>FormItem</span> <span class="token attr-name" >key</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>item2<span class="token punctuation" >"</span></span> <span class="token attr-name" >{...formItemLayout}</span> <span class="token attr-name" >label</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>\u5bc6\u7801\uff1a<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\n              <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Input</span> <span class="token attr-name" >type</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>password<span class="token punctuation" >"</span></span> <span class="token attr-name" >placeholder</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>\u8bf7\u8f93\u5165\u5bc6\u7801<span class="token punctuation" >"</span></span> <span class="token punctuation" >/></span></span>\n            <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>FormItem</span><span class="token punctuation" >></span></span><span class="token punctuation" >,</span>\n            <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>FormItem</span> <span class="token attr-name" >key</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>item3<span class="token punctuation" >"</span></span> <span class="token attr-name" >{...formItemLayout}</span> <span class="token attr-name" >label</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>\u60a8\u7684\u6027\u522b\uff1a<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\n              <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>RadioGroup</span><span class="token punctuation" >></span></span>\n                <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Radio</span> <span class="token attr-name" >value</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>male<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\u7537\u7684<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Radio</span><span class="token punctuation" >></span></span>\n                <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Radio</span> <span class="token attr-name" >value</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>female<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\u5973\u7684<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Radio</span><span class="token punctuation" >></span></span>\n              <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>RadioGroup</span><span class="token punctuation" >></span></span>\n            <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>FormItem</span><span class="token punctuation" >></span></span><span class="token punctuation" >,</span>\n            <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>FormItem</span> <span class="token attr-name" >key</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>item4<span class="token punctuation" >"</span></span> <span class="token attr-name" >{...formItemLayout}</span> <span class="token attr-name" >label</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>\u5907\u6ce8\uff1a<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\n              <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Input</span> <span class="token attr-name" >type</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>textarea<span class="token punctuation" >"</span></span> <span class="token attr-name" >placeholder</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>\u968f\u4fbf\u5199<span class="token punctuation" >"</span></span> <span class="token punctuation" >/></span></span>\n            <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>FormItem</span><span class="token punctuation" >></span></span><span class="token punctuation" >,</span>\n            <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Row</span> <span class="token attr-name" >key</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>submit<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\n              <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Col</span> <span class="token attr-name" >span</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>16<span class="token punctuation" >"</span></span> <span class="token attr-name" >offset</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>6<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\n                <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Button</span> <span class="token attr-name" >type</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>primary<span class="token punctuation" >"</span></span> <span class="token attr-name" >htmlType</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>submit<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\u786e\u5b9a<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Button</span><span class="token punctuation" >></span></span>\n              <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Col</span><span class="token punctuation" >></span></span>\n            <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Row</span><span class="token punctuation" >></span></span><span class="token punctuation" >,</span>\n          <span class="token punctuation" >]</span> <span class="token punctuation" >:</span> <span class="token keyword" >null</span><span class="token punctuation" >}</span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>QueueAnim</span><span class="token punctuation" >></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>div</span><span class="token punctuation" >></span></span>\n    <span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n<span class="token punctuation" >}</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n\nReactDOM<span class="token punctuation" >.</span><span class="token function" >render</span><span class="token punctuation" >(</span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Test</span> <span class="token punctuation" >/></span></span><span class="token punctuation" >,</span> mountNode<span class="token punctuation" >)</span><span class="token punctuation" >;</span>'}],preview:function(){var n=y["default"].Item,a=d["default"].Group,s=w["default"].createClass({displayName:"Test",getInitialState:function(){return{show:!0}},onClick:function(){this.setState({show:!this.state.show})},render:function(){var s={labelCol:{span:6},wrapperCol:{span:14}};return w["default"].createElement("div",null,w["default"].createElement("p",{className:"buttons"},w["default"].createElement(m["default"],{type:"primary",onClick:this.onClick},"\u5207\u6362")),w["default"].createElement(o["default"],{component:y["default"],className:"ant-form ant-form-horizontal",type:"bottom",leaveReverse:!0},this.state.show?[w["default"].createElement(n,v({key:"item1"},s,{label:"\u7528\u6237\u540d\uff1a"}),w["default"].createElement("p",{className:"ant-form-text"},"\u5927\u773c\u840c minion")),w["default"].createElement(n,v({key:"item2"},s,{label:"\u5bc6\u7801\uff1a"}),w["default"].createElement(i["default"],{type:"password",placeholder:"\u8bf7\u8f93\u5165\u5bc6\u7801"})),w["default"].createElement(n,v({key:"item3"},s,{label:"\u60a8\u7684\u6027\u522b\uff1a"}),w["default"].createElement(a,null,w["default"].createElement(d["default"],{value:"male"},"\u7537\u7684"),w["default"].createElement(d["default"],{value:"female"},"\u5973\u7684"))),w["default"].createElement(n,v({key:"item4"},s,{label:"\u5907\u6ce8\uff1a"}),w["default"].createElement(i["default"],{type:"textarea",placeholder:"\u968f\u4fbf\u5199"})),w["default"].createElement(c["default"],{key:"submit"},w["default"].createElement(l["default"],{span:"16",offset:"6"},w["default"].createElement(m["default"],{type:"primary",htmlType:"submit"},"\u786e\u5b9a")))]:null))}});return w["default"].createElement(s,null)}}}});