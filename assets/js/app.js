const cl = console.log;

const box = document.getElementById('box');
const btnInfo = document.getElementById('btnInfo');
const btnshow = document.getElementById('btnshow');
const btnhide = document.getElementById('btnhide');
const btntoggle = document.getElementById('btntoggle');
const custombtn = document.getElementById('custombtn');
const skill = document.getElementById('skill');

box.style.height = '400px';
box.style.width = '400px';
box.style.background = 'blue';





const onshowhdl = () => {
    box.classList.remove('d-none')
}

const onhidehdl = ()=> {
    box.classList.add('d-none')
}

const ontogglehdl = () => {
    box.classList.toggle('d-none')
}

const oncustomhdl = () => {
    let result = box.className;
    if(result.includes('d-none')){
        box.classList.remove('d-none');
        custombtn.innerText = 'Hide'
    } else {
        box.classList.add('d-none')
        custombtn.innerHTML = 'Show'
    }
}



btnInfo.addEventListener('dblclick', function(){
    box.classList.add('d-none')
});

btnshow.addEventListener('click', onshowhdl)

btnhide.addEventListener('click', onhidehdl)

btntoggle.addEventListener('click', ontogglehdl)

custombtn.addEventListener('click',oncustomhdl)






// ====================================================================//
// Mouse Event



const box1 = document.getElementById('box1')


const onmouseenterhdl = (eve)=>{
    eve.target.style.backgroundColor = 'blueviolet'
    eve.target.style.borderRadius = '35%'
}


const onmouseouthdl = (eve) => {
    eve.target.style.backgroundColor = 'green'
    eve.target.style.borderRadius = '50%'
}

const onmouseleavethdl = (eve) => {
    eve.target.style.backgroundColor = 'brown'
    eve.target.style.borderRadius = '50%'
}


box1.addEventListener('mouseenter', onmouseenterhdl)
box1.addEventListener('mouseout', onmouseouthdl)
box1.addEventListener('mouseleave', onmouseleavethdl)



// ============ img change when mouse hover =================//



const onenterhdl = (eve) => {
    eve.target.setAttribute('src', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbUerTFrhm17fjsyCKgoDgJCbFXYKK7A1G_-gUx1VteA&s=10')
}

const onleavehdl = (eve) => {
    eve.target.setAttribute('src',"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZtoOyvfTJtuMCJDSOTdBKSqM2am8gH9dednH14pWUaQ&s=10" )
}


skill.addEventListener('mouseenter', onenterhdl)
skill.addEventListener('mouseleave', onleavehdl)



// ================================ mouse move ///////


const box2 = document.getElementById('box2')


const onmovehdl = (eve) => {
    // cl(eve)
    // cl(eve.target)
    // cl(eve.clientX)
    // cl(eve.clientY)
    // cl(eve.screenX)
    // cl(eve.screenY)
    // cl(eve.offsetX)
    // cl(eve.offsetY)

    eve.target.style.backgroundColor= `rgb(255, ${eve.offsetX}, ${eve.offsetY})`

}




box2.addEventListener('mousemove', onmovehdl)



//////// form event ====================///

const fnameInfo = document.getElementById('fnameInfo')
const emailInfo = document.getElementById('emailInfo')



const onfocushdl = (eve) => {
    eve.target.style.border = '2px solid green'
}

const onblurhdl = (e) => {
    e.target.style.border = '1px solid #ced4da'
}


const onkeydownhdl = (eve) => {
    eve.target.style.backgroundColor = 'pink'
}


const onkeyuphdl = (eve) => {
    eve.target.style.backgroundColor = 'transparent'
}


const onkeyinput = (eve) => {
    eve.target.style.backgroundColor = 'transparent'
}

fnameInfo.addEventListener('focus', onfocushdl)
fnameInfo.addEventListener('blur',onblurhdl)
emailInfo.addEventListener('keydown', onkeydownhdl)
emailInfo.addEventListener('keyup', onkeyuphdl)
emailInfo.addEventListener('input', onkeyinput)





// ============= change event ==================//

const body = document.getElementById('body')
const selectedCl = document.getElementById('selectedCl')


const onchangehdl = (eve) =>{
    let result = eve.target.value
    body.style.backgroundColor = result
}



selectedCl.addEventListener('change', onchangehdl)