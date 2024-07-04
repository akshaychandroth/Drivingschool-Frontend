import './App.css';
import Admin from './Components/Admin';
import {  Routes,Route } from 'react-router-dom';
import Studentreg from './Components/Studentreg';
import Tutorreg from './Components/Tutorreg';
import Login from './Components/Login';
import Cardreg from './Components/Cardreg'
import Adminpanel from './Components/Adminpanel';
import Studentpanel from './Components/Studentpanel';
import Remotestdpanel from './Components/Remotestdpanel';
import Tutorpanel from './Components/Tutorpanel';
import Remotetutpanel from './Components/Remotetutpanel';
import Addvechicle from './Components/Addvechicle';
import Approve from './Components/Approve';
import Students from './Components/Students';
import Localtutor from './Components/Localtutor';
import Listtutors from './Components/Listtutors';
import AdminAssignTutor from './Components/AdminAssignTutor ';
import Listvechicle from './Components/Listvechicle';
import EditCarForm from './Components/EditCarForm';
import EditTutor from './Components/EditTutor';
import Mystudents from './Components/Mystudents';
import Package from './Components/Package';
import Listpackage from './Components/Listpackage';
import Editpackage from './Components/Editpackage';
import Home from './Components/Home'
import Packagestd from './Components/Packagestd';
import SelectedPackages from './Components/SelectedPackages';
import Session from './Components/Session';
import StudentPage from './Components/StudentPage';
import SelectedSessions from './Components/SelectedSessions';
import TutorSession from './Components/TutorSession';
import Packagesrmt from './Components/Packagesrmt';
import Remotepackages from './Components/Remotepackages';
import Ratesession from './Components/Ratesession';
import Tutorselected from './Components/Tutorselected';
import Tutorrating from './Components/Tutorrating';
import Remoteprofile from './Components/Remoteprofile';
import Tutorprofile from './Components/Tutorprofile';
function App() {
  return (
    <div className="App">



 <Routes>
<Route path='/' element={<Home/>} />
<Route path='/login' element={<Login/>} />
<Route path='/register'  element={<Cardreg/>} />
<Route path='/adminregister'  element={<Admin/>}/>
<Route path='/studentregister'   element={<Studentreg/>}/>
<Route path='/remotetutorreg'   element={<Tutorreg/>}/>
<Route path='/adminpanel'  element={<Adminpanel/>}/>
<Route path='/studentpanel' element={<Studentpanel/>} />
<Route path='/remotestdpanel' element={<Remotestdpanel/>}/>
<Route path='/tutorpanel' element={<Tutorpanel/>}/>
<Route path='/remotetutpanel' element={<Remotetutpanel/>}/>
<Route path='/addvechicle' element={<Addvechicle/>} />
<Route path='/approve' element={<Approve/>} />
<Route path='/students' element={<Students/>}/>
<Route path='/localtutor' element={<Localtutor/>}/>
<Route path='/listtutors'  element={<Listtutors/>} />
<Route path='/assign-tutor' element={<AdminAssignTutor/>} />
<Route path='/listcars' element={<Listvechicle/>}/>
<Route path='/listcars/edit/:id' element={<EditCarForm/>}/>
<Route path='/listtutors/edit/:id' element={<EditTutor/>}/>
<Route path='/assignedstudents/:id' element={<Mystudents/>}/>
<Route path='/addpackage' element={<Package/>}/>
<Route path='/listpackage' element={<Listpackage/>}/>
<Route path='/listpackage/edit/:id' element={<Editpackage/>}/>
<Route path='/packages/:id' element={<Packagestd/>}/>
<Route path='/selectedpackages/:id' element={<SelectedPackages/>} />
<Route path='/addsession' element={<Session/>}/>
<Route path='/getsessions/:id' element={<StudentPage/>}/>
<Route path='/mysessions/:id' element={<SelectedSessions/>}/>
<Route path='/tutorgetsession/:id' element={<TutorSession/>}/>
<Route path='/packagesremote/:id' element={<Packagesrmt/>}/>
<Route path='/selectedpackagesremote/:id' element={<Remotepackages/>}  />
<Route path='/parti/:partiId/sessions/:sessionId' element={<Ratesession/>} />
<Route path='/tutormysession/:id' element={<Tutorselected/>}/>
<Route path='/tutorrating/:id' element={<Tutorrating/>}/>
<Route path='remotetutorprofile/:id' element={<Remoteprofile/>}/>
<Route path='/tutorprofile/:id' element={<Tutorprofile/>}/>

  </Routes> 



   </div>
  );
}


export default App;


