package socialMediaApp.responses;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class UserFollowedResponse {
    private int id;
    private int followedId;
    private String followedName;
}
