import React,{useState, useEffect} from 'react';
import {StatusBar, Button, FlatList, StyleSheet, Text, View, TextInput} from 'react-native';

const styles = StyleSheet.create({
   listStyle: {
      borderWidth: 1,
   },
});

let originalData = [];
const Home = ({navigation}) => {
    const [myData, setMyData] = useState([]);


    useEffect(() => {
        fetch("https://jsonhost.com/json/3c8ea95bb0f0a27afaf17496650efb56")
            .then((response) => {
                return response.json();
            })
            .then((myJson) => {
                console.log("line 19:");
                console.log(myJson);

                    setMyData(myJson);
                    originalData = myJson;

            })
    }, []);

  const FilterData = (text) => {
      if (text != "") {
          let filteredData = originalData.filter((item) =>
              item.name.includes(text));
          setMyData(filteredData);
      }
      else {
          setMyData(originalData);
      }
  }

  const renderItem = ({item, index, section}) => {
    return (
    <View style={styles.listStyle}>
    <Text>{item.name}</Text>
    </View>
    );
  };

   return (
    <View>
      <StatusBar/>
	  <Button title='Add Item' onPress={
      ()=>{navigation.navigate("Add",{datastr:JSON.stringify(myData)})}}/>
      <Text>Search:</Text>
      <TextInput style={{borderWidth: 1}} onChangeText={(text) => {FilterData(text)}}/>
      <FlatList data={myData} renderItem={renderItem}/>
    </View>
  );
};

export default Home;
