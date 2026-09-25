import { StatusBar, View, Text, StyleSheet} from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { Header } from './src/components/Header';
import { WaterProgress } from './src/components/WaterProgress';
import { Buttons } from './src/components/ActionButtons';




export default function App(){
  const GOAL = 2000
 
  
  return(
    <SafeAreaProvider>
      <SafeAreaView> 
      <StatusBar barStyle={'auto'}/>
      <View>

        <Header goal={GOAL}/>
        <WaterProgress consumed={200} goal={GOAL}/>
        <Buttons/>

      </View>
      </SafeAreaView>
    </SafeAreaProvider>
  )
}
