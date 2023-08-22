

function GetTextById(inputTextId){

    const getInputFild = document.getElementById(inputTextId);
    const getInputFildText = getInputFild.innerText;
    // const getIputFildValue = parseFloat(getInputFildText);
    const targetDiv = document.getElementById('blank_div');
    const p = document.createElement('p');
    const count = targetDiv.childElementCount;
    p.innerText= `${count + 1} . ${getInputFildText}`;
    
    targetDiv.appendChild(p);
    const makePursusBtn = document.getElementById('makePursusBtn');
    makePursusBtn.removeAttribute('disabled');

};


