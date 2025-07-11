import React from 'react';
import WeatherComponent from './components/WeatherComponent';
import './App.css';
function App(){
	return(
		<div className="App">
			<header className="App-header">
        
				<h1><img src="https://media.licdn.com/dms/image/v2/C560BAQEKJHweeiwdiA/company-logo_200_200/company-logo_200_200/0/1635487186747/surya_digital_india_logo?e=2147483647&v=beta&t=5XSHfMPOYhWUQZQmIWq2Oh8y_bkznqQmBRdXZS10OTk" alt="" />&nbsp;&nbsp;&nbsp;
        Surya Digitech Weather Forecast Application</h1>
			</header>
      <br />
			<main><WeatherComponent/></main>
      <br />
			<footer>
				<p>Marcian Benedict@Dr.N.G.P Institute Of Technology</p>
			</footer>
		</div>
	);//https://media.licdn.com/dms/image/v2/C560BAQEKJHweeiwdiA/company-logo_200_200/company-logo_200_200/0/1635487186747/surya_digital_india_logo?e=2147483647&v=beta&t=5XSHfMPOYhWUQZQmIWq2Oh8y_bkznqQmBRdXZS10OTk
}






export default App;