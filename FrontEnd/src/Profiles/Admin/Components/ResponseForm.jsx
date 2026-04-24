import React from 'react'
import emailjs from "emailjs-com";

export default function ResponseForm(props) {

    const user = props.data;
    
      function sendMail(e) {
        e.preventDefault();

        emailjs.sendForm('service_s56f53g', 'template_37x69ps', e.target, 'user_6oaXt1eWNRefAgXanGLeY')
            .then((result) => {
                console.log(result.text);
               
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset()
    }
    return (
        <div >
            
      
            <div className="container">
                
                <form onSubmit={sendMail}>
                    <div className="row mx-auto">
                        <div className="col-8 form-group mx-auto">
                            <input type="text" className="form-control inp" name="name" defaultValue={user.name} />
                        </div>
                        <div className="col-8 form-group pt-2 mx-auto">
                            <input type="email" className="form-control inp" name="user_email" defaultValue={user.email} />
                        </div>

                        <div className="col-8 form-group pt-2 mx-auto">
                            <textarea className="form-control inp" id="" cols="30" rows="2" name="message" defaultValue={user.message} ></textarea>
                        </div>
                        <div className="col-8 form-group pt-2 mx-auto">
                            <textarea className="form-control inp" id="" cols="30" rows="2" placeholder="Reply" name="reply" />
                        </div>


                        <div className="col-8 pt-3 mx-auto">
                            <input type="submit" className="btn button" value="Send Response" ></input>

                            <input type="button" className="btn button m-3" value="Back" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample"></input>

                        </div>
                    </div>
                </form>
            </div>
        </div>

    )
}

