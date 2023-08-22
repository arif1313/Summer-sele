

propagationStop('rating1');
propagationStop('rating2');
propagationStop('rating3');
propagationStop('rating4');
propagationStop('rating5');
propagationStop('rating6');
document.getElementById('Accessories1_div').addEventListener('click',function(){
  
    GetTextById('Accessories1');
    getInputValue('Accessories1_price');
  
});

document.getElementById('Accessories2_div').addEventListener('click',function(){
  
    GetTextById('Accessories2');
    getInputValue('Accessories2_price');
  
});
document.getElementById('coocker_div').addEventListener('click',function(){
  
    GetTextById('coocker');
    getInputValue('coocker_price');
   
});
document.getElementById('cap_div').addEventListener('click',function(){
  
    GetTextById('cap');
    getInputValue('cap_price');
   
});

document.getElementById('Jersey_div').addEventListener('click',function(){
   
    GetTextById('Jersey');
    getInputValue('Jersey_price');
   
});
document.getElementById('cates_div').addEventListener('click',function(){
   
    GetTextById('cates');
    getInputValue('cates_price');
   
});