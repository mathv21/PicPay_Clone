import React from 'react';
import {Feather, MaterialCommunityIcons, AntDesign} from '@expo/vector-icons'

import {
  Container,
  Header,
  Title,
  Card,
  CardHeader,
  Avatar, 
  Description,
  Bold,
  CardBody,
  Username,
  CardFooter,
  Details,
  Value,
  Divider,
  Date, 
  Actions, 
  Option,
  OptionLabel
} from './styles';

import avatar from '../../images/avatar.png';

export default function Activities(){

  return (
    <>
      <Container>
        <Header>
          <Title>Atividades</Title>
        </Header>
        <Card>
          <CardHeader>
            <Avatar source={avatar} />
            <Description>
              <Bold>Você</Bold> pagou a <Bold>@matheus</Bold>
            </Description>
          </CardHeader>

          <CardBody>
            <Username>Matheus Veríssimo</Username>
          </CardBody>

          <CardFooter>
            <Details>
              <Value>R$ 18,00</Value>

              <Divider />

              <Feather name="lock" color="#fff" size={14}/>
              <Date>Há 1 mês</Date>
            </Details>

            <Actions>
              <Option>
                <MaterialCommunityIcons name="comment-outline" size={14} color="#fff"  />
                <OptionLabel>0</OptionLabel>
              </Option>

              <Option>
                <AntDesign name="hearto" size={14} color="#fff"  />
                <OptionLabel>0</OptionLabel>
              </Option>
            </Actions>

          </CardFooter>
        </Card>
      </Container>
    </>
  )
}