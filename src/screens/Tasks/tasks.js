import { View, StyleSheet, Text, TouchableOpacity, FlatList } from 'react-native';
import { Ionicons, FontAwesome, FontAwesome5 } from '@expo/vector-icons' 

export default function Tasks() {
 return (
    <View style={styles.container}>
      <View style={styles.header}> 
        <Text style={styles.headerText}>Tarefas</Text>
      </View>

      <View>
        <View style={styles.tasksDisplayHeader}>
          <View style={styles.divisor}></View>

          <TouchableOpacity style={styles.addTask} activeOpacity={0.7}>
            <FontAwesome name='plus' color={'#072d42'} size={40} style={styles.addTaskIcon}/>
          </TouchableOpacity>
        </View>

        <FlatList  style={styles.tasksDisplay}>

        </FlatList>
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

  header: {
    backgroundColor: '#072d42',
    paddingVertical: 60,
    paddingHorizontal: 30,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },

  headerText: {
    color: '#fff',
    fontSize: 20,
    marginTop: 10,
  },

  tasksDisplayHeader: {
    marginTop: 20,
  },

  divisor: {
    backgroundColor: '#c1e8ff',
    height: 2,
    width: 380,
    marginTop: 30,
  },

  addTaskIcon: {
    marginLeft: 400,
    marginTop: -26,
    backgroundColor: '#c1e8ff',
    height: 50,
    width: 50,
    textAlign: 'center',
    borderRadius: 30,
    padding: 6,
  },

  tasksDisplay: {
    backgroundColor: '#072d42',
    height: 650,
    width: 430,
    borderRadius: 20,
    marginTop: 20,
    marginLeft: 15,
  },
})