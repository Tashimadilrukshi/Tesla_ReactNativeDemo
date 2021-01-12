import React from "react";
import { ImageBackground, View, Text } from "react-native";
import styles from './styles';
import StyledButton from '../StyledButton/index'

const CarItem = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.carContainer}>
        <ImageBackground
          source={require("../../assets/images/ModelS.jpeg")}
          style={styles.image}
        />

        <View style={styles.titles}>
          <Text style={styles.title}>Model S</Text>
          <Text style={styles.subTitle}>Starting at $69,240</Text>
        </View>

        <StyledButton 
            type="primary"
            content="Custom Order"
            press={()=>{
                console.warn("customer order was pressed")
            }}
        />

        <StyledButton 
            type="secondary"
            content="Existing Inventory"
            press={()=>{
                console.warn("exsisting inventory was pressed")
            }}
        />

      </View>
    </View>
  );
};

export default CarItem;
