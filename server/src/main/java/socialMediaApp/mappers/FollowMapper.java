package socialMediaApp.mappers;

import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import socialMediaApp.models.Follow;
import socialMediaApp.requests.FollowRequest;
import socialMediaApp.responses.follow.FollowResponse;

import java.util.List;

@Mapper(componentModel = "spring")
public interface FollowMapper {
     @Mapping(source = "following.id",target = "followingId")
     @Mapping(source = "user.id",target = "followerId")
     @Mapping(target = "followingName",expression = "java(follow.getFollowing().getName() + \" \"+follow.getFollowing().getLastName())")
     @Mapping(target = "followerName",expression = "java(follow.getUser().getName() + \" \"+follow.getUser().getLastName())")
     FollowResponse followToResponse(Follow follow);


    @Mapping(source = "userId",target = "user.id")
    @Mapping(source = "followingId",target = "following.id")
    Follow addRequestToFollow(FollowRequest followAddRequest);

    List<FollowResponse> followsToResponses(List<Follow> follows);
}
