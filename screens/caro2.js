import * as React from 'react';
import {
  StatusBar,
  Animated,
  Text,
  Image,
  View,
  StyleSheet,
  Dimensions,
} from 'react-native';

const {width, height} = Dimensions.get('screen');

const bgs = ['#4e81d9', '#4ec4d9', '#4ed991', '#d4d94c'];

const DATA = [
    {
      key: '3571572',
      title: 'Switch Off Insurance',
      description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci quisquam suscipit magni dicta,',
      image: 'https://ia902503.us.archive.org/31/items/car-insurance_202206/car-insurance.png',
    },
    {
      key: '3571747',
      title: 'Buy Insurance Policy ',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci quisquam suscipit magni dicta,',
      image: 'https://ia601502.us.archive.org/0/items/checkup_202206/checkup.png',
    },
    {
      key: '3571680',
      title: 'Switch On Insurance ',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci quisquam suscipit magni dicta,',
      image: 'https://ia902507.us.archive.org/9/items/distance_202206/distance.png',
    },
    {
      key: '3571603',
      title: ' Rewards for the points accumulated',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci quisquam suscipit magni dicta,',
      image: 'https://ia601404.us.archive.org/6/items/health-insurance_202206/health-insurance.png',
    },
  ];

const Indicator = ({scrollX}) => {
    return (
      <View style={{position: 'absolute', bottom: 100, flexDirection: 'row'}}>
        {DATA.map((_, i) => {
          //previous , current , next
          const inputRange = [(i - 1) * width, i * width, (i + 1) * width];
          const scale = scrollX.interpolate({
            inputRange,
            outputRange: [0.8, 1.4, 0.8],
            extrapolate: 'clamp',
          });
  
          const opacity = scrollX.interpolate({
            inputRange,
            outputRange: [0.6, 1, 0.6],
            extrapolate: 'clamp',
          });
          return (
            <Animated.View
              key={`indicator-${i}`}
              style={{
                height: 10,
                width: 10,
                borderRadius: 5,
                backgroundColor: '#fff',
                opacity,
                margin: 10,
                transform: [{scale}],
              }}
            />
          );
        })}
      </View>
    );
  };

const Backdrop = ({scrollX}) => {
    //[0 , width , width*2,....]
    const backgroundColor = scrollX.interpolate({
      inputRange: bgs.map((_, i) => i * width),
      outputRange: bgs.map((bg) => bg),
    });
    return (
      <Animated.View style={[StyleSheet.absoluteFillObject, {backgroundColor}]} />
    );
  };

const Square = ({scrollX}) => {
    const YOLO = Animated.modulo(
      Animated.divide(Animated.modulo(scrollX, width), new Animated.Value(width)),1)
  
    const rotate = YOLO.interpolate({
      inputRange:[0,0.5,1],
      outputRange:['35deg','0deg','35deg']
    })
  
    const translateX = YOLO.interpolate({
      inputRange:[0,0.5,1],
      outputRange:[0,-height,0]
    })
  
    return (
      <Animated.View
        style={{
          width:width*2,
          height: width*2,
          backgroundColor: '#fff',
          borderRadius: 86,
          top:-height*0.6,
          left:-height*0.3,
          position:'absolute',
          transform:[
            {rotate},{translateX}
          ]
        }}
      />
    );
  };

const Caro2 = ({navigation}) => {
  
    const scrollX = React.useRef(new Animated.Value(0)).current;

    return (
        <View style={styles.container}>
      <StatusBar hidden />
      <Backdrop scrollX={scrollX} />
      <Square scrollX={scrollX} />
      <Animated.FlatList
        data={DATA}
        keyExtractor={(item) => item.key}
        showsHorizontalScrollIndicator={false}
        scrollEventThrottle={32}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {x: scrollX}}}],
          {useNativeDriver: false},
        )}
        horizontal
        pagingEnabled
        contentContainerStyle={{paddingBottom: 100}}
        renderItem={({item}) => {
          return (
            <View style={{width, alignItems: 'center'}}>
              <View style={{flex: 0.7, justifyContent: 'center', padding: 20}}>
                <Image
                  source={{uri: item.image}}
                  style={{
                    width: width / 3,
                    height: width / 3,
                    resizeMode: 'contain',
                  }}
                />
              </View>
              <View style={{flex: 0.3, paddingLeft:15}}>
                <Text style={{fontWeight: '800', fontSize: 28, color: 'white'}}>
                  {item.title}
                </Text>
                <Text style={{fontWeight: '300', color: 'white',}}>
                  {item.description}
                </Text>
              </View>
            </View>
          );
        }}
      />
    
      <View style={{marginBottom:30, alignItems:'center'}}>
      <Indicator  scrollX={scrollX} />
      </View>
        </View>
    );




};

export default Caro2;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
});

