package socialMediaApp.services;

import org.springframework.stereotype.Service;
import socialMediaApp.mappers.PostMapper;
import socialMediaApp.models.Post;
import socialMediaApp.repositories.PostRepository;
import socialMediaApp.requests.PostAddRequest;
import socialMediaApp.responses.PostGetResponse;

import java.util.List;

@Service
public class PostService {

    private final PostRepository postRepository;
    private final PostMapper postMapper;

    public PostService(PostRepository postRepository, PostMapper postMapper) {
        this.postRepository = postRepository;
        this.postMapper = postMapper;
    }

    public List<PostGetResponse> getAll(){
       List<Post> posts = postRepository.findAll();
       return  postMapper.postsToGetResponses(posts);
    }

    public PostGetResponse getById(int id){
        Post post = postRepository.findById(id).orElse(null);
        return postMapper.postToGetResponse(post);
    }

    public String add(PostAddRequest postAddRequest){
        postRepository.save(postMapper.postAddRequestToPost(postAddRequest));
        return  "Post Added";
    }

    public String delete(int id){
        Post postToDelete = postRepository.findById(id).orElse(null);
        if (postToDelete != null) {
            postRepository.delete(postToDelete);
            return "Post deleted";
        }
        return  "Post not found";
    }
}
