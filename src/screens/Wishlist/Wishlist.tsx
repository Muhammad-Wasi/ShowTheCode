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

type WishlistScreenProps = NativeStackScreenProps<RootStackParamList, 'Home'>;

const Wishlist: FC<WishlistScreenProps> = ({navigation, route}) => {
  const {state, getWishlistOrBag} = useContext(ProductContext) as any;
  const [products, setProducts] = useState<any>([]);
  const [loader, setLoader] = useState<boolean>(true);

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      getData();
    });
    return unsubscribe;
  }, [route, state.wishlist]);

  useEffect(() => {
    const unsubscribe = getData();
    return unsubscribe;
  }, [state]);

  const getData = async () => {
    if (products.length !== state.wishlist.length) {
      if (state.wishlist.length) {
        setProducts(state.wishlist);
      } else {
        const result = await getWishlistOrBag('Wishlist');
        if (result) {
          setProducts(JSON.parse(result));
        }
      }
    }
    setLoader(false);
  };

  return (
    <View style={styles.container} testID="wishlist-container">
      {loader ? (
        <LoadingIndicator />
      ) : (
        <FlatList
          style={styles.flatListStyle}
          numColumns={2}
          columnWrapperStyle={styles.subContainer}
          data={products}
          renderItem={({item}) => <ProductCard item={item} />}
          ListEmptyComponent={() => (
            <EmptyComponent icon={'hearto'} text={'No wishlist found'} />
          )}
          testID="wishlist-product-list"
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
  flatListStyle: {
    width: '100%',
    padding: Theme.spacing(2),
  },
  subContainer: {
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
});

export default Wishlist;
