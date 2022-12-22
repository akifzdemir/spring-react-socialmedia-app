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
    private List<UserFollowerResponse> followers;
    private List<UserFollowingResponse> following;
}
