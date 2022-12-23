package socialMediaApp.responses.comment;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class CommentGetResponse {
    private int id;
    private int postId;
    private int userId;
    private String userName;
    private String userLastName;
    private String description;
}
