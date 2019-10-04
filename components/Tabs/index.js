// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>
let addTopic = document.querySelector('.topics')

axios.get(`https://lambda-times-backend.herokuapp.com/topics`)
    .then(response => {
        // console.log(`pullData`, response.data)
        let data = response.data.topics
        console.log(data)
        data.forEach(item => {
        addTopic.appendChild(createTab(item))
    
        })
    })
    .catch(err => {
        console.log(`nothing to read`, err)
    })
    
    function createTab (prop) {
        let tabs = document.createElement('div')
        tabs.classList.add('tab')
        tabs.textContent = prop

        return tabs
    }
    