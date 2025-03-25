
// PlayVid.jsx

import React, { useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';


const PlayVideoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  padding-left: 5rem;
  border-radius: 15px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);

  background: #121212;
  transition: background-color 0.3s, transform 0.3s;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 10px;
  }

`;

const VideoSection = styled.div`
  flex: 2;
  padding-right: 20px;
  margin-right: 30px;
  margin-top: 30px;

  video {
    width: 100%;
    border-radius: 18px;
    border: 1px solid #e5e4e2;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
    transition: transform 0.3s ease;
  }

  @media (max-width: 768px) {
    margin-bottom: 20px;
    margin-right: 0;
    margin-top: 0;
    margin-left: 2%;
    width:100% ;
  }
`;

const VideoDescription = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 15px;

  h2 {
    font-size: 1.5rem;
    font-weight: bold;
    color: #fff;
   
  }

  p {
    font-size: 1.5rem;
    color: #999;
    
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;

    h2 {
      font-size: 1.2rem;
    }

    p {
      font-size: 0.9rem;
    }
  }
`;

const LikeDislikeContainer = styled.div`
  display: flex;
  align-items: center;

  button {
    background: transparent;
    border: 1px solid #7F7F7F;
    border-radius: 30%;
    cursor: pointer;
    padding: 10px;
    font-size: 1.5em;
    margin-right: 10px;
    color: #606060;
    display: flex;
    align-items: center;
    transition: transform 0.3s, background 0.3s;

    &:hover {
      background: #eaeaea;
      transform: scale(1.1);
    }

    &.active-like {
      color: yellow;
      background: transparent;
    }

    &.active-dislike {
      color: red;
      background:transparent ;
    }
  }

  span {
    margin-left: 5px;
    font-size: 1em;
    font-weight: bold;
  }
  @media (max-width: 768px) {
    padding: 5px;
    font-size: 0.5em;
    align-self: end;

    span {
      font-size: 0.8em;
    }
  }
`;

const CommentsSection = styled.div`
  margin-top: 20px;
  padding: 20px;
  background: #f9f9f9;
  border-radius: 12px;
  box-shadow: 0 2px 6px #fff;

  h3 {
    color: #fff;
    font-size: 1.2rem;
    font-weight: bold;
    border-bottom: 2px solid #ddd;
    padding-bottom: 8px;
    margin-bottom: 15px;
  }

  textarea {
    width: 100%;
    height: 6rem;
    margin-bottom: 10px;
    border-radius: 12px;
    padding: 15px;
    font-size: 1rem;
    color: #333;
    border: 1px solid #ddd;

    &:focus {
      outline: none;
      border: 1px solid #007bff;
      box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
    }
  }

  .comment-list {
    margin-top: 15px;

    .comment {
      display: flex;
      align-items: center;
      margin-bottom: 10px;
      padding: 12px;
      background: #fff;
      border-radius: 12px;

      p {
        margin: 0;
        color: #333;
        font-size: 1rem;
      }

      button {
        justify-content: flex-end;
        background: #dc3545;
        color: white;
        border: none;
        padding: 8px 12px;
        cursor: pointer;
        border-radius: 8px;
        transition: background 0.3s;

        &:hover {
          background: #c82333;
        }
      }
      .edit-button {
        background: #007bff;
        margin-left: 10px;
        justify-content: flex-end;

        &:hover {
          background: #0056b3;
        }
      }
    }
  }
  @media (max-width: 768px) {
    padding: 15px;

    textarea {
      font-size: 0.9rem;
    }
  }
`;


const SuggestedVideosSection = styled.div`
  flex: 1;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 6px #fff;
  background: #121212;
  transition: background-color 0.3s, transform 0.3s;
  &:focus {
    outline: none;
  }

  h3 {
    font-size: 1.5rem;
    font-weight: bold;
    color: #fff;
    margin-bottom: 20px;
    text-align: center;
    border-bottom: 2px solid #ddd;
    padding-bottom: 10px;
  }
  @media (max-width: 768px) {
    padding: 10px;
  }
`;




const SuggestedVideoCard = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 20px;
  cursor: pointer;
  padding: 10px;
  border-radius: 10px;
  transition: transform 0.3s, box-shadow 0.3s;
  background: #fff;
  box-shadow: 0 2px 4px #fff;

  &:hover {
    transform: scale(1.01);
    box-shadow: 0 8px 15px rgba(0, 0, 0, 0.2);
  }

  img {
    width: 150px;
    height: 100px;
    object-fit: cover;
    border-radius: 8px;
    margin-right: 15px;
    transition: transform 0.3s;

    &:hover {
      transform: rotate(-3deg);
    }
  }

  .info {
    display: flex;
    flex-direction: column;
    justify-content: center;

    h4 {
      font-size: 1rem;
      font-weight: bold;
      margin: 0;
      color: #1a1a1a;
      transition: color 0.3s;

      &:hover {
        color: #007BFF;
      }
    }

    p {
      margin: 5px 0 0 0;
      color: #606060;
      font-size: 0.9em;
    }
  }
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;

    img {
      width: 100%;
      height: auto;
      margin-bottom: 10px;
    }
  }
`;


  const StyledButton = styled.button`
  background: linear-gradient(90deg, #ff7eb3, #ff758c);
  color: white;
  font-size: 1.2rem;
  font-weight: bold;
  padding: 12px 24px;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease, background 0.5s ease;

  &:hover {
    background: linear-gradient(90deg, #ff758c, #ff7eb3);
    transform: scale(1.05);
    box-shadow: 0 8px 15px rgba(255, 117, 140, 0.3);
  }

  &:active {
    transform: scale(0.95);
  }

  &:after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 0;
    height: 0;
    background: rgba(255, 255, 255, 0.3);
    border-radius: 50%;
    transform: translate(-50%, -50%);
    transition: width 0.4s ease, height 0.4s ease;
  }

  &:hover:after {
    width: 300%;
    height: 300%;
  }
  @media (max-width: 768px) {
    font-size: 1rem;
    padding: 10px 20px;
  }
`;

const SponsoredVideoSection = styled.div`
  background-color: #2c3e50;
  padding: 20px;
  margin-bottom: 20px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  
`;

const SponsoredVideoCard = styled.div`
  display: flex;
  width: 100%;
  max-width: 800px;
  cursor: pointer;
  border: 2px solid #f39c12;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 2px 7px orange;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  &:hover {
    transform: scale(1.01);
    box-shadow: 0 8px 15px rgba(0, 0, 0, 0.2);
  }
`;

const SponsoredVideoCardContent = styled.div`
  display: flex;
  width: 100%;
  padding: 15px;
`;

const SponsoredVideoCardImage = styled.img`
  width: 50%;
  height: 100% 100%;
  object-fit: cover;
`;

const SponsoredVideoCardInfo = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: white;
  width: 60%;
`;

const SponsoredVideoCardTitle = styled.h4`
  font-size: 18px;
  font-weight: bold;
  color: #f39c12;
`;

const SponsoredVideoCardViews = styled.p`
  font-size: 14px;
  color: #ecf0f1;
`;

// Example data for the sponsored video
const sponsoredVideo = {
  id: 1,
  thumbnail: 'https://images.pexels.com/photos/25809259/pexels-photo-25809259/free-photo-of-a-man-touching-a-tablet-standing-on-display-in-a-store-with-electronics.jpeg?auto=compress&cs=tinysrgb&w=600',
  title: 'Sponsored Web Development Masterclass',
  views: '3.5M',
  url: 'https://sponsored_video_url.com',
};

const PlayVideo = () => {
  const [comments, setComments] = useState([]);
  const [text, setText] = useState('');
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);
  const [liked, setLiked] = useState(false);
  const [disliked, setDisliked] = useState(false);
  const [currentVideo, setCurrentVideo] = useState('/assets/video.mp4');

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  const addComment = () => {
    if (text.trim()) {
      setComments([...comments, { text }]);
      setText('');
    }
  };

  const deleteComment = (index) => {
    setComments(comments.filter((_, i) => i !== index));
  };
  const editComment = (index) => {
    const newText = prompt('Edit your comment:', comments[index].text);
    if (newText !== null) {
      const updatedComments = [...comments];
      updatedComments[index].text = newText;
      setComments(updatedComments);
    }
  };

  const handleLike = () => {
    setLikes((prevLikes) => liked ? prevLikes - 1 : prevLikes + 1);
    if (disliked) setDislikes(dislikes - 1);
    setLiked(!liked);
    setDisliked(false);
  };

  const handleDislike = () => {
    setDislikes((prevDislikes) => disliked ? prevDislikes - 1 : prevDislikes + 1);
    if (liked) setLikes(likes - 1);
    setDisliked(!disliked);
    setLiked(false);
  };

  const suggestedVideos = [
    { id: 1, thumbnail: 'https://cdn.pixabay.com/photo/2020/01/04/14/28/youtube-4740743_640.jpg', title: 'Video 1', views: '1.2M views', url: 'https://cdn.pixabay.com/video/2023/06/30/169476-841382886_tiny.mp4' },
    { id: 2, thumbnail: 'https://cdn.pixabay.com/photo/2024/05/24/17/05/ai-generated-8785461_640.jpg', title: 'Video 2', views: '650K views', url: 'https://cdn.pixabay.com/video/2019/05/06/23355-334950213_tiny.mp4' },
    { id: 3, thumbnail: 'https://cdn.pixabay.com/photo/2023/05/06/20/15/ai-generated-7975048_640.png', title: 'Video 3', views: '870K views', url: 'https://cdn.pixabay.com/video/2016/07/08/3741-174188012_tiny.mp4' },
    { id: 4, thumbnail: 'https://cdn.pixabay.com/photo/2015/10/27/14/40/programming-1009134_640.jpg', title: 'Video 4', views: '1M views', url: 'https://cdn.pixabay.com/video/2018/01/30/14025-254146871_tiny.mp4' },
    { id: 5, thumbnail: 'https://cdn.pixabay.com/photo/2024/05/24/17/05/ai-generated-8785462_640.jpg', title: 'Video 5', views: '1.3M views', url: 'https://cdn.pixabay.com/video/2017/07/23/10822-226624975_tiny.mp4' },
    // { id: 6, thumbnail: 'https://cdn.pixabay.com/photo/2024/05/24/17/05/ai-generated-8785462_640.jpg', title: 'Video 6', views: '1.3M views', url: 'https://cdn.pixabay.com/video/2023/05/17/163491-827845629_tiny.mp4' },
    // { id: 7, thumbnail: 'https://cdn.pixabay.com/photo/2024/05/24/17/05/ai-generated-8785462_640.jpg', title: 'Video 7', views: '1.3M views', url: 'https://cdn.pixabay.com/video/2020/02/07/32062-390688219_tiny.mp4' },
    // { id: 8, thumbnail: 'https://cdn.pixabay.com/photo/2024/05/24/17/05/ai-generated-8785462_640.jpg', title: 'Video 8', views: '1.3M views', url: 'https://cdn.pixabay.com/video/2015/09/02/650-138099540_tiny.mp4' },
  ];

  return (
    <PlayVideoContainer>
      <VideoSection>
        <video src={currentVideo} controls autoPlay muted></video>
        <VideoDescription>
          <div>
            <h2>Best Lecture to Learn Web Development</h2>
            <p>Lecture - 1</p>
          </div>
          <LikeDislikeContainer>
            <button className={liked ? 'active-like' : ''} onClick={handleLike}>👍<span>{likes}</span></button>
            <button className={disliked ? 'active-dislike' : ''} onClick={handleDislike}>👎<span>{dislikes}</span></button>
          </LikeDislikeContainer>
        </VideoDescription>


<CommentsSection>
  <h3>Comments</h3>
  <textarea
    value={text}
    onChange={handleTextChange}
    placeholder="Type your comment here"
    rows="4"
  ></textarea>
  
  <StyledButton onClick={addComment}>Add Comment</StyledButton>


  <div className="comment-list">
    {comments.map((comment, index) => (
      <div key={index} className="comment">
        <p>{comment.text}</p>
        <button onClick={() => deleteComment(index)}>
          <FontAwesomeIcon icon={faTrash} />
        </button>
        <button className="edit-button" onClick={() => editComment(index)}>
          <FontAwesomeIcon icon={faEdit} />
        </button>
      </div>
    ))}
  </div>
</CommentsSection>

 </VideoSection>

  

      <SuggestedVideosSection>
        {/* Sponsored Video Section */}
  <SponsoredVideoSection>
        <h3>Sponsored Video</h3>
        <SponsoredVideoCard onClick={() => window.open(sponsoredVideo.url, '_blank')}>
          <SponsoredVideoCardImage src={sponsoredVideo.thumbnail} alt={sponsoredVideo.title} />
          <SponsoredVideoCardContent>
            <SponsoredVideoCardInfo>
              <SponsoredVideoCardTitle>{sponsoredVideo.title}</SponsoredVideoCardTitle>
              <SponsoredVideoCardViews>{sponsoredVideo.views} Views</SponsoredVideoCardViews>
            </SponsoredVideoCardInfo>
          </SponsoredVideoCardContent>
        </SponsoredVideoCard>
      </SponsoredVideoSection>
        <h3>Suggested Videos</h3>
        {suggestedVideos.map((video) => (
          <SuggestedVideoCard
            key={video.id}
            onClick={() => window.open(video.url, '_blank')}
          >
            <img src={video.thumbnail} alt={video.title} />
            <div className="info">
              <h4>{video.title}</h4>
              <p>{video.views}</p>
            </div>
          </SuggestedVideoCard>
        ))}
      </SuggestedVideosSection>
    </PlayVideoContainer>
  );
};

export default PlayVideo;



