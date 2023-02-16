function inputFieldId(id) {
  const inputField = document.getElementById(id);
  const inputFieldString = inputField.value;
  const inputValue = parseFloat(inputFieldString);
  return inputValue;
}
function textFieldId(id) {
  const textField = document.getElementById(id);
  const textFieldString = textField.innerText;
  const textValue = parseFloat(textFieldString);
  return textValue;
}

function setValue(id, value) {
  const idName = document.getElementById(id);
  idName.innerText = value;
}
document.getElementById('btn_deposit').addEventListener('click', function () {
  const deposit_input_field = inputFieldId('deposit_input_field');
  const deposit_total = textFieldId('deposit_total');
  const balance_total = textFieldId('balance_total');

  if (isNaN(deposit_input_field)) {
    alert('Please enter a valid number to deposit');
    const inputField = document.getElementById('deposit_input_field');
    inputField.value = '';
    return;
  }
  const newTotalDeposit = deposit_total + deposit_input_field;
  const newBalance = balance_total + deposit_input_field;
  setValue('deposit_total', newTotalDeposit);
  setValue('balance_total', newBalance);
  const inputField = document.getElementById('deposit_input_field');
  inputField.value = '';
});

document.getElementById('btn_widthdraw').addEventListener('click', function () {
  const widhdraw_input_field = inputFieldId('widhdraw_input_field');
  const widthdraw_total = textFieldId('widthdraw_total');
  const balance_total = textFieldId('balance_total');
  const inputField = document.getElementById('widhdraw_input_field');
  if (isNaN(widhdraw_input_field)) {
    alert('Please enter a valid number to widthdraw');

    inputField.value = '';
    return;
  }
  if (widhdraw_input_field > balance_total) {
    alert('You do not have sufficient amount');
    return;
  }
  const newbalance_total = balance_total - widhdraw_input_field;
  const newWidthdraw_total = widthdraw_total + widhdraw_input_field;
  setValue('widthdraw_total', newWidthdraw_total);
  setValue('balance_total', newbalance_total);
  inputField.value = '';
});
