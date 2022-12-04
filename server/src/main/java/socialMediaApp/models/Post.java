package socialMediaApp.models;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.Set;

@Setter
@Getter
@Entity
@Table(name = "posts")
public class Post {
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    @Column(name = "id")
    private int id;
    @Column(name = "descriptio")
    private String description;
    @ManyToOne
    @JoinColumn(name = "user_id")
    User user;
    @OneToMany(mappedBy = "post")
    Set<Like> likes;
    @OneToMany(mappedBy = "post")
    Set<PostImage> postImages;
    @OneToMany(mappedBy = "post")
    Set<Comment> comments;
}
