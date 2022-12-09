package socialMediaApp.mappers;

import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import socialMediaApp.models.Like;
import socialMediaApp.requests.LikeAddRequest;

@Mapper(componentModel = "spring")
public interface LikeMapper {

    @Mapping(source = "postId",target = "post.id")
    @Mapping(source = "userId",target = "user.id")
    Like requestToLike(LikeAddRequest likeAddRequest);

}
