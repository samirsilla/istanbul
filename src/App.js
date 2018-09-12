import React, { Component } from 'react';
import './styles/styles.css';
import Tours from './components/Tours';
import Header from './components/Header';
import Hero from './components/Hero';
import Blog from './components/Blog';
import Subscribe from './components/Subscribe';
import Footer from './components/Footer';

class App extends Component {
  state = {
    tours: []
  }

  getTours = async () => {
    const URL = '//api.jsonbin.io/b/5b8edf98db948c68635c9a4b';
    const api_call = await fetch(URL);
    const data = await api_call.json();
    this.setState({ tours: data });
  }

  componentDidMount() {
    this.getTours();
  }

  render() {
    const { tours } = this.state;
    return (
      <div className="App">
        <Header />
        <Hero />
        <Tours tours={tours}/>
        <Blog />
        <Subscribe />
        <Footer />  
      </div>
    );
  }
}

export default App;
