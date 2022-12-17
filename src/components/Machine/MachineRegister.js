import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from "react-router-dom";
import "../../css/Form.css"


const MachineRegister = () => {


    return (
        <div>
            <div className='before'>
                <h1 className='Title'>Machine Registration</h1>
            </div>
            <div className='aa'>
                <form className='bb card'>
                    <div class="form-row">
                        <div class="form-group col-md-6">
                            <label for="MachineID">Machine ID  :</label><br />
                            <input type="text" class="inputTypes" placeholder="Machine ID" />
                        </div>
                        <div class="form-group col-md-6">
                            <label for="MachineDescription">Machine Description  :</label><br />
                            <textarea type="text" class="inputTypes" placeholder="Machine Description" />
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="form-group col-md-6">
                            <label for="MachineName">Machine Name  :</label><br />
                            <input type="text" class="inputTypes" placeholder="Machine Name" />
                        </div>
                        <div class="form-group col-md-6">
                            <label for="MachineImage">Machine Image  :</label><br />
                            <input type="file" class="inputTypes" />
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

export default MachineRegister;