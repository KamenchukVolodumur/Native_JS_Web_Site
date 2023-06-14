function calc(){
    const result= document.querySelector(".calculating__result span");
    let sex, height, weight, age, ration;
    if(localStorage.getItem('sex')){
       sex = localStorage.getItem('sex'); 
    }else{
       sex='female';
    }
    if(localStorage.getItem('ration')){
       ration = localStorage.getItem('ration');
    }else {
       ration= 1.375;
    }
    function calcTotal(){
       if (!sex || !height || !weight || !age || !ration){
       result.textContent="___";
       return;
    }
    if(sex==="female"){
       result.textContent = Math.round((447.6 + (9.2 * weight) + (3.1 *height) - (4.3 * age))*ration);
    }else{
       result.textContent = Math.round((88.36 + (13.4  * weight) + (4.8 * height) - (5.7 * age)) * ration);
 
    }
    }
    
    function getStats(selector, activeClass){
       let i = document.querySelectorAll(selector);
       i.forEach(item => {
          item.addEventListener(('click'), (e) =>{
             if(e.target.getAttribute('data-ratio')){
                ration=+e.target.getAttribute('data-ratio');
                localStorage.setItem('ratio', +e.target.getAttribute('data-ratio'));
             } else{
                sex=e.target.getAttribute('id');
                localStorage.setItem('sex',e.target.getAttribute('id'));
             }
             i.forEach(element => {
                element.classList.remove(activeClass);
             });
             e.target.classList.add(activeClass);
             calcTotal();
          });
       });
 
    }
    function initLocalSettings(selector,  activeClass){
       const e = document.querySelectorAll(selector);
       e.forEach(i=>{
          i.classList.remove(activeClass);
          if (i.getAttribute('id')==localStorage.getItem('sex')){
             i.classList.add(activeClass);
          }
          if (i.getAttribute('data-ratio')==localStorage.getItem('ratio')){
             i.classList.add(activeClass);
          }
       });
    }
    function getDynamicStats(selector){
       let input=document.querySelector(selector);
       input.addEventListener(('input'), (e)=>{
          if(input.value.match(/\D/)){
             input.style.border=`1px solid red`;
          }else{
             input.style.border='none';
          }
          switch (input.getAttribute('id')){
             case 'height':{
                height= +input.value;
                break;
             }
             case 'weight':{
                weight= +input.value;
                break;
             }
             case 'age':{
                age= +input.value;
                break;
             }      
          }
          calcTotal();
       });
    }
    calcTotal();
    initLocalSettings('#gender div', 'calculating__choose-item_active');
    initLocalSettings('.calculating__choose_big div' , 'calculating__choose-item_active');
    getStats('#gender div', 'calculating__choose-item_active');
    getStats('.calculating__choose_big div' , 'calculating__choose-item_active');
    getDynamicStats('#height');
    getDynamicStats('#weight');
    getDynamicStats('#age');
}
export default calc;