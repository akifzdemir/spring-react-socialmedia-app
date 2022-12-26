package socialMediaApp.services;

import org.springframework.stereotype.Service;
import socialMediaApp.mappers.FollowMapper;
import socialMediaApp.repositories.FollowRepository;
import socialMediaApp.requests.FollowAddRequest;


@Service
public class FollowService {
    private final FollowRepository followRepository;
    private final FollowMapper followMapper;

    public FollowService(FollowRepository followRepository, FollowMapper followMapper) {
        this.followRepository = followRepository;
        this.followMapper = followMapper;
    }

    public void add(FollowAddRequest followAddRequest){
        followRepository.save(followMapper.addRequestToFollow(followAddRequest));
    }


}
