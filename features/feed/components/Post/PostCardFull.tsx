import { View } from "react-native";
import { FC } from "react";
import styled from "styled-components/native";
import { formatRelative } from "date-fns";
import russianLocale from "date-fns/locale/ru";

import { Tag } from "shared/components/Tag/Tag";
import { Caption_2, Title, Text, Caption_1 } from "shared/ui/Typography";
import { Colors } from "constants/Colors";
import { Post } from "shared/types";

type PostCardProps = {
  post: Post;
};

export const PostCardFull: FC<PostCardProps> = ({ post }) => {
  const handleFavorite = () => {
    alert("click");
  };

  const isPostAdType = (type: string): boolean => {
    return !!post.ad_types.find((ad_type) => ad_type.key === type);
  };

  return (
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
            <IconCategory source={require("assets/images/study_active.png")} />
          ) : null}
          {isPostAdType("event") ? (
            <IconCategory source={require("assets/images/event_active.png")} />
          ) : null}
          <Caption_2 style={{ marginLeft: 4 }}>{post.format}</Caption_2>
        </HeaderInfo>
        {/* TODO: Add is favorite logic */}
        {false ? (
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
      <Title style={{ marginBottom: 12 }}>{post.title}</Title>
      <Tags>
        {post.tags.map((tag) => (
          <Tag style={{ marginRight: 4 }} text={tag.name} />
        ))}
      </Tags>
      <Text style={{ marginBottom: 24 }}>{post.description}</Text>
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
