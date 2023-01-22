let audio = new Audio('./assets/samidare.mp3')



const form = document.querySelector('#form-habits')
const nlwSetup = new NLWSetup(form)
const button = document.querySelector('header button')



button.addEventListener('click', add)
form.addEventListener("change", save)


let newName;
if (localStorage.getItem("newName")) {
    newName = localStorage.getItem("newName");
  } else {
    newName = prompt("Digite seu nome");
    localStorage.setItem("newName", newName);
  }
  document.getElementById("username").innerHTML = `Hábitos de ${newName}`;
  






function add() {

    const today = new Date().toLocaleDateString('pt-br').slice(0, -5)
    const dayExists = nlwSetup.dayExists(today)
    audio.play();
    diminuir_volume()
    
    if(dayExists){
        alert('Dia já incluso!🛑')
        return
    }

    alert('Adicionado com sucesso! ✔ ')
    nlwSetup.addDay(today)
}

function save() {
    localStorage.setItem('NLWSetup@habits', JSON.stringify(nlwSetup.data))

}

const data = JSON.parse(localStorage.getItem('NLWSetup@habits')) || {}

nlwSetup.setData(data)
nlwSetup.load()


function diminuir_volume(){
    if( audio.volume > 0)  audio.volume -= 0.9;
}

// const data = {
//     run: ['01-01', '01-02', '01-06', '01-07', '01-08' ],
//     takePills: ['01-03'],
//     journal: ['01-02']
// }



