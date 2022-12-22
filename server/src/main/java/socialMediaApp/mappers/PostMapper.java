package socialMediaApp.mappers;

import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import socialMediaApp.models.Post;
import socialMediaApp.requests.PostAddRequest;
import socialMediaApp.responses.post.PostGetResponse;

import java.util.List;

@Mapper(componentModel = "spring")
public interface PostMapper {

    @Mapping(source = "user.id",target = "userId")
    @Mapping(source = "user.lastName",target = "userLastName")
    @Mapping(source = "user.name",target = "userName")
    PostGetResponse postToGetResponse(Post post);

    @Mapping(source = "userId",target = "user.id")
    Post postAddRequestToPost(PostAddRequest postAddRequest);
    List<PostGetResponse> postsToGetResponses(List<Post> posts);
}
