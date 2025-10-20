//console.log('ciao');

/*Dato un array di oggetti rappresentante un team di un’azienda, creare una pagina dedicata  in cui mostrare una card per ciascun componente.

(trovate l’array del team all’interno della cartella in allegato)

Bonus

Rendere l’esercizio responsive, mandando a capo le card
Aggiungere un form di agginta membri che permetta di visualizzare il nuovo membro sulla pagina (usate una foto qualunque, anche vostra se volete sentirvi parte del team! 😀)
 */
const teamMembers = [
    {
        name: "Marco Bianchi",
        role: "Designer",
        email: "marcobianchi@team.com",
        img: "img/male1.png"
    },
    {
        name: "Laura Rossi",
        role: "Front-end Developer",
        email: "laurarossi@team.com",
        img: "img/female1.png"
    },
    {
        name: "Giorgio Verdi",
        role: "Back-end Developer",
        email: "giorgioverdi@team.com",
        img: "img/male2.png"
    },
    {
        name: "Marta Ipsum",
        role: "SEO Specialist",
        email: "martarossi@team.com",
        img: "img/female2.png"
    },
    {
        name: "Roberto Lorem",
        role: "SEO Specialist",
        email: "robertolorem@team.com",
        img: "img/male3.png"
    },
    {
        name: "Daniela Amet",
        role: "Analyst",
        email: "danielaamet@team.com",
        img: "img/female3.png"
    }
];

/*<div class="col col-md-4 mt-3">
                    <div class="  bg-black text-white" style="max-width: 540px;">
                        <div class="row g-0">
                            <div class="col-md-4">
                                <img src="./assets/img/female1.png" class="img-fluid " alt="" style="height: 100%;">
                            </div>
                            <div class="col-md-8 p-5">
                                <div class="card-body ">
                                    <h5 class="card-title ">Laura Rossi</h5>
                                    <p class="card-text">Front-end Developer</p>
                                    <a href="" class="card-link">laurarossi@team.com</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>*/

// creare una pagina dedicata  in cui mostrare una card per ciascun componente.
// mi prendo il nodo dell documento dove inserire la card.
const rowEl = document.querySelector('.row')

//creo una variabile che contiene il codice html da inserire 
let teamMembersCards

console.log(containerEl)
//ciclo l'array per prendere i singoli oggetti
for (let i = 0; i < teamMembers.length; i++) {
    const teamMember = teamMembers[i];
    console.log(teamMember)
    //mi prendo le singole chiavi di ogni oggetto
    const { name, role, email, img } = teamMember
    console.log(name, role, email, img)
    //creo una variabile che contiene le informazioni da aggiungere alla teamMembersCards
    const teamMemberCard = `
    <div class="col col-md-4 mt-3">
        <div class="  bg-black text-white" style="max-width: 540px;">
            <div class="row g-0">
                <div class="col-md-4">
                    <img src="./assets/img/female1.png" class="img-fluid " alt="" style="height: 100%;">
                </div>
                <div class="col-md-8 p-5">
                    <div class="card-body ">
                        <h5 class="card-title ">Laura Rossi</h5>
                        <p class="card-text">Front-end Developer</p>
                        <a href="" class="card-link">laurarossi@team.com</a>
                    </div>
                </div>
            </div>
        </div>
    </div>`
    console.log(teamMemberCard)
    //aggiorno teamMemberCards ad ogni ciclo in modo che contenga tutte le card
    teamMembersCards += teamMemberCard
}
//inserisco nel documento una nuova scheda per ogni oggetto contenuto dall'array
//containerEl.innerHTML = teamMembersCards



