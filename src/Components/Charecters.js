// import React, { Component } from 'react'

// export default class Charecters extends Component {
//     render() {
//         return (
//             <div className="container box">
//                 <div className="curd">
//                     <p className="box_header"> Name</p>

//                 </div>
//                 <div className="curd">
//                     <p className="box_header"> Name</p>

//                 </div>
//                 <div className="curd">
//                     <p className="box_header"> Name</p>

//                 </div>
//                 <div className="curd">
//                     <p className="box_header"> Name</p>

//                 </div>
//                 <div className="curd">
//                     <p className="box_header"> Name</p>

//                 </div>

//             </div>
//         )
//     }
// }

import React from "react";
import CharecterItems from './CharecterItems'

const Charecters = ({ items, isLoading }) => {
	return isLoading ? (
		<h1>loading....</h1>
	) : (
		<section className="container box">
			{items.map((item) => (
				// <div className="curd">
				// 	<h1 className="box_header"> {item.name}</h1>
                //     {/* <img className="img"></img> */}
				// </div>
                 <CharecterItems key={item.char_id} item={item} > </CharecterItems>
			))}
		</section>
	);
};

export default Charecters;
