package socialMediaApp.api;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import socialMediaApp.requests.CommentAddRequest;
import socialMediaApp.responses.comment.CommentGetResponse;
import socialMediaApp.services.CommentService;

import java.util.List;

@RestController
@RequestMapping("/api/comments")
public class CommentsController {

    private final CommentService commentService;

    public CommentsController(CommentService commentService){
        this.commentService = commentService;
    }

    @GetMapping("/getall")
    public ResponseEntity<List<CommentGetResponse>> getAll(){
        return new ResponseEntity<>(commentService.getAll(), HttpStatus.OK);
    }

    @GetMapping("/getallbypost/{postId}")
    public ResponseEntity<List<CommentGetResponse>> getAllByPost(@PathVariable int postId){
        return new ResponseEntity<>(commentService.getAllByPost(postId),HttpStatus.OK);
    }

    @GetMapping("/getallbyuser/{userId}")
    public ResponseEntity<List<CommentGetResponse>> getAllByUser(@PathVariable int userId){
        return new ResponseEntity<>(commentService.getAllByUser(userId),HttpStatus.OK);
    }

    @PostMapping("/add")
    public ResponseEntity<String> add(@RequestBody CommentAddRequest commentAddRequest){
        commentService.add(commentAddRequest);
        return new ResponseEntity<>("Added",HttpStatus.CREATED);
    }

    @DeleteMapping("/delete")
    public ResponseEntity<String> delete(@RequestParam int id){
        commentService.delete(id);
        return new ResponseEntity<>("Deleted",HttpStatus.OK);
    }
}
