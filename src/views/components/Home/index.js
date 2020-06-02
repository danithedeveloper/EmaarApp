import React from 'react';
import {
    FlatList,
    View,
    SafeAreaView,
    Text,
    ActivityIndicator,
} from 'react-native';
import styles from './styles';
import {connect} from 'react-redux';
import Header from '../shared/Header';
import {loadList} from '../../../redux/actions/homeActions';
import {Colors} from '../../../infrastructure/assets/Colors';


class Home extends React.Component {
    static navigationOptions = {
        header: null,
        isPulled: false,
    };

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.fetchList();
    }

    fetchList = () => {
        this.props.fetchData();
    };

    render() {
        const {data, loader} = this.props;

        return (
            <SafeAreaView>
                {loader ? (
                    <View style={styles.Container}>
                        <ActivityIndicator size="large" color={Colors.darkBlue}/>
                    </View>
                ) : (
                    <View style={styles.mainContainer}>
                        <Header/>
                        <FlatList
                            data={data}
                            onRefresh={() => this.fetchList()}
                            refreshing={loader}
                            renderItem={({item}) => (
                                <View style={styles.tile}>

                                    <View style={styles.tileView}>
                                        <Text style={styles.holidayNameText}>{item.summary}</Text>
                                    </View>

                                    <View style={styles.tileView}>
                                        <Text style={styles.holidayDate}>Start Date:</Text>
                                        <Text style={styles.holidayDate}>{item.start.date}</Text>
                                    </View>

                                    <View style={styles.tileView}>
                                        <Text style={styles.holidayDate}>End Date:</Text>
                                        <Text style={styles.holidayDate}>{item.end.date}</Text>
                                    </View>

                                </View>
                            )}
                        />
                    </View>
                )}
            </SafeAreaView>
        );
    }
}

function mapStateToProps(state) {
    const {data, loader} = state.listScreen;
    return {
        data,
        loader,
    };
}

const mapDispatchToProps = {
    fetchData: loadList,
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Home);
