// selectors

// -----modal-----
let modalUserInfoBtnElement = $('.modal-header__btn')
let modalOpenButtonElement = $('.contacts-item__settings-btn')
let modalElement = $('.background-modal')
let modalCloseElement = $('.close-button')
let settingsModalBtnElement = $('.settingsModalBtn')
let settingModalElement = $('.background-settings-modal')
let settingModalCloseBtnElement = $('.settings-modal__header__btn__img')
let scaleSettingsElement = $('.scale-settings-item__subtitle')
// -----contacts list-----

let chatAbbosElement = $('.chat_Abbos')
let chatFazliddinElemnt = $('.chat_Fazliddin')
let chatMaxmudElement = $('.chat_Maxmud')

let chatAbbosBtnElement = $('.contact-abbos')
let chatFazliddinBtnElement = $('.contact-fazliddin')
let chatMaxmudBtnElement = $('.contact-maxmud')

let chatListAbbosElement = $('.chat-list-abbos')
let chatListFazliddinElement = $('.chat-list-fazliddin')
let chatListMaxmudElement = $('.chat-list-maxmud')

let contactsItemAbbbosElement = $('.item-abbos')
let contactsItemFazliddinElement = $('.item-fazliddin')
let contactsItemMaxmudElement = $('.item-maxmud')

let intAbbosElement = $('.int-abbos')
let btnAbbosElement = $('.btn-abbos')
let listAbbosElement = $('.chat-list-abbos')

let intFazliddinElement = $('.int-fazliddin')
let btnFazliddinElement = $('.btn-fazliddin')
let listFazliddinElement = $('.chat-list-fazliddin')

let intMaxmudElement = $('.int-maxmud')
let btnMaxmudElement = $('.btn-maxmud')
let listMaxmudElement = $('.chat-list-maxmud')

let abbosInfoBtnModalElement = $('.abbos-info-modal')
let fazliddinInfoBtnModalElement = $('.fazliddin-info-modal')
let maxmudInfoBtnModalElement = $('.maxmud-info-modal')

let abbosInfoModalElement = $('.abbos-modal-background') 
let fazliddinInfoModalElement = $('.fazliddin-modal-background') 
let maxmudInfoModalElement = $('.maxmud-modal-background')

let abbosClose = $('.close-abbos')
let fazliddinClose = $('.close-fazliddin')
let maxmudClose = $('.close-maxmud')

// --------------------------------------------------------------------------
abbosClose.addEventListener('click', event =>{
    event.preventDefault()
    abbosInfoModalElement.style.display = 'none'
})
fazliddinClose.addEventListener('click', event =>{
    event.preventDefault()
    fazliddinInfoModalElement.style.display = 'none'
})
maxmudClose.addEventListener('click', event =>{
    event.preventDefault()
    maxmudInfoModalElement.style.display = 'none'
})
window.addEventListener('click', event =>{
    event.preventDefault()
    if (event.target == abbosInfoModalElement) {
        abbosInfoModalElement.style.display =  'none'
    }
})
window.addEventListener('click', event =>{
    event.preventDefault()
    if (event.target == fazliddinInfoModalElement) {
        fazliddinInfoModalElement.style.display =  'none'
    }
})
window.addEventListener('click', event =>{
    event.preventDefault()
    if (event.target == maxmudInfoModalElement) {
        maxmudInfoModalElement.style.display =  'none'
    }
})
abbosInfoBtnModalElement.addEventListener('click', event =>{
    abbosInfoModalElement.style.display = 'block'
    dazliddinInfoModalElement.style.display = 'none'
    maxmudInfoModalElement.style.display = 'none'
})
fazliddinInfoBtnModalElement.addEventListener('click', event =>{
    abbosInfoModalElement.style.display = 'none'
    dazliddinInfoModalElement.style.display = 'block'
    maxmudInfoModalElement.style.display = 'none'
})
maxmudInfoBtnModalElement.addEventListener('click', event =>{
    abbosInfoModalElement.style.display = 'none'
    dazliddinInfoModalElement.style.display = 'none'
    maxmudInfoModalElement.style.display = 'block'
})
btnMaxmudElement.addEventListener('click', event =>{
    let liMaxmudElement = document.createElement('li')
    liMaxmudElement.classList.add('chat-item')
    liMaxmudElement.textContent = intMaxmudElement.value
    listMaxmudElement.appendChild(liMaxmudElement)
    intMaxmudElement.value = ""
})

btnFazliddinElement.addEventListener('click', event =>{
    let liFazliddinElement = document.createElement('li')
    liFazliddinElement.classList.add('chat-item')
    liFazliddinElement.textContent = intFazliddinElement.value
    listFazliddinElement.appendChild(liFazliddinElement)
    intFazliddinElement.value = ""
})

btnAbbosElement.addEventListener('click', event =>{
    let liAbbosElement = document.createElement('li')
    liAbbosElement.classList.add('chat-item')
    liAbbosElement.textContent = intAbbosElement.value
    listAbbosElement.appendChild(liAbbosElement)
    intAbbosElement.value = ""
})

chatAbbosBtnElement.addEventListener('click', event =>{
    event.preventDefault()
    chatAbbosElement.style.display = 'block';
    chatFazliddinElemnt.style.display = 'none';
    chatMaxmudElement.style.display = 'none';

    contactsItemAbbbosElement.style.backgroundColor = '#2B5278'
    contactsItemFazliddinElement.style.backgroundColor = '#182533'
    contactsItemMaxmudElement.style.backgroundColor = '#182533'
})
chatFazliddinBtnElement.addEventListener('click', event =>{
    event.preventDefault()
    chatAbbosElement.style.display = 'none';
    chatFazliddinElemnt.style.display = 'block';
    chatMaxmudElement.style.display = 'none';

    contactsItemAbbbosElement.style.backgroundColor = '#182533'
    contactsItemFazliddinElement.style.backgroundColor = '#2B5278'
    contactsItemMaxmudElement.style.backgroundColor = '#182533'
})
chatMaxmudBtnElement.addEventListener('click', event =>{
    event.preventDefault()
    chatAbbosElement.style.display = 'none';
    chatFazliddinElemnt.style.display = 'none';
    chatMaxmudElement.style.display = 'block';

    contactsItemAbbbosElement.style.backgroundColor = '#182533'
    contactsItemFazliddinElement.style.backgroundColor = '#182533'
    contactsItemMaxmudElement.style.backgroundColor = '#2B5278'
})
modalOpenButtonElement.addEventListener('click', event =>{
    event.preventDefault()
    modalElement.style.display =  'block'
})
window.addEventListener('click', event =>{
    event.preventDefault()
    if (event.target == modalElement) {
        modalElement.style.display =  'none'
    }
})
settingsModalBtnElement.addEventListener('click', event =>{
    event.preventDefault()
    modalElement.style.display =  'none'
    settingModalElement.style.display = 'block'
})
window.addEventListener('click', event =>{
    event.preventDefault()
    if (event.target == settingModalElement) {
        settingModalElement.style.display = 'none'
    }
})
settingModalCloseBtnElement.addEventListener('click', event =>{
    event.preventDefault()
    settingModalElement.style.display = 'none'
})
scaleSettingsElement.addEventListener('click', event =>{
    event.preventDefault()
    scaleSettingsElement.classList.add('.active')
})
// --------------------------------------------------------------------------

// functions

function $ (element){
	return document.querySelector(element)
}

// --------------------------------------------------------------------------