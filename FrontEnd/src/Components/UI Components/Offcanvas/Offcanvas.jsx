
import Spinner from "../Spinner/Spinner"

export default function Offcanvas (props){
  
 
    return(
        <div
        className="offcanvas offcanvas-start"
        tabIndex="-1"
        id="offcanvasExample"
        aria-labelledby="offcanvasExampleLabel"
        data-test="Offcanvas-testing"
      >
        <div className="offcanvas-header">
          <button
            type="button"
            className="btn-close text-reset"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
       
        <div className="offcanvas-body">
           { props.loading ? (<Spinner></Spinner>) : props.doctorCard } 
        </div>
      </div>
    )
}