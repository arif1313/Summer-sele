
// product 1
document.getElementById('Jersey_div').addEventListener('click',function(){

    const name_productTarget = document.getElementById('Jersey');
    const poductName = name_productTarget.innerText;
   


    const targetDiv = document.getElementById('blank_div');
    const p = document.createElement('p');
    const count = targetDiv.childElementCount;
    p.innerText= `${count + 1} . ${poductName}`;
    
    targetDiv.appendChild(p);

// total price calculation
    const getProductPrice = document.getElementById('Jersey_price');
    const productPriceText = getProductPrice.innerText;
    const productPrice= parseFloat(productPriceText);

    const getTotalPrice = document.getElementById('Total_price');
    const TotalPricetext =getTotalPrice.innerText;
    const TotalPrice = parseFloat(TotalPricetext);

    const courrentTotalPrice = TotalPrice+productPrice;
     getTotalPrice.innerText = courrentTotalPrice;


    
    // pursus button enabel
    if(courrentTotalPrice>0){
       const PursusBtn = document.getElementById('makePursusBtn');
       PursusBtn.removeAttribute('disabled')
    }
    
    // apply button enable 
    if(courrentTotalPrice>200){
        const PursusBtn = document.getElementById('applyBtn');
        PursusBtn.removeAttribute('disabled')

     }
     const getTotal =document.getElementById('total');
     const totalText = getTotal.innerText;
     
     getTotal.innerText= courrentTotalPrice;


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
            alert('write code correctly');
            inputCouponCode.value='';

        }
    })
    
   
     })
     

  

// product 2
document.getElementById('Accessories1_div').addEventListener('click',function(){

    const name_productTarget = document.getElementById('Accessories1');
    const poductName = name_productTarget.innerText;
   


    const targetDiv = document.getElementById('blank_div');
    const p = document.createElement('p');
    const count = targetDiv.childElementCount;
    p.innerText= `${count + 1} . ${poductName}`;

    targetDiv.appendChild(p);

       
// total price calculation
const getProductPrice = document.getElementById('Jersey_price');
const productPriceText = getProductPrice.innerText;
const productPrice= parseFloat(productPriceText);

const getTotalPrice = document.getElementById('Total_price');
const TotalPricetext =getTotalPrice.innerText;
const TotalPrice = parseFloat(TotalPricetext);

const courrentTotalPrice = TotalPrice+productPrice;
 getTotalPrice.innerText = courrentTotalPrice;



// pursus button enabel
if(courrentTotalPrice>0){
   const PursusBtn = document.getElementById('makePursusBtn');
   PursusBtn.removeAttribute('disabled')
}

// apply button enable 
if(courrentTotalPrice>200){
    const PursusBtn = document.getElementById('applyBtn');
    PursusBtn.removeAttribute('disabled')

 }
 const getTotal =document.getElementById('total');
 const totalText = getTotal.innerText;
 
 getTotal.innerText= courrentTotalPrice;


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
        alert('write code correctly');
        inputCouponCode.value='';

    }
})


 })
// product 3
document.getElementById('Accessories2_div').addEventListener('click',function(){

    const name_productTarget = document.getElementById('Accessories2');
    const poductName = name_productTarget.innerText;
   


    const targetDiv = document.getElementById('blank_div');
    const p = document.createElement('p');
    const count = targetDiv.childElementCount;
    p.innerText= `${count + 1} . ${poductName}`;
    
    targetDiv.appendChild(p);

       
// total price calculation
const getProductPrice = document.getElementById('Jersey_price');
const productPriceText = getProductPrice.innerText;
const productPrice= parseFloat(productPriceText);

const getTotalPrice = document.getElementById('Total_price');
const TotalPricetext =getTotalPrice.innerText;
const TotalPrice = parseFloat(TotalPricetext);

const courrentTotalPrice = TotalPrice+productPrice;
 getTotalPrice.innerText = courrentTotalPrice;



// pursus button enabel
if(courrentTotalPrice>0){
   const PursusBtn = document.getElementById('makePursusBtn');
   PursusBtn.removeAttribute('disabled')
}

// apply button enable 
if(courrentTotalPrice>200){
    const PursusBtn = document.getElementById('applyBtn');
    PursusBtn.removeAttribute('disabled')

 }
 const getTotal =document.getElementById('total');
 const totalText = getTotal.innerText;
 
 getTotal.innerText= courrentTotalPrice;


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
        alert('write code correctly');
        inputCouponCode.value='';

    }
})


 })
// product 4
document.getElementById('coocker_div').addEventListener('click',function(){

    const name_productTarget = document.getElementById('coocker');
    const poductName = name_productTarget.innerText;
   


    const targetDiv = document.getElementById('blank_div');
    const p = document.createElement('p');
    const count = targetDiv.childElementCount;
    p.innerText= `${count + 1} . ${poductName}`;
  
    targetDiv.appendChild(p);

// total price calculation
const getProductPrice = document.getElementById('Jersey_price');
const productPriceText = getProductPrice.innerText;
const productPrice= parseFloat(productPriceText);

const getTotalPrice = document.getElementById('Total_price');
const TotalPricetext =getTotalPrice.innerText;
const TotalPrice = parseFloat(TotalPricetext);

const courrentTotalPrice = TotalPrice+productPrice;
 getTotalPrice.innerText = courrentTotalPrice;



// pursus button enabel
if(courrentTotalPrice>0){
   const PursusBtn = document.getElementById('makePursusBtn');
   PursusBtn.removeAttribute('disabled')
}

// apply button enable 
if(courrentTotalPrice>200){
    const PursusBtn = document.getElementById('applyBtn');
    PursusBtn.removeAttribute('disabled')

 }
 const getTotal =document.getElementById('total');
 const totalText = getTotal.innerText;
 
 getTotal.innerText= courrentTotalPrice;


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
        alert('write code correctly');
        inputCouponCode.value='';

    }
})


 })

// product 6
document.getElementById('cates_div').addEventListener('click',function(){

    const name_productTarget = document.getElementById('cates');
    const poductName = name_productTarget.innerText;
   


    const targetDiv = document.getElementById('blank_div');
    const p = document.createElement('p');
    const count = targetDiv.childElementCount;
    p.innerText= `${count + 1} . ${poductName}`;
   
    targetDiv.appendChild(p);

 // total price calculation
 const getProductPrice = document.getElementById('Jersey_price');
 const productPriceText = getProductPrice.innerText;
 const productPrice= parseFloat(productPriceText);

 const getTotalPrice = document.getElementById('Total_price');
 const TotalPricetext =getTotalPrice.innerText;
 const TotalPrice = parseFloat(TotalPricetext);

 const courrentTotalPrice = TotalPrice+productPrice;
  getTotalPrice.innerText = courrentTotalPrice;


 
 // pursus button enabel
 if(courrentTotalPrice>0){
    const PursusBtn = document.getElementById('makePursusBtn');
    PursusBtn.removeAttribute('disabled')
 }
 
 // apply button enable 
 if(courrentTotalPrice>200){
     const PursusBtn = document.getElementById('applyBtn');
     PursusBtn.removeAttribute('disabled')

  }
  const getTotal =document.getElementById('total');
  const totalText = getTotal.innerText;
  
  getTotal.innerText= courrentTotalPrice;


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
         alert('write code correctly');
         inputCouponCode.value='';

     }
 })
 

  })