import React, { Component } from 'react';
import './App.css';
import Nav from './Nav';
import Header from './Header';


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
              <article key={item.title} className='top-stories'>
                <div className='item-container'> 
                  <h3 className='item-title'> {item.title} </h3>  
                  <p className='item-description'>
                    {item.description}
                  </p>
                  <img alt='Nothing to Show' src={item.urlToImage} />
                  <a href={item.url} target='_blank' rel='noopener noreferrer'> <button> View Story </button> </a> 
                  
                </div>
              </article>
            ))}
        </div>
      );
    }
    
  }
}

export default App;
