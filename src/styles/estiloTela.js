import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
  },

  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
  },

  inner: {
    alignItems: 'center',
    width: '85%',
  },
  
  logo: {
    width: 255,
    height: 105,
    marginBottom: 30,
  },

  form: {
    width: '100%',
    marginBottom: 30,
  },

  label: {
    color: '#FDFFFD',
    marginBottom: 5,
    marginLeft: 10,
  },
  
  EntradaTexto: {            
            borderColor: '#D9D9D9',
            backgroundColor: '#D9D9D9',
            borderWidth: 1,
            borderRadius: 30,
            paddingHorizontal: 10,
            paddingVertical: 5,
            width: 300,           
          }

});