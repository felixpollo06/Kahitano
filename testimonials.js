// btns
const btnNext = document.getElementById("testNextBtn");
const btnPrev = document.getElementById("testPrevBtn");
// diplay
const testMsg = document.getElementById("testMsg");
const testName = document.getElementById("testName");
const testRate = document.getElementById("testRate");
// array
const testMsgArr = ["nice, might buy again", "Pilipen Numbawan","Felix sabog","Pogi Ako"];
const testNameArr =["Maku-Maku-san","Debu-san","Kurisutin-san","Roarudo-san"];
const testRateArr =[10,9,8,7];
//funstions
let i = 0;
let testSize = testMsgArr.length;
function testNext(){
i++;
if(i == testSize ){
    btnNext.disabled = true;
}
    btnPrev.disabled = false;
    testMsg.innerHTML = testMsgArr[i];
    testName.innerHTML = testNameArr[i];
    testRate.innerHTML = testRateArr[i] + " / 10";

}
function testPrev(){
    i--;
    if(i == testSize ){
        btnPrev.disabled = true;
    }
        btnNext.disabled = false;
        testMsg.innerHTML = testMsgArr[i];
        testName.innerHTML = testNameArr[i];
        testRate.innerHTML = testRateArr[i] + " / 10";
}
function ready() {
    backPrev.disabled = true;
  }
  

