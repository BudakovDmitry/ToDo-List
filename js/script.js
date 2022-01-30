const button = document.querySelector('.button');
const input = document.querySelector('.input');
const list = document.querySelector('.list');
const listDone = document.querySelector('.list-done');

button.addEventListener('click', addToDo);

function addToDo() {
    if(input.value !== '') {
        let listItem = document.createElement('li');
        let buttonDelete = document.createElement('button');
        let buttonDone = document.createElement('button');
    
        buttonDone.classList.add('button-done');
        buttonDone.innerHTML = '&#10003;';
    
        buttonDelete.classList.add('button-delete');
        buttonDelete.innerHTML = '&#10007;';
    
        listItem.innerText = `${input['value']}`
        list.append(listItem);
    
        listItem.append(buttonDone);
        listItem.append(buttonDelete);
    
        input.value = '';


        buttonDelete.addEventListener('click', e => {
            // listItem.style.textDecoration = 'line-through';
            // listItem.style.opacity = '30%';

            // listItem.removeChild(buttonDone);
            // listItem.removeChild(buttonDelete);
            // buttonDelete.addEventListener('click', e => {
            //      list.removeChild(listItem)
            // })

            list.removeChild(listItem)
        })

        buttonDone.addEventListener('click', e => {
            let buttonDel = document.createElement('button');
            buttonDel.classList.add('button-delete');
            buttonDel.innerHTML = '&#10007;';
            buttonDel.style.marginLeft = '10px';

            
            listItem.removeChild(buttonDone);
            listItem.removeChild(buttonDelete);

            listDone.append(listItem);
            listItem.append(buttonDel);
            
            buttonDel.addEventListener('click', e => {
                listDone.removeChild(listItem);
            })
        })
    }
}
