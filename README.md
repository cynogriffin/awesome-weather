# awesome-weather

## Description

This project is an attept to build a weather app using server-side API requests for weather information based on location. When the user enters in the coordinates of the desired location, they are presented with the current weather as well as the forecast for the next 5 days, presented as cards on the page. The UV index is highlighted based on the current/forcasted level: green for favorable, yellow for moderate, and red for severe. The user also has the option of getting the weather and forecast for thier current location by clicking the "Use Current Location" button. The app will read their coordinates off their computer's information and autofill them into the spaces for latitude and longitude in the browser. The app as it appears in the browser is seen below for reference:

![screenshot of weather app](https://github.com/cynogriffin/awesome-weather/blob/main/assets/images/app-demo.PNG)

In this project, I learned how to functionally utilize a server-side API (in this case the OpenWeather One Call API) to add data dymaically to a website. I learned how to obtain and use an API key as well as further developing the essential skill of documentation reference. As far as challenges go, there were plenty for me this time. Due to time constraints, I was not able to integrate the search by city name functionality, due to that requiring a seperate call to another API first and then feeding those results into the latitude/longitude values of the One Call request. Also due to time constraints, I was not able to add the functionality of recording the history of search results and ability to revisit a previously-searched location. So if I had more time, I would expand the app to include those two features.

The live site with the completed and functional app can be found [here](https://cynogriffin.github.io/awesome-weather/). Please feel free to use and test the application and let me know of any possible improvements or suggestions.

## Installation and Usage

As an in-browser web application, there is no environment setup or installation needed. Simply load the page in your browser and the app should be fully functional.

To use, you can follow the steps listed below:

1. Input the coordinates (latitude and longitude) of the location you wish to view the weather of, or click the "Use Current Location" button to autofill your current coordinates.

2. Click the "Get Weather" button to return the current and future weather for the given location.

    ![coordiantes and buttons](https://github.com/cynogriffin/awesome-weather/blob/main/assets/images/entry.PNG)

3. View the current weather and forecast for the next 5 days. Pay attention to the highlighted UV index for the color-coded codition.

    ![weather data](https://github.com/cynogriffin/awesome-weather/blob/main/assets/images/results.PNG)

## Credits

I mainly referenced the documentation for the [OpenWeather One Call API](https://openweathermap.org/api/one-call-api) as well as [Bootstrap](https://getbootstrap.com/docs/4.3/getting-started/introduction/).

---
Copyright &copy; 2022 Cody Griffin. All rights reserved.

Licensed under the [MIT License](LICENSE.txt).