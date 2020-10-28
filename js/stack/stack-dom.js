const stackList = document.getElementById('stack-list');
const stackInput = document.getElementById('stack-input');
const container = document.getElementById('container');
const warningTopStack = document.querySelector('#stack-container .warning-top');
const warningBottomStack = document.querySelector('#stack-container .warning-bottom');
const addStackBtn = document.getElementById('add-stack');
const takeStackBtn = document.getElementById('take-stack');

const newStack = new StackDataStructure();

const clearStackInput = () => {
  // ... your code goes here
  stackInput.value = ""
};

const renderListStack = () => {
  // ... your code goes here

  for (let i =0; i < newStack.MAX_SIZE; i++){
    stackList.innerHTML += "<li class = 'inactive'></li>" 
  
  }

};

renderListStack();

const generateWarningStack = type => {
  if (type === 'underflow') {
    // ... your code goes here
    warningBottomStack.innerHTML = 'underflow'
    warningBottomStack.style.display = "none"
  } else if (type === 'overflow') {
    // ... your code goes here
    warningBottomStack.innerHTML = 'overflow'
    warningBottomStack.style.display = "none"
  }
};

const addToStack = () => {
  // ... your code goes here
  if (newStack.canPush)
};

const removeFromStack = () => {
  // ... your code goes here
};

addStackBtn.addEventListener('click', addToStack);
takeStackBtn.addEventListener('click', removeFromStack);
