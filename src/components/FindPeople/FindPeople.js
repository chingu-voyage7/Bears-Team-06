import React, { Component } from "react";
import SearchBar from "./SearchBar/SearchBar";
import PeopleItem from "./PeopleItem/PeopleItem";
import InfiniteScroll from "react-infinite-scroller";
import { connect } from "react-redux";
import { fetchPeople } from "../../store/actions/people/people";

class FindPeople extends Component {
  state = {
    //start index of the people model
    skip: 0,
    //how many to fetch at a particular request
    limit: 1,
    searchText: "",
    searching: false,
    fetching: false,
  };

  renderPeople = () => {
    if (this.props.people.fetched && this.props.people.lists.length === 0)
      return;

    return this.props.people.lists.map(people => (
      <div className="col-md-3">
        <PeopleItem name={people.local.username} following={2} />
      </div>
    ));
  };

  loadMorePeople = async () => {
    if (!this.state.fetching) {
      this.setState({ fetching: true });
      console.log("Skip thing", this.state.skip);
      await this.props.fetchPeople(this.state.skip, this.state.limit);
      this.setState(prevState => {
        return { skip: prevState.skip + prevState.limit, fetching: false };
      });
    }
  };
  render() {
    return (
      <div className="FindPeople">
        <div className="container">
          <SearchBar />
          <div className="FindPeople__people-lists">
            <InfiniteScroll
              pageStart={0}
              loadMore={this.loadMorePeople}
              hasMore={this.props.people.scrollable}
              loader={
                <div className="loader" key={0}>
                  Loading ...
                </div>
              }
            >
              <div className="row">{this.renderPeople()}</div>
            </InfiniteScroll>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  people: state.people,
});

export default connect(
  mapStateToProps,
  { fetchPeople },
)(FindPeople);
