import { FlatList, Text } from "react-native";
import { Stuff } from '../models/Stuff';
import TodoRow from "./TodoRow";


const Todo: React.FC<{ items: Stuff[] }> = (props): JSX.Element => {

    function addToDoCliked(item: Stuff): string {
        alert(`Add ${item} to do!`);

        return 'blabla';
    }

    return (
        <FlatList
            data={props.items}
            keyExtractor={(item: any, index: number) => item.id.toString()}
            renderItem={({ item }) => {
                return <TodoRow
                    onAddToDo={addToDoCliked}
                    value={item}
                />
            }}

        />
    )
}

export default Todo;