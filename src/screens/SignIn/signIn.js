import { View, Text, TextInput, Button, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';

export default function SignIn({ users, onLogin }) {
  const navigation = useNavigation();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
 
  const handleLogin = () => {
    if(!username || !password) {
      alert('Por favor, preencha todos os campos.');
      return;
    }

    const user = users.find((user) => username === username && user.password === password );
    if (user) {
      onLogin(user);
    } else {
      alert('Credenciais inválidas. Tente novamente.');
    }
  };
 
  return (
    <View style={styles.container}>
      <StatusBar style='light'/>

      <View style={styles.loginContainer}>
        <Text style={styles.loginTitle}>Faça seu login!</Text> 

        <TextInput
          placeholder='Nome de Usuário'
          placeholderTextColor={'#ccc'}
          value={username}
          onChangeText={setUsername}
          style={styles.input}
        />
        <TextInput
          placeholder='Senha'
          placeholderTextColor={'#ccc'}
          secureTextEntry
          value={password}
          onChangeText={setPassword}
          style={styles.input}
        />

        <TouchableOpacity style={styles.buttonLogin} onPress={handleLogin}>
          <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>

        <View style={styles.signUpZone}>
          <Text style={styles.signUpText}>Ainda não possui uma conta?</Text>

          <TouchableOpacity style={styles.buttonSignUp}>
            <Text style={styles.newAccount} onPress={ () => navigation.navigate('SignUp') }>Crie Já!</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.otherLogin}>
          <Text style={styles.otherLoginTitle}>Ou faça login com:</Text>
          
          <View style={styles.otherLoginContainer}>
            <TouchableOpacity style={styles.otherButton}>
              <Image source={require('../../assets/images/google-logo.png')} style={styles.otherLoginImg}/>
            </TouchableOpacity>

            <TouchableOpacity style={styles.otherButton}>
              <Image source={require('../../assets/images/facebook-logo.png')} style={styles.otherLoginImg}/>
            </TouchableOpacity>

            <TouchableOpacity style={styles.otherButton}>
              <Image source={require('../../assets/images/twitter-logo.png')} style={styles.otherLoginImg}/>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#021024',
  },

  loginTitle: {
    fontSize: 42,
    color: '#fff',
    position: 'absolute',
    marginTop: -300,
    textAlign: 'center',
    width: 230,
  },

  loginContainer: {
    position: 'absolute',
    marginTop: 380,
    marginLeft: 115,
    gap: 20,
  },

  input: {
    color: '#fff',
    borderBottomColor: '#fff',
    borderBottomWidth: 1,
    borderLeftColor: '#fff',
    borderLeftWidth: 1,
    width: 230,
    paddingBottom: 6,
    paddingLeft: 7,
  },

  buttonLogin: {
    backgroundColor: '#2b8cc8',
    padding: 12,
    alignItems: 'center',
  },

  buttonText: {
    color: '#fff',
  },

  signUpZone: {
    flexDirection: 'row'
  },

  signUpText: {
    color: '#ccc',
    fontSize: 13,
  },

  newAccount: {
    color: '#2b8cc8',
    marginLeft: 6,
    fontSize: 13,
    textDecorationColor: '#fff',
    textDecorationLine: 'underline',
  },

  otherLogin: {
    alignItems: 'center',
  },  
  
  otherLoginContainer: {
    flexDirection: 'row',
    width: 260,
    justifyContent: 'space-around',
    position: 'absolute',
  },

  otherLoginTitle: {
    color: '#fff',
  },
  
  otherButton: {
    marginTop: 20,
    padding: 10,
    borderRadius: 50,
  },
  
  otherLoginImg: {
    width: 50,
    height: 50,
  },
});