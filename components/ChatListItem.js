import { StyleSheet, Text, View } from 'react-native'
import React from 'react'


const ChatListItem = () => {
  return (
    <View style={styles.container}>
        <View style={styles.img} />
      <View style={styles.rightContent}>
        <View style={styles.topText}>
            <Text style={styles.contactName}>Serge</Text>
            <Text style={styles.time}>14:05</Text>

        </View>
        <View style={styles.bottomText}>
            <Text numberOfLines={1}style={styles.msg}>Hey, I was thinking we could go to the mall.Would you like to come?</Text>
            <View style={styles.counterContainer}>
                <Text style={styles.counter}>3</Text>
            </View>
        </View>

      </View>
    </View>
  )
}

export default ChatListItem

const styles = StyleSheet.create({
container: {
    height: 70,
    padding: 10,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center'
},
img: {
    height: 48,
    width: 48,
    borderRadius: 24,
    backgroundColor: '#FFF'
},
rightContent: {
    flex: 1,
    paddingVertical: 5,
    marginLeft: 10,
    justifyContent: 'space-evenly',
   
},
topText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 2
},
contactName: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#E6E6E6'
},
time: {
    fontSize: 11,
    color: '#FFF'
},
bottomText: {
    flexDirection: 'row',
    justifyContent: 'center'
},
msg: {
    color: '#CACACA',
    fontSize: 13,
    flex: 1
},
counterContainer: {
    height: 16,
    width: 16,
    borderRadius: 8,
    backgroundColor: '#FFF',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10
},
counter: {
    color: '#26394D',
    fontSize: 12 
}







})
