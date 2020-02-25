// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

function Header() {
    const headerContainer = document.createElement('div');
          date = document.createElement('span');
          headerTxt = document.createElement('h1');
          temp = document.createElement('span');

    headerContainer.classList.add('header');
    date.classList.add('date');
    temp.classList.add('temp');

    date.textContent = '2019 28 SMARCH';
    headerTxt.textContent = 'Lambda Times';
    temp.textContent = '98°';

    var headerMain = document.querySelector('.header-container');

    headerMain.appendChild(headerContainer);
    headerContainer.appendChild(date);
    headerContainer.appendChild(headerTxt);
    headerContainer.appendChild(temp);

    return Header;
}

Header();




