import React,{useState} from 'react';
import { StatusBar, View, Button, Text, TextInput, Alert } from 'react-native';

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
          fetch("https://jsonhost.com/json/3c8ea95bb0f0a27afaf17496650efb56", {
              method: "POST",
              headers: {
                  "Content-Type": "application/json",
                  "Authorization": "kddwvpe1w2xsy7rcx9c36voreuoqszwh"
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
