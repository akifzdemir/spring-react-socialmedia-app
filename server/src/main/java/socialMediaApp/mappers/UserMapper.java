package socialMediaApp.mappers;

import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import socialMediaApp.models.*;
import socialMediaApp.requests.UserAddRequest;
import socialMediaApp.responses.user.*;

import java.util.List;

@Mapper(componentModel = "spring")
public interface UserMapper {

    @Mapping(source = "user.id",target = "userId")
    @Mapping(source = "user.name",target = "name")
    @Mapping(source = "user.lastName",target = "lastName")
    UserFollowerResponse followToFollowerResponse(Follow follow);
    @Mapping(source = "following.id",target = "userId")
    @Mapping(source = "following.lastName",target = "lastName")
    @Mapping(source = "following.name",target = "name")
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

    User requestToUser(UserAddRequest userAddRequest);

    List<UserResponse> usersToResponses(List<User> users);

}
