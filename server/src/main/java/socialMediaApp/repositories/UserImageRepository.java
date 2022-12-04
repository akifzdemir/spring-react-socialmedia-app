package socialMediaApp.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import socialMediaApp.models.UserImage;

public interface UserImageRepository extends JpaRepository<UserImage, Integer> {
}