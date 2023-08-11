// ...

const HomeScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.container}>
      <ScrollView scrollEnabled={true}>
        <ChatListItem />
        <ChatInputComponent />
        <Modal
          transparent={true}
          visible={modalVisible}
        >
          <View style={styles.modalContainer}>
            <ChatRequest />
            <TouchableOpacity
              style={styles.button}
              onPress={() => setModalVisible(false)} // Close the modal
            >
              <Text style={styles.buttonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </Modal>
      </ScrollView>
    </View>
  );
}

// ...
