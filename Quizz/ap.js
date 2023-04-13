const number=[1,2,3,4,5,6,7,8,9,10];
const questions=['Quelle est la capitale de la France ?', 'Qui a écrit "Les Misérables" ?',
'Qui est la plus grande planète du Système solaire ?', 'Qui a peint "La Joconde" ?',
'Qui a composé la "9éme Symphonie" ?','Quelle est la plus haute montagne du monde ?',
'Qui a écrit "Les Fleurs du Mal" ?',"Quelle est la capitale de l'Italie ?",
'Qui a écrit "La Divine Comédie" ?',"Quel est le plus grand océan du monde ?"]
const answer1=["New York","Victor Hugo","Jupiter","Léonard De Vinci",
 "Ludwig Van Beethoven","Mont Everest","Charles Baudelaire","Rome","Dante Alighieri",
"Pacifique"]
const answer2=["Paris", "Gustave Flaubert","Saturne","Vincent Van Gogh",
"Wolfgang Amadeus Mozart","Mont Kilimandjaro","Victor Hugo","Milan","William Shakespeare","Atlantique"]
const answer3=["Londres","Emile Zola","Neptune","Pablo Picasso","Johann Sebastian Bach",
"Mont Fuji","Gustave Flaubert","Naples","Charles Dickens","Indien"]
const good_answers=["b","a","a","a","a","a","a","a","a","a"]

const questions_sentence=document.getElementById("question");
const choice1=document.getElementById("answer1");
const choice2=document.getElementById("answer2");
const choice3=document.getElementById("answer3");
const number_questions=document.getElementById("question_number");
var next=document.getElementsByClassName("confirm")[0];
const reset=document.getElementsByClassName("reset")[0];
var input_choices=document.getElementsByClassName("input")
var percentage = 0
next.addEventListener("click",change);
reset.addEventListener("click", supp);
const result_button=document.getElementsByClassName("see_result")[0];
number_questions.innerHTML="Question "+number[0];
questions_sentence.innerHTML=questions[0];
choice1.innerHTML=answer1[0];
choice2.innerHTML=answer2[0];
choice3.innerHTML=answer3[0];
result_button.addEventListener("click",viewScore)
result_button.style.display="none"
var result=0;
var i=0
var check_input=""
var view_result=document.getElementById("view_result")
next.disabled=true;

for(var z=0;z<input_choices.length;z++){
   input_choices[z].addEventListener("focus",confirm_enable)
    if(input_choices[z].checked){
        confirm_enable()    
    }
}
function change(){ 
    console.log("salut")
    console.log(i)
    console.log(number.length-1)
    if(i<=number.length-1) {
        console.log("bonjour")
    for( var y=0;y<input_choices.length;y++){
        if(input_choices[y].checked && input_choices[y].value===good_answers[i]){
             result++;  
             console.log(result)

        } 
    }      
    

    // console.log(good_answers[i]) 
    // console.log(result)
    
     if(i<number.length-1){
    i=Number(i)+1
    number_questions.innerHTML="Question "+number[i];
    questions_sentence.innerHTML=questions[i];
    choice1.innerHTML=answer1[i];
    choice2.innerHTML=answer2[i];
    choice3.innerHTML=answer3[i];
     for( var x=0;x<input_choices.length;x++){
        input_choices[x].checked=false
        next.disabled=true
     }
     }
    else {
    next.style.display="none"
    result_button.style.display="block"    
    }
}  
    }


function confirm_enable(){
    next.disabled=false;

}

   
function viewScore(){   
    percentage = (result/10)*100
    view_result.innerHTML='Vous avez obtenue '+result+' bonnes réponses soit '+percentage+'% de bonne réponse'
    // window.alert("Vous avez obtenue "+result+"  bonnes réponses soit "+percentage+"% de bonne réponse")
   
    

}
    
function supp() {
    location.reload();
}



