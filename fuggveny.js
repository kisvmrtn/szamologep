

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

export const muvJelKiir = (elemID, muvjel) => {
    document.querySelector(elemID).addEventListener('click', () => {
        if (kifejezesElem.innerHTML.length === 0) {
            alert('Előszőr számot adj meg.')
        } else {
            kifejezesElem.append(muvjel)
        }
    })
}
export const adatTorles = () => {
    document.querySelector('#torles').addEventListener('click', () => {
        kifejezesElem.innerHTML = ''
        eredmenyElem.innerHTML = ''
        kifejezesTagok.splice(-1)
    })
}

export const szamolasKiiras = () => {
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
                let idgElemek4 = kifejezesElem.textContent.split('/')
                kifejezesTagok.push(idgElemek4.map(Number))
                eredmenyElem.append(`= ${osztas()}`)
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

const szorzas = (jel) => {
    let sum = kifejezesTagok[0][0]
    for (let i = 1; i < kifejezesTagok[0].length; i++) {
        sum = sum * kifejezesTagok[0][i]
    }
    return sum
}

const osztas = () => {
    let sum = kifejezesTagok[0][0]
    for (let i = 1; i < kifejezesTagok[0].length; i++) {
        sum = sum / kifejezesTagok[0][i]
    }
    return sum
}