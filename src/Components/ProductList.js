import React from 'react';
import { FlatList} from 'react-native';
import ProductItem from './ProductItem';

const ProductList = ({data}) => {
  return (
    
      <FlatList
        data={data}
        renderItem={({item}) => (
          <ProductItem
            name={item.name}
            color={item.colour}
            price={item.price}
            imgUrl={item.img}
          />
        )}
      />
  );
};

export default ProductList;
