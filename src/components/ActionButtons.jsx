import { View, Text, StyleSheet, Pressable } from "react-native";
import COLORS from "../constants/colors";
import { useState } from "react";


export function Buttons({ }) {

    const [goal, setGoal] = useState(0)

    const botao1 = () => {
        setGoal(goal + 250);
    };

    return (

        <View style={styles.container}>

            <Text>Adicionar consumo</Text>

            <Pressable style={styles.button}>

                onPress={botao1}
                <Text>+ 250 ml</Text>

            </Pressable>

            <Pressable style={styles.button}>

                onPress={botao1}
                <Text>+ 350 ml</Text>

            </Pressable>

            <Pressable style={styles.button}>

                onPress={botao1}
                <Text>+ 500 ml</Text>

            </Pressable>


        </View>

    )
}

const styles = StyleSheet.create({

    container: {
        display: 'flex',
        alignItems: 'center',
        marginBottom: 24,
        flexDirection: 'column',
    },

    button: {
        backgroundColor: COLORS?.primary || "#2196F3",
        paddingVertical: 10,
        paddingHorizontal: 16,
        borderRadius: 8,
        elevation: 2, // Sombra no Android
        shadowColor: "#f8f6f6", // Sombra no iOS
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
    },

})



