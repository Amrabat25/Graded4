
import React, { useContext } from 'react';
import { View, Text, FlatList, Button, StyleSheet } from 'react-native';
import CartContext from '../contexts/CartContext';

const CartScreen = () => {
  const { cartItems, removeCartItem, clearCart, calculateTotal } = useContext(CartContext);

  return (
    <View style={styles.container}>
      <FlatList
        data={cartItems}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Text style={styles.name}>{item.name}</Text>
            <Text>R{item.price.toFixed(2)}</Text>
            <Button title="Remove" onPress={() => removeCartItem(item.id)} />
          </View>
        )}
      />
      <Text style={styles.total}>Total: R{calculateTotal().toFixed(2)}</Text>
      <Button
        title="Checkout"
        onPress={() => {
          clearCart(); 
          alert('Checked out successfully!');
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20 ,
  },
  itemContainer: {
    marginBottom: 20,
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  total: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 16,
  },
});

export default CartScreen;
