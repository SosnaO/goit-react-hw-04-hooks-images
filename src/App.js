/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react';
import imagesApi from './components/imagesApi/imagesApi';
import Searchbar from './components/Searchbar/Searchbar';
import ImageGallery from './components/ImageGallery/ImageGallery';
import ImageGalleryItem from './components/ImageGalleryItem/ImageGalleryItem'
import Button from './components/Button/Button';
import Modal from './components/Modal/Modal';
import Loader from 'react-loader-spinner';
import './styles.css';

export default function App() {
  const [hits, setHits]=useState([]);
  const [currentPage, setCurrentPage]=useState(1);
  const [currentPageImages, setCurrentPageImages]=useState([]);
  const [searchQuery, setSearchQuery]=useState('');
  const [isLoading, setIsLoading]=useState(false);
  const [error, setError]=useState(null);
  const [showModal, setShowModal]=useState(false); 
  const [modalUrl, setModalUrl]=useState('');
  const [modalAlt, setModalAlt]=useState('');

  useEffect(()=>{
    if (!searchQuery) {
      return;
      }
    fetchHits();
  },[searchQuery]);
  const onChangeQuery = searchQuery => {
    setSearchQuery(searchQuery);
    setCurrentPage(1);
    setHits([]);
    setError(null)
  }
  const toggleModal = () => {
    setShowModal(!showModal);
  };
  const fetchHits = () => {
    const options = { searchQuery, currentPage };
    setIsLoading(true);
    imagesApi
    .fetchHits(options)
    .then(hits => {
      setHits(prevHits => [...prevHits, ...hits]);
      setCurrentPage(currentPage=>currentPage + 1);
      setCurrentPageImages([...hits])
        if (hits.length === 0) {
          setError('Nothing was find by your query. Try again.');
      };
      })
      .then(() => {
                window.scrollTo({
                  top: document.documentElement.scrollHeight,
                  behavior: 'smooth',
                })
              })
    .catch(error => setError(error))
    .finally(() => setIsLoading(false));
  };
  const onClickImageGalleryItem = e => {
    setModalUrl(e.currentTarget.getAttribute('url'));
    setModalAlt(e.currentTarget.getAttribute('alt'));
    toggleModal();
  };
  const shouldRenderLoadMoreButton = () => {
    const should = !(currentPageImages.length < 12) && !isLoading;
    return should;
    } 
    return (
      <>
        <Searchbar onChangeQuery={onChangeQuery} />
        {error && (
          <p >
           {error}
          </p>
        )}
        <ImageGallery>
          {hits.map(({ id, tags, webformatURL, largeImageURL }) => (
            <ImageGalleryItem key={id} alt={tags} src={webformatURL} url={largeImageURL} onClick={onClickImageGalleryItem} />
          ))}
        </ImageGallery>
        {isLoading && 
        <Loader 
        style={{textAlign: 'center'}}
        type="Puff"
        color="#00BFFF"
        height={100}
        width={100}
        timeout={3000} //3 secs 
        /> }     
        {shouldRenderLoadMoreButton() && <Button  onfetchHits={fetchHits}/> }
        {showModal && (
          <Modal src={modalUrl} alt={modalAlt} onClose={toggleModal} />
        )}  
      </>      
    )    
   }   









 




















// old code
// class App extends Component {
//   state = {
//     hits: [],
//     currentPage: 1,
//     currentPageImages: [],
//     searchQuery: '',
//     isLoading: false,
//     error: null,
//     largeImage: '',
//     showModal: false,
//     modalUrl: '',
//     modalAlt: '',
//   };
//   componentDidUpdate(prevProps, prevState) {
//     if (prevState.searchQuery !== this.state.searchQuery) {
//       this.fetchHits();
//     }
//   } 
//   onChangeQuery = searchQuery => {
//     this.setState({ 
//       searchQuery: searchQuery, 
//       currentPage: 1, 
//       hits: [], 
//       error: null, 
//     })
//   }
//   toggleModal = () => {
//     this.setState(({ showModal }) => ({
//       showModal: !showModal,
//     }))
//   }
//   fetchHits = () => {
//     const { searchQuery, currentPage } = this.state;
//     const options = { searchQuery, currentPage };
//     this.setState({ isLoading: true });
//     imagesApi
//     .fetchHits(options)
//     .then(hits => {
//       this.setState( prevState => ({
//         hits: [...prevState.hits, ...hits], 
//         currentPage: prevState.currentPage + 1,
//         currentPageImages: [...hits], 
//       }));
//       if (hits.length === 0) {
//           this.setState({
//             error: 'Nothing was find by your query. Try again.',});
//       }})
//       .then(() => {
//                 window.scrollTo({
//                   top: document.documentElement.scrollHeight,
//                   behavior: 'smooth',
//                 })
//               })
//     .catch(error => this.setState({ error }))
//     .finally(() => this.setState({ isLoading: false }));
//   };
//   onClickImageGalleryItem = e => {
//     this.setState({
//       modalUrl: e.currentTarget.getAttribute('url'),
//       modalAlt: e.currentTarget.getAttribute('alt'),
//     });
//     this.toggleModal();
//   };
//   render() {
//     const { hits, currentPageImages, isLoading, error, showModal, modalAlt, modalUrl } = this.state;
//     const shouldRenderLoadMoreButton = !(currentPageImages.length < 12) && !isLoading;
//     return (
//       <>
//         <Searchbar onChangeQuery={this.onChangeQuery} />
//         {error && (
//           <p >
//            {error}
//           </p>
//         )}
//         <ImageGallery>
//           {hits.map(({ id, tags, webformatURL, largeImageURL }) => (
//             <ImageGalleryItem key={id} alt={tags} src={webformatURL} url={largeImageURL} onClick={this.onClickImageGalleryItem} />
//           ))}
//         </ImageGallery>

//         {isLoading && 
       
//         <Loader 
//         style={{textAlign: 'center'}}
//         type="Puff"
//         color="#00BFFF"
//         height={100}
//         width={100}
//         timeout={3000} //3 secs 
//         /> }     
                    
//         {shouldRenderLoadMoreButton && <Button  onfetchHits={this.fetchHits}/> }

//         {showModal && (
//           <Modal src={modalUrl} alt={modalAlt} onClose={this.toggleModal} />
//         )}  
//       </>      
//     )    
//   }   
// };
// export default App;
