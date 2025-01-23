import React from "react";
import { View, Text, Dimensions } from "react-native";
import { LineChart } from "react-native-chart-kit";

const screenWidth = Dimensions.get("window").width;

const CustomerSatisfactionChart = () => {
  return (
    <View style={{ padding: 10, backgroundColor: "#fff", borderRadius: 8 }}>
        <View style={{ flexDirection: "row", alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 20, marginBottom: 20 }}>
        <Text style={{ fontSize: 16, fontWeight: "bold", color: "#f7b800" }}>
            Customer Satisfaction
        </Text>
        <Text style={{ fontSize: 16, fontWeight: "light", color: "#999999" }}>
             (Average)
        </Text>
        </View>

      <LineChart
        data={{
          labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Agt"],
          datasets: [
            {
              data: [0.75, 1.5, 2.5, 4, 6, 7, 8, 9.5], // Example values
              color: (opacity = 1) => `rgba(255, 184, 0, ${opacity})`, // Line color
              strokeWidth: 2, // Thickness of the line
            },
          ],
        }}
        width={screenWidth - 32} // Width of the chart
        height={220}
        yAxisSuffix=""
        yAxisInterval={1} // Optional, defines the interval between vertical lines
        chartConfig={{
          backgroundGradientFrom: "#fff",
          backgroundGradientTo: "#fff",
          decimalPlaces: 1, // Number of decimal places
          color: (opacity = 1) => `rgba(255, 184, 0, ${opacity})`, // Line and point colors
          labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`, // Label colors
          style: {
            borderRadius: 8,
          },
          propsForDots: {
            r: "6", // Radius of dots
            strokeWidth: "1",
            stroke: "#fff",
          },
        }}
        // bezier // Makes the line smooth
        style={{
          marginVertical: 8,
          borderRadius: 8,
        }}
      />
    </View>
  );
};

export default CustomerSatisfactionChart;