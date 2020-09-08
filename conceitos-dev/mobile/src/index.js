import React, { useEffect, useState } from 'react';
import api from './services/api';

import { SafeAreaView, FlatList, Text, StyleSheet, StatusBar, TouchableOpacity } from 'react-native';

export default function App() {

  const [projects, setProjects] = useState([]);

  useEffect(() => {
    api.get('projects').then(response => {
      console.log(response.data);
      setProjects(response.data);
    });
  },[]);

  async function handleAddProject() {
    const newProject = {
      title: "Projeto de uma plataforma educacional",
      owner: "Grau T"
    };
    const response = await api.post('projects', newProject);

    setProjects([...projects, newProject]);
  }

  return(
    <>
    <StatusBar barStyle="ligh-content" backgroundColor="#6A5FBD"/>
    
    <SafeAreaView style={styles.container}                                                                                                                                                                                                                                                        
>
    <FlatList
      data={projects}
      keyExtractor={project => project.id}
      renderItem={({ item: project }) => (
        <Text style={styles.project}>{project.title}</Text>
      )}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                
    />

    <TouchableOpacity 
      style={styles.button} 
      onPress={handleAddProject}>
      <Text style={styles.buttonText}>Adicionar projeto</Text>
    </TouchableOpacity>

    </SafeAreaView>
    {/* <View style={styles.container}>
      {projects.map(project => {
        return(
          <Text style={styles.project} key={project.id}>{project.title}</Text>
        )
      })}
    </View> */}
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#6A5FBD',
  },
  project: {
    color: '#eee',
    fontSize: 32,
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: '#eee',
    margin: 20,
    height: 50,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 24,
    fontWeight: 'bold',
  }
})