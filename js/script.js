const button = document.querySelector('.button');
const input = document.querySelector('.input');
const list = document.querySelector('.list');

button.addEventListener('click', addToDo);

function addToDo() {
    if(input.value !== '') {
        let listItem = document.createElement('li');
        let buttonDelete = document.createElement('button');
        let buttonDone = document.createElement('button');
    
        buttonDone.classList.add('button-done')
        buttonDone.innerHTML = '&#10003;';
    
        buttonDelete.classList.add('button-delete')
        buttonDelete.innerHTML = '&#10007;';
    
        listItem.innerText = `${input['value']}`
        list.append(listItem);
    
        listItem.append(buttonDone);
        listItem.append(buttonDelete);
    
        input.value = '';
    }
}
