let questionArray = [
    {
      question:'Q1. HTML stands for?',
      answer: 'Hyper text markup language',
      option: [
        "Hyper text mode language",
       'Hyper text medium language',
       "Hyper text markup language",
      "Hyper text mean language"
    ]
    },
    {question:'Q2. Order list element is?',
    answer : "ol",
     option:[
       'ul',
       'ol',
       'li',
       'ls'
     ]
    }, 
    {question:'Q3. Which is input type?',
    answer : "all of the above",
     option:[
       'text',
       'email',
       'all of the above',
       'password'
     ]},
    {question:'Q4. Space inside the box is?',
    answer : "padding",
     option:[
       'padding',
       'margin',
       'border',
       'content'
     ]},
    {question:'Q5. Total Headings in HTML are?',
    answer : "text-transform",
     option:[
       '6',
       "4",
       '8',
       '5'
     ]}
]

function showQuestion(e){
  let question = document.querySelector("#question");
  question.innerHTML = questionArray[e].question;

  let option = document.getElementsByClassName('options');
  for(let i = 0;i<questionArray[e].option.length;i++){
    option[i].innerHTML = questionArray[e].option[i];
  }
}

let questionCount = 0;
function nextQuestion(){
  last()
  totalScore();
  questionCount++;;
  showQuestion(questionCount);
  removeActiveClass();
}


function putActiveClass(e){
  removeActiveClass(e);
  e.classList.add("active");
}

function removeActiveClass(){
  let active = document.getElementsByClassName("active");
  for (let i = 0; i < active.length; i++) {
    active[i].classList.remove("active");
  }
}


let score = 0;
function totalScore(){
  let userValue = document.querySelector("p.options.active").innerHTML;
  console.log(userValue)
  if(userValue==questionArray[questionCount].answer){
    score+=10;
    sessionStorage.setItem("score",score);
    sessionStorage.setItem("time", `${minutes} minutes and ${seconds} seconds`);
  }
}

function last(){
  if(questionCount==questionArray.length -1 ){
    window.location.href = 'result.html';
  }
};  

