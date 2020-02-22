import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  Container,
  Banner,
  Info,
  Title,
  Date,
  DateText,
  Locale,
  LocaleText,
  Instructor,
  InstructorText,
  TextButton,
  SubscribreButton,
} from './styles';

export default function Activity() {
  return (
    <Container>
      <Banner
        source={{
          uri:
            'http://192.168.0.19:3333/files/e765332c08da43d1831953e0e93c2827.jpg',
        }}
      />

      <Info>
        <Title>Canoagem</Title>
        <Date>
          <Icon name="event" size={16} color="#444" />
          <DateText>26 de Junho, às 14h</DateText>
        </Date>
        <Locale>
          <Icon name="location-on" size={16} color="#444" />
          <LocaleText>Lagoa segura</LocaleText>
        </Locale>
        <Instructor>
          <Icon name="person-outline" size={16} color="#444" />
          <InstructorText>Bear Grylls</InstructorText>
        </Instructor>

        <SubscribreButton>
          <TextButton>Realizar Inscrição</TextButton>
        </SubscribreButton>
      </Info>
    </Container>
  );
}
