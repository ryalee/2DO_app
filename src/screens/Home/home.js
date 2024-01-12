import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { FontAwesome, AntDesign, Entypo, Ionicons } from '@expo/vector-icons'
import CalendarScreen from '../Calendar/calendar';

export default function Home() {
 return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Olá, -nomeusuario-!</Text>

        <TouchableOpacity activeOpacity={0.7}>
          <FontAwesome name='user' color={'#c1e8ff'} size={30} style={styles.userIcon}/>
        </TouchableOpacity>
      </View>

      <View style={styles.mainContent}>
        <Text style={styles.toolsTitle}>Ferramentas</Text>
        <View style={styles.divisor}></View>

        <View style={styles.rowActions}>
          <TouchableOpacity activeOpacity={0.7} style={styles.stats}>
            <Text style={styles.statsTitle}>Estatísticas</Text>
            <Text style={styles.statsText}>Veja como está seu desempenho em seus hábitos.</Text>

            <Entypo name='circular-graph' color={'#c1e8ff'} size={60} style={styles.statsIcon}/>
          </TouchableOpacity>

          <TouchableOpacity activeOpacity={0.7} style={styles.journal}>
            <Text style={styles.journalTitle}>Diário</Text>
            <Text style={styles.journalText}>Um espaço para anotar como foi seu dia, ideias, etc.</Text> 

            <AntDesign name='book' color={'#c1e8ff'} size={60} style={styles.journalIcon}/>
          </TouchableOpacity>

          <TouchableOpacity activeOpacity={0.7} style={styles.timer}>
            <Text style={styles.timerTitle}>Pomodoro</Text>
            <Text style={styles.timerText}>Gerencie seu tempo e mantenha-se produtivo</Text>

            <Ionicons name='timer-outline' color={'#c1e8ff'} size={60} style={styles.timerIcon}/>
          </TouchableOpacity>
        </View>

        <View>
          <View style={styles.divisorCalendar}></View>
          <Text style={styles.calendarTitle}>Planejamento Mensal</Text>
          <CalendarScreen/>
        </View>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
    backgroundColor: '#021024',
  },
  
  header: {
    backgroundColor: '#072d42',
    paddingVertical: 80,
    paddingHorizontal: 30,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },

  headerTitle: {
    color: '#fff',
    fontSize: 20,
    marginTop: 10,
  },

  userIcon: {
    position: 'absolute',
    textAlign: 'center',
    marginLeft: 340,
    marginTop: -34,
    borderWidth: 2, 
    borderRadius: 30,
    borderColor: '#c1e8ff',
    height: 50,
    width: 50,
    paddingVertical: 9,
  },

  toolsTitle: {
    marginTop: 20,
    marginLeft: 20,
    color: '#fff',
    fontSize: 18,
  },

  divisor:{
    height: 2,
    backgroundColor: '#c1e8ff',
    width: 320,
    marginLeft: 140,
    marginTop: -10,
    marginBottom: 20,
  },

  rowActions: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },

  stats: {
    backgroundColor: '#072d42',
    padding: 40, 
    width: 130,
    height: 160,
    marginVertical: 30,
    borderRadius: 20,
  },

  statsTitle: {
    color: '#fff',
    marginVertical: -26,
    marginHorizontal: -20,
    fontWeight: 'bold',
    fontSize: 14,
  },

  statsText: {
    color: '#fff',
    position: 'absolute',
    width: 100,
    marginTop: 35,
    marginLeft: 20,
    fontSize: 10,
  },

  statsIcon: {
    marginTop: 80,
    marginLeft: 36,
    position: 'absolute',
    width: 60,
  },

  journal: {
    backgroundColor: '#072d42',
    width: 130,
    height: 160,
    padding: 40,
    marginVertical: 30,
    borderRadius: 20,
  },
  
  journalTitle: {
    color: '#fff',
    marginVertical: -26,
    marginHorizontal: -20,
    fontWeight: 'bold',
    fontSize: 14,
  },
  
  journalText: {
    color: '#fff',
    position: 'absolute',
    width: 100,
    marginTop: 35,
    marginLeft: 20,
    fontSize: 10,
  },
  
  journalIcon: {
    marginTop: 80,
    marginLeft: 36,
    position: 'absolute',
    width: 60,
  },

  timer: {
    backgroundColor: '#072d42',
    width: 130,
    height: 160,
    padding: 40,
    marginVertical: 30,
    borderRadius: 20,
  },

  timerTitle: {
    color: '#fff',
    marginVertical: -26,
    marginHorizontal: -20,
    fontWeight: 'bold',
    fontSize: 14,
  },

  timerText: {
    color: '#fff',
    position: 'absolute',
    width: 100,
    marginTop: 35,
    marginLeft: 20,
    fontSize: 10,
  },

  timerIcon: {
    marginTop: 80,
    marginLeft: 36,
    position: 'absolute',
    width: 60,
  },

  divisorCalendar: {
    height: 2,
    backgroundColor: '#c1e8ff',
    width: 245,
    marginTop: 30,
  },

  calendarTitle: {
    color: '#fff',
    marginTop: -15,
    marginBottom: 40,
    marginLeft: 260,
    fontSize: 18,
  },
})