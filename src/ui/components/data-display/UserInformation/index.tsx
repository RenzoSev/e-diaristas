import React from 'react';
import {
  AvatarStyled,
  RatingStyled,
  UserDescription,
  UserInformationContainer,
  UserName,
} from './styles';

type UserInformationProps = {
  picture: string;
  name: string;
  rating: number;
  description?: string;
}

const UserInformation: React.FC<UserInformationProps> = ({
  name, picture, rating, description
}) => {
  return (
    <div>
      <UserInformationContainer>
        <AvatarStyled src={picture}>{name[0]}</AvatarStyled>
        <UserName>{name}</UserName>
        <RatingStyled readOnly value={rating} />
        <UserDescription>{description}</UserDescription>
      </UserInformationContainer>
    </div>
  );
};

export default UserInformation;
