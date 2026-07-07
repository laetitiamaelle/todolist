const form = document.querySelector('form')
const input = document.querySelector('input')
const ul = document.querySelector('ul')
const bouton = document.querySelectorAll('div button')


let compteur = 1

// ajout et suppression des taches
form.addEventListener('submit', (e) => {
  e.preventDefault()
  const tache = input.value
  console.log(tache)
  const li = document.createElement('li')
  // ajout des classes todo list-group-item d-flex align-items-center a l'element li

  li.classList.add('todo', 'list-group-item', 'd-flex', 'align-items-center')

  // ajout des differents fils du li

  //le checbox
  const checbox = document.createElement('input')
  checbox.type = 'checkbox'

  checbox.id = 'todo-' + compteur

  checbox.classList.add('form-check-input')
  //  li.appendChild(checbox)
  // label 1

  const label1 = document.createElement('label')
  label1.classList.add('ms-2', 'form-check-label')
  label1.textContent = tache
  label1.htmlFor = 'todo-' + compteur
  console.log(checbox.id, label1.htmlFor)
  compteur++

  //label 2
  const label2 = document.createElement('label')
  label2.classList.add('ms-auto', 'btn', 'btn-danger', 'btn-sm')
  const poubelle = document.createElement('i')
  poubelle.classList.add('bi-trash')
  label2.appendChild(poubelle)
  li.append(checbox, label1, label2)
  console.log(li)
  ul.appendChild(li)
  input.value = ""


  // suppressio d'une tache 
  label2.addEventListener('click', () => {
    const reponse = confirm("voulez vous supprimer cette tache?")
    if (reponse) {
      li.remove()
      setTimeout(() => {
        alert("tache suprimer avec succes")
      }, 500)
    } else {
      alert("aucune tache supprimer")
    }
  })

  

})


//filtrage 
 
  bouton.forEach((button)=>{
     button.addEventListener('click',()=>{
      const filtre=button.dataset.filter
    console.log(filtre)
    const taches=document.querySelectorAll('li')
     bouton.forEach((button)=>button.classList.remove('active'))
     button.classList.remove('active')

     taches.forEach((tache)=>{
      const checbox=tache.querySelector('input')
      if(filtre==="done"){
        if(checbox.checked==false){
            tache.classList.remove('d-flex')
             tache.classList.add('d-none')
        }else{
           tache.classList.remove('d-none')
             tache.classList.add('d-flex')
        }
      }else if(filtre==='todo'){
        if(checbox.checked==true){
            tache.classList.remove('d-flex')
             tache.classList.add('d-none')
        }else{
          tache.classList.remove('d-none')
          tache.classList.add('d-flex')
        }
      }else{
        tache.classList.remove('d-none')
          tache.classList.add('d-flex')
      }
     })
     })
  })