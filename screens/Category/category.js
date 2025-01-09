import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  StatusBar,
} from "react-native";
import { FontAwesome, MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from '@react-navigation/native';
import { useRoute } from '@react-navigation/native';
import BackButton from '../../components/BackButton';

const CategoryScreen = () => {
  const route = useRoute();
  const [selectedCategory, setSelectedCategory] = useState("Car");
  const navigation = useNavigation();
  const { categoryName = "Automobile"  } = route.params || {};
  
  const handleCategoryPress = (category) => {
    if (selectedCategory === category.name) {
      navigation.navigate('Solutions', { category: category.name });
    } else {
      setSelectedCategory(category.name);
    }
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
    {
      id: "3",
      title: "Car Scan or Diagnostics",
      price: "₦35,300",
      rating: 4.6,
      reviews: "2.4K reviews",
    },
    {
      id: "4",
      title: "Car Scan or Diagnostics",
      price: "₦35,300",
      rating: 4.6,
      reviews: "2.4K reviews",
    },
    {
      id: "5",
      title: "Car Scan or Diagnostics",
      price: "₦35,300",
      rating: 4.6,
      reviews: "2.4K reviews",
    },
    {
      id: "6",
      title: "Car Scan or Diagnostics",
      price: "₦35,300",
      rating: 4.6,
      reviews: "2.4K reviews",
    },
    {
      id: "7",
      title: "Car Scan or Diagnostics",
      price: "₦35,300",
      rating: 4.6,
      reviews: "2.4K reviews",
    },
  ];

  const renderOffer = ({ item }) => (
    <View style={styles.offerCard}>
      <View style={styles.offerMain}>
        <Text style={styles.offerTitle}>{item.title}</Text>
        <Text style={styles.offerPrice}>{item.price}</Text>
      </View>
      <View style={styles.offerFooter}>
        <Text style={styles.offerRating}>
          ⭐ {item.rating} ({item.reviews})
        </Text>
        <TouchableOpacity style={styles.labelButton} onPress={() => {navigation.navigate('DetailsAndReviews')}}>
          <Text style={styles.labelText}>Label</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
        <StatusBar
          barStyle="dark-content"
          backgroundColor="transparent"
          translucent
        />
      {/* Header */}
      <View style={styles.header}>
        <BackButton
          text="Back"
          iconPosition="left"
          alignSelf="flex-start" onPress={() => navigation.goBack()} /> 
        <Text style={styles.headerTitle}>{categoryName}</Text>
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
            onPress={() => handleCategoryPress(category)}
          >
            <MaterialIcons
              name={category.icon}
              size={34}
              color= "#2F7FEF"
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
    paddingTop: '15%',
    marginHorizontal: 20,
  },
  header: {
    flexDirection: "column",
    padding: 16,
  },
  headerTitle: {
    marginTop: 20,
    fontSize: 25,
    textAlign: "center",
    fontWeight: "700",
    color: '#013C69'
  },
  categories: {
    flexDirection: "row",
    flexWrap: 'wrap',
    justifyContent: "space-between",
    backgroundColor: "#fff",
  },
  categoryButton: {
    alignItems: "center",
    paddingVertical: '5%',
    width: '30%',
    marginVertical: '3%',
  },
  selectedCategory: {
    borderWidth: 2,
    borderColor: "#007BFF",
    borderRadius: 15,
  },
  categoryText: {
    marginTop: 8,
    color: "#888",
    fontSize: 12,
  },
  selectedText: {
    color: "#007BFF",
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "500",
    marginVertical: '5%',
    color: "#7C7C7F",
  },
  offerCard: {
    backgroundColor: "#F5F5F5",
    borderRadius: 8,
    padding: 16,
    paddingHorizontal: 20,
    marginBottom: 16,
  },
  offerMain: {
    flexDirection: "row",
    paddingVertical: 10,
  },
  offerTitle: {
    width: "75%",
    fontSize: 14,
    fontWeight: "bold",
  },
  offerRating: {
    width: "75%",
    marginTop: 4,
    color: "#888",
  },
  offerFooter: {
    flexDirection: "row",
    paddingVertical: 10,
  },
  offerPrice: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#707072",
  },
  labelButton: {
    backgroundColor: "#193053",
    borderRadius: 4,
    paddingHorizontal: '6%',
    paddingVertical: '4%',
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