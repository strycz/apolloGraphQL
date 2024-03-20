import { Button, FlatList, GestureResponderEvent, StyleSheet, Text, TextInput, View } from "react-native";
import { Stuff } from "../models/Stuff";
import { useRef, useState } from "react";

const TodoRow: React.FC<{ value: Stuff, onAddToDo?: (item: Stuff) => string }> = ({ value, onAddToDo }): JSX.Element => {

    const myRef = useRef<TextInput>(null);
    const [text, setText] = useState<string>("");
    const [stuff, setStuff] = useState<Stuff[]>([]);

    const printValue = (msg: string): void => {
        console.log("value" + msg)
        myRef.current?.focus();
    }

    function alertInput(): void {
        alert("Text Input Value:" + text);
    }

    function addMoreStuff(newStuff: Stuff): void {
        setStuff((prevState) => {
            return {
                ...prevState,
                newStuff
            }
        })
    }

    function kolejnaFunkcja(event: GestureResponderEvent): void {
        console.log("kolejnaFunkcja");

    }

    return (
        <View style={styles.row}>
            <Text>{value.b}</Text>
            <TextInput
                ref={myRef}
                style={styles.text}
                placeholder="enter text"
                onChangeText={(text) => {
                    printValue(text)
                    setText(text)
                }} />

            <View style={{ flex: 1, flexDirection: 'row' }}>
                <Button
                    color={"palevioletred"}
                    title="focus"
                    onPress={() => printValue(JSON.stringify(value.b))} />
                <Button
                    title="onAddToDo"
                    onPress={() => onAddToDo?.(value)} />
                <Button
                    title="kolejny button"
                    onPress={kolejnaFunkcja} />
            </View>
        </View>

    )
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 22
    },
    row: {
        backgroundColor: 'turquoise',
        margin: 4,
    },
    text: {
        borderWidth: 1, borderColor: 'black', height: 40, width: 100
    }
});

export default TodoRow;