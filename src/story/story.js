import React from 'react';
import "./story.css";

const DEFAULT_IMAGE = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6iWhMczmEjDsA_gP1MTkzGXDQ3u2SPiyPna2yF2Vc4Exh5LjoVg";

const Story = ({name = "Default name", time = 3, image = DEFAULT_IMAGE}) => {
	return (
		<div className="story-wrapper">
			<img className="story-image" src={image} alt={name}/>
		  
		  <div className="story-content">

			<a href="#" className="story-name">{name}</a>
			<div className="story-time">{time} год. тому</div>

			</div>

		</div>
		)


};

export default Story;