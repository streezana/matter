function shuffle() {
    let array = ["apple", "avocado", "lemon", "peach", "pear", "orange"];
    var currentIndex = array.length, temporaryValue, randomIndex;
  
    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
      }
      array.shift();
      array.pop();
    return array;
  }
  let arrayR = shuffle();
  console.log(arrayR);

    const selected = document.querySelectorAll('.select-box .selected');
    const optionList = document.querySelectorAll('.select-box .options-container .option');
    const selAttr = document.querySelector('.select-box .selected').getAttribute('src');
    const but1 = document.getElementById("button1");
    const but2 = document.getElementById("button2");
    const tab = document.querySelector('.tab');
    

    for (let k=0; k<selected.length; k++) { 
        selected[k].addEventListener('click', () => {
            selected[k].parentElement.children[0].classList.toggle('active');
    });
    for (let i=0; i<optionList.length; i++) {
        optionList[i].addEventListener('click', () => {
            optionList[i].parentElement.parentElement.children[1].innerHTML = optionList[i].querySelector('label').innerHTML;
            optionList[i].parentElement.parentElement.children[1].setAttribute('value', optionList[i].getAttribute('value'));
            optionList[i].parentElement.classList.remove('active');
        });
    }
}
const fourth = document.querySelector('.fourth');

fourth.onclick = changeOption;

function changeOption() {
    this.parentElement.classList.remove('fourth');
    this.parentElement.parentElement.parentElement.parentElement.classList.add('disabledbutton');
    let newTab = this.parentElement.parentElement.parentElement.parentElement.parentElement.cloneNode(true);
    document.querySelector('.container').insertBefore(newTab, this.parentElement.parentElement.parentElement.parentElement.parentElement);
    this.parentElement.parentElement.parentElement.parentElement.classList.remove('disabledbutton');

    let allSel = this.parentElement.parentElement.parentElement.querySelectorAll('.select-box .options-container');
    let a = 0;
    let b = 0;
       for (let i=0; i<allSel.length; i++) { 
    
    if (arrayR.includes(allSel[i].parentElement.children[1].getAttribute('value'))) {
        b++; }
        if (allSel[i].parentElement.children[1].getAttribute('value') == arrayR[i]) {
            a++;
           }
        allSel[i].parentElement.children[1].children[0].setAttribute('src','img/apple2.png');
       }
       if (a==4 && b==4) {  
        but1.classList.add('anim_but1');
        but2.classList.add('anim_but2');
        tab.classList.add('disabledbutton');
    } 
    let newElement = document.createElement("div");
    newElement.textContent = 'Score:  ' +a+' / '+b;
    document.querySelector('.container').insertBefore(newElement, this.parentElement.parentElement.parentElement.parentElement.parentElement.previousSibling);
    }

but1.onclick = function rel() {
    window.location.reload();
  }