import { View, Image } from "react-native";
import { FC } from "react";
import styled from "styled-components/native";

import { Tag } from "shared/components/Tag/Tag";
import { Caption_2, Title, Text, Caption_1 } from "shared/ui/Typography";
import { Colors } from "constants/Colors";

type PostCardProps = {
  user: any;
  title: string;
  tags: any[];
  description: string;
  type: string[];
  format: string;
  deadline: Date;
  isFavourite: boolean;
};

export const PostCardFull: FC<PostCardProps> = ({
  title,
  description,
  user,
  tags,
  type,
  format,
  deadline,
  isFavourite,
}) => {
  const handleFavorite = () => {
    alert("click");
  };
  return (
    <PostWrap>
      <Header>
        <HeaderInfo>
          {new Date(deadline) < new Date() ? (
            <IconCategory source={require("assets/images/closed.png")} />
          ) : null}
          {type.includes("work") ? (
            <IconCategory source={require("assets/images/work_active.png")} />
          ) : null}
          {type.includes("study") ? (
            <IconCategory source={require("assets/images/study_active.png")} />
          ) : null}
          {type.includes("event") ? (
            <IconCategory source={require("assets/images/event_active.png")} />
          ) : null}
          <Caption_2 style={{ marginLeft: 4 }}>{format}</Caption_2>
        </HeaderInfo>
        {isFavourite ? (
          <FavotiteIcon
            onPress={handleFavorite}
            source={require("assets/images/bookmark_active.png")}
          />
        ) : (
          <FavotiteIcon
            onPress={handleFavorite}
            source={require("assets/images/bookmark_unactive.png")}
          />
        )}
      </Header>
      <Title style={{ marginBottom: 12 }}>{title}</Title>
      <Tags>
        {tags.map((tag) => (
          <Tag style={{ marginRight: 4 }} text={tag.name} />
        ))}
      </Tags>
      <Text style={{ marginBottom: 24 }}>{description}</Text>
      <Footer>
        <UserInfo>
          <UserAvatar source={require("../../../assets/images/avatar.jpg")} />
          <Caption_1>{user.name}</Caption_1>
        </UserInfo>
        <View>
          <Caption_2 style={{ color: Colors.Main.Gray_1 }}>
            4 часа назад
          </Caption_2>
        </View>
      </Footer>
    </PostWrap>
  );
};

const PostWrap = styled.View`
  background-color: ${Colors.Main.White};
  padding: 12px;
  width: 100%;
  border-radius: 12px;
`;

const Header = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
`;

const HeaderInfo = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const IconCategory = styled.Image`
  width: 32px;
  height: 32px;
  margin-right: 4px;
`;

const FavotiteIcon = styled.Image`
  width: 24px;
  height: 24px;
`;

const Tags = styled.View`
  display: flex;
  flex-direction: row;
  margin-bottom: 20px;
`;

const Footer = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const UserInfo = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const UserAvatar = styled.Image`
  width: 32px;
  height: 32px;
  margin-right: 8px;
`;
