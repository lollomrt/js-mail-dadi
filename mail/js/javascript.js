//1. Dare all'utente la possibilità di inserire la mail
let mail 
// 2. Creare la lista di mail tra le quali controllare
let mailList = ["lorenzomartini.mrt@outlook.it", "lmdesign@mail.it", "lols@gmail.it", "boolean@gmail.it"]

let button_invia = document.getElementById("invia") 
button_invia.addEventListener("click", function(){
    mail = document.getElementById("mail").value

    // 3. controllare se la mail inserita dall'utente è presente nella lista precedentemente creata
    let flag = false
    for (let i=0; i < mailList.length; i++) {
        let mailAddress = mailList[i]
        if (mailAddress == mail){
            flag = true
        }
    }

    let risultato
    let puoi_entrare = "puoi entrare"
    let non_puoi_entrare = "non puoi entrare"

    if (flag) {
        risultato = puoi_entrare
    }

    else {
        risultato = non_puoi_entrare
    }

    document.getElementById("risultato").innerHTML = `<h2>${risultato}</h2>`
})
