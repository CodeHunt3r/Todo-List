import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import Task from './components/TaskComponent';

export default function App() {
  return (
    <View style={styles.container}>
    
    {/* Todays Task */}
    <View style={styles.tasksWrapper}>
      <Text style={styles.sectionTitle}>Today's tasks</Text>
      <View style={styles.items}>
        {/* This is where the Tasks will go */}
        <Task text={'Task 1 '}/>
        <Task text={'Task 2 '}/>
      </View>

    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
  },
  tasksWrapper: {
    paddingTop: 80,
    paddingHorizontal:20,
  },
  sectionTitle:{
    fontSize:24,
    fontWeight: 'bold',
  },
  items:{
    marginTop: 30
  },
});
