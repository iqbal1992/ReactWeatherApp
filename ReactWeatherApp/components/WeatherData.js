import React, { useEffect, useState } from 'react';
import {View, Text, Button, StyleSheet, FlatList } from 'react-native';
import axios from 'axios';


const WeatherData = () => {

  useEffect(() => {
    axios.get('http://www.supremebodytone.com/weatherdata.json')
    .then((response) => response.data)
    .then((json) => {
      console.log(json.name);
    })
    .catch((error) => {
      console.error(error);
    })
  })

  
  return (

    <Text></Text>
  );
}

export default WeatherData;




// const [data, setData] = useState([]);

  // useEffect(() => {
  //   fetch('https://api.openweathermap.org/data/2.5/weather?q=Toronto&appid=21be3ea8e9d8ca3f7e73b968012bf745')
  // .then((res) => res.json())
  // .then((json) => {
  //   setData(json.weather);
  //   console.log(json.weather)
  // })
  // .catch((error) => {
  //   console.error(error);
  // });

  // }, []);