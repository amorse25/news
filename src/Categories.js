import React, { Component } from 'react';
import Header from './Header';
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

  /*getFilter = (e) => {
    const value = e.target.value;
    this.setState({ filter: value })
    this.getArticles();
  }*/

  getCategory() {
      let category = this.props.location.pathname;
      let newCategory = (category.split("/").pop());
      this.setState({ category: newCategory});
      return newCategory
  }
//&sortBy=popularity
//&sortBy=${this.state.filter}&language=en
//https://newsapi.org/v2/top-headlines?category=business&

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

            /*<select id='option-select' onChange={this.getFilter}>
                <option value='-1'> Sort by </option>
                <option value='publishedAt'> Date Published (default) </option>
                <option value='popularity'> Popularity </option>
                <option value='relevancy'> Relevancy </option>
              </select>*/

  render() {
    const { articles, category } = this.state;
      return (
          <div className='categories-main'> 
            <Header />
          <h1 className='categories-h1'> Trending in {category} 

          </h1>
              {articles.map(article => (
                <article key={article.title} className='top-stories'>
                  <div className='article-container'> 
                    <h3 className='item-title'> {article.title} </h3>  
                    <p className='article-description'>
                      {article.description}
                    </p>
                      <img alt='Nothing to Show' src={article.urlToImage} width='100%' height='500'/> 
                      <div className='url-link'><a href={article.url} target='_blank' rel='noopener noreferrer'> <button> View Story </button></a></div>
                  </div>
                </article>
            ))}
          </div>
      );
  }
}

export default Categories;
