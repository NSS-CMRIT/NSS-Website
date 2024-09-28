// import React from "react";
// import "./coord.css";
// import Card from "../Card/Card";

// function Coord(props) {
//   return (
//     <div className="coord">
//       <h4>{props.batch}</h4>
//       <hr></hr>
//       <div className="row">

//       <div className="col-lg-4">
//         <Card
//           img={props.t1img}
//           title={props.t1title}
//         />
//       </div>
//       <div className="col-lg-4">
//       <Card
//           img={props.t2img}
//           title={props.t2title}
//         />
//       </div>
//       <div className="col-lg-4">
//       <Card
//           img={props.t3img}
//           title={props.t3title}
//         />
//       </div>
//       <div className="col-lg-4">
//       <Card
//           img={props.t4img}
//           title={props.t4title}
//         />
//       </div>
//       <div className="col-lg-4">
//       <Card
//           img={props.t5img}
//           title={props.t5title}
//         />
//       </div>
//       <div className="col-lg-4">
//       <Card
//           img={props.t6img}
//           title={props.t6title}
//         />
//       </div>
      
//       <div className="col-lg-4">
//       <Card
//           img={props.t7img}
//           title={props.t7title}
//         />
//       </div>
//       <div className="col-lg-4">
//       <Card
//           img={props.t8img}
//           title={props.t8title}
//         />
//       </div>
//       <div className="col-lg-4">
//       <Card
//           img={props.t9img}
//           title={props.t9title}
//         />
//       </div>
//       <div className="col-lg-4">
//       <Card
//           img={props.t10img}
//           title={props.t10title}
//         />
//       </div>
//       </div>
//     </div>
//   );
// }

// export default Coord;
import React from "react";
import "./coord.css";
import Card from "../Card/Card";

function Coord(props) {
  const { batch } = props;
  

  const coordinators = {
    "Student Coordinators": [
      
      {
        img: props.t1img,
        title: props.t1title,
      },
      {
        img: props.t2img,
        title: props.t2title,
      },
      {
        img: props.t3img,
        title: props.t3title,
      },
      {
        img: props.t4img,
        title: props.t4title,
      },
      {
        img: props.t5img,
        title: props.t5title,
      },
    ],
    "Student Coordinator  's": [
      
      {
        img: props.t1img,
        title: props.t1title,
      },
      {
        img: props.t2img,
        title: props.t2title,
      },
      {
        img: props.t3img,
        title: props.t3title,
      },
      {
        img: props.t4img,
        title: props.t4title,
      },
      {
        img: props.t5img,
        title: props.t5title,
      },
    ],
    "Student Coordinators": [
      {
        img: props.t1img,
        title: props.t1title,
      },
      {
        img: props.t2img,
        title: props.t2title,
      },
      {
        img: props.t3img,
        title: props.t3title,
      },
      {
        img: props.t4img,
        title: props.t4title,
      },
      {
        img: props.t5img,
        title: props.t5title,
      },
     
    ],
    "Student Coordinator's": [
      {
        img: props.t1img,
        title: props.t1title,
        text: props.t1text,
      },
      {
        img: props.t2img,
        title: props.t2title,
      },
      {
        img: props.t3img,
        title: props.t3title,
      },
      {
        img: props.t4img,
        title: props.t4title,
      },
      {
        img: props.t5img,
        title: props.t5title,
      },
      {
        img: props.t6img,
        title: props.t6title,
      },
      {
        img: props.t7img,
        title: props.t7title,
      },
      {
        img: props.t8img,
        title: props.t8title,
      },
      {
        img: props.t9img,
        title: props.t9title,
      },
      {
        img: props.t10img,
        title: props.t10title,
      },

      {
        img: props.t11img,
        title: props.t11title,
      },

    ],
  };

  const coordinatorList = coordinators[batch] || [];

  return (
    <div className="coord">
      <h4>{batch}</h4>
      <hr></hr>
      <div className="row">
        {coordinatorList.map((coordinator, index) => (
          <div className="col-lg-4" key={index}>
            <Card img={coordinator.img} title={coordinator.title} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Coord;
