package socialMediaApp.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import socialMediaApp.models.Like;

import java.util.List;
import java.util.Optional;

public interface LikeRepository extends JpaRepository<Like, Integer> {
    void deleteLikeById(int id);
    List<Like> findAllByPost_Id(int postId);
    List<Like> findAllByUser_Id(int userId);
    Optional<Like> findByUser_IdAndPost_Id(int userId,int postId);
}