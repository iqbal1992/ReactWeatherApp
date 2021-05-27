import React, { useEffect, useState } from 'react';
import {View, Text, Button, StyleSheet, FlatList } from 'react-native';
import axios from 'axios';


const WeatherData = () => {

  useEffect(() => {
    axios.get('weather data fetch url')
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
