import React  from 'react'

const NewsItem = (props) => {


  // NewsItem Component  SEt in News Component
  
  //props ki jageh this.props class component mai
    let {title,description ,imageurl ,newsUrl, author, date, source} = props 
    return (
      <div className = "my-3">
      <div className ="card">
      <span className ="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"> {source}
                      </span>
            <img src= {!imageurl?"https://www.notebookcheck.net/fileadmin/Notebooks/News/_nc3/csm_geforce_rtx_4080_product_photo_001_7_a4f5f5ba77.jpg":imageurl} className ="card-img-top" alt="..."/>
            <div className ="card-body">
                <h5 className ="card-title">{title}... 
                 </h5>
                <p className ="card-text">{description}...</p>
                <p className="card-text"><small className="text-muted">By {!author ? "Unknown":author} on {new Date(date).toGMTString()}</small></p>
                <a rel="noreferrer" href = {newsUrl} target ="_blank" className ="btn btn-sm btn-dark">Read Some more.</a>
            </div>
        </div>
      </div>
    )
  }


export default NewsItem
