package socialMediaApp.mappers;

import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import socialMediaApp.models.Follow;
import socialMediaApp.requests.FollowAddRequest;
import socialMediaApp.responses.FollowResponse;
import socialMediaApp.responses.UserFollowerResponse;

import java.util.List;

@Mapper(componentModel = "spring")
public interface FollowMapper {
    @Mapping(source = "followed.id",target = "followedId")
    @Mapping(source = "follower.id",target = "followerId")
    @Mapping(target = "followedName",expression = "java(follow.getFollowed().getName() + \" \"+follow.getFollowed().getLastName())")
    @Mapping(target = "followerName",expression = "java(follow.getFollower().getName() + \" \"+follow.getFollower().getLastName())")
    FollowResponse followToResponse(Follow follow);


    @Mapping(source = "followerId",target = "follower.id")
    @Mapping(source = "followedId",target = "followed.id")
    Follow addRequestToFollow(FollowAddRequest followAddRequest);

    List<FollowResponse> followsToResponses(List<Follow> follows);
}
