// 1. Generare il numero random per l'utente
let n_user = Math.floor(Math.random() * 6 + 1)
console.log(n_user)
// 2. Generare il numero random per il computer
let n_computer = Math.floor(Math.random() * 6 + 1)
console.log(n_computer)
// 3. Confrontare quale dei due numeri è più grande
if (n_user === n_computer){
    console.log("PARI")
} else if (n_user > n_computer) {
    console.log("USER VINCE!")
} else {
    console.log("COMPUTER VINCE!")
}
//     3.1 Se n1 è > di n2 --> user vince
//     3.2 Se n1 è < di n2 --> computer vince
//     3.3 Se n1 è = di n2 --> pari