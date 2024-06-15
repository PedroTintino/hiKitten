import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      padding: 20,
    },
    title: {
      fontSize: 24,
      marginBottom: 10,
      marginTop: 20,
      fontFamily: 'Inconsolata'
    },
    scrollView: {
      marginBottom: 20,
    },
    imageContainer: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'center',
    },
    image: {
      width: 150,
      height: 150,
      margin: 10,
      borderRadius: 10,
    },
    btn:{
        backgroundColor: '#FFB6C1',
        width: '80%',
        padding: 10,
        borderRadius: 10
    },
    btnText: {
        textAlign: 'center', fontWeight: '600', color: 'white', fontSize: 16

    }
  });
  