package socialMediaApp.responses.post;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class PostImageListResponse {
    private int id;
    private int postId;
    private String imagePath;
}
