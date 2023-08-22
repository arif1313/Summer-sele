
function propagationStop(id){

    document.getElementById(id).addEventListener('click',function(event){

        event.stopImmediatePropagation();
    })
};
function getInputValue(inpurPriceId){
    const getInputFildPrice = document.getElementById(inpurPriceId);
const getInputFildPriceText = getInputFildPrice.innerText;
const getInputFildPriceValue = parseFloat(getInputFildPriceText);


const getTotalProductPrice = document.getElementById('Total_price');
const TotalProductPricetext =getTotalProductPrice.innerText;
const TotalProductPrice = parseFloat(TotalProductPricetext);

const getTotal =document.getElementById('total');
 const totalText = getTotal.innerText;
 
const courrentTotalPrice = TotalProductPrice + getInputFildPriceValue;

getTotalProductPrice.innerText = courrentTotalPrice;
getTotal.innerText = courrentTotalPrice;




if(courrentTotalPrice>200){

    const PursusBtn = document.getElementById('applyBtn');
    PursusBtn.removeAttribute('disabled');

}

document.getElementById('applyBtn').addEventListener('click',function(){
    const inputCouponCode = document.getElementById('inputCouponCode');
const target_couponCode = inputCouponCode.value;


const couponbtn = document.getElementById('couponbtn');
const targetCopontext = couponbtn.innerText;



const getDiscount = document.getElementById('Discount');
const discountText = getDiscount.innerText;


    if(target_couponCode == targetCopontext)
    {
    const totaldiscound = courrentTotalPrice * 0.2;
    const afterpositionfixingdiscount = totaldiscound.toFixed(2);
    getDiscount.innerText =afterpositionfixingdiscount;
    const calculateTotal= courrentTotalPrice - afterpositionfixingdiscount;
    getTotal.innerText=calculateTotal;
    }
    else{
       alert('enter correct code');
        inputCouponCode.value='';

    }

   
})

}
document.getElementById('makePursusBtn').addEventListener('click',function()
{

    const getTotal =document.getElementById('total');
    const totalText = getTotal.innerText;
    getTotal.innerText='00';

    const getTotalPrice = document.getElementById('Total_price');
    const TotalPricetext =getTotalPrice.innerText;
    getTotalPrice.innerText ='00';
    const getDiscount = document.getElementById('Discount');
 const discountText = getDiscount.innerText;
 getDiscount.innerText='00';
    
})
