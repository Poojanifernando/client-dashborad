import Card from 'react-bootstrap/Card';
import "../css/CardView.css";
import SubCardView from './SubCardView';




const   DashboardDeviceView = () => {

  return (
    <div>       
    <div className='paddingtocard'>
    {/* {machines?.map((machines,index)=>{
                          return(
      */}
    <Card className='padingto'>
      <Card.Body>
        <Card.Title className='cardheader'><b className='titlebarmachine'>Device I -
          {/* {machines?.machineID} */}
          </b></Card.Title>
        <div>
        <SubCardView/>
    </div>
      </Card.Body>
      
    </Card>
    


   
{/*   
    )})} */}
  
        </div>
   
    </div>
   
    

  );
}

export default DashboardDeviceView;