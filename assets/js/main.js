// إظهار المينيو
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close');

// عند الضغط على زر الفتح
if(navToggle){
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show');
    });
}

// عند الضغط على زر الإغلاق
if(navClose){
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show');
    });
}

// عند الضغط على أي رابط داخل المينيو
const navLink = document.querySelectorAll('.nav__link');

function linkAction(){
    navMenu.classList.remove('show');
}

navLink.forEach(n => n.addEventListener('click', ()=>{linkAction()}));


/*=============== CALCULATE JS ===============*/
const calculateForm = document.getElementById('calculate-form'),
    calculateCm = document.getElementById('calculate-cm'),
    calculateKg = document.getElementById('calculate-kg'),
    calculateMessage = document.getElementById('calculate-message');

const calculateBmi = (e) => {
    e.preventDefault()

    //check if the fields have a value
    if (calculateCm.value === '' || calculateKg.value === '') {
        //add and remove color
        calculateMessage.classList.remove('color-green')
        calculateMessage.classList.add('color-red')
            //show message
        calculateMessage.textContent = 'fill in the height and weight'

        //remove message three seconds
        setTimeout(() => {
            calculateMessage.textContent = ''
        }, 3000)
    } 
    
    else {
        //BMI Formula
        const cm = calculateCm.value / 100,
            kg = calculateKg.value,
            bmi = Math.round(kg / (cm * cm))

        //show your health status
        if (bmi < 18.5) {
            //Add color and display message
            calculateMessage.classList.add('color-red')
            calculateMessage.textContent = `Your BMI is ${bmi} and you are skinny 😞`
        } else if (bmi < 25) {
            calculateMessage.classList.add('color-green')
            calculateMessage.textContent = `Your BMI is ${bmi} and you are healthy 🥳`
        } else {
            calculateMessage.classList.add('color-red')
            calculateMessage.textContent = `Your BMI is ${bmi} and you are overweight 😞`
        }

        //To clear the input field
        calculateCm.value = ''
        calculateKg.value = ''

        //Remove message four seconds
        setTimeout(() => {
            calculateMessage.textContent = ''
        }, 4000)

    }
}

calculateForm.addEventListener('submit', calculateBmi)


/*=============== EMAIL JS ===============*/