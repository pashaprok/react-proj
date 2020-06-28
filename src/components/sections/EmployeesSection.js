import React from 'react'
import Loading from '../root/LoadingComponent'
import LinkOut from '../root/LinkOut'
import Image from 'react-bootstrap/Image'
import { baseUrl } from '../../shared/baseUrl'


function RenderWorkerItem({ worker }) {
    return (
        <div className="worker-item">
            <Image src={baseUrl + worker.photo} alt="employee" fluid className="dish-photo" />
            <div className="worker-item-body">
                <h4>
                    {worker.name}
                </h4>
                <p>
                    {worker.position}
                </p>
                <div className="social">
                    <LinkOut
                        link={worker.inst}
                        cls="soc-worker-link"
                    >
                        <i className="fab fa-instagram"></i>
                    </LinkOut>
                    <LinkOut
                        link={worker.teleg}
                        cls="soc-worker-link"
                    >
                       <i className="far fa-paper-plane"></i> 
                    </LinkOut>
                    <LinkOut
                        link={worker.mail}
                        cls="soc-worker-link"
                    >
                        <i className="far fa-envelope"></i>
                    </LinkOut>
                </div>
            </div>
        </div>
    );
}

export default function EmployeesSection(props) {
    const listWorkers = props.workers.workers.map((worker) => {
        if (props.workers.isLoading) {
           return(
               <div className="container">
                   <div className="row">            
                       <Loading />
                   </div>
               </div>
           );
       }
       else if (props.workers.errMess) {
           return(
               <div className="container">
                   <div className="row"> 
                       <div className="col-12">
                           <h4>{props.workers.errMess}</h4>
                       </div>
                   </div>
               </div>
           );
       }
       else {return (
            <RenderWorkerItem
                worker={worker}
                key={worker.id}
            />
        );}
    });

    return (
        <div className="container">
            <div className="workers-list">
                {listWorkers}
            </div>
        </div>
    )
}
