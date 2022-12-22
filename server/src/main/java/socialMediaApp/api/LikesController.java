package socialMediaApp.api;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import socialMediaApp.requests.LikeAddRequest;
import socialMediaApp.responses.like.LikeResponse;
import socialMediaApp.services.LikeService;

import java.util.List;

@RestController
@RequestMapping("/api/likes")
public class LikesController {

    private final LikeService likeService;

    public LikesController(LikeService likeService) {
        this.likeService = likeService;
    }

    @PostMapping("/add")
    public ResponseEntity<String> add(@RequestBody LikeAddRequest likeAddRequest){
        likeService.add(likeAddRequest);
        return new ResponseEntity<>("Added", HttpStatus.OK);
    }

    @GetMapping("/getallbypost/{postId}")
    public ResponseEntity<List<LikeResponse>> getAllByPost(@PathVariable int postId){
        return new ResponseEntity<>(likeService.getAllByPost(postId),HttpStatus.OK);
    }

    @GetMapping("/getallbyuser/{userId}")
    public ResponseEntity<List<LikeResponse>> getAllByUser(@PathVariable int userId){
        return new ResponseEntity<>(likeService.getAllByUser(userId),HttpStatus.OK);
    }

    @DeleteMapping("/delete")
    public ResponseEntity<String> delete(@RequestParam int id){
        likeService.delete(id);
        return new ResponseEntity<>("Deleted",HttpStatus.OK);
    }
}
