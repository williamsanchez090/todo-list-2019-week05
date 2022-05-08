document.querySelector('#button').addEventListener ('click', list)

// function for toggling linethrough
document.querySelector('#list').addEventListener ('click', line)

// document.querySelector('#clearLines').addEventListener ('click', checkForLine)

function list(){
// console logs the value inputed
    let uno=document.querySelector('#uno').value
    console.log(uno)
// creates an element (li)
    let li=document.createElement('li')
    // create a textnode that goes in li
    let text=document.createTextNode(uno)
// next step add text into li using append child
// we are throwing input (that is in the variable text) inside of this li that was previously empty
    li.appendChild(text)
    // throw the value of li inside of ul (throw invisible newly existing li inside of pre-existing ul)
    let ul=document.querySelector('#list')
    ul.appendChild(li)
    // toggles on and off
}
    function line(click){
       click.target.classList.toggle('hidden') 
    
}
// removes items that have class of hidden

// function checkForLine(click){
// 	if(click.target.classList.contains('hidden')){
//     document.querySelector('li').classList.toggle('gone')}
    
// }