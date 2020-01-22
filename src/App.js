import React, { Component } from 'react';
import Nav from './Nav';
import Header from './Header';
import Footer from './Footer';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      items: []
    };
  }

  async componentDidMount() {
    const apiKey = 'd45cf98059b64c9f826c8dd2c7eb1d76';
    fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`)
      .then(res => res.json())
      .then(
        (data) => {
          this.setState({
            isLoaded: true,
            items: data.articles
          });
        }
      )
  }

          // button option | <div className='url-link'><a href={article.url} target='_blank' rel='noopener noreferrer'>
          // | <button> View Story </button></a></div>

  render() {
    const { isLoaded, items } = this.state;
    
    if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div className='app-main'> 
        <Header />
        <Nav />
        
        <h1 className='trending-header'> Trending Stories  </h1>
        
            {items.map(item => (
              <a className='link-container' href={item.url} target='_blank' rel='noopener noreferrer'>
                  
                  <div className='item-container'> 
                    <h3 className='item-title'> {item.title} </h3>  
                    <p className='item-description'>
                      {item.description}
                    </p>
                    <img alt='Nothing to Show' src={item.urlToImage} />
                    <a href={item.url} target='_blank' rel='noopener noreferrer'> </a> 
                  </div>
              </a>
            ))}
        <Footer />
        </div>
      );
    }
    
  }
}

export default App;
