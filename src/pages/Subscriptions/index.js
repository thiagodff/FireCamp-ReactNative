import React, { useEffect, useState, useMemo } from 'react';
import { format, subDays, addDays } from 'date-fns';
import pt from 'date-fns/locale/pt';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Alert } from 'react-native';
import api from '~/services/api';

import Subscribed from '~/components/Subscribed';

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

export default function Subscriptions() {
  const [activities, setActivities] = useState([]);
  const [updateActivity, setUpdateActivity] = useState(false);
  const [date, setDate] = useState(new Date());

  const dateFormatted = useMemo(
    () => format(date, "d 'de' MMMM", { locale: pt }),
    [date]
  );

  useEffect(() => {
    async function loadActivities() {
      const response = await api.get('subscriptions', {
        params: { date },
      });

      setActivities(response.data);
    }

    loadActivities();
  }, [date, updateActivity]);

  function handlePrevDay() {
    setDate(subDays(date, 1));
  }

  function handleNextDay() {
    setDate(addDays(date, 1));
  }

  async function handleUnsubscribe(id) {
    try {
      await api.delete(`subscriptions/${id}`);

      setUpdateActivity(!updateActivity);
    } catch (err) {
      Alert.alert(
        'Erro ao cadastrar',
        'Ocorreu um erro ao se inscrever na atividade'
      );
    }
  }

  return (
    <Container>
      <Header>
        <Title source={logo2} />
      </Header>

      <SelectDate>
        <PreviousDate onPress={handlePrevDay}>
          <Icon name="navigate-before" size={30} color="#444" />
        </PreviousDate>
        <DateFormatted>{dateFormatted}</DateFormatted>
        <NextDate onPress={handleNextDay}>
          <Icon name="navigate-next" size={30} color="#444" />
        </NextDate>
      </SelectDate>

      {activities.length > 0 ? (
        <List
          data={activities}
          keyExtractor={item => String(item.id)}
          renderItem={({ item }) => (
            <Subscribed
              onUnsubscribe={() => handleUnsubscribe(item.id)}
              data={{ id: item.id, ...item.activity }}
            />
          )}
        />
      ) : (
        <WrapNoActivity>
          <Icon name="event-busy" size={60} color="#444" />
          <TextNoActivity>
            Parece que não temos atividades marcadas para esse dia
          </TextNoActivity>
        </WrapNoActivity>
      )}
    </Container>
  );
}

Subscriptions.navigationOptions = {
  tabBarLabel: 'Inscrições',
  tabBarIcon: ({ tintColor }) => (
    <Icon name="event-note" size={20} color={tintColor} />
  ),
};
