import { Link } from "react-router-dom";

function Signup() {
    return (
        <div style={{ margin: '20px auto' ,width:'900px',padding:'20px',boxShadow:'3px 4px 5px gray'}} class="card">
            <h1>Start using cord</h1>
            <h2>No long signups. 4 simple questions and you're in.</h2>
            <h6>Where do you want to work?</h6>
            <div>
                <button type="button" class="btn btn-light">London</button>
                <button type="button" class="btn btn-light">NewYork</button>
                <button type="button" class="btn btn-light">Remote</button>
                <button type="button" class="btn btn-light">Elsewhere</button>
                <Link to="/step1"><button type="button" class="btn btn-dark">Next</button></Link>
            </div>
        </div>
    )
}
export default Signup;