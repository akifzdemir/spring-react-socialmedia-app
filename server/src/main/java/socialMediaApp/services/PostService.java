package socialMediaApp.services;

import org.springframework.stereotype.Service;
import socialMediaApp.mappers.PostMapper;
import socialMediaApp.models.Post;
import socialMediaApp.repositories.PostRepository;
import socialMediaApp.requests.PostAddRequest;
import socialMediaApp.responses.post.PostGetResponse;

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

    public List<PostGetResponse> getAllByUser(int userId){
        List<Post> userPosts = postRepository.findAllByUser_Id(userId);
        return postMapper.postsToGetResponses(userPosts);
    }

    public void add(PostAddRequest postAddRequest){
        postRepository.save(postMapper.postAddRequestToPost(postAddRequest));
    }

    public void delete(int id){
        postRepository.deleteById(id);
    }
}
