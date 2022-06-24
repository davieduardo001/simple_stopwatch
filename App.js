import React, { Component } from "react";
import { View, Image, StyleSheet, Text, TouchableOpacity, Alert} from "react-native";

export default class App extends Component{

  constructor(props){
    super(props)
    this.state = {
      seconds: 0,
      lap: '',
      hideLaps: 0 //40
    }
    this.interval = 0
  }

  ligar(){
    this.interval = setInterval(() => { 
      this.setState({ seconds: this.state.seconds + 1 })
    }, 1000);
  }

  parar(){
    this.setState({
      hideLaps: 40,
      lap: `${this.state.seconds}s`,
      seconds: clearInterval(this.interval),
      seconds: this.state.seconds = 0

    })
  }

  render(){
    return(
      <View style={styles.container}>
        {/* IMAGE */}
        <Image style={styles.img} source={require('./src/imgs/icon.jpg')}/>

        {/* DISPLAY */}
        <Text style={styles.timer}>{this.state.seconds}.s</Text>

        {/* BUTTONS */}
        <View style={styles.buttonsContainer}>
          <TouchableOpacity style={styles.button} onPress={() => this.ligar()}>
            <Text style={styles.textButton}>LIGAR</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.buttonStop} onPress={() => this.parar()}>
            <Text style={styles.textButton}>PARAR</Text>
          </TouchableOpacity>
        </View>

        {/* LAP */}
        <View style={{
          height: this.state.hideLaps,
          marginTop: 15,
        }}>
          <Text style={styles.lapText}>ULTIMA VOLTA: {this.state.lap}</Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  img:{
    width: 200,
    height: 200,
    borderRadius: 10,
    marginBottom: 40
  },

  timer:{
    color: 'white',
    fontSize: 50,
  },

  container:{
    alignItems:'center', 
    height:'100%', 
    paddingTop: 30
  },

  buttonsContainer:{
    flexDirection:'row',
    marginTop: 30
  },

  button:{
    backgroundColor: 'olive',
    padding: 8,
    borderRadius: 10,
    marginHorizontal: 20
  },

  buttonStop:{
    backgroundColor: '#8b0000',
    padding: 8,
    borderRadius: 10,
    marginHorizontal: 20
  },

  textButton:{
    fontSize: 20
  },

  lapText:{
    fontSize: 20,
    color: 'white'
  }
})