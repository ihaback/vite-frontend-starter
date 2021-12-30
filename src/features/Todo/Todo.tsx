import React, { PropsWithChildren, FormEvent } from 'react';
import styled from 'styled-components';

const Card = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.foreground};
  max-width: ${({ theme }) => theme.maxWidth};
  padding: ${({ theme }) => theme.gutter * 8}px ${({ theme }) => theme.gutter * 8}px
    ${({ theme }) => theme.gutter * 8}px ${({ theme }) => theme.gutter * 8}px;
  border-radius: ${({ theme }) => theme.borderRadius * 2}px;
  box-shadow: ${({ theme }) => theme.boxShadow};
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: ${props => props.theme.gutter * 5}px 0px 0px 0px;
  cursor: pointer;
`;

const Container = styled.div``;

const Content = styled.span``;

const Cross = styled.span``;

const InputField = styled.input`
  width: 100%;
  outline: none;
  font-size: 13px;
  padding-top: 12px;
  padding-bottom: 12px;
  padding-left: 10px;
  border: none;
  background: #f1f1f1;
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
`;

const Form = styled.form`
  display: flex;
`;

const Button = styled.button`
  background: palevioletred;
  color: #fff;
  border-top-right-radius: 3px;
  border-bottom-right-radius: 3px;
  border: 2px solid palevioletred;
  padding: 3px 16px;
  outline: none;
  cursor: pointer;
`;

const Item = ({
  value,
  handleDeleteTodo,
  testId,
}: PropsWithChildren<{
  value: string;
  handleDeleteTodo: () => void;
  testId: number;
}>) => (
    <Wrapper>
      <Content>{value}</Content>
      <Cross onClick={handleDeleteTodo} data-testid={`todoItem-${testId}`}>
        X
      </Cross>
    </Wrapper>
  )

const Input = ({
  handleAddTodo,
  handleChangeTodo,
  currentTodo,
}: PropsWithChildren<{ handleAddTodo: (e: FormEvent<HTMLFormElement>) => void; handleChangeTodo: (value: string) => void; currentTodo: string }>) => (
    <Form data-testid="todoWrapper" onSubmit={e => handleAddTodo(e)}>
      <InputField
        type="text"
        name="todo"
        value={currentTodo}
        onChange={e => handleChangeTodo(e.target.value)}
        data-testid="todoInput"
      />
      <Button data-testid="todoSubmitButton" type='submit'>
        Submit
      </Button>
    </Form>
  )

export default {
  Card,
  Container,
  Item,
  Input,
};
