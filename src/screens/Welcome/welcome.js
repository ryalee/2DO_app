import { Image, StyleSheet, Text, TouchableOpacity, View, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Welcome() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Image source={require('../../assets/images/logo.png')} style={styles.logo}/>

        <Text style={styles.headerText}>Organize e gerencie suas tarefas com nossas ferramentas de produtividade</Text>
        <Text style={styles.headerText2}>Faça login para começar</Text>
      </View>

      <View style={styles.loginZone}>
        <TouchableOpacity 
          activeOpacity={0.7} 
          style={styles.loginButton} 
          onPress={ () => navigation.navigate('SignIn') }
        > 
          <Text style={styles.buttonText}>Acessar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
    backgroundColor: '#021024',
  },
  
  headerContainer: {
    backgroundColor: '#c1e8ff',
    paddingBottom: 40,
    borderBottomLeftRadius: 150,
    borderBottomRightRadius: 150,
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },

  logo: {
    width: 450,
    height: 450,
    marginTop: 40,
    marginBottom: 40,
    marginLeft: -10,
  },

  headerText: {
    marginTop: -10,
    color: '#000',
    fontSize: 22,
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    width: 300,
  },

  headerText2: {
    fontSize: 14,
    marginTop: 20,
    marginBottom: -10,
  },

  loginZone: {
    marginVertical: 600,
    alignItems: 'center',
    position: 'absolute',
    width: '100%',
  },

  loginButton: {
    backgroundColor: '#072d42',
    marginTop: 120,
    marginLeft: 20,
    paddingHorizontal: 80,
    paddingVertical: 20,
    borderRadius: 30,
    borderColor:'#c1e8ff',
    borderWidth: 1,
    marginLeft: 3,
  },

  buttonText: {
    color: '#fff',
    textAlign: 'center',
  },
});