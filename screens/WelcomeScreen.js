import React, { Component } from 'react';
import { View, Text, Dimensions, rgba, Image} from 'react-native';
import { connect } from 'react-redux';
import Swiper from 'react-native-swiper';
import firebase from 'firebase';
import { Button } from 'react-native-elements';
import { AppLoading } from 'expo';


class WelcomeScreen extends Component {

  static navigationOptions = {
    header: null
  };


  onButtonPress = (screenname) => {
    this.props.navigation.navigate(screenname);
  };



  render() {

    console.log('-------------------------------------');
    console.log("Welcome Screen: Render: App loading status display");

    return (
      <View style={styles.container}>
        <View style={{flex: 8}}>
          <Swiper style={styles.wrapper}
            dot={<View style={styles.dotstyle} />}
            activeDot={<View style={styles.activedotstyle} />}
            paginationStyle={{ bottom: 70 }}
          >
          <View style={styles.slide1}>
          <Text style={styles.headertext}> Highlight News 1</Text>
          <Text style={styles.text}> This is the first page</Text>
      </View>
      <View style={styles.slide2}>
          <Text style={styles.headertext}>ข่าวดี  ยึดระยะเวลา</Text>
          <Text style={styles.text}> This is the second page</Text>
      </View>
      <View style={styles.slide3}>
          <Text style={styles.headertext}> ข่าวประชาสัมพันธ์ </Text>
          <Text style={styles.text}> This is the third page</Text>
          <Image source={require('../img/news.png')} style={styles.image}/>
      </View>
      <View style={styles.slide4}>
          <Text style={styles.headertext}> คำถาม ? </Text>
          <Text style={styles.text}> This is the forth page</Text>
            </View>
          </Swiper>
        </View>
        <View style={styles.buttongroup}>
          <View style={styles.buttonStyle1}>
            <Button
              onPress={() => this.onButtonPress('login_scr')}
              backgroundColor="#003399"
              title="Login"
              color="#ffffff"
            />
          </View>
          <View style={styles.buttonStyle2}>
            <Button
              onPress={() => this.onButtonPress('register_scr')}
              backgroundColor="#f50"
              title="Register"
              color="#ffffff"
            />
          </View>
        </View>
      </View>

    );
  }
}


const styles = {
  image:{
    width:250,
    height:150,
    borderRadius:30
  },
  dotstyle: {
    backgroundColor: 'rgba(255,255,255,.3)',
    width: 10,
    height: 10,
    borderRadius: 7,
    marginLeft: 7,
    marginRight: 7
  },
  activedotstyle: {
    backgroundColor: '#fff',
    width: 10,
    height: 10,
    borderRadius: 7,
    marginLeft: 7,
    marginRight: 7
  },
  buttongroup: {
    flex: 1,
    flexDirection: 'row',
  },
  container: {
    flex: 1
  },
  buttonStyle1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#003399'
  },
  buttonStyle2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f50'
  },
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#003300'
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#bf360c'
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000063'
  },
  slide4: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#550026'
  },
  headertext: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
    margin: 20
  },
  text: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'normal',
    margin: 20
  }
}

export default WelcomeScreen;

