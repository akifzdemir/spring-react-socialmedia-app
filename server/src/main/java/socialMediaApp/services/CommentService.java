package socialMediaApp.services;

import org.springframework.stereotype.Service;
import socialMediaApp.mappers.CommentMapper;
import socialMediaApp.models.Comment;
import socialMediaApp.repositories.CommentRepository;
import socialMediaApp.requests.CommentAddRequest;
import socialMediaApp.requests.CommentUpdateRequest;
import socialMediaApp.responses.CommentGetResponse;

import java.util.List;

@Service
public class CommentService {
    private final CommentRepository commentRepository;
    private final CommentMapper commentMapper;

    public CommentService(CommentRepository commentRepository, CommentMapper commentMapper) {
        this.commentRepository = commentRepository;
        this.commentMapper = commentMapper;
    }

    public String add(CommentAddRequest commentAddRequest){
        Comment comment = commentMapper.addRequestToComment(commentAddRequest);
        commentRepository.save(comment);
        return "Comment Added";
    }

    public List<CommentGetResponse> getAll(){
        List<Comment> comments = commentRepository.findAll();
        return commentMapper.commentsToResponses(comments);
    }

    public CommentGetResponse getById(int id){
        Comment comment = commentRepository.findById(id).orElse(null);
        return  commentMapper.commentToResponse(comment);
    }

    public String update(int id, CommentUpdateRequest commentUpdateRequest){
        Comment commentToUpdate = commentRepository.findById(id).orElse(null);
        if (commentToUpdate!=null){
            commentToUpdate.setDescription(commentUpdateRequest.getDescription());
            return "Comment Updated";
        }
        return "Comment not found";
    }

    public String delete(int id){
        commentRepository.deleteById(id);
        return "Comment Deleted";
    }
}
