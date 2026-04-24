import React, { useState, useMemo } from "react";
import PropTypes from "prop-types";
import { FaStar } from "react-icons/fa";

const Rate = ({ count, rating, color, onRating }) => {
  const [hoverRating, setHoverRating] = useState();

  const getColor = (index) => {
    if (hoverRating >= index) {
      return color.filled;
    } else if (!hoverRating && rating >= index) {
      return color.filled;
    }

    return color.unfilled;
  };

  const starRating = useMemo(() => {
    return Array(count)
      .fill(0)
      .map((_, i) => i + 1)
      .map((idx) => (
        <FaStar
  
          key={idx}
          size={24}
       
          icon="star"
          onClick={() => onRating(idx)}
          style={{ color: getColor(idx) }}
          onMouseEnter={() => setHoverRating(idx)}
          onMouseLeave={() => setHoverRating(0)}
        />
      ));
  }, [count, rating, hoverRating]);

  return <div>{starRating}</div>;
};

Rate.propTypes = {
  count: PropTypes.number,
  rating: PropTypes.number,
 
 
};

Rate.defaultProps = {
  count: 5,
  rating: 0,
  color: {
    filled: "#f5eb3b",
    unfilled: "#DCDCDC",
  },
};

export default Rate;























// import React, { useState,useEffect,useMemo } from "react";
// import PropTypes from "prop-types";
// import { FaStar } from "react-icons/fa";

// import { useDispatch ,useSelector } from 'react-redux';

// import {updateRating,DoctorById} from '../../../Redux/Action/PatientAction/PatientAction'

// const Rate = (props) => {
//   var id = props.id;
//   const dispatch=useDispatch()
  
// useEffect(() => {
 
//   dispatch(DoctorById(id))
// }, [dispatch,id])
// const Doctorprofile = useSelector((state) => state.Patient.DoctorById);

//     console.log(   Doctorprofile)

//  var color= {
//           filled: "#FFBA5A",
//           unfilled:"#a9a9a9",
//         }
 
//   const [hoverRating, setHoverRating] = useState(0);
//   const [rating, setRating] = useState(0);
//   const getColor = (index) => {
//     if (hoverRating >= index) {
//       return color.filled;
//     } else if (!hoverRating && rating >= index) {
//       return color.filled;
//     }

//     return color.unfilled;
//   };

//   const starRating = useMemo(() => {
//     return Array(5)
//       .fill(0)
//       .map((_, i) => i + 1)
//       .map((idx) => (
//         <FaStar
//           key={idx}
//           className="cursor-pointer"
//           icon="star"
//           onClick={(rate) =>{ setRating(rate); console.log(rate); var ratee={rate:rate};  dispatch(updateRating(id,ratee));}}
//           style={{ color: getColor(idx) }}
//           onMouseEnter={() => setHoverRating(idx)}
//           onMouseLeave={() => setHoverRating(0)}
//         />
//       ));
//   }, [ rating, getColor,hoverRating]);

//   return <div>{starRating}</div>;
// };

// Rate.propTypes = {
//   count: PropTypes.number,
//   rating: PropTypes.number,
//   onChange: PropTypes.func,
//   color: {
//     filled: PropTypes.string,
//     unfilled: PropTypes.string,
//   },
// };

// Rate.defaultProps = {
//   count: 5,
//   rating: 0,
//   color: {
//     filled: "#f5eb3b",
//     unfilled: "#DCDCDC",
//   },
// };

// export default Rate;




// import React, { useMemo, useState } from "react";
// import PropTypes from "prop-types";
// import { FaStar } from "react-icons/fa";
// import { useSelector } from "react-redux";


// const Rate = ({ count, rating, color, onRating }) => {
//   const Doctorprofile = useSelector((state) => state.Patient.DoctorById.rate);
//   console.log(Doctorprofile);
//     const [hoverRating, setHoverRating] = useState(Doctorprofile);
  
//     const getColor = (index) => {
//       if (hoverRating >= index) {
//         return color.filled;
//       } else if (!hoverRating && rating >= index) {
//         return color.filled;
//       }
  
//       return color.unfilled;
//     };
  
//     const starRating = useMemo(() => {
//       return Array(count)
//         .fill(0)
//         .map((_, i) => i + 1)
//         .map((idx) => (
//             <FaStar
//             key={idx}
          
//             size={24}
//             className="cursor-pointer"
//             icon="star"
//             onClick={() => onRating(idx)}
//             style={{ color: getColor(idx) }}
//             onMouseEnter={() => setHoverRating(idx)}
//             onMouseLeave={() => setHoverRating(0)}
//           />
//         ));
//     }, [count, rating, getColor,onRating,hoverRating]);
  
//     return <div>{starRating}</div>;
//   };
  
//   Rate.propTypes = {
//     count: PropTypes.number,
//     rating: PropTypes.number,
//     onChange: PropTypes.func,
//     color: {
//       filled: PropTypes.string,
//       unfilled: PropTypes.string,
//     },
//   };
  
//   Rate.defaultProps = {
//     count: 5,
//     rating: 0,
//     color: {
//       filled: "#FFBA5A",
//       unfilled:"#a9a9a9"
//     },
//   };
  
//   export default Rate;