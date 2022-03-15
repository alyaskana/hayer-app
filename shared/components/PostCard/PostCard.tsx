import { View, TouchableOpacity } from "react-native";
import { FC } from "react";
import styled from "styled-components/native";

import { Tag } from "shared/components/Tag/Tag";
import {
  Caption_2,
  Headline,
  Title,
  Text,
  Caption_1,
} from "shared/ui/Typography";
import { Colors } from "constants/Colors";
import { truncate } from "shared/utils";

type PostCardProps = {
  user: any;
  title: string;
  tags: any[];
  description: string;
  type: string[];
  format: string;
  deadline: string;
  responsesCount: number;
  onPress: () => void;
  navigation: any;
  style: Object;
};

export const PostCard: FC<PostCardProps> = ({
  title,
  description,
  user,
  tags,
  type,
  format,
  deadline,
  responsesCount,
  onPress,
  style,
}) => {
  return (
    <TouchableOpacity style={style} activeOpacity={0.6} onPress={onPress}>
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
              <IconCategory
                source={require("assets/images/study_active.png")}
              />
            ) : null}
            {type.includes("event") ? (
              <IconCategory
                source={require("assets/images/event_active.png")}
              />
            ) : null}
            <Caption_2 style={{ marginLeft: 4 }}>{format}</Caption_2>
          </HeaderInfo>
          <ResponseCounter>
            <ResponseIcon source={require("assets/images/response.png")} />
            <Headline>{responsesCount}</Headline>
          </ResponseCounter>
        </Header>
        <Title style={{ marginBottom: 12 }}>{title}</Title>
        <Tags>
          {tags.map((tag) => (
            <Tag style={{ marginRight: 4 }} text={tag.name} />
          ))}
        </Tags>
        <Text style={{ marginBottom: 24 }}>{truncate(description, 150)}</Text>
        <Footer>
          <UserInfo>
            <UserAvatar source={require("assets/images/avatar.jpg")} />
            <Caption_1>{user.name}</Caption_1>
          </UserInfo>
          <View>
            <Caption_2 style={{ color: Colors.Main.Gray_1 }}>
              4 часа назад
            </Caption_2>
          </View>
        </Footer>
      </PostWrap>
    </TouchableOpacity>
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

const ResponseCounter = styled.View`
  height: 32px;
  padding-left: 12px;
  padding-right: 12px;
  background-color: ${Colors.Main.White_gray};
  border-radius: 100px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const ResponseIcon = styled.Image`
  margin-right: 4px;
  width: 20px;
  height: 20px;
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
