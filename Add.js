import React,{useState} from 'react';
import { StatusBar, View, Button, Text, TextInput } from 'react-native';

const Add = ({navigation, route}) => {
  const[name,setName] = useState("");

  return (
    <View>
      <StatusBar/>
      <Text>Name:</Text>
      <TextInput style={{borderWidth:1}} onChangeText={(text)=>setName(text)}/>
      <Button title='Submit'
      onPress={()=>{
          let myData = JSON.parse(route.params.datastr);
          let item = {name:name};
          myData.push(item);
          fetch("https://jsonhost.com/json/70b3d4545b40510d6ea9fca63e2cdc84", {
              method: "POST",
              headers: {
                  "Content-Type": "application/json",
                  "Authorization": "f08lnjceas4pddfqhgo69vwcamelgprm"
              },
              body: JSON.stringify(myData)
          })
              .then((response) => {
                  navigation.navigate("Home");
              })
        }
      }
      />
    </View>
  );
};

export default Add;
