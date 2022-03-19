const inputElement = document.querySelector('input')
const buttonElement = document.querySelector('form button')
const ulElement = document.querySelector('ul')



buttonElement.onclick = ev =>  {
    ev.preventDefault();

    if(inputElement.value){
        const textElement = document.createElement('span')
        textElement.innerHTML = inputElement.value
            
            let nome = 'task'
            let valor = inputElement.value
            let validade = ''
            let local = 'path=/'
            document.cookie = nome + "=" + (valor || "") + validade + "; "+local;

        const btnElement = document.createElement('button')
        btnElement.innerHTML = ' remover'

        const liElement = document.createElement('li')
        liElement.appendChild(textElement)
        liElement.appendChild(btnElement)
        

            btnElement.onclick = () => {
            ulElement.removeChild(liElement)
            
            
        }

        
        const rbElement = document.createElement('button')
        rbElement.innerHTML = 'editar' // botão editar

            rbElement.onclick = () =>{
                let rep = prompt('Nome da tarefa: ')
                textElement.textContent = rep
            }

        console.log(liElement) // Mostra os itens dentro do LI no console

        liElement.appendChild(rbElement) // Renderiza o Botão de edição no html
        ulElement.appendChild(liElement)
        inputElement.value = ''
    }
}   