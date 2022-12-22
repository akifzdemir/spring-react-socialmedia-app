package socialMediaApp.services;

import org.springframework.stereotype.Service;
import socialMediaApp.mappers.LikeMapper;
import socialMediaApp.models.Like;
import socialMediaApp.repositories.LikeRepository;
import socialMediaApp.requests.LikeAddRequest;
import socialMediaApp.responses.like.LikeResponse;

import java.util.List;

@Service
public class LikeService {

    private final LikeRepository likeRepository;
    private final LikeMapper likeMapper;

    public LikeService(LikeRepository likeRepository, LikeMapper likeMapper) {
        this.likeRepository = likeRepository;
        this.likeMapper = likeMapper;
    }

    public List<LikeResponse> getAllByPost(int postId){
        List<Like> likes = likeRepository.findAllByPost_Id(postId);
        return likeMapper.likesToLikeResponses(likes);
    }

    public List<LikeResponse> getAllByUser(int userId){
        List<Like> likes = likeRepository.findAllByUser_Id(userId);
        return likeMapper.likesToLikeResponses(likes);
    }

    public void add(LikeAddRequest likeAddRequest){
        Like like = likeMapper.requestToLike(likeAddRequest);
        likeRepository.save(like);
    }

    public void delete(int id){
        likeRepository.deleteLikeById(id);
    }

}
