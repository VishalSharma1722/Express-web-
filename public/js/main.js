const cityName = document.getElementById('cityName');
const city_name = document.getElementById('city_name');
const submitBtn = document.getElementById('submitBtn');
// const temp = document.getElementById('temp');
const temp_real_val = document.getElementById('temp_real_val');
const temp_status = document.getElementById('temp_status');
const datahide = document.querySelector('.middle_layer');

const getInfo = async(event) => {
    event.preventDefault();
    let cityVal = cityName.value.trim();
    if(cityVal === ""){
        city_name.innerText = 'please write the name before you search';
        datahide.classList.add('data_hide');
    } else{
        try{
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=44f228f9e3b067936c755f0ac86b20c4`;
        const response = await fetch(url);
        const data = await response.json();
        const arrData = [data];

        temp_real_val.innerText = arrData[0].main.temp;
        //temp_status.innerText = arrData[0].weather[0].main;

        city_name.innerText =`${arrData[0].name}, ${arrData[0].sys.country}`;

        const tempMood = arrData[0].weather[0].main;

        if(tempMood == "Clear"){
            temp_status.innerHTML = "<i class='fas fa-sun' style='color: #eccc68;'></i>";
        } else if(tempMood == "Clouds"){
            temp_status.innerHTML = "<i class='fas fa-cloud' style='color: #f1f2f6;'></i>";
        } else if(tempMood == "Rain"){
            temp_status.innerHTML = "<i class='fas fa-cloud-rain' style='color: #a4b0be;'></i>";
        } else{
            temp_status.innerHTML = "<i class='fas fa-sun' style='color: #eccc68;'></i>";
        }

        datahide.classList.remove('data_hide');
        
        } catch{
            city_name.innerText = 'please write proper city name';
            datahide.classList.add('data_hide');
        }
    }
}

submitBtn.addEventListener('click', getInfo);