import React from 'react';
import PropTypes from 'prop-types';

export default function ListVideosPurpose({ videosList, videoSelectedEvent, show }) {
	const handleSelectVideo = video => {
		
		return videoSelectedEvent(video);
	};

	return (
		<div className={`videos_lists_container ${show ? 'show' : ''}`}>
			<div className="videos_lists">
				{videosList.map(video => {
					return (
						<div
							key={video.id}
							className='thumb_video_container'
							onClick={() => handleSelectVideo(video)}
							style={{
								backgroundImage: `url(${video.thumbnail})`,
							}}>
							<h2>{video.title}</h2>
						</div>
					);
				})}
			</div>
		</div>
	);
}

ListVideosPurpose.propTypes = {
	videosList: PropTypes.array.isRequired
};
