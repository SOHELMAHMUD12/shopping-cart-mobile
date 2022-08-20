function updatePhoneNumber (isIncrease){
    const phoneNumberField = document.getElementById('phone-number-field');
    const phoneNumberString = phoneNumberField.value;
    const previousPhoneNumber = parseInt(phoneNumberString);

    let  newPhoneNumber;

    if(isIncrease){
        newPhoneNumber =  previousPhoneNumber + 1;
    }
    else{
        newPhoneNumber = previousPhoneNumber - 1;
    }

    phoneNumberField.value = newPhoneNumber;
    return newPhoneNumber;
  
}

function updateTotalPrice(newPhoneNumber){
    const phoneTotalPrice = newPhoneNumber *1219;
    const phoneTotalElement = document.getElementById('phone-total');
    phoneTotalElement.innerText = phoneTotalPrice;

   
}

function getTextElementById(elementId){
    const phoneTotalElement = document.getElementById(elementId);
    const currentPhoneTotalString = phoneTotalElement.innerText;
    const currentPhoneTotal = parse(currentPhoneTotalString);
    return currentPhoneTotal;

}

document.getElementById('btn-phone-plus').addEventListener('click', function(){

   const newPhoneNumber = updatePhoneNumber(true);

   updateTotalPrice(newPhoneNumber);

//    calculate total

const currentPhoneTotal = getTextElementValueById('phone-total');
const currentCaseTotal = getTextElementValueById('case-total');
const currentSubTotal = currentPhoneTotal + currentCaseTotal;
const subTotalElement = document.getElementById('sub-total');
subTotalElement.innerText = currentSubTotal;


   
});

document.getElementById('btn-phone-minus').addEventListener('click', function(){
   const newPhoneNumber = updatePhoneNumber(false);

   updateTotalPrice(newPhoneNumber);

})

