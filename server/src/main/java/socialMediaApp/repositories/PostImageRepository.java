package socialMediaApp.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import socialMediaApp.models.Post;
import socialMediaApp.models.PostImage;

import java.util.Optional;

public interface PostImageRepository extends JpaRepository<PostImage, Integer> {
    Optional<PostImage> findPostImageByPost_Id(int postId);
}