package socialMediaApp.mappers;

import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import socialMediaApp.models.Like;
import socialMediaApp.models.Post;
import socialMediaApp.requests.PostAddRequest;
import socialMediaApp.responses.post.PostGetResponse;
import socialMediaApp.responses.post.PostLikeResponse;

import java.util.List;

@Mapper(componentModel = "spring")
public interface PostMapper {

    @Mapping(source = "user.id",target = "userId")
    @Mapping(source = "user.name",target = "name")
    @Mapping(source = "user.lastName",target = "lastName")
    PostLikeResponse likeToPostLikeResponse(Like like);
    @Mapping(source = "postImages",target = "postImages")
    @Mapping(source = "user.id",target = "userId")
    @Mapping(source = "user.lastName",target = "userLastName")
    @Mapping(source = "user.name",target = "userName")
    @Mapping(source = "likes",target = "likes")
    PostGetResponse postToGetResponse(Post post);

    @Mapping(source = "userId",target = "user.id")
    Post postAddRequestToPost(PostAddRequest postAddRequest);
    List<PostGetResponse> postsToGetResponses(List<Post> posts);
}
