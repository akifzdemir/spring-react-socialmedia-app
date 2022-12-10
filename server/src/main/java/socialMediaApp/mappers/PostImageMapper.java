package socialMediaApp.mappers;

import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import socialMediaApp.models.PostImage;
import socialMediaApp.responses.postImage.PostImageResponse;

@Mapper(componentModel = "spring")
public interface PostImageMapper {

    @Mapping(source = "post.id",target = "postId")
    PostImageResponse imageToResponse(PostImage postImage);

}
