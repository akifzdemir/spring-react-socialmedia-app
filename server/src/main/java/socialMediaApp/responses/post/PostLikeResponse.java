package socialMediaApp.responses.post;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class PostLikeResponse {
    private int id;
    private int userId;
    private String name;
    private String lastName;
}
