package socialMediaApp.responses.post;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class PostGetResponse {
    private int id;
    private int userId;
    private String userName;
    private String userLastName;
    private String Description;
}
