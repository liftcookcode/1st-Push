const tabs = document.querySelectorAll('[data-tab-target]');
const tabContents = document.querySelectorAll('[data-tab-content]');

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.tabTarget);
        tabContents.forEach(tabContent => {
            tabContent.classList.remove('active');
    });
        tabs.forEach(tab => {
            tab.classList.remove('active');
        });
        tab.classList.add('active');
        target.classList.add('active');

    });
});

// ------------------------------------------------------------------------ \\

// let previewContainer = document.querySelector('.food-previewOne');
// let previewBox = previewContainer.querySelectorAll('.preview');


// document.querySelectorAll('.food-container, .food').forEach(food =>{
//     food.onclick = () => {
//         previewContainer.style.display = 'flex';
//         let name = food.getAttribute('data-name');
//         previewBox.forEach(preview =>{
//             let target = food.getAttribute('data-target');
//             if(name == target){
//                 preview.classList.add('active');
//             };
//         });
//     };
// });

// previewBox.forEach(close =>{
//     close.querySelector('.fa-solid').onclick = () =>{
//         close.classList.remove('active');
//         previewContainer.style.display = 'none';
//     };
// })