import React from 'react'
import { Pagination } from 'react-bootstrap'
 
export default class LeadReportTable extends React.Component {

constructor(props) {
    super(props)
    this.state =  {
      activePage: 1,
      limit : 10,
      start : 1,
    };
    this.handleSelect = this.handleSelect.bind(this)
 }

handleSelect(eventKey) {
    let { limit } = this.state;
    let start = (eventKey-1)*limit; //API accepts actual start value -1
    let end = eventKey*limit;

    this.setState({
      activePage: eventKey,
      start : start+1,
    });
    this.props.callback(start,end)
    this.props.handleSubmit(0,start,end)
}

render(){
  const reportData = this.props;
  const { activePage , limit , start } = this.state;
  const totalPages = Math.ceil(this.props['Total Count']/limit);
  const LeadsArr = Object.keys(reportData.countwise).map((k) => reportData.countwise[k][0])

  return (
                      <div className="company-info-table">
                        <div className="table-responsive">
                          <table className="table table-bordered table-striped">
                            <thead>
                              <tr>
                                <th scope="row">SR no.</th>
                                <th>Date</th>
                                <th>Caller</th>
                                <th>Area</th>
                              </tr>
                            </thead>
                            <tbody>
                            {
                              LeadsArr.map((leads,key)=>{  
                                  return (
                                    <tr key={leads.UniqueField+key}>
                                        <td>{start+key}</td>
                                        <td>{leads.Date}</td>
                                        <td>{(leads.Salutation) ? leads.Salutation+'.' : null}{leads.CallerName}</td>
                                        <td>{leads.SearchArea || '-'}</td>
                                    </tr>)
                                    
                                })
                            }
                            </tbody>
                          </table>
                        </div>
                        <div id="paginationfeebkreportdiv">
                              <nav className="feedback-pagination">
                                    <Pagination
                                      prev next 
                                      bsSize="medium"
                                      ellipsis
                                      boundaryLinks
                                      items={totalPages}
                                      maxButtons={5}
                                      activePage={this.state.activePage}
                                      onSelect={this.handleSelect} />
                              </nav>
                        </div> 
                      </div>
       );             
  }     
}               