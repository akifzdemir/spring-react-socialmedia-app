package socialMediaApp.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import socialMediaApp.models.Follow;

public interface FollowRepository extends JpaRepository<Follow, Integer> {
}