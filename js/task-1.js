const list = document.querySelector('#categories');
const item = list.querySelectorAll('li.item');
console.log(`Number of categories: ${item.length}`);

item.forEach(category => {
    const h2 = category.querySelector('h2');
    const el = category.querySelectorAll('li');

    console.log(`Categories: ${h2.textContent}`);
    console.log(`Elements: ${el.length}`);
})