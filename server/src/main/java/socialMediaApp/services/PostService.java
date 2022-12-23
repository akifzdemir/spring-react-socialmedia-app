package socialMediaApp.services;

import org.springframework.stereotype.Service;
import socialMediaApp.mappers.PostMapper;
import socialMediaApp.models.Post;
import socialMediaApp.repositories.PostRepository;
import socialMediaApp.requests.PostAddRequest;
import socialMediaApp.responses.post.PostGetResponse;
import socialMediaApp.responses.user.UserFollowingResponse;

import java.util.*;

@Service
public class PostService {

    private final PostRepository postRepository;
    private final PostMapper postMapper;
    private final UserService userService;

    public PostService(PostRepository postRepository, PostMapper postMapper, UserService userService) {
        this.postRepository = postRepository;
        this.postMapper = postMapper;
        this.userService = userService;
    }

    public List<PostGetResponse> getAll(){
       List<Post> posts = postRepository.findAll();
       return  postMapper.postsToGetResponses(posts);
    }

    public PostGetResponse getResponseById(int id){
        Post post = postRepository.findById(id).orElse(null);
        return postMapper.postToGetResponse(post);
    }

    public Post getById(int id){
        return postRepository.findById(id).get();
    }

    public List<PostGetResponse> getAllByUser(int userId){
        List<Post> userPosts = postRepository.findAllByUser_IdOrderByIdDesc(userId);
        return postMapper.postsToGetResponses(userPosts);
    }

    public List<PostGetResponse> getByUserFollowing(int userId){
        List<UserFollowingResponse> follows = userService.getUserFollowing(userId);
        List<Post> set = new ArrayList<>();

        for(UserFollowingResponse user : follows){
           set.addAll(postRepository.findAllByUser_IdOrderByIdDesc(user.getUserId()));
        }

        set.sort(Comparator.comparing(Post::getId).reversed());

        return postMapper.postsToGetResponses(set);
    }

    public int add(PostAddRequest postAddRequest){
        Post post =  postMapper.postAddRequestToPost(postAddRequest);
        postRepository.save(post);
        return post.getId();
    }

    public void delete(int id){
        postRepository.deleteById(id);
    }
}
