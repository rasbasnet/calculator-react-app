(this["webpackJsonpcalculator-react-app"]=this["webpackJsonpcalculator-react-app"]||[]).push([[0],{47:function(t,e,n){},55:function(t,e,n){"use strict";n.r(e);var c=n(0),a=n(8),r=n.n(a),i=n(86),s=(n(47),n(37)),o=n(29),l=n(30),u=n(39),f=n(38),h=n(57),m=n(6);var j=function(t){var e=[[7,8,9,"\xf7"],[4,5,6,"\xd7"],[1,2,3,"-"],[0,".","=","+"]].map((function(e,n){return Object(m.jsx)(i.a,{item:!0,container:!0,className:"calc-row-each",children:e.map((function(e,n){return Object(m.jsx)(i.a,{item:!0,xs:3,justify:"center",container:!0,alignItems:"center",className:"calc-each-button-cont",onClick:function(n){return"="!==e?"\xd7"===e?t.buttonClick("\u2022"):t.buttonClick(e):t.submit()},children:Object(m.jsx)(h.a,{className:"calc-button-text helvetica-neue-font",children:e})},n)}))},n)}));return Object(m.jsx)(i.a,{item:!0,container:!0,className:"calc-cont",direction:"column",alignItems:"center",children:Object(m.jsx)(i.a,{container:!0,xs:10,item:!0,children:e})})},d=n(91),b=n(90);var p=function(t){var e=t.history.map((function(t,e){return Object(m.jsxs)(i.a,{item:!0,container:!0,className:"results",children:[Object(m.jsx)(i.a,{item:!0,container:!0,xs:8,className:"equation",children:Object(m.jsx)(h.a,{className:"helvetica-neue-font ",children:t.answer})}),Object(m.jsx)(i.a,{item:!0,container:!0,xs:4,justify:"flex-end",children:Object(m.jsx)(h.a,{className:"helvetica-neue-font ",children:t.equation})})]},e)}));return Object(m.jsx)(i.a,{item:!0,container:!0,alignItems:"flex-end",alignContent:"flex-end",children:e})};var x=function(t){return Object(m.jsxs)(i.a,{item:!0,container:!0,className:"screen-cont",justify:"center",alignContent:"flex-end",children:[Object(m.jsx)(i.a,{item:!0,container:!0,xs:10,className:"history-cont",children:Object(m.jsx)(p,{currentCalculation:t.currentCalculation,history:t.history})}),Object(m.jsx)(i.a,{item:!0,xs:10,className:"current-result-cont",children:Object(m.jsx)("form",{noValidate:!0,onSubmit:function(e){e.preventDefault(),""!==t.term&&t.submit()},className:"form-screen",children:Object(m.jsx)(d.a,{inputRef:function(e){null!==e&&t.focus(e)},id:"outlined-basic",color:"secondary",autoFocus:!0,autoComplete:"off",required:!0,helperText:"",variant:"outlined",fullWidth:!0,value:t.term,onChange:function(e){t.changeInput(e.target.value)},InputProps:{endAdornment:Object(m.jsx)(b.a,{position:"end",disablePointerEvents:!0,children:!isNaN(t.currentCalculation)&&t.currentCalculation})}})})})]})},O=n(36),y=function(t){Object(u.a)(n,t);var e=Object(f.a)(n);function n(){var t;Object(o.a)(this,n);for(var c=arguments.length,a=new Array(c),i=0;i<c;i++)a[i]=arguments[i];return(t=e.call.apply(e,[this].concat(a))).state={currentCalculation:0,term:"",history:JSON.parse(localStorage.getItem("CalcHistory"))||[]},t.calculate=function(e){for(var n=e.split(/(\u2022|\xf7|\+|-)/).filter((function(t,e){return""!==t})).flatMap((function(t,e,n){if("-"===t){if("+"===n[e+1])return n[e+1]="-",[];if("-"===n[e+1])return n[e+1]="+",[]}else if("+"===t){if("-"===n[e+1])return n[e+1]="-",[];if("+"===n[e+1])return n[e+1]="+",[]}return parseInt(t)||t})).reverse(),c=n.length-1;c>=0;c--)n[c+1]&&n[c-1]&&("\u2022"===n[c]?(n[c-1]=n[c+1]*n[c-1],n.splice(c+1,1),n.splice(c,1)):"\xf7"===n[c]&&(n[c-1]=n[c+1]/n[c-1],n.splice(c+1,1),n.splice(c,1)));var a=(n=n.reverse()).reduce((function(t,e,n,c){return"string"===typeof c[n-1]?t:"-"===e?t-c[n+1]:"+"===e?c[n+1]+t:t+e}),0);t.setState({currentCalculation:Math.round(100*a)/100})},t.addToHistory=function(){if(!isNaN(t.state.currentCalculation)&&""!==t.state.term){var e=[].concat(Object(s.a)(t.state.history),[{equation:t.state.currentCalculation,answer:t.state.term}]);t.setState({history:e,currentCalculation:0,term:""}),localStorage.setItem("CalcHistory",JSON.stringify(e))}},t.checkKeys=function(t){return t.split("").map((function(t,e){return"*"===t?"\u2022":"/"===t?"\xf7":t})).filter((function(t,e){return!(0===e&&/(\u2022|\xf7|\+)/.test(t))})).join("")},t.finalCheck=function(t){return/^([\u2022\xf70-9+-])+$/.test(t)},t.changeInput=function(e){var n=t.checkKeys(e);t.finalCheck(n)&&t.setState({term:n}),n.length<1&&t.setState({term:""}),t.calculate(n)},t.buttonClick=function(e){if(t.finalCheck(e)){var n=t.state.term+e;t.setState({term:n}),t.calculate(n)}},t.focus=function(t){O.isMobile||r.a.findDOMNode(t).focus()},t}return Object(l.a)(n,[{key:"render",value:function(){return Object(m.jsxs)(i.a,{sm:10,md:8,lg:6,xl:4,direction:"column",justify:"center",alignItems:"flex-start",item:!0,className:"main-cont",container:!0,children:[Object(m.jsx)(x,{focus:this.focus,term:this.state.term,changeInput:this.changeInput,calculate:this.calculate,currentCalculation:this.state.currentCalculation,buttonClick:this.buttonClick,history:this.state.history,submit:this.addToHistory}),Object(m.jsx)(j,{buttonClick:this.buttonClick,term:this.state.term,submit:this.addToHistory})]})}}]),n}(c.Component);var C=function(){return Object(m.jsx)(i.a,{container:!0,style:{height:"100vh"},justify:"space-around",children:Object(m.jsx)(y,{})})};r.a.render(Object(m.jsx)(C,{}),document.getElementById("root"))}},[[55,1,2]]]);
//# sourceMappingURL=main.5b38df67.chunk.js.map