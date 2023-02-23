import { Link } from "react-router-dom";

export default function Step3() {
    return (
        <div style={{ margin: '20px auto' ,width:'900px',padding:'20px',boxShadow:'3px 4px 5px gray'}}>
            <h2>Start using cord</h2>
            <h3>No long signups. 4 simple questions and you're in.</h3>
            <h6>Setup your profile...</h6>
            <div>
                <button type="button" class="btn btn-light">Import From LinkedIn</button>
                <button type="button" class="btn btn-light">Upload Your CV</button>
                <Link to="/step4"><button type="button" class="btn btn-dark">Next</button></Link>
            </div>
        </div>
    )
}