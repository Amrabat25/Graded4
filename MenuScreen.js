

import React, { useContext } from 'react';
import { View, Text, FlatList, Button, Image, StyleSheet, TouchableOpacity } from 'react-native';
import CartContext from '../contexts/CartContext';

const MenuScreen = ({ navigation }) => {
  const { cartItems, addCartItem, removeCartItem } = useContext(CartContext);

  const foodItems = [
    { id: 1, name: 'Burger', image: require('../assets/images/burger.jpeg'), description: 'Tasty burger', price: 150.00 },
    { id: 2, name: 'Capaccino', image: require('../assets/images/capaccino.jpeg'), description: 'Creamy capaccino', price: 29.00 },
    { id: 3, name: 'Eggs', image: require('../assets/images/eggs.jpeg'), description: 'Scrumptious eggs', price: 15.00 },
    { id: 4, name: 'Hotdog', image: require('../assets/images/hotdog.jpeg'), description: 'Delumptious hotdog', price: 20.00 },
    { id: 5, name: 'Ice Cream', image: require('../assets/images/icecream.jpeg'), description: 'Cool ice cream', price: 25.00 },
  ];

  const isInCart = (id) => cartItems.some(item => item.id === id);

  return (
    <View style={styles.container}>
      <FlatList
        data={foodItems}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Image source={item.image} style={styles.image} />
            <Text style={styles.name}>{item.name}</Text>
            <Text>{item.description}</Text>
            <Text>R{item.price.toFixed(2)}</Text>
            <View style={styles.buttonContainer}>
              <TouchableOpacity
                style={styles.button}
                onPress={() => {
                  isInCart(item.id) ? removeCartItem(item.id) : addCartItem(item);
                }}
              >
                <Text style={styles.buttonText}>{isInCart(item.id) ? 'Remove from Cart' : 'Add to Cart'}</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.button, styles.cartButton]} 
                onPress={() => navigation.navigate('Cart')}
              >
                <Text style={styles.buttonText}>Go to Cart</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  itemContainer: {
    marginBottom: 20,
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 8,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  buttonContainer: {
    marginTop: 10, 
  },
  button: {
    marginVertical: 5, 
    padding: 10,
    backgroundColor: '#f08',
    borderRadius: 5,
  },
  cartButton: {
    backgroundColor: '#0f8', 
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
  },
});

export default MenuScreen;
