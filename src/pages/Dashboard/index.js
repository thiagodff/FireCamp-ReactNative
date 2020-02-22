import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Activity from '~/components/Activity';

import {
  Container,
  Header,
  Title,
  List,
  SelectDate,
  DateFormatted,
  PreviousDate,
  NextDate,
  WrapNoActivity,
  TextNoActivity,
} from './styles';

import logo2 from '~/assets/logo2.png';

const data = [1];

export default function Dashboard() {
  return (
    <Container>
      <Header>
        <Title source={logo2} />
      </Header>

      <SelectDate>
        <PreviousDate>
          <Icon name="navigate-before" size={30} color="#444" />
        </PreviousDate>
        <DateFormatted>26 de Junho</DateFormatted>
        <NextDate>
          <Icon name="navigate-next" size={30} color="#444" />
        </NextDate>
      </SelectDate>

      {data.length > 0 ? (
        <List
          data={data}
          keyExtractor={item => String(item)}
          renderItem={({ item }) => <Activity data={item} />}
        />
      ) : (
        <WrapNoActivity>
          <Icon name="event-busy" size={60} color="#444" />
          <TextNoActivity>
            Parece que não temos atividades para esse dia
          </TextNoActivity>
        </WrapNoActivity>
      )}
    </Container>
  );
}

Dashboard.navigationOptions = {
  tabBarLabel: 'Atividades',
  tabBarIcon: ({ tintColor }) => (
    <Icon name="add" size={20} color={tintColor} />
  ),
};
