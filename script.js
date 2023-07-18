const nameCats = 
[
    'Кот с усами',
    'Кошка с колпаком',
    'Кот с тыквой',
    'Кошка-балерина'
];

const imageCats = 
[
    'img/catOne.png',
    'img/catTwo.png',
    'img/catTree.png',
    'img/catFour.png'
];

const tableCats = 
[
    {
        type: 'Гладкошерстный',
        color: 'Белый с рыжими глазами',
        vaccination: 'Вакцинирован',
        passport: 'Есть ветпаспорт',
        claw: 'Приучен к когтеточке',
        tray: 'Знает лоточек'
    },
    {
        type: 'Гладкошерстный',
        color: 'Белый с рыжими глазами',
        vaccination: 'Вакцинирован',
        passport: 'Есть ветпаспорт',
        claw: 'Приучен к когтеточке',
        tray: 'Знает лоточек'
    },
    {
        type: 'Гладкошерстный',
        color: 'Белый с рыжими глазами',
        vaccination: 'Вакцинирован',
        passport: 'Есть ветпаспорт',
        claw: 'Приучен к когтеточке',
        tray: 'Знает лоточек'
    },
    {
        type: 'Гладкошерстный',
        color: 'Белый с рыжими глазами',
        vaccination: 'Вакцинирован',
        passport: 'Есть ветпаспорт',
        claw: 'Приучен к когтеточке',
        tray: 'Знает лоточек'
    },
];

for (let i = 0; i < nameCats.length; i++) {
    const dataNameCats = document.createTextNode(nameCats[i]);
    const textCats = document.getElementById(`name-cat-${i+1}`);
    textCats.appendChild(dataNameCats);
};

const imagePaths = document.querySelectorAll('.thumb img');

for (let i = 0; i < imagePaths.length; i++) {
    imagePaths[i].src = imageCats[i];
    imagePaths[i].alt = nameCats[i];
};

for (let i = 0; i < tableCats.length; i++) {
    let cat = tableCats[i];
    let catInfo = `
    <ul>
        <li>${cat.type}</li>
        <li>${cat.color}</li>
        <li>${cat.vaccination}</li>
        <li>${cat.passport}</li>
        <li>${cat.claw}</li>
        <li>${cat.tray}</li>`;

        const pushElement = document.querySelector(`#name-cat-${i+1}`);
        pushElement.insertAdjacentHTML('afterend', catInfo);
};