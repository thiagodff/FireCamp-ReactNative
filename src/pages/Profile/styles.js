import styled from 'styled-components/native';

import Input from '~/components/Input';
import Button from '~/components/Button';

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

export const TitleHeader = styled.Image`
  align-self: center;
  margin-top: 20px;
`;

export const Title = styled.Text`
  font-weight: bold;
  font-size: 20px;
  color: #444;
  margin: 20px 0;
  align-self: center;
`;

export const Separator = styled.View`
  height: 1px;
  background: rgba(0, 0, 0, 0.2);
  margin: 10px 0 20px;
`;

export const Form = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: { padding: 20, paddingTop: 0 },
})`
  align-self: stretch;
`;

export const FormInput = styled(Input)`
  margin-bottom: 10px;
`;

export const SubmitButton = styled(Button)`
  margin-top: 5px;
`;

export const LogoutButton = styled(Button)`
  margin-top: 10px;
  background: #d44059;
`;
