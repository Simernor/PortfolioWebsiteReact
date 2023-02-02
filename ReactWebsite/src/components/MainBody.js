import Sidebar from './Sidebar'

function MainBody()  {
	
    return(
        <div className = "mainBody">
          <Sidebar />
          <div className ="subBody">
            <div className = "cards">
              <p>Main Body Card 1</p>
            </div>
            <div className = "cards">
              <p>Main Body Card 2</p>
            </div>
          </div>
        </div>
    );
}

export default MainBody;