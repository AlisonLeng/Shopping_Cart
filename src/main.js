import './scss/main.scss'
console.log('JS loaded!')

//stepper
const steps = document.querySelectorAll('.step')
const connectLines = document.querySelectorAll('.connect-line')

// button
const controlPanel = document.querySelector('.control-panel')
const btnOutline =  document.querySelector('.btn-outline')
const btnPrimary2 = document.querySelector('.btn-primary-2') //page2
const btnPrimary = document.querySelector('.btn-primary') //page1

// form
const formParts = document.querySelectorAll('.form') 

// shopping cart
const shoppingCartItems = document.querySelector('.shopping-cart-items')



// change stepper & page function 
let step = 0
function changePage(event) {
  event.preventDefault()
  const nowStep = steps[step]
  if (event.target.innerHTML === '下一步 →') {
    const nextStep = steps[step + 1]
    nowStep.classList.remove('active')
    nowStep.classList.add('checked')
    nextStep.classList.add('active')
    btnOutline.classList.remove('d-none')
    connectLines[step].classList.add('bold')
    formParts[step].classList.add('d-none')
    formParts[step + 1].classList.remove('d-none')
    step += 1
  } else if (event.target.innerHTML === '← 上一步') {
    const preStep = steps[step - 1]
    nowStep.classList.remove('active')
    preStep.classList.remove('checked')
    preStep.classList.add('active')
    connectLines[step - 1].classList.remove('bold')
    formParts[step].classList.add('d-none')
    formParts[step - 1].classList.remove('d-none')
    step -= 1
  }

  btnChange()
}

// change button function
function btnChange() {
  if (step === 0) {
  btnOutline.classList.add('d-none')
  // btnPrimary2.classList.add('d-none')
} else {
  btnOutline.classList.remove('d-none')
  btnPrimary2.classList.remove('d-none')
  btnPrimary.classList.add('d-none')
  }

  if (step === 2) {
    btnPrimary2.innerHTML = '送出申請'
  } else {
    btnPrimary2.innerHTML = '下一步 →'
  }
}

// shipping quantity function
function quantityControl(event) {
  if (event.target.matches('.item-minus')) {
    let nowAmount = event.target.nextElementSibling
    let newQuantity = parseInt(nowAmount.innerHTML) - 1
    if (newQuantity >= 0) {
      nowAmount.innerHTML = newQuantity
    } else if (newQuantity < 0) {
      nowAmount.innerHTML = 0
    }
  } else if (event.target.matches('.item-plus')) {
    let nowAmount = event.target.previousElementSibling
    let newQuantity = parseInt(nowAmount.innerHTML) + 1
    nowAmount.innerHTML = newQuantity 
  }
}
// change stepper & page
controlPanel.addEventListener('click', changePage)
shoppingCartItems.addEventListener('click', quantityControl)

