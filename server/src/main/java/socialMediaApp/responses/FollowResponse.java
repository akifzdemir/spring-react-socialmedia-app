package socialMediaApp.responses;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class FollowResponse {
    private int id;
    private int followerId;
    private int followingId;
    private String followerName;
    private String followingName;
}
