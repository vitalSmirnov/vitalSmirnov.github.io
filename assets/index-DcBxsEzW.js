import{r as i,j as t,u as l,R as d}from"./index-BRox8W2D.js";import{A as m,T as x,a as _}from"./text-CFrvU12Z.js";import{B as f}from"./index-B0-s1Si-.js";const j="_inputContainer_1c1p5_1",g="_input_1c1p5_1",C="_inputError_1c1p5_18",E="_inputGood_1c1p5_28",s={inputContainer:j,input:g,inputError:C,inputGood:E},h=({placeholder:r,onComplete:o})=>{const[a,e]=i.useState(!1),[n,p]=i.useState(!1),c=u=>{e(!1),u==="tudelema"?(p(!0),o()):e(!0)};return t.jsx(t.Fragment,{children:t.jsx("div",{className:s.inputContainer,children:t.jsx("input",{type:"string",disabled:n,placeholder:r,onChange:u=>c(u.currentTarget.value),className:n?s.inputGood:a?s.inputError:s.input})})})},I=()=>{const[r,o]=i.useState(!1),a=l(),e=()=>{o(!0)},n=()=>{a(d.FINAL)};return t.jsxs(t.Fragment,{children:[t.jsx(m,{src:"quiz.mp3",play:!0}),t.jsx(x,{paragraph:_.QUIZ}),t.jsx(h,{onComplete:e,placeholder:"code"}),r&&t.jsx(f,{title:"Финал",onClick:n})]})};export{I as default};