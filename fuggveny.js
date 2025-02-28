import { Szamok } from "./tomb.js";

const kifejezesTagok = []

const szamKi = document.querySelectorAll('#szam')
const kifejezesElem = document.querySelector('.kifejezes')
const eredmenyElem = document.querySelector('.eredmeny')


export const szamKiir = () => {
    for (let i = 0; i < szamKi.length; i++) {
        szamKi[i].addEventListener('click', () => {
            kifejezesElem.append(i)
        })
    }
}

export const muvJelKiir = () => {
    
    document.querySelector('#osszeadas').addEventListener('click', () => {
        if (kifejezesElem.innerHTML.length === 0) {
            alert('Előszőr számot adj meg.')
        } else {
            kifejezesElem.append('+')
        }
    })
    document.querySelector('#kivonas').addEventListener('click', () => {
        if (kifejezesElem.innerHTML.length === 0) {
            alert('Előszőr számot adj meg.')
        } else {
            kifejezesElem.append('-')
        }
    })
    document.querySelector('#szorzas').addEventListener('click', () => {
        if (kifejezesElem.innerHTML.length === 0) {
            alert('Előszőr számot adj meg.')
        } else {
            kifejezesElem.append('*')
        }
    })
    document.querySelector('#osztas').addEventListener('click', () => {
        if (kifejezesElem.innerHTML.length === 0) {
            alert('Előszőr számot adj meg.')
        } else {
            kifejezesElem.append('/')
        }
    })
    document.querySelector('#tiz').addEventListener('click', () => {
        if (kifejezesElem.innerHTML.length === 0) {
            alert('Előszőr számot adj meg.')
        } else {
            kifejezesElem.append('.')
        }
    })
    document.querySelector('#torles').addEventListener('click', () => {
        kifejezesElem.innerHTML = ''
        eredmenyElem.innerHTML = ''
        kifejezesTagok.splice(-1)
    })
    document.querySelector('#egyenlo').addEventListener('click', () => {
        switch(true) {
            case kifejezesElem.innerHTML.includes('+'):
                let idgElemek = kifejezesElem.textContent.split('+')
                kifejezesTagok.push(idgElemek.map(Number))
                console.log(kifejezesTagok)
                eredmenyElem.append(`= ${osszeadas()}`)
                break;
            case kifejezesElem.innerHTML.includes('-'):
                let idgElemek2 = kifejezesElem.textContent.split('-')
                kifejezesTagok.push(idgElemek2.map(Number))
                eredmenyElem.append(`= ${kivonas()}`)
                break;
            case kifejezesElem.innerHTML.includes('*'):
                let idgElemek3 = kifejezesElem.textContent.split('*')
                kifejezesTagok.push(idgElemek3.map(Number))
                eredmenyElem.append(`= ${szorzas()}`)
                break;
            case kifejezesElem.innerHTML.includes('/'):
                kifejezesTagok.push(kifejezesElem.textContent.split('/'))
                console.log(kifejezesTagok)
                break;
        }
    })
}

const osszeadas = () => {
    let sum = kifejezesTagok[0][0]
    for (let i = 1; i < kifejezesTagok[0].length; i++) {
        sum += kifejezesTagok[0][i]
    }
    return sum
}

const kivonas = () => {
    let sum = kifejezesTagok[0][0]
    for (let i = 1; i < kifejezesTagok[0].length; i++) {
        sum -= kifejezesTagok[0][i]
    }
    return sum
}

const szorzas = () => {
    let sum = kifejezesTagok[0][0]
    for (let i = 1; i < kifejezesTagok[0].length; i++) {
        sum = sum * kifejezesTagok[0][i]
    }
    return sum
}