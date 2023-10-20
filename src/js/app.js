// const formRefs = document.querySelectorAll('.calc__form');
// const itemRefs = [...document.querySelectorAll('.list__item')];
// console.log(itemRefs)

// formRefs.forEach((ref) =>{
//     ref.addEventListener("click", (event) => {
//         let target = event.target;
//
//
//         if (target === ref.children[0].children[0]) {
//             let value = ref.children[0].children[0].value;
//             itemRefs[0].classList.add('open');
//             itemRefs[0].children[1].textContent = `${value} * $0.5`
//         } else if (target === ref.children[1].children[0]) {
//             itemRefs[1].classList.add('open');
//         } else if (target === ref.children[3].children[0]) {
//             itemRefs[3].classList.add('open');
//         } else if (target === ref.children[4].children[0]) {
//             itemRefs[4].classList.add('open')
// }
//     })
// })

const formRefs = document.querySelector('.calc__form');
const itemRefs = document.querySelectorAll('.list__item');

formRefs.addEventListener("input", (event) => {
    const target = event.target;
    const products = document.querySelector('[data-id="products"]');
    const orders = document.querySelector('[data-id="orders"]');
    const accounting = document.querySelector('[data-id="accounting"]');
    const terminal = document.querySelector('[data-id="terminal"]');

    if (target.id === 'products') {
        products.classList.add('open');
        const value = parseFloat(target.value) || 0;
        const price = value * 0.5;
        products.querySelector('.item__calc').textContent = `${value} * $0.5`;
        products.querySelector('.item__price').textContent = `$${price}`;
    } else if (target.id === 'orders') {
        orders.classList.add('open');
        const value = parseFloat(target.value) || 0;
        const price = value * 0.5;
        orders.querySelector('.item__calc').textContent = `${value} * $0.5`;
        orders.querySelector('.item__price').textContent = `$${price}`;
    } else if (target.id === 'accounting') {
        accounting.classList.toggle('open');
    } else if (target.id === 'terminal') {
        terminal.classList.toggle('open');
    }
});












