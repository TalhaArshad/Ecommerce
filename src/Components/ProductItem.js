import React, {useState} from 'react';
import {View, Text, Image, StyleSheet, Button} from 'react-native';

const ProductItem = ({name, color, price, imgUrl}) => {
  const [itemCount, setItemCount] = useState(0);
  return (
    <View style={styles.container}>
      <View style={styles.infoContainer}>
        <Image style={styles.image} source={{uri: imgUrl}} />
        <View style={styles.title}>
          <Text>{name}</Text>
          <Text>Color: {color}</Text>
          <Text>Price: ${price}</Text>
        </View>
      </View>
      <View style={styles.buttonsContainer}>
        <Button
          title="-"
          onPress={() => {
            setItemCount(itemCount > 0 ? itemCount - 1 : 0);
          }}
        ></Button>
        <Text>{itemCount}</Text>
        <Button
          title="+"
          onPress={() => {
            setItemCount(itemCount + 1);
          }}
        ></Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginHorizontal: 30,
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  infoContainer: {
    flexDirection: 'row',
  },
  title: {
    width: 200,
  },
  buttonsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    height: 70,
    width: 60,
    marginRight: 30,
  },
});

export default ProductItem;
