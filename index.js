const headCount = document.getElementById("head_count")
const billAmount = document.getElementById("bill_amount")
const serviceType = document.getElementById("service_type")
const TipCalc = document.getElementById("tip_calc")
const tipAmount = document.getElementById("tip_amount")

TipCalc.addEventListener('click', ()=> {
    const headCountValue = Number(headCount.value)
    const billValue = Number(billAmount.value)
    const serviceTypeValue = Number(serviceType.value)
    tipCalculator(headCountValue, billValue, serviceTypeValue)
})
    
function tipCalculator(heads, bill, percentage) {
    let tip = Math.round((bill * percentage)/heads)
    tipAmount.textContent = `Rs. ${tip} /=`
}