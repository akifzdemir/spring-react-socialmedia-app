package socialMediaApp.mappers;

import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import socialMediaApp.models.*;
import socialMediaApp.responses.*;

import java.util.List;

@Mapper(componentModel = "spring")
public interface UserMapper {
    @Mapping(source = "follower.id",target = "followerId")
    @Mapping(target = "followerName",expression = "java(follow.getFollower().getName() + \" \"+follow.getFollower().getLastName())")
    UserFollowerResponse followToUserFollowerResponse(Follow follow);

    @Mapping(source = "follower.id",target = "followedId")
    @Mapping(target = "followedName",expression = "java(follow.getFollowed().getName() + \" \"+follow.getFollowed().getLastName())")
    UserFollowedResponse followToUserFollowedResponse(Follow follow);

    @Mapping(source = "post.id",target = "postId")
    UserLikeResponse likeToUserFollowedResponse(Like like);

    @Mapping(source = "id",target = "postId")
    UserPostResponse postToResponse(Post post);

    @Mapping(source = "post.id",target = "postId")
    UserCommentResponse commentToResponse(Comment comment);

    @Mapping(source = "follows",target = "follows")
    @Mapping(source = "followers",target = "followers")
    @Mapping(source = "likes",target = "likes")
    @Mapping(source = "posts",target = "posts")
    UserResponse userToResponse(User user);

    List<UserResponse> usersToRespnoses(List<User> users);

}
