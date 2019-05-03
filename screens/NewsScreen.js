import React, { Component } from "react";
import { View, FlatList } from "react-native";
import { ListItem, Icon } from 'react-native-elements'


class NewsScreen extends Component {
  state = {
    loading: false,
    data: [],
    page: 1,
    seed: 1,
    error: null,
    refreshing: false
  };
  makeRemoteRequest = () => {
    const { page, seed } = this.state;
    const url = `https://randomuser.me/api/?seed=${seed}&page=${page}&results=20`;
    this.setState(
      prevState => ({ ...prevState, loading: true }),
      async () => {
        try {
          const res = await fetch(url);
          const json = await res.json();
          const data =
            page === 1 ? json.results : [...this.state.data, ...json.results];
          this.setState(prevState => ({
            ...prevState,
            data,
            loading: false,
            refreshing: false,
            error: json.error
          }));
        } catch (error) {
          this.setState(prevState => ({ ...prevState, error, loading: false }));
        }
      }
    );
  };
  componentDidMount() {
    this.makeRemoteRequest();
  }
  render() {
    return (
      <View>
        <FlatList
          data={this.state.data}
          renderItem={({ item }) => (
            <ListItem
              roundAvatar
              leftAvatar={{ source: { uri: item.picture.thumbnail }}}
              title={`${item.name.first} ${item.name.last}`}
              containerStyle={{ borderBottomWidth: 0 }}
            />
          )}
          keyExtractor={item => item.email}
        />
      </View>
    );
  }
}
export default NewsScreen;
