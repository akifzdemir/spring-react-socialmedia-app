package socialMediaApp.models;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import javax.validation.constraints.Email;
import java.util.Set;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Entity
@Table(name = "users")
public class User {
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    @Column(name = "id")
    private int id;
    @Column(name = "name")
    private String name;
    @Column(name = "email")
    @Email
    private String email;
    @Column(name = "surname")
    private String surname;
    @Column(name = "password")
    private String password;

    @OneToMany(mappedBy = "followed")
    Set<Follow> follows;
    @OneToMany(mappedBy = "follower")
    Set<Follow> followers;
    @OneToMany(mappedBy = "user")
    Set<Post> posts;
    @OneToMany(mappedBy = "user")
    Set<Like> likes;
    @OneToMany(mappedBy = "user")
    Set<UserImage> images;

}
