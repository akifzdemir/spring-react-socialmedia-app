package socialMediaApp.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import socialMediaApp.models.PostImage;

public interface PostImageRepository extends JpaRepository<PostImage, Integer> {
}