import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  SectionList,
  Modal,
} from "react-native";

// Updated eCommerce marketplace data
const sections = [
  {
    title: "Electronics",
    data: [
      {
        name: "Smartphone X500",
        seller: "TechStore",
        price: "$499",
        image: require("../../assets/smartphone.jpeg"),
      },
      {
        name: "Laptop Pro",
        seller: "BestBuy",
        price: "$899",
        image: require("../../assets/laptop.jpeg"),
      },
      {
        name: "Wireless Headphones",
        seller: "AudioWorld",
        price: "$199",
        image: require("../../assets/headphones.jpeg"),
      },
    ],
  },
  {
    title: "Fashion",
    data: [
      {
        name: "Summer Dress",
        seller: "TrendyWear",
        price: "$49.99",
        image: require("../../assets/dress.jpeg"),
      },
      {
        name: "Running Shoes",
        seller: "ShoeWorld",
        price: "$89.99",
        image: require("../../assets/shoes.jpeg"),
      },
      {
        name: "Jacket Collection",
        seller: "StyleHub",
        price: "$120",
        image: require("../../assets/jacket.jpeg"),
      },
    ],
  },
  {
    title: "Home & Furniture",
    data: [
      {
        name: "Sofa Set",
        seller: "HomeStore",
        price: "$599",
        image: require("../../assets/sofa.jpeg"),
      },
      {
        name: "Dining Table",
        seller: "FurniturePlus",
        price: "$299",
        image: require("../../assets/table.jpeg"),
      },
      {
        name: "LED Lamp",
        seller: "HomeLights",
        price: "$59.99",
        image: require("../../assets/lamp.jpeg"),
      },
    ],
  },
  {
    title: "Sports & Outdoors",
    data: [
      {
        name: "Cycling Gear",
        seller: "OutdoorStore",
        price: "$150",
        image: require("../../assets/cycle.jpeg"),
      },
      {
        name: "Camping Tent",
        seller: "CampingCo",
        price: "$99.99",
        image: require("../../assets/tent.jpeg"),
      },
      {
        name: "Yoga Mat",
        seller: "FitLife",
        price: "$29.99",
        image: require("../../assets/yogamat.jpeg"),
      },
    ],
  },
  {
    title: "Toys & Games",
    data: [
      {
        name: "Lego Set",
        seller: "ToyWorld",
        price: "$40",
        image: require("../../assets/lego.jpeg"),
      },
      {
        name: "Action Figure",
        seller: "KidsToys",
        price: "$20",
        image: require("../../assets/actionfigure.jpeg"),
      },
      {
        name: "Doll House",
        seller: "ToyHouse",
        price: "$60",
        image: require("../../assets/dollhouse.jpeg"),
      },
    ],
  },
];

export default function ProductDetailsScreen({ navigation }) {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);

  const toggleSidebar = () => setIsSidebarVisible(!isSidebarVisible);

  const openModal = (item) => {
    setSelectedItem(item);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
    setSelectedItem(null);
  };

  return (
    <View style={styles.container}>
      {/* Sidebar */}
      {isSidebarVisible && (
        <View style={styles.sidebar}>
          <TouchableOpacity onPress={toggleSidebar} style={styles.closeSidebar}>
            <Text style={styles.closeSidebarText}>×</Text>
          </TouchableOpacity>
          <Image
            source={require("../../assets/DMS.png")}
            style={styles.sidebarLogo}
          />
          <Text style={styles.sidebarItem}>
            <Image
              source={require("../../assets/home.png")}
              style={styles.sidebarIcon}
            />
            Home
          </Text>
          <Text style={styles.sidebarItem}>
            <Image
              source={require("../../assets/categories.png")}
              style={styles.sidebarIcon}
            />
            Categories
          </Text>
          <Text style={styles.sidebarItem}>
            <Image
              source={require("../../assets/star.png")}
              style={styles.sidebarIcon}
            />
            Favorites
          </Text>
          <Text style={styles.sidebarItem}>
            <Image
              source={require("../../assets/gear.png")}
              style={styles.sidebarIcon}
            />
            Settings
          </Text>
        </View>
      )}

      {/* Main Content */}
      <View style={styles.mainContent}>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity onPress={toggleSidebar}>
            <Image
              source={require("../../assets/menuPic.png")}
              style={styles.menuIcon}
            />
          </TouchableOpacity>
          <Text style={styles.titleText}>DMS Marketplace</Text>
        </View>

        {/* List */}
        <View style={styles.listContainer}>
          <SectionList
            sections={sections}
            keyExtractor={(item, index) => item.name + index}
            renderItem={({ item }) => (
              <TouchableOpacity
                onPress={() => openModal(item)}
                style={styles.itemContainer}
              >
                <View style={styles.itemTextContainer}>
                  <Text style={styles.itemText}>Product: {item.name}</Text>
                  <Text style={styles.itemText}>Seller: {item.seller}</Text>
                  <Text style={styles.itemText}>Price: {item.price}</Text>
                </View>
                <Image source={item.image} style={styles.image} />
              </TouchableOpacity>
            )}
            renderSectionHeader={({ section: { title } }) => (
              <Text style={styles.sectionHeader}>{title}</Text>
            )}
          />
        </View>

        {/* Footer */}
        <View style={styles.footer} />
      </View>

      {/* Modal */}
      {selectedItem && (
        <Modal
          visible={modalVisible}
          transparent={true}
          animationType="slide"
          onRequestClose={closeModal}
        >
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <Text style={styles.modalTitle}>{selectedItem.name}</Text>
              <Image source={selectedItem.image} style={styles.modalImage} />
              <Text style={styles.modalText}>Seller: {selectedItem.seller}</Text>
              <Text style={styles.modalText}>Price: {selectedItem.price}</Text>
              <TouchableOpacity
                onPress={() => {
                  closeModal();
                  navigation.navigate("productDetailScreen", {
                    name: selectedItem.name,
                    seller: selectedItem.seller,
                    price: selectedItem.price,
                    image: selectedItem.image,
                  });
                }}
                style={styles.detailsButton}
              >
                <Text style={styles.detailsButtonText}>View Product</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={closeModal} style={styles.closeButton}>
                <Text style={styles.closeButtonText}>Close</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#f5f5f5",
  },
  sidebar: {
    width: "60%",
    backgroundColor: "#6a5acd",
    padding: 20,
    position: "absolute",
    height: "100%",
    zIndex: 1,
  },
  closeSidebar: {
    alignSelf: "flex-end",
    padding: 5,
  },
  closeSidebarText: {
    fontSize: 24,
    color: "white",
  },
  sidebarLogo: {
    width: 100,
    height: 100,
    marginBottom: 30,
    alignSelf: "center",
  },
  sidebarIcon: {
    width: 15,
    height: 15,
    padding: 22,
    alignSelf: "center",
  },
  sidebarItem: {
    fontSize: 18,
    color: "white",
    marginVertical: 15,
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
  },
  mainContent: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  header: {
    flexDirection: "row",
    backgroundColor: "#6a5acd",
    alignItems: "center",
    paddingHorizontal: 10,
    paddingVertical: 15,
  },
  menuIcon: {
    width: 24,
    height: 24,
  },
  titleText: {
    fontSize: 20,
    color: "white",
    fontWeight: "bold",
    flex: 1,
    textAlign: "center",
  },
  listContainer: {
    flex: 1,
    paddingTop: 10,
  },
  sectionHeader: {
    fontSize: 18,
    fontWeight: "600",
    backgroundColor: "#6a5acd",
    color: "white",
    padding: 10,
    textAlign: "center",
    borderRadius: 5,
  },
  itemContainer: {
    flexDirection: "row",
    padding: 10,
    backgroundColor: "#dcdcdc",
    borderRadius: 8,
    marginVertical: 5,
    marginHorizontal: 10,
    alignItems: "center",
  },
  itemTextContainer: {
    flex: 1,
  },
  itemText: {
    fontSize: 16,
    color: "#333",
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 10,
  },
  footer: {
    height: 50,
    backgroundColor: "#6a5acd",
  },
  modalContainer: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    width: "80%",
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#6a5acd",
    marginBottom: 10,
  },
  modalImage: {
    width: 120,
    height: 120,
    borderRadius: 10,
    marginBottom: 15,
  },
  modalText: {
    fontSize: 16,
    color: "#333",
  },
  closeButton: {
    padding: 10,
    backgroundColor: "#6a5acd",
    borderRadius: 5,
  },
  closeButtonText: {
    color: "white",
    fontSize: 16,
  },
  detailsButton: {
    marginTop: 10,
    padding: 10,
    backgroundColor: "#4682b4",
    borderRadius: 5,
    marginBottom: 12,
  },
  detailsButtonText: {
    color: "white",
    fontSize: 16,
  },
});

