package socialMediaApp.services;

import org.springframework.stereotype.Service;
import socialMediaApp.mappers.LikeMapper;
import socialMediaApp.models.Like;
import socialMediaApp.repositories.LikeRepository;
import socialMediaApp.requests.LikeAddRequest;

@Service
public class LikeService {

    private final LikeRepository likeRepository;
    private final LikeMapper likeMapper;

    public LikeService(LikeRepository likeRepository, LikeMapper likeMapper) {
        this.likeRepository = likeRepository;
        this.likeMapper = likeMapper;
    }

    public void add(LikeAddRequest likeAddRequest){
        Like like = likeMapper.requestToLike(likeAddRequest);
        likeRepository.save(like);
    }
}
