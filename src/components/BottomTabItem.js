import * as React from 'react';
import { View} from 'react-native'
import { color, metrics } from '../constants';
import { IconX, ICON_TYPE } from '../icons';
import Text from './Text'



export function TabBarIcon(props) {
    return (
        <View style={{ flex: 1,marginTop:8, justifyContent: 'center', alignItems: 'center' }}>
            <IconX
                origin={props.origin != null ? props.origin : ICON_TYPE.FONT_AWESOME5}
                name={props.name}
                size={props.size != null ? props.size : 20}
                color={props.focused ? color.tint : color.gray}
            />
            
        </View>
    );
}

export function TabBarText(props) {
    return (
            <Text style={{color:props.focused ? color.tint: color.gray,fontSize:10}}>{props.title}</Text>
    );
}

