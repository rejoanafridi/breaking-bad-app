import React from "react";

const CharecterItems = ({ item }) => {
	console.log(item);
	return (
		<div className="curd">
			{/* <h1 className="box_header">{item.name}</h1> */}
            <div className="img">
                <img src={item.img} />

            </div>
			
			<div class="content">
				<h3>Actor Name:{item.name}  </h3>
                <p> Nickname: {item.nickname} </p>
                <p> Birthday: {item.birthday} </p>
                <p> Status: {item.status} </p>
			</div>
		</div>
	);
};

export default CharecterItems;
