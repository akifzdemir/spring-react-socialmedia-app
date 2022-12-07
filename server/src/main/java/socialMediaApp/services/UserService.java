package socialMediaApp.services;

import org.springframework.stereotype.Service;
import socialMediaApp.mappers.UserMapper;
import socialMediaApp.repositories.UserRepository;
import socialMediaApp.responses.UserResponse;

import java.util.List;

@Service
public class UserService {
   private final UserMapper userMapper;
   private final UserRepository userRepository;

    public UserService(UserMapper userMapper, UserRepository userRepository) {
        this.userMapper = userMapper;
        this.userRepository = userRepository;
    }

    public List<UserResponse> getAll(){
        return userMapper.usersToRespnoses(userRepository.findAll());
    }
}
