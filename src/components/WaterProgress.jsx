import { View, Text, StyleSheet } from "react-native";
import COLORS from "../constants/colors";


export function WaterProgress({ consumed, goal}) {

  const  porcentagem = Math.min(Math.round((consumed/goal)*100), 100)

  return (

    <View style={styles.container}>

      <Text style={styles.title}    > Você bebeu {consumed}ml de água hoje. </Text>
      <Text style={styles.subtitle} > Você atingiu {porcentagem}% da Meta               </Text>

      {/* {BARRA AZUL} */}
      <View style={{width:'100%', height:'30', backgroundColor:'red', borderRadius:20}}>
            <View style={{height:'100%', backgroundColor:'green', width:`${porcentagem}`}} />
      </View>

    </View>

  )
}

const styles = StyleSheet.create({

  container: {
    alignItems: 'center',
    padding: 20,
  },

  title: {
    color: COLORS.primary ,
  },

  subtitle: {
    
  },

})