import React, {FC, useContext, useEffect, useState} from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import ProductCard from '../../components/ProductCard/ProductCard';
import {COLORS, Theme} from '../../constants';
import {Context as ProductContext} from '../../context/productContext';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {EmptyComponent, LoadingIndicator} from '../../components';

type RootStackParamList = {
  Bag: undefined;
};

type BagScreenProps = NativeStackScreenProps<RootStackParamList, 'Bag'>;

const Bag: FC<BagScreenProps> = ({navigation, route}) => {
  const {state, getWishlistOrBag} = useContext(ProductContext) as any;
  const [products, setProducts] = useState<any>([]);
  const [loader, setLoader] = useState<boolean>(true);

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      getData();
    });
    return unsubscribe;
  }, [route, state]);

  useEffect(() => {
    const unsubscribe = getData();
    return unsubscribe;
  }, [state]);

  const getData = async () => {
    if (products.length !== state.bags.length) {
      if (state.bags.length) {
        setProducts(state.bags);
      } else {
        const result = (await getWishlistOrBag('Bags')) as any;
        if (result) {
          setProducts(JSON.parse(result));
        }
      }
    }
    setLoader(false);
  };

  return (
    <View style={styles.container} testID="bag-container">
      {loader ? (
        <LoadingIndicator />
      ) : (
        <FlatList
          style={styles.flatListContainer}
          numColumns={2}
          columnWrapperStyle={styles.subContainer}
          data={products}
          renderItem={({item}) => <ProductCard item={item} isBag={true} />}
          ListEmptyComponent={() => (
            <EmptyComponent icon={'shoppingcart'} text={'No bag found'} />
          )}
          testID="bag-product-list"
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
  flatListContainer: {
    width: '100%',
    padding: Theme.spacing(2),
  },
  subContainer: {
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
});

export default Bag;
