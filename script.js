/* Новые элементы должны добавляться в список по нажатию на Enter */
const sendInput = document.querySelector('input');
const list = document.querySelector('#items');


sendInput.addEventListener('keydown', function (event) {
    if (event.key == 'Enter') {
        const shopItems = document.createElement('div');
        const text = sendInput.value;

        shopItems.textContent = text;

        if (text != '') {
            list.append(shopItems);
        }

        sendInput.value = '';

        shopItems.addEventListener('click', function () {
            shopItems.classList.toggle('done');
        });
    }
    
})



/* Пустые элементы не должны добавляться */

/* Если кликнуть на элемент списка, он зачеркивается */

/* Если кликнуть повторно уже на зачеркнутый, он снова становится обычным */

/* Очищать input после добавления нового элемента в список */
