package socialMediaApp.mappers;

import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import socialMediaApp.models.*;
import socialMediaApp.responses.*;

import java.util.List;

@Mapper(componentModel = "spring")
public interface UserMapper {

    @Mapping(source = "user.id",target = "userId")
    UserFollowerResponse followToFollowerResponse(Follow follow);
    @Mapping(source = "following.id",target = "userId")
    UserFollowingResponse followToFollowingResponse(Follow follow);
    @Mapping(source = "post.id",target = "postId")
    UserLikeResponse likeToUserFollowedResponse(Like like);

    @Mapping(source = "id",target = "postId")
    UserPostResponse postToResponse(Post post);

    @Mapping(source = "post.id",target = "postId")
    UserCommentResponse commentToResponse(Comment comment);

    //@Mapping(source = "followers",target = "followers")
    @Mapping(source = "followers",target = "followers")
    @Mapping(source = "following",target = "following")
    @Mapping(source = "likes",target = "likes")
    @Mapping(source = "posts",target = "posts")
    UserResponse userToResponse(User user);

    List<UserResponse> usersToResponses(List<User> users);

}
