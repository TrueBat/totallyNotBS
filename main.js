const actions = Array.from(
    document.querySelectorAll('[data-action]')
);

let imgn = 0;

document.querySelector("#imgs").innerHTML = `<img src="img${imgn}.jpg" alt="${imgn}">`;

actions.forEach(action => {
    action.addEventListener('click', () => {
        const type = action.dataset.action;
        console.log(type);
        switch (type) {
            case 'for':
                imgn++;
                console.log(imgn);
                break;

            case 'bac':
                imgn--;
                console.log(imgn);
                break;
        }
        if (imgn>=0) {
            document.querySelector("#imgs").innerHTML= `<img src="img${imgn}.jpg" alt="thats supposed to be img ${(imgn + 1)} but sadly it doesnt exist">`;
        } else {
            document.querySelector("#imgs").innerHTML= `srsly bro? go forward ${-imgn} time/s to get back`;
        }
        
    });
});