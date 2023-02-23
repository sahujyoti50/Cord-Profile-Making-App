import { Link } from "react-router-dom";

export default function Step4() {
    return (
        <div>
            <h3 style={{ textAlign: 'center', margin: '20px' }}>Plaese Fill following Details</h3>
            <div class="card" style={{ width: '500px', margin: 'auto' }}>
                {/* Email */}
                <div class="mb-3" style={{ width: '400px', margin: 'auto' }}>
                    <label for="exampleFormControlInput1" class="form-label">Email address</label>
                    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                </div>
                {/* full name */}
                <div class="mb-3" style={{ width: '400px', margin: 'auto' }}>
                    <label for="fullName" class="form-label">Full Name</label>
                    <input type="text" class="form-control" id="fullName" placeholder="Ex:Ethan Mars" />
                </div>
                {/* phone number */}
                <div class="mb-3" style={{ width: '400px', margin: 'auto' }}>
                    <label for="phoneNumber" class="form-label">Phone Number</label>
                    <input type="number" class="form-control" id="phoneNumber" placeholder="Ex:+46 787654321" />
                </div>
                {/* Cover letter */}
                <div class="mb-3" style={{ width: '400px', margin: 'auto' }}>
                    <label for="exampleFormControlTextarea1" class="form-label">Cover Letter</label>
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
                {/* upload your CV */}
                <div class="mb-3" style={{ width: '400px', margin: 'auto' }}>
                    <label for="formFile" class="form-label">Upload Your CV</label>
                    <input class="form-control" type="file" id="formFile" />
                </div>
            </div>
            <Link to="/homepage"><button type="button" class="btn btn-dark" style={{marginLeft:'700px'}}>Submit</button></Link>
        </div>
    )
}