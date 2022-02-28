//const para = document.querySelector('.four');

//console.log(para);

//const paras = document.querySelectorAll('p');

//paras.forEach(para => console.log(para));

//const c = document.querySelector('.c');

//let imgn = 0;

//c.innerHTML += `<img src="img${imgn}.jpg">`;

//console.log(c.innerHTML);

const theme = document.querySelector('link');

const themeA = Array.from(
    document.querySelectorAll('[data-theme]')
);

themeA.forEach(action => {
    action.addEventListener('click', () => {
        const type = action.dataset.theme;
        console.log(type);
        switch (type) {
            case 'dark':
                theme.href='dark.css'
                console.log(type);
                break;

            case 'blind':
                theme.href='light.css'
                console.log(type);
                break;
        }
        
    });
});