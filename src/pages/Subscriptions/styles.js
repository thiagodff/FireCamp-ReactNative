import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  background: #f5f5f5;
`;

export const Header = styled.View`
  height: 60px;
  background: #fff;
  border-bottom-color: #ddd;
  border-bottom-width: 1px;
`;

export const Title = styled.Image`
  align-self: center;
  margin-top: 20px;
`;

export const SelectDate = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 20px 0;
`;

export const DateFormatted = styled.Text`
  font-weight: bold;
  font-size: 20px;
  color: #444;
  margin: 0 5px;
`;

export const PreviousDate = styled.TouchableOpacity``;

export const NextDate = styled.TouchableOpacity``;

export const List = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: { padding: 20, paddingTop: 0 },
})``;

export const WrapNoActivity = styled.View`
  display: flex;
  padding: 20px;
  justify-content: center;
  align-items: center;
  background: #fff;
  border-radius: 4px;
  margin: 0 20px;
`;

export const TextNoActivity = styled.Text`
  font-size: 18px;
  max-width: 280px;
  text-align: center;
  margin-top: 10px;
  color: #444;
`;
