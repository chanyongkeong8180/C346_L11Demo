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
          fetch("https://jsonhost.com/json/b1b17a7b4ace82611b0e47da6dc8d0e9", {
              method: "POST",
              headers: {
                  "Content-Type": "application/json",
                  "Authorization": "roopilriikdavb3xxlxyaak1iqkz5xg2"
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
