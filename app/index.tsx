import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import Colors from '@/constants/Colors';
import { StatusBar } from "expo-status-bar";
import { FilterOptions, TASKS } from '@/constants/tasks';
import Header from '@/components/Header';
import DateSelector from '@/components/DateSelector';
import FilterTabs from '@/components/FilterTabs';
import TaskCard from '@/components/TaskCard';


const index = () => {

  const insets = useSafeAreaInsets();
  const [selectedFilter, setSelectedFilter] = useState<FilterOptions>("All");

  const filteredTasks = selectedFilter === "All"
    ? TASKS
    : TASKS.filter((task) => task.status === selectedFilter);

  return (
    <View style={[ styles.container, { paddingTop: insets.top }]}>
      <StatusBar style="light" />
      
      <FlatList 
      data={filteredTasks}
      keyExtractor={(item) => item.id}
      renderItem={({item}) => <TaskCard task={item} />}
      ListHeaderComponent={
        <>
        {/* header */}
        <Header />
        <DateSelector />
        <FilterTabs  selected={selectedFilter} onSelect={setSelectedFilter}/>
        </>
      }
      contentContainerStyle={styles.list}
      showsVerticalScrollIndicator={false}
      />
    </View>
  )
}

export default index

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: Colors.background,
  },
  list: {
    padding: 20,
  }
})