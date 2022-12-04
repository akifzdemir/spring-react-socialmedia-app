package socialMediaApp.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import socialMediaApp.models.Comment;

public interface CommentRepository extends JpaRepository<Comment, Integer> {
}