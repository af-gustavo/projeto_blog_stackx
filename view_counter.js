function incrementCounterFerrari() {

    let countFerrari = sessionStorage.getItem('count-ferrari');

    if (countFerrari === null) {
        countFerrari = 0;
    } else {
        countFerrari = parseInt(countFerrari);
    }

    countFerrari++;

    sessionStorage.setItem('count-ferrari', countFerrari);

    document.getElementById('counterFerrari').textContent = countFerrari;
}

function incrementCounterMaseratti() {

    let countMaseratti = sessionStorage.getItem('count-maseratti');

    if (countMaseratti === null) {
        countMaseratti = 0;
    } else {
        countMaseratti = parseInt(countMaseratti);
    }

    countMaseratti++;

    sessionStorage.setItem('count-maseratti', countMaseratti);

    document.getElementById('counterMaseratti').textContent = countMaseratti;
}

function incrementCounterAstonMartin() {

    let countAstonMartin = sessionStorage.getItem('count-aston-martin');

    if (countAstonMartin === null) {
        countAstonMartin = 0;
    } else {
        countAstonMartin = parseInt(countAstonMartin);
    }

    countAstonMartin++;

    sessionStorage.setItem('count-aston-martin', countAstonMartin);

    document.getElementById('counterAstonMartin').textContent = countAstonMartin;
}

function incrementCounterMercedezBenz() {

    let countMercedezBenz = sessionStorage.getItem('count-mercedez-benz');

    if (countMercedezBenz === null) {
        countMercedezBenz = 0;
    } else {
        countMercedezBenz = parseInt(countMercedezBenz);
    }

    countMercedezBenz++;

    sessionStorage.setItem('count-mercedez-benz', countMercedezBenz);

    document.getElementById('counterMercedezBenz').textContent = countMercedezBenz;
}

window.onload = function () {
    let countFerrari = sessionStorage.getItem('count-ferrari');
    let countMaseratti = sessionStorage.getItem('count-maseratti');
    let countAstonMartin = sessionStorage.getItem('count-aston-martin');
    let countMercedezBenz = sessionStorage.getItem('count-mercedez-benz');

    if (countFerrari === null) {
        countFerrari = 0;
    } else if (countMaseratti === null) {
        countMaseratti = 0;
    } else if (countAstonMartin === null) {
        countAstonMartin = 0;
    } else if (countMercedezBenz === null) {
        countMercedezBenz = 0;
    }

    document.getElementById('counterFerrari').textContent = countFerrari;
    document.getElementById('counterMaseratti').textContent = countMaseratti;
    document.getElementById('counterAstonMartin').textContent = countAstonMartin;
    document.getElementById('counterMercedezBenz').textContent = countMercedezBenz;
};