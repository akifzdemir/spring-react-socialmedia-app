package socialMediaApp.services;

import org.springframework.stereotype.Service;
import socialMediaApp.mappers.UserMapper;
import socialMediaApp.models.User;
import socialMediaApp.repositories.FollowRepository;
import socialMediaApp.repositories.UserRepository;
import socialMediaApp.requests.UserAddRequest;
import socialMediaApp.responses.user.UserFollowingResponse;
import socialMediaApp.responses.user.UserResponse;

import java.util.List;

@Service
public class UserService {
   private final UserMapper userMapper;
   private final UserRepository userRepository;
   private final FollowRepository followRepository;

    public UserService(UserMapper userMapper, UserRepository userRepository, FollowRepository followRepository) {
        this.userMapper = userMapper;
        this.userRepository = userRepository;
        this.followRepository = followRepository;
    }

    public List<UserResponse> getAll(){

        return userMapper.usersToResponses(userRepository.findAll());
    }
    public UserResponse getResponseById(int id){
        User user = userRepository.findById(id).orElse(null);
        return userMapper.userToResponse(user);
    }

    public UserResponse getByEmail(String email){
        User user = userRepository.findByEmail(email);
        return userMapper.userToResponse(user);
    }

    public List<UserFollowingResponse> getUserFollowing(int userId){
        return userMapper.followsToFollowingResponses(followRepository.findAllByUser_Id(userId));
    }
    public User getById(int id){
        return userRepository.findById(id).get();
    }
    public void add(UserAddRequest userAddRequest){
        User user = userMapper.requestToUser(userAddRequest);
        userRepository.save(user);
    }

    public void delete(int id){
        userRepository.deleteById(id);
    }
}
