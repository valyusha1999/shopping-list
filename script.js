/* Новые элементы должны добавляться в список по нажатию на Enter */
const sendInput = document.querySelector('.input');
const list = document.querySelector('#items');
const shopItems = document.createElement ('div');

sendInput.addEventListener('keydown', function(event) {
    if(event.key == 'Enter') {
        const text = sendInput.value;
    }  
    shopItems.textContent = text;
    
    if(text != '') {
        list.append(shopItems);
    }

    sendInput.value = '';
})


for (const item of shopItems) {
    item.addEventListener('click', function () {
      item.classList.toggle('done');
    });
  };
/* Пустые элементы не должны добавляться */

/* Если кликнуть на элемент списка, он зачеркивается */

/* Если кликнуть повторно уже на зачеркнутый, он снова становится обычным */

/* Очищать input после добавления нового элемента в список */
