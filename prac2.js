const textbox = document.querySelector('#textbox');
const c_to_f = document.querySelector('#to_f');
const f_to_c = document.querySelector('#to_c');
const btn = document.querySelector('#btn');
const result = document.querySelector('#result');

let temp;
let ans;

btn.onclick = function () {
    temp = textbox.value;
    temp = Number(temp);
    console.log(temp);

    if (c_to_f.checked) {
        ans=(((9/5)*temp)+32);
        result.textContent = truncDecimals(ans,1) +"°F";
    }
    
    else if (f_to_c.checked) {
        ans=((5/9)*(temp-32)); 
        result.textContent = truncDecimals(ans,1) +"°C";
    }

    else {
        result.textContent = "Select a unit";
    }
}

function truncDecimals(num, places) {
  const factor = 10 ** places;
  return Math.trunc(num * factor) / factor;
}

btn.addEventListener("mouseover", function () {
    btn.style.backgroundColor = "#bc180da0";
})

btn.addEventListener("mouseout", function () {
    btn.style.backgroundColor = "";
});
