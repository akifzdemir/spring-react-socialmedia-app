package socialMediaApp.api;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import socialMediaApp.requests.FollowRequest;
import socialMediaApp.services.FollowService;

@RestController
@RequestMapping("/api/follows")
public class FollowsController {

    private final FollowService followService;

    public FollowsController(FollowService followService) {
        this.followService = followService;
    }

    @PostMapping("/add")
    public ResponseEntity<String> add(@RequestBody FollowRequest followRequest){
        followService.add(followRequest);
        return new ResponseEntity<>("Followed", HttpStatus.OK);
    }

    @PostMapping("/delete")
    public ResponseEntity<String> delete(@RequestBody FollowRequest  followRequest){
        followService.delete(followRequest);
        return new ResponseEntity<>("Unfollowed",HttpStatus.OK);
    }
}
