// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

axios({
    url: 'https://lambda-times-backend.herokuapp.com/topics',
    method: 'get'
}).then((response) => {
    console.log(response.data);
}).catch(err => console.error(err));

function Tab() {
    const tabJS = document.createElement('div');
          tabBS = document.createElement('div');
          tabTech = document.createElement('div');
          tabJQ = document.createElement('div');
          tabNode = document.createElement('div');
    
    tabJS.classList.add('tab');
    tabBS.classList.add('tab');
    tabTech.classList.add('tab');
    tabJQ.classList.add('tab');
    tabNode.classList.add('tab');

    var topics = document.querySelector('.topics');

    topics.appendChild(tabJS);
    topics.appendChild(tabBS);
    topics.appendChild(tabTech);
    topics.appendChild(tabJQ);
    topics.appendChild(tabNode);

    tabJS.innerHTML = 'JavaScript';
    tabBS.innerHTML = 'bootstrap';
    tabTech.innerHTML = 'technology';
    tabJQ.innerHTML = 'jquery';
    tabNode.innerHTML = 'node.js';

    return Tab;
}

Tab();