import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import { getUsers } from '../reducer/action';
import ElementDisplay from './elementDisplay';
import Spinner from 'react-native-loading-spinner-overlay';


class UserList extends Component {


  componentDidMount() {
    console.log("componentDidMount props: " + JSON.stringify(this.props));
    console.log("componentDidMount state: " + JSON.stringify(this.state));
    this.props.getUsers();
  }
  render() {

    console.log("render props: " + JSON.stringify(this.props));
    console.log("render state: " + JSON.stringify(this.state));
    const { navigation, reducerResponse } = this.props;

    const loading = reducerResponse.loading;
    const result = reducerResponse.result;

    const haveData = result.data && result.data.length != 0

    return (
      <View style={styles.container}>
        <Spinner
          visible={loading}
          textContent={'Loading...'}
          textStyle={styles.spinnerTextStyle}
        />
        {haveData && (<ScrollView>
          {
            result.data.map((user) => (

              <TouchableOpacity key={user.id} onPress={() => {
                navigation.navigate('Detail', {
                  type: 'user',
                  data: user,
                })
              }}>
                <ElementDisplay title={user.first_name} detail={user.email} />
              </TouchableOpacity>

            ))
          }
        </ScrollView>)}

        {!haveData && (
          <View style={styles.vide}>
            <Text>La liste des utilisateurs est vide</Text>
          </View>

        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#E8EAED',
  },
  vide: {
    flex: 1,
    alignItems: 'center'
  },
  spinnerTextStyle: {
    color: '#007F92',
  }
});

const mapStateToProps = state => {
  console.log("mapStateToProps state: " + JSON.stringify(state));
  return {
    reducerResponse: { loading: state.loading, result: { ...state.result } }
  };
};


const mapDispatchToProps = {
  getUsers
};

export default connect(mapStateToProps, mapDispatchToProps)(UserList);
