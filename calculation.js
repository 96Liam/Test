function calculate() {
  var kilometers = parseFloat(document.getElementById('kilometers').value);
  var hours = parseFloat(document.getElementById('hours').value);

  var result = kilometers * 4.5 + hours * 140;
  var deposit = hours * 140; // 計算訂金

  document.getElementById('result').innerHTML = '預期總金額為：' + result;

  document.getElementById('depositResult').innerHTML = '訂金為：' + deposit + '<br>(先收取時間計費<br>里程計費等還車時再收費)';
 // 顯示訂金結果
}
