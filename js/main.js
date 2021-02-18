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

// --------------------------------------------------------------------------
chatAbbosBtnElement.addEventListener('click', event =>{
    event.preventDefault()
    chatAbbosElement.style.display = 'block';
    chatFazliddinElemnt.style.display = 'none';
    chatMaxmudElement.style.display = 'none';
})
chatFazliddinBtnElement.addEventListener('click', event =>{
    event.preventDefault()
    chatAbbosElement.style.display = 'none';
    chatFazliddinElemnt.style.display = 'block';
    chatMaxmudElement.style.display = 'none';
})
chatMaxmudBtnElement.addEventListener('click', event =>{
    event.preventDefault()
    chatAbbosElement.style.display = 'none';
    chatFazliddinElemnt.style.display = 'none';
    chatMaxmudElement.style.display = 'block';
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