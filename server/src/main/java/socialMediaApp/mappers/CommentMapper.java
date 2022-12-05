package socialMediaApp.mappers;

import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import socialMediaApp.models.Comment;
import socialMediaApp.requests.CommentAddRequest;
import socialMediaApp.requests.CommentUpdateRequest;
import socialMediaApp.responses.CommentResponse;

import java.util.List;

@Mapper(componentModel = "spring")
public interface CommentMapper {
    @Mapping(source = "post.id", target = "postId")
    CommentResponse commentToResponse(Comment comment);
    List<CommentResponse> commentsToResponses(List<Comment> comments);
    @Mapping(source = "postId",target = "post.id")
    Comment addRequestToComment(CommentAddRequest commentAddRequest);
}
