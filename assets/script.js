const searchEl = document.getElementById('formSubmit')
const searchSection = document.getElementById('searchSection')
const todayWeatherSection =  document.getElementById('todayWeatherData')
const futureWeatherSection =  document.getElementById('futureWeatherData')

function handleClick(event) {
  if (event.target.tagName === "LI") {
    const clickedText = event.target.textContent
      getWeather(clickedText)
      getFutureWeather(clickedText)

  }
}


// // WEATHER API
function getWeather(city) {
    fetch("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=9ee9271b9afcecf4a8ec627a8439aa7b&units=imperial")
        .then(function (response) {
          return response.json();
        }).then (function(data){
          //TODO: go through data pull relevant info
          while (todayWeatherSection.firstChild) {
            todayWeatherSection.removeChild(todayWeatherSection.firstChild)
          }
          const createCard = document.createElement('div')
          const createHeader = document.createElement('h2')
          const createP1 = document.createElement('p')
          const createP2 = document.createElement('p')
          const createP3 = document.createElement('p')
          const createP4 = document.createElement('p')
          createCard.classList.add('mainCard')
          createHeader.textContent = city
          createP1.textContent = data.weather[0].main
          createP2.textContent = "temp: " + data.main.temp + " °F"
          createP3.textContent = "wind: " + data.wind.speed + " MPH"
          createP4.textContent = "humidity: " + data.main.humidity + " %"
          createCard.append(createHeader)
          createCard.append(createP1)
          createCard.append(createP2)
          createCard.append(createP3)
          createCard.append(createP4)
          todayWeatherSection.append(createCard)
        })
    }

function getFutureWeather(city) {
    fetch("https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&appid=9ee9271b9afcecf4a8ec627a8439aa7b&units=imperial")
        .then(function (response) {
            return response.json();
        }).then (function(data){
          //clears the page when search button is clicked
          while (futureWeatherSection.firstChild) {
            futureWeatherSection.removeChild(futureWeatherSection.firstChild)
          }
          // DAY 1
            const createCard = document.createElement('div')
            const createHeader = document.createElement('h2')
            const createP1 = document.createElement('p')
            const createP2 = document.createElement('p')
            const createP3 = document.createElement('p')
            const createP4 = document.createElement('p')
            createCard.classList.add('card')
            createHeader.textContent = data.list[1].dt_txt
            createP1.textContent = data.list[1].weather[0].main
            createP2.textContent = "temp: " + data.list[1].main.temp + " °F"
            createP3.textContent = "wind: " + data.list[1].wind.speed + " MPH"
            createP4.textContent = "humidity: " + data.list[1].main.humidity + " %"
            createCard.append(createHeader)
            createCard.append(createP1)
            createCard.append(createP2)
            createCard.append(createP3)
            createCard.append(createP4)
            futureWeatherSection.append(createCard)
            // DAY 2
            const createCard1 = document.createElement('div')
            const createHeader1 = document.createElement('h2')
            const createP5 = document.createElement('p')
            const createP6 = document.createElement('p')
            const createP7 = document.createElement('p')
            const createP8 = document.createElement('p')
            createCard1.classList.add('card')
            createHeader1.textContent = data.list[9].dt_txt
            createP5.textContent = data.list[9].weather[0].main
            createP6.textContent = "temp: " + data.list[9].main.temp + " °F"
            createP7.textContent = "wind: " + data.list[9].wind.speed + " MPH"
            createP8.textContent = "humidity: " + data.list[9].main.humidity + " %"
            createCard1.append(createHeader1)
            createCard1.append(createP5)
            createCard1.append(createP6)
            createCard1.append(createP7)
            createCard1.append(createP8)
            futureWeatherSection.append(createCard1)
            // DAY 3
            const createCard2 = document.createElement('div')
            const createHeader2 = document.createElement('h2')
            const createP9 = document.createElement('p')
            const createP10 = document.createElement('p')
            const createP11 = document.createElement('p')
            const createP12 = document.createElement('p')
            createCard2.classList.add('card')
            createHeader2.textContent = data.list[17].dt_txt
            createP9.textContent = data.list[17].weather[0].main
            createP10.textContent = "temp: " + data.list[17].main.temp + " °F"
            createP11.textContent = "wind: " + data.list[17].wind.speed + " MPH"
            createP12.textContent = "humidity: " + data.list[17].main.humidity + " %"
            createCard2.append(createHeader2)
            createCard2.append(createP9)
            createCard2.append(createP10)
            createCard2.append(createP11)
            createCard2.append(createP12)
            futureWeatherSection.append(createCard2)
            // DAY 4
            const createCard3 = document.createElement('div')
            const createHeader3 = document.createElement('h2')
            const createP13 = document.createElement('p')
            const createP14 = document.createElement('p')
            const createP15 = document.createElement('p')
            const createP16 = document.createElement('p')
            createCard3.classList.add('card')
            createHeader3.textContent = data.list[25].dt_txt
            createP13.textContent = data.list[25].weather[0].main
            createP14.textContent = "temp: " + data.list[25].main.temp + " °F"
            createP15.textContent = "wind: " + data.list[25].wind.speed + " MPH"
            createP16.textContent = "humidity: " + data.list[25].main.humidity + " %"
            createCard3.append(createHeader3)
            createCard3.append(createP13)
            createCard3.append(createP14)
            createCard3.append(createP15)
            createCard3.append(createP16)
            futureWeatherSection.append(createCard3)
            // DAY 5
            const createCard4 = document.createElement('div')
            const createHeader4 = document.createElement('h2')
            const createP17 = document.createElement('p')
            const createP18 = document.createElement('p')
            const createP19 = document.createElement('p')
            const createP20 = document.createElement('p')
            createCard4.classList.add('card')
            createHeader4.textContent = data.list[33].dt_txt
            createP17.textContent = data.list[33].weather[0].main
            createP18.textContent = "temp: " + data.list[33].main.temp + " °F"
            createP19.textContent = "wind: " + data.list[33].wind.speed + " MPH"
            createP20.textContent = "humidity: " + data.list[33].main.humidity + " %"
            createCard4.append(createHeader4)
            createCard4.append(createP17)
            createCard4.append(createP18)
            createCard4.append(createP19)
            createCard4.append(createP20)
            futureWeatherSection.append(createCard4)
            
          })
        }
        
// Function to save search to local storage
function saveSearch(city) {
  let searches = JSON.parse(localStorage.getItem('weatherSearches')) || [];
  searches.push(city);
  localStorage.setItem('weatherSearches', JSON.stringify(searches));
}

function loadPreviousSearches() {
  const searches = JSON.parse(localStorage.getItem('weatherSearches')) || [];
  searches.forEach(city => {
    const createBtn = document.createElement('li')
    createBtn.textContent = city
    createBtn.id = 'pastSearches'
    searchSection.append(createBtn);
  });
}

function searchFunction(event) {
  event.preventDefault()
  //clears the page when search button is clicked
  while (todayWeatherSection.firstChild) {
    todayWeatherSection.removeChild(todayWeatherSection.firstChild)
  }
  //clears the page when search button is clicked
  while (futureWeatherSection.firstChild) {
    futureWeatherSection.removeChild(futureWeatherSection.firstChild)
  }
  //TODO: clear in input box
  const searchInputVal = document.getElementById('inputText').value
  const createBtn = document.createElement('li')
  createBtn.textContent = searchInputVal
  createBtn.id = 'pastSearches'
  searchSection.append(createBtn)
  getWeather(searchInputVal)
  getFutureWeather(searchInputVal)
  saveSearch(searchInputVal)
  //input value in current weather and 5day weather
} 

loadPreviousSearches()

//add an event listener to the search button (domNode.addEventListener('action', function))
searchEl.addEventListener('click', searchFunction);
document.body.addEventListener("click", handleClick);


