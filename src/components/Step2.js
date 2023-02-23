import { Link } from "react-router-dom";

export default function Step2() {
    return (
        <div style={{ margin: '20px auto' ,width:'900px',padding:'20px',boxShadow:'3px 4px 5px gray'}}>
            <h2>Start using cord</h2>
            <h3>No long signups. 4 simple questions and you're in.</h3>
            <h6>What job type are you looking for? (pick one)</h6>
            <div>
                <button type="button" class="btn btn-light">Permanent</button>
                <button type="button" class="btn btn-light">Part Time</button>
                <button type="button" class="btn btn-light">Contract</button>
                <button type="button" class="btn btn-light">Internship</button>
                <Link to="/step3"><button type="button" class="btn btn-dark">Next</button></Link>
            </div>
        </div>
    )
}