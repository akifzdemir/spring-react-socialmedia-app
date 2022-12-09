package socialMediaApp.responses.user;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import socialMediaApp.responses.user.*;

import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class UserResponse {
    private int id;
    private String name;
    private String lastName;
    private String email;
    private List<UserPostResponse> posts;
    private List<UserFollowerResponse> followers;
    private List<UserFollowingResponse> following;
    private List<UserLikeResponse> likes;
    private List<UserCommentResponse> comments;
}
