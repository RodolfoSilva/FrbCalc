import { StyleSheet } from 'react-native';
import Color from 'color';
import { metrics } from '../../styles';

const styles = StyleSheet.create({
    container: {
        paddingTop: metrics.headerPadding,
        height: metrics.headerHeight,
      backgroundColor: `#00375f`,//Color('#005492').darken(0.2).string(),
        borderBottomWidth: 1,
        borderBottomColor: '#EEE',
    },
    wrapper: {
        flex: 1,
        backgroundColor: '#005492',
        paddingHorizontal: metrics.padding,
        justifyContent: 'center',
    },
    title: {
        fontWeight: '500',
        color: '#FFF',
    }
});

export default styles;
