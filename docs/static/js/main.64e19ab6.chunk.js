(this["webpackJsonpimport-export-dashboard"]=this["webpackJsonpimport-export-dashboard"]||[]).push([[0],{45:function(e,t,r){"use strict";r.r(t);var a=r(1),s=r.n(a),n=r(14),c=r.n(n),o=r(3),i=r.n(o),l=r(0);class d extends a.Component{constructor(){super(...arguments),this.drawPlot=()=>{const{data:e,selectedCountries:t,selectedYears:r}=this.props,a=["#FF0000","#FFFF00","#00FF00","#0000FF","#FF00FF","#FF6347","#00FFFF","#FFA500","#800080","#40E0D0"],s=["solid","dashed","dotted","dashdot","longdashdotdot","shortdash"],n=[];Object.keys(e).forEach(((t,r)=>{const c=e[t].import,o=e[t].export,i={x:Object.keys(c),y:Object.values(c),type:"scatter",mode:"lines+markers",name:"".concat(t," - Import"),line:{color:a[r%a.length],dash:s[r%s.length]}},l={x:Object.keys(o),y:Object.values(o),type:"scatter",mode:"lines+markers",name:"".concat(t," - Export"),line:{color:a[(r+1)%a.length],dash:s[(r+1)%s.length]}};n.push(i,l)}));const c=t.map((t=>({x:r,y:r.map((r=>{var a,s;return(null===(a=e[t])||void 0===a||null===(s=a.import)||void 0===s?void 0:s[r])||null})),type:"bar",name:"".concat(t," - Import")}))),o=t.map((t=>({x:r,y:r.map((r=>{var a,s;return(null===(a=e[t])||void 0===a||null===(s=a.export)||void 0===s?void 0:s[r])||null})),type:"bar",name:"".concat(t," - Export")}))),l=[...n,...c,...o];i.a.newPlot("line-chart",l,{title:{text:"Trend of Import/Export from 2015 to 2020",font:{size:24},y:.87},xaxis:{title:"Year"},yaxis:{title:"Imports/Exports"},hovermode:"closest",legend:{orientation:"h",yanchor:"bottom",y:1.05,xanchor:"right",x:1},margin:{t:100,b:150},width:1200,height:800})}}componentDidMount(){this.drawPlot()}componentDidUpdate(e){this.props.data===e.data&&this.props.selectedCountries===e.selectedCountries&&this.props.selectedYears===e.selectedYears||this.drawPlot()}render(){return Object(l.jsx)("div",{id:"line-chart",className:"chart-container"})}}var p=d;class h extends s.a.Component{render(){const{data:e,selectedCountries:t,selectedYears:r}=this.props;return Object(l.jsx)("div",{children:Object(l.jsx)(p,{data:e,selectedCountries:t,selectedYears:r})})}}var j=h,x=r(15),b=r.n(x);var m=r(16);const u=r.n(m)()(i.a);var O=e=>{let{data:t}=e;const[r,s]=Object(a.useState)(Object.keys(t)),[n,c]=Object(a.useState)([2015,2020]),o=e=>{const t=e.target.value;e.target.checked?s([...r,t]):s(r.filter((e=>e!==t)))},i=Object.entries(t).filter((e=>{let[t]=e;return r.includes(t)})).map((e=>{let[t,r]=e;return{name:t,import:r.import,export:r.export}})).map((e=>({...e,import:Object.fromEntries(Object.entries(e.import).filter((e=>{let[t]=e;return parseInt(t)>=n[0]&&parseInt(t)<=n[1]}))),export:Object.fromEntries(Object.entries(e.export).filter((e=>{let[t]=e;return parseInt(t)>=n[0]&&parseInt(t)<=n[1]})))}))),d=i.map((e=>({x:Object.keys(e.import),y:Object.values(e.import),name:"".concat(e.name," - Import"),type:"bar"}))),p=i.map((e=>({x:Object.keys(e.export),y:Object.values(e.export),name:"".concat(e.name," - Export"),type:"bar"})));return Object(l.jsxs)("div",{children:[Object(l.jsx)("h1",{children:"Bar charts of Imports and Exports"}),Object(l.jsxs)("div",{className:"selection-container",children:[Object(l.jsxs)("div",{className:"country-selection",children:[Object(l.jsx)("h3",{children:"Select Countries"}),Object.keys(t).map((e=>Object(l.jsxs)("label",{children:[Object(l.jsx)("input",{type:"checkbox",value:e,checked:r.includes(e),onChange:o}),e]},e)))]}),Object(l.jsxs)("div",{className:"year-selection",children:[Object(l.jsx)("label",{htmlFor:"yearRange",children:Object(l.jsx)("strong",{children:"Select Year Range:"})}),Object(l.jsx)("input",{id:"yearRange",type:"range",min:2015,max:2020,value:n,onChange:e=>{const t=parseInt(e.target.value),r=[...n],a=n.indexOf(t);-1===a?r.push(t):r.splice(a,1),c(r.sort(((e,t)=>e-t)))},step:1}),Object(l.jsxs)("span",{children:[n[0]," - ",n[1]]})]})]}),Object(l.jsx)("div",{className:"chart-container",children:Object(l.jsx)(u,{data:d,layout:{barmode:"group",title:"Bar chart of Imports",xaxis:{title:"Year"},yaxis:{title:"Imports"}}})}),Object(l.jsx)("div",{className:"chart-container",children:Object(l.jsx)(u,{data:p,layout:{barmode:"group",title:"Bar chart of Exports",xaxis:{title:"Year"},yaxis:{title:"Exports"}}})})]})};var y=function(){const[e,t]=Object(a.useState)([]),[r,s]=Object(a.useState)([]),[n,c]=Object(a.useState)([]);return Object(a.useEffect)((()=>{(async()=>{const e=await(async()=>{try{return(await b.a.get("http://localhost:3001/data")).data}catch(e){return console.error("Error fetching data: ",e),[]}})();t(e)})()}),[]),Object(l.jsxs)("div",{children:[Object(l.jsx)("h1",{children:"International Trade Dashboard"}),Object(l.jsx)(j,{data:e,selectedYears:r,selectedCountries:n}),Object(l.jsx)(O,{data:e,setSelectedYears:s,setSelectedCountries:c,handleCountryChange:e=>{const t=e.target.value;e.target.checked?c([...n,t]):c(n.filter((e=>e!==t)))},handleYearChange:e=>{const t=parseInt(e.target.value),a=[...r],n=r.indexOf(t);-1===n?a.push(t):a.splice(n,1),s(a.sort(((e,t)=>e-t)))}})]})};c.a.render(Object(l.jsx)(s.a.StrictMode,{children:Object(l.jsx)(y,{})}),document.getElementById("root"))}},[[45,1,2]]]);
//# sourceMappingURL=main.64e19ab6.chunk.js.map