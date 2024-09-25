//id="bill_amount" 
//id="topParcentDiv"
//id="result_div"
const Biil_amount=document.getElementById('bill_amount');
const tip_parcentage=document.getElementById('topParcentDiv')
const result_div=document.getElementById('result_div');

const Calculate_tip=()=>{
    let BillAmountValue=Biil_amount.value
    BillAmountValue=parseFloat(BillAmountValue)
    let tip_parcentageValue=tip_parcentage.value
    tip_parcentageValue=parseFloat(tip_parcentageValue)
    if( isNaN(BillAmountValue ) || isNaN(tip_parcentageValue)){
        let alert_text="Please enter the Bill and Tip Parcentage"
         return result_div.textContent=alert_text
    
    }

    let Calculation=(BillAmountValue*tip_parcentageValue)/100;
    let Total=(BillAmountValue+Calculation);
    return result_div.innerHTML=`
    <p>Tip Amount:${Calculation.toFixed(2)}</p>
    <p>Total Amount:${Total.toFixed(2)}</p>
    `
    
}


 
