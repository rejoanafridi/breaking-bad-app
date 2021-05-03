import React, { useState } from "react";

const Search = ( {getQuery} ) => {
	const [text, setText] = useState('')
        const onChange=(q)=>{
            setText(q)
            getQuery(q)
        }
	return (
		<div className="container">
			<div className="search_area">
				<input
					className="search"
					placeholder="Search"
					autoFocus
					value={text}
					onChange={(e) => onChange(e.target.value)}
				/>
			</div>
		</div>
	);
};

export default Search;
