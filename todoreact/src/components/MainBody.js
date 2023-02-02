import Sidebar from './Sidebar'

function MainBody()  {
	
    return(
        <div className = "mainBody">
          <div className ="subBody"><p>Main Content</p></div>
          <Sidebar />
        </div>
    );
}

export default MainBody;