import {createUseStyles} from 'react-jss';
import sizes from '../../../../assets/styles/abstracts/sizes';




const styles = {
    header:{
        fontSize:sizes.extraLargeFontSize,
    }
}

export const useCategoryStyle = createUseStyles(styles);