import { View, TouchableOpacity } from "react-native";
import { FC } from "react";
import styled from "styled-components/native";
import { formatRelative } from "date-fns";
import russianLocale from "date-fns/locale/ru";

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
import { Post } from "shared/types/post";

type PostCardProps = {
  post: Post;
  onPress: () => void;
  navigation: any;
  style: Object;
};

export const PostCard: FC<PostCardProps> = ({ onPress, post, style }) => {
  const isPostAdType = (type: string): boolean => {
    return !!post.ad_types.find((ad_type) => ad_type.key === type);
  };

  return (
    <TouchableOpacity style={style} activeOpacity={0.6} onPress={onPress}>
      <PostWrap>
        <Header>
          <HeaderInfo>
            {new Date(post.deadline) < new Date() ? (
              <IconCategory source={require("assets/images/closed.png")} />
            ) : null}
            {isPostAdType("work") ? (
              <IconCategory source={require("assets/images/work_active.png")} />
            ) : null}
            {isPostAdType("study") ? (
              <IconCategory
                source={require("assets/images/study_active.png")}
              />
            ) : null}
            {isPostAdType("event") ? (
              <IconCategory
                source={require("assets/images/event_active.png")}
              />
            ) : null}
            <Caption_2 style={{ marginLeft: 4 }}>{post.format}</Caption_2>
          </HeaderInfo>
          <ResponseCounter>
            <ResponseIcon source={require("assets/images/response.png")} />
            <Headline>{post.responses.length}</Headline>
          </ResponseCounter>
        </Header>
        <Title style={{ marginBottom: 12 }}>{post.title}</Title>
        <Tags>
          {post.tags.map((tag) => (
            <Tag style={{ marginRight: 4 }} text={tag.name} />
          ))}
        </Tags>
        <Text style={{ marginBottom: 24 }}>
          {truncate(post.description, 150)}
        </Text>
        <Footer>
          <UserInfo>
            <UserAvatar source={require("assets/images/avatar.jpg")} />
            <Caption_1>{`${post.user.first_name} ${post.user.last_name}`}</Caption_1>
          </UserInfo>
          <View>
            <Caption_2 style={{ color: Colors.Main.Gray_1 }}>
              {formatRelative(new Date(post.created_at), new Date(), {
                locale: russianLocale,
              })}
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
