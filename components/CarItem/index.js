import React from "react";
import { ImageBackground, View, Text } from "react-native";
import styles from './styles';
import StyledButton from '../StyledButton/index'
import styless from "../StyledButton/styles";

const CarItem = (props) => {

  const {name, tagline, taglineCTA, image} = props;

  return (
    <View style={styles.container}>
      <View style={styles.carContainer}>
        <ImageBackground
          source={image}
          style={styles.image}
        />

        <View style={styles.titles}>
          <Text style={styles.title}>{name}</Text>
          <Text style={styles.subTitle}>
                <Text>
                    {tagline}
                    {' '}
                    <Text style={styles.tagLineCTA}>
                      {taglineCTA}
                    </Text>
                </Text>
          </Text>
        </View>

        <View style={styles.buttonContainer}>
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
    </View>
  );
};

export default CarItem;
