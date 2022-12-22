package socialMediaApp.api;

import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import socialMediaApp.responses.postImage.PostImageResponse;
import socialMediaApp.services.PostImageService;

import java.io.IOException;

@RestController
@RequestMapping("/api/postimages")
public class PostImagesController {

    private final PostImageService postImageService;

    public PostImagesController(PostImageService postImageService) {
        this.postImageService = postImageService;
    }

    @PostMapping("/upload")
    public ResponseEntity<PostImageResponse> upload(@RequestParam("image") MultipartFile file,@RequestParam int postId) throws IOException {
           PostImageResponse postImageResponse = postImageService.upload(file,postId);
            return new ResponseEntity<>(postImageResponse, HttpStatus.OK);
    }

    @GetMapping("/download/{postId}")
    public ResponseEntity<?> download(@PathVariable int postId){
        byte[] image = postImageService.download(postId);
        if (image!=null){
            return ResponseEntity.status(HttpStatus.OK).contentType(MediaType.valueOf("image/png")).body(image);
        }
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);

    }
}
