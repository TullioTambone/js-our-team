//milestone 0:
// Creare l’array di oggetti con le informazioni fornite.
const team = [
    {
      name: 'Wayne Barnett',
      role: 'Founder & CEO',
      image: 'wayne-barnett-founder-ceo.jpg',
    },
    {
      name: 'Angela Caroll',
      role: 'Chief Editor',
      image: 'angela-caroll-chief-editor.jpg',
    },
    {
      name: 'Walter Gordon',
      role: 'Office Manager',
      image: 'walter-gordon-office-manager.jpg',
    },
    {
      name: 'Angela Lopez',
      role: 'Social Media Manager',
      image: 'angela-lopez-social-media-manager.jpg',
    },
    {
      name: 'Scott Estrada',
      role: 'Developer',
      image: 'scott-estrada-developer.jpg',
    },
    {
      name: 'Barbara Ramos',
      role: 'Graphic Designer',
      image: 'barbara-ramos-graphic-designer.jpg',
    },
];

// MILESTONE 1:
// Stampare su console, per ogni membro del team, le informazioni di nome

for (let i = 0; i < team.length; i++) {
    console.log(team[i]);
}

//MILESTONE 2 + bonus:
for (let i = 0; i < team.length; i++) {

    let mySelection = document.querySelector('.row');

    mySelection.innerHTML +=  `
    <div class= "col-3">
        <div class="card" style="width: 18rem;">
            <img src=./assets/img/${team[i].image} class="card-img-top" alt="img-worker">
            <div class="card-body">
                <h5 class="card-title">${team[i].name}</h5>
                <p class="card-text">${team[i].role}</p>
            </div>
        </div>
    </div>
    `
};