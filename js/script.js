const subhanAllahDisplay = document.getElementById('subhanAllahDisplay');
const subhanAllahIncrimentBtn = document.getElementById('subhanAllahIncrimentBtn');
const subhanAllahDecrimentBtn = document.getElementById('subhanAllahDecrimentBtn');

const alhamdulillahDisplay = document.getElementById('alhamdulillahDisplay');
const alhamdulillahIncrimentBtn = document.getElementById('alhamdulillahIncrimentBtn');
const alhamdulillahDecrimentBtn = document.getElementById('alhamdulillahDecrimentBtn');

const allahAkberDisplay = document.getElementById('allahAkberDisplay');
const allahAkberIncrimentBtn = document.getElementById('allahAkberIncrimentBtn');
const allahAkberDecrimentBtn = document.getElementById('allahAkberDecrimentBtn');

const resetBtn = document.getElementById('resetBtn');


let SubhanAllahinitValue = 0;
let AlhamdulillahInitValue = 0;
let AllahuAkbarInitValue = 0;


/* ======= সুবহানাল্লাহ Increment and Decrement ===== */
subhanAllahIncrimentBtn.addEventListener('click', function(){

    if (SubhanAllahinitValue == 33){
        return alert("'সুবহানাল্লাহ' task completed.");
        
    }

    SubhanAllahinitValue += 1;
    subhanAllahDisplay.innerText = SubhanAllahinitValue;
});

subhanAllahDecrimentBtn.addEventListener('click', function(){

    if (SubhanAllahinitValue == 0){
        return alert("Sorry, You can't add negative value");
        
    }

    SubhanAllahinitValue -= 1;
    subhanAllahDisplay.innerText = SubhanAllahinitValue;
});


/* ======= আলহামদুলিল্লাহ Increment and Decrement ===== */
alhamdulillahIncrimentBtn.addEventListener('click', function(){
    if(AlhamdulillahInitValue == 33){
        return alert("'আলহামদুলিল্লাহ' task completed");
    }

    AlhamdulillahInitValue += 1;
    alhamdulillahDisplay.innerText = AlhamdulillahInitValue;
});

alhamdulillahDecrimentBtn.addEventListener('click', function(){
    if(AlhamdulillahInitValue == 0){
        return alert("'আলহামদুলিল্লাহ' task completed");
    }

    AlhamdulillahInitValue -= 1;
    alhamdulillahDisplay.innerText = AlhamdulillahInitValue;
});






/* ======= আল্লাহু আকবর  Increment and Decrement ===== */
allahAkberIncrimentBtn.addEventListener('click', function(){
    if(AllahuAkbarInitValue == 33){
        return alert("'আল্লাহু আকবর ' task completed");
    }

    AllahuAkbarInitValue += 1;
    allahAkberDisplay.innerText = AllahuAkbarInitValue;
});

allahAkberDecrimentBtn.addEventListener('click', function(){
    if(AllahuAkbarInitValue == 0){
        return alert("'আলহামদুলিল্লাহ' task completed");
    }

    AllahuAkbarInitValue -= 1;
    allahAkberDisplay.innerText = AllahuAkbarInitValue;
});

/* ======= আল্লাহু আকবর  Increment and Decrement ===== */




/* ======= Reset All Tasbih ===== */
resetBtn.addEventListener('click', function(){
    subhanAllahDisplay.innerText = 0;
    alhamdulillahDisplay.innerText = 0;
    allahAkberDisplay.innerText = 0;

    SubhanAllahinitValue = 0;
    AlhamdulillahInitValue = 0;
    AllahuAkbarInitValue = 0;
})