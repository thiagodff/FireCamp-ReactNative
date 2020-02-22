import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  background: #fff;
  border-radius: 4px;
  display: flex;
  margin-bottom: 15px;

  opacity: ${props => (props.past ? 0.6 : 1)};
`;

export const Banner = styled.Image`
  height: 150px;
  width: 100%;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
`;

export const Info = styled.View`
  display: flex;
  margin: 15px;
`;

export const Title = styled.Text`
  font-size: 22px;
  font-weight: bold;
  color: #333;
  margin-bottom: 5px;
`;

export const Date = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 5px 0;
`;

export const DateText = styled.Text`
  font-size: 15px;
  margin-left: 5px;
  color: #444;
`;

export const Locale = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 5px 0;
`;

export const LocaleText = styled.Text`
  font-size: 15px;
  margin-left: 5px;
  color: #444;
`;

export const Instructor = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 5px 0;
`;

export const InstructorText = styled.Text`
  font-size: 15px;
  margin-left: 5px;
  color: #444;
`;

export const SubscribreButton = styled(RectButton)`
  background: #d44059;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 42px;
  margin-top: 5px;
`;

export const TextButton = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 17px;
`;
