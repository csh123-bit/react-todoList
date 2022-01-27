import logo from './logo.svg';
import './App.css';
import styled from "styled-components";

function App() {
  return (
    <Container>
      <Title>ToDo</Title>
      <form>
        <InputWrapper>
          <InputText placeholder="할 일을 입력해주세요" required/>
          <BtnSubmit>+</BtnSubmit>
        </InputWrapper>
      </form>
      <List>
        <Item>
          <label>
            <Checkbox type="checkbox"/>
            <Content>할일</Content>
          </label>
          <BtnDelete>X</BtnDelete>
        </Item>
        <Item>
          <label>
            <Checkbox type="checkbox" />
            <Content>할일</Content>
          </label>
          <BtnDelete>X</BtnDelete>
        </Item>
      </List>
    </Container>
  );
}

const Container = styled.div`
  margin: 0 auto;
  margin-top: 6rem;
  width:512px;
  background-color:grey;
  border-radius:5px;
  overflow:hidden;
`;
const Title = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
  height:4rem;
  font-size:1.5rem;
  font-family:sans-serif;
  color:white;
  background-color:#22b8cf;
`;
const InputWrapper = styled.div`
  display:flex;
  background-color:#495057;
`;
const InputText = styled.input`
  flex:1;
  padding:0.5rem;
  padding-left:1rem;
  font-size:1.125rem;
  background:none;
  border:none;
  outline:none;
  line-height:1.5;
  color:white;
  &::placeholder{
    color:#dee2e6;
  }
`;
const BtnSubmit = styled.button`
  padding-left: 1rem;
  padding-right:1rem;
  border:none;
  background:none;
  outline:none;
  color:white;
  cursor:pointer;
  background-color:#868e96;
  font-size:1.5rem;
  transition:0.1s background ease-in;
  &:hover{
    background:#adb5bd;
  }
`;
const List = styled.ul`
  
`;
const Item = styled.li`
  display:flex;
  padding:10px;
  label{
    flex:1;
    display:flex;
    align-items:center;
  }
  &+&{
    border-top:1px solid #efefef;
  }
`;
const Checkbox = styled.input`
  background:none;
  border:none;
  outline:none;
`;
const Content = styled.div`
  padding-left:0.5rem
`;
const BtnDelete = styled.div`
  border-radius:15px;
  background:none;
  border:none;
  outline:none;
`;

export default App;
