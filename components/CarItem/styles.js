import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      },
      
    carContainer: {
        width: '100%',
        height: '100%'
      },

      buttonContainer:{
        position: 'absolute',
        bottom: 50,
        width: '100%'
      },
    
      titles: {
        marginTop: '30%',
        width: '100%',
        alignItems: 'center',
      },
    
      title: {
        fontSize: 40,
        fontWeight: '500'
      },
    
      subTitle: {
        fontSize: 16,
        color: 'gray'
      },

      tagLineCTA: {
        textDecorationLine: 'underline'
      },
    
      image: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
        position: 'absolute'
      }
});

export default styles;