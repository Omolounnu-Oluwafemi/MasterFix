// TopCategories.js
import React, {useState} from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { FontAwesome5, MaterialIcons, AntDesign, MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const categoryIcons = {
  Automobile: <FontAwesome5 name="bus" size={24} color="#2F7FEF" />,
  Plumbing: <MaterialIcons name="plumbing" size={24} color="#2F7FEF" />,
  Computer: <FontAwesome5 name="laptop" size={24} color="#2F7FEF" />,
  Appliances: <MaterialIcons name="kitchen" size={24} color="#2F7FEF" />,
  Mobile: <AntDesign name="mobile1" size={24} color="#2F7FEF" />,
  'AC Repairs': <FontAwesome5 name="fan" size={24} color="#2F7FEF" />,
  Vehicles: <FontAwesome5 name="tools" size={24} color="#2F7FEF" />,
  Electrician: <MaterialIcons name="electrical-services" size={24} color="#2F7FEF" />,
  Salon: <MaterialCommunityIcons name="face-woman-shimmer" size={24} color="#2F7FEF" />
};

const TopCategories = () => {
const [selectedCategory, setSelectedCategory] = useState(null);
  const navigation = useNavigation();

  const handleCategoryPress = (category) => {
    if (selectedCategory === category) {
      navigation.navigate('CategoryDetails', { category });
    } else {
      setSelectedCategory(category);
    }
  };
    
  return (
    <>
      <Text style={styles.sectionTitle}>Top Categories</Text>
      <View style={styles.categoriesGrid}>
        {Object.keys(categoryIcons).map((category, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.categoryCard,
              selectedCategory === category && styles.selectedCategoryCard,
            ]}
            onPress={() => handleCategoryPress(category)}
          >
            {categoryIcons[category]}
            <Text style={styles.categoryText}>{category}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  categoriesGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  categoryCard: {
    width: '30%',
    alignItems: 'center',
    marginVertical: 10,
    padding: 15,
  },
  categoryText: {
    fontSize: 12,
    textAlign: 'center',
    marginTop: 15,
  },
  selectedCategoryCard: {
    borderWidth: 2,
    borderColor: '#2F7FEF',
    borderRadius: 15
  },
});

export default TopCategories;