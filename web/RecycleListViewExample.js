/***
 Use this component inside your React Native Application.
 A scrollable list with different item type
 */
import React, {Component} from 'react';
import {View, Text, Dimensions} from 'react-native';
import {RecyclerListView, DataProvider, LayoutProvider} from 'recyclerlistview';

const ViewTypes = {
  FULL: 0,
  HALF_LEFT: 1,
  HALF_RIGHT: 2,
};

let containerCount = 0;
const unit = 20

class CellContainer extends React.Component {
  constructor(args) {
    super(args);
    this._containerId = containerCount++;
  }
  render() {
    return (
      <View {...this.props}>
        {this.props.children}
        <Text>Cell Id: {this._containerId}</Text>
      </View>
    );
  }
}


/***
 * To test out just copy this component and render in you root component
 */
export default class RecycleTestComponent extends React.Component {
  constructor(args) {
    super(args);

    let {width} = Dimensions.get('window');

    //Create the data provider and provide method which takes in two rows of data and return if those two are different or not.
    let dataProvider = new DataProvider((r1, r2) => {
      console.log('r1: ', r1, r2, ', dataProvider: ', 
      this.state.dataProvider.getSize(), 
      ', first: ', this.state.dataProvider.getFirstIndexToProcessInternal(),
      ', start: ', this.state.dataProvider.startIndex,
      ', end: ', this.state.dataProvider.endIndex)
      return r1 !== r2;
    });

    //Create the layout provider
    //First method: Given an index return the type of item e.g ListItemType1, ListItemType2 in case you have variety of items in your list/grid
    //Second: Given a type and object set the height and width for that type on given object
    //If you need data based check you can access your data provider here
    //You'll need data in most cases, we don't provide it by default to enable things like data virtualization in the future
    //NOTE: For complex lists LayoutProvider will also be complex it would then make sense to move it to a different file
    this._layoutProvider = new LayoutProvider(
      index => {
        if (index % 3 === 0) {
          return ViewTypes.FULL;
        } else if (index % 20 === 0) {
          return ViewTypes.HALF_LEFT;
        } else {
          return ViewTypes.HALF_RIGHT;
        }
      },
      (type, dim) => {
        switch (type) {
          case ViewTypes.HALF_LEFT:
            dim.width = width / 2 - 0.0001;
            dim.height = 160;
            break;
          case ViewTypes.HALF_RIGHT:
            dim.width = width / 2;
            dim.height = 160;
            break;
          case ViewTypes.FULL:
            dim.width = width;
            dim.height = 140;
            break;
          default:
            dim.width = 0;
            dim.height = 0;
        }
      },
    );

    this._rowRenderer = this._rowRenderer.bind(this);

    //Since component should always render once data has changed, make data provider part of the state
    a = this._generateArray(1, unit+1)
    dataProvider.hookBottom = this.jack
    console.log("hookBottom: ", dataProvider.hookBottom, ', jack: ', this.jack)
    this.state = {
      dataProvider: dataProvider.cloneWithRows(a, true, 0),
      segment: 1,
    };
  }

  _generateArray(from, to) {
    let arr = new Array(to - from);
    for (let i = from; i < to; i++) {
      arr[i-from] = i.toString();
    }
    return arr;
  }

  //Given type and data return the view component
  _rowRenderer(type, data) {
    //You can return any view here, CellContainer has no special significance
    switch (type) {
      case ViewTypes.HALF_LEFT:
        return (
          <CellContainer style={styles.containerGridLeft}>
            <Text>Data: {data}</Text>
          </CellContainer>
        );
      case ViewTypes.HALF_RIGHT:
        return (
          <CellContainer style={styles.containerGridRight}>
            <Text>Data: {data}</Text>
          </CellContainer>
        );
      case ViewTypes.FULL:
        return (
          <CellContainer style={styles.container}>
            <Text>Data: {data}</Text>
          </CellContainer>
        );
      default:
        return null;
    }
  }

  jack = () => {
    // console.log('jack state: ', this.state.segment)
    console.log('jack state segment: ', this.state.segment, ', data: ', this.state.dataProvider.getAllData())
    from = this.state.segment * unit + 1
    to = from + unit

    const appendArrary = this._generateArray(from, to)
    // let origArrary = this.state.dataProvider.getAllData();
    
    // const totalArrary = origArrary.concat(appendArrary)
    console.log('jack appendArrary: ', appendArrary)
    // console.log('jack totalArrary: ', totalArrary)
    setTimeout(() => {
      this.setState({
        segment: this.state.segment + 1,
        dataProvider: this.state.dataProvider.cloneWithRows(appendArrary, true, from - 1),
      })
    }, 0);
  }

  _onEndReached() {
   
  }

  render() {
    return (
      <RecyclerListView
        renderAheadOffset={0}
        layoutProvider={this._layoutProvider}
        dataProvider={this.state.dataProvider}
        rowRenderer={this._rowRenderer}
        onEndReached={() => this._onEndReached()}
        onEndReachedThreshold={30}
        // extendedState	={() => ()}
      />
    );
  }
}
const styles = {
  container: {
    justifyContent: 'space-around',
    alignItems: 'center',
    flex: 1,
    backgroundColor: '#00a1f1',
  },
  containerGridLeft: {
    justifyContent: 'space-around',
    alignItems: 'center',
    flex: 1,
    backgroundColor: '#ffbb00',
  },
  containerGridRight: {
    justifyContent: 'space-around',
    alignItems: 'center',
    flex: 1,
    backgroundColor: '#7cbb00',
  },
};
