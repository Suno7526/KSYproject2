const currencyEl_one = document.getElementById('currency-one');
const amountEl_one = document.getElementById('amount-one');
const currencyEl_two = document.getElementById('currency-two');
const amountEl_two = document.getElementById('amount-two');

const rateEl = document.getElementById('rate');
const swap = document.getElementById('swap');

// Fetch exchange rates and update the DOM
function calculate() {
  const currency_one = currencyEl_one.value;
  const currency_two = currencyEl_two.value;

  fetch(`https://api.exchangerate-api.com/v4/latest/${currency_one}`)
    .then(res => res.json())
    .then(data => {
      // console.log(data);
      const rate = data.rates[currency_two];
      
      rateEl.innerText = `1 ${currency_one} = ${rate} ${currency_two}`;

      amountEl_two.value = (amountEl_one.value * rate).toFixed(2)
    })

}

      const currencyOneSelect = document.getElementById("currency-one");
      const currencyTwoSelect = document.getElementById("currency-two");
      const flagOne = document.getElementById("flag-one");
      const flagTwo = document.getElementById("flag-two");

      // 매핑된 국기 이미지 경로를 담은 객체
      const flagImageMap = {
          AED: "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbPrgDr%2FbtsxZxEz2Yt%2FIFi8k7iZYNixMx7sQ6YKN0%2Fimg.png",
          ARS: "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FDIjRL%2FbtsxLj1mV73%2FsSyAWyKgpYjWlAlhVN60r1%2Fimg.png",
          AUD: "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbRzdRS%2FbtsxUbIGcuS%2FZ3qVSKwOidRlvzYRo14kF0%2Fimg.png",
          BGN: "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FOFGXc%2Fbtsx2wLUcWW%2FEPoWgte62o2I8IrroiYXJK%2Fimg.png",
          BRL: "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbsUi0a%2Fbtsx3OyLxgq%2FIc0gBNk9fpm8FVeMdJjVLk%2Fimg.png",
          CNY: "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FRAHTb%2FbtsxvGCFkRt%2FRYjlJeQ36HGlvmOciptgZK%2Fimg.png",
          EUR: "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FGFZHr%2Fbtsx0MaNX97%2FhyukT8qgI8MS7DkusOgAV0%2Fimg.png",
          JPY: "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbbDQUY%2FbtsxtWlzqgc%2FOaiVtYMdtaSK208bfiPMoK%2Fimg.png",
          KRW: "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FMQirv%2Fbtsx1YaOzqu%2FlHVGeQKk0oOllcA3dDGnMk%2Fimg.png",
          USD: "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fb06l7b%2Fbtsx0MIxv1p%2FkqNFUxNBzbO2nEDA2fieJ0%2Fimg.png",
          // 다른 통화에 대한 이미지 경로 추가
      }; 
      
      // 변환 버튼 클릭 시 이미지 변환
      flagOne.src = flagImageMap[currencyOneSelect.value];
      flagTwo.src = flagImageMap[currencyTwoSelect.value];

      currencyOneSelect.addEventListener("change", function(){
          const selectedCurrency = currencyOneSelect.value;
          flagOne.src = flagImageMap[selectedCurrency];
      });

      currencyTwoSelect.addEventListener("change", function(){
          const selectedCurrency = currencyTwoSelect.value;
          flagTwo.src = flagImageMap[selectedCurrency];
      });

      const swapButton = document.getElementById('swap');
      swapButton.addEventListener('click', function(){
          const temp = flagOne.src;
          flagOne.src = flagTwo.src;
          flagTwo.src = temp;
      });

      // 초기 화면 로드 시 국기 이미지 설정
      flagOne.src = flagImageMap[currencyOneSelect.value];
      flagTwo.src = flagImageMap[currencyTwoSelect.value];
      currencyOneSelect.addEventListener("change", function () {
          const selectedCurrency = currencyOneSelect.value;
          flagOne.src = flagImageMap[selectedCurrency];
      });

      currencyTwoSelect.addEventListener("change", function () {
          const selectedCurrency = currencyTwoSelect.value;
          flagTwo.src = flagImageMap[selectedCurrency];
      });

// Event listeners
currencyEl_one.addEventListener('change', calculate);
amountEl_one.addEventListener('input', calculate);
currencyEl_two.addEventListener('change', calculate);
amountEl_two.addEventListener('input', calculate);

swap.addEventListener('click', ()=> {
  const temp = currencyEl_one.value;
  currencyEl_one.value = currencyEl_two.value;
  currencyEl_two.value = temp;
  calculate()
})

calculate()