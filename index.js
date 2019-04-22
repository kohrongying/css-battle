import { html, render } from './node_modules/lit-html/lit-html.js';

const codes = [
  {id: 1, html: "<style>*{background:#5d3a3a}body{margin:0;background:#b5e0ba;width:50vw;height:50vw", active: false },

  {id: 2, html: "<div><img><img></div><div><img><img></div><style>*{background: #62374e}body{margin:75px;display:flex;flex-flow:column;justify-content:space-between}div{display:flex;justify-content:space-between}img{outline:25px solid#fdc57b", active: true },

  {id: 3, html: "<div><p><style>*{background:#6592CF}body{margin:75 50;background:#243D83}div{border:50px solid#6592CF;width:150;height:150;border-radius:50%;position:absolute;top:25;left:75;background:#243D83}p{width:50;height:50;border-radius:50%;background:#EEB850;position:absolute;top:35;left:50"},

  {id: 4, html: "<div><p></div><div><p></div><div><p></div><style>body{background:#62306D;margin:50;display:flex;transform:rotate(180deg)}div:nth-child(2){transform:rotate(180deg)}p{margin:0;width:100;height:100;background:#F7EC7D;border-radius:50%50% 0 0"},

  {id: 5, html: "<p><p><p><style>body{margin:30 80;background:#0B2429;position:relative}p{width:120;height:120;background:#F3AC3C;margin:0;position:absolute;border-radius:50%;top:0;right:0}p:nth-child(2){top:60;left:60;background:#998235;border-top-right-radius:0}p:nth-child(3){top:120;left:0;border-top-right-radius:0"},

  {id: 6, html: "<p><p><p><style>body{background:#E3516E;margin:50 100;position:relative}p{margin:0;position:absolute;width:100;height:100;background:#51B5A9;border-radius:100px 0 0}p:nth-child(2){right:0;border-radius:0 100px 0 0;background:#FADE8B}p:last-child{top:100;background:#F7F3D7;border-radius:0 0 0 100px"},

  {id: 7, html: "<p><p><p><style >body{background:#0B2429;margin:75}p{width:150;height:150;margin:0;background:#1A4341;border-radius:66%0;position:absolute}p:nth-child(2){left:125;background:#998235}p:last-child{left:175;background:#F3AC3C"},

  {id: 8, html: "<div><p><p><p><p><p><p><p></div><a></a><span><style>*{background:#6592CF}body{margin:50 130}div{position:absolute;width:140;height:110;display:flex}p{margin:0;width:20%;z-index:1;border-radius:50px;}p:nth-child(odd){background:#060F55}a{position:absolute;top:150;width:140;height:100;border-radius:0 0 70px 70px;background:#060F55}span{position:absolute;bottom:0;width:20;height:90;left:190;background:#060F55"}
]

const header = html`<h1 style="text-align:center; margin-bottom:50px;">CSS Battle</h1>`

const container = () => {
  return html`
    ${header}
    ${codes.map((item) => html`
      <div style="padding: 50px;">
        <h2 style="text-align:center;">Target ${item.id}</h2>
        <div style="display:flex;justify-content:center; align-items:center; flex-direction: column">
          <img src="2019/target${item.id}.png" width=400 height=300>
          <div style="width: 380px; 
                      overflow-wrap: break-word; 
                      background: lightgrey;
                      padding: 10px;">
            ${item.html}
          </div>
        </div>
      </div>
      `
    )}
    `
    
}

const el = document.body;
render(container(), el);