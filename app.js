var quesArr = [
    {
      num: 1,
      question: "Q1  What does HTML stand for.....?",
      options: {
        a: "A: Hyper text markup Language",
        b: "B: Hyper text programming Language",
        c: "C: Hyper text styling Language",
        d: "D: Hyper text scripting Language",
      },
      correctAns: "A: Hyper text markup Language",
    },
    {
      num: 2,
      question: "Q2  Which type of JavaScript Languages is",
      options: {
        a: "A: Object-Oriented ",
        b: "B: Object-Base",
        c: "C: Assembly Languages",
        d: "D: high Level",
      },
      correctAns: "B: Object-Base",
    },
    {
      num: 3,
      question: "Q3  The 'function' and  'var' are known as:",
      options: {
        a: "A: Keywords",
        b: "B: Data types",
        c: "C: Declaration statements",
        d: "D: Prototypes",
      },
      correctAns: "C: Declaration statements",
    },
    {
      num: 4,
      question: "Q4  who is the present president of pakistan",
      options: {
        a: "A: Arif Alvi",
        b: "B: Imran Khan",
        c: "C: Nawaz Sharif",
        d: "D: Zardari",
      },
      correctAns: "A: Arif Alvi",
    },
    {
      num: 5,
      question: "Q5  How many prayers in a day:",
      options: {
        a: "A: 6",
        b: "B: 5",
        c: "C: 3",
        d: "D: none",
      },
      correctAns: "B: 5",
    },
  ];





///get ques element
var uiQuestion = document.getElementById("question")

///get Option element
var Quizoption = document.getElementsByClassName("Quizoption")

var nextBtn = document.getElementById("nextBtn")

var mtotalQues = document.getElementById("totalQues")
var mcorrectAns = document.getElementById("correctAns")
var mwrongQues = document.getElementById("wrongQues")
var resultBox = document.getElementById("resultBox")
var mainBox = document.getElementsByClassName("mainBox")[0]
var footerCounter = document.getElementById("footerCounter")
////set onclick event options
for(var i = 0 ; i < Quizoption.length ; i++){
    Quizoption[i].setAttribute("onclick" , "checkAnswer(this)")
}



var counter = 0
var Scorecounter = 0
var wrongCounter = 0

////onload function///
function startQuiz(){
    //set ques 
    
    uiQuestion.innerHTML = quesArr[counter].question

    ///set options
    Quizoption[0].innerHTML = quesArr[counter].options.a;
    Quizoption[1].innerHTML = quesArr[counter].options.b;
    Quizoption[2].innerHTML = quesArr[counter].options.c;
    Quizoption[3].innerHTML = quesArr[counter].options.d;

  footerCounter.innerHTML = (counter + 1) + "/" + quesArr.length


    nextBtn.style.display = "none"

}



function nextQues(){
    
  if( counter < quesArr.length -1){
    counter++
    startQuiz()

  }else{
    alert("khatam....");
    resultBox.style.display = "block"
    mainBox.style.display = "none"
    mtotalQues.innerHTML = quesArr.length
    mcorrectAns.innerHTML = Scorecounter
    mwrongQues.innerHTML = wrongCounter


  }
    // console.log(quesArr.length)
      
    for(var i = 0 ; i<Quizoption.length ; i++){
      Quizoption[i].style.pointerEvents = "visible"
      Quizoption[i].style.backgroundColor = "transparent"

  }
}


function checkAnswer(li){
    
    if(li.innerHTML === quesArr[counter].correctAns){
        console.log("true")
        Scorecounter++;
        console.log("Scorecounter" , Scorecounter);
        li.style.backgroundColor = "green"
      }else{
        wrongCounter++
      console.log("false");
      li.style.backgroundColor = "red"
      
    }
     
          /// disable all li options///
    for(var i = 0 ; i<Quizoption.length ; i++){
        Quizoption[i].style.pointerEvents = "none"
    }
        //// visible next btn///
    nextBtn.style.display = "block"

}

            ///Set Timmer//

var min = document.getElementById("min")
var sec = document.getElementById("sec")

var sec1 = 0
var min2 = 1
min.innerHTML = min2

var interval = setInterval(function(){
    sec1++
    sec.innerHTML = sec1
      if(sec1 ===60){
      min2--

      min.innerHTML = min2
    }
    if(min2 <= 0){
        resultBox.style.display = "block"
        mainBox.style.display = "none"

        mtotalQues.innerHTML = quesArr.length
        mcorrectAns.innerHTML = Scorecounter
        mwrongQues.innerHTML = wrongCounter
    }



} , 1000)