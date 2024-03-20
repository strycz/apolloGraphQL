import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Button, View } from "react-native";
import { MyStackParamsList } from "../navigation/navigators";
import { Stuff } from '../screens/Home'; 

import { PropsWithChildren } from 'react';

interface MyComponentProps extends PropsWithChildren<{}> {
  items: Stuff[];
}

interface MyNodeComponentProps {
    children: React.ReactNode;
    items: Stuff[];
}

interface Proppp {
    name: string,
    age: number,
    addMember: (name: string, age: number) => void
}


// const TodoChildren: React.FC<{ children?: React.ReactNode }> = ({ children }): JSX.Element => {
    // (props: MyStackParamsList & { route: any }):
const TodoChildren = (props: MyNodeComponentProps ): JSX.Element => {
// const TodoChildren = (children: React.ReactNode, items: Stuff[] ): JSX.Element => {

    const navigation = useNavigation<NativeStackNavigationProp<MyStackParamsList>>();


    return (
        <View style={{ backgroundColor: 'blue' }}>
            {props.children}
            <Button
                title="Click me"
                onPress={() => navigation.navigate('Dashboard')}
            />
        </View>
    )
}

export default TodoChildren;