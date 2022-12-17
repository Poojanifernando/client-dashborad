import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from "react-router-dom";
import "../../css/Form.css"


const DeviceRegistration = () => {


    return (
        <div>
            <div className='before'>
                <h1 className='Title'>Device Registration</h1>
            </div>
            <div className='aa'>
                <form className='bb card'>
                    <div class="form-row">
                        <div class="form-group col-md-6">
                            <label for="DeviceID">Device  ID  :</label><br />
                            <input type="text" class="inputTypes" placeholder="Device  ID" />
                        </div>
                        <div class="form-group col-md-6">
                            <label for="DeviceDescription">Device Description  :</label><br />
                            <textarea type="text" class="inputTypes" placeholder="Device Description" />
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="form-group col-md-6">
                            <label for="DeviceName">Device Name  :</label><br />
                            <input type="text" class="inputTypes" placeholder="Device Name" />
                        </div>
                        <div class="form-group col-md-6">
                            <label for="Parameters">Parameters  :</label><br />
                            <input type="text" class="inputTypes" placeholder="Parameters" />
                        </div>
                    </div>
                    <div className='outer'>
                        <div className='inner'>
                            <button className="btn btn-primary  saveBTN" type="submit" >Save </button>
                            <button className="btn btn-primary cansalBTN" type="submit" >Cancel </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default DeviceRegistration;