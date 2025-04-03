import React from 'react'
import SuggestionsS from '../components/Suggestions'
import NewsN from '../components/News'
import NavbarN from '../components/Navbar'
import SidebarS from '../components/Sidebar'
import { BiSearch } from "react-icons/bi";

function Network() {
  return (
    <div className="community-page">
      <NavbarN />
      <div className="container-fluid">
        <div className="row">
          {/* Sidebar column */}
          <div className="col-md-2 bg-light sidebar">
            <SidebarS />
          </div>
          
          {/* Main content column */}
          <div className="col-md-7 p-3 main-content">
            {/* Search bar */}
            <div className="container mb-4">
              <div className="row">
                <div className="col-12">
                  <form className="d-flex">
                    <div className="input-group">
                      <input className="form-control form-control-lg" type="search" placeholder="Search" aria-label="Search" />
                      <button className="btn btn-primary px-4" type="submit">
                        <BiSearch size={24} color="#ffffff" />
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>

            <div>
              <h3>People You Want To Connect</h3>
            </div>
            
            {/* Groups */}
            <div className="groups-container">
              {/* Long Term Investing */}
              <div className="card mb-4 border-0 shadow-sm">
                <div className="card-body d-flex">
                  <div className="me-3">
                    <img 
                      src="avat.jpg" 
                      alt="Long Term Investing" 
                      className="rounded-circle" 
                      width="100" 
                      height="100" 
                    />
                    <div className="text-center mt-2">
                      <small className="text-muted">220 Followers</small>
                    </div>
                  </div>
                  <div className="flex-grow-1">
                    <div className="d-flex justify-content-between align-items-start">
                      <h4 className="mb-2">Long Term Investing</h4>
                      <button className="btn btn-outline-danger rounded-pill px-4">Follow</button>
                    </div>
                    <p className="text-muted">All Post For Educational Purposes Only.</p>
                  </div>
                </div>
              </div>
              
              {/* Short Term Investing */}
              <div className="card mb-4 border-0 shadow-sm">
                <div className="card-body d-flex">
                  <div className="me-3">
                    <img 
                      src="avat2.jpg" 
                      alt="Short Term Investing" 
                      className="rounded-circle" 
                      width="100" 
                      height="100" 
                    />
                    <div className="text-center mt-2">
                      <small className="text-muted">423 Followers</small>
                    </div>
                  </div>
                  <div className="flex-grow-1">
                    <div className="d-flex justify-content-between align-items-start">
                      <h4 className="mb-2">Short Term Investing</h4>
                      <button className="btn btn-outline-danger rounded-pill px-4">Follow</button>
                    </div>
                    <p className="text-muted">All Post For Educational Purposes Only.</p>
                  </div>
                </div>
              </div>
              
              {/* Ideas For Wealth Generation */}
              <div className="card mb-4 border-0 shadow-sm">
                <div className="card-body d-flex">
                  <div className="me-3">
                    <img 
                      src="avat3.jpg" 
                      alt="Ideas For Wealth Generation" 
                      className="rounded-circle" 
                      width="100" 
                      height="100" 
                    />
                    <div className="text-center mt-2">
                      <small className="text-muted">315 Followers</small>
                    </div>
                  </div>
                  <div className="flex-grow-1">
                    <div className="d-flex justify-content-between align-items-start">
                      <h4 className="mb-2">Ideas For Wealth Generation</h4>
                      <button className="btn btn-outline-danger rounded-pill px-4">Follow</button>
                    </div>
                    <p className="text-muted">All Post For Educational Purposes Only.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right sidebar column */}
          <div className="col-md-3 bg-light p-3 right-sidebar">
            <SuggestionsS />
            <NewsN />
          </div>
        </div>
      </div>
      
      {/* Add custom CSS to fix the layout and remove scrollbars */}
      <style jsx>{`
        .community-page {
          display: flex;
          flex-direction: column;
          height: 100vh;
        }
        
        .container-fluid {
          flex: 1;
          display: flex;
          overflow: hidden;
        }
        
        .row {
          flex: 1;
          width: 100%;
          margin: 0;
          display: flex;
        }
        
        .sidebar {
          height: calc(100vh - 56px);
          overflow: hidden;
          position: sticky;
          top: 56px;
        }
        
        .main-content {
          flex: 1;
          overflow-y: auto;
          height: calc(100vh - 56px);
          padding-bottom: 20px;
        }
        
        .right-sidebar {
          height: calc(100vh - 56px);
          overflow: hidden;
          position: sticky;
          top: 56px;
        }
        
        /* Hide scrollbars for Chrome, Safari and Opera */
        .sidebar::-webkit-scrollbar,
        .right-sidebar::-webkit-scrollbar {
          display: none;
        }
        
        /* Hide scrollbars for IE, Edge and Firefox */
        .sidebar,
        .right-sidebar {
          -ms-overflow-style: none;  /* IE and Edge */
          scrollbar-width: none;  /* Firefox */
        }
      `}</style>
    </div>
  )
}

export default Network