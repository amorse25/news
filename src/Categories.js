import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import './App.css';

class Categories extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      articles: [],
      category: '',
    };
  }

  async componentDidMount() {
      this.getArticles();
  }


  getCategory() {
      let category = this.props.location.pathname;
      let newCategory = (category.split("/").pop());
      this.setState({ category: newCategory});
      return newCategory
  }

  async getArticles() {
    const topCategory = this.getCategory();
    const apiKey = 'd45cf98059b64c9f826c8dd2c7eb1d76';
    fetch(`https://newsapi.org/v2/top-headlines?country=us&category=${topCategory}&apiKey=${apiKey}`)
      .then(res => res.json())
      .then(
        (data) => {
          this.setState({
            isLoaded: true,
            articles: data.articles,
          });
        }
      )
  }


  render() {
    const { articles, category } = this.state;
      return (
          <div className='categories-main'> 
          <Header />
          <h1 className='categories-h1'> Trending in {category} 

          </h1>
              {articles.map(article => (
                <a className='link-container' href={article.url} target='_blank' rel='noopener noreferrer'>
                  <div className='article-container'> 
                    <img alt='Nothing to Show' src={article.urlToImage} /> 
                    <h3 className='item-title'> {article.title} </h3>  
                      <p className='article-description'>
                        {article.description}
                      </p>
                  </div>
                </a>
            ))}
            <Footer />
          </div>
      );
  }
}

export default Categories;
