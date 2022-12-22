package socialMediaApp.services;

import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;
import socialMediaApp.mappers.PostImageMapper;
import socialMediaApp.models.PostImage;
import socialMediaApp.repositories.PostImageRepository;
import socialMediaApp.responses.postImage.PostImageResponse;
import socialMediaApp.utils.ImageUtil;

import java.io.IOException;
import java.util.Optional;

@Service
public class PostImageService {

    private final PostImageRepository postImageRepository;
    private final PostService postService;
    private final PostImageMapper postImageMapper;

    public PostImageService(PostImageRepository postImageRepository, PostService postService, PostImageMapper postImageMapper) {
        this.postImageRepository = postImageRepository;
        this.postService = postService;
        this.postImageMapper = postImageMapper;
    }

    public PostImageResponse upload(MultipartFile file, int postId) throws IOException {
        PostImage postImage = new PostImage();
        postImage.setName(file.getOriginalFilename());
        postImage.setType(file.getContentType());
        postImage.setData(ImageUtil.compressImage(file.getBytes()));
        postImage.setPost(postService.getById(postId));
        postImageRepository.save(postImage);
        return postImageMapper.imageToResponse(postImage);
    }

    public byte[] download(int id){
        Optional<PostImage> postImage = postImageRepository.findPostImageByPost_Id(id);
        if (postImage.isPresent()){
            return ImageUtil.decompressImage(postImage.get().getData());
        }
        return null;
    }
}
