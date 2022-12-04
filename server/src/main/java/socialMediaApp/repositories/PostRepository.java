package socialMediaApp.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import socialMediaApp.models.Post;

public interface PostRepository extends JpaRepository<Post, Integer> {
}