import React, {FC, useContext, useEffect, useState} from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import ProductCard from '../../components/ProductCard/ProductCard';
import {COLORS, Theme} from '../../constants';
import {Context as ProductContext} from '../../context/productContext';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {EmptyComponent, LoadingIndicator} from '../../components';

type RootStackParamList = {
  Home: undefined;
};

type HomeScreenProps = NativeStackScreenProps<RootStackParamList, 'Home'>;

const Home: FC<HomeScreenProps> = ({navigation, route}) => {
  const {state, getProducts} = useContext(ProductContext) as any;
  const [products, setProducts] = useState<any>([]);
  const [loader, setLoader] = useState<boolean>(true);

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      getData();
    });
    return unsubscribe;
  }, [route]);

  useEffect(() => {
    const unsubscribe = getData();
    return unsubscribe;
  }, [state]);

  const getData = async () => {
    setLoader(true);
    if (
      products.length !== state.wishlist.length ||
      products.length !== state.bags.length
    ) {
    } else if (products.length !== state.products.length || !products.length) {
      const response = await getProducts();
      if (response) {
        setProducts(response);
      }
    }
    setLoader(false);
  };

  return (
    <View style={styles.container} testID="home-container">
      {loader ? (
        <LoadingIndicator />
      ) : (
        <FlatList
          style={styles.flatListView}
          numColumns={2}
          columnWrapperStyle={styles.subContainer}
          data={products}
          renderItem={({item}) => <ProductCard item={item} />}
          ListEmptyComponent={() => (
            <EmptyComponent icon={'home'} text={'No product found'} />
          )}
          testID="home-product-list"
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.white,
  },
  flatListView: {
    width: '100%',
    padding: Theme.spacing(2),
  },
  subContainer: {
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
});

export default Home;
