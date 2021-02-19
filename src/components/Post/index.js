import React from 'react'
import { Avatar, CardHeader, IconButton, Typography, Card, CardActionArea, CardActions, CardContent, CardMedia } from '@material-ui/core'
import { Comment, Favorite, FavoriteBorder } from '@material-ui/icons'
import { makeStyles } from '@material-ui/core/styles'


const useStyles = makeStyles({
  root: {
    maxWidth: 700,
  },
  media: {
    maxHeight: 350,
  }
})

export default function Post({postcardClicked, commentClicked, likeClicked}) {
const classes = useStyles()  
  
  return (
      <Card className={classes.root}>

    <CardHeader
      avatar={
        <Avatar>
          {post.user.username[0]}
        </Avatar>
      }
      title={post.user.username}
    />

    <CardActionArea onClick={() => cardClicked({postId: post.id})}>
      <CardMedia className={classes.media}
        component="img"
        image={post.imageUrl}
      />

      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {post.description}
        </Typography>
      </CardContent>
      <CardContent>
        <Typography variant="body2" color="textPrimary" component="p">
          Liked by <strong>{post.totalLikes}</strong> people
        </Typography>
        <Typography variant="body2" color="textPrimary" component="p">
          <strong>{post.totalComments}</strong> comments
        </Typography>
      </CardContent>
    </CardActionArea>
    
    <CardActions>
      <IconButton aria-label="like" onClick={() => likeClicked({postId: post.id})}>
        <Favorite fontSize="large" />
      </IconButton>

      <IconButton aria-label="comment" onClick={() => commentClicked({postId: post.id})}>
        <Comment fontSize="large" />
      </IconButton>
    </CardActions>

  </Card>


  )
}


