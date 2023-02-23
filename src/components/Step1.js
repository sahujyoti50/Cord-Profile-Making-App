import { Link } from "react-router-dom";

export default function Step1() {
    return (
        <div style={{ margin: '20px auto' ,width:'900px',padding:'20px',boxShadow:'3px 4px 5px gray'}} class="card">
            <h2>Start using cord</h2>
            <h3>No long signups. 4 simple questions and you're in.</h3>
            <h6>Where are you eligible to work without visa sponsorship?</h6>
            <div>
                <button type="button" class="btn btn-light">UK</button>
                <button type="button" class="btn btn-light">US</button>
                <button type="button" class="btn btn-light">EU</button>
                <button type="button" class="btn btn-light">Other Place</button>
                <Link to="/step2"><button type="button" class="btn btn-dark">Next</button></Link>
            </div>
        </div>
    )

}