//1. Dare all'utente la possibilità di inserire la mail
let mail = prompt("Inserisci la tua mail")
console.log(mail)

// 2. Creare la lista di mail tra le quali controllare
let mailList = ["lorenzomartini.mrt@outlook.it", "lmdesign@mail.it", "lols@gmail.it", "boolean@gmail.it"]

// 3. controllare se la mail inserita dall'utente è presente nella lista precedentemente creata
let flag = false
for (let i=0; i < mailList.length; i++) {
    let mailAddress = mailList[i]
    if (mailAddress == mail){
        flag = true
    }
}

if (flag) {
    console.log("puoi entrare")
}

else {
    console.log("non puoi entrare")
}