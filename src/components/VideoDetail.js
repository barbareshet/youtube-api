import React from 'react';

import {Paper, Typography} from "@material-ui/core";

const VideoDetail = ({video})  =>  {
    if (!video) return <Typography style={{padding:"25px"}}>Loading...</Typography>

    const vidSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
    return (
        <React.Fragment>
            <Paper elevation={6} style={{height:'70%'}}>
                <iframe src={vidSrc} frameBorder="0" width="100%" height="100%" title="Video Player"/>
            </Paper>
            <Paper elevation={6} style={{padding:'15px'}}>
                <Typography variant="h4">{video.snippet.title} - {video.snippet.channelTitle}</Typography>
                <Typography variant="subtitle1">{video.snippet.channelTitle}</Typography>
                <Typography variant="subtitle2">{video.snippet.description}</Typography>
            </Paper>
        </React.Fragment>
    );
}
export default VideoDetail