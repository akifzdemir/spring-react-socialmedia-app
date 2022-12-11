package socialMediaApp.responses.userImage;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class UserImageResponse {
    private int id;
    private String name;
    private String type;
    private byte[] data;
    private int userId;
}
