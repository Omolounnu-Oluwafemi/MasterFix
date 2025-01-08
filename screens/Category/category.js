import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  Image,
} from "react-native";
import { FontAwesome, MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from '@react-navigation/native';

const CategoryScreen = () => {
   const [selectedCategory, setSelectedCategory] = useState("Car");
   const navigation = useNavigation();
    
  const handleCategoryPress = (category) => {
    setSelectedCategory(category.name);
    navigation.navigate('Solutions', { category: category.name });
  };

  const categories = [
    { id: "car", name: "Car", icon: "directions-car" },
    { id: "bike", name: "Bike", icon: "pedal-bike" },
    { id: "truck", name: "Truck", icon: "local-shipping" },
    { id: "energy", name: "Energy/Gas", icon: "local-gas-station" },
  ];

  const offers = [
    {
      id: "1",
      title: "Air Conditioning and Heating Problems",
      price: "₦9,300",
      rating: 4.6,
      reviews: "2.4K reviews",
    },
    {
      id: "2",
      title: "Car Scan or Diagnostics",
      price: "₦35,300",
      rating: 4.6,
      reviews: "2.4K reviews",
    },
    // Add more offers as needed
  ];

  const renderOffer = ({ item }) => (
    <View style={styles.offerCard}>
      <View>
        <Text style={styles.offerTitle}>{item.title}</Text>
        <Text style={styles.offerRating}>
          ⭐ {item.rating} ({item.reviews})
        </Text>
      </View>
      <View style={styles.offerFooter}>
        <Text style={styles.offerPrice}>{item.price}</Text>
        <TouchableOpacity style={styles.labelButton} onPress={() => {navigation.navigate('DetailsAndReviews')}}>
          <Text style={styles.labelText}>Label</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity>
          <MaterialIcons name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Automobile</Text>
      </View>

      {/* Categories */}
      <View style={styles.categories}>
        {categories.map((category) => (
          <TouchableOpacity
            key={category.id}
            style={[
              styles.categoryButton,
              selectedCategory === category.name && styles.selectedCategory,
            ]}
                // onPress={() => setSelectedCategory(category.name)}
            onPress={() => handleCategoryPress(category)}
          >
            <MaterialIcons
              name={category.icon}
              size={24}
              color={selectedCategory === category.name ? "#007BFF" : "#888"}
            />
            <Text
              style={[
                styles.categoryText,
                selectedCategory === category.name && styles.selectedText,
              ]}
            >
              {category.name}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Top Offers */}
      <Text style={styles.sectionTitle}>Top Offers</Text>
      <FlatList
        data={offers}
        renderItem={renderOffer}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.offersList}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#F5F5F5",
  },
  headerTitle: {
    marginLeft: 16,
    fontSize: 18,
    fontWeight: "bold",
  },
  categories: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 16,
    backgroundColor: "#fff",
  },
  categoryButton: {
    alignItems: "center",
    padding: 8,
  },
  selectedCategory: {
    borderBottomWidth: 2,
    borderBottomColor: "#007BFF",
  },
  categoryText: {
    marginTop: 8,
    color: "#888",
  },
  selectedText: {
    color: "#007BFF",
    fontWeight: "bold",
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginHorizontal: 16,
    marginVertical: 8,
  },
  offersList: {
    paddingHorizontal: 16,
  },
  offerCard: {
    backgroundColor: "#F5F5F5",
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
  },
  offerTitle: {
    fontSize: 14,
    fontWeight: "bold",
  },
  offerRating: {
    marginTop: 4,
    color: "#888",
  },
  offerFooter: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 16,
  },
  offerPrice: {
    fontSize: 16,
    fontWeight: "bold",
  },
  labelButton: {
    backgroundColor: "#007BFF",
    borderRadius: 4,
    paddingHorizontal: 12,
    paddingVertical: 4,
  },
  labelText: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "bold",
  },
  bottomNavigation: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 12,
    borderTopWidth: 1,
    borderTopColor: "#ddd",
    backgroundColor: "#fff",
  },
  navItem: {
    alignItems: "center",
  },
  navText: {
    fontSize: 12,
    color: "#888",
    marginTop: 4,
  },
  activeNavText: {
    color: "#007BFF",
  },
});

export default CategoryScreen;