

import { StyleSheet } from 'react-native';
import { Colors } from './Colors';
// import { Colors } from './Colors';

export const commonStyles = StyleSheet.create({
    red: {
        backgroundColor: Colors.red,
    },
    width100Percen: {
        width: '100%',
    },
    // =============
    textCenter: {
        textAlign: 'center',
    },

    whiteBackgroundColor: {
        backgroundColor: Colors.white,
    },
    // margin styles
    /*
          A stands for all
          H stands for horizontal
          V stands for veritcal
      */
    mA5: {
        margin: 5,
    },
    mH5: {
        marginHorizontal: 5,
    },
    mV5: {
        marginVertical: 5,
    },
    mA10: {
        margin: 10,
    },
    mH10: {
        marginHorizontal: 10,
    },
    mV10: {
        marginVertical: 10,
    },

    // padding styles
    /*
          A stands for all
          H stands for horizontal
          V stands for veritcal
      */
    pA10: {
        padding: 10,
    },
    pA15: {
        padding: 15,
    },
    pA20: {
        padding: 20,
    },
    pH10: {
        paddingHorizontal: 10,
    },
    pH15: {
        paddingHorizontal: 15,
    },
    pH20: {
        paddingHorizontal: 20,
    },

    pV10: {
        paddingVertical: 10,
    },
    pV15: {
        paddingVertical: 15,
    },
    pV20: {
        paddingVertical: 20,
    },

    // ======================

    // for eslint
    dummyStyle: {},

    positionAbsolute: {
        position: 'absolute',
    },

    blackColor: {
        color: Colors.black,
    },

    whiteColor: {
        color: Colors.white,
    },

    scrollContainerStyle: {
        flexGrow: 1,
    },

    shadowNormal: {
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    justifyCenter: {
        justifyContent: 'center',
    },

    alignCenter: {
        alignItems: 'center',
    },

    alightRight: {
        alignItems: 'flex-end',
    },
    center: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    rowJustifyCenter: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    rowAlignCenter: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    rowAlignEnd: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
    },
    rowEnd: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
    },
    rowCenter: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    rowBetween: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    alignRight: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
    },
    row: {
        flexDirection: 'row',
    },
    container: {
        flex: 1,
    },
    flexTwo: {
        flex: 2,
    },
    flexOne: {
        flex: 1,
    },
    flexHalf: {
        flex: 1 / 2,
    },
    flexZero: {
        flex: 0,
    },
})