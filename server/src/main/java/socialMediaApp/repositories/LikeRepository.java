package socialMediaApp.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import socialMediaApp.models.Like;

public interface LikeRepository extends JpaRepository<Like, Integer> {
    void deleteLikeById(int id);
}