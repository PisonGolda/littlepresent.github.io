const texts = ["All the best for ur study, family, scout, church, and anything else. I hope this year you will be better in every way than before. I miss u so much actually but i know that u're really busy these days.. I just wanna say that you're so cool that you can make it this far. I feel happy and warm inside whenever I think of you and all the time we have spent together. I met you and never expected to be this close. I can't hide my smiles when you text and call me. I wanna meet you or atleast we talk through Discord. I love that feeling i get when i see your smile. I really hope that i'm enough for u. Sometimes i just feel scared if u find someone new. Of course i'm scared. I'm scared you would find me annoying. I'm scared that you would find me boring and don't want to talk to me anymore. I'm scared that you find me not perfect as others. I'm scared if u find someone who can give everything i can't. Someone 'better' than me. Please tell me i'm more than enough. I don't wanna be ur first priority, i want u to focus on your study, your life. Lets grow together, i'll support u. From the bottom of my heart, i love u n I'll always love u! You'll always be my fav person. Keep the spirit, okay. Keep being Damai that i know, take care Rawrr!! --------------- (note March 29, 2022): Thanks for the perfect playlist in the woorlddd even though i'm still trying to find all the meanings hahahahh"];
let count = 0;
let index = 0;
let currentText = "";
let letter = "";

(function type() {

    if (count === texts,length) {
    count = 0;
    }
    currentText = texts[count];
    letter = currentText.slice(0, ++index);
    
    document.querySelector(".typing").textContent = letter;
    if(letter.length === currentText.length){
        count++;
        index = 0
    }
    setTimeout(type, 40);
}());