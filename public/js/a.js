var Tweet = React.createClass({
  getInitialState: function() {
      return {
          alltweets: []
      };
  },
  componentDidMount: function() {

  },
  _getTweets: function() {
      $.get('/tweets/all',function(data) {
          this.setState({ alltweets: data });
      }.bind(this));
  },
  render: function() {
        var handleTweets = this.state.alltweets.map(function(twt) {
            return <TweetBanner key = {twt.id} id={twt.id} tweet={twt.tweet} />
        });
          return (
              <div>
                <TwitterHeader />
                <TwitterPoster />
                {this._getTweets()}
                {handleTweets}
              </div>
          );
  }
});

var TwitterHeader = React.createClass({
  render: function() {
    return (
      <h2> Post your swag ! </h2>
    );
  }
});

var TwitterPoster = React.createClass({
  _handleClick: function() {
      var tweetValue = this.refs.tweetvalue.value;
      console.log(tweetValue);
      $.post('/tweets/create', { tweet: tweetValue }, function(data) {
          console.log(data);
      });
  },
  render: function() {
    return (
      <div>
          <input type="text" placeholder="your tweet ..." ref="tweetvalue" />
          <input type="button" value="Tweet" onClick={this._handleClick} />
      </div>
    );
  }
});

var TweetBanner = React.createClass({
  getInitialState: function() {
      return {
          editinput: false
      };
  },
  _removeItem: function() {
      console.log(this.props.id);
      $.post('/tweets/delete',{ id: this.props.id }, function(data) {
          console.log(data);
      });
  },
  _editItem: function() {
      this.state.editinput ? this.setState({ editinput: false }) : this.setState({ editinput: true });
  },
  _handleSubmit: function() {
      var editedValue = this.refs.editTweetValue.value;
      $.post('/tweets/edit', { id: this.props.id, tweet: editedValue },function() {
          this.setState({ editinput: false });
      }.bind(this));
  },
  render: function() {
      return(
          <div>
              Tweet by Swagger :
              {this.props.tweet}
              {this.state.editinput ? <div> <input type="text"
                  placeholder="edit ..." ref="editTweetValue" />
              <button onClick={this._handleSubmit} > Done </button> </div>: '' }
              <button onClick={this._editItem} > Edit </button>
              <button onClick={this._removeItem} > Remove </button>
          </div>
      );
  }
});

ReactDOM.render(
  <Tweet />,
  document.getElementById('content')
);
