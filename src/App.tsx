import { useState } from 'react';
import * as C from './App.styles';
import { Item } from './Types/Item';
import { ListItem } from './componets/ListItem/index';
import { AddArea } from './componets/AddArea';

const App = () => {
  
  const [list, setList] = useState<Item[]>([
    {id: 1, name: 'Comprar pão', done: false},
    {id: 1, name: 'Comprar um pudim', done: true},
  ]);

  const handleAddTask = (taskName: string) => {
    let newList = [...list];
    newList.push({
      id: list.length + 1,
      name: taskName, 
      done: false
    });
    setList(newList);
  }
  const handleTaskChange = (id: number, done: boolean) => {
    let newList = [...list];
    for(let i in newList) {
      if(newList[i].id === id) {
        newList[i].done = done;
      }
    }
    setList(newList);
  }

  return(
    <C.Container>
      <C.Area>
        <C.Header>
          Lista de tarefas
        </C.Header>

        {/*AREA ADICIONAR NOVA TAREFA*/}
        <AddArea onEnter={handleAddTask} />

        {/*LISTA DE TAREFAS*/}
        {list.map((item, index)=>(
          <ListItem 
          key={index} 
          item={item}
          onChange={handleTaskChange}
          />
        ))}
      </C.Area>
    </C.Container>
  );
}
export default App;