var XO = "";
var ide = "";
var colid = [];
var game = 0
document.querySelector("#O").setAttribute("disabled","disabled");
var X = 1;
var O = 0;
var x = [];
var o = [];
document.querySelector("#X").addEventListener("click",(e) => {
    XO = e.target.textContent;
    document.querySelector("#X").setAttribute("disabled","disabled");
})
document.querySelector("#O").addEventListener("click",(e) => {
    XO = e.target.textContent;
    document.querySelector("#O").setAttribute("disabled","disabled");
})
document.querySelector("table").addEventListener("click",(e) => {
      ide = e.target.id
      if(ide && !colid.includes(ide) && XO!="")
      {
      if(ide == 1 || ide == 4 || ide == 7)
      {
        document.querySelector("table").childNodes[1].childNodes[e.target.className].childNodes[1].textContent = XO;
        colid.push(ide);
        XO=="X"?x.push(parseInt(ide)):o.push(parseInt(ide))
        game = game+1
      }
      else if(ide == 2 || ide == 5 || ide == 8)
      {
        document.querySelector("table").childNodes[1].childNodes[e.target.className].childNodes[3].textContent = XO;
        colid.push(ide);
        XO=="X"?x.push(parseInt(ide)):o.push(parseInt(ide))
        game = game+1
      }
      else if(ide == 3 || ide == 6 || ide == 9)
      {
        document.querySelector("table").childNodes[1].childNodes[e.target.className].childNodes[5].textContent = XO;
        colid.push(ide);
        XO=="X"?x.push(parseInt(ide)):o.push(parseInt(ide))
        game = game+1
      }
      XO="";
      if(X==0 && O==1)
      {
          X=1;
          O=0;
          document.querySelector("#X").removeAttribute("disabled");
          document.querySelector("#O").setAttribute("disabled","disabled");
      }
      else
      {
        X=0;
        O=1;
        document.querySelector("#O").removeAttribute("disabled");
        document.querySelector("#X").setAttribute("disabled","disabled");
      }
    }
    if((x.includes(1) && x.includes(2) && x.includes(3)) || (x.includes(1) && x.includes(5) && x.includes(9)) || 
    (x.includes(1) && x.includes(4) && x.includes(7)) || (x.includes(4) && x.includes(5) && x.includes(6)) || 
    (x.includes(7) && x.includes(8) && x.includes(9)) || (x.includes(2) && x.includes(5) && x.includes(8)) ||
    (x.includes(3) && x.includes(6) && x.includes(9)) || (x.includes(3) && x.includes(5) && x.includes(7)))
    {
        document.querySelector("h1").textContent = "X User Won the game!";
        document.querySelector("#X").setAttribute("disabled","disabled");
        document.querySelector("#O").setAttribute("disabled","disabled");
        game = 0;
    }
    else if((o.includes(1) && o.includes(2) && o.includes(3)) || (o.includes(1) && o.includes(5) && o.includes(9)) || 
    (o.includes(1) && o.includes(4) && o.includes(7)) || (o.includes(4) && o.includes(5) && o.includes(6)) || 
    (o.includes(7) && o.includes(8) && o.includes(9)) || (o.includes(2) && o.includes(5) && o.includes(8)) 
    || (o.includes(3) && o.includes(6) && o.includes(9)) || (o.includes(3) && o.includes(5) && o.includes(7)))
    {
        document.querySelector("h1").textContent = "O User Won the game!";
        document.querySelector("#X").setAttribute("disabled","disabled");
        document.querySelector("#O").setAttribute("disabled","disabled");
        game = 0;
    }
    if(game == 9)
    {
        document.querySelector("h1").textContent = " Match Tie!";
        document.querySelector("#X").setAttribute("disabled","disabled");
        document.querySelector("#O").setAttribute("disabled","disabled");
    }
})
document.querySelector("#new").addEventListener("click",() => {
  for(let i=0;i<=4;i+=2)
  {
    for(let j=1;j<=5;j+=2)
    {
      document.querySelector("table").childNodes[1].childNodes[i].childNodes[j].textContent = "";
    }
  }
   XO = "";
   ide = "";
   colid = [];
   game = 0
  document.querySelector("#O").setAttribute("disabled","disabled");
  document.querySelector("#X").removeAttribute("disabled");
  document.querySelector("h1").textContent = "";
   X = 1;
   O = 0;
   x = [];
   o = [];
})


