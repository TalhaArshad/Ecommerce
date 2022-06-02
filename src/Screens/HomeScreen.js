import React, {useEffect, useState} from 'react';
import {SafeAreaView, View, Text, StyleSheet, ActivityIndicator} from 'react-native';
import useFetch from '../Hooks/UseFetch';
import {PRODUCT_LIST} from '../Utils/Constants';
import ProductList from '../Components/ProductList';

const HomeScreen = () => {
  const [fetchData, {data, status, error}] = useFetch(PRODUCT_LIST);
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <SafeAreaView>
      
        {data.length > 0 && <ProductList
            data = {data}
        />}

      
    </SafeAreaView>
  );
};

export default HomeScreen;
