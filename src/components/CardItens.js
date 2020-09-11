import React from 'react';
import { View } from 'react-native';
import { Card, Rating } from 'react-native-elements';

const CardItens = (props) => {
    let styles = {
        image : {
            width: 200,
            height:200
        },
        subtitulo:{

        },
        titulo:{

        },
        rating:{
            backgroundColor: "#aaffff",
        }
    }


    return (
        <Card>
            <Card.Title>{props.titulo}</Card.Title>
            <Card.Divider/>
            <View>
                <Image
                    style={styles.image}
                    resizeMode="cover"
                    source={props.url}
                />
                    <Text style={styles.subtitulo}>{props.subtitulo}</Text>
                    <Rating imageSize={20} readonly startingValue="{4.5}" style={styles.rating} />
            </View>
        </Card>
    );

}

export default CardItens;