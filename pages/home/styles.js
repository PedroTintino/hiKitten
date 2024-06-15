import TypeWriter from "@sucho/react-native-typewriter";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      display: 'flex',
      gap: 50
    },
    fontCustom:{
        fontFamily: 'Inconsolata', 
        fontSize: 46,
        color: '#FFB6C1',
        
    },
    introText: {
        fontWeight: '600'
    },
    introduction: {
        fontWeight: '600',
        padding: 20,
        fontStyle: 'italic'
    },
    btn:{
        backgroundColor: '#FFB6C1',
        width: '80%',
        padding: 10,
        borderRadius: 10
    },
    TypeWriter:{
        color: "#FFB6C1",
        fontFamily: 'Inconsolata', 
        fontSize: 24,
        marginTop: 20
    },
    image: {
        width: 100, 
        height: 100,
        position: 'relative',
        left: 140,
        top: 65
    }
  });