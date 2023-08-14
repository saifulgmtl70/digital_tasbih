const subhanAllahDisplay = document.getElementById('subhanAllahDisplay');
const subhanAllahIncrimentBtn = document.getElementById('subhanAllahIncrimentBtn');
const subhanAllahDecrimentBtn = document.getElementById('subhanAllahDecrimentBtn');

const alhamdulillahDisplay = document.getElementById('alhamdulillahDisplay');
const alhamdulillahIncrimentBtn = document.getElementById('alhamdulillahIncrimentBtn');
const alhamdulillahDecrimentBtn = document.getElementById('alhamdulillahDecrimentBtn');

const allahAkberDisplay = document.getElementById('allahAkberDisplay');
const allahAkberIncrimentBtn = document.getElementById('allahAkberIncrimentBtn');
const allahAkberDecrimentBtn = document.getElementById('allahAkberDecrimentBtn');


const laIlahaDisplay = document.getElementById('laIlahaDisplay');
const laIlahaIncrement = document.getElementById('laIlahaIncrement');
const laIlahaDecrement = document.getElementById('laIlahaDecrement');


const astagFirullahDisplay = document.getElementById('astagFirullahDisplay');
const astagFirullahIncrement = document.getElementById('astagFirullahIncrement');
const astagFirullahDecrement = document.getElementById('astagFirullahDecrement');


const darudDisplay = document.getElementById('darudDisplay');
const darudIncrement = document.getElementById('darudIncrement');
const darudDecrement = document.getElementById('darudDecrement');



const resetBtn = document.getElementById('resetBtn');


let SubhanAllahinitValue = 0;
let AlhamdulillahInitValue = 0;
let AllahuAkbarInitValue = 0;
let LaIlahaInitValue = 0;
let AstagFirullahInitValue = 0;
let DarudInitValue = 0;


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
        return alert("Sorry, You can't add negative value");
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
        return alert("Sorry, You can't add negative value");
    }

    AllahuAkbarInitValue -= 1;
    allahAkberDisplay.innerText = AllahuAkbarInitValue;
});





/* ======= লা ইলাহা ইল্লাহ  Increment and Decrement ===== */
laIlahaIncrement.addEventListener('click', function(){
    if(LaIlahaInitValue == 33){
        return alert("'লা ইলাহা ইল্লাহ ' task completed");
    }

    LaIlahaInitValue += 1;
    laIlahaDisplay.innerText = LaIlahaInitValue;
});

laIlahaDecrement.addEventListener('click', function(){
    if(LaIlahaInitValue == 0){
        return alert("Sorry, You can't add negative value");
    }

    LaIlahaInitValue -= 1;
    laIlahaDisplay.innerText = LaIlahaInitValue;
});




/* ======= আস্তাগফিরুল্লাহ  Increment and Decrement ===== */
astagFirullahIncrement.addEventListener('click', function(){
    if(AstagFirullahInitValue == 33){
        return alert("'আস্তাগফিরুল্লাহ ' task completed");
    }

    AstagFirullahInitValue += 1;
    astagFirullahDisplay.innerText = AstagFirullahInitValue;
});

astagFirullahDecrement.addEventListener('click', function(){
    if(AstagFirullahInitValue == 0){
        return alert("Sorry, You can't add negative value");
    }

    AstagFirullahInitValue -= 1;
    astagFirullahDisplay.innerText = AstagFirullahInitValue;
});



/* ======= সাল্লাল্লাহু আলাইহী ওয়াসাল্লাম  Increment and Decrement ===== */
darudIncrement.addEventListener('click', function(){
    if(DarudInitValue == 33){
        return alert("'সাল্লাল্লাহু আলাইহী ওয়াসাল্লাম ' task completed");
    }

    DarudInitValue += 1;
    darudDisplay.innerText = DarudInitValue;
});

darudDecrement.addEventListener('click', function(){
    if(DarudInitValue == 0){
        return alert("Sorry, You can't add negative value");
    }

    DarudInitValue -= 1;
    darudDisplay.innerText = DarudInitValue;
});




/* ======= Reset All Tasbih ===== */
resetBtn.addEventListener('click', function(){
    subhanAllahDisplay.innerText = 0;
    alhamdulillahDisplay.innerText = 0;
    allahAkberDisplay.innerText = 0;
    laIlahaDisplay.innerText = 0;
    astagFirullahDisplay.innerText = 0;
    darudDisplay.innerText = 0;


    SubhanAllahinitValue = 0;
    AlhamdulillahInitValue = 0;
    AllahuAkbarInitValue = 0;
    LaIlahaInitValue = 0;
    AstagFirullahInitValue = 0;
    DarudInitValue = 0;
})