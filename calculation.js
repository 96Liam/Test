function calculate() {
  var kilometers = parseFloat(document.getElementById('kilometers').value);
  var hours = parseFloat(document.getElementById('hours').value);

  // 检查输入的值是否有效
  if (isNaN(kilometers) || isNaN(hours) || kilometers <= 0 || hours <= 0) {
    document.getElementById('result').innerHTML = '低能兒';
    document.getElementById('deposit').innerHTML = '你確定要租車?????';
    document.getElementById('depositResult').innerHTML = '輸入大於0的數字啦';
  } else {
    var result = (kilometers * 4.5 + hours * 140).toFixed(0);
    var firstpay = (hours * 140).toFixed(0); 

    document.getElementById('result').innerHTML = '預期總金額為： NT$ ' + result;
    var depositAmount = (firstpay * 0.3).toFixed(0); 
    var finalAmount = (firstpay - depositAmount).toFixed(0); 

    document.getElementById('deposit').innerHTML = '訂金： NT$ ' + depositAmount;
    document.getElementById('depositResult').innerHTML = '取車時需先收取(已扣訂金)： NT$ ' + finalAmount + ' <br> (先收取時間計費，里程計費等還車時再收費)';
  }
}
