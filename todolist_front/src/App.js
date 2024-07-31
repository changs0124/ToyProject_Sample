import { Global } from '@emotion/react';
import './App.css';
import { reset } from "./styles/global";
import MainLayout from './components/MainLayout/MainLayout';
import Header from './components/Header/Header';
import MainContainer from './components/MainContainer/MainContainer';
import LoginHook from './hooks/LoginHook';
import SelectDate from './components/SelectDate/SelectDate';
import Todolist from './components/Todolist/Todolist';
import ClearedTodolist from './components/ClearedTodolist/ClearedTodolist';

function App() {
  LoginHook();
  return (
    <>
      <Global styles={reset}/>
        <MainLayout>
          <Header />
          <SelectDate />
          <MainContainer>
            <Todolist />
            <ClearedTodolist />
          </MainContainer>
        </MainLayout>
    </>
  );
}

export default App;
