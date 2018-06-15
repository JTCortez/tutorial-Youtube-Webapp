import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
const API_KEY = 'AIzaSyB7VhohaEUrDhxgGaZRyDGjzR3p03UqM78'
//downwards data flow

//Create a new component. This component produces HTML
//ALWAYS MAKE ONE COMPONENT PER FILE
class App extends Component{
  constructor(props){
    super(props)

    this.state = {
      videos: [],
      selectedVideo: null
    };

    this.videoSearch('community opening')
  }

  videoSearch(term) {
    YTSearch({key: API_KEY, term: term}, (videos) => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
       });
    }); //only works when (state's key == function's variable name)
       //this.setState({ videos: videos }); //
  }

  render(){
    const videoSearch = _.debounce((term) => {this.videoSearch(term) }, 300);

    return (
      <div>
        <SearchBar onSearchTermChange={videoSearch} />
        <VideoDetail video={this.state.selectedVideo}/>
        <VideoList
        onVideoSelect={selectedVideo => this.setState({selectedVideo})}
        videos={this.state.videos}/>
      </div>
    );
  }
}
//Need to instantiate our components before rendering

//Take the component's generated HTML, and display it on the page (DOM)
ReactDOM.render(<App />, document.querySelector('.container'));
