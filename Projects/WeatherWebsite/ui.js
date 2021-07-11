class UI {
    constructor() {
        this.uiContainer = document.getElementById("content");
        this.city;
        this.defaultCity = "London";
    }

    populateUI(data) {
        this.uiContainer.innerHTML = ` 
        
        <div class="card" style="width: 18rem;">
          <img src="img/waether.png" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">City: ${data.name}</h5>
            <p class="card-text">Highs of ${data.main.temp_max}. Lows of ${data.main.temp_min}.</p>
            <p>Weather conditions are described as: ${data.weather[0].description}</p>
          </div>
        </div>
        
        `;
    }

    
  clearUI() {
    uiContainer.innerHTML = "";
  }

  saveToLS(data) {
    localStorage.setItem("city", JSON.stringify(data));
  }

  getFromLS() {
    if (localStorage.getItem("city" == null)) {
      return this.defaultCity;
    } else {
      this.city = JSON.parse(localStorage.getItem("city"));
    }

    return this.city;
  }

  clearLS() {
    localStorage.clear();
  }
}
