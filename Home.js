import React,{useState, useEffect} from 'react';
import {StatusBar, Button, FlatList, StyleSheet, Text, View} from 'react-native';

const styles = StyleSheet.create({
   listStyle: {
      borderWidth: 1,
   },
});

const Home = ({navigation}) => {
    const [myData, setMyData] = useState([]);
    useEffect(() => {
        fetch("https://jsonhost.com/json/70b3d4545b40510d6ea9fca63e2cdc84")
            .then((response) => {
                return response.json();
            })
            .then((myJson) => {
                setMyData(myJson)
            })
    }, []);

  const renderItem = ({item}) => {
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
      <FlatList data={myData} renderItem={renderItem}/>
    </View>
  );
};

export default Home;
