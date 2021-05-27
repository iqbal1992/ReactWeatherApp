import React, { useEffect, useState } from 'react';
import {View, Text, StyleSheet, FlatList } from 'react-native';
import axios from 'axios';


const FlatListData = [
  {time: '01',temp: '70'},
  {time: '02',temp: '70'},
  {time: '01',temp: '70'},
  {time: '02',temp: '70'},
  {time: '01',temp: '70'},
  {time: '02',temp: '70'},
  {time: '01',temp: '70'},
  {time: '02',temp: '70'},
  {time: '01',temp: '70'},
  {time: '02',temp: '70'},
  {time: '01',temp: '70'},
  {time: '02',temp: '70'},
  {time: '01',temp: '70'},
  {time: '02',temp: '70'},
  {time: '01',temp: '70'},
  {time: '02',temp: '70'},
  {time: '01',temp: '70'},
  {time: '02',temp: '70'},
  {time: '01',temp: '70'},
  {time: '02',temp: '70'},
  {time: '01',temp: '70'},
  {time: '02',temp: '70'},
  {time: '01',temp: '70'},
  {time: '02',temp: '70'},
];



const Item = ({time, temp}) => (
  <View>
    <Text style={styles.flatListTimeText}>{time}</Text>
    <Text style={styles.flatListTempText}>{temp}&deg;</Text>
  </View>

);

const Front = () => {

  //DataCall
const [cityName, setCityName] = useState([]);
const [currentTemp, setCurrentTemp] = useState([]);
const [sunriseVal, setSunriseVal] = useState(0);
const [sunsetVal, setSunsetVal] = useState(0);

  
  
useEffect(() => {

  axios.get('http://www.supremebodytone.com/weatherdata.json')
    .then((response) => response.data)
    .then((json) => {

    setCityName(json.name)
    setCurrentTemp(json.main.temp)
    setSunriseVal(json.sys.sunrise)
    setSunsetVal(json.sys.sunset)
    })
    .catch((error) => {
      console.error(error);
    })

}, []);

const sunriseTime = new Date(sunriseVal * 1000).toISOString().substr(11, 8).replace(/:[^:]*$/,'');
const sunsetTime = new Date(sunsetVal * 1000).toISOString().substr(11, 8).replace(/:[^:]*$/,'');

  // Randering items in flatlistview
  const randerItem = ({item}) => (
    <Item time={item.time} temp={item.temp} />
  );
  
  return (
    // Main View
    <View style={{flex: 1}}>
      
      {/* Top View */}
        <View style={{flex: 1.5, backgroundColor: 'red'}}>
            <Text style={styles.cityText}>{cityName}</Text>
            <Text style={styles.weatherText}>{Math.round(currentTemp - 273.15)}&deg;</Text>
        </View>


        {/* Middle Scrollable View */}
        <View style={{flex: 0.3, backgroundColor: 'blue'}}>
          <FlatList
            horizontal={true}
            ItemSeparatorComponent={this.space}
            showsHorizontalScrollIndicator={false}
            data={FlatListData}
            renderItem={randerItem}
          />
        </View>




        {/* Bottom Information View */}

        {/* sunrise & sunset times */}
        <View style={{flex: 2, backgroundColor: 'yellow'}}>
          <View style={{flexDirection: 'row', height: 70, backgroundColor: 'grey'}}>
            <View style={{flex: 1, height: 70, backgroundColor: 'pink'}}>
              <Text style={{padding: 5}}>Sunrise</Text>
              <Text style={{padding: 5}}>{sunriseTime}</Text>
            </View>
            <View style={{flex: 1, height: 70, backgroundColor: 'green'}}>
            <Text style={{padding: 5}}>Sunset</Text>
              <Text style={{padding: 5}}>{sunsetTime}</Text>
            </View>
          </View>

          <View style={{flexDirection: 'row', height: 70, backgroundColor: 'grey'}}>
            <View style={{flex: 1, height: 70, backgroundColor: 'pink'}}>
              <Text style={{padding: 5}}>Humidity</Text>
              <Text style={{padding: 5}}>{sunriseTime}</Text>
            </View>
            <View style={{flex: 1, height: 70, backgroundColor: 'green'}}>
            <Text style={{padding: 5}}>Pressure</Text>
              <Text style={{padding: 5}}>{sunsetTime}</Text>
            </View>
          </View>

          <View style={{flexDirection: 'row', height: 70, backgroundColor: 'grey'}}>
            <View style={{flex: 1, height: 70, backgroundColor: 'pink'}}>
              <Text style={{padding: 5}}>Feels Like</Text>
              <Text style={{padding: 5}}>{sunriseTime}</Text>
            </View>
            <View style={{flex: 1, height: 70, backgroundColor: 'green'}}>
            <Text style={{padding: 5}}>Visibility</Text>
              <Text style={{padding: 5}}>{sunsetTime}</Text>
            </View>
          </View>

        </View>
    </View>
  );
}

const styles = StyleSheet.create({

  cityText: {
    fontSize: 40,
    textAlign: 'center',
    color: 'white',
    marginTop: 100,
  },

  weatherText: {
    fontSize: 40,
    textAlign: 'center',
    color: 'white',
    marginTop: 10,
  },

  flatListTimeText: {
    color: 'white',
    padding: 10,
    fontSize: 16,
  },

  flatListTempText: {
    color: 'white',
    padding: 10,
    paddingTop: 3,
    fontSize: 16,
    
  },

    


});

export default Front;





  // fetch('http://www.supremebodytone.com/weatherdata.json')
  // .then((response) => response.json())
  // .then((json) => {
  //   setCityName(json.name)
  //   setCurrentTemp(json.main.temp)
  //   setSunriseVal(json.sys.sunrise)
  //   setSunsetVal(json.sys.sunset)
  // })
  // .catch((error) =>{
  //   console.error(error);
  // })