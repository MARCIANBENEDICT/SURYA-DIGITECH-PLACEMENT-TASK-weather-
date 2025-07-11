import React,{useState} from 'react';
const DateSelector=({onDateChange})=>{
	const[selectedDate,setSelectedDate]=useState('');
	const handleDateChange=(e)=>{
		const date=e.target.value;
		setSelectedDate(date);
		onDateChange(date);
	};
	return(
		<div>
      <br />
			<label htmlFor="date"><b>Choose Date: </b></label>
			<input type="date" id="date"value={selectedDate}onChange={handleDateChange}/>
		</div>
	);
};

export default DateSelector;