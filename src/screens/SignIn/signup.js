import { useState } from 'react';
import { TextInput, View, Button, StyleSheet, Image, Text, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function SignUp({ onSignUp }) {
  const navigation = useNavigation();

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = () => {
    if (!username || !password) {
      alert('Por favor, preencha todos os campos.');
      return;
    }

    onSignUp({username, password});
  }

  return (
    <View style={styles.container}>
      <StatusBar style='light'/>

      <TouchableOpacity activeOpacity={0.7} onPress={ () => navigation.navigate('SignIn') }>
          <FontAwesome name='arrow-left' color={'#fff'} size={30} style={styles.backScreen}/>
      </TouchableOpacity>

      <View style={styles.loginContainer}>
        <Text style={styles.loginTitle}>Faça seu cadastro!</Text>

        <TextInput
          placeholder='Nome de Usuário'
          placeholderTextColor={'#fff'}
          value={username}
          onChangeText={setUsername}
          style={styles.input}
        />

        <TextInput
          placeholder='Email'
          placeholderTextColor={'#fff'}
          value={email}
          onChangeText={setEmail}
          textContentType='emailAddress'
          style={styles.input}
        />

        <TextInput
          placeholder='Senha'
          placeholderTextColor={'#fff'}
          secureTextEntry
          value={password}
          onChangeText={setPassword}
          style={styles.input}
        />

        <Button title='Criar Conta' onPress={handleSignUp}/>
      </View>

      <View style={styles.otherLogin}>
          <Text style={styles.otherLoginTitle}>Ou entre com:</Text>
          
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
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#021024',
  },

  backScreen: {
    position: 'absolute',
    marginTop: 60,
    marginLeft: 20,
    borderWidth: 1,
    borderColor: '#fff',
    padding: 10,
    paddingHorizontal: 12,
    borderRadius: 50,
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
    marginTop: 400,
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

  otherLogin: {
    alignItems: 'center',
  },  
  
  otherLoginContainer: {
    flexDirection: 'row',
    width: 260,
    justifyContent: 'space-around',
    position: 'absolute',
    marginTop: 280,
  },

  otherLoginTitle: {
    color: '#fff',
    marginTop: 620,
  },
  
  otherButton: {
    marginTop: 380,
    padding: 10,
    borderRadius: 50,
  },
  
  otherLoginImg: {
    width: 50,
    height: 50,
  },
});