(window["webpackJsonpapguilherme.github.io"]=window["webpackJsonpapguilherme.github.io"]||[]).push([[0],{13:function(e,a,t){},14:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(2),c=t.n(r),i=function(){return l.a.createElement("div",null,l.a.createElement("p",{id:"myname"},"Guilherme Almeida"),l.a.createElement("hr",{className:"line"}),l.a.createElement("div",{className:"logosgroup"},l.a.createElement("a",{href:"https://github.com/apguilherme",target:"_blank",rel:"noopener noreferrer",className:"logos",title:"github"},l.a.createElement("i",{className:"fa fa-github"})),l.a.createElement("a",{href:"https://www.linkedin.com/in/guilherme-d-almeida/",rel:"noopener noreferrer",target:"_blank",className:"logos",title:"linkedin"},l.a.createElement("i",{className:"fa fa-linkedin"})),l.a.createElement("a",{href:"mailto:guialmpin@gmail.com",className:"logos",rel:"noopener noreferrer",title:"e-mail"},l.a.createElement("i",{className:"fa fa-at"}))),l.a.createElement("p",{className:"text-center"},l.a.createElement("i",{class:"fa fa-map-marker"})," Castelo Branco, Portugal"),l.a.createElement("hr",{className:"line"}))},s=function(){return l.a.createElement("div",null,l.a.createElement("div",{className:"foot"},"Guilherme Almeida - ",(new Date).getFullYear(),"."))},m=function(){return l.a.createElement("div",{className:""},l.a.createElement("p",{className:"topic"},l.a.createElement("span",{className:"letter"},"about_me")),l.a.createElement("div",{className:"txt"},l.a.createElement("p",null,"I am Guilherme, a brazilian student of Systems Analysis and Development."),l.a.createElement("p",null,"Currently I am attending some disciplines as an exchange student in Portugal."),l.a.createElement("p",null,"I've got interested in programming by the end of my course in Agroindustrial Engineering."),l.a.createElement("p",null,"My goal is to use technology to find my way in a continuous changing world, and I believe that ",l.a.createElement("span",{className:"focus"},"between the technology and the earth there is an incredible amount of things to be created by us"),"!")))},o=t(3),u=t(4),d=t(6),p=t(5),h=t(7),E=function(e){function a(){var e,t;Object(o.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(t=Object(d.a)(this,(e=Object(p.a)(a)).call.apply(e,[this].concat(l)))).state={projs:[]},t}return Object(h.a)(a,e),Object(u.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch("https://api.github.com/users/apguilherme/repos").then(function(e){return e.json()}).then(function(a){e.setState({projs:a}),console.log(e.state.projs)})}},{key:"render",value:function(){return l.a.createElement("div",{className:""},l.a.createElement("p",{className:"topic"},l.a.createElement("span",{className:"letter"},"projects")),l.a.createElement("p",null,l.a.createElement("i",null,"*this data was retrieved using the Github public API.")),l.a.createElement("div",{className:"card-columns"},this.state.projs.map(function(e){return l.a.createElement("div",{key:e.id,className:"card"},l.a.createElement("div",{className:"card-body"},l.a.createElement("p",{className:"card-title text-left"},l.a.createElement("b",null,e.name)),l.a.createElement("p",{className:"card-text text-right"},e.description),l.a.createElement("div",{className:"alinha"},l.a.createElement("a",{href:e.html_url,className:"btn btn-outline-dark",rel:"noopener noreferrer",target:"_blank"},"See code"),l.a.createElement("small",null,l.a.createElement("i",{className:"fa fa-desktop","aria-hidden":"true"})," ",e.language),l.a.createElement("small",null,l.a.createElement("i",{className:"fa fa-clock-o"})," ",e.created_at.split("T")[0].split("-")[0]))))})))}}]),a}(n.Component);t(13);var g=function(){return l.a.createElement("div",null,l.a.createElement("div",{className:"mainpage"},l.a.createElement(i,null),l.a.createElement(m,null),l.a.createElement(E,null)),l.a.createElement(s,null))};c.a.render(l.a.createElement(g,null),document.getElementById("root"))},8:function(e,a,t){e.exports=t(14)}},[[8,1,2]]]);
//# sourceMappingURL=main.a1a7d8f3.chunk.js.map