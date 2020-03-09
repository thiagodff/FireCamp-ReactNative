import React, { useMemo } from 'react';
import { format, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { IP_ADDRESS } from 'react-native-dotenv';

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

export default function Activity({ data, onUnsubscribe }) {
  const dateFormatted = useMemo(() => {
    return format(parseISO(data.date), "d 'de' MMMM', às' HH:mm'h'", {
      locale: pt,
    });
  }, [data.date]);

  return (
    <Container past={data.past}>
      <Banner
        source={{
          uri: data.banner.url.replace('localhost', IP_ADDRESS),
        }}
      />

      <Info>
        <Title>{data.title}</Title>
        <Date>
          <Icon name="event" size={15} color="#444" />
          <DateText>{dateFormatted}</DateText>
        </Date>
        <Locale>
          <Icon name="location-on" size={15} color="#444" />
          <LocaleText>{data.location}</LocaleText>
        </Locale>
        <Instructor>
          <Icon name="person-outline" size={15} color="#444" />
          <InstructorText>{data.instructor.name}</InstructorText>
        </Instructor>

        <SubscribreButton onPress={onUnsubscribe} enabled={!data.past}>
          <TextButton>Cancelar inscrição</TextButton>
        </SubscribreButton>
      </Info>
    </Container>
  );
}
