import React from 'react'

class Profile extends React.Component {
    constructor() {
        super()

    }
    render() {

        console.log(this.props.user)
        return (
            <>
                <div class="card table response">
                    <h3>Profile</h3>
                    <table class="table table-striped" >

                        <tr>
                            <td>ID#</td>
                            <td>{this.props.user.id}</td>
                        </tr>
                        <tr>
                            <td>Email</td>
                            <td>{this.props.user.email}</td>
                        </tr>
                        <tr>
                            <td>
                                First Name
                            </td>
                            <td>{this.props.user.firstName}</td>
                        </tr>
                        <tr>
                            <td>
                                Last Name
    </td>
                            <td>{this.props.user.lastName}</td>
                        </tr>
                        <tr>
                            <td>
                                Mobile Number
    </td>
                            <td>{this.props.user.mobileNumber}</td>
                        </tr>
                        <tr>
                            <td>
                                Location
    </td>
                            <td>{this.props.user.location}</td>
                        </tr>

                    </table>
                </div>
            </>

        );
    }
}

export default Profile