function updateCaseNumber(isIncrease){
    const caseNumberField = document.getElementById('case-number-field');
    const caseNumberString = caseNumberField.value;
    const previousCaseNumber = parseFloat(caseNumberString);
    // const newCaseNumber = previousCaseNumber + 1;
    // console.log(previousCaseNumber);
    let newCaseNumber;

    if(isIncrease === true){
        newCaseNumber = previousCaseNumber + 1;

    }
    else{
        newCaseNumber = previousCaseNumber - 1;
    }

    caseNumberField.value = newCaseNumber;
    return newCaseNumber;
}

function updateCaseTotalPrice(newCaseNumber){
    
   const caseTotalPrice = newCaseNumber * 59;
   const caseTotalElement = document.getElementById('case-total');
   caseTotalElement.innerText = caseTotalPrice;

}


document.getElementById('btn-case-plus').addEventListener('click', function(){

   const newCaseNumber =  updateCaseNumber(true);

   updateCaseTotalPrice(newCaseNumber);


})
//     const caseNumberField = document.getElementById('case-number-field');
//     const caseNumberString = caseNumberField.value;
//     const previousCaseNumber = parseFloat(caseNumberString);
//     const newCaseNumber = previousCaseNumber + 1;
//     // console.log(previousCaseNumber);
//     caseNumberField.value = newCaseNumber;
// })
    
document.getElementById('btn-case-number').addEventListener('click', function(){

   const newCaseNumber = updateCaseNumber(false);

   updateCaseTotalPrice(newCaseNumber);

})
//     // console.log('case minus button clicked')
//     const caseNumberField = document.getElementById('case-number-field');
//     const caseNumberString = caseNumberField.value;
//     const previousCaseNumber = parseInt(caseNumberString);

//     const newCaseNumber = previousCaseNumber - 1;
//     caseNumberField.value = newCaseNumber;
//