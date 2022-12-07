package socialMediaApp.responses;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

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
    private List<UserFollowedResponse> follows;
    private List<UserLikeResponse> likes;
    private List<UserCommentResponse> comments;
}
