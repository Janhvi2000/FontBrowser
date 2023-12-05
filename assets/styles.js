import { StyleSheet } from 'react-native';
import { withSafeAreaInsets } from 'react-native-safe-area-context';


const styles = StyleSheet.create({
    container: {
      backgroundColor: '#ffffff',
      padding:10,
      flex: 1,
      alignContent:'center',
    },
    container2: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding:10,
      margin:20,
    },
    container1: {
      flexDirection: 'row',
    },
    input:{
      borderWidth: 1,
      borderColor: '#00AFB9',
      borderRadius: 10,
      padding: 10,
      marginVertical: 10,
      marginHorizontal:20,
      width: '90%',
      right: 0,
    },
    header: {
      fontSize: 18,
      fontWeight: 'bold',
      marginTop: 20,
      marginHorizontal: 20,
      color: '#00AFB9',
    },
    header1: {
      fontSize: 15,
      marginTop: 20,
      marginHorizontal: 20,
     textAlign: 'justify',
    },
    component: {
      borderColor: '#00AFB9',
      borderRadius: 10,
      width: '90%',
      borderWidth: 1,
      padding: 10,
      marginVertical: 20,
      marginHorizontal: 20,
    },
    table: {
      width: '90%',
      marginVertical: 20,
      marginHorizontal: 20,
      borderRadius: 10,
      borderWidth: 0,
      padding: 10,
      borderWidth: 1,
      borderColor: '#00AFB9',
    },
    row: {
      flexDirection: 'row',
    },
    charButton: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      fontSize: 50,
      overflow: 'hidden',
    },
    selectedChar: {
      marginTop: 20,
      fontSize: 16,
    },
    checkboxContainer: {
      flexDirection: 'row',
      marginRight: 10,
      right: 0,
      top: 0,
      marginTop: 20,
      alignSelf: 'flex-end',
      alignContent: 'flex-end',
    },
    checkbox: {
      alignSelf: 'center',
      marginLeft: 5,
      marginRight: 5,
    },
    customButton: {
      borderWidth: 0, 
      paddingVertical: 10,
      paddingHorizontal: 20,
    },
  });

  export default styles;