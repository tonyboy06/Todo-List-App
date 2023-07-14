let myLeads = []
const btnEl = document.getElementById('btn-el')
const inputEl = document.getElementById('input-el')
const ulEl = document.getElementById('ul-el')
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))
const date = new Date()
let month = date.getMonth() + 1
let day = date.getDate()
const checkBox = document.getElementById('check')
const text = document.getElementById('liText')

if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage
    render(myLeads)
}

function checked() {
    if(checkBox.checked == true) {
        text.textContent =  `<strike>${text}</strike>`
    }
}

function render(leads) {
    let listItems = ''
    for (let i = 0; i < leads.length; i++) {
        listItems += `
            <li>
                <input type="checkbox" id="check">
                <p id='liText'> ${leads[i]} </p>
                <span class='date'> ${getMonth(month)} ${day} </span>
                <button id="edit"> edit </button>
                <button id="del"> delete </button>
            </li>
        `
    }
    ulEl.innerHTML = listItems
}

btnEl.addEventListener('click', function() {
    myLeads.push(inputEl.value)
    inputEl.value = ''
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    render(myLeads)
})



function getMonth(monthNumber) {
    date.setMonth(monthNumber - 1)

    return date.toLocaleDateString('en-US', {month: 'long'})
}

// localStorage.clear()
