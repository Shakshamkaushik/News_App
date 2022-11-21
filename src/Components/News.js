import React, {useEffect , useState} from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from 'prop-types'

// import InfiniteScroll from "react-infinite-scroll-component";

const  News = (props) => {

const [articles , setArticles] = useState([])
const [loading , setLoading] = useState(true)
const [page , setPage] = useState(1)
const [totalResults , setTotalResults] = useState(0)



  const capitalLizeFirstLetter = (string) =>{
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  

  const  updateNews = async() => {
    props.setProgress(30);
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apikey=c002f27868dd4bbdaf4b5532bdbc5cec&page=${page+1}&pageSize=${props.pageSize}`;
    setPage(page + 1)
    setLoading(true);
    let data = await fetch(url);
    let parsedData = await data.json()
    setArticles(parsedData.articles);
    setTotalResults(parsedData.totalResults);
    setLoading(false);

    //yeh calss yeh set state hai kese set krte hai
    // this.setState({articles: parsedData.articles, 
    // totalResults: parsedData.totalResults,
    // loading: false,
    // })
    props.setProgress(100);
  }
 
  useEffect(() => {
    document.title = `${capitalLizeFirstLetter(props.category)} - NewsInfo`;
    updateNews();
  }, [])

  // eska kam yeh useEffect kr rha hai
//   async  componentDidMount(){

// this.updateNews();
//   }

   const handleNextClick = async () =>{
  //   // if(!(this.state.page + 1 > Math.ceil(this.state.totalResults/props.pageSize))){
        
  //   //      let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apikey=c002f27868dd4bbdaf4b5532bdbc5cec&page=${this.state.page + 1}&pageSize=${props.pageSize}`;
  //   //         this.setState({loading : true});
  //   //         let data = await fetch(url);
  //   //         let parsedData = await data.json()
  //   //         this.setState({
  //   //             page:this.state.page + 1,
  //   //             articles:parsedData.articles,
  //   //             loading : false
  //   //         })
  //   //     }
   setPage(page + 1);
    updateNews();
     }
   
   const handlePreviousClick = async () =>{
  //   // let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apikey=c002f27868dd4bbdaf4b5532bdbc5cec&page=${this.state.page - 1}&pageSize=${props.pageSize}`;
  //   // this.setState({loading : true});
  //   // let data = await fetch(url);
  //   // let parsedData = await data.json()
    
  //   // this.setState({
  //   //     page:this.state.page - 1,
  //   //     articles:parsedData.articles,
  //   //     loading : false
  //   // })
  //  this.setState({page : this.state.page - 1});
    setPage(page - 1);
    updateNews();
  }

  // const fetchMoreData = async () => {   
  //   const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apikey=c002f27868dd4bbdaf4b5532bdbc5cec&page=${page+1}&pageSize=${props.pageSize}`;
  //   setPage(page+1) 
  //   let data = await fetch(url);
  //   let parsedData = await data.json()
  //   setArticles(articles.concat(parsedData.articles))
  //   setTotalResults(parsedData.totalResults)
  // };
    return (
      <>
     
        <h1 className = "text-center" style= { { margin: '35px 0px', marginTop: '90px' }}>News HeadLine on-{capitalLizeFirstLetter(props.category)}</h1>
        {/* yeh mera loading ka spinner tha */}
        {loading && <Spinner/>}
        {/* <InfiniteScroll
                    dataLength={articles.length}
                    next={fetchMoreData}
                    hasMore={articles.length !== totalResults}
                    loader={<Spinner/>}
                >  */}
            <div className="container my-3">
        <div className="row">
          {/* {!this.state.loading && this.state.articles.map((element) => { */}
          {!loading && articles.map((element) => {
             return <div className="col-md-4" key ={element.url}>
              {/* NewsItem Involves There   */}
              <NewsItem  title = {element.title?element.title.slice(0,45):""} description = {element.description?element.description.slice(0,88):""}
                imageurl = {element.urlToImage} newsUrl = {element.url} 
                author = {element.author} date = {element.publishedAt} source = {element.source.name}/>
            </div>;
          })}
        </div>
        </div>
        {/* </InfiniteScroll> */}
        
        

      {/*  THese are simle logic for next and previous button */}
         <div className="container d-flex justify-content-between"> 
        <button disabled = {page <= 1}type="button" className ="btn btn-outline-dark" 
        onClick={handlePreviousClick}>&#8592; Previous</button>
        <button disabled ={page + 1 > Math.ceil(totalResults/props.pageSize)} type="button" className ="btn btn-outline-dark" onClick={handleNextClick}>Next &#8594;</button>
       
        </div>
      </>
    )
  }

//function mai defaultProps & PropTYpes last mai krte hai
News.defaultProps = {
  country: 'in',
  pageSize: 8,
  category:'general',
}

News.propTypes = {
  country : PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
}


export default News;