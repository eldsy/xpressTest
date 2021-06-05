import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import { getResources } from '../reducer/action';
import ElementDisplay from './elementDisplay';
import Spinner from 'react-native-loading-spinner-overlay';


class ResourceList extends Component {
  componentDidMount() {
    console.log("componentDidMount props: " + JSON.stringify(this.props));
    console.log("componentDidMount state: " + JSON.stringify(this.state));

    this.props.getResources();
  }
  render() {
    console.log("render props: " + JSON.stringify(this.props));
    console.log("render state: " + JSON.stringify(this.state));
    const { navigation, reducerResponse } = this.props;
    const loading = reducerResponse.loading;
    const result = reducerResponse.result;

    const haveData = result.data && result.data.length != 0

    console.log(loading);
    return (
      <View style={styles.container}>
        <Spinner
          visible={loading}
          textContent={'Loading...'}
          textStyle={styles.spinnerTextStyle}
        />
        {haveData && (<ScrollView>
          {
            result.data.map((resource) => (

              <TouchableOpacity key={resource.id} onPress={() => {
                navigation.navigate('Detail', {
                  type: 'resource',
                  data: resource,
                })
              }}>
                <ElementDisplay title={resource.name} detail={resource.pantone_value} />
              </TouchableOpacity>

            ))
          }
        </ScrollView>)}

        {!haveData && (
          <View style={styles.vide}>
            <Text>La liste des ressources est vide</Text>
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
  getResources
};

export default connect(mapStateToProps, mapDispatchToProps)(ResourceList);
